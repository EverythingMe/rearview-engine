CodeMirror.defineMode("smalltalk",function(e){var t=/[+\-/\\*~<>=@%|&?!.:;^]/,n=/true|false|nil|self|super|thisContext/,a=function(e,t){this.next=e,this.parent=t},i=function(e,t,n){this.name=e,this.context=t,this.eos=n},r=function(){this.context=new a(o,null),this.expectVariable=!0,this.indentation=0,this.userIndentationDelta=0};r.prototype.userIndent=function(t){this.userIndentationDelta=t>0?t/e.indentUnit-this.indentation:0};var o=function(e,r,o){var c=new i(null,r,!1),d=e.next();return'"'===d?c=s(e,new a(s,r)):"'"===d?c=l(e,new a(l,r)):"#"===d?(e.eatWhile(/[^ .]/),c.name="string-2"):"$"===d?(e.eatWhile(/[^ ]/),c.name="string-2"):"|"===d&&o.expectVariable?c.context=new a(u,r):/[\[\]{}()]/.test(d)?(c.name="bracket",c.eos=/[\[{(]/.test(d),"["===d?o.indentation++:"]"===d&&(o.indentation=Math.max(0,o.indentation-1))):t.test(d)?(e.eatWhile(t),c.name="operator",c.eos=";"!==d):/\d/.test(d)?(e.eatWhile(/[\w\d]/),c.name="number"):/[\w_]/.test(d)?(e.eatWhile(/[\w\d_]/),c.name=o.expectVariable?n.test(e.current())?"keyword":"variable":null):c.eos=o.expectVariable,c},s=function(e,t){return e.eatWhile(/[^"]/),new i("comment",e.eat('"')?t.parent:t,!0)},l=function(e,t){return e.eatWhile(/[^']/),new i("string",e.eat("'")?t.parent:t,!1)},u=function(e,t){var n=new i(null,t,!1),a=e.next();return"|"===a?(n.context=t.parent,n.eos=!0):(e.eatWhile(/[^|]/),n.name="variable"),n};return{startState:function(){return new r},token:function(e,t){if(t.userIndent(e.indentation()),e.eatSpace())return null;var n=t.context.next(e,t.context,t);return t.context=n.context,t.expectVariable=n.eos,t.lastToken=n,n.name},blankLine:function(e){e.userIndent(0)},indent:function(t,n){var a=t.context.next===o&&n&&"]"===n.charAt(0)?-1:t.userIndentationDelta;return(t.indentation+a)*e.indentUnit},electricChars:"]"}}),CodeMirror.defineMIME("text/x-stsrc",{name:"smalltalk"});