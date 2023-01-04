"use strict";
(self.webpackChunkproject = self.webpackChunkproject || []).push([
  ["vendors/locomotive-scroll-esm"], {
    267: (t, e, i) => {
      function s(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
      }

      function n(t, e) {
        for (var i = 0; i < e.length; i++) {
          var s = e[i];
          s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(t, s.key, s)
        }
      }

      function o(t, e, i) {
        return e && n(t.prototype, e), i && n(t, i), t
      }

      function l(t, e, i) {
        return e in t ? Object.defineProperty(t, e, {
          value: i,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : t[e] = i, t
      }

      function r(t, e) {
        var i = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var s = Object.getOwnPropertySymbols(t);
          e && (s = s.filter((function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable
          }))), i.push.apply(i, s)
        }
        return i
      }

      function a(t) {
        for (var e = 1; e < arguments.length; e++) {
          var i = null != arguments[e] ? arguments[e] : {};
          e % 2 ? r(Object(i), !0).forEach((function (e) {
            l(t, e, i[e])
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : r(Object(i)).forEach((function (e) {
            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e))
          }))
        }
        return t
      }

      function c(t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
        t.prototype = Object.create(e && e.prototype, {
          constructor: {
            value: t,
            writable: !0,
            configurable: !0
          }
        }), e && d(t, e)
      }

      function h(t) {
        return h = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
          return t.__proto__ || Object.getPrototypeOf(t)
        }, h(t)
      }

      function d(t, e) {
        return d = Object.setPrototypeOf || function (t, e) {
          return t.__proto__ = e, t
        }, d(t, e)
      }

      function u(t) {
        if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t
      }

      function f(t, e) {
        return !e || "object" != typeof e && "function" != typeof e ? u(t) : e
      }

      function p(t) {
        var e = function () {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return Date.prototype.toString.call(Reflect.construct(Date, [], (function () {}))), !0
          } catch (t) {
            return !1
          }
        }();
        return function () {
          var i, s = h(t);
          if (e) {
            var n = h(this).constructor;
            i = Reflect.construct(s, arguments, n)
          } else i = s.apply(this, arguments);
          return f(this, i)
        }
      }

      function m(t, e, i) {
        return m = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function (t, e, i) {
          var s = function (t, e) {
            for (; !Object.prototype.hasOwnProperty.call(t, e) && null !== (t = h(t)););
            return t
          }(t, e);
          if (s) {
            var n = Object.getOwnPropertyDescriptor(s, e);
            return n.get ? n.get.call(i) : n.value
          }
        }, m(t, e, i || t)
      }

      function v(t, e) {
        return function (t) {
          if (Array.isArray(t)) return t
        }(t) || function (t, e) {
          if ("undefined" != typeof Symbol && Symbol.iterator in Object(t)) {
            var i = [],
              s = !0,
              n = !1,
              o = void 0;
            try {
              for (var l, r = t[Symbol.iterator](); !(s = (l = r.next()).done) && (i.push(l.value), !e || i.length !== e); s = !0);
            } catch (t) {
              n = !0, o = t
            } finally {
              try {
                s || null == r.return || r.return()
              } finally {
                if (n) throw o
              }
            }
            return i
          }
        }(t, e) || b(t, e) || function () {
          throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
      }

      function y(t) {
        return function (t) {
          if (Array.isArray(t)) return g(t)
        }(t) || function (t) {
          if ("undefined" != typeof Symbol && Symbol.iterator in Object(t)) return Array.from(t)
        }(t) || b(t) || function () {
          throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
      }

      function b(t, e) {
        if (t) {
          if ("string" == typeof t) return g(t, e);
          var i = Object.prototype.toString.call(t).slice(8, -1);
          return "Object" === i && t.constructor && (i = t.constructor.name), "Map" === i || "Set" === i ? Array.from(t) : "Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i) ? g(t, e) : void 0
        }
      }

      function g(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var i = 0, s = new Array(e); i < e; i++) s[i] = t[i];
        return s
      }
      i.d(e, {
        ZP: () => rt
      });
      var w = {
          el: document,
          name: "scroll",
          offset: [0, 0],
          repeat: !1,
          smooth: !1,
          initPosition: {
            x: 0,
            y: 0
          },
          direction: "vertical",
          gestureDirection: "vertical",
          reloadOnContextChange: !1,
          lerp: .1,
          class: "is-inview",
          scrollbarContainer: !1,
          scrollbarClass: "c-scrollbar",
          scrollingClass: "has-scroll-scrolling",
          draggingClass: "has-scroll-dragging",
          smoothClass: "has-scroll-smooth",
          initClass: "has-scroll-init",
          getSpeed: !1,
          getDirection: !1,
          scrollFromAnywhere: !1,
          multiplier: 1,
          firefoxMultiplier: 50,
          touchMultiplier: 2,
          resetNativeScroll: !0,
          tablet: {
            smooth: !1,
            direction: "vertical",
            gestureDirection: "vertical",
            breakpoint: 1024
          },
          smartphone: {
            smooth: !1,
            direction: "vertical",
            gestureDirection: "vertical"
          }
        },
        S = function () {
          function t() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            s(this, t), Object.assign(this, w, e), this.smartphone = w.smartphone, e.smartphone && Object.assign(this.smartphone, e.smartphone), this.tablet = w.tablet, e.tablet && Object.assign(this.tablet, e.tablet), this.namespace = "locomotive", this.html = document.documentElement, this.windowHeight = window.innerHeight, this.windowWidth = window.innerWidth, this.windowMiddle = {
              x: this.windowWidth / 2,
              y: this.windowHeight / 2
            }, this.els = {}, this.currentElements = {}, this.listeners = {}, this.hasScrollTicking = !1, this.hasCallEventSet = !1, this.checkScroll = this.checkScroll.bind(this), this.checkResize = this.checkResize.bind(this), this.checkEvent = this.checkEvent.bind(this), this.instance = {
              scroll: {
                x: 0,
                y: 0
              },
              limit: {
                x: this.html.offsetWidth,
                y: this.html.offsetHeight
              },
              currentElements: this.currentElements
            }, this.isMobile ? this.isTablet ? this.context = "tablet" : this.context = "smartphone" : this.context = "desktop", this.isMobile && (this.direction = this[this.context].direction), "horizontal" === this.direction ? this.directionAxis = "x" : this.directionAxis = "y", this.getDirection && (this.instance.direction = null), this.getDirection && (this.instance.speed = 0), this.html.classList.add(this.initClass), window.addEventListener("resize", this.checkResize, !1)
          }
          return o(t, [{
            key: "init",
            value: function () {
              this.initEvents()
            }
          }, {
            key: "checkScroll",
            value: function () {
              this.dispatchScroll()
            }
          }, {
            key: "checkResize",
            value: function () {
              var t = this;
              this.resizeTick || (this.resizeTick = !0, requestAnimationFrame((function () {
                t.resize(), t.resizeTick = !1
              })))
            }
          }, {
            key: "resize",
            value: function () {}
          }, {
            key: "checkContext",
            value: function () {
              if (this.reloadOnContextChange) {
                this.isMobile = /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || "MacIntel" === navigator.platform && navigator.maxTouchPoints > 1 || this.windowWidth < this.tablet.breakpoint, this.isTablet = this.isMobile && this.windowWidth >= this.tablet.breakpoint;
                var t = this.context;
                this.isMobile ? this.isTablet ? this.context = "tablet" : this.context = "smartphone" : this.context = "desktop", t != this.context && ("desktop" == t ? this.smooth : this[t].smooth) != ("desktop" == this.context ? this.smooth : this[this.context].smooth) && window.location.reload()
              }
            }
          }, {
            key: "initEvents",
            value: function () {
              var t = this;
              this.scrollToEls = this.el.querySelectorAll("[data-".concat(this.name, "-to]")), this.setScrollTo = this.setScrollTo.bind(this), this.scrollToEls.forEach((function (e) {
                e.addEventListener("click", t.setScrollTo, !1)
              }))
            }
          }, {
            key: "setScrollTo",
            value: function (t) {
              t.preventDefault(), this.scrollTo(t.currentTarget.getAttribute("data-".concat(this.name, "-href")) || t.currentTarget.getAttribute("href"), {
                offset: t.currentTarget.getAttribute("data-".concat(this.name, "-offset"))
              })
            }
          }, {
            key: "addElements",
            value: function () {}
          }, {
            key: "detectElements",
            value: function (t) {
              var e = this,
                i = this.instance.scroll.y,
                s = i + this.windowHeight,
                n = this.instance.scroll.x,
                o = n + this.windowWidth;
              Object.entries(this.els).forEach((function (l) {
                var r = v(l, 2),
                  a = r[0],
                  c = r[1];
                if (!c || c.inView && !t || ("horizontal" === e.direction ? o >= c.left && n < c.right && e.setInView(c, a) : s >= c.top && i < c.bottom && e.setInView(c, a)), c && c.inView)
                  if ("horizontal" === e.direction) {
                    var h = c.right - c.left;
                    c.progress = (e.instance.scroll.x - (c.left - e.windowWidth)) / (h + e.windowWidth), (o < c.left || n > c.right) && e.setOutOfView(c, a)
                  } else {
                    var d = c.bottom - c.top;
                    c.progress = (e.instance.scroll.y - (c.top - e.windowHeight)) / (d + e.windowHeight), (s < c.top || i > c.bottom) && e.setOutOfView(c, a)
                  }
              })), this.hasScrollTicking = !1
            }
          }, {
            key: "setInView",
            value: function (t, e) {
              this.els[e].inView = !0, t.el.classList.add(t.class), this.currentElements[e] = t, t.call && this.hasCallEventSet && (this.dispatchCall(t, "enter"), t.repeat || (this.els[e].call = !1))
            }
          }, {
            key: "setOutOfView",
            value: function (t, e) {
              var i = this;
              this.els[e].inView = !1, Object.keys(this.currentElements).forEach((function (t) {
                t === e && delete i.currentElements[t]
              })), t.call && this.hasCallEventSet && this.dispatchCall(t, "exit"), t.repeat && t.el.classList.remove(t.class)
            }
          }, {
            key: "dispatchCall",
            value: function (t, e) {
              this.callWay = e, this.callValue = t.call.split(",").map((function (t) {
                return t.trim()
              })), this.callObj = t, 1 == this.callValue.length && (this.callValue = this.callValue[0]);
              var i = new Event(this.namespace + "call");
              this.el.dispatchEvent(i)
            }
          }, {
            key: "dispatchScroll",
            value: function () {
              var t = new Event(this.namespace + "scroll");
              this.el.dispatchEvent(t)
            }
          }, {
            key: "setEvents",
            value: function (t, e) {
              this.listeners[t] || (this.listeners[t] = []);
              var i = this.listeners[t];
              i.push(e), 1 === i.length && this.el.addEventListener(this.namespace + t, this.checkEvent, !1), "call" === t && (this.hasCallEventSet = !0, this.detectElements(!0))
            }
          }, {
            key: "unsetEvents",
            value: function (t, e) {
              if (this.listeners[t]) {
                var i = this.listeners[t],
                  s = i.indexOf(e);
                s < 0 || (i.splice(s, 1), 0 === i.index && this.el.removeEventListener(this.namespace + t, this.checkEvent, !1))
              }
            }
          }, {
            key: "checkEvent",
            value: function (t) {
              var e = this,
                i = t.type.replace(this.namespace, ""),
                s = this.listeners[i];
              s && 0 !== s.length && s.forEach((function (t) {
                switch (i) {
                  case "scroll":
                    return t(e.instance);
                  case "call":
                    return t(e.callValue, e.callWay, e.callObj);
                  default:
                    return t()
                }
              }))
            }
          }, {
            key: "startScroll",
            value: function () {}
          }, {
            key: "stopScroll",
            value: function () {}
          }, {
            key: "setScroll",
            value: function (t, e) {
              this.instance.scroll = {
                x: 0,
                y: 0
              }
            }
          }, {
            key: "destroy",
            value: function () {
              var t = this;
              window.removeEventListener("resize", this.checkResize, !1), Object.keys(this.listeners).forEach((function (e) {
                t.el.removeEventListener(t.namespace + e, t.checkEvent, !1)
              })), this.listeners = {}, this.scrollToEls.forEach((function (e) {
                e.removeEventListener("click", t.setScrollTo, !1)
              })), this.html.classList.remove(this.initClass)
            }
          }]), t
        }(),
        x = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : void 0 !== i.g ? i.g : "undefined" != typeof self ? self : {};

      function k(t, e) {
        return t(e = {
          exports: {}
        }, e.exports), e.exports
      }
      var T = k((function (t, e) {
          t.exports = {
            polyfill: function () {
              var t = window,
                e = document;
              if (!("scrollBehavior" in e.documentElement.style) || !0 === t.__forceSmoothScrollPolyfill__) {
                var i, s = t.HTMLElement || t.Element,
                  n = {
                    scroll: t.scroll || t.scrollTo,
                    scrollBy: t.scrollBy,
                    elementScroll: s.prototype.scroll || r,
                    scrollIntoView: s.prototype.scrollIntoView
                  },
                  o = t.performance && t.performance.now ? t.performance.now.bind(t.performance) : Date.now,
                  l = (i = t.navigator.userAgent, new RegExp(["MSIE ", "Trident/", "Edge/"].join("|")).test(i) ? 1 : 0);
                t.scroll = t.scrollTo = function () {
                  void 0 !== arguments[0] && (!0 !== a(arguments[0]) ? p.call(t, e.body, void 0 !== arguments[0].left ? ~~arguments[0].left : t.scrollX || t.pageXOffset, void 0 !== arguments[0].top ? ~~arguments[0].top : t.scrollY || t.pageYOffset) : n.scroll.call(t, void 0 !== arguments[0].left ? arguments[0].left : "object" != typeof arguments[0] ? arguments[0] : t.scrollX || t.pageXOffset, void 0 !== arguments[0].top ? arguments[0].top : void 0 !== arguments[1] ? arguments[1] : t.scrollY || t.pageYOffset))
                }, t.scrollBy = function () {
                  void 0 !== arguments[0] && (a(arguments[0]) ? n.scrollBy.call(t, void 0 !== arguments[0].left ? arguments[0].left : "object" != typeof arguments[0] ? arguments[0] : 0, void 0 !== arguments[0].top ? arguments[0].top : void 0 !== arguments[1] ? arguments[1] : 0) : p.call(t, e.body, ~~arguments[0].left + (t.scrollX || t.pageXOffset), ~~arguments[0].top + (t.scrollY || t.pageYOffset)))
                }, s.prototype.scroll = s.prototype.scrollTo = function () {
                  if (void 0 !== arguments[0])
                    if (!0 !== a(arguments[0])) {
                      var t = arguments[0].left,
                        e = arguments[0].top;
                      p.call(this, this, void 0 === t ? this.scrollLeft : ~~t, void 0 === e ? this.scrollTop : ~~e)
                    } else {
                      if ("number" == typeof arguments[0] && void 0 === arguments[1]) throw new SyntaxError("Value could not be converted");
                      n.elementScroll.call(this, void 0 !== arguments[0].left ? ~~arguments[0].left : "object" != typeof arguments[0] ? ~~arguments[0] : this.scrollLeft, void 0 !== arguments[0].top ? ~~arguments[0].top : void 0 !== arguments[1] ? ~~arguments[1] : this.scrollTop)
                    }
                }, s.prototype.scrollBy = function () {
                  void 0 !== arguments[0] && (!0 !== a(arguments[0]) ? this.scroll({
                    left: ~~arguments[0].left + this.scrollLeft,
                    top: ~~arguments[0].top + this.scrollTop,
                    behavior: arguments[0].behavior
                  }) : n.elementScroll.call(this, void 0 !== arguments[0].left ? ~~arguments[0].left + this.scrollLeft : ~~arguments[0] + this.scrollLeft, void 0 !== arguments[0].top ? ~~arguments[0].top + this.scrollTop : ~~arguments[1] + this.scrollTop))
                }, s.prototype.scrollIntoView = function () {
                  if (!0 !== a(arguments[0])) {
                    var i = u(this),
                      s = i.getBoundingClientRect(),
                      o = this.getBoundingClientRect();
                    i !== e.body ? (p.call(this, i, i.scrollLeft + o.left - s.left, i.scrollTop + o.top - s.top), "fixed" !== t.getComputedStyle(i).position && t.scrollBy({
                      left: s.left,
                      top: s.top,
                      behavior: "smooth"
                    })) : t.scrollBy({
                      left: o.left,
                      top: o.top,
                      behavior: "smooth"
                    })
                  } else n.scrollIntoView.call(this, void 0 === arguments[0] || arguments[0])
                }
              }

              function r(t, e) {
                this.scrollLeft = t, this.scrollTop = e
              }

              function a(t) {
                if (null === t || "object" != typeof t || void 0 === t.behavior || "auto" === t.behavior || "instant" === t.behavior) return !0;
                if ("object" == typeof t && "smooth" === t.behavior) return !1;
                throw new TypeError("behavior member of ScrollOptions " + t.behavior + " is not a valid value for enumeration ScrollBehavior.")
              }

              function c(t, e) {
                return "Y" === e ? t.clientHeight + l < t.scrollHeight : "X" === e ? t.clientWidth + l < t.scrollWidth : void 0
              }

              function h(e, i) {
                var s = t.getComputedStyle(e, null)["overflow" + i];
                return "auto" === s || "scroll" === s
              }

              function d(t) {
                var e = c(t, "Y") && h(t, "Y"),
                  i = c(t, "X") && h(t, "X");
                return e || i
              }

              function u(t) {
                for (; t !== e.body && !1 === d(t);) t = t.parentNode || t.host;
                return t
              }

              function f(e) {
                var i, s, n, l, r = (o() - e.startTime) / 468;
                l = r = r > 1 ? 1 : r, i = .5 * (1 - Math.cos(Math.PI * l)), s = e.startX + (e.x - e.startX) * i, n = e.startY + (e.y - e.startY) * i, e.method.call(e.scrollable, s, n), s === e.x && n === e.y || t.requestAnimationFrame(f.bind(t, e))
              }

              function p(i, s, l) {
                var a, c, h, d, u = o();
                i === e.body ? (a = t, c = t.scrollX || t.pageXOffset, h = t.scrollY || t.pageYOffset, d = n.scroll) : (a = i, c = i.scrollLeft, h = i.scrollTop, d = r), f({
                  scrollable: a,
                  method: d,
                  startTime: u,
                  startX: c,
                  startY: h,
                  x: s,
                  y: l
                })
              }
            }
          }
        })),
        E = (T.polyfill, function (t) {
          c(i, t);
          var e = p(i);

          function i() {
            var t, n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            return s(this, i), (t = e.call(this, n)).resetNativeScroll && (history.scrollRestoration && (history.scrollRestoration = "manual"), window.scrollTo(0, 0)), window.addEventListener("scroll", t.checkScroll, !1), void 0 === window.smoothscrollPolyfill && (window.smoothscrollPolyfill = T, window.smoothscrollPolyfill.polyfill()), t
          }
          return o(i, [{
            key: "init",
            value: function () {
              this.instance.scroll.y = window.pageYOffset, this.addElements(), this.detectElements(), m(h(i.prototype), "init", this).call(this)
            }
          }, {
            key: "checkScroll",
            value: function () {
              var t = this;
              m(h(i.prototype), "checkScroll", this).call(this), this.getDirection && this.addDirection(), this.getSpeed && (this.addSpeed(), this.speedTs = Date.now()), this.instance.scroll.y = window.pageYOffset, Object.entries(this.els).length && (this.hasScrollTicking || (requestAnimationFrame((function () {
                t.detectElements()
              })), this.hasScrollTicking = !0))
            }
          }, {
            key: "addDirection",
            value: function () {
              window.pageYOffset > this.instance.scroll.y ? "down" !== this.instance.direction && (this.instance.direction = "down") : window.pageYOffset < this.instance.scroll.y && "up" !== this.instance.direction && (this.instance.direction = "up")
            }
          }, {
            key: "addSpeed",
            value: function () {
              window.pageYOffset != this.instance.scroll.y ? this.instance.speed = (window.pageYOffset - this.instance.scroll.y) / Math.max(1, Date.now() - this.speedTs) : this.instance.speed = 0
            }
          }, {
            key: "resize",
            value: function () {
              Object.entries(this.els).length && (this.windowHeight = window.innerHeight, this.updateElements())
            }
          }, {
            key: "addElements",
            value: function () {
              var t = this;
              this.els = {}, this.el.querySelectorAll("[data-" + this.name + "]").forEach((function (e, i) {
                e.getBoundingClientRect();
                var s, n, o, l = e.dataset[t.name + "Class"] || t.class,
                  r = "string" == typeof e.dataset[t.name + "Id"] ? e.dataset[t.name + "Id"] : i,
                  a = "string" == typeof e.dataset[t.name + "Offset"] ? e.dataset[t.name + "Offset"].split(",") : t.offset,
                  c = e.dataset[t.name + "Repeat"],
                  h = e.dataset[t.name + "Call"],
                  d = e.dataset[t.name + "Target"],
                  u = (o = void 0 !== d ? document.querySelector("".concat(d)) : e).getBoundingClientRect();
                s = u.top + t.instance.scroll.y, n = u.left + t.instance.scroll.x;
                var f = s + o.offsetHeight,
                  p = n + o.offsetWidth;
                c = "false" != c && (null != c || t.repeat);
                var m = t.getRelativeOffset(a),
                  v = {
                    el: e,
                    targetEl: o,
                    id: r,
                    class: l,
                    top: s += m[0],
                    bottom: f -= m[1],
                    left: n,
                    right: p,
                    offset: a,
                    progress: 0,
                    repeat: c,
                    inView: !1,
                    call: h
                  };
                t.els[r] = v, e.classList.contains(l) && t.setInView(t.els[r], r)
              }))
            }
          }, {
            key: "updateElements",
            value: function () {
              var t = this;
              Object.entries(this.els).forEach((function (e) {
                var i = v(e, 2),
                  s = i[0],
                  n = i[1],
                  o = n.targetEl.getBoundingClientRect().top + t.instance.scroll.y,
                  l = o + n.targetEl.offsetHeight,
                  r = t.getRelativeOffset(n.offset);
                t.els[s].top = o + r[0], t.els[s].bottom = l - r[1]
              })), this.hasScrollTicking = !1
            }
          }, {
            key: "getRelativeOffset",
            value: function (t) {
              var e = [0, 0];
              if (t)
                for (var i = 0; i < t.length; i++) "string" == typeof t[i] ? t[i].includes("%") ? e[i] = parseInt(t[i].replace("%", "") * this.windowHeight / 100) : e[i] = parseInt(t[i]) : e[i] = t[i];
              return e
            }
          }, {
            key: "scrollTo",
            value: function (t) {
              var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                i = parseInt(e.offset) || 0,
                s = !!e.callback && e.callback;
              if ("string" == typeof t) {
                if ("top" === t) t = this.html;
                else if ("bottom" === t) t = this.html.offsetHeight - window.innerHeight;
                else if (!(t = document.querySelector(t))) return
              } else if ("number" == typeof t) t = parseInt(t);
              else if (!t || !t.tagName) return void console.warn("`target` parameter is not valid");
              i = "number" != typeof t ? t.getBoundingClientRect().top + i + this.instance.scroll.y : t + i;
              var n = function () {
                return parseInt(window.pageYOffset) === parseInt(i)
              };
              if (s) {
                if (n()) return void s();
                var o = function t() {
                  n() && (window.removeEventListener("scroll", t), s())
                };
                window.addEventListener("scroll", o)
              }
              window.scrollTo({
                top: i,
                behavior: 0 === e.duration ? "auto" : "smooth"
              })
            }
          }, {
            key: "update",
            value: function () {
              this.addElements(), this.detectElements()
            }
          }, {
            key: "destroy",
            value: function () {
              m(h(i.prototype), "destroy", this).call(this), window.removeEventListener("scroll", this.checkScroll, !1)
            }
          }]), i
        }(S)),
        A = Object.getOwnPropertySymbols,
        O = Object.prototype.hasOwnProperty,
        C = Object.prototype.propertyIsEnumerable;

      function D(t) {
        if (null == t) throw new TypeError("Object.assign cannot be called with null or undefined");
        return Object(t)
      }
      var L = function () {
        try {
          if (!Object.assign) return !1;
          var t = new String("abc");
          if (t[5] = "de", "5" === Object.getOwnPropertyNames(t)[0]) return !1;
          for (var e = {}, i = 0; i < 10; i++) e["_" + String.fromCharCode(i)] = i;
          if ("0123456789" !== Object.getOwnPropertyNames(e).map((function (t) {
              return e[t]
            })).join("")) return !1;
          var s = {};
          return "abcdefghijklmnopqrst".split("").forEach((function (t) {
            s[t] = t
          })), "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, s)).join("")
        } catch (t) {
          return !1
        }
      }() ? Object.assign : function (t, e) {
        for (var i, s, n = D(t), o = 1; o < arguments.length; o++) {
          for (var l in i = Object(arguments[o])) O.call(i, l) && (n[l] = i[l]);
          if (A) {
            s = A(i);
            for (var r = 0; r < s.length; r++) C.call(i, s[r]) && (n[s[r]] = i[s[r]])
          }
        }
        return n
      };

      function M() {}
      M.prototype = {
        on: function (t, e, i) {
          var s = this.e || (this.e = {});
          return (s[t] || (s[t] = [])).push({
            fn: e,
            ctx: i
          }), this
        },
        once: function (t, e, i) {
          var s = this;

          function n() {
            s.off(t, n), e.apply(i, arguments)
          }
          return n._ = e, this.on(t, n, i)
        },
        emit: function (t) {
          for (var e = [].slice.call(arguments, 1), i = ((this.e || (this.e = {}))[t] || []).slice(), s = 0, n = i.length; s < n; s++) i[s].fn.apply(i[s].ctx, e);
          return this
        },
        off: function (t, e) {
          var i = this.e || (this.e = {}),
            s = i[t],
            n = [];
          if (s && e)
            for (var o = 0, l = s.length; o < l; o++) s[o].fn !== e && s[o].fn._ !== e && n.push(s[o]);
          return n.length ? i[t] = n : delete i[t], this
        }
      };
      var j = M,
        _ = k((function (t, e) {
          (function () {
            (null !== e ? e : this).Lethargy = function () {
              function t(t, e, i, s) {
                this.stability = null != t ? Math.abs(t) : 8, this.sensitivity = null != e ? 1 + Math.abs(e) : 100, this.tolerance = null != i ? 1 + Math.abs(i) : 1.1, this.delay = null != s ? s : 150, this.lastUpDeltas = function () {
                  var t, e, i;
                  for (i = [], t = 1, e = 2 * this.stability; 1 <= e ? t <= e : t >= e; 1 <= e ? t++ : t--) i.push(null);
                  return i
                }.call(this), this.lastDownDeltas = function () {
                  var t, e, i;
                  for (i = [], t = 1, e = 2 * this.stability; 1 <= e ? t <= e : t >= e; 1 <= e ? t++ : t--) i.push(null);
                  return i
                }.call(this), this.deltasTimestamp = function () {
                  var t, e, i;
                  for (i = [], t = 1, e = 2 * this.stability; 1 <= e ? t <= e : t >= e; 1 <= e ? t++ : t--) i.push(null);
                  return i
                }.call(this)
              }
              return t.prototype.check = function (t) {
                var e;
                return null != (t = t.originalEvent || t).wheelDelta ? e = t.wheelDelta : null != t.deltaY ? e = -40 * t.deltaY : null == t.detail && 0 !== t.detail || (e = -40 * t.detail), this.deltasTimestamp.push(Date.now()), this.deltasTimestamp.shift(), e > 0 ? (this.lastUpDeltas.push(e), this.lastUpDeltas.shift(), this.isInertia(1)) : (this.lastDownDeltas.push(e), this.lastDownDeltas.shift(), this.isInertia(-1))
              }, t.prototype.isInertia = function (t) {
                var e, i, s, n, o, l, r;
                return null === (e = -1 === t ? this.lastDownDeltas : this.lastUpDeltas)[0] ? t : !(this.deltasTimestamp[2 * this.stability - 2] + this.delay > Date.now() && e[0] === e[2 * this.stability - 1]) && (s = e.slice(0, this.stability), i = e.slice(this.stability, 2 * this.stability), r = s.reduce((function (t, e) {
                  return t + e
                })), o = i.reduce((function (t, e) {
                  return t + e
                })), l = r / s.length, n = o / i.length, Math.abs(l) < Math.abs(n * this.tolerance) && this.sensitivity < Math.abs(n) && t)
              }, t.prototype.showLastUpDeltas = function () {
                return this.lastUpDeltas
              }, t.prototype.showLastDownDeltas = function () {
                return this.lastDownDeltas
              }, t
            }()
          }).call(x)
        })),
        B = "onwheel" in document,
        H = "onmousewheel" in document,
        R = "ontouchstart" in window || window.TouchEvent || window.DocumentTouch && document instanceof DocumentTouch,
        W = navigator.msMaxTouchPoints && navigator.msMaxTouchPoints > 1,
        Y = !!window.navigator.msPointerEnabled,
        P = "onkeydown" in document,
        I = navigator.userAgent.indexOf("Firefox") > -1,
        z = Object.prototype.toString,
        X = Object.prototype.hasOwnProperty;

      function V(t, e) {
        return function () {
          return t.apply(e, arguments)
        }
      }
      var F = _.Lethargy,
        q = "virtualscroll",
        K = N;

      function N(t) {
        ! function (t) {
          if (!t) return console.warn("bindAll requires at least one argument.");
          var e = Array.prototype.slice.call(arguments, 1);
          if (0 === e.length)
            for (var i in t) X.call(t, i) && "function" == typeof t[i] && "[object Function]" == z.call(t[i]) && e.push(i);
          for (var s = 0; s < e.length; s++) {
            var n = e[s];
            t[n] = V(t[n], t)
          }
        }(this, "_onWheel", "_onMouseWheel", "_onTouchStart", "_onTouchMove", "_onKeyDown"), this.el = window, t && t.el && (this.el = t.el, delete t.el), this.options = L({
          mouseMultiplier: 1,
          touchMultiplier: 2,
          firefoxMultiplier: 15,
          keyStep: 120,
          preventTouch: !1,
          unpreventTouchClass: "vs-touchmove-allowed",
          limitInertia: !1,
          useKeyboard: !0,
          useTouch: !0
        }, t), this.options.limitInertia && (this._lethargy = new F), this._emitter = new j, this._event = {
          y: 0,
          x: 0,
          deltaX: 0,
          deltaY: 0
        }, this.touchStartX = null, this.touchStartY = null, this.bodyTouchAction = null, void 0 !== this.options.passive && (this.listenerOptions = {
          passive: this.options.passive
        })
      }

      function U(t, e, i) {
        return (1 - i) * t + i * e
      }

      function $(t) {
        var e = {};
        if (window.getComputedStyle) {
          var i = getComputedStyle(t),
            s = i.transform || i.webkitTransform || i.mozTransform,
            n = s.match(/^matrix3d\((.+)\)$/);
          return n ? (e.x = n ? parseFloat(n[1].split(", ")[12]) : 0, e.y = n ? parseFloat(n[1].split(", ")[13]) : 0) : (n = s.match(/^matrix\((.+)\)$/), e.x = n ? parseFloat(n[1].split(", ")[4]) : 0, e.y = n ? parseFloat(n[1].split(", ")[5]) : 0), e
        }
      }

      function Z(t) {
        for (var e = []; t && t !== document; t = t.parentNode) e.push(t);
        return e
      }
      N.prototype._notify = function (t) {
        var e = this._event;
        e.x += e.deltaX, e.y += e.deltaY, this._emitter.emit(q, {
          x: e.x,
          y: e.y,
          deltaX: e.deltaX,
          deltaY: e.deltaY,
          originalEvent: t
        })
      }, N.prototype._onWheel = function (t) {
        var e = this.options;
        if (!this._lethargy || !1 !== this._lethargy.check(t)) {
          var i = this._event;
          i.deltaX = t.wheelDeltaX || -1 * t.deltaX, i.deltaY = t.wheelDeltaY || -1 * t.deltaY, I && 1 == t.deltaMode && (i.deltaX *= e.firefoxMultiplier, i.deltaY *= e.firefoxMultiplier), i.deltaX *= e.mouseMultiplier, i.deltaY *= e.mouseMultiplier, this._notify(t)
        }
      }, N.prototype._onMouseWheel = function (t) {
        if (!this.options.limitInertia || !1 !== this._lethargy.check(t)) {
          var e = this._event;
          e.deltaX = t.wheelDeltaX ? t.wheelDeltaX : 0, e.deltaY = t.wheelDeltaY ? t.wheelDeltaY : t.wheelDelta, this._notify(t)
        }
      }, N.prototype._onTouchStart = function (t) {
        var e = t.targetTouches ? t.targetTouches[0] : t;
        this.touchStartX = e.pageX, this.touchStartY = e.pageY
      }, N.prototype._onTouchMove = function (t) {
        var e = this.options;
        e.preventTouch && !t.target.classList.contains(e.unpreventTouchClass) && t.preventDefault();
        var i = this._event,
          s = t.targetTouches ? t.targetTouches[0] : t;
        i.deltaX = (s.pageX - this.touchStartX) * e.touchMultiplier, i.deltaY = (s.pageY - this.touchStartY) * e.touchMultiplier, this.touchStartX = s.pageX, this.touchStartY = s.pageY, this._notify(t)
      }, N.prototype._onKeyDown = function (t) {
        var e = this._event;
        e.deltaX = e.deltaY = 0;
        var i = window.innerHeight - 40;
        switch (t.keyCode) {
          case 37:
          case 38:
            e.deltaY = this.options.keyStep;
            break;
          case 39:
          case 40:
            e.deltaY = -this.options.keyStep;
            break;
          case t.shiftKey:
            e.deltaY = i;
            break;
          case 32:
            e.deltaY = -i;
            break;
          default:
            return
        }
        this._notify(t)
      }, N.prototype._bind = function () {
        B && this.el.addEventListener("wheel", this._onWheel, this.listenerOptions), H && this.el.addEventListener("mousewheel", this._onMouseWheel, this.listenerOptions), R && this.options.useTouch && (this.el.addEventListener("touchstart", this._onTouchStart, this.listenerOptions), this.el.addEventListener("touchmove", this._onTouchMove, this.listenerOptions)), Y && W && (this.bodyTouchAction = document.body.style.msTouchAction, document.body.style.msTouchAction = "none", this.el.addEventListener("MSPointerDown", this._onTouchStart, !0), this.el.addEventListener("MSPointerMove", this._onTouchMove, !0)), P && this.options.useKeyboard && document.addEventListener("keydown", this._onKeyDown)
      }, N.prototype._unbind = function () {
        B && this.el.removeEventListener("wheel", this._onWheel), H && this.el.removeEventListener("mousewheel", this._onMouseWheel), R && (this.el.removeEventListener("touchstart", this._onTouchStart), this.el.removeEventListener("touchmove", this._onTouchMove)), Y && W && (document.body.style.msTouchAction = this.bodyTouchAction, this.el.removeEventListener("MSPointerDown", this._onTouchStart, !0), this.el.removeEventListener("MSPointerMove", this._onTouchMove, !0)), P && this.options.useKeyboard && document.removeEventListener("keydown", this._onKeyDown)
      }, N.prototype.on = function (t, e) {
        this._emitter.on(q, t, e);
        var i = this._emitter.e;
        i && i[q] && 1 === i[q].length && this._bind()
      }, N.prototype.off = function (t, e) {
        this._emitter.off(q, t, e);
        var i = this._emitter.e;
        (!i[q] || i[q].length <= 0) && this._unbind()
      }, N.prototype.reset = function () {
        var t = this._event;
        t.x = 0, t.y = 0
      }, N.prototype.destroy = function () {
        this._emitter.off(), this._unbind()
      };
      var G = .1,
        J = "function" == typeof Float32Array;

      function Q(t, e) {
        return 1 - 3 * e + 3 * t
      }

      function tt(t, e) {
        return 3 * e - 6 * t
      }

      function et(t) {
        return 3 * t
      }

      function it(t, e, i) {
        return ((Q(e, i) * t + tt(e, i)) * t + et(e)) * t
      }

      function st(t, e, i) {
        return 3 * Q(e, i) * t * t + 2 * tt(e, i) * t + et(e)
      }

      function nt(t) {
        return t
      }
      var ot = function (t, e, i, s) {
          if (!(0 <= t && t <= 1 && 0 <= i && i <= 1)) throw new Error("bezier x values must be in [0, 1] range");
          if (t === e && i === s) return nt;
          for (var n = J ? new Float32Array(11) : new Array(11), o = 0; o < 11; ++o) n[o] = it(o * G, t, i);
          return function (o) {
            return 0 === o ? 0 : 1 === o ? 1 : it(function (e) {
              for (var s = 0, o = 1; 10 !== o && n[o] <= e; ++o) s += G;
              --o;
              var l = s + (e - n[o]) / (n[o + 1] - n[o]) * G,
                r = st(l, t, i);
              return r >= .001 ? function (t, e, i, s) {
                for (var n = 0; n < 4; ++n) {
                  var o = st(e, i, s);
                  if (0 === o) return e;
                  e -= (it(e, i, s) - t) / o
                }
                return e
              }(e, l, t, i) : 0 === r ? l : function (t, e, i, s, n) {
                var o, l, r = 0;
                do {
                  (o = it(l = e + (i - e) / 2, s, n) - t) > 0 ? i = l : e = l
                } while (Math.abs(o) > 1e-7 && ++r < 10);
                return l
              }(e, s, s + G, t, i)
            }(o), e, s)
          }
        },
        lt = function (t) {
          c(i, t);
          var e = p(i);

          function i() {
            var t, n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            return s(this, i), history.scrollRestoration && (history.scrollRestoration = "manual"), window.scrollTo(0, 0), (t = e.call(this, n)).inertia && (t.lerp = .1 * t.inertia), t.isScrolling = !1, t.isDraggingScrollbar = !1, t.isTicking = !1, t.hasScrollTicking = !1, t.parallaxElements = {}, t.stop = !1, t.scrollbarContainer = n.scrollbarContainer, t.checkKey = t.checkKey.bind(u(t)), window.addEventListener("keydown", t.checkKey, !1), t
          }
          return o(i, [{
            key: "init",
            value: function () {
              var t = this;
              this.html.classList.add(this.smoothClass), this.html.setAttribute("data-".concat(this.name, "-direction"), this.direction), this.instance = a({
                delta: {
                  x: this.initPosition.x,
                  y: this.initPosition.y
                },
                scroll: {
                  x: this.initPosition.x,
                  y: this.initPosition.y
                }
              }, this.instance), this.vs = new K({
                el: this.scrollFromAnywhere ? document : this.el,
                mouseMultiplier: navigator.platform.indexOf("Win") > -1 ? 1 : .4,
                firefoxMultiplier: this.firefoxMultiplier,
                touchMultiplier: this.touchMultiplier,
                useKeyboard: !1,
                passive: !0
              }), this.vs.on((function (e) {
                t.stop || t.isDraggingScrollbar || requestAnimationFrame((function () {
                  t.updateDelta(e), t.isScrolling || t.startScrolling()
                }))
              })), this.setScrollLimit(), this.initScrollBar(), this.addSections(), this.addElements(), this.checkScroll(!0), this.transformElements(!0, !0), m(h(i.prototype), "init", this).call(this)
            }
          }, {
            key: "setScrollLimit",
            value: function () {
              if (this.instance.limit.y = this.el.offsetHeight - this.windowHeight, "horizontal" === this.direction) {
                for (var t = 0, e = this.el.children, i = 0; i < e.length; i++) t += e[i].offsetWidth;
                this.instance.limit.x = t - this.windowWidth
              }
            }
          }, {
            key: "startScrolling",
            value: function () {
              this.startScrollTs = Date.now(), this.isScrolling = !0, this.checkScroll(), this.html.classList.add(this.scrollingClass)
            }
          }, {
            key: "stopScrolling",
            value: function () {
              cancelAnimationFrame(this.checkScrollRaf), this.startScrollTs = void 0, this.scrollToRaf && (cancelAnimationFrame(this.scrollToRaf), this.scrollToRaf = null), this.isScrolling = !1, this.instance.scroll.y = Math.round(this.instance.scroll.y), this.html.classList.remove(this.scrollingClass)
            }
          }, {
            key: "checkKey",
            value: function (t) {
              var e = this;
              if (this.stop) 9 == t.keyCode && requestAnimationFrame((function () {
                e.html.scrollTop = 0, document.body.scrollTop = 0, e.html.scrollLeft = 0, document.body.scrollLeft = 0
              }));
              else {
                switch (t.keyCode) {
                  case 9:
                    requestAnimationFrame((function () {
                      e.html.scrollTop = 0, document.body.scrollTop = 0, e.html.scrollLeft = 0, document.body.scrollLeft = 0, e.scrollTo(document.activeElement, {
                        offset: -window.innerHeight / 2
                      })
                    }));
                    break;
                  case 38:
                    this.isActiveElementScrollSensitive() && (this.instance.delta[this.directionAxis] -= 240);
                    break;
                  case 40:
                    this.isActiveElementScrollSensitive() && (this.instance.delta[this.directionAxis] += 240);
                    break;
                  case 33:
                    this.instance.delta[this.directionAxis] -= window.innerHeight;
                    break;
                  case 34:
                    this.instance.delta[this.directionAxis] += window.innerHeight;
                    break;
                  case 36:
                    this.instance.delta[this.directionAxis] -= this.instance.limit[this.directionAxis];
                    break;
                  case 35:
                    this.instance.delta[this.directionAxis] += this.instance.limit[this.directionAxis];
                    break;
                  case 32:
                    this.isActiveElementScrollSensitive() && (t.shiftKey ? this.instance.delta[this.directionAxis] -= window.innerHeight : this.instance.delta[this.directionAxis] += window.innerHeight);
                    break;
                  default:
                    return
                }
                this.instance.delta[this.directionAxis] < 0 && (this.instance.delta[this.directionAxis] = 0), this.instance.delta[this.directionAxis] > this.instance.limit[this.directionAxis] && (this.instance.delta[this.directionAxis] = this.instance.limit[this.directionAxis]), this.stopScrolling(), this.isScrolling = !0, this.checkScroll(), this.html.classList.add(this.scrollingClass)
              }
            }
          }, {
            key: "isActiveElementScrollSensitive",
            value: function () {
              return !(document.activeElement instanceof HTMLInputElement || document.activeElement instanceof HTMLTextAreaElement || document.activeElement instanceof HTMLButtonElement || document.activeElement instanceof HTMLSelectElement)
            }
          }, {
            key: "checkScroll",
            value: function () {
              var t = this,
                e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
              if (e || this.isScrolling || this.isDraggingScrollbar) {
                this.hasScrollTicking || (this.checkScrollRaf = requestAnimationFrame((function () {
                  return t.checkScroll()
                })), this.hasScrollTicking = !0), this.updateScroll();
                var s = Math.abs(this.instance.delta[this.directionAxis] - this.instance.scroll[this.directionAxis]),
                  n = Date.now() - this.startScrollTs;
                if (!this.animatingScroll && n > 100 && (s < .5 && 0 != this.instance.delta[this.directionAxis] || s < .5 && 0 == this.instance.delta[this.directionAxis]) && this.stopScrolling(), Object.entries(this.sections).forEach((function (i) {
                    var s = v(i, 2),
                      n = (s[0], s[1]);
                    n.persistent || t.instance.scroll[t.directionAxis] > n.offset[t.directionAxis] && t.instance.scroll[t.directionAxis] < n.limit[t.directionAxis] ? ("horizontal" === t.direction ? t.transform(n.el, -t.instance.scroll[t.directionAxis], 0) : t.transform(n.el, 0, -t.instance.scroll[t.directionAxis]), n.inView || (n.inView = !0, n.el.style.opacity = 1, n.el.style.pointerEvents = "all", n.el.setAttribute("data-".concat(t.name, "-section-inview"), ""))) : ((n.inView || e) && (n.inView = !1, n.el.style.opacity = 0, n.el.style.pointerEvents = "none", n.el.removeAttribute("data-".concat(t.name, "-section-inview"))), t.transform(n.el, 0, 0))
                  })), this.getDirection && this.addDirection(), this.getSpeed && (this.addSpeed(), this.speedTs = Date.now()), this.detectElements(), this.transformElements(), this.hasScrollbar) {
                  var o = this.instance.scroll[this.directionAxis] / this.instance.limit[this.directionAxis] * this.scrollBarLimit[this.directionAxis];
                  "horizontal" === this.direction ? this.transform(this.scrollbarThumb, o, 0) : this.transform(this.scrollbarThumb, 0, o)
                }
                m(h(i.prototype), "checkScroll", this).call(this), this.hasScrollTicking = !1
              }
            }
          }, {
            key: "resize",
            value: function () {
              this.windowHeight = window.innerHeight, this.windowWidth = window.innerWidth, this.checkContext(), this.windowMiddle = {
                x: this.windowWidth / 2,
                y: this.windowHeight / 2
              }, this.update()
            }
          }, {
            key: "updateDelta",
            value: function (t) {
              var e, i = this[this.context] && this[this.context].gestureDirection ? this[this.context].gestureDirection : this.gestureDirection;
              e = "both" === i ? t.deltaX + t.deltaY : "vertical" === i ? t.deltaY : "horizontal" === i ? t.deltaX : t.deltaY, this.instance.delta[this.directionAxis] -= e * this.multiplier, this.instance.delta[this.directionAxis] < 0 && (this.instance.delta[this.directionAxis] = 0), this.instance.delta[this.directionAxis] > this.instance.limit[this.directionAxis] && (this.instance.delta[this.directionAxis] = this.instance.limit[this.directionAxis])
            }
          }, {
            key: "updateScroll",
            value: function (t) {
              this.isScrolling || this.isDraggingScrollbar ? this.instance.scroll[this.directionAxis] = U(this.instance.scroll[this.directionAxis], this.instance.delta[this.directionAxis], this.lerp) : this.instance.scroll[this.directionAxis] > this.instance.limit[this.directionAxis] ? this.setScroll(this.instance.scroll[this.directionAxis], this.instance.limit[this.directionAxis]) : this.instance.scroll.y < 0 ? this.setScroll(this.instance.scroll[this.directionAxis], 0) : this.setScroll(this.instance.scroll[this.directionAxis], this.instance.delta[this.directionAxis])
            }
          }, {
            key: "addDirection",
            value: function () {
              this.instance.delta.y > this.instance.scroll.y ? "down" !== this.instance.direction && (this.instance.direction = "down") : this.instance.delta.y < this.instance.scroll.y && "up" !== this.instance.direction && (this.instance.direction = "up"), this.instance.delta.x > this.instance.scroll.x ? "right" !== this.instance.direction && (this.instance.direction = "right") : this.instance.delta.x < this.instance.scroll.x && "left" !== this.instance.direction && (this.instance.direction = "left")
            }
          }, {
            key: "addSpeed",
            value: function () {
              this.instance.delta[this.directionAxis] != this.instance.scroll[this.directionAxis] ? this.instance.speed = (this.instance.delta[this.directionAxis] - this.instance.scroll[this.directionAxis]) / Math.max(1, Date.now() - this.speedTs) : this.instance.speed = 0
            }
          }, {
            key: "initScrollBar",
            value: function () {
              if (this.scrollbar = document.createElement("span"), this.scrollbarThumb = document.createElement("span"), this.scrollbar.classList.add("".concat(this.scrollbarClass)), this.scrollbarThumb.classList.add("".concat(this.scrollbarClass, "_thumb")), this.scrollbar.append(this.scrollbarThumb), this.scrollbarContainer ? this.scrollbarContainer.append(this.scrollbar) : document.body.append(this.scrollbar), this.getScrollBar = this.getScrollBar.bind(this), this.releaseScrollBar = this.releaseScrollBar.bind(this), this.moveScrollBar = this.moveScrollBar.bind(this), this.scrollbarThumb.addEventListener("mousedown", this.getScrollBar), window.addEventListener("mouseup", this.releaseScrollBar), window.addEventListener("mousemove", this.moveScrollBar), this.hasScrollbar = !1, "horizontal" == this.direction) {
                if (this.instance.limit.x + this.windowWidth <= this.windowWidth) return
              } else if (this.instance.limit.y + this.windowHeight <= this.windowHeight) return;
              this.hasScrollbar = !0, this.scrollbarBCR = this.scrollbar.getBoundingClientRect(), this.scrollbarHeight = this.scrollbarBCR.height, this.scrollbarWidth = this.scrollbarBCR.width, "horizontal" === this.direction ? this.scrollbarThumb.style.width = "".concat(this.scrollbarWidth * this.scrollbarWidth / (this.instance.limit.x + this.scrollbarWidth), "px") : this.scrollbarThumb.style.height = "".concat(this.scrollbarHeight * this.scrollbarHeight / (this.instance.limit.y + this.scrollbarHeight), "px"), this.scrollbarThumbBCR = this.scrollbarThumb.getBoundingClientRect(), this.scrollBarLimit = {
                x: this.scrollbarWidth - this.scrollbarThumbBCR.width,
                y: this.scrollbarHeight - this.scrollbarThumbBCR.height
              }
            }
          }, {
            key: "reinitScrollBar",
            value: function () {
              if (this.hasScrollbar = !1, "horizontal" == this.direction) {
                if (this.instance.limit.x + this.windowWidth <= this.windowWidth) return
              } else if (this.instance.limit.y + this.windowHeight <= this.windowHeight) return;
              this.hasScrollbar = !0, this.scrollbarBCR = this.scrollbar.getBoundingClientRect(), this.scrollbarHeight = this.scrollbarBCR.height, this.scrollbarWidth = this.scrollbarBCR.width, "horizontal" === this.direction ? this.scrollbarThumb.style.width = "".concat(this.scrollbarWidth * this.scrollbarWidth / (this.instance.limit.x + this.scrollbarWidth), "px") : this.scrollbarThumb.style.height = "".concat(this.scrollbarHeight * this.scrollbarHeight / (this.instance.limit.y + this.scrollbarHeight), "px"), this.scrollbarThumbBCR = this.scrollbarThumb.getBoundingClientRect(), this.scrollBarLimit = {
                x: this.scrollbarWidth - this.scrollbarThumbBCR.width,
                y: this.scrollbarHeight - this.scrollbarThumbBCR.height
              }
            }
          }, {
            key: "destroyScrollBar",
            value: function () {
              this.scrollbarThumb.removeEventListener("mousedown", this.getScrollBar), window.removeEventListener("mouseup", this.releaseScrollBar), window.removeEventListener("mousemove", this.moveScrollBar), this.scrollbar.remove()
            }
          }, {
            key: "getScrollBar",
            value: function (t) {
              this.isDraggingScrollbar = !0, this.checkScroll(), this.html.classList.remove(this.scrollingClass), this.html.classList.add(this.draggingClass)
            }
          }, {
            key: "releaseScrollBar",
            value: function (t) {
              this.isDraggingScrollbar = !1, this.isScrolling && this.html.classList.add(this.scrollingClass), this.html.classList.remove(this.draggingClass)
            }
          }, {
            key: "moveScrollBar",
            value: function (t) {
              var e = this;
              this.isDraggingScrollbar && requestAnimationFrame((function () {
                var i = 100 * (t.clientX - e.scrollbarBCR.left) / e.scrollbarWidth * e.instance.limit.x / 100,
                  s = 100 * (t.clientY - e.scrollbarBCR.top) / e.scrollbarHeight * e.instance.limit.y / 100;
                s > 0 && s < e.instance.limit.y && (e.instance.delta.y = s), i > 0 && i < e.instance.limit.x && (e.instance.delta.x = i)
              }))
            }
          }, {
            key: "addElements",
            value: function () {
              var t = this;
              this.els = {}, this.parallaxElements = {}, this.el.querySelectorAll("[data-".concat(this.name, "]")).forEach((function (e, i) {
                var s, n, o, l = Z(e),
                  r = Object.entries(t.sections).map((function (t) {
                    var e = v(t, 2);
                    return e[0], e[1]
                  })).find((function (t) {
                    return l.includes(t.el)
                  })),
                  a = e.dataset[t.name + "Class"] || t.class,
                  c = "string" == typeof e.dataset[t.name + "Id"] ? e.dataset[t.name + "Id"] : "el" + i,
                  h = e.dataset[t.name + "Repeat"],
                  d = e.dataset[t.name + "Call"],
                  u = e.dataset[t.name + "Position"],
                  f = e.dataset[t.name + "Delay"],
                  p = e.dataset[t.name + "Direction"],
                  m = "string" == typeof e.dataset[t.name + "Sticky"],
                  y = !!e.dataset[t.name + "Speed"] && parseFloat(e.dataset[t.name + "Speed"]) / 10,
                  b = "string" == typeof e.dataset[t.name + "Offset"] ? e.dataset[t.name + "Offset"].split(",") : t.offset,
                  g = e.dataset[t.name + "Target"],
                  w = (o = void 0 !== g ? document.querySelector("".concat(g)) : e).getBoundingClientRect();
                null === r || r.inView ? (s = w.top + t.instance.scroll.y - $(o).y, n = w.left + t.instance.scroll.x - $(o).x) : (s = w.top - $(r.el).y - $(o).y, n = w.left - $(r.el).x - $(o).x);
                var S = s + o.offsetHeight,
                  x = n + o.offsetWidth,
                  k = {
                    x: (x - n) / 2 + n,
                    y: (S - s) / 2 + s
                  };
                if (m) {
                  var T = e.getBoundingClientRect(),
                    E = T.top,
                    A = T.left,
                    O = {
                      x: A - n,
                      y: E - s
                    };
                  s += window.innerHeight, n += window.innerWidth, S = E + o.offsetHeight - e.offsetHeight - O[t.directionAxis], k = {
                    x: ((x = A + o.offsetWidth - e.offsetWidth - O[t.directionAxis]) - n) / 2 + n,
                    y: (S - s) / 2 + s
                  }
                }
                h = "false" != h && (null != h || t.repeat);
                var C = [0, 0];
                if (b)
                  if ("horizontal" === t.direction) {
                    for (var D = 0; D < b.length; D++) "string" == typeof b[D] ? b[D].includes("%") ? C[D] = parseInt(b[D].replace("%", "") * t.windowWidth / 100) : C[D] = parseInt(b[D]) : C[D] = b[D];
                    n += C[0], x -= C[1]
                  } else {
                    for (D = 0; D < b.length; D++) "string" == typeof b[D] ? b[D].includes("%") ? C[D] = parseInt(b[D].replace("%", "") * t.windowHeight / 100) : C[D] = parseInt(b[D]) : C[D] = b[D];
                    s += C[0], S -= C[1]
                  } var L = {
                  el: e,
                  id: c,
                  class: a,
                  section: r,
                  top: s,
                  middle: k,
                  bottom: S,
                  left: n,
                  right: x,
                  offset: b,
                  progress: 0,
                  repeat: h,
                  inView: !1,
                  call: d,
                  speed: y,
                  delay: f,
                  position: u,
                  target: o,
                  direction: p,
                  sticky: m
                };
                t.els[c] = L, e.classList.contains(a) && t.setInView(t.els[c], c), (!1 !== y || m) && (t.parallaxElements[c] = L)
              }))
            }
          }, {
            key: "addSections",
            value: function () {
              var t = this;
              this.sections = {};
              var e = this.el.querySelectorAll("[data-".concat(this.name, "-section]"));
              0 === e.length && (e = [this.el]), e.forEach((function (e, i) {
                var s = "string" == typeof e.dataset[t.name + "Id"] ? e.dataset[t.name + "Id"] : "section" + i,
                  n = e.getBoundingClientRect(),
                  o = {
                    x: n.left - 1.5 * window.innerWidth - $(e).x,
                    y: n.top - 1.5 * window.innerHeight - $(e).y
                  },
                  l = {
                    x: o.x + n.width + 2 * window.innerWidth,
                    y: o.y + n.height + 2 * window.innerHeight
                  },
                  r = "string" == typeof e.dataset[t.name + "Persistent"];
                e.setAttribute("data-scroll-section-id", s);
                var a = {
                  el: e,
                  offset: o,
                  limit: l,
                  inView: !1,
                  persistent: r,
                  id: s
                };
                t.sections[s] = a
              }))
            }
          }, {
            key: "transform",
            value: function (t, e, i, s) {
              var n;
              if (s) {
                var o = $(t),
                  l = U(o.x, e, s),
                  r = U(o.y, i, s);
                n = "matrix3d(1,0,0.00,0,0.00,1,0.00,0,0,0,1,0,".concat(l, ",").concat(r, ",0,1)")
              } else n = "matrix3d(1,0,0.00,0,0.00,1,0.00,0,0,0,1,0,".concat(e, ",").concat(i, ",0,1)");
              t.style.webkitTransform = n, t.style.msTransform = n, t.style.transform = n
            }
          }, {
            key: "transformElements",
            value: function (t) {
              var e = this,
                i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                s = this.instance.scroll.x + this.windowWidth,
                n = this.instance.scroll.y + this.windowHeight,
                o = {
                  x: this.instance.scroll.x + this.windowMiddle.x,
                  y: this.instance.scroll.y + this.windowMiddle.y
                };
              Object.entries(this.parallaxElements).forEach((function (l) {
                var r = v(l, 2),
                  a = (r[0], r[1]),
                  c = !1;
                if (t && (c = 0), a.inView || i) switch (a.position) {
                  case "top":
                  case "left":
                    c = e.instance.scroll[e.directionAxis] * -a.speed;
                    break;
                  case "elementTop":
                    c = (n - a.top) * -a.speed;
                    break;
                  case "bottom":
                    c = (e.instance.limit[e.directionAxis] - n + e.windowHeight) * a.speed;
                    break;
                  case "elementLeft":
                    c = (s - a.left) * -a.speed;
                    break;
                  case "right":
                    c = (e.instance.limit[e.directionAxis] - s + e.windowHeight) * a.speed;
                    break;
                  default:
                    c = (o[e.directionAxis] - a.middle[e.directionAxis]) * -a.speed
                }
                a.sticky && (c = a.inView ? "horizontal" === e.direction ? e.instance.scroll.x - a.left + window.innerWidth : e.instance.scroll.y - a.top + window.innerHeight : "horizontal" === e.direction ? e.instance.scroll.x < a.left - window.innerWidth && e.instance.scroll.x < a.left - window.innerWidth / 2 ? 0 : e.instance.scroll.x > a.right && e.instance.scroll.x > a.right + 100 && a.right - a.left + window.innerWidth : e.instance.scroll.y < a.top - window.innerHeight && e.instance.scroll.y < a.top - window.innerHeight / 2 ? 0 : e.instance.scroll.y > a.bottom && e.instance.scroll.y > a.bottom + 100 && a.bottom - a.top + window.innerHeight), !1 !== c && ("horizontal" === a.direction || "horizontal" === e.direction && "vertical" !== a.direction ? e.transform(a.el, c, 0, !t && a.delay) : e.transform(a.el, 0, c, !t && a.delay))
              }))
            }
          }, {
            key: "scrollTo",
            value: function (t) {
              var e = this,
                i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                s = parseInt(i.offset) || -135,
                n = isNaN(parseInt(i.duration)) ? 1e3 : parseInt(i.duration),
                o = i.easing || [.25, 0, .35, 1],
                l = !!i.disableLerp,
                r = !!i.callback && i.callback;
              if (o = ot.apply(void 0, y(o)), "string" == typeof t) {
                if ("top" === t) t = 0;
                else if ("bottom" === t) t = this.instance.limit.y;
                else if ("left" === t) t = 0;
                else if ("right" === t) t = this.instance.limit.x;
                else if (!(t = document.querySelector(t))) return
              } else if ("number" == typeof t) t = parseInt(t);
              else if (!t || !t.tagName) return void console.warn("`target` parameter is not valid");
              if ("number" != typeof t) {
                var a = Z(t).includes(this.el);
                if (!a) return;
                var c = t.getBoundingClientRect(),
                  h = c.top,
                  d = c.left,
                  u = Z(t),
                  f = u.find((function (t) {
                    return Object.entries(e.sections).map((function (t) {
                      var e = v(t, 2);
                      return e[0], e[1]
                    })).find((function (e) {
                      return e.el == t
                    }))
                  })),
                  p = 0;
                p = f ? $(f)[this.directionAxis] : -this.instance.scroll[this.directionAxis], s = "horizontal" === this.direction ? d + s - p : h + s - p
              } else s = t + s;
              var m = parseFloat(this.instance.delta[this.directionAxis]),
                b = Math.max(0, Math.min(s, this.instance.limit[this.directionAxis])),
                g = b - m,
                w = function (t) {
                  l ? "horizontal" === e.direction ? e.setScroll(m + g * t, e.instance.delta.y) : e.setScroll(e.instance.delta.x, m + g * t) : e.instance.delta[e.directionAxis] = m + g * t
                };
              this.animatingScroll = !0, this.stopScrolling(), this.startScrolling();
              var S = Date.now(),
                x = function t() {
                  var i = (Date.now() - S) / n;
                  i > 1 ? (w(1), e.animatingScroll = !1, 0 == n && e.update(), r && r()) : (e.scrollToRaf = requestAnimationFrame(t), w(o(i)))
                };
              x()
            }
          }, {
            key: "update",
            value: function () {
              this.setScrollLimit(), this.addSections(), this.addElements(), this.detectElements(), this.updateScroll(), this.transformElements(!0), this.reinitScrollBar(), this.checkScroll(!0)
            }
          }, {
            key: "startScroll",
            value: function () {
              this.stop = !1
            }
          }, {
            key: "stopScroll",
            value: function () {
              this.stop = !0
            }
          }, {
            key: "setScroll",
            value: function (t, e) {
              this.instance = a(a({}, this.instance), {}, {
                scroll: {
                  x: t,
                  y: e
                },
                delta: {
                  x: t,
                  y: e
                },
                speed: 0
              })
            }
          }, {
            key: "destroy",
            value: function () {
              m(h(i.prototype), "destroy", this).call(this), this.stopScrolling(), this.html.classList.remove(this.smoothClass), this.vs.destroy(), this.destroyScrollBar(), window.removeEventListener("keydown", this.checkKey, !1)
            }
          }]), i
        }(S);
      const rt = function () {
        function t() {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          s(this, t), this.options = e, Object.assign(this, w, e), this.smartphone = w.smartphone, e.smartphone && Object.assign(this.smartphone, e.smartphone), this.tablet = w.tablet, e.tablet && Object.assign(this.tablet, e.tablet), this.smooth || "horizontal" != this.direction || console.warn("🚨 `smooth:false` & `horizontal` direction are not yet compatible"), this.tablet.smooth || "horizontal" != this.tablet.direction || console.warn("🚨 `smooth:false` & `horizontal` direction are not yet compatible (tablet)"), this.smartphone.smooth || "horizontal" != this.smartphone.direction || console.warn("🚨 `smooth:false` & `horizontal` direction are not yet compatible (smartphone)"), this.init()
        }
        return o(t, [{
          key: "init",
          value: function () {
            if (this.options.isMobile = /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || "MacIntel" === navigator.platform && navigator.maxTouchPoints > 1 || window.innerWidth < this.tablet.breakpoint, this.options.isTablet = this.options.isMobile && window.innerWidth >= this.tablet.breakpoint, this.smooth && !this.options.isMobile || this.tablet.smooth && this.options.isTablet || this.smartphone.smooth && this.options.isMobile && !this.options.isTablet ? this.scroll = new lt(this.options) : this.scroll = new E(this.options), this.scroll.init(), window.location.hash) {
              var t = window.location.hash.slice(1, window.location.hash.length),
                e = document.getElementById(t);
              e && this.scroll.scrollTo(e)
            }
          }
        }, {
          key: "update",
          value: function () {
            this.scroll.update()
          }
        }, {
          key: "start",
          value: function () {
            this.scroll.startScroll()
          }
        }, {
          key: "stop",
          value: function () {
            this.scroll.stopScroll()
          }
        }, {
          key: "scrollTo",
          value: function (t, e) {
            this.scroll.scrollTo(t, e)
          }
        }, {
          key: "setScroll",
          value: function (t, e) {
            this.scroll.setScroll(t, e)
          }
        }, {
          key: "on",
          value: function (t, e) {
            this.scroll.setEvents(t, e)
          }
        }, {
          key: "off",
          value: function (t, e) {
            this.scroll.unsetEvents(t, e)
          }
        }, {
          key: "destroy",
          value: function () {
            this.scroll.destroy()
          }
        }]), t
      }()
    }
  }
]);
//# sourceMappingURL=locomotive-scroll-esm.bundle.js.map
