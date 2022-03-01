exports.id = 232;
exports.ids = [232];
exports.modules = {

/***/ 8628:
/***/ ((module) => {

// Exports
module.exports = {
	"btn": "Button_btn__SdbFb",
	"btn--hidden": "Button_btn--hidden__TTLm5",
	"btn--strong": "Button_btn--strong__XyFBg",
	"btn--rounded": "Button_btn--rounded__Tr4lV",
	"btn--upper": "Button_btn--upper__1gbtA",
	"btn--disabled": "Button_btn--disabled__l2seu",
	"btn-default": "Button_btn-default__YQhJ_",
	"btn-default--primary": "Button_btn-default--primary__1eadY",
	"btn-circular": "Button_btn-circular__dq_iv",
	"btn-circular--primary": "Button_btn-circular--primary__i4RUy"
};


/***/ }),

/***/ 6533:
/***/ ((module) => {

// Exports
module.exports = {
	"carousel": "Carousel_carousel__Awns_",
	"carousel--transparent": "Carousel_carousel--transparent__O1uik",
	"item": "Carousel_item__hx_tk",
	"carousel--full-height": "Carousel_carousel--full-height__RL2qR",
	"wrapper": "Carousel_wrapper__Fyx33",
	"inner": "Carousel_inner__aBfLU",
	"btn-indicator": "Carousel_btn-indicator__gbPtF",
	"btn-indicator--back": "Carousel_btn-indicator--back__ijOS6",
	"btn-indicator--forward": "Carousel_btn-indicator--forward__Rejcd",
	"slick-dots": "Carousel_slick-dots__2mUBJ",
	"dot": "Carousel_dot__UqgyJ",
	"active": "Carousel_active__RCcJA"
};


/***/ }),

/***/ 3578:
/***/ ((module) => {

// Exports
module.exports = {
	"navbar": "Navbar_navbar__D8UBJ",
	"navbar--scrolled": "Navbar_navbar--scrolled__fnumT",
	"wrapper": "Navbar_wrapper__e28Ea",
	"navbar-brand": "Navbar_navbar-brand___EsPm",
	"navbar-toggle": "Navbar_navbar-toggle__vzz_U",
	"toggle-line": "Navbar_toggle-line__gxgl8",
	"navbar-nav": "Navbar_navbar-nav__B_EqO",
	"nav-item": "Navbar_nav-item__BIg4c",
	"navbar-toggle--show": "Navbar_navbar-toggle--show__s8aL2",
	"navbar-collapse": "Navbar_navbar-collapse__rAWXd",
	"navbar-collapse--show": "Navbar_navbar-collapse--show__LU_Wg"
};


/***/ }),

/***/ 9415:
/***/ ((module) => {

// Exports
module.exports = {
	"typhography": "Typhography_typhography___5XUV",
	"typhography--primary": "Typhography_typhography--primary__uIxND",
	"typhography--uppercase": "Typhography_typhography--uppercase__kEt6Y",
	"typhography--strong": "Typhography_typhography--strong__UaHDo",
	"typhography-title": "Typhography_typhography-title__QTRT5",
	"typhography-sub-title": "Typhography_typhography-sub-title__oqeRL",
	"typhography-sub-sub-title": "Typhography_typhography-sub-sub-title__RZA4f",
	"typhography-header": "Typhography_typhography-header__TZTn4"
};


/***/ }),

/***/ 8663:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_components_Button_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8628);
/* harmony import */ var _styles_components_Button_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_components_Button_module_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);




const Button = ({ htmlElement , type , color , textStrong , textUpper , disabled , hidden , roundedCorner , href , className , onClick , children  })=>{
    const isExternal = (url)=>{
        return url.startsWith('http') || url.startsWith('https');
    };
    var classNames = [
        (_styles_components_Button_module_scss__WEBPACK_IMPORTED_MODULE_3___default().btn),
        type && (_styles_components_Button_module_scss__WEBPACK_IMPORTED_MODULE_3___default())[`btn-${type}`],
        hidden && (_styles_components_Button_module_scss__WEBPACK_IMPORTED_MODULE_3___default())[`btn--hidden`],
        disabled && (_styles_components_Button_module_scss__WEBPACK_IMPORTED_MODULE_3___default())[`btn--disabled`],
        roundedCorner && (_styles_components_Button_module_scss__WEBPACK_IMPORTED_MODULE_3___default())[`btn--rounded`],
        textStrong && (_styles_components_Button_module_scss__WEBPACK_IMPORTED_MODULE_3___default())[`btn--strong`],
        textUpper && (_styles_components_Button_module_scss__WEBPACK_IMPORTED_MODULE_3___default())[`btn--upper`],
        color && (_styles_components_Button_module_scss__WEBPACK_IMPORTED_MODULE_3___default())[`btn-${type}--${color}`],
        className
    ].join(' ');
    return htmlElement === 'button' ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
        className: classNames,
        onClick,
        disabled,
        children: children
    }) : htmlElement === 'a' ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_1__["default"], {
        href: href || '',
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
            className: classNames,
            target: isExternal(href || '') ? '_blank' : '',
            children: children
        })
    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: classNames,
        onClick,
        disabled,
        children: children
    });
};
Button.defaultProps = {
    htmlElement: 'button',
    type: 'default',
    color: 'primary'
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Button);


/***/ }),

/***/ 6805:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8663);
/* harmony import */ var _components_Icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5411);
/* harmony import */ var _styles_components_Carousel_Carousel_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6533);
/* harmony import */ var _styles_components_Carousel_Carousel_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_components_Carousel_Carousel_module_scss__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_swipeable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3789);
/* harmony import */ var react_swipeable__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_swipeable__WEBPACK_IMPORTED_MODULE_4__);






const Carousel = ({ children , transparentBackground , fullHeight  })=>{
    const { 0: activeIndex , 1: setActiveIndex  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(0);
    const numberChildren = react__WEBPACK_IMPORTED_MODULE_3___default().Children.count(children);
    const updateIndex = (newIndex)=>{
        if (newIndex < 0) {
            newIndex = 0;
        } else if (newIndex >= numberChildren) {
            newIndex = numberChildren - 1;
        }
        setActiveIndex(newIndex);
    };
    const handlers = (0,react_swipeable__WEBPACK_IMPORTED_MODULE_4__.useSwipeable)({
        onSwipedLeft: ()=>updateIndex(activeIndex + 1)
        ,
        onSwipedRight: ()=>updateIndex(activeIndex - 1)
    });
    let classNames = [
        (_styles_components_Carousel_Carousel_module_scss__WEBPACK_IMPORTED_MODULE_5___default().carousel),
        transparentBackground && (_styles_components_Carousel_Carousel_module_scss__WEBPACK_IMPORTED_MODULE_5___default()["carousel--transparent"]),
        fullHeight && (_styles_components_Carousel_Carousel_module_scss__WEBPACK_IMPORTED_MODULE_5___default()["carousel--full-height"])
    ].join(' ');
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: classNames,
        ...handlers,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_styles_components_Carousel_Carousel_module_scss__WEBPACK_IMPORTED_MODULE_5___default().wrapper),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_styles_components_Carousel_Carousel_module_scss__WEBPACK_IMPORTED_MODULE_5___default().inner),
                        style: {
                            transform: `translateX(-${activeIndex * 100}%)`
                        },
                        children: children
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Button__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                        type: "circular",
                        htmlElement: "div",
                        onClick: ()=>{
                            updateIndex(activeIndex - 1);
                        },
                        className: [
                            (_styles_components_Carousel_Carousel_module_scss__WEBPACK_IMPORTED_MODULE_5___default()["btn-indicator"]),
                            (_styles_components_Carousel_Carousel_module_scss__WEBPACK_IMPORTED_MODULE_5___default()["btn-indicator--back"])
                        ].join(' '),
                        disabled: activeIndex == 0,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Icon__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                            name: "arrowBack",
                            small: true
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Button__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                        type: "circular",
                        htmlElement: "div",
                        onClick: ()=>{
                            updateIndex(activeIndex + 1);
                        },
                        className: [
                            (_styles_components_Carousel_Carousel_module_scss__WEBPACK_IMPORTED_MODULE_5___default()["btn-indicator"]),
                            (_styles_components_Carousel_Carousel_module_scss__WEBPACK_IMPORTED_MODULE_5___default()["btn-indicator--forward"])
                        ].join(' '),
                        disabled: activeIndex == numberChildren - 1,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Icon__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                            name: "arrowForward",
                            small: true
                        })
                    })
                ]
            }),
            numberChildren > 1 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                className: (_styles_components_Carousel_Carousel_module_scss__WEBPACK_IMPORTED_MODULE_5___default()["slick-dots"]),
                children: [
                    ...Array(numberChildren)
                ].map((item, index)=>{
                    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                        className: [
                            (_styles_components_Carousel_Carousel_module_scss__WEBPACK_IMPORTED_MODULE_5___default().dot),
                            activeIndex == index && (_styles_components_Carousel_Carousel_module_scss__WEBPACK_IMPORTED_MODULE_5___default().active)
                        ].join(' '),
                        onClick: ()=>updateIndex(index)
                    }, index));
                })
            })
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Carousel);


/***/ }),

/***/ 368:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ CarouselItem)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_components_Carousel_Carousel_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6533);
/* harmony import */ var _styles_components_Carousel_Carousel_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_components_Carousel_Carousel_module_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);



function CarouselItem({ children  }) {
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: (_styles_components_Carousel_Carousel_module_scss__WEBPACK_IMPORTED_MODULE_2___default().item),
        children: children
    }));
};


/***/ }),

/***/ 5411:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Icon)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./public/icons/arrowBack.svg
var _path;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var SvgArrowBack = function SvgArrowBack(props) {
  return /*#__PURE__*/external_react_.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 13.503 23.619"
  }, props), _path || (_path = /*#__PURE__*/external_react_.createElement("path", {
    d: "m4.07 11.806 8.937-8.93A1.688 1.688 0 0 0 10.616.492L.491 10.606a1.685 1.685 0 0 0-.049 2.327l10.167 10.193A1.688 1.688 0 0 0 13 20.742Z"
  })));
};

/* harmony default export */ const arrowBack = (SvgArrowBack);
;// CONCATENATED MODULE: ./public/icons/arrowForward.svg
var arrowForward_path;

function arrowForward_extends() { arrowForward_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return arrowForward_extends.apply(this, arguments); }



