module Styles exposing (..)

import Element exposing (..)
import Element.Background as Background
import Element.Border as Border
import Element.Font as Font


pad : number
pad = 3
spac = 0

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
    [ Font.color spotifyColors.primarytext
    , Border.color spotifyColors.background
    , Background.color spotifyColors.background
    , Font.size 30
    , spacing spac
    , padding pad
    ]


-- smallEditorHeight : number
-- smallEditorHeight =
--     370


smallEditorstyle : List (Attribute msg)
smallEditorstyle =
    [ width fill
    , height fill
       , spacing spac
    , padding pad
     --(px smallEditorHeight)
    ]


bigEditorHeight : number
bigEditorHeight =
    808


bigEditorStyle : List (Attribute msg)
bigEditorStyle =
    [ width fill --fill

    --, height (px bigEditorHeight)
    , height fill
    , spacing spac
    , padding pad
    ]



-- heightToCodemirrorcss : Int -> String
-- heightToCodemirrorcss height=
--     --".CodeMirror { height: 910px;}"
--    String.concat[ ".CodeMirror { height: ",  String.fromInt height ,"px ;}"]


-- computeAvailableHeight : number -> number
-- computeAvailableHeight height =
--     height - 140


-- computeAvailableWidth : number -> number
-- computeAvailableWidth width =
--     width + 2000


-- sizeToCodemirrorcss : { a | height : Float, width : Float } -> String
-- sizeToCodemirrorcss size =
--     --".CodeMirror { height: 910px;}"
--     String.concat [ ".CodeMirror { height: ", size.height |> computeAvailableHeight |> round |> String.fromInt, "px ; \n width: ", size.width |> computeAvailableWidth |> round |> String.fromInt, " px ;}" ]


-- bigCodeMirrorCss : { a | height : Float, width : Float } -> String
-- bigCodeMirrorCss size =
--     sizeToCodemirrorcss size



-- ".CodeMirror { height: calc(100vh - 200px);}"
--".CodeMirror { min-height: 100%; height : 100%; max-height : 100%}"
--".CodeMirror { min-height: 100%;}"--
-- smallCodeMirrorCss : String
-- smallCodeMirrorCss =  heightToCodemirrorcss smallEditorHeight
--".CodeMirror {height: auto;}" --{ min-height: 100 vh ; height : 100 vh,  flex:1}" -- --


textstyle : List (Attribute msg)
textstyle =
    [ height shrink --fill --(px 803)
    , width shrink -- fill
    , mouseDown []
    , mouseOver []
    , spacing spac
    , padding pad
    ]


textColumnStyle : List (Attr () msg)
textColumnStyle =
    [ Border.color spotifyColors.background

    --, Border.widthEach { bottom = 10, left = 10, right = 10, top = 50 }
    , Background.color spotifyColors.primarytext
    , height fill
    , spacing spac
    , padding pad
    , width fill
    ]


resultStyle : List (Attr () msg)
resultStyle =
    [ Border.color spotifyColors.background

    -- , Border.widthEach { bottom = 22, left = 10, right = 10, top = 52 }
    , Background.color spotifyColors.primarytext
    , height fill --fill
    , spacing spac
    , padding pad
    , width fill
    ]


editorColumnStyle : List (Attribute msg)
editorColumnStyle =
    [ spacing spac, padding pad, height fill, width fill, Font.size 14 ]


rowEditorResStyle : List (Attribute msg)
rowEditorResStyle =
    [ spacing spac, padding pad, height fill, width fill, Font.size 14 ]


rowStyle : List (Attr () msg)
rowStyle =
    [ Background.color spotifyColors.background, height fill, spacing spac, width fill, padding pad ]
