import{ref as n,isRef as t,watch as i,onMounted as e,onUnmounted as r}from"vue";var a=function(){return a=Object.assign||function(n){for(var t,i=1,e=arguments.length;i<e;i++)for(var r in t=arguments[i])Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r]);return n},a.apply(this,arguments)};function o(n,t,i){if(i||2===arguments.length)for(var e,r=0,a=t.length;r<a;r++)!e&&r in t||(e||(e=Array.prototype.slice.call(t,0,r)),e[r]=t[r]);return n.concat(e||Array.prototype.slice.call(t))}function u(n){return Array.prototype.slice.call(n)}function s(n,t){var i=Math.floor(n);return i===t||i+1===t?n:t}function c(){return Date.now()}function d(n,t,i){if(t="data-keen-slider-"+t,null===i)return n.removeAttribute(t);n.setAttribute(t,i||"")}function l(n,t){return t=t||document,"function"==typeof n&&(n=n(t)),Array.isArray(n)?n:"string"==typeof n?u(t.querySelectorAll(n)):n instanceof HTMLElement?[n]:n instanceof NodeList?u(n):[]}function f(n){n.raw&&(n=n.raw),n.cancelable&&!n.defaultPrevented&&n.preventDefault()}function p(n){n.raw&&(n=n.raw),n.stopPropagation&&n.stopPropagation()}function v(){var n=[];return{add:function(t,i,e,r){t.addListener?t.addListener(e):t.addEventListener(i,e,r),n.push([t,i,e,r])},input:function(n,t,i,e){this.add(n,t,function(n){return function(t){t.nativeEvent&&(t=t.nativeEvent);var i=t.changedTouches||[],e=t.targetTouches||[],r=t.detail&&t.detail.x?t.detail:null;return n({id:r?r.identifier?r.identifier:"i":e[0]?e[0]?e[0].identifier:"e":"d",idChanged:r?r.identifier?r.identifier:"i":i[0]?i[0]?i[0].identifier:"e":"d",raw:t,x:r&&r.x?r.x:e[0]?e[0].screenX:r?r.x:t.pageX,y:r&&r.y?r.y:e[0]?e[0].screenY:r?r.y:t.pageY})}}(i),e)},purge:function(){n.forEach((function(n){n[0].removeListener?n[0].removeListener(n[2]):n[0].removeEventListener(n[1],n[2],n[3])})),n=[]}}}function h(n,t,i){return Math.min(Math.max(n,t),i)}function m(n){return(n>0?1:0)-(n<0?1:0)||+n}function g(n){var t=n.getBoundingClientRect();return{height:s(t.height,n.offsetHeight),width:s(t.width,n.offsetWidth)}}function b(n,t,i,e){var r=n&&n[t];return null==r?i:e&&"function"==typeof r?r():r}function x(n){return Math.round(1e6*n)/1e6}function y(n){var t,i,e,r,a,o;function u(t){o||(o=t),s(!0);var a=t-o;a>e&&(a=e);var l=r[i];if(l[3]<a)return i++,u(t);var f=l[2],p=l[4],v=l[0],h=l[1]*(0,l[5])(0===p?1:(a-f)/p);if(h&&n.track.to(v+h),a<e)return d();o=null,s(!1),c(null),n.emit("animationEnded")}function s(n){t.active=n}function c(n){t.targetIdx=n}function d(){var n;n=u,a=window.requestAnimationFrame(n)}function l(){var t;t=a,window.cancelAnimationFrame(t),s(!1),c(null),o&&n.emit("animationStopped"),o=null}return t={active:!1,start:function(t){if(l(),n.track.details){var a=0,o=n.track.details.position;i=0,e=0,r=t.map((function(n){var t,i=Number(o),r=null!==(t=n.earlyExit)&&void 0!==t?t:n.duration,u=n.easing,s=n.distance*u(r/n.duration)||0;o+=s;var c=e;return e+=r,a+=s,[i,n.distance,c,e,n.duration,u]})),c(n.track.distToIdx(a)),d(),n.emit("animationStarted")}},stop:l,targetIdx:null}}function k(n){var t,i,e,r,a,u,s,d,l,f,p,v,g,y,k=1/0,w=[],M=null,T=0;function C(n){_(T+n)}function E(n){var t=z(T+n).abs;return D(t)?t:null}function z(n){var t=Math.floor(Math.abs(x(n/i))),e=x((n%i+i)%i);e===i&&(e=0);var r=m(n),a=s.indexOf(o([],s,!0).reduce((function(n,t){return Math.abs(t-e)<Math.abs(n-e)?t:n}))),c=a;return r<0&&t++,a===u&&(c=0,t+=r>0?1:-1),{abs:c+t*u*r,origin:a,rel:c}}function I(n,t,i){var e;if(t||!L())return A(n,i);if(!D(n))return null;var r=z(null!=i?i:T),a=r.abs,o=n-r.rel,s=a+o;e=A(s);var c=A(s-u*m(o));return(null!==c&&Math.abs(c)<Math.abs(e)||null===e)&&(e=c),x(e)}function A(n,t){if(null==t&&(t=x(T)),!D(n)||null===n)return null;n=Math.round(n);var e=z(t),r=e.abs,a=e.rel,o=e.origin,c=O(n),d=(t%i+i)%i,l=s[o],f=Math.floor((n-(r-a))/u)*i;return x(l-d-l+s[c]+f+(o===u?i:0))}function D(n){return S(n)===n}function S(n){return h(n,l,f)}function L(){return r.loop}function O(n){return(n%u+u)%u}function _(t){var i;i=t-T,w.push({distance:i,timestamp:c()}),w.length>6&&(w=w.slice(-6)),T=x(t);var e=H().abs;if(e!==M){var r=null!==M;M=e,r&&n.emit("slideChanged")}}function H(o){var s=o?null:function(){if(u){var n=L(),t=n?(T%i+i)%i:T,o=(n?T%i:T)-a[0][2],s=0-(o<0&&n?i-Math.abs(o):o),c=0,d=z(T),h=d.abs,b=d.rel,x=a[b][2],k=a.map((function(t,e){var a=s+c;(a<0-t[0]||a>1)&&(a+=(Math.abs(a)>i-1&&n?i:0)*m(-a));var o=e-b,d=m(o),l=o+h;n&&(-1===d&&a>x&&(l+=u),1===d&&a<x&&(l-=u),null!==p&&l<p&&(a+=i),null!==v&&l>v&&(a-=i));var f=a+t[0]+t[1],g=Math.max(a>=0&&f<=1?1:f<0||a>1?0:a<0?Math.min(1,(t[0]+a)/t[0]):(1-a)/t[0],0);return c+=t[0]+t[1],{abs:l,distance:r.rtl?-1*a+1-t[0]:a,portion:g,size:t[0]}}));return h=S(h),b=O(h),{abs:S(h),length:e,max:y,maxIdx:f,min:g,minIdx:l,position:T,progress:n?t/i:T/e,rel:b,slides:k,slidesLength:i}}}();return t.details=s,n.emit("detailsChanged"),s}return t={absToRel:O,add:C,details:null,distToIdx:E,idxToDist:I,init:function(t){if(function(){if(r=n.options,a=(r.trackConfig||[]).map((function(n){return[b(n,"size",1),b(n,"spacing",0),b(n,"origin",0)]})),u=a.length){i=x(a.reduce((function(n,t){return n+t[0]+t[1]}),0));var t,o=u-1;e=x(i+a[0][2]-a[o][0]-a[o][2]-a[o][1]),s=a.reduce((function(n,i){if(!n)return[0];var e=a[n.length-1],r=n[n.length-1]+(e[0]+e[2])+e[1];return r-=i[2],n[n.length-1]>r&&(r=n[n.length-1]),r=x(r),n.push(r),(!t||t<r)&&(d=n.length-1),t=r,n}),null),0===e&&(d=0),s.push(x(i))}}(),!u)return H(!0);var o;!function(){var t=n.options.range,i=n.options.loop;p=l=i?b(i,"min",-k):0,v=f=i?b(i,"max",k):d;var e=b(t,"min",null),r=b(t,"max",null);null!==e&&(l=e),null!==r&&(f=r),g=l===-k?l:n.track.idxToDist(l||0,!0,0),y=f===k?f:I(f,!0,0),null===r&&(v=f),b(t,"align",!1)&&f!==k&&0===a[O(f)][2]&&(y-=1-a[O(f)][0],f=E(y-T)),g=x(g),y=x(y)}(),o=t,Number(o)===o?C(A(S(t))):H()},to:_,velocity:function(){var n=c(),t=w.reduce((function(t,i){var e=i.distance,r=i.timestamp;return n-r>200||(m(e)!==m(t.distance)&&t.distance&&(t={distance:0,lastTimestamp:0,time:0}),t.time&&(t.distance+=e),t.lastTimestamp&&(t.time+=r-t.lastTimestamp),t.lastTimestamp=r),t}),{distance:0,lastTimestamp:0,time:0});return t.distance/t.time||0}}}function w(n){var t,i,e,r,a,o,u,s;function c(n){return 2*n}function d(n){return h(n,u,s)}function l(n){return 1-Math.pow(1-n,3)}function f(){return e?n.track.velocity():0}function p(){b();var t="free-snap"===n.options.mode,i=n.track,e=f();r=m(e);var u=n.track.details,s=[];if(e||!t){var p=v(e),h=p.dist,g=p.dur;if(g=c(g),h*=r,t){var x=i.idxToDist(i.distToIdx(h),!0);x&&(h=x)}s.push({distance:h,duration:g,easing:l});var y=u.position,k=y+h;if(k<a||k>o){var w=k<a?a-y:o-y,M=0,T=e;if(m(w)===r){var C=Math.min(Math.abs(w)/Math.abs(h),1),E=function(n){return 1-Math.pow(1-n,1/3)}(C)*g;s[0].earlyExit=E,T=e*(1-C)}else s[0].earlyExit=0,M+=w;var z=v(T,100),I=z.dist*r;n.options.rubberband&&(s.push({distance:I,duration:c(z.dur),easing:l}),s.push({distance:-I+M,duration:500,easing:l}))}n.animator.start(s)}else n.moveToIdx(d(u.abs),!0,{duration:500,easing:function(n){return 1+--n*n*n*n*n}})}function v(n,t){void 0===t&&(t=1e3);var i=147e-9+(n=Math.abs(n))/t;return{dist:Math.pow(n,2)/i,dur:n/i}}function g(){var t=n.track.details;t&&(a=t.min,o=t.max,u=t.minIdx,s=t.maxIdx)}function b(){n.animator.stop()}n.on("updated",g),n.on("optionsChanged",g),n.on("created",g),n.on("dragStarted",(function(){e=!1,b(),t=i=n.track.details.abs})),n.on("dragChecked",(function(){e=!0})),n.on("dragEnded",(function(){var e=n.options.mode;"snap"===e&&function(){var e=n.track,r=n.track.details,u=r.position,s=m(f());(u>o||u<a)&&(s=0);var c=t+s;0===r.slides[e.absToRel(c)].portion&&(c-=s),t!==i&&(c=i),m(e.idxToDist(c,!0))!==s&&(c+=s),c=d(c);var l=e.idxToDist(c,!0);n.animator.start([{distance:l,duration:500,easing:function(n){return 1+--n*n*n*n*n}}])}(),"free"!==e&&"free-snap"!==e||p()})),n.on("dragged",(function(){i=n.track.details.abs}))}function M(n){var t,i,e,r,a,o,u,s,c,d,g,b,x,y,k,w,M,T,C=v(),E=2;function z(t){if(o&&s===t.id){var l=S(t);if(c){if(!D(t))return A(t);d=l,c=!1,n.emit("dragChecked")}if(w)return d=l;f(t);var v=function(t){if(M===-1/0&&T===1/0)return t;var e=n.track.details,o=e.length,u=e.position,s=h(t,M-u,T-u);if(0===o)return 0;if(!n.options.rubberband)return s;if(u<=T&&u>=M)return t;if(u<M&&i>0||u>T&&i<0)return t;var c=(u<M?u-M:u-T)/o,d=r*o,l=Math.abs(c*d),f=Math.max(0,1-l/a*E);return f*f*t}(u(d-l)/r*e);i=m(v);var x=n.track.details.position;(x>M&&x<T||x===M&&i>0||x===T&&i<0)&&p(t),g+=v,!b&&Math.abs(g*r)>5&&(b=!0),n.track.add(v),d=l,n.emit("dragged")}}function I(t){!o&&n.track.details&&n.track.details.length&&(g=0,o=!0,b=!1,c=!0,s=t.id,D(t),d=S(t),n.emit("dragStarted"))}function A(t){o&&s===t.idChanged&&(o=!1,n.emit("dragEnded"))}function D(n){var t=L(),i=t?n.y:n.x,e=t?n.x:n.y,r=void 0!==x&&void 0!==y&&Math.abs(y-e)<=Math.abs(x-i);return x=i,y=e,r}function S(n){return L()?n.y:n.x}function L(){return n.options.vertical}function O(){r=n.size,a=L()?window.innerHeight:window.innerWidth;var t=n.track.details;t&&(M=t.min,T=t.max)}function _(n){b&&(p(n),f(n))}function H(){if(C.purge(),n.options.drag&&!n.options.disabled){var i;i=n.options.dragSpeed||1,u="function"==typeof i?i:function(n){return n*i},e=n.options.rtl?-1:1,O(),t=n.container,function(){var n="data-keen-slider-clickable";l("[".concat(n,"]:not([").concat(n,"=false])"),t).map((function(n){C.add(n,"dragstart",p),C.add(n,"mousedown",p),C.add(n,"touchstart",p)}))}(),C.add(t,"dragstart",(function(n){f(n)})),C.add(t,"click",_,{capture:!0}),C.input(t,"ksDragStart",I),C.input(t,"ksDrag",z),C.input(t,"ksDragEnd",A),C.input(t,"mousedown",I),C.input(t,"mousemove",z),C.input(t,"mouseleave",A),C.input(t,"mouseup",A),C.input(t,"touchstart",I,{passive:!0}),C.input(t,"touchmove",z,{passive:!1}),C.input(t,"touchend",A),C.input(t,"touchcancel",A),C.add(window,"wheel",(function(n){o&&f(n)}));var r="data-keen-slider-scrollable";l("[".concat(r,"]:not([").concat(r,"=false])"),n.container).map((function(n){return function(n){var t;C.input(n,"touchstart",(function(n){t=S(n),w=!0,k=!0}),{passive:!0}),C.input(n,"touchmove",(function(i){var e=L(),r=e?n.scrollHeight-n.clientHeight:n.scrollWidth-n.clientWidth,a=t-S(i),o=e?n.scrollTop:n.scrollLeft,u=e&&"scroll"===n.style.overflowY||!e&&"scroll"===n.style.overflowX;if(t=S(i),(a<0&&o>0||a>0&&o<r)&&k&&u)return w=!0;k=!1,f(i),w=!1})),C.input(n,"touchend",(function(){w=!1}))}(n)}))}}n.on("updated",O),n.on("optionsChanged",H),n.on("created",H),n.on("destroyed",C.purge)}function T(n){var t,i,e=null;function r(t,i,e){n.animator.active?o(t,i,e):requestAnimationFrame((function(){return o(t,i,e)}))}function a(){r(!1,!1,i)}function o(i,r,a){var o=0,u=n.size,d=n.track.details;if(d&&t){var l=d.slides;t.forEach((function(n,t){if(i)!e&&r&&s(n,null,a),c(n,null,a);else{if(!l[t])return;var d=l[t].size*u;!e&&r&&s(n,d,a),c(n,l[t].distance*u-o,a),o+=d}}))}}function u(t){return"performance"===n.options.renderMode?Math.round(t):t}function s(n,t,i){var e=i?"height":"width";null!==t&&(t=u(t)+"px"),n.style["min-"+e]=t,n.style["max-"+e]=t}function c(n,t,i){if(null!==t){t=u(t);var e=i?t:0;t="translate3d(".concat(i?0:t,"px, ").concat(e,"px, 0)")}n.style.transform=t,n.style["-webkit-transform"]=t}function d(){t&&(o(!0,!0,i),t=null),n.on("detailsChanged",a,!0)}function l(){r(!1,!0,i)}function f(){d(),i=n.options.vertical,n.options.disabled||"custom"===n.options.renderMode||(e="auto"===b(n.options.slides,"perView",null),n.on("detailsChanged",a),(t=n.slides).length&&l())}n.on("created",f),n.on("optionsChanged",f),n.on("beforeOptionsChanged",(function(){d()})),n.on("updated",l),n.on("destroyed",d)}function C(n,t){return function(i){var e,r,o,u,s,c,f=v();function p(n){var t;d(i.container,"reverse","rtl"!==(t=i.container,window.getComputedStyle(t,null).getPropertyValue("direction"))||n?null:""),d(i.container,"v",i.options.vertical&&!n?"":null),d(i.container,"disabled",i.options.disabled&&!n?"":null)}function h(){m()&&M()}function m(){var n=null;if(u.forEach((function(t){t.matches&&(n=t.__media)})),n===e)return!1;e||i.emit("beforeOptionsChanged"),e=n;var t=n?o.breakpoints[n]:o;return i.options=a(a({},o),t),p(),I(),A(),C(),!0}function x(n){var t=g(n);return(i.options.vertical?t.height:t.width)/i.size||1}function y(){return i.options.trackConfig.length}function k(n){for(var s in e=!1,o=a(a({},t),n),f.purge(),r=i.size,u=[],o.breakpoints||[]){var c=window.matchMedia(s);c.__media=s,u.push(c),f.add(c,"change",h)}f.add(window,"orientationchange",z),f.add(window,"resize",E),m()}function w(n){i.animator.stop();var t=i.track.details;i.track.init(null!=n?n:t?t.abs:0)}function M(n){w(n),i.emit("optionsChanged")}function T(n,t){if(n)return k(n),void M(t);I(),A();var e=y();C(),y()!==e?M(t):w(t),i.emit("updated")}function C(){var n=i.options.slides;if("function"==typeof n)return i.options.trackConfig=n(i.size,i.slides);var t=i.slides,e=t.length,r="number"==typeof n?n:b(n,"number",e,!0),a=[],o=b(n,"perView",1,!0),u="number"==typeof o?b(n,"numberOfFullWidthShow",o,!0):o,s=b(n,"spacing",0,!0)/i.size||0,c="auto"===o?s:s/o,d=0;"number"==typeof u&&(d=s*(Math.floor(u)-1));for(var l=b(n,"origin","auto"),f=0,p=0;p<r;p++){var v="auto"===o?x(t[p]):1/o-s+c,h="center"===l?"number"==typeof u?.5-d/2-Math.floor(u)*v/2:.5-v/2:"auto"===l?0:l;a.push({origin:h,size:v,spacing:s}),f+=v}if(f+=s*(r-1),"auto"===l&&!i.options.loop&&1!==o){var m=0;a.map((function(n){var t=f-m;return m+=n.size+s,t>=1||(n.origin=1-t-(f>1?0:1-f)),n}))}i.options.trackConfig=a}function E(){I();var n=i.size;i.options.disabled||n===r||(r=n,T())}function z(){E(),setTimeout(E,500),setTimeout(E,2e3)}function I(){var n=g(i.container);i.size=(i.options.vertical?n.height:n.width)||1}function A(){i.slides=l(i.options.selector,i.container)}i.container=(c=l(n,s||document)).length?c[0]:null,i.destroy=function(){f.purge(),i.emit("destroyed"),p(!0)},i.prev=function(){i.moveToIdx(i.track.details.abs-1,!0)},i.next=function(){i.moveToIdx(i.track.details.abs+1,!0)},i.update=T,k(i.options)}}"function"==typeof SuppressedError&&SuppressedError;var E=function(n,t,i){try{return function(n,t){var i,e={};return i={emit:function(n){e[n]&&e[n].forEach((function(n){n(i)}));var t=i.options&&i.options[n];t&&t(i)},moveToIdx:function(n,t,e){var r=i.track.idxToDist(n,t);if(r){var a=i.options.defaultAnimation;i.animator.start([{distance:r,duration:b(e||a,"duration",500),easing:b(e||a,"easing",(function(n){return 1+--n*n*n*n*n}))}])}},on:function(n,t,i){void 0===i&&(i=!1),e[n]||(e[n]=[]);var r=e[n].indexOf(t);r>-1?i&&delete e[n][r]:i||e[n].push(t)},options:n},function(){if(i.track=k(i),i.animator=y(i),t)for(var n=0,e=t;n<e.length;n++)(0,e[n])(i);i.track.init(i.options.initial||0),i.emit("created")}(),i}(t,o([C(n,{drag:!0,mode:"snap",renderMode:"precision",rubberband:!0,selector:".keen-slider__slide"}),T,M,w],i||[],!0))}catch(n){console.error(n)}};function z(a,o){var u=n(),s=n();return t(a)&&i(a,(function(n,t){s.value&&s.value.update(n)})),e((function(){u.value&&(s.value=new E(u.value,t(a)?a.value:a,o))})),r((function(){s.value&&s.value.destroy()})),[u,s]}export{z as useKeenSlider};