var SvgArrowForward = function SvgArrowForward(props) {
  return /*#__PURE__*/external_react_.createElement("svg", arrowForward_extends({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 13.503 23.616"
  }, props), arrowForward_path || (arrowForward_path = /*#__PURE__*/external_react_.createElement("path", {
    d: "M9.433 11.804.496 2.874a1.681 1.681 0 0 1 0-2.384 1.7 1.7 0 0 1 2.391 0l10.125 10.114a1.685 1.685 0 0 1 .049 2.327L2.894 23.124A1.688 1.688 0 0 1 .503 20.74Z"
  })));
};

/* harmony default export */ const arrowForward = (SvgArrowForward);
;// CONCATENATED MODULE: ./public/icons/bulb.svg
var bulb_path;

function bulb_extends() { bulb_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return bulb_extends.apply(this, arguments); }



var SvgBulb = function SvgBulb(props) {
  return /*#__PURE__*/external_react_.createElement("svg", bulb_extends({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 18 24"
  }, props), bulb_path || (bulb_path = /*#__PURE__*/external_react_.createElement("path", {
    d: "M5 22.75A1.254 1.254 0 0 0 6.25 24h5.5A1.254 1.254 0 0 0 13 22.75v-1.125H5ZM9 0C4.019 0 0 3.744 0 8.375a8.265 8.265 0 0 0 3.837 6.912V18a1.249 1.249 0 0 0 1.288 1.2h7.744a1.245 1.245 0 0 0 1.287-1.2v-2.713A8.256 8.256 0 0 0 18 8.375C18 3.744 13.981 0 9 0Z"
  })));
};

/* harmony default export */ const bulb = (SvgBulb);
;// CONCATENATED MODULE: ./public/icons/c.svg
var c_path;

function c_extends() { c_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return c_extends.apply(this, arguments); }



