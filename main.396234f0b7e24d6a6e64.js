!function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=14)}([function(e,t,r){var n=r(5),o=r(29),i=r(30),c="[object Null]",a="[object Undefined]",u=n?n.toStringTag:void 0;e.exports=function(e){return null==e?void 0===e?a:c:u&&u in Object(e)?o(e):i(e)}},function(e,t){e.exports=function(e){return null!=e&&"object"==typeof e}},function(e,t){e.exports=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}},function(e,t){e.exports=function(e,t,r){return e==e&&(void 0!==r&&(e=e<=r?e:r),void 0!==t&&(e=e>=t?e:t)),e}},function(e,t,r){var n=r(18);e.exports=function(e,t){var r=-1,o=e.length,i=o-1;for(t=void 0===t?o:t;++r<t;){var c=n(r,i),a=e[c];e[c]=e[r],e[r]=a}return e.length=t,e}},function(e,t,r){var n=r(6).Symbol;e.exports=n},function(e,t,r){var n=r(7),o="object"==typeof self&&self&&self.Object===Object&&self,i=n||o||Function("return this")();e.exports=i},function(e,t,r){(function(t){var r="object"==typeof t&&t&&t.Object===Object&&t;e.exports=r}).call(this,r(28))},function(e,t){var r=Array.isArray;e.exports=r},function(e,t){e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),e.webpackPolyfill=1),e}},function(e,t){var r=9007199254740991,n=/^(?:0|[1-9]\d*)$/;e.exports=function(e,t){var o=typeof e;return!!(t=null==t?r:t)&&("number"==o||"symbol"!=o&&n.test(e))&&e>-1&&e%1==0&&e<t}},function(e,t){var r=9007199254740991;e.exports=function(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=r}},function(e,t,r){var n=r(41),o=r(11);e.exports=function(e){return null!=e&&o(e.length)&&!n(e)}},function(e,t,r){var n=r(16),o=r(19),i=r(8),c=r(42),a=r(44);e.exports=function(e,t,r){return t=(r?c(e,t,r):void 0===t)?1:a(t),(i(e)?n:o)(e,t)}},function(e,t,r){"use strict";r.r(t);var n=r(13),o=r.n(n);r(15);const i=r(48);function c(e){return o()(i,e).join(" ")}function a(e=3,t=5){return Math.floor(Math.random()*(t-e+1))+e}function u(e){return new Array(e).fill().map((e,t)=>{const r=function(e){return new Array(e).fill().map(e=>(function(e){return e.charAt(0).toUpperCase()+e.slice(1)+"."})(c(a(6,10)))).join(" ")}(a(3,5)),n=document.createElement("p");return n.innerHTML=r,n})}document.getElementById("phrase-form").onsubmit=function(e){e.preventDefault();const t=parseInt(document.getElementById("phrase-count").value,10);document.querySelector("#phrase-output").innerHTML=c(t)},document.getElementById("paragraph-form").onsubmit=function(e){e.preventDefault();const t=u(parseInt(document.getElementById("paragraph-count").value,10)),r=document.querySelector("#paragraph-output");t.forEach(e=>{r.appendChild(e)})}},function(e,t,r){},function(e,t,r){var n=r(3),o=r(17),i=r(4);e.exports=function(e,t){return i(o(e),n(t,0,e.length))}},function(e,t){e.exports=function(e,t){var r=-1,n=e.length;for(t||(t=Array(n));++r<n;)t[r]=e[r];return t}},function(e,t){var r=Math.floor,n=Math.random;e.exports=function(e,t){return e+r(n()*(t-e+1))}},function(e,t,r){var n=r(3),o=r(4),i=r(20);e.exports=function(e,t){var r=i(e);return o(r,n(t,0,r.length))}},function(e,t,r){var n=r(21),o=r(23);e.exports=function(e){return null==e?[]:n(e,o(e))}},function(e,t,r){var n=r(22);e.exports=function(e,t){return n(t,function(t){return e[t]})}},function(e,t){e.exports=function(e,t){for(var r=-1,n=null==e?0:e.length,o=Array(n);++r<n;)o[r]=t(e[r],r,e);return o}},function(e,t,r){var n=r(24),o=r(37),i=r(12);e.exports=function(e){return i(e)?n(e):o(e)}},function(e,t,r){var n=r(25),o=r(26),i=r(8),c=r(31),a=r(10),u=r(33),s=Object.prototype.hasOwnProperty;e.exports=function(e,t){var r=i(e),l=!r&&o(e),p=!r&&!l&&c(e),f=!r&&!l&&!p&&u(e),b=r||l||p||f,d=b?n(e.length,String):[],m=d.length;for(var y in e)!t&&!s.call(e,y)||b&&("length"==y||p&&("offset"==y||"parent"==y)||f&&("buffer"==y||"byteLength"==y||"byteOffset"==y)||a(y,m))||d.push(y);return d}},function(e,t){e.exports=function(e,t){for(var r=-1,n=Array(e);++r<e;)n[r]=t(r);return n}},function(e,t,r){var n=r(27),o=r(1),i=Object.prototype,c=i.hasOwnProperty,a=i.propertyIsEnumerable,u=n(function(){return arguments}())?n:function(e){return o(e)&&c.call(e,"callee")&&!a.call(e,"callee")};e.exports=u},function(e,t,r){var n=r(0),o=r(1),i="[object Arguments]";e.exports=function(e){return o(e)&&n(e)==i}},function(e,t){var r;r=function(){return this}();try{r=r||new Function("return this")()}catch(e){"object"==typeof window&&(r=window)}e.exports=r},function(e,t,r){var n=r(5),o=Object.prototype,i=o.hasOwnProperty,c=o.toString,a=n?n.toStringTag:void 0;e.exports=function(e){var t=i.call(e,a),r=e[a];try{e[a]=void 0;var n=!0}catch(e){}var o=c.call(e);return n&&(t?e[a]=r:delete e[a]),o}},function(e,t){var r=Object.prototype.toString;e.exports=function(e){return r.call(e)}},function(e,t,r){(function(e){var n=r(6),o=r(32),i=t&&!t.nodeType&&t,c=i&&"object"==typeof e&&e&&!e.nodeType&&e,a=c&&c.exports===i?n.Buffer:void 0,u=(a?a.isBuffer:void 0)||o;e.exports=u}).call(this,r(9)(e))},function(e,t){e.exports=function(){return!1}},function(e,t,r){var n=r(34),o=r(35),i=r(36),c=i&&i.isTypedArray,a=c?o(c):n;e.exports=a},function(e,t,r){var n=r(0),o=r(11),i=r(1),c={};c["[object Float32Array]"]=c["[object Float64Array]"]=c["[object Int8Array]"]=c["[object Int16Array]"]=c["[object Int32Array]"]=c["[object Uint8Array]"]=c["[object Uint8ClampedArray]"]=c["[object Uint16Array]"]=c["[object Uint32Array]"]=!0,c["[object Arguments]"]=c["[object Array]"]=c["[object ArrayBuffer]"]=c["[object Boolean]"]=c["[object DataView]"]=c["[object Date]"]=c["[object Error]"]=c["[object Function]"]=c["[object Map]"]=c["[object Number]"]=c["[object Object]"]=c["[object RegExp]"]=c["[object Set]"]=c["[object String]"]=c["[object WeakMap]"]=!1,e.exports=function(e){return i(e)&&o(e.length)&&!!c[n(e)]}},function(e,t){e.exports=function(e){return function(t){return e(t)}}},function(e,t,r){(function(e){var n=r(7),o=t&&!t.nodeType&&t,i=o&&"object"==typeof e&&e&&!e.nodeType&&e,c=i&&i.exports===o&&n.process,a=function(){try{var e=i&&i.require&&i.require("util").types;return e||c&&c.binding&&c.binding("util")}catch(e){}}();e.exports=a}).call(this,r(9)(e))},function(e,t,r){var n=r(38),o=r(39),i=Object.prototype.hasOwnProperty;e.exports=function(e){if(!n(e))return o(e);var t=[];for(var r in Object(e))i.call(e,r)&&"constructor"!=r&&t.push(r);return t}},function(e,t){var r=Object.prototype;e.exports=function(e){var t=e&&e.constructor;return e===("function"==typeof t&&t.prototype||r)}},function(e,t,r){var n=r(40)(Object.keys,Object);e.exports=n},function(e,t){e.exports=function(e,t){return function(r){return e(t(r))}}},function(e,t,r){var n=r(0),o=r(2),i="[object AsyncFunction]",c="[object Function]",a="[object GeneratorFunction]",u="[object Proxy]";e.exports=function(e){if(!o(e))return!1;var t=n(e);return t==c||t==a||t==i||t==u}},function(e,t,r){var n=r(43),o=r(12),i=r(10),c=r(2);e.exports=function(e,t,r){if(!c(r))return!1;var a=typeof t;return!!("number"==a?o(r)&&i(t,r.length):"string"==a&&t in r)&&n(r[t],e)}},function(e,t){e.exports=function(e,t){return e===t||e!=e&&t!=t}},function(e,t,r){var n=r(45);e.exports=function(e){var t=n(e),r=t%1;return t==t?r?t-r:t:0}},function(e,t,r){var n=r(46),o=1/0,i=1.7976931348623157e308;e.exports=function(e){return e?(e=n(e))===o||e===-o?(e<0?-1:1)*i:e==e?e:0:0===e?e:0}},function(e,t,r){var n=r(2),o=r(47),i=NaN,c=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,s=/^0o[0-7]+$/i,l=parseInt;e.exports=function(e){if("number"==typeof e)return e;if(o(e))return i;if(n(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=n(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(c,"");var r=u.test(e);return r||s.test(e)?l(e.slice(2),r?2:8):a.test(e)?i:+e}},function(e,t,r){var n=r(0),o=r(1),i="[object Symbol]";e.exports=function(e){return"symbol"==typeof e||o(e)&&n(e)==i}},function(e){e.exports=["distributed","asynchronous","api","controller","pattern","antipattern","concurrent","concurrency","JSON","RPC","remote procedure call","DSL","domain specific language","lang","domain","module","documentation driven","program","class","subclass","FIFO","queue","array","linked list","hashtable","markup","static","public","private","protected","void","constant","const","var","val","i","j","k","compile","compiler","linker","ELF","object library","OOP","FP","stack","database","data store","key-value","LGTM","SOAP","REST","graph","DAG","directed acyclic graph","blockchain","convention","configuration","composition","inheritance","parent","child","lazy","commit","transaction","consensus","Byzantine fault tolerance","fault tolerant","scalable","proof of stake","pivot","MVP","minimum viable product","bootcamp","greenfield","brownfield","legacy","legacy code","tech debt","f***","microservices","senior","junior","devops","open source","SRE","site reliability engineer","engineer","fullstack","backend","frontend","design","duck typing","dynamic programming","dynamic","pairing","scrum master","big O","quick sort","bubble sort","merge sort","heap sort","whiteboard","greedy algorithm","tl;dr","middleware","vaporware","shareware","stateless","state","Dijkstra","TOML","YAML","model","views","presenter","API","container","cache","first in first out","resource","XML","CSV","concurrent","callback","reactive","behavior-driven","test-driven","clean code","clean architecture","architecture","LLVM","JVM","view-model","gradle","node_modules","tree shaking","injection","dependency injection","variable","attributes","parameter","class","instance","singleton","observer pattern","callback hell","compilation","transpile","hardcoded","cowboy coding","reflection","casting","meta-programming","spy","mock","test double","dog-piling","bike-shedding","promise","resolve","mutation observer","CSS-in-JS","atomic design","tabs vs spaces","JavaScript","stand-up","gate-keeping","diversity and inclusion","npm","yarn","code-splitting","perf matters","webpack","gulp","LIFO","functional programming","API","flexbox","CSS grid","browser","Safari","Chrome","Firefox","Internet Explorer","Edge","compile","stack trace","Stack Overflow","spaghetti code","circle back","Agile","waterfall","looks good to me","+1","OTP","GraphQL","Babel","DOM","document object model","domain","shadow DOM","virtual DOM","abstraction","composition over inheritance","a place for everything","lazy load","lazy eval","git","rm -rf *","cherry pick","rebase","reflog","branch","chmod","sudo","little Bobby Tables","bitcoin","ICO","developer avocado","service worker","cache","off-by-one error","naming things","open source","MIT license","contribute","Github","pull request","strongly typing","static typing","dynamic types","coding","pair programming","contributor","TL","free as in beer","free as speech","blog","Medium post","RSS feed","CS degree","bootcamp","Ada Lovelace","accessibility","imperative-mood","polemical thinking","idiosyncratic contexts","one-size-fits-all approach","build tool","modern bundle","continuous integration","bitwise operator","distributed systems","ship it",".NET","homebrew","CLI","imagemagick","grep","command-line","terminal","ping","incognito","remote","Slack","Hacker News","Reddit","Twitter","contribution","native","website","mobile app","progressive web app","font","interface","cross-post","budget","machine learning","AI","UX","UI","killer app","freelancer","DevTools","senior-engineer","team-player","neck beard","scale","production","environment","streams","websockets","maintainable","serverless","cloud","architecture","keycaps","MacBook","Linux","mechanical keyboard","raspberry pi","internet button","IoT","AWS","S3","Cloudfront","infrastructure","gzip","compression","minification","uglify","optimize","responsive","module","elixir","Ruby","JSX","React","Angular","Vue","Backbone.js","JQuery","animation","frame rate","time-to-interactive","Ubuntu","kernel","Kubernetes","containerized","security","package manager","npm","yarn","driver","developer","engineer","programmer","ecommerce platform","emoji","hipchat","IRC","Netscape"]}]);
//# sourceMappingURL=main.396234f0b7e24d6a6e64.js.map