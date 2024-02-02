/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/mesh-gradient.png */ "./assets/mesh-gradient.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700;900&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@300;400;500;600;700&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
*/

html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  display: block;
}
body {
  line-height: 1;
}
ol,
ul {
  list-style: none;
}
blockquote,
q {
  quotes: none;
}
blockquote:before,
blockquote:after,
q:before,
q:after {
  content: "";
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}

:root {
  font-family: "Lato", sans-serif;
}

body {
  display: flex;
  flex-direction: column;
  width: 100vw;
  min-height: 100vh;
}

footer {
  width: 100vw;
  flex: 0 0 auto;
}

div.main {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  flex: 1 0 auto;
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
  background-size: cover;
}

h2,
h3 {
  font-weight: bold;
}

div#grid-wrapper {
  gap: 110px;
}

div#grid-wrapper {
  display: grid;
  padding: 25px;
  grid-template-columns: 1fr 2fr;
  grid-template-rows: 10vh repeat(2, 1fr);
}

div#local-weather-data {
  grid-column: 1 / 2;
  display: flex;
  justify-content: space-between;

  padding: 15px;
  padding-left: 50px;
  padding-right: 50px;
  color: white;
  font-weight: 400;

  border-radius: 20px;
  border: 0px solid #fff;
  background: rgb(12, 12, 12);
  backdrop-filter: blur(9.8999996 18530273px);
}

div#local-weather-data > *,
div#local-weather-data p {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
}

table#weather-overview-table {
  border: 0px solid #fff;
  backdrop-filter: blur(9.899999618530273px);
  padding: 50px;
  grid-column: 1 / span 1;
  margin: 2em;
}

table#weather-overview-table tr :nth-child(1) {
  border: none;
}

div#vertical-container {
  display: flex;
  flex-direction: column;
}

div.location-temp-container {
  box-sizing: content-box;
  display: flex;
  justify-content: center;
  margin-top: 0.5em;
  gap: 50px;
  grid-row: 1 / 2;
  grid-column: 2 / 3;
  width: 100%;
  height: 51px;
  flex-shrink: 0;
  padding: 10px;
}

table#hourly-temperature-view {
  width: 100%;
}

div.hourly-temperature-view-container {
  display: flex;
  justify-content: center;
  margin: 2em;
  margin-right: 5em;
  border-radius: 20px;
}

input#location-input {
  width: 80%;
}

table {
  background-color: rgba(12, 12, 12, 1);
  color: white;
  border: none;
  -webkit-backdrop-filter: blur(10px);
}

table td {
  outline: 1px solid rgb(27, 27, 27, 0.5);
  text-align: center;
  vertical-align: middle;
}

div#cards {
  grid-column: 1 / 3;
  display: flex;
  flex-wrap: wrap;
  gap: 50px;
  padding: 20px;
}

p {
  font-size: 15px;
}

button#switch-degree-measurement-button {
  display: flex;
  align-items: center;
  color: black;
  background-color: rgba(245, 245, 245);
  font-size: 20px;
  letter-spacing: 2px;
  border: none;
  border-radius: 25px;
  padding: 30px;
  margin-right: 3vw;
  text-align: center;
  outline: none;
}

div.card-container {
  display: flex;
  padding: 50px;
  padding-top: 3em;
  padding-bottom: 4em;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: rgba(19, 19, 19, 1);
  backdrop-filter: blur(10px);
  color: white;
  border-radius: 10px;
}

div.card-container h3 {
  padding-bottom: 30px;
  font-size: 25px;
}

div.card-container p {
  display: flex;
  font-size: 20px;
  align-items: center;
}

ul.day-weather-info-list {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(4, 1fr);
  gap: 20px;
  padding-top: 15px;
}

ul.day-weather-info-list li {
  display: flex;
  justify-content: center;
  gap: 50px;
}

div.day-weather-data-card {
  width: 100%;
}

ul.day-weather-info-list li.weather-data {
  display: flex;
  justify-content: start;
}

ul.day-weather-info-list li.weather-value {
  display: flex;
  justify-content: end;
}

.weather-card-header {
  display: flex;
  justify-content: space-between;
  padding-bottom: 10px;
}

footer {
  height: 100%;
  background-color: #0b0000;
  font-size: 20px;
  padding: 50px;
  color: white;
  display: flex;
  margin-top: 100px;
  font-family: "Roboto Mono", monospace;
  gap: 50px;
}

div#hr {
  width: 1px;
  background-color: white;
  height: 200px;
  margin-right: 5vw;
  margin-left: 4vw;
}

p#my-ref {
  display: flex;
  align-items: center;
  font-size: 25px;
}

div.footer-main-container {
  display: flex;
  align-items: center;
}

footer ol {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

img#github-icon {
  margin-left: 1em;
  width: 50px;
}

a {
  color: white;
  text-decoration: none;
}

input[type="text"] {
  border: none;
  padding: 20px;
  padding-left: 2em;
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 5px;
  font-size: 20px;
  font-weight: 500;
}

input[type="text"]:focus {
  outline: none;
  color: black;
  border: 1px solid rgb(197, 197, 197);
}

button#switch-degree-measurement-button.fahrenheit {
  color: white;
  background-color: #1f1f1f;
}

img {
  fill: color;
  display: flex;
  height: 40px;
}

