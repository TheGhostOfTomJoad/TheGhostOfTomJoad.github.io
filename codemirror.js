import './node_modules/codemirror/lib/codemirror.js'
import './node_modules/codemirror/addon/lint/lint.js'
// import './myhtmlhint.js'
// import './mycsslint.js'
import './node_modules/codemirror/addon/hint/show-hint.js'
import './node_modules/codemirror/addon/hint/html-hint.js'
import './node_modules/codemirror/addon/hint/xml-hint.js'
import './node_modules/codemirror/addon/lint/html-lint.js'
import './node_modules/codemirror/addon/lint/css-lint.js'
import './custom_css-lint.js'
import './node_modules/codemirror/addon/hint/css-hint.js'

import './node_modules/codemirror/src/display/gutters.js'

//import './node_modules/codemirror/theme/monokai.css'
//import './node_modules/codemirror/lib/codemirror.css'
//import './codemirror.css'
// import './node_modules/codemirror/mode/markdown/markdown.js'
// import './node_modules/codemirror/mode/python/python.js'
// import './node_modules/codemirror/mode/haskell/haskell.js'
import './node_modules/codemirror/mode/htmlmixed/htmlmixed.js'
import './node_modules/codemirror/mode/xml/xml.js'
import './node_modules/codemirror/mode/css/css.js'


//import './node_modules/codemirror/keymap/vim.js'
import './node_modules/codemirror/keymap/sublime.js'
import './node_modules/codemirror/addon/search/searchcursor.js'
//import './node_modules/codemirror/addon/mode/simple.js'

//import './node_modules/codemirror/mode/preks/preks.js'
//import './preks.js'

import './node_modules/codemirror/addon/edit/matchbrackets.js'
import './node_modules/codemirror/addon/fold/xml-fold.js'
import './node_modules/codemirror/addon/fold/foldcode.js'
import './node_modules/codemirror/addon/fold/foldgutter.js'


import './node_modules/codemirror/addon/edit/matchtags.js'
import './node_modules/codemirror/addon/edit/closebrackets.js'
// import './node_modules/codemirror/addon/edit/closetag.js'


// import './node_modules/codemirror/addon/comment/comment.js'
// import './node_modules/codemirror/addon/comment/continuecomment.js'





customElements.define('code-mirror',
  class extends HTMLElement {
    connectedCallback() {
      this._editor = CodeMirror(this, {
        indentUnit: 4,
        mode: this.mode,
        theme: this.theme,
        lineNumbers: true,
        keyMap: this.keymap,
        value: this._editorValue,
        //autofocus: true,
        lint: true,
        //lint: {highlightLines: true},
        hint: true,
        foldGutter: true,
        extraKeys: {"Ctrl-Space": "autocomplete"},
        gutters: ["CodeMirror-lint-markers", "CodeMirror-linenumbers", "CodeMirror-foldgutter"],
        matchTags: {bothTags: true},
        matchBrackets:true,
        smartIndent:true
       // autoCloseTags:true,
        //autoCloseBrackets:true

      });

      this._editor.on('changes', () => {
        this._editorValue = this._editor.getValue()
        this.dispatchEvent(new CustomEvent('editorChanged'))
      })
    }

    constructor() {
      super();

      this.mode = this.getAttribute('mode');
      this.keymap = this.getAttribute('keymap');
      this.theme = this.getAttribute('theme');
      this._editorValue = this.getAttribute('editorValue');

      const editorElem = document.createElement("editor");
    }

    get editorValue() {
      return this._editorValue;
    }
    set editorValue(v) {
      if (this._editorValue === v) return
      this._editorValue = v
      if (!this._editor) return
      this._editor.setValue(v)
    }

  })