var SvgC = function SvgC(props) {
  return /*#__PURE__*/external_react_.createElement("svg", c_extends({
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), c_path || (c_path = /*#__PURE__*/external_react_.createElement("path", {
    d: "M17.023 9.216s-.386-3.293-3.955-3.385c-3.57-.091-5.402 2.47-5.402 6.13 0 3.66 2.026 6.588 5.498 6.588 3.473 0 3.86-3.66 3.86-3.66l6.656.366s.391 3.306-2.394 5.828C18.5 23.605 15.082 24.017 12.694 24c-2.388-.018-5.698.034-8.9-2.969C.595 18.03.05 15.113.05 12.248c0-2.866.607-6.661 4.414-9.54C7.05.754 9.673.033 12.296.033 23.246.032 23.98 9.28 23.98 9.28z"
  })));
};

/* harmony default export */ const c = (SvgC);
;// CONCATENATED MODULE: ./public/icons/csharp.svg
var csharp_path;

function csharp_extends() { csharp_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return csharp_extends.apply(this, arguments); }



var SvgCsharp = function SvgCsharp(props) {
  return /*#__PURE__*/external_react_.createElement("svg", csharp_extends({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24"
  }, props), csharp_path || (csharp_path = /*#__PURE__*/external_react_.createElement("path", {
    d: "M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zM9.426 7.12a5.55 5.55 0 0 1 1.985.38v1.181a4.5 4.5 0 0 0-2.25-.566 3.439 3.439 0 0 0-2.625 1.087 4.099 4.099 0 0 0-1.012 2.906 3.9 3.9 0 0 0 .945 2.754 3.217 3.217 0 0 0 2.482 1.023 4.657 4.657 0 0 0 2.464-.634l-.004 1.08a5.543 5.543 0 0 1-2.625.555 4.211 4.211 0 0 1-3.228-1.297 4.793 4.793 0 0 1-1.212-3.409 5.021 5.021 0 0 1 1.365-3.663 4.631 4.631 0 0 1 3.473-1.392 5.55 5.55 0 0 1 .12-.004 5.55 5.55 0 0 1 .122 0zm5.863.155h.836l-.555 2.652h1.661l.567-2.652h.81l-.555 2.652 1.732-.004-.15.697H17.91l-.412 1.98h1.852l-.176.698h-1.816l-.58 2.625h-.83l.567-2.625h-1.65l-.555 2.625h-.81l.555-2.625h-1.74l.131-.698h1.748l.401-1.976h-1.826l.138-.697h1.826zm.142 3.345L15 12.6h1.673l.423-1.98z"
  })));
};

/* harmony default export */ const csharp = (SvgCsharp);
;// CONCATENATED MODULE: ./public/icons/css.svg
var css_path;

function css_extends() { css_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return css_extends.apply(this, arguments); }



var SvgCss = function SvgCss(props) {
  return /*#__PURE__*/external_react_.createElement("svg", css_extends({
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), css_path || (css_path = /*#__PURE__*/external_react_.createElement("path", {
    d: "M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.855L12 19.288l5.373-1.53L18.59 4.414z"
  })));
};

/* harmony default export */ const css = (SvgCss);
;// CONCATENATED MODULE: ./public/icons/email.svg
var email_path;

function email_extends() { email_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return email_extends.apply(this, arguments); }



var SvgEmail = function SvgEmail(props) {
  return /*#__PURE__*/external_react_.createElement("svg", email_extends({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 37.332 25.2"
  }, props), email_path || (email_path = /*#__PURE__*/external_react_.createElement("path", {
    d: "M0 22.968V2.232q0-.036.108-.684l12.2 10.44-12.164 11.7a3.051 3.051 0 0 1-.144-.72ZM1.62.108A1.551 1.551 0 0 1 2.228 0H35.1a2.039 2.039 0 0 1 .648.108l-12.24 10.476-1.62 1.3-3.2 2.628-3.2-2.628-1.62-1.3Zm.036 24.984L13.928 13.32l4.752 3.852 4.752-3.852 12.28 11.772a1.729 1.729 0 0 1-.612.108H2.228a1.631 1.631 0 0 1-.576-.108Zm23.4-13.1L37.228 1.548a2.149 2.149 0 0 1 .1.684v20.736a2.759 2.759 0 0 1-.108.72Z"
  })));
};

/* harmony default export */ const email = (SvgEmail);
;// CONCATENATED MODULE: ./public/icons/externalLink.svg
var externalLink_path;

function externalLink_extends() { externalLink_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return externalLink_extends.apply(this, arguments); }



var SvgExternalLink = function SvgExternalLink(props) {
  return /*#__PURE__*/external_react_.createElement("svg", externalLink_extends({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 21.333"
  }, props), externalLink_path || (externalLink_path = /*#__PURE__*/external_react_.createElement("path", {
    d: "M24 1v5.333a1 1 0 0 1-1.707.707l-1.488-1.488L10.658 15.7a1 1 0 0 1-1.414 0l-.944-.944a1 1 0 0 1 0-1.414L18.448 3.195l-1.487-1.488A1 1 0 0 1 17.668 0H23a1 1 0 0 1 1 1Zm-7.04 10.283-.667.667a1 1 0 0 0-.293.707v6.01H2.667V5.333h11a1 1 0 0 0 .707-.293l.667-.667a1 1 0 0 0-.707-1.707H2a2 2 0 0 0-2 2v14.667a2 2 0 0 0 2 2h14.667a2 2 0 0 0 2-2V11.99a1 1 0 0 0-1.707-.707Z"
  })));
};

/* harmony default export */ const externalLink = (SvgExternalLink);
;// CONCATENATED MODULE: ./public/icons/flutter.svg
var flutter_path;

function flutter_extends() { flutter_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return flutter_extends.apply(this, arguments); }



var SvgFlutter = function SvgFlutter(props) {
  return /*#__PURE__*/external_react_.createElement("svg", flutter_extends({
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), flutter_path || (flutter_path = /*#__PURE__*/external_react_.createElement("path", {
    d: "M14.314 0 2.3 12 6 15.7 21.684.012h-7.357L14.314 0zm.014 11.072-6.471 6.457 6.47 6.47H21.7l-6.46-6.468 6.46-6.46h-7.371z"
  })));
};

/* harmony default export */ const flutter = (SvgFlutter);
;// CONCATENATED MODULE: ./public/icons/github.svg
var github_path;

function github_extends() { github_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return github_extends.apply(this, arguments); }



var SvgGithub = function SvgGithub(props) {
  return /*#__PURE__*/external_react_.createElement("svg", github_extends({
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), github_path || (github_path = /*#__PURE__*/external_react_.createElement("path", {
    d: "M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
  })));
};

/* harmony default export */ const github = (SvgGithub);
;// CONCATENATED MODULE: ./public/icons/html.svg
var html_path;

function html_extends() { html_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return html_extends.apply(this, arguments); }



var SvgHtml = function SvgHtml(props) {
  return /*#__PURE__*/external_react_.createElement("svg", html_extends({
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), html_path || (html_path = /*#__PURE__*/external_react_.createElement("path", {
    d: "M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z"
  })));
};

/* harmony default export */ const html = (SvgHtml);
;// CONCATENATED MODULE: ./public/icons/java.svg
var java_path;

function java_extends() { java_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return java_extends.apply(this, arguments); }



var SvgJava = function SvgJava(props) {
  return /*#__PURE__*/external_react_.createElement("svg", java_extends({
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), java_path || (java_path = /*#__PURE__*/external_react_.createElement("path", {
    d: "M8.851 18.56s-.917.534.653.714c1.902.218 2.874.187 4.969-.211 0 0 .552.346 1.321.646-4.699 2.013-10.633-.118-6.943-1.149m-.575-2.627s-1.028.761.542.924c2.032.209 3.636.227 6.413-.308 0 0 .384.389.987.602-5.679 1.661-12.007.13-7.942-1.218m4.84-4.458c1.158 1.333-.304 2.533-.304 2.533s2.939-1.518 1.589-3.418c-1.261-1.772-2.228-2.652 3.007-5.688 0-.001-8.216 2.051-4.292 6.573m6.214 9.029s.679.559-.747.991c-2.712.822-11.288 1.069-13.669.033-.856-.373.75-.89 1.254-.998.527-.114.828-.093.828-.093-.953-.671-6.156 1.317-2.643 1.887 9.58 1.553 17.462-.7 14.977-1.82M9.292 13.21s-4.362 1.036-1.544 1.412c1.189.159 3.561.123 5.77-.062 1.806-.152 3.618-.477 3.618-.477s-.637.272-1.098.587c-4.429 1.165-12.986.623-10.522-.568 2.082-1.006 3.776-.892 3.776-.892m7.824 4.374c4.503-2.34 2.421-4.589.968-4.285-.355.074-.515.138-.515.138s.132-.207.385-.297c2.875-1.011 5.086 2.981-.928 4.562 0-.001.07-.062.09-.118M14.401 0s2.494 2.494-2.365 6.33c-3.896 3.077-.888 4.832-.001 6.836-2.274-2.053-3.943-3.858-2.824-5.539 1.644-2.469 6.197-3.665 5.19-7.627M9.734 23.924c4.322.277 10.959-.153 11.116-2.198 0 0-.302.775-3.572 1.391-3.688.694-8.239.613-10.937.168 0-.001.553.457 3.393.639"
  })));
};

/* harmony default export */ const java = (SvgJava);
;// CONCATENATED MODULE: ./public/icons/javascript.svg
var javascript_path;

function javascript_extends() { javascript_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return javascript_extends.apply(this, arguments); }



var SvgJavascript = function SvgJavascript(props) {
  return /*#__PURE__*/external_react_.createElement("svg", javascript_extends({
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), javascript_path || (javascript_path = /*#__PURE__*/external_react_.createElement("path", {
    d: "M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z"
  })));
};

/* harmony default export */ const javascript = (SvgJavascript);
;// CONCATENATED MODULE: ./public/icons/linkedin.svg
var linkedin_path;

function linkedin_extends() { linkedin_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return linkedin_extends.apply(this, arguments); }



var SvgLinkedin = function SvgLinkedin(props) {
  return /*#__PURE__*/external_react_.createElement("svg", linkedin_extends({
    height: "682pt",
    viewBox: "-21 -35 682.667 682",
    width: "682pt",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), linkedin_path || (linkedin_path = /*#__PURE__*/external_react_.createElement("path", {
    d: "M77.613-.668C30.683-.668 0 30.148 0 70.652c0 39.61 29.77 71.305 75.813 71.305h.89c47.848 0 77.625-31.695 77.625-71.305-.894-40.504-29.777-71.32-76.715-71.32zM8.11 198.313h137.195V611.07H8.109zM482.055 188.625c-74.012 0-123.64 69.547-123.64 69.547v-59.86h-137.2V611.07h137.191v-230.5c0-12.34.895-24.66 4.52-33.484 9.918-24.64 32.488-50.168 70.39-50.168 49.645 0 69.5 37.852 69.5 93.34V611.07H640V374.402c0-126.78-67.688-185.777-157.945-185.777zm0 0"
  })));
};

/* harmony default export */ const linkedin = (SvgLinkedin);
;// CONCATENATED MODULE: ./public/icons/nodejs.svg
var nodejs_path;

function nodejs_extends() { nodejs_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return nodejs_extends.apply(this, arguments); }



var SvgNodejs = function SvgNodejs(props) {
  return /*#__PURE__*/external_react_.createElement("svg", nodejs_extends({
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), nodejs_path || (nodejs_path = /*#__PURE__*/external_react_.createElement("path", {
    d: "M11.998 24c-.321 0-.641-.084-.922-.247L8.14 22.016c-.438-.245-.224-.332-.08-.383.585-.203.703-.25 1.328-.604.065-.037.151-.023.218.017l2.256 1.339a.29.29 0 0 0 .272 0l8.795-5.076a.277.277 0 0 0 .134-.238V6.921a.283.283 0 0 0-.137-.242l-8.791-5.072a.278.278 0 0 0-.271 0L3.075 6.68a.284.284 0 0 0-.139.241v10.15a.27.27 0 0 0 .139.235l2.409 1.392c1.307.654 2.108-.116 2.108-.89V7.787c0-.142.114-.253.256-.253h1.115c.139 0 .255.112.255.253v10.021c0 1.745-.95 2.745-2.604 2.745-.508 0-.909 0-2.026-.551L2.28 18.675a1.856 1.856 0 0 1-.922-1.604V6.921c0-.659.353-1.275.922-1.603L11.075.236a1.925 1.925 0 0 1 1.848 0l8.794 5.082c.57.329.924.944.924 1.603v10.15a1.86 1.86 0 0 1-.924 1.604l-8.794 5.078c-.28.163-.599.247-.925.247zm7.101-10.007c0-1.9-1.284-2.406-3.987-2.763-2.731-.361-3.009-.548-3.009-1.187 0-.528.235-1.233 2.258-1.233 1.807 0 2.473.389 2.747 1.607a.254.254 0 0 0 .247.199h1.141a.26.26 0 0 0 .186-.081.257.257 0 0 0 .067-.196c-.177-2.098-1.571-3.076-4.388-3.076-2.508 0-4.004 1.058-4.004 2.833 0 1.925 1.488 2.457 3.895 2.695 2.88.282 3.103.703 3.103 1.269 0 .983-.789 1.402-2.642 1.402-2.327 0-2.839-.584-3.011-1.742a.255.255 0 0 0-.253-.215h-1.137a.252.252 0 0 0-.254.253c0 1.482.806 3.248 4.655 3.248 2.788.001 4.386-1.096 4.386-3.013z"
  })));
};

/* harmony default export */ const nodejs = (SvgNodejs);
;// CONCATENATED MODULE: ./public/icons/python.svg
var python_path;

function python_extends() { python_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return python_extends.apply(this, arguments); }



var SvgPython = function SvgPython(props) {
  return /*#__PURE__*/external_react_.createElement("svg", python_extends({
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), python_path || (python_path = /*#__PURE__*/external_react_.createElement("path", {
    d: "m14.31.18.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.83l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.06H3.23l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.26-.36-.36-.35-.46-.32-.59-.28-.73-.21-.88-.14-1.05L0 11.97l.06-1.22.16-1.04.24-.87.32-.71.36-.57.4-.44.42-.33.42-.24.4-.16.36-.1.32-.05.24-.01h.16l.06.01h8.16v-.83H6.24l-.01-2.75-.02-.37.05-.34.11-.31.17-.28.25-.26.31-.23.38-.2.44-.18.51-.15.58-.12.64-.1.71-.06.77-.04.84-.02 1.27.05 1.07.13zm-6.3 1.98-.23.33-.08.41.08.41.23.34.33.22.41.09.41-.09.33-.22.23-.34.08-.41-.08-.41-.23-.33-.33-.22-.41-.09-.41.09-.33.22zM21.1 6.11l.28.06.32.12.35.18.36.27.36.35.35.47.32.59.28.73.21.88.14 1.04.05 1.23-.06 1.23-.16 1.04-.24.86-.32.71-.36.57-.4.45-.42.33-.42.24-.4.16-.36.09-.32.05-.24.02-.16-.01h-8.22v.82h5.84l.01 2.76.02.36-.05.34-.11.31-.17.29-.25.25-.31.24-.38.2-.44.17-.51.15-.58.13-.64.09-.71.07-.77.04-.84.01-1.27-.04-1.07-.14-.9-.2-.73-.25-.59-.3-.45-.33-.34-.34-.25-.34-.16-.33-.1-.3-.04-.25-.02-.2.01-.13v-5.34l.05-.64.13-.54.21-.46.26-.38.3-.32.33-.24.35-.2.35-.14.33-.1.3-.06.26-.04.21-.02.13-.01h5.84l.69-.05.59-.14.5-.21.41-.28.33-.32.27-.35.2-.36.15-.36.1-.35.07-.32.04-.28.02-.21V6.07h2.09l.14.01.21.03zm-6.47 14.25-.23.33-.08.41.08.41.23.33.33.23.41.08.41-.08.33-.23.23-.33.08-.41-.08-.41-.23-.33-.33-.23-.41-.08-.41.08-.33.23z"
  })));
};

/* harmony default export */ const python = (SvgPython);
;// CONCATENATED MODULE: ./public/icons/react.svg
var react_path;

function react_extends() { react_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return react_extends.apply(this, arguments); }



var SvgReact = function SvgReact(props) {
  return /*#__PURE__*/external_react_.createElement("svg", react_extends({
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), react_path || (react_path = /*#__PURE__*/external_react_.createElement("path", {
    d: "M12 9.861a2.139 2.139 0 1 0 0 4.278 2.139 2.139 0 1 0 0-4.278zm-5.992 6.394-.472-.12C2.018 15.246 0 13.737 0 11.996s2.018-3.25 5.536-4.139l.472-.119.133.468a23.53 23.53 0 0 0 1.363 3.578l.101.213-.101.213a23.307 23.307 0 0 0-1.363 3.578l-.133.467zM5.317 8.95c-2.674.751-4.315 1.9-4.315 3.046 0 1.145 1.641 2.294 4.315 3.046a24.95 24.95 0 0 1 1.182-3.046A24.752 24.752 0 0 1 5.317 8.95zm12.675 7.305-.133-.469a23.357 23.357 0 0 0-1.364-3.577l-.101-.213.101-.213a23.42 23.42 0 0 0 1.364-3.578l.133-.468.473.119c3.517.889 5.535 2.398 5.535 4.14s-2.018 3.25-5.535 4.139l-.473.12zm-.491-4.259c.48 1.039.877 2.06 1.182 3.046 2.675-.752 4.315-1.901 4.315-3.046 0-1.146-1.641-2.294-4.315-3.046a24.788 24.788 0 0 1-1.182 3.046zM5.31 8.945l-.133-.467C4.188 4.992 4.488 2.494 6 1.622c1.483-.856 3.864.155 6.359 2.716l.34.349-.34.349a23.552 23.552 0 0 0-2.422 2.967l-.135.193-.235.02a23.657 23.657 0 0 0-3.785.61l-.472.119zm1.896-6.63c-.268 0-.505.058-.705.173-.994.573-1.17 2.565-.485 5.253a25.122 25.122 0 0 1 3.233-.501 24.847 24.847 0 0 1 2.052-2.544c-1.56-1.519-3.037-2.381-4.095-2.381zm9.589 20.362c-.001 0-.001 0 0 0-1.425 0-3.255-1.073-5.154-3.023l-.34-.349.34-.349a23.53 23.53 0 0 0 2.421-2.968l.135-.193.234-.02a23.63 23.63 0 0 0 3.787-.609l.472-.119.134.468c.987 3.484.688 5.983-.824 6.854a2.38 2.38 0 0 1-1.205.308zm-4.096-3.381c1.56 1.519 3.037 2.381 4.095 2.381h.001c.267 0 .505-.058.704-.173.994-.573 1.171-2.566.485-5.254a25.02 25.02 0 0 1-3.234.501 24.674 24.674 0 0 1-2.051 2.545zM18.69 8.945l-.472-.119a23.479 23.479 0 0 0-3.787-.61l-.234-.02-.135-.193a23.414 23.414 0 0 0-2.421-2.967l-.34-.349.34-.349C14.135 1.778 16.515.767 18 1.622c1.512.872 1.812 3.37.824 6.855l-.134.468zM14.75 7.24c1.142.104 2.227.273 3.234.501.686-2.688.509-4.68-.485-5.253-.988-.571-2.845.304-4.8 2.208A24.849 24.849 0 0 1 14.75 7.24zM7.206 22.677A2.38 2.38 0 0 1 6 22.369c-1.512-.871-1.812-3.369-.823-6.854l.132-.468.472.119c1.155.291 2.429.496 3.785.609l.235.02.134.193a23.596 23.596 0 0 0 2.422 2.968l.34.349-.34.349c-1.898 1.95-3.728 3.023-5.151 3.023zm-1.19-6.427c-.686 2.688-.509 4.681.485 5.254.987.563 2.843-.305 4.8-2.208a24.998 24.998 0 0 1-2.052-2.545 24.976 24.976 0 0 1-3.233-.501zm5.984.628c-.823 0-1.669-.036-2.516-.106l-.235-.02-.135-.193a30.388 30.388 0 0 1-1.35-2.122 30.354 30.354 0 0 1-1.166-2.228l-.1-.213.1-.213a30.3 30.3 0 0 1 1.166-2.228c.414-.716.869-1.43 1.35-2.122l.135-.193.235-.02a29.785 29.785 0 0 1 5.033 0l.234.02.134.193a30.006 30.006 0 0 1 2.517 4.35l.101.213-.101.213a29.6 29.6 0 0 1-2.517 4.35l-.134.193-.234.02c-.847.07-1.694.106-2.517.106zm-2.197-1.084c1.48.111 2.914.111 4.395 0a29.006 29.006 0 0 0 2.196-3.798 28.585 28.585 0 0 0-2.197-3.798 29.031 29.031 0 0 0-4.394 0 28.477 28.477 0 0 0-2.197 3.798 29.114 29.114 0 0 0 2.197 3.798z"
  })));
};

/* harmony default export */ const react = (SvgReact);
;// CONCATENATED MODULE: ./public/icons/sql.svg
var sql_path;

function sql_extends() { sql_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return sql_extends.apply(this, arguments); }



var SvgSql = function SvgSql(props) {
  return /*#__PURE__*/external_react_.createElement("svg", sql_extends({
    height: 32,
    width: 32,
    xmlns: "http://www.w3.org/2000/svg"
  }, props), sql_path || (sql_path = /*#__PURE__*/external_react_.createElement("path", {
    d: "M21 26v2.003A1.995 1.995 0 0 1 19.003 30H3.997A2 2 0 0 1 2 27.993V5.007C2 3.898 2.9 3 4.009 3H14v6.002c0 1.111.898 1.998 2.006 1.998H21v2h-9.993A3.003 3.003 0 0 0 8 15.999V23A2.996 2.996 0 0 0 11.007 26H21ZM15 3v5.997c0 .554.451 1.003.99 1.003H21l-6-7Zm-4.005 11C9.893 14 9 14.9 9 15.992v7.016A2 2 0 0 0 10.995 25h17.01C29.107 25 30 24.1 30 23.008v-7.016A2 2 0 0 0 28.005 14h-17.01Zm9.68 8.883a2.017 2.017 0 0 1-.68.117h-.99A2.003 2.003 0 0 1 17 20.994v-2.988c0-1.12.898-2.006 2.005-2.006h.99c1.111 0 2.005.898 2.005 2.006v2.988c0 .505-.183.963-.485 1.313l.753.754-.707.707-.885-.885ZM19.794 22h-.794A.996.996 0 0 1 18 21v-3c0-.556.447-1 .999-1h1.002c.556 0 .999.448.999 1v3c0 .225-.073.43-.196.597l-1.365-1.365-.707.707L19.792 22Zm-6.788-6A1.998 1.998 0 0 0 11 18c0 1.105.888 2 2 2h.99c.558 0 1.01.444 1.01 1 0 .552-.443 1-.999 1h-1.002c-.552 0-.999-.456-.999-.996v-.01h-1v.005A2 2 0 0 0 13.005 23h.99A1.998 1.998 0 0 0 16 21c0-1.105-.888-2-2-2h-.99c-.558 0-1.01-.444-1.01-1 0-.552.443-1 .999-1h1.002c.552 0 .999.453.999 1h1a2 2 0 0 0-2.005-2h-.99ZM28 22v1h-5v-7h1v6h4Z",
    fill: "#157EFB",
    fillRule: "evenodd"
  })));
};

/* harmony default export */ const sql = (SvgSql);
;// CONCATENATED MODULE: ./public/icons/twitter.svg
var twitter_path;

function twitter_extends() { twitter_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return twitter_extends.apply(this, arguments); }



var SvgTwitter = function SvgTwitter(props) {
  return /*#__PURE__*/external_react_.createElement("svg", twitter_extends({
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), twitter_path || (twitter_path = /*#__PURE__*/external_react_.createElement("path", {
    d: "M23.954 4.569a10 10 0 0 1-2.825.775 4.958 4.958 0 0 0 2.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 0 0-8.384 4.482C7.691 8.094 4.066 6.13 1.64 3.161a4.822 4.822 0 0 0-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 0 1-2.228-.616v.061a4.923 4.923 0 0 0 3.946 4.827 4.996 4.996 0 0 1-2.212.085 4.937 4.937 0 0 0 4.604 3.417 9.868 9.868 0 0 1-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 0 0 7.557 2.209c9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63a9.936 9.936 0 0 0 2.46-2.548l-.047-.02z"
  })));
};

/* harmony default export */ const twitter = (SvgTwitter);
;// CONCATENATED MODULE: ./src/components/Icon.tsx





















function Icon({ name , small , noEffect  }) {
    var classNames = [
        'icon',
        small && 'icon--small',
        noEffect && 'icon--no-effect'
    ].join(' ');
    return(/*#__PURE__*/ jsx_runtime_.jsx("span", {
        className: classNames,
        children: {
            arrowBack: /*#__PURE__*/ jsx_runtime_.jsx(arrowBack, {}),
            arrowForward: /*#__PURE__*/ jsx_runtime_.jsx(arrowForward, {}),
            externalLink: /*#__PURE__*/ jsx_runtime_.jsx(externalLink, {}),
            bulb: /*#__PURE__*/ jsx_runtime_.jsx(bulb, {}),
            twitter: /*#__PURE__*/ jsx_runtime_.jsx(twitter, {}),
            linkedin: /*#__PURE__*/ jsx_runtime_.jsx(linkedin, {}),
            github: /*#__PURE__*/ jsx_runtime_.jsx(github, {}),
            csharp: /*#__PURE__*/ jsx_runtime_.jsx(csharp, {}),
            clanguage: /*#__PURE__*/ jsx_runtime_.jsx(c, {}),
            css: /*#__PURE__*/ jsx_runtime_.jsx(css, {}),
            flutter: /*#__PURE__*/ jsx_runtime_.jsx(flutter, {}),
            html: /*#__PURE__*/ jsx_runtime_.jsx(html, {}),
            java: /*#__PURE__*/ jsx_runtime_.jsx(java, {}),
            javascript: /*#__PURE__*/ jsx_runtime_.jsx(javascript, {}),
            nodejs: /*#__PURE__*/ jsx_runtime_.jsx(nodejs, {}),
            python: /*#__PURE__*/ jsx_runtime_.jsx(python, {}),
            react: /*#__PURE__*/ jsx_runtime_.jsx(react, {}),
            email: /*#__PURE__*/ jsx_runtime_.jsx(email, {}),
            sql: /*#__PURE__*/ jsx_runtime_.jsx(sql, {})
        }[name]
    }));
};


/***/ }),

/***/ 7421:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_Layout)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./src/components/Button.tsx
var Button = __webpack_require__(8663);
// EXTERNAL MODULE: ./src/components/Icon.tsx + 19 modules
var Icon = __webpack_require__(5411);
// EXTERNAL MODULE: ./src/styles/components/Navbar.module.scss
var Navbar_module = __webpack_require__(3578);
var Navbar_module_default = /*#__PURE__*/__webpack_require__.n(Navbar_module);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./src/components/Navbar.tsx




function Navbar() {
    const { 0: scrollY , 1: setScrollY  } = (0,external_react_.useState)(0);
    const { 0: IsNavOpen , 1: setIsNavOpen  } = (0,external_react_.useState)(false);
    const updateScrollYValue = ()=>{
        setScrollY(window.scrollY);
    };
    const closeNav = ()=>{
        if (IsNavOpen) setIsNavOpen(!IsNavOpen);
    };
    (0,external_react_.useEffect)(()=>{
        updateScrollYValue();
        window.addEventListener('scroll', updateScrollYValue);
        return ()=>{
            window.removeEventListener('scroll', updateScrollYValue);
        };
    }, []);
    return(/*#__PURE__*/ jsx_runtime_.jsx("nav", {
        className: [
            (Navbar_module_default()).navbar,
            scrollY && (Navbar_module_default())["navbar--scrolled"]
        ].join(' '),
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: (Navbar_module_default()).wrapper,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                    href: "/",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                        className: (Navbar_module_default())["navbar-brand"],
                        onClick: closeNav,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                children: "adilson"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                children: "soares"
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                    className: [
                        (Navbar_module_default())["navbar-toggle"],
                        IsNavOpen && (Navbar_module_default())["navbar-toggle--show"]
                    ].join(' '),
                    onClick: ()=>setIsNavOpen(!IsNavOpen)
                    ,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: (Navbar_module_default())["toggle-line"]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: (Navbar_module_default())["toggle-line"]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: (Navbar_module_default())["toggle-line"]
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: [
                        (Navbar_module_default())["navbar-collapse"],
                        IsNavOpen && (Navbar_module_default())["navbar-collapse--show"]
                    ].join(' '),
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                        className: (Navbar_module_default())["navbar-nav"],
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                className: (Navbar_module_default())["nav-item"],
                                onClick: closeNav,
                                children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                    href: "/#aboutme",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        className: "nav-link",
                                        children: "About"
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                className: (Navbar_module_default())["nav-item"],
                                onClick: closeNav,
                                children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                    href: "/#education",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        className: "nav-link",
                                        children: "Education"
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                className: (Navbar_module_default())["nav-item"],
                                onClick: closeNav,
                                children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                    href: "/#skills",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        className: "nav-link",
                                        children: "Skills"
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                className: (Navbar_module_default())["nav-item"],
                                onClick: closeNav,
                                children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                    href: "/#experience",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        className: "nav-link",
                                        children: "Experience"
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                className: (Navbar_module_default())["nav-item"],
                                onClick: closeNav,
                                children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                    href: "/#projects",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        className: "nav-link",
                                        children: "Projects"
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                className: (Navbar_module_default())["nav-item"],
                                onClick: closeNav,
                                children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                    href: "/#contact",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        className: "nav-link",
                                        children: "Contact"
                                    })
                                })
                            })
                        ]
                    })
                })
            ]
        })
    }));
};

