/*! For license information please see 15.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{"./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/page/Workshops.vue?vue&type=script&lang=js&":function(module,__webpack_exports__,__webpack_require__){"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");\n/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! regenerator-runtime/runtime */ "./node_modules/regenerator-runtime/runtime.js");\n/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _home_runner_work_www_www_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");\n/* harmony import */ var _components_WorkshopFilter_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/WorkshopFilter.vue */ "./src/components/WorkshopFilter.vue");\n\n\n\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n/* harmony default export */ __webpack_exports__["default"] = ({\n  components: {\n    WorkshopFilter: _components_WorkshopFilter_vue__WEBPACK_IMPORTED_MODULE_3__["default"]\n  },\n  data: function data() {\n    return {\n      workshops: []\n    };\n  },\n  metaInfo: function metaInfo() {\n    return {\n      title: "SFZ - Workshops",\n      meta: [{\n        property: "og:title",\n        content: "Schülerforschungszentrum - Workshops"\n      }, {\n        property: "og:site_name",\n        content: "Schülerforschungszentrum Saarlouis"\n      }, {\n        property: "og:type",\n        content: "website"\n      }, {\n        property: "og:url",\n        content: window.location.href\n      }, {\n        name: "robots",\n        content: "index,follow"\n      }]\n    };\n  },\n  created: function created() {\n    var _this = this;\n\n    return Object(_home_runner_work_www_www_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {\n      return regeneratorRuntime.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              fetch("/workshops.json?time=" + new Date().getTime()).then(function (response) {\n                return response.json();\n              }).then(function (data) {\n                return _this.workshops = data;\n              });\n\n            case 1:\n            case "end":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }))();\n  }\n});\n\n//# sourceURL=webpack:///./src/page/Workshops.vue?./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options')},'./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"803901f0-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/page/Workshops.vue?vue&type=template&id=02ea6e45&':function(module,__webpack_exports__,__webpack_require__){"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c("content", [\n    _c(\n      "section",\n      {\n        staticClass:\n          "hero is-medium is-bold is-fullheight-with-navbar is-spaced",\n        attrs: { id: "hero-background" }\n      },\n      [\n        _c(\n          "div",\n          { staticClass: "hero-header" },\n          [\n            _vm._m(0),\n            _c("br"),\n            _c("br"),\n            _c("WorkshopFilter", {\n              attrs: { workshops: _vm.workshops, isElearning: false }\n            })\n          ],\n          1\n        )\n      ]\n    )\n  ])\n}\nvar staticRenderFns = [\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\n      "div",\n      {\n        staticClass: "container has-text-centered",\n        staticStyle: { top: "20px" }\n      },\n      [\n        _c("p", { staticClass: "title", attrs: { id: "title" } }, [\n          _vm._v("Workshops für Schulklassen und -kurse")\n        ])\n      ]\n    )\n  }\n]\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./src/page/Workshops.vue?./node_modules/cache-loader/dist/cjs.js?%7B%22cacheDirectory%22:%22node_modules/.cache/vue-loader%22,%22cacheIdentifier%22:%22803901f0-vue-loader-template%22%7D!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options')},"./src/page/Workshops.vue":function(module,__webpack_exports__,__webpack_require__){"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Workshops_vue_vue_type_template_id_02ea6e45___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Workshops.vue?vue&type=template&id=02ea6e45& */ "./src/page/Workshops.vue?vue&type=template&id=02ea6e45&");\n/* harmony import */ var _Workshops_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Workshops.vue?vue&type=script&lang=js& */ "./src/page/Workshops.vue?vue&type=script&lang=js&");\n/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(\n  _Workshops_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],\n  _Workshops_vue_vue_type_template_id_02ea6e45___WEBPACK_IMPORTED_MODULE_0__["render"],\n  _Workshops_vue_vue_type_template_id_02ea6e45___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = "src/page/Workshops.vue"\n/* harmony default export */ __webpack_exports__["default"] = (component.exports);\n\n//# sourceURL=webpack:///./src/page/Workshops.vue?')},"./src/page/Workshops.vue?vue&type=script&lang=js&":function(module,__webpack_exports__,__webpack_require__){"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Workshops_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js??ref--12-0!../../node_modules/babel-loader/lib!../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../node_modules/vue-loader/lib??vue-loader-options!./Workshops.vue?vue&type=script&lang=js& */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/page/Workshops.vue?vue&type=script&lang=js&");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Workshops_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); \n\n//# sourceURL=webpack:///./src/page/Workshops.vue?')},"./src/page/Workshops.vue?vue&type=template&id=02ea6e45&":function(module,__webpack_exports__,__webpack_require__){"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_803901f0_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Workshops_vue_vue_type_template_id_02ea6e45___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"803901f0-vue-loader-template"}!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../node_modules/vue-loader/lib??vue-loader-options!./Workshops.vue?vue&type=template&id=02ea6e45& */ "./node_modules/cache-loader/dist/cjs.js?{\\"cacheDirectory\\":\\"node_modules/.cache/vue-loader\\",\\"cacheIdentifier\\":\\"803901f0-vue-loader-template\\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/page/Workshops.vue?vue&type=template&id=02ea6e45&");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_803901f0_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Workshops_vue_vue_type_template_id_02ea6e45___WEBPACK_IMPORTED_MODULE_0__["render"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_803901f0_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Workshops_vue_vue_type_template_id_02ea6e45___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });\n\n\n\n//# sourceURL=webpack:///./src/page/Workshops.vue?')}}]);