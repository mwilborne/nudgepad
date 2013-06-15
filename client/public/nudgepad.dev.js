/*! jQuery v1.9.1 | (c) 2005, 2012 jQuery Foundation, Inc. | jquery.org/license
//@ sourceMappingURL=jquery.min.map
*/(function(e,t){var n,r,i=typeof t,o=e.document,a=e.location,s=e.jQuery,u=e.$,l={},c=[],p="1.9.1",f=c.concat,d=c.push,h=c.slice,g=c.indexOf,m=l.toString,y=l.hasOwnProperty,v=p.trim,b=function(e,t){return new b.fn.init(e,t,r)},x=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,w=/\S+/g,T=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,N=/^(?:(<[\w\W]+>)[^>]*|#([\w-]*))$/,C=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,k=/^[\],:{}\s]*$/,E=/(?:^|:|,)(?:\s*\[)+/g,S=/\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,A=/"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,j=/^-ms-/,D=/-([\da-z])/gi,L=function(e,t){return t.toUpperCase()},H=function(e){(o.addEventListener||"load"===e.type||"complete"===o.readyState)&&(q(),b.ready())},q=function(){o.addEventListener?(o.removeEventListener("DOMContentLoaded",H,!1),e.removeEventListener("load",H,!1)):(o.detachEvent("onreadystatechange",H),e.detachEvent("onload",H))};b.fn=b.prototype={jquery:p,constructor:b,init:function(e,n,r){var i,a;if(!e)return this;if("string"==typeof e){if(i="<"===e.charAt(0)&&">"===e.charAt(e.length-1)&&e.length>=3?[null,e,null]:N.exec(e),!i||!i[1]&&n)return!n||n.jquery?(n||r).find(e):this.constructor(n).find(e);if(i[1]){if(n=n instanceof b?n[0]:n,b.merge(this,b.parseHTML(i[1],n&&n.nodeType?n.ownerDocument||n:o,!0)),C.test(i[1])&&b.isPlainObject(n))for(i in n)b.isFunction(this[i])?this[i](n[i]):this.attr(i,n[i]);return this}if(a=o.getElementById(i[2]),a&&a.parentNode){if(a.id!==i[2])return r.find(e);this.length=1,this[0]=a}return this.context=o,this.selector=e,this}return e.nodeType?(this.context=this[0]=e,this.length=1,this):b.isFunction(e)?r.ready(e):(e.selector!==t&&(this.selector=e.selector,this.context=e.context),b.makeArray(e,this))},selector:"",length:0,size:function(){return this.length},toArray:function(){return h.call(this)},get:function(e){return null==e?this.toArray():0>e?this[this.length+e]:this[e]},pushStack:function(e){var t=b.merge(this.constructor(),e);return t.prevObject=this,t.context=this.context,t},each:function(e,t){return b.each(this,e,t)},ready:function(e){return b.ready.promise().done(e),this},slice:function(){return this.pushStack(h.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(0>e?t:0);return this.pushStack(n>=0&&t>n?[this[n]]:[])},map:function(e){return this.pushStack(b.map(this,function(t,n){return e.call(t,n,t)}))},end:function(){return this.prevObject||this.constructor(null)},push:d,sort:[].sort,splice:[].splice},b.fn.init.prototype=b.fn,b.extend=b.fn.extend=function(){var e,n,r,i,o,a,s=arguments[0]||{},u=1,l=arguments.length,c=!1;for("boolean"==typeof s&&(c=s,s=arguments[1]||{},u=2),"object"==typeof s||b.isFunction(s)||(s={}),l===u&&(s=this,--u);l>u;u++)if(null!=(o=arguments[u]))for(i in o)e=s[i],r=o[i],s!==r&&(c&&r&&(b.isPlainObject(r)||(n=b.isArray(r)))?(n?(n=!1,a=e&&b.isArray(e)?e:[]):a=e&&b.isPlainObject(e)?e:{},s[i]=b.extend(c,a,r)):r!==t&&(s[i]=r));return s},b.extend({noConflict:function(t){return e.$===b&&(e.$=u),t&&e.jQuery===b&&(e.jQuery=s),b},isReady:!1,readyWait:1,holdReady:function(e){e?b.readyWait++:b.ready(!0)},ready:function(e){if(e===!0?!--b.readyWait:!b.isReady){if(!o.body)return setTimeout(b.ready);b.isReady=!0,e!==!0&&--b.readyWait>0||(n.resolveWith(o,[b]),b.fn.trigger&&b(o).trigger("ready").off("ready"))}},isFunction:function(e){return"function"===b.type(e)},isArray:Array.isArray||function(e){return"array"===b.type(e)},isWindow:function(e){return null!=e&&e==e.window},isNumeric:function(e){return!isNaN(parseFloat(e))&&isFinite(e)},type:function(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?l[m.call(e)]||"object":typeof e},isPlainObject:function(e){if(!e||"object"!==b.type(e)||e.nodeType||b.isWindow(e))return!1;try{if(e.constructor&&!y.call(e,"constructor")&&!y.call(e.constructor.prototype,"isPrototypeOf"))return!1}catch(n){return!1}var r;for(r in e);return r===t||y.call(e,r)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},error:function(e){throw Error(e)},parseHTML:function(e,t,n){if(!e||"string"!=typeof e)return null;"boolean"==typeof t&&(n=t,t=!1),t=t||o;var r=C.exec(e),i=!n&&[];return r?[t.createElement(r[1])]:(r=b.buildFragment([e],t,i),i&&b(i).remove(),b.merge([],r.childNodes))},parseJSON:function(n){return e.JSON&&e.JSON.parse?e.JSON.parse(n):null===n?n:"string"==typeof n&&(n=b.trim(n),n&&k.test(n.replace(S,"@").replace(A,"]").replace(E,"")))?Function("return "+n)():(b.error("Invalid JSON: "+n),t)},parseXML:function(n){var r,i;if(!n||"string"!=typeof n)return null;try{e.DOMParser?(i=new DOMParser,r=i.parseFromString(n,"text/xml")):(r=new ActiveXObject("Microsoft.XMLDOM"),r.async="false",r.loadXML(n))}catch(o){r=t}return r&&r.documentElement&&!r.getElementsByTagName("parsererror").length||b.error("Invalid XML: "+n),r},noop:function(){},globalEval:function(t){t&&b.trim(t)&&(e.execScript||function(t){e.eval.call(e,t)})(t)},camelCase:function(e){return e.replace(j,"ms-").replace(D,L)},nodeName:function(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()},each:function(e,t,n){var r,i=0,o=e.length,a=M(e);if(n){if(a){for(;o>i;i++)if(r=t.apply(e[i],n),r===!1)break}else for(i in e)if(r=t.apply(e[i],n),r===!1)break}else if(a){for(;o>i;i++)if(r=t.call(e[i],i,e[i]),r===!1)break}else for(i in e)if(r=t.call(e[i],i,e[i]),r===!1)break;return e},trim:v&&!v.call("\ufeff\u00a0")?function(e){return null==e?"":v.call(e)}:function(e){return null==e?"":(e+"").replace(T,"")},makeArray:function(e,t){var n=t||[];return null!=e&&(M(Object(e))?b.merge(n,"string"==typeof e?[e]:e):d.call(n,e)),n},inArray:function(e,t,n){var r;if(t){if(g)return g.call(t,e,n);for(r=t.length,n=n?0>n?Math.max(0,r+n):n:0;r>n;n++)if(n in t&&t[n]===e)return n}return-1},merge:function(e,n){var r=n.length,i=e.length,o=0;if("number"==typeof r)for(;r>o;o++)e[i++]=n[o];else while(n[o]!==t)e[i++]=n[o++];return e.length=i,e},grep:function(e,t,n){var r,i=[],o=0,a=e.length;for(n=!!n;a>o;o++)r=!!t(e[o],o),n!==r&&i.push(e[o]);return i},map:function(e,t,n){var r,i=0,o=e.length,a=M(e),s=[];if(a)for(;o>i;i++)r=t(e[i],i,n),null!=r&&(s[s.length]=r);else for(i in e)r=t(e[i],i,n),null!=r&&(s[s.length]=r);return f.apply([],s)},guid:1,proxy:function(e,n){var r,i,o;return"string"==typeof n&&(o=e[n],n=e,e=o),b.isFunction(e)?(r=h.call(arguments,2),i=function(){return e.apply(n||this,r.concat(h.call(arguments)))},i.guid=e.guid=e.guid||b.guid++,i):t},access:function(e,n,r,i,o,a,s){var u=0,l=e.length,c=null==r;if("object"===b.type(r)){o=!0;for(u in r)b.access(e,n,u,r[u],!0,a,s)}else if(i!==t&&(o=!0,b.isFunction(i)||(s=!0),c&&(s?(n.call(e,i),n=null):(c=n,n=function(e,t,n){return c.call(b(e),n)})),n))for(;l>u;u++)n(e[u],r,s?i:i.call(e[u],u,n(e[u],r)));return o?e:c?n.call(e):l?n(e[0],r):a},now:function(){return(new Date).getTime()}}),b.ready.promise=function(t){if(!n)if(n=b.Deferred(),"complete"===o.readyState)setTimeout(b.ready);else if(o.addEventListener)o.addEventListener("DOMContentLoaded",H,!1),e.addEventListener("load",H,!1);else{o.attachEvent("onreadystatechange",H),e.attachEvent("onload",H);var r=!1;try{r=null==e.frameElement&&o.documentElement}catch(i){}r&&r.doScroll&&function a(){if(!b.isReady){try{r.doScroll("left")}catch(e){return setTimeout(a,50)}q(),b.ready()}}()}return n.promise(t)},b.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(e,t){l["[object "+t+"]"]=t.toLowerCase()});function M(e){var t=e.length,n=b.type(e);return b.isWindow(e)?!1:1===e.nodeType&&t?!0:"array"===n||"function"!==n&&(0===t||"number"==typeof t&&t>0&&t-1 in e)}r=b(o);var _={};function F(e){var t=_[e]={};return b.each(e.match(w)||[],function(e,n){t[n]=!0}),t}b.Callbacks=function(e){e="string"==typeof e?_[e]||F(e):b.extend({},e);var n,r,i,o,a,s,u=[],l=!e.once&&[],c=function(t){for(r=e.memory&&t,i=!0,a=s||0,s=0,o=u.length,n=!0;u&&o>a;a++)if(u[a].apply(t[0],t[1])===!1&&e.stopOnFalse){r=!1;break}n=!1,u&&(l?l.length&&c(l.shift()):r?u=[]:p.disable())},p={add:function(){if(u){var t=u.length;(function i(t){b.each(t,function(t,n){var r=b.type(n);"function"===r?e.unique&&p.has(n)||u.push(n):n&&n.length&&"string"!==r&&i(n)})})(arguments),n?o=u.length:r&&(s=t,c(r))}return this},remove:function(){return u&&b.each(arguments,function(e,t){var r;while((r=b.inArray(t,u,r))>-1)u.splice(r,1),n&&(o>=r&&o--,a>=r&&a--)}),this},has:function(e){return e?b.inArray(e,u)>-1:!(!u||!u.length)},empty:function(){return u=[],this},disable:function(){return u=l=r=t,this},disabled:function(){return!u},lock:function(){return l=t,r||p.disable(),this},locked:function(){return!l},fireWith:function(e,t){return t=t||[],t=[e,t.slice?t.slice():t],!u||i&&!l||(n?l.push(t):c(t)),this},fire:function(){return p.fireWith(this,arguments),this},fired:function(){return!!i}};return p},b.extend({Deferred:function(e){var t=[["resolve","done",b.Callbacks("once memory"),"resolved"],["reject","fail",b.Callbacks("once memory"),"rejected"],["notify","progress",b.Callbacks("memory")]],n="pending",r={state:function(){return n},always:function(){return i.done(arguments).fail(arguments),this},then:function(){var e=arguments;return b.Deferred(function(n){b.each(t,function(t,o){var a=o[0],s=b.isFunction(e[t])&&e[t];i[o[1]](function(){var e=s&&s.apply(this,arguments);e&&b.isFunction(e.promise)?e.promise().done(n.resolve).fail(n.reject).progress(n.notify):n[a+"With"](this===r?n.promise():this,s?[e]:arguments)})}),e=null}).promise()},promise:function(e){return null!=e?b.extend(e,r):r}},i={};return r.pipe=r.then,b.each(t,function(e,o){var a=o[2],s=o[3];r[o[1]]=a.add,s&&a.add(function(){n=s},t[1^e][2].disable,t[2][2].lock),i[o[0]]=function(){return i[o[0]+"With"](this===i?r:this,arguments),this},i[o[0]+"With"]=a.fireWith}),r.promise(i),e&&e.call(i,i),i},when:function(e){var t=0,n=h.call(arguments),r=n.length,i=1!==r||e&&b.isFunction(e.promise)?r:0,o=1===i?e:b.Deferred(),a=function(e,t,n){return function(r){t[e]=this,n[e]=arguments.length>1?h.call(arguments):r,n===s?o.notifyWith(t,n):--i||o.resolveWith(t,n)}},s,u,l;if(r>1)for(s=Array(r),u=Array(r),l=Array(r);r>t;t++)n[t]&&b.isFunction(n[t].promise)?n[t].promise().done(a(t,l,n)).fail(o.reject).progress(a(t,u,s)):--i;return i||o.resolveWith(l,n),o.promise()}}),b.support=function(){var t,n,r,a,s,u,l,c,p,f,d=o.createElement("div");if(d.setAttribute("className","t"),d.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",n=d.getElementsByTagName("*"),r=d.getElementsByTagName("a")[0],!n||!r||!n.length)return{};s=o.createElement("select"),l=s.appendChild(o.createElement("option")),a=d.getElementsByTagName("input")[0],r.style.cssText="top:1px;float:left;opacity:.5",t={getSetAttribute:"t"!==d.className,leadingWhitespace:3===d.firstChild.nodeType,tbody:!d.getElementsByTagName("tbody").length,htmlSerialize:!!d.getElementsByTagName("link").length,style:/top/.test(r.getAttribute("style")),hrefNormalized:"/a"===r.getAttribute("href"),opacity:/^0.5/.test(r.style.opacity),cssFloat:!!r.style.cssFloat,checkOn:!!a.value,optSelected:l.selected,enctype:!!o.createElement("form").enctype,html5Clone:"<:nav></:nav>"!==o.createElement("nav").cloneNode(!0).outerHTML,boxModel:"CSS1Compat"===o.compatMode,deleteExpando:!0,noCloneEvent:!0,inlineBlockNeedsLayout:!1,shrinkWrapBlocks:!1,reliableMarginRight:!0,boxSizingReliable:!0,pixelPosition:!1},a.checked=!0,t.noCloneChecked=a.cloneNode(!0).checked,s.disabled=!0,t.optDisabled=!l.disabled;try{delete d.test}catch(h){t.deleteExpando=!1}a=o.createElement("input"),a.setAttribute("value",""),t.input=""===a.getAttribute("value"),a.value="t",a.setAttribute("type","radio"),t.radioValue="t"===a.value,a.setAttribute("checked","t"),a.setAttribute("name","t"),u=o.createDocumentFragment(),u.appendChild(a),t.appendChecked=a.checked,t.checkClone=u.cloneNode(!0).cloneNode(!0).lastChild.checked,d.attachEvent&&(d.attachEvent("onclick",function(){t.noCloneEvent=!1}),d.cloneNode(!0).click());for(f in{submit:!0,change:!0,focusin:!0})d.setAttribute(c="on"+f,"t"),t[f+"Bubbles"]=c in e||d.attributes[c].expando===!1;return d.style.backgroundClip="content-box",d.cloneNode(!0).style.backgroundClip="",t.clearCloneStyle="content-box"===d.style.backgroundClip,b(function(){var n,r,a,s="padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",u=o.getElementsByTagName("body")[0];u&&(n=o.createElement("div"),n.style.cssText="border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px",u.appendChild(n).appendChild(d),d.innerHTML="<table><tr><td></td><td>t</td></tr></table>",a=d.getElementsByTagName("td"),a[0].style.cssText="padding:0;margin:0;border:0;display:none",p=0===a[0].offsetHeight,a[0].style.display="",a[1].style.display="none",t.reliableHiddenOffsets=p&&0===a[0].offsetHeight,d.innerHTML="",d.style.cssText="box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;",t.boxSizing=4===d.offsetWidth,t.doesNotIncludeMarginInBodyOffset=1!==u.offsetTop,e.getComputedStyle&&(t.pixelPosition="1%"!==(e.getComputedStyle(d,null)||{}).top,t.boxSizingReliable="4px"===(e.getComputedStyle(d,null)||{width:"4px"}).width,r=d.appendChild(o.createElement("div")),r.style.cssText=d.style.cssText=s,r.style.marginRight=r.style.width="0",d.style.width="1px",t.reliableMarginRight=!parseFloat((e.getComputedStyle(r,null)||{}).marginRight)),typeof d.style.zoom!==i&&(d.innerHTML="",d.style.cssText=s+"width:1px;padding:1px;display:inline;zoom:1",t.inlineBlockNeedsLayout=3===d.offsetWidth,d.style.display="block",d.innerHTML="<div></div>",d.firstChild.style.width="5px",t.shrinkWrapBlocks=3!==d.offsetWidth,t.inlineBlockNeedsLayout&&(u.style.zoom=1)),u.removeChild(n),n=d=a=r=null)}),n=s=u=l=r=a=null,t}();var O=/(?:\{[\s\S]*\}|\[[\s\S]*\])$/,B=/([A-Z])/g;function P(e,n,r,i){if(b.acceptData(e)){var o,a,s=b.expando,u="string"==typeof n,l=e.nodeType,p=l?b.cache:e,f=l?e[s]:e[s]&&s;if(f&&p[f]&&(i||p[f].data)||!u||r!==t)return f||(l?e[s]=f=c.pop()||b.guid++:f=s),p[f]||(p[f]={},l||(p[f].toJSON=b.noop)),("object"==typeof n||"function"==typeof n)&&(i?p[f]=b.extend(p[f],n):p[f].data=b.extend(p[f].data,n)),o=p[f],i||(o.data||(o.data={}),o=o.data),r!==t&&(o[b.camelCase(n)]=r),u?(a=o[n],null==a&&(a=o[b.camelCase(n)])):a=o,a}}function R(e,t,n){if(b.acceptData(e)){var r,i,o,a=e.nodeType,s=a?b.cache:e,u=a?e[b.expando]:b.expando;if(s[u]){if(t&&(o=n?s[u]:s[u].data)){b.isArray(t)?t=t.concat(b.map(t,b.camelCase)):t in o?t=[t]:(t=b.camelCase(t),t=t in o?[t]:t.split(" "));for(r=0,i=t.length;i>r;r++)delete o[t[r]];if(!(n?$:b.isEmptyObject)(o))return}(n||(delete s[u].data,$(s[u])))&&(a?b.cleanData([e],!0):b.support.deleteExpando||s!=s.window?delete s[u]:s[u]=null)}}}b.extend({cache:{},expando:"jQuery"+(p+Math.random()).replace(/\D/g,""),noData:{embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",applet:!0},hasData:function(e){return e=e.nodeType?b.cache[e[b.expando]]:e[b.expando],!!e&&!$(e)},data:function(e,t,n){return P(e,t,n)},removeData:function(e,t){return R(e,t)},_data:function(e,t,n){return P(e,t,n,!0)},_removeData:function(e,t){return R(e,t,!0)},acceptData:function(e){if(e.nodeType&&1!==e.nodeType&&9!==e.nodeType)return!1;var t=e.nodeName&&b.noData[e.nodeName.toLowerCase()];return!t||t!==!0&&e.getAttribute("classid")===t}}),b.fn.extend({data:function(e,n){var r,i,o=this[0],a=0,s=null;if(e===t){if(this.length&&(s=b.data(o),1===o.nodeType&&!b._data(o,"parsedAttrs"))){for(r=o.attributes;r.length>a;a++)i=r[a].name,i.indexOf("data-")||(i=b.camelCase(i.slice(5)),W(o,i,s[i]));b._data(o,"parsedAttrs",!0)}return s}return"object"==typeof e?this.each(function(){b.data(this,e)}):b.access(this,function(n){return n===t?o?W(o,e,b.data(o,e)):null:(this.each(function(){b.data(this,e,n)}),t)},null,n,arguments.length>1,null,!0)},removeData:function(e){return this.each(function(){b.removeData(this,e)})}});function W(e,n,r){if(r===t&&1===e.nodeType){var i="data-"+n.replace(B,"-$1").toLowerCase();if(r=e.getAttribute(i),"string"==typeof r){try{r="true"===r?!0:"false"===r?!1:"null"===r?null:+r+""===r?+r:O.test(r)?b.parseJSON(r):r}catch(o){}b.data(e,n,r)}else r=t}return r}function $(e){var t;for(t in e)if(("data"!==t||!b.isEmptyObject(e[t]))&&"toJSON"!==t)return!1;return!0}b.extend({queue:function(e,n,r){var i;return e?(n=(n||"fx")+"queue",i=b._data(e,n),r&&(!i||b.isArray(r)?i=b._data(e,n,b.makeArray(r)):i.push(r)),i||[]):t},dequeue:function(e,t){t=t||"fx";var n=b.queue(e,t),r=n.length,i=n.shift(),o=b._queueHooks(e,t),a=function(){b.dequeue(e,t)};"inprogress"===i&&(i=n.shift(),r--),o.cur=i,i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,a,o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return b._data(e,n)||b._data(e,n,{empty:b.Callbacks("once memory").add(function(){b._removeData(e,t+"queue"),b._removeData(e,n)})})}}),b.fn.extend({queue:function(e,n){var r=2;return"string"!=typeof e&&(n=e,e="fx",r--),r>arguments.length?b.queue(this[0],e):n===t?this:this.each(function(){var t=b.queue(this,e,n);b._queueHooks(this,e),"fx"===e&&"inprogress"!==t[0]&&b.dequeue(this,e)})},dequeue:function(e){return this.each(function(){b.dequeue(this,e)})},delay:function(e,t){return e=b.fx?b.fx.speeds[e]||e:e,t=t||"fx",this.queue(t,function(t,n){var r=setTimeout(t,e);n.stop=function(){clearTimeout(r)}})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,n){var r,i=1,o=b.Deferred(),a=this,s=this.length,u=function(){--i||o.resolveWith(a,[a])};"string"!=typeof e&&(n=e,e=t),e=e||"fx";while(s--)r=b._data(a[s],e+"queueHooks"),r&&r.empty&&(i++,r.empty.add(u));return u(),o.promise(n)}});var I,z,X=/[\t\r\n]/g,U=/\r/g,V=/^(?:input|select|textarea|button|object)$/i,Y=/^(?:a|area)$/i,J=/^(?:checked|selected|autofocus|autoplay|async|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped)$/i,G=/^(?:checked|selected)$/i,Q=b.support.getSetAttribute,K=b.support.input;b.fn.extend({attr:function(e,t){return b.access(this,b.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){b.removeAttr(this,e)})},prop:function(e,t){return b.access(this,b.prop,e,t,arguments.length>1)},removeProp:function(e){return e=b.propFix[e]||e,this.each(function(){try{this[e]=t,delete this[e]}catch(n){}})},addClass:function(e){var t,n,r,i,o,a=0,s=this.length,u="string"==typeof e&&e;if(b.isFunction(e))return this.each(function(t){b(this).addClass(e.call(this,t,this.className))});if(u)for(t=(e||"").match(w)||[];s>a;a++)if(n=this[a],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(X," "):" ")){o=0;while(i=t[o++])0>r.indexOf(" "+i+" ")&&(r+=i+" ");n.className=b.trim(r)}return this},removeClass:function(e){var t,n,r,i,o,a=0,s=this.length,u=0===arguments.length||"string"==typeof e&&e;if(b.isFunction(e))return this.each(function(t){b(this).removeClass(e.call(this,t,this.className))});if(u)for(t=(e||"").match(w)||[];s>a;a++)if(n=this[a],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(X," "):"")){o=0;while(i=t[o++])while(r.indexOf(" "+i+" ")>=0)r=r.replace(" "+i+" "," ");n.className=e?b.trim(r):""}return this},toggleClass:function(e,t){var n=typeof e,r="boolean"==typeof t;return b.isFunction(e)?this.each(function(n){b(this).toggleClass(e.call(this,n,this.className,t),t)}):this.each(function(){if("string"===n){var o,a=0,s=b(this),u=t,l=e.match(w)||[];while(o=l[a++])u=r?u:!s.hasClass(o),s[u?"addClass":"removeClass"](o)}else(n===i||"boolean"===n)&&(this.className&&b._data(this,"__className__",this.className),this.className=this.className||e===!1?"":b._data(this,"__className__")||"")})},hasClass:function(e){var t=" "+e+" ",n=0,r=this.length;for(;r>n;n++)if(1===this[n].nodeType&&(" "+this[n].className+" ").replace(X," ").indexOf(t)>=0)return!0;return!1},val:function(e){var n,r,i,o=this[0];{if(arguments.length)return i=b.isFunction(e),this.each(function(n){var o,a=b(this);1===this.nodeType&&(o=i?e.call(this,n,a.val()):e,null==o?o="":"number"==typeof o?o+="":b.isArray(o)&&(o=b.map(o,function(e){return null==e?"":e+""})),r=b.valHooks[this.type]||b.valHooks[this.nodeName.toLowerCase()],r&&"set"in r&&r.set(this,o,"value")!==t||(this.value=o))});if(o)return r=b.valHooks[o.type]||b.valHooks[o.nodeName.toLowerCase()],r&&"get"in r&&(n=r.get(o,"value"))!==t?n:(n=o.value,"string"==typeof n?n.replace(U,""):null==n?"":n)}}}),b.extend({valHooks:{option:{get:function(e){var t=e.attributes.value;return!t||t.specified?e.value:e.text}},select:{get:function(e){var t,n,r=e.options,i=e.selectedIndex,o="select-one"===e.type||0>i,a=o?null:[],s=o?i+1:r.length,u=0>i?s:o?i:0;for(;s>u;u++)if(n=r[u],!(!n.selected&&u!==i||(b.support.optDisabled?n.disabled:null!==n.getAttribute("disabled"))||n.parentNode.disabled&&b.nodeName(n.parentNode,"optgroup"))){if(t=b(n).val(),o)return t;a.push(t)}return a},set:function(e,t){var n=b.makeArray(t);return b(e).find("option").each(function(){this.selected=b.inArray(b(this).val(),n)>=0}),n.length||(e.selectedIndex=-1),n}}},attr:function(e,n,r){var o,a,s,u=e.nodeType;if(e&&3!==u&&8!==u&&2!==u)return typeof e.getAttribute===i?b.prop(e,n,r):(a=1!==u||!b.isXMLDoc(e),a&&(n=n.toLowerCase(),o=b.attrHooks[n]||(J.test(n)?z:I)),r===t?o&&a&&"get"in o&&null!==(s=o.get(e,n))?s:(typeof e.getAttribute!==i&&(s=e.getAttribute(n)),null==s?t:s):null!==r?o&&a&&"set"in o&&(s=o.set(e,r,n))!==t?s:(e.setAttribute(n,r+""),r):(b.removeAttr(e,n),t))},removeAttr:function(e,t){var n,r,i=0,o=t&&t.match(w);if(o&&1===e.nodeType)while(n=o[i++])r=b.propFix[n]||n,J.test(n)?!Q&&G.test(n)?e[b.camelCase("default-"+n)]=e[r]=!1:e[r]=!1:b.attr(e,n,""),e.removeAttribute(Q?n:r)},attrHooks:{type:{set:function(e,t){if(!b.support.radioValue&&"radio"===t&&b.nodeName(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},propFix:{tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},prop:function(e,n,r){var i,o,a,s=e.nodeType;if(e&&3!==s&&8!==s&&2!==s)return a=1!==s||!b.isXMLDoc(e),a&&(n=b.propFix[n]||n,o=b.propHooks[n]),r!==t?o&&"set"in o&&(i=o.set(e,r,n))!==t?i:e[n]=r:o&&"get"in o&&null!==(i=o.get(e,n))?i:e[n]},propHooks:{tabIndex:{get:function(e){var n=e.getAttributeNode("tabindex");return n&&n.specified?parseInt(n.value,10):V.test(e.nodeName)||Y.test(e.nodeName)&&e.href?0:t}}}}),z={get:function(e,n){var r=b.prop(e,n),i="boolean"==typeof r&&e.getAttribute(n),o="boolean"==typeof r?K&&Q?null!=i:G.test(n)?e[b.camelCase("default-"+n)]:!!i:e.getAttributeNode(n);return o&&o.value!==!1?n.toLowerCase():t},set:function(e,t,n){return t===!1?b.removeAttr(e,n):K&&Q||!G.test(n)?e.setAttribute(!Q&&b.propFix[n]||n,n):e[b.camelCase("default-"+n)]=e[n]=!0,n}},K&&Q||(b.attrHooks.value={get:function(e,n){var r=e.getAttributeNode(n);return b.nodeName(e,"input")?e.defaultValue:r&&r.specified?r.value:t},set:function(e,n,r){return b.nodeName(e,"input")?(e.defaultValue=n,t):I&&I.set(e,n,r)}}),Q||(I=b.valHooks.button={get:function(e,n){var r=e.getAttributeNode(n);return r&&("id"===n||"name"===n||"coords"===n?""!==r.value:r.specified)?r.value:t},set:function(e,n,r){var i=e.getAttributeNode(r);return i||e.setAttributeNode(i=e.ownerDocument.createAttribute(r)),i.value=n+="","value"===r||n===e.getAttribute(r)?n:t}},b.attrHooks.contenteditable={get:I.get,set:function(e,t,n){I.set(e,""===t?!1:t,n)}},b.each(["width","height"],function(e,n){b.attrHooks[n]=b.extend(b.attrHooks[n],{set:function(e,r){return""===r?(e.setAttribute(n,"auto"),r):t}})})),b.support.hrefNormalized||(b.each(["href","src","width","height"],function(e,n){b.attrHooks[n]=b.extend(b.attrHooks[n],{get:function(e){var r=e.getAttribute(n,2);return null==r?t:r}})}),b.each(["href","src"],function(e,t){b.propHooks[t]={get:function(e){return e.getAttribute(t,4)}}})),b.support.style||(b.attrHooks.style={get:function(e){return e.style.cssText||t},set:function(e,t){return e.style.cssText=t+""}}),b.support.optSelected||(b.propHooks.selected=b.extend(b.propHooks.selected,{get:function(e){var t=e.parentNode;return t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex),null}})),b.support.enctype||(b.propFix.enctype="encoding"),b.support.checkOn||b.each(["radio","checkbox"],function(){b.valHooks[this]={get:function(e){return null===e.getAttribute("value")?"on":e.value}}}),b.each(["radio","checkbox"],function(){b.valHooks[this]=b.extend(b.valHooks[this],{set:function(e,n){return b.isArray(n)?e.checked=b.inArray(b(e).val(),n)>=0:t}})});var Z=/^(?:input|select|textarea)$/i,et=/^key/,tt=/^(?:mouse|contextmenu)|click/,nt=/^(?:focusinfocus|focusoutblur)$/,rt=/^([^.]*)(?:\.(.+)|)$/;function it(){return!0}function ot(){return!1}b.event={global:{},add:function(e,n,r,o,a){var s,u,l,c,p,f,d,h,g,m,y,v=b._data(e);if(v){r.handler&&(c=r,r=c.handler,a=c.selector),r.guid||(r.guid=b.guid++),(u=v.events)||(u=v.events={}),(f=v.handle)||(f=v.handle=function(e){return typeof b===i||e&&b.event.triggered===e.type?t:b.event.dispatch.apply(f.elem,arguments)},f.elem=e),n=(n||"").match(w)||[""],l=n.length;while(l--)s=rt.exec(n[l])||[],g=y=s[1],m=(s[2]||"").split(".").sort(),p=b.event.special[g]||{},g=(a?p.delegateType:p.bindType)||g,p=b.event.special[g]||{},d=b.extend({type:g,origType:y,data:o,handler:r,guid:r.guid,selector:a,needsContext:a&&b.expr.match.needsContext.test(a),namespace:m.join(".")},c),(h=u[g])||(h=u[g]=[],h.delegateCount=0,p.setup&&p.setup.call(e,o,m,f)!==!1||(e.addEventListener?e.addEventListener(g,f,!1):e.attachEvent&&e.attachEvent("on"+g,f))),p.add&&(p.add.call(e,d),d.handler.guid||(d.handler.guid=r.guid)),a?h.splice(h.delegateCount++,0,d):h.push(d),b.event.global[g]=!0;e=null}},remove:function(e,t,n,r,i){var o,a,s,u,l,c,p,f,d,h,g,m=b.hasData(e)&&b._data(e);if(m&&(c=m.events)){t=(t||"").match(w)||[""],l=t.length;while(l--)if(s=rt.exec(t[l])||[],d=g=s[1],h=(s[2]||"").split(".").sort(),d){p=b.event.special[d]||{},d=(r?p.delegateType:p.bindType)||d,f=c[d]||[],s=s[2]&&RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),u=o=f.length;while(o--)a=f[o],!i&&g!==a.origType||n&&n.guid!==a.guid||s&&!s.test(a.namespace)||r&&r!==a.selector&&("**"!==r||!a.selector)||(f.splice(o,1),a.selector&&f.delegateCount--,p.remove&&p.remove.call(e,a));u&&!f.length&&(p.teardown&&p.teardown.call(e,h,m.handle)!==!1||b.removeEvent(e,d,m.handle),delete c[d])}else for(d in c)b.event.remove(e,d+t[l],n,r,!0);b.isEmptyObject(c)&&(delete m.handle,b._removeData(e,"events"))}},trigger:function(n,r,i,a){var s,u,l,c,p,f,d,h=[i||o],g=y.call(n,"type")?n.type:n,m=y.call(n,"namespace")?n.namespace.split("."):[];if(l=f=i=i||o,3!==i.nodeType&&8!==i.nodeType&&!nt.test(g+b.event.triggered)&&(g.indexOf(".")>=0&&(m=g.split("."),g=m.shift(),m.sort()),u=0>g.indexOf(":")&&"on"+g,n=n[b.expando]?n:new b.Event(g,"object"==typeof n&&n),n.isTrigger=!0,n.namespace=m.join("."),n.namespace_re=n.namespace?RegExp("(^|\\.)"+m.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,n.result=t,n.target||(n.target=i),r=null==r?[n]:b.makeArray(r,[n]),p=b.event.special[g]||{},a||!p.trigger||p.trigger.apply(i,r)!==!1)){if(!a&&!p.noBubble&&!b.isWindow(i)){for(c=p.delegateType||g,nt.test(c+g)||(l=l.parentNode);l;l=l.parentNode)h.push(l),f=l;f===(i.ownerDocument||o)&&h.push(f.defaultView||f.parentWindow||e)}d=0;while((l=h[d++])&&!n.isPropagationStopped())n.type=d>1?c:p.bindType||g,s=(b._data(l,"events")||{})[n.type]&&b._data(l,"handle"),s&&s.apply(l,r),s=u&&l[u],s&&b.acceptData(l)&&s.apply&&s.apply(l,r)===!1&&n.preventDefault();if(n.type=g,!(a||n.isDefaultPrevented()||p._default&&p._default.apply(i.ownerDocument,r)!==!1||"click"===g&&b.nodeName(i,"a")||!b.acceptData(i)||!u||!i[g]||b.isWindow(i))){f=i[u],f&&(i[u]=null),b.event.triggered=g;try{i[g]()}catch(v){}b.event.triggered=t,f&&(i[u]=f)}return n.result}},dispatch:function(e){e=b.event.fix(e);var n,r,i,o,a,s=[],u=h.call(arguments),l=(b._data(this,"events")||{})[e.type]||[],c=b.event.special[e.type]||{};if(u[0]=e,e.delegateTarget=this,!c.preDispatch||c.preDispatch.call(this,e)!==!1){s=b.event.handlers.call(this,e,l),n=0;while((o=s[n++])&&!e.isPropagationStopped()){e.currentTarget=o.elem,a=0;while((i=o.handlers[a++])&&!e.isImmediatePropagationStopped())(!e.namespace_re||e.namespace_re.test(i.namespace))&&(e.handleObj=i,e.data=i.data,r=((b.event.special[i.origType]||{}).handle||i.handler).apply(o.elem,u),r!==t&&(e.result=r)===!1&&(e.preventDefault(),e.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,e),e.result}},handlers:function(e,n){var r,i,o,a,s=[],u=n.delegateCount,l=e.target;if(u&&l.nodeType&&(!e.button||"click"!==e.type))for(;l!=this;l=l.parentNode||this)if(1===l.nodeType&&(l.disabled!==!0||"click"!==e.type)){for(o=[],a=0;u>a;a++)i=n[a],r=i.selector+" ",o[r]===t&&(o[r]=i.needsContext?b(r,this).index(l)>=0:b.find(r,this,null,[l]).length),o[r]&&o.push(i);o.length&&s.push({elem:l,handlers:o})}return n.length>u&&s.push({elem:this,handlers:n.slice(u)}),s},fix:function(e){if(e[b.expando])return e;var t,n,r,i=e.type,a=e,s=this.fixHooks[i];s||(this.fixHooks[i]=s=tt.test(i)?this.mouseHooks:et.test(i)?this.keyHooks:{}),r=s.props?this.props.concat(s.props):this.props,e=new b.Event(a),t=r.length;while(t--)n=r[t],e[n]=a[n];return e.target||(e.target=a.srcElement||o),3===e.target.nodeType&&(e.target=e.target.parentNode),e.metaKey=!!e.metaKey,s.filter?s.filter(e,a):e},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(e,t){return null==e.which&&(e.which=null!=t.charCode?t.charCode:t.keyCode),e}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(e,n){var r,i,a,s=n.button,u=n.fromElement;return null==e.pageX&&null!=n.clientX&&(i=e.target.ownerDocument||o,a=i.documentElement,r=i.body,e.pageX=n.clientX+(a&&a.scrollLeft||r&&r.scrollLeft||0)-(a&&a.clientLeft||r&&r.clientLeft||0),e.pageY=n.clientY+(a&&a.scrollTop||r&&r.scrollTop||0)-(a&&a.clientTop||r&&r.clientTop||0)),!e.relatedTarget&&u&&(e.relatedTarget=u===e.target?n.toElement:u),e.which||s===t||(e.which=1&s?1:2&s?3:4&s?2:0),e}},special:{load:{noBubble:!0},click:{trigger:function(){return b.nodeName(this,"input")&&"checkbox"===this.type&&this.click?(this.click(),!1):t}},focus:{trigger:function(){if(this!==o.activeElement&&this.focus)try{return this.focus(),!1}catch(e){}},delegateType:"focusin"},blur:{trigger:function(){return this===o.activeElement&&this.blur?(this.blur(),!1):t},delegateType:"focusout"},beforeunload:{postDispatch:function(e){e.result!==t&&(e.originalEvent.returnValue=e.result)}}},simulate:function(e,t,n,r){var i=b.extend(new b.Event,n,{type:e,isSimulated:!0,originalEvent:{}});r?b.event.trigger(i,null,t):b.event.dispatch.call(t,i),i.isDefaultPrevented()&&n.preventDefault()}},b.removeEvent=o.removeEventListener?function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n,!1)}:function(e,t,n){var r="on"+t;e.detachEvent&&(typeof e[r]===i&&(e[r]=null),e.detachEvent(r,n))},b.Event=function(e,n){return this instanceof b.Event?(e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||e.returnValue===!1||e.getPreventDefault&&e.getPreventDefault()?it:ot):this.type=e,n&&b.extend(this,n),this.timeStamp=e&&e.timeStamp||b.now(),this[b.expando]=!0,t):new b.Event(e,n)},b.Event.prototype={isDefaultPrevented:ot,isPropagationStopped:ot,isImmediatePropagationStopped:ot,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=it,e&&(e.preventDefault?e.preventDefault():e.returnValue=!1)},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=it,e&&(e.stopPropagation&&e.stopPropagation(),e.cancelBubble=!0)},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=it,this.stopPropagation()}},b.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(e,t){b.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=this,i=e.relatedTarget,o=e.handleObj;
return(!i||i!==r&&!b.contains(r,i))&&(e.type=o.origType,n=o.handler.apply(this,arguments),e.type=t),n}}}),b.support.submitBubbles||(b.event.special.submit={setup:function(){return b.nodeName(this,"form")?!1:(b.event.add(this,"click._submit keypress._submit",function(e){var n=e.target,r=b.nodeName(n,"input")||b.nodeName(n,"button")?n.form:t;r&&!b._data(r,"submitBubbles")&&(b.event.add(r,"submit._submit",function(e){e._submit_bubble=!0}),b._data(r,"submitBubbles",!0))}),t)},postDispatch:function(e){e._submit_bubble&&(delete e._submit_bubble,this.parentNode&&!e.isTrigger&&b.event.simulate("submit",this.parentNode,e,!0))},teardown:function(){return b.nodeName(this,"form")?!1:(b.event.remove(this,"._submit"),t)}}),b.support.changeBubbles||(b.event.special.change={setup:function(){return Z.test(this.nodeName)?(("checkbox"===this.type||"radio"===this.type)&&(b.event.add(this,"propertychange._change",function(e){"checked"===e.originalEvent.propertyName&&(this._just_changed=!0)}),b.event.add(this,"click._change",function(e){this._just_changed&&!e.isTrigger&&(this._just_changed=!1),b.event.simulate("change",this,e,!0)})),!1):(b.event.add(this,"beforeactivate._change",function(e){var t=e.target;Z.test(t.nodeName)&&!b._data(t,"changeBubbles")&&(b.event.add(t,"change._change",function(e){!this.parentNode||e.isSimulated||e.isTrigger||b.event.simulate("change",this.parentNode,e,!0)}),b._data(t,"changeBubbles",!0))}),t)},handle:function(e){var n=e.target;return this!==n||e.isSimulated||e.isTrigger||"radio"!==n.type&&"checkbox"!==n.type?e.handleObj.handler.apply(this,arguments):t},teardown:function(){return b.event.remove(this,"._change"),!Z.test(this.nodeName)}}),b.support.focusinBubbles||b.each({focus:"focusin",blur:"focusout"},function(e,t){var n=0,r=function(e){b.event.simulate(t,e.target,b.event.fix(e),!0)};b.event.special[t]={setup:function(){0===n++&&o.addEventListener(e,r,!0)},teardown:function(){0===--n&&o.removeEventListener(e,r,!0)}}}),b.fn.extend({on:function(e,n,r,i,o){var a,s;if("object"==typeof e){"string"!=typeof n&&(r=r||n,n=t);for(a in e)this.on(a,n,r,e[a],o);return this}if(null==r&&null==i?(i=n,r=n=t):null==i&&("string"==typeof n?(i=r,r=t):(i=r,r=n,n=t)),i===!1)i=ot;else if(!i)return this;return 1===o&&(s=i,i=function(e){return b().off(e),s.apply(this,arguments)},i.guid=s.guid||(s.guid=b.guid++)),this.each(function(){b.event.add(this,e,i,r,n)})},one:function(e,t,n,r){return this.on(e,t,n,r,1)},off:function(e,n,r){var i,o;if(e&&e.preventDefault&&e.handleObj)return i=e.handleObj,b(e.delegateTarget).off(i.namespace?i.origType+"."+i.namespace:i.origType,i.selector,i.handler),this;if("object"==typeof e){for(o in e)this.off(o,n,e[o]);return this}return(n===!1||"function"==typeof n)&&(r=n,n=t),r===!1&&(r=ot),this.each(function(){b.event.remove(this,e,r,n)})},bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)},trigger:function(e,t){return this.each(function(){b.event.trigger(e,t,this)})},triggerHandler:function(e,n){var r=this[0];return r?b.event.trigger(e,n,r,!0):t}}),function(e,t){var n,r,i,o,a,s,u,l,c,p,f,d,h,g,m,y,v,x="sizzle"+-new Date,w=e.document,T={},N=0,C=0,k=it(),E=it(),S=it(),A=typeof t,j=1<<31,D=[],L=D.pop,H=D.push,q=D.slice,M=D.indexOf||function(e){var t=0,n=this.length;for(;n>t;t++)if(this[t]===e)return t;return-1},_="[\\x20\\t\\r\\n\\f]",F="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",O=F.replace("w","w#"),B="([*^$|!~]?=)",P="\\["+_+"*("+F+")"+_+"*(?:"+B+_+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+O+")|)|)"+_+"*\\]",R=":("+F+")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|"+P.replace(3,8)+")*)|.*)\\)|)",W=RegExp("^"+_+"+|((?:^|[^\\\\])(?:\\\\.)*)"+_+"+$","g"),$=RegExp("^"+_+"*,"+_+"*"),I=RegExp("^"+_+"*([\\x20\\t\\r\\n\\f>+~])"+_+"*"),z=RegExp(R),X=RegExp("^"+O+"$"),U={ID:RegExp("^#("+F+")"),CLASS:RegExp("^\\.("+F+")"),NAME:RegExp("^\\[name=['\"]?("+F+")['\"]?\\]"),TAG:RegExp("^("+F.replace("w","w*")+")"),ATTR:RegExp("^"+P),PSEUDO:RegExp("^"+R),CHILD:RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+_+"*(even|odd|(([+-]|)(\\d*)n|)"+_+"*(?:([+-]|)"+_+"*(\\d+)|))"+_+"*\\)|)","i"),needsContext:RegExp("^"+_+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+_+"*((?:-\\d)?\\d*)"+_+"*\\)|)(?=[^-]|$)","i")},V=/[\x20\t\r\n\f]*[+~]/,Y=/^[^{]+\{\s*\[native code/,J=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,G=/^(?:input|select|textarea|button)$/i,Q=/^h\d$/i,K=/'|\\/g,Z=/\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,et=/\\([\da-fA-F]{1,6}[\x20\t\r\n\f]?|.)/g,tt=function(e,t){var n="0x"+t-65536;return n!==n?t:0>n?String.fromCharCode(n+65536):String.fromCharCode(55296|n>>10,56320|1023&n)};try{q.call(w.documentElement.childNodes,0)[0].nodeType}catch(nt){q=function(e){var t,n=[];while(t=this[e++])n.push(t);return n}}function rt(e){return Y.test(e+"")}function it(){var e,t=[];return e=function(n,r){return t.push(n+=" ")>i.cacheLength&&delete e[t.shift()],e[n]=r}}function ot(e){return e[x]=!0,e}function at(e){var t=p.createElement("div");try{return e(t)}catch(n){return!1}finally{t=null}}function st(e,t,n,r){var i,o,a,s,u,l,f,g,m,v;if((t?t.ownerDocument||t:w)!==p&&c(t),t=t||p,n=n||[],!e||"string"!=typeof e)return n;if(1!==(s=t.nodeType)&&9!==s)return[];if(!d&&!r){if(i=J.exec(e))if(a=i[1]){if(9===s){if(o=t.getElementById(a),!o||!o.parentNode)return n;if(o.id===a)return n.push(o),n}else if(t.ownerDocument&&(o=t.ownerDocument.getElementById(a))&&y(t,o)&&o.id===a)return n.push(o),n}else{if(i[2])return H.apply(n,q.call(t.getElementsByTagName(e),0)),n;if((a=i[3])&&T.getByClassName&&t.getElementsByClassName)return H.apply(n,q.call(t.getElementsByClassName(a),0)),n}if(T.qsa&&!h.test(e)){if(f=!0,g=x,m=t,v=9===s&&e,1===s&&"object"!==t.nodeName.toLowerCase()){l=ft(e),(f=t.getAttribute("id"))?g=f.replace(K,"\\$&"):t.setAttribute("id",g),g="[id='"+g+"'] ",u=l.length;while(u--)l[u]=g+dt(l[u]);m=V.test(e)&&t.parentNode||t,v=l.join(",")}if(v)try{return H.apply(n,q.call(m.querySelectorAll(v),0)),n}catch(b){}finally{f||t.removeAttribute("id")}}}return wt(e.replace(W,"$1"),t,n,r)}a=st.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return t?"HTML"!==t.nodeName:!1},c=st.setDocument=function(e){var n=e?e.ownerDocument||e:w;return n!==p&&9===n.nodeType&&n.documentElement?(p=n,f=n.documentElement,d=a(n),T.tagNameNoComments=at(function(e){return e.appendChild(n.createComment("")),!e.getElementsByTagName("*").length}),T.attributes=at(function(e){e.innerHTML="<select></select>";var t=typeof e.lastChild.getAttribute("multiple");return"boolean"!==t&&"string"!==t}),T.getByClassName=at(function(e){return e.innerHTML="<div class='hidden e'></div><div class='hidden'></div>",e.getElementsByClassName&&e.getElementsByClassName("e").length?(e.lastChild.className="e",2===e.getElementsByClassName("e").length):!1}),T.getByName=at(function(e){e.id=x+0,e.innerHTML="<a name='"+x+"'></a><div name='"+x+"'></div>",f.insertBefore(e,f.firstChild);var t=n.getElementsByName&&n.getElementsByName(x).length===2+n.getElementsByName(x+0).length;return T.getIdNotName=!n.getElementById(x),f.removeChild(e),t}),i.attrHandle=at(function(e){return e.innerHTML="<a href='#'></a>",e.firstChild&&typeof e.firstChild.getAttribute!==A&&"#"===e.firstChild.getAttribute("href")})?{}:{href:function(e){return e.getAttribute("href",2)},type:function(e){return e.getAttribute("type")}},T.getIdNotName?(i.find.ID=function(e,t){if(typeof t.getElementById!==A&&!d){var n=t.getElementById(e);return n&&n.parentNode?[n]:[]}},i.filter.ID=function(e){var t=e.replace(et,tt);return function(e){return e.getAttribute("id")===t}}):(i.find.ID=function(e,n){if(typeof n.getElementById!==A&&!d){var r=n.getElementById(e);return r?r.id===e||typeof r.getAttributeNode!==A&&r.getAttributeNode("id").value===e?[r]:t:[]}},i.filter.ID=function(e){var t=e.replace(et,tt);return function(e){var n=typeof e.getAttributeNode!==A&&e.getAttributeNode("id");return n&&n.value===t}}),i.find.TAG=T.tagNameNoComments?function(e,n){return typeof n.getElementsByTagName!==A?n.getElementsByTagName(e):t}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},i.find.NAME=T.getByName&&function(e,n){return typeof n.getElementsByName!==A?n.getElementsByName(name):t},i.find.CLASS=T.getByClassName&&function(e,n){return typeof n.getElementsByClassName===A||d?t:n.getElementsByClassName(e)},g=[],h=[":focus"],(T.qsa=rt(n.querySelectorAll))&&(at(function(e){e.innerHTML="<select><option selected=''></option></select>",e.querySelectorAll("[selected]").length||h.push("\\["+_+"*(?:checked|disabled|ismap|multiple|readonly|selected|value)"),e.querySelectorAll(":checked").length||h.push(":checked")}),at(function(e){e.innerHTML="<input type='hidden' i=''/>",e.querySelectorAll("[i^='']").length&&h.push("[*^$]="+_+"*(?:\"\"|'')"),e.querySelectorAll(":enabled").length||h.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),h.push(",.*:")})),(T.matchesSelector=rt(m=f.matchesSelector||f.mozMatchesSelector||f.webkitMatchesSelector||f.oMatchesSelector||f.msMatchesSelector))&&at(function(e){T.disconnectedMatch=m.call(e,"div"),m.call(e,"[s!='']:x"),g.push("!=",R)}),h=RegExp(h.join("|")),g=RegExp(g.join("|")),y=rt(f.contains)||f.compareDocumentPosition?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},v=f.compareDocumentPosition?function(e,t){var r;return e===t?(u=!0,0):(r=t.compareDocumentPosition&&e.compareDocumentPosition&&e.compareDocumentPosition(t))?1&r||e.parentNode&&11===e.parentNode.nodeType?e===n||y(w,e)?-1:t===n||y(w,t)?1:0:4&r?-1:1:e.compareDocumentPosition?-1:1}:function(e,t){var r,i=0,o=e.parentNode,a=t.parentNode,s=[e],l=[t];if(e===t)return u=!0,0;if(!o||!a)return e===n?-1:t===n?1:o?-1:a?1:0;if(o===a)return ut(e,t);r=e;while(r=r.parentNode)s.unshift(r);r=t;while(r=r.parentNode)l.unshift(r);while(s[i]===l[i])i++;return i?ut(s[i],l[i]):s[i]===w?-1:l[i]===w?1:0},u=!1,[0,0].sort(v),T.detectDuplicates=u,p):p},st.matches=function(e,t){return st(e,null,null,t)},st.matchesSelector=function(e,t){if((e.ownerDocument||e)!==p&&c(e),t=t.replace(Z,"='$1']"),!(!T.matchesSelector||d||g&&g.test(t)||h.test(t)))try{var n=m.call(e,t);if(n||T.disconnectedMatch||e.document&&11!==e.document.nodeType)return n}catch(r){}return st(t,p,null,[e]).length>0},st.contains=function(e,t){return(e.ownerDocument||e)!==p&&c(e),y(e,t)},st.attr=function(e,t){var n;return(e.ownerDocument||e)!==p&&c(e),d||(t=t.toLowerCase()),(n=i.attrHandle[t])?n(e):d||T.attributes?e.getAttribute(t):((n=e.getAttributeNode(t))||e.getAttribute(t))&&e[t]===!0?t:n&&n.specified?n.value:null},st.error=function(e){throw Error("Syntax error, unrecognized expression: "+e)},st.uniqueSort=function(e){var t,n=[],r=1,i=0;if(u=!T.detectDuplicates,e.sort(v),u){for(;t=e[r];r++)t===e[r-1]&&(i=n.push(r));while(i--)e.splice(n[i],1)}return e};function ut(e,t){var n=t&&e,r=n&&(~t.sourceIndex||j)-(~e.sourceIndex||j);if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function lt(e){return function(t){var n=t.nodeName.toLowerCase();return"input"===n&&t.type===e}}function ct(e){return function(t){var n=t.nodeName.toLowerCase();return("input"===n||"button"===n)&&t.type===e}}function pt(e){return ot(function(t){return t=+t,ot(function(n,r){var i,o=e([],n.length,t),a=o.length;while(a--)n[i=o[a]]&&(n[i]=!(r[i]=n[i]))})})}o=st.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=o(e)}else if(3===i||4===i)return e.nodeValue}else for(;t=e[r];r++)n+=o(t);return n},i=st.selectors={cacheLength:50,createPseudo:ot,match:U,find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(et,tt),e[3]=(e[4]||e[5]||"").replace(et,tt),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||st.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&st.error(e[0]),e},PSEUDO:function(e){var t,n=!e[5]&&e[2];return U.CHILD.test(e[0])?null:(e[4]?e[2]=e[4]:n&&z.test(n)&&(t=ft(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){return"*"===e?function(){return!0}:(e=e.replace(et,tt).toLowerCase(),function(t){return t.nodeName&&t.nodeName.toLowerCase()===e})},CLASS:function(e){var t=k[e+" "];return t||(t=RegExp("(^|"+_+")"+e+"("+_+"|$)"))&&k(e,function(e){return t.test(e.className||typeof e.getAttribute!==A&&e.getAttribute("class")||"")})},ATTR:function(e,t,n){return function(r){var i=st.attr(r,e);return null==i?"!="===t:t?(i+="","="===t?i===n:"!="===t?i!==n:"^="===t?n&&0===i.indexOf(n):"*="===t?n&&i.indexOf(n)>-1:"$="===t?n&&i.slice(-n.length)===n:"~="===t?(" "+i+" ").indexOf(n)>-1:"|="===t?i===n||i.slice(0,n.length+1)===n+"-":!1):!0}},CHILD:function(e,t,n,r,i){var o="nth"!==e.slice(0,3),a="last"!==e.slice(-4),s="of-type"===t;return 1===r&&0===i?function(e){return!!e.parentNode}:function(t,n,u){var l,c,p,f,d,h,g=o!==a?"nextSibling":"previousSibling",m=t.parentNode,y=s&&t.nodeName.toLowerCase(),v=!u&&!s;if(m){if(o){while(g){p=t;while(p=p[g])if(s?p.nodeName.toLowerCase()===y:1===p.nodeType)return!1;h=g="only"===e&&!h&&"nextSibling"}return!0}if(h=[a?m.firstChild:m.lastChild],a&&v){c=m[x]||(m[x]={}),l=c[e]||[],d=l[0]===N&&l[1],f=l[0]===N&&l[2],p=d&&m.childNodes[d];while(p=++d&&p&&p[g]||(f=d=0)||h.pop())if(1===p.nodeType&&++f&&p===t){c[e]=[N,d,f];break}}else if(v&&(l=(t[x]||(t[x]={}))[e])&&l[0]===N)f=l[1];else while(p=++d&&p&&p[g]||(f=d=0)||h.pop())if((s?p.nodeName.toLowerCase()===y:1===p.nodeType)&&++f&&(v&&((p[x]||(p[x]={}))[e]=[N,f]),p===t))break;return f-=i,f===r||0===f%r&&f/r>=0}}},PSEUDO:function(e,t){var n,r=i.pseudos[e]||i.setFilters[e.toLowerCase()]||st.error("unsupported pseudo: "+e);return r[x]?r(t):r.length>1?(n=[e,e,"",t],i.setFilters.hasOwnProperty(e.toLowerCase())?ot(function(e,n){var i,o=r(e,t),a=o.length;while(a--)i=M.call(e,o[a]),e[i]=!(n[i]=o[a])}):function(e){return r(e,0,n)}):r}},pseudos:{not:ot(function(e){var t=[],n=[],r=s(e.replace(W,"$1"));return r[x]?ot(function(e,t,n,i){var o,a=r(e,null,i,[]),s=e.length;while(s--)(o=a[s])&&(e[s]=!(t[s]=o))}):function(e,i,o){return t[0]=e,r(t,null,o,n),!n.pop()}}),has:ot(function(e){return function(t){return st(e,t).length>0}}),contains:ot(function(e){return function(t){return(t.textContent||t.innerText||o(t)).indexOf(e)>-1}}),lang:ot(function(e){return X.test(e||"")||st.error("unsupported lang: "+e),e=e.replace(et,tt).toLowerCase(),function(t){var n;do if(n=d?t.getAttribute("xml:lang")||t.getAttribute("lang"):t.lang)return n=n.toLowerCase(),n===e||0===n.indexOf(e+"-");while((t=t.parentNode)&&1===t.nodeType);return!1}}),target:function(t){var n=e.location&&e.location.hash;return n&&n.slice(1)===t.id},root:function(e){return e===f},focus:function(e){return e===p.activeElement&&(!p.hasFocus||p.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:function(e){return e.disabled===!1},disabled:function(e){return e.disabled===!0},checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,e.selected===!0},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeName>"@"||3===e.nodeType||4===e.nodeType)return!1;return!0},parent:function(e){return!i.pseudos.empty(e)},header:function(e){return Q.test(e.nodeName)},input:function(e){return G.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||t.toLowerCase()===e.type)},first:pt(function(){return[0]}),last:pt(function(e,t){return[t-1]}),eq:pt(function(e,t,n){return[0>n?n+t:n]}),even:pt(function(e,t){var n=0;for(;t>n;n+=2)e.push(n);return e}),odd:pt(function(e,t){var n=1;for(;t>n;n+=2)e.push(n);return e}),lt:pt(function(e,t,n){var r=0>n?n+t:n;for(;--r>=0;)e.push(r);return e}),gt:pt(function(e,t,n){var r=0>n?n+t:n;for(;t>++r;)e.push(r);return e})}};for(n in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})i.pseudos[n]=lt(n);for(n in{submit:!0,reset:!0})i.pseudos[n]=ct(n);function ft(e,t){var n,r,o,a,s,u,l,c=E[e+" "];if(c)return t?0:c.slice(0);s=e,u=[],l=i.preFilter;while(s){(!n||(r=$.exec(s)))&&(r&&(s=s.slice(r[0].length)||s),u.push(o=[])),n=!1,(r=I.exec(s))&&(n=r.shift(),o.push({value:n,type:r[0].replace(W," ")}),s=s.slice(n.length));for(a in i.filter)!(r=U[a].exec(s))||l[a]&&!(r=l[a](r))||(n=r.shift(),o.push({value:n,type:a,matches:r}),s=s.slice(n.length));if(!n)break}return t?s.length:s?st.error(e):E(e,u).slice(0)}function dt(e){var t=0,n=e.length,r="";for(;n>t;t++)r+=e[t].value;return r}function ht(e,t,n){var i=t.dir,o=n&&"parentNode"===i,a=C++;return t.first?function(t,n,r){while(t=t[i])if(1===t.nodeType||o)return e(t,n,r)}:function(t,n,s){var u,l,c,p=N+" "+a;if(s){while(t=t[i])if((1===t.nodeType||o)&&e(t,n,s))return!0}else while(t=t[i])if(1===t.nodeType||o)if(c=t[x]||(t[x]={}),(l=c[i])&&l[0]===p){if((u=l[1])===!0||u===r)return u===!0}else if(l=c[i]=[p],l[1]=e(t,n,s)||r,l[1]===!0)return!0}}function gt(e){return e.length>1?function(t,n,r){var i=e.length;while(i--)if(!e[i](t,n,r))return!1;return!0}:e[0]}function mt(e,t,n,r,i){var o,a=[],s=0,u=e.length,l=null!=t;for(;u>s;s++)(o=e[s])&&(!n||n(o,r,i))&&(a.push(o),l&&t.push(s));return a}function yt(e,t,n,r,i,o){return r&&!r[x]&&(r=yt(r)),i&&!i[x]&&(i=yt(i,o)),ot(function(o,a,s,u){var l,c,p,f=[],d=[],h=a.length,g=o||xt(t||"*",s.nodeType?[s]:s,[]),m=!e||!o&&t?g:mt(g,f,e,s,u),y=n?i||(o?e:h||r)?[]:a:m;if(n&&n(m,y,s,u),r){l=mt(y,d),r(l,[],s,u),c=l.length;while(c--)(p=l[c])&&(y[d[c]]=!(m[d[c]]=p))}if(o){if(i||e){if(i){l=[],c=y.length;while(c--)(p=y[c])&&l.push(m[c]=p);i(null,y=[],l,u)}c=y.length;while(c--)(p=y[c])&&(l=i?M.call(o,p):f[c])>-1&&(o[l]=!(a[l]=p))}}else y=mt(y===a?y.splice(h,y.length):y),i?i(null,a,y,u):H.apply(a,y)})}function vt(e){var t,n,r,o=e.length,a=i.relative[e[0].type],s=a||i.relative[" "],u=a?1:0,c=ht(function(e){return e===t},s,!0),p=ht(function(e){return M.call(t,e)>-1},s,!0),f=[function(e,n,r){return!a&&(r||n!==l)||((t=n).nodeType?c(e,n,r):p(e,n,r))}];for(;o>u;u++)if(n=i.relative[e[u].type])f=[ht(gt(f),n)];else{if(n=i.filter[e[u].type].apply(null,e[u].matches),n[x]){for(r=++u;o>r;r++)if(i.relative[e[r].type])break;return yt(u>1&&gt(f),u>1&&dt(e.slice(0,u-1)).replace(W,"$1"),n,r>u&&vt(e.slice(u,r)),o>r&&vt(e=e.slice(r)),o>r&&dt(e))}f.push(n)}return gt(f)}function bt(e,t){var n=0,o=t.length>0,a=e.length>0,s=function(s,u,c,f,d){var h,g,m,y=[],v=0,b="0",x=s&&[],w=null!=d,T=l,C=s||a&&i.find.TAG("*",d&&u.parentNode||u),k=N+=null==T?1:Math.random()||.1;for(w&&(l=u!==p&&u,r=n);null!=(h=C[b]);b++){if(a&&h){g=0;while(m=e[g++])if(m(h,u,c)){f.push(h);break}w&&(N=k,r=++n)}o&&((h=!m&&h)&&v--,s&&x.push(h))}if(v+=b,o&&b!==v){g=0;while(m=t[g++])m(x,y,u,c);if(s){if(v>0)while(b--)x[b]||y[b]||(y[b]=L.call(f));y=mt(y)}H.apply(f,y),w&&!s&&y.length>0&&v+t.length>1&&st.uniqueSort(f)}return w&&(N=k,l=T),x};return o?ot(s):s}s=st.compile=function(e,t){var n,r=[],i=[],o=S[e+" "];if(!o){t||(t=ft(e)),n=t.length;while(n--)o=vt(t[n]),o[x]?r.push(o):i.push(o);o=S(e,bt(i,r))}return o};function xt(e,t,n){var r=0,i=t.length;for(;i>r;r++)st(e,t[r],n);return n}function wt(e,t,n,r){var o,a,u,l,c,p=ft(e);if(!r&&1===p.length){if(a=p[0]=p[0].slice(0),a.length>2&&"ID"===(u=a[0]).type&&9===t.nodeType&&!d&&i.relative[a[1].type]){if(t=i.find.ID(u.matches[0].replace(et,tt),t)[0],!t)return n;e=e.slice(a.shift().value.length)}o=U.needsContext.test(e)?0:a.length;while(o--){if(u=a[o],i.relative[l=u.type])break;if((c=i.find[l])&&(r=c(u.matches[0].replace(et,tt),V.test(a[0].type)&&t.parentNode||t))){if(a.splice(o,1),e=r.length&&dt(a),!e)return H.apply(n,q.call(r,0)),n;break}}}return s(e,p)(r,t,d,n,V.test(e)),n}i.pseudos.nth=i.pseudos.eq;function Tt(){}i.filters=Tt.prototype=i.pseudos,i.setFilters=new Tt,c(),st.attr=b.attr,b.find=st,b.expr=st.selectors,b.expr[":"]=b.expr.pseudos,b.unique=st.uniqueSort,b.text=st.getText,b.isXMLDoc=st.isXML,b.contains=st.contains}(e);var at=/Until$/,st=/^(?:parents|prev(?:Until|All))/,ut=/^.[^:#\[\.,]*$/,lt=b.expr.match.needsContext,ct={children:!0,contents:!0,next:!0,prev:!0};b.fn.extend({find:function(e){var t,n,r,i=this.length;if("string"!=typeof e)return r=this,this.pushStack(b(e).filter(function(){for(t=0;i>t;t++)if(b.contains(r[t],this))return!0}));for(n=[],t=0;i>t;t++)b.find(e,this[t],n);return n=this.pushStack(i>1?b.unique(n):n),n.selector=(this.selector?this.selector+" ":"")+e,n},has:function(e){var t,n=b(e,this),r=n.length;return this.filter(function(){for(t=0;r>t;t++)if(b.contains(this,n[t]))return!0})},not:function(e){return this.pushStack(ft(this,e,!1))},filter:function(e){return this.pushStack(ft(this,e,!0))},is:function(e){return!!e&&("string"==typeof e?lt.test(e)?b(e,this.context).index(this[0])>=0:b.filter(e,this).length>0:this.filter(e).length>0)},closest:function(e,t){var n,r=0,i=this.length,o=[],a=lt.test(e)||"string"!=typeof e?b(e,t||this.context):0;for(;i>r;r++){n=this[r];while(n&&n.ownerDocument&&n!==t&&11!==n.nodeType){if(a?a.index(n)>-1:b.find.matchesSelector(n,e)){o.push(n);break}n=n.parentNode}}return this.pushStack(o.length>1?b.unique(o):o)},index:function(e){return e?"string"==typeof e?b.inArray(this[0],b(e)):b.inArray(e.jquery?e[0]:e,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){var n="string"==typeof e?b(e,t):b.makeArray(e&&e.nodeType?[e]:e),r=b.merge(this.get(),n);return this.pushStack(b.unique(r))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),b.fn.andSelf=b.fn.addBack;function pt(e,t){do e=e[t];while(e&&1!==e.nodeType);return e}b.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return b.dir(e,"parentNode")},parentsUntil:function(e,t,n){return b.dir(e,"parentNode",n)},next:function(e){return pt(e,"nextSibling")},prev:function(e){return pt(e,"previousSibling")},nextAll:function(e){return b.dir(e,"nextSibling")},prevAll:function(e){return b.dir(e,"previousSibling")},nextUntil:function(e,t,n){return b.dir(e,"nextSibling",n)},prevUntil:function(e,t,n){return b.dir(e,"previousSibling",n)},siblings:function(e){return b.sibling((e.parentNode||{}).firstChild,e)},children:function(e){return b.sibling(e.firstChild)},contents:function(e){return b.nodeName(e,"iframe")?e.contentDocument||e.contentWindow.document:b.merge([],e.childNodes)}},function(e,t){b.fn[e]=function(n,r){var i=b.map(this,t,n);return at.test(e)||(r=n),r&&"string"==typeof r&&(i=b.filter(r,i)),i=this.length>1&&!ct[e]?b.unique(i):i,this.length>1&&st.test(e)&&(i=i.reverse()),this.pushStack(i)}}),b.extend({filter:function(e,t,n){return n&&(e=":not("+e+")"),1===t.length?b.find.matchesSelector(t[0],e)?[t[0]]:[]:b.find.matches(e,t)},dir:function(e,n,r){var i=[],o=e[n];while(o&&9!==o.nodeType&&(r===t||1!==o.nodeType||!b(o).is(r)))1===o.nodeType&&i.push(o),o=o[n];return i},sibling:function(e,t){var n=[];for(;e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n}});function ft(e,t,n){if(t=t||0,b.isFunction(t))return b.grep(e,function(e,r){var i=!!t.call(e,r,e);return i===n});if(t.nodeType)return b.grep(e,function(e){return e===t===n});if("string"==typeof t){var r=b.grep(e,function(e){return 1===e.nodeType});if(ut.test(t))return b.filter(t,r,!n);t=b.filter(t,r)}return b.grep(e,function(e){return b.inArray(e,t)>=0===n})}function dt(e){var t=ht.split("|"),n=e.createDocumentFragment();if(n.createElement)while(t.length)n.createElement(t.pop());return n}var ht="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",gt=/ jQuery\d+="(?:null|\d+)"/g,mt=RegExp("<(?:"+ht+")[\\s/>]","i"),yt=/^\s+/,vt=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,bt=/<([\w:]+)/,xt=/<tbody/i,wt=/<|&#?\w+;/,Tt=/<(?:script|style|link)/i,Nt=/^(?:checkbox|radio)$/i,Ct=/checked\s*(?:[^=]|=\s*.checked.)/i,kt=/^$|\/(?:java|ecma)script/i,Et=/^true\/(.*)/,St=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,At={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:b.support.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]},jt=dt(o),Dt=jt.appendChild(o.createElement("div"));At.optgroup=At.option,At.tbody=At.tfoot=At.colgroup=At.caption=At.thead,At.th=At.td,b.fn.extend({text:function(e){return b.access(this,function(e){return e===t?b.text(this):this.empty().append((this[0]&&this[0].ownerDocument||o).createTextNode(e))},null,e,arguments.length)},wrapAll:function(e){if(b.isFunction(e))return this.each(function(t){b(this).wrapAll(e.call(this,t))});if(this[0]){var t=b(e,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstChild&&1===e.firstChild.nodeType)e=e.firstChild;return e}).append(this)}return this},wrapInner:function(e){return b.isFunction(e)?this.each(function(t){b(this).wrapInner(e.call(this,t))}):this.each(function(){var t=b(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=b.isFunction(e);return this.each(function(n){b(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(){return this.parent().each(function(){b.nodeName(this,"body")||b(this).replaceWith(this.childNodes)}).end()},append:function(){return this.domManip(arguments,!0,function(e){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&this.appendChild(e)})},prepend:function(){return this.domManip(arguments,!0,function(e){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&this.insertBefore(e,this.firstChild)})},before:function(){return this.domManip(arguments,!1,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return this.domManip(arguments,!1,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},remove:function(e,t){var n,r=0;for(;null!=(n=this[r]);r++)(!e||b.filter(e,[n]).length>0)&&(t||1!==n.nodeType||b.cleanData(Ot(n)),n.parentNode&&(t&&b.contains(n.ownerDocument,n)&&Mt(Ot(n,"script")),n.parentNode.removeChild(n)));return this},empty:function(){var e,t=0;for(;null!=(e=this[t]);t++){1===e.nodeType&&b.cleanData(Ot(e,!1));while(e.firstChild)e.removeChild(e.firstChild);e.options&&b.nodeName(e,"select")&&(e.options.length=0)}return this},clone:function(e,t){return e=null==e?!1:e,t=null==t?e:t,this.map(function(){return b.clone(this,e,t)})},html:function(e){return b.access(this,function(e){var n=this[0]||{},r=0,i=this.length;if(e===t)return 1===n.nodeType?n.innerHTML.replace(gt,""):t;if(!("string"!=typeof e||Tt.test(e)||!b.support.htmlSerialize&&mt.test(e)||!b.support.leadingWhitespace&&yt.test(e)||At[(bt.exec(e)||["",""])[1].toLowerCase()])){e=e.replace(vt,"<$1></$2>");try{for(;i>r;r++)n=this[r]||{},1===n.nodeType&&(b.cleanData(Ot(n,!1)),n.innerHTML=e);n=0}catch(o){}}n&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(e){var t=b.isFunction(e);return t||"string"==typeof e||(e=b(e).not(this).detach()),this.domManip([e],!0,function(e){var t=this.nextSibling,n=this.parentNode;n&&(b(this).remove(),n.insertBefore(e,t))})},detach:function(e){return this.remove(e,!0)},domManip:function(e,n,r){e=f.apply([],e);var i,o,a,s,u,l,c=0,p=this.length,d=this,h=p-1,g=e[0],m=b.isFunction(g);if(m||!(1>=p||"string"!=typeof g||b.support.checkClone)&&Ct.test(g))return this.each(function(i){var o=d.eq(i);m&&(e[0]=g.call(this,i,n?o.html():t)),o.domManip(e,n,r)});if(p&&(l=b.buildFragment(e,this[0].ownerDocument,!1,this),i=l.firstChild,1===l.childNodes.length&&(l=i),i)){for(n=n&&b.nodeName(i,"tr"),s=b.map(Ot(l,"script"),Ht),a=s.length;p>c;c++)o=l,c!==h&&(o=b.clone(o,!0,!0),a&&b.merge(s,Ot(o,"script"))),r.call(n&&b.nodeName(this[c],"table")?Lt(this[c],"tbody"):this[c],o,c);if(a)for(u=s[s.length-1].ownerDocument,b.map(s,qt),c=0;a>c;c++)o=s[c],kt.test(o.type||"")&&!b._data(o,"globalEval")&&b.contains(u,o)&&(o.src?b.ajax({url:o.src,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0}):b.globalEval((o.text||o.textContent||o.innerHTML||"").replace(St,"")));l=i=null}return this}});function Lt(e,t){return e.getElementsByTagName(t)[0]||e.appendChild(e.ownerDocument.createElement(t))}function Ht(e){var t=e.getAttributeNode("type");return e.type=(t&&t.specified)+"/"+e.type,e}function qt(e){var t=Et.exec(e.type);return t?e.type=t[1]:e.removeAttribute("type"),e}function Mt(e,t){var n,r=0;for(;null!=(n=e[r]);r++)b._data(n,"globalEval",!t||b._data(t[r],"globalEval"))}function _t(e,t){if(1===t.nodeType&&b.hasData(e)){var n,r,i,o=b._data(e),a=b._data(t,o),s=o.events;if(s){delete a.handle,a.events={};for(n in s)for(r=0,i=s[n].length;i>r;r++)b.event.add(t,n,s[n][r])}a.data&&(a.data=b.extend({},a.data))}}function Ft(e,t){var n,r,i;if(1===t.nodeType){if(n=t.nodeName.toLowerCase(),!b.support.noCloneEvent&&t[b.expando]){i=b._data(t);for(r in i.events)b.removeEvent(t,r,i.handle);t.removeAttribute(b.expando)}"script"===n&&t.text!==e.text?(Ht(t).text=e.text,qt(t)):"object"===n?(t.parentNode&&(t.outerHTML=e.outerHTML),b.support.html5Clone&&e.innerHTML&&!b.trim(t.innerHTML)&&(t.innerHTML=e.innerHTML)):"input"===n&&Nt.test(e.type)?(t.defaultChecked=t.checked=e.checked,t.value!==e.value&&(t.value=e.value)):"option"===n?t.defaultSelected=t.selected=e.defaultSelected:("input"===n||"textarea"===n)&&(t.defaultValue=e.defaultValue)}}b.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){b.fn[e]=function(e){var n,r=0,i=[],o=b(e),a=o.length-1;for(;a>=r;r++)n=r===a?this:this.clone(!0),b(o[r])[t](n),d.apply(i,n.get());return this.pushStack(i)}});function Ot(e,n){var r,o,a=0,s=typeof e.getElementsByTagName!==i?e.getElementsByTagName(n||"*"):typeof e.querySelectorAll!==i?e.querySelectorAll(n||"*"):t;if(!s)for(s=[],r=e.childNodes||e;null!=(o=r[a]);a++)!n||b.nodeName(o,n)?s.push(o):b.merge(s,Ot(o,n));return n===t||n&&b.nodeName(e,n)?b.merge([e],s):s}function Bt(e){Nt.test(e.type)&&(e.defaultChecked=e.checked)}b.extend({clone:function(e,t,n){var r,i,o,a,s,u=b.contains(e.ownerDocument,e);if(b.support.html5Clone||b.isXMLDoc(e)||!mt.test("<"+e.nodeName+">")?o=e.cloneNode(!0):(Dt.innerHTML=e.outerHTML,Dt.removeChild(o=Dt.firstChild)),!(b.support.noCloneEvent&&b.support.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||b.isXMLDoc(e)))for(r=Ot(o),s=Ot(e),a=0;null!=(i=s[a]);++a)r[a]&&Ft(i,r[a]);if(t)if(n)for(s=s||Ot(e),r=r||Ot(o),a=0;null!=(i=s[a]);a++)_t(i,r[a]);else _t(e,o);return r=Ot(o,"script"),r.length>0&&Mt(r,!u&&Ot(e,"script")),r=s=i=null,o},buildFragment:function(e,t,n,r){var i,o,a,s,u,l,c,p=e.length,f=dt(t),d=[],h=0;for(;p>h;h++)if(o=e[h],o||0===o)if("object"===b.type(o))b.merge(d,o.nodeType?[o]:o);else if(wt.test(o)){s=s||f.appendChild(t.createElement("div")),u=(bt.exec(o)||["",""])[1].toLowerCase(),c=At[u]||At._default,s.innerHTML=c[1]+o.replace(vt,"<$1></$2>")+c[2],i=c[0];while(i--)s=s.lastChild;if(!b.support.leadingWhitespace&&yt.test(o)&&d.push(t.createTextNode(yt.exec(o)[0])),!b.support.tbody){o="table"!==u||xt.test(o)?"<table>"!==c[1]||xt.test(o)?0:s:s.firstChild,i=o&&o.childNodes.length;while(i--)b.nodeName(l=o.childNodes[i],"tbody")&&!l.childNodes.length&&o.removeChild(l)
}b.merge(d,s.childNodes),s.textContent="";while(s.firstChild)s.removeChild(s.firstChild);s=f.lastChild}else d.push(t.createTextNode(o));s&&f.removeChild(s),b.support.appendChecked||b.grep(Ot(d,"input"),Bt),h=0;while(o=d[h++])if((!r||-1===b.inArray(o,r))&&(a=b.contains(o.ownerDocument,o),s=Ot(f.appendChild(o),"script"),a&&Mt(s),n)){i=0;while(o=s[i++])kt.test(o.type||"")&&n.push(o)}return s=null,f},cleanData:function(e,t){var n,r,o,a,s=0,u=b.expando,l=b.cache,p=b.support.deleteExpando,f=b.event.special;for(;null!=(n=e[s]);s++)if((t||b.acceptData(n))&&(o=n[u],a=o&&l[o])){if(a.events)for(r in a.events)f[r]?b.event.remove(n,r):b.removeEvent(n,r,a.handle);l[o]&&(delete l[o],p?delete n[u]:typeof n.removeAttribute!==i?n.removeAttribute(u):n[u]=null,c.push(o))}}});var Pt,Rt,Wt,$t=/alpha\([^)]*\)/i,It=/opacity\s*=\s*([^)]*)/,zt=/^(top|right|bottom|left)$/,Xt=/^(none|table(?!-c[ea]).+)/,Ut=/^margin/,Vt=RegExp("^("+x+")(.*)$","i"),Yt=RegExp("^("+x+")(?!px)[a-z%]+$","i"),Jt=RegExp("^([+-])=("+x+")","i"),Gt={BODY:"block"},Qt={position:"absolute",visibility:"hidden",display:"block"},Kt={letterSpacing:0,fontWeight:400},Zt=["Top","Right","Bottom","Left"],en=["Webkit","O","Moz","ms"];function tn(e,t){if(t in e)return t;var n=t.charAt(0).toUpperCase()+t.slice(1),r=t,i=en.length;while(i--)if(t=en[i]+n,t in e)return t;return r}function nn(e,t){return e=t||e,"none"===b.css(e,"display")||!b.contains(e.ownerDocument,e)}function rn(e,t){var n,r,i,o=[],a=0,s=e.length;for(;s>a;a++)r=e[a],r.style&&(o[a]=b._data(r,"olddisplay"),n=r.style.display,t?(o[a]||"none"!==n||(r.style.display=""),""===r.style.display&&nn(r)&&(o[a]=b._data(r,"olddisplay",un(r.nodeName)))):o[a]||(i=nn(r),(n&&"none"!==n||!i)&&b._data(r,"olddisplay",i?n:b.css(r,"display"))));for(a=0;s>a;a++)r=e[a],r.style&&(t&&"none"!==r.style.display&&""!==r.style.display||(r.style.display=t?o[a]||"":"none"));return e}b.fn.extend({css:function(e,n){return b.access(this,function(e,n,r){var i,o,a={},s=0;if(b.isArray(n)){for(o=Rt(e),i=n.length;i>s;s++)a[n[s]]=b.css(e,n[s],!1,o);return a}return r!==t?b.style(e,n,r):b.css(e,n)},e,n,arguments.length>1)},show:function(){return rn(this,!0)},hide:function(){return rn(this)},toggle:function(e){var t="boolean"==typeof e;return this.each(function(){(t?e:nn(this))?b(this).show():b(this).hide()})}}),b.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Wt(e,"opacity");return""===n?"1":n}}}},cssNumber:{columnCount:!0,fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":b.support.cssFloat?"cssFloat":"styleFloat"},style:function(e,n,r,i){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var o,a,s,u=b.camelCase(n),l=e.style;if(n=b.cssProps[u]||(b.cssProps[u]=tn(l,u)),s=b.cssHooks[n]||b.cssHooks[u],r===t)return s&&"get"in s&&(o=s.get(e,!1,i))!==t?o:l[n];if(a=typeof r,"string"===a&&(o=Jt.exec(r))&&(r=(o[1]+1)*o[2]+parseFloat(b.css(e,n)),a="number"),!(null==r||"number"===a&&isNaN(r)||("number"!==a||b.cssNumber[u]||(r+="px"),b.support.clearCloneStyle||""!==r||0!==n.indexOf("background")||(l[n]="inherit"),s&&"set"in s&&(r=s.set(e,r,i))===t)))try{l[n]=r}catch(c){}}},css:function(e,n,r,i){var o,a,s,u=b.camelCase(n);return n=b.cssProps[u]||(b.cssProps[u]=tn(e.style,u)),s=b.cssHooks[n]||b.cssHooks[u],s&&"get"in s&&(a=s.get(e,!0,r)),a===t&&(a=Wt(e,n,i)),"normal"===a&&n in Kt&&(a=Kt[n]),""===r||r?(o=parseFloat(a),r===!0||b.isNumeric(o)?o||0:a):a},swap:function(e,t,n,r){var i,o,a={};for(o in t)a[o]=e.style[o],e.style[o]=t[o];i=n.apply(e,r||[]);for(o in t)e.style[o]=a[o];return i}}),e.getComputedStyle?(Rt=function(t){return e.getComputedStyle(t,null)},Wt=function(e,n,r){var i,o,a,s=r||Rt(e),u=s?s.getPropertyValue(n)||s[n]:t,l=e.style;return s&&(""!==u||b.contains(e.ownerDocument,e)||(u=b.style(e,n)),Yt.test(u)&&Ut.test(n)&&(i=l.width,o=l.minWidth,a=l.maxWidth,l.minWidth=l.maxWidth=l.width=u,u=s.width,l.width=i,l.minWidth=o,l.maxWidth=a)),u}):o.documentElement.currentStyle&&(Rt=function(e){return e.currentStyle},Wt=function(e,n,r){var i,o,a,s=r||Rt(e),u=s?s[n]:t,l=e.style;return null==u&&l&&l[n]&&(u=l[n]),Yt.test(u)&&!zt.test(n)&&(i=l.left,o=e.runtimeStyle,a=o&&o.left,a&&(o.left=e.currentStyle.left),l.left="fontSize"===n?"1em":u,u=l.pixelLeft+"px",l.left=i,a&&(o.left=a)),""===u?"auto":u});function on(e,t,n){var r=Vt.exec(t);return r?Math.max(0,r[1]-(n||0))+(r[2]||"px"):t}function an(e,t,n,r,i){var o=n===(r?"border":"content")?4:"width"===t?1:0,a=0;for(;4>o;o+=2)"margin"===n&&(a+=b.css(e,n+Zt[o],!0,i)),r?("content"===n&&(a-=b.css(e,"padding"+Zt[o],!0,i)),"margin"!==n&&(a-=b.css(e,"border"+Zt[o]+"Width",!0,i))):(a+=b.css(e,"padding"+Zt[o],!0,i),"padding"!==n&&(a+=b.css(e,"border"+Zt[o]+"Width",!0,i)));return a}function sn(e,t,n){var r=!0,i="width"===t?e.offsetWidth:e.offsetHeight,o=Rt(e),a=b.support.boxSizing&&"border-box"===b.css(e,"boxSizing",!1,o);if(0>=i||null==i){if(i=Wt(e,t,o),(0>i||null==i)&&(i=e.style[t]),Yt.test(i))return i;r=a&&(b.support.boxSizingReliable||i===e.style[t]),i=parseFloat(i)||0}return i+an(e,t,n||(a?"border":"content"),r,o)+"px"}function un(e){var t=o,n=Gt[e];return n||(n=ln(e,t),"none"!==n&&n||(Pt=(Pt||b("<iframe frameborder='0' width='0' height='0'/>").css("cssText","display:block !important")).appendTo(t.documentElement),t=(Pt[0].contentWindow||Pt[0].contentDocument).document,t.write("<!doctype html><html><body>"),t.close(),n=ln(e,t),Pt.detach()),Gt[e]=n),n}function ln(e,t){var n=b(t.createElement(e)).appendTo(t.body),r=b.css(n[0],"display");return n.remove(),r}b.each(["height","width"],function(e,n){b.cssHooks[n]={get:function(e,r,i){return r?0===e.offsetWidth&&Xt.test(b.css(e,"display"))?b.swap(e,Qt,function(){return sn(e,n,i)}):sn(e,n,i):t},set:function(e,t,r){var i=r&&Rt(e);return on(e,t,r?an(e,n,r,b.support.boxSizing&&"border-box"===b.css(e,"boxSizing",!1,i),i):0)}}}),b.support.opacity||(b.cssHooks.opacity={get:function(e,t){return It.test((t&&e.currentStyle?e.currentStyle.filter:e.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":t?"1":""},set:function(e,t){var n=e.style,r=e.currentStyle,i=b.isNumeric(t)?"alpha(opacity="+100*t+")":"",o=r&&r.filter||n.filter||"";n.zoom=1,(t>=1||""===t)&&""===b.trim(o.replace($t,""))&&n.removeAttribute&&(n.removeAttribute("filter"),""===t||r&&!r.filter)||(n.filter=$t.test(o)?o.replace($t,i):o+" "+i)}}),b(function(){b.support.reliableMarginRight||(b.cssHooks.marginRight={get:function(e,n){return n?b.swap(e,{display:"inline-block"},Wt,[e,"marginRight"]):t}}),!b.support.pixelPosition&&b.fn.position&&b.each(["top","left"],function(e,n){b.cssHooks[n]={get:function(e,r){return r?(r=Wt(e,n),Yt.test(r)?b(e).position()[n]+"px":r):t}}})}),b.expr&&b.expr.filters&&(b.expr.filters.hidden=function(e){return 0>=e.offsetWidth&&0>=e.offsetHeight||!b.support.reliableHiddenOffsets&&"none"===(e.style&&e.style.display||b.css(e,"display"))},b.expr.filters.visible=function(e){return!b.expr.filters.hidden(e)}),b.each({margin:"",padding:"",border:"Width"},function(e,t){b.cssHooks[e+t]={expand:function(n){var r=0,i={},o="string"==typeof n?n.split(" "):[n];for(;4>r;r++)i[e+Zt[r]+t]=o[r]||o[r-2]||o[0];return i}},Ut.test(e)||(b.cssHooks[e+t].set=on)});var cn=/%20/g,pn=/\[\]$/,fn=/\r?\n/g,dn=/^(?:submit|button|image|reset|file)$/i,hn=/^(?:input|select|textarea|keygen)/i;b.fn.extend({serialize:function(){return b.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=b.prop(this,"elements");return e?b.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!b(this).is(":disabled")&&hn.test(this.nodeName)&&!dn.test(e)&&(this.checked||!Nt.test(e))}).map(function(e,t){var n=b(this).val();return null==n?null:b.isArray(n)?b.map(n,function(e){return{name:t.name,value:e.replace(fn,"\r\n")}}):{name:t.name,value:n.replace(fn,"\r\n")}}).get()}}),b.param=function(e,n){var r,i=[],o=function(e,t){t=b.isFunction(t)?t():null==t?"":t,i[i.length]=encodeURIComponent(e)+"="+encodeURIComponent(t)};if(n===t&&(n=b.ajaxSettings&&b.ajaxSettings.traditional),b.isArray(e)||e.jquery&&!b.isPlainObject(e))b.each(e,function(){o(this.name,this.value)});else for(r in e)gn(r,e[r],n,o);return i.join("&").replace(cn,"+")};function gn(e,t,n,r){var i;if(b.isArray(t))b.each(t,function(t,i){n||pn.test(e)?r(e,i):gn(e+"["+("object"==typeof i?t:"")+"]",i,n,r)});else if(n||"object"!==b.type(t))r(e,t);else for(i in t)gn(e+"["+i+"]",t[i],n,r)}b.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(e,t){b.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)}}),b.fn.hover=function(e,t){return this.mouseenter(e).mouseleave(t||e)};var mn,yn,vn=b.now(),bn=/\?/,xn=/#.*$/,wn=/([?&])_=[^&]*/,Tn=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,Nn=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Cn=/^(?:GET|HEAD)$/,kn=/^\/\//,En=/^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,Sn=b.fn.load,An={},jn={},Dn="*/".concat("*");try{yn=a.href}catch(Ln){yn=o.createElement("a"),yn.href="",yn=yn.href}mn=En.exec(yn.toLowerCase())||[];function Hn(e){return function(t,n){"string"!=typeof t&&(n=t,t="*");var r,i=0,o=t.toLowerCase().match(w)||[];if(b.isFunction(n))while(r=o[i++])"+"===r[0]?(r=r.slice(1)||"*",(e[r]=e[r]||[]).unshift(n)):(e[r]=e[r]||[]).push(n)}}function qn(e,n,r,i){var o={},a=e===jn;function s(u){var l;return o[u]=!0,b.each(e[u]||[],function(e,u){var c=u(n,r,i);return"string"!=typeof c||a||o[c]?a?!(l=c):t:(n.dataTypes.unshift(c),s(c),!1)}),l}return s(n.dataTypes[0])||!o["*"]&&s("*")}function Mn(e,n){var r,i,o=b.ajaxSettings.flatOptions||{};for(i in n)n[i]!==t&&((o[i]?e:r||(r={}))[i]=n[i]);return r&&b.extend(!0,e,r),e}b.fn.load=function(e,n,r){if("string"!=typeof e&&Sn)return Sn.apply(this,arguments);var i,o,a,s=this,u=e.indexOf(" ");return u>=0&&(i=e.slice(u,e.length),e=e.slice(0,u)),b.isFunction(n)?(r=n,n=t):n&&"object"==typeof n&&(a="POST"),s.length>0&&b.ajax({url:e,type:a,dataType:"html",data:n}).done(function(e){o=arguments,s.html(i?b("<div>").append(b.parseHTML(e)).find(i):e)}).complete(r&&function(e,t){s.each(r,o||[e.responseText,t,e])}),this},b.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){b.fn[t]=function(e){return this.on(t,e)}}),b.each(["get","post"],function(e,n){b[n]=function(e,r,i,o){return b.isFunction(r)&&(o=o||i,i=r,r=t),b.ajax({url:e,type:n,dataType:o,data:r,success:i})}}),b.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:yn,type:"GET",isLocal:Nn.test(mn[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Dn,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText"},converters:{"* text":e.String,"text html":!0,"text json":b.parseJSON,"text xml":b.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?Mn(Mn(e,b.ajaxSettings),t):Mn(b.ajaxSettings,e)},ajaxPrefilter:Hn(An),ajaxTransport:Hn(jn),ajax:function(e,n){"object"==typeof e&&(n=e,e=t),n=n||{};var r,i,o,a,s,u,l,c,p=b.ajaxSetup({},n),f=p.context||p,d=p.context&&(f.nodeType||f.jquery)?b(f):b.event,h=b.Deferred(),g=b.Callbacks("once memory"),m=p.statusCode||{},y={},v={},x=0,T="canceled",N={readyState:0,getResponseHeader:function(e){var t;if(2===x){if(!c){c={};while(t=Tn.exec(a))c[t[1].toLowerCase()]=t[2]}t=c[e.toLowerCase()]}return null==t?null:t},getAllResponseHeaders:function(){return 2===x?a:null},setRequestHeader:function(e,t){var n=e.toLowerCase();return x||(e=v[n]=v[n]||e,y[e]=t),this},overrideMimeType:function(e){return x||(p.mimeType=e),this},statusCode:function(e){var t;if(e)if(2>x)for(t in e)m[t]=[m[t],e[t]];else N.always(e[N.status]);return this},abort:function(e){var t=e||T;return l&&l.abort(t),k(0,t),this}};if(h.promise(N).complete=g.add,N.success=N.done,N.error=N.fail,p.url=((e||p.url||yn)+"").replace(xn,"").replace(kn,mn[1]+"//"),p.type=n.method||n.type||p.method||p.type,p.dataTypes=b.trim(p.dataType||"*").toLowerCase().match(w)||[""],null==p.crossDomain&&(r=En.exec(p.url.toLowerCase()),p.crossDomain=!(!r||r[1]===mn[1]&&r[2]===mn[2]&&(r[3]||("http:"===r[1]?80:443))==(mn[3]||("http:"===mn[1]?80:443)))),p.data&&p.processData&&"string"!=typeof p.data&&(p.data=b.param(p.data,p.traditional)),qn(An,p,n,N),2===x)return N;u=p.global,u&&0===b.active++&&b.event.trigger("ajaxStart"),p.type=p.type.toUpperCase(),p.hasContent=!Cn.test(p.type),o=p.url,p.hasContent||(p.data&&(o=p.url+=(bn.test(o)?"&":"?")+p.data,delete p.data),p.cache===!1&&(p.url=wn.test(o)?o.replace(wn,"$1_="+vn++):o+(bn.test(o)?"&":"?")+"_="+vn++)),p.ifModified&&(b.lastModified[o]&&N.setRequestHeader("If-Modified-Since",b.lastModified[o]),b.etag[o]&&N.setRequestHeader("If-None-Match",b.etag[o])),(p.data&&p.hasContent&&p.contentType!==!1||n.contentType)&&N.setRequestHeader("Content-Type",p.contentType),N.setRequestHeader("Accept",p.dataTypes[0]&&p.accepts[p.dataTypes[0]]?p.accepts[p.dataTypes[0]]+("*"!==p.dataTypes[0]?", "+Dn+"; q=0.01":""):p.accepts["*"]);for(i in p.headers)N.setRequestHeader(i,p.headers[i]);if(p.beforeSend&&(p.beforeSend.call(f,N,p)===!1||2===x))return N.abort();T="abort";for(i in{success:1,error:1,complete:1})N[i](p[i]);if(l=qn(jn,p,n,N)){N.readyState=1,u&&d.trigger("ajaxSend",[N,p]),p.async&&p.timeout>0&&(s=setTimeout(function(){N.abort("timeout")},p.timeout));try{x=1,l.send(y,k)}catch(C){if(!(2>x))throw C;k(-1,C)}}else k(-1,"No Transport");function k(e,n,r,i){var c,y,v,w,T,C=n;2!==x&&(x=2,s&&clearTimeout(s),l=t,a=i||"",N.readyState=e>0?4:0,r&&(w=_n(p,N,r)),e>=200&&300>e||304===e?(p.ifModified&&(T=N.getResponseHeader("Last-Modified"),T&&(b.lastModified[o]=T),T=N.getResponseHeader("etag"),T&&(b.etag[o]=T)),204===e?(c=!0,C="nocontent"):304===e?(c=!0,C="notmodified"):(c=Fn(p,w),C=c.state,y=c.data,v=c.error,c=!v)):(v=C,(e||!C)&&(C="error",0>e&&(e=0))),N.status=e,N.statusText=(n||C)+"",c?h.resolveWith(f,[y,C,N]):h.rejectWith(f,[N,C,v]),N.statusCode(m),m=t,u&&d.trigger(c?"ajaxSuccess":"ajaxError",[N,p,c?y:v]),g.fireWith(f,[N,C]),u&&(d.trigger("ajaxComplete",[N,p]),--b.active||b.event.trigger("ajaxStop")))}return N},getScript:function(e,n){return b.get(e,t,n,"script")},getJSON:function(e,t,n){return b.get(e,t,n,"json")}});function _n(e,n,r){var i,o,a,s,u=e.contents,l=e.dataTypes,c=e.responseFields;for(s in c)s in r&&(n[c[s]]=r[s]);while("*"===l[0])l.shift(),o===t&&(o=e.mimeType||n.getResponseHeader("Content-Type"));if(o)for(s in u)if(u[s]&&u[s].test(o)){l.unshift(s);break}if(l[0]in r)a=l[0];else{for(s in r){if(!l[0]||e.converters[s+" "+l[0]]){a=s;break}i||(i=s)}a=a||i}return a?(a!==l[0]&&l.unshift(a),r[a]):t}function Fn(e,t){var n,r,i,o,a={},s=0,u=e.dataTypes.slice(),l=u[0];if(e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u[1])for(i in e.converters)a[i.toLowerCase()]=e.converters[i];for(;r=u[++s];)if("*"!==r){if("*"!==l&&l!==r){if(i=a[l+" "+r]||a["* "+r],!i)for(n in a)if(o=n.split(" "),o[1]===r&&(i=a[l+" "+o[0]]||a["* "+o[0]])){i===!0?i=a[n]:a[n]!==!0&&(r=o[0],u.splice(s--,0,r));break}if(i!==!0)if(i&&e["throws"])t=i(t);else try{t=i(t)}catch(c){return{state:"parsererror",error:i?c:"No conversion from "+l+" to "+r}}}l=r}return{state:"success",data:t}}b.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(e){return b.globalEval(e),e}}}),b.ajaxPrefilter("script",function(e){e.cache===t&&(e.cache=!1),e.crossDomain&&(e.type="GET",e.global=!1)}),b.ajaxTransport("script",function(e){if(e.crossDomain){var n,r=o.head||b("head")[0]||o.documentElement;return{send:function(t,i){n=o.createElement("script"),n.async=!0,e.scriptCharset&&(n.charset=e.scriptCharset),n.src=e.url,n.onload=n.onreadystatechange=function(e,t){(t||!n.readyState||/loaded|complete/.test(n.readyState))&&(n.onload=n.onreadystatechange=null,n.parentNode&&n.parentNode.removeChild(n),n=null,t||i(200,"success"))},r.insertBefore(n,r.firstChild)},abort:function(){n&&n.onload(t,!0)}}}});var On=[],Bn=/(=)\?(?=&|$)|\?\?/;b.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=On.pop()||b.expando+"_"+vn++;return this[e]=!0,e}}),b.ajaxPrefilter("json jsonp",function(n,r,i){var o,a,s,u=n.jsonp!==!1&&(Bn.test(n.url)?"url":"string"==typeof n.data&&!(n.contentType||"").indexOf("application/x-www-form-urlencoded")&&Bn.test(n.data)&&"data");return u||"jsonp"===n.dataTypes[0]?(o=n.jsonpCallback=b.isFunction(n.jsonpCallback)?n.jsonpCallback():n.jsonpCallback,u?n[u]=n[u].replace(Bn,"$1"+o):n.jsonp!==!1&&(n.url+=(bn.test(n.url)?"&":"?")+n.jsonp+"="+o),n.converters["script json"]=function(){return s||b.error(o+" was not called"),s[0]},n.dataTypes[0]="json",a=e[o],e[o]=function(){s=arguments},i.always(function(){e[o]=a,n[o]&&(n.jsonpCallback=r.jsonpCallback,On.push(o)),s&&b.isFunction(a)&&a(s[0]),s=a=t}),"script"):t});var Pn,Rn,Wn=0,$n=e.ActiveXObject&&function(){var e;for(e in Pn)Pn[e](t,!0)};function In(){try{return new e.XMLHttpRequest}catch(t){}}function zn(){try{return new e.ActiveXObject("Microsoft.XMLHTTP")}catch(t){}}b.ajaxSettings.xhr=e.ActiveXObject?function(){return!this.isLocal&&In()||zn()}:In,Rn=b.ajaxSettings.xhr(),b.support.cors=!!Rn&&"withCredentials"in Rn,Rn=b.support.ajax=!!Rn,Rn&&b.ajaxTransport(function(n){if(!n.crossDomain||b.support.cors){var r;return{send:function(i,o){var a,s,u=n.xhr();if(n.username?u.open(n.type,n.url,n.async,n.username,n.password):u.open(n.type,n.url,n.async),n.xhrFields)for(s in n.xhrFields)u[s]=n.xhrFields[s];n.mimeType&&u.overrideMimeType&&u.overrideMimeType(n.mimeType),n.crossDomain||i["X-Requested-With"]||(i["X-Requested-With"]="XMLHttpRequest");try{for(s in i)u.setRequestHeader(s,i[s])}catch(l){}u.send(n.hasContent&&n.data||null),r=function(e,i){var s,l,c,p;try{if(r&&(i||4===u.readyState))if(r=t,a&&(u.onreadystatechange=b.noop,$n&&delete Pn[a]),i)4!==u.readyState&&u.abort();else{p={},s=u.status,l=u.getAllResponseHeaders(),"string"==typeof u.responseText&&(p.text=u.responseText);try{c=u.statusText}catch(f){c=""}s||!n.isLocal||n.crossDomain?1223===s&&(s=204):s=p.text?200:404}}catch(d){i||o(-1,d)}p&&o(s,c,p,l)},n.async?4===u.readyState?setTimeout(r):(a=++Wn,$n&&(Pn||(Pn={},b(e).unload($n)),Pn[a]=r),u.onreadystatechange=r):r()},abort:function(){r&&r(t,!0)}}}});var Xn,Un,Vn=/^(?:toggle|show|hide)$/,Yn=RegExp("^(?:([+-])=|)("+x+")([a-z%]*)$","i"),Jn=/queueHooks$/,Gn=[nr],Qn={"*":[function(e,t){var n,r,i=this.createTween(e,t),o=Yn.exec(t),a=i.cur(),s=+a||0,u=1,l=20;if(o){if(n=+o[2],r=o[3]||(b.cssNumber[e]?"":"px"),"px"!==r&&s){s=b.css(i.elem,e,!0)||n||1;do u=u||".5",s/=u,b.style(i.elem,e,s+r);while(u!==(u=i.cur()/a)&&1!==u&&--l)}i.unit=r,i.start=s,i.end=o[1]?s+(o[1]+1)*n:n}return i}]};function Kn(){return setTimeout(function(){Xn=t}),Xn=b.now()}function Zn(e,t){b.each(t,function(t,n){var r=(Qn[t]||[]).concat(Qn["*"]),i=0,o=r.length;for(;o>i;i++)if(r[i].call(e,t,n))return})}function er(e,t,n){var r,i,o=0,a=Gn.length,s=b.Deferred().always(function(){delete u.elem}),u=function(){if(i)return!1;var t=Xn||Kn(),n=Math.max(0,l.startTime+l.duration-t),r=n/l.duration||0,o=1-r,a=0,u=l.tweens.length;for(;u>a;a++)l.tweens[a].run(o);return s.notifyWith(e,[l,o,n]),1>o&&u?n:(s.resolveWith(e,[l]),!1)},l=s.promise({elem:e,props:b.extend({},t),opts:b.extend(!0,{specialEasing:{}},n),originalProperties:t,originalOptions:n,startTime:Xn||Kn(),duration:n.duration,tweens:[],createTween:function(t,n){var r=b.Tween(e,l.opts,t,n,l.opts.specialEasing[t]||l.opts.easing);return l.tweens.push(r),r},stop:function(t){var n=0,r=t?l.tweens.length:0;if(i)return this;for(i=!0;r>n;n++)l.tweens[n].run(1);return t?s.resolveWith(e,[l,t]):s.rejectWith(e,[l,t]),this}}),c=l.props;for(tr(c,l.opts.specialEasing);a>o;o++)if(r=Gn[o].call(l,e,c,l.opts))return r;return Zn(l,c),b.isFunction(l.opts.start)&&l.opts.start.call(e,l),b.fx.timer(b.extend(u,{elem:e,anim:l,queue:l.opts.queue})),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always)}function tr(e,t){var n,r,i,o,a;for(i in e)if(r=b.camelCase(i),o=t[r],n=e[i],b.isArray(n)&&(o=n[1],n=e[i]=n[0]),i!==r&&(e[r]=n,delete e[i]),a=b.cssHooks[r],a&&"expand"in a){n=a.expand(n),delete e[r];for(i in n)i in e||(e[i]=n[i],t[i]=o)}else t[r]=o}b.Animation=b.extend(er,{tweener:function(e,t){b.isFunction(e)?(t=e,e=["*"]):e=e.split(" ");var n,r=0,i=e.length;for(;i>r;r++)n=e[r],Qn[n]=Qn[n]||[],Qn[n].unshift(t)},prefilter:function(e,t){t?Gn.unshift(e):Gn.push(e)}});function nr(e,t,n){var r,i,o,a,s,u,l,c,p,f=this,d=e.style,h={},g=[],m=e.nodeType&&nn(e);n.queue||(c=b._queueHooks(e,"fx"),null==c.unqueued&&(c.unqueued=0,p=c.empty.fire,c.empty.fire=function(){c.unqueued||p()}),c.unqueued++,f.always(function(){f.always(function(){c.unqueued--,b.queue(e,"fx").length||c.empty.fire()})})),1===e.nodeType&&("height"in t||"width"in t)&&(n.overflow=[d.overflow,d.overflowX,d.overflowY],"inline"===b.css(e,"display")&&"none"===b.css(e,"float")&&(b.support.inlineBlockNeedsLayout&&"inline"!==un(e.nodeName)?d.zoom=1:d.display="inline-block")),n.overflow&&(d.overflow="hidden",b.support.shrinkWrapBlocks||f.always(function(){d.overflow=n.overflow[0],d.overflowX=n.overflow[1],d.overflowY=n.overflow[2]}));for(i in t)if(a=t[i],Vn.exec(a)){if(delete t[i],u=u||"toggle"===a,a===(m?"hide":"show"))continue;g.push(i)}if(o=g.length){s=b._data(e,"fxshow")||b._data(e,"fxshow",{}),"hidden"in s&&(m=s.hidden),u&&(s.hidden=!m),m?b(e).show():f.done(function(){b(e).hide()}),f.done(function(){var t;b._removeData(e,"fxshow");for(t in h)b.style(e,t,h[t])});for(i=0;o>i;i++)r=g[i],l=f.createTween(r,m?s[r]:0),h[r]=s[r]||b.style(e,r),r in s||(s[r]=l.start,m&&(l.end=l.start,l.start="width"===r||"height"===r?1:0))}}function rr(e,t,n,r,i){return new rr.prototype.init(e,t,n,r,i)}b.Tween=rr,rr.prototype={constructor:rr,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||"swing",this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(b.cssNumber[n]?"":"px")},cur:function(){var e=rr.propHooks[this.prop];return e&&e.get?e.get(this):rr.propHooks._default.get(this)},run:function(e){var t,n=rr.propHooks[this.prop];return this.pos=t=this.options.duration?b.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):rr.propHooks._default.set(this),this}},rr.prototype.init.prototype=rr.prototype,rr.propHooks={_default:{get:function(e){var t;return null==e.elem[e.prop]||e.elem.style&&null!=e.elem.style[e.prop]?(t=b.css(e.elem,e.prop,""),t&&"auto"!==t?t:0):e.elem[e.prop]},set:function(e){b.fx.step[e.prop]?b.fx.step[e.prop](e):e.elem.style&&(null!=e.elem.style[b.cssProps[e.prop]]||b.cssHooks[e.prop])?b.style(e.elem,e.prop,e.now+e.unit):e.elem[e.prop]=e.now}}},rr.propHooks.scrollTop=rr.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},b.each(["toggle","show","hide"],function(e,t){var n=b.fn[t];b.fn[t]=function(e,r,i){return null==e||"boolean"==typeof e?n.apply(this,arguments):this.animate(ir(t,!0),e,r,i)}}),b.fn.extend({fadeTo:function(e,t,n,r){return this.filter(nn).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var i=b.isEmptyObject(e),o=b.speed(t,n,r),a=function(){var t=er(this,b.extend({},e),o);a.finish=function(){t.stop(!0)},(i||b._data(this,"finish"))&&t.stop(!0)};return a.finish=a,i||o.queue===!1?this.each(a):this.queue(o.queue,a)},stop:function(e,n,r){var i=function(e){var t=e.stop;delete e.stop,t(r)};return"string"!=typeof e&&(r=n,n=e,e=t),n&&e!==!1&&this.queue(e||"fx",[]),this.each(function(){var t=!0,n=null!=e&&e+"queueHooks",o=b.timers,a=b._data(this);if(n)a[n]&&a[n].stop&&i(a[n]);else for(n in a)a[n]&&a[n].stop&&Jn.test(n)&&i(a[n]);for(n=o.length;n--;)o[n].elem!==this||null!=e&&o[n].queue!==e||(o[n].anim.stop(r),t=!1,o.splice(n,1));(t||!r)&&b.dequeue(this,e)})},finish:function(e){return e!==!1&&(e=e||"fx"),this.each(function(){var t,n=b._data(this),r=n[e+"queue"],i=n[e+"queueHooks"],o=b.timers,a=r?r.length:0;for(n.finish=!0,b.queue(this,e,[]),i&&i.cur&&i.cur.finish&&i.cur.finish.call(this),t=o.length;t--;)o[t].elem===this&&o[t].queue===e&&(o[t].anim.stop(!0),o.splice(t,1));for(t=0;a>t;t++)r[t]&&r[t].finish&&r[t].finish.call(this);delete n.finish})}});function ir(e,t){var n,r={height:e},i=0;for(t=t?1:0;4>i;i+=2-t)n=Zt[i],r["margin"+n]=r["padding"+n]=e;return t&&(r.opacity=r.width=e),r}b.each({slideDown:ir("show"),slideUp:ir("hide"),slideToggle:ir("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){b.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}}),b.speed=function(e,t,n){var r=e&&"object"==typeof e?b.extend({},e):{complete:n||!n&&t||b.isFunction(e)&&e,duration:e,easing:n&&t||t&&!b.isFunction(t)&&t};return r.duration=b.fx.off?0:"number"==typeof r.duration?r.duration:r.duration in b.fx.speeds?b.fx.speeds[r.duration]:b.fx.speeds._default,(null==r.queue||r.queue===!0)&&(r.queue="fx"),r.old=r.complete,r.complete=function(){b.isFunction(r.old)&&r.old.call(this),r.queue&&b.dequeue(this,r.queue)},r},b.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2}},b.timers=[],b.fx=rr.prototype.init,b.fx.tick=function(){var e,n=b.timers,r=0;for(Xn=b.now();n.length>r;r++)e=n[r],e()||n[r]!==e||n.splice(r--,1);n.length||b.fx.stop(),Xn=t},b.fx.timer=function(e){e()&&b.timers.push(e)&&b.fx.start()},b.fx.interval=13,b.fx.start=function(){Un||(Un=setInterval(b.fx.tick,b.fx.interval))},b.fx.stop=function(){clearInterval(Un),Un=null},b.fx.speeds={slow:600,fast:200,_default:400},b.fx.step={},b.expr&&b.expr.filters&&(b.expr.filters.animated=function(e){return b.grep(b.timers,function(t){return e===t.elem}).length}),b.fn.offset=function(e){if(arguments.length)return e===t?this:this.each(function(t){b.offset.setOffset(this,e,t)});var n,r,o={top:0,left:0},a=this[0],s=a&&a.ownerDocument;if(s)return n=s.documentElement,b.contains(n,a)?(typeof a.getBoundingClientRect!==i&&(o=a.getBoundingClientRect()),r=or(s),{top:o.top+(r.pageYOffset||n.scrollTop)-(n.clientTop||0),left:o.left+(r.pageXOffset||n.scrollLeft)-(n.clientLeft||0)}):o},b.offset={setOffset:function(e,t,n){var r=b.css(e,"position");"static"===r&&(e.style.position="relative");var i=b(e),o=i.offset(),a=b.css(e,"top"),s=b.css(e,"left"),u=("absolute"===r||"fixed"===r)&&b.inArray("auto",[a,s])>-1,l={},c={},p,f;u?(c=i.position(),p=c.top,f=c.left):(p=parseFloat(a)||0,f=parseFloat(s)||0),b.isFunction(t)&&(t=t.call(e,n,o)),null!=t.top&&(l.top=t.top-o.top+p),null!=t.left&&(l.left=t.left-o.left+f),"using"in t?t.using.call(e,l):i.css(l)}},b.fn.extend({position:function(){if(this[0]){var e,t,n={top:0,left:0},r=this[0];return"fixed"===b.css(r,"position")?t=r.getBoundingClientRect():(e=this.offsetParent(),t=this.offset(),b.nodeName(e[0],"html")||(n=e.offset()),n.top+=b.css(e[0],"borderTopWidth",!0),n.left+=b.css(e[0],"borderLeftWidth",!0)),{top:t.top-n.top-b.css(r,"marginTop",!0),left:t.left-n.left-b.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent||o.documentElement;while(e&&!b.nodeName(e,"html")&&"static"===b.css(e,"position"))e=e.offsetParent;return e||o.documentElement})}}),b.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,n){var r=/Y/.test(n);b.fn[e]=function(i){return b.access(this,function(e,i,o){var a=or(e);return o===t?a?n in a?a[n]:a.document.documentElement[i]:e[i]:(a?a.scrollTo(r?b(a).scrollLeft():o,r?o:b(a).scrollTop()):e[i]=o,t)},e,i,arguments.length,null)}});function or(e){return b.isWindow(e)?e:9===e.nodeType?e.defaultView||e.parentWindow:!1}b.each({Height:"height",Width:"width"},function(e,n){b.each({padding:"inner"+e,content:n,"":"outer"+e},function(r,i){b.fn[i]=function(i,o){var a=arguments.length&&(r||"boolean"!=typeof i),s=r||(i===!0||o===!0?"margin":"border");return b.access(this,function(n,r,i){var o;return b.isWindow(n)?n.document.documentElement["client"+e]:9===n.nodeType?(o=n.documentElement,Math.max(n.body["scroll"+e],o["scroll"+e],n.body["offset"+e],o["offset"+e],o["client"+e])):i===t?b.css(n,r,s):b.style(n,r,i,s)},n,a?i:t,a,null)}})}),e.jQuery=e.$=b,"function"==typeof define&&define.amd&&define.amd.jQuery&&define("jquery",[],function(){return b})})(window);;/**
 * @param {string}
 * @return {object}
 */
$.fn.dimensions = function () {
  var box = {}
  $(this).each(function () {
    if (box.left === undefined) {
      box.left = $(this).position().left
      box.right = box.left + $(this).outerWidth()
      box.top = $(this).position().top
      box.bottom = box.top + $(this).outerHeight()
    }
    else {
      var left = $(this).position().left
      var right = left + $(this).outerWidth()
      var _top = $(this).position().top
      var bottom = _top + $(this).outerHeight()
      if (left < box.left)
        box.left = left
      if (right > box.right)
        box.right = right
      if (_top < box.top)
        box.top = _top
      if (bottom > box.bottom)
        box.bottom = bottom
    }
  })
  box.height = box.bottom - box.top
  box.width = box.right - box.left
  box.center = box.left + Math.floor(box.width/2)
  box.middle = box.top + Math.floor(box.height/2)
  return box
}

;// Todo: Allow option to fire lasso event during the slide
// Todo: Allow option to fire lasso event on elements that only have a partial match
var Lasso = {
  id : "Lasso",
  container : 'body',
  selector : 'div',
  style : {
    'z-index': 100,
    border: '1px solid #0c79cc',
    position: 'absolute'
  },
  scrollTop : 0
}

Lasso.append = function () {

  if ($('#' + Lasso.id).length > 0)
    return null
  
  var lasso = $('<div></div>')
//  lasso.append('<style>html { -webkit-user-select: none;-moz-user-select: -moz-none;user-select: none;}</style>')
  lasso.attr('id', Lasso.id)
  lasso.css(Lasso.style)
  lasso.css({
    top : Lasso.mousedown.pageY,
    left : Lasso.mousedown.pageX,
  })
  $(Lasso.container).append(lasso)
  
}

Lasso.disable = function () {
  $(document).off("mousedown", Lasso.onmousedown)
  $(document).off("slide", Lasso.slide)
  $(document).off("slideend", Lasso.release)
}

Lasso.enable = function () {
  $(document).on("mousedown", Lasso.onmousedown)
  $(document).on("slide", Lasso.slide)
  $(document).on("slideend", Lasso.release)
}

Lasso.onmousedown = function (event) {
  Lasso.mousedown = event
  Lasso.scrollTop = $(Lasso.container).scrollTop()
  return true
}

Lasso.release = function (event, mouseUpEvent) {

  var lasso = $('#' + Lasso.id)
  if (lasso.length === 0)
    return null
  
  var box = {}
  box.left = lasso.offset().left,
  box.right = lasso.offset().left + lasso.outerWidth(),
  box.top = lasso.offset().top,
  box.bottom = lasso.offset().top + lasso.outerHeight()
  
  // select every visible block thats entirely within the rectangle
  var results = $()
  $(Lasso.selector).each(function () {
    var el = $(this)
    if (el.offset().left < box.left)
      return true
    
    if ((el.offset().left + el.outerWidth()) > box.right)
      return true
    
    if (el.offset().top < box.top)
      return true
    
    if ((el.offset().top + el.outerHeight()) > box.bottom)
      return true
    
    // Yay! The lasso box completely surrounds me.
    $(this).addClass('Lasso')
  })
  // We only want to trigger Lasso event on outermost parent elements
  // Todo: clean this up
  $('.Lasso').each(function () {
    $(this).find('.Lasso').each(function () {
      $(this).removeClass('Lasso')
    })
  })
  $('.Lasso').each(function () {
    $(this).removeClass('Lasso')
    $(this).trigger('lasso')
  })
  lasso.remove()
}

Lasso.slide = function (slideEvent, mouseMoveEvent) {

  Lasso.append()
  var lasso = $('#' + Lasso.id)
  var scrollChange = $(Lasso.container).scrollTop() - Lasso.scrollTop
  var y = Lasso.mousedown.pageY - scrollChange
  var directions = {"vertical" : y, "horizontal" : Lasso.mousedown.pageX}
  for (var i in directions) {
    
    var direction = i,
        origin = directions[i],
        new_value = (direction == "horizontal" ? mouseMoveEvent.pageX : mouseMoveEvent.pageY),
        size = (direction == "horizontal" ? "width" : "height"),
        position = (direction == "horizontal" ? "left" : "top"),
        d = (direction == "horizontal" ? "verticals" : "horizontals"),
        change = new_value - origin
    // if positive change, increase size, keep position
    if (change >= 0)
      lasso.css(size, change).css(position, origin)
    // if negative change, decrease position, increase size.
    else
      lasso.css(position, new_value).css(size, -change)
  }
}




;// http://stackoverflow.com/questions/46155/validate-email-address-in-javascript
var ValidateEmail = function (email) { 
  var re = /\S+@\S+\.\S+/
  return re.test(email)
}
;/**
 * http://stackoverflow.com/questions/901115/get-query-string-values-in-javascript
 *
 * @return {object}
 */
var ParseQueryString = function () {
  var query = {};
  (function () {
      var match,
          pl     = /\+/g,  // Regex for replacing addition symbol with a space
          search = /([^&=]+)=?([^&]*)/g,
          decode = function (s) { return decodeURIComponent(s.replace(pl, " ")) },
          query_string  = window.location.search.substring(1)
  
      while (match = search.exec(query_string))
         query[decode(match[1])] = decode(match[2])
  })()
  return query
}
;/**
 * Make a string URL friendly. Turns "$foo Bar%!@$" into "foo_bar"
 *
 * @param {string}
 * @return {object}
 */
var Permalink = function (string) {
  if (!string) return ''
  // strip non alphanumeric characters from string and lowercase it.
  return string.toLowerCase().replace(/[^a-z0-9- _\.]/gi, '').replace(/ /g, '_')
}
;/**
 * Get the width of the horizontal and vertical scrollbars.
 *
 * @return {number}
 */
$.scrollbarWidth = function () {
  // potentially always return 10
  if (navigator.userAgent.match(/Mac OS X 10_7/))
    return 10
  
  var div = $('<div style="width:50px;height:50px;overflow:hidden;position:absolute;top:-200px;left:-200px;"><div style="height:100px;"> </div>')
  // Append our div, do our calculation and then remove it 
  $('body').append(div)
  var w1 = $('div', div).innerWidth()
  div.css('overflow-y', 'scroll')
  var w2 = $('div', div).innerWidth()
  div.remove()
  return (w1 - w2)
}

/**
 * Is the given coordinate on a scrollbar? Necessary to make resize and select
 * behave properly when a person clicks scrollbar.
 *
 * todo: look into using Google Closure's code for this.
 *
 * @param {number}
 * @param {number}
 * @return {bool}
 */
$.isOnScrollbar = function (x, y) {
  var scrollbar_size = $.scrollbarWidth()
  var window_width = $(window).width()
  var window_height = $(window).height()
  var body_width = $('body').width()
  var body_height = $('body').height()
  var vertical_bar = body_height > window_height
  var horizontal_bar = body_width > window_width
  var distance_right = window_width - x
  var distance_bottom = window_height - y
  if (vertical_bar && distance_right < scrollbar_size)
    return true
  if (horizontal_bar && distance_bottom < scrollbar_size)
    return true
  return false
}


;// http://stackoverflow.com/questions/196972/convert-string-to-title-case-with-javascript
var ToProperCase = function (string) {
  return string.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();})
}
;var ParseName = function (email) {
  if (!email) return ''
  return ToProperCase(
        email
        .replace(/\@.*/, '')
        .replace(/[0-9]/g, '')
        .replace(/\./, ' ')
      )
}
;/**
 * topdiv
 *
 * Is there a div at a certain point? Get the top div at a given point
 *
 * Source http://github.com/breck7/topdiv
 * License MIT
 * Author Breck Yunits
 *
 * @param {string} A Selector to use to narrow search.
 * @param {number}
 * @param {number}
 * @return {jQuery object|null}
 */
$.topDiv = function (selector, x, y) {
  
  var match = null
  $(selector).each(function() {
    var div = $(this)
    // Return if the block is
    var left = div.position().left
    if (left > x)
      return true
    var right = div.position().left + div.outerWidth()
    if (right < x)
      return true
    var _top = div.position().top
    if (_top > y)
      return true
    var bottom = _top + div.outerHeight()
    if (bottom < y)
      return true
    
    // If we dont have a block yet, set it
    if (!match)
      return match = div
    
    // Else only change the match if z-index or element index is greater.
    var divZIndex = parseFloat(div.css('z-index'))
    var matchZIndex = parseFloat(match.css('z-index'))
  
    
    if (divZIndex > matchZIndex)
      return match = div
    if (divZIndex < matchZIndex)
      return true
    
    if (div.index() > match.index())
      return match = div
  
  })
  return match
}
;var Blinker = {}
Blinker['default'] = 'Nudgepad'
Blinker.blinking = Blinker.default
Blinker.interval = null
Blinker.change = function (title) {
  Blinker.blinking = title
}
Blinker.blink = function () {
  if (document.hasFocus())
    return Blinker.stop()
  document.title = (document.title == Blinker.default ? Blinker.blinking : Blinker.default)
}
Blinker.start = function () {
  clearInterval(Blinker.interval)
  Blinker.blinking = Blinker.default
  Blinker.interval = setInterval(Blinker.blink, 2000)
}
Blinker.stop = function () {
  clearInterval(Blinker.interval)
  document.title = Blinker.blinking = Blinker.default
}
$(window).on('blur', Blinker.start)
$(window).on('focus', Blinker.stop)

;// Spectrum Colorpicker v1.0.9
// https://github.com/bgrins/spectrum
// Author: Brian Grinstead
// License: MIT

(function (window, $, undefined) {
    var defaultOpts = {

        // Events
        beforeShow: noop,
        move: noop,
        change: noop,
        show: noop,
        hide: noop,

        // Options
        color: false,
        flat: false,
        showInput: true,
        showButtons: false,
        clickoutFiresChange: false,
        showInitial: false,
        showPalette: false,
        showPaletteOnly: false,
        showSelectionPalette: true,
        localStorageKey: false,
        maxSelectionSize: 7,
        cancelText: "cancel",
        chooseText: "choose",
        preferredFormat: false,
        className: "",
        showAlpha: false,
        theme: "sp-light",
        palette: ['fff', '000'],
        selectionPalette: [],
        disabled: false
    },
    spectrums = [],
    IE = !!/msie/i.exec( window.navigator.userAgent ),
    rgbaSupport = (function() {
        function contains( str, substr ) {
            return !!~('' + str).indexOf(substr);
        }

        var elem = document.createElement('div');
        var style = elem.style;
        style.cssText = 'background-color:rgba(0,0,0,.5)';
        return contains(style.backgroundColor, 'rgba') || contains(style.backgroundColor, 'hsla');
    })(),
    replaceInput = [
        "<div class='sp-replacer'>",
            "<div class='sp-preview'><div class='sp-preview-inner'></div></div>",
        "</div>"
    ].join(''),
    markup = (function () {

        // IE does not support gradients with multiple stops, so we need to simulate
        //  that for the rainbow slider with 8 divs that each have a single gradient
        var gradientFix = "";
        if (IE) {
            for (var i = 1; i <= 6; i++) {
                gradientFix += "<div class='sp-" + i + "'></div>";
            }
        }

        return [
            "<div class='sp-container'>",
                "<div class='sp-palette-container'>",
                    "<div class='sp-palette sp-thumb sp-cf'></div>",
                "</div>",
                "<div class='sp-picker-container'>",
                    "<div class='sp-top sp-cf'>",
                        "<div class='sp-fill'></div>",
                        "<div class='sp-top-inner'>",
                            "<div class='sp-color'>",
                                "<div class='sp-sat'>",
                                    "<div class='sp-val'>",
                                        "<div class='sp-dragger'></div>",
                                    "</div>",
                                "</div>",
                            "</div>",
                            "<div class='sp-hue'>",
                                "<div class='sp-slider'></div>",
                                gradientFix,
                            "</div>",
                        "</div>",
                        "<div class='sp-alpha'><div class='sp-alpha-inner'><div class='sp-alpha-handle'></div></div></div>",
                    "</div>",
                    "<div class='sp-input-container sp-cf'>",
                        "<input class='sp-input' type='text' spellcheck='false'  />",
                    "</div>",
                    "<div class='sp-initial sp-thumb sp-cf'></div>",
                    "<div class='sp-button-container sp-cf'>",
                        "<a class='sp-cancel' href='#'></a>",
                        "<button class='sp-choose'></button>",
                    "</div>",
                "</div>",
            "</div>"
        ].join("");
    })();

    function paletteTemplate (p, color, className) {
        var html = [];
        for (var i = 0; i < p.length; i++) {
            var tiny = tinycolor(p[i]);
            var c = tiny.toHsl().l < 0.5 ? "sp-thumb-el sp-thumb-dark" : "sp-thumb-el sp-thumb-light";
            c += (tinycolor.equals(color, p[i])) ? " sp-thumb-active" : "";

            var swatchStyle = rgbaSupport ? ("background-color:" + tiny.toRgbString()) : "filter:" + tiny.toFilter();
            html.push('<span title="' + tiny.toRgbString() + '" data-color="' + tiny.toRgbString() + '" class="' + c + '"><span class="sp-thumb-inner" style="' + swatchStyle + ';" /></span>');
        }
        return "<div class='sp-cf " + className + "'>" + html.join('') + "</div>";
    }

    function hideAll() {
        for (var i = 0; i < spectrums.length; i++) {
            if (spectrums[i]) {
                spectrums[i].hide();
            }
        }
    }

    function instanceOptions(o, callbackContext) {
        var opts = $.extend({}, defaultOpts, o);
        opts.callbacks = {
            'move': bind(opts.move, callbackContext),
            'change': bind(opts.change, callbackContext),
            'show': bind(opts.show, callbackContext),
            'hide': bind(opts.hide, callbackContext),
            'beforeShow': bind(opts.beforeShow, callbackContext)
        };

        return opts;
    }

    function spectrum(element, o) {

        var opts = instanceOptions(o, element),
            flat = opts.flat,
            showSelectionPalette = opts.showSelectionPalette,
            localStorageKey = opts.localStorageKey,
            theme = opts.theme,
            callbacks = opts.callbacks,
            resize = throttle(reflow, 10),
            visible = false,
            dragWidth = 0,
            dragHeight = 0,
            dragHelperHeight = 0,
            slideHeight = 0,
            slideWidth = 0,
            alphaWidth = 0,
            alphaSlideHelperWidth = 0,
            slideHelperHeight = 0,
            currentHue = 0,
            currentSaturation = 0,
            currentValue = 0,
            currentAlpha = 1,
            palette = opts.palette.slice(0),
            paletteArray = $.isArray(palette[0]) ? palette : [palette],
            selectionPalette = opts.selectionPalette.slice(0),
            draggingClass = "sp-dragging";

        var doc = element.ownerDocument,
            body = doc.body,
            boundElement = $(element),
            disabled = false,
            container = $(markup, doc).addClass(theme),
            dragger = container.find(".sp-color"),
            dragHelper = container.find(".sp-dragger"),
            slider = container.find(".sp-hue"),
            slideHelper = container.find(".sp-slider"),
            alphaSliderInner = container.find(".sp-alpha-inner"),
            alphaSlider = container.find(".sp-alpha"),
            alphaSlideHelper = container.find(".sp-alpha-handle"),
            textInput = container.find(".sp-input"),
            paletteContainer = container.find(".sp-palette"),
            initialColorContainer = container.find(".sp-initial"),
            cancelButton = container.find(".sp-cancel"),
            chooseButton = container.find(".sp-choose"),
            isInput = boundElement.is("input"),
            shouldReplace = isInput && !flat,
            replacer = (shouldReplace) ? $(replaceInput).addClass(theme) : $([]),
            offsetElement = (shouldReplace) ? replacer : boundElement,
            previewElement = replacer.find(".sp-preview-inner"),
            initialColor = opts.color || (isInput && boundElement.val()),
            colorOnShow = false,
            preferredFormat = opts.preferredFormat,
            currentPreferredFormat = preferredFormat,
            clickoutFiresChange = !opts.showButtons || opts.clickoutFiresChange;


        function applyOptions() {

            container.toggleClass("sp-flat", flat);
            container.toggleClass("sp-input-disabled", !opts.showInput);
            container.toggleClass("sp-alpha-enabled", opts.showAlpha);
            container.toggleClass("sp-buttons-disabled", !opts.showButtons || flat);
            container.toggleClass("sp-palette-disabled", !opts.showPalette);
            container.toggleClass("sp-palette-only", opts.showPaletteOnly);
            container.toggleClass("sp-initial-disabled", !opts.showInitial);
            container.addClass(opts.className);

            reflow();
        }

        function initialize() {

            if (IE) {
                container.find("*:not(input)").attr("unselectable", "on");
            }

            applyOptions();

            if (shouldReplace) {
                boundElement.hide().after(replacer);
            }

            if (flat) {
                boundElement.after(container).hide();
            }
            else {
                $(body).append(container.hide());
            }

            if (localStorageKey && window.localStorage) {

                // Migrate old palettes over to new format.  May want to remove this eventually.
                try {
                    var oldPalette = window.localStorage[localStorageKey].split(",#");
                    if (oldPalette.length > 1) {
                        delete window.localStorage[localStorageKey];
                        $.each(oldPalette, function(i, c) {
                             addColorToSelectionPalette(c);
                        });
                    }
                }
                catch(e) { }

                try {
                    selectionPalette = window.localStorage[localStorageKey].split(";");
                }
                catch (e) { }
            }

            offsetElement.bind("click.spectrum touchstart.spectrum", function (e) {
                if (!disabled) {
                    toggle();
                }

                e.stopPropagation();

                if (!$(e.target).is("input")) {
                    e.preventDefault();
                }
            });

            if(boundElement.is(":disabled") || (opts.disabled === true)) {
                disable();
            }

            // Prevent clicks from bubbling up to document.  This would cause it to be hidden.
            container.click(stopPropagation);

            // Handle user typed input
            textInput.change(setFromTextInput);
            textInput.bind("paste", function () {
                setTimeout(setFromTextInput, 1);
            });
            textInput.keydown(function (e) { if (e.keyCode == 13) { setFromTextInput(); } });

            cancelButton.text(opts.cancelText);
            cancelButton.bind("click.spectrum", function (e) {
                e.stopPropagation();
                e.preventDefault();
                hide("cancel");
            });

            chooseButton.text(opts.chooseText);
            chooseButton.bind("click.spectrum", function (e) {
                e.stopPropagation();
                e.preventDefault();

                if (isValid()) {
                    updateOriginalInput(true);
                    hide();
                }
            });

            draggable(alphaSlider, function (dragX, dragY, e) {
                currentAlpha = (dragX / alphaWidth);
                if (e.shiftKey) {
                    currentAlpha = Math.round(currentAlpha * 10) / 10;
                }

                move();
            });

            draggable(slider, function (dragX, dragY) {
                currentHue = parseFloat(dragY / slideHeight);
                move();
            }, dragStart, dragStop);

            draggable(dragger, function (dragX, dragY) {
                currentSaturation = parseFloat(dragX / dragWidth);
                currentValue = parseFloat((dragHeight - dragY) / dragHeight);
                move();
            }, dragStart, dragStop);

            if (!!initialColor) {
                set(initialColor);

                // In case color was black - update the preview UI and set the format
                // since the set function will not run (default color is black).
                updateUI();
                currentPreferredFormat = preferredFormat || tinycolor(initialColor).format;

                addColorToSelectionPalette(initialColor);
            }
            else {
                updateUI();
            }

            if (flat) {
                show();
            }

            function palletElementClick(e) {
                if (e.data && e.data.ignore) {
                    set($(this).data("color"));
                    move();
                }
                else {
                    set($(this).data("color"));
                    updateOriginalInput(true);
                    move();
                    hide();
                }

                return false;
            }

            var paletteEvent = IE ? "mousedown.spectrum" : "click.spectrum touchstart.spectrum";
            paletteContainer.delegate(".sp-thumb-el", paletteEvent, palletElementClick);
            initialColorContainer.delegate(".sp-thumb-el:nth-child(1)", paletteEvent, { ignore: true }, palletElementClick);
        }

        function addColorToSelectionPalette(color) {
            if (showSelectionPalette) {
                var colorRgb = tinycolor(color).toRgbString();
                if ($.inArray(colorRgb, selectionPalette) === -1) {
                    selectionPalette.push(colorRgb);
                }

                if (localStorageKey && window.localStorage) {
                    try {
                        window.localStorage[localStorageKey] = selectionPalette.join(";");
                    }
                    catch(e) { }
                }
            }
        }

        function getUniqueSelectionPalette() {
            var unique = [];
            var p = selectionPalette;
            var paletteLookup = {};
            var rgb;

            if (opts.showPalette) {

                for (var i = 0; i < paletteArray.length; i++) {
                    for (var j = 0; j < paletteArray[i].length; j++) {
                        rgb = tinycolor(paletteArray[i][j]).toRgbString();
                        paletteLookup[rgb] = true;
                    }
                }

                for (i = 0; i < p.length; i++) {
                    rgb = tinycolor(p[i]).toRgbString();

                    if (!paletteLookup.hasOwnProperty(rgb)) {
                        unique.push(p[i]);
                        paletteLookup[rgb] = true;
                    }
                }
            }

            return unique.reverse().slice(0, opts.maxSelectionSize);
        }

        function drawPalette() {

            var currentColor = get();

            var html = $.map(paletteArray, function (palette, i) {
                return paletteTemplate(palette, currentColor, "sp-palette-row sp-palette-row-" + i);
            });

            if (selectionPalette) {
                html.push(paletteTemplate(getUniqueSelectionPalette(), currentColor, "sp-palette-row sp-palette-row-selection"));
            }

            paletteContainer.html(html.join(""));
        }

        function drawInitial() {
            if (opts.showInitial) {
                var initial = colorOnShow;
                var current = get();
                initialColorContainer.html(paletteTemplate([initial, current], current, "sp-palette-row-initial"));
            }
        }

        function dragStart() {
            if (dragHeight === 0 || dragWidth === 0 || slideHeight === 0) {
                reflow();
            }
            container.addClass(draggingClass);
        }

        function dragStop() {
            container.removeClass(draggingClass);
        }

        function setFromTextInput() {
            var tiny = tinycolor(textInput.val());
            if (tiny.ok) {
                set(tiny);
            }
            else {
                textInput.addClass("sp-validation-error");
            }
        }

        function toggle() {
            if (visible) {
                hide();
            }
            else {
                show();
            }
        }

        function show() {
            if (visible) {
                reflow();
                return;
            }
            if (callbacks.beforeShow(get()) === false) return;

            hideAll();
            visible = true;

            $(doc).bind("click.spectrum", hide);
            $(window).bind("resize.spectrum", resize);
            replacer.addClass("sp-active");
            container.show();

            if (opts.showPalette) {
                drawPalette();
            }
            reflow();
            updateUI();

            colorOnShow = get();

            drawInitial();
            callbacks.show(colorOnShow);
        }

        function hide(e) {

            // Return on right click
            if (e && e.type == "click" && e.button == 2) { return; }

            // Return if hiding is unnecessary
            if (!visible || flat) { return; }
            visible = false;

            $(doc).unbind("click.spectrum", hide);
            $(window).unbind("resize.spectrum", resize);

            replacer.removeClass("sp-active");
            container.hide();

            var colorHasChanged = !tinycolor.equals(get(), colorOnShow);

            if (colorHasChanged) {
                if (clickoutFiresChange && e !== "cancel") {
                    updateOriginalInput(true);
                }
                else {
                    revert();
                }
            }

            callbacks.hide(get());
        }

        function revert() {
            set(colorOnShow, true);
        }

        function set(color, ignoreFormatChange) {
            if (tinycolor.equals(color, get())) {
                return;
            }

            var newColor = tinycolor(color);
            var newHsv = newColor.toHsv();

            currentHue = newHsv.h;
            currentSaturation = newHsv.s;
            currentValue = newHsv.v;
            currentAlpha = newHsv.a;

            updateUI();

            if (!ignoreFormatChange) {
                currentPreferredFormat = preferredFormat || newColor.format;
            }
        }

        function get() {
            return tinycolor.fromRatio({ h: currentHue, s: currentSaturation, v: currentValue, a: Math.round(currentAlpha * 100) / 100 });
        }

        function isValid() {
            return !textInput.hasClass("sp-validation-error");
        }

        function move() {
            updateUI();

            callbacks.move(get());
        }

        function updateUI() {

            textInput.removeClass("sp-validation-error");

            updateHelperLocations();

            // Update dragger background color (gradients take care of saturation and value).
            var flatColor = tinycolor({ h: currentHue, s: "1.0", v: "1.0" });
            dragger.css("background-color", flatColor.toHexString());

            // Get a format that alpha will be included in (hex and names ignore alpha)
            var format = currentPreferredFormat;
            if (currentAlpha < 1) {
                if (format === "hex" || format === "name") {
                    format = "rgb";
                }
            }

            var realColor = get(),
                realHex = realColor.toHexString(),
                realRgb = realColor.toRgbString();


            // Update the replaced elements background color (with actual selected color)
            if (rgbaSupport || realColor.alpha === 1) {
                previewElement.css("background-color", realRgb);
            }
            else {
                previewElement.css("background-color", "transparent");
                previewElement.css("filter", realColor.toFilter());
            }

            if (opts.showAlpha) {
                var rgb = realColor.toRgb();
                rgb.a = 0;
                var realAlpha = tinycolor(rgb).toRgbString();
                var gradient = "linear-gradient(left, " + realAlpha + ", " + realHex + ")";

                if (IE) {
                    alphaSliderInner.css("filter", tinycolor(realAlpha).toFilter({ gradientType: 1 }, realHex));
                }
                else {
                    alphaSliderInner.css("background", "-webkit-" + gradient);
                    alphaSliderInner.css("background", "-moz-" + gradient);
                    alphaSliderInner.css("background", "-ms-" + gradient);
                    alphaSliderInner.css("background", gradient);
                }
            }


            // Update the text entry input as it changes happen
            if (opts.showInput) {
                if (currentAlpha < 1) {
                    if (format === "hex" || format === "name") {
                        format = "rgb";
                    }
                }
                textInput.val(realColor.toString(format));
            }

            if (opts.showPalette) {
                drawPalette();
            }

            drawInitial();
        }

        function updateHelperLocations() {
            var s = currentSaturation;
            var v = currentValue;

            // Where to show the little circle in that displays your current selected color
            var dragX = s * dragWidth;
            var dragY = dragHeight - (v * dragHeight);
            dragX = Math.max(
                -dragHelperHeight,
                Math.min(dragWidth - dragHelperHeight, dragX - dragHelperHeight)
            );
            dragY = Math.max(
                -dragHelperHeight,
                Math.min(dragHeight - dragHelperHeight, dragY - dragHelperHeight)
            );
            dragHelper.css({
                "top": dragY,
                "left": dragX
            });

            var alphaX = currentAlpha * alphaWidth;
            alphaSlideHelper.css({
                "left": alphaX - (alphaSlideHelperWidth / 2)
            });

            // Where to show the bar that displays your current selected hue
            var slideY = (currentHue) * slideHeight;
            slideHelper.css({
                "top": slideY - slideHelperHeight
            });
        }

        function updateOriginalInput(fireCallback) {
            var color = get();

            if (isInput) {
                boundElement.val(color.toString(currentPreferredFormat)).change();
            }

            var hasChanged = !tinycolor.equals(color, colorOnShow);
            colorOnShow = color;

            // Update the selection palette with the current color
            addColorToSelectionPalette(color);
            if (fireCallback && hasChanged) {
                callbacks.change(color);
            }
        }

        function reflow() {
            dragWidth = dragger.width();
            dragHeight = dragger.height();
            dragHelperHeight = dragHelper.height();
            slideWidth = slider.width();
            slideHeight = slider.height();
            slideHelperHeight = slideHelper.height();
            alphaWidth = alphaSlider.width();
            alphaSlideHelperWidth = alphaSlideHelper.width();

            if (!flat) {
                container.offset(getOffset(container, offsetElement));
            }

            updateHelperLocations();
        }

        function destroy() {
            boundElement.show();
            offsetElement.unbind("click.spectrum touchstart.spectrum");
            container.remove();
            replacer.remove();
            spectrums[spect.id] = null;
        }

        function option(optionName, optionValue) {
            if (optionName === undefined) {
                return $.extend({}, opts);
            }
            if (optionValue === undefined) {
                return opts[optionName];
            }

            opts[optionName] = optionValue;
            applyOptions();
        }

        function enable() {
            disabled = false;
            boundElement.attr("disabled", false);
            offsetElement.removeClass("sp-disabled");
        }

        function disable() {
            hide();
            disabled = true;
            boundElement.attr("disabled", true);
            offsetElement.addClass("sp-disabled");
        }

        initialize();

        var spect = {
            show: show,
            hide: hide,
            toggle: toggle,
            reflow: reflow,
            option: option,
            enable: enable,
            disable: disable,
            set: function (c) {
                set(c);
                updateOriginalInput();
            },
            get: get,
            destroy: destroy,
            container: container
        };

        spect.id = spectrums.push(spect) - 1;

        return spect;
    }

    /**
    * checkOffset - get the offset below/above and left/right element depending on screen position
    * Thanks https://github.com/jquery/jquery-ui/blob/master/ui/jquery.ui.datepicker.js
    */
    function getOffset(picker, input) {
        var extraY = 0;
        var dpWidth = picker.outerWidth();
        var dpHeight = picker.outerHeight();
        var inputHeight = input.outerHeight();
        var doc = picker[0].ownerDocument;
        var docElem = doc.documentElement;
        var viewWidth = docElem.clientWidth + $(doc).scrollLeft();
        var viewHeight = docElem.clientHeight + $(doc).scrollTop();
        var offset = input.offset();
        offset.top += inputHeight;

        offset.left -=
            Math.min(offset.left, (offset.left + dpWidth > viewWidth && viewWidth > dpWidth) ?
            Math.abs(offset.left + dpWidth - viewWidth) : 0);

        offset.top -=
            Math.min(offset.top, ((offset.top + dpHeight > viewHeight && viewHeight > dpHeight) ?
            Math.abs(dpHeight + inputHeight - extraY) : extraY));

        return offset;
    }

    /**
    * noop - do nothing
    */
    function noop() {

    }

    /**
    * stopPropagation - makes the code only doing this a little easier to read in line
    */
    function stopPropagation(e) {
        e.stopPropagation();
    }

    /**
    * Create a function bound to a given object
    * Thanks to underscore.js
    */
    function bind(func, obj) {
        var slice = Array.prototype.slice;
        var args = slice.call(arguments, 2);
        return function () {
            return func.apply(obj, args.concat(slice.call(arguments)));
        };
    }

    /**
    * Lightweight drag helper.  Handles containment within the element, so that
    * when dragging, the x is within [0,element.width] and y is within [0,element.height]
    */
    function draggable(element, onmove, onstart, onstop) {
        onmove = onmove || function () { };
        onstart = onstart || function () { };
        onstop = onstop || function () { };
        var doc = element.ownerDocument || document;
        var dragging = false;
        var offset = {};
        var maxHeight = 0;
        var maxWidth = 0;
        var hasTouch = ('ontouchstart' in window);

        var duringDragEvents = {};
        duringDragEvents["selectstart"] = prevent;
        duringDragEvents["dragstart"] = prevent;
        duringDragEvents[(hasTouch ? "touchmove" : "mousemove")] = move;
        duringDragEvents[(hasTouch ? "touchend" : "mouseup")] = stop;

        function prevent(e) {
            if (e.stopPropagation) {
                e.stopPropagation();
            }
            if (e.preventDefault) {
                e.preventDefault();
            }
            e.returnValue = false;
        }

        function move(e) {
            if (dragging) {
                // Mouseup happened outside of window
                if (IE && document.documentMode < 9 && !e.button) {
                    return stop();
                }

                var touches = e.originalEvent.touches;
                var pageX = touches ? touches[0].pageX : e.pageX;
                var pageY = touches ? touches[0].pageY : e.pageY;

                var dragX = Math.max(0, Math.min(pageX - offset.left, maxWidth));
                var dragY = Math.max(0, Math.min(pageY - offset.top, maxHeight));

                if (hasTouch) {
                    // Stop scrolling in iOS
                    prevent(e);
                }

                onmove.apply(element, [dragX, dragY, e]);
            }
        }
        function start(e) {
            var rightclick = (e.which) ? (e.which == 3) : (e.button == 2);
            var touches = e.originalEvent.touches;

            if (!rightclick && !dragging) {
                if (onstart.apply(element, arguments) !== false) {
                    dragging = true;
                    maxHeight = $(element).height();
                    maxWidth = $(element).width();
                    offset = $(element).offset();

                    $(doc).bind(duringDragEvents);
                    $(doc.body).addClass("sp-dragging");

                    if (!hasTouch) {
                        move(e);
                    }

                    prevent(e);
                }
            }
        }
        function stop() {
            if (dragging) {
                $(doc).unbind(duringDragEvents);
                $(doc.body).removeClass("sp-dragging");
                onstop.apply(element, arguments);
            }
            dragging = false;
        }

        $(element).bind(hasTouch ? "touchstart" : "mousedown", start);
    }

    function throttle(func, wait, debounce) {
        var timeout;
        return function () {
            var context = this, args = arguments;
            var throttler = function () {
                timeout = null;
                func.apply(context, args);
            };
            if (debounce) clearTimeout(timeout);
            if (debounce || !timeout) timeout = setTimeout(throttler, wait);
        };
    }


    /**
    * Define a jQuery plugin
    */
    var dataID = "spectrum.id";
    $.fn.spectrum = function (opts, extra) {

        if (typeof opts == "string") {

            var returnValue = this;
            var args = Array.prototype.slice.call( arguments, 1 );

            this.each(function () {
                var spect = spectrums[$(this).data(dataID)];
                if (spect) {

                    var method = spect[opts];
                    if (!method) {
                        throw new Error( "Spectrum: no such method: '" + opts + "'" );
                    }

                    if (opts == "get") {
                        returnValue = spect.get();
                    }
                    else if (opts == "container") {
                        returnValue = spect.container;
                    }
                    else if (opts == "option") {
                        returnValue = spect.option.apply(spect, args);
                    }
                    else if (opts == "destroy") {
                        spect.destroy();
                        $(this).removeData(dataID);
                    }
                    else {
                        method.apply(spect, args);
                    }
                }
            });

            return returnValue;
        }

        // Initializing a new instance of spectrum
        return this.spectrum("destroy").each(function () {
            var spect = spectrum(this, opts);
            $(this).data(dataID, spect.id);
        });
    };

    $.fn.spectrum.load = true;
    $.fn.spectrum.loadOpts = {};
    $.fn.spectrum.draggable = draggable;
    $.fn.spectrum.defaults = defaultOpts;

    $.spectrum = { };
    $.spectrum.localization = { };
    $.spectrum.palettes = { };

    $.fn.spectrum.processNativeColorInputs = function () {
        var colorInput = $("<input type='color' value='!' />")[0];
        var supportsColor = colorInput.type === "color" && colorInput.value != "!";

        if (!supportsColor) {
            $("input[type=color]").spectrum({
                preferredFormat: "hex6"
            });
        }
    };

    // TinyColor.js - <https://github.com/bgrins/TinyColor> - 2011 Brian Grinstead - v0.5

    (function (window) {

        var trimLeft = /^[\s,#]+/,
        trimRight = /\s+$/,
        tinyCounter = 0,
        math = Math,
        mathRound = math.round,
        mathMin = math.min,
        mathMax = math.max,
        mathRandom = math.random,
        parseFloat = window.parseFloat;

        function tinycolor(color, opts) {

            // If input is already a tinycolor, return itself
            if (typeof color == "object" && color.hasOwnProperty("_tc_id")) {
                return color;
            }

            var rgb = inputToRGB(color);
            var r = rgb.r, g = rgb.g, b = rgb.b, a = parseFloat(rgb.a), format = rgb.format;

            return {
                ok: rgb.ok,
                format: format,
                _tc_id: tinyCounter++,
                alpha: a,
                toHsv: function () {
                    var hsv = rgbToHsv(r, g, b);
                    return { h: hsv.h, s: hsv.s, v: hsv.v, a: a };
                },
                toHsvString: function () {
                    var hsv = rgbToHsv(r, g, b);
                    var h = mathRound(hsv.h * 360), s = mathRound(hsv.s * 100), v = mathRound(hsv.v * 100);
                    return (a == 1) ?
                  "hsv(" + h + ", " + s + "%, " + v + "%)" :
                  "hsva(" + h + ", " + s + "%, " + v + "%, " + a + ")";
                },
                toHsl: function () {
                    var hsl = rgbToHsl(r, g, b);
                    return { h: hsl.h, s: hsl.s, l: hsl.l, a: a };
                },
                toHslString: function () {
                    var hsl = rgbToHsl(r, g, b);
                    var h = mathRound(hsl.h * 360), s = mathRound(hsl.s * 100), l = mathRound(hsl.l * 100);
                    return (a == 1) ?
                  "hsl(" + h + ", " + s + "%, " + l + "%)" :
                  "hsla(" + h + ", " + s + "%, " + l + "%, " + a + ")";
                },
                toHex: function () {
                    return rgbToHex(r, g, b);
                },
                toHexString: function (force6Char) {
                    return '#' + rgbToHex(r, g, b, force6Char);
                },
                toRgb: function () {
                    return { r: mathRound(r), g: mathRound(g), b: mathRound(b), a: a };
                },
                toRgbString: function () {
                    return (a == 1) ?
                  "rgb(" + mathRound(r) + ", " + mathRound(g) + ", " + mathRound(b) + ")" :
                  "rgba(" + mathRound(r) + ", " + mathRound(g) + ", " + mathRound(b) + ", " + a + ")";
                },
                toName: function () {
                    return hexNames[rgbToHex(r, g, b)] || false;
                },
                toFilter: function (opts, secondColor) {

                    var hex = rgbToHex(r, g, b, true);
                    var secondHex = hex;
                    var alphaHex = Math.round(parseFloat(a) * 255).toString(16);
                    var secondAlphaHex = alphaHex;
                    var gradientType = opts && opts.gradientType ? "GradientType = 1, " : "";

                    if (secondColor) {
                        var s = tinycolor(secondColor);
                        secondHex = s.toHex();
                        secondAlphaHex = Math.round(parseFloat(s.alpha) * 255).toString(16);
                    }

                    return "progid:DXImageTransform.Microsoft.gradient("+gradientType+"startColorstr=#" + pad2(alphaHex) + hex + ",endColorstr=#" + pad2(secondAlphaHex) + secondHex + ")";
                },
                toString: function (format) {
                    format = format || this.format;
                    var formattedString = false;
                    if (format === "rgb") {
                        formattedString = this.toRgbString();
                    }
                    if (format === "hex") {
                        formattedString = this.toHexString();
                    }
                    if (format === "hex6") {
                        formattedString = this.toHexString(true);
                    }
                    if (format === "name") {
                        formattedString = this.toName();
                    }
                    if (format === "hsl") {
                        formattedString = this.toHslString();
                    }
                    if (format === "hsv") {
                        formattedString = this.toHsvString();
                    }

                    return formattedString || this.toHexString(true);
                }
            };
        }

        // If input is an object, force 1 into "1.0" to handle ratios properly
        // String input requires "1.0" as input, so 1 will be treated as 1
        tinycolor.fromRatio = function (color) {

            if (typeof color == "object") {
                for (var i in color) {
                    if (color[i] === 1) {
                        color[i] = "1.0";
                    }
                }
            }

            return tinycolor(color);

        };

        // Given a string or object, convert that input to RGB
        // Possible string inputs:
        //
        //     "red"
        //     "#f00" or "f00"
        //     "#ff0000" or "ff0000"
        //     "rgb 255 0 0" or "rgb (255, 0, 0)"
        //     "rgb 1.0 0 0" or "rgb (1, 0, 0)"
        //     "rgba (255, 0, 0, 1)" or "rgba 255, 0, 0, 1"
        //     "rgba (1.0, 0, 0, 1)" or "rgba 1.0, 0, 0, 1"
        //     "hsl(0, 100%, 50%)" or "hsl 0 100% 50%"
        //     "hsla(0, 100%, 50%, 1)" or "hsla 0 100% 50%, 1"
        //     "hsv(0, 100%, 100%)" or "hsv 0 100% 100%"
        //
        function inputToRGB(color) {

            var rgb = { r: 0, g: 0, b: 0 };
            var a = 1;
            var ok = false;
            var format = false;

            if (typeof color == "string") {
                color = stringInputToObject(color);
            }

            if (typeof color == "object") {
                if (color.hasOwnProperty("r") && color.hasOwnProperty("g") && color.hasOwnProperty("b")) {
                    rgb = rgbToRgb(color.r, color.g, color.b);
                    ok = true;
                    format = "rgb";
                }
                else if (color.hasOwnProperty("h") && color.hasOwnProperty("s") && color.hasOwnProperty("v")) {
                    rgb = hsvToRgb(color.h, color.s, color.v);
                    ok = true;
                    format = "hsv";
                }
                else if (color.hasOwnProperty("h") && color.hasOwnProperty("s") && color.hasOwnProperty("l")) {
                    rgb = hslToRgb(color.h, color.s, color.l);
                    ok = true;
                    format = "hsl";
                }

                if (color.hasOwnProperty("a")) {
                    a = color.a;
                }
            }

            rgb.r = mathMin(255, mathMax(rgb.r, 0));
            rgb.g = mathMin(255, mathMax(rgb.g, 0));
            rgb.b = mathMin(255, mathMax(rgb.b, 0));


            // Don't let the range of [0,255] come back in [0,1].
            // Potentially lose a little bit of precision here, but will fix issues where
            // .5 gets interpreted as half of the total, instead of half of 1.
            // If it was supposed to be 128, this was already taken care of in the conversion function
            if (rgb.r < 1) { rgb.r = mathRound(rgb.r); }
            if (rgb.g < 1) { rgb.g = mathRound(rgb.g); }
            if (rgb.b < 1) { rgb.b = mathRound(rgb.b); }

            return {
                ok: ok,
                format: (color && color.format) || format,
                r: rgb.r,
                g: rgb.g,
                b: rgb.b,
                a: a
            };
        }



        // Conversion Functions
        // --------------------

        // `rgbToHsl`, `rgbToHsv`, `hslToRgb`, `hsvToRgb` modified from:
        // <http://mjijackson.com/2008/02/rgb-to-hsl-and-rgb-to-hsv-color-model-conversion-algorithms-in-javascript>

        // `rgbToRgb`
        // Handle bounds / percentage checking to conform to CSS color spec
        // <http://www.w3.org/TR/css3-color/>
        // *Assumes:* r, g, b in [0, 255] or [0, 1]
        // *Returns:* { r, g, b } in [0, 255]
        function rgbToRgb(r, g, b) {
            return {
                r: bound01(r, 255) * 255,
                g: bound01(g, 255) * 255,
                b: bound01(b, 255) * 255
            };
        }

        // `rgbToHsl`
        // Converts an RGB color value to HSL.
        // *Assumes:* r, g, and b are contained in [0, 255] or [0, 1]
        // *Returns:* { h, s, l } in [0,1]
        function rgbToHsl(r, g, b) {

            r = bound01(r, 255);
            g = bound01(g, 255);
            b = bound01(b, 255);

            var max = mathMax(r, g, b), min = mathMin(r, g, b);
            var h, s, l = (max + min) / 2;

            if (max == min) {
                h = s = 0; // achromatic
            }
            else {
                var d = max - min;
                s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
                switch (max) {
                    case r: h = (g - b) / d + (g < b ? 6 : 0); break;
                    case g: h = (b - r) / d + 2; break;
                    case b: h = (r - g) / d + 4; break;
                }

                h /= 6;
            }

            return { h: h, s: s, l: l };
        }

        // `hslToRgb`
        // Converts an HSL color value to RGB.
        // *Assumes:* h is contained in [0, 1] or [0, 360] and s and l are contained [0, 1] or [0, 100]
        // *Returns:* { r, g, b } in the set [0, 255]
        function hslToRgb(h, s, l) {
            var r, g, b;

            h = bound01(h, 360);
            s = bound01(s, 100);
            l = bound01(l, 100);

            function hue2rgb(p, q, t) {
                if (t < 0) t += 1;
                if (t > 1) t -= 1;
                if (t < 1 / 6) return p + (q - p) * 6 * t;
                if (t < 1 / 2) return q;
                if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
                return p;
            }

            if (s === 0) {
                r = g = b = l; // achromatic
            }
            else {
                var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
                var p = 2 * l - q;
                r = hue2rgb(p, q, h + 1 / 3);
                g = hue2rgb(p, q, h);
                b = hue2rgb(p, q, h - 1 / 3);
            }

            return { r: r * 255, g: g * 255, b: b * 255 };
        }

        // `rgbToHsv`
        // Converts an RGB color value to HSV
        // *Assumes:* r, g, and b are contained in the set [0, 255] or [0, 1]
        // *Returns:* { h, s, v } in [0,1]
        function rgbToHsv(r, g, b) {

            r = bound01(r, 255);
            g = bound01(g, 255);
            b = bound01(b, 255);

            var max = mathMax(r, g, b), min = mathMin(r, g, b);
            var h, s, v = max;

            var d = max - min;
            s = max === 0 ? 0 : d / max;

            if (max == min) {
                h = 0; // achromatic
            }
            else {
                switch (max) {
                    case r: h = (g - b) / d + (g < b ? 6 : 0); break;
                    case g: h = (b - r) / d + 2; break;
                    case b: h = (r - g) / d + 4; break;
                }
                h /= 6;
            }
            return { h: h, s: s, v: v };
        }

        // `hsvToRgb`
        // Converts an HSV color value to RGB.
        // *Assumes:* h is contained in [0, 1] or [0, 360] and s and v are contained in [0, 1] or [0, 100]
        // *Returns:* { r, g, b } in the set [0, 255]
        function hsvToRgb(h, s, v) {
            h = bound01(h, 360) * 6;
            s = bound01(s, 100);
            v = bound01(v, 100);

            var i = math.floor(h),
                f = h - i,
                p = v * (1 - s),
                q = v * (1 - f * s),
                t = v * (1 - (1 - f) * s),
                mod = i % 6,
                r = [v, q, p, p, t, v][mod],
                g = [t, v, v, q, p, p][mod],
                b = [p, p, t, v, v, q][mod];

            return { r: r * 255, g: g * 255, b: b * 255 };
        }

        // `rgbToHex`
        // Converts an RGB color to hex
        // Assumes r, g, and b are contained in the set [0, 255]
        // Returns a 3 or 6 character hex
        function rgbToHex(r, g, b, force6Char) {

            var hex = [
                pad2(mathRound(r).toString(16)),
                pad2(mathRound(g).toString(16)),
                pad2(mathRound(b).toString(16))
            ];

            // Return a 3 character hex if possible
            if (!force6Char && hex[0].charAt(0) == hex[0].charAt(1) && hex[1].charAt(0) == hex[1].charAt(1) && hex[2].charAt(0) == hex[2].charAt(1)) {
                return hex[0].charAt(0) + hex[1].charAt(0) + hex[2].charAt(0);
            }

            return hex.join("");
        }

        // `equals`
        // Can be called with any tinycolor input
        tinycolor.equals = function (color1, color2) {
            if (!color1 || !color2) { return false; }
            return tinycolor(color1).toRgbString() == tinycolor(color2).toRgbString();
        };
        tinycolor.random = function () {
            return tinycolor.fromRatio({
                r: mathRandom(),
                g: mathRandom(),
                b: mathRandom()
            });
        };


        // Modification Functions
        // ----------------------
        // Thanks to less.js for some of the basics here
        // <https://github.com/cloudhead/less.js/blob/master/lib/less/functions.js>


        tinycolor.desaturate = function (color, amount) {
            var hsl = tinycolor(color).toHsl();
            hsl.s -= ((amount || 10) / 100);
            hsl.s = clamp01(hsl.s);
            return tinycolor(hsl);
        };
        tinycolor.saturate = function (color, amount) {
            var hsl = tinycolor(color).toHsl();
            hsl.s += ((amount || 10) / 100);
            hsl.s = clamp01(hsl.s);
            return tinycolor(hsl);
        };
        tinycolor.greyscale = function (color) {
            return tinycolor.desaturate(color, 100);
        };
        tinycolor.lighten = function (color, amount) {
            var hsl = tinycolor(color).toHsl();
            hsl.l += ((amount || 10) / 100);
            hsl.l = clamp01(hsl.l);
            return tinycolor(hsl);
        };
        tinycolor.darken = function (color, amount) {
            var hsl = tinycolor(color).toHsl();
            hsl.l -= ((amount || 10) / 100);
            hsl.l = clamp01(hsl.l);
            return tinycolor(hsl);
        };
        tinycolor.complement = function (color) {
            var hsl = tinycolor(color).toHsl();
            hsl.h = (hsl.h + 0.5) % 1;
            return tinycolor(hsl);
        };


        // Combination Functions
        // ---------------------
        // Thanks to jQuery xColor for some of the ideas behind these
        // <https://github.com/infusion/jQuery-xcolor/blob/master/jquery.xcolor.js>

        tinycolor.triad = function (color) {
            var hsl = tinycolor(color).toHsl();
            var h = hsl.h * 360;
            return [
            tinycolor(color),
            tinycolor({ h: (h + 120) % 360, s: hsl.s, l: hsl.l }),
            tinycolor({ h: (h + 240) % 360, s: hsl.s, l: hsl.l })
        ];
        };
        tinycolor.tetrad = function (color) {
            var hsl = tinycolor(color).toHsl();
            var h = hsl.h * 360;
            return [
            tinycolor(color),
            tinycolor({ h: (h + 90) % 360, s: hsl.s, l: hsl.l }),
            tinycolor({ h: (h + 180) % 360, s: hsl.s, l: hsl.l }),
            tinycolor({ h: (h + 270) % 360, s: hsl.s, l: hsl.l })
        ];
        };
        tinycolor.splitcomplement = function (color) {
            var hsl = tinycolor(color).toHsl();
            var h = hsl.h * 360;
            return [
            tinycolor(color),
            tinycolor({ h: (h + 72) % 360, s: hsl.s, l: hsl.l }),
            tinycolor({ h: (h + 216) % 360, s: hsl.s, l: hsl.l })
        ];
        };
        tinycolor.analogous = function (color, results, slices) {
            results = results || 6;
            slices = slices || 30;

            var hsl = tinycolor(color).toHsl();
            var part = 360 / slices;
            var ret = [tinycolor(color)];

            hsl.h *= 360;

            for (hsl.h = ((hsl.h - (part * results >> 1)) + 720) % 360; --results; ) {
                hsl.h = (hsl.h + part) % 360;
                ret.push(tinycolor(hsl));
            }
            return ret;
        };
        tinycolor.monochromatic = function (color, results) {
            results = results || 6;
            var hsv = tinycolor(color).toHsv();
            var h = hsv.h, s = hsv.s, v = hsv.v;
            var ret = [];
            var modification = 1 / results;

            while (results--) {
                ret.push(tinycolor({ h: h, s: s, v: v }));
                v = (v + modification) % 1;
            }

            return ret;
        };
        tinycolor.readable = function (color1, color2) {
            var a = tinycolor(color1).toRgb(), b = tinycolor(color2).toRgb();
            return (
            (b.r - a.r) * (b.r - a.r) +
            (b.g - a.g) * (b.g - a.g) +
            (b.b - a.b) * (b.b - a.b)
        ) > 0x28A4;
        };

        // Big List of Colors
        // ---------
        // <http://www.w3.org/TR/css3-color/#svg-color>
        var names = tinycolor.names = {
            aliceblue: "f0f8ff",
            antiquewhite: "faebd7",
            aqua: "0ff",
            aquamarine: "7fffd4",
            azure: "f0ffff",
            beige: "f5f5dc",
            bisque: "ffe4c4",
            black: "000",
            blanchedalmond: "ffebcd",
            blue: "00f",
            blueviolet: "8a2be2",
            brown: "a52a2a",
            burlywood: "deb887",
            burntsienna: "ea7e5d",
            cadetblue: "5f9ea0",
            chartreuse: "7fff00",
            chocolate: "d2691e",
            coral: "ff7f50",
            cornflowerblue: "6495ed",
            cornsilk: "fff8dc",
            crimson: "dc143c",
            cyan: "0ff",
            darkblue: "00008b",
            darkcyan: "008b8b",
            darkgoldenrod: "b8860b",
            darkgray: "a9a9a9",
            darkgreen: "006400",
            darkgrey: "a9a9a9",
            darkkhaki: "bdb76b",
            darkmagenta: "8b008b",
            darkolivegreen: "556b2f",
            darkorange: "ff8c00",
            darkorchid: "9932cc",
            darkred: "8b0000",
            darksalmon: "e9967a",
            darkseagreen: "8fbc8f",
            darkslateblue: "483d8b",
            darkslategray: "2f4f4f",
            darkslategrey: "2f4f4f",
            darkturquoise: "00ced1",
            darkviolet: "9400d3",
            deeppink: "ff1493",
            deepskyblue: "00bfff",
            dimgray: "696969",
            dimgrey: "696969",
            dodgerblue: "1e90ff",
            firebrick: "b22222",
            floralwhite: "fffaf0",
            forestgreen: "228b22",
            fuchsia: "f0f",
            gainsboro: "dcdcdc",
            ghostwhite: "f8f8ff",
            gold: "ffd700",
            goldenrod: "daa520",
            gray: "808080",
            green: "008000",
            greenyellow: "adff2f",
            grey: "808080",
            honeydew: "f0fff0",
            hotpink: "ff69b4",
            indianred: "cd5c5c",
            indigo: "4b0082",
            ivory: "fffff0",
            khaki: "f0e68c",
            lavender: "e6e6fa",
            lavenderblush: "fff0f5",
            lawngreen: "7cfc00",
            lemonchiffon: "fffacd",
            lightblue: "add8e6",
            lightcoral: "f08080",
            lightcyan: "e0ffff",
            lightgoldenrodyellow: "fafad2",
            lightgray: "d3d3d3",
            lightgreen: "90ee90",
            lightgrey: "d3d3d3",
            lightpink: "ffb6c1",
            lightsalmon: "ffa07a",
            lightseagreen: "20b2aa",
            lightskyblue: "87cefa",
            lightslategray: "789",
            lightslategrey: "789",
            lightsteelblue: "b0c4de",
            lightyellow: "ffffe0",
            lime: "0f0",
            limegreen: "32cd32",
            linen: "faf0e6",
            magenta: "f0f",
            maroon: "800000",
            mediumaquamarine: "66cdaa",
            mediumblue: "0000cd",
            mediumorchid: "ba55d3",
            mediumpurple: "9370db",
            mediumseagreen: "3cb371",
            mediumslateblue: "7b68ee",
            mediumspringgreen: "00fa9a",
            mediumturquoise: "48d1cc",
            mediumvioletred: "c71585",
            midnightblue: "191970",
            mintcream: "f5fffa",
            mistyrose: "ffe4e1",
            moccasin: "ffe4b5",
            navajowhite: "ffdead",
            navy: "000080",
            oldlace: "fdf5e6",
            olive: "808000",
            olivedrab: "6b8e23",
            orange: "ffa500",
            orangered: "ff4500",
            orchid: "da70d6",
            palegoldenrod: "eee8aa",
            palegreen: "98fb98",
            paleturquoise: "afeeee",
            palevioletred: "db7093",
            papayawhip: "ffefd5",
            peachpuff: "ffdab9",
            peru: "cd853f",
            pink: "ffc0cb",
            plum: "dda0dd",
            powderblue: "b0e0e6",
            purple: "800080",
            red: "f00",
            rosybrown: "bc8f8f",
            royalblue: "4169e1",
            saddlebrown: "8b4513",
            salmon: "fa8072",
            sandybrown: "f4a460",
            seagreen: "2e8b57",
            seashell: "fff5ee",
            sienna: "a0522d",
            silver: "c0c0c0",
            skyblue: "87ceeb",
            slateblue: "6a5acd",
            slategray: "708090",
            slategrey: "708090",
            snow: "fffafa",
            springgreen: "00ff7f",
            steelblue: "4682b4",
            tan: "d2b48c",
            teal: "008080",
            thistle: "d8bfd8",
            tomato: "ff6347",
            turquoise: "40e0d0",
            violet: "ee82ee",
            wheat: "f5deb3",
            white: "fff",
            whitesmoke: "f5f5f5",
            yellow: "ff0",
            yellowgreen: "9acd32"
        };

        // Make it easy to access colors via `hexNames[hex]`
        var hexNames = tinycolor.hexNames = flip(names);


        // Utilities
        // ---------

        // `{ 'name1': 'val1' }` becomes `{ 'val1': 'name1' }`
        function flip(o) {
            var flipped = {};
            for (var i in o) {
                if (o.hasOwnProperty(i)) {
                    flipped[o[i]] = i;
                }
            }
            return flipped;
        }

        // Take input from [0, n] and return it as [0, 1]
        function bound01(n, max) {
            if (isOnePointZero(n)) { n = "100%"; }

            var processPercent = isPercentage(n);
            n = mathMin(max, mathMax(0, parseFloat(n)));

            // Automatically convert percentage into number
            if (processPercent) {
                n = n * (max / 100);
            }

            // Handle floating point rounding errors
            if (math.abs(n - max) < 0.000001) {
                return 1;
            }
            else if (n >= 1) {
                return (n % max) / parseFloat(max);
            }
            return n;
        }

        // Force a number between 0 and 1
        function clamp01(val) {
            return mathMin(1, mathMax(0, val));
        }

        // Parse an integer into hex
        function parseHex(val) {
            return parseInt(val, 16);
        }

        // Need to handle 1.0 as 100%, since once it is a number, there is no difference between it and 1
        // <http://stackoverflow.com/questions/7422072/javascript-how-to-detect-number-as-a-decimal-including-1-0>
        function isOnePointZero(n) {
            return typeof n == "string" && n.indexOf('.') != -1 && parseFloat(n) === 1;
        }

        // Check to see if string passed in is a percentage
        function isPercentage(n) {
            return typeof n === "string" && n.indexOf('%') != -1;
        }

        // Force a hex value to have 2 characters
        function pad2(c) {
            return c.length == 1 ? '0' + c : '' + c;
        }

        var matchers = (function () {

            // <http://www.w3.org/TR/css3-values/#integers>
            var CSS_INTEGER = "[-\\+]?\\d+%?";

            // <http://www.w3.org/TR/css3-values/#number-value>
            var CSS_NUMBER = "[-\\+]?\\d*\\.\\d+%?";

            // Allow positive/negative integer/number.  Don't capture the either/or, just the entire outcome.
            var CSS_UNIT = "(?:" + CSS_NUMBER + ")|(?:" + CSS_INTEGER + ")";

            // Actual matching.
            // Parentheses and commas are optional, but not required.
            // Whitespace can take the place of commas or opening paren
            var PERMISSIVE_MATCH3 = "[\\s|\\(]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")\\s*\\)?";
            var PERMISSIVE_MATCH4 = "[\\s|\\(]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")\\s*\\)?";

            return {
                rgb: new RegExp("rgb" + PERMISSIVE_MATCH3),
                rgba: new RegExp("rgba" + PERMISSIVE_MATCH4),
                hsl: new RegExp("hsl" + PERMISSIVE_MATCH3),
                hsla: new RegExp("hsla" + PERMISSIVE_MATCH4),
                hsv: new RegExp("hsv" + PERMISSIVE_MATCH3),
                hex3: /^([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
                hex6: /^([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
            };
        })();

        // `stringInputToObject`
        // Permissive string parsing.  Take in a number of formats, and output an object
        // based on detected format.  Returns `{ r, g, b }` or `{ h, s, l }` or `{ h, s, v}`
        function stringInputToObject(color) {

            color = color.replace(trimLeft, '').replace(trimRight, '').toLowerCase();
            var named = false;
            if (names[color]) {
                color = names[color];
                named = true;
            }
            else if (color == 'transparent') {
                return { r: 0, g: 0, b: 0, a: 0 };
            }

            // Try to match string input using regular expressions.
            // Keep most of the number bounding out of this function - don't worry about [0,1] or [0,100] or [0,360]
            // Just return an object and let the conversion functions handle that.
            // This way the result will be the same whether the tinycolor is initialized with string or object.
            var match;
            if ((match = matchers.rgb.exec(color))) {
                return { r: match[1], g: match[2], b: match[3] };
            }
            if ((match = matchers.rgba.exec(color))) {
                return { r: match[1], g: match[2], b: match[3], a: match[4] };
            }
            if ((match = matchers.hsl.exec(color))) {
                return { h: match[1], s: match[2], l: match[3] };
            }
            if ((match = matchers.hsla.exec(color))) {
                return { h: match[1], s: match[2], l: match[3], a: match[4] };
            }
            if ((match = matchers.hsv.exec(color))) {
                return { h: match[1], s: match[2], v: match[3] };
            }
            if ((match = matchers.hex6.exec(color))) {
                return {
                    r: parseHex(match[1]),
                    g: parseHex(match[2]),
                    b: parseHex(match[3]),
                    format: named ? "name" : "hex"
                };
            }
            if ((match = matchers.hex3.exec(color))) {
                return {
                    r: parseHex(match[1] + '' + match[1]),
                    g: parseHex(match[2] + '' + match[2]),
                    b: parseHex(match[3] + '' + match[3]),
                    format: named ? "name" : "hex"
                };
            }

            return false;
        }

        // Everything is ready, expose to window
        window.tinycolor = tinycolor;

    })(this);

    $(function () {
        if ($.fn.spectrum.load) {
            $.fn.spectrum.processNativeColorInputs();
        }
    });

})(window, jQuery);
;// Underscore.js 1.3.3
// (c) 2009-2012 Jeremy Ashkenas, DocumentCloud Inc.
// Underscore is freely distributable under the MIT license.
// Portions of Underscore are inspired or borrowed from Prototype,
// Oliver Steele's Functional, and John Resig's Micro-Templating.
// For all details and documentation:
// http://documentcloud.github.com/underscore
(function(){function r(a,c,d){if(a===c)return 0!==a||1/a==1/c;if(null==a||null==c)return a===c;a._chain&&(a=a._wrapped);c._chain&&(c=c._wrapped);if(a.isEqual&&b.isFunction(a.isEqual))return a.isEqual(c);if(c.isEqual&&b.isFunction(c.isEqual))return c.isEqual(a);var e=l.call(a);if(e!=l.call(c))return!1;switch(e){case "[object String]":return a==""+c;case "[object Number]":return a!=+a?c!=+c:0==a?1/a==1/c:a==+c;case "[object Date]":case "[object Boolean]":return+a==+c;case "[object RegExp]":return a.source==
c.source&&a.global==c.global&&a.multiline==c.multiline&&a.ignoreCase==c.ignoreCase}if("object"!=typeof a||"object"!=typeof c)return!1;for(var f=d.length;f--;)if(d[f]==a)return!0;d.push(a);var f=0,g=!0;if("[object Array]"==e){if(f=a.length,g=f==c.length)for(;f--&&(g=f in a==f in c&&r(a[f],c[f],d)););}else{if("constructor"in a!="constructor"in c||a.constructor!=c.constructor)return!1;for(var h in a)if(b.has(a,h)&&(f++,!(g=b.has(c,h)&&r(a[h],c[h],d))))break;if(g){for(h in c)if(b.has(c,h)&&!f--)break;
g=!f}}d.pop();return g}var s=this,I=s._,o={},k=Array.prototype,p=Object.prototype,i=k.slice,J=k.unshift,l=p.toString,K=p.hasOwnProperty,y=k.forEach,z=k.map,A=k.reduce,B=k.reduceRight,C=k.filter,D=k.every,E=k.some,q=k.indexOf,F=k.lastIndexOf,p=Array.isArray,L=Object.keys,t=Function.prototype.bind,b=function(a){return new m(a)};"undefined"!==typeof exports?("undefined"!==typeof module&&module.exports&&(exports=module.exports=b),exports._=b):s._=b;b.VERSION="1.3.3";var j=b.each=b.forEach=function(a,
c,d){if(a!=null)if(y&&a.forEach===y)a.forEach(c,d);else if(a.length===+a.length)for(var e=0,f=a.length;e<f;e++){if(e in a&&c.call(d,a[e],e,a)===o)break}else for(e in a)if(b.has(a,e)&&c.call(d,a[e],e,a)===o)break};b.map=b.collect=function(a,c,b){var e=[];if(a==null)return e;if(z&&a.map===z)return a.map(c,b);j(a,function(a,g,h){e[e.length]=c.call(b,a,g,h)});if(a.length===+a.length)e.length=a.length;return e};b.reduce=b.foldl=b.inject=function(a,c,d,e){var f=arguments.length>2;a==null&&(a=[]);if(A&&
a.reduce===A){e&&(c=b.bind(c,e));return f?a.reduce(c,d):a.reduce(c)}j(a,function(a,b,i){if(f)d=c.call(e,d,a,b,i);else{d=a;f=true}});if(!f)throw new TypeError("Reduce of empty array with no initial value");return d};b.reduceRight=b.foldr=function(a,c,d,e){var f=arguments.length>2;a==null&&(a=[]);if(B&&a.reduceRight===B){e&&(c=b.bind(c,e));return f?a.reduceRight(c,d):a.reduceRight(c)}var g=b.toArray(a).reverse();e&&!f&&(c=b.bind(c,e));return f?b.reduce(g,c,d,e):b.reduce(g,c)};b.find=b.detect=function(a,
c,b){var e;G(a,function(a,g,h){if(c.call(b,a,g,h)){e=a;return true}});return e};b.filter=b.select=function(a,c,b){var e=[];if(a==null)return e;if(C&&a.filter===C)return a.filter(c,b);j(a,function(a,g,h){c.call(b,a,g,h)&&(e[e.length]=a)});return e};b.reject=function(a,c,b){var e=[];if(a==null)return e;j(a,function(a,g,h){c.call(b,a,g,h)||(e[e.length]=a)});return e};b.every=b.all=function(a,c,b){var e=true;if(a==null)return e;if(D&&a.every===D)return a.every(c,b);j(a,function(a,g,h){if(!(e=e&&c.call(b,
a,g,h)))return o});return!!e};var G=b.some=b.any=function(a,c,d){c||(c=b.identity);var e=false;if(a==null)return e;if(E&&a.some===E)return a.some(c,d);j(a,function(a,b,h){if(e||(e=c.call(d,a,b,h)))return o});return!!e};b.include=b.contains=function(a,c){var b=false;if(a==null)return b;if(q&&a.indexOf===q)return a.indexOf(c)!=-1;return b=G(a,function(a){return a===c})};b.invoke=function(a,c){var d=i.call(arguments,2);return b.map(a,function(a){return(b.isFunction(c)?c||a:a[c]).apply(a,d)})};b.pluck=
function(a,c){return b.map(a,function(a){return a[c]})};b.max=function(a,c,d){if(!c&&b.isArray(a)&&a[0]===+a[0])return Math.max.apply(Math,a);if(!c&&b.isEmpty(a))return-Infinity;var e={computed:-Infinity};j(a,function(a,b,h){b=c?c.call(d,a,b,h):a;b>=e.computed&&(e={value:a,computed:b})});return e.value};b.min=function(a,c,d){if(!c&&b.isArray(a)&&a[0]===+a[0])return Math.min.apply(Math,a);if(!c&&b.isEmpty(a))return Infinity;var e={computed:Infinity};j(a,function(a,b,h){b=c?c.call(d,a,b,h):a;b<e.computed&&
(e={value:a,computed:b})});return e.value};b.shuffle=function(a){var b=[],d;j(a,function(a,f){d=Math.floor(Math.random()*(f+1));b[f]=b[d];b[d]=a});return b};b.sortBy=function(a,c,d){var e=b.isFunction(c)?c:function(a){return a[c]};return b.pluck(b.map(a,function(a,b,c){return{value:a,criteria:e.call(d,a,b,c)}}).sort(function(a,b){var c=a.criteria,d=b.criteria;return c===void 0?1:d===void 0?-1:c<d?-1:c>d?1:0}),"value")};b.groupBy=function(a,c){var d={},e=b.isFunction(c)?c:function(a){return a[c]};
j(a,function(a,b){var c=e(a,b);(d[c]||(d[c]=[])).push(a)});return d};b.sortedIndex=function(a,c,d){d||(d=b.identity);for(var e=0,f=a.length;e<f;){var g=e+f>>1;d(a[g])<d(c)?e=g+1:f=g}return e};b.toArray=function(a){return!a?[]:b.isArray(a)||b.isArguments(a)?i.call(a):a.toArray&&b.isFunction(a.toArray)?a.toArray():b.values(a)};b.size=function(a){return b.isArray(a)?a.length:b.keys(a).length};b.first=b.head=b.take=function(a,b,d){return b!=null&&!d?i.call(a,0,b):a[0]};b.initial=function(a,b,d){return i.call(a,
0,a.length-(b==null||d?1:b))};b.last=function(a,b,d){return b!=null&&!d?i.call(a,Math.max(a.length-b,0)):a[a.length-1]};b.rest=b.tail=function(a,b,d){return i.call(a,b==null||d?1:b)};b.compact=function(a){return b.filter(a,function(a){return!!a})};b.flatten=function(a,c){return b.reduce(a,function(a,e){if(b.isArray(e))return a.concat(c?e:b.flatten(e));a[a.length]=e;return a},[])};b.without=function(a){return b.difference(a,i.call(arguments,1))};b.uniq=b.unique=function(a,c,d){var d=d?b.map(a,d):a,
e=[];a.length<3&&(c=true);b.reduce(d,function(d,g,h){if(c?b.last(d)!==g||!d.length:!b.include(d,g)){d.push(g);e.push(a[h])}return d},[]);return e};b.union=function(){return b.uniq(b.flatten(arguments,true))};b.intersection=b.intersect=function(a){var c=i.call(arguments,1);return b.filter(b.uniq(a),function(a){return b.every(c,function(c){return b.indexOf(c,a)>=0})})};b.difference=function(a){var c=b.flatten(i.call(arguments,1),true);return b.filter(a,function(a){return!b.include(c,a)})};b.zip=function(){for(var a=
i.call(arguments),c=b.max(b.pluck(a,"length")),d=Array(c),e=0;e<c;e++)d[e]=b.pluck(a,""+e);return d};b.indexOf=function(a,c,d){if(a==null)return-1;var e;if(d){d=b.sortedIndex(a,c);return a[d]===c?d:-1}if(q&&a.indexOf===q)return a.indexOf(c);d=0;for(e=a.length;d<e;d++)if(d in a&&a[d]===c)return d;return-1};b.lastIndexOf=function(a,b){if(a==null)return-1;if(F&&a.lastIndexOf===F)return a.lastIndexOf(b);for(var d=a.length;d--;)if(d in a&&a[d]===b)return d;return-1};b.range=function(a,b,d){if(arguments.length<=
1){b=a||0;a=0}for(var d=arguments[2]||1,e=Math.max(Math.ceil((b-a)/d),0),f=0,g=Array(e);f<e;){g[f++]=a;a=a+d}return g};var H=function(){};b.bind=function(a,c){var d,e;if(a.bind===t&&t)return t.apply(a,i.call(arguments,1));if(!b.isFunction(a))throw new TypeError;e=i.call(arguments,2);return d=function(){if(!(this instanceof d))return a.apply(c,e.concat(i.call(arguments)));H.prototype=a.prototype;var b=new H,g=a.apply(b,e.concat(i.call(arguments)));return Object(g)===g?g:b}};b.bindAll=function(a){var c=
i.call(arguments,1);c.length==0&&(c=b.functions(a));j(c,function(c){a[c]=b.bind(a[c],a)});return a};b.memoize=function(a,c){var d={};c||(c=b.identity);return function(){var e=c.apply(this,arguments);return b.has(d,e)?d[e]:d[e]=a.apply(this,arguments)}};b.delay=function(a,b){var d=i.call(arguments,2);return setTimeout(function(){return a.apply(null,d)},b)};b.defer=function(a){return b.delay.apply(b,[a,1].concat(i.call(arguments,1)))};b.throttle=function(a,c){var d,e,f,g,h,i,j=b.debounce(function(){h=
g=false},c);return function(){d=this;e=arguments;f||(f=setTimeout(function(){f=null;h&&a.apply(d,e);j()},c));g?h=true:i=a.apply(d,e);j();g=true;return i}};b.debounce=function(a,b,d){var e;return function(){var f=this,g=arguments;d&&!e&&a.apply(f,g);clearTimeout(e);e=setTimeout(function(){e=null;d||a.apply(f,g)},b)}};b.once=function(a){var b=false,d;return function(){if(b)return d;b=true;return d=a.apply(this,arguments)}};b.wrap=function(a,b){return function(){var d=[a].concat(i.call(arguments,0));
return b.apply(this,d)}};b.compose=function(){var a=arguments;return function(){for(var b=arguments,d=a.length-1;d>=0;d--)b=[a[d].apply(this,b)];return b[0]}};b.after=function(a,b){return a<=0?b():function(){if(--a<1)return b.apply(this,arguments)}};b.keys=L||function(a){if(a!==Object(a))throw new TypeError("Invalid object");var c=[],d;for(d in a)b.has(a,d)&&(c[c.length]=d);return c};b.values=function(a){return b.map(a,b.identity)};b.functions=b.methods=function(a){var c=[],d;for(d in a)b.isFunction(a[d])&&
c.push(d);return c.sort()};b.extend=function(a){j(i.call(arguments,1),function(b){for(var d in b)a[d]=b[d]});return a};b.pick=function(a){var c={};j(b.flatten(i.call(arguments,1)),function(b){b in a&&(c[b]=a[b])});return c};b.defaults=function(a){j(i.call(arguments,1),function(b){for(var d in b)a[d]==null&&(a[d]=b[d])});return a};b.clone=function(a){return!b.isObject(a)?a:b.isArray(a)?a.slice():b.extend({},a)};b.tap=function(a,b){b(a);return a};b.isEqual=function(a,b){return r(a,b,[])};b.isEmpty=
function(a){if(a==null)return true;if(b.isArray(a)||b.isString(a))return a.length===0;for(var c in a)if(b.has(a,c))return false;return true};b.isElement=function(a){return!!(a&&a.nodeType==1)};b.isArray=p||function(a){return l.call(a)=="[object Array]"};b.isObject=function(a){return a===Object(a)};b.isArguments=function(a){return l.call(a)=="[object Arguments]"};b.isArguments(arguments)||(b.isArguments=function(a){return!(!a||!b.has(a,"callee"))});b.isFunction=function(a){return l.call(a)=="[object Function]"};
b.isString=function(a){return l.call(a)=="[object String]"};b.isNumber=function(a){return l.call(a)=="[object Number]"};b.isFinite=function(a){return b.isNumber(a)&&isFinite(a)};b.isNaN=function(a){return a!==a};b.isBoolean=function(a){return a===true||a===false||l.call(a)=="[object Boolean]"};b.isDate=function(a){return l.call(a)=="[object Date]"};b.isRegExp=function(a){return l.call(a)=="[object RegExp]"};b.isNull=function(a){return a===null};b.isUndefined=function(a){return a===void 0};b.has=function(a,
b){return K.call(a,b)};b.noConflict=function(){s._=I;return this};b.identity=function(a){return a};b.times=function(a,b,d){for(var e=0;e<a;e++)b.call(d,e)};b.escape=function(a){return(""+a).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;").replace(/\//g,"&#x2F;")};b.result=function(a,c){if(a==null)return null;var d=a[c];return b.isFunction(d)?d.call(a):d};b.mixin=function(a){j(b.functions(a),function(c){M(c,b[c]=a[c])})};var N=0;b.uniqueId=
function(a){var b=N++;return a?a+b:b};b.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};var u=/.^/,n={"\\":"\\","'":"'",r:"\r",n:"\n",t:"\t",u2028:"\u2028",u2029:"\u2029"},v;for(v in n)n[n[v]]=v;var O=/\\|'|\r|\n|\t|\u2028|\u2029/g,P=/\\(\\|'|r|n|t|u2028|u2029)/g,w=function(a){return a.replace(P,function(a,b){return n[b]})};b.template=function(a,c,d){d=b.defaults(d||{},b.templateSettings);a="__p+='"+a.replace(O,function(a){return"\\"+n[a]}).replace(d.escape||
u,function(a,b){return"'+\n_.escape("+w(b)+")+\n'"}).replace(d.interpolate||u,function(a,b){return"'+\n("+w(b)+")+\n'"}).replace(d.evaluate||u,function(a,b){return"';\n"+w(b)+"\n;__p+='"})+"';\n";d.variable||(a="with(obj||{}){\n"+a+"}\n");var a="var __p='';var print=function(){__p+=Array.prototype.join.call(arguments, '')};\n"+a+"return __p;\n",e=new Function(d.variable||"obj","_",a);if(c)return e(c,b);c=function(a){return e.call(this,a,b)};c.source="function("+(d.variable||"obj")+"){\n"+a+"}";return c};
b.chain=function(a){return b(a).chain()};var m=function(a){this._wrapped=a};b.prototype=m.prototype;var x=function(a,c){return c?b(a).chain():a},M=function(a,c){m.prototype[a]=function(){var a=i.call(arguments);J.call(a,this._wrapped);return x(c.apply(b,a),this._chain)}};b.mixin(b);j("pop,push,reverse,shift,sort,splice,unshift".split(","),function(a){var b=k[a];m.prototype[a]=function(){var d=this._wrapped;b.apply(d,arguments);var e=d.length;(a=="shift"||a=="splice")&&e===0&&delete d[0];return x(d,
this._chain)}});j(["concat","join","slice"],function(a){var b=k[a];m.prototype[a]=function(){return x(b.apply(this._wrapped,arguments),this._chain)}});m.prototype.chain=function(){this._chain=true;return this};m.prototype.value=function(){return this._wrapped}}).call(this);
;/**
 * marked - A markdown parser (https://github.com/chjj/marked)
 * Copyright (c) 2011-2012, Christopher Jeffrey. (MIT Licensed)
 */

;(function() {

/**
 * Block-Level Grammar
 */

var block = {
  newline: /^\n+/,
  code: /^( {4}[^\n]+\n*)+/,
  fences: noop,
  hr: /^( *[-*_]){3,} *(?:\n+|$)/,
  heading: /^ *(#{1,6}) *([^\n]+?) *#* *(?:\n+|$)/,
  lheading: /^([^\n]+)\n *(=|-){3,} *\n*/,
  blockquote: /^( *>[^\n]+(\n[^\n]+)*\n*)+/,
  list: /^( *)(bull) [^\0]+?(?:hr|\n{2,}(?! )(?!\1bull )\n*|\s*$)/,
  html: /^ *(?:comment|closed|closing) *(?:\n{2,}|\s*$)/,
  def: /^ *\[([^\]]+)\]: *([^\s]+)(?: +["(]([^\n]+)[")])? *(?:\n+|$)/,
  paragraph: /^([^\n]+\n?(?!body))+\n*/,
  text: /^[^\n]+/
};

block.bullet = /(?:[*+-]|\d+\.)/;
block.item = /^( *)(bull) [^\n]*(?:\n(?!\1bull )[^\n]*)*/;
block.item = replace(block.item, 'gm')
  (/bull/g, block.bullet)
  ();

block.list = replace(block.list)
  (/bull/g, block.bullet)
  ('hr', /\n+(?=(?: *[-*_]){3,} *(?:\n+|$))/)
  ();

block.html = replace(block.html)
  ('comment', /<!--[^\0]*?-->/)
  ('closed', /<(tag)[^\0]+?<\/\1>/)
  ('closing', /<tag(?:"[^"]*"|'[^']*'|[^'">])*?>/)
  (/tag/g, tag())
  ();

block.paragraph = (function() {
  var paragraph = block.paragraph.source
    , body = [];

  (function push(rule) {
    rule = block[rule] ? block[rule].source : rule;
    body.push(rule.replace(/(^|[^\[])\^/g, '$1'));
    return push;
  })
  ('hr')
  ('heading')
  ('lheading')
  ('blockquote')
  ('<' + tag())
  ('def');

  return new
    RegExp(paragraph.replace('body', body.join('|')));
})();

block.normal = {
  fences: block.fences,
  paragraph: block.paragraph
};

block.gfm = {
  fences: /^ *(```|~~~) *(\w+)? *\n([^\0]+?)\s*\1 *(?:\n+|$)/,
  paragraph: /^/
};

block.gfm.paragraph = replace(block.paragraph)
  ('(?!', '(?!' + block.gfm.fences.source.replace(/(^|[^\[])\^/g, '$2') + '|')
  ();

/**
 * Block Lexer
 */

block.lexer = function(src) {
  var tokens = [];

  tokens.links = {};

  src = src
    .replace(/\r\n|\r/g, '\n')
    .replace(/\t/g, '    ');

  return block.token(src, tokens, true);
};

block.token = function(src, tokens, top) {
  var src = src.replace(/^ +$/gm, '')
    , next
    , loose
    , cap
    , item
    , space
    , i
    , l;

  while (src) {
    // newline
    if (cap = block.newline.exec(src)) {
      src = src.substring(cap[0].length);
      if (cap[0].length > 1) {
        tokens.push({
          type: 'space'
        });
      }
    }

    // code
    if (cap = block.code.exec(src)) {
      src = src.substring(cap[0].length);
      cap = cap[0].replace(/^ {4}/gm, '');
      tokens.push({
        type: 'code',
        text: !options.pedantic
          ? cap.replace(/\n+$/, '')
          : cap
      });
      continue;
    }

    // fences (gfm)
    if (cap = block.fences.exec(src)) {
      src = src.substring(cap[0].length);
      tokens.push({
        type: 'code',
        lang: cap[2],
        text: cap[3]
      });
      continue;
    }

    // heading
    if (cap = block.heading.exec(src)) {
      src = src.substring(cap[0].length);
      tokens.push({
        type: 'heading',
        depth: cap[1].length,
        text: cap[2]
      });
      continue;
    }

    // lheading
    if (cap = block.lheading.exec(src)) {
      src = src.substring(cap[0].length);
      tokens.push({
        type: 'heading',
        depth: cap[2] === '=' ? 1 : 2,
        text: cap[1]
      });
      continue;
    }

    // hr
    if (cap = block.hr.exec(src)) {
      src = src.substring(cap[0].length);
      tokens.push({
        type: 'hr'
      });
      continue;
    }

    // blockquote
    if (cap = block.blockquote.exec(src)) {
      src = src.substring(cap[0].length);

      tokens.push({
        type: 'blockquote_start'
      });

      cap = cap[0].replace(/^ *> ?/gm, '');

      // Pass `top` to keep the current
      // "toplevel" state. This is exactly
      // how markdown.pl works.
      block.token(cap, tokens, top);

      tokens.push({
        type: 'blockquote_end'
      });

      continue;
    }

    // list
    if (cap = block.list.exec(src)) {
      src = src.substring(cap[0].length);

      tokens.push({
        type: 'list_start',
        ordered: isFinite(cap[2])
      });

      // Get each top-level item.
      cap = cap[0].match(block.item);

      next = false;
      l = cap.length;
      i = 0;

      for (; i < l; i++) {
        item = cap[i];

        // Remove the list item's bullet
        // so it is seen as the next token.
        space = item.length;
        item = item.replace(/^ *([*+-]|\d+\.) +/, '');

        // Outdent whatever the
        // list item contains. Hacky.
        if (~item.indexOf('\n ')) {
          space -= item.length;
          item = !options.pedantic
            ? item.replace(new RegExp('^ {1,' + space + '}', 'gm'), '')
            : item.replace(/^ {1,4}/gm, '');
        }

        // Determine whether item is loose or not.
        // Use: /(^|\n)(?! )[^\n]+\n\n(?!\s*$)/
        // for discount behavior.
        loose = next || /\n\n(?!\s*$)/.test(item);
        if (i !== l - 1) {
          next = item[item.length-1] === '\n';
          if (!loose) loose = next;
        }

        tokens.push({
          type: loose
            ? 'loose_item_start'
            : 'list_item_start'
        });

        // Recurse.
        block.token(item, tokens);

        tokens.push({
          type: 'list_item_end'
        });
      }

      tokens.push({
        type: 'list_end'
      });

      continue;
    }

    // html
    if (cap = block.html.exec(src)) {
      src = src.substring(cap[0].length);
      tokens.push({
        type: 'html',
        pre: cap[1] === 'pre',
        text: cap[0]
      });
      continue;
    }

    // def
    if (top && (cap = block.def.exec(src))) {
      src = src.substring(cap[0].length);
      tokens.links[cap[1].toLowerCase()] = {
        href: cap[2],
        title: cap[3]
      };
      continue;
    }

    // top-level paragraph
    if (top && (cap = block.paragraph.exec(src))) {
      src = src.substring(cap[0].length);
      tokens.push({
        type: 'paragraph',
        text: cap[0]
      });
      continue;
    }

    // text
    if (cap = block.text.exec(src)) {
      // Top-level should never reach here.
      src = src.substring(cap[0].length);
      tokens.push({
        type: 'text',
        text: cap[0]
      });
      continue;
    }
  }

  return tokens;
};

/**
 * Inline Processing
 */

var inline = {
  escape: /^\\([\\`*{}\[\]()#+\-.!_>])/,
  autolink: /^<([^ >]+(@|:\/)[^ >]+)>/,
  url: noop,
  tag: /^<!--[^\0]*?-->|^<\/?\w+(?:"[^"]*"|'[^']*'|[^'">])*?>/,
  link: /^!?\[(inside)\]\(href\)/,
  reflink: /^!?\[(inside)\]\s*\[([^\]]*)\]/,
  nolink: /^!?\[((?:\[[^\]]*\]|[^\[\]])*)\]/,
  strong: /^__([^\0]+?)__(?!_)|^\*\*([^\0]+?)\*\*(?!\*)/,
  em: /^\b_((?:__|[^\0])+?)_\b|^\*((?:\*\*|[^\0])+?)\*(?!\*)/,
  code: /^(`+)([^\0]*?[^`])\1(?!`)/,
  br: /^ {2,}\n(?!\s*$)/,
  text: /^[^\0]+?(?=[\\<!\[_*`]| {2,}\n|$)/
};

inline._linkInside = /(?:\[[^\]]*\]|[^\]]|\](?=[^\[]*\]))*/;
inline._linkHref = /\s*<?([^\s]*?)>?(?:\s+['"]([^\0]*?)['"])?\s*/;

inline.link = replace(inline.link)
  ('inside', inline._linkInside)
  ('href', inline._linkHref)
  ();

inline.reflink = replace(inline.reflink)
  ('inside', inline._linkInside)
  ();

inline.normal = {
  url: inline.url,
  strong: inline.strong,
  em: inline.em,
  text: inline.text
};

inline.pedantic = {
  strong: /^__(?=\S)([^\0]*?\S)__(?!_)|^\*\*(?=\S)([^\0]*?\S)\*\*(?!\*)/,
  em: /^_(?=\S)([^\0]*?\S)_(?!_)|^\*(?=\S)([^\0]*?\S)\*(?!\*)/
};

inline.gfm = {
  url: /^(https?:\/\/[^\s]+[^.,:;"')\]\s])/,
  text: /^[^\0]+?(?=[\\<!\[_*`]|https?:\/\/| {2,}\n|$)/
};

/**
 * Inline Lexer
 */

inline.lexer = function(src) {
  var out = ''
    , links = tokens.links
    , link
    , text
    , href
    , cap;

  while (src) {
    // escape
    if (cap = inline.escape.exec(src)) {
      src = src.substring(cap[0].length);
      out += cap[1];
      continue;
    }

    // autolink
    if (cap = inline.autolink.exec(src)) {
      src = src.substring(cap[0].length);
      if (cap[2] === '@') {
        text = cap[1][6] === ':'
          ? mangle(cap[1].substring(7))
          : mangle(cap[1]);
        href = mangle('mailto:') + text;
      } else {
        text = escape(cap[1]);
        href = text;
      }
      out += '<a href="'
        + href
        + '">'
        + text
        + '</a>';
      continue;
    }

    // url (gfm)
    if (cap = inline.url.exec(src)) {
      src = src.substring(cap[0].length);
      text = escape(cap[1]);
      href = text;
      out += '<a href="'
        + href
        + '">'
        + text
        + '</a>';
      continue;
    }

    // tag
    if (cap = inline.tag.exec(src)) {
      src = src.substring(cap[0].length);
      out += options.sanitize
        ? escape(cap[0])
        : cap[0];
      continue;
    }

    // link
    if (cap = inline.link.exec(src)) {
      src = src.substring(cap[0].length);
      out += outputLink(cap, {
        href: cap[2],
        title: cap[3]
      });
      continue;
    }

    // reflink, nolink
    if ((cap = inline.reflink.exec(src))
        || (cap = inline.nolink.exec(src))) {
      src = src.substring(cap[0].length);
      link = (cap[2] || cap[1]).replace(/\s+/g, ' ');
      link = links[link.toLowerCase()];
      if (!link || !link.href) {
        out += cap[0][0];
        src = cap[0].substring(1) + src;
        continue;
      }
      out += outputLink(cap, link);
      continue;
    }

    // strong
    if (cap = inline.strong.exec(src)) {
      src = src.substring(cap[0].length);
      out += '<strong>'
        + inline.lexer(cap[2] || cap[1])
        + '</strong>';
      continue;
    }

    // em
    if (cap = inline.em.exec(src)) {
      src = src.substring(cap[0].length);
      out += '<em>'
        + inline.lexer(cap[2] || cap[1])
        + '</em>';
      continue;
    }

    // code
    if (cap = inline.code.exec(src)) {
      src = src.substring(cap[0].length);
      out += '<code>'
        + escape(cap[2], true)
        + '</code>';
      continue;
    }

    // br
    if (cap = inline.br.exec(src)) {
      src = src.substring(cap[0].length);
      out += '<br>';
      continue;
    }

    // text
    if (cap = inline.text.exec(src)) {
      src = src.substring(cap[0].length);
      out += escape(cap[0]);
      continue;
    }
  }

  return out;
};

function outputLink(cap, link) {
  if (cap[0][0] !== '!') {
    return '<a href="'
      + escape(link.href)
      + '"'
      + (link.title
      ? ' title="'
      + escape(link.title)
      + '"'
      : '')
      + '>'
      + inline.lexer(cap[1])
      + '</a>';
  } else {
    return '<img src="'
      + escape(link.href)
      + '" alt="'
      + escape(cap[1])
      + '"'
      + (link.title
      ? ' title="'
      + escape(link.title)
      + '"'
      : '')
      + '>';
  }
}

/**
 * Parsing
 */

var tokens
  , token;

function next() {
  return token = tokens.pop();
}

function tok() {
  switch (token.type) {
    case 'space': {
      return '';
    }
    case 'hr': {
      return '<hr>\n';
    }
    case 'heading': {
      return '<h'
        + token.depth
        + '>'
        + inline.lexer(token.text)
        + '</h'
        + token.depth
        + '>\n';
    }
    case 'code': {
      if (options.highlight) {
        token.code = options.highlight(token.text, token.lang);
        if (token.code != null && token.code !== token.text) {
          token.escaped = true;
          token.text = token.code;
        }
      }

      if (!token.escaped) {
        token.text = escape(token.text, true);
      }

      return '<pre><code'
        + (token.lang
        ? ' class="lang-'
        + token.lang
        + '"'
        : '')
        + '>'
        + token.text
        + '</code></pre>\n';
    }
    case 'blockquote_start': {
      var body = '';

      while (next().type !== 'blockquote_end') {
        body += tok();
      }

      return '<blockquote>\n'
        + body
        + '</blockquote>\n';
    }
    case 'list_start': {
      var type = token.ordered ? 'ol' : 'ul'
        , body = '';

      while (next().type !== 'list_end') {
        body += tok();
      }

      return '<'
        + type
        + '>\n'
        + body
        + '</'
        + type
        + '>\n';
    }
    case 'list_item_start': {
      var body = '';

      while (next().type !== 'list_item_end') {
        body += token.type === 'text'
          ? parseText()
          : tok();
      }

      return '<li>'
        + body
        + '</li>\n';
    }
    case 'loose_item_start': {
      var body = '';

      while (next().type !== 'list_item_end') {
        body += tok();
      }

      return '<li>'
        + body
        + '</li>\n';
    }
    case 'html': {
      if (options.sanitize) {
        return inline.lexer(token.text);
      }
      return !token.pre && !options.pedantic
        ? inline.lexer(token.text)
        : token.text;
    }
    case 'paragraph': {
      return '<p>'
        + inline.lexer(token.text)
        + '</p>\n';
    }
    case 'text': {
      return '<p>'
        + parseText()
        + '</p>\n';
    }
  }
}

function parseText() {
  var body = token.text
    , top;

  while ((top = tokens[tokens.length-1])
         && top.type === 'text') {
    body += '\n' + next().text;
  }

  return inline.lexer(body);
}

function parse(src) {
  tokens = src.reverse();

  var out = '';
  while (next()) {
    out += tok();
  }

  tokens = null;
  token = null;

  return out;
}

/**
 * Helpers
 */

function escape(html, encode) {
  return html
    .replace(!encode ? /&(?!#?\w+;)/g : /&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function mangle(text) {
  var out = ''
    , l = text.length
    , i = 0
    , ch;

  for (; i < l; i++) {
    ch = text.charCodeAt(i);
    if (Math.random() > 0.5) {
      ch = 'x' + ch.toString(16);
    }
    out += '&#' + ch + ';';
  }

  return out;
}

function tag() {
  var tag = '(?!(?:'
    + 'a|em|strong|small|s|cite|q|dfn|abbr|data|time|code'
    + '|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo'
    + '|span|br|wbr|ins|del|img)\\b)\\w+(?!:/|@)\\b';

  return tag;
}

function replace(regex, opt) {
  regex = regex.source;
  opt = opt || '';
  return function self(name, val) {
    if (!name) return new RegExp(regex, opt);
    regex = regex.replace(name, val.source || val);
    return self;
  };
}

function noop() {}
noop.exec = noop;

/**
 * Marked
 */

function marked(src, opt) {
  setOptions(opt);
  return parse(block.lexer(src));
}

/**
 * Options
 */

var options
  , defaults;

function setOptions(opt) {
  if (!opt) opt = defaults;
  if (options === opt) return;
  options = opt;

  if (options.gfm) {
    block.fences = block.gfm.fences;
    block.paragraph = block.gfm.paragraph;
    inline.text = inline.gfm.text;
    inline.url = inline.gfm.url;
  } else {
    block.fences = block.normal.fences;
    block.paragraph = block.normal.paragraph;
    inline.text = inline.normal.text;
    inline.url = inline.normal.url;
  }

  if (options.pedantic) {
    inline.em = inline.pedantic.em;
    inline.strong = inline.pedantic.strong;
  } else {
    inline.em = inline.normal.em;
    inline.strong = inline.normal.strong;
  }
}

marked.options =
marked.setOptions = function(opt) {
  defaults = opt;
  setOptions(opt);
  return marked;
};

marked.setOptions({
  gfm: true,
  pedantic: false,
  sanitize: false,
  highlight: null
});

/**
 * Expose
 */

marked.parser = function(src, opt) {
  setOptions(opt);
  return parse(src);
};

marked.lexer = function(src, opt) {
  setOptions(opt);
  return block.lexer(src);
};

marked.parse = marked;

if (typeof module !== 'undefined') {
  module.exports = marked;
} else {
  this.marked = marked;
}

}).call(function() {
  return this || (typeof window !== 'undefined' ? window : global);
}());
;/*
 * https://github.com/overset/javascript-natural-sort/blob/master/naturalSort.js
 * Natural Sort algorithm for Javascript - Version 0.7 - Released under MIT license
 * Author: Jim Palmer (based on chunking idea from Dave Koelle)
 */
function natural_sort (a, b) {
    var re = /(^-?[0-9]+(\.?[0-9]*)[df]?e?[0-9]?$|^0x[0-9a-f]+$|[0-9]+)/gi,
        sre = /(^[ ]*|[ ]*$)/g,
        dre = /(^([\w ]+,?[\w ]+)?[\w ]+,?[\w ]+\d+:\d+(:\d+)?[\w ]?|^\d{1,4}[\/\-]\d{1,4}[\/\-]\d{1,4}|^\w+, \w+ \d+, \d{4})/,
        hre = /^0x[0-9a-f]+$/i,
        ore = /^0/,
        i = function(s) { return natural_sort.insensitive && (''+s).toLowerCase() || ''+s },
        // convert all to strings strip whitespace
        x = i(a).replace(sre, '') || '',
        y = i(b).replace(sre, '') || '',
        // chunk/tokenize
        xN = x.replace(re, '\0$1\0').replace(/\0$/,'').replace(/^\0/,'').split('\0'),
        yN = y.replace(re, '\0$1\0').replace(/\0$/,'').replace(/^\0/,'').split('\0'),
        // numeric, hex or date detection
        xD = parseInt(x.match(hre)) || (xN.length != 1 && x.match(dre) && Date.parse(x)),
        yD = parseInt(y.match(hre)) || xD && y.match(dre) && Date.parse(y) || null,
        oFxNcL, oFyNcL;
    // first try and sort Hex codes or Dates
    if (yD)
        if ( xD < yD ) return -1;
        else if ( xD > yD ) return 1;
    // natural sorting through split numeric strings and default strings
    for(var cLoc=0, numS=Math.max(xN.length, yN.length); cLoc < numS; cLoc++) {
        // find floats not starting with '0', string or 0 if not defined (Clint Priest)
        oFxNcL = !(xN[cLoc] || '').match(ore) && parseFloat(xN[cLoc]) || xN[cLoc] || 0;
        oFyNcL = !(yN[cLoc] || '').match(ore) && parseFloat(yN[cLoc]) || yN[cLoc] || 0;
        // handle numeric vs string comparison - number < string - (Kyle Adams)
        if (isNaN(oFxNcL) !== isNaN(oFyNcL)) { return (isNaN(oFxNcL)) ? 1 : -1; }
        // rely on string comparison if different types - i.e. '02' < 2 != '02' < '2'
        else if (typeof oFxNcL !== typeof oFyNcL) {
            oFxNcL += '';
            oFyNcL += '';
        }
        if (oFxNcL < oFyNcL) return -1;
        if (oFxNcL > oFyNcL) return 1;
    }
    return 0;
}
;/* Copyright (c) 2010-2012 Marcus Westin
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

;(function(){
	var store = {},
		win = window,
		doc = win.document,
		localStorageName = 'localStorage',
		globalStorageName = 'globalStorage',
		namespace = '__storejs__',
		storage

	store.disabled = false
	store.set = function(key, value) {}
	store.get = function(key) {}
	store.remove = function(key) {}
	store.clear = function() {}
	store.transact = function(key, defaultVal, transactionFn) {
		var val = store.get(key)
		if (transactionFn == null) {
			transactionFn = defaultVal
			defaultVal = null
		}
		if (typeof val == 'undefined') { val = defaultVal || {} }
		transactionFn(val)
		store.set(key, val)
	}
	store.getAll = function() {}

	store.serialize = function(value) {
		return JSON.stringify(value)
	}
	store.deserialize = function(value) {
		if (typeof value != 'string') { return undefined }
		return JSON.parse(value)
	}

	// Functions to encapsulate questionable FireFox 3.6.13 behavior
	// when about.config::dom.storage.enabled === false
	// See https://github.com/marcuswestin/store.js/issues#issue/13
	function isLocalStorageNameSupported() {
		try { return (localStorageName in win && win[localStorageName]) }
		catch(err) { return false }
	}

	function isGlobalStorageNameSupported() {
		try { return (globalStorageName in win && win[globalStorageName] && win[globalStorageName][win.location.hostname]) }
		catch(err) { return false }
	}

	if (isLocalStorageNameSupported()) {
		storage = win[localStorageName]
		store.set = function(key, val) {
			if (val === undefined) { return store.remove(key) }
			storage.setItem(key, store.serialize(val))
		}
		store.get = function(key) { return store.deserialize(storage.getItem(key)) }
		store.remove = function(key) { storage.removeItem(key) }
		store.clear = function() { storage.clear() }
		store.getAll = function() {
			var ret = {}
			for (var i=0; i<storage.length; ++i) {
				var key = storage.key(i)
				ret[key] = store.get(key)
			}
			return ret
		}
	} else if (isGlobalStorageNameSupported()) {
		storage = win[globalStorageName][win.location.hostname]
		store.set = function(key, val) {
			if (val === undefined) { return store.remove(key) }
			storage[key] = store.serialize(val)
		}
		store.get = function(key) { return store.deserialize(storage[key] && storage[key].value) }
		store.remove = function(key) { delete storage[key] }
		store.clear = function() { for (var key in storage ) { delete storage[key] } }
		store.getAll = function() {
			var ret = {}
			for (var i=0; i<storage.length; ++i) {
				var key = storage.key(i)
				ret[key] = store.get(key)
			}
			return ret
		}

	} else if (doc.documentElement.addBehavior) {
		var storageOwner,
			storageContainer
		// Since #userData storage applies only to specific paths, we need to
		// somehow link our data to a specific path.  We choose /favicon.ico
		// as a pretty safe option, since all browsers already make a request to
		// this URL anyway and being a 404 will not hurt us here.  We wrap an
		// iframe pointing to the favicon in an ActiveXObject(htmlfile) object
		// (see: http://msdn.microsoft.com/en-us/library/aa752574(v=VS.85).aspx)
		// since the iframe access rules appear to allow direct access and
		// manipulation of the document element, even for a 404 page.  This
		// document can be used instead of the current document (which would
		// have been limited to the current path) to perform #userData storage.
		try {
			storageContainer = new ActiveXObject('htmlfile')
			storageContainer.open()
			storageContainer.write('<s' + 'cript>document.w=window</s' + 'cript><iframe src="/favicon.ico"></frame>')
			storageContainer.close()
			storageOwner = storageContainer.w.frames[0].document
			storage = storageOwner.createElement('div')
		} catch(e) {
			// somehow ActiveXObject instantiation failed (perhaps some special
			// security settings or otherwse), fall back to per-path storage
			storage = doc.createElement('div')
			storageOwner = doc.body
		}
		function withIEStorage(storeFunction) {
			return function() {
				var args = Array.prototype.slice.call(arguments, 0)
				args.unshift(storage)
				// See http://msdn.microsoft.com/en-us/library/ms531081(v=VS.85).aspx
				// and http://msdn.microsoft.com/en-us/library/ms531424(v=VS.85).aspx
				storageOwner.appendChild(storage)
				storage.addBehavior('#default#userData')
				storage.load(localStorageName)
				var result = storeFunction.apply(store, args)
				storageOwner.removeChild(storage)
				return result
			}
		}
		
		// In IE7, keys may not contain special chars. See all of https://github.com/marcuswestin/store.js/issues/40
		var forbiddenCharsRegex = new RegExp("[!\"#$%&'()*+,/\\\\:;<=>?@[\\]^`{|}~]", "g")
		function ieKeyFix(key) {
			return key.replace(forbiddenCharsRegex, '___')
		}
		store.set = withIEStorage(function(storage, key, val) {
			key = ieKeyFix(key)
			if (val === undefined) { return store.remove(key) }
			storage.setAttribute(key, store.serialize(val))
			storage.save(localStorageName)
		})
		store.get = withIEStorage(function(storage, key) {
			key = ieKeyFix(key)
			return store.deserialize(storage.getAttribute(key))
		})
		store.remove = withIEStorage(function(storage, key) {
			key = ieKeyFix(key)
			storage.removeAttribute(key)
			storage.save(localStorageName)
		})
		store.clear = withIEStorage(function(storage) {
			var attributes = storage.XMLDocument.documentElement.attributes
			storage.load(localStorageName)
			for (var i=0, attr; attr=attributes[i]; i++) {
				storage.removeAttribute(attr.name)
			}
			storage.save(localStorageName)
		})
		store.getAll = withIEStorage(function(storage) {
			var attributes = storage.XMLDocument.documentElement.attributes
			storage.load(localStorageName)
			var ret = {}
			for (var i=0, attr; attr=attributes[i]; ++i) {
				ret[attr] = store.get(attr)
			}
			return ret
		})
	}

	try {
		store.set(namespace, namespace)
		if (store.get(namespace) != namespace) { store.disabled = true }
		store.remove(namespace)
	} catch(e) {
		store.disabled = true
	}
	store.enabled = !store.disabled
	
	if (typeof module != 'undefined' && typeof module != 'function') { module.exports = store }
	else if (typeof define === 'function' && define.amd) { define(store) }
	else { this.store = store }
})();
;;/**
 */

if (typeof Events === "undefined") 
  var Events = {}

// Create the slide Namespace
Events.slide = {}
Events.slide.timeout = false
Events.slide.target = false
Events.slide.started = false


// Mouse
Events.slide.mouseDelay = 70
Events.slide.mousedown = null
Events.slide.mouseThreshold = 4

// Touch
Events.slide.touchstart = null
Events.slide.touchThreshold = 20

Events.slide.onMouseMove = function (event) {
  
  
  
  var md = Events.slide.mousedown
  if (!md)
    return true
  
  var target = Events.slide.target
  
  if (Events.slide.started) {
    $(target).trigger('slide', event)
    return true
  }
  
  // Left mouse test
  if (event.which != 1)
    return true
  
  // Time test
  if (new Date().getTime() - md.timeStamp < Events.slide.mouseDelay)
    return true
  
  // Distance test
  var xDistance = Math.abs(event.screenX - md.screenX)
  var yDistance = Math.abs(event.screenY - md.screenY)
  if (xDistance + yDistance < Events.slide.mouseThreshold)
    return true
  
  $(target).trigger('slidestart', event)
  Events.slide.started = true
  
}

Events.slide.onMouseDown = function (event) {
  Events.slide.mousedown = event
  Events.slide.target = event.target
}

Events.slide.onMouseUp = function (event) {
  if (Events.slide.started) {
    Events.slide.started = false
    $(Events.slide.target).trigger('slideend', event)
  }
  Events.slide.mousedown = false
  return true
}

Events.slide.onTouchStart = function (event) {
  Events.slide.touchstart = event
  Events.slide.target = event.target
}

Events.slide.onTouchEnd = function (event) {

  if (Events.slide.started) {
    Events.slide.started = false
    $(Events.slide.touchstart.target).trigger('slideend', event)
  }  
  return true
}

Events.slide.onTouchMove = function (event) {
  
  var md = Events.slide.touchstart
  var target = Events.slide.target
  
  // Time test
  if (new Date().getTime() - md.timeStamp < Events.slide.delay)
    return true
  
  // Distance test
  var xDistance = Math.abs(event.screenX - md.screenX)
  var yDistance = Math.abs(event.screenY - md.screenY)
  if (xDistance + yDistance < Events.slide.threshold)
    return true
   
  if (Events.slide.started) {
    $(target).trigger('slide', event)
    return true
  }
  
  $(target).trigger('slidestart', event)
  Events.slide.started = true  
}

if ( navigator.userAgent.match(/(iPad|iPhone|iPod)/i) ) {
  document.addEventListener('touchstart', Events.slide.onTouchStart, true)
  document.addEventListener('touchmove', Events.slide.onTouchMove, true)
  document.addEventListener('touchend', Events.slide.onTouchEnd, true)
} else {
  document.addEventListener('mousedown', Events.slide.onMouseDown, true)
  document.addEventListener('mousemove', Events.slide.onMouseMove, true)
  document.addEventListener('mouseup', Events.slide.onMouseUp, true)
}
/**
 * The tap event is a quick event.
 *
 * Its a tap:
 *   when you click an element quickly.
 *   when you tap an element with your finger quickly.
 *
 * Its not a tap:
 *   when you mousedown or touchstart on an element, then hold for a bit, then release.
 *   when you mousedown or touchstart on an element and move more than a bit.
 *
 */

if (typeof Events === "undefined") 
   var Events = {}

// Create the tap Namespace
Events.tap = {}

// If the tap doesnt happen within X ms, its not a tap
Events.tap.mouseTime = 750

// We store a reference to the mousedown event
Events.tap.mousedown = null

// Mouse cannot move more than this many pixels, else its not a tap.
Events.tap.maxMouseDistance = 8

Events.tap.onMouseDown = function (event) {
  Events.tap.mousedown = event
}

Events.tap.onMouseUp = function (event) {
  
  // Create a new point to mousedown event.
  // Sacrifice a tiny bit of memory for a lot less characters.
  var md = Events.tap.mousedown
  
  // Speed test
  if ((event.timeStamp - md.timeStamp) > Events.tap.mouseTime)
    return true

  // Same object test
  if (event.target !== md.target)
    return true
  
  // Distance test
  var xDistance = Math.abs(event.screenX - md.screenX)
  var yDistance = Math.abs(event.screenY - md.screenY)
  if ( xDistance + yDistance > Events.tap.maxMouseDistance )
    return true
  
  // Cumulative distance test
  
  // All custom events have 1 universal optional handler
  if (Events.tap.onPass)
    Events.tap.onPass(event)
  
  $(event.target).trigger('tap')
  
}

// We store a reference to the mousedown event
Events.tap.touchstart = null

// Mouse cannot move more than this many pixels, else its not a tap.
Events.tap.maxTouchDistance = 20

Events.tap.onTouchStart = function (event) {
  Events.tap.touchstart = event
}

Events.tap.onTouchEnd = function (event) {
  
  // Create a new point to mousedown event.
  // Sacrifice a tiny bit of memory for a lot less characters.
  var md = Events.tap.touchstart
  
  // Speed test
  if ((event.timeStamp - md.timeStamp) > Events.tap.maxTime)
    return true

  // Same object test
  if (event.target !== md.target)
    return true
  
  // Distance test
  var xDistance = Math.abs(event.screenX - md.screenX)
  var yDistance = Math.abs(event.screenY - md.screenY)
  if ( xDistance + yDistance > Events.tap.maxTouchDistance )
    return true
  
  // Cumulative distance test
  
  $(event.target).trigger('tap')
  
}


if ( navigator.userAgent.match(/(iPad|iPhone|iPod)/i) ) {
  document.addEventListener('touchstart', Events.tap.onTouchStart, true)
  document.addEventListener('touchend', Events.tap.onTouchEnd, true)  
} else {
  document.addEventListener('mousedown', Events.tap.onMouseDown, true)
  document.addEventListener('mouseup', Events.tap.onMouseUp, true)  
}

$(document).on('keydown', 'input', function (event) {
  // Enter key test
  if (event.keyCode !== 13)
    return true
  $(this).trigger('enterkey')
})
/**
 * The hold event is a long hold.
 *
 * Its a hold:
 *   when you hold an element for a decent amount of time.
 *
 * Its not a tap:
 *   when you move while holding.
 *   when you do a quick hold.
 *
 */

if (typeof Events === "undefined") 
   var Events = {}

// Create the hold Namespace
Events.hold = {}

// If the hold doesnt happen after X ms, its not a hold
Events.hold.mousetime = 750
Events.hold.touchtime = 1000

// We store a reference to the mousedown event
Events.hold.mousedown = null

// Holds a reference to the target
Events.hold.target = false

// Mouse cannot move more than this many pixels, else its not a hold.
Events.hold.maxMouseDistance = 8

// Holds a reference to the timeout function
Events.hold.timeout = false

Events.hold.onMouseDown = function (event) {
  // Must be left mouse button
  if (event.which !== 1)
    return true
  Events.hold.mousedown = event
  Events.hold.target = event.target
  Events.hold.timeout = setTimeout('Events.hold.fireMouse()', Events.hold.mousetime)
}

Events.hold.onMouseMove = function (event) {
  Events.hold.mousemove = event
}

Events.hold.onMouseUp = function (event) {
  Events.hold.mousedown = false
  clearTimeout(Events.hold.timeout)
  return true
}

Events.hold.fireMouse = function () {
  
  var md = Events.hold.mousedown
  var mm = Events.hold.mousemove
  
  // Mouse down test
  if (!Events.hold.mousedown)
    return true
  
  // Distance test
  var xDistance = Math.abs(mm.screenX - md.screenX)
  var yDistance = Math.abs(mm.screenY - md.screenY)
  if (xDistance + yDistance > Events.hold.maxMouseDistance)
    return true

  $(Events.hold.target).trigger('hold')
}

// We store a reference to the touchstart event
Events.hold.touchstart = null

// Mouse cannot move more than this many pixels, else its not a hold.
Events.hold.maxTouchDistance = 8

Events.hold.onTouchStart = function (event) {
  Events.hold.touchstart = event
  Events.hold.touchmove = event
  Events.hold.startX = event.touches[0].pageX
  Events.hold.startY = event.touches[0].pageY
  Events.hold.target = event.target
  Events.hold.timeout = setTimeout('Events.hold.fireTouch()', Events.hold.touchtime)
}

Events.hold.onTouchMove = function (event) {
  console.log(Events.hold.touchstart.touches[0].pageX)
  Events.hold.touchmove = event
}

Events.hold.onTouchEnd = function (event) {
  Events.hold.touchstart = false
  clearTimeout(Events.hold.timeout)
  return true
}

Events.hold.fireTouch = function () {

  var touchMove = Events.hold.touchmove
  
  // Distance test
  var xDistance = Math.abs(touchMove.touches[0].pageX - Events.hold.startX)
  var yDistance = Math.abs(touchMove.touches[0].pageY - Events.hold.startY)
  if ( xDistance + yDistance > Events.hold.maxTouchDistance )
    return true
  
  $(Events.hold.target).trigger('hold')
}


if ( navigator.userAgent.match(/(iPad|iPhone|iPod)/i) ) {
  document.addEventListener('touchstart', Events.hold.onTouchStart, true)
  document.addEventListener('touchend', Events.hold.onTouchEnd, true)
  document.addEventListener('touchmove', Events.hold.onTouchMove, true)
} else {
  document.addEventListener('mousedown', Events.hold.onMouseDown, true)
  document.addEventListener('mousemove', Events.hold.onMouseMove, true)
  document.addEventListener('mouseup', Events.hold.onMouseUp, true)
}

// Keycode reference.
// backspace   8   6  54 v         86    f3            114
// tab         9   7  55 w         87    f4            115
// enter       13  8  56 x         88    f5            116
// shift       16  9  57 y         89    f6            117
// ctrl        17  a  65 z         90    f7            118
// alt         18  b  66 left com  91    f8            119
// pause/break 19  c  67 right win 92    f9            120
// caps lock   20  d  68 apple com 93    f10           121
// escape      27  e  69 numpad 0  96    f11           122
// spacebar    32                     
// page up     33  f  70 numpad 1  97    f12           123
// page down   34  g  71 numpad 2  98    numlock       144
// end         35  h  72 numpad 3  99    scroll lock   145
// home        36  i  73 numpad 4  100   semi-colon    186
// left arrow  37  j  74 numpad 5  101   equal sign    187
// up arrow    38  k  75 numpad 6  102   comma         188
// right arrow 39  l  76 numpad 7  103   dash          189
// down arrow  40  m  77 numpad 8  104   period        190
// insert      45  n  78 numpad 9  105   forward slash 191
// delete      46  o  79 multiply  106   grave accent  192
// 0           48  p  80 add       107   open bracket  219
// 1           49  q  81 subtract  109   back slash    220
// 2           50  r  82 decimal   110   close bracket 221
// 3           51  s  83 divide    111   single quote  222
// 4           52  t  84 f1        112
// 5           53  u  85 f2        113

if (typeof Events === "undefined") 
   var Events = {}

// Create the Namespace
Events.shortcut = {}

/**
 * Prefix to the selector that triggers that tap. Change this to make shortcuts
 * fire only on blocks matching a certain class (Nudge uses it to make shortcuts only
 * fire on blocks with a class of tool)
 */
Events.shortcut.context = ''

/**
 * Check if user is editing text.
 */
Events.shortcut.isEditingText = function () {
  // Return true if user is editing an input
  if ($('input:focus,div:focus,textarea:focus,a:focus,[contenteditable=true]:focus').length)
    return true
  
  // Fix for firefox contenteditable
  if ($('div[contenteditable]').get(0) == document.activeElement)
    return true
  return false
}


// Turn to false to disable shortcuts
Events.shortcut.on = true

// We store all shortcuts here.
Events.shortcut.shortcuts = {}

/**
 * Fires the shortcut if and only if:
 *
 * - shortcuts are enabled
 * - there is a matching shortcut
 * - no input or contenteditable element has focus
 *
 * If a shortcut is fired, the default action for the key event is prevented.
 * 
 * @param {object} The keydown event
 */
Events.shortcut.fire = function(event) {

  // Return true if shortcuts off
  if (!Events.shortcut.on)
    return true
  
  if (Events.shortcut.isEditingText())
    return true
  
  // non ctrl key shortcuts
  var key = Events.shortcut.string_from_keycode(event.keyCode)
  if (event.shiftKey)
    key = 'shift+' + key
  if (event.metaKey)
    key = 'meta+' + key
  if (event.ctrlKey)
    key = 'ctrl+' + key
  if (event.altKey)
    key = 'alt+' + key

  if (Events.shortcut.shortcuts[key]) {
    var value = Events.shortcut.shortcuts[key]
    
    // Allow hard coded functions as shortcut values
    if (typeof value === 'function')
      value()
    
    // Also allow shortcuts to just trigger taps on blocks
    else {
      $(Events.shortcut.context + '#' + value).trigger('tap')
    }
    
    if (Events.shortcut.onfire)
      Events.shortcut.onfire(key)
    
    event.preventDefault()
  }
}

/**
 * @param {number} The keycode from a key event.
 * @return {string} The corresponding character.
 */
Events.shortcut.string_from_keycode = function (keycode) {
  // source: https://github.com/jeresig/jquery.hotkeys/blob/master/jquery.hotkeys.js
  var character = String.fromCharCode( keycode ).toLowerCase()
  var specialKeys = {
  			8: 'backspace', 9: 'tab', 13: 'return', 16: 'shift', 17: 'ctrl', 18: 'alt', 19: 'pause',
  			20: 'capslock', 27: 'esc', 32: 'space', 33: 'pageup', 34: 'pagedown', 35: 'end', 36: 'home',
  			37: 'left', 38: 'up', 39: 'right', 40: 'down', 45: 'insert', 46: 'delete', 
  			96: '0', 97: '1', 98: '2', 99: '3', 100: '4', 101: '5', 102: '6', 103: '7',
  			104: '8', 105: '9', 106: '*', 107: '+', 109: '-', 110: '.', 111 : '/', 
  			112: 'f1', 113: 'f2', 114: 'f3', 115: 'f4', 116: 'f5', 117: 'f6', 118: 'f7', 119: 'f8', 
  			120: 'f9', 121: 'f10', 122: 'f11', 123: 'f12', 144: 'numlock', 145: 'scroll', 190 : '.', 191: '/', 224: 'meta'
  		}
  if (keycode in specialKeys) {
    character = specialKeys[keycode]
  }
  return character
}


// Bind the listener
$(document).on('ready', function () {
  $(document).on('keydown', Events.shortcut.fire)
})


;/// git://github.com/shtylman/node-cookie.git
/// Parse the given cookie header string into an object
/// The object has the various cookies as keys(names) => values
/// @param {String} str
/// @return {Object}
var parseCookie = function(str) {
    var obj = {}
    var pairs = str.split(/[;,] */);

    pairs.forEach(function(pair) {
        var eq_idx = pair.indexOf('=')
        var key = pair.substr(0, eq_idx).trim()
        var val = pair.substr(++eq_idx, pair.length).trim();

        // quoted values
        if ('"' == val[0]) {
            val = val.slice(1, -1);
        }

        // only assign once
        if (undefined == obj[key]) {
            try {
                obj[key] = decodeURIComponent(val);
            } catch (e) {
                obj[key] = val;
            }
        }
    });

    return obj;
};

;/**
 * Move cursor to the end of the contenteditable div
 *
 * @param {HTMLElement}
 */
var MoveCursorToEnd = function(element)
{
  if (!element) {return null}
  var range, text_selection
  if (document.createRange) {
    range = document.createRange()//Create a range (a range is a like the selection but invisible)
    range.selectNodeContents(element)//Select the entire contents of the element with the range
    range.collapse(false)//collapse the range to the end point. false means collapse to end rather than the start
    text_selection = window.getSelection()//get the selection object (allows you to change selection)
    text_selection.removeAllRanges()//remove any selections already made
    text_selection.addRange(range)//make the range you have just created the visible selection
  }
}
;/*! Socket.IO.js build:0.9.11, development. Copyright(c) 2011 LearnBoost <dev@learnboost.com> MIT Licensed */

var io = ('undefined' === typeof module ? {} : module.exports);
(function() {

/**
 * socket.io
 * Copyright(c) 2011 LearnBoost <dev@learnboost.com>
 * MIT Licensed
 */

(function (exports, global) {

  /**
   * IO namespace.
   *
   * @namespace
   */

  var io = exports;

  /**
   * Socket.IO version
   *
   * @api public
   */

  io.version = '0.9.11';

  /**
   * Protocol implemented.
   *
   * @api public
   */

  io.protocol = 1;

  /**
   * Available transports, these will be populated with the available transports
   *
   * @api public
   */

  io.transports = [];

  /**
   * Keep track of jsonp callbacks.
   *
   * @api private
   */

  io.j = [];

  /**
   * Keep track of our io.Sockets
   *
   * @api private
   */
  io.sockets = {};


  /**
   * Manages connections to hosts.
   *
   * @param {String} uri
   * @Param {Boolean} force creation of new socket (defaults to false)
   * @api public
   */

  io.connect = function (host, details) {
    var uri = io.util.parseUri(host)
      , uuri
      , socket;

    if (global && global.location) {
      uri.protocol = uri.protocol || global.location.protocol.slice(0, -1);
      uri.host = uri.host || (global.document
        ? global.document.domain : global.location.hostname);
      uri.port = uri.port || global.location.port;
    }

    uuri = io.util.uniqueUri(uri);

    var options = {
        host: uri.host
      , secure: 'https' == uri.protocol
      , port: uri.port || ('https' == uri.protocol ? 443 : 80)
      , query: uri.query || ''
    };

    io.util.merge(options, details);

    if (options['force new connection'] || !io.sockets[uuri]) {
      socket = new io.Socket(options);
    }

    if (!options['force new connection'] && socket) {
      io.sockets[uuri] = socket;
    }

    socket = socket || io.sockets[uuri];

    // if path is different from '' or /
    return socket.of(uri.path.length > 1 ? uri.path : '');
  };

})('object' === typeof module ? module.exports : (this.io = {}), this);
/**
 * socket.io
 * Copyright(c) 2011 LearnBoost <dev@learnboost.com>
 * MIT Licensed
 */

(function (exports, global) {

  /**
   * Utilities namespace.
   *
   * @namespace
   */

  var util = exports.util = {};

  /**
   * Parses an URI
   *
   * @author Steven Levithan <stevenlevithan.com> (MIT license)
   * @api public
   */

  var re = /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/;

  var parts = ['source', 'protocol', 'authority', 'userInfo', 'user', 'password',
               'host', 'port', 'relative', 'path', 'directory', 'file', 'query',
               'anchor'];

  util.parseUri = function (str) {
    var m = re.exec(str || '')
      , uri = {}
      , i = 14;

    while (i--) {
      uri[parts[i]] = m[i] || '';
    }

    return uri;
  };

  /**
   * Produces a unique url that identifies a Socket.IO connection.
   *
   * @param {Object} uri
   * @api public
   */

  util.uniqueUri = function (uri) {
    var protocol = uri.protocol
      , host = uri.host
      , port = uri.port;

    if ('document' in global) {
      host = host || document.domain;
      port = port || (protocol == 'https'
        && document.location.protocol !== 'https:' ? 443 : document.location.port);
    } else {
      host = host || 'localhost';

      if (!port && protocol == 'https') {
        port = 443;
      }
    }

    return (protocol || 'http') + '://' + host + ':' + (port || 80);
  };

  /**
   * Mergest 2 query strings in to once unique query string
   *
   * @param {String} base
   * @param {String} addition
   * @api public
   */

  util.query = function (base, addition) {
    var query = util.chunkQuery(base || '')
      , components = [];

    util.merge(query, util.chunkQuery(addition || ''));
    for (var part in query) {
      if (query.hasOwnProperty(part)) {
        components.push(part + '=' + query[part]);
      }
    }

    return components.length ? '?' + components.join('&') : '';
  };

  /**
   * Transforms a querystring in to an object
   *
   * @param {String} qs
   * @api public
   */

  util.chunkQuery = function (qs) {
    var query = {}
      , params = qs.split('&')
      , i = 0
      , l = params.length
      , kv;

    for (; i < l; ++i) {
      kv = params[i].split('=');
      if (kv[0]) {
        query[kv[0]] = kv[1];
      }
    }

    return query;
  };

  /**
   * Executes the given function when the page is loaded.
   *
   *     io.util.load(function () { console.log('page loaded'); });
   *
   * @param {Function} fn
   * @api public
   */

  var pageLoaded = false;

  util.load = function (fn) {
    if ('document' in global && document.readyState === 'complete' || pageLoaded) {
      return fn();
    }

    util.on(global, 'load', fn, false);
  };

  /**
   * Adds an event.
   *
   * @api private
   */

  util.on = function (element, event, fn, capture) {
    if (element.attachEvent) {
      element.attachEvent('on' + event, fn);
    } else if (element.addEventListener) {
      element.addEventListener(event, fn, capture);
    }
  };

  /**
   * Generates the correct `XMLHttpRequest` for regular and cross domain requests.
   *
   * @param {Boolean} [xdomain] Create a request that can be used cross domain.
   * @returns {XMLHttpRequest|false} If we can create a XMLHttpRequest.
   * @api private
   */

  util.request = function (xdomain) {

    if (xdomain && 'undefined' != typeof XDomainRequest && !util.ua.hasCORS) {
      return new XDomainRequest();
    }

    if ('undefined' != typeof XMLHttpRequest && (!xdomain || util.ua.hasCORS)) {
      return new XMLHttpRequest();
    }

    if (!xdomain) {
      try {
        return new window[(['Active'].concat('Object').join('X'))]('Microsoft.XMLHTTP');
      } catch(e) { }
    }

    return null;
  };

  /**
   * XHR based transport constructor.
   *
   * @constructor
   * @api public
   */

  /**
   * Change the internal pageLoaded value.
   */

  if ('undefined' != typeof window) {
    util.load(function () {
      pageLoaded = true;
    });
  }

  /**
   * Defers a function to ensure a spinner is not displayed by the browser
   *
   * @param {Function} fn
   * @api public
   */

  util.defer = function (fn) {
    if (!util.ua.webkit || 'undefined' != typeof importScripts) {
      return fn();
    }

    util.load(function () {
      setTimeout(fn, 100);
    });
  };

  /**
   * Merges two objects.
   *
   * @api public
   */

  util.merge = function merge (target, additional, deep, lastseen) {
    var seen = lastseen || []
      , depth = typeof deep == 'undefined' ? 2 : deep
      , prop;

    for (prop in additional) {
      if (additional.hasOwnProperty(prop) && util.indexOf(seen, prop) < 0) {
        if (typeof target[prop] !== 'object' || !depth) {
          target[prop] = additional[prop];
          seen.push(additional[prop]);
        } else {
          util.merge(target[prop], additional[prop], depth - 1, seen);
        }
      }
    }

    return target;
  };

  /**
   * Merges prototypes from objects
   *
   * @api public
   */

  util.mixin = function (ctor, ctor2) {
    util.merge(ctor.prototype, ctor2.prototype);
  };

  /**
   * Shortcut for prototypical and static inheritance.
   *
   * @api private
   */

  util.inherit = function (ctor, ctor2) {
    function f() {};
    f.prototype = ctor2.prototype;
    ctor.prototype = new f;
  };

  /**
   * Checks if the given object is an Array.
   *
   *     io.util.isArray([]); // true
   *     io.util.isArray({}); // false
   *
   * @param Object obj
   * @api public
   */

  util.isArray = Array.isArray || function (obj) {
    return Object.prototype.toString.call(obj) === '[object Array]';
  };

  /**
   * Intersects values of two arrays into a third
   *
   * @api public
   */

  util.intersect = function (arr, arr2) {
    var ret = []
      , longest = arr.length > arr2.length ? arr : arr2
      , shortest = arr.length > arr2.length ? arr2 : arr;

    for (var i = 0, l = shortest.length; i < l; i++) {
      if (~util.indexOf(longest, shortest[i]))
        ret.push(shortest[i]);
    }

    return ret;
  };

  /**
   * Array indexOf compatibility.
   *
   * @see bit.ly/a5Dxa2
   * @api public
   */

  util.indexOf = function (arr, o, i) {

    for (var j = arr.length, i = i < 0 ? i + j < 0 ? 0 : i + j : i || 0;
         i < j && arr[i] !== o; i++) {}

    return j <= i ? -1 : i;
  };

  /**
   * Converts enumerables to array.
   *
   * @api public
   */

  util.toArray = function (enu) {
    var arr = [];

    for (var i = 0, l = enu.length; i < l; i++)
      arr.push(enu[i]);

    return arr;
  };

  /**
   * UA / engines detection namespace.
   *
   * @namespace
   */

  util.ua = {};

  /**
   * Whether the UA supports CORS for XHR.
   *
   * @api public
   */

  util.ua.hasCORS = 'undefined' != typeof XMLHttpRequest && (function () {
    try {
      var a = new XMLHttpRequest();
    } catch (e) {
      return false;
    }

    return a.withCredentials != undefined;
  })();

  /**
   * Detect webkit.
   *
   * @api public
   */

  util.ua.webkit = 'undefined' != typeof navigator
    && /webkit/i.test(navigator.userAgent);

   /**
   * Detect iPad/iPhone/iPod.
   *
   * @api public
   */

  util.ua.iDevice = 'undefined' != typeof navigator
      && /iPad|iPhone|iPod/i.test(navigator.userAgent);

})('undefined' != typeof io ? io : module.exports, this);
/**
 * socket.io
 * Copyright(c) 2011 LearnBoost <dev@learnboost.com>
 * MIT Licensed
 */

(function (exports, io) {

  /**
   * Expose constructor.
   */

  exports.EventEmitter = EventEmitter;

  /**
   * Event emitter constructor.
   *
   * @api public.
   */

  function EventEmitter () {};

  /**
   * Adds a listener
   *
   * @api public
   */

  EventEmitter.prototype.on = function (name, fn) {
    if (!this.$events) {
      this.$events = {};
    }

    if (!this.$events[name]) {
      this.$events[name] = fn;
    } else if (io.util.isArray(this.$events[name])) {
      this.$events[name].push(fn);
    } else {
      this.$events[name] = [this.$events[name], fn];
    }

    return this;
  };

  EventEmitter.prototype.addListener = EventEmitter.prototype.on;

  /**
   * Adds a volatile listener.
   *
   * @api public
   */

  EventEmitter.prototype.once = function (name, fn) {
    var self = this;

    function on () {
      self.removeListener(name, on);
      fn.apply(this, arguments);
    };

    on.listener = fn;
    this.on(name, on);

    return this;
  };

  /**
   * Removes a listener.
   *
   * @api public
   */

  EventEmitter.prototype.removeListener = function (name, fn) {
    if (this.$events && this.$events[name]) {
      var list = this.$events[name];

      if (io.util.isArray(list)) {
        var pos = -1;

        for (var i = 0, l = list.length; i < l; i++) {
          if (list[i] === fn || (list[i].listener && list[i].listener === fn)) {
            pos = i;
            break;
          }
        }

        if (pos < 0) {
          return this;
        }

        list.splice(pos, 1);

        if (!list.length) {
          delete this.$events[name];
        }
      } else if (list === fn || (list.listener && list.listener === fn)) {
        delete this.$events[name];
      }
    }

    return this;
  };

  /**
   * Removes all listeners for an event.
   *
   * @api public
   */

  EventEmitter.prototype.removeAllListeners = function (name) {
    if (name === undefined) {
      this.$events = {};
      return this;
    }

    if (this.$events && this.$events[name]) {
      this.$events[name] = null;
    }

    return this;
  };

  /**
   * Gets all listeners for a certain event.
   *
   * @api publci
   */

  EventEmitter.prototype.listeners = function (name) {
    if (!this.$events) {
      this.$events = {};
    }

    if (!this.$events[name]) {
      this.$events[name] = [];
    }

    if (!io.util.isArray(this.$events[name])) {
      this.$events[name] = [this.$events[name]];
    }

    return this.$events[name];
  };

  /**
   * Emits an event.
   *
   * @api public
   */

  EventEmitter.prototype.emit = function (name) {
    if (!this.$events) {
      return false;
    }

    var handler = this.$events[name];

    if (!handler) {
      return false;
    }

    var args = Array.prototype.slice.call(arguments, 1);

    if ('function' == typeof handler) {
      handler.apply(this, args);
    } else if (io.util.isArray(handler)) {
      var listeners = handler.slice();

      for (var i = 0, l = listeners.length; i < l; i++) {
        listeners[i].apply(this, args);
      }
    } else {
      return false;
    }

    return true;
  };

})(
    'undefined' != typeof io ? io : module.exports
  , 'undefined' != typeof io ? io : module.parent.exports
);

/**
 * socket.io
 * Copyright(c) 2011 LearnBoost <dev@learnboost.com>
 * MIT Licensed
 */

/**
 * Based on JSON2 (http://www.JSON.org/js.html).
 */

(function (exports, nativeJSON) {
  "use strict";

  // use native JSON if it's available
  if (nativeJSON && nativeJSON.parse){
    return exports.JSON = {
      parse: nativeJSON.parse
    , stringify: nativeJSON.stringify
    };
  }

  var JSON = exports.JSON = {};

  function f(n) {
      // Format integers to have at least two digits.
      return n < 10 ? '0' + n : n;
  }

  function date(d, key) {
    return isFinite(d.valueOf()) ?
        d.getUTCFullYear()     + '-' +
        f(d.getUTCMonth() + 1) + '-' +
        f(d.getUTCDate())      + 'T' +
        f(d.getUTCHours())     + ':' +
        f(d.getUTCMinutes())   + ':' +
        f(d.getUTCSeconds())   + 'Z' : null;
  };

  var cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
      escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
      gap,
      indent,
      meta = {    // table of character substitutions
          '\b': '\\b',
          '\t': '\\t',
          '\n': '\\n',
          '\f': '\\f',
          '\r': '\\r',
          '"' : '\\"',
          '\\': '\\\\'
      },
      rep;


  function quote(string) {

// If the string contains no control characters, no quote characters, and no
// backslash characters, then we can safely slap some quotes around it.
// Otherwise we must also replace the offending characters with safe escape
// sequences.

      escapable.lastIndex = 0;
      return escapable.test(string) ? '"' + string.replace(escapable, function (a) {
          var c = meta[a];
          return typeof c === 'string' ? c :
              '\\u' + ('0000' + a.charCodeAt(0).toString(16)).slice(-4);
      }) + '"' : '"' + string + '"';
  }


  function str(key, holder) {

// Produce a string from holder[key].

      var i,          // The loop counter.
          k,          // The member key.
          v,          // The member value.
          length,
          mind = gap,
          partial,
          value = holder[key];

// If the value has a toJSON method, call it to obtain a replacement value.

      if (value instanceof Date) {
          value = date(key);
      }

// If we were called with a replacer function, then call the replacer to
// obtain a replacement value.

      if (typeof rep === 'function') {
          value = rep.call(holder, key, value);
      }

// What happens next depends on the value's type.

      switch (typeof value) {
      case 'string':
          return quote(value);

      case 'number':

// JSON numbers must be finite. Encode non-finite numbers as null.

          return isFinite(value) ? String(value) : 'null';

      case 'boolean':
      case 'null':

// If the value is a boolean or null, convert it to a string. Note:
// typeof null does not produce 'null'. The case is included here in
// the remote chance that this gets fixed someday.

          return String(value);

// If the type is 'object', we might be dealing with an object or an array or
// null.

      case 'object':

// Due to a specification blunder in ECMAScript, typeof null is 'object',
// so watch out for that case.

          if (!value) {
              return 'null';
          }

// Make an array to hold the partial results of stringifying this object value.

          gap += indent;
          partial = [];

// Is the value an array?

          if (Object.prototype.toString.apply(value) === '[object Array]') {

// The value is an array. Stringify every element. Use null as a placeholder
// for non-JSON values.

              length = value.length;
              for (i = 0; i < length; i += 1) {
                  partial[i] = str(i, value) || 'null';
              }

// Join all of the elements together, separated with commas, and wrap them in
// brackets.

              v = partial.length === 0 ? '[]' : gap ?
                  '[\n' + gap + partial.join(',\n' + gap) + '\n' + mind + ']' :
                  '[' + partial.join(',') + ']';
              gap = mind;
              return v;
          }

// If the replacer is an array, use it to select the members to be stringified.

          if (rep && typeof rep === 'object') {
              length = rep.length;
              for (i = 0; i < length; i += 1) {
                  if (typeof rep[i] === 'string') {
                      k = rep[i];
                      v = str(k, value);
                      if (v) {
                          partial.push(quote(k) + (gap ? ': ' : ':') + v);
                      }
                  }
              }
          } else {

// Otherwise, iterate through all of the keys in the object.

              for (k in value) {
                  if (Object.prototype.hasOwnProperty.call(value, k)) {
                      v = str(k, value);
                      if (v) {
                          partial.push(quote(k) + (gap ? ': ' : ':') + v);
                      }
                  }
              }
          }

// Join all of the member texts together, separated with commas,
// and wrap them in braces.

          v = partial.length === 0 ? '{}' : gap ?
              '{\n' + gap + partial.join(',\n' + gap) + '\n' + mind + '}' :
              '{' + partial.join(',') + '}';
          gap = mind;
          return v;
      }
  }

// If the JSON object does not yet have a stringify method, give it one.

  JSON.stringify = function (value, replacer, space) {

// The stringify method takes a value and an optional replacer, and an optional
// space parameter, and returns a JSON text. The replacer can be a function
// that can replace values, or an array of strings that will select the keys.
// A default replacer method can be provided. Use of the space parameter can
// produce text that is more easily readable.

      var i;
      gap = '';
      indent = '';

// If the space parameter is a number, make an indent string containing that
// many spaces.

      if (typeof space === 'number') {
          for (i = 0; i < space; i += 1) {
              indent += ' ';
          }

// If the space parameter is a string, it will be used as the indent string.

      } else if (typeof space === 'string') {
          indent = space;
      }

// If there is a replacer, it must be a function or an array.
// Otherwise, throw an error.

      rep = replacer;
      if (replacer && typeof replacer !== 'function' &&
              (typeof replacer !== 'object' ||
              typeof replacer.length !== 'number')) {
          throw new Error('JSON.stringify');
      }

// Make a fake root object containing our value under the key of ''.
// Return the result of stringifying the value.

      return str('', {'': value});
  };

// If the JSON object does not yet have a parse method, give it one.

  JSON.parse = function (text, reviver) {
  // The parse method takes a text and an optional reviver function, and returns
  // a JavaScript value if the text is a valid JSON text.

      var j;

      function walk(holder, key) {

  // The walk method is used to recursively walk the resulting structure so
  // that modifications can be made.

          var k, v, value = holder[key];
          if (value && typeof value === 'object') {
              for (k in value) {
                  if (Object.prototype.hasOwnProperty.call(value, k)) {
                      v = walk(value, k);
                      if (v !== undefined) {
                          value[k] = v;
                      } else {
                          delete value[k];
                      }
                  }
              }
          }
          return reviver.call(holder, key, value);
      }


  // Parsing happens in four stages. In the first stage, we replace certain
  // Unicode characters with escape sequences. JavaScript handles many characters
  // incorrectly, either silently deleting them, or treating them as line endings.

      text = String(text);
      cx.lastIndex = 0;
      if (cx.test(text)) {
          text = text.replace(cx, function (a) {
              return '\\u' +
                  ('0000' + a.charCodeAt(0).toString(16)).slice(-4);
          });
      }

  // In the second stage, we run the text against regular expressions that look
  // for non-JSON patterns. We are especially concerned with '()' and 'new'
  // because they can cause invocation, and '=' because it can cause mutation.
  // But just to be safe, we want to reject all unexpected forms.

  // We split the second stage into 4 regexp operations in order to work around
  // crippling inefficiencies in IE's and Safari's regexp engines. First we
  // replace the JSON backslash pairs with '@' (a non-JSON character). Second, we
  // replace all simple value tokens with ']' characters. Third, we delete all
  // open brackets that follow a colon or comma or that begin the text. Finally,
  // we look to see that the remaining characters are only whitespace or ']' or
  // ',' or ':' or '{' or '}'. If that is so, then the text is safe for eval.

      if (/^[\],:{}\s]*$/
              .test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, '@')
                  .replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, ']')
                  .replace(/(?:^|:|,)(?:\s*\[)+/g, ''))) {

  // In the third stage we use the eval function to compile the text into a
  // JavaScript structure. The '{' operator is subject to a syntactic ambiguity
  // in JavaScript: it can begin a block or an object literal. We wrap the text
  // in parens to eliminate the ambiguity.

          j = eval('(' + text + ')');

  // In the optional fourth stage, we recursively walk the new structure, passing
  // each name/value pair to a reviver function for possible transformation.

          return typeof reviver === 'function' ?
              walk({'': j}, '') : j;
      }

  // If the text is not JSON parseable, then a SyntaxError is thrown.

      throw new SyntaxError('JSON.parse');
  };

})(
    'undefined' != typeof io ? io : module.exports
  , typeof JSON !== 'undefined' ? JSON : undefined
);

/**
 * socket.io
 * Copyright(c) 2011 LearnBoost <dev@learnboost.com>
 * MIT Licensed
 */

(function (exports, io) {

  /**
   * Parser namespace.
   *
   * @namespace
   */

  var parser = exports.parser = {};

  /**
   * Packet types.
   */

  var packets = parser.packets = [
      'disconnect'
    , 'connect'
    , 'heartbeat'
    , 'message'
    , 'json'
    , 'event'
    , 'ack'
    , 'error'
    , 'noop'
  ];

  /**
   * Errors reasons.
   */

  var reasons = parser.reasons = [
      'transport not supported'
    , 'client not handshaken'
    , 'unauthorized'
  ];

  /**
   * Errors advice.
   */

  var advice = parser.advice = [
      'reconnect'
  ];

  /**
   * Shortcuts.
   */

  var JSON = io.JSON
    , indexOf = io.util.indexOf;

  /**
   * Encodes a packet.
   *
   * @api private
   */

  parser.encodePacket = function (packet) {
    var type = indexOf(packets, packet.type)
      , id = packet.id || ''
      , endpoint = packet.endpoint || ''
      , ack = packet.ack
      , data = null;

    switch (packet.type) {
      case 'error':
        var reason = packet.reason ? indexOf(reasons, packet.reason) : ''
          , adv = packet.advice ? indexOf(advice, packet.advice) : '';

        if (reason !== '' || adv !== '')
          data = reason + (adv !== '' ? ('+' + adv) : '');

        break;

      case 'message':
        if (packet.data !== '')
          data = packet.data;
        break;

      case 'event':
        var ev = { name: packet.name };

        if (packet.args && packet.args.length) {
          ev.args = packet.args;
        }

        data = JSON.stringify(ev);
        break;

      case 'json':
        data = JSON.stringify(packet.data);
        break;

      case 'connect':
        if (packet.qs)
          data = packet.qs;
        break;

      case 'ack':
        data = packet.ackId
          + (packet.args && packet.args.length
              ? '+' + JSON.stringify(packet.args) : '');
        break;
    }

    // construct packet with required fragments
    var encoded = [
        type
      , id + (ack == 'data' ? '+' : '')
      , endpoint
    ];

    // data fragment is optional
    if (data !== null && data !== undefined)
      encoded.push(data);

    return encoded.join(':');
  };

  /**
   * Encodes multiple messages (payload).
   *
   * @param {Array} messages
   * @api private
   */

  parser.encodePayload = function (packets) {
    var decoded = '';

    if (packets.length == 1)
      return packets[0];

    for (var i = 0, l = packets.length; i < l; i++) {
      var packet = packets[i];
      decoded += '\ufffd' + packet.length + '\ufffd' + packets[i];
    }

    return decoded;
  };

  /**
   * Decodes a packet
   *
   * @api private
   */

  var regexp = /([^:]+):([0-9]+)?(\+)?:([^:]+)?:?([\s\S]*)?/;

  parser.decodePacket = function (data) {
    var pieces = data.match(regexp);

    if (!pieces) return {};

    var id = pieces[2] || ''
      , data = pieces[5] || ''
      , packet = {
            type: packets[pieces[1]]
          , endpoint: pieces[4] || ''
        };

    // whether we need to acknowledge the packet
    if (id) {
      packet.id = id;
      if (pieces[3])
        packet.ack = 'data';
      else
        packet.ack = true;
    }

    // handle different packet types
    switch (packet.type) {
      case 'error':
        var pieces = data.split('+');
        packet.reason = reasons[pieces[0]] || '';
        packet.advice = advice[pieces[1]] || '';
        break;

      case 'message':
        packet.data = data || '';
        break;

      case 'event':
        try {
          var opts = JSON.parse(data);
          packet.name = opts.name;
          packet.args = opts.args;
        } catch (e) { }

        packet.args = packet.args || [];
        break;

      case 'json':
        try {
          packet.data = JSON.parse(data);
        } catch (e) { }
        break;

      case 'connect':
        packet.qs = data || '';
        break;

      case 'ack':
        var pieces = data.match(/^([0-9]+)(\+)?(.*)/);
        if (pieces) {
          packet.ackId = pieces[1];
          packet.args = [];

          if (pieces[3]) {
            try {
              packet.args = pieces[3] ? JSON.parse(pieces[3]) : [];
            } catch (e) { }
          }
        }
        break;

      case 'disconnect':
      case 'heartbeat':
        break;
    };

    return packet;
  };

  /**
   * Decodes data payload. Detects multiple messages
   *
   * @return {Array} messages
   * @api public
   */

  parser.decodePayload = function (data) {
    // IE doesn't like data[i] for unicode chars, charAt works fine
    if (data.charAt(0) == '\ufffd') {
      var ret = [];

      for (var i = 1, length = ''; i < data.length; i++) {
        if (data.charAt(i) == '\ufffd') {
          ret.push(parser.decodePacket(data.substr(i + 1).substr(0, length)));
          i += Number(length) + 1;
          length = '';
        } else {
          length += data.charAt(i);
        }
      }

      return ret;
    } else {
      return [parser.decodePacket(data)];
    }
  };

})(
    'undefined' != typeof io ? io : module.exports
  , 'undefined' != typeof io ? io : module.parent.exports
);
/**
 * socket.io
 * Copyright(c) 2011 LearnBoost <dev@learnboost.com>
 * MIT Licensed
 */

(function (exports, io) {

  /**
   * Expose constructor.
   */

  exports.Transport = Transport;

  /**
   * This is the transport template for all supported transport methods.
   *
   * @constructor
   * @api public
   */

  function Transport (socket, sessid) {
    this.socket = socket;
    this.sessid = sessid;
  };

  /**
   * Apply EventEmitter mixin.
   */

  io.util.mixin(Transport, io.EventEmitter);


  /**
   * Indicates whether heartbeats is enabled for this transport
   *
   * @api private
   */

  Transport.prototype.heartbeats = function () {
    return true;
  };

  /**
   * Handles the response from the server. When a new response is received
   * it will automatically update the timeout, decode the message and
   * forwards the response to the onMessage function for further processing.
   *
   * @param {String} data Response from the server.
   * @api private
   */

  Transport.prototype.onData = function (data) {
    this.clearCloseTimeout();

    // If the connection in currently open (or in a reopening state) reset the close
    // timeout since we have just received data. This check is necessary so
    // that we don't reset the timeout on an explicitly disconnected connection.
    if (this.socket.connected || this.socket.connecting || this.socket.reconnecting) {
      this.setCloseTimeout();
    }

    if (data !== '') {
      // todo: we should only do decodePayload for xhr transports
      var msgs = io.parser.decodePayload(data);

      if (msgs && msgs.length) {
        for (var i = 0, l = msgs.length; i < l; i++) {
          this.onPacket(msgs[i]);
        }
      }
    }

    return this;
  };

  /**
   * Handles packets.
   *
   * @api private
   */

  Transport.prototype.onPacket = function (packet) {
    this.socket.setHeartbeatTimeout();

    if (packet.type == 'heartbeat') {
      return this.onHeartbeat();
    }

    if (packet.type == 'connect' && packet.endpoint == '') {
      this.onConnect();
    }

    if (packet.type == 'error' && packet.advice == 'reconnect') {
      this.isOpen = false;
    }

    this.socket.onPacket(packet);

    return this;
  };

  /**
   * Sets close timeout
   *
   * @api private
   */

  Transport.prototype.setCloseTimeout = function () {
    if (!this.closeTimeout) {
      var self = this;

      this.closeTimeout = setTimeout(function () {
        self.onDisconnect();
      }, this.socket.closeTimeout);
    }
  };

  /**
   * Called when transport disconnects.
   *
   * @api private
   */

  Transport.prototype.onDisconnect = function () {
    if (this.isOpen) this.close();
    this.clearTimeouts();
    this.socket.onDisconnect();
    return this;
  };

  /**
   * Called when transport connects
   *
   * @api private
   */

  Transport.prototype.onConnect = function () {
    this.socket.onConnect();
    return this;
  };

  /**
   * Clears close timeout
   *
   * @api private
   */

  Transport.prototype.clearCloseTimeout = function () {
    if (this.closeTimeout) {
      clearTimeout(this.closeTimeout);
      this.closeTimeout = null;
    }
  };

  /**
   * Clear timeouts
   *
   * @api private
   */

  Transport.prototype.clearTimeouts = function () {
    this.clearCloseTimeout();

    if (this.reopenTimeout) {
      clearTimeout(this.reopenTimeout);
    }
  };

  /**
   * Sends a packet
   *
   * @param {Object} packet object.
   * @api private
   */

  Transport.prototype.packet = function (packet) {
    this.send(io.parser.encodePacket(packet));
  };

  /**
   * Send the received heartbeat message back to server. So the server
   * knows we are still connected.
   *
   * @param {String} heartbeat Heartbeat response from the server.
   * @api private
   */

  Transport.prototype.onHeartbeat = function (heartbeat) {
    this.packet({ type: 'heartbeat' });
  };

  /**
   * Called when the transport opens.
   *
   * @api private
   */

  Transport.prototype.onOpen = function () {
    this.isOpen = true;
    this.clearCloseTimeout();
    this.socket.onOpen();
  };

  /**
   * Notifies the base when the connection with the Socket.IO server
   * has been disconnected.
   *
   * @api private
   */

  Transport.prototype.onClose = function () {
    var self = this;

    /* FIXME: reopen delay causing a infinit loop
    this.reopenTimeout = setTimeout(function () {
      self.open();
    }, this.socket.options['reopen delay']);*/

    this.isOpen = false;
    this.socket.onClose();
    this.onDisconnect();
  };

  /**
   * Generates a connection url based on the Socket.IO URL Protocol.
   * See <https://github.com/learnboost/socket.io-node/> for more details.
   *
   * @returns {String} Connection url
   * @api private
   */

  Transport.prototype.prepareUrl = function () {
    var options = this.socket.options;

    return this.scheme() + '://'
      + options.host + ':' + options.port + '/'
      + options.resource + '/' + io.protocol
      + '/' + this.name + '/' + this.sessid;
  };

  /**
   * Checks if the transport is ready to start a connection.
   *
   * @param {Socket} socket The socket instance that needs a transport
   * @param {Function} fn The callback
   * @api private
   */

  Transport.prototype.ready = function (socket, fn) {
    fn.call(this);
  };
})(
    'undefined' != typeof io ? io : module.exports
  , 'undefined' != typeof io ? io : module.parent.exports
);
/**
 * socket.io
 * Copyright(c) 2011 LearnBoost <dev@learnboost.com>
 * MIT Licensed
 */

(function (exports, io, global) {

  /**
   * Expose constructor.
   */

  exports.Socket = Socket;

  /**
   * Create a new `Socket.IO client` which can establish a persistent
   * connection with a Socket.IO enabled server.
   *
   * @api public
   */

  function Socket (options) {
    this.options = {
        port: 80
      , secure: false
      , document: 'document' in global ? document : false
      , resource: 'socket.io'
      , transports: io.transports
      , 'connect timeout': 10000
      , 'try multiple transports': true
      , 'reconnect': true
      , 'reconnection delay': 500
      , 'reconnection limit': Infinity
      , 'reopen delay': 3000
      , 'max reconnection attempts': 10
      , 'sync disconnect on unload': false
      , 'auto connect': true
      , 'flash policy port': 10843
      , 'manualFlush': false
    };

    io.util.merge(this.options, options);

    this.connected = false;
    this.open = false;
    this.connecting = false;
    this.reconnecting = false;
    this.namespaces = {};
    this.buffer = [];
    this.doBuffer = false;

    if (this.options['sync disconnect on unload'] &&
        (!this.isXDomain() || io.util.ua.hasCORS)) {
      var self = this;
      io.util.on(global, 'beforeunload', function () {
        self.disconnectSync();
      }, false);
    }

    if (this.options['auto connect']) {
      this.connect();
    }
};

  /**
   * Apply EventEmitter mixin.
   */

  io.util.mixin(Socket, io.EventEmitter);

  /**
   * Returns a namespace listener/emitter for this socket
   *
   * @api public
   */

  Socket.prototype.of = function (name) {
    if (!this.namespaces[name]) {
      this.namespaces[name] = new io.SocketNamespace(this, name);

      if (name !== '') {
        this.namespaces[name].packet({ type: 'connect' });
      }
    }

    return this.namespaces[name];
  };

  /**
   * Emits the given event to the Socket and all namespaces
   *
   * @api private
   */

  Socket.prototype.publish = function () {
    this.emit.apply(this, arguments);

    var nsp;

    for (var i in this.namespaces) {
      if (this.namespaces.hasOwnProperty(i)) {
        nsp = this.of(i);
        nsp.$emit.apply(nsp, arguments);
      }
    }
  };

  /**
   * Performs the handshake
   *
   * @api private
   */

  function empty () { };

  Socket.prototype.handshake = function (fn) {
    var self = this
      , options = this.options;

    function complete (data) {
      if (data instanceof Error) {
        self.connecting = false;
        self.onError(data.message);
      } else {
        fn.apply(null, data.split(':'));
      }
    };

    var url = [
          'http' + (options.secure ? 's' : '') + ':/'
        , options.host + ':' + options.port
        , options.resource
        , io.protocol
        , io.util.query(this.options.query, 't=' + +new Date)
      ].join('/');

    if (this.isXDomain() && !io.util.ua.hasCORS) {
      var insertAt = document.getElementsByTagName('script')[0]
        , script = document.createElement('script');

      script.src = url + '&jsonp=' + io.j.length;
      insertAt.parentNode.insertBefore(script, insertAt);

      io.j.push(function (data) {
        complete(data);
        script.parentNode.removeChild(script);
      });
    } else {
      var xhr = io.util.request();

      xhr.open('GET', url, true);
      if (this.isXDomain()) {
        xhr.withCredentials = true;
      }
      xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
          xhr.onreadystatechange = empty;

          if (xhr.status == 200) {
            complete(xhr.responseText);
          } else if (xhr.status == 403) {
            self.onError(xhr.responseText);
          } else {
            self.connecting = false;            
            !self.reconnecting && self.onError(xhr.responseText);
          }
        }
      };
      xhr.send(null);
    }
  };

  /**
   * Find an available transport based on the options supplied in the constructor.
   *
   * @api private
   */

  Socket.prototype.getTransport = function (override) {
    var transports = override || this.transports, match;

    for (var i = 0, transport; transport = transports[i]; i++) {
      if (io.Transport[transport]
        && io.Transport[transport].check(this)
        && (!this.isXDomain() || io.Transport[transport].xdomainCheck(this))) {
        return new io.Transport[transport](this, this.sessionid);
      }
    }

    return null;
  };

  /**
   * Connects to the server.
   *
   * @param {Function} [fn] Callback.
   * @returns {io.Socket}
   * @api public
   */

  Socket.prototype.connect = function (fn) {
    if (this.connecting) {
      return this;
    }

    var self = this;
    self.connecting = true;
    
    this.handshake(function (sid, heartbeat, close, transports) {
      self.sessionid = sid;
      self.closeTimeout = close * 1000;
      self.heartbeatTimeout = heartbeat * 1000;
      if(!self.transports)
          self.transports = self.origTransports = (transports ? io.util.intersect(
              transports.split(',')
            , self.options.transports
          ) : self.options.transports);

      self.setHeartbeatTimeout();

      function connect (transports){
        if (self.transport) self.transport.clearTimeouts();

        self.transport = self.getTransport(transports);
        if (!self.transport) return self.publish('connect_failed');

        // once the transport is ready
        self.transport.ready(self, function () {
          self.connecting = true;
          self.publish('connecting', self.transport.name);
          self.transport.open();

          if (self.options['connect timeout']) {
            self.connectTimeoutTimer = setTimeout(function () {
              if (!self.connected) {
                self.connecting = false;

                if (self.options['try multiple transports']) {
                  var remaining = self.transports;

                  while (remaining.length > 0 && remaining.splice(0,1)[0] !=
                         self.transport.name) {}

                    if (remaining.length){
                      connect(remaining);
                    } else {
                      self.publish('connect_failed');
                    }
                }
              }
            }, self.options['connect timeout']);
          }
        });
      }

      connect(self.transports);

      self.once('connect', function (){
        clearTimeout(self.connectTimeoutTimer);

        fn && typeof fn == 'function' && fn();
      });
    });

    return this;
  };

  /**
   * Clears and sets a new heartbeat timeout using the value given by the
   * server during the handshake.
   *
   * @api private
   */

  Socket.prototype.setHeartbeatTimeout = function () {
    clearTimeout(this.heartbeatTimeoutTimer);
    if(this.transport && !this.transport.heartbeats()) return;

    var self = this;
    this.heartbeatTimeoutTimer = setTimeout(function () {
      self.transport.onClose();
    }, this.heartbeatTimeout);
  };

  /**
   * Sends a message.
   *
   * @param {Object} data packet.
   * @returns {io.Socket}
   * @api public
   */

  Socket.prototype.packet = function (data) {
    if (this.connected && !this.doBuffer) {
      this.transport.packet(data);
    } else {
      this.buffer.push(data);
    }

    return this;
  };

  /**
   * Sets buffer state
   *
   * @api private
   */

  Socket.prototype.setBuffer = function (v) {
    this.doBuffer = v;

    if (!v && this.connected && this.buffer.length) {
      if (!this.options['manualFlush']) {
        this.flushBuffer();
      }
    }
  };

  /**
   * Flushes the buffer data over the wire.
   * To be invoked manually when 'manualFlush' is set to true.
   *
   * @api public
   */

  Socket.prototype.flushBuffer = function() {
    this.transport.payload(this.buffer);
    this.buffer = [];
  };
  

  /**
   * Disconnect the established connect.
   *
   * @returns {io.Socket}
   * @api public
   */

  Socket.prototype.disconnect = function () {
    if (this.connected || this.connecting) {
      if (this.open) {
        this.of('').packet({ type: 'disconnect' });
      }

      // handle disconnection immediately
      this.onDisconnect('booted');
    }

    return this;
  };

  /**
   * Disconnects the socket with a sync XHR.
   *
   * @api private
   */

  Socket.prototype.disconnectSync = function () {
    // ensure disconnection
    var xhr = io.util.request();
    var uri = [
        'http' + (this.options.secure ? 's' : '') + ':/'
      , this.options.host + ':' + this.options.port
      , this.options.resource
      , io.protocol
      , ''
      , this.sessionid
    ].join('/') + '/?disconnect=1';

    xhr.open('GET', uri, false);
    xhr.send(null);

    // handle disconnection immediately
    this.onDisconnect('booted');
  };

  /**
   * Check if we need to use cross domain enabled transports. Cross domain would
   * be a different port or different domain name.
   *
   * @returns {Boolean}
   * @api private
   */

  Socket.prototype.isXDomain = function () {

    var port = global.location.port ||
      ('https:' == global.location.protocol ? 443 : 80);

    return this.options.host !== global.location.hostname 
      || this.options.port != port;
  };

  /**
   * Called upon handshake.
   *
   * @api private
   */

  Socket.prototype.onConnect = function () {
    if (!this.connected) {
      this.connected = true;
      this.connecting = false;
      if (!this.doBuffer) {
        // make sure to flush the buffer
        this.setBuffer(false);
      }
      this.emit('connect');
    }
  };

  /**
   * Called when the transport opens
   *
   * @api private
   */

  Socket.prototype.onOpen = function () {
    this.open = true;
  };

  /**
   * Called when the transport closes.
   *
   * @api private
   */

  Socket.prototype.onClose = function () {
    this.open = false;
    clearTimeout(this.heartbeatTimeoutTimer);
  };

  /**
   * Called when the transport first opens a connection
   *
   * @param text
   */

  Socket.prototype.onPacket = function (packet) {
    this.of(packet.endpoint).onPacket(packet);
  };

  /**
   * Handles an error.
   *
   * @api private
   */

  Socket.prototype.onError = function (err) {
    if (err && err.advice) {
      if (err.advice === 'reconnect' && (this.connected || this.connecting)) {
        this.disconnect();
        if (this.options.reconnect) {
          this.reconnect();
        }
      }
    }

    this.publish('error', err && err.reason ? err.reason : err);
  };

  /**
   * Called when the transport disconnects.
   *
   * @api private
   */

  Socket.prototype.onDisconnect = function (reason) {
    var wasConnected = this.connected
      , wasConnecting = this.connecting;

    this.connected = false;
    this.connecting = false;
    this.open = false;

    if (wasConnected || wasConnecting) {
      this.transport.close();
      this.transport.clearTimeouts();
      if (wasConnected) {
        this.publish('disconnect', reason);

        if ('booted' != reason && this.options.reconnect && !this.reconnecting) {
          this.reconnect();
        }
      }
    }
  };

  /**
   * Called upon reconnection.
   *
   * @api private
   */

  Socket.prototype.reconnect = function () {
    this.reconnecting = true;
    this.reconnectionAttempts = 0;
    this.reconnectionDelay = this.options['reconnection delay'];

    var self = this
      , maxAttempts = this.options['max reconnection attempts']
      , tryMultiple = this.options['try multiple transports']
      , limit = this.options['reconnection limit'];

    function reset () {
      if (self.connected) {
        for (var i in self.namespaces) {
          if (self.namespaces.hasOwnProperty(i) && '' !== i) {
              self.namespaces[i].packet({ type: 'connect' });
          }
        }
        self.publish('reconnect', self.transport.name, self.reconnectionAttempts);
      }

      clearTimeout(self.reconnectionTimer);

      self.removeListener('connect_failed', maybeReconnect);
      self.removeListener('connect', maybeReconnect);

      self.reconnecting = false;

      delete self.reconnectionAttempts;
      delete self.reconnectionDelay;
      delete self.reconnectionTimer;
      delete self.redoTransports;

      self.options['try multiple transports'] = tryMultiple;
    };

    function maybeReconnect () {
      if (!self.reconnecting) {
        return;
      }

      if (self.connected) {
        return reset();
      };

      if (self.connecting && self.reconnecting) {
        return self.reconnectionTimer = setTimeout(maybeReconnect, 1000);
      }

      if (self.reconnectionAttempts++ >= maxAttempts) {
        if (!self.redoTransports) {
          self.on('connect_failed', maybeReconnect);
          self.options['try multiple transports'] = true;
          self.transports = self.origTransports;
          self.transport = self.getTransport();
          self.redoTransports = true;
          self.connect();
        } else {
          self.publish('reconnect_failed');
          reset();
        }
      } else {
        if (self.reconnectionDelay < limit) {
          self.reconnectionDelay *= 2; // exponential back off
        }

        self.connect();
        self.publish('reconnecting', self.reconnectionDelay, self.reconnectionAttempts);
        self.reconnectionTimer = setTimeout(maybeReconnect, self.reconnectionDelay);
      }
    };

    this.options['try multiple transports'] = false;
    this.reconnectionTimer = setTimeout(maybeReconnect, this.reconnectionDelay);

    this.on('connect', maybeReconnect);
  };

})(
    'undefined' != typeof io ? io : module.exports
  , 'undefined' != typeof io ? io : module.parent.exports
  , this
);
/**
 * socket.io
 * Copyright(c) 2011 LearnBoost <dev@learnboost.com>
 * MIT Licensed
 */

(function (exports, io) {

  /**
   * Expose constructor.
   */

  exports.SocketNamespace = SocketNamespace;

  /**
   * Socket namespace constructor.
   *
   * @constructor
   * @api public
   */

  function SocketNamespace (socket, name) {
    this.socket = socket;
    this.name = name || '';
    this.flags = {};
    this.json = new Flag(this, 'json');
    this.ackPackets = 0;
    this.acks = {};
  };

  /**
   * Apply EventEmitter mixin.
   */

  io.util.mixin(SocketNamespace, io.EventEmitter);

  /**
   * Copies emit since we override it
   *
   * @api private
   */

  SocketNamespace.prototype.$emit = io.EventEmitter.prototype.emit;

  /**
   * Creates a new namespace, by proxying the request to the socket. This
   * allows us to use the synax as we do on the server.
   *
   * @api public
   */

  SocketNamespace.prototype.of = function () {
    return this.socket.of.apply(this.socket, arguments);
  };

  /**
   * Sends a packet.
   *
   * @api private
   */

  SocketNamespace.prototype.packet = function (packet) {
    packet.endpoint = this.name;
    this.socket.packet(packet);
    this.flags = {};
    return this;
  };

  /**
   * Sends a message
   *
   * @api public
   */

  SocketNamespace.prototype.send = function (data, fn) {
    var packet = {
        type: this.flags.json ? 'json' : 'message'
      , data: data
    };

    if ('function' == typeof fn) {
      packet.id = ++this.ackPackets;
      packet.ack = true;
      this.acks[packet.id] = fn;
    }

    return this.packet(packet);
  };

  /**
   * Emits an event
   *
   * @api public
   */
  
  SocketNamespace.prototype.emit = function (name) {
    var args = Array.prototype.slice.call(arguments, 1)
      , lastArg = args[args.length - 1]
      , packet = {
            type: 'event'
          , name: name
        };

    if ('function' == typeof lastArg) {
      packet.id = ++this.ackPackets;
      packet.ack = 'data';
      this.acks[packet.id] = lastArg;
      args = args.slice(0, args.length - 1);
    }

    packet.args = args;

    return this.packet(packet);
  };

  /**
   * Disconnects the namespace
   *
   * @api private
   */

  SocketNamespace.prototype.disconnect = function () {
    if (this.name === '') {
      this.socket.disconnect();
    } else {
      this.packet({ type: 'disconnect' });
      this.$emit('disconnect');
    }

    return this;
  };

  /**
   * Handles a packet
   *
   * @api private
   */

  SocketNamespace.prototype.onPacket = function (packet) {
    var self = this;

    function ack () {
      self.packet({
          type: 'ack'
        , args: io.util.toArray(arguments)
        , ackId: packet.id
      });
    };

    switch (packet.type) {
      case 'connect':
        this.$emit('connect');
        break;

      case 'disconnect':
        if (this.name === '') {
          this.socket.onDisconnect(packet.reason || 'booted');
        } else {
          this.$emit('disconnect', packet.reason);
        }
        break;

      case 'message':
      case 'json':
        var params = ['message', packet.data];

        if (packet.ack == 'data') {
          params.push(ack);
        } else if (packet.ack) {
          this.packet({ type: 'ack', ackId: packet.id });
        }

        this.$emit.apply(this, params);
        break;

      case 'event':
        var params = [packet.name].concat(packet.args);

        if (packet.ack == 'data')
          params.push(ack);

        this.$emit.apply(this, params);
        break;

      case 'ack':
        if (this.acks[packet.ackId]) {
          this.acks[packet.ackId].apply(this, packet.args);
          delete this.acks[packet.ackId];
        }
        break;

      case 'error':
        if (packet.advice){
          this.socket.onError(packet);
        } else {
          if (packet.reason == 'unauthorized') {
            this.$emit('connect_failed', packet.reason);
          } else {
            this.$emit('error', packet.reason);
          }
        }
        break;
    }
  };

  /**
   * Flag interface.
   *
   * @api private
   */

  function Flag (nsp, name) {
    this.namespace = nsp;
    this.name = name;
  };

  /**
   * Send a message
   *
   * @api public
   */

  Flag.prototype.send = function () {
    this.namespace.flags[this.name] = true;
    this.namespace.send.apply(this.namespace, arguments);
  };

  /**
   * Emit an event
   *
   * @api public
   */

  Flag.prototype.emit = function () {
    this.namespace.flags[this.name] = true;
    this.namespace.emit.apply(this.namespace, arguments);
  };

})(
    'undefined' != typeof io ? io : module.exports
  , 'undefined' != typeof io ? io : module.parent.exports
);

/**
 * socket.io
 * Copyright(c) 2011 LearnBoost <dev@learnboost.com>
 * MIT Licensed
 */

(function (exports, io, global) {

  /**
   * Expose constructor.
   */

  exports.websocket = WS;

  /**
   * The WebSocket transport uses the HTML5 WebSocket API to establish an
   * persistent connection with the Socket.IO server. This transport will also
   * be inherited by the FlashSocket fallback as it provides a API compatible
   * polyfill for the WebSockets.
   *
   * @constructor
   * @extends {io.Transport}
   * @api public
   */

  function WS (socket) {
    io.Transport.apply(this, arguments);
  };

  /**
   * Inherits from Transport.
   */

  io.util.inherit(WS, io.Transport);

  /**
   * Transport name
   *
   * @api public
   */

  WS.prototype.name = 'websocket';

  /**
   * Initializes a new `WebSocket` connection with the Socket.IO server. We attach
   * all the appropriate listeners to handle the responses from the server.
   *
   * @returns {Transport}
   * @api public
   */

  WS.prototype.open = function () {
    var query = io.util.query(this.socket.options.query)
      , self = this
      , Socket


    if (!Socket) {
      Socket = global.MozWebSocket || global.WebSocket;
    }

    this.websocket = new Socket(this.prepareUrl() + query);

    this.websocket.onopen = function () {
      self.onOpen();
      self.socket.setBuffer(false);
    };
    this.websocket.onmessage = function (ev) {
      self.onData(ev.data);
    };
    this.websocket.onclose = function () {
      self.onClose();
      self.socket.setBuffer(true);
    };
    this.websocket.onerror = function (e) {
      self.onError(e);
    };

    return this;
  };

  /**
   * Send a message to the Socket.IO server. The message will automatically be
   * encoded in the correct message format.
   *
   * @returns {Transport}
   * @api public
   */

  // Do to a bug in the current IDevices browser, we need to wrap the send in a 
  // setTimeout, when they resume from sleeping the browser will crash if 
  // we don't allow the browser time to detect the socket has been closed
  if (io.util.ua.iDevice) {
    WS.prototype.send = function (data) {
      var self = this;
      setTimeout(function() {
         self.websocket.send(data);
      },0);
      return this;
    };
  } else {
    WS.prototype.send = function (data) {
      this.websocket.send(data);
      return this;
    };
  }

  /**
   * Payload
   *
   * @api private
   */

  WS.prototype.payload = function (arr) {
    for (var i = 0, l = arr.length; i < l; i++) {
      this.packet(arr[i]);
    }
    return this;
  };

  /**
   * Disconnect the established `WebSocket` connection.
   *
   * @returns {Transport}
   * @api public
   */

  WS.prototype.close = function () {
    this.websocket.close();
    return this;
  };

  /**
   * Handle the errors that `WebSocket` might be giving when we
   * are attempting to connect or send messages.
   *
   * @param {Error} e The error.
   * @api private
   */

  WS.prototype.onError = function (e) {
    this.socket.onError(e);
  };

  /**
   * Returns the appropriate scheme for the URI generation.
   *
   * @api private
   */
  WS.prototype.scheme = function () {
    return this.socket.options.secure ? 'wss' : 'ws';
  };

  /**
   * Checks if the browser has support for native `WebSockets` and that
   * it's not the polyfill created for the FlashSocket transport.
   *
   * @return {Boolean}
   * @api public
   */

  WS.check = function () {
    return ('WebSocket' in global && !('__addTask' in WebSocket))
          || 'MozWebSocket' in global;
  };

  /**
   * Check if the `WebSocket` transport support cross domain communications.
   *
   * @returns {Boolean}
   * @api public
   */

  WS.xdomainCheck = function () {
    return true;
  };

  /**
   * Add the transport to your public io.transports array.
   *
   * @api private
   */

  io.transports.push('websocket');

})(
    'undefined' != typeof io ? io.Transport : module.exports
  , 'undefined' != typeof io ? io : module.parent.exports
  , this
);

/**
 * socket.io
 * Copyright(c) 2011 LearnBoost <dev@learnboost.com>
 * MIT Licensed
 */

(function (exports, io) {

  /**
   * Expose constructor.
   */

  exports.flashsocket = Flashsocket;

  /**
   * The FlashSocket transport. This is a API wrapper for the HTML5 WebSocket
   * specification. It uses a .swf file to communicate with the server. If you want
   * to serve the .swf file from a other server than where the Socket.IO script is
   * coming from you need to use the insecure version of the .swf. More information
   * about this can be found on the github page.
   *
   * @constructor
   * @extends {io.Transport.websocket}
   * @api public
   */

  function Flashsocket () {
    io.Transport.websocket.apply(this, arguments);
  };

  /**
   * Inherits from Transport.
   */

  io.util.inherit(Flashsocket, io.Transport.websocket);

  /**
   * Transport name
   *
   * @api public
   */

  Flashsocket.prototype.name = 'flashsocket';

  /**
   * Disconnect the established `FlashSocket` connection. This is done by adding a 
   * new task to the FlashSocket. The rest will be handled off by the `WebSocket` 
   * transport.
   *
   * @returns {Transport}
   * @api public
   */

  Flashsocket.prototype.open = function () {
    var self = this
      , args = arguments;

    WebSocket.__addTask(function () {
      io.Transport.websocket.prototype.open.apply(self, args);
    });
    return this;
  };
  
  /**
   * Sends a message to the Socket.IO server. This is done by adding a new
   * task to the FlashSocket. The rest will be handled off by the `WebSocket` 
   * transport.
   *
   * @returns {Transport}
   * @api public
   */

  Flashsocket.prototype.send = function () {
    var self = this, args = arguments;
    WebSocket.__addTask(function () {
      io.Transport.websocket.prototype.send.apply(self, args);
    });
    return this;
  };

  /**
   * Disconnects the established `FlashSocket` connection.
   *
   * @returns {Transport}
   * @api public
   */

  Flashsocket.prototype.close = function () {
    WebSocket.__tasks.length = 0;
    io.Transport.websocket.prototype.close.call(this);
    return this;
  };

  /**
   * The WebSocket fall back needs to append the flash container to the body
   * element, so we need to make sure we have access to it. Or defer the call
   * until we are sure there is a body element.
   *
   * @param {Socket} socket The socket instance that needs a transport
   * @param {Function} fn The callback
   * @api private
   */

  Flashsocket.prototype.ready = function (socket, fn) {
    function init () {
      var options = socket.options
        , port = options['flash policy port']
        , path = [
              'http' + (options.secure ? 's' : '') + ':/'
            , options.host + ':' + options.port
            , options.resource
            , 'static/flashsocket'
            , 'WebSocketMain' + (socket.isXDomain() ? 'Insecure' : '') + '.swf'
          ];

      // Only start downloading the swf file when the checked that this browser
      // actually supports it
      if (!Flashsocket.loaded) {
        if (typeof WEB_SOCKET_SWF_LOCATION === 'undefined') {
          // Set the correct file based on the XDomain settings
          WEB_SOCKET_SWF_LOCATION = path.join('/');
        }

        if (port !== 843) {
          WebSocket.loadFlashPolicyFile('xmlsocket://' + options.host + ':' + port);
        }

        WebSocket.__initialize();
        Flashsocket.loaded = true;
      }

      fn.call(self);
    }

    var self = this;
    if (document.body) return init();

    io.util.load(init);
  };

  /**
   * Check if the FlashSocket transport is supported as it requires that the Adobe
   * Flash Player plug-in version `10.0.0` or greater is installed. And also check if
   * the polyfill is correctly loaded.
   *
   * @returns {Boolean}
   * @api public
   */

  Flashsocket.check = function () {
    if (
        typeof WebSocket == 'undefined'
      || !('__initialize' in WebSocket) || !swfobject
    ) return false;

    return swfobject.getFlashPlayerVersion().major >= 10;
  };

  /**
   * Check if the FlashSocket transport can be used as cross domain / cross origin 
   * transport. Because we can't see which type (secure or insecure) of .swf is used
   * we will just return true.
   *
   * @returns {Boolean}
   * @api public
   */

  Flashsocket.xdomainCheck = function () {
    return true;
  };

  /**
   * Disable AUTO_INITIALIZATION
   */

  if (typeof window != 'undefined') {
    WEB_SOCKET_DISABLE_AUTO_INITIALIZATION = true;
  }

  /**
   * Add the transport to your public io.transports array.
   *
   * @api private
   */

  io.transports.push('flashsocket');
})(
    'undefined' != typeof io ? io.Transport : module.exports
  , 'undefined' != typeof io ? io : module.parent.exports
);
/*	SWFObject v2.2 <http://code.google.com/p/swfobject/> 
	is released under the MIT License <http://www.opensource.org/licenses/mit-license.php> 
*/
if ('undefined' != typeof window) {
var swfobject=function(){var D="undefined",r="object",S="Shockwave Flash",W="ShockwaveFlash.ShockwaveFlash",q="application/x-shockwave-flash",R="SWFObjectExprInst",x="onreadystatechange",O=window,j=document,t=navigator,T=false,U=[h],o=[],N=[],I=[],l,Q,E,B,J=false,a=false,n,G,m=true,M=function(){var aa=typeof j.getElementById!=D&&typeof j.getElementsByTagName!=D&&typeof j.createElement!=D,ah=t.userAgent.toLowerCase(),Y=t.platform.toLowerCase(),ae=Y?/win/.test(Y):/win/.test(ah),ac=Y?/mac/.test(Y):/mac/.test(ah),af=/webkit/.test(ah)?parseFloat(ah.replace(/^.*webkit\/(\d+(\.\d+)?).*$/,"$1")):false,X=!+"\v1",ag=[0,0,0],ab=null;if(typeof t.plugins!=D&&typeof t.plugins[S]==r){ab=t.plugins[S].description;if(ab&&!(typeof t.mimeTypes!=D&&t.mimeTypes[q]&&!t.mimeTypes[q].enabledPlugin)){T=true;X=false;ab=ab.replace(/^.*\s+(\S+\s+\S+$)/,"$1");ag[0]=parseInt(ab.replace(/^(.*)\..*$/,"$1"),10);ag[1]=parseInt(ab.replace(/^.*\.(.*)\s.*$/,"$1"),10);ag[2]=/[a-zA-Z]/.test(ab)?parseInt(ab.replace(/^.*[a-zA-Z]+(.*)$/,"$1"),10):0}}else{if(typeof O[(['Active'].concat('Object').join('X'))]!=D){try{var ad=new window[(['Active'].concat('Object').join('X'))](W);if(ad){ab=ad.GetVariable("$version");if(ab){X=true;ab=ab.split(" ")[1].split(",");ag=[parseInt(ab[0],10),parseInt(ab[1],10),parseInt(ab[2],10)]}}}catch(Z){}}}return{w3:aa,pv:ag,wk:af,ie:X,win:ae,mac:ac}}(),k=function(){if(!M.w3){return}if((typeof j.readyState!=D&&j.readyState=="complete")||(typeof j.readyState==D&&(j.getElementsByTagName("body")[0]||j.body))){f()}if(!J){if(typeof j.addEventListener!=D){j.addEventListener("DOMContentLoaded",f,false)}if(M.ie&&M.win){j.attachEvent(x,function(){if(j.readyState=="complete"){j.detachEvent(x,arguments.callee);f()}});if(O==top){(function(){if(J){return}try{j.documentElement.doScroll("left")}catch(X){setTimeout(arguments.callee,0);return}f()})()}}if(M.wk){(function(){if(J){return}if(!/loaded|complete/.test(j.readyState)){setTimeout(arguments.callee,0);return}f()})()}s(f)}}();function f(){if(J){return}try{var Z=j.getElementsByTagName("body")[0].appendChild(C("span"));Z.parentNode.removeChild(Z)}catch(aa){return}J=true;var X=U.length;for(var Y=0;Y<X;Y++){U[Y]()}}function K(X){if(J){X()}else{U[U.length]=X}}function s(Y){if(typeof O.addEventListener!=D){O.addEventListener("load",Y,false)}else{if(typeof j.addEventListener!=D){j.addEventListener("load",Y,false)}else{if(typeof O.attachEvent!=D){i(O,"onload",Y)}else{if(typeof O.onload=="function"){var X=O.onload;O.onload=function(){X();Y()}}else{O.onload=Y}}}}}function h(){if(T){V()}else{H()}}function V(){var X=j.getElementsByTagName("body")[0];var aa=C(r);aa.setAttribute("type",q);var Z=X.appendChild(aa);if(Z){var Y=0;(function(){if(typeof Z.GetVariable!=D){var ab=Z.GetVariable("$version");if(ab){ab=ab.split(" ")[1].split(",");M.pv=[parseInt(ab[0],10),parseInt(ab[1],10),parseInt(ab[2],10)]}}else{if(Y<10){Y++;setTimeout(arguments.callee,10);return}}X.removeChild(aa);Z=null;H()})()}else{H()}}function H(){var ag=o.length;if(ag>0){for(var af=0;af<ag;af++){var Y=o[af].id;var ab=o[af].callbackFn;var aa={success:false,id:Y};if(M.pv[0]>0){var ae=c(Y);if(ae){if(F(o[af].swfVersion)&&!(M.wk&&M.wk<312)){w(Y,true);if(ab){aa.success=true;aa.ref=z(Y);ab(aa)}}else{if(o[af].expressInstall&&A()){var ai={};ai.data=o[af].expressInstall;ai.width=ae.getAttribute("width")||"0";ai.height=ae.getAttribute("height")||"0";if(ae.getAttribute("class")){ai.styleclass=ae.getAttribute("class")}if(ae.getAttribute("align")){ai.align=ae.getAttribute("align")}var ah={};var X=ae.getElementsByTagName("param");var ac=X.length;for(var ad=0;ad<ac;ad++){if(X[ad].getAttribute("name").toLowerCase()!="movie"){ah[X[ad].getAttribute("name")]=X[ad].getAttribute("value")}}P(ai,ah,Y,ab)}else{p(ae);if(ab){ab(aa)}}}}}else{w(Y,true);if(ab){var Z=z(Y);if(Z&&typeof Z.SetVariable!=D){aa.success=true;aa.ref=Z}ab(aa)}}}}}function z(aa){var X=null;var Y=c(aa);if(Y&&Y.nodeName=="OBJECT"){if(typeof Y.SetVariable!=D){X=Y}else{var Z=Y.getElementsByTagName(r)[0];if(Z){X=Z}}}return X}function A(){return !a&&F("6.0.65")&&(M.win||M.mac)&&!(M.wk&&M.wk<312)}function P(aa,ab,X,Z){a=true;E=Z||null;B={success:false,id:X};var ae=c(X);if(ae){if(ae.nodeName=="OBJECT"){l=g(ae);Q=null}else{l=ae;Q=X}aa.id=R;if(typeof aa.width==D||(!/%$/.test(aa.width)&&parseInt(aa.width,10)<310)){aa.width="310"}if(typeof aa.height==D||(!/%$/.test(aa.height)&&parseInt(aa.height,10)<137)){aa.height="137"}j.title=j.title.slice(0,47)+" - Flash Player Installation";var ad=M.ie&&M.win?(['Active'].concat('').join('X')):"PlugIn",ac="MMredirectURL="+O.location.toString().replace(/&/g,"%26")+"&MMplayerType="+ad+"&MMdoctitle="+j.title;if(typeof ab.flashvars!=D){ab.flashvars+="&"+ac}else{ab.flashvars=ac}if(M.ie&&M.win&&ae.readyState!=4){var Y=C("div");X+="SWFObjectNew";Y.setAttribute("id",X);ae.parentNode.insertBefore(Y,ae);ae.style.display="none";(function(){if(ae.readyState==4){ae.parentNode.removeChild(ae)}else{setTimeout(arguments.callee,10)}})()}u(aa,ab,X)}}function p(Y){if(M.ie&&M.win&&Y.readyState!=4){var X=C("div");Y.parentNode.insertBefore(X,Y);X.parentNode.replaceChild(g(Y),X);Y.style.display="none";(function(){if(Y.readyState==4){Y.parentNode.removeChild(Y)}else{setTimeout(arguments.callee,10)}})()}else{Y.parentNode.replaceChild(g(Y),Y)}}function g(ab){var aa=C("div");if(M.win&&M.ie){aa.innerHTML=ab.innerHTML}else{var Y=ab.getElementsByTagName(r)[0];if(Y){var ad=Y.childNodes;if(ad){var X=ad.length;for(var Z=0;Z<X;Z++){if(!(ad[Z].nodeType==1&&ad[Z].nodeName=="PARAM")&&!(ad[Z].nodeType==8)){aa.appendChild(ad[Z].cloneNode(true))}}}}}return aa}function u(ai,ag,Y){var X,aa=c(Y);if(M.wk&&M.wk<312){return X}if(aa){if(typeof ai.id==D){ai.id=Y}if(M.ie&&M.win){var ah="";for(var ae in ai){if(ai[ae]!=Object.prototype[ae]){if(ae.toLowerCase()=="data"){ag.movie=ai[ae]}else{if(ae.toLowerCase()=="styleclass"){ah+=' class="'+ai[ae]+'"'}else{if(ae.toLowerCase()!="classid"){ah+=" "+ae+'="'+ai[ae]+'"'}}}}}var af="";for(var ad in ag){if(ag[ad]!=Object.prototype[ad]){af+='<param name="'+ad+'" value="'+ag[ad]+'" />'}}aa.outerHTML='<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"'+ah+">"+af+"</object>";N[N.length]=ai.id;X=c(ai.id)}else{var Z=C(r);Z.setAttribute("type",q);for(var ac in ai){if(ai[ac]!=Object.prototype[ac]){if(ac.toLowerCase()=="styleclass"){Z.setAttribute("class",ai[ac])}else{if(ac.toLowerCase()!="classid"){Z.setAttribute(ac,ai[ac])}}}}for(var ab in ag){if(ag[ab]!=Object.prototype[ab]&&ab.toLowerCase()!="movie"){e(Z,ab,ag[ab])}}aa.parentNode.replaceChild(Z,aa);X=Z}}return X}function e(Z,X,Y){var aa=C("param");aa.setAttribute("name",X);aa.setAttribute("value",Y);Z.appendChild(aa)}function y(Y){var X=c(Y);if(X&&X.nodeName=="OBJECT"){if(M.ie&&M.win){X.style.display="none";(function(){if(X.readyState==4){b(Y)}else{setTimeout(arguments.callee,10)}})()}else{X.parentNode.removeChild(X)}}}function b(Z){var Y=c(Z);if(Y){for(var X in Y){if(typeof Y[X]=="function"){Y[X]=null}}Y.parentNode.removeChild(Y)}}function c(Z){var X=null;try{X=j.getElementById(Z)}catch(Y){}return X}function C(X){return j.createElement(X)}function i(Z,X,Y){Z.attachEvent(X,Y);I[I.length]=[Z,X,Y]}function F(Z){var Y=M.pv,X=Z.split(".");X[0]=parseInt(X[0],10);X[1]=parseInt(X[1],10)||0;X[2]=parseInt(X[2],10)||0;return(Y[0]>X[0]||(Y[0]==X[0]&&Y[1]>X[1])||(Y[0]==X[0]&&Y[1]==X[1]&&Y[2]>=X[2]))?true:false}function v(ac,Y,ad,ab){if(M.ie&&M.mac){return}var aa=j.getElementsByTagName("head")[0];if(!aa){return}var X=(ad&&typeof ad=="string")?ad:"screen";if(ab){n=null;G=null}if(!n||G!=X){var Z=C("style");Z.setAttribute("type","text/css");Z.setAttribute("media",X);n=aa.appendChild(Z);if(M.ie&&M.win&&typeof j.styleSheets!=D&&j.styleSheets.length>0){n=j.styleSheets[j.styleSheets.length-1]}G=X}if(M.ie&&M.win){if(n&&typeof n.addRule==r){n.addRule(ac,Y)}}else{if(n&&typeof j.createTextNode!=D){n.appendChild(j.createTextNode(ac+" {"+Y+"}"))}}}function w(Z,X){if(!m){return}var Y=X?"visible":"hidden";if(J&&c(Z)){c(Z).style.visibility=Y}else{v("#"+Z,"visibility:"+Y)}}function L(Y){var Z=/[\\\"<>\.;]/;var X=Z.exec(Y)!=null;return X&&typeof encodeURIComponent!=D?encodeURIComponent(Y):Y}var d=function(){if(M.ie&&M.win){window.attachEvent("onunload",function(){var ac=I.length;for(var ab=0;ab<ac;ab++){I[ab][0].detachEvent(I[ab][1],I[ab][2])}var Z=N.length;for(var aa=0;aa<Z;aa++){y(N[aa])}for(var Y in M){M[Y]=null}M=null;for(var X in swfobject){swfobject[X]=null}swfobject=null})}}();return{registerObject:function(ab,X,aa,Z){if(M.w3&&ab&&X){var Y={};Y.id=ab;Y.swfVersion=X;Y.expressInstall=aa;Y.callbackFn=Z;o[o.length]=Y;w(ab,false)}else{if(Z){Z({success:false,id:ab})}}},getObjectById:function(X){if(M.w3){return z(X)}},embedSWF:function(ab,ah,ae,ag,Y,aa,Z,ad,af,ac){var X={success:false,id:ah};if(M.w3&&!(M.wk&&M.wk<312)&&ab&&ah&&ae&&ag&&Y){w(ah,false);K(function(){ae+="";ag+="";var aj={};if(af&&typeof af===r){for(var al in af){aj[al]=af[al]}}aj.data=ab;aj.width=ae;aj.height=ag;var am={};if(ad&&typeof ad===r){for(var ak in ad){am[ak]=ad[ak]}}if(Z&&typeof Z===r){for(var ai in Z){if(typeof am.flashvars!=D){am.flashvars+="&"+ai+"="+Z[ai]}else{am.flashvars=ai+"="+Z[ai]}}}if(F(Y)){var an=u(aj,am,ah);if(aj.id==ah){w(ah,true)}X.success=true;X.ref=an}else{if(aa&&A()){aj.data=aa;P(aj,am,ah,ac);return}else{w(ah,true)}}if(ac){ac(X)}})}else{if(ac){ac(X)}}},switchOffAutoHideShow:function(){m=false},ua:M,getFlashPlayerVersion:function(){return{major:M.pv[0],minor:M.pv[1],release:M.pv[2]}},hasFlashPlayerVersion:F,createSWF:function(Z,Y,X){if(M.w3){return u(Z,Y,X)}else{return undefined}},showExpressInstall:function(Z,aa,X,Y){if(M.w3&&A()){P(Z,aa,X,Y)}},removeSWF:function(X){if(M.w3){y(X)}},createCSS:function(aa,Z,Y,X){if(M.w3){v(aa,Z,Y,X)}},addDomLoadEvent:K,addLoadEvent:s,getQueryParamValue:function(aa){var Z=j.location.search||j.location.hash;if(Z){if(/\?/.test(Z)){Z=Z.split("?")[1]}if(aa==null){return L(Z)}var Y=Z.split("&");for(var X=0;X<Y.length;X++){if(Y[X].substring(0,Y[X].indexOf("="))==aa){return L(Y[X].substring((Y[X].indexOf("=")+1)))}}}return""},expressInstallCallback:function(){if(a){var X=c(R);if(X&&l){X.parentNode.replaceChild(l,X);if(Q){w(Q,true);if(M.ie&&M.win){l.style.display="block"}}if(E){E(B)}}a=false}}}}();
}
// Copyright: Hiroshi Ichikawa <http://gimite.net/en/>
// License: New BSD License
// Reference: http://dev.w3.org/html5/websockets/
// Reference: http://tools.ietf.org/html/draft-hixie-thewebsocketprotocol

(function() {
  
  if ('undefined' == typeof window || window.WebSocket) return;

  var console = window.console;
  if (!console || !console.log || !console.error) {
    console = {log: function(){ }, error: function(){ }};
  }
  
  if (!swfobject.hasFlashPlayerVersion("10.0.0")) {
    console.error("Flash Player >= 10.0.0 is required.");
    return;
  }
  if (location.protocol == "file:") {
    console.error(
      "WARNING: web-socket-js doesn't work in file:///... URL " +
      "unless you set Flash Security Settings properly. " +
      "Open the page via Web server i.e. http://...");
  }

  /**
   * This class represents a faux web socket.
   * @param {string} url
   * @param {array or string} protocols
   * @param {string} proxyHost
   * @param {int} proxyPort
   * @param {string} headers
   */
  WebSocket = function(url, protocols, proxyHost, proxyPort, headers) {
    var self = this;
    self.__id = WebSocket.__nextId++;
    WebSocket.__instances[self.__id] = self;
    self.readyState = WebSocket.CONNECTING;
    self.bufferedAmount = 0;
    self.__events = {};
    if (!protocols) {
      protocols = [];
    } else if (typeof protocols == "string") {
      protocols = [protocols];
    }
    // Uses setTimeout() to make sure __createFlash() runs after the caller sets ws.onopen etc.
    // Otherwise, when onopen fires immediately, onopen is called before it is set.
    setTimeout(function() {
      WebSocket.__addTask(function() {
        WebSocket.__flash.create(
            self.__id, url, protocols, proxyHost || null, proxyPort || 0, headers || null);
      });
    }, 0);
  };

  /**
   * Send data to the web socket.
   * @param {string} data  The data to send to the socket.
   * @return {boolean}  True for success, false for failure.
   */
  WebSocket.prototype.send = function(data) {
    if (this.readyState == WebSocket.CONNECTING) {
      throw "INVALID_STATE_ERR: Web Socket connection has not been established";
    }
    // We use encodeURIComponent() here, because FABridge doesn't work if
    // the argument includes some characters. We don't use escape() here
    // because of this:
    // https://developer.mozilla.org/en/Core_JavaScript_1.5_Guide/Functions#escape_and_unescape_Functions
    // But it looks decodeURIComponent(encodeURIComponent(s)) doesn't
    // preserve all Unicode characters either e.g. "\uffff" in Firefox.
    // Note by wtritch: Hopefully this will not be necessary using ExternalInterface.  Will require
    // additional testing.
    var result = WebSocket.__flash.send(this.__id, encodeURIComponent(data));
    if (result < 0) { // success
      return true;
    } else {
      this.bufferedAmount += result;
      return false;
    }
  };

  /**
   * Close this web socket gracefully.
   */
  WebSocket.prototype.close = function() {
    if (this.readyState == WebSocket.CLOSED || this.readyState == WebSocket.CLOSING) {
      return;
    }
    this.readyState = WebSocket.CLOSING;
    WebSocket.__flash.close(this.__id);
  };

  /**
   * Implementation of {@link <a href="http://www.w3.org/TR/DOM-Level-2-Events/events.html#Events-registration">DOM 2 EventTarget Interface</a>}
   *
   * @param {string} type
   * @param {function} listener
   * @param {boolean} useCapture
   * @return void
   */
  WebSocket.prototype.addEventListener = function(type, listener, useCapture) {
    if (!(type in this.__events)) {
      this.__events[type] = [];
    }
    this.__events[type].push(listener);
  };

  /**
   * Implementation of {@link <a href="http://www.w3.org/TR/DOM-Level-2-Events/events.html#Events-registration">DOM 2 EventTarget Interface</a>}
   *
   * @param {string} type
   * @param {function} listener
   * @param {boolean} useCapture
   * @return void
   */
  WebSocket.prototype.removeEventListener = function(type, listener, useCapture) {
    if (!(type in this.__events)) return;
    var events = this.__events[type];
    for (var i = events.length - 1; i >= 0; --i) {
      if (events[i] === listener) {
        events.splice(i, 1);
        break;
      }
    }
  };

  /**
   * Implementation of {@link <a href="http://www.w3.org/TR/DOM-Level-2-Events/events.html#Events-registration">DOM 2 EventTarget Interface</a>}
   *
   * @param {Event} event
   * @return void
   */
  WebSocket.prototype.dispatchEvent = function(event) {
    var events = this.__events[event.type] || [];
    for (var i = 0; i < events.length; ++i) {
      events[i](event);
    }
    var handler = this["on" + event.type];
    if (handler) handler(event);
  };

  /**
   * Handles an event from Flash.
   * @param {Object} flashEvent
   */
  WebSocket.prototype.__handleEvent = function(flashEvent) {
    if ("readyState" in flashEvent) {
      this.readyState = flashEvent.readyState;
    }
    if ("protocol" in flashEvent) {
      this.protocol = flashEvent.protocol;
    }
    
    var jsEvent;
    if (flashEvent.type == "open" || flashEvent.type == "error") {
      jsEvent = this.__createSimpleEvent(flashEvent.type);
    } else if (flashEvent.type == "close") {
      // TODO implement jsEvent.wasClean
      jsEvent = this.__createSimpleEvent("close");
    } else if (flashEvent.type == "message") {
      var data = decodeURIComponent(flashEvent.message);
      jsEvent = this.__createMessageEvent("message", data);
    } else {
      throw "unknown event type: " + flashEvent.type;
    }
    
    this.dispatchEvent(jsEvent);
  };
  
  WebSocket.prototype.__createSimpleEvent = function(type) {
    if (document.createEvent && window.Event) {
      var event = document.createEvent("Event");
      event.initEvent(type, false, false);
      return event;
    } else {
      return {type: type, bubbles: false, cancelable: false};
    }
  };
  
  WebSocket.prototype.__createMessageEvent = function(type, data) {
    if (document.createEvent && window.MessageEvent && !window.opera) {
      var event = document.createEvent("MessageEvent");
      event.initMessageEvent("message", false, false, data, null, null, window, null);
      return event;
    } else {
      // IE and Opera, the latter one truncates the data parameter after any 0x00 bytes.
      return {type: type, data: data, bubbles: false, cancelable: false};
    }
  };
  
  /**
   * Define the WebSocket readyState enumeration.
   */
  WebSocket.CONNECTING = 0;
  WebSocket.OPEN = 1;
  WebSocket.CLOSING = 2;
  WebSocket.CLOSED = 3;

  WebSocket.__flash = null;
  WebSocket.__instances = {};
  WebSocket.__tasks = [];
  WebSocket.__nextId = 0;
  
  /**
   * Load a new flash security policy file.
   * @param {string} url
   */
  WebSocket.loadFlashPolicyFile = function(url){
    WebSocket.__addTask(function() {
      WebSocket.__flash.loadManualPolicyFile(url);
    });
  };

  /**
   * Loads WebSocketMain.swf and creates WebSocketMain object in Flash.
   */
  WebSocket.__initialize = function() {
    if (WebSocket.__flash) return;
    
    if (WebSocket.__swfLocation) {
      // For backword compatibility.
      window.WEB_SOCKET_SWF_LOCATION = WebSocket.__swfLocation;
    }
    if (!window.WEB_SOCKET_SWF_LOCATION) {
      console.error("[WebSocket] set WEB_SOCKET_SWF_LOCATION to location of WebSocketMain.swf");
      return;
    }
    var container = document.createElement("div");
    container.id = "webSocketContainer";
    // Hides Flash box. We cannot use display: none or visibility: hidden because it prevents
    // Flash from loading at least in IE. So we move it out of the screen at (-100, -100).
    // But this even doesn't work with Flash Lite (e.g. in Droid Incredible). So with Flash
    // Lite, we put it at (0, 0). This shows 1x1 box visible at left-top corner but this is
    // the best we can do as far as we know now.
    container.style.position = "absolute";
    if (WebSocket.__isFlashLite()) {
      container.style.left = "0px";
      container.style.top = "0px";
    } else {
      container.style.left = "-100px";
      container.style.top = "-100px";
    }
    var holder = document.createElement("div");
    holder.id = "webSocketFlash";
    container.appendChild(holder);
    document.body.appendChild(container);
    // See this article for hasPriority:
    // http://help.adobe.com/en_US/as3/mobile/WS4bebcd66a74275c36cfb8137124318eebc6-7ffd.html
    swfobject.embedSWF(
      WEB_SOCKET_SWF_LOCATION,
      "webSocketFlash",
      "1" /* width */,
      "1" /* height */,
      "10.0.0" /* SWF version */,
      null,
      null,
      {hasPriority: true, swliveconnect : true, allowScriptAccess: "always"},
      null,
      function(e) {
        if (!e.success) {
          console.error("[WebSocket] swfobject.embedSWF failed");
        }
      });
  };
  
  /**
   * Called by Flash to notify JS that it's fully loaded and ready
   * for communication.
   */
  WebSocket.__onFlashInitialized = function() {
    // We need to set a timeout here to avoid round-trip calls
    // to flash during the initialization process.
    setTimeout(function() {
      WebSocket.__flash = document.getElementById("webSocketFlash");
      WebSocket.__flash.setCallerUrl(location.href);
      WebSocket.__flash.setDebug(!!window.WEB_SOCKET_DEBUG);
      for (var i = 0; i < WebSocket.__tasks.length; ++i) {
        WebSocket.__tasks[i]();
      }
      WebSocket.__tasks = [];
    }, 0);
  };
  
  /**
   * Called by Flash to notify WebSockets events are fired.
   */
  WebSocket.__onFlashEvent = function() {
    setTimeout(function() {
      try {
        // Gets events using receiveEvents() instead of getting it from event object
        // of Flash event. This is to make sure to keep message order.
        // It seems sometimes Flash events don't arrive in the same order as they are sent.
        var events = WebSocket.__flash.receiveEvents();
        for (var i = 0; i < events.length; ++i) {
          WebSocket.__instances[events[i].webSocketId].__handleEvent(events[i]);
        }
      } catch (e) {
        console.error(e);
      }
    }, 0);
    return true;
  };
  
  // Called by Flash.
  WebSocket.__log = function(message) {
    console.log(decodeURIComponent(message));
  };
  
  // Called by Flash.
  WebSocket.__error = function(message) {
    console.error(decodeURIComponent(message));
  };
  
  WebSocket.__addTask = function(task) {
    if (WebSocket.__flash) {
      task();
    } else {
      WebSocket.__tasks.push(task);
    }
  };
  
  /**
   * Test if the browser is running flash lite.
   * @return {boolean} True if flash lite is running, false otherwise.
   */
  WebSocket.__isFlashLite = function() {
    if (!window.navigator || !window.navigator.mimeTypes) {
      return false;
    }
    var mimeType = window.navigator.mimeTypes["application/x-shockwave-flash"];
    if (!mimeType || !mimeType.enabledPlugin || !mimeType.enabledPlugin.filename) {
      return false;
    }
    return mimeType.enabledPlugin.filename.match(/flashlite/i) ? true : false;
  };
  
  if (!window.WEB_SOCKET_DISABLE_AUTO_INITIALIZATION) {
    if (window.addEventListener) {
      window.addEventListener("load", function(){
        WebSocket.__initialize();
      }, false);
    } else {
      window.attachEvent("onload", function(){
        WebSocket.__initialize();
      });
    }
  }
  
})();

/**
 * socket.io
 * Copyright(c) 2011 LearnBoost <dev@learnboost.com>
 * MIT Licensed
 */

(function (exports, io, global) {

  /**
   * Expose constructor.
   *
   * @api public
   */

  exports.XHR = XHR;

  /**
   * XHR constructor
   *
   * @costructor
   * @api public
   */

  function XHR (socket) {
    if (!socket) return;

    io.Transport.apply(this, arguments);
    this.sendBuffer = [];
  };

  /**
   * Inherits from Transport.
   */

  io.util.inherit(XHR, io.Transport);

  /**
   * Establish a connection
   *
   * @returns {Transport}
   * @api public
   */

  XHR.prototype.open = function () {
    this.socket.setBuffer(false);
    this.onOpen();
    this.get();

    // we need to make sure the request succeeds since we have no indication
    // whether the request opened or not until it succeeded.
    this.setCloseTimeout();

    return this;
  };

  /**
   * Check if we need to send data to the Socket.IO server, if we have data in our
   * buffer we encode it and forward it to the `post` method.
   *
   * @api private
   */

  XHR.prototype.payload = function (payload) {
    var msgs = [];

    for (var i = 0, l = payload.length; i < l; i++) {
      msgs.push(io.parser.encodePacket(payload[i]));
    }

    this.send(io.parser.encodePayload(msgs));
  };

  /**
   * Send data to the Socket.IO server.
   *
   * @param data The message
   * @returns {Transport}
   * @api public
   */

  XHR.prototype.send = function (data) {
    this.post(data);
    return this;
  };

  /**
   * Posts a encoded message to the Socket.IO server.
   *
   * @param {String} data A encoded message.
   * @api private
   */

  function empty () { };

  XHR.prototype.post = function (data) {
    var self = this;
    this.socket.setBuffer(true);

    function stateChange () {
      if (this.readyState == 4) {
        this.onreadystatechange = empty;
        self.posting = false;

        if (this.status == 200){
          self.socket.setBuffer(false);
        } else {
          self.onClose();
        }
      }
    }

    function onload () {
      this.onload = empty;
      self.socket.setBuffer(false);
    };

    this.sendXHR = this.request('POST');

    if (global.XDomainRequest && this.sendXHR instanceof XDomainRequest) {
      this.sendXHR.onload = this.sendXHR.onerror = onload;
    } else {
      this.sendXHR.onreadystatechange = stateChange;
    }

    this.sendXHR.send(data);
  };

  /**
   * Disconnects the established `XHR` connection.
   *
   * @returns {Transport}
   * @api public
   */

  XHR.prototype.close = function () {
    this.onClose();
    return this;
  };

  /**
   * Generates a configured XHR request
   *
   * @param {String} url The url that needs to be requested.
   * @param {String} method The method the request should use.
   * @returns {XMLHttpRequest}
   * @api private
   */

  XHR.prototype.request = function (method) {
    var req = io.util.request(this.socket.isXDomain())
      , query = io.util.query(this.socket.options.query, 't=' + +new Date);

    req.open(method || 'GET', this.prepareUrl() + query, true);

    if (method == 'POST') {
      try {
        if (req.setRequestHeader) {
          req.setRequestHeader('Content-type', 'text/plain;charset=UTF-8');
        } else {
          // XDomainRequest
          req.contentType = 'text/plain';
        }
      } catch (e) {}
    }

    return req;
  };

  /**
   * Returns the scheme to use for the transport URLs.
   *
   * @api private
   */

  XHR.prototype.scheme = function () {
    return this.socket.options.secure ? 'https' : 'http';
  };

  /**
   * Check if the XHR transports are supported
   *
   * @param {Boolean} xdomain Check if we support cross domain requests.
   * @returns {Boolean}
   * @api public
   */

  XHR.check = function (socket, xdomain) {
    try {
      var request = io.util.request(xdomain),
          usesXDomReq = (global.XDomainRequest && request instanceof XDomainRequest),
          socketProtocol = (socket && socket.options && socket.options.secure ? 'https:' : 'http:'),
          isXProtocol = (global.location && socketProtocol != global.location.protocol);
      if (request && !(usesXDomReq && isXProtocol)) {
        return true;
      }
    } catch(e) {}

    return false;
  };

  /**
   * Check if the XHR transport supports cross domain requests.
   *
   * @returns {Boolean}
   * @api public
   */

  XHR.xdomainCheck = function (socket) {
    return XHR.check(socket, true);
  };

})(
    'undefined' != typeof io ? io.Transport : module.exports
  , 'undefined' != typeof io ? io : module.parent.exports
  , this
);
/**
 * socket.io
 * Copyright(c) 2011 LearnBoost <dev@learnboost.com>
 * MIT Licensed
 */

(function (exports, io) {

  /**
   * Expose constructor.
   */

  exports.htmlfile = HTMLFile;

  /**
   * The HTMLFile transport creates a `forever iframe` based transport
   * for Internet Explorer. Regular forever iframe implementations will 
   * continuously trigger the browsers buzy indicators. If the forever iframe
   * is created inside a `htmlfile` these indicators will not be trigged.
   *
   * @constructor
   * @extends {io.Transport.XHR}
   * @api public
   */

  function HTMLFile (socket) {
    io.Transport.XHR.apply(this, arguments);
  };

  /**
   * Inherits from XHR transport.
   */

  io.util.inherit(HTMLFile, io.Transport.XHR);

  /**
   * Transport name
   *
   * @api public
   */

  HTMLFile.prototype.name = 'htmlfile';

  /**
   * Creates a new Ac...eX `htmlfile` with a forever loading iframe
   * that can be used to listen to messages. Inside the generated
   * `htmlfile` a reference will be made to the HTMLFile transport.
   *
   * @api private
   */

  HTMLFile.prototype.get = function () {
    this.doc = new window[(['Active'].concat('Object').join('X'))]('htmlfile');
    this.doc.open();
    this.doc.write('<html></html>');
    this.doc.close();
    this.doc.parentWindow.s = this;

    var iframeC = this.doc.createElement('div');
    iframeC.className = 'socketio';

    this.doc.body.appendChild(iframeC);
    this.iframe = this.doc.createElement('iframe');

    iframeC.appendChild(this.iframe);

    var self = this
      , query = io.util.query(this.socket.options.query, 't='+ +new Date);

    this.iframe.src = this.prepareUrl() + query;

    io.util.on(window, 'unload', function () {
      self.destroy();
    });
  };

  /**
   * The Socket.IO server will write script tags inside the forever
   * iframe, this function will be used as callback for the incoming
   * information.
   *
   * @param {String} data The message
   * @param {document} doc Reference to the context
   * @api private
   */

  HTMLFile.prototype._ = function (data, doc) {
    this.onData(data);
    try {
      var script = doc.getElementsByTagName('script')[0];
      script.parentNode.removeChild(script);
    } catch (e) { }
  };

  /**
   * Destroy the established connection, iframe and `htmlfile`.
   * And calls the `CollectGarbage` function of Internet Explorer
   * to release the memory.
   *
   * @api private
   */

  HTMLFile.prototype.destroy = function () {
    if (this.iframe){
      try {
        this.iframe.src = 'about:blank';
      } catch(e){}

      this.doc = null;
      this.iframe.parentNode.removeChild(this.iframe);
      this.iframe = null;

      CollectGarbage();
    }
  };

  /**
   * Disconnects the established connection.
   *
   * @returns {Transport} Chaining.
   * @api public
   */

  HTMLFile.prototype.close = function () {
    this.destroy();
    return io.Transport.XHR.prototype.close.call(this);
  };

  /**
   * Checks if the browser supports this transport. The browser
   * must have an `Ac...eXObject` implementation.
   *
   * @return {Boolean}
   * @api public
   */

  HTMLFile.check = function (socket) {
    if (typeof window != "undefined" && (['Active'].concat('Object').join('X')) in window){
      try {
        var a = new window[(['Active'].concat('Object').join('X'))]('htmlfile');
        return a && io.Transport.XHR.check(socket);
      } catch(e){}
    }
    return false;
  };

  /**
   * Check if cross domain requests are supported.
   *
   * @returns {Boolean}
   * @api public
   */

  HTMLFile.xdomainCheck = function () {
    // we can probably do handling for sub-domains, we should
    // test that it's cross domain but a subdomain here
    return false;
  };

  /**
   * Add the transport to your public io.transports array.
   *
   * @api private
   */

  io.transports.push('htmlfile');

})(
    'undefined' != typeof io ? io.Transport : module.exports
  , 'undefined' != typeof io ? io : module.parent.exports
);

/**
 * socket.io
 * Copyright(c) 2011 LearnBoost <dev@learnboost.com>
 * MIT Licensed
 */

(function (exports, io, global) {

  /**
   * Expose constructor.
   */

  exports['xhr-polling'] = XHRPolling;

  /**
   * The XHR-polling transport uses long polling XHR requests to create a
   * "persistent" connection with the server.
   *
   * @constructor
   * @api public
   */

  function XHRPolling () {
    io.Transport.XHR.apply(this, arguments);
  };

  /**
   * Inherits from XHR transport.
   */

  io.util.inherit(XHRPolling, io.Transport.XHR);

  /**
   * Merge the properties from XHR transport
   */

  io.util.merge(XHRPolling, io.Transport.XHR);

  /**
   * Transport name
   *
   * @api public
   */

  XHRPolling.prototype.name = 'xhr-polling';

  /**
   * Indicates whether heartbeats is enabled for this transport
   *
   * @api private
   */

  XHRPolling.prototype.heartbeats = function () {
    return false;
  };

  /** 
   * Establish a connection, for iPhone and Android this will be done once the page
   * is loaded.
   *
   * @returns {Transport} Chaining.
   * @api public
   */

  XHRPolling.prototype.open = function () {
    var self = this;

    io.Transport.XHR.prototype.open.call(self);
    return false;
  };

  /**
   * Starts a XHR request to wait for incoming messages.
   *
   * @api private
   */

  function empty () {};

  XHRPolling.prototype.get = function () {
    if (!this.isOpen) return;

    var self = this;

    function stateChange () {
      if (this.readyState == 4) {
        this.onreadystatechange = empty;

        if (this.status == 200) {
          self.onData(this.responseText);
          self.get();
        } else {
          self.onClose();
        }
      }
    };

    function onload () {
      this.onload = empty;
      this.onerror = empty;
      self.retryCounter = 1;
      self.onData(this.responseText);
      self.get();
    };

    function onerror () {
      self.retryCounter ++;
      if(!self.retryCounter || self.retryCounter > 3) {
        self.onClose();  
      } else {
        self.get();
      }
    };

    this.xhr = this.request();

    if (global.XDomainRequest && this.xhr instanceof XDomainRequest) {
      this.xhr.onload = onload;
      this.xhr.onerror = onerror;
    } else {
      this.xhr.onreadystatechange = stateChange;
    }

    this.xhr.send(null);
  };

  /**
   * Handle the unclean close behavior.
   *
   * @api private
   */

  XHRPolling.prototype.onClose = function () {
    io.Transport.XHR.prototype.onClose.call(this);

    if (this.xhr) {
      this.xhr.onreadystatechange = this.xhr.onload = this.xhr.onerror = empty;
      try {
        this.xhr.abort();
      } catch(e){}
      this.xhr = null;
    }
  };

  /**
   * Webkit based browsers show a infinit spinner when you start a XHR request
   * before the browsers onload event is called so we need to defer opening of
   * the transport until the onload event is called. Wrapping the cb in our
   * defer method solve this.
   *
   * @param {Socket} socket The socket instance that needs a transport
   * @param {Function} fn The callback
   * @api private
   */

  XHRPolling.prototype.ready = function (socket, fn) {
    var self = this;

    io.util.defer(function () {
      fn.call(self);
    });
  };

  /**
   * Add the transport to your public io.transports array.
   *
   * @api private
   */

  io.transports.push('xhr-polling');

})(
    'undefined' != typeof io ? io.Transport : module.exports
  , 'undefined' != typeof io ? io : module.parent.exports
  , this
);

/**
 * socket.io
 * Copyright(c) 2011 LearnBoost <dev@learnboost.com>
 * MIT Licensed
 */

(function (exports, io, global) {
  /**
   * There is a way to hide the loading indicator in Firefox. If you create and
   * remove a iframe it will stop showing the current loading indicator.
   * Unfortunately we can't feature detect that and UA sniffing is evil.
   *
   * @api private
   */

  var indicator = global.document && "MozAppearance" in
    global.document.documentElement.style;

  /**
   * Expose constructor.
   */

  exports['jsonp-polling'] = JSONPPolling;

  /**
   * The JSONP transport creates an persistent connection by dynamically
   * inserting a script tag in the page. This script tag will receive the
   * information of the Socket.IO server. When new information is received
   * it creates a new script tag for the new data stream.
   *
   * @constructor
   * @extends {io.Transport.xhr-polling}
   * @api public
   */

  function JSONPPolling (socket) {
    io.Transport['xhr-polling'].apply(this, arguments);

    this.index = io.j.length;

    var self = this;

    io.j.push(function (msg) {
      self._(msg);
    });
  };

  /**
   * Inherits from XHR polling transport.
   */

  io.util.inherit(JSONPPolling, io.Transport['xhr-polling']);

  /**
   * Transport name
   *
   * @api public
   */

  JSONPPolling.prototype.name = 'jsonp-polling';

  /**
   * Posts a encoded message to the Socket.IO server using an iframe.
   * The iframe is used because script tags can create POST based requests.
   * The iframe is positioned outside of the view so the user does not
   * notice it's existence.
   *
   * @param {String} data A encoded message.
   * @api private
   */

  JSONPPolling.prototype.post = function (data) {
    var self = this
      , query = io.util.query(
             this.socket.options.query
          , 't='+ (+new Date) + '&i=' + this.index
        );

    if (!this.form) {
      var form = document.createElement('form')
        , area = document.createElement('textarea')
        , id = this.iframeId = 'socketio_iframe_' + this.index
        , iframe;

      form.className = 'socketio';
      form.style.position = 'absolute';
      form.style.top = '0px';
      form.style.left = '0px';
      form.style.display = 'none';
      form.target = id;
      form.method = 'POST';
      form.setAttribute('accept-charset', 'utf-8');
      area.name = 'd';
      form.appendChild(area);
      document.body.appendChild(form);

      this.form = form;
      this.area = area;
    }

    this.form.action = this.prepareUrl() + query;

    function complete () {
      initIframe();
      self.socket.setBuffer(false);
    };

    function initIframe () {
      if (self.iframe) {
        self.form.removeChild(self.iframe);
      }

      try {
        // ie6 dynamic iframes with target="" support (thanks Chris Lambacher)
        iframe = document.createElement('<iframe name="'+ self.iframeId +'">');
      } catch (e) {
        iframe = document.createElement('iframe');
        iframe.name = self.iframeId;
      }

      iframe.id = self.iframeId;

      self.form.appendChild(iframe);
      self.iframe = iframe;
    };

    initIframe();

    // we temporarily stringify until we figure out how to prevent
    // browsers from turning `\n` into `\r\n` in form inputs
    this.area.value = io.JSON.stringify(data);

    try {
      this.form.submit();
    } catch(e) {}

    if (this.iframe.attachEvent) {
      iframe.onreadystatechange = function () {
        if (self.iframe.readyState == 'complete') {
          complete();
        }
      };
    } else {
      this.iframe.onload = complete;
    }

    this.socket.setBuffer(true);
  };

  /**
   * Creates a new JSONP poll that can be used to listen
   * for messages from the Socket.IO server.
   *
   * @api private
   */

  JSONPPolling.prototype.get = function () {
    var self = this
      , script = document.createElement('script')
      , query = io.util.query(
             this.socket.options.query
          , 't='+ (+new Date) + '&i=' + this.index
        );

    if (this.script) {
      this.script.parentNode.removeChild(this.script);
      this.script = null;
    }

    script.async = true;
    script.src = this.prepareUrl() + query;
    script.onerror = function () {
      self.onClose();
    };

    var insertAt = document.getElementsByTagName('script')[0];
    insertAt.parentNode.insertBefore(script, insertAt);
    this.script = script;

    if (indicator) {
      setTimeout(function () {
        var iframe = document.createElement('iframe');
        document.body.appendChild(iframe);
        document.body.removeChild(iframe);
      }, 100);
    }
  };

  /**
   * Callback function for the incoming message stream from the Socket.IO server.
   *
   * @param {String} data The message
   * @api private
   */

  JSONPPolling.prototype._ = function (msg) {
    this.onData(msg);
    if (this.isOpen) {
      this.get();
    }
    return this;
  };

  /**
   * The indicator hack only works after onload
   *
   * @param {Socket} socket The socket instance that needs a transport
   * @param {Function} fn The callback
   * @api private
   */

  JSONPPolling.prototype.ready = function (socket, fn) {
    var self = this;
    if (!indicator) return fn.call(this);

    io.util.load(function () {
      fn.call(self);
    });
  };

  /**
   * Checks if browser supports this transport.
   *
   * @return {Boolean}
   * @api public
   */

  JSONPPolling.check = function () {
    return 'document' in global;
  };

  /**
   * Check if cross domain requests are supported
   *
   * @returns {Boolean}
   * @api public
   */

  JSONPPolling.xdomainCheck = function () {
    return true;
  };

  /**
   * Add the transport to your public io.transports array.
   *
   * @api private
   */

  io.transports.push('jsonp-polling');

})(
    'undefined' != typeof io ? io.Transport : module.exports
  , 'undefined' != typeof io ? io : module.parent.exports
  , this
);

if (typeof define === "function" && define.amd) {
  define([], function () { return io; });
}
})();;// moment.js
// version : 1.7.2
// author : Tim Wood
// license : MIT
// momentjs.com
(function(a){function E(a,b,c,d){var e=c.lang();return e[a].call?e[a](c,d):e[a][b]}function F(a,b){return function(c){return K(a.call(this,c),b)}}function G(a){return function(b){var c=a.call(this,b);return c+this.lang().ordinal(c)}}function H(a,b,c){this._d=a,this._isUTC=!!b,this._a=a._a||null,this._lang=c||!1}function I(a){var b=this._data={},c=a.years||a.y||0,d=a.months||a.M||0,e=a.weeks||a.w||0,f=a.days||a.d||0,g=a.hours||a.h||0,h=a.minutes||a.m||0,i=a.seconds||a.s||0,j=a.milliseconds||a.ms||0;this._milliseconds=j+i*1e3+h*6e4+g*36e5,this._days=f+e*7,this._months=d+c*12,b.milliseconds=j%1e3,i+=J(j/1e3),b.seconds=i%60,h+=J(i/60),b.minutes=h%60,g+=J(h/60),b.hours=g%24,f+=J(g/24),f+=e*7,b.days=f%30,d+=J(f/30),b.months=d%12,c+=J(d/12),b.years=c,this._lang=!1}function J(a){return a<0?Math.ceil(a):Math.floor(a)}function K(a,b){var c=a+"";while(c.length<b)c="0"+c;return c}function L(a,b,c){var d=b._milliseconds,e=b._days,f=b._months,g;d&&a._d.setTime(+a+d*c),e&&a.date(a.date()+e*c),f&&(g=a.date(),a.date(1).month(a.month()+f*c).date(Math.min(g,a.daysInMonth())))}function M(a){return Object.prototype.toString.call(a)==="[object Array]"}function N(a,b){var c=Math.min(a.length,b.length),d=Math.abs(a.length-b.length),e=0,f;for(f=0;f<c;f++)~~a[f]!==~~b[f]&&e++;return e+d}function O(a,b,c,d){var e,f,g=[];for(e=0;e<7;e++)g[e]=a[e]=a[e]==null?e===2?1:0:a[e];return a[7]=g[7]=b,a[8]!=null&&(g[8]=a[8]),a[3]+=c||0,a[4]+=d||0,f=new Date(0),b?(f.setUTCFullYear(a[0],a[1],a[2]),f.setUTCHours(a[3],a[4],a[5],a[6])):(f.setFullYear(a[0],a[1],a[2]),f.setHours(a[3],a[4],a[5],a[6])),f._a=g,f}function P(a,c){var d,e,g=[];!c&&h&&(c=require("./lang/"+a));for(d=0;d<i.length;d++)c[i[d]]=c[i[d]]||f.en[i[d]];for(d=0;d<12;d++)e=b([2e3,d]),g[d]=new RegExp("^"+(c.months[d]||c.months(e,""))+"|^"+(c.monthsShort[d]||c.monthsShort(e,"")).replace(".",""),"i");return c.monthsParse=c.monthsParse||g,f[a]=c,c}function Q(a){var c=typeof a=="string"&&a||a&&a._lang||null;return c?f[c]||P(c):b}function R(a){return a.match(/\[.*\]/)?a.replace(/^\[|\]$/g,""):a.replace(/\\/g,"")}function S(a){var b=a.match(k),c,d;for(c=0,d=b.length;c<d;c++)D[b[c]]?b[c]=D[b[c]]:b[c]=R(b[c]);return function(e){var f="";for(c=0;c<d;c++)f+=typeof b[c].call=="function"?b[c].call(e,a):b[c];return f}}function T(a,b){function d(b){return a.lang().longDateFormat[b]||b}var c=5;while(c--&&l.test(b))b=b.replace(l,d);return A[b]||(A[b]=S(b)),A[b](a)}function U(a){switch(a){case"DDDD":return p;case"YYYY":return q;case"S":case"SS":case"SSS":case"DDD":return o;case"MMM":case"MMMM":case"dd":case"ddd":case"dddd":case"a":case"A":return r;case"Z":case"ZZ":return s;case"T":return t;case"MM":case"DD":case"YY":case"HH":case"hh":case"mm":case"ss":case"M":case"D":case"d":case"H":case"h":case"m":case"s":return n;default:return new RegExp(a.replace("\\",""))}}function V(a,b,c,d){var e,f;switch(a){case"M":case"MM":c[1]=b==null?0:~~b-1;break;case"MMM":case"MMMM":for(e=0;e<12;e++)if(Q().monthsParse[e].test(b)){c[1]=e,f=!0;break}f||(c[8]=!1);break;case"D":case"DD":case"DDD":case"DDDD":b!=null&&(c[2]=~~b);break;case"YY":c[0]=~~b+(~~b>70?1900:2e3);break;case"YYYY":c[0]=~~Math.abs(b);break;case"a":case"A":d.isPm=(b+"").toLowerCase()==="pm";break;case"H":case"HH":case"h":case"hh":c[3]=~~b;break;case"m":case"mm":c[4]=~~b;break;case"s":case"ss":c[5]=~~b;break;case"S":case"SS":case"SSS":c[6]=~~(("0."+b)*1e3);break;case"Z":case"ZZ":d.isUTC=!0,e=(b+"").match(x),e&&e[1]&&(d.tzh=~~e[1]),e&&e[2]&&(d.tzm=~~e[2]),e&&e[0]==="+"&&(d.tzh=-d.tzh,d.tzm=-d.tzm)}b==null&&(c[8]=!1)}function W(a,b){var c=[0,0,1,0,0,0,0],d={tzh:0,tzm:0},e=b.match(k),f,g;for(f=0;f<e.length;f++)g=(U(e[f]).exec(a)||[])[0],g&&(a=a.slice(a.indexOf(g)+g.length)),D[e[f]]&&V(e[f],g,c,d);return d.isPm&&c[3]<12&&(c[3]+=12),d.isPm===!1&&c[3]===12&&(c[3]=0),O(c,d.isUTC,d.tzh,d.tzm)}function X(a,b){var c,d=a.match(m)||[],e,f=99,g,h,i;for(g=0;g<b.length;g++)h=W(a,b[g]),e=T(new H(h),b[g]).match(m)||[],i=N(d,e),i<f&&(f=i,c=h);return c}function Y(a){var b="YYYY-MM-DDT",c;if(u.exec(a)){for(c=0;c<4;c++)if(w[c][1].exec(a)){b+=w[c][0];break}return s.exec(a)?W(a,b+" Z"):W(a,b)}return new Date(a)}function Z(a,b,c,d,e){var f=e.relativeTime[a];return typeof f=="function"?f(b||1,!!c,a,d):f.replace(/%d/i,b||1)}function $(a,b,c){var e=d(Math.abs(a)/1e3),f=d(e/60),g=d(f/60),h=d(g/24),i=d(h/365),j=e<45&&["s",e]||f===1&&["m"]||f<45&&["mm",f]||g===1&&["h"]||g<22&&["hh",g]||h===1&&["d"]||h<=25&&["dd",h]||h<=45&&["M"]||h<345&&["MM",d(h/30)]||i===1&&["y"]||["yy",i];return j[2]=b,j[3]=a>0,j[4]=c,Z.apply({},j)}function _(a,c){b.fn[a]=function(a){var b=this._isUTC?"UTC":"";return a!=null?(this._d["set"+b+c](a),this):this._d["get"+b+c]()}}function ab(a){b.duration.fn[a]=function(){return this._data[a]}}function bb(a,c){b.duration.fn["as"+a]=function(){return+this/c}}var b,c="1.7.2",d=Math.round,e,f={},g="en",h=typeof module!="undefined"&&module.exports,i="months|monthsShort|weekdays|weekdaysShort|weekdaysMin|longDateFormat|calendar|relativeTime|ordinal|meridiem".split("|"),j=/^\/?Date\((\-?\d+)/i,k=/(\[[^\[]*\])|(\\)?(Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|YYYY|YY|a|A|hh?|HH?|mm?|ss?|SS?S?|zz?|ZZ?|.)/g,l=/(\[[^\[]*\])|(\\)?(LT|LL?L?L?)/g,m=/([0-9a-zA-Z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)/gi,n=/\d\d?/,o=/\d{1,3}/,p=/\d{3}/,q=/\d{1,4}/,r=/[0-9a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+/i,s=/Z|[\+\-]\d\d:?\d\d/i,t=/T/i,u=/^\s*\d{4}-\d\d-\d\d(T(\d\d(:\d\d(:\d\d(\.\d\d?\d?)?)?)?)?([\+\-]\d\d:?\d\d)?)?/,v="YYYY-MM-DDTHH:mm:ssZ",w=[["HH:mm:ss.S",/T\d\d:\d\d:\d\d\.\d{1,3}/],["HH:mm:ss",/T\d\d:\d\d:\d\d/],["HH:mm",/T\d\d:\d\d/],["HH",/T\d\d/]],x=/([\+\-]|\d\d)/gi,y="Month|Date|Hours|Minutes|Seconds|Milliseconds".split("|"),z={Milliseconds:1,Seconds:1e3,Minutes:6e4,Hours:36e5,Days:864e5,Months:2592e6,Years:31536e6},A={},B="DDD w M D d".split(" "),C="M D H h m s w".split(" "),D={M:function(){return this.month()+1},MMM:function(a){return E("monthsShort",this.month(),this,a)},MMMM:function(a){return E("months",this.month(),this,a)},D:function(){return this.date()},DDD:function(){var a=new Date(this.year(),this.month(),this.date()),b=new Date(this.year(),0,1);return~~((a-b)/864e5+1.5)},d:function(){return this.day()},dd:function(a){return E("weekdaysMin",this.day(),this,a)},ddd:function(a){return E("weekdaysShort",this.day(),this,a)},dddd:function(a){return E("weekdays",this.day(),this,a)},w:function(){var a=new Date(this.year(),this.month(),this.date()-this.day()+5),b=new Date(a.getFullYear(),0,4);return~~((a-b)/864e5/7+1.5)},YY:function(){return K(this.year()%100,2)},YYYY:function(){return K(this.year(),4)},a:function(){return this.lang().meridiem(this.hours(),this.minutes(),!0)},A:function(){return this.lang().meridiem(this.hours(),this.minutes(),!1)},H:function(){return this.hours()},h:function(){return this.hours()%12||12},m:function(){return this.minutes()},s:function(){return this.seconds()},S:function(){return~~(this.milliseconds()/100)},SS:function(){return K(~~(this.milliseconds()/10),2)},SSS:function(){return K(this.milliseconds(),3)},Z:function(){var a=-this.zone(),b="+";return a<0&&(a=-a,b="-"),b+K(~~(a/60),2)+":"+K(~~a%60,2)},ZZ:function(){var a=-this.zone(),b="+";return a<0&&(a=-a,b="-"),b+K(~~(10*a/6),4)}};while(B.length)e=B.pop(),D[e+"o"]=G(D[e]);while(C.length)e=C.pop(),D[e+e]=F(D[e],2);D.DDDD=F(D.DDD,3),b=function(c,d){if(c===null||c==="")return null;var e,f;return b.isMoment(c)?new H(new Date(+c._d),c._isUTC,c._lang):(d?M(d)?e=X(c,d):e=W(c,d):(f=j.exec(c),e=c===a?new Date:f?new Date(+f[1]):c instanceof Date?c:M(c)?O(c):typeof c=="string"?Y(c):new Date(c)),new H(e))},b.utc=function(a,c){return M(a)?new H(O(a,!0),!0):(typeof a=="string"&&!s.exec(a)&&(a+=" +0000",c&&(c+=" Z")),b(a,c).utc())},b.unix=function(a){return b(a*1e3)},b.duration=function(a,c){var d=b.isDuration(a),e=typeof a=="number",f=d?a._data:e?{}:a,g;return e&&(c?f[c]=a:f.milliseconds=a),g=new I(f),d&&(g._lang=a._lang),g},b.humanizeDuration=function(a,c,d){return b.duration(a,c===!0?null:c).humanize(c===!0?!0:d)},b.version=c,b.defaultFormat=v,b.lang=function(a,c){var d;if(!a)return g;(c||!f[a])&&P(a,c);if(f[a]){for(d=0;d<i.length;d++)b[i[d]]=f[a][i[d]];b.monthsParse=f[a].monthsParse,g=a}},b.langData=Q,b.isMoment=function(a){return a instanceof H},b.isDuration=function(a){return a instanceof I},b.lang("en",{months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),monthsShort:"Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),weekdaysShort:"Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),weekdaysMin:"Su_Mo_Tu_We_Th_Fr_Sa".split("_"),longDateFormat:{LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D YYYY",LLL:"MMMM D YYYY LT",LLLL:"dddd, MMMM D YYYY LT"},meridiem:function(a,b,c){return a>11?c?"pm":"PM":c?"am":"AM"},calendar:{sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[last] dddd [at] LT",sameElse:"L"},relativeTime:{future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},ordinal:function(a){var b=a%10;return~~(a%100/10)===1?"th":b===1?"st":b===2?"nd":b===3?"rd":"th"}}),b.fn=H.prototype={clone:function(){return b(this)},valueOf:function(){return+this._d},unix:function(){return Math.floor(+this._d/1e3)},toString:function(){return this._d.toString()},toDate:function(){return this._d},toArray:function(){var a=this;return[a.year(),a.month(),a.date(),a.hours(),a.minutes(),a.seconds(),a.milliseconds(),!!this._isUTC]},isValid:function(){return this._a?this._a[8]!=null?!!this._a[8]:!N(this._a,(this._a[7]?b.utc(this._a):b(this._a)).toArray()):!isNaN(this._d.getTime())},utc:function(){return this._isUTC=!0,this},local:function(){return this._isUTC=!1,this},format:function(a){return T(this,a?a:b.defaultFormat)},add:function(a,c){var d=c?b.duration(+c,a):b.duration(a);return L(this,d,1),this},subtract:function(a,c){var d=c?b.duration(+c,a):b.duration(a);return L(this,d,-1),this},diff:function(a,c,e){var f=this._isUTC?b(a).utc():b(a).local(),g=(this.zone()-f.zone())*6e4,h=this._d-f._d-g,i=this.year()-f.year(),j=this.month()-f.month(),k=this.date()-f.date(),l;return c==="months"?l=i*12+j+k/30:c==="years"?l=i+(j+k/30)/12:l=c==="seconds"?h/1e3:c==="minutes"?h/6e4:c==="hours"?h/36e5:c==="days"?h/864e5:c==="weeks"?h/6048e5:h,e?l:d(l)},from:function(a,c){return b.duration(this.diff(a)).lang(this._lang).humanize(!c)},fromNow:function(a){return this.from(b(),a)},calendar:function(){var a=this.diff(b().sod(),"days",!0),c=this.lang().calendar,d=c.sameElse,e=a<-6?d:a<-1?c.lastWeek:a<0?c.lastDay:a<1?c.sameDay:a<2?c.nextDay:a<7?c.nextWeek:d;return this.format(typeof e=="function"?e.apply(this):e)},isLeapYear:function(){var a=this.year();return a%4===0&&a%100!==0||a%400===0},isDST:function(){return this.zone()<b([this.year()]).zone()||this.zone()<b([this.year(),5]).zone()},day:function(a){var b=this._isUTC?this._d.getUTCDay():this._d.getDay();return a==null?b:this.add({d:a-b})},startOf:function(a){switch(a.replace(/s$/,"")){case"year":this.month(0);case"month":this.date(1);case"day":this.hours(0);case"hour":this.minutes(0);case"minute":this.seconds(0);case"second":this.milliseconds(0)}return this},endOf:function(a){return this.startOf(a).add(a.replace(/s?$/,"s"),1).subtract("ms",1)},sod:function(){return this.clone().startOf("day")},eod:function(){return this.clone().endOf("day")},zone:function(){return this._isUTC?0:this._d.getTimezoneOffset()},daysInMonth:function(){return b.utc([this.year(),this.month()+1,0]).date()},lang:function(b){return b===a?Q(this):(this._lang=b,this)}};for(e=0;e<y.length;e++)_(y[e].toLowerCase(),y[e]);_("year","FullYear"),b.duration.fn=I.prototype={weeks:function(){return J(this.days()/7)},valueOf:function(){return this._milliseconds+this._days*864e5+this._months*2592e6},humanize:function(a){var b=+this,c=this.lang().relativeTime,d=$(b,!a,this.lang()),e=b<=0?c.past:c.future;return a&&(typeof e=="function"?d=e(d):d=e.replace(/%s/i,d)),d},lang:b.fn.lang};for(e in z)z.hasOwnProperty(e)&&(bb(e,z[e]),ab(e.toLowerCase()));bb("Weeks",6048e5),h&&(module.exports=b),typeof ender=="undefined"&&(this.moment=b),typeof define=="function"&&define.amd&&define("moment",[],function(){return b})}).call(this);;/**
 * SHA256 Hash Algorithm Plugin
 *
 * @version 1.1 (17/08/2012)
 * @requires jQuery v1.2.6+
 * @author Alex Weber <alexweber.com.br>
 * @copyright Copyright (c) 2008-2009, Alex Weber
 * @see http://anmar.eu.org/projects/jssha2/
 * @see http://pajhome.org.uk/crypt/md5
 *
 * Distributed under the terms of the new BSD License
 * http://www.opensource.org/licenses/bsd-license.php
 *
 */
(function(f){var m=8;var k=function(q,t){var s=(q&65535)+(t&65535);var r=(q>>16)+(t>>16)+(s>>16);return(r<<16)|(s&65535)};var e=function(r,q){return(r>>>q)|(r<<(32-q))};var g=function(r,q){return(r>>>q)};var a=function(q,s,r){return((q&s)^((~q)&r))};var d=function(q,s,r){return((q&s)^(q&r)^(s&r))};var h=function(q){return(e(q,2)^e(q,13)^e(q,22))};var b=function(q){return(e(q,6)^e(q,11)^e(q,25))};var p=function(q){return(e(q,7)^e(q,18)^g(q,3))};var l=function(q){return(e(q,17)^e(q,19)^g(q,10))};var c=function(r,s){var E=new Array(1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298);var t=new Array(1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225);var q=new Array(64);var G,F,D,C,A,y,x,w,v,u;var B,z;r[s>>5]|=128<<(24-s%32);r[((s+64>>9)<<4)+15]=s;for(var v=0;v<r.length;v+=16){G=t[0];F=t[1];D=t[2];C=t[3];A=t[4];y=t[5];x=t[6];w=t[7];for(var u=0;u<64;u++){if(u<16){q[u]=r[u+v]}else{q[u]=k(k(k(l(q[u-2]),q[u-7]),p(q[u-15])),q[u-16])}B=k(k(k(k(w,b(A)),a(A,y,x)),E[u]),q[u]);z=k(h(G),d(G,F,D));w=x;x=y;y=A;A=k(C,B);C=D;D=F;F=G;G=k(B,z)}t[0]=k(G,t[0]);t[1]=k(F,t[1]);t[2]=k(D,t[2]);t[3]=k(C,t[3]);t[4]=k(A,t[4]);t[5]=k(y,t[5]);t[6]=k(x,t[6]);t[7]=k(w,t[7])}return t};var j=function(t){var s=Array();var q=(1<<m)-1;for(var r=0;r<t.length*m;r+=m){s[r>>5]|=(t.charCodeAt(r/m)&q)<<(24-r%32)}return s};var n=function(s){var r="0123456789abcdef";var t="";for(var q=0;q<s.length*4;q++){t+=r.charAt((s[q>>2]>>((3-q%4)*8+4))&15)+r.charAt((s[q>>2]>>((3-q%4)*8))&15)}return t};var o=function(s,v){var u=j(s);if(u.length>16){u=c(u,s.length*m)}var q=Array(16),t=Array(16);for(var r=0;r<16;r++){q[r]=u[r]^909522486;t[r]=u[r]^1549556828}var w=c(q.concat(j(v)),512+v.length*m);return c(t.concat(w),512+256)};var i=function(q){q=typeof q=="object"?f(q).val():q.toString();return q};f.extend({sha256:function(q){q=i(q);return n(c(j(q),q.length*m))},sha256hmac:function(q,r){q=i(q);r=i(r);return n(o(q,r))},sha256config:function(q){m=parseInt(q)||8}});f.fn.sha256=function(r){f.sha256config(r);var q=i(f(this).val());var s=f.sha256(q);f.sha256config(8);return s}})(jQuery);
;function Space(properties) {
  
  this.keys = []
  this.values = {}
  this.events = {}

  // Load from string
  if (typeof properties === 'string')
    return this.loadFromString(properties)
  
  // Load from Space object
  if (properties instanceof Space) {
    this.keys = properties.keys
    for (var i in this.keys) {
      var key = this.keys[i]
      this.values[key] = properties.values[key]
    }
    return this
  }
  
  // Load from object
  for (var key in properties) {
    if (!properties.hasOwnProperty(key))
      continue
    var value = properties[key]
    if (typeof value === 'object')
      this._set(key, new Space(value))
    else
      this._set(key, value)
  }
  return this
}

/**
 * @param {string}
 * @param {int}
 * @return {string}
 */
Space.strRepeat = function (string, count) {
  var str = ''
  for (var i = 0; i < count; i++) {
    str += ' '
  }
  return str
}

/**
 * Return a new Space with the key/value pairs that all passed spaces contain.
 * space: will probably be removed.
 * @param {array} Array of Spaces
 * @return {Space}
 */
Space.union = function () {
  var union = Space.unionSingle(arguments[0], arguments[1])
  for (var i in arguments) {
    if (i === 1) continue // skip the first one
    union = Space.unionSingle(union, arguments[i])
    if (!union.keys.length) break
  }
  return union
}

/**
 * space: will probably be removed.
 * @param {Space}
 * @return {Space}
 */
Space.unionSingle = function(spaceA, spaceB) {
  var union = new Space()
  if (!(spaceB instanceof Space))
    return union
  for (var i in spaceA.keys) {
    var key = spaceA.keys[i]
    var value = spaceA.values[key]
    if (value instanceof Space && spaceB.values[key] && spaceB.values[key] instanceof Space)
      union._set(key, Space.unionSingle(value, spaceB.values[key]))
    if (value === spaceB.values[key])
      union._set(key, value)
  }
  return union
}

Space.prototype.keys = []
Space.prototype.values = {}


/**
 * Deletes all keys and values.
 * @return this
 */
Space.prototype.clear = function () {
  if (this.isEmpty())
    return this
  this.keys = []
  this.values = {}
  this.trigger('clear')
  return this
}

/**
 * Returns a deep copied space.
 * @return {Space}
 */
Space.prototype.clone = function () {
  return new Space(this.toString())
}

Space.prototype._delete = function (key) {
  if (!key.match(/ /)) {
    var index = this.keys.indexOf(key)
    if (index === -1)
      return 0
    this.keys.splice(index, 1)
    delete this.values[key]
    return 1
  }
  // Get parent
  var parts = key.split(/ /)
  var child = parts.pop()
  var parent = this.get(parts.join(' '))
  if (parent instanceof Space)
    return parent._delete(child)
  return 0
}

Space.prototype['delete'] = function (key) {
  if (this._delete(key))
    this.trigger('delete', key)
  return this
}

/**
 * Returns the difference between 2 spaces. The difference between 2 spaces is a space.
 *
 * b == a.patch(a.diff(b))
 *
 * todo: clean and refactor this.
 *
 * @param {Space} The space to compare the instance against.
 * @return {Space}
 */
Space.prototype.diff = function (space) {

  var diff = new Space()
  
  if (!(space instanceof Space))
    space = new Space(space)
  
  for (var i in this.keys) {
    
    var key = this.keys[i]
    var value = space.values[key]
    // Case: Deleted
    if (typeof value === 'undefined') {
      diff._set(key, '')
      continue
    }
    // Different Types
    if (typeof(this.values[key]) !== typeof(value)) {
      if (typeof value === 'object')
        diff._set(key, new Space(value))
      
      // We treat a value of 1 equal to '1'
      else if (this.values[key] == value)
        continue
      else
        diff._set(key, value)
      continue
    }
    // Strings, floats, etc
    if (typeof(this.values[key]) !== 'object') {
      if (this.values[key] != value)
        diff._set(key, value)
      continue
    }
    // Both are Objects
    var sub_diff = this.values[key].diff(value)
    if (sub_diff.keys.length)
      diff._set(key, sub_diff)
  }
  // Leftovers are Additions
  for (var i in space.keys) {
    var key = space.keys[i]
    var value = space.values[key]
    if (this.values[key])
      continue
    if (typeof value !== 'object') {
      diff._set(key, value)
      continue
    }
    else if (value instanceof Space)
      diff._set(key, new Space(value))
    else
      diff._set(key, new Space(space))
  }
  return diff
}

/**
 * @param {space}
 * @return {space} Returns empty space if order is equal.
 */
Space.prototype.diffOrder = function (space) {

  if (!(space instanceof Space))
    space = new Space(space)
  var diff = new Space()
  for (var i in space.keys) {
    var key = space.keys[i]
    var value = space.values[key]
    if (!(value instanceof Space) || !(this.values[key] instanceof Space))
      continue
    var childDiff = this.values[key].diffOrder(value)
    if (childDiff.isEmpty())
      continue
    diff._set(key, childDiff)
  }
  // Parent hasnt changed
  if (space.keys.join(' ') === this.keys.join(' '))
    return diff
  // Parent has changed
  diff.keys = space.keys
  for (var i in space.keys) {
    var key = space.keys[i]
    if (!diff.values.hasOwnProperty(key))
      diff.values[key] = new Space()
  }
  return diff
}

Space.prototype.each = function (fn) {
  for (var i in this.keys) {
    fn.call(this, this.keys[i], this.values[this.keys[i]])
  }
  return this
}

Space.prototype.isEmpty = function () {
  return this.keys.length === 0
}

Space.prototype.every = function (fn) {
  for (var i in this.keys) {
    var value = this.values[this.keys[i]]
    if (value instanceof Space)
      value.every(fn)
    fn.call(this, this.keys[i], this.values[this.keys[i]])
  }
  return this
}

/**
 * Search the space for a given path (xpath).
 * @param {string|int|space}
 * @param {space}
 * @return The matching value
 */
Space.prototype.get = function (query) {
  switch (typeof query) {
    case "string":
      return this.getByString(query)
    break
    case "object":
      return this.getBySpace(query)
    break
    case "number":
      return this.getByInt(query)
    break
  }
  return null
}

/**
 * @param {int}
 * @return The matching value
 */
Space.prototype.getByInt = function (index) {
  if (index < 0)
    index = this.keys.length + index
  var key = this.keys[index]
  return this.values[key]
}

/**
 * Search the space for a given path (xpath).
 * @param {string}
 * @return The matching value
 */
Space.prototype.getByString = function (xpath) {
  
  if (!xpath)
    return null
  if (!xpath.match(/ /))
    return this.values[xpath]
  var parts = xpath.split(/ /g)
  var current = parts.shift()
  
  // Not set
  if (!(current in this.values))
    return null
  
  return this.values[current].get(parts.join(' '))
}

/**
 * Recursively retrieve properties.
 * @param {space} 
 * @return Space
 */
Space.prototype.getBySpace = function (space) {
  var result = new Space()
  
  for (var i in space.keys) {
    var key = space.keys[i]
    var value = this.values[key]
    
    // If this doesnt have that property, continue
    if (typeof value === 'undefined')
      continue
    
    // If the request is a leaf or empty space, set
    if (!(space.values[key] instanceof Space) || !space.values[key].keys.length) {
      result._set(key, value)
      continue
    }
    
    // Else the request is a space with keys, make sure the subject is a space
    if (!(value instanceof Space))
      continue
    
    // Now time to recurse
    result._set(key, value.getBySpace(space.values[key]))
  }
  return result 
}

/**
 * @return int
 */
Space.prototype.length = function () {
  return this.keys.length
}

/**
 * Construct the Space from a string.
 * @param {string}
 * @return {Space}
 */
Space.prototype.loadFromString = function (string) {
  
  // Space always start on a key. Eliminate whitespace at beginning of string
  string = string.replace(/^[\n ]*/, '')
  
  /** Eliminate Windows \r characters and newlines at end of string.*/
  string = string.replace(/\n\r/g, '\n').replace(/\r\n/g, '\n')
  
  /** Eliminate newlines at end of string.*/
  string = string.replace(/[\n ]*$/, '')
  
  /** Space doesn't have useless lines*/
  string = string.replace(/\n\n+/, '\n')
  
  // Workaround for browsers without negative look ahead
  /*
  var spaces_without_delimiter = string.split(/\n([^ ])/),
      spaces = [spaces_without_delimiter[0]]
  
  // Now we recombine spaces.
  for (var i = 1; i < spaces_without_delimiter.length; i = i + 2) {
    spaces.push(spaces_without_delimiter[i] + spaces_without_delimiter[i+1])
  }
  */
  var spaces = string.split(/\n(?! )/g)
  
  for (var i in spaces) {
    var space = spaces[i]
    if (matches = space.match(/^([^ ]+)(\n|$)/)) // Space
      this._set(matches[1], new Space(space.substr(matches[1].length).replace(/\n /g, '\n')))
    else if (matches = space.match(/^([^ ]+) /)) // Leaf
      this._set(matches[1], space.substr(matches[1].length + 1).replace(/^\n /, '').replace(/\n /g, '\n') )
  }
  return this
}

/**
 * Return the next name in the Space, given a name.
 * @param {string}
 * @return {string}
 */
Space.prototype.next = function (name) {
  var index = this.keys.indexOf(name) + 1
  if (this.keys[index])
    return this.keys[index]
  return this.keys[0]
}

Space.prototype.off = function (eventName, fn) {
  if (!this.events[eventName])
    return true
  for (var i in this.events[eventName]) {
    if (this.events[eventName][i] === fn)
      this.events[eventName].splice(i, 1)
  }
}

Space.prototype.on = function (eventName, fn) {
  
  if (!this.events[eventName])
    this.events[eventName] = []
  this.events[eventName].push(fn)
}

/**
 * Apply a patch to the Space instance.
 * @param {Space|string}
 * @return {Space}
 */
Space.prototype._patch = function (patch) {
  
  if (!(patch instanceof Space))
    patch = new Space(patch)
  
  for (var i in patch.keys) {
    var key = patch.keys[i]
    var patchValue = patch.values[key]

    // If patch value is a string, doesnt matter what type subject is.
    if (typeof patchValue === 'string') {
      if (patchValue === '')
        this._delete(key)
      else
        this._set(key, patchValue)
      continue
    }
    
    // If patch value is an int, doesnt matter what type subject is.
    if (typeof patchValue === 'number') {
      this._set(key, patchValue)
      continue
    }
    
    // If its an empty space, delete patch.
    if (patchValue instanceof Space && !patchValue.keys.length) {
      this._delete(key)
      continue
    }
    
    // If both subject value and patch value are Spaces, do a recursive patch.
    if (this.values[key] instanceof Space) {
      this.values[key]._patch(patchValue)
      continue
    }
    
    // Final case. Do a deep copy of space.
    this._set(key, new Space(patchValue))
  }
  return this
}

Space.prototype.patch = function (patch) {
  // todo, don't trigger patch if no change
  this._patch(patch)
  this.trigger('patch')
  return this
}

/**
 * Change the order of the keys
 * @param {array|string}
 * @return {this}
 */
Space.prototype._patchOrder = function (space) {
  
  if (!(space instanceof Space))
    space = new Space(space)
  
  // make sure space has all keys
  var keys = this.keys.length
  for (var i in space.keys) {
    var key = space.keys[i]
    // If the keys differ a bit, skip this level
    if (!this.values.hasOwnProperty(key))
      break
    keys--
  }
  if (keys === 0) {
    // Reorder this level.
    this.keys = space.keys
  }
  for (var i in space.keys) {
    var key = space.keys[i]
    var value = space.values[key]
    if (value instanceof Space && value.keys.length && this.values[key] instanceof Space)
      this.values[key]._patchOrder(value)
  }
  return this
}

Space.prototype.patchOrder = function (space) {
  // todo: don't trigger event if no change
  this._patchOrder(space)
  this.trigger('patchOrder')
  return this
}

/**
 * Return the previous name in the Space, given a name.
 * @param {string}
 * @return {string}
 */
Space.prototype.prev = function (name) {
  var index = this.keys.indexOf(name) - 1
  if (index >= 0)
    return this.keys[index]
  return this.keys[this.keys.length - 1]
}

Space.prototype._rename = function (oldName, newName) {
  this.values[newName] = this.values[oldName]
  delete this.values[oldName]
  this.keys[this.keys.indexOf(oldName)] = newName
  return this
}

Space.prototype.rename = function (oldName, newName) {
  this._rename(oldName, newName)
  if (oldName !== newName)
    this.trigger('rename')
  return this
}

/**
 * Search the space for a given path (xpath).
 * @param {string}
 * @param {space}
 * @param {int} Optional index to insert at
 * @return The matching value
 */
Space.prototype._set = function (key, value, index) {
  if (!key)
    return null
  var steps = key.toString().split(/ /g)
  var context = this
  var step
  while (step = steps.shift()) {
    var newValue
    if (context.values[step] === undefined) {
      if (typeof index === 'number')
        context.keys.splice(index, 0, step)
      else
        context.keys.push(step)
    }
    // Leaf
    if (!steps.length)
      context.values[step] = value
    else if (!(context.values[step] instanceof Space))
      context.values[step] = new Space()
    context = context.values[step]
  }
  return this
}

Space.prototype.set = function (key, value, index) {
  var isUpdate = !!this.get(key)
  this._set(key, value, index)
  if (isUpdate)
    this.trigger('update')
  else
    this.trigger('create')
  return this
}

/**
 * Return executable javascript code.
 * @return {string}
 */
Space.prototype.toJavascript = function () {
  return 'new Space(\'' + this.toString().replace(/\n/g, '\\n').replace(/\'/g, '\\\'') + '\')'
}

/**
 * Return JSON
 * @return {string}
 */
Space.prototype.toJSON = function () {
  return JSON.stringify(this.toObject())
}

/**
 * Returns a regular javascript object
 * @return {object}
 */
Space.prototype.toObject = function () {
  var obj = {}
  for (var i in this.keys) {
    var key = this.keys[i]
    var value = this.values[key]
    if (value instanceof Space)
      obj[key] = value.toObject()
    else
      obj[key] = value
  }
  return obj
}

/**
 * @return {string}
 */
Space.prototype.toString =  function (spaces) {
  spaces = spaces || 0
  var string = ''
  // Iterate over each property
  for (var i in this.keys) {
    
    var key = this.keys[i]
    var value = this.values[key]

    // If property value is undefined
    if (typeof value === 'undefined') {
      string += '\n'
      continue
    }

    // Set up the key part of the key/value pair
    string += Space.strRepeat(' ', spaces) + key
    
    // If the value is a space, concatenate it
    if (value instanceof Space)
      string += '\n' + value.toString(spaces + 1)
    
    // If an object (other than class of space) snuck in there
    else if (typeof value === 'object')
      string += '\n' + new Space(value).toString(spaces + 1)
    
    // dont put a blank string on blank values.
    else if (value.toString() === '')
      string += '\n'
    
    // multiline string
    else if (value.toString().match(/\n/))
      string += ' \n' + Space.strRepeat(' ', spaces + 1) + value.toString().replace(/\n/g, '\n' + Space.strRepeat(' ', spaces + 1)) + '\n'
    
    // Plain string
    else
      string += ' ' + value.toString() + '\n'
  }
  return string
}

Space.prototype.trigger = function (eventName) {
  if (!this.events[eventName])
    return true
  for (var i in this.events[eventName]) {
    this.events[eventName][i].apply(this, arguments)
  }
}

// Export Space for use in Node.js
if (typeof exports != 'undefined')
  module.exports = Space;


;// If Node.js, import dependencies.
if (typeof exports !== 'undefined') {
  var Space = require('space'),
      fs = require('fs'),
      beautifyHtml = require('js-beautify').html,
      marked = require('marked')
}
// Use of certain client side functions depends on jQuery inclusion.

function Element (tag, attrs) {
  this.tag = tag
  this.attrs = attrs || {}
  this.content = ''
  return this
}

Element.prototype.addClass = function (className) {
  if (this.attrs['class'])
    this.attrs['class'] += ' ' + className
  else
    this.attrs['class'] = className
}

Element.prototype.append = function (string) {
  this.content += string
}

Element.prototype.attr = function (key, value) {
  this.attrs[key] = value
}

Element.prototype.html = function (string) {
  this.content += string
}

Element.prototype.toHtml = function () {
  var string = '<' + this.tag
  
  for (var i in this.attrs) {
    if (!this.attrs.hasOwnProperty(i))
      continue
    string += ' ' + i + '="' + this.attrs[i] + '"' 
  }
  string += '>' + this.content
  
  string += '</' + this.tag + '>'
  return string
}

/**
 * Scrap constructor
 * 
 * @param {string}
 * @param {Space}
 */
function Scrap (path, space) {
  this.path = path
  this.id = path.split(/ /g).pop() // Last part of path is id
  this.clear()
  if (!(space instanceof Space))
    space = new Space(space)
  this.patch(space)
  // load content?
  var scraps = this.values.scraps
  if (scraps instanceof Space) {
    for (var i in scraps.keys) {
      var id = scraps.keys[i]
      scraps.values[id] = new Scrap(path + ' ' + id, scraps.values[id])
    }
  }
  
  return this
}

/**
 * Takes text encoded in a certain format and returns HTML
 *
 * @param {string} Text to compile
 * @param {string} Options: nl2br|text|html|markdown
 * @return {string}
 */
Scrap.format = function (string, format) {
  if (format === 'nl2br')
    return string.toString().replace(/\n/g, '<br>')
  
  // todo
  else if (format === 'markdown')
    return marked(string)
  return string
}

/**
 * Evaluate a string and return the corresponding object. (Probably a better
 * way to do this)
 *
 * Given foobar, returns window.foobar
 * Given foobar.foo, returns window.foobar.foo
 *
 * @param {string} Javascript path to the variable. For example: document.location
 * @param {object} Context to evaluate any variables in. If not provided, uses window
 * @return Returns a variable that matches or null if it doesnt exist.
 */
Scrap.getPointer = function (string, context) {
  if (!string)
    return null
  
  // If you pass a string as the context, return null
  // or throw error?
  if (typeof context === 'string')
    return null
  
  // If on node.js return null
  if (!context && typeof window === 'undefined')
    return null
  if (!context)
    context = window
  var parts = string.split('.'),
      current = parts.shift()
  // Not set
  if (!(current in context))
    return null
  // Leaf
  if (!parts.length)
    return context[current]
  // Has scraps
  return Scrap.getPointer(parts.join('.'), context[current])
}

/**
 * Replace any {{variable}} with their value as set in the passed context.
 * You can also set placeholder text if the value is not defined by adding a space
 * and then some text after variable such as {{variable Lorem Ipsum}}
 *
 * @param {string} Something like "My name is {{name}}"
 * @param {object} Context to evaluate any variables in
 * @return {string}
 */
Scrap.replace = function (string, context) {
  return string.toString().replace(/\{\{([_a-zA-Z0-9\.]+)( [^\}]+)?\}\}/g, function(match, name, placeholder) {
    var variable = Scrap.getPointer(name, context)
    return variable || (placeholder ? placeholder.substr(1) : '')
  })
}

/**
 * Turns a style object like color red into css like .scrap { color : red; }
 * Also evals any variables.
 *
 * @param {string} DOM selector. .class #id etc.
 * @param {object} Name/values of css
 * @param {object} Context to evaluate any variables in
 * @return {string} 
 */
Scrap.styleToCss = function (selector, obj, context) {
  var string = selector + ' {\n'
  for (var css_property in obj) {
    if (!obj.hasOwnProperty(css_property))
      continue
    // Add colon and semicolon back on
    string += '  ' + css_property + ' : ' + obj[css_property].toString().replace(/\;$/, '') + ';\n'
  }
  string += '}\n'
  return Scrap.replace(string, context)
}

/**
 * Turns a style object like color red into color: red;
 * Also evals any variables.
 *
 * @param {object} Name/values of css
 * @param {object} Context to evaluate any variables in
 * @return {string} 
 */
Scrap.styleToInline = function (obj, context) {
  var string = ''
  for (var css_property in obj) {
    if (!obj.hasOwnProperty(css_property))
      continue
    // Add colon and semicolon back on
    string += css_property + ': ' + obj[css_property].toString().replace(/\;$/, '') + '; '
  }
  return Scrap.replace(string, context)
}

Scrap.events = 'onblur onchange onclick oncontextmenu onenterkey onfocus onhold onkeydown onkeypress onkeyup onmousedown onmouseout onmouseover onmouseup onorientationchange onsubmit ontouchend ontouchmove ontouchstart'.split(/ /)

// Scrap extends Space.
Scrap.prototype = new Space()

/**
 * @return {Scrap}
 */
Scrap.prototype.clone = function (id) {
  return new Scrap(id, this)
}

/**
 * Sets the innerHTML for uls, ols, and list tags. Basically, appends the child
 * elements.
 *
 * Example list:
 * scrap1
 *  tag ul
 *  loop {{colors}}
 *  scraps
 *   {{name}}
 *    tag ul
 *    content {{value}}
 *
 * @param {object} Context to evaluate any variables in.
 */
Scrap.prototype.loop = function (context) {
  
  // No items. do nothing
  if (!this.values.loop)
    return null
  
  // No item properties. do nothing
  if (!this.values.scraps)
    return null
  
  var partial = this.values.scraps.toString()
  
  var items = this.values.loop
  // Eval any pointers
  if (typeof items === 'string' && items.match(/\{\{/)) {
    items = Scrap.getPointer(items.replace(/\{|\}/g, ''), context)
  }
  // A space separated array
  if (typeof items === 'string') {
    items = this.values.loop.split(/ /g)
  }

  if (!items)
    return null
  
  if (!(items instanceof Space))
    items = new Space(items)
  
  var html = ''
  items.each(function (key, value) {
    
    // replace any variables in item
    var localContext = {key : key, value : value}
    var mold = partial.replace(/\{\{([_a-z0-9\.]+)\}\}/gi, function(match, variableName) {
      var res
      // Search the local context first
      if (res = Scrap.getPointer(variableName, localContext))
        return res
      // If no matches, search global context
      return Scrap.getPointer(variableName, context)
    })
    
    var scraps = new Space(mold)
    scraps.each(function (key, value) {
      html += new Scrap(key, value).toHtml()
    })
    
  })
  this.div.append(html)
}

Scrap.prototype.selector = function () {
  return '#' + this.path.replace(/ /g, ' #')
}

/**
 * Set the innerHTML.
 *
 * @param {object} Context to evaluate any variables in.
 */
Scrap.prototype.setContent = function (context, options) {
  
  if (!options)
    options = {}
  
  // We loop content if theres a loop
  if (this.values.loop)
    return this.loop(context)
  
  // If leaf node
  if (this.values.content)
    this.div.html(Scrap.format(Scrap.replace(this.values.content, context), this.values.content_format))
  
  // If styles node
  if (this.values.styles && this.values.styles instanceof Space) {
    var div = this.div
    this.values.styles.each(function (key, value) {
      div.html(Scrap.styleToCss(key, value.values, context))
    })
  }
  
  // If recursive
  if (this.values.scraps) {
    for (var i in this.values.scraps.keys) {
      var id = this.values.scraps.keys[i]
      // If a div has property draft true, dont render it
      if (!options.draft && this.values.scraps.values[id].values.draft === 'true')
        continue
      this.div.html(this.values.scraps.values[id].toHtml(context))
    }
  }
  return this
}

/**
 * Creates this.div. Sets the tag and HTML attrs of the dom element.
 *
 * @param {object} Context to evaluate any variables in.
 */
Scrap.prototype.setElementTag = function (context) {
  
  // Create the div and all static properties

  tag = (this.values.tag ? this.values.tag : 'div')
  
  this.div = new Element(tag)

  // Add the id
  this.div.attr('id', this.id)
  
  var properties = 'checked class contenteditable disabled draggable dropzone end for height href max maxlength min name origin pattern placeholder readonly rel required selected spellcheck src tabindex target title type width value'.split(/ /)
  for (var i in properties) {
    this.setProperty(properties[i], context)
  }
  
}

/**
 * Set the standard HTML properties like value, title, et cetera.
 *
 * @param {string} Name of the property to set
 * @param {object} Context to evaluate the variables in.
 */
Scrap.prototype.setProperty = function (name, context) {
  if (this.values[name])
    this.div.attr(name, Scrap.replace(this.values[name], context))
}

/**
 * Return all javascript necessary for scraps operation
 *
 * todo: refacor this
 *
 * @return {string}
 */
Scrap.prototype.setScript = function (context) {

  for (var i in Scrap.events) {
    var event = Scrap.events[i]
    if (!this.values[event])
      continue
    this.div.attr(event, this.values[event])
  }
}

/**
 * Return all css for a scrap.
 *
 * @param {object} Context to evaluate any variables in.
 * @return {string}
 */
Scrap.prototype.setStyle = function (context) {
  if (!this.values.style)
    return null
  if (!(this.values.style instanceof Space))
    return this.div.attr('style', this.values.style)
  this.div.attr('style', Scrap.styleToInline(this.values.style.values, context))
}

/**
 * Returns the HTML for a scrap without CSS or Script.
 *
 * @param {object} Context to evaluate any variables in.
 * @return {string}
 */
Scrap.prototype.toHtml = function (context, options) {
  if (!options)
    options = {}
  this.setElementTag(context)
  this.setContent(context, options)
  this.setStyle(context)
  if (options.noscript)
    null
  else
    this.setScript(context)
  return this.div.toHtml()
}

/**
 * Constructor.
 *
 * @param {Space} Any values to load from.
 */
function Page (space) {
  
  this.clear()
  
  if (space)
    this.patch(space)
  
  this.loadScraps()
  return this
}

// Page inherits from Space
Page.prototype = new Space()

/**
 * Does a deep copy
 *
 * @return {Page}
 */
Page.prototype.clone = function () {
  return new Page(this.values)
}

/**
 * Converts any scraps from Space to class of Scrap.
 */
Page.prototype.loadScraps = function () {
  // load all scraps
  for (var i in this.keys) {
    var id = this.keys[i]
    this.values[id] = new Scrap(id, this.values[id])
  }
}

/**
 * @param {object} Context
 * @return null
 */
Page.prototype.request = function (context) {
  // Compile any dynamic code
  // Execute any scraps of type server
  return false
  if (!this.get('head onrequest'))
    return null
  try {
    eval(this.get('head onrequest'))
  } catch (e) {
    if (e instanceof SyntaxError)
      console.log('Syntax error rendering onrequest %s', e.message)
    else
      console.log('Error rendering onrequest %s', e.message)
  }
}

/**
 * Get the full HTML of the page.
 *
 * @param {object} Context to evaluate variables in.
 * @return {string}
 */
Page.prototype.toHtml = function (context, options) {
  
  if (!context)
    context = {}
  
  if (!options)
    options = {}
  
  this.request(options)

  // todo: seperate css option
  // todo: separate javascript option
  var html = ''
  html += '<!doctype html>\n'
  html += '<html>'
  
  // Get all the html for every scrap
  // Todo: support after property
  for (var i in this.keys) {
    var id = this.keys[i]
    var scrap = this.values[id]
    // If a div has property draft true, and draft isnt set to true, skip it
    if (scrap.get('draft') === 'true' && !options.draft)
      continue
    html += '\n  ' + scrap.toHtml(context, options)
  }
  html += '\n</html>'
  if (options.beautify)
    return beautifyHtml(html)
  return html
}

// If Node.js, export as a module.
if (typeof exports !== 'undefined')
  module.exports = Page;

;var Thumbs = {}

Thumbs.getDimensions = function (target) {
  var box = {}
  var first = false
  $(target).contents().find('.scrap').each(function () {
    var left
    var right
    var _top
    var bottom
    if (!first) {
      box.left = $(this).position().left
      box.right = box.left + $(this).outerWidth()
      box.top = $(this).position().top
      box.bottom = box.top + $(this).outerHeight()
      first = true
    }
    else {
      left = $(this).position().left
      right = left + $(this).outerWidth()
      _top = $(this).position().top
      bottom = top + $(this).outerHeight()
      if (left < box.left)
        box.left = left
      if (right > box.right)
        box.right = right
      if (_top < box.top)
        box.top = _top
      if (bottom > box.bottom)
        box.bottom = bottom
    }
  })
  box.height = box.bottom - box.top
  box.width = box.right - box.left
  return box
}

/**
 * Generates a scaled down version of a page in an iframe
 *
 * @param {Space}
 * @param {object}
 * @return {jquery object}
 */
Thumbs.insert = function (page, destination, val, options) {
  var width = options.width
  var height = options.height

  var iframe = $('<iframe></iframe>')
  iframe.attr('frameborder', 0)
  iframe.attr('scrolling', 'no')
  iframe.css('width', width)
  iframe.css('height', height)
  

  destination.append(iframe)
  page._static = true
  
  iframe.contents().find('body').append(page.toHtml()).css('background-color', 'transparent')
  
  var clipbox = Thumbs.getDimensions(iframe)
//  console.log(clipbox)
  
  var body = iframe.contents().find('body')
  
  var ratio = 1
  
  // No transform needed, just center it
  if (clipbox.height <= height && clipbox.width <= width) {
    body.css({
      '-webkit-translate' : '0px ' + Math.round((height - clipbox.height)/2) + 'px'
    })
    return iframe
  }
  
  /*
  height : (scale * old_height) + 'px',
  width : (scale * old_width) + 'px',
  */
  var origin = '0 0'
  
  // Scale by height
  if (clipbox.width < width) {
    // height must be bigger
    var scale = 1.0 * height / clipbox.height
    var scaleString = 'scale(' + scale + ')'
    body.css({
      '-webkit-transform' : scaleString,
      'transform' : scaleString,
      '-moz-transform' : scaleString,
      'transform-origin' : origin
    })
    return iframe
  }
  
  // Scale by width
  if (clipbox.height < height) {
    // width must be bigger
    var scale = 1.0 * width / clipbox.width
    var scaleString = 'scale(' + scale + ')'
    var x = (clipbox.width - width)/2
    body.css({
      '-webkit-transform' : scaleString,
      'transform' : scaleString,
      '-moz-transform' : scaleString,
      'transform-origin' : origin
    })
    return iframe
  }
  
  // Scale by width
  if (clipbox.height < clipbox.width) {
    // width must be bigger
    var scale = 1.0 * width / clipbox.width
    var scaleString = 'scale(' + scale + ')'
    var x = (clipbox.width - width)/2
    body.css({
      '-webkit-transform' : scaleString,
      'transform' : scaleString,
      '-moz-transform' : scaleString,
      'transform-origin' : origin
    })
    return iframe
  }
  
  // height must be bigger
  var scale = 1.0 * height / clipbox.height
  var scaleString = 'scale(' + scale + ')'
  body.css({
    '-webkit-transform' : scaleString,
    'transform' : scaleString,
    '-moz-transform' : scaleString,
    'transform-origin' : origin
  })
  
  return iframe
}
;/*!
 * Platform.js v1.0.0 <http://mths.be/platform>
 * Copyright 2010-2013 John-David Dalton <http://allyoucanleet.com/>
 * Available under MIT license <http://mths.be/mit>
 */
;(function(window) {
  'use strict';

  /** Backup possible window/global object */
  var oldWin = window;

  /** Detect free variable `exports` */
  var freeExports = typeof exports == 'object' && exports;

  /** Detect free variable `global` */
  var freeGlobal = typeof global == 'object' && global &&
    (global == global.global ? (window = global) : global);

  /** Opera regexp */
  var reOpera = /Opera/;

  /** Used to resolve a value's internal [[Class]] */
  var toString = {}.toString;

  /** Detect Java environment */
  var java = /Java/.test(getClassOf(window.java)) && window.java;

  /** A character to represent alpha */
  var alpha = java ? 'a' : '\u03b1';

  /** A character to represent beta */
  var beta = java ? 'b' : '\u03b2';

  /** Browser document object */
  var doc = window.document || {};

  /** Used to check for own properties of an object */
  var hasOwnProperty = {}.hasOwnProperty;

  /** Browser navigator object */
  var nav = window.navigator || {};

  /**
   * Detect Opera browser
   * http://www.howtocreate.co.uk/operaStuff/operaObject.html
   * http://dev.opera.com/articles/view/opera-mini-web-content-authoring-guidelines/#operamini
   */
  var opera = window.operamini || window.opera;

  /** Opera [[Class]] */
  var operaClass = reOpera.test(operaClass = getClassOf(opera)) ? operaClass : (opera = null);

  /** Possible global object */
  var thisBinding = this;

  /** Browser user agent string */
  var userAgent = nav.userAgent || '';

  /*--------------------------------------------------------------------------*/

  /**
   * Capitalizes a string value.
   *
   * @private
   * @param {String} string The string to capitalize.
   * @returns {String} The capitalized string.
   */
  function capitalize(string) {
    string = String(string);
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  /**
   * An iteration utility for arrays and objects.
   *
   * @private
   * @param {Array|Object} object The object to iterate over.
   * @param {Function} callback The function called per iteration.
   */
  function each(object, callback) {
    var index = -1,
        length = object.length;

    if (length == length >>> 0) {
      while (++index < length) {
        callback(object[index], index, object);
      }
    } else {
      forOwn(object, callback);
    }
  }

  /**
   * Trim and conditionally capitalize string values.
   *
   * @private
   * @param {String} string The string to format.
   * @returns {String} The formatted string.
   */
  function format(string) {
    string = trim(string);
    return /^(?:webOS|i(?:OS|P))/.test(string)
      ? string
      : capitalize(string);
  }

  /**
   * Iterates over an object's own properties, executing the `callback` for each.
   *
   * @private
   * @param {Object} object The object to iterate over.
   * @param {Function} callback The function executed per own property.
   */
  function forOwn(object, callback) {
    for (var key in object) {
      hasKey(object, key) && callback(object[key], key, object);
    }
  }

  /**
   * Gets the internal [[Class]] of a value.
   *
   * @private
   * @param {Mixed} value The value.
   * @returns {String} The [[Class]].
   */
  function getClassOf(value) {
    return value == null
      ? capitalize(value)
      : toString.call(value).slice(8, -1);
  }

  /**
   * Checks if an object has the specified key as a direct property.
   *
   * @private
   * @param {Object} object The object to check.
   * @param {String} key The key to check for.
   * @returns {Boolean} Returns `true` if key is a direct property, else `false`.
   */
  function hasKey() {
    // lazy define for others (not as accurate)
    hasKey = function(object, key) {
      var parent = object != null && (object.constructor || Object).prototype;
      return !!parent && key in Object(object) && !(key in parent && object[key] === parent[key]);
    };
    // for modern browsers
    if (getClassOf(hasOwnProperty) == 'Function') {
      hasKey = function(object, key) {
        return object != null && hasOwnProperty.call(object, key);
      };
    }
    // for Safari 2
    else if ({}.__proto__ == Object.prototype) {
      hasKey = function(object, key) {
        var result = false;
        if (object != null) {
          object = Object(object);
          object.__proto__ = [object.__proto__, object.__proto__ = null, result = key in object][0];
        }
        return result;
      };
    }
    return hasKey.apply(this, arguments);
  }

  /**
   * Host objects can return type values that are different from their actual
   * data type. The objects we are concerned with usually return non-primitive
   * types of object, function, or unknown.
   *
   * @private
   * @param {Mixed} object The owner of the property.
   * @param {String} property The property to check.
   * @returns {Boolean} Returns `true` if the property value is a non-primitive, else `false`.
   */
  function isHostType(object, property) {
    var type = object != null ? typeof object[property] : 'number';
    return !/^(?:boolean|number|string|undefined)$/.test(type) &&
      (type == 'object' ? !!object[property] : true);
  }

  /**
   * Prepares a string for use in a RegExp constructor by making hyphens and
   * spaces optional.
   *
   * @private
   * @param {String} string The string to qualify.
   * @returns {String} The qualified string.
   */
  function qualify(string) {
    return String(string).replace(/([ -])(?!$)/g, '$1?');
  }

  /**
   * A bare-bones` Array#reduce` like utility function.
   *
   * @private
   * @param {Array} array The array to iterate over.
   * @param {Function} callback The function called per iteration.
   * @param {Mixed} accumulator Initial value of the accumulator.
   * @returns {Mixed} The accumulator.
   */
  function reduce(array, callback) {
    var accumulator = null;
    each(array, function(value, index) {
      accumulator = callback(accumulator, value, index, array);
    });
    return accumulator;
  }

  /**
   * Removes leading and trailing whitespace from a string.
   *
   * @private
   * @param {String} string The string to trim.
   * @returns {String} The trimmed string.
   */
  function trim(string) {
    return String(string).replace(/^ +| +$/g, '');
  }

  /*--------------------------------------------------------------------------*/

  /**
   * Creates a new platform object.
   *
   * @memberOf platform
   * @param {String} [ua = navigator.userAgent] The user agent string.
   * @returns {Object} A platform object.
   */
  function parse(ua) {

    ua || (ua = userAgent);

    /** Temporary variable used over the script's lifetime */
    var data;

    /** The CPU architecture */
    var arch = ua;

    /** Platform description array */
    var description = [];

    /** Platform alpha/beta indicator */
    var prerelease = null;

    /** A flag to indicate that environment features should be used to resolve the platform */
    var useFeatures = ua == userAgent;

    /** The browser/environment version */
    var version = useFeatures && opera && typeof opera.version == 'function' && opera.version();

    /* Detectable layout engines (order is important) */
    var layout = getLayout([
      { 'label': 'WebKit', 'pattern': 'AppleWebKit' },
      'iCab',
      'Presto',
      'NetFront',
      'Tasman',
      'Trident',
      'KHTML',
      'Gecko'
    ]);

    /* Detectable browser names (order is important) */
    var name = getName([
      'Adobe AIR',
      'Arora',
      'Avant Browser',
      'Camino',
      'Epiphany',
      'Fennec',
      'Flock',
      'Galeon',
      'GreenBrowser',
      'iCab',
      'Iceweasel',
      'Iron',
      'K-Meleon',
      'Konqueror',
      'Lunascape',
      'Maxthon',
      'Midori',
      'Nook Browser',
      'PhantomJS',
      'Raven',
      'Rekonq',
      'RockMelt',
      'SeaMonkey',
      { 'label': 'Silk', 'pattern': '(?:Cloud9|Silk-Accelerated)' },
      'Sleipnir',
      'SlimBrowser',
      'Sunrise',
      'Swiftfox',
      'WebPositive',
      'Opera Mini',
      'Opera',
      'Chrome',
      { 'label': 'Chrome Mobile', 'pattern': '(?:CriOS|CrMo)' },
      { 'label': 'Firefox', 'pattern': '(?:Firefox|Minefield)' },
      { 'label': 'IE', 'pattern': 'MSIE' },
      'Safari'
    ]);

    /* Detectable products (order is important) */
    var product = getProduct([
      'BlackBerry',
      { 'label': 'Galaxy S', 'pattern': 'GT-I9000' },
      { 'label': 'Galaxy S2', 'pattern': 'GT-I9100' },
      'Google TV',
      'iPad',
      'iPod',
      'iPhone',
      'Kindle',
      { 'label': 'Kindle Fire', 'pattern': '(?:Cloud9|Silk-Accelerated)' },
      'Nook',
      'PlayBook',
      'PlayStation Vita',
      'TouchPad',
      'Transformer',
      'Xoom'
    ]);

    /* Detectable manufacturers */
    var manufacturer = getManufacturer({
      'Apple': { 'iPad': 1, 'iPhone': 1, 'iPod': 1 },
      'Amazon': { 'Kindle': 1, 'Kindle Fire': 1 },
      'Asus': { 'Transformer': 1 },
      'Barnes & Noble': { 'Nook': 1 },
      'BlackBerry': { 'PlayBook': 1 },
      'Google': { 'Google TV': 1 },
      'HP': { 'TouchPad': 1 },
      'LG': { },
      'Motorola': { 'Xoom': 1 },
      'Nokia': { },
      'Samsung': { 'Galaxy S': 1, 'Galaxy S2': 1 },
      'Sony': { 'PlayStation Vita': 1 }
    });

    /* Detectable OSes (order is important) */
    var os = getOS([
      'Android',
      'CentOS',
      'Debian',
      'Fedora',
      'FreeBSD',
      'Gentoo',
      'Haiku',
      'Kubuntu',
      'Linux Mint',
      'Red Hat',
      'SuSE',
      'Ubuntu',
      'Xubuntu',
      'Cygwin',
      'Symbian OS',
      'hpwOS',
      'webOS ',
      'webOS',
      'Tablet OS',
      'Linux',
      'Mac OS X',
      'Macintosh',
      'Mac',
      'Windows 98;',
      'Windows '
    ]);

    /*------------------------------------------------------------------------*/

    /**
     * Picks the layout engine from an array of guesses.
     *
     * @private
     * @param {Array} guesses An array of guesses.
     * @returns {String|Null} The detected layout engine.
     */
    function getLayout(guesses) {
      return reduce(guesses, function(result, guess) {
        return result || RegExp('\\b' + (
          guess.pattern || qualify(guess)
        ) + '\\b', 'i').exec(ua) && (guess.label || guess);
      });
    }

    /**
     * Picks the manufacturer from an array of guesses.
     *
     * @private
     * @param {Array} guesses An array of guesses.
     * @returns {String|Null} The detected manufacturer.
     */
    function getManufacturer(guesses) {
      return reduce(guesses, function(result, value, key) {
        // lookup the manufacturer by product or scan the UA for the manufacturer
        return result || (
          value[product] ||
          value[0/*Opera 9.25 fix*/, /^[a-z]+(?: +[a-z]+\b)*/i.exec(product)] ||
          RegExp('\\b' + (key.pattern || qualify(key)) + '(?:\\b|\\w*\\d)', 'i').exec(ua)
        ) && (key.label || key);
      });
    }

    /**
     * Picks the browser name from an array of guesses.
     *
     * @private
     * @param {Array} guesses An array of guesses.
     * @returns {String|Null} The detected browser name.
     */
    function getName(guesses) {
      return reduce(guesses, function(result, guess) {
        return result || RegExp('\\b' + (
          guess.pattern || qualify(guess)
        ) + '\\b', 'i').exec(ua) && (guess.label || guess);
      });
    }

    /**
     * Picks the OS name from an array of guesses.
     *
     * @private
     * @param {Array} guesses An array of guesses.
     * @returns {String|Null} The detected OS name.
     */
    function getOS(guesses) {
      return reduce(guesses, function(result, guess) {
        var pattern = guess.pattern || qualify(guess);
        if (!result && (result =
            RegExp('\\b' + pattern + '(?:/[\\d.]+|[ \\w.]*)', 'i').exec(ua))) {
          // platform tokens defined at
          // http://msdn.microsoft.com/en-us/library/ms537503(VS.85).aspx
          // http://web.archive.org/web/20081122053950/http://msdn.microsoft.com/en-us/library/ms537503(VS.85).aspx
          data = {
            '6.2':  '8',
            '6.1':  'Server 2008 R2 / 7',
            '6.0':  'Server 2008 / Vista',
            '5.2':  'Server 2003 / XP 64-bit',
            '5.1':  'XP',
            '5.01': '2000 SP1',
            '5.0':  '2000',
            '4.0':  'NT',
            '4.90': 'ME'
          };
          // detect Windows version from platform tokens
          if (/^Win/i.test(result) &&
              (data = data[0/*Opera 9.25 fix*/, /[\d.]+$/.exec(result)])) {
            result = 'Windows ' + data;
          }
          // correct character case and cleanup
          result = format(String(result)
            .replace(RegExp(pattern, 'i'), guess.label || guess)
            .replace(/ ce$/i, ' CE')
            .replace(/hpw/i, 'web')
            .replace(/Macintosh/, 'Mac OS')
            .replace(/_PowerPC/i, ' OS')
            .replace(/(OS X) [^ \d]+/i, '$1')
            .replace(/\/(\d)/, ' $1')
            .replace(/_/g, '.')
            .replace(/(?: BePC|[ .]*fc[ \d.]+)$/i, '')
            .replace(/x86\.64/gi, 'x86_64')
            .split(' on ')[0]);
        }
        return result;
      });
    }

    /**
     * Picks the product name from an array of guesses.
     *
     * @private
     * @param {Array} guesses An array of guesses.
     * @returns {String|Null} The detected product name.
     */
    function getProduct(guesses) {
      return reduce(guesses, function(result, guess) {
        var pattern = guess.pattern || qualify(guess);
        if (!result && (result =
              RegExp('\\b' + pattern + ' *\\d+[.\\w_]*', 'i').exec(ua) ||
              RegExp('\\b' + pattern + '(?:; *(?:[a-z]+[_-])?[a-z]+\\d+|[^ ();-]*)', 'i').exec(ua)
            )) {
          // split by forward slash and append product version if needed
          if ((result = String(guess.label || result).split('/'))[1] && !/[\d.]+/.test(result[0])) {
            result[0] += ' ' + result[1];
          }
          // correct character case and cleanup
          guess = guess.label || guess;
          result = format(result[0]
            .replace(RegExp(pattern, 'i'), guess)
            .replace(RegExp('; *(?:' + guess + '[_-])?', 'i'), ' ')
            .replace(RegExp('(' + guess + ')(\\w)', 'i'), '$1 $2'));
        }
        return result;
      });
    }

    /**
     * Resolves the version using an array of UA patterns.
     *
     * @private
     * @param {Array} patterns An array of UA patterns.
     * @returns {String|Null} The detected version.
     */
    function getVersion(patterns) {
      return reduce(patterns, function(result, pattern) {
        return result || (RegExp(pattern +
          '(?:-[\\d.]+/|(?: for [\\w-]+)?[ /-])([\\d.]+[^ ();/_-]*)', 'i').exec(ua) || 0)[1] || null;
      });
    }

    /*------------------------------------------------------------------------*/

    /**
     * Returns `platform.description` when the platform object is coerced to a string.
     *
     * @name toString
     * @memberOf platform
     * @returns {String} Returns `platform.description` if available, else an empty string.
     */
    function toStringPlatform() {
      return this.description || '';
    }

    /*------------------------------------------------------------------------*/

    // convert layout to an array so we can add extra details
    layout && (layout = [layout]);

    // detect product names that contain their manufacturer's name
    if (manufacturer && !product) {
      product = getProduct([manufacturer]);
    }
    // clean up Google TV
    if ((data = /Google TV/.exec(product))) {
      product = data[0];
    }
    // detect simulators
    if (/\bSimulator\b/i.test(ua)) {
      product = (product ? product + ' ' : '') + 'Simulator';
    }
    // detect iOS
    if (/^iP/.test(product)) {
      name || (name = 'Safari');
      os = 'iOS' + ((data = / OS ([\d_]+)/i.exec(ua))
        ? ' ' + data[1].replace(/_/g, '.')
        : '');
    }
    // detect Kubuntu
    else if (name == 'Konqueror' && !/buntu/i.test(os)) {
      os = 'Kubuntu';
    }
    // detect Android browsers
    else if (manufacturer && manufacturer != 'Google' &&
        /Chrome|Vita/.test(name + ';' + product)) {
      name = 'Android Browser';
      os = /Android/.test(os) ? os : 'Android';
    }
    // detect false positives for Firefox/Safari
    else if (!name || (data = !/\bMinefield\b/i.test(ua) && /Firefox|Safari/.exec(name))) {
      // escape the `/` for Firefox 1
      if (name && !product && /[\/,]|^[^(]+?\)/.test(ua.slice(ua.indexOf(data + '/') + 8))) {
        // clear name of false positives
        name = null;
      }
      // reassign a generic name
      if ((data = product || manufacturer || os) &&
          (product || manufacturer || /Android|Symbian OS|Tablet OS|webOS/.test(os))) {
        name = /[a-z]+(?: Hat)?/i.exec(/Android/.test(os) ? os : data) + ' Browser';
      }
    }
    // detect non-Opera versions (order is important)
    if (!version) {
      version = getVersion([
        '(?:Cloud9|CriOS|CrMo|Opera ?Mini|Raven|Silk(?!/[\\d.]+$))',
        'Version',
        qualify(name),
        '(?:Firefox|Minefield|NetFront)'
      ]);
    }
    // detect stubborn layout engines
    if (layout == 'iCab' && parseFloat(version) > 3) {
      layout = ['WebKit'];
    } else if (data =
        /Opera/.test(name) && 'Presto' ||
        /\b(?:Midori|Nook|Safari)\b/i.test(ua) && 'WebKit' ||
        !layout && /\bMSIE\b/i.test(ua) && (/^Mac/.test(os) ? 'Tasman' : 'Trident')) {
      layout = [data];
    }
    // leverage environment features
    if (useFeatures) {
      // detect server-side environments
      // Rhino has a global function while others have a global object
      if (isHostType(window, 'global')) {
        if (java) {
          data = java.lang.System;
          arch = data.getProperty('os.arch');
          os = os || data.getProperty('os.name') + ' ' + data.getProperty('os.version');
        }
        if (typeof exports == 'object' && exports) {
          // if `thisBinding` is the [ModuleScope]
          if (thisBinding == oldWin && typeof system == 'object' && (data = [system])[0]) {
            os || (os = data[0].os || null);
            try {
              data[1] = require('ringo/engine').version;
              version = data[1].join('.');
              name = 'RingoJS';
            } catch(e) {
              if (data[0].global == freeGlobal) {
                name = 'Narwhal';
              }
            }
          } else if (typeof process == 'object' && (data = process)) {
            name = 'Node.js';
            arch = data.arch;
            os = data.platform;
            version = /[\d.]+/.exec(data.version)[0];
          }
        } else if (getClassOf(window.environment) == 'Environment') {
          name = 'Rhino';
        }
      }
      // detect Adobe AIR
      else if (getClassOf(data = window.runtime) == 'ScriptBridgingProxyObject') {
        name = 'Adobe AIR';
        os = data.flash.system.Capabilities.os;
      }
      // detect PhantomJS
      else if (getClassOf(data = window.phantom) == 'RuntimeObject') {
        name = 'PhantomJS';
        version = (data = data.version || null) && (data.major + '.' + data.minor + '.' + data.patch);
      }
      // detect IE compatibility modes
      else if (typeof doc.documentMode == 'number' && (data = /\bTrident\/(\d+)/i.exec(ua))) {
        // we're in compatibility mode when the Trident version + 4 doesn't
        // equal the document mode
        version = [version, doc.documentMode];
        if ((data = +data[1] + 4) != version[1]) {
          description.push('IE ' + version[1] + ' mode');
          layout[1] = '';
          version[1] = data;
        }
        version = name == 'IE' ? String(version[1].toFixed(1)) : version[0];
      }
      os = os && format(os);
    }
    // detect prerelease phases
    if (version && (data =
        /(?:[ab]|dp|pre|[ab]\d+pre)(?:\d+\+?)?$/i.exec(version) ||
        /(?:alpha|beta)(?: ?\d)?/i.exec(ua + ';' + (useFeatures && nav.appMinorVersion)) ||
        /\bMinefield\b/i.test(ua) && 'a')) {
      prerelease = /b/i.test(data) ? 'beta' : 'alpha';
      version = version.replace(RegExp(data + '\\+?$'), '') +
        (prerelease == 'beta' ? beta : alpha) + (/\d+\+?/.exec(data) || '');
    }
    // rename code name "Fennec"
    if (name == 'Fennec') {
      name = 'Firefox Mobile';
    }
    // obscure Maxthon's unreliable version
    else if (name == 'Maxthon' && version) {
      version = version.replace(/\.[\d.]+/, '.x');
    }
    // detect Silk desktop/accelerated modes
    else if (name == 'Silk') {
      if (!/Mobi/i.test(ua)) {
        os = 'Android';
        description.unshift('desktop mode');
      }
      if (/Accelerated *= *true/i.test(ua)) {
        description.unshift('accelerated');
      }
    }
    // detect Windows Phone desktop mode
    else if (name == 'IE' && (data = (/; *(?:XBLWP|ZuneWP)(\d+)/i.exec(ua) || 0)[1])) {
      name += ' Mobile';
      os = 'Windows Phone OS ' + data + '.x';
      description.unshift('desktop mode');
    }
    // add mobile postfix
    else if ((name == 'IE' || name && !product && !/Browser|Mobi/.test(name)) &&
        (os == 'Windows CE' || /Mobi/i.test(ua))) {
      name += ' Mobile';
    }
    // detect IE platform preview
    else if (name == 'IE' && useFeatures && typeof external == 'object' && !external) {
      description.unshift('platform preview');
    }
    // detect BlackBerry OS version
    // http://docs.blackberry.com/en/developers/deliverables/18169/HTTP_headers_sent_by_BB_Browser_1234911_11.jsp
    else if (/BlackBerry/.test(product) && (data =
        (RegExp(product.replace(/ +/g, ' *') + '/([.\\d]+)', 'i').exec(ua) || 0)[1] ||
        version)) {
      os = 'Device Software ' + data;
      version = null;
    }
    // detect Opera identifying/masking itself as another browser
    // http://www.opera.com/support/kb/view/843/
    else if (this != forOwn && (
          (useFeatures && opera) ||
          (/Opera/.test(name) && /\b(?:MSIE|Firefox)\b/i.test(ua)) ||
          (name == 'Firefox' && /OS X (?:\d+\.){2,}/.test(os)) ||
          (name == 'IE' && (
            (os && !/^Win/.test(os) && version > 5.5) ||
            /Windows XP/.test(os) && version > 8 ||
            version == 8 && !/Trident/.test(ua)
          ))
        ) && !reOpera.test(data = parse.call(forOwn, ua.replace(reOpera, '') + ';')) && data.name) {

      // when "indentifying", the UA contains both Opera and the other browser's name
      data = 'ing as ' + data.name + ((data = data.version) ? ' ' + data : '');
      if (reOpera.test(name)) {
        if (/IE/.test(data) && os == 'Mac OS') {
          os = null;
        }
        data = 'identify' + data;
      }
      // when "masking", the UA contains only the other browser's name
      else {
        data = 'mask' + data;
        if (operaClass) {
          name = format(operaClass.replace(/([a-z])([A-Z])/g, '$1 $2'));
        } else {
          name = 'Opera';
        }
        if (/IE/.test(data)) {
          os = null;
        }
        if (!useFeatures) {
          version = null;
        }
      }
      layout = ['Presto'];
      description.push(data);
    }
    // detect WebKit Nightly and approximate Chrome/Safari versions
    if ((data = (/\bAppleWebKit\/([\d.]+\+?)/i.exec(ua) || 0)[1])) {
      // correct build for numeric comparison
      // (e.g. "532.5" becomes "532.05")
      data = [parseFloat(data.replace(/\.(\d)$/, '.0$1')), data];
      // nightly builds are postfixed with a `+`
      if (name == 'Safari' && data[1].slice(-1) == '+') {
        name = 'WebKit Nightly';
        prerelease = 'alpha';
        version = data[1].slice(0, -1);
      }
      // clear incorrect browser versions
      else if (version == data[1] ||
          version == (/\bSafari\/([\d.]+\+?)/i.exec(ua) || 0)[1]) {
        version = null;
      }
      // use the full Chrome version when available
      data = [data[0], (/\bChrome\/([\d.]+)/i.exec(ua) || 0)[1]];

      // detect JavaScriptCore
      // http://stackoverflow.com/questions/6768474/how-can-i-detect-which-javascript-engine-v8-or-jsc-is-used-at-runtime-in-androi
      if (!useFeatures || (/internal|\n/i.test(toString.toString()) && !data[1])) {
        layout[1] = 'like Safari';
        data = (data = data[0], data < 400 ? 1 : data < 500 ? 2 : data < 526 ? 3 : data < 533 ? 4 : data < 534 ? '4+' : data < 535 ? 5 : '5');
      } else {
        layout[1] = 'like Chrome';
        data = data[1] || (data = data[0], data < 530 ? 1 : data < 532 ? 2 : data < 532.05 ? 3 : data < 533 ? 4 : data < 534.03 ? 5 : data < 534.07 ? 6 : data < 534.10 ? 7 : data < 534.13 ? 8 : data < 534.16 ? 9 : data < 534.24 ? 10 : data < 534.30 ? 11 : data < 535.01 ? 12 : data < 535.02 ? '13+' : data < 535.07 ? 15 : data < 535.11 ? 16 : data < 535.19 ? 17 : data < 536.05 ? 18 : data < 536.10 ? 19 : data < 537.01 ? 20 : '21');
      }
      // add the postfix of ".x" or "+" for approximate versions
      layout[1] += ' ' + (data += typeof data == 'number' ? '.x' : /[.+]/.test(data) ? '' : '+');
      // obscure version for some Safari 1-2 releases
      if (name == 'Safari' && (!version || parseInt(version) > 45)) {
        version = data;
      }
    }
    // detect Opera desktop modes
    if (name == 'Opera' &&  (data = /(?:zbov|zvav)$/.exec(os))) {
      name += ' ';
      description.unshift('desktop mode');
      if (data == 'zvav') {
        name += 'Mini';
        version = null;
      } else {
        name += 'Mobile';
      }
    }
    // detect Chrome desktop mode
    else if (name == 'Safari' && /Chrome/.exec(layout[1])) {
      description.unshift('desktop mode');
      name = 'Chrome Mobile';
      version = null;

      if (/Mac OS X/.test(os)) {
        manufacturer = 'Apple';
        os = 'iOS 4.3+';
      } else {
        os = null;
      }
    }
    // strip incorrect OS versions
    if (version && version.indexOf(data = /[\d.]+$/.exec(os)) == 0 &&
        ua.indexOf('/' + data + '-') > -1) {
      os = trim(os.replace(data, ''));
    }
    // add layout engine
    if (layout && !/Avant|Nook/.test(name) && (
        /Browser|Lunascape|Maxthon/.test(name) ||
        /^(?:Adobe|Arora|Midori|Phantom|Rekonq|Rock|Sleipnir|Web)/.test(name) && layout[1])) {
      // don't add layout details to description if they are falsey
      (data = layout[layout.length - 1]) && description.push(data);
    }
    // combine contextual information
    if (description.length) {
      description = ['(' + description.join('; ') + ')'];
    }
    // append manufacturer
    if (manufacturer && product && product.indexOf(manufacturer) < 0) {
      description.push('on ' + manufacturer);
    }
    // append product
    if (product) {
      description.push((/^on /.test(description[description.length -1]) ? '' : 'on ') + product);
    }
    // parse OS into an object
    if (os) {
      data = / ([\d.+]+)$/.exec(os);
      os = {
        'architecture': 32,
        'family': data ? os.replace(data[0], '') : os,
        'version': data ? data[1] : null,
        'toString': function() {
          var version = this.version;
          return this.family + (version ? ' ' + version : '') + (this.architecture == 64 ? ' 64-bit' : '');
        }
      };
    }
    // add browser/OS architecture
    if ((data = /\b(?:AMD|IA|Win|WOW|x86_|x)64\b/i.exec(arch)) && !/\bi686\b/i.test(arch)) {
      if (os) {
        os.architecture = 64;
        os.family = os.family.replace(RegExp(' *' + data), '');
      }
      if (name && (/WOW64/i.test(ua) ||
          (useFeatures && /\w(?:86|32)$/.test(nav.cpuClass || nav.platform)))) {
        description.unshift('32-bit');
      }
    }

    ua || (ua = null);

    /*------------------------------------------------------------------------*/

    /**
     * The platform object.
     *
     * @name platform
     * @type Object
     */
    return {

      /**
       * The browser/environment version.
       *
       * @memberOf platform
       * @type String|Null
       */
      'version': name && version && (description.unshift(version), version),

      /**
       * The name of the browser/environment.
       *
       * @memberOf platform
       * @type String|Null
       */
      'name': name && (description.unshift(name), name),

      /**
       * The name of the operating system.
       *
       * @memberOf platform
       * @type Object
       */
      'os': os
        ? (name &&
            !(os == String(os).split(' ')[0] && (os == name.split(' ')[0] || product)) &&
              description.push(product ? '(' + os + ')' : 'on ' + os), os)
        : {

          /**
           * The CPU architecture the OS is built for.
           *
           * @memberOf platform.os
           * @type Number|Null
           */
          'architecture': null,

          /**
           * The family of the OS.
           *
           * @memberOf platform.os
           * @type String|Null
           */
          'family': null,

          /**
           * The version of the OS.
           *
           * @memberOf platform.os
           * @type String|Null
           */
          'version': null,

          /**
           * Returns the OS string.
           *
           * @memberOf platform.os
           * @returns {String} The OS string.
           */
          'toString': function() { return 'null'; }
        },

      /**
       * The platform description.
       *
       * @memberOf platform
       * @type String|Null
       */
      'description': description.length ? description.join(' ') : ua,

      /**
       * The name of the browser layout engine.
       *
       * @memberOf platform
       * @type String|Null
       */
      'layout': layout && layout[0],

      /**
       * The name of the product's manufacturer.
       *
       * @memberOf platform
       * @type String|Null
       */
      'manufacturer': manufacturer,

      /**
       * The alpha/beta release indicator.
       *
       * @memberOf platform
       * @type String|Null
       */
      'prerelease': prerelease,

      /**
       * The name of the product hosting the browser.
       *
       * @memberOf platform
       * @type String|Null
       */
      'product': product,

      /**
       * The browser's user agent string.
       *
       * @memberOf platform
       * @type String|Null
       */
      'ua': ua,

      // parses a user agent string into a platform object
      'parse': parse,

      // returns the platform description
      'toString': toStringPlatform
    };
  }

  /*--------------------------------------------------------------------------*/

  // expose platform
  // some AMD build optimizers, like r.js, check for specific condition patterns like the following:
  if (typeof define == 'function' && typeof define.amd == 'object' && define.amd) {
    // define as an anonymous module so, through path mapping, it can be aliased
    define(function() {
      return parse();
    });
  }
  // check for `exports` after `define` in case a build optimizer adds an `exports` object
  else if (freeExports) {
    // in Narwhal, Node.js, or RingoJS
    forOwn(parse(), function(value, key) {
      freeExports[key] = value;
    });
  }
  // in a browser or Rhino
  else {
    // use square bracket notation so Closure Compiler won't munge `platform`
    // http://code.google.com/closure/compiler/docs/api-tutorial3.html#export
    window['platform'] = parse();
  }
}(this));
;/**
 * An app is just a page. should be contained in 1 file.
 * it has an id and a view.
 * head
 *  title title
 *
 */
function App(name) {
  this.name = name
  this._open = false
}

App.openApp = null

App.prototype.close = function (name) {

  // Return false if already closed
  if (!this._open)
    return false
    
  
  this._open = false
  App.openApp = false
  
  $('.nudgepadApp').hide()
  
  if (name)
    nudgepad.apps[name].open()
  
}

/**
 * @return {bool}
 */
App.prototype.isOpen = function () {
  return this._open
}

App.prototype.open = function () {

  // Return false if already open
  if (this._open)
    return false
  
  // Close Any open app bar app
  if (App.openApp)
    return App.openApp.close(this.name)
  
  // On open event
  if (this.onopen)
    this.onopen()
  
  $('#nudgepad' + ToProperCase(this.name) + 'App').show()
  
  App.openApp = this
  this._open = true
  
  // todo: i think we can remove selection
  nudgepad.trigger('selection')
  
  // On ready event
  if (this.onready)
    this.onready()

  mixpanel.track('I opened the ' + this.name + ' app')

}

/**
 */
App.prototype.restart = function () {
  this.close()
  this.open()
}

App.prototype.toggle = function () {
  if (this._open)
    this.close()
  else
    this.open()
}

;// Shim window.console for IE.
if (!window.console)
 window.console = {log: function() {}}

/**
 * The Editor. The main nudgepad namespace.
 *
 * @special Singleton
 */
nudgepad = {}
nudgepad.apps = {}
Design = {}
Design.stage = {}
nudgepad.id = new Date().getTime()
Tab = new Space('id ' + nudgepad.id)
Tab.set('device', platform.name + (platform.product ? '/' + platform.product : ''))

nudgepad.setTabColor = function () {
  if (Tab.get('color'))
    return true
  var colors = ['red', 'green', 'violet', 'yellow', 'blue', 'orange', 'indigo']
  var used = []
  site.values.collage.each(function (key, value) {
    if (value.get('color'))
      used.push(value.get('color'))
  })
  var freeColors = _.difference(colors, used)
  if (freeColors.length < 1)
    freeColors.push('black')
  Tab.set('color', freeColors[0])
}

Tab.on('patch', function () {
  site.set('collage ' + nudgepad.id, this)
  nudgepad.emit('collage.update', this)
})


nudgepad.isTesting = false

// Nudgepad Events
nudgepad.events = {
  'selection' : [],
  'stage' : [],
  'page' : [],
  'disconnect' : [],
  'collage.update' : [],
  'ping' : [],
  'main' : [],
  'patch' : [],
  'ready' : [],
  'public' : [],
  'uploadComplete' : []
}

/**
 * Requests the data from the server and loads the editor.
 */
nudgepad.main = function (callback) {
  
  nudgepad.domain = document.location.host
  
  // Load plugins
  Design.grid = new Grid()
  nudgepad.cookie = parseCookie(document.cookie)
  nudgepad.name = ParseName(nudgepad.cookie.email)
  Tab.set('email', nudgepad.cookie.email)
  Tab.set('name', nudgepad.name)
  
  
  // In case we open multiple tabs
  window.name = 'nudgepad'
  
  // Can blocks be selected on click
  nudgepad.select = true
  
  // Only allow shortcuts on tools
  Events.shortcut.context = '.nudgepad'
  
  // TODO: on capture phase, capture block clicks, check if shiftkey is held,
  // if shiftkey is not held, prevent any events from firing on click?
  // document.body.addEventListener('mouseup', PopupHider.hide, true)
  
  nudgepad.query = ParseQueryString()
  // Fetch all files in the background.
  Explorer.getSite(function () {
    
    
    // SLOW?? maybe not anymore
    // Render icons
    
    nudgepad.bind_shortcuts()
    
    // Open socket
    nudgepad.socket = io.connect('/')

    nudgepad.socket.on('public', function (space) {
      nudgepad.trigger('public', space)
    })

    nudgepad.socket.on('uploadComplete', function (file) {
      nudgepad.trigger('uploadComplete', file)
    })

    nudgepad.socket.on('patch', function (space) {
      nudgepad.trigger('patch', space)
    })

    nudgepad.socket.on('connect_failed', function (error) {
      console.log('Connect failed')
      console.log(error)
      $('#nudgepadConnectionStatus').html('Connection to server failed...').show()
    })

    nudgepad.socket.on('error', function (error) {
      console.log(error)
      $('#nudgepadConnectionStatus').html('Connecting to server...').show()
    })

    nudgepad.socket.on('disconnect', function (message) {
      nudgepad.trigger('disconnect', message)
    })
    
    nudgepad.socket.on('collage.update', function (patch) {
      site.values.collage.patch(patch)
      nudgepad.trigger('collage.update')
      
    })
    
    nudgepad.socket.on('collage.delete', function (id) {
      var tabName = site.get('collage ' + id)
      Flasher.flash(tabName.get('name') + ' closed a tab')
      site.values.collage.delete(id)
      nudgepad.trigger('collage.update')
    })
    
    nudgepad.socket.on('collage.create', function (patch) {
      patch = new Space(patch)
      site.values.collage.patch(patch)
      var id = patch.keys[0]
      Flasher.flash(patch.get(id + ' name') + ' opened a tab')
    })

    nudgepad.socket.on('ack', function (message) {
      nudgepad.trigger('ping', message)
    })

    nudgepad.socket.on('connect', function (message) {
      console.log('connected to server %s', message)
      $('#nudgepadConnectionStatus').html('Connected!').fadeOut()
      nudgepad.restartCheck()
    })
    

    // Do some special stuff for ios
    nudgepad.iosMain()
    
    var activePage = store.get('activePage') || 'home'
    
    if (!site.get('pages ' + activePage))
      activePage = 'home'
    
    Design.stage.open(activePage)
    
    // Update all handles on resize
    $(window).on('resize', function () {
      $('.handle').trigger('update')
    })
    
    nudgepad.warnBeforeReload = true
    
    window.onbeforeunload = function(e) {
      if (nudgepad.warnBeforeReload)
        return nudgepad.reloadMessage()
    }
    
    $('body').scrollTop(0)
    $('body').scrollLeft(0)

    Launcher.openAppFromQueryString()
    
    $('#nudgepadLoadingScreen').hide()
    
    // Prevent Images from dragging on Firefox
    $(document).on('dragstart', 'img', function(event) { event.preventDefault()})
    
    // fetch other timelines in background for now
    // SLOW
    Explorer.downloadTimelines()
    
    nudgepad.trigger('main')
    
    mixpanel.track('I opened NudgePad')
    
    if (nudgepad.query.newSite && !store.get('opens')) {
      store.set('opens', 1)
      var howLongItTookToCreateThisSite = new Date().getTime() - nudgepad.query.timestamp
      mixpanel.track('I created a new website', {
        'time' : howLongItTookToCreateThisSite
      })
      console.log('It took %sms to create this site', howLongItTookToCreateThisSite)
      
    }
    
    Lasso.selector = '#nudgepadStageBody .scrap:visible'
    $(document).on('lasso', '.scrap', function () {
      $(this).selectMe()
      return false
    })
    Lasso.enable()
      
    if (callback)
      callback()
    
  })
}

/**
 * Sends an patch to the server via websockets/scoketio.
 *
 * @param {string} Event name
 * @param {Space}
 */
nudgepad.emit = function (event, space) {
  if (nudgepad.isTesting)
    return null
  
  nudgepad.socket.emit(event, space.toString(), function (data) {
    console.log(data)
  })
}

/**
 * Remove an event listener
 *
 * @param {string} Name of the event.
 * @param {function} fn to unbind
 */
nudgepad.off = function (event, fn) {
  
}

/**
 * @param {string} Name of the event. Need to make some docs for these
 * @param {function}
 */
nudgepad.on = function (eventName, fn) {
  nudgepad.events[eventName].push(fn)
}

/**
 * Removes all dom elements.
 */
nudgepad.quit = function () {
  $('.scrap,.nudgepad').remove()
}


/**
 * Fire a Nudgepad event.
 *
 * @param {string} Name of the event.
 * @param {space} Object
 */
nudgepad.trigger = function (eventName, space) {
  for (var i in nudgepad.events[eventName]) {
    nudgepad.events[eventName][i](space)
  }
}
;/**
 * @return {bool}
 */
nudgepad.isIOS = function () {
  return navigator.userAgent.match(/iPad|iPhone|iPod/i) != null
}

/**
 * Some tweaks to make iOS devices behave how he want.
 */
nudgepad.iosMain = function () {
  if (nudgepad.isIOS()) {
    $(document).on("touchstart", function(event) {
      if (event.originalEvent.touches.length > 1) {
        event.stopPropagation()
      }
    })
    // Allow someone to drag
    $(document).on("touchmove", function(event) {
      if (event.originalEvent.touches.length == 1) {
        event.preventDefault()
      }
    })
  }
}
;Flasher.timeout = false
Flasher.flash = function (message, time) {
  Blinker.change(message)
  clearTimeout(Flasher.timeout)
  $('#nudgepadNotify').html(message)
  Popup.open('#nudgepadNotify')
  $('#nudgepadNotify').css('left', ($(window).width() - $('#nudgepadNotify').width())/2)
  if (time)
    Flasher.timeout = setTimeout("$('#nudgepadNotify').hide()", time)
}
;nudgepad.on('disconnect', function () {
  $('#nudgepadConnectionStatus').html('Disconnected from server. Attempting to reconnect...').show()
})
;/**
 * Allows you to drag and drop files from finder onto the page.
 * Only supports 1 file at a time for now. And chrome. Very limited.
 */
nudgepad.ondrop = function(e) {
  mixpanel.track('I dropped an image onto the page')
  var reader = new FileReader()
  reader.onload = function(evt) {
    var space = new Space(
      "tag img\n" +
      "src " + evt.target.result +
      "\nstyle" +
      "\n width auto" +
      "\n height auto")
    var scraps = new Space().set('scrap1', space)
    Design.stage.insert(scraps)
  }
  reader.readAsDataURL(e.dataTransfer.files[0])
  e.preventDefault()
}

nudgepad.on('main', function () {
  window.addEventListener('drop', nudgepad.ondrop, false)
})
;nudgepad.on('main', function () {
  window.onerror = function(message, url, lineNumber) {
    mixpanel.track('I got a javascript error')
    $('.nudgepad#nudgepadJavascriptError').prepend('<div>Javascript Error: '+message+'</div>').show()
    //save error and send to server for example.
    return false
  }

})




;/**
 * Start editing text when worker enters a character key.
 *
 * @param {object} keydown event.
 * @return {bool} Allow propagation unless we start editing.
 */
nudgepad.keydown = function (event) {
  // if worker is typing in a div or input already dont do anything
  if ($('input:focus, div:focus, textarea:focus, a:focus').length != 0)
    return true
  // allow control key combos to pass through
  if (event.ctrlKey || event.metaKey || event.shiftKey)
    return true
  // if a f key or something dont return.
  if ((event.keyCode < 48 && event.keyCode != 32) || event.keyCode > 90)
    return true
  // if no subject return
  if (!$('.selection').length)
    return true
  // if an input or something return true
  if ($('.selection').is("input") || $('.selection').is("textarea"))
    return true
  // trigger edit event on the scrap
  $('.selection').scrap().edit()
}

nudgepad.on('main', function () {
  // if a div is selection and certain conditions are met start editing text
  $("body").on("keydown", nudgepad.keydown)  
})
;nudgepad.on('ping', function (data) {
  $('#nudgepadConnectionStatus').hide()
})
;// An event for if the server goes into a read only mode.

;nudgepad.restart = function () {
  Flasher.flash('Site restarted. Please refresh.') 
  // i think we should maybe just do a location.reload()
}
;// sometimes you'll be working on a site that has been deleted.
// we should so a message or something, "This site has been deleted"


;nudgepad.error = function (message) {
  $('#nudgepadWorkerError').html(message)
  Popup.open('#nudgepadWorkerError')
  return false
}

;/**
 * Singleton.
 * Namespace for methods that do realtime syncing.
 */
nudgepad.patch = {}

/**
 * Handles incoming patches to site
 *
 * @param {Space}
 */
nudgepad.patch.receive = function (patch) {
  
  patch = new Space(patch)
  var behind = Design.stage.isBehind()
  
  // If the page has been deleted, change page
  if (patch.get('pages ' + Design.stage.activePage) === '')
    Design.stage.back()
  
  site.patch(patch)
  Design.updateTabs()
  
  // If the active page isnt touched, we are all done
  if (!patch.get('timelines ' + Design.stage.activePage))
    return true    
  
  if (behind)
    return Design.stage.updateTimeline()
  
  if ($('input:focus, div:focus, textarea:focus, a:focus').length)
    return Design.stage.updateTimeline()

  // Todo: this breaks if you are in content editable
  Design.stage.redo()
  Flasher.flash('Change received', 1000)
}

nudgepad.on('patch', nudgepad.patch.receive)

;Popup = {}

/**
 * @param {object} mouseup event
 */
Popup.hide = function (event) {

  if (event.which !== 1)
    return true
  console.log('hide')
  $('.nudgepadPopup').hide()
  console.log(event)
  $('body').off('mouseup touchend', Popup.hide)
  Popup.isOpen = false
  return true
}

Popup.isOpen = false

Popup.open = function (element) {
  $(element).addClass('nudgepadPopup').show()
  if (!Popup.isOpen) {
    $('body').on('mouseup touchend', Popup.hide)
    Popup.isOpen = true
  }
  
  return true
}

;nudgepad.reloadMessageOneTime = ''
nudgepad.reloadMessage = function () {
  var message
  if (message = nudgepad.reloadMessageOneTime) {
    nudgepad.reloadMessageOneTime = ''
    return message
  }
  return 'Are you sure you want to leave Nudgepad?'
}
;nudgepad.restartCheck = function () {
  $.get('/nudgepad.started', {}, function (data) {
    if (data !== site.get('started')) {
      nudgepad.reloadMessageOneTime = 'Your site restarted. Please refresh the page.'
      location.reload()
    }
  })
}
;// adapted from http://stackoverflow.com/questions/4217962/scroll-to-an-element-using-jquery
$.fn.scrollMinimal = function(smooth) {
  var cTop = this.position().top
  var cHeight = this.outerHeight(true)
  var windowTop = $('#nudgepadStage').scrollTop()
  var visibleHeight = $('#nudgepadStage').height()

  if (cTop < windowTop) {
    if (smooth) {
      $('#nudgepadStage').animate({'scrollTop': cTop}, 'slow', 'swing')
    } else {
      $('#nudgepadStage').scrollTop(cTop)
    }
  } else if (cTop + cHeight > windowTop + visibleHeight) {
    if (smooth) {
      $('#nudgepadStage').animate({'scrollTop': cTop - visibleHeight + cHeight}, 'slow', 'swing')
    } else {
      $('#nudgepadStage').scrollTop(cTop - visibleHeight + cHeight)
    }
  }
};

;Events.shortcut.onfire = function (key) {
  mixpanel.track('I used the keyboard shortcut ' +  key)
}

/**
 * We manually add some shortcuts to certain functions.
 * This clearly could be cleaned up.
 */
nudgepad.bind_shortcuts = function () {
  
  Events.shortcut.shortcuts['meta+shift+p'] = Design.stage.selection.patchPrompt
  
  Events.shortcut.shortcuts['ctrl+a'] = Design.stage.selectAll
  Events.shortcut.shortcuts['meta+a'] = Design.stage.selectAll
  
  Events.shortcut.shortcuts['meta+p'] = function () { window.open(Design.stage.activePage, 'published') }
  

  Events.shortcut.shortcuts['meta+shift+left'] = Design.stage.selection.alignLeft
  Events.shortcut.shortcuts['meta+shift+right'] = Design.stage.selection.alignRight
  Events.shortcut.shortcuts['meta+shift+up'] = Design.stage.selection.alignTop
  Events.shortcut.shortcuts['meta+shift+down'] = Design.stage.selection.alignBottom
  
  Events.shortcut.shortcuts['meta+shift+v'] = Design.stage.selection.distributeVertical
  Events.shortcut.shortcuts['meta+shift+h'] = Design.stage.selection.distributeHorizontal
  Events.shortcut.shortcuts['shift+d'] = Design.stage.selection.distributeHorizontal
  
  Events.shortcut.shortcuts['alt+o'] = Explorer.quickEdit
  
  Events.shortcut.shortcuts['meta+shift+s'] = nudgepad.edit_settings
  
  var deleteMethod = function () { Design.stage.selection.remove(); Design.stage.commit() }
  Events.shortcut.shortcuts['delete'] = deleteMethod
  Events.shortcut.shortcuts['backspace'] = deleteMethod
  
  Events.shortcut.shortcuts['ctrl+d'] = Design.stage.selection.duplicate
  Events.shortcut.shortcuts['meta+d'] = Design.stage.selection.duplicate
  
  var editSourceToggle = function () { ($('.selection').length ? Design.stage.selection.editSource() : Design.stage.editSource())}
  Events.shortcut.shortcuts['ctrl+u'] = editSourceToggle
  Events.shortcut.shortcuts['meta+u'] = editSourceToggle
  
  Events.shortcut.shortcuts['meta+shift+u'] = nudgepad.codePanel.toggle
  
  Events.shortcut.shortcuts['meta+e'] = Design.stage.selection.editProperty
  
  
  
  Events.shortcut.shortcuts['meta+l'] = Design.stage.selection.editLoop
  
  var contextMenuToggle = function () {$('#pagesContextMenu').toggle()}
  Events.shortcut.shortcuts['ctrl+i'] = contextMenuToggle
  Events.shortcut.shortcuts['meta+i'] = contextMenuToggle
  

  Events.shortcut.shortcuts['shift+space'] = function () {
    var command = prompt('Enter a command')
    if (!command)
      return false
    if (command.match(/^(w|width) (.*)/)) {
      var match = command.match(/^(w|width) (.*)/)
      Design.stage.selection.css('width ' + match[2])
    }
  }
  
  Events.shortcut.shortcuts['meta+shift+m'] = function () {Explorer.edit('/public/manifest.webapp')}
  
  Events.shortcut.shortcuts['meta+backspace'] = Design.trash
  
  Events.shortcut.shortcuts['meta+o'] = Design.spotlight
  Events.shortcut.shortcuts['ctrl+o'] = Design.spotlight
  
  
  Events.shortcut.shortcuts['ctrl+n'] = Design.blank
  Events.shortcut.shortcuts['meta+n'] = Design.blank
  
  Events.shortcut.shortcuts['esc'] = Design.stage.selection.clear
  
  Events.shortcut.shortcuts['shift+n'] = Design.duplicate
  
  Events.shortcut.shortcuts['up'] = function (){Design.stage.selection.move(0, -1)}
  Events.shortcut.shortcuts['left'] = function (){Design.stage.selection.move(-1, 0)}
  Events.shortcut.shortcuts['down'] = function (){Design.stage.selection.move(0, 1)}
  Events.shortcut.shortcuts['right'] = function (){Design.stage.selection.move(1, 0)}
  
  Events.shortcut.shortcuts['shift+t'] = function (){ $('.nudgepadTimeline').toggle()}
  
  Events.shortcut.shortcuts['shift+v'] = Design.stage.toggleView
  
  Events.shortcut.shortcuts['shift+up'] = function (){Design.stage.selection.move(0, -10)}
  Events.shortcut.shortcuts['shift+left'] = function (){Design.stage.selection.move(-10, 0)}
  Events.shortcut.shortcuts['shift+down'] = function (){Design.stage.selection.move(0, 10)}
  Events.shortcut.shortcuts['shift+right'] = function (){Design.stage.selection.move(10, 0)}
  
  Events.shortcut.shortcuts['alt+left'] = Design.stage.back
  Events.shortcut.shortcuts['alt+right'] = Design.stage.forward
  
  Events.shortcut.shortcuts['ctrl+z'] = Design.stage.undo
  Events.shortcut.shortcuts['meta+z'] = Design.stage.undo
  Events.shortcut.shortcuts['meta+shift+z'] = Design.stage.redo
  Events.shortcut.shortcuts['meta+y'] = Design.stage.redo
  Events.shortcut.shortcuts['ctrl+y'] = Design.stage.redo
  Events.shortcut.shortcuts['meta+shift+c'] = Design.stage.selection.cssPrompt
  
}
;Space.prototype.autokey = function (prefix) {
  prefix = prefix || ''
  if (!this.get(prefix))
    return prefix
  
  var i = 2
  while (this.get(prefix + i.toString())) {
    i++
  }
  return prefix + i.toString()
}
;/**
 * Prompt the worker for input. Pops a modal.
 *
 * @param {string} Name of any instructional message.
 * @param {string} Default value to prefill the prompt with.
 * @param {function} Function to run with whatever the worker entered.
 */
TextPrompt = function (message, default_value, onsubmit, onkeypress, submitLabel) {
  var text_area = $('<textarea id="nudgepadEditorTextarea" class="nudgepad"></textarea>')
  text_area.val(default_value)
  var modal_screen = $('<div id="nudgepadEditorModalScreen" class="nudgepad"/>')
  modal_screen.on('tap mousedown click slide slidestart slideend mouseup', function (event) {
    event.stopPropagation()
  })
  text_area.on('tap mousedown click slide slidestart slideend mouseup', function (event) {
    event.stopPropagation()
  })
  if (onkeypress)
    text_area.on('keypress', onkeypress)
    
  var save_button = $('<div id="nudgepadEditorSaveButton" class="nudgepad">' + (submitLabel || 'Save') + '</div>')
  var cancel_button = $('<div id="nudgepadEditorCancelButton" class="nudgepad">Cancel</div>')
  
  var button_container = $('<div id="nudgepadEditorButtonContainer" class="nudgepad"></div>')
  modal_screen.on('click', function () {
    cancel_button.trigger('click')
  })
  
  cancel_button.on('click', function () {
    save_button.remove()
    text_area.remove()
    modal_screen.remove()
    button_container.remove()
    cancel_button.remove()
  })
  
  save_button.on('click', function () {
    if (onsubmit)
      onsubmit(text_area.val())
    
    save_button.remove()
    text_area.remove()
    modal_screen.remove()
    button_container.remove()
    cancel_button.remove()
  })
  
  // Firefox fix
  // replace false with isMozilla
  if (false) {
    text_area.css({
      width: $(window).width() - 100,
      height: $(window).height() - 200
    })
  }
  
  $('body').append(modal_screen)
  $('body').append(text_area)
  $('body').append(save_button)
  $('body').append(cancel_button)
  $('body').append(button_container)
  text_area.focus()
}
;nudgepad.apps.stats = new App('stats')
;nudgepad.apps.surveys = new App('surveys')

nudgepad.apps.surveys.entries = new Space()
nudgepad.apps.surveys.download = function () {


  $.get('/nudgepad.surveys', function (data) {
    nudgepad.apps.surveys.entries = new Space(data)
    
    if (nudgepad.apps.surveys.isOpen()) {
      nudgepad.apps.surveys.onready()
    }
    
  })
  
}

nudgepad.apps.surveys.onmain = nudgepad.apps.surveys.download

nudgepad.apps.surveys.onopen = nudgepad.apps.surveys.download

nudgepad.apps.surveys.onready = function () {
  $('.nudgepad#entriesCount').text(nudgepad.apps.surveys.entries.keys.length)
  $('.nudgepad#entries').text(nudgepad.apps.surveys.entries.toString())
  $('.nudgepad#entries span').each(function () {
    $(this).text(moment(parseInt($(this).text())).fromNow());
  })
}


nudgepad.on('main', nudgepad.apps.surveys.download)


;nudgepad.on('main', function () {
  $('.barDroppable').on('click', function () {
    $('.imageDroppableOptions').hide()
    if ($(this).hasClass('selectedDroppable')) {
      $(this).removeClass('selectedDroppable')
      $('.barDroppable').removeClass('lowlight');
      $('#nudgepadRibbon').slideUp('fast')
    }
    else {
      $('.barDroppable').removeClass('selectedDroppable')
      $(this).addClass('selectedDroppable');
      $(this).removeClass('lowlight')
      $('.barDroppable').not('.selectedDroppable').addClass('lowlight');
      $('#nudgepadRibbon').slideDown('fast')
    }
  })
  $('.barDroppable').on('slidestart', function() {
    var dropBlock = $(this).attr('title').toLowerCase()
    Design.stage.dragAndDrop(Design.droppables.get('blocks ' + dropBlock))
  })
  
  
  
  $('#imageDroppable').on('click', function () {
    $('.imageDroppableOptions').show()
  })
  
})
;nudgepad.codePanel = {}

nudgepad.codePanel.livePreview = false
nudgepad.codePanel.livePreviewTimeout = false
nudgepad.codePanel.livePreviewStart = function () {
  clearTimeout(nudgepad.codePanel.livePreviewTimeout)
  nudgepad.codePanel.livePreviewTimeout = setTimeout('nudgepad.codePanel.livePreview()', 500)
}
nudgepad.codePanel.livePreview = function () {
  var space = new Space($('#nudgepadCodePanel').val())
  if (Design.stage.selection.exists()) {
    Design.stage.selection.clear()
  }
//    Design.page.patch(Design.stage.selection.captured.diff(space))
//    Design.stage.render()
//  } else {
    Design.page = new Page(space)
    Design.stage.render()
//  }
}

nudgepad.codePanel.close = function () {
  $('#nudgepadCodePanel').hide()
  $('#nudgepadStage').css('padding-left', nudgepad.codePanel.currentPadding)
  nudgepad.off('selection', nudgepad.codePanel.load)
  nudgepad.off('stage', nudgepad.codePanel.load)
}

nudgepad.codePanel.isOpen = function () {
  return $('#nudgepadCodePanel:visible').length > 0
}

nudgepad.codePanel.load = function () {
  var textarea = $('#nudgepadCodePanel')
  // todo: allow for just showing of selection
//  if (Design.stage.selection.exists()) {
//    Design.stage.selection.clear()
//    Design.stage.selection.capture()
//    Design.stage.selection.save()
//    textarea.val(Design.stage.selection.toSpace().toString())
//  } else
  textarea.val(Design.page.toString())
}

nudgepad.codePanel.open = function () {
  var textarea = $('#nudgepadCodePanel')
  textarea.show()
  nudgepad.codePanel.currentPadding = $('#nudgepadStage').css('padding-left')
  $('#nudgepadStage').css('padding-left', '40%')
  nudgepad.codePanel.load()
  textarea.on('keyup', nudgepad.codePanel.livePreviewStart)
  textarea.on('blur', Design.stage.commit)
  textarea.on('tap mousedown click slide slidestart slideend mouseup', function (event) {
    event.stopPropagation()
  })
  nudgepad.on('selection', nudgepad.codePanel.load)
  nudgepad.on('stage', nudgepad.codePanel.load)
}

nudgepad.codePanel.toggle = function () {
  if (nudgepad.codePanel.isOpen())
    nudgepad.codePanel.close()
  else
    nudgepad.codePanel.open()
}
;nudgepad.contentEditor = {}

/**
 * Fires when a block being edited a blur occurs.
 */
nudgepad.contentEditor.onblur = function () {
  
  var scrap = $(this).scrap()
  scrap.set('content', $(this).html())

  // rebind the blocks
  $(this).off('tap mousedown slide slidestart hold slideend', nudgepad.contentEditor.killEvent)

  // remove the ability to edit & select text.
  $(this).removeAttr('contenteditable')

  // record the changes for undo/redo
  Design.stage.commit()
  nudgepad.broadcastSelection()
}

/**
 * Focus and start editing the text of a block.
 *
 * @param {string} Scrap id
 * @param {bool} Whether to select all on focus
 */
nudgepad.contentEditor.focus = function (selector, selectAll) {
  
  
  // When focused, it's as if you have nothing selected. We're really going to do 
  // a patch instead
  Design.stage.selection.clear()
  
  var element = $(selector)
  var scrap = element.scrap()  
  
  // If not suitable for contenteditable, pop prompt instead.
  if (!scrap.isContentEditable()) {
    
    var attr = 'content'
    var tag = scrap.values.tag
    
    if (tag && tag.match(/^(list)$/)) {
      Design.stage.selection.clear()
      element.selectMe()
      Design.stage.selection.editSource()
      return false
    }
    
    if (tag && tag.match(/^(textarea|input|password)$/))
      attr = 'placeholder'
    
    TextPrompt('Editing content for this block', scrap.values[attr], function (val) {
      scrap.values[attr] = val
      Design.stage.commit()
      element.remove()
      $('#nudgepadStageBody').append(scrap.toHtml(null, true))
      element.selectMe()
    })
    return
  }
  
  nudgepad.broadcastSelection(scrap.selector())

  // set element to editable
  element.attr('contenteditable', 'true')
  
  // stop propagation (todo: perhaps we could use these to make some sweet events!)
  element.on('tap slide slidestart hold slideend', nudgepad.contentEditor.killEvent)
  
  // on blur, remove all this stuff.
  element.on('blur', nudgepad.contentEditor.onblur)
  
  // focus the element
  element.focus()
  
  // move the cursor to the end of the element
  MoveCursorToEnd(element[0])

  // Select all
  if (selectAll)
    document.execCommand('selectAll',false,null)
}

/**
 * Stop propagation and prevent default by returning false.
 *
 * we name this instead of using an anonymous function so we can then remove it from
 * the element its bound to.
 *
 * @param {object} event
 * @return false.
 */
nudgepad.contentEditor.killEvent = function (event) {
  // 
  Mouse.down.stopPropagation()
  return false
}


;Design.droppables = new Space('blocks\n block\n  block1\n   style\n    background-color #7a8289\n    height 180px\n    width 220px\n    position absolute\n    font-size 15px\n    font-family Open Sans\n    color #333\n    top 0\n    left 0\n block8\n  block1\n   style\n    height 40px\n    width 150px\n    padding 0px\n    font-size 14px\n    text-indent 10px\n    color #555\n    position absolute\n    border 2px solid #ccc\n    -webkit-appearance normal\n    top 0\n    left 0\n   tag input\n   placeholder Type Here\n button\n  block1\n   style\n    background-color #ed2e11\n    height 50px\n    font-family Open Sans\n    width auto\n    cursor pointer\n    font-size 18px\n    line-height 50px\n    text-align center\n    position absolute\n    padding 0px 20px\n    font-weight bold\n    color #fff\n    border-radius 3px\n    top 0\n    left 0\n   content Button\n   hover_style\n    background-color #c94932\n   active_style\n    background-color #a33a27\n fullx\n  fullx\n   style\n    background-color #eee\n    height 60px\n    width 100%\n    position absolute\n    font-size 15px\n    font-family Open Sans\n    color #333\n    top 0\n    left 0\n graph\n  block1\n   style\n    background-image url(/nudgepad/public/images/graphPlace.png)\n    background-repeat no-repeat\n    background-color transparent\n    background-size contain\n    background-position center\n    position absolute\n    height 300px\n    width 300px\n    font-size 14px\n    color #fff\n    top 0\n    left 0\n header\n  block1\n   style\n    height auto\n    font-family Open Sans\n    width auto\n    font-size 24px\n    font-weight bold\n    position absolute\n    color #333\n    top 0\n    left 0\n   content Title\n image\n  block1\n   style\n    background-image url(/nudgepad/public/images/imagePlace.png)\n    background-repeat no-repeat\n    background-color transparent\n    background-size contain\n    background-position center\n    position absolute\n    height 300px\n    width 300px\n    font-size 14px\n    color #fff\n    top 0\n    left 0\n nav\n  nav\n   style\n    height auto\n    font-family Open Sans\n    font-size 18px\n    line-height 140%\n    color #999\n    position absolute\n    top 0\n    left 0\n   scraps\n    nav1\n     style\n      margin-right 40px\n      float left\n     content Home\n    nav2\n     style\n      margin-right 40px\n      float left\n     content About\n    nav3\n     style\n      margin-right 40px\n      float left\n     content Portfolio\n    nav4\n     style\n      float left\n     content Contact\n paragraph\n  nav\n   style\n    height auto\n    font-family Open Sans\n    font-size 16px\n    width 420px\n    color #222\n    position absolute\n    top 0\n    left 0\n   scraps\n    header\n     style\n      margin-bottom 30px\n      font-size 52px\n     content Born Good\n    subHeader\n     style\n      margin-bottom 30px\n      font-size 18px\n      font-weight bold\n     content About Me\n    nav3\n     style\n      margin-right 40px\n      font-size 16px\n      line-height 140%\n      color #555\n     content When I was a lad I ate four dozen eggs ev\'ry morning to help me get large. And now that I\'m grown I eat five dozen eggs, so I\'m roughly the size of a barge!\n rounded\n  rounded\n   style\n    background-color #e83b1e\n    height 60px\n    width 120px\n    position absolute\n    font-size 15px\n    font-family Open Sans\n    text-align center\n    color #333\n    top 0\n    left 0\n    border-radius 5px\n    line-height 60px\n sticky\n  stickyNote\n   style\n    background-color #f4ed04\n    font-family Courier\n    position absolute\n    color #222\n    top 0\n    left 0\n    height auto\n    width 120px\n    font-size 14px\n    line-height 120%\n    padding 10px\n    box-shadow 0px 1px 3px rgba(0,0,0,.6)\n   content I am a sticky note. I do not show up on your live site.\n   draft true\n stickyBlue\n  stickyBlue\n   style\n    background-color #15cbf2\n    font-family Courier\n    position absolute\n    color #222\n    top 0\n    left 0\n    height auto\n    width 120px\n    font-size 14px\n    line-height 120%\n    padding 10px\n    box-shadow 0px 1px 3px rgba(0,0,0,.6)\n   content I am a sticky note. I do not show up on your live site.\n   draft true\n stickyOrange\n  stickyOrange\n   style\n    background-color #f29215\n    font-family Courier\n    position absolute\n    color #222\n    top 0\n    left 0\n    height auto\n    width 120px\n    font-size 14px\n    line-height 120%\n    padding 10px\n    box-shadow 0px 1px 3px rgba(0,0,0,.6)\n   content I am a sticky note. I do not show up on your live site.\n   draft true\n text\n  text\n   style\n    height auto\n    font-family Open Sans\n    width 420px\n    font-size 16px\n    line-height 140%\n    color #555\n    position absolute\n    top 0\n    left 0\n   content There is a place where the sidewalk ends and before the street begins, and there the grass grows soft and white, and there the sun burns crimson bright, and there the moon-bird rests from his flight to cool in the peppermint wind.\nbuttons\n button1\n  head\n   tag creation\n   title Untitled\n   category content\n   stylesheets /nudgepad/blocks.css\n   scripts http://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js\n   style\n    body\n     width 100%\n  block1\n   style\n    background-color #e3543b\n    height 40px\n    width 110px\n    cursor pointer\n    font-size 14px\n    line-height 40px\n    text-align center\n    font-weight bold\n    color #fff\n    border-radius 4px\n    top 0\n    left 0\n   content Plain Button\n   hover_style\n    background-color #c94932\n   active_style\n    background-color #a33a27\n button2\n  head\n   tag creation\n   title Untitled\n   category content\n   stylesheets /nudgepad/blocks.css\n   scripts http://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js\n   style\n    body\n     width 100%\n  block1\n   style\n    height 40px\n    width 120px\n    cursor pointer\n    font-size 14px\n    line-height 40px\n    text-align center\n    font-weight bold\n    color #fff\n    border-radius 4px\n    background -webkit-linear-gradient(top, #ff5e42, #e3543b)\n    border 1px solid #bf4530\n    box-shadow 0px 1px 3px rgba(0,0,0,.5), inset 0px 1px 0px #ffc0b5\n    left 0px\n    top 0px\n   content Fancy Button\n   hover_style\n    background #e3543b\n   active_style\n    background #bf4530\n button3\n  head\n   tag creation\n   title Untitled\n   category content\n   stylesheets /nudgepad/blocks.css\n   scripts http://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js\n   style\n    body\n     width 100%\n  block1\n   style\n    background-color #e3543b\n    height 40px\n    width 110px\n    cursor pointer\n    font-size 14px\n    line-height 40px\n    text-align center\n    font-weight bold\n    color #fff\n    border-radius 4px\n    box-shadow 0px 5px 0px 0px #c94932\n    top 0\n    left 0\n   content Drop Button\n   hover_style\n    background-color #c94932\n   active_style\n    background-color #a33a27\n    box-shadow 0px 5px 0px 0px #a33a27\nelements\n iframe\n  head\n   tag page\n   title Untitled\n   stylesheets /nudgepad/blocks.css\n   style\n    body\n     width 960px\n     height 1000px\n     background-color white\n  block2\n   tag iframe\n   src http://nudgepad.com/iframe\n   style\n    height 245px\n    width 282px\n    top 0px\n    left 0px\n    box-shadow 0px 1px 3px rgba(0,0,0,.6)\n    border-radius 4px 4px 4px 4px\n video\n  head\n   tag page\n   title Untitled\n   stylesheets /nudgepad/blocks.css\n   style\n    body\n     width 960px\n     height 1000px\n     background-color white\n  block2\n   tag iframe\n   frameborder 0\n   width 560\n   height 315\n   allowfullscreen allowfullscreen\n   src http://www.youtube.com/embed/cFEarBzelBs?rel=0\n   style\n    top 0\n    left 0\nforms\n contact_form\n  head\n   tag page\n   title Untitled\n   stylesheets /nudgepad/blocks.css\n   style\n    body\n     width 100%\n  block3\n   style\n    background-color #e3543b\n    height 35px\n    width 110px\n    cursor pointer\n    font-size 14px\n    line-height 35px\n    text-align center\n    font-weight bold\n    color #fff\n    border-radius 3px\n    top 315px\n    left 154px\n   content Sign Up\n   hover_style\n    background-color #c94932\n   active_style\n    background-color #a33a27\n   click $.post(\'/nudgepad.surveys\', { note : \'email \' + $(\'input.email\').val() + \'\nname \' + $(\'input.name\').val() + \'\n comment \' + $(\'textarea.comment\').val() } , function () { $(\'.submit_button\').html(\'Success!\') } )\n   class submit_button\n  email_address\n   style\n    height 35px\n    width 168px\n    font-size 14px\n    color #555\n    border 1px solid #ccc\n    -webkit-appearance normal\n    top 110px\n    left 0px\n    padding 0\n    padding-left 5px\n   tag email\n   placeholder Email address\n   class email\n   tabindex 2\n  block1\n   style\n    height auto\n    width auto\n    white-space nowrap\n    font-size 32px\n    line-height 140%\n    color #333\n    top 0px\n    left 0px\n   content Contact Us\n  comment\n   style\n    height 135px\n    width 264px\n    font-size 14px\n    color #555\n    border 1px solid #ccc\n    -webkit-appearance normal\n    top 163px\n    left 0px\n    padding 3px\n    margin 0\n   tag textarea\n   placeholder How can we help you?\n   class comment\n   tabindex 3\n  name\n   style\n    height 35px\n    width 168px\n    font-size 14px\n    color #555\n    border 1px solid #ccc\n    -webkit-appearance normal\n    top 64px\n    left 0px\n    padding 0\n    padding-left 5px\n   tag text\n   placeholder Your name\n   class name\n   tabindex 1\n email_signup\n  head\n   tag page\n   title email_signup\n   stylesheets /nudgepad/blocks.css site.css\n   scripts http://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js\n   style\n    body\n     width 100%\n  block3\n   style\n    background-color #e3543b\n    height 35px\n    width 110px\n    cursor pointer\n    font-size 14px\n    line-height 35px\n    text-align center\n    font-weight bold\n    color #fff\n    border-radius 3px\n    top 66px\n    left 175px\n   content Sign Up\n   hover_style\n    background-color #c94932\n   active_style\n    background-color #a33a27\n   click $.post(\'/nudgepad.surveys\', { note : \'email \' + $(\'input.email\').val() } , function () { $(\'.submit_button\').html(\'Success!\') } )\n   class submit_button\n  email_address\n   style\n    height 35px\n    width 168px\n    font-size 14px\n    color #555\n    border 1px solid #ccc\n    -webkit-appearance normal\n    top 66px\n    left -1px\n    padding 0\n    padding-left 5px\n   tag email\n   placeholder Email address\n   class email\n  block1\n   style\n    height auto\n    width auto\n    white-space nowrap\n    font-size 32px\n    line-height 140%\n    color #333\n    top 0px\n    left 1px\n   content Join our Email List\nfun\n blog\n  head\n   tag page\n   title {{nudgepad.post.title}}\n   style\n    body\n     width 400px\n     position relative\n     height 100%\n     margin 0 auto\n    html\n     width 100%\n     height 100%\n    .scrap\n     position absolute\n    a\n     text-decoration none\n    a:hover\n     text-decoration underline\n  title\n   style\n    width 100%\n    height auto\n    font-size 36px\n    font-family Georgia\n    color #202020\n    padding 20px\n    line-height 36px\n    top 40px\n    left 0\n   content {{nudgepad.post.title Title of Post}}\n   onedit blog\n  content\n   content {{nudgepad.post.content The post body goes here. Lorem ipsum factum ipsum et et tu. Lorem ipsum factum ipsum et et tu. Lorem ipsum factum ipsum et et tu. Lorem ipsum factum ipsum et et tu. Lorem ipsum factum ipsum et et tu. Lorem ipsum factum ipsum et et tu.  Lorem ipsum factum ipsum et et tu.  Lorem ipsum factum ipsum et et tu.  Lorem ipsum factum ipsum et et tu.  Lorem ipsum factum ipsum et et tu.  Lorem ipsum factum ipsum et et tu.}}\n   style\n    width 100%\n    height auto\n    background-color transparent\n    color #202020\n    font-family Georgia\n    font-size 16px\n    line-height 22px\n    padding 0px 20px\n    top 150px\n    text-align justify\n   content_format nl2br\n   onedit blog\n book\n  head\n   tag page\n   title Untitled\n   stylesheets /nudgepad/blocks.css\n   style\n    body\n     width 960px\n     height 1000px\n  block3\n   style\n    left 191px\n    top 77px\n    height 20px\n    width 520px\n    background-color #8b9dc1\n    z-index 2\n  block4\n   style\n    left 0px\n    top 0px\n    height 40px\n    width 960px\n    padding-left 10px\n    -webkit-box-shadow 0 2px 2px -2px rgba(0, 0, 0, .52)\n    border-bottom 1px solid #133783\n    background-color #3b5a9b\n    font-size 30px\n    color #FFFFFF\n    font-family Arial\n    font-weight bold\n    line-height 40px\n   content book\n  block1\n   style\n    left 0px\n    top 77px\n    height 256px\n    width 174.5px\n    background-color #f8f8f8\n   content <br>\n  block6\n   style\n    left 191px\n    top 87px\n    height 517px\n    width 520px\n    background-color #f8f8f8\n   content <br>\n  block7\n   content John Doe\n   style\n    left 881px\n    top 13px\n    height 15px\n    width 78.5px\n    color #e1e4ed\n    z-index 2\n  block11\n   style\n    left 0px\n    top 368px\n    height 236px\n    width 174.5px\n    background-color #f8f8f8\n   content <br>\n  block8\n   style\n    left 724.5px\n    top 348px\n    height 20px\n    width 245.5px\n    background-color #e1e4ed\n   content <br>\n  block12\n   style\n    left 725px\n    top 368px\n    height 236px\n    width 245px\n    background-color #f8f8f8\n   content <br>\n  block13\n   style\n    left 724.5px\n    top 77px\n    height 20px\n    width 245.5px\n    background-color #e1e4ed\n   content <br>\n  block14\n   style\n    left 725px\n    top 97px\n    height 171px\n    width 245px\n    background-color #f8f8f8\n   content <br>\n  block15\n   style\n    left 0px\n    top 77px\n    height 20px\n    width 175px\n    background-color #e1e4ed\n   content <br>\n  block16\n   style\n    left 0px\n    top 368px\n    height 20px\n    width 175px\n    background-color #e1e4ed\n   content <br>\n  block2\n   content This is a demo page.\n   style\n    left 0px\n    top 681px\n    height auto\n    padding-top 3px\n    font-size 12px\n    color gray\n    width 970px\n    border-top 1px solid #e1e4ed\n    z-index 2\n  block17\n   tag img\n   src /nudgepad/public/images/obama.jpg\n   style\n    left 290px\n    top 154px\n    width 321.5px\n    height auto\n  block18\n   tag img\n   src /nudgepad/public/images/obama_small.jpg\n   style\n    left 222px\n    top 132px\n    width auto\n    height auto\n  block19\n   content Barack Obama went on a nice stroll with his wife.\n   style\n    left 290px\n    top 132px\n    height 15px\n    width 405.5px\n    color gray\n    z-index 2\n cluster\n  head\n   tag page\n   title Untitled\n   stylesheets /nudgepad/blocks.css\n   style\n    body\n     width 960px\n     height 1000px\n  block2\n   style\n    left 181px\n    top 60px\n    width 138.5px\n    height auto\n    font-size 15px\n    background transparent\n    color #666666\n    line-height 140%\n   content A warm westerly blew over the prairie, making waves, and when I wound down the window I heard it growl in the dry grass like surf. For gulls, there were killdeer plovers, crying out their name as they wheeled and skidded on the wind.\n  block3\n   style\n    left 333px\n    top 137px\n    width auto\n    height auto\n    font-size 40px\n    background transparent\n    color #666666\n    line-height 140%\n   content Small Label\n  block7\n   style\n    left 100px\n    top 267px\n    width 66.5px\n    height auto\n    font-size 24px\n    background transparent\n    color #222222\n    line-height 30%\n   content Section Header\n  block8\n   style\n    left 7px\n    top 116px\n    width auto\n    height auto\n    font-size 24px\n    background transparent\n    color #222222\n    line-height 140%\n   content Section Header\n  block9\n   style\n    left 11px\n    top 149px\n    width auto\n    height auto\n    font-size 32px\n    background transparent\n    color #666666\n    line-height 140%\n   content Small Label\n  block10\n   style\n    left 182px\n    top -19px\n    width 368.5px\n    height auto\n    font-size 51px\n    background transparent\n    font-weight bold\n    color #222222\n    line-height 140%\n   content Page Header\n  block11\n   style\n    left 167px\n    top 312px\n    width auto\n    height auto\n    font-size 40px\n    background transparent\n    color #666666\n    line-height 140%\n   content Small Label\n  block12\n   style\n    left 333px\n    top 60px\n    width 34px\n    height auto\n    font-size 24px\n    background transparent\n    color #222222\n    line-height 30%\n   content Section Header\n  block1\n   style\n    left 7px\n    top 368px\n    background transparent\n    height auto\n    font-weight bold\n    width 368.5px\n    color #222222\n    font-size 51px\n    line-height 140%\n   content Page Header\n  block13\n   style\n    left 338px\n    top 99px\n    background transparent\n    height auto\n    width auto\n    color #222222\n    font-size 24px\n    line-height 140%\n   content Section Header\n  block14\n   style\n    left 7px\n    top 202px\n    background transparent\n    height auto\n    width auto\n    color #666666\n    font-size 32px\n    line-height 140%\n   content Small Label\n  block15\n   style\n    left 338px\n    top 267px\n    background transparent\n    height auto\n    width auto\n    color #222222\n    font-size 24px\n    line-height 140%\n   content Section Header\n  block16\n   style\n    left 338px\n    top 376px\n    background transparent\n    height auto\n    width 126.5px\n    color #666666\n    font-size 15px\n    line-height 140%\n   content A warm westerly blew over the prairie, making waves, and when I wound down the window I heard it growl in the dry grass like surf. For gulls, there were killdeer plovers, crying out their name as they wheeled and skidded on the wind.\n meme\n  head\n   tag page\n   title Untitled\n   stylesheets /nudgepad/blocks.css\n   style\n    body\n     width 960px\n     background-color white\n     height 1000px\n  block17\n   tag img\n   src /nudgepad/public/images/firstworld.jpg\n   style\n    left 0px\n    top 0px\n    width auto\n    height auto\n  block2\n   style\n    left 0px\n    top 0px\n    background transparent\n    height auto\n    font-weight bold\n    width 552px\n    color #FFFFFF\n    font-size 36px\n    line-height 140%\n    text-shadow 1px 1px 1px black\n    text-align center\n   content There\'s nothing to drink....\n  block3\n   style\n    left 0px\n    top 267px\n    background transparent\n    height auto\n    font-weight bold\n    width 552px\n    color #FFFFFF\n    font-size 36px\n    line-height 140%\n    text-shadow 1px 1px 1px black\n    text-align center\n   content Except for a virtually unlimited supply of clean water.\n mindmap\n  head\n   tag page\n   title Mindmap\n   stylesheets /nudgepad/blocks.css\n   style\n    body\n     background-color transparent\n     background-image url(/nudgepad/public/images/textures/tan.jpeg)\n     width 960px\n     height 1000px\n  block2\n   style\n    left 145px\n    top 50px\n    width auto\n    padding 15px\n    height auto\n    border-radius 20px\n    border 1px solid #333333\n    text-align center\n    font-family Open Sans\n    box-shadow 1px 1px 5px rgba(0,0,0,0.3)\n    font-size 20px\n    background-color white\n    font-weight bold\n   content Subtopic\n  block3\n   style\n    left 283px\n    top 126px\n    width auto\n    padding 15px\n    height auto\n    border-radius 20px\n    border 1px solid #333333\n    text-align center\n    font-family Open Sans\n    box-shadow 1px 1px 5px rgba(0,0,0,0.3)\n    font-size 36px\n    background-color white\n    font-weight normal\n   content Main Topic\n  block4\n   style\n    left 333px\n    top -2px\n    width auto\n    padding 15px\n    height auto\n    border-radius 20px\n    border 1px solid #333333\n    text-align center\n    font-family Open Sans\n    box-shadow 1px 1px 5px rgba(0,0,0,0.3)\n    font-size 20px\n    background-color white\n    font-weight bold\n   content Subtopic\n  block5\n   style\n    left 521px\n    top 50px\n    width auto\n    padding 15px\n    height auto\n    border-radius 20px\n    border 1px solid #333333\n    text-align center\n    font-family Open Sans\n    box-shadow 1px 1px 5px rgba(0,0,0,0.3)\n    font-size 20px\n    background-color white\n    font-weight bold\n   content Subtopic\n  block6\n   style\n    left 521px\n    top 225px\n    width auto\n    padding 15px\n    height auto\n    border-radius 20px\n    border 1px solid #333333\n    text-align center\n    font-family Open Sans\n    box-shadow 1px 1px 5px rgba(0,0,0,0.3)\n    font-size 20px\n    background-color white\n    font-weight bold\n   content Subtopic\n  block7\n   style\n    left 333px\n    top 281px\n    width auto\n    padding 15px\n    height auto\n    border-radius 20px\n    border 1px solid #333333\n    text-align center\n    font-family Open Sans\n    box-shadow 1px 1px 5px rgba(0,0,0,0.3)\n    font-size 20px\n    background-color white\n    font-weight bold\n   content Subtopic\n  block8\n   style\n    left 145px\n    top 225px\n    width auto\n    padding 15px\n    height auto\n    border-radius 20px\n    border 1px solid #333333\n    text-align center\n    font-family Open Sans\n    box-shadow 1px 1px 5px rgba(0,0,0,0.3)\n    font-size 20px\n    background-color white\n    font-weight bold\n   content Subtopic\n  block9\n   style\n    left 652px\n    top 14px\n    width auto\n    padding 10px\n    height auto\n    border-radius 20px\n    border 1px solid #333333\n    text-align center\n    font-family Open Sans\n    box-shadow 1px 1px 5px rgba(0,0,0,0.3)\n    font-size 14px\n    background-color white\n   content Minor Topic\n  block10\n   style\n    left 652px\n    top 90px\n    width auto\n    padding 10px\n    height auto\n    border-radius 20px\n    border 1px solid #333333\n    text-align center\n    font-family Open Sans\n    box-shadow 1px 1px 5px rgba(0,0,0,0.3)\n    font-size 14px\n    background-color white\n   content Minor Topic\n  block11\n   style\n    left 14px\n    top 277px\n    width auto\n    padding 10px\n    height auto\n    border-radius 20px\n    border 1px solid #333333\n    text-align center\n    font-family Open Sans\n    box-shadow 1px 1px 5px rgba(0,0,0,0.3)\n    font-size 14px\n    background-color white\n   content Minor Topic\n  block12\n   style\n    left 14px\n    top 207px\n    width auto\n    padding 10px\n    height auto\n    border-radius 20px\n    border 1px solid #333333\n    text-align center\n    font-family Open Sans\n    box-shadow 1px 1px 5px rgba(0,0,0,0.3)\n    font-size 14px\n    background-color white\n   content Minor Topic\n times\n  head\n   tag page\n   title Untitled\n   stylesheets /nudgepad/blocks.css\n   style\n    body\n     width 960px\n     height 1000px\n   old_style \n    @font-face {\n      font-family: \'OldLondon\';\n      src: url(\'/nudgepad/public/fonts/OldLondon.ttf\');\n      font-weight: normal;\n      font-style: normal;\n    }\n  block2\n   style\n    left 392px\n    top 114px\n    background transparent\n    height auto\n    width 174.5px\n    color #666666\n    font-size 15px\n    line-height 140%\n    font-family Times\n   content Friday, December 7, 2012\n  block1\n   style\n    left -1px\n    top 26px\n    background transparent\n    padding-bottom 20px\n    height auto\n    font-weight bold\n    width 960px\n    color #222222\n    font-size 69px\n    line-height 140%\n    font-family OldLondon\n    border-bottom-width 2px\n    border-left-width 1px\n    border-top-width 1px\n    border-right-width 1px\n    border-color black\n    border-style solid\n    text-align center\n   content The Nudgepad Times\n  block17\n   tag img\n   src /nudgepad/public/images/pic.jpg\n   style\n    left 259px\n    top 202px\n    width 336.5px\n    height auto\n  block4\n   style\n    left -1px\n    top 145px\n    height 562px\n    width 94px\n    border-left-width 1px\n    border-color black\n    border-style solid\n    border-right-width 1px\n    border-right-color #e2e2e2\n  block5\n   style\n    left 605.5px\n    top 145px\n    height 562px\n    width 353.5px\n    border-left-width 1px\n    border-color #e2e2e2\n    border-style solid\n    border-right-width 1px\n    border-right-color black\n  block6\n   style\n    left -2px\n    top 707px\n    background transparent\n    padding-bottom 20px\n    height auto\n    font-weight bold\n    width 960px\n    color #222222\n    font-size 69px\n    line-height 140%\n    border-bottom-width 2px\n    border-left-width 1px\n    border-top-width 1px\n    border-right-width 1px\n    border-color black\n    border-style solid\n    text-align center\n  block7\n   style\n    left 112px\n    top 160px\n    background transparent\n    height auto\n    width auto\n    color #004276\n    font-size 24px\n    font-family Times\n    font-weight bold\n   content Man Points at Map with Elongated Stick\n  block8\n   style\n    left 112px\n    top 202px\n    background transparent\n    height auto\n    width 128.5px\n    color #004276\n    font-size 16px\n    font-family Times\n    font-weight bold\n   content What will he point at next?<br>\n  block9\n   style\n    left 112px\n    top 255px\n    background transparent\n    height auto\n    width 128.5px\n    color #333333\n    font-size 12px\n    font-family Times\n   content The pointing at the stick began when a man in third row stood up to ask a question.<br>\nlists\n list1\n  head\n   tag creation\n   title Untitled\n   category content\n   stylesheets /nudgepad/blocks.css\n   scripts http://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js\n   style\n    body\n     width 100%\n  block1\n   style\n    background-color transparent\n    height auto\n    width auto\n    font-size 14px\n    border-top 1px solid #ccc\n    white-space nowrap\n    border-bottom 1px solid #ccc\n    border-left 1px solid #ccc\n    color #333\n    top 0\n    left 0\n   tag list\n   item\n    style\n     color #333\n     display inline-block\n     text-align center\n     width 120px\n     height 40px\n     line-height 40px\n     background-color #eee\n     border-right 1px solid #ccc\n    content {{value}}\n   items\n    1 Item 1\n    2 Item 2\n    3 Item 3\n    4 Item 4\n list2\n  head\n   tag creation\n   title Untitled\n   category content\n   stylesheets /nudgepad/blocks.css\n   scripts http://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js\n   style\n    body\n     width 100%\n  block1\n   style\n    background-color transparent\n    height auto\n    width auto\n    font-size 14px\n    white-space nowrap\n    color #333\n    top 0\n    left 0\n   tag list\n   item\n    style\n     color #333\n     line-height 180%\n    content {{value}}\n   items\n    1 Item 1\n    2 Item 2\n    3 Item 3\n    4 Item 4\nscripts\n googleAnalytics\n  googleAnalytics\n   tag script\n   content \n    var _gaq = _gaq || [];\n    _gaq.push([\'_setAccount\', \'{{site.googleAnalyticsId}}\']);\n    _gaq.push([\'_trackPageview\']);\n    (function() {\n      var ga = document.createElement(\'script\'); ga.tag = \'text/javascript\'; ga.async = true;\n      ga.src = (\'https:\' == document.location.protocol ? \'https://ssl\' : \'http://www\') + \'.google-analytics.com/ga.js\';\n      var s = document.getElementsByTagName(\'script\')[0]; s.parentNode.insertBefore(ga, s);\n    })();\n jquery\n  jquery\n   tag script\n   src //ajax.googleapis.com/ajax/libs/jquery/2.0.0/jquery.min.js\n');/**
 */
function EditHandle() {  
}

EditHandle.create = function (scrap) {
  var element = scrap.element()
  var div = $('<div class="nudgepadEditHandle"></div>')
  div.attr('value', scrap.getPath())
  div.addClass('handle edit_handle ' + scrap.id + '_handle')
  
  var edit = $('<div class="nudgepadEditStyleHandle"></div>')
  edit.on('tap', function () {
    nudgepad.styleEditor(scrap)
    div.remove()
    return false
  })
  div.append(edit)
  
  element.parent().append(div)
  div.on("update", EditHandle.update)
  div.trigger("update")
}

EditHandle.update = function () {
  var owner = $(this).owner()
  $(this).css({
  "left" : owner.position().left + 2 + "px",
  "top" : owner.position().top + owner.outerHeight(true) + 4 + "px"
  })
}

;Design.getPageDimensions = function (page) {
  page = new Page(page)
  page._static = true
  var iframe = $('<iframe class="deleteMe" style="position: fixed; right: 0px; top: 0px;"></iframe>')
  iframe.attr('frameborder', 0)
  iframe.attr('scrolling', 'no')
  iframe.css('width', 1)
  iframe.css('height', 1)
  $('#nudgepadTemp').append(iframe)
  iframe.contents().find('body').append(page.toHtml())
  var box = {}
  var first = false
  iframe.contents().find('.scrap').each(function () {
    var left
    var right
    var _top
    var bottom
    if (!first) {
      box.left = $(this).position().left
      box.right = box.left + $(this).outerWidth()
      box.top = $(this).position().top
      box.bottom = box.top + $(this).outerHeight()
      first = true
    }
    else {
      left = $(this).position().left
      right = left + $(this).outerWidth()
      _top = $(this).position().top
      bottom = top + $(this).outerHeight()
      if (left < box.left)
        box.left = left
      if (right > box.right)
        box.right = right
      if (_top < box.top)
        box.top = _top
      if (bottom > box.bottom)
        box.bottom = bottom
    }
  })
  box.height = box.bottom - box.top
  box.width = box.right - box.left
  $('.deleteMe').remove()
  return box
}
;/**
 * A grid object looks like:
 * radius 15
 * type dynamic
 * vertical_spacing 100
 * horizontal_spacing 100
 * snaplines true
 * on true
 * visible false
 * points
 *  0.0
 *   x 0
 *   y 0
 *   selector #scrap2
 *  10.21
 *   x 10
 *   y 21
 *   selector #scrap3
 *
 * @param {object}
 */
function Grid (obj) {
  this.points = {}
  this.radius = 7
  this.snap_to_objects = true
  this.snap_to_grid = false
  this.snap_to_container = true
  this.vertical_spacing = 20
  this.horizontal_spacing = 20
  this.snaplines = true
  this.on = true
  this.visible = false
  if (obj) {
    for (var i in obj) {
      if (obj.hasOwnProperty(i))
        this[i] = obj[i]
    }
  }
}

/**
 * 
 */
Grid.prototype.addDynamicPoints = function () {

  var grid = this
  // Cap grid at 200 elements for now
  if ($('#nudgepadStageBody #body').children('.scrap:not(.selection)').length > 200)
    return true
  $('#nudgepadStageBody #body').children('.scrap:not(.selection)').each(function(){
    // Make sure no problem fetching scrap
    var scrap = $(this).scrap()
    if (scrap)
      grid.addPoints(scrap.selector())
  })
}

/**
 * 
 */
Grid.prototype.addFixedPoints = function () {


  // verticals
  var start = $('#nudgepadStageBody').position().left
  var end = $('#nudgepadStageBody').position().left + $('#nudgepadStageBody').outerWidth()
  this.horizontal_spacing = parseFloat(this.horizontal_spacing)
  for (var i = start; i <= end; i = i + this.horizontal_spacing) {
    this.addPoint(i, 0, '#nudgepadStageBody')  
  }
  
  start = $('#nudgepadStageBody').position().top
  end = $('#nudgepadStageBody').position().top + $('#nudgepadStageBody').outerHeight()
  this.vertical_spacing = parseFloat(this.vertical_spacing)
  for (var i = start; i <= end; i = i + this.vertical_spacing) {
    this.addPoint(0, i, '#nudgepadStageBody')  
  }

}

/**
 * @param {number}
 * @param {number}
 * @param {string}
 * Adds a point to the grid
 */
Grid.prototype.addPoint = function (x, y, selector) {
  var point = {},
      id = x + '.' + y
  point.x = x
  point.y = y
  point.selector = selector
  this.points[id] = point
}

/**
 * Computes 3 points from a jQuery object
 * @param {string}
 */
Grid.prototype.addPoints = function (selector) {
  
  var element = $(selector)
  if (!element.length)
    return console.log('not found %s', selector)
  this.addPoint(element.position().left, element.position().top, selector)
  var middle = Math.round(element.position().top + Math.round(element.outerHeight()/2))
  var center = Math.round(element.position().left + Math.round(element.outerWidth()/2))
  this.addPoint(center, middle, selector)
  this.addPoint(element.position().left + element.outerWidth(), element.position().top + element.outerHeight(), selector)  
}

/**
 * 
 */
Grid.prototype.create = function () {
  
  
  this.points = {}
  if (!this.on) {
//    this.points.clear()
    return this.erase()
  }
  
  if (this.snap_to_objects)
    this.addDynamicPoints()
  
  if (this.snap_to_grid)
    this.addFixedPoints()
  
  if (this.snap_to_container) {
    // We create these in specific order so that the bigger scraps override the little ones.
    // left
//    this.addPoint(0, $('#nudgepadStageBody').position().top, '#nudgepadStageBody')
    // right
    this.addPoint($('#nudgepadStageBody').outerWidth(), 0, '#nudgepadStageBody')
    // center
    this.addPoint(Math.round($('#nudgepadStageBody').outerWidth()/2), 0, '#nudgepadStageBody')
    // top
    this.addPoint(0, 0, '#nudgepadStageBody')
    // bottom
    this.addPoint(0, $('#nudgepadStageBody').height(), '#nudgepadStageBody')
    // middle
    this.addPoint(0, Math.round($(window).height()/2), '#nudgepadStageBody')
    
  }
  
  if (this.visible)
    this.draw()
  
  else
    this.erase()

}

/**
 * 
 */
Grid.prototype.draw = function () {
  
  var width = $("#nudgepadStageBody").width()
  var height = $("#nudgepadStageBody").height()
  
  if (this.context)
    this.erase()
  
  var canvas = '<canvas style="position: absolute; top: 0; left: 0; z-index: 0;" id="grid_canvas" width="' + width + '" height="' + height + '"></canvas>'
  $('#nudgepadStageBody').append(canvas)
  
  this.context = document.getElementById('grid_canvas').getContext('2d')
  this.context.strokeStyle = '#eee'
  
  var lines = {}
  
  lines.x = {}
  lines.y = {}
  
  for (var i in this.points) {
    
    if (!this.points.hasOwnProperty(i))
      continue
    
    var point = this.points[i]
    
    // Dont draw lines based on objects
    if (point.selector !== '#nudgepadStageBody')
      continue
    
    this.context.lineWidth = 0.5
    // Dont redraw lines
    if (!(point.x in lines.x)) {
      this.context.beginPath()
      this.context.moveTo(point.x + .5, 0)
      this.context.lineTo(point.x + .5, height)
      this.context.closePath()
      this.context.stroke()
      lines.x[point.x] = true
    }
    
    if (!(point.y in lines.y)) {
      this.context.beginPath()
      this.context.moveTo(0, point.y + .5)
      this.context.lineTo(width, point.y + .5)
      this.context.closePath()
      this.context.stroke()
      lines.y[point.y] = true
    }
    
  }
  
}


/**
 * @param {obj}
 * @param {obj}
 */
Grid.prototype.drawSnapline = function (point1, point2) {
  
  if (!this.snaplines) return false
  
  this.drawSnaplineCanvas()
  this.snapline_context.beginPath()
  this.snapline_context.lineWidth = 1
  this.snapline_context.moveTo(point1.x + .5, point1.y + .5)
  this.snapline_context.lineTo(point2.x + .5, point2.y + .5)
  this.snapline_context.stroke()
  
  //draw a circle
  
  this.snapline_context.moveTo(point1.x, point1.y)
  this.snapline_context.beginPath()
  this.snapline_context.arc(point1.x, point1.y, 2, 0, Math.PI*2, true)
  this.snapline_context.closePath()
  this.snapline_context.fill()
  
  this.snapline_context.moveTo(point2.x, point2.y)
  this.snapline_context.beginPath()
  this.snapline_context.arc(point2.x, point2.y, 2, 0, Math.PI*2, true)
  this.snapline_context.closePath()
  this.snapline_context.fill()
  
//  console.log(point2.selector)
  
  // Dont draw lines based on objects
  if (point2.selector !== '#nudgepadStageBody')
    $(point2.selector).addClass('nudgepadSnapOrigin')
}

/**
 */
Grid.prototype.drawSnaplineCanvas = function () {
  
  if (this.snapline_context)
    return true
  
  this.width = $("#nudgepadStageBody").width()
  this.height = $("#nudgepadStageBody").height()
  
  var canvas = '<canvas style="position: absolute; top: 0; left: 0; z-index: 100;" id="snapline_canvas" width="' + this.width + '" height="' + this.height + '"></canvas>'
  $('#nudgepadStageBody').append(canvas)
  
  this.snapline_context = document.getElementById('snapline_canvas').getContext('2d')
  this.snapline_context.lineWidth = 1
  this.snapline_context.strokeStyle = 'blue'
  
  // Sometimes it gets stuck(ie when someone is snapping then right clicks). This lets you click it to remove it.
  $('#snapline_canvas').on('mousedown', function () {
    $(this).remove()
  })
}

/**
 */
Grid.prototype.erase = function () {
  delete this.context
  delete this.snapline_context
  $('#grid_canvas,#snapline_canvas').remove()
  $('.nudgepadSnapOrigin').removeClass('nudgepadSnapOrigin')
}

/**
 */
Grid.prototype.eraseSnaplines = function () {
  
  if (!this.snaplines) return false
  
  $('.nudgepadSnapOrigin').removeClass('nudgepadSnapOrigin')
  
  if (!this.snapline_context)
    return false
  // I have lots of transforms right now
//  this.snapline_context.save()
///  this.snapline_context.setTransform(1, 0, 0, 1, 0, 0)
  // Will always clear the right space
  this.snapline_context.clearRect(0, 0, this.width, this.height)
//  this.snapline_context.restore()
  // Still have my old transforms
}

/**
 * todo: make sure grid is sorted so this is blazing fast!
 * @return {object} change.x, change.y
 */
Grid.prototype.getDelta = function (scrap_points) {
  this.eraseSnaplines()
  
  var change = {}
  var x_pair = []
  var y_pair = []
  // Check all 3 points. We are looking for the closest link.
  for (var i in scrap_points) {
    var scrap_point = scrap_points[i]
    // compute the smallest 3 x difference to each point
    for (var j in this.points) {
      if (!this.points.hasOwnProperty(j))
        continue
      var grid_point = this.points[j]
      
      var x_difference = grid_point.x - scrap_point.x
      var y_difference = grid_point.y - scrap_point.y
      
      // Initialize values
      if (!change.x) {
        change.x = x_difference
        change.y = y_difference
      }
      
      // If this point difference is closer, use it.
      if (Math.abs(x_difference) <= Math.abs(change.x)) {
        change.x = x_difference
        x_pair = [scrap_point, grid_point]
      }
      if (Math.abs(y_difference) <= Math.abs(change.y)) {
        change.y = y_difference
        y_pair = [scrap_point, grid_point]
      }
    }

  }
  
  
  var x_snapped = Math.abs(change.x) < this.radius
  var y_snapped = Math.abs(change.y) < this.radius
  
  if (!x_snapped) change.x = 0
  if (!y_snapped) change.y = 0
  
  // The scrap points may have shifted in 2 directions, so make sure
  // we are drawing the *new* scrap points when we draw the snapline.
  if (x_snapped) {
    x_pair[0] = {
      x : x_pair[0].x + change.x,
      y : x_pair[0].y + change.y
    }
    this.drawSnapline(x_pair[0], x_pair[1])
  }
  if (y_snapped) {
    y_pair[0] = {
      x : y_pair[0].x + change.x,
      y : y_pair[0].y + change.y
    }
    this.drawSnapline(y_pair[0], y_pair[1])
  }
  
  return change
  

  
}

/**
 */
Grid.prototype.removeSnaplines = function () {
  delete this.snapline_context
  $('#snapline_canvas').remove()
  $('.nudgepadSnapOrigin').removeClass('nudgepadSnapOrigin')
}

;/**
 * @special Singleton
 */
nudgepad.images = {}

/**
 * given url(http://foobar.com/foob.png) returns foob.png
 *
 * @param {string} 
 * @return {string} 
 */
nudgepad.images.getFilename = function (url) {
  var file = nudgepad.images.parseBackgroundUrl(url).split(/\//)
  return file[file.length-1]
  
}

/**
 * @param {string} Image name to add
 * @param {bool} Whether to insert it via drag and drop.
 * @return {string} Scrap id
 */
nudgepad.images.insertImageScrap = function (filename, drag) {

  if (filename.match(/^url\(/))
    filename = nudgepad.images.parseBackgroundUrl(filename)
  
  // Easter Egg: allow swapping of images
  if (!drag && $('.selection').length > 0) {
    Design.stage.selection.css('background-image url(' + filename + ')')
    Design.stage.selection.css('background-repeat no-repeat')
    Design.stage.selection.css('background-position center')
    return false
  }

  $('<img/>').attr("src", filename).load(function() {
     
    var space = new Space(
      "style" +
      "\n background-image " + 'url(' + filename + ')' +
      "\n background-repeat no-repeat" + 
      "\n background-color transparent" +
      "\n background-position center" +
      "\n background-size contain" +
      "\n width " + this.width + 'px' +
      "\n height " + this.height + 'px')
    var scraps = new Space().set('scrap', space)
    return Design.stage.insert(scraps, drag)
  })
}

/**
 * Is it an image?
 *
 * @param {string}
 * @return {bool}
 */
nudgepad.images.isImage = function (filename) {
  return filename.match(/\.(png|jpg|jpeg|gif)$/i)
}

/**
 * given url(/foob.png) returns /foob.png
 *
 * @param {string} 
 * @return {string} 
 */
nudgepad.images.parseBackgroundUrl = function (url) {
  return url.split(/(\(|\))/).slice(2)[0]
}

/**
 * Downloads the latest list of images from server and stores
 * it in a property which is used to render the droppables.
 */
nudgepad.images.images = new Space()
nudgepad.images.updateList = function () {
  $.get('/Explorer.public', {}, function (space) {
    var dropImageDiv = ''
    nudgepad.images.images = new Space(space)
    nudgepad.images.images.each(function (key, value) {
      if (nudgepad.images.isImage(key))
        dropImageDiv += '<div class="imageThumbDrop">&nbsp;<img src="/'+ key +'">&nbsp;</div>'
    })

    $('#imageDroppablesList').html(dropImageDiv)
    
  })
}

// When an image is uploaded
nudgepad.on('uploadComplete', nudgepad.images.updateList)
nudgepad.on('uploadComplete', function () {
  mixpanel.track('I uploaded something')
})
nudgepad.on('public', nudgepad.images.updateList)
nudgepad.on('main', nudgepad.images.updateList)
;Design.importPrompt = function () {
  
  var url = prompt('Enter a url to import')
  if (!url)
    return false
  
  if (!url.match(/^https?\:\/\//))
    url = 'http://' + url
  Design.import(url)
  
}

Design.import = function (url) {
  $.get('/Design.import/' + url, {}, function (data) {
    Design.page = new Page(data)
    Design.stage.commit()
    Design.stage.open(Design.stage.activePage)
  })
}
;// http://stackoverflow.com/questions/3562493/jquery-insert-div-as-certain-index
$.fn.insertAt = function(index, element) {
  var lastIndex = this.children().size()
  if (index < 0) {
    index = Math.max(0, lastIndex + 1 + index)
  }
  this.append(element)
  if (index < lastIndex) {
    this.children().eq(index).before(this.children().last())
  }
  return this
}
;$.fn.owner = function () {
  return Design.page.get($(this).attr('value')).element()
}
;$.fn.deselect = function () {
  var id = $(this).attr('id')
  $(this).removeClass('selection')
  $('.' + id + '_handle').remove()
  nudgepad.trigger('selection')
  return $(this)
}

$.fn.duplicate = function () {
  
  var scrap = $(this).scrap()
  var id = $(this).attr('id')
  var parent = Design.page
  var path = $(this).parentPath()
  if (path) {
    parent = Design.page.get(path)
    path = path.replace(/ scraps/g,'') + ' '
  }
  var key = parent.autokey(id)
  var newScrap = new Scrap(path + key, scrap.toString())
  var index = parent.keys.indexOf(id) + 1
  parent.set(key, newScrap, index)
  $(this).deselect()
  var element = newScrap.render(null, index).element()
  if (element.css('position') === 'absolute')
    newScrap.move(10,10)
  element.selectMe()
}

$.fn.parentPath = function () {
  var path = $(this).attr('path')
  if (!path.match(/ /))
    return ''
  return path.replace(/ [^ ]+$/,'')
}

$.fn.scrap = function () {
  return Design.page.get($(this).attr('path'))
}

/**
 * @param {string}
 * @return {Scrap} this
 */
$.fn.selectMe = function () {
  
  var scrap = $(this).scrap()
  
  if (scrap.get('locked'))
    return false
  
  // Dont double select things
  if ($(this).hasClass('selection'))
    return this
  $(this).addClass('selection')
  

  nudgepad.MoveHandle.create(scrap)
  
  nudgepad.trigger('selection')

  EditHandle.create(scrap)
  
  var style = scrap.get('style')
  // If no width, return
  if (!style)
    return this
  
  // Set Fixed proportions or not
  var fixed = (style.get('background-image') && style.get('background-size') === 'contain')
  
  if (fixed) {
    nudgepad.StretchHandle.create(scrap, "middle", "left", fixed)
    nudgepad.StretchHandle.create(scrap, "middle", "right", fixed)
    return this
  }
  
  // Everything can be resized
  nudgepad.StretchHandle.create(scrap, "top", "left")
  nudgepad.StretchHandle.create(scrap, "top", "center")
  nudgepad.StretchHandle.create(scrap, "top", "right")
  nudgepad.StretchHandle.create(scrap, "middle", "left")
  nudgepad.StretchHandle.create(scrap, "middle", "right")
  nudgepad.StretchHandle.create(scrap, "bottom", "left")
  nudgepad.StretchHandle.create(scrap, "bottom", "center")
  nudgepad.StretchHandle.create(scrap, "bottom", "right")
  
  return $(this)
}

$.fn.togglePosition = function () {
  var scrap = $(this).scrap()
  var position = 'absolute'
  if ($(this).css('position') === 'absolute') {
    position = 'relative'
    scrap.set('style left', '')
    scrap.set('style top', '')
  } else {
    scrap.set('style left', '0px')
    scrap.set('style top', '0px')
  }
  scrap.set('style position', position)
  $(this).attr('style', '')
  $(this).css(scrap.get('style').values)
}

$.fn.toggleSize = function () {
  var scrap = $(this).scrap()
  
  var width = $(this).width() + 'px'
  if (!scrap.get('style width') || !scrap.get('style width').match(/\%/))
    width = Math.round(100*$(this).width()/$(this).parent().width()) + '%'
  scrap.set('style width', width)
  
  var height = $(this).height() + 'px'
  if (!scrap.get('style height') || !scrap.get('style height').match(/\%/))
    height = Math.round(100*$(this).height()/$(this).parent().height()) + '%'
  scrap.set('style height', height)
  
  $(this).css({
    width : width,
    height : height
  })
}

;/**
 * We provide easy access to querying the mouse position and state.
 *
 * @special Singleton.
 */
Mouse = {}

// Is the mouse down?
Mouse.isDown = false

/**
 * When a mousedown starts, we keep track of how far the mouse moves. Helpful for
 * drag and drop and drawing stuff.
 */
Mouse.yChange = 0
Mouse.xChange = 0
Mouse.pathDistance = 0

/**
 * Update our Mouse object
 *
 * @param {object} The mousedown event
 * @return true. Continue propagation.
 */
Mouse.onmousedown = function (event) {
  //  console.log('mouse down')
  Mouse.isDown = true
  Mouse.down = event
  Mouse.target = event.srcElement || event.originalTarget || event.target
  Mouse.lastX = event.pageX
  Mouse.lastY = event.pageY
  Mouse.pathDistance = 0
  return true
}

/**
 * Update our Mouse object
 *
 * @param {object} The move event
 * @return true. Continue propagation.
 */
Mouse.onmousemove = function (event) {
  Mouse.move = event
//  console.log('mouse move')
  if (!Mouse.isDown)
    return true
  
  Mouse.pathDistance += Math.abs(event.pageX - Mouse.lastX) + Math.abs(event.pageY - Mouse.lastY)
  Mouse.lastX = event.pageX
  Mouse.lastY = event.pageY
  Mouse.xChange = event.pageX - Mouse.down.pageX
  Mouse.yChange = event.pageY - Mouse.down.pageY
  Mouse.distance = // a2 + b2 = c2 solving for c
    Math.pow(
      Math.pow(Mouse.xChange, 2) +
      Math.pow(Mouse.yChange, 2),
    .5)
  // todo: rotation
  return true
}

/**
 * Update our Mouse object
 *
 * @param {object} The mouseup event
 * @return true. Continue propagation.
 */
Mouse.onmouseup = function (event) {
  Mouse.isDown = false
  Mouse.xChange = event.pageX - Mouse.down.pageX
  Mouse.yChange = event.pageY - Mouse.down.pageY
  Mouse.distance = // a2 + b2 = c2 solving for c
    Math.pow(
      Math.pow(Mouse.xChange, 2) +
      Math.pow(Mouse.yChange, 2),
    .5)
  return true
}

/**
 * Update our Mouse object
 *
 * @param {object} The mouseup event
 * @return true. Continue propagation.
 */
Mouse.onTouchEnd = function (event) {
  Mouse.isDown = false
  Mouse.xChange = event.pageX - Mouse.down.pageX
  Mouse.yChange = event.pageY - Mouse.down.pageY
  Mouse.distance = // a2 + b2 = c2 solving for c
    Math.pow(
      Math.pow(Mouse.xChange, 2) +
      Math.pow(Mouse.yChange, 2),
    .5)
  return true
}

/**
 * Update our Mouse object
 *
 * @param {object} The mousedown event
 * @return true. Continue propagation.
 */
Mouse.onTouchStart = function (event) {
  //  console.log('mouse down')
  Mouse.isDown = true
  Mouse.down = event
  Mouse.target = event.srcElement || event.originalTarget || event.target
  Mouse.lastX = event.pageX
  Mouse.lastY = event.pageY
  Mouse.pathDistance = 0
  return true
}

/**
 * Update our Mouse object
 *
 * @param {object} The move event
 * @return true. Continue propagation.
 */
Mouse.onTouchMove = function (event) {
  Mouse.move = event
//  console.log('mouse move')
  if (!Mouse.isDown)
    return true
  
  Mouse.pathDistance += Math.abs(event.pageX - Mouse.lastX) + Math.abs(event.pageY - Mouse.lastY)
  Mouse.lastX = event.pageX
  Mouse.lastY = event.pageY
  Mouse.xChange = event.pageX - Mouse.down.pageX
  Mouse.yChange = event.pageY - Mouse.down.pageY
  Mouse.distance = // a2 + b2 = c2 solving for c
    Math.pow(
      Math.pow(Mouse.xChange, 2) +
      Math.pow(Mouse.yChange, 2),
    .5)
  // todo: rotation
  return true
}

nudgepad.on('main', function () {

  if ( navigator.userAgent.match(/(iPad|iPhone|iPod)/i) ) {
    document.addEventListener('touchstart', Mouse.onTouchStart, true)
    document.addEventListener('touchend', Mouse.onTouchEnd, true)
    document.addEventListener('touchmove', Mouse.onTouchMove, true)
  } else {
    document.addEventListener('mousedown', Mouse.onmousedown, true)
    document.addEventListener('mousemove', Mouse.onmousemove, true)
    document.addEventListener('mouseup', Mouse.onmouseup, true)
  }
})
;/**
 * MoveHandle changes the (x, y) coordinates of selected Scraps 
 */
nudgepad.MoveHandle = function () {
}

nudgepad.MoveHandle.create = function (scrap) {
  
  var element = scrap.element()
  
  
  var div = $('<div></div>')
  div.attr('value', scrap.getPath())
  div.addClass('handle ' + scrap.id + '_handle move_handle')
  div.attr('id', 'move_handle_' + scrap.id)
  div.attr('title', scrap.id)
  
  var position = element.css('position')
  if (position === 'fixed' || position === 'absolute') {
    div.on("mousedown", nudgepad.MoveHandle.mousedown)
    div.on("slide", nudgepad.MoveHandle.slide)
    div.on("slidestart", nudgepad.MoveHandle.slidestart)
    div.on("slideend", nudgepad.MoveHandle.slideend)
    div.css('cursor', 'move')
  }
  div.css({
    "position" : (position === 'fixed' ? 'fixed' : 'absolute'),
    "z-index" : "50"
  })
  element.parent().append(div)
  div.on("tap", nudgepad.MoveHandle.tap)
  div.on("update", nudgepad.MoveHandle.update)
  div.on("dblclick", function (event) {
    if (event.metaKey) {
      element.togglePosition()
      Design.stage.commit()
      element.deselect().selectMe()
    } else
      scrap.edit(true)
  })
  
  div.trigger("update")
}

// We cache the start dimensions
nudgepad.MoveHandle.dimensions = {}

//If small block is on top of (higher z-index) a bigger block, selects small block
nudgepad.MoveHandle.mousedown = function () {
//  nudgepad.MoveHandle.selectTopScrap()
  nudgepad.MoveHandle.dimensions = $(this).owner().dimensions()
  Design.grid.create()
  nudgepad.MoveHandle.last_x_change = 0
  nudgepad.MoveHandle.last_y_change = 0
  
  nudgepad.MoveHandle.scrollTop = Design.stage.scrollTop()
  return true
}

/**
 * if the click is on another smaller div select that one instead of move.
 *
 * @param true. Allow propogation
 */
nudgepad.MoveHandle.selectTopScrap = function () {

  // get element at point
  var offsetLeft = $('#nudgepadStageBody').offset().left
  var offsetTop = $('#nudgepadStageBody').offset().top
  var element = $.topDiv('.scrap:visible', Mouse.down.pageX - offsetLeft, Mouse.down.pageY - offsetTop + Design.stage.scrollTop())
  // if a narrow div and no element underneath, return
  if (!element)
    return true
  // Its the selection block
  if (element.hasClass("selection"))
    return true
  var scrap = element.scrap()
  // Dont select block if locked
  if (scrap.get('locked'))
    return true
  Design.stage.selection.clear()
  element.selectMe()
  return true
}

/**
 * Changes top and/or left and/or bottom and/or right and/or margin
 */
nudgepad.MoveHandle.slide = function (event, mouseEvent) {

  var owner = $(this).owner()
  var scrap = owner.scrap()
  var dimensions = nudgepad.MoveHandle.dimensions
  
  var scrollChange = Design.stage.scrollTop() - nudgepad.MoveHandle.scrollTop

  var grid_change = {y : 0, x : 0}

  if (!mouseEvent.shiftKey) {
    grid_change = Design.grid.getDelta([
      {x : dimensions.left + Mouse.xChange, y : dimensions.top + Mouse.yChange + scrollChange},
      {x : dimensions.right + Mouse.xChange, y : dimensions.bottom + Mouse.yChange + scrollChange},
      {x :  dimensions.center + Mouse.xChange, y : dimensions.middle + Mouse.yChange + scrollChange}
    ])
  }
  var y_change = Mouse.yChange + scrollChange + grid_change.y
  var x_change = Mouse.xChange + grid_change.x
  

  $('.selection').each(function (){
    $(this).scrap().move(x_change - nudgepad.MoveHandle.last_x_change, y_change - nudgepad.MoveHandle.last_y_change)
  })
  
  var position = 'X ' + parseFloat(owner.css('left')) + '<br>Y ' + parseFloat(owner.css('top'))
  $('#nudgepadDimensions').css({
    left : 10 + owner.offset().left + owner.outerWidth(),
    top : -10 + owner.offset().top + Math.round(owner.outerHeight(true)/2)
    }).html(position)
  
  nudgepad.MoveHandle.last_x_change = x_change
  nudgepad.MoveHandle.last_y_change = y_change
  
  return false
  
}

nudgepad.MoveHandle.slideend = function () {
  
  $('.handle').trigger('update').show()
  Design.grid.removeSnaplines()
  $('#nudgepadDimensions').hide()
  Design.stage.commit()
}

nudgepad.MoveHandle.slidestart = function () {
  
  $('.handle').not(this).hide()
  var owner = $(this).owner()
  var position = 'X ' + parseFloat(owner.css('left')) + '<br>Y ' + parseFloat(owner.css('top'))
  $('#nudgepadDimensions').css({
    left : 10 + owner.offset().left + owner.outerWidth(),
    top : -10 + owner.offset().top + Math.round(owner.outerHeight(true)/2)
    }).html(position).show()
  return false
}

// Dont propogate tap events
nudgepad.MoveHandle.tap = function () {
  // If shift key is down, remove from selection
  if (Mouse.down && Mouse.down.shiftKey)
    $(this).owner().deselect()
  return false
}

nudgepad.MoveHandle.update = function () {
  var owner = $(this).owner()
  if (!owner.position())
    debugger
  // make it easy to move narrow divs
  var top_padding  = Math.min(10, owner.outerHeight(true) - 20)
  var left_padding = Math.min(10, owner.outerWidth() - 20)
  var style = {
    "left" : owner.position().left + left_padding  + 'px',
    "top" : (owner.position().top + top_padding) + 'px',
    "height" : (owner.outerHeight(true) - top_padding * 2) + 'px',
    "width" : (owner.outerWidth() - left_padding * 2)  + 'px'}
  $(this).css(style)
}
;/**
 */
nudgepad.oncopy = function(e) {
  
  // Return true if worker is editing an input
  if ($('input:focus, div:focus, textarea:focus, a:focus').length)
    return true
  
  if (!Design.stage.selection.exists())
    return true
  
  if (e.clipboardData) {
    e.preventDefault()
    e.clipboardData.setData(
        'text/xcustom', Design.stage.selection.toSpace().toString())

    var setStatus = e.clipboardData.setData(
        'text/plain', Design.stage.selection.toSpace().toString())
  }
  if (window.clipboardData) {
    e.returnValue = false
    var setStatus = window.clipboardData.setData(
      'Text', Design.stage.selection.toSpace().toString())
  }
  mixpanel.track('I copied something')
}

nudgepad.on('main', function () {
  window.addEventListener('copy', nudgepad.oncopy, false)
})
;/**
 */
nudgepad.oncut = function(e) {
  
  // Return true if worker is editing an input
  if ($('input:focus, div:focus, textarea:focus, a:focus').length)
    return true
  
  if (!Design.stage.selection.exists())
    return true
    
  if (e.clipboardData) {
    e.preventDefault()
    e.clipboardData.setData(
        'text/xcustom', Design.stage.selection.toSpace().toString())

    var setStatus = e.clipboardData.setData(
        'text/plain', Design.stage.selection.toSpace().toString())
    console.log('setData: ' + setStatus)
  }
  if (window.clipboardData) {
    e.returnValue = false
    var setStatus = window.clipboardData.setData(
      'Text', Design.stage.selection.toSpace().toString())
    console.log('setData: ' + setStatus)
  }
  Design.stage.selection.remove()
  Design.stage.commit()
  mixpanel.track('I cut something')
}

nudgepad.on('main', function () {
  window.addEventListener('cut', nudgepad.oncut, false)
})
;nudgepad.isScraps = function (text) {
  return text.match(/\n/)
}

/**
 */
nudgepad.onpaste = function(e) {

  // Return true if worker is editing an input
  if ($('input:focus, div:focus, textarea:focus, a:focus').length)
    return true
  
  var pastedText = undefined
  if (window.clipboardData && window.clipboardData.getData) // IE
    pastedText = window.clipboardData.getData('Text')
  else if (e.clipboardData && e.clipboardData.getData)
    pastedText = e.clipboardData.getData('text/plain')
  
  if (nudgepad.isScraps(pastedText)) {
    
    Design.stage.insert(pastedText)
    Design.stage.selection.save()
    Design.stage.open(Design.stage.activePage)
    Design.stage.selection.restore()
  }
  mixpanel.track('I pasted something')
}

nudgepad.on('main', function () {
  window.addEventListener('paste', nudgepad.onpaste, false)
})
;/**
 * Appends scraps to DOM.
 *
 * @param {bool} Whether to render them with javascript or just html+css.
 */
Page.prototype.render = function (context) {
  
  for (var i in this.keys) {
    var id = this.keys[i]
    this.values[id].render(context)
  }
  return this
}
;// What spot the worker is on the timeline for the current page
Design.page = new Page()
Design.edge = new Space()

Design.blank = function () {

  var page = new Space(
'head\n\
 tag head\n\
 scraps\n\
  title\n\
   tag title\n\
   content Untitled\n\
  stylesheet\n\
   tag link\n\
   href site.css\n\
   rel stylesheet\n\
body\n\
 tag body\n\
 scraps\n')
  var pageName = prompt('Name your page', Design.nextName())
  if (!pageName)
    return null
  Design.create(pageName, page)
  
}

/**
 *
 */
Design.clearTimeline = function () {
  
  if (!confirm("Are you sure you want to erase the history of this page?"))
    return false
  
  var timestamp = new Date().getTime()
  
  // Send Commit to Server
  var patch = new Space()
  patch.set('timelines ' + Design.stage.activePage, new Space())
  for (var i in Design.stage.timeline.keys) {
    var key = Design.stage.timeline.keys[i]
    patch.set('timelines ' + Design.stage.activePage + ' ' + key, '')
    Design.stage.timeline.delete(key)
  }
  
  patch.set('timelines ' + Design.stage.activePage + ' ' + timestamp, Design.edge)
  // collapse at edge
  Design.stage.timeline.set(timestamp, Design.edge)

  Design.stage.version = Design.stage.timeline.keys.length
  nudgepad.emit('patch', patch.toString())
  nudgepad.trigger('selection')
  return true
}

/**
 * Creates a new page. todo: rename page param to edge
 *
 * @param {string} Name of the file
 * @param {Space} A first patch to initialize the page with.
 * @return {string} The name of the created page
 */
Design.create = function (name, template) {
  
  name = (name ? Permalink(name) : Design.nextName())
  
  // page already exists
  if (site.get('pages ' + name))
    return nudgepad.error('A page named ' + name + ' already exists.')
  
  var page = new Space()
  var timeline = new Space()
  if (template && template.toString().length > 2) {
    page = new Space(template.toString())
    var commit = new Space()
    commit.set('author', nudgepad.cookie.email)
    commit.set('values', new Space(template.toString()))
    timeline.set(new Date().getTime(), commit)
  }
  
  site.set('pages ' + name, page)
  site.set('timelines ' + name, timeline)
  
  var patch = new Space()
  patch.set('pages ' + name, page)
  patch.set('timelines ' + name, timeline)
  
  nudgepad.emit('patch', patch.toString())
  
  Design.stage.open(name)
  mixpanel.track("I created a new webpage")
  return name
}

/**
 * Duplicates the current open page.
 *
 * @param {string} name of page to duplicate. Defaults to current page.
 * @param {string} name of new page. Defaults to source + 1
 * @param {bool} We need to skip prompting for unit testing.
 * @return {string} Name of new page
 */
Design.duplicate = function (source, destination, skipPrompt) {
  
  source = source || Design.stage.activePage
  
  destination = Design.nextName(destination || source)
  
  if (!skipPrompt) {
    destination = prompt('Name your new page', destination)
    if (!destination)
      return false
  }
  
  if (!site.get('pages').get(source))
    return nudgepad.error('Page ' + source + ' not found')
  
  mixpanel.track('I duplicated a page')
  
  // If we are duplicating a page thats not open, easy peasy
  if (source !== Design.stage.activePage)
    return Design.create(destination, site.get('pages').get(source))
  
  return Design.create(destination, Design.page)
}

/**
 * Get the next available name. For example untitled_1 or untitled_2
 *
 * @param {string} Optional prefix to add to the name. Defaults to untitled_
 * @return {string} The new name
 */
Design.nextName = function (prefix) {
  var prefix = prefix || 'untitled'
  if (!(prefix in site.values.pages.values))
    return prefix
  for (var i = 1; i < 1000; i++) {
    if (!(prefix + i in site.values.pages.values))
      return prefix + i
  }
}

Design.open = function () {
  if (App.openApp)
    App.openApp.close()
}

/**
 * Renames the currently open page.
 *
 * @param {string} New name
 * @return {string} todo: why return a string?
 */
Design.rename = function (new_name) {
  
  mixpanel.track('I renamed a page')
  
  new_name = Permalink(new_name)
  var old_name = Design.stage.activePage
  
  if (!new_name.length)
    return nudgepad.error('Name cannot be blank')
  
  if (old_name == 'home')
    return nudgepad.error('You cannot rename the home page.')
  
  // page already exists
  if (site.get('pages ' + new_name))
    return nudgepad.error('A page named ' + new_name + ' already exists.')  

  site.set('pages ' + new_name, site.get('pages ' + old_name))
  site.set('timelines ' + new_name, site.get('timelines ' + old_name))
  site.delete('pages ' + old_name)
  site.delete('timelines ' + old_name)
  
  Design.updateTabs()
  
  // Todo, push this to server side?
  var patch = new Space()
  patch.set('pages ' + old_name, '')
  patch.set('timelines ' + old_name, '')
  patch.set('pages ' + new_name, site.get('pages ' + new_name))
  patch.set('timelines ' + new_name, site.get('timelines ' + new_name))

  nudgepad.emit('patch', patch.toString())
  
  Design.stage.open(new_name)
  
  mixpanel.track('I renamed a page')
  
  return ''

}

Design.renamePrompt = function () {
  var name = prompt('Enter a new name', Design.stage.activePage)
  if (name)
    Design.rename(name)
}

/**
 * Deletes a page.
 *
 * @param {string} Name of the file
 * @return {string} todo: why return a string?
 */
Design.trash = function (name) {
  name = name || Design.stage.activePage
  if (name === 'home')
    return nudgepad.error('You cannot delete the home page')
  // If its the currently open page, open the previous page first
  if (Design.stage.activePage === name)
    Design.stage.back()
  
  var patch = new Space()
  patch.set('pages ' + name, '')
  patch.set('timelines ' + name, '')
  nudgepad.emit('patch', patch.toString())

  site.get('pages').delete(name)
  site.get('timelines').delete(name)
  
  // Delete page from open pages
  Design.updateTabs()
  Flasher.flash('Deleted ' + name, 1000)
  mixpanel.track('I deleted a page')
  return ''
}

;nudgepad.on('main', function () {
  
  $('#nudgepadDesignBar #menuButton').on('mousedown', function (event) {
    if ($('#nudgepadDesignMenu:visible').length > 0) {
      Popup.hide(event)
      return true
    }
    Popup.open('#nudgepadDesignMenu')
    mixpanel.track('I opened the designer menu')
  })
  $('#nudgepadDesignBar #menuButton').on('mouseup', function (event) {
    event.stopPropagation()
    return false
  })

  // We do this on live, so that it wont interfere with events bound
  // to items inside the ribbon, but it will prevent events from
  // reaching nudgepadbody hopefull
  $('#nudgepadDesignBar').on('slide slidestart', function (event) {
    
    event.stopPropagation()
  })

})



;Design.pen = {
  on : false
}

Design.pen.draw = function (event) {
  
  if (!Design.pen.on && !Mouse.down.metaKey)
    return true
  
  if (!Mouse.isDown)
    return true
  
  if ($.isOnScrollbar(Mouse.down.clientX, Mouse.down.clientY))
    return true
  
  var offsetLeft = $('#nudgepadStageBody').offset().left
  var offsetTop = $('#nudgepadStageBody').offset().top
  var x = Mouse.down.pageX - offsetLeft
  var y = Mouse.down.pageY - offsetTop
  var scraps = new Space().set('container', new Space("style\n position absolute\n left " + x + "px\n top " + y + "px\n width 1px\n height 1px\n"))
  var selector = Design.stage.insert(scraps)[0]
  var id = $(selector).scrap().id
  console.log(id)
  // Pretend the mousedown was on the stretch handle
  Events.slide.target = $("#stretch_handle_bottomright" + id)
  $("#stretch_handle_bottomright" + id).triggerHandler("mousedown")
  $("#stretch_handle_bottomright" + id).triggerHandler("slidestart")
  mixpanel.track('I used the pen tool')
}

nudgepad.on('main', function () {
  // Bind
  $(document).on("slidestart", Design.pen.draw)
})



;nudgepad.on('main', function () {
  
  var insertDroppables = function (droppables) {
    var droppablesInsert = ''
      for (var i in droppables) {
        droppablesInsert += '<div class="droppableImg"><img src="/nudgepad/public/images/droppables/'+ droppables[i] +'.png" title="'+ droppables[i] +'"></div>'
      }

      var droppablesListItems = $('<div class="droppablesList">'+ droppablesInsert +'</div>')

      $('#droppablesList').html(droppablesListItems)

      $('#droppablesList div img').on('slidestart', function() {
        var dropBlock = $(this).attr('title')
        Design.stage.dragAndDrop(Design.droppables.get('blocks ' + dropBlock))
        mixpanel.track('I dropped a droppable')
      })

      $('.droppablesList div img').on('tap', function() {
        
        var dropBlock = $(this).attr('title')
        Design.stage.insert(Design.droppables.get('blocks ' + dropBlock), false, 0, 0, true)
        mixpanel.track('I tapped a droppable')
      })
  }
  
  var menuType;
  
  $('#blockDroppable').on('click', function () {
    menuType = "block"
    pickArray(menuType)
  })
  
  $('#textDroppable').on('click', function () {
    menuType = "text"
    pickArray(menuType)
  })
  
  $('#imageDroppable').on('click', function () {
    menuType = "image"
    pickArray(menuType)
  })
  
  $('#stickyDroppable').on('click', function () {
    menuType = "sticky"
    pickArray(menuType)
  })
  
  var pickArray = function (menuType) {
    
    var menuType;
    
    var result;

    switch (menuType) {

      case "block":
        result = ['block', 'rounded'];
        break;

      case "text":
        result = ['text', 'nav', 'paragraph'];  
        break;

      case "image":
        result = ['image', 'graph'];
        break;

      case "sticky":
        result = ['sticky', 'stickyOrange', 'stickyBlue'];
        break;

      default:
        result = [];
    }

    insertDroppables(result);
  }
  
  $(document).on('tap', '.imageThumbDrop img', function() {
    var imageY = ($('#nudgepadStage').height() / 2) - 130
    var imageX = 100
    Design.stage.insert('images\n style\n  position absolute\n  top ' + imageY +'\n  left ' + imageX + '\n tag img\n src ' + $(this).attr('src'))
  })
  
  $('#nudgepadRibbon').on('slidestart', '.imageThumbDrop img', function() {
    Design.stage.dragAndDrop('images\n style\n  position absolute\n  top 0px\n  left 0px\n tag img\n src ' + $(this).attr('src'))
    mixpanel.track('I dropped a ribbon droppable')
  })


  // We do this on live, so that it wont interfere with events bound
  // to items inside the ribbon, but it will prevent events from
  // reaching nudgepadbody hopefully
  $('#nudgepadRibbon').on('mousedown slide slidestart', function (event) {
    
    event.stopPropagation()
  })

})

;/**
 * Launches the default block editor.
 *
 * @param {string} Scrap id
 * @return {Scrap} this
 */
Scrap.prototype.onedit = '' // String, name of app to open.
Scrap.prototype.edit = function (selectAll) {
  
  if (this.values.onedit && nudgepad.apps[this.values.onedit])
    nudgepad.apps[this.values.onedit].open()
  
  // Default block editor
  else
    nudgepad.contentEditor.focus(this.selector(), selectAll)

  return this
}

Scrap.prototype.element = function () {
  return $(this.selector())
}

Scrap.prototype.getPath = function () {
  return this.path.replace(/ /g, ' scraps ')
}

/**
 * @return {bool}
 */
Scrap.prototype.isContentEditable = function () {
  if (this.values.content_format === 'nl2br' || this.values.content_format === 'markdown')
    return false
  if (this.values.content && this.values.content.match(/\{\{.*\}\}/))
    return false
  if (this.values.tag && this.values.tag.match(/^(textarea|input|password|label|button|list|ul|ol)$/))
    return false
  return true
}

/**
 * @param {number}
 * @param {number}
 * @return {Scrap} this
 */
Scrap.prototype.move = function (x, y) {
  
  // move can adjust multiple properties
  // Cases:
  // left 20%; left 20px; right 20px;
  var css = {}
  var style = this.get('style')
  if (!style) {
    this.set('style', new Space())
    style = this.get('style')
  }
  
  // Move right or left
  if (x) {
    // Move ->
    var left = style.get('left')
    if (typeof left !== 'undefined') {
      css.left = (x + parseFloat(left)) + 'px'
      style.set('left', css.left)
    }
    var right = style.get('right')
    if (typeof right !== 'undefined') {
      css.right = (-x + parseFloat(right)) + 'px'
      style.set('right', css.right)
    }
    if (typeof style.get('margin-left') !== 'undefined') {
      style.set('margin-left', (x + parseFloat(style.get('margin-left'))) + 'px')
      css['margin-left'] = style.get('margin-left')
    }
  }
  // Move up or down
  if (y) {
    if (typeof style.get('top') !== 'undefined') {
      style.set('top', (y + parseFloat(style.get('top'))) + 'px')
      css.top = style.get('top')
    }    
    if (typeof style.get('bottom') !== 'undefined') {
      style.set('bottom', (-y + parseFloat(style.get('bottom'))) + 'px')
      css.bottom = style.get('bottom')
    }
    if (typeof style.get('margin-top') !== 'undefined') {
      style.set('margin-top', (y + parseFloat(style.get('margin-top'))) + 'px')
      css['margin-top'] = style.get('margin-top')
    }
  }
  this.element().css(css)
  return this
}

Scrap.prototype.moveDown = function () {
  if (!this.values.style)
    this.set('style', new Space())
  
  if (this.get('style z-index') === undefined)
    this.set('style z-index', 0)
  else
    this.set('style z-index', parseFloat(this.get('style z-index')) - 1)
    
  $(this.selector()).css("z-index", this.get('style z-index'))
}

Scrap.prototype.moveUp = function () {
  if (!this.values.style)
    this.set('style', new Space())
  
  if (this.get('style z-index') === undefined)
    this.set('style z-index', 1)
  else
    this.set('style z-index', parseFloat(this.get('style z-index')) + 1)
    
  $(this.selector()).css("z-index", this.get('style z-index'))
}

Scrap.prototype.parentSelector = function () {
  return this.selector().replace(/\>[^\>]+$/, '') // chop last
}

/**
 * @return this
 */
Scrap.prototype.render = function (context, index) {
  // dont render invisibles
  if (this.values.tag && this.values.tag.match(/title|script|meta/))
    return this
  
  if (this.values.tag === 'head') {
    if (this.values.scraps) {
      this.values.scraps.each(function (key, value) {
        value.render(context)
      })
    }
    return this
  }
  
  var options = {draft : true}
  
  // Throw style tags into a div that we can easily empty
  if (this.values.tag && this.values.tag.match(/style|link/)) {
    this.setElementTag(context)
    this.setContent(context, options)
    $('#nudgepadStageHead').append(this.div.toHtml())
    return this
  }
  
  // Turn body tags into divs during the render stage
  if (this.values.tag && this.values.tag === 'body') {    
    this.setElementTag(context)
    this.setContent(context, options)
    this.setStyle(context)
//    this.div.addClass('scrap')
//    this.div.attr('path', this.getPath())
//    this.div.attr('selector', this.selector())
    this.div.tag = 'div'
    $('#nudgepadStageBody').append(this.div.toHtml())
    return this
  }
  
  // Remove the style, the html, and the script
  if (index)
    $(this.parentSelector()).insertAt(index, this.toHtml(context))
  else
    $(this.parentSelector()).append(this.toHtml(context))
  return this
}

Scrap.prototype.selector = function () {
  var selector = this.path.replace(/[^a-z0-9\-\.\_ ]/gi, '').replace(/ /g, '>#')
  if (!selector)
    return ''
  return '#nudgepadStageBody>#' + selector
}

/**
 * Returns the HTML for a scrap without CSS or Script.
 *
 * @param {object} Context to evaluate any variables in.
 * @return {string}
 */
Scrap.prototype.toHtml = function (context) {
  var options = {draft : true}
  this.setElementTag(context)
  this.setContent(context, options)
  this.setStyle(context)
  this.div.addClass('scrap')
  this.div.attr('path', this.getPath())
//  this.div.attr('page', Design.stage.activePage)
  this.div.attr('selector', this.selector())
  return this.div.toHtml()
}

Scrap.prototype.unlock = function () {
  
  if (!this.values.locked)
    return true
  
  this.delete('locked')
  $(this.selector()).removeClass('lockedScrap')
  return true
  
}

/** Event Handlers **/


/**
 * Prevent leaving of page when you click on blocks that are links
 * or links inside blocks
 *
 * @param {event}
 * @return false
 */
Scrap.disableLinks =  function (event) {
  event.preventDefault()
  return false
}


/**
 * Pop Advanced Handle on Hold
 *
 * @param {event}
 * @return false
 */
Scrap.selectOnTap =  function (event) {
  // blur any focused elements
  if (!$(this).is(':focus'))
    $(':focus').blur()


  // Hold meta key to nest something
  if (Mouse.down && Mouse.down.metaKey) {
    if (!$(this).hasClass('selection') && $('.selection').length) {
      Design.stage.selection.nest($(this).attr('path'))
      return false
    }
  }
  

  // If shift key is not down, clear selection first
  if (!Mouse.down || !Mouse.down.shiftKey)
    Design.stage.selection.clear()

  $(this).selectMe()

  // return false to not trigger default events
  return false
}

Scrap.unlock = function () {
  
  var scrap = $(this).scrap()
  
  // Unlock block on hold
  if (scrap.get('locked')) {
    scrap.unlock()
    Design.stage.commit()
  }
  
  $(this).selectMe()
  return false
}


nudgepad.on('main', function () {
  $(document).on('click', 'a.scrap, .scrap a, .scrap div', Scrap.disableLinks)
  $('#nudgepadStage').on("tap", ".scrap", Scrap.selectOnTap)
  
  $('body').on("hold", ".scrap", Scrap.unlock)
  
  // When editing input blocks, prevent them from taking focus
  $(document).on('mousedown click','input.scrap,textarea.scrap', function (){
    return false
  })
  $(document).on('focus', 'input.scrap,textarea.scrap', function (e) {$(this).blur()})
  
})



;/**
 * @special Singleton
 */
Design.stage.selection = {}
Design.stage.selection.saved = []

Design.stage.selection.alignLeft = function () {
  var edge
  $('.selection').each(function () {
    if (!edge || $(this).position().left < edge)
      edge = $(this).position().left
  })
  Design.stage.selection.css('left ' + edge + 'px')
}

Design.stage.selection.alignRight = function () {
  var edge
  $('.selection').each(function () {
    if (!edge || $(this).position().left > edge)
      edge = $(this).position().left
  })
  Design.stage.selection.css('left ' + edge + 'px')
}

Design.stage.selection.alignTop = function () {
  var edge
  $('.selection').each(function () {
    if (!edge || $(this).position().top < edge)
      edge = $(this).position().top
  })
  Design.stage.selection.css('top ' + edge + 'px')
}

Design.stage.selection.alignBottom = function () {
  var edge
  $('.selection').each(function () {
    if (!edge || $(this).position().top > edge)
      edge = $(this).position().top
  })
  Design.stage.selection.css('top ' + edge + 'px')
}

/**
 * Change the box shadow of selected blocks.
 *
 * @param {number}
 */
Design.stage.selection.boxShadow = function (blur) {
  $('.selection').each(function () {
    var scrap = $(this).scrap()
    if(blur < 1){
      scrap.set('style box-shadow', 'none')
      $(this).css( 'box-shadow', 'none')
    }
    else{
      scrap.set('style box-shadow', '0px 1px ' + blur + 'px' + ' #888')
      $(this).css( 'box-shadow', '0px 1px ' + blur + 'px' + ' #888')
    }
  })
}

Design.stage.selection.capture = function () {
  Design.stage.selection.captured = Design.stage.selection.toSpace()
}


/**
 * Deselect all blocks
 */
Design.stage.selection.clear = function () {
  $('.selection').each(function () {
    $(this).deselect()
  })
  
}

/**
 * Execute a CSS command against the selected blocks such as color red.
 * Commits the change.
 *
 * @param {string}
 */
Design.stage.selection.css = function (command) {
  Design.stage.selection.cssPreview(command)
  Design.stage.commit()
  $('.handle').trigger('update')
}

/**
 * Execute a CSS command against the selected blocks such as color red
 *
 * @param {string}
 */
Design.stage.selection.cssPreview = function (command) {
  if (!command)
    return false
  command = new Space(command)
  // command like: background blue

//  command = command.split(/ /)
//  var property = command.shift()
//  var value = command.join(' ')
  $('.selection').each(function () {
    var style = $(this).scrap().get('style')
    if (!style) {
      $(this).scrap().set('style', new Space())
      style = $(this).scrap().get('style')
    }
    style.patch(command)
    $(this).css(command.values)
  })
}

Design.stage.selection.cssPrompt = function () {
  var val = prompt('Enter a CSS command like font-family Arial', '')
  if (val)
    Design.stage.selection.css(val)
}

Design.stage.selection.distributeVertical = function () {
  
  var elements = _.sortBy($('.selection'), function(element){ return $(element).position().top })
  
  // calculate total whitespace.
  var whitespace = 0
  var count = 0
  _.each(elements, function (element, index, list) {
    if (index === 0)
      return true
    var last = list[index - 1]
    var id = $(element).attr('id')
    // The space betweein
    whitespace += $(element).position().top - ($(last).position().top + $(last).outerHeight())
    count++
  })
  var theSpaceBetween = Math.floor(whitespace/count)
  if (theSpaceBetween < 0) theSpaceBetween = 0
  
  _.each(elements, function (element, index, list) {
    if (index === 0)
      return true
    var last = list[index - 1]
    var scrap = $(element).scrap()
    scrap.set('style top', (($(last).position().top + $(last).outerHeight()) + theSpaceBetween) + 'px')
    $(element).css('top', scrap.get('style top'))
  })
  $('.handle').trigger('update')
  Design.stage.commit()
}

Design.stage.selection.distributeHorizontal = function () {
  // this function is currently 3N ish. But that should be fine. But we
  // could clearly make it faster if it feels slow.
  
  var elements = _.sortBy($('.selection'), function(element){ return $(element).position().left })
  
  // calculate total whitespace.
  var whitespace = 0
  var count = 0
  _.each(elements, function (element, index, list) {
    if (index === 0)
      return true
    var last = list[index - 1]
    var id = $(element).attr('id')
    // The space betweein
    whitespace += $(element).position().left - ($(last).position().left + $(last).outerWidth())
    count++
  })
  var theSpaceBetween = Math.floor(whitespace/count)
  if (theSpaceBetween < 0) theSpaceBetween = 0
  
  _.each(elements, function (element, index, list) {
    if (index === 0)
      return true
    var last = list[index - 1]
    var scrap = $(element).scrap()
    scrap.set('style left', ($(last).position().left + $(last).outerWidth() + theSpaceBetween) + 'px')
    $(element).css('left', scrap.get('style left'))
  })
  $('.handle').trigger('update')
  Design.stage.commit()
  Flasher.flash('Distributed', 1000)
}

/**
 * Duplicate the selected blocks. Offset them to the right.
 */
Design.stage.selection.duplicate = function () {
  $('.selection').each(function () {
    $(this).duplicate()
  })
  Design.stage.commit()
//  return Design.stage.insert(Design.stage.selection.toSpace(), false, 10, 10, false)
}

Design.stage.selection.editLoop = function () {
  
  var property = prompt('What property do you want to edit?')
  if (!property)
    return false
  
  var todo = $('.selection').length
  $('.selection').each(function (index) {
    
    var scrap = $(this).scrap()
    $(this).addClass('nudgepadHighlightedScrap')
    // If its offscreen, scroll to bring it fully on screen.
    $(this).scrollMinimal()
    var value = scrap.get(property)
  
    var newValue = prompt('Set ' + property + ' of ' + id + ' to', value)
    
    
    if (!newValue) {
      return true
    }
    
    // If they didnt change name continue
    if (newValue == value) {
      $(this).removeClass('nudgepadHighlightedScrap')
      return true
    } 
    $(this).removeClass('nudgepadHighlightedScrap')
    
    scrap.set(property, newValue)
    scrap.render()
    
  })
  Design.stage.commit()
}

Design.stage.selection.editProperty = function () {
  
  var scrap = $('.selection').scrap()
  
  var prop = prompt('What property do you want to edit?', '')
  if (!prop)
    return false
  
  var value = scrap.get(prop)
  TextPrompt('Enter new value...', value.toString(), function (val) {
      scrap.set(prop, val)
      Design.stage.commit()
      Design.stage.open(Design.stage.activePage)
  })
}

/**
 * Advances position_index, advanced position.
 */
Design.stage.selection.editSource = function () {
  Design.stage.selection.capture()
  Design.stage.selection.save()
  TextPrompt('Enter code...', Design.stage.selection.captured.toString(), Design.stage.selection.modify)
}

/**
 * Return boolean
 */
Design.stage.selection.exists = function () {
  return $('.selection').length
}

Design.stage.selection.modify = function (val) {
  var space = new Space(val)
  Design.page.patch(Design.stage.selection.captured.diff(space))
  Design.stage.commit()
  Design.stage.open(Design.stage.activePage)
  Design.stage.selection.restore()
}

/**
 * Move the selected blocks.
 *
 * @param {number} Number of pixels to move x (positive is right)
 * @param {number} Number of pixels to move y (positive is down)
 */
Design.stage.selection.move = function (x, y) {
  
  if (!$('.selection').length)
    return false
  
  $('.selection').each(function () {
    $(this).scrap().move(x, y)
  })
  
  // Show dimensions
  var el = $($('.selection')[0])
  var position = 'X ' + parseFloat(el.css('left')) + '<br>Y ' + parseFloat(el.css('top'))
  $('#nudgepadDimensions').css({
    left : 10 + el.offset().left + el.outerWidth(),
    top : -10 + el.offset().top + Math.round(el.outerHeight()/2)
    }).html(position)
  Popup.open('#nudgepadDimensions')
  
  $('.handle').trigger("update")
  Design.stage.commit()
}

Design.stage.selection.nest = function (path) {
  var parent = Design.page.get(path)
  if (!parent)
    return false
  if (!parent.get('scraps'))
    parent.set('scraps', new Space())
  parent = parent.get('scraps')
  var patch = Design.stage.selection.toSpace()
  Design.stage.selection.remove()
  
  // update the patch so there is no overwriting
  patch.each(function (key, value) {
    if (parent.get(key)) {
      this.rename(key, parent.autokey(key))
    }
  })
  
  parent.patch(patch)
  Design.stage.commit()
  Design.stage.open(Design.stage.activePage)
}

/**
 * Apply a patch to all selected scraps
 *
 * @param {Space} The patch
 */
Design.stage.selection.patch = function (space) {

  if (typeof space === 'string')
    space = new Space(space)

  $('.selection').each(function () {
    var scrap = $(this).scrap()
    $(this).deselect()
    scrap.patch(space)
    $(this).replaceWith(scrap.toHtml())
    scrap.element().selectMe()
  })
  Design.stage.commit()
}

Design.stage.selection.patchPrompt = function () {
  var val = prompt('Enter a patch like content hi', '')
  if (val)
    Design.stage.selection.patch(val)
}

/**
 * Delete the selected blocks
 */
Design.stage.selection.remove = function () {
  $('.selection').each(function () {
    // order probably matters here
    // should we move deselect and select to jquery level? i think we probably should
    var scrap = $(this).scrap()
    $(this).deselect().remove()
    if (scrap)
      Design.page.delete(scrap.getPath())
  })
}

Design.stage.selection.renameScraps = function () {
  var todo = $('.selection').length
  $('.selection').each(function (index) {
    var scrap = $(this).scrap()
    $(this).addClass('nudgepadHighlightedScrap')
    
    // If its offscreen, scroll to bring it fully on screen.
    $(this).scrollMinimal()
    
    var newId = prompt('Renaming block ' + (index + 1) + '/' + todo + '. Enter a new ID', scrap.id)
    
    // If they didnt change name continue
    if (newId == scrap.id) {
      $(this).removeClass('nudgepadHighlightedScrap')
      return true
    }
      
    
    if (!newId) {
      return true
    }
    
    var newScrap = new Scrap(newId, scrap.toString())
    Design.page.set(newId, newScrap)
    
    $(this).deselect().remove()
    Design.page.delete(scrap.getPath())
    
    
    newScrap.render()
    newScrap.element().selectMe()
    
  })
  Design.stage.commit()
}

/**
 * Restore the saved selection
 */
Design.stage.selection.restore = function () {
  for (var i in Design.stage.selection.saved) {
    var selector = Design.stage.selection.saved[i]
    if ($(selector).length)
      $(selector).selectMe()
  }
}

/**
 * Save the current selection
 */
Design.stage.selection.save = function () {
  Design.stage.selection.saved = []
  $('.selection').each(function () {
    Design.stage.selection.saved.push($(this).scrap().selector())
  })
}

/**
 * Get all selected blocks as a Space.
 *
 * @return {string}
 */
Design.stage.selection.toSpace = function () {
  var space = new Space()
  $('.selection').each(function () {
    var scrap = $(this).scrap()
    space.set(scrap.getPath(), new Space(scrap.toString()))
  })
  return space
}

nudgepad.broadcastSelection = function (extra) {
  nudgepad.setTabColor()
  var selection = extra || ''
  var first = ''
  $('.selection').each(function () {
    if ($(this).scrap()) {
      selection += first + $(this).scrap().selector()
      first = ','
    }
  })

  selection += '{box-shadow: 0 0 4px ' + Tab.get('color') + ';cursor: not-allowed;}'
  Tab.patch('selection ' + selection)
  
}

nudgepad.updateSelections = function () {
  $('#nudgepadRemoteSelections').html('')
  site.values.collage.each(function (key, value) {
    if (key == nudgepad.id)
      return true
    if (value.get('page') !== Design.stage.activePage)
      return true
    var style = value.get('selection')
    if (style)
      $('#nudgepadRemoteSelections').append(style)
  })
}

nudgepad.on('selection', nudgepad.broadcastSelection)

nudgepad.on('collage.update', nudgepad.updateSelections)


;/**
 * Launches the spotlight page picker
 */
Design.spotlight = function () {
  
  var name = prompt('Enter the name of the page to open...', '')
  if (name)
    Design.stage.open(name)
}
;/**
 * The Stage holds the current open page.
 * We do a frame so the ribbon doesnt overlap the work area.
 * Its not actually a frame though, just a div with scroll.
 */
Design.stage.version = 0 // how many steps in we are
Design.stage.percentElapsed = 100

/**
 * Open the previous page
 */
Design.stage.back = function () {
  Design.stage.open(site.get('pages').prev(Design.stage.activePage))
}

/**
 * Generates a Space of the change and posts it to the server.
 *
 * @return {string} todo: why return a string?
 */
Design.stage.commit = function () {
  
  var timestamp = new Date().getTime()
  
  // You are always committing against the edge.
  var diff = Design.edge.diff(Design.page)
  var diffOrder = Design.edge.diffOrder(Design.page)

  if (diff.isEmpty() && diffOrder.isEmpty()) {
    console.log('no change')
    return false
  }
  var commit = new Space()
  commit.set('author', nudgepad.cookie.email)
  if (!diff.isEmpty())
    commit.set('values', new Space(diff.toString()))
  if (!diffOrder.isEmpty())
    commit.set('order', new Space(diffOrder.toString()))

  Design.stage.timeline.set(timestamp, commit)
  Design.edge = new Space(Design.page.toString())
  
  // A commit always advances the position index to the edge.
  Design.stage.version = Design.stage.timeline.keys.length
  
  Design.stage.updateTimeline()
  
  nudgepad.trigger('selection')
  
  // Send Commit to Server
  var patch = new Space()
  patch.set('timelines ' + Design.stage.activePage + ' ' + timestamp, commit)
  site.set('pages ' + Design.stage.activePage, new Space(Design.page.toString()))

//  Flasher.flash('Saved')
  nudgepad.emit('commit', patch.toString())
  return diff
}

Design.stage.dragAndDrop = function (scrap) {
  
  if (typeof scrap === 'string')
    scrap = new Space(scrap)
  
  var halfWidth = 0
  var halfHeight = 0
  var height = scrap.get('head style html height')
  var width = scrap.get('head style html height')
  if (!height || !width) {
    var dimensions = Design.getPageDimensions(scrap)
    // temp fix for sticky
    if (isNaN(dimensions.width)) {
      dimensions.width = 140
      dimensions.height = 100
    }
    width = dimensions.width
    height = dimensions.height
  }
  width = parseFloat(width)
  height = parseFloat(height)
  var halfWidth = Math.round(width/2)
  var halfHeight = Math.round(height/2)

  var pageLeft = $('#nudgepadStageBody').offset().left
  var bodyScroll = $('#nudgepadStage').scrollTop()
  
  var left = Mouse.move.pageX - pageLeft - halfWidth
  var y = Mouse.move.pageY - halfHeight + bodyScroll

  Design.stage.insert(scrap, true, left, y)
}

/**
 * Advances position_index, advanced position.
 */
Design.stage.editSource = function () {
  TextPrompt('Enter code...', Design.page.toString(), function (val) {
    Design.page = new Space(val)
    Design.stage.commit()
    Design.stage.open(Design.stage.activePage)
  })
}

/**
 * Deletes all scraps from the page and DOM.
 */
Design.stage.erase = function () {
  Design.stage.selectAll()
  Design.stage.selection.remove()
  Design.stage.commit()
}

/**
 * Open the next page
 */
Design.stage.forward = function () {
  Design.stage.open(site.get('pages').next(Design.stage.activePage))
}

Design.stage.goto = function (version) {
  Design.stage.selection.save()
  Design.stage.selection.clear()
  if (version < 0)
    return false
  if (version > Design.stage.timeline.keys.length)
    return false
  
  // If we are going back in time, start from 0
  if (Design.stage.version > version) {
    Design.page = new Page()
    Design.stage.version = 0
  }
  for (var i = Design.stage.version; i < version; i++) {
    var timestamp = Design.stage.timeline.keys[i]
    var patch = Design.stage.timeline.values[timestamp].values.values
    var orderPatch = Design.stage.timeline.values[timestamp].values.order
    if (patch)
      Design.page.patch(patch.toString())
    if (orderPatch)
      Design.page.patchOrder(orderPatch.toString())
    Design.stage.version++
  }
  // Todo: fire an event and have timeline subscribe to that event.
  Design.stage.updateTimeline()
  Design.stage.render()
  Design.stage.selection.restore()
  nudgepad.trigger('stage')
}

Design.stage.height = function () {
  return $(window).height() - $('#nudgepadDesignBar').outerHeight()
}

Design.stage.insertBody = function () {
  if (!Design.page.get('body')) {
    Design.page.set('body', new Scrap('body', 'tag body\nscraps\n'))
    Design.page.get('body').render()
  }
  if (!Design.page.get('body scraps'))
    Design.page.set('body scraps', new Space())
//    Design.page.set('body scraps', new Space())
//    level = Design.page.get('body scraps')
}

/**
 * Creates new scraps, commits them and adds them to DOM.
 *
 * @param {Space}  An optional space to initialize the scrap with.
 * @return {string} IDs of the new scraps
 */
Design.stage.insert = function (space, drag, xMove, yMove, center) {
  
  if (!space)
    space = 'scrap\n content Hello world\n style\n  position absolute\n  top 10px\n  left 10px'
    
  // temporary fix for the revised scraps
  var patch = new Space(space.toString())
  Design.stage.selection.clear()
  
  Design.stage.insertBody()
  var level = Design.page.get('body scraps')
  
  
  // update the patch so there is no overwriting
  patch.each(function (key, value) {
    if (level.get(key)) {
      this.rename(key, level.autokey(key))
    }
  })
  // now merge stage
  level.patch(patch)
  var selectors = []
  patch.each(function (key, value) {
    level.values[key] = new Scrap('body ' + key, value)
    var element = level.values[key].render().element()
    // Some elemeents arenet seleectable (titles, for example)
    if (element.length) {
      element.selectMe()
      selectors.push(level.values[key].selector())
    }
  })
  
  if (center) {
    var selection_dimensions = $('.selection').dimensions()
    xMove = Math.round(($('#nudgepadStageBody').width() / 2) - selection_dimensions.width/2)
    yMove = Math.round(Design.stage.scrollTop() + ($(window).height() / 2) - selection_dimensions.height/2)
  }
  
  if (xMove || yMove) {
    $('.selection').each(function () {
      $(this).scrap().move(xMove, yMove)
    })
  }
  
  $('.handle').trigger('update')
  
  if (drag) {
    var name = $('.selection').attr('id')
    // Pretend the mousedown was on the move handle
    Events.slide.target = $("#move_handle_" + name)
    $("#move_handle_" + name).triggerHandler("mousedown")
    $("#move_handle_" + name).triggerHandler("slidestart")
    
    
    $('.selection').each(function () {
      var subject = $(this)
      var ghost = subject.clone()
      var opacity = subject.css('opacity')
      var scrap = $(this).scrap()
      subject.css('opacity', '0.01')
      ghost.attr('id', 'nudgepad_move_ghost').removeClass('scrap selection')
      ghost.on('mousedown', function () {subject.remove()})
      // space.style
      ghost.css('font-family', $('#nudgepadStageBody').css('font-family'))
      if (scrap.values.style)
        ghost.css(scrap.values.style.values)
      ghost.css({
        'z-index' : '600',
        'position' : 'fixed',
        'top' : subject.offset().top,
        'left' : subject.offset().left
      })
      $("#move_handle_" + name).on("slide", function (event) {
        ghost.css({
          'top' : subject.offset().top,
          'left' : subject.offset().left
        })
      })
      $("#move_handle_" + name).on("slideend", function (event) {
        subject.css('opacity', opacity)
        ghost.remove()
      })
      $('body').append(ghost)
      
    })
    
    
  } else {
    Design.stage.commit()  
  }
  
  return selectors
}

/**
 * Is the head behind edge?
 * @returns {bool}
 */
Design.stage.isBehind = function () {
  return (Design.stage.version < Design.stage.timeline.keys.length)
}

/**
 * @param {string} Name of page
 */
Design.stage.open = function (name) {
  
  var page = site.get('pages ' + name)
  if (!page)
    return nudgepad.error('Page ' + name + ' not found')

  Design.stage.selection.clear()
  
  // Page change stuff
  Design.stage.activePage = name
  store.set('activePage', Design.stage.activePage)
  Tab.patch('page ' + Design.stage.activePage)
  Design.updateTabs()
  
  Design.stage.reload()
  Design.stage.render()
  Design.stage.updateTimeline()
  
  nudgepad.trigger('selection')
  
  return ''
  
}

Design.stage.redo = function () {
  Design.stage.goto(Design.stage.version + 1)
}

/**
 * Refresh the stage.
 */
Design.stage.render = function () {
  $('#nudgepadStageHead').html('')
  $('#nudgepadRemoteSelections').html('')
  $(".scrap,#body").remove()
  Design.page.loadScraps()
  Design.page.render()
  Design.grid.create()
  nudgepad.updateSelections()
}

Design.stage.reload = function () {
  var name = Design.stage.activePage
  var page = site.get('pages ' + name)
  Design.edge = page
  Design.page = new Page(page.toString())
  
  // if no timeline, create a blank one
  // todo: think harder about what the hell this will do
  // If no timeline, but yes edge, make the edge the first commit
  // i dont like this
  Design.stage.setTimeline(name)
  Design.stage.version = Design.stage.timeline.keys.length
  
}

Design.stage.reset = function () {
  $('#nudgepadStage').height($(window).height() - 40)
}

Design.stage.ribbonClose = function () {
  $('#nudgepadStage').height($(window).height() - 40)
}

Design.stage.ribbonOpen = function () {
  $('#nudgepadStage').height($(window).height() - 122)
}

/**
 * Returns scroll top of the frame.
 */
Design.stage.scrollTop = function () {
  return $('#nudgepadStage').scrollTop()
}

/**
 * Selects all blocks
 */
Design.stage.selectAll = function () {
  $('.scrap').each(function () {
    $(this).selectMe()
  })
}

/**
 * @return {object} Pointer to timeline object
 */
Design.stage.setTimeline = function (name) {
  
  if (site.get('timelines ' + name)) {
    Design.stage.timeline = site.get('timelines ' + name)
    return true
  }
  
  var request = $.ajax({
    type: "GET",
    url: '/nudgepad.site.timelines.' + name,
    async: false,
  })
  
  request.done(function (msg) {
    site.set('timelines ' + name, new Space(msg))
  })
  
  request.fail(function () {
    
    var edge = site.get('pages ' + name)
    var timeline = new Space()
    // If no timeline, but yes edge, make the edge the first commit
    if (edge && !edge.isEmpty()) {
      
      var commit = new Space()
      commit.set('author', nudgepad.cookie.email)
      commit.set('values', new Space(edge.toString()))
    }
    

    site.set('timelines ' + name, timeline  )
    var patch = new Space()
    patch.set('timelines ' + name, timeline)
    nudgepad.emit('patch', patch.toString())
    Flasher.flash('Timeline created')
    
    
  })
  
  Design.stage.timeline = site.get('timelines ' + name)
  
}

var stageViews = new Space({
  'full' : function () {
    $('#nudgepadStage').css({
      width : '100%',
      padding : 0
    })
    $('#nudgepadStageBody').css({
      'height' : '100%',
      'min-height' : '1000px'
    })
  },
  'ipad' : function (){
    var padding = Math.round(($(window).width() - 1024)/2) + 'px'
    $('#nudgepadStage').css({
      width : '1024px',
      padding : '20px ' + padding + ' 1000px ' + padding,
    })
    $('#nudgepadStageBody').css({
      'height' : '100%',
      'min-height' : '768px'
    })
  },
  'ios' : function (){
    var padding = Math.round(($(window).width() - 320)/2) + 'px'
    $('#nudgepadStage').css({
      padding : '20px ' + padding + ' 20px ' + padding,
      width: '320px'
    })
    $('#nudgepadStageBody').css({
      'height' : '356px'
    })
  }
})

Design.stage.currentView = 'ipad'

Design.stage.toggleView = function () {
  
  Design.stage.currentView = stageViews.next(Design.stage.currentView)
  stageViews.get(Design.stage.currentView)()
  $('#nudgepadStageBody').width()
  Flasher.flash(Design.stage.currentView + ' view')
}

Design.stage.undo = function () {
  Design.stage.goto(Design.stage.version - 1)
}

Design.stage.updateTimeline = function () {
  // Set the history slider to the wherever the worker last had it (usally 100 if no history or havent edited it yet)
  Design.stage.percentElapsed = (Design.stage.timeline.keys.length ? Math.round(100 * Design.stage.version/Design.stage.timeline.keys.length) : 100)
  $('#nudgepadTimeline').attr('max', Design.stage.timeline.keys.length).val(Design.stage.version)
  $('#nudgepadTimelinePosition').text(Design.stage.version + '/' + Design.stage.timeline.keys.length)
}

nudgepad.on('main', function () {
  
  stageViews.get('ipad')()
  $('#nudgepadStageBody').width()
  
  
  
  
  /*
  $("#nudgepadStage").on('rendered', function (event, id) {
    if (Design.page[id].locked)
      $('.scrap#' + id).addClass('lockedScrap')
  })
  */

  $("#nudgepadStage").on("tap", function (event) {
    Design.stage.selection.clear()
    return true
  })

  $(window).on('resize', function () {
    stageViews.get(Design.stage.currentView)()
    $('#nudgepadStageBody').width()
    if ($('#nudgepadRibbon:visible').length)
      $('#nudgepadStage').height($(window).height() - 122)
    else 
      $('#nudgepadStage').height($(window).height() - 40)
  })

  Design.stage.reset()

})

;/**
 * Stretch handles can change the width/height and x/y of the scraps.
 */
nudgepad.StretchHandle = function () {
}

/**
 * @param {string}
 * @param {string}
 * @param {string}
 */
nudgepad.StretchHandle.create = function (scrap, row, column, fixed) {
  
  var element = scrap.element()
  var position = (element.css('position') == 'fixed' ? 'fixed' : 'absolute')
  
  var cursor = (row == "top" ? "n" : (row == "bottom" ? 's' : '')) +
               (column == "left" ? "w" : (column == "right" ? 'e' : ''))
  var div = $('<div></div>')
  div.attr('value', scrap.getPath())
  div.addClass('handle stretch_handle stretch_handle_' + scrap.id + ' ' + scrap.id + '_handle')
  div.attr('id', 'stretch_handle_' + row + column + scrap.id)
  div.css({
    "cursor" : cursor + "-resize",
    "position" : position,
    "width" : '5px',
    "height" : '5px',
    'border' : '1px solid rgba(0, 0, 0, .5)',
    'background-color' : 'rgba(255, 255, 255, 0.5)',
    "z-index" : "50"
  })
  div.data("row", row)
  div.data("column", column)
  if (fixed)
    div.data("fixed", true)
  element.parent().append(div)
  div.on("mousedown", nudgepad.StretchHandle.mousedown)
  div.on("slide", nudgepad.StretchHandle.slide)
  div.on("slidestart", nudgepad.StretchHandle.slidestart)
  div.on("slideend", nudgepad.StretchHandle.slideend)
  div.on("tap", nudgepad.StretchHandle.tap)
  div.on("update", nudgepad.StretchHandle.update)
  div.on("dblclick", nudgepad.StretchHandle.dblclick)
  div.trigger("update")
}

/**
 * We cache the start dimensions
 */
nudgepad.StretchHandle.dimensions = {}

/**
 * If small scrap is on top of (higher z-index) a bigger scrap, selects small scrap
 */
nudgepad.StretchHandle.mousedown = function () {
  nudgepad.StretchHandle.dimensions = $(this).owner().dimensions()
  var scrap = $(this).owner().scrap()
  nudgepad.StretchHandle.originalWidth = parseFloat(scrap.get('style width'))
  nudgepad.StretchHandle.originalHeight = parseFloat(scrap.get('style height'))
  Design.grid.create()
}

/**
 * Changes the width/height/top/left of the active div.
 *
 * @return false. Don't propagate.
 * todo: rotate vector if fixed.
 */
nudgepad.StretchHandle.slide = function () {

  var owner = $(this).owner(),
      row = $(this).data().row,
      column = $(this).data().column,
      fixed = $(this).data().fixed,
      x0, // x origin
      y0  // y origin
  
  if (column === 'left')
    x0 = nudgepad.StretchHandle.dimensions.right
  else if (column === 'right')
    x0 = nudgepad.StretchHandle.dimensions.left
  else
    x0 = nudgepad.StretchHandle.dimensions.center
  
  if (row === 'top')
    y0 = nudgepad.StretchHandle.dimensions.bottom
  else if (row === 'bottom')
    y0 = nudgepad.StretchHandle.dimensions.top
  else
    y0 = nudgepad.StretchHandle.dimensions.middle
  
  var x1 = Mouse.move.pageX - $(this).parent().offset().left // + scroll left
  var y1 = Mouse.move.pageY - $(this).parent().offset().top// Design.stage.scrollTop()// + scroll top
//  console.log(x1)
  
  // todo: fix bug where offset changes
  
  var length = nudgepad.StretchHandle.getLength(x0, y0, x1, y1,
    // Dont snap Y if we are only changing X, and vice versa
    column != 'center', row != 'middle')
  
  // Get the scrap we are stretching
  var scrap = owner.scrap()
  
  /*----- Scrap changes ----*/
  
  if (column != 'center') {
    // If the length is positive, keep the origin as the top/left value
    scrap.set('style left', (length.x >= 0 ? x0 : length.x + x0) + 'px')
    // Compute and extra_width (padding, border width, etc)
    var extra_width = owner.outerWidth() - owner.width()
    // Set the width & height to the abs value of the length
    scrap.set('style width', Math.abs(length.x) - extra_width + "px")
  }
  
  // If fixed, we take the change from the left to right for now.
  if (fixed) {
    var change = parseFloat(scrap.get('style width')) / nudgepad.StretchHandle.originalWidth
    scrap.set('style height', Math.round(nudgepad.StretchHandle.originalHeight * change) + 'px')
  }
  
  
  else if (row != 'middle') {
    if (length.y >= 0) {
      scrap.set('style top', y0 + 'px')
    } else {
      scrap.set('style top', length.y + y0 +  'px')
    }
    var extra_height = owner.outerHeight(true) - owner.height()
    scrap.set('style height', Math.abs(length.y) - extra_height + "px")
  }
  
  /*----- Dom changes ----*/
  
  // Apply the style to the dom element
  owner.css(scrap.values.style.values)
  
  // Draw the dimensions.
  var position = 'W ' + parseFloat(owner.css('width')) + '<br> H ' + parseFloat(owner.css('height'))
  $('#nudgepadDimensions').css({
    left : 10 + owner.offset().left + owner.outerWidth(),
    top : -10 + owner.offset().top + Math.round(owner.outerHeight(true)/2)
    }).html(position)
  
  // Reposition stretch handles
  $('.stretch_handle_' + scrap.id).trigger('update')
  return false
  
}

/**
 * Hide all other handles on this scrap on slidestart.
 */
nudgepad.StretchHandle.slidestart = function (event) {
  var owner = $(this).owner()
  var scrap = owner.scrap()
  $('.' + scrap.id + '_handle').not('.stretch_handle_' + scrap.id).hide()
  

  var position = 'W ' + parseFloat(owner.css('width')) + '<br> H ' + parseFloat(owner.css('height'))
  $('#nudgepadDimensions').css({
    left : 10 + owner.offset().left + owner.outerWidth(),
    top : -10 + owner.offset().top + Math.round(owner.outerHeight(true)/2)
    }).html(position).show()
  
  return false
}


nudgepad.StretchHandle.dblclick = function () {
  
  var owner = $(this).owner(),
      row = $(this).data().row,
      column = $(this).data().column
  
  // Get the scrap we are stretching
  var scrap = owner.scrap()
  
  if (column === 'right')
    scrap.set('style width', '100%')
  if (column === 'left')
    scrap.set('style left', '0')
  if (row === 'top')
    scrap.set('style top', '0')
  if (row === 'bottom')
    scrap.set('style height', '100%')

  // Apply the style to the dom element
  owner.css(scrap.values.style.values)
  $('.' + scrap.id + '_handle').trigger('update').show()
  Design.stage.commit()
}

/**
 * Show all handles that were hidden. Update the grid and commit the change.
 */
nudgepad.StretchHandle.slideend = function () {
  var element = $(this).owner()
  var scrap = element.scrap()
  $('.' + scrap.id + '_handle').trigger('update').show()
  Design.grid.removeSnaplines()
  $('#nudgepadDimensions').hide()
  Design.stage.commit()
}

/**
 * We simply return the length from the origin on a 2D grid. If X is initial handle position, then
 * O is origin, and H is the current mouse position. We return the length of OH
 * which is determined by where H is, with any snapped grid lin
 *
 *      O--------X-----H
 *
 * @param {number} The top or left position of the handle OPPOSITE the one the worker grabbed
 * @param {string} Whether this is a vertical or horizontal change.
 * @returns {object} Such as length.x, length.y
 */
nudgepad.StretchHandle.getLength = function (x0, y0, x1, y1, x_snap, y_snap) {
  var length = { x : x1 - x0, y: y1 - y0}
  
  var grid_change = Design.grid.getDelta([
     {x : x1, y : y1}
  ])
  
  if (x_snap)
    length.x += grid_change.x
  if (y_snap)
    length.y += grid_change.y
  return length
}

/**
 * Don't propagate tap events on these sliders.
 */
nudgepad.StretchHandle.tap = function () {
  return false
}

/**
 * Reposition the sliders.
 */
nudgepad.StretchHandle.update = function () {
  var element = $(this).owner()
  var left,
      _top,
      row = $(this).data().row,
      column = $(this).data().column
  
  switch (row) {
    case "top":
      _top = element.position().top - 4
    break;
    case "middle":
      _top = element.position().top + Math.round(element.outerHeight(true)/2) - 4
    break;
    case "bottom":
      _top = element.position().top + element.outerHeight(true) - 4
    break;
  }
  switch (column) {
    case "left":
      left = element.position().left - 4
    break;
    case "center":
      left = element.position().left + Math.round(element.outerWidth()/2) - 4
    break;
    case "right":
      left = element.position().left + element.outerWidth() - 4
    break;
  }

  $(this).css({
    left : left,
    'top' : _top
  })
}
;nudgepad.livePreviewScrap = false
nudgepad.livePreviewTimeout = false
nudgepad.livePreviewStart = function () {
  clearTimeout(nudgepad.livePreviewTimeout)
  nudgepad.livePreviewTimeout = setTimeout('nudgepad.livePreview()', 500)
}
nudgepad.livePreview = function () {
  var text_area = $('#nudgepadStyleEditorCssEditor')
  var scrap = nudgepad.livePreviewScrap
  scrap.set('style', new Space(text_area.val()))
  scrap.element().attr('style', '').css(scrap.get('style').values)
}

/**
 * Prompt the worker for input. Pops a modal.
 */
nudgepad.styleEditor = function (scrap) {
  
  $('.handle').remove()
  
  // Insert Modal
  var modal_screen = $('<div id="nudgepadStyleEditorModal" class="nudgepad"/>')
  modal_screen.on('tap mousedown click slide slidestart slideend mouseup', function (event) {
    event.stopPropagation()
  })
  modal_screen.on('click', function () {
    save_button.trigger('click')
  })
  $('body').append(modal_screen)
  
  var element = scrap.element()
  
  // Create styleEditor div
  // width 295px
  // height 320px
  var styleEditor = $('<div id="nudgepadStyleEditor" class="nudgepad"></div>')
  
  styleEditor.css({
    "left" : element.offset().left + 2 + "px",
    "top" : element.offset().top + element.outerHeight() + 4 + "px"
  })
  
  // Insert top bar
  var top_edit_bar = $('<div id="nudgepadStyleEditorTopBar"></div>')
  styleEditor.append(top_edit_bar)
  
  // Style tool
  var styleTool = $('<div class="editorOption selectedEditorOption">Block</div>')
  styleTool.on('tap', function () {
    $('div').removeClass('selectedEditorOption')
    $(this).addClass('selectedEditorOption')
    text_area.hide()
    textEditorContainer.hide()
    styleEditorContainer.show()
    return false
  })
  top_edit_bar.append(styleTool)
  
  // Text tool
  var textTool = $('<div class="editorOption">Text</div>')
  textTool.on('tap', function () {
    $('div').removeClass('selectedEditorOption')
    $(this).addClass('selectedEditorOption')
    styleEditorContainer.hide()
    text_area.hide()
    if (scrap.get('style'))
      text_area.val(scrap.get('style'))
    textEditorContainer.show()
    return false
  })
  top_edit_bar.append(textTool)
  
  // Code tool
  var codeTool = $('<div class="editorOption">Code</div>')
  codeTool.on('tap', function () {
    $('div').removeClass('selectedEditorOption')
    $(this).addClass('selectedEditorOption')
    styleEditorContainer.hide()
    textEditorContainer.hide()
    if (scrap.get('style'))
      text_area.val(scrap.get('style'))
    text_area.show()
    return false
  })
  top_edit_bar.append(codeTool)
  
  // Style Editor Container
  var styleEditorContainer = $('<div id="blockContainer"></div>')
  styleEditor.append(styleEditorContainer)
  
  /*
   * Color Options
   */
   
   var currentColor = $('.selection').css('background-color');
   
   // Picker - Background Color
   var colorPicker = $('<div class="colorBackground"><input type="text" class="colorPicker"></div>')
   styleEditorContainer.append(colorPicker)
   
   // Duplicate
   var duplicate = $('<div class="editorButton"><img src="/nudgepad/public/images/dup_lt.png"></div>')
   duplicate.on("click", function(){
     Design.stage.selection.duplicate();
   })
   styleEditorContainer.append(duplicate)
   
   // Lock tool
   var lock = $('<div class="editorButton"><img src="/nudgepad/public/images/lock_lt.png"></div>')
   lock.on('tap', function () {
     Design.stage.selection.patch('locked true')
     save_button.trigger('click')
     return false
   })
   styleEditorContainer.append(lock)
   
   // Link Select/Dropdown
   var linkOptions = $('<select id="nudgepadLinkSelect"></select>')
   
   // Remove link or cancel
   var noLink = $('<option>No link</option>')
   noLink.on('click', function () {
     Design.stage.selection.patch('href ')
   })
   linkOptions.append(noLink)
   
   // Create a link to existing page
   _.each(site.values.pages.values, function (value, name) {
     var link = $('<option value="' + name + '">' + ToProperCase(name) + '</option>')
     link.on('click', function () {
       Design.stage.selection.patch('tag a\nhref ' + $(this).attr('value'))
     })
     linkOptions.append(link)
   })
   
   // Create a link to a new page that doesnt exist
   var newPageLink = $('<option>New Page</option>')
   newPageLink.on('click', function () {
     var linkUrl = prompt('Enter the name of your new page', Design.nextName(Design.stage.activePage))
     if (linkUrl) {
       linkUrl = Permalink(linkUrl)
       Design.stage.selection.patch('tag a\nhref ' + linkUrl)
       save_button.trigger('click')
       var currentPage = Design.stage.activePage
       Design.duplicate(null, linkUrl, true)
       Design.stage.open(currentPage)
     }
   })
   linkOptions.append(newPageLink)
  
   // Create a link to an external url
   var externalLink = $('<option>External Link</option>')
   externalLink.on('click', function () {
     var linkUrl = prompt('Enter the url to link to', 'http://')
     if (linkUrl)
       Design.stage.selection.patch('tag a\nhref ' + linkUrl)
   })
   linkOptions.append(externalLink)
   
   linkOptions.css({
      'display' : 'none',
      'position' : 'absolute',
      'z-index' : '100000'  
   })
   linkOptions.attr('size', linkOptions.find('option').length)
   linkOptions.on('click', function () {
     linkOptions.hide()
     return false
   })
   styleEditorContainer.append(linkOptions)

   // Link tool
   var link = $('<div class="editorButton"><img src="/nudgepad/public/images/link_lt.png"></div>')
   link.on('tap', function () {
     linkOptions.css({
       'left' : $(this).position().left,
       'top' : $(this).position().top
     })
     linkOptions.show()
     return false
   })
   styleEditorContainer.append(link)
   
   // Moveup tool
   var moveUp = $('<div class="editorButton"><img src="/nudgepad/public/images/up_lt.png" title="Increase z-index"></div>')
   moveUp.on('tap', function () {
     $('.selection').each(function () {
        $(this).scrap().moveUp()  
      })
     text_area.val(scrap.get('style'))
     return false
   })
   styleEditorContainer.append(moveUp)
   
   // Movedown tool
   var moveDown = $('<div class="editorButton"><img src="/nudgepad/public/images/down_lt.png" title="Decrease z-index"></div>')
   moveDown.on('tap', function () {
     $('.selection').each(function () {
       $(this).scrap().moveDown()  
     })
     text_area.val(scrap.get('style'))
     return false
   })
   styleEditorContainer.append(moveDown)
   
   // Clear
   var clear = $('<div class="clear"></div>')
   styleEditorContainer.append(clear)
  
  // Column - Left
  var columnLeft = $('<div class="columnLeft"></div>')
  styleEditorContainer.append(columnLeft)
  
  // Header - Roundness
  var headerRoundness = $('<div class="editorHeader">Curve</div>')
  columnLeft.append(headerRoundness)
  
  // Button - Roundness1
  var buttonRoundness1 = $('<div id="roundessOne" class="toolButton toolButtonOne">0</div>')
  buttonRoundness1.on('click', function () {
    Design.stage.selection.cssPreview('border-radius 0px 0px 0px 0px')
    Design.stage.commit()
    $('.handle').trigger('update')
    return false
  })
  columnLeft.append(buttonRoundness1)
  
  // Button - Roundness2
  var buttonRoundness2 = $('<div id="roundessTwo" class="toolButton toolButtonTwo">4</div>')
  buttonRoundness2.on('tap', function () {
    Design.stage.selection.cssPreview('border-radius 4px 4px 4px 4px')
    Design.stage.commit()
    $('.handle').trigger('update')
    return false
  })
  columnLeft.append(buttonRoundness2)
  
  // Button - Roundness2
  var buttonRoundness3 = $('<div class="toolButton toolButtonTwo">10</div>')
  buttonRoundness3.on('tap', function () {
    Design.stage.selection.cssPreview('border-radius 10px 10px 10px 10px')
    Design.stage.commit()
    $('.handle').trigger('update')
    return false
  })
  columnLeft.append(buttonRoundness3)
  
  // Button - Roundness3
  var buttonRoundness4 = $('<div class="toolButton toolButtonThree">50</div>')
  buttonRoundness4.on('tap', function () {
    Design.stage.selection.cssPreview('border-radius 50px 50px 50px 50px')
    Design.stage.commit()
    $('.handle').trigger('update')
    return false
  })
  columnLeft.append(buttonRoundness4)
  
  // Clear
  var clear = $('<div class="clear"></div>')
  columnLeft.append(clear)
  
  // Header - Border
  var headerBorder = $('<div class="editorHeader">Border</div>')
  columnLeft.append(headerBorder)
  
  // Button - BorderColor
  var currentBorderColor = $('.selection').css('border-color');
  
  // Picker - Border Color
  var colorBorderPicker = $('<div class="colorBorder"><input type="text" class="colorBorderPicker toolButton toolButtonOne"></div>')
  columnLeft.append(colorBorderPicker)
  
  // Button - Border
  var buttonBorder2 = $('<div class="toolButton toolButtonTwo">0</div>')
  buttonBorder2.on('tap', function () {
    Design.stage.selection.cssPreview('border none')
    Design.stage.commit()
    $('.handle').trigger('update')
    return false
  })
  columnLeft.append(buttonBorder2)
  
  // Button - Border
  var buttonBorder3 = $('<div class="toolButton toolButtonTwo">1</div>')
  buttonBorder3.on('tap', function () {
    Design.stage.selection.cssPreview('border 1px solid ' + currentBorderColor)
    Design.stage.commit()
    $('.handle').trigger('update')
    return false
  })
  columnLeft.append(buttonBorder3)
  
  // Button - Border
  var buttonBorder4 = $('<div class="toolButton toolButtonThree">5</div>')
  buttonBorder4.on('tap', function () {
    Design.stage.selection.cssPreview('border 5px solid ' + currentBorderColor)
    Design.stage.commit()
    $('.handle').trigger('update')
    return false
  })
  columnLeft.append(buttonBorder4)
  
  // Column - Right
  var columnRight = $('<div class="columnRight"></div>')
  styleEditorContainer.append(columnRight)
  
  // Header - Opacity
  var headerOpacity = $('<div class="editorHeader">Opacity</div>')
  columnRight.append(headerOpacity)
  
  // Button - Opacity
  var buttonOpacity1 = $('<div class="toolButton toolButtonOne">1</div>')
  buttonOpacity1.on('tap', function () {
    Design.stage.selection.cssPreview('opacity 1')
    Design.stage.commit()
    $('.handle').trigger('update')
    return false
  })
  columnRight.append(buttonOpacity1)
  
  // Button - Opacity
  var buttonOpacity2 = $('<div id="opacityOne" class="toolButton toolButtonTwo">.8</div>')
  buttonOpacity2.on('tap', function () {
    Design.stage.selection.cssPreview('opacity .8')
    Design.stage.commit()
    $('.handle').trigger('update')
    return false
  })
  columnRight.append(buttonOpacity2)
  
  // Button - Opacity
  var buttonOpacity3 = $('<div class="toolButton toolButtonTwo">.5</div>')
  buttonOpacity3.on('tap', function () {
    Design.stage.selection.cssPreview('opacity .5')
    Design.stage.commit()
    $('.handle').trigger('update')
    return false
  })
  columnRight.append(buttonOpacity3)
  
  // Button - Opacity4
  var buttonOpacity4 = $('<div class="toolButton toolButtonThree">.2</div>')
  buttonOpacity4.on('tap', function () {
    Design.stage.selection.cssPreview('opacity .2')
    Design.stage.commit()
    $('.handle').trigger('update')
    return false
  })
  columnRight.append(buttonOpacity4)
  
  // Clear
  var clear2 = $('<div class="clear"></div>')
  columnRight.append(clear2)
  
  // Header - Shadow
  var headerOpacity = $('<div class="editorHeader">Shadow</div>')
  columnRight.append(headerOpacity)
  
  // Button - Shadow
  var buttonShadow1 = $('<div class="toolButton toolButtonOne">0</div>')
  buttonShadow1.on('tap', function () {
    Design.stage.selection.cssPreview('box-shadow none')
    Design.stage.commit()
    $('.handle').trigger('update')
    return false
  })
  columnRight.append(buttonShadow1)
  
  // Button - Shadow
  var buttonShadow2 = $('<div id="shadowOne" class="toolButton toolButtonTwo">Out</div>')
  buttonShadow2.on('tap', function () {
    Design.stage.selection.cssPreview('box-shadow 0px 1px 3px rgba(0,0,0,.6)')
    Design.stage.commit()
    $('.handle').trigger('update')
    return false
  })
  columnRight.append(buttonShadow2)
  
  // Button - Shadow
  var buttonShadow3 = $('<div id="shadowTwo" class="toolButton toolButtonTwo">In</div>')
  buttonShadow3.on('tap', function () {
    Design.stage.selection.cssPreview('box-shadow inset 0px 1px 3px rgba(0,0,0,.6)')
    Design.stage.commit()
    $('.handle').trigger('update')
    return false
  })
  columnRight.append(buttonShadow3)
  
  // Button - Shadow
  var buttonShadow4 = $('<div id="ShadowThree" class="toolButton toolButtonThree">All</div>')
  buttonShadow4.on('tap', function () {
    Design.stage.selection.cssPreview('box-shadow 0px 0px 0px 4px rgba(0,0,0,.2)')
    Design.stage.commit()
    $('.handle').trigger('update')
    return false
  })
  columnRight.append(buttonShadow4)
  
  // Clear
  var clear = $('<div class="clear"></div>')
  styleEditorContainer.append(clear)
  
  // Insert text editor
  var textEditorContainer = $('<div id="nudgepadStyleEditorTextEditor"></div>')
  styleEditor.append(textEditorContainer)
  
  var currentFont = $('.selection').css('font-family');
  
  var setCurrentFont = function() {
    $(':input[name=fontFamilyDropdown] option').each(function(i, selected) {
      var selectedText = $(selected).text()
      if (selectedText == currentFont) {
        $(this).attr('selected', 'selected')
      }
    });
  }
  
  // Button - Font Family
  var buttonFontFamily = $('<select id="fontFamily" class="toolButton" name="fontFamilyDropdown"><option>Arial</option><option>Arvo</option><option>Courier</option><option>Helvetica</option><option>Open Sans</option><option>Times</option><option>Titillium Web</option></select>')
  buttonFontFamily.on('change', function () {
    currentFont = $('#fontFamily').val();
    Design.stage.selection.cssPreview('font-family ' + currentFont)
    Design.stage.commit()
    $('.handle').trigger('update')
    return false
  })
    textEditorContainer.append(buttonFontFamily)
  
  // Button - Font Color
  var currentFontColor = $('.selection').css('color');
  
  // Picker - Font Color
  var colorFontPicker = $('<div class="colorFont"><input type="text" class="colorFontPicker toolButton toolButtonOne"></div>')
  textEditorContainer.append(colorFontPicker)
  
  var currentFontSize = $('.selection').css('font-size');
  
  var setCurrentFontSize = function() {
    $(':input[name=fontDropdown] option').each(function(i, selected) {
      var selectedText = $(selected).text() + 'px'
      if (selectedText == currentFontSize) {
        $(this).attr('selected', 'selected')
      }
    });
  }
  
  // Button - FontSize
  var buttonFontSize = $('<select id="fontSize" name="fontDropdown"><option>11</option><option>12</option><option>13</option><option>14</option><option>16</option><option>18</option><option>24</option><option>32</option><option>40</option><option>48</option><option>56</option><option>64</option><option>72</option></select>')
  buttonFontSize.on('change', function () {
    currentFontSize = $('#fontSize').val()
    Design.stage.selection.cssPreview('font-size ' + currentFontSize + 'px')
    Design.stage.commit()
    $('.handle').trigger('update')
    return false
  })
  textEditorContainer.append(buttonFontSize)
  
  // Button - Auto Resize
  var buttonResize = $('<div id="resize" class="toolButton" title="Auto Resize"><img src="/nudgepad/public/images/contract.png"></div>')
  buttonResize.on('click', function () {
    Design.stage.selection.cssPreview({
    "width" : "auto",
    "height" : "auto"
    })
    Design.stage.commit()
    $('.handle').trigger('update')
    return false
  })
  textEditorContainer.append(buttonResize)
  
  // Clear
  var clear = $('<div class="clear"></div>')
  textEditorContainer.append(clear)
  
  // Column - Left
  var columnLeftText = $('<div class="columnLeft"></div>')
  textEditorContainer.append(columnLeftText)
  
  // Header - Alignment
  var headerAlignment = $('<div class="editorHeader">Alignment</div>')
  columnLeftText.append(headerAlignment)
  
  // Button - Alignment
  var buttonAlignment1 = $('<div class="toolButton toolButtonOne"><img src="/nudgepad/public/images/left_lt.png"></div>')
  buttonAlignment1.on('click', function () {
    Design.stage.selection.cssPreview('text-align left')
    Design.stage.commit()
    $('.handle').trigger('update')
    return false
  })
  columnLeftText.append(buttonAlignment1)
  
  // Button - Alignment
  var buttonAlignment2 = $('<div class="toolButton toolButtonTwo"><img src="/nudgepad/public/images/center_lt.png"></div>')
  buttonAlignment2.on('click', function () {
    Design.stage.selection.cssPreview('text-align center')
    Design.stage.commit()
    $('.handle').trigger('update')
    return false
  })
  columnLeftText.append(buttonAlignment2)
  
  // Button - Alignment
  var buttonAlignment3 = $('<div class="toolButton toolButtonTwo"><img src="/nudgepad/public/images/right_lt.png"></div>')
  buttonAlignment3.on('click', function () {
    Design.stage.selection.cssPreview('text-align right')
    Design.stage.commit()
    $('.handle').trigger('update')
    return false
  })
  columnLeftText.append(buttonAlignment3)
  
  // Button - Alignment
  var buttonAlignment4 = $('<div class="toolButton toolButtonThree"><img src="/nudgepad/public/images/justify_lt.png"></div>')
  buttonAlignment4.on('click', function () {
    Design.stage.selection.cssPreview('text-align justify')
    Design.stage.commit()
    $('.handle').trigger('update')
    return false
  })
  columnLeftText.append(buttonAlignment4)
  
  // Clear
  var clear = $('<div class="clear"></div>')
  columnLeftText.append(clear)
  
  // Header - Padding
  var headerPadding = $('<div class="editorHeader">Padding</div>')
  columnLeftText.append(headerPadding)
  
  // Button - Padding
  var buttonPadding1 = $('<div class="toolButton toolButtonOne">0</div>')
  buttonPadding1.on('click', function () {
    Design.stage.selection.cssPreview('padding 0px')
    Design.stage.commit()
    $('.handle').trigger('update')
    return false
  })
  columnLeftText.append(buttonPadding1)
  
  // Button - Padding
  var buttonPadding2 = $('<div class="toolButton toolButtonTwo">10</div>')
  buttonPadding2.on('click', function () {
    Design.stage.selection.cssPreview('padding 10px')
    Design.stage.commit()
    $('.handle').trigger('update')
    return false
  })
  columnLeftText.append(buttonPadding2)
  
  // Button - Padding
  var buttonPadding3 = $('<div class="toolButton toolButtonTwo">20</div>')
  buttonPadding3.on('click', function () {
    Design.stage.selection.cssPreview('padding 20px')
    Design.stage.commit()
    $('.handle').trigger('update')
    return false
  })
  columnLeftText.append(buttonPadding3)
  
  // Button - Padding
  var buttonPadding4 = $('<div class="toolButton toolButtonTwo">40</div>')
  buttonPadding4.on('click', function () {
    Design.stage.selection.cssPreview('padding 40px')
    Design.stage.commit()
    $('.handle').trigger('update')
    return false
  })
  columnLeftText.append(buttonPadding4)
  
  // Column - Right
  var columnRightText = $('<div class="columnRight"></div>')
  textEditorContainer.append(columnRightText)
  
  // Clear
  var clear = $('<div class="clear"></div>')
  columnRightText.append(clear)
  
  // Header - Line Height
  var headerLineHeight = $('<div class="editorHeader">Line Height</div>')
  columnRightText.append(headerLineHeight)
  
  // Button - LineHeight1
  var buttonLineHeight1 = $('<div id="lineHeightOne" class="toolButton toolButtonOne">100</div>')
  buttonLineHeight1.on('click', function () {
    Design.stage.selection.cssPreview('line-height 100%')
    return false
  })
  columnRightText.append(buttonLineHeight1)
  
  // Button - LineHeight2
  var buttonLineHeight2 = $('<div id="lineHeightTwo" class="toolButton toolButtonTwo">140</div>')
  buttonLineHeight2.on('click', function () {
    Design.stage.selection.cssPreview('line-height 140%')
    return false
  })
  columnRightText.append(buttonLineHeight2)
  
  // Button - LineHeight
  var buttonLineHeight3 = $('<div id="lineHeightTwo" class="toolButton toolButtonTwo">180</div>')
  buttonLineHeight3.on('click', function () {
    Design.stage.selection.cssPreview('line-height 180%')
    return false
  })
  columnRightText.append(buttonLineHeight3)
  
  // Button - LineHeight
  var buttonLineHeight4 = $('<div id="lineHeightThree" class="toolButton toolButtonThree">Mid</div>')
  buttonLineHeight4.on('click', function () {
    var currentHeight = $('.selection').css('height')
    Design.stage.selection.cssPreview('line-height ' + currentHeight)
    return false
  })
  columnRightText.append(buttonLineHeight4)
  
  // Clear
  var clear6 = $('<div class="clear"></div>')
  columnRightText.append(clear6)
  
  // Header - Style
  var headerTextStyle = $('<div class="editorHeader">Style</div>')
  columnRightText.append(headerTextStyle)
  
  // Button - TextStyle1
  var buttonTextStyle1 = $('<div id="textStyleOne" class="toolButton toolButtonOne">B</div>')
  buttonTextStyle1.on('click', function () {
    Design.stage.selection.cssPreview('font-weight bold')
    Design.stage.commit()
    $('.handle').trigger('update')
    return false
  })
  columnRightText.append(buttonTextStyle1)
  
  // Button - TextStyle
  var buttonTextStyle2 = $('<div id="italics" class="toolButton toolButtonTwo">I</div>')
  buttonTextStyle2.on('click', function () {
    Design.stage.selection.cssPreview('font-style italic')
    Design.stage.commit()
    $('.handle').trigger('update')
    return false
  })
  columnRightText.append(buttonTextStyle2)
  
  // Button - TextStyle2
  var buttonTextStyle3 = $('<div id="textStyleTwo" class="toolButton toolButtonTwo">U</div>')
  buttonTextStyle3.on('click', function () {
    Design.stage.selection.cssPreview('text-decoration underline')
    Design.stage.commit()
    $('.handle').trigger('update')
    return false
  })
  columnRightText.append(buttonTextStyle3)
  
  // Button - TextStyle3
  var buttonTextStyle4 = $('<div id="textStyleThree" class="toolButton toolButtonThree">Auto</div>')
  buttonTextStyle4.on('click', function () {
    Design.stage.selection.cssPreview({
    "text-decoration" : "none",
    "font-weight" : "normal",
    "font-style" : "normal"
    })
    return false
  })
  columnRightText.append(buttonTextStyle4)
  
  // Clear
  var clear = $('<div class="clear"></div>')
  textEditorContainer.append(clear)
  
  // Insert text_area
  var text_area = $('<textarea id="nudgepadStyleEditorCssEditor"></textarea>')
  if (scrap.get('style'))
    text_area.val(scrap.get('style'))
  text_area.on('tap mousedown click slide slidestart slideend mouseup', function (event) {
    event.stopPropagation()
  })
  nudgepad.livePreviewScrap = scrap
  text_area.on('keyup', nudgepad.livePreviewStart)
  
  styleEditor.append(text_area)
  
  // Insert bottom bar
  var button_container = $('<div id="nudgepadStyleEditorBottomBar"></div>')
  text_area.append(button_container)
  
  // Insert save button
  var save_button = $('<div id="nudgepadStyleEditorSaveButton">Save</div>')
  save_button.on('click', function () {
    Design.stage.commit()
    $('.handle').trigger('update')
    styleEditor.remove()
    modal_screen.remove()
  })
  text_area.append(save_button)
  
  // Insert styleeditor
  $('body').append(styleEditor)
  
  var colorType;
  
  // Insert Color Spectrum Picker
  $(".colorPicker").spectrum({
      color: currentColor,
      move: function(color) {
        Design.stage.selection.cssPreview('background-color ' + color.toHexString());
        currentColor = color.toHexString();
      },
      change: function(color) {
          $("#basic-log").text("change called: " + color.toHexString());
          currentColor = color.toHexString();
      },
      show: function(color) {
          colorType = "background-color "
      },
      hide: function() {
        Design.stage.commit()
        $('.handle').trigger('update')
      }
  });
  
  $(".colorBorderPicker").spectrum({
      color: currentBorderColor,
      move: function(color) {
        Design.stage.selection.cssPreview('border-color ' + color.toHexString());
        currentBorderColor = color.toHexString();
      },
      change: function(color) {
          $("#basic-log").text("change called: " + color.toHexString());
          currentBorderColor = color.toHexString();
      },
      show: function() {
          colorType = "border-color "
      },
      hide: function() {
        Design.stage.commit()
        $('.handle').trigger('update')
      }
  });
  
  $(".colorFontPicker").spectrum({
      color: currentFontColor,
      move: function(color) {
        Design.stage.selection.cssPreview('color ' + color.toHexString());
        currentBorderColor = color.toHexString();
      },
      change: function(color) {
          $("#basic-log").text("change called: " + color.toHexString());
          currentBorderColor = color.toHexString();
      },
      show: function() {
          colorType = "color "
      },
      hide: function() {
        Design.stage.commit()
        $('.handle').trigger('update')
      }
  });
  
  $(document).on('slide slidestart slideend', ".sp-container", function(){return false})
  $('.sp-input[type=text]').on('keydown', function(e) {
      if (e.which == 13) {
          e.preventDefault();
          var inputColor = $(this).val()
          Design.stage.selection.css(colorType + inputColor);
          return false
      }
  });
  $('.colorFont .sp-replacer').addClass('fontColorButton')
  $('.colorFont .sp-preview').addClass('fontColorLine')
  $('.colorFont .sp-replacer').append('<img src="/nudgepad/public/images/letter.png">')
  $('.colorBorder .sp-replacer').addClass('borderColorButton')
  $('.colorBorder .sp-preview').addClass('borderColorLine')
  $('.colorBackground .sp-replacer').addClass('backgroundColorButton')
  
  setCurrentFontSize();
  setCurrentFont();
  
  // Focus CSS editor
 // text_area.focus()
 // scroll to reveal the styleEditor
  var difference = styleEditor.position().top + styleEditor.outerHeight() - Design.stage.height()
  if (difference > 0) {
    $('#nudgepadStage').scrollTop($('#nudgepadStage').scrollTop() + difference)
    styleEditor.css('top', parseFloat(styleEditor.css('top')) - difference)
  }
  var difference = styleEditor.position().left + styleEditor.outerWidth() - $(window).width()
  if (difference > 0) {
    $('#nudgepadStage').scrollLeft($('#nudgepadStage').scrollLeft() + difference)
    styleEditor.css('left', parseFloat(styleEditor.css('left')) - difference)
  }
}
;Design.updateTabs = function () {
  $('#nudgepadTabs').html('')
  var keys = site.get('pages').keys
  _.each(keys, function (name) {
    var div = $('<span>' + name + '</span>')
    
    // Make active page white
    if (name === Design.stage.activePage)
      div.css('color', 'white')
      
    var title = ''
    
    site.values.collage.each(function (key, value) {
      if (value.get('page') !== name)
        return true
      title += value.get('name') + '(' + value.get('device') + ')' + ' '
      if (key != nudgepad.id)
        div.addClass('openPage')
    })
    
    div.attr('title', title)
    
    div.on('click', function () {
      mixpanel.track('I clicked a page tab')
      Design.stage.open($(this).text())
      return true
    })
    div.attr('value', name)
    $('#nudgepadTabs').append(div)
    
  })
  
}

nudgepad.on('collage.update', Design.updateTabs)


;// todo: add console history

/**
 * Prompt the worker for input. Pops a modal.
 */
nudgepad.console = function () {
  mixpanel.track('I opened the console')
  var output = $('<pre id="nudgepadEditorConsole"></pre>')
  var input = $('<input id="nudgepadEditorInput" type="text"/>')
  var checkbox = $('<input type="checkbox" id="nudgepadEditorCheckbox"/>')
  var label = $('<label for="nudgepadEditorCheckbox" id="nudgepadEditorLabel">Shell</label>')
  var modal_screen = $('<div id="nudgepadEditorModalScreen"/>')
  modal_screen.on('tap mousedown click slide slidestart slideend mouseup', function (event) {
    event.stopPropagation()
  })
  output.on('tap mousedown click slide slidestart slideend mouseup', function (event) {
    event.stopPropagation()
  })

//  if (onkeypress)
//    output.on('keypress', onkeypress)
    
  var send_button = $('<div id="nudgepadEditorSaveButton">Send</div>')
  var cancel_button = $('<div id="nudgepadEditorCancelButton">Close</div>')
  
  var button_container = $('<div id="nudgepadEditorButtonContainer"></div>')
  modal_screen.on('click', function () {
    cancel_button.trigger('click')
  })
  
  cancel_button.on('click', function () {
    send_button.remove()
    output.remove()
    modal_screen.remove()
    button_container.remove()
    cancel_button.remove()
    label.remove()
    checkbox.remove()
    input.remove()
  })
  
  send_button.on('click', function () {
    
    var command = input.val()
    var endpoint = 'nudgepad.console'
    if (checkbox.is(':checked'))
      endpoint = 'nudgepad.exec'
    
    $.post(endpoint, {command : command}, function (result) {
      output.append('>' + command.replace(/\n/g, '> \n') + '\n')
      output.append(result + '\n')
      output.scrollTop($('pre')[0].scrollHeight + '')
      input.val('')
      input.focus()
    }, null, function (error, message) {
      mixpanel.track('I used the console and got an error')
      output.append('>' + command.replace(/\n/g, '> \n') + '\n')
      output.append('ERROR\n')
      output.append(error.responseText + '\n')
      output.scrollTop($('pre')[0].scrollHeight + '')
      input.val('')
      input.focus()
    })
    
  })
  
  input.on('enterkey', function () {
    send_button.click()
  })
  
  $('body').append(modal_screen)
  $('body').append(checkbox)
  $('body').append(label)
  $('body').append(output)
  $('body').append(input)
  $('body').append(send_button)
  $('body').append(cancel_button)
  $('body').append(button_container)
  input.focus()
}
;nudgepad.apps.develop = new App('develop')

nudgepad.apps.develop.files = ''
nudgepad.apps.develop.log = ''
nudgepad.apps.develop.path = ''
nudgepad.apps.develop.pathPretty = ''
nudgepad.apps.develop.status = ''

nudgepad.apps.develop.clone = function () {
  var domain = prompt('Enter a domain name', 'copyof' + nudgepad.domain)
  if (!domain)
    return false
  // TODO: make tld come from server and dont compute it here, which
  // is incorrect
  // tld equals the part that domain and nudgepad.domain have in common
  var newDomainReversed = domain.split("").reverse().join("")
  var currentDomainReversed = nudgepad.domain.split("").reverse().join("")
  var tld = ''
  for (var i = 0 ; i < currentDomainReversed.length ; i++) {
    if (newDomainReversed.substr(i, 1) === currentDomainReversed.substr(i, 1))
      tld = newDomainReversed.substr(i, 1) + tld
  }
  // chop common domain part
  tld = tld.replace(/^[^\.]*\./, '')
  // Panel is the domain running the nudgepad panel server
  var panel = site.get('hostname')
  
  $.get('/nudgepad.export', {}, function (data) {
    
    
    var newForm = $('<form>', {
        'action': 'http://' + panel + '/create',
//        'target': '_blank',
        'method' : 'post'
    })
    .append($('<input>', {
        'name': 'domain',
        'value': domain,
        'type': 'hidden'
    }))
    .append($('<input>', {
        'name': 'email',
        'value': nudgepad.cookie.email,
        'type': 'hidden'
    }))
    .append($('<input>', {
        'name': 'timestamp',
        'value': new Date().getTime(),
        'type': 'hidden'
    }))
    .append($('<input>', {
        'name': 'relaxed',
        'value': 'true',
        'type': 'hidden'
    }))
    .append($('<input>', {
        'name': 'clone',
        'value': data,
        'type': 'hidden'
    }))
    newForm.submit()
    
  })
  
}

nudgepad.apps.develop.createFile = function () {
  var name = prompt('Name your file')
  if (!name)
    return false
  Explorer.create(nudgepad.apps.develop.pathPretty + name, nudgepad.apps.develop.refresh)
}

nudgepad.apps.develop.home = function () {
  nudgepad.apps.develop.path = ''
  nudgepad.apps.develop.pathPretty = ''
  nudgepad.apps.develop.renderExplorer()
}

nudgepad.apps.develop.import = function () {
  TextPrompt('Import a Site ', '', function (val) {
    $.post('/Design.import', {space : val}, function (err) {
      Flasher.flash('Imported. Please restart')
    })
  })
}

nudgepad.apps.develop.onopen = function () {
//  $('.nudgepad#zip').attr('href', '/nudgepad.backup/' + nudgepad.domain + '.zip')
  if (!nudgepad.apps.develop.log)
    nudgepad.apps.develop.refresh()
}

nudgepad.apps.develop.renderExplorer = function () {
  
  var files = nudgepad.apps.develop.files
  if (nudgepad.apps.develop.path)
    files = files.get(nudgepad.apps.develop.path)
  
  var explorer = '<table id="nudgepadExplorer">'
  explorer += '<tr class="explorerHeader"><td>Filename</td><td></td><td></td><td>Size</td><td>Age</td></tr>'
  
  var filenames = files.keys
  for (var i in filenames) {
    // its a folder
    var name = filenames[i]
    var item = files.values[name]
    var row = '<tr'
    if (item.get('timeSinceLastChange')) {
      row += ' class="explorerFile" value="' + name + '">'
      row += '<td class="explorerEdit standardCell">' + name + '</td>'
      row += '<td class="explorerRename standardCell">Rename</td>'
      row += '<td class="explorerRemove standardCell">Delete</td>'
      row += '<td class="standardCell">' + (item.get('size')) + 'KB</td>'
      row += '<td class="standardCell">' + moment(item.get('mtime')).fromNow() + '</td>'
    } else {
      row += ' class="explorerFolder" value="' + name + '">'
      row += '<td class="explorerFolderName standardCell" colspan=5>' + name + '</td>'
    }
    row += '</tr>'
    explorer += row
  }
  explorer += '</table>'
  nudgepad.apps.develop.explorer = explorer
  $('.nudgepad#explorerPath').text(nudgepad.domain + '/' + nudgepad.apps.develop.pathPretty)
  $('.nudgepad#explorerHolder').html(nudgepad.apps.develop.explorer)
}

nudgepad.apps.develop.refresh = function () {
  $.get('/nudgepad.status', {}, function (data) {
    nudgepad.apps.develop.status = data
    $('.nudgepad#statusArea').text(nudgepad.apps.develop.status)
  })
  $.get('/nudgepad.logs', {}, function (data) {
    nudgepad.apps.develop.log = data
    $('.nudgepad#logHolder').html(data)
    $('#logHolder').scrollTop($('#logHolder').height())
  })
  $.get('/Explorer.list', {}, function (data) {
    nudgepad.apps.develop.files = new Space(data)
    nudgepad.apps.develop.renderExplorer()
    
  })
}

$(document).on('click', 'td.explorerEdit', function () {
  Explorer.edit(nudgepad.apps.develop.pathPretty + $(this).parent().attr('value'))
})

$(document).on('click', 'td.explorerRename', function () {
  var newName = prompt('Rename this file', $(this).parent().attr('value'))
  if (!newName)
    return false
  Explorer.rename(nudgepad.apps.develop.pathPretty + $(this).parent().attr('value'),
    nudgepad.apps.develop.pathPretty + newName, nudgepad.apps.develop.refreshFiles)
})

$(document).on('click', 'td.explorerRemove', function () {
  var name = $(this).parent().attr('value')
  if (!confirm('Are you sure you want to delete ' + name + '?'))
    return false
  Explorer.remove(nudgepad.apps.develop.pathPretty + name, nudgepad.apps.develop.refresh)
})

$(document).on('click', 'td.explorerFolderName', function () {
  if (nudgepad.apps.develop.path)
    nudgepad.apps.develop.path += ' ' + $(this).parent().attr('value')
  else
    nudgepad.apps.develop.path = $(this).parent().attr('value')
  nudgepad.apps.develop.pathPretty = nudgepad.apps.develop.path.replace(' ', '/') + '/'
  nudgepad.apps.develop.renderExplorer()
})

var visibleContent;

$(document).on('click', '.devToggleOption', function () {
  visibleContent = $(this).text().toLowerCase() + 'Content'
  if(!$(this).hasClass('devSelect')) {
    $('div').removeClass('devSelect');
    $(this).addClass('devSelect')
    $('.devAppContent').hide()
    $('#' + visibleContent).show()
  }
})


;/**
 * @special Singleton
 */
Explorer = {}

Explorer.create = function (path, callback) {
  var req = {}
  req.path = path
  req.content = ''
  $.post('/Explorer.save', req, function (err) {
    callback()
  })
}

Explorer.downloadTimelines = function () {
  $.get('/nudgepad.site.timelines', {}, function (data) {
    var space = new Space(data)
    space.delete(Design.stage.activePage) // We already have the open page
    site.get('timelines').patch(space)
  })
}

/**
 * Sync the clients site with the server.
 *
 * @param {function}
 */
Explorer.getSite = function (callback) {
  var activePage = store.get('activePage') || 'home'
  $.get('/nudgepad.site', { activePage : activePage, id : nudgepad.id }, function (space) {
    site = new Space(space)
    var online = site.get('collage').keys.length + 1
    var title = nudgepad.domain + '. ' + online + ' user' + (online > 1 ? 's' : '') + ' online.'
    Blinker.default = title
    document.title = title
    callback()
  })
}

Explorer.quickEdit = function () {
  Explorer.edit(prompt('Enter path to file you want to edit', 'public/nudgepad.site.css'))
}

Explorer.remove = function (path, callback) {
  var req = {}
  req.path = path
  $.post( 'Explorer.remove', req, function (data) {
    callback()
  })
}

Explorer.rename = function (oldPath, newPath, callback) {
  var req = {}
  req.oldPath = oldPath
  req.newPath = newPath
  if (!newPath)
    return nudgepad.error('No name provided')
  $.post('/Explorer.rename', req, function (err) {
    callback()
  })
}

/**
 * Edit a text file
 *
 * @param {string} File you want to edit
 */
Explorer.edit = function (path) {
  var req = {}
  req.path = path
  $.post( 'Explorer.get', req, function (data) {
    TextPrompt('Editing ' + path, data, function (val) {
      var req = {}
      req.path = path
      req.content = val + ''
      $.post('/Explorer.save', req, function (err) {
        console.log(err)
      })
    })
  })
}



;nudgepad.apps.git = new App('git')

nudgepad.apps.git.commit = function () {
  var message = prompt('Enter your commit message')
  nudgepad.apps.git.send("git commit -am '" + message + "'")
}

nudgepad.apps.git.init = function () {
  nudgepad.apps.git.send('git init')
}

nudgepad.apps.git.pull = function () {
  nudgepad.apps.git.send('git pull')
}

nudgepad.apps.git.push = function () {
  nudgepad.apps.git.send('git push')
}

nudgepad.apps.git.send = function (command) {
  $.post('nudgepad.exec', {command : command}, function (result) {
    Flasher.flash(result)
  }, null, function (error, message) {
    nudgepad.error(error.responseText)
  })
}

nudgepad.apps.git.status = function () {
  nudgepad.apps.git.send('git status')
}



;nudgepad.apps.home = new App('home')

nudgepad.apps.home.onopen = function () {
  $('.nudgepad#domainName').text(nudgepad.domain)
}
;// Nudgepad App navigation
Launcher = {}

Launcher.open = function (name, dontRecord) {
  if (name === 'pages')
    Design.open()
  else if (nudgepad.apps[name])
    nudgepad.apps[name].open()
  else
    return false

  if (dontRecord)
    return null
  
  if (nudgepad.isTesting)
    return null

  history.pushState(name, 'Nudgepad - ' + name, '/nudgepad?app=' + name)
}

Launcher.openAppFromQueryString = function () {
  
  // Get query string. If nothing, set default to home app
  var name = ParseQueryString().app || 'home'
  Launcher.open(name, true)
}

// Revert to a previously saved state
window.addEventListener('popstate', function (event) {
  Launcher.openAppFromQueryString()
})
;nudgepad.apps.account = new App('account')

nudgepad.apps.account.onopen = function () {
  $('.nudgepad#email').val(nudgepad.cookie.email)
}

nudgepad.apps.account.save = function () {
  var email = $('.nudgepad#email').val()
  
  if (!ValidateEmail(email))
    return nudgepad.error('Invalid Email')
  
  if (email === nudgepad.cookie.email)
    return nudgepad.apps.home.open()
  
  $.post('/nudgepad.updateEmail', {email : email}, function () {
    nudgepad.warnBeforeReload = false
    document.location = '/nudgepad?app=home'
  })
}

;nudgepad.emailPrompt = function () {
  
  var message = new Space('to \nsubject \nmessage \n')
  TextPrompt('Send an email', message.toString(), function (val) {
    
    var space = new Space(val)
    
    $.post('/nudgepad.email', space.keys, function (result) {
      alert(result)
    })
  }, false, 'Send')
}
;Inviter = {}

Inviter.prompt = function () {
  var val = prompt('Invite people to edit this site. Add one or more emails, separated by spaces', '')
  if (!val)
    return false
  
  $.post('/Inviter', {emails : val}, function (result) {
    Flasher.flash('Invite Sent')
    mixpanel.track('I invited people')
  })
}
;nudgepad.on('main', function () {
  
  if (nudgepad.cookie.email !== ('owner@' + nudgepad.domain))
    return true
  
  $('#nudgepadSignupFormDomain').text(nudgepad.domain).attr('href', 'http://' + nudgepad.domain)
  // Hack because I was too lazy to do this in HTML so just used the code from the
  // nudgepad prototype. Recursion would be nice :)
  var leftMargin = Math.round(($(window).width() - 725)/2)
  if (leftMargin > 0) {
    $('#nudgepadSignupFormModal').children().each(function () {
      $(this).css('left', parseFloat($(this).css('left')) + leftMargin + 'px')
      $(this).on('click', function (event) {
        event.stopPropagation()
      })
    })
  }
  $('#nudgepadSignupFormModal').show()
  
  $('#nudgepadSignupFormModal').on('click', function () {
    $(this).remove()
  })
  
  
  $('#nudgepadSignupFormButton').on('click', function () {
    
    var email = $('#nudgepadSignupFormEmail').val()

    if (!ValidateEmail(email))
      return nudgepad.error('Invalid Email')
    // todo, send back to nudgepad.com
    mixpanel.track('I added my email')
    $.post('/nudgepad.updateEmail', {email : email, sendWelcomeEmail: 'true'}, function () {
      nudgepad.warnBeforeReload = false
      document.location = '/nudgepad?app=pages'
    })
    
  })

  $('#nudgepadSignupFormEmail').focus()
  
  
})
;nudgepad.apps.blog = new App('blog')

// Default theme
nudgepad.apps.blog.blankTheme = new Space({
 "title": {
  "tag": "title",
  "content": "{{post.title Post Title}}"
 },
 "stylesheet": {
  "tag": "link",
  "rel": "stylesheet",
  "href": "site.css"
 },
 "container": {
  "style": {
   "width": "90%",
   "max-width": "800px",
   "height": "100%",
   "margin": "0 auto"
  },
  "scraps": {
   "block1": {
    "style": {
     "height": "auto",
     "font-family": "Open Sans",
     "width": "auto",
     "font-size": "48px",
     "font-weight": "normal",
     "color": "#333",
     "text-decoration": "none",
     "font-style": "normal",
     "padding" : "10px"
    },
    "content": "{{post.title Post Title}}"
   },
   "block14": {
    "style": {
     "height": "auto",
     "font-family": "Open Sans",
     "width": "auto",
     "font-size": "18px",
     "font-weight": "normal",
     "color": "#333",
     "text-decoration": "none",
     "font-style": "normal",
     "padding": "10px"
    },
    "content": "{{post.content Lorem ipsum foobar }}"
   }
  }
 }
})

nudgepad.apps.blog.createPost = function () {
  $('.nudgepad#content,.nudgepad#title').val('')
  $('.nudgepad#advanced').val('timestamp ' + new Date().getTime() + '\ntemplate blog')
  $('.nudgepad#permalink').attr('value', '')
  $('.nudgepad#title').focus()
  nudgepad.apps.blog.activePost = null
}

nudgepad.apps.blog.deletePost = function () {
  nudgepad.apps.blog.activePost = null
  var name = Permalink($('.nudgepad#permalink').attr('value'))
  if (!name)
    return nudgepad.error('No post to delete')
  
  if (!site.get('posts ' + name))
    return nudgepad.error('Post does not exist')

  site.delete('posts ' + name)
  
  // Send Commit to Server
  var patch = new Space()
  patch.set('posts ' + name, '')
  nudgepad.emit('patch', patch.toString())
  nudgepad.apps.blog.restart()
}

nudgepad.apps.blog.editPost = function (name) {
  nudgepad.apps.blog.activePost = name
  var post = site.get('posts ' + name)
  $('.nudgepad#content').val(post.get('content'))
  $('.nudgepad#title').val(post.get('title'))
  var postSettings = new Space(post.toString())
  postSettings.delete('title')
  postSettings.delete('content')
  $('.nudgepad#advanced').val(postSettings.toString())
  // http://{{nudgepad.domain}}/<a class="nudgepad" id="permalink" target="_blog"></a>
  $('.nudgepad#permalink').text('http://' + nudgepad.domain + '/' + name).attr('value', name)
  
  nudgepad.apps.blog.updateLinks()
  
  $('.nudgepad#content').focus()
  
}

// Ensures site has a blog theme before posting
nudgepad.apps.blog.initialize = function () {
  
  if (site.get('pages blog'))
    return true
  var patch = new Space()
  patch.set('pages blog', nudgepad.apps.blog.blankTheme.clone())
  nudgepad.emit('patch', patch.toString())
  site.set('pages blog', nudgepad.apps.blog.blankTheme)
  
  Design.updateTabs()// todo: delete this
}

nudgepad.apps.blog.activePost = null

nudgepad.apps.blog.onopen = function () {
  nudgepad.apps.blog.initialize()
  $('.nudgepad#posts').html('')
  if (!site.get('posts'))
    return true
  _.each(site.get('posts').keys, function (name) {
    console.log(name)
    var value = site.get('posts').get(name)
    var div = $('<div >' + value.get('title') + '</div>')
      .css({
      'color' : '#777',
      'margin-bottom' : '9px',
      'font-size' : '13px'
      })
      .on('click', function () {
        nudgepad.apps.blog.editPost($(this).attr('value'))
      })
      .attr('value', name)
      .attr('title', name)
    $('.nudgepad#posts').append(div)
  })
  
}

nudgepad.apps.blog.onready = function () {
  
  // Open the last edited post if there is one
  if (nudgepad.apps.blog.activePost)
    nudgepad.apps.blog.editPost(nudgepad.apps.blog.activePost)
  else
    nudgepad.apps.blog.createPost()
}

nudgepad.apps.blog.savePost = function () {

  var name = Permalink($('.nudgepad#permalink').attr('value'))
  
  if (!name)
    return nudgepad.error('Title cannot be blank')

  mixpanel.track('I saved a blog post')
  var post = site.get('posts ' + name)
  if (!post)
    post = new Space()

  post.set('content', $('.nudgepad#content').val())
  post.set('title', $('.nudgepad#title').val())
  post.patch($('.nudgepad#advanced').val())
  
  site.set('posts ' + name, post)
  
  // Send Commit to Server
  var patch = new Space()
  patch.set('posts ' + name, post)
  
  // If they are editing a post and the name has changed,
  // make sure to delete old post
  if (nudgepad.apps.blog.activePost && nudgepad.apps.blog.activePost !== name) {
    patch.set('posts ' + nudgepad.apps.blog.activePost, '')
    site.delete('posts ' + nudgepad.apps.blog.activePost)
  }
  
  nudgepad.emit('patch', patch.toString())
  nudgepad.apps.blog.activePost = name
//  nudgepad.apps.blog.updateLinks()
  nudgepad.apps.blog.restart()
  window.open(name, 'published')
}

nudgepad.apps.blog.updateLinks = function () {
  $('.nudgepad#posts div').css('color', '#777')
  // todo: improve this
  $('.nudgepad#posts div').each(function () {
    if ($(this).attr('value') == nudgepad.apps.blog.activePost)
      $(this).css('color', '#333')  
  })
}

nudgepad.apps.blog.updatePermalink = function () {
  var permalink = Permalink($('.nudgepad#title').val())
  $('.nudgepad#permalink').text('http://' + nudgepad.domain + '/' + permalink).attr('value', permalink)
}
;