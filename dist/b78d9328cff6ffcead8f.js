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
import cloudIcon from "../assets/clouds.svg";
import moonIcon from "../assets/moon.svg";
import precipitationIcon from "../assets/precipitation.svg";
import sunIcon from "../assets/sun.svg";
import windIcon from "../assets/wind.svg";
import githubLogo from "../assets/github-mark-white.svg";
import gradient from "../assets/mesh-gradient.png";
import { add } from "date-fns";
import "./style.css";
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
      var nextHour = add(locationCurrentTime, {
        hours: 1
      });
      array.push(nextHour);
      lastPushedTime = nextHour;
    } else {
      var _nextHour = add(lastPushedTime, {
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
  var _ref6 = ["".concat(tempeartureObject[tempUnits][0], "\xB0").concat(tempUnitsymbol), "".concat(tempeartureObject[tempUnits][1], "\xB0").concat(tempUnitsymbol), "".concat(tempeartureObject[tempUnits][2], "\xB0").concat(tempUnitsymbol), "".concat(tempeartureObject[tempUnits][3], "\xB0").concat(tempUnitsymbol), "".concat(tempeartureObject[tempUnits][4], "\xB0").concat(tempUnitsymbol)];
  FIRST_HOUR_TEMP.textContent = _ref6[0];
  SECOND_HOUR_TEMP.textContent = _ref6[1];
  THIRD_HOUR_TEMP.textContent = _ref6[2];
  FOURTH_HOUR_TEMP.textContent = _ref6[3];
  FIFTH_HOUR_TEMP.textContent = _ref6[4];
  var _ref7 = [document.getElementById("today-day-temp"), document.getElementById("today-night-temp"), document.getElementById("today-precipitation"), document.getElementById("today-wind"), document.getElementById("today-uv"), document.getElementById("local-location"), document.getElementById("local-time"), document.getElementById("header-temp")],
    DAY_TEMP = _ref7[0],
    NIGHT_TEMP = _ref7[1],
    PERCEPITATION_TODAY = _ref7[2],
    WIND_TODAY = _ref7[3],
    UVINDEX_TODAY = _ref7[4],
    USER_LOCATION = _ref7[5],
    LOCAL_TIME = _ref7[6],
    HEADER_TEMP = _ref7[7];
  var minutes;
  var hours = new Date(Date.parse(locationCurrentTime)).getHours();
  if (new Date(Date.parse(locationCurrentTime)).getMinutes() < 10) {
    minutes = "0".concat(new Date(Date.parse(locationCurrentTime)).getMinutes());
  } else {
    minutes = "".concat(new Date(Date.parse(locationCurrentTime)).getMinutes());
  }
  var localTime = "".concat(hours, ":").concat(minutes);
  if (tempUnits === "celsius") {
    var _ref8 = ["".concat(weatherData["currentWeather"]["temperatureC"], "\xB0C"), "".concat(weatherData["currentWeather"]["nightTemperatureC"], "\xB0C"), "".concat(weatherData["currentWeather"]["nightTemperatureC"], "\xB0C")];
    DAY_TEMP.textContent = _ref8[0];
    NIGHT_TEMP.textContent = _ref8[1];
    HEADER_TEMP.textContent = _ref8[2];
  } else {
    var _ref9 = ["".concat(weatherData["currentWeather"]["temperatureF"], "\xB0F"), "".concat(weatherData["currentWeather"]["nightTemperatureF"], "\xB0F"), "".concat(weatherData["currentWeather"]["temperatureF"], "\xB0F")];
    DAY_TEMP.textContent = _ref9[0];
    NIGHT_TEMP.textContent = _ref9[1];
    HEADER_TEMP.textContent = _ref9[2];
  }
  var _ref10 = ["".concat(result["location"]["name"], ", ").concat(result["location"]["country"]), "".concat(localTime)];
  USER_LOCATION.textContent = _ref10[0];
  LOCAL_TIME.textContent = _ref10[1];
  var _ref11 = ["".concat(weatherData["currentWeather"]["precipitation"], "mm"), "".concat(weatherData["currentWeather"]["windspeedKMH"], "km/h"), weatherData["currentWeather"]["UV"]];
  PERCEPITATION_TODAY.textContent = _ref11[0];
  WIND_TODAY.textContent = _ref11[1];
  UVINDEX_TODAY.textContent = _ref11[2];
  var _ref12 = [document.getElementById("1st-day"), document.getElementById("2nd-day"), document.getElementById("3rd-day")],
    FIRSTDAY_HEADING = _ref12[0],
    SECOND_DAY_HEADING = _ref12[1],
    THIRD_DAY_HEADING = _ref12[2];
  var _ref13 = ["".concat(arrayObjectOfNextThreeDaysObj[0][0], ", ").concat(arrayObjectOfNextThreeDaysObj[0][1]), "".concat(arrayObjectOfNextThreeDaysObj[1][0], ", ").concat(arrayObjectOfNextThreeDaysObj[1][1]), "".concat(arrayObjectOfNextThreeDaysObj[2][0], ", ").concat(arrayObjectOfNextThreeDaysObj[2][1])];
  FIRSTDAY_HEADING.textContent = _ref13[0];
  SECOND_DAY_HEADING.textContent = _ref13[1];
  THIRD_DAY_HEADING.textContent = _ref13[2];
  refreshWeatherCards(weatherData);
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
  var _ref14 = [document.getElementById("header-temp"), document.getElementById("today-day-temp"), document.getElementById("today-night-temp"), document.getElementById("today-wind"), document.getElementById("1st-hour-temp"), document.getElementById("2nd-hour-temp"), document.getElementById("3rd-hour-temp"), document.getElementById("4th-hour-temp"), document.getElementById("5th-hour-temp"), document.getElementById("1st-day-temp"), document.getElementById("1st-day-night-temp"), document.getElementById("1st-day-wind"), document.getElementById("2nd-day-temp"), document.getElementById("2nd-day-night-temp"), document.getElementById("2nd-day-wind"), document.getElementById("3rd-day-temp"), document.getElementById("3rd-day-night-temp"), document.getElementById("3rd-day-wind")],
    HEADER_TEMP = _ref14[0],
    TODAY_DAY_TEMP = _ref14[1],
    TODAY_NIGHT_TEMP = _ref14[2],
    TODAY_WIND = _ref14[3],
    FIRST_HOUR_TEMP = _ref14[4],
    SECOND_HOUR_TEMP = _ref14[5],
    THIRD_HOUR_TEMP = _ref14[6],
    FOURTH_HOUR_TEMP = _ref14[7],
    FIFTH_HOUR_TEMP = _ref14[8],
    FIRST_DAY_TEMP = _ref14[9],
    FIRST_DAY_NIGHT_TEMP = _ref14[10],
    FIRST_DAY_WIND = _ref14[11],
    SECOND_DAY_TEMP = _ref14[12],
    SECOND_DAY_NIGHT_TEMP = _ref14[13],
    SECOND_DAY_WIND = _ref14[14],
    THIRD_DAY_TEMP = _ref14[15],
    THIRD_DAY_NIGHT_TEMP = _ref14[16],
    THIRD_DAY_WIND = _ref14[17];
  if (tempUnits === "celsius") {
    var _ref15 = ["".concat(WEATHER_DATA["currentWeather"]["temperatureC"], "\xB0C"), "".concat(WEATHER_DATA["currentWeather"]["temperatureC"], "\xB0C"), "".concat(WEATHER_DATA["nextThreeDays"][1]["nighttemp_c"], "\xB0C"), "".concat(WEATHER_DATA["currentWeather"]["windspeedKMH"], " km/h"), "".concat(tempeartureObject["celsius"][0], "\xB0C"), "".concat(tempeartureObject["celsius"][1], "\xB0C"), "".concat(tempeartureObject["celsius"][2], "\xB0C"), "".concat(tempeartureObject["celsius"][3], "\xB0C"), "".concat(tempeartureObject["celsius"][4], "\xB0C"), "".concat(WEATHER_DATA["currentWeather"]["temperatureC"], "\xB0C"), "".concat(WEATHER_DATA["currentWeather"]["nightTemperatureC"], "\xB0C"), "".concat(WEATHER_DATA["currentWeather"]["windspeedKMH"], " km/h"), "".concat(WEATHER_DATA["nextThreeDays"][1]["temp_c"], "\xB0C"), "".concat(WEATHER_DATA["nextThreeDays"][1]["nighttemp_c"], "\xB0C"), "".concat(WEATHER_DATA["nextThreeDays"][1]["maximumWindSpeedKPH"], " km/h"), "".concat(WEATHER_DATA["nextThreeDays"][2]["temp_c"], "\xB0C"), "".concat(WEATHER_DATA["nextThreeDays"][2]["nighttemp_c"], "\xB0C"), "".concat(WEATHER_DATA["nextThreeDays"][2]["maximumWindSpeedKMH"], " km/h")];
    HEADER_TEMP.textContent = _ref15[0];
    TODAY_DAY_TEMP.textContent = _ref15[1];
    TODAY_NIGHT_TEMP.textContent = _ref15[2];
    TODAY_WIND.textContent = _ref15[3];
    FIRST_HOUR_TEMP.textContent = _ref15[4];
    SECOND_HOUR_TEMP.textContent = _ref15[5];
    THIRD_HOUR_TEMP.textContent = _ref15[6];
    FOURTH_HOUR_TEMP.textContent = _ref15[7];
    FIFTH_HOUR_TEMP.textContent = _ref15[8];
    FIRST_DAY_TEMP.textContent = _ref15[9];
    FIRST_DAY_NIGHT_TEMP.textContent = _ref15[10];
    FIRST_DAY_WIND.textContent = _ref15[11];
    SECOND_DAY_TEMP.textContent = _ref15[12];
    SECOND_DAY_NIGHT_TEMP.textContent = _ref15[13];
    SECOND_DAY_WIND.textContent = _ref15[14];
    THIRD_DAY_TEMP.textContent = _ref15[15];
    THIRD_DAY_NIGHT_TEMP.textContent = _ref15[16];
    THIRD_DAY_WIND.textContent = _ref15[17];
  } else {
    var _ref16 = ["".concat(WEATHER_DATA["currentWeather"]["temperatureF"], "\xB0F"), "".concat(WEATHER_DATA["currentWeather"]["temperatureF"], "\xB0F"), "".concat(WEATHER_DATA["nextThreeDays"][1]["nighttemp_f"], "\xB0F"), "".concat(WEATHER_DATA["currentWeather"]["windspeedMPH"], " mph"), "".concat(tempeartureObject["fahrenheit"][0], "\xB0F"), "".concat(tempeartureObject["fahrenheit"][1], "\xB0F"), "".concat(tempeartureObject["fahrenheit"][2], "\xB0F"), "".concat(tempeartureObject["fahrenheit"][3], "\xB0F"), "".concat(tempeartureObject["fahrenheit"][4], "\xB0F"), "".concat(WEATHER_DATA["currentWeather"]["temperatureF"], "\xB0F"), "".concat(WEATHER_DATA["currentWeather"]["nightTemperatureF"], "\xB0F"), "".concat(WEATHER_DATA["currentWeather"]["windspeedMPH"], " mph"), "".concat(WEATHER_DATA["nextThreeDays"][1]["temp_f"], "\xB0F"), "".concat(WEATHER_DATA["nextThreeDays"][1]["nighttemp_f"], "\xB0F"), "".concat(WEATHER_DATA["nextThreeDays"][1]["maximumWindSpeedMPH"], " mph"), "".concat(WEATHER_DATA["nextThreeDays"][2]["temp_f"], "\xB0F"), "".concat(WEATHER_DATA["nextThreeDays"][2]["nighttemp_f"], "\xB0F"), "".concat(WEATHER_DATA["nextThreeDays"][2]["maximumWindSpeedMPH"], " mph")];
    HEADER_TEMP.textContent = _ref16[0];
    TODAY_DAY_TEMP.textContent = _ref16[1];
    TODAY_NIGHT_TEMP.textContent = _ref16[2];
    TODAY_WIND.textContent = _ref16[3];
    FIRST_HOUR_TEMP.textContent = _ref16[4];
    SECOND_HOUR_TEMP.textContent = _ref16[5];
    THIRD_HOUR_TEMP.textContent = _ref16[6];
    FOURTH_HOUR_TEMP.textContent = _ref16[7];
    FIFTH_HOUR_TEMP.textContent = _ref16[8];
    FIRST_DAY_TEMP.textContent = _ref16[9];
    FIRST_DAY_NIGHT_TEMP.textContent = _ref16[10];
    FIRST_DAY_WIND.textContent = _ref16[11];
    SECOND_DAY_TEMP.textContent = _ref16[12];
    SECOND_DAY_NIGHT_TEMP.textContent = _ref16[13];
    SECOND_DAY_WIND.textContent = _ref16[14];
    THIRD_DAY_TEMP.textContent = _ref16[15];
    THIRD_DAY_NIGHT_TEMP.textContent = _ref16[16];
    THIRD_DAY_WIND.textContent = _ref16[17];
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