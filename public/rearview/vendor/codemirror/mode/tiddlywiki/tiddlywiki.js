/***
|''Name''|tiddlywiki.js|
|''Description''|Enables TiddlyWikiy syntax highlighting using CodeMirror|
|''Author''|PMario|
|''Version''|0.1.7|
|''Status''|''stable''|
|''Source''|[[GitHub|https://github.com/pmario/CodeMirror2/blob/tw-syntax/mode/tiddlywiki]]|
|''Documentation''|http://codemirror.tiddlyspace.com/|
|''License''|[[MIT License|http://www.opensource.org/licenses/mit-license.php]]|
|''CoreVersion''|2.5.0|
|''Requires''|codemirror.js|
|''Keywords''|syntax highlighting color code mirror codemirror|
! Info
CoreVersion parameter is needed for TiddlyWiki only!
***/

CodeMirror.defineMode("tiddlywiki",function(e){function t(e,t,r){return t.tokenize=r,r(e,t)}function r(e,t,r){return m=e,s=r,t}function n(e,n){var m,s=e.sol();if(n.block=!1,m=e.peek(),s&&/[<\/\*{}\-]/.test(m)){if(e.match(z))return n.block=!0,t(e,n,o);if(e.match(g))return r("quote","quote");if(e.match(p)||e.match(x))return r("code","comment");if(e.match(v)||e.match(w)||e.match($)||e.match(y))return r("code","comment");if(e.match(b))return r("hr","hr")}if(m=e.next(),s&&/[\/\*!#;:>|]/.test(m)){if("!"==m)return e.skipToEnd(),r("header","header");if("*"==m)return e.eatWhile("*"),r("list","comment");if("#"==m)return e.eatWhile("#"),r("list","comment");if(";"==m)return e.eatWhile(";"),r("list","comment");if(":"==m)return e.eatWhile(":"),r("list","comment");if(">"==m)return e.eatWhile(">"),r("quote","quote");if("|"==m)return r("table","header")}if("{"==m&&e.match(/\{\{/))return t(e,n,o);if(/[hf]/i.test(m)&&/[ti]/i.test(e.peek())&&e.match(/\b(ttps?|tp|ile):\/\/[\-A-Z0-9+&@#\/%?=~_|$!:,.;]*[A-Z0-9+&@#\/%=~_|$]/i))return r("link","link");if('"'==m)return r("string","string");if("~"==m)return r("text","brace");if(/[\[\]]/.test(m)&&e.peek()==m)return e.next(),r("brace","brace");if("@"==m)return e.eatWhile(k),r("link","link");if(/\d/.test(m))return e.eatWhile(/\d/),r("number","number");if("/"==m){if(e.eat("%"))return t(e,n,i);if(e.eat("/"))return t(e,n,u)}if("_"==m&&e.eat("_"))return t(e,n,c);if("-"==m&&e.eat("-")){if(" "!=e.peek())return t(e,n,l);if(" "==e.peek())return r("text","brace")}if("'"==m&&e.eat("'"))return t(e,n,a);if("<"!=m)return r(m);if(e.eat("<"))return t(e,n,f);e.eatWhile(/[\w\$_]/);var h=e.current(),W=d.propertyIsEnumerable(h)&&d[h];return W?r(W.type,W.style,h):r("text",null,h)}function i(e,t){for(var i,a=!1;i=e.next();){if("/"==i&&a){t.tokenize=n;break}a="%"==i}return r("comment","comment")}function a(e,t){for(var i,a=!1;i=e.next();){if("'"==i&&a){t.tokenize=n;break}a="'"==i}return r("text","strong")}function o(e,t){var i,a=t.block;return a&&e.current()?r("code","comment"):!a&&e.match(_)?(t.tokenize=n,r("code","comment")):a&&e.sol()&&e.match(W)?(t.tokenize=n,r("code","comment")):(i=e.next(),a?r("code","comment"):r("code","comment"))}function u(e,t){for(var i,a=!1;i=e.next();){if("/"==i&&a){t.tokenize=n;break}a="/"==i}return r("text","em")}function c(e,t){for(var i,a=!1;i=e.next();){if("_"==i&&a){t.tokenize=n;break}a="_"==i}return r("text","underlined")}function l(e,t){for(var i,a=!1;i=e.next();){if("-"==i&&a){t.tokenize=n;break}a="-"==i}return r("text","strikethrough")}function f(e,t){var i,a,o;return"<<"==e.current()?r("brace","macro"):(i=e.next())?">"==i&&">"==e.peek()?(e.next(),t.tokenize=n,r("brace","macro")):(e.eatWhile(/[\w\$_]/),a=e.current(),o=h.propertyIsEnumerable(a)&&h[a],o?r(o.type,o.style,a):r("macro",null,a)):(t.tokenize=n,r(i))}e.indentUnit;var m,s,d=function(){return{}}(),h=function(){function e(e){return{type:e,style:"macro"}}return{allTags:e("allTags"),closeAll:e("closeAll"),list:e("list"),newJournal:e("newJournal"),newTiddler:e("newTiddler"),permaview:e("permaview"),saveChanges:e("saveChanges"),search:e("search"),slider:e("slider"),tabs:e("tabs"),tag:e("tag"),tagging:e("tagging"),tags:e("tags"),tiddler:e("tiddler"),timeline:e("timeline"),today:e("today"),version:e("version"),option:e("option"),"with":e("with"),filter:e("filter")}}(),k=/[\w_\-]/i,b=/^\-\-\-\-+$/,p=/^\/\*\*\*$/,x=/^\*\*\*\/$/,g=/^<<<$/,v=/^\/\/\{\{\{$/,w=/^\/\/\}\}\}$/,$=/^<!--\{\{\{-->$/,y=/^<!--\}\}\}-->$/,z=/^\{\{\{$/,W=/^\}\}\}$/,_=/.*?\}\}\}/;return{startState:function(){return{tokenize:n,indented:0,level:0}},token:function(e,t){if(e.eatSpace())return null;var r=t.tokenize(e,t);return r},electricChars:""}}),CodeMirror.defineMIME("text/x-tiddlywiki","tiddlywiki");