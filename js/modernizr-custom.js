/*! modernizr 3.5.0 (Custom Build) | MIT *
 * https://modernizr.com/download/?-backgroundblendmode-backgroundcliptext-checked-csscalc-csschunit-csscolumns-cssescape-cssexunit-cssfilters-cssgradients-cssgrid_cssgridlegacy-csshyphens_softhyphens_softhyphensfind-cssinvalid-cssmask-csspointerevents-csspositionsticky-csspseudoanimations-csspseudotransitions-cssreflections-cssremunit-cssresize-cssscrollbar-csstransforms-csstransforms3d-csstransformslevel2-csstransitions-cssvalid-cssvhunit-cssvmaxunit-cssvminunit-cssvwunit-cubicbezierrange-display_runin-displaytable-ellipsis-flexbox-flexboxlegacy-flexboxtweener-flexwrap-fontface-generatedcontent-hairline-hsla-lastchild-mediaqueries-multiplebgs-nthchild-objectfit-opacity-overflowscrolling-placeholder-preserve3d-regions-rgba-scrollsnappoints-shapes-siblinggeneral-subpixelfont-supports-target-textalignlast-textshadow-userselect-wrapflow-setclasses-shiv !*/
!function(e, t, n) {
    function i(e, t) {
        return typeof e === t
    }
    function r() {
        var e, t, n, r, o, s, a;
        for (var l in w)
            if (w.hasOwnProperty(l)) {
                if (e = [],
                t = w[l],
                t.name && (e.push(t.name.toLowerCase()),
                t.options && t.options.aliases && t.options.aliases.length))
                    for (n = 0; n < t.options.aliases.length; n++)
                        e.push(t.options.aliases[n].toLowerCase());
                for (r = i(t.fn, "function") ? t.fn() : t.fn,
                o = 0; o < e.length; o++)
                    s = e[o],
                    a = s.split("."),
                    1 === a.length ? Modernizr[a[0]] = r : (!Modernizr[a[0]] || Modernizr[a[0]]instanceof Boolean || (Modernizr[a[0]] = new Boolean(Modernizr[a[0]])),
                    Modernizr[a[0]][a[1]] = r),
                    T.push((r ? "" : "no-") + a.join("-"))
            }
    }
    function o(e) {
        var t = E.className
          , n = Modernizr._config.classPrefix || "";
        if (_ && (t = t.baseVal),
        Modernizr._config.enableJSClass) {
            var i = new RegExp("(^|\\s)" + n + "no-js(\\s|$)");
            t = t.replace(i, "$1" + n + "js$2")
        }
        Modernizr._config.enableClasses && (t += " " + n + e.join(" " + n),
        _ ? E.className.baseVal = t : E.className = t)
    }
    function s() {
        return "function" != typeof t.createElement ? t.createElement(arguments[0]) : _ ? t.createElementNS.call(t, "http://www.w3.org/2000/svg", arguments[0]) : t.createElement.apply(t, arguments)
    }
    function a(e, t) {
        return !!~("" + e).indexOf(t)
    }
    function l(t, n, i) {
        var r;
        if ("getComputedStyle"in e) {
            r = getComputedStyle.call(e, t, n);
            var o = e.console;
            if (null !== r)
                i && (r = r.getPropertyValue(i));
            else if (o) {
                var s = o.error ? "error" : "log";
                o[s].call(o, "getComputedStyle returning null, its possible modernizr test results are inaccurate")
            }
        } else
            r = !n && t.currentStyle && t.currentStyle[i];
        return r
    }
    function d(e, t) {
        return e - 1 === t || e === t || e + 1 === t
    }
    function u(e) {
        return e.replace(/([a-z])-([a-z])/g, function(e, t, n) {
            return t + n.toUpperCase()
        }).replace(/^-/, "")
    }
    function c(e, t) {
        if ("object" == typeof e)
            for (var n in e)
                N(e, n) && c(n, e[n]);
        else {
            e = e.toLowerCase();
            var i = e.split(".")
              , r = Modernizr[i[0]];
            if (2 == i.length && (r = r[i[1]]),
            "undefined" != typeof r)
                return Modernizr;
            t = "function" == typeof t ? t() : t,
            1 == i.length ? Modernizr[i[0]] = t : (!Modernizr[i[0]] || Modernizr[i[0]]instanceof Boolean || (Modernizr[i[0]] = new Boolean(Modernizr[i[0]])),
            Modernizr[i[0]][i[1]] = t),
            o([(t && 0 != t ? "" : "no-") + i.join("-")]),
            Modernizr._trigger(e, t)
        }
        return Modernizr
    }
    function f() {
        var e = t.body;
        return e || (e = s(_ ? "svg" : "body"),
        e.fake = !0),
        e
    }
    function p(e, n, i, r) {
        var o, a, l, d, u = "modernizr", c = s("div"), p = f();
        if (parseInt(i, 10))
            for (; i--; )
                l = s("div"),
                l.id = r ? r[i] : u + (i + 1),
                c.appendChild(l);
        return o = s("style"),
        o.type = "text/css",
        o.id = "s" + u,
        (p.fake ? p : c).appendChild(o),
        p.appendChild(c),
        o.styleSheet ? o.styleSheet.cssText = e : o.appendChild(t.createTextNode(e)),
        c.id = u,
        p.fake && (p.style.background = "",
        p.style.overflow = "hidden",
        d = E.style.overflow,
        E.style.overflow = "hidden",
        E.appendChild(p)),
        a = n(c, e),
        p.fake ? (p.parentNode.removeChild(p),
        E.style.overflow = d,
        E.offsetHeight) : c.parentNode.removeChild(c),
        !!a
    }
    function h(e, t) {
        return function() {
            return e.apply(t, arguments)
        }
    }
    function m(e, t, n) {
        var r;
        for (var o in e)
            if (e[o]in t)
                return n === !1 ? e[o] : (r = t[e[o]],
                i(r, "function") ? h(r, n || t) : r);
        return !1
    }
    function g(e) {
        return e.replace(/([A-Z])/g, function(e, t) {
            return "-" + t.toLowerCase()
        }).replace(/^ms-/, "-ms-")
    }
    function v(t, i) {
        var r = t.length;
        if ("CSS"in e && "supports"in e.CSS) {
            for (; r--; )
                if (e.CSS.supports(g(t[r]), i))
                    return !0;
            return !1
        }
        if ("CSSSupportsRule"in e) {
            for (var o = []; r--; )
                o.push("(" + g(t[r]) + ":" + i + ")");
            return o = o.join(" or "),
            p("@supports (" + o + ") { #modernizr { position: absolute; } }", function(e) {
                return "absolute" == l(e, null, "position")
            })
        }
        return n
    }
    function b(e, t, r, o) {
        function l() {
            c && (delete L.style,
            delete L.modElem)
        }
        if (o = i(o, "undefined") ? !1 : o,
        !i(r, "undefined")) {
            var d = v(e, r);
            if (!i(d, "undefined"))
                return d
        }
        for (var c, f, p, h, m, g = ["modernizr", "tspan", "samp"]; !L.style && g.length; )
            c = !0,
            L.modElem = s(g.shift()),
            L.style = L.modElem.style;
        for (p = e.length,
        f = 0; p > f; f++)
            if (h = e[f],
            m = L.style[h],
            a(h, "-") && (h = u(h)),
            L.style[h] !== n) {
                if (o || i(r, "undefined"))
                    return l(),
                    "pfx" == t ? h : !0;
                try {
                    L.style[h] = r
                } catch (b) {}
                if (L.style[h] != m)
                    return l(),
                    "pfx" == t ? h : !0
            }
        return l(),
        !1
    }
    function y(e, t, n, r, o) {
        var s = e.charAt(0).toUpperCase() + e.slice(1)
          , a = (e + " " + W.join(s + " ") + s).split(" ");
        return i(t, "string") || i(t, "undefined") ? b(a, t, r, o) : (a = (e + " " + A.join(s + " ") + s).split(" "),
        m(a, t, n))
    }
    function x(e, t, i) {
        return y(e, n, n, t, i)
    }
    var T = []
      , w = []
      , C = {
        _version: "3.5.0",
        _config: {
            classPrefix: "",
            enableClasses: !0,
            enableJSClass: !0,
            usePrefixes: !0
        },
        _q: [],
        on: function(e, t) {
            var n = this;
            setTimeout(function() {
                t(n[e])
            }, 0)
        },
        addTest: function(e, t, n) {
            w.push({
                name: e,
                fn: t,
                options: n
            })
        },
        addAsyncTest: function(e) {
            w.push({
                name: null,
                fn: e
            })
        }
    }
      , Modernizr = function() {};
    Modernizr.prototype = C,
    Modernizr = new Modernizr;
    var k = e.CSS;
    Modernizr.addTest("cssescape", k ? "function" == typeof k.escape : !1);
    var S = "CSS"in e && "supports"in e.CSS
      , z = "supportsCSS"in e;
    Modernizr.addTest("supports", S || z),
    Modernizr.addTest("target", function() {
        var t = e.document;
        if (!("querySelectorAll"in t))
            return !1;
        try {
            return t.querySelectorAll(":target"),
            !0
        } catch (n) {
            return !1
        }
    });
    var E = t.documentElement
      , _ = "svg" === E.nodeName.toLowerCase();
    _ || !function(e, t) {
        function n(e, t) {
            var n = e.createElement("p")
              , i = e.getElementsByTagName("head")[0] || e.documentElement;
            return n.innerHTML = "x<style>" + t + "</style>",
            i.insertBefore(n.lastChild, i.firstChild)
        }
        function i() {
            var e = y.elements;
            return "string" == typeof e ? e.split(" ") : e
        }
        function r(e, t) {
            var n = y.elements;
            "string" != typeof n && (n = n.join(" ")),
            "string" != typeof e && (e = e.join(" ")),
            y.elements = n + " " + e,
            d(t)
        }
        function o(e) {
            var t = b[e[g]];
            return t || (t = {},
            v++,
            e[g] = v,
            b[v] = t),
            t
        }
        function s(e, n, i) {
            if (n || (n = t),
            c)
                return n.createElement(e);
            i || (i = o(n));
            var r;
            return r = i.cache[e] ? i.cache[e].cloneNode() : m.test(e) ? (i.cache[e] = i.createElem(e)).cloneNode() : i.createElem(e),
            !r.canHaveChildren || h.test(e) || r.tagUrn ? r : i.frag.appendChild(r)
        }
        function a(e, n) {
            if (e || (e = t),
            c)
                return e.createDocumentFragment();
            n = n || o(e);
            for (var r = n.frag.cloneNode(), s = 0, a = i(), l = a.length; l > s; s++)
                r.createElement(a[s]);
            return r
        }
        function l(e, t) {
            t.cache || (t.cache = {},
            t.createElem = e.createElement,
            t.createFrag = e.createDocumentFragment,
            t.frag = t.createFrag()),
            e.createElement = function(n) {
                return y.shivMethods ? s(n, e, t) : t.createElem(n)
            }
            ,
            e.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + i().join().replace(/[\w\-:]+/g, function(e) {
                return t.createElem(e),
                t.frag.createElement(e),
                'c("' + e + '")'
            }) + ");return n}")(y, t.frag)
        }
        function d(e) {
            e || (e = t);
            var i = o(e);
            return !y.shivCSS || u || i.hasCSS || (i.hasCSS = !!n(e, "article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),
            c || l(e, i),
            e
        }
        var u, c, f = "3.7.3", p = e.html5 || {}, h = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i, m = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i, g = "_html5shiv", v = 0, b = {};
        !function() {
            try {
                var e = t.createElement("a");
                e.innerHTML = "<xyz></xyz>",
                u = "hidden"in e,
                c = 1 == e.childNodes.length || function() {
                    t.createElement("a");
                    var e = t.createDocumentFragment();
                    return "undefined" == typeof e.cloneNode || "undefined" == typeof e.createDocumentFragment || "undefined" == typeof e.createElement
                }()
            } catch (n) {
                u = !0,
                c = !0
            }
        }();
        var y = {
            elements: p.elements || "abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output picture progress section summary template time video",
            version: f,
            shivCSS: p.shivCSS !== !1,
            supportsUnknownElements: c,
            shivMethods: p.shivMethods !== !1,
            type: "default",
            shivDocument: d,
            createElement: s,
            createDocumentFragment: a,
            addElements: r
        };
        e.html5 = y,
        d(t),
        "object" == typeof module && module.exports && (module.exports = y)
    }("undefined" != typeof e ? e : this, t),
    Modernizr.addTest("multiplebgs", function() {
        var e = s("a").style;
        return e.cssText = "background:url(https://),url(https://),red url(https://)",
        /(url\s*\(.*?){3}/.test(e.background)
    }),
    Modernizr.addTest("preserve3d", function() {
        var t, n, i = e.CSS, r = !1;
        return i && i.supports && i.supports("(transform-style: preserve-3d)") ? !0 : (t = s("a"),
        n = s("a"),
        t.style.cssText = "display: block; transform-style: preserve-3d; transform-origin: right; transform: rotateY(40deg);",
        n.style.cssText = "display: block; width: 9px; height: 1px; background: #000; transform-origin: right; transform: rotateY(40deg);",
        t.appendChild(n),
        E.appendChild(t),
        r = n.getBoundingClientRect(),
        E.removeChild(t),
        r = r.width && r.width < 4)
    }),
    Modernizr.addTest("placeholder", "placeholder"in s("input") && "placeholder"in s("textarea")),
    Modernizr.addTest("csspointerevents", function() {
        var e = s("a").style;
        return e.cssText = "pointer-events:auto",
        "auto" === e.pointerEvents
    }),
    Modernizr.addTest("cssremunit", function() {
        var e = s("a").style;
        try {
            e.fontSize = "3rem"
        } catch (t) {}
        return /rem/.test(e.fontSize)
    }),
    Modernizr.addTest("rgba", function() {
        var e = s("a").style;
        return e.cssText = "background-color:rgba(150,255,150,.5)",
        ("" + e.backgroundColor).indexOf("rgba") > -1
    });
    var j = C._config.usePrefixes ? " -webkit- -moz- -o- -ms- ".split(" ") : ["", ""];
    C._prefixes = j,
    Modernizr.addTest("csscalc", function() {
        var e = "width:"
          , t = "calc(10px);"
          , n = s("a");
        return n.style.cssText = e + j.join(t + e),
        !!n.style.length
    }),
    Modernizr.addTest("cubicbezierrange", function() {
        var e = s("a");
        return e.style.cssText = j.join("transition-timing-function:cubic-bezier(1,0,0,1.1); "),
        !!e.style.length
    }),
    Modernizr.addTest("cssgradients", function() {
        for (var e, t = "background-image:", n = "gradient(linear,left top,right bottom,from(#9f9),to(white));", i = "", r = 0, o = j.length - 1; o > r; r++)
            e = 0 === r ? "to " : "",
            i += t + j[r] + "linear-gradient(" + e + "left top, #9f9, white);";
        Modernizr._config.usePrefixes && (i += t + "-webkit-" + n);
        var a = s("a")
          , l = a.style;
        return l.cssText = i,
        ("" + l.backgroundImage).indexOf("gradient") > -1
    }),
    Modernizr.addTest("opacity", function() {
        var e = s("a").style;
        return e.cssText = j.join("opacity:.55;"),
        /^0.55$/.test(e.opacity)
    }),
    Modernizr.addTest("csspositionsticky", function() {
        var e = "position:"
          , t = "sticky"
          , n = s("a")
          , i = n.style;
        return i.cssText = e + j.join(t + ";" + e).slice(0, -e.length),
        -1 !== i.position.indexOf(t)
    });
    var B = {
        elem: s("modernizr")
    };
    Modernizr._q.push(function() {
        delete B.elem
    }),
    Modernizr.addTest("csschunit", function() {
        var e, t = B.elem.style;
        try {
            t.fontSize = "3ch",
            e = -1 !== t.fontSize.indexOf("ch")
        } catch (n) {
            e = !1
        }
        return e
    }),
    Modernizr.addTest("cssexunit", function() {
        var e, t = B.elem.style;
        try {
            t.fontSize = "3ex",
            e = -1 !== t.fontSize.indexOf("ex")
        } catch (n) {
            e = !1
        }
        return e
    }),
    Modernizr.addTest("hsla", function() {
        var e = s("a").style;
        return e.cssText = "background-color:hsla(120,40%,100%,.5)",
        a(e.backgroundColor, "rgba") || a(e.backgroundColor, "hsla")
    });
    var N;
    !function() {
        var e = {}.hasOwnProperty;
        N = i(e, "undefined") || i(e.call, "undefined") ? function(e, t) {
            return t in e && i(e.constructor.prototype[t], "undefined")
        }
        : function(t, n) {
            return e.call(t, n)
        }
    }(),
    C._l = {},
    C.on = function(e, t) {
        this._l[e] || (this._l[e] = []),
        this._l[e].push(t),
        Modernizr.hasOwnProperty(e) && setTimeout(function() {
            Modernizr._trigger(e, Modernizr[e])
        }, 0)
    }
    ,
    C._trigger = function(e, t) {
        if (this._l[e]) {
            var n = this._l[e];
            setTimeout(function() {
                var e, i;
                for (e = 0; e < n.length; e++)
                    (i = n[e])(t)
            }, 0),
            delete this._l[e]
        }
    }
    ,
    Modernizr._q.push(function() {
        C.addTest = c
    });
    var M = C.testStyles = p;
    Modernizr.addTest("checked", function() {
        return M("#modernizr {position:absolute} #modernizr input {margin-left:10px} #modernizr :checked {margin-left:20px;display:block}", function(e) {
            var t = s("input");
            return t.setAttribute("type", "checkbox"),
            t.setAttribute("checked", "checked"),
            e.appendChild(t),
            20 === t.offsetLeft
        })
    }),
    M("#modernizr{display: table; direction: ltr}#modernizr div{display: table-cell; padding: 10px}", function(e) {
        var t, n = e.childNodes;
        t = n[0].offsetLeft < n[1].offsetLeft,
        Modernizr.addTest("displaytable", t, {
            aliases: ["display-table"]
        })
    }, 2);
    var P = function() {
        var e = navigator.userAgent
          , t = e.match(/w(eb)?osbrowser/gi)
          , n = e.match(/windows phone/gi) && e.match(/iemobile\/([0-9])+/gi) && parseFloat(RegExp.$1) >= 9;
        return t || n
    }();
    P ? Modernizr.addTest("fontface", !1) : M('@font-face {font-family:"font";src:url("https://")}', function(e, n) {
        var i = t.getElementById("smodernizr")
          , r = i.sheet || i.styleSheet
          , o = r ? r.cssRules && r.cssRules[0] ? r.cssRules[0].cssText : r.cssText || "" : ""
          , s = /src/i.test(o) && 0 === o.indexOf(n.split(" ")[0]);
        Modernizr.addTest("fontface", s)
    }),
    M('#modernizr{font:0/0 a}#modernizr:after{content:":)";visibility:hidden;font:7px/1 a}', function(e) {
        Modernizr.addTest("generatedcontent", e.offsetHeight >= 6)
    }),
    Modernizr.addTest("hairline", function() {
        return M("#modernizr {border:.5px solid transparent}", function(e) {
            return 1 === e.offsetHeight
        })
    }),
    Modernizr.addTest("cssinvalid", function() {
        return M("#modernizr input{height:0;border:0;padding:0;margin:0;width:10px} #modernizr input:invalid{width:50px}", function(e) {
            var t = s("input");
            return t.required = !0,
            e.appendChild(t),
            t.clientWidth > 10
        })
    }),
    M("#modernizr div {width:100px} #modernizr :last-child{width:200px;display:block}", function(e) {
        Modernizr.addTest("lastchild", e.lastChild.offsetWidth > e.firstChild.offsetWidth)
    }, 2),
    Modernizr.addTest("siblinggeneral", function() {
        return M("#modernizr div {width:100px} #modernizr div ~ div {width:200px;display:block}", function(e) {
            return 200 == e.lastChild.offsetWidth
        }, 2)
    }),
    M("#modernizr{position: absolute; top: -10em; visibility:hidden; font: normal 10px arial;}#subpixel{float: left; font-size: 33.3333%;}", function(t) {
        var n = t.firstChild;
        n.innerHTML = "This is a text written in Arial",
        Modernizr.addTest("subpixelfont", e.getComputedStyle ? "44px" !== e.getComputedStyle(n, null).getPropertyValue("width") : !1)
    }, 1, ["subpixel"]),
    Modernizr.addTest("cssvalid", function() {
        return M("#modernizr input{height:0;border:0;padding:0;margin:0;width:10px} #modernizr input:valid{width:50px}", function(e) {
            var t = s("input");
            return e.appendChild(t),
            t.clientWidth > 10
        })
    }),
    M("#modernizr { height: 50vh; }", function(t) {
        var n = parseInt(e.innerHeight / 2, 10)
          , i = parseInt(l(t, null, "height"), 10);
        Modernizr.addTest("cssvhunit", i == n)
    }),
    M("#modernizr1{width: 50vmax}#modernizr2{width:50px;height:50px;overflow:scroll}#modernizr3{position:fixed;top:0;left:0;bottom:0;right:0}", function(e) {
        var t = e.childNodes[2]
          , n = e.childNodes[1]
          , i = e.childNodes[0]
          , r = parseInt((n.offsetWidth - n.clientWidth) / 2, 10)
          , o = i.clientWidth / 100
          , s = i.clientHeight / 100
          , a = parseInt(50 * Math.max(o, s), 10)
          , u = parseInt(l(t, null, "width"), 10);
        Modernizr.addTest("cssvmaxunit", d(a, u) || d(a, u - r))
    }, 3),
    M("#modernizr1{width: 50vm;width:50vmin}#modernizr2{width:50px;height:50px;overflow:scroll}#modernizr3{position:fixed;top:0;left:0;bottom:0;right:0}", function(e) {
        var t = e.childNodes[2]
          , n = e.childNodes[1]
          , i = e.childNodes[0]
          , r = parseInt((n.offsetWidth - n.clientWidth) / 2, 10)
          , o = i.clientWidth / 100
          , s = i.clientHeight / 100
          , a = parseInt(50 * Math.min(o, s), 10)
          , u = parseInt(l(t, null, "width"), 10);
        Modernizr.addTest("cssvminunit", d(a, u) || d(a, u - r))
    }, 3),
    M("#modernizr { width: 50vw; }", function(t) {
        var n = parseInt(e.innerWidth / 2, 10)
          , i = parseInt(l(t, null, "width"), 10);
        Modernizr.addTest("cssvwunit", i == n)
    }),
    M("#modernizr div {width:1px} #modernizr div:nth-child(2n) {width:2px;}", function(e) {
        for (var t = e.getElementsByTagName("div"), n = !0, i = 0; 5 > i; i++)
            n = n && t[i].offsetWidth === i % 2 + 1;
        Modernizr.addTest("nthchild", n)
    }, 5),
    M("#modernizr{overflow: scroll; width: 40px; height: 40px; }#" + j.join("scrollbar{width:10px} #modernizr::").split("#").slice(1).join("#") + "scrollbar{width:10px}", function(e) {
        Modernizr.addTest("cssscrollbar", "scrollWidth"in e && 30 == e.scrollWidth)
    });
    var R = function() {
        var t = e.matchMedia || e.msMatchMedia;
        return t ? function(e) {
            var n = t(e);
            return n && n.matches || !1
        }
        : function(t) {
            var n = !1;
            return p("@media " + t + " { #modernizr { position: absolute; } }", function(t) {
                n = "absolute" == (e.getComputedStyle ? e.getComputedStyle(t, null) : t.currentStyle).position
            }),
            n
        }
    }();
    C.mq = R,
    Modernizr.addTest("mediaqueries", R("only all"));
    var L = {
        style: B.elem.style
    };
    Modernizr._q.unshift(function() {
        delete L.style
    });
    var q = "Moz O ms Webkit"
      , W = C._config.usePrefixes ? q.split(" ") : [];
    C._cssomPrefixes = W;
    var H = function(t) {
        var i, r = j.length, o = e.CSSRule;
        if ("undefined" == typeof o)
            return n;
        if (!t)
            return !1;
        if (t = t.replace(/^@/, ""),
        i = t.replace(/-/g, "_").toUpperCase() + "_RULE",
        i in o)
            return "@" + t;
        for (var s = 0; r > s; s++) {
            var a = j[s]
              , l = a.toUpperCase() + "_" + i;
            if (l in o)
                return "@-" + a.toLowerCase() + "-" + t
        }
        return !1
    };
    C.atRule = H;
    var A = C._config.usePrefixes ? q.toLowerCase().split(" ") : [];
    C._domPrefixes = A;
    var I = C.testProp = function(e, t, i) {
        return b([e], n, t, i)
    }
    ;
    Modernizr.addTest("textshadow", I("textShadow", "1px 1px")),
    C.testAllProps = y;
    var F = C.prefixed = function(e, t, n) {
        return 0 === e.indexOf("@") ? H(e) : (-1 != e.indexOf("-") && (e = u(e)),
        t ? y(e, t, n) : y(e, "pfx"))
    }
    ;
    Modernizr.addTest("backgroundblendmode", F("backgroundBlendMode", "text")),
    Modernizr.addTest("wrapflow", function() {
        var e = F("wrapFlow");
        if (!e || _)
            return !1;
        var t = e.replace(/([A-Z])/g, function(e, t) {
            return "-" + t.toLowerCase()
        }).replace(/^ms-/, "-ms-")
          , i = s("div")
          , r = s("div")
          , o = s("span");
        r.style.cssText = "position: absolute; left: 50px; width: 100px; height: 20px;" + t + ":end;",
        o.innerText = "X",
        i.appendChild(r),
        i.appendChild(o),
        E.appendChild(i);
        var a = o.offsetLeft;
        return E.removeChild(i),
        r = o = i = n,
        150 == a
    }),
    Modernizr.addTest("objectfit", !!F("objectFit"), {
        aliases: ["object-fit"]
    }),
    Modernizr.addTest("regions", function() {
        if (_)
            return !1;
        var e = F("flowFrom")
          , t = F("flowInto")
          , i = !1;
        if (!e || !t)
            return i;
        var r = s("iframe")
          , o = s("div")
          , a = s("div")
          , l = s("div")
          , d = "modernizr_flow_for_regions_check";
        a.innerText = "M",
        o.style.cssText = "top: 150px; left: 150px; padding: 0px;",
        l.style.cssText = "width: 50px; height: 50px; padding: 42px;",
        l.style[e] = d,
        o.appendChild(a),
        o.appendChild(l),
        E.appendChild(o);
        var u, c, f = a.getBoundingClientRect();
        return a.style[t] = d,
        u = a.getBoundingClientRect(),
        c = parseInt(u.left - f.left, 10),
        E.removeChild(o),
        42 == c ? i = !0 : (E.appendChild(r),
        f = r.getBoundingClientRect(),
        r.style[t] = d,
        u = r.getBoundingClientRect(),
        f.height > 0 && f.height !== u.height && 0 === u.height && (i = !0)),
        a = l = o = r = n,
        i
    }),
    C.testAllProps = x,
    Modernizr.addTest("backgroundcliptext", function() {
        return x("backgroundClip", "text")
    }),
    function() {
        Modernizr.addTest("csscolumns", function() {
            var e = !1
              , t = x("columnCount");
            try {
                e = !!t,
                e && (e = new Boolean(e))
            } catch (n) {}
            return e
        });
        for (var e, t, n = ["Width", "Span", "Fill", "Gap", "Rule", "RuleColor", "RuleStyle", "RuleWidth", "BreakBefore", "BreakAfter", "BreakInside"], i = 0; i < n.length; i++)
            e = n[i].toLowerCase(),
            t = x("column" + n[i]),
            ("breakbefore" === e || "breakafter" === e || "breakinside" == e) && (t = t || x(n[i])),
            Modernizr.addTest("csscolumns." + e, t)
    }(),
    Modernizr.addTest("cssgridlegacy", x("grid-columns", "10px", !0)),
    Modernizr.addTest("cssgrid", x("grid-template-rows", "none", !0)),
    Modernizr.addTest("displayrunin", x("display", "run-in"), {
        aliases: ["display-runin"]
    }),
    Modernizr.addTest("ellipsis", x("textOverflow", "ellipsis")),
    Modernizr.addTest("cssfilters", function() {
        if (Modernizr.supports)
            return x("filter", "blur(2px)");
        var e = s("a");
        return e.style.cssText = j.join("filter:blur(2px); "),
        !!e.style.length && (t.documentMode === n || t.documentMode > 9)
    }),
    Modernizr.addTest("flexbox", x("flexBasis", "1px", !0)),
    Modernizr.addTest("flexboxlegacy", x("boxDirection", "reverse", !0)),
    Modernizr.addTest("flexboxtweener", x("flexAlign", "end", !0)),
    Modernizr.addTest("flexwrap", x("flexWrap", "wrap", !0)),
    Modernizr.addAsyncTest(function() {
        function n() {
            function r() {
                try {
                    var e = s("div")
                      , n = s("span")
                      , i = e.style
                      , r = 0
                      , o = 0
                      , a = !1
                      , l = t.body.firstElementChild || t.body.firstChild;
                    return e.appendChild(n),
                    n.innerHTML = "Bacon ipsum dolor sit amet jerky velit in culpa hamburger et. Laborum dolor proident, enim dolore duis commodo et strip steak. Salami anim et, veniam consectetur dolore qui tenderloin jowl velit sirloin. Et ad culpa, fatback cillum jowl ball tip ham hock nulla short ribs pariatur aute. Pig pancetta ham bresaola, ut boudin nostrud commodo flank esse cow tongue culpa. Pork belly bresaola enim pig, ea consectetur nisi. Fugiat officia turkey, ea cow jowl pariatur ullamco proident do laborum velit sausage. Magna biltong sint tri-tip commodo sed bacon, esse proident aliquip. Ullamco ham sint fugiat, velit in enim sed mollit nulla cow ut adipisicing nostrud consectetur. Proident dolore beef ribs, laborum nostrud meatball ea laboris rump cupidatat labore culpa. Shankle minim beef, velit sint cupidatat fugiat tenderloin pig et ball tip. Ut cow fatback salami, bacon ball tip et in shank strip steak bresaola. In ut pork belly sed mollit tri-tip magna culpa veniam, short ribs qui in andouille ham consequat. Dolore bacon t-bone, velit short ribs enim strip steak nulla. Voluptate labore ut, biltong swine irure jerky. Cupidatat excepteur aliquip salami dolore. Ball tip strip steak in pork dolor. Ad in esse biltong. Dolore tenderloin exercitation ad pork loin t-bone, dolore in chicken ball tip qui pig. Ut culpa tongue, sint ribeye dolore ex shank voluptate hamburger. Jowl et tempor, boudin pork chop labore ham hock drumstick consectetur tri-tip elit swine meatball chicken ground round. Proident shankle mollit dolore. Shoulder ut duis t-bone quis reprehenderit. Meatloaf dolore minim strip steak, laboris ea aute bacon beef ribs elit shank in veniam drumstick qui. Ex laboris meatball cow tongue pork belly. Ea ball tip reprehenderit pig, sed fatback boudin dolore flank aliquip laboris eu quis. Beef ribs duis beef, cow corned beef adipisicing commodo nisi deserunt exercitation. Cillum dolor t-bone spare ribs, ham hock est sirloin. Brisket irure meatloaf in, boudin pork belly sirloin ball tip. Sirloin sint irure nisi nostrud aliqua. Nostrud nulla aute, enim officia culpa ham hock. Aliqua reprehenderit dolore sunt nostrud sausage, ea boudin pork loin ut t-bone ham tempor. Tri-tip et pancetta drumstick laborum. Ham hock magna do nostrud in proident. Ex ground round fatback, venison non ribeye in.",
                    t.body.insertBefore(e, l),
                    i.cssText = "position:absolute;top:0;left:0;width:5em;text-align:justify;text-justification:newspaper;",
                    r = n.offsetHeight,
                    o = n.offsetWidth,
                    i.cssText = "position:absolute;top:0;left:0;width:5em;text-align:justify;text-justification:newspaper;" + j.join("hyphens:auto; "),
                    a = n.offsetHeight != r || n.offsetWidth != o,
                    t.body.removeChild(e),
                    e.removeChild(n),
                    a
                } catch (d) {
                    return !1
                }
            }
            function o(e, n) {
                try {
                    var i = s("div")
                      , r = s("span")
                      , o = i.style
                      , a = 0
                      , l = !1
                      , d = !1
                      , u = !1
                      , c = t.body.firstElementChild || t.body.firstChild;
                    return o.cssText = "position:absolute;top:0;left:0;overflow:visible;width:1.25em;",
                    i.appendChild(r),
                    t.body.insertBefore(i, c),
                    r.innerHTML = "mm",
                    a = r.offsetHeight,
                    r.innerHTML = "m" + e + "m",
                    d = r.offsetHeight > a,
                    n ? (r.innerHTML = "m<br />m",
                    a = r.offsetWidth,
                    r.innerHTML = "m" + e + "m",
                    u = r.offsetWidth > a) : u = !0,
                    d === !0 && u === !0 && (l = !0),
                    t.body.removeChild(i),
                    i.removeChild(r),
                    l
                } catch (f) {
                    return !1
                }
            }
            function a(n) {
                try {
                    var i, r = s("input"), o = s("div"), a = "lebowski", l = !1, d = t.body.firstElementChild || t.body.firstChild;
                    o.innerHTML = a + n + a,
                    t.body.insertBefore(o, d),
                    t.body.insertBefore(r, o),
                    r.setSelectionRange ? (r.focus(),
                    r.setSelectionRange(0, 0)) : r.createTextRange && (i = r.createTextRange(),
                    i.collapse(!0),
                    i.moveEnd("character", 0),
                    i.moveStart("character", 0),
                    i.select());
                    try {
                        e.find ? l = e.find(a + a) : (i = e.self.document.body.createTextRange(),
                        l = i.findText(a + a))
                    } catch (u) {
                        l = !1
                    }
                    return t.body.removeChild(o),
                    t.body.removeChild(r),
                    l
                } catch (u) {
                    return !1
                }
            }
            return t.body || t.getElementsByTagName("body")[0] ? (c("csshyphens", function() {
                if (!x("hyphens", "auto", !0))
                    return !1;
                try {
                    return r()
                } catch (e) {
                    return !1
                }
            }),
            c("softhyphens", function() {
                try {
                    return o("&#173;", !0) && o("&#8203;", !1)
                } catch (e) {
                    return !1
                }
            }),
            void c("softhyphensfind", function() {
                try {
                    return a("&#173;") && a("&#8203;")
                } catch (e) {
                    return !1
                }
            })) : void setTimeout(n, i)
        }
        var i = 300;
        setTimeout(n, i)
    }),
    Modernizr.addTest("cssmask", x("maskRepeat", "repeat-x", !0)),
    Modernizr.addTest("shapes", x("shapeOutside", "content-box", !0)),
    Modernizr.addTest("textalignlast", x("textAlignLast")),
    Modernizr.addTest("csstransforms", function() {
        return -1 === navigator.userAgent.indexOf("Android 2.") && x("transform", "scale(1)", !0)
    }),
    Modernizr.addTest("csstransforms3d", function() {
        var e = !!x("perspective", "1px", !0)
          , t = Modernizr._config.usePrefixes;
        if (e && (!t || "webkitPerspective"in E.style)) {
            var n, i = "#modernizr{width:0;height:0}";
            Modernizr.supports ? n = "@supports (perspective: 1px)" : (n = "@media (transform-3d)",
            t && (n += ",(-webkit-transform-3d)")),
            n += "{#modernizr{width:7px;height:18px;margin:0;padding:0;border:0}}",
            M(i + n, function(t) {
                e = 7 === t.offsetWidth && 18 === t.offsetHeight
            })
        }
        return e
    }),
    Modernizr.addTest("csstransformslevel2", function() {
        return x("translate", "45px", !0)
    }),
    Modernizr.addTest("csstransitions", x("transition", "all", !0)),
    Modernizr.addTest("csspseudotransitions", function() {
        var t = !1;
        if (!Modernizr.csstransitions || !e.getComputedStyle)
            return t;
        var n = '#modernizr:before { content:" "; font-size:5px;' + Modernizr._prefixes.join("transition:0s 100s;") + "}#modernizr.trigger:before { font-size:10px; }";
        return Modernizr.testStyles(n, function(n) {
            e.getComputedStyle(n, ":before").getPropertyValue("font-size"),
            n.className += "trigger",
            t = "5px" === e.getComputedStyle(n, ":before").getPropertyValue("font-size")
        }),
        t
    }),
    Modernizr.addTest("userselect", x("userSelect", "none", !0)),
    Modernizr.addTest("overflowscrolling", x("overflowScrolling", "touch", !0)),
    Modernizr.addTest("cssreflections", x("boxReflect", "above", !0)),
    Modernizr.addTest("cssresize", x("resize", "both", !0)),
    Modernizr.addTest("scrollsnappoints", x("scrollSnapType")),
    Modernizr.addTest("cssanimations", x("animationName", "a", !0)),
    Modernizr.addTest("csspseudoanimations", function() {
        var t = !1;
        if (!Modernizr.cssanimations || !e.getComputedStyle)
            return t;
        var n = ["@", Modernizr._prefixes.join("keyframes csspseudoanimations { from { font-size: 10px; } }@").replace(/\@$/, ""), '#modernizr:before { content:" "; font-size:5px;', Modernizr._prefixes.join("animation:csspseudoanimations 1ms infinite;"), "}"].join("");
        return Modernizr.testStyles(n, function(n) {
            t = "10px" === e.getComputedStyle(n, ":before").getPropertyValue("font-size")
        }),
        t
    }),
    r(),
    o(T),
    delete C.addTest,
    delete C.addAsyncTest;
    for (var O = 0; O < Modernizr._q.length; O++)
        Modernizr._q[O]();
    e.Modernizr = Modernizr
}(window, document);
