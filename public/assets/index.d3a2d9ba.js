const Dt = function () {
  const e = document.createElement("link").relList;
  if (e && e.supports && e.supports("modulepreload")) return;
  for (const s of document.querySelectorAll('link[rel="modulepreload"]')) o(s);
  new MutationObserver((s) => {
    for (const p of s)
      if (p.type === "childList")
        for (const v of p.addedNodes)
          v.tagName === "LINK" && v.rel === "modulepreload" && o(v);
  }).observe(document, { childList: !0, subtree: !0 });
  function r(s) {
    const p = {};
    return (
      s.integrity && (p.integrity = s.integrity),
      s.referrerpolicy && (p.referrerPolicy = s.referrerpolicy),
      s.crossorigin === "use-credentials"
        ? (p.credentials = "include")
        : s.crossorigin === "anonymous"
        ? (p.credentials = "omit")
        : (p.credentials = "same-origin"),
      p
    );
  }
  function o(s) {
    if (s.ep) return;
    s.ep = !0;
    const p = r(s);
    fetch(s.href, p);
  }
};
Dt();
function fe() {}
function Ct(n) {
  return n();
}
function pt() {
  return Object.create(null);
}
function He(n) {
  n.forEach(Ct);
}
function It(n) {
  return typeof n == "function";
}
function Ae(n, e) {
  return n != n
    ? e == e
    : n !== e || (n && typeof n == "object") || typeof n == "function";
}
let Ke;
function tt(n, e) {
  return Ke || (Ke = document.createElement("a")), (Ke.href = e), n === Ke.href;
}
function jt(n) {
  return Object.keys(n).length === 0;
}
function B(n, e) {
  n.appendChild(e);
}
function oe(n, e, r) {
  n.insertBefore(e, r || null);
}
function ne(n) {
  n.parentNode.removeChild(n);
}
function Et(n, e) {
  for (let r = 0; r < n.length; r += 1) n[r] && n[r].d(e);
}
function Q(n) {
  return document.createElement(n);
}
function je(n) {
  return document.createTextNode(n);
}
function ee() {
  return je(" ");
}
function Bt() {
  return je("");
}
function Be(n, e, r, o) {
  return n.addEventListener(e, r, o), () => n.removeEventListener(e, r, o);
}
function _(n, e, r) {
  r == null
    ? n.removeAttribute(e)
    : n.getAttribute(e) !== r && n.setAttribute(e, r);
}
function Pt(n) {
  return Array.from(n.childNodes);
}
function Pe(n, e) {
  (e = "" + e), n.wholeText !== e && (n.data = e);
}
function Ft(n, e, r, o) {
  r === null
    ? n.style.removeProperty(e)
    : n.style.setProperty(e, r, o ? "important" : "");
}
function Lt(n, e, { bubbles: r = !1, cancelable: o = !1 } = {}) {
  const s = document.createEvent("CustomEvent");
  return s.initCustomEvent(n, r, o, e), s;
}
let Ye;
function Xe(n) {
  Ye = n;
}
function At() {
  if (!Ye) throw new Error("Function called outside component initialization");
  return Ye;
}
function dt(n) {
  At().$$.on_mount.push(n);
}
function Ge() {
  const n = At();
  return (e, r, { cancelable: o = !1 } = {}) => {
    const s = n.$$.callbacks[e];
    if (s) {
      const p = Lt(e, r, { cancelable: o });
      return (
        s.slice().forEach((v) => {
          v.call(n, p);
        }),
        !p.defaultPrevented
      );
    }
    return !0;
  };
}
const Je = [],
  st = [],
  $e = [],
  lt = [],
  Tt = Promise.resolve();
let ut = !1;
function Rt() {
  ut || ((ut = !0), Tt.then(St));
}
function ct(n) {
  $e.push(n);
}
function Nt(n) {
  lt.push(n);
}
const at = new Set();
let Ze = 0;
function St() {
  const n = Ye;
  do {
    for (; Ze < Je.length; ) {
      const e = Je[Ze];
      Ze++, Xe(e), Ut(e.$$);
    }
    for (Xe(null), Je.length = 0, Ze = 0; st.length; ) st.pop()();
    for (let e = 0; e < $e.length; e += 1) {
      const r = $e[e];
      at.has(r) || (at.add(r), r());
    }
    $e.length = 0;
  } while (Je.length);
  for (; lt.length; ) lt.pop()();
  (ut = !1), at.clear(), Xe(n);
}
function Ut(n) {
  if (n.fragment !== null) {
    n.update(), He(n.before_update);
    const e = n.dirty;
    (n.dirty = [-1]),
      n.fragment && n.fragment.p(n.ctx, e),
      n.after_update.forEach(ct);
  }
}
const et = new Set();
let Qe;
function Ve() {
  Qe = { r: 0, c: [], p: Qe };
}
function We() {
  Qe.r || He(Qe.c), (Qe = Qe.p);
}
function re(n, e) {
  n && n.i && (et.delete(n), n.i(e));
}
function le(n, e, r, o) {
  if (n && n.o) {
    if (et.has(n)) return;
    et.add(n),
      Qe.c.push(() => {
        et.delete(n), o && (r && n.d(1), o());
      }),
      n.o(e);
  }
}
function Qt(n, e, r) {
  const o = n.$$.props[e];
  o !== void 0 && ((n.$$.bound[o] = r), r(n.$$.ctx[o]));
}
function ve(n) {
  n && n.c();
}
function he(n, e, r, o) {
  const { fragment: s, on_mount: p, on_destroy: v, after_update: m } = n.$$;
  s && s.m(e, r),
    o ||
      ct(() => {
        const z = p.map(Ct).filter(It);
        v ? v.push(...z) : He(z), (n.$$.on_mount = []);
      }),
    m.forEach(ct);
}
function pe(n, e) {
  const r = n.$$;
  r.fragment !== null &&
    (He(r.on_destroy),
    r.fragment && r.fragment.d(e),
    (r.on_destroy = r.fragment = null),
    (r.ctx = []));
}
function Ht(n, e) {
  n.$$.dirty[0] === -1 && (Je.push(n), Rt(), n.$$.dirty.fill(0)),
    (n.$$.dirty[(e / 31) | 0] |= 1 << e % 31);
}
function Se(n, e, r, o, s, p, v, m = [-1]) {
  const z = Ye;
  Xe(n);
  const D = (n.$$ = {
    fragment: null,
    ctx: null,
    props: p,
    update: fe,
    not_equal: s,
    bound: pt(),
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(e.context || (z ? z.$$.context : [])),
    callbacks: pt(),
    dirty: m,
    skip_bound: !1,
    root: e.target || z.$$.root,
  });
  v && v(D.root);
  let L = !1;
  if (
    ((D.ctx = r
      ? r(n, e.props || {}, (T, G, ...E) => {
          const P = E.length ? E[0] : G;
          return (
            D.ctx &&
              s(D.ctx[T], (D.ctx[T] = P)) &&
              (!D.skip_bound && D.bound[T] && D.bound[T](P), L && Ht(n, T)),
            G
          );
        })
      : []),
    D.update(),
    (L = !0),
    He(D.before_update),
    (D.fragment = o ? o(D.ctx) : !1),
    e.target)
  ) {
    if (e.hydrate) {
      const T = Pt(e.target);
      D.fragment && D.fragment.l(T), T.forEach(ne);
    } else D.fragment && D.fragment.c();
    e.intro && re(n.$$.fragment),
      he(n, e.target, e.anchor, e.customElement),
      St();
  }
  Xe(z);
}
class qe {
  $destroy() {
    pe(this, 1), (this.$destroy = fe);
  }
  $on(e, r) {
    const o = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
    return (
      o.push(r),
      () => {
        const s = o.indexOf(r);
        s !== -1 && o.splice(s, 1);
      }
    );
  }
  $set(e) {
    this.$$set &&
      !jt(e) &&
      ((this.$$.skip_bound = !0), this.$$set(e), (this.$$.skip_bound = !1));
  }
}
function Gt(n) {
  let e;
  return {
    c() {
      (e = Q("a")),
        (e.innerHTML = `<p class="std-text--secondary">brought you by Scholar</p> 
  <span class="std-icon scholar-icon svelte-1w5q1ii"></span>`),
        _(e, "href", "https://biblescholar.app"),
        _(e, "class", "promo-wrapper svelte-1w5q1ii");
    },
    m(r, o) {
      oe(r, e, o);
    },
    p: fe,
    i: fe,
    o: fe,
    d(r) {
      r && ne(e);
    },
  };
}
class Jt extends qe {
  constructor(e) {
    super(), Se(this, e, null, Gt, Ae, {});
  }
}
const Vt = async (n, e, r) =>
  await (
    await fetch(n, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(e),
    })
  ).json();
