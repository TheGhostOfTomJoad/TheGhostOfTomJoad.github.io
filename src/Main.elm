module Main exposing (..)

-- exposing ( Html,div)
--import Html.Styled.Attributes exposing (css)
--import HtmlHelpers exposing (textHtml,removeSpaceandControl)

import Browser
import Browser.Dom as Dom
import Browser.Events as E
import CodeMirror exposing (KeyMap(..), Mode(..), Theme(..), codemirrorHelper)
import ComputeRemSpace exposing (computeAvHeightBig, computeAvHeightSmall, computeAvWidthBig, computeAvWidthSmall)
import Css
import Css.Global exposing (class, global,id,everything,descendants,typeSelector)
import Element exposing (..)
import Element.Input exposing (button)
import Element.Keyed as EK
import File.Download as Download
import Html
import Html.Styled exposing (Html, div, fromUnstyled, iframe, node, toUnstyled)
import Html.Styled.Attributes exposing (css, srcdoc, style)
import Json.Decode as D
import Styles exposing (..)
import Task as Task



--import Html.Styled.Attributes exposing (src)
--import Time exposing (Weekday(..))
-- cMcssFunBoth : Model -> (Float -> Float) -> (Float -> Float) -> Html msg
-- cMcssFunBoth m ch cw =
--     m |> lookForSize |> cMcssFunHelperBoth (cMcssFunHelper1Both ch cw)
-- cMcssFunBig : Model -> Html msg
-- cMcssFunBig m =
--     cMcssFunBoth m computeAvHeightBig computeAvWidthBig
-- cMcssFunSmall : Model -> Html msg
-- cMcssFunSmall m =
--     cMcssFunBoth m computeAvHeightSmall computeAvWidthSmall
-- cMcssFunHide : Model -> Html msg
-- cMcssFunHide m =
--     cMcssFunBoth m (\_ -> 0) (\_ -> 0)
--h1 w h = global [ class "CodeMirror" [Css.height (Css.px h), Css.width (Css.px w)] ]
-- cmCssHelper : Float -> Float -> Html msg
-- cmCssHelper  h w =
--     global [ class "CodeMirror" [ Css.height (Css.px h), Css.width (Css.px w) ] ]
--cmCssHelper =


cmCssHelper1 : Float -> Float -> List Css.Style
cmCssHelper1 h w =
    [ Css.height (Css.px h), Css.width (Css.px w) ]


--cmCss : Model -> Html msg
cmCss : Model -> Html msg
cmCss m =
    let cssEditorStyle = [id "id-csseditor"  [descendants[everything[ Css.height (Css.px 0), Css.width (Css.px 0) ]]]]
        x = [ class "CodeMirror" (cmCss1 m) ] 
        res = if m.viewBoth then x else cssEditorStyle ++  x in
        global res


cmCss1 : Model -> List Css.Style
cmCss1 m =
    let
        s =
            lookForSize m

        b =
            m.viewBoth
    in
    if b then
        cmCssHelper1 (computeAvHeightSmall s.height) (computeAvWidthSmall s.width)

    else
        cmCssHelper1 (computeAvHeightBig s.height) (computeAvWidthBig s.width)


cmCss2 : Model -> List Css.Style
cmCss2 m =
    let
        s =
            lookForSize m

        b =
            m.viewBoth
    in
    if b then
        cmCssHelper1 (s.height - 70) ((s.width - 90) / 2)

    else
        cmCssHelper1 (s.height - 95) ((s.width - 90) / 2)


otherCss : Html msg
otherCss =
    global [ class "CodeMirror" [ Css.height (Css.vh 90.5) ] ]



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



-- lookForSize : Model -> Size
-- lookForSize m = m.size |> Maybe.withDefault {height = 808 , width = 830 }


lookForSize : Model -> Size
lookForSize m =
    m.size |> Maybe.withDefault { height = 980, width = 1852 }


main : Program D.Value Model Msg
main =
    Browser.element
        { init = init
        , view = view
        , update = update
        , subscriptions = subscriptions
        }


codemirrorHTML : { a | htmleditorValue : String } -> Html Msg
codemirrorHTML m =
    codemirrorHelper Sublime Monokai HTML HTMLEditorChanged "id-htmleditor" m.htmleditorValue


codemirrorCSS : { a | csseditorValue : String } -> Html Msg
codemirrorCSS m =
    codemirrorHelper Sublime Monokai CSS CSSEditorChanged "id-csseditor" m.csseditorValue



--wrapcss : String -> Html msg


wrapcss : String -> Html msg
wrapcss myCssString =
    node "style" [] [ Html.Styled.text myCssString ]


wrapCss2 : String -> String
wrapCss2 css =
    String.concat [ "<style> ", css, " </style>" ]


type alias Model =
    { htmleditorValue : String
    , csseditorValue : String
    , viewBoth : Bool
    , size : Maybe Size

    --    , uploadedCode : Maybe String
    }



--init : D.Value -> ( Model, Cmd Msg )


