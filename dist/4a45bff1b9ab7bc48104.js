/*! For license information please see 4a45bff1b9ab7bc48104.js.LICENSE.txt */
function _typeof(t){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},_typeof(t)}function _defineProperty(t,e,r){return(e=_toPropertyKey(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function _toPropertyKey(t){var e=_toPrimitive(t,"string");return"symbol"==_typeof(e)?e:String(e)}function _toPrimitive(t,e){if("object"!=_typeof(t)||!t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,e||"default");if("object"!=_typeof(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}function _regeneratorRuntime(){"use strict";_regeneratorRuntime=function(){return e};var t,e={},r=Object.prototype,n=r.hasOwnProperty,o=Object.defineProperty||function(t,e,r){t[e]=r.value},a="function"==typeof Symbol?Symbol:{},c=a.iterator||"@@iterator",i=a.asyncIterator||"@@asyncIterator",f=a.toStringTag||"@@toStringTag";function u(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(t){u=function(t,e,r){return t[e]=r}}function s(t,e,r,n){var a=e&&e.prototype instanceof v?e:v,c=Object.create(a.prototype),i=new I(n||[]);return o(c,"_invoke",{value:O(t,r,i)}),c}function p(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}e.wrap=s;var y="suspendedStart",h="suspendedYield",m="executing",l="completed",d={};function v(){}function _(){}function g(){}var w={};u(w,c,(function(){return this}));var b=Object.getPrototypeOf,x=b&&b(b(C([])));x&&x!==r&&n.call(x,c)&&(w=x);var L=g.prototype=v.prototype=Object.create(w);function E(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function P(t,e){function r(o,a,c,i){var f=p(t[o],t,a);if("throw"!==f.type){var u=f.arg,s=u.value;return s&&"object"==_typeof(s)&&n.call(s,"__await")?e.resolve(s.__await).then((function(t){r("next",t,c,i)}),(function(t){r("throw",t,c,i)})):e.resolve(s).then((function(t){u.value=t,c(u)}),(function(t){return r("throw",t,c,i)}))}i(f.arg)}var a;o(this,"_invoke",{value:function(t,n){function o(){return new e((function(e,o){r(t,n,e,o)}))}return a=a?a.then(o,o):o()}})}function O(e,r,n){var o=y;return function(a,c){if(o===m)throw new Error("Generator is already running");if(o===l){if("throw"===a)throw c;return{value:t,done:!0}}for(n.method=a,n.arg=c;;){var i=n.delegate;if(i){var f=T(i,n);if(f){if(f===d)continue;return f}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===y)throw o=l,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=m;var u=p(e,r,n);if("normal"===u.type){if(o=n.done?l:h,u.arg===d)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(o=l,n.method="throw",n.arg=u.arg)}}}function T(e,r){var n=r.method,o=e.iterator[n];if(o===t)return r.delegate=null,"throw"===n&&e.iterator.return&&(r.method="return",r.arg=t,T(e,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),d;var a=p(o,e.iterator,r.arg);if("throw"===a.type)return r.method="throw",r.arg=a.arg,r.delegate=null,d;var c=a.arg;return c?c.done?(r[e.resultName]=c.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,d):c:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,d)}function j(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function S(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function I(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(j,this),this.reset(!0)}function C(e){if(e||""===e){var r=e[c];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,a=function r(){for(;++o<e.length;)if(n.call(e,o))return r.value=e[o],r.done=!1,r;return r.value=t,r.done=!0,r};return a.next=a}}throw new TypeError(_typeof(e)+" is not iterable")}return _.prototype=g,o(L,"constructor",{value:g,configurable:!0}),o(g,"constructor",{value:_,configurable:!0}),_.displayName=u(g,f,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===_||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,u(t,f,"GeneratorFunction")),t.prototype=Object.create(L),t},e.awrap=function(t){return{__await:t}},E(P.prototype),u(P.prototype,i,(function(){return this})),e.AsyncIterator=P,e.async=function(t,r,n,o,a){void 0===a&&(a=Promise);var c=new P(s(t,r,n,o),a);return e.isGeneratorFunction(r)?c:c.next().then((function(t){return t.done?t.value:c.next()}))},E(L),u(L,f,"Generator"),u(L,c,(function(){return this})),u(L,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},e.values=C,I.prototype={constructor:I,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(S),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function o(n,o){return i.type="throw",i.arg=e,r.next=n,o&&(r.method="next",r.arg=t),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var c=this.tryEntries[a],i=c.completion;if("root"===c.tryLoc)return o("end");if(c.tryLoc<=this.prev){var f=n.call(c,"catchLoc"),u=n.call(c,"finallyLoc");if(f&&u){if(this.prev<c.catchLoc)return o(c.catchLoc,!0);if(this.prev<c.finallyLoc)return o(c.finallyLoc)}else if(f){if(this.prev<c.catchLoc)return o(c.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<c.finallyLoc)return o(c.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var c=a?a.completion:{};return c.type=t,c.arg=e,a?(this.method="next",this.next=a.finallyLoc,d):this.complete(c)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),d},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),S(r),d}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;S(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:C(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),d}},e}function asyncGeneratorStep(t,e,r,n,o,a,c){try{var i=t[a](c),f=i.value}catch(t){return void r(t)}i.done?e(f):Promise.resolve(f).then(n,o)}function _asyncToGenerator(t){return function(){var e=this,r=arguments;return new Promise((function(n,o){var a=t.apply(e,r);function c(t){asyncGeneratorStep(a,n,o,c,i,"next",t)}function i(t){asyncGeneratorStep(a,n,o,c,i,"throw",t)}c(void 0)}))}}import cloudIcon from"../assets/clouds.svg";import moonIcon from"../assets/moon.svg";import precipitationIcon from"../assets/precipitation.svg";import sunIcon from"../assets/sun.svg";import windIcon from"../assets/wind.svg";import"./style.css";var LOCATIONTEXTFIELD=document.getElementById("location-input"),KEY="ffd39e8293c94f3c8fe195415232612";function getHours(){var t=(new Date).getHours();return console.log(t),t}function mapHoursToArray(t){for(var e=[],r=t+1;r<=t+7;r++)r<=24?e.push(r):r>24&&e.push(r-24);return console.log(e),e}function getTimeInTwelveHourFormat(){var t=(new Date).toLocaleString("en-US",{hour:"numeric",minute:"numeric",hour12:!0});return console.log(t),t}function getCurrentWeather(t){return _getCurrentWeather.apply(this,arguments)}function _getCurrentWeather(){return(_getCurrentWeather=_asyncToGenerator(_regeneratorRuntime().mark((function t(e){var r,n;return _regeneratorRuntime().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("https://api.weatherapi.com/v1/forecast.json?key=".concat(KEY,"&q=").concat(e,"&days=4"));case 3:return r=t.sent,t.next=6,r.json();case 6:return n=t.sent,console.log(n),t.abrupt("return",n);case 11:t.prev=11,t.t0=t.catch(0),console.log(t.t0);case 14:case"end":return t.stop()}}),t,null,[[0,11]])})))).apply(this,arguments)}function createCurrentWeatherDataObject(t){return _createCurrentWeatherDataObject.apply(this,arguments)}function _createCurrentWeatherDataObject(){return(_createCurrentWeatherDataObject=_asyncToGenerator(_regeneratorRuntime().mark((function t(e){var r,n,o;return _regeneratorRuntime().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=mapHoursToArray(getHours()),c,o={currentWeather:{temperatureC:e.current.temp_c,temperatureF:e.current.temp_f,windspeeed:e.current.wind_kph,nightTemperature:e.forecast.forecastday[0].day.mintemp_c,precipitation:e.current.precip_mm},nextsixhours:(r={},_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(r,"".concat(n[0],"_tempC"),e.forecast.forecastday[0].hour[n[0]].temp_c),"".concat(n[0],"_tempF"),e.forecast.forecastday[0].hour[n[0]].temp_f),"".concat(n[1],"_tempC"),e.forecast.forecastday[0].hour[n[1]].temp_c),"".concat(n[1],"_tempF"),e.forecast.forecastday[0].hour[n[1]].temp_f),"".concat(n[2],"_tempC"),e.forecast.forecastday[0].hour[n[2]].temp_c),"".concat(n[2],"_tempF"),e.forecast.forecastday[0].hour[n[2]].temp_f),"".concat(n[3],"_tempC"),e.forecast.forecastday[0].hour[n[3]].temp_c),"".concat(n[3],"_tempF"),e.forecast.forecastday[0].hour[n[3]].temp_f),"".concat(n[4],"_tempC"),e.forecast.forecastday[0].hour[n[4]].temp_c),"".concat(n[4],"_tempF"),e.forecast.forecastday[0].hour[n[4]].temp_f),_defineProperty(_defineProperty(_defineProperty(_defineProperty(r,"".concat(n[5],"_tempC"),e.forecast.forecastday[0].hour[n[5]].temp_c),"".concat(n[5],"_tempF"),e.forecast.forecastday[0].hour[n[5]].temp_f),"".concat(n[6],"_tempC"),e.forecast.forecastday[0].hour[n[6]].temp_c),"".concat(n[6],"_tempF"),e.forecast.forecastday[0].hour[n[6]].temp_f)),nextThreeDays:{1:{temp_c:e.forecast.forecastday[1].day.avgtemp_c,temp_f:e.forecast.forecastday[1].day.avgtemp_f,nighttemp_c:e.forecast.forecastday[1].day.mintemp_c,nighttemp_f:e.forecast.forecastday[1].day.mintemp_f,maximumWindSpeed:e.forecast.forecastday[1].day.maxwind_kph,precipitationInMm:e.forecast.forecastday[1].day.totalprecip_mm,UVIndex:e.forecast.forecastday[1].day.uv},2:{temp_c:e.forecast.forecastday[2].day.avgtemp_c,temp_f:e.forecast.forecastday[2].day.avgtemp_f,nighttemp_c:e.forecast.forecastday[2].day.mintemp_c,nighttemp_f:e.forecast.forecastday[2].day.mintemp_f,maximumWindSpeed:e.forecast.forecastday[2].day.maxwind_kph,precipitationInMm:e.forecast.forecastday[2].day.totalprecip_mm,UVIndex:e.forecast.forecastday[2].day.uv},3:{temp_c:e.forecast.forecastday[3].day.avgtemp_c,temp_f:e.forecast.forecastday[3].day.avgtemp_f,nighttemp_c:e.forecast.forecastday[3].day.mintemp_c,nighttemp_f:e.forecast.forecastday[3].day.mintemp_f,maximumWindSpeed:e.forecast.forecastday[3].day.maxwind_kph,precipitationInMm:e.forecast.forecastday[3].day.totalprecip_mm,UVIndex:e.forecast.forecastday[3].day.uv}}},console.log(o),t.abrupt("return",o);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}LOCATIONTEXTFIELD.addEventListener("keydown",(function(t){t.key})),getTimeInTwelveHourFormat(),getCurrentWeather("Warsaw").then((function(t){createCurrentWeatherDataObject(t)}));