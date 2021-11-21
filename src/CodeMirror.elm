module CodeMirror exposing (..)

import Css exposing (height, px, width)
import Css.Global exposing (class, global)
import Html.Styled exposing (node)
import Html.Styled.Attributes exposing (attribute, css, style)
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



-- codemirrorHelper : Mode -> KeyMap -> Theme -> String -> (String -> value) -> Html.Styled.Html value
-- codemirrorHelper mode km theme content constructor =
--     node "code-mirror"
--         [ attribute "mode" <| modeToString mode
--         , attribute "keymap" <| keyMapToString km
--         , attribute "theme" <| themeToString theme
--         , attribute "editorValue" content
--         , on "editorChanged" <|
--             D.map constructor <|
--                 D.at [ "target", "editorValue" ] <|
--                     D.string
--         ]
--         []
--codemirrorHelper : Mode -> KeyMap -> Theme -> String -> (String -> value) -> Html.Styled.Html value


codemirrorHelper : KeyMap -> Theme -> Mode -> (String -> value) -> Float -> Float -> String -> Html.Styled.Html value
codemirrorHelper km theme mode constructor w h content =
    node "code-mirror"
        [ style "width" (String.concat [ String.fromInt (round 1000), " px" ])
        , style "height" (String.concat [ String.fromInt (round w), " px" ])
        , attribute "mode" <| modeToString mode
        , attribute "keymap" <| keyMapToString km
        , attribute "theme" <| themeToString theme
        , attribute "editorValue" content

        --,--  css [ height (px h), width (px w)]
        , on "editorChanged" <|
            D.map constructor <|
                D.at [ "target", "editorValue" ] <|
                    D.string
        ]
        []


codeMirror : Mode -> (String -> value) -> Float -> Float -> String -> Html.Styled.Html value
codeMirror =
    codemirrorHelper Sublime Monokai


f : Float -> Float -> Html.Styled.Html msg
f w h =
    global [ class "CodeMirror" [ height (px w), width (px h) ] ]



--


g w h =
    [ style "width" (String.concat [ String.fromInt (round h), "px" ]), style "height" (String.concat [ String.fromInt (round w), "px" ]) ]
