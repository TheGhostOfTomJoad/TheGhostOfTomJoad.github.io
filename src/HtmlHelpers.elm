module HtmlHelpers exposing (textHtml,removeSpaceandControl)

import Html.Parser
import Html.Parser.Util
import Char.Extra
--import Html
import String exposing (trim)
import Html.Styled exposing (Html,fromUnstyled)

type HTMLCode =String



textHtml : String -> List (Html msg)
textHtml t =
    case Html.Parser.run t of
        Ok nodes ->
            (nodes |> Html.Parser.Util.toVirtualDom) |> List.map fromUnstyled
        Err _ ->
            []


removeControl : String -> String
removeControl =
    String.filter (not << Char.Extra.isControl)


helper : Char -> List Char -> List Char
helper c s =
    case s of
        ' ' :: _ ->
            if c == ' ' then
                s

            else
                c :: s

        s2 ->
            c :: s2


helper2 : Char -> String -> String
helper2 c s =
    helper c (String.toList s) |> String.fromList


removeDoubleSpace : String -> String
removeDoubleSpace =
    String.foldr helper2 ""


removeSpaceandControl : String -> String
removeSpaceandControl s =
    s |> removeControl |> removeDoubleSpace |> trim