@media screen and (max-width: 950px) {
  div#grid-wrapper {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(5, auto);
  }

  div.location-temp-container {
    grid-column: 1 / 2;
  }

  div.hourly-temperature-view-container {
    grid-column: 1 / 2;
  }

  footer {
    box-sizing: border-box;
    flex-direction: column;
  }

  div#hr {
    width: 69vw;
    height: 1px;
    align-items: center;
  }

  div#cards {
    grid-column: 1 / 2;
  }

  button#switch-degree-measurement-button {
    font-size: 15px;
  }

  div.hourly-temperature-view-container {
    margin-right: 0em;
  }

  table#weather-overview-table,
  div.hourly-temperature-view-container {
    height: 350px;
  }

  div#local-weather-data {
    height: 4em;
  }
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAGA;;;CAGC;;AAED;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;EAiFE,SAAS;EACT,UAAU;EACV,SAAS;EACT,eAAe;EACf,aAAa;EACb,wBAAwB;AAC1B;AACA,gDAAgD;AAChD;;;;;;;;;;;EAWE,cAAc;AAChB;AACA;EACE,cAAc;AAChB;AACA;;EAEE,gBAAgB;AAClB;AACA;;EAEE,YAAY;AACd;AACA;;;;EAIE,WAAW;EACX,aAAa;AACf;AACA;EACE,yBAAyB;EACzB,iBAAiB;AACnB;;AAEA;EACE,+BAA+B;AACjC;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,YAAY;EACZ,iBAAiB;AACnB;;AAEA;EACE,YAAY;EACZ,cAAc;AAChB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,iBAAiB;EACjB,cAAc;EACd,yDAAkD;EAClD,sBAAsB;AACxB;;AAEA;;EAEE,iBAAiB;AACnB;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE,aAAa;EACb,aAAa;EACb,8BAA8B;EAC9B,uCAAuC;AACzC;;AAEA;EACE,kBAAkB;EAClB,aAAa;EACb,8BAA8B;;EAE9B,aAAa;EACb,kBAAkB;EAClB,mBAAmB;EACnB,YAAY;EACZ,gBAAgB;;EAEhB,mBAAmB;EACnB,sBAAsB;EACtB,2BAA2B;EAC3B,2CAA2C;AAC7C;;AAEA;;EAEE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,eAAe;AACjB;;AAEA;EACE,sBAAsB;EACtB,0CAA0C;EAC1C,aAAa;EACb,uBAAuB;EACvB,WAAW;AACb;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,aAAa;EACb,sBAAsB;AACxB;;AAEA;EACE,uBAAuB;EACvB,aAAa;EACb,uBAAuB;EACvB,iBAAiB;EACjB,SAAS;EACT,eAAe;EACf,kBAAkB;EAClB,WAAW;EACX,YAAY;EACZ,cAAc;EACd,aAAa;AACf;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,WAAW;EACX,iBAAiB;EACjB,mBAAmB;AACrB;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE,qCAAqC;EACrC,YAAY;EACZ,YAAY;EACZ,mCAAmC;AACrC;;AAEA;EACE,uCAAuC;EACvC,kBAAkB;EAClB,sBAAsB;AACxB;;AAEA;EACE,kBAAkB;EAClB,aAAa;EACb,eAAe;EACf,SAAS;EACT,aAAa;AACf;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,YAAY;EACZ,qCAAqC;EACrC,eAAe;EACf,mBAAmB;EACnB,YAAY;EACZ,mBAAmB;EACnB,aAAa;EACb,iBAAiB;EACjB,kBAAkB;EAClB,aAAa;AACf;;AAEA;EACE,aAAa;EACb,aAAa;EACb,gBAAgB;EAChB,mBAAmB;EACnB,uBAAuB;EACvB,mBAAmB;EACnB,sBAAsB;EACtB,qCAAqC;EACrC,2BAA2B;EAC3B,YAAY;EACZ,mBAAmB;AACrB;;AAEA;EACE,oBAAoB;EACpB,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,eAAe;EACf,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,qCAAqC;EACrC,kCAAkC;EAClC,SAAS;EACT,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,SAAS;AACX;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,aAAa;EACb,sBAAsB;AACxB;;AAEA;EACE,aAAa;EACb,oBAAoB;AACtB;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,oBAAoB;AACtB;;AAEA;EACE,YAAY;EACZ,yBAAyB;EACzB,eAAe;EACf,aAAa;EACb,YAAY;EACZ,aAAa;EACb,iBAAiB;EACjB,qCAAqC;EACrC,SAAS;AACX;;AAEA;EACE,UAAU;EACV,uBAAuB;EACvB,aAAa;EACb,iBAAiB;EACjB,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,SAAS;AACX;;AAEA;EACE,gBAAgB;EAChB,WAAW;AACb;;AAEA;EACE,YAAY;EACZ,qBAAqB;AACvB;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,iBAAiB;EACjB,0CAA0C;EAC1C,kBAAkB;EAClB,eAAe;EACf,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,YAAY;EACZ,oCAAoC;AACtC;;AAEA;EACE,YAAY;EACZ,yBAAyB;AAC3B;;AAEA;EACE,WAAW;EACX,aAAa;EACb,YAAY;AACd;;AAEA;EACE;IACE,0BAA0B;IAC1B,mCAAmC;EACrC;;EAEA;IACE,kBAAkB;EACpB;;EAEA;IACE,kBAAkB;EACpB;;EAEA;IACE,sBAAsB;IACtB,sBAAsB;EACxB;;EAEA;IACE,WAAW;IACX,WAAW;IACX,mBAAmB;EACrB;;EAEA;IACE,kBAAkB;EACpB;;EAEA;IACE,eAAe;EACjB;;EAEA;IACE,iBAAiB;EACnB;;EAEA;;IAEE,aAAa;EACf;;EAEA;IACE,WAAW;EACb;AACF","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700;900&display=swap\");\n@import url(\"https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@300;400;500;600;700&display=swap\");\n\n/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml,\nbody,\ndiv,\nspan,\napplet,\nobject,\niframe,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nblockquote,\npre,\na,\nabbr,\nacronym,\naddress,\nbig,\ncite,\ncode,\ndel,\ndfn,\nem,\nimg,\nins,\nkbd,\nq,\ns,\nsamp,\nsmall,\nstrike,\nstrong,\nsub,\nsup,\ntt,\nvar,\nb,\nu,\ni,\ncenter,\ndl,\ndt,\ndd,\nol,\nul,\nli,\nfieldset,\nform,\nlabel,\nlegend,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\narticle,\naside,\ncanvas,\ndetails,\nembed,\nfigure,\nfigcaption,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\noutput,\nruby,\nsection,\nsummary,\ntime,\nmark,\naudio,\nvideo {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\nsection {\n  display: block;\n}\nbody {\n  line-height: 1;\n}\nol,\nul {\n  list-style: none;\n}\nblockquote,\nq {\n  quotes: none;\n}\nblockquote:before,\nblockquote:after,\nq:before,\nq:after {\n  content: \"\";\n  content: none;\n}\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\n:root {\n  font-family: \"Lato\", sans-serif;\n}\n\nbody {\n  display: flex;\n  flex-direction: column;\n  width: 100vw;\n  min-height: 100vh;\n}\n\nfooter {\n  width: 100vw;\n  flex: 0 0 auto;\n}\n\ndiv.main {\n  display: flex;\n  flex-direction: column;\n  min-height: 100vh;\n  flex: 1 0 auto;\n  background-image: url(../assets/mesh-gradient.png);\n  background-size: cover;\n}\n\nh2,\nh3 {\n  font-weight: bold;\n}\n\ndiv#grid-wrapper {\n  gap: 110px;\n}\n\ndiv#grid-wrapper {\n  display: grid;\n  padding: 25px;\n  grid-template-columns: 1fr 2fr;\n  grid-template-rows: 10vh repeat(2, 1fr);\n}\n\ndiv#local-weather-data {\n  grid-column: 1 / 2;\n  display: flex;\n  justify-content: space-between;\n\n  padding: 15px;\n  padding-left: 50px;\n  padding-right: 50px;\n  color: white;\n  font-weight: 400;\n\n  border-radius: 20px;\n  border: 0px solid #fff;\n  background: rgb(12, 12, 12);\n  backdrop-filter: blur(9.8999996 18530273px);\n}\n\ndiv#local-weather-data > *,\ndiv#local-weather-data p {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 20px;\n}\n\ntable#weather-overview-table {\n  border: 0px solid #fff;\n  backdrop-filter: blur(9.899999618530273px);\n  padding: 50px;\n  grid-column: 1 / span 1;\n  margin: 2em;\n}\n\ntable#weather-overview-table tr :nth-child(1) {\n  border: none;\n}\n\ndiv#vertical-container {\n  display: flex;\n  flex-direction: column;\n}\n\ndiv.location-temp-container {\n  box-sizing: content-box;\n  display: flex;\n  justify-content: center;\n  margin-top: 0.5em;\n  gap: 50px;\n  grid-row: 1 / 2;\n  grid-column: 2 / 3;\n  width: 100%;\n  height: 51px;\n  flex-shrink: 0;\n  padding: 10px;\n}\n\ntable#hourly-temperature-view {\n  width: 100%;\n}\n\ndiv.hourly-temperature-view-container {\n  display: flex;\n  justify-content: center;\n  margin: 2em;\n  margin-right: 5em;\n  border-radius: 20px;\n}\n\ninput#location-input {\n  width: 80%;\n}\n\ntable {\n  background-color: rgba(12, 12, 12, 1);\n  color: white;\n  border: none;\n  -webkit-backdrop-filter: blur(10px);\n}\n\ntable td {\n  outline: 1px solid rgb(27, 27, 27, 0.5);\n  text-align: center;\n  vertical-align: middle;\n}\n\ndiv#cards {\n  grid-column: 1 / 3;\n  display: flex;\n  flex-wrap: wrap;\n  gap: 50px;\n  padding: 20px;\n}\n\np {\n  font-size: 15px;\n}\n\nbutton#switch-degree-measurement-button {\n  display: flex;\n  align-items: center;\n  color: black;\n  background-color: rgba(245, 245, 245);\n  font-size: 20px;\n  letter-spacing: 2px;\n  border: none;\n  border-radius: 25px;\n  padding: 30px;\n  margin-right: 3vw;\n  text-align: center;\n  outline: none;\n}\n\ndiv.card-container {\n  display: flex;\n  padding: 50px;\n  padding-top: 3em;\n  padding-bottom: 4em;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  background-color: rgba(19, 19, 19, 1);\n  backdrop-filter: blur(10px);\n  color: white;\n  border-radius: 10px;\n}\n\ndiv.card-container h3 {\n  padding-bottom: 30px;\n  font-size: 25px;\n}\n\ndiv.card-container p {\n  display: flex;\n  font-size: 20px;\n  align-items: center;\n}\n\nul.day-weather-info-list {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  grid-template-rows: repeat(4, 1fr);\n  gap: 20px;\n  padding-top: 15px;\n}\n\nul.day-weather-info-list li {\n  display: flex;\n  justify-content: center;\n  gap: 50px;\n}\n\ndiv.day-weather-data-card {\n  width: 100%;\n}\n\nul.day-weather-info-list li.weather-data {\n  display: flex;\n  justify-content: start;\n}\n\nul.day-weather-info-list li.weather-value {\n  display: flex;\n  justify-content: end;\n}\n\n.weather-card-header {\n  display: flex;\n  justify-content: space-between;\n  padding-bottom: 10px;\n}\n\nfooter {\n  height: 100%;\n  background-color: #0b0000;\n  font-size: 20px;\n  padding: 50px;\n  color: white;\n  display: flex;\n  margin-top: 100px;\n  font-family: \"Roboto Mono\", monospace;\n  gap: 50px;\n}\n\ndiv#hr {\n  width: 1px;\n  background-color: white;\n  height: 200px;\n  margin-right: 5vw;\n  margin-left: 4vw;\n}\n\np#my-ref {\n  display: flex;\n  align-items: center;\n  font-size: 25px;\n}\n\ndiv.footer-main-container {\n  display: flex;\n  align-items: center;\n}\n\nfooter ol {\n  display: flex;\n  flex-direction: column;\n  gap: 15px;\n}\n\nimg#github-icon {\n  margin-left: 1em;\n  width: 50px;\n}\n\na {\n  color: white;\n  text-decoration: none;\n}\n\ninput[type=\"text\"] {\n  border: none;\n  padding: 20px;\n  padding-left: 2em;\n  background-color: rgba(255, 255, 255, 0.8);\n  border-radius: 5px;\n  font-size: 20px;\n  font-weight: 500;\n}\n\ninput[type=\"text\"]:focus {\n  outline: none;\n  color: black;\n  border: 1px solid rgb(197, 197, 197);\n}\n\nbutton#switch-degree-measurement-button.fahrenheit {\n  color: white;\n  background-color: #1f1f1f;\n}\n\nimg {\n  fill: color;\n  display: flex;\n  height: 40px;\n}\n\n@media screen and (max-width: 950px) {\n  div#grid-wrapper {\n    grid-template-columns: 1fr;\n    grid-template-rows: repeat(5, auto);\n  }\n\n  div.location-temp-container {\n    grid-column: 1 / 2;\n  }\n\n  div.hourly-temperature-view-container {\n    grid-column: 1 / 2;\n  }\n\n  footer {\n    box-sizing: border-box;\n    flex-direction: column;\n  }\n\n  div#hr {\n    width: 69vw;\n    height: 1px;\n    align-items: center;\n  }\n\n  div#cards {\n    grid-column: 1 / 2;\n  }\n\n  button#switch-degree-measurement-button {\n    font-size: 15px;\n  }\n\n  div.hourly-temperature-view-container {\n    margin-right: 0em;\n  }\n\n  table#weather-overview-table,\n  div.hourly-temperature-view-container {\n    height: 350px;\n  }\n\n  div#local-weather-data {\n    height: 4em;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
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
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
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
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./assets/clouds.svg":
/*!***************************!*\
  !*** ./assets/clouds.svg ***!
  \***************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgMjQgMzAiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDI0IDI0IiB4bWw6c3BhY2U9InByZXNlcnZlIj48cGF0aCBkPSJNMS4xOTIsMTkuNTk3YzAuNjUsMC42NjIsMS41NDIsMS4wMTEsMi41OCwxLjAxMWgxMi4wNGMwLjAwMiwwLDAuMDY5LDAsMC4wNzEsMGMxLjkzMiwwLDMuNTUyLTEuNDE3LDMuODg5LTMuMjY0aDAuMjM1ICBjMC4wMjMsMCwwLjA0OCwwLDAuMDcxLDBjMS4wMTEsMCwxLjk2Ni0wLjM4NSwyLjY5NS0xLjA4OWMwLjc0Ni0wLjcyLDEuMTY4LTEuNjg4LDEuMTg3LTIuNzI2YzAuMDM3LTIuMTEtMS42MjUtMy44NjQtMy43MjMtMy45NSAgYy0wLjA0Ny0wLjc1MS0wLjM1Ni0xLjQ1NC0wLjg4NS0yLjAwMWMtMC41OS0wLjYxMS0xLjM4Mi0wLjk1Ni0yLjIzLTAuOTcxYy0wLjA0MS0wLjAwMS0wLjA4NiwwLTAuMTMsMCAgYy0wLjU2Mi0xLjg3Ni0yLjI2My0zLjE4Mi00LjI1LTMuMjE3Yy0wLjAyNiwwLTAuMDUzLTAuMDAxLTAuMDgtMC4wMDFjLTEuODk1LDAtMy41NzgsMS4yLTQuMjI5LDIuOTY1ICBDOC4zODgsNi4zNTQsOC4zNTEsNi4zNTIsOC4yOTcsNi4zNTFjLTIuMDQ0LDAtMy44NDksMS4zNjktNC40MjUsMy4zMDRDMi4zNzksOS41ODQsMS4xLDEwLjgwMywxLjEsMTIuMzA1ICBjMCwwLjQxMSwwLjA5NSwwLjgxMiwwLjI3NSwxLjE3NkMwLjU0MywxNC4yMTksMC4wNiwxNS4yNSwwLjA0LDE2LjM2MUMwLjAxNywxNy42NDgsMC40MzcsMTguODI4LDEuMTkyLDE5LjU5N3ogTTEyLjcyOSw0LjE5MiAgYzEuNzMzLDAuMDMxLDMuMjAxLDEuMjM2LDMuNTcsMi45M2MwLjA0MywwLjIwMywwLjIyOSwwLjMzNSwwLjQ0NSwwLjMxMmMwLjExNy0wLjAxNiwwLjIzMS0wLjAyNywwLjM2My0wLjAyNSAgYzEuMzEyLDAuMDIzLDIuMzU5LDEuMTEsMi4zMzYsMi40MjJsMC40LDAuMDA3bC0wLjM5OSwwLjEwOWMtMC4wMDcsMC4xMDksMC4wMzEsMC4yMTYsMC4xMDUsMC4yOTcgIGMwLjA3MywwLjA4LDAuMTc4LDAuMTI3LDAuMjg3LDAuMTI5bDAuMjk1LDAuMDA1YzEuNjk5LDAuMDMxLDMuMDU4LDEuNDM5LDMuMDI3LDMuMTM5Yy0wLjAxNSwwLjgyNC0wLjM0OSwxLjU5Mi0wLjk0MSwyLjE2NSAgYy0wLjU5NCwwLjU3Mi0xLjM1NSwwLjg3OC0yLjIwNCwwLjg2NGgtMC4xODFjLTAuMDUzLTIuMDc5LTEuNzA2LTMuNzgxLTMuNzk0LTMuODYyYy0wLjEwNC0xLjY2OS0xLjQ4LTMuMDEtMy4yMjUtMy4wNDIgIGMtMC4wMzEsMC0wLjA2MywwLTAuMDk1LDAuMDAyYy0wLjQ4Ni0xLjYyNC0xLjgyMi0yLjgzNy0zLjQ3My0zLjE4M0M5LjgzNCw1LjA3OCwxMS4yMDMsNC4xNDEsMTIuNzI5LDQuMTkyeiBNMi4xMzIsMTMuODk3ICBjMC4xNzMtMC4xMjgsMC4yMTMtMC4zNjksMC4wOTItMC41NDdjLTAuMjEyLTAuMzEtMC4zMjMtMC42NzItMC4zMjMtMS4wNDVjMC0xLjAyMiwwLjgzMS0xLjg1NCwxLjg1NC0xLjg1NCAgYzAuMTE4LDAsMC4yMzIsMC4wMTQsMC4zNDUsMC4wMzVjMC4yMDksMC4wNDQsMC40Mi0wLjA5OCwwLjQ2NS0wLjMxYzAuMzcxLTEuNzUzLDEuOTQtMy4wMjUsMy44LTMuMDI1aDAuMDAxICBjMC4xMjEsMC4wMDIsMC4yMzksMC4wMSwwLjM1NSwwLjAyMmMxLjYyOSwwLjE4LDIuOTU3LDEuMzc4LDMuMzA3LDIuOTgyYzAuMDQ0LDAuMjA0LDAuMjI5LDAuMzM2LDAuNDQ1LDAuMzEyICBjMC4xMTEtMC4wMTYsMC4yMjQtMC4wMjYsMC4zNjktMC4wMjZjMC4wMDEsMCwwLjAwMywwLDAuMDA1LDBjMS4zNDcsMC4wMjQsMi40MjMsMS4xNCwyLjM5OCwyLjQ4N2wwLjQsMC4wMDdsLTAuMzk5LDAuMTEzICBjLTAuMDA3LDAuMTA5LDAuMDMxLDAuMjE2LDAuMTA1LDAuMjk2YzAuMDc0LDAuMDgxLDAuMTc4LDAuMTI3LDAuMjg3LDAuMTI5bDAuMzAyLDAuMDA1YzEuNzQ0LDAuMDMxLDMuMTM4LDEuNDc2LDMuMTA2LDMuMjIgIGMtMC4wMywxLjcxNC0xLjQ0OSwzLjEwOC0zLjE2MywzLjEwOGwtMTIuMTExLDBjLTAuODMsMC0xLjUwNi0wLjI2LTIuMDA5LTAuNzcyYy0wLjYwNi0wLjYxNy0wLjk0Mi0xLjU4Ny0wLjkyMy0yLjY2MiAgQzAuODU3LDE1LjM5NiwxLjMyOSwxNC40OTIsMi4xMzIsMTMuODk3eiIvPjx0ZXh0IHg9IjAiIHk9IjM5IiBmaWxsPSIjMDAwMDAwIiBmb250LXNpemU9IjVweCIgZm9udC13ZWlnaHQ9ImJvbGQiIGZvbnQtZmFtaWx5PSInSGVsdmV0aWNhIE5ldWUnLCBIZWx2ZXRpY2EsIEFyaWFsLVVuaWNvZGUsIEFyaWFsLCBTYW5zLXNlcmlmIj5DcmVhdGVkIGJ5IEF0aWYgQXJzaGFkPC90ZXh0Pjx0ZXh0IHg9IjAiIHk9IjQ0IiBmaWxsPSIjMDAwMDAwIiBmb250LXNpemU9IjVweCIgZm9udC13ZWlnaHQ9ImJvbGQiIGZvbnQtZmFtaWx5PSInSGVsdmV0aWNhIE5ldWUnLCBIZWx2ZXRpY2EsIEFyaWFsLVVuaWNvZGUsIEFyaWFsLCBTYW5zLXNlcmlmIj5mcm9tIHRoZSBOb3VuIFByb2plY3Q8L3RleHQ+PC9zdmc+";

/***/ }),

