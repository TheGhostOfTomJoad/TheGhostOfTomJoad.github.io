module Main exposing (..)

--import Browser.Navigation as Navigation
--import File exposing (File)
--import File.Select as Select

import Browser
import CodeMirror exposing (KeyMap(..), Mode(..), Theme(..), codemirrorHelper)
import Element exposing (..)
import Styles exposing (..)
import Element.Input exposing (button)
import File.Download as Download
import Html exposing (Html, div)
import HtmlHelpers exposing (removeSpaceandControl, textHtml)
import Json.Decode as D
import Time exposing (Weekday(..))


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
    codemirrorHelper HTML Sublime Monokai m.htmleditorValue HTMLEditorChanged


codemirrorCSS : { a | csseditorValue : String } -> Html Msg
codemirrorCSS m =
    codemirrorHelper CSS Sublime Monokai m.csseditorValue CSSEditorChanged


wrapcss : String -> Html msg
wrapcss myCssString =
    Html.node "style" [] [ Html.text myCssString ]


type alias Model =
    { htmleditorValue : String
    , csseditorValue : String
    , viewBoth : Bool

    --    , uploadedCode : Maybe String
    }


init : D.Value -> ( Model, Cmd Msg )
init _ =
    ( { htmleditorValue = " "
      , csseditorValue = ""
      , viewBoth = False

      --     , uploadedCode = Nothing
      }
    , Cmd.none
    )


type Msg
    = NoOp
    | HTMLEditorChanged String
    | CSSEditorChanged String
    | SaveHTML
    | SaveCSS
    | ChangeView



-- upload is not necessary because drag and drop works
-- | Upload
-- | NoUpload
-- | HTMLSelected File
-- | HTMLLoaded String
-- | Sync


update : Msg -> Model -> ( Model, Cmd Msg )
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

        ChangeView ->
            ( { m | viewBoth = not m.viewBoth }, Cmd.none )



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
saveCSSButton =  button buttonstyle { onPress = Just SaveCSS, label = text "💾" }

changeViewButton : Element Msg
changeViewButton =
    button buttonstyle { onPress = Just ChangeView, label = text "🎨" }


saveAndChangeButton : Element Msg
saveAndChangeButton =
    Element.row [ spacing 750 ] [ saveHTMLButton, changeViewButton ]


editorRow : { a | csseditorValue : String, htmleditorValue : String } -> Element msg
editorRow m = Element.column
            textColumnStyle
            [ el [] (html (div [] (wrapcss m.csseditorValue :: textHtml (removeSpaceandControl m.htmleditorValue))))
            ]


viewTwoEditors : { a | htmleditorValue : String, csseditorValue : String } -> Element Msg
viewTwoEditors m =

    Element.row rowStyle
        [ Element.column editorColumnStyle
            [ saveHTMLButton--saveAndChangeButton
            , el smallEditorstyle (html (div [] [ wrapcss smallCodeMirrorCss, codemirrorHTML m ]))--el smallEditorstyle (html (codemirrorHTML m))
            , saveCSSButton
            , el smallEditorstyle (html (div [] [ wrapcss smallCodeMirrorCss, codemirrorCSS m ]))
            ]
        , editorRow m
        ]





viewOneEditor : { a | htmleditorValue : String, csseditorValue : String } -> Element Msg
viewOneEditor m =
    Element.row rowStyle
        [ Element.column editorColumnStyle
            [ saveHTMLButton 
            , el bigEditorStyle (html (div [] [ wrapcss bigCodeMirrorCss, codemirrorHTML m ]))
            ]
        , editorRow m
        ]


viewHelper : a -> (a -> Element msg) -> Html msg
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
        []
        (f m)


view : { a | viewBoth : Bool, htmleditorValue : String, csseditorValue : String } -> Html Msg
view m =
    if m.viewBoth then
        viewHelper m viewTwoEditors

    else
        viewHelper m viewOneEditor



--for debugging
viewOnlyEditor : { a | editorValue : { b | htmleditorValue : String } } -> Html Msg
viewOnlyEditor m =
    codemirrorHTML m.editorValue


subscriptions : Model -> Sub Msg
subscriptions _ =
    Sub.none


htmlExample : String
htmlExample =
    "<p>HTML macht <strong> Spaß </strong> </p>"
