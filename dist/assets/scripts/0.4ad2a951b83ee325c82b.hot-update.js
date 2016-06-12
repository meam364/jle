webpackHotUpdate(0,[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _svg4everybody = __webpack_require__(1);
	
	var _svg4everybody2 = _interopRequireDefault(_svg4everybody);
	
	var _jquery = __webpack_require__(2);
	
	var _jquery2 = _interopRequireDefault(_jquery);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	(0, _jquery2.default)(function () {
		(0, _svg4everybody2.default)();
		(0, _jquery2.default)('.banner__scroll-icon').click(function () {
			(0, _jquery2.default)('html, body').animate({
				scrollTop: (0, _jquery2.default)('.features').offset().top
			}, 1000);
		});
	});

/***/ }
])
//# sourceMappingURL=0.4ad2a951b83ee325c82b.hot-update.js.map