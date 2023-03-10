/*! For license information please see gsap-core.bundle.js.LICENSE.txt */
"use strict";
(self.webpackChunkproject = self.webpackChunkproject || []).push([
  ["vendors/gsap-core"], {
    317: (t, e, r) => {
      function i(t) {
        if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t
      }

      function n(t, e) {
        t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e
      }
      r.d(e, {
        l1: () => Ve,
        Fo: () => mr,
        p8: () => Tr,
        Au: () => wr,
        Wy: () => ae,
        Ok: () => kt,
        SI: () => tt,
        d4: () => et,
        r9: () => Q,
        m2: () => W,
        Ks: () => _r,
        bQ: () => it,
        fS: () => xt,
        JV: () => dr,
        kr: () => Se,
        UI: () => me,
        if: () => Ke,
        $i: () => mt,
        xr: () => Oe,
        Fc: () => E,
        Pr: () => Dt,
        lC: () => ht,
        S5: () => or,
        DY: () => bt,
        GN: () => Me
      });
      var s, a, o, u, h, _, f, l, c, p, d, m, g, v, y, T, w, b, k, x, D, A, C, M, R, S, O, z, E = {
          autoSleep: 120,
          force3D: "auto",
          nullTargetWarn: 1,
          units: {
            lineHeight: ""
          }
        },
        P = {
          duration: .5,
          overwrite: !1,
          delay: 0
        },
        F = 1e8,
        I = 1e-8,
        L = 2 * Math.PI,
        U = L / 4,
        B = 0,
        N = Math.sqrt,
        q = Math.cos,
        j = Math.sin,
        Q = function (t) {
          return "string" == typeof t
        },
        V = function (t) {
          return "function" == typeof t
        },
        G = function (t) {
          return "number" == typeof t
        },
        W = function (t) {
          return void 0 === t
        },
        Y = function (t) {
          return "object" == typeof t
        },
        H = function (t) {
          return !1 !== t
        },
        J = function () {
          return "undefined" != typeof window
        },
        K = function (t) {
          return V(t) || Q(t)
        },
        $ = "function" == typeof ArrayBuffer && ArrayBuffer.isView || function () {},
        X = Array.isArray,
        Z = /(?:-?\.?\d|\.)+/gi,
        tt = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
        et = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
        rt = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
        it = /[+-]=-?[.\d]+/,
        nt = /[^,'"\[\]\s]+/gi,
        st = /[\d.+\-=]+(?:e[-+]\d*)*/i,
        at = {},
        ot = {},
        ut = function (t) {
          return (ot = Et(t, at)) && Tr
        },
        ht = function (t, e) {
          return console.warn("Invalid property", t, "set to", e, "Missing plugin? gsap.registerPlugin()")
        },
        _t = function (t, e) {
          return !e && console.warn(t)
        },
        ft = function (t, e) {
          return t && (at[t] = e) && ot && (ot[t] = e) || at
        },
        lt = function () {
          return 0
        },
        ct = {},
        pt = [],
        dt = {},
        mt = {},
        gt = {},
        vt = 30,
        yt = [],
        Tt = "",
        wt = function (t) {
          var e, r, i = t[0];
          if (Y(i) || V(i) || (t = [t]), !(e = (i._gsap || {}).harness)) {
            for (r = yt.length; r-- && !yt[r].targetTest(i););
            e = yt[r]
          }
          for (r = t.length; r--;) t[r] && (t[r]._gsap || (t[r]._gsap = new Ve(t[r], e))) || t.splice(r, 1);
          return t
        },
        bt = function (t) {
          return t._gsap || wt(he(t))[0]._gsap
        },
        kt = function (t, e, r) {
          return (r = t[e]) && V(r) ? t[e]() : W(r) && t.getAttribute && t.getAttribute(e) || r
        },
        xt = function (t, e) {
          return (t = t.split(",")).forEach(e) || t
        },
        Dt = function (t) {
          return Math.round(1e5 * t) / 1e5 || 0
        },
        At = function (t) {
          return Math.round(1e7 * t) / 1e7 || 0
        },
        Ct = function (t, e) {
          for (var r = e.length, i = 0; t.indexOf(e[i]) < 0 && ++i < r;);
          return i < r
        },
        Mt = function () {
          var t, e, r = pt.length,
            i = pt.slice(0);
          for (dt = {}, pt.length = 0, t = 0; t < r; t++)(e = i[t]) && e._lazy && (e.render(e._lazy[0], e._lazy[1], !0)._lazy = 0)
        },
        Rt = function (t, e, r, i) {
          pt.length && Mt(), t.render(e, r, i), pt.length && Mt()
        },
        St = function (t) {
          var e = parseFloat(t);
          return (e || 0 === e) && (t + "").match(nt).length < 2 ? e : Q(t) ? t.trim() : t
        },
        Ot = function (t) {
          return t
        },
        zt = function (t, e) {
          for (var r in e) r in t || (t[r] = e[r]);
          return t
        },
        Et = function (t, e) {
          for (var r in e) t[r] = e[r];
          return t
        },
        Pt = function t(e, r) {
          for (var i in r) "__proto__" !== i && "constructor" !== i && "prototype" !== i && (e[i] = Y(r[i]) ? t(e[i] || (e[i] = {}), r[i]) : r[i]);
          return e
        },
        Ft = function (t, e) {
          var r, i = {};
          for (r in t) r in e || (i[r] = t[r]);
          return i
        },
        It = function (t) {
          var e, r = t.parent || a,
            i = t.keyframes ? (e = X(t.keyframes), function (t, r) {
              for (var i in r) i in t || "duration" === i && e || "ease" === i || (t[i] = r[i])
            }) : zt;
          if (H(t.inherit))
            for (; r;) i(t, r.vars.defaults), r = r.parent || r._dp;
          return t
        },
        Lt = function (t, e, r, i) {
          void 0 === r && (r = "_first"), void 0 === i && (i = "_last");
          var n = e._prev,
            s = e._next;
          n ? n._next = s : t[r] === e && (t[r] = s), s ? s._prev = n : t[i] === e && (t[i] = n), e._next = e._prev = e.parent = null
        },
        Ut = function (t, e) {
          t.parent && (!e || t.parent.autoRemoveChildren) && t.parent.remove(t), t._act = 0
        },
        Bt = function (t, e) {
          if (t && (!e || e._end > t._dur || e._start < 0))
            for (var r = t; r;) r._dirty = 1, r = r.parent;
          return t
        },
        Nt = function (t) {
          for (var e = t.parent; e && e.parent;) e._dirty = 1, e.totalDuration(), e = e.parent;
          return t
        },
        qt = function t(e) {
          return !e || e._ts && t(e.parent)
        },
        jt = function (t) {
          return t._repeat ? Qt(t._tTime, t = t.duration() + t._rDelay) * t : 0
        },
        Qt = function (t, e) {
          var r = Math.floor(t /= e);
          return t && r === t ? r - 1 : r
        },
        Vt = function (t, e) {
          return (t - e._start) * e._ts + (e._ts >= 0 ? 0 : e._dirty ? e.totalDuration() : e._tDur)
        },
        Gt = function (t) {
          return t._end = At(t._start + (t._tDur / Math.abs(t._ts || t._rts || I) || 0))
        },
        Wt = function (t, e) {
          var r = t._dp;
          return r && r.smoothChildTiming && t._ts && (t._start = At(r._time - (t._ts > 0 ? e / t._ts : ((t._dirty ? t.totalDuration() : t._tDur) - e) / -t._ts)), Gt(t), r._dirty || Bt(r, t)), t
        },
        Yt = function (t, e) {
          var r;
          if ((e._time || e._initted && !e._dur) && (r = Vt(t.rawTime(), e), (!e._dur || se(0, e.totalDuration(), r) - e._tTime > I) && e.render(r, !0)), Bt(t, e)._dp && t._initted && t._time >= t._dur && t._ts) {
            if (t._dur < t.duration())
              for (r = t; r._dp;) r.rawTime() >= 0 && r.totalTime(r._tTime), r = r._dp;
            t._zTime = -1e-8
          }
        },
        Ht = function (t, e, r, i) {
          return e.parent && Ut(e), e._start = At((G(r) ? r : r || t !== a ? re(t, r, e) : t._time) + e._delay), e._end = At(e._start + (e.totalDuration() / Math.abs(e.timeScale()) || 0)),
            function (t, e, r, i, n) {
              void 0 === r && (r = "_first"), void 0 === i && (i = "_last");
              var s, a = t[i];
              if (n)
                for (s = e[n]; a && a[n] > s;) a = a._prev;
              a ? (e._next = a._next, a._next = e) : (e._next = t[r], t[r] = e), e._next ? e._next._prev = e : t[i] = e, e._prev = a, e.parent = e._dp = t
            }(t, e, "_first", "_last", t._sort ? "_start" : 0), Xt(e) || (t._recent = e), i || Yt(t, e), t
        },
        Jt = function (t, e) {
          return (at.ScrollTrigger || ht("scrollTrigger", e)) && at.ScrollTrigger.create(e, t)
        },
        Kt = function (t, e, r, i) {
          return $e(t, e), t._initted ? !r && t._pt && (t._dur && !1 !== t.vars.lazy || !t._dur && t.vars.lazy) && f !== Oe.frame ? (pt.push(t), t._lazy = [e, i], 1) : void 0 : 1
        },
        $t = function t(e) {
          var r = e.parent;
          return r && r._ts && r._initted && !r._lock && (r.rawTime() < 0 || t(r))
        },
        Xt = function (t) {
          var e = t.data;
          return "isFromStart" === e || "isStart" === e
        },
        Zt = function (t, e, r, i) {
          var n = t._repeat,
            s = At(e) || 0,
            a = t._tTime / t._tDur;
          return a && !i && (t._time *= s / t._dur), t._dur = s, t._tDur = n ? n < 0 ? 1e10 : At(s * (n + 1) + t._rDelay * n) : s, a > 0 && !i ? Wt(t, t._tTime = t._tDur * a) : t.parent && Gt(t), r || Bt(t.parent, t), t
        },
        te = function (t) {
          return t instanceof We ? Bt(t) : Zt(t, t._dur)
        },
        ee = {
          _start: 0,
          endTime: lt,
          totalDuration: lt
        },
        re = function t(e, r, i) {
          var n, s, a, o = e.labels,
            u = e._recent || ee,
            h = e.duration() >= F ? u.endTime(!1) : e._dur;
          return Q(r) && (isNaN(r) || r in o) ? (s = r.charAt(0), a = "%" === r.substr(-1), n = r.indexOf("="), "<" === s || ">" === s ? (n >= 0 && (r = r.replace(/=/, "")), ("<" === s ? u._start : u.endTime(u._repeat >= 0)) + (parseFloat(r.substr(1)) || 0) * (a ? (n < 0 ? u : i).totalDuration() / 100 : 1)) : n < 0 ? (r in o || (o[r] = h), o[r]) : (s = parseFloat(r.charAt(n - 1) + r.substr(n + 1)), a && i && (s = s / 100 * (X(i) ? i[0] : i).totalDuration()), n > 1 ? t(e, r.substr(0, n - 1), i) + s : h + s)) : null == r ? h : +r
        },
        ie = function (t, e, r) {
          var i, n, s = G(e[1]),
            a = (s ? 2 : 1) + (t < 2 ? 0 : 1),
            o = e[a];
          if (s && (o.duration = e[1]), o.parent = r, t) {
            for (i = o, n = r; n && !("immediateRender" in i);) i = n.vars.defaults || {}, n = H(n.vars.inherit) && n.parent;
            o.immediateRender = H(i.immediateRender), t < 2 ? o.runBackwards = 1 : o.startAt = e[a - 1]
          }
          return new rr(e[0], o, e[a + 1])
        },
        ne = function (t, e) {
          return t || 0 === t ? e(t) : e
        },
        se = function (t, e, r) {
          return r < t ? t : r > e ? e : r
        },
        ae = function (t, e) {
          return Q(t) && (e = st.exec(t)) ? t.substr(e.index + e[0].length) : ""
        },
        oe = [].slice,
        ue = function (t, e) {
          return t && Y(t) && "length" in t && (!e && !t.length || t.length - 1 in t && Y(t[0])) && !t.nodeType && t !== o
        },
        he = function (t, e, r) {
          return !Q(t) || r || !u && ze() ? X(t) ? function (t, e, r) {
            return void 0 === r && (r = []), t.forEach((function (t) {
              var i;
              return Q(t) && !e || ue(t, 1) ? (i = r).push.apply(i, he(t)) : r.push(t)
            })) || r
          }(t, r) : ue(t) ? oe.call(t, 0) : t ? [t] : [] : oe.call((e || h).querySelectorAll(t), 0)
        },
        _e = function (t) {
          return t.sort((function () {
            return .5 - Math.random()
          }))
        },
        fe = function (t) {
          if (V(t)) return t;
          var e = Y(t) ? t : {
              each: t
            },
            r = Be(e.ease),
            i = e.from || 0,
            n = parseFloat(e.base) || 0,
            s = {},
            a = i > 0 && i < 1,
            o = isNaN(i) || a,
            u = e.axis,
            h = i,
            _ = i;
          return Q(i) ? h = _ = {
              center: .5,
              edges: .5,
              end: 1
            } [i] || 0 : !a && o && (h = i[0], _ = i[1]),
            function (t, a, f) {
              var l, c, p, d, m, g, v, y, T, w = (f || e).length,
                b = s[w];
              if (!b) {
                if (!(T = "auto" === e.grid ? 0 : (e.grid || [1, F])[1])) {
                  for (v = -F; v < (v = f[T++].getBoundingClientRect().left) && T < w;);
                  T--
                }
                for (b = s[w] = [], l = o ? Math.min(T, w) * h - .5 : i % T, c = T === F ? 0 : o ? w * _ / T - .5 : i / T | 0, v = 0, y = F, g = 0; g < w; g++) p = g % T - l, d = c - (g / T | 0), b[g] = m = u ? Math.abs("y" === u ? d : p) : N(p * p + d * d), m > v && (v = m), m < y && (y = m);
                "random" === i && _e(b), b.max = v - y, b.min = y, b.v = w = (parseFloat(e.amount) || parseFloat(e.each) * (T > w ? w - 1 : u ? "y" === u ? w / T : T : Math.max(T, w / T)) || 0) * ("edges" === i ? -1 : 1), b.b = w < 0 ? n - w : n, b.u = ae(e.amount || e.each) || 0, r = r && w < 0 ? Le(r) : r
              }
              return w = (b[t] - b.min) / b.max || 0, At(b.b + (r ? r(w) : w) * b.v) + b.u
            }
        },
        le = function (t) {
          var e = Math.pow(10, ((t + "").split(".")[1] || "").length);
          return function (r) {
            var i = Math.round(parseFloat(r) / t) * t * e;
            return (i - i % 1) / e + (G(r) ? 0 : ae(r))
          }
        },
        ce = function (t, e) {
          var r, i, n = X(t);
          return !n && Y(t) && (r = n = t.radius || F, t.values ? (t = he(t.values), (i = !G(t[0])) && (r *= r)) : t = le(t.increment)), ne(e, n ? V(t) ? function (e) {
            return i = t(e), Math.abs(i - e) <= r ? i : e
          } : function (e) {
            for (var n, s, a = parseFloat(i ? e.x : e), o = parseFloat(i ? e.y : 0), u = F, h = 0, _ = t.length; _--;)(n = i ? (n = t[_].x - a) * n + (s = t[_].y - o) * s : Math.abs(t[_] - a)) < u && (u = n, h = _);
            return h = !r || u <= r ? t[h] : e, i || h === e || G(e) ? h : h + ae(e)
          } : le(t))
        },
        pe = function (t, e, r, i) {
          return ne(X(t) ? !e : !0 === r ? !!(r = 0) : !i, (function () {
            return X(t) ? t[~~(Math.random() * t.length)] : (r = r || 1e-5) && (i = r < 1 ? Math.pow(10, (r + "").length - 2) : 1) && Math.floor(Math.round((t - r / 2 + Math.random() * (e - t + .99 * r)) / r) * r * i) / i
          }))
        },
        de = function (t, e, r) {
          return ne(r, (function (r) {
            return t[~~e(r)]
          }))
        },
        me = function (t) {
          for (var e, r, i, n, s = 0, a = ""; ~(e = t.indexOf("random(", s));) i = t.indexOf(")", e), n = "[" === t.charAt(e + 7), r = t.substr(e + 7, i - e - 7).match(n ? nt : Z), a += t.substr(s, e - s) + pe(n ? r : +r[0], n ? 0 : +r[1], +r[2] || 1e-5), s = i + 1;
          return a + t.substr(s, t.length - s)
        },
        ge = function (t, e, r, i, n) {
          var s = e - t,
            a = i - r;
          return ne(n, (function (e) {
            return r + ((e - t) / s * a || 0)
          }))
        },
        ve = function (t, e, r) {
          var i, n, s, a = t.labels,
            o = F;
          for (i in a)(n = a[i] - e) < 0 == !!r && n && o > (n = Math.abs(n)) && (s = i, o = n);
          return s
        },
        ye = function (t, e, r) {
          var i, n, s = t.vars,
            a = s[e];
          if (a) return i = s[e + "Params"], n = s.callbackScope || t, r && pt.length && Mt(), i ? a.apply(n, i) : a.call(n)
        },
        Te = function (t) {
          return Ut(t), t.scrollTrigger && t.scrollTrigger.kill(!1), t.progress() < 1 && ye(t, "onInterrupt"), t
        },
        we = function (t) {
          var e = (t = !t.name && t.default || t).name,
            r = V(t),
            i = e && !r && t.init ? function () {
              this._props = []
            } : t,
            n = {
              init: lt,
              render: fr,
              add: Je,
              kill: cr,
              modifier: lr,
              rawVars: 0
            },
            s = {
              targetTest: 0,
              get: 0,
              getSetter: or,
              aliases: {},
              register: 0
            };
          if (ze(), t !== i) {
            if (mt[e]) return;
            zt(i, zt(Ft(t, n), s)), Et(i.prototype, Et(n, Ft(t, s))), mt[i.prop = e] = i, t.targetTest && (yt.push(i), ct[e] = 1), e = ("css" === e ? "CSS" : e.charAt(0).toUpperCase() + e.substr(1)) + "Plugin"
          }
          ft(e, i), t.register && t.register(Tr, i, mr)
        },
        be = 255,
        ke = {
          aqua: [0, be, be],
          lime: [0, be, 0],
          silver: [192, 192, 192],
          black: [0, 0, 0],
          maroon: [128, 0, 0],
          teal: [0, 128, 128],
          blue: [0, 0, be],
          navy: [0, 0, 128],
          white: [be, be, be],
          olive: [128, 128, 0],
          yellow: [be, be, 0],
          orange: [be, 165, 0],
          gray: [128, 128, 128],
          purple: [128, 0, 128],
          green: [0, 128, 0],
          red: [be, 0, 0],
          pink: [be, 192, 203],
          cyan: [0, be, be],
          transparent: [be, be, be, 0]
        },
        xe = function (t, e, r) {
          return (6 * (t += t < 0 ? 1 : t > 1 ? -1 : 0) < 1 ? e + (r - e) * t * 6 : t < .5 ? r : 3 * t < 2 ? e + (r - e) * (2 / 3 - t) * 6 : e) * be + .5 | 0
        },
        De = function (t, e, r) {
          var i, n, s, a, o, u, h, _, f, l, c = t ? G(t) ? [t >> 16, t >> 8 & be, t & be] : 0 : ke.black;
          if (!c) {
            if ("," === t.substr(-1) && (t = t.substr(0, t.length - 1)), ke[t]) c = ke[t];
            else if ("#" === t.charAt(0)) {
              if (t.length < 6 && (i = t.charAt(1), n = t.charAt(2), s = t.charAt(3), t = "#" + i + i + n + n + s + s + (5 === t.length ? t.charAt(4) + t.charAt(4) : "")), 9 === t.length) return [(c = parseInt(t.substr(1, 6), 16)) >> 16, c >> 8 & be, c & be, parseInt(t.substr(7), 16) / 255];
              c = [(t = parseInt(t.substr(1), 16)) >> 16, t >> 8 & be, t & be]
            } else if ("hsl" === t.substr(0, 3))
              if (c = l = t.match(Z), e) {
                if (~t.indexOf("=")) return c = t.match(tt), r && c.length < 4 && (c[3] = 1), c
              } else a = +c[0] % 360 / 360, o = +c[1] / 100, i = 2 * (u = +c[2] / 100) - (n = u <= .5 ? u * (o + 1) : u + o - u * o), c.length > 3 && (c[3] *= 1), c[0] = xe(a + 1 / 3, i, n), c[1] = xe(a, i, n), c[2] = xe(a - 1 / 3, i, n);
            else c = t.match(Z) || ke.transparent;
            c = c.map(Number)
          }
          return e && !l && (i = c[0] / be, n = c[1] / be, s = c[2] / be, u = ((h = Math.max(i, n, s)) + (_ = Math.min(i, n, s))) / 2, h === _ ? a = o = 0 : (f = h - _, o = u > .5 ? f / (2 - h - _) : f / (h + _), a = h === i ? (n - s) / f + (n < s ? 6 : 0) : h === n ? (s - i) / f + 2 : (i - n) / f + 4, a *= 60), c[0] = ~~(a + .5), c[1] = ~~(100 * o + .5), c[2] = ~~(100 * u + .5)), r && c.length < 4 && (c[3] = 1), c
        },
        Ae = function (t) {
          var e = [],
            r = [],
            i = -1;
          return t.split(Me).forEach((function (t) {
            var n = t.match(et) || [];
            e.push.apply(e, n), r.push(i += n.length + 1)
          })), e.c = r, e
        },
        Ce = function (t, e, r) {
          var i, n, s, a, o = "",
            u = (t + o).match(Me),
            h = e ? "hsla(" : "rgba(",
            _ = 0;
          if (!u) return t;
          if (u = u.map((function (t) {
              return (t = De(t, e, 1)) && h + (e ? t[0] + "," + t[1] + "%," + t[2] + "%," + t[3] : t.join(",")) + ")"
            })), r && (s = Ae(t), (i = r.c).join(o) !== s.c.join(o)))
            for (a = (n = t.replace(Me, "1").split(et)).length - 1; _ < a; _++) o += n[_] + (~i.indexOf(_) ? u.shift() || h + "0,0,0,0)" : (s.length ? s : u.length ? u : r).shift());
          if (!n)
            for (a = (n = t.split(Me)).length - 1; _ < a; _++) o += n[_] + u[_];
          return o + n[a]
        },
        Me = function () {
          var t, e = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b";
          for (t in ke) e += "|" + t + "\\b";
          return new RegExp(e + ")", "gi")
        }(),
        Re = /hsl[a]?\(/,
        Se = function (t) {
          var e, r = t.join(" ");
          if (Me.lastIndex = 0, Me.test(r)) return e = Re.test(r), t[1] = Ce(t[1], e), t[0] = Ce(t[0], e, Ae(t[1])), !0
        },
        Oe = (T = Date.now, w = 500, b = 33, k = T(), x = k, A = D = 1e3 / 240, M = function t(e) {
          var r, i, n, s, a = T() - x,
            o = !0 === e;
          if (a > w && (k += a - b), ((r = (n = (x += a) - k) - A) > 0 || o) && (s = ++g.frame, v = n - 1e3 * g.time, g.time = n /= 1e3, A += r + (r >= D ? 4 : D - r), i = 1), o || (p = d(t)), i)
            for (y = 0; y < C.length; y++) C[y](n, v, s, e)
        }, g = {
          time: 0,
          frame: 0,
          tick: function () {
            M(!0)
          },
          deltaRatio: function (t) {
            return v / (1e3 / (t || 60))
          },
          wake: function () {
            _ && (!u && J() && (o = u = window, h = o.document || {}, at.gsap = Tr, (o.gsapVersions || (o.gsapVersions = [])).push(Tr.version), ut(ot || o.GreenSockGlobals || !o.gsap && o || {}), m = o.requestAnimationFrame), p && g.sleep(), d = m || function (t) {
              return setTimeout(t, A - 1e3 * g.time + 1 | 0)
            }, c = 1, M(2))
          },
          sleep: function () {
            (m ? o.cancelAnimationFrame : clearTimeout)(p), c = 0, d = lt
          },
          lagSmoothing: function (t, e) {
            w = t || 1e8, b = Math.min(e, w, 0)
          },
          fps: function (t) {
            D = 1e3 / (t || 240), A = 1e3 * g.time + D
          },
          add: function (t) {
            C.indexOf(t) < 0 && C.push(t), ze()
          },
          remove: function (t, e) {
            ~(e = C.indexOf(t)) && C.splice(e, 1) && y >= e && y--
          },
          _listeners: C = []
        }),
        ze = function () {
          return !c && Oe.wake()
        },
        Ee = {},
        Pe = /^[\d.\-M][\d.\-,\s]/,
        Fe = /["']/g,
        Ie = function (t) {
          for (var e, r, i, n = {}, s = t.substr(1, t.length - 3).split(":"), a = s[0], o = 1, u = s.length; o < u; o++) r = s[o], e = o !== u - 1 ? r.lastIndexOf(",") : r.length, i = r.substr(0, e), n[a] = isNaN(i) ? i.replace(Fe, "").trim() : +i, a = r.substr(e + 1).trim();
          return n
        },
        Le = function (t) {
          return function (e) {
            return 1 - t(1 - e)
          }
        },
        Ue = function t(e, r) {
          for (var i, n = e._first; n;) n instanceof We ? t(n, r) : !n.vars.yoyoEase || n._yoyo && n._repeat || n._yoyo === r || (n.timeline ? t(n.timeline, r) : (i = n._ease, n._ease = n._yEase, n._yEase = i, n._yoyo = r)), n = n._next
        },
        Be = function (t, e) {
          return t && (V(t) ? t : Ee[t] || function (t) {
            var e, r, i, n, s = (t + "").split("("),
              a = Ee[s[0]];
            return a && s.length > 1 && a.config ? a.config.apply(null, ~t.indexOf("{") ? [Ie(s[1])] : (e = t, r = e.indexOf("(") + 1, i = e.indexOf(")"), n = e.indexOf("(", r), e.substring(r, ~n && n < i ? e.indexOf(")", i + 1) : i)).split(",").map(St)) : Ee._CE && Pe.test(t) ? Ee._CE("", t) : a
          }(t)) || e
        },
        Ne = function (t, e, r, i) {
          void 0 === r && (r = function (t) {
            return 1 - e(1 - t)
          }), void 0 === i && (i = function (t) {
            return t < .5 ? e(2 * t) / 2 : 1 - e(2 * (1 - t)) / 2
          });
          var n, s = {
            easeIn: e,
            easeOut: r,
            easeInOut: i
          };
          return xt(t, (function (t) {
            for (var e in Ee[t] = at[t] = s, Ee[n = t.toLowerCase()] = r, s) Ee[n + ("easeIn" === e ? ".in" : "easeOut" === e ? ".out" : ".inOut")] = Ee[t + "." + e] = s[e]
          })), s
        },
        qe = function (t) {
          return function (e) {
            return e < .5 ? (1 - t(1 - 2 * e)) / 2 : .5 + t(2 * (e - .5)) / 2
          }
        },
        je = function t(e, r, i) {
          var n = r >= 1 ? r : 1,
            s = (i || (e ? .3 : .45)) / (r < 1 ? r : 1),
            a = s / L * (Math.asin(1 / n) || 0),
            o = function (t) {
              return 1 === t ? 1 : n * Math.pow(2, -10 * t) * j((t - a) * s) + 1
            },
            u = "out" === e ? o : "in" === e ? function (t) {
              return 1 - o(1 - t)
            } : qe(o);
          return s = L / s, u.config = function (r, i) {
            return t(e, r, i)
          }, u
        },
        Qe = function t(e, r) {
          void 0 === r && (r = 1.70158);
          var i = function (t) {
              return t ? --t * t * ((r + 1) * t + r) + 1 : 0
            },
            n = "out" === e ? i : "in" === e ? function (t) {
              return 1 - i(1 - t)
            } : qe(i);
          return n.config = function (r) {
            return t(e, r)
          }, n
        };
      xt("Linear,Quad,Cubic,Quart,Quint,Strong", (function (t, e) {
        var r = e < 5 ? e + 1 : e;
        Ne(t + ",Power" + (r - 1), e ? function (t) {
          return Math.pow(t, r)
        } : function (t) {
          return t
        }, (function (t) {
          return 1 - Math.pow(1 - t, r)
        }), (function (t) {
          return t < .5 ? Math.pow(2 * t, r) / 2 : 1 - Math.pow(2 * (1 - t), r) / 2
        }))
      })), Ee.Linear.easeNone = Ee.none = Ee.Linear.easeIn, Ne("Elastic", je("in"), je("out"), je()), R = 7.5625, O = 1 / (S = 2.75), Ne("Bounce", (function (t) {
        return 1 - z(1 - t)
      }), z = function (t) {
        return t < O ? R * t * t : t < .7272727272727273 ? R * Math.pow(t - 1.5 / S, 2) + .75 : t < .9090909090909092 ? R * (t -= 2.25 / S) * t + .9375 : R * Math.pow(t - 2.625 / S, 2) + .984375
      }), Ne("Expo", (function (t) {
        return t ? Math.pow(2, 10 * (t - 1)) : 0
      })), Ne("Circ", (function (t) {
        return -(N(1 - t * t) - 1)
      })), Ne("Sine", (function (t) {
        return 1 === t ? 1 : 1 - q(t * U)
      })), Ne("Back", Qe("in"), Qe("out"), Qe()), Ee.SteppedEase = Ee.steps = at.SteppedEase = {
        config: function (t, e) {
          void 0 === t && (t = 1);
          var r = 1 / t,
            i = t + (e ? 0 : 1),
            n = e ? 1 : 0;
          return function (t) {
            return ((i * se(0, .99999999, t) | 0) + n) * r
          }
        }
      }, P.ease = Ee["quad.out"], xt("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", (function (t) {
        return Tt += t + "," + t + "Params,"
      }));
      var Ve = function (t, e) {
          this.id = B++, t._gsap = this, this.target = t, this.harness = e, this.get = e ? e.get : kt, this.set = e ? e.getSetter : or
        },
        Ge = function () {
          function t(t) {
            this.vars = t, this._delay = +t.delay || 0, (this._repeat = t.repeat === 1 / 0 ? -2 : t.repeat || 0) && (this._rDelay = t.repeatDelay || 0, this._yoyo = !!t.yoyo || !!t.yoyoEase), this._ts = 1, Zt(this, +t.duration, 1, 1), this.data = t.data, c || Oe.wake()
          }
          var e = t.prototype;
          return e.delay = function (t) {
            return t || 0 === t ? (this.parent && this.parent.smoothChildTiming && this.startTime(this._start + t - this._delay), this._delay = t, this) : this._delay
          }, e.duration = function (t) {
            return arguments.length ? this.totalDuration(this._repeat > 0 ? t + (t + this._rDelay) * this._repeat : t) : this.totalDuration() && this._dur
          }, e.totalDuration = function (t) {
            return arguments.length ? (this._dirty = 0, Zt(this, this._repeat < 0 ? t : (t - this._repeat * this._rDelay) / (this._repeat + 1))) : this._tDur
          }, e.totalTime = function (t, e) {
            if (ze(), !arguments.length) return this._tTime;
            var r = this._dp;
            if (r && r.smoothChildTiming && this._ts) {
              for (Wt(this, t), !r._dp || r.parent || Yt(r, this); r && r.parent;) r.parent._time !== r._start + (r._ts >= 0 ? r._tTime / r._ts : (r.totalDuration() - r._tTime) / -r._ts) && r.totalTime(r._tTime, !0), r = r.parent;
              !this.parent && this._dp.autoRemoveChildren && (this._ts > 0 && t < this._tDur || this._ts < 0 && t > 0 || !this._tDur && !t) && Ht(this._dp, this, this._start - this._delay)
            }
            return (this._tTime !== t || !this._dur && !e || this._initted && Math.abs(this._zTime) === I || !t && !this._initted && (this.add || this._ptLookup)) && (this._ts || (this._pTime = t), Rt(this, t, e)), this
          }, e.time = function (t, e) {
            return arguments.length ? this.totalTime(Math.min(this.totalDuration(), t + jt(this)) % (this._dur + this._rDelay) || (t ? this._dur : 0), e) : this._time
          }, e.totalProgress = function (t, e) {
            return arguments.length ? this.totalTime(this.totalDuration() * t, e) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.ratio
          }, e.progress = function (t, e) {
            return arguments.length ? this.totalTime(this.duration() * (!this._yoyo || 1 & this.iteration() ? t : 1 - t) + jt(this), e) : this.duration() ? Math.min(1, this._time / this._dur) : this.ratio
          }, e.iteration = function (t, e) {
            var r = this.duration() + this._rDelay;
            return arguments.length ? this.totalTime(this._time + (t - 1) * r, e) : this._repeat ? Qt(this._tTime, r) + 1 : 1
          }, e.timeScale = function (t) {
            if (!arguments.length) return -1e-8 === this._rts ? 0 : this._rts;
            if (this._rts === t) return this;
            var e = this.parent && this._ts ? Vt(this.parent._time, this) : this._tTime;
            return this._rts = +t || 0, this._ts = this._ps || -1e-8 === t ? 0 : this._rts, Nt(this.totalTime(se(-this._delay, this._tDur, e), !0)), Gt(this), this
          }, e.paused = function (t) {
            return arguments.length ? (this._ps !== t && (this._ps = t, t ? (this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()), this._ts = this._act = 0) : (ze(), this._ts = this._rts, this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, 1 === this.progress() && Math.abs(this._zTime) !== I && (this._tTime -= I)))), this) : this._ps
          }, e.startTime = function (t) {
            if (arguments.length) {
              this._start = t;
              var e = this.parent || this._dp;
              return e && (e._sort || !this.parent) && Ht(e, this, t - this._delay), this
            }
            return this._start
          }, e.endTime = function (t) {
            return this._start + (H(t) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1)
          }, e.rawTime = function (t) {
            var e = this.parent || this._dp;
            return e ? t && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : this._ts ? Vt(e.rawTime(t), this) : this._tTime : this._tTime
          }, e.globalTime = function (t) {
            for (var e = this, r = arguments.length ? t : e.rawTime(); e;) r = e._start + r / (e._ts || 1), e = e._dp;
            return r
          }, e.repeat = function (t) {
            return arguments.length ? (this._repeat = t === 1 / 0 ? -2 : t, te(this)) : -2 === this._repeat ? 1 / 0 : this._repeat
          }, e.repeatDelay = function (t) {
            if (arguments.length) {
              var e = this._time;
              return this._rDelay = t, te(this), e ? this.time(e) : this
            }
            return this._rDelay
          }, e.yoyo = function (t) {
            return arguments.length ? (this._yoyo = t, this) : this._yoyo
          }, e.seek = function (t, e) {
            return this.totalTime(re(this, t), H(e))
          }, e.restart = function (t, e) {
            return this.play().totalTime(t ? -this._delay : 0, H(e))
          }, e.play = function (t, e) {
            return null != t && this.seek(t, e), this.reversed(!1).paused(!1)
          }, e.reverse = function (t, e) {
            return null != t && this.seek(t || this.totalDuration(), e), this.reversed(!0).paused(!1)
          }, e.pause = function (t, e) {
            return null != t && this.seek(t, e), this.paused(!0)
          }, e.resume = function () {
            return this.paused(!1)
          }, e.reversed = function (t) {
            return arguments.length ? (!!t !== this.reversed() && this.timeScale(-this._rts || (t ? -1e-8 : 0)), this) : this._rts < 0
          }, e.invalidate = function () {
            return this._initted = this._act = 0, this._zTime = -1e-8, this
          }, e.isActive = function () {
            var t, e = this.parent || this._dp,
              r = this._start;
            return !(e && !(this._ts && this._initted && e.isActive() && (t = e.rawTime(!0)) >= r && t < this.endTime(!0) - I))
          }, e.eventCallback = function (t, e, r) {
            var i = this.vars;
            return arguments.length > 1 ? (e ? (i[t] = e, r && (i[t + "Params"] = r), "onUpdate" === t && (this._onUpdate = e)) : delete i[t], this) : i[t]
          }, e.then = function (t) {
            var e = this;
            return new Promise((function (r) {
              var i = V(t) ? t : Ot,
                n = function () {
                  var t = e.then;
                  e.then = null, V(i) && (i = i(e)) && (i.then || i === e) && (e.then = t), r(i), e.then = t
                };
              e._initted && 1 === e.totalProgress() && e._ts >= 0 || !e._tTime && e._ts < 0 ? n() : e._prom = n
            }))
          }, e.kill = function () {
            Te(this)
          }, t
        }();
      zt(Ge.prototype, {
        _time: 0,
        _start: 0,
        _end: 0,
        _tTime: 0,
        _tDur: 0,
        _dirty: 0,
        _repeat: 0,
        _yoyo: !1,
        parent: null,
        _initted: !1,
        _rDelay: 0,
        _ts: 1,
        _dp: 0,
        ratio: 0,
        _zTime: -1e-8,
        _prom: 0,
        _ps: !1,
        _rts: 1
      });
      var We = function (t) {
        function e(e, r) {
          var n;
          return void 0 === e && (e = {}), (n = t.call(this, e) || this).labels = {}, n.smoothChildTiming = !!e.smoothChildTiming, n.autoRemoveChildren = !!e.autoRemoveChildren, n._sort = H(e.sortChildren), a && Ht(e.parent || a, i(n), r), e.reversed && n.reverse(), e.paused && n.paused(!0), e.scrollTrigger && Jt(i(n), e.scrollTrigger), n
        }
        n(e, t);
        var r = e.prototype;
        return r.to = function (t, e, r) {
          return ie(0, arguments, this), this
        }, r.from = function (t, e, r) {
          return ie(1, arguments, this), this
        }, r.fromTo = function (t, e, r, i) {
          return ie(2, arguments, this), this
        }, r.set = function (t, e, r) {
          return e.duration = 0, e.parent = this, It(e).repeatDelay || (e.repeat = 0), e.immediateRender = !!e.immediateRender, new rr(t, e, re(this, r), 1), this
        }, r.call = function (t, e, r) {
          return Ht(this, rr.delayedCall(0, t, e), r)
        }, r.staggerTo = function (t, e, r, i, n, s, a) {
          return r.duration = e, r.stagger = r.stagger || i, r.onComplete = s, r.onCompleteParams = a, r.parent = this, new rr(t, r, re(this, n)), this
        }, r.staggerFrom = function (t, e, r, i, n, s, a) {
          return r.runBackwards = 1, It(r).immediateRender = H(r.immediateRender), this.staggerTo(t, e, r, i, n, s, a)
        }, r.staggerFromTo = function (t, e, r, i, n, s, a, o) {
          return i.startAt = r, It(i).immediateRender = H(i.immediateRender), this.staggerTo(t, e, i, n, s, a, o)
        }, r.render = function (t, e, r) {
          var i, n, s, o, u, h, _, f, l, c, p, d, m = this._time,
            g = this._dirty ? this.totalDuration() : this._tDur,
            v = this._dur,
            y = t <= 0 ? 0 : At(t),
            T = this._zTime < 0 != t < 0 && (this._initted || !v);
          if (this !== a && y > g && t >= 0 && (y = g), y !== this._tTime || r || T) {
            if (m !== this._time && v && (y += this._time - m, t += this._time - m), i = y, l = this._start, h = !(f = this._ts), T && (v || (m = this._zTime), (t || !e) && (this._zTime = t)), this._repeat) {
              if (p = this._yoyo, u = v + this._rDelay, this._repeat < -1 && t < 0) return this.totalTime(100 * u + t, e, r);
              if (i = At(y % u), y === g ? (o = this._repeat, i = v) : ((o = ~~(y / u)) && o === y / u && (i = v, o--), i > v && (i = v)), c = Qt(this._tTime, u), !m && this._tTime && c !== o && (c = o), p && 1 & o && (i = v - i, d = 1), o !== c && !this._lock) {
                var w = p && 1 & c,
                  b = w === (p && 1 & o);
                if (o < c && (w = !w), m = w ? 0 : v, this._lock = 1, this.render(m || (d ? 0 : At(o * u)), e, !v)._lock = 0, this._tTime = y, !e && this.parent && ye(this, "onRepeat"), this.vars.repeatRefresh && !d && (this.invalidate()._lock = 1), m && m !== this._time || h !== !this._ts || this.vars.onRepeat && !this.parent && !this._act) return this;
                if (v = this._dur, g = this._tDur, b && (this._lock = 2, m = w ? v : -1e-4, this.render(m, !0), this.vars.repeatRefresh && !d && this.invalidate()), this._lock = 0, !this._ts && !h) return this;
                Ue(this, d)
              }
            }
            if (this._hasPause && !this._forcing && this._lock < 2 && (_ = function (t, e, r) {
                var i;
                if (r > e)
                  for (i = t._first; i && i._start <= r;) {
                    if ("isPause" === i.data && i._start > e) return i;
                    i = i._next
                  } else
                    for (i = t._last; i && i._start >= r;) {
                      if ("isPause" === i.data && i._start < e) return i;
                      i = i._prev
                    }
              }(this, At(m), At(i)), _ && (y -= i - (i = _._start))), this._tTime = y, this._time = i, this._act = !f, this._initted || (this._onUpdate = this.vars.onUpdate, this._initted = 1, this._zTime = t, m = 0), !m && i && !e && (ye(this, "onStart"), this._tTime !== y)) return this;
            if (i >= m && t >= 0)
              for (n = this._first; n;) {
                if (s = n._next, (n._act || i >= n._start) && n._ts && _ !== n) {
                  if (n.parent !== this) return this.render(t, e, r);
                  if (n.render(n._ts > 0 ? (i - n._start) * n._ts : (n._dirty ? n.totalDuration() : n._tDur) + (i - n._start) * n._ts, e, r), i !== this._time || !this._ts && !h) {
                    _ = 0, s && (y += this._zTime = -1e-8);
                    break
                  }
                }
                n = s
              } else {
                n = this._last;
                for (var k = t < 0 ? t : i; n;) {
                  if (s = n._prev, (n._act || k <= n._end) && n._ts && _ !== n) {
                    if (n.parent !== this) return this.render(t, e, r);
                    if (n.render(n._ts > 0 ? (k - n._start) * n._ts : (n._dirty ? n.totalDuration() : n._tDur) + (k - n._start) * n._ts, e, r), i !== this._time || !this._ts && !h) {
                      _ = 0, s && (y += this._zTime = k ? -1e-8 : I);
                      break
                    }
                  }
                  n = s
                }
              }
            if (_ && !e && (this.pause(), _.render(i >= m ? 0 : -1e-8)._zTime = i >= m ? 1 : -1, this._ts)) return this._start = l, Gt(this), this.render(t, e, r);
            this._onUpdate && !e && ye(this, "onUpdate", !0), (y === g && g >= this.totalDuration() || !y && m) && (l !== this._start && Math.abs(f) === Math.abs(this._ts) || this._lock || ((t || !v) && (y === g && this._ts > 0 || !y && this._ts < 0) && Ut(this, 1), e || t < 0 && !m || !y && !m && g || (ye(this, y === g && t >= 0 ? "onComplete" : "onReverseComplete", !0), this._prom && !(y < g && this.timeScale() > 0) && this._prom())))
          }
          return this
        }, r.add = function (t, e) {
          var r = this;
          if (G(e) || (e = re(this, e, t)), !(t instanceof Ge)) {
            if (X(t)) return t.forEach((function (t) {
              return r.add(t, e)
            })), this;
            if (Q(t)) return this.addLabel(t, e);
            if (!V(t)) return this;
            t = rr.delayedCall(0, t)
          }
          return this !== t ? Ht(this, t, e) : this
        }, r.getChildren = function (t, e, r, i) {
          void 0 === t && (t = !0), void 0 === e && (e = !0), void 0 === r && (r = !0), void 0 === i && (i = -F);
          for (var n = [], s = this._first; s;) s._start >= i && (s instanceof rr ? e && n.push(s) : (r && n.push(s), t && n.push.apply(n, s.getChildren(!0, e, r)))), s = s._next;
          return n
        }, r.getById = function (t) {
          for (var e = this.getChildren(1, 1, 1), r = e.length; r--;)
            if (e[r].vars.id === t) return e[r]
        }, r.remove = function (t) {
          return Q(t) ? this.removeLabel(t) : V(t) ? this.killTweensOf(t) : (Lt(this, t), t === this._recent && (this._recent = this._last), Bt(this))
        }, r.totalTime = function (e, r) {
          return arguments.length ? (this._forcing = 1, !this._dp && this._ts && (this._start = At(Oe.time - (this._ts > 0 ? e / this._ts : (this.totalDuration() - e) / -this._ts))), t.prototype.totalTime.call(this, e, r), this._forcing = 0, this) : this._tTime
        }, r.addLabel = function (t, e) {
          return this.labels[t] = re(this, e), this
        }, r.removeLabel = function (t) {
          return delete this.labels[t], this
        }, r.addPause = function (t, e, r) {
          var i = rr.delayedCall(0, e || lt, r);
          return i.data = "isPause", this._hasPause = 1, Ht(this, i, re(this, t))
        }, r.removePause = function (t) {
          var e = this._first;
          for (t = re(this, t); e;) e._start === t && "isPause" === e.data && Ut(e), e = e._next
        }, r.killTweensOf = function (t, e, r) {
          for (var i = this.getTweensOf(t, r), n = i.length; n--;) Ye !== i[n] && i[n].kill(t, e);
          return this
        }, r.getTweensOf = function (t, e) {
          for (var r, i = [], n = he(t), s = this._first, a = G(e); s;) s instanceof rr ? Ct(s._targets, n) && (a ? (!Ye || s._initted && s._ts) && s.globalTime(0) <= e && s.globalTime(s.totalDuration()) > e : !e || s.isActive()) && i.push(s) : (r = s.getTweensOf(n, e)).length && i.push.apply(i, r), s = s._next;
          return i
        }, r.tweenTo = function (t, e) {
          e = e || {};
          var r, i = this,
            n = re(i, t),
            s = e,
            a = s.startAt,
            o = s.onStart,
            u = s.onStartParams,
            h = s.immediateRender,
            _ = rr.to(i, zt({
              ease: e.ease || "none",
              lazy: !1,
              immediateRender: !1,
              time: n,
              overwrite: "auto",
              duration: e.duration || Math.abs((n - (a && "time" in a ? a.time : i._time)) / i.timeScale()) || I,
              onStart: function () {
                if (i.pause(), !r) {
                  var t = e.duration || Math.abs((n - (a && "time" in a ? a.time : i._time)) / i.timeScale());
                  _._dur !== t && Zt(_, t, 0, 1).render(_._time, !0, !0), r = 1
                }
                o && o.apply(_, u || [])
              }
            }, e));
          return h ? _.render(0) : _
        }, r.tweenFromTo = function (t, e, r) {
          return this.tweenTo(e, zt({
            startAt: {
              time: re(this, t)
            }
          }, r))
        }, r.recent = function () {
          return this._recent
        }, r.nextLabel = function (t) {
          return void 0 === t && (t = this._time), ve(this, re(this, t))
        }, r.previousLabel = function (t) {
          return void 0 === t && (t = this._time), ve(this, re(this, t), 1)
        }, r.currentLabel = function (t) {
          return arguments.length ? this.seek(t, !0) : this.previousLabel(this._time + I)
        }, r.shiftChildren = function (t, e, r) {
          void 0 === r && (r = 0);
          for (var i, n = this._first, s = this.labels; n;) n._start >= r && (n._start += t, n._end += t), n = n._next;
          if (e)
            for (i in s) s[i] >= r && (s[i] += t);
          return Bt(this)
        }, r.invalidate = function () {
          var e = this._first;
          for (this._lock = 0; e;) e.invalidate(), e = e._next;
          return t.prototype.invalidate.call(this)
        }, r.clear = function (t) {
          void 0 === t && (t = !0);
          for (var e, r = this._first; r;) e = r._next, this.remove(r), r = e;
          return this._dp && (this._time = this._tTime = this._pTime = 0), t && (this.labels = {}), Bt(this)
        }, r.totalDuration = function (t) {
          var e, r, i, n = 0,
            s = this,
            o = s._last,
            u = F;
          if (arguments.length) return s.timeScale((s._repeat < 0 ? s.duration() : s.totalDuration()) / (s.reversed() ? -t : t));
          if (s._dirty) {
            for (i = s.parent; o;) e = o._prev, o._dirty && o.totalDuration(), (r = o._start) > u && s._sort && o._ts && !s._lock ? (s._lock = 1, Ht(s, o, r - o._delay, 1)._lock = 0) : u = r, r < 0 && o._ts && (n -= r, (!i && !s._dp || i && i.smoothChildTiming) && (s._start += r / s._ts, s._time -= r, s._tTime -= r), s.shiftChildren(-r, !1, -Infinity), u = 0), o._end > n && o._ts && (n = o._end), o = e;
            Zt(s, s === a && s._time > n ? s._time : n, 1, 1), s._dirty = 0
          }
          return s._tDur
        }, e.updateRoot = function (t) {
          if (a._ts && (Rt(a, Vt(t, a)), f = Oe.frame), Oe.frame >= vt) {
            vt += E.autoSleep || 120;
            var e = a._first;
            if ((!e || !e._ts) && E.autoSleep && Oe._listeners.length < 2) {
              for (; e && !e._ts;) e = e._next;
              e || Oe.sleep()
            }
          }
        }, e
      }(Ge);
      zt(We.prototype, {
        _lock: 0,
        _hasPause: 0,
        _forcing: 0
      });
      var Ye, He = function (t, e, r, i, n, s, a) {
          var o, u, h, _, f, l, c, p, d = new mr(this._pt, t, e, 0, 1, _r, null, n),
            m = 0,
            g = 0;
          for (d.b = r, d.e = i, r += "", (c = ~(i += "").indexOf("random(")) && (i = me(i)), s && (s(p = [r, i], t, e), r = p[0], i = p[1]), u = r.match(rt) || []; o = rt.exec(i);) _ = o[0], f = i.substring(m, o.index), h ? h = (h + 1) % 5 : "rgba(" === f.substr(-5) && (h = 1), _ !== u[g++] && (l = parseFloat(u[g - 1]) || 0, d._pt = {
            _next: d._pt,
            p: f || 1 === g ? f : ",",
            s: l,
            c: "=" === _.charAt(1) ? parseFloat(_.substr(2)) * ("-" === _.charAt(0) ? -1 : 1) : parseFloat(_) - l,
            m: h && h < 4 ? Math.round : 0
          }, m = rt.lastIndex);
          return d.c = m < i.length ? i.substring(m, i.length) : "", d.fp = a, (it.test(i) || c) && (d.e = 0), this._pt = d, d
        },
        Je = function (t, e, r, i, n, s, a, o, u) {
          V(i) && (i = i(n || 0, t, s));
          var h, _ = t[e],
            f = "get" !== r ? r : V(_) ? u ? t[e.indexOf("set") || !V(t["get" + e.substr(3)]) ? e : "get" + e.substr(3)](u) : t[e]() : _,
            l = V(_) ? u ? sr : nr : ir;
          if (Q(i) && (~i.indexOf("random(") && (i = me(i)), "=" === i.charAt(1) && ((h = parseFloat(f) + parseFloat(i.substr(2)) * ("-" === i.charAt(0) ? -1 : 1) + (ae(f) || 0)) || 0 === h) && (i = h)), f !== i) return isNaN(f * i) || "" === i ? (!_ && !(e in t) && ht(e, i), He.call(this, t, e, f, i, l, o || E.stringFilter, u)) : (h = new mr(this._pt, t, e, +f || 0, i - (f || 0), "boolean" == typeof _ ? hr : ur, 0, l), u && (h.fp = u), a && h.modifier(a, this, t), this._pt = h)
        },
        Ke = function (t, e, r, i, n, s) {
          var a, o, u, h;
          if (mt[t] && !1 !== (a = new mt[t]).init(n, a.rawVars ? e[t] : function (t, e, r, i, n) {
              if (V(t) && (t = Ze(t, n, e, r, i)), !Y(t) || t.style && t.nodeType || X(t) || $(t)) return Q(t) ? Ze(t, n, e, r, i) : t;
              var s, a = {};
              for (s in t) a[s] = Ze(t[s], n, e, r, i);
              return a
            }(e[t], i, n, s, r), r, i, s) && (r._pt = o = new mr(r._pt, n, t, 0, 1, a.render, a, 0, a.priority), r !== l))
            for (u = r._ptLookup[r._targets.indexOf(n)], h = a._props.length; h--;) u[a._props[h]] = o;
          return a
        },
        $e = function t(e, r) {
          var i, n, o, u, h, _, f, l, c, p, d, m, g, v = e.vars,
            y = v.ease,
            T = v.startAt,
            w = v.immediateRender,
            b = v.lazy,
            k = v.onUpdate,
            x = v.onUpdateParams,
            D = v.callbackScope,
            A = v.runBackwards,
            C = v.yoyoEase,
            M = v.keyframes,
            R = v.autoRevert,
            S = e._dur,
            O = e._startAt,
            z = e._targets,
            E = e.parent,
            L = E && "nested" === E.data ? E.parent._targets : z,
            U = "auto" === e._overwrite && !s,
            B = e.timeline;
          if (B && (!M || !y) && (y = "none"), e._ease = Be(y, P.ease), e._yEase = C ? Le(Be(!0 === C ? y : C, P.ease)) : 0, C && e._yoyo && !e._repeat && (C = e._yEase, e._yEase = e._ease, e._ease = C), e._from = !B && !!v.runBackwards, !B || M && !v.stagger) {
            if (m = (l = z[0] ? bt(z[0]).harness : 0) && v[l.prop], i = Ft(v, ct), O && Ut(O.render(-1, !0)), T)
              if (Ut(e._startAt = rr.set(z, zt({
                  data: "isStart",
                  overwrite: !1,
                  parent: E,
                  immediateRender: !0,
                  lazy: H(b),
                  startAt: null,
                  delay: 0,
                  onUpdate: k,
                  onUpdateParams: x,
                  callbackScope: D,
                  stagger: 0
                }, T))), r < 0 && !w && !R && e._startAt.render(-1, !0), w) {
                if (r > 0 && !R && (e._startAt = 0), S && r <= 0) return void(r && (e._zTime = r))
              } else !1 === R && (e._startAt = 0);
            else if (A && S)
              if (O) !R && (e._startAt = 0);
              else if (r && (w = !1), o = zt({
                overwrite: !1,
                data: "isFromStart",
                lazy: w && H(b),
                immediateRender: w,
                stagger: 0,
                parent: E
              }, i), m && (o[l.prop] = m), Ut(e._startAt = rr.set(z, o)), r < 0 && e._startAt.render(-1, !0), e._zTime = r, w) {
              if (!r) return
            } else t(e._startAt, I);
            for (e._pt = 0, b = S && H(b) || b && !S, n = 0; n < z.length; n++) {
              if (f = (h = z[n])._gsap || wt(z)[n]._gsap, e._ptLookup[n] = p = {}, dt[f.id] && pt.length && Mt(), d = L === z ? n : L.indexOf(h), l && !1 !== (c = new l).init(h, m || i, e, d, L) && (e._pt = u = new mr(e._pt, h, c.name, 0, 1, c.render, c, 0, c.priority), c._props.forEach((function (t) {
                  p[t] = u
                })), c.priority && (_ = 1)), !l || m)
                for (o in i) mt[o] && (c = Ke(o, i, e, d, h, L)) ? c.priority && (_ = 1) : p[o] = u = Je.call(e, h, o, "get", i[o], d, L, 0, v.stringFilter);
              e._op && e._op[n] && e.kill(h, e._op[n]), U && e._pt && (Ye = e, a.killTweensOf(h, p, e.globalTime(r)), g = !e.parent, Ye = 0), e._pt && b && (dt[f.id] = 1)
            }
            _ && dr(e), e._onInit && e._onInit(e)
          }
          e._onUpdate = k, e._initted = (!e._op || e._pt) && !g, M && r <= 0 && B.render(F, !0, !0)
        },
        Xe = function (t, e, r, i) {
          var n, s, a = e.ease || i || "power1.inOut";
          if (X(e)) s = r[t] || (r[t] = []), e.forEach((function (t, r) {
            return s.push({
              t: r / (e.length - 1) * 100,
              v: t,
              e: a
            })
          }));
          else
            for (n in e) s = r[n] || (r[n] = []), "ease" === n || s.push({
              t: parseFloat(t),
              v: e[n],
              e: a
            })
        },
        Ze = function (t, e, r, i, n) {
          return V(t) ? t.call(e, r, i, n) : Q(t) && ~t.indexOf("random(") ? me(t) : t
        },
        tr = Tt + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase",
        er = {};
      xt(tr + ",id,stagger,delay,duration,paused,scrollTrigger", (function (t) {
        return er[t] = 1
      }));
      var rr = function (t) {
        function e(e, r, n, o) {
          var u;
          "number" == typeof r && (n.duration = r, r = n, n = null);
          var h, _, f, l, c, p, d, m, g = (u = t.call(this, o ? r : It(r)) || this).vars,
            v = g.duration,
            y = g.delay,
            T = g.immediateRender,
            w = g.stagger,
            b = g.overwrite,
            k = g.keyframes,
            x = g.defaults,
            D = g.scrollTrigger,
            A = g.yoyoEase,
            C = r.parent || a,
            M = (X(e) || $(e) ? G(e[0]) : "length" in r) ? [e] : he(e);
          if (u._targets = M.length ? wt(M) : _t("GSAP target " + e + " not found. https://greensock.com", !E.nullTargetWarn) || [], u._ptLookup = [], u._overwrite = b, k || w || K(v) || K(y)) {
            if (r = u.vars, (h = u.timeline = new We({
                data: "nested",
                defaults: x || {}
              })).kill(), h.parent = h._dp = i(u), h._start = 0, w || K(v) || K(y)) {
              if (l = M.length, d = w && fe(w), Y(w))
                for (c in w) ~tr.indexOf(c) && (m || (m = {}), m[c] = w[c]);
              for (_ = 0; _ < l; _++)(f = Ft(r, er)).stagger = 0, A && (f.yoyoEase = A), m && Et(f, m), p = M[_], f.duration = +Ze(v, i(u), _, p, M), f.delay = (+Ze(y, i(u), _, p, M) || 0) - u._delay, !w && 1 === l && f.delay && (u._delay = y = f.delay, u._start += y, f.delay = 0), h.to(p, f, d ? d(_, p, M) : 0), h._ease = Ee.none;
              h.duration() ? v = y = 0 : u.timeline = 0
            } else if (k) {
              It(zt(h.vars.defaults, {
                ease: "none"
              })), h._ease = Be(k.ease || r.ease || "none");
              var R, S, O, z = 0;
              if (X(k)) k.forEach((function (t) {
                return h.to(M, t, ">")
              }));
              else {
                for (c in f = {}, k) "ease" === c || "easeEach" === c || Xe(c, k[c], f, k.easeEach);
                for (c in f)
                  for (R = f[c].sort((function (t, e) {
                      return t.t - e.t
                    })), z = 0, _ = 0; _ < R.length; _++)(O = {
                    ease: (S = R[_]).e,
                    duration: (S.t - (_ ? R[_ - 1].t : 0)) / 100 * v
                  })[c] = S.v, h.to(M, O, z), z += O.duration;
                h.duration() < v && h.to({}, {
                  duration: v - h.duration()
                })
              }
            }
            v || u.duration(v = h.duration())
          } else u.timeline = 0;
          return !0 !== b || s || (Ye = i(u), a.killTweensOf(M), Ye = 0), Ht(C, i(u), n), r.reversed && u.reverse(), r.paused && u.paused(!0), (T || !v && !k && u._start === At(C._time) && H(T) && qt(i(u)) && "nested" !== C.data) && (u._tTime = -1e-8, u.render(Math.max(0, -y))), D && Jt(i(u), D), u
        }
        n(e, t);
        var r = e.prototype;
        return r.render = function (t, e, r) {
          var i, n, s, a, o, u, h, _, f, l = this._time,
            c = this._tDur,
            p = this._dur,
            d = t > c - I && t >= 0 ? c : t < I ? 0 : t;
          if (p) {
            if (d !== this._tTime || !t || r || !this._initted && this._tTime || this._startAt && this._zTime < 0 != t < 0) {
              if (i = d, _ = this.timeline, this._repeat) {
                if (a = p + this._rDelay, this._repeat < -1 && t < 0) return this.totalTime(100 * a + t, e, r);
                if (i = At(d % a), d === c ? (s = this._repeat, i = p) : ((s = ~~(d / a)) && s === d / a && (i = p, s--), i > p && (i = p)), (u = this._yoyo && 1 & s) && (f = this._yEase, i = p - i), o = Qt(this._tTime, a), i === l && !r && this._initted) return this;
                s !== o && (_ && this._yEase && Ue(_, u), !this.vars.repeatRefresh || u || this._lock || (this._lock = r = 1, this.render(At(a * s), !0).invalidate()._lock = 0))
              }
              if (!this._initted) {
                if (Kt(this, t < 0 ? t : i, r, e)) return this._tTime = 0, this;
                if (p !== this._dur) return this.render(t, e, r)
              }
              if (this._tTime = d, this._time = i, !this._act && this._ts && (this._act = 1, this._lazy = 0), this.ratio = h = (f || this._ease)(i / p), this._from && (this.ratio = h = 1 - h), i && !l && !e && (ye(this, "onStart"), this._tTime !== d)) return this;
              for (n = this._pt; n;) n.r(h, n.d), n = n._next;
              _ && _.render(t < 0 ? t : !i && u ? -1e-8 : _._dur * _._ease(i / this._dur), e, r) || this._startAt && (this._zTime = t), this._onUpdate && !e && (t < 0 && this._startAt && this._startAt.render(t, !0, r), ye(this, "onUpdate")), this._repeat && s !== o && this.vars.onRepeat && !e && this.parent && ye(this, "onRepeat"), d !== this._tDur && d || this._tTime !== d || (t < 0 && this._startAt && !this._onUpdate && this._startAt.render(t, !0, !0), (t || !p) && (d === this._tDur && this._ts > 0 || !d && this._ts < 0) && Ut(this, 1), e || t < 0 && !l || !d && !l || (ye(this, d === c ? "onComplete" : "onReverseComplete", !0), this._prom && !(d < c && this.timeScale() > 0) && this._prom()))
            }
          } else ! function (t, e, r, i) {
            var n, s, a, o = t.ratio,
              u = e < 0 || !e && (!t._start && $t(t) && (t._initted || !Xt(t)) || (t._ts < 0 || t._dp._ts < 0) && !Xt(t)) ? 0 : 1,
              h = t._rDelay,
              _ = 0;
            if (h && t._repeat && (_ = se(0, t._tDur, e), s = Qt(_, h), t._yoyo && 1 & s && (u = 1 - u), s !== Qt(t._tTime, h) && (o = 1 - u, t.vars.repeatRefresh && t._initted && t.invalidate())), u !== o || i || t._zTime === I || !e && t._zTime) {
              if (!t._initted && Kt(t, e, i, r)) return;
              for (a = t._zTime, t._zTime = e || (r ? I : 0), r || (r = e && !a), t.ratio = u, t._from && (u = 1 - u), t._time = 0, t._tTime = _, n = t._pt; n;) n.r(u, n.d), n = n._next;
              t._startAt && e < 0 && t._startAt.render(e, !0, !0), t._onUpdate && !r && ye(t, "onUpdate"), _ && t._repeat && !r && t.parent && ye(t, "onRepeat"), (e >= t._tDur || e < 0) && t.ratio === u && (u && Ut(t, 1), r || (ye(t, u ? "onComplete" : "onReverseComplete", !0), t._prom && t._prom()))
            } else t._zTime || (t._zTime = e)
          }(this, t, e, r);
          return this
        }, r.targets = function () {
          return this._targets
        }, r.invalidate = function () {
          return this._pt = this._op = this._startAt = this._onUpdate = this._lazy = this.ratio = 0, this._ptLookup = [], this.timeline && this.timeline.invalidate(), t.prototype.invalidate.call(this)
        }, r.kill = function (t, e) {
          if (void 0 === e && (e = "all"), !(t || e && "all" !== e)) return this._lazy = this._pt = 0, this.parent ? Te(this) : this;
          if (this.timeline) {
            var r = this.timeline.totalDuration();
            return this.timeline.killTweensOf(t, e, Ye && !0 !== Ye.vars.overwrite)._first || Te(this), this.parent && r !== this.timeline.totalDuration() && Zt(this, this._dur * this.timeline._tDur / r, 0, 1), this
          }
          var i, n, s, a, o, u, h, _ = this._targets,
            f = t ? he(t) : _,
            l = this._ptLookup,
            c = this._pt;
          if ((!e || "all" === e) && function (t, e) {
              for (var r = t.length, i = r === e.length; i && r-- && t[r] === e[r];);
              return r < 0
            }(_, f)) return "all" === e && (this._pt = 0), Te(this);
          for (i = this._op = this._op || [], "all" !== e && (Q(e) && (o = {}, xt(e, (function (t) {
              return o[t] = 1
            })), e = o), e = function (t, e) {
              var r, i, n, s, a = t[0] ? bt(t[0]).harness : 0,
                o = a && a.aliases;
              if (!o) return e;
              for (i in r = Et({}, e), o)
                if (i in r)
                  for (n = (s = o[i].split(",")).length; n--;) r[s[n]] = r[i];
              return r
            }(_, e)), h = _.length; h--;)
            if (~f.indexOf(_[h]))
              for (o in n = l[h], "all" === e ? (i[h] = e, a = n, s = {}) : (s = i[h] = i[h] || {}, a = e), a)(u = n && n[o]) && ("kill" in u.d && !0 !== u.d.kill(o) || Lt(this, u, "_pt"), delete n[o]), "all" !== s && (s[o] = 1);
          return this._initted && !this._pt && c && Te(this), this
        }, e.to = function (t, r) {
          return new e(t, r, arguments[2])
        }, e.from = function (t, e) {
          return ie(1, arguments)
        }, e.delayedCall = function (t, r, i, n) {
          return new e(r, 0, {
            immediateRender: !1,
            lazy: !1,
            overwrite: !1,
            delay: t,
            onComplete: r,
            onReverseComplete: r,
            onCompleteParams: i,
            onReverseCompleteParams: i,
            callbackScope: n
          })
        }, e.fromTo = function (t, e, r) {
          return ie(2, arguments)
        }, e.set = function (t, r) {
          return r.duration = 0, r.repeatDelay || (r.repeat = 0), new e(t, r)
        }, e.killTweensOf = function (t, e, r) {
          return a.killTweensOf(t, e, r)
        }, e
      }(Ge);
      zt(rr.prototype, {
        _targets: [],
        _lazy: 0,
        _startAt: 0,
        _op: 0,
        _onInit: 0
      }), xt("staggerTo,staggerFrom,staggerFromTo", (function (t) {
        rr[t] = function () {
          var e = new We,
            r = oe.call(arguments, 0);
          return r.splice("staggerFromTo" === t ? 5 : 4, 0, 0), e[t].apply(e, r)
        }
      }));
      var ir = function (t, e, r) {
          return t[e] = r
        },
        nr = function (t, e, r) {
          return t[e](r)
        },
        sr = function (t, e, r, i) {
          return t[e](i.fp, r)
        },
        ar = function (t, e, r) {
          return t.setAttribute(e, r)
        },
        or = function (t, e) {
          return V(t[e]) ? nr : W(t[e]) && t.setAttribute ? ar : ir
        },
        ur = function (t, e) {
          return e.set(e.t, e.p, Math.round(1e6 * (e.s + e.c * t)) / 1e6, e)
        },
        hr = function (t, e) {
          return e.set(e.t, e.p, !!(e.s + e.c * t), e)
        },
        _r = function (t, e) {
          var r = e._pt,
            i = "";
          if (!t && e.b) i = e.b;
          else if (1 === t && e.e) i = e.e;
          else {
            for (; r;) i = r.p + (r.m ? r.m(r.s + r.c * t) : Math.round(1e4 * (r.s + r.c * t)) / 1e4) + i, r = r._next;
            i += e.c
          }
          e.set(e.t, e.p, i, e)
        },
        fr = function (t, e) {
          for (var r = e._pt; r;) r.r(t, r.d), r = r._next
        },
        lr = function (t, e, r, i) {
          for (var n, s = this._pt; s;) n = s._next, s.p === i && s.modifier(t, e, r), s = n
        },
        cr = function (t) {
          for (var e, r, i = this._pt; i;) r = i._next, i.p === t && !i.op || i.op === t ? Lt(this, i, "_pt") : i.dep || (e = 1), i = r;
          return !e
        },
        pr = function (t, e, r, i) {
          i.mSet(t, e, i.m.call(i.tween, r, i.mt), i)
        },
        dr = function (t) {
          for (var e, r, i, n, s = t._pt; s;) {
            for (e = s._next, r = i; r && r.pr > s.pr;) r = r._next;
            (s._prev = r ? r._prev : n) ? s._prev._next = s: i = s, (s._next = r) ? r._prev = s : n = s, s = e
          }
          t._pt = i
        },
        mr = function () {
          function t(t, e, r, i, n, s, a, o, u) {
            this.t = e, this.s = i, this.c = n, this.p = r, this.r = s || ur, this.d = a || this, this.set = o || ir, this.pr = u || 0, this._next = t, t && (t._prev = this)
          }
          return t.prototype.modifier = function (t, e, r) {
            this.mSet = this.mSet || this.set, this.set = pr, this.m = t, this.mt = r, this.tween = e
          }, t
        }();
      xt(Tt + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", (function (t) {
        return ct[t] = 1
      })), at.TweenMax = at.TweenLite = rr, at.TimelineLite = at.TimelineMax = We, a = new We({
        sortChildren: !1,
        defaults: P,
        autoRemoveChildren: !0,
        id: "root",
        smoothChildTiming: !0
      }), E.stringFilter = Se;
      var gr = {
        registerPlugin: function () {
          for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++) e[r] = arguments[r];
          e.forEach((function (t) {
            return we(t)
          }))
        },
        timeline: function (t) {
          return new We(t)
        },
        getTweensOf: function (t, e) {
          return a.getTweensOf(t, e)
        },
        getProperty: function (t, e, r, i) {
          Q(t) && (t = he(t)[0]);
          var n = bt(t || {}).get,
            s = r ? Ot : St;
          return "native" === r && (r = ""), t ? e ? s((mt[e] && mt[e].get || n)(t, e, r, i)) : function (e, r, i) {
            return s((mt[e] && mt[e].get || n)(t, e, r, i))
          } : t
        },
        quickSetter: function (t, e, r) {
          if ((t = he(t)).length > 1) {
            var i = t.map((function (t) {
                return Tr.quickSetter(t, e, r)
              })),
              n = i.length;
            return function (t) {
              for (var e = n; e--;) i[e](t)
            }
          }
          t = t[0] || {};
          var s = mt[e],
            a = bt(t),
            o = a.harness && (a.harness.aliases || {})[e] || e,
            u = s ? function (e) {
              var i = new s;
              l._pt = 0, i.init(t, r ? e + r : e, l, 0, [t]), i.render(1, i), l._pt && fr(1, l)
            } : a.set(t, o);
          return s ? u : function (e) {
            return u(t, o, r ? e + r : e, a, 1)
          }
        },
        isTweening: function (t) {
          return a.getTweensOf(t, !0).length > 0
        },
        defaults: function (t) {
          return t && t.ease && (t.ease = Be(t.ease, P.ease)), Pt(P, t || {})
        },
        config: function (t) {
          return Pt(E, t || {})
        },
        registerEffect: function (t) {
          var e = t.name,
            r = t.effect,
            i = t.plugins,
            n = t.defaults,
            s = t.extendTimeline;
          (i || "").split(",").forEach((function (t) {
            return t && !mt[t] && !at[t] && _t(e + " effect requires " + t + " plugin.")
          })), gt[e] = function (t, e, i) {
            return r(he(t), zt(e || {}, n), i)
          }, s && (We.prototype[e] = function (t, r, i) {
            return this.add(gt[e](t, Y(r) ? r : (i = r) && {}, this), i)
          })
        },
        registerEase: function (t, e) {
          Ee[t] = Be(e)
        },
        parseEase: function (t, e) {
          return arguments.length ? Be(t, e) : Ee
        },
        getById: function (t) {
          return a.getById(t)
        },
        exportRoot: function (t, e) {
          void 0 === t && (t = {});
          var r, i, n = new We(t);
          for (n.smoothChildTiming = H(t.smoothChildTiming), a.remove(n), n._dp = 0, n._time = n._tTime = a._time, r = a._first; r;) i = r._next, !e && !r._dur && r instanceof rr && r.vars.onComplete === r._targets[0] || Ht(n, r, r._start - r._delay), r = i;
          return Ht(a, n, 0), n
        },
        utils: {
          wrap: function t(e, r, i) {
            var n = r - e;
            return X(e) ? de(e, t(0, e.length), r) : ne(i, (function (t) {
              return (n + (t - e) % n) % n + e
            }))
          },
          wrapYoyo: function t(e, r, i) {
            var n = r - e,
              s = 2 * n;
            return X(e) ? de(e, t(0, e.length - 1), r) : ne(i, (function (t) {
              return e + ((t = (s + (t - e) % s) % s || 0) > n ? s - t : t)
            }))
          },
          distribute: fe,
          random: pe,
          snap: ce,
          normalize: function (t, e, r) {
            return ge(t, e, 0, 1, r)
          },
          getUnit: ae,
          clamp: function (t, e, r) {
            return ne(r, (function (r) {
              return se(t, e, r)
            }))
          },
          splitColor: De,
          toArray: he,
          selector: function (t) {
            return t = he(t)[0] || _t("Invalid scope") || {},
              function (e) {
                var r = t.current || t.nativeElement || t;
                return he(e, r.querySelectorAll ? r : r === t ? _t("Invalid scope") || h.createElement("div") : t)
              }
          },
          mapRange: ge,
          pipe: function () {
            for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++) e[r] = arguments[r];
            return function (t) {
              return e.reduce((function (t, e) {
                return e(t)
              }), t)
            }
          },
          unitize: function (t, e) {
            return function (r) {
              return t(parseFloat(r)) + (e || ae(r))
            }
          },
          interpolate: function t(e, r, i, n) {
            var s = isNaN(e + r) ? 0 : function (t) {
              return (1 - t) * e + t * r
            };
            if (!s) {
              var a, o, u, h, _, f = Q(e),
                l = {};
              if (!0 === i && (n = 1) && (i = null), f) e = {
                p: e
              }, r = {
                p: r
              };
              else if (X(e) && !X(r)) {
                for (u = [], h = e.length, _ = h - 2, o = 1; o < h; o++) u.push(t(e[o - 1], e[o]));
                h--, s = function (t) {
                  t *= h;
                  var e = Math.min(_, ~~t);
                  return u[e](t - e)
                }, i = r
              } else n || (e = Et(X(e) ? [] : {}, e));
              if (!u) {
                for (a in r) Je.call(l, e, a, "get", r[a]);
                s = function (t) {
                  return fr(t, l) || (f ? e.p : e)
                }
              }
            }
            return ne(i, s)
          },
          shuffle: _e
        },
        install: ut,
        effects: gt,
        ticker: Oe,
        updateRoot: We.updateRoot,
        plugins: mt,
        globalTimeline: a,
        core: {
          PropTween: mr,
          globals: ft,
          Tween: rr,
          Timeline: We,
          Animation: Ge,
          getCache: bt,
          _removeLinkedListItem: Lt,
          suppressOverwrites: function (t) {
            return s = t
          }
        }
      };
      xt("to,from,fromTo,delayedCall,set,killTweensOf", (function (t) {
        return gr[t] = rr[t]
      })), Oe.add(We.updateRoot), l = gr.to({}, {
        duration: 0
      });
      var vr = function (t, e) {
          for (var r = t._pt; r && r.p !== e && r.op !== e && r.fp !== e;) r = r._next;
          return r
        },
        yr = function (t, e) {
          return {
            name: t,
            rawVars: 1,
            init: function (t, r, i) {
              i._onInit = function (t) {
                var i, n;
                if (Q(r) && (i = {}, xt(r, (function (t) {
                    return i[t] = 1
                  })), r = i), e) {
                  for (n in i = {}, r) i[n] = e(r[n]);
                  r = i
                }! function (t, e) {
                  var r, i, n, s = t._targets;
                  for (r in e)
                    for (i = s.length; i--;)(n = t._ptLookup[i][r]) && (n = n.d) && (n._pt && (n = vr(n, r)), n && n.modifier && n.modifier(e[r], t, s[i], r))
                }(t, r)
              }
            }
          }
        },
        Tr = gr.registerPlugin({
          name: "attr",
          init: function (t, e, r, i, n) {
            var s, a;
            for (s in e)(a = this.add(t, "setAttribute", (t.getAttribute(s) || 0) + "", e[s], i, n, 0, 0, s)) && (a.op = s), this._props.push(s)
          }
        }, {
          name: "endArray",
          init: function (t, e) {
            for (var r = e.length; r--;) this.add(t, r, t[r] || 0, e[r])
          }
        }, yr("roundProps", le), yr("modifiers"), yr("snap", ce)) || gr;
      rr.version = We.version = Tr.version = "3.9.1", _ = 1, J() && ze(), Ee.Power0, Ee.Power1, Ee.Power2, Ee.Power3, Ee.Power4, Ee.Linear, Ee.Quad, Ee.Cubic, Ee.Quart, Ee.Quint, Ee.Strong, Ee.Elastic, Ee.Back, Ee.SteppedEase, Ee.Bounce, Ee.Sine;
      var wr = Ee.Expo;
      Ee.Circ
    }
  }
]);
//# sourceMappingURL=gsap-core.bundle.js.map