// EXTERNAL MODULE: external "use-dark-mode"
var external_use_dark_mode_ = __webpack_require__(9256);
var external_use_dark_mode_default = /*#__PURE__*/__webpack_require__.n(external_use_dark_mode_);
;// CONCATENATED MODULE: ./src/components/Layout.tsx






const Layout = ({ children , scrollSmooth: scrollSmooth1  })=>{
    const darkmode = external_use_dark_mode_default()(true);
    const setSmoothScroll = (scrollSmooth)=>{
        if (false) {}
    };
    setSmoothScroll(scrollSmooth1);
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "helper-buttons",
                children: /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                    onClick: darkmode.toggle,
                    type: "circular",
                    htmlElement: "div",
                    children: /*#__PURE__*/ jsx_runtime_.jsx(Icon/* default */.Z, {
                        name: "bulb",
                        small: true
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Navbar, {}),
            children,
            /*#__PURE__*/ jsx_runtime_.jsx("footer", {
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            children: "Designed and developed Adilson Soares"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            children: "All Rights Reserved"
                        })
                    ]
                })
            })
        ]
    }));
};
Layout.defaultProps = {
    scrollSmooth: false
};
/* harmony default export */ const components_Layout = (Layout);


/***/ }),

/***/ 4682:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_components_Typhography_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9415);
/* harmony import */ var _styles_components_Typhography_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_components_Typhography_module_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);



