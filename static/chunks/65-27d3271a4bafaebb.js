(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[65],{8418:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,a=[],u=!0,i=!1;try{for(n=n.call(e);!(u=(r=n.next()).done)&&(a.push(r.value),!t||a.length!==t);u=!0);}catch(c){i=!0,o=c}finally{try{u||null==n.return||n.return()}finally{if(i)throw o}}return a}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}t.default=void 0;var a,u=(a=n(7294))&&a.__esModule?a:{default:a},i=n(6273),c=n(387),l=n(7190);var f={};function s(e,t,n,r){if(e&&i.isLocalURL(t)){e.prefetch(t,n,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;f[t+"%"+n+(o?"%"+o:"")]=!0}}var v=function(e){var t,n=!1!==e.prefetch,r=c.useRouter(),a=u.default.useMemo((function(){var t=o(i.resolveHref(r,e.href,!0),2),n=t[0],a=t[1];return{href:n,as:e.as?i.resolveHref(r,e.as):a||n}}),[r,e.href,e.as]),v=a.href,d=a.as,p=e.children,h=e.replace,g=e.shallow,m=e.scroll,y=e.locale;"string"===typeof p&&(p=u.default.createElement("a",null,p));var b=(t=u.default.Children.only(p))&&"object"===typeof t&&t.ref,w=o(l.useIntersection({rootMargin:"200px"}),2),S=w[0],E=w[1],k=u.default.useCallback((function(e){S(e),b&&("function"===typeof b?b(e):"object"===typeof b&&(b.current=e))}),[b,S]);u.default.useEffect((function(){var e=E&&n&&i.isLocalURL(v),t="undefined"!==typeof y?y:r&&r.locale,o=f[v+"%"+d+(t?"%"+t:"")];e&&!o&&s(r,v,d,{locale:t})}),[d,v,E,y,n,r]);var M={ref:k,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,n,r,o,a,u,c){("A"!==e.currentTarget.nodeName.toUpperCase()||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&i.isLocalURL(n))&&(e.preventDefault(),t[o?"replace":"push"](n,r,{shallow:a,locale:c,scroll:u}))}(e,r,v,d,h,g,m,y)},onMouseEnter:function(e){t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),i.isLocalURL(v)&&s(r,v,d,{priority:!0})}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var L="undefined"!==typeof y?y:r&&r.locale,T=r&&r.isLocaleDomain&&i.getDomainLocale(d,L,r&&r.locales,r&&r.domainLocales);M.href=T||i.addBasePath(i.addLocale(d,L,r&&r.defaultLocale))}return u.default.cloneElement(t,M)};t.default=v},7190:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,a=[],u=!0,i=!1;try{for(n=n.call(e);!(u=(r=n.next()).done)&&(a.push(r.value),!t||a.length!==t);u=!0);}catch(c){i=!0,o=c}finally{try{u||null==n.return||n.return()}finally{if(i)throw o}}return a}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootRef,n=e.rootMargin,r=e.disabled||!i,f=a.useRef(),s=o(a.useState(!1),2),v=s[0],d=s[1],p=o(a.useState(t?t.current:null),2),h=p[0],g=p[1],m=a.useCallback((function(e){f.current&&(f.current(),f.current=void 0),r||v||e&&e.tagName&&(f.current=function(e,t,n){var r=function(e){var t,n={root:e.root||null,margin:e.rootMargin||""},r=l.find((function(e){return e.root===n.root&&e.margin===n.margin}));r?t=c.get(r):(t=c.get(n),l.push(n));if(t)return t;var o=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var t=o.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return c.set(n,t={id:n,observer:a,elements:o}),t}(n),o=r.id,a=r.observer,u=r.elements;return u.set(e,t),a.observe(e),function(){if(u.delete(e),a.unobserve(e),0===u.size){a.disconnect(),c.delete(o);var t=l.findIndex((function(e){return e.root===o.root&&e.margin===o.margin}));t>-1&&l.splice(t,1)}}}(e,(function(e){return e&&d(e)}),{root:h,rootMargin:n}))}),[r,h,n,v]);return a.useEffect((function(){if(!i&&!v){var e=u.requestIdleCallback((function(){return d(!0)}));return function(){return u.cancelIdleCallback(e)}}}),[v]),a.useEffect((function(){t&&g(t.current)}),[t]),[m,v]};var a=n(7294),u=n(9311),i="undefined"!==typeof IntersectionObserver;var c=new Map,l=[]},1664:function(e,t,n){e.exports=n(8418)},6037:function(e,t,n){!function(e,t){function n(e){if(e&&e.__esModule)return e;var t=Object.create(null);return e&&Object.keys(e).forEach((function(n){if("default"!==n){var r=Object.getOwnPropertyDescriptor(e,n);Object.defineProperty(t,n,r.get?r:{enumerable:!0,get:function(){return e[n]}})}})),t.default=e,t}var r=n(t);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}var a="Left",u="Right",i="Up",c="Down",l={delta:10,preventDefaultTouchmoveEvent:!1,rotationAngle:0,trackMouse:!1,trackTouch:!0},f={first:!0,initial:[0,0],start:0,swiping:!1,xy:[0,0]},s="mousemove",v="mouseup",d="touchend",p="touchmove",h="touchstart";function g(e,t,n,r){return e>t?n>0?u:a:r>0?c:i}function m(e,t){if(0===t)return e;var n=Math.PI/180*t;return[e[0]*Math.cos(n)+e[1]*Math.sin(n),e[1]*Math.cos(n)-e[0]*Math.sin(n)]}function y(e,t){var n=function(t){t&&"touches"in t&&t.touches.length>1||e((function(e,n){n.trackMouse&&(document.addEventListener(s,r),document.addEventListener(v,i));var a="touches"in t?t.touches[0]:t,u=m([a.clientX,a.clientY],n.rotationAngle);return o({},e,f,{initial:[].concat(u),xy:u,start:t.timeStamp||0})}))},r=function(t){e((function(e,n){if("touches"in t&&t.touches.length>1)return e;var r="touches"in t?t.touches[0]:t,a=m([r.clientX,r.clientY],n.rotationAngle),u=a[0],i=a[1],c=u-e.xy[0],f=i-e.xy[1],s=Math.abs(c),v=Math.abs(f),d=(t.timeStamp||0)-e.start,p=Math.sqrt(s*s+v*v)/(d||1),h=[c/(d||1),f/(d||1)],y=g(s,v,c,f),b="number"===typeof n.delta?n.delta:n.delta[y.toLowerCase()]||l.delta;if(s<b&&v<b&&!e.swiping)return e;var w={absX:s,absY:v,deltaX:c,deltaY:f,dir:y,event:t,first:e.first,initial:e.initial,velocity:p,vxvy:h};w.first&&n.onSwipeStart&&n.onSwipeStart(w),n.onSwiping&&n.onSwiping(w);var S=!1;return(n.onSwiping||n.onSwiped||"onSwiped"+y in n)&&(S=!0),S&&n.preventDefaultTouchmoveEvent&&n.trackTouch&&t.cancelable&&t.preventDefault(),o({},e,{first:!1,eventData:w,swiping:!0})}))},a=function(t){e((function(e,n){var r;if(e.swiping&&e.eventData){r=o({},e.eventData,{event:t}),n.onSwiped&&n.onSwiped(r);var a=n["onSwiped"+r.dir];a&&a(r)}else n.onTap&&n.onTap({event:t});return o({},e,f,{eventData:r})}))},u=function(){document.removeEventListener(s,r),document.removeEventListener(v,i)},i=function(e){u(),a(e)},c=function(e,t){var o=function(){};if(e&&e.addEventListener){var u=[[h,n],[p,r],[d,a]];u.forEach((function(n){var r=n[0],o=n[1];return e.addEventListener(r,o,{passive:t})})),o=function(){return u.forEach((function(t){var n=t[0],r=t[1];return e.removeEventListener(n,r)}))}}return o},y={ref:function(t){null!==t&&e((function(e,n){if(e.el===t)return e;var r={};return e.el&&e.el!==t&&e.cleanUpTouch&&(e.cleanUpTouch(),r.cleanUpTouch=void 0),n.trackTouch&&t&&(r.cleanUpTouch=c(t,!n.preventDefaultTouchmoveEvent)),o({},e,{el:t},r)}))}};return t.trackMouse&&(y.onMouseDown=n),[y,c]}function b(e,t,n){var r={};return!t.trackTouch&&e.cleanUpTouch?(e.cleanUpTouch(),r.cleanUpTouch=void 0):t.trackTouch&&!e.cleanUpTouch&&e.el&&(r.cleanUpTouch=n(e.el,!t.preventDefaultTouchmoveEvent)),o({},e,r)}function w(e){var t=e.trackMouse,n=r.useRef(o({},f)),a=r.useRef(o({},l));a.current=o({},l,e);var u=r.useMemo((function(){return y((function(e){return n.current=e(n.current,a.current)}),{trackMouse:t})}),[t]),i=u[0],c=u[1];return n.current=b(n.current,a.current,c),i}e.DOWN=c,e.LEFT=a,e.RIGHT=u,e.UP=i,e.useSwipeable=w}(t,n(7294))},9689:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});var r=n(7294);function o(e,t,o,a){void 0===o&&(o=n.g),void 0===a&&(a={});var u=(0,r.useRef)(),i=a.capture,c=a.passive,l=a.once;(0,r.useEffect)((function(){u.current=t}),[t]),(0,r.useEffect)((function(){if(o&&o.addEventListener){var t=function(e){return u.current(e)},n={capture:i,passive:c,once:l};return o.addEventListener(e,t,n),function(){o.removeEventListener(e,t,n)}}}),[e,o,i,c,l])}var a={},u=function(e,t,n){return a[e]||(a[e]={callbacks:[],value:n}),a[e].callbacks.push(t),{deregister:function(){var n=a[e].callbacks,r=n.indexOf(t);r>-1&&n.splice(r,1)},emit:function(n){a[e].value!==n&&(a[e].value=n,a[e].callbacks.forEach((function(e){t!==e&&e(n)})))}}};function i(e,t){if(void 0===t&&(t="undefined"!=typeof n.g&&n.g.localStorage?n.g.localStorage:"undefined"!=typeof globalThis&&globalThis.localStorage?globalThis.localStorage:"undefined"!=typeof window&&window.localStorage?window.localStorage:"undefined"!=typeof localStorage?localStorage:null),t){var a=(i=t,{get:function(e,t){var n=i.getItem(e);return null==n?"function"==typeof t?t():t:JSON.parse(n)},set:function(e,t){i.setItem(e,JSON.stringify(t))}});return function(t){return function(e,t,n){var a=n.get,i=n.set,c=(0,r.useRef)(null),l=(0,r.useState)((function(){return a(t,e)})),f=l[0],s=l[1];o("storage",(function(e){if(e.key===t){var n=JSON.parse(e.newValue);f!==n&&s(n)}})),(0,r.useEffect)((function(){return c.current=u(t,s,e),function(){c.current.deregister()}}),[e,t]);var v=(0,r.useCallback)((function(e){var n="function"==typeof e?e(f):e;i(t,n),s(n),c.current.emit(e)}),[f,i,t]);return[f,v]}(t,e,a)}}var i;return r.useState}var c=function(){},l={classList:{add:c,remove:c}},f=function(e,t,o){void 0===o&&(o=n.g);var a=e?i(e,t):r.useState,u=o.matchMedia?o.matchMedia("(prefers-color-scheme: dark)"):{},c={addEventListener:function(e,t){return u.addListener&&u.addListener(t)},removeEventListener:function(e,t){return u.removeListener&&u.removeListener(t)}},f="(prefers-color-scheme: dark)"===u.media,s=o.document&&o.document.body||l;return{usePersistedDarkModeState:a,getDefaultOnChange:function(e,t,n){return void 0===e&&(e=s),void 0===t&&(t="dark-mode"),void 0===n&&(n="light-mode"),function(r){e.classList.add(r?t:n),e.classList.remove(r?n:t)}},mediaQueryEventTarget:c,getInitialValue:function(e){return f?u.matches:e}}};function s(e,t){void 0===e&&(e=!1),void 0===t&&(t={});var n=t.element,a=t.classNameDark,u=t.classNameLight,i=t.onChange,c=t.storageKey;void 0===c&&(c="darkMode");var l=t.storageProvider,s=t.global,v=(0,r.useMemo)((function(){return f(c,l,s)}),[c,l,s]),d=v.getDefaultOnChange,p=v.mediaQueryEventTarget,h=(0,v.usePersistedDarkModeState)((0,v.getInitialValue)(e)),g=h[0],m=h[1],y=(0,r.useMemo)((function(){return i||d(n,a,u)}),[i,n,a,u,d]);return(0,r.useEffect)((function(){y(g)}),[y,g]),o("change",(function(e){return m(e.matches)}),p),{value:g,enable:(0,r.useCallback)((function(){return m(!0)}),[m]),disable:(0,r.useCallback)((function(){return m(!1)}),[m]),toggle:(0,r.useCallback)((function(){return m((function(e){return!e}))}),[m])}}}}]);