function gt(n) {
  let e, r, o;
  return {
    c() {
      (e = Q("p")),
        (r = je(n[1])),
        (o = je(":")),
        _(e, "class", "option-option-label svelte-1ax8dgq"),
        _(e, "for", "input-option");
    },
    m(s, p) {
      oe(s, e, p), B(e, r), B(e, o);
    },
    p(s, p) {
      p & 2 && Pe(r, s[1]);
    },
    d(s) {
      s && ne(e);
    },
  };
}
function Wt(n) {
  let e, r;
  return {
    c() {
      (e = Q("input")),
        _(e, "type", "text"),
        _(e, "id", "option-one"),
        (e.value = r = n[4].first),
        _(e, "name", n[0]),
        _(e, "class", "hidden svelte-1ax8dgq");
    },
    m(o, s) {
      oe(o, e, s);
    },
    p(o, s) {
      s & 16 && r !== (r = o[4].first) && e.value !== r && (e.value = r),
        s & 1 && _(e, "name", o[0]);
    },
    d(o) {
      o && ne(e);
    },
  };
}
function Xt(n) {
  let e, r;
  return {
    c() {
      (e = Q("input")),
        _(e, "type", "text"),
        _(e, "id", "option-one"),
        (e.value = r = n[4].first),
        _(e, "name", n[0]),
        _(e, "class", "hidden svelte-1ax8dgq"),
        (e.required = !0);
    },
    m(o, s) {
      oe(o, e, s);
    },
    p(o, s) {
      s & 16 && r !== (r = o[4].first) && e.value !== r && (e.value = r),
        s & 1 && _(e, "name", o[0]);
    },
    d(o) {
      o && ne(e);
    },
  };
}
function Yt(n) {
  let e, r;
  return {
    c() {
      (e = Q("input")),
        _(e, "type", "text"),
        _(e, "id", "option-two"),
        (e.value = r = n[4].second),
        _(e, "name", n[0]),
        _(e, "class", "hidden svelte-1ax8dgq");
    },
    m(o, s) {
      oe(o, e, s);
    },
    p(o, s) {
      s & 16 && r !== (r = o[4].second) && e.value !== r && (e.value = r),
        s & 1 && _(e, "name", o[0]);
    },
    d(o) {
      o && ne(e);
    },
  };
}
function Kt(n) {
  let e, r;
  return {
    c() {
      (e = Q("input")),
        _(e, "type", "text"),
        _(e, "id", "option-two"),
        (e.value = r = n[4].second),
        _(e, "name", n[0]),
        _(e, "class", "hidden svelte-1ax8dgq");
    },
    m(o, s) {
      oe(o, e, s);
    },
    p(o, s) {
      s & 16 && r !== (r = o[4].second) && e.value !== r && (e.value = r),
        s & 1 && _(e, "name", o[0]);
    },
    d(o) {
      o && ne(e);
    },
  };
}
function Zt(n) {
  let e,
    r,
    o,
    s,
    p,
    v,
    m,
    z,
    D = n[2].first + "",
    L,
    T,
    G,
    E,
    P,
    N,
    H,
    W,
    V,
    I,
    ae,
    ue = n[2].second + "",
    ye,
    Ie,
    xe,
    Ce,
    Oe,
    De,
    ge = n[1] && gt(n);
  function M(O, j) {
    if (O[3] && O[4].first !== "") return Xt;
    if (!O[3] && O[4].first !== "") return Wt;
  }
  let S = M(n),
    k = S && S(n);
  function C(O, j) {
    if (O[3] && O[4].second !== "") return Kt;
    if (!O[3] && O[4].second !== "") return Yt;
  }
  let w = C(n),
    A = w && w(n);
  return {
    c() {
      (e = Q("div")),
        ge && ge.c(),
        (r = ee()),
        (o = Q("div")),
        (s = Q("span")),
        (v = ee()),
        k && k.c(),
        (m = ee()),
        (z = Q("p")),
        (L = je(D)),
        (G = ee()),
        (E = Q("div")),
        (E.innerHTML =
          '<svg class="svelte-1ax8dgq"><path d="M3 5.7072C50.1565 5.7072 97.3247 5.92723 144.48 5.64704C193.917 5.3533 243.309 3.75524 292.749 3.51136C312.837 3.41227 332.909 3 353 3" stroke="#5B7FFF" stroke-width="3" stroke-linecap="round"></path></svg>'),
        (P = ee()),
        (N = Q("div")),
        (H = Q("span")),
        (V = ee()),
        A && A.c(),
        (I = ee()),
        (ae = Q("p")),
        (ye = je(ue)),
        (xe = ee()),
        (Ce = Q("div")),
        (Ce.innerHTML =
          '<svg class="svelte-1ax8dgq"><path d="M3 5.7072C50.1565 5.7072 97.3247 5.92723 144.48 5.64704C193.917 5.3533 243.309 3.75524 292.749 3.51136C312.837 3.41227 332.909 3 353 3" stroke="#5B7FFF" stroke-width="3" stroke-linecap="round" width="100%" height="100%"></path></svg>'),
        _(
          s,
          "class",
          (p =
            "std-bkg std-icon option-selected " +
            n[5].first +
            " svelte-1ax8dgq")
        ),
        _(z, "class", (T = "option-letter " + n[5].first + " svelte-1ax8dgq")),
        _(E, "class", "svg-wrapper svelte-1ax8dgq"),
        _(o, "class", "option-option svelte-1ax8dgq"),
        _(
          H,
          "class",
          (W =
            "std-bkg std-icon option-selected " +
            n[5].second +
            " svelte-1ax8dgq")
        ),
        _(
          ae,
          "class",
          (Ie = "option-letter " + n[5].second + " svelte-1ax8dgq")
        ),
        _(Ce, "class", "svg-wrapper svelte-1ax8dgq"),
        _(N, "class", "option-option svelte-1ax8dgq"),
        _(
          e,
          "class",
          "input-interface-wrapper std-flex-justify-start std-flex-align-end std-flex-nowrap svelte-1ax8dgq"
        );
    },
    m(O, j) {
      oe(O, e, j),
        ge && ge.m(e, null),
        B(e, r),
        B(e, o),
        B(o, s),
        B(o, v),
        k && k.m(o, null),
        B(o, m),
        B(o, z),
        B(z, L),
        B(o, G),
        B(o, E),
        B(e, P),
        B(e, N),
        B(N, H),
        B(N, V),
        A && A.m(N, null),
        B(N, I),
        B(N, ae),
        B(ae, ye),
        B(N, xe),
        B(N, Ce),
        Oe || ((De = [Be(o, "click", n[9]), Be(N, "click", n[10])]), (Oe = !0));
    },
    p(O, [j]) {
      O[1]
        ? ge
          ? ge.p(O, j)
          : ((ge = gt(O)), ge.c(), ge.m(e, r))
        : ge && (ge.d(1), (ge = null)),
        j & 32 &&
          p !==
            (p =
              "std-bkg std-icon option-selected " +
              O[5].first +
              " svelte-1ax8dgq") &&
          _(s, "class", p),
        S === (S = M(O)) && k
          ? k.p(O, j)
          : (k && k.d(1), (k = S && S(O)), k && (k.c(), k.m(o, m))),
        j & 4 && D !== (D = O[2].first + "") && Pe(L, D),
        j & 32 &&
          T !== (T = "option-letter " + O[5].first + " svelte-1ax8dgq") &&
          _(z, "class", T),
        j & 32 &&
          W !==
            (W =
              "std-bkg std-icon option-selected " +
              O[5].second +
              " svelte-1ax8dgq") &&
          _(H, "class", W),
        w === (w = C(O)) && A
          ? A.p(O, j)
          : (A && A.d(1), (A = w && w(O)), A && (A.c(), A.m(N, I))),
        j & 4 && ue !== (ue = O[2].second + "") && Pe(ye, ue),
        j & 32 &&
          Ie !== (Ie = "option-letter " + O[5].second + " svelte-1ax8dgq") &&
          _(ae, "class", Ie);
    },
    i: fe,
    o: fe,
    d(O) {
      O && ne(e), ge && ge.d(), k && k.d(), A && A.d(), (Oe = !1), He(De);
    },
  };
}
function $t(n, e, r) {
  const o = Ge();
  let { name: s } = e,
    { label: p = "" } = e,
    { valueLabel: v = { first: "", second: "" } } = e;
  const m = null;
  let { req: z = !0 } = e,
    { inputValues: D } = e,
    L = { first: D.first, second: "" },
    T = { first: "selected", second: "" };
  const G = (N) => {
      N === 1
        ? (r(5, (T = { first: "selected", second: "" })),
          r(4, (L = { first: D.first, second: "" })))
        : (r(5, (T = { first: "", second: "selected" })),
          r(4, (L = { first: "", second: D.second }))),
        o("action", { option: N });
    },
    E = () => G(1),
    P = () => G(2);
  return (
    (n.$$set = (N) => {
      "name" in N && r(0, (s = N.name)),
        "label" in N && r(1, (p = N.label)),
        "valueLabel" in N && r(2, (v = N.valueLabel)),
        "req" in N && r(3, (z = N.req)),
        "inputValues" in N && r(8, (D = N.inputValues));
    }),
    [s, p, v, z, L, T, G, m, D, E, P]
  );
}
class vt extends qe {
  constructor(e) {
    super(),
      Se(this, e, $t, Zt, Ae, {
        name: 0,
        label: 1,
        valueLabel: 2,
        action: 7,
        req: 3,
        inputValues: 8,
      });
  }
  get action() {
    return this.$$.ctx[7];
  }
}
function mt(n, e, r) {
  const o = n.slice();
  return (o[11] = e[r]), (o[13] = r), o;
}
function er(n) {
  let e;
  return {
    c() {
      (e = Q("input")),
        _(e, "type", "number"),
        _(e, "maxlength", "3"),
        _(e, "class", "std-input hidden svelte-6hz7uh"),
        _(e, "id", "hidden-input"),
        _(e, "placeholder", ""),
        (e.value = n[5]);
    },
    m(r, o) {
      oe(r, e, o);
    },
    p(r, o) {
      o & 32 && e.value !== r[5] && (e.value = r[5]);
    },
    d(r) {
      r && ne(e);
    },
  };
}
function tr(n) {
  let e;
  return {
    c() {
      (e = Q("input")),
        _(e, "type", "number"),
        _(e, "maxlength", "3"),
        _(e, "class", "std-input hidden svelte-6hz7uh"),
        _(e, "id", "hidden-input"),
        _(e, "placeholder", ""),
        (e.value = n[5]),
        _(e, "name", n[3]),
        (e.required = !0);
    },
    m(r, o) {
      oe(r, e, o);
    },
    p(r, o) {
      o & 32 && e.value !== r[5] && (e.value = r[5]),
        o & 8 && _(e, "name", r[3]);
    },
    d(r) {
      r && ne(e);
    },
  };
}
function wt(n) {
  let e,
    r = n[13] + n[0] + "",
    o,
    s,
    p,
    v;
  function m() {
    return n[10](n[13]);
  }
  return {
    c() {
      (e = Q("p")),
        (o = je(r)),
        (s = ee()),
        _(e, "class", "std-flex-row svelte-6hz7uh");
    },
    m(z, D) {
      oe(z, e, D), B(e, o), B(e, s), p || ((v = Be(e, "click", m)), (p = !0));
    },
    p(z, D) {
      (n = z), D & 1 && r !== (r = n[13] + n[0] + "") && Pe(o, r);
    },
    d(z) {
      z && ne(e), (p = !1), v();
    },
  };
}
function rr(n) {
  let e, r, o, s, p, v, m, z, D, L, T, G, E;
  function P(I, ae) {
    return I[2] ? tr : er;
  }
  let N = P(n),
    H = N(n),
    W = new Array(n[1]),
    V = [];
  for (let I = 0; I < W.length; I += 1) V[I] = wt(mt(n, W, I));
  return {
    c() {
      (e = Q("div")), (r = Q("div")), H.c(), (o = ee()), (s = Q("div"));
      for (let I = 0; I < V.length; I += 1) V[I].c();
      (v = ee()),
        (m = Q("p")),
        (z = je(n[4])),
        (L = ee()),
        (T = Q("div")),
        (T.innerHTML =
          '<svg viewBox="0 0 356 9" class="svelte-6hz7uh"><path d="M3 5.7072C50.1565 5.7072 97.3247 5.92723 144.48 5.64704C193.917 5.3533 243.309 3.75524 292.749 3.51136C312.837 3.41227 332.909 3 353 3" stroke="#5B7FFF" stroke-width="20" stroke-linecap="round"></path></svg>'),
        _(s, "class", (p = "age-dropdown " + n[6] + " svelte-6hz7uh")),
        _(m, "class", (D = "std-input currAge " + n[7] + " svelte-6hz7uh")),
        _(T, "class", "svg-wrapper svelte-6hz7uh"),
        _(r, "class", "input-wrapper svelte-6hz7uh"),
        _(e, "class", "main-wrapper svelte-6hz7uh");
    },
    m(I, ae) {
      oe(I, e, ae), B(e, r), H.m(r, null), B(r, o), B(r, s);
      for (let ue = 0; ue < V.length; ue += 1) V[ue].m(s, null);
      B(r, v),
        B(r, m),
        B(m, z),
        B(r, L),
        B(r, T),
        G || ((E = Be(m, "click", n[8])), (G = !0));
    },
    p(I, [ae]) {
      if (
        (N === (N = P(I)) && H
          ? H.p(I, ae)
          : (H.d(1), (H = N(I)), H && (H.c(), H.m(r, o))),
        ae & 515)
      ) {
        W = new Array(I[1]);
        let ue;
        for (ue = 0; ue < W.length; ue += 1) {
          const ye = mt(I, W, ue);
          V[ue]
            ? V[ue].p(ye, ae)
            : ((V[ue] = wt(ye)), V[ue].c(), V[ue].m(s, null));
        }
        for (; ue < V.length; ue += 1) V[ue].d(1);
        V.length = W.length;
      }
      ae & 64 &&
        p !== (p = "age-dropdown " + I[6] + " svelte-6hz7uh") &&
        _(s, "class", p),
        ae & 16 && Pe(z, I[4]),
        ae & 128 &&
          D !== (D = "std-input currAge " + I[7] + " svelte-6hz7uh") &&
          _(m, "class", D);
    },
    i: fe,
    o: fe,
    d(I) {
      I && ne(e), H.d(), Et(V, I), (G = !1), E();
    },
  };
}
function nr(n, e, r) {
  let { startAt: o = 0 } = e,
    { endAt: s = 0 } = e,
    { req: p = !0 } = e,
    { name: v } = e,
    m = "age",
    z = null,
    D = "",
    L = "";
  const T = () => {
      r(6, (D = "age-dropdown-display"));
    },
    G = (P) => {
      r(6, (D = " ")),
        r(5, (z = P)),
        r(7, (L = "selected")),
        r(4, (m = P.toString()));
    },
    E = (P) => G(P + o);
  return (
    (n.$$set = (P) => {
      "startAt" in P && r(0, (o = P.startAt)),
        "endAt" in P && r(1, (s = P.endAt)),
        "req" in P && r(2, (p = P.req)),
        "name" in P && r(3, (v = P.name));
    }),
    [o, s, p, v, m, z, D, L, T, G, E]
  );
}
class ir extends qe {
  constructor(e) {
    super(), Se(this, e, nr, rr, Ae, { startAt: 0, endAt: 1, req: 2, name: 3 });
  }
}
function or(n) {
  let e;
  return {
    c() {
      (e = Q("input")),
        _(e, "type", n[0]),
        _(e, "maxlength", n[1]),
        _(e, "class", "std-input svelte-m5ayyr"),
        _(e, "placeholder", n[3]);
    },
    m(r, o) {
      oe(r, e, o);
    },
    p(r, o) {
      o & 1 && _(e, "type", r[0]),
        o & 2 && _(e, "maxlength", r[1]),
        o & 8 && _(e, "placeholder", r[3]);
    },
    d(r) {
      r && ne(e);
    },
  };
}
function ar(n) {
  let e;
  return {
    c() {
      (e = Q("input")),
        _(e, "type", n[0]),
        _(e, "maxlength", n[1]),
        _(e, "class", "std-input svelte-m5ayyr"),
        _(e, "placeholder", n[3]),
        _(e, "name", n[4]),
        (e.required = !0);
    },
    m(r, o) {
      oe(r, e, o);
    },
    p(r, o) {
      o & 1 && _(e, "type", r[0]),
        o & 2 && _(e, "maxlength", r[1]),
        o & 8 && _(e, "placeholder", r[3]),
        o & 16 && _(e, "name", r[4]);
    },
    d(r) {
      r && ne(e);
    },
  };
}
function sr(n) {
  let e, r, o;
  function s(m, z) {
    return m[2] ? ar : or;
  }
  let p = s(n),
    v = p(n);
  return {
    c() {
      (e = Q("div")),
        v.c(),
        (r = ee()),
        (o = Q("div")),
        (o.innerHTML =
          '<svg viewBox="0 0 356 9"><path d="M3 5.7072C50.1565 5.7072 97.3247 5.92723 144.48 5.64704C193.917 5.3533 243.309 3.75524 292.749 3.51136C312.837 3.41227 332.909 3 353 3" stroke="#5B7FFF" stroke-width="5" stroke-linecap="round"></path></svg>'),
        _(o, "class", "svg-wrapper svelte-m5ayyr"),
        _(e, "class", "input-wrapper svelte-m5ayyr");
    },
    m(m, z) {
      oe(m, e, z), v.m(e, null), B(e, r), B(e, o);
    },
    p(m, [z]) {
      p === (p = s(m)) && v
        ? v.p(m, z)
        : (v.d(1), (v = p(m)), v && (v.c(), v.m(e, r)));
    },
    i: fe,
    o: fe,
    d(m) {
      m && ne(e), v.d();
    },
  };
}
function lr(n, e, r) {
  let { type: o = "text" } = e,
    { maxLength: s = 140 } = e,
    { req: p = !0 } = e,
    { placeholder: v = "" } = e,
    { name: m } = e;
  return (
    (n.$$set = (z) => {
      "type" in z && r(0, (o = z.type)),
        "maxLength" in z && r(1, (s = z.maxLength)),
        "req" in z && r(2, (p = z.req)),
        "placeholder" in z && r(3, (v = z.placeholder)),
        "name" in z && r(4, (m = z.name));
    }),
    [o, s, p, v, m]
  );
}
class Ue extends qe {
  constructor(e) {
    super(),
      Se(this, e, lr, sr, Ae, {
        type: 0,
        maxLength: 1,
        req: 2,
        placeholder: 3,
        name: 4,
      });
  }
}
function ur(n) {
  let e, r, o, s, p, v, m, z;
  return {
    c() {
      (e = Q("div")),
        (r = Q("button")),
        (o = Q("p")),
        (s = je(n[0])),
        (p = ee()),
        (v = Q("div")),
        (v.innerHTML =
          '<svg viewBox="0 0 191 35" class="svelte-rfq1y2"><path d="M4 22C14.7653 21.8634 25.1907 20.1563 35.8958 19.5041C54.9562 18.3428 73.8543 17.0602 93.0115 17.0081C122.189 16.9288 150.937 17.427 180 18.6721" stroke="url(#paint0_linear_132_202)" stroke-width="7" stroke-linecap="round" fill="none"></path><path d="M164.688 4C171.006 9.97648 178.82 15.2879 186.002 20.1614C188.733 22.0144 181.609 22.9838 180.927 23.1282C174.088 24.5758 168.588 27.2683 162.58 30.7014" stroke="url(#paint1_linear_132_202)" stroke-width="7" stroke-linecap="round" fill="none"></path><defs><linearGradient id="paint0_linear_132_202" x1="4" y1="22" x2="242.5" y2="20" gradientUnits="userSpaceOnUse"><stop stop-color="#04FED1"></stop><stop offset="1" stop-color="#1400FF"></stop></linearGradient><linearGradient id="paint1_linear_132_202" x1="183.5" y1="19" x2="156.5" y2="18" gradientUnits="userSpaceOnUse"><stop stop-color="#04FED1"></stop><stop offset="1" stop-color="#0E5CEE"></stop></linearGradient></defs></svg>'),
        _(o, "class", "std-gradient-text svelte-rfq1y2"),
        _(r, "class", "std-button button svelte-rfq1y2"),
        _(r, "type", n[1]),
        _(v, "class", "svg-wrapper svelte-rfq1y2"),
        _(e, "class", "btn-wrapper svelte-rfq1y2");
    },
    m(D, L) {
      oe(D, e, L),
        B(e, r),
        B(r, o),
        B(o, s),
        B(e, p),
        B(e, v),
        m || ((z = Be(e, "click", n[3])), (m = !0));
    },
    p(D, [L]) {
      L & 1 && Pe(s, D[0]), L & 2 && _(r, "type", D[1]);
    },
    i: fe,
    o: fe,
    d(D) {
      D && ne(e), (m = !1), z();
    },
  };
}
function cr(n, e, r) {
  let { text: o = "" } = e,
    { type: s = "button" } = e;
  const p = Ge(),
    v = () => p("action");
  return (
    (n.$$set = (m) => {
      "text" in m && r(0, (o = m.text)), "type" in m && r(1, (s = m.type));
    }),
    [o, s, p, v]
  );
}
class ft extends qe {
  constructor(e) {
    super(), Se(this, e, cr, ur, Ae, { text: 0, type: 1 });
  }
}
function dr(n) {
  let e, r, o;
  return {
    c() {
      (e = Q("div")),
        (e.innerHTML = `<span class="std-icon std-bkg button-icon svelte-14gr5tj"></span> 
  <button class="button std-button svelte-14gr5tj"><p class="std-gradient-text svelte-14gr5tj">Back</p></button>`),
        _(
          e,
          "class",
          "btn-wrapper std-flex-row std-flex-nowrap std-flex-justify-between std-flex-align-center svelte-14gr5tj"
        );
    },
    m(s, p) {
      oe(s, e, p), r || ((o = Be(e, "click", n[1])), (r = !0));
    },
    p: fe,
    i: fe,
    o: fe,
    d(s) {
      s && ne(e), (r = !1), o();
    },
  };
}
function fr(n) {
  const e = Ge();
  return [e, () => e("action")];
}
class hr extends qe {
  constructor(e) {
    super(), Se(this, e, fr, dr, Ae, {});
  }
}
function pr(n) {
  let e, r, o, s;
  return {
    c() {
      (e = Q("div")),
        (r = Q("p")),
        (o = je(n[0])),
        _(
          r,
          "class",
          (s = "std-text " + n[2] + " " + n[1] + " " + n[3] + " svelte-1st4p0n")
        ),
        _(e, "class", "text-wrapper svelte-1st4p0n");
    },
    m(p, v) {
      oe(p, e, v), B(e, r), B(r, o);
    },
    p(p, [v]) {
      v & 1 && Pe(o, p[0]),
        v & 14 &&
          s !==
            (s =
              "std-text " +
              p[2] +
              " " +
              p[1] +
              " " +
              p[3] +
              " svelte-1st4p0n") &&
          _(r, "class", s);
    },
    i: fe,
    o: fe,
    d(p) {
      p && ne(e);
    },
  };
}
function gr(n, e, r) {
  let { text: o = "" } = e,
    { font: s = "" } = e,
    { align: p = "" } = e,
    { color: v = "" } = e;
  return (
    (n.$$set = (m) => {
      "text" in m && r(0, (o = m.text)),
        "font" in m && r(1, (s = m.font)),
        "align" in m && r(2, (p = m.align)),
        "color" in m && r(3, (v = m.color));
    }),
    [o, s, p, v]
  );
}
class ht extends qe {
  constructor(e) {
    super(), Se(this, e, gr, pr, Ae, { text: 0, font: 1, align: 2, color: 3 });
  }
}
function vr(n) {
  let e, r, o, s, p, v, m, z;
  return {
    c() {
      (e = Q("div")),
        (r = Q("button")),
        (o = Q("p")),
        (s = je(n[0])),
        (p = ee()),
        (v = Q("div")),
        (v.innerHTML =
          '<svg viewBox="0 0 360 23" fill="none" class="svelte-aw7cmk"><path d="M5.05737 11.8052C15.8539 11.8052 26.6505 11.8052 37.447 11.8052C46.2264 11.8052 54.6199 14.5048 63.1682 14.6631C79.0741 14.9577 94.9942 13.8239 110.8 15.8275C123.986 17.499 140.758 18.3589 153.457 14.4514C168.671 9.77022 182.26 6.74168 198.442 6.14234C233.438 4.84623 268.69 6.08942 303.709 6.08942C314.311 6.08942 324.914 6.08942 335.516 6.08942C338.642 6.08942 341.221 7.8294 344.196 7.99469C347.577 8.18255 351.033 8.94733 354.675 8.94733" stroke="url(#paint0_linear_156_9)" stroke-width="10" stroke-linecap="round"></path><defs><linearGradient id="paint0_linear_156_9" x1="-22" y1="16.9998" x2="422" y2="5.99987" gradientUnits="userSpaceOnUse"><stop stop-color="#04FED1"></stop><stop offset="1" stop-color="#1400FF"></stop></linearGradient></defs></svg>'),
        _(o, "class", "std-gradient-text svelte-aw7cmk"),
        _(r, "class", "std-button button svelte-aw7cmk"),
        _(r, "type", n[1]),
        _(v, "class", "svg-wrapper svelte-aw7cmk"),
        _(e, "class", "btn-wrapper svelte-aw7cmk");
    },
    m(D, L) {
      oe(D, e, L),
        B(e, r),
        B(r, o),
        B(o, s),
        B(e, p),
        B(e, v),
        m || ((z = Be(e, "click", n[3])), (m = !0));
    },
    p(D, [L]) {
      L & 1 && Pe(s, D[0]), L & 2 && _(r, "type", D[1]);
    },
    i: fe,
    o: fe,
    d(D) {
      D && ne(e), (m = !1), z();
    },
  };
}
function mr(n, e, r) {
  let { text: o = "" } = e,
    { type: s = "button" } = e;
  const p = Ge(),
    v = () => p("action");
  return (
    (n.$$set = (m) => {
      "text" in m && r(0, (o = m.text)), "type" in m && r(1, (s = m.type));
    }),
    [o, s, p, v]
  );
}
class qt extends qe {
  constructor(e) {
    super(), Se(this, e, mr, vr, Ae, { text: 0, type: 1 });
  }
}
function wr(n) {
  let e;
  return {
    c() {
      (e = Q("input")),
        _(e, "type", "text"),
        _(e, "class", "hidden-input svelte-ez9gmy"),
        (e.value = n[5]),
        _(e, "name", n[2]);
    },
    m(r, o) {
      oe(r, e, o);
    },
    p(r, o) {
      o & 32 && e.value !== r[5] && (e.value = r[5]),
        o & 4 && _(e, "name", r[2]);
    },
    d(r) {
      r && ne(e);
    },
  };
}
function _r(n) {
  let e;
  return {
    c() {
      (e = Q("input")),
        _(e, "type", "text"),
        _(e, "class", "hidden-input svelte-ez9gmy"),
        (e.value = n[5]),
        _(e, "name", n[2]),
        (e.required = !0);
    },
    m(r, o) {
      oe(r, e, o);
    },
    p(r, o) {
      o & 32 && e.value !== r[5] && (e.value = r[5]),
        o & 4 && _(e, "name", r[2]);
    },
    d(r) {
      r && ne(e);
    },
  };
}
function yr(n) {
  let e, r, o, s, p, v, m, z, D, L, T, G, E, P, N;
  (m = new qt({ props: { text: n[0] } })), m.$on("action", n[8]);
  function H(I, ae) {
    return I[1] ? _r : wr;
  }
  let W = H(n),
    V = W(n);
  return {
    c() {
      (e = Q("div")),
        (r = Q("div")),
        (o = Q("img")),
        (p = ee()),
        (v = Q("div")),
        ve(m.$$.fragment),
        (z = ee()),
        (D = Q("input")),
        (L = ee()),
        V.c(),
        (T = ee()),
        (G = Q("canvas")),
        tt(o.src, (s = n[4])) || _(o, "src", s),
        _(o, "alt", n[3]),
        _(o, "class", "photo-preview svelte-ez9gmy"),
        _(o, "id", "photo-preview"),
        _(r, "class", "image-wrapper svelte-ez9gmy"),
        _(v, "class", "button-wrapper svelte-ez9gmy"),
        _(D, "type", "file"),
        _(D, "id", "img-input"),
        _(D, "accept", "image/*"),
        _(D, "class", "idden-input"),
        _(D, "name", "original_image"),
        _(G, "id", "canvas"),
        _(G, "class", "hidden"),
        _(e, "class", "input-wrapper svelte-ez9gmy");
    },
    m(I, ae) {
      oe(I, e, ae),
        B(e, r),
        B(r, o),
        B(e, p),
        B(e, v),
        he(m, v, null),
        B(e, z),
        B(e, D),
        B(e, L),
        V.m(e, null),
        B(e, T),
        B(e, G),
        (E = !0),
        P || ((N = [Be(o, "load", n[7]), Be(D, "change", n[6])]), (P = !0));
    },
    p(I, [ae]) {
      (!E || (ae & 16 && !tt(o.src, (s = I[4])))) && _(o, "src", s),
        (!E || ae & 8) && _(o, "alt", I[3]);
      const ue = {};
      ae & 1 && (ue.text = I[0]),
        m.$set(ue),
        W === (W = H(I)) && V
          ? V.p(I, ae)
          : (V.d(1), (V = W(I)), V && (V.c(), V.m(e, T)));
    },
    i(I) {
      E || (re(m.$$.fragment, I), (E = !0));
    },
    o(I) {
      le(m.$$.fragment, I), (E = !1);
    },
    d(I) {
      I && ne(e), pe(m), V.d(), (P = !1), He(N);
    },
  };
}
function br(n, e, r) {
  const o = Ge();
  let { btnText: s = "" } = e,
    { defaultImgSource: p = "" } = e,
    { req: v = !0 } = e,
    { name: m } = e,
    { alt: z } = e,
    D = p,
    L = "",
    T,
    G;
  dt(() => {
    (T = document.getElementById("canvas")),
      (G = document.getElementById("img-input")),
      document.getElementById("photo-preview");
  });
  const E = async (H) => {
      const W = URL.createObjectURL(H.target.files[0]);
      r(4, (D = W));
    },
    P = (H) => {
      console.log("image compression", H.composedPath()[0]);
      const W = H.composedPath()[0].currentSrc,
        V = 400 / H.target.width;
      (T.width = 400), (T.height = H.target.height * V);
      const I = T.getContext("2d");
      I.drawImage(H.target, 0, 0, T.width, T.height);
      const ae = I.canvas.toDataURL(H.target, "image/jpg");
      r(5, (L = ae)), W.includes(p) || o("uploadDone");
    },
    N = () => {
      G.click();
    };
  return (
    (n.$$set = (H) => {
      "btnText" in H && r(0, (s = H.btnText)),
        "defaultImgSource" in H && r(9, (p = H.defaultImgSource)),
        "req" in H && r(1, (v = H.req)),
        "name" in H && r(2, (m = H.name)),
        "alt" in H && r(3, (z = H.alt));
    }),
    [s, v, m, z, D, L, E, P, N, p]
  );
}
class kr extends qe {
  constructor(e) {
    super(),
      Se(this, e, br, yr, Ae, {
        btnText: 0,
        defaultImgSource: 9,
        req: 1,
        name: 2,
        alt: 3,
      });
  }
}
function _t(n) {
  let e, r, o, s, p, v;
  return (
    (e = new ht({
      props: {
        text: "who?",
        font: "f-secondary",
        color: "c-primary",
        align: "left",
      },
    })),
    (o = new Ue({
      props: {
        placeholder: "first name",
        req: !0,
        name: "second_guardian_first_name",
      },
    })),
    (p = new Ue({
      props: {
        placeholder: "last name",
        req: !0,
        name: "second_guardian_last_name",
      },
    })),
    {
      c() {
        ve(e.$$.fragment),
          (r = ee()),
          ve(o.$$.fragment),
          (s = ee()),
          ve(p.$$.fragment);
      },
      m(m, z) {
        he(e, m, z),
          oe(m, r, z),
          he(o, m, z),
          oe(m, s, z),
          he(p, m, z),
          (v = !0);
      },
      i(m) {
        v ||
          (re(e.$$.fragment, m),
          re(o.$$.fragment, m),
          re(p.$$.fragment, m),
          (v = !0));
      },
      o(m) {
        le(e.$$.fragment, m),
          le(o.$$.fragment, m),
          le(p.$$.fragment, m),
          (v = !1);
      },
      d(m) {
        pe(e, m), m && ne(r), pe(o, m), m && ne(s), pe(p, m);
      },
    }
  );
}
function yt(n) {
  let e, r, o;
  return (
    (r = new ft({ props: { text: "Done" } })),
    r.$on("action", n[8]),
    {
      c() {
        (e = Q("div")),
          ve(r.$$.fragment),
          _(e, "class", "button-wrapper_fwd svelte-xesjdc");
      },
      m(s, p) {
        oe(s, e, p), he(r, e, null), (o = !0);
      },
      p: fe,
      i(s) {
        o || (re(r.$$.fragment, s), (o = !0));
      },
      o(s) {
        le(r.$$.fragment, s), (o = !1);
      },
      d(s) {
        s && ne(e), pe(r);
      },
    }
  );
}
function bt(n) {
  let e, r, o;
  return (
    (r = new ft({ props: { text: "Next" } })),
    r.$on("action", n[5]),
    {
      c() {
        (e = Q("div")),
          ve(r.$$.fragment),
          _(e, "class", "button-wrapper_fwd svelte-xesjdc");
      },
      m(s, p) {
        oe(s, e, p), he(r, e, null), (o = !0);
      },
      p: fe,
      i(s) {
        o || (re(r.$$.fragment, s), (o = !0));
      },
      o(s) {
        le(r.$$.fragment, s), (o = !1);
      },
      d(s) {
        s && ne(e), pe(r);
      },
    }
  );
}
function kt(n) {
  let e, r, o;
  return (
    (r = new hr({})),
    r.$on("action", n[6]),
    {
      c() {
        (e = Q("div")),
          ve(r.$$.fragment),
          _(e, "class", "button-wrapper_bkwd svelte-xesjdc");
      },
      m(s, p) {
        oe(s, e, p), he(r, e, null), (o = !0);
      },
      p: fe,
      i(s) {
        o || (re(r.$$.fragment, s), (o = !0));
      },
      o(s) {
        le(r.$$.fragment, s), (o = !1);
      },
      d(s) {
        s && ne(e), pe(r);
      },
    }
  );
}
function xr(n) {
  let e,
    r,
    o,
    s,
    p,
    v,
    m,
    z,
    D,
    L,
    T,
    G,
    E,
    P,
    N,
    H,
    W,
    V,
    I,
    ae,
    ue,
    ye,
    Ie,
    xe,
    Ce,
    Oe,
    De,
    ge,
    M,
    S,
    k,
    C,
    w,
    A,
    O,
    j,
    U;
  (s = new Ue({
    props: { placeholder: "first name", req: !0, name: "first_name" },
  })),
    (v = new Ue({
      props: { placeholder: "last name", req: !0, name: "last_name" },
    })),
    (z = new ir({ props: { startAt: 5, endAt: 7, name: "age" } })),
    (L = new vt({
      props: {
        inputValues: { first: "male", second: "female" },
        valueLabel: { first: "m", second: "f" },
        label: "gender",
        name: "gender",
      },
    })),
    (P = new Ue({
      props: {
        placeholder: "first name",
        req: !0,
        name: "guardian_first_name",
      },
    })),
    (H = new Ue({
      props: { placeholder: "last name", req: !0, name: "guardian_last_name" },
    })),
    (V = new Ue({
      props: {
        placeholder: "phone number",
        type: "phone",
        name: "guardian_phone_number",
      },
    })),
    (ae = new ht({
      props: {
        text: "is someone else allowed to pick up your child?",
        font: "f-secondary",
        color: "c-primary",
        align: "left",
      },
    })),
    (ye = new vt({
      props: {
        inputValues: { first: "yes", second: "no" },
        valueLabel: { first: "y", second: "n" },
        name: "allow_third_party_pick_up",
        req: !0,
      },
    })),
    ye.$on("action", n[7]);
  let se = n[2] && _t();
  (ge = new kr({
    props: {
      defaultImgSource: "images/icons/profile.png",
      btnText: "submit photo",
      name: "photo",
      alt: "portrait or person",
    },
  })),
    ge.$on("uploadDone", n[10]);
  let y = n[3] && n[0] === 2 && yt(n),
    t = n[0] < 2 && bt(n),
    a = n[0] > 0 && kt(n);
  return {
    c() {
      (e = Q("div")),
        (r = Q("form")),
        (o = Q("div")),
        ve(s.$$.fragment),
        (p = ee()),
        ve(v.$$.fragment),
        (m = ee()),
        ve(z.$$.fragment),
        (D = ee()),
        ve(L.$$.fragment),
        (G = ee()),
        (E = Q("div")),
        ve(P.$$.fragment),
        (N = ee()),
        ve(H.$$.fragment),
        (W = ee()),
        ve(V.$$.fragment),
        (I = ee()),
        ve(ae.$$.fragment),
        (ue = ee()),
        ve(ye.$$.fragment),
        (Ie = ee()),
        se && se.c(),
        (Ce = ee()),
        (Oe = Q("div")),
        (De = Q("div")),
        ve(ge.$$.fragment),
        (S = ee()),
        y && y.c(),
        (k = ee()),
        (C = Q("div")),
        (w = ee()),
        (A = Q("div")),
        (O = ee()),
        t && t.c(),
        (j = ee()),
        a && a.c(),
        _(
          o,
          "class",
          (T =
            "form-section-wrapper initial " +
            n[1] +
            " " +
            n[4].first +
            " svelte-xesjdc")
        ),
        _(
          E,
          "class",
          (xe =
            "form-section-wrapper " +
            n[1] +
            " " +
            n[4].second +
            " svelte-xesjdc")
        ),
        _(De, "class", "input-image-wrapper svelte-xesjdc"),
        _(
          Oe,
          "class",
          (M =
            "form-section-wrapper " +
            n[1] +
            " " +
            n[4].third +
            " svelte-xesjdc")
        ),
        _(r, "class", "registration-form std-flex-justify-start svelte-xesjdc"),
        _(r, "id", "form"),
        _(C, "class", "std-spacer-xl"),
        _(A, "class", "std-spacer-xl"),
        _(e, "class", "form-wrapper svelte-xesjdc");
    },
    m(i, u) {
      oe(i, e, u),
        B(e, r),
        B(r, o),
        he(s, o, null),
        B(o, p),
        he(v, o, null),
        B(o, m),
        he(z, o, null),
        B(o, D),
        he(L, o, null),
        B(r, G),
        B(r, E),
        he(P, E, null),
        B(E, N),
        he(H, E, null),
        B(E, W),
        he(V, E, null),
        B(E, I),
        he(ae, E, null),
        B(E, ue),
        he(ye, E, null),
        B(E, Ie),
        se && se.m(E, null),
        B(r, Ce),
        B(r, Oe),
        B(Oe, De),
        he(ge, De, null),
        B(r, S),
        y && y.m(r, null),
        B(e, k),
        B(e, C),
        B(e, w),
        B(e, A),
        B(e, O),
        t && t.m(e, null),
        B(e, j),
        a && a.m(e, null),
        (U = !0);
    },
    p(i, [u]) {
      (!U ||
        (u & 18 &&
          T !==
            (T =
              "form-section-wrapper initial " +
              i[1] +
              " " +
              i[4].first +
              " svelte-xesjdc"))) &&
        _(o, "class", T),
        i[2]
          ? se
            ? u & 4 && re(se, 1)
            : ((se = _t()), se.c(), re(se, 1), se.m(E, null))
          : se &&
            (Ve(),
            le(se, 1, 1, () => {
              se = null;
            }),
            We()),
        (!U ||
          (u & 18 &&
            xe !==
              (xe =
                "form-section-wrapper " +
                i[1] +
                " " +
                i[4].second +
                " svelte-xesjdc"))) &&
          _(E, "class", xe),
        (!U ||
          (u & 18 &&
            M !==
              (M =
                "form-section-wrapper " +
                i[1] +
                " " +
                i[4].third +
                " svelte-xesjdc"))) &&
          _(Oe, "class", M),
        i[3] && i[0] === 2
          ? y
            ? (y.p(i, u), u & 9 && re(y, 1))
            : ((y = yt(i)), y.c(), re(y, 1), y.m(r, null))
          : y &&
            (Ve(),
            le(y, 1, 1, () => {
              y = null;
            }),
            We()),
        i[0] < 2
          ? t
            ? (t.p(i, u), u & 1 && re(t, 1))
            : ((t = bt(i)), t.c(), re(t, 1), t.m(e, j))
          : t &&
            (Ve(),
            le(t, 1, 1, () => {
              t = null;
            }),
            We()),
        i[0] > 0
          ? a
            ? (a.p(i, u), u & 1 && re(a, 1))
            : ((a = kt(i)), a.c(), re(a, 1), a.m(e, null))
          : a &&
            (Ve(),
            le(a, 1, 1, () => {
              a = null;
            }),
            We());
    },
    i(i) {
      U ||
        (re(s.$$.fragment, i),
        re(v.$$.fragment, i),
        re(z.$$.fragment, i),
        re(L.$$.fragment, i),
        re(P.$$.fragment, i),
        re(H.$$.fragment, i),
        re(V.$$.fragment, i),
        re(ae.$$.fragment, i),
        re(ye.$$.fragment, i),
        re(se),
        re(ge.$$.fragment, i),
        re(y),
        re(t),
        re(a),
        (U = !0));
    },
    o(i) {
      le(s.$$.fragment, i),
        le(v.$$.fragment, i),
        le(z.$$.fragment, i),
        le(L.$$.fragment, i),
        le(P.$$.fragment, i),
        le(H.$$.fragment, i),
        le(V.$$.fragment, i),
        le(ae.$$.fragment, i),
        le(ye.$$.fragment, i),
        le(se),
        le(ge.$$.fragment, i),
        le(y),
        le(t),
        le(a),
        (U = !1);
    },
    d(i) {
      i && ne(e),
        pe(s),
        pe(v),
        pe(z),
        pe(L),
        pe(P),
        pe(H),
        pe(V),
        pe(ae),
        pe(ye),
        se && se.d(),
        pe(ge),
        y && y.d(),
        t && t.d(),
        a && a.d();
    },
  };
}
function Cr(n, e, r) {
  const o = Ge();
  let { currentTitle: s = "child" } = e,
    p = 0,
    v = "",
    m = !0,
    z = !1,
    D = { first: "display", second: "", third: "" },
    L;
  dt(() => {
    (L = document.getElementsByTagName("input")),
      document.getElementById("form");
  });
  const T = (W) => {
      switch (W) {
        case 0:
          r(9, (s = "child"));
          break;
        case 1:
          r(9, (s = "guardian"));
          break;
        case 2:
          r(9, (s = "child"));
          break;
      }
    },
    G = () => {
      switch ((T(p + 1), r(0, (p += 1)), r(1, (v = "swapfwd")), p)) {
        case 0:
          r(4, (D = { first: "display", second: "", third: "" }));
          break;
        case 1:
          r(4, (D = { first: "", second: "display", third: "" }));
          break;
        case 2:
          r(4, (D = { first: "", second: "", third: "display" }));
          break;
      }
    },
    E = () => {
      switch ((T(p - 1), r(0, (p -= 1)), r(1, (v = "swapbkwd")), p)) {
        case 0:
          r(4, (D = { first: "display", second: "", third: "" }));
          break;
        case 1:
          r(4, (D = { first: "", second: "display", third: "" }));
          break;
        case 2:
          r(4, (D = { first: "", second: "", third: "display" }));
          break;
      }
    },
    P = (W) => {
      const V = W.detail.option;
      console.log("event", V), V === 1 ? r(2, (m = !0)) : r(2, (m = !1));
    },
    N = async () => {
      const W = { first_name: "" };
      for (let I = 0; I < L.length; I++) {
        if (!L[I].value) {
          alert("Please make sure all fields are filled out!");
          return;
        }
        W[L[I].name] = L[I].value;
      }
      const V = await Vt("/kids/register", W);
      V.id &&
        ((W.id = V.id), o("registration_success", W), r(9, (s = W.first_name)));
    },
    H = () => r(3, (z = !0));
  return (
    (n.$$set = (W) => {
      "currentTitle" in W && r(9, (s = W.currentTitle));
    }),
    [p, v, m, z, D, G, E, P, N, s, H]
  );
}
class Ar extends qe {
  constructor(e) {
    super(), Se(this, e, Cr, xr, Ae, { currentTitle: 9 });
  }
}
function xt(n) {
  let e,
    r = n[0].toUpperCase() + "",
    o;
  return {
    c() {
      (e = Q("h1")), (o = je(r)), _(e, "class", "svelte-1j89jsw");
    },
    m(s, p) {
      oe(s, e, p), B(e, o);
    },
    p(s, p) {
      p & 1 && r !== (r = s[0].toUpperCase() + "") && Pe(o, r);
    },
    d(s) {
      s && ne(e);
    },
  };
}
function Sr(n) {
  let e,
    r,
    o,
    s = n[0] && xt(n);
  return {
    c() {
      (e = Q("div")),
        s && s.c(),
        (r = ee()),
        (o = Q("div")),
        (o.innerHTML =
          '<svg viewBox="0 0 276 13" class="svelte-1j89jsw"><path d="M3 9.84148C49.0795 9.84148 95.0854 7.94865 141.138 6.68027C184.608 5.48299 228.464 6.59909 271.85 3.26175C279.217 2.69508 257.073 3.22499 249.685 3.22499C216.222 3.22499 182.76 3.22499 149.298 3.22499C115.269 3.22499 81.2036 3.04069 47.1834 3.96015C40.0086 4.15407 32.8123 4.40673 25.7166 5.57752C23.8476 5.88591 22.6842 6.03683 21.5262 7.19488" stroke="url(#paint0_linear_132_110)" stroke-width="5" stroke-linecap="round" fill="none"></path><defs><linearGradient id="paint0_linear_132_110" x1="22.5" y1="5.99992" x2="292.5" y2="14.4999" gradientUnits="userSpaceOnUse"><stop stop-color="#04FED1"></stop><stop offset="1" stop-color="#1400FF"></stop></linearGradient></defs></svg>'),
        _(o, "class", "svg-wrapper svelte-1j89jsw"),
        _(e, "class", "title-wrapper svelte-1j89jsw");
    },
    m(p, v) {
      oe(p, e, v), s && s.m(e, null), B(e, r), B(e, o);
    },
    p(p, [v]) {
      p[0]
        ? s
          ? s.p(p, v)
          : ((s = xt(p)), s.c(), s.m(e, r))
        : s && (s.d(1), (s = null));
    },
    i: fe,
    o: fe,
    d(p) {
      p && ne(e), s && s.d();
    },
  };
}
function qr(n, e, r) {
  let { title: o = "" } = e;
  return (
    (n.$$set = (s) => {
      "title" in s && r(0, (o = s.title));
    }),
    [o]
  );
}
class Mr extends qe {
  constructor(e) {
    super(), Se(this, e, qr, Sr, Ae, { title: 0 });
  }
}
function Or(n) {
  let e, r, o;
  return {
    c() {
      (e = Q("div")),
        (r = Q("img")),
        tt(r.src, (o = n[1])) || _(r, "src", o),
        _(r, "alt", n[0]),
        _(r, "class", "std-img"),
        _(e, "class", "image-wrapper svelte-1kfmfwi");
    },
    m(s, p) {
      oe(s, e, p), B(e, r);
    },
    p(s, [p]) {
      p & 2 && !tt(r.src, (o = s[1])) && _(r, "src", o),
        p & 1 && _(r, "alt", s[0]);
    },
    i: fe,
    o: fe,
    d(s) {
      s && ne(e);
    },
  };
}
function zr(n, e, r) {
  let { alt: o = "" } = e,
    { src: s = "" } = e;
  return (
    (n.$$set = (p) => {
      "alt" in p && r(0, (o = p.alt)), "src" in p && r(1, (s = p.src));
    }),
    [o, s]
  );
}
class Dr extends qe {
  constructor(e) {
    super(), Se(this, e, zr, Or, Ae, { alt: 0, src: 1 });
  }
}
function Ir(n) {
  return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default")
    ? n.default
    : n;
}
var Mt = { exports: {} };
(function (n, e) {
  (function (r, o) {
    n.exports = o();
  })(self, function () {
    return (() => {
      var r = {
          192: (p, v) => {
            var m,
              z,
              D = (function () {
                var L = function (M, S) {
                  var k = M,
                    C = H[S],
                    w = null,
                    A = 0,
                    O = null,
                    j = [],
                    U = {},
                    se = function (c, d) {
                      (w = (function (l) {
                        for (var g = new Array(l), b = 0; b < l; b += 1) {
                          g[b] = new Array(l);
                          for (var F = 0; F < l; F += 1) g[b][F] = null;
                        }
                        return g;
                      })((A = 4 * k + 17))),
                        y(0, 0),
                        y(A - 7, 0),
                        y(0, A - 7),
                        a(),
                        t(),
                        u(c, d),
                        k >= 7 && i(c),
                        O == null && (O = f(k, C, j)),
                        h(O, d);
                    },
                    y = function (c, d) {
                      for (var l = -1; l <= 7; l += 1)
                        if (!(c + l <= -1 || A <= c + l))
                          for (var g = -1; g <= 7; g += 1)
                            d + g <= -1 ||
                              A <= d + g ||
                              (w[c + l][d + g] =
                                (0 <= l && l <= 6 && (g == 0 || g == 6)) ||
                                (0 <= g && g <= 6 && (l == 0 || l == 6)) ||
                                (2 <= l && l <= 4 && 2 <= g && g <= 4));
                    },
                    t = function () {
                      for (var c = 8; c < A - 8; c += 1)
                        w[c][6] == null && (w[c][6] = c % 2 == 0);
                      for (var d = 8; d < A - 8; d += 1)
                        w[6][d] == null && (w[6][d] = d % 2 == 0);
                    },
                    a = function () {
                      for (
                        var c = W.getPatternPosition(k), d = 0;
                        d < c.length;
                        d += 1
                      )
                        for (var l = 0; l < c.length; l += 1) {
                          var g = c[d],
                            b = c[l];
                          if (w[g][b] == null)
                            for (var F = -2; F <= 2; F += 1)
                              for (var R = -2; R <= 2; R += 1)
                                w[g + F][b + R] =
                                  F == -2 ||
                                  F == 2 ||
                                  R == -2 ||
                                  R == 2 ||
                                  (F == 0 && R == 0);
                        }
                    },
                    i = function (c) {
                      for (
                        var d = W.getBCHTypeNumber(k), l = 0;
                        l < 18;
                        l += 1
                      ) {
                        var g = !c && ((d >> l) & 1) == 1;
                        w[Math.floor(l / 3)][(l % 3) + A - 8 - 3] = g;
                      }
                      for (l = 0; l < 18; l += 1)
                        (g = !c && ((d >> l) & 1) == 1),
                          (w[(l % 3) + A - 8 - 3][Math.floor(l / 3)] = g);
                    },
                    u = function (c, d) {
                      for (
                        var l = (C << 3) | d, g = W.getBCHTypeInfo(l), b = 0;
                        b < 15;
                        b += 1
                      ) {
                        var F = !c && ((g >> b) & 1) == 1;
                        b < 6
                          ? (w[b][8] = F)
                          : b < 8
                          ? (w[b + 1][8] = F)
                          : (w[A - 15 + b][8] = F);
                      }
                      for (b = 0; b < 15; b += 1)
                        (F = !c && ((g >> b) & 1) == 1),
                          b < 8
                            ? (w[8][A - b - 1] = F)
                            : b < 9
                            ? (w[8][15 - b - 1 + 1] = F)
                            : (w[8][15 - b - 1] = F);
                      w[A - 8][8] = !c;
                    },
                    h = function (c, d) {
                      for (
                        var l = -1,
                          g = A - 1,
                          b = 7,
                          F = 0,
                          R = W.getMaskFunction(d),
                          q = A - 1;
                        q > 0;
                        q -= 2
                      )
                        for (q == 6 && (q -= 1); ; ) {
                          for (var J = 0; J < 2; J += 1)
                            if (w[g][q - J] == null) {
                              var Y = !1;
                              F < c.length && (Y = ((c[F] >>> b) & 1) == 1),
                                R(g, q - J) && (Y = !Y),
                                (w[g][q - J] = Y),
                                (b -= 1) == -1 && ((F += 1), (b = 7));
                            }
                          if ((g += l) < 0 || A <= g) {
                            (g -= l), (l = -l);
                            break;
                          }
                        }
                    },
                    f = function (c, d, l) {
                      for (
                        var g = ae.getRSBlocks(c, d), b = ue(), F = 0;
                        F < l.length;
                        F += 1
                      ) {
                        var R = l[F];
                        b.put(R.getMode(), 4),
                          b.put(
                            R.getLength(),
                            W.getLengthInBits(R.getMode(), c)
                          ),
                          R.write(b);
                      }
                      var q = 0;
                      for (F = 0; F < g.length; F += 1) q += g[F].dataCount;
                      if (b.getLengthInBits() > 8 * q)
                        throw (
                          "code length overflow. (" +
                          b.getLengthInBits() +
                          ">" +
                          8 * q +
                          ")"
                        );
                      for (
                        b.getLengthInBits() + 4 <= 8 * q && b.put(0, 4);
                        b.getLengthInBits() % 8 != 0;

                      )
                        b.putBit(!1);
                      for (
                        ;
                        !(
                          b.getLengthInBits() >= 8 * q ||
                          (b.put(236, 8), b.getLengthInBits() >= 8 * q)
                        );

                      )
                        b.put(17, 8);
                      return (function (J, Y) {
                        for (
                          var Z = 0,
                            ce = 0,
                            X = 0,
                            $ = new Array(Y.length),
                            K = new Array(Y.length),
                            te = 0;
                          te < Y.length;
                          te += 1
                        ) {
                          var ze = Y[te].dataCount,
                            me = Y[te].totalCount - ze;
                          (ce = Math.max(ce, ze)),
                            (X = Math.max(X, me)),
                            ($[te] = new Array(ze));
                          for (var ie = 0; ie < $[te].length; ie += 1)
                            $[te][ie] = 255 & J.getBuffer()[ie + Z];
                          Z += ze;
                          var we = W.getErrorCorrectPolynomial(me),
                            de = I($[te], we.getLength() - 1).mod(we);
                          for (
                            K[te] = new Array(we.getLength() - 1), ie = 0;
                            ie < K[te].length;
                            ie += 1
                          ) {
                            var _e = ie + de.getLength() - K[te].length;
                            K[te][ie] = _e >= 0 ? de.getAt(_e) : 0;
                          }
                        }
                        var be = 0;
                        for (ie = 0; ie < Y.length; ie += 1)
                          be += Y[ie].totalCount;
                        var ke = new Array(be),
                          Me = 0;
                        for (ie = 0; ie < ce; ie += 1)
                          for (te = 0; te < Y.length; te += 1)
                            ie < $[te].length &&
                              ((ke[Me] = $[te][ie]), (Me += 1));
                        for (ie = 0; ie < X; ie += 1)
                          for (te = 0; te < Y.length; te += 1)
                            ie < K[te].length &&
                              ((ke[Me] = K[te][ie]), (Me += 1));
                        return ke;
                      })(b, g);
                    };
                  (U.addData = function (c, d) {
                    var l = null;
                    switch ((d = d || "Byte")) {
                      case "Numeric":
                        l = ye(c);
                        break;
                      case "Alphanumeric":
                        l = Ie(c);
                        break;
                      case "Byte":
                        l = xe(c);
                        break;
                      case "Kanji":
                        l = Ce(c);
                        break;
                      default:
                        throw "mode:" + d;
                    }
                    j.push(l), (O = null);
                  }),
                    (U.isDark = function (c, d) {
                      if (c < 0 || A <= c || d < 0 || A <= d) throw c + "," + d;
                      return w[c][d];
                    }),
                    (U.getModuleCount = function () {
                      return A;
                    }),
                    (U.make = function () {
                      if (k < 1) {
                        for (var c = 1; c < 40; c++) {
                          for (
                            var d = ae.getRSBlocks(c, C), l = ue(), g = 0;
                            g < j.length;
                            g++
                          ) {
                            var b = j[g];
                            l.put(b.getMode(), 4),
                              l.put(
                                b.getLength(),
                                W.getLengthInBits(b.getMode(), c)
                              ),
                              b.write(l);
                          }
                          var F = 0;
                          for (g = 0; g < d.length; g++) F += d[g].dataCount;
                          if (l.getLengthInBits() <= 8 * F) break;
                        }
                        k = c;
                      }
                      se(
                        !1,
                        (function () {
                          for (var R = 0, q = 0, J = 0; J < 8; J += 1) {
                            se(!0, J);
                            var Y = W.getLostPoint(U);
                            (J == 0 || R > Y) && ((R = Y), (q = J));
                          }
                          return q;
                        })()
                      );
                    }),
                    (U.createTableTag = function (c, d) {
                      c = c || 2;
                      var l = "";
                      (l += '<table style="'),
                        (l += " border-width: 0px; border-style: none;"),
                        (l += " border-collapse: collapse;"),
                        (l +=
                          " padding: 0px; margin: " +
                          (d = d === void 0 ? 4 * c : d) +
                          "px;"),
                        (l += '">'),
                        (l += "<tbody>");
                      for (var g = 0; g < U.getModuleCount(); g += 1) {
                        l += "<tr>";
                        for (var b = 0; b < U.getModuleCount(); b += 1)
                          (l += '<td style="'),
                            (l += " border-width: 0px; border-style: none;"),
                            (l += " border-collapse: collapse;"),
                            (l += " padding: 0px; margin: 0px;"),
                            (l += " width: " + c + "px;"),
                            (l += " height: " + c + "px;"),
                            (l += " background-color: "),
                            (l += U.isDark(g, b) ? "#000000" : "#ffffff"),
                            (l += ";"),
                            (l += '"/>');
                        l += "</tr>";
                      }
                      return (l += "</tbody>") + "</table>";
                    }),
                    (U.createSvgTag = function (c, d, l, g) {
                      var b = {};
                      typeof arguments[0] == "object" &&
                        ((c = (b = arguments[0]).cellSize),
                        (d = b.margin),
                        (l = b.alt),
                        (g = b.title)),
                        (c = c || 2),
                        (d = d === void 0 ? 4 * c : d),
                        ((l =
                          typeof l == "string" ? { text: l } : l || {}).text =
                          l.text || null),
                        (l.id = l.text ? l.id || "qrcode-description" : null),
                        ((g =
                          typeof g == "string" ? { text: g } : g || {}).text =
                          g.text || null),
                        (g.id = g.text ? g.id || "qrcode-title" : null);
                      var F,
                        R,
                        q,
                        J,
                        Y = U.getModuleCount() * c + 2 * d,
                        Z = "";
                      for (
                        J =
                          "l" +
                          c +
                          ",0 0," +
                          c +
                          " -" +
                          c +
                          ",0 0,-" +
                          c +
                          "z ",
                          Z +=
                            '<svg version="1.1" xmlns="http://www.w3.org/2000/svg"',
                          Z += b.scalable
                            ? ""
                            : ' width="' + Y + 'px" height="' + Y + 'px"',
                          Z += ' viewBox="0 0 ' + Y + " " + Y + '" ',
                          Z += ' preserveAspectRatio="xMinYMin meet"',
                          Z +=
                            g.text || l.text
                              ? ' role="img" aria-labelledby="' +
                                x([g.id, l.id].join(" ").trim()) +
                                '"'
                              : "",
                          Z += ">",
                          Z += g.text
                            ? '<title id="' +
                              x(g.id) +
                              '">' +
                              x(g.text) +
                              "</title>"
                            : "",
                          Z += l.text
                            ? '<description id="' +
                              x(l.id) +
                              '">' +
                              x(l.text) +
                              "</description>"
                            : "",
                          Z +=
                            '<rect width="100%" height="100%" fill="white" cx="0" cy="0"/>',
                          Z += '<path d="',
                          R = 0;
                        R < U.getModuleCount();
                        R += 1
                      )
                        for (
                          q = R * c + d, F = 0;
                          F < U.getModuleCount();
                          F += 1
                        )
                          U.isDark(R, F) &&
                            (Z += "M" + (F * c + d) + "," + q + J);
                      return (
                        (Z += '" stroke="transparent" fill="black"/>') +
                        "</svg>"
                      );
                    }),
                    (U.createDataURL = function (c, d) {
                      (c = c || 2), (d = d === void 0 ? 4 * c : d);
                      var l = U.getModuleCount() * c + 2 * d,
                        g = d,
                        b = l - d;
                      return ge(l, l, function (F, R) {
                        if (g <= F && F < b && g <= R && R < b) {
                          var q = Math.floor((F - g) / c),
                            J = Math.floor((R - g) / c);
                          return U.isDark(J, q) ? 0 : 1;
                        }
                        return 1;
                      });
                    }),
                    (U.createImgTag = function (c, d, l) {
                      (c = c || 2), (d = d === void 0 ? 4 * c : d);
                      var g = U.getModuleCount() * c + 2 * d,
                        b = "";
                      return (
                        (b += "<img"),
                        (b += ' src="'),
                        (b += U.createDataURL(c, d)),
                        (b += '"'),
                        (b += ' width="'),
                        (b += g),
                        (b += '"'),
                        (b += ' height="'),
                        (b += g),
                        (b += '"'),
                        l && ((b += ' alt="'), (b += x(l)), (b += '"')),
                        b + "/>"
                      );
                    });
                  var x = function (c) {
                    for (var d = "", l = 0; l < c.length; l += 1) {
                      var g = c.charAt(l);
                      switch (g) {
                        case "<":
                          d += "&lt;";
                          break;
                        case ">":
                          d += "&gt;";
                          break;
                        case "&":
                          d += "&amp;";
                          break;
                        case '"':
                          d += "&quot;";
                          break;
                        default:
                          d += g;
                      }
                    }
                    return d;
                  };
                  return (
                    (U.createASCII = function (c, d) {
                      if ((c = c || 1) < 2)
                        return (function ($) {
                          $ = $ === void 0 ? 2 : $;
                          var K,
                            te,
                            ze,
                            me,
                            ie,
                            we = 1 * U.getModuleCount() + 2 * $,
                            de = $,
                            _e = we - $,
                            be = {
                              "\u2588\u2588": "\u2588",
                              "\u2588 ": "\u2580",
                              " \u2588": "\u2584",
                              "  ": " ",
                            },
                            ke = {
                              "\u2588\u2588": "\u2580",
                              "\u2588 ": "\u2580",
                              " \u2588": " ",
                              "  ": " ",
                            },
                            Me = "";
                          for (K = 0; K < we; K += 2) {
                            for (
                              ze = Math.floor((K - de) / 1),
                                me = Math.floor((K + 1 - de) / 1),
                                te = 0;
                              te < we;
                              te += 1
                            )
                              (ie = "\u2588"),
                                de <= te &&
                                  te < _e &&
                                  de <= K &&
                                  K < _e &&
                                  U.isDark(ze, Math.floor((te - de) / 1)) &&
                                  (ie = " "),
                                de <= te &&
                                te < _e &&
                                de <= K + 1 &&
                                K + 1 < _e &&
                                U.isDark(me, Math.floor((te - de) / 1))
                                  ? (ie += " ")
                                  : (ie += "\u2588"),
                                (Me += $ < 1 && K + 1 >= _e ? ke[ie] : be[ie]);
                            Me += `
`;
                          }
                          return we % 2 && $ > 0
                            ? Me.substring(0, Me.length - we - 1) +
                                Array(we + 1).join("\u2580")
                            : Me.substring(0, Me.length - 1);
                        })(d);
                      (c -= 1), (d = d === void 0 ? 2 * c : d);
                      var l,
                        g,
                        b,
                        F,
                        R = U.getModuleCount() * c + 2 * d,
                        q = d,
                        J = R - d,
                        Y = Array(c + 1).join("\u2588\u2588"),
                        Z = Array(c + 1).join("  "),
                        ce = "",
                        X = "";
                      for (l = 0; l < R; l += 1) {
                        for (
                          b = Math.floor((l - q) / c), X = "", g = 0;
                          g < R;
                          g += 1
                        )
                          (F = 1),
                            q <= g &&
                              g < J &&
                              q <= l &&
                              l < J &&
                              U.isDark(b, Math.floor((g - q) / c)) &&
                              (F = 0),
                            (X += F ? Y : Z);
                        for (b = 0; b < c; b += 1)
                          ce +=
                            X +
                            `
`;
                      }
                      return ce.substring(0, ce.length - 1);
                    }),
                    (U.renderTo2dContext = function (c, d) {
                      d = d || 2;
                      for (var l = U.getModuleCount(), g = 0; g < l; g++)
                        for (var b = 0; b < l; b++)
                          (c.fillStyle = U.isDark(g, b) ? "black" : "white"),
                            c.fillRect(g * d, b * d, d, d);
                    }),
                    U
                  );
                };
                (L.stringToBytes = (L.stringToBytesFuncs = {
                  default: function (M) {
                    for (var S = [], k = 0; k < M.length; k += 1) {
                      var C = M.charCodeAt(k);
                      S.push(255 & C);
                    }
                    return S;
                  },
                }).default),
                  (L.createStringToBytes = function (M, S) {
                    var k = (function () {
                        for (
                          var w = De(M),
                            A = function () {
                              var t = w.read();
                              if (t == -1) throw "eof";
                              return t;
                            },
                            O = 0,
                            j = {};
                          ;

                        ) {
                          var U = w.read();
                          if (U == -1) break;
                          var se = A(),
                            y = (A() << 8) | A();
                          (j[String.fromCharCode((U << 8) | se)] = y), (O += 1);
                        }
                        if (O != S) throw O + " != " + S;
                        return j;
                      })(),
                      C = "?".charCodeAt(0);
                    return function (w) {
                      for (var A = [], O = 0; O < w.length; O += 1) {
                        var j = w.charCodeAt(O);
                        if (j < 128) A.push(j);
                        else {
                          var U = k[w.charAt(O)];
                          typeof U == "number"
                            ? (255 & U) == U
                              ? A.push(U)
                              : (A.push(U >>> 8), A.push(255 & U))
                            : A.push(C);
                        }
                      }
                      return A;
                    };
                  });
                var T,
                  G,
                  E,
                  P,
                  N,
                  H = { L: 1, M: 0, Q: 3, H: 2 },
                  W =
                    ((T = [
                      [],
                      [6, 18],
                      [6, 22],
                      [6, 26],
                      [6, 30],
                      [6, 34],
                      [6, 22, 38],
                      [6, 24, 42],
                      [6, 26, 46],
                      [6, 28, 50],
                      [6, 30, 54],
                      [6, 32, 58],
                      [6, 34, 62],
                      [6, 26, 46, 66],
                      [6, 26, 48, 70],
                      [6, 26, 50, 74],
                      [6, 30, 54, 78],
                      [6, 30, 56, 82],
                      [6, 30, 58, 86],
                      [6, 34, 62, 90],
                      [6, 28, 50, 72, 94],
                      [6, 26, 50, 74, 98],
                      [6, 30, 54, 78, 102],
                      [6, 28, 54, 80, 106],
                      [6, 32, 58, 84, 110],
                      [6, 30, 58, 86, 114],
                      [6, 34, 62, 90, 118],
                      [6, 26, 50, 74, 98, 122],
                      [6, 30, 54, 78, 102, 126],
                      [6, 26, 52, 78, 104, 130],
                      [6, 30, 56, 82, 108, 134],
                      [6, 34, 60, 86, 112, 138],
                      [6, 30, 58, 86, 114, 142],
                      [6, 34, 62, 90, 118, 146],
                      [6, 30, 54, 78, 102, 126, 150],
                      [6, 24, 50, 76, 102, 128, 154],
                      [6, 28, 54, 80, 106, 132, 158],
                      [6, 32, 58, 84, 110, 136, 162],
                      [6, 26, 54, 82, 110, 138, 166],
                      [6, 30, 58, 86, 114, 142, 170],
                    ]),
                    (G = 1335),
                    (E = 7973),
                    (N = function (M) {
                      for (var S = 0; M != 0; ) (S += 1), (M >>>= 1);
                      return S;
                    }),
                    ((P = {}).getBCHTypeInfo = function (M) {
                      for (var S = M << 10; N(S) - N(G) >= 0; )
                        S ^= G << (N(S) - N(G));
                      return 21522 ^ ((M << 10) | S);
                    }),
                    (P.getBCHTypeNumber = function (M) {
                      for (var S = M << 12; N(S) - N(E) >= 0; )
                        S ^= E << (N(S) - N(E));
                      return (M << 12) | S;
                    }),
                    (P.getPatternPosition = function (M) {
                      return T[M - 1];
                    }),
                    (P.getMaskFunction = function (M) {
                      switch (M) {
                        case 0:
                          return function (S, k) {
                            return (S + k) % 2 == 0;
                          };
                        case 1:
                          return function (S, k) {
                            return S % 2 == 0;
                          };
                        case 2:
                          return function (S, k) {
                            return k % 3 == 0;
                          };
                        case 3:
                          return function (S, k) {
                            return (S + k) % 3 == 0;
                          };
                        case 4:
                          return function (S, k) {
                            return (
                              (Math.floor(S / 2) + Math.floor(k / 3)) % 2 == 0
                            );
                          };
                        case 5:
                          return function (S, k) {
                            return ((S * k) % 2) + ((S * k) % 3) == 0;
                          };
                        case 6:
                          return function (S, k) {
                            return (((S * k) % 2) + ((S * k) % 3)) % 2 == 0;
                          };
                        case 7:
                          return function (S, k) {
                            return (((S * k) % 3) + ((S + k) % 2)) % 2 == 0;
                          };
                        default:
                          throw "bad maskPattern:" + M;
                      }
                    }),
                    (P.getErrorCorrectPolynomial = function (M) {
                      for (var S = I([1], 0), k = 0; k < M; k += 1)
                        S = S.multiply(I([1, V.gexp(k)], 0));
                      return S;
                    }),
                    (P.getLengthInBits = function (M, S) {
                      if (1 <= S && S < 10)
                        switch (M) {
                          case 1:
                            return 10;
                          case 2:
                            return 9;
                          case 4:
                          case 8:
                            return 8;
                          default:
                            throw "mode:" + M;
                        }
                      else if (S < 27)
                        switch (M) {
                          case 1:
                            return 12;
                          case 2:
                            return 11;
                          case 4:
                            return 16;
                          case 8:
                            return 10;
                          default:
                            throw "mode:" + M;
                        }
                      else {
                        if (!(S < 41)) throw "type:" + S;
                        switch (M) {
                          case 1:
                            return 14;
                          case 2:
                            return 13;
                          case 4:
                            return 16;
                          case 8:
                            return 12;
                          default:
                            throw "mode:" + M;
                        }
                      }
                    }),
                    (P.getLostPoint = function (M) {
                      for (
                        var S = M.getModuleCount(), k = 0, C = 0;
                        C < S;
                        C += 1
                      )
                        for (var w = 0; w < S; w += 1) {
                          for (
                            var A = 0, O = M.isDark(C, w), j = -1;
                            j <= 1;
                            j += 1
                          )
                            if (!(C + j < 0 || S <= C + j))
                              for (var U = -1; U <= 1; U += 1)
                                w + U < 0 ||
                                  S <= w + U ||
                                  (j == 0 && U == 0) ||
                                  (O == M.isDark(C + j, w + U) && (A += 1));
                          A > 5 && (k += 3 + A - 5);
                        }
                      for (C = 0; C < S - 1; C += 1)
                        for (w = 0; w < S - 1; w += 1) {
                          var se = 0;
                          M.isDark(C, w) && (se += 1),
                            M.isDark(C + 1, w) && (se += 1),
                            M.isDark(C, w + 1) && (se += 1),
                            M.isDark(C + 1, w + 1) && (se += 1),
                            (se != 0 && se != 4) || (k += 3);
                        }
                      for (C = 0; C < S; C += 1)
                        for (w = 0; w < S - 6; w += 1)
                          M.isDark(C, w) &&
                            !M.isDark(C, w + 1) &&
                            M.isDark(C, w + 2) &&
                            M.isDark(C, w + 3) &&
                            M.isDark(C, w + 4) &&
                            !M.isDark(C, w + 5) &&
                            M.isDark(C, w + 6) &&
                            (k += 40);
                      for (w = 0; w < S; w += 1)
                        for (C = 0; C < S - 6; C += 1)
                          M.isDark(C, w) &&
                            !M.isDark(C + 1, w) &&
                            M.isDark(C + 2, w) &&
                            M.isDark(C + 3, w) &&
                            M.isDark(C + 4, w) &&
                            !M.isDark(C + 5, w) &&
                            M.isDark(C + 6, w) &&
                            (k += 40);
                      var y = 0;
                      for (w = 0; w < S; w += 1)
                        for (C = 0; C < S; C += 1) M.isDark(C, w) && (y += 1);
                      return k + (Math.abs((100 * y) / S / S - 50) / 5) * 10;
                    }),
                    P),
                  V = (function () {
                    for (
                      var M = new Array(256), S = new Array(256), k = 0;
                      k < 8;
                      k += 1
                    )
                      M[k] = 1 << k;
                    for (k = 8; k < 256; k += 1)
                      M[k] = M[k - 4] ^ M[k - 5] ^ M[k - 6] ^ M[k - 8];
                    for (k = 0; k < 255; k += 1) S[M[k]] = k;
                    return {
                      glog: function (C) {
                        if (C < 1) throw "glog(" + C + ")";
                        return S[C];
                      },
                      gexp: function (C) {
                        for (; C < 0; ) C += 255;
                        for (; C >= 256; ) C -= 255;
                        return M[C];
                      },
                    };
                  })();
                function I(M, S) {
                  if (M.length === void 0) throw M.length + "/" + S;
                  var k = (function () {
                      for (var w = 0; w < M.length && M[w] == 0; ) w += 1;
                      for (
                        var A = new Array(M.length - w + S), O = 0;
                        O < M.length - w;
                        O += 1
                      )
                        A[O] = M[O + w];
                      return A;
                    })(),
                    C = {
                      getAt: function (w) {
                        return k[w];
                      },
                      getLength: function () {
                        return k.length;
                      },
                      multiply: function (w) {
                        for (
                          var A = new Array(C.getLength() + w.getLength() - 1),
                            O = 0;
                          O < C.getLength();
                          O += 1
                        )
                          for (var j = 0; j < w.getLength(); j += 1)
                            A[O + j] ^= V.gexp(
                              V.glog(C.getAt(O)) + V.glog(w.getAt(j))
                            );
                        return I(A, 0);
                      },
                      mod: function (w) {
                        if (C.getLength() - w.getLength() < 0) return C;
                        for (
                          var A = V.glog(C.getAt(0)) - V.glog(w.getAt(0)),
                            O = new Array(C.getLength()),
                            j = 0;
                          j < C.getLength();
                          j += 1
                        )
                          O[j] = C.getAt(j);
                        for (j = 0; j < w.getLength(); j += 1)
                          O[j] ^= V.gexp(V.glog(w.getAt(j)) + A);
                        return I(O, 0).mod(w);
                      },
                    };
                  return C;
                }
                var ae = (function () {
                    var M = [
                        [1, 26, 19],
                        [1, 26, 16],
                        [1, 26, 13],
                        [1, 26, 9],
                        [1, 44, 34],
                        [1, 44, 28],
                        [1, 44, 22],
                        [1, 44, 16],
                        [1, 70, 55],
                        [1, 70, 44],
                        [2, 35, 17],
                        [2, 35, 13],
                        [1, 100, 80],
                        [2, 50, 32],
                        [2, 50, 24],
                        [4, 25, 9],
                        [1, 134, 108],
                        [2, 67, 43],
                        [2, 33, 15, 2, 34, 16],
                        [2, 33, 11, 2, 34, 12],
                        [2, 86, 68],
                        [4, 43, 27],
                        [4, 43, 19],
                        [4, 43, 15],
                        [2, 98, 78],
                        [4, 49, 31],
                        [2, 32, 14, 4, 33, 15],
                        [4, 39, 13, 1, 40, 14],
                        [2, 121, 97],
                        [2, 60, 38, 2, 61, 39],
                        [4, 40, 18, 2, 41, 19],
                        [4, 40, 14, 2, 41, 15],
                        [2, 146, 116],
                        [3, 58, 36, 2, 59, 37],
                        [4, 36, 16, 4, 37, 17],
                        [4, 36, 12, 4, 37, 13],
                        [2, 86, 68, 2, 87, 69],
                        [4, 69, 43, 1, 70, 44],
                        [6, 43, 19, 2, 44, 20],
                        [6, 43, 15, 2, 44, 16],
                        [4, 101, 81],
                        [1, 80, 50, 4, 81, 51],
                        [4, 50, 22, 4, 51, 23],
                        [3, 36, 12, 8, 37, 13],
                        [2, 116, 92, 2, 117, 93],
                        [6, 58, 36, 2, 59, 37],
                        [4, 46, 20, 6, 47, 21],
                        [7, 42, 14, 4, 43, 15],
                        [4, 133, 107],
                        [8, 59, 37, 1, 60, 38],
                        [8, 44, 20, 4, 45, 21],
                        [12, 33, 11, 4, 34, 12],
                        [3, 145, 115, 1, 146, 116],
                        [4, 64, 40, 5, 65, 41],
                        [11, 36, 16, 5, 37, 17],
                        [11, 36, 12, 5, 37, 13],
                        [5, 109, 87, 1, 110, 88],
                        [5, 65, 41, 5, 66, 42],
                        [5, 54, 24, 7, 55, 25],
                        [11, 36, 12, 7, 37, 13],
                        [5, 122, 98, 1, 123, 99],
                        [7, 73, 45, 3, 74, 46],
                        [15, 43, 19, 2, 44, 20],
                        [3, 45, 15, 13, 46, 16],
                        [1, 135, 107, 5, 136, 108],
                        [10, 74, 46, 1, 75, 47],
                        [1, 50, 22, 15, 51, 23],
                        [2, 42, 14, 17, 43, 15],
                        [5, 150, 120, 1, 151, 121],
                        [9, 69, 43, 4, 70, 44],
                        [17, 50, 22, 1, 51, 23],
                        [2, 42, 14, 19, 43, 15],
                        [3, 141, 113, 4, 142, 114],
                        [3, 70, 44, 11, 71, 45],
                        [17, 47, 21, 4, 48, 22],
                        [9, 39, 13, 16, 40, 14],
                        [3, 135, 107, 5, 136, 108],
                        [3, 67, 41, 13, 68, 42],
                        [15, 54, 24, 5, 55, 25],
                        [15, 43, 15, 10, 44, 16],
                        [4, 144, 116, 4, 145, 117],
                        [17, 68, 42],
                        [17, 50, 22, 6, 51, 23],
                        [19, 46, 16, 6, 47, 17],
                        [2, 139, 111, 7, 140, 112],
                        [17, 74, 46],
                        [7, 54, 24, 16, 55, 25],
                        [34, 37, 13],
                        [4, 151, 121, 5, 152, 122],
                        [4, 75, 47, 14, 76, 48],
                        [11, 54, 24, 14, 55, 25],
                        [16, 45, 15, 14, 46, 16],
                        [6, 147, 117, 4, 148, 118],
                        [6, 73, 45, 14, 74, 46],
                        [11, 54, 24, 16, 55, 25],
                        [30, 46, 16, 2, 47, 17],
                        [8, 132, 106, 4, 133, 107],
                        [8, 75, 47, 13, 76, 48],
                        [7, 54, 24, 22, 55, 25],
                        [22, 45, 15, 13, 46, 16],
                        [10, 142, 114, 2, 143, 115],
                        [19, 74, 46, 4, 75, 47],
                        [28, 50, 22, 6, 51, 23],
                        [33, 46, 16, 4, 47, 17],
                        [8, 152, 122, 4, 153, 123],
                        [22, 73, 45, 3, 74, 46],
                        [8, 53, 23, 26, 54, 24],
                        [12, 45, 15, 28, 46, 16],
                        [3, 147, 117, 10, 148, 118],
                        [3, 73, 45, 23, 74, 46],
                        [4, 54, 24, 31, 55, 25],
                        [11, 45, 15, 31, 46, 16],
                        [7, 146, 116, 7, 147, 117],
                        [21, 73, 45, 7, 74, 46],
                        [1, 53, 23, 37, 54, 24],
                        [19, 45, 15, 26, 46, 16],
                        [5, 145, 115, 10, 146, 116],
                        [19, 75, 47, 10, 76, 48],
                        [15, 54, 24, 25, 55, 25],
                        [23, 45, 15, 25, 46, 16],
                        [13, 145, 115, 3, 146, 116],
                        [2, 74, 46, 29, 75, 47],
                        [42, 54, 24, 1, 55, 25],
                        [23, 45, 15, 28, 46, 16],
                        [17, 145, 115],
                        [10, 74, 46, 23, 75, 47],
                        [10, 54, 24, 35, 55, 25],
                        [19, 45, 15, 35, 46, 16],
                        [17, 145, 115, 1, 146, 116],
                        [14, 74, 46, 21, 75, 47],
                        [29, 54, 24, 19, 55, 25],
                        [11, 45, 15, 46, 46, 16],
                        [13, 145, 115, 6, 146, 116],
                        [14, 74, 46, 23, 75, 47],
                        [44, 54, 24, 7, 55, 25],
                        [59, 46, 16, 1, 47, 17],
                        [12, 151, 121, 7, 152, 122],
                        [12, 75, 47, 26, 76, 48],
                        [39, 54, 24, 14, 55, 25],
                        [22, 45, 15, 41, 46, 16],
                        [6, 151, 121, 14, 152, 122],
                        [6, 75, 47, 34, 76, 48],
                        [46, 54, 24, 10, 55, 25],
                        [2, 45, 15, 64, 46, 16],
                        [17, 152, 122, 4, 153, 123],
                        [29, 74, 46, 14, 75, 47],
                        [49, 54, 24, 10, 55, 25],
                        [24, 45, 15, 46, 46, 16],
                        [4, 152, 122, 18, 153, 123],
                        [13, 74, 46, 32, 75, 47],
                        [48, 54, 24, 14, 55, 25],
                        [42, 45, 15, 32, 46, 16],
                        [20, 147, 117, 4, 148, 118],
                        [40, 75, 47, 7, 76, 48],
                        [43, 54, 24, 22, 55, 25],
                        [10, 45, 15, 67, 46, 16],
                        [19, 148, 118, 6, 149, 119],
                        [18, 75, 47, 31, 76, 48],
                        [34, 54, 24, 34, 55, 25],
                        [20, 45, 15, 61, 46, 16],
                      ],
                      S = function (C, w) {
                        var A = {};
                        return (A.totalCount = C), (A.dataCount = w), A;
                      },
                      k = {
                        getRSBlocks: function (C, w) {
                          var A = (function (i, u) {
                            switch (u) {
                              case H.L:
                                return M[4 * (i - 1) + 0];
                              case H.M:
                                return M[4 * (i - 1) + 1];
                              case H.Q:
                                return M[4 * (i - 1) + 2];
                              case H.H:
                                return M[4 * (i - 1) + 3];
                              default:
                                return;
                            }
                          })(C, w);
                          if (A === void 0)
                            throw (
                              "bad rs block @ typeNumber:" +
                              C +
                              "/errorCorrectionLevel:" +
                              w
                            );
                          for (
                            var O = A.length / 3, j = [], U = 0;
                            U < O;
                            U += 1
                          )
                            for (
                              var se = A[3 * U + 0],
                                y = A[3 * U + 1],
                                t = A[3 * U + 2],
                                a = 0;
                              a < se;
                              a += 1
                            )
                              j.push(S(y, t));
                          return j;
                        },
                      };
                    return k;
                  })(),
                  ue = function () {
                    var M = [],
                      S = 0,
                      k = {
                        getBuffer: function () {
                          return M;
                        },
                        getAt: function (C) {
                          var w = Math.floor(C / 8);
                          return ((M[w] >>> (7 - (C % 8))) & 1) == 1;
                        },
                        put: function (C, w) {
                          for (var A = 0; A < w; A += 1)
                            k.putBit(((C >>> (w - A - 1)) & 1) == 1);
                        },
                        getLengthInBits: function () {
                          return S;
                        },
                        putBit: function (C) {
                          var w = Math.floor(S / 8);
                          M.length <= w && M.push(0),
                            C && (M[w] |= 128 >>> S % 8),
                            (S += 1);
                        },
                      };
                    return k;
                  },
                  ye = function (M) {
                    var S = M,
                      k = {
                        getMode: function () {
                          return 1;
                        },
                        getLength: function (A) {
                          return S.length;
                        },
                        write: function (A) {
                          for (var O = S, j = 0; j + 2 < O.length; )
                            A.put(C(O.substring(j, j + 3)), 10), (j += 3);
                          j < O.length &&
                            (O.length - j == 1
                              ? A.put(C(O.substring(j, j + 1)), 4)
                              : O.length - j == 2 &&
                                A.put(C(O.substring(j, j + 2)), 7));
                        },
                      },
                      C = function (A) {
                        for (var O = 0, j = 0; j < A.length; j += 1)
                          O = 10 * O + w(A.charAt(j));
                        return O;
                      },
                      w = function (A) {
                        if ("0" <= A && A <= "9")
                          return A.charCodeAt(0) - "0".charCodeAt(0);
                        throw "illegal char :" + A;
                      };
                    return k;
                  },
                  Ie = function (M) {
                    var S = M,
                      k = {
                        getMode: function () {
                          return 2;
                        },
                        getLength: function (w) {
                          return S.length;
                        },
                        write: function (w) {
                          for (var A = S, O = 0; O + 1 < A.length; )
                            w.put(45 * C(A.charAt(O)) + C(A.charAt(O + 1)), 11),
                              (O += 2);
                          O < A.length && w.put(C(A.charAt(O)), 6);
                        },
                      },
                      C = function (w) {
                        if ("0" <= w && w <= "9")
                          return w.charCodeAt(0) - "0".charCodeAt(0);
                        if ("A" <= w && w <= "Z")
                          return w.charCodeAt(0) - "A".charCodeAt(0) + 10;
                        switch (w) {
                          case " ":
                            return 36;
                          case "$":
                            return 37;
                          case "%":
                            return 38;
                          case "*":
                            return 39;
                          case "+":
                            return 40;
                          case "-":
                            return 41;
                          case ".":
                            return 42;
                          case "/":
                            return 43;
                          case ":":
                            return 44;
                          default:
                            throw "illegal char :" + w;
                        }
                      };
                    return k;
                  },
                  xe = function (M) {
                    var S = L.stringToBytes(M);
                    return {
                      getMode: function () {
                        return 4;
                      },
                      getLength: function (k) {
                        return S.length;
                      },
                      write: function (k) {
                        for (var C = 0; C < S.length; C += 1) k.put(S[C], 8);
                      },
                    };
                  },
                  Ce = function (M) {
                    var S = L.stringToBytesFuncs.SJIS;
                    if (!S) throw "sjis not supported.";
                    (function (C, w) {
                      var A = S("\u53CB");
                      if (A.length != 2 || ((A[0] << 8) | A[1]) != 38726)
                        throw "sjis not supported.";
                    })();
                    var k = S(M);
                    return {
                      getMode: function () {
                        return 8;
                      },
                      getLength: function (C) {
                        return ~~(k.length / 2);
                      },
                      write: function (C) {
                        for (var w = k, A = 0; A + 1 < w.length; ) {
                          var O = ((255 & w[A]) << 8) | (255 & w[A + 1]);
                          if (33088 <= O && O <= 40956) O -= 33088;
                          else {
                            if (!(57408 <= O && O <= 60351))
                              throw "illegal char at " + (A + 1) + "/" + O;
                            O -= 49472;
                          }
                          (O = 192 * ((O >>> 8) & 255) + (255 & O)),
                            C.put(O, 13),
                            (A += 2);
                        }
                        if (A < w.length) throw "illegal char at " + (A + 1);
                      },
                    };
                  },
                  Oe = function () {
                    var M = [],
                      S = {
                        writeByte: function (k) {
                          M.push(255 & k);
                        },
                        writeShort: function (k) {
                          S.writeByte(k), S.writeByte(k >>> 8);
                        },
                        writeBytes: function (k, C, w) {
                          (C = C || 0), (w = w || k.length);
                          for (var A = 0; A < w; A += 1) S.writeByte(k[A + C]);
                        },
                        writeString: function (k) {
                          for (var C = 0; C < k.length; C += 1)
                            S.writeByte(k.charCodeAt(C));
                        },
                        toByteArray: function () {
                          return M;
                        },
                        toString: function () {
                          var k = "";
                          k += "[";
                          for (var C = 0; C < M.length; C += 1)
                            C > 0 && (k += ","), (k += M[C]);
                          return k + "]";
                        },
                      };
                    return S;
                  },
                  De = function (M) {
                    var S = M,
                      k = 0,
                      C = 0,
                      w = 0,
                      A = {
                        read: function () {
                          for (; w < 8; ) {
                            if (k >= S.length) {
                              if (w == 0) return -1;
                              throw "unexpected end of file./" + w;
                            }
                            var j = S.charAt(k);
                            if (((k += 1), j == "=")) return (w = 0), -1;
                            j.match(/^\s$/) ||
                              ((C = (C << 6) | O(j.charCodeAt(0))), (w += 6));
                          }
                          var U = (C >>> (w - 8)) & 255;
                          return (w -= 8), U;
                        },
                      },
                      O = function (j) {
                        if (65 <= j && j <= 90) return j - 65;
                        if (97 <= j && j <= 122) return j - 97 + 26;
                        if (48 <= j && j <= 57) return j - 48 + 52;
                        if (j == 43) return 62;
                        if (j == 47) return 63;
                        throw "c:" + j;
                      };
                    return A;
                  },
                  ge = function (M, S, k) {
                    for (
                      var C = (function (y, t) {
                          var a = y,
                            i = t,
                            u = new Array(y * t),
                            h = {
                              setPixel: function (c, d, l) {
                                u[d * a + c] = l;
                              },
                              write: function (c) {
                                c.writeString("GIF87a"),
                                  c.writeShort(a),
                                  c.writeShort(i),
                                  c.writeByte(128),
                                  c.writeByte(0),
                                  c.writeByte(0),
                                  c.writeByte(0),
                                  c.writeByte(0),
                                  c.writeByte(0),
                                  c.writeByte(255),
                                  c.writeByte(255),
                                  c.writeByte(255),
                                  c.writeString(","),
                                  c.writeShort(0),
                                  c.writeShort(0),
                                  c.writeShort(a),
                                  c.writeShort(i),
                                  c.writeByte(0);
                                var d = f(2);
                                c.writeByte(2);
                                for (var l = 0; d.length - l > 255; )
                                  c.writeByte(255),
                                    c.writeBytes(d, l, 255),
                                    (l += 255);
                                c.writeByte(d.length - l),
                                  c.writeBytes(d, l, d.length - l),
                                  c.writeByte(0),
                                  c.writeString(";");
                              },
                            },
                            f = function (c) {
                              for (
                                var d = 1 << c,
                                  l = 1 + (1 << c),
                                  g = c + 1,
                                  b = x(),
                                  F = 0;
                                F < d;
                                F += 1
                              )
                                b.add(String.fromCharCode(F));
                              b.add(String.fromCharCode(d)),
                                b.add(String.fromCharCode(l));
                              var R,
                                q,
                                J,
                                Y = Oe(),
                                Z =
                                  ((R = Y),
                                  (q = 0),
                                  (J = 0),
                                  {
                                    write: function (K, te) {
                                      if (K >>> te != 0) throw "length over";
                                      for (; q + te >= 8; )
                                        R.writeByte(255 & ((K << q) | J)),
                                          (te -= 8 - q),
                                          (K >>>= 8 - q),
                                          (J = 0),
                                          (q = 0);
                                      (J |= K << q), (q += te);
                                    },
                                    flush: function () {
                                      q > 0 && R.writeByte(J);
                                    },
                                  });
                              Z.write(d, g);
                              var ce = 0,
                                X = String.fromCharCode(u[ce]);
                              for (ce += 1; ce < u.length; ) {
                                var $ = String.fromCharCode(u[ce]);
                                (ce += 1),
                                  b.contains(X + $)
                                    ? (X += $)
                                    : (Z.write(b.indexOf(X), g),
                                      b.size() < 4095 &&
                                        (b.size() == 1 << g && (g += 1),
                                        b.add(X + $)),
                                      (X = $));
                              }
                              return (
                                Z.write(b.indexOf(X), g),
                                Z.write(l, g),
                                Z.flush(),
                                Y.toByteArray()
                              );
                            },
                            x = function () {
                              var c = {},
                                d = 0,
                                l = {
                                  add: function (g) {
                                    if (l.contains(g)) throw "dup key:" + g;
                                    (c[g] = d), (d += 1);
                                  },
                                  size: function () {
                                    return d;
                                  },
                                  indexOf: function (g) {
                                    return c[g];
                                  },
                                  contains: function (g) {
                                    return c[g] !== void 0;
                                  },
                                };
                              return l;
                            };
                          return h;
                        })(M, S),
                        w = 0;
                      w < S;
                      w += 1
                    )
                      for (var A = 0; A < M; A += 1) C.setPixel(A, w, k(A, w));
                    var O = Oe();
                    C.write(O);
                    for (
                      var j = (function () {
                          var y = 0,
                            t = 0,
                            a = 0,
                            i = "",
                            u = {},
                            h = function (x) {
                              i += String.fromCharCode(f(63 & x));
                            },
                            f = function (x) {
                              if (!(x < 0)) {
                                if (x < 26) return 65 + x;
                                if (x < 52) return x - 26 + 97;
                                if (x < 62) return x - 52 + 48;
                                if (x == 62) return 43;
                                if (x == 63) return 47;
                              }
                              throw "n:" + x;
                            };
                          return (
                            (u.writeByte = function (x) {
                              for (
                                y = (y << 8) | (255 & x), t += 8, a += 1;
                                t >= 6;

                              )
                                h(y >>> (t - 6)), (t -= 6);
                            }),
                            (u.flush = function () {
                              if (
                                (t > 0 && (h(y << (6 - t)), (y = 0), (t = 0)),
                                a % 3 != 0)
                              )
                                for (var x = 3 - (a % 3), c = 0; c < x; c += 1)
                                  i += "=";
                            }),
                            (u.toString = function () {
                              return i;
                            }),
                            u
                          );
                        })(),
                        U = O.toByteArray(),
                        se = 0;
                      se < U.length;
                      se += 1
                    )
                      j.writeByte(U[se]);
                    return j.flush(), "data:image/gif;base64," + j;
                  };
                return L;
              })();
            (D.stringToBytesFuncs["UTF-8"] = function (L) {
              return (function (T) {
                for (var G = [], E = 0; E < T.length; E++) {
                  var P = T.charCodeAt(E);
                  P < 128
                    ? G.push(P)
                    : P < 2048
                    ? G.push(192 | (P >> 6), 128 | (63 & P))
                    : P < 55296 || P >= 57344
                    ? G.push(
                        224 | (P >> 12),
                        128 | ((P >> 6) & 63),
                        128 | (63 & P)
                      )
                    : (E++,
                      (P =
                        65536 +
                        (((1023 & P) << 10) | (1023 & T.charCodeAt(E)))),
                      G.push(
                        240 | (P >> 18),
                        128 | ((P >> 12) & 63),
                        128 | ((P >> 6) & 63),
                        128 | (63 & P)
                      ));
                }
                return G;
              })(L);
            }),
              (z =
                typeof (m = function () {
                  return D;
                }) == "function"
                  ? m.apply(v, [])
                  : m) === void 0 || (p.exports = z);
          },
          676: (p, v, m) => {
            m.d(v, { default: () => se });
            var z = function () {
                return (z =
                  Object.assign ||
                  function (y) {
                    for (var t, a = 1, i = arguments.length; a < i; a++)
                      for (var u in (t = arguments[a]))
                        Object.prototype.hasOwnProperty.call(t, u) &&
                          (y[u] = t[u]);
                    return y;
                  }).apply(this, arguments);
              },
              D = function () {
                for (var y = 0, t = 0, a = arguments.length; t < a; t++)
                  y += arguments[t].length;
                var i = Array(y),
                  u = 0;
                for (t = 0; t < a; t++)
                  for (
                    var h = arguments[t], f = 0, x = h.length;
                    f < x;
                    f++, u++
                  )
                    i[u] = h[f];
                return i;
              },
              L = function (y) {
                return !!y && typeof y == "object" && !Array.isArray(y);
              };
            function T(y) {
              for (var t = [], a = 1; a < arguments.length; a++)
                t[a - 1] = arguments[a];
              if (!t.length) return y;
              var i = t.shift();
              return i !== void 0 && L(y) && L(i)
                ? ((y = z({}, y)),
                  Object.keys(i).forEach(function (u) {
                    var h = y[u],
                      f = i[u];
                    Array.isArray(h) && Array.isArray(f)
                      ? (y[u] = f)
                      : L(h) && L(f)
                      ? (y[u] = T(Object.assign({}, h), f))
                      : (y[u] = f);
                  }),
                  T.apply(void 0, D([y], t)))
                : y;
            }
            function G(y, t) {
              var a = document.createElement("a");
              (a.download = t),
                (a.href = y),
                document.body.appendChild(a),
                a.click(),
                document.body.removeChild(a);
            }
            function E(y) {
              return (
                (t = this),
                (a = void 0),
                (u = function () {
                  return (function (h, f) {
                    var x,
                      c,
                      d,
                      l,
                      g = {
                        label: 0,
                        sent: function () {
                          if (1 & d[0]) throw d[1];
                          return d[1];
                        },
                        trys: [],
                        ops: [],
                      };
                    return (
                      (l = { next: b(0), throw: b(1), return: b(2) }),
                      typeof Symbol == "function" &&
                        (l[Symbol.iterator] = function () {
                          return this;
                        }),
                      l
                    );
                    function b(F) {
                      return function (R) {
                        return (function (q) {
                          if (x)
                            throw new TypeError(
                              "Generator is already executing."
                            );
                          for (; g; )
                            try {
                              if (
                                ((x = 1),
                                c &&
                                  (d =
                                    2 & q[0]
                                      ? c.return
                                      : q[0]
                                      ? c.throw ||
                                        ((d = c.return) && d.call(c), 0)
                                      : c.next) &&
                                  !(d = d.call(c, q[1])).done)
                              )
                                return d;
                              switch (
                                ((c = 0), d && (q = [2 & q[0], d.value]), q[0])
                              ) {
                                case 0:
                                case 1:
                                  d = q;
                                  break;
                                case 4:
                                  return g.label++, { value: q[1], done: !1 };
                                case 5:
                                  g.label++, (c = q[1]), (q = [0]);
                                  continue;
                                case 7:
                                  (q = g.ops.pop()), g.trys.pop();
                                  continue;
                                default:
                                  if (
                                    !(
                                      (d =
                                        (d = g.trys).length > 0 &&
                                        d[d.length - 1]) ||
                                      (q[0] !== 6 && q[0] !== 2)
                                    )
                                  ) {
                                    g = 0;
                                    continue;
                                  }
                                  if (
                                    q[0] === 3 &&
                                    (!d || (q[1] > d[0] && q[1] < d[3]))
                                  ) {
                                    g.label = q[1];
                                    break;
                                  }
                                  if (q[0] === 6 && g.label < d[1]) {
                                    (g.label = d[1]), (d = q);
                                    break;
                                  }
                                  if (d && g.label < d[2]) {
                                    (g.label = d[2]), g.ops.push(q);
                                    break;
                                  }
                                  d[2] && g.ops.pop(), g.trys.pop();
                                  continue;
                              }
                              q = f.call(h, g);
                            } catch (J) {
                              (q = [6, J]), (c = 0);
                            } finally {
                              x = d = 0;
                            }
                          if (5 & q[0]) throw q[1];
                          return { value: q[0] ? q[1] : void 0, done: !0 };
                        })([F, R]);
                      };
                    }
                  })(this, function (h) {
                    return [
                      2,
                      new Promise(function (f) {
                        var x = new XMLHttpRequest();
                        (x.onload = function () {
                          var c = new FileReader();
                          (c.onloadend = function () {
                            f(c.result);
                          }),
                            c.readAsDataURL(x.response);
                        }),
                          x.open("GET", y),
                          (x.responseType = "blob"),
                          x.send();
                      }),
                    ];
                  });
                }),
                new ((i = void 0) || (i = Promise))(function (h, f) {
                  function x(l) {
                    try {
                      d(u.next(l));
                    } catch (g) {
                      f(g);
                    }
                  }
                  function c(l) {
                    try {
                      d(u.throw(l));
                    } catch (g) {
                      f(g);
                    }
                  }
                  function d(l) {
                    var g;
                    l.done
                      ? h(l.value)
                      : ((g = l.value),
                        g instanceof i
                          ? g
                          : new i(function (b) {
                              b(g);
                            })).then(x, c);
                  }
                  d((u = u.apply(t, a || [])).next());
                })
              );
              var t, a, i, u;
            }
            const P = { L: 0.07, M: 0.15, Q: 0.25, H: 0.3 };
            var N = function () {
              return (N =
                Object.assign ||
                function (y) {
                  for (var t, a = 1, i = arguments.length; a < i; a++)
                    for (var u in (t = arguments[a]))
                      Object.prototype.hasOwnProperty.call(t, u) &&
                        (y[u] = t[u]);
                  return y;
                }).apply(this, arguments);
            };
            const H = (function () {
              function y(t) {
                var a = t.svg,
                  i = t.type;
                (this._svg = a), (this._type = i);
              }
              return (
                (y.prototype.draw = function (t, a, i, u) {
                  var h;
                  switch (this._type) {
                    case "dots":
                      h = this._drawDot;
                      break;
                    case "classy":
                      h = this._drawClassy;
                      break;
                    case "classy-rounded":
                      h = this._drawClassyRounded;
                      break;
                    case "rounded":
                      h = this._drawRounded;
                      break;
                    case "extra-rounded":
                      h = this._drawExtraRounded;
                      break;
                    case "square":
                    default:
                      h = this._drawSquare;
                  }
                  h.call(this, { x: t, y: a, size: i, getNeighbor: u });
                }),
                (y.prototype._rotateFigure = function (t) {
                  var a,
                    i = t.x,
                    u = t.y,
                    h = t.size,
                    f = t.rotation,
                    x = f === void 0 ? 0 : f,
                    c = i + h / 2,
                    d = u + h / 2;
                  (0, t.draw)(),
                    (a = this._element) === null ||
                      a === void 0 ||
                      a.setAttribute(
                        "transform",
                        "rotate(" +
                          (180 * x) / Math.PI +
                          "," +
                          c +
                          "," +
                          d +
                          ")"
                      );
                }),
                (y.prototype._basicDot = function (t) {
                  var a = this,
                    i = t.size,
                    u = t.x,
                    h = t.y;
                  this._rotateFigure(
                    N(N({}, t), {
                      draw: function () {
                        (a._element = document.createElementNS(
                          "http://www.w3.org/2000/svg",
                          "circle"
                        )),
                          a._element.setAttribute("cx", String(u + i / 2)),
                          a._element.setAttribute("cy", String(h + i / 2)),
                          a._element.setAttribute("r", String(i / 2));
                      },
                    })
                  );
                }),
                (y.prototype._basicSquare = function (t) {
                  var a = this,
                    i = t.size,
                    u = t.x,
                    h = t.y;
                  this._rotateFigure(
                    N(N({}, t), {
                      draw: function () {
                        (a._element = document.createElementNS(
                          "http://www.w3.org/2000/svg",
                          "rect"
                        )),
                          a._element.setAttribute("x", String(u)),
                          a._element.setAttribute("y", String(h)),
                          a._element.setAttribute("width", String(i)),
                          a._element.setAttribute("height", String(i));
                      },
                    })
                  );
                }),
                (y.prototype._basicSideRounded = function (t) {
                  var a = this,
                    i = t.size,
                    u = t.x,
                    h = t.y;
                  this._rotateFigure(
                    N(N({}, t), {
                      draw: function () {
                        (a._element = document.createElementNS(
                          "http://www.w3.org/2000/svg",
                          "path"
                        )),
                          a._element.setAttribute(
                            "d",
                            "M " +
                              u +
                              " " +
                              h +
                              "v " +
                              i +
                              "h " +
                              i / 2 +
                              "a " +
                              i / 2 +
                              " " +
                              i / 2 +
                              ", 0, 0, 0, 0 " +
                              -i
                          );
                      },
                    })
                  );
                }),
                (y.prototype._basicCornerRounded = function (t) {
                  var a = this,
                    i = t.size,
                    u = t.x,
                    h = t.y;
                  this._rotateFigure(
                    N(N({}, t), {
                      draw: function () {
                        (a._element = document.createElementNS(
                          "http://www.w3.org/2000/svg",
                          "path"
                        )),
                          a._element.setAttribute(
                            "d",
                            "M " +
                              u +
                              " " +
                              h +
                              "v " +
                              i +
                              "h " +
                              i +
                              "v " +
                              -i / 2 +
                              "a " +
                              i / 2 +
                              " " +
                              i / 2 +
                              ", 0, 0, 0, " +
                              -i / 2 +
                              " " +
                              -i / 2
                          );
                      },
                    })
                  );
                }),
                (y.prototype._basicCornerExtraRounded = function (t) {
                  var a = this,
                    i = t.size,
                    u = t.x,
                    h = t.y;
                  this._rotateFigure(
                    N(N({}, t), {
                      draw: function () {
                        (a._element = document.createElementNS(
                          "http://www.w3.org/2000/svg",
                          "path"
                        )),
                          a._element.setAttribute(
                            "d",
                            "M " +
                              u +
                              " " +
                              h +
                              "v " +
                              i +
                              "h " +
                              i +
                              "a " +
                              i +
                              " " +
                              i +
                              ", 0, 0, 0, " +
                              -i +
                              " " +
                              -i
                          );
                      },
                    })
                  );
                }),
                (y.prototype._basicCornersRounded = function (t) {
                  var a = this,
                    i = t.size,
                    u = t.x,
                    h = t.y;
                  this._rotateFigure(
                    N(N({}, t), {
                      draw: function () {
                        (a._element = document.createElementNS(
                          "http://www.w3.org/2000/svg",
                          "path"
                        )),
                          a._element.setAttribute(
                            "d",
                            "M " +
                              u +
                              " " +
                              h +
                              "v " +
                              i / 2 +
                              "a " +
                              i / 2 +
                              " " +
                              i / 2 +
                              ", 0, 0, 0, " +
                              i / 2 +
                              " " +
                              i / 2 +
                              "h " +
                              i / 2 +
                              "v " +
                              -i / 2 +
                              "a " +
                              i / 2 +
                              " " +
                              i / 2 +
                              ", 0, 0, 0, " +
                              -i / 2 +
                              " " +
                              -i / 2
                          );
                      },
                    })
                  );
                }),
                (y.prototype._drawDot = function (t) {
                  var a = t.x,
                    i = t.y,
                    u = t.size;
                  this._basicDot({ x: a, y: i, size: u, rotation: 0 });
                }),
                (y.prototype._drawSquare = function (t) {
                  var a = t.x,
                    i = t.y,
                    u = t.size;
                  this._basicSquare({ x: a, y: i, size: u, rotation: 0 });
                }),
                (y.prototype._drawRounded = function (t) {
                  var a = t.x,
                    i = t.y,
                    u = t.size,
                    h = t.getNeighbor,
                    f = h ? +h(-1, 0) : 0,
                    x = h ? +h(1, 0) : 0,
                    c = h ? +h(0, -1) : 0,
                    d = h ? +h(0, 1) : 0,
                    l = f + x + c + d;
                  if (l !== 0)
                    if (l > 2 || (f && x) || (c && d))
                      this._basicSquare({ x: a, y: i, size: u, rotation: 0 });
                    else {
                      if (l === 2) {
                        var g = 0;
                        return (
                          f && c
                            ? (g = Math.PI / 2)
                            : c && x
                            ? (g = Math.PI)
                            : x && d && (g = -Math.PI / 2),
                          void this._basicCornerRounded({
                            x: a,
                            y: i,
                            size: u,
                            rotation: g,
                          })
                        );
                      }
                      if (l === 1)
                        return (
                          (g = 0),
                          c
                            ? (g = Math.PI / 2)
                            : x
                            ? (g = Math.PI)
                            : d && (g = -Math.PI / 2),
                          void this._basicSideRounded({
                            x: a,
                            y: i,
                            size: u,
                            rotation: g,
                          })
                        );
                    }
                  else this._basicDot({ x: a, y: i, size: u, rotation: 0 });
                }),
                (y.prototype._drawExtraRounded = function (t) {
                  var a = t.x,
                    i = t.y,
                    u = t.size,
                    h = t.getNeighbor,
                    f = h ? +h(-1, 0) : 0,
                    x = h ? +h(1, 0) : 0,
                    c = h ? +h(0, -1) : 0,
                    d = h ? +h(0, 1) : 0,
                    l = f + x + c + d;
                  if (l !== 0)
                    if (l > 2 || (f && x) || (c && d))
                      this._basicSquare({ x: a, y: i, size: u, rotation: 0 });
                    else {
                      if (l === 2) {
                        var g = 0;
                        return (
                          f && c
                            ? (g = Math.PI / 2)
                            : c && x
                            ? (g = Math.PI)
                            : x && d && (g = -Math.PI / 2),
                          void this._basicCornerExtraRounded({
                            x: a,
                            y: i,
                            size: u,
                            rotation: g,
                          })
                        );
                      }
                      if (l === 1)
                        return (
                          (g = 0),
                          c
                            ? (g = Math.PI / 2)
                            : x
                            ? (g = Math.PI)
                            : d && (g = -Math.PI / 2),
                          void this._basicSideRounded({
                            x: a,
                            y: i,
                            size: u,
                            rotation: g,
                          })
                        );
                    }
                  else this._basicDot({ x: a, y: i, size: u, rotation: 0 });
                }),
                (y.prototype._drawClassy = function (t) {
                  var a = t.x,
                    i = t.y,
                    u = t.size,
                    h = t.getNeighbor,
                    f = h ? +h(-1, 0) : 0,
                    x = h ? +h(1, 0) : 0,
                    c = h ? +h(0, -1) : 0,
                    d = h ? +h(0, 1) : 0;
                  f + x + c + d !== 0
                    ? f || c
                      ? x || d
                        ? this._basicSquare({
                            x: a,
                            y: i,
                            size: u,
                            rotation: 0,
                          })
                        : this._basicCornerRounded({
                            x: a,
                            y: i,
                            size: u,
                            rotation: Math.PI / 2,
                          })
                      : this._basicCornerRounded({
                          x: a,
                          y: i,
                          size: u,
                          rotation: -Math.PI / 2,
                        })
                    : this._basicCornersRounded({
                        x: a,
                        y: i,
                        size: u,
                        rotation: Math.PI / 2,
                      });
                }),
                (y.prototype._drawClassyRounded = function (t) {
                  var a = t.x,
                    i = t.y,
                    u = t.size,
                    h = t.getNeighbor,
                    f = h ? +h(-1, 0) : 0,
                    x = h ? +h(1, 0) : 0,
                    c = h ? +h(0, -1) : 0,
                    d = h ? +h(0, 1) : 0;
                  f + x + c + d !== 0
                    ? f || c
                      ? x || d
                        ? this._basicSquare({
                            x: a,
                            y: i,
                            size: u,
                            rotation: 0,
                          })
                        : this._basicCornerExtraRounded({
                            x: a,
                            y: i,
                            size: u,
                            rotation: Math.PI / 2,
                          })
                      : this._basicCornerExtraRounded({
                          x: a,
                          y: i,
                          size: u,
                          rotation: -Math.PI / 2,
                        })
                    : this._basicCornersRounded({
                        x: a,
                        y: i,
                        size: u,
                        rotation: Math.PI / 2,
                      });
                }),
                y
              );
            })();
            var W = function () {
              return (W =
                Object.assign ||
                function (y) {
                  for (var t, a = 1, i = arguments.length; a < i; a++)
                    for (var u in (t = arguments[a]))
                      Object.prototype.hasOwnProperty.call(t, u) &&
                        (y[u] = t[u]);
                  return y;
                }).apply(this, arguments);
            };
            const V = (function () {
              function y(t) {
                var a = t.svg,
                  i = t.type;
                (this._svg = a), (this._type = i);
              }
              return (
                (y.prototype.draw = function (t, a, i, u) {
                  var h;
                  switch (this._type) {
                    case "square":
                      h = this._drawSquare;
                      break;
                    case "extra-rounded":
                      h = this._drawExtraRounded;
                      break;
                    case "dot":
                    default:
                      h = this._drawDot;
                  }
                  h.call(this, { x: t, y: a, size: i, rotation: u });
                }),
                (y.prototype._rotateFigure = function (t) {
                  var a,
                    i = t.x,
                    u = t.y,
                    h = t.size,
                    f = t.rotation,
                    x = f === void 0 ? 0 : f,
                    c = i + h / 2,
                    d = u + h / 2;
                  (0, t.draw)(),
                    (a = this._element) === null ||
                      a === void 0 ||
                      a.setAttribute(
                        "transform",
                        "rotate(" +
                          (180 * x) / Math.PI +
                          "," +
                          c +
                          "," +
                          d +
                          ")"
                      );
                }),
                (y.prototype._basicDot = function (t) {
                  var a = this,
                    i = t.size,
                    u = t.x,
                    h = t.y,
                    f = i / 7;
                  this._rotateFigure(
                    W(W({}, t), {
                      draw: function () {
                        (a._element = document.createElementNS(
                          "http://www.w3.org/2000/svg",
                          "path"
                        )),
                          a._element.setAttribute("clip-rule", "evenodd"),
                          a._element.setAttribute(
                            "d",
                            "M " +
                              (u + i / 2) +
                              " " +
                              h +
                              "a " +
                              i / 2 +
                              " " +
                              i / 2 +
                              " 0 1 0 0.1 0zm 0 " +
                              f +
                              "a " +
                              (i / 2 - f) +
                              " " +
                              (i / 2 - f) +
                              " 0 1 1 -0.1 0Z"
                          );
                      },
                    })
                  );
                }),
                (y.prototype._basicSquare = function (t) {
                  var a = this,
                    i = t.size,
                    u = t.x,
                    h = t.y,
                    f = i / 7;
                  this._rotateFigure(
                    W(W({}, t), {
                      draw: function () {
                        (a._element = document.createElementNS(
                          "http://www.w3.org/2000/svg",
                          "path"
                        )),
                          a._element.setAttribute("clip-rule", "evenodd"),
                          a._element.setAttribute(
                            "d",
                            "M " +
                              u +
                              " " +
                              h +
                              "v " +
                              i +
                              "h " +
                              i +
                              "v " +
                              -i +
                              "zM " +
                              (u + f) +
                              " " +
                              (h + f) +
                              "h " +
                              (i - 2 * f) +
                              "v " +
                              (i - 2 * f) +
                              "h " +
                              (2 * f - i) +
                              "z"
                          );
                      },
                    })
                  );
                }),
                (y.prototype._basicExtraRounded = function (t) {
                  var a = this,
                    i = t.size,
                    u = t.x,
                    h = t.y,
                    f = i / 7;
                  this._rotateFigure(
                    W(W({}, t), {
                      draw: function () {
                        (a._element = document.createElementNS(
                          "http://www.w3.org/2000/svg",
                          "path"
                        )),
                          a._element.setAttribute("clip-rule", "evenodd"),
                          a._element.setAttribute(
                            "d",
                            "M " +
                              u +
                              " " +
                              (h + 2.5 * f) +
                              "v " +
                              2 * f +
                              "a " +
                              2.5 * f +
                              " " +
                              2.5 * f +
                              ", 0, 0, 0, " +
                              2.5 * f +
                              " " +
                              2.5 * f +
                              "h " +
                              2 * f +
                              "a " +
                              2.5 * f +
                              " " +
                              2.5 * f +
                              ", 0, 0, 0, " +
                              2.5 * f +
                              " " +
                              2.5 * -f +
                              "v " +
                              -2 * f +
                              "a " +
                              2.5 * f +
                              " " +
                              2.5 * f +
                              ", 0, 0, 0, " +
                              2.5 * -f +
                              " " +
                              2.5 * -f +
                              "h " +
                              -2 * f +
                              "a " +
                              2.5 * f +
                              " " +
                              2.5 * f +
                              ", 0, 0, 0, " +
                              2.5 * -f +
                              " " +
                              2.5 * f +
                              "M " +
                              (u + 2.5 * f) +
                              " " +
                              (h + f) +
                              "h " +
                              2 * f +
                              "a " +
                              1.5 * f +
                              " " +
                              1.5 * f +
                              ", 0, 0, 1, " +
                              1.5 * f +
                              " " +
                              1.5 * f +
                              "v " +
                              2 * f +
                              "a " +
                              1.5 * f +
                              " " +
                              1.5 * f +
                              ", 0, 0, 1, " +
                              1.5 * -f +
                              " " +
                              1.5 * f +
                              "h " +
                              -2 * f +
                              "a " +
                              1.5 * f +
                              " " +
                              1.5 * f +
                              ", 0, 0, 1, " +
                              1.5 * -f +
                              " " +
                              1.5 * -f +
                              "v " +
                              -2 * f +
                              "a " +
                              1.5 * f +
                              " " +
                              1.5 * f +
                              ", 0, 0, 1, " +
                              1.5 * f +
                              " " +
                              1.5 * -f
                          );
                      },
                    })
                  );
                }),
                (y.prototype._drawDot = function (t) {
                  var a = t.x,
                    i = t.y,
                    u = t.size,
                    h = t.rotation;
                  this._basicDot({ x: a, y: i, size: u, rotation: h });
                }),
                (y.prototype._drawSquare = function (t) {
                  var a = t.x,
                    i = t.y,
                    u = t.size,
                    h = t.rotation;
                  this._basicSquare({ x: a, y: i, size: u, rotation: h });
                }),
                (y.prototype._drawExtraRounded = function (t) {
                  var a = t.x,
                    i = t.y,
                    u = t.size,
                    h = t.rotation;
                  this._basicExtraRounded({ x: a, y: i, size: u, rotation: h });
                }),
                y
              );
            })();
            var I = function () {
              return (I =
                Object.assign ||
                function (y) {
                  for (var t, a = 1, i = arguments.length; a < i; a++)
                    for (var u in (t = arguments[a]))
                      Object.prototype.hasOwnProperty.call(t, u) &&
                        (y[u] = t[u]);
                  return y;
                }).apply(this, arguments);
            };
            const ae = (function () {
                function y(t) {
                  var a = t.svg,
                    i = t.type;
                  (this._svg = a), (this._type = i);
                }
                return (
                  (y.prototype.draw = function (t, a, i, u) {
                    var h;
                    switch (this._type) {
                      case "square":
                        h = this._drawSquare;
                        break;
                      case "dot":
                      default:
                        h = this._drawDot;
                    }
                    h.call(this, { x: t, y: a, size: i, rotation: u });
                  }),
                  (y.prototype._rotateFigure = function (t) {
                    var a,
                      i = t.x,
                      u = t.y,
                      h = t.size,
                      f = t.rotation,
                      x = f === void 0 ? 0 : f,
                      c = i + h / 2,
                      d = u + h / 2;
                    (0, t.draw)(),
                      (a = this._element) === null ||
                        a === void 0 ||
                        a.setAttribute(
                          "transform",
                          "rotate(" +
                            (180 * x) / Math.PI +
                            "," +
                            c +
                            "," +
                            d +
                            ")"
                        );
                  }),
                  (y.prototype._basicDot = function (t) {
                    var a = this,
                      i = t.size,
                      u = t.x,
                      h = t.y;
                    this._rotateFigure(
                      I(I({}, t), {
                        draw: function () {
                          (a._element = document.createElementNS(
                            "http://www.w3.org/2000/svg",
                            "circle"
                          )),
                            a._element.setAttribute("cx", String(u + i / 2)),
                            a._element.setAttribute("cy", String(h + i / 2)),
                            a._element.setAttribute("r", String(i / 2));
                        },
                      })
                    );
                  }),
                  (y.prototype._basicSquare = function (t) {
                    var a = this,
                      i = t.size,
                      u = t.x,
                      h = t.y;
                    this._rotateFigure(
                      I(I({}, t), {
                        draw: function () {
                          (a._element = document.createElementNS(
                            "http://www.w3.org/2000/svg",
                            "rect"
                          )),
                            a._element.setAttribute("x", String(u)),
                            a._element.setAttribute("y", String(h)),
                            a._element.setAttribute("width", String(i)),
                            a._element.setAttribute("height", String(i));
                        },
                      })
                    );
                  }),
                  (y.prototype._drawDot = function (t) {
                    var a = t.x,
                      i = t.y,
                      u = t.size,
                      h = t.rotation;
                    this._basicDot({ x: a, y: i, size: u, rotation: h });
                  }),
                  (y.prototype._drawSquare = function (t) {
                    var a = t.x,
                      i = t.y,
                      u = t.size,
                      h = t.rotation;
                    this._basicSquare({ x: a, y: i, size: u, rotation: h });
                  }),
                  y
                );
              })(),
              ue = "circle";
            var ye = function (y, t, a, i) {
                return new (a || (a = Promise))(function (u, h) {
                  function f(d) {
                    try {
                      c(i.next(d));
                    } catch (l) {
                      h(l);
                    }
                  }
                  function x(d) {
                    try {
                      c(i.throw(d));
                    } catch (l) {
                      h(l);
                    }
                  }
                  function c(d) {
                    var l;
                    d.done
                      ? u(d.value)
                      : ((l = d.value),
                        l instanceof a
                          ? l
                          : new a(function (g) {
                              g(l);
                            })).then(f, x);
                  }
                  c((i = i.apply(y, t || [])).next());
                });
              },
              Ie = function (y, t) {
                var a,
                  i,
                  u,
                  h,
                  f = {
                    label: 0,
                    sent: function () {
                      if (1 & u[0]) throw u[1];
                      return u[1];
                    },
                    trys: [],
                    ops: [],
                  };
                return (
                  (h = { next: x(0), throw: x(1), return: x(2) }),
                  typeof Symbol == "function" &&
                    (h[Symbol.iterator] = function () {
                      return this;
                    }),
                  h
                );
                function x(c) {
                  return function (d) {
                    return (function (l) {
                      if (a)
                        throw new TypeError("Generator is already executing.");
                      for (; f; )
                        try {
                          if (
                            ((a = 1),
                            i &&
                              (u =
                                2 & l[0]
                                  ? i.return
                                  : l[0]
                                  ? i.throw || ((u = i.return) && u.call(i), 0)
                                  : i.next) &&
                              !(u = u.call(i, l[1])).done)
                          )
                            return u;
                          switch (
                            ((i = 0), u && (l = [2 & l[0], u.value]), l[0])
                          ) {
                            case 0:
                            case 1:
                              u = l;
                              break;
                            case 4:
                              return f.label++, { value: l[1], done: !1 };
                            case 5:
                              f.label++, (i = l[1]), (l = [0]);
                              continue;
                            case 7:
                              (l = f.ops.pop()), f.trys.pop();
                              continue;
                            default:
                              if (
                                !(
                                  (u =
                                    (u = f.trys).length > 0 &&
                                    u[u.length - 1]) ||
                                  (l[0] !== 6 && l[0] !== 2)
                                )
                              ) {
                                f = 0;
                                continue;
                              }
                              if (
                                l[0] === 3 &&
                                (!u || (l[1] > u[0] && l[1] < u[3]))
                              ) {
                                f.label = l[1];
                                break;
                              }
                              if (l[0] === 6 && f.label < u[1]) {
                                (f.label = u[1]), (u = l);
                                break;
                              }
                              if (u && f.label < u[2]) {
                                (f.label = u[2]), f.ops.push(l);
                                break;
                              }
                              u[2] && f.ops.pop(), f.trys.pop();
                              continue;
                          }
                          l = t.call(y, f);
                        } catch (g) {
                          (l = [6, g]), (i = 0);
                        } finally {
                          a = u = 0;
                        }
                      if (5 & l[0]) throw l[1];
                      return { value: l[0] ? l[1] : void 0, done: !0 };
                    })([c, d]);
                  };
                }
              },
              xe = [
                [1, 1, 1, 1, 1, 1, 1],
                [1, 0, 0, 0, 0, 0, 1],
                [1, 0, 0, 0, 0, 0, 1],
                [1, 0, 0, 0, 0, 0, 1],
                [1, 0, 0, 0, 0, 0, 1],
                [1, 0, 0, 0, 0, 0, 1],
                [1, 1, 1, 1, 1, 1, 1],
              ],
              Ce = [
                [0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0],
                [0, 0, 1, 1, 1, 0, 0],
                [0, 0, 1, 1, 1, 0, 0],
                [0, 0, 1, 1, 1, 0, 0],
                [0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0],
              ];
            const Oe = (function () {
                function y(t) {
                  (this._element = document.createElementNS(
                    "http://www.w3.org/2000/svg",
                    "svg"
                  )),
                    this._element.setAttribute("width", String(t.width)),
                    this._element.setAttribute("height", String(t.height)),
                    (this._defs = document.createElementNS(
                      "http://www.w3.org/2000/svg",
                      "defs"
                    )),
                    this._element.appendChild(this._defs),
                    (this._options = t);
                }
                return (
                  Object.defineProperty(y.prototype, "width", {
                    get: function () {
                      return this._options.width;
                    },
                    enumerable: !1,
                    configurable: !0,
                  }),
                  Object.defineProperty(y.prototype, "height", {
                    get: function () {
                      return this._options.height;
                    },
                    enumerable: !1,
                    configurable: !0,
                  }),
                  (y.prototype.getElement = function () {
                    return this._element;
                  }),
                  (y.prototype.drawQR = function (t) {
                    return ye(this, void 0, void 0, function () {
                      var a,
                        i,
                        u,
                        h,
                        f,
                        x,
                        c,
                        d,
                        l,
                        g,
                        b = this;
                      return Ie(this, function (F) {
                        switch (F.label) {
                          case 0:
                            return (
                              (a = t.getModuleCount()),
                              (i =
                                Math.min(
                                  this._options.width,
                                  this._options.height
                                ) -
                                2 * this._options.margin),
                              (u =
                                this._options.shape === ue
                                  ? i / Math.sqrt(2)
                                  : i),
                              (h = Math.floor(u / a)),
                              (f = {
                                hideXDots: 0,
                                hideYDots: 0,
                                width: 0,
                                height: 0,
                              }),
                              (this._qr = t),
                              this._options.image
                                ? [4, this.loadImage()]
                                : [3, 2]
                            );
                          case 1:
                            if ((F.sent(), !this._image)) return [2];
                            (x = this._options),
                              (c = x.imageOptions),
                              (d = x.qrOptions),
                              (l = c.imageSize * P[d.errorCorrectionLevel]),
                              (g = Math.floor(l * a * a)),
                              (f = (function (R) {
                                var q = R.originalHeight,
                                  J = R.originalWidth,
                                  Y = R.maxHiddenDots,
                                  Z = R.maxHiddenAxisDots,
                                  ce = R.dotSize,
                                  X = { x: 0, y: 0 },
                                  $ = { x: 0, y: 0 };
                                if (q <= 0 || J <= 0 || Y <= 0 || ce <= 0)
                                  return {
                                    height: 0,
                                    width: 0,
                                    hideYDots: 0,
                                    hideXDots: 0,
                                  };
                                var K = q / J;
                                return (
                                  (X.x = Math.floor(Math.sqrt(Y / K))),
                                  X.x <= 0 && (X.x = 1),
                                  Z && Z < X.x && (X.x = Z),
                                  X.x % 2 == 0 && X.x--,
                                  ($.x = X.x * ce),
                                  (X.y = 1 + 2 * Math.ceil((X.x * K - 1) / 2)),
                                  ($.y = Math.round($.x * K)),
                                  (X.y * X.x > Y || (Z && Z < X.y)) &&
                                    (Z && Z < X.y
                                      ? ((X.y = Z), X.y % 2 == 0 && X.x--)
                                      : (X.y -= 2),
                                    ($.y = X.y * ce),
                                    (X.x =
                                      1 + 2 * Math.ceil((X.y / K - 1) / 2)),
                                    ($.x = Math.round($.y / K))),
                                  {
                                    height: $.y,
                                    width: $.x,
                                    hideYDots: X.y,
                                    hideXDots: X.x,
                                  }
                                );
                              })({
                                originalWidth: this._image.width,
                                originalHeight: this._image.height,
                                maxHiddenDots: g,
                                maxHiddenAxisDots: a - 14,
                                dotSize: h,
                              })),
                              (F.label = 2);
                          case 2:
                            return (
                              this.drawBackground(),
                              this.drawDots(function (R, q) {
                                var J, Y, Z, ce, X, $;
                                return !(
                                  (b._options.imageOptions.hideBackgroundDots &&
                                    R >= (a - f.hideXDots) / 2 &&
                                    R < (a + f.hideXDots) / 2 &&
                                    q >= (a - f.hideYDots) / 2 &&
                                    q < (a + f.hideYDots) / 2) ||
                                  ((J = xe[R]) === null || J === void 0
                                    ? void 0
                                    : J[q]) ||
                                  ((Y = xe[R - a + 7]) === null || Y === void 0
                                    ? void 0
                                    : Y[q]) ||
                                  ((Z = xe[R]) === null || Z === void 0
                                    ? void 0
                                    : Z[q - a + 7]) ||
                                  ((ce = Ce[R]) === null || ce === void 0
                                    ? void 0
                                    : ce[q]) ||
                                  ((X = Ce[R - a + 7]) === null || X === void 0
                                    ? void 0
                                    : X[q]) ||
                                  (($ = Ce[R]) === null || $ === void 0
                                    ? void 0
                                    : $[q - a + 7])
                                );
                              }),
                              this.drawCorners(),
                              this._options.image
                                ? [
                                    4,
                                    this.drawImage({
                                      width: f.width,
                                      height: f.height,
                                      count: a,
                                      dotSize: h,
                                    }),
                                  ]
                                : [3, 4]
                            );
                          case 3:
                            F.sent(), (F.label = 4);
                          case 4:
                            return [2];
                        }
                      });
                    });
                  }),
                  (y.prototype.drawBackground = function () {
                    var t,
                      a,
                      i,
                      u = this._element,
                      h = this._options;
                    if (u) {
                      var f =
                          (t = h.backgroundOptions) === null || t === void 0
                            ? void 0
                            : t.gradient,
                        x =
                          (a = h.backgroundOptions) === null || a === void 0
                            ? void 0
                            : a.color;
                      if (
                        ((f || x) &&
                          this._createColor({
                            options: f,
                            color: x,
                            additionalRotation: 0,
                            x: 0,
                            y: 0,
                            height: h.height,
                            width: h.width,
                            name: "background-color",
                          }),
                        (i = h.backgroundOptions) === null || i === void 0
                          ? void 0
                          : i.round)
                      ) {
                        var c = Math.min(h.width, h.height),
                          d = document.createElementNS(
                            "http://www.w3.org/2000/svg",
                            "rect"
                          );
                        (this._backgroundClipPath = document.createElementNS(
                          "http://www.w3.org/2000/svg",
                          "clipPath"
                        )),
                          this._backgroundClipPath.setAttribute(
                            "id",
                            "clip-path-background-color"
                          ),
                          this._defs.appendChild(this._backgroundClipPath),
                          d.setAttribute("x", String((h.width - c) / 2)),
                          d.setAttribute("y", String((h.height - c) / 2)),
                          d.setAttribute("width", String(c)),
                          d.setAttribute("height", String(c)),
                          d.setAttribute(
                            "rx",
                            String((c / 2) * h.backgroundOptions.round)
                          ),
                          this._backgroundClipPath.appendChild(d);
                      }
                    }
                  }),
                  (y.prototype.drawDots = function (t) {
                    var a,
                      i,
                      u = this;
                    if (!this._qr) throw "QR code is not defined";
                    var h = this._options,
                      f = this._qr.getModuleCount();
                    if (f > h.width || f > h.height)
                      throw "The canvas is too small.";
                    var x = Math.min(h.width, h.height) - 2 * h.margin,
                      c = h.shape === ue ? x / Math.sqrt(2) : x,
                      d = Math.floor(c / f),
                      l = Math.floor((h.width - f * d) / 2),
                      g = Math.floor((h.height - f * d) / 2),
                      b = new H({
                        svg: this._element,
                        type: h.dotsOptions.type,
                      });
                    (this._dotsClipPath = document.createElementNS(
                      "http://www.w3.org/2000/svg",
                      "clipPath"
                    )),
                      this._dotsClipPath.setAttribute(
                        "id",
                        "clip-path-dot-color"
                      ),
                      this._defs.appendChild(this._dotsClipPath),
                      this._createColor({
                        options:
                          (a = h.dotsOptions) === null || a === void 0
                            ? void 0
                            : a.gradient,
                        color: h.dotsOptions.color,
                        additionalRotation: 0,
                        x: 0,
                        y: 0,
                        height: h.height,
                        width: h.width,
                        name: "dot-color",
                      });
                    for (
                      var F = function (me) {
                          for (
                            var ie = function (de) {
                                return t && !t(me, de)
                                  ? "continue"
                                  : !((i = R._qr) === null || i === void 0) &&
                                    i.isDark(me, de)
                                  ? (b.draw(
                                      l + me * d,
                                      g + de * d,
                                      d,
                                      function (_e, be) {
                                        return (
                                          !(
                                            me + _e < 0 ||
                                            de + be < 0 ||
                                            me + _e >= f ||
                                            de + be >= f
                                          ) &&
                                          !(t && !t(me + _e, de + be)) &&
                                          !!u._qr &&
                                          u._qr.isDark(me + _e, de + be)
                                        );
                                      }
                                    ),
                                    void (
                                      b._element &&
                                      R._dotsClipPath &&
                                      R._dotsClipPath.appendChild(b._element)
                                    ))
                                  : "continue";
                              },
                              we = 0;
                            we < f;
                            we++
                          )
                            ie(we);
                        },
                        R = this,
                        q = 0;
                      q < f;
                      q++
                    )
                      F(q);
                    if (h.shape === ue) {
                      var J = Math.floor((x / d - f) / 2),
                        Y = f + 2 * J,
                        Z = l - J * d,
                        ce = g - J * d,
                        X = [],
                        $ = Math.floor(Y / 2);
                      for (q = 0; q < Y; q++) {
                        X[q] = [];
                        for (var K = 0; K < Y; K++)
                          (q >= J - 1 &&
                            q <= Y - J &&
                            K >= J - 1 &&
                            K <= Y - J) ||
                          Math.sqrt((q - $) * (q - $) + (K - $) * (K - $)) > $
                            ? (X[q][K] = 0)
                            : (X[q][K] = this._qr.isDark(
                                K - 2 * J < 0 ? K : K >= f ? K - 2 * J : K - J,
                                q - 2 * J < 0 ? q : q >= f ? q - 2 * J : q - J
                              )
                                ? 1
                                : 0);
                      }
                      var te = function (me) {
                          for (
                            var ie = function (de) {
                                if (!X[me][de]) return "continue";
                                b.draw(
                                  Z + me * d,
                                  ce + de * d,
                                  d,
                                  function (_e, be) {
                                    var ke;
                                    return !!(
                                      !(
                                        (ke = X[me + _e]) === null ||
                                        ke === void 0
                                      ) && ke[de + be]
                                    );
                                  }
                                ),
                                  b._element &&
                                    ze._dotsClipPath &&
                                    ze._dotsClipPath.appendChild(b._element);
                              },
                              we = 0;
                            we < Y;
                            we++
                          )
                            ie(we);
                        },
                        ze = this;
                      for (q = 0; q < Y; q++) te(q);
                    }
                  }),
                  (y.prototype.drawCorners = function () {
                    var t = this;
                    if (!this._qr) throw "QR code is not defined";
                    var a = this._element,
                      i = this._options;
                    if (!a) throw "Element code is not defined";
                    var u = this._qr.getModuleCount(),
                      h = Math.min(i.width, i.height) - 2 * i.margin,
                      f = i.shape === ue ? h / Math.sqrt(2) : h,
                      x = Math.floor(f / u),
                      c = 7 * x,
                      d = 3 * x,
                      l = Math.floor((i.width - u * x) / 2),
                      g = Math.floor((i.height - u * x) / 2);
                    [
                      [0, 0, 0],
                      [1, 0, Math.PI / 2],
                      [0, 1, -Math.PI / 2],
                    ].forEach(function (b) {
                      var F,
                        R,
                        q,
                        J,
                        Y,
                        Z,
                        ce,
                        X,
                        $,
                        K,
                        te,
                        ze,
                        me = b[0],
                        ie = b[1],
                        we = b[2],
                        de = l + me * x * (u - 7),
                        _e = g + ie * x * (u - 7),
                        be = t._dotsClipPath,
                        ke = t._dotsClipPath;
                      if (
                        ((((F = i.cornersSquareOptions) === null || F === void 0
                          ? void 0
                          : F.gradient) ||
                          ((R = i.cornersSquareOptions) === null || R === void 0
                            ? void 0
                            : R.color)) &&
                          ((be = document.createElementNS(
                            "http://www.w3.org/2000/svg",
                            "clipPath"
                          )).setAttribute(
                            "id",
                            "clip-path-corners-square-color-" + me + "-" + ie
                          ),
                          t._defs.appendChild(be),
                          (t._cornersSquareClipPath =
                            t._cornersDotClipPath =
                            ke =
                              be),
                          t._createColor({
                            options:
                              (q = i.cornersSquareOptions) === null ||
                              q === void 0
                                ? void 0
                                : q.gradient,
                            color:
                              (J = i.cornersSquareOptions) === null ||
                              J === void 0
                                ? void 0
                                : J.color,
                            additionalRotation: we,
                            x: de,
                            y: _e,
                            height: c,
                            width: c,
                            name: "corners-square-color-" + me + "-" + ie,
                          })),
                        (Y = i.cornersSquareOptions) === null || Y === void 0
                          ? void 0
                          : Y.type)
                      ) {
                        var Me = new V({
                          svg: t._element,
                          type: i.cornersSquareOptions.type,
                        });
                        Me.draw(de, _e, c, we),
                          Me._element && be && be.appendChild(Me._element);
                      } else
                        for (
                          var Fe = new H({
                              svg: t._element,
                              type: i.dotsOptions.type,
                            }),
                            Ot = function (Ee) {
                              for (
                                var nt = function (Re) {
                                    if (
                                      !(
                                        !(
                                          (Z = xe[Ee]) === null || Z === void 0
                                        ) && Z[Re]
                                      )
                                    )
                                      return "continue";
                                    Fe.draw(
                                      de + Ee * x,
                                      _e + Re * x,
                                      x,
                                      function (it, ot) {
                                        var Ne;
                                        return !!(
                                          !(
                                            (Ne = xe[Ee + it]) === null ||
                                            Ne === void 0
                                          ) && Ne[Re + ot]
                                        );
                                      }
                                    ),
                                      Fe._element &&
                                        be &&
                                        be.appendChild(Fe._element);
                                  },
                                  Te = 0;
                                Te < xe[Ee].length;
                                Te++
                              )
                                nt(Te);
                            },
                            Le = 0;
                          Le < xe.length;
                          Le++
                        )
                          Ot(Le);
                      if (
                        ((((ce = i.cornersDotOptions) === null || ce === void 0
                          ? void 0
                          : ce.gradient) ||
                          ((X = i.cornersDotOptions) === null || X === void 0
                            ? void 0
                            : X.color)) &&
                          ((ke = document.createElementNS(
                            "http://www.w3.org/2000/svg",
                            "clipPath"
                          )).setAttribute(
                            "id",
                            "clip-path-corners-dot-color-" + me + "-" + ie
                          ),
                          t._defs.appendChild(ke),
                          (t._cornersDotClipPath = ke),
                          t._createColor({
                            options:
                              ($ = i.cornersDotOptions) === null || $ === void 0
                                ? void 0
                                : $.gradient,
                            color:
                              (K = i.cornersDotOptions) === null || K === void 0
                                ? void 0
                                : K.color,
                            additionalRotation: we,
                            x: de + 2 * x,
                            y: _e + 2 * x,
                            height: d,
                            width: d,
                            name: "corners-dot-color-" + me + "-" + ie,
                          })),
                        (te = i.cornersDotOptions) === null || te === void 0
                          ? void 0
                          : te.type)
                      ) {
                        var rt = new ae({
                          svg: t._element,
                          type: i.cornersDotOptions.type,
                        });
                        rt.draw(de + 2 * x, _e + 2 * x, d, we),
                          rt._element && ke && ke.appendChild(rt._element);
                      } else {
                        Fe = new H({
                          svg: t._element,
                          type: i.dotsOptions.type,
                        });
                        var zt = function (Ee) {
                          for (
                            var nt = function (Re) {
                                if (
                                  !(
                                    !(
                                      (ze = Ce[Ee]) === null || ze === void 0
                                    ) && ze[Re]
                                  )
                                )
                                  return "continue";
                                Fe.draw(
                                  de + Ee * x,
                                  _e + Re * x,
                                  x,
                                  function (it, ot) {
                                    var Ne;
                                    return !!(
                                      !(
                                        (Ne = Ce[Ee + it]) === null ||
                                        Ne === void 0
                                      ) && Ne[Re + ot]
                                    );
                                  }
                                ),
                                  Fe._element &&
                                    ke &&
                                    ke.appendChild(Fe._element);
                              },
                              Te = 0;
                            Te < Ce[Ee].length;
                            Te++
                          )
                            nt(Te);
                        };
                        for (Le = 0; Le < Ce.length; Le++) zt(Le);
                      }
                    });
                  }),
                  (y.prototype.loadImage = function () {
                    var t = this;
                    return new Promise(function (a, i) {
                      var u = t._options,
                        h = new Image();
                      if (!u.image) return i("Image is not defined");
                      typeof u.imageOptions.crossOrigin == "string" &&
                        (h.crossOrigin = u.imageOptions.crossOrigin),
                        (t._image = h),
                        (h.onload = function () {
                          a();
                        }),
                        (h.src = u.image);
                    });
                  }),
                  (y.prototype.drawImage = function (t) {
                    var a = t.width,
                      i = t.height,
                      u = t.count,
                      h = t.dotSize;
                    return ye(this, void 0, void 0, function () {
                      var f, x, c, d, l, g, b, F, R;
                      return Ie(this, function (q) {
                        switch (q.label) {
                          case 0:
                            return (
                              (f = this._options),
                              (x = Math.floor((f.width - u * h) / 2)),
                              (c = Math.floor((f.height - u * h) / 2)),
                              (d = x + f.imageOptions.margin + (u * h - a) / 2),
                              (l = c + f.imageOptions.margin + (u * h - i) / 2),
                              (g = a - 2 * f.imageOptions.margin),
                              (b = i - 2 * f.imageOptions.margin),
                              (F = document.createElementNS(
                                "http://www.w3.org/2000/svg",
                                "image"
                              )).setAttribute("x", String(d)),
                              F.setAttribute("y", String(l)),
                              F.setAttribute("width", g + "px"),
                              F.setAttribute("height", b + "px"),
                              [4, E(f.image || "")]
                            );
                          case 1:
                            return (
                              (R = q.sent()),
                              F.setAttribute("href", R || ""),
                              this._element.appendChild(F),
                              [2]
                            );
                        }
                      });
                    });
                  }),
                  (y.prototype._createColor = function (t) {
                    var a = t.options,
                      i = t.color,
                      u = t.additionalRotation,
                      h = t.x,
                      f = t.y,
                      x = t.height,
                      c = t.width,
                      d = t.name,
                      l = c > x ? c : x,
                      g = document.createElementNS(
                        "http://www.w3.org/2000/svg",
                        "rect"
                      );
                    if (
                      (g.setAttribute("x", String(h)),
                      g.setAttribute("y", String(f)),
                      g.setAttribute("height", String(x)),
                      g.setAttribute("width", String(c)),
                      g.setAttribute(
                        "clip-path",
                        "url('#clip-path-" + d + "')"
                      ),
                      a)
                    ) {
                      var b;
                      if (a.type === "radial")
                        (b = document.createElementNS(
                          "http://www.w3.org/2000/svg",
                          "radialGradient"
                        )).setAttribute("id", d),
                          b.setAttribute("gradientUnits", "userSpaceOnUse"),
                          b.setAttribute("fx", String(h + c / 2)),
                          b.setAttribute("fy", String(f + x / 2)),
                          b.setAttribute("cx", String(h + c / 2)),
                          b.setAttribute("cy", String(f + x / 2)),
                          b.setAttribute("r", String(l / 2));
                      else {
                        var F = ((a.rotation || 0) + u) % (2 * Math.PI),
                          R = (F + 2 * Math.PI) % (2 * Math.PI),
                          q = h + c / 2,
                          J = f + x / 2,
                          Y = h + c / 2,
                          Z = f + x / 2;
                        (R >= 0 && R <= 0.25 * Math.PI) ||
                        (R > 1.75 * Math.PI && R <= 2 * Math.PI)
                          ? ((q -= c / 2),
                            (J -= (x / 2) * Math.tan(F)),
                            (Y += c / 2),
                            (Z += (x / 2) * Math.tan(F)))
                          : R > 0.25 * Math.PI && R <= 0.75 * Math.PI
                          ? ((J -= x / 2),
                            (q -= c / 2 / Math.tan(F)),
                            (Z += x / 2),
                            (Y += c / 2 / Math.tan(F)))
                          : R > 0.75 * Math.PI && R <= 1.25 * Math.PI
                          ? ((q += c / 2),
                            (J += (x / 2) * Math.tan(F)),
                            (Y -= c / 2),
                            (Z -= (x / 2) * Math.tan(F)))
                          : R > 1.25 * Math.PI &&
                            R <= 1.75 * Math.PI &&
                            ((J += x / 2),
                            (q += c / 2 / Math.tan(F)),
                            (Z -= x / 2),
                            (Y -= c / 2 / Math.tan(F))),
                          (b = document.createElementNS(
                            "http://www.w3.org/2000/svg",
                            "linearGradient"
                          )).setAttribute("id", d),
                          b.setAttribute("gradientUnits", "userSpaceOnUse"),
                          b.setAttribute("x1", String(Math.round(q))),
                          b.setAttribute("y1", String(Math.round(J))),
                          b.setAttribute("x2", String(Math.round(Y))),
                          b.setAttribute("y2", String(Math.round(Z)));
                      }
                      a.colorStops.forEach(function (ce) {
                        var X = ce.offset,
                          $ = ce.color,
                          K = document.createElementNS(
                            "http://www.w3.org/2000/svg",
                            "stop"
                          );
                        K.setAttribute("offset", 100 * X + "%"),
                          K.setAttribute("stop-color", $),
                          b.appendChild(K);
                      }),
                        g.setAttribute("fill", "url('#" + d + "')"),
                        this._defs.appendChild(b);
                    } else i && g.setAttribute("fill", i);
                    this._element.appendChild(g);
                  }),
                  y
                );
              })(),
              De = "canvas";
            for (var ge = {}, M = 0; M <= 40; M++) ge[M] = M;
            const S = {
              type: De,
              shape: "square",
              width: 300,
              height: 300,
              data: "",
              margin: 0,
              qrOptions: {
                typeNumber: ge[0],
                mode: void 0,
                errorCorrectionLevel: "Q",
              },
              imageOptions: {
                hideBackgroundDots: !0,
                imageSize: 0.4,
                crossOrigin: void 0,
                margin: 0,
              },
              dotsOptions: { type: "square", color: "#000" },
              backgroundOptions: { round: 0, color: "#fff" },
            };
            var k = function () {
              return (k =
                Object.assign ||
                function (y) {
                  for (var t, a = 1, i = arguments.length; a < i; a++)
                    for (var u in (t = arguments[a]))
                      Object.prototype.hasOwnProperty.call(t, u) &&
                        (y[u] = t[u]);
                  return y;
                }).apply(this, arguments);
            };
            function C(y) {
              var t = k({}, y);
              if (!t.colorStops || !t.colorStops.length)
                throw "Field 'colorStops' is required in gradient";
              return (
                t.rotation
                  ? (t.rotation = Number(t.rotation))
                  : (t.rotation = 0),
                (t.colorStops = t.colorStops.map(function (a) {
                  return k(k({}, a), { offset: Number(a.offset) });
                })),
                t
              );
            }
            function w(y) {
              var t = k({}, y);
              return (
                (t.width = Number(t.width)),
                (t.height = Number(t.height)),
                (t.margin = Number(t.margin)),
                (t.imageOptions = k(k({}, t.imageOptions), {
                  hideBackgroundDots: Boolean(
                    t.imageOptions.hideBackgroundDots
                  ),
                  imageSize: Number(t.imageOptions.imageSize),
                  margin: Number(t.imageOptions.margin),
                })),
                t.margin > Math.min(t.width, t.height) &&
                  (t.margin = Math.min(t.width, t.height)),
                (t.dotsOptions = k({}, t.dotsOptions)),
                t.dotsOptions.gradient &&
                  (t.dotsOptions.gradient = C(t.dotsOptions.gradient)),
                t.cornersSquareOptions &&
                  ((t.cornersSquareOptions = k({}, t.cornersSquareOptions)),
                  t.cornersSquareOptions.gradient &&
                    (t.cornersSquareOptions.gradient = C(
                      t.cornersSquareOptions.gradient
                    ))),
                t.cornersDotOptions &&
                  ((t.cornersDotOptions = k({}, t.cornersDotOptions)),
                  t.cornersDotOptions.gradient &&
                    (t.cornersDotOptions.gradient = C(
                      t.cornersDotOptions.gradient
                    ))),
                t.backgroundOptions &&
                  ((t.backgroundOptions = k({}, t.backgroundOptions)),
                  t.backgroundOptions.gradient &&
                    (t.backgroundOptions.gradient = C(
                      t.backgroundOptions.gradient
                    ))),
                t
              );
            }
            var A = m(192),
              O = m.n(A),
              j = function (y, t, a, i) {
                return new (a || (a = Promise))(function (u, h) {
                  function f(d) {
                    try {
                      c(i.next(d));
                    } catch (l) {
                      h(l);
                    }
                  }
                  function x(d) {
                    try {
                      c(i.throw(d));
                    } catch (l) {
                      h(l);
                    }
                  }
                  function c(d) {
                    var l;
                    d.done
                      ? u(d.value)
                      : ((l = d.value),
                        l instanceof a
                          ? l
                          : new a(function (g) {
                              g(l);
                            })).then(f, x);
                  }
                  c((i = i.apply(y, t || [])).next());
                });
              },
              U = function (y, t) {
                var a,
                  i,
                  u,
                  h,
                  f = {
                    label: 0,
                    sent: function () {
                      if (1 & u[0]) throw u[1];
                      return u[1];
                    },
                    trys: [],
                    ops: [],
                  };
                return (
                  (h = { next: x(0), throw: x(1), return: x(2) }),
                  typeof Symbol == "function" &&
                    (h[Symbol.iterator] = function () {
                      return this;
                    }),
                  h
                );
                function x(c) {
                  return function (d) {
                    return (function (l) {
                      if (a)
                        throw new TypeError("Generator is already executing.");
                      for (; f; )
                        try {
                          if (
                            ((a = 1),
                            i &&
                              (u =
                                2 & l[0]
                                  ? i.return
                                  : l[0]
                                  ? i.throw || ((u = i.return) && u.call(i), 0)
                                  : i.next) &&
                              !(u = u.call(i, l[1])).done)
                          )
                            return u;
                          switch (
                            ((i = 0), u && (l = [2 & l[0], u.value]), l[0])
                          ) {
                            case 0:
                            case 1:
                              u = l;
                              break;
                            case 4:
                              return f.label++, { value: l[1], done: !1 };
                            case 5:
                              f.label++, (i = l[1]), (l = [0]);
                              continue;
                            case 7:
                              (l = f.ops.pop()), f.trys.pop();
                              continue;
                            default:
                              if (
                                !(
                                  (u =
                                    (u = f.trys).length > 0 &&
                                    u[u.length - 1]) ||
                                  (l[0] !== 6 && l[0] !== 2)
                                )
                              ) {
                                f = 0;
                                continue;
                              }
                              if (
                                l[0] === 3 &&
                                (!u || (l[1] > u[0] && l[1] < u[3]))
                              ) {
                                f.label = l[1];
                                break;
                              }
                              if (l[0] === 6 && f.label < u[1]) {
                                (f.label = u[1]), (u = l);
                                break;
                              }
                              if (u && f.label < u[2]) {
                                (f.label = u[2]), f.ops.push(l);
                                break;
                              }
                              u[2] && f.ops.pop(), f.trys.pop();
                              continue;
                          }
                          l = t.call(y, f);
                        } catch (g) {
                          (l = [6, g]), (i = 0);
                        } finally {
                          a = u = 0;
                        }
                      if (5 & l[0]) throw l[1];
                      return { value: l[0] ? l[1] : void 0, done: !0 };
                    })([c, d]);
                  };
                }
              };
            const se = (function () {
              function y(t) {
                (this._options = t ? w(T(S, t)) : S), this.update();
              }
              return (
                (y._clearContainer = function (t) {
                  t && (t.innerHTML = "");
                }),
                (y.prototype._setupSvg = function () {
                  var t = this;
                  if (this._qr) {
                    var a = new Oe(this._options);
                    (this._svg = a.getElement()),
                      (this._svgDrawingPromise = a
                        .drawQR(this._qr)
                        .then(function () {
                          var i;
                          t._svg &&
                            ((i = t._extension) === null ||
                              i === void 0 ||
                              i.call(t, a.getElement(), t._options));
                        }));
                  }
                }),
                (y.prototype._setupCanvas = function () {
                  var t,
                    a = this;
                  this._qr &&
                    ((this._canvas = document.createElement("canvas")),
                    (this._canvas.width = this._options.width),
                    (this._canvas.height = this._options.height),
                    this._setupSvg(),
                    (this._canvasDrawingPromise =
                      (t = this._svgDrawingPromise) === null || t === void 0
                        ? void 0
                        : t.then(function () {
                            if (a._svg) {
                              var i = a._svg,
                                u = new XMLSerializer().serializeToString(i),
                                h = "data:image/svg+xml;base64," + btoa(u),
                                f = new Image();
                              return new Promise(function (x) {
                                (f.onload = function () {
                                  var c, d;
                                  (d =
                                    (c = a._canvas) === null || c === void 0
                                      ? void 0
                                      : c.getContext("2d")) === null ||
                                    d === void 0 ||
                                    d.drawImage(f, 0, 0),
                                    x();
                                }),
                                  (f.src = h);
                              });
                            }
                          })));
                }),
                (y.prototype._getElement = function (t) {
                  return (
                    t === void 0 && (t = "png"),
                    j(this, void 0, void 0, function () {
                      return U(this, function (a) {
                        switch (a.label) {
                          case 0:
                            if (!this._qr) throw "QR code is empty";
                            return t.toLowerCase() !== "svg"
                              ? [3, 2]
                              : ((this._svg && this._svgDrawingPromise) ||
                                  this._setupSvg(),
                                [4, this._svgDrawingPromise]);
                          case 1:
                            return a.sent(), [2, this._svg];
                          case 2:
                            return (
                              (this._canvas && this._canvasDrawingPromise) ||
                                this._setupCanvas(),
                              [4, this._canvasDrawingPromise]
                            );
                          case 3:
                            return a.sent(), [2, this._canvas];
                        }
                      });
                    })
                  );
                }),
                (y.prototype.update = function (t) {
                  y._clearContainer(this._container),
                    (this._options = t
                      ? w(T(this._options, t))
                      : this._options),
                    this._options.data &&
                      ((this._qr = O()(
                        this._options.qrOptions.typeNumber,
                        this._options.qrOptions.errorCorrectionLevel
                      )),
                      this._qr.addData(
                        this._options.data,
                        this._options.qrOptions.mode ||
                          (function (a) {
                            switch (!0) {
                              case /^[0-9]*$/.test(a):
                                return "Numeric";
                              case /^[0-9A-Z $%*+\-./:]*$/.test(a):
                                return "Alphanumeric";
                              default:
                                return "Byte";
                            }
                          })(this._options.data)
                      ),
                      this._qr.make(),
                      this._options.type === De
                        ? this._setupCanvas()
                        : this._setupSvg(),
                      this.append(this._container));
                }),
                (y.prototype.append = function (t) {
                  if (t) {
                    if (typeof t.appendChild != "function")
                      throw "Container should be a single DOM node";
                    this._options.type === De
                      ? this._canvas && t.appendChild(this._canvas)
                      : this._svg && t.appendChild(this._svg),
                      (this._container = t);
                  }
                }),
                (y.prototype.applyExtension = function (t) {
                  if (!t) throw "Extension function should be defined.";
                  (this._extension = t), this.update();
                }),
                (y.prototype.deleteExtension = function () {
                  (this._extension = void 0), this.update();
                }),
                (y.prototype.getRawData = function (t) {
                  return (
                    t === void 0 && (t = "png"),
                    j(this, void 0, void 0, function () {
                      var a, i, u;
                      return U(this, function (h) {
                        switch (h.label) {
                          case 0:
                            if (!this._qr) throw "QR code is empty";
                            return [4, this._getElement(t)];
                          case 1:
                            return (a = h.sent())
                              ? t.toLowerCase() === "svg"
                                ? ((i = new XMLSerializer()),
                                  (u = i.serializeToString(a)),
                                  [
                                    2,
                                    new Blob(
                                      [
                                        `<?xml version="1.0" standalone="no"?>\r
` + u,
                                      ],
                                      { type: "image/svg+xml" }
                                    ),
                                  ])
                                : [
                                    2,
                                    new Promise(function (f) {
                                      return a.toBlob(f, "image/" + t, 1);
                                    }),
                                  ]
                              : [2, null];
                        }
                      });
                    })
                  );
                }),
                (y.prototype.download = function (t) {
                  return j(this, void 0, void 0, function () {
                    var a, i, u, h, f;
                    return U(this, function (x) {
                      switch (x.label) {
                        case 0:
                          if (!this._qr) throw "QR code is empty";
                          return (
                            (a = "png"),
                            (i = "qr"),
                            typeof t == "string"
                              ? ((a = t),
                                console.warn(
                                  "Extension is deprecated as argument for 'download' method, please pass object { name: '...', extension: '...' } as argument"
                                ))
                              : typeof t == "object" &&
                                t !== null &&
                                (t.name && (i = t.name),
                                t.extension && (a = t.extension)),
                            [4, this._getElement(a)]
                          );
                        case 1:
                          return (u = x.sent())
                            ? (a.toLowerCase() === "svg"
                                ? ((h = new XMLSerializer()),
                                  (f =
                                    `<?xml version="1.0" standalone="no"?>\r
` + (f = h.serializeToString(u))),
                                  G(
                                    "data:image/svg+xml;charset=utf-8," +
                                      encodeURIComponent(f),
                                    i + ".svg"
                                  ))
                                : G(u.toDataURL("image/" + a), i + "." + a),
                              [2])
                            : [2];
                      }
                    });
                  });
                }),
                y
              );
            })();
          },
        },
        o = {};
      function s(p) {
        if (o[p]) return o[p].exports;
        var v = (o[p] = { exports: {} });
        return r[p](v, v.exports, s), v.exports;
      }
      return (
        (s.n = (p) => {
          var v = p && p.__esModule ? () => p.default : () => p;
          return s.d(v, { a: v }), v;
        }),
        (s.d = (p, v) => {
          for (var m in v)
            s.o(v, m) &&
              !s.o(p, m) &&
              Object.defineProperty(p, m, { enumerable: !0, get: v[m] });
        }),
        (s.o = (p, v) => Object.prototype.hasOwnProperty.call(p, v)),
        s(676)
      );
    })().default;
  });
})(Mt);
var jr = Ir(Mt.exports);
function Er(n) {
  let e, r, o, s, p, v, m, z, D, L, T;
  return (
    (s = new ht({
      props: {
        font: "f-secondary",
        text: `Your child has been successfully registered. \r
    Please show us this code at the entrance. \r
    You can either take a screenshot of this page or download it by pressing the button below.`,
      },
    })),
    (m = new qt({ props: { text: "download" } })),
    m.$on("action", n[0]),
    (L = new ft({ props: { text: "Done" } })),
    L.$on("action", n[14]),
    {
      c() {
        (e = Q("div")),
          (r = Q("div")),
          (o = ee()),
          ve(s.$$.fragment),
          (p = ee()),
          (v = Q("div")),
          ve(m.$$.fragment),
          (z = ee()),
          (D = Q("div")),
          ve(L.$$.fragment),
          _(r, "class", "qrcode std-flex-column svelte-po5xvs"),
          _(r, "id", "canvas"),
          _(v, "class", "donload-btn-wrapper svelte-po5xvs"),
          _(D, "class", "next-btn-wrapper svelte-po5xvs"),
          _(e, "class", "qrcode-wrapper");
      },
      m(G, E) {
        oe(G, e, E),
          B(e, r),
          B(e, o),
          he(s, e, null),
          B(e, p),
          B(e, v),
          he(m, v, null),
          B(e, z),
          B(e, D),
          he(L, D, null),
          (T = !0);
      },
      p: fe,
      i(G) {
        T ||
          (re(s.$$.fragment, G),
          re(m.$$.fragment, G),
          re(L.$$.fragment, G),
          (T = !0));
      },
      o(G) {
        le(s.$$.fragment, G),
          le(m.$$.fragment, G),
          le(L.$$.fragment, G),
          (T = !1);
      },
      d(G) {
        G && ne(e), pe(s), pe(m), pe(L);
      },
    }
  );
}
function Br(n, e, r) {
  let { childId: o } = e,
    { organizationId: s } = e,
    { width: p = 300 } = e,
    { height: v = 300 } = e,
    { dotGradientOne: m = "#000000" } = e,
    { dotGradientTwo: z = "#000000" } = e,
    { image: D = "" } = e,
    { bkgColor: L = "#FFFFFF" } = e,
    { dotType: T = "rounded" } = e,
    { cornerSqColor: G = "rounded" } = e,
    { cornerSqType: E = "rounded" } = e,
    { cornerDotColor: P = "rounded" } = e,
    { cornerDotType: N = "rounded" } = e;
  const H = new jr({
      width: p,
      height: v,
      type: "svg",
      data: `https://chikios.biblescholar.app/admin/${o}`,
      image: D,
      dotsOptions: {
        gradient: {
          type: "linear",
          rotation: 70,
          colorStops: [
            { offset: 0, color: m },
            { offset: 1, color: z },
          ],
        },
        type: T,
      },
      backgroundOptions: { color: L },
      imageOptions: { crossOrigin: "anonymous", margin: 5 },
      cornersSquareOptions: { color: G, type: E },
      cornersDotOptions: { color: P, type: N },
    }),
    W = () => {
      H.download({ extension: "png" });
    };
  dt(() => {
    H.append(document.getElementById("canvas"));
  });
  const V = () => {
    location.href = location.href;
  };
  return (
    (n.$$set = (I) => {
      "childId" in I && r(1, (o = I.childId)),
        "organizationId" in I && r(2, (s = I.organizationId)),
        "width" in I && r(3, (p = I.width)),
        "height" in I && r(4, (v = I.height)),
        "dotGradientOne" in I && r(5, (m = I.dotGradientOne)),
        "dotGradientTwo" in I && r(6, (z = I.dotGradientTwo)),
        "image" in I && r(7, (D = I.image)),
        "bkgColor" in I && r(8, (L = I.bkgColor)),
        "dotType" in I && r(9, (T = I.dotType)),
        "cornerSqColor" in I && r(10, (G = I.cornerSqColor)),
        "cornerSqType" in I && r(11, (E = I.cornerSqType)),
        "cornerDotColor" in I && r(12, (P = I.cornerDotColor)),
        "cornerDotType" in I && r(13, (N = I.cornerDotType));
    }),
    [W, o, s, p, v, m, z, D, L, T, G, E, P, N, V]
  );
}
class Pr extends qe {
  constructor(e) {
    super(),
      Se(this, e, Br, Er, Ae, {
        childId: 1,
        organizationId: 2,
        width: 3,
        height: 4,
        dotGradientOne: 5,
        dotGradientTwo: 6,
        image: 7,
        bkgColor: 8,
        dotType: 9,
        cornerSqColor: 10,
        cornerSqType: 11,
        cornerDotColor: 12,
        cornerDotType: 13,
      });
  }
}
function Fr(n) {
  let e, r;
  return (
    (e = new Pr({
      props: {
        childId: n[1],
        organizationId: "ALJC",
        image: "images/logo.png",
        dotGradientOne: "#04fed1",
        dotGradientTwo: "#1400ff",
        cornerDotColor: "#04fed1",
        cornerSqColor: "#1400ff",
      },
    })),
    {
      c() {
        ve(e.$$.fragment);
      },
      m(o, s) {
        he(e, o, s), (r = !0);
      },
      p(o, s) {
        const p = {};
        s & 2 && (p.childId = o[1]), e.$set(p);
      },
      i(o) {
        r || (re(e.$$.fragment, o), (r = !0));
      },
      o(o) {
        le(e.$$.fragment, o), (r = !1);
      },
      d(o) {
        pe(e, o);
      },
    }
  );
}
function Lr(n) {
  let e, r, o;
  function s(v) {
    n[4](v);
  }
  let p = {};
  return (
    n[0] !== void 0 && (p.currentTitle = n[0]),
    (e = new Ar({ props: p })),
    st.push(() => Qt(e, "currentTitle", s)),
    e.$on("registration_success", n[3]),
    {
      c() {
        ve(e.$$.fragment);
      },
      m(v, m) {
        he(e, v, m), (o = !0);
      },
      p(v, m) {
        const z = {};
        !r && m & 1 && ((r = !0), (z.currentTitle = v[0]), Nt(() => (r = !1))),
          e.$set(z);
      },
      i(v) {
        o || (re(e.$$.fragment, v), (o = !0));
      },
      o(v) {
        le(e.$$.fragment, v), (o = !1);
      },
      d(v) {
        pe(e, v);
      },
    }
  );
}
function Tr(n) {
  let e, r, o, s, p, v, m, z, D;
  (r = new Dr({ props: { src: "/images/logo.png", alt: "kidz quest logo" } })),
    (s = new Mr({ props: { title: n[0] } }));
  const L = [Lr, Fr],
    T = [];
  function G(E, P) {
    return E[2] === 0 ? 0 : E[2] === 1 && E[1] ? 1 : -1;
  }
  return (
    ~(v = G(n)) && (m = T[v] = L[v](n)),
    {
      c() {
        (e = Q("div")),
          ve(r.$$.fragment),
          (o = ee()),
          ve(s.$$.fragment),
          (p = ee()),
          m && m.c(),
          (z = Bt()),
          _(e, "class", "image-wrapper svelte-1oshbwy");
      },
      m(E, P) {
        oe(E, e, P),
          he(r, e, null),
          oe(E, o, P),
          he(s, E, P),
          oe(E, p, P),
          ~v && T[v].m(E, P),
          oe(E, z, P),
          (D = !0);
      },
      p(E, [P]) {
        const N = {};
        P & 1 && (N.title = E[0]), s.$set(N);
        let H = v;
        (v = G(E)),
          v === H
            ? ~v && T[v].p(E, P)
            : (m &&
                (Ve(),
                le(T[H], 1, 1, () => {
                  T[H] = null;
                }),
                We()),
              ~v
                ? ((m = T[v]),
                  m ? m.p(E, P) : ((m = T[v] = L[v](E)), m.c()),
                  re(m, 1),
                  m.m(z.parentNode, z))
                : (m = null));
      },
      i(E) {
        D || (re(r.$$.fragment, E), re(s.$$.fragment, E), re(m), (D = !0));
      },
      o(E) {
        le(r.$$.fragment, E), le(s.$$.fragment, E), le(m), (D = !1);
      },
      d(E) {
        E && ne(e),
          pe(r),
          E && ne(o),
          pe(s, E),
          E && ne(p),
          ~v && T[v].d(E),
          E && ne(z);
      },
    }
  );
}
function Rr(n, e, r) {
  let o,
    s = "",
    p = 0;
  const v = (z) => {
    r(1, (s = z.detail.id)), r(2, (p = 1));
  };
  function m(z) {
    (o = z), r(0, o);
  }
  return [o, s, p, v, m];
}
class Nr extends qe {
  constructor(e) {
    super(), Se(this, e, Rr, Tr, Ae, {});
  }
}
function Ur(n) {
  let e, r, o, s, p;
  return (
    (e = new Nr({})),
    (s = new Jt({})),
    {
      c() {
        ve(e.$$.fragment),
          (r = ee()),
          (o = Q("div")),
          ve(s.$$.fragment),
          _(o, "class", "promo svelte-11lqzr9");
      },
      m(v, m) {
        he(e, v, m), oe(v, r, m), oe(v, o, m), he(s, o, null), (p = !0);
      },
      p: fe,
      i(v) {
        p || (re(e.$$.fragment, v), re(s.$$.fragment, v), (p = !0));
      },
      o(v) {
        le(e.$$.fragment, v), le(s.$$.fragment, v), (p = !1);
      },
      d(v) {
        pe(e, v), v && ne(r), v && ne(o), pe(s);
      },
    }
  );
}
class Qr extends qe {
  constructor(e) {
    super(), Se(this, e, null, Ur, Ae, {});
  }
}
function Hr(n) {
  let e, r, o, s, p;
  return (
    (s = new Qr({})),
    {
      c() {
        (e = Q("div")),
          (r = ee()),
          (o = Q("main")),
          ve(s.$$.fragment),
          _(e, "class", "background std-bkg svelte-pe2dd9"),
          Ft(e, "background-image", "url('" + Gr + "')"),
          _(o, "class", "main-wrapper svelte-pe2dd9");
      },
      m(v, m) {
        oe(v, e, m), oe(v, r, m), oe(v, o, m), he(s, o, null), (p = !0);
      },
      p: fe,
      i(v) {
        p || (re(s.$$.fragment, v), (p = !0));
      },
      o(v) {
        le(s.$$.fragment, v), (p = !1);
      },
      d(v) {
        v && ne(e), v && ne(r), v && ne(o), pe(s);
      },
    }
  );
}
let Gr = "./images/bkgs/crumbled-paper_v.png";
class Jr extends qe {
  constructor(e) {
    super(), Se(this, e, null, Hr, Ae, {});
  }
}
new Jr({ target: document.getElementById("app") });
