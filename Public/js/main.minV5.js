(function(e, t) {
    var n, r, i = typeof t,
    o = e.location,
    a = e.document,
    s = a.documentElement,
    l = e.jQuery,
    u = e.$,
    c = {},
    p = [],
    f = "1.10.2",
    d = p.concat,
    h = p.push,
    g = p.slice,
    m = p.indexOf,
    y = c.toString,
    v = c.hasOwnProperty,
    b = f.trim,
    x = function(e, t) {
        return new x.fn.init(e, t, r)
    },
    w = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
    T = /\S+/g,
    C = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
    N = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
    k = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
    E = /^[\],:{}\s]*$/,
    S = /(?:^|:|,)(?:\s*\[)+/g,
    A = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,
    j = /"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,
    D = /^-ms-/,
    L = /-([\da-z])/gi,
    H = function(e, t) {
        return t.toUpperCase()
    },
    q = function(e) { (a.addEventListener || "load" === e.type || "complete" === a.readyState) && (_(), x.ready())
    },
    _ = function() {
        a.addEventListener ? (a.removeEventListener("DOMContentLoaded", q, !1), e.removeEventListener("load", q, !1)) : (a.detachEvent("onreadystatechange", q), e.detachEvent("onload", q))
    };
    x.fn = x.prototype = {
        jquery: f,
        constructor: x,
        init: function(e, n, r) {
            var i, o;
            if (!e) {
                return this
            }
            if ("string" == typeof e) {
                if (i = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [null, e, null] : N.exec(e), !i || !i[1] && n) {
                    return ! n || n.jquery ? (n || r).find(e) : this.constructor(n).find(e)
                }
                if (i[1]) {
                    if (n = n instanceof x ? n[0] : n, x.merge(this, x.parseHTML(i[1], n && n.nodeType ? n.ownerDocument || n: a, !0)), k.test(i[1]) && x.isPlainObject(n)) {
                        for (i in n) {
                            x.isFunction(this[i]) ? this[i](n[i]) : this.attr(i, n[i])
                        }
                    }
                    return this
                }
                if (o = a.getElementById(i[2]), o && o.parentNode) {
                    if (o.id !== i[2]) {
                        return r.find(e)
                    }
                    this.length = 1,
                    this[0] = o
                }
                return this.context = a,
                this.selector = e,
                this
            }
            return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : x.isFunction(e) ? r.ready(e) : (e.selector !== t && (this.selector = e.selector, this.context = e.context), x.makeArray(e, this))
        },
        selector: "",
        length: 0,
        toArray: function() {
            return g.call(this)
        },
        get: function(e) {
            return null == e ? this.toArray() : 0 > e ? this[this.length + e] : this[e]
        },
        pushStack: function(e) {
            var t = x.merge(this.constructor(), e);
            return t.prevObject = this,
            t.context = this.context,
            t
        },
        each: function(e, t) {
            return x.each(this, e, t)
        },
        ready: function(e) {
            return x.ready.promise().done(e),
            this
        },
        slice: function() {
            return this.pushStack(g.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq( - 1)
        },
        eq: function(e) {
            var t = this.length,
            n = +e + (0 > e ? t: 0);
            return this.pushStack(n >= 0 && t > n ? [this[n]] : [])
        },
        map: function(e) {
            return this.pushStack(x.map(this,
            function(t, n) {
                return e.call(t, n, t)
            }))
        },
        end: function() {
            return this.prevObject || this.constructor(null)
        },
        push: h,
        sort: [].sort,
        splice: [].splice
    },
    x.fn.init.prototype = x.fn,
    x.extend = x.fn.extend = function() {
        var e, n, r, i, o, a, s = arguments[0] || {},
        l = 1,
        u = arguments.length,
        c = !1;
        for ("boolean" == typeof s && (c = s, s = arguments[1] || {},
        l = 2), "object" == typeof s || x.isFunction(s) || (s = {}), u === l && (s = this, --l); u > l; l++) {
            if (null != (o = arguments[l])) {
                for (i in o) {
                    e = s[i],
                    r = o[i],
                    s !== r && (c && r && (x.isPlainObject(r) || (n = x.isArray(r))) ? (n ? (n = !1, a = e && x.isArray(e) ? e: []) : a = e && x.isPlainObject(e) ? e: {},
                    s[i] = x.extend(c, a, r)) : r !== t && (s[i] = r))
                }
            }
        }
        return s
    },
    x.extend({
        expando: "jQuery" + (f + Math.random()).replace(/\D/g, ""),
        noConflict: function(t) {
            return e.$ === x && (e.$ = u),
            t && e.jQuery === x && (e.jQuery = l),
            x
        },
        isReady: !1,
        readyWait: 1,
        holdReady: function(e) {
            e ? x.readyWait++:x.ready(!0)
        },
        ready: function(e) {
            if (e === !0 ? !--x.readyWait: !x.isReady) {
                if (!a.body) {
                    return setTimeout(x.ready)
                }
                x.isReady = !0,
                e !== !0 && --x.readyWait > 0 || (n.resolveWith(a, [x]), x.fn.trigger && x(a).trigger("ready").off("ready"))
            }
        },
        isFunction: function(e) {
            return "function" === x.type(e)
        },
        isArray: Array.isArray ||
        function(e) {
            return "array" === x.type(e)
        },
        isWindow: function(e) {
            return null != e && e == e.window
        },
        isNumeric: function(e) {
            return ! isNaN(parseFloat(e)) && isFinite(e)
        },
        type: function(e) {
            return null == e ? e + "": "object" == typeof e || "function" == typeof e ? c[y.call(e)] || "object": typeof e
        },
        isPlainObject: function(e) {
            var n;
            if (!e || "object" !== x.type(e) || e.nodeType || x.isWindow(e)) {
                return ! 1
            }
            try {
                if (e.constructor && !v.call(e, "constructor") && !v.call(e.constructor.prototype, "isPrototypeOf")) {
                    return ! 1
                }
            } catch(r) {
                return ! 1
            }
            if (x.support.ownLast) {
                for (n in e) {
                    return v.call(e, n)
                }
            }
            for (n in e) {}
            return n === t || v.call(e, n)
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e) {
                return ! 1
            }
            return ! 0
        },
        error: function(e) {
            throw Error(e)
        },
        parseHTML: function(e, t, n) {
            if (!e || "string" != typeof e) {
                return null
            }
            "boolean" == typeof t && (n = t, t = !1),
            t = t || a;
            var r = k.exec(e),
            i = !n && [];
            return r ? [t.createElement(r[1])] : (r = x.buildFragment([e], t, i), i && x(i).remove(), x.merge([], r.childNodes))
        },
        parseJSON: function(n) {
            return e.JSON && e.JSON.parse ? e.JSON.parse(n) : null === n ? n: "string" == typeof n && (n = x.trim(n), n && E.test(n.replace(A, "@").replace(j, "]").replace(S, ""))) ? Function("return " + n)() : (x.error("Invalid JSON: " + n), t)
        },
        parseXML: function(n) {
            var r, i;
            if (!n || "string" != typeof n) {
                return null
            }
            try {
                e.DOMParser ? (i = new DOMParser, r = i.parseFromString(n, "text/xml")) : (r = new ActiveXObject("Microsoft.XMLDOM"), r.async = "false", r.loadXML(n))
            } catch(o) {
                r = t
            }
            return r && r.documentElement && !r.getElementsByTagName("parsererror").length || x.error("Invalid XML: " + n),
            r
        },
        noop: function() {},
        globalEval: function(t) {
            t && x.trim(t) && (e.execScript ||
            function(t) {
                e.eval.call(e, t)
            })(t)
        },
        camelCase: function(e) {
            return e.replace(D, "ms-").replace(L, H)
        },
        nodeName: function(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        },
        each: function(e, t, n) {
            var r, i = 0,
            o = e.length,
            a = M(e);
            if (n) {
                if (a) {
                    for (; o > i; i++) {
                        if (r = t.apply(e[i], n), r === !1) {
                            break
                        }
                    }
                } else {
                    for (i in e) {
                        if (r = t.apply(e[i], n), r === !1) {
                            break
                        }
                    }
                }
            } else {
                if (a) {
                    for (; o > i; i++) {
                        if (r = t.call(e[i], i, e[i]), r === !1) {
                            break
                        }
                    }
                } else {
                    for (i in e) {
                        if (r = t.call(e[i], i, e[i]), r === !1) {
                            break
                        }
                    }
                }
            }
            return e
        },
        trim: b && !b.call("\ufeff\u00a0") ?
        function(e) {
            return null == e ? "": b.call(e)
        }: function(e) {
            return null == e ? "": (e + "").replace(C, "")
        },
        makeArray: function(e, t) {
            var n = t || [];
            return null != e && (M(Object(e)) ? x.merge(n, "string" == typeof e ? [e] : e) : h.call(n, e)),
            n
        },
        inArray: function(e, t, n) {
            var r;
            if (t) {
                if (m) {
                    return m.call(t, e, n)
                }
                for (r = t.length, n = n ? 0 > n ? Math.max(0, r + n) : n: 0; r > n; n++) {
                    if (n in t && t[n] === e) {
                        return n
                    }
                }
            }
            return - 1
        },
        merge: function(e, n) {
            var r = n.length,
            i = e.length,
            o = 0;
            if ("number" == typeof r) {
                for (; r > o; o++) {
                    e[i++] = n[o]
                }
            } else {
                while (n[o] !== t) {
                    e[i++] = n[o++]
                }
            }
            return e.length = i,
            e
        },
        grep: function(e, t, n) {
            var r, i = [],
            o = 0,
            a = e.length;
            for (n = !!n; a > o; o++) {
                r = !!t(e[o], o),
                n !== r && i.push(e[o])
            }
            return i
        },
        map: function(e, t, n) {
            var r, i = 0,
            o = e.length,
            a = M(e),
            s = [];
            if (a) {
                for (; o > i; i++) {
                    r = t(e[i], i, n),
                    null != r && (s[s.length] = r)
                }
            } else {
                for (i in e) {
                    r = t(e[i], i, n),
                    null != r && (s[s.length] = r)
                }
            }
            return d.apply([], s)
        },
        guid: 1,
        proxy: function(e, n) {
            var r, i, o;
            return "string" == typeof n && (o = e[n], n = e, e = o),
            x.isFunction(e) ? (r = g.call(arguments, 2), i = function() {
                return e.apply(n || this, r.concat(g.call(arguments)))
            },
            i.guid = e.guid = e.guid || x.guid++, i) : t
        },
        access: function(e, n, r, i, o, a, s) {
            var l = 0,
            u = e.length,
            c = null == r;
            if ("object" === x.type(r)) {
                o = !0;
                for (l in r) {
                    x.access(e, n, l, r[l], !0, a, s)
                }
            } else {
                if (i !== t && (o = !0, x.isFunction(i) || (s = !0), c && (s ? (n.call(e, i), n = null) : (c = n, n = function(e, t, n) {
                    return c.call(x(e), n)
                })), n)) {
                    for (; u > l; l++) {
                        n(e[l], r, s ? i: i.call(e[l], l, n(e[l], r)))
                    }
                }
            }
            return o ? e: c ? n.call(e) : u ? n(e[0], r) : a
        },
        now: function() {
            return (new Date).getTime()
        },
        swap: function(e, t, n, r) {
            var i, o, a = {};
            for (o in t) {
                a[o] = e.style[o],
                e.style[o] = t[o]
            }
            i = n.apply(e, r || []);
            for (o in t) {
                e.style[o] = a[o]
            }
            return i
        }
    }),
    x.ready.promise = function(t) {
        if (!n) {
            if (n = x.Deferred(), "complete" === a.readyState) {
                setTimeout(x.ready)
            } else {
                if (a.addEventListener) {
                    a.addEventListener("DOMContentLoaded", q, !1),
                    e.addEventListener("load", q, !1)
                } else {
                    a.attachEvent("onreadystatechange", q),
                    e.attachEvent("onload", q);
                    var r = !1;
                    try {
                        r = null == e.frameElement && a.documentElement
                    } catch(i) {}
                    r && r.doScroll &&
                    function o() {
                        if (!x.isReady) {
                            try {
                                r.doScroll("left")
                            } catch(e) {
                                return setTimeout(o, 50)
                            }
                            _(),
                            x.ready()
                        }
                    } ()
                }
            }
        }
        return n.promise(t)
    },
    x.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),
    function(e, t) {
        c["[object " + t + "]"] = t.toLowerCase()
    });
    function M(e) {
        var t = e.length,
        n = x.type(e);
        return x.isWindow(e) ? !1 : 1 === e.nodeType && t ? !0 : "array" === n || "function" !== n && (0 === t || "number" == typeof t && t > 0 && t - 1 in e)
    }
    r = x(a),
    function(e, t) {
        var n, r, i, o, a, s, l, u, c, p, f, d, h, g, m, y, v, b = "sizzle" + -new Date,
        w = e.document,
        T = 0,
        C = 0,
        N = st(),
        k = st(),
        E = st(),
        S = !1,
        A = function(e, t) {
            return e === t ? (S = !0, 0) : 0
        },
        j = typeof t,
        D = 1 << 31,
        L = {}.hasOwnProperty,
        H = [],
        q = H.pop,
        _ = H.push,
        M = H.push,
        O = H.slice,
        F = H.indexOf ||
        function(e) {
            var t = 0,
            n = this.length;
            for (; n > t; t++) {
                if (this[t] === e) {
                    return t
                }
            }
            return - 1
        },
        B = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
        P = "[\\x20\\t\\r\\n\\f]",
        R = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
        W = R.replace("w", "w#"),
        $ = "\\[" + P + "*(" + R + ")" + P + "*(?:([*^$|!~]?=)" + P + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + W + ")|)|)" + P + "*\\]",
        I = ":(" + R + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + $.replace(3, 8) + ")*)|.*)\\)|)",
        z = RegExp("^" + P + "+|((?:^|[^\\\\])(?:\\\\.)*)" + P + "+$", "g"),
        X = RegExp("^" + P + "*," + P + "*"),
        U = RegExp("^" + P + "*([>+~]|" + P + ")" + P + "*"),
        V = RegExp(P + "*[+~]"),
        Y = RegExp("=" + P + "*([^\\]'\"]*)" + P + "*\\]", "g"),
        J = RegExp(I),
        G = RegExp("^" + W + "$"),
        Q = {
            ID: RegExp("^#(" + R + ")"),
            CLASS: RegExp("^\\.(" + R + ")"),
            TAG: RegExp("^(" + R.replace("w", "w*") + ")"),
            ATTR: RegExp("^" + $),
            PSEUDO: RegExp("^" + I),
            CHILD: RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + P + "*(even|odd|(([+-]|)(\\d*)n|)" + P + "*(?:([+-]|)" + P + "*(\\d+)|))" + P + "*\\)|)", "i"),
            bool: RegExp("^(?:" + B + ")$", "i"),
            needsContext: RegExp("^" + P + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + P + "*((?:-\\d)?\\d*)" + P + "*\\)|)(?=[^-]|$)", "i")
        },
        K = /^[^{]+\{\s*\[native \w/,
        Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
        et = /^(?:input|select|textarea|button)$/i,
        tt = /^h\d$/i,
        nt = /'|\\/g,
        rt = RegExp("\\\\([\\da-f]{1,6}" + P + "?|(" + P + ")|.)", "ig"),
        it = function(e, t, n) {
            var r = "0x" + t - 65536;
            return r !== r || n ? t: 0 > r ? String.fromCharCode(r + 65536) : String.fromCharCode(55296 | r >> 10, 56320 | 1023 & r)
        };
        try {
            M.apply(H = O.call(w.childNodes), w.childNodes),
            H[w.childNodes.length].nodeType
        } catch(ot) {
            M = {
                apply: H.length ?
                function(e, t) {
                    _.apply(e, O.call(t))
                }: function(e, t) {
                    var n = e.length,
                    r = 0;
                    while (e[n++] = t[r++]) {}
                    e.length = n - 1
                }
            }
        }
        function at(e, t, n, i) {
            var o, a, s, l, u, c, d, m, y, x;
            if ((t ? t.ownerDocument || t: w) !== f && p(t), t = t || f, n = n || [], !e || "string" != typeof e) {
                return n
            }
            if (1 !== (l = t.nodeType) && 9 !== l) {
                return []
            }
            if (h && !i) {
                if (o = Z.exec(e)) {
                    if (s = o[1]) {
                        if (9 === l) {
                            if (a = t.getElementById(s), !a || !a.parentNode) {
                                return n
                            }
                            if (a.id === s) {
                                return n.push(a),
                                n
                            }
                        } else {
                            if (t.ownerDocument && (a = t.ownerDocument.getElementById(s)) && v(t, a) && a.id === s) {
                                return n.push(a),
                                n
                            }
                        }
                    } else {
                        if (o[2]) {
                            return M.apply(n, t.getElementsByTagName(e)),
                            n
                        }
                        if ((s = o[3]) && r.getElementsByClassName && t.getElementsByClassName) {
                            return M.apply(n, t.getElementsByClassName(s)),
                            n
                        }
                    }
                }
                if (r.qsa && (!g || !g.test(e))) {
                    if (m = d = b, y = t, x = 9 === l && e, 1 === l && "object" !== t.nodeName.toLowerCase()) {
                        c = mt(e),
                        (d = t.getAttribute("id")) ? m = d.replace(nt, "\\$&") : t.setAttribute("id", m),
                        m = "[id='" + m + "'] ",
                        u = c.length;
                        while (u--) {
                            c[u] = m + yt(c[u])
                        }
                        y = V.test(e) && t.parentNode || t,
                        x = c.join(",")
                    }
                    if (x) {
                        try {
                            return M.apply(n, y.querySelectorAll(x)),
                            n
                        } catch(T) {} finally {
                            d || t.removeAttribute("id")
                        }
                    }
                }
            }
            return kt(e.replace(z, "$1"), t, n, i)
        }
        function st() {
            var e = [];
            function t(n, r) {
                return e.push(n += " ") > o.cacheLength && delete t[e.shift()],
                t[n] = r
            }
            return t
        }
        function lt(e) {
            return e[b] = !0,
            e
        }
        function ut(e) {
            var t = f.createElement("div");
            try {
                return !! e(t)
            } catch(n) {
                return ! 1
            } finally {
                t.parentNode && t.parentNode.removeChild(t),
                t = null
            }
        }
        function ct(e, t) {
            var n = e.split("|"),
            r = e.length;
            while (r--) {
                o.attrHandle[n[r]] = t
            }
        }
        function pt(e, t) {
            var n = t && e,
            r = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || D) - (~e.sourceIndex || D);
            if (r) {
                return r
            }
            if (n) {
                while (n = n.nextSibling) {
                    if (n === t) {
                        return - 1
                    }
                }
            }
            return e ? 1 : -1
        }
        function ft(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return "input" === n && t.type === e
            }
        }
        function dt(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e
            }
        }
        function ht(e) {
            return lt(function(t) {
                return t = +t,
                lt(function(n, r) {
                    var i, o = e([], n.length, t),
                    a = o.length;
                    while (a--) {
                        n[i = o[a]] && (n[i] = !(r[i] = n[i]))
                    }
                })
            })
        }
        s = at.isXML = function(e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return t ? "HTML" !== t.nodeName: !1
        },
        r = at.support = {},
        p = at.setDocument = function(e) {
            var n = e ? e.ownerDocument || e: w,
            i = n.defaultView;
            return n !== f && 9 === n.nodeType && n.documentElement ? (f = n, d = n.documentElement, h = !s(n), i && i.attachEvent && i !== i.top && i.attachEvent("onbeforeunload",
            function() {
                p()
            }), r.attributes = ut(function(e) {
                return e.className = "i",
                !e.getAttribute("className")
            }), r.getElementsByTagName = ut(function(e) {
                return e.appendChild(n.createComment("")),
                !e.getElementsByTagName("*").length
            }), r.getElementsByClassName = ut(function(e) {
                return e.innerHTML = "<div class='a'></div><div class='a i'></div>",
                e.firstChild.className = "i",
                2 === e.getElementsByClassName("i").length
            }), r.getById = ut(function(e) {
                return d.appendChild(e).id = b,
                !n.getElementsByName || !n.getElementsByName(b).length
            }), r.getById ? (o.find.ID = function(e, t) {
                if (typeof t.getElementById !== j && h) {
                    var n = t.getElementById(e);
                    return n && n.parentNode ? [n] : []
                }
            },
            o.filter.ID = function(e) {
                var t = e.replace(rt, it);
                return function(e) {
                    return e.getAttribute("id") === t
                }
            }) : (delete o.find.ID, o.filter.ID = function(e) {
                var t = e.replace(rt, it);
                return function(e) {
                    var n = typeof e.getAttributeNode !== j && e.getAttributeNode("id");
                    return n && n.value === t
                }
            }), o.find.TAG = r.getElementsByTagName ?
            function(e, n) {
                return typeof n.getElementsByTagName !== j ? n.getElementsByTagName(e) : t
            }: function(e, t) {
                var n, r = [],
                i = 0,
                o = t.getElementsByTagName(e);
                if ("*" === e) {
                    while (n = o[i++]) {
                        1 === n.nodeType && r.push(n)
                    }
                    return r
                }
                return o
            },
            o.find.CLASS = r.getElementsByClassName &&
            function(e, n) {
                return typeof n.getElementsByClassName !== j && h ? n.getElementsByClassName(e) : t
            },
            m = [], g = [], (r.qsa = K.test(n.querySelectorAll)) && (ut(function(e) {
                e.innerHTML = "<select><option selected=''></option></select>",
                e.querySelectorAll("[selected]").length || g.push("\\[" + P + "*(?:value|" + B + ")"),
                e.querySelectorAll(":checked").length || g.push(":checked")
            }), ut(function(e) {
                var t = n.createElement("input");
                t.setAttribute("type", "hidden"),
                e.appendChild(t).setAttribute("t", ""),
                e.querySelectorAll("[t^='']").length && g.push("[*^$]=" + P + "*(?:''|\"\")"),
                e.querySelectorAll(":enabled").length || g.push(":enabled", ":disabled"),
                e.querySelectorAll("*,:x"),
                g.push(",.*:")
            })), (r.matchesSelector = K.test(y = d.webkitMatchesSelector || d.mozMatchesSelector || d.oMatchesSelector || d.msMatchesSelector)) && ut(function(e) {
                r.disconnectedMatch = y.call(e, "div"),
                y.call(e, "[s!='']:x"),
                m.push("!=", I)
            }), g = g.length && RegExp(g.join("|")), m = m.length && RegExp(m.join("|")), v = K.test(d.contains) || d.compareDocumentPosition ?
            function(e, t) {
                var n = 9 === e.nodeType ? e.documentElement: e,
                r = t && t.parentNode;
                return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
            }: function(e, t) {
                if (t) {
                    while (t = t.parentNode) {
                        if (t === e) {
                            return ! 0
                        }
                    }
                }
                return ! 1
            },
            A = d.compareDocumentPosition ?
            function(e, t) {
                if (e === t) {
                    return S = !0,
                    0
                }
                var i = t.compareDocumentPosition && e.compareDocumentPosition && e.compareDocumentPosition(t);
                return i ? 1 & i || !r.sortDetached && t.compareDocumentPosition(e) === i ? e === n || v(w, e) ? -1 : t === n || v(w, t) ? 1 : c ? F.call(c, e) - F.call(c, t) : 0 : 4 & i ? -1 : 1 : e.compareDocumentPosition ? -1 : 1
            }: function(e, t) {
                var r, i = 0,
                o = e.parentNode,
                a = t.parentNode,
                s = [e],

                l = [t];
                if (e === t) {
                    return S = !0,
                    0
                }
                if (!o || !a) {
                    return e === n ? -1 : t === n ? 1 : o ? -1 : a ? 1 : c ? F.call(c, e) - F.call(c, t) : 0
                }
                if (o === a) {
                    return pt(e, t)
                }
                r = e;
                while (r = r.parentNode) {
                    s.unshift(r)
                }
                r = t;
                while (r = r.parentNode) {
                    l.unshift(r)
                }
                while (s[i] === l[i]) {
                    i++
                }
                return i ? pt(s[i], l[i]) : s[i] === w ? -1 : l[i] === w ? 1 : 0
            },
            n) : f
        },
        at.matches = function(e, t) {
            return at(e, null, null, t)
        },
        at.matchesSelector = function(e, t) {
            if ((e.ownerDocument || e) !== f && p(e), t = t.replace(Y, "='$1']"), !(!r.matchesSelector || !h || m && m.test(t) || g && g.test(t))) {
                try {
                    var n = y.call(e, t);
                    if (n || r.disconnectedMatch || e.document && 11 !== e.document.nodeType) {
                        return n
                    }
                } catch(i) {}
            }
            return at(t, f, null, [e]).length > 0
        },
        at.contains = function(e, t) {
            return (e.ownerDocument || e) !== f && p(e),
            v(e, t)
        },
        at.attr = function(e, n) { (e.ownerDocument || e) !== f && p(e);
            var i = o.attrHandle[n.toLowerCase()],
            a = i && L.call(o.attrHandle, n.toLowerCase()) ? i(e, n, !h) : t;
            return a === t ? r.attributes || !h ? e.getAttribute(n) : (a = e.getAttributeNode(n)) && a.specified ? a.value: null: a
        },
        at.error = function(e) {
            throw Error("Syntax error, unrecognized expression: " + e)
        },
        at.uniqueSort = function(e) {
            var t, n = [],
            i = 0,
            o = 0;
            if (S = !r.detectDuplicates, c = !r.sortStable && e.slice(0), e.sort(A), S) {
                while (t = e[o++]) {
                    t === e[o] && (i = n.push(o))
                }
                while (i--) {
                    e.splice(n[i], 1)
                }
            }
            return e
        },
        a = at.getText = function(e) {
            var t, n = "",
            r = 0,
            i = e.nodeType;
            if (i) {
                if (1 === i || 9 === i || 11 === i) {
                    if ("string" == typeof e.textContent) {
                        return e.textContent
                    }
                    for (e = e.firstChild; e; e = e.nextSibling) {
                        n += a(e)
                    }
                } else {
                    if (3 === i || 4 === i) {
                        return e.nodeValue
                    }
                }
            } else {
                for (; t = e[r]; r++) {
                    n += a(t)
                }
            }
            return n
        },
        o = at.selectors = {
            cacheLength: 50,
            createPseudo: lt,
            match: Q,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(e) {
                    return e[1] = e[1].replace(rt, it),
                    e[3] = (e[4] || e[5] || "").replace(rt, it),
                    "~=" === e[2] && (e[3] = " " + e[3] + " "),
                    e.slice(0, 4)
                },
                CHILD: function(e) {
                    return e[1] = e[1].toLowerCase(),
                    "nth" === e[1].slice(0, 3) ? (e[3] || at.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && at.error(e[0]),
                    e
                },
                PSEUDO: function(e) {
                    var n, r = !e[5] && e[2];
                    return Q.CHILD.test(e[0]) ? null: (e[3] && e[4] !== t ? e[2] = e[4] : r && J.test(r) && (n = mt(r, !0)) && (n = r.indexOf(")", r.length - n) - r.length) && (e[0] = e[0].slice(0, n), e[2] = r.slice(0, n)), e.slice(0, 3))
                }
            },
            filter: {
                TAG: function(e) {
                    var t = e.replace(rt, it).toLowerCase();
                    return "*" === e ?
                    function() {
                        return ! 0
                    }: function(e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t
                    }
                },
                CLASS: function(e) {
                    var t = N[e + " "];
                    return t || (t = RegExp("(^|" + P + ")" + e + "(" + P + "|$)")) && N(e,
                    function(e) {
                        return t.test("string" == typeof e.className && e.className || typeof e.getAttribute !== j && e.getAttribute("class") || "")
                    })
                },
                ATTR: function(e, t, n) {
                    return function(r) {
                        var i = at.attr(r, e);
                        return null == i ? "!=" === t: t ? (i += "", "=" === t ? i === n: "!=" === t ? i !== n: "^=" === t ? n && 0 === i.indexOf(n) : "*=" === t ? n && i.indexOf(n) > -1 : "$=" === t ? n && i.slice( - n.length) === n: "~=" === t ? (" " + i + " ").indexOf(n) > -1 : "|=" === t ? i === n || i.slice(0, n.length + 1) === n + "-": !1) : !0
                    }
                },
                CHILD: function(e, t, n, r, i) {
                    var o = "nth" !== e.slice(0, 3),
                    a = "last" !== e.slice( - 4),
                    s = "of-type" === t;
                    return 1 === r && 0 === i ?
                    function(e) {
                        return !! e.parentNode
                    }: function(t, n, l) {
                        var u, c, p, f, d, h, g = o !== a ? "nextSibling": "previousSibling",
                        m = t.parentNode,
                        y = s && t.nodeName.toLowerCase(),
                        v = !l && !s;
                        if (m) {
                            if (o) {
                                while (g) {
                                    p = t;
                                    while (p = p[g]) {
                                        if (s ? p.nodeName.toLowerCase() === y: 1 === p.nodeType) {
                                            return ! 1
                                        }
                                    }
                                    h = g = "only" === e && !h && "nextSibling"
                                }
                                return ! 0
                            }
                            if (h = [a ? m.firstChild: m.lastChild], a && v) {
                                c = m[b] || (m[b] = {}),
                                u = c[e] || [],
                                d = u[0] === T && u[1],
                                f = u[0] === T && u[2],
                                p = d && m.childNodes[d];
                                while (p = ++d && p && p[g] || (f = d = 0) || h.pop()) {
                                    if (1 === p.nodeType && ++f && p === t) {
                                        c[e] = [T, d, f];
                                        break
                                    }
                                }
                            } else {
                                if (v && (u = (t[b] || (t[b] = {}))[e]) && u[0] === T) {
                                    f = u[1]
                                } else {
                                    while (p = ++d && p && p[g] || (f = d = 0) || h.pop()) {
                                        if ((s ? p.nodeName.toLowerCase() === y: 1 === p.nodeType) && ++f && (v && ((p[b] || (p[b] = {}))[e] = [T, f]), p === t)) {
                                            break
                                        }
                                    }
                                }
                            }
                            return f -= i,
                            f === r || 0 === f % r && f / r >= 0
                        }
                    }
                },
                PSEUDO: function(e, t) {
                    var n, r = o.pseudos[e] || o.setFilters[e.toLowerCase()] || at.error("unsupported pseudo: " + e);
                    return r[b] ? r(t) : r.length > 1 ? (n = [e, e, "", t], o.setFilters.hasOwnProperty(e.toLowerCase()) ? lt(function(e, n) {
                        var i, o = r(e, t),
                        a = o.length;
                        while (a--) {
                            i = F.call(e, o[a]),
                            e[i] = !(n[i] = o[a])
                        }
                    }) : function(e) {
                        return r(e, 0, n)
                    }) : r
                }
            },
            pseudos: {
                not: lt(function(e) {
                    var t = [],
                    n = [],
                    r = l(e.replace(z, "$1"));
                    return r[b] ? lt(function(e, t, n, i) {
                        var o, a = r(e, null, i, []),
                        s = e.length;
                        while (s--) { (o = a[s]) && (e[s] = !(t[s] = o))
                        }
                    }) : function(e, i, o) {
                        return t[0] = e,
                        r(t, null, o, n),
                        !n.pop()
                    }
                }),
                has: lt(function(e) {
                    return function(t) {
                        return at(e, t).length > 0
                    }
                }),
                contains: lt(function(e) {
                    return function(t) {
                        return (t.textContent || t.innerText || a(t)).indexOf(e) > -1
                    }
                }),
                lang: lt(function(e) {
                    return G.test(e || "") || at.error("unsupported lang: " + e),
                    e = e.replace(rt, it).toLowerCase(),
                    function(t) {
                        var n;
                        do {
                            if (n = h ? t.lang: t.getAttribute("xml:lang") || t.getAttribute("lang")) {
                                return n = n.toLowerCase(),
                                n === e || 0 === n.indexOf(e + "-")
                            }
                        } while (( t = t . parentNode ) && 1 === t.nodeType);
                        return ! 1
                    }
                }),
                target: function(t) {
                    var n = e.location && e.location.hash;
                    return n && n.slice(1) === t.id
                },
                root: function(e) {
                    return e === d
                },
                focus: function(e) {
                    return e === f.activeElement && (!f.hasFocus || f.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                },
                enabled: function(e) {
                    return e.disabled === !1
                },
                disabled: function(e) {
                    return e.disabled === !0
                },
                checked: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected
                },
                selected: function(e) {
                    return e.parentNode && e.parentNode.selectedIndex,
                    e.selected === !0
                },
                empty: function(e) {
                    for (e = e.firstChild; e; e = e.nextSibling) {
                        if (e.nodeName > "@" || 3 === e.nodeType || 4 === e.nodeType) {
                            return ! 1
                        }
                    }
                    return ! 0
                },
                parent: function(e) {
                    return ! o.pseudos.empty(e)
                },
                header: function(e) {
                    return tt.test(e.nodeName)
                },
                input: function(e) {
                    return et.test(e.nodeName)
                },
                button: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t
                },
                text: function(e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || t.toLowerCase() === e.type)
                },
                first: ht(function() {
                    return [0]
                }),
                last: ht(function(e, t) {
                    return [t - 1]
                }),
                eq: ht(function(e, t, n) {
                    return [0 > n ? n + t: n]
                }),
                even: ht(function(e, t) {
                    var n = 0;
                    for (; t > n; n += 2) {
                        e.push(n)
                    }
                    return e
                }),
                odd: ht(function(e, t) {
                    var n = 1;
                    for (; t > n; n += 2) {
                        e.push(n)
                    }
                    return e
                }),
                lt: ht(function(e, t, n) {
                    var r = 0 > n ? n + t: n;
                    for (; --r >= 0;) {
                        e.push(r)
                    }
                    return e
                }),
                gt: ht(function(e, t, n) {
                    var r = 0 > n ? n + t: n;
                    for (; t > ++r;) {
                        e.push(r)
                    }
                    return e
                })
            }
        },
        o.pseudos.nth = o.pseudos.eq;
        for (n in {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        }) {
            o.pseudos[n] = ft(n)
        }
        for (n in {
            submit: !0,
            reset: !0
        }) {
            o.pseudos[n] = dt(n)
        }
        function gt() {}
        gt.prototype = o.filters = o.pseudos,
        o.setFilters = new gt;
        function mt(e, t) {
            var n, r, i, a, s, l, u, c = k[e + " "];
            if (c) {
                return t ? 0 : c.slice(0)
            }
            s = e,
            l = [],
            u = o.preFilter;
            while (s) { (!n || (r = X.exec(s))) && (r && (s = s.slice(r[0].length) || s), l.push(i = [])),
                n = !1,
                (r = U.exec(s)) && (n = r.shift(), i.push({
                    value: n,
                    type: r[0].replace(z, " ")
                }), s = s.slice(n.length));
                for (a in o.filter) { ! (r = Q[a].exec(s)) || u[a] && !(r = u[a](r)) || (n = r.shift(), i.push({
                        value: n,
                        type: a,
                        matches: r
                    }), s = s.slice(n.length))
                }
                if (!n) {
                    break
                }
            }
            return t ? s.length: s ? at.error(e) : k(e, l).slice(0)
        }
        function yt(e) {
            var t = 0,
            n = e.length,
            r = "";
            for (; n > t; t++) {
                r += e[t].value
            }
            return r
        }
        function vt(e, t, n) {
            var r = t.dir,
            o = n && "parentNode" === r,
            a = C++;
            return t.first ?
            function(t, n, i) {
                while (t = t[r]) {
                    if (1 === t.nodeType || o) {
                        return e(t, n, i)
                    }
                }
            }: function(t, n, s) {
                var l, u, c, p = T + " " + a;
                if (s) {
                    while (t = t[r]) {
                        if ((1 === t.nodeType || o) && e(t, n, s)) {
                            return ! 0
                        }
                    }
                } else {
                    while (t = t[r]) {
                        if (1 === t.nodeType || o) {
                            if (c = t[b] || (t[b] = {}), (u = c[r]) && u[0] === p) {
                                if ((l = u[1]) === !0 || l === i) {
                                    return l === !0
                                }
                            } else {
                                if (u = c[r] = [p], u[1] = e(t, n, s) || i, u[1] === !0) {
                                    return ! 0
                                }
                            }
                        }
                    }
                }
            }
        }
        function bt(e) {
            return e.length > 1 ?
            function(t, n, r) {
                var i = e.length;
                while (i--) {
                    if (!e[i](t, n, r)) {
                        return ! 1
                    }
                }
                return ! 0
            }: e[0]
        }
        function xt(e, t, n, r, i) {
            var o, a = [],
            s = 0,
            l = e.length,
            u = null != t;
            for (; l > s; s++) { (o = e[s]) && (!n || n(o, r, i)) && (a.push(o), u && t.push(s))
            }
            return a
        }
        function wt(e, t, n, r, i, o) {
            return r && !r[b] && (r = wt(r)),
            i && !i[b] && (i = wt(i, o)),
            lt(function(o, a, s, l) {
                var u, c, p, f = [],
                d = [],
                h = a.length,
                g = o || Nt(t || "*", s.nodeType ? [s] : s, []),
                m = !e || !o && t ? g: xt(g, f, e, s, l),
                y = n ? i || (o ? e: h || r) ? [] : a: m;
                if (n && n(m, y, s, l), r) {
                    u = xt(y, d),
                    r(u, [], s, l),
                    c = u.length;
                    while (c--) { (p = u[c]) && (y[d[c]] = !(m[d[c]] = p))
                    }
                }
                if (o) {
                    if (i || e) {
                        if (i) {
                            u = [],
                            c = y.length;
                            while (c--) { (p = y[c]) && u.push(m[c] = p)
                            }
                            i(null, y = [], u, l)
                        }
                        c = y.length;
                        while (c--) { (p = y[c]) && (u = i ? F.call(o, p) : f[c]) > -1 && (o[u] = !(a[u] = p))
                        }
                    }
                } else {
                    y = xt(y === a ? y.splice(h, y.length) : y),
                    i ? i(null, a, y, l) : M.apply(a, y)
                }
            })
        }
        function Tt(e) {
            var t, n, r, i = e.length,
            a = o.relative[e[0].type],
            s = a || o.relative[" "],
            l = a ? 1 : 0,
            c = vt(function(e) {
                return e === t
            },
            s, !0),
            p = vt(function(e) {
                return F.call(t, e) > -1
            },
            s, !0),
            f = [function(e, n, r) {
                return ! a && (r || n !== u) || ((t = n).nodeType ? c(e, n, r) : p(e, n, r))
            }];
            for (; i > l; l++) {
                if (n = o.relative[e[l].type]) {
                    f = [vt(bt(f), n)]
                } else {
                    if (n = o.filter[e[l].type].apply(null, e[l].matches), n[b]) {
                        for (r = ++l; i > r; r++) {
                            if (o.relative[e[r].type]) {
                                break
                            }
                        }
                        return wt(l > 1 && bt(f), l > 1 && yt(e.slice(0, l - 1).concat({
                            value: " " === e[l - 2].type ? "*": ""
                        })).replace(z, "$1"), n, r > l && Tt(e.slice(l, r)), i > r && Tt(e = e.slice(r)), i > r && yt(e))
                    }
                    f.push(n)
                }
            }
            return bt(f)
        }
        function Ct(e, t) {
            var n = 0,
            r = t.length > 0,
            a = e.length > 0,
            s = function(s, l, c, p, d) {
                var h, g, m, y = [],
                v = 0,
                b = "0",
                x = s && [],
                w = null != d,
                C = u,
                N = s || a && o.find.TAG("*", d && l.parentNode || l),
                k = T += null == C ? 1 : Math.random() || 0.1;
                for (w && (u = l !== f && l, i = n); null != (h = N[b]); b++) {
                    if (a && h) {
                        g = 0;
                        while (m = e[g++]) {
                            if (m(h, l, c)) {
                                p.push(h);
                                break
                            }
                        }
                        w && (T = k, i = ++n)
                    }
                    r && ((h = !m && h) && v--, s && x.push(h))
                }
                if (v += b, r && b !== v) {
                    g = 0;
                    while (m = t[g++]) {
                        m(x, y, l, c)
                    }
                    if (s) {
                        if (v > 0) {
                            while (b--) {
                                x[b] || y[b] || (y[b] = q.call(p))
                            }
                        }
                        y = xt(y)
                    }
                    M.apply(p, y),
                    w && !s && y.length > 0 && v + t.length > 1 && at.uniqueSort(p)
                }
                return w && (T = k, u = C),
                x
            };
            return r ? lt(s) : s
        }
        l = at.compile = function(e, t) {
            var n, r = [],
            i = [],
            o = E[e + " "];
            if (!o) {
                t || (t = mt(e)),
                n = t.length;
                while (n--) {
                    o = Tt(t[n]),
                    o[b] ? r.push(o) : i.push(o)
                }
                o = E(e, Ct(i, r))
            }
            return o
        };
        function Nt(e, t, n) {
            var r = 0,
            i = t.length;
            for (; i > r; r++) {
                at(e, t[r], n)
            }
            return n
        }
        function kt(e, t, n, i) {
            var a, s, u, c, p, f = mt(e);
            if (!i && 1 === f.length) {
                if (s = f[0] = f[0].slice(0), s.length > 2 && "ID" === (u = s[0]).type && r.getById && 9 === t.nodeType && h && o.relative[s[1].type]) {
                    if (t = (o.find.ID(u.matches[0].replace(rt, it), t) || [])[0], !t) {
                        return n
                    }
                    e = e.slice(s.shift().value.length)
                }
                a = Q.needsContext.test(e) ? 0 : s.length;
                while (a--) {
                    if (u = s[a], o.relative[c = u.type]) {
                        break
                    }
                    if ((p = o.find[c]) && (i = p(u.matches[0].replace(rt, it), V.test(s[0].type) && t.parentNode || t))) {
                        if (s.splice(a, 1), e = i.length && yt(s), !e) {
                            return M.apply(n, i),
                            n
                        }
                        break
                    }
                }
            }
            return l(e, f)(i, t, !h, n, V.test(e)),
            n
        }
        r.sortStable = b.split("").sort(A).join("") === b,
        r.detectDuplicates = S,
        p(),
        r.sortDetached = ut(function(e) {
            return 1 & e.compareDocumentPosition(f.createElement("div"))
        }),
        ut(function(e) {
            return e.innerHTML = "<a href='#'></a>",
            "#" === e.firstChild.getAttribute("href")
        }) || ct("type|href|height|width",
        function(e, n, r) {
            return r ? t: e.getAttribute(n, "type" === n.toLowerCase() ? 1 : 2)
        }),
        r.attributes && ut(function(e) {
            return e.innerHTML = "<input/>",
            e.firstChild.setAttribute("value", ""),
            "" === e.firstChild.getAttribute("value")
        }) || ct("value",
        function(e, n, r) {
            return r || "input" !== e.nodeName.toLowerCase() ? t: e.defaultValue
        }),
        ut(function(e) {
            return null == e.getAttribute("disabled")
        }) || ct(B,
        function(e, n, r) {
            var i;
            return r ? t: (i = e.getAttributeNode(n)) && i.specified ? i.value: e[n] === !0 ? n.toLowerCase() : null
        }),
        x.find = at,
        x.expr = at.selectors,
        x.expr[":"] = x.expr.pseudos,
        x.unique = at.uniqueSort,
        x.text = at.getText,
        x.isXMLDoc = at.isXML,
        x.contains = at.contains
    } (e);
    var O = {};
    function F(e) {
        var t = O[e] = {};
        return x.each(e.match(T) || [],
        function(e, n) {
            t[n] = !0
        }),
        t
    }
    x.Callbacks = function(e) {
        e = "string" == typeof e ? O[e] || F(e) : x.extend({},
        e);
        var n, r, i, o, a, s, l = [],
        u = !e.once && [],
        c = function(t) {
            for (r = e.memory && t, i = !0, a = s || 0, s = 0, o = l.length, n = !0; l && o > a; a++) {
                if (l[a].apply(t[0], t[1]) === !1 && e.stopOnFalse) {
                    r = !1;
                    break
                }
            }
            n = !1,
            l && (u ? u.length && c(u.shift()) : r ? l = [] : p.disable())
        },
        p = {
            add: function() {
                if (l) {
                    var t = l.length; (function i(t) {
                        x.each(t,
                        function(t, n) {
                            var r = x.type(n);
                            "function" === r ? e.unique && p.has(n) || l.push(n) : n && n.length && "string" !== r && i(n)
                        })
                    })(arguments),
                    n ? o = l.length: r && (s = t, c(r))
                }
                return this
            },
            remove: function() {
                return l && x.each(arguments,
                function(e, t) {
                    var r;
                    while ((r = x.inArray(t, l, r)) > -1) {
                        l.splice(r, 1),
                        n && (o >= r && o--, a >= r && a--)
                    }
                }),
                this
            },
            has: function(e) {
                return e ? x.inArray(e, l) > -1 : !(!l || !l.length)
            },
            empty: function() {
                return l = [],
                o = 0,
                this
            },
            disable: function() {
                return l = u = r = t,
                this
            },
            disabled: function() {
                return ! l
            },
            lock: function() {
                return u = t,
                r || p.disable(),
                this
            },
            locked: function() {
                return ! u
            },
            fireWith: function(e, t) {
                return ! l || i && !u || (t = t || [], t = [e, t.slice ? t.slice() : t], n ? u.push(t) : c(t)),
                this
            },
            fire: function() {
                return p.fireWith(this, arguments),
                this
            },
            fired: function() {
                return !! i
            }
        };
        return p
    },
    x.extend({
        Deferred: function(e) {
            var t = [["resolve", "done", x.Callbacks("once memory"), "resolved"], ["reject", "fail", x.Callbacks("once memory"), "rejected"], ["notify", "progress", x.Callbacks("memory")]],
            n = "pending",
            r = {
                state: function() {
                    return n
                },
                always: function() {
                    return i.done(arguments).fail(arguments),
                    this
                },
                then: function() {
                    var e = arguments;
                    return x.Deferred(function(n) {
                        x.each(t,
                        function(t, o) {
                            var a = o[0],
                            s = x.isFunction(e[t]) && e[t];
                            i[o[1]](function() {
                                var e = s && s.apply(this, arguments);
                                e && x.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[a + "With"](this === r ? n.promise() : this, s ? [e] : arguments)
                            })
                        }),
                        e = null
                    }).promise()
                },
                promise: function(e) {
                    return null != e ? x.extend(e, r) : r
                }
            },
            i = {};
            return r.pipe = r.then,
            x.each(t,
            function(e, o) {
                var a = o[2],
                s = o[3];
                r[o[1]] = a.add,
                s && a.add(function() {
                    n = s
                },
                t[1 ^ e][2].disable, t[2][2].lock),
                i[o[0]] = function() {
                    return i[o[0] + "With"](this === i ? r: this, arguments),
                    this
                },
                i[o[0] + "With"] = a.fireWith
            }),
            r.promise(i),
            e && e.call(i, i),
            i
        },
        when: function(e) {
            var t = 0,
            n = g.call(arguments),
            r = n.length,
            i = 1 !== r || e && x.isFunction(e.promise) ? r: 0,
            o = 1 === i ? e: x.Deferred(),
            a = function(e, t, n) {
                return function(r) {
                    t[e] = this,
                    n[e] = arguments.length > 1 ? g.call(arguments) : r,
                    n === s ? o.notifyWith(t, n) : --i || o.resolveWith(t, n)
                }
            },
            s,
            l,
            u;
            if (r > 1) {
                for (s = Array(r), l = Array(r), u = Array(r); r > t; t++) {
                    n[t] && x.isFunction(n[t].promise) ? n[t].promise().done(a(t, u, n)).fail(o.reject).progress(a(t, l, s)) : --i
                }
            }
            return i || o.resolveWith(u, n),
            o.promise()
        }
    }),
    x.support = function(t) {
        var n, r, o, s, l, u, c, p, f, d = a.createElement("div");
        if (d.setAttribute("className", "t"), d.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", n = d.getElementsByTagName("*") || [], r = d.getElementsByTagName("a")[0], !r || !r.style || !n.length) {
            return t
        }
        s = a.createElement("select"),
        u = s.appendChild(a.createElement("option")),
        o = d.getElementsByTagName("input")[0],
        r.style.cssText = "top:1px;float:left;opacity:.5",
        t.getSetAttribute = "t" !== d.className,
        t.leadingWhitespace = 3 === d.firstChild.nodeType,
        t.tbody = !d.getElementsByTagName("tbody").length,
        t.htmlSerialize = !!d.getElementsByTagName("link").length,
        t.style = /top/.test(r.getAttribute("style")),
        t.hrefNormalized = "/a" === r.getAttribute("href"),
        t.opacity = /^0.5/.test(r.style.opacity),
        t.cssFloat = !!r.style.cssFloat,
        t.checkOn = !!o.value,
        t.optSelected = u.selected,
        t.enctype = !!a.createElement("form").enctype,
        t.html5Clone = "<:nav></:nav>" !== a.createElement("nav").cloneNode(!0).outerHTML,
        t.inlineBlockNeedsLayout = !1,
        t.shrinkWrapBlocks = !1,
        t.pixelPosition = !1,
        t.deleteExpando = !0,
        t.noCloneEvent = !0,
        t.reliableMarginRight = !0,
        t.boxSizingReliable = !0,
        o.checked = !0,
        t.noCloneChecked = o.cloneNode(!0).checked,
        s.disabled = !0,
        t.optDisabled = !u.disabled;
        try {
            delete d.test
        } catch(h) {
            t.deleteExpando = !1
        }
        o = a.createElement("input"),
        o.setAttribute("value", ""),
        t.input = "" === o.getAttribute("value"),
        o.value = "t",
        o.setAttribute("type", "radio"),
        t.radioValue = "t" === o.value,
        o.setAttribute("checked", "t"),
        o.setAttribute("name", "t"),
        l = a.createDocumentFragment(),
        l.appendChild(o),
        t.appendChecked = o.checked,
        t.checkClone = l.cloneNode(!0).cloneNode(!0).lastChild.checked,
        d.attachEvent && (d.attachEvent("onclick",
        function() {
            t.noCloneEvent = !1
        }), d.cloneNode(!0).click());
        for (f in {
            submit: !0,
            change: !0,
            focusin: !0
        }) {
            d.setAttribute(c = "on" + f, "t"),
            t[f + "Bubbles"] = c in e || d.attributes[c].expando === !1
        }
        d.style.backgroundClip = "content-box",
        d.cloneNode(!0).style.backgroundClip = "",
        t.clearCloneStyle = "content-box" === d.style.backgroundClip;
        for (f in x(t)) {
            break
        }
        return t.ownLast = "0" !== f,
        x(function() {
            var n, r, o, s = "padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",
            l = a.getElementsByTagName("body")[0];
            l && (n = a.createElement("div"), n.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px", l.appendChild(n).appendChild(d), d.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", o = d.getElementsByTagName("td"), o[0].style.cssText = "padding:0;margin:0;border:0;display:none", p = 0 === o[0].offsetHeight, o[0].style.display = "", o[1].style.display = "none", t.reliableHiddenOffsets = p && 0 === o[0].offsetHeight, d.innerHTML = "", d.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;", x.swap(l, null != l.style.zoom ? {
                zoom: 1
            }: {},
            function() {
                t.boxSizing = 4 === d.offsetWidth
            }), e.getComputedStyle && (t.pixelPosition = "1%" !== (e.getComputedStyle(d, null) || {}).top, t.boxSizingReliable = "4px" === (e.getComputedStyle(d, null) || {
                width: "4px"
            }).width, r = d.appendChild(a.createElement("div")), r.style.cssText = d.style.cssText = s, r.style.marginRight = r.style.width = "0", d.style.width = "1px", t.reliableMarginRight = !parseFloat((e.getComputedStyle(r, null) || {}).marginRight)), typeof d.style.zoom !== i && (d.innerHTML = "", d.style.cssText = s + "width:1px;padding:1px;display:inline;zoom:1", t.inlineBlockNeedsLayout = 3 === d.offsetWidth, d.style.display = "block", d.innerHTML = "<div></div>", d.firstChild.style.width = "5px", t.shrinkWrapBlocks = 3 !== d.offsetWidth, t.inlineBlockNeedsLayout && (l.style.zoom = 1)), l.removeChild(n), n = d = o = r = null)
        }),
        n = s = l = u = r = o = null,
        t
    } ({});
    var B = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/,
    P = /([A-Z])/g;
    function R(e, n, r, i) {
        if (x.acceptData(e)) {
            var o, a, s = x.expando,
            l = e.nodeType,
            u = l ? x.cache: e,
            c = l ? e[s] : e[s] && s;
            if (c && u[c] && (i || u[c].data) || r !== t || "string" != typeof n) {
                return c || (c = l ? e[s] = p.pop() || x.guid++:s),
                u[c] || (u[c] = l ? {}: {
                    toJSON: x.noop
                }),
                ("object" == typeof n || "function" == typeof n) && (i ? u[c] = x.extend(u[c], n) : u[c].data = x.extend(u[c].data, n)),
                a = u[c],
                i || (a.data || (a.data = {}), a = a.data),
                r !== t && (a[x.camelCase(n)] = r),
                "string" == typeof n ? (o = a[n], null == o && (o = a[x.camelCase(n)])) : o = a,
                o
            }
        }
    }
    function W(e, t, n) {
        if (x.acceptData(e)) {
            var r, i, o = e.nodeType,
            a = o ? x.cache: e,
            s = o ? e[x.expando] : x.expando;
            if (a[s]) {
                if (t && (r = n ? a[s] : a[s].data)) {
                    x.isArray(t) ? t = t.concat(x.map(t, x.camelCase)) : t in r ? t = [t] : (t = x.camelCase(t), t = t in r ? [t] : t.split(" ")),
                    i = t.length;
                    while (i--) {
                        delete r[t[i]]
                    }
                    if (n ? !I(r) : !x.isEmptyObject(r)) {
                        return
                    }
                } (n || (delete a[s].data, I(a[s]))) && (o ? x.cleanData([e], !0) : x.support.deleteExpando || a != a.window ? delete a[s] : a[s] = null)
            }
        }
    }
    x.extend({
        cache: {},
        noData: {
            applet: !0,
            embed: !0,
            object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
        },
        hasData: function(e) {
            return e = e.nodeType ? x.cache[e[x.expando]] : e[x.expando],
            !!e && !I(e)
        },
        data: function(e, t, n) {
            return R(e, t, n)
        },
        removeData: function(e, t) {
            return W(e, t)
        },
        _data: function(e, t, n) {
            return R(e, t, n, !0)
        },
        _removeData: function(e, t) {
            return W(e, t, !0)
        },
        acceptData: function(e) {
            if (e.nodeType && 1 !== e.nodeType && 9 !== e.nodeType) {
                return ! 1
            }
            var t = e.nodeName && x.noData[e.nodeName.toLowerCase()];
            return ! t || t !== !0 && e.getAttribute("classid") === t
        }
    }),
    x.fn.extend({
        data: function(e, n) {
            var r, i, o = null,
            a = 0,
            s = this[0];
            if (e === t) {
                if (this.length && (o = x.data(s), 1 === s.nodeType && !x._data(s, "parsedAttrs"))) {
                    for (r = s.attributes; r.length > a; a++) {
                        i = r[a].name,
                        0 === i.indexOf("data-") && (i = x.camelCase(i.slice(5)), $(s, i, o[i]))
                    }
                    x._data(s, "parsedAttrs", !0)
                }
                return o
            }
            return "object" == typeof e ? this.each(function() {
                x.data(this, e)
            }) : arguments.length > 1 ? this.each(function() {
                x.data(this, e, n)
            }) : s ? $(s, e, x.data(s, e)) : null
        },
        removeData: function(e) {
            return this.each(function() {
                x.removeData(this, e)
            })
        }
    });
    function $(e, n, r) {
        if (r === t && 1 === e.nodeType) {
            var i = "data-" + n.replace(P, "-$1").toLowerCase();
            if (r = e.getAttribute(i), "string" == typeof r) {
                try {
                    r = "true" === r ? !0 : "false" === r ? !1 : "null" === r ? null: +r + "" === r ? +r: B.test(r) ? x.parseJSON(r) : r
                } catch(o) {}
                x.data(e, n, r)
            } else {
                r = t
            }
        }
        return r
    }
    function I(e) {
        var t;
        for (t in e) {
            if (("data" !== t || !x.isEmptyObject(e[t])) && "toJSON" !== t) {
                return ! 1
            }
        }
        return ! 0
    }
    x.extend({
        queue: function(e, n, r) {
            var i;
            return e ? (n = (n || "fx") + "queue", i = x._data(e, n), r && (!i || x.isArray(r) ? i = x._data(e, n, x.makeArray(r)) : i.push(r)), i || []) : t
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = x.queue(e, t),
            r = n.length,
            i = n.shift(),
            o = x._queueHooks(e, t),
            a = function() {
                x.dequeue(e, t)
            };
            "inprogress" === i && (i = n.shift(), r--),
            i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, a, o)),
            !r && o && o.empty.fire()
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return x._data(e, n) || x._data(e, n, {
                empty: x.Callbacks("once memory").add(function() {
                    x._removeData(e, t + "queue"),
                    x._removeData(e, n)
                })
            })
        }
    }),
    x.fn.extend({
        queue: function(e, n) {
            var r = 2;
            return "string" != typeof e && (n = e, e = "fx", r--),
            r > arguments.length ? x.queue(this[0], e) : n === t ? this: this.each(function() {
                var t = x.queue(this, e, n);
                x._queueHooks(this, e),
                "fx" === e && "inprogress" !== t[0] && x.dequeue(this, e)
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                x.dequeue(this, e)
            })
        },
        delay: function(e, t) {
            return e = x.fx ? x.fx.speeds[e] || e: e,
            t = t || "fx",
            this.queue(t,
            function(t, n) {
                var r = setTimeout(t, e);
                n.stop = function() {
                    clearTimeout(r)
                }
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, n) {
            var r, i = 1,
            o = x.Deferred(),
            a = this,
            s = this.length,
            l = function() {--i || o.resolveWith(a, [a])
            };
            "string" != typeof e && (n = e, e = t),
            e = e || "fx";
            while (s--) {
                r = x._data(a[s], e + "queueHooks"),
                r && r.empty && (i++, r.empty.add(l))
            }
            return l(),
            o.promise(n)
        }
    });
    var z, X, U = /[\t\r\n\f]/g,
    V = /\r/g,
    Y = /^(?:input|select|textarea|button|object)$/i,
    J = /^(?:a|area)$/i,
    G = /^(?:checked|selected)$/i,
    Q = x.support.getSetAttribute,
    K = x.support.input;
    x.fn.extend({
        attr: function(e, t) {
            return x.access(this, x.attr, e, t, arguments.length > 1)
        },
        removeAttr: function(e) {
            return this.each(function() {
                x.removeAttr(this, e)
            })
        },
        prop: function(e, t) {
            return x.access(this, x.prop, e, t, arguments.length > 1)
        },
        removeProp: function(e) {
            return e = x.propFix[e] || e,
            this.each(function() {
                try {
                    this[e] = t,
                    delete this[e]
                } catch(n) {}
            })
        },
        addClass: function(e) {
            var t, n, r, i, o, a = 0,
            s = this.length,
            l = "string" == typeof e && e;
            if (x.isFunction(e)) {
                return this.each(function(t) {
                    x(this).addClass(e.call(this, t, this.className))
                })
            }
            if (l) {
                for (t = (e || "").match(T) || []; s > a; a++) {
                    if (n = this[a], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(U, " ") : " ")) {
                        o = 0;
                        while (i = t[o++]) {
                            0 > r.indexOf(" " + i + " ") && (r += i + " ")
                        }
                        n.className = x.trim(r)
                    }
                }
            }
            return this
        },
        removeClass: function(e) {
            var t, n, r, i, o, a = 0,
            s = this.length,
            l = 0 === arguments.length || "string" == typeof e && e;
            if (x.isFunction(e)) {
                return this.each(function(t) {
                    x(this).removeClass(e.call(this, t, this.className))
                })
            }
            if (l) {
                for (t = (e || "").match(T) || []; s > a; a++) {
                    if (n = this[a], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(U, " ") : "")) {
                        o = 0;
                        while (i = t[o++]) {
                            while (r.indexOf(" " + i + " ") >= 0) {
                                r = r.replace(" " + i + " ", " ")
                            }
                        }
                        n.className = e ? x.trim(r) : ""
                    }
                }
            }
            return this
        },
        toggleClass: function(e, t) {
            var n = typeof e;
            return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : x.isFunction(e) ? this.each(function(n) {
                x(this).toggleClass(e.call(this, n, this.className, t), t)
            }) : this.each(function() {
                if ("string" === n) {
                    var t, r = 0,
                    o = x(this),
                    a = e.match(T) || [];
                    while (t = a[r++]) {
                        o.hasClass(t) ? o.removeClass(t) : o.addClass(t)
                    }
                } else { (n === i || "boolean" === n) && (this.className && x._data(this, "__className__", this.className), this.className = this.className || e === !1 ? "": x._data(this, "__className__") || "")
                }
            })
        },
        hasClass: function(e) {
            var t = " " + e + " ",
            n = 0,
            r = this.length;
            for (; r > n; n++) {
                if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(U, " ").indexOf(t) >= 0) {
                    return ! 0
                }
            }
            return ! 1
        },
        val: function(e) {
            var n, r, i, o = this[0];
            if (arguments.length) {
                return i = x.isFunction(e),
                this.each(function(n) {
                    var o;
                    1 === this.nodeType && (o = i ? e.call(this, n, x(this).val()) : e, null == o ? o = "": "number" == typeof o ? o += "": x.isArray(o) && (o = x.map(o,
                    function(e) {
                        return null == e ? "": e + ""
                    })), r = x.valHooks[this.type] || x.valHooks[this.nodeName.toLowerCase()], r && "set" in r && r.set(this, o, "value") !== t || (this.value = o))
                })
            }
            if (o) {
                return r = x.valHooks[o.type] || x.valHooks[o.nodeName.toLowerCase()],
                r && "get" in r && (n = r.get(o, "value")) !== t ? n: (n = o.value, "string" == typeof n ? n.replace(V, "") : null == n ? "": n)
            }
        }
    }),
    x.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = x.find.attr(e, "value");
                    return null != t ? t: e.text
                }
            },
            select: {
                get: function(e) {
                    var t, n, r = e.options,
                    i = e.selectedIndex,
                    o = "select-one" === e.type || 0 > i,
                    a = o ? null: [],
                    s = o ? i + 1 : r.length,
                    l = 0 > i ? s: o ? i: 0;
                    for (; s > l; l++) {
                        if (n = r[l], !(!n.selected && l !== i || (x.support.optDisabled ? n.disabled: null !== n.getAttribute("disabled")) || n.parentNode.disabled && x.nodeName(n.parentNode, "optgroup"))) {
                            if (t = x(n).val(), o) {
                                return t
                            }
                            a.push(t)
                        }
                    }
                    return a
                },
                set: function(e, t) {
                    var n, r, i = e.options,
                    o = x.makeArray(t),
                    a = i.length;
                    while (a--) {
                        r = i[a],
                        (r.selected = x.inArray(x(r).val(), o) >= 0) && (n = !0)
                    }
                    return n || (e.selectedIndex = -1),
                    o
                }
            }
        },
        attr: function(e, n, r) {
            var o, a, s = e.nodeType;
            if (e && 3 !== s && 8 !== s && 2 !== s) {
                return typeof e.getAttribute === i ? x.prop(e, n, r) : (1 === s && x.isXMLDoc(e) || (n = n.toLowerCase(), o = x.attrHooks[n] || (x.expr.match.bool.test(n) ? X: z)), r === t ? o && "get" in o && null !== (a = o.get(e, n)) ? a: (a = x.find.attr(e, n), null == a ? t: a) : null !== r ? o && "set" in o && (a = o.set(e, r, n)) !== t ? a: (e.setAttribute(n, r + ""), r) : (x.removeAttr(e, n), t))
            }
        },
        removeAttr: function(e, t) {
            var n, r, i = 0,
            o = t && t.match(T);
            if (o && 1 === e.nodeType) {
                while (n = o[i++]) {
                    r = x.propFix[n] || n,
                    x.expr.match.bool.test(n) ? K && Q || !G.test(n) ? e[r] = !1 : e[x.camelCase("default-" + n)] = e[r] = !1 : x.attr(e, n, ""),
                    e.removeAttribute(Q ? n: r)
                }
            }
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!x.support.radioValue && "radio" === t && x.nodeName(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t),
                        n && (e.value = n),
                        t
                    }
                }
            }
        },
        propFix: {
            "for": "htmlFor",
            "class": "className"
        },
        prop: function(e, n, r) {
            var i, o, a, s = e.nodeType;
            if (e && 3 !== s && 8 !== s && 2 !== s) {
                return a = 1 !== s || !x.isXMLDoc(e),
                a && (n = x.propFix[n] || n, o = x.propHooks[n]),
                r !== t ? o && "set" in o && (i = o.set(e, r, n)) !== t ? i: e[n] = r: o && "get" in o && null !== (i = o.get(e, n)) ? i: e[n]
            }
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var t = x.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : Y.test(e.nodeName) || J.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        }
    }),
    X = {
        set: function(e, t, n) {
            return t === !1 ? x.removeAttr(e, n) : K && Q || !G.test(n) ? e.setAttribute(!Q && x.propFix[n] || n, n) : e[x.camelCase("default-" + n)] = e[n] = !0,
            n
        }
    },
    x.each(x.expr.match.bool.source.match(/\w+/g),
    function(e, n) {
        var r = x.expr.attrHandle[n] || x.find.attr;
        x.expr.attrHandle[n] = K && Q || !G.test(n) ?
        function(e, n, i) {
            var o = x.expr.attrHandle[n],
            a = i ? t: (x.expr.attrHandle[n] = t) != r(e, n, i) ? n.toLowerCase() : null;
            return x.expr.attrHandle[n] = o,
            a
        }: function(e, n, r) {
            return r ? t: e[x.camelCase("default-" + n)] ? n.toLowerCase() : null
        }
    }),
    K && Q || (x.attrHooks.value = {
        set: function(e, n, r) {
            return x.nodeName(e, "input") ? (e.defaultValue = n, t) : z && z.set(e, n, r)
        }
    }),
    Q || (z = {
        set: function(e, n, r) {
            var i = e.getAttributeNode(r);
            return i || e.setAttributeNode(i = e.ownerDocument.createAttribute(r)),
            i.value = n += "",
            "value" === r || n === e.getAttribute(r) ? n: t
        }
    },
    x.expr.attrHandle.id = x.expr.attrHandle.name = x.expr.attrHandle.coords = function(e, n, r) {
        var i;
        return r ? t: (i = e.getAttributeNode(n)) && "" !== i.value ? i.value: null
    },
    x.valHooks.button = {
        get: function(e, n) {
            var r = e.getAttributeNode(n);
            return r && r.specified ? r.value: t
        },
        set: z.set
    },
    x.attrHooks.contenteditable = {
        set: function(e, t, n) {
            z.set(e, "" === t ? !1 : t, n)
        }
    },
    x.each(["width", "height"],
    function(e, n) {
        x.attrHooks[n] = {
            set: function(e, r) {
                return "" === r ? (e.setAttribute(n, "auto"), r) : t
            }
        }
    })),
    x.support.hrefNormalized || x.each(["href", "src"],
    function(e, t) {
        x.propHooks[t] = {
            get: function(e) {
                return e.getAttribute(t, 4)
            }
        }
    }),
    x.support.style || (x.attrHooks.style = {
        get: function(e) {
            return e.style.cssText || t
        },
        set: function(e, t) {
            return e.style.cssText = t + ""
        }
    }),
    x.support.optSelected || (x.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex),
            null
        }
    }),
    x.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"],
    function() {
        x.propFix[this.toLowerCase()] = this
    }),
    x.support.enctype || (x.propFix.enctype = "encoding"),
    x.each(["radio", "checkbox"],
    function() {
        x.valHooks[this] = {
            set: function(e, n) {
                return x.isArray(n) ? e.checked = x.inArray(x(e).val(), n) >= 0 : t
            }
        },
        x.support.checkOn || (x.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on": e.value
        })
    });
    var Z = /^(?:input|select|textarea)$/i,
    et = /^key/,
    tt = /^(?:mouse|contextmenu)|click/,
    nt = /^(?:focusinfocus|focusoutblur)$/,
    rt = /^([^.]*)(?:\.(.+)|)$/;
    function it() {
        return ! 0
    }
    function ot() {
        return ! 1
    }
    function at() {
        try {
            return a.activeElement
        } catch(e) {}
    }
    x.event = {
        global: {},
        add: function(e, n, r, o, a) {
            var s, l, u, c, p, f, d, h, g, m, y, v = x._data(e);
            if (v) {
                r.handler && (c = r, r = c.handler, a = c.selector),
                r.guid || (r.guid = x.guid++),
                (l = v.events) || (l = v.events = {}),
                (f = v.handle) || (f = v.handle = function(e) {
                    return typeof x === i || e && x.event.triggered === e.type ? t: x.event.dispatch.apply(f.elem, arguments)
                },
                f.elem = e),
                n = (n || "").match(T) || [""],
                u = n.length;
                while (u--) {
                    s = rt.exec(n[u]) || [],
                    g = y = s[1],
                    m = (s[2] || "").split(".").sort(),
                    g && (p = x.event.special[g] || {},
                    g = (a ? p.delegateType: p.bindType) || g, p = x.event.special[g] || {},
                    d = x.extend({
                        type: g,
                        origType: y,
                        data: o,
                        handler: r,
                        guid: r.guid,
                        selector: a,
                        needsContext: a && x.expr.match.needsContext.test(a),
                        namespace: m.join(".")
                    },
                    c), (h = l[g]) || (h = l[g] = [], h.delegateCount = 0, p.setup && p.setup.call(e, o, m, f) !== !1 || (e.addEventListener ? e.addEventListener(g, f, !1) : e.attachEvent && e.attachEvent("on" + g, f))), p.add && (p.add.call(e, d), d.handler.guid || (d.handler.guid = r.guid)), a ? h.splice(h.delegateCount++, 0, d) : h.push(d), x.event.global[g] = !0)
                }
                e = null
            }
        },
        remove: function(e, t, n, r, i) {
            var o, a, s, l, u, c, p, f, d, h, g, m = x.hasData(e) && x._data(e);
            if (m && (c = m.events)) {
                t = (t || "").match(T) || [""],
                u = t.length;
                while (u--) {
                    if (s = rt.exec(t[u]) || [], d = g = s[1], h = (s[2] || "").split(".").sort(), d) {
                        p = x.event.special[d] || {},
                        d = (r ? p.delegateType: p.bindType) || d,
                        f = c[d] || [],
                        s = s[2] && RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                        l = o = f.length;
                        while (o--) {
                            a = f[o],
                            !i && g !== a.origType || n && n.guid !== a.guid || s && !s.test(a.namespace) || r && r !== a.selector && ("**" !== r || !a.selector) || (f.splice(o, 1), a.selector && f.delegateCount--, p.remove && p.remove.call(e, a))
                        }
                        l && !f.length && (p.teardown && p.teardown.call(e, h, m.handle) !== !1 || x.removeEvent(e, d, m.handle), delete c[d])
                    } else {
                        for (d in c) {
                            x.event.remove(e, d + t[u], n, r, !0)
                        }
                    }
                }
                x.isEmptyObject(c) && (delete m.handle, x._removeData(e, "events"))
            }
        },
        trigger: function(n, r, i, o) {
            var s, l, u, c, p, f, d, h = [i || a],
            g = v.call(n, "type") ? n.type: n,
            m = v.call(n, "namespace") ? n.namespace.split(".") : [];
            if (u = f = i = i || a, 3 !== i.nodeType && 8 !== i.nodeType && !nt.test(g + x.event.triggered) && (g.indexOf(".") >= 0 && (m = g.split("."), g = m.shift(), m.sort()), l = 0 > g.indexOf(":") && "on" + g, n = n[x.expando] ? n: new x.Event(g, "object" == typeof n && n), n.isTrigger = o ? 2 : 3, n.namespace = m.join("."), n.namespace_re = n.namespace ? RegExp("(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, n.result = t, n.target || (n.target = i), r = null == r ? [n] : x.makeArray(r, [n]), p = x.event.special[g] || {},
            o || !p.trigger || p.trigger.apply(i, r) !== !1)) {
                if (!o && !p.noBubble && !x.isWindow(i)) {
                    for (c = p.delegateType || g, nt.test(c + g) || (u = u.parentNode); u; u = u.parentNode) {
                        h.push(u),
                        f = u
                    }
                    f === (i.ownerDocument || a) && h.push(f.defaultView || f.parentWindow || e)
                }
                d = 0;
                while ((u = h[d++]) && !n.isPropagationStopped()) {
                    n.type = d > 1 ? c: p.bindType || g,
                    s = (x._data(u, "events") || {})[n.type] && x._data(u, "handle"),
                    s && s.apply(u, r),
                    s = l && u[l],
                    s && x.acceptData(u) && s.apply && s.apply(u, r) === !1 && n.preventDefault()
                }
                if (n.type = g, !o && !n.isDefaultPrevented() && (!p._default || p._default.apply(h.pop(), r) === !1) && x.acceptData(i) && l && i[g] && !x.isWindow(i)) {
                    f = i[l],
                    f && (i[l] = null),
                    x.event.triggered = g;
                    try {
                        i[g]()
                    } catch(y) {}
                    x.event.triggered = t,
                    f && (i[l] = f)
                }
                return n.result
            }
        },
        dispatch: function(e) {
            e = x.event.fix(e);
            var n, r, i, o, a, s = [],
            l = g.call(arguments),
            u = (x._data(this, "events") || {})[e.type] || [],
            c = x.event.special[e.type] || {};
            if (l[0] = e, e.delegateTarget = this, !c.preDispatch || c.preDispatch.call(this, e) !== !1) {
                s = x.event.handlers.call(this, e, u),
                n = 0;
                while ((o = s[n++]) && !e.isPropagationStopped()) {
                    e.currentTarget = o.elem,
                    a = 0;
                    while ((i = o.handlers[a++]) && !e.isImmediatePropagationStopped()) { (!e.namespace_re || e.namespace_re.test(i.namespace)) && (e.handleObj = i, e.data = i.data, r = ((x.event.special[i.origType] || {}).handle || i.handler).apply(o.elem, l), r !== t && (e.result = r) === !1 && (e.preventDefault(), e.stopPropagation()))
                    }
                }
                return c.postDispatch && c.postDispatch.call(this, e),
                e.result
            }
        },
        handlers: function(e, n) {
            var r, i, o, a, s = [],
            l = n.delegateCount,
            u = e.target;
            if (l && u.nodeType && (!e.button || "click" !== e.type)) {
                for (; u != this; u = u.parentNode || this) {
                    if (1 === u.nodeType && (u.disabled !== !0 || "click" !== e.type)) {
                        for (o = [], a = 0; l > a; a++) {
                            i = n[a],
                            r = i.selector + " ",
                            o[r] === t && (o[r] = i.needsContext ? x(r, this).index(u) >= 0 : x.find(r, this, null, [u]).length),
                            o[r] && o.push(i)
                        }
                        o.length && s.push({
                            elem: u,
                            handlers: o
                        })
                    }
                }
            }
            return n.length > l && s.push({
                elem: this,
                handlers: n.slice(l)
            }),
            s
        },
        fix: function(e) {
            if (e[x.expando]) {
                return e
            }
            var t, n, r, i = e.type,
            o = e,
            s = this.fixHooks[i];
            s || (this.fixHooks[i] = s = tt.test(i) ? this.mouseHooks: et.test(i) ? this.keyHooks: {}),
            r = s.props ? this.props.concat(s.props) : this.props,
            e = new x.Event(o),
            t = r.length;
            while (t--) {
                n = r[t],
                e[n] = o[n]
            }
            return e.target || (e.target = o.srcElement || a),
            3 === e.target.nodeType && (e.target = e.target.parentNode),
            e.metaKey = !!e.metaKey,
            s.filter ? s.filter(e, o) : e
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(e, t) {
                return null == e.which && (e.which = null != t.charCode ? t.charCode: t.keyCode),
                e
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(e, n) {
                var r, i, o, s = n.button,
                l = n.fromElement;
                return null == e.pageX && null != n.clientX && (i = e.target.ownerDocument || a, o = i.documentElement, r = i.body, e.pageX = n.clientX + (o && o.scrollLeft || r && r.scrollLeft || 0) - (o && o.clientLeft || r && r.clientLeft || 0), e.pageY = n.clientY + (o && o.scrollTop || r && r.scrollTop || 0) - (o && o.clientTop || r && r.clientTop || 0)),
                !e.relatedTarget && l && (e.relatedTarget = l === e.target ? n.toElement: l),
                e.which || s === t || (e.which = 1 & s ? 1 : 2 & s ? 3 : 4 & s ? 2 : 0),
                e
            }
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== at() && this.focus) {
                        try {
                            return this.focus(),
                            !1
                        } catch(e) {}
                    }
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === at() && this.blur ? (this.blur(), !1) : t
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    return x.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : t
                },
                _default: function(e) {
                    return x.nodeName(e.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    e.result !== t && (e.originalEvent.returnValue = e.result)
                }
            }
        },
        simulate: function(e, t, n, r) {
            var i = x.extend(new x.Event, n, {
                type: e,
                isSimulated: !0,
                originalEvent: {}
            });
            r ? x.event.trigger(i, null, t) : x.event.dispatch.call(t, i),
            i.isDefaultPrevented() && n.preventDefault()
        }
    },
    x.removeEvent = a.removeEventListener ?
    function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n, !1)
    }: function(e, t, n) {
        var r = "on" + t;
        e.detachEvent && (typeof e[r] === i && (e[r] = null), e.detachEvent(r, n))
    },
    x.Event = function(e, n) {
        return this instanceof x.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || e.returnValue === !1 || e.getPreventDefault && e.getPreventDefault() ? it: ot) : this.type = e, n && x.extend(this, n), this.timeStamp = e && e.timeStamp || x.now(), this[x.expando] = !0, t) : new x.Event(e, n)
    },
    x.Event.prototype = {
        isDefaultPrevented: ot,
        isPropagationStopped: ot,
        isImmediatePropagationStopped: ot,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = it,
            e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = it,
            e && (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0)
        },
        stopImmediatePropagation: function() {
            this.isImmediatePropagationStopped = it,
            this.stopPropagation()
        }
    },
    x.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    },
    function(e, t) {
        x.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function(e) {
                var n, r = this,
                i = e.relatedTarget,
                o = e.handleObj;
                return (!i || i !== r && !x.contains(r, i)) && (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t),
                n
            }
        }
    }),
    x.support.submitBubbles || (x.event.special.submit = {
        setup: function() {
            return x.nodeName(this, "form") ? !1 : (x.event.add(this, "click._submit keypress._submit",
            function(e) {
                var n = e.target,
                r = x.nodeName(n, "input") || x.nodeName(n, "button") ? n.form: t;
                r && !x._data(r, "submitBubbles") && (x.event.add(r, "submit._submit",
                function(e) {
                    e._submit_bubble = !0
                }), x._data(r, "submitBubbles", !0))
            }), t)
        },
        postDispatch: function(e) {
            e._submit_bubble && (delete e._submit_bubble, this.parentNode && !e.isTrigger && x.event.simulate("submit", this.parentNode, e, !0))
        },
        teardown: function() {
            return x.nodeName(this, "form") ? !1 : (x.event.remove(this, "._submit"), t)
        }
    }),
    x.support.changeBubbles || (x.event.special.change = {
        setup: function() {
            return Z.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (x.event.add(this, "propertychange._change",
            function(e) {
                "checked" === e.originalEvent.propertyName && (this._just_changed = !0)
            }), x.event.add(this, "click._change",
            function(e) {
                this._just_changed && !e.isTrigger && (this._just_changed = !1),
                x.event.simulate("change", this, e, !0)
            })), !1) : (x.event.add(this, "beforeactivate._change",
            function(e) {
                var t = e.target;
                Z.test(t.nodeName) && !x._data(t, "changeBubbles") && (x.event.add(t, "change._change",
                function(e) { ! this.parentNode || e.isSimulated || e.isTrigger || x.event.simulate("change", this.parentNode, e, !0)
                }), x._data(t, "changeBubbles", !0))
            }), t)
        },
        handle: function(e) {
            var n = e.target;
            return this !== n || e.isSimulated || e.isTrigger || "radio" !== n.type && "checkbox" !== n.type ? e.handleObj.handler.apply(this, arguments) : t
        },
        teardown: function() {
            return x.event.remove(this, "._change"),
            !Z.test(this.nodeName)
        }
    }),
    x.support.focusinBubbles || x.each({
        focus: "focusin",
        blur: "focusout"
    },
    function(e, t) {
        var n = 0,
        r = function(e) {
            x.event.simulate(t, e.target, x.event.fix(e), !0)
        };
        x.event.special[t] = {
            setup: function() {
                0 === n++&&a.addEventListener(e, r, !0)
            },
            teardown: function() {
                0 === --n && a.removeEventListener(e, r, !0)
            }
        }
    }),
    x.fn.extend({
        on: function(e, n, r, i, o) {
            var a, s;
            if ("object" == typeof e) {
                "string" != typeof n && (r = r || n, n = t);
                for (a in e) {
                    this.on(a, n, r, e[a], o)
                }
                return this
            }
            if (null == r && null == i ? (i = n, r = n = t) : null == i && ("string" == typeof n ? (i = r, r = t) : (i = r, r = n, n = t)), i === !1) {
                i = ot
            } else {
                if (!i) {
                    return this
                }
            }
            return 1 === o && (s = i, i = function(e) {
                return x().off(e),
                s.apply(this, arguments)
            },
            i.guid = s.guid || (s.guid = x.guid++)),
            this.each(function() {
                x.event.add(this, e, i, r, n)
            })
        },
        one: function(e, t, n, r) {
            return this.on(e, t, n, r, 1)
        },
        off: function(e, n, r) {
            var i, o;
            if (e && e.preventDefault && e.handleObj) {
                return i = e.handleObj,
                x(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace: i.origType, i.selector, i.handler),
                this
            }
            if ("object" == typeof e) {
                for (o in e) {
                    this.off(o, n, e[o])
                }
                return this
            }
            return (n === !1 || "function" == typeof n) && (r = n, n = t),
            r === !1 && (r = ot),
            this.each(function() {
                x.event.remove(this, e, r, n)
            })
        },
        trigger: function(e, t) {
            return this.each(function() {
                x.event.trigger(e, t, this)
            })
        },
        triggerHandler: function(e, n) {
            var r = this[0];
            return r ? x.event.trigger(e, n, r, !0) : t
        }
    });
    var st = /^.[^:#\[\.,]*$/,
    lt = /^(?:parents|prev(?:Until|All))/,
    ut = x.expr.match.needsContext,
    ct = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    x.fn.extend({
        find: function(e) {
            var t, n = [],
            r = this,
            i = r.length;
            if ("string" != typeof e) {
                return this.pushStack(x(e).filter(function() {
                    for (t = 0; i > t; t++) {
                        if (x.contains(r[t], this)) {
                            return ! 0
                        }
                    }
                }))
            }
            for (t = 0; i > t; t++) {
                x.find(e, r[t], n)
            }
            return n = this.pushStack(i > 1 ? x.unique(n) : n),
            n.selector = this.selector ? this.selector + " " + e: e,
            n
        },
        has: function(e) {
            var t, n = x(e, this),
            r = n.length;
            return this.filter(function() {
                for (t = 0; r > t; t++) {
                    if (x.contains(this, n[t])) {
                        return ! 0
                    }
                }
            })
        },
        not: function(e) {
            return this.pushStack(ft(this, e || [], !0))
        },
        filter: function(e) {
            return this.pushStack(ft(this, e || [], !1))
        },
        is: function(e) {
            return !! ft(this, "string" == typeof e && ut.test(e) ? x(e) : e || [], !1).length
        },
        closest: function(e, t) {
            var n, r = 0,
            i = this.length,
            o = [],
            a = ut.test(e) || "string" != typeof e ? x(e, t || this.context) : 0;
            for (; i > r; r++) {
                for (n = this[r]; n && n !== t; n = n.parentNode) {
                    if (11 > n.nodeType && (a ? a.index(n) > -1 : 1 === n.nodeType && x.find.matchesSelector(n, e))) {
                        n = o.push(n);
                        break
                    }
                }
            }
            return this.pushStack(o.length > 1 ? x.unique(o) : o)
        },
        index: function(e) {
            return e ? "string" == typeof e ? x.inArray(this[0], x(e)) : x.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length: -1
        },
        add: function(e, t) {
            var n = "string" == typeof e ? x(e, t) : x.makeArray(e && e.nodeType ? [e] : e),
            r = x.merge(this.get(), n);
            return this.pushStack(x.unique(r))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject: this.prevObject.filter(e))
        }
    });
    function pt(e, t) {
        do {
            e = e[t]
        } while ( e && 1 !== e . nodeType );
        return e
    }
    x.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t: null
        },
        parents: function(e) {
            return x.dir(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
            return x.dir(e, "parentNode", n)
        },
        next: function(e) {
            return pt(e, "nextSibling")
        },
        prev: function(e) {
            return pt(e, "previousSibling")
        },
        nextAll: function(e) {
            return x.dir(e, "nextSibling")
        },
        prevAll: function(e) {
            return x.dir(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
            return x.dir(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
            return x.dir(e, "previousSibling", n)
        },
        siblings: function(e) {
            return x.sibling((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return x.sibling(e.firstChild)
        },
        contents: function(e) {
            return x.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document: x.merge([], e.childNodes)
        }
    },
    function(e, t) {
        x.fn[e] = function(n, r) {
            var i = x.map(this, t, n);
            return "Until" !== e.slice( - 5) && (r = n),
            r && "string" == typeof r && (i = x.filter(r, i)),
            this.length > 1 && (ct[e] || (i = x.unique(i)), lt.test(e) && (i = i.reverse())),
            this.pushStack(i)
        }
    }),
    x.extend({
        filter: function(e, t, n) {
            var r = t[0];
            return n && (e = ":not(" + e + ")"),
            1 === t.length && 1 === r.nodeType ? x.find.matchesSelector(r, e) ? [r] : [] : x.find.matches(e, x.grep(t,
            function(e) {
                return 1 === e.nodeType
            }))
        },
        dir: function(e, n, r) {
            var i = [],
            o = e[n];
            while (o && 9 !== o.nodeType && (r === t || 1 !== o.nodeType || !x(o).is(r))) {
                1 === o.nodeType && i.push(o),
                o = o[n]
            }
            return i
        },
        sibling: function(e, t) {
            var n = [];
            for (; e; e = e.nextSibling) {
                1 === e.nodeType && e !== t && n.push(e)
            }
            return n
        }
    });
    function ft(e, t, n) {
        if (x.isFunction(t)) {
            return x.grep(e,
            function(e, r) {
                return !! t.call(e, r, e) !== n
            })
        }
        if (t.nodeType) {
            return x.grep(e,
            function(e) {
                return e === t !== n
            })
        }
        if ("string" == typeof t) {
            if (st.test(t)) {
                return x.filter(t, e, n)
            }
            t = x.filter(t, e)
        }
        return x.grep(e,
        function(e) {
            return x.inArray(e, t) >= 0 !== n
        })
    }
    function dt(e) {
        var t = ht.split("|"),
        n = e.createDocumentFragment();
        if (n.createElement) {
            while (t.length) {
                n.createElement(t.pop())
            }
        }
        return n
    }
    var ht = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
    gt = / jQuery\d+="(?:null|\d+)"/g,
    mt = RegExp("<(?:" + ht + ")[\\s/>]", "i"),
    yt = /^\s+/,
    vt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
    bt = /<([\w:]+)/,
    xt = /<tbody/i,
    wt = /<|&#?\w+;/,
    Tt = /<(?:script|style|link)/i,
    Ct = /^(?:checkbox|radio)$/i,
    Nt = /checked\s*(?:[^=]|=\s*.checked.)/i,
    kt = /^$|\/(?:java|ecma)script/i,
    Et = /^true\/(.*)/,
    St = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
    At = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        legend: [1, "<fieldset>", "</fieldset>"],
        area: [1, "<map>", "</map>"],
        param: [1, "<object>", "</object>"],
        thead: [1, "<table>", "</table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: x.support.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
    },
    jt = dt(a),
    Dt = jt.appendChild(a.createElement("div"));
    At.optgroup = At.option,
    At.tbody = At.tfoot = At.colgroup = At.caption = At.thead,
    At.th = At.td,
    x.fn.extend({
        text: function(e) {
            return x.access(this,
            function(e) {
                return e === t ? x.text(this) : this.empty().append((this[0] && this[0].ownerDocument || a).createTextNode(e))
            },
            null, e, arguments.length)
        },
        append: function() {
            return this.domManip(arguments,
            function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = Lt(this, e);
                    t.appendChild(e)
                }
            })
        },
        prepend: function() {
            return this.domManip(arguments,
            function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = Lt(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function() {
            return this.domManip(arguments,
            function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function() {
            return this.domManip(arguments,
            function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        remove: function(e, t) {
            var n, r = e ? x.filter(e, this) : this,
            i = 0;
            for (; null != (n = r[i]); i++) {
                t || 1 !== n.nodeType || x.cleanData(Ft(n)),
                n.parentNode && (t && x.contains(n.ownerDocument, n) && _t(Ft(n, "script")), n.parentNode.removeChild(n))
            }
            return this
        },
        empty: function() {
            var e, t = 0;
            for (; null != (e = this[t]); t++) {
                1 === e.nodeType && x.cleanData(Ft(e, !1));
                while (e.firstChild) {
                    e.removeChild(e.firstChild)
                }
                e.options && x.nodeName(e, "select") && (e.options.length = 0)
            }
            return this
        },
        clone: function(e, t) {
            return e = null == e ? !1 : e,
            t = null == t ? e: t,
            this.map(function() {
                return x.clone(this, e, t)
            })
        },
        html: function(e) {
            return x.access(this,
            function(e) {
                var n = this[0] || {},
                r = 0,
                i = this.length;
                if (e === t) {
                    return 1 === n.nodeType ? n.innerHTML.replace(gt, "") : t
                }
                if (! ("string" != typeof e || Tt.test(e) || !x.support.htmlSerialize && mt.test(e) || !x.support.leadingWhitespace && yt.test(e) || At[(bt.exec(e) || ["", ""])[1].toLowerCase()])) {
                    e = e.replace(vt, "<$1></$2>");
                    try {
                        for (; i > r; r++) {
                            n = this[r] || {},
                            1 === n.nodeType && (x.cleanData(Ft(n, !1)), n.innerHTML = e)
                        }
                        n = 0
                    } catch(o) {}
                }
                n && this.empty().append(e)
            },
            null, e, arguments.length)
        },
        replaceWith: function() {
            var e = x.map(this,
            function(e) {
                return [e.nextSibling, e.parentNode]
            }),
            t = 0;
            return this.domManip(arguments,
            function(n) {
                var r = e[t++],
                i = e[t++];
                i && (r && r.parentNode !== i && (r = this.nextSibling), x(this).remove(), i.insertBefore(n, r))
            },
            !0),
            t ? this: this.remove()
        },
        detach: function(e) {
            return this.remove(e, !0)
        },
        domManip: function(e, t, n) {
            e = d.apply([], e);
            var r, i, o, a, s, l, u = 0,
            c = this.length,
            p = this,
            f = c - 1,
            h = e[0],
            g = x.isFunction(h);
            if (g || !(1 >= c || "string" != typeof h || x.support.checkClone) && Nt.test(h)) {
                return this.each(function(r) {
                    var i = p.eq(r);
                    g && (e[0] = h.call(this, r, i.html())),
                    i.domManip(e, t, n)
                })
            }
            if (c && (l = x.buildFragment(e, this[0].ownerDocument, !1, !n && this), r = l.firstChild, 1 === l.childNodes.length && (l = r), r)) {
                for (a = x.map(Ft(l, "script"), Ht), o = a.length; c > u; u++) {
                    i = l,
                    u !== f && (i = x.clone(i, !0, !0), o && x.merge(a, Ft(i, "script"))),
                    t.call(this[u], i, u)
                }
                if (o) {
                    for (s = a[a.length - 1].ownerDocument, x.map(a, qt), u = 0; o > u; u++) {
                        i = a[u],
                        kt.test(i.type || "") && !x._data(i, "globalEval") && x.contains(s, i) && (i.src ? x._evalUrl(i.src) : x.globalEval((i.text || i.textContent || i.innerHTML || "").replace(St, "")))
                    }
                }
                l = r = null
            }
            return this
        }
    });
    function Lt(e, t) {
        return x.nodeName(e, "table") && x.nodeName(1 === t.nodeType ? t: t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
    }
    function Ht(e) {
        return e.type = (null !== x.find.attr(e, "type")) + "/" + e.type,
        e
    }
    function qt(e) {
        var t = Et.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"),
        e
    }
    function _t(e, t) {
        var n, r = 0;
        for (; null != (n = e[r]); r++) {
            x._data(n, "globalEval", !t || x._data(t[r], "globalEval"))
        }
    }
    function Mt(e, t) {
        if (1 === t.nodeType && x.hasData(e)) {
            var n, r, i, o = x._data(e),
            a = x._data(t, o),
            s = o.events;
            if (s) {
                delete a.handle,
                a.events = {};
                for (n in s) {
                    for (r = 0, i = s[n].length; i > r; r++) {
                        x.event.add(t, n, s[n][r])
                    }
                }
            }
            a.data && (a.data = x.extend({},
            a.data))
        }
    }
    function Ot(e, t) {
        var n, r, i;
        if (1 === t.nodeType) {
            if (n = t.nodeName.toLowerCase(), !x.support.noCloneEvent && t[x.expando]) {
                i = x._data(t);
                for (r in i.events) {
                    x.removeEvent(t, r, i.handle)
                }
                t.removeAttribute(x.expando)
            }
            "script" === n && t.text !== e.text ? (Ht(t).text = e.text, qt(t)) : "object" === n ? (t.parentNode && (t.outerHTML = e.outerHTML), x.support.html5Clone && e.innerHTML && !x.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === n && Ct.test(e.type) ? (t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value = e.value)) : "option" === n ? t.defaultSelected = t.selected = e.defaultSelected: ("input" === n || "textarea" === n) && (t.defaultValue = e.defaultValue)
        }
    }
    x.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    },
    function(e, t) {
        x.fn[e] = function(e) {
            var n, r = 0,
            i = [],
            o = x(e),
            a = o.length - 1;
            for (; a >= r; r++) {
                n = r === a ? this: this.clone(!0),
                x(o[r])[t](n),
                h.apply(i, n.get())
            }
            return this.pushStack(i)
        }
    });
    function Ft(e, n) {
        var r, o, a = 0,
        s = typeof e.getElementsByTagName !== i ? e.getElementsByTagName(n || "*") : typeof e.querySelectorAll !== i ? e.querySelectorAll(n || "*") : t;
        if (!s) {
            for (s = [], r = e.childNodes || e; null != (o = r[a]); a++) { ! n || x.nodeName(o, n) ? s.push(o) : x.merge(s, Ft(o, n))
            }
        }
        return n === t || n && x.nodeName(e, n) ? x.merge([e], s) : s
    }
    function Bt(e) {
        Ct.test(e.type) && (e.defaultChecked = e.checked)
    }
    x.extend({
        clone: function(e, t, n) {
            var r, i, o, a, s, l = x.contains(e.ownerDocument, e);
            if (x.support.html5Clone || x.isXMLDoc(e) || !mt.test("<" + e.nodeName + ">") ? o = e.cloneNode(!0) : (Dt.innerHTML = e.outerHTML, Dt.removeChild(o = Dt.firstChild)), !(x.support.noCloneEvent && x.support.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || x.isXMLDoc(e))) {
                for (r = Ft(o), s = Ft(e), a = 0; null != (i = s[a]); ++a) {
                    r[a] && Ot(i, r[a])
                }
            }
            if (t) {
                if (n) {
                    for (s = s || Ft(e), r = r || Ft(o), a = 0; null != (i = s[a]); a++) {
                        Mt(i, r[a])
                    }
                } else {
                    Mt(e, o)
                }
            }
            return r = Ft(o, "script"),
            r.length > 0 && _t(r, !l && Ft(e, "script")),
            r = s = i = null,
            o
        },
        buildFragment: function(e, t, n, r) {
            var i, o, a, s, l, u, c, p = e.length,
            f = dt(t),
            d = [],
            h = 0;
            for (; p > h; h++) {
                if (o = e[h], o || 0 === o) {
                    if ("object" === x.type(o)) {
                        x.merge(d, o.nodeType ? [o] : o)
                    } else {
                        if (wt.test(o)) {
                            s = s || f.appendChild(t.createElement("div")),
                            l = (bt.exec(o) || ["", ""])[1].toLowerCase(),
                            c = At[l] || At._default,
                            s.innerHTML = c[1] + o.replace(vt, "<$1></$2>") + c[2],
                            i = c[0];
                            while (i--) {
                                s = s.lastChild
                            }
                            if (!x.support.leadingWhitespace && yt.test(o) && d.push(t.createTextNode(yt.exec(o)[0])), !x.support.tbody) {
                                o = "table" !== l || xt.test(o) ? "<table>" !== c[1] || xt.test(o) ? 0 : s: s.firstChild,
                                i = o && o.childNodes.length;
                                while (i--) {
                                    x.nodeName(u = o.childNodes[i], "tbody") && !u.childNodes.length && o.removeChild(u)
                                }
                            }
                            x.merge(d, s.childNodes),
                            s.textContent = "";
                            while (s.firstChild) {
                                s.removeChild(s.firstChild)
                            }
                            s = f.lastChild
                        } else {
                            d.push(t.createTextNode(o))
                        }
                    }
                }
            }
            s && f.removeChild(s),
            x.support.appendChecked || x.grep(Ft(d, "input"), Bt),
            h = 0;
            while (o = d[h++]) {
                if ((!r || -1 === x.inArray(o, r)) && (a = x.contains(o.ownerDocument, o), s = Ft(f.appendChild(o), "script"), a && _t(s), n)) {
                    i = 0;
                    while (o = s[i++]) {
                        kt.test(o.type || "") && n.push(o)
                    }
                }
            }
            return s = null,
            f
        },
        cleanData: function(e, t) {
            var n, r, o, a, s = 0,
            l = x.expando,
            u = x.cache,
            c = x.support.deleteExpando,
            f = x.event.special;
            for (; null != (n = e[s]); s++) {
                if ((t || x.acceptData(n)) && (o = n[l], a = o && u[o])) {
                    if (a.events) {
                        for (r in a.events) {
                            f[r] ? x.event.remove(n, r) : x.removeEvent(n, r, a.handle)
                        }
                    }
                    u[o] && (delete u[o], c ? delete n[l] : typeof n.removeAttribute !== i ? n.removeAttribute(l) : n[l] = null, p.push(o))
                }
            }
        },
        _evalUrl: function(e) {
            return x.ajax({
                url: e,
                type: "GET",
                dataType: "script",
                async: !1,
                global: !1,
                "throws": !0
            })
        }
    }),
    x.fn.extend({
        wrapAll: function(e) {
            if (x.isFunction(e)) {
                return this.each(function(t) {
                    x(this).wrapAll(e.call(this, t))
                })
            }
            if (this[0]) {
                var t = x(e, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && t.insertBefore(this[0]),
                t.map(function() {
                    var e = this;
                    while (e.firstChild && 1 === e.firstChild.nodeType) {
                        e = e.firstChild
                    }
                    return e
                }).append(this)
            }
            return this
        },
        wrapInner: function(e) {
            return x.isFunction(e) ? this.each(function(t) {
                x(this).wrapInner(e.call(this, t))
            }) : this.each(function() {
                var t = x(this),
                n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            })
        },
        wrap: function(e) {
            var t = x.isFunction(e);
            return this.each(function(n) {
                x(this).wrapAll(t ? e.call(this, n) : e)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                x.nodeName(this, "body") || x(this).replaceWith(this.childNodes)
            }).end()
        }
    });
    var Pt, Rt, Wt, $t = /alpha\([^)]*\)/i,
    It = /opacity\s*=\s*([^)]*)/,
    zt = /^(top|right|bottom|left)$/,
    Xt = /^(none|table(?!-c[ea]).+)/,
    Ut = /^margin/,
    Vt = RegExp("^(" + w + ")(.*)$", "i"),
    Yt = RegExp("^(" + w + ")(?!px)[a-z%]+$", "i"),
    Jt = RegExp("^([+-])=(" + w + ")", "i"),
    Gt = {
        BODY: "block"
    },
    Qt = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    },
    Kt = {
        letterSpacing: 0,
        fontWeight: 400
    },
    Zt = ["Top", "Right", "Bottom", "Left"],
    en = ["Webkit", "O", "Moz", "ms"];
    function tn(e, t) {
        if (t in e) {
            return t
        }
        var n = t.charAt(0).toUpperCase() + t.slice(1),
        r = t,
        i = en.length;
        while (i--) {
            if (t = en[i] + n, t in e) {
                return t
            }
        }
        return r
    }
    function nn(e, t) {
        return e = t || e,
        "none" === x.css(e, "display") || !x.contains(e.ownerDocument, e)
    }
    function rn(e, t) {
        var n, r, i, o = [],
        a = 0,
        s = e.length;
        for (; s > a; a++) {
            r = e[a],
            r.style && (o[a] = x._data(r, "olddisplay"), n = r.style.display, t ? (o[a] || "none" !== n || (r.style.display = ""), "" === r.style.display && nn(r) && (o[a] = x._data(r, "olddisplay", ln(r.nodeName)))) : o[a] || (i = nn(r), (n && "none" !== n || !i) && x._data(r, "olddisplay", i ? n: x.css(r, "display"))))
        }
        for (a = 0; s > a; a++) {
            r = e[a],
            r.style && (t && "none" !== r.style.display && "" !== r.style.display || (r.style.display = t ? o[a] || "": "none"))
        }
        return e
    }
    x.fn.extend({
        css: function(e, n) {
            return x.access(this,
            function(e, n, r) {
                var i, o, a = {},
                s = 0;
                if (x.isArray(n)) {
                    for (o = Rt(e), i = n.length; i > s; s++) {
                        a[n[s]] = x.css(e, n[s], !1, o)
                    }
                    return a
                }
                return r !== t ? x.style(e, n, r) : x.css(e, n)
            },
            e, n, arguments.length > 1)
        },
        show: function() {
            return rn(this, !0)
        },
        hide: function() {
            return rn(this)
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                nn(this) ? x(this).show() : x(this).hide()
            })
        }
    }),
    x.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = Wt(e, "opacity");
                        return "" === n ? "1": n
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
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": x.support.cssFloat ? "cssFloat": "styleFloat"
        },
        style: function(e, n, r, i) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var o, a, s, l = x.camelCase(n),
                u = e.style;
                if (n = x.cssProps[l] || (x.cssProps[l] = tn(u, l)), s = x.cssHooks[n] || x.cssHooks[l], r === t) {
                    return s && "get" in s && (o = s.get(e, !1, i)) !== t ? o: u[n]
                }
                if (a = typeof r, "string" === a && (o = Jt.exec(r)) && (r = (o[1] + 1) * o[2] + parseFloat(x.css(e, n)), a = "number"), !(null == r || "number" === a && isNaN(r) || ("number" !== a || x.cssNumber[l] || (r += "px"), x.support.clearCloneStyle || "" !== r || 0 !== n.indexOf("background") || (u[n] = "inherit"), s && "set" in s && (r = s.set(e, r, i)) === t))) {
                    try {
                        u[n] = r
                    } catch(c) {}
                }
            }
        },
        css: function(e, n, r, i) {
            var o, a, s, l = x.camelCase(n);
            return n = x.cssProps[l] || (x.cssProps[l] = tn(e.style, l)),
            s = x.cssHooks[n] || x.cssHooks[l],
            s && "get" in s && (a = s.get(e, !0, r)),
            a === t && (a = Wt(e, n, i)),
            "normal" === a && n in Kt && (a = Kt[n]),
            "" === r || r ? (o = parseFloat(a), r === !0 || x.isNumeric(o) ? o || 0 : a) : a
        }
    }),
    e.getComputedStyle ? (Rt = function(t) {
        return e.getComputedStyle(t, null)
    },
    Wt = function(e, n, r) {
        var i, o, a, s = r || Rt(e),
        l = s ? s.getPropertyValue(n) || s[n] : t,
        u = e.style;
        return s && ("" !== l || x.contains(e.ownerDocument, e) || (l = x.style(e, n)), Yt.test(l) && Ut.test(n) && (i = u.width, o = u.minWidth, a = u.maxWidth, u.minWidth = u.maxWidth = u.width = l, l = s.width, u.width = i, u.minWidth = o, u.maxWidth = a)),
        l
    }) : a.documentElement.currentStyle && (Rt = function(e) {
        return e.currentStyle
    },
    Wt = function(e, n, r) {
        var i, o, a, s = r || Rt(e),
        l = s ? s[n] : t,
        u = e.style;
        return null == l && u && u[n] && (l = u[n]),
        Yt.test(l) && !zt.test(n) && (i = u.left, o = e.runtimeStyle, a = o && o.left, a && (o.left = e.currentStyle.left), u.left = "fontSize" === n ? "1em": l, l = u.pixelLeft + "px", u.left = i, a && (o.left = a)),
        "" === l ? "auto": l
    });
    function on(e, t, n) {
        var r = Vt.exec(t);
        return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t
    }
    function an(e, t, n, r, i) {
        var o = n === (r ? "border": "content") ? 4 : "width" === t ? 1 : 0,
        a = 0;
        for (; 4 > o; o += 2) {
            "margin" === n && (a += x.css(e, n + Zt[o], !0, i)),
            r ? ("content" === n && (a -= x.css(e, "padding" + Zt[o], !0, i)), "margin" !== n && (a -= x.css(e, "border" + Zt[o] + "Width", !0, i))) : (a += x.css(e, "padding" + Zt[o], !0, i), "padding" !== n && (a += x.css(e, "border" + Zt[o] + "Width", !0, i)))
        }
        return a
    }
    function sn(e, t, n) {
        var r = !0,
        i = "width" === t ? e.offsetWidth: e.offsetHeight,
        o = Rt(e),
        a = x.support.boxSizing && "border-box" === x.css(e, "boxSizing", !1, o);
        if (0 >= i || null == i) {
            if (i = Wt(e, t, o), (0 > i || null == i) && (i = e.style[t]), Yt.test(i)) {
                return i
            }
            r = a && (x.support.boxSizingReliable || i === e.style[t]),
            i = parseFloat(i) || 0
        }
        return i + an(e, t, n || (a ? "border": "content"), r, o) + "px"
    }
    function ln(e) {
        var t = a,
        n = Gt[e];
        return n || (n = un(e, t), "none" !== n && n || (Pt = (Pt || x("<iframe frameborder='0' width='0' height='0'/>").css("cssText", "display:block !important")).appendTo(t.documentElement), t = (Pt[0].contentWindow || Pt[0].contentDocument).document, t.write("<!doctype html><html><body>"), t.close(), n = un(e, t), Pt.detach()), Gt[e] = n),
        n
    }
    function un(e, t) {
        var n = x(t.createElement(e)).appendTo(t.body),
        r = x.css(n[0], "display");
        return n.remove(),
        r
    }
    x.each(["height", "width"],
    function(e, n) {
        x.cssHooks[n] = {
            get: function(e, r, i) {
                return r ? 0 === e.offsetWidth && Xt.test(x.css(e, "display")) ? x.swap(e, Qt,
                function() {
                    return sn(e, n, i)
                }) : sn(e, n, i) : t
            },
            set: function(e, t, r) {
                var i = r && Rt(e);
                return on(e, t, r ? an(e, n, r, x.support.boxSizing && "border-box" === x.css(e, "boxSizing", !1, i), i) : 0)
            }
        }
    }),
    x.support.opacity || (x.cssHooks.opacity = {
        get: function(e, t) {
            return It.test((t && e.currentStyle ? e.currentStyle.filter: e.style.filter) || "") ? 0.01 * parseFloat(RegExp.$1) + "": t ? "1": ""
        },
        set: function(e, t) {
            var n = e.style,
            r = e.currentStyle,
            i = x.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")": "",
            o = r && r.filter || n.filter || "";
            n.zoom = 1,
            (t >= 1 || "" === t) && "" === x.trim(o.replace($t, "")) && n.removeAttribute && (n.removeAttribute("filter"), "" === t || r && !r.filter) || (n.filter = $t.test(o) ? o.replace($t, i) : o + " " + i)
        }
    }),
    x(function() {
        x.support.reliableMarginRight || (x.cssHooks.marginRight = {
            get: function(e, n) {
                return n ? x.swap(e, {
                    display: "inline-block"
                },
                Wt, [e, "marginRight"]) : t
            }
        }),
        !x.support.pixelPosition && x.fn.position && x.each(["top", "left"],
        function(e, n) {
            x.cssHooks[n] = {
                get: function(e, r) {
                    return r ? (r = Wt(e, n), Yt.test(r) ? x(e).position()[n] + "px": r) : t
                }
            }
        })
    }),
    x.expr && x.expr.filters && (x.expr.filters.hidden = function(e) {
        return 0 >= e.offsetWidth && 0 >= e.offsetHeight || !x.support.reliableHiddenOffsets && "none" === (e.style && e.style.display || x.css(e, "display"))
    },
    x.expr.filters.visible = function(e) {
        return ! x.expr.filters.hidden(e)
    }),
    x.each({
        margin: "",
        padding: "",
        border: "Width"
    },
    function(e, t) {
        x.cssHooks[e + t] = {
            expand: function(n) {
                var r = 0,
                i = {},
                o = "string" == typeof n ? n.split(" ") : [n];
                for (; 4 > r; r++) {
                    i[e + Zt[r] + t] = o[r] || o[r - 2] || o[0]
                }
                return i
            }
        },
        Ut.test(e) || (x.cssHooks[e + t].set = on)
    });
    var cn = /%20/g,
    pn = /\[\]$/,
    fn = /\r?\n/g,
    dn = /^(?:submit|button|image|reset|file)$/i,
    hn = /^(?:input|select|textarea|keygen)/i;
    x.fn.extend({
        serialize: function() {
            return x.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var e = x.prop(this, "elements");
                return e ? x.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name && !x(this).is(":disabled") && hn.test(this.nodeName) && !dn.test(e) && (this.checked || !Ct.test(e))
            }).map(function(e, t) {
                var n = x(this).val();
                return null == n ? null: x.isArray(n) ? x.map(n,
                function(e) {
                    return {
                        name: t.name,
                        value: e.replace(fn, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(fn, "\r\n")
                }
            }).get()
        }
    }),
    x.param = function(e, n) {
        var r, i = [],
        o = function(e, t) {
            t = x.isFunction(t) ? t() : null == t ? "": t,
            i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
        };
        if (n === t && (n = x.ajaxSettings && x.ajaxSettings.traditional), x.isArray(e) || e.jquery && !x.isPlainObject(e)) {
            x.each(e,
            function() {
                o(this.name, this.value)
            })
        } else {
            for (r in e) {
                gn(r, e[r], n, o)
            }
        }
        return i.join("&").replace(cn, "+")
    };
    function gn(e, t, n, r) {
        var i;
        if (x.isArray(t)) {
            x.each(t,
            function(t, i) {
                n || pn.test(e) ? r(e, i) : gn(e + "[" + ("object" == typeof i ? t: "") + "]", i, n, r)
            })
        } else {
            if (n || "object" !== x.type(t)) {
                r(e, t)
            } else {
                for (i in t) {
                    gn(e + "[" + i + "]", t[i], n, r)
                }
            }
        }
    }
    x.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),
    function(e, t) {
        x.fn[t] = function(e, n) {
            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
        }
    }),
    x.fn.extend({
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        },
        bind: function(e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        delegate: function(e, t, n, r) {
            return this.on(t, e, n, r)
        },
        undelegate: function(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        }
    });
    var mn, yn, vn = x.now(),
    bn = /\?/,
    xn = /#.*$/,
    wn = /([?&])_=[^&]*/,
    Tn = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
    Cn = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
    Nn = /^(?:GET|HEAD)$/,
    kn = /^\/\//,
    En = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,
    Sn = x.fn.load,
    An = {},
    jn = {},
    Dn = "*/".concat("*");
    try {
        yn = o.href
    } catch(Ln) {
        yn = a.createElement("a"),
        yn.href = "",
        yn = yn.href
    }
    mn = En.exec(yn.toLowerCase()) || [];
    function Hn(e) {
        return function(t, n) {
            "string" != typeof t && (n = t, t = "*");
            var r, i = 0,
            o = t.toLowerCase().match(T) || [];
            if (x.isFunction(n)) {
                while (r = o[i++]) {
                    "+" === r[0] ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
                }
            }
        }
    }
    function qn(e, n, r, i) {
        var o = {},
        a = e === jn;
        function s(l) {
            var u;
            return o[l] = !0,
            x.each(e[l] || [],
            function(e, l) {
                var c = l(n, r, i);
                return "string" != typeof c || a || o[c] ? a ? !(u = c) : t: (n.dataTypes.unshift(c), s(c), !1)
            }),
            u
        }
        return s(n.dataTypes[0]) || !o["*"] && s("*")
    }
    function _n(e, n) {
        var r, i, o = x.ajaxSettings.flatOptions || {};
        for (i in n) {
            n[i] !== t && ((o[i] ? e: r || (r = {}))[i] = n[i])
        }
        return r && x.extend(!0, e, r),
        e
    }
    x.fn.load = function(e, n, r) {
        if ("string" != typeof e && Sn) {
            return Sn.apply(this, arguments)
        }
        var i, o, a, s = this,
        l = e.indexOf(" ");
        return l >= 0 && (i = e.slice(l, e.length), e = e.slice(0, l)),
        x.isFunction(n) ? (r = n, n = t) : n && "object" == typeof n && (a = "POST"),
        s.length > 0 && x.ajax({
            url: e,
            type: a,
            dataType: "html",
            data: n
        }).done(function(e) {
            o = arguments,
            s.html(i ? x("<div>").append(x.parseHTML(e)).find(i) : e)
        }).complete(r &&
        function(e, t) {
            s.each(r, o || [e.responseText, t, e])
        }),
        this
    },
    x.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"],
    function(e, t) {
        x.fn[t] = function(e) {
            return this.on(t, e)
        }
    }),
    x.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: yn,
            type: "GET",
            isLocal: Cn.test(mn[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Dn,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": x.parseJSON,
                "text xml": x.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? _n(_n(e, x.ajaxSettings), t) : _n(x.ajaxSettings, e)
        },
        ajaxPrefilter: Hn(An),
        ajaxTransport: Hn(jn),
        ajax: function(e, n) {
            "object" == typeof e && (n = e, e = t),
            n = n || {};
            var r, i, o, a, s, l, u, c, p = x.ajaxSetup({},
            n),
            f = p.context || p,
            d = p.context && (f.nodeType || f.jquery) ? x(f) : x.event,
            h = x.Deferred(),
            g = x.Callbacks("once memory"),
            m = p.statusCode || {},
            y = {},
            v = {},
            b = 0,
            w = "canceled",
            C = {
                readyState: 0,
                getResponseHeader: function(e) {
                    var t;
                    if (2 === b) {
                        if (!c) {
                            c = {};
                            while (t = Tn.exec(a)) {
                                c[t[1].toLowerCase()] = t[2]
                            }
                        }
                        t = c[e.toLowerCase()]
                    }
                    return null == t ? null: t
                },
                getAllResponseHeaders: function() {
                    return 2 === b ? a: null
                },
                setRequestHeader: function(e, t) {
                    var n = e.toLowerCase();
                    return b || (e = v[n] = v[n] || e, y[e] = t),
                    this
                },
                overrideMimeType: function(e) {
                    return b || (p.mimeType = e),
                    this
                },
                statusCode: function(e) {
                    var t;
                    if (e) {
                        if (2 > b) {
                            for (t in e) {
                                m[t] = [m[t], e[t]]
                            }
                        } else {
                            C.always(e[C.status])
                        }
                    }
                    return this
                },
                abort: function(e) {
                    var t = e || w;
                    return u && u.abort(t),
                    k(0, t),
                    this
                }
            };
            if (h.promise(C).complete = g.add, C.success = C.done, C.error = C.fail, p.url = ((e || p.url || yn) + "").replace(xn, "").replace(kn, mn[1] + "//"), p.type = n.method || n.type || p.method || p.type, p.dataTypes = x.trim(p.dataType || "*").toLowerCase().match(T) || [""], null == p.crossDomain && (r = En.exec(p.url.toLowerCase()), p.crossDomain = !(!r || r[1] === mn[1] && r[2] === mn[2] && (r[3] || ("http:" === r[1] ? "80": "443")) === (mn[3] || ("http:" === mn[1] ? "80": "443")))), p.data && p.processData && "string" != typeof p.data && (p.data = x.param(p.data, p.traditional)), qn(An, p, n, C), 2 === b) {
                return C
            }
            l = p.global,
            l && 0 === x.active++&&x.event.trigger("ajaxStart"),
            p.type = p.type.toUpperCase(),
            p.hasContent = !Nn.test(p.type),
            o = p.url,
            p.hasContent || (p.data && (o = p.url += (bn.test(o) ? "&": "?") + p.data, delete p.data), p.cache === !1 && (p.url = wn.test(o) ? o.replace(wn, "$1_=" + vn++) : o + (bn.test(o) ? "&": "?") + "_=" + vn++)),
            p.ifModified && (x.lastModified[o] && C.setRequestHeader("If-Modified-Since", x.lastModified[o]), x.etag[o] && C.setRequestHeader("If-None-Match", x.etag[o])),
            (p.data && p.hasContent && p.contentType !== !1 || n.contentType) && C.setRequestHeader("Content-Type", p.contentType),
            C.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + Dn + "; q=0.01": "") : p.accepts["*"]);
            for (i in p.headers) {
                C.setRequestHeader(i, p.headers[i])
            }
            if (p.beforeSend && (p.beforeSend.call(f, C, p) === !1 || 2 === b)) {
                return C.abort()
            }
            w = "abort";
            for (i in {
                success: 1,
                error: 1,
                complete: 1
            }) {
                C[i](p[i])
            }
            if (u = qn(jn, p, n, C)) {
                C.readyState = 1,
                l && d.trigger("ajaxSend", [C, p]),
                p.async && p.timeout > 0 && (s = setTimeout(function() {
                    C.abort("timeout")
                },
                p.timeout));
                try {
                    b = 1,
                    u.send(y, k)
                } catch(N) {
                    if (! (2 > b)) {
                        throw N
                    }
                    k( - 1, N)
                }
            } else {
                k( - 1, "No Transport")
            }
            function k(e, n, r, i) {
                var c, y, v, w, T, N = n;
                2 !== b && (b = 2, s && clearTimeout(s), u = t, a = i || "", C.readyState = e > 0 ? 4 : 0, c = e >= 200 && 300 > e || 304 === e, r && (w = Mn(p, C, r)), w = On(p, w, C, c), c ? (p.ifModified && (T = C.getResponseHeader("Last-Modified"), T && (x.lastModified[o] = T), T = C.getResponseHeader("etag"), T && (x.etag[o] = T)), 204 === e || "HEAD" === p.type ? N = "nocontent": 304 === e ? N = "notmodified": (N = w.state, y = w.data, v = w.error, c = !v)) : (v = N, (e || !N) && (N = "error", 0 > e && (e = 0))), C.status = e, C.statusText = (n || N) + "", c ? h.resolveWith(f, [y, N, C]) : h.rejectWith(f, [C, N, v]), C.statusCode(m), m = t, l && d.trigger(c ? "ajaxSuccess": "ajaxError", [C, p, c ? y: v]), g.fireWith(f, [C, N]), l && (d.trigger("ajaxComplete", [C, p]), --x.active || x.event.trigger("ajaxStop")))
            }
            return C
        },
        getJSON: function(e, t, n) {
            return x.get(e, t, n, "json")
        },
        getScript: function(e, n) {
            return x.get(e, t, n, "script")
        }
    }),
    x.each(["get", "post"],
    function(e, n) {
        x[n] = function(e, r, i, o) {
            return x.isFunction(r) && (o = o || i, i = r, r = t),
            x.ajax({
                url: e,
                type: n,
                dataType: o,
                data: r,
                success: i
            })
        }
    });
    function Mn(e, n, r) {
        var i, o, a, s, l = e.contents,
        u = e.dataTypes;
        while ("*" === u[0]) {
            u.shift(),
            o === t && (o = e.mimeType || n.getResponseHeader("Content-Type"))
        }
        if (o) {
            for (s in l) {
                if (l[s] && l[s].test(o)) {
                    u.unshift(s);
                    break
                }
            }
        }
        if (u[0] in r) {
            a = u[0]
        } else {
            for (s in r) {
                if (!u[0] || e.converters[s + " " + u[0]]) {
                    a = s;
                    break
                }
                i || (i = s)
            }
            a = a || i
        }
        return a ? (a !== u[0] && u.unshift(a), r[a]) : t
    }
    function On(e, t, n, r) {
        var i, o, a, s, l, u = {},
        c = e.dataTypes.slice();
        if (c[1]) {
            for (a in e.converters) {
                u[a.toLowerCase()] = e.converters[a]
            }
        }
        o = c.shift();
        while (o) {
            if (e.responseFields[o] && (n[e.responseFields[o]] = t), !l && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = o, o = c.shift()) {
                if ("*" === o) {
                    o = l
                } else {
                    if ("*" !== l && l !== o) {
                        if (a = u[l + " " + o] || u["* " + o], !a) {
                            for (i in u) {
                                if (s = i.split(" "), s[1] === o && (a = u[l + " " + s[0]] || u["* " + s[0]])) {
                                    a === !0 ? a = u[i] : u[i] !== !0 && (o = s[0], c.unshift(s[1]));
                                    break
                                }
                            }
                        }
                        if (a !== !0) {
                            if (a && e["throws"]) {
                                t = a(t)
                            } else {
                                try {
                                    t = a(t)
                                } catch(p) {
                                    return {
                                        state: "parsererror",
                                        error: a ? p: "No conversion from " + l + " to " + o
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        return {
            state: "success",
            data: t
        }
    }
    x.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function(e) {
                return x.globalEval(e),
                e
            }
        }
    }),
    x.ajaxPrefilter("script",
    function(e) {
        e.cache === t && (e.cache = !1),
        e.crossDomain && (e.type = "GET", e.global = !1)
    }),
    x.ajaxTransport("script",
    function(e) {
        if (e.crossDomain) {
            var n, r = a.head || x("head")[0] || a.documentElement;
            return {
                send: function(t, i) {
                    n = a.createElement("script"),
                    n.async = !0,
                    e.scriptCharset && (n.charset = e.scriptCharset),
                    n.src = e.url,
                    n.onload = n.onreadystatechange = function(e, t) { (t || !n.readyState || /loaded|complete/.test(n.readyState)) && (n.onload = n.onreadystatechange = null, n.parentNode && n.parentNode.removeChild(n), n = null, t || i(200, "success"))
                    },
                    r.insertBefore(n, r.firstChild)
                },
                abort: function() {
                    n && n.onload(t, !0)
                }
            }
        }
    });
    var Fn = [],
    Bn = /(=)\?(?=&|$)|\?\?/;
    x.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = Fn.pop() || x.expando + "_" + vn++;
            return this[e] = !0,
            e
        }
    }),
    x.ajaxPrefilter("json jsonp",
    function(n, r, i) {
        var o, a, s, l = n.jsonp !== !1 && (Bn.test(n.url) ? "url": "string" == typeof n.data && !(n.contentType || "").indexOf("application/x-www-form-urlencoded") && Bn.test(n.data) && "data");
        return l || "jsonp" === n.dataTypes[0] ? (o = n.jsonpCallback = x.isFunction(n.jsonpCallback) ? n.jsonpCallback() : n.jsonpCallback, l ? n[l] = n[l].replace(Bn, "$1" + o) : n.jsonp !== !1 && (n.url += (bn.test(n.url) ? "&": "?") + n.jsonp + "=" + o), n.converters["script json"] = function() {
            return s || x.error(o + " was not called"),
            s[0]
        },
        n.dataTypes[0] = "json", a = e[o], e[o] = function() {
            s = arguments
        },
        i.always(function() {
            e[o] = a,
            n[o] && (n.jsonpCallback = r.jsonpCallback, Fn.push(o)),
            s && x.isFunction(a) && a(s[0]),
            s = a = t
        }), "script") : t
    });
    var Pn, Rn, Wn = 0,
    $n = e.ActiveXObject &&
    function() {
        var e;
        for (e in Pn) {
            Pn[e](t, !0)
        }
    };
    function In() {
        try {
            return new e.XMLHttpRequest
        } catch(t) {}
    }
    function zn() {
        try {
            return new e.ActiveXObject("Microsoft.XMLHTTP")
        } catch(t) {}
    }
    x.ajaxSettings.xhr = e.ActiveXObject ?
    function() {
        return ! this.isLocal && In() || zn()
    }: In,
    Rn = x.ajaxSettings.xhr(),
    x.support.cors = !!Rn && "withCredentials" in Rn,
    Rn = x.support.ajax = !!Rn,
    Rn && x.ajaxTransport(function(n) {
        if (!n.crossDomain || x.support.cors) {
            var r;
            return {
                send: function(i, o) {
                    var a, s, l = n.xhr();
                    if (n.username ? l.open(n.type, n.url, n.async, n.username, n.password) : l.open(n.type, n.url, n.async), n.xhrFields) {
                        for (s in n.xhrFields) {
                            l[s] = n.xhrFields[s]
                        }
                    }
                    n.mimeType && l.overrideMimeType && l.overrideMimeType(n.mimeType),
                    n.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest");
                    try {
                        for (s in i) {
                            l.setRequestHeader(s, i[s])
                        }
                    } catch(u) {}
                    l.send(n.hasContent && n.data || null),
                    r = function(e, i) {
                        var s, u, c, p;
                        try {
                            if (r && (i || 4 === l.readyState)) {
                                if (r = t, a && (l.onreadystatechange = x.noop, $n && delete Pn[a]), i) {
                                    4 !== l.readyState && l.abort()
                                } else {
                                    p = {},
                                    s = l.status,
                                    u = l.getAllResponseHeaders(),
                                    "string" == typeof l.responseText && (p.text = l.responseText);
                                    try {
                                        c = l.statusText
                                    } catch(f) {
                                        c = ""
                                    }
                                    s || !n.isLocal || n.crossDomain ? 1223 === s && (s = 204) : s = p.text ? 200 : 404
                                }
                            }
                        } catch(d) {
                            i || o( - 1, d)
                        }
                        p && o(s, c, p, u)
                    },
                    n.async ? 4 === l.readyState ? setTimeout(r) : (a = ++Wn, $n && (Pn || (Pn = {},
                    x(e).unload($n)), Pn[a] = r), l.onreadystatechange = r) : r()
                },
                abort: function() {
                    r && r(t, !0)
                }
            }
        }
    });
    var Xn, Un, Vn = /^(?:toggle|show|hide)$/,
    Yn = RegExp("^(?:([+-])=|)(" + w + ")([a-z%]*)$", "i"),
    Jn = /queueHooks$/,
    Gn = [nr],
    Qn = {
        "*": [function(e, t) {
            var n = this.createTween(e, t),
            r = n.cur(),
            i = Yn.exec(t),
            o = i && i[3] || (x.cssNumber[e] ? "": "px"),
            a = (x.cssNumber[e] || "px" !== o && +r) && Yn.exec(x.css(n.elem, e)),
            s = 1,
            l = 20;
            if (a && a[3] !== o) {
                o = o || a[3],
                i = i || [],
                a = +r || 1;
                do {
                    s = s || ".5", a /= s, x.style(n.elem, e, a + o)
                } while ( s !== ( s = n . cur () / r) && 1 !== s && --l)
            }
            return i && (a = n.start = +a || +r || 0, n.unit = o, n.end = i[1] ? a + (i[1] + 1) * i[2] : +i[2]),
            n
        }]
    };
    function Kn() {
        return setTimeout(function() {
            Xn = t
        }),
        Xn = x.now()
    }
    function Zn(e, t, n) {
        var r, i = (Qn[t] || []).concat(Qn["*"]),
        o = 0,
        a = i.length;
        for (; a > o; o++) {
            if (r = i[o].call(n, t, e)) {
                return r
            }
        }
    }
    function er(e, t, n) {
        var r, i, o = 0,
        a = Gn.length,
        s = x.Deferred().always(function() {
            delete l.elem
        }),
        l = function() {
            if (i) {
                return ! 1
            }
            var t = Xn || Kn(),
            n = Math.max(0, u.startTime + u.duration - t),
            r = n / u.duration || 0,
            o = 1 - r,
            a = 0,
            l = u.tweens.length;
            for (; l > a; a++) {
                u.tweens[a].run(o)
            }
            return s.notifyWith(e, [u, o, n]),
            1 > o && l ? n: (s.resolveWith(e, [u]), !1)
        },
        u = s.promise({
            elem: e,
            props: x.extend({},
            t),
            opts: x.extend(!0, {
                specialEasing: {}
            },
            n),
            originalProperties: t,
            originalOptions: n,
            startTime: Xn || Kn(),
            duration: n.duration,
            tweens: [],
            createTween: function(t, n) {
                var r = x.Tween(e, u.opts, t, n, u.opts.specialEasing[t] || u.opts.easing);
                return u.tweens.push(r),
                r
            },
            stop: function(t) {
                var n = 0,
                r = t ? u.tweens.length: 0;
                if (i) {
                    return this
                }
                for (i = !0; r > n; n++) {
                    u.tweens[n].run(1)
                }
                return t ? s.resolveWith(e, [u, t]) : s.rejectWith(e, [u, t]),
                this
            }
        }),
        c = u.props;
        for (tr(c, u.opts.specialEasing); a > o; o++) {
            if (r = Gn[o].call(u, e, c, u.opts)) {
                return r
            }
        }
        return x.map(c, Zn, u),
        x.isFunction(u.opts.start) && u.opts.start.call(e, u),
        x.fx.timer(x.extend(l, {
            elem: e,
            anim: u,
            queue: u.opts.queue
        })),
        u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always)
    }
    function tr(e, t) {
        var n, r, i, o, a;
        for (n in e) {
            if (r = x.camelCase(n), i = t[r], o = e[n], x.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), a = x.cssHooks[r], a && "expand" in a) {
                o = a.expand(o),
                delete e[r];
                for (n in o) {
                    n in e || (e[n] = o[n], t[n] = i)
                }
            } else {
                t[r] = i
            }
        }
    }
    x.Animation = x.extend(er, {
        tweener: function(e, t) {
            x.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
            var n, r = 0,
            i = e.length;
            for (; i > r; r++) {
                n = e[r],
                Qn[n] = Qn[n] || [],
                Qn[n].unshift(t)
            }
        },
        prefilter: function(e, t) {
            t ? Gn.unshift(e) : Gn.push(e)
        }
    });
    function nr(e, t, n) {
        var r, i, o, a, s, l, u = this,
        c = {},
        p = e.style,
        f = e.nodeType && nn(e),
        d = x._data(e, "fxshow");
        n.queue || (s = x._queueHooks(e, "fx"), null == s.unqueued && (s.unqueued = 0, l = s.empty.fire, s.empty.fire = function() {
            s.unqueued || l()
        }), s.unqueued++, u.always(function() {
            u.always(function() {
                s.unqueued--,
                x.queue(e, "fx").length || s.empty.fire()
            })
        })),
        1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [p.overflow, p.overflowX, p.overflowY], "inline" === x.css(e, "display") && "none" === x.css(e, "float") && (x.support.inlineBlockNeedsLayout && "inline" !== ln(e.nodeName) ? p.zoom = 1 : p.display = "inline-block")),
        n.overflow && (p.overflow = "hidden", x.support.shrinkWrapBlocks || u.always(function() {
            p.overflow = n.overflow[0],
            p.overflowX = n.overflow[1],
            p.overflowY = n.overflow[2]
        }));
        for (r in t) {
            if (i = t[r], Vn.exec(i)) {
                if (delete t[r], o = o || "toggle" === i, i === (f ? "hide": "show")) {
                    continue
                }
                c[r] = d && d[r] || x.style(e, r)
            }
        }
        if (!x.isEmptyObject(c)) {
            d ? "hidden" in d && (f = d.hidden) : d = x._data(e, "fxshow", {}),
            o && (d.hidden = !f),
            f ? x(e).show() : u.done(function() {
                x(e).hide()
            }),
            u.done(function() {
                var t;
                x._removeData(e, "fxshow");
                for (t in c) {
                    x.style(e, t, c[t])
                }
            });
            for (r in c) {
                a = Zn(f ? d[r] : 0, r, u),
                r in d || (d[r] = a.start, f && (a.end = a.start, a.start = "width" === r || "height" === r ? 1 : 0))
            }
        }
    }
    function rr(e, t, n, r, i) {
        return new rr.prototype.init(e, t, n, r, i)
    }
    x.Tween = rr,
    rr.prototype = {
        constructor: rr,
        init: function(e, t, n, r, i, o) {
            this.elem = e,
            this.prop = n,
            this.easing = i || "swing",
            this.options = t,
            this.start = this.now = this.cur(),
            this.end = r,
            this.unit = o || (x.cssNumber[n] ? "": "px")
        },
        cur: function() {
            var e = rr.propHooks[this.prop];
            return e && e.get ? e.get(this) : rr.propHooks._default.get(this)
        },
        run: function(e) {
            var t, n = rr.propHooks[this.prop];
            return this.pos = t = this.options.duration ? x.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : e,
            this.now = (this.end - this.start) * t + this.start,
            this.options.step && this.options.step.call(this.elem, this.now, this),
            n && n.set ? n.set(this) : rr.propHooks._default.set(this),
            this
        }
    },
    rr.prototype.init.prototype = rr.prototype,
    rr.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = x.css(e.elem, e.prop, ""), t && "auto" !== t ? t: 0) : e.elem[e.prop]
            },
            set: function(e) {
                x.fx.step[e.prop] ? x.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[x.cssProps[e.prop]] || x.cssHooks[e.prop]) ? x.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
            }
        }
    },
    rr.propHooks.scrollTop = rr.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    },
    x.each(["toggle", "show", "hide"],
    function(e, t) {
        var n = x.fn[t];
        x.fn[t] = function(e, r, i) {
            return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(ir(t, !0), e, r, i)
        }
    }),
    x.fn.extend({
        fadeTo: function(e, t, n, r) {
            return this.filter(nn).css("opacity", 0).show().end().animate({
                opacity: t
            },
            e, n, r)
        },
        animate: function(e, t, n, r) {
            var i = x.isEmptyObject(e),
            o = x.speed(t, n, r),
            a = function() {
                var t = er(this, x.extend({},
                e), o); (i || x._data(this, "finish")) && t.stop(!0)
            };
            return a.finish = a,
            i || o.queue === !1 ? this.each(a) : this.queue(o.queue, a)
        },
        stop: function(e, n, r) {
            var i = function(e) {
                var t = e.stop;
                delete e.stop,
                t(r)
            };
            return "string" != typeof e && (r = n, n = e, e = t),
            n && e !== !1 && this.queue(e || "fx", []),
            this.each(function() {
                var t = !0,
                n = null != e && e + "queueHooks",
                o = x.timers,
                a = x._data(this);
                if (n) {
                    a[n] && a[n].stop && i(a[n])
                } else {
                    for (n in a) {
                        a[n] && a[n].stop && Jn.test(n) && i(a[n])
                    }
                }
                for (n = o.length; n--;) {
                    o[n].elem !== this || null != e && o[n].queue !== e || (o[n].anim.stop(r), t = !1, o.splice(n, 1))
                } (t || !r) && x.dequeue(this, e)
            })
        },
        finish: function(e) {
            return e !== !1 && (e = e || "fx"),
            this.each(function() {
                var t, n = x._data(this),
                r = n[e + "queue"],
                i = n[e + "queueHooks"],
                o = x.timers,
                a = r ? r.length: 0;
                for (n.finish = !0, x.queue(this, e, []), i && i.stop && i.stop.call(this, !0), t = o.length; t--;) {
                    o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1))
                }
                for (t = 0; a > t; t++) {
                    r[t] && r[t].finish && r[t].finish.call(this)
                }
                delete n.finish
            })
        }
    });
    function ir(e, t) {
        var n, r = {
            height: e
        },
        i = 0;
        for (t = t ? 1 : 0; 4 > i; i += 2 - t) {
            n = Zt[i],
            r["margin" + n] = r["padding" + n] = e
        }
        return t && (r.opacity = r.width = e),
        r
    }
    x.each({
        slideDown: ir("show"),
        slideUp: ir("hide"),
        slideToggle: ir("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    },
    function(e, t) {
        x.fn[e] = function(e, n, r) {
            return this.animate(t, e, n, r)
        }
    }),
    x.speed = function(e, t, n) {
        var r = e && "object" == typeof e ? x.extend({},
        e) : {
            complete: n || !n && t || x.isFunction(e) && e,
            duration: e,
            easing: n && t || t && !x.isFunction(t) && t
        };
        return r.duration = x.fx.off ? 0 : "number" == typeof r.duration ? r.duration: r.duration in x.fx.speeds ? x.fx.speeds[r.duration] : x.fx.speeds._default,
        (null == r.queue || r.queue === !0) && (r.queue = "fx"),
        r.old = r.complete,
        r.complete = function() {
            x.isFunction(r.old) && r.old.call(this),
            r.queue && x.dequeue(this, r.queue)
        },
        r
    },
    x.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return 0.5 - Math.cos(e * Math.PI) / 2
        }
    },
    x.timers = [],
    x.fx = rr.prototype.init,
    x.fx.tick = function() {
        var e, n = x.timers,
        r = 0;
        for (Xn = x.now(); n.length > r; r++) {
            e = n[r],
            e() || n[r] !== e || n.splice(r--, 1)
        }
        n.length || x.fx.stop(),
        Xn = t
    },
    x.fx.timer = function(e) {
        e() && x.timers.push(e) && x.fx.start()
    },
    x.fx.interval = 13,
    x.fx.start = function() {
        Un || (Un = setInterval(x.fx.tick, x.fx.interval))
    },
    x.fx.stop = function() {
        clearInterval(Un),
        Un = null
    },
    x.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    },
    x.fx.step = {},
    x.expr && x.expr.filters && (x.expr.filters.animated = function(e) {
        return x.grep(x.timers,
        function(t) {
            return e === t.elem
        }).length
    }),
    x.fn.offset = function(e) {
        if (arguments.length) {
            return e === t ? this: this.each(function(t) {
                x.offset.setOffset(this, e, t)
            })
        }
        var n, r, o = {
            top: 0,
            left: 0
        },
        a = this[0],
        s = a && a.ownerDocument;
        if (s) {
            return n = s.documentElement,
            x.contains(n, a) ? (typeof a.getBoundingClientRect !== i && (o = a.getBoundingClientRect()), r = or(s), {
                top: o.top + (r.pageYOffset || n.scrollTop) - (n.clientTop || 0),
                left: o.left + (r.pageXOffset || n.scrollLeft) - (n.clientLeft || 0)
            }) : o
        }
    },
    x.offset = {
        setOffset: function(e, t, n) {
            var r = x.css(e, "position");
            "static" === r && (e.style.position = "relative");
            var i = x(e),
            o = i.offset(),
            a = x.css(e, "top"),
            s = x.css(e, "left"),
            l = ("absolute" === r || "fixed" === r) && x.inArray("auto", [a, s]) > -1,
            u = {},
            c = {},
            p,
            f;
            l ? (c = i.position(), p = c.top, f = c.left) : (p = parseFloat(a) || 0, f = parseFloat(s) || 0),
            x.isFunction(t) && (t = t.call(e, n, o)),
            null != t.top && (u.top = t.top - o.top + p),
            null != t.left && (u.left = t.left - o.left + f),
            "using" in t ? t.using.call(e, u) : i.css(u)
        }
    },
    x.fn.extend({
        position: function() {
            if (this[0]) {
                var e, t, n = {
                    top: 0,
                    left: 0
                },
                r = this[0];
                return "fixed" === x.css(r, "position") ? t = r.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), x.nodeName(e[0], "html") || (n = e.offset()), n.top += x.css(e[0], "borderTopWidth", !0), n.left += x.css(e[0], "borderLeftWidth", !0)),
                {
                    top: t.top - n.top - x.css(r, "marginTop", !0),
                    left: t.left - n.left - x.css(r, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                var e = this.offsetParent || s;
                while (e && !x.nodeName(e, "html") && "static" === x.css(e, "position")) {
                    e = e.offsetParent
                }
                return e || s
            })
        }
    }),
    x.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    },
    function(e, n) {
        var r = /Y/.test(n);
        x.fn[e] = function(i) {
            return x.access(this,
            function(e, i, o) {
                var a = or(e);
                return o === t ? a ? n in a ? a[n] : a.document.documentElement[i] : e[i] : (a ? a.scrollTo(r ? x(a).scrollLeft() : o, r ? o: x(a).scrollTop()) : e[i] = o, t)
            },
            e, i, arguments.length, null)
        }
    });
    function or(e) {
        return x.isWindow(e) ? e: 9 === e.nodeType ? e.defaultView || e.parentWindow: !1
    }
    x.each({
        Height: "height",
        Width: "width"
    },
    function(e, n) {
        x.each({
            padding: "inner" + e,
            content: n,
            "": "outer" + e
        },
        function(r, i) {
            x.fn[i] = function(i, o) {
                var a = arguments.length && (r || "boolean" != typeof i),
                s = r || (i === !0 || o === !0 ? "margin": "border");
                return x.access(this,
                function(n, r, i) {
                    var o;
                    return x.isWindow(n) ? n.document.documentElement["client" + e] : 9 === n.nodeType ? (o = n.documentElement, Math.max(n.body["scroll" + e], o["scroll" + e], n.body["offset" + e], o["offset" + e], o["client" + e])) : i === t ? x.css(n, r, s) : x.style(n, r, i, s)
                },
                n, a ? i: t, a, null)
            }
        })
    }),
    x.fn.size = function() {
        return this.length
    },
    x.fn.andSelf = x.fn.addBack,
    "object" == typeof module && module && "object" == typeof module.exports ? module.exports = x: (e.jQuery = e.$ = x, "function" == typeof define && define.amd && define("jquery", [],
    function() {
        return x
    }))
})(window); (function(af) {
    function M() {}
    function X(a) {
        Q = [a]
    }
    function R(b, a, d) {
        return b && b.apply && b.apply(a.context || a, d)
    }
    function ab(a) {
        return /\?/.test(a) ? "&": "?"
    }
    function z(C) {
        function b(L) {
            p++||(e(), A && (j[s] = {
                s: [L]
            }), w && (L = w.apply(C, [L])), R(m, C, [L, ai, C]), R(E, C, [C, ai]))
        }
        function a(L) {
            p++||(e(), A && L != H && (j[s] = L), R(n, C, [C, L]), R(E, C, [C, L]))
        }
        C = af.extend({},
        aa, C);
        var m = C.success,
        n = C.error,
        E = C.complete,
        w = C.dataFilter,
        l = C.callbackParameter,
        t = C.callback,
        y = C.cache,
        A = C.pageCache,
        v = C.charset,
        s = C.url,
        x = C.data,
        h = C.timeout,
        g, p = 0,
        e = M,
        d, f, r, o, k, u;
        return q && q(function(L) {
            L.done(m).fail(n),
            m = L.resolve,
            n = L.reject
        }).promise(C),
        C.abort = function() { ! (p++) && e()
        },
        R(C.beforeSend, C, [C]) === !1 || p ? C: (s = s || J, x = x ? typeof x == "string" ? x: af.param(x, C.traditional) : J, s += x ? ab(s) + x: J, l && (s += ab(s) + encodeURIComponent(l) + "=?"), !y && !A && (s += ab(s) + "_" + (new Date).getTime() + "="), s = s.replace(/=\?(&|$)/, "=" + t + "$1"), A && (g = j[s]) ? g.s ? b(g.s[0]) : a(g) : (K[t] = X, o = af(F)[0], o.id = Z + B++, v && (o[W] = v), D && D.version() < 11.6 ? (k = af(F)[0]).text = "document.getElementById('" + o.id + "')." + V + "()": o[P] = P, U && (o.htmlFor = o.id, o.event = ac), o[ag] = o[V] = o[I] = function(N) {
            if (!o[Y] || !/i/.test(o[Y])) {
                try {
                    o[ac] && o[ac]()
                } catch(L) {}
                N = Q,
                Q = 0,
                N ? b(N[0]) : a(aj)
            }
        },
        o.src = s, e = function(L) {
            u && clearTimeout(u),
            o[I] = o[ag] = o[V] = null,
            G[ad](o),
            k && G[ad](k)
        },
        G[ae](o, r = G.firstChild), k && G[ae](k, r), u = h > 0 && setTimeout(function() {
            a(H)
        },
        h)), C)
    }
    var P = "async",
    W = "charset",
    J = "",
    aj = "error",
    ae = "insertBefore",
    Z = "_jqjsp",
    ah = "on",
    ac = ah + "click",
    V = ah + aj,
    ag = ah + "load",
    I = ah + "readystatechange",
    Y = "readyState",
    ad = "removeChild",
    F = "<script>",
    ai = "success",
    H = "timeout",
    K = window,
    q = af.Deferred,
    G = af("head")[0] || document.documentElement,
    j = {},
    B = 0,
    Q,
    aa = {
        callback: Z,
        url: location.href
    },
    D = K.opera,
    U = !!af("<div>").html("<!--[if IE]><i><![endif]-->").find("i").length;
    z.setup = function(a) {
        af.extend(aa, a)
    },
    af.jsonp = z
})(jQuery);
var JSON;
JSON || (JSON = {}); (function() {
    function k(a) {
        return 10 > a ? "0" + a: a
    }
    function o(a) {
        p.lastIndex = 0;
        return p.test(a) ? '"' + a.replace(p,
        function(a) {
            var c = r[a];
            return "string" === typeof c ? c: "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice( - 4)
        }) + '"': '"' + a + '"'
    }
    function m(a, j) {
        var c, d, h, n, g = e,
        f, b = j[a];
        b && ("object" === typeof b && "function" === typeof b.toJSON) && (b = b.toJSON(a));
        "function" === typeof i && (b = i.call(j, a, b));
        switch (typeof b) {
        case "string":
            return o(b);
        case "number":
            return isFinite(b) ? "" + b: "null";
        case "boolean":
        case "null":
            return "" + b;
        case "object":
            if (!b) {
                return "null"
            }
            e += l;
            f = [];
            if ("[object Array]" === Object.prototype.toString.apply(b)) {
                n = b.length;
                for (c = 0; c < n; c += 1) {
                    f[c] = m(c, b) || "null"
                }
                h = 0 === f.length ? "[]": e ? "[\n" + e + f.join(",\n" + e) + "\n" + g + "]": "[" + f.join(",") + "]";
                e = g;
                return h
            }
            if (i && "object" === typeof i) {
                n = i.length;
                for (c = 0; c < n; c += 1) {
                    "string" === typeof i[c] && (d = i[c], (h = m(d, b)) && f.push(o(d) + (e ? ": ": ":") + h))
                }
            } else {
                for (d in b) {
                    Object.prototype.hasOwnProperty.call(b, d) && (h = m(d, b)) && f.push(o(d) + (e ? ": ": ":") + h)
                }
            }
            h = 0 === f.length ? "{}": e ? "{\n" + e + f.join(",\n" + e) + "\n" + g + "}": "{" + f.join(",") + "}";
            e = g;
            return h
        }
    }
    "function" !== typeof Date.prototype.toJSON && (Date.prototype.toJSON = function() {
        return isFinite(this.valueOf()) ? this.getUTCFullYear() + "-" + k(this.getUTCMonth() + 1) + "-" + k(this.getUTCDate()) + "T" + k(this.getUTCHours()) + ":" + k(this.getUTCMinutes()) + ":" + k(this.getUTCSeconds()) + "Z": null
    },
    String.prototype.toJSON = Number.prototype.toJSON = Boolean.prototype.toJSON = function() {
        return this.valueOf()
    });
    var q = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
    p = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
    e, l, r = {
        "": "\\b",
        "\t": "\\t",
        "\n": "\\n",
        "": "\\f",
        "\r": "\\r",
        '"': '\\"',
        "\\": "\\\\"
    },
    i;
    "function" !== typeof JSON.stringify && (JSON.stringify = function(a, j, c) {
        var d;
        l = e = "";
        if (typeof c === "number") {
            for (d = 0; d < c; d = d + 1) {
                l = l + " "
            }
        } else {
            typeof c === "string" && (l = c)
        }
        if ((i = j) && typeof j !== "function" && (typeof j !== "object" || typeof j.length !== "number")) {
            throw Error("JSON.stringify")
        }
        return m("", {
            "": a
        })
    });
    "function" !== typeof JSON.parse && (JSON.parse = function(a, e) {
        function c(a, d) {
            var g, f, b = a[d];
            if (b && typeof b === "object") {
                for (g in b) {
                    if (Object.prototype.hasOwnProperty.call(b, g)) {
                        f = c(b, g);
                        f !== void 0 ? b[g] = f: delete b[g]
                    }
                }
            }
            return e.call(a, d, b)
        }
        var d, a = "" + a;
        q.lastIndex = 0;
        q.test(a) && (a = a.replace(q,
        function(a) {
            return "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice( - 4)
        }));
        if (/^[\],:{}\s]*$/.test(a.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, ""))) {
            d = eval("(" + a + ")");
            return typeof e === "function" ? c({
                "": d
            },
            "") : d
        }
        throw new SyntaxError("JSON.parse")
    })
})();
/*! http://mths.be/placeholder v2.0.7 by @mathias */
; (function(b, l, e) {
    var a = "placeholder" in l.createElement("input");
    var h = "placeholder" in l.createElement("textarea");
    var p = e.fn;
    var f = e.valHooks;
    var j = e.propHooks;
    var n;
    var m;
    if (a && h) {
        m = p.placeholder = function() {
            return this
        };
        m.input = m.textarea = true
    } else {
        m = p.placeholder = function() {
            var q = this;
            q.filter((a ? "textarea": ":input") + "[placeholder]").not(".placeholder").bind({
                "focus.placeholder": g,
                "blur.placeholder": d
            }).data("placeholder-enabled", true).trigger("blur.placeholder");
            return q
        };
        m.input = a;
        m.textarea = h;
        n = {
            get: function(s) {
                var q = e(s);
                var r = q.data("placeholder-password");
                if (r) {
                    return r[0].value
                }
                return q.data("placeholder-enabled") && q.hasClass("placeholder") ? "": s.value
            },
            set: function(s, t) {
                var q = e(s);
                var r = q.data("placeholder-password");
                if (r) {
                    return r[0].value = t
                }
                if (!q.data("placeholder-enabled")) {
                    return s.value = t
                }
                if (t == "") {
                    s.value = t;
                    if (s != o()) {
                        d.call(s)
                    }
                } else {
                    if (q.hasClass("placeholder")) {
                        g.call(s, true, t) || (s.value = t)
                    } else {
                        s.value = t
                    }
                }
                return q
            }
        };
        if (!a) {
            f.input = n;
            j.value = n
        }
        if (!h) {
            f.textarea = n;
            j.value = n
        }
        e(function() {
            e(l).delegate("form", "submit.placeholder",
            function() {
                var q = e(".placeholder", this).each(g);
                setTimeout(function() {
                    q.each(d)
                },
                10)
            })
        });
        e(b).bind("beforeunload.placeholder",
        function() {
            e(".placeholder").each(function() {
                this.value = ""
            })
        })
    }
    function k(r) {
        var q = {};
        var s = /^jQuery\d+$/;
        e.each(r.attributes,
        function(u, t) {
            if (t.specified && !s.test(t.name)) {
                q[t.name] = t.value
            }
        });
        return q
    }
    function g(r, s) {
        var q = this;
        var t = e(q);
        if (q.value == t.attr("placeholder") && t.hasClass("placeholder")) {
            if (t.data("placeholder-password")) {
                t = t.hide().next().show().attr("id", t.removeAttr("id").data("placeholder-id"));
                if (r === true) {
                    return t[0].value = s
                }
                t.focus()
            } else {
                q.value = "";
                t.removeClass("placeholder");
                q == o() && q.select()
            }
        }
    }
    function d() {
        var u;
        var q = this;
        var t = e(q);
        var s = this.id;
        if (q.value == "") {
            if (q.type == "password") {
                if (!t.data("placeholder-textinput")) {
                    try {
                        u = t.clone().attr({
                            type: "text"
                        })
                    } catch(r) {
                        u = e("<input>").attr(e.extend(k(this), {
                            type: "text"
                        }))
                    }
                    u.removeAttr("name").data({
                        "placeholder-password": t,
                        "placeholder-id": s
                    }).bind("focus.placeholder", g);
                    t.data({
                        "placeholder-textinput": u,
                        "placeholder-id": s
                    }).before(u)
                }
                t = t.removeAttr("id").hide().prev().attr("id", s).show()
            }
            t.addClass("placeholder");
            t[0].value = t.attr("placeholder")
        } else {
            t.removeClass("placeholder")
        }
    }
    function o() {
        try {
            return l.activeElement
        } catch(q) {}
    }
} (this, document, jQuery));
function b64_423(d) {
    var e = new Array("A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "-", "_");
    var b = new String();
    for (var f = 0; f < d.length; f++) {
        for (var a = 0; a < 64; a++) {
            if (d.charAt(f) == e[a]) {
                var g = a.toString(2);
                b += ("000000" + g).substr(g.length);
                break
            }
        }
        if (a == 64) {
            if (f == 2) {
                return b.substr(0, 8)
            } else {
                return b.substr(0, 16)
            }
        }
    }
    return b
}
function b2i(b) {
    var a = 0;
    var e = 128;
    for (var d = 0; d < 8; d++, e = e / 2) {
        if (b.charAt(d) == "1") {
            a += e
        }
    }
    return String.fromCharCode(a)
}
function b64_decodex(b) {
    var e = new Array();
    var d;
    var a = "";
    for (d = 0; d < b.length; d += 4) {
        a += b64_423(b.substr(d, 4))
    }
    for (d = 0; d < a.length; d += 8) {
        e += b2i(a.substr(d, 8))
    }
    return e
}
function utf8to16(g) {
    var a, k, l, j, h, b, d, e, f;
    a = [];
    j = g.length;
    k = l = 0;
    while (k < j) {
        h = g.charCodeAt(k++);
        switch (h >> 4) {
        case 0:
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
        case 7:
            a[l++] = g.charAt(k - 1);
            break;
        case 12:
        case 13:
            b = g.charCodeAt(k++);
            a[l++] = String.fromCharCode(((h & 31) << 6) | (b & 63));
            break;
        case 14:
            b = g.charCodeAt(k++);
            d = g.charCodeAt(k++);
            a[l++] = String.fromCharCode(((h & 15) << 12) | ((b & 63) << 6) | (d & 63));
            break;
        case 15:
            switch (h & 15) {
            case 0:
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
            case 6:
            case 7:
                b = g.charCodeAt(k++);
                d = g.charCodeAt(k++);
                e = g.charCodeAt(k++);
                f = ((h & 7) << 18) | ((b & 63) << 12) | ((d & 63) << 6) | (e & 63) - 65536;
                if (0 <= f && f <= 1048575) {
                    a[l] = String.fromCharCode(((f >>> 10) & 1023) | 55296, (f & 1023) | 56320)
                } else {
                    a[l] = "?"
                }
                break;
            case 8:
            case 9:
            case 10:
            case 11:
                k += 4;
                a[l] = "?";
                break;
            case 12:
            case 13:
                k += 5;
                a[l] = "?";
                break
            }
        }
        l++
    }
    return a.join("")
}
var sqPassportSC = {
    cookieHandle: function() {
        if (!this.cookie) {
            this.parsePassportCookie()
        }
        if (this.cookie && this.cookie.userid != "") {
            return this.cookie.userid
        } else {
            return ""
        }
    },
    parsePassportCookie: function() {
        var d = document.cookie.split("; ");
        for (var e = 0; e < d.length; e++) {
            if (d[e].indexOf("sginf=") == 0) {
                var f = d[e].substr(6);
                break
            }
            if (d[e].indexOf("sginfo=") == 0) {
                var f = d[e].substr(7);
                break
            }
            if (d[e].indexOf("passport=") == 0) {
                var f = d[e].substr(9);
                break
            }
        }
        if (e == d.length) {
            this.cookie = false;
            return
        }
        try {
            var a = unescape(f).split("|");
            if (a[0] == "1" || a[0] == "2") {
                var g = utf8to16(b64_decodex(a[3]));
                this._parsePassportCookie(g);
                return
            }
        } catch(b) {}
    },
    _parsePassportCookie: function(k) {
        var f;
        var b;
        var a;
        this.cookie = new Object;
        f = 0;
        b = k.indexOf(":", f);
        while (b != -1) {
            var d;
            var e;
            var g;
            d = k.substring(f, b);
            lenEnd_offset = k.indexOf(":", b + 1);
            if (lenEnd_offset == -1) {
                break
            }
            e = parseInt(k.substring(b + 1, lenEnd_offset));
            g = k.substr(lenEnd_offset + 1, e);
            if (k.charAt(lenEnd_offset + 1 + e) != "|") {
                break
            }
            this.cookie[d] = g;
            f = lenEnd_offset + 2 + e;
            b = k.indexOf(":", f)
        }
        relation_userid = this._parserRelation();
        if (relation_userid != null && relation_userid.length > 0) {
            this.cookie[d] = relation_userid
        }
        try {
            this.cookie.service = new Object;
            var h = this.cookie.service;
            h.mail = 0;
            h.alumni = 0;
            h.chinaren = 0;
            h.blog = 0;
            h.pp = 0;
            h.club = 0;
            h.crclub = 0;
            h.group = 0;
            h.say = 0;
            h.music = 0;
            h.focus = 0;
            h["17173"] = 0;
            h.vip = 0;
            h.rpggame = 0;
            h.pinyin = 0;
            h.relaxgame = 0;
            var j = this.cookie.serviceuse;
            if (j.charAt(0) == 1) {
                h.mail = "sohu"
            } else {
                if (j.charAt(2) == 1) {
                    h.mail = "sogou"
                } else {
                    if (this.cookie.userid.indexOf("@chinaren.com") > 0) {
                        h.mail = "chinaren"
                    }
                }
            }
            if (j.charAt(1) == 1) {
                h.alumni = 1
            }
            if (j.charAt(3) == 1) {
                h.blog = 1
            }
            if (j.charAt(4) == 1) {
                h.pp = 1
            }
            if (j.charAt(5) == 1) {
                h.club = 1
            }
            if (j.charAt(7) == 1) {
                h.crclub = 1
            }
            if (j.charAt(8) == 1) {
                h.group = 1
            }
            if (j.charAt(10) == 1) {
                h.music = 1
            }
            if (j.charAt(11) == 1 || this.cookie.userid.lastIndexOf("@focus.cn") > 0) {
                h.focus = 1
            }
            if (j.charAt(12) == 1 || this.cookie.userid.indexOf("@17173.com") > 0) {
                h["17173"] = 1
            }
            if (j.charAt(13) == 1) {
                h.vip = 1
            }
            if (j.charAt(14) == 1) {
                h.rpggame = 1
            }
            if (j.charAt(15) == 1) {
                h.pinyin = 1
            }
            if (j.charAt(16) == 1) {
                h.relaxgame = 1
            }
        } catch(l) {}
    },
    _parserRelation: function() {
        var g = this.cookie.relation;
        if (g != null && g.length > 0) {
            var a = g.split(";");
            for (var b = 0; b < a.length; b++) {
                var e = a[b].split(",");
                var d = e[2].split("#");
                for (var f = 0; f < d.length; f++) {
                    if (PassportSC.appid == d[f]) {
                        return e[0]
                    }
                }
            }
        }
        return ""
    }
};
var QBObservable = function() {
    this.events = {}
};
QBObservable.prototype.addListener = function(a, e) {
    if (typeof(e) !== "function") {
        return false
    }
    var b = this.events;
    var d, f;
    if (!b[a]) {
        b[a] = []
    }
    b[a].push(e);
    return true
};
QBObservable.prototype.removeListener = function(a, f) {
    var d = this.events;
    var e, b, g;
    if (!d[a]) {
        return false
    }
    for (e = 0, g = d[a].length; e < g; ++e) {
        if (d[a][e] === f) {
            d[a].splice(e, 1);
            return true
        }
    }
    return false
};
QBObservable.prototype.notify = function(a) {
    var d = this.events;
    var f, h, b;
    if (!d[a]) {
        return
    }
    b = [].slice.call(arguments, 1);
    for (f = 0, h = d[a].length; f < d[a].length; ++f) {
        if (typeof(d[a][f]) === "function") {
            try {
                d[a][f].apply(this, b)
            } catch(g) {
                console && console.log(g.message);
                throw g
            }
        }
    }
};
var start_time = new Date();
var __IS_IE6 = !!(window.ActiveXObject && !window.XMLHttpRequest);
var __IMG_MAP_CACHE = {};
var Utils = function() {
    this.imgPrefix = "resource/views/style/img";
    this.stylePrefix = "resource/views/style";
    this.scriptsPrefix = "resource/views/scripts";
    this.trim = function(a) {
        return typeof(a) === "string" ? a.replace(/(^\s+|\s+$)/, "") : ""
    };
    this.bind = (function() {
        if (Function.prototype.bind) {
            return function(a, b) {
                return a.bind(b)
            }
        }
        return function(a, b) {
            return function() {
                var d = [].slice.call(arguments, 0, 1);
                var e = [].slice.call(arguments, 1);
                return a.apply(b, d.concat(e))
            }
        }
    })();
    this.makeObservable = function(b) {
        var d = new QBObservable();
        for (var a in d) {
            if (typeof(d[a]) === "function") {
                b[a] = this.bind(d[a], d)
            }
        }
        return b
    };
    this.readGet = function() {
        var b = window.location.href.replace(/&amp;/g, "&").replace(/\#.*$/, "");
        var a = {};
        var f, d;
        if (b.indexOf("?") > -1) {
            uriArr = b.split("?");
            paraStr = uriArr[1]
        } else {
            return a
        }
        if (paraStr.indexOf("&") > -1) {
            f = paraStr.split("&")
        } else {
            f = new Array(paraStr)
        }
        for (var g = 0; g < f.length; g++) {
            try {
                f[g] = f[g].indexOf("=") > -1 ? f[g] : f[g] + "=";
                d = f[g].split("=");
                a[d[0]] = decodeURIComponent(d[1].replace(/\+/g, " "))
            } catch(h) {}
        }
        return a
    };
    this.getBrowser = function() {
        if (typeof window._bro_v != "undefined") {
            return window._bro_v
        }
        var b;
        var a = navigator.userAgent.toLowerCase();
        if (window.ActiveXObject) {
            b = "msie " + a.match(/msie (\d+)/)[1]
        } else {
            if (window.opera) {
                b = "opera " + (typeof window.opera.version == "function" ? window.opera.version().match(/\d+/)[0] : a.match(/opera.(\d+)/)[1])
            }
        }
        if (!b) {
            b = (a.match(/firefox\/([\d]+)/)) ? "firefox " + RegExp.$1: (a.match(/chrome\/(\d+)/)) ? "chrome " + RegExp.$1: (a.match(/version\/(\d+).*safari/)) ? "safari " + RegExp.$1: null
        }
        window._bro_v = b;
        return b
    };
    this.getStartTime = function() {
        return start_time
    };
    this.isie6 = function() {
        return __IS_IE6
    };
    this.fixPng = function(a) {
        window.DD_belatedPNG && window.DD_belatedPNG.fix(a)
    };
    this.fixActivePng = function(h) {
        if (__IS_IE6 && (document.body.filters)) {
            var b = h.length;
            for (var e = 0; e < b; e++) {
                var a = h[e];
                var d = a.src.toUpperCase();
                if (d.indexOf(".PNG") > 0) {
                    var f = a.width;
                    var g = a.height;
                    if (f == 0) {
                        f = a.getAttribute("data-img-width")
                    }
                    if (g == 0) {
                        g = a.getAttribute("data-img-height")
                    }
                    var j = (a.className.toLowerCase().indexOf("scale") >= 0) ? "scale": "image";
                    a.style.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(src='" + a.src.replace("%23", "%2523").replace("'", "%27") + "', sizingMethod='" + j + "')";
                    a.src = QBUtils.getResourcePrePath("resource/views/style/img/blank.gif");
                    a.width = f;
                    a.height = g
                }
            }
        }
    };
    this.getResourcePrePath = function(f) {
        var a = this.readGet()["__env"] || "production";
        if (a) {
            switch (a) {
            case "preproduction":
                return f;
            case "production":
                if (__IMG_MAP_CACHE[f]) {
                    return __IMG_MAP_CACHE[f]
                }
                var e = "";
                if (f.indexOf(this.imgPrefix) >= 0) {
                    e = "img" + f.substring(this.imgPrefix.length)
                } else {
                    if (f.indexOf(this.stylePrefix) >= 0) {
                        e = "css" + f.substring(this.stylePrefix.length)
                    } else {
                        if (f.indexOf(this.scriptsPrefix) >= 0) {
                            e = "js" + f.substring(this.scriptsPrefix.length)
                        }
                    }
                }
                var d = _get_resource_pre_path();
                var b = d + e;
                __IMG_MAP_CACHE[f] = b;
                return b;
            default:
                break
            }
        }
        return f
    };
    this.isAncestor = function(a, b) {
        if (!b || !a) {
            return false
        }
        while (b && b !== a) {
            b = b.parentNode
        }
        return b === a
    }
};
var __PATH_RANDOM = 1;
function _get_resource_pre_path() {
    return "http://p" + ((++__PATH_RANDOM % 2) + 1) + ".qq.sogoucdn.com/u/haoqq/v2/"
}
var QBUtils = new Utils();
var haoqq = {};
haoqq.namespace = function(d) {
    if (typeof d !== "string") {
        d = "anonymous"
    }
    var a = d.split(".");
    var f = haoqq;
    var e = f;
    var b, g;
    for (b = 0, g = a.length; b < g; ++b) {
        if (a[b]) {
            f = e[a[b]] = e[a[b]] || {};
            e = f
        }
    }
    return e
}; (function(b) {
    var a = {
        addListener: function(e, g) {
            var d, f;
            d = (f = this.listeners[e]) != null ? f: this.listeners[e] = [];
            return d.push(g)
        },
        modListener: function(d, e) {
            this.removeListener(d);
            return this.addListener(d, e)
        },
        removeListener: function(d) {
            var e;
            return (e = this.listeners[d]) != null ? e.length = 0 : void 0
        },
        trigger: function() {
            var f, d, g;
            var h = true;
            f = Array.prototype.shift.call(arguments);
            d = (g = this.listeners[f]) != null ? g: this.listeners[f] = [];
            for (var e = 0; e < d.length; e++) {
                if (d[e].apply(this, arguments) === false) {
                    h = false
                }
            }
            return h
        },
        extendEvent: function(e) {
            for (var d in this) {
                e[d] = this[d]
            }
            e.listeners = [];
            return e
        }
    };
    b.Event = a
})(haoqq.namespace("common")); (function(a) {
    a.Singleton = function(b) {
        var d;
        return function() {
            return d || (d = b.apply(this, arguments))
        }
    }
})(haoqq.namespace("common")); (function(b) {
    var a = function() {
        a.prototype.start = function() {
            if ( !! this.__start) {
                return
            }
            var d = [].slice.call(arguments, 0);
            this.init(d);
            this.initEvent(d);
            this.run(d);
            this.__start = 1
        };
        a.prototype.init = function() {};
        a.prototype.initEvent = function() {};
        a.prototype.run = function() {}
    };
    b.Template = a
})(haoqq.namespace("common")); (function(b) {
    var a = function(d) {
        this.config = d || {};
        this.container = d.container || null;
        if (!this.container) {
            return
        }
        this.changeTimeout = d.changeTimeout || 30000;
        this.syncChange = d.syncChange || false;
        this.stopAutoWhenHover = d.stopAutoWhenHover || true;
        this.intervalId = 0;
        this.currentClassName = d.currentClassName || "current";
        this.tabChangeType = (d.tabChangeType && d.tabChangeType == "hover") ? "hover": "click";
        this.tabTagName = d.tabTagName || "li";
        this.currentIndex = d.currentIndex || 0;
        this.isAllowClickCurTab = d.isAllowClickCurTab || false;
        this.prevButton = d.prevButton || null;
        this.nextButton = d.nextButton || null;
        this.panelShow = (typeof(d.panelShow) == "function") ? d.panelShow: function(e) {
            e.show()
        };
        this.panelHide = (typeof(d.panelHide) == "function") ? d.panelHide: function(e) {
            e.hide()
        };
        this.onMouseEnterTab = (typeof(d.onMouseEnterTab) == "function") ? d.onMouseEnterTab: function() {};
        this.onMouseLeaveTab = (typeof(d.onMouseLeaveTab) == "function") ? d.onMouseLeaveTab: function() {};
        this.onClickTab = (typeof(d.onClickTab) == "function") ? d.onClickTab: function() {};
        this.beforeChangeTab = (typeof(d.beforeChangeTab) == "function") ? d.beforeChangeTab: function() {};
        this.afterChangeTab = (typeof(d.afterChangeTab) == "function") ? d.afterChangeTab: function() {};
        this.onTabAutoChange = (typeof(d.onTabAutoChange) == "function") ? d.onTabAutoChange: function() {};
        this.onClickPrevOrNextChange = (typeof(d.onClickPrevOrNextChange) == "function") ? d.onClickPrevOrNextChange: function() {};
        if (d.tabs.length > 0) {
            this.tabs = d.tabs
        } else {
            this.tabs = $(this.container).children(this.tabTagName)
        }
        if (d.tabPanels && d.tabPanels.length > 0) {
            this.tabPanels = d.tabPanels
        }
        a.prototype.syncChangeTab = function() {
            if (!this.syncChange) {
                return
            }
            if (this.intervalId > 0) {
                window.clearInterval(this.intervalId)
            }
            var e = this;
            if (!this.tabPanels || !this.tabPanels instanceof Array) {
                return
            }
            if (this.stopAutoWhenHover) {
                this.tabPanels.each(function() {
                    $(this).unbind("mouseover");
                    $(this).unbind("mouseout");
                    $(this).mouseover(function(f) {
                        f.stopPropagation();
                        if (e.intervalId > 0) {
                            window.clearInterval(e.intervalId)
                        }
                    }).mouseout(function(f) {
                        f.stopPropagation();
                        e.syncChangeTab()
                    })
                })
            }
            this.intervalId = window.setInterval(function() {
                var f = e.getCurrentIndex();
                var g = e.tabs;
                if ((f + 1) >= g.length) {
                    e.currentIndex = 0
                } else {
                    e.currentIndex = f + 1
                }
                e.setCurrent(e.currentIndex);
                e.onTabAutoChange(e.currentIndex)
            },
            this.changeTimeout)
        };
        a.prototype.setCurrent = function(e) {
            var g = this.tabs;
            if (!g || e < -1 || e >= g.length) {
                return
            }
            for (var f = 0; f < g.length; ++f) {
                if (f == e) {
                    $(g[f]).addClass(this.currentClassName)
                } else {
                    $(g[f]).removeClass(this.currentClassName)
                }
            }
            this.currentIndex = e;
            if (!this.tabPanels || !this.tabPanels instanceof Array) {
                return
            }
            for (f = 0; f < this.tabPanels.length; ++f) {
                f == e ? this.panelShow($(this.tabPanels[f])) : this.panelHide($(this.tabPanels[f]))
            }
        };
        a.prototype.getTabIndex = function(g) {
            var f = this.tabs;
            if (!g || !f) {
                return - 1
            }
            for (var e = 0; e < f.length; ++e) {
                if (f[e] === ($(g))[0]) {
                    return e
                }
            }
            return - 1
        };
        a.prototype.getCurrentIndex = function() {
            return this.currentIndex
        };
        a.prototype.initEventsListener = function() {
            var f = this;
            function e(l) {
                if (!l) {
                    return - 1
                }
                var j = $(l);
                for (var h = 0; h < f.tabs.length; ++h) {
                    if (f.tabs[h] === j[0]) {
                        return h
                    }
                }
                var g = j.parentsUntil(f.container);
                for (var k = 0; k < g.length; ++k) {
                    for (var h = 0; h < f.tabs.length; ++h) {
                        if (f.tabs[h] === g[k]) {
                            return h
                        }
                    }
                }
                return - 1
            }
            $(f.container).click(function(h) {
                var j = h.target;
                if ("click" != f.tabChangeType) {
                    return
                }
                var g = e(j);
                if (g == -1) {
                    return
                }
                f.onClickTab(g, h);
                if (g != f.currentIndex || !f.isAllowClickCurTab) {
                    h.preventDefault()
                }
                if (f.beforeChangeTab(g, h) === false) {
                    return
                }
                f.setCurrent(g);
                f.syncChangeTab();
                f.afterChangeTab(g, h)
            });
            $(f.container).mouseover(function(h) {
                var j = h.target;
                var g = e(j);
                if (g == -1) {
                    return
                }
                f.onMouseEnterTab(g, h);
                if ("hover" != f.tabChangeType) {
                    return
                }
                h.preventDefault();
                if (f.beforeChangeTab(g, h) === false) {
                    return
                }
                clearTimeout(f.__switchTimeout);
                f.__switchTimeout = setTimeout(function() {
                    f.setCurrent(g);
                    f.afterChangeTab(g, h)
                },
                200)
            });
            $(f.container).mouseout(function(h) {
                var j = h.target;
                var g = e(j);
                if (g == -1) {
                    return
                }
                f.onMouseLeaveTab(g, h);
                if ("hover" != f.tabChangeType) {
                    return
                }
                clearTimeout(f.__switchTimeout);
                if (g == f.getCurrentIndex()) {
                    h.preventDefault()
                }
            });
            if (this.prevButton && this.nextButton) {
                this.nextButton.click(function(j) {
                    j.preventDefault();
                    var g = f.getCurrentIndex();
                    var h = f.tabs;
                    if ((g + 1) >= h.length) {
                        f.currentIndex = 0
                    } else {
                        f.currentIndex = g + 1
                    }
                    f.setCurrent(f.currentIndex);
                    f.onClickPrevOrNextChange(f.currentIndex)
                });
                this.prevButton.click(function(j) {
                    j.preventDefault();
                    var g = f.getCurrentIndex();
                    var h = f.tabs;
                    if (g === 0) {
                        f.currentIndex = h.length - 1
                    } else {
                        f.currentIndex = g - 1
                    }
                    f.setCurrent(f.currentIndex);
                    f.onClickPrevOrNextChange(f.currentIndex)
                })
            }
        };
        this.initEventsListener();
        this.syncChangeTab()
    };
    b.TabView = function(d) {
        return new a(d)
    }
} (haoqq.namespace("tab")));
$.extend({
    getBrowserInfo: function() {
        var b = navigator.userAgent.toLowerCase();
        var e = (b.match(/\b(chrome|opera|safari|msie|firefox)\b/) || ["", "mozilla"])[1];
        var d = "(?:" + e + "|version)[\\/: ]([\\d.]+)";
        var a = (b.match(new RegExp(d)) || [])[1];
        return {
            brower: e,
            ver: a
        }
    }
}); (function(b) {
    var a = function() {
        a.prototype.loadImg = function() {
            this.trigger("loadImg")
        }
    };
    b.getTriggerInstance = haoqq.common.Singleton(function() {
        return haoqq.common.Event.extendEvent(new a())
    });
    b.createTrigger = function() {
        return haoqq.common.Event.extendEvent(new a())
    }
})(haoqq.namespace("imgloadtrigger")); (function(d, b, a, f) {
    var e = d(b);
    d.fn.lazyload = function(h) {
        var g = this;
        var m;
        var j = {
            threshold: 0,
            failure_limit: 0,
            event: "scroll",
            effect: "show",
            container: b,
            data_attribute: "original",
            skip_invisible: true,
            appear: null,
            load: null,
            reload: false
        };
        function l() {
            var n = 0;
            g.each(function() {
                var o = d(this);
                if (j.skip_invisible && !o.is(":visible")) {
                    return
                }
                if (d.abovethetop(this, j) || d.leftofbegin(this, j)) {} else {
                    if (!d.belowthefold(this, j) && !d.rightoffold(this, j)) {
                        o.trigger("appear");
                        n = 0
                    } else {
                        if (++n > j.failure_limit) {
                            return false
                        }
                    }
                }
            })
        }
        if (h) {
            if (f !== h.failurelimit) {
                h.failure_limit = h.failurelimit;
                delete h.failurelimit
            }
            if (f !== h.effectspeed) {
                h.effect_speed = h.effectspeed;
                delete h.effectspeed
            }
            d.extend(j, h)
        }
        m = (j.container === f || j.container === b) ? e: d(j.container);
        if (0 === j.event.indexOf("scroll")) {
            m.bind(j.event,
            function(n) {
                return l()
            })
        }
        this.each(function() {
            var n = this;
            var o = d(n);
            n.loaded = false;
            o.one("appear",
            function() {
                if (!this.loaded) {
                    if (j.appear) {
                        var p = g.length;
                        j.appear.call(n, p, j)
                    }
                    d("<img />").bind("load",
                    function() {
                        o.hide().attr("src", o.data(j.data_attribute))[j.effect](j.effect_speed);
                        n.loaded = true;
                        var q = d.grep(g,
                        function(s) {
                            return ! s.loaded
                        });
                        g = d(q);
                        if (j.load) {
                            var r = g.length;
                            j.load.call(n, r, j)
                        }
                    }).attr("src", o.data(j.data_attribute))
                }
            });
            if (0 !== j.event.indexOf("scroll")) {
                o.bind(j.event,
                function(p) {
                    if (!n.loaded) {
                        o.trigger("appear")
                    }
                })
            }
        });
        e.bind("resize",
        function(n) {
            l()
        });
        e.bind("nowload",
        function(n) {
            l()
        });
        var k = haoqq.imgloadtrigger.getTriggerInstance();
        k.addListener("loadImg", l);
        if ((/iphone|ipod|ipad.*os 5/gi).test(navigator.appVersion)) {
            e.bind("pageshow",
            function(n) {
                if (n.originalEvent.persisted) {
                    g.each(function() {
                        d(this).trigger("appear")
                    })
                }
            })
        }
        d(b).load(function() {
            l()
        });
        if (j.reload) {
            l()
        }
        return this
    };
    d.belowthefold = function(h, j) {
        var g;
        if (j.container === f || j.container === b) {
            g = e.height() + e.scrollTop()
        } else {
            g = d(j.container).offset().top + d(j.container).height()
        }
        return g <= d(h).offset().top - j.threshold
    };
    d.rightoffold = function(h, j) {
        var g;
        if (j.container === f || j.container === b) {
            g = e.width() + e.scrollLeft()
        } else {
            g = d(j.container).offset().left + d(j.container).width()
        }
        return g <= d(h).offset().left - j.threshold
    };
    d.abovethetop = function(h, j) {
        var g;
        if (j.container === f || j.container === b) {
            g = e.scrollTop()
        } else {
            g = d(j.container).offset().top
        }
        return g >= d(h).offset().top + j.threshold + d(h).height()
    };
    d.leftofbegin = function(h, j) {
        var g;
        if (j.container === f || j.container === b) {
            g = e.scrollLeft()
        } else {
            g = d(j.container).offset().left
        }
        return g >= d(h).offset().left + j.threshold + d(h).width()
    };
    d.inviewport = function(g, h) {
        return ! d.rightoffold(g, h) && !d.leftofbegin(g, h) && !d.belowthefold(g, h) && !d.abovethetop(g, h)
    };
    d.extend(d.expr[":"], {
        "below-the-fold": function(g) {
            return d.belowthefold(g, {
                threshold: 0
            })
        },
        "above-the-top": function(g) {
            return ! d.belowthefold(g, {
                threshold: 0
            })
        },
        "right-of-screen": function(g) {
            return d.rightoffold(g, {
                threshold: 0
            })
        },
        "left-of-screen": function(g) {
            return ! d.rightoffold(g, {
                threshold: 0
            })
        },
        "in-viewport": function(g) {
            return d.inviewport(g, {
                threshold: 0
            })
        },
        "above-the-fold": function(g) {
            return ! d.belowthefold(g, {
                threshold: 0
            })
        },
        "right-of-fold": function(g) {
            return d.rightoffold(g, {
                threshold: 0
            })
        },
        "left-of-fold": function(g) {
            return ! d.rightoffold(g, {
                threshold: 0
            })
        }
    })
})(jQuery, window, document); (function(e) {
    var f = function() {};
    f.prototype = new haoqq.common.Template();
    var b = {
        0 : "find_wonder",
        1 : "find_movie",
        2 : "find_tv",
        3 : "find_show",
        4 : "find_game",
        5 : "find_bagua",
        6 : "find_happy"
    };
    var a = function(h) {
        var g = $("#mm_" + h);
        var j = $("#findHlLoading");
        if (g.children().length <= 0) {
            j.show();
            window.__send && __send("extra", "module=底部Tab展示" + b[h], false, true);
            g.load("lunbo/switch.php", {
                code: b[h]
            },
            function() {
                j.hide();
                g.find("img.sync").lazyload({
                    effect: "fadeIn"
                });
                haoqq.imgloadtrigger.getTriggerInstance().loadImg()
            })
        }
    };
    var d = function(j) {
        var g = haoqq.find.getFindHighLightInstance();
        var h = null;
        if (g.hasDownloadModel) {
            $(window).unbind("scroll", d)
        } else {
            if ($(window).scrollTop() > 1200) {
                g.hasDownloadModel = true;
                $.getScript(QBUtils.getResourcePrePath("resource/views/scripts/findHl.min.js"),
                function() {
                    var l = $("#findHlTab li[class!=line]");
                    var k = {
                        container: g.container,
                        currentClassName: "hover",
                        tabChangeType: "hover",
                        syncChange: false,
                        changeTimeout: 15000,
                        currentIndex: g.defaultIndex,
                        isAllowClickCurTab: false,
                        tabs: l,
                        tabPanels: g.container.find(".jc_main .findPanel"),
                        onClickTab: function(m, n) {
                            clearTimeout(h);
                            a(m)
                        },
                        onMouseEnterTab: function(m, n) {
                            clearTimeout(h);
                            h = setTimeout(function() {
                                a(m)
                            },
                            200)
                        },
                        onMouseLeaveTab: function() {
                            clearTimeout(h)
                        },
                        onTabAutoChange: function(m) {
                            clearTimeout(h);
                            a(m)
                        },
                        prevButton: g.container.find(".jc_prev"),
                        nextButton: g.container.find(".jc_next"),
                        onClickPrevOrNextChange: function(m) {
                            a(m)
                        }
                    };
                    haoqq.tab.TabView(k);
                    a(g.defaultIndex)
                })
            }
        }
    };
    f.prototype.init = function() {
        var g = this;
        this.defaultIndex = 0;
        this.hasDownloadModel = false;
        this.container = $("#findHl");
        if ($(window).scrollTop() > this.container.position().top) {
            d()
        } else {
            $(window).bind("scroll", d)
        }
    };
    f.prototype.initEvent = function() {};
    f.prototype.run = function() {};
    e.getFindHighLightInstance = haoqq.common.Singleton(function() {
        return new f()
    });
    e.createFindHighLight = function() {
        return new f()
    }
} (haoqq.namespace("find")));
haoqq.find.getFindHighLightInstance().start();
if (typeof String.trim != "function") {
    String.prototype.trim = function() {
        return this.replace(/(^\s*)|(\s*$)/g, "")
    }
} (function(d) {
    var b = {
        set: function(g, j, h, e) {
            if (h == "long") {
                var f = new Date();
                f.setTime(f.getTime() + (3650 * 24 * 60 * 60 * 1000));
                h = f.toUTCString()
            } else {
                if (typeof h == "object") {
                    h = h.toUTCString()
                }
            }
            document.cookie = (g + "=" + j + (h ? "; expires=" + h: "") + (e ? ";domain=" + e: ""))
        },
        get: function(f) {
            var j = null;
            if (document.cookie && document.cookie != "") {
                var h = document.cookie.split(";");
                for (var g = 0; g < h.length; g++) {
                    var e = h[g].trim();
                    if (e.substring(0, f.length + 1) == (f + "=")) {
                        j = decodeURIComponent(e.substring(f.length + 1));
                        break
                    }
                }
            }
            return j
        },
        del: function(f, e) {
            this.set(f, null, new Date(1970, 1, 1), e)
        }
    };
    var a = (function() {
        var e, j, l;
        if (typeof window.localStorage == "object") {
            var f = window.localStorage;
            e = function(n) {
                return f.getItem(n)
            };
            j = function(n, o) {
                f.setItem(n, o)
            };
            l = function(n) {
                f.removeItem(n)
            }
        } else {
            if (document.body.addBehavior) {
                var k = document.body,
                m = "daohang";
                k.addBehavior("#default#userData");
                var h = function() {
                    try {
                        k.load(m)
                    } catch(n) {}
                };
                var g = function() {
                    try {
                        k.save(m)
                    } catch(n) {}
                };
                e = function(n) {
                    h();
                    return k.getAttribute(n)
                };
                j = function(n, o) {
                    h();
                    k.setAttribute(n, o);
                    g()
                };
                l = function(n) {
                    h();
                    k.removeAttribute(n);
                    g()
                }
            }
        }
        if (!l) {
            return b
        } else {
            return {
                get: e,
                set: j,
                del: l
            }
        }
    })();
    d.Storage = function() {
        return a
    };
    d.Cookie = function() {
        return b
    }
} (haoqq)); (function() {
    var f = $(document.body);
    function h() {
        window.setTimeout(function() {
            a()
        },
        3 * 1000);
        window.setInterval(function() {
            a()
        },
        60 * 1000 * 2)
    }
    window.toDayTheme = g;
    function g() {
        if (!f.hasClass("day")) {
            f.removeClass("night").addClass("day");
            window._ads_theme && window._ads_theme("isday")
        }
    }
    window.toNightTheme = d;
    function d() {
        if (!f.hasClass("night")) {
            f.removeClass("day").addClass("night");
            b(QBUtils.getResourcePrePath("resource/views/style/img/bg_night_V2.jpg"), $("#mainbg"));
            window._ads_theme && window._ads_theme(!"isday")
        }
    }
    function b(m, j, n) {
        var l = m;
        var k = new Image();
        k.src = l;
        if (k.complete) {
            if (j.size() > 0) {
                j.css({
                    opacity: 1
                })
            }
            if (n && n.size() > 0) {
                n.css({
                    opacity: 1
                })
            }
        } else {
            k.onload = function() {
                if (j.size() > 0) {
                    j.animate({
                        opacity: 1
                    },
                    1500, "linear",
                    function() {})
                }
                if (n && n.size() > 0) {
                    n.animate({
                        opacity: 1
                    },
                    1500, "linear",
                    function() {})
                }
            }
        }
    }
    function a() {
        var m = new Date();
        if (/\.php$/.test(location.pathname) && window.getParam("__today")) {
            var j = window.getParam("__today").split(",");
            m = new Date( + j[0], +j[1] - 1, +j[2], +j[3])
        }
        var k = m.getHours() * 100 + m.getMinutes();
        var l = e(m);
        if (k < l.endday && k > l.startday) {
            g()
        } else {
            d()
        }
    }
    function e(j) {
        var k = j.getMonth() + 1;
        switch (k) {
        case 12:
        case 1:
        case 2:
            return {
                startday:
                700,
                endday: 1830
            };
        case 3:
        case 4:
        case 5:
            return {
                startday:
                630,
                endday: 1900
            };
        case 6:
        case 7:
        case 8:
            return {
                startday:
                600,
                endday: 1930
            };
        case 9:
        case 10:
        case 11:
            return {
                startday:
                630,
                endday: 1900
            }
        }
    }
    h()
})();
var QBCache = {
    storage: haoqq.Storage(),
    set: function(b, f, d) {
        if (!b || null == f) {
            return false
        }
        d = d || 86400 * 365 * 1000;
        var h = new Date().getTime();
        try {
            var a = {
                expires: h + d,
                rawData: f
            };
            this.storage.set(b, JSON.stringify(a))
        } catch(g) {
            return false
        }
        return true
    },
    del: function(a) {
        try {
            this.storage.del(a)
        } catch(b) {}
    },
    get: function(b) {
        if (!b || b == "undefined") {
            return null
        }
        var a;
        try {
            a = this.storage.get(b)
        } catch(f) {
            return null
        }
        if (!a) {
            return null
        }
        try {
            a = JSON.parse(a);
            if (a && typeof(a) === "object" && typeof(a.expires) === "number") {
                if (typeof(a.rawData) !== "undefined") {
                    var d = new Date().getTime();
                    if (d <= a.expires) {
                        return a.rawData
                    }
                }
            }
        } catch(f) {
            return null
        }
        return null
    }
};
var QBObservable = function() {
    this.events = {}
};
QBObservable.prototype.addListener = function(a, e) {
    if (typeof(e) !== "function") {
        return false
    }
    var b = this.events;
    var d, f;
    if (!b[a]) {
        b[a] = []
    }
    b[a].push(e);
    return true
};
QBObservable.prototype.removeListener = function(a, f) {
    var d = this.events;
    var e, b, g;
    if (!d[a]) {
        return false
    }
    for (e = 0, g = d[a].length; e < g; ++e) {
        if (d[a][e] === f) {
            d[a].splice(e, 1);
            return true
        }
    }
    return false
};
QBObservable.prototype.notify = function(a) {
    var d = this.events;
    var f, h, b;
    if (!d[a]) {
        return
    }
    b = [].slice.call(arguments, 1);
    for (f = 0, h = d[a].length; f < d[a].length; ++f) {
        if (typeof(d[a][f]) === "function") {
            try {
                d[a][f].apply(this, b)
            } catch(g) {
                console && console.log(g.message);
                throw g
            }
        }
    }
}; (function() {
    var h = {
        guid_key: null,
        supplyid_key: null,
        version_key: null
    };
    var a = "qb7-guid",
    d = "qb7-supplyid",
    p = "qb7-version",
    e = QBUtils.getStartTime();
    window.getGuid = function() {
        var r = 0;
        try {
            r = h.guid_key;
            if (r == 0 || r == null) {
                r = window.external.getGuid();
                h.guid_key = r
            }
        } catch(s) {
            r = 0
        }
        return r
    };
    window.getSupplyId = function() {
        var s = 0;
        try {
            s = h.supplyid_key;
            if (s == 0 || s == null) {
                s = window.external.getSupplyId();
                h.supplyid_key = s
            }
        } catch(r) {
            s = 0
        }
        return s
    };
    window.getVersion = function() {
        var r = 0;
        try {
            r = h.version_key;
            if (r == 0 || r == null) {
                r = window.external.getVersion();
                h.version_key = r
            }
        } catch(s) {
            r = 0
        }
        return r
    };
    window.setCuid = function() {
        var s = new Date();
        var r = s.getUTCMilliseconds();
        var t = (Math.round(Math.abs(Math.random() - 1) * 2147483647) * r) % 10000000000;
        document.cookie = "cuid=" + t + ";domain=qq.com;expires=Sun, 18 Jan 2038 00:00:00 GMT;";
        return t
    };
    window.getCuid = function() {
        try {
            var s = new RegExp("(^| )cuid=([^;]*)(;|$)");
            var r = decodeURIComponent(document.cookie);
            var t = r.match(s);
            return (!t ? null: t[2])
        } catch(u) {
            return null
        }
    };
    window.getPageVersion = function() {
        return $("body").attr("version")
    };
    window.getParam = function(s) {
        if (!s) {
            return null
        }
        var t = new RegExp(s + "=([^&]*)(&|$)");
        var r = decodeURIComponent(window.location.href);
        var u = r.match(t);
        return (!u ? null: u[1])
    };
    window.getfr = function() {
        return getParam("fr")
    };
    var n = getGuid(),
    k = getVersion(),
    q = getSupplyId(),
    j = getfr();
    var g = "client",
    m = "index.html";
    if (window.location.pathname.indexOf("level2")) {
        m = window.location.pathname
    }
    var f = "http://nav.browser.qq.com/x?dm=" + g + "&page=" + m + "&guid=" + n + "&pv=" + e.getTime() + "&version=" + k + "&supplyid=" + q;
    var o = getCuid() !== null ? getCuid() : setCuid(),
    l = getPageVersion();
    if (j !== null) {
        f += "&fr=" + j
    }
    f += "&cuid=" + o + "&pageid=" + l;
    var b = new Image(1, 1);
    window.sendStat = function(u) {
        return;
        var t = f;
        if (u != null) {
            for (var r in u) {
                t = t + "&" + r + "=" + u[r]
            }
        }
        var s = new Date();
        t += "&rand=" + s.getTime();
        b.src = t
    }
})(); (function(b) {
    var a = "scroll-lazy-render";
    b(document).ready(function() {
        var e = b("textarea." + a);
        var d = function() {
            e.each(function() {
                var g = b(this);
                var h = b(document).scrollTop();
                var f;
                if (g.attr("divTop")) {
                    f = parseInt(g.attr("divTop"))
                } else {
                    f = g.offset().top;
                    g.attr("divTop", f)
                }
                if (f - h < document.documentElement.clientHeight + 100) {
                    g.replaceWith(g.val())
                }
                e = b("textarea." + a)
            })
        };
        d();
        b(window).scroll(d);
        b(window).resize(function() {
            d()
        })
    })
})(window.jQuery);
$(document).ready(function() {
    var CookieHandler = {
        getCookie: function(name) {
            var arr = document.cookie.match(new RegExp("(^| )" + name + "=([^;]*)(;|$)"));
            if (arr != null) {
                return unescape(arr[2])
            }
            return null
        },
        setCookie: function(key, value, expires, domain, path) {
            var newitem = key + "=" + escape(value) + "; ";
            if (domain !== undefined) {
                newitem += "domain=" + escape(domain) + "; "
            } else {
                newitem += "domain=qq.com; "
            }
            if (path !== undefined) {
                newitem += "path=" + escape(path) + "; "
            } else {
                newitem += "path=/; "
            }
            if (typeof expires === "number") {
                var exp = new Date();
                exp.setTime(exp.getTime() + expires);
                newitem += "expires=" + escape(exp.toGMTString())
            } else {
                if (expires !== undefined) {
                    newitem += "expires=" + escape(expires)
                } else {
                    var exp = new Date();
                    exp.setTime(exp.getTime() + 1000 * 86400 * 3);
                    newitem += "expires=" + escape(exp.toGMTString())
                }
            }
            document.cookie = newitem
        },
        removeCookie: function(name) {
            var exp = new Date();
            exp.setTime(exp.getTime() - 1);
            var cval = this.getCookie(name);
            if (cval != null) {
                document.cookie = name + "=; path=/; domain=qq.com;expires=" + exp.toGMTString()
            }
        }
    };
    var g_get = QBUtils.readGet();
    var g_unc = g_get.unc;
    if (g_unc) {
        g_unc = g_unc.replace(/</g, "").replace(/>/g, "")
    }
    var g_unc_pid_map = {
        u500874_s1_h1: {
            name: "导航V1版UNC",
            pid: "sogou-site-c91e3483cf4f9005-1001"
        },
        o400493_1: {
            name: "TBH带量UNC",
            pid: "sogou-site-c91e3483cf4f9005-1002"
        },
        u500874_s1_g2: {
            name: "TBH错误DNS导 量",
            pid: "sogou-site-c91e3483cf4f9005-1003"
        },
        u500874_0h_d3: {
            name: "工具栏推荐锁定",
            pid: "sogou-site-c91e3483cf4f9005-1004"
        },
        u500874_0h_e5: {
            name: "TBH推荐锁定导航个性弹窗",
            pid: "sogou-site-c91e3483cf4f9005-1005"
        },
        u500874_0h_c3: {
            name: "QQ导航桌面快捷方式",
            pid: "sogou-site-c91e3483cf4f9005-1006"
        },
        u500874_0h_c2: {
            name: "工具条QQ导航按钮",
            pid: "sogou-site-c91e3483cf4f9005-1007"
        },
        b400352_1: {
            name: "快播渠道地址栏弹窗",
            pid: "sogou-site-c91e3483cf4f9005-1008"
        },
        u500874_0h_c5: {
            name: "自有流量-客户端安装勾选",
            pid: "sogou-site-c91e3483cf4f9005-1009"
        },
        u500874_0h_c4: {
            name: "九宫格缩略图",
            pid: "sogou-site-c91e3483cf4f9005-1010"
        },
        s500945_s1_a3: {
            name: "幻想世界",
            pid: "sogou-site-c91e3483cf4f9005-1011"
        },
        o400493_8: {
            name: "DNS错误UNC配 置带量",
            pid: "sogou-site-c91e3483cf4f9005-1012"
        },
        u500874_0h_f5_1: {
            name: "客户端收藏夹",
            pid: "sogou-site-c91e3483cf4f9005-1013"
        },
        u500874_0h_c9: {
            name: "TB集成锁定",
            pid: "sogou-site-c91e3483cf4f9005-1014"
        },
        b400352_2: {
            name: "快播渠道工具栏弹",
            pid: "sogou-site-c91e3483cf4f9005-1015"
        },
        s500945_s1_c4: {
            name: "御龙设首1",
            pid: "sogou-site-c91e3483cf4f9005-1016"
        },
        u500874_0h_e4: {
            name: "TBH推荐锁定导航标准弹窗",
            pid: "sogou-site-c91e3483cf4f9005-1017"
        },
        u500874_0h_f8: {
            name: "视频客户端定制",
            pid: "sogou-site-c91e3483cf4f9005-1018"
        },
        s500945_s1_a6_1: {
            name: "战争前线捆绑toolbar渠道的主页",
            pid: "sogou-site-c91e3483cf4f9005-1019"
        },
        u500874_0h_e6: {
            name: "TBH导航桌面快捷方式",
            pid: "sogou-site-c91e3483cf4f9005-1020"
        },
        Af31003: {
            name: "qqim",
            pid: "sogou-site-c91e3483cf4f9005-1021"
        },
        Af31004: {
            name: "qqshipin",
            pid: "sogou-site-c91e3483cf4f9005-1023"
        },
        Af31005: {
            name: "qqyouxi",
            pid: "sogou-site-c91e3483cf4f9005-1024"
        },
        Af31006: {
            name: "qqyinyue",
            pid: "sogou-site-c91e3483cf4f9005-1022"
        },
        Af31007: {
            name: "qqyinyue",
            pid: "sogou-navi-8529e55044c03640"
        },
        Af31011: {
            name: "qqxinzhang",
            pid: "sogou-site-c91e3483cf4f9005-1025"
        }
    }; (function() {
        var webchatpop = false;
        var isLogined = 0;
        var hoverFlag = 0;
        var intvalHandler;
        var date = new Date();
        var host = window.location.hostname;
        var urlStr = "/getLoginInfo_new.php";
        var __reqStartTime;
        var modelController = $("#loginController");
        var modelControllerSpan = modelController.find("span");
        var modelControllerLink = modelController.find("a");
        var modelTable = $("#loginTable");
        var modelQmail = $("#qmail");
        var modelQmailSpan = $("#qmail span.num");
        var modelWblog = $("#tencentTwiter");
        var modelWblogSpan = $("#tencentTwiter span.num");
        var modelQzone = $("#qzone");
        var modelQzoneSpan = $("#qzone span.num");
        var modelQzoneIcon = $("#qzoneIcon");
        var modelQmailIcon = $("#qmailIcon");
        var modelWblogIcon = $("#tencentTwiterIcon");
        var tripleItem = $("#qmail, #tencentTwiter, #qzone");
        var modelTips = $(".longintips");
        var modelNoLogin = $("#nonelogin");
        var qzoneTipsClass = "";
        var mailTipsClass = "";
        var wblogTipsClass = "";
        var doLogin = function() {
            openLoginDialog();
            return
        };
        function uselessClass(index, name) {
            return ! /^(loginicon)/.test(name)
        }
        var doLogout = function() {
            clearInterval(intvalHandler);
            tripleItem.unbind("click", update);
            tripleItem.unbind("mouseenter");
            tripleItem.unbind("mouseleave");
            modelController.removeClass();
            modelController.addClass("ulogineds");
            modelControllerSpan.empty();
            modelControllerLink.removeClass().addClass("loginicon loginicon-login");
            modelControllerLink.addClass("singallogin");
            modelControllerLink.html("一键登录");
            modelControllerLink.unbind("click");
            modelTable.addClass("off");
            modelNoLogin.removeClass("off");
            modelQzoneIcon.removeClass(uselessClass).addClass("qzone0").removeAttr("title");
            modelQmailIcon.removeClass(uselessClass).addClass("qmail0").removeAttr("title");
            modelWblogIcon.removeClass(uselessClass).addClass("wblog0").removeAttr("title");
            $("<iframe/>", {
                src: "http://account.hao.qq.com/sso/logout_redirect?domain=hao.qq.com"
            }).css("display", "none").appendTo($(document.body));
            bindDoLogin();
            isLogined = 0;
            $("#webchat_pop").css("top", "12px")
        };
        function updateInfo(data) {
            if (!data || data.islogin === undefined || data.islogin === false || data.mailInfo === undefined) {
                return
            }
            if (data.mailInfo !== undefined && data.mailInfo.success && data.mailInfo.TotalCount > 0) {
                var num = data.mailInfo.TotalCount < 100 ? data.mailInfo.TotalCount: "99+";
                modelQmailSpan.attr("real_num", data.mailInfo.TotalCount);
                modelQmailSpan.attr("inbox_count", data.mailInfo.InboxCount);
                modelQmailSpan.attr("group_count", data.mailInfo.GroupCount);
                modelQmailSpan.attr("user_count", data.mailInfo.UserCount);
                modelQmailSpan.attr("plp_count", data.mailInfo.PlpCount);
                if (modelQmailSpan.text() !== "") {
                    if (modelQmailSpan.text() !== num) {
                        modelQmailSpan.text(num)
                    }
                } else {
                    modelQmailIcon.attr("title", "");
                    modelQmailSpan.text(num)
                }
                if (num < 10) {
                    modelQmailIcon.removeClass(uselessClass).addClass("qmail1")
                } else {
                    if (num >= 10 && num < 100) {
                        modelQmailIcon.removeClass(uselessClass).addClass("qmail2")
                    } else {
                        modelQmailIcon.removeClass(uselessClass).addClass("qmail3")
                    }
                }
            } else {
                if (data.mailInfo.success === false) {} else {
                    modelQmailSpan.text("");
                    modelQmailIcon.attr("title", "QQ邮箱");
                    modelQmailIcon.removeClass(uselessClass).addClass("qmail0")
                }
            }
            if (data.weiboInfo !== undefined && data.weiboInfo.success && data.weiboInfo.totalCount > 0) {
                var num = data.weiboInfo.mentions < 100 ? data.weiboInfo.totalCount: "99+";
                modelWblogSpan.attr("real_num", data.weiboInfo.totalCount);
                modelWblogSpan.attr("mentions", data.weiboInfo.mentions);
                modelWblogSpan.attr("fans", data.weiboInfo.fans);
                modelWblogSpan.attr("private", data.weiboInfo["private"]);
                if (modelWblogSpan.text() !== "") {
                    if (modelWblogSpan.text() !== num) {
                        modelWblogSpan.text(num)
                    }
                } else {
                    modelWblogIcon.attr("title", "");
                    modelWblogSpan.text(num)
                }
                if (num < 10) {
                    modelWblogIcon.removeClass(uselessClass).addClass("wblog1")
                } else {
                    if (num >= 10 && num < 100) {
                        modelWblogIcon.removeClass(uselessClass).addClass("wblog2")
                    } else {
                        modelWblogIcon.removeClass(uselessClass).addClass("wblog3")
                    }
                }
            } else {
                if (data.weiboInfo.success === false) {} else {
                    modelWblogSpan.text("");
                    modelWblogIcon.attr("title", "腾讯微博");
                    modelWblogIcon.removeClass(uselessClass).addClass("wblog0")
                }
            }
            if (data.qzoneInfo !== undefined && data.qzoneInfo.success && data.qzoneInfo.count > 0) {
                var num = data.qzoneInfo.count < 100 ? data.qzoneInfo.count: "99+";
                modelQzoneSpan.attr("real_num", data.qzoneInfo.count);
                if (modelQzoneSpan.text() !== "") {
                    if (modelQzoneSpan.text() !== num) {
                        modelQzoneSpan.text(num)
                    }
                } else {
                    modelQzoneIcon.attr("title", "");
                    modelQzoneSpan.text(num)
                }
                if (num < 10) {
                    modelQzoneIcon.removeClass(uselessClass).addClass("qzone1")
                } else {
                    if (num >= 10 && num < 100) {
                        modelQzoneIcon.removeClass(uselessClass).addClass("qzone2")
                    } else {
                        modelQzoneIcon.removeClass(uselessClass).addClass("qzone3")
                    }
                }
            } else {
                if (data.qzoneInfo.success === false) {} else {
                    modelQzoneSpan.text("");
                    modelQzoneIcon.attr("title", "QQ空间");
                    modelQzoneIcon.removeClass(uselessClass).addClass("qzone0")
                }
            }
        }
        function loginHandler(data) {
            if (window.IsdSpeedTool) {
                window.IsdSpeedTool.report({
                    "5": (new Date().getTime() - __reqStartTime),
                    "6": data.backendTime
                })
            }
            if (data.islogin === undefined || data.islogin === false) {
                isLogined = 0;
                return
            } else {
                isLogined = 1;
                $("#webchat_pop").css("top", "26px");
                modelController.removeClass();
                modelController.addClass("ulogined");
                modelNoLogin.addClass("off");
                modelTable.removeClass("off");
                modelController.find(".uname").text(data.nickName);
                modelControllerLink.removeClass();
                modelControllerLink.addClass("close");
                modelControllerLink.text("[退出]");
                modelControllerLink.unbind();
                modelControllerLink.bind("click", doLogout);
                if (data.mailInfo !== undefined && data.mailInfo.success && data.mailInfo.TotalCount > 0) {
                    var num = data.mailInfo.TotalCount < 100 ? data.mailInfo.TotalCount: "99+";
                    modelQmailSpan.text(num);
                    modelQmailSpan.attr("real_num", data.mailInfo.TotalCount);
                    modelQmailSpan.attr("inbox_count", data.mailInfo.InboxCount);
                    modelQmailSpan.attr("group_count", data.mailInfo.GroupCount);
                    modelQmailSpan.attr("user_count", data.mailInfo.UserCount);
                    modelQmailSpan.attr("plp_count", data.mailInfo.PlpCount);
                    if (num < 10) {
                        modelQmailIcon.removeClass(uselessClass).addClass("qmail1")
                    } else {
                        if (num >= 10 && num < 100) {
                            modelQmailIcon.removeClass(uselessClass).addClass("qmail2")
                        } else {
                            modelQmailIcon.removeClass(uselessClass).addClass("qmail3")
                        }
                    }
                } else {
                    modelQmailIcon.attr("title", "QQ邮箱");
                    modelQmailSpan.text("")
                }
                if (data.weiboInfo !== undefined && data.weiboInfo.success && data.weiboInfo.totalCount > 0) {
                    var num = data.weiboInfo.totalCount < 100 ? data.weiboInfo.totalCount: "99+";
                    modelWblogSpan.text(num);
                    modelWblogSpan.attr("real_num", data.weiboInfo.totalCount);
                    modelWblogSpan.attr("mentions", data.weiboInfo.mentions);
                    modelWblogSpan.attr("fans", data.weiboInfo.fans);
                    modelWblogSpan.attr("private", data.weiboInfo["private"]);
                    if (num < 10) {
                        modelWblogIcon.removeClass(uselessClass).addClass("wblog1")
                    } else {
                        if (num >= 10 && num < 100) {
                            modelWblogIcon.removeClass(uselessClass).addClass("wblog2")
                        } else {
                            modelWblogIcon.removeClass(uselessClass).addClass("wblog3")
                        }
                    }
                } else {
                    modelWblogIcon.attr("title", "腾讯微博");
                    modelWblogSpan.text("")
                }
                if (data.qzoneInfo !== undefined && data.qzoneInfo.success && data.qzoneInfo.count > 0) {
                    var num = data.qzoneInfo.count < 100 ? data.qzoneInfo.count: "99+";
                    modelQzoneSpan.text(num);
                    modelQzoneSpan.attr("real_num", data.qzoneInfo.count);
                    if (num < 10) {
                        modelQzoneIcon.removeClass(uselessClass).addClass("qzone1")
                    } else {
                        if (num >= 10 && num < 100) {
                            modelQzoneIcon.removeClass(uselessClass).addClass("qzone2")
                        } else {
                            modelQzoneIcon.removeClass(uselessClass).addClass("qzone3")
                        }
                    }
                } else {
                    modelQzoneIcon.attr("title", "QQ空间");
                    modelQzoneSpan.text("")
                }
                modelQzone.bind({
                    mouseenter: function(e) {
                        hoverFlag = 1;
                        modelTips.removeClass();
                        var num = parseInt(modelQzoneSpan.attr("real_num"));
                        var suffix = getClassSuffix(num);
                        qzoneTipsClass = "qqzonetips" + suffix;
                        modelTips.addClass("longintips " + qzoneTipsClass);
                        if (modelQzoneSpan.text() !== "") {
                            modelTips.find(".tdetial").html("<p>新好友动态(" + modelQzoneSpan.attr("real_num") + ")</p>");
                            modelTips.removeClass("off")
                        } else {
                            modelTips.find(".tdetial").html("点击进入QQ空间");
                            modelTips.addClass("off")
                        }
                        e.stopPropagation()
                    },
                    mouseleave: function() {
                        hoverFlag = 0;
                        setTimeout(function() {
                            if (!hoverFlag) {
                                hoverFlag = 0;
                                modelTips.removeClass(qzoneTipsClass);
                                modelTips.addClass("off");
                                modelTips.find(".ttitle").text("");
                                modelTips.find(".tdetial").html("")
                            }
                        },
                        200)
                    }
                });
                modelWblog.bind({
                    mouseenter: function(e) {
                        hoverFlag = 1;
                        modelTips.removeClass();
                        var num = parseInt(modelWblogSpan.attr("real_num"));
                        var suffix = getClassSuffix(num);
                        wblogTipsClass = "wblogtips" + suffix;
                        modelTips.addClass("longintips " + wblogTipsClass);
                        if (modelWblogSpan.text() !== "") {
                            var html = "";
                            if (parseInt(modelWblogSpan.attr("mentions"))) {
                                html += "<p>@我(" + modelWblogSpan.attr("mentions") + ")</p>"
                            }
                            if (parseInt(modelWblogSpan.attr("private"))) {
                                html += "<p>新私信(" + modelWblogSpan.attr("private") + ")</p>"
                            }
                            if (parseInt(modelWblogSpan.attr("fans"))) {
                                html += "<p>新增听众(" + modelWblogSpan.attr("fans") + ")</p>"
                            }
                            modelTips.find(".tdetial").html(html);
                            modelTips.removeClass("off")
                        } else {
                            modelTips.find(".tdetial").html("点击进入腾讯微博");
                            modelTips.addClass("off")
                        }
                        e.stopPropagation()
                    },
                    mouseleave: function() {
                        hoverFlag = 0;
                        setTimeout(function() {
                            if (!hoverFlag) {
                                hoverFlag = 0;
                                modelTips.removeClass(wblogTipsClass);
                                modelTips.addClass("off");
                                modelTips.find(".ttitle").text("");
                                modelTips.find(".tdetial").html("")
                            }
                        },
                        200)
                    }
                });
                modelQmail.bind({
                    mouseenter: function(e) {
                        hoverFlag = 1;
                        modelTips.removeClass();
                        var num = parseInt(modelQmailSpan.attr("real_num"));
                        var suffix = getClassSuffix(num);
                        mailTipsClass = "mailtips" + suffix;
                        modelTips.addClass("longintips " + mailTipsClass);
                        if (modelQmailSpan.text() !== "") {
                            var html = "";
                            if (parseInt(modelQmailSpan.attr("inbox_count")) > 0) {
                                html += "<p>收件箱(" + modelQmailSpan.attr("inbox_count") + ")</p>"
                            }
                            if (parseInt(modelQmailSpan.attr("group_count")) > 0) {
                                html += "<p>群邮件(" + modelQmailSpan.attr("group_count") + ")</p>"
                            }
                            if (parseInt(modelQmailSpan.attr("user_count")) > 0) {
                                html += "<p>QQ邮件订阅(" + modelQmailSpan.attr("user_count") + ")</p>"
                            }
                            if (parseInt(modelQmailSpan.attr("plp_count")) > 0) {
                                html += "<p>漂流瓶(" + modelQmailSpan.attr("plp_count") + ")</p>"
                            }
                            modelTips.find(".tdetial").html(html);
                            modelTips.removeClass("off")
                        } else {
                            modelTips.find(".tdetial").html("点击进入QQ邮箱");
                            modelTips.addClass("off")
                        }
                        e.stopPropagation()
                    },
                    mouseleave: function() {
                        hoverFlag = 0;
                        setTimeout(function() {
                            if (!hoverFlag) {
                                hoverFlag = 0;
                                modelTips.removeClass(mailTipsClass);
                                modelTips.addClass("off");
                                modelTips.find(".ttitle").text("");
                                modelTips.find(".tdetial").html("")
                            }
                        },
                        200)
                    }
                });
                modelQzone.bind("click",
                function(e) {
                    modelQzoneSpan.text("");
                    modelQzoneIcon.removeClass(uselessClass).addClass("qzone0").attr("title", "QQ空间");
                    e.stopPropagation();
                    e.preventDefault();
                    window.open("http://qzone.qq.com/")
                });
                modelWblog.bind("click",
                function(e) {
                    modelWblogSpan.text("");
                    modelWblogIcon.removeClass(uselessClass).addClass("wblog0").attr("title", "腾讯微博");
                    e.preventDefault();
                    window.open("http://t.qq.com/")
                });
                modelQmail.bind("click",
                function(e) {
                    e.preventDefault();
                    window.open("http://mail.qq.com/")
                });
                $(".longintips").hover(function() {
                    hoverFlag = 1
                },
                function() {
                    hoverFlag = 0;
                    $(this).removeClass();
                    $(this).addClass("longintips off");
                    $(this).find(".ttitle").text("");
                    $(this).find(".tdetial").html("")
                });
                intvalHandler = setInterval(update, 10 * 60 * 1000)
            }
        }
        function getClassSuffix(num) {
            if (num >= 100) {
                return "3"
            } else {
                if (num > 0 && num < 10) {
                    return "1"
                } else {
                    if (num > 10 && num < 100) {
                        return "2"
                    } else {
                        return "0"
                    }
                }
            }
        }
        function get_token(str) {
            var hash = 5381;
            if (str) {
                for (var i = 0,
                len = str.length; i < len; ++i) {
                    hash += (hash << 5) + str.charCodeAt(i)
                }
                return hash & 2147483647
            }
        }
        function update() {
            __reqStartTime = +new Date;
            $.ajax({
                type: "GET",
                url: urlStr,
                dataType: "json",
                success: updateInfo,
                error: function() {
                    return
                },
                cache: false
            })
        }
        function openLoginDialog() {
            var jumpurl = (location.origin ? location.origin: (location.protocol + "//" + location.hostname)) + "/jump.html";
            var params = [];
            var url = null;
            params.push("client_id=2009");
            params.push("domain=hao.qq.com");
            params.push("provider=qq");
            params.push("ru=" + encodeURIComponent(jumpurl));
            url = "http://account.sogou.com/connect/login?" + params.join("&");
            try {
                FloatShow(url, 490, 390)
            } catch(e) {}
        }
        window.ptlogin2_login_ok = function(obj) {
            ptlogin2_onClose();
            init()
        };
        function checkLogin() {
            __reqStartTime = +new Date;
            $.ajax({
                type: "GET",
                url: urlStr,
                dataType: "json",
                success: loginHandler,
                error: function() {
                    return
                },
                cache: false
            })
        }
        function bindDoLogin() {
            $(".singallogin").bind("click",
            function(e) {
                window.__send && __send("extra", "module=login", false, true);
                if (window.FloatShow === undefined || typeof(window.FloatShow) !== "function") {
                    $.ajax({
                        url: QBUtils.getResourcePrePath("resource/views/scripts/pop_new.min.js?a1f3ed85f34754623fe7de5c890d705a"),
                        dataType: "script",
                        success: function() {
                            doLogin()
                        },
                        error: function(jqXhr, error) {},
                        cache: false
                    })
                } else {
                    doLogin()
                }
                e.preventDefault()
            })
        }
        function init() {
            if (window.sqPassportSC && sqPassportSC.cookieHandle()) {
                checkLogin()
            }
            if (!isLogined) {
                bindDoLogin()
            }
        }
        init();
        var qqnima = (navigator.userAgent.match(/QQBrowser\/[0-9]+\.[0-9]+\.[0-9]+\.[0-9]+/g) || []).join("").replace(/[^0-9\.]/g, "");
        qqnima = (qqnima.match(/^[0-9]+\.[0-9]+/g) || []).join("").split(".");
        if (qqnima && qqnima.length == 2 && (qqnima[0] > 7 || qqnima[0] == 7 && qqnima[1] >= 6)) {
            qqnima = 1
        } else {
            qqnima = 0
        }
    })(); (function() { (function() {
            var clientCatche = {
                guid_key: null,
                supplyid_key: null,
                version_key: null
            };
            var guid_key = "qb7-guid",
            supplyid_key = "qb7-supplyid",
            version_key = "qb7-version",
            pvtime = QBUtils.getStartTime();
            window.getGuid = function() {
                var guid = 0;
                try {
                    guid = clientCatche.guid_key;
                    if (guid == 0 || guid == null) {
                        guid = window.external.getGuid();
                        clientCatche.guid_key = guid
                    }
                } catch(e) {
                    guid = 0
                }
                return guid
            };
            window.getSupplyId = function() {
                var supplyid = 0;
                try {
                    supplyid = clientCatche.supplyid_key;
                    if (supplyid == 0 || supplyid == null) {
                        supplyid = window.external.getSupplyId();
                        clientCatche.supplyid_key = supplyid
                    }
                } catch(e) {
                    supplyid = 0
                }
                return supplyid
            };
            window.getVersion = function() {
                var version = 0;
                try {
                    version = clientCatche.version_key;
                    if (version == 0 || version == null) {
                        version = window.external.getVersion();
                        clientCatche.version_key = version
                    }
                } catch(e) {
                    version = 0
                }
                return version
            };
            window.setCuid = function() {
                var curDate = new Date();
                var curMs = curDate.getUTCMilliseconds();
                var id = (Math.round(Math.abs(Math.random() - 1) * 2147483647) * curMs) % 10000000000;
                document.cookie = "cuid=" + id + ";domain=qq.com;expires=Sun, 18 Jan 2038 00:00:00 GMT;";
                return id
            };
            window.getCuid = function() {
                try {
                    var reg = new RegExp("(^| )cuid=([^;]*)(;|$)");
                    var cookie = decodeURIComponent(document.cookie);
                    var result = cookie.match(reg);
                    return (!result ? null: result[2])
                } catch(e) {
                    return null
                }
            };
            window.getPageVersion = function() {
                return $("body").attr("version")
            };
            window.getParam = function(key) {
                if (!key) {
                    return null
                }
                var reg = new RegExp(key + "=([^&]*)(&|$)");
                var url = decodeURIComponent(window.location.href);
                var result = url.match(reg);
                return (!result ? null: result[1])
            };
            window.getfr = function() {
                return getParam("fr")
            };
            var guid = getGuid(),
            version = getVersion(),
            supplyid = getSupplyId(),
            fr = getfr();
            var dm = "client",
            page = "index.html";
            if (window.location.pathname.indexOf("level2")) {
                page = window.location.pathname
            }
            var imgurl_pre = "http://nav.browser.qq.com/x?dm=" + dm + "&page=" + page + "&guid=" + guid + "&pv=" + pvtime.getTime() + "&version=" + version + "&supplyid=" + supplyid;
            var cuid = getCuid() !== null ? getCuid() : setCuid(),
            pageVersion = getPageVersion();
            if (fr !== null) {
                imgurl_pre += "&fr=" + fr
            }
            imgurl_pre += "&cuid=" + cuid + "&pageid=" + pageVersion;
            var _image = new Image(1, 1);
            window.sendStat = function(json) {
                return;
                var imgurl = imgurl_pre;
                if (json != null) {
                    for (var x in json) {
                        imgurl = imgurl + "&" + x + "=" + json[x]
                    }
                }
                var date = new Date();
                imgurl += "&rand=" + date.getTime();
                _image.src = imgurl
            }
        })();
        window.sendClick = function(c) {
            if (!c) {
                return
            }
            var json2Send;
            if (typeof(c) == "string") {
                json2Send = {
                    hottag: c
                }
            } else {
                json2Send = c;
                c = c.hottag
            }
            if (typeof(window.pgvSendClick) === "function") {
                pgvSendClick({
                    virtualDomain: "daohang.qq.com",
                    virtualURL: "/qb7.html",
                    hottag: c
                })
            }
            if (typeof(window.sendStat) === "function") {
                sendStat(json2Send)
            }
        };
        window.sendQuery = function(engin, channel, key) {
            if (typeof(window.sendStat) === "function") {
                sendStat({
                    sengine: engin,
                    schannel: channel,
                    qkey: encodeURIComponent(key)
                })
            }
        };
        function listenClick(config) {
            if (!config) {
                return
            }
            var container = config[0];
            if (config.length == 2) {
                $(container).click(function() {
                    sendClick(config[1])
                });
                return
            }
            if (config.length >= 3) {
                $(container).delegate(config[1], "click",
                function(evt) {
                    var tag = config[2];
                    if (typeof(tag) === "function") {
                        sendClick(tag($(this), evt))
                    } else {
                        if (typeof(tag) === "string") {
                            var index = $(this).index(container + " " + config[1]) + 1;
                            sendClick(tag + "." + index)
                        }
                    }
                })
            }
        }
        var clickStatConfig = [["body", "a",
        function(ele) {
            if ($(ele).attr("data-hottag") !== undefined) {
                return $(ele).attr("data-hottag")
            }
        }]];
        for (var i = 0,
        n = clickStatConfig.length; i < n; ++i) {
            listenClick(clickStatConfig[i])
        }
        if (typeof(window.pgvMain) == "function") {
            setTimeout(function() {
                pgvMain("pathtrace", {
                    virtualDomain: "daohang.qq.com",
                    virtualURL: "/qb7.html",
                    pathStart: true,
                    tagParamName: "ADTAG",
                    useRefUrl: false,
                    override: true,
                    careSameDomainRef: false
                })
            },
            100)
        }
        if (typeof(window.sendStat) == "function") {
            sendStat()
        }
    })(); (function() {
        var jokeEntry = "joke-cache";
        var $joke = $("#joke");
        function showJoke() {
            var cache = $.parseJSON($("#joke_content").text());
            if (cache && $.isArray(cache) && cache.length) {
                var i = ((Math.random() * 10000) | 0) % cache.length;
                var item = cache[i];
                if ($.isArray(item) && item.length > 1) {
                    $joke.attr("href", item[1]).html(item[0])
                }
            }
        }
        try {
            showJoke()
        } catch(e) {
            $joke.attr("href", "http://haha.sogou.com/120298/").html("放电不是你想放")
        }
    })(); (function() {
        function sck(name, val, expires) {
            QBCache.set(name, val, expires)
        }
        var DAYSECONDS = 86400000;
        window.cmail_pop = function() {
            var smo = $("form.email_f select").val();
            var smo_arr = {
                qqcom: "http://mail.qq.com",
                qzone: "http://qzone.qq.com/",
                gmail: "https://mail.google.com",
                "139com": "http://mail.10086.cn/",
                hotmail: "http://mail.live.com",
                kaixin001: "http://www.kaixin001.com/",
                baidu: "http://passport.baidu.com/?login",
                sogou: "http://mail.sogou.com/"
            };
            if (smo_arr[smo]) {
                document.gomail.reset();
                window.open(smo_arr[smo]);
                return true
            }
        };
        window.cmail = function() {
            var D = document.gomail;
            var C = D.domains;
            var A = D.uName;
            var B = D.uPw;
            if (C.value == "") {
                alert("您没有选择邮箱！");
                C.focus();
                return false
            }
            if (A.value == "") {
                alert("用户名不能为空！");
                A.focus();
                return false
            }
            if (B.value == "") {
                alert("密码不能为空！");
                B.focus();
                return false
            }
            switch (C.value) {
            case "163":
                D.action = "http://reg.163.com/CheckUser.jsp";
                D.url.value = "http://fm163.163.com/coremail/fcg/ntesdoor2?lightweight=1&verifycookie=1&language=-1&style=15";
                D.username.value = A.value;
                D.password.value = B.value;
                D.enterVip.value = "";
                break;
            case "126":
                D.action = "https://reg.163.com/logins.jsp";
                D.domain.value = "126.com";
                D.username.value = A.value + "@126.com";
                D.password.value = B.value;
                D.url.value = "http://entry.mail.126.com/cgi/ntesdoor?lightweight%3D1%26verifycookie%3D1%26language%3D0%26style%3D-1";
                window.open("https://reg.163.com/logins.jsp?url=http://entry.mail.126.com/cgi/ntesdoor?lightweight%3D1%26verifycookie%3D1%26language%3D0%26style%3D-1&username=" + A.value + "@126.com&password=" + B.value + "&domain=126.com");
                B.value == "";
                sck("seMAILDOMAIN", C.value, 30 * DAYSECONDS);
                sck("seEMAIL", A.value, 30 * DAYSECONDS);
                return false;
                break;
                D.username.value = A.value + "@sina.com";
                D.password.value = B.value;
                D.url.value = "http://mail.sina.com.cn/";
                D.u.value = A.value;
                D.psw.value = B.value;
                break;
            case "sohu":
                D.action = "http://passport.sohu.com/login.jsp";
                D.url.value = "";
                D.UserName.value = A.value;
                D.Password.value = B.value;
                D.id.value = A.value;
                D.username.value = A.value;
                D.password.value = B.value;
                D.m.value = A.value;
                D.passwd.value = B.value;
                D.mpass.value = B.value;
                D.loginid.value = A.value + "@sohu.com";
                D.fl.value = "1";
                D.vr.value = "1|1";
                D.appid.value = "1000";
                D.ru.value = "http://login.mail.sohu.com/servlet/LoginServlet";
                D.eru.value = "http://login.mail.sohu.com/login.jsp";
                D.ct.value = "1173080990";
                D.sg.value = "5082635c77272088ae7241ccdf7cf062";
                break;
            case "yahoo":
                D.action = "https://edit.bjs.yahoo.com/config/login";
                D.login.value = A.value;
                D.passwd.value = B.value;
                break;
            case "yahoocn":
                D.action = "https://edit.bjs.yahoo.com/config/login";
                D.login.value = A.value + "@yahoo.cn";
                D.passwd.value = B.value;
                break;
            case "yeah":
                D.action = "https://reg.163.com/logins.jsp";
                D.domain.value = "yeah.net";
                D.username.value = A.value + "@yeah.net";
                D.password.value = B.value;
                D.url.value = "http://entry.mail.yeah.net/cgi/ntesdoor?lightweight%3D1%26verifycookie%3D1%26style%3D-1";
                break;
            case "tom":
                D.action = "http://bjweb.163.net/cgi/163/login_pro.cgi";
                D.user.value = A.value;
                D.pass.value = B.value;
                break;
            case "21cn":
                D.action = "http://passport.21cn.com/maillogin.jsp";
                D.LoginName.value = A.value;
                D.passwd.value = B.value;
                D.domainname.value = "21cn.com";
                D.UserName.value = A.value + "@21cn.com";
                break;
            case "chinaren":
                D.action = "http://passport.sohu.com/login.jsp";
                D.loginid.value = A.value + "@chinaren.com";
                D.passwd.value = B.value;
                D.fl.value = "1";
                D.vr.value = "1|1";
                D.appid.value = "1005";
                D.ru.value = "http://profile.chinaren.com/urs/setcookie.jsp?burl=http://alumni.chinaren.com/";
                D.ct.value = "1174378209";
                D.sg.value = "84ff7b2e1d8f3dc46c6d17bb83fe72bd";
                break;
            case "renren":
                D.action = "http://passport.renren.com/PLogin.do";
                D.email.value = A.value;
                D.password.value = B.value;
                D.domain.value = "renren.com";
                D.origURL.value = "http://www.renren.com/Home.do";
                break;
            case "tianya":
                D.action = "http://www.tianya.cn/user/loginsubmit.asp";
                D.vwriter.value = A.value;
                D.vpassword.value = B.value;
                break;
            case "51com":
                D.action = "http://passport.51.com/login.5p";
                D.passport_51_user.value = A.value;
                D.passport_51_password.value = B.value;
                D.gourl.value = "http%3A%2F%2Fmy.51.com%2Fwebim%2Findex.php";
                break
            }
            B.value = "";
            sck("seMAILDOMAIN", C.value, 30 * DAYSECONDS);
            sck("seEMAIL", A.value, 30 * DAYSECONDS);
            $("form.email_f").hide();
            return true
        };
        $("#mailinput").placeholder().click(function() {
            window.__send && __send("click", "module=wc_0_邮箱登录", false, true);
            var lazyMailTextarea = $("#lazy-mail-textarea");
            if (lazyMailTextarea.length) {
                lazyMailTextarea.replaceWith(lazyMailTextarea.val());
                $("#sogou_mail_options").val(QBCache.get("seMAILDOMAIN"));
                $("#Musername").val(QBCache.get("seEMAIL") || "")
            }
            setTimeout(function() {
                $("form.email_f").show();
                $("#Musername").focus()
            },
            100)
        });
        $(document).click(function(e) {
            if (!QBUtils.isAncestor($("form.email_f")[0], e.target)) {
                $("form.email_f").hide()
            }
        })
    })();
    var HistoryModel = function(key, maxlen) {
        if (!key) {
            throw '[History] "key" must be set.'
        }
        if (!maxlen) {
            maxLen = 7
        }
        var store = function(ary) {
            var str;
            if ((typeof JSON !== "undefined") && ("stringify" in JSON)) {
                str = JSON.stringify(ary)
            }
            QBCache.set(key, str)
        },
        dry = function(ary, pos) {
            return [].concat(ary.slice(0, pos), ary.slice(pos + 1))
        };
        this.getAll = function() {
            var tmp = QBCache.get(key);
            if (tmp) {
                try {
                    return eval(tmp)
                } catch(e) {
                    return []
                }
            } else {
                return []
            }
        };
        this.add = function(key, value) {
            var tmp = this.getAll();
            if (!key) {
                return
            }
            for (var i = 0,
            len = tmp.length; i < len; i++) {
                if (tmp[i][0] == key) {
                    tmp = dry(tmp, i);
                    break
                }
            }
            tmp.unshift([key, value]);
            if (tmp.length > maxlen) {
                tmp = tmp.slice(0, maxlen)
            }
            store(tmp)
        };
        this.del = function(key) {
            var tmp = this.getAll();
            if (tmp.length) {
                for (var i = 0,
                len = tmp.length; i < len; i++) {
                    if (tmp[i][0] == key) {
                        store(dry(tmp, i));
                        break
                    }
                }
            }
        };
        this.clear = function() {
            QBCache.set(key, "[]", 0)
        }
    };
    var HistoryModel = function(key, maxlen) {
        if (!key) {
            throw '[History] "key" must be set.'
        }
        if (!maxlen) {
            maxLen = 7
        }
        var store = function(ary) {
            var str;
            if ((typeof JSON !== "undefined") && ("stringify" in JSON)) {
                str = JSON.stringify(ary)
            }
            QBCache.set(key, str)
        },
        dry = function(ary, pos) {
            return [].concat(ary.slice(0, pos), ary.slice(pos + 1))
        };
        this.getAll = function() {
            var tmp = QBCache.get(key);
            if (tmp) {
                try {
                    return eval(tmp)
                } catch(e) {
                    return []
                }
            } else {
                return []
            }
        };
        this.add = function(key, value) {
            var tmp = this.getAll();
            if (!key) {
                return
            }
            for (var i = 0,
            len = tmp.length; i < len; i++) {
                if (tmp[i][0] == key) {
                    tmp = dry(tmp, i);
                    break
                }
            }
            tmp.unshift([key, value]);
            if (tmp.length > maxlen) {
                tmp = tmp.slice(0, maxlen)
            }
            store(tmp)
        };
        this.del = function(key) {
            var tmp = this.getAll();
            if (tmp.length) {
                for (var i = 0,
                len = tmp.length; i < len; i++) {
                    if (tmp[i][0] == key) {
                        store(dry(tmp, i));
                        break
                    }
                }
            }
        };
        this.clear = function() {
            QBCache.set(key, "[]", 0)
        }
    };
    var History = function(storageKey, maxlen) {
        this.storageKey = storageKey || "qb-qq-history";
        this.maxlen = maxlen ? maxlen: 7;
        this.model = new HistoryModel(this.storageKey, this.maxlen);
        this.add = function(key, value) {
            this.model.add(key, value)
        };
        this.show = function(obj) {
            var data = this.model.getAll(),
            items = "";
            if (data.length) {
                for (var i = 0,
                len = data.length; i < len; i++) {
                    var tmp = data[i];
                    items += '<a href="' + tmp[1] + '" target="_blank" title="' + tmp[0] + '">' + tmp[0] + "</a>"
                }
                obj.find("div.content").html(items);
                var container_width = obj.find("div.content").width();
                if (!obj.find("a.clear").length) {
                    obj.append('<a href="javascript:;" class="clear" title="清空最近访问" alt="清空最近访问"><span class="icon jpgicon jpgicon-trashhover"></span></a>')
                }
                obj.find("div.content a").each(function() {
                    container_width -= $(this).outerWidth(true);
                    if (container_width < 0) {
                        $(this).remove()
                    }
                });
                $(".lastclick").addClass("have")
            } else {
                $(".lastclick").removeClass("have")
            }
        };
        this.clear = function() {
            this.model.clear()
        }
    };
    var historyObj = new History();
    var $lastclick_div = $("div.lastclick");
    $("body").click(function(evt) {
        var elem = $(evt.target);
        if (elem[0].tagName != "A") {
            return
        }
        if (need_record(elem)) {
            if (elem.attr("href").indexOf("http://") !== false) {
                historyObj.add(elem.text().replace(/(hot)/g, ""), elem.attr("href"));
                historyObj.show($lastclick_div)
            }
        }
    });
    function need_record($obj) {
        var flag = false;
        if ($obj.data("record") != undefined) {
            flag = $obj.data("record");
            return flag
        }
        $obj.parents().each(function() {
            if ($(this).data("record") != undefined) {
                flag = $(this).data("record");
                return false
            }
        });
        return flag
    }
    $lastclick_div.delegate("a.clear", "click",
    function(e) {
        e.preventDefault();
        historyObj.clear();
        $(this).parent().find("div.content").html("<span>此处记录您最近点击过的网站</span>");
        $(this).remove();
        $(".lastclick").removeClass("have")
    });
    historyObj.show($lastclick_div); (function() {
        var __yTab_proto = {
            init: function() {
                this.initEvt()
            },
            initEvt: function() {
                var me = this;
                me.$tabs.hover(function(e) {
                    var i = +$(this).attr("data-tab-index");
                    if (i !== me.currentTabIndex) {
                        clearTimeout(me.__switchTimeout);
                        me.__switchTimeout = setTimeout(function() {
                            me.switchTab(i)
                        },
                        200);
                        e.preventDefault()
                    }
                },
                function(e) {
                    clearTimeout(me.__switchTimeout)
                })
            },
            switchTab: function(index) {
                if (index >= this.totalSize) {
                    index = 0
                } else {
                    if (index < 0) {
                        index = this.totalSize - 1
                    }
                }
                this.currentTabIndex = index;
                var cuTab = this.$contents.addClass("off").eq(index),
                $imgs;
                cuTab.removeClass("off");
                haoqq.imgloadtrigger.getTriggerInstance().loadImg();
                this.$tabs.removeClass("current-item").eq(index).addClass("current-item")
            }
        };
        function yTab(container, options) {
            if (!container) {
                return
            }
            if ("string" === typeof container || container instanceof String) {
                this.$container = $(container)
            } else {
                this.$container = container
            }
            this.currentTabIndex = 0;
            this.$tabs = this.$container.find("span[data-tab-index]");
            this.$contents = this.$container.find("div[data-tab-index]");
            this.totalSize = this.$tabs.length;
            this.init()
        }
        yTab.prototype = __yTab_proto;
        var __subTab_proto = {
            init: function() {
                if (this.totalSize > 0) {
                    this.initEvt()
                } else {
                    this.$larr.hide();
                    this.$rarr.hide()
                }
            },
            initEvt: function() {
                var me = this;
                me.$larr.click(function(e) {
                    me.switchTab(me.currentTabIndex - 1)
                });
                me.$rarr.click(function(e) {
                    me.switchTab(me.currentTabIndex + 1)
                })
            },
            switchTab: function(index) {
                if (index >= this.totalSize) {
                    index = 0
                } else {
                    if (index < 0) {
                        index = this.totalSize - 1
                    }
                }
                this.currentTabIndex = index;
                var cuTab = this.$tabs.addClass("off").eq(index),
                $imgs;
                cuTab.removeClass("off");
                haoqq.imgloadtrigger.getTriggerInstance().loadImg()
            }
        };
        function subTab(selector) {
            this.$container = ("string" === typeof selector) ? $(selector) : selector;
            this.$larr = this.$container.find(".larr");
            this.$rarr = this.$container.find(".rarr");
            this.$tabs = this.$container.find("[data-switch-index]");
            this.totalSize = this.$tabs.length;
            this.currentTabIndex = 0;
            this.init()
        }
        subTab.prototype = __subTab_proto;
        function initTab() {
            $(".boxtab").each(function() {
                new yTab($(this).removeClass("boxtab"));
                $(this).find("img.sync").lazyload({
                    effect: "fadeIn",
                    threshold: 150
                })
            });
            $(".subtab").each(function() {
                new subTab($(this).removeClass("subtab"))
            })
        }
        initTab();
        $(window).scroll(initTab).resize(initTab)
    })(); (function() {
        var WeatherModel = function(config) {
            config = config || {};
            this.city = config.city;
            this.loaded = false;
            this.attributes = {
                temperature: "",
                today: {},
                tomorrow: {},
                cityName: "",
                cityId: "",
                urlid: 0,
                select: "",
                pl: "",
                PMindex: null,
                level: "",
                advice: "",
                url: "",
                pinyin: "",
                standard: null
            };
            this.init(config)
        };
        WeatherModel.prototype.fill = function(data) {
            if (typeof(data) !== "object") {
                return false
            }
            var k;
            for (k in this.attributes) {
                if (data.hasOwnProperty(k)) {
                    this.attributes[k] = data[k]
                }
            }
            this.loaded = true;
            return this
        };
        WeatherModel.prototype.init = function(config) {
            return this.fill(config.data)
        };
        WeatherModel.prototype.setCity = function(cityName) {};
        WeatherModel.prototype.get = function(key) {
            return this.attributes[key]
        };
        WeatherModel.prototype.getTomorrowCode = function(key) {
            var tomorrow = this.attributes.tomorrow;
            var weainfo = tomorrow.bwea;
            return getWeatherCode(weainfo)
        };
        WeatherModel.prototype.getTodayCode = function(key) {
            var today = this.attributes.today;
            var weainfo = ((new Date()).getHours() < 12) ? today.bwea: today.ewea;
            return getWeatherCode(weainfo)
        };
        window.WeatherModel = WeatherModel;
        var WEATHER_ICON_MAP = {
            "晴": 1,
            "多云": 2,
            "阴": 3,
            "阵雨": 4,
            "雷阵雨": 5,
            "雷阵雨并伴有冰雹": 6,
            "雨夹雪": 7,
            "小雨": 8,
            "中雨": 9,
            "大雨": 10,
            "暴雨": 11,
            "大暴雨": 12,
            "特大暴雨": 13,
            "阵雪": 14,
            "小雪": 15,
            "中雪": 16,
            "大雪": 17,
            "暴雪": 18,
            "雾": 19,
            "冻雨": 20,
            "沙尘暴": 21,
            "小雨-中雨": 8,
            "中雨-大雨": 9,
            "大雨-暴雨": 10,
            "暴雨-大暴雨": 11,
            "大暴雨-特大暴雨": 12,
            "小雪-中雪": 15,
            "中雪-大雪": 16,
            "大雪-暴雪": 17,
            "浮尘": 22,
            "扬沙": 23,
            "强沙尘暴": 24,
            "大风": 24,
            "龙卷风": 24
        };
        var WEATHER_ICON_RE_MAP = {
            "雪": 15,
            "多云": 2,
            "阴": 3,
            "雨": 8,
            "雾": 18,
            "沙": 21,
            "冰雹": 6,
            "风": 24
        };
        function getWeatherCode(wea) {
            var code = WEATHER_ICON_MAP[wea];
            if (typeof(code) !== "undefined") {
                return code
            }
            for (var k in WEATHER_ICON_RE_MAP) {
                if (wea.indexOf(k) !== -1) {
                    return WEATHER_ICON_RE_MAP[k]
                }
            }
            return 0
        }
    })();
    var getWeatherCacheKey = function(city) {
        return "qb7-weather2-" + city
    };
    function removeChar(value) {
        if (value.indexOf("(") > 0) {
            return value.substring(0, value.indexOf("("))
        } else {
            return value
        }
    }
    var dataParser = function(data) {
        var parsed = {};
        if (typeof(data) == "object") {
            parsed.today = data.today;
            parsed.tomorrow = data.tomorrow;
            parsed.cityName = removeChar(data.city);
            parsed.cityId = data.id;
            parsed.pinyin = data.pinyin;
            parsed.urlid = data.id;
            parsed.select = data.city;
            if (data.pm25) {
                parsed.PMindex = data.pm25.value;
                parsed.level = data.pm25.level;
                parsed.advice = data.pm25.advice;
                parsed.url = data.pm25.url;
                switch (parsed.level) {
                case "优":
                    parsed.standard = 0;
                    break;
                case "良":
                    parsed.standard = 1;
                    break;
                case "轻度污染":
                    parsed.standard = 2;
                    break;
                case "中度污染":
                    parsed.standard = 3;
                    break;
                case "重度污染":
                    parsed.standard = 4;
                    break;
                case "严重污染":
                    parsed.standard = 5;
                    break
                }
            }
        } else {
            parsed = false
        }
        return new window.WeatherModel().fill(parsed)
    };
    var weatherCb;
    window.loadWeatherData = function(rawData) {
        if (rawData.error) {
            return
        }
        if (rawData) {
            QBCache.set(getWeatherCacheKey(rawData.id), rawData, 1800 * 1000);
            QBCache.set("qb7-weather2-city", rawData.id, 1800 * 1000)
        }
        var model = dataParser(rawData);
        if (typeof(weatherCb) === "function") {
            weatherCb(model);
            weatherCb = null
        }
    };
    var __WeatherLoadStartTime = null;
    var __city = null;
    var WeatherStore = {
        load: function(city, onloadcallback) {
            if (typeof(onloadcallback) !== "function") {
                return
            }
            if (city) {
                QBCache.set("qb7-weather2-city", city);
                var QBCachedData = QBCache.get(getWeatherCacheKey(city));
                if (QBCachedData != null) {
                    onloadcallback(dataParser(QBCachedData));
                    return
                }
            }
            weatherCb = onloadcallback;
            __WeatherLoadStartTime = +new Date;
            var url = "weather";
            if (city) {
                url += "?id=" + city;
                __city = city
            }
            $.ajax({
                url: url,
                jsonp: "cb",
                jsonpCallback: "loadWeatherData",
                dataType: "jsonp"
            })
        }
    }; (function() {
        var $showCityPMTip;
        var $showCityPMAdvice;
        var $showCityPMIndex;
        var $selectCityDialog;
        var $todayPm;
        var hoverTrigger;
        function init() {
            $todayPm = $("#today_weather_pm");
            $showCityPMTip = $("#show_city_pm_tip");
            $showCityPMAdvice = $("#show_city_pm_advice");
            $showCityPMIndex = $("#show_city_pm_index");
            $selectCityDialog = $("#select_city_dialog")
        }
        window.setCityPM25 = setCityPM25;
        function setCityPM25(weatherModel) {
            setShowCityPMInfo(weatherModel);
            setShowCityPMTip(weatherModel)
        }
        function setShowCityPMTip(weatherModel) {
            if (!weatherModel.attributes.PMindex) {
                return
            }
            var className = "aqistyle" + weatherModel.attributes.standard;
            var pmIndex = weatherModel.attributes.PMindex;
            var advice = weatherModel.attributes.advice;
            $showCityPMAdvice.text(advice);
            $showCityPMIndex.text(pmIndex);
            $showCityPMTip.removeClass(function() {
                return $(this).attr("class").replace(/off/g, "")
            });
            $showCityPMTip.addClass(className)
        }
        function setShowCityPMInfo(weatherModel) {
            var className;
            var word;
            switch (weatherModel.attributes.standard) {
            case 0:
                className = "fine";
                word = "优";
                break;
            case 1:
                className = "good";
                word = "良";
                break;
            case 2:
                className = "tiny";
                word = "轻度";
                break;
            case 3:
                className = "middle";
                word = "中度";
                break;
            case 4:
                className = "danger";
                word = "重度";
                break;
            case 5:
                className = "die";
                word = "严重";
                break;
            default:
                $todayPm.addClass("off");
                return
            }
            $todayPm.removeClass().addClass(className);
            $todayPm.text(word);
            $todayPm.prev("a").text(weatherModel.attributes.standard < 2 ? "空气质量：": "空气污染：");
            $todayPm.attr("data-pm-link", weatherModel.attributes.url)
        }
        function goPM25Site(event) {
            var el = $(this);
            var url = el.attr("data-pm-link");
            if (url) {
                window.open(url)
            }
            event.stopPropagation()
        }
        function showCityPMTip() {
            if (isCitySelectShow() === true) {
                return
            }
            $showCityPMTip.removeClass("off");
            hoverTrigger = window.setTimeout(function() {
                window.sendClick("qbdh.head.pm25.hover")
            },
            1000)
        }
        function isCitySelectShow() {
            return ! $selectCityDialog.hasClass("off")
        }
        function hideCityPMTip() {
            window.setTimeout(function() {
                if (isEnterPMTip === false) {
                    window.clearTimeout(hoverTrigger);
                    $showCityPMTip.addClass("off")
                }
            },
            200)
        }
        var isEnterPMTip = false;
        function enterCityPMTip() {
            isEnterPMTip = true
        }
        function leaveCityPMTip() {
            isEnterPMTip = false;
            hideCityPMTip()
        }
        init()
    })(); (function() {
        var $todayPm, $todayTemp, $todayClimate, $todayWeatherIcon, $tomorrowWatherDesc, $tomorrowTemp, $tomorrowWeatherIcon, $citySelectArea, $todayWeatherArea, $tomorrowWeatherArea, $weekWeather;
        var $cityText;
        function init() {
            $citySelectArea = $("#city_select");
            $todayWeatherArea = $("#today_weather");
            $tomorrowWeatherArea = $("#tomorrow_weather");
            $cityText = $("#city_text");
            $todayPm = $("#today_weather_pm");
            $todayTemp = $("#today_weather_temp");
            $todayClimate = $("#today_weather_climate");
            $todayWeatherIcon = $("#today_weather_icon");
            $tomorrowWatherDesc = $("#tomorrow_wather_desc");
            $tomorrowTemp = $("#tomorrow_weather_temp");
            $tomorrowWeatherIcon = $("#tomorrow_weather_icon");
            $todayWeatherArea.click(goWeatherSite);
            $tomorrowWeatherArea.click(goWeatherSite);
            if (QBCache.get("qb7-weather2-select-city")) {
                loadWeatherInfo(QBCache.get("qb7-weather2-select-city"))
            } else {
                if (QBCache.get("qb7-weather2-city")) {
                    loadWeatherInfo(QBCache.get("qb7-weather2-city"))
                } else {
                    loadWeatherInfo(null)
                }
            }
        }
        function loadWeatherInfo(city) {
            WeatherStore.load(city, afterWeatherLoad)
        }
        window.loadWeatherInfo = loadWeatherInfo;
        function afterWeatherLoad(weatherModel) {
            var cityId = weatherModel.get("cityId");
            $citySelectArea.removeClass("off");
            $todayWeatherArea.removeClass("off");
            $tomorrowWeatherArea.removeClass("off");
            setShowCityText(weatherModel);
            window.setCityPM25(weatherModel);
            setShowCityTodayWeather(weatherModel);
            setShowCityTomorrowWeather(weatherModel);
            $rowWrappr = $todayWeatherArea.find(".wrapper");
            $rowWrappr.children(".row").css("margin-top", 0);
            $todayPm.is(":visible") && setTimeout(function() {
                $row = $rowWrappr.children(".row:first");
                var height = $row.height();
                $row.animate({
                    marginTop: "-" + height + "px"
                },
                1000,
                function() {})
            },
            5000)
        }
        function setShowCityText(weatherModel) {
            window.currentSelectCityId = weatherModel.get("cityId");
            window.currentSelectCityPinyin = weatherModel.get("pinyin");
            return $cityText.text(weatherModel.get("cityName"))
        }
        function goWeatherSite(e) {
            window.__send && __send("click", "module=wc_0_天气日历", false, true);
            window.open("http://tianqi.sogou.com/" + window.currentSelectCityPinyin + "/")
        }
        function goWeekWeatherSite(event) {
            var el = $(this);
            window.open(el.attr("href"));
            event.stopPropagation();
            event.preventDefault();
            return false
        }
        function setShowCityTodayWeather(weatherModel) {
            var today = weatherModel.attributes.today;
            var message = today.tmin + "\u00b0C - " + today.tmax + "\u00b0C";
            var weainfo = ((new Date()).getHours() < 12) ? today.bwea: today.ewea;
            var code = weatherModel.getTodayCode();
            $todayTemp.html(message);
            var __today_climate = buildWeatherInfo(weainfo);
            $todayClimate.text(__today_climate);
            $todayWeatherArea.attr("title", __today_climate);
            var $img = $todayWeatherIcon.find("img");
            if ($img.size() === 0) {
                $("<img>", {
                    width: "54",
                    height: "54",
                    src: getWeatherImg(code)
                }).css({
                    position: "absolute",
                    left: "-7px",
                    top: "3px"
                }).appendTo($todayWeatherIcon)
            } else {
                $img.attr("src", getWeatherImg(code))
            }
            if (QBUtils.isie6()) {
                QBUtils.fixActivePng([$todayWeatherIcon.find("img").get(0)])
            }
        }
        function setShowCityTomorrowWeather(weatherModel) {
            var tomorrow = weatherModel.attributes.tomorrow;
            var message = tomorrow.tmin + "\u00b0C - " + tomorrow.tmax + "\u00b0C";
            var weainfo = tomorrow.bwea;
            var code = weatherModel.getTomorrowCode();
            $tomorrowTemp.html(message);
            var __tomorrow_desc = buildWeatherInfo(weainfo);
            $tomorrowWatherDesc.text(__tomorrow_desc);
            $tomorrowWeatherArea.attr("title", __tomorrow_desc);
            var $img = $tomorrowWeatherIcon.find("img");
            if ($img.size() === 0) {
                $("<img>", {
                    width: "54",
                    height: "54",
                    src: getWeatherImg(code)
                }).css({
                    position: "absolute",
                    left: "-7px",
                    top: "3px"
                }).appendTo($tomorrowWeatherIcon)
            } else {
                $img.attr("src", getWeatherImg(code))
            }
            if (QBUtils.isie6()) {
                QBUtils.fixActivePng([$tomorrowWeatherIcon.find("img").get(0)])
            }
        }
        function buildWeatherInfo(weainfo) {
            if (weainfo.length > 5) {
                weainfo = weainfo.substr(0, 5) + "..."
            }
            return weainfo
        }
        function getWeatherImg(code) {
            return QBUtils.getResourcePrePath("resource/views/style/img/weatar/" + code + ".png")
        }
        init()
    })(); (function() {
        var $provinceSelect;
        var $districtSelect;
        var $countySelect;
        var $showCitySelectBtn;
        var $selectCityDialog;
        var $saveCityBtn;
        var $closeBtn;
        function init() {
            $provinceSelect = $("#province-select");
            $districtSelect = $("#district-select");
            $countySelect = $("#county-select");
            $showCitySelectBtn = $("#show_city_select_btn");
            $selectCityDialog = $("#select_city_dialog");
            $saveCityBtn = $("#city_save_btn");
            $closeBtn = $("#close_city_select_btn");
            $provinceSelect.change(selectProvince);
            $districtSelect.change(selectDistrict);
            $showCitySelectBtn.click(toggleSelectCity);
            $saveCityBtn.click(saveCity);
            $closeBtn.click(closeSelectCity);
            $selectCityDialog.mouseenter(enterCitySelect).mouseleave(leaveCitySelect);
            $provinceSelect.click(stopPropagation);
            $districtSelect.click(stopPropagation);
            $countySelect.click(stopPropagation);
            $(document).click(closePopupSelectCity)
        }
        function stopPropagation(event) {
            event.stopPropagation()
        }
        function closeSelectCity() {
            $selectCityDialog.addClass("off")
        }
        function toggleSelectCity(event) {
            event.preventDefault();
            if (!window.__CITY_DATA) {
                var url = QBUtils.getResourcePrePath("resource/views/scripts/CityData.min.js?t=14eaed937714e273fa9dcd4fcc8e0402");
                $.ajax({
                    url: url,
                    type: "GET",
                    dataType: "script",
                    cache: true,
                    timeout: 1000
                }).fail(function() {
                    window.__send && __send("extra", "module=城市js加载失败", false, true)
                })
            } else {
                $selectCityDialog.toggleClass("off")
            }
        }
        var isInit = false;
        window.initCitySelect = initCitySelect;
        function initCitySelect(cityId) {
            if (isInit == true) {
                return
            }
            var info = parseCityId(cityId);
            setProvinceSelected(info.province);
            $districtSelect.html(createDistrictOptions(info.province, info.district));
            $countySelect.html(createCountyOptions(info.district, info.county));
            $selectCityDialog.toggleClass("off");
            isInit = true
        }
        function saveCity(event) {
            event.stopPropagation();
            event.preventDefault();
            window.loadWeatherInfo($countySelect.val());
            QBCache.set("qb7-weather2-select-city", $countySelect.val());
            closeSelectCity();
            return false
        }
        function selectProvince() {
            var $select = $(this);
            $districtSelect.html(createDistrictOptions($select.val()));
            $countySelect.html(createCountyOptions($districtSelect.val()))
        }
        function selectDistrict() {
            var $select = $(this);
            $countySelect.html(createCountyOptions($select.val()))
        }
        function getProvinceIdByDistrictId(districtId) {
            return districtId.substring(0, 6)
        }
        function parseCityId(cityId) {
            var province = cityId.substring(0, 6);
            var district = cityId.substring(0, 8);
            var county = cityId;
            if (__CITY_DATA[province]) {
                if (!__CITY_DATA[province]["datas"][district]) {
                    district = cityId
                }
            }
            return {
                province: province,
                district: district,
                county: cityId
            }
        }
        function setProvinceSelected(selectId) {
            var count = $provinceSelect.find("option").length;
            var select = $provinceSelect.get(0);
            for (var i = 0; i < count; i++) {
                if (select.options[i].value == selectId) {
                    select.options[i].selected = true;
                    break
                }
            }
        }
        function createDistrictOptions(provinceId, select) {
            var provinceData = __CITY_DATA[provinceId];
            var districts = provinceData.datas;
            var html = "";
            var district;
            for (var districtId in districts) {
                district = districts[districtId];
                if (select && (select == district.id)) {
                    html += '<option value="' + district.id + '" selected>' + district.ch + "</option>"
                } else {
                    html += '<option value="' + district.id + '">' + district.ch + "</option>"
                }
            }
            return html
        }
        function createCountyOptions(districtId, select) {
            var provinceId = getProvinceIdByDistrictId(districtId);
            var districtData = __CITY_DATA[provinceId]["datas"][districtId];
            var countys = districtData.datas;
            var html = "";
            var county;
            for (var countyId in countys) {
                county = countys[countyId];
                if (select && (select == county.id)) {
                    html += '<option value="' + county.id + '" selected>' + county.ch + "</option>"
                } else {
                    html += '<option value="' + county.id + '">' + county.ch + "</option>"
                }
            }
            return html
        }
        window.isEnterCitySelectTip = false;
        function enterCitySelect() {
            window.isEnterCitySelectTip = true
        }
        function leaveCitySelect() {
            window.isEnterCitySelectTip = false
        }
        function closePopupSelectCity(e) {
            if (window.isEnterCitySelectTip === false && !QBUtils.isAncestor($showCitySelectBtn.get(0), $(e.target).get(0))) {
                closeSelectCity()
            }
        }
        init()
    })();
    var baidu_parse = function(data) {
        data = data.s;
        var res = [];
        for (var i = 0; i < data.length; i++) {
            res.push({
                word: data[i],
                hint: "",
                type: ""
            })
        }
        return res
    };
    var baidu_musis_parse = function(data) {
        var _data = data.data;
        var artist_num = _data.artist.length > 3 ? 3 : _data.artist.length;
        var album_num = _data.album.length > 2 ? 2 : _data.album.length;
        var song_num = _data.song.length > 9 - artist_num - album_num ? 9 - artist_num - album_num: _data.song.length;
        var res = [];
        for (var i = 0; i < artist_num; i++) {
            res.push({
                word: _data.artist[i].artistname,
                hint: "",
                type: ""
            })
        }
        for (var i = 0; i < song_num; i++) {
            res.push({
                word: _data.song[i].songname,
                hint: "",
                type: ""
            })
        }
        for (var i = 0; i < album_num; i++) {
            res.push({
                word: _data.album[i].albumname,
                hint: "",
                type: ""
            })
        }
        return res
    };
    var baidu_video_parse = function(data) {
        var _data = data.s;
        var res = [];
        for (var i = 0; i < _data.length; i++) {
            var index = _data[i].indexOf("{");
            var _word = _data[i].slice(0, index);
            res.push({
                word: _word,
                hint: "",
                type: ""
            })
        }
        return res
    };
    var baidu_map_parse = function(data) {
        var _data = data.s;
        var res = [];
        for (var i = 0; i < _data.length; i++) {
            var tmp = _data[i].split("$");
            res.push({
                word: tmp[3],
                hint: "",
                type: ""
            })
        }
        return res
    };
    var taobo_parse = function(data) {
        var _data = data.result;
        var res = [];
        for (var i = 0; i < _data.length; i++) {
            res.push({
                word: _data[i][0],
                hint: 0,
                type: 0,
                num: _data[i][1]
            })
        }
        return res
    };
    var sogou_shop_parse = function(data) {
        var res = [];
        if (!$.isArray(data) || data.length < 2 || !$.isArray(data[1]) || !data[1].length) {
            return res
        }
        for (var i = 0; i < data[1].length; i++) {
            res.push({
                word: data[1][i],
                hint: 0,
                type: 0
            })
        }
        return res
    };
    var jd_parse = function(data) {
        var res = [];
        for (var i = 0; i < data.length; i++) {
            res.push({
                word: data[i].keyword,
                hint: 0,
                type: 0
            })
        }
        return res
    };
    var suning_parse = function(data) {
        var _data = data.words;
        var res = [];
        for (var i = 0; i < _data.length; i++) {
            res.push({
                word: _data[i].keyname.replace(/<b>/, "").replace(/<\/b>/, ""),
                hint: 0,
                type: 0
            })
        }
        return res
    };
    var youku_parse = function(data) {
        var _data = data.r;
        var res = [];
        for (var i = 0; i < _data.length; i++) {
            res.push({
                word: _data[i].c,
                hint: 0,
                type: 0
            })
        }
        return res
    };
    var sogou_music_parse = function(data) {
        var parsed_data = decodeURIComponent(data.replace(/\+/g, "%20"));
        var parsed_arr = parsed_data.split(";;&;;[");
        var _data = parsed_arr[1].split(",");
        var res = [];
        for (var i = 0; i < _data.length; i++) {
            var item = _data[i].split(";;");
            res.push({
                word: item[0],
                hint: 0,
                type: 0
            })
        }
        return res
    };
    var sogou_web_parse = function(data) {
        var sugData = data[1];
        var res = [];
        for (var i = 0; i < sugData.length; i++) {
            res.push({
                word: sugData[i],
                hint: 0,
                type: 0
            })
        }
        return res
    };
    var sogou_map_parse = function(data) {
        var sugData = data.keyword;
        var res = [];
        var data = null;
        for (var i = 0; i < sugData.length; i++) {
            data = sugData[i].split(",").slice(0, -1).join(" ");
            res.push({
                word: data,
                hint: 0,
                type: 0
            })
        }
        return res
    };
    var google_web_parse = function(data) {
        var _data = data[1];
        var res = [];
        for (var i = 0; i < _data.length; i++) {
            res.push({
                word: _data[i][0],
                hint: 0,
                type: 0
            })
        }
        return res
    };
    var google_map_parse = function(data) {
        var _data = data[3];
        var res = [];
        for (var i = 0; i < _data.length; i++) {
            res.push({
                word: _data[i][0],
                hint: 0,
                type: 0
            })
        }
        return res
    };
    var bing_web_parse = function(data) {
        var _data = data.AS.Results[0].Suggests;
        var res = [];
        for (var i = 0; i < _data.length; i++) {
            res.push({
                word: _data[i].Txt.replace(/<strong>/g, "").replace(/<\/strong>/g, ""),
                hint: 0,
                type: 0
            })
        }
        return res
    };
    var soso_music_parse = function(data) {
        var _data = data.item;
        var res = [];
        var _count = Match.min(10, _data.length);
        for (var i = 0; i < _count; i++) {
            res.push({
                word: _data[i].w,
                hint: 0,
                type: 0
            })
        }
        return res
    };
    var soso_map_parse = function(data) {
        var _data = data.detail;
        var res = [];
        for (var i = 0; i < _data.length; i++) {
            res.push({
                word: _data[i].name,
                hint: 0,
                type: 0
            })
        }
        return res
    };
    var SmartboxConfiguration = {
        _default: {
            _default: {
                url: "http://www.soso.com/smart.q?",
                key: "w",
                jsonp: "m",
                charset: "gbk",
                parseData: function(data) {
                    data = data.split("\n");
                    res = [];
                    for (i = 0; i < data.length; i++) {
                        data[i] = data[i].split("\t");
                        res.push({
                            word: data[i][1],
                            hint: data[i][0],
                            type: data[i][2]
                        })
                    }
                    return res
                }
            }
        },
        web: {
            baidu: {
                url: "http://suggestion.baidu.com/su?",
                key: "wd",
                jsonp: "cb",
                charset: "gbk",
                parseData: baidu_parse
            },
            soso: {},
            sogou: {
                url: "http://w.sugg.sogou.com/sugg/ajaj_json.jsp?",
                key: "key",
                charset: "gbk",
                params: {
                    type: "web",
                    pr: "web"
                },
                parseData: sogou_web_parse
            },
            google: {
                url: "http://www.google.com.hk/complete/search?",
                key: "q",
                jsonp: "callback",
                params: {
                    hl: "zh-CN",
                    client: "hp"
                },
                parseData: google_web_parse
            },
            youdao: {
                url: "http://w.sugg.sogou.com/sugg/ajaj_json.jsp?",
                key: "key",
                charset: "gbk",
                params: {
                    type: "web",
                    pr: "web"
                },
                parseData: sogou_web_parse
            },
            pangu: {
                url: "http://w.sugg.sogou.com/sugg/ajaj_json.jsp?",
                key: "key",
                charset: "gbk",
                params: {
                    type: "web",
                    pr: "web"
                },
                parseData: sogou_web_parse
            }
        },
        image: {
            baidu: {
                url: "http://nssug.baidu.com/su?",
                key: "wd",
                jsonp: "cb",
                charset: "gbk",
                params: {
                    prod: "image",
                    ie: "utf8"
                },
                parseData: baidu_parse
            },
            soso: {},
            sogou: {
                url: "http://vs.sugg.sogou.com/sugg/ajaj_json.jsp?",
                key: "key",
                charset: "gbk",
                params: {
                    type: "pic",
                    pr: "pic"
                },
                parseData: sogou_web_parse
            },
            google: {
                url: "https://www.google.com.hk/complete/search?",
                key: "q",
                jsonp: "callback",
                params: {
                    client: "img",
                    hl: "zh-CN",
                    ds: "i"
                },
                parseData: google_web_parse
            }
        },
        video: {
            baidu: {
                url: "http://nssug.baidu.com/su?",
                key: "wd",
                jsonp: "cb",
                charset: "gbk",
                params: {
                    prod: "video_ala",
                    oe: "utf-8"
                },
                parseData: baidu_video_parse
            },
            sogou: {
                url: "http://vs.sugg.sogou.com/sugg/ajaj_json.jsp?",
                key: "key",
                charset: "gbk",
                params: {
                    type: "vc",
                    pr: "vc"
                },
                parseData: sogou_web_parse
            },
            youku: {
                url: "http://tip.soku.com/search_keys?",
                key: "query",
                jsonp: "jsoncallback",
                parseData: youku_parse
            }
        },
        music: {
            baidu: {
                url: "http://sug.music.baidu.com/info/suggestion?",
                key: "word",
                jsonp: "callback",
                params: {
                    from: "0",
                    format: "json",
                    version: 2
                },
                parseData: baidu_musis_parse
            },
            soso: {
                url: "http://cgi.music.soso.com/fcgi-bin/fcg_smartbox.q?",
                key: "w",
                charset: "gbk",
                params: {
                    utf8: "1"
                },
                parseData: soso_music_parse
            },
            sogou: {
                url: "http://vs.sugg.sogou.com/sugg/suggestajaj.jsp?",
                key: "key",
                params: {
                    type: "music",
                    pr: "music"
                },
                parseData: sogou_music_parse
            }
        },
        news: {
            baidu: {
                url: "http://nssug.baidu.com/su?",
                key: "wd",
                jsonp: "cb",
                charset: "gbk",
                params: {
                    prod: "news",
                    oe: "utf-8"
                },
                parseData: baidu_parse
            },
            soso: {},
            google: {},
            sogou: {
                url: "http://w.sugg.sogou.com/sugg/ajaj_json.jsp?",
                key: "key",
                params: {
                    type: "news",
                    pr: "news"
                },
                parseData: sogou_web_parse
            }
        },
        map: {
            baidu: {
                url: "http://map.baidu.com/su?",
                key: "wd",
                jsonp: "callback",
                params: {
                    cid: 1311,
                    type: 0
                },
                parseData: baidu_map_parse
            },
            soso: {
                url: "http://route.map.soso.com/?",
                key: "wd",
                jsonp: "cb",
                charset: "gbk",
                params: {
                    qt: "sg",
                    output: "jsonp"
                },
                parseData: soso_map_parse
            },
            google: {
                url: "https://maps.google.com/maps/suggest?",
                key: "q",
                jsonp: "callback",
                params: {
                    hl: "zh-CN",
                    json: "a"
                },
                parseData: google_map_parse
            },
            sogou: {
                url: "http://lspengine.go2map.com/service/keywordclew/json?",
                key: "keyword",
                params: {
                    type: "1",
                    cityflag: "1",
                    cb: "SGS.modules_suggest"
                },
                parseData: sogou_map_parse
            }
        },
        shopping: {
            sogou: {
                url: "http://w.sugg.sogou.com/sugg/ajaj_json.jsp?",
                key: "key",
                params: {
                    type: "shop"
                },
                parseData: sogou_shop_parse
            },
            taobao: {
                url: "http://suggest.taobao.com/sug?",
                key: "q",
                jsonp: "callback",
                params: {
                    code: "utf-8"
                },
                parseData: taobo_parse
            },
            jingdong: {
                url: "http://dd.search.jd.com/?",
                key: "key",
                jsonp: "callback",
                parseData: jd_parse
            },
            suning: {
                url: "http://search.suning.com/emall/autocomplete.jsonp?",
                key: "keyword",
                jsonp: "callback",
                params: {
                    type: "0"
                },
                parseData: suning_parse
            }
        },
        weibo: {
            weixin: {}
        }
    };
    SmartboxConfiguration.web.soso = SmartboxConfiguration._default._default;
    SmartboxConfiguration.weibo.weixin = SmartboxConfiguration.news.baidu;
    SmartboxConfiguration.news.google = SmartboxConfiguration.news.baidu;
    SmartboxConfiguration.news.soso = SmartboxConfiguration.news.baidu;
    SmartboxConfiguration.image.soso = SmartboxConfiguration.image.baidu;
    SmartboxConfiguration.web._default = SmartboxConfiguration.web.baidu;
    SmartboxConfiguration.image._default = SmartboxConfiguration.image.baidu;
    SmartboxConfiguration.video._default = SmartboxConfiguration.video.baidu;
    SmartboxConfiguration.music._default = SmartboxConfiguration.music.baidu;
    SmartboxConfiguration.news._default = SmartboxConfiguration.news.baidu;
    SmartboxConfiguration.map._default = SmartboxConfiguration.map.baidu;
    SmartboxConfiguration.shopping._default = SmartboxConfiguration.shopping.taobao;
    SmartboxConfiguration.weibo._default = SmartboxConfiguration.news.baidu;
    var SmartboxEnginModel = function() {
        this.params = {};
        this.engin = "sogou";
        this.channel = "web";
        return this
    };
    SmartboxEnginModel.prototype.setParam = function(key, value) {
        this.params[key] = encodeURIComponent(value);
        return this
    };
    SmartboxEnginModel.prototype.getParam = function(key, value) {
        return this.params[key]
    };
    SmartboxEnginModel.prototype.getJSONP = function() {
        var tmp = SmartboxConfiguration[this.channel][this.engin].jsonp || "callback";
        return tmp
    };
    SmartboxEnginModel.prototype.getCharset = function() {
        var tmp = SmartboxConfiguration[this.channel][this.engin].charset || "utf-8";
        return tmp
    };
    SmartboxEnginModel.prototype.getQueryUrl = function(keyword) {
        var engin = this.engin || "_default";
        var channel = this.channel || "_default";
        var urlParams = {};
        var config = SmartboxConfiguration[channel] && SmartboxConfiguration[channel][engin];
        if (!config) {
            return ""
        }
        if (!QBUtils.trim(keyword)) {
            return config.home
        }
        if (typeof(config.url) === "function") {
            return config.url(keyword)
        }
        urlParams[config.key || "w"] = encodeURIComponent(keyword);
        for (var k in config.params) {
            if (typeof(config.params[k]) === "function") {
                urlParams[k] = config.params[k](keyword)
            } else {
                if (typeof(k) === "string") {
                    urlParams[k] = config.params[k]
                }
            }
        }
        for (k in this.params) {
            urlParams[k] = this.params[k]
        }
        var url = config.url.indexOf("?") === -1 ? config.url + "?": config.url;
        var temp = [];
        for (k in urlParams) {
            temp.push(k + "=" + urlParams[k])
        }
        return url + temp.join("&")
    };
    SmartboxEnginModel.prototype.getData = function(keyword, cb_fun, error_fun) {
        var engin = this.engin || "_default";
        var channel = this.channel || "_defualt";
        this.setParam("_", Date.parse(new Date()));
        var jsonp_name = this.getJSONP();
        var _url = this.getQueryUrl(keyword);
        var _charset = this.getCharset();
        $.jsonp({
            url: _url,
            callbackParameter: jsonp_name,
            callback: "jqjsonp",
            charset: _charset,
            success: cb_fun,
            timeout: 2000,
            error: error_fun
        })
    };
    SmartboxEnginModel.prototype.parseData = function(keyword) {
        var engin = this.engin || "_default";
        var channel = this.channel || "_default";
        return SmartboxConfiguration[channel][engin].parseData(keyword)
    };
    SmartboxEnginModel.prototype.changeSmartbox = function(_channel, _engin) {
        this.engin = _engin;
        this.channel = _channel
    };
    SmartboxEnginModel.prototype.setDeafultSmartbox = function() {
        if (this.channel == "_default") {
            return false
        }
        if (this.engin !== "_default") {
            this.engin = "_default"
        } else {
            this.channel = "_default"
        }
        return true
    };
    function SoSo_SmartBox(target, sCallBack, rChlCallBack) {
        var model = this.model = new SmartboxEnginModel();
        var _$ = function(a) {
            return (typeof(a) == "object") ? a: document.getElementById(a)
        };
        var _$c = function(a) {
            return document.createElement(a)
        };
        var _self = this;
        var _target = _$(target);
        var _rect = {};
        var _enable = false;
        var _index = -1;
        var _items = [];
        var _data = [];
        var _key = "";
        var _Skey = "";
        var _timer = null;
        var _showing = false;
        var _smartPopId = 0;
        var _clearSel = function() {
            for (pos in _items) {
                _items[pos].className = "mouseout"
            }
        };
        var _trim = function(str) {
            return (typeof(str) == "string") ? (str.replace(/^\s\s*/, "").replace(/\s\s*$/, "")) : ""
        };
        var _prevWord = _trim(_target.value);
        var _search = function() {
            if (typeof(sCallBack) == "function") {
                sCallBack()
            }
        };
        var _close = function() {
            _showing = false;
            _index = -1;
            _items = [];
            _data = [];
            _key = "";
            var tipDiv = _$(_smartPopId);
            if (tipDiv && tipDiv != null) {
                tipDiv.parentNode.removeChild(tipDiv)
            }
        };
        var markStrong = function(userInput, keyword) {
            if (keyword.indexOf(userInput) != 0) {
                return keyword
            }
            return userInput + "<strong>" + keyword.substr(userInput.length) + "</strong>"
        };
        var _open = function() {
            var tipDiv = _$c("div");
            tipDiv.id = _smartPopId = "soso_SmartPop_" + Math.round(Math.random() * 100000);
            tipDiv.className = "soso_SmartPop";
            tipDiv.style.height = "" + _data.length * 26 + "px";
            $("div.taobaosuggest ul").empty();
            for (var i = 0,
            n = _data.length; i < n; i++) {
                var itemDiv = _$c("div");
                itemDiv.style.height = "26px";
                itemDiv.seq = parseInt(i); (function() {
                    var store = itemDiv;
                    _self.Event.add(itemDiv, "mouseover",
                    function() {
                        _clearSel();
                        store.className = "mouseover";
                        _index = store.seq
                    })
                })(); (function() {
                    _self.Event.add(itemDiv, "mouseout",
                    function() {
                        _clearSel();
                        _index = -1
                    })
                })(); (function() {
                    _self.Event.add(itemDiv, "click",
                    function() {
                        _prevWord = _Skey = _target.value = _data[_index].word;
                        _search();
                        window.__send && __send("click", "module=wc_0_suggest", false, true)
                    })
                })();
                var tipText = _$c("div");
                tipText.innerHTML = markStrong(_target.value, _data[i].word);
                itemDiv.appendChild(tipText);
                tipDiv.appendChild(itemDiv);
                _items.push(itemDiv)
            }
            return tipDiv
        };
        var _handleEnterKeyEvent = function(e) {
            if (!_showing && (e.keyCode == 38 || e.keyCode == 40)) {
                _enable = true;
                _detect()
            }
            if (_items.length == 0) {
                return
            }
            if (e.keyCode == 13 && _index != -1) {
                _self.Event.stop(e);
                _prevWord = _target.value;
                _search()
            }
        };
        var _handleKeyEvent = function(e) {
            if (!_showing && (e.keyCode == 38 || e.keyCode == 40)) {
                _enable = true;
                _detect()
            }
            if (_items.length == 0) {
                return
            }
            if (e.keyCode == 13 && _index != -1) {
                _self.Event.stop(e);
                _prevWord = _target.value;
                _search()
            } else {
                if (e.keyCode == 38) {
                    _self.Event.stop(e);
                    _clearSel();
                    _index = (_index < 0) ? (_items.length - 1) : (_index - 1);
                    if (_index == -1) {
                        _key = _target.value = _Skey
                    } else {
                        _items[_index].className = "mouseover";
                        _key = _target.value = _data[_index].word
                    }
                } else {
                    if (e.keyCode == 40) {
                        _self.Event.stop(e);
                        _clearSel();
                        _index = (_index > _items.length - 1) ? 0 : (_index + 1);
                        if (_index == _items.length) {
                            _key = _target.value = _Skey
                        } else {
                            _items[_index].className = "mouseover";
                            _key = _target.value = _data[_index].word
                        }
                    } else {
                        if (e.keyCode == 27) {
                            _self.Event.stop(e);
                            _clearSel();
                            _close();
                            _target.value = _Skey
                        }
                    }
                }
            }
        };
        var _locate = function(elem) {
            _target.parentNode.appendChild(elem);
            _showing = true
        };
        var soso_jpcall_inner = function(data) {
            _enable = true;
            _close();
            _Skey = _key = _target.value;
            _data = _parse(data);
            if (_data.length > 0) {
                c = _open();
                _locate(c)
            }
        };
        var jpcall_name = "soso_jpcall_" + Math.round(1000000 + Math.random() * 10000000);
        window[jpcall_name] = function(d) {
            try {
                soso_jpcall_inner(d)
            } catch(error) {
                model.setDeafultSmartbox()
            }
        };
        window.sugCls = {
            handleContent: soso_jpcall_inner
        };
        window.sogou = {
            sug: soso_jpcall_inner
        };
        window.SGS = {
            modules_suggest: soso_jpcall_inner
        };
        window.MusicJsonCallback = soso_jpcall_inner;
        var err_fun = function() {
            if (!_showing) {
                model.setDeafultSmartbox()
            }
        };
        var _start = function() {
            soso_global_smartbox_data = [];
            _enable = false;
            model.getData(_target.value, window[jpcall_name], err_fun)
        };
        var _parse = function(data) {
            return model.parseData(data)
        };
        var _detect = function() {
            if (_timer != null) {
                clearTimeout(_timer);
                _timer = null
            }
            _timer = setTimeout(function() {
                if (!_enable || _trim(_target.value).length == 0) {
                    _close()
                } else {
                    if (rChlCallBack() && _key != _target.value) {
                        _start()
                    }
                }
                _timer = null
            },
            300)
        }; (function() {
            _self.Event.add(_target, "keypress",
            function(e) {
                _handleEnterKeyEvent(e)
            });
            _self.Event.add(_target, "keyup",
            function(e) {
                _handleKeyEvent(e)
            });
            _self.Event.add(_target, "blur",
            function() {
                _enable = false;
                _detect()
            });
            _self.Event.add(window, "resize",
            function() {
                _enable && _start()
            });
            var _timeoutId;
            var _listen = function() {
                _timeoutId = setTimeout(function() {
                    if (_prevWord != _trim(_target.value)) {
                        _prevWord = _trim(_target.value);
                        _enable = true;
                        _detect()
                    }
                    _timeoutId = setTimeout(arguments.callee, 80)
                },
                80)
            };
            var _unlisten = function() {
                clearTimeout(_timeoutId)
            };
            _self.Event.add(_target, "focus",
            function() {
                _listen()
            });
            _self.Event.add(_target, "blur",
            function() {
                _unlisten()
            })
        })()
    }
    SoSo_SmartBox.prototype.Event = {
        add: function(element, type, handler) {
            if (element.addEventListener) {
                element.addEventListener(type, handler, false)
            } else {
                element.attachEvent("on" + type, handler)
            }
        },
        remove: function(element, type, handler) {
            if (element.removeEventListener) {
                element.removeEventListener(type, handler, false)
            } else {
                element.detachEvent("on" + type, handler)
            }
        },
        stop: function(ev) {
            if (ev.preventDefault) {
                ev.preventDefault();
                ev.stopPropagation()
            } else {
                ev.cancelBubble = true;
                ev.returnValue = false
            }
        }
    };
    SoSo_SmartBox.prototype.changeSmartbox = function(channel, engin) {
        this.model.changeSmartbox(channel, engin)
    };
    function SearchBubble() {
        var bubble = $("#searchForm .add-bubble");
        var ckey = "_search_bubble";
        var cookie = haoqq.Cookie();
        function show(channel, engin) {
            if (engin != "sogou" || channel != "web") {
                _hide();
                return
            }
            if (cookie.get(ckey)) {
                _hide();
                return
            }
            bubble.show()
        }
        function _hide() {
            bubble.hide()
        }
        function disappear(channel) {
            if (channel != "web") {
                return
            }
            _hide();
            var now = +new Date();
            var tTmp = new Date(now);
            tTmp.setHours(9);
            tTmp.setMinutes(30);
            tTmp.setSeconds(0);
            var t1 = tTmp.getTime();
            var t2 = t1 + 3600 * 5 * 1000;
            var t3 = t1 + 3600 * 24 * 1000;
            var expire = 0;
            if (now < t1) {
                expire = t1
            } else {
                if (now >= t1 && now <= t2) {
                    expire = t2
                } else {
                    expire = t3
                }
            }
            cookie.set(ckey, 1, new Date(expire))
        }
        function _event() {
            bubble.click(function() {
                $("#searchForm .arrowdown").trigger("click");
                disappear("web");
                window.__send && __send("click", "module=wc_0_soqipao", false, true);
                return false
            })
        }
        function _makeNum() {
            var fixed = 0;
            var ssuv = cookie.get("ssuv");
            if (ssuv) {
                fixed = parseInt(ssuv.substr(0, 2), 16)
            }
            var t = new Date();
            var num = (fixed + t.getHours()) % 8;
            if (num < 3) {
                num = 3
            }
            return num
        }
        function init() {
            var num = _makeNum();
            if (num <= 3) {
                num = 3
            }
            bubble.html(num);
            _event();
            show()
        }
        return {
            init: init,
            show: show,
            disappear: disappear
        }
    }
    var ENGIN_SELECTION_STORAGE_PREFIX = "channel_";
    var SEL_BACK_TOKEN = "sel_back",
    CURRENT_SRH_TOKEN = 2067,
    SAMPLE_GROUP_KEY = "exp_gp_sam",
    SAMPLE_GROUP_MAX = 3;
    var d = new Date();
    if ( + d > +new Date(2015, 2, 23) && +d < +new Date(2015, 2, 31)) {
        CURRENT_SRH_TOKEN += d.getDate() - 10
    }
    var SRH_EXPIRES = 86400 * 1000 * 7;
    var channelLastEngin = {
        web: "sogou",
        image: "sogou",
        video: "sogou",
        music: "sogou",
        news: "sogou",
        map: "sogou",
        shopping: "sogou",
        weibo: "weixin"
    };
    var st_key = {
        web: "web2",
        image: "image2",
        video: "video2",
        music: "music2",
        news: "news2",
        map: "map2",
        shopping: "shopping2"
    };
    var SearchConfiguration = {
        web: {
            url: "http://www.sogou.com/?hdq=sogou-site-c91e3483cf4f9005-0001",
            sogou: {
                home: "http://www.sogou.com/tx",
                url: "http://www.sogou.com/tx",
                logo: "http://www.sogou.com/?hdq=sogou-site-c91e3483cf4f9005-0001",
                key: "query",
                params: {
                    hdq: "sogou-site-c91e3483cf4f9005-0001"
                },
                smartParams: {
                    hdq: "sogou-site-c91e3483cf4f9005-0001",
                    sourceid: "sugg"
                }
            },
            google: {
                home: "https://www.google.com.hk/",
                url: "http://www.google.com.hk/search?",
                key: "q",
                logo: "https://www.google.com.hk/"
            },
            bing: {
                home: "http://cn.bing.com/",
                url: "http://cn.bing.com/search?form=BTACN2&pc=BNAIEB&mkt=zh-CN&",
                key: "q",
                logo: "http://cn.bing.com/"
            },
            youdao: {
                home: "http://www.youdao.com/",
                url: "http://www.youdao.com/search?",
                key: "q",
                params: {
                    ue: "utf8"
                },
                logo: "http://www.youdao.com/"
            },
            baidu: {
                home: "http://www.baidu.com",
                url: "http://www.baidu.com/s?tn=87048150_4_pg&",
                key: "word",
                logo: "http://www.baidu.com"
            }
        },
        image: {
            url: "http://pic.sogou.com/?p=26040500",
            sogou: {
                home: "http://pic.sogou.com/",
                url: "http://pic.sogou.com/pics",
                key: "query",
                params: {
                    p: "26040500"
                },
                smartParams: {
                    p: "26050500"
                },
                logo: "http://pic.sogou.com/?p=26040500"
            },
            baidu: {
                home: "http://image.baidu.com/",
                url: "http://image.baidu.com/i",
                key: "word",
                params: {
                    tn: "baiduimage"
                },
                logo: "http://image.baidu.com/"
            },
            google: {
                home: "https://www.google.com.hk/imghp",
                url: "https://www.google.com.hk/search",
                key: "q",
                params: {
                    tbm: "isch"
                },
                logo: "https://www.google.com.hk/imghp?"
            }
        },
        video: {
            url: "http://v.sogou.com/?p=26040600",
            sogou: {
                home: "http://v.sogou.com/",
                url: "http://v.sogou.com/v",
                key: "query",
                params: {
                    p: "26040600"
                },
                smartParams: {
                    p: "26050600"
                },
                logo: "http://v.sogou.com/?p=26040600"
            },
            baidu: {
                home: "http://video.baidu.com/",
                logo: "http://video.baidu.com/",
                url: function(keyword) {
                    if (keyword) {
                        var link = "http://video.baidu.com/v?ie=utf-8&word=" + encodeURIComponent(keyword);
                        return link
                    } else {
                        return "http://video.baidu.com/"
                    }
                }
            },
            youku: {
                home: "http://www.soku.com/",
                url: function(key) {
                    return "http://www.soku.com/search_video/q_" + encodeURIComponent(key)
                },
                logo: "http://www.soku.com/"
            }
        },
        music: {
            url: "http://mp3.sogou.com/?p=26040200",
            sogou: {
                home: "http://mp3.sogou.com/",
                url: "http://mp3.sogou.com/music.so",
                key: "query",
                params: {
                    p: "26040200"
                },
                smartParams: {
                    p: "26050200"
                },
                logo: "http://mp3.sogou.com/?p=26040200"
            },
            baidu: {
                home: "http://music.baidu.com/",
                url: "http://music.baidu.com/search",
                key: "key",
                logo: "http://music.baidu.com/"
            }
        },
        news: {
            url: "http://news.sogou.com/?p=26040300",
            sogou: {
                home: "http://news.sogou.com/",
                url: "http://news.sogou.com/news",
                key: "query",
                params: {
                    p: "26040300"
                },
                smartParams: {
                    p: "26040300",
                    sourceid: "sugg"
                },
                logo: "http://news.sogou.com/?p=26040300"
            },
            baidu: {
                home: "http://news.baidu.com/",
                url: "http://news.baidu.com/ns",
                key: "word",
                params: {
                    cl: 2,
                    rn: 20,
                    tn: "news",
                    ie: "utf-8"
                },
                logo: "http://news.baidu.com/"
            },
            google: {
                home: "https://news.google.com.hk/",
                url: "https://www.google.com.hk/search",
                key: "q",
                params: {
                    hl: "zh-CN",
                    gl: "cn",
                    tbm: "nws"
                },
                logo: "https://news.google.com.hk/"
            }
        },
        map: {
            url: "http://map.sogou.com/",
            sogou: {
                home: "http://map.sogou.com/",
                url: function(keyword) {
                    return "http://map.sogou.com/#page=1&lq=" + encodeURIComponent(keyword)
                },
                smarturl: function(keyword) {
                    return "http://map.sogou.com/#page=1&lq=" + encodeURIComponent(keyword) + "&sourceid=sugg"
                },
                logo: "http://map.sogou.com/"
            },
            baidu: {
                home: "http://map.baidu.com/",
                url: function(key) {
                    return "http://map.baidu.com/?newmap=1&ie=utf-8&s=s%26wd%3D" + encodeURIComponent(key)
                },
                logo: "http://map.baidu.com/"
            },
            google: {
                home: "http://ditu.google.cn/",
                url: "http://ditu.google.cn/maps",
                key: "q",
                params: {
                    hl: "zh-CN",
                    um: 1,
                    ie: "UTF-8",
                    sa: "N",
                    tab: "wl"
                },
                logo: "http://ditu.google.cn/"
            }
        },
        shopping: {
            url: "http://gouwu.sogou.com/?p=26041500",
            sogou: {
                home: "http://gouwu.sogou.com",
                url: "http://gouwu.sogou.com/shop",
                key: "query",
                params: {
                    p: "26041500"
                },
                smartParams: {
                    p: "26041500",
                    sourceid: "sugg"
                },
                logo: "http://gouwu.sogou.com/?p=26041500"
            },
            taobao: {
                home: "http://www.taobao.com",
                url: "http://search.taobao.com/search",
                key: "q",
                logo: "http://search.taobao.com/"
            },
            jingdong: {
                home: "http://www.360buy.com",
                url: "http://search.360buy.com/search",
                key: "keyword",
                params: {
                    enc: "utf-8"
                },
                logo: "http://search.jd.com"
            },
            suning: {
                home: "http://www.suning.com",
                url: "http://search.suning.com/emall/search.do",
                key: "keyword",
                logo: "http://search.suning.com"
            }
        },
        weibo: {
            url: "http://weixin.sogou.com/?p=99041200",
            weixin: {
                home: "http://weixin.sogou.com/?p=99041200",
                url: function(keyword) {
                    if (keyword) {
                        return "http://weixin.sogou.com/weixin?&type=2&ie=utf8&query=" + encodeURIComponent(keyword)
                    } else {
                        return "http://weixin.sogou.com/?p=99041200"
                    }
                },
                logo: "http://weixin.sogou.com/?p=99041200"
            }
        }
    };
    function clearSOSO() {
        var channels = ["web2", "image2", "music2", "news2", "map2"];
        for (var i = 0; i < channels.length; i++) {
            var key = ENGIN_SELECTION_STORAGE_PREFIX + channels[i];
            engin = QBCache.get(key);
            if (engin == "soso") {
                QBCache.del(key)
            }
        }
    }
    var SearchEnginModel = function() {
        clearSOSO();
        if (CURRENT_SRH_TOKEN != QBCache.get(SEL_BACK_TOKEN)) {
            QBCache.del(ENGIN_SELECTION_STORAGE_PREFIX + st_key.web);
            QBCache.set(SEL_BACK_TOKEN, CURRENT_SRH_TOKEN, SRH_EXPIRES)
        }
        QBUtils.makeObservable(this);
        this.params = {};
        var engin;
        this.channel = "web";
        if (st_key[this.channel]) {
            engin = QBCache.get(ENGIN_SELECTION_STORAGE_PREFIX + st_key[this.channel]);
            if (engin && SearchConfiguration[this.channel][engin]) {
                channelLastEngin[this.channel] = engin
            } else {
                channelLastEngin[this.channel] = "sogou"
            }
        }
        this.engin = channelLastEngin[this.channel];
        return this
    };
    SearchEnginModel.prototype.setEngin = function(engin, options) {
        this.engin = engin;
        if (channelLastEngin[this.channel] != engin) {
            channelLastEngin[this.channel] = engin;
            if ("google" == engin && "web" == this.channel) {
                QBCache.set(ENGIN_SELECTION_STORAGE_PREFIX + st_key[this.channel], "sogou", SRH_EXPIRES);
                QBCache.set("bd_st", 0, SRH_EXPIRES)
            } else {
                if ("baidu" == engin && "web" == this.channel) {
                    var bd_st = QBCache.get("bd_st") | 0;
                    if (bd_st < 1) {
                        QBCache.set("bd_st", ++bd_st, SRH_EXPIRES)
                    } else {
                        if ("baidu" !== QBCache.get(ENGIN_SELECTION_STORAGE_PREFIX + st_key[this.channel])) {
                            QBCache.set(ENGIN_SELECTION_STORAGE_PREFIX + st_key[this.channel], engin, SRH_EXPIRES)
                        }
                    }
                } else {
                    QBCache.set(ENGIN_SELECTION_STORAGE_PREFIX + st_key[this.channel], engin, SRH_EXPIRES);
                    if ("web" == this.channel) {
                        QBCache.set("bd_st", 0, SRH_EXPIRES)
                    }
                }
            }
        }
        if (! (options && options.silent)) {
            this.notify("change_engin", engin)
        }
        return this
    };
    SearchEnginModel.prototype.getEginsAll = function(channel) {
        return SearchConfiguration[channel] || {}
    };
    SearchEnginModel.prototype.getEginsNum = function(channel) {
        var temp = SearchConfiguration[channel] || {},
        num = 0;
        for (var i in temp) {++num
        }
        return num
    };
    SearchEnginModel.prototype.setChannel = function(channel, options) {
        this.channel = channel;
        if (st_key[this.channel]) {
            engin = QBCache.get(ENGIN_SELECTION_STORAGE_PREFIX + st_key[this.channel]);
            if (engin) {
                channelLastEngin[channel] = engin
            }
        }
        this.setEngin(channelLastEngin[channel]);
        if (! (options && options.silent)) {
            this.notify("change_channel", channel)
        }
        return this
    };
    SearchEnginModel.prototype.setParam = function(key, value) {
        this.params[key] = encodeURIComponent(value);
        return this
    };
    SearchEnginModel.prototype.getParam = function(key, value) {
        return this.params[key]
    };
    SearchEnginModel.prototype.getEnginNumber = function() {
        if (this.channel === "web") {
            return 3
        } else {
            return 1
        }
    };
    SearchEnginModel.prototype.getTabUrl = function(channel) {
        var channel = channel || this.channel || "web";
        if (!SearchConfiguration[channel] || !SearchConfiguration[channel]["url"]) {
            return ""
        }
        return SearchConfiguration[channel]["url"]
    };
    SearchEnginModel.prototype.getLogoUrl = function(channel, engin) {
        var engin = engin || this.engin || "sogou";
        var channel = channel || this.channel || "web";
        if (!SearchConfiguration[channel] || !SearchConfiguration[channel][engin] || !SearchConfiguration[channel][engin].logo) {
            return ""
        }
        return SearchConfiguration[channel][engin].logo
    };
    SearchEnginModel.prototype.overrideParam = function(channel, engin, type, name, value) {
        var engine = SearchConfiguration[channel][engin];
        if (engine) {
            var t = engine[type];
            if (t) {
                t[name] = value
            }
        }
    };
    SearchEnginModel.prototype.getQueryUrl = function(keyword, channel, engin, isSmartSearch) {
        engin = engin || this.engin || "sogou";
        channel = channel || this.channel || "web";
        var urlParams = {};
        var config = SearchConfiguration[channel] && SearchConfiguration[channel][engin];
        if (window.__send) {
            window.__send("extra", "&module=searchword&tag=" + encodeURIComponent(keyword) + "&channel=" + channel + "&engine=" + engin + "&source=" + (isSmartSearch ? (isSmartSearch === true ? "smart": "input_c") : "hotword"))
        }
        if (!config) {
            return ""
        }
        if (!QBUtils.trim(keyword)) {
            return config.logo || config.home
        }
        if (true == isSmartSearch && typeof(config.smarturl) === "function") {
            return config.smarturl(keyword)
        }
        if (typeof(config.url) === "function") {
            return config.url(keyword)
        }
        var searchParams = null;
        if (true == isSmartSearch && config.smartParams) {
            searchParams = config.smartParams
        } else {
            searchParams = config.params
        }
        for (var k in searchParams) {
            if (typeof(searchParams[k]) === "function") {
                urlParams[k] = searchParams[k](keyword)
            } else {
                if (typeof(k) === "string") {
                    urlParams[k] = searchParams[k]
                }
            }
        }
        for (k in this.params) {
            urlParams[k] = this.params[k]
        }
        urlParams.ie = "utf8";
        urlParams[config.key || "w"] = keyword;
        var url = config.url.indexOf("?") === -1 ? config.url + "?": config.url;
        if (channel == "web" && engin == "sogou" && typeof(SogouEncrypt) != "undefined" && urlParams.query) {
            var encrypted = "";
            try {
                encrypted = SogouEncrypt.encryptquery(urlParams.query, urlParams.hdq)
            } catch(e) {
                url = url + $.param(urlParams);
                return url
            }
            if (encrypted == "" || encrypted == undefined) {
                url = url + $.param(urlParams);
                return url
            }
            delete(urlParams.query);
            delete(urlParams.hdq);
            url = url + encrypted + "&" + $.param(urlParams);
            return url
        } else {
            url = url + $.param(urlParams);
            return url
        }
    };
    function HotwordsModel() {
        this.hot_channel = ["web", "video"];
        this.base_url = "data/hotwords/"
    }
    HotwordsModel.prototype.hasHotword = function(_channel) {
        return $.inArray(_channel, this.hot_channel) == -1 ? false: true
    };
    HotwordsModel.prototype.store_hot_word_by_channel = function(channel, data, expired_time) {
        if (!data || !channel) {
            return false
        }
        expired_time = expired_time || 3600 * 1000;
        var key = "hotword_channel_" + channel;
        return QBCache.set(key, data, expired_time)
    };
    HotwordsModel.prototype.retrieve_hot_word_by_channel = function(channel) {
        var key = "hotword_channel_" + channel;
        return QBCache.get(key)
    };
    HotwordsModel.prototype.ProcessHotword = function(_channel, handle_fun) {
        var data = this.retrieve_hot_word_by_channel(_channel);
        if (data) {
            handle_fun(data);
            return
        }
        var me = this;
        if ("web" == _channel) {
            $.ajax({
                url: "http://top.sogou.com/top_index.js",
                cache: false,
                dataType: "script",
                scriptCharset: "gbk",
                success: function() {
                    var data = {
                        words: [],
                        updateTime: +new Date
                    };
                    if ($.isArray(window.sogou_top_words) && sogou_top_words.length) {
                        for (var i = 0,
                        len = Math.min(10, sogou_top_words.length); i < len; ++i) {
                            data.words.push({
                                title: sogou_top_words[i],
                                is_new: 0
                            })
                        }
                        handle_fun(data);
                        me.store_hot_word_by_channel(_channel, data)
                    }
                }
            })
        } else {
            try {
                var data = $.parseJSON($("#hotwords_" + _channel).text());
                handle_fun(data)
            } catch(e) {}
        }
    }; (function() {
        function SoSo_SmartBox(target, sCallBack, rChlCallBack) {
            var model = this.model = new SmartboxEnginModel();
            var _$ = function(a) {
                return (typeof(a) == "object") ? a: document.getElementById(a)
            };
            var _$c = function(a) {
                return document.createElement(a)
            };
            var _self = this;
            var _target = _$(target);
            var _rect = {};
            var _enable = false;
            var _index = -1;
            var _items = [];
            var _data = [];
            var _key = "";
            var _Skey = "";
            var _timer = null;
            var _showing = false;
            var _smartPopId = 0;
            var _clearSel = function() {
                for (pos in _items) {
                    _items[pos].className = "mouseout"
                }
            };
            var _trim = function(str) {
                return (typeof(str) == "string") ? (str.replace(/^\s\s*/, "").replace(/\s\s*$/, "")) : ""
            };
            var _prevWord = _trim(_target.value);
            var _search = function() {
                if (typeof(sCallBack) == "function") {
                    sCallBack()
                }
            };
            var _close = function() {
                _showing = false;
                _index = -1;
                _items = [];
                _data = [];
                _key = "";
                var tipDiv = _$(_smartPopId);
                if (tipDiv && tipDiv != null) {
                    tipDiv.parentNode.removeChild(tipDiv)
                }
            };
            var markStrong = function(userInput, keyword) {
                if (keyword.indexOf(userInput) != 0) {
                    return keyword
                }
                return userInput + "<strong>" + keyword.substr(userInput.length) + "</strong>"
            };
            var _open = function() {
                var tipDiv = _$c("div");
                tipDiv.id = _smartPopId = "soso_SmartPop_" + Math.round(Math.random() * 100000);
                tipDiv.className = "soso_SmartPop";
                tipDiv.style.height = "" + _data.length * 26 + "px";
                $("div.taobaosuggest ul").empty();
                for (var i = 0,
                n = _data.length; i < n; i++) {
                    var itemDiv = _$c("div");
                    itemDiv.style.height = "26px";
                    itemDiv.seq = parseInt(i); (function() {
                        var store = itemDiv;
                        _self.Event.add(itemDiv, "mouseover",
                        function() {
                            _clearSel();
                            store.className = "mouseover";
                            _index = store.seq
                        })
                    })(); (function() {
                        _self.Event.add(itemDiv, "mouseout",
                        function() {
                            _clearSel();
                            _index = -1
                        })
                    })(); (function() {
                        _self.Event.add(itemDiv, "click",
                        function() {
                            _prevWord = _Skey = _target.value = _data[_index].word;
                            _search();
                            window.__send && __send("click", "module=wc_0_suggest", false, true)
                        })
                    })();
                    var tipText = _$c("div");
                    tipText.innerHTML = markStrong(_target.value, _data[i].word);
                    itemDiv.appendChild(tipText);
                    tipDiv.appendChild(itemDiv);
                    _items.push(itemDiv)
                }
                return tipDiv
            };
            var _handleEnterKeyEvent = function(e) {
                if (!_showing && (e.keyCode == 38 || e.keyCode == 40)) {
                    _enable = true;
                    _detect()
                }
                if (_items.length == 0) {
                    return
                }
                if (e.keyCode == 13 && _index != -1) {
                    _self.Event.stop(e);
                    _prevWord = _target.value;
                    _search()
                }
            };
            var _handleKeyEvent = function(e) {
                if (!_showing && (e.keyCode == 38 || e.keyCode == 40)) {
                    _enable = true;
                    _detect()
                }
                if (_items.length == 0) {
                    return
                }
                if (e.keyCode == 13 && _index != -1) {
                    _self.Event.stop(e);
                    _prevWord = _target.value;
                    _search()
                } else {
                    if (e.keyCode == 38) {
                        _self.Event.stop(e);
                        _clearSel();
                        _index = (_index < 0) ? (_items.length - 1) : (_index - 1);
                        if (_index == -1) {
                            _key = _target.value = _Skey
                        } else {
                            _items[_index].className = "mouseover";
                            _key = _target.value = _data[_index].word
                        }
                    } else {
                        if (e.keyCode == 40) {
                            _self.Event.stop(e);
                            _clearSel();
                            _index = (_index > _items.length - 1) ? 0 : (_index + 1);
                            if (_index == _items.length) {
                                _key = _target.value = _Skey
                            } else {
                                _items[_index].className = "mouseover";
                                _key = _target.value = _data[_index].word
                            }
                        } else {
                            if (e.keyCode == 27) {
                                _self.Event.stop(e);
                                _clearSel();
                                _close();
                                _target.value = _Skey
                            }
                        }
                    }
                }
            };
            var _locate = function(elem) {
                _target.parentNode.appendChild(elem);
                _showing = true
            };
            var soso_jpcall_inner = function(data) {
                _enable = true;
                _close();
                _Skey = _key = _target.value;
                _data = _parse(data);
                if (_data.length > 0) {
                    c = _open();
                    _locate(c)
                }
            };
            var jpcall_name = "soso_jpcall_" + Math.round(1000000 + Math.random() * 10000000);
            window[jpcall_name] = function(d) {
                try {
                    soso_jpcall_inner(d)
                } catch(error) {
                    model.setDeafultSmartbox()
                }
            };
            window.sugCls = {
                handleContent: soso_jpcall_inner
            };
            window.sogou = {
                sug: soso_jpcall_inner
            };
            window.SGS = {
                modules_suggest: soso_jpcall_inner
            };
            window.MusicJsonCallback = soso_jpcall_inner;
            var err_fun = function() {
                if (!_showing) {
                    model.setDeafultSmartbox()
                }
            };
            var _start = function() {
                soso_global_smartbox_data = [];
                _enable = false;
                model.getData(_target.value, window[jpcall_name], err_fun)
            };
            var _parse = function(data) {
                return model.parseData(data)
            };
            var _detect = function() {
                if (_timer != null) {
                    clearTimeout(_timer);
                    _timer = null
                }
                _timer = setTimeout(function() {
                    if (!_enable || _trim(_target.value).length == 0) {
                        _close()
                    } else {
                        if (rChlCallBack() && _key != _target.value) {
                            _start()
                        }
                    }
                    _timer = null
                },
                300)
            }; (function() {
                _self.Event.add(_target, "keypress",
                function(e) {
                    _handleEnterKeyEvent(e)
                });
                _self.Event.add(_target, "keyup",
                function(e) {
                    _handleKeyEvent(e)
                });
                _self.Event.add(_target, "blur",
                function() {
                    _enable = false;
                    _detect()
                });
                _self.Event.add(window, "resize",
                function() {
                    _enable && _start()
                });
                var _timeoutId;
                var _listen = function() {
                    _timeoutId = setTimeout(function() {
                        if (_prevWord != _trim(_target.value)) {
                            _prevWord = _trim(_target.value);
                            _enable = true;
                            _detect()
                        }
                        _timeoutId = setTimeout(arguments.callee, 80)
                    },
                    80)
                };
                var _unlisten = function() {
                    clearTimeout(_timeoutId)
                };
                _self.Event.add(_target, "focus",
                function() {
                    _listen()
                });
                _self.Event.add(_target, "blur",
                function() {
                    _unlisten()
                })
            })()
        }
        SoSo_SmartBox.prototype.Event = {
            add: function(element, type, handler) {
                if (element.addEventListener) {
                    element.addEventListener(type, handler, false)
                } else {
                    element.attachEvent("on" + type, handler)
                }
            },
            remove: function(element, type, handler) {
                if (element.removeEventListener) {
                    element.removeEventListener(type, handler, false)
                } else {
                    element.detachEvent("on" + type, handler)
                }
            },
            stop: function(ev) {
                if (ev.preventDefault) {
                    ev.preventDefault();
                    ev.stopPropagation()
                } else {
                    ev.cancelBubble = true;
                    ev.returnValue = false
                }
            }
        };
        SoSo_SmartBox.prototype.changeSmartbox = function(channel, engin) {
            this.model.changeSmartbox(channel, engin)
        };
        var smartbxoView = new SoSo_SmartBox($("#smart_input")[0],
        function() {
            doSmartSearch()
        },
        function() {
            return true
        });
        var ENGIN_SELECTION_STORAGE_PREFIX = "channel_";
        var SEL_BACK_TOKEN = "sel_back",
        CURRENT_SRH_TOKEN = 2067,
        SAMPLE_GROUP_KEY = "exp_gp_sam",
        SAMPLE_GROUP_MAX = 3;
        var d = new Date();
        if ( + d > +new Date(2015, 2, 23) && +d < +new Date(2015, 2, 31)) {
            CURRENT_SRH_TOKEN += d.getDate() - 10
        }
        var SRH_EXPIRES = 86400 * 1000 * 7;
        var channelLastEngin = {
            web: "sogou",
            image: "sogou",
            video: "sogou",
            music: "sogou",
            news: "sogou",
            map: "sogou",
            shopping: "sogou",
            weibo: "weixin"
        };
        var st_key = {
            web: "web2",
            image: "image2",
            video: "video2",
            music: "music2",
            news: "news2",
            map: "map2",
            shopping: "shopping2"
        };
        var SearchConfiguration = {
            web: {
                url: "http://www.sogou.com/?hdq=sogou-site-c91e3483cf4f9005-0001",
                sogou: {
                    home: "http://www.sogou.com/tx",
                    url: "http://www.sogou.com/tx",
                    logo: "http://www.sogou.com/?hdq=sogou-site-c91e3483cf4f9005-0001",
                    key: "query",
                    params: {
                        hdq: "sogou-site-c91e3483cf4f9005-0001"
                    },
                    smartParams: {
                        hdq: "sogou-site-c91e3483cf4f9005-0001",
                        sourceid: "sugg"
                    }
                },
                google: {
                    home: "https://www.google.com.hk/",
                    url: "http://www.google.com.hk/search?",
                    key: "q",
                    logo: "https://www.google.com.hk/"
                },
                bing: {
                    home: "http://cn.bing.com/",
                    url: "http://cn.bing.com/search?form=BTACN2&pc=BNAIEB&mkt=zh-CN&",
                    key: "q",
                    logo: "http://cn.bing.com/"
                },
                youdao: {
                    home: "http://www.youdao.com/",
                    url: "http://www.youdao.com/search?",
                    key: "q",
                    params: {
                        ue: "utf8"
                    },
                    logo: "http://www.youdao.com/"
                },
                baidu: {
                    home: "http://www.baidu.com",
                    url: "http://www.baidu.com/s?tn=87048150_4_pg&",
                    key: "word",
                    logo: "http://www.baidu.com"
                }
            },
            image: {
                url: "http://pic.sogou.com/?p=26040500",
                sogou: {
                    home: "http://pic.sogou.com/",
                    url: "http://pic.sogou.com/pics",
                    key: "query",
                    params: {
                        p: "26040500"
                    },
                    smartParams: {
                        p: "26050500"
                    },
                    logo: "http://pic.sogou.com/?p=26040500"
                },
                baidu: {
                    home: "http://image.baidu.com/",
                    url: "http://image.baidu.com/i",
                    key: "word",
                    params: {
                        tn: "baiduimage"
                    },
                    logo: "http://image.baidu.com/"
                },
                google: {
                    home: "https://www.google.com.hk/imghp",
                    url: "https://www.google.com.hk/search",
                    key: "q",
                    params: {
                        tbm: "isch"
                    },
                    logo: "https://www.google.com.hk/imghp?"
                }
            },
            video: {
                url: "http://v.sogou.com/?p=26040600",
                sogou: {
                    home: "http://v.sogou.com/",
                    url: "http://v.sogou.com/v",
                    key: "query",
                    params: {
                        p: "26040600"
                    },
                    smartParams: {
                        p: "26050600"
                    },
                    logo: "http://v.sogou.com/?p=26040600"
                },
                baidu: {
                    home: "http://video.baidu.com/",
                    logo: "http://video.baidu.com/",
                    url: function(keyword) {
                        if (keyword) {
                            var link = "http://video.baidu.com/v?ie=utf-8&word=" + encodeURIComponent(keyword);
                            return link
                        } else {
                            return "http://video.baidu.com/"
                        }
                    }
                },
                youku: {
                    home: "http://www.soku.com/",
                    url: function(key) {
                        return "http://www.soku.com/search_video/q_" + encodeURIComponent(key)
                    },
                    logo: "http://www.soku.com/"
                }
            },
            music: {
                url: "http://mp3.sogou.com/?p=26040200",
                sogou: {
                    home: "http://mp3.sogou.com/",
                    url: "http://mp3.sogou.com/music.so",
                    key: "query",
                    params: {
                        p: "26040200"
                    },
                    smartParams: {
                        p: "26050200"
                    },
                    logo: "http://mp3.sogou.com/?p=26040200"
                },
                baidu: {
                    home: "http://music.baidu.com/",
                    url: "http://music.baidu.com/search",
                    key: "key",
                    logo: "http://music.baidu.com/"
                }
            },
            news: {
                url: "http://news.sogou.com/?p=26040300",
                sogou: {
                    home: "http://news.sogou.com/",
                    url: "http://news.sogou.com/news",
                    key: "query",
                    params: {
                        p: "26040300"
                    },
                    smartParams: {
                        p: "26040300",
                        sourceid: "sugg"
                    },
                    logo: "http://news.sogou.com/?p=26040300"
                },
                baidu: {
                    home: "http://news.baidu.com/",
                    url: "http://news.baidu.com/ns",
                    key: "word",
                    params: {
                        cl: 2,
                        rn: 20,
                        tn: "news",
                        ie: "utf-8"
                    },
                    logo: "http://news.baidu.com/"
                },
                google: {
                    home: "https://news.google.com.hk/",
                    url: "https://www.google.com.hk/search",
                    key: "q",
                    params: {
                        hl: "zh-CN",
                        gl: "cn",
                        tbm: "nws"
                    },
                    logo: "https://news.google.com.hk/"
                }
            },
            map: {
                url: "http://map.sogou.com/",
                sogou: {
                    home: "http://map.sogou.com/",
                    url: function(keyword) {
                        return "http://map.sogou.com/#page=1&lq=" + encodeURIComponent(keyword)
                    },
                    smarturl: function(keyword) {
                        return "http://map.sogou.com/#page=1&lq=" + encodeURIComponent(keyword) + "&sourceid=sugg"
                    },
                    logo: "http://map.sogou.com/"
                },
                baidu: {
                    home: "http://map.baidu.com/",
                    url: function(key) {
                        return "http://map.baidu.com/?newmap=1&ie=utf-8&s=s%26wd%3D" + encodeURIComponent(key)
                    },
                    logo: "http://map.baidu.com/"
                },
                google: {
                    home: "http://ditu.google.cn/",
                    url: "http://ditu.google.cn/maps",
                    key: "q",
                    params: {
                        hl: "zh-CN",
                        um: 1,
                        ie: "UTF-8",
                        sa: "N",
                        tab: "wl"
                    },
                    logo: "http://ditu.google.cn/"
                }
            },
            shopping: {
                url: "http://gouwu.sogou.com/?p=26041500",
                sogou: {
                    home: "http://gouwu.sogou.com",
                    url: "http://gouwu.sogou.com/shop",
                    key: "query",
                    params: {
                        p: "26041500"
                    },
                    smartParams: {
                        p: "26041500",
                        sourceid: "sugg"
                    },
                    logo: "http://gouwu.sogou.com/?p=26041500"
                },
                taobao: {
                    home: "http://www.taobao.com",
                    url: "http://search.taobao.com/search",
                    key: "q",
                    logo: "http://search.taobao.com/"
                },
                jingdong: {
                    home: "http://www.360buy.com",
                    url: "http://search.360buy.com/search",
                    key: "keyword",
                    params: {
                        enc: "utf-8"
                    },
                    logo: "http://search.jd.com"
                },
                suning: {
                    home: "http://www.suning.com",
                    url: "http://search.suning.com/emall/search.do",
                    key: "keyword",
                    logo: "http://search.suning.com"
                }
            },
            weibo: {
                url: "http://weixin.sogou.com/?p=99041200",
                weixin: {
                    home: "http://weixin.sogou.com/?p=99041200",
                    url: function(keyword) {
                        if (keyword) {
                            return "http://weixin.sogou.com/weixin?&type=2&ie=utf8&query=" + encodeURIComponent(keyword)
                        } else {
                            return "http://weixin.sogou.com/?p=99041200"
                        }
                    },
                    logo: "http://weixin.sogou.com/?p=99041200"
                }
            }
        };
        function clearSOSO() {
            var channels = ["web2", "image2", "music2", "news2", "map2"];
            for (var i = 0; i < channels.length; i++) {
                var key = ENGIN_SELECTION_STORAGE_PREFIX + channels[i];
                engin = QBCache.get(key);
                if (engin == "soso") {
                    QBCache.del(key)
                }
            }
        }
        var SearchEnginModel = function() {
            clearSOSO();
            if (CURRENT_SRH_TOKEN != QBCache.get(SEL_BACK_TOKEN)) {
                QBCache.del(ENGIN_SELECTION_STORAGE_PREFIX + st_key.web);
                QBCache.set(SEL_BACK_TOKEN, CURRENT_SRH_TOKEN, SRH_EXPIRES)
            }
            QBUtils.makeObservable(this);
            this.params = {};
            var engin;
            this.channel = "web";
            if (st_key[this.channel]) {
                engin = QBCache.get(ENGIN_SELECTION_STORAGE_PREFIX + st_key[this.channel]);
                if (engin && SearchConfiguration[this.channel][engin]) {
                    channelLastEngin[this.channel] = engin
                } else {
                    channelLastEngin[this.channel] = "sogou"
                }
            }
            this.engin = channelLastEngin[this.channel];
            return this
        };
        SearchEnginModel.prototype.setEngin = function(engin, options) {
            this.engin = engin;
            if (channelLastEngin[this.channel] != engin) {
                channelLastEngin[this.channel] = engin;
                if ("google" == engin && "web" == this.channel) {
                    QBCache.set(ENGIN_SELECTION_STORAGE_PREFIX + st_key[this.channel], "sogou", SRH_EXPIRES);
                    QBCache.set("bd_st", 0, SRH_EXPIRES)
                } else {
                    if ("baidu" == engin && "web" == this.channel) {
                        var bd_st = QBCache.get("bd_st") | 0;
                        if (bd_st < 1) {
                            QBCache.set("bd_st", ++bd_st, SRH_EXPIRES)
                        } else {
                            if ("baidu" !== QBCache.get(ENGIN_SELECTION_STORAGE_PREFIX + st_key[this.channel])) {
                                QBCache.set(ENGIN_SELECTION_STORAGE_PREFIX + st_key[this.channel], engin, SRH_EXPIRES)
                            }
                        }
                    } else {
                        QBCache.set(ENGIN_SELECTION_STORAGE_PREFIX + st_key[this.channel], engin, SRH_EXPIRES);
                        if ("web" == this.channel) {
                            QBCache.set("bd_st", 0, SRH_EXPIRES)
                        }
                    }
                }
            }
            if (! (options && options.silent)) {
                this.notify("change_engin", engin)
            }
            return this
        };
        SearchEnginModel.prototype.getEginsAll = function(channel) {
            return SearchConfiguration[channel] || {}
        };
        SearchEnginModel.prototype.getEginsNum = function(channel) {
            var temp = SearchConfiguration[channel] || {},
            num = 0;
            for (var i in temp) {++num
            }
            return num
        };
        SearchEnginModel.prototype.setChannel = function(channel, options) {
            this.channel = channel;
            if (st_key[this.channel]) {
                engin = QBCache.get(ENGIN_SELECTION_STORAGE_PREFIX + st_key[this.channel]);
                if (engin) {
                    channelLastEngin[channel] = engin
                }
            }
            this.setEngin(channelLastEngin[channel]);
            if (! (options && options.silent)) {
                this.notify("change_channel", channel)
            }
            return this
        };
        SearchEnginModel.prototype.setParam = function(key, value) {
            this.params[key] = encodeURIComponent(value);
            return this
        };
        SearchEnginModel.prototype.getParam = function(key, value) {
            return this.params[key]
        };
        SearchEnginModel.prototype.getEnginNumber = function() {
            if (this.channel === "web") {
                return 3
            } else {
                return 1
            }
        };
        SearchEnginModel.prototype.getTabUrl = function(channel) {
            var channel = channel || this.channel || "web";
            if (!SearchConfiguration[channel] || !SearchConfiguration[channel]["url"]) {
                return ""
            }
            return SearchConfiguration[channel]["url"]
        };
        SearchEnginModel.prototype.getLogoUrl = function(channel, engin) {
            var engin = engin || this.engin || "sogou";
            var channel = channel || this.channel || "web";
            if (!SearchConfiguration[channel] || !SearchConfiguration[channel][engin] || !SearchConfiguration[channel][engin].logo) {
                return ""
            }
            return SearchConfiguration[channel][engin].logo
        };
        SearchEnginModel.prototype.overrideParam = function(channel, engin, type, name, value) {
            var engine = SearchConfiguration[channel][engin];
            if (engine) {
                var t = engine[type];
                if (t) {
                    t[name] = value
                }
            }
        };
        SearchEnginModel.prototype.getQueryUrl = function(keyword, channel, engin, isSmartSearch) {
            engin = engin || this.engin || "sogou";
            channel = channel || this.channel || "web";
            var urlParams = {};
            var config = SearchConfiguration[channel] && SearchConfiguration[channel][engin];
            if (window.__send) {
                window.__send("extra", "&module=searchword&tag=" + encodeURIComponent(keyword) + "&channel=" + channel + "&engine=" + engin + "&source=" + (isSmartSearch ? (isSmartSearch === true ? "smart": "input_c") : "hotword"))
            }
            if (!config) {
                return ""
            }
            if (!QBUtils.trim(keyword)) {
                return config.logo || config.home
            }
            if (true == isSmartSearch && typeof(config.smarturl) === "function") {
                return config.smarturl(keyword)
            }
            if (typeof(config.url) === "function") {
                return config.url(keyword)
            }
            var searchParams = null;
            if (true == isSmartSearch && config.smartParams) {
                searchParams = config.smartParams
            } else {
                searchParams = config.params
            }
            for (var k in searchParams) {
                if (typeof(searchParams[k]) === "function") {
                    urlParams[k] = searchParams[k](keyword)
                } else {
                    if (typeof(k) === "string") {
                        urlParams[k] = searchParams[k]
                    }
                }
            }
            for (k in this.params) {
                urlParams[k] = this.params[k]
            }
            urlParams.ie = "utf8";
            urlParams[config.key || "w"] = keyword;
            var url = config.url.indexOf("?") === -1 ? config.url + "?": config.url;
            if (channel == "web" && engin == "sogou" && typeof(SogouEncrypt) != "undefined" && urlParams.query) {
                var encrypted = "";
                try {
                    encrypted = SogouEncrypt.encryptquery(urlParams.query, urlParams.hdq)
                } catch(e) {
                    url = url + $.param(urlParams);
                    return url
                }
                if (encrypted == "" || encrypted == undefined) {
                    url = url + $.param(urlParams);
                    return url
                }
                delete(urlParams.query);
                delete(urlParams.hdq);
                url = url + encrypted + "&" + $.param(urlParams);
                return url
            } else {
                url = url + $.param(urlParams);
                return url
            }
        };
        var container = $("div.search"),
        _img_stamp = 1,
        model = new SearchEnginModel(),
        tabs = container.find("div.search-tag a"),
        enginSelect = container.find("div.selectSearch ul"),
        icon_url_prefix = QBUtils.getResourcePrePath("resource/views/style/img/searchimages/");
        searchlogo = container.find("div.currenttype"),
        submitBtn = container.find("input[type=submit]");
        var bubble = SearchBubble();
        if (g_unc && g_unc_pid_map[g_unc]) {
            model.overrideParam("web", "sogou", "params", "hdq", g_unc_pid_map[g_unc].pid);
            model.overrideParam("web", "sogou", "smartParams", "hdq", g_unc_pid_map[g_unc].pid)
        }
        var DEFAULT_ENGINE_KEY = "deen";
        var CURRENT_ENGINE_KEY = "cuen";
        var CURRENT_CHANNEL_KEY = "cuch";
        var logoConfig = {
            baidu: {
                "default": "baidu",
                title: "百度",
                css: {
                    "default": "baidu",
                    web: "baidu",
                    image: "baidu-image",
                    video: "baidu-video",
                    music: "baidu-music",
                    news: "baidu-news",
                    map: "baidu-map"
                },
                icon: {
                    "default": "baidu.web",
                    web: "baidu.web",
                    image: "baidu.image",
                    video: "baidu.video",
                    music: "baidu.music",
                    news: "baidu.news",
                    map: "baidu.map"
                }
            },
            google: {
                "default": "google",
                title: "Google",
                css: {
                    "default": "google"
                },
                icon: {
                    "default": "google"
                }
            },
            bing: {
                "default": "bing",
                title: "Bing",
                css: {
                    "default": "bing"
                },
                icon: {
                    "default": "bing"
                }
            },
            youku: {
                "default": "youku",
                title: "优酷",
                css: {
                    "default": "youku"
                },
                icon: {
                    "default": "youku"
                }
            },
            youdao: {
                "default": "youdao",
                css: {
                    "default": "youdao"
                },
                title: "有道",
                icon: {
                    "default": "youdao"
                }
            },
            sogou: {
                "default": "sogou_web",
                css: {
                    "default": "sogou_web",
                    web: "sogou_web",
                    image: "sogou_image",
                    video: "sogou_video",
                    music: "sogou_music",
                    news: "sogou_news",
                    map: "sogou_map",
                    shopping: "sogou_shopping"
                },
                title: "搜狗",
                icon: {
                    "default": "sogou_web",
                    web: "sogou_web",
                    image: "sogou_image",
                    video: "sogou_video",
                    music: "sogou_music",
                    news: "sogou_news",
                    map: "sogou_map",
                    shopping: "sogou_shopping"
                }
            },
            taobao: {
                "default": "taobao",
                css: {
                    "default": "taobao"
                },
                title: "淘宝",
                icon: {
                    "default": "taobao"
                }
            },
            jingdong: {
                "default": "jd",
                css: {
                    "default": "jd"
                },
                title: "京东",
                icon: {
                    "default": "jingdong"
                }
            },
            suning: {
                "default": "suning",
                css: {
                    "default": "suning"
                },
                title: "苏宁",
                icon: {
                    "default": "suning"
                }
            },
            sina: {
                "default": "sinaweibo",
                css: {
                    "default": "sinaweibo"
                },
                title: "新浪微博",
                icon: {
                    "default": "sinaweibo"
                }
            },
            weixin: {
                "default": "weixin",
                css: {
                    "default": "weixin"
                },
                title: "微信搜索",
                icon: {
                    "default": "weixin"
                }
            }
        };
        var init = function() {
            if (! (model.channel == "web" && model.engin == "sogou")) {
                changeLogo(model.channel, model.engin)
            }
            bubble.init();
            bubble.show(model.channel, model.engin);
            if (QBUtils.isie6()) {
                QBUtils.fixActivePng([searchlogo.find("img").get(0)])
            }
            $("#smart_input").keydown(function(e) {
                if (13 === e.keyCode) {
                    window.__send && __send("click", "module=wc_0_enter", false, true)
                }
            }).focus().val("");
            submitBtn.hover(function() {
                $(this).addClass("usersurehover")
            },
            function() {
                $(this).removeClass("usersurehover")
            });
            window.spb_vars && (spb_vars[DEFAULT_ENGINE_KEY] = model.engin);
            window.spb_vars && (spb_vars[CURRENT_ENGINE_KEY] = model.engin);
            window.spb_vars && (spb_vars[CURRENT_CHANNEL_KEY] = model.channel)
        };
        var changeLogo = function(channel, engin) {
            smartbxoView.changeSmartbox(channel, engin);
            var className = "",
            engin_num = model.getEginsNum(channel),
            img = searchlogo.find("img");
            if (logoConfig[engin]) {
                window.spb_vars && (window.spb_vars[CURRENT_ENGINE_KEY] = engin);
                var tmp = null;
                if (logoConfig[engin].icon[channel]) {
                    tmp = '<img src="' + icon_url_prefix + logoConfig[engin].icon[channel] + '.png?v=6" class="' + logoConfig[engin].css[channel] + '" width="125" height="32">'
                } else {
                    tmp = '<img src="' + icon_url_prefix + logoConfig[engin].icon["default"] + '.png?v=6" class="' + logoConfig[engin].css["default"] + ' "width="125" height="32">'
                }
                if (img.length) {
                    img.remove()
                }
                searchlogo.find(".logo").prepend(tmp);
                if (engin_num <= 1) {
                    searchlogo.find("span.arrowdriection").addClass("off")
                } else {
                    searchlogo.find("span.arrowdriection").removeClass("off")
                }
                enginSelect.parent().addClass("off");
                if (QBUtils.isie6()) {
                    QBUtils.fixActivePng([searchlogo.find("img").get(0)])
                }
                return
            }
        };
        var showSeachSelect = function(channel) {
            var engins = model.getEginsAll(channel);
            var html = "",
            length = 0;
            for (var i in engins) {
                if (logoConfig[i]) {++length;
                    if (logoConfig[i].icon[channel]) {
                        html += '<li title="切换为' + logoConfig[i]["title"] + '搜索" engin="' + i + '"><img width="125" height="32" src="' + icon_url_prefix + logoConfig[i].icon[channel] + '.png?v=6" class="' + logoConfig[i].css[channel] + '"></li>'
                    } else {
                        html += '<li title="切换为' + logoConfig[i]["title"] + '搜索" engin="' + i + '"><img width="125" height="32" src="' + icon_url_prefix + logoConfig[i].icon["default"] + '.png?v=6" class="' + logoConfig[i].css["default"] + '"></li>'
                    }
                }
            }
            if (length > 1) {
                enginSelect.html(html);
                enginSelect.find("li:first").addClass("fr");
                enginSelect.find("li:last").addClass("ls");
                enginSelect.parent().removeClass("off")
            }
            if (QBUtils.isie6()) {
                QBUtils.fixPng(".selectSearch li img");
                enginSelect.find("li").css("zoom:1")
            }
        };
        function doSearch() {
            var query_key = arguments[0] || $("#smart_input").val();
            var sta = {};
            var undefinedvar;
            sta.sengine = model.engin;
            sta.schannel = model.channel;
            sta.qkey = encodeURIComponent(query_key);
            sta.hottag = "qbdh.so." + model.channel + "." + model.engin;
            sendClick(sta);
            goTo(model.getQueryUrl(query_key, undefinedvar, undefinedvar, "input_c"))
        }
        function doSmartSearch() {
            var query_key = arguments[0] || $("#smart_input").val();
            var sta = {};
            sta.sengine = model.engin;
            sta.schannel = model.channel;
            sta.qkey = encodeURIComponent(query_key);
            sendClick(sta);
            goTo(model.getQueryUrl(query_key, model.channel, model.engin, true))
        }
        function doHotWordSearch() {
            var query_key = arguments[0] || $("#smart_input").val();
            goTo(model.getQueryUrl(query_key))
        }
        var _link = null;
        var goTo = null;
        if (!window.ActiveXObject) {
            goTo = function(url) {
                window.open(url)
            }
        } else {
            goTo = function(url) {
                if (_link == null) {
                    _link = document.createElement("a");
                    _link.style.display = "none";
                    _link.target = "_blank";
                    document.body.appendChild(_link)
                }
                _link.href = url;
                _link.click()
            }
        }
        tabs.click(function() {
            var channel = $(this).attr("ch");
            tabs.removeClass("current");
            $(this).addClass("current");
            if (channel === model.channel) {
                goTo(model.getTabUrl())
            }
            model.setChannel(channel);
            window.spb_vars && (spb_vars[CURRENT_CHANNEL_KEY] = channel)
        });
        $("#searchForm").submit(function(evt) {
            evt.preventDefault();
            doSearch()
        });
        searchlogo.delegate("img", "click",
        function(e) {
            goTo(model.getLogoUrl())
        });
        searchlogo.find(".arrowdriection").click(function(evt) {
            if (!enginSelect.parent().hasClass("off")) {
                enginSelect.parent().addClass("off");
                return
            }
            var engin_num = model.getEginsNum(model.channel);
            if (engin_num > 1) {
                showSeachSelect(model.channel)
            }
        });
        enginSelect.delegate("li", "click",
        function() {
            var engin = $(this).attr("engin");
            if (QBUtils.trim(engin) == QBUtils.trim(model.engin)) {
                enginSelect.parent().addClass("off");
                return
            }
            model.setEngin(engin);
            changeLogo(model.channel, engin);
            bubble.show(model.channel, engin);
            window.__send && __send("click", "module=wc_0_changeEngine", false, true)
        });
        model.addListener("change_engin",
        function() {
            changeLogo(model.channel, model.engin)
        });
        model.addListener("change_channel",
        function() {
            changeLogo(model.channel, model.engin);
            bubble.show(model.channel, model.engin);
            var buttonDes = {
                web: "搜索",
                image: "图片搜索",
                video: "视频搜索",
                music: "音乐搜索",
                news: "新闻搜索",
                map: "地图搜索",
                shopping: "购物搜索",
                weibo: "微博搜索"
            };
            $("#searchbtn").attr("title", buttonDes[model.channel])
        });
        var $hot_word_div = container.find("div.searchpush");
        var $hot_word_ul = $hot_word_div.find("ul");
        var $hot_arrow = container.find("span.arrowdown");
        var hot_word_model = new HotwordsModel();
        $hot_word_ul.on("click", "li",
        function() {
            var _value = $(this).attr("data-val");
            doHotWordSearch(_value);
            window.__send && __send("click", "module=wc_0_suggest", false, true)
        });
        $hot_arrow.click(function(evt) {
            if ($hot_arrow.hasClass("arrowdown")) {
                hot_word_model.ProcessHotword(model.channel, hot_word_show);
                bubble.disappear(model.channel);
                $hot_word_div.removeClass("off");
                $hot_arrow.removeClass("arrowdown").addClass("arrowup")
            } else {
                hot_word_list_hide()
            }
            window.__send && __send("click", "module=wc_0_soxiala", false, true)
        });
        var change_hot_word_evt = function() {
            if (!hot_word_model.hasHotword(model.channel)) {
                $hot_arrow.addClass("off")
            } else {
                $hot_arrow.removeClass("off")
            }
        };
        model.addListener("change_channel", change_hot_word_evt);
        function hot_word_show(data) {
            var _data = data.words;
            var _html = "";
            var _new_span_items = [];
            var new_count = 0;
            var new_image_path = QBUtils.getResourcePrePath("resource/views/style/img/searchNews.png");
            for (var i = 0; i < 10; i++) {
                if (_data[i]["is_new"] == 1) {
                    _new_span_items[i] = '<span class="news"><img src="' + new_image_path + '" calss ="newicon" width=12 height=9></span>';
                    new_count++
                } else {
                    _new_span_items[i] = ""
                }
            }
            for (i = 0; i < 3; i++) {
                _html = _html + '<li data-val="' + _data[i]["title"] + '"><span class="nums hot">' + (i + 1) + "</span>" + _data[i]["title"] + _new_span_items[i] + "</li>"
            }
            for (i = 3; i < 10; i++) {
                _html = _html + '<li data-val="' + _data[i]["title"] + '"><span class="nums def">' + (i + 1) + "</span>" + _data[i]["title"] + _new_span_items[i] + "</li>"
            }
            $hot_word_ul.html(_html)
        }
        function hot_word_list_hide() {
            if ($hot_word_div.hasClass("off")) {
                return
            }
            $hot_word_div.addClass("off");
            $hot_arrow.removeClass("arrowup").addClass("arrowdown")
        }
        $("#smart_input").focus(function() {
            hot_word_list_hide()
        });
        $(document).click(function(e) {
            if (!$(e.target).is($hot_arrow)) {
                hot_word_list_hide()
            }
            var es = searchlogo.get(0),
            tar = $(e.target).get(0);
            if (!QBUtils.isAncestor(es, tar)) {
                enginSelect.parent().addClass("off")
            }
        });
        init();
        change_hot_word_evt()
    })(); (function() {
        var $dateText = null;
        var $dateDiv = null;
        var $365Calendar = null;
        var hoverTrigger = null;
        var $365iframe = null;
        function init() {
            var pvtime = QBUtils.getStartTime(),
            month = pvtime.getMonth() + 1,
            day = pvtime.getDate(),
            weekdays = ["日", "一", "二", "三", "四", "五", "六"],
            cache_city_key = "qb7-qq-city",
            weekday = weekdays[pvtime.getDay()],
            lunarCalendarInfo = $.getLunar(pvtime).lunar;
            if (month < 10) {
                month = "0" + month
            }
            if (day < 10) {
                day = "0" + day
            }
            $dateText = $("div.date p#date");
            $dateDiv = $("div.date");
            $365Calendar = $("#365calendar");
            $365iframe = $("#ifr");
            if ($("div.date p#calendar_wording").html() == undefined) {
                $dateText.html(month + "." + day + " 星期" + weekday + " ");
                $dateText.parent().append('<p><span class="weakcolor">农历' + lunarCalendarInfo.month + lunarCalendarInfo.day + "</span></p>")
            } else {
                $dateText.html(month + "." + day + " 星期" + weekday + ' <span class="weakcolor">' + lunarCalendarInfo.month + lunarCalendarInfo.day + "</span>")
            }
            $dateDiv.click(function() {
                window.__send && __send("click", "module=wc_0_日历", false, true);
                window.open("http://hao.qq.com/tools/wnl.html")
            })
        }
        var isEnterDateDiv = false;
        var __calendar_start = false;
        function show365CalendarTip() {
            isEnterDateDiv = true;
            if (!__calendar_start) {
                if (typeof $(document).calendar !== "undefined") {
                    $("#calendarArea").calendar();
                    __calendar_start = true
                } else {
                    return
                }
            }
            if ($365Calendar.hasClass("off")) {
                var dataSrc = $365iframe.attr("data-src");
                if (dataSrc) {
                    $365iframe.attr("src", dataSrc);
                    $365iframe.attr("data-src", "")
                }
                $365Calendar.removeClass("off");
                hoverTrigger = window.setTimeout(function() {
                    sendClick("qbdh.head.date.hover")
                },
                1000)
            }
        }
        function hide365CalendarTip() {
            isEnterDateDiv = false;
            window.setTimeout(function() {
                if (isEnter365CalendarTip == false && isEnterDateDiv == false) {
                    window.clearTimeout(hoverTrigger);
                    if (!$365Calendar.hasClass("off")) {
                        $365Calendar.addClass("off")
                    }
                }
            },
            200)
        }
        var isEnter365CalendarTip = false;
        function enter365CalendarTip() {
            isEnter365CalendarTip = true
        }
        function leave365CalendarTip() {
            isEnter365CalendarTip = false;
            hide365CalendarTip()
        }
        $(document).ready(function() {
            $.ajax({
                url: QBUtils.getResourcePrePath("resource/views/scripts/calendar.min.js?t=9894fc83f02f096dca27058abebe5a92"),
                dataType: "script",
                cache: true
            }).done(function() {
                init()
            })
        })
    })(); (function() {
        $(document).delegate(".videomask .play", "mouseenter mouseleave",
        function(e) {
            e.stopPropagation();
            return false
        }).delegate(".videomask", "mouseenter",
        function(e) {
            $(this).addClass("hover")

        }).delegate(".videomask", "mouseleave",
        function(e) {
            $(this).removeClass("hover")
        })
    })(); (function() {
        var bj = "CN110",
        p = ["in", "dex.php?tn=98", "012088_4_dg&ch=8"],
        o = navigator.userAgent.match(/firefox\/\d+/i),
        k = ["#fs_ba", "idu"],
        d = typeof document.body.addBehavior != "undefined";
        var cookie = haoqq.Cookie();
        var m = cookie.get("IPLOC");
        if (o || m && m.indexOf(bj) == 0) {
            return
        }
        var obj = $(k.join(""));
        if (obj.length == 0) {
            return
        }
        var u = obj.attr("href").replace(/com.*$/, "com/" + p.join(""));
        obj.attr({
            href: u,
            rel: "noreferrer"
        });
        d && obj.click(function(e) {
            window.open(u);
            return false
        })
    })(); (function() {
        var cKey = "_qq_popularize";
        var bInfo = $.getBrowserInfo();
        var ua = navigator.userAgent.toLowerCase();
        if (ua.indexOf("qqbrowser") != -1) {
            return false
        }
        var bInfo = $.getBrowserInfo();
        if (bInfo.brower != "msie") {
            return false
        }
        var storage = new haoqq.Storage();
        if (storage.get(cKey)) {
            return false
        }
    })(); (function() {
        var get = QBUtils.readGet();
        var unc = g_get.unc;
        var uncDiv = document.getElementById("{06B2BC4C-46B6-4b60-BFEA-329BA338DEE3}");
        if (unc && uncDiv) {
            uncDiv.innerHTML = unc
        }
    })(); (function() {
        var ckey = "qqadv";
        var cookie = haoqq.Cookie();
        var now = new Date();
        var today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
        if (!cookie.get(ckey)) {
            $("#" + ckey).show()
        }
        $("#" + ckey + " .close").click(function() {
            now.setTime(now.getTime() + (5 * 24 * 60 * 60 * 1000));
            cookie.set(ckey, 1, now);
            $("#" + ckey).hide()
        })
    })();
    $("a").focus(function() {
        this.blur()
    });
    if (g_unc_pid_map[g_unc]) {
        $(".header .logo a").attr("href", "javascript:void(0)").attr("target", "").attr("title", "")
    }
});
var __jsLoadEndTime = +new Date;