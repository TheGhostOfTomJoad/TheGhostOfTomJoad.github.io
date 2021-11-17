module Main exposing (..)


import Browser.Dom as Dom
import Browser.Events as E
import Browser
import CodeMirror exposing (KeyMap(..), Mode(..), Theme(..), codemirrorHelper)
import Element exposing (..)
import Element.Input exposing (button)
import File.Download as Download
import Html  -- exposing ( Html,div)
import HtmlHelpers exposing (removeSpaceandControl, textHtml)
import Json.Decode as D
import Styles exposing (..)
import Time exposing (Weekday(..))

import Task as Task
import Html.Styled exposing (Html,div,toUnstyled,node)
import Html.Styled.Attributes exposing (css)
import ComputeRemSpace exposing (cMcssFunHelperBoth, cMcssFunHelper1Both, computeAvHeightBig,computeAvWidthBig,computeAvHeightSmall,computeAvWidthSmall)

cMcssFunBoth : Model -> (Float -> Float) -> (Float -> Float) -> Html msg
cMcssFunBoth m ch cw = m |> lookForSize |> cMcssFunHelperBoth (cMcssFunHelper1Both ch cw )

cMcssFunBig : Model -> Html msg
cMcssFunBig m = cMcssFunBoth m computeAvHeightBig computeAvWidthBig


cMcssFunSmall : Model -> Html msg
cMcssFunSmall m = cMcssFunBoth m computeAvHeightSmall computeAvWidthSmall

cMcssFunHide : Model -> Html msg
cMcssFunHide m = cMcssFunBoth m (\_-> 0) (\_-> 0)

-- resFunBoth : Model -> (Float -> Float) -> (Float -> Float) -> Html.Styled.Attribute msg
-- resFunBoth m ch cw = m |> lookForSize |>  (cMcssFunHelper1Both  ch cw) |> css

-- resFunBig : Model -> Html.Styled.Attribute msg
-- resFunBig m =  resFunBoth m computeAvHeightBig computeAvWidthBig



-- globalCMcss : Html msg
-- globalCMcss = global
--     [ class "CodeMirror"
--         [ Css.height (Css.px 860), Css.width (Css.px 900)
--         ]
--     ]



type alias Size = 
    { width : Float
    , height : Float
    }

lookForSize : Model -> Size
lookForSize m = m.size |> Maybe.withDefault {height = 808 , width = 830 }



main : Program D.Value Model Msg
main    =
    Browser.element
        { init = init
        , view = view
        , update = update
        , subscriptions = subscriptions
        }


codemirrorHTML : { a | htmleditorValue : String } -> Html Msg
codemirrorHTML m =
    codemirrorHelper HTML Sublime Monokai m.htmleditorValue HTMLEditorChanged


codemirrorCSS : { a | csseditorValue : String } -> Html Msg
codemirrorCSS m =
    codemirrorHelper CSS Sublime Monokai m.csseditorValue CSSEditorChanged


--wrapcss : String -> Html msg
wrapcss : String -> Html msg
wrapcss myCssString =
    node "style" [] [ Html.Styled.text myCssString ]


type alias Model =
    { htmleditorValue : String
    , csseditorValue : String
    , viewBoth : Bool
    ,size : Maybe Size 


    --    , uploadedCode : Maybe String
    }


--init : D.Value -> ( Model, Cmd Msg )
init : a -> (Model, Cmd Msg)
init _ =
    ( { htmleditorValue = ""
      , csseditorValue = ""
      , viewBoth = False
      , size = Nothing
      }
    , Dom.getViewport |> Task.perform Initialize
    )


type Msg
    = NoOp
    | HTMLEditorChanged String
    | CSSEditorChanged String
    | SaveHTML
    | SaveCSS
    | ChangeView
    | Initialize Dom.Viewport
    | ChangeViewSize Float Float




-- upload is not necessary because drag and drop works
-- | Upload
-- | NoUpload
-- | HTMLSelected File
-- | HTMLLoaded String
-- | Sync


update : Msg -> Model-> (Model, Cmd msg)
update msg m =
    case msg of
        NoOp ->
            ( m, Cmd.none )

        HTMLEditorChanged v ->
            if m.htmleditorValue /= v then
                ( { m | htmleditorValue = v }, Cmd.none )

            else
                ( m, Cmd.none )

        CSSEditorChanged v ->
            if m.csseditorValue /= v then
                ( { m | csseditorValue = v }, Cmd.none )

            else
                ( m, Cmd.none )

        -- case    m.uploadedCode of Nothing ->     if m.editorValue /= v then ( { m | editorValue = v }, Cmd.none ) else ( m, Cmd.none )
        --                           Just s  -> ({ m | editorValue = s ,uploadedCode = Nothing},Cmd.none)
        SaveHTML ->
            ( m, Download.string "my_code.html" "text/html" m.htmleditorValue )

        SaveCSS ->
            ( m, Download.string "my_code.css" "text/css" m.csseditorValue )

        Initialize viewport -> computeNewWindow viewport.viewport.width viewport.viewport.height m
            -- let newWindow  =   {width = viewport.viewport.width, height = viewport.viewport.height}  in
            -- ( {m |size  = Just newWindow }, Cmd.none)
            --(m,Cmd.none)
        ChangeViewSize w h -> computeNewWindow  w h m
        
        ChangeView ->
            ( { m | viewBoth = not m.viewBoth }, Cmd.none )




