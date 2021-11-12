module Main exposing (..)

--import Browser.Navigation as Navigation
--import File exposing (File)
--import File.Select as Select

import Browser
import CodeMirror exposing (KeyMap(..), Mode(..), Theme(..), codemirrorHelper)
import Element exposing (..)
import Element.Background as Background
import Element.Border as Border
import Element.Font as Font
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
      ,viewBoth = False

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
        
        ChangeView -> ({m |viewBoth = not m.viewBoth },Cmd.none)



-- Upload ->
--     ( m, Select.file [ "text/plain", "text/html" ] HTMLSelected )
-- HTMLSelected file ->
--     ( m, file |> File.toString |> Task.perform HTMLLoaded )
-- HTMLLoaded s ->
--     ( { m | htmleditorValue = s, uploadedCode = Just s }, Cmd.none )
-- NoUpload ->
--     ( { m | htmleditorValue = " ", uploadedCode = Just " " }, Cmd.none )
--Sync -> ( m, Cmd.none)


spotifyColors : { background : Color, menubar : Color, topgradient : Color, bottomgradient : Color, primarytext : Color, secondarytext : Color, black : Color }
spotifyColors =
    { background = rgb255 0x12 0x12 0x12
    , menubar = rgb255 0x18 0x18 0x18
    , topgradient = rgb255 0x40 0x40 0x40
    , bottomgradient = rgb255 0x28 0x28 0x28
    , primarytext = rgb255 0xFF 0xFF 0xFF
    , secondarytext = rgb255 0xB3 0xB3 0xB3
    , black = rgb255 0x00 0x00 0x00
    }


buttonstyle : List (Attribute msg)
buttonstyle =
    -- [ padding 20
    -- , Font.bold
    [ Font.color spotifyColors.primarytext

    -- , Border.width 0
    -- , Border.rounded 0
    , Border.color spotifyColors.background
    , Background.color spotifyColors.background
    , Font.size 30
    ]


smallEditorstyle : List (Attribute msg)
smallEditorstyle =
    [ --padding 10 --, spacing 10
      -- , Border.color spotifyColors.background
      -- , Border.width 3
      -- , Border.rounded 6
      width fill
    , height (px 415)
    ]


bigEditorStyle : List (Attribute msg)
bigEditorStyle =
    [ --padding 10 --, spacing 10
      -- , Border.color spotifyColors.background
      -- , Border.width 3
      -- , Border.rounded 6
      width fill
    , height (px 910)
    ]


textstyle : List (Attribute msg)
textstyle =
    [ height fill --(px 803)
    , width fill

    --   , Border.width 3
    --   , Border.rounded 1
    --    , padding 10
    --  , width fill
    , mouseDown []
    , mouseOver []

    --, spacing 20
    -- , Background.color spotifyColors.background--spotifyColors.primarytext
    ]

saveHTMLButton : Element Msg
saveHTMLButton = button buttonstyle { onPress = Just SaveHTML, label = text "💾" }

changeViewButton : Element Msg
changeViewButton = button buttonstyle { onPress = Just ChangeView, label = text "🎨" }

saveAndChangeButton : Element Msg
saveAndChangeButton = Element.row [spacing 750 ] [saveHTMLButton,changeViewButton]


viewTwoEditors : { a | htmleditorValue : String, csseditorValue : String } -> Element Msg
viewTwoEditors m =
    -- case m.uploadedCode of
    --     Nothing ->
    --         Element.column [ height fill, width fill, paddingXY 0 0, spacing 20, Background.color spotifyColors.background ] [ button buttonstyle { onPress = Just NoUpload, label = text "No Upload" }, button buttonstyle { onPress = Just Upload, label = text "Upload" },el editorstyle (html (codemirror HTML Sublime Monokai " ")) ]
    --     Just code ->
    -- Element.column [ height fill, width fill, paddingXY 0 0, spacing 20, Background.color spotifyColors.background ]
    --     [ button buttonstyle { onPress = Just Save, label = text "💾" }
    --, Element.column [ height fill, width fill, paddingXY 0 0, spacing 20, Background.color spotifyColors.background ] [ button buttonstyle { onPress = Just NoUpload, label = text "No Upload" }, button buttonstyle { onPress = Just Upload, label = text "Upload" } ]
    -- , button buttonstyle { onPress = Just Upload, label = text "Upload" }
    -- , button buttonstyle { onPress = Just NoUpload, label = text "No Upload" }
    -- button buttonstyle { onPress = Just Sync, label = text "Sync" }
    Element.row [ Background.color spotifyColors.background, height fill, spacing 20, width fill ]
        -- [ height fill, width fill, paddingXY 0 0, spacing 20, Background.color spotifyColors.background ]
        [ Element.column [ spacing 10, padding 10, height fill, Font.size 14 ]
            [ button buttonstyle { onPress = Just SaveHTML, label = text "💾" } --saveAndChangeButton
            , el smallEditorstyle (html (codemirrorHTML m))
            , button buttonstyle { onPress = Just SaveCSS, label = text "💾" }
            , el smallEditorstyle (html (codemirrorCSS m))
            ]
        , Element.column
            [ Border.color spotifyColors.background
            , Border.widthEach { bottom = 50, left = 10, right = 10, top = 52 }
            , Background.color spotifyColors.primarytext
            , height fill
            , spacing 20
            , padding 20
            , width fill
            ]
            [ el [] (html (div [] (wrapcss m.csseditorValue :: textHtml (removeSpaceandControl m.htmleditorValue)))) ]
        ]


codemirrorcss : String
codemirrorcss =
    ".CodeMirror {/* Set height, width, borders, and global font properties here */font-family: monospace; height: 910px;}"


viewOneEditor : { a | htmleditorValue : String, csseditorValue : String } -> Element Msg
viewOneEditor m =
    Element.row [ Background.color spotifyColors.background, height fill, spacing 20, width fill ]
        [ Element.column [ spacing 10, padding 10, height fill, Font.size 14 ]
            [ button buttonstyle { onPress = Just SaveHTML, label = text "💾" } --saveAndChangeButton
            , el bigEditorStyle (html (div [] [ wrapcss codemirrorcss, codemirrorHTML m ]))
            ]
        , Element.column
            [ Border.color spotifyColors.background
            , Border.widthEach { bottom = 22, left = 20, right = 20, top = 53 }
            , Background.color spotifyColors.primarytext
            , height fill
            , spacing 20
            , padding 20
            , width fill
            ]
            [ el [] (html (div [] (wrapcss m.csseditorValue :: textHtml (removeSpaceandControl m.htmleditorValue))))
            ]
        ]


viewHelper : a -> (a -> Element msg) -> Html msg
viewHelper m f = layoutWith
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
view m = if m.viewBoth  then  viewHelper m viewTwoEditors else viewHelper m viewOneEditor

-- view : Model -> Html Msg
-- view m =
--     layoutWith
--         { options =
--             [ focusStyle
--                 { borderColor = Just spotifyColors.background
--                 , backgroundColor = Just spotifyColors.background
--                 , shadow = Nothing
--                 }
--             ]
--         }
--         []
--         (vieTwoEditors m)




viewOnlyEditor : { a | editorValue : { b | htmleditorValue : String } } -> Html Msg
viewOnlyEditor m =
    codemirrorHTML m.editorValue


subscriptions : Model -> Sub Msg
subscriptions _ =
    Sub.none


htmlExample : String
htmlExample =
    "<p>HTML macht <strong> Spaß </strong> </p>"
