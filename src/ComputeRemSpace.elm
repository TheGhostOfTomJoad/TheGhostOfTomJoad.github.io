module ComputeRemSpace exposing (..)

--import CodeMirror exposing (KeyMap(..), Mode(..), Theme(..))
--import Element exposing (..)
--import Styles exposing (..)
--import Time exposing (Weekday(..))


computeAvHeightBig : number -> number
computeAvHeightBig h =
    h - 70


computeAvWidthBig : Float -> Float
computeAvWidthBig w =
    (w - 100) / 2


-- cMcssFunHelper1Both : (a -> Float) -> (b -> Float) -> { c | width : b, height : a } -> List Css.Style
-- cMcssFunHelper1Both computeH computeW size =
--     [ size.width |> computeW |> Css.px |> Css.width
--     , size.height |> computeH |> Css.px |> Css.height
--     ]


-- cMcssFunHelperBoth : (b -> List Css.Style) -> b -> Html msg
-- cMcssFunHelperBoth helper size =
--     global [ class "CodeMirror" (helper size) ]


computeAvHeightSmall : Float -> Float
computeAvHeightSmall h =
    (h - 120) / 2


computeAvWidthSmall : Float -> Float
computeAvWidthSmall w =
    (w - 100) / 2

--emtyCodemirror = undefined