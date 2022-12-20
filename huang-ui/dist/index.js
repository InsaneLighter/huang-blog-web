import { h, render, defineComponent, ref, inject, resolveComponent, withDirectives, openBlock, createElementBlock, createVNode, normalizeClass, unref, Transition, withCtx, createTextVNode, toDisplayString, createCommentVNode, nextTick, useCssVars, computed, watch, onMounted, createElementVNode, withKeys, onUnmounted, renderSlot, normalizeStyle, Fragment, renderList, pushScopeId, popScopeId, createBlock, reactive, useSlots, toRef, provide } from "vue";
import { ElButton, ClickOutside, ElPopover, ElScrollbar, ElImage, ElPagination } from "element-plus";
import { ElAvatar as I, ElButton as N, ElCarousel as V, ElImage as A, ElInput as O, ElPagination as L, ElPopover as F, ElScrollbar as z } from "element-plus";
function isArray(e) {
  return typeof Array.isArray == "function" ? Array.isArray(e) : Object.prototype.toString.call(e) === "[object Array]";
}
function isObject$2(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
function isNumber(e) {
  return !isNaN(Number(e));
}
function isFunction$2(e) {
  return typeof e == "function";
}
function isString(e) {
  return typeof e == "string";
}
function isBoolean(e) {
  return typeof e == "boolean";
}
function isEmpty(e) {
  return isArray(e) ? e.length === 0 : isObject$2(e) ? Object.keys(e).length === 0 : e === "" || e === void 0 || e === null;
}
const isNull = (e, t) => isEmpty(e) ? t : e;
function cloneDeep(e) {
  if (!e || typeof e != "object")
    return e;
  if (e.constructor === Date)
    return new Date(e);
  if (e.constructor === RegExp)
    return new RegExp(e);
  const t = Array.isArray(e) ? [] : {};
  for (let o in e)
    e.hasOwnProperty(o) && (typeof e[o] == "object" ? t[o] = cloneDeep(e[o]) : t[o] = e[o]);
  return t;
}
function deepTree(e, { parentId: t = "parentId", children: o = "children" }) {
  e = cloneDeep(e);
  const n = [], r = {};
  return e.forEach((i) => r[i.id] = i), e.forEach((i) => {
    const p = r[i[t]];
    p ? (p[o] || (p[o] = [])).push(i) : n.push(i);
  }), n;
}
function revDeepTree(e = [], { parentId: t = "parentId", children: o = "children" }) {
  const n = [], r = (i, p) => {
    i.forEach((l) => {
      l.id || (l.id = p++), l[t] = p, n.push(l), l[o] && isArray(l[o]) && r(l[o], l.id);
    });
  };
  return r(e || [], null), n;
}
const flattenDeep = (e, t = 1 / 0) => e.flat(t), withInstall = (e, t) => {
  if (e.install = (o) => {
    for (const n of [e, ...Object.values(t != null ? t : {})])
      o.component(n.name, n);
  }, t)
    for (const [o, n] of Object.entries(t))
      e[o] = n;
  return e;
};
function useBrowser() {
  const { clientWidth: e } = document.documentElement, t = navigator.userAgent.toLowerCase();
  let o = (t.match(/firefox|chrome|safari|opera/g) || "other")[0];
  (t.match(/msie|trident/g) || [])[0] && (o = "msie");
  let n = "";
  "ontouchstart" in window || t.indexOf("touch") !== -1 || t.indexOf("mobile") !== -1 ? t.indexOf("ipad") !== -1 ? n = "pad" : t.indexOf("mobile") !== -1 ? n = "mobile" : t.indexOf("android") !== -1 ? n = "androidPad" : n = "pc" : n = "pc";
  let i = "";
  switch (o) {
    case "chrome":
    case "safari":
    case "mobile":
      i = "webkit";
      break;
    case "msie":
      i = "ms";
      break;
    case "firefox":
      i = "Moz";
      break;
    case "opera":
      i = "O";
      break;
    default:
      i = "webkit";
      break;
  }
  const p = t.indexOf("android") > 0 ? "android" : navigator.platform.toLowerCase();
  let l = "full";
  e < 768 ? l = "xs" : e < 992 ? l = "sm" : e < 1200 ? l = "md" : e < 1920 ? l = "xl" : l = "full";
  const a = !!navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), c = (t.match(/[\s\S]+(?:rv|it|ra|ie)[\/: ]([\d.]+)/) || [])[1], u = n === "pc", m = !u, s = l === "xs" || m, d = window.innerHeight + "px";
  return {
    version: c,
    type: o,
    plat: p,
    tag: n,
    prefix: i,
    isMobile: m,
    isIOS: a,
    isPC: u,
    isMini: s,
    screen: l,
    innerHeight: d
  };
}
function createGlobalNode(e, t) {
  const o = h(e, t), n = document.createElement("div");
  return document.body.append(n), render(o, n), { vnode: o, div: n };
}
function removeGlobalNode(e) {
  try {
    e && e.remove();
  } catch {
  }
}
var commonjsGlobal = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, assign = make_assign(), create$1 = make_create(), trim$1 = make_trim(), Global$5 = typeof window < "u" ? window : commonjsGlobal, util$6 = {
  assign,
  create: create$1,
  trim: trim$1,
  bind: bind$1,
  slice: slice$1,
  each: each$7,
  map,
  pluck: pluck$1,
  isList: isList$1,
  isFunction: isFunction$1,
  isObject: isObject$1,
  Global: Global$5
};
function make_assign() {
  return Object.assign ? Object.assign : function(t, o, n, r) {
    for (var i = 1; i < arguments.length; i++)
      each$7(Object(arguments[i]), function(p, l) {
        t[l] = p;
      });
    return t;
  };
}
function make_create() {
  if (Object.create)
    return function(t, o, n, r) {
      var i = slice$1(arguments, 1);
      return assign.apply(this, [Object.create(t)].concat(i));
    };
  {
    let e = function() {
    };
    return function(o, n, r, i) {
      var p = slice$1(arguments, 1);
      return e.prototype = o, assign.apply(this, [new e()].concat(p));
    };
  }
}
function make_trim() {
  return String.prototype.trim ? function(t) {
    return String.prototype.trim.call(t);
  } : function(t) {
    return t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
  };
}
function bind$1(e, t) {
  return function() {
    return t.apply(e, Array.prototype.slice.call(arguments, 0));
  };
}
function slice$1(e, t) {
  return Array.prototype.slice.call(e, t || 0);
}
function each$7(e, t) {
  pluck$1(e, function(o, n) {
    return t(o, n), !1;
  });
}
function map(e, t) {
  var o = isList$1(e) ? [] : {};
  return pluck$1(e, function(n, r) {
    return o[r] = t(n, r), !1;
  }), o;
}
function pluck$1(e, t) {
  if (isList$1(e)) {
    for (var o = 0; o < e.length; o++)
      if (t(e[o], o))
        return e[o];
  } else
    for (var n in e)
      if (e.hasOwnProperty(n) && t(e[n], n))
        return e[n];
}
function isList$1(e) {
  return e != null && typeof e != "function" && typeof e.length == "number";
}
function isFunction$1(e) {
  return e && {}.toString.call(e) === "[object Function]";
}
function isObject$1(e) {
  return e && {}.toString.call(e) === "[object Object]";
}
var util$5 = util$6, slice = util$5.slice, pluck = util$5.pluck, each$6 = util$5.each, bind = util$5.bind, create = util$5.create, isList = util$5.isList, isFunction = util$5.isFunction, isObject = util$5.isObject, storeEngine = {
  createStore
}, storeAPI = {
  version: "2.0.12",
  enabled: !1,
  get: function(e, t) {
    var o = this.storage.read(this._namespacePrefix + e);
    return this._deserialize(o, t);
  },
  set: function(e, t) {
    return t === void 0 ? this.remove(e) : (this.storage.write(this._namespacePrefix + e, this._serialize(t)), t);
  },
  remove: function(e) {
    this.storage.remove(this._namespacePrefix + e);
  },
  each: function(e) {
    var t = this;
    this.storage.each(function(o, n) {
      e.call(t, t._deserialize(o), (n || "").replace(t._namespaceRegexp, ""));
    });
  },
  clearAll: function() {
    this.storage.clearAll();
  },
  hasNamespace: function(e) {
    return this._namespacePrefix == "__storejs_" + e + "_";
  },
  createStore: function() {
    return createStore.apply(this, arguments);
  },
  addPlugin: function(e) {
    this._addPlugin(e);
  },
  namespace: function(e) {
    return createStore(this.storage, this.plugins, e);
  }
};
function _warn() {
  var e = typeof console > "u" ? null : console;
  if (!!e) {
    var t = e.warn ? e.warn : e.log;
    t.apply(e, arguments);
  }
}
function createStore(e, t, o) {
  o || (o = ""), e && !isList(e) && (e = [e]), t && !isList(t) && (t = [t]);
  var n = o ? "__storejs_" + o + "_" : "", r = o ? new RegExp("^" + n) : null, i = /^[a-zA-Z0-9_\-]*$/;
  if (!i.test(o))
    throw new Error("store.js namespaces can only have alphanumerics + underscores and dashes");
  var p = {
    _namespacePrefix: n,
    _namespaceRegexp: r,
    _testStorage: function(a) {
      try {
        var c = "__storejs__test__";
        a.write(c, c);
        var u = a.read(c) === c;
        return a.remove(c), u;
      } catch {
        return !1;
      }
    },
    _assignPluginFnProp: function(a, c) {
      var u = this[c];
      this[c] = function() {
        var s = slice(arguments, 0), d = this;
        function _() {
          if (!!u)
            return each$6(arguments, function(y, b) {
              s[b] = y;
            }), u.apply(d, s);
        }
        var v = [_].concat(s);
        return a.apply(d, v);
      };
    },
    _serialize: function(a) {
      return JSON.stringify(a);
    },
    _deserialize: function(a, c) {
      if (!a)
        return c;
      var u = "";
      try {
        u = JSON.parse(a);
      } catch {
        u = a;
      }
      return u !== void 0 ? u : c;
    },
    _addStorage: function(a) {
      this.enabled || this._testStorage(a) && (this.storage = a, this.enabled = !0);
    },
    _addPlugin: function(a) {
      var c = this;
      if (isList(a)) {
        each$6(a, function(s) {
          c._addPlugin(s);
        });
        return;
      }
      var u = pluck(this.plugins, function(s) {
        return a === s;
      });
      if (!u) {
        if (this.plugins.push(a), !isFunction(a))
          throw new Error("Plugins must be function values that return objects");
        var m = a.call(this);
        if (!isObject(m))
          throw new Error("Plugins must return an object of function properties");
        each$6(m, function(s, d) {
          if (!isFunction(s))
            throw new Error("Bad plugin property: " + d + " from plugin " + a.name + ". Plugins should only return functions.");
          c._assignPluginFnProp(s, d);
        });
      }
    },
    addStorage: function(a) {
      _warn("store.addStorage(storage) is deprecated. Use createStore([storages])"), this._addStorage(a);
    }
  }, l = create(p, storeAPI, {
    plugins: []
  });
  return l.raw = {}, each$6(l, function(a, c) {
    isFunction(a) && (l.raw[c] = bind(l, a));
  }), each$6(e, function(a) {
    l._addStorage(a);
  }), each$6(t, function(a) {
    l._addPlugin(a);
  }), l;
}
var util$4 = util$6, Global$4 = util$4.Global, localStorage_1 = {
  name: "localStorage",
  read: read$5,
  write: write$5,
  each: each$5,
  remove: remove$5,
  clearAll: clearAll$5
};
function localStorage() {
  return Global$4.localStorage;
}
function read$5(e) {
  return localStorage().getItem(e);
}
function write$5(e, t) {
  return localStorage().setItem(e, t);
}
function each$5(e) {
  for (var t = localStorage().length - 1; t >= 0; t--) {
    var o = localStorage().key(t);
    e(read$5(o), o);
  }
}
function remove$5(e) {
  return localStorage().removeItem(e);
}
function clearAll$5() {
  return localStorage().clear();
}
var util$3 = util$6, Global$3 = util$3.Global, oldFFGlobalStorage = {
  name: "oldFF-globalStorage",
  read: read$4,
  write: write$4,
  each: each$4,
  remove: remove$4,
  clearAll: clearAll$4
}, globalStorage = Global$3.globalStorage;
function read$4(e) {
  return globalStorage[e];
}
function write$4(e, t) {
  globalStorage[e] = t;
}
function each$4(e) {
  for (var t = globalStorage.length - 1; t >= 0; t--) {
    var o = globalStorage.key(t);
    e(globalStorage[o], o);
  }
}
function remove$4(e) {
  return globalStorage.removeItem(e);
}
function clearAll$4() {
  each$4(function(e, t) {
    delete globalStorage[e];
  });
}
var util$2 = util$6, Global$2 = util$2.Global, oldIEUserDataStorage = {
  name: "oldIE-userDataStorage",
  write: write$3,
  read: read$3,
  each: each$3,
  remove: remove$3,
  clearAll: clearAll$3
}, storageName = "storejs", doc$1 = Global$2.document, _withStorageEl = _makeIEStorageElFunction(), disable = (Global$2.navigator ? Global$2.navigator.userAgent : "").match(/ (MSIE 8|MSIE 9|MSIE 10)\./);
function write$3(e, t) {
  if (!disable) {
    var o = fixKey(e);
    _withStorageEl(function(n) {
      n.setAttribute(o, t), n.save(storageName);
    });
  }
}
function read$3(e) {
  if (!disable) {
    var t = fixKey(e), o = null;
    return _withStorageEl(function(n) {
      o = n.getAttribute(t);
    }), o;
  }
}
function each$3(e) {
  _withStorageEl(function(t) {
    for (var o = t.XMLDocument.documentElement.attributes, n = o.length - 1; n >= 0; n--) {
      var r = o[n];
      e(t.getAttribute(r.name), r.name);
    }
  });
}
function remove$3(e) {
  var t = fixKey(e);
  _withStorageEl(function(o) {
    o.removeAttribute(t), o.save(storageName);
  });
}
function clearAll$3() {
  _withStorageEl(function(e) {
    var t = e.XMLDocument.documentElement.attributes;
    e.load(storageName);
    for (var o = t.length - 1; o >= 0; o--)
      e.removeAttribute(t[o].name);
    e.save(storageName);
  });
}
var forbiddenCharsRegex = new RegExp("[!\"#$%&'()*+,/\\\\:;<=>?@[\\]^`{|}~]", "g");
function fixKey(e) {
  return e.replace(/^\d/, "___$&").replace(forbiddenCharsRegex, "___");
}
function _makeIEStorageElFunction() {
  if (!doc$1 || !doc$1.documentElement || !doc$1.documentElement.addBehavior)
    return null;
  var e = "script", t, o, n;
  try {
    o = new ActiveXObject("htmlfile"), o.open(), o.write("<" + e + ">document.w=window</" + e + '><iframe src="/favicon.ico"></iframe>'), o.close(), t = o.w.frames[0].document, n = t.createElement("div");
  } catch {
    n = doc$1.createElement("div"), t = doc$1.body;
  }
  return function(r) {
    var i = [].slice.call(arguments, 0);
    i.unshift(n), t.appendChild(n), n.addBehavior("#default#userData"), n.load(storageName), r.apply(this, i), t.removeChild(n);
  };
}
var util$1 = util$6, Global$1 = util$1.Global, trim = util$1.trim, cookieStorage = {
  name: "cookieStorage",
  read: read$2,
  write: write$2,
  each: each$2,
  remove: remove$2,
  clearAll: clearAll$2
}, doc = Global$1.document;
function read$2(e) {
  if (!e || !_has(e))
    return null;
  var t = "(?:^|.*;\\s*)" + escape(e).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=\\s*((?:[^;](?!;))*[^;]?).*";
  return unescape(doc.cookie.replace(new RegExp(t), "$1"));
}
function each$2(e) {
  for (var t = doc.cookie.split(/; ?/g), o = t.length - 1; o >= 0; o--)
    if (!!trim(t[o])) {
      var n = t[o].split("="), r = unescape(n[0]), i = unescape(n[1]);
      e(i, r);
    }
}
function write$2(e, t) {
  !e || (doc.cookie = escape(e) + "=" + escape(t) + "; expires=Tue, 19 Jan 2038 03:14:07 GMT; path=/");
}
function remove$2(e) {
  !e || !_has(e) || (doc.cookie = escape(e) + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/");
}
function clearAll$2() {
  each$2(function(e, t) {
    remove$2(t);
  });
}
function _has(e) {
  return new RegExp("(?:^|;\\s*)" + escape(e).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=").test(doc.cookie);
}
var util = util$6, Global = util.Global, sessionStorage_1 = {
  name: "sessionStorage",
  read: read$1,
  write: write$1,
  each: each$1,
  remove: remove$1,
  clearAll: clearAll$1
};
function sessionStorage() {
  return Global.sessionStorage;
}
function read$1(e) {
  return sessionStorage().getItem(e);
}
function write$1(e, t) {
  return sessionStorage().setItem(e, t);
}
function each$1(e) {
  for (var t = sessionStorage().length - 1; t >= 0; t--) {
    var o = sessionStorage().key(t);
    e(read$1(o), o);
  }
}
function remove$1(e) {
  return sessionStorage().removeItem(e);
}
function clearAll$1() {
  return sessionStorage().clear();
}
var memoryStorage_1 = {
  name: "memoryStorage",
  read,
  write,
  each,
  remove,
  clearAll
}, memoryStorage = {};
function read(e) {
  return memoryStorage[e];
}
function write(e, t) {
  memoryStorage[e] = t;
}
function each(e) {
  for (var t in memoryStorage)
    memoryStorage.hasOwnProperty(t) && e(memoryStorage[t], t);
}
function remove(e) {
  delete memoryStorage[e];
}
function clearAll(e) {
  memoryStorage = {};
}
var all = [
  localStorage_1,
  oldFFGlobalStorage,
  oldIEUserDataStorage,
  cookieStorage,
  sessionStorage_1,
  memoryStorage_1
], json2$1 = {}, hasRequiredJson2;
function requireJson2() {
  return hasRequiredJson2 || (hasRequiredJson2 = 1, typeof JSON != "object" && (JSON = {}), function() {
    var rx_one = /^[\],:{}\s]*$/, rx_two = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, rx_three = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, rx_four = /(?:^|:|,)(?:\s*\[)+/g, rx_escapable = /[\\"\u0000-\u001f\u007f-\u009f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g, rx_dangerous = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;
    function f(e) {
      return e < 10 ? "0" + e : e;
    }
    function this_value() {
      return this.valueOf();
    }
    typeof Date.prototype.toJSON != "function" && (Date.prototype.toJSON = function() {
      return isFinite(this.valueOf()) ? this.getUTCFullYear() + "-" + f(this.getUTCMonth() + 1) + "-" + f(this.getUTCDate()) + "T" + f(this.getUTCHours()) + ":" + f(this.getUTCMinutes()) + ":" + f(this.getUTCSeconds()) + "Z" : null;
    }, Boolean.prototype.toJSON = this_value, Number.prototype.toJSON = this_value, String.prototype.toJSON = this_value);
    var gap, indent, meta, rep;
    function quote(e) {
      return rx_escapable.lastIndex = 0, rx_escapable.test(e) ? '"' + e.replace(rx_escapable, function(t) {
        var o = meta[t];
        return typeof o == "string" ? o : "\\u" + ("0000" + t.charCodeAt(0).toString(16)).slice(-4);
      }) + '"' : '"' + e + '"';
    }
    function str(e, t) {
      var o, n, r, i, p = gap, l, a = t[e];
      switch (a && typeof a == "object" && typeof a.toJSON == "function" && (a = a.toJSON(e)), typeof rep == "function" && (a = rep.call(t, e, a)), typeof a) {
        case "string":
          return quote(a);
        case "number":
          return isFinite(a) ? String(a) : "null";
        case "boolean":
        case "null":
          return String(a);
        case "object":
          if (!a)
            return "null";
          if (gap += indent, l = [], Object.prototype.toString.apply(a) === "[object Array]") {
            for (i = a.length, o = 0; o < i; o += 1)
              l[o] = str(o, a) || "null";
            return r = l.length === 0 ? "[]" : gap ? `[
` + gap + l.join(`,
` + gap) + `
` + p + "]" : "[" + l.join(",") + "]", gap = p, r;
          }
          if (rep && typeof rep == "object")
            for (i = rep.length, o = 0; o < i; o += 1)
              typeof rep[o] == "string" && (n = rep[o], r = str(n, a), r && l.push(quote(n) + (gap ? ": " : ":") + r));
          else
            for (n in a)
              Object.prototype.hasOwnProperty.call(a, n) && (r = str(n, a), r && l.push(quote(n) + (gap ? ": " : ":") + r));
          return r = l.length === 0 ? "{}" : gap ? `{
` + gap + l.join(`,
` + gap) + `
` + p + "}" : "{" + l.join(",") + "}", gap = p, r;
      }
    }
    typeof JSON.stringify != "function" && (meta = {
      "\b": "\\b",
      "	": "\\t",
      "\n": "\\n",
      "\f": "\\f",
      "\r": "\\r",
      '"': '\\"',
      "\\": "\\\\"
    }, JSON.stringify = function(e, t, o) {
      var n;
      if (gap = "", indent = "", typeof o == "number")
        for (n = 0; n < o; n += 1)
          indent += " ";
      else
        typeof o == "string" && (indent = o);
      if (rep = t, t && typeof t != "function" && (typeof t != "object" || typeof t.length != "number"))
        throw new Error("JSON.stringify");
      return str("", { "": e });
    }), typeof JSON.parse != "function" && (JSON.parse = function(text, reviver) {
      var j;
      function walk(e, t) {
        var o, n, r = e[t];
        if (r && typeof r == "object")
          for (o in r)
            Object.prototype.hasOwnProperty.call(r, o) && (n = walk(r, o), n !== void 0 ? r[o] = n : delete r[o]);
        return reviver.call(e, t, r);
      }
      if (text = String(text), rx_dangerous.lastIndex = 0, rx_dangerous.test(text) && (text = text.replace(rx_dangerous, function(e) {
        return "\\u" + ("0000" + e.charCodeAt(0).toString(16)).slice(-4);
      })), rx_one.test(
        text.replace(rx_two, "@").replace(rx_three, "]").replace(rx_four, "")
      ))
        return j = eval("(" + text + ")"), typeof reviver == "function" ? walk({ "": j }, "") : j;
      throw new SyntaxError("JSON.parse");
    });
  }()), json2$1;
}
var json2 = json2Plugin;
function json2Plugin() {
  return requireJson2(), {};
}
var engine = storeEngine, storages = all, plugins = [json2], store_legacy = engine.createStore(storages, plugins);
const storage = store_legacy, debounce = (e, t = 200) => {
  let o = null;
  return (...n) => {
    o && clearTimeout(o), o = setTimeout(() => {
      e.apply(void 0, n);
    }, t);
  };
}, throttle = (e, t = 500) => {
  let o = null;
  return (...n) => {
    o || (o = setTimeout(() => {
      e.apply(void 0, n), o = null;
    }, t));
  };
}, base = "", elAvatar = "", elButton = "", elImage = "", elImageViewer = "", elPopover = "", elPopper = "", elCarousel = "", elScrollbar = "", elInput = "", elPagination = "", elTag = "", elOption = "", elOptionGroup = "", elSelect = "", _hoisted_1$9 = { class: "comment-box" }, _hoisted_2$7 = {
  key: 0,
  class: "action-box"
}, _sfc_main$9 = /* @__PURE__ */ defineComponent({
  __name: "comment-box",
  props: {
    placeholder: null,
    contentBtn: null,
    parentId: null,
    replay: null
  },
  emits: ["hide", "close"],
  setup(e, { expose: t, emit: o }) {
    const n = e, r = ref(""), i = ref(!1), p = ref(!0), l = ref(), a = ref(), c = inject(InjectionCommentFun), u = inject(InjectionEmojiApi), m = () => {
      c({
        content: n.replay ? `\u56DE\u590D <span style="color: var(--u-color-success-dark-2);">@${n.replay}:</span> ${r.value}` : r.value,
        parentId: isNull(n.parentId, null),
        finish: () => {
          l.value.clear(), p.value = !0, o("close");
        }
      });
    };
    function s(_) {
      isEmpty(r.value) && (i.value = !1, o("hide", _));
    }
    function d() {
      i.value = !0, nextTick(() => {
        a.value = document.querySelector("div[id^='el-popper-container']");
      });
    }
    return t({
      focus: () => {
        var _;
        return (_ = l.value) == null ? void 0 : _.focus();
      }
    }), (_, v) => {
      const y = resolveComponent("u-editor"), b = resolveComponent("u-emoji");
      return withDirectives((openBlock(), createElementBlock("div", _hoisted_1$9, [
        createVNode(y, {
          ref_key: "editorRef",
          ref: l,
          modelValue: r.value,
          "onUpdate:modelValue": v[0] || (v[0] = (g) => r.value = g),
          class: normalizeClass({ "input-active": i.value }),
          placeholder: n.placeholder,
          "min-height": 64,
          onFocus: d,
          onInput: v[1] || (v[1] = (g) => unref(isEmpty)(r.value.replace(/  |<br>/g, "")) ? p.value = !0 : p.value = !1),
          onSubmit: m
        }, null, 8, ["modelValue", "class", "placeholder"]),
        createVNode(Transition, { name: "fade" }, {
          default: withCtx(() => [
            i.value ? (openBlock(), createElementBlock("div", _hoisted_2$7, [
              createVNode(b, {
                emoji: unref(u),
                onAddEmoji: v[2] || (v[2] = (g) => {
                  var $;
                  return ($ = l.value) == null ? void 0 : $.addText(g);
                })
              }, null, 8, ["emoji"]),
              createVNode(unref(ElButton), {
                type: "primary",
                disabled: p.value,
                onClick: m
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(n.contentBtn), 1)
                ]),
                _: 1
              }, 8, ["disabled"])
            ])) : createCommentVNode("", !0)
          ]),
          _: 1
        })
      ])), [
        [unref(ClickOutside), s, a.value]
      ]);
    };
  }
}), commentBox_vue_vue_type_style_index_0_scoped_3ea130c9_lang = "", _export_sfc = (e, t) => {
  const o = e.__vccOpts || e;
  for (const [n, r] of t)
    o[n] = r;
  return o;
}, CommentBox = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["__scopeId", "data-v-3ea130c9"]]), _hoisted_1$8 = ["placeholder", "onKeydown", "innerHTML"], __default__$4 = {
  name: "UEditor"
}, _sfc_main$8 = /* @__PURE__ */ defineComponent({
  ...__default__$4,
  props: {
    placeholder: null,
    modelValue: null,
    minHeight: { default: 30 }
  },
  emits: ["update:modelValue", "input", "focus", "blur", "submit"],
  setup(e, { expose: t, emit: o }) {
    const n = e;
    useCssVars((g) => ({
      "5dca5370": unref(c),
      "2effb400": unref(u)
    }));
    const r = ref(), i = ref(), p = ref(), l = ref(!1), a = ref(!1), c = computed(() => n.minHeight + "px"), u = computed(() => n.minHeight == 30 ? "4px 10px" : "8px 12px");
    watch(
      () => n.modelValue,
      (g) => {
        l.value || (p.value = g);
      }
    );
    function m(g) {
      o("focus", g), l.value = !0, a.value = !0;
    }
    function s(g) {
      var $, w;
      r.value = ($ = window.getSelection()) == null ? void 0 : $.getRangeAt(0), o("blur", g), (w = i.value) != null && w.innerHTML || (a.value = !1), l.value = !1;
    }
    function d(g) {
      const { innerHTML: $ } = g.target;
      o("update:modelValue", $), o("input", g);
    }
    function _(g) {
      var w, x;
      let $ = window.getSelection();
      if ($) {
        $.removeAllRanges(), r.value || ((w = i.value) == null || w.focus(), r.value = $.getRangeAt(0)), r.value.deleteContents(), r.value.insertNode(r.value.createContextualFragment(g)), r.value.collapse(!1), $.addRange(r.value), o("update:modelValue", ((x = i.value) == null ? void 0 : x.innerHTML) || "");
        const S = i.value;
        o("input", S);
      }
    }
    function v() {
      i.value && (i.value.innerHTML = "", o("update:modelValue", i.value.innerHTML), a.value = !1);
    }
    function y() {
      nextTick(() => {
        var g;
        (g = i.value) == null || g.focus();
      });
    }
    const b = (g) => {
      g.ctrlKey && g.key == "Enter" && o("submit");
    };
    return onMounted(() => {
      var g;
      (g = i.value) == null || g.addEventListener("keyup", ($) => {
        const w = $.target;
        w.innerHTML == "<br>" && (w.innerHTML = "");
      });
    }), t({
      addText: _,
      clear: v,
      focus: y
    }), (g, $) => (openBlock(), createElementBlock("div", {
      class: normalizeClass(["u-editor", { active: a.value }])
    }, [
      createElementVNode("div", {
        ref_key: "editorRef",
        ref: i,
        class: "rich-input",
        contenteditable: "true",
        placeholder: e.placeholder,
        onFocus: m,
        onInput: d,
        onBlur: s,
        onKeydown: withKeys(b, ["enter"]),
        innerHTML: p.value
      }, null, 40, _hoisted_1$8)
    ], 2));
  }
}), editor_vue_vue_type_style_index_0_scoped_c2926f47_lang = "", editorVue = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["__scopeId", "data-v-c2926f47"]]), UEditor = withInstall(editorVue), index$2 = "", _hoisted_1$7 = { class: "u-fold" }, _hoisted_2$6 = { class: "action-box select-none" }, __default__$3 = {
  name: "UFold"
}, _sfc_main$7 = /* @__PURE__ */ defineComponent({
  ...__default__$3,
  props: {
    line: { default: 5 },
    unfold: { type: Boolean }
  },
  setup(e) {
    const t = e;
    useCssVars((l) => ({
      "6c257a97": unref(o)
    }));
    const o = computed(() => {
      let l = Math.trunc(Number(t.line));
      return l > 0 ? l : 1;
    }), n = ref(!0), r = ref(!1), i = ref();
    let p;
    return onMounted(() => {
      p = new ResizeObserver((l) => {
        n.value && i.value && (r.value = i.value.offsetHeight < i.value.scrollHeight);
      }), p.observe(i.value);
    }), onUnmounted(() => {
      p.disconnect();
    }), (l, a) => (openBlock(), createElementBlock("div", _hoisted_1$7, [
      createElementVNode("div", {
        class: normalizeClass(["txt-box", { "over-hidden": n.value }])
      }, [
        createElementVNode("div", {
          ref_key: "divBox",
          ref: i
        }, [
          renderSlot(l.$slots, "default", {}, void 0, !0)
        ], 512)
      ], 2),
      createElementVNode("div", _hoisted_2$6, [
        r.value && e.unfold ? (openBlock(), createElementBlock("div", {
          key: 0,
          class: "expand-btn",
          onClick: a[0] || (a[0] = (c) => n.value = !n.value)
        }, toDisplayString(n.value ? "\u5C55\u5F00" : "\u6536\u8D77"), 1)) : createCommentVNode("", !0)
      ])
    ]));
  }
}), fold_vue_vue_type_style_index_0_scoped_9df778e5_lang = "", foldVue = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["__scopeId", "data-v-9df778e5"]]), UFold = withInstall(foldVue), _hoisted_1$6 = {
  key: 1,
  "aria-hidden": "true"
}, _hoisted_2$5 = ["xlink:href"], __default__$2 = {
  name: "UIcon"
}, _sfc_main$6 = /* @__PURE__ */ defineComponent({
  ...__default__$2,
  props: {
    name: null,
    size: null,
    color: null
  },
  setup(e) {
    const t = e, o = computed(() => "#" + t.name), n = computed(() => ({
      fontSize: isNumber(t.size) ? t.size + "px" : t.size,
      color: t.color
    }));
    return (r, i) => (openBlock(), createElementBlock("i", {
      class: "u-icon",
      style: normalizeStyle(unref(n))
    }, [
      r.$slots.default ? renderSlot(r.$slots, "default", { key: 0 }, void 0, !0) : (openBlock(), createElementBlock("svg", _hoisted_1$6, [
        createElementVNode("use", { "xlink:href": unref(o) }, null, 8, _hoisted_2$5)
      ]))
    ], 4));
  }
}), icon_vue_vue_type_style_index_0_scoped_b823a48c_lang = "", iconVue = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["__scopeId", "data-v-b823a48c"]]), UIcon = withInstall(iconVue), _withScopeId$4 = (e) => (pushScopeId("data-v-54bea938"), e = e(), popScopeId(), e), _hoisted_1$5 = { class: "u-emoji" }, _hoisted_2$4 = { class: "face-tooltip-head select-none" }, _hoisted_3$4 = ["onClick"], _hoisted_4$4 = ["src"], _hoisted_5$4 = { class: "emoji-body select-none" }, _hoisted_6$4 = { style: { padding: "0 5px" } }, _hoisted_7$2 = ["onClick"], _hoisted_8$2 = { class: "emoji-btn select-none" }, _hoisted_9$2 = { key: 0 }, _hoisted_10$2 = /* @__PURE__ */ _withScopeId$4(() => /* @__PURE__ */ createElementVNode("svg", {
  width: "16",
  height: "16",
  viewBox: "0 0 16 16",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  class: "icon"
}, [
  /* @__PURE__ */ createElementVNode("path", {
    "data-v-9fe533ba": "",
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M8.00002 0.666504C12.0501 0.666504 15.3334 3.94975 15.3334 7.99984C15.3334 12.0499 12.0501 15.3332 8.00002 15.3332C3.94993 15.3332 0.666687 12.0499 0.666687 7.99984C0.666687 3.94975 3.94993 0.666504 8.00002 0.666504ZM8 2C4.68629 2 2 4.68629 2 8C2 11.3137 4.68629 14 8 14C11.3137 14 14 11.3137 14 8C14 4.68629 11.3137 2 8 2ZM10.6667 5.66667V7.66667H9.33333V5.66667H10.6667ZM6.66667 5.66667V7.66667H5.33333V5.66667H6.66667ZM10.0767 9.33333H11.0495C11.1804 9.33333 11.2866 9.43951 11.2866 9.57048C11.2866 9.60754 11.2779 9.64409 11.2612 9.67718L11.244 9.71053C10.6294 10.8739 9.40726 11.6667 7.99998 11.6667C6.61523 11.6667 5.40977 10.8991 4.7859 9.76612L4.73786 9.67593C4.67845 9.56052 4.72385 9.4188 4.83926 9.35939C4.87253 9.34226 4.90941 9.33333 4.94683 9.33333H5.92347C6.02396 9.33332 6.11908 9.37865 6.18238 9.4567C6.26207 9.55496 6.32833 9.62955 6.38117 9.68046C6.80074 10.0847 7.37133 10.3333 7.99998 10.3333C8.63289 10.3333 9.20694 10.0814 9.62728 9.67224C9.67791 9.62296 9.74135 9.55121 9.8176 9.45698C9.88089 9.37877 9.97611 9.33333 10.0767 9.33333Z"
  })
], -1)), _hoisted_11$1 = /* @__PURE__ */ _withScopeId$4(() => /* @__PURE__ */ createElementVNode("span", null, "\u8868\u60C5", -1)), _hoisted_12 = [
  _hoisted_10$2,
  _hoisted_11$1
], __default__$1 = {
  name: "UEmoji"
}, _sfc_main$5 = /* @__PURE__ */ defineComponent({
  ...__default__$1,
  props: {
    emoji: null,
    placement: { default: "bottom" }
  },
  emits: ["addEmoji"],
  setup(e, { emit: t }) {
    const o = e, n = ref(0), r = ref(0), i = ref(new Array(2)), { emojiList: p, faceList: l } = o.emoji;
    function a(u) {
      switch (n.value = u, u) {
        case 0:
          r.value = 0;
          break;
        case 1:
          r.value = -50, i.value[1] = p[1];
          break;
      }
    }
    function c() {
      i.value[0] = p[0];
    }
    return (u, m) => (openBlock(), createElementBlock("div", _hoisted_1$5, [
      createVNode(unref(ElPopover), {
        placement: e.placement,
        "popper-class": "emoji-popover",
        width: 250,
        trigger: "click",
        onBeforeEnter: c
      }, {
        reference: withCtx(() => [
          createElementVNode("div", _hoisted_8$2, [
            u.$slots.default ? renderSlot(u.$slots, "default", { key: 1 }, void 0, !0) : (openBlock(), createElementBlock("div", _hoisted_9$2, _hoisted_12))
          ])
        ]),
        default: withCtx(() => [
          createElementVNode("div", _hoisted_2$4, [
            (openBlock(!0), createElementBlock(Fragment, null, renderList(unref(l), (s, d) => (openBlock(), createElementBlock("label", {
              key: d,
              class: normalizeClass(n.value == d ? "active" : ""),
              onClick: (_) => a(d)
            }, [
              createElementVNode("img", {
                src: s,
                alt: ""
              }, null, 8, _hoisted_4$4)
            ], 10, _hoisted_3$4))), 128))
          ]),
          createElementVNode("div", _hoisted_5$4, [
            createElementVNode("div", {
              class: "emjio-container",
              style: normalizeStyle({ transform: `translateX(${r.value}%)` })
            }, [
              (openBlock(!0), createElementBlock(Fragment, null, renderList(i.value, (s, d) => (openBlock(), createElementBlock("div", {
                key: d,
                class: "emoji-wrapper"
              }, [
                createVNode(unref(ElScrollbar), null, {
                  default: withCtx(() => [
                    createElementVNode("div", _hoisted_6$4, [
                      (openBlock(!0), createElementBlock(Fragment, null, renderList(s, (_, v) => (openBlock(), createElementBlock("span", {
                        key: v,
                        class: "emoji-item",
                        onClick: (y) => u.$emit("addEmoji", v)
                      }, [
                        createVNode(unref(ElImage), {
                          src: _,
                          title: String(v),
                          class: "emoji",
                          style: { width: "24px", height: "24px", margin: "5px" },
                          lazy: ""
                        }, null, 8, ["src", "title"])
                      ], 8, _hoisted_7$2))), 128))
                    ])
                  ]),
                  _: 2
                }, 1024)
              ]))), 128))
            ], 4)
          ])
        ]),
        _: 3
      }, 8, ["placement"])
    ]));
  }
}), emoji_vue_vue_type_style_index_0_lang = "", emoji_vue_vue_type_style_index_1_scoped_54bea938_lang = "", emojiVue = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-54bea938"]]), InjectionEmojiApi = Symbol(), UEmoji = withInstall(emojiVue), useEmojiParse = (e, t) => {
  const o = /\[.+?\]/g;
  return t = t.replace(o, (n) => {
    const r = e[n];
    return r ? [
      '<img src="',
      r,
      '" width="20" height="20" alt="',
      n,
      '" title="',
      n,
      '" style="margin: 0 1px; vertical-align: text-bottom"',
      "/>"
    ].join("") : n;
  }), t;
}, _withScopeId$3 = (e) => (pushScopeId("data-v-89fc8165"), e = e(), popScopeId(), e), _hoisted_1$4 = { class: "operation-list select-none" }, _hoisted_2$3 = /* @__PURE__ */ _withScopeId$3(() => /* @__PURE__ */ createElementVNode("svg", {
  viewBox: "0 0 1127 1024",
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  "p-id": "1612"
}, [
  /* @__PURE__ */ createElementVNode("path", {
    d: "M1108.468296 824.890547C1159.055032 910.219597 1097.227863 1024 990.429373 1024L130.432879 1024C29.258031 1024-32.574625 910.219597 18.012112 824.890547L450.825613 68.266574C473.306472 22.754136 518.276424 0 563.240888 0 608.209469 0 653.173934 22.754136 675.660283 68.266574L1108.468296 824.890547 1108.468296 824.890547 1108.468296 824.890547 1108.468296 824.890547ZM1020.384123 877.110641 1019.583053 875.735153 586.77504 119.111177 583.854223 113.62523C580.333998 106.500274 573.244216 102.4 563.240888 102.4 553.240806 102.4 546.151071 106.500212 542.636068 113.61633L539.710577 119.111663 106.096287 877.110641C95.301134 895.319767 109.937021 921.6 130.432879 921.6L990.429373 921.6C1016.30634 921.6 1031.298263 895.520476 1020.384123 877.110641L1020.384123 877.110641 1020.384123 877.110641 1020.384123 877.110641ZM558.08319 307.2C532.482248 307.2 512 322.819385 512 342.344809L512 579.251379C512 598.776801 532.482248 614.4 558.08319 614.4L568.321812 614.4C593.922749 614.4 614.4 598.776801 614.4 579.251379L614.4 342.344809C614.4 322.819385 593.922749 307.2 568.321812 307.2L558.08319 307.2 558.08319 307.2 558.08319 307.2 558.08319 307.2ZM512 766.885176C512 780.001705 517.522432 793.032632 526.999818 802.305669 536.477199 811.577487 549.797038 816.975247 563.200625 816.975247 576.602962 816.975247 589.927798 811.577487 599.405184 802.305669 608.882565 793.032632 614.4 780.001705 614.4 766.885176 614.4 753.772319 608.882565 740.741391 599.405184 731.469573 589.927798 722.19776 576.602962 716.8 563.200625 716.8 549.797038 716.8 536.477199 722.19776 526.999818 731.469573 517.522432 740.741391 512 753.772319 512 766.885176L512 766.885176 512 766.885176 512 766.885176Z",
    "p-id": "1613"
  })
], -1)), _hoisted_3$3 = /* @__PURE__ */ _withScopeId$3(() => /* @__PURE__ */ createElementVNode("span", null, "\u4E3E\u62A5", -1)), _hoisted_4$3 = /* @__PURE__ */ _withScopeId$3(() => /* @__PURE__ */ createElementVNode("svg", {
  viewBox: "0 0 1024 1024",
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  "p-id": "1750"
}, [
  /* @__PURE__ */ createElementVNode("path", {
    d: "M607.897867 768.043004c-17.717453 0-31.994625-14.277171-31.994625-31.994625L575.903242 383.935495c0-17.717453 14.277171-31.994625 31.994625-31.994625s31.994625 14.277171 31.994625 31.994625l0 351.94087C639.892491 753.593818 625.61532 768.043004 607.897867 768.043004zM415.930119 768.043004c-17.717453 0-31.994625-14.277171-31.994625-31.994625L383.935495 383.935495c0-17.717453 14.277171-31.994625 31.994625-31.994625 17.717453 0 31.994625 14.277171 31.994625 31.994625l0 351.94087C447.924744 753.593818 433.647573 768.043004 415.930119 768.043004zM928.016126 223.962372l-159.973123 0L768.043004 159.973123c0-52.980346-42.659499-95.983874-95.295817-95.983874L351.94087 63.989249c-52.980346 0-95.983874 43.003528-95.983874 95.983874l0 63.989249-159.973123 0c-17.717453 0-31.994625 14.277171-31.994625 31.994625s14.277171 31.994625 31.994625 31.994625l832.032253 0c17.717453 0 31.994625-14.277171 31.994625-31.994625S945.73358 223.962372 928.016126 223.962372zM319.946246 159.973123c0-17.545439 14.449185-31.994625 31.994625-31.994625l320.806316 0c17.545439 0 31.306568 14.105157 31.306568 31.994625l0 63.989249L319.946246 223.962372 319.946246 159.973123 319.946246 159.973123zM736.048379 960.010751 288.123635 960.010751c-52.980346 0-95.983874-43.003528-95.983874-95.983874L192.139761 383.591466c0-17.717453 14.277171-31.994625 31.994625-31.994625s31.994625 14.277171 31.994625 31.994625l0 480.435411c0 17.717453 14.449185 31.994625 31.994625 31.994625l448.096758 0c17.717453 0 31.994625-14.277171 31.994625-31.994625L768.215018 384.795565c0-17.717453 14.277171-31.994625 31.994625-31.994625s31.994625 14.277171 31.994625 31.994625l0 479.231312C832.032253 916.835209 789.028725 960.010751 736.048379 960.010751z",
    "p-id": "1751"
  })
], -1)), _hoisted_5$3 = /* @__PURE__ */ _withScopeId$3(() => /* @__PURE__ */ createElementVNode("span", null, "\u5220\u9664", -1)), _hoisted_6$3 = /* @__PURE__ */ _withScopeId$3(() => /* @__PURE__ */ createElementVNode("svg", {
  viewBox: "0 0 1024 1024",
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg"
}, [
  /* @__PURE__ */ createElementVNode("path", {
    d: "M586.624 234.624a74.624 74.624 0 1 1-149.184 0 74.624 74.624 0 0 1 149.12 0z m0 554.624a74.624 74.624 0 1 1-149.248 0 74.624 74.624 0 0 1 149.248 0zM512 586.624a74.624 74.624 0 1 0 0-149.248 74.624 74.624 0 0 0 0 149.248z",
    fill: "currentColor"
  })
], -1)), _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "operation",
  props: {
    id: null,
    parentId: null,
    uid: null
  },
  setup(e) {
    const t = e;
    ref(!1);
    const o = ref(!1), n = ref(), { user: r, report: i, remove: p } = inject(InjectionContentBox), l = () => {
      var u;
      (u = n.value) == null || u.hide();
    }, a = () => {
      o.value = !0, l(), i(t.id, () => {
        o.value = !1;
      });
    }, c = () => {
      o.value = !0, l(), p(t.id, t.parentId, () => {
        o.value = !1;
      });
    };
    return (u, m) => {
      const s = resolveComponent("u-icon");
      return openBlock(), createBlock(unref(ElPopover), {
        ref_key: "popoverRef",
        ref: n,
        placement: "bottom-end",
        "popper-class": "operatoin-popover",
        trigger: "click"
      }, {
        reference: withCtx(() => [
          createElementVNode("div", {
            class: normalizeClass(["operation-warp", { "operation-parent": e.parentId == null }])
          }, [
            createVNode(s, null, {
              default: withCtx(() => [
                _hoisted_6$3
              ]),
              _: 1
            })
          ], 2)
        ]),
        default: withCtx(() => [
          createElementVNode("ul", _hoisted_1$4, [
            unref(r).id != e.uid ? (openBlock(), createElementBlock("li", {
              key: 0,
              class: normalizeClass([{ active: o.value }, "operation-option"]),
              onClick: a
            }, [
              createVNode(s, null, {
                default: withCtx(() => [
                  _hoisted_2$3
                ]),
                _: 1
              }),
              _hoisted_3$3
            ], 2)) : (openBlock(), createElementBlock("li", {
              key: 1,
              class: normalizeClass(["operation-option", { active: o.value }]),
              onClick: c
            }, [
              createVNode(s, null, {
                default: withCtx(() => [
                  _hoisted_4$3
                ]),
                _: 1
              }),
              _hoisted_5$3
            ], 2))
          ])
        ]),
        _: 1
      }, 512);
    };
  }
}), operation_vue_vue_type_style_index_0_lang = "", operation_vue_vue_type_style_index_1_scoped_89fc8165_lang = "", Operation = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-89fc8165"]]), _withScopeId$2 = (e) => (pushScopeId("data-v-f3b22390"), e = e(), popScopeId(), e), _hoisted_1$3 = { class: "content" }, _hoisted_2$2 = { class: "user-box" }, _hoisted_3$2 = {
  class: "address",
  style: { color: "#939393", "font-size": "12px" }
}, _hoisted_4$2 = { class: "time" }, _hoisted_5$2 = ["innerHTML"], _hoisted_6$2 = { class: "action-box select-none" }, _hoisted_7$1 = /* @__PURE__ */ _withScopeId$2(() => /* @__PURE__ */ createElementVNode("svg", {
  t: "1650360973068",
  viewBox: "0 0 1024 1024",
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  "p-id": "1168",
  width: "200",
  height: "200"
}, [
  /* @__PURE__ */ createElementVNode("path", {
    d: "M547.968 138.88c6.656-4.672 14.08-6.976 20.48-5.056 6.08 1.792 22.848 10.752 40.192 56.128 8.576 22.4 27.264 81.536-5.632 197.504a45.44 45.44 0 0 0 42.88 57.984l217.6 3.008h0.448a53.12 53.12 0 0 1 20.096 3.328 16.256 16.256 0 0 1 5.568 3.648 14.464 14.464 0 0 1 3.264 6.4c2.176 7.808 4.608 33.984-0.256 77.248-4.672 41.984-15.936 97.408-38.784 162.368-19.136 54.336-43.52 100.48-81.472 161.792a56.384 56.384 0 0 0-1.664 2.496l-0.128 0.128-1.408 2.112a7.872 7.872 0 0 1-1.28 1.472 3.84 3.84 0 0 1-1.28 0.64 20.48 20.48 0 0 1-6.848 0.96H356.032V421.44c19.712-10.624 40.704-24.576 62.592-47.616 25.472-26.88 51.008-64.768 78.208-121.6 5.568-11.584 9.856-24.384 13.632-36.032l3.072-9.856c2.688-8.448 5.184-16.384 8.064-24.32 8.064-22.4 16.128-36.032 26.368-43.136z m120.96 27.968c-20.48-53.44-48-84.736-81.984-94.912-33.6-9.984-61.952 4.16-76.032 14.08-27.584 19.264-41.28 49.6-50.048 74.048-3.392 9.344-6.464 19.2-9.216 27.968l-2.688 8.448a227.84 227.84 0 0 1-10.432 27.904c-25.28 52.928-47.36 84.544-66.752 104.96-18.944 19.968-36.48 30.464-55.168 39.808a45.376 45.376 0 0 0-25.088 40.576l-0.064 480.64c0 24.96 20.224 45.248 45.184 45.248h423.04c21.76 0 38.144-6.912 50.048-16.96a71.808 71.808 0 0 0 14.528-16.896l0.128-0.256 0.128-0.128 0.832-0.96 1.152-1.92c39.424-63.872 66.816-114.688 88.256-175.68a810.24 810.24 0 0 0 42.048-176.64c5.12-45.632 3.776-81.664-1.6-101.376a77.952 77.952 0 0 0-45.568-52.288 116.544 116.544 0 0 0-45.44-8.64l-192.768-2.688c28.096-115.072 10.048-181.568-2.496-214.336z m-604.864 247.04a45.184 45.184 0 0 1 45.12-47.296h67.008c24.96 0 45.184 20.288 45.184 45.248v480.64c0 24.96-20.224 45.12-45.184 45.12H131.84a45.184 45.184 0 0 1-45.12-43.072l-22.656-480.64z",
    "p-id": "1169"
  })
], -1)), _hoisted_8$1 = /* @__PURE__ */ _withScopeId$2(() => /* @__PURE__ */ createElementVNode("svg", {
  viewBox: "0 0 1024 1024",
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  "p-id": "1534"
}, [
  /* @__PURE__ */ createElementVNode("path", {
    d: "M668.928 166.912c-20.48-53.504-47.9744-84.7872-82.0224-94.9248-33.5872-10.0352-61.952 4.096-76.032 13.9776-27.5456 19.3536-41.216 49.664-50.0224 74.1376-3.3792 9.3184-6.4512 19.0976-9.216 27.9552l-2.6624 8.3968a227.8912 227.8912 0 0 1-10.3936 27.9552c-25.344 52.9408-47.4112 84.5312-66.7648 104.96-18.944 19.968-36.4544 30.464-55.1936 39.7824a45.3632 45.3632 0 0 0-25.088 40.5504l-0.1024 480.7168c0 24.9344 20.2752 45.2096 45.2096 45.2096h423.0656c21.7088 0 38.144-6.912 50.0224-16.9984a72.192 72.192 0 0 0 14.4896-16.896l0.2048-0.2048 0.0512-0.1536 0.8192-1.024 1.2288-1.8944c39.424-63.7952 66.7648-114.688 88.2176-175.616 24.4224-69.4784 36.8128-129.6896 42.0352-176.64 5.12-45.6704 3.7888-81.664-1.5872-101.376a77.9776 77.9776 0 0 0-45.568-52.3264 116.5824 116.5824 0 0 0-45.4144-8.6016l-192.8192-2.6624c28.1088-115.0976 10.0864-181.6064-2.4576-214.3744zM64.0512 413.9008a45.2096 45.2096 0 0 1 45.1584-47.36H176.128c24.9344 0 45.2096 20.2752 45.2096 45.2096v480.6144a45.2096 45.2096 0 0 1-45.2096 45.2096h-44.288a45.2096 45.2096 0 0 1-45.1584-43.0592L64 413.952z",
    "p-id": "1535"
  })
], -1)), _hoisted_9$1 = { key: 2 }, _hoisted_10$1 = /* @__PURE__ */ _withScopeId$2(() => /* @__PURE__ */ createElementVNode("svg", {
  viewBox: "0 0 1024 1024",
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  "p-id": "1320",
  width: "200",
  height: "200"
}, [
  /* @__PURE__ */ createElementVNode("path", {
    d: "M147.264 647.296V220.928c0-49.536 40.128-89.728 89.6-89.728H793.6c49.536 0 89.728 40.192 89.728 89.728v426.368c0 49.536-40.128 89.728-89.6 89.728h-145.216a47.04 47.04 0 0 0-28.16 9.408l-194.56 145.792a3.392 3.392 0 0 1-5.12-1.984l-26.752-116.672a47.04 47.04 0 0 0-45.824-36.544H236.992a89.728 89.728 0 0 1-89.728-89.728zM236.864 64A156.928 156.928 0 0 0 80 220.928l0.064 426.368a156.928 156.928 0 0 0 156.928 156.928h94.976l23.232 101.312 0.064 0.448a70.592 70.592 0 0 0 109.696 40.832l190.208-142.592H793.6a156.928 156.928 0 0 0 156.928-156.928l-0.064-426.368A156.928 156.928 0 0 0 793.536 64H236.928z m69.44 442.496a65.344 65.344 0 1 0 0-130.752 65.344 65.344 0 0 0 0 130.752z m268.8-65.344a65.344 65.344 0 1 1-130.752 0 65.344 65.344 0 0 1 130.752 0z m138.368 65.344a65.344 65.344 0 1 0 0-130.752 65.344 65.344 0 0 0 0 130.752z",
    "p-id": "1321"
  })
], -1)), _hoisted_11 = { key: 0 }, _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "content-box",
  props: {
    small: { type: Boolean },
    data: null,
    parentId: null
  },
  setup(e) {
    const t = e, o = reactive({
      active: !1,
      visible: !1
    }), n = ref(), r = ref(), { allEmoji: i } = inject(InjectionEmojiApi), { like: p, user: l, isUserInfo: a, getUser: c } = inject(InjectionContentBox);
    function u() {
      o.active = !o.active, o.active && nextTick(() => {
        var d;
        (d = n.value) == null || d.focus();
      });
    }
    function m(d) {
      var v;
      const _ = d.target;
      (v = r.value) != null && v.contains(_) || (o.active = !1);
    }
    const s = computed(() => useEmojiParse(i, t.data.content));
    return (d, _) => (openBlock(), createElementBlock("div", {
      class: normalizeClass(["comment", { small: e.small }])
    }, [
      createElementVNode("div", _hoisted_1$3, [
        createElementVNode("div", _hoisted_2$2, [
          createElementVNode("span", _hoisted_3$2, "\u6E38\u5BA2 \u6765\u81EA" + toDisplayString(e.data.address), 1),
          createElementVNode("time", _hoisted_4$2, toDisplayString(e.data.createTime), 1)
        ]),
        createVNode(unref(UFold), { unfold: "" }, {
          default: withCtx(() => [
            createElementVNode("div", { innerHTML: unref(s) }, null, 8, _hoisted_5$2)
          ]),
          _: 1
        }),
        createElementVNode("div", _hoisted_6$2, [
          createElementVNode("div", {
            class: "item",
            onClick: _[0] || (_[0] = (v) => unref(p)(e.data.id))
          }, [
            unref(l).likeIds.indexOf(e.data.id) == -1 ? (openBlock(), createBlock(unref(UIcon), { key: 0 }, {
              default: withCtx(() => [
                _hoisted_7$1
              ]),
              _: 1
            })) : (openBlock(), createBlock(unref(UIcon), {
              key: 1,
              color: "#1e80ff"
            }, {
              default: withCtx(() => [
                _hoisted_8$1
              ]),
              _: 1
            })),
            e.data.like != 0 ? (openBlock(), createElementBlock("span", _hoisted_9$1, toDisplayString(e.data.like), 1)) : createCommentVNode("", !0)
          ]),
          createElementVNode("div", {
            ref_key: "btnRef",
            ref: r,
            class: normalizeClass(["item", { active: o.active }]),
            onClick: u
          }, [
            createVNode(unref(UIcon), null, {
              default: withCtx(() => [
                _hoisted_10$1
              ]),
              _: 1
            }),
            createElementVNode("span", null, toDisplayString(o.active ? "\u53D6\u6D88\u56DE\u590D" : "\u56DE\u590D"), 1)
          ], 2),
          createVNode(Operation, {
            id: e.data.id,
            "parent-id": e.data.parentId,
            uid: e.data.uid
          }, null, 8, ["id", "parent-id", "uid"])
        ]),
        o.active ? (openBlock(), createElementBlock("div", _hoisted_11, [
          createVNode(CommentBox, {
            ref_key: "commentRef",
            ref: n,
            "parent-id": e.parentId,
            placeholder: `\u56DE\u590D @${e.data.username}...`,
            replay: e.data.parentId ? e.data.username : void 0,
            "content-btn": "\u53D1\u5E03",
            style: { "margin-top": "12px" },
            onHide: m,
            onClose: _[1] || (_[1] = (v) => o.active = !1)
          }, null, 8, ["parent-id", "placeholder", "replay"])
        ])) : createCommentVNode("", !0),
        renderSlot(d.$slots, "default", {}, void 0, !0)
      ])
    ], 2));
  }
}), contentBox_vue_vue_type_style_index_0_scoped_f3b22390_lang = "", ContentBox = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-f3b22390"]]), _withScopeId$1 = (e) => (pushScopeId("data-v-5aece8eb"), e = e(), popScopeId(), e), _hoisted_1$2 = {
  key: 0,
  class: "reply-box"
}, _hoisted_2$1 = { class: "reply-list" }, _hoisted_3$1 = {
  key: 0,
  class: "fetch-more"
}, _hoisted_4$1 = { key: 0 }, _hoisted_5$1 = { key: 1 }, _hoisted_6$1 = { key: 0 }, _hoisted_7 = /* @__PURE__ */ createTextVNode(" \u70B9\u51FB\u67E5\u770B "), _hoisted_8 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createElementVNode("svg", {
  width: "12",
  height: "12",
  viewBox: "0 0 12 12",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  class: ""
}, [
  /* @__PURE__ */ createElementVNode("path", {
    "data-v-d6f79dbc": "",
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M5.99976 7.93206L10.0656 3.86619C10.1633 3.76856 10.3215 3.76856 10.4192 3.86619L10.7727 4.21975C10.8704 4.31738 10.8704 4.47567 10.7727 4.5733L6.35331 8.99272C6.15805 9.18798 5.84147 9.18798 5.6462 8.99272L1.22679 4.5733C1.12916 4.47567 1.12916 4.31738 1.22679 4.21975L1.58034 3.86619C1.67797 3.76856 1.83626 3.76856 1.93389 3.86619L5.99976 7.93206Z"
  })
], -1)), _hoisted_9 = [
  _hoisted_7,
  _hoisted_8
], _hoisted_10 = {
  key: 1,
  class: "fetch-more"
}, _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "reply-box",
  props: {
    data: null,
    parentId: null
  },
  setup(e) {
    const t = e, o = reactive({
      loading: !1,
      over: !1,
      pageNum: 1,
      pageSize: 5
    }), { replyPage: n, showSize: r, page: i, comments: p } = inject(InjectionReply), l = computed(() => {
      let s = {
        total: 0,
        length: 0,
        list: []
      };
      if (t.data && (s = {
        total: t.data.total,
        length: t.data.list.length,
        list: t.data.list
      }), i && (s.list = s.list.slice(0, o.pageSize)), !o.over) {
        let d = s.list.slice(0, r);
        s.list = d;
      }
      return s;
    }), a = () => {
      o.over = !0;
    }, c = (s) => {
      p.value.forEach((d) => {
        d.id == t.parentId && d.reply && (d.reply.list = s);
      });
    }, u = (s) => {
      o.pageNum = s, n(t.parentId, s, o.pageSize, (d) => c(d));
    }, m = (s) => {
      o.pageSize = s, n(t.parentId, o.pageNum, s, (d) => c(d));
    };
    return (s, d) => unref(l).length > 0 ? (openBlock(), createElementBlock("div", _hoisted_1$2, [
      createElementVNode("div", _hoisted_2$1, [
        (openBlock(!0), createElementBlock(Fragment, null, renderList(unref(l).list, (_, v) => (openBlock(), createBlock(ContentBox, {
          key: v,
          "parent-id": e.parentId,
          data: _,
          small: ""
        }, {
          userInfo: withCtx(() => [
            renderSlot(s.$slots, "userInfo", {}, void 0, !0)
          ]),
          _: 2
        }, 1032, ["parent-id", "data"]))), 128)),
        unref(l).length > unref(r) ? (openBlock(), createElementBlock("div", _hoisted_3$1, [
          o.loading ? (openBlock(), createElementBlock("span", _hoisted_4$1, "\u52A0\u8F7D\u4E2D...")) : (openBlock(), createElementBlock("div", _hoisted_5$1, [
            o.over ? createCommentVNode("", !0) : (openBlock(), createElementBlock("div", _hoisted_6$1, [
              createTextVNode(" \u5171" + toDisplayString(unref(l).total) + "\u6761\u56DE\u590D, ", 1),
              createElementVNode("span", {
                class: "fetch-more-comment select-none",
                onClick: a
              }, _hoisted_9)
            ]))
          ]))
        ])) : createCommentVNode("", !0),
        o.over ? (openBlock(), createElementBlock("div", _hoisted_10, [
          unref(i) ? (openBlock(), createBlock(unref(ElPagination), {
            key: 0,
            small: "",
            "hide-on-single-page": "",
            layout: "total, prev, pager, next",
            total: unref(l).total,
            "page-size": o.pageSize,
            onCurrentChange: u,
            onSizeChange: m
          }, null, 8, ["total", "page-size"])) : createCommentVNode("", !0)
        ])) : createCommentVNode("", !0)
      ])
    ])) : createCommentVNode("", !0);
  }
}), replyBox_vue_vue_type_style_index_0_scoped_5aece8eb_lang = "", ReplyBox = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-5aece8eb"]]), _hoisted_1$1 = {
  key: 0,
  class: "comment-list"
}, _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "comment-list",
  props: {
    data: null
  },
  setup(e) {
    return (t, o) => e.data ? (openBlock(), createElementBlock("div", _hoisted_1$1, [
      (openBlock(!0), createElementBlock(Fragment, null, renderList(e.data, (n, r) => (openBlock(), createBlock(ContentBox, {
        key: r,
        "parent-id": n.id,
        data: n
      }, {
        userInfo: withCtx(() => [
          renderSlot(t.$slots, "userInfo")
        ]),
        default: withCtx(() => [
          createVNode(ReplyBox, {
            "parent-id": n.id,
            data: n.reply
          }, {
            userInfo: withCtx(() => [
              renderSlot(t.$slots, "userInfo")
            ]),
            _: 2
          }, 1032, ["parent-id", "data"])
        ]),
        _: 2
      }, 1032, ["parent-id", "data"]))), 128))
    ])) : createCommentVNode("", !0);
  }
}), _withScopeId = (e) => (pushScopeId("data-v-2e3ca3a6"), e = e(), popScopeId(), e), _hoisted_1 = { class: "u-comment" }, _hoisted_2 = { class: "comment-form" }, _hoisted_3 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createElementVNode("div", { class: "header" }, [
  /* @__PURE__ */ createElementVNode("span", { class: "header-title" }, "\u8BC4\u8BBA")
], -1)), _hoisted_4 = { class: "content" }, _hoisted_5 = { class: "comment-list-wrapper" }, _hoisted_6 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createElementVNode("div", { class: "title" }, "\u5168\u90E8\u8BC4\u8BBA", -1)), __default__ = {
  name: "UComment"
}, _sfc_main = /* @__PURE__ */ defineComponent({
  ...__default__,
  props: {
    config: null,
    showSize: { default: 3 },
    page: { type: Boolean, default: !1 }
  },
  emits: ["submit", "like", "replyPage", "getUser", "report", "remove"],
  setup(e, { emit: t }) {
    const o = e, n = useSlots(), r = toRef(o.config, "comments"), i = (c) => {
      t("submit", c.content, c.parentId, (u) => {
        if (c.finish(), c.parentId) {
          let m = r.value.find((s) => s.id == c.parentId);
          if (m) {
            let s = m.reply;
            s ? (s.list.unshift(u), s.total++) : m.reply = {
              total: 1,
              list: [u]
            };
          }
        } else
          r.value.unshift(u);
      });
    }, p = (c) => {
      const u = (s, d) => {
        let _ = null;
        r.value.forEach((v) => {
          var y;
          v.id != s ? _ = (y = v.reply) == null ? void 0 : y.list.find((b) => b.id == s) : _ = v, _ && (_.like += d);
        });
      };
      let m = o.config.user.likeIds;
      t("like", c, () => {
        if (m.indexOf(c) == -1)
          m.push(c), u(c, 1);
        else {
          let s = m.findIndex((d) => d == c);
          s != -1 && m.splice(s, 1), u(c, -1);
        }
      });
    }, l = {
      replyPage: (c, u, m, s) => {
        t("replyPage", { parentId: c, pageNum: u, pageSize: m, finish: s });
      },
      showSize: o.showSize,
      page: o.page,
      comments: r
    }, a = {
      user: o.config.user,
      like: p,
      isUserInfo: n.userInfo != null,
      getUser: (c, u) => t("getUser", c, u),
      report: (c, u) => t("report", c, u),
      remove: (c, u, m) => t("remove", c, () => {
        if (m(), u) {
          let s = r.value.find((_) => _.id == u), d = s == null ? void 0 : s.reply;
          if (d) {
            let _ = d.list.findIndex((v) => v.id == c);
            _ != -1 && (d.list.splice(_, 1), d.total--);
          }
        } else {
          let s = r.value.findIndex((d) => d.id == c);
          s != -1 && r.value.splice(s, 1);
        }
      })
    };
    return provide(InjectionCommentFun, i), provide(InjectionEmojiApi, o.config.emoji), provide(InjectionReply, l), provide(InjectionContentBox, a), (c, u) => (openBlock(), createElementBlock("div", _hoisted_1, [
      createElementVNode("div", _hoisted_2, [
        _hoisted_3,
        createElementVNode("div", _hoisted_4, [
          createVNode(CommentBox, {
            placeholder: "\u8F93\u5165\u8BC4\u8BBA\uFF08Enter\u6362\u884C\uFF0CCtrl + Enter\u53D1\u9001\uFF09",
            "content-btn": "\u53D1\u8868\u8BC4\u8BBA"
          })
        ])
      ]),
      createElementVNode("div", _hoisted_5, [
        renderSlot(c.$slots, "list-title", {}, () => [
          _hoisted_6
        ], !0),
        createVNode(_sfc_main$1, { data: unref(r) }, {
          userInfo: withCtx(() => [
            renderSlot(c.$slots, "userInfo", {}, void 0, !0)
          ]),
          _: 3
        }, 8, ["data"])
      ])
    ]));
  }
}), comment_vue_vue_type_style_index_0_scoped_2e3ca3a6_lang = "", commentVue = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-2e3ca3a6"]]), InjectionCommentFun = Symbol(), InjectionReply = Symbol(), InjectionContentBox = Symbol(), UComment = withInstall(commentVue), components = [
  UComment,
  UEditor,
  UFold,
  UIcon,
  UEmoji
], index$1 = "", index = {
  install: (e) => {
    components.forEach((t) => {
      e.use(t);
    });
  }
};
export {
  I as ElAvatar,
  N as ElButton,
  V as ElCarousel,
  A as ElImage,
  O as ElInput,
  L as ElPagination,
  F as ElPopover,
  z as ElScrollbar,
  InjectionCommentFun,
  InjectionContentBox,
  InjectionEmojiApi,
  InjectionReply,
  UComment,
  UEditor,
  UEmoji,
  UFold,
  UIcon,
  cloneDeep,
  createGlobalNode,
  debounce,
  deepTree,
  index as default,
  flattenDeep,
  isArray,
  isBoolean,
  isEmpty,
  isFunction$2 as isFunction,
  isNull,
  isNumber,
  isObject$2 as isObject,
  isString,
  removeGlobalNode,
  revDeepTree,
  storage,
  throttle,
  useBrowser,
  useEmojiParse,
  withInstall
};
