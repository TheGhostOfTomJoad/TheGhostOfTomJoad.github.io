# Frontend

## How to use

Write HTML-Code in the first editor and CSS in the second editor.

## To-Do

<ul>

<li> Cleanup Code  </li> 

</ul>

## Try it

<a href ="https://theghostoftomjoad.github.io/"> https://theghostoftomjoad.github.io/ </a>

## Build it
Only the .elm files, package.json, elm.json, index.html, myhtmlhint.js, mycsshint.js and, codemirror.css and custom_cssl-lint.js are necessary to build.

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