/***/ "./assets/github-mark-white.svg":
/*!**************************************!*\
  !*** ./assets/github-mark-white.svg ***!
  \**************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOTgiIGhlaWdodD0iOTYiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik00OC44NTQgMEMyMS44MzkgMCAwIDIyIDAgNDkuMjE3YzAgMjEuNzU2IDEzLjk5MyA0MC4xNzIgMzMuNDA1IDQ2LjY5IDIuNDI3LjQ5IDMuMzE2LTEuMDU5IDMuMzE2LTIuMzYyIDAtMS4xNDEtLjA4LTUuMDUyLS4wOC05LjEyNy0xMy41OSAyLjkzNC0xNi40Mi01Ljg2Ny0xNi40Mi01Ljg2Ny0yLjE4NC01LjcwNC01LjQyLTcuMTctNS40Mi03LjE3LTQuNDQ4LTMuMDE1LjMyNC0zLjAxNS4zMjQtMy4wMTUgNC45MzQuMzI2IDcuNTIzIDUuMDUyIDcuNTIzIDUuMDUyIDQuMzY3IDcuNDk2IDExLjQwNCA1LjM3OCAxNC4yMzUgNC4wNzQuNDA0LTMuMTc4IDEuNjk5LTUuMzc4IDMuMDc0LTYuNi0xMC44MzktMS4xNDEtMjIuMjQzLTUuMzc4LTIyLjI0My0yNC4yODMgMC01LjM3OCAxLjk0LTkuNzc4IDUuMDE0LTEzLjItLjQ4NS0xLjIyMi0yLjE4NC02LjI3NS40ODYtMTMuMDM4IDAgMCA0LjEyNS0xLjMwNCAxMy40MjYgNS4wNTJhNDYuOTcgNDYuOTcgMCAwIDEgMTIuMjE0LTEuNjNjNC4xMjUgMCA4LjMzLjU3MSAxMi4yMTMgMS42MyA5LjMwMi02LjM1NiAxMy40MjctNS4wNTIgMTMuNDI3LTUuMDUyIDIuNjcgNi43NjMuOTcgMTEuODE2LjQ4NSAxMy4wMzggMy4xNTUgMy40MjIgNS4wMTUgNy44MjIgNS4wMTUgMTMuMiAwIDE4LjkwNS0xMS40MDQgMjMuMDYtMjIuMzI0IDI0LjI4MyAxLjc4IDEuNTQ4IDMuMzE2IDQuNDgxIDMuMzE2IDkuMTI2IDAgNi42LS4wOCAxMS44OTctLjA4IDEzLjUyNiAwIDEuMzA0Ljg5IDIuODUzIDMuMzE2IDIuMzY0IDE5LjQxMi02LjUyIDMzLjQwNS0yNC45MzUgMzMuNDA1LTQ2LjY5MUM5Ny43MDcgMjIgNzUuNzg4IDAgNDguODU0IDB6IiBmaWxsPSIjZmZmIi8+PC9zdmc+";

/***/ }),

/***/ "./assets/mesh-gradient.png":
/*!**********************************!*\
  !*** ./assets/mesh-gradient.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7e5e159937798fad8e5b.png";

/***/ }),

/***/ "./assets/moon.svg":
/*!*************************!*\
  !*** ./assets/moon.svg ***!
  \*************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml;base64,PHN2ZyAgZmlsbD0iI2ZmZiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBoZWlnaHQ9IjI0IiB2aWV3Qm94PSIwIC05NjAgOTYwIDk2MCIgd2lkdGg9IjI0Ij48cGF0aCBkPSJNNTI0LTQwcS04NCAwLTE1Ny41LTMydC0xMjgtODYuNVExODQtMjEzIDE1Mi0yODYuNVQxMjAtNDQ0cTAtMTQ2IDkzLTI1Ny41VDQ1MC04NDBxLTE4IDk5IDExIDE5My41VDU2MS00ODFxNzEgNzEgMTY1LjUgMTAwVDkyMC0zNzBxLTI2IDE0NC0xMzggMjM3VDUyNC00MFptMC04MHE4OCAwIDE2My00NHQxMTgtMTIxcS04Ni04LTE2My00My41VDUwNC00MjVxLTYxLTYxLTk3LTEzOHQtNDMtMTYzcS03NyA0My0xMjAuNSAxMTguNVQyMDAtNDQ0cTAgMTM1IDk0LjUgMjI5LjVUNTI0LTEyMFptLTIwLTMwNVoiLz48L3N2Zz4=";

/***/ }),

/***/ "./assets/precipitation.svg":
/*!**********************************!*\
  !*** ./assets/precipitation.svg ***!
  \**********************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml;base64,PHN2ZyBmaWxsPSIjZmZmIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgLTk2MCA5NjAgOTYwIiB3aWR0aD0iMjQiPjxwYXRoIGQ9Ik0xOTgtNDg0cS0xNSA4LTMwLjUgMi41VDE0NC01MDJMNDQtNzAycS04LTE1LTIuNS0zMC41VDYyLTc1NnExNS04IDMwLjUtMi41VDExNi03MzhsMTAwIDIwMHE4IDE1IDIuNSAzMC41VDE5OC00ODRabTE0MCAyODBxLTE1IDgtMzAuNSAyLjVUMjg0LTIyMmwtODAtMTYwcS04LTE1LTIuNS0zMC41VDIyMi00MzZxMTUtOCAzMC41LTIuNVQyNzYtNDE4bDgwIDE2MHE4IDE1IDIuNSAzMC41VDMzOC0yMDRabTgyLTIwMHEtMTUgOC0zMC41IDIuNVQzNjYtNDIyTDIyNi03MDJxLTgtMTUtMi41LTMwLjVUMjQ0LTc1NnExNS04IDMwLjUtMi41VDI5OC03MzhsMTQwIDI4MHE4IDE1IDIuNSAzMC41VDQyMC00MDRabTg2LTIwMHEtMTUgOC0zMC41IDIuNVQ0NTItNjIybC0zOS04MHEtOC0xNS0yLjUtMzAuNVQ0MzEtNzU2cTE1LTggMzAtMi41dDIzIDIwLjVsNDAgODBxOCAxNSAyLjUgMzAuNVQ1MDYtNjA0Wm0yNCAzOTlxLTE1IDgtMzAuNSAzVDQ3Ni0yMjJsLTQwLTgwcS04LTE1LTIuNS0zMC41VDQ1NC0zNTZxMTUtOCAzMC41LTIuNVQ1MDgtMzM4bDQwIDgwcTggMTUgMi41IDMwVDUzMC0yMDVabTE4NiAwcS0xNSA4LTMwLjUgM1Q2NjItMjIyTDUyMi01MDJxLTgtMTUtMi41LTMwLjVUNTQwLTU1NnExNS04IDMwLjUtMi41VDU5NC01MzhsMTQwIDI4MHE4IDE1IDIuNSAzMFQ3MTYtMjA1Wm02Mi0yMzlxLTE1IDgtMzAuNSAyLjVUNzI0LTQ2Mkw2MDQtNzAycS04LTE1LTIuNS0zMC41VDYyMi03NTZxMTUtOCAzMC41LTIuNVQ2NzYtNzM4bDEyMCAyNDBxOCAxNSAyLjUgMzAuNVQ3NzgtNDQ0Wm0xMjAgMjQwcS0xNSA4LTMwLjUgMi41VDg0NC0yMjJsLTYwLTEyMHEtOC0xNS0yLjUtMzAuNVQ4MDItMzk2cTE1LTggMzAuNS0yLjVUODU2LTM3OGw2MCAxMjBxOCAxNSAyLjUgMzAuNVQ4OTgtMjA0WiIvPjwvc3ZnPg==";

/***/ }),