const Typhography = ({ children , type , color , strong , header , upperCase  })=>{
    var classNames = [
        (_styles_components_Typhography_module_scss__WEBPACK_IMPORTED_MODULE_2___default().typhography),
        type && (_styles_components_Typhography_module_scss__WEBPACK_IMPORTED_MODULE_2___default())[`typhography-${type}`],
        color && (_styles_components_Typhography_module_scss__WEBPACK_IMPORTED_MODULE_2___default())[`typhography--${color}`],
        header && (_styles_components_Typhography_module_scss__WEBPACK_IMPORTED_MODULE_2___default())[`typhography-header`],
        strong && (_styles_components_Typhography_module_scss__WEBPACK_IMPORTED_MODULE_2___default())[`typhography--strong`],
        upperCase && (_styles_components_Typhography_module_scss__WEBPACK_IMPORTED_MODULE_2___default())[`typhography--uppercase`]
    ].join(' ');
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: classNames,
        children: children
    }));
};
Typhography.defaultProps = {
    color: 'default',
    header: false,
    strong: false,
    upperCase: false
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Typhography);


/***/ }),

/***/ 2246:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ useData)
/* harmony export */ });
function useData(filename) {
    var data = __webpack_require__(917)(`./${filename}`);
    return data;
};


/***/ }),

/***/ 917:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./education": 7484,
	"./education.json": 7484,
	"./experiences": 3684,
	"./experiences.json": 3684,
	"./personal": 9691,
	"./personal.json": 9691,
	"./projects": 3743,
	"./projects.json": 3743,
	"./skills": 343,
	"./skills.json": 343
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 917;

/***/ }),

/***/ 7484:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('[{"id":"csmpt1","title":"Software Engineer","entity":{"name":"EPED"},"startDate":"09/2011","endDate":"07/2014","sectionDescription":[{"title":null,"description":["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam in cursus turpis, vitae semper lorem. Cras ligula nibh, congue vel dolor quis, interdum blandit diam. Quisque nunc risus, euismod ac ex sollicitudin, pulvinar bibendum velit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vitae felis id massa ultrices dictum. Aliquam gravida pretium tristique. Maecenas dictum, lacus ut fringilla consequat, odio turpis tempus dui, eu luctus lorem diam mollis arcu. Cras nec vestibulum ex, eu hendrerit dui. Curabitur sed lorem arcu.","Nulla eu arcu ut felis congue pellentesque. Suspendisse massa nibh, ultricies sit amet mi sed, interdum semper metus. Nulla dictum risus sodales arcu semper sollicitudin. Ut eleifend orci eget metus posuere rutrum. Integer rutrum viverra massa et sagittis. Suspendisse congue imperdiet diam, ac luctus orci pulvinar elementum. Nullam interdum imperdiet dignissim. Nunc vitae vulputate odio."]},{"title":"Section two","description":["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam in cursus turpis, vitae semper lorem. Cras ligula nibh, congue vel dolor quis, interdum blandit diam. Quisque nunc risus, euismod ac ex sollicitudin, pulvinar bibendum velit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vitae felis id massa ultrices dictum. Aliquam gravida pretium tristique. Maecenas dictum, lacus ut fringilla consequat, odio turpis tempus dui, eu luctus lorem diam mollis arcu. Cras nec vestibulum ex, eu hendrerit dui. Curabitur sed lorem arcu.","Nulla eu arcu ut felis congue pellentesque. Suspendisse massa nibh, ultricies sit amet mi sed, interdum semper metus. Nulla dictum risus sodales arcu semper sollicitudin. Ut eleifend orci eget metus posuere rutrum. Integer rutrum viverra massa et sagittis. Suspendisse congue imperdiet diam, ac luctus orci pulvinar elementum. Nullam interdum imperdiet dignissim. Nunc vitae vulputate odio.","Mauris non rhoncus ex. Praesent eu semper nunc. Quisque vel nunc sit amet enim vulputate sagittis sed a diam. In porta sem congue, efficitur nibh id, volutpat diam. Duis rutrum ante nulla, sollicitudin ultricies ipsum malesuada in. Praesent elementum gravida nulla id fringilla. Duis sed metus vitae enim aliquam consectetur. Maecenas a congue purus, non fringilla enim. Proin nisl ligula, feugiat at quam vel, gravida mattis felis. Sed quis magna vel risus egestas ultrices et eu justo. Duis egestas justo ut purus viverra sodales."]}],"images":[{"url":"/images/gascan.png","alt":"gascan"},{"url":"/images/gllg.png","alt":"gllg"},{"url":"/images/img_home.jpg","alt":"Home"},{"url":"/images/inspire_it_internal_portal.png","alt":"InspireIT Portal"},{"url":"/images/portfolio.png","alt":"Portfolio"}],"visitButton":{"text":"Visit Website","url":"/education/csmpt2"}},{"id":"csmpt2","title":"Computer Systems Management and Programming Technician","entity":{"name":"EPED"},"startDate":"09/2011","endDate":"07/2014","sectionDescription":[{"title":null,"description":["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam in cursus turpis, vitae semper lorem. Cras ligula nibh, congue vel dolor quis, interdum blandit diam. Quisque nunc risus, euismod ac ex sollicitudin, pulvinar bibendum velit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vitae felis id massa ultrices dictum. Aliquam gravida pretium tristique. Maecenas dictum, lacus ut fringilla consequat, odio turpis tempus dui, eu luctus lorem diam mollis arcu. Cras nec vestibulum ex, eu hendrerit dui. Curabitur sed lorem arcu.","Nulla eu arcu ut felis congue pellentesque. Suspendisse massa nibh, ultricies sit amet mi sed, interdum semper metus. Nulla dictum risus sodales arcu semper sollicitudin. Ut eleifend orci eget metus posuere rutrum. Integer rutrum viverra massa et sagittis. Suspendisse congue imperdiet diam, ac luctus orci pulvinar elementum. Nullam interdum imperdiet dignissim. Nunc vitae vulputate odio.","Mauris non rhoncus ex. Praesent eu semper nunc. Quisque vel nunc sit amet enim vulputate sagittis sed a diam. In porta sem congue, efficitur nibh id, volutpat diam. Duis rutrum ante nulla, sollicitudin ultricies ipsum malesuada in. Praesent elementum gravida nulla id fringilla. Duis sed metus vitae enim aliquam consectetur. Maecenas a congue purus, non fringilla enim. Proin nisl ligula, feugiat at quam vel, gravida mattis felis. Sed quis magna vel risus egestas ultrices et eu justo. Duis egestas justo ut purus viverra sodales."]}]},{"id":"csmpt","title":"Computer Systems Management and Programming Technician","entity":{"name":"EPED"},"startDate":"09/2011","endDate":"07/2014","sectionDescription":[{"title":null,"description":["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam in cursus turpis, vitae semper lorem. Cras ligula nibh, congue vel dolor quis, interdum blandit diam. Quisque nunc risus, euismod ac ex sollicitudin, pulvinar bibendum velit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vitae felis id massa ultrices dictum. Aliquam gravida pretium tristique. Maecenas dictum, lacus ut fringilla consequat, odio turpis tempus dui, eu luctus lorem diam mollis arcu. Cras nec vestibulum ex, eu hendrerit dui. Curabitur sed lorem arcu.","Nulla eu arcu ut felis congue pellentesque. Suspendisse massa nibh, ultricies sit amet mi sed, interdum semper metus. Nulla dictum risus sodales arcu semper sollicitudin. Ut eleifend orci eget metus posuere rutrum. Integer rutrum viverra massa et sagittis. Suspendisse congue imperdiet diam, ac luctus orci pulvinar elementum. Nullam interdum imperdiet dignissim. Nunc vitae vulputate odio.","Mauris non rhoncus ex. Praesent eu semper nunc. Quisque vel nunc sit amet enim vulputate sagittis sed a diam. In porta sem congue, efficitur nibh id, volutpat diam. Duis rutrum ante nulla, sollicitudin ultricies ipsum malesuada in. Praesent elementum gravida nulla id fringilla. Duis sed metus vitae enim aliquam consectetur. Maecenas a congue purus, non fringilla enim. Proin nisl ligula, feugiat at quam vel, gravida mattis felis. Sed quis magna vel risus egestas ultrices et eu justo. Duis egestas justo ut purus viverra sodales."]}]},{"id":"csmpt4","title":"Computer Systems Management and Programming Technician","entity":{"name":"EPED"},"startDate":"09/2011","endDate":"07/2014","sectionDescription":[{"title":null,"description":["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam in cursus turpis, vitae semper lorem. Cras ligula nibh, congue vel dolor quis, interdum blandit diam. Quisque nunc risus, euismod ac ex sollicitudin, pulvinar bibendum velit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vitae felis id massa ultrices dictum. Aliquam gravida pretium tristique. Maecenas dictum, lacus ut fringilla consequat, odio turpis tempus dui, eu luctus lorem diam mollis arcu. Cras nec vestibulum ex, eu hendrerit dui. Curabitur sed lorem arcu.","Nulla eu arcu ut felis congue pellentesque. Suspendisse massa nibh, ultricies sit amet mi sed, interdum semper metus. Nulla dictum risus sodales arcu semper sollicitudin. Ut eleifend orci eget metus posuere rutrum. Integer rutrum viverra massa et sagittis. Suspendisse congue imperdiet diam, ac luctus orci pulvinar elementum. Nullam interdum imperdiet dignissim. Nunc vitae vulputate odio.","Mauris non rhoncus ex. Praesent eu semper nunc. Quisque vel nunc sit amet enim vulputate sagittis sed a diam. In porta sem congue, efficitur nibh id, volutpat diam. Duis rutrum ante nulla, sollicitudin ultricies ipsum malesuada in. Praesent elementum gravida nulla id fringilla. Duis sed metus vitae enim aliquam consectetur. Maecenas a congue purus, non fringilla enim. Proin nisl ligula, feugiat at quam vel, gravida mattis felis. Sed quis magna vel risus egestas ultrices et eu justo. Duis egestas justo ut purus viverra sodales."]}]},{"id":"csmpt5","title":"Computer Systems Management and Programming Technician","entity":{"name":"EPED"},"startDate":"09/2011","endDate":"07/2014","sectionDescription":[{"title":null,"description":["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam in cursus turpis, vitae semper lorem. Cras ligula nibh, congue vel dolor quis, interdum blandit diam. Quisque nunc risus, euismod ac ex sollicitudin, pulvinar bibendum velit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vitae felis id massa ultrices dictum. Aliquam gravida pretium tristique. Maecenas dictum, lacus ut fringilla consequat, odio turpis tempus dui, eu luctus lorem diam mollis arcu. Cras nec vestibulum ex, eu hendrerit dui. Curabitur sed lorem arcu.","Nulla eu arcu ut felis congue pellentesque. Suspendisse massa nibh, ultricies sit amet mi sed, interdum semper metus. Nulla dictum risus sodales arcu semper sollicitudin. Ut eleifend orci eget metus posuere rutrum. Integer rutrum viverra massa et sagittis. Suspendisse congue imperdiet diam, ac luctus orci pulvinar elementum. Nullam interdum imperdiet dignissim. Nunc vitae vulputate odio.","Mauris non rhoncus ex. Praesent eu semper nunc. Quisque vel nunc sit amet enim vulputate sagittis sed a diam. In porta sem congue, efficitur nibh id, volutpat diam. Duis rutrum ante nulla, sollicitudin ultricies ipsum malesuada in. Praesent elementum gravida nulla id fringilla. Duis sed metus vitae enim aliquam consectetur. Maecenas a congue purus, non fringilla enim. Proin nisl ligula, feugiat at quam vel, gravida mattis felis. Sed quis magna vel risus egestas ultrices et eu justo. Duis egestas justo ut purus viverra sodales."]}]}]');

