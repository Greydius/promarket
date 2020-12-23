// Avoid `console` errors in browsers that lack a console.
(function () {
    var method;
    var noop = function () {
    };
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

// Place any jQuery/helper plugins in here.
/**
 * Swiper 5.4.5
 * Most modern mobile touch slider and framework with hardware accelerated transitions
 * http://swiperjs.com
 *
 * Copyright 2014-2020 Vladimir Kharlampidi
 *
 * Released under the MIT License
 *
 * Released on: June 16, 2020
 */

!function (e, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = e || self).Swiper = t()
}(this, (function () {
    "use strict";

    function e(e) {
        return null !== e && "object" == typeof e && "constructor" in e && e.constructor === Object
    }

    function t(i, s) {
        void 0 === i && (i = {}), void 0 === s && (s = {}), Object.keys(s).forEach((function (a) {
            void 0 === i[a] ? i[a] = s[a] : e(s[a]) && e(i[a]) && Object.keys(s[a]).length > 0 && t(i[a], s[a])
        }))
    }

    var i = "undefined" != typeof document ? document : {}, s = {
        body: {}, addEventListener: function () {
        }, removeEventListener: function () {
        }, activeElement: {
            blur: function () {
            }, nodeName: ""
        }, querySelector: function () {
            return null
        }, querySelectorAll: function () {
            return []
        }, getElementById: function () {
            return null
        }, createEvent: function () {
            return {
                initEvent: function () {
                }
            }
        }, createElement: function () {
            return {
                children: [], childNodes: [], style: {}, setAttribute: function () {
                }, getElementsByTagName: function () {
                    return []
                }
            }
        }, createElementNS: function () {
            return {}
        }, importNode: function () {
            return null
        }, location: {hash: "", host: "", hostname: "", href: "", origin: "", pathname: "", protocol: "", search: ""}
    };
    t(i, s);
    var a = "undefined" != typeof window ? window : {};
    t(a, {
        document: s,
        navigator: {userAgent: ""},
        location: {hash: "", host: "", hostname: "", href: "", origin: "", pathname: "", protocol: "", search: ""},
        history: {
            replaceState: function () {
            }, pushState: function () {
            }, go: function () {
            }, back: function () {
            }
        },
        CustomEvent: function () {
            return this
        },
        addEventListener: function () {
        },
        removeEventListener: function () {
        },
        getComputedStyle: function () {
            return {
                getPropertyValue: function () {
                    return ""
                }
            }
        },
        Image: function () {
        },
        Date: function () {
        },
        screen: {},
        setTimeout: function () {
        },
        clearTimeout: function () {
        },
        matchMedia: function () {
            return {}
        }
    });
    var r = function (e) {
        for (var t = 0; t < e.length; t += 1) this[t] = e[t];
        return this.length = e.length, this
    };

    function n(e, t) {
        var s = [], n = 0;
        if (e && !t && e instanceof r) return e;
        if (e) if ("string" == typeof e) {
            var o, l, d = e.trim();
            if (d.indexOf("<") >= 0 && d.indexOf(">") >= 0) {
                var h = "div";
                for (0 === d.indexOf("<li") && (h = "ul"), 0 === d.indexOf("<tr") && (h = "tbody"), 0 !== d.indexOf("<td") && 0 !== d.indexOf("<th") || (h = "tr"), 0 === d.indexOf("<tbody") && (h = "table"), 0 === d.indexOf("<option") && (h = "select"), (l = i.createElement(h)).innerHTML = d, n = 0; n < l.childNodes.length; n += 1) s.push(l.childNodes[n])
            } else for (o = t || "#" !== e[0] || e.match(/[ .<>:~]/) ? (t || i).querySelectorAll(e.trim()) : [i.getElementById(e.trim().split("#")[1])], n = 0; n < o.length; n += 1) o[n] && s.push(o[n])
        } else if (e.nodeType || e === a || e === i) s.push(e); else if (e.length > 0 && e[0].nodeType) for (n = 0; n < e.length; n += 1) s.push(e[n]);
        return new r(s)
    }

    function o(e) {
        for (var t = [], i = 0; i < e.length; i += 1) -1 === t.indexOf(e[i]) && t.push(e[i]);
        return t
    }

    n.fn = r.prototype, n.Class = r, n.Dom7 = r;
    var l = {
        addClass: function (e) {
            if (void 0 === e) return this;
            for (var t = e.split(" "), i = 0; i < t.length; i += 1) for (var s = 0; s < this.length; s += 1) void 0 !== this[s] && void 0 !== this[s].classList && this[s].classList.add(t[i]);
            return this
        }, removeClass: function (e) {
            for (var t = e.split(" "), i = 0; i < t.length; i += 1) for (var s = 0; s < this.length; s += 1) void 0 !== this[s] && void 0 !== this[s].classList && this[s].classList.remove(t[i]);
            return this
        }, hasClass: function (e) {
            return !!this[0] && this[0].classList.contains(e)
        }, toggleClass: function (e) {
            for (var t = e.split(" "), i = 0; i < t.length; i += 1) for (var s = 0; s < this.length; s += 1) void 0 !== this[s] && void 0 !== this[s].classList && this[s].classList.toggle(t[i]);
            return this
        }, attr: function (e, t) {
            var i = arguments;
            if (1 === arguments.length && "string" == typeof e) return this[0] ? this[0].getAttribute(e) : void 0;
            for (var s = 0; s < this.length; s += 1) if (2 === i.length) this[s].setAttribute(e, t); else for (var a in e) this[s][a] = e[a], this[s].setAttribute(a, e[a]);
            return this
        }, removeAttr: function (e) {
            for (var t = 0; t < this.length; t += 1) this[t].removeAttribute(e);
            return this
        }, data: function (e, t) {
            var i;
            if (void 0 !== t) {
                for (var s = 0; s < this.length; s += 1) (i = this[s]).dom7ElementDataStorage || (i.dom7ElementDataStorage = {}), i.dom7ElementDataStorage[e] = t;
                return this
            }
            if (i = this[0]) {
                if (i.dom7ElementDataStorage && e in i.dom7ElementDataStorage) return i.dom7ElementDataStorage[e];
                var a = i.getAttribute("data-" + e);
                return a || void 0
            }
        }, transform: function (e) {
            for (var t = 0; t < this.length; t += 1) {
                var i = this[t].style;
                i.webkitTransform = e, i.transform = e
            }
            return this
        }, transition: function (e) {
            "string" != typeof e && (e += "ms");
            for (var t = 0; t < this.length; t += 1) {
                var i = this[t].style;
                i.webkitTransitionDuration = e, i.transitionDuration = e
            }
            return this
        }, on: function () {
            for (var e, t = [], i = arguments.length; i--;) t[i] = arguments[i];
            var s = t[0], a = t[1], r = t[2], o = t[3];

            function l(e) {
                var t = e.target;
                if (t) {
                    var i = e.target.dom7EventData || [];
                    if (i.indexOf(e) < 0 && i.unshift(e), n(t).is(a)) r.apply(t, i); else for (var s = n(t).parents(), o = 0; o < s.length; o += 1) n(s[o]).is(a) && r.apply(s[o], i)
                }
            }

            function d(e) {
                var t = e && e.target && e.target.dom7EventData || [];
                t.indexOf(e) < 0 && t.unshift(e), r.apply(this, t)
            }

            "function" == typeof t[1] && (s = (e = t)[0], r = e[1], o = e[2], a = void 0), o || (o = !1);
            for (var h, p = s.split(" "), c = 0; c < this.length; c += 1) {
                var u = this[c];
                if (a) for (h = 0; h < p.length; h += 1) {
                    var v = p[h];
                    u.dom7LiveListeners || (u.dom7LiveListeners = {}), u.dom7LiveListeners[v] || (u.dom7LiveListeners[v] = []), u.dom7LiveListeners[v].push({
                        listener: r,
                        proxyListener: l
                    }), u.addEventListener(v, l, o)
                } else for (h = 0; h < p.length; h += 1) {
                    var f = p[h];
                    u.dom7Listeners || (u.dom7Listeners = {}), u.dom7Listeners[f] || (u.dom7Listeners[f] = []), u.dom7Listeners[f].push({
                        listener: r,
                        proxyListener: d
                    }), u.addEventListener(f, d, o)
                }
            }
            return this
        }, off: function () {
            for (var e, t = [], i = arguments.length; i--;) t[i] = arguments[i];
            var s = t[0], a = t[1], r = t[2], n = t[3];
            "function" == typeof t[1] && (s = (e = t)[0], r = e[1], n = e[2], a = void 0), n || (n = !1);
            for (var o = s.split(" "), l = 0; l < o.length; l += 1) for (var d = o[l], h = 0; h < this.length; h += 1) {
                var p = this[h], c = void 0;
                if (!a && p.dom7Listeners ? c = p.dom7Listeners[d] : a && p.dom7LiveListeners && (c = p.dom7LiveListeners[d]), c && c.length) for (var u = c.length - 1; u >= 0; u -= 1) {
                    var v = c[u];
                    r && v.listener === r || r && v.listener && v.listener.dom7proxy && v.listener.dom7proxy === r ? (p.removeEventListener(d, v.proxyListener, n), c.splice(u, 1)) : r || (p.removeEventListener(d, v.proxyListener, n), c.splice(u, 1))
                }
            }
            return this
        }, trigger: function () {
            for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
            for (var s = e[0].split(" "), r = e[1], n = 0; n < s.length; n += 1) for (var o = s[n], l = 0; l < this.length; l += 1) {
                var d = this[l], h = void 0;
                try {
                    h = new a.CustomEvent(o, {detail: r, bubbles: !0, cancelable: !0})
                } catch (e) {
                    (h = i.createEvent("Event")).initEvent(o, !0, !0), h.detail = r
                }
                d.dom7EventData = e.filter((function (e, t) {
                    return t > 0
                })), d.dispatchEvent(h), d.dom7EventData = [], delete d.dom7EventData
            }
            return this
        }, transitionEnd: function (e) {
            var t, i = ["webkitTransitionEnd", "transitionend"], s = this;

            function a(r) {
                if (r.target === this) for (e.call(this, r), t = 0; t < i.length; t += 1) s.off(i[t], a)
            }

            if (e) for (t = 0; t < i.length; t += 1) s.on(i[t], a);
            return this
        }, outerWidth: function (e) {
            if (this.length > 0) {
                if (e) {
                    var t = this.styles();
                    return this[0].offsetWidth + parseFloat(t.getPropertyValue("margin-right")) + parseFloat(t.getPropertyValue("margin-left"))
                }
                return this[0].offsetWidth
            }
            return null
        }, outerHeight: function (e) {
            if (this.length > 0) {
                if (e) {
                    var t = this.styles();
                    return this[0].offsetHeight + parseFloat(t.getPropertyValue("margin-top")) + parseFloat(t.getPropertyValue("margin-bottom"))
                }
                return this[0].offsetHeight
            }
            return null
        }, offset: function () {
            if (this.length > 0) {
                var e = this[0], t = e.getBoundingClientRect(), s = i.body, r = e.clientTop || s.clientTop || 0,
                    n = e.clientLeft || s.clientLeft || 0, o = e === a ? a.scrollY : e.scrollTop,
                    l = e === a ? a.scrollX : e.scrollLeft;
                return {top: t.top + o - r, left: t.left + l - n}
            }
            return null
        }, css: function (e, t) {
            var i;
            if (1 === arguments.length) {
                if ("string" != typeof e) {
                    for (i = 0; i < this.length; i += 1) for (var s in e) this[i].style[s] = e[s];
                    return this
                }
                if (this[0]) return a.getComputedStyle(this[0], null).getPropertyValue(e)
            }
            if (2 === arguments.length && "string" == typeof e) {
                for (i = 0; i < this.length; i += 1) this[i].style[e] = t;
                return this
            }
            return this
        }, each: function (e) {
            if (!e) return this;
            for (var t = 0; t < this.length; t += 1) if (!1 === e.call(this[t], t, this[t])) return this;
            return this
        }, html: function (e) {
            if (void 0 === e) return this[0] ? this[0].innerHTML : void 0;
            for (var t = 0; t < this.length; t += 1) this[t].innerHTML = e;
            return this
        }, text: function (e) {
            if (void 0 === e) return this[0] ? this[0].textContent.trim() : null;
            for (var t = 0; t < this.length; t += 1) this[t].textContent = e;
            return this
        }, is: function (e) {
            var t, s, o = this[0];
            if (!o || void 0 === e) return !1;
            if ("string" == typeof e) {
                if (o.matches) return o.matches(e);
                if (o.webkitMatchesSelector) return o.webkitMatchesSelector(e);
                if (o.msMatchesSelector) return o.msMatchesSelector(e);
                for (t = n(e), s = 0; s < t.length; s += 1) if (t[s] === o) return !0;
                return !1
            }
            if (e === i) return o === i;
            if (e === a) return o === a;
            if (e.nodeType || e instanceof r) {
                for (t = e.nodeType ? [e] : e, s = 0; s < t.length; s += 1) if (t[s] === o) return !0;
                return !1
            }
            return !1
        }, index: function () {
            var e, t = this[0];
            if (t) {
                for (e = 0; null !== (t = t.previousSibling);) 1 === t.nodeType && (e += 1);
                return e
            }
        }, eq: function (e) {
            if (void 0 === e) return this;
            var t, i = this.length;
            return new r(e > i - 1 ? [] : e < 0 ? (t = i + e) < 0 ? [] : [this[t]] : [this[e]])
        }, append: function () {
            for (var e, t = [], s = arguments.length; s--;) t[s] = arguments[s];
            for (var a = 0; a < t.length; a += 1) {
                e = t[a];
                for (var n = 0; n < this.length; n += 1) if ("string" == typeof e) {
                    var o = i.createElement("div");
                    for (o.innerHTML = e; o.firstChild;) this[n].appendChild(o.firstChild)
                } else if (e instanceof r) for (var l = 0; l < e.length; l += 1) this[n].appendChild(e[l]); else this[n].appendChild(e)
            }
            return this
        }, prepend: function (e) {
            var t, s;
            for (t = 0; t < this.length; t += 1) if ("string" == typeof e) {
                var a = i.createElement("div");
                for (a.innerHTML = e, s = a.childNodes.length - 1; s >= 0; s -= 1) this[t].insertBefore(a.childNodes[s], this[t].childNodes[0])
            } else if (e instanceof r) for (s = 0; s < e.length; s += 1) this[t].insertBefore(e[s], this[t].childNodes[0]); else this[t].insertBefore(e, this[t].childNodes[0]);
            return this
        }, next: function (e) {
            return this.length > 0 ? e ? this[0].nextElementSibling && n(this[0].nextElementSibling).is(e) ? new r([this[0].nextElementSibling]) : new r([]) : this[0].nextElementSibling ? new r([this[0].nextElementSibling]) : new r([]) : new r([])
        }, nextAll: function (e) {
            var t = [], i = this[0];
            if (!i) return new r([]);
            for (; i.nextElementSibling;) {
                var s = i.nextElementSibling;
                e ? n(s).is(e) && t.push(s) : t.push(s), i = s
            }
            return new r(t)
        }, prev: function (e) {
            if (this.length > 0) {
                var t = this[0];
                return e ? t.previousElementSibling && n(t.previousElementSibling).is(e) ? new r([t.previousElementSibling]) : new r([]) : t.previousElementSibling ? new r([t.previousElementSibling]) : new r([])
            }
            return new r([])
        }, prevAll: function (e) {
            var t = [], i = this[0];
            if (!i) return new r([]);
            for (; i.previousElementSibling;) {
                var s = i.previousElementSibling;
                e ? n(s).is(e) && t.push(s) : t.push(s), i = s
            }
            return new r(t)
        }, parent: function (e) {
            for (var t = [], i = 0; i < this.length; i += 1) null !== this[i].parentNode && (e ? n(this[i].parentNode).is(e) && t.push(this[i].parentNode) : t.push(this[i].parentNode));
            return n(o(t))
        }, parents: function (e) {
            for (var t = [], i = 0; i < this.length; i += 1) for (var s = this[i].parentNode; s;) e ? n(s).is(e) && t.push(s) : t.push(s), s = s.parentNode;
            return n(o(t))
        }, closest: function (e) {
            var t = this;
            return void 0 === e ? new r([]) : (t.is(e) || (t = t.parents(e).eq(0)), t)
        }, find: function (e) {
            for (var t = [], i = 0; i < this.length; i += 1) for (var s = this[i].querySelectorAll(e), a = 0; a < s.length; a += 1) t.push(s[a]);
            return new r(t)
        }, children: function (e) {
            for (var t = [], i = 0; i < this.length; i += 1) for (var s = this[i].childNodes, a = 0; a < s.length; a += 1) e ? 1 === s[a].nodeType && n(s[a]).is(e) && t.push(s[a]) : 1 === s[a].nodeType && t.push(s[a]);
            return new r(o(t))
        }, filter: function (e) {
            for (var t = [], i = 0; i < this.length; i += 1) e.call(this[i], i, this[i]) && t.push(this[i]);
            return new r(t)
        }, remove: function () {
            for (var e = 0; e < this.length; e += 1) this[e].parentNode && this[e].parentNode.removeChild(this[e]);
            return this
        }, add: function () {
            for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
            var i, s, a = this;
            for (i = 0; i < e.length; i += 1) {
                var r = n(e[i]);
                for (s = 0; s < r.length; s += 1) a[a.length] = r[s], a.length += 1
            }
            return a
        }, styles: function () {
            return this[0] ? a.getComputedStyle(this[0], null) : {}
        }
    };
    Object.keys(l).forEach((function (e) {
        n.fn[e] = n.fn[e] || l[e]
    }));
    var d = {
        deleteProps: function (e) {
            var t = e;
            Object.keys(t).forEach((function (e) {
                try {
                    t[e] = null
                } catch (e) {
                }
                try {
                    delete t[e]
                } catch (e) {
                }
            }))
        }, nextTick: function (e, t) {
            return void 0 === t && (t = 0), setTimeout(e, t)
        }, now: function () {
            return Date.now()
        }, getTranslate: function (e, t) {
            var i, s, r;
            void 0 === t && (t = "x");
            var n = a.getComputedStyle(e, null);
            return a.WebKitCSSMatrix ? ((s = n.transform || n.webkitTransform).split(",").length > 6 && (s = s.split(", ").map((function (e) {
                return e.replace(",", ".")
            })).join(", ")), r = new a.WebKitCSSMatrix("none" === s ? "" : s)) : i = (r = n.MozTransform || n.OTransform || n.MsTransform || n.msTransform || n.transform || n.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,")).toString().split(","), "x" === t && (s = a.WebKitCSSMatrix ? r.m41 : 16 === i.length ? parseFloat(i[12]) : parseFloat(i[4])), "y" === t && (s = a.WebKitCSSMatrix ? r.m42 : 16 === i.length ? parseFloat(i[13]) : parseFloat(i[5])), s || 0
        }, parseUrlQuery: function (e) {
            var t, i, s, r, n = {}, o = e || a.location.href;
            if ("string" == typeof o && o.length) for (r = (i = (o = o.indexOf("?") > -1 ? o.replace(/\S*\?/, "") : "").split("&").filter((function (e) {
                return "" !== e
            }))).length, t = 0; t < r; t += 1) s = i[t].replace(/#\S+/g, "").split("="), n[decodeURIComponent(s[0])] = void 0 === s[1] ? void 0 : decodeURIComponent(s[1]) || "";
            return n
        }, isObject: function (e) {
            return "object" == typeof e && null !== e && e.constructor && e.constructor === Object
        }, extend: function () {
            for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
            for (var i = Object(e[0]), s = 1; s < e.length; s += 1) {
                var a = e[s];
                if (null != a) for (var r = Object.keys(Object(a)), n = 0, o = r.length; n < o; n += 1) {
                    var l = r[n], h = Object.getOwnPropertyDescriptor(a, l);
                    void 0 !== h && h.enumerable && (d.isObject(i[l]) && d.isObject(a[l]) ? d.extend(i[l], a[l]) : !d.isObject(i[l]) && d.isObject(a[l]) ? (i[l] = {}, d.extend(i[l], a[l])) : i[l] = a[l])
                }
            }
            return i
        }
    }, h = {
        touch: !!("ontouchstart" in a || a.DocumentTouch && i instanceof a.DocumentTouch),
        pointerEvents: !!a.PointerEvent && "maxTouchPoints" in a.navigator && a.navigator.maxTouchPoints >= 0,
        observer: "MutationObserver" in a || "WebkitMutationObserver" in a,
        passiveListener: function () {
            var e = !1;
            try {
                var t = Object.defineProperty({}, "passive", {
                    get: function () {
                        e = !0
                    }
                });
                a.addEventListener("testPassiveListener", null, t)
            } catch (e) {
            }
            return e
        }(),
        gestures: "ongesturestart" in a
    }, p = function (e) {
        void 0 === e && (e = {});
        var t = this;
        t.params = e, t.eventsListeners = {}, t.params && t.params.on && Object.keys(t.params.on).forEach((function (e) {
            t.on(e, t.params.on[e])
        }))
    }, c = {components: {configurable: !0}};
    p.prototype.on = function (e, t, i) {
        var s = this;
        if ("function" != typeof t) return s;
        var a = i ? "unshift" : "push";
        return e.split(" ").forEach((function (e) {
            s.eventsListeners[e] || (s.eventsListeners[e] = []), s.eventsListeners[e][a](t)
        })), s
    }, p.prototype.once = function (e, t, i) {
        var s = this;
        if ("function" != typeof t) return s;

        function a() {
            for (var i = [], r = arguments.length; r--;) i[r] = arguments[r];
            s.off(e, a), a.f7proxy && delete a.f7proxy, t.apply(s, i)
        }

        return a.f7proxy = t, s.on(e, a, i)
    }, p.prototype.off = function (e, t) {
        var i = this;
        return i.eventsListeners ? (e.split(" ").forEach((function (e) {
            void 0 === t ? i.eventsListeners[e] = [] : i.eventsListeners[e] && i.eventsListeners[e].length && i.eventsListeners[e].forEach((function (s, a) {
                (s === t || s.f7proxy && s.f7proxy === t) && i.eventsListeners[e].splice(a, 1)
            }))
        })), i) : i
    }, p.prototype.emit = function () {
        for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
        var i, s, a, r = this;
        if (!r.eventsListeners) return r;
        "string" == typeof e[0] || Array.isArray(e[0]) ? (i = e[0], s = e.slice(1, e.length), a = r) : (i = e[0].events, s = e[0].data, a = e[0].context || r);
        var n = Array.isArray(i) ? i : i.split(" ");
        return n.forEach((function (e) {
            if (r.eventsListeners && r.eventsListeners[e]) {
                var t = [];
                r.eventsListeners[e].forEach((function (e) {
                    t.push(e)
                })), t.forEach((function (e) {
                    e.apply(a, s)
                }))
            }
        })), r
    }, p.prototype.useModulesParams = function (e) {
        var t = this;
        t.modules && Object.keys(t.modules).forEach((function (i) {
            var s = t.modules[i];
            s.params && d.extend(e, s.params)
        }))
    }, p.prototype.useModules = function (e) {
        void 0 === e && (e = {});
        var t = this;
        t.modules && Object.keys(t.modules).forEach((function (i) {
            var s = t.modules[i], a = e[i] || {};
            s.instance && Object.keys(s.instance).forEach((function (e) {
                var i = s.instance[e];
                t[e] = "function" == typeof i ? i.bind(t) : i
            })), s.on && t.on && Object.keys(s.on).forEach((function (e) {
                t.on(e, s.on[e])
            })), s.create && s.create.bind(t)(a)
        }))
    }, c.components.set = function (e) {
        this.use && this.use(e)
    }, p.installModule = function (e) {
        for (var t = [], i = arguments.length - 1; i-- > 0;) t[i] = arguments[i + 1];
        var s = this;
        s.prototype.modules || (s.prototype.modules = {});
        var a = e.name || Object.keys(s.prototype.modules).length + "_" + d.now();
        return s.prototype.modules[a] = e, e.proto && Object.keys(e.proto).forEach((function (t) {
            s.prototype[t] = e.proto[t]
        })), e.static && Object.keys(e.static).forEach((function (t) {
            s[t] = e.static[t]
        })), e.install && e.install.apply(s, t), s
    }, p.use = function (e) {
        for (var t = [], i = arguments.length - 1; i-- > 0;) t[i] = arguments[i + 1];
        var s = this;
        return Array.isArray(e) ? (e.forEach((function (e) {
            return s.installModule(e)
        })), s) : s.installModule.apply(s, [e].concat(t))
    }, Object.defineProperties(p, c);
    var u = {
        updateSize: function () {
            var e, t, i = this.$el;
            e = void 0 !== this.params.width ? this.params.width : i[0].clientWidth, t = void 0 !== this.params.height ? this.params.height : i[0].clientHeight, 0 === e && this.isHorizontal() || 0 === t && this.isVertical() || (e = e - parseInt(i.css("padding-left"), 10) - parseInt(i.css("padding-right"), 10), t = t - parseInt(i.css("padding-top"), 10) - parseInt(i.css("padding-bottom"), 10), d.extend(this, {
                width: e,
                height: t,
                size: this.isHorizontal() ? e : t
            }))
        }, updateSlides: function () {
            var e = this.params, t = this.$wrapperEl, i = this.size, s = this.rtlTranslate, r = this.wrongRTL,
                n = this.virtual && e.virtual.enabled, o = n ? this.virtual.slides.length : this.slides.length,
                l = t.children("." + this.params.slideClass), h = n ? this.virtual.slides.length : l.length, p = [],
                c = [], u = [];

            function v(t) {
                return !e.cssMode || t !== l.length - 1
            }

            var f = e.slidesOffsetBefore;
            "function" == typeof f && (f = e.slidesOffsetBefore.call(this));
            var m = e.slidesOffsetAfter;
            "function" == typeof m && (m = e.slidesOffsetAfter.call(this));
            var g = this.snapGrid.length, b = this.snapGrid.length, w = e.spaceBetween, y = -f, x = 0, E = 0;
            if (void 0 !== i) {
                var T, S;
                "string" == typeof w && w.indexOf("%") >= 0 && (w = parseFloat(w.replace("%", "")) / 100 * i), this.virtualSize = -w, s ? l.css({
                    marginLeft: "",
                    marginTop: ""
                }) : l.css({
                    marginRight: "",
                    marginBottom: ""
                }), e.slidesPerColumn > 1 && (T = Math.floor(h / e.slidesPerColumn) === h / this.params.slidesPerColumn ? h : Math.ceil(h / e.slidesPerColumn) * e.slidesPerColumn, "auto" !== e.slidesPerView && "row" === e.slidesPerColumnFill && (T = Math.max(T, e.slidesPerView * e.slidesPerColumn)));
                for (var C, M = e.slidesPerColumn, P = T / M, z = Math.floor(h / e.slidesPerColumn), k = 0; k < h; k += 1) {
                    S = 0;
                    var $ = l.eq(k);
                    if (e.slidesPerColumn > 1) {
                        var L = void 0, I = void 0, D = void 0;
                        if ("row" === e.slidesPerColumnFill && e.slidesPerGroup > 1) {
                            var O = Math.floor(k / (e.slidesPerGroup * e.slidesPerColumn)),
                                A = k - e.slidesPerColumn * e.slidesPerGroup * O,
                                G = 0 === O ? e.slidesPerGroup : Math.min(Math.ceil((h - O * M * e.slidesPerGroup) / M), e.slidesPerGroup);
                            L = (I = A - (D = Math.floor(A / G)) * G + O * e.slidesPerGroup) + D * T / M, $.css({
                                "-webkit-box-ordinal-group": L,
                                "-moz-box-ordinal-group": L,
                                "-ms-flex-order": L,
                                "-webkit-order": L,
                                order: L
                            })
                        } else "column" === e.slidesPerColumnFill ? (D = k - (I = Math.floor(k / M)) * M, (I > z || I === z && D === M - 1) && (D += 1) >= M && (D = 0, I += 1)) : I = k - (D = Math.floor(k / P)) * P;
                        $.css("margin-" + (this.isHorizontal() ? "top" : "left"), 0 !== D && e.spaceBetween && e.spaceBetween + "px")
                    }
                    if ("none" !== $.css("display")) {
                        if ("auto" === e.slidesPerView) {
                            var H = a.getComputedStyle($[0], null), B = $[0].style.transform,
                                N = $[0].style.webkitTransform;
                            if (B && ($[0].style.transform = "none"), N && ($[0].style.webkitTransform = "none"), e.roundLengths) S = this.isHorizontal() ? $.outerWidth(!0) : $.outerHeight(!0); else if (this.isHorizontal()) {
                                var X = parseFloat(H.getPropertyValue("width")),
                                    V = parseFloat(H.getPropertyValue("padding-left")),
                                    Y = parseFloat(H.getPropertyValue("padding-right")),
                                    F = parseFloat(H.getPropertyValue("margin-left")),
                                    W = parseFloat(H.getPropertyValue("margin-right")),
                                    R = H.getPropertyValue("box-sizing");
                                S = R && "border-box" === R ? X + F + W : X + V + Y + F + W
                            } else {
                                var q = parseFloat(H.getPropertyValue("height")),
                                    j = parseFloat(H.getPropertyValue("padding-top")),
                                    K = parseFloat(H.getPropertyValue("padding-bottom")),
                                    U = parseFloat(H.getPropertyValue("margin-top")),
                                    _ = parseFloat(H.getPropertyValue("margin-bottom")),
                                    Z = H.getPropertyValue("box-sizing");
                                S = Z && "border-box" === Z ? q + U + _ : q + j + K + U + _
                            }
                            B && ($[0].style.transform = B), N && ($[0].style.webkitTransform = N), e.roundLengths && (S = Math.floor(S))
                        } else S = (i - (e.slidesPerView - 1) * w) / e.slidesPerView, e.roundLengths && (S = Math.floor(S)), l[k] && (this.isHorizontal() ? l[k].style.width = S + "px" : l[k].style.height = S + "px");
                        l[k] && (l[k].swiperSlideSize = S), u.push(S), e.centeredSlides ? (y = y + S / 2 + x / 2 + w, 0 === x && 0 !== k && (y = y - i / 2 - w), 0 === k && (y = y - i / 2 - w), Math.abs(y) < .001 && (y = 0), e.roundLengths && (y = Math.floor(y)), E % e.slidesPerGroup == 0 && p.push(y), c.push(y)) : (e.roundLengths && (y = Math.floor(y)), (E - Math.min(this.params.slidesPerGroupSkip, E)) % this.params.slidesPerGroup == 0 && p.push(y), c.push(y), y = y + S + w), this.virtualSize += S + w, x = S, E += 1
                    }
                }
                if (this.virtualSize = Math.max(this.virtualSize, i) + m, s && r && ("slide" === e.effect || "coverflow" === e.effect) && t.css({width: this.virtualSize + e.spaceBetween + "px"}), e.setWrapperSize && (this.isHorizontal() ? t.css({width: this.virtualSize + e.spaceBetween + "px"}) : t.css({height: this.virtualSize + e.spaceBetween + "px"})), e.slidesPerColumn > 1 && (this.virtualSize = (S + e.spaceBetween) * T, this.virtualSize = Math.ceil(this.virtualSize / e.slidesPerColumn) - e.spaceBetween, this.isHorizontal() ? t.css({width: this.virtualSize + e.spaceBetween + "px"}) : t.css({height: this.virtualSize + e.spaceBetween + "px"}), e.centeredSlides)) {
                    C = [];
                    for (var Q = 0; Q < p.length; Q += 1) {
                        var J = p[Q];
                        e.roundLengths && (J = Math.floor(J)), p[Q] < this.virtualSize + p[0] && C.push(J)
                    }
                    p = C
                }
                if (!e.centeredSlides) {
                    C = [];
                    for (var ee = 0; ee < p.length; ee += 1) {
                        var te = p[ee];
                        e.roundLengths && (te = Math.floor(te)), p[ee] <= this.virtualSize - i && C.push(te)
                    }
                    p = C, Math.floor(this.virtualSize - i) - Math.floor(p[p.length - 1]) > 1 && p.push(this.virtualSize - i)
                }
                if (0 === p.length && (p = [0]), 0 !== e.spaceBetween && (this.isHorizontal() ? s ? l.filter(v).css({marginLeft: w + "px"}) : l.filter(v).css({marginRight: w + "px"}) : l.filter(v).css({marginBottom: w + "px"})), e.centeredSlides && e.centeredSlidesBounds) {
                    var ie = 0;
                    u.forEach((function (t) {
                        ie += t + (e.spaceBetween ? e.spaceBetween : 0)
                    }));
                    var se = (ie -= e.spaceBetween) - i;
                    p = p.map((function (e) {
                        return e < 0 ? -f : e > se ? se + m : e
                    }))
                }
                if (e.centerInsufficientSlides) {
                    var ae = 0;
                    if (u.forEach((function (t) {
                        ae += t + (e.spaceBetween ? e.spaceBetween : 0)
                    })), (ae -= e.spaceBetween) < i) {
                        var re = (i - ae) / 2;
                        p.forEach((function (e, t) {
                            p[t] = e - re
                        })), c.forEach((function (e, t) {
                            c[t] = e + re
                        }))
                    }
                }
                d.extend(this, {
                    slides: l,
                    snapGrid: p,
                    slidesGrid: c,
                    slidesSizesGrid: u
                }), h !== o && this.emit("slidesLengthChange"), p.length !== g && (this.params.watchOverflow && this.checkOverflow(), this.emit("snapGridLengthChange")), c.length !== b && this.emit("slidesGridLengthChange"), (e.watchSlidesProgress || e.watchSlidesVisibility) && this.updateSlidesOffset()
            }
        }, updateAutoHeight: function (e) {
            var t, i = [], s = 0;
            if ("number" == typeof e ? this.setTransition(e) : !0 === e && this.setTransition(this.params.speed), "auto" !== this.params.slidesPerView && this.params.slidesPerView > 1) if (this.params.centeredSlides) this.visibleSlides.each((function (e, t) {
                i.push(t)
            })); else for (t = 0; t < Math.ceil(this.params.slidesPerView); t += 1) {
                var a = this.activeIndex + t;
                if (a > this.slides.length) break;
                i.push(this.slides.eq(a)[0])
            } else i.push(this.slides.eq(this.activeIndex)[0]);
            for (t = 0; t < i.length; t += 1) if (void 0 !== i[t]) {
                var r = i[t].offsetHeight;
                s = r > s ? r : s
            }
            s && this.$wrapperEl.css("height", s + "px")
        }, updateSlidesOffset: function () {
            for (var e = this.slides, t = 0; t < e.length; t += 1) e[t].swiperSlideOffset = this.isHorizontal() ? e[t].offsetLeft : e[t].offsetTop
        }, updateSlidesProgress: function (e) {
            void 0 === e && (e = this && this.translate || 0);
            var t = this.params, i = this.slides, s = this.rtlTranslate;
            if (0 !== i.length) {
                void 0 === i[0].swiperSlideOffset && this.updateSlidesOffset();
                var a = -e;
                s && (a = e), i.removeClass(t.slideVisibleClass), this.visibleSlidesIndexes = [], this.visibleSlides = [];
                for (var r = 0; r < i.length; r += 1) {
                    var o = i[r],
                        l = (a + (t.centeredSlides ? this.minTranslate() : 0) - o.swiperSlideOffset) / (o.swiperSlideSize + t.spaceBetween);
                    if (t.watchSlidesVisibility || t.centeredSlides && t.autoHeight) {
                        var d = -(a - o.swiperSlideOffset), h = d + this.slidesSizesGrid[r];
                        (d >= 0 && d < this.size - 1 || h > 1 && h <= this.size || d <= 0 && h >= this.size) && (this.visibleSlides.push(o), this.visibleSlidesIndexes.push(r), i.eq(r).addClass(t.slideVisibleClass))
                    }
                    o.progress = s ? -l : l
                }
                this.visibleSlides = n(this.visibleSlides)
            }
        }, updateProgress: function (e) {
            if (void 0 === e) {
                var t = this.rtlTranslate ? -1 : 1;
                e = this && this.translate && this.translate * t || 0
            }
            var i = this.params, s = this.maxTranslate() - this.minTranslate(), a = this.progress, r = this.isBeginning,
                n = this.isEnd, o = r, l = n;
            0 === s ? (a = 0, r = !0, n = !0) : (r = (a = (e - this.minTranslate()) / s) <= 0, n = a >= 1), d.extend(this, {
                progress: a,
                isBeginning: r,
                isEnd: n
            }), (i.watchSlidesProgress || i.watchSlidesVisibility || i.centeredSlides && i.autoHeight) && this.updateSlidesProgress(e), r && !o && this.emit("reachBeginning toEdge"), n && !l && this.emit("reachEnd toEdge"), (o && !r || l && !n) && this.emit("fromEdge"), this.emit("progress", a)
        }, updateSlidesClasses: function () {
            var e, t = this.slides, i = this.params, s = this.$wrapperEl, a = this.activeIndex, r = this.realIndex,
                n = this.virtual && i.virtual.enabled;
            t.removeClass(i.slideActiveClass + " " + i.slideNextClass + " " + i.slidePrevClass + " " + i.slideDuplicateActiveClass + " " + i.slideDuplicateNextClass + " " + i.slideDuplicatePrevClass), (e = n ? this.$wrapperEl.find("." + i.slideClass + '[data-swiper-slide-index="' + a + '"]') : t.eq(a)).addClass(i.slideActiveClass), i.loop && (e.hasClass(i.slideDuplicateClass) ? s.children("." + i.slideClass + ":not(." + i.slideDuplicateClass + ')[data-swiper-slide-index="' + r + '"]').addClass(i.slideDuplicateActiveClass) : s.children("." + i.slideClass + "." + i.slideDuplicateClass + '[data-swiper-slide-index="' + r + '"]').addClass(i.slideDuplicateActiveClass));
            var o = e.nextAll("." + i.slideClass).eq(0).addClass(i.slideNextClass);
            i.loop && 0 === o.length && (o = t.eq(0)).addClass(i.slideNextClass);
            var l = e.prevAll("." + i.slideClass).eq(0).addClass(i.slidePrevClass);
            i.loop && 0 === l.length && (l = t.eq(-1)).addClass(i.slidePrevClass), i.loop && (o.hasClass(i.slideDuplicateClass) ? s.children("." + i.slideClass + ":not(." + i.slideDuplicateClass + ')[data-swiper-slide-index="' + o.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicateNextClass) : s.children("." + i.slideClass + "." + i.slideDuplicateClass + '[data-swiper-slide-index="' + o.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicateNextClass), l.hasClass(i.slideDuplicateClass) ? s.children("." + i.slideClass + ":not(." + i.slideDuplicateClass + ')[data-swiper-slide-index="' + l.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicatePrevClass) : s.children("." + i.slideClass + "." + i.slideDuplicateClass + '[data-swiper-slide-index="' + l.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicatePrevClass))
        }, updateActiveIndex: function (e) {
            var t, i = this.rtlTranslate ? this.translate : -this.translate, s = this.slidesGrid, a = this.snapGrid,
                r = this.params, n = this.activeIndex, o = this.realIndex, l = this.snapIndex, h = e;
            if (void 0 === h) {
                for (var p = 0; p < s.length; p += 1) void 0 !== s[p + 1] ? i >= s[p] && i < s[p + 1] - (s[p + 1] - s[p]) / 2 ? h = p : i >= s[p] && i < s[p + 1] && (h = p + 1) : i >= s[p] && (h = p);
                r.normalizeSlideIndex && (h < 0 || void 0 === h) && (h = 0)
            }
            if (a.indexOf(i) >= 0) t = a.indexOf(i); else {
                var c = Math.min(r.slidesPerGroupSkip, h);
                t = c + Math.floor((h - c) / r.slidesPerGroup)
            }
            if (t >= a.length && (t = a.length - 1), h !== n) {
                var u = parseInt(this.slides.eq(h).attr("data-swiper-slide-index") || h, 10);
                d.extend(this, {
                    snapIndex: t,
                    realIndex: u,
                    previousIndex: n,
                    activeIndex: h
                }), this.emit("activeIndexChange"), this.emit("snapIndexChange"), o !== u && this.emit("realIndexChange"), (this.initialized || this.params.runCallbacksOnInit) && this.emit("slideChange")
            } else t !== l && (this.snapIndex = t, this.emit("snapIndexChange"))
        }, updateClickedSlide: function (e) {
            var t = this.params, i = n(e.target).closest("." + t.slideClass)[0], s = !1;
            if (i) for (var a = 0; a < this.slides.length; a += 1) this.slides[a] === i && (s = !0);
            if (!i || !s) return this.clickedSlide = void 0, void (this.clickedIndex = void 0);
            this.clickedSlide = i, this.virtual && this.params.virtual.enabled ? this.clickedIndex = parseInt(n(i).attr("data-swiper-slide-index"), 10) : this.clickedIndex = n(i).index(), t.slideToClickedSlide && void 0 !== this.clickedIndex && this.clickedIndex !== this.activeIndex && this.slideToClickedSlide()
        }
    };
    var v = {
        getTranslate: function (e) {
            void 0 === e && (e = this.isHorizontal() ? "x" : "y");
            var t = this.params, i = this.rtlTranslate, s = this.translate, a = this.$wrapperEl;
            if (t.virtualTranslate) return i ? -s : s;
            if (t.cssMode) return s;
            var r = d.getTranslate(a[0], e);
            return i && (r = -r), r || 0
        }, setTranslate: function (e, t) {
            var i = this.rtlTranslate, s = this.params, a = this.$wrapperEl, r = this.wrapperEl, n = this.progress,
                o = 0, l = 0;
            this.isHorizontal() ? o = i ? -e : e : l = e, s.roundLengths && (o = Math.floor(o), l = Math.floor(l)), s.cssMode ? r[this.isHorizontal() ? "scrollLeft" : "scrollTop"] = this.isHorizontal() ? -o : -l : s.virtualTranslate || a.transform("translate3d(" + o + "px, " + l + "px, 0px)"), this.previousTranslate = this.translate, this.translate = this.isHorizontal() ? o : l;
            var d = this.maxTranslate() - this.minTranslate();
            (0 === d ? 0 : (e - this.minTranslate()) / d) !== n && this.updateProgress(e), this.emit("setTranslate", this.translate, t)
        }, minTranslate: function () {
            return -this.snapGrid[0]
        }, maxTranslate: function () {
            return -this.snapGrid[this.snapGrid.length - 1]
        }, translateTo: function (e, t, i, s, a) {
            var r;
            void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === i && (i = !0), void 0 === s && (s = !0);
            var n = this, o = n.params, l = n.wrapperEl;
            if (n.animating && o.preventInteractionOnTransition) return !1;
            var d, h = n.minTranslate(), p = n.maxTranslate();
            if (d = s && e > h ? h : s && e < p ? p : e, n.updateProgress(d), o.cssMode) {
                var c = n.isHorizontal();
                return 0 === t ? l[c ? "scrollLeft" : "scrollTop"] = -d : l.scrollTo ? l.scrollTo(((r = {})[c ? "left" : "top"] = -d, r.behavior = "smooth", r)) : l[c ? "scrollLeft" : "scrollTop"] = -d, !0
            }
            return 0 === t ? (n.setTransition(0), n.setTranslate(d), i && (n.emit("beforeTransitionStart", t, a), n.emit("transitionEnd"))) : (n.setTransition(t), n.setTranslate(d), i && (n.emit("beforeTransitionStart", t, a), n.emit("transitionStart")), n.animating || (n.animating = !0, n.onTranslateToWrapperTransitionEnd || (n.onTranslateToWrapperTransitionEnd = function (e) {
                n && !n.destroyed && e.target === this && (n.$wrapperEl[0].removeEventListener("transitionend", n.onTranslateToWrapperTransitionEnd), n.$wrapperEl[0].removeEventListener("webkitTransitionEnd", n.onTranslateToWrapperTransitionEnd), n.onTranslateToWrapperTransitionEnd = null, delete n.onTranslateToWrapperTransitionEnd, i && n.emit("transitionEnd"))
            }), n.$wrapperEl[0].addEventListener("transitionend", n.onTranslateToWrapperTransitionEnd), n.$wrapperEl[0].addEventListener("webkitTransitionEnd", n.onTranslateToWrapperTransitionEnd))), !0
        }
    };
    var f = {
        setTransition: function (e, t) {
            this.params.cssMode || this.$wrapperEl.transition(e), this.emit("setTransition", e, t)
        }, transitionStart: function (e, t) {
            void 0 === e && (e = !0);
            var i = this.activeIndex, s = this.params, a = this.previousIndex;
            if (!s.cssMode) {
                s.autoHeight && this.updateAutoHeight();
                var r = t;
                if (r || (r = i > a ? "next" : i < a ? "prev" : "reset"), this.emit("transitionStart"), e && i !== a) {
                    if ("reset" === r) return void this.emit("slideResetTransitionStart");
                    this.emit("slideChangeTransitionStart"), "next" === r ? this.emit("slideNextTransitionStart") : this.emit("slidePrevTransitionStart")
                }
            }
        }, transitionEnd: function (e, t) {
            void 0 === e && (e = !0);
            var i = this.activeIndex, s = this.previousIndex, a = this.params;
            if (this.animating = !1, !a.cssMode) {
                this.setTransition(0);
                var r = t;
                if (r || (r = i > s ? "next" : i < s ? "prev" : "reset"), this.emit("transitionEnd"), e && i !== s) {
                    if ("reset" === r) return void this.emit("slideResetTransitionEnd");
                    this.emit("slideChangeTransitionEnd"), "next" === r ? this.emit("slideNextTransitionEnd") : this.emit("slidePrevTransitionEnd")
                }
            }
        }
    };
    var m = {
        slideTo: function (e, t, i, s) {
            var a;
            void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === i && (i = !0);
            var r = this, n = e;
            n < 0 && (n = 0);
            var o = r.params, l = r.snapGrid, d = r.slidesGrid, h = r.previousIndex, p = r.activeIndex,
                c = r.rtlTranslate, u = r.wrapperEl;
            if (r.animating && o.preventInteractionOnTransition) return !1;
            var v = Math.min(r.params.slidesPerGroupSkip, n), f = v + Math.floor((n - v) / r.params.slidesPerGroup);
            f >= l.length && (f = l.length - 1), (p || o.initialSlide || 0) === (h || 0) && i && r.emit("beforeSlideChangeStart");
            var m, g = -l[f];
            if (r.updateProgress(g), o.normalizeSlideIndex) for (var b = 0; b < d.length; b += 1) -Math.floor(100 * g) >= Math.floor(100 * d[b]) && (n = b);
            if (r.initialized && n !== p) {
                if (!r.allowSlideNext && g < r.translate && g < r.minTranslate()) return !1;
                if (!r.allowSlidePrev && g > r.translate && g > r.maxTranslate() && (p || 0) !== n) return !1
            }
            if (m = n > p ? "next" : n < p ? "prev" : "reset", c && -g === r.translate || !c && g === r.translate) return r.updateActiveIndex(n), o.autoHeight && r.updateAutoHeight(), r.updateSlidesClasses(), "slide" !== o.effect && r.setTranslate(g), "reset" !== m && (r.transitionStart(i, m), r.transitionEnd(i, m)), !1;
            if (o.cssMode) {
                var w = r.isHorizontal(), y = -g;
                return c && (y = u.scrollWidth - u.offsetWidth - y), 0 === t ? u[w ? "scrollLeft" : "scrollTop"] = y : u.scrollTo ? u.scrollTo(((a = {})[w ? "left" : "top"] = y, a.behavior = "smooth", a)) : u[w ? "scrollLeft" : "scrollTop"] = y, !0
            }
            return 0 === t ? (r.setTransition(0), r.setTranslate(g), r.updateActiveIndex(n), r.updateSlidesClasses(), r.emit("beforeTransitionStart", t, s), r.transitionStart(i, m), r.transitionEnd(i, m)) : (r.setTransition(t), r.setTranslate(g), r.updateActiveIndex(n), r.updateSlidesClasses(), r.emit("beforeTransitionStart", t, s), r.transitionStart(i, m), r.animating || (r.animating = !0, r.onSlideToWrapperTransitionEnd || (r.onSlideToWrapperTransitionEnd = function (e) {
                r && !r.destroyed && e.target === this && (r.$wrapperEl[0].removeEventListener("transitionend", r.onSlideToWrapperTransitionEnd), r.$wrapperEl[0].removeEventListener("webkitTransitionEnd", r.onSlideToWrapperTransitionEnd), r.onSlideToWrapperTransitionEnd = null, delete r.onSlideToWrapperTransitionEnd, r.transitionEnd(i, m))
            }), r.$wrapperEl[0].addEventListener("transitionend", r.onSlideToWrapperTransitionEnd), r.$wrapperEl[0].addEventListener("webkitTransitionEnd", r.onSlideToWrapperTransitionEnd))), !0
        }, slideToLoop: function (e, t, i, s) {
            void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === i && (i = !0);
            var a = e;
            return this.params.loop && (a += this.loopedSlides), this.slideTo(a, t, i, s)
        }, slideNext: function (e, t, i) {
            void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
            var s = this.params, a = this.animating, r = this.activeIndex < s.slidesPerGroupSkip ? 1 : s.slidesPerGroup;
            if (s.loop) {
                if (a) return !1;
                this.loopFix(), this._clientLeft = this.$wrapperEl[0].clientLeft
            }
            return this.slideTo(this.activeIndex + r, e, t, i)
        }, slidePrev: function (e, t, i) {
            void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
            var s = this.params, a = this.animating, r = this.snapGrid, n = this.slidesGrid, o = this.rtlTranslate;
            if (s.loop) {
                if (a) return !1;
                this.loopFix(), this._clientLeft = this.$wrapperEl[0].clientLeft
            }

            function l(e) {
                return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e)
            }

            var d, h = l(o ? this.translate : -this.translate), p = r.map((function (e) {
                return l(e)
            })), c = (n.map((function (e) {
                return l(e)
            })), r[p.indexOf(h)], r[p.indexOf(h) - 1]);
            return void 0 === c && s.cssMode && r.forEach((function (e) {
                !c && h >= e && (c = e)
            })), void 0 !== c && (d = n.indexOf(c)) < 0 && (d = this.activeIndex - 1), this.slideTo(d, e, t, i)
        }, slideReset: function (e, t, i) {
            return void 0 === e && (e = this.params.speed), void 0 === t && (t = !0), this.slideTo(this.activeIndex, e, t, i)
        }, slideToClosest: function (e, t, i, s) {
            void 0 === e && (e = this.params.speed), void 0 === t && (t = !0), void 0 === s && (s = .5);
            var a = this.activeIndex, r = Math.min(this.params.slidesPerGroupSkip, a),
                n = r + Math.floor((a - r) / this.params.slidesPerGroup),
                o = this.rtlTranslate ? this.translate : -this.translate;
            if (o >= this.snapGrid[n]) {
                var l = this.snapGrid[n];
                o - l > (this.snapGrid[n + 1] - l) * s && (a += this.params.slidesPerGroup)
            } else {
                var d = this.snapGrid[n - 1];
                o - d <= (this.snapGrid[n] - d) * s && (a -= this.params.slidesPerGroup)
            }
            return a = Math.max(a, 0), a = Math.min(a, this.slidesGrid.length - 1), this.slideTo(a, e, t, i)
        }, slideToClickedSlide: function () {
            var e, t = this, i = t.params, s = t.$wrapperEl,
                a = "auto" === i.slidesPerView ? t.slidesPerViewDynamic() : i.slidesPerView, r = t.clickedIndex;
            if (i.loop) {
                if (t.animating) return;
                e = parseInt(n(t.clickedSlide).attr("data-swiper-slide-index"), 10), i.centeredSlides ? r < t.loopedSlides - a / 2 || r > t.slides.length - t.loopedSlides + a / 2 ? (t.loopFix(), r = s.children("." + i.slideClass + '[data-swiper-slide-index="' + e + '"]:not(.' + i.slideDuplicateClass + ")").eq(0).index(), d.nextTick((function () {
                    t.slideTo(r)
                }))) : t.slideTo(r) : r > t.slides.length - a ? (t.loopFix(), r = s.children("." + i.slideClass + '[data-swiper-slide-index="' + e + '"]:not(.' + i.slideDuplicateClass + ")").eq(0).index(), d.nextTick((function () {
                    t.slideTo(r)
                }))) : t.slideTo(r)
            } else t.slideTo(r)
        }
    };
    var g = {
        loopCreate: function () {
            var e = this, t = e.params, s = e.$wrapperEl;
            s.children("." + t.slideClass + "." + t.slideDuplicateClass).remove();
            var a = s.children("." + t.slideClass);
            if (t.loopFillGroupWithBlank) {
                var r = t.slidesPerGroup - a.length % t.slidesPerGroup;
                if (r !== t.slidesPerGroup) {
                    for (var o = 0; o < r; o += 1) {
                        var l = n(i.createElement("div")).addClass(t.slideClass + " " + t.slideBlankClass);
                        s.append(l)
                    }
                    a = s.children("." + t.slideClass)
                }
            }
            "auto" !== t.slidesPerView || t.loopedSlides || (t.loopedSlides = a.length), e.loopedSlides = Math.ceil(parseFloat(t.loopedSlides || t.slidesPerView, 10)), e.loopedSlides += t.loopAdditionalSlides, e.loopedSlides > a.length && (e.loopedSlides = a.length);
            var d = [], h = [];
            a.each((function (t, i) {
                var s = n(i);
                t < e.loopedSlides && h.push(i), t < a.length && t >= a.length - e.loopedSlides && d.push(i), s.attr("data-swiper-slide-index", t)
            }));
            for (var p = 0; p < h.length; p += 1) s.append(n(h[p].cloneNode(!0)).addClass(t.slideDuplicateClass));
            for (var c = d.length - 1; c >= 0; c -= 1) s.prepend(n(d[c].cloneNode(!0)).addClass(t.slideDuplicateClass))
        }, loopFix: function () {
            this.emit("beforeLoopFix");
            var e, t = this.activeIndex, i = this.slides, s = this.loopedSlides, a = this.allowSlidePrev,
                r = this.allowSlideNext, n = this.snapGrid, o = this.rtlTranslate;
            this.allowSlidePrev = !0, this.allowSlideNext = !0;
            var l = -n[t] - this.getTranslate();
            if (t < s) e = i.length - 3 * s + t, e += s, this.slideTo(e, 0, !1, !0) && 0 !== l && this.setTranslate((o ? -this.translate : this.translate) - l); else if (t >= i.length - s) {
                e = -i.length + t + s, e += s, this.slideTo(e, 0, !1, !0) && 0 !== l && this.setTranslate((o ? -this.translate : this.translate) - l)
            }
            this.allowSlidePrev = a, this.allowSlideNext = r, this.emit("loopFix")
        }, loopDestroy: function () {
            var e = this.$wrapperEl, t = this.params, i = this.slides;
            e.children("." + t.slideClass + "." + t.slideDuplicateClass + ",." + t.slideClass + "." + t.slideBlankClass).remove(), i.removeAttr("data-swiper-slide-index")
        }
    };
    var b = {
        setGrabCursor: function (e) {
            if (!(h.touch || !this.params.simulateTouch || this.params.watchOverflow && this.isLocked || this.params.cssMode)) {
                var t = this.el;
                t.style.cursor = "move", t.style.cursor = e ? "-webkit-grabbing" : "-webkit-grab", t.style.cursor = e ? "-moz-grabbin" : "-moz-grab", t.style.cursor = e ? "grabbing" : "grab"
            }
        }, unsetGrabCursor: function () {
            h.touch || this.params.watchOverflow && this.isLocked || this.params.cssMode || (this.el.style.cursor = "")
        }
    };
    var w, y, x, E, T, S, C, M, P, z, k, $, L, I, D, O = {
        appendSlide: function (e) {
            var t = this.$wrapperEl, i = this.params;
            if (i.loop && this.loopDestroy(), "object" == typeof e && "length" in e) for (var s = 0; s < e.length; s += 1) e[s] && t.append(e[s]); else t.append(e);
            i.loop && this.loopCreate(), i.observer && h.observer || this.update()
        }, prependSlide: function (e) {
            var t = this.params, i = this.$wrapperEl, s = this.activeIndex;
            t.loop && this.loopDestroy();
            var a = s + 1;
            if ("object" == typeof e && "length" in e) {
                for (var r = 0; r < e.length; r += 1) e[r] && i.prepend(e[r]);
                a = s + e.length
            } else i.prepend(e);
            t.loop && this.loopCreate(), t.observer && h.observer || this.update(), this.slideTo(a, 0, !1)
        }, addSlide: function (e, t) {
            var i = this.$wrapperEl, s = this.params, a = this.activeIndex;
            s.loop && (a -= this.loopedSlides, this.loopDestroy(), this.slides = i.children("." + s.slideClass));
            var r = this.slides.length;
            if (e <= 0) this.prependSlide(t); else if (e >= r) this.appendSlide(t); else {
                for (var n = a > e ? a + 1 : a, o = [], l = r - 1; l >= e; l -= 1) {
                    var d = this.slides.eq(l);
                    d.remove(), o.unshift(d)
                }
                if ("object" == typeof t && "length" in t) {
                    for (var p = 0; p < t.length; p += 1) t[p] && i.append(t[p]);
                    n = a > e ? a + t.length : a
                } else i.append(t);
                for (var c = 0; c < o.length; c += 1) i.append(o[c]);
                s.loop && this.loopCreate(), s.observer && h.observer || this.update(), s.loop ? this.slideTo(n + this.loopedSlides, 0, !1) : this.slideTo(n, 0, !1)
            }
        }, removeSlide: function (e) {
            var t = this.params, i = this.$wrapperEl, s = this.activeIndex;
            t.loop && (s -= this.loopedSlides, this.loopDestroy(), this.slides = i.children("." + t.slideClass));
            var a, r = s;
            if ("object" == typeof e && "length" in e) {
                for (var n = 0; n < e.length; n += 1) a = e[n], this.slides[a] && this.slides.eq(a).remove(), a < r && (r -= 1);
                r = Math.max(r, 0)
            } else a = e, this.slides[a] && this.slides.eq(a).remove(), a < r && (r -= 1), r = Math.max(r, 0);
            t.loop && this.loopCreate(), t.observer && h.observer || this.update(), t.loop ? this.slideTo(r + this.loopedSlides, 0, !1) : this.slideTo(r, 0, !1)
        }, removeAllSlides: function () {
            for (var e = [], t = 0; t < this.slides.length; t += 1) e.push(t);
            this.removeSlide(e)
        }
    }, A = (w = a.navigator.platform, y = a.navigator.userAgent, x = {
        ios: !1,
        android: !1,
        androidChrome: !1,
        desktop: !1,
        iphone: !1,
        ipod: !1,
        ipad: !1,
        edge: !1,
        ie: !1,
        firefox: !1,
        macos: !1,
        windows: !1,
        cordova: !(!a.cordova && !a.phonegap),
        phonegap: !(!a.cordova && !a.phonegap),
        electron: !1
    }, E = a.screen.width, T = a.screen.height, S = y.match(/(Android);?[\s\/]+([\d.]+)?/), C = y.match(/(iPad).*OS\s([\d_]+)/), M = y.match(/(iPod)(.*OS\s([\d_]+))?/), P = !C && y.match(/(iPhone\sOS|iOS)\s([\d_]+)/), z = y.indexOf("MSIE ") >= 0 || y.indexOf("Trident/") >= 0, k = y.indexOf("Edge/") >= 0, $ = y.indexOf("Gecko/") >= 0 && y.indexOf("Firefox/") >= 0, L = "Win32" === w, I = y.toLowerCase().indexOf("electron") >= 0, D = "MacIntel" === w, !C && D && h.touch && (1024 === E && 1366 === T || 834 === E && 1194 === T || 834 === E && 1112 === T || 768 === E && 1024 === T) && (C = y.match(/(Version)\/([\d.]+)/), D = !1), x.ie = z, x.edge = k, x.firefox = $, S && !L && (x.os = "android", x.osVersion = S[2], x.android = !0, x.androidChrome = y.toLowerCase().indexOf("chrome") >= 0), (C || P || M) && (x.os = "ios", x.ios = !0), P && !M && (x.osVersion = P[2].replace(/_/g, "."), x.iphone = !0), C && (x.osVersion = C[2].replace(/_/g, "."), x.ipad = !0), M && (x.osVersion = M[3] ? M[3].replace(/_/g, ".") : null, x.ipod = !0), x.ios && x.osVersion && y.indexOf("Version/") >= 0 && "10" === x.osVersion.split(".")[0] && (x.osVersion = y.toLowerCase().split("version/")[1].split(" ")[0]), x.webView = !(!(P || C || M) || !y.match(/.*AppleWebKit(?!.*Safari)/i) && !a.navigator.standalone) || a.matchMedia && a.matchMedia("(display-mode: standalone)").matches, x.webview = x.webView, x.standalone = x.webView, x.desktop = !(x.ios || x.android) || I, x.desktop && (x.electron = I, x.macos = D, x.windows = L, x.macos && (x.os = "macos"), x.windows && (x.os = "windows")), x.pixelRatio = a.devicePixelRatio || 1, x);

    function G(e) {
        var t = this.touchEventsData, s = this.params, r = this.touches;
        if (!this.animating || !s.preventInteractionOnTransition) {
            var o = e;
            o.originalEvent && (o = o.originalEvent);
            var l = n(o.target);
            if (("wrapper" !== s.touchEventsTarget || l.closest(this.wrapperEl).length) && (t.isTouchEvent = "touchstart" === o.type, (t.isTouchEvent || !("which" in o) || 3 !== o.which) && !(!t.isTouchEvent && "button" in o && o.button > 0 || t.isTouched && t.isMoved))) if (s.noSwiping && l.closest(s.noSwipingSelector ? s.noSwipingSelector : "." + s.noSwipingClass)[0]) this.allowClick = !0; else if (!s.swipeHandler || l.closest(s.swipeHandler)[0]) {
                r.currentX = "touchstart" === o.type ? o.targetTouches[0].pageX : o.pageX, r.currentY = "touchstart" === o.type ? o.targetTouches[0].pageY : o.pageY;
                var h = r.currentX, p = r.currentY, c = s.edgeSwipeDetection || s.iOSEdgeSwipeDetection,
                    u = s.edgeSwipeThreshold || s.iOSEdgeSwipeThreshold;
                if (!c || !(h <= u || h >= a.screen.width - u)) {
                    if (d.extend(t, {
                        isTouched: !0,
                        isMoved: !1,
                        allowTouchCallbacks: !0,
                        isScrolling: void 0,
                        startMoving: void 0
                    }), r.startX = h, r.startY = p, t.touchStartTime = d.now(), this.allowClick = !0, this.updateSize(), this.swipeDirection = void 0, s.threshold > 0 && (t.allowThresholdMove = !1), "touchstart" !== o.type) {
                        var v = !0;
                        l.is(t.formElements) && (v = !1), i.activeElement && n(i.activeElement).is(t.formElements) && i.activeElement !== l[0] && i.activeElement.blur();
                        var f = v && this.allowTouchMove && s.touchStartPreventDefault;
                        (s.touchStartForcePreventDefault || f) && o.preventDefault()
                    }
                    this.emit("touchStart", o)
                }
            }
        }
    }

    function H(e) {
        var t = this.touchEventsData, s = this.params, a = this.touches, r = this.rtlTranslate, o = e;
        if (o.originalEvent && (o = o.originalEvent), t.isTouched) {
            if (!t.isTouchEvent || "touchmove" === o.type) {
                var l = "touchmove" === o.type && o.targetTouches && (o.targetTouches[0] || o.changedTouches[0]),
                    h = "touchmove" === o.type ? l.pageX : o.pageX, p = "touchmove" === o.type ? l.pageY : o.pageY;
                if (o.preventedByNestedSwiper) return a.startX = h, void (a.startY = p);
                if (!this.allowTouchMove) return this.allowClick = !1, void (t.isTouched && (d.extend(a, {
                    startX: h,
                    startY: p,
                    currentX: h,
                    currentY: p
                }), t.touchStartTime = d.now()));
                if (t.isTouchEvent && s.touchReleaseOnEdges && !s.loop) if (this.isVertical()) {
                    if (p < a.startY && this.translate <= this.maxTranslate() || p > a.startY && this.translate >= this.minTranslate()) return t.isTouched = !1, void (t.isMoved = !1)
                } else if (h < a.startX && this.translate <= this.maxTranslate() || h > a.startX && this.translate >= this.minTranslate()) return;
                if (t.isTouchEvent && i.activeElement && o.target === i.activeElement && n(o.target).is(t.formElements)) return t.isMoved = !0, void (this.allowClick = !1);
                if (t.allowTouchCallbacks && this.emit("touchMove", o), !(o.targetTouches && o.targetTouches.length > 1)) {
                    a.currentX = h, a.currentY = p;
                    var c = a.currentX - a.startX, u = a.currentY - a.startY;
                    if (!(this.params.threshold && Math.sqrt(Math.pow(c, 2) + Math.pow(u, 2)) < this.params.threshold)) {
                        var v;
                        if (void 0 === t.isScrolling) this.isHorizontal() && a.currentY === a.startY || this.isVertical() && a.currentX === a.startX ? t.isScrolling = !1 : c * c + u * u >= 25 && (v = 180 * Math.atan2(Math.abs(u), Math.abs(c)) / Math.PI, t.isScrolling = this.isHorizontal() ? v > s.touchAngle : 90 - v > s.touchAngle);
                        if (t.isScrolling && this.emit("touchMoveOpposite", o), void 0 === t.startMoving && (a.currentX === a.startX && a.currentY === a.startY || (t.startMoving = !0)), t.isScrolling) t.isTouched = !1; else if (t.startMoving) {
                            this.allowClick = !1, !s.cssMode && o.cancelable && o.preventDefault(), s.touchMoveStopPropagation && !s.nested && o.stopPropagation(), t.isMoved || (s.loop && this.loopFix(), t.startTranslate = this.getTranslate(), this.setTransition(0), this.animating && this.$wrapperEl.trigger("webkitTransitionEnd transitionend"), t.allowMomentumBounce = !1, !s.grabCursor || !0 !== this.allowSlideNext && !0 !== this.allowSlidePrev || this.setGrabCursor(!0), this.emit("sliderFirstMove", o)), this.emit("sliderMove", o), t.isMoved = !0;
                            var f = this.isHorizontal() ? c : u;
                            a.diff = f, f *= s.touchRatio, r && (f = -f), this.swipeDirection = f > 0 ? "prev" : "next", t.currentTranslate = f + t.startTranslate;
                            var m = !0, g = s.resistanceRatio;
                            if (s.touchReleaseOnEdges && (g = 0), f > 0 && t.currentTranslate > this.minTranslate() ? (m = !1, s.resistance && (t.currentTranslate = this.minTranslate() - 1 + Math.pow(-this.minTranslate() + t.startTranslate + f, g))) : f < 0 && t.currentTranslate < this.maxTranslate() && (m = !1, s.resistance && (t.currentTranslate = this.maxTranslate() + 1 - Math.pow(this.maxTranslate() - t.startTranslate - f, g))), m && (o.preventedByNestedSwiper = !0), !this.allowSlideNext && "next" === this.swipeDirection && t.currentTranslate < t.startTranslate && (t.currentTranslate = t.startTranslate), !this.allowSlidePrev && "prev" === this.swipeDirection && t.currentTranslate > t.startTranslate && (t.currentTranslate = t.startTranslate), s.threshold > 0) {
                                if (!(Math.abs(f) > s.threshold || t.allowThresholdMove)) return void (t.currentTranslate = t.startTranslate);
                                if (!t.allowThresholdMove) return t.allowThresholdMove = !0, a.startX = a.currentX, a.startY = a.currentY, t.currentTranslate = t.startTranslate, void (a.diff = this.isHorizontal() ? a.currentX - a.startX : a.currentY - a.startY)
                            }
                            s.followFinger && !s.cssMode && ((s.freeMode || s.watchSlidesProgress || s.watchSlidesVisibility) && (this.updateActiveIndex(), this.updateSlidesClasses()), s.freeMode && (0 === t.velocities.length && t.velocities.push({
                                position: a[this.isHorizontal() ? "startX" : "startY"],
                                time: t.touchStartTime
                            }), t.velocities.push({
                                position: a[this.isHorizontal() ? "currentX" : "currentY"],
                                time: d.now()
                            })), this.updateProgress(t.currentTranslate), this.setTranslate(t.currentTranslate))
                        }
                    }
                }
            }
        } else t.startMoving && t.isScrolling && this.emit("touchMoveOpposite", o)
    }

    function B(e) {
        var t = this, i = t.touchEventsData, s = t.params, a = t.touches, r = t.rtlTranslate, n = t.$wrapperEl,
            o = t.slidesGrid, l = t.snapGrid, h = e;
        if (h.originalEvent && (h = h.originalEvent), i.allowTouchCallbacks && t.emit("touchEnd", h), i.allowTouchCallbacks = !1, !i.isTouched) return i.isMoved && s.grabCursor && t.setGrabCursor(!1), i.isMoved = !1, void (i.startMoving = !1);
        s.grabCursor && i.isMoved && i.isTouched && (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) && t.setGrabCursor(!1);
        var p, c = d.now(), u = c - i.touchStartTime;
        if (t.allowClick && (t.updateClickedSlide(h), t.emit("tap click", h), u < 300 && c - i.lastClickTime < 300 && t.emit("doubleTap doubleClick", h)), i.lastClickTime = d.now(), d.nextTick((function () {
            t.destroyed || (t.allowClick = !0)
        })), !i.isTouched || !i.isMoved || !t.swipeDirection || 0 === a.diff || i.currentTranslate === i.startTranslate) return i.isTouched = !1, i.isMoved = !1, void (i.startMoving = !1);
        if (i.isTouched = !1, i.isMoved = !1, i.startMoving = !1, p = s.followFinger ? r ? t.translate : -t.translate : -i.currentTranslate, !s.cssMode) if (s.freeMode) {
            if (p < -t.minTranslate()) return void t.slideTo(t.activeIndex);
            if (p > -t.maxTranslate()) return void (t.slides.length < l.length ? t.slideTo(l.length - 1) : t.slideTo(t.slides.length - 1));
            if (s.freeModeMomentum) {
                if (i.velocities.length > 1) {
                    var v = i.velocities.pop(), f = i.velocities.pop(), m = v.position - f.position,
                        g = v.time - f.time;
                    t.velocity = m / g, t.velocity /= 2, Math.abs(t.velocity) < s.freeModeMinimumVelocity && (t.velocity = 0), (g > 150 || d.now() - v.time > 300) && (t.velocity = 0)
                } else t.velocity = 0;
                t.velocity *= s.freeModeMomentumVelocityRatio, i.velocities.length = 0;
                var b = 1e3 * s.freeModeMomentumRatio, w = t.velocity * b, y = t.translate + w;
                r && (y = -y);
                var x, E, T = !1, S = 20 * Math.abs(t.velocity) * s.freeModeMomentumBounceRatio;
                if (y < t.maxTranslate()) s.freeModeMomentumBounce ? (y + t.maxTranslate() < -S && (y = t.maxTranslate() - S), x = t.maxTranslate(), T = !0, i.allowMomentumBounce = !0) : y = t.maxTranslate(), s.loop && s.centeredSlides && (E = !0); else if (y > t.minTranslate()) s.freeModeMomentumBounce ? (y - t.minTranslate() > S && (y = t.minTranslate() + S), x = t.minTranslate(), T = !0, i.allowMomentumBounce = !0) : y = t.minTranslate(), s.loop && s.centeredSlides && (E = !0); else if (s.freeModeSticky) {
                    for (var C, M = 0; M < l.length; M += 1) if (l[M] > -y) {
                        C = M;
                        break
                    }
                    y = -(y = Math.abs(l[C] - y) < Math.abs(l[C - 1] - y) || "next" === t.swipeDirection ? l[C] : l[C - 1])
                }
                if (E && t.once("transitionEnd", (function () {
                    t.loopFix()
                })), 0 !== t.velocity) {
                    if (b = r ? Math.abs((-y - t.translate) / t.velocity) : Math.abs((y - t.translate) / t.velocity), s.freeModeSticky) {
                        var P = Math.abs((r ? -y : y) - t.translate), z = t.slidesSizesGrid[t.activeIndex];
                        b = P < z ? s.speed : P < 2 * z ? 1.5 * s.speed : 2.5 * s.speed
                    }
                } else if (s.freeModeSticky) return void t.slideToClosest();
                s.freeModeMomentumBounce && T ? (t.updateProgress(x), t.setTransition(b), t.setTranslate(y), t.transitionStart(!0, t.swipeDirection), t.animating = !0, n.transitionEnd((function () {
                    t && !t.destroyed && i.allowMomentumBounce && (t.emit("momentumBounce"), t.setTransition(s.speed), setTimeout((function () {
                        t.setTranslate(x), n.transitionEnd((function () {
                            t && !t.destroyed && t.transitionEnd()
                        }))
                    }), 0))
                }))) : t.velocity ? (t.updateProgress(y), t.setTransition(b), t.setTranslate(y), t.transitionStart(!0, t.swipeDirection), t.animating || (t.animating = !0, n.transitionEnd((function () {
                    t && !t.destroyed && t.transitionEnd()
                })))) : t.updateProgress(y), t.updateActiveIndex(), t.updateSlidesClasses()
            } else if (s.freeModeSticky) return void t.slideToClosest();
            (!s.freeModeMomentum || u >= s.longSwipesMs) && (t.updateProgress(), t.updateActiveIndex(), t.updateSlidesClasses())
        } else {
            for (var k = 0, $ = t.slidesSizesGrid[0], L = 0; L < o.length; L += L < s.slidesPerGroupSkip ? 1 : s.slidesPerGroup) {
                var I = L < s.slidesPerGroupSkip - 1 ? 1 : s.slidesPerGroup;
                void 0 !== o[L + I] ? p >= o[L] && p < o[L + I] && (k = L, $ = o[L + I] - o[L]) : p >= o[L] && (k = L, $ = o[o.length - 1] - o[o.length - 2])
            }
            var D = (p - o[k]) / $, O = k < s.slidesPerGroupSkip - 1 ? 1 : s.slidesPerGroup;
            if (u > s.longSwipesMs) {
                if (!s.longSwipes) return void t.slideTo(t.activeIndex);
                "next" === t.swipeDirection && (D >= s.longSwipesRatio ? t.slideTo(k + O) : t.slideTo(k)), "prev" === t.swipeDirection && (D > 1 - s.longSwipesRatio ? t.slideTo(k + O) : t.slideTo(k))
            } else {
                if (!s.shortSwipes) return void t.slideTo(t.activeIndex);
                t.navigation && (h.target === t.navigation.nextEl || h.target === t.navigation.prevEl) ? h.target === t.navigation.nextEl ? t.slideTo(k + O) : t.slideTo(k) : ("next" === t.swipeDirection && t.slideTo(k + O), "prev" === t.swipeDirection && t.slideTo(k))
            }
        }
    }

    function N() {
        var e = this.params, t = this.el;
        if (!t || 0 !== t.offsetWidth) {
            e.breakpoints && this.setBreakpoint();
            var i = this.allowSlideNext, s = this.allowSlidePrev, a = this.snapGrid;
            this.allowSlideNext = !0, this.allowSlidePrev = !0, this.updateSize(), this.updateSlides(), this.updateSlidesClasses(), ("auto" === e.slidesPerView || e.slidesPerView > 1) && this.isEnd && !this.isBeginning && !this.params.centeredSlides ? this.slideTo(this.slides.length - 1, 0, !1, !0) : this.slideTo(this.activeIndex, 0, !1, !0), this.autoplay && this.autoplay.running && this.autoplay.paused && this.autoplay.run(), this.allowSlidePrev = s, this.allowSlideNext = i, this.params.watchOverflow && a !== this.snapGrid && this.checkOverflow()
        }
    }

    function X(e) {
        this.allowClick || (this.params.preventClicks && e.preventDefault(), this.params.preventClicksPropagation && this.animating && (e.stopPropagation(), e.stopImmediatePropagation()))
    }

    function V() {
        var e = this.wrapperEl, t = this.rtlTranslate;
        this.previousTranslate = this.translate, this.isHorizontal() ? this.translate = t ? e.scrollWidth - e.offsetWidth - e.scrollLeft : -e.scrollLeft : this.translate = -e.scrollTop, -0 === this.translate && (this.translate = 0), this.updateActiveIndex(), this.updateSlidesClasses();
        var i = this.maxTranslate() - this.minTranslate();
        (0 === i ? 0 : (this.translate - this.minTranslate()) / i) !== this.progress && this.updateProgress(t ? -this.translate : this.translate), this.emit("setTranslate", this.translate, !1)
    }

    var Y = !1;

    function F() {
    }

    var W = {
            init: !0,
            direction: "horizontal",
            touchEventsTarget: "container",
            initialSlide: 0,
            speed: 300,
            cssMode: !1,
            updateOnWindowResize: !0,
            preventInteractionOnTransition: !1,
            edgeSwipeDetection: !1,
            edgeSwipeThreshold: 20,
            freeMode: !1,
            freeModeMomentum: !0,
            freeModeMomentumRatio: 1,
            freeModeMomentumBounce: !0,
            freeModeMomentumBounceRatio: 1,
            freeModeMomentumVelocityRatio: 1,
            freeModeSticky: !1,
            freeModeMinimumVelocity: .02,
            autoHeight: !1,
            setWrapperSize: !1,
            virtualTranslate: !1,
            effect: "slide",
            breakpoints: void 0,
            spaceBetween: 0,
            slidesPerView: 1,
            slidesPerColumn: 1,
            slidesPerColumnFill: "column",
            slidesPerGroup: 1,
            slidesPerGroupSkip: 0,
            centeredSlides: !1,
            centeredSlidesBounds: !1,
            slidesOffsetBefore: 0,
            slidesOffsetAfter: 0,
            normalizeSlideIndex: !0,
            centerInsufficientSlides: !1,
            watchOverflow: !1,
            roundLengths: !1,
            touchRatio: 1,
            touchAngle: 45,
            simulateTouch: !0,
            shortSwipes: !0,
            longSwipes: !0,
            longSwipesRatio: .5,
            longSwipesMs: 300,
            followFinger: !0,
            allowTouchMove: !0,
            threshold: 0,
            touchMoveStopPropagation: !1,
            touchStartPreventDefault: !0,
            touchStartForcePreventDefault: !1,
            touchReleaseOnEdges: !1,
            uniqueNavElements: !0,
            resistance: !0,
            resistanceRatio: .85,
            watchSlidesProgress: !1,
            watchSlidesVisibility: !1,
            grabCursor: !1,
            preventClicks: !0,
            preventClicksPropagation: !0,
            slideToClickedSlide: !1,
            preloadImages: !0,
            updateOnImagesReady: !0,
            loop: !1,
            loopAdditionalSlides: 0,
            loopedSlides: null,
            loopFillGroupWithBlank: !1,
            allowSlidePrev: !0,
            allowSlideNext: !0,
            swipeHandler: null,
            noSwiping: !0,
            noSwipingClass: "swiper-no-swiping",
            noSwipingSelector: null,
            passiveListeners: !0,
            containerModifierClass: "swiper-container-",
            slideClass: "swiper-slide",
            slideBlankClass: "swiper-slide-invisible-blank",
            slideActiveClass: "swiper-slide-active",
            slideDuplicateActiveClass: "swiper-slide-duplicate-active",
            slideVisibleClass: "swiper-slide-visible",
            slideDuplicateClass: "swiper-slide-duplicate",
            slideNextClass: "swiper-slide-next",
            slideDuplicateNextClass: "swiper-slide-duplicate-next",
            slidePrevClass: "swiper-slide-prev",
            slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
            wrapperClass: "swiper-wrapper",
            runCallbacksOnInit: !0
        }, R = {
            update: u, translate: v, transition: f, slide: m, loop: g, grabCursor: b, manipulation: O, events: {
                attachEvents: function () {
                    var e = this.params, t = this.touchEvents, s = this.el, a = this.wrapperEl;
                    this.onTouchStart = G.bind(this), this.onTouchMove = H.bind(this), this.onTouchEnd = B.bind(this), e.cssMode && (this.onScroll = V.bind(this)), this.onClick = X.bind(this);
                    var r = !!e.nested;
                    if (!h.touch && h.pointerEvents) s.addEventListener(t.start, this.onTouchStart, !1), i.addEventListener(t.move, this.onTouchMove, r), i.addEventListener(t.end, this.onTouchEnd, !1); else {
                        if (h.touch) {
                            var n = !("touchstart" !== t.start || !h.passiveListener || !e.passiveListeners) && {
                                passive: !0,
                                capture: !1
                            };
                            s.addEventListener(t.start, this.onTouchStart, n), s.addEventListener(t.move, this.onTouchMove, h.passiveListener ? {
                                passive: !1,
                                capture: r
                            } : r), s.addEventListener(t.end, this.onTouchEnd, n), t.cancel && s.addEventListener(t.cancel, this.onTouchEnd, n), Y || (i.addEventListener("touchstart", F), Y = !0)
                        }
                        (e.simulateTouch && !A.ios && !A.android || e.simulateTouch && !h.touch && A.ios) && (s.addEventListener("mousedown", this.onTouchStart, !1), i.addEventListener("mousemove", this.onTouchMove, r), i.addEventListener("mouseup", this.onTouchEnd, !1))
                    }
                    (e.preventClicks || e.preventClicksPropagation) && s.addEventListener("click", this.onClick, !0), e.cssMode && a.addEventListener("scroll", this.onScroll), e.updateOnWindowResize ? this.on(A.ios || A.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", N, !0) : this.on("observerUpdate", N, !0)
                }, detachEvents: function () {
                    var e = this.params, t = this.touchEvents, s = this.el, a = this.wrapperEl, r = !!e.nested;
                    if (!h.touch && h.pointerEvents) s.removeEventListener(t.start, this.onTouchStart, !1), i.removeEventListener(t.move, this.onTouchMove, r), i.removeEventListener(t.end, this.onTouchEnd, !1); else {
                        if (h.touch) {
                            var n = !("onTouchStart" !== t.start || !h.passiveListener || !e.passiveListeners) && {
                                passive: !0,
                                capture: !1
                            };
                            s.removeEventListener(t.start, this.onTouchStart, n), s.removeEventListener(t.move, this.onTouchMove, r), s.removeEventListener(t.end, this.onTouchEnd, n), t.cancel && s.removeEventListener(t.cancel, this.onTouchEnd, n)
                        }
                        (e.simulateTouch && !A.ios && !A.android || e.simulateTouch && !h.touch && A.ios) && (s.removeEventListener("mousedown", this.onTouchStart, !1), i.removeEventListener("mousemove", this.onTouchMove, r), i.removeEventListener("mouseup", this.onTouchEnd, !1))
                    }
                    (e.preventClicks || e.preventClicksPropagation) && s.removeEventListener("click", this.onClick, !0), e.cssMode && a.removeEventListener("scroll", this.onScroll), this.off(A.ios || A.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", N)
                }
            }, breakpoints: {
                setBreakpoint: function () {
                    var e = this.activeIndex, t = this.initialized, i = this.loopedSlides;
                    void 0 === i && (i = 0);
                    var s = this.params, a = this.$el, r = s.breakpoints;
                    if (r && (!r || 0 !== Object.keys(r).length)) {
                        var n = this.getBreakpoint(r);
                        if (n && this.currentBreakpoint !== n) {
                            var o = n in r ? r[n] : void 0;
                            o && ["slidesPerView", "spaceBetween", "slidesPerGroup", "slidesPerGroupSkip", "slidesPerColumn"].forEach((function (e) {
                                var t = o[e];
                                void 0 !== t && (o[e] = "slidesPerView" !== e || "AUTO" !== t && "auto" !== t ? "slidesPerView" === e ? parseFloat(t) : parseInt(t, 10) : "auto")
                            }));
                            var l = o || this.originalParams, h = s.slidesPerColumn > 1, p = l.slidesPerColumn > 1;
                            h && !p ? a.removeClass(s.containerModifierClass + "multirow " + s.containerModifierClass + "multirow-column") : !h && p && (a.addClass(s.containerModifierClass + "multirow"), "column" === l.slidesPerColumnFill && a.addClass(s.containerModifierClass + "multirow-column"));
                            var c = l.direction && l.direction !== s.direction,
                                u = s.loop && (l.slidesPerView !== s.slidesPerView || c);
                            c && t && this.changeDirection(), d.extend(this.params, l), d.extend(this, {
                                allowTouchMove: this.params.allowTouchMove,
                                allowSlideNext: this.params.allowSlideNext,
                                allowSlidePrev: this.params.allowSlidePrev
                            }), this.currentBreakpoint = n, u && t && (this.loopDestroy(), this.loopCreate(), this.updateSlides(), this.slideTo(e - i + this.loopedSlides, 0, !1)), this.emit("breakpoint", l)
                        }
                    }
                }, getBreakpoint: function (e) {
                    if (e) {
                        var t = !1, i = Object.keys(e).map((function (e) {
                            if ("string" == typeof e && 0 === e.indexOf("@")) {
                                var t = parseFloat(e.substr(1));
                                return {value: a.innerHeight * t, point: e}
                            }
                            return {value: e, point: e}
                        }));
                        i.sort((function (e, t) {
                            return parseInt(e.value, 10) - parseInt(t.value, 10)
                        }));
                        for (var s = 0; s < i.length; s += 1) {
                            var r = i[s], n = r.point;
                            r.value <= a.innerWidth && (t = n)
                        }
                        return t || "max"
                    }
                }
            }, checkOverflow: {
                checkOverflow: function () {
                    var e = this.params, t = this.isLocked,
                        i = this.slides.length > 0 && e.slidesOffsetBefore + e.spaceBetween * (this.slides.length - 1) + this.slides[0].offsetWidth * this.slides.length;
                    e.slidesOffsetBefore && e.slidesOffsetAfter && i ? this.isLocked = i <= this.size : this.isLocked = 1 === this.snapGrid.length, this.allowSlideNext = !this.isLocked, this.allowSlidePrev = !this.isLocked, t !== this.isLocked && this.emit(this.isLocked ? "lock" : "unlock"), t && t !== this.isLocked && (this.isEnd = !1, this.navigation && this.navigation.update())
                }
            }, classes: {
                addClasses: function () {
                    var e = this.classNames, t = this.params, i = this.rtl, s = this.$el, a = [];
                    a.push("initialized"), a.push(t.direction), t.freeMode && a.push("free-mode"), t.autoHeight && a.push("autoheight"), i && a.push("rtl"), t.slidesPerColumn > 1 && (a.push("multirow"), "column" === t.slidesPerColumnFill && a.push("multirow-column")), A.android && a.push("android"), A.ios && a.push("ios"), t.cssMode && a.push("css-mode"), a.forEach((function (i) {
                        e.push(t.containerModifierClass + i)
                    })), s.addClass(e.join(" "))
                }, removeClasses: function () {
                    var e = this.$el, t = this.classNames;
                    e.removeClass(t.join(" "))
                }
            }, images: {
                loadImage: function (e, t, i, s, r, o) {
                    var l;

                    function d() {
                        o && o()
                    }

                    n(e).parent("picture")[0] || e.complete && r ? d() : t ? ((l = new a.Image).onload = d, l.onerror = d, s && (l.sizes = s), i && (l.srcset = i), t && (l.src = t)) : d()
                }, preloadImages: function () {
                    var e = this;

                    function t() {
                        null != e && e && !e.destroyed && (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1), e.imagesLoaded === e.imagesToLoad.length && (e.params.updateOnImagesReady && e.update(), e.emit("imagesReady")))
                    }

                    e.imagesToLoad = e.$el.find("img");
                    for (var i = 0; i < e.imagesToLoad.length; i += 1) {
                        var s = e.imagesToLoad[i];
                        e.loadImage(s, s.currentSrc || s.getAttribute("src"), s.srcset || s.getAttribute("srcset"), s.sizes || s.getAttribute("sizes"), !0, t)
                    }
                }
            }
        }, q = {}, j = function (e) {
            function t() {
                for (var i, s, a, r = [], o = arguments.length; o--;) r[o] = arguments[o];
                1 === r.length && r[0].constructor && r[0].constructor === Object ? a = r[0] : (s = (i = r)[0], a = i[1]), a || (a = {}), a = d.extend({}, a), s && !a.el && (a.el = s), e.call(this, a), Object.keys(R).forEach((function (e) {
                    Object.keys(R[e]).forEach((function (i) {
                        t.prototype[i] || (t.prototype[i] = R[e][i])
                    }))
                }));
                var l = this;
                void 0 === l.modules && (l.modules = {}), Object.keys(l.modules).forEach((function (e) {
                    var t = l.modules[e];
                    if (t.params) {
                        var i = Object.keys(t.params)[0], s = t.params[i];
                        if ("object" != typeof s || null === s) return;
                        if (!(i in a) || !("enabled" in s)) return;
                        !0 === a[i] && (a[i] = {enabled: !0}), "object" != typeof a[i] || "enabled" in a[i] || (a[i].enabled = !0), a[i] || (a[i] = {enabled: !1})
                    }
                }));
                var p = d.extend({}, W);
                l.useModulesParams(p), l.params = d.extend({}, p, q, a), l.originalParams = d.extend({}, l.params), l.passedParams = d.extend({}, a), l.$ = n;
                var c = n(l.params.el);
                if (s = c[0]) {
                    if (c.length > 1) {
                        var u = [];
                        return c.each((function (e, i) {
                            var s = d.extend({}, a, {el: i});
                            u.push(new t(s))
                        })), u
                    }
                    var v, f, m;
                    return s.swiper = l, c.data("swiper", l), s && s.shadowRoot && s.shadowRoot.querySelector ? (v = n(s.shadowRoot.querySelector("." + l.params.wrapperClass))).children = function (e) {
                        return c.children(e)
                    } : v = c.children("." + l.params.wrapperClass), d.extend(l, {
                        $el: c,
                        el: s,
                        $wrapperEl: v,
                        wrapperEl: v[0],
                        classNames: [],
                        slides: n(),
                        slidesGrid: [],
                        snapGrid: [],
                        slidesSizesGrid: [],
                        isHorizontal: function () {
                            return "horizontal" === l.params.direction
                        },
                        isVertical: function () {
                            return "vertical" === l.params.direction
                        },
                        rtl: "rtl" === s.dir.toLowerCase() || "rtl" === c.css("direction"),
                        rtlTranslate: "horizontal" === l.params.direction && ("rtl" === s.dir.toLowerCase() || "rtl" === c.css("direction")),
                        wrongRTL: "-webkit-box" === v.css("display"),
                        activeIndex: 0,
                        realIndex: 0,
                        isBeginning: !0,
                        isEnd: !1,
                        translate: 0,
                        previousTranslate: 0,
                        progress: 0,
                        velocity: 0,
                        animating: !1,
                        allowSlideNext: l.params.allowSlideNext,
                        allowSlidePrev: l.params.allowSlidePrev,
                        touchEvents: (f = ["touchstart", "touchmove", "touchend", "touchcancel"], m = ["mousedown", "mousemove", "mouseup"], h.pointerEvents && (m = ["pointerdown", "pointermove", "pointerup"]), l.touchEventsTouch = {
                            start: f[0],
                            move: f[1],
                            end: f[2],
                            cancel: f[3]
                        }, l.touchEventsDesktop = {
                            start: m[0],
                            move: m[1],
                            end: m[2]
                        }, h.touch || !l.params.simulateTouch ? l.touchEventsTouch : l.touchEventsDesktop),
                        touchEventsData: {
                            isTouched: void 0,
                            isMoved: void 0,
                            allowTouchCallbacks: void 0,
                            touchStartTime: void 0,
                            isScrolling: void 0,
                            currentTranslate: void 0,
                            startTranslate: void 0,
                            allowThresholdMove: void 0,
                            formElements: "input, select, option, textarea, button, video, label",
                            lastClickTime: d.now(),
                            clickTimeout: void 0,
                            velocities: [],
                            allowMomentumBounce: void 0,
                            isTouchEvent: void 0,
                            startMoving: void 0
                        },
                        allowClick: !0,
                        allowTouchMove: l.params.allowTouchMove,
                        touches: {startX: 0, startY: 0, currentX: 0, currentY: 0, diff: 0},
                        imagesToLoad: [],
                        imagesLoaded: 0
                    }), l.useModules(), l.params.init && l.init(), l
                }
            }

            e && (t.__proto__ = e), t.prototype = Object.create(e && e.prototype), t.prototype.constructor = t;
            var i = {
                extendedDefaults: {configurable: !0},
                defaults: {configurable: !0},
                Class: {configurable: !0},
                $: {configurable: !0}
            };
            return t.prototype.slidesPerViewDynamic = function () {
                var e = this.params, t = this.slides, i = this.slidesGrid, s = this.size, a = this.activeIndex, r = 1;
                if (e.centeredSlides) {
                    for (var n, o = t[a].swiperSlideSize, l = a + 1; l < t.length; l += 1) t[l] && !n && (r += 1, (o += t[l].swiperSlideSize) > s && (n = !0));
                    for (var d = a - 1; d >= 0; d -= 1) t[d] && !n && (r += 1, (o += t[d].swiperSlideSize) > s && (n = !0))
                } else for (var h = a + 1; h < t.length; h += 1) i[h] - i[a] < s && (r += 1);
                return r
            }, t.prototype.update = function () {
                var e = this;
                if (e && !e.destroyed) {
                    var t = e.snapGrid, i = e.params;
                    i.breakpoints && e.setBreakpoint(), e.updateSize(), e.updateSlides(), e.updateProgress(), e.updateSlidesClasses(), e.params.freeMode ? (s(), e.params.autoHeight && e.updateAutoHeight()) : (("auto" === e.params.slidesPerView || e.params.slidesPerView > 1) && e.isEnd && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0)) || s(), i.watchOverflow && t !== e.snapGrid && e.checkOverflow(), e.emit("update")
                }

                function s() {
                    var t = e.rtlTranslate ? -1 * e.translate : e.translate,
                        i = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
                    e.setTranslate(i), e.updateActiveIndex(), e.updateSlidesClasses()
                }
            }, t.prototype.changeDirection = function (e, t) {
                void 0 === t && (t = !0);
                var i = this.params.direction;
                return e || (e = "horizontal" === i ? "vertical" : "horizontal"), e === i || "horizontal" !== e && "vertical" !== e || (this.$el.removeClass("" + this.params.containerModifierClass + i).addClass("" + this.params.containerModifierClass + e), this.params.direction = e, this.slides.each((function (t, i) {
                    "vertical" === e ? i.style.width = "" : i.style.height = ""
                })), this.emit("changeDirection"), t && this.update()), this
            }, t.prototype.init = function () {
                this.initialized || (this.emit("beforeInit"), this.params.breakpoints && this.setBreakpoint(), this.addClasses(), this.params.loop && this.loopCreate(), this.updateSize(), this.updateSlides(), this.params.watchOverflow && this.checkOverflow(), this.params.grabCursor && this.setGrabCursor(), this.params.preloadImages && this.preloadImages(), this.params.loop ? this.slideTo(this.params.initialSlide + this.loopedSlides, 0, this.params.runCallbacksOnInit) : this.slideTo(this.params.initialSlide, 0, this.params.runCallbacksOnInit), this.attachEvents(), this.initialized = !0, this.emit("init"))
            }, t.prototype.destroy = function (e, t) {
                void 0 === e && (e = !0), void 0 === t && (t = !0);
                var i = this, s = i.params, a = i.$el, r = i.$wrapperEl, n = i.slides;
                return void 0 === i.params || i.destroyed || (i.emit("beforeDestroy"), i.initialized = !1, i.detachEvents(), s.loop && i.loopDestroy(), t && (i.removeClasses(), a.removeAttr("style"), r.removeAttr("style"), n && n.length && n.removeClass([s.slideVisibleClass, s.slideActiveClass, s.slideNextClass, s.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index")), i.emit("destroy"), Object.keys(i.eventsListeners).forEach((function (e) {
                    i.off(e)
                })), !1 !== e && (i.$el[0].swiper = null, i.$el.data("swiper", null), d.deleteProps(i)), i.destroyed = !0), null
            }, t.extendDefaults = function (e) {
                d.extend(q, e)
            }, i.extendedDefaults.get = function () {
                return q
            }, i.defaults.get = function () {
                return W
            }, i.Class.get = function () {
                return e
            }, i.$.get = function () {
                return n
            }, Object.defineProperties(t, i), t
        }(p), K = {name: "device", proto: {device: A}, static: {device: A}},
        U = {name: "support", proto: {support: h}, static: {support: h}}, _ = {
            isEdge: !!a.navigator.userAgent.match(/Edge/g), isSafari: function () {
                var e = a.navigator.userAgent.toLowerCase();
                return e.indexOf("safari") >= 0 && e.indexOf("chrome") < 0 && e.indexOf("android") < 0
            }(), isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(a.navigator.userAgent)
        }, Z = {name: "browser", proto: {browser: _}, static: {browser: _}}, Q = {
            name: "resize", create: function () {
                var e = this;
                d.extend(e, {
                    resize: {
                        resizeHandler: function () {
                            e && !e.destroyed && e.initialized && (e.emit("beforeResize"), e.emit("resize"))
                        }, orientationChangeHandler: function () {
                            e && !e.destroyed && e.initialized && e.emit("orientationchange")
                        }
                    }
                })
            }, on: {
                init: function () {
                    a.addEventListener("resize", this.resize.resizeHandler), a.addEventListener("orientationchange", this.resize.orientationChangeHandler)
                }, destroy: function () {
                    a.removeEventListener("resize", this.resize.resizeHandler), a.removeEventListener("orientationchange", this.resize.orientationChangeHandler)
                }
            }
        }, J = {
            func: a.MutationObserver || a.WebkitMutationObserver, attach: function (e, t) {
                void 0 === t && (t = {});
                var i = this, s = new (0, J.func)((function (e) {
                    if (1 !== e.length) {
                        var t = function () {
                            i.emit("observerUpdate", e[0])
                        };
                        a.requestAnimationFrame ? a.requestAnimationFrame(t) : a.setTimeout(t, 0)
                    } else i.emit("observerUpdate", e[0])
                }));
                s.observe(e, {
                    attributes: void 0 === t.attributes || t.attributes,
                    childList: void 0 === t.childList || t.childList,
                    characterData: void 0 === t.characterData || t.characterData
                }), i.observer.observers.push(s)
            }, init: function () {
                if (h.observer && this.params.observer) {
                    if (this.params.observeParents) for (var e = this.$el.parents(), t = 0; t < e.length; t += 1) this.observer.attach(e[t]);
                    this.observer.attach(this.$el[0], {childList: this.params.observeSlideChildren}), this.observer.attach(this.$wrapperEl[0], {attributes: !1})
                }
            }, destroy: function () {
                this.observer.observers.forEach((function (e) {
                    e.disconnect()
                })), this.observer.observers = []
            }
        }, ee = {
            name: "observer",
            params: {observer: !1, observeParents: !1, observeSlideChildren: !1},
            create: function () {
                d.extend(this, {
                    observer: {
                        init: J.init.bind(this),
                        attach: J.attach.bind(this),
                        destroy: J.destroy.bind(this),
                        observers: []
                    }
                })
            },
            on: {
                init: function () {
                    this.observer.init()
                }, destroy: function () {
                    this.observer.destroy()
                }
            }
        }, te = {
            update: function (e) {
                var t = this, i = t.params, s = i.slidesPerView, a = i.slidesPerGroup, r = i.centeredSlides,
                    n = t.params.virtual, o = n.addSlidesBefore, l = n.addSlidesAfter, h = t.virtual, p = h.from, c = h.to,
                    u = h.slides, v = h.slidesGrid, f = h.renderSlide, m = h.offset;
                t.updateActiveIndex();
                var g, b, w, y = t.activeIndex || 0;
                g = t.rtlTranslate ? "right" : t.isHorizontal() ? "left" : "top", r ? (b = Math.floor(s / 2) + a + o, w = Math.floor(s / 2) + a + l) : (b = s + (a - 1) + o, w = a + l);
                var x = Math.max((y || 0) - w, 0), E = Math.min((y || 0) + b, u.length - 1),
                    T = (t.slidesGrid[x] || 0) - (t.slidesGrid[0] || 0);

                function S() {
                    t.updateSlides(), t.updateProgress(), t.updateSlidesClasses(), t.lazy && t.params.lazy.enabled && t.lazy.load()
                }

                if (d.extend(t.virtual, {
                    from: x,
                    to: E,
                    offset: T,
                    slidesGrid: t.slidesGrid
                }), p === x && c === E && !e) return t.slidesGrid !== v && T !== m && t.slides.css(g, T + "px"), void t.updateProgress();
                if (t.params.virtual.renderExternal) return t.params.virtual.renderExternal.call(t, {
                    offset: T,
                    from: x,
                    to: E,
                    slides: function () {
                        for (var e = [], t = x; t <= E; t += 1) e.push(u[t]);
                        return e
                    }()
                }), void S();
                var C = [], M = [];
                if (e) t.$wrapperEl.find("." + t.params.slideClass).remove(); else for (var P = p; P <= c; P += 1) (P < x || P > E) && t.$wrapperEl.find("." + t.params.slideClass + '[data-swiper-slide-index="' + P + '"]').remove();
                for (var z = 0; z < u.length; z += 1) z >= x && z <= E && (void 0 === c || e ? M.push(z) : (z > c && M.push(z), z < p && C.push(z)));
                M.forEach((function (e) {
                    t.$wrapperEl.append(f(u[e], e))
                })), C.sort((function (e, t) {
                    return t - e
                })).forEach((function (e) {
                    t.$wrapperEl.prepend(f(u[e], e))
                })), t.$wrapperEl.children(".swiper-slide").css(g, T + "px"), S()
            }, renderSlide: function (e, t) {
                var i = this.params.virtual;
                if (i.cache && this.virtual.cache[t]) return this.virtual.cache[t];
                var s = i.renderSlide ? n(i.renderSlide.call(this, e, t)) : n('<div class="' + this.params.slideClass + '" data-swiper-slide-index="' + t + '">' + e + "</div>");
                return s.attr("data-swiper-slide-index") || s.attr("data-swiper-slide-index", t), i.cache && (this.virtual.cache[t] = s), s
            }, appendSlide: function (e) {
                if ("object" == typeof e && "length" in e) for (var t = 0; t < e.length; t += 1) e[t] && this.virtual.slides.push(e[t]); else this.virtual.slides.push(e);
                this.virtual.update(!0)
            }, prependSlide: function (e) {
                var t = this.activeIndex, i = t + 1, s = 1;
                if (Array.isArray(e)) {
                    for (var a = 0; a < e.length; a += 1) e[a] && this.virtual.slides.unshift(e[a]);
                    i = t + e.length, s = e.length
                } else this.virtual.slides.unshift(e);
                if (this.params.virtual.cache) {
                    var r = this.virtual.cache, n = {};
                    Object.keys(r).forEach((function (e) {
                        var t = r[e], i = t.attr("data-swiper-slide-index");
                        i && t.attr("data-swiper-slide-index", parseInt(i, 10) + 1), n[parseInt(e, 10) + s] = t
                    })), this.virtual.cache = n
                }
                this.virtual.update(!0), this.slideTo(i, 0)
            }, removeSlide: function (e) {
                if (null != e) {
                    var t = this.activeIndex;
                    if (Array.isArray(e)) for (var i = e.length - 1; i >= 0; i -= 1) this.virtual.slides.splice(e[i], 1), this.params.virtual.cache && delete this.virtual.cache[e[i]], e[i] < t && (t -= 1), t = Math.max(t, 0); else this.virtual.slides.splice(e, 1), this.params.virtual.cache && delete this.virtual.cache[e], e < t && (t -= 1), t = Math.max(t, 0);
                    this.virtual.update(!0), this.slideTo(t, 0)
                }
            }, removeAllSlides: function () {
                this.virtual.slides = [], this.params.virtual.cache && (this.virtual.cache = {}), this.virtual.update(!0), this.slideTo(0, 0)
            }
        }, ie = {
            name: "virtual",
            params: {
                virtual: {
                    enabled: !1,
                    slides: [],
                    cache: !0,
                    renderSlide: null,
                    renderExternal: null,
                    addSlidesBefore: 0,
                    addSlidesAfter: 0
                }
            },
            create: function () {
                d.extend(this, {
                    virtual: {
                        update: te.update.bind(this),
                        appendSlide: te.appendSlide.bind(this),
                        prependSlide: te.prependSlide.bind(this),
                        removeSlide: te.removeSlide.bind(this),
                        removeAllSlides: te.removeAllSlides.bind(this),
                        renderSlide: te.renderSlide.bind(this),
                        slides: this.params.virtual.slides,
                        cache: {}
                    }
                })
            },
            on: {
                beforeInit: function () {
                    if (this.params.virtual.enabled) {
                        this.classNames.push(this.params.containerModifierClass + "virtual");
                        var e = {watchSlidesProgress: !0};
                        d.extend(this.params, e), d.extend(this.originalParams, e), this.params.initialSlide || this.virtual.update()
                    }
                }, setTranslate: function () {
                    this.params.virtual.enabled && this.virtual.update()
                }
            }
        }, se = {
            handle: function (e) {
                var t = this.rtlTranslate, s = e;
                s.originalEvent && (s = s.originalEvent);
                var r = s.keyCode || s.charCode, n = this.params.keyboard.pageUpDown, o = n && 33 === r, l = n && 34 === r,
                    d = 37 === r, h = 39 === r, p = 38 === r, c = 40 === r;
                if (!this.allowSlideNext && (this.isHorizontal() && h || this.isVertical() && c || l)) return !1;
                if (!this.allowSlidePrev && (this.isHorizontal() && d || this.isVertical() && p || o)) return !1;
                if (!(s.shiftKey || s.altKey || s.ctrlKey || s.metaKey || i.activeElement && i.activeElement.nodeName && ("input" === i.activeElement.nodeName.toLowerCase() || "textarea" === i.activeElement.nodeName.toLowerCase()))) {
                    if (this.params.keyboard.onlyInViewport && (o || l || d || h || p || c)) {
                        var u = !1;
                        if (this.$el.parents("." + this.params.slideClass).length > 0 && 0 === this.$el.parents("." + this.params.slideActiveClass).length) return;
                        var v = a.innerWidth, f = a.innerHeight, m = this.$el.offset();
                        t && (m.left -= this.$el[0].scrollLeft);
                        for (var g = [[m.left, m.top], [m.left + this.width, m.top], [m.left, m.top + this.height], [m.left + this.width, m.top + this.height]], b = 0; b < g.length; b += 1) {
                            var w = g[b];
                            w[0] >= 0 && w[0] <= v && w[1] >= 0 && w[1] <= f && (u = !0)
                        }
                        if (!u) return
                    }
                    this.isHorizontal() ? ((o || l || d || h) && (s.preventDefault ? s.preventDefault() : s.returnValue = !1), ((l || h) && !t || (o || d) && t) && this.slideNext(), ((o || d) && !t || (l || h) && t) && this.slidePrev()) : ((o || l || p || c) && (s.preventDefault ? s.preventDefault() : s.returnValue = !1), (l || c) && this.slideNext(), (o || p) && this.slidePrev()), this.emit("keyPress", r)
                }
            }, enable: function () {
                this.keyboard.enabled || (n(i).on("keydown", this.keyboard.handle), this.keyboard.enabled = !0)
            }, disable: function () {
                this.keyboard.enabled && (n(i).off("keydown", this.keyboard.handle), this.keyboard.enabled = !1)
            }
        }, ae = {
            name: "keyboard",
            params: {keyboard: {enabled: !1, onlyInViewport: !0, pageUpDown: !0}},
            create: function () {
                d.extend(this, {
                    keyboard: {
                        enabled: !1,
                        enable: se.enable.bind(this),
                        disable: se.disable.bind(this),
                        handle: se.handle.bind(this)
                    }
                })
            },
            on: {
                init: function () {
                    this.params.keyboard.enabled && this.keyboard.enable()
                }, destroy: function () {
                    this.keyboard.enabled && this.keyboard.disable()
                }
            }
        };
    var re = {
        lastScrollTime: d.now(), lastEventBeforeSnap: void 0, recentWheelEvents: [], event: function () {
            return a.navigator.userAgent.indexOf("firefox") > -1 ? "DOMMouseScroll" : function () {
                var e = "onwheel" in i;
                if (!e) {
                    var t = i.createElement("div");
                    t.setAttribute("onwheel", "return;"), e = "function" == typeof t.onwheel
                }
                return !e && i.implementation && i.implementation.hasFeature && !0 !== i.implementation.hasFeature("", "") && (e = i.implementation.hasFeature("Events.wheel", "3.0")), e
            }() ? "wheel" : "mousewheel"
        }, normalize: function (e) {
            var t = 0, i = 0, s = 0, a = 0;
            return "detail" in e && (i = e.detail), "wheelDelta" in e && (i = -e.wheelDelta / 120), "wheelDeltaY" in e && (i = -e.wheelDeltaY / 120), "wheelDeltaX" in e && (t = -e.wheelDeltaX / 120), "axis" in e && e.axis === e.HORIZONTAL_AXIS && (t = i, i = 0), s = 10 * t, a = 10 * i, "deltaY" in e && (a = e.deltaY), "deltaX" in e && (s = e.deltaX), e.shiftKey && !s && (s = a, a = 0), (s || a) && e.deltaMode && (1 === e.deltaMode ? (s *= 40, a *= 40) : (s *= 800, a *= 800)), s && !t && (t = s < 1 ? -1 : 1), a && !i && (i = a < 1 ? -1 : 1), {
                spinX: t,
                spinY: i,
                pixelX: s,
                pixelY: a
            }
        }, handleMouseEnter: function () {
            this.mouseEntered = !0
        }, handleMouseLeave: function () {
            this.mouseEntered = !1
        }, handle: function (e) {
            var t = e, i = this, s = i.params.mousewheel;
            i.params.cssMode && t.preventDefault();
            var a = i.$el;
            if ("container" !== i.params.mousewheel.eventsTarged && (a = n(i.params.mousewheel.eventsTarged)), !i.mouseEntered && !a[0].contains(t.target) && !s.releaseOnEdges) return !0;
            t.originalEvent && (t = t.originalEvent);
            var r = 0, o = i.rtlTranslate ? -1 : 1, l = re.normalize(t);
            if (s.forceToAxis) if (i.isHorizontal()) {
                if (!(Math.abs(l.pixelX) > Math.abs(l.pixelY))) return !0;
                r = -l.pixelX * o
            } else {
                if (!(Math.abs(l.pixelY) > Math.abs(l.pixelX))) return !0;
                r = -l.pixelY
            } else r = Math.abs(l.pixelX) > Math.abs(l.pixelY) ? -l.pixelX * o : -l.pixelY;
            if (0 === r) return !0;
            if (s.invert && (r = -r), i.params.freeMode) {
                var h = {time: d.now(), delta: Math.abs(r), direction: Math.sign(r)},
                    p = i.mousewheel.lastEventBeforeSnap,
                    c = p && h.time < p.time + 500 && h.delta <= p.delta && h.direction === p.direction;
                if (!c) {
                    i.mousewheel.lastEventBeforeSnap = void 0, i.params.loop && i.loopFix();
                    var u = i.getTranslate() + r * s.sensitivity, v = i.isBeginning, f = i.isEnd;
                    if (u >= i.minTranslate() && (u = i.minTranslate()), u <= i.maxTranslate() && (u = i.maxTranslate()), i.setTransition(0), i.setTranslate(u), i.updateProgress(), i.updateActiveIndex(), i.updateSlidesClasses(), (!v && i.isBeginning || !f && i.isEnd) && i.updateSlidesClasses(), i.params.freeModeSticky) {
                        clearTimeout(i.mousewheel.timeout), i.mousewheel.timeout = void 0;
                        var m = i.mousewheel.recentWheelEvents;
                        m.length >= 15 && m.shift();
                        var g = m.length ? m[m.length - 1] : void 0, b = m[0];
                        if (m.push(h), g && (h.delta > g.delta || h.direction !== g.direction)) m.splice(0); else if (m.length >= 15 && h.time - b.time < 500 && b.delta - h.delta >= 1 && h.delta <= 6) {
                            var w = r > 0 ? .8 : .2;
                            i.mousewheel.lastEventBeforeSnap = h, m.splice(0), i.mousewheel.timeout = d.nextTick((function () {
                                i.slideToClosest(i.params.speed, !0, void 0, w)
                            }), 0)
                        }
                        i.mousewheel.timeout || (i.mousewheel.timeout = d.nextTick((function () {
                            i.mousewheel.lastEventBeforeSnap = h, m.splice(0), i.slideToClosest(i.params.speed, !0, void 0, .5)
                        }), 500))
                    }
                    if (c || i.emit("scroll", t), i.params.autoplay && i.params.autoplayDisableOnInteraction && i.autoplay.stop(), u === i.minTranslate() || u === i.maxTranslate()) return !0
                }
            } else {
                var y = {time: d.now(), delta: Math.abs(r), direction: Math.sign(r), raw: e},
                    x = i.mousewheel.recentWheelEvents;
                x.length >= 2 && x.shift();
                var E = x.length ? x[x.length - 1] : void 0;
                if (x.push(y), E ? (y.direction !== E.direction || y.delta > E.delta || y.time > E.time + 150) && i.mousewheel.animateSlider(y) : i.mousewheel.animateSlider(y), i.mousewheel.releaseScroll(y)) return !0
            }
            return t.preventDefault ? t.preventDefault() : t.returnValue = !1, !1
        }, animateSlider: function (e) {
            return e.delta >= 6 && d.now() - this.mousewheel.lastScrollTime < 60 || (e.direction < 0 ? this.isEnd && !this.params.loop || this.animating || (this.slideNext(), this.emit("scroll", e.raw)) : this.isBeginning && !this.params.loop || this.animating || (this.slidePrev(), this.emit("scroll", e.raw)), this.mousewheel.lastScrollTime = (new a.Date).getTime(), !1)
        }, releaseScroll: function (e) {
            var t = this.params.mousewheel;
            if (e.direction < 0) {
                if (this.isEnd && !this.params.loop && t.releaseOnEdges) return !0
            } else if (this.isBeginning && !this.params.loop && t.releaseOnEdges) return !0;
            return !1
        }, enable: function () {
            var e = re.event();
            if (this.params.cssMode) return this.wrapperEl.removeEventListener(e, this.mousewheel.handle), !0;
            if (!e) return !1;
            if (this.mousewheel.enabled) return !1;
            var t = this.$el;
            return "container" !== this.params.mousewheel.eventsTarged && (t = n(this.params.mousewheel.eventsTarged)), t.on("mouseenter", this.mousewheel.handleMouseEnter), t.on("mouseleave", this.mousewheel.handleMouseLeave), t.on(e, this.mousewheel.handle), this.mousewheel.enabled = !0, !0
        }, disable: function () {
            var e = re.event();
            if (this.params.cssMode) return this.wrapperEl.addEventListener(e, this.mousewheel.handle), !0;
            if (!e) return !1;
            if (!this.mousewheel.enabled) return !1;
            var t = this.$el;
            return "container" !== this.params.mousewheel.eventsTarged && (t = n(this.params.mousewheel.eventsTarged)), t.off(e, this.mousewheel.handle), this.mousewheel.enabled = !1, !0
        }
    }, ne = {
        update: function () {
            var e = this.params.navigation;
            if (!this.params.loop) {
                var t = this.navigation, i = t.$nextEl, s = t.$prevEl;
                s && s.length > 0 && (this.isBeginning ? s.addClass(e.disabledClass) : s.removeClass(e.disabledClass), s[this.params.watchOverflow && this.isLocked ? "addClass" : "removeClass"](e.lockClass)), i && i.length > 0 && (this.isEnd ? i.addClass(e.disabledClass) : i.removeClass(e.disabledClass), i[this.params.watchOverflow && this.isLocked ? "addClass" : "removeClass"](e.lockClass))
            }
        }, onPrevClick: function (e) {
            e.preventDefault(), this.isBeginning && !this.params.loop || this.slidePrev()
        }, onNextClick: function (e) {
            e.preventDefault(), this.isEnd && !this.params.loop || this.slideNext()
        }, init: function () {
            var e, t, i = this.params.navigation;
            (i.nextEl || i.prevEl) && (i.nextEl && (e = n(i.nextEl), this.params.uniqueNavElements && "string" == typeof i.nextEl && e.length > 1 && 1 === this.$el.find(i.nextEl).length && (e = this.$el.find(i.nextEl))), i.prevEl && (t = n(i.prevEl), this.params.uniqueNavElements && "string" == typeof i.prevEl && t.length > 1 && 1 === this.$el.find(i.prevEl).length && (t = this.$el.find(i.prevEl))), e && e.length > 0 && e.on("click", this.navigation.onNextClick), t && t.length > 0 && t.on("click", this.navigation.onPrevClick), d.extend(this.navigation, {
                $nextEl: e,
                nextEl: e && e[0],
                $prevEl: t,
                prevEl: t && t[0]
            }))
        }, destroy: function () {
            var e = this.navigation, t = e.$nextEl, i = e.$prevEl;
            t && t.length && (t.off("click", this.navigation.onNextClick), t.removeClass(this.params.navigation.disabledClass)), i && i.length && (i.off("click", this.navigation.onPrevClick), i.removeClass(this.params.navigation.disabledClass))
        }
    }, oe = {
        update: function () {
            var e = this.rtl, t = this.params.pagination;
            if (t.el && this.pagination.el && this.pagination.$el && 0 !== this.pagination.$el.length) {
                var i,
                    s = this.virtual && this.params.virtual.enabled ? this.virtual.slides.length : this.slides.length,
                    a = this.pagination.$el,
                    r = this.params.loop ? Math.ceil((s - 2 * this.loopedSlides) / this.params.slidesPerGroup) : this.snapGrid.length;
                if (this.params.loop ? ((i = Math.ceil((this.activeIndex - this.loopedSlides) / this.params.slidesPerGroup)) > s - 1 - 2 * this.loopedSlides && (i -= s - 2 * this.loopedSlides), i > r - 1 && (i -= r), i < 0 && "bullets" !== this.params.paginationType && (i = r + i)) : i = void 0 !== this.snapIndex ? this.snapIndex : this.activeIndex || 0, "bullets" === t.type && this.pagination.bullets && this.pagination.bullets.length > 0) {
                    var o, l, d, h = this.pagination.bullets;
                    if (t.dynamicBullets && (this.pagination.bulletSize = h.eq(0)[this.isHorizontal() ? "outerWidth" : "outerHeight"](!0), a.css(this.isHorizontal() ? "width" : "height", this.pagination.bulletSize * (t.dynamicMainBullets + 4) + "px"), t.dynamicMainBullets > 1 && void 0 !== this.previousIndex && (this.pagination.dynamicBulletIndex += i - this.previousIndex, this.pagination.dynamicBulletIndex > t.dynamicMainBullets - 1 ? this.pagination.dynamicBulletIndex = t.dynamicMainBullets - 1 : this.pagination.dynamicBulletIndex < 0 && (this.pagination.dynamicBulletIndex = 0)), o = i - this.pagination.dynamicBulletIndex, d = ((l = o + (Math.min(h.length, t.dynamicMainBullets) - 1)) + o) / 2), h.removeClass(t.bulletActiveClass + " " + t.bulletActiveClass + "-next " + t.bulletActiveClass + "-next-next " + t.bulletActiveClass + "-prev " + t.bulletActiveClass + "-prev-prev " + t.bulletActiveClass + "-main"), a.length > 1) h.each((function (e, s) {
                        var a = n(s), r = a.index();
                        r === i && a.addClass(t.bulletActiveClass), t.dynamicBullets && (r >= o && r <= l && a.addClass(t.bulletActiveClass + "-main"), r === o && a.prev().addClass(t.bulletActiveClass + "-prev").prev().addClass(t.bulletActiveClass + "-prev-prev"), r === l && a.next().addClass(t.bulletActiveClass + "-next").next().addClass(t.bulletActiveClass + "-next-next"))
                    })); else {
                        var p = h.eq(i), c = p.index();
                        if (p.addClass(t.bulletActiveClass), t.dynamicBullets) {
                            for (var u = h.eq(o), v = h.eq(l), f = o; f <= l; f += 1) h.eq(f).addClass(t.bulletActiveClass + "-main");
                            if (this.params.loop) if (c >= h.length - t.dynamicMainBullets) {
                                for (var m = t.dynamicMainBullets; m >= 0; m -= 1) h.eq(h.length - m).addClass(t.bulletActiveClass + "-main");
                                h.eq(h.length - t.dynamicMainBullets - 1).addClass(t.bulletActiveClass + "-prev")
                            } else u.prev().addClass(t.bulletActiveClass + "-prev").prev().addClass(t.bulletActiveClass + "-prev-prev"), v.next().addClass(t.bulletActiveClass + "-next").next().addClass(t.bulletActiveClass + "-next-next"); else u.prev().addClass(t.bulletActiveClass + "-prev").prev().addClass(t.bulletActiveClass + "-prev-prev"), v.next().addClass(t.bulletActiveClass + "-next").next().addClass(t.bulletActiveClass + "-next-next")
                        }
                    }
                    if (t.dynamicBullets) {
                        var g = Math.min(h.length, t.dynamicMainBullets + 4),
                            b = (this.pagination.bulletSize * g - this.pagination.bulletSize) / 2 - d * this.pagination.bulletSize,
                            w = e ? "right" : "left";
                        h.css(this.isHorizontal() ? w : "top", b + "px")
                    }
                }
                if ("fraction" === t.type && (a.find("." + t.currentClass).text(t.formatFractionCurrent(i + 1)), a.find("." + t.totalClass).text(t.formatFractionTotal(r))), "progressbar" === t.type) {
                    var y;
                    y = t.progressbarOpposite ? this.isHorizontal() ? "vertical" : "horizontal" : this.isHorizontal() ? "horizontal" : "vertical";
                    var x = (i + 1) / r, E = 1, T = 1;
                    "horizontal" === y ? E = x : T = x, a.find("." + t.progressbarFillClass).transform("translate3d(0,0,0) scaleX(" + E + ") scaleY(" + T + ")").transition(this.params.speed)
                }
                "custom" === t.type && t.renderCustom ? (a.html(t.renderCustom(this, i + 1, r)), this.emit("paginationRender", this, a[0])) : this.emit("paginationUpdate", this, a[0]), a[this.params.watchOverflow && this.isLocked ? "addClass" : "removeClass"](t.lockClass)
            }
        }, render: function () {
            var e = this.params.pagination;
            if (e.el && this.pagination.el && this.pagination.$el && 0 !== this.pagination.$el.length) {
                var t = this.virtual && this.params.virtual.enabled ? this.virtual.slides.length : this.slides.length,
                    i = this.pagination.$el, s = "";
                if ("bullets" === e.type) {
                    for (var a = this.params.loop ? Math.ceil((t - 2 * this.loopedSlides) / this.params.slidesPerGroup) : this.snapGrid.length, r = 0; r < a; r += 1) e.renderBullet ? s += e.renderBullet.call(this, r, e.bulletClass) : s += "<" + e.bulletElement + ' class="' + e.bulletClass + '"></' + e.bulletElement + ">";
                    i.html(s), this.pagination.bullets = i.find("." + e.bulletClass)
                }
                "fraction" === e.type && (s = e.renderFraction ? e.renderFraction.call(this, e.currentClass, e.totalClass) : '<span class="' + e.currentClass + '"></span> / <span class="' + e.totalClass + '"></span>', i.html(s)), "progressbar" === e.type && (s = e.renderProgressbar ? e.renderProgressbar.call(this, e.progressbarFillClass) : '<span class="' + e.progressbarFillClass + '"></span>', i.html(s)), "custom" !== e.type && this.emit("paginationRender", this.pagination.$el[0])
            }
        }, init: function () {
            var e = this, t = e.params.pagination;
            if (t.el) {
                var i = n(t.el);
                0 !== i.length && (e.params.uniqueNavElements && "string" == typeof t.el && i.length > 1 && (i = e.$el.find(t.el)), "bullets" === t.type && t.clickable && i.addClass(t.clickableClass), i.addClass(t.modifierClass + t.type), "bullets" === t.type && t.dynamicBullets && (i.addClass("" + t.modifierClass + t.type + "-dynamic"), e.pagination.dynamicBulletIndex = 0, t.dynamicMainBullets < 1 && (t.dynamicMainBullets = 1)), "progressbar" === t.type && t.progressbarOpposite && i.addClass(t.progressbarOppositeClass), t.clickable && i.on("click", "." + t.bulletClass, (function (t) {
                    t.preventDefault();
                    var i = n(this).index() * e.params.slidesPerGroup;
                    e.params.loop && (i += e.loopedSlides), e.slideTo(i)
                })), d.extend(e.pagination, {$el: i, el: i[0]}))
            }
        }, destroy: function () {
            var e = this.params.pagination;
            if (e.el && this.pagination.el && this.pagination.$el && 0 !== this.pagination.$el.length) {
                var t = this.pagination.$el;
                t.removeClass(e.hiddenClass), t.removeClass(e.modifierClass + e.type), this.pagination.bullets && this.pagination.bullets.removeClass(e.bulletActiveClass), e.clickable && t.off("click", "." + e.bulletClass)
            }
        }
    }, le = {
        setTranslate: function () {
            if (this.params.scrollbar.el && this.scrollbar.el) {
                var e = this.scrollbar, t = this.rtlTranslate, i = this.progress, s = e.dragSize, a = e.trackSize,
                    r = e.$dragEl, n = e.$el, o = this.params.scrollbar, l = s, d = (a - s) * i;
                t ? (d = -d) > 0 ? (l = s - d, d = 0) : -d + s > a && (l = a + d) : d < 0 ? (l = s + d, d = 0) : d + s > a && (l = a - d), this.isHorizontal() ? (r.transform("translate3d(" + d + "px, 0, 0)"), r[0].style.width = l + "px") : (r.transform("translate3d(0px, " + d + "px, 0)"), r[0].style.height = l + "px"), o.hide && (clearTimeout(this.scrollbar.timeout), n[0].style.opacity = 1, this.scrollbar.timeout = setTimeout((function () {
                    n[0].style.opacity = 0, n.transition(400)
                }), 1e3))
            }
        }, setTransition: function (e) {
            this.params.scrollbar.el && this.scrollbar.el && this.scrollbar.$dragEl.transition(e)
        }, updateSize: function () {
            if (this.params.scrollbar.el && this.scrollbar.el) {
                var e = this.scrollbar, t = e.$dragEl, i = e.$el;
                t[0].style.width = "", t[0].style.height = "";
                var s, a = this.isHorizontal() ? i[0].offsetWidth : i[0].offsetHeight, r = this.size / this.virtualSize,
                    n = r * (a / this.size);
                s = "auto" === this.params.scrollbar.dragSize ? a * r : parseInt(this.params.scrollbar.dragSize, 10), this.isHorizontal() ? t[0].style.width = s + "px" : t[0].style.height = s + "px", i[0].style.display = r >= 1 ? "none" : "", this.params.scrollbar.hide && (i[0].style.opacity = 0), d.extend(e, {
                    trackSize: a,
                    divider: r,
                    moveDivider: n,
                    dragSize: s
                }), e.$el[this.params.watchOverflow && this.isLocked ? "addClass" : "removeClass"](this.params.scrollbar.lockClass)
            }
        }, getPointerPosition: function (e) {
            return this.isHorizontal() ? "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].clientX : e.clientX : "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].clientY : e.clientY
        }, setDragPosition: function (e) {
            var t, i = this.scrollbar, s = this.rtlTranslate, a = i.$el, r = i.dragSize, n = i.trackSize,
                o = i.dragStartPos;
            t = (i.getPointerPosition(e) - a.offset()[this.isHorizontal() ? "left" : "top"] - (null !== o ? o : r / 2)) / (n - r), t = Math.max(Math.min(t, 1), 0), s && (t = 1 - t);
            var l = this.minTranslate() + (this.maxTranslate() - this.minTranslate()) * t;
            this.updateProgress(l), this.setTranslate(l), this.updateActiveIndex(), this.updateSlidesClasses()
        }, onDragStart: function (e) {
            var t = this.params.scrollbar, i = this.scrollbar, s = this.$wrapperEl, a = i.$el, r = i.$dragEl;
            this.scrollbar.isTouched = !0, this.scrollbar.dragStartPos = e.target === r[0] || e.target === r ? i.getPointerPosition(e) - e.target.getBoundingClientRect()[this.isHorizontal() ? "left" : "top"] : null, e.preventDefault(), e.stopPropagation(), s.transition(100), r.transition(100), i.setDragPosition(e), clearTimeout(this.scrollbar.dragTimeout), a.transition(0), t.hide && a.css("opacity", 1), this.params.cssMode && this.$wrapperEl.css("scroll-snap-type", "none"), this.emit("scrollbarDragStart", e)
        }, onDragMove: function (e) {
            var t = this.scrollbar, i = this.$wrapperEl, s = t.$el, a = t.$dragEl;
            this.scrollbar.isTouched && (e.preventDefault ? e.preventDefault() : e.returnValue = !1, t.setDragPosition(e), i.transition(0), s.transition(0), a.transition(0), this.emit("scrollbarDragMove", e))
        }, onDragEnd: function (e) {
            var t = this.params.scrollbar, i = this.scrollbar, s = this.$wrapperEl, a = i.$el;
            this.scrollbar.isTouched && (this.scrollbar.isTouched = !1, this.params.cssMode && (this.$wrapperEl.css("scroll-snap-type", ""), s.transition("")), t.hide && (clearTimeout(this.scrollbar.dragTimeout), this.scrollbar.dragTimeout = d.nextTick((function () {
                a.css("opacity", 0), a.transition(400)
            }), 1e3)), this.emit("scrollbarDragEnd", e), t.snapOnRelease && this.slideToClosest())
        }, enableDraggable: function () {
            if (this.params.scrollbar.el) {
                var e = this.scrollbar, t = this.touchEventsTouch, s = this.touchEventsDesktop, a = this.params,
                    r = e.$el[0], n = !(!h.passiveListener || !a.passiveListeners) && {passive: !1, capture: !1},
                    o = !(!h.passiveListener || !a.passiveListeners) && {passive: !0, capture: !1};
                h.touch ? (r.addEventListener(t.start, this.scrollbar.onDragStart, n), r.addEventListener(t.move, this.scrollbar.onDragMove, n), r.addEventListener(t.end, this.scrollbar.onDragEnd, o)) : (r.addEventListener(s.start, this.scrollbar.onDragStart, n), i.addEventListener(s.move, this.scrollbar.onDragMove, n), i.addEventListener(s.end, this.scrollbar.onDragEnd, o))
            }
        }, disableDraggable: function () {
            if (this.params.scrollbar.el) {
                var e = this.scrollbar, t = this.touchEventsTouch, s = this.touchEventsDesktop, a = this.params,
                    r = e.$el[0], n = !(!h.passiveListener || !a.passiveListeners) && {passive: !1, capture: !1},
                    o = !(!h.passiveListener || !a.passiveListeners) && {passive: !0, capture: !1};
                h.touch ? (r.removeEventListener(t.start, this.scrollbar.onDragStart, n), r.removeEventListener(t.move, this.scrollbar.onDragMove, n), r.removeEventListener(t.end, this.scrollbar.onDragEnd, o)) : (r.removeEventListener(s.start, this.scrollbar.onDragStart, n), i.removeEventListener(s.move, this.scrollbar.onDragMove, n), i.removeEventListener(s.end, this.scrollbar.onDragEnd, o))
            }
        }, init: function () {
            if (this.params.scrollbar.el) {
                var e = this.scrollbar, t = this.$el, i = this.params.scrollbar, s = n(i.el);
                this.params.uniqueNavElements && "string" == typeof i.el && s.length > 1 && 1 === t.find(i.el).length && (s = t.find(i.el));
                var a = s.find("." + this.params.scrollbar.dragClass);
                0 === a.length && (a = n('<div class="' + this.params.scrollbar.dragClass + '"></div>'), s.append(a)), d.extend(e, {
                    $el: s,
                    el: s[0],
                    $dragEl: a,
                    dragEl: a[0]
                }), i.draggable && e.enableDraggable()
            }
        }, destroy: function () {
            this.scrollbar.disableDraggable()
        }
    }, de = {
        setTransform: function (e, t) {
            var i = this.rtl, s = n(e), a = i ? -1 : 1, r = s.attr("data-swiper-parallax") || "0",
                o = s.attr("data-swiper-parallax-x"), l = s.attr("data-swiper-parallax-y"),
                d = s.attr("data-swiper-parallax-scale"), h = s.attr("data-swiper-parallax-opacity");
            if (o || l ? (o = o || "0", l = l || "0") : this.isHorizontal() ? (o = r, l = "0") : (l = r, o = "0"), o = o.indexOf("%") >= 0 ? parseInt(o, 10) * t * a + "%" : o * t * a + "px", l = l.indexOf("%") >= 0 ? parseInt(l, 10) * t + "%" : l * t + "px", null != h) {
                var p = h - (h - 1) * (1 - Math.abs(t));
                s[0].style.opacity = p
            }
            if (null == d) s.transform("translate3d(" + o + ", " + l + ", 0px)"); else {
                var c = d - (d - 1) * (1 - Math.abs(t));
                s.transform("translate3d(" + o + ", " + l + ", 0px) scale(" + c + ")")
            }
        }, setTranslate: function () {
            var e = this, t = e.$el, i = e.slides, s = e.progress, a = e.snapGrid;
            t.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each((function (t, i) {
                e.parallax.setTransform(i, s)
            })), i.each((function (t, i) {
                var r = i.progress;
                e.params.slidesPerGroup > 1 && "auto" !== e.params.slidesPerView && (r += Math.ceil(t / 2) - s * (a.length - 1)), r = Math.min(Math.max(r, -1), 1), n(i).find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each((function (t, i) {
                    e.parallax.setTransform(i, r)
                }))
            }))
        }, setTransition: function (e) {
            void 0 === e && (e = this.params.speed);
            this.$el.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each((function (t, i) {
                var s = n(i), a = parseInt(s.attr("data-swiper-parallax-duration"), 10) || e;
                0 === e && (a = 0), s.transition(a)
            }))
        }
    }, he = {
        getDistanceBetweenTouches: function (e) {
            if (e.targetTouches.length < 2) return 1;
            var t = e.targetTouches[0].pageX, i = e.targetTouches[0].pageY, s = e.targetTouches[1].pageX,
                a = e.targetTouches[1].pageY;
            return Math.sqrt(Math.pow(s - t, 2) + Math.pow(a - i, 2))
        }, onGestureStart: function (e) {
            var t = this.params.zoom, i = this.zoom, s = i.gesture;
            if (i.fakeGestureTouched = !1, i.fakeGestureMoved = !1, !h.gestures) {
                if ("touchstart" !== e.type || "touchstart" === e.type && e.targetTouches.length < 2) return;
                i.fakeGestureTouched = !0, s.scaleStart = he.getDistanceBetweenTouches(e)
            }
            s.$slideEl && s.$slideEl.length || (s.$slideEl = n(e.target).closest("." + this.params.slideClass), 0 === s.$slideEl.length && (s.$slideEl = this.slides.eq(this.activeIndex)), s.$imageEl = s.$slideEl.find("img, svg, canvas, picture, .swiper-zoom-target"), s.$imageWrapEl = s.$imageEl.parent("." + t.containerClass), s.maxRatio = s.$imageWrapEl.attr("data-swiper-zoom") || t.maxRatio, 0 !== s.$imageWrapEl.length) ? (s.$imageEl && s.$imageEl.transition(0), this.zoom.isScaling = !0) : s.$imageEl = void 0
        }, onGestureChange: function (e) {
            var t = this.params.zoom, i = this.zoom, s = i.gesture;
            if (!h.gestures) {
                if ("touchmove" !== e.type || "touchmove" === e.type && e.targetTouches.length < 2) return;
                i.fakeGestureMoved = !0, s.scaleMove = he.getDistanceBetweenTouches(e)
            }
            s.$imageEl && 0 !== s.$imageEl.length && (i.scale = h.gestures ? e.scale * i.currentScale : s.scaleMove / s.scaleStart * i.currentScale, i.scale > s.maxRatio && (i.scale = s.maxRatio - 1 + Math.pow(i.scale - s.maxRatio + 1, .5)), i.scale < t.minRatio && (i.scale = t.minRatio + 1 - Math.pow(t.minRatio - i.scale + 1, .5)), s.$imageEl.transform("translate3d(0,0,0) scale(" + i.scale + ")"))
        }, onGestureEnd: function (e) {
            var t = this.params.zoom, i = this.zoom, s = i.gesture;
            if (!h.gestures) {
                if (!i.fakeGestureTouched || !i.fakeGestureMoved) return;
                if ("touchend" !== e.type || "touchend" === e.type && e.changedTouches.length < 2 && !A.android) return;
                i.fakeGestureTouched = !1, i.fakeGestureMoved = !1
            }
            s.$imageEl && 0 !== s.$imageEl.length && (i.scale = Math.max(Math.min(i.scale, s.maxRatio), t.minRatio), s.$imageEl.transition(this.params.speed).transform("translate3d(0,0,0) scale(" + i.scale + ")"), i.currentScale = i.scale, i.isScaling = !1, 1 === i.scale && (s.$slideEl = void 0))
        }, onTouchStart: function (e) {
            var t = this.zoom, i = t.gesture, s = t.image;
            i.$imageEl && 0 !== i.$imageEl.length && (s.isTouched || (A.android && e.cancelable && e.preventDefault(), s.isTouched = !0, s.touchesStart.x = "touchstart" === e.type ? e.targetTouches[0].pageX : e.pageX, s.touchesStart.y = "touchstart" === e.type ? e.targetTouches[0].pageY : e.pageY))
        }, onTouchMove: function (e) {
            var t = this.zoom, i = t.gesture, s = t.image, a = t.velocity;
            if (i.$imageEl && 0 !== i.$imageEl.length && (this.allowClick = !1, s.isTouched && i.$slideEl)) {
                s.isMoved || (s.width = i.$imageEl[0].offsetWidth, s.height = i.$imageEl[0].offsetHeight, s.startX = d.getTranslate(i.$imageWrapEl[0], "x") || 0, s.startY = d.getTranslate(i.$imageWrapEl[0], "y") || 0, i.slideWidth = i.$slideEl[0].offsetWidth, i.slideHeight = i.$slideEl[0].offsetHeight, i.$imageWrapEl.transition(0), this.rtl && (s.startX = -s.startX, s.startY = -s.startY));
                var r = s.width * t.scale, n = s.height * t.scale;
                if (!(r < i.slideWidth && n < i.slideHeight)) {
                    if (s.minX = Math.min(i.slideWidth / 2 - r / 2, 0), s.maxX = -s.minX, s.minY = Math.min(i.slideHeight / 2 - n / 2, 0), s.maxY = -s.minY, s.touchesCurrent.x = "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX, s.touchesCurrent.y = "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY, !s.isMoved && !t.isScaling) {
                        if (this.isHorizontal() && (Math.floor(s.minX) === Math.floor(s.startX) && s.touchesCurrent.x < s.touchesStart.x || Math.floor(s.maxX) === Math.floor(s.startX) && s.touchesCurrent.x > s.touchesStart.x)) return void (s.isTouched = !1);
                        if (!this.isHorizontal() && (Math.floor(s.minY) === Math.floor(s.startY) && s.touchesCurrent.y < s.touchesStart.y || Math.floor(s.maxY) === Math.floor(s.startY) && s.touchesCurrent.y > s.touchesStart.y)) return void (s.isTouched = !1)
                    }
                    e.cancelable && e.preventDefault(), e.stopPropagation(), s.isMoved = !0, s.currentX = s.touchesCurrent.x - s.touchesStart.x + s.startX, s.currentY = s.touchesCurrent.y - s.touchesStart.y + s.startY, s.currentX < s.minX && (s.currentX = s.minX + 1 - Math.pow(s.minX - s.currentX + 1, .8)), s.currentX > s.maxX && (s.currentX = s.maxX - 1 + Math.pow(s.currentX - s.maxX + 1, .8)), s.currentY < s.minY && (s.currentY = s.minY + 1 - Math.pow(s.minY - s.currentY + 1, .8)), s.currentY > s.maxY && (s.currentY = s.maxY - 1 + Math.pow(s.currentY - s.maxY + 1, .8)), a.prevPositionX || (a.prevPositionX = s.touchesCurrent.x), a.prevPositionY || (a.prevPositionY = s.touchesCurrent.y), a.prevTime || (a.prevTime = Date.now()), a.x = (s.touchesCurrent.x - a.prevPositionX) / (Date.now() - a.prevTime) / 2, a.y = (s.touchesCurrent.y - a.prevPositionY) / (Date.now() - a.prevTime) / 2, Math.abs(s.touchesCurrent.x - a.prevPositionX) < 2 && (a.x = 0), Math.abs(s.touchesCurrent.y - a.prevPositionY) < 2 && (a.y = 0), a.prevPositionX = s.touchesCurrent.x, a.prevPositionY = s.touchesCurrent.y, a.prevTime = Date.now(), i.$imageWrapEl.transform("translate3d(" + s.currentX + "px, " + s.currentY + "px,0)")
                }
            }
        }, onTouchEnd: function () {
            var e = this.zoom, t = e.gesture, i = e.image, s = e.velocity;
            if (t.$imageEl && 0 !== t.$imageEl.length) {
                if (!i.isTouched || !i.isMoved) return i.isTouched = !1, void (i.isMoved = !1);
                i.isTouched = !1, i.isMoved = !1;
                var a = 300, r = 300, n = s.x * a, o = i.currentX + n, l = s.y * r, d = i.currentY + l;
                0 !== s.x && (a = Math.abs((o - i.currentX) / s.x)), 0 !== s.y && (r = Math.abs((d - i.currentY) / s.y));
                var h = Math.max(a, r);
                i.currentX = o, i.currentY = d;
                var p = i.width * e.scale, c = i.height * e.scale;
                i.minX = Math.min(t.slideWidth / 2 - p / 2, 0), i.maxX = -i.minX, i.minY = Math.min(t.slideHeight / 2 - c / 2, 0), i.maxY = -i.minY, i.currentX = Math.max(Math.min(i.currentX, i.maxX), i.minX), i.currentY = Math.max(Math.min(i.currentY, i.maxY), i.minY), t.$imageWrapEl.transition(h).transform("translate3d(" + i.currentX + "px, " + i.currentY + "px,0)")
            }
        }, onTransitionEnd: function () {
            var e = this.zoom, t = e.gesture;
            t.$slideEl && this.previousIndex !== this.activeIndex && (t.$imageEl && t.$imageEl.transform("translate3d(0,0,0) scale(1)"), t.$imageWrapEl && t.$imageWrapEl.transform("translate3d(0,0,0)"), e.scale = 1, e.currentScale = 1, t.$slideEl = void 0, t.$imageEl = void 0, t.$imageWrapEl = void 0)
        }, toggle: function (e) {
            var t = this.zoom;
            t.scale && 1 !== t.scale ? t.out() : t.in(e)
        }, in: function (e) {
            var t, i, s, a, r, n, o, l, d, h, p, c, u, v, f, m, g = this.zoom, b = this.params.zoom, w = g.gesture,
                y = g.image;
            (w.$slideEl || (this.params.virtual && this.params.virtual.enabled && this.virtual ? w.$slideEl = this.$wrapperEl.children("." + this.params.slideActiveClass) : w.$slideEl = this.slides.eq(this.activeIndex), w.$imageEl = w.$slideEl.find("img, svg, canvas, picture, .swiper-zoom-target"), w.$imageWrapEl = w.$imageEl.parent("." + b.containerClass)), w.$imageEl && 0 !== w.$imageEl.length) && (w.$slideEl.addClass("" + b.zoomedSlideClass), void 0 === y.touchesStart.x && e ? (t = "touchend" === e.type ? e.changedTouches[0].pageX : e.pageX, i = "touchend" === e.type ? e.changedTouches[0].pageY : e.pageY) : (t = y.touchesStart.x, i = y.touchesStart.y), g.scale = w.$imageWrapEl.attr("data-swiper-zoom") || b.maxRatio, g.currentScale = w.$imageWrapEl.attr("data-swiper-zoom") || b.maxRatio, e ? (f = w.$slideEl[0].offsetWidth, m = w.$slideEl[0].offsetHeight, s = w.$slideEl.offset().left + f / 2 - t, a = w.$slideEl.offset().top + m / 2 - i, o = w.$imageEl[0].offsetWidth, l = w.$imageEl[0].offsetHeight, d = o * g.scale, h = l * g.scale, u = -(p = Math.min(f / 2 - d / 2, 0)), v = -(c = Math.min(m / 2 - h / 2, 0)), (r = s * g.scale) < p && (r = p), r > u && (r = u), (n = a * g.scale) < c && (n = c), n > v && (n = v)) : (r = 0, n = 0), w.$imageWrapEl.transition(300).transform("translate3d(" + r + "px, " + n + "px,0)"), w.$imageEl.transition(300).transform("translate3d(0,0,0) scale(" + g.scale + ")"))
        }, out: function () {
            var e = this.zoom, t = this.params.zoom, i = e.gesture;
            i.$slideEl || (this.params.virtual && this.params.virtual.enabled && this.virtual ? i.$slideEl = this.$wrapperEl.children("." + this.params.slideActiveClass) : i.$slideEl = this.slides.eq(this.activeIndex), i.$imageEl = i.$slideEl.find("img, svg, canvas, picture, .swiper-zoom-target"), i.$imageWrapEl = i.$imageEl.parent("." + t.containerClass)), i.$imageEl && 0 !== i.$imageEl.length && (e.scale = 1, e.currentScale = 1, i.$imageWrapEl.transition(300).transform("translate3d(0,0,0)"), i.$imageEl.transition(300).transform("translate3d(0,0,0) scale(1)"), i.$slideEl.removeClass("" + t.zoomedSlideClass), i.$slideEl = void 0)
        }, enable: function () {
            var e = this.zoom;
            if (!e.enabled) {
                e.enabled = !0;
                var t = !("touchstart" !== this.touchEvents.start || !h.passiveListener || !this.params.passiveListeners) && {
                    passive: !0,
                    capture: !1
                }, i = !h.passiveListener || {passive: !1, capture: !0}, s = "." + this.params.slideClass;
                h.gestures ? (this.$wrapperEl.on("gesturestart", s, e.onGestureStart, t), this.$wrapperEl.on("gesturechange", s, e.onGestureChange, t), this.$wrapperEl.on("gestureend", s, e.onGestureEnd, t)) : "touchstart" === this.touchEvents.start && (this.$wrapperEl.on(this.touchEvents.start, s, e.onGestureStart, t), this.$wrapperEl.on(this.touchEvents.move, s, e.onGestureChange, i), this.$wrapperEl.on(this.touchEvents.end, s, e.onGestureEnd, t), this.touchEvents.cancel && this.$wrapperEl.on(this.touchEvents.cancel, s, e.onGestureEnd, t)), this.$wrapperEl.on(this.touchEvents.move, "." + this.params.zoom.containerClass, e.onTouchMove, i)
            }
        }, disable: function () {
            var e = this.zoom;
            if (e.enabled) {
                this.zoom.enabled = !1;
                var t = !("touchstart" !== this.touchEvents.start || !h.passiveListener || !this.params.passiveListeners) && {
                    passive: !0,
                    capture: !1
                }, i = !h.passiveListener || {passive: !1, capture: !0}, s = "." + this.params.slideClass;
                h.gestures ? (this.$wrapperEl.off("gesturestart", s, e.onGestureStart, t), this.$wrapperEl.off("gesturechange", s, e.onGestureChange, t), this.$wrapperEl.off("gestureend", s, e.onGestureEnd, t)) : "touchstart" === this.touchEvents.start && (this.$wrapperEl.off(this.touchEvents.start, s, e.onGestureStart, t), this.$wrapperEl.off(this.touchEvents.move, s, e.onGestureChange, i), this.$wrapperEl.off(this.touchEvents.end, s, e.onGestureEnd, t), this.touchEvents.cancel && this.$wrapperEl.off(this.touchEvents.cancel, s, e.onGestureEnd, t)), this.$wrapperEl.off(this.touchEvents.move, "." + this.params.zoom.containerClass, e.onTouchMove, i)
            }
        }
    }, pe = {
        loadInSlide: function (e, t) {
            void 0 === t && (t = !0);
            var i = this, s = i.params.lazy;
            if (void 0 !== e && 0 !== i.slides.length) {
                var a = i.virtual && i.params.virtual.enabled ? i.$wrapperEl.children("." + i.params.slideClass + '[data-swiper-slide-index="' + e + '"]') : i.slides.eq(e),
                    r = a.find("." + s.elementClass + ":not(." + s.loadedClass + "):not(." + s.loadingClass + ")");
                !a.hasClass(s.elementClass) || a.hasClass(s.loadedClass) || a.hasClass(s.loadingClass) || (r = r.add(a[0])), 0 !== r.length && r.each((function (e, r) {
                    var o = n(r);
                    o.addClass(s.loadingClass);
                    var l = o.attr("data-background"), d = o.attr("data-src"), h = o.attr("data-srcset"),
                        p = o.attr("data-sizes"), c = o.parent("picture");
                    i.loadImage(o[0], d || l, h, p, !1, (function () {
                        if (null != i && i && (!i || i.params) && !i.destroyed) {
                            if (l ? (o.css("background-image", 'url("' + l + '")'), o.removeAttr("data-background")) : (h && (o.attr("srcset", h), o.removeAttr("data-srcset")), p && (o.attr("sizes", p), o.removeAttr("data-sizes")), c.length && c.children("source").each((function (e, t) {
                                var i = n(t);
                                i.attr("data-srcset") && (i.attr("srcset", i.attr("data-srcset")), i.removeAttr("data-srcset"))
                            })), d && (o.attr("src", d), o.removeAttr("data-src"))), o.addClass(s.loadedClass).removeClass(s.loadingClass), a.find("." + s.preloaderClass).remove(), i.params.loop && t) {
                                var e = a.attr("data-swiper-slide-index");
                                if (a.hasClass(i.params.slideDuplicateClass)) {
                                    var r = i.$wrapperEl.children('[data-swiper-slide-index="' + e + '"]:not(.' + i.params.slideDuplicateClass + ")");
                                    i.lazy.loadInSlide(r.index(), !1)
                                } else {
                                    var u = i.$wrapperEl.children("." + i.params.slideDuplicateClass + '[data-swiper-slide-index="' + e + '"]');
                                    i.lazy.loadInSlide(u.index(), !1)
                                }
                            }
                            i.emit("lazyImageReady", a[0], o[0]), i.params.autoHeight && i.updateAutoHeight()
                        }
                    })), i.emit("lazyImageLoad", a[0], o[0])
                }))
            }
        }, load: function () {
            var e = this, t = e.$wrapperEl, i = e.params, s = e.slides, a = e.activeIndex,
                r = e.virtual && i.virtual.enabled, o = i.lazy, l = i.slidesPerView;

            function d(e) {
                if (r) {
                    if (t.children("." + i.slideClass + '[data-swiper-slide-index="' + e + '"]').length) return !0
                } else if (s[e]) return !0;
                return !1
            }

            function h(e) {
                return r ? n(e).attr("data-swiper-slide-index") : n(e).index()
            }

            if ("auto" === l && (l = 0), e.lazy.initialImageLoaded || (e.lazy.initialImageLoaded = !0), e.params.watchSlidesVisibility) t.children("." + i.slideVisibleClass).each((function (t, i) {
                var s = r ? n(i).attr("data-swiper-slide-index") : n(i).index();
                e.lazy.loadInSlide(s)
            })); else if (l > 1) for (var p = a; p < a + l; p += 1) d(p) && e.lazy.loadInSlide(p); else e.lazy.loadInSlide(a);
            if (o.loadPrevNext) if (l > 1 || o.loadPrevNextAmount && o.loadPrevNextAmount > 1) {
                for (var c = o.loadPrevNextAmount, u = l, v = Math.min(a + u + Math.max(c, u), s.length), f = Math.max(a - Math.max(u, c), 0), m = a + l; m < v; m += 1) d(m) && e.lazy.loadInSlide(m);
                for (var g = f; g < a; g += 1) d(g) && e.lazy.loadInSlide(g)
            } else {
                var b = t.children("." + i.slideNextClass);
                b.length > 0 && e.lazy.loadInSlide(h(b));
                var w = t.children("." + i.slidePrevClass);
                w.length > 0 && e.lazy.loadInSlide(h(w))
            }
        }
    }, ce = {
        LinearSpline: function (e, t) {
            var i, s, a, r, n, o = function (e, t) {
                for (s = -1, i = e.length; i - s > 1;) e[a = i + s >> 1] <= t ? s = a : i = a;
                return i
            };
            return this.x = e, this.y = t, this.lastIndex = e.length - 1, this.interpolate = function (e) {
                return e ? (n = o(this.x, e), r = n - 1, (e - this.x[r]) * (this.y[n] - this.y[r]) / (this.x[n] - this.x[r]) + this.y[r]) : 0
            }, this
        }, getInterpolateFunction: function (e) {
            this.controller.spline || (this.controller.spline = this.params.loop ? new ce.LinearSpline(this.slidesGrid, e.slidesGrid) : new ce.LinearSpline(this.snapGrid, e.snapGrid))
        }, setTranslate: function (e, t) {
            var i, s, a = this, r = a.controller.control;

            function n(e) {
                var t = a.rtlTranslate ? -a.translate : a.translate;
                "slide" === a.params.controller.by && (a.controller.getInterpolateFunction(e), s = -a.controller.spline.interpolate(-t)), s && "container" !== a.params.controller.by || (i = (e.maxTranslate() - e.minTranslate()) / (a.maxTranslate() - a.minTranslate()), s = (t - a.minTranslate()) * i + e.minTranslate()), a.params.controller.inverse && (s = e.maxTranslate() - s), e.updateProgress(s), e.setTranslate(s, a), e.updateActiveIndex(), e.updateSlidesClasses()
            }

            if (Array.isArray(r)) for (var o = 0; o < r.length; o += 1) r[o] !== t && r[o] instanceof j && n(r[o]); else r instanceof j && t !== r && n(r)
        }, setTransition: function (e, t) {
            var i, s = this, a = s.controller.control;

            function r(t) {
                t.setTransition(e, s), 0 !== e && (t.transitionStart(), t.params.autoHeight && d.nextTick((function () {
                    t.updateAutoHeight()
                })), t.$wrapperEl.transitionEnd((function () {
                    a && (t.params.loop && "slide" === s.params.controller.by && t.loopFix(), t.transitionEnd())
                })))
            }

            if (Array.isArray(a)) for (i = 0; i < a.length; i += 1) a[i] !== t && a[i] instanceof j && r(a[i]); else a instanceof j && t !== a && r(a)
        }
    }, ue = {
        makeElFocusable: function (e) {
            return e.attr("tabIndex", "0"), e
        }, makeElNotFocusable: function (e) {
            return e.attr("tabIndex", "-1"), e
        }, addElRole: function (e, t) {
            return e.attr("role", t), e
        }, addElLabel: function (e, t) {
            return e.attr("aria-label", t), e
        }, disableEl: function (e) {
            return e.attr("aria-disabled", !0), e
        }, enableEl: function (e) {
            return e.attr("aria-disabled", !1), e
        }, onEnterKey: function (e) {
            var t = this.params.a11y;
            if (13 === e.keyCode) {
                var i = n(e.target);
                this.navigation && this.navigation.$nextEl && i.is(this.navigation.$nextEl) && (this.isEnd && !this.params.loop || this.slideNext(), this.isEnd ? this.a11y.notify(t.lastSlideMessage) : this.a11y.notify(t.nextSlideMessage)), this.navigation && this.navigation.$prevEl && i.is(this.navigation.$prevEl) && (this.isBeginning && !this.params.loop || this.slidePrev(), this.isBeginning ? this.a11y.notify(t.firstSlideMessage) : this.a11y.notify(t.prevSlideMessage)), this.pagination && i.is("." + this.params.pagination.bulletClass) && i[0].click()
            }
        }, notify: function (e) {
            var t = this.a11y.liveRegion;
            0 !== t.length && (t.html(""), t.html(e))
        }, updateNavigation: function () {
            if (!this.params.loop && this.navigation) {
                var e = this.navigation, t = e.$nextEl, i = e.$prevEl;
                i && i.length > 0 && (this.isBeginning ? (this.a11y.disableEl(i), this.a11y.makeElNotFocusable(i)) : (this.a11y.enableEl(i), this.a11y.makeElFocusable(i))), t && t.length > 0 && (this.isEnd ? (this.a11y.disableEl(t), this.a11y.makeElNotFocusable(t)) : (this.a11y.enableEl(t), this.a11y.makeElFocusable(t)))
            }
        }, updatePagination: function () {
            var e = this, t = e.params.a11y;
            e.pagination && e.params.pagination.clickable && e.pagination.bullets && e.pagination.bullets.length && e.pagination.bullets.each((function (i, s) {
                var a = n(s);
                e.a11y.makeElFocusable(a), e.a11y.addElRole(a, "button"), e.a11y.addElLabel(a, t.paginationBulletMessage.replace(/\{\{index\}\}/, a.index() + 1))
            }))
        }, init: function () {
            this.$el.append(this.a11y.liveRegion);
            var e, t, i = this.params.a11y;
            this.navigation && this.navigation.$nextEl && (e = this.navigation.$nextEl), this.navigation && this.navigation.$prevEl && (t = this.navigation.$prevEl), e && (this.a11y.makeElFocusable(e), this.a11y.addElRole(e, "button"), this.a11y.addElLabel(e, i.nextSlideMessage), e.on("keydown", this.a11y.onEnterKey)), t && (this.a11y.makeElFocusable(t), this.a11y.addElRole(t, "button"), this.a11y.addElLabel(t, i.prevSlideMessage), t.on("keydown", this.a11y.onEnterKey)), this.pagination && this.params.pagination.clickable && this.pagination.bullets && this.pagination.bullets.length && this.pagination.$el.on("keydown", "." + this.params.pagination.bulletClass, this.a11y.onEnterKey)
        }, destroy: function () {
            var e, t;
            this.a11y.liveRegion && this.a11y.liveRegion.length > 0 && this.a11y.liveRegion.remove(), this.navigation && this.navigation.$nextEl && (e = this.navigation.$nextEl), this.navigation && this.navigation.$prevEl && (t = this.navigation.$prevEl), e && e.off("keydown", this.a11y.onEnterKey), t && t.off("keydown", this.a11y.onEnterKey), this.pagination && this.params.pagination.clickable && this.pagination.bullets && this.pagination.bullets.length && this.pagination.$el.off("keydown", "." + this.params.pagination.bulletClass, this.a11y.onEnterKey)
        }
    }, ve = {
        init: function () {
            if (this.params.history) {
                if (!a.history || !a.history.pushState) return this.params.history.enabled = !1, void (this.params.hashNavigation.enabled = !0);
                var e = this.history;
                e.initialized = !0, e.paths = ve.getPathValues(), (e.paths.key || e.paths.value) && (e.scrollToSlide(0, e.paths.value, this.params.runCallbacksOnInit), this.params.history.replaceState || a.addEventListener("popstate", this.history.setHistoryPopState))
            }
        }, destroy: function () {
            this.params.history.replaceState || a.removeEventListener("popstate", this.history.setHistoryPopState)
        }, setHistoryPopState: function () {
            this.history.paths = ve.getPathValues(), this.history.scrollToSlide(this.params.speed, this.history.paths.value, !1)
        }, getPathValues: function () {
            var e = a.location.pathname.slice(1).split("/").filter((function (e) {
                return "" !== e
            })), t = e.length;
            return {key: e[t - 2], value: e[t - 1]}
        }, setHistory: function (e, t) {
            if (this.history.initialized && this.params.history.enabled) {
                var i = this.slides.eq(t), s = ve.slugify(i.attr("data-history"));
                a.location.pathname.includes(e) || (s = e + "/" + s);
                var r = a.history.state;
                r && r.value === s || (this.params.history.replaceState ? a.history.replaceState({value: s}, null, s) : a.history.pushState({value: s}, null, s))
            }
        }, slugify: function (e) {
            return e.toString().replace(/\s+/g, "-").replace(/[^\w-]+/g, "").replace(/--+/g, "-").replace(/^-+/, "").replace(/-+$/, "")
        }, scrollToSlide: function (e, t, i) {
            if (t) for (var s = 0, a = this.slides.length; s < a; s += 1) {
                var r = this.slides.eq(s);
                if (ve.slugify(r.attr("data-history")) === t && !r.hasClass(this.params.slideDuplicateClass)) {
                    var n = r.index();
                    this.slideTo(n, e, i)
                }
            } else this.slideTo(0, e, i)
        }
    }, fe = {
        onHashCange: function () {
            this.emit("hashChange");
            var e = i.location.hash.replace("#", "");
            if (e !== this.slides.eq(this.activeIndex).attr("data-hash")) {
                var t = this.$wrapperEl.children("." + this.params.slideClass + '[data-hash="' + e + '"]').index();
                if (void 0 === t) return;
                this.slideTo(t)
            }
        }, setHash: function () {
            if (this.hashNavigation.initialized && this.params.hashNavigation.enabled) if (this.params.hashNavigation.replaceState && a.history && a.history.replaceState) a.history.replaceState(null, null, "#" + this.slides.eq(this.activeIndex).attr("data-hash") || ""), this.emit("hashSet"); else {
                var e = this.slides.eq(this.activeIndex), t = e.attr("data-hash") || e.attr("data-history");
                i.location.hash = t || "", this.emit("hashSet")
            }
        }, init: function () {
            if (!(!this.params.hashNavigation.enabled || this.params.history && this.params.history.enabled)) {
                this.hashNavigation.initialized = !0;
                var e = i.location.hash.replace("#", "");
                if (e) for (var t = 0, s = this.slides.length; t < s; t += 1) {
                    var r = this.slides.eq(t);
                    if ((r.attr("data-hash") || r.attr("data-history")) === e && !r.hasClass(this.params.slideDuplicateClass)) {
                        var o = r.index();
                        this.slideTo(o, 0, this.params.runCallbacksOnInit, !0)
                    }
                }
                this.params.hashNavigation.watchState && n(a).on("hashchange", this.hashNavigation.onHashCange)
            }
        }, destroy: function () {
            this.params.hashNavigation.watchState && n(a).off("hashchange", this.hashNavigation.onHashCange)
        }
    }, me = {
        run: function () {
            var e = this, t = e.slides.eq(e.activeIndex), i = e.params.autoplay.delay;
            t.attr("data-swiper-autoplay") && (i = t.attr("data-swiper-autoplay") || e.params.autoplay.delay), clearTimeout(e.autoplay.timeout), e.autoplay.timeout = d.nextTick((function () {
                e.params.autoplay.reverseDirection ? e.params.loop ? (e.loopFix(), e.slidePrev(e.params.speed, !0, !0), e.emit("autoplay")) : e.isBeginning ? e.params.autoplay.stopOnLastSlide ? e.autoplay.stop() : (e.slideTo(e.slides.length - 1, e.params.speed, !0, !0), e.emit("autoplay")) : (e.slidePrev(e.params.speed, !0, !0), e.emit("autoplay")) : e.params.loop ? (e.loopFix(), e.slideNext(e.params.speed, !0, !0), e.emit("autoplay")) : e.isEnd ? e.params.autoplay.stopOnLastSlide ? e.autoplay.stop() : (e.slideTo(0, e.params.speed, !0, !0), e.emit("autoplay")) : (e.slideNext(e.params.speed, !0, !0), e.emit("autoplay")), e.params.cssMode && e.autoplay.running && e.autoplay.run()
            }), i)
        }, start: function () {
            return void 0 === this.autoplay.timeout && (!this.autoplay.running && (this.autoplay.running = !0, this.emit("autoplayStart"), this.autoplay.run(), !0))
        }, stop: function () {
            return !!this.autoplay.running && (void 0 !== this.autoplay.timeout && (this.autoplay.timeout && (clearTimeout(this.autoplay.timeout), this.autoplay.timeout = void 0), this.autoplay.running = !1, this.emit("autoplayStop"), !0))
        }, pause: function (e) {
            this.autoplay.running && (this.autoplay.paused || (this.autoplay.timeout && clearTimeout(this.autoplay.timeout), this.autoplay.paused = !0, 0 !== e && this.params.autoplay.waitForTransition ? (this.$wrapperEl[0].addEventListener("transitionend", this.autoplay.onTransitionEnd), this.$wrapperEl[0].addEventListener("webkitTransitionEnd", this.autoplay.onTransitionEnd)) : (this.autoplay.paused = !1, this.autoplay.run())))
        }
    }, ge = {
        setTranslate: function () {
            for (var e = this.slides, t = 0; t < e.length; t += 1) {
                var i = this.slides.eq(t), s = -i[0].swiperSlideOffset;
                this.params.virtualTranslate || (s -= this.translate);
                var a = 0;
                this.isHorizontal() || (a = s, s = 0);
                var r = this.params.fadeEffect.crossFade ? Math.max(1 - Math.abs(i[0].progress), 0) : 1 + Math.min(Math.max(i[0].progress, -1), 0);
                i.css({opacity: r}).transform("translate3d(" + s + "px, " + a + "px, 0px)")
            }
        }, setTransition: function (e) {
            var t = this, i = t.slides, s = t.$wrapperEl;
            if (i.transition(e), t.params.virtualTranslate && 0 !== e) {
                var a = !1;
                i.transitionEnd((function () {
                    if (!a && t && !t.destroyed) {
                        a = !0, t.animating = !1;
                        for (var e = ["webkitTransitionEnd", "transitionend"], i = 0; i < e.length; i += 1) s.trigger(e[i])
                    }
                }))
            }
        }
    }, be = {
        setTranslate: function () {
            var e, t = this.$el, i = this.$wrapperEl, s = this.slides, a = this.width, r = this.height,
                o = this.rtlTranslate, l = this.size, d = this.params.cubeEffect, h = this.isHorizontal(),
                p = this.virtual && this.params.virtual.enabled, c = 0;
            d.shadow && (h ? (0 === (e = i.find(".swiper-cube-shadow")).length && (e = n('<div class="swiper-cube-shadow"></div>'), i.append(e)), e.css({height: a + "px"})) : 0 === (e = t.find(".swiper-cube-shadow")).length && (e = n('<div class="swiper-cube-shadow"></div>'), t.append(e)));
            for (var u = 0; u < s.length; u += 1) {
                var v = s.eq(u), f = u;
                p && (f = parseInt(v.attr("data-swiper-slide-index"), 10));
                var m = 90 * f, g = Math.floor(m / 360);
                o && (m = -m, g = Math.floor(-m / 360));
                var b = Math.max(Math.min(v[0].progress, 1), -1), w = 0, y = 0, x = 0;
                f % 4 == 0 ? (w = 4 * -g * l, x = 0) : (f - 1) % 4 == 0 ? (w = 0, x = 4 * -g * l) : (f - 2) % 4 == 0 ? (w = l + 4 * g * l, x = l) : (f - 3) % 4 == 0 && (w = -l, x = 3 * l + 4 * l * g), o && (w = -w), h || (y = w, w = 0);
                var E = "rotateX(" + (h ? 0 : -m) + "deg) rotateY(" + (h ? m : 0) + "deg) translate3d(" + w + "px, " + y + "px, " + x + "px)";
                if (b <= 1 && b > -1 && (c = 90 * f + 90 * b, o && (c = 90 * -f - 90 * b)), v.transform(E), d.slideShadows) {
                    var T = h ? v.find(".swiper-slide-shadow-left") : v.find(".swiper-slide-shadow-top"),
                        S = h ? v.find(".swiper-slide-shadow-right") : v.find(".swiper-slide-shadow-bottom");
                    0 === T.length && (T = n('<div class="swiper-slide-shadow-' + (h ? "left" : "top") + '"></div>'), v.append(T)), 0 === S.length && (S = n('<div class="swiper-slide-shadow-' + (h ? "right" : "bottom") + '"></div>'), v.append(S)), T.length && (T[0].style.opacity = Math.max(-b, 0)), S.length && (S[0].style.opacity = Math.max(b, 0))
                }
            }
            if (i.css({
                "-webkit-transform-origin": "50% 50% -" + l / 2 + "px",
                "-moz-transform-origin": "50% 50% -" + l / 2 + "px",
                "-ms-transform-origin": "50% 50% -" + l / 2 + "px",
                "transform-origin": "50% 50% -" + l / 2 + "px"
            }), d.shadow) if (h) e.transform("translate3d(0px, " + (a / 2 + d.shadowOffset) + "px, " + -a / 2 + "px) rotateX(90deg) rotateZ(0deg) scale(" + d.shadowScale + ")"); else {
                var C = Math.abs(c) - 90 * Math.floor(Math.abs(c) / 90),
                    M = 1.5 - (Math.sin(2 * C * Math.PI / 360) / 2 + Math.cos(2 * C * Math.PI / 360) / 2),
                    P = d.shadowScale, z = d.shadowScale / M, k = d.shadowOffset;
                e.transform("scale3d(" + P + ", 1, " + z + ") translate3d(0px, " + (r / 2 + k) + "px, " + -r / 2 / z + "px) rotateX(-90deg)")
            }
            var $ = _.isSafari || _.isWebView ? -l / 2 : 0;
            i.transform("translate3d(0px,0," + $ + "px) rotateX(" + (this.isHorizontal() ? 0 : c) + "deg) rotateY(" + (this.isHorizontal() ? -c : 0) + "deg)")
        }, setTransition: function (e) {
            var t = this.$el;
            this.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e), this.params.cubeEffect.shadow && !this.isHorizontal() && t.find(".swiper-cube-shadow").transition(e)
        }
    }, we = {
        setTranslate: function () {
            for (var e = this.slides, t = this.rtlTranslate, i = 0; i < e.length; i += 1) {
                var s = e.eq(i), a = s[0].progress;
                this.params.flipEffect.limitRotation && (a = Math.max(Math.min(s[0].progress, 1), -1));
                var r = -180 * a, o = 0, l = -s[0].swiperSlideOffset, d = 0;
                if (this.isHorizontal() ? t && (r = -r) : (d = l, l = 0, o = -r, r = 0), s[0].style.zIndex = -Math.abs(Math.round(a)) + e.length, this.params.flipEffect.slideShadows) {
                    var h = this.isHorizontal() ? s.find(".swiper-slide-shadow-left") : s.find(".swiper-slide-shadow-top"),
                        p = this.isHorizontal() ? s.find(".swiper-slide-shadow-right") : s.find(".swiper-slide-shadow-bottom");
                    0 === h.length && (h = n('<div class="swiper-slide-shadow-' + (this.isHorizontal() ? "left" : "top") + '"></div>'), s.append(h)), 0 === p.length && (p = n('<div class="swiper-slide-shadow-' + (this.isHorizontal() ? "right" : "bottom") + '"></div>'), s.append(p)), h.length && (h[0].style.opacity = Math.max(-a, 0)), p.length && (p[0].style.opacity = Math.max(a, 0))
                }
                s.transform("translate3d(" + l + "px, " + d + "px, 0px) rotateX(" + o + "deg) rotateY(" + r + "deg)")
            }
        }, setTransition: function (e) {
            var t = this, i = t.slides, s = t.activeIndex, a = t.$wrapperEl;
            if (i.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e), t.params.virtualTranslate && 0 !== e) {
                var r = !1;
                i.eq(s).transitionEnd((function () {
                    if (!r && t && !t.destroyed) {
                        r = !0, t.animating = !1;
                        for (var e = ["webkitTransitionEnd", "transitionend"], i = 0; i < e.length; i += 1) a.trigger(e[i])
                    }
                }))
            }
        }
    }, ye = {
        setTranslate: function () {
            for (var e = this.width, t = this.height, i = this.slides, s = this.$wrapperEl, a = this.slidesSizesGrid, r = this.params.coverflowEffect, o = this.isHorizontal(), l = this.translate, d = o ? e / 2 - l : t / 2 - l, p = o ? r.rotate : -r.rotate, c = r.depth, u = 0, v = i.length; u < v; u += 1) {
                var f = i.eq(u), m = a[u], g = (d - f[0].swiperSlideOffset - m / 2) / m * r.modifier, b = o ? p * g : 0,
                    w = o ? 0 : p * g, y = -c * Math.abs(g), x = r.stretch;
                "string" == typeof x && -1 !== x.indexOf("%") && (x = parseFloat(r.stretch) / 100 * m);
                var E = o ? 0 : x * g, T = o ? x * g : 0, S = 1 - (1 - r.scale) * Math.abs(g);
                Math.abs(T) < .001 && (T = 0), Math.abs(E) < .001 && (E = 0), Math.abs(y) < .001 && (y = 0), Math.abs(b) < .001 && (b = 0), Math.abs(w) < .001 && (w = 0), Math.abs(S) < .001 && (S = 0);
                var C = "translate3d(" + T + "px," + E + "px," + y + "px)  rotateX(" + w + "deg) rotateY(" + b + "deg) scale(" + S + ")";
                if (f.transform(C), f[0].style.zIndex = 1 - Math.abs(Math.round(g)), r.slideShadows) {
                    var M = o ? f.find(".swiper-slide-shadow-left") : f.find(".swiper-slide-shadow-top"),
                        P = o ? f.find(".swiper-slide-shadow-right") : f.find(".swiper-slide-shadow-bottom");
                    0 === M.length && (M = n('<div class="swiper-slide-shadow-' + (o ? "left" : "top") + '"></div>'), f.append(M)), 0 === P.length && (P = n('<div class="swiper-slide-shadow-' + (o ? "right" : "bottom") + '"></div>'), f.append(P)), M.length && (M[0].style.opacity = g > 0 ? g : 0), P.length && (P[0].style.opacity = -g > 0 ? -g : 0)
                }
            }
            (h.pointerEvents || h.prefixedPointerEvents) && (s[0].style.perspectiveOrigin = d + "px 50%")
        }, setTransition: function (e) {
            this.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e)
        }
    }, xe = {
        init: function () {
            var e = this.params.thumbs, t = this.constructor;
            e.swiper instanceof t ? (this.thumbs.swiper = e.swiper, d.extend(this.thumbs.swiper.originalParams, {
                watchSlidesProgress: !0,
                slideToClickedSlide: !1
            }), d.extend(this.thumbs.swiper.params, {
                watchSlidesProgress: !0,
                slideToClickedSlide: !1
            })) : d.isObject(e.swiper) && (this.thumbs.swiper = new t(d.extend({}, e.swiper, {
                watchSlidesVisibility: !0,
                watchSlidesProgress: !0,
                slideToClickedSlide: !1
            })), this.thumbs.swiperCreated = !0), this.thumbs.swiper.$el.addClass(this.params.thumbs.thumbsContainerClass), this.thumbs.swiper.on("tap", this.thumbs.onThumbClick)
        }, onThumbClick: function () {
            var e = this.thumbs.swiper;
            if (e) {
                var t = e.clickedIndex, i = e.clickedSlide;
                if (!(i && n(i).hasClass(this.params.thumbs.slideThumbActiveClass) || null == t)) {
                    var s;
                    if (s = e.params.loop ? parseInt(n(e.clickedSlide).attr("data-swiper-slide-index"), 10) : t, this.params.loop) {
                        var a = this.activeIndex;
                        this.slides.eq(a).hasClass(this.params.slideDuplicateClass) && (this.loopFix(), this._clientLeft = this.$wrapperEl[0].clientLeft, a = this.activeIndex);
                        var r = this.slides.eq(a).prevAll('[data-swiper-slide-index="' + s + '"]').eq(0).index(),
                            o = this.slides.eq(a).nextAll('[data-swiper-slide-index="' + s + '"]').eq(0).index();
                        s = void 0 === r ? o : void 0 === o ? r : o - a < a - r ? o : r
                    }
                    this.slideTo(s)
                }
            }
        }, update: function (e) {
            var t = this.thumbs.swiper;
            if (t) {
                var i = "auto" === t.params.slidesPerView ? t.slidesPerViewDynamic() : t.params.slidesPerView,
                    s = this.params.thumbs.autoScrollOffset, a = s && !t.params.loop;
                if (this.realIndex !== t.realIndex || a) {
                    var r, n, o = t.activeIndex;
                    if (t.params.loop) {
                        t.slides.eq(o).hasClass(t.params.slideDuplicateClass) && (t.loopFix(), t._clientLeft = t.$wrapperEl[0].clientLeft, o = t.activeIndex);
                        var l = t.slides.eq(o).prevAll('[data-swiper-slide-index="' + this.realIndex + '"]').eq(0).index(),
                            d = t.slides.eq(o).nextAll('[data-swiper-slide-index="' + this.realIndex + '"]').eq(0).index();
                        r = void 0 === l ? d : void 0 === d ? l : d - o == o - l ? o : d - o < o - l ? d : l, n = this.activeIndex > this.previousIndex ? "next" : "prev"
                    } else n = (r = this.realIndex) > this.previousIndex ? "next" : "prev";
                    a && (r += "next" === n ? s : -1 * s), t.visibleSlidesIndexes && t.visibleSlidesIndexes.indexOf(r) < 0 && (t.params.centeredSlides ? r = r > o ? r - Math.floor(i / 2) + 1 : r + Math.floor(i / 2) - 1 : r > o && (r = r - i + 1), t.slideTo(r, e ? 0 : void 0))
                }
                var h = 1, p = this.params.thumbs.slideThumbActiveClass;
                if (this.params.slidesPerView > 1 && !this.params.centeredSlides && (h = this.params.slidesPerView), this.params.thumbs.multipleActiveThumbs || (h = 1), h = Math.floor(h), t.slides.removeClass(p), t.params.loop || t.params.virtual && t.params.virtual.enabled) for (var c = 0; c < h; c += 1) t.$wrapperEl.children('[data-swiper-slide-index="' + (this.realIndex + c) + '"]').addClass(p); else for (var u = 0; u < h; u += 1) t.slides.eq(this.realIndex + u).addClass(p)
            }
        }
    }, Ee = [K, U, Z, Q, ee, ie, ae, {
        name: "mousewheel",
        params: {
            mousewheel: {
                enabled: !1,
                releaseOnEdges: !1,
                invert: !1,
                forceToAxis: !1,
                sensitivity: 1,
                eventsTarged: "container"
            }
        },
        create: function () {
            d.extend(this, {
                mousewheel: {
                    enabled: !1,
                    enable: re.enable.bind(this),
                    disable: re.disable.bind(this),
                    handle: re.handle.bind(this),
                    handleMouseEnter: re.handleMouseEnter.bind(this),
                    handleMouseLeave: re.handleMouseLeave.bind(this),
                    animateSlider: re.animateSlider.bind(this),
                    releaseScroll: re.releaseScroll.bind(this),
                    lastScrollTime: d.now(),
                    lastEventBeforeSnap: void 0,
                    recentWheelEvents: []
                }
            })
        },
        on: {
            init: function () {
                !this.params.mousewheel.enabled && this.params.cssMode && this.mousewheel.disable(), this.params.mousewheel.enabled && this.mousewheel.enable()
            }, destroy: function () {
                this.params.cssMode && this.mousewheel.enable(), this.mousewheel.enabled && this.mousewheel.disable()
            }
        }
    }, {
        name: "navigation",
        params: {
            navigation: {
                nextEl: null,
                prevEl: null,
                hideOnClick: !1,
                disabledClass: "swiper-button-disabled",
                hiddenClass: "swiper-button-hidden",
                lockClass: "swiper-button-lock"
            }
        },
        create: function () {
            d.extend(this, {
                navigation: {
                    init: ne.init.bind(this),
                    update: ne.update.bind(this),
                    destroy: ne.destroy.bind(this),
                    onNextClick: ne.onNextClick.bind(this),
                    onPrevClick: ne.onPrevClick.bind(this)
                }
            })
        },
        on: {
            init: function () {
                this.navigation.init(), this.navigation.update()
            }, toEdge: function () {
                this.navigation.update()
            }, fromEdge: function () {
                this.navigation.update()
            }, destroy: function () {
                this.navigation.destroy()
            }, click: function (e) {
                var t, i = this.navigation, s = i.$nextEl, a = i.$prevEl;
                !this.params.navigation.hideOnClick || n(e.target).is(a) || n(e.target).is(s) || (s ? t = s.hasClass(this.params.navigation.hiddenClass) : a && (t = a.hasClass(this.params.navigation.hiddenClass)), !0 === t ? this.emit("navigationShow", this) : this.emit("navigationHide", this), s && s.toggleClass(this.params.navigation.hiddenClass), a && a.toggleClass(this.params.navigation.hiddenClass))
            }
        }
    }, {
        name: "pagination",
        params: {
            pagination: {
                el: null,
                bulletElement: "span",
                clickable: !1,
                hideOnClick: !1,
                renderBullet: null,
                renderProgressbar: null,
                renderFraction: null,
                renderCustom: null,
                progressbarOpposite: !1,
                type: "bullets",
                dynamicBullets: !1,
                dynamicMainBullets: 1,
                formatFractionCurrent: function (e) {
                    return e
                },
                formatFractionTotal: function (e) {
                    return e
                },
                bulletClass: "swiper-pagination-bullet",
                bulletActiveClass: "swiper-pagination-bullet-active",
                modifierClass: "swiper-pagination-",
                currentClass: "swiper-pagination-current",
                totalClass: "swiper-pagination-total",
                hiddenClass: "swiper-pagination-hidden",
                progressbarFillClass: "swiper-pagination-progressbar-fill",
                progressbarOppositeClass: "swiper-pagination-progressbar-opposite",
                clickableClass: "swiper-pagination-clickable",
                lockClass: "swiper-pagination-lock"
            }
        },
        create: function () {
            d.extend(this, {
                pagination: {
                    init: oe.init.bind(this),
                    render: oe.render.bind(this),
                    update: oe.update.bind(this),
                    destroy: oe.destroy.bind(this),
                    dynamicBulletIndex: 0
                }
            })
        },
        on: {
            init: function () {
                this.pagination.init(), this.pagination.render(), this.pagination.update()
            }, activeIndexChange: function () {
                (this.params.loop || void 0 === this.snapIndex) && this.pagination.update()
            }, snapIndexChange: function () {
                this.params.loop || this.pagination.update()
            }, slidesLengthChange: function () {
                this.params.loop && (this.pagination.render(), this.pagination.update())
            }, snapGridLengthChange: function () {
                this.params.loop || (this.pagination.render(), this.pagination.update())
            }, destroy: function () {
                this.pagination.destroy()
            }, click: function (e) {
                this.params.pagination.el && this.params.pagination.hideOnClick && this.pagination.$el.length > 0 && !n(e.target).hasClass(this.params.pagination.bulletClass) && (!0 === this.pagination.$el.hasClass(this.params.pagination.hiddenClass) ? this.emit("paginationShow", this) : this.emit("paginationHide", this), this.pagination.$el.toggleClass(this.params.pagination.hiddenClass))
            }
        }
    }, {
        name: "scrollbar",
        params: {
            scrollbar: {
                el: null,
                dragSize: "auto",
                hide: !1,
                draggable: !1,
                snapOnRelease: !0,
                lockClass: "swiper-scrollbar-lock",
                dragClass: "swiper-scrollbar-drag"
            }
        },
        create: function () {
            d.extend(this, {
                scrollbar: {
                    init: le.init.bind(this),
                    destroy: le.destroy.bind(this),
                    updateSize: le.updateSize.bind(this),
                    setTranslate: le.setTranslate.bind(this),
                    setTransition: le.setTransition.bind(this),
                    enableDraggable: le.enableDraggable.bind(this),
                    disableDraggable: le.disableDraggable.bind(this),
                    setDragPosition: le.setDragPosition.bind(this),
                    getPointerPosition: le.getPointerPosition.bind(this),
                    onDragStart: le.onDragStart.bind(this),
                    onDragMove: le.onDragMove.bind(this),
                    onDragEnd: le.onDragEnd.bind(this),
                    isTouched: !1,
                    timeout: null,
                    dragTimeout: null
                }
            })
        },
        on: {
            init: function () {
                this.scrollbar.init(), this.scrollbar.updateSize(), this.scrollbar.setTranslate()
            }, update: function () {
                this.scrollbar.updateSize()
            }, resize: function () {
                this.scrollbar.updateSize()
            }, observerUpdate: function () {
                this.scrollbar.updateSize()
            }, setTranslate: function () {
                this.scrollbar.setTranslate()
            }, setTransition: function (e) {
                this.scrollbar.setTransition(e)
            }, destroy: function () {
                this.scrollbar.destroy()
            }
        }
    }, {
        name: "parallax", params: {parallax: {enabled: !1}}, create: function () {
            d.extend(this, {
                parallax: {
                    setTransform: de.setTransform.bind(this),
                    setTranslate: de.setTranslate.bind(this),
                    setTransition: de.setTransition.bind(this)
                }
            })
        }, on: {
            beforeInit: function () {
                this.params.parallax.enabled && (this.params.watchSlidesProgress = !0, this.originalParams.watchSlidesProgress = !0)
            }, init: function () {
                this.params.parallax.enabled && this.parallax.setTranslate()
            }, setTranslate: function () {
                this.params.parallax.enabled && this.parallax.setTranslate()
            }, setTransition: function (e) {
                this.params.parallax.enabled && this.parallax.setTransition(e)
            }
        }
    }, {
        name: "zoom",
        params: {
            zoom: {
                enabled: !1,
                maxRatio: 3,
                minRatio: 1,
                toggle: !0,
                containerClass: "swiper-zoom-container",
                zoomedSlideClass: "swiper-slide-zoomed"
            }
        },
        create: function () {
            var e = this, t = {
                enabled: !1,
                scale: 1,
                currentScale: 1,
                isScaling: !1,
                gesture: {
                    $slideEl: void 0,
                    slideWidth: void 0,
                    slideHeight: void 0,
                    $imageEl: void 0,
                    $imageWrapEl: void 0,
                    maxRatio: 3
                },
                image: {
                    isTouched: void 0,
                    isMoved: void 0,
                    currentX: void 0,
                    currentY: void 0,
                    minX: void 0,
                    minY: void 0,
                    maxX: void 0,
                    maxY: void 0,
                    width: void 0,
                    height: void 0,
                    startX: void 0,
                    startY: void 0,
                    touchesStart: {},
                    touchesCurrent: {}
                },
                velocity: {x: void 0, y: void 0, prevPositionX: void 0, prevPositionY: void 0, prevTime: void 0}
            };
            "onGestureStart onGestureChange onGestureEnd onTouchStart onTouchMove onTouchEnd onTransitionEnd toggle enable disable in out".split(" ").forEach((function (i) {
                t[i] = he[i].bind(e)
            })), d.extend(e, {zoom: t});
            var i = 1;
            Object.defineProperty(e.zoom, "scale", {
                get: function () {
                    return i
                }, set: function (t) {
                    if (i !== t) {
                        var s = e.zoom.gesture.$imageEl ? e.zoom.gesture.$imageEl[0] : void 0,
                            a = e.zoom.gesture.$slideEl ? e.zoom.gesture.$slideEl[0] : void 0;
                        e.emit("zoomChange", t, s, a)
                    }
                    i = t
                }
            })
        },
        on: {
            init: function () {
                this.params.zoom.enabled && this.zoom.enable()
            }, destroy: function () {
                this.zoom.disable()
            }, touchStart: function (e) {
                this.zoom.enabled && this.zoom.onTouchStart(e)
            }, touchEnd: function (e) {
                this.zoom.enabled && this.zoom.onTouchEnd(e)
            }, doubleTap: function (e) {
                this.params.zoom.enabled && this.zoom.enabled && this.params.zoom.toggle && this.zoom.toggle(e)
            }, transitionEnd: function () {
                this.zoom.enabled && this.params.zoom.enabled && this.zoom.onTransitionEnd()
            }, slideChange: function () {
                this.zoom.enabled && this.params.zoom.enabled && this.params.cssMode && this.zoom.onTransitionEnd()
            }
        }
    }, {
        name: "lazy",
        params: {
            lazy: {
                enabled: !1,
                loadPrevNext: !1,
                loadPrevNextAmount: 1,
                loadOnTransitionStart: !1,
                elementClass: "swiper-lazy",
                loadingClass: "swiper-lazy-loading",
                loadedClass: "swiper-lazy-loaded",
                preloaderClass: "swiper-lazy-preloader"
            }
        },
        create: function () {
            d.extend(this, {
                lazy: {
                    initialImageLoaded: !1,
                    load: pe.load.bind(this),
                    loadInSlide: pe.loadInSlide.bind(this)
                }
            })
        },
        on: {
            beforeInit: function () {
                this.params.lazy.enabled && this.params.preloadImages && (this.params.preloadImages = !1)
            }, init: function () {
                this.params.lazy.enabled && !this.params.loop && 0 === this.params.initialSlide && this.lazy.load()
            }, scroll: function () {
                this.params.freeMode && !this.params.freeModeSticky && this.lazy.load()
            }, resize: function () {
                this.params.lazy.enabled && this.lazy.load()
            }, scrollbarDragMove: function () {
                this.params.lazy.enabled && this.lazy.load()
            }, transitionStart: function () {
                this.params.lazy.enabled && (this.params.lazy.loadOnTransitionStart || !this.params.lazy.loadOnTransitionStart && !this.lazy.initialImageLoaded) && this.lazy.load()
            }, transitionEnd: function () {
                this.params.lazy.enabled && !this.params.lazy.loadOnTransitionStart && this.lazy.load()
            }, slideChange: function () {
                this.params.lazy.enabled && this.params.cssMode && this.lazy.load()
            }
        }
    }, {
        name: "controller", params: {controller: {control: void 0, inverse: !1, by: "slide"}}, create: function () {
            d.extend(this, {
                controller: {
                    control: this.params.controller.control,
                    getInterpolateFunction: ce.getInterpolateFunction.bind(this),
                    setTranslate: ce.setTranslate.bind(this),
                    setTransition: ce.setTransition.bind(this)
                }
            })
        }, on: {
            update: function () {
                this.controller.control && this.controller.spline && (this.controller.spline = void 0, delete this.controller.spline)
            }, resize: function () {
                this.controller.control && this.controller.spline && (this.controller.spline = void 0, delete this.controller.spline)
            }, observerUpdate: function () {
                this.controller.control && this.controller.spline && (this.controller.spline = void 0, delete this.controller.spline)
            }, setTranslate: function (e, t) {
                this.controller.control && this.controller.setTranslate(e, t)
            }, setTransition: function (e, t) {
                this.controller.control && this.controller.setTransition(e, t)
            }
        }
    }, {
        name: "a11y",
        params: {
            a11y: {
                enabled: !0,
                notificationClass: "swiper-notification",
                prevSlideMessage: "Previous slide",
                nextSlideMessage: "Next slide",
                firstSlideMessage: "This is the first slide",
                lastSlideMessage: "This is the last slide",
                paginationBulletMessage: "Go to slide {{index}}"
            }
        },
        create: function () {
            var e = this;
            d.extend(e, {a11y: {liveRegion: n('<span class="' + e.params.a11y.notificationClass + '" aria-live="assertive" aria-atomic="true"></span>')}}), Object.keys(ue).forEach((function (t) {
                e.a11y[t] = ue[t].bind(e)
            }))
        },
        on: {
            init: function () {
                this.params.a11y.enabled && (this.a11y.init(), this.a11y.updateNavigation())
            }, toEdge: function () {
                this.params.a11y.enabled && this.a11y.updateNavigation()
            }, fromEdge: function () {
                this.params.a11y.enabled && this.a11y.updateNavigation()
            }, paginationUpdate: function () {
                this.params.a11y.enabled && this.a11y.updatePagination()
            }, destroy: function () {
                this.params.a11y.enabled && this.a11y.destroy()
            }
        }
    }, {
        name: "history", params: {history: {enabled: !1, replaceState: !1, key: "slides"}}, create: function () {
            d.extend(this, {
                history: {
                    init: ve.init.bind(this),
                    setHistory: ve.setHistory.bind(this),
                    setHistoryPopState: ve.setHistoryPopState.bind(this),
                    scrollToSlide: ve.scrollToSlide.bind(this),
                    destroy: ve.destroy.bind(this)
                }
            })
        }, on: {
            init: function () {
                this.params.history.enabled && this.history.init()
            }, destroy: function () {
                this.params.history.enabled && this.history.destroy()
            }, transitionEnd: function () {
                this.history.initialized && this.history.setHistory(this.params.history.key, this.activeIndex)
            }, slideChange: function () {
                this.history.initialized && this.params.cssMode && this.history.setHistory(this.params.history.key, this.activeIndex)
            }
        }
    }, {
        name: "hash-navigation",
        params: {hashNavigation: {enabled: !1, replaceState: !1, watchState: !1}},
        create: function () {
            d.extend(this, {
                hashNavigation: {
                    initialized: !1,
                    init: fe.init.bind(this),
                    destroy: fe.destroy.bind(this),
                    setHash: fe.setHash.bind(this),
                    onHashCange: fe.onHashCange.bind(this)
                }
            })
        },
        on: {
            init: function () {
                this.params.hashNavigation.enabled && this.hashNavigation.init()
            }, destroy: function () {
                this.params.hashNavigation.enabled && this.hashNavigation.destroy()
            }, transitionEnd: function () {
                this.hashNavigation.initialized && this.hashNavigation.setHash()
            }, slideChange: function () {
                this.hashNavigation.initialized && this.params.cssMode && this.hashNavigation.setHash()
            }
        }
    }, {
        name: "autoplay",
        params: {
            autoplay: {
                enabled: !1,
                delay: 3e3,
                waitForTransition: !0,
                disableOnInteraction: !0,
                stopOnLastSlide: !1,
                reverseDirection: !1
            }
        },
        create: function () {
            var e = this;
            d.extend(e, {
                autoplay: {
                    running: !1,
                    paused: !1,
                    run: me.run.bind(e),
                    start: me.start.bind(e),
                    stop: me.stop.bind(e),
                    pause: me.pause.bind(e),
                    onVisibilityChange: function () {
                        "hidden" === document.visibilityState && e.autoplay.running && e.autoplay.pause(), "visible" === document.visibilityState && e.autoplay.paused && (e.autoplay.run(), e.autoplay.paused = !1)
                    },
                    onTransitionEnd: function (t) {
                        e && !e.destroyed && e.$wrapperEl && t.target === this && (e.$wrapperEl[0].removeEventListener("transitionend", e.autoplay.onTransitionEnd), e.$wrapperEl[0].removeEventListener("webkitTransitionEnd", e.autoplay.onTransitionEnd), e.autoplay.paused = !1, e.autoplay.running ? e.autoplay.run() : e.autoplay.stop())
                    }
                }
            })
        },
        on: {
            init: function () {
                this.params.autoplay.enabled && (this.autoplay.start(), document.addEventListener("visibilitychange", this.autoplay.onVisibilityChange))
            }, beforeTransitionStart: function (e, t) {
                this.autoplay.running && (t || !this.params.autoplay.disableOnInteraction ? this.autoplay.pause(e) : this.autoplay.stop())
            }, sliderFirstMove: function () {
                this.autoplay.running && (this.params.autoplay.disableOnInteraction ? this.autoplay.stop() : this.autoplay.pause())
            }, touchEnd: function () {
                this.params.cssMode && this.autoplay.paused && !this.params.autoplay.disableOnInteraction && this.autoplay.run()
            }, destroy: function () {
                this.autoplay.running && this.autoplay.stop(), document.removeEventListener("visibilitychange", this.autoplay.onVisibilityChange)
            }
        }
    }, {
        name: "effect-fade", params: {fadeEffect: {crossFade: !1}}, create: function () {
            d.extend(this, {
                fadeEffect: {
                    setTranslate: ge.setTranslate.bind(this),
                    setTransition: ge.setTransition.bind(this)
                }
            })
        }, on: {
            beforeInit: function () {
                if ("fade" === this.params.effect) {
                    this.classNames.push(this.params.containerModifierClass + "fade");
                    var e = {
                        slidesPerView: 1,
                        slidesPerColumn: 1,
                        slidesPerGroup: 1,
                        watchSlidesProgress: !0,
                        spaceBetween: 0,
                        virtualTranslate: !0
                    };
                    d.extend(this.params, e), d.extend(this.originalParams, e)
                }
            }, setTranslate: function () {
                "fade" === this.params.effect && this.fadeEffect.setTranslate()
            }, setTransition: function (e) {
                "fade" === this.params.effect && this.fadeEffect.setTransition(e)
            }
        }
    }, {
        name: "effect-cube",
        params: {cubeEffect: {slideShadows: !0, shadow: !0, shadowOffset: 20, shadowScale: .94}},
        create: function () {
            d.extend(this, {
                cubeEffect: {
                    setTranslate: be.setTranslate.bind(this),
                    setTransition: be.setTransition.bind(this)
                }
            })
        },
        on: {
            beforeInit: function () {
                if ("cube" === this.params.effect) {
                    this.classNames.push(this.params.containerModifierClass + "cube"), this.classNames.push(this.params.containerModifierClass + "3d");
                    var e = {
                        slidesPerView: 1,
                        slidesPerColumn: 1,
                        slidesPerGroup: 1,
                        watchSlidesProgress: !0,
                        resistanceRatio: 0,
                        spaceBetween: 0,
                        centeredSlides: !1,
                        virtualTranslate: !0
                    };
                    d.extend(this.params, e), d.extend(this.originalParams, e)
                }
            }, setTranslate: function () {
                "cube" === this.params.effect && this.cubeEffect.setTranslate()
            }, setTransition: function (e) {
                "cube" === this.params.effect && this.cubeEffect.setTransition(e)
            }
        }
    }, {
        name: "effect-flip", params: {flipEffect: {slideShadows: !0, limitRotation: !0}}, create: function () {
            d.extend(this, {
                flipEffect: {
                    setTranslate: we.setTranslate.bind(this),
                    setTransition: we.setTransition.bind(this)
                }
            })
        }, on: {
            beforeInit: function () {
                if ("flip" === this.params.effect) {
                    this.classNames.push(this.params.containerModifierClass + "flip"), this.classNames.push(this.params.containerModifierClass + "3d");
                    var e = {
                        slidesPerView: 1,
                        slidesPerColumn: 1,
                        slidesPerGroup: 1,
                        watchSlidesProgress: !0,
                        spaceBetween: 0,
                        virtualTranslate: !0
                    };
                    d.extend(this.params, e), d.extend(this.originalParams, e)
                }
            }, setTranslate: function () {
                "flip" === this.params.effect && this.flipEffect.setTranslate()
            }, setTransition: function (e) {
                "flip" === this.params.effect && this.flipEffect.setTransition(e)
            }
        }
    }, {
        name: "effect-coverflow",
        params: {coverflowEffect: {rotate: 50, stretch: 0, depth: 100, scale: 1, modifier: 1, slideShadows: !0}},
        create: function () {
            d.extend(this, {
                coverflowEffect: {
                    setTranslate: ye.setTranslate.bind(this),
                    setTransition: ye.setTransition.bind(this)
                }
            })
        },
        on: {
            beforeInit: function () {
                "coverflow" === this.params.effect && (this.classNames.push(this.params.containerModifierClass + "coverflow"), this.classNames.push(this.params.containerModifierClass + "3d"), this.params.watchSlidesProgress = !0, this.originalParams.watchSlidesProgress = !0)
            }, setTranslate: function () {
                "coverflow" === this.params.effect && this.coverflowEffect.setTranslate()
            }, setTransition: function (e) {
                "coverflow" === this.params.effect && this.coverflowEffect.setTransition(e)
            }
        }
    }, {
        name: "thumbs",
        params: {
            thumbs: {
                swiper: null,
                multipleActiveThumbs: !0,
                autoScrollOffset: 0,
                slideThumbActiveClass: "swiper-slide-thumb-active",
                thumbsContainerClass: "swiper-container-thumbs"
            }
        },
        create: function () {
            d.extend(this, {
                thumbs: {
                    swiper: null,
                    init: xe.init.bind(this),
                    update: xe.update.bind(this),
                    onThumbClick: xe.onThumbClick.bind(this)
                }
            })
        },
        on: {
            beforeInit: function () {
                var e = this.params.thumbs;
                e && e.swiper && (this.thumbs.init(), this.thumbs.update(!0))
            }, slideChange: function () {
                this.thumbs.swiper && this.thumbs.update()
            }, update: function () {
                this.thumbs.swiper && this.thumbs.update()
            }, resize: function () {
                this.thumbs.swiper && this.thumbs.update()
            }, observerUpdate: function () {
                this.thumbs.swiper && this.thumbs.update()
            }, setTransition: function (e) {
                var t = this.thumbs.swiper;
                t && t.setTransition(e)
            }, beforeDestroy: function () {
                var e = this.thumbs.swiper;
                e && this.thumbs.swiperCreated && e && e.destroy()
            }
        }
    }];
    return void 0 === j.use && (j.use = j.Class.use, j.installModule = j.Class.installModule), j.use(Ee), j
}));
//# sourceMappingURL=swiper.min.js.map

/*! nouislider - 14.6.0 - 6/27/2020 */
(function (factory) {
    if (typeof define === "function" && define.amd) {
        // AMD. Register as an anonymous module.
        define([], factory);
    } else if (typeof exports === "object") {
        // Node/CommonJS
        module.exports = factory();
    } else {
        // Browser globals
        window.noUiSlider = factory();
    }
})(function () {
    "use strict";

    var VERSION = "14.6.0";

    //region Helper Methods

    function isValidFormatter(entry) {
        return typeof entry === "object" && typeof entry.to === "function" && typeof entry.from === "function";
    }

    function removeElement(el) {
        el.parentElement.removeChild(el);
    }

    function isSet(value) {
        return value !== null && value !== undefined;
    }

    // Bindable version
    function preventDefault(e) {
        e.preventDefault();
    }

    // Removes duplicates from an array.
    function unique(array) {
        return array.filter(function (a) {
            return !this[a] ? (this[a] = true) : false;
        }, {});
    }

    // Round a value to the closest 'to'.
    function closest(value, to) {
        return Math.round(value / to) * to;
    }

    // Current position of an element relative to the document.
    function offset(elem, orientation) {
        var rect = elem.getBoundingClientRect();
        var doc = elem.ownerDocument;
        var docElem = doc.documentElement;
        var pageOffset = getPageOffset(doc);

        // getBoundingClientRect contains left scroll in Chrome on Android.
        // I haven't found a feature detection that proves this. Worst case
        // scenario on mis-match: the 'tap' feature on horizontal sliders breaks.
        if (/webkit.*Chrome.*Mobile/i.test(navigator.userAgent)) {
            pageOffset.x = 0;
        }

        return orientation
            ? rect.top + pageOffset.y - docElem.clientTop
            : rect.left + pageOffset.x - docElem.clientLeft;
    }

    // Checks whether a value is numerical.
    function isNumeric(a) {
        return typeof a === "number" && !isNaN(a) && isFinite(a);
    }

    // Sets a class and removes it after [duration] ms.
    function addClassFor(element, className, duration) {
        if (duration > 0) {
            addClass(element, className);
            setTimeout(function () {
                removeClass(element, className);
            }, duration);
        }
    }

    // Limits a value to 0 - 100
    function limit(a) {
        return Math.max(Math.min(a, 100), 0);
    }

    // Wraps a variable as an array, if it isn't one yet.
    // Note that an input array is returned by reference!
    function asArray(a) {
        return Array.isArray(a) ? a : [a];
    }

    // Counts decimals
    function countDecimals(numStr) {
        numStr = String(numStr);
        var pieces = numStr.split(".");
        return pieces.length > 1 ? pieces[1].length : 0;
    }

    // http://youmightnotneedjquery.com/#add_class
    function addClass(el, className) {
        if (el.classList && !/\s/.test(className)) {
            el.classList.add(className);
        } else {
            el.className += " " + className;
        }
    }

    // http://youmightnotneedjquery.com/#remove_class
    function removeClass(el, className) {
        if (el.classList && !/\s/.test(className)) {
            el.classList.remove(className);
        } else {
            el.className = el.className.replace(
                new RegExp("(^|\\b)" + className.split(" ").join("|") + "(\\b|$)", "gi"),
                " "
            );
        }
    }

    // https://plainjs.com/javascript/attributes/adding-removing-and-testing-for-classes-9/
    function hasClass(el, className) {
        return el.classList
            ? el.classList.contains(className)
            : new RegExp("\\b" + className + "\\b").test(el.className);
    }

    // https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollY#Notes
    function getPageOffset(doc) {
        var supportPageOffset = window.pageXOffset !== undefined;
        var isCSS1Compat = (doc.compatMode || "") === "CSS1Compat";
        var x = supportPageOffset
            ? window.pageXOffset
            : isCSS1Compat
                ? doc.documentElement.scrollLeft
                : doc.body.scrollLeft;
        var y = supportPageOffset
            ? window.pageYOffset
            : isCSS1Compat
                ? doc.documentElement.scrollTop
                : doc.body.scrollTop;

        return {
            x: x,
            y: y
        };
    }

    // we provide a function to compute constants instead
    // of accessing window.* as soon as the module needs it
    // so that we do not compute anything if not needed
    function getActions() {
        // Determine the events to bind. IE11 implements pointerEvents without
        // a prefix, which breaks compatibility with the IE10 implementation.
        return window.navigator.pointerEnabled
            ? {
                start: "pointerdown",
                move: "pointermove",
                end: "pointerup"
            }
            : window.navigator.msPointerEnabled
                ? {
                    start: "MSPointerDown",
                    move: "MSPointerMove",
                    end: "MSPointerUp"
                }
                : {
                    start: "mousedown touchstart",
                    move: "mousemove touchmove",
                    end: "mouseup touchend"
                };
    }

    // https://github.com/WICG/EventListenerOptions/blob/gh-pages/explainer.md
    // Issue #785
    function getSupportsPassive() {
        var supportsPassive = false;

        /* eslint-disable */
        try {
            var opts = Object.defineProperty({}, "passive", {
                get: function () {
                    supportsPassive = true;
                }
            });

            window.addEventListener("test", null, opts);
        } catch (e) {
        }
        /* eslint-enable */

        return supportsPassive;
    }

    function getSupportsTouchActionNone() {
        return window.CSS && CSS.supports && CSS.supports("touch-action", "none");
    }

    //endregion

    //region Range Calculation

    // Determine the size of a sub-range in relation to a full range.
    function subRangeRatio(pa, pb) {
        return 100 / (pb - pa);
    }

    // (percentage) How many percent is this value of this range?
    function fromPercentage(range, value, startRange) {
        return (value * 100) / (range[startRange + 1] - range[startRange]);
    }

    // (percentage) Where is this value on this range?
    function toPercentage(range, value) {
        return fromPercentage(range, range[0] < 0 ? value + Math.abs(range[0]) : value - range[0], 0);
    }

    // (value) How much is this percentage on this range?
    function isPercentage(range, value) {
        return (value * (range[1] - range[0])) / 100 + range[0];
    }

    function getJ(value, arr) {
        var j = 1;

        while (value >= arr[j]) {
            j += 1;
        }

        return j;
    }

    // (percentage) Input a value, find where, on a scale of 0-100, it applies.
    function toStepping(xVal, xPct, value) {
        if (value >= xVal.slice(-1)[0]) {
            return 100;
        }

        var j = getJ(value, xVal);
        var va = xVal[j - 1];
        var vb = xVal[j];
        var pa = xPct[j - 1];
        var pb = xPct[j];

        return pa + toPercentage([va, vb], value) / subRangeRatio(pa, pb);
    }

    // (value) Input a percentage, find where it is on the specified range.
    function fromStepping(xVal, xPct, value) {
        // There is no range group that fits 100
        if (value >= 100) {
            return xVal.slice(-1)[0];
        }

        var j = getJ(value, xPct);
        var va = xVal[j - 1];
        var vb = xVal[j];
        var pa = xPct[j - 1];
        var pb = xPct[j];

        return isPercentage([va, vb], (value - pa) * subRangeRatio(pa, pb));
    }

    // (percentage) Get the step that applies at a certain value.
    function getStep(xPct, xSteps, snap, value) {
        if (value === 100) {
            return value;
        }

        var j = getJ(value, xPct);
        var a = xPct[j - 1];
        var b = xPct[j];

        // If 'snap' is set, steps are used as fixed points on the slider.
        if (snap) {
            // Find the closest position, a or b.
            if (value - a > (b - a) / 2) {
                return b;
            }

            return a;
        }

        if (!xSteps[j - 1]) {
            return value;
        }

        return xPct[j - 1] + closest(value - xPct[j - 1], xSteps[j - 1]);
    }

    function handleEntryPoint(index, value, that) {
        var percentage;

        // Wrap numerical input in an array.
        if (typeof value === "number") {
            value = [value];
        }

        // Reject any invalid input, by testing whether value is an array.
        if (!Array.isArray(value)) {
            throw new Error("noUiSlider (" + VERSION + "): 'range' contains invalid value.");
        }

        // Covert min/max syntax to 0 and 100.
        if (index === "min") {
            percentage = 0;
        } else if (index === "max") {
            percentage = 100;
        } else {
            percentage = parseFloat(index);
        }

        // Check for correct input.
        if (!isNumeric(percentage) || !isNumeric(value[0])) {
            throw new Error("noUiSlider (" + VERSION + "): 'range' value isn't numeric.");
        }

        // Store values.
        that.xPct.push(percentage);
        that.xVal.push(value[0]);

        // NaN will evaluate to false too, but to keep
        // logging clear, set step explicitly. Make sure
        // not to override the 'step' setting with false.
        if (!percentage) {
            if (!isNaN(value[1])) {
                that.xSteps[0] = value[1];
            }
        } else {
            that.xSteps.push(isNaN(value[1]) ? false : value[1]);
        }

        that.xHighestCompleteStep.push(0);
    }

    function handleStepPoint(i, n, that) {
        // Ignore 'false' stepping.
        if (!n) {
            return;
        }

        // Step over zero-length ranges (#948);
        if (that.xVal[i] === that.xVal[i + 1]) {
            that.xSteps[i] = that.xHighestCompleteStep[i] = that.xVal[i];

            return;
        }

        // Factor to range ratio
        that.xSteps[i] =
            fromPercentage([that.xVal[i], that.xVal[i + 1]], n, 0) / subRangeRatio(that.xPct[i], that.xPct[i + 1]);

        var totalSteps = (that.xVal[i + 1] - that.xVal[i]) / that.xNumSteps[i];
        var highestStep = Math.ceil(Number(totalSteps.toFixed(3)) - 1);
        var step = that.xVal[i] + that.xNumSteps[i] * highestStep;

        that.xHighestCompleteStep[i] = step;
    }

    //endregion

    //region Spectrum

    function Spectrum(entry, snap, singleStep) {
        this.xPct = [];
        this.xVal = [];
        this.xSteps = [singleStep || false];
        this.xNumSteps = [false];
        this.xHighestCompleteStep = [];

        this.snap = snap;

        var index;
        var ordered = []; // [0, 'min'], [1, '50%'], [2, 'max']

        // Map the object keys to an array.
        for (index in entry) {
            if (entry.hasOwnProperty(index)) {
                ordered.push([entry[index], index]);
            }
        }

        // Sort all entries by value (numeric sort).
        if (ordered.length && typeof ordered[0][0] === "object") {
            ordered.sort(function (a, b) {
                return a[0][0] - b[0][0];
            });
        } else {
            ordered.sort(function (a, b) {
                return a[0] - b[0];
            });
        }

        // Convert all entries to subranges.
        for (index = 0; index < ordered.length; index++) {
            handleEntryPoint(ordered[index][1], ordered[index][0], this);
        }

        // Store the actual step values.
        // xSteps is sorted in the same order as xPct and xVal.
        this.xNumSteps = this.xSteps.slice(0);

        // Convert all numeric steps to the percentage of the subrange they represent.
        for (index = 0; index < this.xNumSteps.length; index++) {
            handleStepPoint(index, this.xNumSteps[index], this);
        }
    }

    Spectrum.prototype.getDistance = function (value) {
        var index;
        var distances = [];

        for (index = 0; index < this.xNumSteps.length - 1; index++) {
            // last "range" can't contain step size as it is purely an endpoint.
            var step = this.xNumSteps[index];

            if (step && (value / step) % 1 !== 0) {
                throw new Error(
                    "noUiSlider (" +
                    VERSION +
                    "): 'limit', 'margin' and 'padding' of " +
                    this.xPct[index] +
                    "% range must be divisible by step."
                );
            }

            // Calculate percentual distance in current range of limit, margin or padding
            distances[index] = fromPercentage(this.xVal, value, index);
        }

        return distances;
    };

    // Calculate the percentual distance over the whole scale of ranges.
    // direction: 0 = backwards / 1 = forwards
    Spectrum.prototype.getAbsoluteDistance = function (value, distances, direction) {
        var xPct_index = 0;

        // Calculate range where to start calculation
        if (value < this.xPct[this.xPct.length - 1]) {
            while (value > this.xPct[xPct_index + 1]) {
                xPct_index++;
            }
        } else if (value === this.xPct[this.xPct.length - 1]) {
            xPct_index = this.xPct.length - 2;
        }

        // If looking backwards and the value is exactly at a range separator then look one range further
        if (!direction && value === this.xPct[xPct_index + 1]) {
            xPct_index++;
        }

        var start_factor;
        var rest_factor = 1;

        var rest_rel_distance = distances[xPct_index];

        var range_pct = 0;

        var rel_range_distance = 0;
        var abs_distance_counter = 0;
        var range_counter = 0;

        // Calculate what part of the start range the value is
        if (direction) {
            start_factor = (value - this.xPct[xPct_index]) / (this.xPct[xPct_index + 1] - this.xPct[xPct_index]);
        } else {
            start_factor = (this.xPct[xPct_index + 1] - value) / (this.xPct[xPct_index + 1] - this.xPct[xPct_index]);
        }

        // Do until the complete distance across ranges is calculated
        while (rest_rel_distance > 0) {
            // Calculate the percentage of total range
            range_pct = this.xPct[xPct_index + 1 + range_counter] - this.xPct[xPct_index + range_counter];

            // Detect if the margin, padding or limit is larger then the current range and calculate
            if (distances[xPct_index + range_counter] * rest_factor + 100 - start_factor * 100 > 100) {
                // If larger then take the percentual distance of the whole range
                rel_range_distance = range_pct * start_factor;
                // Rest factor of relative percentual distance still to be calculated
                rest_factor = (rest_rel_distance - 100 * start_factor) / distances[xPct_index + range_counter];
                // Set start factor to 1 as for next range it does not apply.
                start_factor = 1;
            } else {
                // If smaller or equal then take the percentual distance of the calculate percentual part of that range
                rel_range_distance = ((distances[xPct_index + range_counter] * range_pct) / 100) * rest_factor;
                // No rest left as the rest fits in current range
                rest_factor = 0;
            }

            if (direction) {
                abs_distance_counter = abs_distance_counter - rel_range_distance;
                // Limit range to first range when distance becomes outside of minimum range
                if (this.xPct.length + range_counter >= 1) {
                    range_counter--;
                }
            } else {
                abs_distance_counter = abs_distance_counter + rel_range_distance;
                // Limit range to last range when distance becomes outside of maximum range
                if (this.xPct.length - range_counter >= 1) {
                    range_counter++;
                }
            }

            // Rest of relative percentual distance still to be calculated
            rest_rel_distance = distances[xPct_index + range_counter] * rest_factor;
        }

        return value + abs_distance_counter;
    };

    Spectrum.prototype.toStepping = function (value) {
        value = toStepping(this.xVal, this.xPct, value);

        return value;
    };

    Spectrum.prototype.fromStepping = function (value) {
        return fromStepping(this.xVal, this.xPct, value);
    };

    Spectrum.prototype.getStep = function (value) {
        value = getStep(this.xPct, this.xSteps, this.snap, value);

        return value;
    };

    Spectrum.prototype.getDefaultStep = function (value, isDown, size) {
        var j = getJ(value, this.xPct);

        // When at the top or stepping down, look at the previous sub-range
        if (value === 100 || (isDown && value === this.xPct[j - 1])) {
            j = Math.max(j - 1, 1);
        }

        return (this.xVal[j] - this.xVal[j - 1]) / size;
    };

    Spectrum.prototype.getNearbySteps = function (value) {
        var j = getJ(value, this.xPct);

        return {
            stepBefore: {
                startValue: this.xVal[j - 2],
                step: this.xNumSteps[j - 2],
                highestStep: this.xHighestCompleteStep[j - 2]
            },
            thisStep: {
                startValue: this.xVal[j - 1],
                step: this.xNumSteps[j - 1],
                highestStep: this.xHighestCompleteStep[j - 1]
            },
            stepAfter: {
                startValue: this.xVal[j],
                step: this.xNumSteps[j],
                highestStep: this.xHighestCompleteStep[j]
            }
        };
    };

    Spectrum.prototype.countStepDecimals = function () {
        var stepDecimals = this.xNumSteps.map(countDecimals);
        return Math.max.apply(null, stepDecimals);
    };

    // Outside testing
    Spectrum.prototype.convert = function (value) {
        return this.getStep(this.toStepping(value));
    };

    //endregion

    //region Options

    /*	Every input option is tested and parsed. This'll prevent
        endless validation in internal methods. These tests are
        structured with an item for every option available. An
        option can be marked as required by setting the 'r' flag.
        The testing function is provided with three arguments:
            - The provided value for the option;
            - A reference to the options object;
            - The name for the option;

        The testing function returns false when an error is detected,
        or true when everything is OK. It can also modify the option
        object, to make sure all values can be correctly looped elsewhere. */

    //region Defaults

    var defaultFormatter = {
        to: function (value) {
            return value !== undefined && value.toFixed(2);
        },
        from: Number
    };

    var cssClasses = {
        target: "target",
        base: "base",
        origin: "origin",
        handle: "handle",
        handleLower: "handle-lower",
        handleUpper: "handle-upper",
        touchArea: "touch-area",
        horizontal: "horizontal",
        vertical: "vertical",
        background: "background",
        connect: "connect",
        connects: "connects",
        ltr: "ltr",
        rtl: "rtl",
        textDirectionLtr: "txt-dir-ltr",
        textDirectionRtl: "txt-dir-rtl",
        draggable: "draggable",
        drag: "state-drag",
        tap: "state-tap",
        active: "active",
        tooltip: "tooltip",
        pips: "pips",
        pipsHorizontal: "pips-horizontal",
        pipsVertical: "pips-vertical",
        marker: "marker",
        markerHorizontal: "marker-horizontal",
        markerVertical: "marker-vertical",
        markerNormal: "marker-normal",
        markerLarge: "marker-large",
        markerSub: "marker-sub",
        value: "value",
        valueHorizontal: "value-horizontal",
        valueVertical: "value-vertical",
        valueNormal: "value-normal",
        valueLarge: "value-large",
        valueSub: "value-sub"
    };

    //endregion

    function validateFormat(entry) {
        // Any object with a to and from method is supported.
        if (isValidFormatter(entry)) {
            return true;
        }

        throw new Error("noUiSlider (" + VERSION + "): 'format' requires 'to' and 'from' methods.");
    }

    function testStep(parsed, entry) {
        if (!isNumeric(entry)) {
            throw new Error("noUiSlider (" + VERSION + "): 'step' is not numeric.");
        }

        // The step option can still be used to set stepping
        // for linear sliders. Overwritten if set in 'range'.
        parsed.singleStep = entry;
    }

    function testKeyboardPageMultiplier(parsed, entry) {
        if (!isNumeric(entry)) {
            throw new Error("noUiSlider (" + VERSION + "): 'keyboardPageMultiplier' is not numeric.");
        }

        parsed.keyboardPageMultiplier = entry;
    }

    function testKeyboardDefaultStep(parsed, entry) {
        if (!isNumeric(entry)) {
            throw new Error("noUiSlider (" + VERSION + "): 'keyboardDefaultStep' is not numeric.");
        }

        parsed.keyboardDefaultStep = entry;
    }

    function testRange(parsed, entry) {
        // Filter incorrect input.
        if (typeof entry !== "object" || Array.isArray(entry)) {
            throw new Error("noUiSlider (" + VERSION + "): 'range' is not an object.");
        }

        // Catch missing start or end.
        if (entry.min === undefined || entry.max === undefined) {
            throw new Error("noUiSlider (" + VERSION + "): Missing 'min' or 'max' in 'range'.");
        }

        // Catch equal start or end.
        if (entry.min === entry.max) {
            throw new Error("noUiSlider (" + VERSION + "): 'range' 'min' and 'max' cannot be equal.");
        }

        parsed.spectrum = new Spectrum(entry, parsed.snap, parsed.singleStep);
    }

    function testStart(parsed, entry) {
        entry = asArray(entry);

        // Validate input. Values aren't tested, as the public .val method
        // will always provide a valid location.
        if (!Array.isArray(entry) || !entry.length) {
            throw new Error("noUiSlider (" + VERSION + "): 'start' option is incorrect.");
        }

        // Store the number of handles.
        parsed.handles = entry.length;

        // When the slider is initialized, the .val method will
        // be called with the start options.
        parsed.start = entry;
    }

    function testSnap(parsed, entry) {
        // Enforce 100% stepping within subranges.
        parsed.snap = entry;

        if (typeof entry !== "boolean") {
            throw new Error("noUiSlider (" + VERSION + "): 'snap' option must be a boolean.");
        }
    }

    function testAnimate(parsed, entry) {
        // Enforce 100% stepping within subranges.
        parsed.animate = entry;

        if (typeof entry !== "boolean") {
            throw new Error("noUiSlider (" + VERSION + "): 'animate' option must be a boolean.");
        }
    }

    function testAnimationDuration(parsed, entry) {
        parsed.animationDuration = entry;

        if (typeof entry !== "number") {
            throw new Error("noUiSlider (" + VERSION + "): 'animationDuration' option must be a number.");
        }
    }

    function testConnect(parsed, entry) {
        var connect = [false];
        var i;

        // Map legacy options
        if (entry === "lower") {
            entry = [true, false];
        } else if (entry === "upper") {
            entry = [false, true];
        }

        // Handle boolean options
        if (entry === true || entry === false) {
            for (i = 1; i < parsed.handles; i++) {
                connect.push(entry);
            }

            connect.push(false);
        }

        // Reject invalid input
        else if (!Array.isArray(entry) || !entry.length || entry.length !== parsed.handles + 1) {
            throw new Error("noUiSlider (" + VERSION + "): 'connect' option doesn't match handle count.");
        } else {
            connect = entry;
        }

        parsed.connect = connect;
    }

    function testOrientation(parsed, entry) {
        // Set orientation to an a numerical value for easy
        // array selection.
        switch (entry) {
            case "horizontal":
                parsed.ort = 0;
                break;
            case "vertical":
                parsed.ort = 1;
                break;
            default:
                throw new Error("noUiSlider (" + VERSION + "): 'orientation' option is invalid.");
        }
    }

    function testMargin(parsed, entry) {
        if (!isNumeric(entry)) {
            throw new Error("noUiSlider (" + VERSION + "): 'margin' option must be numeric.");
        }

        // Issue #582
        if (entry === 0) {
            return;
        }

        parsed.margin = parsed.spectrum.getDistance(entry);
    }

    function testLimit(parsed, entry) {
        if (!isNumeric(entry)) {
            throw new Error("noUiSlider (" + VERSION + "): 'limit' option must be numeric.");
        }

        parsed.limit = parsed.spectrum.getDistance(entry);

        if (!parsed.limit || parsed.handles < 2) {
            throw new Error(
                "noUiSlider (" +
                VERSION +
                "): 'limit' option is only supported on linear sliders with 2 or more handles."
            );
        }
    }

    function testPadding(parsed, entry) {
        var index;

        if (!isNumeric(entry) && !Array.isArray(entry)) {
            throw new Error(
                "noUiSlider (" + VERSION + "): 'padding' option must be numeric or array of exactly 2 numbers."
            );
        }

        if (Array.isArray(entry) && !(entry.length === 2 || isNumeric(entry[0]) || isNumeric(entry[1]))) {
            throw new Error(
                "noUiSlider (" + VERSION + "): 'padding' option must be numeric or array of exactly 2 numbers."
            );
        }

        if (entry === 0) {
            return;
        }

        if (!Array.isArray(entry)) {
            entry = [entry, entry];
        }

        // 'getDistance' returns false for invalid values.
        parsed.padding = [parsed.spectrum.getDistance(entry[0]), parsed.spectrum.getDistance(entry[1])];

        for (index = 0; index < parsed.spectrum.xNumSteps.length - 1; index++) {
            // last "range" can't contain step size as it is purely an endpoint.
            if (parsed.padding[0][index] < 0 || parsed.padding[1][index] < 0) {
                throw new Error("noUiSlider (" + VERSION + "): 'padding' option must be a positive number(s).");
            }
        }

        var totalPadding = entry[0] + entry[1];
        var firstValue = parsed.spectrum.xVal[0];
        var lastValue = parsed.spectrum.xVal[parsed.spectrum.xVal.length - 1];

        if (totalPadding / (lastValue - firstValue) > 1) {
            throw new Error("noUiSlider (" + VERSION + "): 'padding' option must not exceed 100% of the range.");
        }
    }

    function testDirection(parsed, entry) {
        // Set direction as a numerical value for easy parsing.
        // Invert connection for RTL sliders, so that the proper
        // handles get the connect/background classes.
        switch (entry) {
            case "ltr":
                parsed.dir = 0;
                break;
            case "rtl":
                parsed.dir = 1;
                break;
            default:
                throw new Error("noUiSlider (" + VERSION + "): 'direction' option was not recognized.");
        }
    }

    function testBehaviour(parsed, entry) {
        // Make sure the input is a string.
        if (typeof entry !== "string") {
            throw new Error("noUiSlider (" + VERSION + "): 'behaviour' must be a string containing options.");
        }

        // Check if the string contains any keywords.
        // None are required.
        var tap = entry.indexOf("tap") >= 0;
        var drag = entry.indexOf("drag") >= 0;
        var fixed = entry.indexOf("fixed") >= 0;
        var snap = entry.indexOf("snap") >= 0;
        var hover = entry.indexOf("hover") >= 0;
        var unconstrained = entry.indexOf("unconstrained") >= 0;

        if (fixed) {
            if (parsed.handles !== 2) {
                throw new Error("noUiSlider (" + VERSION + "): 'fixed' behaviour must be used with 2 handles");
            }

            // Use margin to enforce fixed state
            testMargin(parsed, parsed.start[1] - parsed.start[0]);
        }

        if (unconstrained && (parsed.margin || parsed.limit)) {
            throw new Error(
                "noUiSlider (" + VERSION + "): 'unconstrained' behaviour cannot be used with margin or limit"
            );
        }

        parsed.events = {
            tap: tap || snap,
            drag: drag,
            fixed: fixed,
            snap: snap,
            hover: hover,
            unconstrained: unconstrained
        };
    }

    function testTooltips(parsed, entry) {
        if (entry === false) {
            return;
        }

        if (entry === true) {
            parsed.tooltips = [];

            for (var i = 0; i < parsed.handles; i++) {
                parsed.tooltips.push(true);
            }
        } else {
            parsed.tooltips = asArray(entry);

            if (parsed.tooltips.length !== parsed.handles) {
                throw new Error("noUiSlider (" + VERSION + "): must pass a formatter for all handles.");
            }

            parsed.tooltips.forEach(function (formatter) {
                if (
                    typeof formatter !== "boolean" &&
                    (typeof formatter !== "object" || typeof formatter.to !== "function")
                ) {
                    throw new Error("noUiSlider (" + VERSION + "): 'tooltips' must be passed a formatter or 'false'.");
                }
            });
        }
    }

    function testAriaFormat(parsed, entry) {
        parsed.ariaFormat = entry;
        validateFormat(entry);
    }

    function testFormat(parsed, entry) {
        parsed.format = entry;
        validateFormat(entry);
    }

    function testKeyboardSupport(parsed, entry) {
        parsed.keyboardSupport = entry;

        if (typeof entry !== "boolean") {
            throw new Error("noUiSlider (" + VERSION + "): 'keyboardSupport' option must be a boolean.");
        }
    }

    function testDocumentElement(parsed, entry) {
        // This is an advanced option. Passed values are used without validation.
        parsed.documentElement = entry;
    }

    function testCssPrefix(parsed, entry) {
        if (typeof entry !== "string" && entry !== false) {
            throw new Error("noUiSlider (" + VERSION + "): 'cssPrefix' must be a string or `false`.");
        }

        parsed.cssPrefix = entry;
    }

    function testCssClasses(parsed, entry) {
        if (typeof entry !== "object") {
            throw new Error("noUiSlider (" + VERSION + "): 'cssClasses' must be an object.");
        }

        if (typeof parsed.cssPrefix === "string") {
            parsed.cssClasses = {};

            for (var key in entry) {
                if (!entry.hasOwnProperty(key)) {
                    continue;
                }

                parsed.cssClasses[key] = parsed.cssPrefix + entry[key];
            }
        } else {
            parsed.cssClasses = entry;
        }
    }

    // Test all developer settings and parse to assumption-safe values.
    function testOptions(options) {
        // To prove a fix for #537, freeze options here.
        // If the object is modified, an error will be thrown.
        // Object.freeze(options);

        var parsed = {
            margin: 0,
            limit: 0,
            padding: 0,
            animate: true,
            animationDuration: 300,
            ariaFormat: defaultFormatter,
            format: defaultFormatter
        };

        // Tests are executed in the order they are presented here.
        var tests = {
            step: {r: false, t: testStep},
            keyboardPageMultiplier: {r: false, t: testKeyboardPageMultiplier},
            keyboardDefaultStep: {r: false, t: testKeyboardDefaultStep},
            start: {r: true, t: testStart},
            connect: {r: true, t: testConnect},
            direction: {r: true, t: testDirection},
            snap: {r: false, t: testSnap},
            animate: {r: false, t: testAnimate},
            animationDuration: {r: false, t: testAnimationDuration},
            range: {r: true, t: testRange},
            orientation: {r: false, t: testOrientation},
            margin: {r: false, t: testMargin},
            limit: {r: false, t: testLimit},
            padding: {r: false, t: testPadding},
            behaviour: {r: true, t: testBehaviour},
            ariaFormat: {r: false, t: testAriaFormat},
            format: {r: false, t: testFormat},
            tooltips: {r: false, t: testTooltips},
            keyboardSupport: {r: true, t: testKeyboardSupport},
            documentElement: {r: false, t: testDocumentElement},
            cssPrefix: {r: true, t: testCssPrefix},
            cssClasses: {r: true, t: testCssClasses}
        };

        var defaults = {
            connect: false,
            direction: "ltr",
            behaviour: "tap",
            orientation: "horizontal",
            keyboardSupport: true,
            cssPrefix: "noUi-",
            cssClasses: cssClasses,
            keyboardPageMultiplier: 5,
            keyboardDefaultStep: 10
        };

        // AriaFormat defaults to regular format, if any.
        if (options.format && !options.ariaFormat) {
            options.ariaFormat = options.format;
        }

        // Run all options through a testing mechanism to ensure correct
        // input. It should be noted that options might get modified to
        // be handled properly. E.g. wrapping integers in arrays.
        Object.keys(tests).forEach(function (name) {
            // If the option isn't set, but it is required, throw an error.
            if (!isSet(options[name]) && defaults[name] === undefined) {
                if (tests[name].r) {
                    throw new Error("noUiSlider (" + VERSION + "): '" + name + "' is required.");
                }

                return true;
            }

            tests[name].t(parsed, !isSet(options[name]) ? defaults[name] : options[name]);
        });

        // Forward pips options
        parsed.pips = options.pips;

        // All recent browsers accept unprefixed transform.
        // We need -ms- for IE9 and -webkit- for older Android;
        // Assume use of -webkit- if unprefixed and -ms- are not supported.
        // https://caniuse.com/#feat=transforms2d
        var d = document.createElement("div");
        var msPrefix = d.style.msTransform !== undefined;
        var noPrefix = d.style.transform !== undefined;

        parsed.transformRule = noPrefix ? "transform" : msPrefix ? "msTransform" : "webkitTransform";

        // Pips don't move, so we can place them using left/top.
        var styles = [["left", "top"], ["right", "bottom"]];

        parsed.style = styles[parsed.dir][parsed.ort];

        return parsed;
    }

    //endregion

    function scope(target, options, originalOptions) {
        var actions = getActions();
        var supportsTouchActionNone = getSupportsTouchActionNone();
        var supportsPassive = supportsTouchActionNone && getSupportsPassive();

        // All variables local to 'scope' are prefixed with 'scope_'

        // Slider DOM Nodes
        var scope_Target = target;
        var scope_Base;
        var scope_Handles;
        var scope_Connects;
        var scope_Pips;
        var scope_Tooltips;

        // Slider state values
        var scope_Spectrum = options.spectrum;
        var scope_Values = [];
        var scope_Locations = [];
        var scope_HandleNumbers = [];
        var scope_ActiveHandlesCount = 0;
        var scope_Events = {};

        // Exposed API
        var scope_Self;

        // Document Nodes
        var scope_Document = target.ownerDocument;
        var scope_DocumentElement = options.documentElement || scope_Document.documentElement;
        var scope_Body = scope_Document.body;

        // Pips constants
        var PIPS_NONE = -1;
        var PIPS_NO_VALUE = 0;
        var PIPS_LARGE_VALUE = 1;
        var PIPS_SMALL_VALUE = 2;

        // For horizontal sliders in standard ltr documents,
        // make .noUi-origin overflow to the left so the document doesn't scroll.
        var scope_DirOffset = scope_Document.dir === "rtl" || options.ort === 1 ? 0 : 100;

        // Creates a node, adds it to target, returns the new node.
        function addNodeTo(addTarget, className) {
            var div = scope_Document.createElement("div");

            if (className) {
                addClass(div, className);
            }

            addTarget.appendChild(div);

            return div;
        }

        // Append a origin to the base
        function addOrigin(base, handleNumber) {
            var origin = addNodeTo(base, options.cssClasses.origin);
            var handle = addNodeTo(origin, options.cssClasses.handle);

            addNodeTo(handle, options.cssClasses.touchArea);

            handle.setAttribute("data-handle", handleNumber);

            if (options.keyboardSupport) {
                // https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex
                // 0 = focusable and reachable
                handle.setAttribute("tabindex", "0");
                handle.addEventListener("keydown", function (event) {
                    return eventKeydown(event, handleNumber);
                });
            }

            handle.setAttribute("role", "slider");
            handle.setAttribute("aria-orientation", options.ort ? "vertical" : "horizontal");

            if (handleNumber === 0) {
                addClass(handle, options.cssClasses.handleLower);
            } else if (handleNumber === options.handles - 1) {
                addClass(handle, options.cssClasses.handleUpper);
            }

            return origin;
        }

        // Insert nodes for connect elements
        function addConnect(base, add) {
            if (!add) {
                return false;
            }

            return addNodeTo(base, options.cssClasses.connect);
        }

        // Add handles to the slider base.
        function addElements(connectOptions, base) {
            var connectBase = addNodeTo(base, options.cssClasses.connects);

            scope_Handles = [];
            scope_Connects = [];

            scope_Connects.push(addConnect(connectBase, connectOptions[0]));

            // [::::O====O====O====]
            // connectOptions = [0, 1, 1, 1]

            for (var i = 0; i < options.handles; i++) {
                // Keep a list of all added handles.
                scope_Handles.push(addOrigin(base, i));
                scope_HandleNumbers[i] = i;
                scope_Connects.push(addConnect(connectBase, connectOptions[i + 1]));
            }
        }

        // Initialize a single slider.
        function addSlider(addTarget) {
            // Apply classes and data to the target.
            addClass(addTarget, options.cssClasses.target);

            if (options.dir === 0) {
                addClass(addTarget, options.cssClasses.ltr);
            } else {
                addClass(addTarget, options.cssClasses.rtl);
            }

            if (options.ort === 0) {
                addClass(addTarget, options.cssClasses.horizontal);
            } else {
                addClass(addTarget, options.cssClasses.vertical);
            }

            var textDirection = getComputedStyle(addTarget).direction;

            if (textDirection === "rtl") {
                addClass(addTarget, options.cssClasses.textDirectionRtl);
            } else {
                addClass(addTarget, options.cssClasses.textDirectionLtr);
            }

            return addNodeTo(addTarget, options.cssClasses.base);
        }

        function addTooltip(handle, handleNumber) {
            if (!options.tooltips[handleNumber]) {
                return false;
            }

            return addNodeTo(handle.firstChild, options.cssClasses.tooltip);
        }

        function isSliderDisabled() {
            return scope_Target.hasAttribute("disabled");
        }

        // Disable the slider dragging if any handle is disabled
        function isHandleDisabled(handleNumber) {
            var handleOrigin = scope_Handles[handleNumber];
            return handleOrigin.hasAttribute("disabled");
        }

        function removeTooltips() {
            if (scope_Tooltips) {
                removeEvent("update.tooltips");
                scope_Tooltips.forEach(function (tooltip) {
                    if (tooltip) {
                        removeElement(tooltip);
                    }
                });
                scope_Tooltips = null;
            }
        }

        // The tooltips option is a shorthand for using the 'update' event.
        function tooltips() {
            removeTooltips();

            // Tooltips are added with options.tooltips in original order.
            scope_Tooltips = scope_Handles.map(addTooltip);

            bindEvent("update.tooltips", function (values, handleNumber, unencoded) {
                if (!scope_Tooltips[handleNumber]) {
                    return;
                }

                var formattedValue = values[handleNumber];

                if (options.tooltips[handleNumber] !== true) {
                    formattedValue = options.tooltips[handleNumber].to(unencoded[handleNumber]);
                }

                scope_Tooltips[handleNumber].innerHTML = formattedValue;
            });
        }

        function aria() {
            bindEvent("update", function (values, handleNumber, unencoded, tap, positions) {
                // Update Aria Values for all handles, as a change in one changes min and max values for the next.
                scope_HandleNumbers.forEach(function (index) {
                    var handle = scope_Handles[index];

                    var min = checkHandlePosition(scope_Locations, index, 0, true, true, true);
                    var max = checkHandlePosition(scope_Locations, index, 100, true, true, true);

                    var now = positions[index];

                    // Formatted value for display
                    var text = options.ariaFormat.to(unencoded[index]);

                    // Map to slider range values
                    min = scope_Spectrum.fromStepping(min).toFixed(1);
                    max = scope_Spectrum.fromStepping(max).toFixed(1);
                    now = scope_Spectrum.fromStepping(now).toFixed(1);

                    handle.children[0].setAttribute("aria-valuemin", min);
                    handle.children[0].setAttribute("aria-valuemax", max);
                    handle.children[0].setAttribute("aria-valuenow", now);
                    handle.children[0].setAttribute("aria-valuetext", text);
                });
            });
        }

        function getGroup(mode, values, stepped) {
            // Use the range.
            if (mode === "range" || mode === "steps") {
                return scope_Spectrum.xVal;
            }

            if (mode === "count") {
                if (values < 2) {
                    throw new Error("noUiSlider (" + VERSION + "): 'values' (>= 2) required for mode 'count'.");
                }

                // Divide 0 - 100 in 'count' parts.
                var interval = values - 1;
                var spread = 100 / interval;

                values = [];

                // List these parts and have them handled as 'positions'.
                while (interval--) {
                    values[interval] = interval * spread;
                }

                values.push(100);

                mode = "positions";
            }

            if (mode === "positions") {
                // Map all percentages to on-range values.
                return values.map(function (value) {
                    return scope_Spectrum.fromStepping(stepped ? scope_Spectrum.getStep(value) : value);
                });
            }

            if (mode === "values") {
                // If the value must be stepped, it needs to be converted to a percentage first.
                if (stepped) {
                    return values.map(function (value) {
                        // Convert to percentage, apply step, return to value.
                        return scope_Spectrum.fromStepping(scope_Spectrum.getStep(scope_Spectrum.toStepping(value)));
                    });
                }

                // Otherwise, we can simply use the values.
                return values;
            }
        }

        function generateSpread(density, mode, group) {
            function safeIncrement(value, increment) {
                // Avoid floating point variance by dropping the smallest decimal places.
                return (value + increment).toFixed(7) / 1;
            }

            var indexes = {};
            var firstInRange = scope_Spectrum.xVal[0];
            var lastInRange = scope_Spectrum.xVal[scope_Spectrum.xVal.length - 1];
            var ignoreFirst = false;
            var ignoreLast = false;
            var prevPct = 0;

            // Create a copy of the group, sort it and filter away all duplicates.
            group = unique(
                group.slice().sort(function (a, b) {
                    return a - b;
                })
            );

            // Make sure the range starts with the first element.
            if (group[0] !== firstInRange) {
                group.unshift(firstInRange);
                ignoreFirst = true;
            }

            // Likewise for the last one.
            if (group[group.length - 1] !== lastInRange) {
                group.push(lastInRange);
                ignoreLast = true;
            }

            group.forEach(function (current, index) {
                // Get the current step and the lower + upper positions.
                var step;
                var i;
                var q;
                var low = current;
                var high = group[index + 1];
                var newPct;
                var pctDifference;
                var pctPos;
                var type;
                var steps;
                var realSteps;
                var stepSize;
                var isSteps = mode === "steps";

                // When using 'steps' mode, use the provided steps.
                // Otherwise, we'll step on to the next subrange.
                if (isSteps) {
                    step = scope_Spectrum.xNumSteps[index];
                }

                // Default to a 'full' step.
                if (!step) {
                    step = high - low;
                }

                // Low can be 0, so test for false. If high is undefined,
                // we are at the last subrange. Index 0 is already handled.
                if (low === false || high === undefined) {
                    return;
                }

                // Make sure step isn't 0, which would cause an infinite loop (#654)
                step = Math.max(step, 0.0000001);

                // Find all steps in the subrange.
                for (i = low; i <= high; i = safeIncrement(i, step)) {
                    // Get the percentage value for the current step,
                    // calculate the size for the subrange.
                    newPct = scope_Spectrum.toStepping(i);
                    pctDifference = newPct - prevPct;

                    steps = pctDifference / density;
                    realSteps = Math.round(steps);

                    // This ratio represents the amount of percentage-space a point indicates.
                    // For a density 1 the points/percentage = 1. For density 2, that percentage needs to be re-divided.
                    // Round the percentage offset to an even number, then divide by two
                    // to spread the offset on both sides of the range.
                    stepSize = pctDifference / realSteps;

                    // Divide all points evenly, adding the correct number to this subrange.
                    // Run up to <= so that 100% gets a point, event if ignoreLast is set.
                    for (q = 1; q <= realSteps; q += 1) {
                        // The ratio between the rounded value and the actual size might be ~1% off.
                        // Correct the percentage offset by the number of points
                        // per subrange. density = 1 will result in 100 points on the
                        // full range, 2 for 50, 4 for 25, etc.
                        pctPos = prevPct + q * stepSize;
                        indexes[pctPos.toFixed(5)] = [scope_Spectrum.fromStepping(pctPos), 0];
                    }

                    // Determine the point type.
                    type = group.indexOf(i) > -1 ? PIPS_LARGE_VALUE : isSteps ? PIPS_SMALL_VALUE : PIPS_NO_VALUE;

                    // Enforce the 'ignoreFirst' option by overwriting the type for 0.
                    if (!index && ignoreFirst && i !== high) {
                        type = 0;
                    }

                    if (!(i === high && ignoreLast)) {
                        // Mark the 'type' of this point. 0 = plain, 1 = real value, 2 = step value.
                        indexes[newPct.toFixed(5)] = [i, type];
                    }

                    // Update the percentage count.
                    prevPct = newPct;
                }
            });

            return indexes;
        }

        function addMarking(spread, filterFunc, formatter) {
            var element = scope_Document.createElement("div");

            var valueSizeClasses = [];
            valueSizeClasses[PIPS_NO_VALUE] = options.cssClasses.valueNormal;
            valueSizeClasses[PIPS_LARGE_VALUE] = options.cssClasses.valueLarge;
            valueSizeClasses[PIPS_SMALL_VALUE] = options.cssClasses.valueSub;

            var markerSizeClasses = [];
            markerSizeClasses[PIPS_NO_VALUE] = options.cssClasses.markerNormal;
            markerSizeClasses[PIPS_LARGE_VALUE] = options.cssClasses.markerLarge;
            markerSizeClasses[PIPS_SMALL_VALUE] = options.cssClasses.markerSub;

            var valueOrientationClasses = [options.cssClasses.valueHorizontal, options.cssClasses.valueVertical];
            var markerOrientationClasses = [options.cssClasses.markerHorizontal, options.cssClasses.markerVertical];

            addClass(element, options.cssClasses.pips);
            addClass(element, options.ort === 0 ? options.cssClasses.pipsHorizontal : options.cssClasses.pipsVertical);

            function getClasses(type, source) {
                var a = source === options.cssClasses.value;
                var orientationClasses = a ? valueOrientationClasses : markerOrientationClasses;
                var sizeClasses = a ? valueSizeClasses : markerSizeClasses;

                return source + " " + orientationClasses[options.ort] + " " + sizeClasses[type];
            }

            function addSpread(offset, value, type) {
                // Apply the filter function, if it is set.
                type = filterFunc ? filterFunc(value, type) : type;

                if (type === PIPS_NONE) {
                    return;
                }

                // Add a marker for every point
                var node = addNodeTo(element, false);
                node.className = getClasses(type, options.cssClasses.marker);
                node.style[options.style] = offset + "%";

                // Values are only appended for points marked '1' or '2'.
                if (type > PIPS_NO_VALUE) {
                    node = addNodeTo(element, false);
                    node.className = getClasses(type, options.cssClasses.value);
                    node.setAttribute("data-value", value);
                    node.style[options.style] = offset + "%";
                    node.innerHTML = formatter.to(value);
                }
            }

            // Append all points.
            Object.keys(spread).forEach(function (offset) {
                addSpread(offset, spread[offset][0], spread[offset][1]);
            });

            return element;
        }

        function removePips() {
            if (scope_Pips) {
                removeElement(scope_Pips);
                scope_Pips = null;
            }
        }

        function pips(grid) {
            // Fix #669
            removePips();

            var mode = grid.mode;
            var density = grid.density || 1;
            var filter = grid.filter || false;
            var values = grid.values || false;
            var stepped = grid.stepped || false;
            var group = getGroup(mode, values, stepped);
            var spread = generateSpread(density, mode, group);
            var format = grid.format || {
                to: Math.round
            };

            scope_Pips = scope_Target.appendChild(addMarking(spread, filter, format));

            return scope_Pips;
        }

        // Shorthand for base dimensions.
        function baseSize() {
            var rect = scope_Base.getBoundingClientRect();
            var alt = "offset" + ["Width", "Height"][options.ort];
            return options.ort === 0 ? rect.width || scope_Base[alt] : rect.height || scope_Base[alt];
        }

        // Handler for attaching events trough a proxy.
        function attachEvent(events, element, callback, data) {
            // This function can be used to 'filter' events to the slider.
            // element is a node, not a nodeList

            var method = function (e) {
                e = fixEvent(e, data.pageOffset, data.target || element);

                // fixEvent returns false if this event has a different target
                // when handling (multi-) touch events;
                if (!e) {
                    return false;
                }

                // doNotReject is passed by all end events to make sure released touches
                // are not rejected, leaving the slider "stuck" to the cursor;
                if (isSliderDisabled() && !data.doNotReject) {
                    return false;
                }

                // Stop if an active 'tap' transition is taking place.
                if (hasClass(scope_Target, options.cssClasses.tap) && !data.doNotReject) {
                    return false;
                }

                // Ignore right or middle clicks on start #454
                if (events === actions.start && e.buttons !== undefined && e.buttons > 1) {
                    return false;
                }

                // Ignore right or middle clicks on start #454
                if (data.hover && e.buttons) {
                    return false;
                }

                // 'supportsPassive' is only true if a browser also supports touch-action: none in CSS.
                // iOS safari does not, so it doesn't get to benefit from passive scrolling. iOS does support
                // touch-action: manipulation, but that allows panning, which breaks
                // sliders after zooming/on non-responsive pages.
                // See: https://bugs.webkit.org/show_bug.cgi?id=133112
                if (!supportsPassive) {
                    e.preventDefault();
                }

                e.calcPoint = e.points[options.ort];

                // Call the event handler with the event [ and additional data ].
                callback(e, data);
            };

            var methods = [];

            // Bind a closure on the target for every event type.
            events.split(" ").forEach(function (eventName) {
                element.addEventListener(eventName, method, supportsPassive ? {passive: true} : false);
                methods.push([eventName, method]);
            });

            return methods;
        }

        // Provide a clean event with standardized offset values.
        function fixEvent(e, pageOffset, eventTarget) {
            // Filter the event to register the type, which can be
            // touch, mouse or pointer. Offset changes need to be
            // made on an event specific basis.
            var touch = e.type.indexOf("touch") === 0;
            var mouse = e.type.indexOf("mouse") === 0;
            var pointer = e.type.indexOf("pointer") === 0;

            var x;
            var y;

            // IE10 implemented pointer events with a prefix;
            if (e.type.indexOf("MSPointer") === 0) {
                pointer = true;
            }

            // The only thing one handle should be concerned about is the touches that originated on top of it.
            if (touch) {
                // Returns true if a touch originated on the target.
                var isTouchOnTarget = function (checkTouch) {
                    return (
                        checkTouch.target === eventTarget ||
                        eventTarget.contains(checkTouch.target) ||
                        (checkTouch.target.shadowRoot && checkTouch.target.shadowRoot.contains(eventTarget))
                    );
                };

                // In the case of touchstart events, we need to make sure there is still no more than one
                // touch on the target so we look amongst all touches.
                if (e.type === "touchstart") {
                    var targetTouches = Array.prototype.filter.call(e.touches, isTouchOnTarget);

                    // Do not support more than one touch per handle.
                    if (targetTouches.length > 1) {
                        return false;
                    }

                    x = targetTouches[0].pageX;
                    y = targetTouches[0].pageY;
                } else {
                    // In the other cases, find on changedTouches is enough.
                    var targetTouch = Array.prototype.find.call(e.changedTouches, isTouchOnTarget);

                    // Cancel if the target touch has not moved.
                    if (!targetTouch) {
                        return false;
                    }

                    x = targetTouch.pageX;
                    y = targetTouch.pageY;
                }
            }

            pageOffset = pageOffset || getPageOffset(scope_Document);

            if (mouse || pointer) {
                x = e.clientX + pageOffset.x;
                y = e.clientY + pageOffset.y;
            }

            e.pageOffset = pageOffset;
            e.points = [x, y];
            e.cursor = mouse || pointer; // Fix #435

            return e;
        }

        // Translate a coordinate in the document to a percentage on the slider
        function calcPointToPercentage(calcPoint) {
            var location = calcPoint - offset(scope_Base, options.ort);
            var proposal = (location * 100) / baseSize();

            // Clamp proposal between 0% and 100%
            // Out-of-bound coordinates may occur when .noUi-base pseudo-elements
            // are used (e.g. contained handles feature)
            proposal = limit(proposal);

            return options.dir ? 100 - proposal : proposal;
        }

        // Find handle closest to a certain percentage on the slider
        function getClosestHandle(clickedPosition) {
            var smallestDifference = 100;
            var handleNumber = false;

            scope_Handles.forEach(function (handle, index) {
                // Disabled handles are ignored
                if (isHandleDisabled(index)) {
                    return;
                }

                var handlePosition = scope_Locations[index];
                var differenceWithThisHandle = Math.abs(handlePosition - clickedPosition);

                // Initial state
                var clickAtEdge = differenceWithThisHandle === 100 && smallestDifference === 100;

                // Difference with this handle is smaller than the previously checked handle
                var isCloser = differenceWithThisHandle < smallestDifference;
                var isCloserAfter = differenceWithThisHandle <= smallestDifference && clickedPosition > handlePosition;

                if (isCloser || isCloserAfter || clickAtEdge) {
                    handleNumber = index;
                    smallestDifference = differenceWithThisHandle;
                }
            });

            return handleNumber;
        }

        // Fire 'end' when a mouse or pen leaves the document.
        function documentLeave(event, data) {
            if (event.type === "mouseout" && event.target.nodeName === "HTML" && event.relatedTarget === null) {
                eventEnd(event, data);
            }
        }

        // Handle movement on document for handle and range drag.
        function eventMove(event, data) {
            // Fix #498
            // Check value of .buttons in 'start' to work around a bug in IE10 mobile (data.buttonsProperty).
            // https://connect.microsoft.com/IE/feedback/details/927005/mobile-ie10-windows-phone-buttons-property-of-pointermove-event-always-zero
            // IE9 has .buttons and .which zero on mousemove.
            // Firefox breaks the spec MDN defines.
            if (navigator.appVersion.indexOf("MSIE 9") === -1 && event.buttons === 0 && data.buttonsProperty !== 0) {
                return eventEnd(event, data);
            }

            // Check if we are moving up or down
            var movement = (options.dir ? -1 : 1) * (event.calcPoint - data.startCalcPoint);

            // Convert the movement into a percentage of the slider width/height
            var proposal = (movement * 100) / data.baseSize;

            moveHandles(movement > 0, proposal, data.locations, data.handleNumbers);
        }

        // Unbind move events on document, call callbacks.
        function eventEnd(event, data) {
            // The handle is no longer active, so remove the class.
            if (data.handle) {
                removeClass(data.handle, options.cssClasses.active);
                scope_ActiveHandlesCount -= 1;
            }

            // Unbind the move and end events, which are added on 'start'.
            data.listeners.forEach(function (c) {
                scope_DocumentElement.removeEventListener(c[0], c[1]);
            });

            if (scope_ActiveHandlesCount === 0) {
                // Remove dragging class.
                removeClass(scope_Target, options.cssClasses.drag);
                setZindex();

                // Remove cursor styles and text-selection events bound to the body.
                if (event.cursor) {
                    scope_Body.style.cursor = "";
                    scope_Body.removeEventListener("selectstart", preventDefault);
                }
            }

            data.handleNumbers.forEach(function (handleNumber) {
                fireEvent("change", handleNumber);
                fireEvent("set", handleNumber);
                fireEvent("end", handleNumber);
            });
        }

        // Bind move events on document.
        function eventStart(event, data) {
            // Ignore event if any handle is disabled
            if (data.handleNumbers.some(isHandleDisabled)) {
                return false;
            }

            var handle;

            if (data.handleNumbers.length === 1) {
                var handleOrigin = scope_Handles[data.handleNumbers[0]];

                handle = handleOrigin.children[0];
                scope_ActiveHandlesCount += 1;

                // Mark the handle as 'active' so it can be styled.
                addClass(handle, options.cssClasses.active);
            }

            // A drag should never propagate up to the 'tap' event.
            event.stopPropagation();

            // Record the event listeners.
            var listeners = [];

            // Attach the move and end events.
            var moveEvent = attachEvent(actions.move, scope_DocumentElement, eventMove, {
                // The event target has changed so we need to propagate the original one so that we keep
                // relying on it to extract target touches.
                target: event.target,
                handle: handle,
                listeners: listeners,
                startCalcPoint: event.calcPoint,
                baseSize: baseSize(),
                pageOffset: event.pageOffset,
                handleNumbers: data.handleNumbers,
                buttonsProperty: event.buttons,
                locations: scope_Locations.slice()
            });

            var endEvent = attachEvent(actions.end, scope_DocumentElement, eventEnd, {
                target: event.target,
                handle: handle,
                listeners: listeners,
                doNotReject: true,
                handleNumbers: data.handleNumbers
            });

            var outEvent = attachEvent("mouseout", scope_DocumentElement, documentLeave, {
                target: event.target,
                handle: handle,
                listeners: listeners,
                doNotReject: true,
                handleNumbers: data.handleNumbers
            });

            // We want to make sure we pushed the listeners in the listener list rather than creating
            // a new one as it has already been passed to the event handlers.
            listeners.push.apply(listeners, moveEvent.concat(endEvent, outEvent));

            // Text selection isn't an issue on touch devices,
            // so adding cursor styles can be skipped.
            if (event.cursor) {
                // Prevent the 'I' cursor and extend the range-drag cursor.
                scope_Body.style.cursor = getComputedStyle(event.target).cursor;

                // Mark the target with a dragging state.
                if (scope_Handles.length > 1) {
                    addClass(scope_Target, options.cssClasses.drag);
                }

                // Prevent text selection when dragging the handles.
                // In noUiSlider <= 9.2.0, this was handled by calling preventDefault on mouse/touch start/move,
                // which is scroll blocking. The selectstart event is supported by FireFox starting from version 52,
                // meaning the only holdout is iOS Safari. This doesn't matter: text selection isn't triggered there.
                // The 'cursor' flag is false.
                // See: http://caniuse.com/#search=selectstart
                scope_Body.addEventListener("selectstart", preventDefault, false);
            }

            data.handleNumbers.forEach(function (handleNumber) {
                fireEvent("start", handleNumber);
            });
        }

        // Move closest handle to tapped location.
        function eventTap(event) {
            // Erroneous events seem to be passed in occasionally on iOS/iPadOS after user finishes interacting with
            // the slider. They appear to be of type MouseEvent, yet they don't have usual properties set. Ignore tap
            // events that have no touches or buttons associated with them.
            if (!event.buttons && !event.touches) {
                return false;
            }

            // The tap event shouldn't propagate up
            event.stopPropagation();

            var proposal = calcPointToPercentage(event.calcPoint);
            var handleNumber = getClosestHandle(proposal);

            // Tackle the case that all handles are 'disabled'.
            if (handleNumber === false) {
                return false;
            }

            // Flag the slider as it is now in a transitional state.
            // Transition takes a configurable amount of ms (default 300). Re-enable the slider after that.
            if (!options.events.snap) {
                addClassFor(scope_Target, options.cssClasses.tap, options.animationDuration);
            }

            setHandle(handleNumber, proposal, true, true);

            setZindex();

            fireEvent("slide", handleNumber, true);
            fireEvent("update", handleNumber, true);
            fireEvent("change", handleNumber, true);
            fireEvent("set", handleNumber, true);

            if (options.events.snap) {
                eventStart(event, {handleNumbers: [handleNumber]});
            }
        }

        // Fires a 'hover' event for a hovered mouse/pen position.
        function eventHover(event) {
            var proposal = calcPointToPercentage(event.calcPoint);

            var to = scope_Spectrum.getStep(proposal);
            var value = scope_Spectrum.fromStepping(to);

            Object.keys(scope_Events).forEach(function (targetEvent) {
                if ("hover" === targetEvent.split(".")[0]) {
                    scope_Events[targetEvent].forEach(function (callback) {
                        callback.call(scope_Self, value);
                    });
                }
            });
        }

        // Handles keydown on focused handles
        // Don't move the document when pressing arrow keys on focused handles
        function eventKeydown(event, handleNumber) {
            if (isSliderDisabled() || isHandleDisabled(handleNumber)) {
                return false;
            }

            var horizontalKeys = ["Left", "Right"];
            var verticalKeys = ["Down", "Up"];
            var largeStepKeys = ["PageDown", "PageUp"];
            var edgeKeys = ["Home", "End"];

            if (options.dir && !options.ort) {
                // On an right-to-left slider, the left and right keys act inverted
                horizontalKeys.reverse();
            } else if (options.ort && !options.dir) {
                // On a top-to-bottom slider, the up and down keys act inverted
                verticalKeys.reverse();
                largeStepKeys.reverse();
            }

            // Strip "Arrow" for IE compatibility. https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key
            var key = event.key.replace("Arrow", "");

            var isLargeDown = key === largeStepKeys[0];
            var isLargeUp = key === largeStepKeys[1];
            var isDown = key === verticalKeys[0] || key === horizontalKeys[0] || isLargeDown;
            var isUp = key === verticalKeys[1] || key === horizontalKeys[1] || isLargeUp;
            var isMin = key === edgeKeys[0];
            var isMax = key === edgeKeys[1];

            if (!isDown && !isUp && !isMin && !isMax) {
                return true;
            }

            event.preventDefault();

            var to;

            if (isUp || isDown) {
                var multiplier = options.keyboardPageMultiplier;
                var direction = isDown ? 0 : 1;
                var steps = getNextStepsForHandle(handleNumber);
                var step = steps[direction];

                // At the edge of a slider, do nothing
                if (step === null) {
                    return false;
                }

                // No step set, use the default of 10% of the sub-range
                if (step === false) {
                    step = scope_Spectrum.getDefaultStep(
                        scope_Locations[handleNumber],
                        isDown,
                        options.keyboardDefaultStep
                    );
                }

                if (isLargeUp || isLargeDown) {
                    step *= multiplier;
                }

                // Step over zero-length ranges (#948);
                step = Math.max(step, 0.0000001);

                // Decrement for down steps
                step = (isDown ? -1 : 1) * step;

                to = scope_Values[handleNumber] + step;
            } else if (isMax) {
                // End key
                to = options.spectrum.xVal[options.spectrum.xVal.length - 1];
            } else {
                // Home key
                to = options.spectrum.xVal[0];
            }

            setHandle(handleNumber, scope_Spectrum.toStepping(to), true, true);

            fireEvent("slide", handleNumber);
            fireEvent("update", handleNumber);
            fireEvent("change", handleNumber);
            fireEvent("set", handleNumber);

            return false;
        }

        // Attach events to several slider parts.
        function bindSliderEvents(behaviour) {
            // Attach the standard drag event to the handles.
            if (!behaviour.fixed) {
                scope_Handles.forEach(function (handle, index) {
                    // These events are only bound to the visual handle
                    // element, not the 'real' origin element.
                    attachEvent(actions.start, handle.children[0], eventStart, {
                        handleNumbers: [index]
                    });
                });
            }

            // Attach the tap event to the slider base.
            if (behaviour.tap) {
                attachEvent(actions.start, scope_Base, eventTap, {});
            }

            // Fire hover events
            if (behaviour.hover) {
                attachEvent(actions.move, scope_Base, eventHover, {
                    hover: true
                });
            }

            // Make the range draggable.
            if (behaviour.drag) {
                scope_Connects.forEach(function (connect, index) {
                    if (connect === false || index === 0 || index === scope_Connects.length - 1) {
                        return;
                    }

                    var handleBefore = scope_Handles[index - 1];
                    var handleAfter = scope_Handles[index];
                    var eventHolders = [connect];

                    addClass(connect, options.cssClasses.draggable);

                    // When the range is fixed, the entire range can
                    // be dragged by the handles. The handle in the first
                    // origin will propagate the start event upward,
                    // but it needs to be bound manually on the other.
                    if (behaviour.fixed) {
                        eventHolders.push(handleBefore.children[0]);
                        eventHolders.push(handleAfter.children[0]);
                    }

                    eventHolders.forEach(function (eventHolder) {
                        attachEvent(actions.start, eventHolder, eventStart, {
                            handles: [handleBefore, handleAfter],
                            handleNumbers: [index - 1, index]
                        });
                    });
                });
            }
        }

        // Attach an event to this slider, possibly including a namespace
        function bindEvent(namespacedEvent, callback) {
            scope_Events[namespacedEvent] = scope_Events[namespacedEvent] || [];
            scope_Events[namespacedEvent].push(callback);

            // If the event bound is 'update,' fire it immediately for all handles.
            if (namespacedEvent.split(".")[0] === "update") {
                scope_Handles.forEach(function (a, index) {
                    fireEvent("update", index);
                });
            }
        }

        // Undo attachment of event
        function removeEvent(namespacedEvent) {
            var event = namespacedEvent && namespacedEvent.split(".")[0];
            var namespace = event && namespacedEvent.substring(event.length);

            Object.keys(scope_Events).forEach(function (bind) {
                var tEvent = bind.split(".")[0];
                var tNamespace = bind.substring(tEvent.length);

                if ((!event || event === tEvent) && (!namespace || namespace === tNamespace)) {
                    delete scope_Events[bind];
                }
            });
        }

        // External event handling
        function fireEvent(eventName, handleNumber, tap) {
            Object.keys(scope_Events).forEach(function (targetEvent) {
                var eventType = targetEvent.split(".")[0];

                if (eventName === eventType) {
                    scope_Events[targetEvent].forEach(function (callback) {
                        callback.call(
                            // Use the slider public API as the scope ('this')
                            scope_Self,
                            // Return values as array, so arg_1[arg_2] is always valid.
                            scope_Values.map(options.format.to),
                            // Handle index, 0 or 1
                            handleNumber,
                            // Un-formatted slider values
                            scope_Values.slice(),
                            // Event is fired by tap, true or false
                            tap || false,
                            // Left offset of the handle, in relation to the slider
                            scope_Locations.slice(),
                            // add the slider public API to an accessible parameter when this is unavailable
                            scope_Self
                        );
                    });
                }
            });
        }

        // Split out the handle positioning logic so the Move event can use it, too
        function checkHandlePosition(reference, handleNumber, to, lookBackward, lookForward, getValue) {
            var distance;

            // For sliders with multiple handles, limit movement to the other handle.
            // Apply the margin option by adding it to the handle positions.
            if (scope_Handles.length > 1 && !options.events.unconstrained) {
                if (lookBackward && handleNumber > 0) {
                    distance = scope_Spectrum.getAbsoluteDistance(reference[handleNumber - 1], options.margin, 0);
                    to = Math.max(to, distance);
                }

                if (lookForward && handleNumber < scope_Handles.length - 1) {
                    distance = scope_Spectrum.getAbsoluteDistance(reference[handleNumber + 1], options.margin, 1);
                    to = Math.min(to, distance);
                }
            }

            // The limit option has the opposite effect, limiting handles to a
            // maximum distance from another. Limit must be > 0, as otherwise
            // handles would be unmovable.
            if (scope_Handles.length > 1 && options.limit) {
                if (lookBackward && handleNumber > 0) {
                    distance = scope_Spectrum.getAbsoluteDistance(reference[handleNumber - 1], options.limit, 0);
                    to = Math.min(to, distance);
                }

                if (lookForward && handleNumber < scope_Handles.length - 1) {
                    distance = scope_Spectrum.getAbsoluteDistance(reference[handleNumber + 1], options.limit, 1);
                    to = Math.max(to, distance);
                }
            }

            // The padding option keeps the handles a certain distance from the
            // edges of the slider. Padding must be > 0.
            if (options.padding) {
                if (handleNumber === 0) {
                    distance = scope_Spectrum.getAbsoluteDistance(0, options.padding[0], 0);
                    to = Math.max(to, distance);
                }

                if (handleNumber === scope_Handles.length - 1) {
                    distance = scope_Spectrum.getAbsoluteDistance(100, options.padding[1], 1);
                    to = Math.min(to, distance);
                }
            }

            to = scope_Spectrum.getStep(to);

            // Limit percentage to the 0 - 100 range
            to = limit(to);

            // Return false if handle can't move
            if (to === reference[handleNumber] && !getValue) {
                return false;
            }

            return to;
        }

        // Uses slider orientation to create CSS rules. a = base value;
        function inRuleOrder(v, a) {
            var o = options.ort;
            return (o ? a : v) + ", " + (o ? v : a);
        }

        // Moves handle(s) by a percentage
        // (bool, % to move, [% where handle started, ...], [index in scope_Handles, ...])
        function moveHandles(upward, proposal, locations, handleNumbers) {
            var proposals = locations.slice();

            var b = [!upward, upward];
            var f = [upward, !upward];

            // Copy handleNumbers so we don't change the dataset
            handleNumbers = handleNumbers.slice();

            // Check to see which handle is 'leading'.
            // If that one can't move the second can't either.
            if (upward) {
                handleNumbers.reverse();
            }

            // Step 1: get the maximum percentage that any of the handles can move
            if (handleNumbers.length > 1) {
                handleNumbers.forEach(function (handleNumber, o) {
                    var to = checkHandlePosition(
                        proposals,
                        handleNumber,
                        proposals[handleNumber] + proposal,
                        b[o],
                        f[o],
                        false
                    );

                    // Stop if one of the handles can't move.
                    if (to === false) {
                        proposal = 0;
                    } else {
                        proposal = to - proposals[handleNumber];
                        proposals[handleNumber] = to;
                    }
                });
            }

            // If using one handle, check backward AND forward
            else {
                b = f = [true];
            }

            var state = false;

            // Step 2: Try to set the handles with the found percentage
            handleNumbers.forEach(function (handleNumber, o) {
                state = setHandle(handleNumber, locations[handleNumber] + proposal, b[o], f[o]) || state;
            });

            // Step 3: If a handle moved, fire events
            if (state) {
                handleNumbers.forEach(function (handleNumber) {
                    fireEvent("update", handleNumber);
                    fireEvent("slide", handleNumber);
                });
            }
        }

        // Takes a base value and an offset. This offset is used for the connect bar size.
        // In the initial design for this feature, the origin element was 1% wide.
        // Unfortunately, a rounding bug in Chrome makes it impossible to implement this feature
        // in this manner: https://bugs.chromium.org/p/chromium/issues/detail?id=798223
        function transformDirection(a, b) {
            return options.dir ? 100 - a - b : a;
        }

        // Updates scope_Locations and scope_Values, updates visual state
        function updateHandlePosition(handleNumber, to) {
            // Update locations.
            scope_Locations[handleNumber] = to;

            // Convert the value to the slider stepping/range.
            scope_Values[handleNumber] = scope_Spectrum.fromStepping(to);

            var translation = 10 * (transformDirection(to, 0) - scope_DirOffset);
            var translateRule = "translate(" + inRuleOrder(translation + "%", "0") + ")";

            scope_Handles[handleNumber].style[options.transformRule] = translateRule;

            updateConnect(handleNumber);
            updateConnect(handleNumber + 1);
        }

        // Handles before the slider middle are stacked later = higher,
        // Handles after the middle later is lower
        // [[7] [8] .......... | .......... [5] [4]
        function setZindex() {
            scope_HandleNumbers.forEach(function (handleNumber) {
                var dir = scope_Locations[handleNumber] > 50 ? -1 : 1;
                var zIndex = 3 + (scope_Handles.length + dir * handleNumber);
                scope_Handles[handleNumber].style.zIndex = zIndex;
            });
        }

        // Test suggested values and apply margin, step.
        function setHandle(handleNumber, to, lookBackward, lookForward) {
            to = checkHandlePosition(scope_Locations, handleNumber, to, lookBackward, lookForward, false);

            if (to === false) {
                return false;
            }

            updateHandlePosition(handleNumber, to);

            return true;
        }

        // Updates style attribute for connect nodes
        function updateConnect(index) {
            // Skip connects set to false
            if (!scope_Connects[index]) {
                return;
            }

            var l = 0;
            var h = 100;

            if (index !== 0) {
                l = scope_Locations[index - 1];
            }

            if (index !== scope_Connects.length - 1) {
                h = scope_Locations[index];
            }

            // We use two rules:
            // 'translate' to change the left/top offset;
            // 'scale' to change the width of the element;
            // As the element has a width of 100%, a translation of 100% is equal to 100% of the parent (.noUi-base)
            var connectWidth = h - l;
            var translateRule = "translate(" + inRuleOrder(transformDirection(l, connectWidth) + "%", "0") + ")";
            var scaleRule = "scale(" + inRuleOrder(connectWidth / 100, "1") + ")";

            scope_Connects[index].style[options.transformRule] = translateRule + " " + scaleRule;
        }

        // Parses value passed to .set method. Returns current value if not parse-able.
        function resolveToValue(to, handleNumber) {
            // Setting with null indicates an 'ignore'.
            // Inputting 'false' is invalid.
            if (to === null || to === false || to === undefined) {
                return scope_Locations[handleNumber];
            }

            // If a formatted number was passed, attempt to decode it.
            if (typeof to === "number") {
                to = String(to);
            }

            to = options.format.from(to);
            to = scope_Spectrum.toStepping(to);

            // If parsing the number failed, use the current value.
            if (to === false || isNaN(to)) {
                return scope_Locations[handleNumber];
            }

            return to;
        }

        // Set the slider value.
        function valueSet(input, fireSetEvent) {
            var values = asArray(input);
            var isInit = scope_Locations[0] === undefined;

            // Event fires by default
            fireSetEvent = fireSetEvent === undefined ? true : !!fireSetEvent;

            // Animation is optional.
            // Make sure the initial values were set before using animated placement.
            if (options.animate && !isInit) {
                addClassFor(scope_Target, options.cssClasses.tap, options.animationDuration);
            }

            // First pass, without lookAhead but with lookBackward. Values are set from left to right.
            scope_HandleNumbers.forEach(function (handleNumber) {
                setHandle(handleNumber, resolveToValue(values[handleNumber], handleNumber), true, false);
            });

            var i = scope_HandleNumbers.length === 1 ? 0 : 1;

            // Secondary passes. Now that all base values are set, apply constraints.
            // Iterate all handles to ensure constraints are applied for the entire slider (Issue #1009)
            for (; i < scope_HandleNumbers.length; ++i) {
                scope_HandleNumbers.forEach(function (handleNumber) {
                    setHandle(handleNumber, scope_Locations[handleNumber], true, true);
                });
            }

            setZindex();

            scope_HandleNumbers.forEach(function (handleNumber) {
                fireEvent("update", handleNumber);

                // Fire the event only for handles that received a new value, as per #579
                if (values[handleNumber] !== null && fireSetEvent) {
                    fireEvent("set", handleNumber);
                }
            });
        }

        // Reset slider to initial values
        function valueReset(fireSetEvent) {
            valueSet(options.start, fireSetEvent);
        }

        // Set value for a single handle
        function valueSetHandle(handleNumber, value, fireSetEvent) {
            // Ensure numeric input
            handleNumber = Number(handleNumber);

            if (!(handleNumber >= 0 && handleNumber < scope_HandleNumbers.length)) {
                throw new Error("noUiSlider (" + VERSION + "): invalid handle number, got: " + handleNumber);
            }

            // Look both backward and forward, since we don't want this handle to "push" other handles (#960);
            setHandle(handleNumber, resolveToValue(value, handleNumber), true, true);

            fireEvent("update", handleNumber);

            if (fireSetEvent) {
                fireEvent("set", handleNumber);
            }
        }

        // Get the slider value.
        function valueGet() {
            var values = scope_Values.map(options.format.to);

            // If only one handle is used, return a single value.
            if (values.length === 1) {
                return values[0];
            }

            return values;
        }

        // Removes classes from the root and empties it.
        function destroy() {
            for (var key in options.cssClasses) {
                if (!options.cssClasses.hasOwnProperty(key)) {
                    continue;
                }
                removeClass(scope_Target, options.cssClasses[key]);
            }

            while (scope_Target.firstChild) {
                scope_Target.removeChild(scope_Target.firstChild);
            }

            delete scope_Target.noUiSlider;
        }

        function getNextStepsForHandle(handleNumber) {
            var location = scope_Locations[handleNumber];
            var nearbySteps = scope_Spectrum.getNearbySteps(location);
            var value = scope_Values[handleNumber];
            var increment = nearbySteps.thisStep.step;
            var decrement = null;

            // If snapped, directly use defined step value
            if (options.snap) {
                return [
                    value - nearbySteps.stepBefore.startValue || null,
                    nearbySteps.stepAfter.startValue - value || null
                ];
            }

            // If the next value in this step moves into the next step,
            // the increment is the start of the next step - the current value
            if (increment !== false) {
                if (value + increment > nearbySteps.stepAfter.startValue) {
                    increment = nearbySteps.stepAfter.startValue - value;
                }
            }

            // If the value is beyond the starting point
            if (value > nearbySteps.thisStep.startValue) {
                decrement = nearbySteps.thisStep.step;
            } else if (nearbySteps.stepBefore.step === false) {
                decrement = false;
            }

            // If a handle is at the start of a step, it always steps back into the previous step first
            else {
                decrement = value - nearbySteps.stepBefore.highestStep;
            }

            // Now, if at the slider edges, there is no in/decrement
            if (location === 100) {
                increment = null;
            } else if (location === 0) {
                decrement = null;
            }

            // As per #391, the comparison for the decrement step can have some rounding issues.
            var stepDecimals = scope_Spectrum.countStepDecimals();

            // Round per #391
            if (increment !== null && increment !== false) {
                increment = Number(increment.toFixed(stepDecimals));
            }

            if (decrement !== null && decrement !== false) {
                decrement = Number(decrement.toFixed(stepDecimals));
            }

            return [decrement, increment];
        }

        // Get the current step size for the slider.
        function getNextSteps() {
            return scope_HandleNumbers.map(getNextStepsForHandle);
        }

        // Updateable: margin, limit, padding, step, range, animate, snap
        function updateOptions(optionsToUpdate, fireSetEvent) {
            // Spectrum is created using the range, snap, direction and step options.
            // 'snap' and 'step' can be updated.
            // If 'snap' and 'step' are not passed, they should remain unchanged.
            var v = valueGet();

            var updateAble = [
                "margin",
                "limit",
                "padding",
                "range",
                "animate",
                "snap",
                "step",
                "format",
                "pips",
                "tooltips"
            ];

            // Only change options that we're actually passed to update.
            updateAble.forEach(function (name) {
                // Check for undefined. null removes the value.
                if (optionsToUpdate[name] !== undefined) {
                    originalOptions[name] = optionsToUpdate[name];
                }
            });

            var newOptions = testOptions(originalOptions);

            // Load new options into the slider state
            updateAble.forEach(function (name) {
                if (optionsToUpdate[name] !== undefined) {
                    options[name] = newOptions[name];
                }
            });

            scope_Spectrum = newOptions.spectrum;

            // Limit, margin and padding depend on the spectrum but are stored outside of it. (#677)
            options.margin = newOptions.margin;
            options.limit = newOptions.limit;
            options.padding = newOptions.padding;

            // Update pips, removes existing.
            if (options.pips) {
                pips(options.pips);
            } else {
                removePips();
            }

            // Update tooltips, removes existing.
            if (options.tooltips) {
                tooltips();
            } else {
                removeTooltips();
            }

            // Invalidate the current positioning so valueSet forces an update.
            scope_Locations = [];
            valueSet(optionsToUpdate.start || v, fireSetEvent);
        }

        // Initialization steps
        function setupSlider() {
            // Create the base element, initialize HTML and set classes.
            // Add handles and connect elements.
            scope_Base = addSlider(scope_Target);

            addElements(options.connect, scope_Base);

            // Attach user events.
            bindSliderEvents(options.events);

            // Use the public value method to set the start values.
            valueSet(options.start);

            if (options.pips) {
                pips(options.pips);
            }

            if (options.tooltips) {
                tooltips();
            }

            aria();
        }

        setupSlider();

        // noinspection JSUnusedGlobalSymbols
        scope_Self = {
            destroy: destroy,
            steps: getNextSteps,
            on: bindEvent,
            off: removeEvent,
            get: valueGet,
            set: valueSet,
            setHandle: valueSetHandle,
            reset: valueReset,
            // Exposed for unit testing, don't use this in your application.
            __moveHandles: function (a, b, c) {
                moveHandles(a, b, scope_Locations, c);
            },
            options: originalOptions, // Issue #600, #678
            updateOptions: updateOptions,
            target: scope_Target, // Issue #597
            removePips: removePips,
            removeTooltips: removeTooltips,
            getTooltips: function () {
                return scope_Tooltips;
            },
            getOrigins: function () {
                return scope_Handles;
            },
            pips: pips // Issue #594
        };

        return scope_Self;
    }

    // Run the standard initializer
    function initialize(target, originalOptions) {
        if (!target || !target.nodeName) {
            throw new Error("noUiSlider (" + VERSION + "): create requires a single element, got: " + target);
        }

        // Throw an error if the slider was already initialized.
        if (target.noUiSlider) {
            throw new Error("noUiSlider (" + VERSION + "): Slider was already initialized.");
        }

        // Test the options and create the slider environment;
        var options = testOptions(originalOptions, target);
        var api = scope(target, options, originalOptions);

        target.noUiSlider = api;

        return api;
    }

    // Use an object instead of a function for future expandability;
    return {
        // Exposed for unit testing, don't use this in your application.
        __spectrum: Spectrum,
        version: VERSION,
        // A reference to the default classes, allows global changes.
        // Use the cssClasses option for changes to one slider.
        cssClasses: cssClasses,
        create: initialize
    };
});

!function (e, t) {
    if ("object" == typeof exports && "object" == typeof module) module.exports = t(); else if ("function" == typeof define && define.amd) define([], t); else {
        var n = t();
        for (var o in n) ("object" == typeof exports ? exports : e)[o] = n[o]
    }
}(window, (function () {
    return function (e) {
        var t = {};

        function n(o) {
            if (t[o]) return t[o].exports;
            var i = t[o] = {i: o, l: !1, exports: {}};
            return e[o].call(i.exports, i, i.exports, n), i.l = !0, i.exports
        }

        return n.m = e, n.c = t, n.d = function (e, t, o) {
            n.o(e, t) || Object.defineProperty(e, t, {enumerable: !0, get: o})
        }, n.r = function (e) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(e, "__esModule", {value: !0})
        }, n.t = function (e, t) {
            if (1 & t && (e = n(e)), 8 & t) return e;
            if (4 & t && "object" == typeof e && e && e.__esModule) return e;
            var o = Object.create(null);
            if (n.r(o), Object.defineProperty(o, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e) for (var i in e) n.d(o, i, function (t) {
                return e[t]
            }.bind(null, i));
            return o
        }, n.n = function (e) {
            var t = e && e.__esModule ? function () {
                return e.default
            } : function () {
                return e
            };
            return n.d(t, "a", t), t
        }, n.o = function (e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }, n.p = "", n(n.s = 0)
    }([function (e, t, n) {
        "use strict";
        n.r(t);
        var o, i = "fslightbox-", s = "".concat(i, "styles"), r = "".concat(i, "cursor-grabbing"),
            c = "".concat(i, "full-dimension"), a = "".concat(i, "flex-centered"), l = "".concat(i, "open"),
            u = "".concat(i, "transform-transition"), d = "".concat(i, "absoluted"), p = "".concat(i, "slide-btn"),
            f = "".concat(p, "-container"), h = "".concat(i, "fade-in"), m = "".concat(i, "fade-out"),
            g = h + "-strong", v = m + "-strong", b = "".concat(i, "opacity-"), x = "".concat(b, "1"),
            y = "".concat(i, "source");

        function S(e) {
            return (S = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        "object" === ("undefined" == typeof document ? "undefined" : S(document)) && ((o = document.createElement("style")).className = s, o.appendChild(document.createTextNode(".fslightbox-absoluted{position:absolute;top:0;left:0}.fslightbox-fade-in{animation:fslightbox-fade-in .25s cubic-bezier(0,0,.7,1)}.fslightbox-fade-out{animation:fslightbox-fade-out .25s ease}.fslightbox-fade-in-strong{animation:fslightbox-fade-in-strong .25s cubic-bezier(0,0,.7,1)}.fslightbox-fade-out-strong{animation:fslightbox-fade-out-strong .25s ease}@keyframes fslightbox-fade-in{from{opacity:.65}to{opacity:1}}@keyframes fslightbox-fade-out{from{opacity:.35}to{opacity:0}}@keyframes fslightbox-fade-in-strong{from{opacity:.3}to{opacity:1}}@keyframes fslightbox-fade-out-strong{from{opacity:1}to{opacity:0}}.fslightbox-cursor-grabbing{cursor:grabbing}.fslightbox-full-dimension{width:100%;height:100%}.fslightbox-open{overflow:hidden;height:100%}.fslightbox-flex-centered{display:flex;justify-content:center;align-items:center}.fslightbox-opacity-0{opacity:0!important}.fslightbox-opacity-1{opacity:1!important}.fslightbox-scrollbarfix{padding-right:17px}.fslightbox-transform-transition{transition:transform .3s}.fslightbox-container{font-family:Arial,sans-serif;position:fixed;top:0;left:0;background:linear-gradient(rgba(30,30,30,.9),#000 1810%);z-index:1000000000;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-tap-highlight-color:transparent}.fslightbox-container *{box-sizing:border-box}.fslightbox-svg-path{transition:fill .15s ease;fill:#ddd}.fslightbox-nav{height:45px;width:100%;position:absolute;top:0;left:0}.fslightbox-slide-number-container{display:flex;justify-content:center;align-items:center;position:relative;height:100%;font-size:15px;color:#d7d7d7;z-index:0;max-width:55px;text-align:left}.fslightbox-slide-number-container .fslightbox-flex-centered{height:100%}.fslightbox-slash{display:block;margin:0 5px;width:1px;height:12px;transform:rotate(15deg);background:#fff}.fslightbox-toolbar{position:absolute;z-index:3;right:0;top:0;height:100%;display:flex;background:rgba(35,35,35,.65)}.fslightbox-toolbar-button{height:100%;width:45px;cursor:pointer}.fslightbox-toolbar-button:hover .fslightbox-svg-path{fill:#fff}.fslightbox-slide-btn-container{display:flex;align-items:center;padding:12px 12px 12px 6px;position:absolute;top:50%;cursor:pointer;z-index:3;transform:translateY(-50%)}@media (min-width:476px){.fslightbox-slide-btn-container{padding:22px 22px 22px 6px}}@media (min-width:768px){.fslightbox-slide-btn-container{padding:30px 30px 30px 6px}}.fslightbox-slide-btn-container:hover .fslightbox-svg-path{fill:#f1f1f1}.fslightbox-slide-btn{padding:9px;font-size:26px;background:rgba(35,35,35,.65)}@media (min-width:768px){.fslightbox-slide-btn{padding:10px}}@media (min-width:1600px){.fslightbox-slide-btn{padding:11px}}.fslightbox-slide-btn-container-previous{left:0}@media (max-width:475.99px){.fslightbox-slide-btn-container-previous{padding-left:3px}}.fslightbox-slide-btn-container-next{right:0;padding-left:12px;padding-right:3px}@media (min-width:476px){.fslightbox-slide-btn-container-next{padding-left:22px}}@media (min-width:768px){.fslightbox-slide-btn-container-next{padding-left:30px}}@media (min-width:476px){.fslightbox-slide-btn-container-next{padding-right:6px}}.fslightbox-down-event-detector{position:absolute;z-index:1}.fslightbox-slide-swiping-hoverer{z-index:4}.fslightbox-invalid-file-wrapper{font-size:22px;color:#eaebeb;margin:auto}.fslightbox-video{object-fit:cover}.fslightbox-youtube-iframe{border:0}.fslightbox-loader{display:block;margin:auto;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:67px;height:67px}.fslightbox-loader div{box-sizing:border-box;display:block;position:absolute;width:54px;height:54px;margin:6px;border:5px solid;border-color:#999 transparent transparent transparent;border-radius:50%;animation:fslightbox-loader 1.2s cubic-bezier(.5,0,.5,1) infinite}.fslightbox-loader div:nth-child(1){animation-delay:-.45s}.fslightbox-loader div:nth-child(2){animation-delay:-.3s}.fslightbox-loader div:nth-child(3){animation-delay:-.15s}@keyframes fslightbox-loader{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}.fslightbox-source{position:relative;margin:auto;opacity:0;z-index:2;backface-visibility:hidden;transform:translateZ(0);transition:opacity .3s}")), document.head.appendChild(o));

        function w(e) {
            var t, n = e.props, o = 0, i = {};
            this.getSourceTypeFromLocalStorageByUrl = function (e) {
                return t[e] ? t[e] : s(e)
            }, this.handleReceivedSourceTypeForUrl = function (e, n) {
                void 0 !== i[n] && (o--, i[n] = e, 0 === o && (!function (e, t) {
                    for (var n in t) e[n] = t[n]
                }(t, i), localStorage.setItem("fslightbox-types", JSON.stringify(t))))
            };
            var s = function (e) {
                o++, i[e] = !1
            };
            n.disableLocalStorage ? (this.getSourceTypeFromLocalStorageByUrl = function () {
            }, this.handleReceivedSourceTypeForUrl = function () {
            }) : (t = JSON.parse(localStorage.getItem("fslightbox-types"))) || (t = {}, this.getSourceTypeFromLocalStorageByUrl = s)
        }

        function L(e, t, n, o) {
            var i = e.data, s = e.elements.sources, r = n / o, c = 0;
            this.styleSize = function () {
                if ((c = i.maxSourceWidth / r) < i.maxSourceHeight) return n < i.maxSourceWidth && (c = o), a();
                c = o > i.maxSourceHeight ? i.maxSourceHeight : o, a()
            };
            var a = function () {
                s[t].style.width = c * r + "px", s[t].style.height = c + "px"
            }
        }

        function C(e, t, n, o) {
            var i = this, s = e.collections.sourcesStylers, r = e.elements, c = r.sources, a = r.sourcesInners,
                l = r.sourcesOuters, u = e.resolve;
            this.runNormalLoadActions = function () {
                c[t].classList.add(x), a[t].classList.add(g), l[t].removeChild(l[t].firstChild)
            }, this.runInitialLoadActions = function () {
                i.runNormalLoadActions();
                var e = u(L, [t, n, o]);
                e.styleSize(), s[t] = e
            }
        }

        function F(e, t) {
            var n, o = this, i = e.elements.sources, s = e.props, r = e.resolve;
            this.handleImageLoad = function (e) {
                var t = e.target, n = t.width, i = t.height;
                o.handleImageLoad = c(n, i)
            }, this.handleVideoLoad = function (e) {
                var t = e.target, i = t.videoWidth, s = t.videoHeight;
                n = !0, o.handleVideoLoad = c(i, s)
            }, this.handleNotMetaDatedVideoLoad = function () {
                n || o.handleYoutubeLoad()
            }, this.handleYoutubeLoad = function () {
                var e = 1920, t = 1080;
                s.maxYoutubeDimensions && (e = s.maxYoutubeDimensions.width, t = s.maxYoutubeDimensions.height), o.handleYoutubeLoad = c(e, t)
            }, this.handleCustomLoad = function () {
                setTimeout((function () {
                    o.handleCustomLoad = c(i[t].offsetWidth, i[t].offsetHeight)
                }))
            };
            var c = function (e, n) {
                var o = r(C, [t, e, n]);
                return o.runInitialLoadActions(), o.runNormalLoadActions
            }
        }

        function I(e, t, n) {
            var o = e.elements.sources, i = e.props.customClasses, s = i[t] ? i[t] : "";
            o[t].className = n + " " + s
        }

        function E(e, t) {
            var n = e.elements.sources, o = e.props.customAttributes;
            for (var i in o[t]) n[t].setAttribute(i, o[t][i])
        }

        function T(e, t) {
            var n = e.collections.sourcesLoadsHandlers, o = e.elements, i = o.sources, s = o.sourcesInners,
                r = e.props.sources;
            i[t] = document.createElement("img"), I(e, t, y), i[t].src = r[t], i[t].onload = n[t].handleImageLoad, E(e, t), s[t].appendChild(i[t])
        }

        function A(e, t) {
            var n = e.collections.sourcesLoadsHandlers, o = e.elements, i = o.sources, s = o.sourcesInners, r = e.props,
                c = r.sources, a = r.videosPosters;
            i[t] = document.createElement("video"), I(e, t, y), i[t].src = c[t], i[t].onloadedmetadata = function (e) {
                n[t].handleVideoLoad(e)
            }, i[t].controls = !0, E(e, t), a[t] && (i[t].poster = a[t]);
            var l = document.createElement("source");
            l.src = c[t], i[t].appendChild(l), setTimeout(n[t].handleNotMetaDatedVideoLoad, 3e3), s[t].appendChild(i[t])
        }

        function O(e, t) {
            var n = e.collections.sourcesLoadsHandlers, o = e.elements, s = o.sources, r = o.sourcesInners,
                c = e.props.sources;
            s[t] = document.createElement("iframe"), I(e, t, "".concat(y, " ").concat(i, "youtube-iframe")), s[t].src = "https://www.youtube.com/embed/".concat(c[t].match(/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/)[2]), s[t].allowFullscreen = !0, E(e, t), r[t].appendChild(s[t]), n[t].handleYoutubeLoad()
        }

        function N(e, t) {
            var n = e.collections.sourcesLoadsHandlers, o = e.elements, i = o.sources, s = o.sourcesInners,
                r = e.props.sources;
            i[t] = r[t], I(e, t, "".concat(i[t].className, " ").concat(y)), s[t].appendChild(i[t]), n[t].handleCustomLoad()
        }

        function z(e, t) {
            var n = e.elements, o = n.sources, s = n.sourcesInners, r = n.sourcesOuters;
            e.props.sources;
            o[t] = document.createElement("div"), o[t].className = "".concat(i, "invalid-file-wrapper ").concat(a), o[t].innerHTML = "Invalid source", s[t].classList.add(g), s[t].appendChild(o[t]), r[t].removeChild(r[t].firstChild)
        }

        function k(e) {
            var t = e.collections, n = t.sourcesLoadsHandlers, o = t.sourcesRenderFunctions,
                i = e.core.sourceDisplayFacade, s = e.resolve;
            this.runActionsForSourceTypeAndIndex = function (t, r) {
                var c;
                switch ("invalid" !== t && (n[r] = s(F, [r])), t) {
                    case"image":
                        c = T;
                        break;
                    case"video":
                        c = A;
                        break;
                    case"youtube":
                        c = O;
                        break;
                    case"custom":
                        c = N;
                        break;
                    default:
                        c = z
                }
                o[r] = function () {
                    return c(e, r)
                }, i.displaySourcesWhichShouldBeDisplayed()
            }
        }

        function H() {
            var e, t, n, o, i, s = {
                isUrlYoutubeOne: function (e) {
                    var t = document.createElement("a");
                    return t.href = e, "www.youtube.com" === t.hostname
                }, getTypeFromResponseContentType: function (e) {
                    return e.slice(0, e.indexOf("/"))
                }
            };
            this.setUrlToCheck = function (t) {
                e = t
            }, this.getSourceType = function (t) {
                if (s.isUrlYoutubeOne(e)) return t("youtube");
                n = t, (o = new XMLHttpRequest).open("GET", e, !0), o.onreadystatechange = r, o.send()
            };
            var r = function () {
                if (4 === o.readyState && 0 === o.status && !i) return c();
                if (2 === o.readyState) {
                    if (200 !== o.status && 206 !== o.status) return i = !0, c();
                    i = !0, l(s.getTypeFromResponseContentType(o.getResponseHeader("content-type"))), a()
                }
            }, c = function () {
                t = "invalid", a()
            }, a = function () {
                o.abort(), n(t)
            }, l = function (e) {
                switch (e) {
                    case"image":
                        t = "image";
                        break;
                    case"video":
                        t = "video";
                        break;
                    default:
                        t = "invalid"
                }
            }
        }

        function R(e, t, n) {
            var o = e.props, i = o.types, s = o.type, r = o.sources, c = e.resolve;
            this.getTypeSetByClientForIndex = function (e) {
                var t;
                return i && i[e] ? t = i[e] : s && (t = s), t
            }, this.retrieveTypeWithXhrForIndex = function (e) {
                var o = c(H);
                o.setUrlToCheck(r[e]), o.getSourceType((function (o) {
                    t.handleReceivedSourceTypeForUrl(o, r[e]), n.runActionsForSourceTypeAndIndex(o, e)
                }))
            }
        }

        function D(e, t) {
            var n = e.elements, o = n.sourcesOutersWrapper, i = n.sourcesOuters;
            i[t] = document.createElement("div"), i[t].className = "".concat(d, " ").concat(c, " ").concat(a), i[t].innerHTML = '<div class="fslightbox-loader"><div></div><div></div><div></div><div></div></div>', o.appendChild(i[t]), function (e, t) {
                var n = e.elements, o = n.sourcesOuters, i = n.sourcesInners;
                i[t] = document.createElement("div"), o[t].appendChild(i[t])
            }(e, t)
        }

        function W(e, t, n, o) {
            var s = document.createElementNS("http://www.w3.org/2000/svg", "svg");
            s.setAttributeNS(null, "width", t), s.setAttributeNS(null, "height", t), s.setAttributeNS(null, "viewBox", n);
            var r = document.createElementNS("http://www.w3.org/2000/svg", "path");
            return r.setAttributeNS(null, "class", "".concat(i, "svg-path")), r.setAttributeNS(null, "d", o), s.appendChild(r), e.appendChild(s), s
        }

        function M(e, t) {
            var n = document.createElement("div");
            return n.className = "".concat(i, "toolbar-button ").concat(a), n.title = t, e.appendChild(n), n
        }

        function P(e, t) {
            var n = document.createElement("div");
            n.className = "".concat(i, "toolbar"), t.appendChild(n), function (e, t) {
                var n = e.componentsServices, o = e.core.fullscreenToggler, i = e.data,
                    s = "M4.5 11H3v4h4v-1.5H4.5V11zM3 7h1.5V4.5H7V3H3v4zm10.5 6.5H11V15h4v-4h-1.5v2.5zM11 3v1.5h2.5V7H15V3h-4z",
                    r = M(t);
                r.title = "Enter fullscreen";
                var c = W(r, "20px", "0 0 18 18", s);
                n.enterFullscreen = function () {
                    i.isFullscreenOpen = !0, r.title = "Exit fullscreen", c.setAttributeNS(null, "width", "24px"), c.setAttributeNS(null, "height", "24px"), c.setAttributeNS(null, "viewBox", "0 0 950 1024"), c.firstChild.setAttributeNS(null, "d", "M682 342h128v84h-212v-212h84v128zM598 810v-212h212v84h-128v128h-84zM342 342v-128h84v212h-212v-84h128zM214 682v-84h212v212h-84v-128h-128z")
                }, n.exitFullscreen = function () {
                    i.isFullscreenOpen = !1, r.title = "Enter fullscreen", c.setAttributeNS(null, "width", "20px"), c.setAttributeNS(null, "height", "20px"), c.setAttributeNS(null, "viewBox", "0 0 18 18"), c.firstChild.setAttributeNS(null, "d", s)
                }, r.onclick = function () {
                    i.isFullscreenOpen ? o.exitFullscreen() : o.enterFullscreen()
                }
            }(e, n), function (e, t) {
                var n = M(t, "Close");
                n.onclick = e.core.lightboxCloser.closeLightbox, W(n, "20px", "0 0 24 24", "M 4.7070312 3.2929688 L 3.2929688 4.7070312 L 10.585938 12 L 3.2929688 19.292969 L 4.7070312 20.707031 L 12 13.414062 L 19.292969 20.707031 L 20.707031 19.292969 L 13.414062 12 L 20.707031 4.7070312 L 19.292969 3.2929688 L 12 10.585938 L 4.7070312 3.2929688 z")
            }(e, n)
        }

        function j(e) {
            var t = e.props.sources, n = e.elements.container, o = document.createElement("div");
            o.className = "".concat(i, "nav"), n.appendChild(o), P(e, o), t.length > 1 && function (e, t) {
                var n = e.componentsServices, o = e.props.sources, s = (e.stageIndexes, document.createElement("div"));
                s.className = "".concat(i, "slide-number-container");
                var r = document.createElement("div");
                r.className = a;
                var c = document.createElement("span");
                n.setSlideNumber = function (e) {
                    return c.innerHTML = e
                };
                var l = document.createElement("span");
                l.className = "".concat(i, "slash");
                var u = document.createElement("div");
                u.innerHTML = o.length, s.appendChild(r), r.appendChild(c), r.appendChild(l), r.appendChild(u), t.appendChild(s), setTimeout((function () {
                    r.offsetWidth > 55 && (s.style.justifyContent = "flex-start")
                }))
            }(e, o)
        }

        function X(e, t) {
            var n = this, o = e.elements.sourcesOuters, i = e.props, s = 0;
            this.byValue = function (e) {
                return s = e, n
            }, this.negative = function () {
                r(-c())
            }, this.zero = function () {
                r(0)
            }, this.positive = function () {
                r(c())
            };
            var r = function (e) {
                o[t].style.transform = "translateX(".concat(e + s, "px)"), s = 0
            }, c = function () {
                return (1 + i.slideDistance) * innerWidth
            }
        }

        function B(e, t, n, o) {
            var i = e.elements.container, s = n.charAt(0).toUpperCase() + n.slice(1), r = document.createElement("div");
            r.className = "".concat(f, " ").concat(f, "-").concat(n), r.title = "".concat(s, " slide"), r.onclick = t, function (e, t) {
                var n = document.createElement("div");
                n.className = "".concat(p, " ").concat(a), W(n, "20px", "0 0 20 20", t), e.appendChild(n)
            }(r, o), i.appendChild(r)
        }

        function U(e, t) {
            var n = e.classList;
            n.contains(t) && n.remove(t)
        }

        function V(e) {
            var t = this, n = e.core, o = n.eventsDispatcher, i = n.fullscreenToggler, s = n.globalEventsController,
                r = n.scrollbarRecompensor, c = e.data, a = e.elements, u = e.props, d = e.slideSwipingProps;
            this.isLightboxFadingOut = !1, this.runActions = function () {
                t.isLightboxFadingOut = !0, a.container.classList.add(v), s.removeListeners(), u.exitFullscreenOnClose && c.isFullscreenOpen && i.exitFullscreen(), setTimeout((function () {
                    t.isLightboxFadingOut = !1, d.isSwiping = !1, a.container.classList.remove(v), document.documentElement.classList.remove(l), r.removeRecompense(), document.body.removeChild(a.container), o.dispatch("onClose")
                }), 220)
            }
        }

        function q(e) {
            var t, n, o, i = e.collections.sourcesOutersTransformers, s = e.componentsServices, r = e.core,
                c = r.classFacade, a = r.slideIndexChanger, l = r.sourceDisplayFacade, d = r.stageManager,
                p = e.elements.sourcesInners, f = e.stageIndexes, v = (t = function () {
                    c.removeFromEachElementClassIfContains("sourcesInners", m)
                }, n = 250, o = [], function () {
                    o.push(!0), setTimeout((function () {
                        o.pop(), o.length || t()
                    }), n)
                });
            a.changeTo = function (e) {
                f.current = e, d.updateStageIndexes(), s.setSlideNumber(e + 1), l.displaySourcesWhichShouldBeDisplayed()
            }, a.jumpTo = function (e) {
                var t = f.current;
                a.changeTo(e), c.removeFromEachElementClassIfContains("sourcesOuters", u), U(p[t], g), U(p[t], h), p[t].classList.add(m), U(p[e], g), U(p[e], m), p[e].classList.add(h), v(), i[e].zero(), setTimeout((function () {
                    t !== f.current && i[t].negative()
                }), 220)
            }
        }

        function Y(e) {
            return e.touches ? e.touches[0].clientX : e.clientX
        }

        function _(e) {
            var t = e.core, n = t.lightboxCloser, o = t.fullscreenToggler, i = t.slideChangeFacade;
            this.listener = function (e) {
                switch (e.key) {
                    case"Escape":
                        n.closeLightbox();
                        break;
                    case"ArrowLeft":
                        i.changeToPrevious();
                        break;
                    case"ArrowRight":
                        i.changeToNext();
                        break;
                    case"F11":
                        e.preventDefault(), o.enterFullscreen()
                }
            }
        }

        function J(e) {
            var t = e.collections.sourcesOutersTransformers, n = e.elements, o = e.slideSwipingProps,
                i = e.stageIndexes;
            this.runActionsForEvent = function (e) {
                var t, c, a;
                n.container.contains(n.slideSwipingHoverer) || n.container.appendChild(n.slideSwipingHoverer), t = n.container, c = r, (a = t.classList).contains(c) || a.add(c), o.swipedX = Y(e) - o.downClientX, s(i.current, "zero"), void 0 !== i.previous && o.swipedX > 0 ? s(i.previous, "negative") : void 0 !== i.next && o.swipedX < 0 && s(i.next, "positive")
            };
            var s = function (e, n) {
                t[e].byValue(o.swipedX)[n]()
            }
        }

        function G(e) {
            var t, n = e.props.sources, o = e.resolve, i = e.slideSwipingProps, s = o(J), r = (t = !1, function () {
                return !t && (t = !0, requestAnimationFrame((function () {
                    t = !1
                })), !0)
            });
            1 === n.length ? this.listener = function () {
                i.swipedX = 1
            } : this.listener = function (e) {
                i.isSwiping && r() && s.runActionsForEvent(e)
            }
        }

        function Z(e) {
            var t = e.collections.sourcesOutersTransformers, n = e.core.slideIndexChanger, o = e.elements.sourcesOuters,
                i = e.stageIndexes;
            this.runPositiveSwipedXActions = function () {
                void 0 === i.previous || (s("positive"), n.changeTo(i.previous)), s("zero")
            }, this.runNegativeSwipedXActions = function () {
                void 0 === i.next || (s("negative"), n.changeTo(i.next)), s("zero")
            };
            var s = function (e) {
                o[i.current].classList.add(u), t[i.current][e]()
            }
        }

        function $(e, t) {
            e.contains(t) && e.removeChild(t)
        }

        function K(e) {
            var t = e.core.lightboxCloser, n = e.elements, o = e.resolve, i = e.slideSwipingProps, s = o(Z);
            this.runNoSwipeActions = function () {
                $(n.container, n.slideSwipingHoverer), i.isSourceDownEventTarget || t.closeLightbox(), i.isSwiping = !1
            }, this.runActions = function () {
                i.swipedX > 0 ? s.runPositiveSwipedXActions() : s.runNegativeSwipedXActions(), $(n.container, n.slideSwipingHoverer), n.container.classList.remove(r), i.isSwiping = !1
            }
        }

        function Q(e) {
            var t = e.resolve, n = e.slideSwipingProps, o = t(K);
            this.listener = function () {
                n.isSwiping && (n.swipedX ? o.runActions() : o.runNoSwipeActions())
            }
        }

        function ee(e) {
            var t, n, o;
            n = (t = e).core.classFacade, o = t.elements, n.removeFromEachElementClassIfContains = function (e, t) {
                for (var n = 0; n < o[e].length; n++) U(o[e][n], t)
            }, function (e) {
                var t = e.core.eventsDispatcher, n = e.props;
                t.dispatch = function (e) {
                    n[e] && n[e]()
                }
            }(e), function (e) {
                var t = e.componentsServices, n = e.core.fullscreenToggler;
                n.enterFullscreen = function () {
                    t.enterFullscreen();
                    var e = document.documentElement;
                    e.requestFullscreen ? e.requestFullscreen() : e.mozRequestFullScreen ? e.mozRequestFullScreen() : e.webkitRequestFullscreen ? e.webkitRequestFullscreen() : e.msRequestFullscreen && e.msRequestFullscreen()
                }, n.exitFullscreen = function () {
                    t.exitFullscreen(), document.exitFullscreen ? document.exitFullscreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.webkitExitFullscreen ? document.webkitExitFullscreen() : document.msExitFullscreen && document.msExitFullscreen()
                }
            }(e), function (e) {
                var t = e.core, n = t.globalEventsController, o = t.windowResizeActioner, i = e.resolve, s = i(_),
                    r = i(G), c = i(Q);
                n.attachListeners = function () {
                    document.addEventListener("mousemove", r.listener), document.addEventListener("touchmove", r.listener, {passive: !0}), document.addEventListener("mouseup", c.listener), document.addEventListener("touchend", c.listener, {passive: !0}), addEventListener("resize", o.runActions), document.addEventListener("keydown", s.listener)
                }, n.removeListeners = function () {
                    document.removeEventListener("mousemove", r.listener), document.removeEventListener("touchmove", r.listener), document.removeEventListener("mouseup", c.listener), document.removeEventListener("touchend", c.listener), removeEventListener("resize", o.runActions), document.removeEventListener("keydown", s.listener)
                }
            }(e), function (e) {
                var t = e.core.lightboxCloser, n = (0, e.resolve)(V);
                t.closeLightbox = function () {
                    n.isLightboxFadingOut || n.runActions()
                }
            }(e), ne(e), function (e) {
                var t = e.data, n = e.core.scrollbarRecompensor;
                n.addRecompense = function () {
                    "complete" === document.readyState ? o() : addEventListener("load", (function () {
                        o(), n.addRecompense = o
                    }))
                };
                var o = function () {
                    document.body.offsetHeight > innerHeight && (document.body.style.marginRight = t.scrollbarWidth + "px")
                };
                n.removeRecompense = function () {
                    document.body.style.removeProperty("margin-right")
                }
            }(e), function (e) {
                var t = e.core, n = t.slideChangeFacade, o = t.slideIndexChanger, i = t.stageManager;
                e.props.sources.length > 1 ? (n.changeToPrevious = function () {
                    o.jumpTo(i.getPreviousSlideIndex())
                }, n.changeToNext = function () {
                    o.jumpTo(i.getNextSlideIndex())
                }) : (n.changeToPrevious = function () {
                }, n.changeToNext = function () {
                })
            }(e), q(e), function (e) {
                var t = e.core, n = t.classFacade, o = t.slideSwipingDown, i = e.elements.sources,
                    s = e.slideSwipingProps, r = e.stageIndexes;
                o.listener = function (e) {
                    s.isSwiping = !0, s.downClientX = Y(e), s.swipedX = 0, "VIDEO" === e.target.tagName || e.touches || e.preventDefault();
                    var t = i[r.current];
                    t && t.contains(e.target) ? s.isSourceDownEventTarget = !0 : s.isSourceDownEventTarget = !1, n.removeFromEachElementClassIfContains("sourcesOuters", u)
                }
            }(e), function (e) {
                var t = e.collections.sourcesRenderFunctions, n = e.core.sourceDisplayFacade,
                    o = e.props.loadOnlyCurrentSource, i = e.stageIndexes;

                function s(e) {
                    t[e] && (t[e](), delete t[e])
                }

                n.displaySourcesWhichShouldBeDisplayed = function () {
                    if (o) s(i.current); else for (var e in i) s(i[e])
                }
            }(e), function (e) {
                var t = e.stageIndexes, n = e.core.stageManager, o = e.props.sources.length - 1;
                n.getPreviousSlideIndex = function () {
                    return 0 === t.current ? o : t.current - 1
                }, n.getNextSlideIndex = function () {
                    return t.current === o ? 0 : t.current + 1
                }, n.updateStageIndexes = 0 === o ? function () {
                } : 1 === o ? function () {
                    0 === t.current ? (t.next = 1, delete t.previous) : (t.previous = 0, delete t.next)
                } : function () {
                    t.previous = n.getPreviousSlideIndex(), t.next = n.getNextSlideIndex()
                }, n.isSourceInStage = o <= 2 ? function () {
                    return !0
                } : function (e) {
                    var n = t.current;
                    if (0 === n && e === o || n === o && 0 === e) return !0;
                    var i = n - e;
                    return -1 === i || 0 === i || 1 === i
                }
            }(e), function (e) {
                var t = e.collections, n = t.sourcesOutersTransformers, o = t.sourcesStylers,
                    i = e.core.windowResizeActioner, s = e.data, r = e.elements.sourcesOuters, c = e.props,
                    a = e.stageIndexes;
                i.runActions = function () {
                    innerWidth < 992 ? s.maxSourceWidth = innerWidth : s.maxSourceWidth = .9 * innerWidth, s.maxSourceHeight = .9 * innerHeight;
                    for (var e = 0; e < c.sources.length; e++) U(r[e], u), e !== a.current && n[e].negative(), o[e] && o[e].styleSize()
                }
            }(e)
        }

        function te(e) {
            var t = e.core.eventsDispatcher, n = e.data, o = e.elements, s = e.props.sources;
            n.isInitialized = !0, function (e) {
                for (var t = e.collections.sourcesOutersTransformers, n = e.props.sources, o = e.resolve, i = 0; i < n.length; i++) t[i] = o(X, [i])
            }(e), ee(e), o.container = document.createElement("div"), o.container.className = "".concat(i, "container ").concat(c, " ").concat(g), function (e) {
                var t = e.elements;
                t.slideSwipingHoverer = document.createElement("div"), t.slideSwipingHoverer.className = "".concat(i, "slide-swiping-hoverer ").concat(c, " ").concat(d)
            }(e), j(e), function (e) {
                var t = e.core.slideSwipingDown, n = e.elements, o = e.props.sources;
                n.sourcesOutersWrapper = document.createElement("div"), n.sourcesOutersWrapper.className = "".concat(d, " ").concat(c), n.container.appendChild(n.sourcesOutersWrapper), n.sourcesOutersWrapper.addEventListener("mousedown", t.listener), n.sourcesOutersWrapper.addEventListener("touchstart", t.listener, {passive: !0});
                for (var i = 0; i < o.length; i++) D(e, i)
            }(e), s.length > 1 && function (e) {
                var t = e.core.slideChangeFacade;
                B(e, t.changeToPrevious, "previous", "M18.271,9.212H3.615l4.184-4.184c0.306-0.306,0.306-0.801,0-1.107c-0.306-0.306-0.801-0.306-1.107,0L1.21,9.403C1.194,9.417,1.174,9.421,1.158,9.437c-0.181,0.181-0.242,0.425-0.209,0.66c0.005,0.038,0.012,0.071,0.022,0.109c0.028,0.098,0.075,0.188,0.142,0.271c0.021,0.026,0.021,0.061,0.045,0.085c0.015,0.016,0.034,0.02,0.05,0.033l5.484,5.483c0.306,0.307,0.801,0.307,1.107,0c0.306-0.305,0.306-0.801,0-1.105l-4.184-4.185h14.656c0.436,0,0.788-0.353,0.788-0.788S18.707,9.212,18.271,9.212z"), B(e, t.changeToNext, "next", "M1.729,9.212h14.656l-4.184-4.184c-0.307-0.306-0.307-0.801,0-1.107c0.305-0.306,0.801-0.306,1.106,0l5.481,5.482c0.018,0.014,0.037,0.019,0.053,0.034c0.181,0.181,0.242,0.425,0.209,0.66c-0.004,0.038-0.012,0.071-0.021,0.109c-0.028,0.098-0.075,0.188-0.143,0.271c-0.021,0.026-0.021,0.061-0.045,0.085c-0.015,0.016-0.034,0.02-0.051,0.033l-5.483,5.483c-0.306,0.307-0.802,0.307-1.106,0c-0.307-0.305-0.307-0.801,0-1.105l4.184-4.185H1.729c-0.436,0-0.788-0.353-0.788-0.788S1.293,9.212,1.729,9.212z")
            }(e), function (e) {
                for (var t = e.props.sources, n = e.resolve, o = n(w), i = n(k), s = n(R, [o, i]), r = 0; r < t.length; r++) if ("string" == typeof t[r]) {
                    var c = s.getTypeSetByClientForIndex(r);
                    if (c) i.runActionsForSourceTypeAndIndex(c, r); else {
                        var a = o.getSourceTypeFromLocalStorageByUrl(t[r]);
                        a ? i.runActionsForSourceTypeAndIndex(a, r) : s.retrieveTypeWithXhrForIndex(r)
                    }
                } else i.runActionsForSourceTypeAndIndex("custom", r)
            }(e), t.dispatch("onInit")
        }

        function ne(e) {
            var t = e.collections.sourcesOutersTransformers, n = e.componentsServices, o = e.core,
                i = o.eventsDispatcher, s = o.lightboxOpener, r = o.globalEventsController, c = o.scrollbarRecompensor,
                a = o.sourceDisplayFacade, u = o.stageManager, d = o.windowResizeActioner, p = e.data, f = e.elements,
                h = e.stageIndexes;
            s.open = function () {
                var o = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                h.current = o, p.isInitialized ? i.dispatch("onShow") : te(e), u.updateStageIndexes(), a.displaySourcesWhichShouldBeDisplayed(), n.setSlideNumber(o + 1), document.body.appendChild(f.container), document.documentElement.classList.add(l), c.addRecompense(), r.attachListeners(), d.runActions(), t[h.current].zero(), i.dispatch("onOpen")
            }
        }

        function oe() {
            var e = localStorage.getItem("fslightbox-scrollbar-width");
            if (e) return e;
            var t = function () {
                var e = document.createElement("div"), t = e.style;
                return t.visibility = "hidden", t.width = "100px", t.msOverflowStyle = "scrollbar", t.overflow = "scroll", e
            }(), n = function () {
                var e = document.createElement("div");
                return e.style.width = "100%", e
            }();
            document.body.appendChild(t);
            var o = t.offsetWidth;
            t.appendChild(n);
            var i = n.offsetWidth;
            document.body.removeChild(t);
            var s = o - i;
            return localStorage.setItem("fslightbox-scrollbar-width", s.toString()), s
        }

        function ie(e, t, n) {
            return (ie = se() ? Reflect.construct : function (e, t, n) {
                var o = [null];
                o.push.apply(o, t);
                var i = new (Function.bind.apply(e, o));
                return n && re(i, n.prototype), i
            }).apply(null, arguments)
        }

        function se() {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], (function () {
                }))), !0
            } catch (e) {
                return !1
            }
        }

        function re(e, t) {
            return (re = Object.setPrototypeOf || function (e, t) {
                return e.__proto__ = t, e
            })(e, t)
        }

        function ce(e) {
            return function (e) {
                if (Array.isArray(e)) return ae(e)
            }(e) || function (e) {
                if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e)
            }(e) || function (e, t) {
                if (!e) return;
                if ("string" == typeof e) return ae(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                "Object" === n && e.constructor && (n = e.constructor.name);
                if ("Map" === n || "Set" === n) return Array.from(e);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return ae(e, t)
            }(e) || function () {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }

        function ae(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, o = new Array(t); n < t; n++) o[n] = e[n];
            return o
        }

        function le() {
            for (var e = document.getElementsByTagName("a"), t = function (t) {
                if (!e[t].hasAttribute("data-fslightbox")) return "continue";
                var n = e[t].getAttribute("data-fslightbox"), o = e[t].getAttribute("href");
                fsLightboxInstances[n] || (fsLightboxInstances[n] = new FsLightbox);
                var i = null;
                i = "#" === o.charAt(0) ? document.getElementById(o.substring(1)) : o, fsLightboxInstances[n].props.sources.push(i), fsLightboxInstances[n].elements.a.push(e[t]);
                var s = fsLightboxInstances[n].props.sources.length - 1;
                e[t].onclick = function (e) {
                    e.preventDefault(), fsLightboxInstances[n].open(s)
                }, d("types", "data-type"), d("videosPosters", "data-video-poster"), d("customClasses", "data-class"), d("customClasses", "data-custom-class");
                for (var r = ["href", "data-fslightbox", "data-type", "data-video-poster", "data-class", "data-custom-class"], c = e[t].attributes, a = fsLightboxInstances[n].props.customAttributes, l = 0; l < c.length; l++) if (-1 === r.indexOf(c[l].name)) {
                    a[s] || (a[s] = {});
                    var u = c[l].name.substr(5);
                    a[s][u] = c[l].value
                }

                function d(o, i) {
                    e[t].hasAttribute(i) && (fsLightboxInstances[n].props[o][s] = e[t].getAttribute(i))
                }
            }, n = 0; n < e.length; n++) t(n);
            var o = Object.keys(fsLightboxInstances);
            window.fsLightbox = fsLightboxInstances[o[o.length - 1]]
        }

        window.FsLightbox = function () {
            var e = this;
            this.props = {
                sources: [],
                customAttributes: [],
                customClasses: [],
                types: [],
                videosPosters: [],
                slideDistance: .3
            }, this.data = {
                isInitialized: !1,
                maxSourceWidth: 0,
                maxSourceHeight: 0,
                scrollbarWidth: oe(),
                isFullscreenOpen: !1
            }, this.slideSwipingProps = {
                isSwiping: !1,
                downClientX: null,
                isSourceDownEventTarget: !1,
                swipedX: 0
            }, this.stageIndexes = {}, this.elements = {
                a: [],
                container: null,
                slideSwipingHoverer: null,
                sourcesOutersWrapper: null,
                sources: [],
                sourcesOuters: [],
                sourcesInners: []
            }, this.componentsServices = {
                enterFullscreen: null, exitFullscreen: null, setSlideNumber: function () {
                }
            }, this.resolve = function (t) {
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
                return n.unshift(e), ie(t, ce(n))
            }, this.collections = {
                sourcesOutersTransformers: [],
                sourcesLoadsHandlers: [],
                sourcesRenderFunctions: [],
                sourcesStylers: []
            }, this.core = {
                classFacade: {},
                eventsDispatcher: {},
                fullscreenToggler: {},
                globalEventsController: {},
                lightboxCloser: {},
                lightboxOpener: {},
                lightboxUpdater: {},
                scrollbarRecompensor: {},
                slideChangeFacade: {},
                slideIndexChanger: {},
                slideSwipingDown: {},
                sourceDisplayFacade: {},
                stageManager: {},
                windowResizeActioner: {}
            }, ne(this), this.open = function (t) {
                return e.core.lightboxOpener.open(t)
            }, this.close = function () {
                return e.core.lightboxCloser.closeLightbox()
            }
        }, window.fsLightboxInstances = {}, le(), window.refreshFsLightbox = function () {
            for (var e in fsLightboxInstances) {
                var t = fsLightboxInstances[e].props;
                fsLightboxInstances[e] = new FsLightbox, fsLightboxInstances[e].props = t, fsLightboxInstances[e].props.sources = [], fsLightboxInstances[e].elements.a = []
            }
            le()
        }
    }])
}));
/*!
 * dist/jquery.inputmask.min
 * https://github.com/RobinHerbots/Inputmask
 * Copyright (c) 2010 - 2020 Robin Herbots
 * Licensed under the MIT license
 * Version: 5.0.5-beta.0
 */

!function webpackUniversalModuleDefinition(root, factory) {
    if ("object" == typeof exports && "object" == typeof module) module.exports = factory(require("jquery")); else if ("function" == typeof define && define.amd) define(["jquery"], factory); else {
        var a = "object" == typeof exports ? factory(require("jquery")) : factory(root.jQuery);
        for (var i in a) ("object" == typeof exports ? exports : root)[i] = a[i]
    }
}(window, function (__WEBPACK_EXTERNAL_MODULE__8__) {
    return modules = [function (module) {
        module.exports = JSON.parse('{"BACKSPACE":8,"BACKSPACE_SAFARI":127,"DELETE":46,"DOWN":40,"END":35,"ENTER":13,"ESCAPE":27,"HOME":36,"INSERT":45,"LEFT":37,"PAGE_DOWN":34,"PAGE_UP":33,"RIGHT":39,"SPACE":32,"TAB":9,"UP":38,"X":88,"CONTROL":17,"KEY_229":229}')
    }, function (module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0}), exports.default = void 0, __webpack_require__(9);
        var _mask = __webpack_require__(10), _inputmask = _interopRequireDefault(__webpack_require__(12)),
            _window = _interopRequireDefault(__webpack_require__(13)), _maskLexer = __webpack_require__(17),
            _validationTests = __webpack_require__(3), _positioning = __webpack_require__(2),
            _validation = __webpack_require__(4), _inputHandling = __webpack_require__(5),
            _eventruler = __webpack_require__(11), _definitions = _interopRequireDefault(__webpack_require__(18)),
            _defaults = _interopRequireDefault(__webpack_require__(19));

        function _typeof(obj) {
            return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function _typeof(obj) {
                return typeof obj
            } : function _typeof(obj) {
                return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj
            }, _typeof(obj)
        }

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {default: obj}
        }

        var document = _window.default.document, dataKey = "_inputmask_opts";

        function Inputmask(alias, options, internal) {
            if (!(this instanceof Inputmask)) return new Inputmask(alias, options, internal);
            this.dependencyLib = _inputmask.default, this.el = void 0, this.events = {}, this.maskset = void 0, !0 !== internal && ("[object Object]" === Object.prototype.toString.call(alias) ? options = alias : (options = options || {}, alias && (options.alias = alias)), this.opts = _inputmask.default.extend(!0, {}, this.defaults, options), this.noMasksCache = options && void 0 !== options.definitions, this.userOptions = options || {}, resolveAlias(this.opts.alias, options, this.opts)), this.refreshValue = !1, this.undoValue = void 0, this.$el = void 0, this.skipKeyPressEvent = !1, this.skipInputEvent = !1, this.validationEvent = !1, this.ignorable = !1, this.maxLength, this.mouseEnter = !1, this.originalPlaceholder = void 0, this.isComposing = !1
        }

        function resolveAlias(aliasStr, options, opts) {
            var aliasDefinition = Inputmask.prototype.aliases[aliasStr];
            return aliasDefinition ? (aliasDefinition.alias && resolveAlias(aliasDefinition.alias, void 0, opts), _inputmask.default.extend(!0, opts, aliasDefinition), _inputmask.default.extend(!0, opts, options), !0) : (null === opts.mask && (opts.mask = aliasStr), !1)
        }

        function importAttributeOptions(npt, opts, userOptions, dataAttribute) {
            function importOption(option, optionData) {
                var attrOption = "" === dataAttribute ? option : dataAttribute + "-" + option;
                optionData = void 0 !== optionData ? optionData : npt.getAttribute(attrOption), null !== optionData && ("string" == typeof optionData && (0 === option.indexOf("on") ? optionData = _window.default[optionData] : "false" === optionData ? optionData = !1 : "true" === optionData && (optionData = !0)), userOptions[option] = optionData)
            }

            if (!0 === opts.importDataAttributes) {
                var attrOptions = npt.getAttribute(dataAttribute), option, dataoptions, optionData, p;
                if (attrOptions && "" !== attrOptions && (attrOptions = attrOptions.replace(/'/g, '"'), dataoptions = JSON.parse("{" + attrOptions + "}")), dataoptions) for (p in optionData = void 0, dataoptions) if ("alias" === p.toLowerCase()) {
                    optionData = dataoptions[p];
                    break
                }
                for (option in importOption("alias", optionData), userOptions.alias && resolveAlias(userOptions.alias, userOptions, opts), opts) {
                    if (dataoptions) for (p in optionData = void 0, dataoptions) if (p.toLowerCase() === option.toLowerCase()) {
                        optionData = dataoptions[p];
                        break
                    }
                    importOption(option, optionData)
                }
            }
            return _inputmask.default.extend(!0, opts, userOptions), "rtl" !== npt.dir && !opts.rightAlign || (npt.style.textAlign = "right"), "rtl" !== npt.dir && !opts.numericInput || (npt.dir = "ltr", npt.removeAttribute("dir"), opts.isRTL = !0), Object.keys(userOptions).length
        }

        Inputmask.prototype = {
            dataAttribute: "data-inputmask",
            defaults: _defaults.default,
            definitions: _definitions.default,
            aliases: {},
            masksCache: {},
            get isRTL() {
                return this.opts.isRTL || this.opts.numericInput
            },
            mask: function mask(elems) {
                var that = this;
                return "string" == typeof elems && (elems = document.getElementById(elems) || document.querySelectorAll(elems)), elems = elems.nodeName ? [elems] : elems, elems.forEach(function (el, ndx) {
                    var scopedOpts = _inputmask.default.extend(!0, {}, that.opts);
                    if (importAttributeOptions(el, scopedOpts, _inputmask.default.extend(!0, {}, that.userOptions), that.dataAttribute)) {
                        var maskset = (0, _maskLexer.generateMaskSet)(scopedOpts, that.noMasksCache);
                        void 0 !== maskset && (void 0 !== el.inputmask && (el.inputmask.opts.autoUnmask = !0, el.inputmask.remove()), el.inputmask = new Inputmask(void 0, void 0, !0), el.inputmask.opts = scopedOpts, el.inputmask.noMasksCache = that.noMasksCache, el.inputmask.userOptions = _inputmask.default.extend(!0, {}, that.userOptions), el.inputmask.el = el, el.inputmask.$el = (0, _inputmask.default)(el), el.inputmask.maskset = maskset, _inputmask.default.data(el, dataKey, that.userOptions), _mask.mask.call(el.inputmask))
                    }
                }), elems && elems[0] && elems[0].inputmask || this
            },
            option: function option(options, noremask) {
                return "string" == typeof options ? this.opts[options] : "object" === _typeof(options) ? (_inputmask.default.extend(this.userOptions, options), this.el && !0 !== noremask && this.mask(this.el), this) : void 0
            },
            unmaskedvalue: function unmaskedvalue(value) {
                if (this.maskset = this.maskset || (0, _maskLexer.generateMaskSet)(this.opts, this.noMasksCache), void 0 === this.el || void 0 !== value) {
                    var valueBuffer = ("function" == typeof this.opts.onBeforeMask && this.opts.onBeforeMask.call(this, value, this.opts) || value).split("");
                    _inputHandling.checkVal.call(this, void 0, !1, !1, valueBuffer), "function" == typeof this.opts.onBeforeWrite && this.opts.onBeforeWrite.call(this, void 0, _positioning.getBuffer.call(this), 0, this.opts)
                }
                return _inputHandling.unmaskedvalue.call(this, this.el)
            },
            remove: function remove() {
                if (this.el) {
                    _inputmask.default.data(this.el, dataKey, null);
                    var cv = this.opts.autoUnmask ? (0, _inputHandling.unmaskedvalue)(this.el) : this._valueGet(this.opts.autoUnmask),
                        valueProperty;
                    cv !== _positioning.getBufferTemplate.call(this).join("") ? this._valueSet(cv, this.opts.autoUnmask) : this._valueSet(""), _eventruler.EventRuler.off(this.el), Object.getOwnPropertyDescriptor && Object.getPrototypeOf ? (valueProperty = Object.getOwnPropertyDescriptor(Object.getPrototypeOf(this.el), "value"), valueProperty && this.__valueGet && Object.defineProperty(this.el, "value", {
                        get: this.__valueGet,
                        set: this.__valueSet,
                        configurable: !0
                    })) : document.__lookupGetter__ && this.el.__lookupGetter__("value") && this.__valueGet && (this.el.__defineGetter__("value", this.__valueGet), this.el.__defineSetter__("value", this.__valueSet)), this.el.inputmask = void 0
                }
                return this.el
            },
            getemptymask: function getemptymask() {
                return this.maskset = this.maskset || (0, _maskLexer.generateMaskSet)(this.opts, this.noMasksCache), _positioning.getBufferTemplate.call(this).join("")
            },
            hasMaskedValue: function hasMaskedValue() {
                return !this.opts.autoUnmask
            },
            isComplete: function isComplete() {
                return this.maskset = this.maskset || (0, _maskLexer.generateMaskSet)(this.opts, this.noMasksCache), _validation.isComplete.call(this, _positioning.getBuffer.call(this))
            },
            getmetadata: function getmetadata() {
                if (this.maskset = this.maskset || (0, _maskLexer.generateMaskSet)(this.opts, this.noMasksCache), Array.isArray(this.maskset.metadata)) {
                    var maskTarget = _validationTests.getMaskTemplate.call(this, !0, 0, !1).join("");
                    return this.maskset.metadata.forEach(function (mtdt) {
                        return mtdt.mask !== maskTarget || (maskTarget = mtdt, !1)
                    }), maskTarget
                }
                return this.maskset.metadata
            },
            isValid: function isValid(value) {
                if (this.maskset = this.maskset || (0, _maskLexer.generateMaskSet)(this.opts, this.noMasksCache), value) {
                    var valueBuffer = ("function" == typeof this.opts.onBeforeMask && this.opts.onBeforeMask.call(this, value, this.opts) || value).split("");
                    _inputHandling.checkVal.call(this, void 0, !0, !1, valueBuffer)
                } else value = this.isRTL ? _positioning.getBuffer.call(this).slice().reverse().join("") : _positioning.getBuffer.call(this).join("");
                for (var buffer = _positioning.getBuffer.call(this), rl = _positioning.determineLastRequiredPosition.call(this), lmib = buffer.length - 1; rl < lmib && !_positioning.isMask.call(this, lmib); lmib--) ;
                return buffer.splice(rl, lmib + 1 - rl), _validation.isComplete.call(this, buffer) && value === (this.isRTL ? _positioning.getBuffer.call(this).slice().reverse().join("") : _positioning.getBuffer.call(this).join(""))
            },
            format: function format(value, metadata) {
                this.maskset = this.maskset || (0, _maskLexer.generateMaskSet)(this.opts, this.noMasksCache);
                var valueBuffer = ("function" == typeof this.opts.onBeforeMask && this.opts.onBeforeMask.call(this, value, this.opts) || value).split("");
                _inputHandling.checkVal.call(this, void 0, !0, !1, valueBuffer);
                var formattedValue = this.isRTL ? _positioning.getBuffer.call(this).slice().reverse().join("") : _positioning.getBuffer.call(this).join("");
                return metadata ? {value: formattedValue, metadata: this.getmetadata()} : formattedValue
            },
            setValue: function setValue(value) {
                this.el && (0, _inputmask.default)(this.el).trigger("setvalue", [value])
            },
            analyseMask: _maskLexer.analyseMask
        }, Inputmask.extendDefaults = function (options) {
            _inputmask.default.extend(!0, Inputmask.prototype.defaults, options)
        }, Inputmask.extendDefinitions = function (definition) {
            _inputmask.default.extend(!0, Inputmask.prototype.definitions, definition)
        }, Inputmask.extendAliases = function (alias) {
            _inputmask.default.extend(!0, Inputmask.prototype.aliases, alias)
        }, Inputmask.format = function (value, options, metadata) {
            return Inputmask(options).format(value, metadata)
        }, Inputmask.unmask = function (value, options) {
            return Inputmask(options).unmaskedvalue(value)
        }, Inputmask.isValid = function (value, options) {
            return Inputmask(options).isValid(value)
        }, Inputmask.remove = function (elems) {
            "string" == typeof elems && (elems = document.getElementById(elems) || document.querySelectorAll(elems)), elems = elems.nodeName ? [elems] : elems, elems.forEach(function (el) {
                el.inputmask && el.inputmask.remove()
            })
        }, Inputmask.setValue = function (elems, value) {
            "string" == typeof elems && (elems = document.getElementById(elems) || document.querySelectorAll(elems)), elems = elems.nodeName ? [elems] : elems, elems.forEach(function (el) {
                el.inputmask ? el.inputmask.setValue(value) : (0, _inputmask.default)(el).trigger("setvalue", [value])
            })
        }, Inputmask.dependencyLib = _inputmask.default, _window.default.Inputmask = Inputmask;
        var _default = Inputmask;
        exports.default = _default
    }, function (module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0}), exports.caret = caret, exports.determineLastRequiredPosition = determineLastRequiredPosition, exports.determineNewCaretPosition = determineNewCaretPosition, exports.getBuffer = getBuffer, exports.getBufferTemplate = getBufferTemplate, exports.getLastValidPosition = getLastValidPosition, exports.isMask = isMask, exports.resetMaskSet = resetMaskSet, exports.seekNext = seekNext, exports.seekPrevious = seekPrevious, exports.translatePosition = translatePosition;
        var _validationTests = __webpack_require__(3), _validation = __webpack_require__(4),
            _mask = __webpack_require__(10);

        function caret(input, begin, end, notranslate, isDelete) {
            var inputmask = this, opts = this.opts, range;
            if (void 0 === begin) return "selectionStart" in input && "selectionEnd" in input ? (begin = input.selectionStart, end = input.selectionEnd) : window.getSelection ? (range = window.getSelection().getRangeAt(0), range.commonAncestorContainer.parentNode !== input && range.commonAncestorContainer !== input || (begin = range.startOffset, end = range.endOffset)) : document.selection && document.selection.createRange && (range = document.selection.createRange(), begin = 0 - range.duplicate().moveStart("character", -input.inputmask._valueGet().length), end = begin + range.text.length), {
                begin: notranslate ? begin : translatePosition.call(this, begin),
                end: notranslate ? end : translatePosition.call(this, end)
            };
            if (Array.isArray(begin) && (end = this.isRTL ? begin[0] : begin[1], begin = this.isRTL ? begin[1] : begin[0]), void 0 !== begin.begin && (end = this.isRTL ? begin.begin : begin.end, begin = this.isRTL ? begin.end : begin.begin), "number" == typeof begin) {
                begin = notranslate ? begin : translatePosition.call(this, begin), end = notranslate ? end : translatePosition.call(this, end), end = "number" == typeof end ? end : begin;
                var scrollCalc = parseInt(((input.ownerDocument.defaultView || window).getComputedStyle ? (input.ownerDocument.defaultView || window).getComputedStyle(input, null) : input.currentStyle).fontSize) * end;
                if (input.scrollLeft = scrollCalc > input.scrollWidth ? scrollCalc : 0, input.inputmask.caretPos = {
                    begin: begin,
                    end: end
                }, opts.insertModeVisual && !1 === opts.insertMode && begin === end && (isDelete || end++), input === (input.inputmask.shadowRoot || document).activeElement) if ("setSelectionRange" in input) input.setSelectionRange(begin, end); else if (window.getSelection) {
                    if (range = document.createRange(), void 0 === input.firstChild || null === input.firstChild) {
                        var textNode = document.createTextNode("");
                        input.appendChild(textNode)
                    }
                    range.setStart(input.firstChild, begin < input.inputmask._valueGet().length ? begin : input.inputmask._valueGet().length), range.setEnd(input.firstChild, end < input.inputmask._valueGet().length ? end : input.inputmask._valueGet().length), range.collapse(!0);
                    var sel = window.getSelection();
                    sel.removeAllRanges(), sel.addRange(range)
                } else input.createTextRange && (range = input.createTextRange(), range.collapse(!0), range.moveEnd("character", end), range.moveStart("character", begin), range.select())
            }
        }

        function determineLastRequiredPosition(returnDefinition) {
            var inputmask = this, maskset = this.maskset, $ = this.dependencyLib,
                buffer = _validationTests.getMaskTemplate.call(this, !0, getLastValidPosition.call(this), !0, !0),
                bl = buffer.length, pos, lvp = getLastValidPosition.call(this), positions = {},
                lvTest = maskset.validPositions[lvp], ndxIntlzr = void 0 !== lvTest ? lvTest.locator.slice() : void 0,
                testPos;
            for (pos = lvp + 1; pos < buffer.length; pos++) testPos = _validationTests.getTestTemplate.call(this, pos, ndxIntlzr, pos - 1), ndxIntlzr = testPos.locator.slice(), positions[pos] = $.extend(!0, {}, testPos);
            var lvTestAlt = lvTest && void 0 !== lvTest.alternation ? lvTest.locator[lvTest.alternation] : void 0;
            for (pos = bl - 1; lvp < pos && (testPos = positions[pos], (testPos.match.optionality || testPos.match.optionalQuantifier && testPos.match.newBlockMarker || lvTestAlt && (lvTestAlt !== positions[pos].locator[lvTest.alternation] && 1 != testPos.match.static || !0 === testPos.match.static && testPos.locator[lvTest.alternation] && _validation.checkAlternationMatch.call(this, testPos.locator[lvTest.alternation].toString().split(","), lvTestAlt.toString().split(",")) && "" !== _validationTests.getTests.call(this, pos)[0].def)) && buffer[pos] === _validationTests.getPlaceholder.call(this, pos, testPos.match)); pos--) bl--;
            return returnDefinition ? {l: bl, def: positions[bl] ? positions[bl].match : void 0} : bl
        }

        function determineNewCaretPosition(selectedCaret, tabbed) {
            var inputmask = this, maskset = this.maskset, opts = this.opts;

            function doRadixFocus(clickPos) {
                if ("" !== opts.radixPoint && 0 !== opts.digits) {
                    var vps = maskset.validPositions;
                    if (void 0 === vps[clickPos] || vps[clickPos].input === _validationTests.getPlaceholder.call(inputmask, clickPos)) {
                        if (clickPos < seekNext.call(inputmask, -1)) return !0;
                        var radixPos = getBuffer.call(inputmask).indexOf(opts.radixPoint);
                        if (-1 !== radixPos) {
                            for (var vp in vps) if (vps[vp] && radixPos < vp && vps[vp].input !== _validationTests.getPlaceholder.call(inputmask, vp)) return !1;
                            return !0
                        }
                    }
                }
                return !1
            }

            if (tabbed && (inputmask.isRTL ? selectedCaret.end = selectedCaret.begin : selectedCaret.begin = selectedCaret.end), selectedCaret.begin === selectedCaret.end) {
                switch (opts.positionCaretOnClick) {
                    case"none":
                        break;
                    case"select":
                        selectedCaret = {begin: 0, end: getBuffer.call(inputmask).length};
                        break;
                    case"ignore":
                        selectedCaret.end = selectedCaret.begin = seekNext.call(inputmask, getLastValidPosition.call(inputmask));
                        break;
                    case"radixFocus":
                        if (doRadixFocus(selectedCaret.begin)) {
                            var radixPos = getBuffer.call(inputmask).join("").indexOf(opts.radixPoint);
                            selectedCaret.end = selectedCaret.begin = opts.numericInput ? seekNext.call(inputmask, radixPos) : radixPos;
                            break
                        }
                    default:
                        var clickPosition = selectedCaret.begin,
                            lvclickPosition = getLastValidPosition.call(inputmask, clickPosition, !0),
                            lastPosition = seekNext.call(inputmask, -1 !== lvclickPosition || isMask.call(inputmask, 0) ? lvclickPosition : -1);
                        if (clickPosition <= lastPosition) selectedCaret.end = selectedCaret.begin = isMask.call(inputmask, clickPosition, !1, !0) ? clickPosition : seekNext.call(inputmask, clickPosition); else {
                            var lvp = maskset.validPositions[lvclickPosition],
                                tt = _validationTests.getTestTemplate.call(inputmask, lastPosition, lvp ? lvp.match.locator : void 0, lvp),
                                placeholder = _validationTests.getPlaceholder.call(inputmask, lastPosition, tt.match);
                            if ("" !== placeholder && getBuffer.call(inputmask)[lastPosition] !== placeholder && !0 !== tt.match.optionalQuantifier && !0 !== tt.match.newBlockMarker || !isMask.call(inputmask, lastPosition, opts.keepStatic, !0) && tt.match.def === placeholder) {
                                var newPos = seekNext.call(inputmask, lastPosition);
                                (newPos <= clickPosition || clickPosition === lastPosition) && (lastPosition = newPos)
                            }
                            selectedCaret.end = selectedCaret.begin = lastPosition
                        }
                }
                return selectedCaret
            }
        }

        function getBuffer(noCache) {
            var inputmask = this, maskset = this.maskset;
            return void 0 !== maskset.buffer && !0 !== noCache || (maskset.buffer = _validationTests.getMaskTemplate.call(this, !0, getLastValidPosition.call(this), !0), void 0 === maskset._buffer && (maskset._buffer = maskset.buffer.slice())), maskset.buffer
        }

        function getBufferTemplate() {
            var inputmask = this, maskset = this.maskset;
            return void 0 === maskset._buffer && (maskset._buffer = _validationTests.getMaskTemplate.call(this, !1, 1), void 0 === maskset.buffer && (maskset.buffer = maskset._buffer.slice())), maskset._buffer
        }

        function getLastValidPosition(closestTo, strict, validPositions) {
            var maskset = this.maskset, before = -1, after = -1, valids = validPositions || maskset.validPositions;
            for (var posNdx in void 0 === closestTo && (closestTo = -1), valids) {
                var psNdx = parseInt(posNdx);
                valids[psNdx] && (strict || !0 !== valids[psNdx].generatedInput) && (psNdx <= closestTo && (before = psNdx), closestTo <= psNdx && (after = psNdx))
            }
            return -1 === before || before == closestTo ? after : -1 == after ? before : closestTo - before < after - closestTo ? before : after
        }

        function isMask(pos, strict, fuzzy) {
            var inputmask = this, maskset = this.maskset, test = _validationTests.getTestTemplate.call(this, pos).match;
            if ("" === test.def && (test = _validationTests.getTest.call(this, pos).match), !0 !== test.static) return test.fn;
            if (!0 === fuzzy && void 0 !== maskset.validPositions[pos] && !0 !== maskset.validPositions[pos].generatedInput) return !0;
            if (!0 !== strict && -1 < pos) {
                if (fuzzy) {
                    var tests = _validationTests.getTests.call(this, pos);
                    return tests.length > 1 + ("" === tests[tests.length - 1].match.def ? 1 : 0)
                }
                var testTemplate = _validationTests.determineTestTemplate.call(this, pos, _validationTests.getTests.call(this, pos)),
                    testPlaceHolder = _validationTests.getPlaceholder.call(this, pos, testTemplate.match);
                return testTemplate.match.def !== testPlaceHolder
            }
            return !1
        }

        function resetMaskSet(soft) {
            var maskset = this.maskset;
            maskset.buffer = void 0, !0 !== soft && (maskset.validPositions = {}, maskset.p = 0)
        }

        function seekNext(pos, newBlock, fuzzy) {
            var inputmask = this;
            void 0 === fuzzy && (fuzzy = !0);
            for (var position = pos + 1; "" !== _validationTests.getTest.call(this, position).match.def && (!0 === newBlock && (!0 !== _validationTests.getTest.call(this, position).match.newBlockMarker || !isMask.call(this, position, void 0, !0)) || !0 !== newBlock && !isMask.call(this, position, void 0, fuzzy));) position++;
            return position
        }

        function seekPrevious(pos, newBlock) {
            var inputmask = this, position = pos - 1;
            if (pos <= 0) return 0;
            for (; 0 < position && (!0 === newBlock && (!0 !== _validationTests.getTest.call(this, position).match.newBlockMarker || !isMask.call(this, position, void 0, !0)) || !0 !== newBlock && !isMask.call(this, position, void 0, !0));) position--;
            return position
        }

        function translatePosition(pos) {
            var inputmask = this, opts = this.opts, el = this.el;
            return !this.isRTL || "number" != typeof pos || opts.greedy && "" === opts.placeholder || !el || (pos = this._valueGet().length - pos), pos
        }
    }, function (module, exports, __webpack_require__) {
        "use strict";

        function getLocator(tst, align) {
            var locator = (null != tst.alternation ? tst.mloc[getDecisionTaker(tst)] : tst.locator).join("");
            if ("" !== locator) for (; locator.length < align;) locator += "0";
            return locator
        }

        function getDecisionTaker(tst) {
            var decisionTaker = tst.locator[tst.alternation];
            return "string" == typeof decisionTaker && 0 < decisionTaker.length && (decisionTaker = decisionTaker.split(",")[0]), void 0 !== decisionTaker ? decisionTaker.toString() : ""
        }

        function getPlaceholder(pos, test, returnPL) {
            var inputmask = this, opts = this.opts, maskset = this.maskset;
            if (test = test || getTest.call(this, pos).match, void 0 !== test.placeholder || !0 === returnPL) return "function" == typeof test.placeholder ? test.placeholder(opts) : test.placeholder;
            if (!0 !== test.static) return opts.placeholder.charAt(pos % opts.placeholder.length);
            if (-1 < pos && void 0 === maskset.validPositions[pos]) {
                var tests = getTests.call(this, pos), staticAlternations = [], prevTest;
                if (tests.length > 1 + ("" === tests[tests.length - 1].match.def ? 1 : 0)) for (var i = 0; i < tests.length; i++) if ("" !== tests[i].match.def && !0 !== tests[i].match.optionality && !0 !== tests[i].match.optionalQuantifier && (!0 === tests[i].match.static || void 0 === prevTest || !1 !== tests[i].match.fn.test(prevTest.match.def, maskset, pos, !0, opts)) && (staticAlternations.push(tests[i]), !0 === tests[i].match.static && (prevTest = tests[i]), 1 < staticAlternations.length && /[0-9a-bA-Z]/.test(staticAlternations[0].match.def))) return opts.placeholder.charAt(pos % opts.placeholder.length)
            }
            return test.def
        }

        function getMaskTemplate(baseOnInput, minimalPos, includeMode, noJit, clearOptionalTail) {
            var inputmask = this, opts = this.opts, maskset = this.maskset, greedy = opts.greedy;
            clearOptionalTail && (opts.greedy = !1), minimalPos = minimalPos || 0;
            var maskTemplate = [], ndxIntlzr, pos = 0, test, testPos, jitRenderStatic;
            do {
                if (!0 === baseOnInput && maskset.validPositions[pos]) testPos = clearOptionalTail && !0 === maskset.validPositions[pos].match.optionality && void 0 === maskset.validPositions[pos + 1] && (!0 === maskset.validPositions[pos].generatedInput || maskset.validPositions[pos].input == opts.skipOptionalPartCharacter && 0 < pos) ? determineTestTemplate.call(this, pos, getTests.call(this, pos, ndxIntlzr, pos - 1)) : maskset.validPositions[pos], test = testPos.match, ndxIntlzr = testPos.locator.slice(), maskTemplate.push(!0 === includeMode ? testPos.input : !1 === includeMode ? test.nativeDef : getPlaceholder.call(this, pos, test)); else {
                    testPos = getTestTemplate.call(this, pos, ndxIntlzr, pos - 1), test = testPos.match, ndxIntlzr = testPos.locator.slice();
                    var jitMasking = !0 !== noJit && (!1 !== opts.jitMasking ? opts.jitMasking : test.jit);
                    jitRenderStatic = jitRenderStatic && test.static && test.def !== opts.groupSeparator && null === test.fn || maskset.validPositions[pos - 1] && test.static && test.def !== opts.groupSeparator && null === test.fn, jitRenderStatic || !1 === jitMasking || void 0 === jitMasking || "number" == typeof jitMasking && isFinite(jitMasking) && pos < jitMasking ? maskTemplate.push(!1 === includeMode ? test.nativeDef : getPlaceholder.call(this, pos, test)) : jitRenderStatic = !1
                }
                pos++
            } while ((void 0 === this.maxLength || pos < this.maxLength) && (!0 !== test.static || "" !== test.def) || pos < minimalPos);
            return "" === maskTemplate[maskTemplate.length - 1] && maskTemplate.pop(), !1 === includeMode && void 0 !== maskset.maskLength || (maskset.maskLength = pos - 1), opts.greedy = greedy, maskTemplate
        }

        function getTestTemplate(pos, ndxIntlzr, tstPs) {
            var inputmask = this, maskset = this.maskset;
            return maskset.validPositions[pos] || determineTestTemplate.call(this, pos, getTests.call(this, pos, ndxIntlzr ? ndxIntlzr.slice() : ndxIntlzr, tstPs))
        }

        function determineTestTemplate(pos, tests) {
            var inputmask = this, opts = this.opts;
            pos = 0 < pos ? pos - 1 : 0;
            for (var altTest = getTest.call(this, pos), targetLocator = getLocator(altTest), tstLocator, closest, bestMatch, ndx = 0; ndx < tests.length; ndx++) {
                var tst = tests[ndx];
                tstLocator = getLocator(tst, targetLocator.length);
                var distance = Math.abs(tstLocator - targetLocator);
                (void 0 === closest || "" !== tstLocator && distance < closest || bestMatch && !opts.greedy && bestMatch.match.optionality && "master" === bestMatch.match.newBlockMarker && (!tst.match.optionality || !tst.match.newBlockMarker) || bestMatch && bestMatch.match.optionalQuantifier && !tst.match.optionalQuantifier) && (closest = distance, bestMatch = tst)
            }
            return bestMatch
        }

        function getTest(pos, tests) {
            var inputmask = this, maskset = this.maskset;
            return maskset.validPositions[pos] ? maskset.validPositions[pos] : (tests || getTests.call(this, pos))[0]
        }

        function getTests(pos, ndxIntlzr, tstPs) {
            var inputmask = this, $ = this.dependencyLib, maskset = this.maskset, opts = this.opts, el = this.el,
                maskTokens = maskset.maskToken, testPos = ndxIntlzr ? tstPs : 0,
                ndxInitializer = ndxIntlzr ? ndxIntlzr.slice() : [0], matches = [], insertStop = !1, latestMatch,
                cacheDependency = ndxIntlzr ? ndxIntlzr.join("") : "";

            function resolveTestFromToken(maskToken, ndxInitializer, loopNdx, quantifierRecurse) {
                function handleMatch(match, loopNdx, quantifierRecurse) {
                    function isFirstMatch(latestMatch, tokenGroup) {
                        var firstMatch = 0 === tokenGroup.matches.indexOf(latestMatch);
                        return firstMatch || tokenGroup.matches.every(function (match, ndx) {
                            return !0 === match.isQuantifier ? firstMatch = isFirstMatch(latestMatch, tokenGroup.matches[ndx - 1]) : Object.prototype.hasOwnProperty.call(match, "matches") && (firstMatch = isFirstMatch(latestMatch, match)), !firstMatch
                        }), firstMatch
                    }

                    function resolveNdxInitializer(pos, alternateNdx, targetAlternation) {
                        var bestMatch, indexPos;
                        if ((maskset.tests[pos] || maskset.validPositions[pos]) && (maskset.tests[pos] || [maskset.validPositions[pos]]).every(function (lmnt, ndx) {
                            if (lmnt.mloc[alternateNdx]) return bestMatch = lmnt, !1;
                            var alternation = void 0 !== targetAlternation ? targetAlternation : lmnt.alternation,
                                ndxPos = void 0 !== lmnt.locator[alternation] ? lmnt.locator[alternation].toString().indexOf(alternateNdx) : -1;
                            return (void 0 === indexPos || ndxPos < indexPos) && -1 !== ndxPos && (bestMatch = lmnt, indexPos = ndxPos), !0
                        }), bestMatch) {
                            var bestMatchAltIndex = bestMatch.locator[bestMatch.alternation],
                                locator = bestMatch.mloc[alternateNdx] || bestMatch.mloc[bestMatchAltIndex] || bestMatch.locator;
                            return locator.slice((void 0 !== targetAlternation ? targetAlternation : bestMatch.alternation) + 1)
                        }
                        return void 0 !== targetAlternation ? resolveNdxInitializer(pos, alternateNdx) : void 0
                    }

                    function isSubsetOf(source, target) {
                        function expand(pattern) {
                            for (var expanded = [], start = -1, end, i = 0, l = pattern.length; i < l; i++) if ("-" === pattern.charAt(i)) for (end = pattern.charCodeAt(i + 1); ++start < end;) expanded.push(String.fromCharCode(start)); else start = pattern.charCodeAt(i), expanded.push(pattern.charAt(i));
                            return expanded.join("")
                        }

                        return source.match.def === target.match.nativeDef || !(!(opts.regex || source.match.fn instanceof RegExp && target.match.fn instanceof RegExp) || !0 === source.match.static || !0 === target.match.static) && -1 !== expand(target.match.fn.toString().replace(/[[\]/]/g, "")).indexOf(expand(source.match.fn.toString().replace(/[[\]/]/g, "")))
                    }

                    function staticCanMatchDefinition(source, target) {
                        return !0 === source.match.static && !0 !== target.match.static && target.match.fn.test(source.match.def, maskset, pos, !1, opts, !1)
                    }

                    function setMergeLocators(targetMatch, altMatch) {
                        var alternationNdx = targetMatch.alternation,
                            shouldMerge = void 0 === altMatch || alternationNdx === altMatch.alternation && -1 === targetMatch.locator[alternationNdx].toString().indexOf(altMatch.locator[alternationNdx]);
                        if (!shouldMerge && alternationNdx > altMatch.alternation) for (var i = altMatch.alternation; i < alternationNdx; i++) if (targetMatch.locator[i] !== altMatch.locator[i]) {
                            alternationNdx = i, shouldMerge = !0;
                            break
                        }
                        if (shouldMerge) {
                            targetMatch.mloc = targetMatch.mloc || {};
                            var locNdx = targetMatch.locator[alternationNdx];
                            if (void 0 !== locNdx) {
                                if ("string" == typeof locNdx && (locNdx = locNdx.split(",")[0]), void 0 === targetMatch.mloc[locNdx] && (targetMatch.mloc[locNdx] = targetMatch.locator.slice()), void 0 !== altMatch) {
                                    for (var ndx in altMatch.mloc) "string" == typeof ndx && (ndx = ndx.split(",")[0]), void 0 === targetMatch.mloc[ndx] && (targetMatch.mloc[ndx] = altMatch.mloc[ndx]);
                                    targetMatch.locator[alternationNdx] = Object.keys(targetMatch.mloc).join(",")
                                }
                                return !0
                            }
                            targetMatch.alternation = void 0
                        }
                        return !1
                    }

                    function isSameLevel(targetMatch, altMatch) {
                        if (targetMatch.locator.length !== altMatch.locator.length) return !1;
                        for (var locNdx = targetMatch.alternation + 1; locNdx < targetMatch.locator.length; locNdx++) if (targetMatch.locator[locNdx] !== altMatch.locator[locNdx]) return !1;
                        return !0
                    }

                    if (testPos > pos + opts._maxTestPos) throw"Inputmask: There is probably an error in your mask definition or in the code. Create an issue on github with an example of the mask you are using. " + maskset.mask;
                    if (testPos === pos && void 0 === match.matches) return matches.push({
                        match: match,
                        locator: loopNdx.reverse(),
                        cd: cacheDependency,
                        mloc: {}
                    }), !0;
                    if (void 0 !== match.matches) {
                        if (match.isGroup && quantifierRecurse !== match) {
                            if (match = handleMatch(maskToken.matches[maskToken.matches.indexOf(match) + 1], loopNdx, quantifierRecurse), match) return !0
                        } else if (match.isOptional) {
                            var optionalToken = match, mtchsNdx = matches.length;
                            if (match = resolveTestFromToken(match, ndxInitializer, loopNdx, quantifierRecurse), match) {
                                if (matches.forEach(function (mtch, ndx) {
                                    mtchsNdx <= ndx && (mtch.match.optionality = !0)
                                }), latestMatch = matches[matches.length - 1].match, void 0 !== quantifierRecurse || !isFirstMatch(latestMatch, optionalToken)) return !0;
                                insertStop = !0, testPos = pos
                            }
                        } else if (match.isAlternator) {
                            var alternateToken = match, malternateMatches = [], maltMatches,
                                currentMatches = matches.slice(), loopNdxCnt = loopNdx.length,
                                altIndex = 0 < ndxInitializer.length ? ndxInitializer.shift() : -1;
                            if (-1 === altIndex || "string" == typeof altIndex) {
                                var currentPos = testPos, ndxInitializerClone = ndxInitializer.slice(),
                                    altIndexArr = [], amndx;
                                if ("string" == typeof altIndex) altIndexArr = altIndex.split(","); else for (amndx = 0; amndx < alternateToken.matches.length; amndx++) altIndexArr.push(amndx.toString());
                                if (void 0 !== maskset.excludes[pos]) {
                                    for (var altIndexArrClone = altIndexArr.slice(), i = 0, exl = maskset.excludes[pos].length; i < exl; i++) {
                                        var excludeSet = maskset.excludes[pos][i].toString().split(":");
                                        loopNdx.length == excludeSet[1] && altIndexArr.splice(altIndexArr.indexOf(excludeSet[0]), 1)
                                    }
                                    0 === altIndexArr.length && (delete maskset.excludes[pos], altIndexArr = altIndexArrClone)
                                }
                                (!0 === opts.keepStatic || isFinite(parseInt(opts.keepStatic)) && currentPos >= opts.keepStatic) && (altIndexArr = altIndexArr.slice(0, 1));
                                for (var unMatchedAlternation = !1, ndx = 0; ndx < altIndexArr.length; ndx++) {
                                    amndx = parseInt(altIndexArr[ndx]), matches = [], ndxInitializer = "string" == typeof altIndex && resolveNdxInitializer(testPos, amndx, loopNdxCnt) || ndxInitializerClone.slice(), alternateToken.matches[amndx] && handleMatch(alternateToken.matches[amndx], [amndx].concat(loopNdx), quantifierRecurse) ? match = !0 : 0 === ndx && (unMatchedAlternation = !0), maltMatches = matches.slice(), testPos = currentPos, matches = [];
                                    for (var ndx1 = 0; ndx1 < maltMatches.length; ndx1++) {
                                        var altMatch = maltMatches[ndx1], dropMatch = !1;
                                        altMatch.match.jit = altMatch.match.jit || unMatchedAlternation, altMatch.alternation = altMatch.alternation || loopNdxCnt, setMergeLocators(altMatch);
                                        for (var ndx2 = 0; ndx2 < malternateMatches.length; ndx2++) {
                                            var altMatch2 = malternateMatches[ndx2];
                                            if ("string" != typeof altIndex || void 0 !== altMatch.alternation && altIndexArr.includes(altMatch.locator[altMatch.alternation].toString())) {
                                                if (altMatch.match.nativeDef === altMatch2.match.nativeDef) {
                                                    dropMatch = !0, setMergeLocators(altMatch2, altMatch);
                                                    break
                                                }
                                                if (isSubsetOf(altMatch, altMatch2)) {
                                                    setMergeLocators(altMatch, altMatch2) && (dropMatch = !0, malternateMatches.splice(malternateMatches.indexOf(altMatch2), 0, altMatch));
                                                    break
                                                }
                                                if (isSubsetOf(altMatch2, altMatch)) {
                                                    setMergeLocators(altMatch2, altMatch);
                                                    break
                                                }
                                                if (staticCanMatchDefinition(altMatch, altMatch2)) {
                                                    isSameLevel(altMatch, altMatch2) || void 0 !== el.inputmask.userOptions.keepStatic ? setMergeLocators(altMatch, altMatch2) && (dropMatch = !0, malternateMatches.splice(malternateMatches.indexOf(altMatch2), 0, altMatch)) : opts.keepStatic = !0;
                                                    break
                                                }
                                            }
                                        }
                                        dropMatch || malternateMatches.push(altMatch)
                                    }
                                }
                                matches = currentMatches.concat(malternateMatches), testPos = pos, insertStop = 0 < matches.length, match = 0 < malternateMatches.length, ndxInitializer = ndxInitializerClone.slice()
                            } else match = handleMatch(alternateToken.matches[altIndex] || maskToken.matches[altIndex], [altIndex].concat(loopNdx), quantifierRecurse);
                            if (match) return !0
                        } else if (match.isQuantifier && quantifierRecurse !== maskToken.matches[maskToken.matches.indexOf(match) - 1]) for (var qt = match, qndx = 0 < ndxInitializer.length ? ndxInitializer.shift() : 0; qndx < (isNaN(qt.quantifier.max) ? qndx + 1 : qt.quantifier.max) && testPos <= pos; qndx++) {
                            var tokenGroup = maskToken.matches[maskToken.matches.indexOf(qt) - 1];
                            if (match = handleMatch(tokenGroup, [qndx].concat(loopNdx), tokenGroup), match) {
                                if (latestMatch = matches[matches.length - 1].match, latestMatch.optionalQuantifier = qndx >= qt.quantifier.min, latestMatch.jit = (qndx || 1) * tokenGroup.matches.indexOf(latestMatch) >= qt.quantifier.jit, latestMatch.optionalQuantifier && isFirstMatch(latestMatch, tokenGroup)) {
                                    insertStop = !0, testPos = pos;
                                    break
                                }
                                return latestMatch.jit && (maskset.jitOffset[pos] = tokenGroup.matches.length - tokenGroup.matches.indexOf(latestMatch)), !0
                            }
                        } else if (match = resolveTestFromToken(match, ndxInitializer, loopNdx, quantifierRecurse), match) return !0
                    } else testPos++
                }

                for (var tndx = 0 < ndxInitializer.length ? ndxInitializer.shift() : 0; tndx < maskToken.matches.length; tndx++) if (!0 !== maskToken.matches[tndx].isQuantifier) {
                    var match = handleMatch(maskToken.matches[tndx], [tndx].concat(loopNdx), quantifierRecurse);
                    if (match && testPos === pos) return match;
                    if (pos < testPos) break
                }
            }

            function mergeLocators(pos, tests) {
                var locator = [], alternation;
                return Array.isArray(tests) || (tests = [tests]), 0 < tests.length && (void 0 === tests[0].alternation || !0 === opts.keepStatic ? (locator = determineTestTemplate.call(inputmask, pos, tests.slice()).locator.slice(), 0 === locator.length && (locator = tests[0].locator.slice())) : tests.forEach(function (tst) {
                    "" !== tst.def && (0 === locator.length ? (alternation = tst.alternation, locator = tst.locator.slice()) : tst.locator[alternation] && -1 === locator[alternation].toString().indexOf(tst.locator[alternation]) && (locator[alternation] += "," + tst.locator[alternation]))
                })), locator
            }

            if (-1 < pos && (void 0 === inputmask.maxLength || pos < inputmask.maxLength)) {
                if (void 0 === ndxIntlzr) {
                    for (var previousPos = pos - 1, test; void 0 === (test = maskset.validPositions[previousPos] || maskset.tests[previousPos]) && -1 < previousPos;) previousPos--;
                    void 0 !== test && -1 < previousPos && (ndxInitializer = mergeLocators(previousPos, test), cacheDependency = ndxInitializer.join(""), testPos = previousPos)
                }
                if (maskset.tests[pos] && maskset.tests[pos][0].cd === cacheDependency) return maskset.tests[pos];
                for (var mtndx = ndxInitializer.shift(); mtndx < maskTokens.length; mtndx++) {
                    var match = resolveTestFromToken(maskTokens[mtndx], ndxInitializer, [mtndx]);
                    if (match && testPos === pos || pos < testPos) break
                }
            }
            return 0 !== matches.length && !insertStop || matches.push({
                match: {
                    fn: null,
                    static: !0,
                    optionality: !1,
                    casing: null,
                    def: "",
                    placeholder: ""
                }, locator: [], mloc: {}, cd: cacheDependency
            }), void 0 !== ndxIntlzr && maskset.tests[pos] ? $.extend(!0, [], matches) : (maskset.tests[pos] = $.extend(!0, [], matches), maskset.tests[pos])
        }

        Object.defineProperty(exports, "__esModule", {value: !0}), exports.determineTestTemplate = determineTestTemplate, exports.getDecisionTaker = getDecisionTaker, exports.getMaskTemplate = getMaskTemplate, exports.getPlaceholder = getPlaceholder, exports.getTest = getTest, exports.getTests = getTests, exports.getTestTemplate = getTestTemplate
    }, function (module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0}), exports.alternate = alternate, exports.checkAlternationMatch = checkAlternationMatch, exports.isComplete = isComplete, exports.isValid = isValid, exports.refreshFromBuffer = refreshFromBuffer, exports.revalidateMask = revalidateMask, exports.handleRemove = handleRemove;
        var _validationTests = __webpack_require__(3), _keycode = _interopRequireDefault(__webpack_require__(0)),
            _positioning = __webpack_require__(2), _eventhandlers = __webpack_require__(6);

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {default: obj}
        }

        function alternate(maskPos, c, strict, fromIsValid, rAltPos, selection) {
            var inputmask = this, $ = this.dependencyLib, opts = this.opts, maskset = this.maskset,
                validPsClone = $.extend(!0, {}, maskset.validPositions), tstClone = $.extend(!0, {}, maskset.tests),
                lastAlt, alternation, isValidRslt = !1, returnRslt = !1, altPos, prevAltPos, i, validPos, decisionPos,
                lAltPos = void 0 !== rAltPos ? rAltPos : _positioning.getLastValidPosition.call(this), nextPos, input,
                begin, end;
            if (selection && (begin = selection.begin, end = selection.end, selection.begin > selection.end && (begin = selection.end, end = selection.begin)), -1 === lAltPos && void 0 === rAltPos) lastAlt = 0, prevAltPos = _validationTests.getTest.call(this, lastAlt), alternation = prevAltPos.alternation; else for (; 0 <= lAltPos; lAltPos--) if (altPos = maskset.validPositions[lAltPos], altPos && void 0 !== altPos.alternation) {
                if (prevAltPos && prevAltPos.locator[altPos.alternation] !== altPos.locator[altPos.alternation]) break;
                lastAlt = lAltPos, alternation = maskset.validPositions[lastAlt].alternation, prevAltPos = altPos
            }
            if (void 0 !== alternation) {
                decisionPos = parseInt(lastAlt), maskset.excludes[decisionPos] = maskset.excludes[decisionPos] || [], !0 !== maskPos && maskset.excludes[decisionPos].push((0, _validationTests.getDecisionTaker)(prevAltPos) + ":" + prevAltPos.alternation);
                var validInputs = [], resultPos = -1;
                for (i = decisionPos; i < _positioning.getLastValidPosition.call(this, void 0, !0) + 1; i++) -1 === resultPos && maskPos <= i && void 0 !== c && (validInputs.push(c), resultPos = validInputs.length - 1), validPos = maskset.validPositions[i], validPos && !0 !== validPos.generatedInput && (void 0 === selection || i < begin || end <= i) && validInputs.push(validPos.input), delete maskset.validPositions[i];
                for (-1 === resultPos && void 0 !== c && (validInputs.push(c), resultPos = validInputs.length - 1); void 0 !== maskset.excludes[decisionPos] && maskset.excludes[decisionPos].length < 10;) {
                    for (maskset.tests = {}, _positioning.resetMaskSet.call(this, !0), isValidRslt = !0, i = 0; i < validInputs.length && (nextPos = isValidRslt.caret || _positioning.getLastValidPosition.call(this, void 0, !0) + 1, input = validInputs[i], isValidRslt = isValid.call(this, nextPos, input, !1, fromIsValid, !0)); i++) i === resultPos && (returnRslt = isValidRslt), 1 == maskPos && isValidRslt && (returnRslt = {caretPos: i});
                    if (isValidRslt) break;
                    if (_positioning.resetMaskSet.call(this), prevAltPos = _validationTests.getTest.call(this, decisionPos), maskset.validPositions = $.extend(!0, {}, validPsClone), maskset.tests = $.extend(!0, {}, tstClone), !maskset.excludes[decisionPos]) {
                        returnRslt = alternate.call(this, maskPos, c, strict, fromIsValid, decisionPos - 1, selection);
                        break
                    }
                    var decisionTaker = (0, _validationTests.getDecisionTaker)(prevAltPos);
                    if (-1 !== maskset.excludes[decisionPos].indexOf(decisionTaker + ":" + prevAltPos.alternation)) {
                        returnRslt = alternate.call(this, maskPos, c, strict, fromIsValid, decisionPos - 1, selection);
                        break
                    }
                    for (maskset.excludes[decisionPos].push(decisionTaker + ":" + prevAltPos.alternation), i = decisionPos; i < _positioning.getLastValidPosition.call(this, void 0, !0) + 1; i++) delete maskset.validPositions[i]
                }
            }
            return returnRslt && !1 === opts.keepStatic || delete maskset.excludes[decisionPos], returnRslt
        }

        function casing(elem, test, pos) {
            var opts = this.opts, maskset = this.maskset;
            switch (opts.casing || test.casing) {
                case"upper":
                    elem = elem.toUpperCase();
                    break;
                case"lower":
                    elem = elem.toLowerCase();
                    break;
                case"title":
                    var posBefore = maskset.validPositions[pos - 1];
                    elem = 0 === pos || posBefore && posBefore.input === String.fromCharCode(_keycode.default.SPACE) ? elem.toUpperCase() : elem.toLowerCase();
                    break;
                default:
                    if ("function" == typeof opts.casing) {
                        var args = Array.prototype.slice.call(arguments);
                        args.push(maskset.validPositions), elem = opts.casing.apply(this, args)
                    }
            }
            return elem
        }

        function checkAlternationMatch(altArr1, altArr2, na) {
            for (var opts = this.opts, altArrC = opts.greedy ? altArr2 : altArr2.slice(0, 1), isMatch = !1, naArr = void 0 !== na ? na.split(",") : [], naNdx, i = 0; i < naArr.length; i++) -1 !== (naNdx = altArr1.indexOf(naArr[i])) && altArr1.splice(naNdx, 1);
            for (var alndx = 0; alndx < altArr1.length; alndx++) if (altArrC.includes(altArr1[alndx])) {
                isMatch = !0;
                break
            }
            return isMatch
        }

        function handleRemove(input, k, pos, strict, fromIsValid) {
            var inputmask = this, maskset = this.maskset, opts = this.opts;
            if ((opts.numericInput || this.isRTL) && (k === _keycode.default.BACKSPACE ? k = _keycode.default.DELETE : k === _keycode.default.DELETE && (k = _keycode.default.BACKSPACE), this.isRTL)) {
                var pend = pos.end;
                pos.end = pos.begin, pos.begin = pend
            }
            var lvp = _positioning.getLastValidPosition.call(this, void 0, !0), offset;
            if (pos.end >= _positioning.getBuffer.call(this).length && lvp >= pos.end && (pos.end = lvp + 1), k === _keycode.default.BACKSPACE ? pos.end - pos.begin < 1 && (pos.begin = _positioning.seekPrevious.call(this, pos.begin)) : k === _keycode.default.DELETE && pos.begin === pos.end && (pos.end = _positioning.isMask.call(this, pos.end, !0, !0) ? pos.end + 1 : _positioning.seekNext.call(this, pos.end) + 1), !1 !== (offset = revalidateMask.call(this, pos))) {
                if (!0 !== strict && !1 !== opts.keepStatic || null !== opts.regex && -1 !== _validationTests.getTest.call(this, pos.begin).match.def.indexOf("|")) {
                    var result = alternate.call(this, !0);
                    if (result) {
                        var newPos = void 0 !== result.caret ? result.caret : result.pos ? _positioning.seekNext.call(this, result.pos.begin ? result.pos.begin : result.pos) : _positioning.getLastValidPosition.call(this, -1, !0);
                        (k !== _keycode.default.DELETE || pos.begin > newPos) && pos.begin
                    }
                }
                !0 !== strict && (maskset.p = k === _keycode.default.DELETE ? pos.begin + offset : pos.begin)
            }
        }

        function isComplete(buffer) {
            var inputmask = this, opts = this.opts, maskset = this.maskset;
            if ("function" == typeof opts.isComplete) return opts.isComplete(buffer, opts);
            if ("*" !== opts.repeat) {
                var complete = !1, lrp = _positioning.determineLastRequiredPosition.call(this, !0),
                    aml = _positioning.seekPrevious.call(this, lrp.l);
                if (void 0 === lrp.def || lrp.def.newBlockMarker || lrp.def.optionality || lrp.def.optionalQuantifier) {
                    complete = !0;
                    for (var i = 0; i <= aml; i++) {
                        var test = _validationTests.getTestTemplate.call(this, i).match;
                        if (!0 !== test.static && void 0 === maskset.validPositions[i] && !0 !== test.optionality && !0 !== test.optionalQuantifier || !0 === test.static && buffer[i] !== _validationTests.getPlaceholder.call(this, i, test)) {
                            complete = !1;
                            break
                        }
                    }
                }
                return complete
            }
        }

        function isValid(pos, c, strict, fromIsValid, fromAlternate, validateOnly, fromCheckval) {
            var inputmask = this, $ = this.dependencyLib, opts = this.opts, el = inputmask.el,
                maskset = inputmask.maskset;

            function isSelection(posObj) {
                return inputmask.isRTL ? 1 < posObj.begin - posObj.end || posObj.begin - posObj.end == 1 : 1 < posObj.end - posObj.begin || posObj.end - posObj.begin == 1
            }

            strict = !0 === strict;
            var maskPos = pos;

            function processCommandObject(commandObj) {
                if (void 0 !== commandObj) {
                    if (void 0 !== commandObj.remove && (Array.isArray(commandObj.remove) || (commandObj.remove = [commandObj.remove]), commandObj.remove.sort(function (a, b) {
                        return b.pos - a.pos
                    }).forEach(function (lmnt) {
                        revalidateMask.call(inputmask, {begin: lmnt, end: lmnt + 1})
                    }), commandObj.remove = void 0), void 0 !== commandObj.insert && (Array.isArray(commandObj.insert) || (commandObj.insert = [commandObj.insert]), commandObj.insert.sort(function (a, b) {
                        return a.pos - b.pos
                    }).forEach(function (lmnt) {
                        "" !== lmnt.c && isValid.call(inputmask, lmnt.pos, lmnt.c, void 0 === lmnt.strict || lmnt.strict, void 0 !== lmnt.fromIsValid ? lmnt.fromIsValid : fromIsValid)
                    }), commandObj.insert = void 0), commandObj.refreshFromBuffer && commandObj.buffer) {
                        var refresh = commandObj.refreshFromBuffer;
                        refreshFromBuffer.call(inputmask, !0 === refresh ? refresh : refresh.start, refresh.end, commandObj.buffer), commandObj.refreshFromBuffer = void 0
                    }
                    void 0 !== commandObj.rewritePosition && (maskPos = commandObj.rewritePosition, commandObj = !0)
                }
                return commandObj
            }

            function _isValid(position, c, strict) {
                var rslt = !1;
                return _validationTests.getTests.call(inputmask, position).every(function (tst, ndx) {
                    var test = tst.match;
                    if (_positioning.getBuffer.call(inputmask, !0), rslt = null != test.fn ? test.fn.test(c, maskset, position, strict, opts, isSelection(pos)) : (c === test.def || c === opts.skipOptionalPartCharacter) && "" !== test.def && {
                        c: _validationTests.getPlaceholder.call(inputmask, position, test, !0) || test.def,
                        pos: position
                    }, !1 === rslt) return !0;
                    var elem = void 0 !== rslt.c ? rslt.c : c, validatedPos = position;
                    return elem = elem === opts.skipOptionalPartCharacter && !0 === test.static ? _validationTests.getPlaceholder.call(inputmask, position, test, !0) || test.def : elem, rslt = processCommandObject(rslt), !0 !== rslt && void 0 !== rslt.pos && rslt.pos !== position && (validatedPos = rslt.pos), !0 !== rslt && void 0 === rslt.pos && void 0 === rslt.c || !1 === revalidateMask.call(inputmask, pos, $.extend({}, tst, {input: casing.call(inputmask, elem, test, validatedPos)}), fromIsValid, validatedPos) && (rslt = !1), !1
                }), rslt
            }

            void 0 !== pos.begin && (maskPos = inputmask.isRTL ? pos.end : pos.begin);
            var result = !0, positionsClone = $.extend(!0, {}, maskset.validPositions);
            if (!1 === opts.keepStatic && void 0 !== maskset.excludes[maskPos] && !0 !== fromAlternate && !0 !== fromIsValid) for (var i = maskPos; i < (inputmask.isRTL ? pos.begin : pos.end); i++) void 0 !== maskset.excludes[i] && (maskset.excludes[i] = void 0, delete maskset.tests[i]);
            if ("function" == typeof opts.preValidation && !0 !== fromIsValid && !0 !== validateOnly && (result = opts.preValidation.call(el, _positioning.getBuffer.call(inputmask), maskPos, c, isSelection(pos), opts, maskset, pos, strict || fromAlternate), result = processCommandObject(result)), !0 === result) {
                if (void 0 === inputmask.maxLength || maskPos < inputmask.maxLength) {
                    if (result = _isValid(maskPos, c, strict), (!strict || !0 === fromIsValid) && !1 === result && !0 !== validateOnly) {
                        var currentPosValid = maskset.validPositions[maskPos];
                        if (!currentPosValid || !0 !== currentPosValid.match.static || currentPosValid.match.def !== c && c !== opts.skipOptionalPartCharacter) {
                            if (opts.insertMode || void 0 === maskset.validPositions[_positioning.seekNext.call(inputmask, maskPos)] || pos.end > maskPos) {
                                var skip = !1;
                                if (maskset.jitOffset[maskPos] && void 0 === maskset.validPositions[_positioning.seekNext.call(inputmask, maskPos)] && (result = isValid.call(inputmask, maskPos + maskset.jitOffset[maskPos], c, !0), !1 !== result && (!0 !== fromAlternate && (result.caret = maskPos), skip = !0)), pos.end > maskPos && (maskset.validPositions[maskPos] = void 0), !skip && !_positioning.isMask.call(inputmask, maskPos, opts.keepStatic && 0 === maskPos)) for (var nPos = maskPos + 1, snPos = _positioning.seekNext.call(inputmask, maskPos, !1, 0 !== maskPos); nPos <= snPos; nPos++) if (result = _isValid(nPos, c, strict), !1 !== result) {
                                    result = trackbackPositions.call(inputmask, maskPos, void 0 !== result.pos ? result.pos : nPos) || result, maskPos = nPos;
                                    break
                                }
                            }
                        } else result = {caret: _positioning.seekNext.call(inputmask, maskPos)}
                    }
                } else result = !1;
                !1 !== result || !opts.keepStatic || !isComplete.call(inputmask, _positioning.getBuffer.call(inputmask)) && 0 !== maskPos || strict || !0 === fromAlternate ? isSelection(pos) && maskset.tests[maskPos] && 1 < maskset.tests[maskPos].length && opts.keepStatic && !strict && !0 !== fromAlternate && (result = alternate.call(inputmask, !0)) : result = alternate.call(inputmask, maskPos, c, strict, fromIsValid, void 0, pos), !0 === result && (result = {pos: maskPos})
            }
            if ("function" == typeof opts.postValidation && !0 !== fromIsValid && !0 !== validateOnly) {
                var postResult = opts.postValidation.call(el, _positioning.getBuffer.call(inputmask, !0), void 0 !== pos.begin ? inputmask.isRTL ? pos.end : pos.begin : pos, c, result, opts, maskset, strict, fromCheckval);
                void 0 !== postResult && (result = !0 === postResult ? result : postResult)
            }
            result && void 0 === result.pos && (result.pos = maskPos), !1 === result || !0 === validateOnly ? (_positioning.resetMaskSet.call(inputmask, !0), maskset.validPositions = $.extend(!0, {}, positionsClone)) : trackbackPositions.call(inputmask, void 0, maskPos, !0);
            var endResult = processCommandObject(result);
            return endResult
        }

        function positionCanMatchDefinition(pos, testDefinition, opts) {
            for (var inputmask = this, maskset = this.maskset, valid = !1, tests = _validationTests.getTests.call(this, pos), tndx = 0; tndx < tests.length; tndx++) {
                if (tests[tndx].match && (!(tests[tndx].match.nativeDef !== testDefinition.match[opts.shiftPositions ? "def" : "nativeDef"] || opts.shiftPositions && testDefinition.match.static) || tests[tndx].match.nativeDef === testDefinition.match.nativeDef)) {
                    valid = !0;
                    break
                }
                if (tests[tndx].match && tests[tndx].match.def === testDefinition.match.nativeDef) {
                    valid = void 0;
                    break
                }
            }
            return !1 === valid && void 0 !== maskset.jitOffset[pos] && (valid = positionCanMatchDefinition.call(this, pos + maskset.jitOffset[pos], testDefinition, opts)), valid
        }

        function refreshFromBuffer(start, end, buffer) {
            var inputmask = this, maskset = this.maskset, opts = this.opts, $ = this.dependencyLib, el = this.el, i, p,
                skipOptionalPartCharacter = opts.skipOptionalPartCharacter,
                bffr = this.isRTL ? buffer.slice().reverse() : buffer;
            if (opts.skipOptionalPartCharacter = "", !0 === start) _positioning.resetMaskSet.call(this), maskset.tests = {}, start = 0, end = buffer.length, p = _positioning.determineNewCaretPosition.call(this, {
                begin: 0,
                end: 0
            }, !1).begin; else {
                for (i = start; i < end; i++) delete maskset.validPositions[i];
                p = start
            }
            var keypress = new $.Event("keypress");
            for (i = start; i < end; i++) {
                keypress.which = bffr[i].toString().charCodeAt(0), this.ignorable = !1;
                var valResult = _eventhandlers.EventHandlers.keypressEvent.call(el, keypress, !0, !1, !1, p);
                !1 !== valResult && (p = valResult.forwardPosition)
            }
            opts.skipOptionalPartCharacter = skipOptionalPartCharacter
        }

        function trackbackPositions(originalPos, newPos, fillOnly) {
            var inputmask = this, maskset = this.maskset, $ = this.dependencyLib;
            if (void 0 === originalPos) for (originalPos = newPos - 1; 0 < originalPos && !maskset.validPositions[originalPos]; originalPos--) ;
            for (var ps = originalPos; ps < newPos; ps++) if (void 0 === maskset.validPositions[ps] && !_positioning.isMask.call(this, ps, !0)) {
                var vp = 0 == ps ? _validationTests.getTest.call(this, ps) : maskset.validPositions[ps - 1];
                if (vp) {
                    var tests = _validationTests.getTests.call(this, ps).slice();
                    "" === tests[tests.length - 1].match.def && tests.pop();
                    var bestMatch = _validationTests.determineTestTemplate.call(this, ps, tests), np;
                    if (bestMatch && (!0 !== bestMatch.match.jit || "master" === bestMatch.match.newBlockMarker && (np = maskset.validPositions[ps + 1]) && !0 === np.match.optionalQuantifier) && (bestMatch = $.extend({}, bestMatch, {input: _validationTests.getPlaceholder.call(this, ps, bestMatch.match, !0) || bestMatch.match.def}), bestMatch.generatedInput = !0, revalidateMask.call(this, ps, bestMatch, !0), !0 !== fillOnly)) {
                        var cvpInput = maskset.validPositions[newPos].input;
                        return maskset.validPositions[newPos] = void 0, isValid.call(this, newPos, cvpInput, !0, !0)
                    }
                }
            }
        }

        function revalidateMask(pos, validTest, fromIsValid, validatedPos) {
            var inputmask = this, maskset = this.maskset, opts = this.opts, $ = this.dependencyLib;

            function IsEnclosedStatic(pos, valids, selection) {
                var posMatch = valids[pos];
                if (void 0 === posMatch || !0 !== posMatch.match.static || !0 === posMatch.match.optionality || void 0 !== valids[0] && void 0 !== valids[0].alternation) return !1;
                var prevMatch = selection.begin <= pos - 1 ? valids[pos - 1] && !0 === valids[pos - 1].match.static && valids[pos - 1] : valids[pos - 1],
                    nextMatch = selection.end > pos + 1 ? valids[pos + 1] && !0 === valids[pos + 1].match.static && valids[pos + 1] : valids[pos + 1];
                return prevMatch && nextMatch
            }

            var offset = 0, begin = void 0 !== pos.begin ? pos.begin : pos, end = void 0 !== pos.end ? pos.end : pos;
            if (pos.begin > pos.end && (begin = pos.end, end = pos.begin), validatedPos = void 0 !== validatedPos ? validatedPos : begin, begin !== end || opts.insertMode && void 0 !== maskset.validPositions[validatedPos] && void 0 === fromIsValid || void 0 === validTest) {
                var positionsClone = $.extend(!0, {}, maskset.validPositions),
                    lvp = _positioning.getLastValidPosition.call(this, void 0, !0), i;
                for (maskset.p = begin, i = lvp; begin <= i; i--) delete maskset.validPositions[i], void 0 === validTest && delete maskset.tests[i + 1];
                var valid = !0, j = validatedPos, posMatch = j, t, canMatch;
                for (validTest && (maskset.validPositions[validatedPos] = $.extend(!0, {}, validTest), posMatch++, j++), i = validTest ? end : end - 1; i <= lvp; i++) {
                    if (void 0 !== (t = positionsClone[i]) && !0 !== t.generatedInput && (end <= i || begin <= i && IsEnclosedStatic(i, positionsClone, {
                        begin: begin,
                        end: end
                    }))) {
                        for (; "" !== _validationTests.getTest.call(this, posMatch).match.def;) {
                            if (!1 !== (canMatch = positionCanMatchDefinition.call(this, posMatch, t, opts)) || "+" === t.match.def) {
                                "+" === t.match.def && _positioning.getBuffer.call(this, !0);
                                var result = isValid.call(this, posMatch, t.input, "+" !== t.match.def, "+" !== t.match.def);
                                if (valid = !1 !== result, j = (result.pos || posMatch) + 1, !valid && canMatch) break
                            } else valid = !1;
                            if (valid) {
                                void 0 === validTest && t.match.static && i === pos.begin && offset++;
                                break
                            }
                            if (!valid && posMatch > maskset.maskLength) break;
                            posMatch++
                        }
                        "" == _validationTests.getTest.call(this, posMatch).match.def && (valid = !1), posMatch = j
                    }
                    if (!valid) break
                }
                if (!valid) return maskset.validPositions = $.extend(!0, {}, positionsClone), _positioning.resetMaskSet.call(this, !0), !1
            } else validTest && _validationTests.getTest.call(this, validatedPos).match.cd === validTest.match.cd && (maskset.validPositions[validatedPos] = $.extend(!0, {}, validTest));
            return _positioning.resetMaskSet.call(this, !0), offset
        }
    }, function (module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0}), exports.applyInputValue = applyInputValue, exports.clearOptionalTail = clearOptionalTail, exports.checkVal = checkVal, exports.HandleNativePlaceholder = HandleNativePlaceholder, exports.unmaskedvalue = unmaskedvalue, exports.writeBuffer = writeBuffer;
        var _keycode = _interopRequireDefault(__webpack_require__(0)), _validationTests = __webpack_require__(3),
            _positioning = __webpack_require__(2), _validation = __webpack_require__(4),
            _environment = __webpack_require__(7), _eventhandlers = __webpack_require__(6);

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {default: obj}
        }

        function applyInputValue(input, value) {
            var inputmask = input ? input.inputmask : this, opts = inputmask.opts;
            input.inputmask.refreshValue = !1, "function" == typeof opts.onBeforeMask && (value = opts.onBeforeMask.call(inputmask, value, opts) || value), value = value.toString().split(""), checkVal(input, !0, !1, value), inputmask.undoValue = _positioning.getBuffer.call(inputmask).join(""), (opts.clearMaskOnLostFocus || opts.clearIncomplete) && input.inputmask._valueGet() === _positioning.getBufferTemplate.call(inputmask).join("") && -1 === _positioning.getLastValidPosition.call(inputmask) && input.inputmask._valueSet("")
        }

        function clearOptionalTail(buffer) {
            var inputmask = this;
            buffer.length = 0;
            for (var template = _validationTests.getMaskTemplate.call(this, !0, 0, !0, void 0, !0), lmnt; void 0 !== (lmnt = template.shift());) buffer.push(lmnt);
            return buffer
        }

        function checkVal(input, writeOut, strict, nptvl, initiatingEvent) {
            var inputmask = input ? input.inputmask : this, maskset = inputmask.maskset, opts = inputmask.opts,
                $ = inputmask.dependencyLib, inputValue = nptvl.slice(), charCodes = "", initialNdx = -1,
                result = void 0, skipOptionalPartCharacter = opts.skipOptionalPartCharacter;

            function isTemplateMatch(ndx, charCodes) {
                for (var targetTemplate = _validationTests.getMaskTemplate.call(inputmask, !0, 0).slice(ndx, _positioning.seekNext.call(inputmask, ndx)).join("").replace(/'/g, ""), charCodeNdx = targetTemplate.indexOf(charCodes); 0 < charCodeNdx && " " === targetTemplate[charCodeNdx - 1];) charCodeNdx--;
                var match = 0 === charCodeNdx && !_positioning.isMask.call(inputmask, ndx) && (_validationTests.getTest.call(inputmask, ndx).match.nativeDef === charCodes.charAt(0) || !0 === _validationTests.getTest.call(inputmask, ndx).match.static && _validationTests.getTest.call(inputmask, ndx).match.nativeDef === "'" + charCodes.charAt(0) || " " === _validationTests.getTest.call(inputmask, ndx).match.nativeDef && (_validationTests.getTest.call(inputmask, ndx + 1).match.nativeDef === charCodes.charAt(0) || !0 === _validationTests.getTest.call(inputmask, ndx + 1).match.static && _validationTests.getTest.call(inputmask, ndx + 1).match.nativeDef === "'" + charCodes.charAt(0)));
                if (!match && 0 < charCodeNdx && !_positioning.isMask.call(inputmask, ndx, !1, !0)) {
                    var nextPos = _positioning.seekNext.call(inputmask, ndx);
                    inputmask.caretPos.begin < nextPos && (inputmask.caretPos = {begin: nextPos})
                }
                return match
            }

            opts.skipOptionalPartCharacter = "", _positioning.resetMaskSet.call(inputmask), maskset.tests = {}, initialNdx = opts.radixPoint ? _positioning.determineNewCaretPosition.call(inputmask, {
                begin: 0,
                end: 0
            }).begin : 0, maskset.p = initialNdx, inputmask.caretPos = {begin: initialNdx};
            var staticMatches = [], prevCaretPos = inputmask.caretPos;
            if (inputValue.forEach(function (charCode, ndx) {
                if (void 0 !== charCode) if (void 0 === maskset.validPositions[ndx] && inputValue[ndx] === _validationTests.getPlaceholder.call(inputmask, ndx) && _positioning.isMask.call(inputmask, ndx, !0) && !1 === _validation.isValid.call(inputmask, ndx, inputValue[ndx], !0, void 0, void 0, !0)) maskset.p++; else {
                    var keypress = new $.Event("_checkval");
                    keypress.which = charCode.toString().charCodeAt(0), charCodes += charCode;
                    var lvp = _positioning.getLastValidPosition.call(inputmask, void 0, !0);
                    isTemplateMatch(initialNdx, charCodes) ? result = _eventhandlers.EventHandlers.keypressEvent.call(input || inputmask, keypress, !0, !1, strict, lvp + 1) : (result = _eventhandlers.EventHandlers.keypressEvent.call(input || inputmask, keypress, !0, !1, strict, inputmask.caretPos.begin), result && (initialNdx = inputmask.caretPos.begin + 1, charCodes = "")), result ? (void 0 !== result.pos && maskset.validPositions[result.pos] && !0 === maskset.validPositions[result.pos].match.static && void 0 === maskset.validPositions[result.pos].alternation && (staticMatches.push(result.pos), inputmask.isRTL || (result.forwardPosition = result.pos + 1)), writeBuffer.call(inputmask, void 0, _positioning.getBuffer.call(inputmask), result.forwardPosition, keypress, !1), inputmask.caretPos = {
                        begin: result.forwardPosition,
                        end: result.forwardPosition
                    }, prevCaretPos = inputmask.caretPos) : inputmask.caretPos = prevCaretPos
                }
            }), 0 < staticMatches.length) {
                var sndx, validPos, nextValid = _positioning.seekNext.call(inputmask, -1, void 0, !1);
                if (!_validation.isComplete.call(inputmask, _positioning.getBuffer.call(inputmask)) && staticMatches.length <= nextValid || _validation.isComplete.call(inputmask, _positioning.getBuffer.call(inputmask)) && 0 < staticMatches.length && staticMatches.length !== nextValid && 0 === staticMatches[0]) for (var nextSndx = nextValid; void 0 !== (sndx = staticMatches.shift());) {
                    var keypress = new $.Event("_checkval");
                    if (validPos = maskset.validPositions[sndx], validPos.generatedInput = !0, keypress.which = validPos.input.charCodeAt(0), result = _eventhandlers.EventHandlers.keypressEvent.call(input, keypress, !0, !1, strict, nextSndx), result && void 0 !== result.pos && result.pos !== sndx && maskset.validPositions[result.pos] && !0 === maskset.validPositions[result.pos].match.static) staticMatches.push(result.pos); else if (!result) break;
                    nextSndx++
                }
            }
            writeOut && writeBuffer.call(inputmask, input, _positioning.getBuffer.call(inputmask), result ? result.forwardPosition : inputmask.caretPos.begin, initiatingEvent || new $.Event("checkval"), initiatingEvent && "input" === initiatingEvent.type && inputmask.undoValue !== _positioning.getBuffer.call(inputmask).join("")), opts.skipOptionalPartCharacter = skipOptionalPartCharacter
        }

        function HandleNativePlaceholder(npt, value) {
            var inputmask = npt ? npt.inputmask : this;
            if (_environment.ie) {
                if (npt.inputmask._valueGet() !== value && (npt.placeholder !== value || "" === npt.placeholder)) {
                    var buffer = _positioning.getBuffer.call(inputmask).slice(), nptValue = npt.inputmask._valueGet();
                    if (nptValue !== value) {
                        var lvp = _positioning.getLastValidPosition.call(inputmask);
                        -1 === lvp && nptValue === _positioning.getBufferTemplate.call(inputmask).join("") ? buffer = [] : -1 !== lvp && clearOptionalTail.call(inputmask, buffer), writeBuffer(npt, buffer)
                    }
                }
            } else npt.placeholder !== value && (npt.placeholder = value, "" === npt.placeholder && npt.removeAttribute("placeholder"))
        }

        function unmaskedvalue(input) {
            var inputmask = input ? input.inputmask : this, opts = inputmask.opts, maskset = inputmask.maskset;
            if (input) {
                if (void 0 === input.inputmask) return input.value;
                input.inputmask && input.inputmask.refreshValue && applyInputValue(input, input.inputmask._valueGet(!0))
            }
            var umValue = [], vps = maskset.validPositions;
            for (var pndx in vps) vps[pndx] && vps[pndx].match && (1 != vps[pndx].match.static || Array.isArray(maskset.metadata) && !0 !== vps[pndx].generatedInput) && umValue.push(vps[pndx].input);
            var unmaskedValue = 0 === umValue.length ? "" : (inputmask.isRTL ? umValue.reverse() : umValue).join("");
            if ("function" == typeof opts.onUnMask) {
                var bufferValue = (inputmask.isRTL ? _positioning.getBuffer.call(inputmask).slice().reverse() : _positioning.getBuffer.call(inputmask)).join("");
                unmaskedValue = opts.onUnMask.call(inputmask, bufferValue, unmaskedValue, opts)
            }
            return unmaskedValue
        }

        function writeBuffer(input, buffer, caretPos, event, triggerEvents) {
            var inputmask = input ? input.inputmask : this, opts = inputmask.opts, $ = inputmask.dependencyLib;
            if (event && "function" == typeof opts.onBeforeWrite) {
                var result = opts.onBeforeWrite.call(inputmask, event, buffer, caretPos, opts);
                if (result) {
                    if (result.refreshFromBuffer) {
                        var refresh = result.refreshFromBuffer;
                        _validation.refreshFromBuffer.call(inputmask, !0 === refresh ? refresh : refresh.start, refresh.end, result.buffer || buffer), buffer = _positioning.getBuffer.call(inputmask, !0)
                    }
                    void 0 !== caretPos && (caretPos = void 0 !== result.caret ? result.caret : caretPos)
                }
            }
            if (void 0 !== input && (input.inputmask._valueSet(buffer.join("")), void 0 === caretPos || void 0 !== event && "blur" === event.type || _positioning.caret.call(inputmask, input, caretPos, void 0, void 0, void 0 !== event && "keydown" === event.type && (event.keyCode === _keycode.default.DELETE || event.keyCode === _keycode.default.BACKSPACE)), !0 === triggerEvents)) {
                var $input = $(input), nptVal = input.inputmask._valueGet();
                input.inputmask.skipInputEvent = !0, $input.trigger("input"), setTimeout(function () {
                    nptVal === _positioning.getBufferTemplate.call(inputmask).join("") ? $input.trigger("cleared") : !0 === _validation.isComplete.call(inputmask, buffer) && $input.trigger("complete")
                }, 0)
            }
        }
    }, function (module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0}), exports.EventHandlers = void 0;
        var _positioning = __webpack_require__(2), _keycode = _interopRequireDefault(__webpack_require__(0)),
            _environment = __webpack_require__(7), _validation = __webpack_require__(4),
            _inputHandling = __webpack_require__(5), _validationTests = __webpack_require__(3);

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {default: obj}
        }

        var EventHandlers = {
            keydownEvent: function keydownEvent(e) {
                var inputmask = this.inputmask, opts = inputmask.opts, $ = inputmask.dependencyLib,
                    maskset = inputmask.maskset, input = this, $input = $(input), k = e.keyCode,
                    pos = _positioning.caret.call(inputmask, input),
                    kdResult = opts.onKeyDown.call(this, e, _positioning.getBuffer.call(inputmask), pos, opts);
                if (void 0 !== kdResult) return kdResult;
                if (k === _keycode.default.BACKSPACE || k === _keycode.default.DELETE || _environment.iphone && k === _keycode.default.BACKSPACE_SAFARI || e.ctrlKey && k === _keycode.default.X && !("oncut" in input)) e.preventDefault(), _validation.handleRemove.call(inputmask, input, k, pos), (0, _inputHandling.writeBuffer)(input, _positioning.getBuffer.call(inputmask, !0), maskset.p, e, input.inputmask._valueGet() !== _positioning.getBuffer.call(inputmask).join("")); else if (k === _keycode.default.END || k === _keycode.default.PAGE_DOWN) {
                    e.preventDefault();
                    var caretPos = _positioning.seekNext.call(inputmask, _positioning.getLastValidPosition.call(inputmask));
                    _positioning.caret.call(inputmask, input, e.shiftKey ? pos.begin : caretPos, caretPos, !0)
                } else k === _keycode.default.HOME && !e.shiftKey || k === _keycode.default.PAGE_UP ? (e.preventDefault(), _positioning.caret.call(inputmask, input, 0, e.shiftKey ? pos.begin : 0, !0)) : (opts.undoOnEscape && k === _keycode.default.ESCAPE || 90 === k && e.ctrlKey) && !0 !== e.altKey ? ((0, _inputHandling.checkVal)(input, !0, !1, inputmask.undoValue.split("")), $input.trigger("click")) : !0 === opts.tabThrough && k === _keycode.default.TAB ? !0 === e.shiftKey ? (pos.end = _positioning.seekPrevious.call(inputmask, pos.end, !0), !0 === _validationTests.getTest.call(inputmask, pos.end - 1).match.static && pos.end--, pos.begin = _positioning.seekPrevious.call(inputmask, pos.end, !0), 0 <= pos.begin && 0 < pos.end && (e.preventDefault(), _positioning.caret.call(inputmask, input, pos.begin, pos.end))) : (pos.begin = _positioning.seekNext.call(inputmask, pos.begin, !0), pos.end = _positioning.seekNext.call(inputmask, pos.begin, !0), pos.end < maskset.maskLength && pos.end--, pos.begin <= maskset.maskLength && (e.preventDefault(), _positioning.caret.call(inputmask, input, pos.begin, pos.end))) : e.shiftKey || opts.insertModeVisual && !1 === opts.insertMode && (k === _keycode.default.RIGHT ? setTimeout(function () {
                    var caretPos = _positioning.caret.call(inputmask, input);
                    _positioning.caret.call(inputmask, input, caretPos.begin)
                }, 0) : k === _keycode.default.LEFT && setTimeout(function () {
                    var caretPos_begin = _positioning.translatePosition.call(inputmask, input.inputmask.caretPos.begin),
                        caretPos_end = _positioning.translatePosition.call(inputmask, input.inputmask.caretPos.end);
                    inputmask.isRTL ? _positioning.caret.call(inputmask, input, caretPos_begin + (caretPos_begin === maskset.maskLength ? 0 : 1)) : _positioning.caret.call(inputmask, input, caretPos_begin - (0 === caretPos_begin ? 0 : 1))
                }, 0));
                inputmask.ignorable = opts.ignorables.includes(k)
            }, keypressEvent: function keypressEvent(e, checkval, writeOut, strict, ndx) {
                var inputmask = this.inputmask || this, opts = inputmask.opts, $ = inputmask.dependencyLib,
                    maskset = inputmask.maskset, input = inputmask.el, $input = $(input),
                    k = e.which || e.charCode || e.keyCode;
                if (!(!0 === checkval || e.ctrlKey && e.altKey) && (e.ctrlKey || e.metaKey || inputmask.ignorable)) return k === _keycode.default.ENTER && inputmask.undoValue !== _positioning.getBuffer.call(inputmask).join("") && (inputmask.undoValue = _positioning.getBuffer.call(inputmask).join(""), setTimeout(function () {
                    $input.trigger("change")
                }, 0)), inputmask.skipInputEvent = !0, !0;
                if (k) {
                    44 !== k && 46 !== k || 3 !== e.location || "" === opts.radixPoint || (k = opts.radixPoint.charCodeAt(0));
                    var pos = checkval ? {begin: ndx, end: ndx} : _positioning.caret.call(inputmask, input),
                        forwardPosition, c = String.fromCharCode(k);
                    maskset.writeOutBuffer = !0;
                    var valResult = _validation.isValid.call(inputmask, pos, c, strict, void 0, void 0, void 0, checkval);
                    if (!1 !== valResult && (_positioning.resetMaskSet.call(inputmask, !0), forwardPosition = void 0 !== valResult.caret ? valResult.caret : _positioning.seekNext.call(inputmask, valResult.pos.begin ? valResult.pos.begin : valResult.pos), maskset.p = forwardPosition), forwardPosition = opts.numericInput && void 0 === valResult.caret ? _positioning.seekPrevious.call(inputmask, forwardPosition) : forwardPosition, !1 !== writeOut && (setTimeout(function () {
                        opts.onKeyValidation.call(input, k, valResult)
                    }, 0), maskset.writeOutBuffer && !1 !== valResult)) {
                        var buffer = _positioning.getBuffer.call(inputmask);
                        (0, _inputHandling.writeBuffer)(input, buffer, forwardPosition, e, !0 !== checkval)
                    }
                    if (e.preventDefault(), checkval) return !1 !== valResult && (valResult.forwardPosition = forwardPosition), valResult
                }
            }, keyupEvent: function keyupEvent(e) {
                var inputmask = this.inputmask;
                !inputmask.isComposing || e.keyCode !== _keycode.default.KEY_229 && e.keyCode !== _keycode.default.ENTER || inputmask.$el.trigger("input")
            }, pasteEvent: function pasteEvent(e) {
                var inputmask = this.inputmask, opts = inputmask.opts, input = this,
                    inputValue = inputmask._valueGet(!0), caretPos = _positioning.caret.call(inputmask, this),
                    tempValue;
                inputmask.isRTL && (tempValue = caretPos.end, caretPos.end = caretPos.begin, caretPos.begin = tempValue);
                var valueBeforeCaret = inputValue.substr(0, caretPos.begin),
                    valueAfterCaret = inputValue.substr(caretPos.end, inputValue.length);
                if (valueBeforeCaret == (inputmask.isRTL ? _positioning.getBufferTemplate.call(inputmask).slice().reverse() : _positioning.getBufferTemplate.call(inputmask)).slice(0, caretPos.begin).join("") && (valueBeforeCaret = ""), valueAfterCaret == (inputmask.isRTL ? _positioning.getBufferTemplate.call(inputmask).slice().reverse() : _positioning.getBufferTemplate.call(inputmask)).slice(caretPos.end).join("") && (valueAfterCaret = ""), window.clipboardData && window.clipboardData.getData) inputValue = valueBeforeCaret + window.clipboardData.getData("Text") + valueAfterCaret; else {
                    if (!e.clipboardData || !e.clipboardData.getData) return !0;
                    inputValue = valueBeforeCaret + e.clipboardData.getData("text/plain") + valueAfterCaret
                }
                var pasteValue = inputValue;
                if ("function" == typeof opts.onBeforePaste) {
                    if (pasteValue = opts.onBeforePaste.call(inputmask, inputValue, opts), !1 === pasteValue) return e.preventDefault();
                    pasteValue = pasteValue || inputValue
                }
                return (0, _inputHandling.checkVal)(this, !0, !1, pasteValue.toString().split(""), e), e.preventDefault()
            }, inputFallBackEvent: function inputFallBackEvent(e) {
                var inputmask = this.inputmask, opts = inputmask.opts, $ = inputmask.dependencyLib;

                function ieMobileHandler(input, inputValue, caretPos) {
                    if (_environment.iemobile) {
                        var inputChar = inputValue.replace(_positioning.getBuffer.call(inputmask).join(""), "");
                        if (1 === inputChar.length) {
                            var iv = inputValue.split("");
                            iv.splice(caretPos.begin, 0, inputChar), inputValue = iv.join("")
                        }
                    }
                    return inputValue
                }

                function analyseChanges(inputValue, buffer, caretPos) {
                    for (var frontPart = inputValue.substr(0, caretPos.begin).split(""), backPart = inputValue.substr(caretPos.begin).split(""), frontBufferPart = buffer.substr(0, caretPos.begin).split(""), backBufferPart = buffer.substr(caretPos.begin).split(""), fpl = frontPart.length >= frontBufferPart.length ? frontPart.length : frontBufferPart.length, bpl = backPart.length >= backBufferPart.length ? backPart.length : backBufferPart.length, bl, i, action = "", data = [], marker = "~", placeholder; frontPart.length < fpl;) frontPart.push("~");
                    for (; frontBufferPart.length < fpl;) frontBufferPart.push("~");
                    for (; backPart.length < bpl;) backPart.unshift("~");
                    for (; backBufferPart.length < bpl;) backBufferPart.unshift("~");
                    var newBuffer = frontPart.concat(backPart), oldBuffer = frontBufferPart.concat(backBufferPart);
                    for (i = 0, bl = newBuffer.length; i < bl; i++) switch (placeholder = _validationTests.getPlaceholder.call(inputmask, _positioning.translatePosition.call(inputmask, i)), action) {
                        case"insertText":
                            oldBuffer[i - 1] === newBuffer[i] && caretPos.begin == newBuffer.length - 1 && data.push(newBuffer[i]), i = bl;
                            break;
                        case"insertReplacementText":
                            "~" === newBuffer[i] ? caretPos.end++ : i = bl;
                            break;
                        case"deleteContentBackward":
                            "~" === newBuffer[i] ? caretPos.end++ : i = bl;
                            break;
                        default:
                            newBuffer[i] !== oldBuffer[i] && ("~" !== newBuffer[i + 1] && newBuffer[i + 1] !== placeholder && void 0 !== newBuffer[i + 1] || (oldBuffer[i] !== placeholder || "~" !== oldBuffer[i + 1]) && "~" !== oldBuffer[i] ? "~" === oldBuffer[i + 1] && oldBuffer[i] === newBuffer[i + 1] ? (action = "insertText", data.push(newBuffer[i]), caretPos.begin--, caretPos.end--) : newBuffer[i] !== placeholder && "~" !== newBuffer[i] && ("~" === newBuffer[i + 1] || oldBuffer[i] !== newBuffer[i] && oldBuffer[i + 1] === newBuffer[i + 1]) ? (action = "insertReplacementText", data.push(newBuffer[i]), caretPos.begin--) : "~" === newBuffer[i] ? (action = "deleteContentBackward", !_positioning.isMask.call(inputmask, _positioning.translatePosition.call(inputmask, i), !0) && oldBuffer[i] !== opts.radixPoint || caretPos.end++) : i = bl : (action = "insertText", data.push(newBuffer[i]), caretPos.begin--, caretPos.end--));
                            break
                    }
                    return {action: action, data: data, caret: caretPos}
                }

                var input = this, inputValue = input.inputmask._valueGet(!0),
                    buffer = (inputmask.isRTL ? _positioning.getBuffer.call(inputmask).slice().reverse() : _positioning.getBuffer.call(inputmask)).join(""),
                    caretPos = _positioning.caret.call(inputmask, input, void 0, void 0, !0);
                if (buffer !== inputValue) {
                    inputValue = ieMobileHandler(input, inputValue, caretPos);
                    var changes = analyseChanges(inputValue, buffer, caretPos);
                    switch ((input.inputmask.shadowRoot || document).activeElement !== input && input.focus(), (0, _inputHandling.writeBuffer)(input, _positioning.getBuffer.call(inputmask)), _positioning.caret.call(inputmask, input, caretPos.begin, caretPos.end, !0), changes.action) {
                        case"insertText":
                        case"insertReplacementText":
                            changes.data.forEach(function (entry, ndx) {
                                var keypress = new $.Event("keypress");
                                keypress.which = entry.charCodeAt(0), inputmask.ignorable = !1, EventHandlers.keypressEvent.call(input, keypress)
                            }), setTimeout(function () {
                                inputmask.$el.trigger("keyup")
                            }, 0);
                            break;
                        case"deleteContentBackward":
                            var keydown = new $.Event("keydown");
                            keydown.keyCode = _keycode.default.BACKSPACE, EventHandlers.keydownEvent.call(input, keydown);
                            break;
                        default:
                            (0, _inputHandling.applyInputValue)(input, inputValue);
                            break
                    }
                    e.preventDefault()
                }
            }, compositionendEvent: function compositionendEvent(e) {
                var inputmask = this.inputmask;
                inputmask.isComposing = !1, inputmask.$el.trigger("input")
            }, setValueEvent: function setValueEvent(e, argument_1, argument_2) {
                var inputmask = this.inputmask, input = this, value = e && e.detail ? e.detail[0] : argument_1;
                void 0 === value && (value = this.inputmask._valueGet(!0)), (0, _inputHandling.applyInputValue)(this, value), (e.detail && void 0 !== e.detail[1] || void 0 !== argument_2) && _positioning.caret.call(inputmask, this, e.detail ? e.detail[1] : argument_2)
            }, focusEvent: function focusEvent(e) {
                var inputmask = this.inputmask, opts = inputmask.opts, input = this,
                    nptValue = this.inputmask._valueGet();
                opts.showMaskOnFocus && nptValue !== _positioning.getBuffer.call(inputmask).join("") && (0, _inputHandling.writeBuffer)(this, _positioning.getBuffer.call(inputmask), _positioning.seekNext.call(inputmask, _positioning.getLastValidPosition.call(inputmask))), !0 !== opts.positionCaretOnTab || !1 !== inputmask.mouseEnter || _validation.isComplete.call(inputmask, _positioning.getBuffer.call(inputmask)) && -1 !== _positioning.getLastValidPosition.call(inputmask) || EventHandlers.clickEvent.apply(this, [e, !0]), inputmask.undoValue = _positioning.getBuffer.call(inputmask).join("")
            }, invalidEvent: function invalidEvent(e) {
                this.inputmask.validationEvent = !0
            }, mouseleaveEvent: function mouseleaveEvent() {
                var inputmask = this.inputmask, opts = inputmask.opts, input = this;
                inputmask.mouseEnter = !1, opts.clearMaskOnLostFocus && (this.inputmask.shadowRoot || document).activeElement !== this && (0, _inputHandling.HandleNativePlaceholder)(this, inputmask.originalPlaceholder)
            }, clickEvent: function clickEvent(e, tabbed) {
                var inputmask = this.inputmask, input = this;
                if ((this.inputmask.shadowRoot || document).activeElement === this) {
                    var newCaretPosition = _positioning.determineNewCaretPosition.call(inputmask, _positioning.caret.call(inputmask, this), tabbed);
                    void 0 !== newCaretPosition && _positioning.caret.call(inputmask, this, newCaretPosition)
                }
            }, cutEvent: function cutEvent(e) {
                var inputmask = this.inputmask, maskset = inputmask.maskset, input = this,
                    pos = _positioning.caret.call(inputmask, this),
                    clipboardData = window.clipboardData || e.clipboardData,
                    clipData = inputmask.isRTL ? _positioning.getBuffer.call(inputmask).slice(pos.end, pos.begin) : _positioning.getBuffer.call(inputmask).slice(pos.begin, pos.end);
                clipboardData.setData("text", inputmask.isRTL ? clipData.reverse().join("") : clipData.join("")), document.execCommand && document.execCommand("copy"), _validation.handleRemove.call(inputmask, this, _keycode.default.DELETE, pos), (0, _inputHandling.writeBuffer)(this, _positioning.getBuffer.call(inputmask), maskset.p, e, inputmask.undoValue !== _positioning.getBuffer.call(inputmask).join(""))
            }, blurEvent: function blurEvent(e) {
                var inputmask = this.inputmask, opts = inputmask.opts, $ = inputmask.dependencyLib, $input = $(this),
                    input = this;
                if (this.inputmask) {
                    (0, _inputHandling.HandleNativePlaceholder)(this, inputmask.originalPlaceholder);
                    var nptValue = this.inputmask._valueGet(), buffer = _positioning.getBuffer.call(inputmask).slice();
                    "" !== nptValue && (opts.clearMaskOnLostFocus && (-1 === _positioning.getLastValidPosition.call(inputmask) && nptValue === _positioning.getBufferTemplate.call(inputmask).join("") ? buffer = [] : _inputHandling.clearOptionalTail.call(inputmask, buffer)), !1 === _validation.isComplete.call(inputmask, buffer) && (setTimeout(function () {
                        $input.trigger("incomplete")
                    }, 0), opts.clearIncomplete && (_positioning.resetMaskSet.call(inputmask), buffer = opts.clearMaskOnLostFocus ? [] : _positioning.getBufferTemplate.call(inputmask).slice())), (0, _inputHandling.writeBuffer)(this, buffer, void 0, e)), inputmask.undoValue !== _positioning.getBuffer.call(inputmask).join("") && (inputmask.undoValue = _positioning.getBuffer.call(inputmask).join(""), $input.trigger("change"))
                }
            }, mouseenterEvent: function mouseenterEvent() {
                var inputmask = this.inputmask, opts = inputmask.opts, input = this;
                inputmask.mouseEnter = !0, (this.inputmask.shadowRoot || document).activeElement !== this && (null == inputmask.originalPlaceholder && this.placeholder !== inputmask.originalPlaceholder && (inputmask.originalPlaceholder = this.placeholder), opts.showMaskOnHover && (0, _inputHandling.HandleNativePlaceholder)(this, (inputmask.isRTL ? _positioning.getBufferTemplate.call(inputmask).slice().reverse() : _positioning.getBufferTemplate.call(inputmask)).join("")))
            }, submitEvent: function submitEvent() {
                var inputmask = this.inputmask, opts = inputmask.opts;
                inputmask.undoValue !== _positioning.getBuffer.call(inputmask).join("") && inputmask.$el.trigger("change"), opts.clearMaskOnLostFocus && -1 === _positioning.getLastValidPosition.call(inputmask) && inputmask._valueGet && inputmask._valueGet() === _positioning.getBufferTemplate.call(inputmask).join("") && inputmask._valueSet(""), opts.clearIncomplete && !1 === _validation.isComplete.call(inputmask, _positioning.getBuffer.call(inputmask)) && inputmask._valueSet(""), opts.removeMaskOnSubmit && (inputmask._valueSet(inputmask.unmaskedvalue(), !0), setTimeout(function () {
                    (0, _inputHandling.writeBuffer)(inputmask.el, _positioning.getBuffer.call(inputmask))
                }, 0))
            }, resetEvent: function resetEvent() {
                var inputmask = this.inputmask;
                inputmask.refreshValue = !0, setTimeout(function () {
                    (0, _inputHandling.applyInputValue)(inputmask.el, inputmask._valueGet(!0))
                }, 0)
            }
        };
        exports.EventHandlers = EventHandlers
    }, function (module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0}), exports.iphone = exports.iemobile = exports.mobile = exports.ie = exports.ua = void 0;
        var ua = window.navigator && window.navigator.userAgent || "",
            ie = 0 < ua.indexOf("MSIE ") || 0 < ua.indexOf("Trident/"), mobile = "ontouchstart" in window,
            iemobile = /iemobile/i.test(ua), iphone = /iphone/i.test(ua) && !iemobile;
        exports.iphone = iphone, exports.iemobile = iemobile, exports.mobile = mobile, exports.ie = ie, exports.ua = ua
    }, function (module, exports) {
        module.exports = __WEBPACK_EXTERNAL_MODULE__8__
    }, function (module, exports, __webpack_require__) {
        "use strict";

        function _typeof(obj) {
            return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function _typeof(obj) {
                return typeof obj
            } : function _typeof(obj) {
                return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj
            }, _typeof(obj)
        }

        "function" != typeof Object.getPrototypeOf && (Object.getPrototypeOf = "object" === _typeof("test".__proto__) ? function (object) {
            return object.__proto__
        } : function (object) {
            return object.constructor.prototype
        })
    }, function (module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0}), exports.mask = mask, __webpack_require__(9);
        var _keycode = _interopRequireDefault(__webpack_require__(0)), _positioning = __webpack_require__(2),
            _inputHandling = __webpack_require__(5), _eventruler = __webpack_require__(11),
            _environment = __webpack_require__(7), _validation = __webpack_require__(4),
            _eventhandlers = __webpack_require__(6);

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {default: obj}
        }

        function mask() {
            var inputmask = this, opts = this.opts, el = this.el, $ = this.dependencyLib;

            function isElementTypeSupported(input, opts) {
                function patchValueProperty(npt) {
                    var valueGet, valueSet;

                    function patchValhook(type) {
                        if ($.valHooks && (void 0 === $.valHooks[type] || !0 !== $.valHooks[type].inputmaskpatch)) {
                            var valhookGet = $.valHooks[type] && $.valHooks[type].get ? $.valHooks[type].get : function (elem) {
                                    return elem.value
                                },
                                valhookSet = $.valHooks[type] && $.valHooks[type].set ? $.valHooks[type].set : function (elem, value) {
                                    return elem.value = value, elem
                                };
                            $.valHooks[type] = {
                                get: function get(elem) {
                                    if (elem.inputmask) {
                                        if (elem.inputmask.opts.autoUnmask) return elem.inputmask.unmaskedvalue();
                                        var result = valhookGet(elem);
                                        return -1 !== _positioning.getLastValidPosition.call(inputmask, void 0, void 0, elem.inputmask.maskset.validPositions) || !0 !== opts.nullable ? result : ""
                                    }
                                    return valhookGet(elem)
                                }, set: function set(elem, value) {
                                    var result = valhookSet(elem, value);
                                    return elem.inputmask && (0, _inputHandling.applyInputValue)(elem, value), result
                                }, inputmaskpatch: !0
                            }
                        }
                    }

                    function getter() {
                        return this.inputmask ? this.inputmask.opts.autoUnmask ? this.inputmask.unmaskedvalue() : -1 !== _positioning.getLastValidPosition.call(inputmask) || !0 !== opts.nullable ? (this.inputmask.shadowRoot || document.activeElement) === this && opts.clearMaskOnLostFocus ? (inputmask.isRTL ? _inputHandling.clearOptionalTail.call(inputmask, _positioning.getBuffer.call(inputmask).slice()).reverse() : _inputHandling.clearOptionalTail.call(inputmask, _positioning.getBuffer.call(inputmask).slice())).join("") : valueGet.call(this) : "" : valueGet.call(this)
                    }

                    function setter(value) {
                        valueSet.call(this, value), this.inputmask && (0, _inputHandling.applyInputValue)(this, value)
                    }

                    function installNativeValueSetFallback(npt) {
                        _eventruler.EventRuler.on(npt, "mouseenter", function () {
                            var input = this, value = this.inputmask._valueGet(!0);
                            value !== (inputmask.isRTL ? _positioning.getBuffer.call(inputmask).reverse() : _positioning.getBuffer.call(inputmask)).join("") && (0, _inputHandling.applyInputValue)(this, value)
                        })
                    }

                    if (!npt.inputmask.__valueGet) {
                        if (!0 !== opts.noValuePatching) {
                            if (Object.getOwnPropertyDescriptor) {
                                var valueProperty = Object.getPrototypeOf ? Object.getOwnPropertyDescriptor(Object.getPrototypeOf(npt), "value") : void 0;
                                valueProperty && valueProperty.get && valueProperty.set ? (valueGet = valueProperty.get, valueSet = valueProperty.set, Object.defineProperty(npt, "value", {
                                    get: getter,
                                    set: setter,
                                    configurable: !0
                                })) : "input" !== npt.tagName.toLowerCase() && (valueGet = function valueGet() {
                                    return this.textContent
                                }, valueSet = function valueSet(value) {
                                    this.textContent = value
                                }, Object.defineProperty(npt, "value", {get: getter, set: setter, configurable: !0}))
                            } else document.__lookupGetter__ && npt.__lookupGetter__("value") && (valueGet = npt.__lookupGetter__("value"), valueSet = npt.__lookupSetter__("value"), npt.__defineGetter__("value", getter), npt.__defineSetter__("value", setter));
                            npt.inputmask.__valueGet = valueGet, npt.inputmask.__valueSet = valueSet
                        }
                        npt.inputmask._valueGet = function (overruleRTL) {
                            return inputmask.isRTL && !0 !== overruleRTL ? valueGet.call(this.el).split("").reverse().join("") : valueGet.call(this.el)
                        }, npt.inputmask._valueSet = function (value, overruleRTL) {
                            valueSet.call(this.el, null == value ? "" : !0 !== overruleRTL && inputmask.isRTL ? value.split("").reverse().join("") : value)
                        }, void 0 === valueGet && (valueGet = function valueGet() {
                            return this.value
                        }, valueSet = function valueSet(value) {
                            this.value = value
                        }, patchValhook(npt.type), installNativeValueSetFallback(npt))
                    }
                }

                "textarea" !== input.tagName.toLowerCase() && opts.ignorables.push(_keycode.default.ENTER);
                var elementType = input.getAttribute("type"),
                    isSupported = "input" === input.tagName.toLowerCase() && opts.supportsInputType.includes(elementType) || input.isContentEditable || "textarea" === input.tagName.toLowerCase();
                if (!isSupported) if ("input" === input.tagName.toLowerCase()) {
                    var el = document.createElement("input");
                    el.setAttribute("type", elementType), isSupported = "text" === el.type, el = null
                } else isSupported = "partial";
                return !1 !== isSupported ? patchValueProperty(input) : input.inputmask = void 0, isSupported
            }

            _eventruler.EventRuler.off(el);
            var isSupported = isElementTypeSupported(el, opts);
            if (!1 !== isSupported) {
                inputmask.originalPlaceholder = el.placeholder, inputmask.maxLength = void 0 !== el ? el.maxLength : void 0, -1 === inputmask.maxLength && (inputmask.maxLength = void 0), "inputMode" in el && null === el.getAttribute("inputmode") && (el.inputMode = opts.inputmode, el.setAttribute("inputmode", opts.inputmode)), !0 === isSupported && (opts.showMaskOnFocus = opts.showMaskOnFocus && -1 === ["cc-number", "cc-exp"].indexOf(el.autocomplete), _environment.iphone && (opts.insertModeVisual = !1), _eventruler.EventRuler.on(el, "submit", _eventhandlers.EventHandlers.submitEvent), _eventruler.EventRuler.on(el, "reset", _eventhandlers.EventHandlers.resetEvent), _eventruler.EventRuler.on(el, "blur", _eventhandlers.EventHandlers.blurEvent), _eventruler.EventRuler.on(el, "focus", _eventhandlers.EventHandlers.focusEvent), _eventruler.EventRuler.on(el, "invalid", _eventhandlers.EventHandlers.invalidEvent), _eventruler.EventRuler.on(el, "click", _eventhandlers.EventHandlers.clickEvent), _eventruler.EventRuler.on(el, "mouseleave", _eventhandlers.EventHandlers.mouseleaveEvent), _eventruler.EventRuler.on(el, "mouseenter", _eventhandlers.EventHandlers.mouseenterEvent), _eventruler.EventRuler.on(el, "paste", _eventhandlers.EventHandlers.pasteEvent), _eventruler.EventRuler.on(el, "cut", _eventhandlers.EventHandlers.cutEvent), _eventruler.EventRuler.on(el, "complete", opts.oncomplete), _eventruler.EventRuler.on(el, "incomplete", opts.onincomplete), _eventruler.EventRuler.on(el, "cleared", opts.oncleared), !0 !== opts.inputEventOnly && (_eventruler.EventRuler.on(el, "keydown", _eventhandlers.EventHandlers.keydownEvent), _eventruler.EventRuler.on(el, "keypress", _eventhandlers.EventHandlers.keypressEvent), _eventruler.EventRuler.on(el, "keyup", _eventhandlers.EventHandlers.keyupEvent)), (_environment.mobile || opts.inputEventOnly) && el.removeAttribute("maxLength"), _eventruler.EventRuler.on(el, "input", _eventhandlers.EventHandlers.inputFallBackEvent), _eventruler.EventRuler.on(el, "compositionend", _eventhandlers.EventHandlers.compositionendEvent)), _eventruler.EventRuler.on(el, "setvalue", _eventhandlers.EventHandlers.setValueEvent), inputmask.undoValue = _positioning.getBufferTemplate.call(inputmask).join("");
                var activeElement = (el.inputmask.shadowRoot || document).activeElement;
                if ("" !== el.inputmask._valueGet(!0) || !1 === opts.clearMaskOnLostFocus || activeElement === el) {
                    (0, _inputHandling.applyInputValue)(el, el.inputmask._valueGet(!0), opts);
                    var buffer = _positioning.getBuffer.call(inputmask).slice();
                    !1 === _validation.isComplete.call(inputmask, buffer) && opts.clearIncomplete && _positioning.resetMaskSet.call(inputmask), opts.clearMaskOnLostFocus && activeElement !== el && (-1 === _positioning.getLastValidPosition.call(inputmask) ? buffer = [] : _inputHandling.clearOptionalTail.call(inputmask, buffer)), (!1 === opts.clearMaskOnLostFocus || opts.showMaskOnFocus && activeElement === el || "" !== el.inputmask._valueGet(!0)) && (0, _inputHandling.writeBuffer)(el, buffer), activeElement === el && _positioning.caret.call(inputmask, el, _positioning.seekNext.call(inputmask, _positioning.getLastValidPosition.call(inputmask)))
                }
            }
        }
    }, function (module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0}), exports.EventRuler = void 0;
        var _inputmask = _interopRequireDefault(__webpack_require__(1)),
            _keycode = _interopRequireDefault(__webpack_require__(0)), _positioning = __webpack_require__(2),
            _inputHandling = __webpack_require__(5);

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {default: obj}
        }

        var EventRuler = {
            on: function on(input, eventName, eventHandler) {
                var $ = input.inputmask.dependencyLib, ev = function ev(e) {
                    e.originalEvent && (e = e.originalEvent || e, arguments[0] = e);
                    var that = this, args, inputmask = that.inputmask, opts = inputmask ? inputmask.opts : void 0,
                        $ = inputmask.dependencyLib;
                    if (void 0 === inputmask && "FORM" !== this.nodeName) {
                        var imOpts = $.data(that, "_inputmask_opts");
                        $(that).off(), imOpts && new _inputmask.default(imOpts).mask(that)
                    } else {
                        if ("setvalue" === e.type || "FORM" === this.nodeName || !(that.disabled || that.readOnly && !("keydown" === e.type && e.ctrlKey && 67 === e.keyCode || !1 === opts.tabThrough && e.keyCode === _keycode.default.TAB))) {
                            switch (e.type) {
                                case"input":
                                    if (!0 === inputmask.skipInputEvent || e.inputType && "insertCompositionText" === e.inputType) return inputmask.skipInputEvent = !1, e.preventDefault();
                                    break;
                                case"keydown":
                                    inputmask.skipKeyPressEvent = !1, inputmask.skipInputEvent = inputmask.isComposing = e.keyCode === _keycode.default.KEY_229;
                                    break;
                                case"keyup":
                                case"compositionend":
                                    inputmask.isComposing && (inputmask.skipInputEvent = !1);
                                    break;
                                case"keypress":
                                    if (!0 === inputmask.skipKeyPressEvent) return e.preventDefault();
                                    inputmask.skipKeyPressEvent = !0;
                                    break;
                                case"click":
                                case"focus":
                                    return inputmask.validationEvent ? (inputmask.validationEvent = !1, input.blur(), (0, _inputHandling.HandleNativePlaceholder)(input, (inputmask.isRTL ? _positioning.getBufferTemplate.call(inputmask).slice().reverse() : _positioning.getBufferTemplate.call(inputmask)).join("")), setTimeout(function () {
                                        input.focus()
                                    }, 3e3)) : (args = arguments, setTimeout(function () {
                                        input.inputmask && eventHandler.apply(that, args)
                                    }, 0)), !1
                            }
                            var returnVal = eventHandler.apply(that, arguments);
                            return !1 === returnVal && (e.preventDefault(), e.stopPropagation()), returnVal
                        }
                        e.preventDefault()
                    }
                };
                input.inputmask.events[eventName] = input.inputmask.events[eventName] || [], input.inputmask.events[eventName].push(ev), ["submit", "reset"].includes(eventName) ? null !== input.form && $(input.form).on(eventName, ev.bind(input)) : $(input).on(eventName, ev)
            }, off: function off(input, event) {
                if (input.inputmask && input.inputmask.events) {
                    var $ = input.inputmask.dependencyLib, events = input.inputmask.events;
                    for (var eventName in event && (events = [], events[event] = input.inputmask.events[event]), events) {
                        for (var evArr = events[eventName]; 0 < evArr.length;) {
                            var ev = evArr.pop();
                            ["submit", "reset"].includes(eventName) ? null !== input.form && $(input.form).off(eventName, ev) : $(input).off(eventName, ev)
                        }
                        delete input.inputmask.events[eventName]
                    }
                }
            }
        };
        exports.EventRuler = EventRuler
    }, function (module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0}), exports.default = void 0;
        var _jquery = _interopRequireDefault(__webpack_require__(8));

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {default: obj}
        }

        if (void 0 === _jquery.default) throw"jQuery not loaded!";
        var _default = _jquery.default;
        exports.default = _default
    }, function (module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0}), exports.default = void 0;
        var _default = "undefined" != typeof window ? window : new (eval("require('jsdom').JSDOM"))("").window;
        exports.default = _default
    }, function (module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0}), exports.default = _default;
        var escapeRegexRegex = new RegExp("(\\" + ["/", ".", "*", "+", "?", "|", "(", ")", "[", "]", "{", "}", "\\", "$", "^"].join("|\\") + ")", "gim");

        function _default(str) {
            return str.replace(escapeRegexRegex, "\\$1")
        }
    }, function (module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0}), exports.default = void 0, __webpack_require__(16), __webpack_require__(20), __webpack_require__(21), __webpack_require__(22);
        var _inputmask2 = _interopRequireDefault(__webpack_require__(1));

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {default: obj}
        }

        var _default = _inputmask2.default;
        exports.default = _default
    }, function (module, exports, __webpack_require__) {
        "use strict";
        var _inputmask = _interopRequireDefault(__webpack_require__(1));

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {default: obj}
        }

        _inputmask.default.extendDefinitions({
            A: {
                validator: "[A-Za-z\u0410-\u044f\u0401\u0451\xc0-\xff\xb5]",
                casing: "upper"
            },
            "&": {validator: "[0-9A-Za-z\u0410-\u044f\u0401\u0451\xc0-\xff\xb5]", casing: "upper"},
            "#": {validator: "[0-9A-Fa-f]", casing: "upper"}
        });
        var ipValidatorRegex = new RegExp("25[0-5]|2[0-4][0-9]|[01][0-9][0-9]");

        function ipValidator(chrs, maskset, pos, strict, opts) {
            return chrs = -1 < pos - 1 && "." !== maskset.buffer[pos - 1] ? (chrs = maskset.buffer[pos - 1] + chrs, -1 < pos - 2 && "." !== maskset.buffer[pos - 2] ? maskset.buffer[pos - 2] + chrs : "0" + chrs) : "00" + chrs, ipValidatorRegex.test(chrs)
        }

        _inputmask.default.extendAliases({
            cssunit: {regex: "[+-]?[0-9]+\\.?([0-9]+)?(px|em|rem|ex|%|in|cm|mm|pt|pc)"},
            url: {regex: "(https?|ftp)://.*", autoUnmask: !1, keepStatic: !1, tabThrough: !0},
            ip: {
                mask: "i[i[i]].j[j[j]].k[k[k]].l[l[l]]",
                definitions: {
                    i: {validator: ipValidator},
                    j: {validator: ipValidator},
                    k: {validator: ipValidator},
                    l: {validator: ipValidator}
                },
                onUnMask: function onUnMask(maskedValue, unmaskedValue, opts) {
                    return maskedValue
                },
                inputmode: "numeric"
            },
            email: {
                mask: "*{1,64}[.*{1,64}][.*{1,64}][.*{1,63}]@-{1,63}.-{1,63}[.-{1,63}][.-{1,63}]",
                greedy: !1,
                casing: "lower",
                onBeforePaste: function onBeforePaste(pastedValue, opts) {
                    return pastedValue = pastedValue.toLowerCase(), pastedValue.replace("mailto:", "")
                },
                definitions: {
                    "*": {validator: "[0-9\uff11-\uff19A-Za-z\u0410-\u044f\u0401\u0451\xc0-\xff\xb5!#$%&'*+/=?^_`{|}~-]"},
                    "-": {validator: "[0-9A-Za-z-]"}
                },
                onUnMask: function onUnMask(maskedValue, unmaskedValue, opts) {
                    return maskedValue
                },
                inputmode: "email"
            },
            mac: {mask: "##:##:##:##:##:##"},
            vin: {
                mask: "V{13}9{4}",
                definitions: {V: {validator: "[A-HJ-NPR-Za-hj-npr-z\\d]", casing: "upper"}},
                clearIncomplete: !0,
                autoUnmask: !0
            },
            ssn: {
                mask: "999-99-9999",
                postValidation: function postValidation(buffer, pos, c, currentResult, opts, maskset, strict) {
                    return /^(?!219-09-9999|078-05-1120)(?!666|000|9.{2}).{3}-(?!00).{2}-(?!0{4}).{4}$/.test(buffer.join(""))
                }
            }
        })
    }, function (module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0}), exports.generateMaskSet = generateMaskSet, exports.analyseMask = analyseMask;
        var _inputmask = _interopRequireDefault(__webpack_require__(12));

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {default: obj}
        }

        function generateMaskSet(opts, nocache) {
            var ms;

            function generateMask(mask, metadata, opts) {
                var regexMask = !1, masksetDefinition, maskdefKey;
                if (null !== mask && "" !== mask || (regexMask = null !== opts.regex, mask = regexMask ? (mask = opts.regex, mask.replace(/^(\^)(.*)(\$)$/, "$2")) : (regexMask = !0, ".*")), 1 === mask.length && !1 === opts.greedy && 0 !== opts.repeat && (opts.placeholder = ""), 0 < opts.repeat || "*" === opts.repeat || "+" === opts.repeat) {
                    var repeatStart = "*" === opts.repeat ? 0 : "+" === opts.repeat ? 1 : opts.repeat;
                    mask = opts.groupmarker[0] + mask + opts.groupmarker[1] + opts.quantifiermarker[0] + repeatStart + "," + opts.repeat + opts.quantifiermarker[1]
                }
                return maskdefKey = regexMask ? "regex_" + opts.regex : opts.numericInput ? mask.split("").reverse().join("") : mask, !1 !== opts.keepStatic && (maskdefKey = "ks_" + maskdefKey), void 0 === Inputmask.prototype.masksCache[maskdefKey] || !0 === nocache ? (masksetDefinition = {
                    mask: mask,
                    maskToken: Inputmask.prototype.analyseMask(mask, regexMask, opts),
                    validPositions: {},
                    _buffer: void 0,
                    buffer: void 0,
                    tests: {},
                    excludes: {},
                    metadata: metadata,
                    maskLength: void 0,
                    jitOffset: {}
                }, !0 !== nocache && (Inputmask.prototype.masksCache[maskdefKey] = masksetDefinition, masksetDefinition = _inputmask.default.extend(!0, {}, Inputmask.prototype.masksCache[maskdefKey]))) : masksetDefinition = _inputmask.default.extend(!0, {}, Inputmask.prototype.masksCache[maskdefKey]), masksetDefinition
            }

            if ("function" == typeof opts.mask && (opts.mask = opts.mask(opts)), Array.isArray(opts.mask)) {
                if (1 < opts.mask.length) {
                    null === opts.keepStatic && (opts.keepStatic = !0);
                    var altMask = opts.groupmarker[0];
                    return (opts.isRTL ? opts.mask.reverse() : opts.mask).forEach(function (msk) {
                        1 < altMask.length && (altMask += opts.groupmarker[1] + opts.alternatormarker + opts.groupmarker[0]), void 0 !== msk.mask && "function" != typeof msk.mask ? altMask += msk.mask : altMask += msk
                    }), altMask += opts.groupmarker[1], generateMask(altMask, opts.mask, opts)
                }
                opts.mask = opts.mask.pop()
            }
            return null === opts.keepStatic && (opts.keepStatic = !1), ms = opts.mask && void 0 !== opts.mask.mask && "function" != typeof opts.mask.mask ? generateMask(opts.mask.mask, opts.mask, opts) : generateMask(opts.mask, opts.mask, opts), ms
        }

        function analyseMask(mask, regexMask, opts) {
            var tokenizer = /(?:[?*+]|\{[0-9+*]+(?:,[0-9+*]*)?(?:\|[0-9+*]*)?\})|[^.?*+^${[]()|\\]+|./g,
                regexTokenizer = /\[\^?]?(?:[^\\\]]+|\\[\S\s]?)*]?|\\(?:0(?:[0-3][0-7]{0,2}|[4-7][0-7]?)?|[1-9][0-9]*|x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4}|c[A-Za-z]|[\S\s]?)|\((?:\?[:=!]?)?|(?:[?*+]|\{[0-9]+(?:,[0-9]*)?\})\??|[^.?*+^${[()|\\]+|./g,
                escaped = !1, currentToken = new MaskToken, match, m, openenings = [], maskTokens = [], openingToken,
                currentOpeningToken, alternator, lastMatch, closeRegexGroup = !1;

            function MaskToken(isGroup, isOptional, isQuantifier, isAlternator) {
                this.matches = [], this.openGroup = isGroup || !1, this.alternatorGroup = !1, this.isGroup = isGroup || !1, this.isOptional = isOptional || !1, this.isQuantifier = isQuantifier || !1, this.isAlternator = isAlternator || !1, this.quantifier = {
                    min: 1,
                    max: 1
                }
            }

            function insertTestDefinition(mtoken, element, position) {
                position = void 0 !== position ? position : mtoken.matches.length;
                var prevMatch = mtoken.matches[position - 1];
                if (regexMask) 0 === element.indexOf("[") || escaped && /\\d|\\s|\\w]/i.test(element) || "." === element ? mtoken.matches.splice(position++, 0, {
                    fn: new RegExp(element, opts.casing ? "i" : ""),
                    static: !1,
                    optionality: !1,
                    newBlockMarker: void 0 === prevMatch ? "master" : prevMatch.def !== element,
                    casing: null,
                    def: element,
                    placeholder: void 0,
                    nativeDef: element
                }) : (escaped && (element = element[element.length - 1]), element.split("").forEach(function (lmnt, ndx) {
                    prevMatch = mtoken.matches[position - 1], mtoken.matches.splice(position++, 0, {
                        fn: /[a-z]/i.test(opts.staticDefinitionSymbol || lmnt) ? new RegExp("[" + (opts.staticDefinitionSymbol || lmnt) + "]", opts.casing ? "i" : "") : null,
                        static: !0,
                        optionality: !1,
                        newBlockMarker: void 0 === prevMatch ? "master" : prevMatch.def !== lmnt && !0 !== prevMatch.static,
                        casing: null,
                        def: opts.staticDefinitionSymbol || lmnt,
                        placeholder: void 0 !== opts.staticDefinitionSymbol ? lmnt : void 0,
                        nativeDef: (escaped ? "'" : "") + lmnt
                    })
                })), escaped = !1; else {
                    var maskdef = opts.definitions && opts.definitions[element] || opts.usePrototypeDefinitions && Inputmask.prototype.definitions[element];
                    maskdef && !escaped ? mtoken.matches.splice(position++, 0, {
                        fn: maskdef.validator ? "string" == typeof maskdef.validator ? new RegExp(maskdef.validator, opts.casing ? "i" : "") : new function () {
                            this.test = maskdef.validator
                        } : new RegExp("."),
                        static: maskdef.static || !1,
                        optionality: !1,
                        newBlockMarker: void 0 === prevMatch ? "master" : prevMatch.def !== (maskdef.definitionSymbol || element),
                        casing: maskdef.casing,
                        def: maskdef.definitionSymbol || element,
                        placeholder: maskdef.placeholder,
                        nativeDef: element,
                        generated: maskdef.generated
                    }) : (mtoken.matches.splice(position++, 0, {
                        fn: /[a-z]/i.test(opts.staticDefinitionSymbol || element) ? new RegExp("[" + (opts.staticDefinitionSymbol || element) + "]", opts.casing ? "i" : "") : null,
                        static: !0,
                        optionality: !1,
                        newBlockMarker: void 0 === prevMatch ? "master" : prevMatch.def !== element && !0 !== prevMatch.static,
                        casing: null,
                        def: opts.staticDefinitionSymbol || element,
                        placeholder: void 0 !== opts.staticDefinitionSymbol ? element : void 0,
                        nativeDef: (escaped ? "'" : "") + element
                    }), escaped = !1)
                }
            }

            function verifyGroupMarker(maskToken) {
                maskToken && maskToken.matches && maskToken.matches.forEach(function (token, ndx) {
                    var nextToken = maskToken.matches[ndx + 1];
                    (void 0 === nextToken || void 0 === nextToken.matches || !1 === nextToken.isQuantifier) && token && token.isGroup && (token.isGroup = !1, regexMask || (insertTestDefinition(token, opts.groupmarker[0], 0), !0 !== token.openGroup && insertTestDefinition(token, opts.groupmarker[1]))), verifyGroupMarker(token)
                })
            }

            function defaultCase() {
                if (0 < openenings.length) {
                    if (currentOpeningToken = openenings[openenings.length - 1], insertTestDefinition(currentOpeningToken, m), currentOpeningToken.isAlternator) {
                        alternator = openenings.pop();
                        for (var mndx = 0; mndx < alternator.matches.length; mndx++) alternator.matches[mndx].isGroup && (alternator.matches[mndx].isGroup = !1);
                        0 < openenings.length ? (currentOpeningToken = openenings[openenings.length - 1], currentOpeningToken.matches.push(alternator)) : currentToken.matches.push(alternator)
                    }
                } else insertTestDefinition(currentToken, m)
            }

            function reverseTokens(maskToken) {
                function reverseStatic(st) {
                    return st === opts.optionalmarker[0] ? st = opts.optionalmarker[1] : st === opts.optionalmarker[1] ? st = opts.optionalmarker[0] : st === opts.groupmarker[0] ? st = opts.groupmarker[1] : st === opts.groupmarker[1] && (st = opts.groupmarker[0]), st
                }

                for (var match in maskToken.matches = maskToken.matches.reverse(), maskToken.matches) if (Object.prototype.hasOwnProperty.call(maskToken.matches, match)) {
                    var intMatch = parseInt(match);
                    if (maskToken.matches[match].isQuantifier && maskToken.matches[intMatch + 1] && maskToken.matches[intMatch + 1].isGroup) {
                        var qt = maskToken.matches[match];
                        maskToken.matches.splice(match, 1), maskToken.matches.splice(intMatch + 1, 0, qt)
                    }
                    void 0 !== maskToken.matches[match].matches ? maskToken.matches[match] = reverseTokens(maskToken.matches[match]) : maskToken.matches[match] = reverseStatic(maskToken.matches[match])
                }
                return maskToken
            }

            function groupify(matches) {
                var groupToken = new MaskToken(!0);
                return groupToken.openGroup = !1, groupToken.matches = matches, groupToken
            }

            function closeGroup() {
                if (openingToken = openenings.pop(), openingToken.openGroup = !1, void 0 !== openingToken) if (0 < openenings.length) {
                    if (currentOpeningToken = openenings[openenings.length - 1], currentOpeningToken.matches.push(openingToken), currentOpeningToken.isAlternator) {
                        alternator = openenings.pop();
                        for (var mndx = 0; mndx < alternator.matches.length; mndx++) alternator.matches[mndx].isGroup = !1, alternator.matches[mndx].alternatorGroup = !1;
                        0 < openenings.length ? (currentOpeningToken = openenings[openenings.length - 1], currentOpeningToken.matches.push(alternator)) : currentToken.matches.push(alternator)
                    }
                } else currentToken.matches.push(openingToken); else defaultCase()
            }

            function groupQuantifier(matches) {
                var lastMatch = matches.pop();
                return lastMatch.isQuantifier && (lastMatch = groupify([matches.pop(), lastMatch])), lastMatch
            }

            for (regexMask && (opts.optionalmarker[0] = void 0, opts.optionalmarker[1] = void 0); match = regexMask ? regexTokenizer.exec(mask) : tokenizer.exec(mask);) {
                if (m = match[0], regexMask) switch (m.charAt(0)) {
                    case"?":
                        m = "{0,1}";
                        break;
                    case"+":
                    case"*":
                        m = "{" + m + "}";
                        break;
                    case"|":
                        if (0 === openenings.length) {
                            var altRegexGroup = groupify(currentToken.matches);
                            altRegexGroup.openGroup = !0, openenings.push(altRegexGroup), currentToken.matches = [], closeRegexGroup = !0
                        }
                        break
                }
                if (escaped) defaultCase(); else switch (m.charAt(0)) {
                    case"$":
                    case"^":
                        regexMask || defaultCase();
                        break;
                    case"(?=":
                        break;
                    case"(?!":
                        break;
                    case"(?<=":
                        break;
                    case"(?<!":
                        break;
                    case opts.escapeChar:
                        escaped = !0, regexMask && defaultCase();
                        break;
                    case opts.optionalmarker[1]:
                    case opts.groupmarker[1]:
                        closeGroup();
                        break;
                    case opts.optionalmarker[0]:
                        openenings.push(new MaskToken(!1, !0));
                        break;
                    case opts.groupmarker[0]:
                        openenings.push(new MaskToken(!0));
                        break;
                    case opts.quantifiermarker[0]:
                        var quantifier = new MaskToken(!1, !1, !0);
                        m = m.replace(/[{}]/g, "");
                        var mqj = m.split("|"), mq = mqj[0].split(","), mq0 = isNaN(mq[0]) ? mq[0] : parseInt(mq[0]),
                            mq1 = 1 === mq.length ? mq0 : isNaN(mq[1]) ? mq[1] : parseInt(mq[1]);
                        "*" !== mq0 && "+" !== mq0 || (mq0 = "*" === mq1 ? 0 : 1), quantifier.quantifier = {
                            min: mq0,
                            max: mq1,
                            jit: mqj[1]
                        };
                        var matches = 0 < openenings.length ? openenings[openenings.length - 1].matches : currentToken.matches;
                        if (match = matches.pop(), match.isAlternator) {
                            matches.push(match), matches = match.matches;
                            var groupToken = new MaskToken(!0), tmpMatch = matches.pop();
                            matches.push(groupToken), matches = groupToken.matches, match = tmpMatch
                        }
                        match.isGroup || (match = groupify([match])), matches.push(match), matches.push(quantifier);
                        break;
                    case opts.alternatormarker:
                        if (0 < openenings.length) {
                            currentOpeningToken = openenings[openenings.length - 1];
                            var subToken = currentOpeningToken.matches[currentOpeningToken.matches.length - 1];
                            lastMatch = currentOpeningToken.openGroup && (void 0 === subToken.matches || !1 === subToken.isGroup && !1 === subToken.isAlternator) ? openenings.pop() : groupQuantifier(currentOpeningToken.matches)
                        } else lastMatch = groupQuantifier(currentToken.matches);
                        if (lastMatch.isAlternator) openenings.push(lastMatch); else if (lastMatch.alternatorGroup ? (alternator = openenings.pop(), lastMatch.alternatorGroup = !1) : alternator = new MaskToken(!1, !1, !1, !0), alternator.matches.push(lastMatch), openenings.push(alternator), lastMatch.openGroup) {
                            lastMatch.openGroup = !1;
                            var alternatorGroup = new MaskToken(!0);
                            alternatorGroup.alternatorGroup = !0, openenings.push(alternatorGroup)
                        }
                        break;
                    default:
                        defaultCase()
                }
            }
            for (closeRegexGroup && closeGroup(); 0 < openenings.length;) openingToken = openenings.pop(), currentToken.matches.push(openingToken);
            return 0 < currentToken.matches.length && (verifyGroupMarker(currentToken), maskTokens.push(currentToken)), (opts.numericInput || opts.isRTL) && reverseTokens(maskTokens[0]), maskTokens
        }
    }, function (module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0}), exports.default = void 0;
        var _default = {
            9: {validator: "[0-9\uff10-\uff19]", definitionSymbol: "*"},
            a: {validator: "[A-Za-z\u0410-\u044f\u0401\u0451\xc0-\xff\xb5]", definitionSymbol: "*"},
            "*": {validator: "[0-9\uff10-\uff19A-Za-z\u0410-\u044f\u0401\u0451\xc0-\xff\xb5]"}
        };
        exports.default = _default
    }, function (module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0}), exports.default = void 0;
        var _default = {
            _maxTestPos: 500,
            placeholder: "_",
            optionalmarker: ["[", "]"],
            quantifiermarker: ["{", "}"],
            groupmarker: ["(", ")"],
            alternatormarker: "|",
            escapeChar: "\\",
            mask: null,
            regex: null,
            oncomplete: function oncomplete() {
            },
            onincomplete: function onincomplete() {
            },
            oncleared: function oncleared() {
            },
            repeat: 0,
            greedy: !1,
            autoUnmask: !1,
            removeMaskOnSubmit: !1,
            clearMaskOnLostFocus: !0,
            insertMode: !0,
            insertModeVisual: !0,
            clearIncomplete: !1,
            alias: null,
            onKeyDown: function onKeyDown() {
            },
            onBeforeMask: null,
            onBeforePaste: function onBeforePaste(pastedValue, opts) {
                return "function" == typeof opts.onBeforeMask ? opts.onBeforeMask.call(this, pastedValue, opts) : pastedValue
            },
            onBeforeWrite: null,
            onUnMask: null,
            showMaskOnFocus: !0,
            showMaskOnHover: !0,
            onKeyValidation: function onKeyValidation() {
            },
            skipOptionalPartCharacter: " ",
            numericInput: !1,
            rightAlign: !1,
            undoOnEscape: !0,
            radixPoint: "",
            _radixDance: !1,
            groupSeparator: "",
            keepStatic: null,
            positionCaretOnTab: !0,
            tabThrough: !1,
            supportsInputType: ["text", "tel", "url", "password", "search"],
            ignorables: [8, 9, 19, 27, 33, 34, 35, 36, 37, 38, 39, 40, 45, 46, 93, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 0, 229],
            isComplete: null,
            preValidation: null,
            postValidation: null,
            staticDefinitionSymbol: void 0,
            jitMasking: !1,
            nullable: !0,
            inputEventOnly: !1,
            noValuePatching: !1,
            positionCaretOnClick: "lvp",
            casing: null,
            inputmode: "text",
            importDataAttributes: !0,
            shiftPositions: !0,
            usePrototypeDefinitions: !0
        };
        exports.default = _default
    }, function (module, exports, __webpack_require__) {
        "use strict";
        var _inputmask = _interopRequireDefault(__webpack_require__(1)),
            _keycode = _interopRequireDefault(__webpack_require__(0)),
            _escapeRegex = _interopRequireDefault(__webpack_require__(14));

        function _typeof(obj) {
            return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function _typeof(obj) {
                return typeof obj
            } : function _typeof(obj) {
                return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj
            }, _typeof(obj)
        }

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {default: obj}
        }

        var $ = _inputmask.default.dependencyLib, currentYear = (new Date).getFullYear(), formatCode = {
            d: ["[1-9]|[12][0-9]|3[01]", Date.prototype.setDate, "day", Date.prototype.getDate],
            dd: ["0[1-9]|[12][0-9]|3[01]", Date.prototype.setDate, "day", function () {
                return pad(Date.prototype.getDate.call(this), 2)
            }],
            ddd: [""],
            dddd: [""],
            m: ["[1-9]|1[012]", Date.prototype.setMonth, "month", function () {
                return Date.prototype.getMonth.call(this) + 1
            }],
            mm: ["0[1-9]|1[012]", Date.prototype.setMonth, "month", function () {
                return pad(Date.prototype.getMonth.call(this) + 1, 2)
            }],
            mmm: [""],
            mmmm: [""],
            yy: ["[0-9]{2}", Date.prototype.setFullYear, "year", function () {
                return pad(Date.prototype.getFullYear.call(this), 2)
            }],
            yyyy: ["[0-9]{4}", Date.prototype.setFullYear, "year", function () {
                return pad(Date.prototype.getFullYear.call(this), 4)
            }],
            h: ["[1-9]|1[0-2]", Date.prototype.setHours, "hours", Date.prototype.getHours],
            hh: ["0[1-9]|1[0-2]", Date.prototype.setHours, "hours", function () {
                return pad(Date.prototype.getHours.call(this), 2)
            }],
            hx: [function (x) {
                return "[0-9]{".concat(x, "}")
            }, Date.prototype.setHours, "hours", function (x) {
                return Date.prototype.getHours
            }],
            H: ["1?[0-9]|2[0-3]", Date.prototype.setHours, "hours", Date.prototype.getHours],
            HH: ["0[0-9]|1[0-9]|2[0-3]", Date.prototype.setHours, "hours", function () {
                return pad(Date.prototype.getHours.call(this), 2)
            }],
            Hx: [function (x) {
                return "[0-9]{".concat(x, "}")
            }, Date.prototype.setHours, "hours", function (x) {
                return function () {
                    return pad(Date.prototype.getHours.call(this), x)
                }
            }],
            M: ["[1-5]?[0-9]", Date.prototype.setMinutes, "minutes", Date.prototype.getMinutes],
            MM: ["0[0-9]|1[0-9]|2[0-9]|3[0-9]|4[0-9]|5[0-9]", Date.prototype.setMinutes, "minutes", function () {
                return pad(Date.prototype.getMinutes.call(this), 2)
            }],
            s: ["[1-5]?[0-9]", Date.prototype.setSeconds, "seconds", Date.prototype.getSeconds],
            ss: ["0[0-9]|1[0-9]|2[0-9]|3[0-9]|4[0-9]|5[0-9]", Date.prototype.setSeconds, "seconds", function () {
                return pad(Date.prototype.getSeconds.call(this), 2)
            }],
            l: ["[0-9]{3}", Date.prototype.setMilliseconds, "milliseconds", function () {
                return pad(Date.prototype.getMilliseconds.call(this), 3)
            }],
            L: ["[0-9]{2}", Date.prototype.setMilliseconds, "milliseconds", function () {
                return pad(Date.prototype.getMilliseconds.call(this), 2)
            }],
            t: ["[ap]"],
            tt: ["[ap]m"],
            T: ["[AP]"],
            TT: ["[AP]M"],
            Z: [""],
            o: [""],
            S: [""]
        }, formatAlias = {
            isoDate: "yyyy-mm-dd",
            isoTime: "HH:MM:ss",
            isoDateTime: "yyyy-mm-dd'T'HH:MM:ss",
            isoUtcDateTime: "UTC:yyyy-mm-dd'T'HH:MM:ss'Z'"
        };

        function formatcode(match) {
            var dynMatches = new RegExp("\\d+$").exec(match[0]);
            if (dynMatches && void 0 !== dynMatches[0]) {
                var fcode = formatCode[match[0][0] + "x"].slice("");
                return fcode[0] = fcode[0](dynMatches[0]), fcode[3] = fcode[3](dynMatches[0]), fcode
            }
            if (formatCode[match[0]]) return formatCode[match[0]]
        }

        function getTokenizer(opts) {
            if (!opts.tokenizer) {
                var tokens = [], dyntokens = [];
                for (var ndx in formatCode) if (/\.*x$/.test(ndx)) {
                    var dynToken = ndx[0] + "\\d+";
                    -1 === dyntokens.indexOf(dynToken) && dyntokens.push(dynToken)
                } else -1 === tokens.indexOf(ndx[0]) && tokens.push(ndx[0]);
                opts.tokenizer = "(" + (0 < dyntokens.length ? dyntokens.join("|") + "|" : "") + tokens.join("+|") + ")+?|.", opts.tokenizer = new RegExp(opts.tokenizer, "g")
            }
            return opts.tokenizer
        }

        function prefillYear(dateParts, currentResult, opts) {
            if (dateParts.year !== dateParts.rawyear) {
                var crrntyear = currentYear.toString(), enteredPart = dateParts.rawyear.replace(/[^0-9]/g, ""),
                    currentYearPart = crrntyear.slice(0, enteredPart.length),
                    currentYearNextPart = crrntyear.slice(enteredPart.length);
                if (2 === enteredPart.length && enteredPart === currentYearPart) {
                    var entryCurrentYear = new Date(currentYear, dateParts.month - 1, dateParts.day);
                    dateParts.day == entryCurrentYear.getDate() && (!opts.max || opts.max.date.getTime() >= entryCurrentYear.getTime()) && (dateParts.date.setFullYear(currentYear), dateParts.year = crrntyear, currentResult.insert = [{
                        pos: currentResult.pos + 1,
                        c: currentYearNextPart[0]
                    }, {pos: currentResult.pos + 2, c: currentYearNextPart[1]}])
                }
            }
            return currentResult
        }

        function isValidDate(dateParts, currentResult, opts) {
            if (!isFinite(dateParts.rawday) || "29" == dateParts.day && !isFinite(dateParts.rawyear) || new Date(dateParts.date.getFullYear(), isFinite(dateParts.rawmonth) ? dateParts.month : dateParts.date.getMonth() + 1, 0).getDate() >= dateParts.day) return currentResult;
            if ("29" == dateParts.day) {
                var tokenMatch = getTokenMatch(currentResult.pos, opts);
                if ("yyyy" === tokenMatch.targetMatch[0] && currentResult.pos - tokenMatch.targetMatchIndex == 2) return currentResult.remove = currentResult.pos + 1, currentResult
            }
            return !1
        }

        function isDateInRange(dateParts, result, opts, maskset, fromCheckval) {
            if (!result) return result;
            if (opts.min) {
                if (dateParts.rawyear) {
                    var rawYear = dateParts.rawyear.replace(/[^0-9]/g, ""),
                        minYear = opts.min.year.substr(0, rawYear.length), maxYear;
                    if (rawYear < minYear) {
                        var tokenMatch = getTokenMatch(result.pos, opts);
                        if (rawYear = dateParts.rawyear.substr(0, result.pos - tokenMatch.targetMatchIndex + 1), minYear = opts.min.year.substr(0, rawYear.length), minYear <= rawYear) return result.remove = tokenMatch.targetMatchIndex + rawYear.length, result;
                        if (rawYear = "yyyy" === tokenMatch.targetMatch[0] ? dateParts.rawyear.substr(1, 1) : dateParts.rawyear.substr(0, 1), minYear = opts.min.year.substr(2, 1), maxYear = opts.max ? opts.max.year.substr(2, 1) : rawYear, 1 === rawYear.length && minYear <= rawYear <= maxYear && !0 !== fromCheckval) return "yyyy" === tokenMatch.targetMatch[0] ? (result.insert = [{
                            pos: result.pos + 1,
                            c: rawYear,
                            strict: !0
                        }], result.caret = result.pos + 2, maskset.validPositions[result.pos].input = opts.min.year[1]) : (result.insert = [{
                            pos: result.pos + 1,
                            c: opts.min.year[1],
                            strict: !0
                        }, {
                            pos: result.pos + 2,
                            c: rawYear,
                            strict: !0
                        }], result.caret = result.pos + 3, maskset.validPositions[result.pos].input = opts.min.year[0]), result;
                        result = !1
                    }
                }
                result && dateParts.year && dateParts.year === dateParts.rawyear && opts.min.date.getTime() == opts.min.date.getTime() && (result = opts.min.date.getTime() <= dateParts.date.getTime())
            }
            return result && opts.max && opts.max.date.getTime() == opts.max.date.getTime() && (result = opts.max.date.getTime() >= dateParts.date.getTime()), result
        }

        function parse(format, dateObjValue, opts, raw) {
            var mask = "", match, fcode;
            for (getTokenizer(opts).lastIndex = 0; match = getTokenizer(opts).exec(format);) if (void 0 === dateObjValue) if (fcode = formatcode(match)) mask += "(" + fcode[0] + ")"; else switch (match[0]) {
                case"[":
                    mask += "(";
                    break;
                case"]":
                    mask += ")?";
                    break;
                default:
                    mask += (0, _escapeRegex.default)(match[0])
            } else if (fcode = formatcode(match)) if (!0 !== raw && fcode[3]) {
                var getFn = fcode[3];
                mask += getFn.call(dateObjValue.date)
            } else fcode[2] ? mask += dateObjValue["raw" + fcode[2]] : mask += match[0]; else mask += match[0];
            return mask
        }

        function pad(val, len) {
            for (val = String(val), len = len || 2; val.length < len;) val = "0" + val;
            return val
        }

        function analyseMask(maskString, format, opts) {
            var dateObj = {date: new Date(1, 0, 1)}, targetProp, mask = maskString, match, dateOperation;

            function setValue(dateObj, value, opts) {
                dateObj[targetProp] = value.replace(/[^0-9]/g, "0"), dateObj["raw" + targetProp] = value, void 0 !== dateOperation && dateOperation.call(dateObj.date, "month" == targetProp ? parseInt(dateObj[targetProp]) - 1 : dateObj[targetProp])
            }

            if ("string" == typeof mask) {
                for (getTokenizer(opts).lastIndex = 0; match = getTokenizer(opts).exec(format);) {
                    var dynMatches = new RegExp("\\d+$").exec(match[0]),
                        fcode = dynMatches ? match[0][0] + "x" : match[0], value = void 0;
                    if (dynMatches) {
                        var lastIndex = getTokenizer(opts).lastIndex, tokanMatch = getTokenMatch(match.index, opts);
                        getTokenizer(opts).lastIndex = lastIndex, value = mask.slice(0, mask.indexOf(tokanMatch.nextMatch[0]))
                    } else value = mask.slice(0, fcode.length);
                    Object.prototype.hasOwnProperty.call(formatCode, fcode) && (targetProp = formatCode[fcode][2], dateOperation = formatCode[fcode][1], setValue(dateObj, value, opts)), mask = mask.slice(value.length)
                }
                return dateObj
            }
            if (mask && "object" === _typeof(mask) && Object.prototype.hasOwnProperty.call(mask, "date")) return mask
        }

        function importDate(dateObj, opts) {
            return parse(opts.inputFormat, {date: dateObj}, opts)
        }

        function getTokenMatch(pos, opts) {
            var calcPos = 0, targetMatch, match, matchLength = 0;
            for (getTokenizer(opts).lastIndex = 0; match = getTokenizer(opts).exec(opts.inputFormat);) {
                var dynMatches = new RegExp("\\d+$").exec(match[0]);
                if (matchLength = dynMatches ? parseInt(dynMatches[0]) : match[0].length, calcPos += matchLength, pos <= calcPos) {
                    targetMatch = match, match = getTokenizer(opts).exec(opts.inputFormat);
                    break
                }
            }
            return {targetMatchIndex: calcPos - matchLength, nextMatch: match, targetMatch: targetMatch}
        }

        _inputmask.default.extendAliases({
            datetime: {
                mask: function mask(opts) {
                    return opts.numericInput = !1, formatCode.S = opts.i18n.ordinalSuffix.join("|"), opts.inputFormat = formatAlias[opts.inputFormat] || opts.inputFormat, opts.displayFormat = formatAlias[opts.displayFormat] || opts.displayFormat || opts.inputFormat, opts.outputFormat = formatAlias[opts.outputFormat] || opts.outputFormat || opts.inputFormat, opts.placeholder = "" !== opts.placeholder ? opts.placeholder : opts.inputFormat.replace(/[[\]]/, ""), opts.regex = parse(opts.inputFormat, void 0, opts), opts.min = analyseMask(opts.min, opts.inputFormat, opts), opts.max = analyseMask(opts.max, opts.inputFormat, opts), null
                },
                placeholder: "",
                inputFormat: "isoDateTime",
                displayFormat: void 0,
                outputFormat: void 0,
                min: null,
                max: null,
                skipOptionalPartCharacter: "",
                i18n: {
                    dayNames: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
                    monthNames: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                    ordinalSuffix: ["st", "nd", "rd", "th"]
                },
                preValidation: function preValidation(buffer, pos, c, isSelection, opts, maskset, caretPos, strict) {
                    if (strict) return !0;
                    if (isNaN(c) && buffer[pos] !== c) {
                        var tokenMatch = getTokenMatch(pos, opts);
                        if (tokenMatch.nextMatch && tokenMatch.nextMatch[0] === c && 1 < tokenMatch.targetMatch[0].length) {
                            var validator = formatCode[tokenMatch.targetMatch[0]][0];
                            if (new RegExp(validator).test("0" + buffer[pos - 1])) return buffer[pos] = buffer[pos - 1], buffer[pos - 1] = "0", {
                                fuzzy: !0,
                                buffer: buffer,
                                refreshFromBuffer: {start: pos - 1, end: pos + 1},
                                pos: pos + 1
                            }
                        }
                    }
                    return !0
                },
                postValidation: function postValidation(buffer, pos, c, currentResult, opts, maskset, strict, fromCheckval) {
                    if (strict) return !0;
                    var tokenMatch, validator;
                    if (!1 === currentResult) return tokenMatch = getTokenMatch(pos + 1, opts), tokenMatch.targetMatch && tokenMatch.targetMatchIndex === pos && 1 < tokenMatch.targetMatch[0].length && void 0 !== formatCode[tokenMatch.targetMatch[0]] && (validator = formatCode[tokenMatch.targetMatch[0]][0], new RegExp(validator).test("0" + c)) ? {
                        insert: [{
                            pos: pos,
                            c: "0"
                        }, {pos: pos + 1, c: c}], pos: pos + 1
                    } : currentResult;
                    if (currentResult.fuzzy && (buffer = currentResult.buffer, pos = currentResult.pos), tokenMatch = getTokenMatch(pos, opts), tokenMatch.targetMatch && tokenMatch.targetMatch[0] && void 0 !== formatCode[tokenMatch.targetMatch[0]]) {
                        validator = formatCode[tokenMatch.targetMatch[0]][0];
                        var part = buffer.slice(tokenMatch.targetMatchIndex, tokenMatch.targetMatchIndex + tokenMatch.targetMatch[0].length);
                        !1 === new RegExp(validator).test(part.join("")) && 2 === tokenMatch.targetMatch[0].length && maskset.validPositions[tokenMatch.targetMatchIndex] && maskset.validPositions[tokenMatch.targetMatchIndex + 1] && (maskset.validPositions[tokenMatch.targetMatchIndex + 1].input = "0")
                    }
                    var result = currentResult, dateParts = analyseMask(buffer.join(""), opts.inputFormat, opts);
                    return result && dateParts.date.getTime() == dateParts.date.getTime() && (result = prefillYear(dateParts, result, opts), result = isValidDate(dateParts, result, opts), result = isDateInRange(dateParts, result, opts, maskset, fromCheckval)), pos && result && currentResult.pos !== pos ? {
                        buffer: parse(opts.inputFormat, dateParts, opts).split(""),
                        refreshFromBuffer: {start: pos, end: currentResult.pos}
                    } : result
                },
                onKeyDown: function onKeyDown(e, buffer, caretPos, opts) {
                    var input = this;
                    e.ctrlKey && e.keyCode === _keycode.default.RIGHT && (this.inputmask._valueSet(importDate(new Date, opts)), $(this).trigger("setvalue"))
                },
                onUnMask: function onUnMask(maskedValue, unmaskedValue, opts) {
                    return unmaskedValue ? parse(opts.outputFormat, analyseMask(maskedValue, opts.inputFormat, opts), opts, !0) : unmaskedValue
                },
                casing: function casing(elem, test, pos, validPositions) {
                    return 0 == test.nativeDef.indexOf("[ap]") ? elem.toLowerCase() : 0 == test.nativeDef.indexOf("[AP]") ? elem.toUpperCase() : elem
                },
                onBeforeMask: function onBeforeMask(initialValue, opts) {
                    return "[object Date]" === Object.prototype.toString.call(initialValue) && (initialValue = importDate(initialValue, opts)), initialValue
                },
                insertMode: !1,
                shiftPositions: !1,
                keepStatic: !1,
                inputmode: "numeric"
            }
        })
    }, function (module, exports, __webpack_require__) {
        "use strict";
        var _inputmask = _interopRequireDefault(__webpack_require__(1)),
            _keycode = _interopRequireDefault(__webpack_require__(0)),
            _escapeRegex = _interopRequireDefault(__webpack_require__(14));

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {default: obj}
        }

        var $ = _inputmask.default.dependencyLib;

        function autoEscape(txt, opts) {
            for (var escapedTxt = "", i = 0; i < txt.length; i++) _inputmask.default.prototype.definitions[txt.charAt(i)] || opts.definitions[txt.charAt(i)] || opts.optionalmarker[0] === txt.charAt(i) || opts.optionalmarker[1] === txt.charAt(i) || opts.quantifiermarker[0] === txt.charAt(i) || opts.quantifiermarker[1] === txt.charAt(i) || opts.groupmarker[0] === txt.charAt(i) || opts.groupmarker[1] === txt.charAt(i) || opts.alternatormarker === txt.charAt(i) ? escapedTxt += "\\" + txt.charAt(i) : escapedTxt += txt.charAt(i);
            return escapedTxt
        }

        function alignDigits(buffer, digits, opts, force) {
            if (0 < buffer.length && 0 < digits && (!opts.digitsOptional || force)) {
                var radixPosition = buffer.indexOf(opts.radixPoint), negationBack = !1;
                opts.negationSymbol.back === buffer[buffer.length - 1] && (negationBack = !0, buffer.length--), -1 === radixPosition && (buffer.push(opts.radixPoint), radixPosition = buffer.length - 1);
                for (var i = 1; i <= digits; i++) isFinite(buffer[radixPosition + i]) || (buffer[radixPosition + i] = "0")
            }
            return negationBack && buffer.push(opts.negationSymbol.back), buffer
        }

        function findValidator(symbol, maskset) {
            var posNdx = 0;
            if ("+" === symbol) {
                for (posNdx in maskset.validPositions) ;
                posNdx = parseInt(posNdx)
            }
            for (var tstNdx in maskset.tests) if (tstNdx = parseInt(tstNdx), posNdx <= tstNdx) for (var ndx = 0, ndxl = maskset.tests[tstNdx].length; ndx < ndxl; ndx++) if ((void 0 === maskset.validPositions[tstNdx] || "-" === symbol) && maskset.tests[tstNdx][ndx].match.def === symbol) return tstNdx + (void 0 !== maskset.validPositions[tstNdx] && "-" !== symbol ? 1 : 0);
            return posNdx
        }

        function findValid(symbol, maskset) {
            var ret = -1;
            for (var ndx in maskset.validPositions) {
                var tst = maskset.validPositions[ndx];
                if (tst && tst.match.def === symbol) {
                    ret = parseInt(ndx);
                    break
                }
            }
            return ret
        }

        function parseMinMaxOptions(opts) {
            void 0 === opts.parseMinMaxOptions && (null !== opts.min && (opts.min = opts.min.toString().replace(new RegExp((0, _escapeRegex.default)(opts.groupSeparator), "g"), ""), "," === opts.radixPoint && (opts.min = opts.min.replace(opts.radixPoint, ".")), opts.min = isFinite(opts.min) ? parseFloat(opts.min) : NaN, isNaN(opts.min) && (opts.min = Number.MIN_VALUE)), null !== opts.max && (opts.max = opts.max.toString().replace(new RegExp((0, _escapeRegex.default)(opts.groupSeparator), "g"), ""), "," === opts.radixPoint && (opts.max = opts.max.replace(opts.radixPoint, ".")), opts.max = isFinite(opts.max) ? parseFloat(opts.max) : NaN, isNaN(opts.max) && (opts.max = Number.MAX_VALUE)), opts.parseMinMaxOptions = "done")
        }

        function genMask(opts) {
            opts.repeat = 0, opts.groupSeparator === opts.radixPoint && opts.digits && "0" !== opts.digits && ("." === opts.radixPoint ? opts.groupSeparator = "," : "," === opts.radixPoint ? opts.groupSeparator = "." : opts.groupSeparator = ""), " " === opts.groupSeparator && (opts.skipOptionalPartCharacter = void 0), 1 < opts.placeholder.length && (opts.placeholder = opts.placeholder.charAt(0)), "radixFocus" === opts.positionCaretOnClick && "" === opts.placeholder && (opts.positionCaretOnClick = "lvp");
            var decimalDef = "0", radixPointDef = opts.radixPoint;
            !0 === opts.numericInput && void 0 === opts.__financeInput ? (decimalDef = "1", opts.positionCaretOnClick = "radixFocus" === opts.positionCaretOnClick ? "lvp" : opts.positionCaretOnClick, opts.digitsOptional = !1, isNaN(opts.digits) && (opts.digits = 2), opts._radixDance = !1, radixPointDef = "," === opts.radixPoint ? "?" : "!", "" !== opts.radixPoint && void 0 === opts.definitions[radixPointDef] && (opts.definitions[radixPointDef] = {}, opts.definitions[radixPointDef].validator = "[" + opts.radixPoint + "]", opts.definitions[radixPointDef].placeholder = opts.radixPoint, opts.definitions[radixPointDef].static = !0, opts.definitions[radixPointDef].generated = !0)) : (opts.__financeInput = !1, opts.numericInput = !0);
            var mask = "[+]", altMask;
            if (mask += autoEscape(opts.prefix, opts), "" !== opts.groupSeparator ? (void 0 === opts.definitions[opts.groupSeparator] && (opts.definitions[opts.groupSeparator] = {}, opts.definitions[opts.groupSeparator].validator = "[" + opts.groupSeparator + "]", opts.definitions[opts.groupSeparator].placeholder = opts.groupSeparator, opts.definitions[opts.groupSeparator].static = !0, opts.definitions[opts.groupSeparator].generated = !0), mask += opts._mask(opts)) : mask += "9{+}", void 0 !== opts.digits && 0 !== opts.digits) {
                var dq = opts.digits.toString().split(",");
                isFinite(dq[0]) && dq[1] && isFinite(dq[1]) ? mask += radixPointDef + decimalDef + "{" + opts.digits + "}" : (isNaN(opts.digits) || 0 < parseInt(opts.digits)) && (opts.digitsOptional ? (altMask = mask + radixPointDef + decimalDef + "{0," + opts.digits + "}", opts.keepStatic = !0) : mask += radixPointDef + decimalDef + "{" + opts.digits + "}")
            }
            return mask += autoEscape(opts.suffix, opts), mask += "[-]", altMask && (mask = [altMask + autoEscape(opts.suffix, opts) + "[-]", mask]), opts.greedy = !1, parseMinMaxOptions(opts), mask
        }

        function hanndleRadixDance(pos, c, radixPos, maskset, opts) {
            return opts._radixDance && opts.numericInput && c !== opts.negationSymbol.back && pos <= radixPos && (0 < radixPos || c == opts.radixPoint) && (void 0 === maskset.validPositions[pos - 1] || maskset.validPositions[pos - 1].input !== opts.negationSymbol.back) && (pos -= 1), pos
        }

        function decimalValidator(chrs, maskset, pos, strict, opts) {
            var radixPos = maskset.buffer ? maskset.buffer.indexOf(opts.radixPoint) : -1,
                result = -1 !== radixPos && new RegExp("[0-9\uff11-\uff19]").test(chrs);
            return opts._radixDance && result && null == maskset.validPositions[radixPos] ? {
                insert: {
                    pos: radixPos === pos ? radixPos + 1 : radixPos,
                    c: opts.radixPoint
                }, pos: pos
            } : result
        }

        function checkForLeadingZeroes(buffer, opts) {
            var numberMatches = new RegExp("(^" + ("" !== opts.negationSymbol.front ? (0, _escapeRegex.default)(opts.negationSymbol.front) + "?" : "") + (0, _escapeRegex.default)(opts.prefix) + ")(.*)(" + (0, _escapeRegex.default)(opts.suffix) + ("" != opts.negationSymbol.back ? (0, _escapeRegex.default)(opts.negationSymbol.back) + "?" : "") + "$)").exec(buffer.slice().reverse().join("")),
                number = numberMatches ? numberMatches[2] : "", leadingzeroes = !1;
            return number && (number = number.split(opts.radixPoint.charAt(0))[0], leadingzeroes = new RegExp("^[0" + opts.groupSeparator + "]*").exec(number)), !(!leadingzeroes || !(1 < leadingzeroes[0].length || 0 < leadingzeroes[0].length && leadingzeroes[0].length < number.length)) && leadingzeroes
        }

        _inputmask.default.extendAliases({
            numeric: {
                mask: genMask,
                _mask: function _mask(opts) {
                    return "(" + opts.groupSeparator + "999){+|1}"
                },
                digits: "*",
                digitsOptional: !0,
                enforceDigitsOnBlur: !1,
                radixPoint: ".",
                positionCaretOnClick: "radixFocus",
                _radixDance: !0,
                groupSeparator: "",
                allowMinus: !0,
                negationSymbol: {front: "-", back: ""},
                prefix: "",
                suffix: "",
                min: null,
                max: null,
                SetMaxOnOverflow: !1,
                step: 1,
                inputType: "text",
                unmaskAsNumber: !1,
                roundingFN: Math.round,
                inputmode: "numeric",
                shortcuts: {k: "000", m: "000000"},
                placeholder: "0",
                greedy: !1,
                rightAlign: !0,
                insertMode: !0,
                autoUnmask: !1,
                skipOptionalPartCharacter: "",
                definitions: {
                    0: {validator: decimalValidator},
                    1: {validator: decimalValidator, definitionSymbol: "9"},
                    "+": {
                        validator: function validator(chrs, maskset, pos, strict, opts) {
                            return opts.allowMinus && ("-" === chrs || chrs === opts.negationSymbol.front)
                        }
                    },
                    "-": {
                        validator: function validator(chrs, maskset, pos, strict, opts) {
                            return opts.allowMinus && chrs === opts.negationSymbol.back
                        }
                    }
                },
                preValidation: function preValidation(buffer, pos, c, isSelection, opts, maskset, caretPos, strict) {
                    if (!1 !== opts.__financeInput && c === opts.radixPoint) return !1;
                    var pattern;
                    if (pattern = opts.shortcuts && opts.shortcuts[c]) {
                        if (1 < pattern.length) for (var inserts = [], i = 0; i < pattern.length; i++) inserts.push({
                            pos: pos + i,
                            c: pattern[i],
                            strict: !1
                        });
                        return {insert: inserts}
                    }
                    var radixPos = buffer.indexOf(opts.radixPoint), initPos = pos;
                    if (pos = hanndleRadixDance(pos, c, radixPos, maskset, opts), "-" === c || c === opts.negationSymbol.front) {
                        if (!0 !== opts.allowMinus) return !1;
                        var isNegative = !1, front = findValid("+", maskset), back = findValid("-", maskset);
                        return -1 !== front && (isNegative = [front, back]), !1 !== isNegative ? {
                            remove: isNegative,
                            caret: initPos - opts.negationSymbol.front.length
                        } : {
                            insert: [{
                                pos: findValidator("+", maskset),
                                c: opts.negationSymbol.front,
                                fromIsValid: !0
                            }, {pos: findValidator("-", maskset), c: opts.negationSymbol.back, fromIsValid: void 0}],
                            caret: initPos + opts.negationSymbol.back.length
                        }
                    }
                    if (c === opts.groupSeparator) return {caret: initPos};
                    if (strict) return !0;
                    if (-1 !== radixPos && !0 === opts._radixDance && !1 === isSelection && c === opts.radixPoint && void 0 !== opts.digits && (isNaN(opts.digits) || 0 < parseInt(opts.digits)) && radixPos !== pos) return {caret: opts._radixDance && pos === radixPos - 1 ? radixPos + 1 : radixPos};
                    if (!1 === opts.__financeInput) if (isSelection) {
                        if (opts.digitsOptional) return {rewritePosition: caretPos.end};
                        if (!opts.digitsOptional) {
                            if (caretPos.begin > radixPos && caretPos.end <= radixPos) return c === opts.radixPoint ? {
                                insert: {
                                    pos: radixPos + 1,
                                    c: "0",
                                    fromIsValid: !0
                                }, rewritePosition: radixPos
                            } : {rewritePosition: radixPos + 1};
                            if (caretPos.begin < radixPos) return {rewritePosition: caretPos.begin - 1}
                        }
                    } else if (!opts.showMaskOnHover && !opts.showMaskOnFocus && !opts.digitsOptional && 0 < opts.digits && "" === this.inputmask.__valueGet.call(this)) return {rewritePosition: radixPos};
                    return {rewritePosition: pos}
                },
                postValidation: function postValidation(buffer, pos, c, currentResult, opts, maskset, strict) {
                    if (!1 === currentResult) return currentResult;
                    if (strict) return !0;
                    if (null !== opts.min || null !== opts.max) {
                        var unmasked = opts.onUnMask(buffer.slice().reverse().join(""), void 0, $.extend({}, opts, {unmaskAsNumber: !0}));
                        if (null !== opts.min && unmasked < opts.min && (unmasked.toString().length > opts.min.toString().length || unmasked < 0)) return !1;
                        if (null !== opts.max && unmasked > opts.max) return !!opts.SetMaxOnOverflow && {
                            refreshFromBuffer: !0,
                            buffer: alignDigits(opts.max.toString().replace(".", opts.radixPoint).split(""), opts.digits, opts).reverse()
                        }
                    }
                    return currentResult
                },
                onUnMask: function onUnMask(maskedValue, unmaskedValue, opts) {
                    if ("" === unmaskedValue && !0 === opts.nullable) return unmaskedValue;
                    var processValue = maskedValue.replace(opts.prefix, "");
                    return processValue = processValue.replace(opts.suffix, ""), processValue = processValue.replace(new RegExp((0, _escapeRegex.default)(opts.groupSeparator), "g"), ""), "" !== opts.placeholder.charAt(0) && (processValue = processValue.replace(new RegExp(opts.placeholder.charAt(0), "g"), "0")), opts.unmaskAsNumber ? ("" !== opts.radixPoint && -1 !== processValue.indexOf(opts.radixPoint) && (processValue = processValue.replace(_escapeRegex.default.call(this, opts.radixPoint), ".")), processValue = processValue.replace(new RegExp("^" + (0, _escapeRegex.default)(opts.negationSymbol.front)), "-"), processValue = processValue.replace(new RegExp((0, _escapeRegex.default)(opts.negationSymbol.back) + "$"), ""), Number(processValue)) : processValue
                },
                isComplete: function isComplete(buffer, opts) {
                    var maskedValue = (opts.numericInput ? buffer.slice().reverse() : buffer).join("");
                    return maskedValue = maskedValue.replace(new RegExp("^" + (0, _escapeRegex.default)(opts.negationSymbol.front)), "-"), maskedValue = maskedValue.replace(new RegExp((0, _escapeRegex.default)(opts.negationSymbol.back) + "$"), ""), maskedValue = maskedValue.replace(opts.prefix, ""), maskedValue = maskedValue.replace(opts.suffix, ""), maskedValue = maskedValue.replace(new RegExp((0, _escapeRegex.default)(opts.groupSeparator) + "([0-9]{3})", "g"), "$1"), "," === opts.radixPoint && (maskedValue = maskedValue.replace((0, _escapeRegex.default)(opts.radixPoint), ".")), isFinite(maskedValue)
                },
                onBeforeMask: function onBeforeMask(initialValue, opts) {
                    var radixPoint = opts.radixPoint || ",";
                    isFinite(opts.digits) && (opts.digits = parseInt(opts.digits)), "number" != typeof initialValue && "number" !== opts.inputType || "" === radixPoint || (initialValue = initialValue.toString().replace(".", radixPoint));
                    var isNagtive = "-" === initialValue.charAt(0) || initialValue.charAt(0) === opts.negationSymbol.front,
                        valueParts = initialValue.split(radixPoint),
                        integerPart = valueParts[0].replace(/[^\-0-9]/g, ""),
                        decimalPart = 1 < valueParts.length ? valueParts[1].replace(/[^0-9]/g, "") : "",
                        forceDigits = 1 < valueParts.length;
                    initialValue = integerPart + ("" !== decimalPart ? radixPoint + decimalPart : decimalPart);
                    var digits = 0;
                    if ("" !== radixPoint && (digits = opts.digitsOptional ? opts.digits < decimalPart.length ? opts.digits : decimalPart.length : opts.digits, "" !== decimalPart || !opts.digitsOptional)) {
                        var digitsFactor = Math.pow(10, digits || 1);
                        initialValue = initialValue.replace((0, _escapeRegex.default)(radixPoint), "."), isNaN(parseFloat(initialValue)) || (initialValue = (opts.roundingFN(parseFloat(initialValue) * digitsFactor) / digitsFactor).toFixed(digits)), initialValue = initialValue.toString().replace(".", radixPoint)
                    }
                    if (0 === opts.digits && -1 !== initialValue.indexOf(radixPoint) && (initialValue = initialValue.substring(0, initialValue.indexOf(radixPoint))), null !== opts.min || null !== opts.max) {
                        var numberValue = initialValue.toString().replace(radixPoint, ".");
                        null !== opts.min && numberValue < opts.min ? initialValue = opts.min.toString().replace(".", radixPoint) : null !== opts.max && numberValue > opts.max && (initialValue = opts.max.toString().replace(".", radixPoint))
                    }
                    return isNagtive && "-" !== initialValue.charAt(0) && (initialValue = "-" + initialValue), alignDigits(initialValue.toString().split(""), digits, opts, forceDigits).join("")
                },
                onBeforeWrite: function onBeforeWrite(e, buffer, caretPos, opts) {
                    function stripBuffer(buffer, stripRadix) {
                        if (!1 !== opts.__financeInput || stripRadix) {
                            var position = buffer.indexOf(opts.radixPoint);
                            -1 !== position && buffer.splice(position, 1)
                        }
                        if ("" !== opts.groupSeparator) for (; -1 !== (position = buffer.indexOf(opts.groupSeparator));) buffer.splice(position, 1);
                        return buffer
                    }

                    var result, leadingzeroes = checkForLeadingZeroes(buffer, opts);
                    if (leadingzeroes) for (var caretNdx = buffer.join("").lastIndexOf(leadingzeroes[0].split("").reverse().join("")) - (leadingzeroes[0] == leadingzeroes.input ? 0 : 1), offset = leadingzeroes[0] == leadingzeroes.input ? 1 : 0, i = leadingzeroes[0].length - offset; 0 < i; i--) delete this.maskset.validPositions[caretNdx + i], delete buffer[caretNdx + i];
                    if (e) switch (e.type) {
                        case"blur":
                        case"checkval":
                            if (null !== opts.min) {
                                var unmasked = opts.onUnMask(buffer.slice().reverse().join(""), void 0, $.extend({}, opts, {unmaskAsNumber: !0}));
                                if (null !== opts.min && unmasked < opts.min) return {
                                    refreshFromBuffer: !0,
                                    buffer: alignDigits(opts.min.toString().replace(".", opts.radixPoint).split(""), opts.digits, opts).reverse()
                                }
                            }
                            if (buffer[buffer.length - 1] === opts.negationSymbol.front) {
                                var nmbrMtchs = new RegExp("(^" + ("" != opts.negationSymbol.front ? (0, _escapeRegex.default)(opts.negationSymbol.front) + "?" : "") + (0, _escapeRegex.default)(opts.prefix) + ")(.*)(" + (0, _escapeRegex.default)(opts.suffix) + ("" != opts.negationSymbol.back ? (0, _escapeRegex.default)(opts.negationSymbol.back) + "?" : "") + "$)").exec(stripBuffer(buffer.slice(), !0).reverse().join("")),
                                    number = nmbrMtchs ? nmbrMtchs[2] : "";
                                0 == number && (result = {refreshFromBuffer: !0, buffer: [0]})
                            } else "" !== opts.radixPoint && buffer[0] === opts.radixPoint && (result && result.buffer ? result.buffer.shift() : (buffer.shift(), result = {
                                refreshFromBuffer: !0,
                                buffer: stripBuffer(buffer)
                            }));
                            if (opts.enforceDigitsOnBlur) {
                                result = result || {};
                                var bffr = result && result.buffer || buffer.slice().reverse();
                                result.refreshFromBuffer = !0, result.buffer = alignDigits(bffr, opts.digits, opts, !0).reverse()
                            }
                    }
                    return result
                },
                onKeyDown: function onKeyDown(e, buffer, caretPos, opts) {
                    var $input = $(this), bffr;
                    if (e.ctrlKey) switch (e.keyCode) {
                        case _keycode.default.UP:
                            return this.inputmask.__valueSet.call(this, parseFloat(this.inputmask.unmaskedvalue()) + parseInt(opts.step)), $input.trigger("setvalue"), !1;
                        case _keycode.default.DOWN:
                            return this.inputmask.__valueSet.call(this, parseFloat(this.inputmask.unmaskedvalue()) - parseInt(opts.step)), $input.trigger("setvalue"), !1
                    }
                    if (!e.shiftKey && (e.keyCode === _keycode.default.DELETE || e.keyCode === _keycode.default.BACKSPACE || e.keyCode === _keycode.default.BACKSPACE_SAFARI) && caretPos.begin !== buffer.length) {
                        if (buffer[e.keyCode === _keycode.default.DELETE ? caretPos.begin - 1 : caretPos.end] === opts.negationSymbol.front) return bffr = buffer.slice().reverse(), "" !== opts.negationSymbol.front && bffr.shift(), "" !== opts.negationSymbol.back && bffr.pop(), $input.trigger("setvalue", [bffr.join(""), caretPos.begin]), !1;
                        if (!0 === opts._radixDance) {
                            var radixPos = buffer.indexOf(opts.radixPoint);
                            if (opts.digitsOptional) {
                                if (0 === radixPos) return bffr = buffer.slice().reverse(), bffr.pop(), $input.trigger("setvalue", [bffr.join(""), caretPos.begin >= bffr.length ? bffr.length : caretPos.begin]), !1
                            } else if (-1 !== radixPos && (caretPos.begin < radixPos || caretPos.end < radixPos || e.keyCode === _keycode.default.DELETE && caretPos.begin === radixPos)) return caretPos.begin !== caretPos.end || e.keyCode !== _keycode.default.BACKSPACE && e.keyCode !== _keycode.default.BACKSPACE_SAFARI || caretPos.begin++, bffr = buffer.slice().reverse(), bffr.splice(bffr.length - caretPos.begin, caretPos.begin - caretPos.end + 1), bffr = alignDigits(bffr, opts.digits, opts).join(""), $input.trigger("setvalue", [bffr, caretPos.begin >= bffr.length ? radixPos + 1 : caretPos.begin]), !1
                        }
                    }
                }
            },
            currency: {prefix: "", groupSeparator: ",", alias: "numeric", digits: 2, digitsOptional: !1},
            decimal: {alias: "numeric"},
            integer: {alias: "numeric", digits: 0},
            percentage: {alias: "numeric", min: 0, max: 100, suffix: " %", digits: 0, allowMinus: !1},
            indianns: {
                alias: "numeric", _mask: function _mask(opts) {
                    return "(" + opts.groupSeparator + "99){*|1}(" + opts.groupSeparator + "999){1|1}"
                }, groupSeparator: ",", radixPoint: ".", placeholder: "0", digits: 2, digitsOptional: !1
            }
        })
    }, function (module, exports, __webpack_require__) {
        "use strict";
        var _window = _interopRequireDefault(__webpack_require__(13)),
            _inputmask = _interopRequireDefault(__webpack_require__(1));

        function _typeof(obj) {
            return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function _typeof(obj) {
                return typeof obj
            } : function _typeof(obj) {
                return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj
            }, _typeof(obj)
        }

        function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function")
        }

        function _inherits(subClass, superClass) {
            if ("function" != typeof superClass && null !== superClass) throw new TypeError("Super expression must either be null or a function");
            subClass.prototype = Object.create(superClass && superClass.prototype, {
                constructor: {
                    value: subClass,
                    writable: !0,
                    configurable: !0
                }
            }), superClass && _setPrototypeOf(subClass, superClass)
        }

        function _createSuper(Derived) {
            var hasNativeReflectConstruct = _isNativeReflectConstruct();
            return function _createSuperInternal() {
                var Super = _getPrototypeOf(Derived), result;
                if (hasNativeReflectConstruct) {
                    var NewTarget = _getPrototypeOf(this).constructor;
                    result = Reflect.construct(Super, arguments, NewTarget)
                } else result = Super.apply(this, arguments);
                return _possibleConstructorReturn(this, result)
            }
        }

        function _possibleConstructorReturn(self, call) {
            return !call || "object" !== _typeof(call) && "function" != typeof call ? _assertThisInitialized(self) : call
        }

        function _assertThisInitialized(self) {
            if (void 0 === self) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return self
        }

        function _wrapNativeSuper(Class) {
            var _cache = "function" == typeof Map ? new Map : void 0;
            return _wrapNativeSuper = function _wrapNativeSuper(Class) {
                if (null === Class || !_isNativeFunction(Class)) return Class;
                if ("function" != typeof Class) throw new TypeError("Super expression must either be null or a function");
                if ("undefined" != typeof _cache) {
                    if (_cache.has(Class)) return _cache.get(Class);
                    _cache.set(Class, Wrapper)
                }

                function Wrapper() {
                    return _construct(Class, arguments, _getPrototypeOf(this).constructor)
                }

                return Wrapper.prototype = Object.create(Class.prototype, {
                    constructor: {
                        value: Wrapper,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), _setPrototypeOf(Wrapper, Class)
            }, _wrapNativeSuper(Class)
        }

        function _construct(Parent, args, Class) {
            return _construct = _isNativeReflectConstruct() ? Reflect.construct : function _construct(Parent, args, Class) {
                var a = [null];
                a.push.apply(a, args);
                var Constructor = Function.bind.apply(Parent, a), instance = new Constructor;
                return Class && _setPrototypeOf(instance, Class.prototype), instance
            }, _construct.apply(null, arguments)
        }

        function _isNativeReflectConstruct() {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], function () {
                })), !0
            } catch (e) {
                return !1
            }
        }

        function _isNativeFunction(fn) {
            return -1 !== Function.toString.call(fn).indexOf("[native code]")
        }

        function _setPrototypeOf(o, p) {
            return _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
                return o.__proto__ = p, o
            }, _setPrototypeOf(o, p)
        }

        function _getPrototypeOf(o) {
            return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
                return o.__proto__ || Object.getPrototypeOf(o)
            }, _getPrototypeOf(o)
        }

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {default: obj}
        }

        var document = _window.default.document;
        if (document && document.head && document.head.attachShadow && _window.default.customElements && void 0 === _window.default.customElements.get("input-mask")) {
            var InputmaskElement = function (_HTMLElement) {
                _inherits(InputmaskElement, _HTMLElement);
                var _super = _createSuper(InputmaskElement);

                function InputmaskElement() {
                    var _this;
                    _classCallCheck(this, InputmaskElement), _this = _super.call(this);
                    var attributeNames = _this.getAttributeNames(), shadow = _this.attachShadow({mode: "closed"}),
                        input = document.createElement("input");
                    for (var attr in input.type = "text", shadow.appendChild(input), attributeNames) Object.prototype.hasOwnProperty.call(attributeNames, attr) && input.setAttribute(attributeNames[attr], _this.getAttribute(attributeNames[attr]));
                    var im = new _inputmask.default;
                    return im.dataAttribute = "", im.mask(input), input.inputmask.shadowRoot = shadow, _this
                }

                return InputmaskElement
            }(_wrapNativeSuper(HTMLElement));
            _window.default.customElements.define("input-mask", InputmaskElement)
        }
    }, function (module, exports, __webpack_require__) {
        "use strict";
        var _jquery = _interopRequireDefault(__webpack_require__(8)),
            _inputmask = _interopRequireDefault(__webpack_require__(1));

        function _typeof(obj) {
            return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function _typeof(obj) {
                return typeof obj
            } : function _typeof(obj) {
                return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj
            }, _typeof(obj)
        }

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {default: obj}
        }

        void 0 === _jquery.default.fn.inputmask && (_jquery.default.fn.inputmask = function (fn, options) {
            var nptmask, input = this[0];
            if (void 0 === options && (options = {}), "string" == typeof fn) switch (fn) {
                case"unmaskedvalue":
                    return input && input.inputmask ? input.inputmask.unmaskedvalue() : (0, _jquery.default)(input).val();
                case"remove":
                    return this.each(function () {
                        this.inputmask && this.inputmask.remove()
                    });
                case"getemptymask":
                    return input && input.inputmask ? input.inputmask.getemptymask() : "";
                case"hasMaskedValue":
                    return !(!input || !input.inputmask) && input.inputmask.hasMaskedValue();
                case"isComplete":
                    return !input || !input.inputmask || input.inputmask.isComplete();
                case"getmetadata":
                    return input && input.inputmask ? input.inputmask.getmetadata() : void 0;
                case"setvalue":
                    _inputmask.default.setValue(input, options);
                    break;
                case"option":
                    if ("string" != typeof options) return this.each(function () {
                        if (void 0 !== this.inputmask) return this.inputmask.option(options)
                    });
                    if (input && void 0 !== input.inputmask) return input.inputmask.option(options);
                    break;
                default:
                    return options.alias = fn, nptmask = new _inputmask.default(options), this.each(function () {
                        nptmask.mask(this)
                    })
            } else {
                if (Array.isArray(fn)) return options.alias = fn, nptmask = new _inputmask.default(options), this.each(function () {
                    nptmask.mask(this)
                });
                if ("object" == _typeof(fn)) return nptmask = new _inputmask.default(fn), void 0 === fn.mask && void 0 === fn.alias ? this.each(function () {
                    if (void 0 !== this.inputmask) return this.inputmask.option(fn);
                    nptmask.mask(this)
                }) : this.each(function () {
                    nptmask.mask(this)
                });
                if (void 0 === fn) return this.each(function () {
                    nptmask = new _inputmask.default(options), nptmask.mask(this)
                })
            }
        })
    }, function (module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0}), exports.default = void 0;
        var _bundle = _interopRequireDefault(__webpack_require__(15));

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {default: obj}
        }

        __webpack_require__(23);
        var _default = _bundle.default;
        exports.default = _default
    }], installedModules = {}, __webpack_require__.m = modules, __webpack_require__.c = installedModules, __webpack_require__.d = function (exports, name, getter) {
        __webpack_require__.o(exports, name) || Object.defineProperty(exports, name, {enumerable: !0, get: getter})
    }, __webpack_require__.r = function (exports) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(exports, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(exports, "__esModule", {value: !0})
    }, __webpack_require__.t = function (value, mode) {
        if (1 & mode && (value = __webpack_require__(value)), 8 & mode) return value;
        if (4 & mode && "object" == typeof value && value && value.__esModule) return value;
        var ns = Object.create(null);
        if (__webpack_require__.r(ns), Object.defineProperty(ns, "default", {
            enumerable: !0,
            value: value
        }), 2 & mode && "string" != typeof value) for (var key in value) __webpack_require__.d(ns, key, function (key) {
            return value[key]
        }.bind(null, key));
        return ns
    }, __webpack_require__.n = function (module) {
        var getter = module && module.__esModule ? function getDefault() {
            return module.default
        } : function getModuleExports() {
            return module
        };
        return __webpack_require__.d(getter, "a", getter), getter
    }, __webpack_require__.o = function (object, property) {
        return Object.prototype.hasOwnProperty.call(object, property)
    }, __webpack_require__.p = "", __webpack_require__(__webpack_require__.s = 24);

    function __webpack_require__(moduleId) {
        if (installedModules[moduleId]) return installedModules[moduleId].exports;
        var module = installedModules[moduleId] = {i: moduleId, l: !1, exports: {}};
        return modules[moduleId].call(module.exports, module, module.exports, __webpack_require__), module.l = !0, module.exports
    }

    var modules, installedModules
});
;


let comSwiperFirst = new Swiper('.commodity-1 .swiper-container', {
    loop: true,
    spaceBetween: 30,
    pagination: {
        el: '.commodity-pagination-1',
        clickable: true,
    },
    slidesPerView: 4,
});
let comSwiperSecond = new Swiper('.commodity-2 .swiper-container', {
    loop: true,
    spaceBetween: 30,
    pagination: {
        el: '.commodity-pagination-2',
        clickable: true,
    },
    slidesPerView: 4,
});
try {
    comSwiperSecond.on('slideChange', function () {
        Array.from(allCards).forEach(cardDrop => {
            cardDrop.closeDrop()
        });
    });
    comSwiperFirst.on('slideChange', function () {
        Array.from(allCards).forEach(cardDrop => {
            cardDrop.closeDrop()
        });
    });
} catch (e) {
}

function mediaQueries() {
    if (window.innerWidth <= 991) {
        let dropDown = document.querySelector('.language-selection-drop-down');
        let headerNavigationWrapper = document.querySelector('.header_navigation_wrapper');
        let newLi = document.createElement('li')
        newLi.classList.add('language-wrapper');
        newLi.append(dropDown)
        headerNavigationWrapper.prepend(newLi);
        let menuBurger = new Burger(
            '.search_form_submit',
            '.header_form_search'
        )
        let closeFormSearch = document.querySelector('.close_form_search');
        closeFormSearch.addEventListener('click', menuBurger.closeBurger)
        let shopDropDownLis = document.querySelectorAll('shop__drop__down-tabs-side-container ul > li')
        Array.from(shopDropDownLis).forEach(el => {
            el.classList.remove('active');
        })
    }
    if (window.innerWidth <= 767) {
        try {
            let lkTabsWrapper = document.getElementsByClassName('lk-tabs-wrapper')[0];
            Array.from(lkTabsWrapper.children).forEach(child => {
                child.classList.remove('active')
            })
            let tabsChanger = document.getElementsByClassName('lk-tabs-changer');
            Array.from(tabsChanger).forEach(changer => {
                changer.classList.remove('active')
            })

        } catch (e) {
            void e
        }
    }
}

mediaQueries();

let windowWith = window.innerWidth;

function reloadPage() {
    if (windowWith > 991) {
        if (window.innerWidth < 992) {
            window.location.href = window.location.href;
            location.reload(true);
            history.go(0);
            document.querySelector('.reload-the-page').click();
            if (document.querySelector('.lk-arrow-back')) {
                document.querySelector('.lk-arrow-back').click()
            }
        }
        if (window.innerWidth < 767) {
            window.location.href = window.location.href;
            location.reload(true);
            history.go(0);
            document.querySelector('.reload-the-page').click();
        }
    } else {
        if (window.innerWidth > 991) {
            window.location.href = window.location.href;
            location.reload(true);
            history.go(0);
            document.querySelector('.reload-the-page').click();
        }
    }
}

window.addEventListener('resize', reloadPage);

function DropDown(parent, trigger, changers) {
    try {

        if (typeof parent == "string") {
            this.parent = document.getElementsByClassName(parent)[0]
            this.trigger = this.parent.getElementsByClassName(trigger)[0]
            this.changers = this.parent.getElementsByClassName(changers)
        } else {
            this.parent = parent;
            this.trigger = trigger;
            this.changers = changers
        }
        let self = this
        Array.from(this.changers).forEach(changer => {
            changer.addEventListener('click', changeTheTabValue)
        })

        function changeTheTabValue() {
            let text = this.innerText
            self.trigger.getElementsByClassName('changing')[0].innerText = text
            self.trigger.nextElementSibling.classList.remove('active')
        }

        this.trigger.addEventListener('click', toggleActive)

        function toggleActive(e) {
            this.nextElementSibling.classList.toggle('active')
        }

        document.addEventListener('click', closeTabs)

        function closeTabs(e) {
            let isClosing = true
            let path = e.composedPath();
            Array.from(path).forEach(el => {
                try {
                    if (el === self.parent) {
                        isClosing = false
                    }
                } catch (e) {
                    void e
                }
            })
            if (isClosing) {
                self.trigger.nextElementSibling.classList.remove('active')
            }
        }
    } catch (e) {
        void e
    }
}

function Burger(burger, menu, parentElement = {}) {
    try {
        this.burger = document.querySelector(burger)
        this.menu = document.querySelector(menu)

        let self = this
        this.attribute = `data-burger${Math.random()}`;
        this.burger.setAttribute('data-burger', this.attribute)
        this.menu.setAttribute('data-burger', this.attribute)
        Array.from(this.burger.querySelectorAll('*')).forEach(el => {
            el.setAttribute('data-burger', this.attribute)
        })
        Array.from(this.menu.querySelectorAll('*')).forEach(el => {
            el.setAttribute('data-burger', this.attribute)
        })

        this.burger.addEventListener('click', activateBurger);

        function activateBurger(e) {
            document.body.classList.add('overflow-js')
            self.menu.classList.toggle('active')
            this.classList.toggle('open')
            window.addEventListener('scroll', noScroll)
        }

        document.addEventListener('click', closeBurger)

        function closeBurger(e) {
            if (
                e.target.getAttribute('data-burger') === self.attribute ||
                e.target.getAttribute('data-burger') === parentElement.attribute
            ) {
                if (parentElement.burger) {
                    parentElement.burger.classList.add('open');
                    parentElement.menu.classList.add('active');
                }
            } else {
                self.burger.classList.remove('open');
                self.menu.classList.remove('active');
                if (e.target.hasAttribute('data-burger')) {

                } else {
                    document.body.classList.remove('overflow-js');
                }
                if (e.target.classList.contains('header-burger') || e.target.classList.contains('market-filtering-trigger')) {
                    document.body.classList.remove('overflow-js');
                }
            }
        }

        this.closeBurger = function () {
            self.burger.classList.remove('open');
            self.menu.classList.remove('active');
            document.body.classList.remove('overflow-js');
        }

        function noScroll(e) {
        }
    } catch (e) {
    }
}

function makeCommodityActive(commodityWrapper) {
    try {
        this.commodity = commodityWrapper.children
    } catch (e) {
    }
    try {
        Array.from(this.commodity).forEach(el => {
            el.addEventListener('click', toggleActiveClass)
        })
    } catch (e) {
    }


    function toggleActiveClass(e) {
        e.preventDefault();
        if (this.classList.contains('active')) {
            removeActiveClass(this)
            return false
        }
        addActiveClass(this)
    }

    function addActiveClass(el) {
        el.classList.add('active');
    }

    function removeActiveClass(el) {
        el.classList.remove('active')
    }
}

function Tabs(tabTrigger, tabContentWrapper, parentElement, closeButtonSelectorName,
              overflowingElement) {
    let changeEvent = 'mouseover';
    if (window.innerWidth < 992) {
        changeEvent = 'click'
    }
    try {
        this.tab = tabTrigger
        this.tabContent = tabContentWrapper
        this.parent = parentElement
        this.overflowingElement = document.querySelector(overflowingElement)
        this.closeButtons = [];
        Array.from(this.tabContent.children).forEach(child => {
            this.closeButtons.push(child.querySelector(closeButtonSelectorName))
        })
        let self = this;

        Array.from(this.tab).forEach(tab => {
            tab.addEventListener(changeEvent, changeTheTab)
        })

        this.closeButtons.forEach(el => {
            el.addEventListener('click', closeTabs);
        })


        function closeTabs() {
            Array.from(self.tabContent.children).forEach(tab => {
                tab.classList.remove('active')
            })
            Array.from(self.tab).forEach(tab => {
                tab.classList.remove('active')
            })
            self.tabContent.classList.remove('active')
            self.parent.classList.remove('active')
            self.overflowingElement.classList.remove('overflow-hidden')


        }

        function changeTheTab(e) {
            e.preventDefault()
            let index = Array.from(this.parentNode.children).indexOf(this)
            closeTabs()
            self.parent.classList.add('active')
            self.tabContent.children[index].classList.add('active')
            this.classList.add('active')
            self.tabContent.classList.add('active')
            if (screen.width < 991) {
                self.overflowingElement.classList.add('overflow-hidden')
            }
        }

        this.closeAllTabs = closeTabs;
    } catch (e) {
        void e
    }
}

function Collapser(collapsTriggerClassName, collapsingClass, parentClassName,) {
    this.parentClassName = parentClassName
    this.collapsers = document.getElementsByClassName(collapsTriggerClassName);
    this.collapsingClass = collapsingClass
    let self = this

    Array.from(this.collapsers).forEach(collpaser => {
        collpaser.addEventListener('click', toggleCollapse)
    })

    function toggleCollapse(e) {
        let parent = this.closest(self.parentClassName);
        let openingElement = parent.getElementsByClassName(self.collapsingClass)
        parent.classList.toggle('active')
        Array.from(openingElement).forEach(el => {
            if (el.style.maxHeight) {
                el.style.maxHeight = ''
            } else {
                el.style.maxHeight = el.scrollHeight + 'px'
            }
        })


    }
}

function CardCounter(trigger) {
    this.trigger = trigger;

    this.input = this.trigger.previousElementSibling.querySelector('.quantity-input')

    this.parentClassList = 'quantity-drop';

    this.dropDownWrapper = document
        .getElementsByClassName('quantity-drop-down-wrapper')[0];

    let self = this;

    this.trigger.addEventListener('click', openCard)

    this.input.addEventListener('input', changeInputValue.bind(this.trigger));

    function changeInputValue(e) {
        let value = e.target.value || e.target.innerText;
        self.input.value = value
        let changeEvent = new Event('change');
        self.input.dispatchEvent(changeEvent);
        let swiperSlide = this.closest('.swiper-slide');
        if (swiperSlide) {
            let swiperWrapper = swiperSlide.closest('.swiper-container')
            let slideIndex = swiperSlide.getAttribute('data-swiper-slide-index');
            let swiperSlideClones =
                swiperWrapper.querySelectorAll(`[data-swiper-slide-index="${slideIndex}"]`);
            Array.from(swiperSlideClones).forEach(slide => {
                slide.querySelector('.quantity-input').value = value;
            })
        }

    }

    function openCard() {
        let parent = this.closest('.quantity-view-wrapper');
        let input = parent.querySelector('.quantity-input');
        let leftAxis = input.getBoundingClientRect().left;
        let topAxis = input.getBoundingClientRect().top + pageYOffset
            + input.getBoundingClientRect().height + 30;
        self.dropDownWrapper.style.cssText = `
            left: ${leftAxis}px;
            top: ${topAxis}px;
        `;
        let lis = self.dropDownWrapper.querySelectorAll('li');
        if (!self.dropDownWrapper.classList.contains('active')) {
            self.dropDownWrapper.classList.add('active')
            Array.from(lis).forEach(li => {
                li.onclick = changeInputValue.bind(this)
            })
        } else {
            self.dropDownWrapper.classList.remove('active')
        }

    }

    function closeDrop(e) {
        let path = e.composedPath();
        let isClosing = true;
        Array.from(path).forEach(el => {
            try {
                if (el.classList.contains(self.parentClassList)) {
                    isClosing = false
                }
            } catch (e) {
                void e
            }
        })
        if (isClosing) {
            let lis = self.dropDownWrapper.querySelectorAll('li');
            Array.from(lis).forEach(li => {
                li.removeEventListener('click', changeInputValue.bind(this))
            })
            self.dropDownWrapper.classList.remove('active')
        }
    }

    document.addEventListener('click', closeDrop)
    this.closeDrop = function () {
        let lis = self.dropDownWrapper.querySelectorAll('li');
        Array.from(lis).forEach(li => {
            li.removeEventListener('click', changeInputValue.bind(this))
        })
        self.dropDownWrapper.classList.remove('active')
    }
}

function ProgramTabs(tabTrigger, tabContentWrapper, parentElement, closeButtonSelectorName) {
    this.tab = tabTrigger;
    this.tabContent = tabContentWrapper;
    this.parent = parentElement;
    let self = this
    this.closeButtons = [];
    Array.from(this.tabContent.children).forEach(child => {
        let closingChild = child.querySelector(closeButtonSelectorName)
        if (closingChild) {
            this.closeButtons.push(closingChild)
        }
    })

    Array.from(this.tab).forEach(tab => {
        tab.addEventListener('click', changeTheTab)
    })
    this.closeButtons.forEach(el => {
        el.addEventListener('click', closeTabs);
    })

    function closeTabs() {
        Array.from(self.tabContent.children).forEach(tab => {
            tab.classList.remove('active')
        })
        Array.from(self.tab).forEach(tab => {
            tab.classList.remove('active')
        })
        self.parent.classList.remove('active')

    }

    function changeTheTab(e) {
        e.preventDefault()
        let index = Array.from(this.parentNode.children).indexOf(this)
        closeTabs()
        self.tabContent.children[index].classList.add('active')
        this.classList.add('active')
        self.parent.classList.add('active')

    }
}


let headerLangDropDownParent = 'language-selection-drop-down';
let headerLangDropTrigger = 'language-selected-text';
let changers = 'language-selected-text-inner';
let headerLangDropDown = new DropDown(
    headerLangDropDownParent,
    headerLangDropTrigger,
    changers
)
let menuBurger = new Burger(
    '.header-burger',
    '.header_navigation',
)
let headerCartDrop = new Burger(
    '.header_cart',
    '.header__cart__inner'
)

try {
    let deliveryTabs = new ProgramTabs(
        document.querySelectorAll('.delivery-blocks .col-lg-4'),
        document.querySelector('.delivery-content-wrapper'),
        document.querySelector('.delivery-tabs'),
        'empty-no-need-selector'
    )
} catch (e) {
    void e
}
let headerShopTabs = new Tabs(
    document.querySelectorAll('.shop__drop__down-tabs-side-container li'),
    document.querySelector('.shop__drop__down-content-side'),
    document.querySelector('.shop__dropping-element'),
    '.shop__drop__down-content-side-header',
    '.header_navigation_wrapper'
)
let brandProductActiveCommodityWrapper = document
    .querySelector('.making-active-row');


new makeCommodityActive(brandProductActiveCommodityWrapper);


new Collapser('header__collapse', 'shop-dropdown-wrapper', '.header__shop__link');


let allCards = [];
let cardDropDowns = document.getElementsByClassName('quantity-trigger-wrapper');
Array.from(cardDropDowns).forEach(card => {
    let cardCounter = new CardCounter(card);
    allCards.push(cardCounter);
});

new DropDown(
    'address-drop-down-wrapper',
    'address-drop-down-trigger',
    'address-changer'
)
try {
    let lkTabs = new ProgramTabs(
        document.querySelectorAll('.lk-tabs-changers .lk-tabs-changer'),
        document.querySelector('.lk-tabs-wrapper'),
        document.querySelector('.lk-main'),
        '.lk-arrow-back',
    )
} catch (e) {
    void e
}
try {
    let costSliderElement = document.getElementById('cost_slider');
    let costSlider = noUiSlider.create(costSliderElement, {
        start: [costSliderElement.getAttribute('data-min'),
            costSliderElement.getAttribute('data-max')
        ],
        connect: true,
        range: {
            'min': +(costSliderElement.getAttribute('data-min')),
            'max': +(costSliderElement.getAttribute('data-max'))
        }
    });
    costSlider.on('update', function (values) {

        let startingValue = +values[0];
        let endingValue = +values[1];
        let startingValueInput = document.getElementsByClassName('starting-value')[0];
        let endingValueInput = document.getElementsByClassName('ending-value')[0];
        startingValueInput.value = +(startingValue).toFixed();
        endingValueInput.value = +(endingValue).toFixed();


    });
    costSlider.on('change', function (values) {
        let startingValue = +values[0];
        let endingValue = +values[1];
        let startingValueInput = document.getElementsByClassName('starting-value')[0];
        let endingValueInput = document.getElementsByClassName('ending-value')[0];
        const changeEvent = new Event('change');
        startingValueInput.dispatchEvent(changeEvent);
        endingValueInput.dispatchEvent(changeEvent);
    })
} catch (e) {
    void e
}
try {
    let sortingDropDown = document.getElementsByClassName('drop-down-sorting');
    Array.from(sortingDropDown).forEach(el => {
        new DropDown(
            el,
            el.querySelector('.sorting-filter-trigger'),
            el.querySelectorAll('sorting-filter-content-changers')
        )
    })
} catch (e) {
    void e
}
new Collapser('market-sorting-trigger', 'sorting-controller', '.collapsing-control');
new Collapser('cost-filter-trigger', 'filter-content', '.filter-el');

let dataMediaLinks = document.querySelectorAll('[data-media-link]');
Array.from(dataMediaLinks).forEach(medialink => {
    medialink.addEventListener('click', changeTheLink)
})

function changeTheLink() {
    if (window.innerWidth < 991) {
        document.location.href = this.getAttribute('data-media-link')
    }
}

let filteringBurger = new Burger(
    '.market-filtering-trigger',
    '.shop-sidebar'
)

try {
    let searchFormSubmit = document.querySelector('.search_form_submit');
    searchFormSubmit.addEventListener('click', openFocus)

    function openFocus() {
        let input = document.querySelector('.header_form_search .form_control');
        if (input.closest('.header_form_search').classList.contains('active')) {
            input.focus();
            document.body.classList.remove('overflow-js');
        }
    }
} catch (e) {
    void(e)
}

function ChooseOne(elementsClassName, parentElementClassName) {
    this.elements = document.querySelectorAll(`.${elementsClassName}`);
    let self = this;
    Array.from(this.elements).forEach(el => {
        el.addEventListener('click', makeElementActive)
    })

    function clearAll(context) {
        let parentElement = context.closest(`.${parentElementClassName}`);
        const elements = parentElement.querySelectorAll(`.${elementsClassName}`);
        Array.from(elements).forEach(el => {
            el.classList.remove('active')
        })
    }

    function makeElementActive(e) {
        e.preventDefault();
        clearAll(this);
        this.classList.add('active')
    }
}

let choosingColorRow = document.querySelectorAll('.choosing-color-row .fixing-category-card');
let chossingDetailRow = document.querySelectorAll('.choosing-detail-row .commodity-default-card');

new ChooseOne('color-changing-card', 'choosing-color-row');
new ChooseOne('commodity-default-card', 'choosing-detail-row');

let headerShopLink = document.querySelectorAll('.header__shop__link');
Array.from(headerShopLink).forEach(link => {
    link.addEventListener('mouseover', () => {
        let headerCart = document.querySelectorAll('header_cart');
        Array.from(headerCart).forEach(cart => {
            cart.classList.remove('open');
        })
        let headerCartInner = document.querySelectorAll('.header__cart__inner');
        Array.from(headerCartInner).forEach(cart => {
            cart.classList.remove('active');
        })
    })
});

let closeShopSidebar = document.querySelectorAll('.close-shop-sidebar');
closeShopSidebar.forEach(sidebarClose => {
    sidebarClose.addEventListener('click', filteringBurger.closeBurger);
})

if (screen.width < 768) {
    let comSwiperThird = new Swiper('.commodity-3 .swiper-container', {
        loop: true,
        spaceBetween: 24,
        pagination: {
            el: '.commodity-pagination-1',
            clickable: true,
        },
        slidesPerView: 1,
    })
}
let paymentDropDownWrapper = document.querySelectorAll('.payment-drop-down-wrapper');
Array.from(paymentDropDownWrapper).forEach(drop => {
    new DropDown(
        drop,
        drop.querySelector('.payment-drop-down-trigger'),
        drop.querySelectorAll('.payment-changer')
    )
});

let cityDropDownWrapper = document.querySelectorAll('.city-drop-down-wrapper');
Array.from(cityDropDownWrapper).forEach(city => {
    new DropDown(
        city,
        city.querySelector('.city-drop-down-trigger'),
        city.querySelectorAll('.city-changer')
    )
});

try {
    ymaps.ready(function () {
        var map = new ymaps.Map('map', {
            center: [56.946262, 24.091404],
            zoom: 13,
            controls: []
        });

        var pin = ymaps.templateLayoutFactory.createClass('<img src="img/offices/pin.png" alt="pin">');
        var office1 = new ymaps.Placemark(
            [56.943325, 24.018319], {
                hintContent: 'Anniņmuižas 17'
            }, {
                iconLayout: pin,
            }
        );
        map.geoObjects.add(office1);

        var office2 = new ymaps.Placemark(
            [56.951233, 24.134147], {
                hintContent: 'Ģertrudes 77'
            }, {
                iconLayout: pin,
            }
        );
        map.geoObjects.add(office2);
        map.panes.get('ground').getElement().style.filter = 'grayscale(100%)';
    });
} catch (e) {
    void e
}

let authorizationTabs = document.querySelectorAll('.delivery-blocks .col-xl-4');
let authorizationTabsContent = document.querySelectorAll('.delivery-tab-content');

/*function tabss (tabs, tabContent){
    function abc (a) {
        for(let i = a; i < tabContent.length; i++){
            if(tabContent[i].classList.contains('show')){
                tabContent[i].classList.remove('show');
                tabContent[i].classList.add('hide');
            }else{
                tabContent[i].classList.add('hide');
            }
        }
    }
    abc(1);

    for (let u = 0; u < tabs.length; u++){
        tabs[u].addEventListener('click', () => {
            abc(0);
            tabContent[u].classList.add('show');
        });
    }
}

tabss(authorizationTabs,authorizationTabsContent);*/


flatpickr(".datepicker", {
    dateFormat: "d/m/Y",
    minDate: new Date(Date.now() + 24 * 60 * 60 * 1000),
});
flatpickr(".timepicker", {
    enableTime: true,
    noCalendar: true,
    dateFormat: "H:i",
    time_24hr: true,
    minTime: "10:00",
    maxTime: "18:00"
});


/* front end development */

function UrlCreationForFixingOrder(cardsParentElement, buttonClassName) {
    this.cards = Array.from(cardsParentElement.children);
    this.button = document.querySelector(buttonClassName);
    this.urlBase = this.button.getAttribute('data-link');
    this.chosenCardsArray = [];
    let self = this;
    this.cards.forEach((card, index) => {
        card.addEventListener('click', toggleIdToButtonHref)
    })

    function toggleIdToButtonHref() {
        let id = this.getAttribute('data-id');
        if (self.chosenCardsArray.indexOf(id) === -1) {
            self.chosenCardsArray.push(id);
        } else {
            self.chosenCardsArray.splice(self.chosenCardsArray.indexOf(id), 1);
        }
        updateUrl();

    }

    function updateUrl() {
        let url = self.urlBase + self.chosenCardsArray.join(',');

        self.button.href = url;
    }
}

try {
    new UrlCreationForFixingOrder(
        brandProductActiveCommodityWrapper,
        '.js-order-link-creation-button'
    )
} catch (e) {
}

function FixingDetailCostManager(fixingElementSelector, mainPriceSelector, oldPriceSelector) {
    this.detailCards = document.querySelectorAll(fixingElementSelector);
    this.costElement = document.querySelector(mainPriceSelector);
    this.oldCostElement = document.querySelector(oldPriceSelector);

    this.allCosts = {};
    this.cost = 0;
    let self = this;
    this.colorChangers = document.querySelectorAll('.color-changing-card');
    this.costChangers = document.querySelectorAll('.commodity-default-card');
    this.chooseQualityBlock = document.querySelector('.choose-quality-block');


    Array.from(this.detailCards).forEach(detail => {
        let startingCostOfDetails = detail.getAttribute('data-start-cost');
        this.cost += Number(startingCostOfDetails);

        self.allCosts[detail.getAttribute('data-id')] = startingCostOfDetails;

        changeCostElementsValue();
    });


    Array.from(this.costChangers).forEach(costChanger => {
        costChanger.addEventListener('click', changeCost);
    })

    Array.from(this.colorChangers).forEach(colorChanger => {
        colorChanger.addEventListener('click', changeTheColor)
    });

    function changeTheColor() {
        let colorName = this.getAttribute('data-color-name');
        this.closest(fixingElementSelector).setAttribute('data-color', colorName);

        uploadCostChangers(this.getAttribute('data-route'), this);

    }

    function uploadCostChangers(url, context) {
        axios
            .get(url)
            .then(res => {
                let chooseQualityBlock = context.closest('.detail-block-wrapper').querySelector('.choose-quality-block');
                chooseQualityBlock.innerHTML = res.data;
                chooseQualityBlock.closest('.choose-quality').classList.add('active');
                this.costChangers = document.querySelectorAll('.commodity-default-card');
                Array.from(this.costChangers).forEach(costChanger => {
                    costChanger.addEventListener('click', changeCost);
                })
                new ChooseOne('commodity-default-card', 'detail-block-wrapper');
            })
            .catch(err => {
                alert(err);
            })
    }

    function changeCostElementsValue() {
        self.costElement.innerText = self.cost;
        self.oldCostElement.innerText = (self.cost * 1.1).toFixed();
    }

    function changeCost() {
        let cost = this.getAttribute('data-cost');
        self.allCosts[this.getAttribute('data-id')] = cost
        self.cost = 0;
        Object.values(self.allCosts).forEach(cost => {
            self.cost += Number(cost);
        });
        if (this.closest(`${fixingElementSelector}`) == null) {
            return;
        }
        this.closest(`${fixingElementSelector}`).setAttribute('data-cost', cost);
        changeCostElementsValue();
    }
}

let FixingDetailsManager = new FixingDetailCostManager(
    '.detail-block-wrapper',
    '.js-commodity-card-price-text',
    '.js-commodity-card-old-price-text'
);


$('.reservation-form').validate({
    submitHandler: function (form) {
        let formData = new FormData(form);
        let allDetails = document.querySelectorAll('.detail-block-wrapper');
        let detailsArray = [];
        Array.from(allDetails).forEach(detail => {
            let detailData = {}
            if (detail.hasAttribute('data-color')) {
                detailData.color = detail.getAttribute('data-color');
            }
            detailData.price = detail.getAttribute('data-cost');
            detailData.id = detail.getAttribute('data-id');
            detailsArray.push(detailData);
        })
        formData.append('details', JSON.stringify(detailsArray));

        axios
            .post(form.getAttribute('data-url'), formData)
            .then(response => {
            })
            .catch(error => {
            })

    },
    rules: {
        name: {
            required: true,
        },
        email: {
            required: true,
            email: true,
        },
        tel: {
            required: true,
        },
        address: {
            required: true,
        },
        date: {
            required: true,
        },
        time: {
            required: true,
        }
    }
});

$(function () {
    $('input[type="tel"]').inputmask({
        mask: "+371 99999999",
        clearIncomplete: !0,
    })
    $('.js-selectric').selectric();
    $('input[type="tel"]').each(function () {
        $(this).keypress(function (e, a) {
            if ((e.which == 13) || (e.keyCode == 13)) {
                $(this).blur();
            }
            return true;
        });
    });
});


class InputSearch {
    constructor(inputSelector) {
        this.input = document.querySelector(inputSelector);
        this.filteringElementsArray = document.querySelectorAll(this.input.getAttribute('data-search-selector'));
        this.input.addEventListener('input', this.searchForResults.bind(this));
    }

    searchForResults(e) {
        let value = this.input.value;

        Array.from(this.filteringElementsArray).forEach(element => {

            if (element.textContent.toLowerCase().indexOf(value.toLowerCase()) !== -1) {
                element.closest('.col-lg-4').hidden = false;
                return false
            }
            element.closest('.col-lg-4').hidden = true
        });
    }
}

try {
    let searchInput = new InputSearch('.brand-search .auth_control');
} catch (e) {
}


let cartButton = document.querySelectorAll('.add-to-cart-form-submittion');

Array.from(cartButton).forEach(btn => {
    btn.addEventListener('submit', addCommodityToCart)
})

function changeCartInnerHTML(response) {
    let headerCartOuter = document.querySelector('.header__cart_outer-wrapper');
    headerCartOuter.innerHTML = response.data;
    let headerCartCommodityQuantity = Array.from(headerCartOuter
        .querySelectorAll('.header_cart_commodity')).length;
    let headerCartCount = document
        .querySelector('.header_cart_count');
    headerCartCount.innerHTML = headerCartCommodityQuantity;
}

function addCommodityToCart(e) {
    e.preventDefault();
    let link = this.getAttribute('action');

    let formData = new FormData(this);
    axios
        .post(link, formData)
        .then((response) => {
            if (!!response === true) {
                $.fancybox.open({
                    src: `#added_good`,
                    type: 'inline',
                    opts: {
                        afterShow: function (instance, current) {
                            setTimeout(() => {
                                $.fancybox.close(true);
                            }, 2000)
                        }
                    }
                });
            }
            changeCartInnerHTML(response)

            if (Vue !== undefined) {
                let cartState = this.getAttribute('data-get-state');
                fetchData(cartState)
                    .then(res => {
                        Vue.set(cartApp, 'orderProducts', res);
                    })
            }


        })
        .catch((err) => {
        })
}

function fetchData(url) {
    return axios
        .get(url)
        .then(res => {
            return res.data.products;
        })
}

let headerCart = document.querySelectorAll('.header_cart')
Array.from(headerCart).forEach(cart => {
    cart.addEventListener('click', manupulateWithCart)
})


function manupulateWithCart(e) {
    let path = e.path || e.composedPath;
    path = path.filter(el => el.matches);
    let target = e.target
    if (target.matches('.commodity_reset_btn')) {
        e.preventDefault()
        let updateCart = updateCartQuantity.bind(target.closest('form'));
        updateCart();
    }
    if (
        Array.from(path).find(el => el.matches('.header__cart__delete-button')).length !== 0
    ) {
        e.preventDefault()
        let updateCart = updateCartQuantity.bind(
            Array.from(path).find(el => el.matches('.header__cart__delete-button')).closest('form')
        )
        updateCart();
    }


}

function updateCartQuantity() {
    let link = this.getAttribute('action');
    let formData = new FormData(this);
    axios
        .post(link, formData)
        .then((response) => {
            if (!!response === true) {
                changeCartInnerHTML(response)
            }
        })
        .catch((err) => {
        })

}


$('.login_form').validate({
    rules: {
        password: {
            required: true,
            minLength: 6,
        },
        email: {
            required: true,
            email: true,
        },
    }
});

$('.order-login').validate({
    rules: {
        email: {
            email: true,
            required: true
        },
        password: {
            minLength: 6,
            required: true
        }
    }
})
$('.registation-form').validate({
    rules: {
        username: {
            required: true,
        },
        email: {
            required: true,
            email: true,
        },
        tel: {
            required: true,
        },
        address: {
            required: true,
        },
        password: {
            required: true,
            minlength: 6,
        },
        password_confirmation: {
            required: true,
            equalTo: '#password'
        },
        agreement: {
            required: true,
        },
        agreement2: {
            required: true
        }
    },
    ignore: []
});
$('.user-data-self').validate({
    ignore: [],
    rules: {
        name: 'required',
        firstname: 'required',
        email: {
            email: true,
            required: true
        },
        telephone: 'required',
        'identification-type': {
            required: true
        }
    }
})
$('.user-data-omniva').validate({
    ignore: [],
    rules: {
        name: 'required',
        firstname: 'required',
        email: {
            email: true,
            required: true
        },
        telephone: 'required',
        'identification-type': {
            required: true
        }
    }
})

$('.user-data-delivery').validate({
    ignore: [],
    rules: {
        name: 'required',
        firstname: 'required',
        email: {
            email: true,
            required: true
        },
        telephone: 'required',
        'identification-type': {
            required: true
        },
        city: 'required',
        delivery_address: 'required',
        postcode: 'required',

    }
})

$('.order-no-registration').validate({
    rules: {
        email: {
            email: true,
            required: true
        }
    }
})

