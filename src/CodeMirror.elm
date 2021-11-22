module CodeMirror exposing (..)


import Html.Styled exposing (node)
import Html.Styled.Attributes exposing (attribute,id)
import Html.Styled.Events exposing (on)

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


codemirrorHelper : KeyMap -> Theme -> Mode -> (String -> value) -> String -> String -> Html.Styled.Html value
codemirrorHelper  km theme mode constructor cssid content  =
    node "code-mirror"
        [ attribute "mode" <| modeToString mode
        , attribute "keymap" <| keyMapToString km
        , attribute "theme" <| themeToString theme
        , attribute "editorValue" content
        , id cssid
        , on "editorChanged" <|
            D.map constructor <|
                D.at [ "target", "editorValue" ] <|
                    D.string
        ]
        []