/***/ }),

/***/ 3684:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('[{"id":"csmpt1","title":"Software Engineer","entity":{"logoUrl":"/images/logo-inspireit.png","name":"EPED"},"startDate":"09/2011","endDate":"07/2014","sectionDescription":[{"title":null,"description":["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam in cursus turpis, vitae semper lorem. Cras ligula nibh, congue vel dolor quis, interdum blandit diam. Quisque nunc risus, euismod ac ex sollicitudin, pulvinar bibendum velit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vitae felis id massa ultrices dictum. Aliquam gravida pretium tristique. Maecenas dictum, lacus ut fringilla consequat, odio turpis tempus dui, eu luctus lorem diam mollis arcu. Cras nec vestibulum ex, eu hendrerit dui. Curabitur sed lorem arcu.","Nulla eu arcu ut felis congue pellentesque. Suspendisse massa nibh, ultricies sit amet mi sed, interdum semper metus. Nulla dictum risus sodales arcu semper sollicitudin. Ut eleifend orci eget metus posuere rutrum. Integer rutrum viverra massa et sagittis. Suspendisse congue imperdiet diam, ac luctus orci pulvinar elementum. Nullam interdum imperdiet dignissim. Nunc vitae vulputate odio."]},{"title":"Section two","description":["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam in cursus turpis, vitae semper lorem. Cras ligula nibh, congue vel dolor quis, interdum blandit diam. Quisque nunc risus, euismod ac ex sollicitudin, pulvinar bibendum velit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vitae felis id massa ultrices dictum. Aliquam gravida pretium tristique. Maecenas dictum, lacus ut fringilla consequat, odio turpis tempus dui, eu luctus lorem diam mollis arcu. Cras nec vestibulum ex, eu hendrerit dui. Curabitur sed lorem arcu.","Nulla eu arcu ut felis congue pellentesque. Suspendisse massa nibh, ultricies sit amet mi sed, interdum semper metus. Nulla dictum risus sodales arcu semper sollicitudin. Ut eleifend orci eget metus posuere rutrum. Integer rutrum viverra massa et sagittis. Suspendisse congue imperdiet diam, ac luctus orci pulvinar elementum. Nullam interdum imperdiet dignissim. Nunc vitae vulputate odio.","Mauris non rhoncus ex. Praesent eu semper nunc. Quisque vel nunc sit amet enim vulputate sagittis sed a diam. In porta sem congue, efficitur nibh id, volutpat diam. Duis rutrum ante nulla, sollicitudin ultricies ipsum malesuada in. Praesent elementum gravida nulla id fringilla. Duis sed metus vitae enim aliquam consectetur. Maecenas a congue purus, non fringilla enim. Proin nisl ligula, feugiat at quam vel, gravida mattis felis. Sed quis magna vel risus egestas ultrices et eu justo. Duis egestas justo ut purus viverra sodales."]}],"images":[{"url":"/images/gascan.png","alt":"gascan"},{"url":"/images/gllg.png","alt":"gllg"},{"url":"/images/img_home.jpg","alt":"Home"},{"url":"/images/inspire_it_internal_portal.png","alt":"InspireIT Portal"},{"url":"/images/portfolio.png","alt":"Portfolio"}],"visitButton":{"text":"Visit Website","url":"/education/csmpt2"}},{"id":"csmpt2","title":"Computer Systems Management and Programming Technician","entity":{"name":"EPED"},"startDate":"09/2011","endDate":"07/2014","sectionDescription":[{"title":null,"description":["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam in cursus turpis, vitae semper lorem. Cras ligula nibh, congue vel dolor quis, interdum blandit diam. Quisque nunc risus, euismod ac ex sollicitudin, pulvinar bibendum velit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vitae felis id massa ultrices dictum. Aliquam gravida pretium tristique. Maecenas dictum, lacus ut fringilla consequat, odio turpis tempus dui, eu luctus lorem diam mollis arcu. Cras nec vestibulum ex, eu hendrerit dui. Curabitur sed lorem arcu.","Nulla eu arcu ut felis congue pellentesque. Suspendisse massa nibh, ultricies sit amet mi sed, interdum semper metus. Nulla dictum risus sodales arcu semper sollicitudin. Ut eleifend orci eget metus posuere rutrum. Integer rutrum viverra massa et sagittis. Suspendisse congue imperdiet diam, ac luctus orci pulvinar elementum. Nullam interdum imperdiet dignissim. Nunc vitae vulputate odio.","Mauris non rhoncus ex. Praesent eu semper nunc. Quisque vel nunc sit amet enim vulputate sagittis sed a diam. In porta sem congue, efficitur nibh id, volutpat diam. Duis rutrum ante nulla, sollicitudin ultricies ipsum malesuada in. Praesent elementum gravida nulla id fringilla. Duis sed metus vitae enim aliquam consectetur. Maecenas a congue purus, non fringilla enim. Proin nisl ligula, feugiat at quam vel, gravida mattis felis. Sed quis magna vel risus egestas ultrices et eu justo. Duis egestas justo ut purus viverra sodales."]}]},{"id":"csmpt3","title":"Computer Systems Management and Programming Technician","entity":{"name":"EPED"},"startDate":"09/2011","endDate":"07/2014","sectionDescription":[{"title":null,"description":["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam in cursus turpis, vitae semper lorem. Cras ligula nibh, congue vel dolor quis, interdum blandit diam. Quisque nunc risus, euismod ac ex sollicitudin, pulvinar bibendum velit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vitae felis id massa ultrices dictum. Aliquam gravida pretium tristique. Maecenas dictum, lacus ut fringilla consequat, odio turpis tempus dui, eu luctus lorem diam mollis arcu. Cras nec vestibulum ex, eu hendrerit dui. Curabitur sed lorem arcu.","Nulla eu arcu ut felis congue pellentesque. Suspendisse massa nibh, ultricies sit amet mi sed, interdum semper metus. Nulla dictum risus sodales arcu semper sollicitudin. Ut eleifend orci eget metus posuere rutrum. Integer rutrum viverra massa et sagittis. Suspendisse congue imperdiet diam, ac luctus orci pulvinar elementum. Nullam interdum imperdiet dignissim. Nunc vitae vulputate odio.","Mauris non rhoncus ex. Praesent eu semper nunc. Quisque vel nunc sit amet enim vulputate sagittis sed a diam. In porta sem congue, efficitur nibh id, volutpat diam. Duis rutrum ante nulla, sollicitudin ultricies ipsum malesuada in. Praesent elementum gravida nulla id fringilla. Duis sed metus vitae enim aliquam consectetur. Maecenas a congue purus, non fringilla enim. Proin nisl ligula, feugiat at quam vel, gravida mattis felis. Sed quis magna vel risus egestas ultrices et eu justo. Duis egestas justo ut purus viverra sodales."]}]},{"id":"csmpt4","title":"Computer Systems Management and Programming Technician","entity":{"name":"EPED"},"startDate":"09/2011","endDate":"07/2014","sectionDescription":[{"title":null,"description":["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam in cursus turpis, vitae semper lorem. Cras ligula nibh, congue vel dolor quis, interdum blandit diam. Quisque nunc risus, euismod ac ex sollicitudin, pulvinar bibendum velit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vitae felis id massa ultrices dictum. Aliquam gravida pretium tristique. Maecenas dictum, lacus ut fringilla consequat, odio turpis tempus dui, eu luctus lorem diam mollis arcu. Cras nec vestibulum ex, eu hendrerit dui. Curabitur sed lorem arcu.","Nulla eu arcu ut felis congue pellentesque. Suspendisse massa nibh, ultricies sit amet mi sed, interdum semper metus. Nulla dictum risus sodales arcu semper sollicitudin. Ut eleifend orci eget metus posuere rutrum. Integer rutrum viverra massa et sagittis. Suspendisse congue imperdiet diam, ac luctus orci pulvinar elementum. Nullam interdum imperdiet dignissim. Nunc vitae vulputate odio.","Mauris non rhoncus ex. Praesent eu semper nunc. Quisque vel nunc sit amet enim vulputate sagittis sed a diam. In porta sem congue, efficitur nibh id, volutpat diam. Duis rutrum ante nulla, sollicitudin ultricies ipsum malesuada in. Praesent elementum gravida nulla id fringilla. Duis sed metus vitae enim aliquam consectetur. Maecenas a congue purus, non fringilla enim. Proin nisl ligula, feugiat at quam vel, gravida mattis felis. Sed quis magna vel risus egestas ultrices et eu justo. Duis egestas justo ut purus viverra sodales."]}]},{"id":"csmpt5","title":"Computer Systems Management and Programming Technician","entity":{"name":"EPED"},"startDate":"09/2011","endDate":"07/2014","sectionDescription":[{"title":null,"description":["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam in cursus turpis, vitae semper lorem. Cras ligula nibh, congue vel dolor quis, interdum blandit diam. Quisque nunc risus, euismod ac ex sollicitudin, pulvinar bibendum velit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vitae felis id massa ultrices dictum. Aliquam gravida pretium tristique. Maecenas dictum, lacus ut fringilla consequat, odio turpis tempus dui, eu luctus lorem diam mollis arcu. Cras nec vestibulum ex, eu hendrerit dui. Curabitur sed lorem arcu.","Nulla eu arcu ut felis congue pellentesque. Suspendisse massa nibh, ultricies sit amet mi sed, interdum semper metus. Nulla dictum risus sodales arcu semper sollicitudin. Ut eleifend orci eget metus posuere rutrum. Integer rutrum viverra massa et sagittis. Suspendisse congue imperdiet diam, ac luctus orci pulvinar elementum. Nullam interdum imperdiet dignissim. Nunc vitae vulputate odio.","Mauris non rhoncus ex. Praesent eu semper nunc. Quisque vel nunc sit amet enim vulputate sagittis sed a diam. In porta sem congue, efficitur nibh id, volutpat diam. Duis rutrum ante nulla, sollicitudin ultricies ipsum malesuada in. Praesent elementum gravida nulla id fringilla. Duis sed metus vitae enim aliquam consectetur. Maecenas a congue purus, non fringilla enim. Proin nisl ligula, feugiat at quam vel, gravida mattis felis. Sed quis magna vel risus egestas ultrices et eu justo. Duis egestas justo ut purus viverra sodales."]}]}]');

