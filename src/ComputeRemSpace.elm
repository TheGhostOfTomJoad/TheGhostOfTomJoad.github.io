module ComputeRemSpace exposing (..)


import CodeMirror exposing (KeyMap(..), Mode(..), Theme(..))
import Element exposing (..)

import Styles exposing (..)
import Time exposing (Weekday(..))

import Css.Global exposing (global, class)
import Css as Css
import Html.Styled exposing (Html)


computeAvHeightBig : number -> number
computeAvHeightBig h = h - 55

computeAvWidthBig : Float -> Float
computeAvWidthBig w = (w - 100)/2


cMcssFunHelper1Both : (a -> Float) -> (b -> Float) -> { c | width : b, height : a } -> List Css.Style
cMcssFunHelper1Both  computeH computeW size =   [ ( size.width) |> computeW |> Css.px |> Css.width 
                ,  (size.height) |> computeH |> Css.px |> Css.height
        ]


cMcssFunHelperBoth : (b -> List Css.Style) -> b -> Html msg
cMcssFunHelperBoth  helper size = global [ class "CodeMirror" (helper size) ]



