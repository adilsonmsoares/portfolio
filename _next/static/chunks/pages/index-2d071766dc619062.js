(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5301:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(4948)}])},6805:function(e,n,t){"use strict";var r=t(5893),i=t(8663),a=t(5121),c=t(2469),o=t.n(c),s=t(7294),l=t(6037);function u(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function d(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function m(e){return function(e){if(Array.isArray(e))return u(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,n){if(!e)return;if("string"===typeof e)return u(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return u(e,n)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}n.Z=function(e){var n=e.children,t=e.transparentBackground,c=e.fullHeight,u=(0,s.useState)(0),p=u[0],f=u[1],h=s.Children.count(n),_=function(e){e<0?e=0:e>=h&&(e=h-1),f(e)},v=(0,l.useSwipeable)({onSwipedLeft:function(){return _(p+1)},onSwipedRight:function(){return _(p-1)}}),j=[o().carousel,t&&o()["carousel--transparent"],c&&o()["carousel--full-height"]].join(" ");return(0,r.jsxs)("div",function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){d(e,n,t[n])}))}return e}({className:j},v,{children:[(0,r.jsxs)("div",{className:o().wrapper,children:[(0,r.jsx)("div",{className:o().inner,style:{transform:"translateX(-".concat(100*p,"%)")},children:n}),(0,r.jsx)(i.Z,{type:"circular",htmlElement:"div",onClick:function(){_(p-1)},className:[o()["btn-indicator"],o()["btn-indicator--back"]].join(" "),disabled:0==p,children:(0,r.jsx)(a.Z,{name:"arrowBack",small:!0})}),(0,r.jsx)(i.Z,{type:"circular",htmlElement:"div",onClick:function(){_(p+1)},className:[o()["btn-indicator"],o()["btn-indicator--forward"]].join(" "),disabled:p==h-1,children:(0,r.jsx)(a.Z,{name:"arrowForward",small:!0})})]}),h>1&&(0,r.jsx)("ul",{className:o()["slick-dots"],children:m(Array(h)).map((function(e,n){return(0,r.jsx)("li",{className:[o().dot,p==n&&o().active].join(" "),onClick:function(){return _(n)}},n)}))})]}))}},368:function(e,n,t){"use strict";t.d(n,{Z:function(){return c}});var r=t(5893),i=t(2469),a=t.n(i);t(7294);function c(e){var n=e.children;return(0,r.jsx)("div",{className:a().item,children:n})}},4948:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return B}});var r=t(5893),i=t(6130),a=t(3210),c=t(4682),o=t(2246);function s(){var e=(0,o.Z)("personal.json");return(0,r.jsxs)(a.Z,{sectionId:"aboutme",page:!0,children:[(0,r.jsx)(c.Z,{type:"title",color:"primary",strong:!0,upperCase:!0,header:!0,children:"About Me"}),(0,r.jsx)("div",{children:e.description.map((function(e,n){return(0,r.jsx)("p",{children:e},n)}))})]})}var l=t(7294),u=t(5121),d=t(2492),m=t.n(d);function p(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function f(){var e=(0,o.Z)("personal.json");return(0,r.jsx)(a.Z,{sectionId:"contact",page:!0,className:m()["contact-me-container"],children:(0,r.jsx)("div",{className:m().content,children:(0,r.jsxs)("div",{className:m().info,children:[(0,r.jsx)(c.Z,{type:"title",color:"primary",strong:!0,header:!0,children:"Let's build something amazing"}),(0,r.jsx)(c.Z,{type:"sub-title",children:"Feel free to reach out"}),(0,r.jsx)("div",{className:m().links,children:Object.keys(e.contacts).map((function(n){return(0,l.createElement)("a",function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){p(e,n,t[n])}))}return e}({href:("email"===n?"mailto:":"")+e.contacts[n]},"email"!==n&&{target:"_blank"},{key:n,children:(0,r.jsx)(u.Z,{name:n})}))}))})]})})})}var h=t(3756),_=t.n(h),v=t(1664);function j(e){var n=e.data,t=e.page,i=function(e){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("div",{className:_().title,children:[(0,r.jsx)(c.Z,{type:"sub-title",color:"special",strong:!0,children:e.title}),(0,r.jsx)(c.Z,{type:"sub-sub-title",children:e.entity.name})]}),(0,r.jsxs)(c.Z,{type:"sub-sub-title",children:[e.startDate,e.endDate&&" - ".concat(e.endDate)]})]})};return(0,r.jsxs)("div",{className:_().timeline,children:[(0,r.jsx)("div",{className:_().container,children:n.map((function(e,n){return(0,r.jsxs)("div",{className:_().bubble,children:[(0,r.jsxs)("div",{className:_().box,children:[t?(0,r.jsx)(v.default,{href:"/".concat(t,"/").concat(e.id),children:(0,r.jsx)("a",{className:_().main,children:i(e)})}):(0,r.jsx)("div",{className:_().main,children:i(e)}),(0,r.jsx)("div",{className:_().triangle})]}),(0,r.jsx)("div",{className:_().dot})]},n)}))}),(0,r.jsx)("div",{className:_().line})]})}function b(){var e=(0,o.Z)("education.json");return(0,r.jsxs)(a.Z,{sectionId:"education",page:!0,children:[(0,r.jsx)(c.Z,{type:"title",color:"primary",strong:!0,upperCase:!0,header:!0,children:"Education"}),(0,r.jsx)(j,{data:e})]})}var x=t(3970),y=t.n(x);function g(e){var n=e.data,t=e.page;return(0,r.jsxs)("div",{className:y().card,children:[(0,r.jsx)(v.default,{href:"/".concat(t,"/").concat(n.id),children:(0,r.jsxs)("a",{className:y()["main-info"],children:[(0,r.jsxs)("div",{className:y().header,children:[(0,r.jsx)(c.Z,{type:"sub-title",color:"special",strong:!0,children:n.title}),(0,r.jsxs)("div",{className:y()["sub-header"],children:[(0,r.jsx)(c.Z,{type:"sub-sub-title",children:n.entity.name}),(0,r.jsxs)(c.Z,{type:"sub-sub-title",children:[n.startDate," - ",n.endDate]})]})]}),(0,r.jsx)("div",{className:y().description,children:n.sectionDescription[0].description[0]})]})}),(0,r.jsx)("div",{className:y()["entity-logo"],children:n.entity.logoUrl?(0,r.jsx)("img",{src:"/portfolio"+n.entity.logoUrl,alt:n.entity.name+" Logo"}):(0,r.jsx)("span",{children:"No Logo Available"})})]})}var k=t(6805),N=t(368),S=t(6018),w=t.n(S);function O(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function Z(e){return function(e){if(Array.isArray(e))return O(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,n){if(!e)return;if("string"===typeof e)return O(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return O(e,n)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function C(){var e=(0,o.Z)("experiences.json"),n=(0,l.useState)(3),t=n[0],i=n[1],s=Math.ceil(e.length/t);return(0,l.useEffect)((function(){window.screen.width<768&&i(2)}),[]),(0,r.jsxs)(a.Z,{sectionId:"experience",page:!0,className:w()["experience-container"],children:[(0,r.jsx)(c.Z,{type:"title",color:"primary",strong:!0,upperCase:!0,header:!0,children:"Experience"}),(0,r.jsx)(k.Z,{transparentBackground:!0,fullHeight:!0,children:Z(Array(s)).map((function(n,i){return(0,r.jsx)(N.Z,{children:(0,r.jsx)("div",{className:w()["card-list"],children:(a=i,e.slice(a*t,a*t+t).map((function(e,n){return(0,r.jsx)(g,{data:e,page:"experience"},n)})))})},i);var a}))})]})}var T=t(3665),E=t.n(T);function A(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function P(){var e=(0,o.Z)("personal.json");return(0,r.jsxs)(a.Z,{sectionId:"home",className:E()["home-container"],fullScreen:!0,children:[(0,r.jsxs)("div",{className:E().header,children:[(0,r.jsx)(c.Z,{type:"title",color:"primary",strong:!0,upperCase:!0,header:!0,children:e.title}),(0,r.jsx)(c.Z,{type:"sub-title",color:"primary",children:e.subtitle})]}),(0,r.jsx)("div",{className:E().description,children:e.shortDescription}),(0,r.jsx)("div",{className:E().contacts,children:Object.keys(e.contacts).map((function(n){return(0,l.createElement)("a",function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){A(e,n,t[n])}))}return e}({href:("email"===n?"mailto:":"")+e.contacts[n]},"email"!==n&&{target:"_blank"},{key:n,children:(0,r.jsx)(u.Z,{name:n})}))}))})]})}var D=t(8415),M=t.n(D);function U(e){var n=e.data,t=e.page;return(0,r.jsx)(v.default,{href:"/".concat(t,"/").concat(n.id),children:(0,r.jsxs)("a",{className:M().thumbnail,children:[(0,r.jsxs)("div",{className:M().main,children:[(0,r.jsx)(c.Z,{type:"sub-title",color:"primary",strong:!0,children:n.title}),(0,r.jsx)("hr",{}),n.stack.map((function(e,n){return(0,r.jsx)(c.Z,{type:"sub-sub-title",color:"primary",strong:!0,children:e},n)}))]}),(0,r.jsx)("div",{className:M()["image-container"],children:(0,r.jsx)("img",{src:"/portfolio"+n.images[0].url,alt:n.images[0].alt+" Logo"})})]})})}var L=t(1898),I=t.n(L);function H(){var e=(0,o.Z)("projects.json"),n=function(e){var n=["All"];return e.forEach((function(e){e.categories.forEach((function(e){-1===n.indexOf(e)&&n.push(e)}))})),n}(e),t=(0,l.useState)("All"),i=t[0],s=t[1],u=(0,l.useState)(e),d=u[0],m=u[1];return(0,l.useEffect)((function(){var n="All"==i?e:e.filter((function(e){return e.categories.includes(i)}));m(n)}),[i]),(0,r.jsxs)(a.Z,{sectionId:"projects",page:!0,className:I()["project-container"],children:[(0,r.jsx)(c.Z,{type:"title",color:"primary",strong:!0,upperCase:!0,header:!0,children:"Projects"}),(0,r.jsx)("ul",{className:I().nav,children:n.map((function(e,n){return(0,r.jsx)("li",{className:[I()["nav-item"],i===e&&I()["nav-item--active"]].join(" "),onClick:function(){return s(e)},children:(0,r.jsx)(c.Z,{type:"sub-title",strong:!0,upperCase:!0,color:"primary",children:e})},n)}))}),(0,r.jsx)("div",{className:I()["card-list"],children:(0,r.jsx)("div",{className:I().content,children:d.map((function(e,n){return(0,r.jsx)(U,{data:e,page:"project"},n)}))})})]})}var R=t(2532),X=t.n(R);function G(){var e=(0,l.useState)(0),n=e[0],t=e[1],i=(0,o.Z)("skills.json"),s=i.map((function(e){return e.type}));return(0,r.jsxs)(a.Z,{sectionId:"skills",className:X()["skills-container"],page:!0,children:[(0,r.jsx)(c.Z,{type:"title",color:"primary",strong:!0,upperCase:!0,header:!0,children:"Skills"}),(0,r.jsx)("img",{src:"/portfolio/images/skills_cover.jpg",alt:"Skills cover image",className:X()["cover-image"]}),(0,r.jsxs)("div",{className:X().tab,children:[(0,r.jsx)("ul",{className:X().nav,children:s.map((function(e,i){return(0,r.jsx)("li",{className:[X()["nav-item"],n===i&&X()["nav-item--active"]].join(" "),onClick:function(){return t(i)},children:(0,r.jsx)(c.Z,{type:"sub-title",strong:!0,upperCase:!0,color:"primary",children:e})},i)}))}),(0,r.jsx)("div",{className:X().content,style:{transform:"translateX(-".concat(100*n,"%)")},children:i.map((function(e,n){return(0,r.jsx)("div",{className:X()["tab-pane"],children:(0,r.jsx)("div",{children:e.section.map((function(e,n){return(0,r.jsxs)("div",{className:X()["pane-section"],children:[(0,r.jsx)(c.Z,{type:"sub-sub-title",strong:!0,upperCase:!0,color:"primary",children:e.title}),(0,r.jsx)("div",{className:X()["skills-content"],children:e.skills.map((function(e,n){return(0,r.jsxs)("div",{className:X().skill,children:[e.iconName&&(0,r.jsx)(u.Z,{name:e.iconName,noEffect:!0}),e.name]},n)}))})]},n)}))})},n)}))})]})]})}var B=function(){return(0,r.jsxs)(i.Z,{scrollSmooth:!0,children:[(0,r.jsx)(P,{}),(0,r.jsx)(s,{}),(0,r.jsx)(b,{}),(0,r.jsx)(G,{}),(0,r.jsx)(C,{}),(0,r.jsx)(H,{}),(0,r.jsx)(f,{})]})}},3970:function(e){e.exports={card:"SimpleCard_card__G6kGp","main-info":"SimpleCard_main-info__5jiSs",header:"SimpleCard_header__bJPAe","sub-header":"SimpleCard_sub-header__HGhdU",description:"SimpleCard_description__X2D02","entity-logo":"SimpleCard_entity-logo__cHB_A"}},8415:function(e){e.exports={thumbnail:"Thumbnail_thumbnail__EDgyu",main:"Thumbnail_main__tM4bL","image-container":"Thumbnail_image-container__2SQMU"}},2469:function(e){e.exports={carousel:"Carousel_carousel__Awns_","carousel--transparent":"Carousel_carousel--transparent__O1uik",item:"Carousel_item__hx_tk","carousel--full-height":"Carousel_carousel--full-height__RL2qR",wrapper:"Carousel_wrapper__Fyx33",inner:"Carousel_inner__aBfLU","btn-indicator":"Carousel_btn-indicator__gbPtF","btn-indicator--back":"Carousel_btn-indicator--back__ijOS6","btn-indicator--forward":"Carousel_btn-indicator--forward__Rejcd","slick-dots":"Carousel_slick-dots__2mUBJ",dot:"Carousel_dot__UqgyJ",active:"Carousel_active__RCcJA"}},3756:function(e){e.exports={timeline:"Timeline_timeline__Qj6jA",container:"Timeline_container__uJlwk",line:"Timeline_line__HGilm",bubble:"Timeline_bubble__b3IhG",box:"Timeline_box__Gpxs3",main:"Timeline_main__vAs0b",title:"Timeline_title__WJjAF",triangle:"Timeline_triangle__yogrm",dot:"Timeline_dot__RpaTa"}},2492:function(e){e.exports={"contact-me-container":"Contact_contact-me-container__EIQA5",content:"Contact_content__Zy0U9",info:"Contact_info__9E3Vn",links:"Contact_links__xXzUq","card-message":"Contact_card-message__LbVxe"}},6018:function(e){e.exports={"experience-container":"Experience_experience-container__zeLql","card-list":"Experience_card-list__pLNyY"}},3665:function(e){e.exports={"home-container":"Home_home-container__H3mQd",header:"Home_header__C4Bmn",description:"Home_description__2pQiu",contacts:"Home_contacts__Chewv"}},1898:function(e){e.exports={"project-container":"Project_project-container__xlDN1",nav:"Project_nav__fklWa","nav-item--active":"Project_nav-item--active__B1Opg","nav-item":"Project_nav-item__sMuih","card-list":"Project_card-list__6dv0b",content:"Project_content__b3l7f"}},2532:function(e){e.exports={"skills-container":"Skills_skills-container__3OXLn","cover-image":"Skills_cover-image__zUNnM",tab:"Skills_tab__8tojV",nav:"Skills_nav__T7hqi","nav-item":"Skills_nav-item__TkARp","nav-item--active":"Skills_nav-item--active__3zmGD",content:"Skills_content__uVOSL","tab-pane":"Skills_tab-pane__OkoYx","pane-section":"Skills_pane-section__q9STU","skills-content":"Skills_skills-content__GevgA",skill:"Skills_skill__2NKpb"}},6037:function(e,n,t){!function(e,n){function t(e){if(e&&e.__esModule)return e;var n=Object.create(null);return e&&Object.keys(e).forEach((function(t){if("default"!==t){var r=Object.getOwnPropertyDescriptor(e,t);Object.defineProperty(n,t,r.get?r:{enumerable:!0,get:function(){return e[t]}})}})),n.default=e,n}var r=t(n);function i(){return i=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},i.apply(this,arguments)}var a="Left",c="Right",o="Up",s="Down",l={delta:10,preventDefaultTouchmoveEvent:!1,rotationAngle:0,trackMouse:!1,trackTouch:!0},u={first:!0,initial:[0,0],start:0,swiping:!1,xy:[0,0]},d="mousemove",m="mouseup",p="touchend",f="touchmove",h="touchstart";function _(e,n,t,r){return e>n?t>0?c:a:r>0?s:o}function v(e,n){if(0===n)return e;var t=Math.PI/180*n;return[e[0]*Math.cos(t)+e[1]*Math.sin(t),e[1]*Math.cos(t)-e[0]*Math.sin(t)]}function j(e,n){var t=function(n){n&&"touches"in n&&n.touches.length>1||e((function(e,t){t.trackMouse&&(document.addEventListener(d,r),document.addEventListener(m,o));var a="touches"in n?n.touches[0]:n,c=v([a.clientX,a.clientY],t.rotationAngle);return i({},e,u,{initial:[].concat(c),xy:c,start:n.timeStamp||0})}))},r=function(n){e((function(e,t){if("touches"in n&&n.touches.length>1)return e;var r="touches"in n?n.touches[0]:n,a=v([r.clientX,r.clientY],t.rotationAngle),c=a[0],o=a[1],s=c-e.xy[0],u=o-e.xy[1],d=Math.abs(s),m=Math.abs(u),p=(n.timeStamp||0)-e.start,f=Math.sqrt(d*d+m*m)/(p||1),h=[s/(p||1),u/(p||1)],j=_(d,m,s,u),b="number"===typeof t.delta?t.delta:t.delta[j.toLowerCase()]||l.delta;if(d<b&&m<b&&!e.swiping)return e;var x={absX:d,absY:m,deltaX:s,deltaY:u,dir:j,event:n,first:e.first,initial:e.initial,velocity:f,vxvy:h};x.first&&t.onSwipeStart&&t.onSwipeStart(x),t.onSwiping&&t.onSwiping(x);var y=!1;return(t.onSwiping||t.onSwiped||"onSwiped"+j in t)&&(y=!0),y&&t.preventDefaultTouchmoveEvent&&t.trackTouch&&n.cancelable&&n.preventDefault(),i({},e,{first:!1,eventData:x,swiping:!0})}))},a=function(n){e((function(e,t){var r;if(e.swiping&&e.eventData){r=i({},e.eventData,{event:n}),t.onSwiped&&t.onSwiped(r);var a=t["onSwiped"+r.dir];a&&a(r)}else t.onTap&&t.onTap({event:n});return i({},e,u,{eventData:r})}))},c=function(){document.removeEventListener(d,r),document.removeEventListener(m,o)},o=function(e){c(),a(e)},s=function(e,n){var i=function(){};if(e&&e.addEventListener){var c=[[h,t],[f,r],[p,a]];c.forEach((function(t){var r=t[0],i=t[1];return e.addEventListener(r,i,{passive:n})})),i=function(){return c.forEach((function(n){var t=n[0],r=n[1];return e.removeEventListener(t,r)}))}}return i},j={ref:function(n){null!==n&&e((function(e,t){if(e.el===n)return e;var r={};return e.el&&e.el!==n&&e.cleanUpTouch&&(e.cleanUpTouch(),r.cleanUpTouch=void 0),t.trackTouch&&n&&(r.cleanUpTouch=s(n,!t.preventDefaultTouchmoveEvent)),i({},e,{el:n},r)}))}};return n.trackMouse&&(j.onMouseDown=t),[j,s]}function b(e,n,t){var r={};return!n.trackTouch&&e.cleanUpTouch?(e.cleanUpTouch(),r.cleanUpTouch=void 0):n.trackTouch&&!e.cleanUpTouch&&e.el&&(r.cleanUpTouch=t(e.el,!n.preventDefaultTouchmoveEvent)),i({},e,r)}function x(e){var n=e.trackMouse,t=r.useRef(i({},u)),a=r.useRef(i({},l));a.current=i({},l,e);var c=r.useMemo((function(){return j((function(e){return t.current=e(t.current,a.current)}),{trackMouse:n})}),[n]),o=c[0],s=c[1];return t.current=b(t.current,a.current,s),o}e.DOWN=s,e.LEFT=a,e.RIGHT=c,e.UP=o,e.useSwipeable=x}(n,t(7294))}},function(e){e.O(0,[990,891,912,774,888,179],(function(){return n=5301,e(e.s=n);var n}));var n=e.O();_N_E=n}]);