/***/ "./assets/sun.svg":
/*!************************!*\
  !*** ./assets/sun.svg ***!
  \************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml;base64,PHN2ZyBmaWxsPSIjZmZmIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgLTk2MCA5NjAgOTYwIiB3aWR0aD0iMjQiPjxwYXRoIGQ9Ik00NDAtNzYwdi0xNjBoODB2MTYwaC04MFptMjY2IDExMC01NS01NSAxMTItMTE1IDU2IDU3LTExMyAxMTNabTU0IDIxMHYtODBoMTYwdjgwSDc2MFpNNDQwLTQwdi0xNjBoODB2MTYwaC04MFpNMjU0LTY1MiAxNDAtNzYzbDU3LTU2IDExMyAxMTMtNTYgNTRabTUwOCA1MTJMNjUxLTI1NWw1NC01NCAxMTQgMTEwLTU3IDU5Wk00MC00NDB2LTgwaDE2MHY4MEg0MFptMTU3IDMwMC01Ni01NyAxMTItMTEyIDI5IDI3IDI5IDI4LTExNCAxMTRabTI4My0xMDBxLTEwMCAwLTE3MC03MHQtNzAtMTcwcTAtMTAwIDcwLTE3MHQxNzAtNzBxMTAwIDAgMTcwIDcwdDcwIDE3MHEwIDEwMC03MCAxNzB0LTE3MCA3MFptMC04MHE2NiAwIDExMy00N3Q0Ny0xMTNxMC02Ni00Ny0xMTN0LTExMy00N3EtNjYgMC0xMTMgNDd0LTQ3IDExM3EwIDY2IDQ3IDExM3QxMTMgNDdabTAtMTYwWiIvPjwvc3ZnPg==";

/***/ }),

/***/ "./assets/wind.svg":
/*!*************************!*\
  !*** ./assets/wind.svg ***!
  \*************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml;base64,PHN2ZyBmaWxsPSIjZmZmIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgLTk2MCA5NjAgOTYwIiB3aWR0aD0iMjQiPjxwYXRoIGQ9Ik00NjAtMTYwcS01MCAwLTg1LTM1dC0zNS04NWg4MHEwIDE3IDExLjUgMjguNVQ0NjAtMjQwcTE3IDAgMjguNS0xMS41VDUwMC0yODBxMC0xNy0xMS41LTI4LjVUNDYwLTMyMEg4MHYtODBoMzgwcTUwIDAgODUgMzV0MzUgODVxMCA1MC0zNSA4NXQtODUgMzVaTTgwLTU2MHYtODBoNTQwcTI2IDAgNDMtMTd0MTctNDNxMC0yNi0xNy00M3QtNDMtMTdxLTI2IDAtNDMgMTd0LTE3IDQzaC04MHEwLTU5IDQwLjUtOTkuNVQ2MjAtODQwcTU5IDAgOTkuNSA0MC41VDc2MC03MDBxMCA1OS00MC41IDk5LjVUNjIwLTU2MEg4MFptNjYwIDMyMHYtODBxMjYgMCA0My0xN3QxNy00M3EwLTI2LTE3LTQzdC00My0xN0g4MHYtODBoNjYwcTU5IDAgOTkuNSA0MC41VDg4MC0zODBxMCA1OS00MC41IDk5LjVUNzQwLTI0MFoiLz48L3N2Zz4=";

/***/ }),

/***/ "./node_modules/date-fns/add.mjs":
/*!***************************************!*\
  !*** ./node_modules/date-fns/add.mjs ***!
  \***************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   add: () => (/* binding */ add),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _addDays_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./addDays.mjs */ "./node_modules/date-fns/addDays.mjs");
/* harmony import */ var _addMonths_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addMonths.mjs */ "./node_modules/date-fns/addMonths.mjs");
/* harmony import */ var _constructFrom_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constructFrom.mjs */ "./node_modules/date-fns/constructFrom.mjs");
/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDate.mjs */ "./node_modules/date-fns/toDate.mjs");





/**
 * @name add
 * @category Common Helpers
 * @summary Add the specified years, months, weeks, days, hours, minutes and seconds to the given date.
 *
 * @description
 * Add the specified years, months, weeks, days, hours, minutes and seconds to the given date.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The date to be changed
 * @param duration - The object with years, months, weeks, days, hours, minutes and seconds to be added.
 *
 * | Key            | Description                        |
 * |----------------|------------------------------------|
 * | years          | Amount of years to be added        |
 * | months         | Amount of months to be added       |
 * | weeks          | Amount of weeks to be added        |
 * | days           | Amount of days to be added         |
 * | hours          | Amount of hours to be added        |
 * | minutes        | Amount of minutes to be added      |
 * | seconds        | Amount of seconds to be added      |
 *
 * All values default to 0
 *
 * @returns The new date with the seconds added
 *
 * @example
 * // Add the following duration to 1 September 2014, 10:19:50
 * const result = add(new Date(2014, 8, 1, 10, 19, 50), {
 *   years: 2,
 *   months: 9,
 *   weeks: 1,
 *   days: 7,
 *   hours: 5,\\-7
 *   minutes: 9,
 *   seconds: 30,
 * })
 * //=> Thu Jun 15 2017 15:29:20
 */
function add(date, duration) {
  const {
    years = 0,
    months = 0,
    weeks = 0,
    days = 0,
    hours = 0,
    minutes = 0,
    seconds = 0,
  } = duration;

  // Add years and months
  const _date = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(date);
  const dateWithMonths =
    months || years ? (0,_addMonths_mjs__WEBPACK_IMPORTED_MODULE_1__.addMonths)(_date, months + years * 12) : _date;

  // Add weeks and days
  const dateWithDays =
    days || weeks ? (0,_addDays_mjs__WEBPACK_IMPORTED_MODULE_2__.addDays)(dateWithMonths, days + weeks * 7) : dateWithMonths;

  // Add days, hours, minutes and seconds
  const minutesToAdd = minutes + hours * 60;
  const secondsToAdd = seconds + minutesToAdd * 60;
  const msToAdd = secondsToAdd * 1000;
  const finalDate = (0,_constructFrom_mjs__WEBPACK_IMPORTED_MODULE_3__.constructFrom)(date, dateWithDays.getTime() + msToAdd);

  return finalDate;
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (add);


/***/ }),

/***/ "./node_modules/date-fns/addDays.mjs":
/*!*******************************************!*\
  !*** ./node_modules/date-fns/addDays.mjs ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addDays: () => (/* binding */ addDays),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDate.mjs */ "./node_modules/date-fns/toDate.mjs");
/* harmony import */ var _constructFrom_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constructFrom.mjs */ "./node_modules/date-fns/constructFrom.mjs");



/**
 * @name addDays
 * @category Day Helpers
 * @summary Add the specified number of days to the given date.
 *
 * @description
 * Add the specified number of days to the given date.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The date to be changed
 * @param amount - The amount of days to be added.
 *
 * @returns The new date with the days added
 *
 * @example
 * // Add 10 days to 1 September 2014:
 * const result = addDays(new Date(2014, 8, 1), 10)
 * //=> Thu Sep 11 2014 00:00:00
 */
function addDays(date, amount) {
  const _date = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(date);
  if (isNaN(amount)) return (0,_constructFrom_mjs__WEBPACK_IMPORTED_MODULE_1__.constructFrom)(date, NaN);
  if (!amount) {
    // If 0 days, no-op to avoid changing times in the hour before end of DST
    return _date;
  }
  _date.setDate(_date.getDate() + amount);
  return _date;
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addDays);


/***/ }),

/***/ "./node_modules/date-fns/addMonths.mjs":
/*!*********************************************!*\
  !*** ./node_modules/date-fns/addMonths.mjs ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addMonths: () => (/* binding */ addMonths),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDate.mjs */ "./node_modules/date-fns/toDate.mjs");
/* harmony import */ var _constructFrom_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constructFrom.mjs */ "./node_modules/date-fns/constructFrom.mjs");



/**
 * @name addMonths
 * @category Month Helpers
 * @summary Add the specified number of months to the given date.
 *
 * @description
 * Add the specified number of months to the given date.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The date to be changed
 * @param amount - The amount of months to be added.
 *
 * @returns The new date with the months added
 *
 * @example
 * // Add 5 months to 1 September 2014:
 * const result = addMonths(new Date(2014, 8, 1), 5)
 * //=> Sun Feb 01 2015 00:00:00
 *
 * // Add one month to 30 January 2023:
 * const result = addMonths(new Date(2023, 0, 30), 1)
 * //=> Tue Feb 28 2023 00:00:00
 */
function addMonths(date, amount) {
  const _date = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(date);
  if (isNaN(amount)) return (0,_constructFrom_mjs__WEBPACK_IMPORTED_MODULE_1__.constructFrom)(date, NaN);
  if (!amount) {
    // If 0 months, no-op to avoid changing times in the hour before end of DST
    return _date;
  }
  const dayOfMonth = _date.getDate();

  // The JS Date object supports date math by accepting out-of-bounds values for
  // month, day, etc. For example, new Date(2020, 0, 0) returns 31 Dec 2019 and
  // new Date(2020, 13, 1) returns 1 Feb 2021.  This is *almost* the behavior we
  // want except that dates will wrap around the end of a month, meaning that
  // new Date(2020, 13, 31) will return 3 Mar 2021 not 28 Feb 2021 as desired. So
  // we'll default to the end of the desired month by adding 1 to the desired
  // month and using a date of 0 to back up one day to the end of the desired
  // month.
  const endOfDesiredMonth = (0,_constructFrom_mjs__WEBPACK_IMPORTED_MODULE_1__.constructFrom)(date, _date.getTime());
  endOfDesiredMonth.setMonth(_date.getMonth() + amount + 1, 0);
  const daysInMonth = endOfDesiredMonth.getDate();
  if (dayOfMonth >= daysInMonth) {
    // If we're already at the end of the month, then this is the correct date
    // and we're done.
    return endOfDesiredMonth;
  } else {
    // Otherwise, we now know that setting the original day-of-month value won't
    // cause an overflow, so set the desired day-of-month. Note that we can't
    // just set the date of `endOfDesiredMonth` because that object may have had
    // its time changed in the unusual case where where a DST transition was on
    // the last day of the month and its local time was in the hour skipped or
    // repeated next to a DST transition.  So we use `date` instead which is
    // guaranteed to still have the original time.
    _date.setFullYear(
      endOfDesiredMonth.getFullYear(),
      endOfDesiredMonth.getMonth(),
      dayOfMonth,
    );
    return _date;
  }
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addMonths);


/***/ }),

/***/ "./node_modules/date-fns/constructFrom.mjs":
/*!*************************************************!*\
  !*** ./node_modules/date-fns/constructFrom.mjs ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   constructFrom: () => (/* binding */ constructFrom),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * @name constructFrom
 * @category Generic Helpers
 * @summary Constructs a date using the reference date and the value
 *
 * @description
 * The function constructs a new date using the constructor from the reference
 * date and the given value. It helps to build generic functions that accept
 * date extensions.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The reference date to take constructor from
 * @param value - The value to create the date
 *
 * @returns Date initialized using the given date and value
 *
 * @example
 * import { constructFrom } from 'date-fns'
 *
 * // A function that clones a date preserving the original type
 * function cloneDate<DateType extends Date(date: DateType): DateType {
 *   return constructFrom(
 *     date, // Use contrustor from the given date
 *     date.getTime() // Use the date value to create a new date
 *   )
 * }
 */
function constructFrom(date, value) {
  if (date instanceof Date) {
    return new date.constructor(value);
  } else {
    return new Date(value);
  }
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (constructFrom);


/***/ }),