/***/ }),

/***/ 9691:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"title":"Adilson Soares","subtitle":"Software Developer & Software Engineer","shortDescription":"As a software engineer, I like to participate and build applications that are well structured in terms of architecture and code quality promoting a good developer experience","description":["I am a Software Developer who designs, builds and sometimes applications. I like to participate and build well-structured applications in terms of architecture and code quality. I also like to deliver a product with great design and that promotes a good user experience.","With a degree in computer engineering, having previously taken a course in computer systems management and programming technician, one of my goals is to grow in terms of knowledge, which is why I always keep up with technological news and learn new languages ​​and tools.","I am a professional of back-end and front-end. I have been developing applications in C# for backend and ReactJS for frontend, but I am fit and available for development in other stacks.","In my spare time I like to develop new ideas and personal applications, from the creation of the graphical interface to its final functionalities. Another of my hobbies is exercising and cooking."],"contacts":{"twitter":"https://twitter.com/adilsonmsoares","linkedin":"https://www.linkedin.com/in/adilsonsoares/","github":"https://github.com/adilsonmsoares","email":"adilsonm-soares@hotmail.com"},"location":"Almada, Portugal"}');

/***/ }),

/***/ 3743:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('[{"id":"csmpt1","title":"Gascan","entity":{"name":"InspireIT"},"startDate":"09/2011","endDate":"07/2014","stack":["ASP.NET Core","Jquery"],"sectionDescription":[{"title":null,"description":["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam in cursus turpis, vitae semper lorem. Cras ligula nibh, congue vel dolor quis, interdum blandit diam. Quisque nunc risus, euismod ac ex sollicitudin, pulvinar bibendum velit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vitae felis id massa ultrices dictum. Aliquam gravida pretium tristique. Maecenas dictum, lacus ut fringilla consequat, odio turpis tempus dui, eu luctus lorem diam mollis arcu. Cras nec vestibulum ex, eu hendrerit dui. Curabitur sed lorem arcu.","Nulla eu arcu ut felis congue pellentesque. Suspendisse massa nibh, ultricies sit amet mi sed, interdum semper metus. Nulla dictum risus sodales arcu semper sollicitudin. Ut eleifend orci eget metus posuere rutrum. Integer rutrum viverra massa et sagittis. Suspendisse congue imperdiet diam, ac luctus orci pulvinar elementum. Nullam interdum imperdiet dignissim. Nunc vitae vulputate odio."]},{"title":"Section two","description":["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam in cursus turpis, vitae semper lorem. Cras ligula nibh, congue vel dolor quis, interdum blandit diam. Quisque nunc risus, euismod ac ex sollicitudin, pulvinar bibendum velit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vitae felis id massa ultrices dictum. Aliquam gravida pretium tristique. Maecenas dictum, lacus ut fringilla consequat, odio turpis tempus dui, eu luctus lorem diam mollis arcu. Cras nec vestibulum ex, eu hendrerit dui. Curabitur sed lorem arcu.","Nulla eu arcu ut felis congue pellentesque. Suspendisse massa nibh, ultricies sit amet mi sed, interdum semper metus. Nulla dictum risus sodales arcu semper sollicitudin. Ut eleifend orci eget metus posuere rutrum. Integer rutrum viverra massa et sagittis. Suspendisse congue imperdiet diam, ac luctus orci pulvinar elementum. Nullam interdum imperdiet dignissim. Nunc vitae vulputate odio.","Mauris non rhoncus ex. Praesent eu semper nunc. Quisque vel nunc sit amet enim vulputate sagittis sed a diam. In porta sem congue, efficitur nibh id, volutpat diam. Duis rutrum ante nulla, sollicitudin ultricies ipsum malesuada in. Praesent elementum gravida nulla id fringilla. Duis sed metus vitae enim aliquam consectetur. Maecenas a congue purus, non fringilla enim. Proin nisl ligula, feugiat at quam vel, gravida mattis felis. Sed quis magna vel risus egestas ultrices et eu justo. Duis egestas justo ut purus viverra sodales."]}],"images":[{"url":"/images/gascan.png","alt":"gascan"},{"url":"/images/gllg.png","alt":"gllg"},{"url":"/images/img_home.jpg","alt":"Home"},{"url":"/images/inspire_it_internal_portal.png","alt":"InspireIT Portal"},{"url":"/images/portfolio.png","alt":"Portfolio"}],"visitButton":{"text":"Visit Website","url":"/education/csmpt2"},"categories":["software"]},{"id":"csmpt2","title":"GLLG","entity":{"name":"InspireIT"},"startDate":"09/2011","endDate":"07/2014","stack":["ASP.NET Framework"],"sectionDescription":[{"title":null,"description":["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam in cursus turpis, vitae semper lorem. Cras ligula nibh, congue vel dolor quis, interdum blandit diam. Quisque nunc risus, euismod ac ex sollicitudin, pulvinar bibendum velit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vitae felis id massa ultrices dictum. Aliquam gravida pretium tristique. Maecenas dictum, lacus ut fringilla consequat, odio turpis tempus dui, eu luctus lorem diam mollis arcu. Cras nec vestibulum ex, eu hendrerit dui. Curabitur sed lorem arcu.","Nulla eu arcu ut felis congue pellentesque. Suspendisse massa nibh, ultricies sit amet mi sed, interdum semper metus. Nulla dictum risus sodales arcu semper sollicitudin. Ut eleifend orci eget metus posuere rutrum. Integer rutrum viverra massa et sagittis. Suspendisse congue imperdiet diam, ac luctus orci pulvinar elementum. Nullam interdum imperdiet dignissim. Nunc vitae vulputate odio."]},{"title":"Section two","description":["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam in cursus turpis, vitae semper lorem. Cras ligula nibh, congue vel dolor quis, interdum blandit diam. Quisque nunc risus, euismod ac ex sollicitudin, pulvinar bibendum velit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vitae felis id massa ultrices dictum. Aliquam gravida pretium tristique. Maecenas dictum, lacus ut fringilla consequat, odio turpis tempus dui, eu luctus lorem diam mollis arcu. Cras nec vestibulum ex, eu hendrerit dui. Curabitur sed lorem arcu.","Nulla eu arcu ut felis congue pellentesque. Suspendisse massa nibh, ultricies sit amet mi sed, interdum semper metus. Nulla dictum risus sodales arcu semper sollicitudin. Ut eleifend orci eget metus posuere rutrum. Integer rutrum viverra massa et sagittis. Suspendisse congue imperdiet diam, ac luctus orci pulvinar elementum. Nullam interdum imperdiet dignissim. Nunc vitae vulputate odio.","Mauris non rhoncus ex. Praesent eu semper nunc. Quisque vel nunc sit amet enim vulputate sagittis sed a diam. In porta sem congue, efficitur nibh id, volutpat diam. Duis rutrum ante nulla, sollicitudin ultricies ipsum malesuada in. Praesent elementum gravida nulla id fringilla. Duis sed metus vitae enim aliquam consectetur. Maecenas a congue purus, non fringilla enim. Proin nisl ligula, feugiat at quam vel, gravida mattis felis. Sed quis magna vel risus egestas ultrices et eu justo. Duis egestas justo ut purus viverra sodales."]}],"images":[{"url":"/images/gascan.png","alt":"gascan"},{"url":"/images/gllg.png","alt":"gllg"},{"url":"/images/img_home.jpg","alt":"Home"},{"url":"/images/inspire_it_internal_portal.png","alt":"InspireIT Portal"},{"url":"/images/portfolio.png","alt":"Portfolio"}],"visitButton":{"text":"Visit Website","url":"/education/csmpt2"},"categories":["software"]},{"id":"csmpt3","title":"Omnio","entity":{"name":"InspireIT"},"startDate":"09/2011","endDate":"07/2014","stack":[".NET Core","React"],"sectionDescription":[{"title":null,"description":["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam in cursus turpis, vitae semper lorem. Cras ligula nibh, congue vel dolor quis, interdum blandit diam. Quisque nunc risus, euismod ac ex sollicitudin, pulvinar bibendum velit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vitae felis id massa ultrices dictum. Aliquam gravida pretium tristique. Maecenas dictum, lacus ut fringilla consequat, odio turpis tempus dui, eu luctus lorem diam mollis arcu. Cras nec vestibulum ex, eu hendrerit dui. Curabitur sed lorem arcu.","Nulla eu arcu ut felis congue pellentesque. Suspendisse massa nibh, ultricies sit amet mi sed, interdum semper metus. Nulla dictum risus sodales arcu semper sollicitudin. Ut eleifend orci eget metus posuere rutrum. Integer rutrum viverra massa et sagittis. Suspendisse congue imperdiet diam, ac luctus orci pulvinar elementum. Nullam interdum imperdiet dignissim. Nunc vitae vulputate odio."]},{"title":"Section two","description":["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam in cursus turpis, vitae semper lorem. Cras ligula nibh, congue vel dolor quis, interdum blandit diam. Quisque nunc risus, euismod ac ex sollicitudin, pulvinar bibendum velit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vitae felis id massa ultrices dictum. Aliquam gravida pretium tristique. Maecenas dictum, lacus ut fringilla consequat, odio turpis tempus dui, eu luctus lorem diam mollis arcu. Cras nec vestibulum ex, eu hendrerit dui. Curabitur sed lorem arcu.","Nulla eu arcu ut felis congue pellentesque. Suspendisse massa nibh, ultricies sit amet mi sed, interdum semper metus. Nulla dictum risus sodales arcu semper sollicitudin. Ut eleifend orci eget metus posuere rutrum. Integer rutrum viverra massa et sagittis. Suspendisse congue imperdiet diam, ac luctus orci pulvinar elementum. Nullam interdum imperdiet dignissim. Nunc vitae vulputate odio.","Mauris non rhoncus ex. Praesent eu semper nunc. Quisque vel nunc sit amet enim vulputate sagittis sed a diam. In porta sem congue, efficitur nibh id, volutpat diam. Duis rutrum ante nulla, sollicitudin ultricies ipsum malesuada in. Praesent elementum gravida nulla id fringilla. Duis sed metus vitae enim aliquam consectetur. Maecenas a congue purus, non fringilla enim. Proin nisl ligula, feugiat at quam vel, gravida mattis felis. Sed quis magna vel risus egestas ultrices et eu justo. Duis egestas justo ut purus viverra sodales."]}],"images":[{"url":"/images/gascan.png","alt":"gascan"},{"url":"/images/gllg.png","alt":"gllg"},{"url":"/images/img_home.jpg","alt":"Home"},{"url":"/images/inspire_it_internal_portal.png","alt":"InspireIT Portal"},{"url":"/images/portfolio.png","alt":"Portfolio"}],"visitButton":{"text":"Visit Website","url":"/education/csmpt2"},"categories":["design"]},{"id":"csmpt4","title":"InspireIT Home","entity":{"name":"InspireIT"},"startDate":"09/2011","endDate":"07/2014","stack":[".NET Core","React"],"sectionDescription":[{"title":null,"description":["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam in cursus turpis, vitae semper lorem. Cras ligula nibh, congue vel dolor quis, interdum blandit diam. Quisque nunc risus, euismod ac ex sollicitudin, pulvinar bibendum velit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vitae felis id massa ultrices dictum. Aliquam gravida pretium tristique. Maecenas dictum, lacus ut fringilla consequat, odio turpis tempus dui, eu luctus lorem diam mollis arcu. Cras nec vestibulum ex, eu hendrerit dui. Curabitur sed lorem arcu.","Nulla eu arcu ut felis congue pellentesque. Suspendisse massa nibh, ultricies sit amet mi sed, interdum semper metus. Nulla dictum risus sodales arcu semper sollicitudin. Ut eleifend orci eget metus posuere rutrum. Integer rutrum viverra massa et sagittis. Suspendisse congue imperdiet diam, ac luctus orci pulvinar elementum. Nullam interdum imperdiet dignissim. Nunc vitae vulputate odio."]},{"title":"Section two","description":["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam in cursus turpis, vitae semper lorem. Cras ligula nibh, congue vel dolor quis, interdum blandit diam. Quisque nunc risus, euismod ac ex sollicitudin, pulvinar bibendum velit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vitae felis id massa ultrices dictum. Aliquam gravida pretium tristique. Maecenas dictum, lacus ut fringilla consequat, odio turpis tempus dui, eu luctus lorem diam mollis arcu. Cras nec vestibulum ex, eu hendrerit dui. Curabitur sed lorem arcu.","Nulla eu arcu ut felis congue pellentesque. Suspendisse massa nibh, ultricies sit amet mi sed, interdum semper metus. Nulla dictum risus sodales arcu semper sollicitudin. Ut eleifend orci eget metus posuere rutrum. Integer rutrum viverra massa et sagittis. Suspendisse congue imperdiet diam, ac luctus orci pulvinar elementum. Nullam interdum imperdiet dignissim. Nunc vitae vulputate odio.","Mauris non rhoncus ex. Praesent eu semper nunc. Quisque vel nunc sit amet enim vulputate sagittis sed a diam. In porta sem congue, efficitur nibh id, volutpat diam. Duis rutrum ante nulla, sollicitudin ultricies ipsum malesuada in. Praesent elementum gravida nulla id fringilla. Duis sed metus vitae enim aliquam consectetur. Maecenas a congue purus, non fringilla enim. Proin nisl ligula, feugiat at quam vel, gravida mattis felis. Sed quis magna vel risus egestas ultrices et eu justo. Duis egestas justo ut purus viverra sodales."]}],"images":[{"url":"/images/gascan.png","alt":"gascan"},{"url":"/images/gllg.png","alt":"gllg"},{"url":"/images/img_home.jpg","alt":"Home"},{"url":"/images/inspire_it_internal_portal.png","alt":"InspireIT Portal"},{"url":"/images/portfolio.png","alt":"Portfolio"}],"visitButton":{"text":"Visit Website","url":"/education/csmpt2"},"categories":["software"]},{"id":"csmpt1","title":"Gascan","entity":{"name":"Adilson Soares"},"startDate":"09/2011","endDate":"07/2014","stack":["Adobe XD","React"],"sectionDescription":[{"title":null,"description":["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam in cursus turpis, vitae semper lorem. Cras ligula nibh, congue vel dolor quis, interdum blandit diam. Quisque nunc risus, euismod ac ex sollicitudin, pulvinar bibendum velit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vitae felis id massa ultrices dictum. Aliquam gravida pretium tristique. Maecenas dictum, lacus ut fringilla consequat, odio turpis tempus dui, eu luctus lorem diam mollis arcu. Cras nec vestibulum ex, eu hendrerit dui. Curabitur sed lorem arcu.","Nulla eu arcu ut felis congue pellentesque. Suspendisse massa nibh, ultricies sit amet mi sed, interdum semper metus. Nulla dictum risus sodales arcu semper sollicitudin. Ut eleifend orci eget metus posuere rutrum. Integer rutrum viverra massa et sagittis. Suspendisse congue imperdiet diam, ac luctus orci pulvinar elementum. Nullam interdum imperdiet dignissim. Nunc vitae vulputate odio."]},{"title":"Section two","description":["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam in cursus turpis, vitae semper lorem. Cras ligula nibh, congue vel dolor quis, interdum blandit diam. Quisque nunc risus, euismod ac ex sollicitudin, pulvinar bibendum velit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vitae felis id massa ultrices dictum. Aliquam gravida pretium tristique. Maecenas dictum, lacus ut fringilla consequat, odio turpis tempus dui, eu luctus lorem diam mollis arcu. Cras nec vestibulum ex, eu hendrerit dui. Curabitur sed lorem arcu.","Nulla eu arcu ut felis congue pellentesque. Suspendisse massa nibh, ultricies sit amet mi sed, interdum semper metus. Nulla dictum risus sodales arcu semper sollicitudin. Ut eleifend orci eget metus posuere rutrum. Integer rutrum viverra massa et sagittis. Suspendisse congue imperdiet diam, ac luctus orci pulvinar elementum. Nullam interdum imperdiet dignissim. Nunc vitae vulputate odio.","Mauris non rhoncus ex. Praesent eu semper nunc. Quisque vel nunc sit amet enim vulputate sagittis sed a diam. In porta sem congue, efficitur nibh id, volutpat diam. Duis rutrum ante nulla, sollicitudin ultricies ipsum malesuada in. Praesent elementum gravida nulla id fringilla. Duis sed metus vitae enim aliquam consectetur. Maecenas a congue purus, non fringilla enim. Proin nisl ligula, feugiat at quam vel, gravida mattis felis. Sed quis magna vel risus egestas ultrices et eu justo. Duis egestas justo ut purus viverra sodales."]}],"images":[{"url":"/images/gascan.png","alt":"gascan"},{"url":"/images/gllg.png","alt":"gllg"},{"url":"/images/img_home.jpg","alt":"Home"},{"url":"/images/inspire_it_internal_portal.png","alt":"InspireIT Portal"},{"url":"/images/portfolio.png","alt":"Portfolio"}],"visitButton":{"text":"Visit Website","url":"/education/csmpt2"},"categories":["design"]}]');

