window.Modernizr=function(e,t,n){function r(e){b.cssText=e}function o(e,t){return r(S.join(e+";")+(t||""))}function a(e,t){return typeof e===t}function i(e,t){return!!~(""+e).indexOf(t)}function s(e,t){for(var r in e){var o=e[r];if(!i(o,"-")&&b[o]!==n)return"pfx"==t?o:!0}return!1}function c(e,t,r){for(var o in e){var i=t[e[o]];if(i!==n)return r===!1?e[o]:a(i,"function")?i.bind(r||t):i}return!1}function l(e,t,n){var r=e.charAt(0).toUpperCase()+e.slice(1),o=(e+" "+T.join(r+" ")+r).split(" ");return a(t,"string")||a(t,"undefined")?s(o,t):(o=(e+" "+k.join(r+" ")+r).split(" "),c(o,t,n))}function u(){m.input=function(n){for(var r=0,o=n.length;o>r;r++)N[n[r]]=n[r]in x;return N.list&&(N.list=!!t.createElement("datalist")&&!!e.HTMLDataListElement),N}("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")),m.inputtypes=function(e){for(var r,o,a,i=0,s=e.length;s>i;i++)x.setAttribute("type",o=e[i]),r="text"!==x.type,r&&(x.value=E,x.style.cssText="position:absolute;visibility:hidden;",/^range$/.test(o)&&x.style.WebkitAppearance!==n?(g.appendChild(x),a=t.defaultView,r=a.getComputedStyle&&"textfield"!==a.getComputedStyle(x,null).WebkitAppearance&&0!==x.offsetHeight,g.removeChild(x)):/^(search|tel)$/.test(o)||(r=/^(url|email)$/.test(o)?x.checkValidity&&x.checkValidity()===!1:x.value!=E)),$[e[i]]=!!r;return $}("search tel url email datetime date month week time datetime-local number range color".split(" "))}var d,f,p="2.8.3",m={},h=!0,g=t.documentElement,y="modernizr",v=t.createElement(y),b=v.style,x=t.createElement("input"),E=":)",w={}.toString,S=" -webkit- -moz- -o- -ms- ".split(" "),C="Webkit Moz O ms",T=C.split(" "),k=C.toLowerCase().split(" "),j={svg:"http://www.w3.org/2000/svg"},M={},$={},N={},z=[],P=z.slice,L=function(e,n,r,o){var a,i,s,c,l=t.createElement("div"),u=t.body,d=u||t.createElement("body");if(parseInt(r,10))for(;r--;)s=t.createElement("div"),s.id=o?o[r]:y+(r+1),l.appendChild(s);return a=["&#173;",'<style id="s',y,'">',e,"</style>"].join(""),l.id=y,(u?l:d).innerHTML+=a,d.appendChild(l),u||(d.style.background="",d.style.overflow="hidden",c=g.style.overflow,g.style.overflow="hidden",g.appendChild(d)),i=n(l,e),u?l.parentNode.removeChild(l):(d.parentNode.removeChild(d),g.style.overflow=c),!!i},O=function(t){var n=e.matchMedia||e.msMatchMedia;if(n)return n(t)&&n(t).matches||!1;var r;return L("@media "+t+" { #"+y+" { position: absolute; } }",function(t){r="absolute"==(e.getComputedStyle?getComputedStyle(t,null):t.currentStyle).position}),r},A=function(){function e(e,o){o=o||t.createElement(r[e]||"div"),e="on"+e;var i=e in o;return i||(o.setAttribute||(o=t.createElement("div")),o.setAttribute&&o.removeAttribute&&(o.setAttribute(e,""),i=a(o[e],"function"),a(o[e],"undefined")||(o[e]=n),o.removeAttribute(e))),o=null,i}var r={select:"input",change:"input",submit:"form",reset:"form",error:"img",load:"img",abort:"img"};return e}(),F={}.hasOwnProperty;f=a(F,"undefined")||a(F.call,"undefined")?function(e,t){return t in e&&a(e.constructor.prototype[t],"undefined")}:function(e,t){return F.call(e,t)},Function.prototype.bind||(Function.prototype.bind=function(e){var t=this;if("function"!=typeof t)throw new TypeError;var n=P.call(arguments,1),r=function(){if(this instanceof r){var o=function(){};o.prototype=t.prototype;var a=new o,i=t.apply(a,n.concat(P.call(arguments)));return Object(i)===i?i:a}return t.apply(e,n.concat(P.call(arguments)))};return r}),M.flexbox=function(){return l("flexWrap")},M.canvas=function(){var e=t.createElement("canvas");return!!e.getContext&&!!e.getContext("2d")},M.canvastext=function(){return!!m.canvas&&!!a(t.createElement("canvas").getContext("2d").fillText,"function")},M.webgl=function(){return!!e.WebGLRenderingContext},M.touch=function(){var n;return"ontouchstart"in e||e.DocumentTouch&&t instanceof DocumentTouch?n=!0:L(["@media (",S.join("touch-enabled),("),y,")","{#modernizr{top:9px;position:absolute}}"].join(""),function(e){n=9===e.offsetTop}),n},M.geolocation=function(){return"geolocation"in navigator},M.postmessage=function(){return!!e.postMessage},M.websqldatabase=function(){return!!e.openDatabase},M.indexedDB=function(){return!!l("indexedDB",e)},M.hashchange=function(){return A("hashchange",e)&&(t.documentMode===n||t.documentMode>7)},M.history=function(){return!!e.history&&!!history.pushState},M.draganddrop=function(){var e=t.createElement("div");return"draggable"in e||"ondragstart"in e&&"ondrop"in e},M.websockets=function(){return"WebSocket"in e||"MozWebSocket"in e},M.rgba=function(){return r("background-color:rgba(150,255,150,.5)"),i(b.backgroundColor,"rgba")},M.hsla=function(){return r("background-color:hsla(120,40%,100%,.5)"),i(b.backgroundColor,"rgba")||i(b.backgroundColor,"hsla")},M.multiplebgs=function(){return r("background:url(https://),url(https://),red url(https://)"),/(url\s*\(.*?){3}/.test(b.background)},M.backgroundsize=function(){return l("backgroundSize")},M.borderimage=function(){return l("borderImage")},M.borderradius=function(){return l("borderRadius")},M.boxshadow=function(){return l("boxShadow")},M.textshadow=function(){return""===t.createElement("div").style.textShadow},M.opacity=function(){return o("opacity:.55"),/^0.55$/.test(b.opacity)},M.cssanimations=function(){return l("animationName")},M.csscolumns=function(){return l("columnCount")},M.cssgradients=function(){var e="background-image:",t="gradient(linear,left top,right bottom,from(#9f9),to(white));",n="linear-gradient(left top,#9f9, white);";return r((e+"-webkit- ".split(" ").join(t+e)+S.join(n+e)).slice(0,-e.length)),i(b.backgroundImage,"gradient")},M.cssreflections=function(){return l("boxReflect")},M.csstransforms=function(){return!!l("transform")},M.csstransforms3d=function(){var e=!!l("perspective");return e&&"webkitPerspective"in g.style&&L("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}",function(t,n){e=9===t.offsetLeft&&3===t.offsetHeight}),e},M.csstransitions=function(){return l("transition")},M.fontface=function(){var e;return L('@font-face {font-family:"font";src:url("https://")}',function(n,r){var o=t.getElementById("smodernizr"),a=o.sheet||o.styleSheet,i=a?a.cssRules&&a.cssRules[0]?a.cssRules[0].cssText:a.cssText||"":"";e=/src/i.test(i)&&0===i.indexOf(r.split(" ")[0])}),e},M.generatedcontent=function(){var e;return L(["#",y,"{font:0/0 a}#",y,':after{content:"',E,'";visibility:hidden;font:3px/1 a}'].join(""),function(t){e=t.offsetHeight>=3}),e},M.video=function(){var e=t.createElement("video"),n=!1;try{(n=!!e.canPlayType)&&(n=new Boolean(n),n.ogg=e.canPlayType('video/ogg; codecs="theora"').replace(/^no$/,""),n.h264=e.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/,""),n.webm=e.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,""))}catch(r){}return n},M.audio=function(){var e=t.createElement("audio"),n=!1;try{(n=!!e.canPlayType)&&(n=new Boolean(n),n.ogg=e.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),n.mp3=e.canPlayType("audio/mpeg;").replace(/^no$/,""),n.wav=e.canPlayType('audio/wav; codecs="1"').replace(/^no$/,""),n.m4a=(e.canPlayType("audio/x-m4a;")||e.canPlayType("audio/aac;")).replace(/^no$/,""))}catch(r){}return n},M.localstorage=function(){try{return localStorage.setItem(y,y),localStorage.removeItem(y),!0}catch(e){return!1}},M.sessionstorage=function(){try{return sessionStorage.setItem(y,y),sessionStorage.removeItem(y),!0}catch(e){return!1}},M.webworkers=function(){return!!e.Worker},M.applicationcache=function(){return!!e.applicationCache},M.svg=function(){return!!t.createElementNS&&!!t.createElementNS(j.svg,"svg").createSVGRect},M.inlinesvg=function(){var e=t.createElement("div");return e.innerHTML="<svg/>",(e.firstChild&&e.firstChild.namespaceURI)==j.svg},M.smil=function(){return!!t.createElementNS&&/SVGAnimate/.test(w.call(t.createElementNS(j.svg,"animate")))},M.svgclippaths=function(){return!!t.createElementNS&&/SVGClipPath/.test(w.call(t.createElementNS(j.svg,"clipPath")))};for(var R in M)f(M,R)&&(d=R.toLowerCase(),m[d]=M[R](),z.push((m[d]?"":"no-")+d));return m.input||u(),m.addTest=function(e,t){if("object"==typeof e)for(var r in e)f(e,r)&&m.addTest(r,e[r]);else{if(e=e.toLowerCase(),m[e]!==n)return m;t="function"==typeof t?t():t,"undefined"!=typeof h&&h&&(g.className+=" "+(t?"":"no-")+e),m[e]=t}return m},r(""),v=x=null,function(e,t){function n(e,t){var n=e.createElement("p"),r=e.getElementsByTagName("head")[0]||e.documentElement;return n.innerHTML="x<style>"+t+"</style>",r.insertBefore(n.lastChild,r.firstChild)}function r(){var e=v.elements;return"string"==typeof e?e.split(" "):e}function o(e){var t=y[e[h]];return t||(t={},g++,e[h]=g,y[g]=t),t}function a(e,n,r){if(n||(n=t),u)return n.createElement(e);r||(r=o(n));var a;return a=r.cache[e]?r.cache[e].cloneNode():m.test(e)?(r.cache[e]=r.createElem(e)).cloneNode():r.createElem(e),!a.canHaveChildren||p.test(e)||a.tagUrn?a:r.frag.appendChild(a)}function i(e,n){if(e||(e=t),u)return e.createDocumentFragment();n=n||o(e);for(var a=n.frag.cloneNode(),i=0,s=r(),c=s.length;c>i;i++)a.createElement(s[i]);return a}function s(e,t){t.cache||(t.cache={},t.createElem=e.createElement,t.createFrag=e.createDocumentFragment,t.frag=t.createFrag()),e.createElement=function(n){return v.shivMethods?a(n,e,t):t.createElem(n)},e.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+r().join().replace(/[\w\-]+/g,function(e){return t.createElem(e),t.frag.createElement(e),'c("'+e+'")'})+");return n}")(v,t.frag)}function c(e){e||(e=t);var r=o(e);return v.shivCSS&&!l&&!r.hasCSS&&(r.hasCSS=!!n(e,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),u||s(e,r),e}var l,u,d="3.7.0",f=e.html5||{},p=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,m=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,h="_html5shiv",g=0,y={};!function(){try{var e=t.createElement("a");e.innerHTML="<xyz></xyz>",l="hidden"in e,u=1==e.childNodes.length||function(){t.createElement("a");var e=t.createDocumentFragment();return"undefined"==typeof e.cloneNode||"undefined"==typeof e.createDocumentFragment||"undefined"==typeof e.createElement}()}catch(n){l=!0,u=!0}}();var v={elements:f.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",version:d,shivCSS:f.shivCSS!==!1,supportsUnknownElements:u,shivMethods:f.shivMethods!==!1,type:"default",shivDocument:c,createElement:a,createDocumentFragment:i};e.html5=v,c(t)}(this,t),m._version=p,m._prefixes=S,m._domPrefixes=k,m._cssomPrefixes=T,m.mq=O,m.hasEvent=A,m.testProp=function(e){return s([e])},m.testAllProps=l,m.testStyles=L,m.prefixed=function(e,t,n){return t?l(e,t,n):l(e,"pfx")},g.className=g.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(h?" js "+z.join(" "):""),m}(this,this.document),function(e,t,n){function r(e){return"[object Function]"==g.call(e)}function o(e){return"string"==typeof e}function a(){}function i(e){return!e||"loaded"==e||"complete"==e||"uninitialized"==e}function s(){var e=y.shift();v=1,e?e.t?m(function(){("c"==e.t?f.injectCss:f.injectJs)(e.s,0,e.a,e.x,e.e,1)},0):(e(),s()):v=0}function c(e,n,r,o,a,c,l){function u(t){if(!p&&i(d.readyState)&&(b.r=p=1,!v&&s(),d.onload=d.onreadystatechange=null,t)){"img"!=e&&m(function(){E.removeChild(d)},50);for(var r in k[n])k[n].hasOwnProperty(r)&&k[n][r].onload()}}var l=l||f.errorTimeout,d=t.createElement(e),p=0,g=0,b={t:r,s:n,e:a,a:c,x:l};1===k[n]&&(g=1,k[n]=[]),"object"==e?d.data=n:(d.src=n,d.type=e),d.width=d.height="0",d.onerror=d.onload=d.onreadystatechange=function(){u.call(this,g)},y.splice(o,0,b),"img"!=e&&(g||2===k[n]?(E.insertBefore(d,x?null:h),m(u,l)):k[n].push(d))}function l(e,t,n,r,a){return v=0,t=t||"j",o(e)?c("c"==t?S:w,e,t,this.i++,n,r,a):(y.splice(this.i++,0,e),1==y.length&&s()),this}function u(){var e=f;return e.loader={load:l,i:0},e}var d,f,p=t.documentElement,m=e.setTimeout,h=t.getElementsByTagName("script")[0],g={}.toString,y=[],v=0,b="MozAppearance"in p.style,x=b&&!!t.createRange().compareNode,E=x?p:h.parentNode,p=e.opera&&"[object Opera]"==g.call(e.opera),p=!!t.attachEvent&&!p,w=b?"object":p?"script":"img",S=p?"script":w,C=Array.isArray||function(e){return"[object Array]"==g.call(e)},T=[],k={},j={timeout:function(e,t){return t.length&&(e.timeout=t[0]),e}};f=function(e){function t(e){var t,n,r,e=e.split("!"),o=T.length,a=e.pop(),i=e.length,a={url:a,origUrl:a,prefixes:e};for(n=0;i>n;n++)r=e[n].split("="),(t=j[r.shift()])&&(a=t(a,r));for(n=0;o>n;n++)a=T[n](a);return a}function i(e,o,a,i,s){var c=t(e),l=c.autoCallback;c.url.split(".").pop().split("?").shift(),c.bypass||(o&&(o=r(o)?o:o[e]||o[i]||o[e.split("/").pop().split("?")[0]]),c.instead?c.instead(e,o,a,i,s):(k[c.url]?c.noexec=!0:k[c.url]=1,a.load(c.url,c.forceCSS||!c.forceJS&&"css"==c.url.split(".").pop().split("?").shift()?"c":n,c.noexec,c.attrs,c.timeout),(r(o)||r(l))&&a.load(function(){u(),o&&o(c.origUrl,s,i),l&&l(c.origUrl,s,i),k[c.url]=2})))}function s(e,t){function n(e,n){if(e){if(o(e))n||(d=function(){var e=[].slice.call(arguments);f.apply(this,e),p()}),i(e,d,t,0,l);else if(Object(e)===e)for(c in s=function(){var t,n=0;for(t in e)e.hasOwnProperty(t)&&n++;return n}(),e)e.hasOwnProperty(c)&&(!n&&!--s&&(r(d)?d=function(){var e=[].slice.call(arguments);f.apply(this,e),p()}:d[c]=function(e){return function(){var t=[].slice.call(arguments);e&&e.apply(this,t),p()}}(f[c])),i(e[c],d,t,c,l))}else!n&&p()}var s,c,l=!!e.test,u=e.load||e.both,d=e.callback||a,f=d,p=e.complete||a;n(l?e.yep:e.nope,!!u),u&&n(u)}var c,l,d=this.yepnope.loader;if(o(e))i(e,0,d,0);else if(C(e))for(c=0;c<e.length;c++)l=e[c],o(l)?i(l,0,d,0):C(l)?f(l):Object(l)===l&&s(l,d);else Object(e)===e&&s(e,d)},f.addPrefix=function(e,t){j[e]=t},f.addFilter=function(e){T.push(e)},f.errorTimeout=1e4,null==t.readyState&&t.addEventListener&&(t.readyState="loading",t.addEventListener("DOMContentLoaded",d=function(){t.removeEventListener("DOMContentLoaded",d,0),t.readyState="complete"},0)),e.yepnope=u(),e.yepnope.executeStack=s,e.yepnope.injectJs=function(e,n,r,o,c,l){var u,d,p=t.createElement("script"),o=o||f.errorTimeout;p.src=e;for(d in r)p.setAttribute(d,r[d]);n=l?s:n||a,p.onreadystatechange=p.onload=function(){!u&&i(p.readyState)&&(u=1,n(),p.onload=p.onreadystatechange=null)},m(function(){u||(u=1,n(1))},o),c?p.onload():h.parentNode.insertBefore(p,h)},e.yepnope.injectCss=function(e,n,r,o,i,c){var l,o=t.createElement("link"),n=c?s:n||a;o.href=e,o.rel="stylesheet",o.type="text/css";for(l in r)o.setAttribute(l,r[l]);i||(h.parentNode.insertBefore(o,h),m(n,0))}}(this,document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))},function(e){"use strict";e.matchMedia=e.matchMedia||function(e,t){var n,r=e.documentElement,o=r.firstElementChild||r.firstChild,a=e.createElement("body"),i=e.createElement("div");return i.id="mq-test-1",i.style.cssText="position:absolute;top:-100em",a.style.background="none",a.appendChild(i),function(e){return i.innerHTML='&shy;<style media="'+e+'"> #mq-test-1 { width: 42px; }</style>',r.insertBefore(a,o),n=42===i.offsetWidth,r.removeChild(a),{matches:n,media:e}}}(e.document)}(this),function(e){"use strict";function t(){E(!0)}var n={};e.respond=n,n.update=function(){};var r=[],o=function(){var t=!1;try{t=new e.XMLHttpRequest}catch(n){t=new e.ActiveXObject("Microsoft.XMLHTTP")}return function(){return t}}(),a=function(e,t){var n=o();n&&(n.open("GET",e,!0),n.onreadystatechange=function(){4!==n.readyState||200!==n.status&&304!==n.status||t(n.responseText)},4!==n.readyState&&n.send(null))},i=function(e){return e.replace(n.regex.minmaxwh,"").match(n.regex.other)};if(n.ajax=a,n.queue=r,n.unsupportedmq=i,n.regex={media:/@media[^\{]+\{([^\{\}]*\{[^\}\{]*\})+/gi,keyframes:/@(?:\-(?:o|moz|webkit)\-)?keyframes[^\{]+\{(?:[^\{\}]*\{[^\}\{]*\})+[^\}]*\}/gi,comments:/\/\*[^*]*\*+([^/][^*]*\*+)*\//gi,urls:/(url\()['"]?([^\/\)'"][^:\)'"]+)['"]?(\))/g,findStyles:/@media *([^\{]+)\{([\S\s]+?)$/,only:/(only\s+)?([a-zA-Z]+)\s?/,minw:/\(\s*min\-width\s*:\s*(\s*[0-9\.]+)(px|em)\s*\)/,maxw:/\(\s*max\-width\s*:\s*(\s*[0-9\.]+)(px|em)\s*\)/,minmaxwh:/\(\s*m(in|ax)\-(height|width)\s*:\s*(\s*[0-9\.]+)(px|em)\s*\)/gi,other:/\([^\)]*\)/g},n.mediaQueriesSupported=e.matchMedia&&null!==e.matchMedia("only all")&&e.matchMedia("only all").matches,!n.mediaQueriesSupported){var s,c,l,u=e.document,d=u.documentElement,f=[],p=[],m=[],h={},g=30,y=u.getElementsByTagName("head")[0]||d,v=u.getElementsByTagName("base")[0],b=y.getElementsByTagName("link"),x=function(){var e,t=u.createElement("div"),n=u.body,r=d.style.fontSize,o=n&&n.style.fontSize,a=!1;return t.style.cssText="position:absolute;font-size:1em;width:1em",n||(n=a=u.createElement("body"),n.style.background="none"),d.style.fontSize="100%",n.style.fontSize="100%",n.appendChild(t),a&&d.insertBefore(n,d.firstChild),e=t.offsetWidth,a?d.removeChild(n):n.removeChild(t),d.style.fontSize=r,o&&(n.style.fontSize=o),e=l=parseFloat(e)},E=function(t){var n="clientWidth",r=d[n],o="CSS1Compat"===u.compatMode&&r||u.body[n]||r,a={},i=b[b.length-1],h=(new Date).getTime();if(t&&s&&g>h-s)return e.clearTimeout(c),void(c=e.setTimeout(E,g));s=h;for(var v in f)if(f.hasOwnProperty(v)){var w=f[v],S=w.minw,C=w.maxw,T=null===S,k=null===C,j="em";S&&(S=parseFloat(S)*(S.indexOf(j)>-1?l||x():1)),C&&(C=parseFloat(C)*(C.indexOf(j)>-1?l||x():1)),w.hasquery&&(T&&k||!(T||o>=S)||!(k||C>=o))||(a[w.media]||(a[w.media]=[]),a[w.media].push(p[w.rules]))}for(var M in m)m.hasOwnProperty(M)&&m[M]&&m[M].parentNode===y&&y.removeChild(m[M]);m.length=0;for(var $ in a)if(a.hasOwnProperty($)){var N=u.createElement("style"),z=a[$].join("\n");N.type="text/css",N.media=$,y.insertBefore(N,i.nextSibling),N.styleSheet?N.styleSheet.cssText=z:N.appendChild(u.createTextNode(z)),m.push(N)}},w=function(e,t,r){var o=e.replace(n.regex.comments,"").replace(n.regex.keyframes,"").match(n.regex.media),a=o&&o.length||0;t=t.substring(0,t.lastIndexOf("/"));var s=function(e){return e.replace(n.regex.urls,"$1"+t+"$2$3")},c=!a&&r;t.length&&(t+="/"),c&&(a=1);for(var l=0;a>l;l++){var u,d,m,h;c?(u=r,p.push(s(e))):(u=o[l].match(n.regex.findStyles)&&RegExp.$1,p.push(RegExp.$2&&s(RegExp.$2))),m=u.split(","),h=m.length;for(var g=0;h>g;g++)d=m[g],i(d)||f.push({media:d.split("(")[0].match(n.regex.only)&&RegExp.$2||"all",rules:p.length-1,hasquery:d.indexOf("(")>-1,minw:d.match(n.regex.minw)&&parseFloat(RegExp.$1)+(RegExp.$2||""),maxw:d.match(n.regex.maxw)&&parseFloat(RegExp.$1)+(RegExp.$2||"")})}E()},S=function(){if(r.length){var t=r.shift();a(t.href,function(n){w(n,t.href,t.media),h[t.href]=!0,e.setTimeout(function(){S()},0)})}},C=function(){for(var t=0;t<b.length;t++){var n=b[t],o=n.href,a=n.media,i=n.rel&&"stylesheet"===n.rel.toLowerCase();o&&i&&!h[o]&&(n.styleSheet&&n.styleSheet.rawCssText?(w(n.styleSheet.rawCssText,o,a),h[o]=!0):(!/^([a-zA-Z:]*\/\/)/.test(o)&&!v||o.replace(RegExp.$1,"").split("/")[0]===e.location.host)&&("//"===o.substring(0,2)&&(o=e.location.protocol+o),r.push({href:o,media:a})))}S()};C(),n.update=C,n.getEmValue=x,e.addEventListener?e.addEventListener("resize",t,!1):e.attachEvent&&e.attachEvent("onresize",t)}}(this),function(e){return}(this),setTimeout(function(){$(".background-loading").addClass("loaded")},1e3);