/***/ "./node_modules/date-fns/toDate.mjs":
/*!******************************************!*\
  !*** ./node_modules/date-fns/toDate.mjs ***!
  \******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   toDate: () => (/* binding */ toDate)
/* harmony export */ });
/**
 * @name toDate
 * @category Common Helpers
 * @summary Convert the given argument to an instance of Date.
 *
 * @description
 * Convert the given argument to an instance of Date.
 *
 * If the argument is an instance of Date, the function returns its clone.
 *
 * If the argument is a number, it is treated as a timestamp.
 *
 * If the argument is none of the above, the function returns Invalid Date.
 *
 * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param argument - The value to convert
 *
 * @returns The parsed date in the local time zone
 *
 * @example
 * // Clone the date:
 * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert the timestamp to date:
 * const result = toDate(1392098430000)
 * //=> Tue Feb 11 2014 11:30:30
 */
function toDate(argument) {
  const argStr = Object.prototype.toString.call(argument);

  // Clone the date
  if (
    argument instanceof Date ||
    (typeof argument === "object" && argStr === "[object Date]")
  ) {
    // Prevent the date to lose the milliseconds when passed to new Date() in IE10
    return new argument.constructor(+argument);
  } else if (
    typeof argument === "number" ||
    argStr === "[object Number]" ||
    typeof argument === "string" ||
    argStr === "[object String]"
  ) {
    // TODO: Can we get rid of as?
    return new Date(argument);
  } else {
    // TODO: Can we get rid of as?
    return new Date(NaN);
  }
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (toDate);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assets_clouds_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/clouds.svg */ "./assets/clouds.svg");
/* harmony import */ var _assets_moon_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/moon.svg */ "./assets/moon.svg");
/* harmony import */ var _assets_precipitation_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/precipitation.svg */ "./assets/precipitation.svg");
/* harmony import */ var _assets_sun_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/sun.svg */ "./assets/sun.svg");
/* harmony import */ var _assets_wind_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/wind.svg */ "./assets/wind.svg");
/* harmony import */ var _assets_github_mark_white_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/github-mark-white.svg */ "./assets/github-mark-white.svg");
/* harmony import */ var _assets_mesh_gradient_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../assets/mesh-gradient.png */ "./assets/mesh-gradient.png");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/add.mjs");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
function _typeof(o) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, _typeof(o);
}
function _defineProperty(obj, key, value) {
  key = _toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _toPropertyKey(t) {
  var i = _toPrimitive(t, "string");
  return "symbol" == _typeof(i) ? i : String(i);
}
function _toPrimitive(t, r) {
  if ("object" != _typeof(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != _typeof(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
function _regeneratorRuntime() {
  "use strict";

  /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
  _regeneratorRuntime = function _regeneratorRuntime() {
    return e;
  };
  var t,
    e = {},
    r = Object.prototype,
    n = r.hasOwnProperty,
    o = Object.defineProperty || function (t, e, r) {
      t[e] = r.value;
    },
    i = "function" == typeof Symbol ? Symbol : {},
    a = i.iterator || "@@iterator",
    c = i.asyncIterator || "@@asyncIterator",
    u = i.toStringTag || "@@toStringTag";
  function define(t, e, r) {
    return Object.defineProperty(t, e, {
      value: r,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }), t[e];
  }
  try {
    define({}, "");
  } catch (t) {
    define = function define(t, e, r) {
      return t[e] = r;
    };
  }
  function wrap(t, e, r, n) {
    var i = e && e.prototype instanceof Generator ? e : Generator,
      a = Object.create(i.prototype),
      c = new Context(n || []);
    return o(a, "_invoke", {
      value: makeInvokeMethod(t, r, c)
    }), a;
  }
  function tryCatch(t, e, r) {
    try {
      return {
        type: "normal",
        arg: t.call(e, r)
      };
    } catch (t) {
      return {
        type: "throw",
        arg: t
      };
    }
  }
  e.wrap = wrap;
  var h = "suspendedStart",
    l = "suspendedYield",
    f = "executing",
    s = "completed",
    y = {};
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}
  var p = {};
  define(p, a, function () {
    return this;
  });
  var d = Object.getPrototypeOf,
    v = d && d(d(values([])));
  v && v !== r && n.call(v, a) && (p = v);
  var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p);
  function defineIteratorMethods(t) {
    ["next", "throw", "return"].forEach(function (e) {
      define(t, e, function (t) {
        return this._invoke(e, t);
      });
    });
  }
  function AsyncIterator(t, e) {
    function invoke(r, o, i, a) {
      var c = tryCatch(t[r], t, o);
      if ("throw" !== c.type) {
        var u = c.arg,
          h = u.value;
        return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) {
          invoke("next", t, i, a);
        }, function (t) {
          invoke("throw", t, i, a);
        }) : e.resolve(h).then(function (t) {
          u.value = t, i(u);
        }, function (t) {
          return invoke("throw", t, i, a);
        });
      }
      a(c.arg);
    }
    var r;
    o(this, "_invoke", {
      value: function value(t, n) {
        function callInvokeWithMethodAndArg() {
          return new e(function (e, r) {
            invoke(t, n, e, r);
          });
        }
        return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
      }
    });
  }
  function makeInvokeMethod(e, r, n) {
    var o = h;
    return function (i, a) {
      if (o === f) throw new Error("Generator is already running");
      if (o === s) {
        if ("throw" === i) throw a;
        return {
          value: t,
          done: !0
        };
      }
      for (n.method = i, n.arg = a;;) {
        var c = n.delegate;
        if (c) {
          var u = maybeInvokeDelegate(c, n);
          if (u) {
            if (u === y) continue;
            return u;
          }
        }
        if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) {
          if (o === h) throw o = s, n.arg;
          n.dispatchException(n.arg);
        } else "return" === n.method && n.abrupt("return", n.arg);
        o = f;
        var p = tryCatch(e, r, n);
        if ("normal" === p.type) {
          if (o = n.done ? s : l, p.arg === y) continue;
          return {
            value: p.arg,
            done: n.done
          };
        }
        "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg);
      }
    };
  }
  function maybeInvokeDelegate(e, r) {
    var n = r.method,
      o = e.iterator[n];
    if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y;
    var i = tryCatch(o, e.iterator, r.arg);
    if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y;
    var a = i.arg;
    return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y);
  }
  function pushTryEntry(t) {
    var e = {
      tryLoc: t[0]
    };
    1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e);
  }
  function resetTryEntry(t) {
    var e = t.completion || {};
    e.type = "normal", delete e.arg, t.completion = e;
  }
  function Context(t) {
    this.tryEntries = [{
      tryLoc: "root"
    }], t.forEach(pushTryEntry, this), this.reset(!0);
  }
  function values(e) {
    if (e || "" === e) {
      var r = e[a];
      if (r) return r.call(e);
      if ("function" == typeof e.next) return e;
      if (!isNaN(e.length)) {
        var o = -1,
          i = function next() {
            for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next;
            return next.value = t, next.done = !0, next;
          };
        return i.next = i;
      }
    }
    throw new TypeError(_typeof(e) + " is not iterable");
  }
  return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", {
    value: GeneratorFunctionPrototype,
    configurable: !0
  }), o(GeneratorFunctionPrototype, "constructor", {
    value: GeneratorFunction,
    configurable: !0
  }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) {
    var e = "function" == typeof t && t.constructor;
    return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name));
  }, e.mark = function (t) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t;
  }, e.awrap = function (t) {
    return {
      __await: t
    };
  }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () {
    return this;
  }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) {
    void 0 === i && (i = Promise);
    var a = new AsyncIterator(wrap(t, r, n, o), i);
    return e.isGeneratorFunction(r) ? a : a.next().then(function (t) {
      return t.done ? t.value : a.next();
    });
  }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () {
    return this;
  }), define(g, "toString", function () {
    return "[object Generator]";
  }), e.keys = function (t) {
    var e = Object(t),
      r = [];
    for (var n in e) r.push(n);
    return r.reverse(), function next() {
      for (; r.length;) {
        var t = r.pop();
        if (t in e) return next.value = t, next.done = !1, next;
      }
      return next.done = !0, next;
    };
  }, e.values = values, Context.prototype = {
    constructor: Context,
    reset: function reset(e) {
      if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t);
    },
    stop: function stop() {
      this.done = !0;
      var t = this.tryEntries[0].completion;
      if ("throw" === t.type) throw t.arg;
      return this.rval;
    },
    dispatchException: function dispatchException(e) {
      if (this.done) throw e;
      var r = this;
      function handle(n, o) {
        return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o;
      }
      for (var o = this.tryEntries.length - 1; o >= 0; --o) {
        var i = this.tryEntries[o],
          a = i.completion;
        if ("root" === i.tryLoc) return handle("end");
        if (i.tryLoc <= this.prev) {
          var c = n.call(i, "catchLoc"),
            u = n.call(i, "finallyLoc");
          if (c && u) {
            if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
            if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
          } else if (c) {
            if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
          } else {
            if (!u) throw new Error("try statement without catch or finally");
            if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
          }
        }
      }
    },
    abrupt: function abrupt(t, e) {
      for (var r = this.tryEntries.length - 1; r >= 0; --r) {
        var o = this.tryEntries[r];
        if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
          var i = o;
          break;
        }
      }
      i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
      var a = i ? i.completion : {};
      return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a);
    },
    complete: function complete(t, e) {
      if ("throw" === t.type) throw t.arg;
      return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y;
    },
    finish: function finish(t) {
      for (var e = this.tryEntries.length - 1; e >= 0; --e) {
        var r = this.tryEntries[e];
        if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y;
      }
    },
    "catch": function _catch(t) {
      for (var e = this.tryEntries.length - 1; e >= 0; --e) {
        var r = this.tryEntries[e];
        if (r.tryLoc === t) {
          var n = r.completion;
          if ("throw" === n.type) {
            var o = n.arg;
            resetTryEntry(r);
          }
          return o;
        }
      }
      throw new Error("illegal catch attempt");
    },
    delegateYield: function delegateYield(e, r, n) {
      return this.delegate = {
        iterator: values(e),
        resultName: r,
        nextLoc: n
      }, "next" === this.method && (this.arg = t), y;
    }
  }, e;
}
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }
  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}
function _asyncToGenerator(fn) {
  return function () {
    var self = this,
      args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);
      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }
      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }
      _next(undefined);
    });
  };
}









