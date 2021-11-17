# Frontend

## How to use

Write HTML-Code in the first editor and CSS in the second editor.

## To-Do

<ul>
<li>
Implement the Possibility to switch between HTML and HTML/CSS mode.
Its hardcoded now. You can change the 
viewBoth variable in the init function to use another mode.
<li>
<li> Cleanup Code <li>
<ul>

## Try it

```shell
npm install
elm make src/Main.elm --output main.js --debug
# stack install wai-app-static # To get the warp server
warp # Or serve it in your preferred way
```

Should look like this
![CodeMirror](screenshot.png)

## Sources


The code isinspired by this repo:
https://github.com/tommyengstrom/codemirror-elm
