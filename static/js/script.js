function jqmIscrollviewRemoveLayerXYProps(e) {
    delete e.layerX, delete e.layerY
}
function messages(e) {
    window.localStorage.setItem("ib_dialog_message", e), $.mobile.changePage("/fn_message.html")
}
function messages_go(e, t) {
    window.localStorage.setItem("ib_dialog_message", e), window.localStorage.setItem("ib_go_url", t), $.mobile.changePage("/fn_message_go.html")
}
function bconfrim(e, t) {
    window.localStorage.setItem("ib_confrim_message", e), window.localStorage.setItem("ib_gourl", t), $.mobile.changePage("/fn_confrim.html")
}
function getQueryStringByName(e) {
    var t;
    return t = "undefined" != typeof $.mobile.activePage && "undefined" != typeof $.mobile.activePage[0].baseURI ? $.mobile.activePage[0].baseURI.match(new RegExp("[?&]" + e + "=([^&]+)", "i")) : "undefined" != typeof $.mobile.activePage ? $.mobile.activePage.jqmData("url").match(new RegExp("[?&]" + e + "=([^&]+)", "i")) : location.search.match(new RegExp("[?&]" + e + "=([^&]+)", "i")), null == t || t.length < 1 ? "" : t[1]
}
function is_logged() {
    var e = localStorage.getItem("ib_user_data");
    if (!e)return !1;
    var t = JSON.parse(e);
    return 1 == t.state ? !0 : !1
}
function check_logged() {
    return is_logged() ? !0 : ($.mobile.changePage("account.html"), !1)
}
function get_user_info() {
    var e = localStorage.getItem("ib_user_data");
    return e ? JSON.parse(e) : !1
}
function get_location() {
    var e = localStorage.getItem("ib_location_id");
    if (!e)return !1;
    var t = localStorage.getItem("ib_location_name");
    return {id: e, name: t}
}
function set_location(e, t) {
    localStorage.setItem("ib_location_id", e), $.cookie("ib_location_id", e, {path: "/"}), localStorage.setItem("ib_location_name", t), $.cookie("ib_location_name", t, {path: "/"})
}
function app_init() {
    $.getJSON(server_url + "index.php/json/init/?callback=?", {}, function (e) {
        localStorage.setItem("ib_user_data", JSON.stringify(e.user));
        var t = 0, i = localStorage.getItem("ib_user_message"), n = JSON.parse(i);
        $.each(e.messages, function (e, i) {
            var o = array_search(n, i);
            0 == o && (t += 1)
        }), localStorage.setItem("ib_unread_messages", t)
    })
}
function show_account() {
    $.mobile.changePage("account.html")
}
function array_search(e, t) {
    if ("object" != typeof e)return !1;
    var i = [];
    for (var n in e)e[n] == t && i.push(n);
    var o = i.length;
    return 0 == o ? !1 : 1 == o ? i[0] : i
}
function set_unread() {
    var e = localStorage.getItem("ib_unread_messages");
    e > 0 ? ($('[data-role="footer"] a.setting span').remove(), $('[data-role="footer"] a.setting').append('<span id="footer_messages" class="user_message_count">' + e + "<span>")) : $('[data-role="footer"] a.setting').remove("span")
}
function open_url() {
    $('a[target="_blank"]').on("vclick", function (e) {
        e.preventDefault(), window.open($(this).attr("href"), "_blank", "location=yes")
    })
}
function show_mask(e, t) {
    clearTimeout(mask_time);
    var i = '<div class="mask_prompt">' + e + "</div>", n = $("div.mask_prompt");
    void 0 == t && (t = 1550), n.length > 0 ? n.html(e) : $(document.body).append(i), n = $("div.mask_prompt"), n.css({
        marginLeft: -(n.outerWidth() / 2),
        marginTop: -(n.outerHeight() / 2)
    }), n.fadeIn("fast"), mask_time = setTimeout(function () {
        $("div.mask_prompt").fadeOut()
    }, t)
}
var server_url = "http://ieltsbroapp.sinaapp.com/";
!function (e, t) {
    function i(e) {
        var t = e.length, i = st.type(e);
        return st.isWindow(e) ? !1 : 1 === e.nodeType && t ? !0 : "array" === i || "function" !== i && (0 === t || "number" == typeof t && t > 0 && t - 1 in e)
    }

    function n(e) {
        var t = ft[e] = {};
        return st.each(e.match(rt) || [], function (e, i) {
            t[i] = !0
        }), t
    }

    function o() {
        Object.defineProperty(this.cache = {}, 0, {
            get: function () {
                return {}
            }
        }), this.expando = st.expando + Math.random()
    }

    function s(e, i, n) {
        var o;
        if (n === t && 1 === e.nodeType)if (o = "data-" + i.replace(vt, "-$1").toLowerCase(), n = e.getAttribute(o), "string" == typeof n) {
            try {
                n = "true" === n ? !0 : "false" === n ? !1 : "null" === n ? null : +n + "" === n ? +n : bt.test(n) ? JSON.parse(n) : n
            } catch (s) {
            }
            mt.set(e, i, n)
        } else n = t;
        return n
    }

    function a() {
        return !0
    }

    function r() {
        return !1
    }

    function l() {
        try {
            return U.activeElement
        } catch (e) {
        }
    }

    function c(e, t) {
        for (; (e = e[t]) && 1 !== e.nodeType;);
        return e
    }

    function h(e, t, i) {
        if (st.isFunction(t))return st.grep(e, function (e, n) {
            return !!t.call(e, n, e) !== i
        });
        if (t.nodeType)return st.grep(e, function (e) {
            return e === t !== i
        });
        if ("string" == typeof t) {
            if (Dt.test(t))return st.filter(t, e, i);
            t = st.filter(t, e)
        }
        return st.grep(e, function (e) {
            return tt.call(t, e) >= 0 !== i
        })
    }

    function u(e, t) {
        return st.nodeName(e, "table") && st.nodeName(1 === t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
    }

    function d(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
    }

    function p(e) {
        var t = Ft.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"), e
    }

    function f(e, t) {
        for (var i = e.length, n = 0; i > n; n++)gt.set(e[n], "globalEval", !t || gt.get(t[n], "globalEval"))
    }

    function m(e, t) {
        var i, n, o, s, a, r, l, c;
        if (1 === t.nodeType) {
            if (gt.hasData(e) && (s = gt.access(e), a = gt.set(t, s), c = s.events)) {
                delete a.handle, a.events = {};
                for (o in c)for (i = 0, n = c[o].length; n > i; i++)st.event.add(t, o, c[o][i])
            }
            mt.hasData(e) && (r = mt.access(e), l = st.extend({}, r), mt.set(t, l))
        }
    }

    function g(e, i) {
        var n = e.getElementsByTagName ? e.getElementsByTagName(i || "*") : e.querySelectorAll ? e.querySelectorAll(i || "*") : [];
        return i === t || i && st.nodeName(e, i) ? st.merge([e], n) : n
    }

    function b(e, t) {
        var i = t.nodeName.toLowerCase();
        "input" === i && Bt.test(e.type) ? t.checked = e.checked : ("input" === i || "textarea" === i) && (t.defaultValue = e.defaultValue)
    }

    function v(e, t) {
        if (t in e)return t;
        for (var i = t.charAt(0).toUpperCase() + t.slice(1), n = t, o = Jt.length; o--;)if (t = Jt[o] + i, t in e)return t;
        return n
    }

    function _(e, t) {
        return e = t || e, "none" === st.css(e, "display") || !st.contains(e.ownerDocument, e)
    }

    function y(t) {
        return e.getComputedStyle(t, null)
    }

    function x(e, t) {
        for (var i, n, o, s = [], a = 0, r = e.length; r > a; a++)n = e[a], n.style && (s[a] = gt.get(n, "olddisplay"), i = n.style.display, t ? (s[a] || "none" !== i || (n.style.display = ""), "" === n.style.display && _(n) && (s[a] = gt.access(n, "olddisplay", S(n.nodeName)))) : s[a] || (o = _(n), (i && "none" !== i || !o) && gt.set(n, "olddisplay", o ? i : st.css(n, "display"))));
        for (a = 0; r > a; a++)n = e[a], n.style && (t && "none" !== n.style.display && "" !== n.style.display || (n.style.display = t ? s[a] || "" : "none"));
        return e
    }

    function w(e, t, i) {
        var n = Yt.exec(t);
        return n ? Math.max(0, n[1] - (i || 0)) + (n[2] || "px") : t
    }

    function C(e, t, i, n, o) {
        for (var s = i === (n ? "border" : "content") ? 4 : "width" === t ? 1 : 0, a = 0; 4 > s; s += 2)"margin" === i && (a += st.css(e, i + Qt[s], !0, o)), n ? ("content" === i && (a -= st.css(e, "padding" + Qt[s], !0, o)), "margin" !== i && (a -= st.css(e, "border" + Qt[s] + "Width", !0, o))) : (a += st.css(e, "padding" + Qt[s], !0, o), "padding" !== i && (a += st.css(e, "border" + Qt[s] + "Width", !0, o)));
        return a
    }

    function T(e, t, i) {
        var n = !0, o = "width" === t ? e.offsetWidth : e.offsetHeight, s = y(e), a = st.support.boxSizing && "border-box" === st.css(e, "boxSizing", !1, s);
        if (0 >= o || null == o) {
            if (o = Mt(e, t, s), (0 > o || null == o) && (o = e.style[t]), Xt.test(o))return o;
            n = a && (st.support.boxSizingReliable || o === e.style[t]), o = parseFloat(o) || 0
        }
        return o + C(e, t, i || (a ? "border" : "content"), n, s) + "px"
    }

    function S(e) {
        var t = U, i = Kt[e];
        return i || (i = k(e, t), "none" !== i && i || (zt = (zt || st("<iframe frameborder='0' width='0' height='0'/>").css("cssText", "display:block !important")).appendTo(t.documentElement), t = (zt[0].contentWindow || zt[0].contentDocument).document, t.write("<!doctype html><html><body>"), t.close(), i = k(e, t), zt.detach()), Kt[e] = i), i
    }

    function k(e, t) {
        var i = st(t.createElement(e)).appendTo(t.body), n = st.css(i[0], "display");
        return i.remove(), n
    }

    function P(e, t, i, n) {
        var o;
        if (st.isArray(t))st.each(t, function (t, o) {
            i || ti.test(e) ? n(e, o) : P(e + "[" + ("object" == typeof o ? t : "") + "]", o, i, n)
        }); else if (i || "object" !== st.type(t))n(e, t); else for (o in t)P(e + "[" + o + "]", t[o], i, n)
    }

    function D(e) {
        return function (t, i) {
            "string" != typeof t && (i = t, t = "*");
            var n, o = 0, s = t.toLowerCase().match(rt) || [];
            if (st.isFunction(i))for (; n = s[o++];)"+" === n[0] ? (n = n.slice(1) || "*", (e[n] = e[n] || []).unshift(i)) : (e[n] = e[n] || []).push(i)
        }
    }

    function E(e, i, n, o) {
        function s(l) {
            var c;
            return a[l] = !0, st.each(e[l] || [], function (e, l) {
                var h = l(i, n, o);
                return "string" != typeof h || r || a[h] ? r ? !(c = h) : t : (i.dataTypes.unshift(h), s(h), !1)
            }), c
        }

        var a = {}, r = e === vi;
        return s(i.dataTypes[0]) || !a["*"] && s("*")
    }

    function A(e, i) {
        var n, o, s = st.ajaxSettings.flatOptions || {};
        for (n in i)i[n] !== t && ((s[n] ? e : o || (o = {}))[n] = i[n]);
        return o && st.extend(!0, e, o), e
    }

    function I(e, i, n) {
        for (var o, s, a, r, l = e.contents, c = e.dataTypes; "*" === c[0];)c.shift(), o === t && (o = e.mimeType || i.getResponseHeader("Content-Type"));
        if (o)for (s in l)if (l[s] && l[s].test(o)) {
            c.unshift(s);
            break
        }
        if (c[0]in n)a = c[0]; else {
            for (s in n) {
                if (!c[0] || e.converters[s + " " + c[0]]) {
                    a = s;
                    break
                }
                r || (r = s)
            }
            a = a || r
        }
        return a ? (a !== c[0] && c.unshift(a), n[a]) : t
    }

    function N(e, t, i, n) {
        var o, s, a, r, l, c = {}, h = e.dataTypes.slice();
        if (h[1])for (a in e.converters)c[a.toLowerCase()] = e.converters[a];
        for (s = h.shift(); s;)if (e.responseFields[s] && (i[e.responseFields[s]] = t), !l && n && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = s, s = h.shift())if ("*" === s)s = l; else if ("*" !== l && l !== s) {
            if (a = c[l + " " + s] || c["* " + s], !a)for (o in c)if (r = o.split(" "), r[1] === s && (a = c[l + " " + r[0]] || c["* " + r[0]])) {
                a === !0 ? a = c[o] : c[o] !== !0 && (s = r[0], h.unshift(r[1]));
                break
            }
            if (a !== !0)if (a && e["throws"])t = a(t); else try {
                t = a(t)
            } catch (u) {
                return {state: "parsererror", error: a ? u : "No conversion from " + l + " to " + s}
            }
        }
        return {state: "success", data: t}
    }

    function O() {
        return setTimeout(function () {
            Pi = t
        }), Pi = st.now()
    }

    function L(e, t, i) {
        for (var n, o = (Oi[t] || []).concat(Oi["*"]), s = 0, a = o.length; a > s; s++)if (n = o[s].call(i, t, e))return n
    }

    function j(e, t, i) {
        var n, o, s = 0, a = Ni.length, r = st.Deferred().always(function () {
            delete l.elem
        }), l = function () {
            if (o)return !1;
            for (var t = Pi || O(), i = Math.max(0, c.startTime + c.duration - t), n = i / c.duration || 0, s = 1 - n, a = 0, l = c.tweens.length; l > a; a++)c.tweens[a].run(s);
            return r.notifyWith(e, [c, s, i]), 1 > s && l ? i : (r.resolveWith(e, [c]), !1)
        }, c = r.promise({
            elem: e,
            props: st.extend({}, t),
            opts: st.extend(!0, {specialEasing: {}}, i),
            originalProperties: t,
            originalOptions: i,
            startTime: Pi || O(),
            duration: i.duration,
            tweens: [],
            createTween: function (t, i) {
                var n = st.Tween(e, c.opts, t, i, c.opts.specialEasing[t] || c.opts.easing);
                return c.tweens.push(n), n
            },
            stop: function (t) {
                var i = 0, n = t ? c.tweens.length : 0;
                if (o)return this;
                for (o = !0; n > i; i++)c.tweens[i].run(1);
                return t ? r.resolveWith(e, [c, t]) : r.rejectWith(e, [c, t]), this
            }
        }), h = c.props;
        for (B(h, c.opts.specialEasing); a > s; s++)if (n = Ni[s].call(c, e, h, c.opts))return n;
        return st.map(h, L, c), st.isFunction(c.opts.start) && c.opts.start.call(e, c), st.fx.timer(st.extend(l, {
            elem: e,
            anim: c,
            queue: c.opts.queue
        })), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always)
    }

    function B(e, t) {
        var i, n, o, s, a;
        for (i in e)if (n = st.camelCase(i), o = t[n], s = e[i], st.isArray(s) && (o = s[1], s = e[i] = s[0]), i !== n && (e[n] = s, delete e[i]), a = st.cssHooks[n], a && "expand"in a) {
            s = a.expand(s), delete e[n];
            for (i in s)i in e || (e[i] = s[i], t[i] = o)
        } else t[n] = o
    }

    function H(e, i, n) {
        var o, s, a, r, l, c, h = this, u = {}, d = e.style, p = e.nodeType && _(e), f = gt.get(e, "fxshow");
        n.queue || (l = st._queueHooks(e, "fx"), null == l.unqueued && (l.unqueued = 0, c = l.empty.fire, l.empty.fire = function () {
            l.unqueued || c()
        }), l.unqueued++, h.always(function () {
            h.always(function () {
                l.unqueued--, st.queue(e, "fx").length || l.empty.fire()
            })
        })), 1 === e.nodeType && ("height"in i || "width"in i) && (n.overflow = [d.overflow, d.overflowX, d.overflowY], "inline" === st.css(e, "display") && "none" === st.css(e, "float") && (d.display = "inline-block")), n.overflow && (d.overflow = "hidden", h.always(function () {
            d.overflow = n.overflow[0], d.overflowX = n.overflow[1], d.overflowY = n.overflow[2]
        }));
        for (o in i)if (s = i[o], Ei.exec(s)) {
            if (delete i[o], a = a || "toggle" === s, s === (p ? "hide" : "show")) {
                if ("show" !== s || !f || f[o] === t)continue;
                p = !0
            }
            u[o] = f && f[o] || st.style(e, o)
        }
        if (!st.isEmptyObject(u)) {
            f ? "hidden"in f && (p = f.hidden) : f = gt.access(e, "fxshow", {}), a && (f.hidden = !p), p ? st(e).show() : h.done(function () {
                st(e).hide()
            }), h.done(function () {
                var t;
                gt.remove(e, "fxshow");
                for (t in u)st.style(e, t, u[t])
            });
            for (o in u)r = L(p ? f[o] : 0, o, h), o in f || (f[o] = r.start, p && (r.end = r.start, r.start = "width" === o || "height" === o ? 1 : 0))
        }
    }

    function q(e, t, i, n, o) {
        return new q.prototype.init(e, t, i, n, o)
    }

    function F(e, t) {
        var i, n = {height: e}, o = 0;
        for (t = t ? 1 : 0; 4 > o; o += 2 - t)i = Qt[o], n["margin" + i] = n["padding" + i] = e;
        return t && (n.opacity = n.width = e), n
    }

    function W(e) {
        return st.isWindow(e) ? e : 9 === e.nodeType && e.defaultView
    }

    var $, M, z = typeof t, R = e.location, U = e.document, Y = U.documentElement, X = e.jQuery, V = e.$, K = {}, Z = [], G = "2.0.2", Q = Z.concat, J = Z.push, et = Z.slice, tt = Z.indexOf, it = K.toString, nt = K.hasOwnProperty, ot = G.trim, st = function (e, t) {
        return new st.fn.init(e, t, $)
    }, at = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, rt = /\S+/g, lt = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, ct = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, ht = /^-ms-/, ut = /-([\da-z])/gi, dt = function (e, t) {
        return t.toUpperCase()
    }, pt = function () {
        U.removeEventListener("DOMContentLoaded", pt, !1), e.removeEventListener("load", pt, !1), st.ready()
    };
    st.fn = st.prototype = {
        jquery: G, constructor: st, init: function (e, i, n) {
            var o, s;
            if (!e)return this;
            if ("string" == typeof e) {
                if (o = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [null, e, null] : lt.exec(e), !o || !o[1] && i)return !i || i.jquery ? (i || n).find(e) : this.constructor(i).find(e);
                if (o[1]) {
                    if (i = i instanceof st ? i[0] : i, st.merge(this, st.parseHTML(o[1], i && i.nodeType ? i.ownerDocument || i : U, !0)), ct.test(o[1]) && st.isPlainObject(i))for (o in i)st.isFunction(this[o]) ? this[o](i[o]) : this.attr(o, i[o]);
                    return this
                }
                return s = U.getElementById(o[2]), s && s.parentNode && (this.length = 1, this[0] = s), this.context = U, this.selector = e, this
            }
            return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : st.isFunction(e) ? n.ready(e) : (e.selector !== t && (this.selector = e.selector, this.context = e.context), st.makeArray(e, this))
        }, selector: "", length: 0, toArray: function () {
            return et.call(this)
        }, get: function (e) {
            return null == e ? this.toArray() : 0 > e ? this[this.length + e] : this[e]
        }, pushStack: function (e) {
            var t = st.merge(this.constructor(), e);
            return t.prevObject = this, t.context = this.context, t
        }, each: function (e, t) {
            return st.each(this, e, t)
        }, ready: function (e) {
            return st.ready.promise().done(e), this
        }, slice: function () {
            return this.pushStack(et.apply(this, arguments))
        }, first: function () {
            return this.eq(0)
        }, last: function () {
            return this.eq(-1)
        }, eq: function (e) {
            var t = this.length, i = +e + (0 > e ? t : 0);
            return this.pushStack(i >= 0 && t > i ? [this[i]] : [])
        }, map: function (e) {
            return this.pushStack(st.map(this, function (t, i) {
                return e.call(t, i, t)
            }))
        }, end: function () {
            return this.prevObject || this.constructor(null)
        }, push: J, sort: [].sort, splice: [].splice
    }, st.fn.init.prototype = st.fn, st.extend = st.fn.extend = function () {
        var e, i, n, o, s, a, r = arguments[0] || {}, l = 1, c = arguments.length, h = !1;
        for ("boolean" == typeof r && (h = r, r = arguments[1] || {}, l = 2), "object" == typeof r || st.isFunction(r) || (r = {}), c === l && (r = this, --l); c > l; l++)if (null != (e = arguments[l]))for (i in e)n = r[i], o = e[i], r !== o && (h && o && (st.isPlainObject(o) || (s = st.isArray(o))) ? (s ? (s = !1, a = n && st.isArray(n) ? n : []) : a = n && st.isPlainObject(n) ? n : {}, r[i] = st.extend(h, a, o)) : o !== t && (r[i] = o));
        return r
    }, st.extend({
        expando: "jQuery" + (G + Math.random()).replace(/\D/g, ""), noConflict: function (t) {
            return e.$ === st && (e.$ = V), t && e.jQuery === st && (e.jQuery = X), st
        }, isReady: !1, readyWait: 1, holdReady: function (e) {
            e ? st.readyWait++ : st.ready(!0)
        }, ready: function (e) {
            (e === !0 ? --st.readyWait : st.isReady) || (st.isReady = !0, e !== !0 && --st.readyWait > 0 || (M.resolveWith(U, [st]), st.fn.trigger && st(U).trigger("ready").off("ready")))
        }, isFunction: function (e) {
            return "function" === st.type(e)
        }, isArray: Array.isArray, isWindow: function (e) {
            return null != e && e === e.window
        }, isNumeric: function (e) {
            return !isNaN(parseFloat(e)) && isFinite(e)
        }, type: function (e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? K[it.call(e)] || "object" : typeof e
        }, isPlainObject: function (e) {
            if ("object" !== st.type(e) || e.nodeType || st.isWindow(e))return !1;
            try {
                if (e.constructor && !nt.call(e.constructor.prototype, "isPrototypeOf"))return !1
            } catch (t) {
                return !1
            }
            return !0
        }, isEmptyObject: function (e) {
            var t;
            for (t in e)return !1;
            return !0
        }, error: function (e) {
            throw Error(e)
        }, parseHTML: function (e, t, i) {
            if (!e || "string" != typeof e)return null;
            "boolean" == typeof t && (i = t, t = !1), t = t || U;
            var n = ct.exec(e), o = !i && [];
            return n ? [t.createElement(n[1])] : (n = st.buildFragment([e], t, o), o && st(o).remove(), st.merge([], n.childNodes))
        }, parseJSON: JSON.parse, parseXML: function (e) {
            var i, n;
            if (!e || "string" != typeof e)return null;
            try {
                n = new DOMParser, i = n.parseFromString(e, "text/xml")
            } catch (o) {
                i = t
            }
            return (!i || i.getElementsByTagName("parsererror").length) && st.error("Invalid XML: " + e), i
        }, noop: function () {
        }, globalEval: function (e) {
            var t, i = eval;
            e = st.trim(e), e && (1 === e.indexOf("use strict") ? (t = U.createElement("script"), t.text = e, U.head.appendChild(t).parentNode.removeChild(t)) : i(e))
        }, camelCase: function (e) {
            return e.replace(ht, "ms-").replace(ut, dt)
        }, nodeName: function (e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        }, each: function (e, t, n) {
            var o, s = 0, a = e.length, r = i(e);
            if (n) {
                if (r)for (; a > s && (o = t.apply(e[s], n), o !== !1); s++); else for (s in e)if (o = t.apply(e[s], n), o === !1)break
            } else if (r)for (; a > s && (o = t.call(e[s], s, e[s]), o !== !1); s++); else for (s in e)if (o = t.call(e[s], s, e[s]), o === !1)break;
            return e
        }, trim: function (e) {
            return null == e ? "" : ot.call(e)
        }, makeArray: function (e, t) {
            var n = t || [];
            return null != e && (i(Object(e)) ? st.merge(n, "string" == typeof e ? [e] : e) : J.call(n, e)), n
        }, inArray: function (e, t, i) {
            return null == t ? -1 : tt.call(t, e, i)
        }, merge: function (e, i) {
            var n = i.length, o = e.length, s = 0;
            if ("number" == typeof n)for (; n > s; s++)e[o++] = i[s]; else for (; i[s] !== t;)e[o++] = i[s++];
            return e.length = o, e
        }, grep: function (e, t, i) {
            var n, o = [], s = 0, a = e.length;
            for (i = !!i; a > s; s++)n = !!t(e[s], s), i !== n && o.push(e[s]);
            return o
        }, map: function (e, t, n) {
            var o, s = 0, a = e.length, r = i(e), l = [];
            if (r)for (; a > s; s++)o = t(e[s], s, n), null != o && (l[l.length] = o); else for (s in e)o = t(e[s], s, n), null != o && (l[l.length] = o);
            return Q.apply([], l)
        }, guid: 1, proxy: function (e, i) {
            var n, o, s;
            return "string" == typeof i && (n = e[i], i = e, e = n), st.isFunction(e) ? (o = et.call(arguments, 2), s = function () {
                return e.apply(i || this, o.concat(et.call(arguments)))
            }, s.guid = e.guid = e.guid || st.guid++, s) : t
        }, access: function (e, i, n, o, s, a, r) {
            var l = 0, c = e.length, h = null == n;
            if ("object" === st.type(n)) {
                s = !0;
                for (l in n)st.access(e, i, l, n[l], !0, a, r)
            } else if (o !== t && (s = !0, st.isFunction(o) || (r = !0), h && (r ? (i.call(e, o), i = null) : (h = i, i = function (e, t, i) {
                    return h.call(st(e), i)
                })), i))for (; c > l; l++)i(e[l], n, r ? o : o.call(e[l], l, i(e[l], n)));
            return s ? e : h ? i.call(e) : c ? i(e[0], n) : a
        }, now: Date.now, swap: function (e, t, i, n) {
            var o, s, a = {};
            for (s in t)a[s] = e.style[s], e.style[s] = t[s];
            o = i.apply(e, n || []);
            for (s in t)e.style[s] = a[s];
            return o
        }
    }), st.ready.promise = function (t) {
        return M || (M = st.Deferred(), "complete" === U.readyState ? setTimeout(st.ready) : (U.addEventListener("DOMContentLoaded", pt, !1), e.addEventListener("load", pt, !1))), M.promise(t)
    }, st.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (e, t) {
        K["[object " + t + "]"] = t.toLowerCase()
    }), $ = st(U), function (e, t) {
        function i(e, t, i, n) {
            var o, s, a, r, l, c, h, u, d, p;
            if ((t ? t.ownerDocument || t : R) !== B && j(t), t = t || B, i = i || [], !e || "string" != typeof e)return i;
            if (1 !== (r = t.nodeType) && 9 !== r)return [];
            if (q && !n) {
                if (o = Ct.exec(e))if (a = o[1]) {
                    if (9 === r) {
                        if (s = t.getElementById(a), !s || !s.parentNode)return i;
                        if (s.id === a)return i.push(s), i
                    } else if (t.ownerDocument && (s = t.ownerDocument.getElementById(a)) && M(t, s) && s.id === a)return i.push(s), i
                } else {
                    if (o[2])return ot.apply(i, t.getElementsByTagName(e)), i;
                    if ((a = o[3]) && P.getElementsByClassName && t.getElementsByClassName)return ot.apply(i, t.getElementsByClassName(a)), i
                }
                if (P.qsa && (!F || !F.test(e))) {
                    if (u = h = z, d = t, p = 9 === r && e, 1 === r && "object" !== t.nodeName.toLowerCase()) {
                        for (c = m(e), (h = t.getAttribute("id")) ? u = h.replace(kt, "\\$&") : t.setAttribute("id", u), u = "[id='" + u + "'] ", l = c.length; l--;)c[l] = u + g(c[l]);
                        d = bt.test(e) && t.parentNode || t, p = c.join(",")
                    }
                    if (p)try {
                        return ot.apply(i, d.querySelectorAll(p)), i
                    } catch (f) {
                    } finally {
                        h || t.removeAttribute("id")
                    }
                }
            }
            return T(e.replace(ft, "$1"), t, i, n)
        }

        function n(e) {
            return wt.test(e + "")
        }

        function o() {
            function e(i, n) {
                return t.push(i += " ") > E.cacheLength && delete e[t.shift()], e[i] = n
            }

            var t = [];
            return e
        }

        function s(e) {
            return e[z] = !0, e
        }

        function a(e) {
            var t = B.createElement("div");
            try {
                return !!e(t)
            } catch (i) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null
            }
        }

        function r(e, t, i) {
            e = e.split("|");
            for (var n, o = e.length, s = i ? null : t; o--;)(n = E.attrHandle[e[o]]) && n !== t || (E.attrHandle[e[o]] = s)
        }

        function l(e, t) {
            var i = e.getAttributeNode(t);
            return i && i.specified ? i.value : e[t] === !0 ? t.toLowerCase() : null
        }

        function c(e, t) {
            return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }

        function h(e) {
            return "input" === e.nodeName.toLowerCase() ? e.defaultValue : t
        }

        function u(e, t) {
            var i = t && e, n = i && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || J) - (~e.sourceIndex || J);
            if (n)return n;
            if (i)for (; i = i.nextSibling;)if (i === t)return -1;
            return e ? 1 : -1
        }

        function d(e) {
            return function (t) {
                var i = t.nodeName.toLowerCase();
                return "input" === i && t.type === e
            }
        }

        function p(e) {
            return function (t) {
                var i = t.nodeName.toLowerCase();
                return ("input" === i || "button" === i) && t.type === e
            }
        }

        function f(e) {
            return s(function (t) {
                return t = +t, s(function (i, n) {
                    for (var o, s = e([], i.length, t), a = s.length; a--;)i[o = s[a]] && (i[o] = !(n[o] = i[o]))
                })
            })
        }

        function m(e, t) {
            var n, o, s, a, r, l, c, h = V[e + " "];
            if (h)return t ? 0 : h.slice(0);
            for (r = e, l = [], c = E.preFilter; r;) {
                (!n || (o = mt.exec(r))) && (o && (r = r.slice(o[0].length) || r), l.push(s = [])), n = !1, (o = gt.exec(r)) && (n = o.shift(), s.push({
                    value: n,
                    type: o[0].replace(ft, " ")
                }), r = r.slice(n.length));
                for (a in E.filter)!(o = xt[a].exec(r)) || c[a] && !(o = c[a](o)) || (n = o.shift(), s.push({
                    value: n,
                    type: a,
                    matches: o
                }), r = r.slice(n.length));
                if (!n)break
            }
            return t ? r.length : r ? i.error(e) : V(e, l).slice(0)
        }

        function g(e) {
            for (var t = 0, i = e.length, n = ""; i > t; t++)n += e[t].value;
            return n
        }

        function b(e, t, i) {
            var n = t.dir, o = i && "parentNode" === n, s = Y++;
            return t.first ? function (t, i, s) {
                for (; t = t[n];)if (1 === t.nodeType || o)return e(t, i, s)
            } : function (t, i, a) {
                var r, l, c, h = U + " " + s;
                if (a) {
                    for (; t = t[n];)if ((1 === t.nodeType || o) && e(t, i, a))return !0
                } else for (; t = t[n];)if (1 === t.nodeType || o)if (c = t[z] || (t[z] = {}), (l = c[n]) && l[0] === h) {
                    if ((r = l[1]) === !0 || r === D)return r === !0
                } else if (l = c[n] = [h], l[1] = e(t, i, a) || D, l[1] === !0)return !0
            }
        }

        function v(e) {
            return e.length > 1 ? function (t, i, n) {
                for (var o = e.length; o--;)if (!e[o](t, i, n))return !1;
                return !0
            } : e[0]
        }

        function _(e, t, i, n, o) {
            for (var s, a = [], r = 0, l = e.length, c = null != t; l > r; r++)(s = e[r]) && (!i || i(s, n, o)) && (a.push(s), c && t.push(r));
            return a
        }

        function y(e, t, i, n, o, a) {
            return n && !n[z] && (n = y(n)), o && !o[z] && (o = y(o, a)), s(function (s, a, r, l) {
                var c, h, u, d = [], p = [], f = a.length, m = s || C(t || "*", r.nodeType ? [r] : r, []), g = !e || !s && t ? m : _(m, d, e, r, l), b = i ? o || (s ? e : f || n) ? [] : a : g;
                if (i && i(g, b, r, l), n)for (c = _(b, p), n(c, [], r, l), h = c.length; h--;)(u = c[h]) && (b[p[h]] = !(g[p[h]] = u));
                if (s) {
                    if (o || e) {
                        if (o) {
                            for (c = [], h = b.length; h--;)(u = b[h]) && c.push(g[h] = u);
                            o(null, b = [], c, l)
                        }
                        for (h = b.length; h--;)(u = b[h]) && (c = o ? rt.call(s, u) : d[h]) > -1 && (s[c] = !(a[c] = u))
                    }
                } else b = _(b === a ? b.splice(f, b.length) : b), o ? o(null, a, b, l) : ot.apply(a, b)
            })
        }

        function x(e) {
            for (var t, i, n, o = e.length, s = E.relative[e[0].type], a = s || E.relative[" "], r = s ? 1 : 0, l = b(function (e) {
                return e === t
            }, a, !0), c = b(function (e) {
                return rt.call(t, e) > -1
            }, a, !0), h = [function (e, i, n) {
                return !s && (n || i !== O) || ((t = i).nodeType ? l(e, i, n) : c(e, i, n))
            }]; o > r; r++)if (i = E.relative[e[r].type])h = [b(v(h), i)]; else {
                if (i = E.filter[e[r].type].apply(null, e[r].matches), i[z]) {
                    for (n = ++r; o > n && !E.relative[e[n].type]; n++);
                    return y(r > 1 && v(h), r > 1 && g(e.slice(0, r - 1).concat({value: " " === e[r - 2].type ? "*" : ""})).replace(ft, "$1"), i, n > r && x(e.slice(r, n)), o > n && x(e = e.slice(n)), o > n && g(e))
                }
                h.push(i)
            }
            return v(h)
        }

        function w(e, t) {
            var n = 0, o = t.length > 0, a = e.length > 0, r = function (s, r, l, c, h) {
                var u, d, p, f = [], m = 0, g = "0", b = s && [], v = null != h, y = O, x = s || a && E.find.TAG("*", h && r.parentNode || r), w = U += null == y ? 1 : Math.random() || .1;
                for (v && (O = r !== B && r, D = n); null != (u = x[g]); g++) {
                    if (a && u) {
                        for (d = 0; p = e[d++];)if (p(u, r, l)) {
                            c.push(u);
                            break
                        }
                        v && (U = w, D = ++n)
                    }
                    o && ((u = !p && u) && m--, s && b.push(u))
                }
                if (m += g, o && g !== m) {
                    for (d = 0; p = t[d++];)p(b, f, r, l);
                    if (s) {
                        if (m > 0)for (; g--;)b[g] || f[g] || (f[g] = it.call(c));
                        f = _(f)
                    }
                    ot.apply(c, f), v && !s && f.length > 0 && m + t.length > 1 && i.uniqueSort(c)
                }
                return v && (U = w, O = y), b
            };
            return o ? s(r) : r
        }

        function C(e, t, n) {
            for (var o = 0, s = t.length; s > o; o++)i(e, t[o], n);
            return n
        }

        function T(e, t, i, n) {
            var o, s, a, r, l, c = m(e);
            if (!n && 1 === c.length) {
                if (s = c[0] = c[0].slice(0), s.length > 2 && "ID" === (a = s[0]).type && P.getById && 9 === t.nodeType && q && E.relative[s[1].type]) {
                    if (t = (E.find.ID(a.matches[0].replace(Pt, Dt), t) || [])[0], !t)return i;
                    e = e.slice(s.shift().value.length)
                }
                for (o = xt.needsContext.test(e) ? 0 : s.length; o-- && (a = s[o], !E.relative[r = a.type]);)if ((l = E.find[r]) && (n = l(a.matches[0].replace(Pt, Dt), bt.test(s[0].type) && t.parentNode || t))) {
                    if (s.splice(o, 1), e = n.length && g(s), !e)return ot.apply(i, n), i;
                    break
                }
            }
            return N(e, c)(n, t, !q, i, bt.test(e)), i
        }

        function S() {
        }

        var k, P, D, E, A, I, N, O, L, j, B, H, q, F, W, $, M, z = "sizzle" + -new Date, R = e.document, U = 0, Y = 0, X = o(), V = o(), K = o(), Z = !1, G = function () {
            return 0
        }, Q = typeof t, J = 1 << 31, et = {}.hasOwnProperty, tt = [], it = tt.pop, nt = tt.push, ot = tt.push, at = tt.slice, rt = tt.indexOf || function (e) {
                for (var t = 0, i = this.length; i > t; t++)if (this[t] === e)return t;
                return -1
            }, lt = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", ct = "[\\x20\\t\\r\\n\\f]", ht = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", ut = ht.replace("w", "w#"), dt = "\\[" + ct + "*(" + ht + ")" + ct + "*(?:([*^$|!~]?=)" + ct + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + ut + ")|)|)" + ct + "*\\]", pt = ":(" + ht + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + dt.replace(3, 8) + ")*)|.*)\\)|)", ft = RegExp("^" + ct + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ct + "+$", "g"), mt = RegExp("^" + ct + "*," + ct + "*"), gt = RegExp("^" + ct + "*([>+~]|" + ct + ")" + ct + "*"), bt = RegExp(ct + "*[+~]"), vt = RegExp("=" + ct + "*([^\\]'\"]*)" + ct + "*\\]", "g"), _t = RegExp(pt), yt = RegExp("^" + ut + "$"), xt = {
            ID: RegExp("^#(" + ht + ")"),
            CLASS: RegExp("^\\.(" + ht + ")"),
            TAG: RegExp("^(" + ht.replace("w", "w*") + ")"),
            ATTR: RegExp("^" + dt),
            PSEUDO: RegExp("^" + pt),
            CHILD: RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ct + "*(even|odd|(([+-]|)(\\d*)n|)" + ct + "*(?:([+-]|)" + ct + "*(\\d+)|))" + ct + "*\\)|)", "i"),
            bool: RegExp("^(?:" + lt + ")$", "i"),
            needsContext: RegExp("^" + ct + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ct + "*((?:-\\d)?\\d*)" + ct + "*\\)|)(?=[^-]|$)", "i")
        }, wt = /^[^{]+\{\s*\[native \w/, Ct = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, Tt = /^(?:input|select|textarea|button)$/i, St = /^h\d$/i, kt = /'|\\/g, Pt = RegExp("\\\\([\\da-f]{1,6}" + ct + "?|(" + ct + ")|.)", "ig"), Dt = function (e, t, i) {
            var n = "0x" + t - 65536;
            return n !== n || i ? t : 0 > n ? String.fromCharCode(n + 65536) : String.fromCharCode(55296 | n >> 10, 56320 | 1023 & n)
        };
        try {
            ot.apply(tt = at.call(R.childNodes), R.childNodes), tt[R.childNodes.length].nodeType
        } catch (Et) {
            ot = {
                apply: tt.length ? function (e, t) {
                    nt.apply(e, at.call(t))
                } : function (e, t) {
                    for (var i = e.length, n = 0; e[i++] = t[n++];);
                    e.length = i - 1
                }
            }
        }
        I = i.isXML = function (e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return t ? "HTML" !== t.nodeName : !1
        }, P = i.support = {}, j = i.setDocument = function (e) {
            var i = e ? e.ownerDocument || e : R, o = i.parentWindow;
            return i !== B && 9 === i.nodeType && i.documentElement ? (B = i, H = i.documentElement, q = !I(i), o && o.frameElement && o.attachEvent("onbeforeunload", function () {
                j()
            }), P.attributes = a(function (e) {
                return e.innerHTML = "<a href='#'></a>", r("type|href|height|width", c, "#" === e.firstChild.getAttribute("href")), r(lt, l, null == e.getAttribute("disabled")), e.className = "i", !e.getAttribute("className")
            }), P.input = a(function (e) {
                return e.innerHTML = "<input>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
            }), r("value", h, P.attributes && P.input), P.getElementsByTagName = a(function (e) {
                return e.appendChild(i.createComment("")), !e.getElementsByTagName("*").length
            }), P.getElementsByClassName = a(function (e) {
                return e.innerHTML = "<div class='a'></div><div class='a i'></div>", e.firstChild.className = "i", 2 === e.getElementsByClassName("i").length
            }), P.getById = a(function (e) {
                return H.appendChild(e).id = z, !i.getElementsByName || !i.getElementsByName(z).length
            }), P.getById ? (E.find.ID = function (e, t) {
                if (typeof t.getElementById !== Q && q) {
                    var i = t.getElementById(e);
                    return i && i.parentNode ? [i] : []
                }
            }, E.filter.ID = function (e) {
                var t = e.replace(Pt, Dt);
                return function (e) {
                    return e.getAttribute("id") === t
                }
            }) : (delete E.find.ID, E.filter.ID = function (e) {
                var t = e.replace(Pt, Dt);
                return function (e) {
                    var i = typeof e.getAttributeNode !== Q && e.getAttributeNode("id");
                    return i && i.value === t
                }
            }), E.find.TAG = P.getElementsByTagName ? function (e, i) {
                return typeof i.getElementsByTagName !== Q ? i.getElementsByTagName(e) : t
            } : function (e, t) {
                var i, n = [], o = 0, s = t.getElementsByTagName(e);
                if ("*" === e) {
                    for (; i = s[o++];)1 === i.nodeType && n.push(i);
                    return n
                }
                return s
            }, E.find.CLASS = P.getElementsByClassName && function (e, i) {
                    return typeof i.getElementsByClassName !== Q && q ? i.getElementsByClassName(e) : t
                }, W = [], F = [], (P.qsa = n(i.querySelectorAll)) && (a(function (e) {
                e.innerHTML = "<select><option selected=''></option></select>", e.querySelectorAll("[selected]").length || F.push("\\[" + ct + "*(?:value|" + lt + ")"), e.querySelectorAll(":checked").length || F.push(":checked")
            }), a(function (e) {
                var t = i.createElement("input");
                t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("t", ""), e.querySelectorAll("[t^='']").length && F.push("[*^$]=" + ct + "*(?:''|\"\")"), e.querySelectorAll(":enabled").length || F.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), F.push(",.*:")
            })), (P.matchesSelector = n($ = H.webkitMatchesSelector || H.mozMatchesSelector || H.oMatchesSelector || H.msMatchesSelector)) && a(function (e) {
                P.disconnectedMatch = $.call(e, "div"), $.call(e, "[s!='']:x"), W.push("!=", pt)
            }), F = F.length && RegExp(F.join("|")), W = W.length && RegExp(W.join("|")), M = n(H.contains) || H.compareDocumentPosition ? function (e, t) {
                var i = 9 === e.nodeType ? e.documentElement : e, n = t && t.parentNode;
                return e === n || !(!n || 1 !== n.nodeType || !(i.contains ? i.contains(n) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(n)))
            } : function (e, t) {
                if (t)for (; t = t.parentNode;)if (t === e)return !0;
                return !1
            }, P.sortDetached = a(function (e) {
                return 1 & e.compareDocumentPosition(i.createElement("div"))
            }), G = H.compareDocumentPosition ? function (e, t) {
                if (e === t)return Z = !0, 0;
                var n = t.compareDocumentPosition && e.compareDocumentPosition && e.compareDocumentPosition(t);
                return n ? 1 & n || !P.sortDetached && t.compareDocumentPosition(e) === n ? e === i || M(R, e) ? -1 : t === i || M(R, t) ? 1 : L ? rt.call(L, e) - rt.call(L, t) : 0 : 4 & n ? -1 : 1 : e.compareDocumentPosition ? -1 : 1
            } : function (e, t) {
                var n, o = 0, s = e.parentNode, a = t.parentNode, r = [e], l = [t];
                if (e === t)return Z = !0, 0;
                if (!s || !a)return e === i ? -1 : t === i ? 1 : s ? -1 : a ? 1 : L ? rt.call(L, e) - rt.call(L, t) : 0;
                if (s === a)return u(e, t);
                for (n = e; n = n.parentNode;)r.unshift(n);
                for (n = t; n = n.parentNode;)l.unshift(n);
                for (; r[o] === l[o];)o++;
                return o ? u(r[o], l[o]) : r[o] === R ? -1 : l[o] === R ? 1 : 0
            }, i) : B
        }, i.matches = function (e, t) {
            return i(e, null, null, t)
        }, i.matchesSelector = function (e, t) {
            if ((e.ownerDocument || e) !== B && j(e), t = t.replace(vt, "='$1']"), !(!P.matchesSelector || !q || W && W.test(t) || F && F.test(t)))try {
                var n = $.call(e, t);
                if (n || P.disconnectedMatch || e.document && 11 !== e.document.nodeType)return n
            } catch (o) {
            }
            return i(t, B, null, [e]).length > 0
        }, i.contains = function (e, t) {
            return (e.ownerDocument || e) !== B && j(e), M(e, t)
        }, i.attr = function (e, i) {
            (e.ownerDocument || e) !== B && j(e);
            var n = E.attrHandle[i.toLowerCase()], o = n && et.call(E.attrHandle, i.toLowerCase()) ? n(e, i, !q) : t;
            return o === t ? P.attributes || !q ? e.getAttribute(i) : (o = e.getAttributeNode(i)) && o.specified ? o.value : null : o
        }, i.error = function (e) {
            throw Error("Syntax error, unrecognized expression: " + e)
        }, i.uniqueSort = function (e) {
            var t, i = [], n = 0, o = 0;
            if (Z = !P.detectDuplicates, L = !P.sortStable && e.slice(0), e.sort(G), Z) {
                for (; t = e[o++];)t === e[o] && (n = i.push(o));
                for (; n--;)e.splice(i[n], 1)
            }
            return e
        }, A = i.getText = function (e) {
            var t, i = "", n = 0, o = e.nodeType;
            if (o) {
                if (1 === o || 9 === o || 11 === o) {
                    if ("string" == typeof e.textContent)return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling)i += A(e)
                } else if (3 === o || 4 === o)return e.nodeValue
            } else for (; t = e[n]; n++)i += A(t);
            return i
        }, E = i.selectors = {
            cacheLength: 50,
            createPseudo: s,
            match: xt,
            attrHandle: {},
            find: {},
            relative: {
                ">": {dir: "parentNode", first: !0},
                " ": {dir: "parentNode"},
                "+": {dir: "previousSibling", first: !0},
                "~": {dir: "previousSibling"}
            },
            preFilter: {
                ATTR: function (e) {
                    return e[1] = e[1].replace(Pt, Dt), e[3] = (e[4] || e[5] || "").replace(Pt, Dt), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                }, CHILD: function (e) {
                    return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || i.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && i.error(e[0]), e
                }, PSEUDO: function (e) {
                    var i, n = !e[5] && e[2];
                    return xt.CHILD.test(e[0]) ? null : (e[3] && e[4] !== t ? e[2] = e[4] : n && _t.test(n) && (i = m(n, !0)) && (i = n.indexOf(")", n.length - i) - n.length) && (e[0] = e[0].slice(0, i), e[2] = n.slice(0, i)), e.slice(0, 3))
                }
            },
            filter: {
                TAG: function (e) {
                    var t = e.replace(Pt, Dt).toLowerCase();
                    return "*" === e ? function () {
                        return !0
                    } : function (e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t
                    }
                }, CLASS: function (e) {
                    var t = X[e + " "];
                    return t || (t = RegExp("(^|" + ct + ")" + e + "(" + ct + "|$)")) && X(e, function (e) {
                            return t.test("string" == typeof e.className && e.className || typeof e.getAttribute !== Q && e.getAttribute("class") || "")
                        })
                }, ATTR: function (e, t, n) {
                    return function (o) {
                        var s = i.attr(o, e);
                        return null == s ? "!=" === t : t ? (s += "", "=" === t ? s === n : "!=" === t ? s !== n : "^=" === t ? n && 0 === s.indexOf(n) : "*=" === t ? n && s.indexOf(n) > -1 : "$=" === t ? n && s.slice(-n.length) === n : "~=" === t ? (" " + s + " ").indexOf(n) > -1 : "|=" === t ? s === n || s.slice(0, n.length + 1) === n + "-" : !1) : !0
                    }
                }, CHILD: function (e, t, i, n, o) {
                    var s = "nth" !== e.slice(0, 3), a = "last" !== e.slice(-4), r = "of-type" === t;
                    return 1 === n && 0 === o ? function (e) {
                        return !!e.parentNode
                    } : function (t, i, l) {
                        var c, h, u, d, p, f, m = s !== a ? "nextSibling" : "previousSibling", g = t.parentNode, b = r && t.nodeName.toLowerCase(), v = !l && !r;
                        if (g) {
                            if (s) {
                                for (; m;) {
                                    for (u = t; u = u[m];)if (r ? u.nodeName.toLowerCase() === b : 1 === u.nodeType)return !1;
                                    f = m = "only" === e && !f && "nextSibling"
                                }
                                return !0
                            }
                            if (f = [a ? g.firstChild : g.lastChild], a && v) {
                                for (h = g[z] || (g[z] = {}), c = h[e] || [], p = c[0] === U && c[1], d = c[0] === U && c[2], u = p && g.childNodes[p]; u = ++p && u && u[m] || (d = p = 0) || f.pop();)if (1 === u.nodeType && ++d && u === t) {
                                    h[e] = [U, p, d];
                                    break
                                }
                            } else if (v && (c = (t[z] || (t[z] = {}))[e]) && c[0] === U)d = c[1]; else for (; (u = ++p && u && u[m] || (d = p = 0) || f.pop()) && ((r ? u.nodeName.toLowerCase() !== b : 1 !== u.nodeType) || !++d || (v && ((u[z] || (u[z] = {}))[e] = [U, d]), u !== t)););
                            return d -= o, d === n || 0 === d % n && d / n >= 0
                        }
                    }
                }, PSEUDO: function (e, t) {
                    var n, o = E.pseudos[e] || E.setFilters[e.toLowerCase()] || i.error("unsupported pseudo: " + e);
                    return o[z] ? o(t) : o.length > 1 ? (n = [e, e, "", t], E.setFilters.hasOwnProperty(e.toLowerCase()) ? s(function (e, i) {
                        for (var n, s = o(e, t), a = s.length; a--;)n = rt.call(e, s[a]), e[n] = !(i[n] = s[a])
                    }) : function (e) {
                        return o(e, 0, n)
                    }) : o
                }
            },
            pseudos: {
                not: s(function (e) {
                    var t = [], i = [], n = N(e.replace(ft, "$1"));
                    return n[z] ? s(function (e, t, i, o) {
                        for (var s, a = n(e, null, o, []), r = e.length; r--;)(s = a[r]) && (e[r] = !(t[r] = s))
                    }) : function (e, o, s) {
                        return t[0] = e, n(t, null, s, i), !i.pop()
                    }
                }), has: s(function (e) {
                    return function (t) {
                        return i(e, t).length > 0
                    }
                }), contains: s(function (e) {
                    return function (t) {
                        return (t.textContent || t.innerText || A(t)).indexOf(e) > -1
                    }
                }), lang: s(function (e) {
                    return yt.test(e || "") || i.error("unsupported lang: " + e), e = e.replace(Pt, Dt).toLowerCase(), function (t) {
                        var i;
                        do if (i = q ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang"))return i = i.toLowerCase(), i === e || 0 === i.indexOf(e + "-"); while ((t = t.parentNode) && 1 === t.nodeType);
                        return !1
                    }
                }), target: function (t) {
                    var i = e.location && e.location.hash;
                    return i && i.slice(1) === t.id
                }, root: function (e) {
                    return e === H
                }, focus: function (e) {
                    return e === B.activeElement && (!B.hasFocus || B.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                }, enabled: function (e) {
                    return e.disabled === !1
                }, disabled: function (e) {
                    return e.disabled === !0
                }, checked: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected
                }, selected: function (e) {
                    return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
                }, empty: function (e) {
                    for (e = e.firstChild; e; e = e.nextSibling)if (e.nodeName > "@" || 3 === e.nodeType || 4 === e.nodeType)return !1;
                    return !0
                }, parent: function (e) {
                    return !E.pseudos.empty(e)
                }, header: function (e) {
                    return St.test(e.nodeName)
                }, input: function (e) {
                    return Tt.test(e.nodeName)
                }, button: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t
                }, text: function (e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || t.toLowerCase() === e.type)
                }, first: f(function () {
                    return [0]
                }), last: f(function (e, t) {
                    return [t - 1]
                }), eq: f(function (e, t, i) {
                    return [0 > i ? i + t : i]
                }), even: f(function (e, t) {
                    for (var i = 0; t > i; i += 2)e.push(i);
                    return e
                }), odd: f(function (e, t) {
                    for (var i = 1; t > i; i += 2)e.push(i);
                    return e
                }), lt: f(function (e, t, i) {
                    for (var n = 0 > i ? i + t : i; --n >= 0;)e.push(n);
                    return e
                }), gt: f(function (e, t, i) {
                    for (var n = 0 > i ? i + t : i; t > ++n;)e.push(n);
                    return e
                })
            }
        };
        for (k in{radio: !0, checkbox: !0, file: !0, password: !0, image: !0})E.pseudos[k] = d(k);
        for (k in{submit: !0, reset: !0})E.pseudos[k] = p(k);
        N = i.compile = function (e, t) {
            var i, n = [], o = [], s = K[e + " "];
            if (!s) {
                for (t || (t = m(e)), i = t.length; i--;)s = x(t[i]), s[z] ? n.push(s) : o.push(s);
                s = K(e, w(o, n))
            }
            return s
        }, E.pseudos.nth = E.pseudos.eq, S.prototype = E.filters = E.pseudos, E.setFilters = new S, P.sortStable = z.split("").sort(G).join("") === z, j(), [0, 0].sort(G), P.detectDuplicates = Z, st.find = i, st.expr = i.selectors, st.expr[":"] = st.expr.pseudos, st.unique = i.uniqueSort, st.text = i.getText, st.isXMLDoc = i.isXML, st.contains = i.contains
    }(e);
    var ft = {};
    st.Callbacks = function (e) {
        e = "string" == typeof e ? ft[e] || n(e) : st.extend({}, e);
        var i, o, s, a, r, l, c = [], h = !e.once && [], u = function (t) {
            for (i = e.memory && t, o = !0, l = a || 0, a = 0, r = c.length, s = !0; c && r > l; l++)if (c[l].apply(t[0], t[1]) === !1 && e.stopOnFalse) {
                i = !1;
                break
            }
            s = !1, c && (h ? h.length && u(h.shift()) : i ? c = [] : d.disable())
        }, d = {
            add: function () {
                if (c) {
                    var t = c.length;
                    !function n(t) {
                        st.each(t, function (t, i) {
                            var o = st.type(i);
                            "function" === o ? e.unique && d.has(i) || c.push(i) : i && i.length && "string" !== o && n(i)
                        })
                    }(arguments), s ? r = c.length : i && (a = t, u(i))
                }
                return this
            }, remove: function () {
                return c && st.each(arguments, function (e, t) {
                    for (var i; (i = st.inArray(t, c, i)) > -1;)c.splice(i, 1), s && (r >= i && r--, l >= i && l--)
                }), this
            }, has: function (e) {
                return e ? st.inArray(e, c) > -1 : !(!c || !c.length)
            }, empty: function () {
                return c = [], r = 0, this
            }, disable: function () {
                return c = h = i = t, this
            }, disabled: function () {
                return !c
            }, lock: function () {
                return h = t, i || d.disable(), this
            }, locked: function () {
                return !h
            }, fireWith: function (e, t) {
                return t = t || [], t = [e, t.slice ? t.slice() : t], !c || o && !h || (s ? h.push(t) : u(t)), this
            }, fire: function () {
                return d.fireWith(this, arguments), this
            }, fired: function () {
                return !!o
            }
        };
        return d
    }, st.extend({
        Deferred: function (e) {
            var t = [["resolve", "done", st.Callbacks("once memory"), "resolved"], ["reject", "fail", st.Callbacks("once memory"), "rejected"], ["notify", "progress", st.Callbacks("memory")]], i = "pending", n = {
                state: function () {
                    return i
                }, always: function () {
                    return o.done(arguments).fail(arguments), this
                }, then: function () {
                    var e = arguments;
                    return st.Deferred(function (i) {
                        st.each(t, function (t, s) {
                            var a = s[0], r = st.isFunction(e[t]) && e[t];
                            o[s[1]](function () {
                                var e = r && r.apply(this, arguments);
                                e && st.isFunction(e.promise) ? e.promise().done(i.resolve).fail(i.reject).progress(i.notify) : i[a + "With"](this === n ? i.promise() : this, r ? [e] : arguments)
                            })
                        }), e = null
                    }).promise()
                }, promise: function (e) {
                    return null != e ? st.extend(e, n) : n
                }
            }, o = {};
            return n.pipe = n.then, st.each(t, function (e, s) {
                var a = s[2], r = s[3];
                n[s[1]] = a.add, r && a.add(function () {
                    i = r
                }, t[1 ^ e][2].disable, t[2][2].lock), o[s[0]] = function () {
                    return o[s[0] + "With"](this === o ? n : this, arguments), this
                }, o[s[0] + "With"] = a.fireWith
            }), n.promise(o), e && e.call(o, o), o
        }, when: function (e) {
            var t, i, n, o = 0, s = et.call(arguments), a = s.length, r = 1 !== a || e && st.isFunction(e.promise) ? a : 0, l = 1 === r ? e : st.Deferred(), c = function (e, i, n) {
                return function (o) {
                    i[e] = this, n[e] = arguments.length > 1 ? et.call(arguments) : o, n === t ? l.notifyWith(i, n) : --r || l.resolveWith(i, n)
                }
            };
            if (a > 1)for (t = Array(a), i = Array(a), n = Array(a); a > o; o++)s[o] && st.isFunction(s[o].promise) ? s[o].promise().done(c(o, n, s)).fail(l.reject).progress(c(o, i, t)) : --r;
            return r || l.resolveWith(n, s), l.promise()
        }
    }), st.support = function (t) {
        var i = U.createElement("input"), n = U.createDocumentFragment(), o = U.createElement("div"), s = U.createElement("select"), a = s.appendChild(U.createElement("option"));
        return i.type ? (i.type = "checkbox", t.checkOn = "" !== i.value, t.optSelected = a.selected, t.reliableMarginRight = !0, t.boxSizingReliable = !0, t.pixelPosition = !1, i.checked = !0, t.noCloneChecked = i.cloneNode(!0).checked, s.disabled = !0, t.optDisabled = !a.disabled, i = U.createElement("input"), i.value = "t", i.type = "radio", t.radioValue = "t" === i.value, i.setAttribute("checked", "t"), i.setAttribute("name", "t"), n.appendChild(i), t.checkClone = n.cloneNode(!0).cloneNode(!0).lastChild.checked, t.focusinBubbles = "onfocusin"in e, o.style.backgroundClip = "content-box", o.cloneNode(!0).style.backgroundClip = "", t.clearCloneStyle = "content-box" === o.style.backgroundClip, st(function () {
            var i, n, s = "padding:0;margin:0;border:0;display:block;-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box", a = U.getElementsByTagName("body")[0];
            a && (i = U.createElement("div"), i.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px", a.appendChild(i).appendChild(o), o.innerHTML = "", o.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%", st.swap(a, null != a.style.zoom ? {zoom: 1} : {}, function () {
                t.boxSizing = 4 === o.offsetWidth
            }), e.getComputedStyle && (t.pixelPosition = "1%" !== (e.getComputedStyle(o, null) || {}).top, t.boxSizingReliable = "4px" === (e.getComputedStyle(o, null) || {width: "4px"}).width, n = o.appendChild(U.createElement("div")), n.style.cssText = o.style.cssText = s, n.style.marginRight = n.style.width = "0", o.style.width = "1px", t.reliableMarginRight = !parseFloat((e.getComputedStyle(n, null) || {}).marginRight)), a.removeChild(i))
        }), t) : t
    }({});
    var mt, gt, bt = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/, vt = /([A-Z])/g;
    o.uid = 1, o.accepts = function (e) {
        return e.nodeType ? 1 === e.nodeType || 9 === e.nodeType : !0
    }, o.prototype = {
        key: function (e) {
            if (!o.accepts(e))return 0;
            var t = {}, i = e[this.expando];
            if (!i) {
                i = o.uid++;
                try {
                    t[this.expando] = {value: i}, Object.defineProperties(e, t)
                } catch (n) {
                    t[this.expando] = i, st.extend(e, t)
                }
            }
            return this.cache[i] || (this.cache[i] = {}), i
        }, set: function (e, t, i) {
            var n, o = this.key(e), s = this.cache[o];
            if ("string" == typeof t)s[t] = i; else if (st.isEmptyObject(s))st.extend(this.cache[o], t); else for (n in t)s[n] = t[n];
            return s
        }, get: function (e, i) {
            var n = this.cache[this.key(e)];
            return i === t ? n : n[i]
        }, access: function (e, i, n) {
            return i === t || i && "string" == typeof i && n === t ? this.get(e, i) : (this.set(e, i, n), n !== t ? n : i)
        }, remove: function (e, i) {
            var n, o, s, a = this.key(e), r = this.cache[a];
            if (i === t)this.cache[a] = {}; else {
                st.isArray(i) ? o = i.concat(i.map(st.camelCase)) : (s = st.camelCase(i), i in r ? o = [i, s] : (o = s, o = o in r ? [o] : o.match(rt) || [])), n = o.length;
                for (; n--;)delete r[o[n]]
            }
        }, hasData: function (e) {
            return !st.isEmptyObject(this.cache[e[this.expando]] || {})
        }, discard: function (e) {
            e[this.expando] && delete this.cache[e[this.expando]]
        }
    }, mt = new o, gt = new o, st.extend({
        acceptData: o.accepts, hasData: function (e) {
            return mt.hasData(e) || gt.hasData(e)
        }, data: function (e, t, i) {
            return mt.access(e, t, i)
        }, removeData: function (e, t) {
            mt.remove(e, t)
        }, _data: function (e, t, i) {
            return gt.access(e, t, i)
        }, _removeData: function (e, t) {
            gt.remove(e, t)
        }
    }), st.fn.extend({
        data: function (e, i) {
            var n, o, a = this[0], r = 0, l = null;
            if (e === t) {
                if (this.length && (l = mt.get(a), 1 === a.nodeType && !gt.get(a, "hasDataAttrs"))) {
                    for (n = a.attributes; n.length > r; r++)o = n[r].name, 0 === o.indexOf("data-") && (o = st.camelCase(o.slice(5)), s(a, o, l[o]));
                    gt.set(a, "hasDataAttrs", !0)
                }
                return l
            }
            return "object" == typeof e ? this.each(function () {
                mt.set(this, e)
            }) : st.access(this, function (i) {
                var n, o = st.camelCase(e);
                if (a && i === t) {
                    if (n = mt.get(a, e), n !== t)return n;
                    if (n = mt.get(a, o), n !== t)return n;
                    if (n = s(a, o, t), n !== t)return n
                } else this.each(function () {
                    var n = mt.get(this, o);
                    mt.set(this, o, i), -1 !== e.indexOf("-") && n !== t && mt.set(this, e, i)
                })
            }, null, i, arguments.length > 1, null, !0)
        }, removeData: function (e) {
            return this.each(function () {
                mt.remove(this, e)
            })
        }
    }), st.extend({
        queue: function (e, i, n) {
            var o;
            return e ? (i = (i || "fx") + "queue", o = gt.get(e, i), n && (!o || st.isArray(n) ? o = gt.access(e, i, st.makeArray(n)) : o.push(n)), o || []) : t
        }, dequeue: function (e, t) {
            t = t || "fx";
            var i = st.queue(e, t), n = i.length, o = i.shift(), s = st._queueHooks(e, t), a = function () {
                st.dequeue(e, t)
            };
            "inprogress" === o && (o = i.shift(), n--), o && ("fx" === t && i.unshift("inprogress"), delete s.stop, o.call(e, a, s)), !n && s && s.empty.fire()
        }, _queueHooks: function (e, t) {
            var i = t + "queueHooks";
            return gt.get(e, i) || gt.access(e, i, {
                    empty: st.Callbacks("once memory").add(function () {
                        gt.remove(e, [t + "queue", i])
                    })
                })
        }
    }), st.fn.extend({
        queue: function (e, i) {
            var n = 2;
            return "string" != typeof e && (i = e, e = "fx", n--), n > arguments.length ? st.queue(this[0], e) : i === t ? this : this.each(function () {
                var t = st.queue(this, e, i);
                st._queueHooks(this, e), "fx" === e && "inprogress" !== t[0] && st.dequeue(this, e)
            })
        }, dequeue: function (e) {
            return this.each(function () {
                st.dequeue(this, e)
            })
        }, delay: function (e, t) {
            return e = st.fx ? st.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function (t, i) {
                var n = setTimeout(t, e);
                i.stop = function () {
                    clearTimeout(n)
                }
            })
        }, clearQueue: function (e) {
            return this.queue(e || "fx", [])
        }, promise: function (e, i) {
            var n, o = 1, s = st.Deferred(), a = this, r = this.length, l = function () {
                --o || s.resolveWith(a, [a])
            };
            for ("string" != typeof e && (i = e, e = t), e = e || "fx"; r--;)n = gt.get(a[r], e + "queueHooks"), n && n.empty && (o++, n.empty.add(l));
            return l(), s.promise(i)
        }
    });
    var _t, yt, xt = /[\t\r\n\f]/g, wt = /\r/g, Ct = /^(?:input|select|textarea|button)$/i;
    st.fn.extend({
        attr: function (e, t) {
            return st.access(this, st.attr, e, t, arguments.length > 1)
        }, removeAttr: function (e) {
            return this.each(function () {
                st.removeAttr(this, e)
            })
        }, prop: function (e, t) {
            return st.access(this, st.prop, e, t, arguments.length > 1)
        }, removeProp: function (e) {
            return this.each(function () {
                delete this[st.propFix[e] || e]
            })
        }, addClass: function (e) {
            var t, i, n, o, s, a = 0, r = this.length, l = "string" == typeof e && e;
            if (st.isFunction(e))return this.each(function (t) {
                st(this).addClass(e.call(this, t, this.className))
            });
            if (l)for (t = (e || "").match(rt) || []; r > a; a++)if (i = this[a], n = 1 === i.nodeType && (i.className ? (" " + i.className + " ").replace(xt, " ") : " ")) {
                for (s = 0; o = t[s++];)0 > n.indexOf(" " + o + " ") && (n += o + " ");
                i.className = st.trim(n)
            }
            return this
        }, removeClass: function (e) {
            var t, i, n, o, s, a = 0, r = this.length, l = 0 === arguments.length || "string" == typeof e && e;
            if (st.isFunction(e))return this.each(function (t) {
                st(this).removeClass(e.call(this, t, this.className))
            });
            if (l)for (t = (e || "").match(rt) || []; r > a; a++)if (i = this[a], n = 1 === i.nodeType && (i.className ? (" " + i.className + " ").replace(xt, " ") : "")) {
                for (s = 0; o = t[s++];)for (; n.indexOf(" " + o + " ") >= 0;)n = n.replace(" " + o + " ", " ");
                i.className = e ? st.trim(n) : ""
            }
            return this
        }, toggleClass: function (e, t) {
            var i = typeof e, n = "boolean" == typeof t;
            return this.each(st.isFunction(e) ? function (i) {
                st(this).toggleClass(e.call(this, i, this.className, t), t)
            } : function () {
                if ("string" === i)for (var o, s = 0, a = st(this), r = t, l = e.match(rt) || []; o = l[s++];)r = n ? r : !a.hasClass(o), a[r ? "addClass" : "removeClass"](o); else(i === z || "boolean" === i) && (this.className && gt.set(this, "__className__", this.className), this.className = this.className || e === !1 ? "" : gt.get(this, "__className__") || "")
            })
        }, hasClass: function (e) {
            for (var t = " " + e + " ", i = 0, n = this.length; n > i; i++)if (1 === this[i].nodeType && (" " + this[i].className + " ").replace(xt, " ").indexOf(t) >= 0)return !0;
            return !1
        }, val: function (e) {
            var i, n, o, s = this[0];
            return arguments.length ? (o = st.isFunction(e), this.each(function (n) {
                var s;
                1 === this.nodeType && (s = o ? e.call(this, n, st(this).val()) : e, null == s ? s = "" : "number" == typeof s ? s += "" : st.isArray(s) && (s = st.map(s, function (e) {
                    return null == e ? "" : e + ""
                })), i = st.valHooks[this.type] || st.valHooks[this.nodeName.toLowerCase()], i && "set"in i && i.set(this, s, "value") !== t || (this.value = s))
            })) : s ? (i = st.valHooks[s.type] || st.valHooks[s.nodeName.toLowerCase()], i && "get"in i && (n = i.get(s, "value")) !== t ? n : (n = s.value, "string" == typeof n ? n.replace(wt, "") : null == n ? "" : n)) : void 0
        }
    }), st.extend({
        valHooks: {
            option: {
                get: function (e) {
                    var t = e.attributes.value;
                    return !t || t.specified ? e.value : e.text
                }
            }, select: {
                get: function (e) {
                    for (var t, i, n = e.options, o = e.selectedIndex, s = "select-one" === e.type || 0 > o, a = s ? null : [], r = s ? o + 1 : n.length, l = 0 > o ? r : s ? o : 0; r > l; l++)if (i = n[l], !(!i.selected && l !== o || (st.support.optDisabled ? i.disabled : null !== i.getAttribute("disabled")) || i.parentNode.disabled && st.nodeName(i.parentNode, "optgroup"))) {
                        if (t = st(i).val(), s)return t;
                        a.push(t)
                    }
                    return a
                }, set: function (e, t) {
                    for (var i, n, o = e.options, s = st.makeArray(t), a = o.length; a--;)n = o[a], (n.selected = st.inArray(st(n).val(), s) >= 0) && (i = !0);
                    return i || (e.selectedIndex = -1), s
                }
            }
        }, attr: function (e, i, n) {
            var o, s, a = e.nodeType;
            return e && 3 !== a && 8 !== a && 2 !== a ? typeof e.getAttribute === z ? st.prop(e, i, n) : (1 === a && st.isXMLDoc(e) || (i = i.toLowerCase(), o = st.attrHooks[i] || (st.expr.match.bool.test(i) ? yt : _t)), n === t ? o && "get"in o && null !== (s = o.get(e, i)) ? s : (s = st.find.attr(e, i), null == s ? t : s) : null !== n ? o && "set"in o && (s = o.set(e, n, i)) !== t ? s : (e.setAttribute(i, n + ""), n) : (st.removeAttr(e, i), t)) : void 0
        }, removeAttr: function (e, t) {
            var i, n, o = 0, s = t && t.match(rt);
            if (s && 1 === e.nodeType)for (; i = s[o++];)n = st.propFix[i] || i, st.expr.match.bool.test(i) && (e[n] = !1), e.removeAttribute(i)
        }, attrHooks: {
            type: {
                set: function (e, t) {
                    if (!st.support.radioValue && "radio" === t && st.nodeName(e, "input")) {
                        var i = e.value;
                        return e.setAttribute("type", t), i && (e.value = i), t
                    }
                }
            }
        }, propFix: {"for": "htmlFor", "class": "className"}, prop: function (e, i, n) {
            var o, s, a, r = e.nodeType;
            return e && 3 !== r && 8 !== r && 2 !== r ? (a = 1 !== r || !st.isXMLDoc(e), a && (i = st.propFix[i] || i, s = st.propHooks[i]), n !== t ? s && "set"in s && (o = s.set(e, n, i)) !== t ? o : e[i] = n : s && "get"in s && null !== (o = s.get(e, i)) ? o : e[i]) : void 0
        }, propHooks: {
            tabIndex: {
                get: function (e) {
                    return e.hasAttribute("tabindex") || Ct.test(e.nodeName) || e.href ? e.tabIndex : -1
                }
            }
        }
    }), yt = {
        set: function (e, t, i) {
            return t === !1 ? st.removeAttr(e, i) : e.setAttribute(i, i), i
        }
    }, st.each(st.expr.match.bool.source.match(/\w+/g), function (e, i) {
        var n = st.expr.attrHandle[i] || st.find.attr;
        st.expr.attrHandle[i] = function (e, i, o) {
            var s = st.expr.attrHandle[i], a = o ? t : (st.expr.attrHandle[i] = t) != n(e, i, o) ? i.toLowerCase() : null;
            return st.expr.attrHandle[i] = s, a
        }
    }), st.support.optSelected || (st.propHooks.selected = {
        get: function (e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex, null
        }
    }), st.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
        st.propFix[this.toLowerCase()] = this
    }), st.each(["radio", "checkbox"], function () {
        st.valHooks[this] = {
            set: function (e, i) {
                return st.isArray(i) ? e.checked = st.inArray(st(e).val(), i) >= 0 : t
            }
        }, st.support.checkOn || (st.valHooks[this].get = function (e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    });
    var Tt = /^key/, St = /^(?:mouse|contextmenu)|click/, kt = /^(?:focusinfocus|focusoutblur)$/, Pt = /^([^.]*)(?:\.(.+)|)$/;
    st.event = {
        global: {},
        add: function (e, i, n, o, s) {
            var a, r, l, c, h, u, d, p, f, m, g, b = gt.get(e);
            if (b) {
                for (n.handler && (a = n, n = a.handler, s = a.selector), n.guid || (n.guid = st.guid++), (c = b.events) || (c = b.events = {}), (r = b.handle) || (r = b.handle = function (e) {
                    return typeof st === z || e && st.event.triggered === e.type ? t : st.event.dispatch.apply(r.elem, arguments)
                }, r.elem = e), i = (i || "").match(rt) || [""], h = i.length; h--;)l = Pt.exec(i[h]) || [], f = g = l[1], m = (l[2] || "").split(".").sort(), f && (d = st.event.special[f] || {}, f = (s ? d.delegateType : d.bindType) || f, d = st.event.special[f] || {}, u = st.extend({
                    type: f,
                    origType: g,
                    data: o,
                    handler: n,
                    guid: n.guid,
                    selector: s,
                    needsContext: s && st.expr.match.needsContext.test(s),
                    namespace: m.join(".")
                }, a), (p = c[f]) || (p = c[f] = [], p.delegateCount = 0, d.setup && d.setup.call(e, o, m, r) !== !1 || e.addEventListener && e.addEventListener(f, r, !1)), d.add && (d.add.call(e, u), u.handler.guid || (u.handler.guid = n.guid)), s ? p.splice(p.delegateCount++, 0, u) : p.push(u), st.event.global[f] = !0);
                e = null
            }
        },
        remove: function (e, t, i, n, o) {
            var s, a, r, l, c, h, u, d, p, f, m, g = gt.hasData(e) && gt.get(e);
            if (g && (l = g.events)) {
                for (t = (t || "").match(rt) || [""], c = t.length; c--;)if (r = Pt.exec(t[c]) || [], p = m = r[1], f = (r[2] || "").split(".").sort(), p) {
                    for (u = st.event.special[p] || {}, p = (n ? u.delegateType : u.bindType) || p, d = l[p] || [], r = r[2] && RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = s = d.length; s--;)h = d[s], !o && m !== h.origType || i && i.guid !== h.guid || r && !r.test(h.namespace) || n && n !== h.selector && ("**" !== n || !h.selector) || (d.splice(s, 1), h.selector && d.delegateCount--, u.remove && u.remove.call(e, h));
                    a && !d.length && (u.teardown && u.teardown.call(e, f, g.handle) !== !1 || st.removeEvent(e, p, g.handle), delete l[p])
                } else for (p in l)st.event.remove(e, p + t[c], i, n, !0);
                st.isEmptyObject(l) && (delete g.handle, gt.remove(e, "events"))
            }
        },
        trigger: function (i, n, o, s) {
            var a, r, l, c, h, u, d, p = [o || U], f = nt.call(i, "type") ? i.type : i, m = nt.call(i, "namespace") ? i.namespace.split(".") : [];
            if (r = l = o = o || U, 3 !== o.nodeType && 8 !== o.nodeType && !kt.test(f + st.event.triggered) && (f.indexOf(".") >= 0 && (m = f.split("."), f = m.shift(), m.sort()), h = 0 > f.indexOf(":") && "on" + f, i = i[st.expando] ? i : new st.Event(f, "object" == typeof i && i), i.isTrigger = s ? 2 : 3, i.namespace = m.join("."), i.namespace_re = i.namespace ? RegExp("(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, i.result = t, i.target || (i.target = o), n = null == n ? [i] : st.makeArray(n, [i]), d = st.event.special[f] || {}, s || !d.trigger || d.trigger.apply(o, n) !== !1)) {
                if (!s && !d.noBubble && !st.isWindow(o)) {
                    for (c = d.delegateType || f, kt.test(c + f) || (r = r.parentNode); r; r = r.parentNode)p.push(r), l = r;
                    l === (o.ownerDocument || U) && p.push(l.defaultView || l.parentWindow || e)
                }
                for (a = 0; (r = p[a++]) && !i.isPropagationStopped();)i.type = a > 1 ? c : d.bindType || f, u = (gt.get(r, "events") || {})[i.type] && gt.get(r, "handle"), u && u.apply(r, n), u = h && r[h], u && st.acceptData(r) && u.apply && u.apply(r, n) === !1 && i.preventDefault();
                return i.type = f, s || i.isDefaultPrevented() || d._default && d._default.apply(p.pop(), n) !== !1 || !st.acceptData(o) || h && st.isFunction(o[f]) && !st.isWindow(o) && (l = o[h], l && (o[h] = null), st.event.triggered = f, o[f](), st.event.triggered = t, l && (o[h] = l)), i.result
            }
        },
        dispatch: function (e) {
            e = st.event.fix(e);
            var i, n, o, s, a, r = [], l = et.call(arguments), c = (gt.get(this, "events") || {})[e.type] || [], h = st.event.special[e.type] || {};
            if (l[0] = e, e.delegateTarget = this, !h.preDispatch || h.preDispatch.call(this, e) !== !1) {
                for (r = st.event.handlers.call(this, e, c), i = 0; (s = r[i++]) && !e.isPropagationStopped();)for (e.currentTarget = s.elem, n = 0; (a = s.handlers[n++]) && !e.isImmediatePropagationStopped();)(!e.namespace_re || e.namespace_re.test(a.namespace)) && (e.handleObj = a, e.data = a.data, o = ((st.event.special[a.origType] || {}).handle || a.handler).apply(s.elem, l), o !== t && (e.result = o) === !1 && (e.preventDefault(), e.stopPropagation()));
                return h.postDispatch && h.postDispatch.call(this, e), e.result
            }
        },
        handlers: function (e, i) {
            var n, o, s, a, r = [], l = i.delegateCount, c = e.target;
            if (l && c.nodeType && (!e.button || "click" !== e.type))for (; c !== this; c = c.parentNode || this)if (c.disabled !== !0 || "click" !== e.type) {
                for (o = [], n = 0; l > n; n++)a = i[n], s = a.selector + " ", o[s] === t && (o[s] = a.needsContext ? st(s, this).index(c) >= 0 : st.find(s, this, null, [c]).length), o[s] && o.push(a);
                o.length && r.push({elem: c, handlers: o})
            }
            return i.length > l && r.push({elem: this, handlers: i.slice(l)}), r
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "), filter: function (e, t) {
                return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function (e, i) {
                var n, o, s, a = i.button;
                return null == e.pageX && null != i.clientX && (n = e.target.ownerDocument || U, o = n.documentElement, s = n.body, e.pageX = i.clientX + (o && o.scrollLeft || s && s.scrollLeft || 0) - (o && o.clientLeft || s && s.clientLeft || 0), e.pageY = i.clientY + (o && o.scrollTop || s && s.scrollTop || 0) - (o && o.clientTop || s && s.clientTop || 0)), e.which || a === t || (e.which = 1 & a ? 1 : 2 & a ? 3 : 4 & a ? 2 : 0), e
            }
        },
        fix: function (e) {
            if (e[st.expando])return e;
            var t, i, n, o = e.type, s = e, a = this.fixHooks[o];
            for (a || (this.fixHooks[o] = a = St.test(o) ? this.mouseHooks : Tt.test(o) ? this.keyHooks : {}), n = a.props ? this.props.concat(a.props) : this.props, e = new st.Event(s), t = n.length; t--;)i = n[t], e[i] = s[i];
            return e.target || (e.target = U), 3 === e.target.nodeType && (e.target = e.target.parentNode), a.filter ? a.filter(e, s) : e
        },
        special: {
            load: {noBubble: !0}, focus: {
                trigger: function () {
                    return this !== l() && this.focus ? (this.focus(), !1) : t
                }, delegateType: "focusin"
            }, blur: {
                trigger: function () {
                    return this === l() && this.blur ? (this.blur(), !1) : t
                }, delegateType: "focusout"
            }, click: {
                trigger: function () {
                    return "checkbox" === this.type && this.click && st.nodeName(this, "input") ? (this.click(), !1) : t
                }, _default: function (e) {
                    return st.nodeName(e.target, "a")
                }
            }, beforeunload: {
                postDispatch: function (e) {
                    e.result !== t && (e.originalEvent.returnValue = e.result)
                }
            }
        },
        simulate: function (e, t, i, n) {
            var o = st.extend(new st.Event, i, {type: e, isSimulated: !0, originalEvent: {}});
            n ? st.event.trigger(o, null, t) : st.event.dispatch.call(t, o), o.isDefaultPrevented() && i.preventDefault()
        }
    }, st.removeEvent = function (e, t, i) {
        e.removeEventListener && e.removeEventListener(t, i, !1)
    }, st.Event = function (e, i) {
        return this instanceof st.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || e.getPreventDefault && e.getPreventDefault() ? a : r) : this.type = e, i && st.extend(this, i), this.timeStamp = e && e.timeStamp || st.now(), this[st.expando] = !0, t) : new st.Event(e, i)
    }, st.Event.prototype = {
        isDefaultPrevented: r,
        isPropagationStopped: r,
        isImmediatePropagationStopped: r,
        preventDefault: function () {
            var e = this.originalEvent;
            this.isDefaultPrevented = a, e && e.preventDefault && e.preventDefault()
        },
        stopPropagation: function () {
            var e = this.originalEvent;
            this.isPropagationStopped = a, e && e.stopPropagation && e.stopPropagation()
        },
        stopImmediatePropagation: function () {
            this.isImmediatePropagationStopped = a, this.stopPropagation()
        }
    }, st.each({mouseenter: "mouseover", mouseleave: "mouseout"}, function (e, t) {
        st.event.special[e] = {
            delegateType: t, bindType: t, handle: function (e) {
                var i, n = this, o = e.relatedTarget, s = e.handleObj;
                return (!o || o !== n && !st.contains(n, o)) && (e.type = s.origType, i = s.handler.apply(this, arguments), e.type = t), i
            }
        }
    }), st.support.focusinBubbles || st.each({focus: "focusin", blur: "focusout"}, function (e, t) {
        var i = 0, n = function (e) {
            st.event.simulate(t, e.target, st.event.fix(e), !0)
        };
        st.event.special[t] = {
            setup: function () {
                0 === i++ && U.addEventListener(e, n, !0)
            }, teardown: function () {
                0 === --i && U.removeEventListener(e, n, !0)
            }
        }
    }), st.fn.extend({
        on: function (e, i, n, o, s) {
            var a, l;
            if ("object" == typeof e) {
                "string" != typeof i && (n = n || i, i = t);
                for (l in e)this.on(l, i, n, e[l], s);
                return this
            }
            if (null == n && null == o ? (o = i, n = i = t) : null == o && ("string" == typeof i ? (o = n, n = t) : (o = n, n = i, i = t)), o === !1)o = r; else if (!o)return this;
            return 1 === s && (a = o, o = function (e) {
                return st().off(e), a.apply(this, arguments)
            }, o.guid = a.guid || (a.guid = st.guid++)), this.each(function () {
                st.event.add(this, e, o, n, i)
            })
        }, one: function (e, t, i, n) {
            return this.on(e, t, i, n, 1)
        }, off: function (e, i, n) {
            var o, s;
            if (e && e.preventDefault && e.handleObj)return o = e.handleObj, st(e.delegateTarget).off(o.namespace ? o.origType + "." + o.namespace : o.origType, o.selector, o.handler), this;
            if ("object" == typeof e) {
                for (s in e)this.off(s, i, e[s]);
                return this
            }
            return (i === !1 || "function" == typeof i) && (n = i, i = t), n === !1 && (n = r), this.each(function () {
                st.event.remove(this, e, n, i)
            })
        }, trigger: function (e, t) {
            return this.each(function () {
                st.event.trigger(e, t, this)
            })
        }, triggerHandler: function (e, i) {
            var n = this[0];
            return n ? st.event.trigger(e, i, n, !0) : t
        }
    });
    var Dt = /^.[^:#\[\.,]*$/, Et = /^(?:parents|prev(?:Until|All))/, At = st.expr.match.needsContext, It = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    st.fn.extend({
        find: function (e) {
            var t, i = [], n = this, o = n.length;
            if ("string" != typeof e)return this.pushStack(st(e).filter(function () {
                for (t = 0; o > t; t++)if (st.contains(n[t], this))return !0
            }));
            for (t = 0; o > t; t++)st.find(e, n[t], i);
            return i = this.pushStack(o > 1 ? st.unique(i) : i), i.selector = this.selector ? this.selector + " " + e : e, i
        }, has: function (e) {
            var t = st(e, this), i = t.length;
            return this.filter(function () {
                for (var e = 0; i > e; e++)if (st.contains(this, t[e]))return !0
            })
        }, not: function (e) {
            return this.pushStack(h(this, e || [], !0))
        }, filter: function (e) {
            return this.pushStack(h(this, e || [], !1))
        }, is: function (e) {
            return !!h(this, "string" == typeof e && At.test(e) ? st(e) : e || [], !1).length
        }, closest: function (e, t) {
            for (var i, n = 0, o = this.length, s = [], a = At.test(e) || "string" != typeof e ? st(e, t || this.context) : 0; o > n; n++)for (i = this[n]; i && i !== t; i = i.parentNode)if (11 > i.nodeType && (a ? a.index(i) > -1 : 1 === i.nodeType && st.find.matchesSelector(i, e))) {
                i = s.push(i);
                break
            }
            return this.pushStack(s.length > 1 ? st.unique(s) : s)
        }, index: function (e) {
            return e ? "string" == typeof e ? tt.call(st(e), this[0]) : tt.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        }, add: function (e, t) {
            var i = "string" == typeof e ? st(e, t) : st.makeArray(e && e.nodeType ? [e] : e), n = st.merge(this.get(), i);
            return this.pushStack(st.unique(n))
        }, addBack: function (e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }), st.each({
        parent: function (e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        }, parents: function (e) {
            return st.dir(e, "parentNode")
        }, parentsUntil: function (e, t, i) {
            return st.dir(e, "parentNode", i)
        }, next: function (e) {
            return c(e, "nextSibling")
        }, prev: function (e) {
            return c(e, "previousSibling")
        }, nextAll: function (e) {
            return st.dir(e, "nextSibling")
        }, prevAll: function (e) {
            return st.dir(e, "previousSibling")
        }, nextUntil: function (e, t, i) {
            return st.dir(e, "nextSibling", i)
        }, prevUntil: function (e, t, i) {
            return st.dir(e, "previousSibling", i)
        }, siblings: function (e) {
            return st.sibling((e.parentNode || {}).firstChild, e)
        }, children: function (e) {
            return st.sibling(e.firstChild)
        }, contents: function (e) {
            return e.contentDocument || st.merge([], e.childNodes)
        }
    }, function (e, t) {
        st.fn[e] = function (i, n) {
            var o = st.map(this, t, i);
            return "Until" !== e.slice(-5) && (n = i), n && "string" == typeof n && (o = st.filter(n, o)), this.length > 1 && (It[e] || st.unique(o), Et.test(e) && o.reverse()), this.pushStack(o)
        }
    }), st.extend({
        filter: function (e, t, i) {
            var n = t[0];
            return i && (e = ":not(" + e + ")"), 1 === t.length && 1 === n.nodeType ? st.find.matchesSelector(n, e) ? [n] : [] : st.find.matches(e, st.grep(t, function (e) {
                return 1 === e.nodeType
            }))
        }, dir: function (e, i, n) {
            for (var o = [], s = n !== t; (e = e[i]) && 9 !== e.nodeType;)if (1 === e.nodeType) {
                if (s && st(e).is(n))break;
                o.push(e)
            }
            return o
        }, sibling: function (e, t) {
            for (var i = []; e; e = e.nextSibling)1 === e.nodeType && e !== t && i.push(e);
            return i
        }
    });
    var Nt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, Ot = /<([\w:]+)/, Lt = /<|&#?\w+;/, jt = /<(?:script|style|link)/i, Bt = /^(?:checkbox|radio)$/i, Ht = /checked\s*(?:[^=]|=\s*.checked.)/i, qt = /^$|\/(?:java|ecma)script/i, Ft = /^true\/(.*)/, Wt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, $t = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""]
    };
    $t.optgroup = $t.option, $t.tbody = $t.tfoot = $t.colgroup = $t.caption = $t.thead, $t.th = $t.td, st.fn.extend({
        text: function (e) {
            return st.access(this, function (e) {
                return e === t ? st.text(this) : this.empty().append((this[0] && this[0].ownerDocument || U).createTextNode(e))
            }, null, e, arguments.length)
        }, append: function () {
            return this.domManip(arguments, function (e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = u(this, e);
                    t.appendChild(e)
                }
            })
        }, prepend: function () {
            return this.domManip(arguments, function (e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = u(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        }, before: function () {
            return this.domManip(arguments, function (e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        }, after: function () {
            return this.domManip(arguments, function (e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        }, remove: function (e, t) {
            for (var i, n = e ? st.filter(e, this) : this, o = 0; null != (i = n[o]); o++)t || 1 !== i.nodeType || st.cleanData(g(i)), i.parentNode && (t && st.contains(i.ownerDocument, i) && f(g(i, "script")), i.parentNode.removeChild(i));
            return this
        }, empty: function () {
            for (var e, t = 0; null != (e = this[t]); t++)1 === e.nodeType && (st.cleanData(g(e, !1)), e.textContent = "");
            return this
        }, clone: function (e, t) {
            return e = null == e ? !1 : e, t = null == t ? e : t, this.map(function () {
                return st.clone(this, e, t)
            })
        }, html: function (e) {
            return st.access(this, function (e) {
                var i = this[0] || {}, n = 0, o = this.length;
                if (e === t && 1 === i.nodeType)return i.innerHTML;
                if ("string" == typeof e && !jt.test(e) && !$t[(Ot.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = e.replace(Nt, "<$1></$2>");
                    try {
                        for (; o > n; n++)i = this[n] || {}, 1 === i.nodeType && (st.cleanData(g(i, !1)), i.innerHTML = e);
                        i = 0
                    } catch (s) {
                    }
                }
                i && this.empty().append(e)
            }, null, e, arguments.length)
        }, replaceWith: function () {
            var e = st.map(this, function (e) {
                return [e.nextSibling, e.parentNode]
            }), t = 0;
            return this.domManip(arguments, function (i) {
                var n = e[t++], o = e[t++];
                o && (n && n.parentNode !== o && (n = this.nextSibling), st(this).remove(), o.insertBefore(i, n))
            }, !0), t ? this : this.remove()
        }, detach: function (e) {
            return this.remove(e, !0)
        }, domManip: function (e, t, i) {
            e = Q.apply([], e);
            var n, o, s, a, r, l, c = 0, h = this.length, u = this, f = h - 1, m = e[0], b = st.isFunction(m);
            if (b || !(1 >= h || "string" != typeof m || st.support.checkClone) && Ht.test(m))return this.each(function (n) {
                var o = u.eq(n);
                b && (e[0] = m.call(this, n, o.html())), o.domManip(e, t, i)
            });
            if (h && (n = st.buildFragment(e, this[0].ownerDocument, !1, !i && this), o = n.firstChild, 1 === n.childNodes.length && (n = o), o)) {
                for (s = st.map(g(n, "script"), d), a = s.length; h > c; c++)r = n, c !== f && (r = st.clone(r, !0, !0), a && st.merge(s, g(r, "script"))), t.call(this[c], r, c);
                if (a)for (l = s[s.length - 1].ownerDocument, st.map(s, p), c = 0; a > c; c++)r = s[c], qt.test(r.type || "") && !gt.access(r, "globalEval") && st.contains(l, r) && (r.src ? st._evalUrl(r.src) : st.globalEval(r.textContent.replace(Wt, "")))
            }
            return this
        }
    }), st.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function (e, t) {
        st.fn[e] = function (e) {
            for (var i, n = [], o = st(e), s = o.length - 1, a = 0; s >= a; a++)i = a === s ? this : this.clone(!0), st(o[a])[t](i), J.apply(n, i.get());
            return this.pushStack(n)
        }
    }), st.extend({
        clone: function (e, t, i) {
            var n, o, s, a, r = e.cloneNode(!0), l = st.contains(e.ownerDocument, e);
            if (!(st.support.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || st.isXMLDoc(e)))for (a = g(r), s = g(e), n = 0, o = s.length; o > n; n++)b(s[n], a[n]);
            if (t)if (i)for (s = s || g(e), a = a || g(r), n = 0, o = s.length; o > n; n++)m(s[n], a[n]); else m(e, r);
            return a = g(r, "script"), a.length > 0 && f(a, !l && g(e, "script")), r
        }, buildFragment: function (e, t, i, n) {
            for (var o, s, a, r, l, c, h = 0, u = e.length, d = t.createDocumentFragment(), p = []; u > h; h++)if (o = e[h], o || 0 === o)if ("object" === st.type(o))st.merge(p, o.nodeType ? [o] : o); else if (Lt.test(o)) {
                for (s = s || d.appendChild(t.createElement("div")), a = (Ot.exec(o) || ["", ""])[1].toLowerCase(), r = $t[a] || $t._default, s.innerHTML = r[1] + o.replace(Nt, "<$1></$2>") + r[2], c = r[0]; c--;)s = s.firstChild;
                st.merge(p, s.childNodes), s = d.firstChild, s.textContent = ""
            } else p.push(t.createTextNode(o));
            for (d.textContent = "", h = 0; o = p[h++];)if ((!n || -1 === st.inArray(o, n)) && (l = st.contains(o.ownerDocument, o), s = g(d.appendChild(o), "script"), l && f(s), i))for (c = 0; o = s[c++];)qt.test(o.type || "") && i.push(o);
            return d
        }, cleanData: function (e) {
            for (var i, n, s, a, r, l, c = st.event.special, h = 0; (n = e[h]) !== t; h++) {
                if (o.accepts(n) && (r = n[gt.expando], r && (i = gt.cache[r]))) {
                    if (s = Object.keys(i.events || {}), s.length)for (l = 0; (a = s[l]) !== t; l++)c[a] ? st.event.remove(n, a) : st.removeEvent(n, a, i.handle);
                    gt.cache[r] && delete gt.cache[r]
                }
                delete mt.cache[n[mt.expando]]
            }
        }, _evalUrl: function (e) {
            return st.ajax({url: e, type: "GET", dataType: "script", async: !1, global: !1, "throws": !0})
        }
    }), st.fn.extend({
        wrapAll: function (e) {
            var t;
            return st.isFunction(e) ? this.each(function (t) {
                st(this).wrapAll(e.call(this, t))
            }) : (this[0] && (t = st(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
                for (var e = this; e.firstElementChild;)e = e.firstElementChild;
                return e
            }).append(this)), this)
        }, wrapInner: function (e) {
            return this.each(st.isFunction(e) ? function (t) {
                st(this).wrapInner(e.call(this, t))
            } : function () {
                var t = st(this), i = t.contents();
                i.length ? i.wrapAll(e) : t.append(e)
            })
        }, wrap: function (e) {
            var t = st.isFunction(e);
            return this.each(function (i) {
                st(this).wrapAll(t ? e.call(this, i) : e)
            })
        }, unwrap: function () {
            return this.parent().each(function () {
                st.nodeName(this, "body") || st(this).replaceWith(this.childNodes)
            }).end()
        }
    });
    var Mt, zt, Rt = /^(none|table(?!-c[ea]).+)/, Ut = /^margin/, Yt = RegExp("^(" + at + ")(.*)$", "i"), Xt = RegExp("^(" + at + ")(?!px)[a-z%]+$", "i"), Vt = RegExp("^([+-])=(" + at + ")", "i"), Kt = {BODY: "block"}, Zt = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }, Gt = {
        letterSpacing: 0,
        fontWeight: 400
    }, Qt = ["Top", "Right", "Bottom", "Left"], Jt = ["Webkit", "O", "Moz", "ms"];
    st.fn.extend({
        css: function (e, i) {
            return st.access(this, function (e, i, n) {
                var o, s, a = {}, r = 0;
                if (st.isArray(i)) {
                    for (o = y(e), s = i.length; s > r; r++)a[i[r]] = st.css(e, i[r], !1, o);
                    return a
                }
                return n !== t ? st.style(e, i, n) : st.css(e, i)
            }, e, i, arguments.length > 1)
        }, show: function () {
            return x(this, !0)
        }, hide: function () {
            return x(this)
        }, toggle: function (e) {
            var t = "boolean" == typeof e;
            return this.each(function () {
                (t ? e : _(this)) ? st(this).show() : st(this).hide()
            })
        }
    }), st.extend({
        cssHooks: {
            opacity: {
                get: function (e, t) {
                    if (t) {
                        var i = Mt(e, "opacity");
                        return "" === i ? "1" : i
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {"float": "cssFloat"},
        style: function (e, i, n, o) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var s, a, r, l = st.camelCase(i), c = e.style;
                return i = st.cssProps[l] || (st.cssProps[l] = v(c, l)), r = st.cssHooks[i] || st.cssHooks[l], n === t ? r && "get"in r && (s = r.get(e, !1, o)) !== t ? s : c[i] : (a = typeof n, "string" === a && (s = Vt.exec(n)) && (n = (s[1] + 1) * s[2] + parseFloat(st.css(e, i)), a = "number"), null == n || "number" === a && isNaN(n) || ("number" !== a || st.cssNumber[l] || (n += "px"), st.support.clearCloneStyle || "" !== n || 0 !== i.indexOf("background") || (c[i] = "inherit"), r && "set"in r && (n = r.set(e, n, o)) === t || (c[i] = n)), t)
            }
        },
        css: function (e, i, n, o) {
            var s, a, r, l = st.camelCase(i);
            return i = st.cssProps[l] || (st.cssProps[l] = v(e.style, l)), r = st.cssHooks[i] || st.cssHooks[l], r && "get"in r && (s = r.get(e, !0, n)), s === t && (s = Mt(e, i, o)), "normal" === s && i in Gt && (s = Gt[i]), "" === n || n ? (a = parseFloat(s), n === !0 || st.isNumeric(a) ? a || 0 : s) : s
        }
    }), Mt = function (e, i, n) {
        var o, s, a, r = n || y(e), l = r ? r.getPropertyValue(i) || r[i] : t, c = e.style;
        return r && ("" !== l || st.contains(e.ownerDocument, e) || (l = st.style(e, i)), Xt.test(l) && Ut.test(i) && (o = c.width, s = c.minWidth, a = c.maxWidth, c.minWidth = c.maxWidth = c.width = l, l = r.width, c.width = o, c.minWidth = s, c.maxWidth = a)), l
    }, st.each(["height", "width"], function (e, i) {
        st.cssHooks[i] = {
            get: function (e, n, o) {
                return n ? 0 === e.offsetWidth && Rt.test(st.css(e, "display")) ? st.swap(e, Zt, function () {
                    return T(e, i, o)
                }) : T(e, i, o) : t
            }, set: function (e, t, n) {
                var o = n && y(e);
                return w(e, t, n ? C(e, i, n, st.support.boxSizing && "border-box" === st.css(e, "boxSizing", !1, o), o) : 0)
            }
        }
    }), st(function () {
        st.support.reliableMarginRight || (st.cssHooks.marginRight = {
            get: function (e, i) {
                return i ? st.swap(e, {display: "inline-block"}, Mt, [e, "marginRight"]) : t
            }
        }), !st.support.pixelPosition && st.fn.position && st.each(["top", "left"], function (e, i) {
            st.cssHooks[i] = {
                get: function (e, n) {
                    return n ? (n = Mt(e, i), Xt.test(n) ? st(e).position()[i] + "px" : n) : t
                }
            }
        })
    }), st.expr && st.expr.filters && (st.expr.filters.hidden = function (e) {
        return 0 >= e.offsetWidth && 0 >= e.offsetHeight
    }, st.expr.filters.visible = function (e) {
        return !st.expr.filters.hidden(e)
    }), st.each({margin: "", padding: "", border: "Width"}, function (e, t) {
        st.cssHooks[e + t] = {
            expand: function (i) {
                for (var n = 0, o = {}, s = "string" == typeof i ? i.split(" ") : [i]; 4 > n; n++)o[e + Qt[n] + t] = s[n] || s[n - 2] || s[0];
                return o
            }
        }, Ut.test(e) || (st.cssHooks[e + t].set = w)
    });
    var ei = /%20/g, ti = /\[\]$/, ii = /\r?\n/g, ni = /^(?:submit|button|image|reset|file)$/i, oi = /^(?:input|select|textarea|keygen)/i;
    st.fn.extend({
        serialize: function () {
            return st.param(this.serializeArray())
        }, serializeArray: function () {
            return this.map(function () {
                var e = st.prop(this, "elements");
                return e ? st.makeArray(e) : this
            }).filter(function () {
                var e = this.type;
                return this.name && !st(this).is(":disabled") && oi.test(this.nodeName) && !ni.test(e) && (this.checked || !Bt.test(e))
            }).map(function (e, t) {
                var i = st(this).val();
                return null == i ? null : st.isArray(i) ? st.map(i, function (e) {
                    return {name: t.name, value: e.replace(ii, "\r\n")}
                }) : {name: t.name, value: i.replace(ii, "\r\n")}
            }).get()
        }
    }), st.param = function (e, i) {
        var n, o = [], s = function (e, t) {
            t = st.isFunction(t) ? t() : null == t ? "" : t, o[o.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
        };
        if (i === t && (i = st.ajaxSettings && st.ajaxSettings.traditional), st.isArray(e) || e.jquery && !st.isPlainObject(e))st.each(e, function () {
            s(this.name, this.value)
        }); else for (n in e)P(n, e[n], i, s);
        return o.join("&").replace(ei, "+")
    }, st.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (e, t) {
        st.fn[t] = function (e, i) {
            return arguments.length > 0 ? this.on(t, null, e, i) : this.trigger(t)
        }
    }), st.fn.extend({
        hover: function (e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }, bind: function (e, t, i) {
            return this.on(e, null, t, i)
        }, unbind: function (e, t) {
            return this.off(e, null, t)
        }, delegate: function (e, t, i, n) {
            return this.on(t, e, i, n)
        }, undelegate: function (e, t, i) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", i)
        }
    });
    var si, ai, ri = st.now(), li = /\?/, ci = /#.*$/, hi = /([?&])_=[^&]*/, ui = /^(.*?):[ \t]*([^\r\n]*)$/gm, di = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, pi = /^(?:GET|HEAD)$/, fi = /^\/\//, mi = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/, gi = st.fn.load, bi = {}, vi = {}, _i = "*/".concat("*");
    try {
        ai = R.href
    } catch (yi) {
        ai = U.createElement("a"), ai.href = "", ai = ai.href
    }
    si = mi.exec(ai.toLowerCase()) || [], st.fn.load = function (e, i, n) {
        if ("string" != typeof e && gi)return gi.apply(this, arguments);
        var o, s, a, r = this, l = e.indexOf(" ");
        return l >= 0 && (o = e.slice(l), e = e.slice(0, l)), st.isFunction(i) ? (n = i, i = t) : i && "object" == typeof i && (s = "POST"), r.length > 0 && st.ajax({
            url: e,
            type: s,
            dataType: "html",
            data: i
        }).done(function (e) {
            a = arguments, r.html(o ? st("<div>").append(st.parseHTML(e)).find(o) : e)
        }).complete(n && function (e, t) {
                r.each(n, a || [e.responseText, t, e])
            }), this
    }, st.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
        st.fn[t] = function (e) {
            return this.on(t, e)
        }
    }), st.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: ai,
            type: "GET",
            isLocal: di.test(si[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": _i,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {xml: /xml/, html: /html/, json: /json/},
            responseFields: {xml: "responseXML", text: "responseText", json: "responseJSON"},
            converters: {"* text": String, "text html": !0, "text json": st.parseJSON, "text xml": st.parseXML},
            flatOptions: {url: !0, context: !0}
        },
        ajaxSetup: function (e, t) {
            return t ? A(A(e, st.ajaxSettings), t) : A(st.ajaxSettings, e)
        },
        ajaxPrefilter: D(bi),
        ajaxTransport: D(vi),
        ajax: function (e, i) {
            function n(e, i, n, r) {
                var c, u, v, _, x, C = i;
                2 !== y && (y = 2, l && clearTimeout(l), o = t, a = r || "", w.readyState = e > 0 ? 4 : 0, c = e >= 200 && 300 > e || 304 === e, n && (_ = I(d, w, n)), _ = N(d, _, w, c), c ? (d.ifModified && (x = w.getResponseHeader("Last-Modified"), x && (st.lastModified[s] = x), x = w.getResponseHeader("etag"), x && (st.etag[s] = x)), 204 === e || "HEAD" === d.type ? C = "nocontent" : 304 === e ? C = "notmodified" : (C = _.state, u = _.data, v = _.error, c = !v)) : (v = C, (e || !C) && (C = "error", 0 > e && (e = 0))), w.status = e, w.statusText = (i || C) + "", c ? m.resolveWith(p, [u, C, w]) : m.rejectWith(p, [w, C, v]), w.statusCode(b), b = t, h && f.trigger(c ? "ajaxSuccess" : "ajaxError", [w, d, c ? u : v]), g.fireWith(p, [w, C]), h && (f.trigger("ajaxComplete", [w, d]), --st.active || st.event.trigger("ajaxStop")))
            }

            "object" == typeof e && (i = e, e = t), i = i || {};
            var o, s, a, r, l, c, h, u, d = st.ajaxSetup({}, i), p = d.context || d, f = d.context && (p.nodeType || p.jquery) ? st(p) : st.event, m = st.Deferred(), g = st.Callbacks("once memory"), b = d.statusCode || {}, v = {}, _ = {}, y = 0, x = "canceled", w = {
                readyState: 0,
                getResponseHeader: function (e) {
                    var t;
                    if (2 === y) {
                        if (!r)for (r = {}; t = ui.exec(a);)r[t[1].toLowerCase()] = t[2];
                        t = r[e.toLowerCase()]
                    }
                    return null == t ? null : t
                },
                getAllResponseHeaders: function () {
                    return 2 === y ? a : null
                },
                setRequestHeader: function (e, t) {
                    var i = e.toLowerCase();
                    return y || (e = _[i] = _[i] || e, v[e] = t), this
                },
                overrideMimeType: function (e) {
                    return y || (d.mimeType = e), this
                },
                statusCode: function (e) {
                    var t;
                    if (e)if (2 > y)for (t in e)b[t] = [b[t], e[t]]; else w.always(e[w.status]);
                    return this
                },
                abort: function (e) {
                    var t = e || x;
                    return o && o.abort(t), n(0, t), this
                }
            };
            if (m.promise(w).complete = g.add, w.success = w.done, w.error = w.fail, d.url = ((e || d.url || ai) + "").replace(ci, "").replace(fi, si[1] + "//"), d.type = i.method || i.type || d.method || d.type, d.dataTypes = st.trim(d.dataType || "*").toLowerCase().match(rt) || [""], null == d.crossDomain && (c = mi.exec(d.url.toLowerCase()), d.crossDomain = !(!c || c[1] === si[1] && c[2] === si[2] && (c[3] || ("http:" === c[1] ? "80" : "443")) === (si[3] || ("http:" === si[1] ? "80" : "443")))), d.data && d.processData && "string" != typeof d.data && (d.data = st.param(d.data, d.traditional)), E(bi, d, i, w), 2 === y)return w;
            h = d.global, h && 0 === st.active++ && st.event.trigger("ajaxStart"), d.type = d.type.toUpperCase(), d.hasContent = !pi.test(d.type), s = d.url, d.hasContent || (d.data && (s = d.url += (li.test(s) ? "&" : "?") + d.data, delete d.data), d.cache === !1 && (d.url = hi.test(s) ? s.replace(hi, "$1_=" + ri++) : s + (li.test(s) ? "&" : "?") + "_=" + ri++)), d.ifModified && (st.lastModified[s] && w.setRequestHeader("If-Modified-Since", st.lastModified[s]), st.etag[s] && w.setRequestHeader("If-None-Match", st.etag[s])), (d.data && d.hasContent && d.contentType !== !1 || i.contentType) && w.setRequestHeader("Content-Type", d.contentType), w.setRequestHeader("Accept", d.dataTypes[0] && d.accepts[d.dataTypes[0]] ? d.accepts[d.dataTypes[0]] + ("*" !== d.dataTypes[0] ? ", " + _i + "; q=0.01" : "") : d.accepts["*"]);
            for (u in d.headers)w.setRequestHeader(u, d.headers[u]);
            if (d.beforeSend && (d.beforeSend.call(p, w, d) === !1 || 2 === y))return w.abort();
            x = "abort";
            for (u in{success: 1, error: 1, complete: 1})w[u](d[u]);
            if (o = E(vi, d, i, w)) {
                w.readyState = 1, h && f.trigger("ajaxSend", [w, d]), d.async && d.timeout > 0 && (l = setTimeout(function () {
                    w.abort("timeout")
                }, d.timeout));
                try {
                    y = 1, o.send(v, n)
                } catch (C) {
                    if (!(2 > y))throw C;
                    n(-1, C)
                }
            } else n(-1, "No Transport");
            return w
        },
        getJSON: function (e, t, i) {
            return st.get(e, t, i, "json")
        },
        getScript: function (e, i) {
            return st.get(e, t, i, "script")
        }
    }), st.each(["get", "post"], function (e, i) {
        st[i] = function (e, n, o, s) {
            return st.isFunction(n) && (s = s || o, o = n, n = t), st.ajax({
                url: e,
                type: i,
                dataType: s,
                data: n,
                success: o
            })
        }
    }), st.ajaxSetup({
        accepts: {script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},
        contents: {script: /(?:java|ecma)script/},
        converters: {
            "text script": function (e) {
                return st.globalEval(e), e
            }
        }
    }), st.ajaxPrefilter("script", function (e) {
        e.cache === t && (e.cache = !1), e.crossDomain && (e.type = "GET")
    }), st.ajaxTransport("script", function (e) {
        if (e.crossDomain) {
            var t, i;
            return {
                send: function (n, o) {
                    t = st("<script>").prop({
                        async: !0,
                        charset: e.scriptCharset,
                        src: e.url
                    }).on("load error", i = function (e) {
                        t.remove(), i = null, e && o("error" === e.type ? 404 : 200, e.type)
                    }), U.head.appendChild(t[0])
                }, abort: function () {
                    i && i()
                }
            }
        }
    });
    var xi = [], wi = /(=)\?(?=&|$)|\?\?/;
    st.ajaxSetup({
        jsonp: "callback", jsonpCallback: function () {
            var e = xi.pop() || st.expando + "_" + ri++;
            return this[e] = !0, e
        }
    }), st.ajaxPrefilter("json jsonp", function (i, n, o) {
        var s, a, r, l = i.jsonp !== !1 && (wi.test(i.url) ? "url" : "string" == typeof i.data && !(i.contentType || "").indexOf("application/x-www-form-urlencoded") && wi.test(i.data) && "data");
        return l || "jsonp" === i.dataTypes[0] ? (s = i.jsonpCallback = st.isFunction(i.jsonpCallback) ? i.jsonpCallback() : i.jsonpCallback, l ? i[l] = i[l].replace(wi, "$1" + s) : i.jsonp !== !1 && (i.url += (li.test(i.url) ? "&" : "?") + i.jsonp + "=" + s), i.converters["script json"] = function () {
            return r || st.error(s + " was not called"), r[0]
        }, i.dataTypes[0] = "json", a = e[s], e[s] = function () {
            r = arguments
        }, o.always(function () {
            e[s] = a, i[s] && (i.jsonpCallback = n.jsonpCallback, xi.push(s)), r && st.isFunction(a) && a(r[0]), r = a = t
        }), "script") : t
    }), st.ajaxSettings.xhr = function () {
        try {
            return new XMLHttpRequest
        } catch (e) {
        }
    };
    var Ci = st.ajaxSettings.xhr(), Ti = {0: 200, 1223: 204}, Si = 0, ki = {};
    e.ActiveXObject && st(e).on("unload", function () {
        for (var e in ki)ki[e]();
        ki = t
    }), st.support.cors = !!Ci && "withCredentials"in Ci, st.support.ajax = Ci = !!Ci, st.ajaxTransport(function (e) {
        var i;
        return st.support.cors || Ci && !e.crossDomain ? {
            send: function (n, o) {
                var s, a, r = e.xhr();
                if (r.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)for (s in e.xhrFields)r[s] = e.xhrFields[s];
                e.mimeType && r.overrideMimeType && r.overrideMimeType(e.mimeType), e.crossDomain || n["X-Requested-With"] || (n["X-Requested-With"] = "XMLHttpRequest");
                for (s in n)r.setRequestHeader(s, n[s]);
                i = function (e) {
                    return function () {
                        i && (delete ki[a], i = r.onload = r.onerror = null, "abort" === e ? r.abort() : "error" === e ? o(r.status || 404, r.statusText) : o(Ti[r.status] || r.status, r.statusText, "string" == typeof r.responseText ? {text: r.responseText} : t, r.getAllResponseHeaders()))
                    }
                }, r.onload = i(), r.onerror = i("error"), i = ki[a = Si++] = i("abort"), r.send(e.hasContent && e.data || null)
            }, abort: function () {
                i && i()
            }
        } : t
    });
    var Pi, Di, Ei = /^(?:toggle|show|hide)$/, Ai = RegExp("^(?:([+-])=|)(" + at + ")([a-z%]*)$", "i"), Ii = /queueHooks$/, Ni = [H], Oi = {
        "*": [function (e, t) {
            var i = this.createTween(e, t), n = i.cur(), o = Ai.exec(t), s = o && o[3] || (st.cssNumber[e] ? "" : "px"), a = (st.cssNumber[e] || "px" !== s && +n) && Ai.exec(st.css(i.elem, e)), r = 1, l = 20;
            if (a && a[3] !== s) {
                s = s || a[3], o = o || [], a = +n || 1;
                do r = r || ".5", a /= r, st.style(i.elem, e, a + s); while (r !== (r = i.cur() / n) && 1 !== r && --l)
            }
            return o && (a = i.start = +a || +n || 0, i.unit = s, i.end = o[1] ? a + (o[1] + 1) * o[2] : +o[2]), i
        }]
    };
    st.Animation = st.extend(j, {
        tweener: function (e, t) {
            st.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
            for (var i, n = 0, o = e.length; o > n; n++)i = e[n], Oi[i] = Oi[i] || [], Oi[i].unshift(t)
        }, prefilter: function (e, t) {
            t ? Ni.unshift(e) : Ni.push(e)
        }
    }), st.Tween = q, q.prototype = {
        constructor: q, init: function (e, t, i, n, o, s) {
            this.elem = e, this.prop = i, this.easing = o || "swing", this.options = t, this.start = this.now = this.cur(), this.end = n, this.unit = s || (st.cssNumber[i] ? "" : "px")
        }, cur: function () {
            var e = q.propHooks[this.prop];
            return e && e.get ? e.get(this) : q.propHooks._default.get(this)
        }, run: function (e) {
            var t, i = q.propHooks[this.prop];
            return this.pos = t = this.options.duration ? st.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), i && i.set ? i.set(this) : q.propHooks._default.set(this), this
        }
    }, q.prototype.init.prototype = q.prototype, q.propHooks = {
        _default: {
            get: function (e) {
                var t;
                return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = st.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0) : e.elem[e.prop]
            }, set: function (e) {
                st.fx.step[e.prop] ? st.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[st.cssProps[e.prop]] || st.cssHooks[e.prop]) ? st.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
            }
        }
    }, q.propHooks.scrollTop = q.propHooks.scrollLeft = {
        set: function (e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, st.each(["toggle", "show", "hide"], function (e, t) {
        var i = st.fn[t];
        st.fn[t] = function (e, n, o) {
            return null == e || "boolean" == typeof e ? i.apply(this, arguments) : this.animate(F(t, !0), e, n, o)
        }
    }), st.fn.extend({
        fadeTo: function (e, t, i, n) {
            return this.filter(_).css("opacity", 0).show().end().animate({opacity: t}, e, i, n)
        }, animate: function (e, t, i, n) {
            var o = st.isEmptyObject(e), s = st.speed(t, i, n), a = function () {
                var t = j(this, st.extend({}, e), s);
                (o || gt.get(this, "finish")) && t.stop(!0)
            };
            return a.finish = a, o || s.queue === !1 ? this.each(a) : this.queue(s.queue, a)
        }, stop: function (e, i, n) {
            var o = function (e) {
                var t = e.stop;
                delete e.stop, t(n)
            };
            return "string" != typeof e && (n = i, i = e, e = t), i && e !== !1 && this.queue(e || "fx", []), this.each(function () {
                var t = !0, i = null != e && e + "queueHooks", s = st.timers, a = gt.get(this);
                if (i)a[i] && a[i].stop && o(a[i]); else for (i in a)a[i] && a[i].stop && Ii.test(i) && o(a[i]);
                for (i = s.length; i--;)s[i].elem !== this || null != e && s[i].queue !== e || (s[i].anim.stop(n), t = !1, s.splice(i, 1));
                (t || !n) && st.dequeue(this, e)
            })
        }, finish: function (e) {
            return e !== !1 && (e = e || "fx"), this.each(function () {
                var t, i = gt.get(this), n = i[e + "queue"], o = i[e + "queueHooks"], s = st.timers, a = n ? n.length : 0;
                for (i.finish = !0, st.queue(this, e, []), o && o.stop && o.stop.call(this, !0), t = s.length; t--;)s[t].elem === this && s[t].queue === e && (s[t].anim.stop(!0), s.splice(t, 1));
                for (t = 0; a > t; t++)n[t] && n[t].finish && n[t].finish.call(this);
                delete i.finish
            })
        }
    }), st.each({
        slideDown: F("show"),
        slideUp: F("hide"),
        slideToggle: F("toggle"),
        fadeIn: {opacity: "show"},
        fadeOut: {opacity: "hide"},
        fadeToggle: {opacity: "toggle"}
    }, function (e, t) {
        st.fn[e] = function (e, i, n) {
            return this.animate(t, e, i, n)
        }
    }), st.speed = function (e, t, i) {
        var n = e && "object" == typeof e ? st.extend({}, e) : {
            complete: i || !i && t || st.isFunction(e) && e,
            duration: e,
            easing: i && t || t && !st.isFunction(t) && t
        };
        return n.duration = st.fx.off ? 0 : "number" == typeof n.duration ? n.duration : n.duration in st.fx.speeds ? st.fx.speeds[n.duration] : st.fx.speeds._default, (null == n.queue || n.queue === !0) && (n.queue = "fx"), n.old = n.complete, n.complete = function () {
            st.isFunction(n.old) && n.old.call(this), n.queue && st.dequeue(this, n.queue)
        }, n
    }, st.easing = {
        linear: function (e) {
            return e
        }, swing: function (e) {
            return .5 - Math.cos(e * Math.PI) / 2
        }
    }, st.timers = [], st.fx = q.prototype.init, st.fx.tick = function () {
        var e, i = st.timers, n = 0;
        for (Pi = st.now(); i.length > n; n++)e = i[n], e() || i[n] !== e || i.splice(n--, 1);
        i.length || st.fx.stop(), Pi = t
    }, st.fx.timer = function (e) {
        e() && st.timers.push(e) && st.fx.start()
    }, st.fx.interval = 13, st.fx.start = function () {
        Di || (Di = setInterval(st.fx.tick, st.fx.interval))
    }, st.fx.stop = function () {
        clearInterval(Di), Di = null
    }, st.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, st.fx.step = {}, st.expr && st.expr.filters && (st.expr.filters.animated = function (e) {
        return st.grep(st.timers, function (t) {
            return e === t.elem
        }).length
    }), st.fn.offset = function (e) {
        if (arguments.length)return e === t ? this : this.each(function (t) {
            st.offset.setOffset(this, e, t)
        });
        var i, n, o = this[0], s = {top: 0, left: 0}, a = o && o.ownerDocument;
        return a ? (i = a.documentElement, st.contains(i, o) ? (typeof o.getBoundingClientRect !== z && (s = o.getBoundingClientRect()), n = W(a), {
            top: s.top + n.pageYOffset - i.clientTop,
            left: s.left + n.pageXOffset - i.clientLeft
        }) : s) : void 0
    }, st.offset = {
        setOffset: function (e, t, i) {
            var n, o, s, a, r, l, c, h = st.css(e, "position"), u = st(e), d = {};
            "static" === h && (e.style.position = "relative"), r = u.offset(), s = st.css(e, "top"), l = st.css(e, "left"), c = ("absolute" === h || "fixed" === h) && (s + l).indexOf("auto") > -1, c ? (n = u.position(), a = n.top, o = n.left) : (a = parseFloat(s) || 0, o = parseFloat(l) || 0), st.isFunction(t) && (t = t.call(e, i, r)), null != t.top && (d.top = t.top - r.top + a), null != t.left && (d.left = t.left - r.left + o), "using"in t ? t.using.call(e, d) : u.css(d)
        }
    }, st.fn.extend({
        position: function () {
            if (this[0]) {
                var e, t, i = this[0], n = {top: 0, left: 0};
                return "fixed" === st.css(i, "position") ? t = i.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), st.nodeName(e[0], "html") || (n = e.offset()), n.top += st.css(e[0], "borderTopWidth", !0), n.left += st.css(e[0], "borderLeftWidth", !0)), {
                    top: t.top - n.top - st.css(i, "marginTop", !0),
                    left: t.left - n.left - st.css(i, "marginLeft", !0)
                }
            }
        }, offsetParent: function () {
            return this.map(function () {
                for (var e = this.offsetParent || Y; e && !st.nodeName(e, "html") && "static" === st.css(e, "position");)e = e.offsetParent;
                return e || Y
            })
        }
    }), st.each({scrollLeft: "pageXOffset", scrollTop: "pageYOffset"}, function (i, n) {
        var o = "pageYOffset" === n;
        st.fn[i] = function (s) {
            return st.access(this, function (i, s, a) {
                var r = W(i);
                return a === t ? r ? r[n] : i[s] : (r ? r.scrollTo(o ? e.pageXOffset : a, o ? a : e.pageYOffset) : i[s] = a, t)
            }, i, s, arguments.length, null)
        }
    }), st.each({Height: "height", Width: "width"}, function (e, i) {
        st.each({padding: "inner" + e, content: i, "": "outer" + e}, function (n, o) {
            st.fn[o] = function (o, s) {
                var a = arguments.length && (n || "boolean" != typeof o), r = n || (o === !0 || s === !0 ? "margin" : "border");
                return st.access(this, function (i, n, o) {
                    var s;
                    return st.isWindow(i) ? i.document.documentElement["client" + e] : 9 === i.nodeType ? (s = i.documentElement, Math.max(i.body["scroll" + e], s["scroll" + e], i.body["offset" + e], s["offset" + e], s["client" + e])) : o === t ? st.css(i, n, r) : st.style(i, n, o, r)
                }, i, a ? o : t, a, null)
            }
        })
    }), st.fn.size = function () {
        return this.length
    }, st.fn.andSelf = st.fn.addBack, "object" == typeof module && module && "object" == typeof module.exports ? module.exports = st : "function" == typeof define && define.amd && define("jquery", [], function () {
        return st
    }), "object" == typeof e && "object" == typeof e.document && (e.jQuery = e.$ = st)
}(window), $(document).on("mobileinit", function () {
    $.mobile.page.prototype.options.domCache = !1, $.mobile.pageLoadErrorMessage = "加载失败，请检查网络连接", $.mobile.page.prototype.options.theme = "z", $.mobile.page.prototype.options.backBtnText = "Go back", $.mobile.page.prototype.options.addBackBtn = !0, $.mobile.page.prototype.options.backBtnTheme = "d", $.mobile.page.prototype.options, $.mobile.page.prototype.options.headerTheme = "b", $.mobile.page.prototype.options.contentTheme = "z", $.mobile.page.prototype.options.footerTheme = "b", $.event.special.swipe.horizontalDistanceThreshold = 100, $.mobile.listview.prototype.options.headerTheme = "a", $.mobile.listview.prototype.options.theme = "z", $.mobile.listview.prototype.options.dividerTheme = "d", $.mobile.listview.prototype.options.splitTheme = "c", $.mobile.listview.prototype.options.countTheme = "c", $.mobile.listview.prototype.options.filterTheme = "c"
}), !function (e, t, i) {
    "function" == typeof define && define.amd ? define(["jquery"], function (n) {
        return i(n, e, t), n.mobile
    }) : i(e.jQuery, e, t)
}(this, document, function (e, t, i) {
    !function (e) {
        e.mobile = {}
    }(e), function (e, t) {
        function n(t, i) {
            var n, s, a, r = t.nodeName.toLowerCase();
            return "area" === r ? (n = t.parentNode, s = n.name, t.href && s && "map" === n.nodeName.toLowerCase() ? (a = e("img[usemap=#" + s + "]")[0], !!a && o(a)) : !1) : (/input|select|textarea|button|object/.test(r) ? !t.disabled : "a" === r ? t.href || i : i) && o(t)
        }

        function o(t) {
            return e.expr.filters.visible(t) && !e(t).parents().addBack().filter(function () {
                    return "hidden" === e.css(this, "visibility")
                }).length
        }

        var s = 0, a = /^ui-id-\d+$/;
        e.ui = e.ui || {}, e.extend(e.ui, {
            version: "c0ab71056b936627e8a7821f03c044aec6280a40",
            keyCode: {
                BACKSPACE: 8,
                COMMA: 188,
                DELETE: 46,
                DOWN: 40,
                END: 35,
                ENTER: 13,
                ESCAPE: 27,
                HOME: 36,
                LEFT: 37,
                PAGE_DOWN: 34,
                PAGE_UP: 33,
                PERIOD: 190,
                RIGHT: 39,
                SPACE: 32,
                TAB: 9,
                UP: 38
            }
        }), e.fn.extend({
            focus: function (t) {
                return function (i, n) {
                    return "number" == typeof i ? this.each(function () {
                        var t = this;
                        setTimeout(function () {
                            e(t).focus(), n && n.call(t)
                        }, i)
                    }) : t.apply(this, arguments)
                }
            }(e.fn.focus), scrollParent: function () {
                var t;
                return t = e.ui.ie && /(static|relative)/.test(this.css("position")) || /absolute/.test(this.css("position")) ? this.parents().filter(function () {
                    return /(relative|absolute|fixed)/.test(e.css(this, "position")) && /(auto|scroll)/.test(e.css(this, "overflow") + e.css(this, "overflow-y") + e.css(this, "overflow-x"))
                }).eq(0) : this.parents().filter(function () {
                    return /(auto|scroll)/.test(e.css(this, "overflow") + e.css(this, "overflow-y") + e.css(this, "overflow-x"))
                }).eq(0), /fixed/.test(this.css("position")) || !t.length ? e(this[0].ownerDocument || i) : t
            }, uniqueId: function () {
                return this.each(function () {
                    this.id || (this.id = "ui-id-" + ++s)
                })
            }, removeUniqueId: function () {
                return this.each(function () {
                    a.test(this.id) && e(this).removeAttr("id")
                })
            }
        }), e.extend(e.expr[":"], {
            data: e.expr.createPseudo ? e.expr.createPseudo(function (t) {
                return function (i) {
                    return !!e.data(i, t)
                }
            }) : function (t, i, n) {
                return !!e.data(t, n[3])
            }, focusable: function (t) {
                return n(t, !isNaN(e.attr(t, "tabindex")))
            }, tabbable: function (t) {
                var i = e.attr(t, "tabindex"), o = isNaN(i);
                return (o || i >= 0) && n(t, !o)
            }
        }), e("<a>").outerWidth(1).jquery || e.each(["Width", "Height"], function (i, n) {
            function o(t, i, n, o) {
                return e.each(s, function () {
                    i -= parseFloat(e.css(t, "padding" + this)) || 0, n && (i -= parseFloat(e.css(t, "border" + this + "Width")) || 0), o && (i -= parseFloat(e.css(t, "margin" + this)) || 0)
                }), i
            }

            var s = "Width" === n ? ["Left", "Right"] : ["Top", "Bottom"], a = n.toLowerCase(), r = {
                innerWidth: e.fn.innerWidth,
                innerHeight: e.fn.innerHeight,
                outerWidth: e.fn.outerWidth,
                outerHeight: e.fn.outerHeight
            };
            e.fn["inner" + n] = function (i) {
                return i === t ? r["inner" + n].call(this) : this.each(function () {
                    e(this).css(a, o(this, i) + "px")
                })
            }, e.fn["outer" + n] = function (t, i) {
                return "number" != typeof t ? r["outer" + n].call(this, t) : this.each(function () {
                    e(this).css(a, o(this, t, !0, i) + "px")
                })
            }
        }), e.fn.addBack || (e.fn.addBack = function (e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }), e("<a>").data("a-b", "a").removeData("a-b").data("a-b") && (e.fn.removeData = function (t) {
            return function (i) {
                return arguments.length ? t.call(this, e.camelCase(i)) : t.call(this)
            }
        }(e.fn.removeData)), e.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()), e.support.selectstart = "onselectstart"in i.createElement("div"), e.fn.extend({
            disableSelection: function () {
                return this.bind((e.support.selectstart ? "selectstart" : "mousedown") + ".ui-disableSelection", function (e) {
                    e.preventDefault()
                })
            }, enableSelection: function () {
                return this.unbind(".ui-disableSelection")
            }, zIndex: function (n) {
                if (n !== t)return this.css("zIndex", n);
                if (this.length)for (var o, s, a = e(this[0]); a.length && a[0] !== i;) {
                    if (o = a.css("position"), ("absolute" === o || "relative" === o || "fixed" === o) && (s = parseInt(a.css("zIndex"), 10), !isNaN(s) && 0 !== s))return s;
                    a = a.parent()
                }
                return 0
            }
        }), e.ui.plugin = {
            add: function (t, i, n) {
                var o, s = e.ui[t].prototype;
                for (o in n)s.plugins[o] = s.plugins[o] || [], s.plugins[o].push([i, n[o]])
            }, call: function (e, t, i, n) {
                var o, s = e.plugins[t];
                if (s && (n || e.element[0].parentNode && 11 !== e.element[0].parentNode.nodeType))for (o = 0; o < s.length; o++)e.options[s[o][0]] && s[o][1].apply(e.element, i)
            }
        }
    }(e), function (e, t) {
        var n = function (t, i) {
            var n = t.parent(), o = [], s = function () {
                var t = e(this), i = e.mobile.toolbar && t.data("mobile-toolbar") ? t.toolbar("option") : {
                    position: t.attr("data-" + e.mobile.ns + "position"),
                    updatePagePadding: t.attr("data-" + e.mobile.ns + "update-page-padding") !== !1
                };
                return !("fixed" === i.position && i.updatePagePadding === !0)
            }, a = n.children(":jqmData(role='header')").filter(s), r = t.children(":jqmData(role='header')"), l = n.children(":jqmData(role='footer')").filter(s), c = t.children(":jqmData(role='footer')");
            return 0 === r.length && a.length > 0 && (o = o.concat(a.toArray())), 0 === c.length && l.length > 0 && (o = o.concat(l.toArray())), e.each(o, function (t, n) {
                i -= e(n).outerHeight()
            }), Math.max(0, i)
        };
        e.extend(e.mobile, {
            window: e(t),
            document: e(i),
            keyCode: e.ui.keyCode,
            behaviors: {},
            silentScroll: function (i) {
                "number" !== e.type(i) && (i = e.mobile.defaultHomeScroll), e.event.special.scrollstart.enabled = !1, setTimeout(function () {
                    t.scrollTo(0, i), e.mobile.document.trigger("silentscroll", {x: 0, y: i})
                }, 20), setTimeout(function () {
                    e.event.special.scrollstart.enabled = !0
                }, 150)
            },
            getClosestBaseUrl: function (t) {
                var i = e(t).closest(".ui-page").jqmData("url"), n = e.mobile.path.documentBase.hrefNoHash;
                return e.mobile.dynamicBaseEnabled && i && e.mobile.path.isPath(i) || (i = n), e.mobile.path.makeUrlAbsolute(i, n)
            },
            removeActiveLinkClass: function (t) {
                !e.mobile.activeClickedLink || e.mobile.activeClickedLink.closest("." + e.mobile.activePageClass).length && !t || e.mobile.activeClickedLink.removeClass(e.mobile.activeBtnClass), e.mobile.activeClickedLink = null
            },
            getInheritedTheme: function (e, t) {
                for (var i, n, o = e[0], s = "", a = /ui-(bar|body|overlay)-([a-z])\b/; o && (i = o.className || "", !(i && (n = a.exec(i)) && (s = n[2])));)o = o.parentNode;
                return s || t || "a"
            },
            enhanceable: function (e) {
                return this.haveParents(e, "enhance")
            },
            hijackable: function (e) {
                return this.haveParents(e, "ajax")
            },
            haveParents: function (t, i) {
                if (!e.mobile.ignoreContentEnabled)return t;
                var n, o, s, a, r, l = t.length, c = e();
                for (a = 0; l > a; a++) {
                    for (o = t.eq(a), s = !1, n = t[a]; n;) {
                        if (r = n.getAttribute ? n.getAttribute("data-" + e.mobile.ns + i) : "", "false" === r) {
                            s = !0;
                            break
                        }
                        n = n.parentNode
                    }
                    s || (c = c.add(o))
                }
                return c
            },
            getScreenHeight: function () {
                return t.innerHeight || e.mobile.window.height()
            },
            resetActivePageHeight: function (t) {
                var i = e("." + e.mobile.activePageClass), o = i.height(), s = i.outerHeight(!0);
                t = n(i, "number" == typeof t ? t : e.mobile.getScreenHeight()), i.css("min-height", ""), i.height() < t && i.css("min-height", t - (s - o))
            },
            loading: function () {
                var t = this.loading._widget || e(e.mobile.loader.prototype.defaultHtml).loader(), i = t.loader.apply(t, arguments);
                return this.loading._widget = t, i
            }
        }), e.addDependents = function (t, i) {
            var n = e(t), o = n.jqmData("dependents") || e();
            n.jqmData("dependents", e(o).add(i))
        }, e.fn.extend({
            removeWithDependents: function () {
                e.removeWithDependents(this)
            }, enhanceWithin: function () {
                var t, i = {}, n = e.mobile.page.prototype.keepNativeSelector(), o = this;
                e.mobile.nojs && e.mobile.nojs(this), e.mobile.links && e.mobile.links(this), e.mobile.degradeInputsWithin && e.mobile.degradeInputsWithin(this), e.fn.buttonMarkup && this.find(e.fn.buttonMarkup.initSelector).not(n).jqmEnhanceable().buttonMarkup(), e.fn.fieldcontain && this.find(":jqmData(role='fieldcontain')").not(n).jqmEnhanceable().fieldcontain(), e.each(e.mobile.widgets, function (t, s) {
                    if (s.initSelector) {
                        var a = e.mobile.enhanceable(o.find(s.initSelector));
                        a.length > 0 && (a = a.not(n)), a.length > 0 && (i[s.prototype.widgetName] = a)
                    }
                });
                for (t in i)i[t][t]();
                return this
            }, addDependents: function (t) {
                e.addDependents(this, t)
            }, getEncodedText: function () {
                return e("<a>").text(this.text()).html()
            }, jqmEnhanceable: function () {
                return e.mobile.enhanceable(this)
            }, jqmHijackable: function () {
                return e.mobile.hijackable(this)
            }
        }), e.removeWithDependents = function (t) {
            var i = e(t);
            (i.jqmData("dependents") || e()).remove(), i.remove()
        }, e.addDependents = function (t, i) {
            var n = e(t), o = n.jqmData("dependents") || e();
            n.jqmData("dependents", e(o).add(i))
        }, e.find.matches = function (t, i) {
            return e.find(t, null, null, i)
        }, e.find.matchesSelector = function (t, i) {
            return e.find(i, null, null, [t]).length > 0
        }
    }(e, this), function (e) {
        e.extend(e.mobile, {
            version: "1.4.5",
            subPageUrlKey: "ui-page",
            hideUrlBar: !0,
            keepNative: ":jqmData(role='none'), :jqmData(role='nojs')",
            activePageClass: "ui-page-active",
            activeBtnClass: "ui-btn-active",
            focusClass: "ui-focus",
            ajaxEnabled: !0,
            hashListeningEnabled: !0,
            linkBindingEnabled: !0,
            defaultPageTransition: "fade",
            maxTransitionWidth: !1,
            minScrollBack: 0,
            defaultDialogTransition: "pop",
            pageLoadErrorMessage: "Error Loading Page",
            pageLoadErrorMessageTheme: "a",
            phonegapNavigationEnabled: !1,
            autoInitializePage: !0,
            pushStateEnabled: !0,
            ignoreContentEnabled: !1,
            buttonMarkup: {hoverDelay: 200},
            dynamicBaseEnabled: !0,
            pageContainer: e(),
            allowCrossDomainPages: !1,
            dialogHashKey: "&ui-state=dialog"
        })
    }(e, this), function (e, t) {
        var i = 0, n = Array.prototype.slice, o = e.cleanData;
        e.cleanData = function (t) {
            for (var i, n = 0; null != (i = t[n]); n++)try {
                e(i).triggerHandler("remove")
            } catch (s) {
            }
            o(t)
        }, e.widget = function (t, i, n) {
            var o, s, a, r, l = {}, c = t.split(".")[0];
            return t = t.split(".")[1], o = c + "-" + t, n || (n = i, i = e.Widget), e.expr[":"][o.toLowerCase()] = function (t) {
                return !!e.data(t, o)
            }, e[c] = e[c] || {}, s = e[c][t], a = e[c][t] = function (e, t) {
                return this._createWidget ? void(arguments.length && this._createWidget(e, t)) : new a(e, t)
            }, e.extend(a, s, {
                version: n.version,
                _proto: e.extend({}, n),
                _childConstructors: []
            }), r = new i, r.options = e.widget.extend({}, r.options), e.each(n, function (t, n) {
                return e.isFunction(n) ? void(l[t] = function () {
                    var e = function () {
                        return i.prototype[t].apply(this, arguments)
                    }, o = function (e) {
                        return i.prototype[t].apply(this, e)
                    };
                    return function () {
                        var t, i = this._super, s = this._superApply;
                        return this._super = e, this._superApply = o, t = n.apply(this, arguments), this._super = i, this._superApply = s, t
                    }
                }()) : void(l[t] = n)
            }), a.prototype = e.widget.extend(r, {widgetEventPrefix: s ? r.widgetEventPrefix || t : t}, l, {
                constructor: a,
                namespace: c,
                widgetName: t,
                widgetFullName: o
            }), s ? (e.each(s._childConstructors, function (t, i) {
                var n = i.prototype;
                e.widget(n.namespace + "." + n.widgetName, a, i._proto)
            }), delete s._childConstructors) : i._childConstructors.push(a), e.widget.bridge(t, a), a
        }, e.widget.extend = function (i) {
            for (var o, s, a = n.call(arguments, 1), r = 0, l = a.length; l > r; r++)for (o in a[r])s = a[r][o], a[r].hasOwnProperty(o) && s !== t && (i[o] = e.isPlainObject(s) ? e.isPlainObject(i[o]) ? e.widget.extend({}, i[o], s) : e.widget.extend({}, s) : s);
            return i
        }, e.widget.bridge = function (i, o) {
            var s = o.prototype.widgetFullName || i;
            e.fn[i] = function (a) {
                var r = "string" == typeof a, l = n.call(arguments, 1), c = this;
                return a = !r && l.length ? e.widget.extend.apply(null, [a].concat(l)) : a, this.each(r ? function () {
                    var n, o = e.data(this, s);
                    return "instance" === a ? (c = o, !1) : o ? e.isFunction(o[a]) && "_" !== a.charAt(0) ? (n = o[a].apply(o, l), n !== o && n !== t ? (c = n && n.jquery ? c.pushStack(n.get()) : n, !1) : void 0) : e.error("no such method '" + a + "' for " + i + " widget instance") : e.error("cannot call methods on " + i + " prior to initialization; attempted to call method '" + a + "'")
                } : function () {
                    var t = e.data(this, s);
                    t ? t.option(a || {})._init() : e.data(this, s, new o(a, this))
                }), c
            }
        }, e.Widget = function () {
        }, e.Widget._childConstructors = [], e.Widget.prototype = {
            widgetName: "widget",
            widgetEventPrefix: "",
            defaultElement: "<div>",
            options: {disabled: !1, create: null},
            _createWidget: function (t, n) {
                n = e(n || this.defaultElement || this)[0], this.element = e(n), this.uuid = i++, this.eventNamespace = "." + this.widgetName + this.uuid, this.options = e.widget.extend({}, this.options, this._getCreateOptions(), t), this.bindings = e(), this.hoverable = e(), this.focusable = e(), n !== this && (e.data(n, this.widgetFullName, this), this._on(!0, this.element, {
                    remove: function (e) {
                        e.target === n && this.destroy()
                    }
                }), this.document = e(n.style ? n.ownerDocument : n.document || n), this.window = e(this.document[0].defaultView || this.document[0].parentWindow)), this._create(), this._trigger("create", null, this._getCreateEventData()), this._init()
            },
            _getCreateOptions: e.noop,
            _getCreateEventData: e.noop,
            _create: e.noop,
            _init: e.noop,
            destroy: function () {
                this._destroy(), this.element.unbind(this.eventNamespace).removeData(this.widgetFullName).removeData(e.camelCase(this.widgetFullName)), this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName + "-disabled ui-state-disabled"), this.bindings.unbind(this.eventNamespace), this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus")
            },
            _destroy: e.noop,
            widget: function () {
                return this.element
            },
            option: function (i, n) {
                var o, s, a, r = i;
                if (0 === arguments.length)return e.widget.extend({}, this.options);
                if ("string" == typeof i)if (r = {}, o = i.split("."), i = o.shift(), o.length) {
                    for (s = r[i] = e.widget.extend({}, this.options[i]), a = 0; a < o.length - 1; a++)s[o[a]] = s[o[a]] || {}, s = s[o[a]];
                    if (i = o.pop(), n === t)return s[i] === t ? null : s[i];
                    s[i] = n
                } else {
                    if (n === t)return this.options[i] === t ? null : this.options[i];
                    r[i] = n
                }
                return this._setOptions(r), this
            },
            _setOptions: function (e) {
                var t;
                for (t in e)this._setOption(t, e[t]);
                return this
            },
            _setOption: function (e, t) {
                return this.options[e] = t, "disabled" === e && (this.widget().toggleClass(this.widgetFullName + "-disabled", !!t), this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus")), this
            },
            enable: function () {
                return this._setOptions({disabled: !1})
            },
            disable: function () {
                return this._setOptions({disabled: !0})
            },
            _on: function (t, i, n) {
                var o, s = this;
                "boolean" != typeof t && (n = i, i = t, t = !1), n ? (i = o = e(i), this.bindings = this.bindings.add(i)) : (n = i, i = this.element, o = this.widget()), e.each(n, function (n, a) {
                    function r() {
                        return t || s.options.disabled !== !0 && !e(this).hasClass("ui-state-disabled") ? ("string" == typeof a ? s[a] : a).apply(s, arguments) : void 0
                    }

                    "string" != typeof a && (r.guid = a.guid = a.guid || r.guid || e.guid++);
                    var l = n.match(/^(\w+)\s*(.*)$/), c = l[1] + s.eventNamespace, h = l[2];
                    h ? o.delegate(h, c, r) : i.bind(c, r)
                })
            },
            _off: function (e, t) {
                t = (t || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace, e.unbind(t).undelegate(t)
            },
            _delay: function (e, t) {
                function i() {
                    return ("string" == typeof e ? n[e] : e).apply(n, arguments)
                }

                var n = this;
                return setTimeout(i, t || 0)
            },
            _hoverable: function (t) {
                this.hoverable = this.hoverable.add(t), this._on(t, {
                    mouseenter: function (t) {
                        e(t.currentTarget).addClass("ui-state-hover")
                    }, mouseleave: function (t) {
                        e(t.currentTarget).removeClass("ui-state-hover")
                    }
                })
            },
            _focusable: function (t) {
                this.focusable = this.focusable.add(t), this._on(t, {
                    focusin: function (t) {
                        e(t.currentTarget).addClass("ui-state-focus")
                    }, focusout: function (t) {
                        e(t.currentTarget).removeClass("ui-state-focus")
                    }
                })
            },
            _trigger: function (t, i, n) {
                var o, s, a = this.options[t];
                if (n = n || {}, i = e.Event(i), i.type = (t === this.widgetEventPrefix ? t : this.widgetEventPrefix + t).toLowerCase(), i.target = this.element[0], s = i.originalEvent)for (o in s)o in i || (i[o] = s[o]);
                return this.element.trigger(i, n), !(e.isFunction(a) && a.apply(this.element[0], [i].concat(n)) === !1 || i.isDefaultPrevented())
            }
        }, e.each({show: "fadeIn", hide: "fadeOut"}, function (t, i) {
            e.Widget.prototype["_" + t] = function (n, o, s) {
                "string" == typeof o && (o = {effect: o});
                var a, r = o ? o === !0 || "number" == typeof o ? i : o.effect || i : t;
                o = o || {}, "number" == typeof o && (o = {duration: o}), a = !e.isEmptyObject(o), o.complete = s, o.delay && n.delay(o.delay), a && e.effects && e.effects.effect[r] ? n[t](o) : r !== t && n[r] ? n[r](o.duration, o.easing, s) : n.queue(function (i) {
                    e(this)[t](), s && s.call(n[0]), i()
                })
            }
        })
    }(e), function (e, t, i) {
        var n = {}, o = e.find, s = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/, a = /:jqmData\(([^)]*)\)/g;
        e.extend(e.mobile, {
            ns: "", getAttribute: function (t, i) {
                var n;
                t = t.jquery ? t[0] : t, t && t.getAttribute && (n = t.getAttribute("data-" + e.mobile.ns + i));
                try {
                    n = "true" === n ? !0 : "false" === n ? !1 : "null" === n ? null : +n + "" === n ? +n : s.test(n) ? JSON.parse(n) : n
                } catch (o) {
                }
                return n
            }, nsNormalizeDict: n, nsNormalize: function (t) {
                return n[t] || (n[t] = e.camelCase(e.mobile.ns + t))
            }, closestPageData: function (e) {
                return e.closest(":jqmData(role='page'), :jqmData(role='dialog')").data("mobile-page")
            }
        }), e.fn.jqmData = function (t, n) {
            var o;
            return "undefined" != typeof t && (t && (t = e.mobile.nsNormalize(t)), o = arguments.length < 2 || n === i ? this.data(t) : this.data(t, n)), o
        }, e.jqmData = function (t, i, n) {
            var o;
            return "undefined" != typeof i && (o = e.data(t, i ? e.mobile.nsNormalize(i) : i, n)), o
        }, e.fn.jqmRemoveData = function (t) {
            return this.removeData(e.mobile.nsNormalize(t))
        }, e.jqmRemoveData = function (t, i) {
            return e.removeData(t, e.mobile.nsNormalize(i))
        }, e.find = function (t, i, n, s) {
            return t.indexOf(":jqmData") > -1 && (t = t.replace(a, "[data-" + (e.mobile.ns || "") + "$1]")), o.call(this, t, i, n, s)
        }, e.extend(e.find, o)
    }(e, this), function (e) {
        var t = /[A-Z]/g, i = function (e) {
            return "-" + e.toLowerCase()
        };
        e.extend(e.Widget.prototype, {
            _getCreateOptions: function () {
                var n, o, s = this.element[0], a = {};
                if (!e.mobile.getAttribute(s, "defaults"))for (n in this.options)o = e.mobile.getAttribute(s, n.replace(t, i)), null != o && (a[n] = o);
                return a
            }
        }), e.mobile.widget = e.Widget
    }(e), function (e) {
        var t = "ui-loader", i = e("html");
        e.widget("mobile.loader", {
            options: {theme: "a", textVisible: !1, html: "", text: "loading"},
            defaultHtml: "<div class='" + t + "'><span class='ui-icon-loading'></span><h1></h1></div>",
            fakeFixLoader: function () {
                var t = e("." + e.mobile.activeBtnClass).first();
                this.element.css({top: e.support.scrollTop && this.window.scrollTop() + this.window.height() / 2 || t.length && t.offset().top || 100})
            },
            checkLoaderPosition: function () {
                var t = this.element.offset(), i = this.window.scrollTop(), n = e.mobile.getScreenHeight();
                (t.top < i || t.top - i > n) && (this.element.addClass("ui-loader-fakefix"), this.fakeFixLoader(), this.window.unbind("scroll", this.checkLoaderPosition).bind("scroll", e.proxy(this.fakeFixLoader, this)))
            },
            resetHtml: function () {
                this.element.html(e(this.defaultHtml).html())
            },
            show: function (n, o, s) {
                var a, r, l;
                this.resetHtml(), "object" === e.type(n) ? (l = e.extend({}, this.options, n), n = l.theme) : (l = this.options, n = n || l.theme), r = o || (l.text === !1 ? "" : l.text), i.addClass("ui-loading"), a = l.textVisible, this.element.attr("class", t + " ui-corner-all ui-body-" + n + " ui-loader-" + (a || o || n.text ? "verbose" : "default") + (l.textonly || s ? " ui-loader-textonly" : "")), l.html ? this.element.html(l.html) : this.element.find("h1").text(r), this.element.appendTo(e(e.mobile.pagecontainer ? ":mobile-pagecontainer" : "body")), this.checkLoaderPosition(), this.window.bind("scroll", e.proxy(this.checkLoaderPosition, this))
            },
            hide: function () {
                i.removeClass("ui-loading"), this.options.text && this.element.removeClass("ui-loader-fakefix"), this.window.unbind("scroll", this.fakeFixLoader), this.window.unbind("scroll", this.checkLoaderPosition)
            }
        })
    }(e, this), function (e, t, n) {
        "$:nomunge";
        function o(e) {
            return e = e || location.href, "#" + e.replace(/^[^#]*#?(.*)$/, "$1")
        }

        var s, a = "hashchange", r = i, l = e.event.special, c = r.documentMode, h = "on" + a in t && (c === n || c > 7);
        e.fn[a] = function (e) {
            return e ? this.bind(a, e) : this.trigger(a)
        }, e.fn[a].delay = 50, l[a] = e.extend(l[a], {
            setup: function () {
                return h ? !1 : void e(s.start)
            }, teardown: function () {
                return h ? !1 : void e(s.stop)
            }
        }), s = function () {
            function i() {
                var n = o(), r = p(c);
                n !== c ? (d(c = n, r), e(t).trigger(a)) : r !== c && (location.href = location.href.replace(/#.*/, "") + r), s = setTimeout(i, e.fn[a].delay)
            }

            var s, l = {}, c = o(), u = function (e) {
                return e
            }, d = u, p = u;
            return l.start = function () {
                s || i()
            }, l.stop = function () {
                s && clearTimeout(s), s = n
            }, t.attachEvent && !t.addEventListener && !h && function () {
                var t, n;
                l.start = function () {
                    t || (n = e.fn[a].src, n = n && n + o(), t = e('<iframe tabindex="-1" title="empty"/>').hide().one("load", function () {
                        n || d(o()), i()
                    }).attr("src", n || "javascript:0").insertAfter("body")[0].contentWindow, r.onpropertychange = function () {
                        try {
                            "title" === event.propertyName && (t.document.title = r.title)
                        } catch (e) {
                        }
                    })
                }, l.stop = u, p = function () {
                    return o(t.location.href)
                }, d = function (i, n) {
                    var o = t.document, s = e.fn[a].domain;
                    i !== n && (o.title = r.title, o.open(), s && o.write('<script>document.domain="' + s + '"</script>'), o.close(), t.location.hash = i)
                }
            }(), l
        }()
    }(e, this), function (e) {
        t.matchMedia = t.matchMedia || function (e) {
                var t, i = e.documentElement, n = i.firstElementChild || i.firstChild, o = e.createElement("body"), s = e.createElement("div");
                return s.id = "mq-test-1", s.style.cssText = "position:absolute;top:-100em", o.style.background = "none", o.appendChild(s), function (e) {
                    return s.innerHTML = '&shy;<style media="' + e + '"> #mq-test-1 { width: 42px; }</style>', i.insertBefore(o, n), t = 42 === s.offsetWidth, i.removeChild(o), {
                        matches: t,
                        media: e
                    }
                }
            }(i), e.mobile.media = function (e) {
            return t.matchMedia(e).matches
        }
    }(e), function (e) {
        var t = {touch: "ontouchend"in i};
        e.mobile.support = e.mobile.support || {}, e.extend(e.support, t), e.extend(e.mobile.support, t)
    }(e), function (e) {
        e.extend(e.support, {orientation: "orientation"in t && "onorientationchange"in t})
    }(e), function (e, n) {
        function o(e) {
            var t, i = e.charAt(0).toUpperCase() + e.substr(1), o = (e + " " + f.join(i + " ") + i).split(" ");
            for (t in o)if (p[o[t]] !== n)return !0
        }

        function s() {
            var i = t, n = !(!i.document.createElementNS || !i.document.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGRect || i.opera && -1 === navigator.userAgent.indexOf("Chrome")), o = function (t) {
                t && n || e("html").addClass("ui-nosvg")
            }, s = new i.Image;
            s.onerror = function () {
                o(!1)
            }, s.onload = function () {
                o(1 === s.width && 1 === s.height)
            }, s.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw=="
        }

        function a() {
            var o, s, a, r = "transform-3d", l = e.mobile.media("(-" + f.join("-" + r + "),(-") + "-" + r + "),(" + r + ")");
            if (l)return !!l;
            o = i.createElement("div"), s = {MozTransform: "-moz-transform", transform: "transform"}, d.append(o);
            for (a in s)o.style[a] !== n && (o.style[a] = "translate3d( 100px, 1px, 1px )", l = t.getComputedStyle(o).getPropertyValue(s[a]));
            return !!l && "none" !== l
        }

        function r() {
            var t, i, n = location.protocol + "//" + location.host + location.pathname + "ui-dir/", o = e("head base"), s = null, a = "";
            return o.length ? a = o.attr("href") : o = s = e("<base>", {href: n}).appendTo("head"), t = e("<a href='testurl' />").prependTo(d), i = t[0].href, o[0].href = a || location.pathname, s && s.remove(), 0 === i.indexOf(n)
        }

        function l() {
            var e, n = i.createElement("x"), o = i.documentElement, s = t.getComputedStyle;
            return "pointerEvents"in n.style ? (n.style.pointerEvents = "auto", n.style.pointerEvents = "x", o.appendChild(n), e = s && "auto" === s(n, "").pointerEvents, o.removeChild(n), !!e) : !1
        }

        function c() {
            var e = i.createElement("div");
            return "undefined" != typeof e.getBoundingClientRect
        }

        function h() {
            var e = t, i = navigator.userAgent, n = navigator.platform, o = i.match(/AppleWebKit\/([0-9]+)/), s = !!o && o[1], a = i.match(/Fennec\/([0-9]+)/), r = !!a && a[1], l = i.match(/Opera Mobi\/([0-9]+)/), c = !!l && l[1];
            return (n.indexOf("iPhone") > -1 || n.indexOf("iPad") > -1 || n.indexOf("iPod") > -1) && s && 534 > s || e.operamini && "[object OperaMini]" === {}.toString.call(e.operamini) || l && 7458 > c || i.indexOf("Android") > -1 && s && 533 > s || r && 6 > r || "palmGetResource"in t && s && 534 > s || i.indexOf("MeeGo") > -1 && i.indexOf("NokiaBrowser/8.5.0") > -1 ? !1 : !0
        }

        var u, d = e("<body>").prependTo("html"), p = d[0].style, f = ["Webkit", "Moz", "O"], m = "palmGetResource"in t, g = t.operamini && "[object OperaMini]" === {}.toString.call(t.operamini), b = t.blackberry && !o("-webkit-transform");
        e.extend(e.mobile, {browser: {}}), e.mobile.browser.oldIE = function () {
            var e = 3, t = i.createElement("div"), n = t.all || [];
            do t.innerHTML = "<!--[if gt IE " + ++e + "]><br><![endif]-->"; while (n[0]);
            return e > 4 ? e : !e
        }(), e.extend(e.support, {
            pushState: "pushState"in history && "replaceState"in history && !(t.navigator.userAgent.indexOf("Firefox") >= 0 && t.top !== t) && -1 === t.navigator.userAgent.search(/CriOS/),
            mediaquery: e.mobile.media("only all"),
            cssPseudoElement: !!o("content"),
            touchOverflow: !!o("overflowScrolling"),
            cssTransform3d: a(),
            boxShadow: !!o("boxShadow") && !b,
            fixedPosition: h(),
            scrollTop: ("pageXOffset"in t || "scrollTop"in i.documentElement || "scrollTop"in d[0]) && !m && !g,
            dynamicBaseTag: r(),
            cssPointerEvents: l(),
            boundingRect: c(),
            inlineSVG: s
        }), d.remove(), u = function () {
            var e = t.navigator.userAgent;
            return e.indexOf("Nokia") > -1 && (e.indexOf("Symbian/3") > -1 || e.indexOf("Series60/5") > -1) && e.indexOf("AppleWebKit") > -1 && e.match(/(BrowserNG|NokiaBrowser)\/7\.[0-3]/)
        }(), e.mobile.gradeA = function () {
            return (e.support.mediaquery && e.support.cssPseudoElement || e.mobile.browser.oldIE && e.mobile.browser.oldIE >= 8) && (e.support.boundingRect || null !== e.fn.jquery.match(/1\.[0-7+]\.[0-9+]?/))
        }, e.mobile.ajaxBlacklist = t.blackberry && !t.WebKitPoint || g || u, u && e(function () {
            e("head link[rel='stylesheet']").attr("rel", "alternate stylesheet").attr("rel", "stylesheet")
        }), e.support.boxShadow || e("html").addClass("ui-noboxshadow")
    }(e), function (e, t) {
        var i, n = e.mobile.window, o = function () {
        };
        e.event.special.beforenavigate = {
            setup: function () {
                n.on("navigate", o)
            }, teardown: function () {
                n.off("navigate", o)
            }
        }, e.event.special.navigate = i = {
            bound: !1,
            pushStateEnabled: !0,
            originalEventName: t,
            isPushStateEnabled: function () {
                return e.support.pushState && e.mobile.pushStateEnabled === !0 && this.isHashChangeEnabled()
            },
            isHashChangeEnabled: function () {
                return e.mobile.hashListeningEnabled === !0
            },
            popstate: function (t) {
                var i = new e.Event("navigate"), o = new e.Event("beforenavigate"), s = t.originalEvent.state || {};
                o.originalEvent = t, n.trigger(o), o.isDefaultPrevented() || (t.historyState && e.extend(s, t.historyState), i.originalEvent = t, setTimeout(function () {
                    n.trigger(i, {state: s})
                }, 0))
            },
            hashchange: function (t) {
                var i = new e.Event("navigate"), o = new e.Event("beforenavigate");
                o.originalEvent = t, n.trigger(o), o.isDefaultPrevented() || (i.originalEvent = t, n.trigger(i, {state: t.hashchangeState || {}}))
            },
            setup: function () {
                i.bound || (i.bound = !0, i.isPushStateEnabled() ? (i.originalEventName = "popstate", n.bind("popstate.navigate", i.popstate)) : i.isHashChangeEnabled() && (i.originalEventName = "hashchange", n.bind("hashchange.navigate", i.hashchange)))
            }
        }
    }(e), function (e, i) {
        var n, o, s = "&ui-state=dialog";
        e.mobile.path = n = {
            uiStateKey: "&ui-state",
            urlParseRE: /^\s*(((([^:\/#\?]+:)?(?:(\/\/)((?:(([^:@\/#\?]+)(?:\:([^:@\/#\?]+))?)@)?(([^:\/#\?\]\[]+|\[[^\/\]@#?]+\])(?:\:([0-9]+))?))?)?)?((\/?(?:[^\/\?#]+\/+)*)([^\?#]*)))?(\?[^#]+)?)(#.*)?/,
            getLocation: function (e) {
                var t = this.parseUrl(e || location.href), i = e ? t : location, n = t.hash;
                return n = "#" === n ? "" : n, i.protocol + t.doubleSlash + i.host + ("" !== i.protocol && "/" !== i.pathname.substring(0, 1) ? "/" : "") + i.pathname + i.search + n
            },
            getDocumentUrl: function (t) {
                return t ? e.extend({}, n.documentUrl) : n.documentUrl.href
            },
            parseLocation: function () {
                return this.parseUrl(this.getLocation())
            },
            parseUrl: function (t) {
                if ("object" === e.type(t))return t;
                var i = n.urlParseRE.exec(t || "") || [];
                return {
                    href: i[0] || "",
                    hrefNoHash: i[1] || "",
                    hrefNoSearch: i[2] || "",
                    domain: i[3] || "",
                    protocol: i[4] || "",
                    doubleSlash: i[5] || "",
                    authority: i[6] || "",
                    username: i[8] || "",
                    password: i[9] || "",
                    host: i[10] || "",
                    hostname: i[11] || "",
                    port: i[12] || "",
                    pathname: i[13] || "",
                    directory: i[14] || "",
                    filename: i[15] || "",
                    search: i[16] || "",
                    hash: i[17] || ""
                }
            },
            makePathAbsolute: function (e, t) {
                var i, n, o, s;
                if (e && "/" === e.charAt(0))return e;
                for (e = e || "", t = t ? t.replace(/^\/|(\/[^\/]*|[^\/]+)$/g, "") : "", i = t ? t.split("/") : [], n = e.split("/"), o = 0; o < n.length; o++)switch (s = n[o]) {
                    case".":
                        break;
                    case"..":
                        i.length && i.pop();
                        break;
                    default:
                        i.push(s)
                }
                return "/" + i.join("/")
            },
            isSameDomain: function (e, t) {
                return n.parseUrl(e).domain.toLowerCase() === n.parseUrl(t).domain.toLowerCase()
            },
            isRelativeUrl: function (e) {
                return "" === n.parseUrl(e).protocol
            },
            isAbsoluteUrl: function (e) {
                return "" !== n.parseUrl(e).protocol
            },
            makeUrlAbsolute: function (e, t) {
                if (!n.isRelativeUrl(e))return e;
                t === i && (t = this.documentBase);
                var o = n.parseUrl(e), s = n.parseUrl(t), a = o.protocol || s.protocol, r = o.protocol ? o.doubleSlash : o.doubleSlash || s.doubleSlash, l = o.authority || s.authority, c = "" !== o.pathname, h = n.makePathAbsolute(o.pathname || s.filename, s.pathname), u = o.search || !c && s.search || "", d = o.hash;
                return a + r + l + h + u + d
            },
            addSearchParams: function (t, i) {
                var o = n.parseUrl(t), s = "object" == typeof i ? e.param(i) : i, a = o.search || "?";
                return o.hrefNoSearch + a + ("?" !== a.charAt(a.length - 1) ? "&" : "") + s + (o.hash || "")
            },
            convertUrlToDataUrl: function (e) {
                var i = e, o = n.parseUrl(e);
                return n.isEmbeddedPage(o) ? i = o.hash.split(s)[0].replace(/^#/, "").replace(/\?.*$/, "") : n.isSameDomain(o, this.documentBase) && (i = o.hrefNoHash.replace(this.documentBase.domain, "").split(s)[0]), t.decodeURIComponent(i)
            },
            get: function (e) {
                return e === i && (e = n.parseLocation().hash), n.stripHash(e).replace(/[^\/]*\.[^\/*]+$/, "")
            },
            set: function (e) {
                location.hash = e
            },
            isPath: function (e) {
                return /\//.test(e)
            },
            clean: function (e) {
                return e.replace(this.documentBase.domain, "")
            },
            stripHash: function (e) {
                return e.replace(/^#/, "")
            },
            stripQueryParams: function (e) {
                return e.replace(/\?.*$/, "")
            },
            cleanHash: function (e) {
                return n.stripHash(e.replace(/\?.*$/, "").replace(s, ""))
            },
            isHashValid: function (e) {
                return /^#[^#]+$/.test(e)
            },
            isExternal: function (e) {
                var t = n.parseUrl(e);
                return !(!t.protocol || t.domain.toLowerCase() === this.documentUrl.domain.toLowerCase())
            },
            hasProtocol: function (e) {
                return /^(:?\w+:)/.test(e)
            },
            isEmbeddedPage: function (e) {
                var t = n.parseUrl(e);
                return "" !== t.protocol ? !this.isPath(t.hash) && t.hash && (t.hrefNoHash === this.documentUrl.hrefNoHash || this.documentBaseDiffers && t.hrefNoHash === this.documentBase.hrefNoHash) : /^#/.test(t.href)
            },
            squash: function (e, t) {
                var i, o, s, a, r, l = this.isPath(e), c = this.parseUrl(e), h = c.hash, u = "";
                return t || (l ? t = n.getLocation() : (r = n.getDocumentUrl(!0), t = n.isPath(r.hash) ? n.squash(r.href) : r.href)), o = l ? n.stripHash(e) : e, o = n.isPath(c.hash) ? n.stripHash(c.hash) : o, a = o.indexOf(this.uiStateKey), a > -1 && (u = o.slice(a), o = o.slice(0, a)), i = n.makeUrlAbsolute(o, t), s = this.parseUrl(i).search, l ? ((n.isPath(h) || 0 === h.replace("#", "").indexOf(this.uiStateKey)) && (h = ""), u && -1 === h.indexOf(this.uiStateKey) && (h += u), -1 === h.indexOf("#") && "" !== h && (h = "#" + h), i = n.parseUrl(i), i = i.protocol + i.doubleSlash + i.host + i.pathname + s + h) : i += i.indexOf("#") > -1 ? u : "#" + u, i
            },
            isPreservableHash: function (e) {
                return 0 === e.replace("#", "").indexOf(this.uiStateKey)
            },
            hashToSelector: function (e) {
                var t = "#" === e.substring(0, 1);
                return t && (e = e.substring(1)), (t ? "#" : "") + e.replace(/([!"#$%&'()*+,./:;<=>?@[\]^`{|}~])/g, "\\$1")
            },
            getFilePath: function (e) {
                return e && e.split(s)[0]
            },
            isFirstPageUrl: function (t) {
                var o = n.parseUrl(n.makeUrlAbsolute(t, this.documentBase)), s = o.hrefNoHash === this.documentUrl.hrefNoHash || this.documentBaseDiffers && o.hrefNoHash === this.documentBase.hrefNoHash, a = e.mobile.firstPage, r = a && a[0] ? a[0].id : i;
                return s && (!o.hash || "#" === o.hash || r && o.hash.replace(/^#/, "") === r)
            },
            isPermittedCrossDomainRequest: function (t, i) {
                return e.mobile.allowCrossDomainPages && ("file:" === t.protocol || "content:" === t.protocol) && -1 !== i.search(/^https?:/)
            }
        }, n.documentUrl = n.parseLocation(), o = e("head").find("base"), n.documentBase = o.length ? n.parseUrl(n.makeUrlAbsolute(o.attr("href"), n.documentUrl.href)) : n.documentUrl, n.documentBaseDiffers = n.documentUrl.hrefNoHash !== n.documentBase.hrefNoHash, n.getDocumentBase = function (t) {
            return t ? e.extend({}, n.documentBase) : n.documentBase.href
        }, e.extend(e.mobile, {getDocumentUrl: n.getDocumentUrl, getDocumentBase: n.getDocumentBase})
    }(e), function (e, t) {
        e.mobile.History = function (e, t) {
            this.stack = e || [], this.activeIndex = t || 0
        }, e.extend(e.mobile.History.prototype, {
            getActive: function () {
                return this.stack[this.activeIndex]
            }, getLast: function () {
                return this.stack[this.previousIndex]
            }, getNext: function () {
                return this.stack[this.activeIndex + 1]
            }, getPrev: function () {
                return this.stack[this.activeIndex - 1]
            }, add: function (e, t) {
                t = t || {}, this.getNext() && this.clearForward(), t.hash && -1 === t.hash.indexOf("#") && (t.hash = "#" + t.hash), t.url = e, this.stack.push(t), this.activeIndex = this.stack.length - 1
            }, clearForward: function () {
                this.stack = this.stack.slice(0, this.activeIndex + 1)
            }, find: function (e, t, i) {
                t = t || this.stack;
                var n, o, s, a = t.length;
                for (o = 0; a > o; o++)if (n = t[o], (decodeURIComponent(e) === decodeURIComponent(n.url) || decodeURIComponent(e) === decodeURIComponent(n.hash)) && (s = o, i))return s;
                return s
            }, closest: function (e) {
                var i, n = this.activeIndex;
                return i = this.find(e, this.stack.slice(0, n)), i === t && (i = this.find(e, this.stack.slice(n), !0), i = i === t ? i : i + n), i
            }, direct: function (i) {
                var n = this.closest(i.url), o = this.activeIndex;
                n !== t && (this.activeIndex = n, this.previousIndex = o), o > n ? (i.present || i.back || e.noop)(this.getActive(), "back") : n > o ? (i.present || i.forward || e.noop)(this.getActive(), "forward") : n === t && i.missing && i.missing(this.getActive())
            }
        })
    }(e), function (e) {
        var n = e.mobile.path, o = location.href;
        e.mobile.Navigator = function (t) {
            this.history = t, this.ignoreInitialHashChange = !0, e.mobile.window.bind({
                "popstate.history": e.proxy(this.popstate, this),
                "hashchange.history": e.proxy(this.hashchange, this)
            })
        }, e.extend(e.mobile.Navigator.prototype, {
            squash: function (o, s) {
                var a, r, l = n.isPath(o) ? n.stripHash(o) : o;
                return r = n.squash(o), a = e.extend({
                    hash: l,
                    url: r
                }, s), t.history.replaceState(a, a.title || i.title, r), a
            }, hash: function (e, t) {
                var i, o, s, a;
                return i = n.parseUrl(e), o = n.parseLocation(), o.pathname + o.search === i.pathname + i.search ? s = i.hash ? i.hash : i.pathname + i.search : n.isPath(e) ? (a = n.parseUrl(t), s = a.pathname + a.search + (n.isPreservableHash(a.hash) ? a.hash.replace("#", "") : "")) : s = e, s
            }, go: function (o, s, a) {
                var r, l, c, h, u = e.event.special.navigate.isPushStateEnabled();
                l = n.squash(o), c = this.hash(o, l), a && c !== n.stripHash(n.parseLocation().hash) && (this.preventNextHashChange = a), this.preventHashAssignPopState = !0, t.location.hash = c, this.preventHashAssignPopState = !1, r = e.extend({
                    url: l,
                    hash: c,
                    title: i.title
                }, s), u && (h = new e.Event("popstate"), h.originalEvent = {
                    type: "popstate",
                    state: null
                }, this.squash(o, r), a || (this.ignorePopState = !0, e.mobile.window.trigger(h))), this.history.add(r.url, r)
            }, popstate: function (t) {
                var i, s;
                return e.event.special.navigate.isPushStateEnabled() ? this.preventHashAssignPopState ? (this.preventHashAssignPopState = !1, void t.stopImmediatePropagation()) : this.ignorePopState ? void(this.ignorePopState = !1) : !t.originalEvent.state && 1 === this.history.stack.length && this.ignoreInitialHashChange && (this.ignoreInitialHashChange = !1, location.href === o) ? void t.preventDefault() : (i = n.parseLocation().hash, !t.originalEvent.state && i ? (s = this.squash(i), this.history.add(s.url, s), void(t.historyState = s)) : void this.history.direct({
                    url: (t.originalEvent.state || {}).url || i,
                    present: function (i, n) {
                        t.historyState = e.extend({}, i), t.historyState.direction = n
                    }
                })) : void 0
            }, hashchange: function (t) {
                var o, s;
                if (e.event.special.navigate.isHashChangeEnabled() && !e.event.special.navigate.isPushStateEnabled()) {
                    if (this.preventNextHashChange)return this.preventNextHashChange = !1, void t.stopImmediatePropagation();
                    o = this.history, s = n.parseLocation().hash, this.history.direct({
                        url: s, present: function (i, n) {
                            t.hashchangeState = e.extend({}, i), t.hashchangeState.direction = n
                        }, missing: function () {
                            o.add(s, {hash: s, title: i.title})
                        }
                    })
                }
            }
        })
    }(e), function (e) {
        e.mobile.navigate = function (t, i, n) {
            e.mobile.navigate.navigator.go(t, i, n)
        }, e.mobile.navigate.history = new e.mobile.History, e.mobile.navigate.navigator = new e.mobile.Navigator(e.mobile.navigate.history);
        var t = e.mobile.path.parseLocation();
        e.mobile.navigate.history.add(t.href, {hash: t.hash})
    }(e), function (e, t) {
        var n = {animation: {}, transition: {}}, o = i.createElement("a"), s = ["", "webkit-", "moz-", "o-"];
        e.each(["animation", "transition"], function (i, a) {
            var r = 0 === i ? a + "-name" : a;
            e.each(s, function (i, s) {
                return o.style[e.camelCase(s + r)] !== t ? (n[a].prefix = s, !1) : void 0
            }), n[a].duration = e.camelCase(n[a].prefix + a + "-duration"), n[a].event = e.camelCase(n[a].prefix + a + "-end"), "" === n[a].prefix && (n[a].event = n[a].event.toLowerCase())
        }), e.support.cssTransitions = n.transition.prefix !== t, e.support.cssAnimations = n.animation.prefix !== t, e(o).remove(), e.fn.animationComplete = function (o, s, a) {
            var r, l, c = this, h = function () {
                clearTimeout(r), o.apply(this, arguments)
            }, u = s && "animation" !== s ? "transition" : "animation";
            return e.support.cssTransitions && "transition" === u || e.support.cssAnimations && "animation" === u ? (a === t && (e(this).context !== i && (l = 3e3 * parseFloat(e(this).css(n[u].duration))), (0 === l || l === t || isNaN(l)) && (l = e.fn.animationComplete.defaultDuration)), r = setTimeout(function () {
                e(c).off(n[u].event, h), o.apply(c)
            }, l), e(this).one(n[u].event, h)) : (setTimeout(e.proxy(o, this), 0), e(this))
        }, e.fn.animationComplete.defaultDuration = 1e3
    }(e), function (e, t, i, n) {
        function o(e) {
            for (; e && "undefined" != typeof e.originalEvent;)e = e.originalEvent;
            return e
        }

        function s(t, i) {
            var s, a, r, l, c, h, u, d, p, f = t.type;
            if (t = e.Event(t), t.type = i, s = t.originalEvent, a = e.event.props, f.search(/^(mouse|click)/) > -1 && (a = A), s)for (u = a.length, l; u;)l = a[--u], t[l] = s[l];
            if (f.search(/mouse(down|up)|click/) > -1 && !t.which && (t.which = 1), -1 !== f.search(/^touch/) && (r = o(s), f = r.touches, c = r.changedTouches, h = f && f.length ? f[0] : c && c.length ? c[0] : n))for (d = 0, p = D.length; p > d; d++)l = D[d], t[l] = h[l];
            return t
        }

        function a(t) {
            for (var i, n, o = {}; t;) {
                i = e.data(t, S);
                for (n in i)i[n] && (o[n] = o.hasVirtualBinding = !0);
                t = t.parentNode
            }
            return o
        }

        function r(t, i) {
            for (var n; t;) {
                if (n = e.data(t, S), n && (!i || n[i]))return t;
                t = t.parentNode
            }
            return null
        }

        function l() {
            q = !1
        }

        function c() {
            q = !0
        }

        function h() {
            M = 0, B.length = 0, H = !1, c()
        }

        function u() {
            l()
        }

        function d() {
            p(), N = setTimeout(function () {
                N = 0, h()
            }, e.vmouse.resetTimerDuration)
        }

        function p() {
            N && (clearTimeout(N), N = 0)
        }

        function f(t, i, n) {
            var o;
            return (n && n[t] || !n && r(i.target, t)) && (o = s(i, t), e(i.target).trigger(o)), o
        }

        function m(t) {
            var i, n = e.data(t.target, k);
            H || M && M === n || (i = f("v" + t.type, t), i && (i.isDefaultPrevented() && t.preventDefault(), i.isPropagationStopped() && t.stopPropagation(), i.isImmediatePropagationStopped() && t.stopImmediatePropagation()))
        }

        function g(t) {
            var i, n, s, r = o(t).touches;
            r && 1 === r.length && (i = t.target, n = a(i), n.hasVirtualBinding && (M = $++, e.data(i, k, M), p(), u(), j = !1, s = o(t).touches[0], O = s.pageX, L = s.pageY, f("vmouseover", t, n), f("vmousedown", t, n)))
        }

        function b(e) {
            q || (j || f("vmousecancel", e, a(e.target)), j = !0, d())
        }

        function v(t) {
            if (!q) {
                var i = o(t).touches[0], n = j, s = e.vmouse.moveDistanceThreshold, r = a(t.target);
                j = j || Math.abs(i.pageX - O) > s || Math.abs(i.pageY - L) > s, j && !n && f("vmousecancel", t, r), f("vmousemove", t, r), d()
            }
        }

        function _(e) {
            if (!q) {
                c();
                var t, i, n = a(e.target);
                f("vmouseup", e, n), j || (t = f("vclick", e, n), t && t.isDefaultPrevented() && (i = o(e).changedTouches[0], B.push({
                    touchID: M,
                    x: i.clientX,
                    y: i.clientY
                }), H = !0)), f("vmouseout", e, n), j = !1, d()
            }
        }

        function y(t) {
            var i, n = e.data(t, S);
            if (n)for (i in n)if (n[i])return !0;
            return !1
        }

        function x() {
        }

        function w(t) {
            var i = t.substr(1);
            return {
                setup: function () {
                    y(this) || e.data(this, S, {});
                    var n = e.data(this, S);
                    n[t] = !0, I[t] = (I[t] || 0) + 1, 1 === I[t] && W.bind(i, m), e(this).bind(i, x), F && (I.touchstart = (I.touchstart || 0) + 1, 1 === I.touchstart && W.bind("touchstart", g).bind("touchend", _).bind("touchmove", v).bind("scroll", b))
                }, teardown: function () {
                    --I[t], I[t] || W.unbind(i, m), F && (--I.touchstart, I.touchstart || W.unbind("touchstart", g).unbind("touchmove", v).unbind("touchend", _).unbind("scroll", b));
                    var n = e(this), o = e.data(this, S);
                    o && (o[t] = !1), n.unbind(i, x), y(this) || n.removeData(S)
                }
            }
        }

        var C, T, S = "virtualMouseBindings", k = "virtualTouchID", P = "vmouseover vmousedown vmousemove vmouseup vclick vmouseout vmousecancel".split(" "), D = "clientX clientY pageX pageY screenX screenY".split(" "), E = e.event.mouseHooks ? e.event.mouseHooks.props : [], A = e.event.props.concat(E), I = {}, N = 0, O = 0, L = 0, j = !1, B = [], H = !1, q = !1, F = "addEventListener"in i, W = e(i), $ = 1, M = 0;
        for (e.vmouse = {
            moveDistanceThreshold: 10,
            clickDistanceThreshold: 10,
            resetTimerDuration: 1500
        }, T = 0; T < P.length; T++)e.event.special[P[T]] = w(P[T]);
        F && i.addEventListener("click", function (t) {
            var i, n, o, s, a, r, l = B.length, c = t.target;
            if (l)for (i = t.clientX, n = t.clientY, C = e.vmouse.clickDistanceThreshold, o = c; o;) {
                for (s = 0; l > s; s++)if (a = B[s], r = 0, o === c && Math.abs(a.x - i) < C && Math.abs(a.y - n) < C || e.data(o, k) === a.touchID)return t.preventDefault(), void t.stopPropagation();
                o = o.parentNode
            }
        }, !0)
    }(e, t, i), function (e, t, n) {
        function o(t, i, o, s) {
            var a = o.type;
            o.type = i, s ? e.event.trigger(o, n, t) : e.event.dispatch.call(t, o), o.type = a
        }

        var s = e(i), a = e.mobile.support.touch, r = "touchmove scroll", l = a ? "touchstart" : "mousedown", c = a ? "touchend" : "mouseup", h = a ? "touchmove" : "mousemove";
        e.each("touchstart touchmove touchend tap taphold swipe swipeleft swiperight scrollstart scrollstop".split(" "), function (t, i) {
            e.fn[i] = function (e) {
                return e ? this.bind(i, e) : this.trigger(i)
            }, e.attrFn && (e.attrFn[i] = !0)
        }), e.event.special.scrollstart = {
            enabled: !0, setup: function () {
                function t(e, t) {
                    i = t, o(s, i ? "scrollstart" : "scrollstop", e)
                }

                var i, n, s = this, a = e(s);
                a.bind(r, function (o) {
                    e.event.special.scrollstart.enabled && (i || t(o, !0), clearTimeout(n), n = setTimeout(function () {
                        t(o, !1)
                    }, 50))
                })
            }, teardown: function () {
                e(this).unbind(r)
            }
        }, e.event.special.tap = {
            tapholdThreshold: 750, emitTapOnTaphold: !0, setup: function () {
                var t = this, i = e(t), n = !1;
                i.bind("vmousedown", function (a) {
                    function r() {
                        clearTimeout(h)
                    }

                    function l() {
                        r(), i.unbind("vclick", c).unbind("vmouseup", r), s.unbind("vmousecancel", l)
                    }

                    function c(e) {
                        l(), n || u !== e.target ? n && e.preventDefault() : o(t, "tap", e)
                    }

                    if (n = !1, a.which && 1 !== a.which)return !1;
                    var h, u = a.target;
                    i.bind("vmouseup", r).bind("vclick", c), s.bind("vmousecancel", l), h = setTimeout(function () {
                        e.event.special.tap.emitTapOnTaphold || (n = !0), o(t, "taphold", e.Event("taphold", {target: u}))
                    }, e.event.special.tap.tapholdThreshold)
                })
            }, teardown: function () {
                e(this).unbind("vmousedown").unbind("vclick").unbind("vmouseup"), s.unbind("vmousecancel")
            }
        }, e.event.special.swipe = {
            scrollSupressionThreshold: 30,
            durationThreshold: 1e3,
            horizontalDistanceThreshold: 30,
            verticalDistanceThreshold: 30,
            getLocation: function (e) {
                var i = t.pageXOffset, n = t.pageYOffset, o = e.clientX, s = e.clientY;
                return 0 === e.pageY && Math.floor(s) > Math.floor(e.pageY) || 0 === e.pageX && Math.floor(o) > Math.floor(e.pageX) ? (o -= i, s -= n) : (s < e.pageY - n || o < e.pageX - i) && (o = e.pageX - i, s = e.pageY - n), {
                    x: o,
                    y: s
                }
            },
            start: function (t) {
                var i = t.originalEvent.touches ? t.originalEvent.touches[0] : t, n = e.event.special.swipe.getLocation(i);
                return {time: (new Date).getTime(), coords: [n.x, n.y], origin: e(t.target)}
            },
            stop: function (t) {
                var i = t.originalEvent.touches ? t.originalEvent.touches[0] : t, n = e.event.special.swipe.getLocation(i);
                return {time: (new Date).getTime(), coords: [n.x, n.y]}
            },
            handleSwipe: function (t, i, n, s) {
                if (i.time - t.time < e.event.special.swipe.durationThreshold && Math.abs(t.coords[0] - i.coords[0]) > e.event.special.swipe.horizontalDistanceThreshold && Math.abs(t.coords[1] - i.coords[1]) < e.event.special.swipe.verticalDistanceThreshold) {
                    var a = t.coords[0] > i.coords[0] ? "swipeleft" : "swiperight";
                    return o(n, "swipe", e.Event("swipe", {
                        target: s,
                        swipestart: t,
                        swipestop: i
                    }), !0), o(n, a, e.Event(a, {target: s, swipestart: t, swipestop: i}), !0), !0
                }
                return !1
            },
            eventInProgress: !1,
            setup: function () {
                var t, i = this, n = e(i), o = {};
                t = e.data(this, "mobile-events"), t || (t = {length: 0}, e.data(this, "mobile-events", t)), t.length++, t.swipe = o, o.start = function (t) {
                    if (!e.event.special.swipe.eventInProgress) {
                        e.event.special.swipe.eventInProgress = !0;
                        var n, a = e.event.special.swipe.start(t), r = t.target, l = !1;
                        o.move = function (t) {
                            a && !t.isDefaultPrevented() && (n = e.event.special.swipe.stop(t), l || (l = e.event.special.swipe.handleSwipe(a, n, i, r), l && (e.event.special.swipe.eventInProgress = !1)), Math.abs(a.coords[0] - n.coords[0]) > e.event.special.swipe.scrollSupressionThreshold && t.preventDefault())
                        }, o.stop = function () {
                            l = !0, e.event.special.swipe.eventInProgress = !1, s.off(h, o.move), o.move = null
                        }, s.on(h, o.move).one(c, o.stop)
                    }
                }, n.on(l, o.start)
            },
            teardown: function () {
                var t, i;
                t = e.data(this, "mobile-events"), t && (i = t.swipe, delete t.swipe, t.length--, 0 === t.length && e.removeData(this, "mobile-events")), i && (i.start && e(this).off(l, i.start), i.move && s.off(h, i.move), i.stop && s.off(c, i.stop))
            }
        }, e.each({
            scrollstop: "scrollstart",
            taphold: "tap",
            swipeleft: "swipe.left",
            swiperight: "swipe.right"
        }, function (t, i) {
            e.event.special[t] = {
                setup: function () {
                    e(this).bind(i, e.noop)
                }, teardown: function () {
                    e(this).unbind(i)
                }
            }
        })
    }(e, this), function (e) {
        e.event.special.throttledresize = {
            setup: function () {
                e(this).bind("resize", s)
            }, teardown: function () {
                e(this).unbind("resize", s)
            }
        };
        var t, i, n, o = 250, s = function () {
            i = (new Date).getTime(), n = i - a, n >= o ? (a = i, e(this).trigger("throttledresize")) : (t && clearTimeout(t), t = setTimeout(s, o - n))
        }, a = 0
    }(e), function (e, t) {
        function n() {
            var e = o();
            e !== s && (s = e, u.trigger(d))
        }

        var o, s, a, r, l, c, h, u = e(t), d = "orientationchange", p = {0: !0, 180: !0};
        e.support.orientation && (l = t.innerWidth || u.width(), c = t.innerHeight || u.height(), h = 50, a = l > c && l - c > h, r = p[t.orientation], (a && r || !a && !r) && (p = {
            "-90": !0,
            90: !0
        })), e.event.special.orientationchange = e.extend({}, e.event.special.orientationchange, {
            setup: function () {
                return e.support.orientation && !e.event.special.orientationchange.disabled ? !1 : (s = o(), void u.bind("throttledresize", n))
            }, teardown: function () {
                return e.support.orientation && !e.event.special.orientationchange.disabled ? !1 : void u.unbind("throttledresize", n)
            }, add: function (e) {
                var t = e.handler;
                e.handler = function (e) {
                    return e.orientation = o(), t.apply(this, arguments)
                }
            }
        }), e.event.special.orientationchange.orientation = o = function () {
            var n = !0, o = i.documentElement;
            return n = e.support.orientation ? p[t.orientation] : o && o.clientWidth / o.clientHeight < 1.1, n ? "portrait" : "landscape"
        }, e.fn[d] = function (e) {
            return e ? this.bind(d, e) : this.trigger(d)
        }, e.attrFn && (e.attrFn[d] = !0)
    }(e, this), function (e) {
        var t = e("head").children("base"), i = {
            element: t.length ? t : e("<base>", {href: e.mobile.path.documentBase.hrefNoHash}).prependTo(e("head")),
            linkSelector: "[src], link[href], a[rel='external'], :jqmData(ajax='false'), a[target]",
            set: function (t) {
                e.mobile.dynamicBaseEnabled && e.support.dynamicBaseTag && i.element.attr("href", e.mobile.path.makeUrlAbsolute(t, e.mobile.path.documentBase))
            },
            rewrite: function (t, n) {
                var o = e.mobile.path.get(t);
                n.find(i.linkSelector).each(function (t, i) {
                    var n = e(i).is("[href]") ? "href" : e(i).is("[src]") ? "src" : "action", s = e.mobile.path.parseLocation(), a = e(i).attr(n);
                    a = a.replace(s.protocol + s.doubleSlash + s.host + s.pathname, ""), /^(\w+:|#|\/)/.test(a) || e(i).attr(n, o + a)
                })
            },
            reset: function () {
                i.element.attr("href", e.mobile.path.documentBase.hrefNoSearch)
            }
        };
        e.mobile.base = i
    }(e), function (e, t) {
        e.mobile.widgets = {};
        var i = e.widget, n = e.mobile.keepNative;
        e.widget = function (i) {
            return function () {
                var n = i.apply(this, arguments), o = n.prototype.widgetName;
                return n.initSelector = n.prototype.initSelector !== t ? n.prototype.initSelector : ":jqmData(role='" + o + "')", e.mobile.widgets[o] = n, n
            }
        }(e.widget), e.extend(e.widget, i), e.mobile.document.on("create", function (t) {
            e(t.target).enhanceWithin()
        }), e.widget("mobile.page", {
            options: {
                theme: "a",
                domCache: !1,
                keepNativeDefault: e.mobile.keepNative,
                contentTheme: null,
                enhanced: !1
            }, _createWidget: function () {
                e.Widget.prototype._createWidget.apply(this, arguments), this._trigger("init")
            }, _create: function () {
                return this._trigger("beforecreate") === !1 ? !1 : (this.options.enhanced || this._enhance(), this._on(this.element, {
                    pagebeforehide: "removeContainerBackground",
                    pagebeforeshow: "_handlePageBeforeShow"
                }), this.element.enhanceWithin(), void("dialog" === e.mobile.getAttribute(this.element[0], "role") && e.mobile.dialog && this.element.dialog()))
            }, _enhance: function () {
                var i = "data-" + e.mobile.ns, n = this;
                this.options.role && this.element.attr("data-" + e.mobile.ns + "role", this.options.role), this.element.attr("tabindex", "0").addClass("ui-page ui-page-theme-" + this.options.theme), this.element.find("[" + i + "role='content']").each(function () {
                    var o = e(this), s = this.getAttribute(i + "theme") || t;
                    n.options.contentTheme = s || n.options.contentTheme || n.options.dialog && n.options.theme || "dialog" === n.element.jqmData("role") && n.options.theme, o.addClass("ui-content"), n.options.contentTheme && o.addClass("ui-body-" + n.options.contentTheme), o.attr("role", "main").addClass("ui-content")
                })
            }, bindRemove: function (t) {
                var i = this.element;
                !i.data("mobile-page").options.domCache && i.is(":jqmData(external-page='true')") && i.bind("pagehide.remove", t || function (t, i) {
                        if (!i.samePage) {
                            var n = e(this), o = new e.Event("pageremove");
                            n.trigger(o), o.isDefaultPrevented() || n.removeWithDependents()
                        }
                    })
            }, _setOptions: function (i) {
                i.theme !== t && this.element.removeClass("ui-page-theme-" + this.options.theme).addClass("ui-page-theme-" + i.theme), i.contentTheme !== t && this.element.find("[data-" + e.mobile.ns + "='content']").removeClass("ui-body-" + this.options.contentTheme).addClass("ui-body-" + i.contentTheme)
            }, _handlePageBeforeShow: function () {
                this.setContainerBackground()
            }, removeContainerBackground: function () {
                this.element.closest(":mobile-pagecontainer").pagecontainer({theme: "none"})
            }, setContainerBackground: function (e) {
                this.element.parent().pagecontainer({theme: e || this.options.theme})
            }, keepNativeSelector: function () {
                var t = this.options, i = e.trim(t.keepNative || ""), o = e.trim(e.mobile.keepNative), s = e.trim(t.keepNativeDefault), a = n === o ? "" : o, r = "" === a ? s : "";
                return (i ? [i] : []).concat(a ? [a] : []).concat(r ? [r] : []).join(", ")
            }
        })
    }(e), function (e, n) {
        e.widget("mobile.pagecontainer", {
            options: {theme: "a"},
            initSelector: !1,
            _create: function () {
                this._trigger("beforecreate"), this.setLastScrollEnabled = !0, this._on(this.window, {
                    navigate: "_disableRecordScroll",
                    scrollstop: "_delayedRecordScroll"
                }), this._on(this.window, {navigate: "_filterNavigateEvents"}), this._on({pagechange: "_afterContentChange"}), this.window.one("navigate", e.proxy(function () {
                    this.setLastScrollEnabled = !0
                }, this))
            },
            _setOptions: function (e) {
                e.theme !== n && "none" !== e.theme ? this.element.removeClass("ui-overlay-" + this.options.theme).addClass("ui-overlay-" + e.theme) : e.theme !== n && this.element.removeClass("ui-overlay-" + this.options.theme), this._super(e)
            },
            _disableRecordScroll: function () {
                this.setLastScrollEnabled = !1
            },
            _enableRecordScroll: function () {
                this.setLastScrollEnabled = !0
            },
            _afterContentChange: function () {
                this.setLastScrollEnabled = !0, this._off(this.window, "scrollstop"), this._on(this.window, {scrollstop: "_delayedRecordScroll"})
            },
            _recordScroll: function () {
                if (this.setLastScrollEnabled) {
                    var e, t, i, n = this._getActiveHistory();
                    n && (e = this._getScroll(), t = this._getMinScroll(), i = this._getDefaultScroll(), n.lastScroll = t > e ? i : e)
                }
            },
            _delayedRecordScroll: function () {
                setTimeout(e.proxy(this, "_recordScroll"), 100)
            },
            _getScroll: function () {
                return this.window.scrollTop()
            },
            _getMinScroll: function () {
                return e.mobile.minScrollBack
            },
            _getDefaultScroll: function () {
                return e.mobile.defaultHomeScroll
            },
            _filterNavigateEvents: function (t, i) {
                var n;
                t.originalEvent && t.originalEvent.isDefaultPrevented() || (n = t.originalEvent.type.indexOf("hashchange") > -1 ? i.state.hash : i.state.url, n || (n = this._getHash()), n && "#" !== n && 0 !== n.indexOf("#" + e.mobile.path.uiStateKey) || (n = location.href), this._handleNavigate(n, i.state))
            },
            _getHash: function () {
                return e.mobile.path.parseLocation().hash
            },
            getActivePage: function () {
                return this.activePage
            },
            _getInitialContent: function () {
                return e.mobile.firstPage
            },
            _getHistory: function () {
                return e.mobile.navigate.history
            },
            _getActiveHistory: function () {
                return this._getHistory().getActive()
            },
            _getDocumentBase: function () {
                return e.mobile.path.documentBase
            },
            back: function () {
                this.go(-1)
            },
            forward: function () {
                this.go(1)
            },
            go: function (i) {
                if (e.mobile.hashListeningEnabled)t.history.go(i); else {
                    var n = e.mobile.navigate.history.activeIndex, o = n + parseInt(i, 10), s = e.mobile.navigate.history.stack[o].url, a = i >= 1 ? "forward" : "back";
                    e.mobile.navigate.history.activeIndex = o, e.mobile.navigate.history.previousIndex = n, this.change(s, {
                        direction: a,
                        changeHash: !1,
                        fromHashChange: !0
                    })
                }
            },
            _handleDestination: function (t) {
                var i;
                return "string" === e.type(t) && (t = e.mobile.path.stripHash(t)), t && (i = this._getHistory(), t = e.mobile.path.isPath(t) ? t : e.mobile.path.makeUrlAbsolute("#" + t, this._getDocumentBase())), t || this._getInitialContent()
            },
            _transitionFromHistory: function (e, t) {
                var i = this._getHistory(), n = "back" === e ? i.getLast() : i.getActive();
                return n && n.transition || t
            },
            _handleDialog: function (t, i) {
                var n, o, s = this.getActivePage();
                return s && !s.data("mobile-dialog") ? ("back" === i.direction ? this.back() : this.forward(), !1) : (n = i.pageUrl, o = this._getActiveHistory(), e.extend(t, {
                    role: o.role,
                    transition: this._transitionFromHistory(i.direction, t.transition),
                    reverse: "back" === i.direction
                }), n)
            },
            _handleNavigate: function (t, i) {
                var n = e.mobile.path.stripHash(t), o = this._getHistory(), s = 0 === o.stack.length ? "none" : this._transitionFromHistory(i.direction), a = {
                    changeHash: !1,
                    fromHashChange: !0,
                    reverse: "back" === i.direction
                };
                e.extend(a, i, {transition: s}), o.activeIndex > 0 && n.indexOf(e.mobile.dialogHashKey) > -1 && (n = this._handleDialog(a, i), n === !1) || this._changeContent(this._handleDestination(n), a)
            },
            _changeContent: function (t, i) {
                e.mobile.changePage(t, i)
            },
            _getBase: function () {
                return e.mobile.base
            },
            _getNs: function () {
                return e.mobile.ns
            },
            _enhance: function (e, t) {
                return e.page({role: t})
            },
            _include: function (e, t) {
                e.appendTo(this.element), this._enhance(e, t.role), e.page("bindRemove")
            },
            _find: function (t) {
                var i, n = this._createFileUrl(t), o = this._createDataUrl(t), s = this._getInitialContent();
                return i = this.element.children("[data-" + this._getNs() + "url='" + e.mobile.path.hashToSelector(o) + "']"), 0 === i.length && o && !e.mobile.path.isPath(o) && (i = this.element.children(e.mobile.path.hashToSelector("#" + o)).attr("data-" + this._getNs() + "url", o).jqmData("url", o)), 0 === i.length && e.mobile.path.isFirstPageUrl(n) && s && s.parent().length && (i = e(s)), i
            },
            _getLoader: function () {
                return e.mobile.loading()
            },
            _showLoading: function (t, i, n, o) {
                this._loadMsg || (this._loadMsg = setTimeout(e.proxy(function () {
                    this._getLoader().loader("show", i, n, o), this._loadMsg = 0
                }, this), t))
            },
            _hideLoading: function () {
                clearTimeout(this._loadMsg), this._loadMsg = 0, this._getLoader().loader("hide")
            },
            _showError: function () {
                this._hideLoading(), this._showLoading(0, e.mobile.pageLoadErrorMessageTheme, e.mobile.pageLoadErrorMessage, !0), setTimeout(e.proxy(this, "_hideLoading"), 1500)
            },
            _parse: function (t, i) {
                var n, o = e("<div></div>");
                return o.get(0).innerHTML = t, n = o.find(":jqmData(role='page'), :jqmData(role='dialog')").first(), n.length || (n = e("<div data-" + this._getNs() + "role='page'>" + (t.split(/<\/?body[^>]*>/gim)[1] || "") + "</div>")), n.attr("data-" + this._getNs() + "url", this._createDataUrl(i)).attr("data-" + this._getNs() + "external-page", !0), n
            },
            _setLoadedTitle: function (t, i) {
                var n = i.match(/<title[^>]*>([^<]*)/) && RegExp.$1;
                n && !t.jqmData("title") && (n = e("<div>" + n + "</div>").text(), t.jqmData("title", n))
            },
            _isRewritableBaseTag: function () {
                return e.mobile.dynamicBaseEnabled && !e.support.dynamicBaseTag
            },
            _createDataUrl: function (t) {
                return e.mobile.path.convertUrlToDataUrl(t)
            },
            _createFileUrl: function (t) {
                return e.mobile.path.getFilePath(t)
            },
            _triggerWithDeprecated: function (t, i, n) {
                var o = e.Event("page" + t), s = e.Event(this.widgetName + t);
                return (n || this.element).trigger(o, i), this._trigger(t, s, i), {deprecatedEvent: o, event: s}
            },
            _loadSuccess: function (t, i, o, s) {
                var a = this._createFileUrl(t);
                return e.proxy(function (r, l, c) {
                    var h, u = new RegExp("(<[^>]+\\bdata-" + this._getNs() + "role=[\"']?page[\"']?[^>]*>)"), d = new RegExp("\\bdata-" + this._getNs() + "url=[\"']?([^\"'>]*)[\"']?");
                    u.test(r) && RegExp.$1 && d.test(RegExp.$1) && RegExp.$1 && (a = e.mobile.path.getFilePath(e("<div>" + RegExp.$1 + "</div>").text()), a = this.window[0].encodeURIComponent(a)), o.prefetch === n && this._getBase().set(a), h = this._parse(r, a), this._setLoadedTitle(h, r), i.xhr = c, i.textStatus = l, i.page = h, i.content = h, i.toPage = h, this._triggerWithDeprecated("load", i).event.isDefaultPrevented() || (this._isRewritableBaseTag() && h && this._getBase().rewrite(a, h), this._include(h, o), o.showLoadMsg && this._hideLoading(), s.resolve(t, o, h))
                }, this)
            },
            _loadDefaults: {
                type: "get",
                data: n,
                reloadPage: !1,
                reload: !1,
                role: n,
                showLoadMsg: !1,
                loadMsgDelay: 50
            },
            load: function (t, i) {
                var o, s, a, r, l = i && i.deferred || e.Deferred(), c = i && i.reload === n && i.reloadPage !== n ? {reload: i.reloadPage} : {}, h = e.extend({}, this._loadDefaults, i, c), u = null, d = e.mobile.path.makeUrlAbsolute(t, this._findBaseWithDefault());
                return h.data && "get" === h.type && (d = e.mobile.path.addSearchParams(d, h.data), h.data = n), h.data && "post" === h.type && (h.reload = !0), o = this._createFileUrl(d), s = this._createDataUrl(d), u = this._find(d), 0 === u.length && e.mobile.path.isEmbeddedPage(o) && !e.mobile.path.isFirstPageUrl(o) ? (l.reject(d, h), l.promise()) : (this._getBase().reset(), u.length && !h.reload ? (this._enhance(u, h.role), l.resolve(d, h, u), h.prefetch || this._getBase().set(t), l.promise()) : (r = {
                    url: t,
                    absUrl: d,
                    toPage: t,
                    prevPage: i ? i.fromPage : n,
                    dataUrl: s,
                    deferred: l,
                    options: h
                }, a = this._triggerWithDeprecated("beforeload", r), a.deprecatedEvent.isDefaultPrevented() || a.event.isDefaultPrevented() ? l.promise() : (h.showLoadMsg && this._showLoading(h.loadMsgDelay), h.prefetch === n && this._getBase().reset(), e.mobile.allowCrossDomainPages || e.mobile.path.isSameDomain(e.mobile.path.documentUrl, d) ? (e.ajax({
                    url: o,
                    type: h.type,
                    data: h.data,
                    contentType: h.contentType,
                    dataType: "html",
                    success: this._loadSuccess(d, r, h, l),
                    error: this._loadError(d, r, h, l)
                }), l.promise()) : (l.reject(d, h), l.promise()))))
            },
            _loadError: function (t, i, n, o) {
                return e.proxy(function (s, a, r) {
                    this._getBase().set(e.mobile.path.get()), i.xhr = s, i.textStatus = a, i.errorThrown = r;
                    var l = this._triggerWithDeprecated("loadfailed", i);
                    l.deprecatedEvent.isDefaultPrevented() || l.event.isDefaultPrevented() || (n.showLoadMsg && this._showError(), o.reject(t, n))
                }, this)
            },
            _getTransitionHandler: function (t) {
                return t = e.mobile._maybeDegradeTransition(t), e.mobile.transitionHandlers[t] || e.mobile.defaultTransitionHandler
            },
            _triggerCssTransitionEvents: function (t, i, n) {
                var o = !1;
                n = n || "", i && (t[0] === i[0] && (o = !0), this._triggerWithDeprecated(n + "hide", {
                    nextPage: t,
                    toPage: t,
                    prevPage: i,
                    samePage: o
                }, i)), this._triggerWithDeprecated(n + "show", {prevPage: i || e(""), toPage: t}, t)
            },
            _cssTransition: function (t, i, n) {
                var o, s, a = n.transition, r = n.reverse, l = n.deferred;
                this._triggerCssTransitionEvents(t, i, "before"), this._hideLoading(), o = this._getTransitionHandler(a), s = new o(a, r, t, i).transition(), s.done(e.proxy(function () {
                    this._triggerCssTransitionEvents(t, i)
                }, this)), s.done(function () {
                    l.resolve.apply(l, arguments)
                })
            },
            _releaseTransitionLock: function () {
                s = !1, o.length > 0 && e.mobile.changePage.apply(null, o.pop())
            },
            _removeActiveLinkClass: function (t) {
                e.mobile.removeActiveLinkClass(t)
            },
            _loadUrl: function (t, i, n) {
                n.target = t, n.deferred = e.Deferred(), this.load(t, n), n.deferred.done(e.proxy(function (e, t, n) {
                    s = !1, t.absUrl = i.absUrl, this.transition(n, i, t)
                }, this)), n.deferred.fail(e.proxy(function () {
                    this._removeActiveLinkClass(!0), this._releaseTransitionLock(), this._triggerWithDeprecated("changefailed", i)
                }, this))
            },
            _triggerPageBeforeChange: function (t, i, n) {
                var o;
                return i.prevPage = this.activePage, e.extend(i, {
                    toPage: t,
                    options: n
                }), i.absUrl = "string" === e.type(t) ? e.mobile.path.makeUrlAbsolute(t, this._findBaseWithDefault()) : n.absUrl, o = this._triggerWithDeprecated("beforechange", i), o.event.isDefaultPrevented() || o.deprecatedEvent.isDefaultPrevented() ? !1 : !0
            },
            change: function (t, i) {
                if (s)return void o.unshift(arguments);
                var n = e.extend({}, e.mobile.changePage.defaults, i), a = {};
                n.fromPage = n.fromPage || this.activePage, this._triggerPageBeforeChange(t, a, n) && (t = a.toPage, "string" === e.type(t) ? (s = !0, this._loadUrl(t, a, n)) : this.transition(t, a, n))
            },
            transition: function (t, a, r) {
                var l, c, h, u, d, p, f, m, g, b, v, _, y, x;
                if (s)return void o.unshift([t, r]);
                if (this._triggerPageBeforeChange(t, a, r) && (a.prevPage = r.fromPage, x = this._triggerWithDeprecated("beforetransition", a), !x.deprecatedEvent.isDefaultPrevented() && !x.event.isDefaultPrevented())) {
                    if (s = !0, t[0] !== e.mobile.firstPage[0] || r.dataUrl || (r.dataUrl = e.mobile.path.documentUrl.hrefNoHash), l = r.fromPage, c = r.dataUrl && e.mobile.path.convertUrlToDataUrl(r.dataUrl) || t.jqmData("url"), h = c, u = e.mobile.path.getFilePath(c), d = e.mobile.navigate.history.getActive(), p = 0 === e.mobile.navigate.history.activeIndex, f = 0, m = i.title, g = ("dialog" === r.role || "dialog" === t.jqmData("role")) && t.jqmData("dialog") !== !0, l && l[0] === t[0] && !r.allowSamePageTransition)return s = !1, this._triggerWithDeprecated("transition", a), this._triggerWithDeprecated("change", a), void(r.fromHashChange && e.mobile.navigate.history.direct({url: c}));
                    t.page({role: r.role}), r.fromHashChange && (f = "back" === r.direction ? -1 : 1);
                    try {
                        i.activeElement && "body" !== i.activeElement.nodeName.toLowerCase() ? e(i.activeElement).blur() : e("input:focus, textarea:focus, select:focus").blur()
                    } catch (w) {
                    }
                    b = !1, g && d && (d.url && d.url.indexOf(e.mobile.dialogHashKey) > -1 && this.activePage && !this.activePage.hasClass("ui-dialog") && e.mobile.navigate.history.activeIndex > 0 && (r.changeHash = !1, b = !0), c = d.url || "", c += !b && c.indexOf("#") > -1 ? e.mobile.dialogHashKey : "#" + e.mobile.dialogHashKey), v = d ? t.jqmData("title") || t.children(":jqmData(role='header')").find(".ui-title").text() : m, v && m === i.title && (m = v), t.jqmData("title") || t.jqmData("title", m), r.transition = r.transition || (f && !p ? d.transition : n) || (g ? e.mobile.defaultDialogTransition : e.mobile.defaultPageTransition), !f && b && (e.mobile.navigate.history.getActive().pageUrl = h), c && !r.fromHashChange && (!e.mobile.path.isPath(c) && c.indexOf("#") < 0 && (c = "#" + c), _ = {
                        transition: r.transition,
                        title: m,
                        pageUrl: h,
                        role: r.role
                    }, r.changeHash !== !1 && e.mobile.hashListeningEnabled ? e.mobile.navigate(this.window[0].encodeURI(c), _, !0) : t[0] !== e.mobile.firstPage[0] && e.mobile.navigate.history.add(c, _)), i.title = m, e.mobile.activePage = t, this.activePage = t, r.reverse = r.reverse || 0 > f, y = e.Deferred(), this._cssTransition(t, l, {
                        transition: r.transition,
                        reverse: r.reverse,
                        deferred: y
                    }), y.done(e.proxy(function (i, n, o, s, l) {
                        e.mobile.removeActiveLinkClass(), r.duplicateCachedPage && r.duplicateCachedPage.remove(), l || e.mobile.focusPage(t), this._releaseTransitionLock(), this._triggerWithDeprecated("transition", a), this._triggerWithDeprecated("change", a)
                    }, this))
                }
            },
            _findBaseWithDefault: function () {
                var t = this.activePage && e.mobile.getClosestBaseUrl(this.activePage);
                return t || e.mobile.path.documentBase.hrefNoHash
            }
        }), e.mobile.navreadyDeferred = e.Deferred();
        var o = [], s = !1
    }(e), function (e, n) {
        function o(e) {
            for (; e && ("string" != typeof e.nodeName || "a" !== e.nodeName.toLowerCase());)e = e.parentNode;
            return e
        }

        var s = e.Deferred(), a = e.Deferred(), r = function () {
            a.resolve(), a = null
        }, l = e.mobile.path.documentUrl, c = null;
        e.mobile.loadPage = function (t, i) {
            var n;
            return i = i || {}, n = i.pageContainer || e.mobile.pageContainer, i.deferred = e.Deferred(), n.pagecontainer("load", t, i), i.deferred.promise()
        }, e.mobile.back = function () {
            var i = t.navigator;
            this.phonegapNavigationEnabled && i && i.app && i.app.backHistory ? i.app.backHistory() : e.mobile.pageContainer.pagecontainer("back")
        }, e.mobile.focusPage = function (e) {
            var t = e.find("[autofocus]"), i = e.find(".ui-title:eq(0)");
            return t.length ? void t.focus() : void(i.length ? i.focus() : e.focus())
        }, e.mobile._maybeDegradeTransition = e.mobile._maybeDegradeTransition || function (e) {
                return e
            }, e.mobile.changePage = function (t, i) {
            e.mobile.pageContainer.pagecontainer("change", t, i)
        }, e.mobile.changePage.defaults = {
            transition: n,
            reverse: !1,
            changeHash: !0,
            fromHashChange: !1,
            role: n,
            duplicateCachedPage: n,
            pageContainer: n,
            showLoadMsg: !0,
            dataUrl: n,
            fromPage: n,
            allowSamePageTransition: !1
        }, e.mobile._registerInternalEvents = function () {
            var i = function (t, i) {
                var n, o, s, a, r = !0;
                return !e.mobile.ajaxEnabled || t.is(":jqmData(ajax='false')") || !t.jqmHijackable().length || t.attr("target") ? !1 : (n = c && c.attr("formaction") || t.attr("action"), a = (t.attr("method") || "get").toLowerCase(), n || (n = e.mobile.getClosestBaseUrl(t), "get" === a && (n = e.mobile.path.parseUrl(n).hrefNoSearch), n === e.mobile.path.documentBase.hrefNoHash && (n = l.hrefNoSearch)), n = e.mobile.path.makeUrlAbsolute(n, e.mobile.getClosestBaseUrl(t)), e.mobile.path.isExternal(n) && !e.mobile.path.isPermittedCrossDomainRequest(l, n) ? !1 : (i || (o = t.serializeArray(), c && c[0].form === t[0] && (s = c.attr("name"), s && (e.each(o, function (e, t) {
                    return t.name === s ? (s = "", !1) : void 0
                }), s && o.push({name: s, value: c.attr("value")}))), r = {
                    url: n,
                    options: {
                        type: a,
                        data: e.param(o),
                        transition: t.jqmData("transition"),
                        reverse: "reverse" === t.jqmData("direction"),
                        reloadPage: !0
                    }
                }), r))
            };
            e.mobile.document.delegate("form", "submit", function (t) {
                var n;
                t.isDefaultPrevented() || (n = i(e(this)), n && (e.mobile.changePage(n.url, n.options), t.preventDefault()))
            }), e.mobile.document.bind("vclick", function (t) {
                var n, s, a = t.target, r = !1;
                if (!(t.which > 1) && e.mobile.linkBindingEnabled) {
                    if (c = e(a), e.data(a, "mobile-button")) {
                        if (!i(e(a).closest("form"), !0))return;
                        a.parentNode && (a = a.parentNode)
                    } else {
                        if (a = o(a), !a || "#" === e.mobile.path.parseUrl(a.getAttribute("href") || "#").hash)return;
                        if (!e(a).jqmHijackable().length)return
                    }
                    ~a.className.indexOf("ui-link-inherit") ? a.parentNode && (s = e.data(a.parentNode, "buttonElements")) : s = e.data(a, "buttonElements"), s ? a = s.outer : r = !0, n = e(a), r && (n = n.closest(".ui-btn")), n.length > 0 && !n.hasClass("ui-state-disabled") && (e.mobile.removeActiveLinkClass(!0), e.mobile.activeClickedLink = n, e.mobile.activeClickedLink.addClass(e.mobile.activeBtnClass))
                }
            }), e.mobile.document.bind("click", function (i) {
                if (e.mobile.linkBindingEnabled && !i.isDefaultPrevented()) {
                    var s, a, r, c, h, u, d, p = o(i.target), f = e(p), m = function () {
                        t.setTimeout(function () {
                            e.mobile.removeActiveLinkClass(!0)
                        }, 200)
                    };
                    if (e.mobile.activeClickedLink && e.mobile.activeClickedLink[0] === i.target.parentNode && m(), p && !(i.which > 1) && f.jqmHijackable().length) {
                        if (f.is(":jqmData(rel='back')"))return e.mobile.back(), !1;
                        if (s = e.mobile.getClosestBaseUrl(f), a = e.mobile.path.makeUrlAbsolute(f.attr("href") || "#", s), !e.mobile.ajaxEnabled && !e.mobile.path.isEmbeddedPage(a))return void m();
                        if (!(-1 === a.search("#") || e.mobile.path.isExternal(a) && e.mobile.path.isAbsoluteUrl(a))) {
                            if (a = a.replace(/[^#]*#/, ""), !a)return void i.preventDefault();
                            a = e.mobile.path.isPath(a) ? e.mobile.path.makeUrlAbsolute(a, s) : e.mobile.path.makeUrlAbsolute("#" + a, l.hrefNoHash)
                        }
                        if (r = f.is("[rel='external']") || f.is(":jqmData(ajax='false')") || f.is("[target]"), c = r || e.mobile.path.isExternal(a) && !e.mobile.path.isPermittedCrossDomainRequest(l, a))return void m();
                        h = f.jqmData("transition"), u = "reverse" === f.jqmData("direction") || f.jqmData("back"), d = f.attr("data-" + e.mobile.ns + "rel") || n, e.mobile.changePage(a, {
                            transition: h,
                            reverse: u,
                            role: d,
                            link: f
                        }), i.preventDefault()
                    }
                }
            }), e.mobile.document.delegate(".ui-page", "pageshow.prefetch", function () {
                var t = [];
                e(this).find("a:jqmData(prefetch)").each(function () {
                    var i = e(this), n = i.attr("href");
                    n && -1 === e.inArray(n, t) && (t.push(n), e.mobile.loadPage(n, {
                        role: i.attr("data-" + e.mobile.ns + "rel"),
                        prefetch: !0
                    }))
                })
            }), e.mobile.pageContainer.pagecontainer(), e.mobile.document.bind("pageshow", function () {
                a ? a.done(e.mobile.resetActivePageHeight) : e.mobile.resetActivePageHeight()
            }), e.mobile.window.bind("throttledresize", e.mobile.resetActivePageHeight)
        }, e(function () {
            s.resolve()
        }), "complete" === i.readyState ? r() : e.mobile.window.load(r), e.when(s, e.mobile.navreadyDeferred).done(function () {
            e.mobile._registerInternalEvents()
        })
    }(e), function (e, t) {
        e.mobile.Transition = function () {
            this.init.apply(this, arguments)
        }, e.extend(e.mobile.Transition.prototype, {
            toPreClass: " ui-page-pre-in", init: function (t, i, n, o) {
                e.extend(this, {name: t, reverse: i, $to: n, $from: o, deferred: new e.Deferred})
            }, cleanFrom: function () {
                this.$from.removeClass(e.mobile.activePageClass + " out in reverse " + this.name).height("")
            }, beforeDoneIn: function () {
            }, beforeDoneOut: function () {
            }, beforeStartOut: function () {
            }, doneIn: function () {
                this.beforeDoneIn(), this.$to.removeClass("out in reverse " + this.name).height(""), this.toggleViewportClass(), e.mobile.window.scrollTop() !== this.toScroll && this.scrollPage(), this.sequential || this.$to.addClass(e.mobile.activePageClass), this.deferred.resolve(this.name, this.reverse, this.$to, this.$from, !0)
            }, doneOut: function (e, t, i, n) {
                this.beforeDoneOut(), this.startIn(e, t, i, n)
            }, hideIn: function (e) {
                this.$to.css("z-index", -10), e.call(this), this.$to.css("z-index", "")
            }, scrollPage: function () {
                e.event.special.scrollstart.enabled = !1, (e.mobile.hideUrlBar || this.toScroll !== e.mobile.defaultHomeScroll) && t.scrollTo(0, this.toScroll), setTimeout(function () {
                    e.event.special.scrollstart.enabled = !0
                }, 150)
            }, startIn: function (t, i, n, o) {
                this.hideIn(function () {
                    this.$to.addClass(e.mobile.activePageClass + this.toPreClass), o || e.mobile.focusPage(this.$to), this.$to.height(t + this.toScroll), n || this.scrollPage()
                }), this.$to.removeClass(this.toPreClass).addClass(this.name + " in " + i), n ? this.doneIn() : this.$to.animationComplete(e.proxy(function () {
                    this.doneIn()
                }, this))
            }, startOut: function (t, i, n) {
                this.beforeStartOut(t, i, n), this.$from.height(t + e.mobile.window.scrollTop()).addClass(this.name + " out" + i)
            }, toggleViewportClass: function () {
                e.mobile.pageContainer.toggleClass("ui-mobile-viewport-transitioning viewport-" + this.name)
            }, transition: function () {
                var t, i = this.reverse ? " reverse" : "", n = e.mobile.getScreenHeight(), o = e.mobile.maxTransitionWidth !== !1 && e.mobile.window.width() > e.mobile.maxTransitionWidth;
                return this.toScroll = e.mobile.navigate.history.getActive().lastScroll || e.mobile.defaultHomeScroll, t = !e.support.cssTransitions || !e.support.cssAnimations || o || !this.name || "none" === this.name || Math.max(e.mobile.window.scrollTop(), this.toScroll) > e.mobile.getMaxScrollForTransition(), this.toggleViewportClass(), this.$from && !t ? this.startOut(n, i, t) : this.doneOut(n, i, t, !0), this.deferred.promise()
            }
        })
    }(e, this), function (e) {
        e.mobile.SerialTransition = function () {
            this.init.apply(this, arguments)
        }, e.extend(e.mobile.SerialTransition.prototype, e.mobile.Transition.prototype, {
            sequential: !0,
            beforeDoneOut: function () {
                this.$from && this.cleanFrom()
            },
            beforeStartOut: function (t, i, n) {
                this.$from.animationComplete(e.proxy(function () {
                    this.doneOut(t, i, n)
                }, this))
            }
        })
    }(e), function (e) {
        e.mobile.ConcurrentTransition = function () {
            this.init.apply(this, arguments)
        }, e.extend(e.mobile.ConcurrentTransition.prototype, e.mobile.Transition.prototype, {
            sequential: !1,
            beforeDoneIn: function () {
                this.$from && this.cleanFrom()
            },
            beforeStartOut: function (e, t, i) {
                this.doneOut(e, t, i)
            }
        })
    }(e), function (e) {
        var t = function () {
            return 3 * e.mobile.getScreenHeight()
        };
        e.mobile.transitionHandlers = {
            sequential: e.mobile.SerialTransition,
            simultaneous: e.mobile.ConcurrentTransition
        }, e.mobile.defaultTransitionHandler = e.mobile.transitionHandlers.sequential, e.mobile.transitionFallbacks = {}, e.mobile._maybeDegradeTransition = function (t) {
            return t && !e.support.cssTransform3d && e.mobile.transitionFallbacks[t] && (t = e.mobile.transitionFallbacks[t]), t
        }, e.mobile.getMaxScrollForTransition = e.mobile.getMaxScrollForTransition || t
    }(e), function (e) {
        e.mobile.transitionFallbacks.flip = "fade"
    }(e, this), function (e) {
        e.mobile.transitionFallbacks.flow = "fade"
    }(e, this), function (e) {
        e.mobile.transitionFallbacks.pop = "fade"
    }(e, this), function (e) {
        e.mobile.transitionHandlers.slide = e.mobile.transitionHandlers.simultaneous, e.mobile.transitionFallbacks.slide = "fade"
    }(e, this), function (e) {
        e.mobile.transitionFallbacks.slidedown = "fade"
    }(e, this), function (e) {
        e.mobile.transitionFallbacks.slidefade = "fade"
    }(e, this), function (e) {
        e.mobile.transitionFallbacks.slideup = "fade"
    }(e, this), function (e) {
        e.mobile.transitionFallbacks.turn = "fade"
    }(e, this), function (e) {
        e.mobile.degradeInputs = {
            color: !1,
            date: !1,
            datetime: !1,
            "datetime-local": !1,
            email: !1,
            month: !1,
            number: !1,
            range: "number",
            search: "text",
            tel: !1,
            time: !1,
            url: !1,
            week: !1
        }, e.mobile.page.prototype.options.degradeInputs = e.mobile.degradeInputs, e.mobile.degradeInputsWithin = function (t) {
            t = e(t), t.find("input").not(e.mobile.page.prototype.keepNativeSelector()).each(function () {
                var t, i, n, o, s = e(this), a = this.getAttribute("type"), r = e.mobile.degradeInputs[a] || "text";
                e.mobile.degradeInputs[a] && (t = e("<div>").html(s.clone()).html(), i = t.indexOf(" type=") > -1, n = i ? /\s+type=["']?\w+['"]?/ : /\/?>/, o = ' type="' + r + '" data-' + e.mobile.ns + 'type="' + a + '"' + (i ? "" : ">"), s.replaceWith(t.replace(n, o)))
            })
        }
    }(e), function (e, t, i) {
        e.widget("mobile.page", e.mobile.page, {
            options: {
                closeBtn: "left",
                closeBtnText: "Close",
                overlayTheme: "a",
                corners: !0,
                dialog: !1
            }, _create: function () {
                this._super(), this.options.dialog && (e.extend(this, {
                    _inner: this.element.children(),
                    _headerCloseButton: null
                }), this.options.enhanced || this._setCloseBtn(this.options.closeBtn))
            }, _enhance: function () {
                this._super(), this.options.dialog && this.element.addClass("ui-dialog").wrapInner(e("<div/>", {
                    role: "dialog",
                    "class": "ui-dialog-contain ui-overlay-shadow" + (this.options.corners ? " ui-corner-all" : "")
                }))
            }, _setOptions: function (t) {
                var n, o, s = this.options;
                t.corners !== i && this._inner.toggleClass("ui-corner-all", !!t.corners), t.overlayTheme !== i && e.mobile.activePage[0] === this.element[0] && (s.overlayTheme = t.overlayTheme, this._handlePageBeforeShow()), t.closeBtnText !== i && (n = s.closeBtn, o = t.closeBtnText), t.closeBtn !== i && (n = t.closeBtn), n && this._setCloseBtn(n, o), this._super(t)
            }, _handlePageBeforeShow: function () {
                this.options.overlayTheme && this.options.dialog ? (this.removeContainerBackground(), this.setContainerBackground(this.options.overlayTheme)) : this._super()
            }, _setCloseBtn: function (t, i) {
                var n, o = this._headerCloseButton;
                t = "left" === t ? "left" : "right" === t ? "right" : "none", "none" === t ? o && (o.remove(), o = null) : o ? (o.removeClass("ui-btn-left ui-btn-right").addClass("ui-btn-" + t), i && o.text(i)) : (n = this._inner.find(":jqmData(role='header')").first(), o = e("<a></a>", {
                    href: "#",
                    "class": "ui-btn ui-corner-all ui-icon-delete ui-btn-icon-notext ui-btn-" + t
                }).attr("data-" + e.mobile.ns + "rel", "back").text(i || this.options.closeBtnText || "").prependTo(n)), this._headerCloseButton = o
            }
        })
    }(e, this), function (e, t, i) {
        e.widget("mobile.dialog", {
            options: {closeBtn: "left", closeBtnText: "Close", overlayTheme: "a", corners: !0},
            _handlePageBeforeShow: function () {
                this._isCloseable = !0, this.options.overlayTheme && this.element.page("removeContainerBackground").page("setContainerBackground", this.options.overlayTheme)
            },
            _handlePageBeforeHide: function () {
                this._isCloseable = !1
            },
            _handleVClickSubmit: function (t) {
                var i, n = e(t.target).closest("vclick" === t.type ? "a" : "form");
                n.length && !n.jqmData("transition") && (i = {}, i["data-" + e.mobile.ns + "transition"] = (e.mobile.navigate.history.getActive() || {}).transition || e.mobile.defaultDialogTransition, i["data-" + e.mobile.ns + "direction"] = "reverse", n.attr(i))
            },
            _create: function () {
                var t = this.element, i = this.options;
                t.addClass("ui-dialog").wrapInner(e("<div/>", {
                    role: "dialog",
                    "class": "ui-dialog-contain ui-overlay-shadow" + (i.corners ? " ui-corner-all" : "")
                })), e.extend(this, {
                    _isCloseable: !1,
                    _inner: t.children(),
                    _headerCloseButton: null
                }), this._on(t, {
                    vclick: "_handleVClickSubmit",
                    submit: "_handleVClickSubmit",
                    pagebeforeshow: "_handlePageBeforeShow",
                    pagebeforehide: "_handlePageBeforeHide"
                }), this._setCloseBtn(i.closeBtn)
            },
            _setOptions: function (t) {
                var n, o, s = this.options;
                t.corners !== i && this._inner.toggleClass("ui-corner-all", !!t.corners), t.overlayTheme !== i && e.mobile.activePage[0] === this.element[0] && (s.overlayTheme = t.overlayTheme, this._handlePageBeforeShow()), t.closeBtnText !== i && (n = s.closeBtn, o = t.closeBtnText), t.closeBtn !== i && (n = t.closeBtn), n && this._setCloseBtn(n, o), this._super(t)
            },
            _setCloseBtn: function (t, i) {
                var n, o = this._headerCloseButton;
                t = "left" === t ? "left" : "right" === t ? "right" : "none", "none" === t ? o && (o.remove(), o = null) : o ? (o.removeClass("ui-btn-left ui-btn-right").addClass("ui-btn-" + t), i && o.text(i)) : (n = this._inner.find(":jqmData(role='header')").first(), o = e("<a></a>", {
                    role: "button",
                    href: "#",
                    "class": "ui-btn ui-corner-all ui-icon-delete ui-btn-icon-notext ui-btn-" + t
                }).text(i || this.options.closeBtnText || "").prependTo(n), this._on(o, {click: "close"})), this._headerCloseButton = o
            },
            close: function () {
                var t = e.mobile.navigate.history;
                this._isCloseable && (this._isCloseable = !1, e.mobile.hashListeningEnabled && t.activeIndex > 0 ? e.mobile.back() : e.mobile.pageContainer.pagecontainer("back"))
            }
        })
    }(e, this), function (e, t) {
        var i = /([A-Z])/g, n = function (e) {
            return "ui-btn-icon-" + (null === e ? "left" : e)
        };
        e.widget("mobile.collapsible", {
            options: {
                enhanced: !1,
                expandCueText: null,
                collapseCueText: null,
                collapsed: !0,
                heading: "h1,h2,h3,h4,h5,h6,legend",
                collapsedIcon: null,
                expandedIcon: null,
                iconpos: null,
                theme: null,
                contentTheme: null,
                inset: null,
                corners: null,
                mini: null
            }, _create: function () {
                var t = this.element, i = {accordion: t.closest(":jqmData(role='collapsible-set'),:jqmData(role='collapsibleset')" + (e.mobile.collapsibleset ? ", :mobile-collapsibleset" : "")).addClass("ui-collapsible-set")};
                this._ui = i, this._renderedOptions = this._getOptions(this.options), this.options.enhanced ? (i.heading = this.element.children(".ui-collapsible-heading"), i.content = i.heading.next(), i.anchor = i.heading.children(), i.status = i.anchor.children(".ui-collapsible-heading-status")) : this._enhance(t, i), this._on(i.heading, {
                    tap: function () {
                        i.heading.find("a").first().addClass(e.mobile.activeBtnClass)
                    }, click: function (e) {
                        this._handleExpandCollapse(!i.heading.hasClass("ui-collapsible-heading-collapsed")), e.preventDefault(), e.stopPropagation()
                    }
                })
            }, _getOptions: function (t) {
                var n, o = this._ui.accordion, s = this._ui.accordionWidget;
                t = e.extend({}, t), o.length && !s && (this._ui.accordionWidget = s = o.data("mobile-collapsibleset"));
                for (n in t)t[n] = null != t[n] ? t[n] : s ? s.options[n] : o.length ? e.mobile.getAttribute(o[0], n.replace(i, "-$1").toLowerCase()) : null, null == t[n] && (t[n] = e.mobile.collapsible.defaults[n]);
                return t
            }, _themeClassFromOption: function (e, t) {
                return t ? "none" === t ? "" : e + t : ""
            }, _enhance: function (t, i) {
                var o, s = this._renderedOptions, a = this._themeClassFromOption("ui-body-", s.contentTheme);
                return t.addClass("ui-collapsible " + (s.inset ? "ui-collapsible-inset " : "") + (s.inset && s.corners ? "ui-corner-all " : "") + (a ? "ui-collapsible-themed-content " : "")), i.originalHeading = t.children(this.options.heading).first(), i.content = t.wrapInner("<div class='ui-collapsible-content " + a + "'></div>").children(".ui-collapsible-content"), i.heading = i.originalHeading, i.heading.is("legend") && (i.heading = e("<div role='heading'>" + i.heading.html() + "</div>"), i.placeholder = e("<div><!-- placeholder for legend --></div>").insertBefore(i.originalHeading), i.originalHeading.remove()), o = s.collapsed ? s.collapsedIcon ? "ui-icon-" + s.collapsedIcon : "" : s.expandedIcon ? "ui-icon-" + s.expandedIcon : "", i.status = e("<span class='ui-collapsible-heading-status'></span>"), i.anchor = i.heading.detach().addClass("ui-collapsible-heading").append(i.status).wrapInner("<a href='#' class='ui-collapsible-heading-toggle'></a>").find("a").first().addClass("ui-btn " + (o ? o + " " : "") + (o ? n(s.iconpos) + " " : "") + this._themeClassFromOption("ui-btn-", s.theme) + " " + (s.mini ? "ui-mini " : "")), i.heading.insertBefore(i.content), this._handleExpandCollapse(this.options.collapsed), i
            }, refresh: function () {
                this._applyOptions(this.options), this._renderedOptions = this._getOptions(this.options)
            }, _applyOptions: function (e) {
                var i, o, s, a, r, l = this.element, c = this._renderedOptions, h = this._ui, u = h.anchor, d = h.status, p = this._getOptions(e);
                e.collapsed !== t && this._handleExpandCollapse(e.collapsed), i = l.hasClass("ui-collapsible-collapsed"), i ? p.expandCueText !== t && d.text(p.expandCueText) : p.collapseCueText !== t && d.text(p.collapseCueText), r = p.collapsedIcon !== t ? p.collapsedIcon !== !1 : c.collapsedIcon !== !1, (p.iconpos !== t || p.collapsedIcon !== t || p.expandedIcon !== t) && (u.removeClass([n(c.iconpos)].concat(c.expandedIcon ? ["ui-icon-" + c.expandedIcon] : []).concat(c.collapsedIcon ? ["ui-icon-" + c.collapsedIcon] : []).join(" ")), r && u.addClass([n(p.iconpos !== t ? p.iconpos : c.iconpos)].concat(i ? ["ui-icon-" + (p.collapsedIcon !== t ? p.collapsedIcon : c.collapsedIcon)] : ["ui-icon-" + (p.expandedIcon !== t ? p.expandedIcon : c.expandedIcon)]).join(" "))), p.theme !== t && (s = this._themeClassFromOption("ui-btn-", c.theme), o = this._themeClassFromOption("ui-btn-", p.theme), u.removeClass(s).addClass(o)), p.contentTheme !== t && (s = this._themeClassFromOption("ui-body-", c.contentTheme), o = this._themeClassFromOption("ui-body-", p.contentTheme), h.content.removeClass(s).addClass(o)), p.inset !== t && (l.toggleClass("ui-collapsible-inset", p.inset), a = !(!p.inset || !p.corners && !c.corners)), p.corners !== t && (a = !(!p.corners || !p.inset && !c.inset)), a !== t && l.toggleClass("ui-corner-all", a), p.mini !== t && u.toggleClass("ui-mini", p.mini)
            }, _setOptions: function (e) {
                this._applyOptions(e), this._super(e), this._renderedOptions = this._getOptions(this.options)
            }, _handleExpandCollapse: function (t) {
                var i = this._renderedOptions, n = this._ui;
                n.status.text(t ? i.expandCueText : i.collapseCueText), n.heading.toggleClass("ui-collapsible-heading-collapsed", t).find("a").first().toggleClass("ui-icon-" + i.expandedIcon, !t).toggleClass("ui-icon-" + i.collapsedIcon, t || i.expandedIcon === i.collapsedIcon).removeClass(e.mobile.activeBtnClass), this.element.toggleClass("ui-collapsible-collapsed", t), n.content.toggleClass("ui-collapsible-content-collapsed", t).attr("aria-hidden", t).trigger("updatelayout"), this.options.collapsed = t, this._trigger(t ? "collapse" : "expand")
            }, expand: function () {
                this._handleExpandCollapse(!1)
            }, collapse: function () {
                this._handleExpandCollapse(!0)
            }, _destroy: function () {
                var e = this._ui, t = this.options;
                t.enhanced || (e.placeholder ? (e.originalHeading.insertBefore(e.placeholder), e.placeholder.remove(), e.heading.remove()) : (e.status.remove(), e.heading.removeClass("ui-collapsible-heading ui-collapsible-heading-collapsed").children().contents().unwrap()), e.anchor.contents().unwrap(), e.content.contents().unwrap(), this.element.removeClass("ui-collapsible ui-collapsible-collapsed ui-collapsible-themed-content ui-collapsible-inset ui-corner-all"))
            }
        }), e.mobile.collapsible.defaults = {
            expandCueText: " click to expand contents",
            collapseCueText: " click to collapse contents",
            collapsedIcon: "plus",
            contentTheme: "inherit",
            expandedIcon: "minus",
            iconpos: "left",
            inset: !0,
            corners: !0,
            theme: "inherit",
            mini: !1
        }
    }(e), function (e) {
        function t(t) {
            var n, o = t.length, s = [];
            for (n = 0; o > n; n++)t[n].className.match(i) || s.push(t[n]);
            return e(s)
        }

        var i = /\bui-screen-hidden\b/;
        e.mobile.behaviors.addFirstLastClasses = {
            _getVisibles: function (e, i) {
                var n;
                return i ? n = t(e) : (n = e.filter(":visible"), 0 === n.length && (n = t(e))), n
            }, _addFirstLastClasses: function (e, t, i) {
                e.removeClass("ui-first-child ui-last-child"), t.eq(0).addClass("ui-first-child").end().last().addClass("ui-last-child"), i || this.element.trigger("updatelayout")
            }, _removeFirstLastClasses: function (e) {
                e.removeClass("ui-first-child ui-last-child")
            }
        }
    }(e), function (e, t) {
        var i = ":mobile-collapsible, " + e.mobile.collapsible.initSelector;
        e.widget("mobile.collapsibleset", e.extend({
            initSelector: ":jqmData(role='collapsible-set'),:jqmData(role='collapsibleset')",
            options: e.extend({enhanced: !1}, e.mobile.collapsible.defaults),
            _handleCollapsibleExpand: function (t) {
                var i = e(t.target).closest(".ui-collapsible");
                i.parent().is(":mobile-collapsibleset, :jqmData(role='collapsible-set')") && i.siblings(".ui-collapsible:not(.ui-collapsible-collapsed)").collapsible("collapse")
            },
            _create: function () {
                var t = this.element, i = this.options;
                e.extend(this, {_classes: ""}), i.enhanced || (t.addClass("ui-collapsible-set " + this._themeClassFromOption("ui-group-theme-", i.theme) + " " + (i.corners && i.inset ? "ui-corner-all " : "")), this.element.find(e.mobile.collapsible.initSelector).collapsible()), this._on(t, {collapsibleexpand: "_handleCollapsibleExpand"})
            },
            _themeClassFromOption: function (e, t) {
                return t ? "none" === t ? "" : e + t : ""
            },
            _init: function () {
                this._refresh(!0), this.element.children(i).filter(":jqmData(collapsed='false')").collapsible("expand")
            },
            _setOptions: function (e) {
                var i, n, o = this.element, s = this._themeClassFromOption("ui-group-theme-", e.theme);
                return s && o.removeClass(this._themeClassFromOption("ui-group-theme-", this.options.theme)).addClass(s), e.inset !== t && (n = !(!e.inset || !e.corners && !this.options.corners)), e.corners !== t && (n = !(!e.corners || !e.inset && !this.options.inset)), n !== t && o.toggleClass("ui-corner-all", n), i = this._super(e), this.element.children(":mobile-collapsible").collapsible("refresh"), i
            },
            _destroy: function () {
                var e = this.element;
                this._removeFirstLastClasses(e.children(i)), e.removeClass("ui-collapsible-set ui-corner-all " + this._themeClassFromOption("ui-group-theme-", this.options.theme)).children(":mobile-collapsible").collapsible("destroy")
            },
            _refresh: function (t) {
                var n = this.element.children(i);
                this.element.find(e.mobile.collapsible.initSelector).not(".ui-collapsible").collapsible(), this._addFirstLastClasses(n, this._getVisibles(n, t), t)
            },
            refresh: function () {
                this._refresh(!1)
            }
        }, e.mobile.behaviors.addFirstLastClasses))
    }(e), function (e) {
        e.fn.fieldcontain = function () {
            return this.addClass("ui-field-contain")
        }
    }(e), function (e) {
        e.fn.grid = function (t) {
            return this.each(function () {
                var i, n, o = e(this), s = e.extend({grid: null}, t), a = o.children(), r = {
                    solo: 1,
                    a: 2,
                    b: 3,
                    c: 4,
                    d: 5
                }, l = s.grid;
                if (!l)if (a.length <= 5)for (n in r)r[n] === a.length && (l = n); else l = "a", o.addClass("ui-grid-duo");
                i = r[l], o.addClass("ui-grid-" + l), a.filter(":nth-child(" + i + "n+1)").addClass("ui-block-a"), i > 1 && a.filter(":nth-child(" + i + "n+2)").addClass("ui-block-b"), i > 2 && a.filter(":nth-child(" + i + "n+3)").addClass("ui-block-c"), i > 3 && a.filter(":nth-child(" + i + "n+4)").addClass("ui-block-d"), i > 4 && a.filter(":nth-child(" + i + "n+5)").addClass("ui-block-e")
            })
        }
    }(e), function (e, t) {
        e.widget("mobile.navbar", {
            options: {iconpos: "top", grid: null}, _create: function () {
                var n = this.element, o = n.find("a, button"), s = o.filter(":jqmData(icon)").length ? this.options.iconpos : t;
                n.addClass("ui-navbar").attr("role", "navigation").find("ul").jqmEnhanceable().grid({grid: this.options.grid}), o.each(function () {
                    var t = e.mobile.getAttribute(this, "icon"), i = e.mobile.getAttribute(this, "theme"), n = "ui-btn";
                    i && (n += " ui-btn-" + i), t && (n += " ui-icon-" + t + " ui-btn-icon-" + s), e(this).addClass(n)
                }), n.delegate("a", "vclick", function () {
                    var t = e(this);
                    t.hasClass("ui-state-disabled") || t.hasClass("ui-disabled") || t.hasClass(e.mobile.activeBtnClass) || (o.removeClass(e.mobile.activeBtnClass), t.addClass(e.mobile.activeBtnClass), e(i).one("pagehide", function () {
                        t.removeClass(e.mobile.activeBtnClass)
                    }))
                }), n.closest(".ui-page").bind("pagebeforeshow", function () {
                    o.filter(".ui-state-persist").addClass(e.mobile.activeBtnClass)
                })
            }
        })
    }(e), function (e) {
        var t = e.mobile.getAttribute;
        e.widget("mobile.listview", e.extend({
            options: {
                theme: null,
                countTheme: null,
                dividerTheme: null,
                icon: "carat-r",
                splitIcon: "carat-r",
                splitTheme: null,
                corners: !0,
                shadow: !0,
                inset: !1
            }, _create: function () {
                var e = this, t = "";
                t += e.options.inset ? " ui-listview-inset" : "", e.options.inset && (t += e.options.corners ? " ui-corner-all" : "", t += e.options.shadow ? " ui-shadow" : ""), e.element.addClass(" ui-listview" + t), e.refresh(!0)
            }, _findFirstElementByTagName: function (e, t, i, n) {
                var o = {};
                for (o[i] = o[n] = !0; e;) {
                    if (o[e.nodeName])return e;
                    e = e[t]
                }
                return null
            }, _addThumbClasses: function (t) {
                var i, n, o = t.length;
                for (i = 0; o > i; i++)n = e(this._findFirstElementByTagName(t[i].firstChild, "nextSibling", "img", "IMG")), n.length && e(this._findFirstElementByTagName(n[0].parentNode, "parentNode", "li", "LI")).addClass(n.hasClass("ui-li-icon") ? "ui-li-has-icon" : "ui-li-has-thumb")
            }, _getChildrenByTagName: function (t, i, n) {
                var o = [], s = {};
                for (s[i] = s[n] = !0, t = t.firstChild; t;)s[t.nodeName] && o.push(t), t = t.nextSibling;
                return e(o)
            }, _beforeListviewRefresh: e.noop, _afterListviewRefresh: e.noop, refresh: function (i) {
                var n, o, s, a, r, l, c, h, u, d, p, f, m, g, b, v, _, y, x, w, C = this.options, T = this.element, S = !!e.nodeName(T[0], "ol"), k = T.attr("start"), P = {}, D = T.find(".ui-li-count"), E = t(T[0], "counttheme") || this.options.countTheme, A = E ? "ui-body-" + E : "ui-body-inherit";
                for (C.theme && T.addClass("ui-group-theme-" + C.theme), S && (k || 0 === k) && (p = parseInt(k, 10) - 1, T.css("counter-reset", "listnumbering " + p)), this._beforeListviewRefresh(), w = this._getChildrenByTagName(T[0], "li", "LI"), o = 0, s = w.length; s > o; o++)a = w.eq(o), r = "", (i || a[0].className.search(/\bui-li-static\b|\bui-li-divider\b/) < 0) && (u = this._getChildrenByTagName(a[0], "a", "A"), d = "list-divider" === t(a[0], "role"), m = a.attr("value"), l = t(a[0], "theme"), u.length && u[0].className.search(/\bui-btn\b/) < 0 && !d ? (c = t(a[0], "icon"), h = c === !1 ? !1 : c || C.icon, u.removeClass("ui-link"), n = "ui-btn", l && (n += " ui-btn-" + l), u.length > 1 ? (r = "ui-li-has-alt", g = u.last(), b = t(g[0], "theme") || C.splitTheme || t(a[0], "theme", !0), v = b ? " ui-btn-" + b : "", _ = t(g[0], "icon") || t(a[0], "icon") || C.splitIcon, y = "ui-btn ui-btn-icon-notext ui-icon-" + _ + v, g.attr("title", e.trim(g.getEncodedText())).addClass(y).empty(), u = u.first()) : h && (n += " ui-btn-icon-right ui-icon-" + h), u.addClass(n)) : d ? (x = t(a[0], "theme") || C.dividerTheme || C.theme, r = "ui-li-divider ui-bar-" + (x ? x : "inherit"), a.attr("role", "heading")) : u.length <= 0 && (r = "ui-li-static ui-body-" + (l ? l : "inherit")), S && m && (f = parseInt(m, 10) - 1, a.css("counter-reset", "listnumbering " + f))), P[r] || (P[r] = []), P[r].push(a[0]);
                for (r in P)e(P[r]).addClass(r);
                D.each(function () {
                    e(this).closest("li").addClass("ui-li-has-count")
                }), A && D.not("[class*='ui-body-']").addClass(A), this._addThumbClasses(w), this._addThumbClasses(w.find(".ui-btn")), this._afterListviewRefresh(), this._addFirstLastClasses(w, this._getVisibles(w, i), i)
            }
        }, e.mobile.behaviors.addFirstLastClasses))
    }(e), function (e) {
        function t(t) {
            var i = e.trim(t.text()) || null;
            return i ? i = i.slice(0, 1).toUpperCase() : null
        }

        e.widget("mobile.listview", e.mobile.listview, {
            options: {autodividers: !1, autodividersSelector: t},
            _beforeListviewRefresh: function () {
                this.options.autodividers && (this._replaceDividers(), this._superApply(arguments))
            },
            _replaceDividers: function () {
                var t, n, o, s, a, r = null, l = this.element;
                for (l.children("li:jqmData(role='list-divider')").remove(), n = l.children("li"), t = 0; t < n.length; t++)o = n[t], s = this.options.autodividersSelector(e(o)), s && r !== s && (a = i.createElement("li"), a.appendChild(i.createTextNode(s)), a.setAttribute("data-" + e.mobile.ns + "role", "list-divider"), o.parentNode.insertBefore(a, o)), r = s
            }
        })
    }(e), function (e) {
        var t = /(^|\s)ui-li-divider($|\s)/, i = /(^|\s)ui-screen-hidden($|\s)/;
        e.widget("mobile.listview", e.mobile.listview, {
            options: {hideDividers: !1},
            _afterListviewRefresh: function () {
                var e, n, o, s = !0;
                if (this._superApply(arguments), this.options.hideDividers)for (e = this._getChildrenByTagName(this.element[0], "li", "LI"), n = e.length - 1; n > -1; n--)o = e[n], o.className.match(t) ? (s && (o.className = o.className + " ui-screen-hidden"), s = !0) : o.className.match(i) || (s = !1)
            }
        })
    }(e), function (e) {
        e.mobile.nojs = function (t) {
            e(":jqmData(role='nojs')", t).addClass("ui-nojs")
        }
    }(e), function (e) {
        e.mobile.behaviors.formReset = {
            _handleFormReset: function () {
                this._on(this.element.closest("form"), {
                    reset: function () {
                        this._delay("_reset")
                    }
                })
            }
        }
    }(e), function (e, t) {
        var i = e.mobile.path.hashToSelector;
        e.widget("mobile.checkboxradio", e.extend({
            initSelector: "input:not( :jqmData(role='flipswitch' ) )[type='checkbox'],input[type='radio']:not( :jqmData(role='flipswitch' ))",
            options: {theme: "inherit", mini: !1, wrapperClass: null, enhanced: !1, iconpos: "left"},
            _create: function () {
                var t = this.element, i = this.options, n = function (e, t) {
                    return e.jqmData(t) || e.closest("form, fieldset").jqmData(t)
                }, o = this.options.enhanced ? {
                    element: this.element.siblings("label"),
                    isParent: !1
                } : this._findLabel(), s = t[0].type, a = "ui-" + s + "-on", r = "ui-" + s + "-off";
                ("checkbox" === s || "radio" === s) && (this.element[0].disabled && (this.options.disabled = !0), i.iconpos = n(t, "iconpos") || o.element.attr("data-" + e.mobile.ns + "iconpos") || i.iconpos, i.mini = n(t, "mini") || i.mini, e.extend(this, {
                    input: t,
                    label: o.element,
                    labelIsParent: o.isParent,
                    inputtype: s,
                    checkedClass: a,
                    uncheckedClass: r
                }), this.options.enhanced || this._enhance(), this._on(o.element, {
                    vmouseover: "_handleLabelVMouseOver",
                    vclick: "_handleLabelVClick"
                }), this._on(t, {
                    vmousedown: "_cacheVals",
                    vclick: "_handleInputVClick",
                    focus: "_handleInputFocus",
                    blur: "_handleInputBlur"
                }), this._handleFormReset(), this.refresh())
            },
            _findLabel: function () {
                var t, n, o, s = this.element, a = s[0].labels;
                return a && a.length > 0 ? (n = e(a[0]), o = e.contains(n[0], s[0])) : (t = s.closest("label"), o = t.length > 0, n = o ? t : e(this.document[0].getElementsByTagName("label")).filter("[for='" + i(s[0].id) + "']").first()), {
                    element: n,
                    isParent: o
                }
            },
            _enhance: function () {
                this.label.addClass("ui-btn ui-corner-all"), this.labelIsParent ? this.input.add(this.label).wrapAll(this._wrapper()) : (this.element.wrap(this._wrapper()), this.element.parent().prepend(this.label)), this._setOptions({
                    theme: this.options.theme,
                    iconpos: this.options.iconpos,
                    mini: this.options.mini
                })
            },
            _wrapper: function () {
                return e("<div class='" + (this.options.wrapperClass ? this.options.wrapperClass : "") + " ui-" + this.inputtype + (this.options.disabled ? " ui-state-disabled" : "") + "' ></div>")
            },
            _handleInputFocus: function () {
                this.label.addClass(e.mobile.focusClass)
            },
            _handleInputBlur: function () {
                this.label.removeClass(e.mobile.focusClass)
            },
            _handleInputVClick: function () {
                this.element.prop("checked", this.element.is(":checked")), this._getInputSet().not(this.element).prop("checked", !1), this._updateAll(!0)
            },
            _handleLabelVMouseOver: function (e) {
                this.label.parent().hasClass("ui-state-disabled") && e.stopPropagation()
            },
            _handleLabelVClick: function (e) {
                var t = this.element;
                return t.is(":disabled") ? void e.preventDefault() : (this._cacheVals(), t.prop("checked", "radio" === this.inputtype && !0 || !t.prop("checked")), t.triggerHandler("click"), this._getInputSet().not(t).prop("checked", !1), this._updateAll(), !1)
            },
            _cacheVals: function () {
                this._getInputSet().each(function () {
                    e(this).attr("data-" + e.mobile.ns + "cacheVal", this.checked)
                })
            },
            _getInputSet: function () {
                var t, n, o = this.element[0], s = o.name, a = o.form, r = this.element.parents().last().get(0), l = this.element;
                return s && "radio" === this.inputtype && r && (t = "input[type='radio'][name='" + i(s) + "']", a ? (n = a.getAttribute("id"), n && (l = e(t + "[form='" + i(n) + "']", r)), l = e(a).find(t).filter(function () {
                    return this.form === a
                }).add(l)) : l = e(t, r).filter(function () {
                    return !this.form
                })), l
            },
            _updateAll: function (t) {
                var i = this;
                this._getInputSet().each(function () {
                    var n = e(this);
                    !this.checked && "checkbox" !== i.inputtype || t || n.trigger("change")
                }).checkboxradio("refresh")
            },
            _reset: function () {
                this.refresh()
            },
            _hasIcon: function () {
                var t, i, n = e.mobile.controlgroup;
                return n && (t = this.element.closest(":mobile-controlgroup," + n.prototype.initSelector), t.length > 0) ? (i = e.data(t[0], "mobile-controlgroup"), "horizontal" !== (i ? i.options.type : t.attr("data-" + e.mobile.ns + "type"))) : !0
            },
            refresh: function () {
                var t = this.element[0].checked, i = e.mobile.activeBtnClass, n = "ui-btn-icon-" + this.options.iconpos, o = [], s = [];
                this._hasIcon() ? (s.push(i), o.push(n)) : (s.push(n), (t ? o : s).push(i)), t ? (o.push(this.checkedClass), s.push(this.uncheckedClass)) : (o.push(this.uncheckedClass), s.push(this.checkedClass)), this.widget().toggleClass("ui-state-disabled", this.element.prop("disabled")), this.label.addClass(o.join(" ")).removeClass(s.join(" "))
            },
            widget: function () {
                return this.label.parent()
            },
            _setOptions: function (e) {
                var i = this.label, n = this.options, o = this.widget(), s = this._hasIcon();
                e.disabled !== t && (this.input.prop("disabled", !!e.disabled), o.toggleClass("ui-state-disabled", !!e.disabled)), e.mini !== t && o.toggleClass("ui-mini", !!e.mini), e.theme !== t && i.removeClass("ui-btn-" + n.theme).addClass("ui-btn-" + e.theme), e.wrapperClass !== t && o.removeClass(n.wrapperClass).addClass(e.wrapperClass), e.iconpos !== t && s ? i.removeClass("ui-btn-icon-" + n.iconpos).addClass("ui-btn-icon-" + e.iconpos) : s || i.removeClass("ui-btn-icon-" + n.iconpos), this._super(e)
            }
        }, e.mobile.behaviors.formReset))
    }(e), function (e, t) {
        e.widget("mobile.button", {
            initSelector: "input[type='button'], input[type='submit'], input[type='reset']",
            options: {
                theme: null,
                icon: null,
                iconpos: "left",
                iconshadow: !1,
                corners: !0,
                shadow: !0,
                inline: null,
                mini: null,
                wrapperClass: null,
                enhanced: !1
            },
            _create: function () {
                this.element.is(":disabled") && (this.options.disabled = !0), this.options.enhanced || this._enhance(), e.extend(this, {wrapper: this.element.parent()}), this._on({
                    focus: function () {
                        this.widget().addClass(e.mobile.focusClass)
                    }, blur: function () {
                        this.widget().removeClass(e.mobile.focusClass)
                    }
                }), this.refresh(!0)
            },
            _enhance: function () {
                this.element.wrap(this._button())
            },
            _button: function () {
                var t = this.options, i = this._getIconClasses(this.options);
                return e("<div class='ui-btn ui-input-btn" + (t.wrapperClass ? " " + t.wrapperClass : "") + (t.theme ? " ui-btn-" + t.theme : "") + (t.corners ? " ui-corner-all" : "") + (t.shadow ? " ui-shadow" : "") + (t.inline ? " ui-btn-inline" : "") + (t.mini ? " ui-mini" : "") + (t.disabled ? " ui-state-disabled" : "") + (i ? " " + i : "") + "' >" + this.element.val() + "</div>")
            },
            widget: function () {
                return this.wrapper
            },
            _destroy: function () {
                this.element.insertBefore(this.wrapper), this.wrapper.remove()
            },
            _getIconClasses: function (e) {
                return e.icon ? "ui-icon-" + e.icon + (e.iconshadow ? " ui-shadow-icon" : "") + " ui-btn-icon-" + e.iconpos : ""
            },
            _setOptions: function (i) {
                var n = this.widget();
                i.theme !== t && n.removeClass(this.options.theme).addClass("ui-btn-" + i.theme), i.corners !== t && n.toggleClass("ui-corner-all", i.corners), i.shadow !== t && n.toggleClass("ui-shadow", i.shadow), i.inline !== t && n.toggleClass("ui-btn-inline", i.inline), i.mini !== t && n.toggleClass("ui-mini", i.mini), i.disabled !== t && (this.element.prop("disabled", i.disabled), n.toggleClass("ui-state-disabled", i.disabled)), (i.icon !== t || i.iconshadow !== t || i.iconpos !== t) && n.removeClass(this._getIconClasses(this.options)).addClass(this._getIconClasses(e.extend({}, this.options, i))), this._super(i)
            },
            refresh: function (t) {
                var i, n = this.element.prop("disabled");
                this.options.icon && "notext" === this.options.iconpos && this.element.attr("title") && this.element.attr("title", this.element.val()), t || (i = this.element.detach(), e(this.wrapper).text(this.element.val()).append(i)), this.options.disabled !== n && this._setOptions({disabled: n})
            }
        })
    }(e), function (e) {
        var t = e("meta[name=viewport]"), i = t.attr("content"), n = i + ",maximum-scale=1, user-scalable=no", o = i + ",maximum-scale=10, user-scalable=yes", s = /(user-scalable[\s]*=[\s]*no)|(maximum-scale[\s]*=[\s]*1)[$,\s]/.test(i);
        e.mobile.zoom = e.extend({}, {
            enabled: !s, locked: !1, disable: function (i) {
                s || e.mobile.zoom.locked || (t.attr("content", n), e.mobile.zoom.enabled = !1, e.mobile.zoom.locked = i || !1)
            }, enable: function (i) {
                s || e.mobile.zoom.locked && i !== !0 || (t.attr("content", o), e.mobile.zoom.enabled = !0, e.mobile.zoom.locked = !1)
            }, restore: function () {
                s || (t.attr("content", i), e.mobile.zoom.enabled = !0)
            }
        })
    }(e), function (e, t) {
        e.widget("mobile.textinput", {
            initSelector: "input[type='text'],input[type='search'],:jqmData(type='search'),input[type='number'],:jqmData(type='number'),input[type='password'],input[type='email'],input[type='url'],input[type='tel'],textarea,input[type='time'],input[type='date'],input[type='month'],input[type='week'],input[type='datetime'],input[type='datetime-local'],input[type='color'],input:not([type]),input[type='file']",
            options: {
                theme: null,
                corners: !0,
                mini: !1,
                preventFocusZoom: /iPhone|iPad|iPod/.test(navigator.platform) && navigator.userAgent.indexOf("AppleWebKit") > -1,
                wrapperClass: "",
                enhanced: !1
            },
            _create: function () {
                var t = this.options, i = this.element.is("[type='search'], :jqmData(type='search')"), n = "TEXTAREA" === this.element[0].tagName, o = this.element.is("[data-" + (e.mobile.ns || "") + "type='range']"), s = (this.element.is("input") || this.element.is("[data-" + (e.mobile.ns || "") + "type='search']")) && !o;
                this.element.prop("disabled") && (t.disabled = !0), e.extend(this, {
                    classes: this._classesFromOptions(),
                    isSearch: i,
                    isTextarea: n,
                    isRange: o,
                    inputNeedsWrap: s
                }), this._autoCorrect(), t.enhanced || this._enhance(), this._on({
                    focus: "_handleFocus",
                    blur: "_handleBlur"
                })
            },
            refresh: function () {
                this.setOptions({disabled: this.element.is(":disabled")})
            },
            _enhance: function () {
                var e = [];
                this.isTextarea && e.push("ui-input-text"), (this.isTextarea || this.isRange) && e.push("ui-shadow-inset"), this.inputNeedsWrap ? this.element.wrap(this._wrap()) : e = e.concat(this.classes), this.element.addClass(e.join(" "))
            },
            widget: function () {
                return this.inputNeedsWrap ? this.element.parent() : this.element
            },
            _classesFromOptions: function () {
                var e = this.options, t = [];
                return t.push("ui-body-" + (null === e.theme ? "inherit" : e.theme)), e.corners && t.push("ui-corner-all"), e.mini && t.push("ui-mini"), e.disabled && t.push("ui-state-disabled"), e.wrapperClass && t.push(e.wrapperClass), t
            },
            _wrap: function () {
                return e("<div class='" + (this.isSearch ? "ui-input-search " : "ui-input-text ") + this.classes.join(" ") + " ui-shadow-inset'></div>")
            },
            _autoCorrect: function () {
                "undefined" == typeof this.element[0].autocorrect || e.support.touchOverflow || (this.element[0].setAttribute("autocorrect", "off"), this.element[0].setAttribute("autocomplete", "off"))
            },
            _handleBlur: function () {
                this.widget().removeClass(e.mobile.focusClass), this.options.preventFocusZoom && e.mobile.zoom.enable(!0)
            },
            _handleFocus: function () {
                this.options.preventFocusZoom && e.mobile.zoom.disable(!0), this.widget().addClass(e.mobile.focusClass)
            },
            _setOptions: function (e) {
                var i = this.widget();
                this._super(e), (e.disabled !== t || e.mini !== t || e.corners !== t || e.theme !== t || e.wrapperClass !== t) && (i.removeClass(this.classes.join(" ")), this.classes = this._classesFromOptions(), i.addClass(this.classes.join(" "))), e.disabled !== t && this.element.prop("disabled", !!e.disabled)
            },
            _destroy: function () {
                this.options.enhanced || (this.inputNeedsWrap && this.element.unwrap(), this.element.removeClass("ui-input-text " + this.classes.join(" ")))
            }
        })
    }(e), function (e, n) {
        e.widget("mobile.slider", e.extend({
            initSelector: "input[type='range'], :jqmData(type='range'), :jqmData(role='slider')",
            widgetEventPrefix: "slide",
            options: {theme: null, trackTheme: null, corners: !0, mini: !1, highlight: !1},
            _create: function () {
                var o, s, a, r, l, c, h, u, d, p, f = this, m = this.element, g = this.options.trackTheme || e.mobile.getAttribute(m[0], "theme"), b = g ? " ui-bar-" + g : " ui-bar-inherit", v = this.options.corners || m.jqmData("corners") ? " ui-corner-all" : "", _ = this.options.mini || m.jqmData("mini") ? " ui-mini" : "", y = m[0].nodeName.toLowerCase(), x = "select" === y, w = m.parent().is(":jqmData(role='rangeslider')"), C = x ? "ui-slider-switch" : "", T = m.attr("id"), S = e("[for='" + T + "']"), k = S.attr("id") || T + "-label", P = x ? 0 : parseFloat(m.attr("min")), D = x ? m.find("option").length - 1 : parseFloat(m.attr("max")), E = t.parseFloat(m.attr("step") || 1), A = i.createElement("a"), I = e(A), N = i.createElement("div"), O = e(N), L = this.options.highlight && !x ? function () {
                    var t = i.createElement("div");
                    return t.className = "ui-slider-bg " + e.mobile.activeBtnClass, e(t).prependTo(O)
                }() : !1;
                if (S.attr("id", k), this.isToggleSwitch = x, A.setAttribute("href", "#"), N.setAttribute("role", "application"), N.className = [this.isToggleSwitch ? "ui-slider ui-slider-track ui-shadow-inset " : "ui-slider-track ui-shadow-inset ", C, b, v, _].join(""), A.className = "ui-slider-handle", N.appendChild(A), I.attr({
                        role: "slider",
                        "aria-valuemin": P,
                        "aria-valuemax": D,
                        "aria-valuenow": this._value(),
                        "aria-valuetext": this._value(),
                        title: this._value(),
                        "aria-labelledby": k
                    }), e.extend(this, {
                        slider: O,
                        handle: I,
                        control: m,
                        type: y,
                        step: E,
                        max: D,
                        min: P,
                        valuebg: L,
                        isRangeslider: w,
                        dragging: !1,
                        beforeStart: null,
                        userModified: !1,
                        mouseMoved: !1
                    }), x) {
                    for (h = m.attr("tabindex"), h && I.attr("tabindex", h), m.attr("tabindex", "-1").focus(function () {
                        e(this).blur(), I.focus()
                    }), s = i.createElement("div"), s.className = "ui-slider-inneroffset", a = 0, r = N.childNodes.length; r > a; a++)s.appendChild(N.childNodes[a]);
                    for (N.appendChild(s), I.addClass("ui-slider-handle-snapping"), o = m.find("option"), l = 0, c = o.length; c > l; l++)u = l ? "a" : "b", d = l ? " " + e.mobile.activeBtnClass : "", p = i.createElement("span"), p.className = ["ui-slider-label ui-slider-label-", u, d].join(""), p.setAttribute("role", "img"), p.appendChild(i.createTextNode(o[l].innerHTML)), e(p).prependTo(O);
                    f._labels = e(".ui-slider-label", O)
                }
                m.addClass(x ? "ui-slider-switch" : "ui-slider-input"), this._on(m, {
                    change: "_controlChange",
                    keyup: "_controlKeyup",
                    blur: "_controlBlur",
                    vmouseup: "_controlVMouseUp"
                }), O.bind("vmousedown", e.proxy(this._sliderVMouseDown, this)).bind("vclick", !1), this._on(i, {vmousemove: "_preventDocumentDrag"}), this._on(O.add(i), {vmouseup: "_sliderVMouseUp"}), O.insertAfter(m), x || w || (s = this.options.mini ? "<div class='ui-slider ui-mini'>" : "<div class='ui-slider'>", m.add(O).wrapAll(s)), this._on(this.handle, {
                    vmousedown: "_handleVMouseDown",
                    keydown: "_handleKeydown",
                    keyup: "_handleKeyup"
                }), this.handle.bind("vclick", !1), this._handleFormReset(), this.refresh(n, n, !0)
            },
            _setOptions: function (e) {
                e.theme !== n && this._setTheme(e.theme), e.trackTheme !== n && this._setTrackTheme(e.trackTheme), e.corners !== n && this._setCorners(e.corners), e.mini !== n && this._setMini(e.mini), e.highlight !== n && this._setHighlight(e.highlight), e.disabled !== n && this._setDisabled(e.disabled), this._super(e)
            },
            _controlChange: function (e) {
                return this._trigger("controlchange", e) === !1 ? !1 : void(this.mouseMoved || this.refresh(this._value(), !0))
            },
            _controlKeyup: function () {
                this.refresh(this._value(), !0, !0)
            },
            _controlBlur: function () {
                this.refresh(this._value(), !0)
            },
            _controlVMouseUp: function () {
                this._checkedRefresh()
            },
            _handleVMouseDown: function () {
                this.handle.focus()
            },
            _handleKeydown: function (t) {
                var i = this._value();
                if (!this.options.disabled) {
                    switch (t.keyCode) {
                        case e.mobile.keyCode.HOME:
                        case e.mobile.keyCode.END:
                        case e.mobile.keyCode.PAGE_UP:
                        case e.mobile.keyCode.PAGE_DOWN:
                        case e.mobile.keyCode.UP:
                        case e.mobile.keyCode.RIGHT:
                        case e.mobile.keyCode.DOWN:
                        case e.mobile.keyCode.LEFT:
                            t.preventDefault(), this._keySliding || (this._keySliding = !0, this.handle.addClass("ui-state-active"))
                    }
                    switch (t.keyCode) {
                        case e.mobile.keyCode.HOME:
                            this.refresh(this.min);
                            break;
                        case e.mobile.keyCode.END:
                            this.refresh(this.max);
                            break;
                        case e.mobile.keyCode.PAGE_UP:
                        case e.mobile.keyCode.UP:
                        case e.mobile.keyCode.RIGHT:
                            this.refresh(i + this.step);
                            break;
                        case e.mobile.keyCode.PAGE_DOWN:
                        case e.mobile.keyCode.DOWN:
                        case e.mobile.keyCode.LEFT:
                            this.refresh(i - this.step)
                    }
                }
            },
            _handleKeyup: function () {
                this._keySliding && (this._keySliding = !1, this.handle.removeClass("ui-state-active"))
            },
            _sliderVMouseDown: function (e) {
                return this.options.disabled || 1 !== e.which && 0 !== e.which && e.which !== n ? !1 : this._trigger("beforestart", e) === !1 ? !1 : (this.dragging = !0, this.userModified = !1, this.mouseMoved = !1, this.isToggleSwitch && (this.beforeStart = this.element[0].selectedIndex), this.refresh(e), this._trigger("start"), !1)
            },
            _sliderVMouseUp: function () {
                return this.dragging ? (this.dragging = !1, this.isToggleSwitch && (this.handle.addClass("ui-slider-handle-snapping"), this.refresh(this.mouseMoved ? this.userModified ? 0 === this.beforeStart ? 1 : 0 : this.beforeStart : 0 === this.beforeStart ? 1 : 0)), this.mouseMoved = !1, this._trigger("stop"), !1) : void 0
            },
            _preventDocumentDrag: function (e) {
                return this._trigger("drag", e) === !1 ? !1 : this.dragging && !this.options.disabled ? (this.mouseMoved = !0, this.isToggleSwitch && this.handle.removeClass("ui-slider-handle-snapping"), this.refresh(e), this.userModified = this.beforeStart !== this.element[0].selectedIndex, !1) : void 0
            },
            _checkedRefresh: function () {
                this.value !== this._value() && this.refresh(this._value())
            },
            _value: function () {
                return this.isToggleSwitch ? this.element[0].selectedIndex : parseFloat(this.element.val())
            },
            _reset: function () {
                this.refresh(n, !1, !0)
            },
            refresh: function (t, n, o) {
                var s, a, r, l, c, h, u, d, p, f, m, g, b, v, _, y, x, w, C, T, S = this, k = e.mobile.getAttribute(this.element[0], "theme"), P = this.options.theme || k, D = P ? " ui-btn-" + P : "", E = this.options.trackTheme || k, A = E ? " ui-bar-" + E : " ui-bar-inherit", I = this.options.corners ? " ui-corner-all" : "", N = this.options.mini ? " ui-mini" : "";
                if (S.slider[0].className = [this.isToggleSwitch ? "ui-slider ui-slider-switch ui-slider-track ui-shadow-inset" : "ui-slider-track ui-shadow-inset", A, I, N].join(""), (this.options.disabled || this.element.prop("disabled")) && this.disable(), this.value = this._value(), this.options.highlight && !this.isToggleSwitch && 0 === this.slider.find(".ui-slider-bg").length && (this.valuebg = function () {
                        var t = i.createElement("div");
                        return t.className = "ui-slider-bg " + e.mobile.activeBtnClass, e(t).prependTo(S.slider)
                    }()), this.handle.addClass("ui-btn" + D + " ui-shadow"), u = this.element, d = !this.isToggleSwitch, p = d ? [] : u.find("option"), f = d ? parseFloat(u.attr("min")) : 0, m = d ? parseFloat(u.attr("max")) : p.length - 1, g = d && parseFloat(u.attr("step")) > 0 ? parseFloat(u.attr("step")) : 1, "object" == typeof t) {
                    if (r = t, l = 8, s = this.slider.offset().left, a = this.slider.width(), c = a / ((m - f) / g), !this.dragging || r.pageX < s - l || r.pageX > s + a + l)return;
                    h = c > 1 ? (r.pageX - s) / a * 100 : Math.round((r.pageX - s) / a * 100)
                } else null == t && (t = d ? parseFloat(u.val() || 0) : u[0].selectedIndex), h = (parseFloat(t) - f) / (m - f) * 100;
                if (!isNaN(h) && (b = h / 100 * (m - f) + f, v = (b - f) % g, _ = b - v, 2 * Math.abs(v) >= g && (_ += v > 0 ? g : -g), y = 100 / ((m - f) / g), b = parseFloat(_.toFixed(5)), "undefined" == typeof c && (c = a / ((m - f) / g)), c > 1 && d && (h = (b - f) * y * (1 / g)), 0 > h && (h = 0), h > 100 && (h = 100), f > b && (b = f), b > m && (b = m), this.handle.css("left", h + "%"), this.handle[0].setAttribute("aria-valuenow", d ? b : p.eq(b).attr("value")), this.handle[0].setAttribute("aria-valuetext", d ? b : p.eq(b).getEncodedText()), this.handle[0].setAttribute("title", d ? b : p.eq(b).getEncodedText()), this.valuebg && this.valuebg.css("width", h + "%"), this._labels && (x = this.handle.width() / this.slider.width() * 100, w = h && x + (100 - x) * h / 100, C = 100 === h ? 0 : Math.min(x + 100 - w, 100), this._labels.each(function () {
                        var t = e(this).hasClass("ui-slider-label-a");
                        e(this).width((t ? w : C) + "%")
                    })), !o)) {
                    if (T = !1, d ? (T = parseFloat(u.val()) !== b, u.val(b)) : (T = u[0].selectedIndex !== b, u[0].selectedIndex = b), this._trigger("beforechange", t) === !1)return !1;
                    !n && T && u.trigger("change")
                }
            },
            _setHighlight: function (e) {
                e = !!e, e ? (this.options.highlight = !!e, this.refresh()) : this.valuebg && (this.valuebg.remove(), this.valuebg = !1)
            },
            _setTheme: function (e) {
                this.handle.removeClass("ui-btn-" + this.options.theme).addClass("ui-btn-" + e);
                var t = this.options.theme ? this.options.theme : "inherit", i = e ? e : "inherit";
                this.control.removeClass("ui-body-" + t).addClass("ui-body-" + i)
            },
            _setTrackTheme: function (e) {
                var t = this.options.trackTheme ? this.options.trackTheme : "inherit", i = e ? e : "inherit";
                this.slider.removeClass("ui-body-" + t).addClass("ui-body-" + i)
            },
            _setMini: function (e) {
                e = !!e, this.isToggleSwitch || this.isRangeslider || (this.slider.parent().toggleClass("ui-mini", e), this.element.toggleClass("ui-mini", e)), this.slider.toggleClass("ui-mini", e)
            },
            _setCorners: function (e) {
                this.slider.toggleClass("ui-corner-all", e), this.isToggleSwitch || this.control.toggleClass("ui-corner-all", e)
            },
            _setDisabled: function (e) {
                e = !!e, this.element.prop("disabled", e), this.slider.toggleClass("ui-state-disabled", e).attr("aria-disabled", e), this.element.toggleClass("ui-state-disabled", e)
            }
        }, e.mobile.behaviors.formReset))
    }(e), function (e) {
        function t() {
            return i || (i = e("<div></div>", {"class": "ui-slider-popup ui-shadow ui-corner-all"})), i.clone()
        }

        var i;
        e.widget("mobile.slider", e.mobile.slider, {
            options: {popupEnabled: !1, showValue: !1}, _create: function () {
                this._super(), e.extend(this, {
                    _currentValue: null,
                    _popup: null,
                    _popupVisible: !1
                }), this._setOption("popupEnabled", this.options.popupEnabled), this._on(this.handle, {vmousedown: "_showPopup"}), this._on(this.slider.add(this.document), {vmouseup: "_hidePopup"}), this._refresh()
            }, _positionPopup: function () {
                var e = this.handle.offset();
                this._popup.offset({
                    left: e.left + (this.handle.width() - this._popup.width()) / 2,
                    top: e.top - this._popup.outerHeight() - 5
                })
            }, _setOption: function (e, i) {
                this._super(e, i), "showValue" === e ? this.handle.html(i && !this.options.mini ? this._value() : "") : "popupEnabled" === e && i && !this._popup && (this._popup = t().addClass("ui-body-" + (this.options.theme || "a")).hide().insertBefore(this.element))
            }, refresh: function () {
                this._super.apply(this, arguments), this._refresh()
            }, _refresh: function () {
                var e, t = this.options;
                t.popupEnabled && this.handle.removeAttr("title"), e = this._value(), e !== this._currentValue && (this._currentValue = e, t.popupEnabled && this._popup && (this._positionPopup(), this._popup.html(e)), t.showValue && !this.options.mini && this.handle.html(e))
            }, _showPopup: function () {
                this.options.popupEnabled && !this._popupVisible && (this.handle.html(""), this._popup.show(), this._positionPopup(), this._popupVisible = !0)
            }, _hidePopup: function () {
                var e = this.options;
                e.popupEnabled && this._popupVisible && (e.showValue && !e.mini && this.handle.html(this._value()), this._popup.hide(), this._popupVisible = !1)
            }
        })
    }(e), function (e, t) {
        e.widget("mobile.flipswitch", e.extend({
            options: {
                onText: "On",
                offText: "Off",
                theme: null,
                enhanced: !1,
                wrapperClass: null,
                corners: !0,
                mini: !1
            }, _create: function () {
                this.options.enhanced ? e.extend(this, {
                    flipswitch: this.element.parent(),
                    on: this.element.find(".ui-flipswitch-on").eq(0),
                    off: this.element.find(".ui-flipswitch-off").eq(0),
                    type: this.element.get(0).tagName
                }) : this._enhance(), this._handleFormReset(), this._originalTabIndex = this.element.attr("tabindex"), null != this._originalTabIndex && this.on.attr("tabindex", this._originalTabIndex), this.element.attr("tabindex", "-1"), this._on({focus: "_handleInputFocus"}), this.element.is(":disabled") && this._setOptions({disabled: !0}), this._on(this.flipswitch, {
                    click: "_toggle",
                    swipeleft: "_left",
                    swiperight: "_right"
                }), this._on(this.on, {keydown: "_keydown"}), this._on({change: "refresh"})
            }, _handleInputFocus: function () {
                this.on.focus()
            }, widget: function () {
                return this.flipswitch
            }, _left: function () {
                this.flipswitch.removeClass("ui-flipswitch-active"), "SELECT" === this.type ? this.element.get(0).selectedIndex = 0 : this.element.prop("checked", !1), this.element.trigger("change")
            }, _right: function () {
                this.flipswitch.addClass("ui-flipswitch-active"), "SELECT" === this.type ? this.element.get(0).selectedIndex = 1 : this.element.prop("checked", !0), this.element.trigger("change")
            }, _enhance: function () {
                var t = e("<div>"), i = this.options, n = this.element, o = i.theme ? i.theme : "inherit", s = e("<a></a>", {href: "#"}), a = e("<span></span>"), r = n.get(0).tagName, l = "INPUT" === r ? i.onText : n.find("option").eq(1).text(), c = "INPUT" === r ? i.offText : n.find("option").eq(0).text();
                s.addClass("ui-flipswitch-on ui-btn ui-shadow ui-btn-inherit").text(l), a.addClass("ui-flipswitch-off").text(c), t.addClass("ui-flipswitch ui-shadow-inset ui-bar-" + o + " " + (i.wrapperClass ? i.wrapperClass : "") + " " + (n.is(":checked") || n.find("option").eq(1).is(":selected") ? "ui-flipswitch-active" : "") + (n.is(":disabled") ? " ui-state-disabled" : "") + (i.corners ? " ui-corner-all" : "") + (i.mini ? " ui-mini" : "")).append(s, a), n.addClass("ui-flipswitch-input").after(t).appendTo(t), e.extend(this, {
                    flipswitch: t,
                    on: s,
                    off: a,
                    type: r
                })
            }, _reset: function () {
                this.refresh()
            }, refresh: function () {
                var e, t = this.flipswitch.hasClass("ui-flipswitch-active") ? "_right" : "_left";
                e = "SELECT" === this.type ? this.element.get(0).selectedIndex > 0 ? "_right" : "_left" : this.element.prop("checked") ? "_right" : "_left", e !== t && this[e]()
            }, _toggle: function () {
                var e = this.flipswitch.hasClass("ui-flipswitch-active") ? "_left" : "_right";
                this[e]()
            }, _keydown: function (t) {
                t.which === e.mobile.keyCode.LEFT ? this._left() : t.which === e.mobile.keyCode.RIGHT ? this._right() : t.which === e.mobile.keyCode.SPACE && (this._toggle(), t.preventDefault())
            }, _setOptions: function (e) {
                if (e.theme !== t) {
                    var i = e.theme ? e.theme : "inherit", n = e.theme ? e.theme : "inherit";
                    this.widget().removeClass("ui-bar-" + i).addClass("ui-bar-" + n)
                }
                e.onText !== t && this.on.text(e.onText), e.offText !== t && this.off.text(e.offText), e.disabled !== t && this.widget().toggleClass("ui-state-disabled", e.disabled), e.mini !== t && this.widget().toggleClass("ui-mini", e.mini), e.corners !== t && this.widget().toggleClass("ui-corner-all", e.corners), this._super(e)
            }, _destroy: function () {
                this.options.enhanced || (null != this._originalTabIndex ? this.element.attr("tabindex", this._originalTabIndex) : this.element.removeAttr("tabindex"), this.on.remove(), this.off.remove(), this.element.unwrap(), this.flipswitch.remove(), this.removeClass("ui-flipswitch-input"))
            }
        }, e.mobile.behaviors.formReset))
    }(e), function (e, t) {
        e.widget("mobile.rangeslider", e.extend({
            options: {
                theme: null,
                trackTheme: null,
                corners: !0,
                mini: !1,
                highlight: !0
            }, _create: function () {
                var t = this.element, i = this.options.mini ? "ui-rangeslider ui-mini" : "ui-rangeslider", n = t.find("input").first(), o = t.find("input").last(), s = t.find("label").first(), a = e.data(n.get(0), "mobile-slider") || e.data(n.slider().get(0), "mobile-slider"), r = e.data(o.get(0), "mobile-slider") || e.data(o.slider().get(0), "mobile-slider"), l = a.slider, c = r.slider, h = a.handle, u = e("<div class='ui-rangeslider-sliders' />").appendTo(t);
                n.addClass("ui-rangeslider-first"), o.addClass("ui-rangeslider-last"), t.addClass(i), l.appendTo(u), c.appendTo(u), s.insertBefore(t), h.prependTo(c), e.extend(this, {
                    _inputFirst: n,
                    _inputLast: o,
                    _sliderFirst: l,
                    _sliderLast: c,
                    _label: s,
                    _targetVal: null,
                    _sliderTarget: !1,
                    _sliders: u,
                    _proxy: !1
                }), this.refresh(), this._on(this.element.find("input.ui-slider-input"), {
                    slidebeforestart: "_slidebeforestart",
                    slidestop: "_slidestop",
                    slidedrag: "_slidedrag",
                    slidebeforechange: "_change",
                    blur: "_change",
                    keyup: "_change"
                }), this._on({mousedown: "_change"}), this._on(this.element.closest("form"), {reset: "_handleReset"}), this._on(h, {vmousedown: "_dragFirstHandle"})
            }, _handleReset: function () {
                var e = this;
                setTimeout(function () {
                    e._updateHighlight()
                }, 0)
            }, _dragFirstHandle: function (t) {
                return e.data(this._inputFirst.get(0), "mobile-slider").dragging = !0, e.data(this._inputFirst.get(0), "mobile-slider").refresh(t), e.data(this._inputFirst.get(0), "mobile-slider")._trigger("start"), !1
            }, _slidedrag: function (t) {
                var i = e(t.target).is(this._inputFirst), n = i ? this._inputLast : this._inputFirst;
                return this._sliderTarget = !1, "first" === this._proxy && i || "last" === this._proxy && !i ? (e.data(n.get(0), "mobile-slider").dragging = !0, e.data(n.get(0), "mobile-slider").refresh(t), !1) : void 0
            }, _slidestop: function (t) {
                var i = e(t.target).is(this._inputFirst);
                this._proxy = !1, this.element.find("input").trigger("vmouseup"), this._sliderFirst.css("z-index", i ? 1 : "")
            }, _slidebeforestart: function (t) {
                this._sliderTarget = !1, e(t.originalEvent.target).hasClass("ui-slider-track") && (this._sliderTarget = !0, this._targetVal = e(t.target).val())
            }, _setOptions: function (e) {
                e.theme !== t && this._setTheme(e.theme), e.trackTheme !== t && this._setTrackTheme(e.trackTheme), e.mini !== t && this._setMini(e.mini), e.highlight !== t && this._setHighlight(e.highlight), e.disabled !== t && this._setDisabled(e.disabled), this._super(e), this.refresh()
            }, refresh: function () {
                var e = this.element, t = this.options;
                (this._inputFirst.is(":disabled") || this._inputLast.is(":disabled")) && (this.options.disabled = !0), e.find("input").slider({
                    theme: t.theme,
                    trackTheme: t.trackTheme,
                    disabled: t.disabled,
                    corners: t.corners,
                    mini: t.mini,
                    highlight: t.highlight
                }).slider("refresh"), this._updateHighlight()
            }, _change: function (t) {
                if ("keyup" === t.type)return this._updateHighlight(), !1;
                var i = this, n = parseFloat(this._inputFirst.val(), 10), o = parseFloat(this._inputLast.val(), 10), s = e(t.target).hasClass("ui-rangeslider-first"), a = s ? this._inputFirst : this._inputLast, r = s ? this._inputLast : this._inputFirst;
                if (this._inputFirst.val() > this._inputLast.val() && "mousedown" === t.type && !e(t.target).hasClass("ui-slider-handle"))a.blur(); else if ("mousedown" === t.type)return;
                return n > o && !this._sliderTarget ? (a.val(s ? o : n).slider("refresh"), this._trigger("normalize")) : n > o && (a.val(this._targetVal).slider("refresh"), setTimeout(function () {
                    r.val(s ? n : o).slider("refresh"), e.data(r.get(0), "mobile-slider").handle.focus(), i._sliderFirst.css("z-index", s ? "" : 1), i._trigger("normalize")
                }, 0), this._proxy = s ? "first" : "last"), n === o ? (e.data(a.get(0), "mobile-slider").handle.css("z-index", 1), e.data(r.get(0), "mobile-slider").handle.css("z-index", 0)) : (e.data(r.get(0), "mobile-slider").handle.css("z-index", ""), e.data(a.get(0), "mobile-slider").handle.css("z-index", "")), this._updateHighlight(), n >= o ? !1 : void 0
            }, _updateHighlight: function () {
                var t = parseInt(e.data(this._inputFirst.get(0), "mobile-slider").handle.get(0).style.left, 10), i = parseInt(e.data(this._inputLast.get(0), "mobile-slider").handle.get(0).style.left, 10), n = i - t;
                this.element.find(".ui-slider-bg").css({"margin-left": t + "%", width: n + "%"})
            }, _setTheme: function (e) {
                this._inputFirst.slider("option", "theme", e), this._inputLast.slider("option", "theme", e)
            }, _setTrackTheme: function (e) {
                this._inputFirst.slider("option", "trackTheme", e), this._inputLast.slider("option", "trackTheme", e)
            }, _setMini: function (e) {
                this._inputFirst.slider("option", "mini", e), this._inputLast.slider("option", "mini", e), this.element.toggleClass("ui-mini", !!e)
            }, _setHighlight: function (e) {
                this._inputFirst.slider("option", "highlight", e), this._inputLast.slider("option", "highlight", e)
            }, _setDisabled: function (e) {
                this._inputFirst.prop("disabled", e), this._inputLast.prop("disabled", e)
            }, _destroy: function () {
                this._label.prependTo(this.element), this.element.removeClass("ui-rangeslider ui-mini"), this._inputFirst.after(this._sliderFirst), this._inputLast.after(this._sliderLast), this._sliders.remove(), this.element.find("input").removeClass("ui-rangeslider-first ui-rangeslider-last").slider("destroy")
            }
        }, e.mobile.behaviors.formReset))
    }(e), function (e, t) {
        e.widget("mobile.textinput", e.mobile.textinput, {
            options: {clearBtn: !1, clearBtnText: "Clear text"},
            _create: function () {
                this._super(), this.isSearch && (this.options.clearBtn = !0), this.options.clearBtn && this.inputNeedsWrap && this._addClearBtn()
            },
            clearButton: function () {
                return e("<a href='#' tabindex='-1' aria-hidden='true' class='ui-input-clear ui-btn ui-icon-delete ui-btn-icon-notext ui-corner-all'></a>").attr("title", this.options.clearBtnText).text(this.options.clearBtnText)
            },
            _clearBtnClick: function (e) {
                this.element.val("").focus().trigger("change"), this._clearBtn.addClass("ui-input-clear-hidden"), e.preventDefault()
            },
            _addClearBtn: function () {
                this.options.enhanced || this._enhanceClear(), e.extend(this, {_clearBtn: this.widget().find("a.ui-input-clear")}), this._bindClearEvents(), this._toggleClear()
            },
            _enhanceClear: function () {
                this.clearButton().appendTo(this.widget()), this.widget().addClass("ui-input-has-clear")
            },
            _bindClearEvents: function () {
                this._on(this._clearBtn, {click: "_clearBtnClick"}), this._on({
                    keyup: "_toggleClear",
                    change: "_toggleClear",
                    input: "_toggleClear",
                    focus: "_toggleClear",
                    blur: "_toggleClear",
                    cut: "_toggleClear",
                    paste: "_toggleClear"
                })
            },
            _unbindClear: function () {
                this._off(this._clearBtn, "click"), this._off(this.element, "keyup change input focus blur cut paste")
            },
            _setOptions: function (e) {
                this._super(e), e.clearBtn === t || this.element.is("textarea, :jqmData(type='range')") || (e.clearBtn ? this._addClearBtn() : this._destroyClear()), e.clearBtnText !== t && this._clearBtn !== t && this._clearBtn.text(e.clearBtnText).attr("title", e.clearBtnText)
            },
            _toggleClear: function () {
                this._delay("_toggleClearClass", 0)
            },
            _toggleClearClass: function () {
                this._clearBtn.toggleClass("ui-input-clear-hidden", !this.element.val())
            },
            _destroyClear: function () {
                this.widget().removeClass("ui-input-has-clear"), this._unbindClear(), this._clearBtn.remove()
            },
            _destroy: function () {
                this._super(), this.options.clearBtn && this._destroyClear()
            }
        })
    }(e), function (e, t) {
        e.widget("mobile.textinput", e.mobile.textinput, {
            options: {autogrow: !0, keyupTimeoutBuffer: 100},
            _create: function () {
                this._super(), this.options.autogrow && this.isTextarea && this._autogrow()
            },
            _autogrow: function () {
                this.element.addClass("ui-textinput-autogrow"), this._on({
                    keyup: "_timeout",
                    change: "_timeout",
                    input: "_timeout",
                    paste: "_timeout"
                }), this._on(!0, this.document, {
                    pageshow: "_handleShow",
                    popupbeforeposition: "_handleShow",
                    updatelayout: "_handleShow",
                    panelopen: "_handleShow"
                })
            },
            _handleShow: function (t) {
                e.contains(t.target, this.element[0]) && this.element.is(":visible") && ("popupbeforeposition" !== t.type && this.element.addClass("ui-textinput-autogrow-resize").animationComplete(e.proxy(function () {
                    this.element.removeClass("ui-textinput-autogrow-resize")
                }, this), "transition"), this._prepareHeightUpdate())
            },
            _unbindAutogrow: function () {
                this.element.removeClass("ui-textinput-autogrow"), this._off(this.element, "keyup change input paste"), this._off(this.document, "pageshow popupbeforeposition updatelayout panelopen")
            },
            keyupTimeout: null,
            _prepareHeightUpdate: function (e) {
                this.keyupTimeout && clearTimeout(this.keyupTimeout), e === t ? this._updateHeight() : this.keyupTimeout = this._delay("_updateHeight", e)
            },
            _timeout: function () {
                this._prepareHeightUpdate(this.options.keyupTimeoutBuffer)
            },
            _updateHeight: function () {
                var e, t, i, n, o, s, a, r, l, c = this.window.scrollTop();
                this.keyupTimeout = 0, "onpage"in this.element[0] || this.element.css({
                    height: 0,
                    "min-height": 0,
                    "max-height": 0
                }), n = this.element[0].scrollHeight, o = this.element[0].clientHeight, s = parseFloat(this.element.css("border-top-width")), a = parseFloat(this.element.css("border-bottom-width")), r = s + a, l = n + r + 15, 0 === o && (e = parseFloat(this.element.css("padding-top")), t = parseFloat(this.element.css("padding-bottom")), i = e + t, l += i), this.element.css({
                    height: l,
                    "min-height": "",
                    "max-height": ""
                }), this.window.scrollTop(c)
            },
            refresh: function () {
                this.options.autogrow && this.isTextarea && this._updateHeight()
            },
            _setOptions: function (e) {
                this._super(e), e.autogrow !== t && this.isTextarea && (e.autogrow ? this._autogrow() : this._unbindAutogrow())
            }
        })
    }(e), function (e) {
        e.widget("mobile.selectmenu", e.extend({
            initSelector: "select:not( :jqmData(role='slider')):not( :jqmData(role='flipswitch') )",
            options: {
                theme: null,
                icon: "carat-d",
                iconpos: "right",
                inline: !1,
                corners: !0,
                shadow: !0,
                iconshadow: !1,
                overlayTheme: null,
                dividerTheme: null,
                hidePlaceholderMenuItems: !0,
                closeText: "Close",
                nativeMenu: !0,
                preventFocusZoom: /iPhone|iPad|iPod/.test(navigator.platform) && navigator.userAgent.indexOf("AppleWebKit") > -1,
                mini: !1
            },
            _button: function () {
                return e("<div/>")
            },
            _setDisabled: function (e) {
                return this.element.attr("disabled", e), this.button.attr("aria-disabled", e), this._setOption("disabled", e)
            },
            _focusButton: function () {
                var e = this;
                setTimeout(function () {
                    e.button.focus()
                }, 40)
            },
            _selectOptions: function () {
                return this.select.find("option")
            },
            _preExtension: function () {
                var t = this.options.inline || this.element.jqmData("inline"), i = this.options.mini || this.element.jqmData("mini"), n = "";
                ~this.element[0].className.indexOf("ui-btn-left") && (n = " ui-btn-left"), ~this.element[0].className.indexOf("ui-btn-right") && (n = " ui-btn-right"), t && (n += " ui-btn-inline"), i && (n += " ui-mini"), this.select = this.element.removeClass("ui-btn-left ui-btn-right").wrap("<div class='ui-select" + n + "'>"), this.selectId = this.select.attr("id") || "select-" + this.uuid, this.buttonId = this.selectId + "-button", this.label = e("label[for='" + this.selectId + "']"), this.isMultiple = this.select[0].multiple
            },
            _destroy: function () {
                var e = this.element.parents(".ui-select");
                e.length > 0 && (e.is(".ui-btn-left, .ui-btn-right") && this.element.addClass(e.hasClass("ui-btn-left") ? "ui-btn-left" : "ui-btn-right"), this.element.insertAfter(e), e.remove())
            },
            _create: function () {
                this._preExtension(), this.button = this._button();
                var i = this, n = this.options, o = n.icon ? n.iconpos || this.select.jqmData("iconpos") : !1, s = this.button.insertBefore(this.select).attr("id", this.buttonId).addClass("ui-btn" + (n.icon ? " ui-icon-" + n.icon + " ui-btn-icon-" + o + (n.iconshadow ? " ui-shadow-icon" : "") : "") + (n.theme ? " ui-btn-" + n.theme : "") + (n.corners ? " ui-corner-all" : "") + (n.shadow ? " ui-shadow" : ""));
                this.setButtonText(), n.nativeMenu && t.opera && t.opera.version && s.addClass("ui-select-nativeonly"), this.isMultiple && (this.buttonCount = e("<span>").addClass("ui-li-count ui-body-inherit").hide().appendTo(s.addClass("ui-li-has-count"))), (n.disabled || this.element.attr("disabled")) && this.disable(), this.select.change(function () {
                    i.refresh(), n.nativeMenu && i._delay(function () {
                        i.select.blur()
                    })
                }), this._handleFormReset(), this._on(this.button, {keydown: "_handleKeydown"}), this.build()
            },
            build: function () {
                var t = this;
                this.select.appendTo(t.button).bind("vmousedown", function () {
                    t.button.addClass(e.mobile.activeBtnClass)
                }).bind("focus", function () {
                    t.button.addClass(e.mobile.focusClass)
                }).bind("blur", function () {
                    t.button.removeClass(e.mobile.focusClass)
                }).bind("focus vmouseover", function () {
                    t.button.trigger("vmouseover")
                }).bind("vmousemove", function () {
                    t.button.removeClass(e.mobile.activeBtnClass)
                }).bind("change blur vmouseout", function () {
                    t.button.trigger("vmouseout").removeClass(e.mobile.activeBtnClass)
                }), t.button.bind("vmousedown", function () {
                    t.options.preventFocusZoom && e.mobile.zoom.disable(!0)
                }), t.label.bind("click focus", function () {
                    t.options.preventFocusZoom && e.mobile.zoom.disable(!0)
                }), t.select.bind("focus", function () {
                    t.options.preventFocusZoom && e.mobile.zoom.disable(!0)
                }), t.button.bind("mouseup", function () {
                    t.options.preventFocusZoom && setTimeout(function () {
                        e.mobile.zoom.enable(!0)
                    }, 0)
                }), t.select.bind("blur", function () {
                    t.options.preventFocusZoom && e.mobile.zoom.enable(!0)
                })
            },
            selected: function () {
                return this._selectOptions().filter(":selected")
            },
            selectedIndices: function () {
                var e = this;
                return this.selected().map(function () {
                    return e._selectOptions().index(this)
                }).get()
            },
            setButtonText: function () {
                var t = this, n = this.selected(), o = this.placeholder, s = e(i.createElement("span"));
                this.button.children("span").not(".ui-li-count").remove().end().end().prepend(function () {
                    return o = n.length ? n.map(function () {
                        return e(this).text()
                    }).get().join(", ") : t.placeholder, o ? s.text(o) : s.html("&#160;"), s.addClass(t.select.attr("class")).addClass(n.attr("class")).removeClass("ui-screen-hidden")
                }())
            },
            setButtonCount: function () {
                var e = this.selected();
                this.isMultiple && this.buttonCount[e.length > 1 ? "show" : "hide"]().text(e.length)
            },
            _handleKeydown: function () {
                this._delay("_refreshButton")
            },
            _reset: function () {
                this.refresh()
            },
            _refreshButton: function () {
                this.setButtonText(), this.setButtonCount()
            },
            refresh: function () {
                this._refreshButton()
            },
            open: e.noop,
            close: e.noop,
            disable: function () {
                this._setDisabled(!0), this.button.addClass("ui-state-disabled")
            },
            enable: function () {
                this._setDisabled(!1), this.button.removeClass("ui-state-disabled")
            }
        }, e.mobile.behaviors.formReset))
    }(e), function (e) {
        e.mobile.links = function (t) {
            e(t).find("a").jqmEnhanceable().filter(":jqmData(rel='popup')[href][href!='']").each(function () {
                var e = this, t = e.getAttribute("href").substring(1);
                t && (e.setAttribute("aria-haspopup", !0), e.setAttribute("aria-owns", t), e.setAttribute("aria-expanded", !1))
            }).end().not(".ui-btn, :jqmData(role='none'), :jqmData(role='nojs')").addClass("ui-link")
        }
    }(e), function (e, i) {
        function n(e, t, i, n) {
            var o = n;
            return o = t > e ? i + (e - t) / 2 : Math.min(Math.max(i, n - t / 2), i + e - t)
        }

        function o(e) {
            return {
                x: e.scrollLeft(),
                y: e.scrollTop(),
                cx: e[0].innerWidth || e.width(),
                cy: e[0].innerHeight || e.height()
            }
        }

        e.widget("mobile.popup", {
            options: {
                wrapperClass: null,
                theme: null,
                overlayTheme: null,
                shadow: !0,
                corners: !0,
                transition: "none",
                positionTo: "origin",
                tolerance: null,
                closeLinkSelector: "a:jqmData(rel='back')",
                closeLinkEvents: "click.popup",
                navigateEvents: "navigate.popup",
                closeEvents: "navigate.popup pagebeforechange.popup",
                dismissible: !0,
                enhanced: !1,
                history: !e.mobile.browser.oldIE
            }, _handleDocumentVmousedown: function (t) {
                this._isOpen && e.contains(this._ui.container[0], t.target) && this._ignoreResizeEvents()
            }, _create: function () {
                var t = this.element, i = t.attr("id"), n = this.options;
                n.history = n.history && e.mobile.ajaxEnabled && e.mobile.hashListeningEnabled, this._on(this.document, {vmousedown: "_handleDocumentVmousedown"}), e.extend(this, {
                    _scrollTop: 0,
                    _page: t.closest(".ui-page"),
                    _ui: null,
                    _fallbackTransition: "",
                    _currentTransition: !1,
                    _prerequisites: null,
                    _isOpen: !1,
                    _tolerance: null,
                    _resizeData: null,
                    _ignoreResizeTo: 0,
                    _orientationchangeInProgress: !1
                }), 0 === this._page.length && (this._page = e("body")), n.enhanced ? this._ui = {
                    container: t.parent(),
                    screen: t.parent().prev(),
                    placeholder: e(this.document[0].getElementById(i + "-placeholder"))
                } : (this._ui = this._enhance(t, i), this._applyTransition(n.transition)), this._setTolerance(n.tolerance)._ui.focusElement = this._ui.container, this._on(this._ui.screen, {vclick: "_eatEventAndClose"}), this._on(this.window, {
                    orientationchange: e.proxy(this, "_handleWindowOrientationchange"),
                    resize: e.proxy(this, "_handleWindowResize"),
                    keyup: e.proxy(this, "_handleWindowKeyUp")
                }), this._on(this.document, {focusin: "_handleDocumentFocusIn"})
            }, _enhance: function (t, i) {
                var n = this.options, o = n.wrapperClass, s = {
                    screen: e("<div class='ui-screen-hidden ui-popup-screen " + this._themeClassFromOption("ui-overlay-", n.overlayTheme) + "'></div>"),
                    placeholder: e("<div style='display: none;'><!-- placeholder --></div>"),
                    container: e("<div class='ui-popup-container ui-popup-hidden ui-popup-truncate" + (o ? " " + o : "") + "'></div>")
                }, a = this.document[0].createDocumentFragment();
                return a.appendChild(s.screen[0]), a.appendChild(s.container[0]), i && (s.screen.attr("id", i + "-screen"), s.container.attr("id", i + "-popup"), s.placeholder.attr("id", i + "-placeholder").html("<!-- placeholder for " + i + " -->")), this._page[0].appendChild(a), s.placeholder.insertAfter(t), t.detach().addClass("ui-popup " + this._themeClassFromOption("ui-body-", n.theme) + " " + (n.shadow ? "ui-overlay-shadow " : "") + (n.corners ? "ui-corner-all " : "")).appendTo(s.container), s
            }, _eatEventAndClose: function (e) {
                return e.preventDefault(), e.stopImmediatePropagation(), this.options.dismissible && this.close(), !1
            }, _resizeScreen: function () {
                var e = this._ui.screen, t = this._ui.container.outerHeight(!0), i = e.removeAttr("style").height(), n = this.document.height() - 1;
                n > i ? e.height(n) : t > i && e.height(t)
            }, _handleWindowKeyUp: function (t) {
                return this._isOpen && t.keyCode === e.mobile.keyCode.ESCAPE ? this._eatEventAndClose(t) : void 0
            }, _expectResizeEvent: function () {
                var e = o(this.window);
                if (this._resizeData) {
                    if (e.x === this._resizeData.windowCoordinates.x && e.y === this._resizeData.windowCoordinates.y && e.cx === this._resizeData.windowCoordinates.cx && e.cy === this._resizeData.windowCoordinates.cy)return !1;
                    clearTimeout(this._resizeData.timeoutId)
                }
                return this._resizeData = {timeoutId: this._delay("_resizeTimeout", 200), windowCoordinates: e}, !0
            }, _resizeTimeout: function () {
                this._isOpen ? this._expectResizeEvent() || (this._ui.container.hasClass("ui-popup-hidden") && (this._ui.container.removeClass("ui-popup-hidden ui-popup-truncate"), this.reposition({positionTo: "window"}), this._ignoreResizeEvents()), this._resizeScreen(), this._resizeData = null, this._orientationchangeInProgress = !1) : (this._resizeData = null, this._orientationchangeInProgress = !1)
            }, _stopIgnoringResizeEvents: function () {
                this._ignoreResizeTo = 0
            }, _ignoreResizeEvents: function () {
                this._ignoreResizeTo && clearTimeout(this._ignoreResizeTo), this._ignoreResizeTo = this._delay("_stopIgnoringResizeEvents", 1e3)
            }, _handleWindowResize: function () {
                this._isOpen && 0 === this._ignoreResizeTo && (!this._expectResizeEvent() && !this._orientationchangeInProgress || this._ui.container.hasClass("ui-popup-hidden") || this._ui.container.addClass("ui-popup-hidden ui-popup-truncate").removeAttr("style"))
            }, _handleWindowOrientationchange: function () {
                !this._orientationchangeInProgress && this._isOpen && 0 === this._ignoreResizeTo && (this._expectResizeEvent(), this._orientationchangeInProgress = !0)
            }, _handleDocumentFocusIn: function (t) {
                var i, n = t.target, o = this._ui;
                if (this._isOpen) {
                    if (n !== o.container[0]) {
                        if (i = e(n), !e.contains(o.container[0], n))return e(this.document[0].activeElement).one("focus", e.proxy(function () {
                            this._safelyBlur(n)
                        }, this)), o.focusElement.focus(), t.preventDefault(), t.stopImmediatePropagation(), !1;
                        o.focusElement[0] === o.container[0] && (o.focusElement = i)
                    }
                    this._ignoreResizeEvents()
                }
            }, _themeClassFromOption: function (e, t) {
                return t ? "none" === t ? "" : e + t : e + "inherit"
            }, _applyTransition: function (t) {
                return t && (this._ui.container.removeClass(this._fallbackTransition), "none" !== t && (this._fallbackTransition = e.mobile._maybeDegradeTransition(t), "none" === this._fallbackTransition && (this._fallbackTransition = ""), this._ui.container.addClass(this._fallbackTransition))), this
            }, _setOptions: function (e) {
                var t = this.options, n = this.element, o = this._ui.screen;
                return e.wrapperClass !== i && this._ui.container.removeClass(t.wrapperClass).addClass(e.wrapperClass), e.theme !== i && n.removeClass(this._themeClassFromOption("ui-body-", t.theme)).addClass(this._themeClassFromOption("ui-body-", e.theme)), e.overlayTheme !== i && (o.removeClass(this._themeClassFromOption("ui-overlay-", t.overlayTheme)).addClass(this._themeClassFromOption("ui-overlay-", e.overlayTheme)), this._isOpen && o.addClass("in")), e.shadow !== i && n.toggleClass("ui-overlay-shadow", e.shadow), e.corners !== i && n.toggleClass("ui-corner-all", e.corners), e.transition !== i && (this._currentTransition || this._applyTransition(e.transition)), e.tolerance !== i && this._setTolerance(e.tolerance), e.disabled !== i && e.disabled && this.close(), this._super(e)
            }, _setTolerance: function (t) {
                var n, o = {t: 30, r: 15, b: 30, l: 15};
                if (t !== i)switch (n = String(t).split(","), e.each(n, function (e, t) {
                    n[e] = parseInt(t, 10)
                }), n.length) {
                    case 1:
                        isNaN(n[0]) || (o.t = o.r = o.b = o.l = n[0]);
                        break;
                    case 2:
                        isNaN(n[0]) || (o.t = o.b = n[0]), isNaN(n[1]) || (o.l = o.r = n[1]);
                        break;
                    case 4:
                        isNaN(n[0]) || (o.t = n[0]), isNaN(n[1]) || (o.r = n[1]), isNaN(n[2]) || (o.b = n[2]), isNaN(n[3]) || (o.l = n[3])
                }
                return this._tolerance = o, this
            }, _clampPopupWidth: function (e) {
                var t, i = o(this.window), n = {
                    x: this._tolerance.l,
                    y: i.y + this._tolerance.t,
                    cx: i.cx - this._tolerance.l - this._tolerance.r,
                    cy: i.cy - this._tolerance.t - this._tolerance.b
                };
                return e || this._ui.container.css("max-width", n.cx), t = {
                    cx: this._ui.container.outerWidth(!0),
                    cy: this._ui.container.outerHeight(!0)
                }, {rc: n, menuSize: t}
            }, _calculateFinalLocation: function (e, t) {
                var i, o = t.rc, s = t.menuSize;
                return i = {
                    left: n(o.cx, s.cx, o.x, e.x),
                    top: n(o.cy, s.cy, o.y, e.y)
                }, i.top = Math.max(0, i.top), i.top -= Math.min(i.top, Math.max(0, i.top + s.cy - this.document.height())), i
            }, _placementCoords: function (e) {
                return this._calculateFinalLocation(e, this._clampPopupWidth())
            }, _createPrerequisites: function (t, i, n) {
                var o, s = this;
                o = {screen: e.Deferred(), container: e.Deferred()}, o.screen.then(function () {
                    o === s._prerequisites && t()
                }), o.container.then(function () {
                    o === s._prerequisites && i()
                }), e.when(o.screen, o.container).done(function () {
                    o === s._prerequisites && (s._prerequisites = null, n())
                }), s._prerequisites = o
            }, _animate: function (t) {
                return this._ui.screen.removeClass(t.classToRemove).addClass(t.screenClassToAdd), t.prerequisites.screen.resolve(), t.transition && "none" !== t.transition && (t.applyTransition && this._applyTransition(t.transition), this._fallbackTransition) ? void this._ui.container.addClass(t.containerClassToAdd).removeClass(t.classToRemove).animationComplete(e.proxy(t.prerequisites.container, "resolve")) : (this._ui.container.removeClass(t.classToRemove), void t.prerequisites.container.resolve())
            }, _desiredCoords: function (t) {
                var i, n = null, s = o(this.window), a = t.x, r = t.y, l = t.positionTo;
                if (l && "origin" !== l)if ("window" === l)a = s.cx / 2 + s.x, r = s.cy / 2 + s.y; else {
                    try {
                        n = e(l)
                    } catch (c) {
                        n = null
                    }
                    n && (n.filter(":visible"), 0 === n.length && (n = null))
                }
                return n && (i = n.offset(), a = i.left + n.outerWidth() / 2, r = i.top + n.outerHeight() / 2), ("number" !== e.type(a) || isNaN(a)) && (a = s.cx / 2 + s.x), ("number" !== e.type(r) || isNaN(r)) && (r = s.cy / 2 + s.y), {
                    x: a,
                    y: r
                }
            }, _reposition: function (e) {
                e = {
                    x: e.x,
                    y: e.y,
                    positionTo: e.positionTo
                }, this._trigger("beforeposition", i, e), this._ui.container.offset(this._placementCoords(this._desiredCoords(e)))
            }, reposition: function (e) {
                this._isOpen && this._reposition(e)
            }, _safelyBlur: function (t) {
                t !== this.window[0] && "body" !== t.nodeName.toLowerCase() && e(t).blur()
            }, _openPrerequisitesComplete: function () {
                var t = this.element.attr("id"), i = this._ui.container.find(":focusable").first();
                this._ui.container.addClass("ui-popup-active"), this._isOpen = !0, this._resizeScreen(), e.contains(this._ui.container[0], this.document[0].activeElement) || this._safelyBlur(this.document[0].activeElement), i.length > 0 && (this._ui.focusElement = i), this._ignoreResizeEvents(), t && this.document.find("[aria-haspopup='true'][aria-owns='" + t + "']").attr("aria-expanded", !0), this._trigger("afteropen")
            }, _open: function (t) {
                var i = e.extend({}, this.options, t), n = function () {
                    var e = navigator.userAgent, t = e.match(/AppleWebKit\/([0-9\.]+)/), i = !!t && t[1], n = e.match(/Android (\d+(?:\.\d+))/), o = !!n && n[1], s = e.indexOf("Chrome") > -1;
                    return null !== n && "4.0" === o && i && i > 534.13 && !s ? !0 : !1
                }();
                this._createPrerequisites(e.noop, e.noop, e.proxy(this, "_openPrerequisitesComplete")), this._currentTransition = i.transition, this._applyTransition(i.transition), this._ui.screen.removeClass("ui-screen-hidden"), this._ui.container.removeClass("ui-popup-truncate"), this._reposition(i), this._ui.container.removeClass("ui-popup-hidden"), this.options.overlayTheme && n && this.element.closest(".ui-page").addClass("ui-popup-open"), this._animate({
                    additionalCondition: !0,
                    transition: i.transition,
                    classToRemove: "",
                    screenClassToAdd: "in",
                    containerClassToAdd: "in",
                    applyTransition: !1,
                    prerequisites: this._prerequisites
                })
            }, _closePrerequisiteScreen: function () {
                this._ui.screen.removeClass("out").addClass("ui-screen-hidden")
            }, _closePrerequisiteContainer: function () {
                this._ui.container.removeClass("reverse out").addClass("ui-popup-hidden ui-popup-truncate").removeAttr("style")
            }, _closePrerequisitesDone: function () {
                var t = this._ui.container, n = this.element.attr("id");
                e.mobile.popup.active = i, e(":focus", t[0]).add(t[0]).blur(), n && this.document.find("[aria-haspopup='true'][aria-owns='" + n + "']").attr("aria-expanded", !1), this._trigger("afterclose")
            }, _close: function (t) {
                this._ui.container.removeClass("ui-popup-active"), this._page.removeClass("ui-popup-open"), this._isOpen = !1, this._createPrerequisites(e.proxy(this, "_closePrerequisiteScreen"), e.proxy(this, "_closePrerequisiteContainer"), e.proxy(this, "_closePrerequisitesDone")), this._animate({
                    additionalCondition: this._ui.screen.hasClass("in"),
                    transition: t ? "none" : this._currentTransition,
                    classToRemove: "in",
                    screenClassToAdd: "out",
                    containerClassToAdd: "reverse out",
                    applyTransition: !0,
                    prerequisites: this._prerequisites
                })
            }, _unenhance: function () {
                this.options.enhanced || (this._setOptions({theme: e.mobile.popup.prototype.options.theme}), this.element.detach().insertAfter(this._ui.placeholder).removeClass("ui-popup ui-overlay-shadow ui-corner-all ui-body-inherit"), this._ui.screen.remove(), this._ui.container.remove(), this._ui.placeholder.remove())
            }, _destroy: function () {
                return e.mobile.popup.active === this ? (this.element.one("popupafterclose", e.proxy(this, "_unenhance")), this.close()) : this._unenhance(), this
            }, _closePopup: function (i, n) {
                var o, s, a = this.options, r = !1;
                i && i.isDefaultPrevented() || e.mobile.popup.active !== this || (t.scrollTo(0, this._scrollTop), i && "pagebeforechange" === i.type && n && (o = "string" == typeof n.toPage ? n.toPage : n.toPage.jqmData("url"), o = e.mobile.path.parseUrl(o), s = o.pathname + o.search + o.hash, this._myUrl !== e.mobile.path.makeUrlAbsolute(s) ? r = !0 : i.preventDefault()), this.window.off(a.closeEvents), this.element.undelegate(a.closeLinkSelector, a.closeLinkEvents), this._close(r))
            }, _bindContainerClose: function () {
                this.window.on(this.options.closeEvents, e.proxy(this, "_closePopup"))
            }, widget: function () {
                return this._ui.container
            }, open: function (t) {
                var i, n, o, s, a, r, l = this, c = this.options;
                return e.mobile.popup.active || c.disabled ? this : (e.mobile.popup.active = this, this._scrollTop = this.window.scrollTop(), c.history ? (r = e.mobile.navigate.history, n = e.mobile.dialogHashKey, o = e.mobile.activePage, s = o ? o.hasClass("ui-dialog") : !1, this._myUrl = i = r.getActive().url, (a = i.indexOf(n) > -1 && !s && r.activeIndex > 0) ? (l._open(t), l._bindContainerClose(), this) : (-1 !== i.indexOf(n) || s ? i = e.mobile.path.parseLocation().hash + n : i += i.indexOf("#") > -1 ? n : "#" + n, this.window.one("beforenavigate", function (e) {
                    e.preventDefault(), l._open(t), l._bindContainerClose()
                }), this.urlAltered = !0, e.mobile.navigate(i, {role: "dialog"}), this)) : (l._open(t), l._bindContainerClose(), l.element.delegate(c.closeLinkSelector, c.closeLinkEvents, function (e) {
                    l.close(), e.preventDefault()
                }), this))
            }, close: function () {
                return e.mobile.popup.active !== this ? this : (this._scrollTop = this.window.scrollTop(), this.options.history && this.urlAltered ? (e.mobile.back(), this.urlAltered = !1) : this._closePopup(), this)
            }
        }), e.mobile.popup.handleLink = function (t) {
            var i, n = e.mobile.path, o = e(n.hashToSelector(n.parseUrl(t.attr("href")).hash)).first();
            o.length > 0 && o.data("mobile-popup") && (i = t.offset(), o.popup("open", {
                x: i.left + t.outerWidth() / 2,
                y: i.top + t.outerHeight() / 2,
                transition: t.jqmData("transition"),
                positionTo: t.jqmData("position-to")
            })), setTimeout(function () {
                t.removeClass(e.mobile.activeBtnClass)
            }, 300)
        }, e.mobile.document.on("pagebeforechange", function (t, i) {
            "popup" === i.options.role && (e.mobile.popup.handleLink(i.options.link), t.preventDefault())
        })
    }(e), function (e, t) {
        var n = ".ui-disabled,.ui-state-disabled,.ui-li-divider,.ui-screen-hidden,:jqmData(role='placeholder')", o = function (e, t, i) {
            var o = e[i + "All"]().not(n).first();
            o.length && (t.blur().attr("tabindex", "-1"), o.find("a").first().focus())
        };
        e.widget("mobile.selectmenu", e.mobile.selectmenu, {
            _create: function () {
                var e = this.options;
                return e.nativeMenu = e.nativeMenu || this.element.parents(":jqmData(role='popup'),:mobile-popup").length > 0, this._super()
            }, _handleSelectFocus: function () {
                this.element.blur(), this.button.focus()
            }, _handleKeydown: function (e) {
                this._super(e), this._handleButtonVclickKeydown(e)
            }, _handleButtonVclickKeydown: function (t) {
                this.options.disabled || this.isOpen || this.options.nativeMenu || ("vclick" === t.type || t.keyCode && (t.keyCode === e.mobile.keyCode.ENTER || t.keyCode === e.mobile.keyCode.SPACE)) && (this._decideFormat(), "overlay" === this.menuType ? this.button.attr("href", "#" + this.popupId).attr("data-" + (e.mobile.ns || "") + "rel", "popup") : this.button.attr("href", "#" + this.dialogId).attr("data-" + (e.mobile.ns || "") + "rel", "dialog"), this.isOpen = !0)
            }, _handleListFocus: function (t) {
                var i = "focusin" === t.type ? {tabindex: "0", event: "vmouseover"} : {
                    tabindex: "-1",
                    event: "vmouseout"
                };
                e(t.target).attr("tabindex", i.tabindex).trigger(i.event)
            }, _handleListKeydown: function (t) {
                var i = e(t.target), n = i.closest("li");
                switch (t.keyCode) {
                    case 38:
                        return o(n, i, "prev"), !1;
                    case 40:
                        return o(n, i, "next"), !1;
                    case 13:
                    case 32:
                        return i.trigger("click"), !1
                }
            }, _handleMenuPageHide: function () {
                this._delayedTrigger(), this.thisPage.page("bindRemove")
            }, _handleHeaderCloseClick: function () {
                return "overlay" === this.menuType ? (this.close(), !1) : void 0
            }, _handleListItemClick: function (t) {
                var i = e(t.target).closest("li"), n = this.select[0].selectedIndex, o = e.mobile.getAttribute(i, "option-index"), s = this._selectOptions().eq(o)[0];
                s.selected = this.isMultiple ? !s.selected : !0, this.isMultiple && i.find("a").toggleClass("ui-checkbox-on", s.selected).toggleClass("ui-checkbox-off", !s.selected), this.isMultiple || n === o || (this._triggerChange = !0), this.isMultiple ? (this.select.trigger("change"), this.list.find("li:not(.ui-li-divider)").eq(o).find("a").first().focus()) : this.close(), t.preventDefault()
            }, build: function () {
                var i, n, o, s, a, r, l, c, h, u, d, p, f, m, g, b, v, _, y, x = this.options;
                return x.nativeMenu ? this._super() : (i = this.selectId, n = i + "-listbox", o = i + "-dialog", s = this.label, a = this.element.closest(".ui-page"), r = this.element[0].multiple, l = i + "-menu", c = x.theme ? " data-" + e.mobile.ns + "theme='" + x.theme + "'" : "", h = x.overlayTheme || x.theme || null, u = h ? " data-" + e.mobile.ns + "overlay-theme='" + h + "'" : "", d = x.dividerTheme && r ? " data-" + e.mobile.ns + "divider-theme='" + x.dividerTheme + "'" : "", p = e("<div data-" + e.mobile.ns + "role='dialog' class='ui-selectmenu' id='" + o + "'" + c + u + "><div data-" + e.mobile.ns + "role='header'><div class='ui-title'></div></div><div data-" + e.mobile.ns + "role='content'></div></div>"), f = e("<div" + c + u + " id='" + n + "' class='ui-selectmenu'></div>").insertAfter(this.select).popup(), m = e("<ul class='ui-selectmenu-list' id='" + l + "' role='listbox' aria-labelledby='" + this.buttonId + "'" + c + d + "></ul>").appendTo(f), g = e("<div class='ui-header ui-bar-" + (x.theme ? x.theme : "inherit") + "'></div>").prependTo(f), b = e("<h1 class='ui-title'></h1>").appendTo(g), this.isMultiple && (y = e("<a>", {
                    role: "button",
                    text: x.closeText,
                    href: "#",
                    "class": "ui-btn ui-corner-all ui-btn-left ui-btn-icon-notext ui-icon-delete"
                }).appendTo(g)), e.extend(this, {
                    selectId: i,
                    menuId: l,
                    popupId: n,
                    dialogId: o,
                    thisPage: a,
                    menuPage: p,
                    label: s,
                    isMultiple: r,
                    theme: x.theme,
                    listbox: f,
                    list: m,
                    header: g,
                    headerTitle: b,
                    headerClose: y,
                    menuPageContent: v,
                    menuPageClose: _,
                    placeholder: ""
                }), this.refresh(), this._origTabIndex === t && (this._origTabIndex = null === this.select[0].getAttribute("tabindex") ? !1 : this.select.attr("tabindex")), this.select.attr("tabindex", "-1"), this._on(this.select, {focus: "_handleSelectFocus"}), this._on(this.button, {vclick: "_handleButtonVclickKeydown"}), this.list.attr("role", "listbox"), this._on(this.list, {
                    focusin: "_handleListFocus",
                    focusout: "_handleListFocus",
                    keydown: "_handleListKeydown",
                    "click li:not(.ui-disabled,.ui-state-disabled,.ui-li-divider)": "_handleListItemClick"
                }), this._on(this.menuPage, {pagehide: "_handleMenuPageHide"}), this._on(this.listbox, {popupafterclose: "_popupClosed"}), this.isMultiple && this._on(this.headerClose, {click: "_handleHeaderCloseClick"}), this)
            }, _popupClosed: function () {
                this.close(), this._delayedTrigger()
            }, _delayedTrigger: function () {
                this._triggerChange && this.element.trigger("change"), this._triggerChange = !1
            }, _isRebuildRequired: function () {
                var e = this.list.find("li"), t = this._selectOptions().not(".ui-screen-hidden");
                return t.text() !== e.text()
            }, selected: function () {
                return this._selectOptions().filter(":selected:not( :jqmData(placeholder='true') )")
            }, refresh: function (t) {
                var i, n;
                return this.options.nativeMenu ? this._super(t) : (i = this, (t || this._isRebuildRequired()) && i._buildList(), n = this.selectedIndices(), i.setButtonText(), i.setButtonCount(), void i.list.find("li:not(.ui-li-divider)").find("a").removeClass(e.mobile.activeBtnClass).end().attr("aria-selected", !1).each(function (t) {
                    var o = e(this);
                    e.inArray(t, n) > -1 ? (o.attr("aria-selected", !0), i.isMultiple ? o.find("a").removeClass("ui-checkbox-off").addClass("ui-checkbox-on") : o.hasClass("ui-screen-hidden") ? o.next().find("a").addClass(e.mobile.activeBtnClass) : o.find("a").addClass(e.mobile.activeBtnClass)) : i.isMultiple && o.find("a").removeClass("ui-checkbox-on").addClass("ui-checkbox-off")
                }))
            }, close: function () {
                if (!this.options.disabled && this.isOpen) {
                    var e = this;
                    "page" === e.menuType ? (e.menuPage.dialog("close"), e.list.appendTo(e.listbox)) : e.listbox.popup("close"), e._focusButton(), e.isOpen = !1
                }
            }, open: function () {
                this.button.click()
            }, _focusMenuItem: function () {
                var t = this.list.find("a." + e.mobile.activeBtnClass);
                0 === t.length && (t = this.list.find("li:not(" + n + ") a.ui-btn")), t.first().focus()
            }, _decideFormat: function () {
                var t = this, i = this.window, n = t.list.parent(), o = n.outerHeight(), s = i.scrollTop(), a = t.button.offset().top, r = i.height();
                o > r - 80 || !e.support.scrollTop ? (t.menuPage.appendTo(e.mobile.pageContainer).page(), t.menuPageContent = t.menuPage.find(".ui-content"), t.menuPageClose = t.menuPage.find(".ui-header a"), t.thisPage.unbind("pagehide.remove"), 0 === s && a > r && t.thisPage.one("pagehide", function () {
                    e(this).jqmData("lastScroll", a)
                }), t.menuPage.one({
                    pageshow: e.proxy(this, "_focusMenuItem"),
                    pagehide: e.proxy(this, "close")
                }), t.menuType = "page", t.menuPageContent.append(t.list), t.menuPage.find("div .ui-title").text(t.label.getEncodedText() || t.placeholder)) : (t.menuType = "overlay", t.listbox.one({popupafteropen: e.proxy(this, "_focusMenuItem")}))
            }, _buildList: function () {
                var t, n, o, s, a, r, l, c, h, u, d, p, f, m, g = this, b = this.options, v = this.placeholder, _ = !0, y = "false", x = "data-" + e.mobile.ns, w = x + "option-index", C = x + "icon", T = x + "role", S = x + "placeholder", k = i.createDocumentFragment(), P = !1;
                for (g.list.empty().filter(".ui-listview").listview("destroy"), t = this._selectOptions(), n = t.length, o = this.select[0], a = 0; n > a; a++, P = !1)r = t[a], l = e(r), l.hasClass("ui-screen-hidden") || (c = r.parentNode, d = [], h = l.text(), u = i.createElement("a"), u.setAttribute("href", "#"), u.appendChild(i.createTextNode(h)), c !== o && "optgroup" === c.nodeName.toLowerCase() && (p = c.getAttribute("label"), p !== s && (f = i.createElement("li"), f.setAttribute(T, "list-divider"), f.setAttribute("role", "option"), f.setAttribute("tabindex", "-1"), f.appendChild(i.createTextNode(p)), k.appendChild(f), s = p)), !_ || r.getAttribute("value") && 0 !== h.length && !l.jqmData("placeholder") || (_ = !1, P = !0, null === r.getAttribute(S) && (this._removePlaceholderAttr = !0), r.setAttribute(S, !0), b.hidePlaceholderMenuItems && d.push("ui-screen-hidden"), v !== h && (v = g.placeholder = h)), m = i.createElement("li"), r.disabled && (d.push("ui-state-disabled"), m.setAttribute("aria-disabled", !0)), m.setAttribute(w, a), m.setAttribute(C, y), P && m.setAttribute(S, !0), m.className = d.join(" "), m.setAttribute("role", "option"), u.setAttribute("tabindex", "-1"), this.isMultiple && e(u).addClass("ui-btn ui-checkbox-off ui-btn-icon-right"), m.appendChild(u), k.appendChild(m));
                g.list[0].appendChild(k), this.isMultiple || v.length ? this.headerTitle.text(this.placeholder) : this.header.addClass("ui-screen-hidden"), g.list.listview()
            }, _button: function () {
                return this.options.nativeMenu ? this._super() : e("<a>", {
                    href: "#",
                    role: "button",
                    id: this.buttonId,
                    "aria-haspopup": "true",
                    "aria-owns": this.menuId
                })
            }, _destroy: function () {
                this.options.nativeMenu || (this.close(), this._origTabIndex !== t && (this._origTabIndex !== !1 ? this.select.attr("tabindex", this._origTabIndex) : this.select.removeAttr("tabindex")), this._removePlaceholderAttr && this._selectOptions().removeAttr("data-" + e.mobile.ns + "placeholder"), this.listbox.remove(), this.menuPage.remove()), this._super()
            }
        })
    }(e), function (e, t) {
        function i(e, t) {
            var i = t ? t : [];
            return i.push("ui-btn"), e.theme && i.push("ui-btn-" + e.theme), e.icon && (i = i.concat(["ui-icon-" + e.icon, "ui-btn-icon-" + e.iconpos]), e.iconshadow && i.push("ui-shadow-icon")), e.inline && i.push("ui-btn-inline"), e.shadow && i.push("ui-shadow"), e.corners && i.push("ui-corner-all"), e.mini && i.push("ui-mini"), i
        }

        function n(e) {
            var i, n, o, a = !1, r = !0, l = {
                icon: "",
                inline: !1,
                shadow: !1,
                corners: !1,
                iconshadow: !1,
                mini: !1
            }, c = [];
            for (e = e.split(" "), i = 0; i < e.length; i++)o = !0, n = s[e[i]], n !== t ? (o = !1, l[n] = !0) : 0 === e[i].indexOf("ui-btn-icon-") ? (o = !1, r = !1, l.iconpos = e[i].substring(12)) : 0 === e[i].indexOf("ui-icon-") ? (o = !1, l.icon = e[i].substring(8)) : 0 === e[i].indexOf("ui-btn-") && 8 === e[i].length ? (o = !1, l.theme = e[i].substring(7)) : "ui-btn" === e[i] && (o = !1, a = !0), o && c.push(e[i]);
            return r && (l.icon = ""), {options: l, unknownClasses: c, alreadyEnhanced: a}
        }

        function o(e) {
            return "-" + e.toLowerCase()
        }

        var s = {
            "ui-shadow": "shadow",
            "ui-corner-all": "corners",
            "ui-btn-inline": "inline",
            "ui-shadow-icon": "iconshadow",
            "ui-mini": "mini"
        }, a = function () {
            var i = e.mobile.getAttribute.apply(this, arguments);
            return null == i ? t : i
        }, r = /[A-Z]/g;
        e.fn.buttonMarkup = function (s, l) {
            var c, h, u, d, p, f = e.fn.buttonMarkup.defaults;
            for (c = 0; c < this.length; c++) {
                if (u = this[c], h = l ? {
                        alreadyEnhanced: !1,
                        unknownClasses: []
                    } : n(u.className), d = e.extend({}, h.alreadyEnhanced ? h.options : {}, s), !h.alreadyEnhanced)for (p in f)d[p] === t && (d[p] = a(u, p.replace(r, o)));
                u.className = i(e.extend({}, f, d), h.unknownClasses).join(" "), "button" !== u.tagName.toLowerCase() && u.setAttribute("role", "button")
            }
            return this
        }, e.fn.buttonMarkup.defaults = {
            icon: "",
            iconpos: "left",
            theme: null,
            inline: !1,
            shadow: !0,
            corners: !0,
            iconshadow: !1,
            mini: !1
        }, e.extend(e.fn.buttonMarkup, {initSelector: "a:jqmData(role='button'), .ui-bar > a, .ui-bar > :jqmData(role='controlgroup') > a, button:not(:jqmData(role='navbar') button)"})
    }(e), function (e, t) {
        e.widget("mobile.controlgroup", e.extend({
            options: {
                enhanced: !1,
                theme: null,
                shadow: !1,
                corners: !0,
                excludeInvisible: !0,
                type: "vertical",
                mini: !1
            }, _create: function () {
                var t = this.element, i = this.options, n = e.mobile.page.prototype.keepNativeSelector();
                e.fn.buttonMarkup && this.element.find(e.fn.buttonMarkup.initSelector).not(n).buttonMarkup(), e.each(this._childWidgets, e.proxy(function (t, i) {
                    e.mobile[i] && this.element.find(e.mobile[i].initSelector).not(n)[i]()
                }, this)), e.extend(this, {
                    _ui: null,
                    _initialRefresh: !0
                }), this._ui = i.enhanced ? {
                    groupLegend: t.children(".ui-controlgroup-label").children(),
                    childWrapper: t.children(".ui-controlgroup-controls")
                } : this._enhance()
            }, _childWidgets: ["checkboxradio", "selectmenu", "button"], _themeClassFromOption: function (e) {
                return e ? "none" === e ? "" : "ui-group-theme-" + e : ""
            }, _enhance: function () {
                var t = this.element, i = this.options, n = {
                    groupLegend: t.children("legend"),
                    childWrapper: t.addClass("ui-controlgroup ui-controlgroup-" + ("horizontal" === i.type ? "horizontal" : "vertical") + " " + this._themeClassFromOption(i.theme) + " " + (i.corners ? "ui-corner-all " : "") + (i.mini ? "ui-mini " : "")).wrapInner("<div class='ui-controlgroup-controls " + (i.shadow === !0 ? "ui-shadow" : "") + "'></div>").children()
                };
                return n.groupLegend.length > 0 && e("<div role='heading' class='ui-controlgroup-label'></div>").append(n.groupLegend).prependTo(t), n
            }, _init: function () {
                this.refresh()
            }, _setOptions: function (e) {
                var i, n, o = this.element;
                return e.type !== t && (o.removeClass("ui-controlgroup-horizontal ui-controlgroup-vertical").addClass("ui-controlgroup-" + ("horizontal" === e.type ? "horizontal" : "vertical")), i = !0), e.theme !== t && o.removeClass(this._themeClassFromOption(this.options.theme)).addClass(this._themeClassFromOption(e.theme)), e.corners !== t && o.toggleClass("ui-corner-all", e.corners), e.mini !== t && o.toggleClass("ui-mini", e.mini), e.shadow !== t && this._ui.childWrapper.toggleClass("ui-shadow", e.shadow), e.excludeInvisible !== t && (this.options.excludeInvisible = e.excludeInvisible, i = !0), n = this._super(e), i && this.refresh(), n
            }, container: function () {
                return this._ui.childWrapper
            }, refresh: function () {
                var t = this.container(), i = t.find(".ui-btn").not(".ui-slider-handle"), n = this._initialRefresh;
                e.mobile.checkboxradio && t.find(":mobile-checkboxradio").checkboxradio("refresh"), this._addFirstLastClasses(i, this.options.excludeInvisible ? this._getVisibles(i, n) : i, n), this._initialRefresh = !1
            }, _destroy: function () {
                var e, t, i = this.options;
                return i.enhanced ? this : (e = this._ui, t = this.element.removeClass("ui-controlgroup ui-controlgroup-horizontal ui-controlgroup-vertical ui-corner-all ui-mini " + this._themeClassFromOption(i.theme)).find(".ui-btn").not(".ui-slider-handle"), this._removeFirstLastClasses(t), e.groupLegend.unwrap(), void e.childWrapper.children().unwrap())
            }
        }, e.mobile.behaviors.addFirstLastClasses))
    }(e), function (e, t) {
        e.widget("mobile.toolbar", {
            initSelector: ":jqmData(role='footer'), :jqmData(role='header')",
            options: {theme: null, addBackBtn: !1, backBtnTheme: null, backBtnText: "Back"},
            _create: function () {
                var t, i, n = this.element.is(":jqmData(role='header')") ? "header" : "footer", o = this.element.closest(".ui-page");
                0 === o.length && (o = !1, this._on(this.document, {pageshow: "refresh"})), e.extend(this, {
                    role: n,
                    page: o,
                    leftbtn: t,
                    rightbtn: i
                }), this.element.attr("role", "header" === n ? "banner" : "contentinfo").addClass("ui-" + n), this.refresh(), this._setOptions(this.options)
            },
            _setOptions: function (e) {
                if (e.addBackBtn !== t && this._updateBackButton(), null != e.backBtnTheme && this.element.find(".ui-toolbar-back-btn").addClass("ui-btn ui-btn-" + e.backBtnTheme), e.backBtnText !== t && this.element.find(".ui-toolbar-back-btn .ui-btn-text").text(e.backBtnText), e.theme !== t) {
                    var i = this.options.theme ? this.options.theme : "inherit", n = e.theme ? e.theme : "inherit";
                    this.element.removeClass("ui-bar-" + i).addClass("ui-bar-" + n)
                }
                this._super(e)
            },
            refresh: function () {
                "header" === this.role && this._addHeaderButtonClasses(), this.page || (this._setRelative(), "footer" === this.role ? this.element.appendTo("body") : "header" === this.role && this._updateBackButton()), this._addHeadingClasses(), this._btnMarkup()
            },
            _setRelative: function () {
                e("[data-" + e.mobile.ns + "role='page']").css({position: "relative"})
            },
            _btnMarkup: function () {
                this.element.children("a").filter(":not([data-" + e.mobile.ns + "role='none'])").attr("data-" + e.mobile.ns + "role", "button"), this.element.trigger("create")
            },
            _addHeaderButtonClasses: function () {
                var e = this.element.children("a, button");
                this.leftbtn = e.hasClass("ui-btn-left") && !e.hasClass("ui-toolbar-back-btn"), this.rightbtn = e.hasClass("ui-btn-right"), this.leftbtn = this.leftbtn || e.eq(0).not(".ui-btn-right,.ui-toolbar-back-btn").addClass("ui-btn-left").length, this.rightbtn = this.rightbtn || e.eq(1).addClass("ui-btn-right").length
            },
            _updateBackButton: function () {
                var t, i = this.options, n = i.backBtnTheme || i.theme;
                t = this._backButton = this._backButton || {}, this.options.addBackBtn && "header" === this.role && e(".ui-page").length > 1 && (this.page ? this.page[0].getAttribute("data-" + e.mobile.ns + "url") !== e.mobile.path.stripHash(location.hash) : e.mobile.navigate && e.mobile.navigate.history && e.mobile.navigate.history.activeIndex > 0) && !this.leftbtn ? t.attached || (this.backButton = t.element = (t.element || e("<a role='button' href='javascript:void(0);' class='ui-btn ui-corner-all ui-shadow ui-btn-left " + (n ? "ui-btn-" + n + " " : "") + "ui-toolbar-back-btn ui-icon-carat-l ui-btn-icon-left' data-" + e.mobile.ns + "rel='back'>" + i.backBtnText + "</a>")).prependTo(this.element), t.attached = !0) : t.element && (t.element.detach(), t.attached = !1)
            },
            _addHeadingClasses: function () {
                this.element.children("h1, h2, h3, h4, h5, h6").addClass("ui-title").attr({
                    role: "heading",
                    "aria-level": "1"
                })
            },
            _destroy: function () {
                var e;
                this.element.children("h1, h2, h3, h4, h5, h6").removeClass("ui-title").removeAttr("role").removeAttr("aria-level"), "header" === this.role && (this.element.children("a, button").removeClass("ui-btn-left ui-btn-right ui-btn ui-shadow ui-corner-all"), this.backButton && this.backButton.remove()), e = this.options.theme ? this.options.theme : "inherit", this.element.removeClass("ui-bar-" + e), this.element.removeClass("ui-" + this.role).removeAttr("role")
            }
        })
    }(e), function (e, t) {
        e.widget("mobile.toolbar", e.mobile.toolbar, {
            options: {
                position: null,
                visibleOnPageShow: !0,
                disablePageZoom: !0,
                transition: "slide",
                fullscreen: !1,
                tapToggle: !0,
                tapToggleBlacklist: "a, button, input, select, textarea, .ui-header-fixed, .ui-footer-fixed, .ui-flipswitch, .ui-popup, .ui-panel, .ui-panel-dismiss-open",
                hideDuringFocus: "input, textarea, select",
                updatePagePadding: !0,
                trackPersistentToolbars: !0,
                supportBlacklist: function () {
                    return !e.support.fixedPosition
                }
            }, _create: function () {
                this._super(), this.pagecontainer = e(":mobile-pagecontainer"), "fixed" !== this.options.position || this.options.supportBlacklist() || this._makeFixed()
            }, _makeFixed: function () {
                this.element.addClass("ui-" + this.role + "-fixed"), this.updatePagePadding(), this._addTransitionClass(), this._bindPageEvents(), this._bindToggleHandlers()
            }, _setOptions: function (i) {
                if ("fixed" === i.position && "fixed" !== this.options.position && this._makeFixed(), "fixed" === this.options.position && !this.options.supportBlacklist()) {
                    var n = this.page ? this.page : e(".ui-page-active").length > 0 ? e(".ui-page-active") : e(".ui-page").eq(0);
                    i.fullscreen !== t && (i.fullscreen ? (this.element.addClass("ui-" + this.role + "-fullscreen"), n.addClass("ui-page-" + this.role + "-fullscreen")) : (this.element.removeClass("ui-" + this.role + "-fullscreen"), n.removeClass("ui-page-" + this.role + "-fullscreen").addClass("ui-page-" + this.role + "-fixed")))
                }
                this._super(i)
            }, _addTransitionClass: function () {
                var e = this.options.transition;
                e && "none" !== e && ("slide" === e && (e = this.element.hasClass("ui-header") ? "slidedown" : "slideup"), this.element.addClass(e))
            }, _bindPageEvents: function () {
                var e = this.page ? this.element.closest(".ui-page") : this.document;
                this._on(e, {
                    pagebeforeshow: "_handlePageBeforeShow",
                    webkitAnimationStart: "_handleAnimationStart",
                    animationstart: "_handleAnimationStart",
                    updatelayout: "_handleAnimationStart",
                    pageshow: "_handlePageShow",
                    pagebeforehide: "_handlePageBeforeHide"
                })
            }, _handlePageBeforeShow: function () {
                var t = this.options;
                t.disablePageZoom && e.mobile.zoom.disable(!0), t.visibleOnPageShow || this.hide(!0)
            }, _handleAnimationStart: function () {
                this.options.updatePagePadding && this.updatePagePadding(this.page ? this.page : ".ui-page-active")
            }, _handlePageShow: function () {
                this.updatePagePadding(this.page ? this.page : ".ui-page-active"), this.options.updatePagePadding && this._on(this.window, {throttledresize: "updatePagePadding"})
            }, _handlePageBeforeHide: function (t, i) {
                var n, o, s, a, r = this.options;
                r.disablePageZoom && e.mobile.zoom.enable(!0), r.updatePagePadding && this._off(this.window, "throttledresize"), r.trackPersistentToolbars && (n = e(".ui-footer-fixed:jqmData(id)", this.page), o = e(".ui-header-fixed:jqmData(id)", this.page), s = n.length && i.nextPage && e(".ui-footer-fixed:jqmData(id='" + n.jqmData("id") + "')", i.nextPage) || e(), a = o.length && i.nextPage && e(".ui-header-fixed:jqmData(id='" + o.jqmData("id") + "')", i.nextPage) || e(), (s.length || a.length) && (s.add(a).appendTo(e.mobile.pageContainer), i.nextPage.one("pageshow", function () {
                    a.prependTo(this), s.appendTo(this)
                })))
            }, _visible: !0, updatePagePadding: function (i) {
                var n = this.element, o = "header" === this.role, s = parseFloat(n.css(o ? "top" : "bottom"));
                this.options.fullscreen || (i = i && i.type === t && i || this.page || n.closest(".ui-page"), i = this.page ? this.page : ".ui-page-active", e(i).css("padding-" + (o ? "top" : "bottom"), n.outerHeight() + s))
            }, _useTransition: function (t) {
                var i = this.window, n = this.element, o = i.scrollTop(), s = n.height(), a = this.page ? n.closest(".ui-page").height() : e(".ui-page-active").height(), r = e.mobile.getScreenHeight();
                return !t && (this.options.transition && "none" !== this.options.transition && ("header" === this.role && !this.options.fullscreen && o > s || "footer" === this.role && !this.options.fullscreen && a - s > o + r) || this.options.fullscreen)
            }, show: function (e) {
                var t = "ui-fixed-hidden", i = this.element;
                this._useTransition(e) ? i.removeClass("out " + t).addClass("in").animationComplete(function () {
                    i.removeClass("in")
                }) : i.removeClass(t), this._visible = !0
            }, hide: function (e) {
                var t = "ui-fixed-hidden", i = this.element, n = "out" + ("slide" === this.options.transition ? " reverse" : "");
                this._useTransition(e) ? i.addClass(n).removeClass("in").animationComplete(function () {
                    i.addClass(t).removeClass(n)
                }) : i.addClass(t).removeClass(n), this._visible = !1
            }, toggle: function () {
                this[this._visible ? "hide" : "show"]()
            }, _bindToggleHandlers: function () {
                var t, i, n = this, o = n.options, s = !0, a = this.page ? this.page : e(".ui-page");
                a.bind("vclick", function (t) {
                    o.tapToggle && !e(t.target).closest(o.tapToggleBlacklist).length && n.toggle()
                }).bind("focusin focusout", function (a) {
                    screen.width < 1025 && e(a.target).is(o.hideDuringFocus) && !e(a.target).closest(".ui-header-fixed, .ui-footer-fixed").length && ("focusout" !== a.type || s ? "focusin" === a.type && s && (clearTimeout(t), s = !1, i = setTimeout(function () {
                        n.hide()
                    }, 0)) : (s = !0, clearTimeout(i), t = setTimeout(function () {
                        n.show()
                    }, 0)))
                })
            }, _setRelative: function () {
                "fixed" !== this.options.position && e("[data-" + e.mobile.ns + "role='page']").css({position: "relative"})
            }, _destroy: function () {
                var t, i, n, o, s, a = this.pagecontainer.pagecontainer("getActivePage");
                this._super(), "fixed" === this.options.position && (n = e("body>.ui-" + this.role + "-fixed").add(a.find(".ui-" + this.options.role + "-fixed")).not(this.element).length > 0, s = e("body>.ui-" + this.role + "-fixed").add(a.find(".ui-" + this.options.role + "-fullscreen")).not(this.element).length > 0, i = "ui-header-fixed ui-footer-fixed ui-header-fullscreen in out ui-footer-fullscreen fade slidedown slideup ui-fixed-hidden", this.element.removeClass(i), s || (t = "ui-page-" + this.role + "-fullscreen"), n || (o = "header" === this.role, t += " ui-page-" + this.role + "-fixed", a.css("padding-" + (o ? "top" : "bottom"), "")), a.removeClass(t))
            }
        })
    }(e), function (e) {
        e.widget("mobile.toolbar", e.mobile.toolbar, {
            _makeFixed: function () {
                this._super(), this._workarounds()
            }, _workarounds: function () {
                var e = navigator.userAgent, t = navigator.platform, i = e.match(/AppleWebKit\/([0-9]+)/), n = !!i && i[1], o = null, s = this;
                if (t.indexOf("iPhone") > -1 || t.indexOf("iPad") > -1 || t.indexOf("iPod") > -1)o = "ios"; else {
                    if (!(e.indexOf("Android") > -1))return;
                    o = "android"
                }
                if ("ios" === o)s._bindScrollWorkaround(); else {
                    if (!("android" === o && n && 534 > n))return;
                    s._bindScrollWorkaround(), s._bindListThumbWorkaround()
                }
            }, _viewportOffset: function () {
                var e = this.element, t = e.hasClass("ui-header"), i = Math.abs(e.offset().top - this.window.scrollTop());
                return t || (i = Math.round(i - this.window.height() + e.outerHeight()) - 60), i
            }, _bindScrollWorkaround: function () {
                var e = this;
                this._on(this.window, {
                    scrollstop: function () {
                        var t = e._viewportOffset();
                        t > 2 && e._visible && e._triggerRedraw()
                    }
                })
            }, _bindListThumbWorkaround: function () {
                this.element.closest(".ui-page").addClass("ui-android-2x-fixed")
            }, _triggerRedraw: function () {
                var t = parseFloat(e(".ui-page-active").css("padding-bottom"));
                e(".ui-page-active").css("padding-bottom", t + 1 + "px"), setTimeout(function () {
                    e(".ui-page-active").css("padding-bottom", t + "px")
                }, 0)
            }, destroy: function () {
                this._super(), this.element.closest(".ui-page-active").removeClass("ui-android-2x-fix")
            }
        })
    }(e), function (e, t) {
        function i() {
            var e = o.clone(), t = e.eq(0), i = e.eq(1), n = i.children();
            return {arEls: i.add(t), gd: t, ct: i, ar: n}
        }

        var n = e.mobile.browser.oldIE && e.mobile.browser.oldIE <= 8, o = e("<div class='ui-popup-arrow-guide'></div><div class='ui-popup-arrow-container" + (n ? " ie" : "") + "'><div class='ui-popup-arrow'></div></div>");
        e.widget("mobile.popup", e.mobile.popup, {
            options: {arrow: ""}, _create: function () {
                var e, t = this._super();
                return this.options.arrow && (this._ui.arrow = e = this._addArrow()), t
            }, _addArrow: function () {
                var e, t = this.options, n = i();
                return e = this._themeClassFromOption("ui-body-", t.theme), n.ar.addClass(e + (t.shadow ? " ui-overlay-shadow" : "")), n.arEls.hide().appendTo(this.element), n
            }, _unenhance: function () {
                var e = this._ui.arrow;
                return e && e.arEls.remove(), this._super()
            }, _tryAnArrow: function (e, t, i, n, o) {
                var s, a, r, l = {}, c = {};
                return n.arFull[e.dimKey] > n.guideDims[e.dimKey] ? o : (l[e.fst] = i[e.fst] + (n.arHalf[e.oDimKey] + n.menuHalf[e.oDimKey]) * e.offsetFactor - n.contentBox[e.fst] + (n.clampInfo.menuSize[e.oDimKey] - n.contentBox[e.oDimKey]) * e.arrowOffsetFactor, l[e.snd] = i[e.snd], s = n.result || this._calculateFinalLocation(l, n.clampInfo), a = {
                    x: s.left,
                    y: s.top
                }, c[e.fst] = a[e.fst] + n.contentBox[e.fst] + e.tipOffset, c[e.snd] = Math.max(s[e.prop] + n.guideOffset[e.prop] + n.arHalf[e.dimKey], Math.min(s[e.prop] + n.guideOffset[e.prop] + n.guideDims[e.dimKey] - n.arHalf[e.dimKey], i[e.snd])), r = Math.abs(i.x - c.x) + Math.abs(i.y - c.y), (!o || r < o.diff) && (c[e.snd] -= n.arHalf[e.dimKey] + s[e.prop] + n.contentBox[e.snd], o = {
                    dir: t,
                    diff: r,
                    result: s,
                    posProp: e.prop,
                    posVal: c[e.snd]
                }), o)
            }, _getPlacementState: function (e) {
                var t, i, n = this._ui.arrow, o = {
                    clampInfo: this._clampPopupWidth(!e),
                    arFull: {cx: n.ct.width(), cy: n.ct.height()},
                    guideDims: {cx: n.gd.width(), cy: n.gd.height()},
                    guideOffset: n.gd.offset()
                };
                return t = this.element.offset(), n.gd.css({
                    left: 0,
                    top: 0,
                    right: 0,
                    bottom: 0
                }), i = n.gd.offset(), o.contentBox = {
                    x: i.left - t.left,
                    y: i.top - t.top,
                    cx: n.gd.width(),
                    cy: n.gd.height()
                }, n.gd.removeAttr("style"), o.guideOffset = {
                    left: o.guideOffset.left - t.left,
                    top: o.guideOffset.top - t.top
                }, o.arHalf = {cx: o.arFull.cx / 2, cy: o.arFull.cy / 2}, o.menuHalf = {
                    cx: o.clampInfo.menuSize.cx / 2,
                    cy: o.clampInfo.menuSize.cy / 2
                }, o
            }, _placementCoords: function (t) {
                var i, o, s, a, r, l = this.options.arrow, c = this._ui.arrow;
                return c ? (c.arEls.show(), r = {}, i = this._getPlacementState(!0), s = {
                    l: {
                        fst: "x",
                        snd: "y",
                        prop: "top",
                        dimKey: "cy",
                        oDimKey: "cx",
                        offsetFactor: 1,
                        tipOffset: -i.arHalf.cx,
                        arrowOffsetFactor: 0
                    },
                    r: {
                        fst: "x",
                        snd: "y",
                        prop: "top",
                        dimKey: "cy",
                        oDimKey: "cx",
                        offsetFactor: -1,
                        tipOffset: i.arHalf.cx + i.contentBox.cx,
                        arrowOffsetFactor: 1
                    },
                    b: {
                        fst: "y",
                        snd: "x",
                        prop: "left",
                        dimKey: "cx",
                        oDimKey: "cy",
                        offsetFactor: -1,
                        tipOffset: i.arHalf.cy + i.contentBox.cy,
                        arrowOffsetFactor: 1
                    },
                    t: {
                        fst: "y",
                        snd: "x",
                        prop: "left",
                        dimKey: "cx",
                        oDimKey: "cy",
                        offsetFactor: 1,
                        tipOffset: -i.arHalf.cy,
                        arrowOffsetFactor: 0
                    }
                }, e.each((l === !0 ? "l,t,r,b" : l).split(","), e.proxy(function (e, n) {
                    o = this._tryAnArrow(s[n], n, t, i, o)
                }, this)), o ? (c.ct.removeClass("ui-popup-arrow-l ui-popup-arrow-t ui-popup-arrow-r ui-popup-arrow-b").addClass("ui-popup-arrow-" + o.dir).removeAttr("style").css(o.posProp, o.posVal).show(), n || (a = this.element.offset(), r[s[o.dir].fst] = c.ct.offset(), r[s[o.dir].snd] = {
                    left: a.left + i.contentBox.x,
                    top: a.top + i.contentBox.y
                }), o.result) : (c.arEls.hide(), this._super(t))) : this._super(t)
            }, _setOptions: function (e) {
                var i, n = this.options.theme, o = this._ui.arrow, s = this._super(e);
                if (e.arrow !== t) {
                    if (!o && e.arrow)return void(this._ui.arrow = this._addArrow());
                    o && !e.arrow && (o.arEls.remove(), this._ui.arrow = null)
                }
                return o = this._ui.arrow, o && (e.theme !== t && (n = this._themeClassFromOption("ui-body-", n), i = this._themeClassFromOption("ui-body-", e.theme), o.ar.removeClass(n).addClass(i)), e.shadow !== t && o.ar.toggleClass("ui-overlay-shadow", e.shadow)), s
            }, _destroy: function () {
                var e = this._ui.arrow;
                return e && e.arEls.remove(), this._super()
            }
        })
    }(e), function (e, i) {
        e.widget("mobile.panel", {
            options: {
                classes: {
                    panel: "ui-panel",
                    panelOpen: "ui-panel-open",
                    panelClosed: "ui-panel-closed",
                    panelFixed: "ui-panel-fixed",
                    panelInner: "ui-panel-inner",
                    modal: "ui-panel-dismiss",
                    modalOpen: "ui-panel-dismiss-open",
                    pageContainer: "ui-panel-page-container",
                    pageWrapper: "ui-panel-wrapper",
                    pageFixedToolbar: "ui-panel-fixed-toolbar",
                    pageContentPrefix: "ui-panel-page-content",
                    animate: "ui-panel-animate"
                },
                animate: !0,
                theme: null,
                position: "left",
                dismissible: !0,
                display: "reveal",
                swipeClose: !0,
                positionFixed: !1
            },
            _closeLink: null,
            _parentPage: null,
            _page: null,
            _modal: null,
            _panelInner: null,
            _wrapper: null,
            _fixedToolbars: null,
            _create: function () {
                var t = this.element, i = t.closest(".ui-page, :jqmData(role='page')");
                e.extend(this, {
                    _closeLink: t.find(":jqmData(rel='close')"),
                    _parentPage: i.length > 0 ? i : !1,
                    _openedPage: null,
                    _page: this._getPage,
                    _panelInner: this._getPanelInner(),
                    _fixedToolbars: this._getFixedToolbars
                }), "overlay" !== this.options.display && this._getWrapper(), this._addPanelClasses(), e.support.cssTransform3d && this.options.animate && this.element.addClass(this.options.classes.animate), this._bindUpdateLayout(), this._bindCloseEvents(), this._bindLinkListeners(), this._bindPageEvents(), this.options.dismissible && this._createModal(), this._bindSwipeEvents()
            },
            _getPanelInner: function () {
                var e = this.element.find("." + this.options.classes.panelInner);
                return 0 === e.length && (e = this.element.children().wrapAll("<div class='" + this.options.classes.panelInner + "' />").parent()), e
            },
            _createModal: function () {
                var t = this, i = t._parentPage ? t._parentPage.parent() : t.element.parent();
                t._modal = e("<div class='" + t.options.classes.modal + "'></div>").on("mousedown", function () {
                    t.close()
                }).appendTo(i)
            },
            _getPage: function () {
                var t = this._openedPage || this._parentPage || e("." + e.mobile.activePageClass);
                return t
            },
            _getWrapper: function () {
                var e = this._page().find("." + this.options.classes.pageWrapper);
                0 === e.length && (e = this._page().children(".ui-header:not(.ui-header-fixed), .ui-content:not(.ui-popup), .ui-footer:not(.ui-footer-fixed)").wrapAll("<div class='" + this.options.classes.pageWrapper + "'></div>").parent()), this._wrapper = e
            },
            _getFixedToolbars: function () {
                var t = e("body").children(".ui-header-fixed, .ui-footer-fixed"), i = this._page().find(".ui-header-fixed, .ui-footer-fixed"), n = t.add(i).addClass(this.options.classes.pageFixedToolbar);
                return n
            },
            _getPosDisplayClasses: function (e) {
                return e + "-position-" + this.options.position + " " + e + "-display-" + this.options.display
            },
            _getPanelClasses: function () {
                var e = this.options.classes.panel + " " + this._getPosDisplayClasses(this.options.classes.panel) + " " + this.options.classes.panelClosed + " ui-body-" + (this.options.theme ? this.options.theme : "inherit");
                return this.options.positionFixed && (e += " " + this.options.classes.panelFixed), e
            },
            _addPanelClasses: function () {
                this.element.addClass(this._getPanelClasses())
            },
            _handleCloseClick: function (e) {
                e.isDefaultPrevented() || this.close()
            },
            _bindCloseEvents: function () {
                this._on(this._closeLink, {click: "_handleCloseClick"}), this._on({"click a:jqmData(ajax='false')": "_handleCloseClick"})
            },
            _positionPanel: function (t) {
                var i = this, n = i._panelInner.outerHeight(), o = n > e.mobile.getScreenHeight();
                o || !i.options.positionFixed ? (o && (i._unfixPanel(), e.mobile.resetActivePageHeight(n)), t && this.window[0].scrollTo(0, e.mobile.defaultHomeScroll)) : i._fixPanel()
            },
            _bindFixListener: function () {
                this._on(e(t), {throttledresize: "_positionPanel"})
            },
            _unbindFixListener: function () {
                this._off(e(t), "throttledresize")
            },
            _unfixPanel: function () {
                this.options.positionFixed && e.support.fixedPosition && this.element.removeClass(this.options.classes.panelFixed)
            },
            _fixPanel: function () {
                this.options.positionFixed && e.support.fixedPosition && this.element.addClass(this.options.classes.panelFixed)
            },
            _bindUpdateLayout: function () {
                var e = this;
                e.element.on("updatelayout", function () {
                    e._open && e._positionPanel()
                })
            },
            _bindLinkListeners: function () {
                this._on("body", {"click a": "_handleClick"})
            },
            _handleClick: function (t) {
                var n, o = this.element.attr("id");
                t.currentTarget.href.split("#")[1] === o && o !== i && (t.preventDefault(), n = e(t.target), n.hasClass("ui-btn") && (n.addClass(e.mobile.activeBtnClass), this.element.one("panelopen panelclose", function () {
                    n.removeClass(e.mobile.activeBtnClass)
                })), this.toggle())
            },
            _bindSwipeEvents: function () {
                var e = this, t = e._modal ? e.element.add(e._modal) : e.element;
                e.options.swipeClose && ("left" === e.options.position ? t.on("swipeleft.panel", function () {
                    e.close()
                }) : t.on("swiperight.panel", function () {
                    e.close()
                }))
            },
            _bindPageEvents: function () {
                var e = this;
                this.document.on("panelbeforeopen", function (t) {
                    e._open && t.target !== e.element[0] && e.close()
                }).on("keyup.panel", function (t) {
                    27 === t.keyCode && e._open && e.close()
                }), this._parentPage || "overlay" === this.options.display || this._on(this.document, {
                    pageshow: function () {
                        this._openedPage = null, this._getWrapper()
                    }
                }), e._parentPage ? this.document.on("pagehide", ":jqmData(role='page')", function () {
                    e._open && e.close(!0)
                }) : this.document.on("pagebeforehide", function () {
                    e._open && e.close(!0)
                })
            },
            _open: !1,
            _pageContentOpenClasses: null,
            _modalOpenClasses: null,
            open: function (t) {
                if (!this._open) {
                    var i = this, n = i.options, o = function () {
                        i._off(i.document, "panelclose"), i._page().jqmData("panel", "open"), e.support.cssTransform3d && n.animate && "overlay" !== n.display && (i._wrapper.addClass(n.classes.animate), i._fixedToolbars().addClass(n.classes.animate)), !t && e.support.cssTransform3d && n.animate ? (i._wrapper || i.element).animationComplete(s, "transition") : setTimeout(s, 0), n.theme && "overlay" !== n.display && i._page().parent().addClass(n.classes.pageContainer + "-themed " + n.classes.pageContainer + "-" + n.theme), i.element.removeClass(n.classes.panelClosed).addClass(n.classes.panelOpen), i._positionPanel(!0), i._pageContentOpenClasses = i._getPosDisplayClasses(n.classes.pageContentPrefix), "overlay" !== n.display && (i._page().parent().addClass(n.classes.pageContainer), i._wrapper.addClass(i._pageContentOpenClasses), i._fixedToolbars().addClass(i._pageContentOpenClasses)), i._modalOpenClasses = i._getPosDisplayClasses(n.classes.modal) + " " + n.classes.modalOpen, i._modal && i._modal.addClass(i._modalOpenClasses).height(Math.max(i._modal.height(), i.document.height()))
                    }, s = function () {
                        i._open && ("overlay" !== n.display && (i._wrapper.addClass(n.classes.pageContentPrefix + "-open"), i._fixedToolbars().addClass(n.classes.pageContentPrefix + "-open")), i._bindFixListener(), i._trigger("open"), i._openedPage = i._page())
                    };
                    i._trigger("beforeopen"), "open" === i._page().jqmData("panel") ? i._on(i.document, {panelclose: o}) : o(), i._open = !0
                }
            },
            close: function (t) {
                if (this._open) {
                    var i = this, n = this.options, o = function () {
                        i.element.removeClass(n.classes.panelOpen), "overlay" !== n.display && (i._wrapper.removeClass(i._pageContentOpenClasses), i._fixedToolbars().removeClass(i._pageContentOpenClasses)), !t && e.support.cssTransform3d && n.animate ? (i._wrapper || i.element).animationComplete(s, "transition") : setTimeout(s, 0), i._modal && i._modal.removeClass(i._modalOpenClasses).height("")
                    }, s = function () {
                        n.theme && "overlay" !== n.display && i._page().parent().removeClass(n.classes.pageContainer + "-themed " + n.classes.pageContainer + "-" + n.theme), i.element.addClass(n.classes.panelClosed), "overlay" !== n.display && (i._page().parent().removeClass(n.classes.pageContainer), i._wrapper.removeClass(n.classes.pageContentPrefix + "-open"), i._fixedToolbars().removeClass(n.classes.pageContentPrefix + "-open")), e.support.cssTransform3d && n.animate && "overlay" !== n.display && (i._wrapper.removeClass(n.classes.animate), i._fixedToolbars().removeClass(n.classes.animate)), i._fixPanel(), i._unbindFixListener(), e.mobile.resetActivePageHeight(), i._page().jqmRemoveData("panel"), i._trigger("close"), i._openedPage = null
                    };
                    i._trigger("beforeclose"), o(), i._open = !1
                }
            },
            toggle: function () {
                this[this._open ? "close" : "open"]()
            },
            _destroy: function () {
                var t, i = this.options, n = e("body > :mobile-panel").length + e.mobile.activePage.find(":mobile-panel").length > 1;
                "overlay" !== i.display && (t = e("body > :mobile-panel").add(e.mobile.activePage.find(":mobile-panel")), 0 === t.not(".ui-panel-display-overlay").not(this.element).length && this._wrapper.children().unwrap(), this._open && (this._fixedToolbars().removeClass(i.classes.pageContentPrefix + "-open"), e.support.cssTransform3d && i.animate && this._fixedToolbars().removeClass(i.classes.animate), this._page().parent().removeClass(i.classes.pageContainer), i.theme && this._page().parent().removeClass(i.classes.pageContainer + "-themed " + i.classes.pageContainer + "-" + i.theme))), n || this.document.off("panelopen panelclose"), this._open && this._page().jqmRemoveData("panel"), this._panelInner.children().unwrap(), this.element.removeClass([this._getPanelClasses(), i.classes.panelOpen, i.classes.animate].join(" ")).off("swipeleft.panel swiperight.panel").off("panelbeforeopen").off("panelhide").off("keyup.panel").off("updatelayout"), this._modal && this._modal.remove()
            }
        })
    }(e), function (e, t) {
        e.widget("mobile.table", {
            options: {classes: {table: "ui-table"}, enhanced: !1}, _create: function () {
                this.options.enhanced || this.element.addClass(this.options.classes.table), e.extend(this, {
                    headers: t,
                    allHeaders: t
                }), this._refresh(!0)
            }, _setHeaders: function () {
                var e = this.element.find("thead tr");
                this.headers = this.element.find("tr:eq(0)").children(), this.allHeaders = this.headers.add(e.children())
            }, refresh: function () {
                this._refresh()
            }, rebuild: e.noop, _refresh: function () {
                var t = this.element, i = t.find("thead tr");
                this._setHeaders(), i.each(function () {
                    var n = 0;
                    e(this).children().each(function () {
                        var o, s = parseInt(this.getAttribute("colspan"), 10), a = ":nth-child(" + (n + 1) + ")";
                        if (this.setAttribute("data-" + e.mobile.ns + "colstart", n + 1), s)for (o = 0; s - 1 > o; o++)n++, a += ", :nth-child(" + (n + 1) + ")";
                        e(this).jqmData("cells", t.find("tr").not(i.eq(0)).not(this).children(a)), n++
                    })
                })
            }
        })
    }(e), function (e) {
        e.widget("mobile.table", e.mobile.table, {
            options: {
                mode: "columntoggle",
                columnBtnTheme: null,
                columnPopupTheme: null,
                columnBtnText: "Columns...",
                classes: e.extend(e.mobile.table.prototype.options.classes, {
                    popup: "ui-table-columntoggle-popup",
                    columnBtn: "ui-table-columntoggle-btn",
                    priorityPrefix: "ui-table-priority-",
                    columnToggleTable: "ui-table-columntoggle"
                })
            }, _create: function () {
                this._super(), "columntoggle" === this.options.mode && (e.extend(this, {_menu: null}), this.options.enhanced ? (this._menu = e(this.document[0].getElementById(this._id() + "-popup")).children().first(), this._addToggles(this._menu, !0)) : (this._menu = this._enhanceColToggle(), this.element.addClass(this.options.classes.columnToggleTable)), this._setupEvents(), this._setToggleState())
            }, _id: function () {
                return this.element.attr("id") || this.widgetName + this.uuid
            }, _setupEvents: function () {
                this._on(this.window, {throttledresize: "_setToggleState"}), this._on(this._menu, {"change input": "_menuInputChange"})
            }, _addToggles: function (t, i) {
                var n, o = 0, s = this.options, a = t.controlgroup("container");
                i ? n = t.find("input") : a.empty(), this.headers.not("td").each(function () {
                    var t, r, l = e(this), c = e.mobile.getAttribute(this, "priority");
                    c && (r = l.add(l.jqmData("cells")), r.addClass(s.classes.priorityPrefix + c), t = (i ? n.eq(o++) : e("<label><input type='checkbox' checked />" + (l.children("abbr").first().attr("title") || l.text()) + "</label>").appendTo(a).children(0).checkboxradio({theme: s.columnPopupTheme})).jqmData("header", l).jqmData("cells", r), l.jqmData("input", t))
                }), i || t.controlgroup("refresh")
            }, _menuInputChange: function (t) {
                var i = e(t.target), n = i[0].checked;
                i.jqmData("cells").toggleClass("ui-table-cell-hidden", !n).toggleClass("ui-table-cell-visible", n)
            }, _unlockCells: function (e) {
                e.removeClass("ui-table-cell-hidden ui-table-cell-visible")
            }, _enhanceColToggle: function () {
                var t, i, n, o, s = this.element, a = this.options, r = e.mobile.ns, l = this.document[0].createDocumentFragment();
                return t = this._id() + "-popup", i = e("<a href='#" + t + "' class='" + a.classes.columnBtn + " ui-btn ui-btn-" + (a.columnBtnTheme || "a") + " ui-corner-all ui-shadow ui-mini' data-" + r + "rel='popup'>" + a.columnBtnText + "</a>"), n = e("<div class='" + a.classes.popup + "' id='" + t + "'></div>"), o = e("<fieldset></fieldset>").controlgroup(), this._addToggles(o, !1), o.appendTo(n), l.appendChild(n[0]), l.appendChild(i[0]), s.before(l), n.popup(), o
            }, rebuild: function () {
                this._super(), "columntoggle" === this.options.mode && this._refresh(!1)
            }, _refresh: function (t) {
                var i, n, o;
                if (this._super(t), !t && "columntoggle" === this.options.mode)for (i = this.headers, n = [], this._menu.find("input").each(function () {
                    var t = e(this), o = t.jqmData("header"), s = i.index(o[0]);
                    s > -1 && !t.prop("checked") && n.push(s)
                }), this._unlockCells(this.element.find(".ui-table-cell-hidden, .ui-table-cell-visible")), this._addToggles(this._menu, t), o = n.length - 1; o > -1; o--)i.eq(n[o]).jqmData("input").prop("checked", !1).checkboxradio("refresh").trigger("change")
            }, _setToggleState: function () {
                this._menu.find("input").each(function () {
                    var t = e(this);
                    this.checked = "table-cell" === t.jqmData("cells").eq(0).css("display"), t.checkboxradio("refresh")
                })
            }, _destroy: function () {
                this._super()
            }
        })
    }(e), function (e) {
        e.widget("mobile.table", e.mobile.table, {
            options: {
                mode: "reflow",
                classes: e.extend(e.mobile.table.prototype.options.classes, {
                    reflowTable: "ui-table-reflow",
                    cellLabels: "ui-table-cell-label"
                })
            }, _create: function () {
                this._super(), "reflow" === this.options.mode && (this.options.enhanced || (this.element.addClass(this.options.classes.reflowTable), this._updateReflow()))
            }, rebuild: function () {
                this._super(), "reflow" === this.options.mode && this._refresh(!1)
            }, _refresh: function (e) {
                this._super(e), e || "reflow" !== this.options.mode || this._updateReflow()
            }, _updateReflow: function () {
                var t = this, i = this.options;
                e(t.allHeaders.get().reverse()).each(function () {
                    var n, o, s = e(this).jqmData("cells"), a = e.mobile.getAttribute(this, "colstart"), r = s.not(this).filter("thead th").length && " ui-table-cell-label-top", l = e(this).clone().contents();
                    l.length > 0 && (r ? (n = parseInt(this.getAttribute("colspan"), 10), o = "", n && (o = "td:nth-child(" + n + "n + " + a + ")"), t._addLabels(s.filter(o), i.classes.cellLabels + r, l)) : t._addLabels(s, i.classes.cellLabels, l))
                })
            }, _addLabels: function (t, i, n) {
                1 === n.length && "abbr" === n[0].nodeName.toLowerCase() && (n = n.eq(0).attr("title")), t.not(":has(b." + i + ")").prepend(e("<b class='" + i + "'></b>").append(n))
            }
        })
    }(e), function (e, i) {
        var n = function (t, i) {
            return -1 === ("" + (e.mobile.getAttribute(this, "filtertext") || e(this).text())).toLowerCase().indexOf(i)
        };
        e.widget("mobile.filterable", {
            initSelector: ":jqmData(filter='true')",
            options: {
                filterReveal: !1,
                filterCallback: n,
                enhanced: !1,
                input: null,
                children: "> li, > option, > optgroup option, > tbody tr, > .ui-controlgroup-controls > .ui-btn, > .ui-controlgroup-controls > .ui-checkbox, > .ui-controlgroup-controls > .ui-radio"
            },
            _create: function () {
                var t = this.options;
                e.extend(this, {
                    _search: null,
                    _timer: 0
                }), this._setInput(t.input), t.enhanced || this._filterItems((this._search && this._search.val() || "").toLowerCase())
            },
            _onKeyUp: function () {
                var i, n, o = this._search;
                if (o) {
                    if (i = o.val().toLowerCase(), n = e.mobile.getAttribute(o[0], "lastval") + "", n && n === i)return;
                    this._timer && (t.clearTimeout(this._timer), this._timer = 0), this._timer = this._delay(function () {
                        return this._trigger("beforefilter", null, {input: o}) === !1 ? !1 : (o[0].setAttribute("data-" + e.mobile.ns + "lastval", i), this._filterItems(i), void(this._timer = 0))
                    }, 250)
                }
            },
            _getFilterableItems: function () {
                var t = this.element, i = this.options.children, n = i ? e.isFunction(i) ? i() : i.nodeName ? e(i) : i.jquery ? i : this.element.find(i) : {length: 0};
                return 0 === n.length && (n = t.children()), n
            },
            _filterItems: function (t) {
                var i, o, s, a, r = [], l = [], c = this.options, h = this._getFilterableItems();
                if (null != t)for (o = c.filterCallback || n, s = h.length, i = 0; s > i; i++)a = o.call(h[i], i, t) ? l : r, a.push(h[i]);
                0 === l.length ? h[c.filterReveal && 0 === t.length ? "addClass" : "removeClass"]("ui-screen-hidden") : (e(l).addClass("ui-screen-hidden"), e(r).removeClass("ui-screen-hidden")), this._refreshChildWidget(), this._trigger("filter", null, {items: h})
            },
            _refreshChildWidget: function () {
                var t, i, n = ["collapsibleset", "selectmenu", "controlgroup", "listview"];
                for (i = n.length - 1; i > -1; i--)t = n[i], e.mobile[t] && (t = this.element.data("mobile-" + t), t && e.isFunction(t.refresh) && t.refresh())
            },
            _setInput: function (i) {
                var n = this._search;
                this._timer && (t.clearTimeout(this._timer), this._timer = 0), n && (this._off(n, "keyup change input"), n = null), i && (n = i.jquery ? i : i.nodeName ? e(i) : this.document.find(i), this._on(n, {
                    keydown: "_onKeyDown",
                    keypress: "_onKeyPress",
                    keyup: "_onKeyUp",
                    change: "_onKeyUp",
                    input: "_onKeyUp"
                })), this._search = n
            },
            _onKeyDown: function (t) {
                t.keyCode === e.ui.keyCode.ENTER && (t.preventDefault(), this._preventKeyPress = !0)
            },
            _onKeyPress: function (e) {
                this._preventKeyPress && (e.preventDefault(), this._preventKeyPress = !1)
            },
            _setOptions: function (e) {
                var t = !(e.filterReveal === i && e.filterCallback === i && e.children === i);
                this._super(e), e.input !== i && (this._setInput(e.input), t = !0), t && this.refresh()
            },
            _destroy: function () {
                var e = this.options, t = this._getFilterableItems();
                e.enhanced ? t.toggleClass("ui-screen-hidden", e.filterReveal) : t.removeClass("ui-screen-hidden")
            },
            refresh: function () {
                this._timer && (t.clearTimeout(this._timer), this._timer = 0), this._filterItems((this._search && this._search.val() || "").toLowerCase())
            }
        })
    }(e), function (e, t) {
        var i = function (e, t) {
            return function (i) {
                t.call(this, i), e._syncTextInputOptions(i)
            }
        }, n = /(^|\s)ui-li-divider(\s|$)/, o = e.mobile.filterable.prototype.options.filterCallback;
        e.mobile.filterable.prototype.options.filterCallback = function (e, t) {
            return !this.className.match(n) && o.call(this, e, t)
        }, e.widget("mobile.filterable", e.mobile.filterable, {
            options: {
                filterPlaceholder: "Filter items...",
                filterTheme: null
            }, _create: function () {
                var t, i, n = this.element, o = ["collapsibleset", "selectmenu", "controlgroup", "listview"], s = {};
                for (this._super(), e.extend(this, {_widget: null}), t = o.length - 1; t > -1; t--)if (i = o[t], e.mobile[i]) {
                    if (this._setWidget(n.data("mobile-" + i)))break;
                    s[i + "create"] = "_handleCreate"
                }
                this._widget || this._on(n, s)
            }, _handleCreate: function (e) {
                this._setWidget(this.element.data("mobile-" + e.type.substring(0, e.type.length - 6)))
            }, _trigger: function (e, t, i) {
                return this._widget && "mobile-listview" === this._widget.widgetFullName && "beforefilter" === e && this._widget._trigger("beforefilter", t, i), this._super(e, t, i)
            }, _setWidget: function (e) {
                return !this._widget && e && (this._widget = e, this._widget._setOptions = i(this, this._widget._setOptions)), this._widget && (this._syncTextInputOptions(this._widget.options), "listview" === this._widget.widgetName && (this._widget.options.hideDividers = !0, this._widget.element.listview("refresh"))), !!this._widget
            }, _isSearchInternal: function () {
                return this._search && this._search.jqmData("ui-filterable-" + this.uuid + "-internal")
            }, _setInput: function (t) {
                var i = this.options, n = !0, o = {};
                if (!t) {
                    if (this._isSearchInternal())return;
                    n = !1, t = e("<input data-" + e.mobile.ns + "type='search' placeholder='" + i.filterPlaceholder + "'></input>").jqmData("ui-filterable-" + this.uuid + "-internal", !0), e("<form class='ui-filterable'></form>").append(t).submit(function (e) {
                        e.preventDefault(), t.blur()
                    }).insertBefore(this.element), e.mobile.textinput && (null != this.options.filterTheme && (o.theme = i.filterTheme), t.textinput(o))
                }
                this._super(t), this._isSearchInternal() && n && this._search.attr("placeholder", this.options.filterPlaceholder)
            }, _setOptions: function (i) {
                var n = this._super(i);
                return i.filterPlaceholder !== t && this._isSearchInternal() && this._search.attr("placeholder", i.filterPlaceholder), i.filterTheme !== t && this._search && e.mobile.textinput && this._search.textinput("option", "theme", i.filterTheme), n
            }, _refreshChildWidget: function () {
                this._refreshingChildWidget = !0, this._superApply(arguments), this._refreshingChildWidget = !1
            }, refresh: function () {
                this._refreshingChildWidget || this._superApply(arguments)
            }, _destroy: function () {
                this._isSearchInternal() && this._search.remove(), this._super()
            }, _syncTextInputOptions: function (i) {
                var n, o = {};
                if (this._isSearchInternal() && e.mobile.textinput) {
                    for (n in e.mobile.textinput.prototype.options)i[n] !== t && (o[n] = "theme" === n && null != this.options.filterTheme ? this.options.filterTheme : i[n]);
                    this._search.textinput("option", o)
                }
            }
        }), e.widget("mobile.listview", e.mobile.listview, {
            options: {filter: !1}, _create: function () {
                return this.options.filter !== !0 || this.element.data("mobile-filterable") || this.element.filterable(), this._super()
            }, refresh: function () {
                var e;
                this._superApply(arguments), this.options.filter === !0 && (e = this.element.data("mobile-filterable"), e && e.refresh())
            }
        })
    }(e), function (e, t) {
        function i() {
            return ++o
        }

        function n(e) {
            return e.hash.length > 1 && decodeURIComponent(e.href.replace(s, "")) === decodeURIComponent(location.href.replace(s, ""))
        }

        var o = 0, s = /#.*$/;
        e.widget("ui.tabs", {
            version: "fadf2b312a05040436451c64bbfaf4814bc62c56",
            delay: 300,
            options: {
                active: null,
                collapsible: !1,
                event: "click",
                heightStyle: "content",
                hide: null,
                show: null,
                activate: null,
                beforeActivate: null,
                beforeLoad: null,
                load: null
            },
            _create: function () {
                var t = this, i = this.options;
                this.running = !1, this.element.addClass("ui-tabs ui-widget ui-widget-content ui-corner-all").toggleClass("ui-tabs-collapsible", i.collapsible).delegate(".ui-tabs-nav > li", "mousedown" + this.eventNamespace, function (t) {
                    e(this).is(".ui-state-disabled") && t.preventDefault()
                }).delegate(".ui-tabs-anchor", "focus" + this.eventNamespace, function () {
                    e(this).closest("li").is(".ui-state-disabled") && this.blur()
                }), this._processTabs(), i.active = this._initialActive(), e.isArray(i.disabled) && (i.disabled = e.unique(i.disabled.concat(e.map(this.tabs.filter(".ui-state-disabled"), function (e) {
                    return t.tabs.index(e)
                }))).sort()), this.active = this.options.active !== !1 && this.anchors.length ? this._findActive(i.active) : e(), this._refresh(), this.active.length && this.load(i.active)
            },
            _initialActive: function () {
                var t = this.options.active, i = this.options.collapsible, n = location.hash.substring(1);
                return null === t && (n && this.tabs.each(function (i, o) {
                    return e(o).attr("aria-controls") === n ? (t = i, !1) : void 0
                }), null === t && (t = this.tabs.index(this.tabs.filter(".ui-tabs-active"))), (null === t || -1 === t) && (t = this.tabs.length ? 0 : !1)), t !== !1 && (t = this.tabs.index(this.tabs.eq(t)), -1 === t && (t = i ? !1 : 0)), !i && t === !1 && this.anchors.length && (t = 0), t
            },
            _getCreateEventData: function () {
                return {tab: this.active, panel: this.active.length ? this._getPanelForTab(this.active) : e()}
            },
            _tabKeydown: function (t) {
                var i = e(this.document[0].activeElement).closest("li"), n = this.tabs.index(i), o = !0;
                if (!this._handlePageNav(t)) {
                    switch (t.keyCode) {
                        case e.ui.keyCode.RIGHT:
                        case e.ui.keyCode.DOWN:
                            n++;
                            break;
                        case e.ui.keyCode.UP:
                        case e.ui.keyCode.LEFT:
                            o = !1, n--;
                            break;
                        case e.ui.keyCode.END:
                            n = this.anchors.length - 1;
                            break;
                        case e.ui.keyCode.HOME:
                            n = 0;
                            break;
                        case e.ui.keyCode.SPACE:
                            return t.preventDefault(), clearTimeout(this.activating), void this._activate(n);
                        case e.ui.keyCode.ENTER:
                            return t.preventDefault(), clearTimeout(this.activating), void this._activate(n === this.options.active ? !1 : n);
                        default:
                            return
                    }
                    t.preventDefault(), clearTimeout(this.activating), n = this._focusNextTab(n, o), t.ctrlKey || (i.attr("aria-selected", "false"), this.tabs.eq(n).attr("aria-selected", "true"), this.activating = this._delay(function () {
                        this.option("active", n)
                    }, this.delay))
                }
            },
            _panelKeydown: function (t) {
                this._handlePageNav(t) || t.ctrlKey && t.keyCode === e.ui.keyCode.UP && (t.preventDefault(), this.active.focus())
            },
            _handlePageNav: function (t) {
                return t.altKey && t.keyCode === e.ui.keyCode.PAGE_UP ? (this._activate(this._focusNextTab(this.options.active - 1, !1)), !0) : t.altKey && t.keyCode === e.ui.keyCode.PAGE_DOWN ? (this._activate(this._focusNextTab(this.options.active + 1, !0)), !0) : void 0
            },
            _findNextTab: function (t, i) {
                function n() {
                    return t > o && (t = 0), 0 > t && (t = o), t
                }

                for (var o = this.tabs.length - 1; -1 !== e.inArray(n(), this.options.disabled);)t = i ? t + 1 : t - 1;
                return t
            },
            _focusNextTab: function (e, t) {
                return e = this._findNextTab(e, t), this.tabs.eq(e).focus(), e
            },
            _setOption: function (e, t) {
                return "active" === e ? void this._activate(t) : "disabled" === e ? void this._setupDisabled(t) : (this._super(e, t), "collapsible" === e && (this.element.toggleClass("ui-tabs-collapsible", t), t || this.options.active !== !1 || this._activate(0)), "event" === e && this._setupEvents(t), void("heightStyle" === e && this._setupHeightStyle(t)))
            },
            _tabId: function (e) {
                return e.attr("aria-controls") || "ui-tabs-" + i()
            },
            _sanitizeSelector: function (e) {
                return e ? e.replace(/[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g, "\\$&") : ""
            },
            refresh: function () {
                var t = this.options, i = this.tablist.children(":has(a[href])");
                t.disabled = e.map(i.filter(".ui-state-disabled"), function (e) {
                    return i.index(e)
                }), this._processTabs(), t.active !== !1 && this.anchors.length ? this.active.length && !e.contains(this.tablist[0], this.active[0]) ? this.tabs.length === t.disabled.length ? (t.active = !1, this.active = e()) : this._activate(this._findNextTab(Math.max(0, t.active - 1), !1)) : t.active = this.tabs.index(this.active) : (t.active = !1, this.active = e()), this._refresh()
            },
            _refresh: function () {
                this._setupDisabled(this.options.disabled), this._setupEvents(this.options.event), this._setupHeightStyle(this.options.heightStyle), this.tabs.not(this.active).attr({
                    "aria-selected": "false",
                    tabIndex: -1
                }), this.panels.not(this._getPanelForTab(this.active)).hide().attr({
                    "aria-expanded": "false",
                    "aria-hidden": "true"
                }), this.active.length ? (this.active.addClass("ui-tabs-active ui-state-active").attr({
                    "aria-selected": "true",
                    tabIndex: 0
                }), this._getPanelForTab(this.active).show().attr({
                    "aria-expanded": "true",
                    "aria-hidden": "false"
                })) : this.tabs.eq(0).attr("tabIndex", 0)
            },
            _processTabs: function () {
                var t = this;
                this.tablist = this._getList().addClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").attr("role", "tablist"), this.tabs = this.tablist.find("> li:has(a[href])").addClass("ui-state-default ui-corner-top").attr({
                    role: "tab",
                    tabIndex: -1
                }), this.anchors = this.tabs.map(function () {
                    return e("a", this)[0]
                }).addClass("ui-tabs-anchor").attr({
                    role: "presentation",
                    tabIndex: -1
                }), this.panels = e(), this.anchors.each(function (i, o) {
                    var s, a, r, l = e(o).uniqueId().attr("id"), c = e(o).closest("li"), h = c.attr("aria-controls");
                    n(o) ? (s = o.hash, a = t.element.find(t._sanitizeSelector(s))) : (r = t._tabId(c), s = "#" + r, a = t.element.find(s), a.length || (a = t._createPanel(r), a.insertAfter(t.panels[i - 1] || t.tablist)), a.attr("aria-live", "polite")), a.length && (t.panels = t.panels.add(a)), h && c.data("ui-tabs-aria-controls", h), c.attr({
                        "aria-controls": s.substring(1),
                        "aria-labelledby": l
                    }), a.attr("aria-labelledby", l)
                }), this.panels.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").attr("role", "tabpanel")
            },
            _getList: function () {
                return this.element.find("ol,ul").eq(0)
            },
            _createPanel: function (t) {
                return e("<div>").attr("id", t).addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").data("ui-tabs-destroy", !0)
            },
            _setupDisabled: function (t) {
                e.isArray(t) && (t.length ? t.length === this.anchors.length && (t = !0) : t = !1);
                for (var i, n = 0; i = this.tabs[n]; n++)t === !0 || -1 !== e.inArray(n, t) ? e(i).addClass("ui-state-disabled").attr("aria-disabled", "true") : e(i).removeClass("ui-state-disabled").removeAttr("aria-disabled");
                this.options.disabled = t
            },
            _setupEvents: function (t) {
                var i = {
                    click: function (e) {
                        e.preventDefault()
                    }
                };
                t && e.each(t.split(" "), function (e, t) {
                    i[t] = "_eventHandler"
                }), this._off(this.anchors.add(this.tabs).add(this.panels)), this._on(this.anchors, i), this._on(this.tabs, {keydown: "_tabKeydown"}), this._on(this.panels, {keydown: "_panelKeydown"}), this._focusable(this.tabs), this._hoverable(this.tabs)
            },
            _setupHeightStyle: function (t) {
                var i, n = this.element.parent();
                "fill" === t ? (i = n.height(), i -= this.element.outerHeight() - this.element.height(), this.element.siblings(":visible").each(function () {
                    var t = e(this), n = t.css("position");
                    "absolute" !== n && "fixed" !== n && (i -= t.outerHeight(!0))
                }), this.element.children().not(this.panels).each(function () {
                    i -= e(this).outerHeight(!0)
                }), this.panels.each(function () {
                    e(this).height(Math.max(0, i - e(this).innerHeight() + e(this).height()))
                }).css("overflow", "auto")) : "auto" === t && (i = 0, this.panels.each(function () {
                    i = Math.max(i, e(this).height("").height())
                }).height(i))
            },
            _eventHandler: function (t) {
                var i = this.options, n = this.active, o = e(t.currentTarget), s = o.closest("li"), a = s[0] === n[0], r = a && i.collapsible, l = r ? e() : this._getPanelForTab(s), c = n.length ? this._getPanelForTab(n) : e(), h = {
                    oldTab: n,
                    oldPanel: c,
                    newTab: r ? e() : s,
                    newPanel: l
                };
                t.preventDefault(), s.hasClass("ui-state-disabled") || s.hasClass("ui-tabs-loading") || this.running || a && !i.collapsible || this._trigger("beforeActivate", t, h) === !1 || (i.active = r ? !1 : this.tabs.index(s), this.active = a ? e() : s, this.xhr && this.xhr.abort(), c.length || l.length || e.error("jQuery UI Tabs: Mismatching fragment identifier."), l.length && this.load(this.tabs.index(s), t), this._toggle(t, h))
            },
            _toggle: function (t, i) {
                function n() {
                    s.running = !1, s._trigger("activate", t, i)
                }

                function o() {
                    i.newTab.closest("li").addClass("ui-tabs-active ui-state-active"), a.length && s.options.show ? s._show(a, s.options.show, n) : (a.show(), n())
                }

                var s = this, a = i.newPanel, r = i.oldPanel;
                this.running = !0, r.length && this.options.hide ? this._hide(r, this.options.hide, function () {
                    i.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"), o()
                }) : (i.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"), r.hide(), o()), r.attr({
                    "aria-expanded": "false",
                    "aria-hidden": "true"
                }), i.oldTab.attr("aria-selected", "false"), a.length && r.length ? i.oldTab.attr("tabIndex", -1) : a.length && this.tabs.filter(function () {
                    return 0 === e(this).attr("tabIndex")
                }).attr("tabIndex", -1), a.attr({
                    "aria-expanded": "true",
                    "aria-hidden": "false"
                }), i.newTab.attr({"aria-selected": "true", tabIndex: 0})
            },
            _activate: function (t) {
                var i, n = this._findActive(t);
                n[0] !== this.active[0] && (n.length || (n = this.active), i = n.find(".ui-tabs-anchor")[0], this._eventHandler({
                    target: i,
                    currentTarget: i,
                    preventDefault: e.noop
                }))
            },
            _findActive: function (t) {
                return t === !1 ? e() : this.tabs.eq(t)
            },
            _getIndex: function (e) {
                return "string" == typeof e && (e = this.anchors.index(this.anchors.filter("[href$='" + e + "']"))), e
            },
            _destroy: function () {
                this.xhr && this.xhr.abort(), this.element.removeClass("ui-tabs ui-widget ui-widget-content ui-corner-all ui-tabs-collapsible"), this.tablist.removeClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").removeAttr("role"), this.anchors.removeClass("ui-tabs-anchor").removeAttr("role").removeAttr("tabIndex").removeUniqueId(), this.tabs.add(this.panels).each(function () {
                    e.data(this, "ui-tabs-destroy") ? e(this).remove() : e(this).removeClass("ui-state-default ui-state-active ui-state-disabled ui-corner-top ui-corner-bottom ui-widget-content ui-tabs-active ui-tabs-panel").removeAttr("tabIndex").removeAttr("aria-live").removeAttr("aria-busy").removeAttr("aria-selected").removeAttr("aria-labelledby").removeAttr("aria-hidden").removeAttr("aria-expanded").removeAttr("role")
                }), this.tabs.each(function () {
                    var t = e(this), i = t.data("ui-tabs-aria-controls");
                    i ? t.attr("aria-controls", i).removeData("ui-tabs-aria-controls") : t.removeAttr("aria-controls")
                }), this.panels.show(), "content" !== this.options.heightStyle && this.panels.css("height", "")
            },
            enable: function (i) {
                var n = this.options.disabled;
                n !== !1 && (i === t ? n = !1 : (i = this._getIndex(i), n = e.isArray(n) ? e.map(n, function (e) {
                    return e !== i ? e : null
                }) : e.map(this.tabs, function (e, t) {
                    return t !== i ? t : null
                })), this._setupDisabled(n))
            },
            disable: function (i) {
                var n = this.options.disabled;
                if (n !== !0) {
                    if (i === t)n = !0; else {
                        if (i = this._getIndex(i), -1 !== e.inArray(i, n))return;
                        n = e.isArray(n) ? e.merge([i], n).sort() : [i]
                    }
                    this._setupDisabled(n)
                }
            },
            load: function (t, i) {
                t = this._getIndex(t);
                var o = this, s = this.tabs.eq(t), a = s.find(".ui-tabs-anchor"), r = this._getPanelForTab(s), l = {
                    tab: s,
                    panel: r
                };
                n(a[0]) || (this.xhr = e.ajax(this._ajaxSettings(a, i, l)), this.xhr && "canceled" !== this.xhr.statusText && (s.addClass("ui-tabs-loading"), r.attr("aria-busy", "true"), this.xhr.success(function (e) {
                    setTimeout(function () {
                        r.html(e), o._trigger("load", i, l)
                    }, 1)
                }).complete(function (e, t) {
                    setTimeout(function () {
                        "abort" === t && o.panels.stop(!1, !0), s.removeClass("ui-tabs-loading"), r.removeAttr("aria-busy"), e === o.xhr && delete o.xhr
                    }, 1)
                })))
            },
            _ajaxSettings: function (t, i, n) {
                var o = this;
                return {
                    url: t.attr("href"), beforeSend: function (t, s) {
                        return o._trigger("beforeLoad", i, e.extend({jqXHR: t, ajaxSettings: s}, n))
                    }
                }
            },
            _getPanelForTab: function (t) {
                var i = e(t).attr("aria-controls");
                return this.element.find(this._sanitizeSelector("#" + i))
            }
        })
    }(e), function () {
    }(e), function (e, t) {
        function i(e) {
            o = e.originalEvent, l = o.accelerationIncludingGravity, s = Math.abs(l.x), a = Math.abs(l.y), r = Math.abs(l.z), !t.orientation && (s > 7 || (r > 6 && 8 > a || 8 > r && a > 6) && s > 5) ? n.enabled && n.disable() : n.enabled || n.enable()
        }

        e.mobile.iosorientationfixEnabled = !0;
        var n, o, s, a, r, l, c = navigator.userAgent;
        return /iPhone|iPad|iPod/.test(navigator.platform) && /OS [1-5]_[0-9_]* like Mac OS X/i.test(c) && c.indexOf("AppleWebKit") > -1 ? (n = e.mobile.zoom, void e.mobile.document.on("mobileinit", function () {
            e.mobile.iosorientationfixEnabled && e.mobile.window.bind("orientationchange.iosorientationfix", n.enable).bind("devicemotion.iosorientationfix", i)
        })) : void(e.mobile.iosorientationfixEnabled = !1)
    }(e, this), function (e, t, n) {
        function o() {
            s.removeClass("ui-mobile-rendering")
        }

        var s = e("html"), a = e.mobile.window;
        e(t.document).trigger("mobileinit"), e.mobile.gradeA() && (e.mobile.ajaxBlacklist && (e.mobile.ajaxEnabled = !1), s.addClass("ui-mobile ui-mobile-rendering"), setTimeout(o, 5e3), e.extend(e.mobile, {
            initializePage: function () {
                var t = e.mobile.path, s = e(":jqmData(role='page'), :jqmData(role='dialog')"), r = t.stripHash(t.stripQueryParams(t.parseLocation().hash)), l = e.mobile.path.parseLocation(), c = r ? i.getElementById(r) : n;
                s.length || (s = e("body").wrapInner("<div data-" + e.mobile.ns + "role='page'></div>").children(0)), s.each(function () {
                    var i = e(this);
                    i[0].getAttribute("data-" + e.mobile.ns + "url") || i.attr("data-" + e.mobile.ns + "url", i.attr("id") || t.convertUrlToDataUrl(l.pathname + l.search))
                }), e.mobile.firstPage = s.first(), e.mobile.pageContainer = e.mobile.firstPage.parent().addClass("ui-mobile-viewport").pagecontainer(), e.mobile.navreadyDeferred.resolve(), a.trigger("pagecontainercreate"), e.mobile.loading("show"), o(), e.mobile.hashListeningEnabled && e.mobile.path.isHashValid(location.hash) && (e(c).is(":jqmData(role='page')") || e.mobile.path.isPath(r) || r === e.mobile.dialogHashKey) ? e.event.special.navigate.isPushStateEnabled() ? (e.mobile.navigate.history.stack = [], e.mobile.navigate(e.mobile.path.isPath(location.hash) ? location.hash : location.href)) : a.trigger("hashchange", [!0]) : (e.event.special.navigate.isPushStateEnabled() && e.mobile.navigate.navigator.squash(t.parseLocation().href), e.mobile.changePage(e.mobile.firstPage, {
                    transition: "none",
                    reverse: !0,
                    changeHash: !1,
                    fromHashChange: !0
                }))
            }
        }), e(function () {
            e.support.inlineSVG(), e.mobile.hideUrlBar && t.scrollTo(0, 1), e.mobile.defaultHomeScroll = e.support.scrollTop && 1 !== e.mobile.window.scrollTop() ? 1 : 0, e.mobile.autoInitializePage && e.mobile.initializePage(), e.mobile.hideUrlBar && a.load(e.mobile.silentScroll), e.support.cssPointerEvents || e.mobile.document.delegate(".ui-state-disabled,.ui-disabled", "vclick", function (e) {
                e.preventDefault(), e.stopImmediatePropagation()
            })
        }))
    }(e, this)
}), function (e, t) {
    function i(e) {
        return "" === s ? e : (e = e.charAt(0).toUpperCase() + e.substr(1), s + e)
    }

    var n = Math, o = t.createElement("div").style, s = function () {
        for (var e, t = "t,webkitT,MozT,msT,OT".split(","), i = 0, n = t.length; n > i; i++)if (e = t[i] + "ransform", e in o)return t[i].substr(0, t[i].length - 1);
        return !1
    }(), a = s ? "-" + s.toLowerCase() + "-" : "", r = i("transform"), l = i("transitionProperty"), c = i("transitionDuration"), h = i("transformOrigin"), u = i("transitionTimingFunction"), d = i("transitionDelay"), p = /android/gi.test(navigator.appVersion), f = /iphone|ipad/gi.test(navigator.appVersion), m = /hp-tablet/gi.test(navigator.appVersion), g = i("perspective")in o, b = "ontouchstart"in e && !m, v = !!s, _ = i("transition")in o, y = "onorientationchange"in e ? "orientationchange" : "resize", x = b ? "touchstart" : "mousedown", w = b ? "touchmove" : "mousemove", C = b ? "touchend" : "mouseup", T = b ? "touchcancel" : "mouseup", S = "Moz" == s ? "DOMMouseScroll" : "mousewheel", k = function () {
        if (s === !1)return !1;
        var e = {
            "": "transitionend",
            webkit: "webkitTransitionEnd",
            Moz: "transitionend",
            O: "oTransitionEnd",
            ms: "MSTransitionEnd"
        };
        return e[s]
    }(), P = function () {
        return e.requestAnimationFrame || e.webkitRequestAnimationFrame || e.mozRequestAnimationFrame || e.oRequestAnimationFrame || e.msRequestAnimationFrame || function (e) {
                return setTimeout(e, 1)
            }
    }(), D = function () {
        return e.cancelRequestAnimationFrame || e.webkitCancelAnimationFrame || e.webkitCancelRequestAnimationFrame || e.mozCancelRequestAnimationFrame || e.oCancelRequestAnimationFrame || e.msCancelRequestAnimationFrame || clearTimeout
    }(), E = g ? " translateZ(0)" : "", A = function (i, n) {
        var o, s = this;
        s.wrapper = "object" == typeof i ? i : t.getElementById(i), s.wrapper.style.overflow = "hidden", s.scroller = s.wrapper.children[0], s.options = {
            hScroll: !0,
            vScroll: !0,
            x: 0,
            y: 0,
            bounce: !0,
            bounceLock: !1,
            momentum: !0,
            lockDirection: !0,
            useTransform: !0,
            useTransition: !1,
            topOffset: 0,
            checkDOMChanges: !1,
            handleClick: !0,
            hScrollbar: !0,
            vScrollbar: !0,
            fixedScrollbar: p,
            hideScrollbar: f,
            fadeScrollbar: f && g,
            scrollbarClass: "",
            zoom: !1,
            zoomMin: 1,
            zoomMax: 4,
            doubleTapZoom: 2,
            wheelAction: "scroll",
            snap: !1,
            snapThreshold: 1,
            onRefresh: null,
            onBeforeScrollStart: function (e) {
                e.preventDefault()
            },
            onScrollStart: null,
            onBeforeScrollMove: null,
            onScrollMove: null,
            onBeforeScrollEnd: null,
            onScrollEnd: null,
            onTouchEnd: null,
            onDestroy: null,
            onZoomStart: null,
            onZoom: null,
            onZoomEnd: null
        };
        for (o in n)s.options[o] = n[o];
        s.x = s.options.x, s.y = s.options.y, s.options.useTransform = v && s.options.useTransform, s.options.hScrollbar = s.options.hScroll && s.options.hScrollbar, s.options.vScrollbar = s.options.vScroll && s.options.vScrollbar, s.options.zoom = s.options.useTransform && s.options.zoom, s.options.useTransition = _ && s.options.useTransition, s.options.zoom && p && (E = ""), s.scroller.style[l] = s.options.useTransform ? a + "transform" : "top left", s.scroller.style[c] = "0", s.scroller.style[h] = "0 0", s.options.useTransition && (s.scroller.style[u] = "cubic-bezier(0.33,0.66,0.66,1)"), s.options.useTransform ? s.scroller.style[r] = "translate(" + s.x + "px," + s.y + "px)" + E : s.scroller.style.cssText += ";position:absolute;top:" + s.y + "px;left:" + s.x + "px", s.options.useTransition && (s.options.fixedScrollbar = !0), s.refresh(), s._bind(y, e), s._bind(x), b || (s._bind("mouseout", s.wrapper), "none" != s.options.wheelAction && s._bind(S)), s.options.checkDOMChanges && (s.checkDOMTime = setInterval(function () {
            s._checkDOMChanges()
        }, 500))
    };
    A.prototype = {
        enabled: !0,
        x: 0,
        y: 0,
        steps: [],
        scale: 1,
        currPageX: 0,
        currPageY: 0,
        pagesX: [],
        pagesY: [],
        aniTime: null,
        wheelZoomCount: 0,
        handleEvent: function (e) {
            var t = this;
            switch (e.type) {
                case x:
                    if (!b && 0 !== e.button)return;
                    t._start(e);
                    break;
                case w:
                    t._move(e);
                    break;
                case C:
                case T:
                    t._end(e);
                    break;
                case y:
                    t._resize();
                    break;
                case S:
                    t._wheel(e);
                    break;
                case"mouseout":
                    t._mouseout(e);
                    break;
                case k:
                    t._transitionEnd(e)
            }
        },
        _checkDOMChanges: function () {
            this.moved || this.zoomed || this.animating || this.scrollerW == this.scroller.offsetWidth * this.scale && this.scrollerH == this.scroller.offsetHeight * this.scale || this.refresh()
        },
        _scrollbar: function (e) {
            var i, o = this;
            return o[e + "Scrollbar"] ? (o[e + "ScrollbarWrapper"] || (i = t.createElement("div"), o.options.scrollbarClass ? i.className = o.options.scrollbarClass + e.toUpperCase() : i.style.cssText = "position:absolute;z-index:100;" + ("h" == e ? "height:7px;bottom:1px;left:2px;right:" + (o.vScrollbar ? "7" : "2") + "px" : "width:7px;bottom:" + (o.hScrollbar ? "7" : "2") + "px;top:2px;right:1px"), i.style.cssText += ";pointer-events:none;" + a + "transition-property:opacity;" + a + "transition-duration:" + (o.options.fadeScrollbar ? "350ms" : "0") + ";overflow:hidden;opacity:" + (o.options.hideScrollbar ? "0" : "1"), o.wrapper.appendChild(i), o[e + "ScrollbarWrapper"] = i, i = t.createElement("div"), o.options.scrollbarClass || (i.style.cssText = "position:absolute;z-index:100;background:rgba(0,0,0,0.5);border:1px solid rgba(255,255,255,0.9);" + a + "background-clip:padding-box;" + a + "box-sizing:border-box;" + ("h" == e ? "height:100%" : "width:100%") + ";" + a + "border-radius:3px;border-radius:3px"), i.style.cssText += ";pointer-events:none;" + a + "transition-property:" + a + "transform;" + a + "transition-timing-function:cubic-bezier(0.33,0.66,0.66,1);" + a + "transition-duration:0;" + a + "transform: translate(0,0)" + E, o.options.useTransition && (i.style.cssText += ";" + a + "transition-timing-function:cubic-bezier(0.33,0.66,0.66,1)"), o[e + "ScrollbarWrapper"].appendChild(i), o[e + "ScrollbarIndicator"] = i), "h" == e ? (o.hScrollbarSize = o.hScrollbarWrapper.clientWidth, o.hScrollbarIndicatorSize = n.max(n.round(o.hScrollbarSize * o.hScrollbarSize / o.scrollerW), 8), o.hScrollbarIndicator.style.width = o.hScrollbarIndicatorSize + "px", o.hScrollbarMaxScroll = o.hScrollbarSize - o.hScrollbarIndicatorSize, o.hScrollbarProp = o.hScrollbarMaxScroll / o.maxScrollX) : (o.vScrollbarSize = o.vScrollbarWrapper.clientHeight, o.vScrollbarIndicatorSize = n.max(n.round(o.vScrollbarSize * o.vScrollbarSize / o.scrollerH), 8), o.vScrollbarIndicator.style.height = o.vScrollbarIndicatorSize + "px", o.vScrollbarMaxScroll = o.vScrollbarSize - o.vScrollbarIndicatorSize, o.vScrollbarProp = o.vScrollbarMaxScroll / o.maxScrollY), void o._scrollbarPos(e, !0)) : void(o[e + "ScrollbarWrapper"] && (v && (o[e + "ScrollbarIndicator"].style[r] = ""), o[e + "ScrollbarWrapper"].parentNode.removeChild(o[e + "ScrollbarWrapper"]), o[e + "ScrollbarWrapper"] = null, o[e + "ScrollbarIndicator"] = null))
        },
        _resize: function () {
            var e = this;
            setTimeout(function () {
                e.refresh()
            }, p ? 200 : 0)
        },
        _pos: function (e, t) {
            this.zoomed || (e = this.hScroll ? e : 0, t = this.vScroll ? t : 0, this.options.useTransform ? this.scroller.style[r] = "translate(" + e + "px," + t + "px) scale(" + this.scale + ")" + E : (e = n.round(e), t = n.round(t), this.scroller.style.left = e + "px", this.scroller.style.top = t + "px"), this.x = e, this.y = t, this._scrollbarPos("h"), this._scrollbarPos("v"))
        },
        _scrollbarPos: function (e, t) {
            var i, o = this, s = "h" == e ? o.x : o.y;
            o[e + "Scrollbar"] && (s = o[e + "ScrollbarProp"] * s, 0 > s ? (o.options.fixedScrollbar || (i = o[e + "ScrollbarIndicatorSize"] + n.round(3 * s), 8 > i && (i = 8), o[e + "ScrollbarIndicator"].style["h" == e ? "width" : "height"] = i + "px"), s = 0) : s > o[e + "ScrollbarMaxScroll"] && (o.options.fixedScrollbar ? s = o[e + "ScrollbarMaxScroll"] : (i = o[e + "ScrollbarIndicatorSize"] - n.round(3 * (s - o[e + "ScrollbarMaxScroll"])), 8 > i && (i = 8), o[e + "ScrollbarIndicator"].style["h" == e ? "width" : "height"] = i + "px", s = o[e + "ScrollbarMaxScroll"] + (o[e + "ScrollbarIndicatorSize"] - i))), o[e + "ScrollbarWrapper"].style[d] = "0", o[e + "ScrollbarWrapper"].style.opacity = t && o.options.hideScrollbar ? "0" : "1", o[e + "ScrollbarIndicator"].style[r] = "translate(" + ("h" == e ? s + "px,0)" : "0," + s + "px)") + E)
        },
        _start: function (e) {
            var t, i, o, s, a, l = this, c = b ? e.touches[0] : e;
            l.enabled && (l.options.onBeforeScrollStart && l.options.onBeforeScrollStart.call(l, e), (l.options.useTransition || l.options.zoom) && l._transitionTime(0), l.moved = !1, l.animating = !1, l.zoomed = !1, l.distX = 0, l.distY = 0, l.absDistX = 0, l.absDistY = 0, l.dirX = 0, l.dirY = 0, l.options.zoom && b && e.touches.length > 1 && (s = n.abs(e.touches[0].pageX - e.touches[1].pageX), a = n.abs(e.touches[0].pageY - e.touches[1].pageY), l.touchesDistStart = n.sqrt(s * s + a * a), l.originX = n.abs(e.touches[0].pageX + e.touches[1].pageX - 2 * l.wrapperOffsetLeft) / 2 - l.x, l.originY = n.abs(e.touches[0].pageY + e.touches[1].pageY - 2 * l.wrapperOffsetTop) / 2 - l.y, l.options.onZoomStart && l.options.onZoomStart.call(l, e)), l.options.momentum && (l.options.useTransform ? (t = getComputedStyle(l.scroller, null)[r].replace(/[^0-9\-.,]/g, "").split(","), i = 1 * t[4], o = 1 * t[5]) : (i = 1 * getComputedStyle(l.scroller, null).left.replace(/[^0-9-]/g, ""), o = 1 * getComputedStyle(l.scroller, null).top.replace(/[^0-9-]/g, "")), (i != l.x || o != l.y) && (l.options.useTransition ? l._unbind(k) : D(l.aniTime), l.steps = [], l._pos(i, o))), l.absStartX = l.x, l.absStartY = l.y, l.startX = l.x, l.startY = l.y, l.pointX = c.pageX, l.pointY = c.pageY, l.startTime = e.timeStamp || Date.now(), l.options.onScrollStart && l.options.onScrollStart.call(l, e), l._bind(w), l._bind(C), l._bind(T))
        },
        _move: function (e) {
            var t, i, o, s = this, a = b ? e.touches[0] : e, l = a.pageX - s.pointX, c = a.pageY - s.pointY, h = s.x + l, u = s.y + c, d = e.timeStamp || Date.now();
            return s.options.onBeforeScrollMove && s.options.onBeforeScrollMove.call(s, e), s.options.zoom && b && e.touches.length > 1 ? (t = n.abs(e.touches[0].pageX - e.touches[1].pageX), i = n.abs(e.touches[0].pageY - e.touches[1].pageY), s.touchesDist = n.sqrt(t * t + i * i), s.zoomed = !0, o = 1 / s.touchesDistStart * s.touchesDist * this.scale, o < s.options.zoomMin ? o = .5 * s.options.zoomMin * Math.pow(2, o / s.options.zoomMin) : o > s.options.zoomMax && (o = 2 * s.options.zoomMax * Math.pow(.5, s.options.zoomMax / o)), s.lastScale = o / this.scale, h = this.originX - this.originX * s.lastScale + this.x, u = this.originY - this.originY * s.lastScale + this.y, this.scroller.style[r] = "translate(" + h + "px," + u + "px) scale(" + o + ")" + E, void(s.options.onZoom && s.options.onZoom.call(s, e))) : (s.pointX = a.pageX, s.pointY = a.pageY, (h > 0 || h < s.maxScrollX) && (h = s.options.bounce ? s.x + l / 2 : h >= 0 || s.maxScrollX >= 0 ? 0 : s.maxScrollX), (u > s.minScrollY || u < s.maxScrollY) && (u = s.options.bounce ? s.y + c / 2 : u >= s.minScrollY || s.maxScrollY >= 0 ? s.minScrollY : s.maxScrollY), s.distX += l, s.distY += c, s.absDistX = n.abs(s.distX), s.absDistY = n.abs(s.distY), void(s.absDistX < 6 && s.absDistY < 6 || (s.options.lockDirection && (s.absDistX > s.absDistY + 5 ? (u = s.y, c = 0) : s.absDistY > s.absDistX + 5 && (h = s.x, l = 0)), s.moved = !0, s._pos(h, u), s.dirX = l > 0 ? -1 : 0 > l ? 1 : 0, s.dirY = c > 0 ? -1 : 0 > c ? 1 : 0, d - s.startTime > 300 && (s.startTime = d, s.startX = s.x, s.startY = s.y), s.options.onScrollMove && s.options.onScrollMove.call(s, e))))
        },
        _end: function (e) {
            if (!b || 0 === e.touches.length) {
                var i, o, s, a, l, h, u, d = this, p = b ? e.changedTouches[0] : e, f = {
                    dist: 0,
                    time: 0
                }, m = {dist: 0, time: 0}, g = (e.timeStamp || Date.now()) - d.startTime, v = d.x, _ = d.y;
                if (d._unbind(w), d._unbind(C), d._unbind(T), d.options.onBeforeScrollEnd && d.options.onBeforeScrollEnd.call(d, e), d.zoomed)return u = d.scale * d.lastScale, u = Math.max(d.options.zoomMin, u), u = Math.min(d.options.zoomMax, u), d.lastScale = u / d.scale, d.scale = u, d.x = d.originX - d.originX * d.lastScale + d.x, d.y = d.originY - d.originY * d.lastScale + d.y, d.scroller.style[c] = "200ms", d.scroller.style[r] = "translate(" + d.x + "px," + d.y + "px) scale(" + d.scale + ")" + E, d.zoomed = !1, d.refresh(), void(d.options.onZoomEnd && d.options.onZoomEnd.call(d, e));
                if (!d.moved)return b && (d.doubleTapTimer && d.options.zoom ? (clearTimeout(d.doubleTapTimer), d.doubleTapTimer = null, d.options.onZoomStart && d.options.onZoomStart.call(d, e), d.zoom(d.pointX, d.pointY, 1 == d.scale ? d.options.doubleTapZoom : 1), d.options.onZoomEnd && setTimeout(function () {
                    d.options.onZoomEnd.call(d, e)
                }, 200)) : this.options.handleClick && (d.doubleTapTimer = setTimeout(function () {
                    for (d.doubleTapTimer = null, i = p.target; 1 != i.nodeType;)i = i.parentNode;
                    "SELECT" != i.tagName && "INPUT" != i.tagName && "TEXTAREA" != i.tagName && (o = t.createEvent("MouseEvents"), o.initMouseEvent("click", !0, !0, e.view, 1, p.screenX, p.screenY, p.clientX, p.clientY, e.ctrlKey, e.altKey, e.shiftKey, e.metaKey, 0, null), o._fake = !0, i.dispatchEvent(o))
                }, d.options.zoom ? 250 : 0))), d._resetPos(200), void(d.options.onTouchEnd && d.options.onTouchEnd.call(d, e));
                if (300 > g && d.options.momentum && (f = v ? d._momentum(v - d.startX, g, -d.x, d.scrollerW - d.wrapperW + d.x, d.options.bounce ? d.wrapperW : 0) : f, m = _ ? d._momentum(_ - d.startY, g, -d.y, d.maxScrollY < 0 ? d.scrollerH - d.wrapperH + d.y - d.minScrollY : 0, d.options.bounce ? d.wrapperH : 0) : m, v = d.x + f.dist, _ = d.y + m.dist, (d.x > 0 && v > 0 || d.x < d.maxScrollX && v < d.maxScrollX) && (f = {
                        dist: 0,
                        time: 0
                    }), (d.y > d.minScrollY && _ > d.minScrollY || d.y < d.maxScrollY && _ < d.maxScrollY) && (m = {
                        dist: 0,
                        time: 0
                    })), f.dist || m.dist)return l = n.max(n.max(f.time, m.time), 10), d.options.snap && (s = v - d.absStartX, a = _ - d.absStartY, n.abs(s) < d.options.snapThreshold && n.abs(a) < d.options.snapThreshold ? d.scrollTo(d.absStartX, d.absStartY, 200) : (h = d._snap(v, _), v = h.x, _ = h.y, l = n.max(h.time, l))), d.scrollTo(n.round(v), n.round(_), l), void(d.options.onTouchEnd && d.options.onTouchEnd.call(d, e));
                if (d.options.snap)return s = v - d.absStartX, a = _ - d.absStartY, n.abs(s) < d.options.snapThreshold && n.abs(a) < d.options.snapThreshold ? d.scrollTo(d.absStartX, d.absStartY, 200) : (h = d._snap(d.x, d.y), (h.x != d.x || h.y != d.y) && d.scrollTo(h.x, h.y, h.time)), void(d.options.onTouchEnd && d.options.onTouchEnd.call(d, e));
                d._resetPos(200), d.options.onTouchEnd && d.options.onTouchEnd.call(d, e)
            }
        },
        _resetPos: function (e) {
            var t = this, i = t.x >= 0 ? 0 : t.x < t.maxScrollX ? t.maxScrollX : t.x, n = t.y >= t.minScrollY || t.maxScrollY > 0 ? t.minScrollY : t.y < t.maxScrollY ? t.maxScrollY : t.y;
            return i == t.x && n == t.y ? (t.moved && (t.moved = !1, t.options.onScrollEnd && t.options.onScrollEnd.call(t)), t.hScrollbar && t.options.hideScrollbar && ("webkit" == s && (t.hScrollbarWrapper.style[d] = "300ms"), t.hScrollbarWrapper.style.opacity = "0"), void(t.vScrollbar && t.options.hideScrollbar && ("webkit" == s && (t.vScrollbarWrapper.style[d] = "300ms"), t.vScrollbarWrapper.style.opacity = "0"))) : void t.scrollTo(i, n, e || 0)
        },
        _wheel: function (e) {
            var t, i, n, o, s, a = this;
            if ("wheelDeltaX"in e)t = e.wheelDeltaX / 12, i = e.wheelDeltaY / 12; else if ("wheelDelta"in e)t = i = e.wheelDelta / 12; else {
                if (!("detail"in e))return;
                t = i = 3 * -e.detail
            }
            return "zoom" == a.options.wheelAction ? (s = a.scale * Math.pow(2, 1 / 3 * (i ? i / Math.abs(i) : 0)), s < a.options.zoomMin && (s = a.options.zoomMin), s > a.options.zoomMax && (s = a.options.zoomMax), void(s != a.scale && (!a.wheelZoomCount && a.options.onZoomStart && a.options.onZoomStart.call(a, e), a.wheelZoomCount++, a.zoom(e.pageX, e.pageY, s, 400), setTimeout(function () {
                a.wheelZoomCount--, !a.wheelZoomCount && a.options.onZoomEnd && a.options.onZoomEnd.call(a, e)
            }, 400)))) : (n = a.x + t, o = a.y + i, n > 0 ? n = 0 : n < a.maxScrollX && (n = a.maxScrollX), o > a.minScrollY ? o = a.minScrollY : o < a.maxScrollY && (o = a.maxScrollY), void(a.maxScrollY < 0 && a.scrollTo(n, o, 0)))
        },
        _mouseout: function (e) {
            var t = e.relatedTarget;
            if (!t)return void this._end(e);
            for (; t = t.parentNode;)if (t == this.wrapper)return;
            this._end(e)
        },
        _transitionEnd: function (e) {
            var t = this;
            e.target == t.scroller && (t._unbind(k), t._startAni())
        },
        _startAni: function () {
            var e, t, i, o = this, s = o.x, a = o.y, r = Date.now();
            if (!o.animating) {
                if (!o.steps.length)return void o._resetPos(400);
                if (e = o.steps.shift(), e.x == s && e.y == a && (e.time = 0), o.animating = !0, o.moved = !0, o.options.useTransition)return o._transitionTime(e.time), o._pos(e.x, e.y), o.animating = !1, void(e.time ? o._bind(k) : o._resetPos(0));
                i = function () {
                    var l, c, h = Date.now();
                    return h >= r + e.time ? (o._pos(e.x, e.y), o.animating = !1, o.options.onAnimationEnd && o.options.onAnimationEnd.call(o), void o._startAni()) : (h = (h - r) / e.time - 1, t = n.sqrt(1 - h * h), l = (e.x - s) * t + s, c = (e.y - a) * t + a, o._pos(l, c), void(o.animating && (o.aniTime = P(i))))
                }, i()
            }
        },
        _transitionTime: function (e) {
            e += "ms", this.scroller.style[c] = e, this.hScrollbar && (this.hScrollbarIndicator.style[c] = e), this.vScrollbar && (this.vScrollbarIndicator.style[c] = e)
        },
        _momentum: function (e, t, i, o, s) {
            var a = 6e-4, r = n.abs(e) / t, l = r * r / (2 * a), c = 0, h = 0;
            return e > 0 && l > i ? (h = s / (6 / (l / r * a)), i += h, r = r * i / l, l = i) : 0 > e && l > o && (h = s / (6 / (l / r * a)), o += h, r = r * o / l, l = o), l *= 0 > e ? -1 : 1, c = r / a, {
                dist: l,
                time: n.round(c)
            }
        },
        _offset: function (e) {
            for (var t = -e.offsetLeft, i = -e.offsetTop; e = e.offsetParent;)t -= e.offsetLeft, i -= e.offsetTop;
            return e != this.wrapper && (t *= this.scale, i *= this.scale), {left: t, top: i}
        },
        _snap: function (e, t) {
            var i, o, s, a, r, l, c = this;
            for (s = c.pagesX.length - 1, i = 0, o = c.pagesX.length; o > i; i++)if (e >= c.pagesX[i]) {
                s = i;
                break
            }
            for (s == c.currPageX && s > 0 && c.dirX < 0 && s--, e = c.pagesX[s], r = n.abs(e - c.pagesX[c.currPageX]), r = r ? n.abs(c.x - e) / r * 500 : 0, c.currPageX = s, s = c.pagesY.length - 1, i = 0; s > i; i++)if (t >= c.pagesY[i]) {
                s = i;
                break
            }
            return s == c.currPageY && s > 0 && c.dirY < 0 && s--, t = c.pagesY[s], l = n.abs(t - c.pagesY[c.currPageY]), l = l ? n.abs(c.y - t) / l * 500 : 0, c.currPageY = s, a = n.round(n.max(r, l)) || 200, {
                x: e,
                y: t,
                time: a
            }
        },
        _bind: function (e, t, i) {
            (t || this.scroller).addEventListener(e, this, !!i)
        },
        _unbind: function (e, t, i) {
            (t || this.scroller).removeEventListener(e, this, !!i)
        },
        destroy: function () {
            var t = this;
            t.scroller.style[r] = "", t.hScrollbar = !1, t.vScrollbar = !1, t._scrollbar("h"), t._scrollbar("v"), t._unbind(y, e), t._unbind(x), t._unbind(w), t._unbind(C), t._unbind(T), t.options.hasTouch || (t._unbind("mouseout", t.wrapper), t._unbind(S)), t.options.useTransition && t._unbind(k), t.options.checkDOMChanges && clearInterval(t.checkDOMTime), t.options.onDestroy && t.options.onDestroy.call(t)
        },
        refresh: function () {
            var e, t, i, o, s = this, a = 0, r = 0;
            if (s.scale < s.options.zoomMin && (s.scale = s.options.zoomMin), s.wrapperW = s.wrapper.clientWidth || 1, s.wrapperH = s.wrapper.clientHeight || 1, s.minScrollY = -s.options.topOffset || 0, s.scrollerW = n.round(s.scroller.offsetWidth * s.scale), s.scrollerH = n.round((s.scroller.offsetHeight + s.minScrollY) * s.scale), s.maxScrollX = s.wrapperW - s.scrollerW, s.maxScrollY = s.wrapperH - s.scrollerH + s.minScrollY, s.dirX = 0, s.dirY = 0, s.options.onRefresh && s.options.onRefresh.call(s), s.hScroll = s.options.hScroll && s.maxScrollX < 0, s.vScroll = s.options.vScroll && (!s.options.bounceLock && !s.hScroll || s.scrollerH > s.wrapperH), s.hScrollbar = s.hScroll && s.options.hScrollbar, s.vScrollbar = s.vScroll && s.options.vScrollbar && s.scrollerH > s.wrapperH, e = s._offset(s.wrapper), s.wrapperOffsetLeft = -e.left, s.wrapperOffsetTop = -e.top, "string" == typeof s.options.snap)for (s.pagesX = [], s.pagesY = [], o = s.scroller.querySelectorAll(s.options.snap), t = 0, i = o.length; i > t; t++)a = s._offset(o[t]), a.left += s.wrapperOffsetLeft, a.top += s.wrapperOffsetTop, s.pagesX[t] = a.left < s.maxScrollX ? s.maxScrollX : a.left * s.scale, s.pagesY[t] = a.top < s.maxScrollY ? s.maxScrollY : a.top * s.scale; else if (s.options.snap) {
                for (s.pagesX = []; a >= s.maxScrollX;)s.pagesX[r] = a, a -= s.wrapperW, r++;
                for (s.maxScrollX % s.wrapperW && (s.pagesX[s.pagesX.length] = s.maxScrollX - s.pagesX[s.pagesX.length - 1] + s.pagesX[s.pagesX.length - 1]), a = 0, r = 0, s.pagesY = []; a >= s.maxScrollY;)s.pagesY[r] = a, a -= s.wrapperH, r++;
                s.maxScrollY % s.wrapperH && (s.pagesY[s.pagesY.length] = s.maxScrollY - s.pagesY[s.pagesY.length - 1] + s.pagesY[s.pagesY.length - 1])
            }
            s._scrollbar("h"), s._scrollbar("v"), s.zoomed || (s.scroller.style[c] = "0", s._resetPos(200))
        },
        scrollTo: function (e, t, i, n) {
            var o, s, a = this, r = e;
            for (a.stop(), r.length || (r = [{
                x: e,
                y: t,
                time: i,
                relative: n
            }]), o = 0, s = r.length; s > o; o++)r[o].relative && (r[o].x = a.x - r[o].x, r[o].y = a.y - r[o].y), a.steps.push({
                x: r[o].x,
                y: r[o].y,
                time: r[o].time || 0
            });
            a._startAni()
        },
        scrollToElement: function (e, t) {
            var i, o = this;
            e = e.nodeType ? e : o.scroller.querySelector(e), e && (i = o._offset(e), i.left += o.wrapperOffsetLeft, i.top += o.wrapperOffsetTop, i.left = i.left > 0 ? 0 : i.left < o.maxScrollX ? o.maxScrollX : i.left, i.top = i.top > o.minScrollY ? o.minScrollY : i.top < o.maxScrollY ? o.maxScrollY : i.top, t = void 0 === t ? n.max(2 * n.abs(i.left), 2 * n.abs(i.top)) : t, o.scrollTo(i.left, i.top, t))
        },
        scrollToPage: function (e, t, i) {
            var n, o, s = this;
            i = void 0 === i ? 400 : i, s.options.onScrollStart && s.options.onScrollStart.call(s), s.options.snap ? (e = "next" == e ? s.currPageX + 1 : "prev" == e ? s.currPageX - 1 : e, t = "next" == t ? s.currPageY + 1 : "prev" == t ? s.currPageY - 1 : t, e = 0 > e ? 0 : e > s.pagesX.length - 1 ? s.pagesX.length - 1 : e, t = 0 > t ? 0 : t > s.pagesY.length - 1 ? s.pagesY.length - 1 : t, s.currPageX = e, s.currPageY = t, n = s.pagesX[e], o = s.pagesY[t]) : (n = -s.wrapperW * e, o = -s.wrapperH * t, n < s.maxScrollX && (n = s.maxScrollX), o < s.maxScrollY && (o = s.maxScrollY)), s.scrollTo(n, o, i)
        },
        disable: function () {
            this.stop(), this._resetPos(0), this.enabled = !1, this._unbind(w), this._unbind(C), this._unbind(T)
        },
        enable: function () {
            this.enabled = !0
        },
        stop: function () {
            this.options.useTransition ? this._unbind(k) : D(this.aniTime), this.steps = [], this.moved = !1, this.animating = !1
        },
        zoom: function (e, t, i, n) {
            var o = this, s = i / o.scale;
            o.options.useTransform && (o.zoomed = !0, n = void 0 === n ? 200 : n, e = e - o.wrapperOffsetLeft - o.x, t = t - o.wrapperOffsetTop - o.y, o.x = e - e * s + o.x, o.y = t - t * s + o.y, o.scale = i, o.refresh(), o.x = o.x > 0 ? 0 : o.x < o.maxScrollX ? o.maxScrollX : o.x, o.y = o.y > o.minScrollY ? o.minScrollY : o.y < o.maxScrollY ? o.maxScrollY : o.y, o.scroller.style[c] = n + "ms", o.scroller.style[r] = "translate(" + o.x + "px," + o.y + "px) scale(" + i + ")" + E, o.zoomed = !1)
        },
        isReady: function () {
            return !this.moved && !this.zoomed && !this.animating
        }
    }, o = null, "undefined" != typeof exports ? exports.iScroll = A : e.iScroll = A
}(window, document), function (e, t, i, n) {
    "use strict";
    function o(e) {
        e.preventDefault()
    }

    function s(e, t) {
        function i() {
        }

        i.prototype = t.prototype;
        var n = new i;
        n.constructor = e, e.prototype = n
    }

    function a(t, i, n) {
        this.iscrollview = t, this._emulateBottomOffset = function () {
            this.iscrollview.options.emulateBottomOffset && (this.maxScrollY = this.wrapperH - this.scrollerH + this.minScrollY + this.iscrollview.options.bottomOffset)
        }, this._fixInput = function (e) {
            if (this.iscrollview.options.fixInput) {
                for (var t, i = e.target; 1 !== i.nodeType;)i = i.parentNode;
                if (t = i.tagName.toLowerCase(), "select" === t || "input" === t || "textarea" === t)return
            }
            this.iscrollview.options.preventTouchHover ? e.stopImmediatePropagation() : e.preventDefault()
        }, this._doCallback = function (e, t, i) {
            "object" == typeof t && jqmIscrollviewRemoveLayerXYProps(t);
            var n = this.iscrollview, o = n._logCallback(e, t);
            i && i.call(this, t), n._trigger(e.toLowerCase(), t, {iscrollview: n}), n._logCallback(e, t, o)
        }, this._bind = function (t, i, n) {
            var o = this.iscrollview.options.bindIscrollUsingJqueryEvents, s = o && "mouseout" === t ? "mouseleave" : t;
            return "orientationchange" === t || "resize" === t ? void this.iscrollview._logIscrollEvent("iScroll bind (ignored)", t) : (this.iscrollview._logIscrollEvent("iScroll bind", t), void(o ? (i ? e(i) : this.iscrollview.$scroller).bind(s, e.proxy(this.handleEvent, this)) : (i || this.scroller).addEventListener(s, this, !!n)))
        }, this._unbind = function (t, i, n) {
            var o = this.iscrollview.options.bindIscrollUsingJqueryEvents, s = o && "mouseout" === t ? "mouseleave" : t;
            return "orientationchange" === t || "resize" === t ? void this.iscrollview._logIscrollEvent("iScroll unbind (ignored)") : (this.iscrollview._logIscrollEvent("iScroll unbind", t), void(o ? e(i || this.iscrollview.$scroller).unbind(s, this.handleEvent) : (i || this.scroller).removeEventListener(s, this, !!n)))
        }, this._origHandleEvent = iScroll.prototype.handleEvent, this.handleEvent = function (e) {
            var t, i = this.iscrollview.options.bindIscrollUsingJqueryEvents;
            t = this.iscrollview._logIscrollEvent("iScroll.handleEvent", e), i && "mouseleave" === e.type ? (e.type = "mouseout", this._origHandleEvent(e), e.type = "mouseleave") : this._origHandleEvent(e), this.iscrollview._logIscrollEvent("iScroll.handleEvent", e, t)
        }, this._resize = function () {
        }, iScroll.call(this, i, n)
    }

    var r = i.ontouchend !== n, l = /webkit/i.test(navigator.appVersion), c = /android/gi.test(navigator.appVersion), h = /firefox/i.test(navigator.userAgent), u = (/hp-tablet/gi.test(navigator.appVersion), /(iPhone|iPad|iPod).*AppleWebKit/.test(navigator.appVersion)), d = /iPad.*AppleWebKit/.test(navigator.appVersion), p = /(iPhone|iPad|iPod).*AppleWebKit.*Safari/.test(navigator.appVersion), f = (/(iPhone|iPad|iPod).*AppleWebKit.(?!.*Safari)/.test(navigator.appVersion), u && t.navigator.Standalone !== n, e.mobile.ignoreContentEnabled === n), m = 1;
    s(a, iScroll), e.widget("mobile.iscrollview", e.mobile.widget, {
        widgetEventPrefix: "iscroll_",
        iscroll: null,
        $window: e(t),
        $wrapper: [],
        $scroller: [],
        $scrollerContent: [],
        $pullDown: [],
        $pullUp: [],
        $pullUpSpacer: [],
        $page: [],
        _wrapperHeightAdjustForBoxModel: 0,
        _firstScrollerExpand: !0,
        createdAt: null,
        pageID: null,
        instanceID: null,
        _dirty: !1,
        _dirtyCallbackBefore: null,
        _dirtyCallbackAfter: null,
        _sizeDirty: !1,
        options: {
            hScroll: !1,
            hScrollbar: !1,
            debug: !1,
            traceResizeWrapper: !1,
            traceRefresh: !1,
            traceCreateDestroy: !1,
            traceIscrollEvents: !1,
            tracedIscrollEvents: [],
            traceWidgetEvents: !1,
            tracedWidgetEvents: [],
            traceIscrollCallbacks: !1,
            tracedIscrollCallbacks: [],
            traceWidgetCallbacks: !1,
            tracedWidgetCallbacks: [],
            bottomOffset: 0,
            emulateBottomOffset: !0,
            pageClass: "iscroll-page",
            wrapperClass: "iscroll-wrapper",
            scrollerClass: "iscroll-scroller",
            pullDownClass: "iscroll-pulldown",
            pullUpClass: "iscroll-pullup",
            pullLabelClass: "iscroll-pull-label",
            pullUpSpacerClass: "iscroll-pullup-spacer",
            topSpacerClass: "iscroll-top-spacer",
            bottomSpacerClass: "iscroll-bottom-spacer",
            scrollerContentClass: "iscroll-content",
            fixedHeightClass: "iscroll-fixed",
            fixedHeightSelector: ":jqmData(role='header'), :jqmData(role='footer'), :jqmData(iscroll-fixed)",
            resizeWrapper: !0,
            resizeEvents: "resize" + (e.support.orientation ? " orientationchange" : ""),
            refreshOnPageBeforeShow: !1,
            fixInput: !0,
            wrapperAdd: 0,
            refreshDelay: c ? 200 : 0,
            scrollShortContent: !0,
            removeWrapperPadding: !0,
            addScrollerPadding: !0,
            addSpacers: !0,
            scrollTopOnResize: !0,
            scrollTopOnOrientationChange: !0,
            createScroller: !0,
            deferNonActiveRefresh: !0,
            deferNonActiveResize: !0,
            preventTouchHover: f && r,
            bindIscrollUsingJqueryEvents: !1,
            fastDestroy: !1,
            preventPageScroll: !0,
            pullDownResetText: "Pull down to refresh...",
            pullDownPulledText: "Release to refresh...",
            pullDownLoadingText: "Loading...",
            pullUpResetText: "Pull up to refresh...",
            pullUpPulledText: "Release to refresh...",
            pullUpLoadingText: "Loading...",
            pullPulledClass: "iscroll-pull-pulled",
            pullLoadingClass: "iscroll-pull-loading",
            onrefresh: null,
            onbeforescrollstart: null,
            onscrollstart: null,
            onbeforescrollmove: null,
            onscrollmove: null,
            onbeforescrollend: null,
            onscrollend: null,
            ontouchend: null,
            ondestroy: null,
            onzoomstart: null,
            onzoom: null,
            onzoomend: null,
            onpulldownreset: null,
            onpulldownpulled: null,
            onpulldown: null,
            onpullupreset: null,
            onpulluppulled: null,
            onpullup: null,
            onbeforerefresh: null,
            onafterrefresh: null
        },
        _widgetOnlyOptions: ["debug", "traceIscrollEvents", "tracedIscrollEvents", "traceIscrollCallbacks", "tracedIscrollCallbacks", "traceWidgetEvents", "tracedWidgetEvents", "traceWidgetCallbacks", "tracedWidgetCallbacks", "traceResizeWrapper", "traceRefresh", "traceCreateDestroy", "bottomOffset", "emulateBottomOffset", "pageClass", "wrapperClass", "scrollerClass", "pullDownClass", "pullUpClass", "scrollerContentClass", "pullLabelClass", "pullUpSpacerClass", "topSpacerClass", "bottomSpacerClass", "addSpacer", "fixedHeightSelector", "resizeWrapper", "resizeEvents", "refreshOnPageBeforeShow", "fixInput", "wrapperAdd", "refreshDelay", "scrollShortContent", "removeWrapperPadding", "addScrollerPadding", "createScroller", "deferNonActiveRefresh", "preventTouchHover", "deferNonActiveResize", "bindIscrollUsingJqueryEvents", "scrollTopOnResize", "scrollTopOnOrientationChange", "pullDownResetText", "pullDownPulledText", "pullDownLoadingText", "pullUpResetText", "pullUpPulledText", "pullUpLoadingText", "pullPulledClass", "pullLoadingClass", "onpulldownreset", "onpulldownpulled", "onpulldown", "onpullupreset", "onpulluppulled", "onpullup", "onbeforerefresh", "onafterrefresh", "fastDestroy", "preventPageScroll"],
        _event_map: {
            onrefresh: "onRefresh",
            onbeforescrollstart: "onBeforeScrollStart",
            onscrollstart: "onScrollStart",
            onbeforescrollmove: "onBeforeScrollMove",
            onscrollmove: "onScrollMove",
            onbeforescrollend: "onBeforeScrollEnd",
            onscrollend: "onScrollEnd",
            ontouchend: "onTouchEnd",
            ondestroy: "onDetroy",
            onzoomstart: "onZoomStart",
            onzoom: "onZoom",
            onzoomend: "onZoomEnd"
        },
        _proxy_event_funcs: {
            onRefresh: function (e) {
                this._doCallback("onRefresh", e, function (e) {
                    this._emulateBottomOffset(), this.iscrollview._pullOnRefresh.call(this.iscrollview, e)
                })
            }, onBeforeScrollStart: function (e) {
                this._doCallback("onBeforeScrollStart", e, function (e) {
                    this._fixInput(e)
                })
            }, onScrollStart: function (e) {
                this._doCallback("onScrollStart", e)
            }, onBeforeScrollMove: function (e) {
                this._doCallback("onBeforeScrollMove", e), e.preventDefault()
            }, onScrollMove: function (e) {
                this._doCallback("onScrollMove", e, function (e) {
                    this.iscrollview._pullOnScrollMove.call(this.iscrollview, e)
                })
            }, onBeforeScrollEnd: function (e) {
                this._doCallback("onBeforeScrollEnd", e)
            }, onScrollEnd: function (e) {
                this._doCallback("onScrollEnd", e, function (e) {
                    this.iscrollview._pullOnScrollEnd.call(this.iscrollview, e)
                })
            }, onTouchEnd: function (e) {
                this._doCallback("onTouchEnd", e)
            }, onDestroy: function (e) {
                this._doCallback("onDestroy", e)
            }, onZoomStart: function (e) {
                this._doCallback("onZoomStart", e)
            }, onZoom: function (e) {
                this._doCallback("onZoom", e)
            }, onZoomEnd: function (e) {
                this._doCallback("onZoomEnd", e)
            }
        },
        _merge_from_iscroll_options: function () {
            var t = e.extend(!0, {}, this.iscroll.options);
            e.each(this._proxy_event_funcs, function (e) {
                delete t[e]
            }), this.options.emulateBottomOffset && delete t.bottomOffset, e.extend(this.options, t)
        },
        _create_iscroll_options: function () {
            var t = e.extend(!0, {}, this.options);
            return e.each(this._widgetOnlyOptions, function (e, i) {
                delete t[i]
            }), e.each(this._event_map, function (e) {
                delete t[e]
            }), this.options.emulateBottomOffset && delete t.bottomOffset, e.extend(t, this._proxy_event_funcs)
        },
        _pad: function (e, t, i) {
            for (var n = e.toString(), o = i || "0"; n.length < t;)n = o + n;
            return n
        },
        _toTime: function (e) {
            return this._pad(e.getHours(), 2) + ":" + this._pad(e.getMinutes(), 2) + ":" + this._pad(e.getSeconds(), 2) + "." + this._pad(e.getMilliseconds(), 3)
        },
        _log: function (t, i) {
            var n, o, s;
            return this.options.debug ? (n = i || new Date, o = this.$wrapper.attr("id"), s = o ? "#" + o : "", console.log(this._toTime(n) + " " + e.mobile.path.parseUrl(this.$page.jqmData("url")).filename + s + " " + t), n) : null
        },
        _logInterval: function (e, t) {
            var i;
            return this.options.debug ? (i = new Date, this._log(e + " " + (i - t) + "mS from " + this._toTime(t), i)) : null
        },
        _logEvent: function (e, t, i) {
            var n, o, s = t && t instanceof Object, a = s ? t.type : t, r = a + " " + e;
            return this.options.debug ? (n = new Date, i ? r += " end " + +(n - i) + "mS from " + this._toTime(i) : s && (r += " begin"), s && (o = new Date(t.timeStamp), r += " (" + (n - o) + "mS from " + t.type + " @ " + this._toTime(o) + ")"), this._log(r, n)) : null
        },
        _logCallback: function (t, i, n) {
            return !this.options.debug || !this.options.traceIscrollCallbacks || 0 !== this.options.tracedIscrollCallbacks.length && -1 === e.inArray(t, this.options.tracedIscrollCallbacks) ? null : i ? this._logEvent(t, i, n) : n ? this._logInterval(t + " end", n) : this._log(t + " begin")
        },
        _logIscrollEvent: function (t, i, n) {
            var o = i instanceof Event, s = o ? i.type : i;
            return !this.options.debug || !this.options.traceIscrollEvents || 0 !== this.options.tracedIscrollEvents.length && -1 === e.inArray(s, this.options.tracedIscrollEvents) ? null : this._logEvent(t, i, n)
        },
        _logWidgetEvent: function (t, i, n) {
            var o = i instanceof Object, s = o ? i.type : i;
            return !this.options.debug || !this.options.traceWidgetEvents || 0 !== this.options.tracedWidgetEvents.length && -1 === e.inArray(s, this.options.tracedWidgetEvents) ? null : this._logEvent(t, i, n)
        },
        _logWidgetCallback: function (t, i, n) {
            return !this.options.debug || !this.options.traceWidgetCallbacks || 0 !== this.options.tracedWidgetCallbacks.length && -1 === e.inArray(t, this.options.tracedWidgetCallbacks) ? null : i ? this._logEvent(t, i, n) : n ? this._logInterval(t + " end", n) : this._log(t + " begin")
        },
        _logInterval2: function (e, t, i) {
            var n;
            this.options.debug && (n = new Date, this._log(e + " " + (n - i) + "mS from " + this._toTime(i) + " (" + (n - t) + "mS from " + this._toTime(t) + ")"))
        },
        _startTiming: function () {
            return this.options.debug ? new Date : null
        },
        _pageEventNamespace: function () {
            return ".iscroll_" + this.pageID
        },
        _instanceEventNamespace: function () {
            return this._pageEventNamespace() + "_" + this.instanceID
        },
        _addEventsNamespace: function (t, i) {
            var n = t.split(" ");
            return e.each(n, function (e) {
                n[e] += i
            }), n.join(" ")
        },
        _isvBind: function (t, i, n, o) {
            var s = this._addEventsNamespace(i, this._instanceEventNamespace());
            this._logWidgetEvent("bind " + o, s), t.bind(s, e.proxy(n, this))
        },
        _bindPage: function (t, i) {
            var n = this._addEventsNamespace(t, this._pageEventNamespace());
            this._logWidgetEvent("bind $page", n), this.$page.bind(n, e.proxy(i, this))
        },
        _isvUnbind: function (e, t, i) {
            var n = this._addEventsNamespace(t, this._instanceEventNamespace());
            this._logWidgetEvent("unbind " + i, n), e.unbind(n)
        },
        _unbindPage: function (e) {
            var t = this._addEventsNamespace(e, this._pageEventNamespace());
            this._logWidgetEvent("unbind  $page", t), this.$page.unbind(t)
        },
        _delegate: function (t, i, n, o, s) {
            this._logWidgetEvent("delegate " + s + " " + i, n), t.delegate(i, n, e.proxy(o, this))
        },
        _triggerWidget: function (e, t) {
            var i = this._logWidgetCallback(e);
            this._trigger(e, t, {iscrollview: this}), this._logWidgetCallback(e, t, i)
        },
        isDirty: function () {
            return this._dirty
        },
        _restoreStyle: function (e, t) {
            t !== n && (null === t ? e.removeAttr("style") : e.attr("style", t))
        },
        _pageBeforeShowFunc: function (t) {
            var i = this._logWidgetEvent("_pageBeforeShowFunc", t);
            this._dirty ? (this.resizeWrapper(!0), this.refresh(null, this._dirtyCallbackBefore, this._dirtyCallbackAfter, !0), this._dirty = !1, this._dirtyCallbackBefore = null, this._dirtyCallbackAfter = null) : (this.options.refreshOnPageBeforeShow || this._sizeDirty) && this.refresh(null, e.proxy(this._resizeWrapper, this), null, !0), this._sizeDirty = !1, this._logWidgetEvent("_pageBeforeShowFunc", t, i)
        },
        _windowResizeFunc: function (t) {
            var i = this._logWidgetEvent("_windowResizeFunc", t);
            this.options.deferNonActiveResize && !this.$page.is(e.mobile.activePage) ? (this._sizeDirty = !0, this.options.traceResizeWrapper && this._log("resizeWrapper() (deferred)")) : (this.resizeWrapper(!0), this.refresh(null, null, null, !0)), this._logWidgetEvent("_windowResizeFunc", t, i)
        },
        _orientationChangeFunc: function (t) {
            var i = this._logWidgetEvent("_orientationChangeFunc", t);
            this.options.scrollTopOnOrientationChange && e.mobile.silentScroll(0), this._logWidgetEvent("_orientationChangeFunc", t, i)
        },
        _updateLayoutFunc: function () {
            this.refresh()
        },
        _instanceCount: function (e) {
            var t = "iscroll-private", i = 0, o = this.$page.jqmData(t) || {};
            return e !== n ? (i = e, o.instanceCount = i, this.$page.jqmData(t, o)) : o.instanceCount !== n && (i = o.instanceCount), i
        },
        _nextInstanceID: function (e) {
            var t = "iscroll-private", i = 1, o = this.$page.jqmData(t) || {};
            return e !== n ? (i = e, o.nextInstanceID = i, this.$page.jqmData(t, o)) : o.nextInstanceID !== n && (i = o.nextInstanceID), i
        },
        _pageID: function (e) {
            var t = "iscroll-private", i = 1, o = this.$page.jqmData(t) || {};
            return e !== n ? (i = e, o.pageID = i, this.$page.jqmData(t, o)) : o.pageID !== n && (i = o.pageID), i
        },
        _adaptPage: function () {
            var t = this;
            1 === this._instanceCount() && (this.$page.addClass(this.options.pageClass), this.$page.find(this.options.fixedHeightSelector).each(function () {
                var i = e(this), n = 0 !== i.closest(".ui-popup").length, o = 0 !== i.closest(".ui-panel").length;
                n || o || i.addClass(t.options.fixedHeightClass)
            }), r && this.options.preventPageScroll && this._bindPage("touchmove", o))
        },
        _undoAdaptPage: function () {
            var t = this;
            1 === this._instanceCount() && (this.$page.find(this.options.fixedHeightSelector).each(function () {
                e(this).removeClass(t.options.fixedHeightClass)
            }), this.$page.removeClass(this.options.pageClass))
        },
        _calculateBarsHeight: function () {
            var t = 0, i = "." + this.options.fixedHeightClass, n = this.$page.find(i), o = e(".ui-mobile-viewport").children(i);
            return n.each(function () {
                t += e(this).outerHeight(!0)
            }), o.each(function () {
                var i = e(this).jqmData("id");
                "" !== i && n.is(":jqmData(id='" + i + "')") || (t += e(this).outerHeight(!0))
            }), t
        },
        _getBoxSizing: function (t) {
            var i, n = "";
            return h ? n = "-moz-" : l && (n = "-webkit-"), i = t.css(n + "box-sizing"), !i && n && (i = t.css("box-sizing")), i || (i = e.boxModel ? "content-box" : "border-box"), i
        },
        _getHeightAdjustForBoxModel: function (e) {
            var t;
            switch (this._getBoxSizing(e)) {
                case"border-box":
                    t = e.outerHeight(!0) - e.outerHeight();
                    break;
                case"padding-box":
                    t = e.outerHeight() - e.height();
                    break;
                case"content-box":
                default:
                    t = e.outerHeight(e !== this.$wrapper) - e.height()
            }
            return t
        },
        _setTopOffsetForPullDown: function () {
            this.$pullDown.length && !this.options.topOffset && (this.options.topOffset = this.$pullDown.outerHeight(!0))
        },
        _setBottomOffsetForPullUp: function () {
            this.$pullUp.length && !this.options.bottomOffset && (this.options.bottomOffset = this.$pullUp.outerHeight(!0))
        },
        _removeWrapperPadding: function () {
            var e = this.$wrapper;
            this.options.removeWrapperPadding && (this._origWrapperPaddingLeft = e.css("padding-left"), this._origWrapperPaddingRight = e.css("padding-right"), this._origWrapperPaddingTop = e.css("padding-top"), this._origWrapperPaddingBottom = e.css("padding-bottom"), this.$wrapper.css("padding", 0))
        },
        _modifyWrapperCSS: function () {
            this._origWrapperStyle = this.$wrapper.attr("style") || null, this._removeWrapperPadding()
        },
        _undoModifyWrapperCSS: function () {
            this._restoreStyle(this.$wrapper, this._origWrapperStyle)
        },
        _addScrollerPadding: function () {
            if (this.options.removeWrapperPadding && this.options.addScrollerPadding) {
                var e, t = this.$scroller.children(), i = t.not(this.$pullDown).not(this.$pullUp).not(this.$pullUpSpacer);
                i.wrapAll("<div/>"), e = i.parent().addClass(this.options.scrollerContentClass), e.css({
                    "padding-left": this._origWrapperPaddingLeft,
                    "padding-right": this._origWrapperPaddingRight,
                    "padding-top": this._origWrapperPaddingTop,
                    "padding-bottom": this._origWrapperPaddingBottom
                })
            }
        },
        _undoAddScrollerPadding: function () {
            this.options.removeWrapperPadding && this.options.addScrollerPadding && e("." + this.options.scrollerContentClass, this.$scroller).children().unwrap()
        },
        _addWrapperClasses: function () {
            this.$wrapper.addClass(this.options.wrapperClass), this.$scroller.addClass(this.options.scrollerClass)
        },
        _undoAddWrapperClasses: function () {
            this.$scroller.removeClass(this.options.scrollerClass), this.$wrapper.removeClass(this.options.wrapperClass)
        },
        _expandScrollerToFillWrapper: function () {
            (this.options.scrollShortContent || this.$pullDown.length || this.$pullUp.length) && (this._firstScrollerExpand && (this._origScrollerStyle = this.$scroller.attr("style") || null, this._firstScrollerExpand = !1), this.$scroller.css("min-height", this.$wrapper.height() + (this.$pullDown.length ? this.$pullDown.outerHeight(!0) : 0) + (this.$pullUp.length ? this.$pullUp.outerHeight(!0) : 0)))
        },
        _undoExpandScrollerToFillWrapper: function () {
            this._restoreStyle(this.$scroller, this._origScrollerStyle)
        },
        _resizeWrapper: function (e) {
            var t, n, o, s = null;
            (e || this.options.resizeWrapper) && (this.options.traceResizeWrapper && (s = this._log("resizeWrapper() start")), this.$wrapper.trigger("updatelayout"), t = i.documentElement.clientHeight, n = this._calculateBarsHeight(), o = t - n - this._wrapperHeightAdjustForBoxModel + (p && !d ? 60 : 0) + this.options.wrapperAdd, this.$wrapper.css("height", o), this._expandScrollerToFillWrapper(), this.options.traceResizeWrapper && this._logInterval("resizeWrapper() end" + (this._sizeDirty ? " (dirty)" : ""), s))
        },
        resizeWrapper: function (e) {
            var t = this._setPageVisible();
            this._resizeWrapper(e !== n), this._restorePageVisibility(t)
        },
        _undoResizeWrapper: function () {
        },
        _modifyWrapper: function () {
            this._addWrapperClasses(), this._modifyWrapperCSS(), this._wrapperHeightAdjustForBoxModel = this._getHeightAdjustForBoxModel(this.$wrapper)
        },
        _undoModifyWrapper: function () {
            this._undoResizeWrapper(), this._undoModifyWrapperCSS(), this._undoAddWrapperClasses()
        },
        _modifyPullDown: function () {
            var t, i, n;
            0 !== this.$pullDown.length && (t = e("." + this.options.pullLabelClass, this.$pullDown), t.length && (this._origPullDownLabelText = t.text(), this._origPullDownLabelText ? this.options.pullDownResetText = this._origPullDownLabelText : t.text(this.options.pullDownResetText), i = t.jqmData("iscroll-pulled-text"), i && (this.options.pullDownPulledText = i), n = t.jqmData("iscroll-loading-text"), n && (this.options.pullDownLoadingText = n)))
        },
        _undoModifyPullDown: function () {
            if (0 !== this.$pullDown.length) {
                var t = e("." + this.options.pullLabelClass, this.$pullDown);
                0 !== t.length && t.text(this._origPullDownLabelText)
            }
        },
        _modifyPullUp: function () {
            var t, i, n;
            0 !== this.$pullUp.length && (e("<div></div>").insertBefore(this.$pullUp).css("height", this.$pullUp.outerHeight(!0)), this.$pullUpSpacer = this.$pullUp.prev(), this.$pullUpSpacer.addClass(this.options.pullUpSpacerClass), t = e("." + this.options.pullLabelClass, this.$pullUp), t.length && (this._origPullUpLabelText = t.text(), this._origPullUpLabelText ? this.options.pullUpResetText = this._origPullUpLabelText : t.text(this.options.pullUpResetText), i = t.jqmData("iscroll-pulled-text"), i && (this.options.pullUpPulledText = i), n = t.jqmData("iscroll-loading-text"), n && (this.options.pullUpLoadingText = n)))
        },
        _undoModifyPullUp: function () {
            0 !== this.$pullUp.length && (this.$pullUp.prev().remove(), this._origPullUpLabelText && e("." + this.options.pullLabelClass, this.$pullUp).text(this._origPullUpLabelText))
        },
        _correctPushedDownPage: function () {
            this.options.resizeWrapper && this.options.scrollTopOnResize && e.mobile.silentScroll(0)
        },
        refresh: function (t, i, o, s) {
            var a, r, l, c, h, u;
            return s || !this.options.deferNonActiveRefresh || this.$page.is(e.mobile.activePage) ? (a = this, r = t, l = i, c = o, h = s, u = this._startTiming(), (r === n || null === r) && (r = this.options.refreshDelay), setTimeout(function () {
                var e, t = null;
                a.options.traceRefresh && (t = a._logInterval("refresh() start", u)), e = a._setPageVisible(), l && l(), a._triggerWidget("onbeforerefresh"), a.iscroll && a.iscroll.refresh(), a._triggerWidget("onafterrefresh"), c && c(), a._restorePageVisibility(e), e || a._correctPushedDownPage(), a.options.traceRefresh && a._logInterval2("refresh() end" + (h ? " (dirty)" : ""), u, t)
            }, r), void(this.options.traceRefresh && this._log("refresh() will occur after >= " + r + "mS"))) : (this._dirty = !0, this._dirtyCallbackBefore = i, this._dirtyCallbackAfter = o, void(this.options.traceRefresh && this._log("refresh() (deferred)")))
        },
        _create_iscroll_object: function () {
            this.iscroll = new a(this, this.$wrapper.get(0), this._create_iscroll_options())
        },
        _createScroller: function () {
            this.options.createScroller && (this.$wrapper.children().length ? this.$wrapper.children().wrapAll("<div/>") : this.$wrapper.append("<div><div></div></div>"))
        },
        _undoCreateScroller: function () {
            this.options.createScroller && this.$scroller.children().unwrap()
        },
        _addSpacers: function () {
            this.options.addSpacers && (this.$scrollerContent.before(e('<div class="' + this.options.topSpacerClass + '"></div>')), this.$scrollerContent.after(e('<div class="' + this.options.bottomSpacerClass + '"></div>')))
        },
        _undoAddSpacers: function () {
            this.$wrapper.find(this.options.topSpacerClass).remove(), this.$wrapper.find(this.options.bottomSpacerClass).remove()
        },
        _setPageVisible: function () {
            var e = this.$page.is(":hidden");
            return e && this.$page.css("display", "block"), e
        },
        _restorePageVisibility: function (e) {
            e && this.$page.css("display", "")
        },
        _create: function () {
            var t, i = new Date;
            this.$wrapper = this.element, this.$page = this.$wrapper.parents(":jqmData(role='page')"), e.extend(!0, this.options, this.$wrapper.jqmData("iscroll")), this.options.debug && this.options.traceCreateDestroy && this._log("_create() start", i), this.createdAt = i, this._instanceCount(this._instanceCount() + 1), this.instanceID = this._nextInstanceID(), this._nextInstanceID(this.instanceID + 1), 1 === this.instanceID && (this._pageID(m), m += 1), this.pageID = this._pageID(), t = this._setPageVisible(), this._adaptPage(), this._createScroller(), this.$scroller = this.$wrapper.children(":first"), 0 !== this.$scroller.length && (this.$pullDown = e("." + this.options.pullDownClass, this.$scroller), this._modifyPullDown(), this.$pullUp = e("." + this.options.pullUpClass, this.$scroller), this._modifyPullUp(), this._modifyWrapper(), this._bindPage("pagebeforeshow", this._pageBeforeShowFunc), this._setTopOffsetForPullDown(), this._setBottomOffsetForPullUp(), this._resizeWrapper(), this._addScrollerPadding(), this.$scrollerContent = this.$scroller.find("." + this.options.scrollerContentClass), this._addSpacers(), this._create_iscroll_object(), this._merge_from_iscroll_options(), this._restorePageVisibility(t), this.options.resizeWrapper && (this._isvBind(this.$window, this.options.resizeEvents, this._windowResizeFunc, "$window"), this.options.scrollTopOnOrientationChange && this._isvBind(this.$window, "orientationchange", this._orientationChangeFunc, "$window")), this._isvBind(this.$scrollerContent, "updatelayout", this._updateLayoutFunc, "$scrollerContent"), this.options.debug && this.options.traceCreateDestroy && this._logInterval("_create() end", i))
        },
        destroy: function () {
            var t = null;
            this.options.debug && this.options.traceCreateDestroy && (t = this._log("destroy() start")), this._isvUnbind(this.$scrollerContent, "updatelayout", "$scrollerContent"), this._isvUnbind(this.$window, this.options.resizeEvents, "$window"), this._isvUnbind(this.$window, "orientationchange", "$window"), 1 === this._instanceCount() && (this._unbindPage("pagebeforeshow"), r && this._unbindPage("touchmove")), this.options.fastDestroy || (this.iscroll.destroy(), this.iscroll = null, this._undoExpandScrollerToFillWrapper(), this._undoModifyPullDown(), this._undoModifyPullUp(), this._undoAddSpacers(), this._undoAddScrollerPadding(), this._undoModifyWrapper(), this.$wrapper.removeClass(this.options.wrapperClass), this.$scroller.removeClass(this.options.scrollerClass), this._undoCreateScroller()), this._instanceCount(this._instanceCount() - 1), 0 === this._instanceCount() && this._undoAdaptPage(), e.Widget.prototype.destroy.call(this), this.options.debug && this.options.traceCreateDestroy && this._logInterval("destroy() end", t)
        },
        enable: function () {
            this.iscroll.enable(), e.Widget.prototype.enable.call(this)
        },
        disable: function () {
            this.iscroll.disable(), e.Widget.prototype.disable.call(this)
        },
        _setOption: function (t, i) {
            var n;
            this.options[t] = i, this.iscroll.destroy(), n = this._setPageVisible(), this._create_iscroll_object(), this._restorePageVisibility(n), e.Widget.prototype._setOption.apply(this, arguments)
        },
        scrollTo: function (e, t, i, n) {
            this.iscroll.scrollTo(e, t, i, n)
        },
        scrollToElement: function (e, t) {
            this.iscroll.scrollToElement(e, t)
        },
        scrollToPage: function (e, t, i) {
            this.iscroll.scrollToPage(e, t, i)
        },
        stop: function () {
            this.iscroll.stop()
        },
        zoom: function (e, t, i, n) {
            this.iscroll.zoom(e, t, i, n)
        },
        isReady: function () {
            return this.iscroll.isReady()
        },
        x: function () {
            return this.iscroll.x
        },
        y: function () {
            return this.iscroll.y
        },
        wrapperW: function () {
            return this.iscroll.wrapperW
        },
        wrapperH: function () {
            return this.iscroll.wrapperH
        },
        scrollerW: function () {
            return this.iscroll.scrollerW
        },
        scrollerH: function () {
            return this.iscroll.scrollerH
        },
        minScrollX: function (e) {
            return e !== n && (this.iscroll.minScrollX = e), this.iscroll.minScrollX
        },
        minScrollY: function (e) {
            return e !== n && (this.iscroll.minScrollY = e), this.iscroll.minScrollY
        },
        maxScrollX: function (e) {
            return e !== n && (this.iscroll.maxScrollX = e), this.iscroll.maxScrollX
        },
        maxScrollY: function (e) {
            return e !== n && (this.iscroll.maxScrollY = e), this.iscroll.maxScrollY
        },
        _pullDownIsPulled: function () {
            return this.$pullDown.length && this.$pullDown.hasClass(this.options.pullPulledClass)
        },
        _pullUpIsPulled: function () {
            return this.$pullUp.length && this.$pullUp.hasClass(this.options.pullPulledClass)
        },
        _replacePullText: function (t, i) {
            var n;
            i && (n = e("." + this.options.pullLabelClass, t), n && n.text(i))
        },
        _pullSetStateReset: function (e, t) {
            if (e.is("." + this.options.pullLoadingClass + ", ." + this.options.pullPulledClass)) {
                var i = e.find(".iscroll-pull-icon"), n = i.clone();
                e.removeClass(this.options.pullPulledClass + " " + this.options.pullLoadingClass), this._replacePullText(e, t), i.replaceWith(n)
            }
        },
        _pullDownSetStateReset: function (e) {
            this._pullSetStateReset(this.$pullDown, this.options.pullDownResetText), this._triggerWidget("onpulldownreset", e)
        },
        _pullUpSetStateReset: function (e) {
            this._pullSetStateReset(this.$pullUp, this.options.pullUpResetText), this._triggerWidget("onpullupreset", e)
        },
        _pullSetStatePulled: function (e, t) {
            e.removeClass(this.options.pullLoadingClass).addClass(this.options.pullPulledClass), this._replacePullText(e, t)
        },
        _pullDownSetStatePulled: function (e) {
            this._pullSetStatePulled(this.$pullDown, this.options.pullDownPulledText), this._triggerWidget("onpulldownpulled", e)
        },
        _pullUpSetStatePulled: function (e) {
            this._pullSetStatePulled(this.$pullUp, this.options.pullUpPulledText), this._triggerWidget("onpulluppulled", e)
        },
        _pullSetStateLoading: function (e, t) {
            e.removeClass(this.options.pullPulledClass).addClass(this.options.pullLoadingClass), this._replacePullText(e, t)
        },
        _pullDownSetStateLoading: function (e) {
            this._pullSetStateLoading(this.$pullDown, this.options.pullDownLoadingText), this._triggerWidget("onpulldownloading", e)
        },
        _pullUpSetStateLoading: function (e) {
            this._pullSetStateLoading(this.$pullUp, this.options.pullUpLoadingText), this._triggerWidget("onpulluploading", e)
        },
        _pullOnRefresh: function (e) {
            this.$pullDown.length && this._pullDownSetStateReset(e), this.$pullUp.length && this._pullUpSetStateReset(e)
        },
        _pullOnScrollMove: function (e) {
            var t, i, n, o, s, a, r = this.y();
            this.$pullDown.length && (t = this._pullDownIsPulled(), n = this.options.topOffset, o = n / 2, !t && r > o ? (this._pullDownSetStatePulled(e), this.minScrollY(0)) : t && 0 >= r && (this._pullDownSetStateReset(e), this.minScrollY(-n))), this.$pullUp.length && (i = this._pullUpIsPulled(), s = this.options.bottomOffset, a = s / 2, !i && r < this.maxScrollY() - s - a ? (this._pullUpSetStatePulled(e), this.maxScrollY(this.wrapperH() - this.scrollerH() + this.minScrollY())) : i && r >= this.maxScrollY() && (this._pullUpSetStateReset(e), this.maxScrollY(this.wrapperH() - this.scrollerH() + this.minScrollY() + s)))
        },
        _pullOnScrollEnd: function (e) {
            this._pullDownIsPulled(e) ? (this._pullDownSetStateLoading(e), this._triggerWidget("onpulldown", e)) : this._pullUpIsPulled(e) && (this._pullUpSetStateLoading(e), this._triggerWidget("onpullup", e))
        }
    })
}(jQuery, window, document), jQuery(document).trigger("iscroll_init"), jQuery(document).bind("pagecreate", function (e) {
    "use strict";
    var t = jQuery(e.target).find(":jqmData(iscroll)");
    t.iscrollview()
}), function (e) {
    function t(t, i, n, o) {
        var s = {
            data: o || 0 === o || o === !1 ? o : i ? i.data : {},
            _wrap: i ? i._wrap : null,
            tmpl: null,
            parent: i || null,
            nodes: [],
            calls: c,
            nest: h,
            wrap: u,
            html: d,
            update: p
        };
        return t && e.extend(s, t, {
            nodes: [],
            parent: i
        }), n && (s.tmpl = n, s._ctnt = s._ctnt || s.tmpl(e, s), s.key = ++x, (C.length ? _ : v)[x] = s), s
    }

    function i(t, o, s) {
        var a, r = s ? e.map(s, function (e) {
            return "string" == typeof e ? t.key ? e.replace(/(<\w+)(?=[\s>])(?![^>]*_tmplitem)([^>]*)/g, "$1 " + g + '="' + t.key + '" $2') : e : i(e, t, e._ctnt)
        }) : t;
        return o ? r : (r = r.join(""), r.replace(/^\s*([^<\s][^<]*)?(<[\w\W]+>)([^>]*[^>\s])?\s*$/, function (t, i, o, s) {
            a = e(o).get(), l(a), i && (a = n(i).concat(a)), s && (a = a.concat(n(s)))
        }), a ? a : n(r))
    }

    function n(t) {
        var i = document.createElement("div");
        return i.innerHTML = t, e.makeArray(i.childNodes)
    }

    function o(t) {
        return new Function("jQuery", "$item", "var $=jQuery,call,__=[],$data=$item.data;with($data){__.push('" + e.trim(t).replace(/([\\'])/g, "\\$1").replace(/[\r\t\n]/g, " ").replace(/\$\{([^\}]*)\}/g, "{{= $1}}").replace(/\{\{(\/?)(\w+|.)(?:\(((?:[^\}]|\}(?!\}))*?)?\))?(?:\s+(.*?)?)?(\(((?:[^\}]|\}(?!\}))*?)\))?\s*\}\}/g, function (t, i, n, o, s, r, l) {
                var c, h, u, d = e.tmpl.tag[n];
                if (!d)throw"Unknown template tag: " + n;
                return c = d._default || [], r && !/\w$/.test(s) && (s += r, r = ""), s ? (s = a(s), l = l ? "," + a(l) + ")" : r ? ")" : "", h = r ? s.indexOf(".") > -1 ? s + a(r) : "(" + s + ").call($item" + l : s, u = r ? h : "(typeof(" + s + ")==='function'?(" + s + ").call($item):(" + s + "))") : u = h = c.$1 || "null", o = a(o), "');" + d[i ? "close" : "open"].split("$notnull_1").join(s ? "typeof(" + s + ")!=='undefined' && (" + s + ")!=null" : "true").split("$1a").join(u).split("$1").join(h).split("$2").join(o || c.$2 || "") + "__.push('"
            }) + "');}return __;")
    }

    function s(t, n) {
        t._wrap = i(t, !0, e.isArray(n) ? n : [b.test(n) ? n : e(n).html()]).join("")
    }

    function a(e) {
        return e ? e.replace(/\\'/g, "'").replace(/\\\\/g, "\\") : null
    }

    function r(e) {
        var t = document.createElement("div");
        return t.appendChild(e.cloneNode(!0)), t.innerHTML
    }

    function l(i) {
        function n(i) {
            function n(e) {
                e += c, a = h[e] = h[e] || t(a, v[a.parent.key + c] || a.parent)
            }

            var o, s, a, r, l = i;
            if (r = i.getAttribute(g)) {
                for (; l.parentNode && 1 === (l = l.parentNode).nodeType && !(o = l.getAttribute(g)););
                o !== r && (l = l.parentNode ? 11 === l.nodeType ? 0 : l.getAttribute(g) || 0 : 0, (a = v[r]) || (a = _[r], a = t(a, v[l] || _[l]), a.key = ++x, v[x] = a), w && n(r)), i.removeAttribute(g)
            } else w && (a = e.data(i, "tmplItem")) && (n(a.key), v[a.key] = a, l = e.data(i.parentNode, "tmplItem"), l = l ? l.key : 0);
            if (a) {
                for (s = a; s && s.key != l;)s.nodes.push(i), s = s.parent;
                delete a._ctnt, delete a._wrap, e.data(i, "tmplItem", a)
            }
        }

        var o, s, a, r, l, c = "_" + w, h = {};
        for (a = 0, r = i.length; r > a; a++)if (1 === (o = i[a]).nodeType) {
            for (s = o.getElementsByTagName("*"), l = s.length - 1; l >= 0; l--)n(s[l]);
            n(o)
        }
    }

    function c(e, t, i, n) {
        return e ? void C.push({_: e, tmpl: t, item: this, data: i, options: n}) : C.pop()
    }

    function h(t, i, n) {
        return e.tmpl(e.template(t), i, n, this)
    }

    function u(t, i) {
        var n = t.options || {};
        return n.wrapped = i, e.tmpl(e.template(t.tmpl), t.data, n, t.item)
    }

    function d(t, i) {
        var n = this._wrap;
        return e.map(e(e.isArray(n) ? n.join("") : n).filter(t || "*"), function (e) {
            return i ? e.innerText || e.textContent : e.outerHTML || r(e)
        })
    }

    function p() {
        var t = this.nodes;
        e.tmpl(null, null, null, this).insertBefore(t[0]), e(t).remove()
    }

    var f, m = e.fn.domManip, g = "_tmplitem", b = /^[^<]*(<[\w\W]+>)[^>]*$|\{\{\! /, v = {}, _ = {}, y = {
        key: 0,
        data: {}
    }, x = 0, w = 0, C = [];
    e.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function (t, i) {
        e.fn[t] = function (n) {
            var o, s, a, r, l = [], c = e(n), h = 1 === this.length && this[0].parentNode;
            if (f = v || {}, h && 11 === h.nodeType && 1 === h.childNodes.length && 1 === c.length)c[i](this[0]), l = this; else {
                for (s = 0, a = c.length; a > s; s++)w = s, o = (s > 0 ? this.clone(!0) : this).get(), e(c[s])[i](o), l = l.concat(o);
                w = 0, l = this.pushStack(l, t, c.selector)
            }
            return r = f, f = null, e.tmpl.complete(r), l
        }
    }), e.fn.extend({
        tmpl: function (t, i, n) {
            return e.tmpl(this[0], t, i, n)
        }, tmplItem: function () {
            return e.tmplItem(this[0])
        }, template: function (t) {
            return e.template(t, this[0])
        }, domManip: function (t, i, n) {
            if (t[0] && e.isArray(t[0])) {
                for (var o, s = e.makeArray(arguments), a = t[0], r = a.length, l = 0; r > l && !(o = e.data(a[l++], "tmplItem")););
                o && w && (s[2] = function (t) {
                    e.tmpl.afterManip(this, t, n)
                }), m.apply(this, s)
            } else m.apply(this, arguments);
            return w = 0, !f && e.tmpl.complete(v), this
        }
    }), e.extend({
        tmpl: function (n, o, a, r) {
            var l, c = !r;
            if (c)r = y, n = e.template[n] || e.template(null, n), _ = {}; else if (!n)return n = r.tmpl, v[r.key] = r, r.nodes = [], r.wrapped && s(r, r.wrapped), e(i(r, null, r.tmpl(e, r)));
            return n ? ("function" == typeof o && (o = o.call(r || {})), a && a.wrapped && s(a, a.wrapped), l = e.isArray(o) ? e.map(o, function (e) {
                return e ? t(a, r, n, e) : null
            }) : [t(a, r, n, o)], c ? e(i(r, null, l)) : l) : []
        }, tmplItem: function (t) {
            var i;
            for (t instanceof e && (t = t[0]); t && 1 === t.nodeType && !(i = e.data(t, "tmplItem")) && (t = t.parentNode););
            return i || y
        }, template: function (t, i) {
            return i ? ("string" == typeof i ? i = o(i) : i instanceof e && (i = i[0] || {}), i.nodeType && (i = e.data(i, "tmpl") || e.data(i, "tmpl", o(i.innerHTML))), "string" == typeof t ? e.template[t] = i : i) : t ? "string" != typeof t ? e.template(null, t) : e.template[t] || e.template(null, b.test(t) ? t : e(t)) : null
        }, encode: function (e) {
            return ("" + e).split("<").join("&lt;").split(">").join("&gt;").split('"').join("&#34;").split("'").join("&#39;")
        }
    }), e.extend(e.tmpl, {
        tag: {
            tmpl: {
                _default: {$2: "null"},
                open: "if($notnull_1){__=__.concat($item.nest($1,$2));}"
            },
            wrap: {
                _default: {$2: "null"},
                open: "$item.calls(__,$1,$2);__=[];",
                close: "call=$item.calls();__=call._.concat($item.wrap(call,__));"
            },
            each: {
                _default: {$2: "$index, $value"},
                open: "if($notnull_1){$.each($1a,function($2){with(this){",
                close: "}});}"
            },
            "if": {open: "if(($notnull_1) && $1a){", close: "}"},
            "else": {_default: {$1: "true"}, open: "}else if(($notnull_1) && $1a){"},
            html: {open: "if($notnull_1){__.push($1a);}"},
            "=": {_default: {$1: "$data"}, open: "if($notnull_1){__.push($.encode($1a));}"},
            "!": {open: ""}
        }, complete: function () {
            v = {}
        }, afterManip: function (t, i, n) {
            var o = 11 === i.nodeType ? e.makeArray(i.childNodes) : 1 === i.nodeType ? [i] : [];
            n.call(t, i), l(o), w++
        }
    })
}(jQuery), jQuery.cookie = function (e, t, i) {
    if ("undefined" == typeof t) {
        var n = null;
        if (document.cookie && "" != document.cookie)for (var o = document.cookie.split(";"), s = 0; s < o.length; s++) {
            var a = jQuery.trim(o[s]);
            if (a.substring(0, e.length + 1) == e + "=") {
                n = decodeURIComponent(a.substring(e.length + 1));
                break
            }
        }
        return n
    }
    i = i || {}, null === t && (t = "", i = $.extend({}, i), i.expires = -1);
    var r = "";
    if (i.expires && ("number" == typeof i.expires || i.expires.toUTCString)) {
        var l;
        "number" == typeof i.expires ? (l = new Date, l.setTime(l.getTime() + 24 * i.expires * 60 * 60 * 1e3)) : l = i.expires, r = "; expires=" + l.toUTCString()
    }
    var c = i.path ? "; path=" + i.path : "", h = i.domain ? "; domain=" + i.domain : "", u = i.secure ? "; secure" : "";
    document.cookie = [e, "=", encodeURIComponent(t), r, c, h, u].join("")
}, function () {
    "use strict";
    function e(t, n) {
        function o(e, t) {
            return function () {
                return e.apply(t, arguments)
            }
        }

        var s;
        if (n = n || {}, this.trackingClick = !1, this.trackingClickStart = 0, this.targetElement = null, this.touchStartX = 0, this.touchStartY = 0, this.lastTouchIdentifier = 0, this.touchBoundary = n.touchBoundary || 10, this.layer = t, this.tapDelay = n.tapDelay || 200, this.tapTimeout = n.tapTimeout || 700, !e.notNeeded(t)) {
            for (var a = ["onMouse", "onClick", "onTouchStart", "onTouchMove", "onTouchEnd", "onTouchCancel"], r = this, l = 0, c = a.length; c > l; l++)r[a[l]] = o(r[a[l]], r);
            i && (t.addEventListener("mouseover", this.onMouse, !0), t.addEventListener("mousedown", this.onMouse, !0), t.addEventListener("mouseup", this.onMouse, !0)), t.addEventListener("click", this.onClick, !0), t.addEventListener("touchstart", this.onTouchStart, !1), t.addEventListener("touchmove", this.onTouchMove, !1), t.addEventListener("touchend", this.onTouchEnd, !1), t.addEventListener("touchcancel", this.onTouchCancel, !1), Event.prototype.stopImmediatePropagation || (t.removeEventListener = function (e, i, n) {
                var o = Node.prototype.removeEventListener;
                "click" === e ? o.call(t, e, i.hijacked || i, n) : o.call(t, e, i, n)
            }, t.addEventListener = function (e, i, n) {
                var o = Node.prototype.addEventListener;
                "click" === e ? o.call(t, e, i.hijacked || (i.hijacked = function (e) {
                        e.propagationStopped || i(e)
                    }), n) : o.call(t, e, i, n)
            }), "function" == typeof t.onclick && (s = t.onclick, t.addEventListener("click", function (e) {
                s(e)
            }, !1), t.onclick = null)
        }
    }

    var t = navigator.userAgent.indexOf("Windows Phone") >= 0, i = navigator.userAgent.indexOf("Android") > 0 && !t, n = /iP(ad|hone|od)/.test(navigator.userAgent) && !t, o = n && /OS 4_\d(_\d)?/.test(navigator.userAgent), s = n && /OS ([6-9]|\d{2})_\d/.test(navigator.userAgent), a = navigator.userAgent.indexOf("BB10") > 0;
    e.prototype.needsClick = function (e) {
        switch (e.nodeName.toLowerCase()) {
            case"button":
            case"select":
            case"textarea":
                if (e.disabled)return !0;
                break;
            case"input":
                if (n && "file" === e.type || e.disabled)return !0;
                break;
            case"label":
            case"iframe":
            case"video":
                return !0
        }
        return /\bneedsclick\b/.test(e.className)
    }, e.prototype.needsFocus = function (e) {
        switch (e.nodeName.toLowerCase()) {
            case"textarea":
                return !0;
            case"select":
                return !i;
            case"input":
                switch (e.type) {
                    case"button":
                    case"checkbox":
                    case"file":
                    case"image":
                    case"radio":
                    case"submit":
                        return !1
                }
                return !e.disabled && !e.readOnly;
            default:
                return /\bneedsfocus\b/.test(e.className)
        }
    }, e.prototype.sendClick = function (e, t) {
        var i, n;
        document.activeElement && document.activeElement !== e && document.activeElement.blur(), n = t.changedTouches[0], i = document.createEvent("MouseEvents"), i.initMouseEvent(this.determineEventType(e), !0, !0, window, 1, n.screenX, n.screenY, n.clientX, n.clientY, !1, !1, !1, !1, 0, null), i.forwardedTouchEvent = !0, e.dispatchEvent(i)
    }, e.prototype.determineEventType = function (e) {
        return i && "select" === e.tagName.toLowerCase() ? "mousedown" : "click"
    }, e.prototype.focus = function (e) {
        var t;
        n && e.setSelectionRange && 0 !== e.type.indexOf("date") && "time" !== e.type && "month" !== e.type ? (t = e.value.length, e.setSelectionRange(t, t)) : e.focus()
    }, e.prototype.updateScrollParent = function (e) {
        var t, i;
        if (t = e.fastClickScrollParent, !t || !t.contains(e)) {
            i = e;
            do {
                if (i.scrollHeight > i.offsetHeight) {
                    t = i, e.fastClickScrollParent = i;
                    break
                }
                i = i.parentElement
            } while (i)
        }
        t && (t.fastClickLastScrollTop = t.scrollTop)
    }, e.prototype.getTargetElementFromEventTarget = function (e) {
        return e.nodeType === Node.TEXT_NODE ? e.parentNode : e
    }, e.prototype.onTouchStart = function (e) {
        var t, i, s;
        if (e.targetTouches.length > 1)return !0;
        if (t = this.getTargetElementFromEventTarget(e.target), i = e.targetTouches[0], n) {
            if (s = window.getSelection(), s.rangeCount && !s.isCollapsed)return !0;
            if (!o) {
                if (i.identifier && i.identifier === this.lastTouchIdentifier)return e.preventDefault(), !1;
                this.lastTouchIdentifier = i.identifier, this.updateScrollParent(t)
            }
        }
        return this.trackingClick = !0, this.trackingClickStart = e.timeStamp, this.targetElement = t, this.touchStartX = i.pageX, this.touchStartY = i.pageY, e.timeStamp - this.lastClickTime < this.tapDelay && e.preventDefault(), !0
    }, e.prototype.touchHasMoved = function (e) {
        var t = e.changedTouches[0], i = this.touchBoundary;
        return Math.abs(t.pageX - this.touchStartX) > i || Math.abs(t.pageY - this.touchStartY) > i ? !0 : !1
    }, e.prototype.onTouchMove = function (e) {
        return this.trackingClick ? ((this.targetElement !== this.getTargetElementFromEventTarget(e.target) || this.touchHasMoved(e)) && (this.trackingClick = !1, this.targetElement = null), !0) : !0
    }, e.prototype.findControl = function (e) {
        return void 0 !== e.control ? e.control : e.htmlFor ? document.getElementById(e.htmlFor) : e.querySelector("button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea")
    }, e.prototype.onTouchEnd = function (e) {
        var t, a, r, l, c, h = this.targetElement;
        if (!this.trackingClick)return !0;
        if (e.timeStamp - this.lastClickTime < this.tapDelay)return this.cancelNextClick = !0, !0;
        if (e.timeStamp - this.trackingClickStart > this.tapTimeout)return !0;
        if (this.cancelNextClick = !1, this.lastClickTime = e.timeStamp, a = this.trackingClickStart, this.trackingClick = !1, this.trackingClickStart = 0, s && (c = e.changedTouches[0], h = document.elementFromPoint(c.pageX - window.pageXOffset, c.pageY - window.pageYOffset) || h, h.fastClickScrollParent = this.targetElement.fastClickScrollParent), r = h.tagName.toLowerCase(), "label" === r) {
            if (t = this.findControl(h)) {
                if (this.focus(h), i)return !1;
                h = t
            }
        } else if (this.needsFocus(h))return e.timeStamp - a > 100 || n && window.top !== window && "input" === r ? (this.targetElement = null, !1) : (this.focus(h), this.sendClick(h, e), n && "select" === r || (this.targetElement = null, e.preventDefault()), !1);
        return n && !o && (l = h.fastClickScrollParent, l && l.fastClickLastScrollTop !== l.scrollTop) ? !0 : (this.needsClick(h) || (e.preventDefault(), this.sendClick(h, e)), !1)
    }, e.prototype.onTouchCancel = function () {
        this.trackingClick = !1, this.targetElement = null
    }, e.prototype.onMouse = function (e) {
        return this.targetElement ? e.forwardedTouchEvent ? !0 : e.cancelable && (!this.needsClick(this.targetElement) || this.cancelNextClick) ? (e.stopImmediatePropagation ? e.stopImmediatePropagation() : e.propagationStopped = !0, e.stopPropagation(), e.preventDefault(), !1) : !0 : !0
    }, e.prototype.onClick = function (e) {
        var t;
        return this.trackingClick ? (this.targetElement = null, this.trackingClick = !1, !0) : "submit" === e.target.type && 0 === e.detail ? !0 : (t = this.onMouse(e), t || (this.targetElement = null), t)
    }, e.prototype.destroy = function () {
        var e = this.layer;
        i && (e.removeEventListener("mouseover", this.onMouse, !0), e.removeEventListener("mousedown", this.onMouse, !0), e.removeEventListener("mouseup", this.onMouse, !0)), e.removeEventListener("click", this.onClick, !0), e.removeEventListener("touchstart", this.onTouchStart, !1), e.removeEventListener("touchmove", this.onTouchMove, !1), e.removeEventListener("touchend", this.onTouchEnd, !1), e.removeEventListener("touchcancel", this.onTouchCancel, !1)
    }, e.notNeeded = function (e) {
        var t, n, o;
        if ("undefined" == typeof window.ontouchstart)return !0;
        if (n = +(/Chrome\/([0-9]+)/.exec(navigator.userAgent) || [, 0])[1]) {
            if (!i)return !0;
            if (t = document.querySelector("meta[name=viewport]")) {
                if (-1 !== t.content.indexOf("user-scalable=no"))return !0;
                if (n > 31 && document.documentElement.scrollWidth <= window.outerWidth)return !0
            }
        }
        if (a && (o = navigator.userAgent.match(/Version\/([0-9]*)\.([0-9]*)/), o[1] >= 10 && o[2] >= 3 && (t = document.querySelector("meta[name=viewport]")))) {
            if (-1 !== t.content.indexOf("user-scalable=no"))return !0;
            if (document.documentElement.scrollWidth <= window.outerWidth)return !0
        }
        return "none" === e.style.msTouchAction ? !0 : "none" === e.style.touchAction ? !0 : !1
    }, e.attach = function (t, i) {
        return new e(t, i)
    }, "function" == typeof define && "object" == typeof define.amd && define.amd ? define(function () {
        return e
    }) : "undefined" != typeof module && module.exports ? (module.exports = e.attach, module.exports.FastClick = e) : window.FastClick = e
}(), window.addEventListener("load", function () {
    FastClick.attach(document.body)
}, !1);
var mask_time;