computeNewWindow : Float -> Float -> Model -> (Model , Cmd msg)
computeNewWindow w h m = let newWindow  =   {width = w, height = h}  in
            ( {m |size  = Just newWindow }, Cmd.none)

-- Upload ->
--     ( m, Select.file [ "text/plain", "text/html" ] HTMLSelected )
-- HTMLSelected file ->
--     ( m, file |> File.toString |> Task.perform HTMLLoaded )
-- HTMLLoaded s ->
--     ( { m | htmleditorValue = s, uploadedCode = Just s }, Cmd.none )
-- NoUpload ->
--     ( { m | htmleditorValue = " ", uploadedCode = Just " " }, Cmd.none )
--Sync -> ( m, Cmd.none)




saveHTMLButton : Element Msg
saveHTMLButton =
    button buttonstyle { onPress = Just SaveHTML, label = text "💾" }


saveCSSButton : Element Msg
saveCSSButton =
    button buttonstyle { onPress = Just SaveCSS, label = text "💾" }


changeViewButton : Element Msg
changeViewButton =
    button buttonstyle { onPress = Just ChangeView, label = text "🎨" }


saveAndChangeButton : Element Msg
saveAndChangeButton =
    Element.row [ spacing 750 ] [ saveHTMLButton, changeViewButton ]



resultCol : { a | csseditorValue : String, htmleditorValue : String } -> Element Msg
resultCol m =
    Element.column
        textColumnStyle
        [ --emptyButton,
          el resultStyle (html (toUnstyled ((div [] ((wrapcss m.csseditorValue) :: textHtml (removeSpaceandControl m.htmleditorValue))))))
        ]


--viewTwoEditors : { a | htmleditorValue : String, csseditorValue : String } -> Element Msg
viewTwoEditors : Model -> Element Msg
viewTwoEditors m =
    Element.row rowStyle
        [ Element.column editorColumnStyle
            [ saveHTMLButton --saveAndChangeButton
            , el smallEditorstyle (html (toUnstyled(div [] [ cMcssFunSmall m, codemirrorHTML m ]))) --el smallEditorstyle (html (codemirrorHTML m))
            , saveCSSButton
            , el smallEditorstyle (html (toUnstyled(div [] [ cMcssFunSmall m, codemirrorCSS m ])))
            ]
        , resultCol m
        ]



viewOneEditor : Model-> Element Msg
viewOneEditor m =
    Element.column rowStyle
        [ saveHTMLButton
        , Element.row rowEditorResStyle
            [ el bigEditorStyle (html (toUnstyled (div [] [cMcssFunBig m, codemirrorHTML m ])))
            , el resultStyle (html (toUnstyled(div [] (wrapcss m.csseditorValue :: textHtml (removeSpaceandControl m.htmleditorValue)))))
    --        , el hideEditor (html (toUnstyled(div [] [ cMcssFunHide m, codemirrorCSS m ])))
            ]
        ]
-- (css[ Css.backgroundColor (Css.rgb 255 255 255)])

viewHelper : a -> (a -> Element msg) -> Html.Html msg
viewHelper m f =
    layoutWith
        { options =
            [ focusStyle
                { borderColor = Just spotifyColors.background
                , backgroundColor = Just spotifyColors.background
                , shadow = Nothing
                }
            ]
        }
        [ height shrink, width shrink ]
        (f m)


view : Model -> Html.Html Msg
view m =
    if m.viewBoth then
        viewHelper m viewTwoEditors--viewTwoEditors

    else
        viewHelper m viewOneEditor



--for debugging


viewOnlyEditor : { a | editorValue : { b | htmleditorValue : String } } -> Html Msg
viewOnlyEditor m =
    codemirrorHTML m.editorValue



--subscriptions : Model -> Sub Msg
subscriptions : a -> Sub Msg
subscriptions _ =
    E.onResize (\w h -> ChangeViewSize (toFloat w) (toFloat h))


htmlExample : String
htmlExample =
    "<p>HTML macht <strong> Spaß </strong> </p>"
