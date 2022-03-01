exports.id = 608;
exports.ids = [608];
exports.modules = {

/***/ 7782:
/***/ ((module) => {

// Exports
module.exports = {
	"viewer": "DetailViewer_viewer__n2mtB",
	"header": "DetailViewer_header___SM3Y",
	"info": "DetailViewer_info__UyMsY",
	"main": "DetailViewer_main__I69zn",
	"description": "DetailViewer_description__SkXlj",
	"footer": "DetailViewer_footer__2vqc3"
};


/***/ }),

/***/ 9608:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ DetailViewer)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8663);
/* harmony import */ var _components_Carousel_Carousel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6805);
/* harmony import */ var _components_Carousel_CarouselItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(368);
/* harmony import */ var _components_Icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5411);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7421);
/* harmony import */ var _components_Typhography__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4682);
/* harmony import */ var _styles_components_DetailViewer_module_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7782);
/* harmony import */ var _styles_components_DetailViewer_module_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_components_DetailViewer_module_scss__WEBPACK_IMPORTED_MODULE_7__);








function DetailViewer({ data  }) {
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: [
                'container container-page',
                (_styles_components_DetailViewer_module_scss__WEBPACK_IMPORTED_MODULE_7___default().viewer)
            ].join(' '),
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: (_styles_components_DetailViewer_module_scss__WEBPACK_IMPORTED_MODULE_7___default().header),
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Typhography__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                            type: "title",
                            color: "primary",
                            strong: true,
                            upperCase: true,
                            children: data === null || data === void 0 ? void 0 : data.title
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: (_styles_components_DetailViewer_module_scss__WEBPACK_IMPORTED_MODULE_7___default().info),
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Typhography__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                    type: "sub-sub-title",
                                    color: "primary",
                                    upperCase: true,
                                    children: data === null || data === void 0 ? void 0 : data.entity.name
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_Typhography__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                    type: "sub-sub-title",
                                    color: "primary",
                                    upperCase: true,
                                    children: [
                                        data === null || data === void 0 ? void 0 : data.startDate,
                                        " - ",
                                        data === null || data === void 0 ? void 0 : data.endDate
                                    ]
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: (_styles_components_DetailViewer_module_scss__WEBPACK_IMPORTED_MODULE_7___default().main),
                    children: [
                        (data === null || data === void 0 ? void 0 : data.images) && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Carousel_Carousel__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                            children: data.images.map((image, index)=>{
                                return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Carousel_CarouselItem__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                        src: image.url,
                                        alt: image.alt
                                    })
                                }, index));
                            })
                        }),
                        data === null || data === void 0 ? void 0 : data.sectionDescription.map((section, index1)=>{
                            return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: (_styles_components_DetailViewer_module_scss__WEBPACK_IMPORTED_MODULE_7___default().description),
                                children: [
                                    section.title && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Typhography__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                        type: "sub-title",
                                        color: "primary",
                                        strong: true,
                                        upperCase: true,
                                        children: section.title
                                    }),
                                    section.description.map((description, index)=>{
                                        return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            children: description
                                        }, index));
                                    })
                                ]
                            }, index1));
                        })
                    ]
                }),
                (data === null || data === void 0 ? void 0 : data.visitButton) && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: (_styles_components_DetailViewer_module_scss__WEBPACK_IMPORTED_MODULE_7___default().footer),
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_Button__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                        type: "default",
                        htmlElement: "a",
                        href: data === null || data === void 0 ? void 0 : data.visitButton.url,
                        textStrong: true,
                        textUpper: true,
                        roundedCorner: true,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Icon__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                name: "externalLink",
                                small: true
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                children: data === null || data === void 0 ? void 0 : data.visitButton.text
                            })
                        ]
                    })
                })
            ]
        })
    }));
};


/***/ })

};
;