localStorage.clear();
function getHours() {
  var LOCAL_TIME = new Date(Date.parse(locationCurrentTime));
  var HOURS = LOCAL_TIME.getHours();
  return HOURS;
}
var locationCurrentTime;
var tempUnits = "celsius";
function mapHoursToArray(hours) {
  var array = [];
  var lastPushedTime;
  for (var i = hours + 1; i <= hours + 7; i++) {
    if (lastPushedTime === undefined) {
      var nextHour = (0,date_fns__WEBPACK_IMPORTED_MODULE_8__.add)(locationCurrentTime, {
        hours: 1
      });
      array.push(nextHour);
      lastPushedTime = nextHour;
    } else {
      var _nextHour = (0,date_fns__WEBPACK_IMPORTED_MODULE_8__.add)(lastPushedTime, {
        hours: 1
      });
      array.push(_nextHour);
      lastPushedTime = _nextHour;
    }
    // if (i < 24) {
    //   array.push(i);
    // } else if (i >= 24) {
    //   array.push(i - 24);
    // }
  }
  return array;
}
function getTimeInTwelveHourFormat() {
  var CURRENT_DATE = new Date();
  var RESULT = CURRENT_DATE.toLocaleString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true
  });
  return RESULT;
}
function getCurrentWeather(_x) {
  return _getCurrentWeather.apply(this, arguments);
}
function _getCurrentWeather() {
  _getCurrentWeather = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(location) {
    var response, weatherData;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _context3.next = 3;
          return fetch("https://api.weatherapi.com/v1/forecast.json?key=".concat(KEY, "&q=").concat(location, "&days=3 "));
        case 3:
          response = _context3.sent;
          _context3.next = 6;
          return response.json();
        case 6:
          weatherData = _context3.sent;
          console.log(weatherData);
          return _context3.abrupt("return", weatherData);
        case 11:
          _context3.prev = 11;
          _context3.t0 = _context3["catch"](0);
          console.log(_context3.t0);
        case 14:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[0, 11]]);
  }));
  return _getCurrentWeather.apply(this, arguments);
}
var LOCATIONTEXTFIELD = document.getElementById("location-input");
var KEY = "ffd39e8293c94f3c8fe195415232612";
LOCATIONTEXTFIELD.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    getCurrentWeather(LOCATIONTEXTFIELD.value).then(function (result) {
      _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var weatherData;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              locationCurrentTime = result["location"]["localtime"];
              _context.next = 3;
              return createCurrentWeatherDataObject(result);
            case 3:
              weatherData = _context.sent;
              _context.t0 = refreshPage;
              _context.next = 7;
              return weatherData;
            case 7:
              _context.t1 = _context.sent;
              _context.t2 = result;
              (0, _context.t0)(_context.t1, _context.t2);
              localStorage.setItem("weatherData", JSON.stringify(weatherData));
            case 11:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }))();
    });
  }
});
function createDayArray(nextSixHoursArray) {
  var result = [];
  if (nextSixHoursArray[6].getDate() === nextSixHoursArray[0].getDate()) {
    result = [0, 0, 0, 0, 0, 0, 0];
    return result;
  } else {
    var index;
    for (var i = 0; i <= nextSixHoursArray.length; i++) {
      if (nextSixHoursArray[i].getHours() === 23 && nextSixHoursArray[i + 1].getHours() === 0) {
        index = i;
        break;
      }
    }
    for (var k = 0; k <= 6; k++) {
      if (k <= index) {
        result.push(0);
      } else {
        result.push(1);
      }
    }
    return result;
  }
}
function getNextSixHoursInDisplayForm() {
  var nextSixHoursArray24format = mapHoursToArray(getHours());
  var nextSixHoursArray = nextSixHoursArray24format.map(function (element) {
    if (element.getHours() === 0) {
      return "0:00";
    } else {
      return "".concat(element.getHours(), ":00");
    }
  });
  return nextSixHoursArray;
}
function addSufixToDayNumber(dayOfTheMonth) {
  var lastNumber = dayOfTheMonth % 10;
  switch (lastNumber) {
    case 1:
      return "".concat(dayOfTheMonth, "st");
    case 2:
      return "".concat(dayOfTheMonth, "nd");
    case 3:
      return "".concat(dayOfTheMonth, "rd");
    case 4:
      return "".concat(dayOfTheMonth, "th");
    case 5:
      return "".concat(dayOfTheMonth, "th");
    case 6:
      return "".concat(dayOfTheMonth, "th");
    case 7:
      return "".concat(dayOfTheMonth, "th");
    case 8:
      return "".concat(dayOfTheMonth, "th");
    case 9:
      return "".concat(dayOfTheMonth, "th");
    case 0:
      return "".concat(dayOfTheMonth, "th");
  }
}
function getNextThreeDays() {
  var today = new Date(locationCurrentTime);
  var tomorrow = new Date();
  tomorrow.setDate(today.getDate() + 1);
  var oneDayAfterTomorrow = new Date();
  oneDayAfterTomorrow.setDate(today.getDate() + 2);
  var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  var _ref2 = [addSufixToDayNumber(today.getDate()), addSufixToDayNumber(tomorrow.getDate()), addSufixToDayNumber(oneDayAfterTomorrow.getDate())],
    todayAsAWrittenDay = _ref2[0],
    tomorrrowAsWrittenDay = _ref2[1],
    oneDayAfterTomorrowAsWrittenDay = _ref2[2];
  var daysObject = {
    0: [days[today.getDay()], todayAsAWrittenDay],
    1: [days[tomorrow.getDay()], tomorrrowAsWrittenDay],
    2: [days[oneDayAfterTomorrow.getDay()], oneDayAfterTomorrowAsWrittenDay]
  };
  return daysObject;
}
function createCurrentWeatherDataObject(_x2) {
  return _createCurrentWeatherDataObject.apply(this, arguments);
}
function _createCurrentWeatherDataObject() {
  _createCurrentWeatherDataObject = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(weatherData) {
    var _nextsixhours;
    var nextSixHoursArray, day, CURRENT_WEATHER_DATA_OBJECT;
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          nextSixHoursArray = mapHoursToArray(getHours());
          day = createDayArray(nextSixHoursArray);
          CURRENT_WEATHER_DATA_OBJECT = {
            currentWeather: {
              temperatureC: weatherData["current"]["temp_c"],
              temperatureF: weatherData["current"]["temp_f"],
              windspeedKMH: weatherData["current"]["wind_kph"],
              windspeedMPH: weatherData["current"]["wind_mph"],
              nightTemperatureC: weatherData["forecast"]["forecastday"]["0"]["day"]["mintemp_c"],
              nightTemperatureF: weatherData["forecast"]["forecastday"]["0"]["day"]["mintemp_f"],
              precipitation: weatherData["current"]["precip_mm"],
              UV: weatherData["current"]["uv"]
            },
            nextsixhours: (_nextsixhours = {}, _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_nextsixhours, "".concat(nextSixHoursArray[0].getHours(), "_tempC"), weatherData["forecast"]["forecastday"][day[0]]["hour"][nextSixHoursArray[0].getHours()]["temp_c"]), "".concat(nextSixHoursArray[0].getHours(), "_tempF"), weatherData["forecast"]["forecastday"][day[0]]["hour"][nextSixHoursArray[0].getHours()]["temp_f"]), "".concat(nextSixHoursArray[1].getHours(), "_tempC"), weatherData["forecast"]["forecastday"][day[1]]["hour"][nextSixHoursArray[1].getHours()]["temp_c"]), "".concat(nextSixHoursArray[1].getHours(), "_tempF"), weatherData["forecast"]["forecastday"][day[1]]["hour"][nextSixHoursArray[1].getHours()]["temp_f"]), "".concat(nextSixHoursArray[2].getHours(), "_tempC"), weatherData["forecast"]["forecastday"][day[2]]["hour"][nextSixHoursArray[2].getHours()]["temp_c"]), "".concat(nextSixHoursArray[2].getHours(), "_tempF"), weatherData["forecast"]["forecastday"][day[2]]["hour"][nextSixHoursArray[2].getHours()]["temp_f"]), "".concat(nextSixHoursArray[3].getHours(), "_tempC"), weatherData["forecast"]["forecastday"][day[3]]["hour"][nextSixHoursArray[3].getHours()]["temp_c"]), "".concat(nextSixHoursArray[3].getHours(), "_tempF"), weatherData["forecast"]["forecastday"][day[3]]["hour"][nextSixHoursArray[3].getHours()]["temp_f"]), "".concat(nextSixHoursArray[4].getHours(), "_tempC"), weatherData["forecast"]["forecastday"][day[4]]["hour"][nextSixHoursArray[4].getHours()]["temp_c"]), "".concat(nextSixHoursArray[4].getHours(), "_tempF"), weatherData["forecast"]["forecastday"][day[4]]["hour"][nextSixHoursArray[4].getHours()]["temp_f"]), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_nextsixhours, "".concat(nextSixHoursArray[5].getHours(), "_tempC"), weatherData["forecast"]["forecastday"][day[5]]["hour"][nextSixHoursArray[5].getHours()]["temp_c"]), "".concat(nextSixHoursArray[5].getHours(), "_tempF"), weatherData["forecast"]["forecastday"][day[5]]["hour"][nextSixHoursArray[5].getHours()]["temp_f"]), "".concat(nextSixHoursArray[6].getHours(), "_tempC"), weatherData["forecast"]["forecastday"][day[6]]["hour"][nextSixHoursArray[6].getHours()]["temp_c"]), "".concat(nextSixHoursArray[6].getHours(), "_tempF"), weatherData["forecast"]["forecastday"][day[6]]["hour"][nextSixHoursArray[6].getHours()]["temp_f"])),
            nextThreeDays: {
              1: {
                temp_c: weatherData["forecast"]["forecastday"][1]["day"]["avgtemp_c"],
                temp_f: weatherData["forecast"]["forecastday"][1]["day"]["avgtemp_f"],
                nighttemp_c: weatherData["forecast"]["forecastday"][1]["day"]["mintemp_c"],
                nighttemp_f: weatherData["forecast"]["forecastday"][1]["day"]["mintemp_f"],
                maximumWindSpeedKPH: weatherData["forecast"]["forecastday"][1]["day"]["maxwind_kph"],
                maximumWindSpeedMPH: weatherData["forecast"]["forecastday"][1]["day"]["maxwind_mph"],
                precipitationInMm: weatherData["forecast"]["forecastday"][1]["day"]["totalprecip_mm"],
                UVIndex: weatherData["forecast"]["forecastday"][1]["day"]["uv"]
              },
              2: {
                temp_c: weatherData["forecast"]["forecastday"][2]["day"]["avgtemp_c"],
                temp_f: weatherData["forecast"]["forecastday"][2]["day"]["avgtemp_f"],
                nighttemp_c: weatherData["forecast"]["forecastday"][2]["day"]["mintemp_c"],
                nighttemp_f: weatherData["forecast"]["forecastday"][2]["day"]["mintemp_f"],
                maximumWindSpeedKMH: weatherData["forecast"]["forecastday"][2]["day"]["maxwind_kph"],
                maximumWindSpeedMPH: weatherData["forecast"]["forecastday"][2]["day"]["maxwind_mph"],
                precipitationInMm: weatherData["forecast"]["forecastday"][2]["day"]["totalprecip_mm"],
                UVIndex: weatherData["forecast"]["forecastday"][2]["day"]["uv"]
              }
            }
          };
          return _context4.abrupt("return", CURRENT_WEATHER_DATA_OBJECT);
        case 4:
        case "end":
          return _context4.stop();
      }
    }, _callee4);
  }));
  return _createCurrentWeatherDataObject.apply(this, arguments);
}
function getTodayTempObject(weatherData) {
  var nextSixHours = mapHoursToArray(getHours());
  var resultObject = {
    celsius: [weatherData["nextsixhours"]["".concat(nextSixHours[0].getHours(), "_tempC")], weatherData["nextsixhours"]["".concat(nextSixHours[1].getHours(), "_tempC")], weatherData["nextsixhours"]["".concat(nextSixHours[2].getHours(), "_tempC")], weatherData["nextsixhours"]["".concat(nextSixHours[3].getHours(), "_tempC")], weatherData["nextsixhours"]["".concat(nextSixHours[4].getHours(), "_tempC")], weatherData["nextsixhours"]["".concat(nextSixHours[5].getHours(), "_tempC")]],
    fahrenheit: [weatherData["nextsixhours"]["".concat(nextSixHours[0].getHours(), "_tempF")], weatherData["nextsixhours"]["".concat(nextSixHours[1].getHours(), "_tempF")], weatherData["nextsixhours"]["".concat(nextSixHours[2].getHours(), "_tempF")], weatherData["nextsixhours"]["".concat(nextSixHours[3].getHours(), "_tempF")], weatherData["nextsixhours"]["".concat(nextSixHours[4].getHours(), "_tempF")], weatherData["nextsixhours"]["".concat(nextSixHours[5].getHours(), "_tempF")]]
  };
  return resultObject;
}
function refreshWeatherCards(weatherData) {
  var _ref3 = [document.getElementById("1st-day-temp"), document.getElementById("1st-day-night-temp"), document.getElementById("1st-day-wind"), document.getElementById("1st-day-precipitation"), document.getElementById("1st-day-uv"), document.getElementById("2nd-day-temp"), document.getElementById("2nd-day-night-temp"), document.getElementById("2nd-day-wind"), document.getElementById("2nd-day-precipitation"), document.getElementById("2nd-day-uv"), document.getElementById("3rd-day-temp"), document.getElementById("3rd-day-night-temp"), document.getElementById("3rd-day-wind"), document.getElementById("3rd-day-precipitation"), document.getElementById("3rd-day-uv")],
    FIRST_DAY_TEMP = _ref3[0],
    FIRST_DAY_NIGHT_TEMP = _ref3[1],
    FIRST_DAY_WIND = _ref3[2],
    FIRST_DAY_PRECIPITATION = _ref3[3],
    FIRST_DAY_UV = _ref3[4],
    SECOND_DAY_TEMP = _ref3[5],
    SECOND_DAY_NIGHT_TEMP = _ref3[6],
    SECOND_DAY_WIND = _ref3[7],
    SECOND_DAY_PRECIPITATION = _ref3[8],
    SECOND_DAY_UV = _ref3[9],
    THIRD_DAY_TEMP = _ref3[10],
    THIRD_DAY_NIGHT_TEMP = _ref3[11],
    THIRD_DAY_WIND = _ref3[12],
    THIRD_DAY_PRECIPITATION = _ref3[13],
    THIDR_DAY_UV = _ref3[14];
  if (tempUnits === "celsius") {
    var _ref4 = ["".concat(weatherData["currentWeather"]["temperatureC"], "\xB0C"), "".concat(weatherData["currentWeather"]["nightTemperatureC"], "\xB0C"), "".concat(weatherData["currentWeather"]["windspeedKMH"], " km/h"), "".concat(weatherData["currentWeather"]["precipitation"], " mm"), weatherData["currentWeather"]["UV"], "".concat(weatherData["nextThreeDays"][1]["temp_c"], "\xB0C"), "".concat(weatherData["nextThreeDays"][1]["nighttemp_c"], "\xB0C"), "".concat(weatherData["nextThreeDays"][1]["maximumWindSpeedKPH"], " km/h"), "".concat(weatherData["nextThreeDays"][1]["precipitationInMm"], " mm"), weatherData["nextThreeDays"][1]["UVIndex"], "".concat(weatherData["nextThreeDays"][2]["temp_c"], "\xB0C"), "".concat(weatherData["nextThreeDays"][2]["nighttemp_c"], "\xB0C"), "".concat(weatherData["nextThreeDays"][2]["maximumWindSpeedKMH"], " km/h"), "".concat(weatherData["nextThreeDays"][2]["precipitationInMm"], " mm"), weatherData["nextThreeDays"][2]["UVIndex"]];
    FIRST_DAY_TEMP.textContent = _ref4[0];
    FIRST_DAY_NIGHT_TEMP.textContent = _ref4[1];
    FIRST_DAY_WIND.textContent = _ref4[2];
    FIRST_DAY_PRECIPITATION.textContent = _ref4[3];
    FIRST_DAY_UV.textContent = _ref4[4];
    SECOND_DAY_TEMP.textContent = _ref4[5];
    SECOND_DAY_NIGHT_TEMP.textContent = _ref4[6];
    SECOND_DAY_WIND.textContent = _ref4[7];
    SECOND_DAY_PRECIPITATION.textContent = _ref4[8];
    SECOND_DAY_UV.textContent = _ref4[9];
    THIRD_DAY_TEMP.textContent = _ref4[10];
    THIRD_DAY_NIGHT_TEMP.textContent = _ref4[11];
    THIRD_DAY_WIND.textContent = _ref4[12];
    THIRD_DAY_PRECIPITATION.textContent = _ref4[13];
    THIDR_DAY_UV.textContent = _ref4[14];
  } else {
    var _ref5 = ["".concat(weatherData["currentWeather"]["temperatureF"], "\xB0F"), "".concat(weatherData["currentWeather"]["nightTemperatureF"], "\xB0F"), "".concat(weatherData["currentWeather"]["windspeedMPH"], " mph"), "".concat(weatherData["currentWeather"]["precipitation"], " mm"), weatherData["currentWeather"]["UV"], "".concat(weatherData["nextThreeDays"][1]["temp_f"], "\xB0F"), "".concat(weatherData["nextThreeDays"][1]["nighttemp_f"], "\xB0F"), "".concat(weatherData["nextThreeDays"][1]["maximumWindSpeedMPH"], " mph"), "".concat(weatherData["nextThreeDays"][1]["precipitationInMm"], " mm"), weatherData["nextThreeDays"][1]["UVIndex"], "".concat(weatherData["nextThreeDays"][2]["temp_f"], "\xB0F"), "".concat(weatherData["nextThreeDays"][2]["nighttemp_f"], "\xB0f"), "".concat(weatherData["nextThreeDays"][2]["maximumWindSpeedMPH"], " mph"), "".concat(weatherData["nextThreeDays"][2]["precipitationInMm"], " mm"), weatherData["nextThreeDays"][2]["UVIndex"]];
    FIRST_DAY_TEMP.textContent = _ref5[0];
    FIRST_DAY_NIGHT_TEMP.textContent = _ref5[1];
    FIRST_DAY_WIND.textContent = _ref5[2];
    FIRST_DAY_PRECIPITATION.textContent = _ref5[3];
    FIRST_DAY_UV.textContent = _ref5[4];
    SECOND_DAY_TEMP.textContent = _ref5[5];
    SECOND_DAY_NIGHT_TEMP.textContent = _ref5[6];
    SECOND_DAY_WIND.textContent = _ref5[7];
    SECOND_DAY_PRECIPITATION.textContent = _ref5[8];
    SECOND_DAY_UV.textContent = _ref5[9];
    THIRD_DAY_TEMP.textContent = _ref5[10];
    THIRD_DAY_NIGHT_TEMP.textContent = _ref5[11];
    THIRD_DAY_WIND.textContent = _ref5[12];
    THIRD_DAY_PRECIPITATION.textContent = _ref5[13];
    THIDR_DAY_UV.textContent = _ref5[14];
  }
}
function loadForecastIcons(result) {
  var _ref6 = [document.getElementById("current-weather-icon"), document.getElementById("current-weather-card-icon"), document.getElementById("second-day-forecast-icon"), document.getElementById("third-day-forecast-icon")],
    FIRST_DAY_HEADING_FORECAST_ICON = _ref6[0],
    FIRST_DAY_CARD_FORECAST_ICON = _ref6[1],
    SECOND_DAY_FORECAST_ICON = _ref6[2],
    THIRD_DAY_FORECAST_ICON = _ref6[3];
  var _ref7 = ["".concat(result["current"]["condition"]["icon"]), "".concat(result["current"]["condition"]["icon"]), "".concat(result["forecast"]["forecastday"]["1"]["day"]["condition"]["icon"]), "".concat(result["forecast"]["forecastday"]["2"]["day"]["condition"]["icon"]),,];
  FIRST_DAY_HEADING_FORECAST_ICON.src = _ref7[0];
  FIRST_DAY_CARD_FORECAST_ICON.src = _ref7[1];
  SECOND_DAY_FORECAST_ICON.src = _ref7[2];
  THIRD_DAY_FORECAST_ICON.src = _ref7[3];
  console.log("".concat(result["current"]["condition"]["icon"]));
}
function refreshPage(weatherData, result) {
  var nextSixHoursArray = getNextSixHoursInDisplayForm();
  var tempeartureObject = getTodayTempObject(weatherData);
  var arrayObjectOfNextThreeDaysObj = getNextThreeDays();
  var tempUnitsymbol = tempUnits === "celsius" ? "C" : "F";
  var FIRST_HOUR = document.getElementById("1st-hour");
  var SECOND_HOUR = document.getElementById("2nd-hour");
  var THIRD_HOUR = document.getElementById("3rd-hour");
  var FOURTH_HOUR = document.getElementById("4th-hour");
  var FIFTH_HOUR = document.getElementById("5th-hour");
  FIRST_HOUR.textContent = nextSixHoursArray[0];
  SECOND_HOUR.textContent = nextSixHoursArray[1];
  THIRD_HOUR.textContent = nextSixHoursArray[2];
  FOURTH_HOUR.textContent = nextSixHoursArray[3];
  FIFTH_HOUR.textContent = nextSixHoursArray[4];
  var FIRST_HOUR_TEMP = document.getElementById("1st-hour-temp");
  var SECOND_HOUR_TEMP = document.getElementById("2nd-hour-temp");
  var THIRD_HOUR_TEMP = document.getElementById("3rd-hour-temp");
  var FOURTH_HOUR_TEMP = document.getElementById("4th-hour-temp");
  var FIFTH_HOUR_TEMP = document.getElementById("5th-hour-temp");
  var _ref8 = ["".concat(tempeartureObject[tempUnits][0], "\xB0").concat(tempUnitsymbol), "".concat(tempeartureObject[tempUnits][1], "\xB0").concat(tempUnitsymbol), "".concat(tempeartureObject[tempUnits][2], "\xB0").concat(tempUnitsymbol), "".concat(tempeartureObject[tempUnits][3], "\xB0").concat(tempUnitsymbol), "".concat(tempeartureObject[tempUnits][4], "\xB0").concat(tempUnitsymbol)];
  FIRST_HOUR_TEMP.textContent = _ref8[0];
  SECOND_HOUR_TEMP.textContent = _ref8[1];
  THIRD_HOUR_TEMP.textContent = _ref8[2];
  FOURTH_HOUR_TEMP.textContent = _ref8[3];
  FIFTH_HOUR_TEMP.textContent = _ref8[4];
  var _ref9 = [document.getElementById("today-day-temp"), document.getElementById("today-night-temp"), document.getElementById("today-precipitation"), document.getElementById("today-wind"), document.getElementById("today-uv"), document.getElementById("local-location"), document.getElementById("local-time"), document.getElementById("header-temp")],
    DAY_TEMP = _ref9[0],
    NIGHT_TEMP = _ref9[1],
    PERCEPITATION_TODAY = _ref9[2],
    WIND_TODAY = _ref9[3],
    UVINDEX_TODAY = _ref9[4],
    USER_LOCATION = _ref9[5],
    LOCAL_TIME = _ref9[6],
    HEADER_TEMP = _ref9[7];
  var minutes;
  var hours = new Date(Date.parse(locationCurrentTime)).getHours();
  if (new Date(Date.parse(locationCurrentTime)).getMinutes() < 10) {
    minutes = "0".concat(new Date(Date.parse(locationCurrentTime)).getMinutes());
  } else {
    minutes = "".concat(new Date(Date.parse(locationCurrentTime)).getMinutes());
  }
  var localTime = "".concat(hours, ":").concat(minutes);
  if (tempUnits === "celsius") {
    var _ref10 = ["".concat(weatherData["currentWeather"]["temperatureC"], "\xB0C"), "".concat(weatherData["currentWeather"]["nightTemperatureC"], "\xB0C"), "".concat(weatherData["currentWeather"]["nightTemperatureC"], "\xB0C")];
    DAY_TEMP.textContent = _ref10[0];
    NIGHT_TEMP.textContent = _ref10[1];
    HEADER_TEMP.textContent = _ref10[2];
  } else {
    var _ref11 = ["".concat(weatherData["currentWeather"]["temperatureF"], "\xB0F"), "".concat(weatherData["currentWeather"]["nightTemperatureF"], "\xB0F"), "".concat(weatherData["currentWeather"]["temperatureF"], "\xB0F")];
    DAY_TEMP.textContent = _ref11[0];
    NIGHT_TEMP.textContent = _ref11[1];
    HEADER_TEMP.textContent = _ref11[2];
  }
  var _ref12 = ["".concat(result["location"]["name"], ", ").concat(result["location"]["country"]), "".concat(localTime)];
  USER_LOCATION.textContent = _ref12[0];
  LOCAL_TIME.textContent = _ref12[1];
  var _ref13 = ["".concat(weatherData["currentWeather"]["precipitation"], "mm"), "".concat(weatherData["currentWeather"]["windspeedKMH"], "km/h"), weatherData["currentWeather"]["UV"]];
  PERCEPITATION_TODAY.textContent = _ref13[0];
  WIND_TODAY.textContent = _ref13[1];
  UVINDEX_TODAY.textContent = _ref13[2];
  var _ref14 = [document.getElementById("1st-day"), document.getElementById("2nd-day"), document.getElementById("3rd-day")],
    FIRSTDAY_HEADING = _ref14[0],
    SECOND_DAY_HEADING = _ref14[1],
    THIRD_DAY_HEADING = _ref14[2];
  var _ref15 = ["".concat(arrayObjectOfNextThreeDaysObj[0][0], ", ").concat(arrayObjectOfNextThreeDaysObj[0][1]), "".concat(arrayObjectOfNextThreeDaysObj[1][0], ", ").concat(arrayObjectOfNextThreeDaysObj[1][1]), "".concat(arrayObjectOfNextThreeDaysObj[2][0], ", ").concat(arrayObjectOfNextThreeDaysObj[2][1])];
  FIRSTDAY_HEADING.textContent = _ref15[0];
  SECOND_DAY_HEADING.textContent = _ref15[1];
  THIRD_DAY_HEADING.textContent = _ref15[2];
  refreshWeatherCards(weatherData);
  loadForecastIcons(result);
}
var BUTTON = document.getElementById("switch-degree-measurement-button");
BUTTON.addEventListener("click", function (event) {
  if (BUTTON.classList.contains("fahrenheit")) {
    BUTTON.textContent = "Switch to (C\xB0)";
    BUTTON.classList.remove("fahrenheit");
    tempUnits = "celsius";
  } else {
    BUTTON.textContent = "Switch to (F\xB0)";
    BUTTON.classList.add("fahrenheit");
    tempUnits = "fahrenheit";
  }
  refreshTemperature();
});
function refreshTemperature() {
  var WEATHER_DATA = JSON.parse(localStorage.getItem("weatherData"));
  console.log("weatherData:");
  console.log(WEATHER_DATA);
  var tempeartureObject = getTodayTempObject(WEATHER_DATA);
  console.log("temperature😭:object");
  console.log(tempeartureObject);
  var _ref16 = [document.getElementById("header-temp"), document.getElementById("today-day-temp"), document.getElementById("today-night-temp"), document.getElementById("today-wind"), document.getElementById("1st-hour-temp"), document.getElementById("2nd-hour-temp"), document.getElementById("3rd-hour-temp"), document.getElementById("4th-hour-temp"), document.getElementById("5th-hour-temp"), document.getElementById("1st-day-temp"), document.getElementById("1st-day-night-temp"), document.getElementById("1st-day-wind"), document.getElementById("2nd-day-temp"), document.getElementById("2nd-day-night-temp"), document.getElementById("2nd-day-wind"), document.getElementById("3rd-day-temp"), document.getElementById("3rd-day-night-temp"), document.getElementById("3rd-day-wind")],
    HEADER_TEMP = _ref16[0],
    TODAY_DAY_TEMP = _ref16[1],
    TODAY_NIGHT_TEMP = _ref16[2],
    TODAY_WIND = _ref16[3],
    FIRST_HOUR_TEMP = _ref16[4],
    SECOND_HOUR_TEMP = _ref16[5],
    THIRD_HOUR_TEMP = _ref16[6],
    FOURTH_HOUR_TEMP = _ref16[7],
    FIFTH_HOUR_TEMP = _ref16[8],
    FIRST_DAY_TEMP = _ref16[9],
    FIRST_DAY_NIGHT_TEMP = _ref16[10],
    FIRST_DAY_WIND = _ref16[11],
    SECOND_DAY_TEMP = _ref16[12],
    SECOND_DAY_NIGHT_TEMP = _ref16[13],
    SECOND_DAY_WIND = _ref16[14],
    THIRD_DAY_TEMP = _ref16[15],
    THIRD_DAY_NIGHT_TEMP = _ref16[16],
    THIRD_DAY_WIND = _ref16[17];
  if (tempUnits === "celsius") {
    var _ref17 = ["".concat(WEATHER_DATA["currentWeather"]["temperatureC"], "\xB0C"), "".concat(WEATHER_DATA["currentWeather"]["temperatureC"], "\xB0C"), "".concat(WEATHER_DATA["nextThreeDays"][1]["nighttemp_c"], "\xB0C"), "".concat(WEATHER_DATA["currentWeather"]["windspeedKMH"], " km/h"), "".concat(tempeartureObject["celsius"][0], "\xB0C"), "".concat(tempeartureObject["celsius"][1], "\xB0C"), "".concat(tempeartureObject["celsius"][2], "\xB0C"), "".concat(tempeartureObject["celsius"][3], "\xB0C"), "".concat(tempeartureObject["celsius"][4], "\xB0C"), "".concat(WEATHER_DATA["currentWeather"]["temperatureC"], "\xB0C"), "".concat(WEATHER_DATA["currentWeather"]["nightTemperatureC"], "\xB0C"), "".concat(WEATHER_DATA["currentWeather"]["windspeedKMH"], " km/h"), "".concat(WEATHER_DATA["nextThreeDays"][1]["temp_c"], "\xB0C"), "".concat(WEATHER_DATA["nextThreeDays"][1]["nighttemp_c"], "\xB0C"), "".concat(WEATHER_DATA["nextThreeDays"][1]["maximumWindSpeedKPH"], " km/h"), "".concat(WEATHER_DATA["nextThreeDays"][2]["temp_c"], "\xB0C"), "".concat(WEATHER_DATA["nextThreeDays"][2]["nighttemp_c"], "\xB0C"), "".concat(WEATHER_DATA["nextThreeDays"][2]["maximumWindSpeedKMH"], " km/h")];
    HEADER_TEMP.textContent = _ref17[0];
    TODAY_DAY_TEMP.textContent = _ref17[1];
    TODAY_NIGHT_TEMP.textContent = _ref17[2];
    TODAY_WIND.textContent = _ref17[3];
    FIRST_HOUR_TEMP.textContent = _ref17[4];
    SECOND_HOUR_TEMP.textContent = _ref17[5];
    THIRD_HOUR_TEMP.textContent = _ref17[6];
    FOURTH_HOUR_TEMP.textContent = _ref17[7];
    FIFTH_HOUR_TEMP.textContent = _ref17[8];
    FIRST_DAY_TEMP.textContent = _ref17[9];
    FIRST_DAY_NIGHT_TEMP.textContent = _ref17[10];
    FIRST_DAY_WIND.textContent = _ref17[11];
    SECOND_DAY_TEMP.textContent = _ref17[12];
    SECOND_DAY_NIGHT_TEMP.textContent = _ref17[13];
    SECOND_DAY_WIND.textContent = _ref17[14];
    THIRD_DAY_TEMP.textContent = _ref17[15];
    THIRD_DAY_NIGHT_TEMP.textContent = _ref17[16];
    THIRD_DAY_WIND.textContent = _ref17[17];
  } else {
    var _ref18 = ["".concat(WEATHER_DATA["currentWeather"]["temperatureF"], "\xB0F"), "".concat(WEATHER_DATA["currentWeather"]["temperatureF"], "\xB0F"), "".concat(WEATHER_DATA["nextThreeDays"][1]["nighttemp_f"], "\xB0F"), "".concat(WEATHER_DATA["currentWeather"]["windspeedMPH"], " mph"), "".concat(tempeartureObject["fahrenheit"][0], "\xB0F"), "".concat(tempeartureObject["fahrenheit"][1], "\xB0F"), "".concat(tempeartureObject["fahrenheit"][2], "\xB0F"), "".concat(tempeartureObject["fahrenheit"][3], "\xB0F"), "".concat(tempeartureObject["fahrenheit"][4], "\xB0F"), "".concat(WEATHER_DATA["currentWeather"]["temperatureF"], "\xB0F"), "".concat(WEATHER_DATA["currentWeather"]["nightTemperatureF"], "\xB0F"), "".concat(WEATHER_DATA["currentWeather"]["windspeedMPH"], " mph"), "".concat(WEATHER_DATA["nextThreeDays"][1]["temp_f"], "\xB0F"), "".concat(WEATHER_DATA["nextThreeDays"][1]["nighttemp_f"], "\xB0F"), "".concat(WEATHER_DATA["nextThreeDays"][1]["maximumWindSpeedMPH"], " mph"), "".concat(WEATHER_DATA["nextThreeDays"][2]["temp_f"], "\xB0F"), "".concat(WEATHER_DATA["nextThreeDays"][2]["nighttemp_f"], "\xB0F"), "".concat(WEATHER_DATA["nextThreeDays"][2]["maximumWindSpeedMPH"], " mph")];
    HEADER_TEMP.textContent = _ref18[0];
    TODAY_DAY_TEMP.textContent = _ref18[1];
    TODAY_NIGHT_TEMP.textContent = _ref18[2];
    TODAY_WIND.textContent = _ref18[3];
    FIRST_HOUR_TEMP.textContent = _ref18[4];
    SECOND_HOUR_TEMP.textContent = _ref18[5];
    THIRD_HOUR_TEMP.textContent = _ref18[6];
    FOURTH_HOUR_TEMP.textContent = _ref18[7];
    FIFTH_HOUR_TEMP.textContent = _ref18[8];
    FIRST_DAY_TEMP.textContent = _ref18[9];
    FIRST_DAY_NIGHT_TEMP.textContent = _ref18[10];
    FIRST_DAY_WIND.textContent = _ref18[11];
    SECOND_DAY_TEMP.textContent = _ref18[12];
    SECOND_DAY_NIGHT_TEMP.textContent = _ref18[13];
    SECOND_DAY_WIND.textContent = _ref18[14];
    THIRD_DAY_TEMP.textContent = _ref18[15];
    THIRD_DAY_NIGHT_TEMP.textContent = _ref18[16];
    THIRD_DAY_WIND.textContent = _ref18[17];
  }
}
getCurrentWeather("Warsaw").then(function (result) {
  _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
    var weatherData;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          locationCurrentTime = result["location"]["localtime"];
          _context2.next = 3;
          return createCurrentWeatherDataObject(result);
        case 3:
          weatherData = _context2.sent;
          _context2.t0 = refreshPage;
          _context2.next = 7;
          return weatherData;
        case 7:
          _context2.t1 = _context2.sent;
          _context2.t2 = result;
          (0, _context2.t0)(_context2.t1, _context2.t2);
          localStorage.setItem("weatherData", JSON.stringify(weatherData));
        case 11:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }))();
});
getTimeInTwelveHourFormat();
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map