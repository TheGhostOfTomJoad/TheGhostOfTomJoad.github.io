module Styles exposing (..)

import Element exposing (..)
import Element.Background as Background
import Element.Border as Border
import Element.Font as Font



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
    ]

smallEditorHeight : number
smallEditorHeight = 429

smallEditorstyle : List (Attribute msg)
smallEditorstyle =
    [ 
      width fill
    , height fill--(px smallEditorHeight)
    ]

bigEditorHeight : number
bigEditorHeight = 910

bigEditorStyle : List (Attribute msg)
bigEditorStyle =
    [ width fill
    --, height (px bigEditorHeight)
    , height fill
    ]

heightToCodemirrorcss : Int -> String
heightToCodemirrorcss height=
    --".CodeMirror { height: 910px;}"
   String.concat[ ".CodeMirror { height: ",  String.fromInt height ,"px ;}"]

bigCodeMirrorCss : String
bigCodeMirrorCss =   heightToCodemirrorcss bigEditorHeight
 --".CodeMirror { min-height: 100%; height : 100%; max-height : 100%}"
 --".CodeMirror { min-height: 100%;}"--

smallCodeMirrorCss : String
smallCodeMirrorCss =  heightToCodemirrorcss smallEditorHeight 
     --".CodeMirror {height: auto;}" --{ min-height: 100 vh ; height : 100 vh,  flex:1}" -- -- 

textstyle : List (Attribute msg)
textstyle =
    [ height fill --(px 803)
    , width fill
    , mouseDown []
    , mouseOver []
    ]


textColumnStyle : List (Attr () msg)
textColumnStyle =
    [ Border.color spotifyColors.background
    , Border.widthEach { bottom = 22, left = 10, right = 10, top = 52 }
    , Background.color spotifyColors.primarytext
    , height fill
    , spacing 20
    , padding 20
    , width fill
    ]


editorColumnStyle : List (Attribute msg)
editorColumnStyle = [ spacing 10, padding 10, height fill, Font.size 14 ]

rowStyle : List (Attr () msg)
rowStyle = [ Background.color spotifyColors.background, height fill, spacing 20, width fill ]