init : a -> ( Model, Cmd Msg )
init _ =
    ( { htmleditorValue = " <!--Write your HTML Code in this text field-->"
      , csseditorValue = "/* Write your CSS Code in this text field */"
      , viewBoth = True
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


update : Msg -> Model -> ( Model, Cmd msg )
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

        Initialize viewport ->
            computeNewWindow viewport.viewport.width viewport.viewport.height m

        -- let newWindow  =   {width = viewport.viewport.width, height = viewport.viewport.height}  in
        -- ( {m |size  = Just newWindow }, Cmd.none)
        --(m,Cmd.none)
        ChangeViewSize w h ->
            computeNewWindow w h m

        ChangeView ->
            ( { m | viewBoth = not m.viewBoth }, Cmd.none )


computeNewWindow : Float -> Float -> Model -> ( Model, Cmd msg )
computeNewWindow w h m =
    let
        newWindow =
            { width = w, height = h }
    in
    ( { m | size = Just newWindow }, Cmd.none )



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



--resultCol : { a | csseditorValue : String, htmleditorValue : String } -> Element Msg


resultCol : { htmleditorValue : String, csseditorValue : String, viewBoth : Bool, size : Maybe Size } -> Element msg
resultCol m =
    Element.column
        textColumnStyle
        [ --emptyButton,
          el resultStyle (html (toUnstyled (div [] [ renderCode m ]))) --el resultStyle  (html (toUnstyled (renderCode m)))  --

        --el resultStyle (html (toUnstyled (div [] (wrapcss m.csseditorValue :: textHtml (removeSpaceandControl m.htmleditorValue)))))
        ]



--viewTwoEditors : { a | htmleditorValue : String, csseditorValue : String } -> Element Msg
--renderCode : String -> String -> Html msg
--renderCode html css = iframe [srcdoc (String.concat [html, wrapCss2 css])] []
--css [Css.height (Css.pct 100),Css.width (Css.pct 100)]
--renderCode : { a | htmleditorValue : String } -> Html msg
--renderCode m  = iframe [srcdoc m.htmleditorValue, style "border" "none", css [Css.height (Css.vh 90.5),Css.width (Css.pct 100)]] []


renderCode : { htmleditorValue : String, csseditorValue : String, viewBoth : Bool, size : Maybe Size } -> Html msg
renderCode m =
    --iframe [ srcdoc (String.concat [ wrapCss2 m.csseditorValue, " ", m.htmleditorValue ]), style "border" "none", css (cmCss2 m) ] []
    iframe [ srcdoc (prepareCode m.htmleditorValue m.csseditorValue), style "border" "none", css (cmCss2 m) ] []


prepareCode : String -> String -> String
prepareCode html css =
    String.concat
        [ """

<!DOCTYPE html>
<html lang="de">
  <head>
    <meta charset="utf-8">
    <title></title> 
    <style>"""
        , css
        , """
    </style>
</head>
  <body>
  """
        , html
        , """

  </body>
</html>
"""
        ]


-- viewTwoEditors : Model -> Element Msg
-- viewTwoEditors m =
--     Element.row rowStyle
--         [ Element.column editorColumnStyle
--             [ saveHTMLButton --saveAndChangeButton, changeViewButton
--             , el smallEditorstyle (html (toUnstyled (codemirrorHTML m))) --el smallEditorstyle (html (codemirrorHTML m))
--             , saveCSSButton
--             , el smallEditorstyle (html (toUnstyled (codemirrorCSS m)))
--             ]
--         , resultCol m
--         ]


viewTwoEditors m =
    Element.row rowStyle
        [ EK.column editorColumnStyle
            [("buttons" ,(Element.row [][  saveHTMLButton ,  changeViewButton ]))
            , ( "htmlEditor", el smallEditorstyle (html (toUnstyled (codemirrorHTML m))) ) --el smallEditorstyle (html (codemirrorHTML m))
            , ( "saveCSSButton", saveCSSButton )
            , ( "cssEditor", el smallEditorstyle (html (toUnstyled (codemirrorCSS m))) )
            ]
        , resultCol m
        ]

viewOneEditor m =
    Element.row rowStyle
        [ EK.column editorColumnStyle
            [("buttons" ,(Element.row [][  saveHTMLButton ,  changeViewButton ]))
            , ( "htmlEditor", el smallEditorstyle (html (toUnstyled (codemirrorHTML m))) ) --el smallEditorstyle (html (codemirrorHTML m))
            ,  ( "cssEditor", el [Element.height (px 0)] (html (toUnstyled (codemirrorCSS m))) )
            ]
        , resultCol m
        ]



-- viewOneEditor : Model -> Element Msg
-- viewOneEditor m =
--     Element.column rowStyle
--         [ saveHTMLButton
--         , Element.row rowEditorResStyle
--             [ el bigEditorStyle (html (toUnstyled (codemirrorHTML m)))
--             --   , el resultStyle (html (toUnstyled (div [] (wrapcss m.csseditorValue :: textHtml (removeSpaceandControl m.htmleditorValue)))))
--             , el resultStyle (html (toUnstyled (div [] [ wrapcss m.csseditorValue, renderCode m ])))
--             --        , el hideEditor (html (toUnstyled(div [] [ cMcssFunHide m, codemirrorCSS m ])))
--             ]
--         ]
-- -- (css[ Css.backgroundColor (Css.rgb 255 255 255)])


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
        [ height fill, width fill ]
        (f m)


view : Model -> Html.Html Msg
view m =
    toUnstyled
        (div [ css [ Css.height (Css.pct 100.0) ] ]
            [ cmCss m
            , --otherCss,--
              fromUnstyled
                (if m.viewBoth then
                    viewHelper m viewTwoEditors
                    --viewTwoEditors

                 else
                    viewHelper m viewOneEditor
                )
            ]
        )



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
