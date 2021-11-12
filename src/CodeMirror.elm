module CodeMirror exposing (..)

import Html exposing (Html)
import Html.Attributes as Attr
import Html.Events
import Json.Decode as D

type Mode
    = Markdown
    | Haskell
    | Python
    | Preks
    | HTML
    | XML
    | CSS


modeToString : Mode -> String
modeToString m =
    case m of
        Markdown ->
            "markdown"

        HTML ->
            "text/html"

        --"htmlmixed"
        XML ->
            "xml"

        Haskell ->
            "haskell"

        Python ->
            "python"

        Preks ->
            "preks"

        CSS ->
            "text/css"


type Theme
    = Monokai
    | Eighties


themeToString : Theme -> String
themeToString t =
    case t of
        Monokai ->
            "monokai"

        Eighties ->
            "tomorrow-night-eighties"


type KeyMap
    = Vim
    | Emacs
    | Sublime


keyMapToString : KeyMap -> String
keyMapToString m =
    case m of
        Vim ->
            "vim"

        Emacs ->
            "emacs"

        Sublime ->
            "sublime"


codemirrorHelper : Mode -> KeyMap -> Theme -> String -> (String -> value) -> Html value
codemirrorHelper mode km theme content constructor =
    Html.node "code-mirror"
        [ Attr.attribute "mode" <| modeToString mode
        , Attr.attribute "keymap" <| keyMapToString km
        , Attr.attribute "theme" <| themeToString theme
        , Attr.attribute "editorValue" content
        , Html.Events.on "editorChanged" <|
            D.map constructor <|
                D.at [ "target", "editorValue" ] <|
                    D.string
        ]
        []
