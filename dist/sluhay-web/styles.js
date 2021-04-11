(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ "+EN/":
/*!*************************!*\
  !*** ./src/styles.scss ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "LboF");
            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--13-1!../node_modules/postcss-loader/src??embedded!../node_modules/resolve-url-loader??ref--13-3!../node_modules/sass-loader/dist/cjs.js??ref--13-4!./styles.scss */ "/I9Y");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "/I9Y":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--13-1!./node_modules/postcss-loader/src??embedded!./node_modules/resolve-url-loader??ref--13-3!./node_modules/sass-loader/dist/cjs.js??ref--13-4!./src/styles.scss ***!
  \*********************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "JPst");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "/* You can add global styles to this file, and also import other style files */\n@font-face {\n  font-family: \"Code Pro LC\";\n  src: url('Code_Pro_LC.ttf');\n}\n@font-face {\n  font-family: \"Code Pro Bold\";\n  src: url('Code_Pro_Bold.ttf');\n}\n@font-face {\n  font-family: \"Code Pro Bold LC\";\n  src: url('Code_Pro_Bold_LC.ttf');\n}\n@font-face {\n  font-family: \"Code Pro LC\";\n  src: url('Code_Pro_LC.ttf');\n}\n@font-face {\n  font-family: \"Code Pro Light\";\n  src: url('Code_Pro_Light.ttf');\n}\n@font-face {\n  font-family: \"Code Pro Light LC\";\n  src: url('Code_Pro_Light_LC.ttf');\n}\n@font-face {\n  font-family: \"Code Pro\";\n  src: url('Code_Pro.ttf');\n}\nhtml {\n  height: 100%;\n}\nbody {\n  margin: 0;\n  height: 100%;\n  font-family: \"Code Pro LC\";\n}\n.title {\n  text-transform: uppercase;\n  font-size: 36px;\n  font-family: \"Code Pro\";\n}\n.button {\n  width: 210px;\n  height: 50px;\n  background-color: #f91b1b;\n  border-radius: 5px;\n  outline: none;\n  border: none;\n  text-transform: uppercase;\n  font-size: 14px;\n  color: white;\n  font-family: \"Code Pro Bold\";\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: row;\n  margin-top: 37px;\n  cursor: pointer;\n  text-decoration: none;\n  position: relative;\n  z-index: 10;\n}\n.button img {\n  padding-right: 10px;\n  width: 15px;\n}\n.button_dark {\n  background-color: #484849;\n}\n.loader-wrapper {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  left: 0;\n  top: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #ff2929;\n  font-size: 20px;\n  flex-direction: column;\n}\n.loader,\n.loader:before,\n.loader:after {\n  background: #ff2929;\n  animation: load1 1s infinite ease-in-out;\n  width: 1em;\n  height: 4em;\n}\n.loader {\n  color: #ff2929;\n  text-indent: -9999em;\n  margin: 88px auto;\n  position: relative;\n  font-size: 11px;\n  transform: translateZ(0);\n  animation-delay: -0.16s;\n}\n.loader:before,\n.loader:after {\n  position: absolute;\n  top: 0;\n  content: \"\";\n}\n.loader:before {\n  left: -1.5em;\n  animation-delay: -0.32s;\n}\n.loader:after {\n  left: 1.5em;\n}\n@keyframes load1 {\n  0%, 80%, 100% {\n    box-shadow: 0 0;\n    height: 4em;\n  }\n  40% {\n    box-shadow: 0 -2em;\n    height: 5em;\n  }\n}", "",{"version":3,"sources":["webpack://src/styles.scss","webpack://src/theme/fonts.scss","webpack://src/theme/colors.scss","webpack://src/theme/mixins.scss"],"names":[],"mappings":"AAAA,8EAAA;ACAA;EACE,0BAAA;EACA,2BAAA;ADEF;ACCA;EACE,4BAAA;EACA,6BAAA;ADCF;ACEA;EACE,+BAAA;EACA,gCAAA;ADAF;ACGA;EACE,0BAAA;EACA,2BAAA;ADDF;ACIA;EACE,6BAAA;EACA,8BAAA;ADFF;ACKA;EACE,gCAAA;EACA,iCAAA;ADHF;ACMA;EACE,uBAAA;EACA,wBAAA;ADJF;AAtBA;EACE,YAAA;AAwBF;AArBA;EACE,SAAA;EACA,YAAA;EACA,0BAAA;AAwBF;AArBA;EACE,yBAAA;EACA,eAAA;EACA,uBAAA;AAwBF;AArBA;EACE,YAAA;EACA,YAAA;EACA,yBEvBY;EFwBZ,kBAAA;EACA,aAAA;EACA,YAAA;EACA,yBAAA;EGpBA,eHqBmB;EGpBnB,YHoByB;EACzB,4BAAA;EG7BA,aAAA;EACA,mBAFuC;EAGvC,uBAHuB;EAIvB,mBAJ2D;EHgC3D,gBAAA;EACA,eAAA;EACA,qBAAA;EACA,kBAAA;EACA,WAAA;AA4BF;AA1BE;EACE,mBAAA;EACA,WAAA;AA4BJ;AAzBE;EACE,yBE5CS;AFuEb;AAvBA;EACE,WAAA;EACA,YAAA;EACA,kBAAA;EACA,OAAA;EACA,MAAA;EACA,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,cAAA;EACA,eAAA;EACA,sBAAA;AA0BF;AAvBA;;;EAGE,mBAAA;EAEA,wCAAA;EACA,UAAA;EACA,WAAA;AA0BF;AAxBA;EACE,cAAA;EACA,oBAAA;EACA,iBAAA;EACA,kBAAA;EACA,eAAA;EAGA,wBAAA;EAEA,uBAAA;AA2BF;AAzBA;;EAEE,kBAAA;EACA,MAAA;EACA,WAAA;AA4BF;AA1BA;EACE,YAAA;EAEA,uBAAA;AA6BF;AA3BA;EACE,WAAA;AA8BF;AAhBA;EACE;IAGE,eAAA;IACA,WAAA;EA2BF;EAzBA;IACE,kBAAA;IACA,WAAA;EA2BF;AACF","sourcesContent":["/* You can add global styles to this file, and also import other style files */\n\n@import \"./theme/fonts.scss\";\n@import \"./theme/colors.scss\";\n@import \"./theme/mixins.scss\";\n\nhtml {\n  height: 100%;\n}\n\nbody {\n  margin: 0;\n  height: 100%;\n  font-family: \"Code Pro LC\";\n}\n\n.title {\n  text-transform: uppercase;\n  font-size: 36px;\n  font-family: \"Code Pro\";\n}\n\n.button {\n  width: 210px;\n  height: 50px;\n  background-color: $active-font;\n  border-radius: 5px;\n  outline: none;\n  border: none;\n  text-transform: uppercase;\n  @include fontStyle(14px, white);\n  font-family: \"Code Pro Bold\";\n  @include flexMix;\n  margin-top: 37px;\n  cursor: pointer;\n  text-decoration: none;\n  position: relative;\n  z-index: 10;\n\n  img {\n    padding-right: 10px;\n    width: 15px;\n  }\n\n  &_dark {\n    background-color: $muted-font;\n  }\n}\n\n.loader-wrapper {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  left: 0;\n  top: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #ff2929;\n  font-size: 20px;\n  flex-direction: column;\n}\n\n.loader,\n.loader:before,\n.loader:after {\n  background: #ff2929;\n  -webkit-animation: load1 1s infinite ease-in-out;\n  animation: load1 1s infinite ease-in-out;\n  width: 1em;\n  height: 4em;\n}\n.loader {\n  color: #ff2929;\n  text-indent: -9999em;\n  margin: 88px auto;\n  position: relative;\n  font-size: 11px;\n  -webkit-transform: translateZ(0);\n  -ms-transform: translateZ(0);\n  transform: translateZ(0);\n  -webkit-animation-delay: -0.16s;\n  animation-delay: -0.16s;\n}\n.loader:before,\n.loader:after {\n  position: absolute;\n  top: 0;\n  content: \"\";\n}\n.loader:before {\n  left: -1.5em;\n  -webkit-animation-delay: -0.32s;\n  animation-delay: -0.32s;\n}\n.loader:after {\n  left: 1.5em;\n}\n@-webkit-keyframes load1 {\n  0%,\n  80%,\n  100% {\n    box-shadow: 0 0;\n    height: 4em;\n  }\n  40% {\n    box-shadow: 0 -2em;\n    height: 5em;\n  }\n}\n@keyframes load1 {\n  0%,\n  80%,\n  100% {\n    box-shadow: 0 0;\n    height: 4em;\n  }\n  40% {\n    box-shadow: 0 -2em;\n    height: 5em;\n  }\n}\n","@font-face {\n  font-family: 'Code Pro LC';\n  src: url('../assets/fonts/Code_Pro_LC.ttf');\n}\n\n@font-face {\n  font-family: 'Code Pro Bold';\n  src: url('../assets/fonts/Code_Pro_Bold.ttf');\n}\n\n@font-face {\n  font-family: 'Code Pro Bold LC';\n  src: url('../assets/fonts/Code_Pro_Bold_LC.ttf');\n}\n\n@font-face {\n  font-family: 'Code Pro LC';\n  src: url('../assets/fonts/Code_Pro_LC.ttf');\n}\n\n@font-face {\n  font-family: 'Code Pro Light';\n  src: url('../assets/fonts/Code_Pro_Light.ttf');\n}\n\n@font-face {\n  font-family: 'Code Pro Light LC';\n  src: url('../assets/fonts/Code_Pro_Light_LC.ttf');\n}\n\n@font-face {\n  font-family: 'Code Pro';\n  src: url('../assets/fonts/Code_Pro.ttf');\n}\n","$main-font: #000000;\n$muted-font: #484849;\n$active-font: #f91b1b;\n$odd-background: #f0f0f0;\n$dark-color: #282e35;\n$medium-color: #2e343a;\n$light-color: #f0f0f0;\n","\n@mixin flexMix($justify: center, $align: center, $direction: row) {\n  display: flex;\n  align-items: $align;\n  justify-content: $justify;\n  flex-direction: $direction;\n}\n\n@mixin fontStyle($size: 18px, $color: $main-font) {\n  font-size: $size;\n  color: $color;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 2:
/*!*******************************!*\
  !*** multi ./src/styles.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/dmi3z/Development/sluhay/src/styles.scss */"+EN/");


/***/ }),

/***/ "JPst":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "LboF":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ })

},[[2,"runtime"]]]);
//# sourceMappingURL=styles.js.map