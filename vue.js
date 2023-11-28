"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var n=require("vue"),t=function(){return t=Object.assign||function(n){for(var t,e=1,i=arguments.length;e<i;e++)for(var r in t=arguments[e])Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r]);return n},t.apply(this,arguments)};function e(n,t,e){if(e||2===arguments.length)for(var i,r=0,a=t.length;r<a;r++)!i&&r in t||(i||(i=Array.prototype.slice.call(t,0,r)),i[r]=t[r]);return n.concat(i||Array.prototype.slice.call(t))}function i(n){return Array.prototype.slice.call(n)}function r(n,t){var e=Math.floor(n);return e===t||e+1===t?n:t}function a(){return Date.now()}function o(n,t,e){if(t="data-keen-slider-"+t,null===e)return n.removeAttribute(t);n.setAttribute(t,e||"")}function u(n,t){return t=t||document,"function"==typeof n&&(n=n(t)),Array.isArray(n)?n:"string"==typeof n?i(t.querySelectorAll(n)):n instanceof HTMLElement?[n]:n instanceof NodeList?i(n):[]}function s(n){n.raw&&(n=n.raw),n.cancelable&&!n.defaultPrevented&&n.preventDefault()}function c(n){n.raw&&(n=n.raw),n.stopPropagation&&n.stopPropagation()}function d(){var n=[];return{add:function(t,e,i,r){t.addListener?t.addListener(i):t.addEventListener(e,i,r),n.push([t,e,i,r])},input:function(n,t,e,i){this.add(n,t,function(n){return function(t){t.nativeEvent&&(t=t.nativeEvent);var e=t.changedTouches||[],i=t.targetTouches||[],r=t.detail&&t.detail.x?t.detail:null;return n({id:r?r.identifier?r.identifier:"i":i[0]?i[0]?i[0].identifier:"e":"d",idChanged:r?r.identifier?r.identifier:"i":e[0]?e[0]?e[0].identifier:"e":"d",raw:t,x:r&&r.x?r.x:i[0]?i[0].screenX:r?r.x:t.pageX,y:r&&r.y?r.y:i[0]?i[0].screenY:r?r.y:t.pageY})}}(e),i)},purge:function(){n.forEach((function(n){n[0].removeListener?n[0].removeListener(n[2]):n[0].removeEventListener(n[1],n[2],n[3])})),n=[]}}}function l(n,t,e){return Math.min(Math.max(n,t),e)}function f(n){return(n>0?1:0)-(n<0?1:0)||+n}function p(n){var t=n.getBoundingClientRect();return{height:r(t.height,n.offsetHeight),width:r(t.width,n.offsetWidth)}}function v(n,t,e,i){var r=n&&n[t];return null==r?e:i&&"function"==typeof r?r():r}function h(n){return Math.round(1e6*n)/1e6}function m(n){var t,e,i,r,a,o;function u(t){o||(o=t),s(!0);var a=t-o;a>i&&(a=i);var l=r[e];if(l[3]<a)return e++,u(t);var f=l[2],p=l[4],v=l[0],h=l[1]*(0,l[5])(0===p?1:(a-f)/p);if(h&&n.track.to(v+h),a<i)return d();o=null,s(!1),c(null),n.emit("animationEnded")}function s(n){t.active=n}function c(n){t.targetIdx=n}function d(){var n;n=u,a=window.requestAnimationFrame(n)}function l(){var t;t=a,window.cancelAnimationFrame(t),s(!1),c(null),o&&n.emit("animationStopped"),o=null}return t={active:!1,start:function(t){if(l(),n.track.details){var a=0,o=n.track.details.position;e=0,i=0,r=t.map((function(n){var t,e=Number(o),r=null!==(t=n.earlyExit)&&void 0!==t?t:n.duration,u=n.easing,s=n.distance*u(r/n.duration)||0;o+=s;var c=i;return i+=r,a+=s,[e,n.distance,c,i,n.duration,u]})),c(n.track.distToIdx(a)),d(),n.emit("animationStarted")}},stop:l,targetIdx:null}}function g(n){var t,i,r,o,u,s,c,d,p,m,g,b,x,y,k=1/0,w=[],M=null,T=0;function C(n){_(T+n)}function E(n){var t=z(T+n).abs;return S(t)?t:null}function z(n){var t=Math.floor(Math.abs(h(n/i))),r=h((n%i+i)%i);r===i&&(r=0);var a=f(n),o=c.indexOf(e([],c,!0).reduce((function(n,t){return Math.abs(t-r)<Math.abs(n-r)?t:n}))),u=o;return a<0&&t++,o===s&&(u=0,t+=a>0?1:-1),{abs:u+t*s*a,origin:o,rel:u}}function I(n,t,e){var i;if(t||!L())return A(n,e);if(!S(n))return null;var r=z(null!=e?e:T),a=r.abs,o=n-r.rel,u=a+o;i=A(u);var c=A(u-s*f(o));return(null!==c&&Math.abs(c)<Math.abs(i)||null===i)&&(i=c),h(i)}function A(n,t){if(null==t&&(t=h(T)),!S(n)||null===n)return null;n=Math.round(n);var e=z(t),r=e.abs,a=e.rel,o=e.origin,u=O(n),d=(t%i+i)%i,l=c[o],f=Math.floor((n-(r-a))/s)*i;return h(l-d-l+c[u]+f+(o===s?i:0))}function S(n){return D(n)===n}function D(n){return l(n,p,m)}function L(){return o.loop}function O(n){return(n%s+s)%s}function _(t){var e;e=t-T,w.push({distance:e,timestamp:a()}),w.length>6&&(w=w.slice(-6)),T=h(t);var i=P().abs;if(i!==M){var r=null!==M;M=i,r&&n.emit("slideChanged")}}function P(e){var a=e?null:function(){if(s){var n=L(),t=n?(T%i+i)%i:T,e=(n?T%i:T)-u[0][2],a=0-(e<0&&n?i-Math.abs(e):e),c=0,d=z(T),l=d.abs,v=d.rel,h=u[v][2],k=u.map((function(t,e){var r=a+c;(r<0-t[0]||r>1)&&(r+=(Math.abs(r)>i-1&&n?i:0)*f(-r));var u=e-v,d=f(u),p=u+l;n&&(-1===d&&r>h&&(p+=s),1===d&&r<h&&(p-=s),null!==g&&p<g&&(r+=i),null!==b&&p>b&&(r-=i));var m=r+t[0]+t[1],x=Math.max(r>=0&&m<=1?1:m<0||r>1?0:r<0?Math.min(1,(t[0]+r)/t[0]):(1-r)/t[0],0);return c+=t[0]+t[1],{abs:p,distance:o.rtl?-1*r+1-t[0]:r,portion:x,size:t[0]}}));return l=D(l),v=O(l),{abs:D(l),length:r,max:y,maxIdx:m,min:x,minIdx:p,position:T,progress:n?t/i:T/r,rel:v,slides:k,slidesLength:i}}}();return t.details=a,n.emit("detailsChanged"),a}return t={absToRel:O,add:C,details:null,distToIdx:E,idxToDist:I,init:function(t){if(function(){if(o=n.options,u=(o.trackConfig||[]).map((function(n){return[v(n,"size",1),v(n,"spacing",0),v(n,"origin",0)]})),s=u.length){i=h(u.reduce((function(n,t){return n+t[0]+t[1]}),0));var t,e=s-1;r=h(i+u[0][2]-u[e][0]-u[e][2]-u[e][1]),c=u.reduce((function(n,e){if(!n)return[0];var i=u[n.length-1],r=n[n.length-1]+(i[0]+i[2])+i[1];return r-=e[2],n[n.length-1]>r&&(r=n[n.length-1]),r=h(r),n.push(r),(!t||t<r)&&(d=n.length-1),t=r,n}),null),0===r&&(d=0),c.push(h(i))}}(),!s)return P(!0);var e;!function(){var t=n.options.range,e=n.options.loop;g=p=e?v(e,"min",-k):0,b=m=e?v(e,"max",k):d;var i=v(t,"min",null),r=v(t,"max",null);null!==i&&(p=i),null!==r&&(m=r),x=p===-k?p:n.track.idxToDist(p||0,!0,0),y=m===k?m:I(m,!0,0),null===r&&(b=m),v(t,"align",!1)&&m!==k&&0===u[O(m)][2]&&(y-=1-u[O(m)][0],m=E(y-T)),x=h(x),y=h(y)}(),e=t,Number(e)===e?C(A(D(t))):P()},to:_,velocity:function(){var n=a(),t=w.reduce((function(t,e){var i=e.distance,r=e.timestamp;return n-r>200||(f(i)!==f(t.distance)&&t.distance&&(t={distance:0,lastTimestamp:0,time:0}),t.time&&(t.distance+=i),t.lastTimestamp&&(t.time+=r-t.lastTimestamp),t.lastTimestamp=r),t}),{distance:0,lastTimestamp:0,time:0});return t.distance/t.time||0}}}function b(n){var t,e,i,r,a,o,u,s;function c(n){return 2*n}function d(n){return l(n,u,s)}function p(n){return 1-Math.pow(1-n,3)}function v(){return i?n.track.velocity():0}function h(){b();var t="free-snap"===n.options.mode,e=n.track,i=v();r=f(i);var u=n.track.details,s=[];if(i||!t){var l=m(i),h=l.dist,g=l.dur;if(g=c(g),h*=r,t){var x=e.idxToDist(e.distToIdx(h),!0);x&&(h=x)}s.push({distance:h,duration:g,easing:p});var y=u.position,k=y+h;if(k<a||k>o){var w=k<a?a-y:o-y,M=0,T=i;if(f(w)===r){var C=Math.min(Math.abs(w)/Math.abs(h),1),E=function(n){return 1-Math.pow(1-n,1/3)}(C)*g;s[0].earlyExit=E,T=i*(1-C)}else s[0].earlyExit=0,M+=w;var z=m(T,100),I=z.dist*r;n.options.rubberband&&(s.push({distance:I,duration:c(z.dur),easing:p}),s.push({distance:-I+M,duration:500,easing:p}))}n.animator.start(s)}else n.moveToIdx(d(u.abs),!0,{duration:500,easing:function(n){return 1+--n*n*n*n*n}})}function m(n,t){void 0===t&&(t=1e3);var e=147e-9+(n=Math.abs(n))/t;return{dist:Math.pow(n,2)/e,dur:n/e}}function g(){var t=n.track.details;t&&(a=t.min,o=t.max,u=t.minIdx,s=t.maxIdx)}function b(){n.animator.stop()}n.on("updated",g),n.on("optionsChanged",g),n.on("created",g),n.on("dragStarted",(function(){i=!1,b(),t=e=n.track.details.abs})),n.on("dragChecked",(function(){i=!0})),n.on("dragEnded",(function(){var i=n.options.mode;"snap"===i&&function(){var i=n.track,r=n.track.details,u=r.position,s=f(v());(u>o||u<a)&&(s=0);var c=t+s;0===r.slides[i.absToRel(c)].portion&&(c-=s),t!==e&&(c=e),f(i.idxToDist(c,!0))!==s&&(c+=s),c=d(c);var l=i.idxToDist(c,!0);n.animator.start([{distance:l,duration:500,easing:function(n){return 1+--n*n*n*n*n}}])}(),"free"!==i&&"free-snap"!==i||h()})),n.on("dragged",(function(){e=n.track.details.abs}))}function x(n){var t,e,i,r,a,o,p,v,h,m,g,b,x,y,k,w,M,T,C=d(),E=2;function z(t){if(o&&v===t.id){var u=D(t);if(h){if(!S(t))return A(t);m=u,h=!1,n.emit("dragChecked")}if(w)return m=u;s(t);var d=function(t){if(M===-1/0&&T===1/0)return t;var i=n.track.details,o=i.length,u=i.position,s=l(t,M-u,T-u);if(0===o)return 0;if(!n.options.rubberband)return s;if(u<=T&&u>=M)return t;if(u<M&&e>0||u>T&&e<0)return t;var c=(u<M?u-M:u-T)/o,d=r*o,f=Math.abs(c*d),p=Math.max(0,1-f/a*E);return p*p*t}(p(m-u)/r*i);e=f(d);var x=n.track.details.position;(x>M&&x<T||x===M&&e>0||x===T&&e<0)&&c(t),g+=d,!b&&Math.abs(g*r)>5&&(b=!0),n.track.add(d),m=u,n.emit("dragged")}}function I(t){!o&&n.track.details&&n.track.details.length&&(g=0,o=!0,b=!1,h=!0,v=t.id,S(t),m=D(t),n.emit("dragStarted"))}function A(t){o&&v===t.idChanged&&(o=!1,n.emit("dragEnded"))}function S(n){var t=L(),e=t?n.y:n.x,i=t?n.x:n.y,r=void 0!==x&&void 0!==y&&Math.abs(y-i)<=Math.abs(x-e);return x=e,y=i,r}function D(n){return L()?n.y:n.x}function L(){return n.options.vertical}function O(){r=n.size,a=L()?window.innerHeight:window.innerWidth;var t=n.track.details;t&&(M=t.min,T=t.max)}function _(n){b&&(c(n),s(n))}function P(){if(C.purge(),n.options.drag&&!n.options.disabled){var e;e=n.options.dragSpeed||1,p="function"==typeof e?e:function(n){return n*e},i=n.options.rtl?-1:1,O(),t=n.container,function(){var n="data-keen-slider-clickable";u("[".concat(n,"]:not([").concat(n,"=false])"),t).map((function(n){C.add(n,"dragstart",c),C.add(n,"mousedown",c),C.add(n,"touchstart",c)}))}(),C.add(t,"dragstart",(function(n){s(n)})),C.add(t,"click",_,{capture:!0}),C.input(t,"ksDragStart",I),C.input(t,"ksDrag",z),C.input(t,"ksDragEnd",A),C.input(t,"mousedown",I),C.input(t,"mousemove",z),C.input(t,"mouseleave",A),C.input(t,"mouseup",A),C.input(t,"touchstart",I,{passive:!0}),C.input(t,"touchmove",z,{passive:!1}),C.input(t,"touchend",A),C.input(t,"touchcancel",A),C.add(window,"wheel",(function(n){o&&s(n)}));var r="data-keen-slider-scrollable";u("[".concat(r,"]:not([").concat(r,"=false])"),n.container).map((function(n){return function(n){var t;C.input(n,"touchstart",(function(n){t=D(n),w=!0,k=!0}),{passive:!0}),C.input(n,"touchmove",(function(e){var i=L(),r=i?n.scrollHeight-n.clientHeight:n.scrollWidth-n.clientWidth,a=t-D(e),o=i?n.scrollTop:n.scrollLeft,u=i&&"scroll"===n.style.overflowY||!i&&"scroll"===n.style.overflowX;if(t=D(e),(a<0&&o>0||a>0&&o<r)&&k&&u)return w=!0;k=!1,s(e),w=!1})),C.input(n,"touchend",(function(){w=!1}))}(n)}))}}n.on("updated",O),n.on("optionsChanged",P),n.on("created",P),n.on("destroyed",C.purge)}function y(n){var t,e,i=null;function r(t,e,i){n.animator.active?o(t,e,i):requestAnimationFrame((function(){return o(t,e,i)}))}function a(){r(!1,!1,e)}function o(e,r,a){var o=0,u=n.size,d=n.track.details;if(d&&t){var l=d.slides;t.forEach((function(n,t){if(e)!i&&r&&s(n,null,a),c(n,null,a);else{if(!l[t])return;var d=l[t].size*u;!i&&r&&s(n,d,a),c(n,l[t].distance*u-o,a),o+=d}}))}}function u(t){return"performance"===n.options.renderMode?Math.round(t):t}function s(n,t,e){var i=e?"height":"width";null!==t&&(t=u(t)+"px"),n.style["min-"+i]=t,n.style["max-"+i]=t}function c(n,t,e){if(null!==t){t=u(t);var i=e?t:0;t="translate3d(".concat(e?0:t,"px, ").concat(i,"px, 0)")}n.style.transform=t,n.style["-webkit-transform"]=t}function d(){t&&(o(!0,!0,e),t=null),n.on("detailsChanged",a,!0)}function l(){r(!1,!0,e)}function f(){d(),e=n.options.vertical,n.options.disabled||"custom"===n.options.renderMode||(i="auto"===v(n.options.slides,"perView",null),n.on("detailsChanged",a),(t=n.slides).length&&l())}n.on("created",f),n.on("optionsChanged",f),n.on("beforeOptionsChanged",(function(){d()})),n.on("updated",l),n.on("destroyed",d)}function k(n,e){return function(i){var r,a,s,c,l,f,h=d();function m(n){var t;o(i.container,"reverse","rtl"!==(t=i.container,window.getComputedStyle(t,null).getPropertyValue("direction"))||n?null:""),o(i.container,"v",i.options.vertical&&!n?"":null),o(i.container,"disabled",i.options.disabled&&!n?"":null)}function g(){b()&&M()}function b(){var n=null;if(c.forEach((function(t){t.matches&&(n=t.__media)})),n===r)return!1;r||i.emit("beforeOptionsChanged"),r=n;var e=n?s.breakpoints[n]:s;return i.options=t(t({},s),e),m(),I(),A(),C(),!0}function x(n){var t=p(n);return(i.options.vertical?t.height:t.width)/i.size||1}function y(){return i.options.trackConfig.length}function k(n){for(var o in r=!1,s=t(t({},e),n),h.purge(),a=i.size,c=[],s.breakpoints||[]){var u=window.matchMedia(o);u.__media=o,c.push(u),h.add(u,"change",g)}h.add(window,"orientationchange",z),h.add(window,"resize",E),b()}function w(n){i.animator.stop();var t=i.track.details;i.track.init(null!=n?n:t?t.abs:0)}function M(n){w(n),i.emit("optionsChanged")}function T(n,t){if(n)return k(n),void M(t);I(),A();var e=y();C(),y()!==e?M(t):w(t),i.emit("updated")}function C(){var n=i.options.slides;if("function"==typeof n)return i.options.trackConfig=n(i.size,i.slides);var t=i.slides,e=t.length,r="number"==typeof n?n:v(n,"number",e,!0),a=[],o=v(n,"perView",1,!0),u="number"==typeof o?v(n,"numberOfFullWidthShow",o,!0):o,s=v(n,"spacing",0,!0)/i.size||0,c="auto"===o?s:s/o,d=0;"number"==typeof u&&(d=s*(Math.floor(u)-1));for(var l=v(n,"origin","auto"),f=0,p=0;p<r;p++){var h="auto"===o?x(t[p]):1/o-s+c,m="center"===l?"number"==typeof u?.5-d/2-Math.floor(u)*h/2:.5-h/2:"auto"===l?0:l;a.push({origin:m,size:h,spacing:s}),f+=h}if(f+=s*(r-1),"auto"===l&&!i.options.loop&&1!==o){var g=0;a.map((function(n){var t=f-g;return g+=n.size+s,t>=1||(n.origin=1-t-(f>1?0:1-f)),n}))}console.log("carousel computed config",a),i.options.trackConfig=a}function E(){I();var n=i.size;i.options.disabled||n===a||(a=n,T())}function z(){E(),setTimeout(E,500),setTimeout(E,2e3)}function I(){var n=p(i.container);i.size=(i.options.vertical?n.height:n.width)||1}function A(){i.slides=u(i.options.selector,i.container)}i.container=(f=u(n,l||document)).length?f[0]:null,i.destroy=function(){h.purge(),i.emit("destroyed"),m(!0)},i.prev=function(){i.moveToIdx(i.track.details.abs-1,!0)},i.next=function(){i.moveToIdx(i.track.details.abs+1,!0)},i.update=T,k(i.options)}}"function"==typeof SuppressedError&&SuppressedError;var w=function(n,t,i){try{return function(n,t){var e,i={};return e={emit:function(n){i[n]&&i[n].forEach((function(n){n(e)}));var t=e.options&&e.options[n];t&&t(e)},moveToIdx:function(n,t,i){var r=e.track.idxToDist(n,t);if(r){var a=e.options.defaultAnimation;e.animator.start([{distance:r,duration:v(i||a,"duration",500),easing:v(i||a,"easing",(function(n){return 1+--n*n*n*n*n}))}])}},on:function(n,t,e){void 0===e&&(e=!1),i[n]||(i[n]=[]);var r=i[n].indexOf(t);r>-1?e&&delete i[n][r]:e||i[n].push(t)},options:n},function(){if(e.track=g(e),e.animator=m(e),t)for(var n=0,i=t;n<i.length;n++)(0,i[n])(e);e.track.init(e.options.initial||0),e.emit("created")}(),e}(t,e([k(n,{drag:!0,mode:"snap",renderMode:"precision",rubberband:!0,selector:".keen-slider__slide"}),y,x,b],i||[],!0))}catch(n){console.error(n)}};exports.useKeenSlider=function(t,e){var i=n.ref(),r=n.ref();return n.isRef(t)&&n.watch(t,(function(n,t){r.value&&r.value.update(n)})),n.onMounted((function(){i.value&&(r.value=new w(i.value,n.isRef(t)?t.value:t,e))})),n.onUnmounted((function(){r.value&&r.value.destroy()})),[i,r]};
