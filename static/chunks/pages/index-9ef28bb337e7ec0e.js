(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5301:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(8042)}])},8042:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return X}});var i=t(5893),r=t(7421),a=t(7294),s=function(e){var n=e.children,t=e.sectionId,r=["container",e.page&&"container-page",e.fullScreen&&"container-full-screen",e.className].join(" ");return(0,i.jsx)("section",{className:r,id:t,children:n})},c=t(4682),l=t(2246);function o(){var e=(0,l.Z)("personal.json");return(0,i.jsxs)(s,{sectionId:"aboutme",page:!0,children:[(0,i.jsx)(c.Z,{type:"title",color:"primary",strong:!0,upperCase:!0,header:!0,children:"About Me"}),(0,i.jsx)("div",{children:e.description.map((function(e,n){return(0,i.jsx)("p",{children:e},n)}))})]})}var d=t(5411),u=t(2492),m=t.n(u);function p(){var e=(0,l.Z)("personal.json");return(0,i.jsx)(s,{sectionId:"contact",page:!0,className:m()["contact-me-container"],children:(0,i.jsx)("div",{className:m().content,children:(0,i.jsxs)("div",{className:m().info,children:[(0,i.jsx)(c.Z,{type:"title",color:"primary",strong:!0,children:"Let's build something amazing"}),(0,i.jsx)(c.Z,{type:"sub-title",children:"Feel free to reach out"}),(0,i.jsx)("div",{className:m().links,children:Object.keys(e.contacts).map((function(n){return(0,i.jsx)("a",{href:"".concat("email"===n?"mailto:":"").concat(e.contacts[n]),target:"_blank",children:(0,i.jsx)(d.Z,{name:n})},n)}))})]})})})}var _=t(3756),h=t.n(_),j=t(1664);function x(e){var n=e.data,t=e.page;return(0,i.jsxs)("div",{className:h().timeline,children:[(0,i.jsx)("div",{className:h().container,children:n.map((function(e,n){return(0,i.jsxs)("div",{className:h().bubble,children:[(0,i.jsxs)("div",{className:h().box,children:[(0,i.jsx)(j.default,{href:"/".concat(t,"/").concat(e.id),children:(0,i.jsxs)("a",{className:h().main,children:[(0,i.jsxs)("div",{children:[(0,i.jsx)(c.Z,{type:"sub-title",color:"primary",strong:!0,children:e.title}),(0,i.jsx)(c.Z,{type:"sub-sub-title",children:e.entity.name})]}),(0,i.jsxs)(c.Z,{type:"sub-sub-title",children:[e.startDate,e.endDate&&" - ".concat(e.endDate)]})]})}),(0,i.jsx)("div",{className:h().triangle})]}),(0,i.jsx)("div",{className:h().dot})]},n)}))}),(0,i.jsx)("div",{className:h().line})]})}function f(){var e=(0,l.Z)("education.json");return(0,i.jsxs)(s,{sectionId:"education",page:!0,children:[(0,i.jsx)(c.Z,{type:"title",color:"primary",strong:!0,upperCase:!0,header:!0,children:"Education"}),(0,i.jsx)(x,{data:e,page:"education"})]})}var v=t(3970),b=t.n(v);function g(e){var n=e.data,t=e.page;return(0,i.jsxs)("div",{className:b().card,children:[(0,i.jsx)(j.default,{href:"/".concat(t,"/").concat(n.id),children:(0,i.jsxs)("a",{className:b()["main-info"],children:[(0,i.jsxs)("div",{className:b().header,children:[(0,i.jsx)(c.Z,{type:"sub-title",color:"primary",strong:!0,upperCase:!0,children:n.title}),(0,i.jsxs)("div",{className:b()["sub-header"],children:[(0,i.jsx)(c.Z,{type:"sub-sub-title",children:n.entity.name}),(0,i.jsxs)(c.Z,{type:"sub-sub-title",children:[n.startDate," - ",n.endDate]})]})]}),(0,i.jsx)("div",{className:b().description,children:n.sectionDescription[0].description[0]})]})}),(0,i.jsx)("div",{className:b()["entity-logo"],children:n.entity.logoUrl?(0,i.jsx)("img",{src:n.entity.logoUrl,alt:n.entity.name+" Logo"}):(0,i.jsx)("span",{children:"No Logo Available"})})]})}var y=t(6805),N=t(368),k=t(6018),S=t.n(k);function Z(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,i=new Array(n);t<n;t++)i[t]=e[t];return i}function C(e){return function(e){if(Array.isArray(e))return Z(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,n){if(!e)return;if("string"===typeof e)return Z(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return Z(e,n)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function A(){var e=(0,l.Z)("experiences.json"),n=Math.ceil(e.length/3);return(0,i.jsxs)(s,{sectionId:"experience",page:!0,className:S()["experience-container"],children:[(0,i.jsx)(c.Z,{type:"title",color:"primary",strong:!0,upperCase:!0,header:!0,children:"Experience"}),(0,i.jsx)(y.Z,{transparentBackground:!0,fullHeight:!0,children:C(Array(n)).map((function(n,t){return(0,i.jsx)(N.Z,{children:(0,i.jsx)("div",{className:S()["card-list"],children:(r=t,e.slice(3*r,3*r+3).map((function(e,n){return(0,i.jsx)(g,{data:e,page:"experience"},n)})))})},t);var r}))})]})}var T=t(3665),E=t.n(T);function I(){var e=(0,l.Z)("personal.json");return(0,i.jsxs)(s,{sectionId:"home",className:E()["home-container"],fullScreen:!0,children:[(0,i.jsxs)("div",{className:E().header,children:[(0,i.jsx)(c.Z,{type:"title",color:"primary",strong:!0,upperCase:!0,children:e.title}),(0,i.jsx)(c.Z,{type:"sub-title",color:"primary",children:e.subtitle})]}),(0,i.jsx)("div",{className:E().description,children:e.shortDescription}),(0,i.jsx)("div",{className:E().contacts,children:Object.keys(e.contacts).map((function(n){return(0,i.jsx)("a",{href:"".concat("email"===n?"mailto:":"").concat(e.contacts[n]),target:"_blank",children:(0,i.jsx)(d.Z,{name:n})},n)}))})]})}var w=t(8415),D=t.n(w);function O(e){var n=e.data,t=e.page;return(0,i.jsx)(j.default,{href:"/".concat(t,"/").concat(n.id),children:(0,i.jsxs)("a",{className:D().thumbnail,children:[(0,i.jsxs)("div",{className:D().main,children:[(0,i.jsx)(c.Z,{type:"sub-title",color:"primary",upperCase:!0,strong:!0,children:n.title}),(0,i.jsx)("hr",{}),n.stack.map((function(e,n){return(0,i.jsx)(c.Z,{type:"sub-sub-title",color:"primary",upperCase:!0,strong:!0,children:e},n)}))]}),(0,i.jsx)("div",{className:D()["image-container"],children:(0,i.jsx)("img",{src:n.images[0].url,alt:n.images[0].alt+" Logo"})})]})})}var L=t(1898),P=t.n(L);function H(){var e=(0,l.Z)("projects.json"),n=function(e){var n=["All"];return e.forEach((function(e){e.categories.forEach((function(e){-1===n.indexOf(e)&&n.push(e)}))})),n}(e),t=(0,a.useState)("All"),r=t[0],o=t[1],d=(0,a.useState)(e),u=d[0],m=d[1];return(0,a.useEffect)((function(){var n="All"==r?e:e.filter((function(e){return e.categories.includes(r)}));m(n)}),[r]),(0,i.jsxs)(s,{sectionId:"projects",page:!0,className:P()["project-container"],children:[(0,i.jsx)(c.Z,{type:"title",color:"primary",strong:!0,upperCase:!0,header:!0,children:"Projects"}),(0,i.jsx)("ul",{className:P().nav,children:n.map((function(e,n){return(0,i.jsx)("li",{className:[P()["nav-item"],r===e&&P()["nav-item--active"]].join(" "),onClick:function(){return o(e)},children:(0,i.jsx)(c.Z,{type:"sub-title",strong:!0,upperCase:!0,color:"primary",children:e})},n)}))}),(0,i.jsx)("div",{className:P()["card-list"],children:(0,i.jsx)("div",{className:P().content,children:u.map((function(e,n){return(0,i.jsx)(O,{data:e,page:"project"},n)}))})})]})}var U=t(2532),G=t.n(U);function M(){var e=(0,a.useState)(0),n=e[0],t=e[1],r=(0,l.Z)("skills.json"),o=r.map((function(e){return e.type}));return(0,i.jsxs)(s,{sectionId:"skills",className:G()["skills-container"],page:!0,children:[(0,i.jsx)(c.Z,{type:"title",color:"primary",strong:!0,upperCase:!0,header:!0,children:"Skills"}),(0,i.jsx)("img",{src:"/images/skills_cover.jpg",alt:"Skills cover image",className:G()["cover-image"]}),(0,i.jsxs)("div",{className:G().tab,children:[(0,i.jsx)("ul",{className:G().nav,children:o.map((function(e,r){return(0,i.jsx)("li",{className:[G()["nav-item"],n===r&&G()["nav-item--active"]].join(" "),onClick:function(){return t(r)},children:(0,i.jsx)(c.Z,{type:"sub-title",strong:!0,upperCase:!0,color:"primary",children:e})},r)}))}),(0,i.jsx)("div",{className:G().content,style:{transform:"translateX(-".concat(100*n,"%)")},children:r.map((function(e,n){return(0,i.jsx)("div",{className:G()["tab-pane"],children:(0,i.jsx)("div",{children:e.section.map((function(e,n){return(0,i.jsxs)("div",{className:G()["pane-section"],children:[(0,i.jsx)(c.Z,{type:"sub-sub-title",strong:!0,upperCase:!0,color:"primary",children:e.title}),(0,i.jsx)("div",{className:G()["skills-content"],children:e.skills.map((function(e,n){return(0,i.jsxs)("div",{className:G().skill,children:[e.iconName&&(0,i.jsx)(d.Z,{name:e.iconName,noEffect:!0}),e.name]},n)}))})]},n)}))})},n)}))})]})]})}var X=function(){return(0,i.jsxs)(r.Z,{scrollSmooth:!0,children:[(0,i.jsx)(I,{}),(0,i.jsx)(o,{}),(0,i.jsx)(f,{}),(0,i.jsx)(M,{}),(0,i.jsx)(A,{}),(0,i.jsx)(H,{}),(0,i.jsx)(p,{})]})}},3970:function(e){e.exports={card:"SimpleCard_card__G6kGp","main-info":"SimpleCard_main-info__5jiSs",header:"SimpleCard_header__bJPAe","sub-header":"SimpleCard_sub-header__HGhdU",description:"SimpleCard_description__X2D02","entity-logo":"SimpleCard_entity-logo__cHB_A"}},8415:function(e){e.exports={thumbnail:"Thumbnail_thumbnail__EDgyu",main:"Thumbnail_main__tM4bL","image-container":"Thumbnail_image-container__2SQMU"}},3756:function(e){e.exports={timeline:"Timeline_timeline__Qj6jA",container:"Timeline_container__uJlwk",line:"Timeline_line__HGilm",bubble:"Timeline_bubble__b3IhG",box:"Timeline_box__Gpxs3",main:"Timeline_main__vAs0b",triangle:"Timeline_triangle__yogrm",dot:"Timeline_dot__RpaTa"}},2492:function(e){e.exports={"contact-me-container":"Contact_contact-me-container__EIQA5",content:"Contact_content__Zy0U9",info:"Contact_info__9E3Vn",links:"Contact_links__xXzUq","card-message":"Contact_card-message__LbVxe"}},6018:function(e){e.exports={"experience-container":"Experience_experience-container__zeLql","card-list":"Experience_card-list__pLNyY"}},3665:function(e){e.exports={"home-container":"Home_home-container__H3mQd",header:"Home_header__C4Bmn",description:"Home_description__2pQiu",contacts:"Home_contacts__Chewv"}},1898:function(e){e.exports={"project-container":"Project_project-container__xlDN1",nav:"Project_nav__fklWa","nav-item--active":"Project_nav-item--active__B1Opg","nav-item":"Project_nav-item__sMuih","card-list":"Project_card-list__6dv0b",content:"Project_content__b3l7f"}},2532:function(e){e.exports={"skills-container":"Skills_skills-container__3OXLn","cover-image":"Skills_cover-image__zUNnM",tab:"Skills_tab__8tojV",nav:"Skills_nav__T7hqi","nav-item":"Skills_nav-item__TkARp","nav-item--active":"Skills_nav-item--active__3zmGD",content:"Skills_content__uVOSL","tab-pane":"Skills_tab-pane__OkoYx","pane-section":"Skills_pane-section__q9STU","skills-content":"Skills_skills-content__GevgA",skill:"Skills_skill__2NKpb"}}},function(e){e.O(0,[65,232,774,888,179],(function(){return n=5301,e(e.s=n);var n}));var n=e.O();_N_E=n}]);