/***/ }),

/***/ 343:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('[{"type":"Technical","section":[{"title":"Back-end","skills":[{"name":"C#","iconName":"csharp"},{"name":"Java","iconName":"java"},{"name":"Python","iconName":"python"},{"name":"Node.JS","iconName":"nodejs"},{"name":"C Language","iconName":"clanguage"}]},{"title":"Frontend-end","skills":[{"name":"React","iconName":"react"},{"name":"Javascript","iconName":"javascript"},{"name":"Flutter","iconName":"flutter"},{"name":"HTML","iconName":"html"},{"name":"CSS","iconName":"css"}]},{"title":"Database","skills":[{"name":"SQL","iconName":"sql"}]}]},{"type":"Additional","section":[{"title":"Development","skills":[{"name":"GIT"},{"name":"Agile methodologies (SCRUM + Kanban)"}]},{"title":"Design","skills":[{"name":"UI/UX Design"},{"name":"Adobe XD"},{"name":"Adobe Photoshop"}]},{"title":"Languages","skills":[{"name":"Portuguese"},{"name":"English"}]}]},{"type":"Recent","section":[{"title":"Recently used technologies","skills":[{"name":"React"},{"name":".NET Core"},{"name":"SQL"},{"name":"Flutter"},{"name":"ASP.NET Framework"},{"name":"HTML"},{"name":"CSS"},{"name":"NextJS"},{"name":"SASS"},{"name":"GIT"},{"name":"Azure Devops"},{"name":"Typescript"},{"name":"React"}]}]}]');

/***/ })

};
;