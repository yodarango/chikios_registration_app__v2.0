const It = function () {
  const e = document.createElement("link").relList;
  if (e && e.supports && e.supports("modulepreload")) return;
  for (const s of document.querySelectorAll('link[rel="modulepreload"]')) i(s);
  new MutationObserver((s) => {
    for (const p of s)
      if (p.type === "childList")
        for (const v of p.addedNodes)
          v.tagName === "LINK" && v.rel === "modulepreload" && i(v);
  }).observe(document, { childList: !0, subtree: !0 });
  function t(s) {
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
  function i(s) {
    if (s.ep) return;
    s.ep = !0;
    const p = t(s);
    fetch(s.href, p);
  }
};
It();
function de() {}
function At(n) {
  return n();
}
function pt() {
  return Object.create(null);
}
function He(n) {
  n.forEach(At);
}
function jt(n) {
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
function Et(n) {
  return Object.keys(n).length === 0;
}
function B(n, e) {
  n.appendChild(e);
}
function oe(n, e, t) {
  n.insertBefore(e, t || null);
}
function ne(n) {
  n.parentNode.removeChild(n);
}
function Bt(n, e) {
  for (let t = 0; t < n.length; t += 1) n[t] && n[t].d(e);
}
function H(n) {
  return document.createElement(n);
}
function je(n) {
  return document.createTextNode(n);
}
function te() {
  return je(" ");
}
function Pt() {
  return je("");
}
function Be(n, e, t, i) {
  return n.addEventListener(e, t, i), () => n.removeEventListener(e, t, i);
}
function _(n, e, t) {
  t == null
    ? n.removeAttribute(e)
    : n.getAttribute(e) !== t && n.setAttribute(e, t);
}
function Lt(n) {
  return Array.from(n.childNodes);
}
function Pe(n, e) {
  (e = "" + e), n.wholeText !== e && (n.data = e);
}
function Ft(n, e, t, i) {
  t === null
    ? n.style.removeProperty(e)
    : n.style.setProperty(e, t, i ? "important" : "");
}
function Tt(n, e, { bubbles: t = !1, cancelable: i = !1 } = {}) {
  const s = document.createEvent("CustomEvent");
  return s.initCustomEvent(n, t, i, e), s;
}
let Ye;
function Xe(n) {
  Ye = n;
}
function St() {
  if (!Ye) throw new Error("Function called outside component initialization");
  return Ye;
}
function ft(n) {
  St().$$.on_mount.push(n);
}
function Ve() {
  const n = St();
  return (e, t, { cancelable: i = !1 } = {}) => {
    const s = n.$$.callbacks[e];
    if (s) {
      const p = Tt(e, t, { cancelable: i });
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
const We = [],
  st = [],
  $e = [],
  lt = [],
  Rt = Promise.resolve();
let ut = !1;
function Nt() {
  ut || ((ut = !0), Rt.then(qt));
}
function ct(n) {
  $e.push(n);
}
function Ut(n) {
  lt.push(n);
}
const at = new Set();
let Ze = 0;
function qt() {
  const n = Ye;
  do {
    for (; Ze < We.length; ) {
      const e = We[Ze];
      Ze++, Xe(e), Qt(e.$$);
    }
    for (Xe(null), We.length = 0, Ze = 0; st.length; ) st.pop()();
    for (let e = 0; e < $e.length; e += 1) {
      const t = $e[e];
      at.has(t) || (at.add(t), t());
    }
    $e.length = 0;
  } while (We.length);
  for (; lt.length; ) lt.pop()();
  (ut = !1), at.clear(), Xe(n);
}
function Qt(n) {
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
function Ge() {
  Qe = { r: 0, c: [], p: Qe };
}
function Je() {
  Qe.r || He(Qe.c), (Qe = Qe.p);
}
function ee(n, e) {
  n && n.i && (et.delete(n), n.i(e));
}
function ae(n, e, t, i) {
  if (n && n.o) {
    if (et.has(n)) return;
    et.add(n),
      Qe.c.push(() => {
        et.delete(n), i && (t && n.d(1), i());
      }),
      n.o(e);
  }
}
function Ht(n, e, t) {
  const i = n.$$.props[e];
  i !== void 0 && ((n.$$.bound[i] = t), t(n.$$.ctx[i]));
}
function ve(n) {
  n && n.c();
}
function he(n, e, t, i) {
  const { fragment: s, on_mount: p, on_destroy: v, after_update: m } = n.$$;
  s && s.m(e, t),
    i ||
      ct(() => {
        const z = p.map(At).filter(jt);
        v ? v.push(...z) : He(z), (n.$$.on_mount = []);
      }),
    m.forEach(ct);
}
function pe(n, e) {
  const t = n.$$;
  t.fragment !== null &&
    (He(t.on_destroy),
    t.fragment && t.fragment.d(e),
    (t.on_destroy = t.fragment = null),
    (t.ctx = []));
}
function Gt(n, e) {
  n.$$.dirty[0] === -1 && (We.push(n), Nt(), n.$$.dirty.fill(0)),
    (n.$$.dirty[(e / 31) | 0] |= 1 << e % 31);
}
function Se(n, e, t, i, s, p, v, m = [-1]) {
  const z = Ye;
  Xe(n);
  const I = (n.$$ = {
    fragment: null,
    ctx: null,
    props: p,
    update: de,
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
  v && v(I.root);
  let F = !1;
  if (
    ((I.ctx = t
      ? t(n, e.props || {}, (R, G, ...j) => {
          const P = j.length ? j[0] : G;
          return (
            I.ctx &&
              s(I.ctx[R], (I.ctx[R] = P)) &&
              (!I.skip_bound && I.bound[R] && I.bound[R](P), F && Gt(n, R)),
            G
          );
        })
      : []),
    I.update(),
    (F = !0),
    He(I.before_update),
    (I.fragment = i ? i(I.ctx) : !1),
    e.target)
  ) {
    if (e.hydrate) {
      const R = Lt(e.target);
      I.fragment && I.fragment.l(R), R.forEach(ne);
    } else I.fragment && I.fragment.c();
    e.intro && ee(n.$$.fragment),
      he(n, e.target, e.anchor, e.customElement),
      qt();
  }
  Xe(z);
}
class qe {
  $destroy() {
    pe(this, 1), (this.$destroy = de);
  }
  $on(e, t) {
    const i = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
    return (
      i.push(t),
      () => {
        const s = i.indexOf(t);
        s !== -1 && i.splice(s, 1);
      }
    );
  }
  $set(e) {
    this.$$set &&
      !Et(e) &&
      ((this.$$.skip_bound = !0), this.$$set(e), (this.$$.skip_bound = !1));
  }
}
function Jt(n) {
  let e;
  return {
    c() {
      (e = H("a")),
        (e.innerHTML = `<p class="std-text--secondary">brought you by Scholar</p> 
  <span class="std-icon scholar-icon svelte-1w5q1ii"></span>`),
        _(e, "href", "https://biblescholar.app"),
        _(e, "class", "promo-wrapper svelte-1w5q1ii");
    },
    m(t, i) {
      oe(t, e, i);
    },
    p: de,
    i: de,
    o: de,
    d(t) {
      t && ne(e);
    },
  };
}
class Vt extends qe {
  constructor(e) {
    super(), Se(this, e, null, Jt, Ae, {});
  }
}
const Wt = async (n, e, t) =>
  await (
    await fetch(n, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(e),
    })
  ).json();
function gt(n) {
  let e, t, i;
  return {
    c() {
      (e = H("p")),
        (t = je(n[1])),
        (i = je(":")),
        _(e, "class", "option-option-label svelte-1ax8dgq"),
        _(e, "for", "input-option");
    },
    m(s, p) {
      oe(s, e, p), B(e, t), B(e, i);
    },
    p(s, p) {
      p & 2 && Pe(t, s[1]);
    },
    d(s) {
      s && ne(e);
    },
  };
}
function Xt(n) {
  let e, t;
  return {
    c() {
      (e = H("input")),
        _(e, "type", "text"),
        _(e, "id", "option-one"),
        (e.value = t = n[4].first),
        _(e, "name", n[0]),
        _(e, "class", "hidden svelte-1ax8dgq");
    },
    m(i, s) {
      oe(i, e, s);
    },
    p(i, s) {
      s & 16 && t !== (t = i[4].first) && e.value !== t && (e.value = t),
        s & 1 && _(e, "name", i[0]);
    },
    d(i) {
      i && ne(e);
    },
  };
}
function Yt(n) {
  let e, t;
  return {
    c() {
      (e = H("input")),
        _(e, "type", "text"),
        _(e, "id", "option-one"),
        (e.value = t = n[4].first),
        _(e, "name", n[0]),
        _(e, "class", "hidden svelte-1ax8dgq"),
        (e.required = !0);
    },
    m(i, s) {
      oe(i, e, s);
    },
    p(i, s) {
      s & 16 && t !== (t = i[4].first) && e.value !== t && (e.value = t),
        s & 1 && _(e, "name", i[0]);
    },
    d(i) {
      i && ne(e);
    },
  };
}
function Kt(n) {
  let e, t;
  return {
    c() {
      (e = H("input")),
        _(e, "type", "text"),
        _(e, "id", "option-two"),
        (e.value = t = n[4].second),
        _(e, "name", n[0]),
        _(e, "class", "hidden svelte-1ax8dgq");
    },
    m(i, s) {
      oe(i, e, s);
    },
    p(i, s) {
      s & 16 && t !== (t = i[4].second) && e.value !== t && (e.value = t),
        s & 1 && _(e, "name", i[0]);
    },
    d(i) {
      i && ne(e);
    },
  };
}
function Zt(n) {
  let e, t;
  return {
    c() {
      (e = H("input")),
        _(e, "type", "text"),
        _(e, "id", "option-two"),
        (e.value = t = n[4].second),
        _(e, "name", n[0]),
        _(e, "class", "hidden svelte-1ax8dgq");
    },
    m(i, s) {
      oe(i, e, s);
    },
    p(i, s) {
      s & 16 && t !== (t = i[4].second) && e.value !== t && (e.value = t),
        s & 1 && _(e, "name", i[0]);
    },
    d(i) {
      i && ne(e);
    },
  };
}
function $t(n) {
  let e,
    t,
    i,
    s,
    p,
    v,
    m,
    z,
    I = n[2].first + "",
    F,
    R,
    G,
    j,
    P,
    U,
    T,
    K,
    V,
    E,
    se,
    ue = n[2].second + "",
    ye,
    Ie,
    xe,
    Ce,
    ze,
    De,
    ge = n[1] && gt(n);
  function M(O, D) {
    if (O[3] && O[4].first !== "") return Yt;
    if (!O[3] && O[4].first !== "") return Xt;
  }
  let S = M(n),
    k = S && S(n);
  function C(O, D) {
    if (O[3] && O[4].second !== "") return Zt;
    if (!O[3] && O[4].second !== "") return Kt;
  }
  let w = C(n),
    A = w && w(n);
  return {
    c() {
      (e = H("div")),
        ge && ge.c(),
        (t = te()),
        (i = H("div")),
        (s = H("span")),
        (v = te()),
        k && k.c(),
        (m = te()),
        (z = H("p")),
        (F = je(I)),
        (G = te()),
        (j = H("div")),
        (j.innerHTML =
          '<svg class="svelte-1ax8dgq"><path d="M3 5.7072C50.1565 5.7072 97.3247 5.92723 144.48 5.64704C193.917 5.3533 243.309 3.75524 292.749 3.51136C312.837 3.41227 332.909 3 353 3" stroke="#5B7FFF" stroke-width="3" stroke-linecap="round"></path></svg>'),
        (P = te()),
        (U = H("div")),
        (T = H("span")),
        (V = te()),
        A && A.c(),
        (E = te()),
        (se = H("p")),
        (ye = je(ue)),
        (xe = te()),
        (Ce = H("div")),
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
        _(z, "class", (R = "option-letter " + n[5].first + " svelte-1ax8dgq")),
        _(j, "class", "svg-wrapper svelte-1ax8dgq"),
        _(i, "class", "option-option svelte-1ax8dgq"),
        _(
          T,
          "class",
          (K =
            "std-bkg std-icon option-selected " +
            n[5].second +
            " svelte-1ax8dgq")
        ),
        _(
          se,
          "class",
          (Ie = "option-letter " + n[5].second + " svelte-1ax8dgq")
        ),
        _(Ce, "class", "svg-wrapper svelte-1ax8dgq"),
        _(U, "class", "option-option svelte-1ax8dgq"),
        _(
          e,
          "class",
          "input-interface-wrapper std-flex-justify-start std-flex-align-end std-flex-nowrap svelte-1ax8dgq"
        );
    },
    m(O, D) {
      oe(O, e, D),
        ge && ge.m(e, null),
        B(e, t),
        B(e, i),
        B(i, s),
        B(i, v),
        k && k.m(i, null),
        B(i, m),
        B(i, z),
        B(z, F),
        B(i, G),
        B(i, j),
        B(e, P),
        B(e, U),
        B(U, T),
        B(U, V),
        A && A.m(U, null),
        B(U, E),
        B(U, se),
        B(se, ye),
        B(U, xe),
        B(U, Ce),
        ze || ((De = [Be(i, "click", n[9]), Be(U, "click", n[10])]), (ze = !0));
    },
    p(O, [D]) {
      O[1]
        ? ge
          ? ge.p(O, D)
          : ((ge = gt(O)), ge.c(), ge.m(e, t))
        : ge && (ge.d(1), (ge = null)),
        D & 32 &&
          p !==
            (p =
              "std-bkg std-icon option-selected " +
              O[5].first +
              " svelte-1ax8dgq") &&
          _(s, "class", p),
        S === (S = M(O)) && k
          ? k.p(O, D)
          : (k && k.d(1), (k = S && S(O)), k && (k.c(), k.m(i, m))),
        D & 4 && I !== (I = O[2].first + "") && Pe(F, I),
        D & 32 &&
          R !== (R = "option-letter " + O[5].first + " svelte-1ax8dgq") &&
          _(z, "class", R),
        D & 32 &&
          K !==
            (K =
              "std-bkg std-icon option-selected " +
              O[5].second +
              " svelte-1ax8dgq") &&
          _(T, "class", K),
        w === (w = C(O)) && A
          ? A.p(O, D)
          : (A && A.d(1), (A = w && w(O)), A && (A.c(), A.m(U, E))),
        D & 4 && ue !== (ue = O[2].second + "") && Pe(ye, ue),
        D & 32 &&
          Ie !== (Ie = "option-letter " + O[5].second + " svelte-1ax8dgq") &&
          _(se, "class", Ie);
    },
    i: de,
    o: de,
    d(O) {
      O && ne(e), ge && ge.d(), k && k.d(), A && A.d(), (ze = !1), He(De);
    },
  };
}
function er(n, e, t) {
  const i = Ve();
  let { name: s } = e,
    { label: p = "" } = e,
    { valueLabel: v = { first: "", second: "" } } = e;
  const m = null;
  let { req: z = !0 } = e,
    { inputValues: I } = e,
    F = { first: I.first, second: "" },
    R = { first: "selected", second: "" };
  const G = (U) => {
      U === 1
        ? (t(5, (R = { first: "selected", second: "" })),
          t(4, (F = { first: I.first, second: "" })))
        : (t(5, (R = { first: "", second: "selected" })),
          t(4, (F = { first: "", second: I.second }))),
        i("action", { option: U });
    },
    j = () => G(1),
    P = () => G(2);
  return (
    (n.$$set = (U) => {
      "name" in U && t(0, (s = U.name)),
        "label" in U && t(1, (p = U.label)),
        "valueLabel" in U && t(2, (v = U.valueLabel)),
        "req" in U && t(3, (z = U.req)),
        "inputValues" in U && t(8, (I = U.inputValues));
    }),
    [s, p, v, z, F, R, G, m, I, j, P]
  );
}
class vt extends qe {
  constructor(e) {
    super(),
      Se(this, e, er, $t, Ae, {
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
function mt(n, e, t) {
  const i = n.slice();
  return (i[11] = e[t]), (i[13] = t), i;
}
function tr(n) {
  let e;
  return {
    c() {
      (e = H("input")),
        _(e, "type", "number"),
        _(e, "maxlength", "3"),
        _(e, "class", "std-input hidden svelte-6hz7uh"),
        _(e, "id", "hidden-input"),
        _(e, "placeholder", ""),
        (e.value = n[5]);
    },
    m(t, i) {
      oe(t, e, i);
    },
    p(t, i) {
      i & 32 && e.value !== t[5] && (e.value = t[5]);
    },
    d(t) {
      t && ne(e);
    },
  };
}
function rr(n) {
  let e;
  return {
    c() {
      (e = H("input")),
        _(e, "type", "number"),
        _(e, "maxlength", "3"),
        _(e, "class", "std-input hidden svelte-6hz7uh"),
        _(e, "id", "hidden-input"),
        _(e, "placeholder", ""),
        (e.value = n[5]),
        _(e, "name", n[3]),
        (e.required = !0);
    },
    m(t, i) {
      oe(t, e, i);
    },
    p(t, i) {
      i & 32 && e.value !== t[5] && (e.value = t[5]),
        i & 8 && _(e, "name", t[3]);
    },
    d(t) {
      t && ne(e);
    },
  };
}
function wt(n) {
  let e,
    t = n[13] + n[0] + "",
    i,
    s,
    p,
    v;
  function m() {
    return n[10](n[13]);
  }
  return {
    c() {
      (e = H("p")),
        (i = je(t)),
        (s = te()),
        _(e, "class", "std-flex-row svelte-6hz7uh");
    },
    m(z, I) {
      oe(z, e, I), B(e, i), B(e, s), p || ((v = Be(e, "click", m)), (p = !0));
    },
    p(z, I) {
      (n = z), I & 1 && t !== (t = n[13] + n[0] + "") && Pe(i, t);
    },
    d(z) {
      z && ne(e), (p = !1), v();
    },
  };
}
function nr(n) {
  let e, t, i, s, p, v, m, z, I, F, R, G, j;
  function P(E, se) {
    return E[2] ? rr : tr;
  }
  let U = P(n),
    T = U(n),
    K = new Array(n[1]),
    V = [];
  for (let E = 0; E < K.length; E += 1) V[E] = wt(mt(n, K, E));
  return {
    c() {
      (e = H("div")), (t = H("div")), T.c(), (i = te()), (s = H("div"));
      for (let E = 0; E < V.length; E += 1) V[E].c();
      (v = te()),
        (m = H("p")),
        (z = je(n[4])),
        (F = te()),
        (R = H("div")),
        (R.innerHTML =
          '<svg viewBox="0 0 356 9" class="svelte-6hz7uh"><path d="M3 5.7072C50.1565 5.7072 97.3247 5.92723 144.48 5.64704C193.917 5.3533 243.309 3.75524 292.749 3.51136C312.837 3.41227 332.909 3 353 3" stroke="#5B7FFF" stroke-width="20" stroke-linecap="round"></path></svg>'),
        _(s, "class", (p = "age-dropdown " + n[6] + " svelte-6hz7uh")),
        _(m, "class", (I = "std-input currAge " + n[7] + " svelte-6hz7uh")),
        _(R, "class", "svg-wrapper svelte-6hz7uh"),
        _(t, "class", "input-wrapper svelte-6hz7uh"),
        _(e, "class", "main-wrapper svelte-6hz7uh");
    },
    m(E, se) {
      oe(E, e, se), B(e, t), T.m(t, null), B(t, i), B(t, s);
      for (let ue = 0; ue < V.length; ue += 1) V[ue].m(s, null);
      B(t, v),
        B(t, m),
        B(m, z),
        B(t, F),
        B(t, R),
        G || ((j = Be(m, "click", n[8])), (G = !0));
    },
    p(E, [se]) {
      if (
        (U === (U = P(E)) && T
          ? T.p(E, se)
          : (T.d(1), (T = U(E)), T && (T.c(), T.m(t, i))),
        se & 515)
      ) {
        K = new Array(E[1]);
        let ue;
        for (ue = 0; ue < K.length; ue += 1) {
          const ye = mt(E, K, ue);
          V[ue]
            ? V[ue].p(ye, se)
            : ((V[ue] = wt(ye)), V[ue].c(), V[ue].m(s, null));
        }
        for (; ue < V.length; ue += 1) V[ue].d(1);
        V.length = K.length;
      }
      se & 64 &&
        p !== (p = "age-dropdown " + E[6] + " svelte-6hz7uh") &&
        _(s, "class", p),
        se & 16 && Pe(z, E[4]),
        se & 128 &&
          I !== (I = "std-input currAge " + E[7] + " svelte-6hz7uh") &&
          _(m, "class", I);
    },
    i: de,
    o: de,
    d(E) {
      E && ne(e), T.d(), Bt(V, E), (G = !1), j();
    },
  };
}
function ir(n, e, t) {
  let { startAt: i = 0 } = e,
    { endAt: s = 0 } = e,
    { req: p = !0 } = e,
    { name: v } = e,
    m = "age",
    z = null,
    I = "",
    F = "";
  const R = () => {
      t(6, (I = "age-dropdown-display"));
    },
    G = (P) => {
      t(6, (I = " ")),
        t(5, (z = P)),
        t(7, (F = "selected")),
        t(4, (m = P.toString()));
    },
    j = (P) => G(P + i);
  return (
    (n.$$set = (P) => {
      "startAt" in P && t(0, (i = P.startAt)),
        "endAt" in P && t(1, (s = P.endAt)),
        "req" in P && t(2, (p = P.req)),
        "name" in P && t(3, (v = P.name));
    }),
    [i, s, p, v, m, z, I, F, R, G, j]
  );
}
class or extends qe {
  constructor(e) {
    super(), Se(this, e, ir, nr, Ae, { startAt: 0, endAt: 1, req: 2, name: 3 });
  }
}
function ar(n) {
  let e;
  return {
    c() {
      (e = H("input")),
        _(e, "type", n[0]),
        _(e, "maxlength", n[1]),
        _(e, "class", "std-input svelte-m5ayyr"),
        _(e, "placeholder", n[3]);
    },
    m(t, i) {
      oe(t, e, i);
    },
    p(t, i) {
      i & 1 && _(e, "type", t[0]),
        i & 2 && _(e, "maxlength", t[1]),
        i & 8 && _(e, "placeholder", t[3]);
    },
    d(t) {
      t && ne(e);
    },
  };
}
function sr(n) {
  let e;
  return {
    c() {
      (e = H("input")),
        _(e, "type", n[0]),
        _(e, "maxlength", n[1]),
        _(e, "class", "std-input svelte-m5ayyr"),
        _(e, "placeholder", n[3]),
        _(e, "name", n[4]),
        (e.required = !0);
    },
    m(t, i) {
      oe(t, e, i);
    },
    p(t, i) {
      i & 1 && _(e, "type", t[0]),
        i & 2 && _(e, "maxlength", t[1]),
        i & 8 && _(e, "placeholder", t[3]),
        i & 16 && _(e, "name", t[4]);
    },
    d(t) {
      t && ne(e);
    },
  };
}
function lr(n) {
  let e, t, i;
  function s(m, z) {
    return m[2] ? sr : ar;
  }
  let p = s(n),
    v = p(n);
  return {
    c() {
      (e = H("div")),
        v.c(),
        (t = te()),
        (i = H("div")),
        (i.innerHTML =
          '<svg viewBox="0 0 356 9"><path d="M3 5.7072C50.1565 5.7072 97.3247 5.92723 144.48 5.64704C193.917 5.3533 243.309 3.75524 292.749 3.51136C312.837 3.41227 332.909 3 353 3" stroke="#5B7FFF" stroke-width="5" stroke-linecap="round"></path></svg>'),
        _(i, "class", "svg-wrapper svelte-m5ayyr"),
        _(e, "class", "input-wrapper svelte-m5ayyr");
    },
    m(m, z) {
      oe(m, e, z), v.m(e, null), B(e, t), B(e, i);
    },
    p(m, [z]) {
      p === (p = s(m)) && v
        ? v.p(m, z)
        : (v.d(1), (v = p(m)), v && (v.c(), v.m(e, t)));
    },
    i: de,
    o: de,
    d(m) {
      m && ne(e), v.d();
    },
  };
}
function ur(n, e, t) {
  let { type: i = "text" } = e,
    { maxLength: s = 140 } = e,
    { req: p = !0 } = e,
    { placeholder: v = "" } = e,
    { name: m } = e;
  return (
    (n.$$set = (z) => {
      "type" in z && t(0, (i = z.type)),
        "maxLength" in z && t(1, (s = z.maxLength)),
        "req" in z && t(2, (p = z.req)),
        "placeholder" in z && t(3, (v = z.placeholder)),
        "name" in z && t(4, (m = z.name));
    }),
    [i, s, p, v, m]
  );
}
class Ue extends qe {
  constructor(e) {
    super(),
      Se(this, e, ur, lr, Ae, {
        type: 0,
        maxLength: 1,
        req: 2,
        placeholder: 3,
        name: 4,
      });
  }
}
function cr(n) {
  let e, t, i, s, p, v, m, z;
  return {
    c() {
      (e = H("div")),
        (t = H("button")),
        (i = H("p")),
        (s = je(n[0])),
        (p = te()),
        (v = H("div")),
        (v.innerHTML =
          '<svg viewBox="0 0 191 35" class="svelte-rfq1y2"><path d="M4 22C14.7653 21.8634 25.1907 20.1563 35.8958 19.5041C54.9562 18.3428 73.8543 17.0602 93.0115 17.0081C122.189 16.9288 150.937 17.427 180 18.6721" stroke="url(#paint0_linear_132_202)" stroke-width="7" stroke-linecap="round" fill="none"></path><path d="M164.688 4C171.006 9.97648 178.82 15.2879 186.002 20.1614C188.733 22.0144 181.609 22.9838 180.927 23.1282C174.088 24.5758 168.588 27.2683 162.58 30.7014" stroke="url(#paint1_linear_132_202)" stroke-width="7" stroke-linecap="round" fill="none"></path><defs><linearGradient id="paint0_linear_132_202" x1="4" y1="22" x2="242.5" y2="20" gradientUnits="userSpaceOnUse"><stop stop-color="#04FED1"></stop><stop offset="1" stop-color="#1400FF"></stop></linearGradient><linearGradient id="paint1_linear_132_202" x1="183.5" y1="19" x2="156.5" y2="18" gradientUnits="userSpaceOnUse"><stop stop-color="#04FED1"></stop><stop offset="1" stop-color="#0E5CEE"></stop></linearGradient></defs></svg>'),
        _(i, "class", "std-gradient-text svelte-rfq1y2"),
        _(t, "class", "std-button button svelte-rfq1y2"),
        _(t, "type", n[1]),
        _(v, "class", "svg-wrapper svelte-rfq1y2"),
        _(e, "class", "btn-wrapper svelte-rfq1y2");
    },
    m(I, F) {
      oe(I, e, F),
        B(e, t),
        B(t, i),
        B(i, s),
        B(e, p),
        B(e, v),
        m || ((z = Be(e, "click", n[3])), (m = !0));
    },
    p(I, [F]) {
      F & 1 && Pe(s, I[0]), F & 2 && _(t, "type", I[1]);
    },
    i: de,
    o: de,
    d(I) {
      I && ne(e), (m = !1), z();
    },
  };
}
function fr(n, e, t) {
  let { text: i = "" } = e,
    { type: s = "button" } = e;
  const p = Ve(),
    v = () => p("action");
  return (
    (n.$$set = (m) => {
      "text" in m && t(0, (i = m.text)), "type" in m && t(1, (s = m.type));
    }),
    [i, s, p, v]
  );
}
class dt extends qe {
  constructor(e) {
    super(), Se(this, e, fr, cr, Ae, { text: 0, type: 1 });
  }
}
function dr(n) {
  let e, t, i;
  return {
    c() {
      (e = H("div")),
        (e.innerHTML = `<span class="std-icon std-bkg button-icon svelte-14gr5tj"></span> 
  <button class="button std-button svelte-14gr5tj"><p class="std-gradient-text svelte-14gr5tj">Back</p></button>`),
        _(
          e,
          "class",
          "btn-wrapper std-flex-row std-flex-nowrap std-flex-justify-between std-flex-align-center svelte-14gr5tj"
        );
    },
    m(s, p) {
      oe(s, e, p), t || ((i = Be(e, "click", n[1])), (t = !0));
    },
    p: de,
    i: de,
    o: de,
    d(s) {
      s && ne(e), (t = !1), i();
    },
  };
}
function hr(n) {
  const e = Ve();
  return [e, () => e("action")];
}
class pr extends qe {
  constructor(e) {
    super(), Se(this, e, hr, dr, Ae, {});
  }
}
function gr(n) {
  let e, t, i, s;
  return {
    c() {
      (e = H("div")),
        (t = H("p")),
        (i = je(n[0])),
        _(
          t,
          "class",
          (s = "std-text " + n[2] + " " + n[1] + " " + n[3] + " svelte-1st4p0n")
        ),
        _(e, "class", "text-wrapper svelte-1st4p0n");
    },
    m(p, v) {
      oe(p, e, v), B(e, t), B(t, i);
    },
    p(p, [v]) {
      v & 1 && Pe(i, p[0]),
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
          _(t, "class", s);
    },
    i: de,
    o: de,
    d(p) {
      p && ne(e);
    },
  };
}
function vr(n, e, t) {
  let { text: i = "" } = e,
    { font: s = "" } = e,
    { align: p = "" } = e,
    { color: v = "" } = e;
  return (
    (n.$$set = (m) => {
      "text" in m && t(0, (i = m.text)),
        "font" in m && t(1, (s = m.font)),
        "align" in m && t(2, (p = m.align)),
        "color" in m && t(3, (v = m.color));
    }),
    [i, s, p, v]
  );
}
class ht extends qe {
  constructor(e) {
    super(), Se(this, e, vr, gr, Ae, { text: 0, font: 1, align: 2, color: 3 });
  }
}
function mr(n) {
  let e, t, i, s, p, v, m, z;
  return {
    c() {
      (e = H("div")),
        (t = H("button")),
        (i = H("p")),
        (s = je(n[0])),
        (p = te()),
        (v = H("div")),
        (v.innerHTML =
          '<svg viewBox="0 0 360 23" fill="none" class="svelte-aw7cmk"><path d="M5.05737 11.8052C15.8539 11.8052 26.6505 11.8052 37.447 11.8052C46.2264 11.8052 54.6199 14.5048 63.1682 14.6631C79.0741 14.9577 94.9942 13.8239 110.8 15.8275C123.986 17.499 140.758 18.3589 153.457 14.4514C168.671 9.77022 182.26 6.74168 198.442 6.14234C233.438 4.84623 268.69 6.08942 303.709 6.08942C314.311 6.08942 324.914 6.08942 335.516 6.08942C338.642 6.08942 341.221 7.8294 344.196 7.99469C347.577 8.18255 351.033 8.94733 354.675 8.94733" stroke="url(#paint0_linear_156_9)" stroke-width="10" stroke-linecap="round"></path><defs><linearGradient id="paint0_linear_156_9" x1="-22" y1="16.9998" x2="422" y2="5.99987" gradientUnits="userSpaceOnUse"><stop stop-color="#04FED1"></stop><stop offset="1" stop-color="#1400FF"></stop></linearGradient></defs></svg>'),
        _(i, "class", "std-gradient-text svelte-aw7cmk"),
        _(t, "class", "std-button button svelte-aw7cmk"),
        _(t, "type", n[1]),
        _(v, "class", "svg-wrapper svelte-aw7cmk"),
        _(e, "class", "btn-wrapper svelte-aw7cmk");
    },
    m(I, F) {
      oe(I, e, F),
        B(e, t),
        B(t, i),
        B(i, s),
        B(e, p),
        B(e, v),
        m || ((z = Be(e, "click", n[3])), (m = !0));
    },
    p(I, [F]) {
      F & 1 && Pe(s, I[0]), F & 2 && _(t, "type", I[1]);
    },
    i: de,
    o: de,
    d(I) {
      I && ne(e), (m = !1), z();
    },
  };
}
function wr(n, e, t) {
  let { text: i = "" } = e,
    { type: s = "button" } = e;
  const p = Ve(),
    v = () => p("action");
  return (
    (n.$$set = (m) => {
      "text" in m && t(0, (i = m.text)), "type" in m && t(1, (s = m.type));
    }),
    [i, s, p, v]
  );
}
class Mt extends qe {
  constructor(e) {
    super(), Se(this, e, wr, mr, Ae, { text: 0, type: 1 });
  }
}
function _r(n) {
  let e;
  return {
    c() {
      (e = H("input")),
        _(e, "type", "text"),
        _(e, "class", "hidden-input svelte-ez9gmy"),
        (e.value = n[5]),
        _(e, "name", n[2]);
    },
    m(t, i) {
      oe(t, e, i);
    },
    p(t, i) {
      i & 32 && e.value !== t[5] && (e.value = t[5]),
        i & 4 && _(e, "name", t[2]);
    },
    d(t) {
      t && ne(e);
    },
  };
}
function yr(n) {
  let e;
  return {
    c() {
      (e = H("input")),
        _(e, "type", "text"),
        _(e, "class", "hidden-input svelte-ez9gmy"),
        (e.value = n[5]),
        _(e, "name", n[2]),
        (e.required = !0);
    },
    m(t, i) {
      oe(t, e, i);
    },
    p(t, i) {
      i & 32 && e.value !== t[5] && (e.value = t[5]),
        i & 4 && _(e, "name", t[2]);
    },
    d(t) {
      t && ne(e);
    },
  };
}
function br(n) {
  let e, t, i, s, p, v, m, z, I, F, R, G, j, P, U;
  (m = new Mt({ props: { text: n[0] } })), m.$on("action", n[8]);
  function T(E, se) {
    return E[1] ? yr : _r;
  }
  let K = T(n),
    V = K(n);
  return {
    c() {
      (e = H("div")),
        (t = H("div")),
        (i = H("img")),
        (p = te()),
        (v = H("div")),
        ve(m.$$.fragment),
        (z = te()),
        (I = H("input")),
        (F = te()),
        V.c(),
        (R = te()),
        (G = H("canvas")),
        tt(i.src, (s = n[4])) || _(i, "src", s),
        _(i, "alt", n[3]),
        _(i, "class", "photo-preview svelte-ez9gmy"),
        _(t, "class", "image-wrapper svelte-ez9gmy"),
        _(v, "class", "button-wrapper svelte-ez9gmy"),
        _(I, "type", "file"),
        _(I, "id", "img-input"),
        _(I, "accept", "image/*"),
        _(I, "class", "idden-input"),
        _(I, "name", "original_image"),
        _(G, "id", "canvas"),
        _(G, "class", "hidden"),
        _(e, "class", "input-wrapper svelte-ez9gmy");
    },
    m(E, se) {
      oe(E, e, se),
        B(e, t),
        B(t, i),
        B(e, p),
        B(e, v),
        he(m, v, null),
        B(e, z),
        B(e, I),
        B(e, F),
        V.m(e, null),
        B(e, R),
        B(e, G),
        (j = !0),
        P || ((U = [Be(i, "load", n[7]), Be(I, "change", n[6])]), (P = !0));
    },
    p(E, [se]) {
      (!j || (se & 16 && !tt(i.src, (s = E[4])))) && _(i, "src", s),
        (!j || se & 8) && _(i, "alt", E[3]);
      const ue = {};
      se & 1 && (ue.text = E[0]),
        m.$set(ue),
        K === (K = T(E)) && V
          ? V.p(E, se)
          : (V.d(1), (V = K(E)), V && (V.c(), V.m(e, R)));
    },
    i(E) {
      j || (ee(m.$$.fragment, E), (j = !0));
    },
    o(E) {
      ae(m.$$.fragment, E), (j = !1);
    },
    d(E) {
      E && ne(e), pe(m), V.d(), (P = !1), He(U);
    },
  };
}
function kr(n, e, t) {
  const i = Ve();
  let { btnText: s = "" } = e,
    { defaultImgSource: p = "" } = e,
    { req: v = !0 } = e,
    { name: m } = e,
    { alt: z } = e,
    I = p,
    F = "",
    R,
    G;
  ft(() => {
    (R = document.getElementById("canvas")),
      (G = document.getElementById("img-input"));
  });
  const j = async (T) => {
      const K = URL.createObjectURL(T.target.files[0]);
      t(4, (I = K));
    },
    P = (T) => {
      const K = T.path[0].currentSrc,
        V = 400 / T.target.width;
      (R.width = 400), (R.height = T.target.height * V);
      const E = R.getContext("2d");
      E.drawImage(T.target, 0, 0, R.width, R.height);
      const se = E.canvas.toDataURL(T.target, "image/jpg");
      t(5, (F = se)), K.includes(p) || i("uploadDone");
    },
    U = () => {
      G.click();
    };
  return (
    (n.$$set = (T) => {
      "btnText" in T && t(0, (s = T.btnText)),
        "defaultImgSource" in T && t(9, (p = T.defaultImgSource)),
        "req" in T && t(1, (v = T.req)),
        "name" in T && t(2, (m = T.name)),
        "alt" in T && t(3, (z = T.alt));
    }),
    [s, v, m, z, I, F, j, P, U, p]
  );
}
class xr extends qe {
  constructor(e) {
    super(),
      Se(this, e, kr, br, Ae, {
        btnText: 0,
        defaultImgSource: 9,
        req: 1,
        name: 2,
        alt: 3,
      });
  }
}
function _t(n) {
  let e, t, i, s, p, v;
  return (
    (e = new ht({
      props: {
        text: "who?",
        font: "f-secondary",
        color: "c-primary",
        align: "left",
      },
    })),
    (i = new Ue({
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
          (t = te()),
          ve(i.$$.fragment),
          (s = te()),
          ve(p.$$.fragment);
      },
      m(m, z) {
        he(e, m, z),
          oe(m, t, z),
          he(i, m, z),
          oe(m, s, z),
          he(p, m, z),
          (v = !0);
      },
      i(m) {
        v ||
          (ee(e.$$.fragment, m),
          ee(i.$$.fragment, m),
          ee(p.$$.fragment, m),
          (v = !0));
      },
      o(m) {
        ae(e.$$.fragment, m),
          ae(i.$$.fragment, m),
          ae(p.$$.fragment, m),
          (v = !1);
      },
      d(m) {
        pe(e, m), m && ne(t), pe(i, m), m && ne(s), pe(p, m);
      },
    }
  );
}
function yt(n) {
  let e,
    t,
    i = !n[4] && bt(n);
  return {
    c() {
      (e = H("div")),
        i && i.c(),
        _(e, "class", "button-wrapper_fwd svelte-xesjdc");
    },
    m(s, p) {
      oe(s, e, p), i && i.m(e, null), (t = !0);
    },
    p(s, p) {
      s[4]
        ? i &&
          (Ge(),
          ae(i, 1, 1, () => {
            i = null;
          }),
          Je())
        : i
        ? (i.p(s, p), p & 16 && ee(i, 1))
        : ((i = bt(s)), i.c(), ee(i, 1), i.m(e, null));
    },
    i(s) {
      t || (ee(i), (t = !0));
    },
    o(s) {
      ae(i), (t = !1);
    },
    d(s) {
      s && ne(e), i && i.d();
    },
  };
}
function bt(n) {
  let e, t;
  return (
    (e = new dt({ props: { text: "Done" } })),
    e.$on("action", n[8]),
    {
      c() {
        ve(e.$$.fragment);
      },
      m(i, s) {
        he(e, i, s), (t = !0);
      },
      p: de,
      i(i) {
        t || (ee(e.$$.fragment, i), (t = !0));
      },
      o(i) {
        ae(e.$$.fragment, i), (t = !1);
      },
      d(i) {
        pe(e, i);
      },
    }
  );
}
function kt(n) {
  let e, t, i;
  return (
    (t = new dt({ props: { text: "Next" } })),
    t.$on("action", n[5]),
    {
      c() {
        (e = H("div")),
          ve(t.$$.fragment),
          _(e, "class", "button-wrapper_fwd svelte-xesjdc");
      },
      m(s, p) {
        oe(s, e, p), he(t, e, null), (i = !0);
      },
      p: de,
      i(s) {
        i || (ee(t.$$.fragment, s), (i = !0));
      },
      o(s) {
        ae(t.$$.fragment, s), (i = !1);
      },
      d(s) {
        s && ne(e), pe(t);
      },
    }
  );
}
function xt(n) {
  let e, t, i;
  return (
    (t = new pr({})),
    t.$on("action", n[6]),
    {
      c() {
        (e = H("div")),
          ve(t.$$.fragment),
          _(e, "class", "button-wrapper_bkwd svelte-xesjdc");
      },
      m(s, p) {
        oe(s, e, p), he(t, e, null), (i = !0);
      },
      p: de,
      i(s) {
        i || (ee(t.$$.fragment, s), (i = !0));
      },
      o(s) {
        ae(t.$$.fragment, s), (i = !1);
      },
      d(s) {
        s && ne(e), pe(t);
      },
    }
  );
}
function Cr(n) {
  let e,
    t,
    i,
    s,
    p,
    v,
    m,
    z,
    I,
    F,
    R,
    G,
    j,
    P,
    U,
    T,
    K,
    V,
    E,
    se,
    ue,
    ye,
    Ie,
    xe,
    Ce,
    ze,
    De,
    ge,
    M,
    S,
    k,
    C,
    w,
    A,
    O,
    D,
    Q;
  (s = new Ue({
    props: { placeholder: "first name", req: !0, name: "first_name" },
  })),
    (v = new Ue({
      props: { placeholder: "last name", req: !0, name: "last_name" },
    })),
    (z = new or({ props: { startAt: 4, endAt: 11, name: "age" } })),
    (F = new vt({
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
    (T = new Ue({
      props: { placeholder: "last name", req: !0, name: "guardian_last_name" },
    })),
    (V = new Ue({
      props: {
        placeholder: "phone number",
        type: "phone",
        name: "guardian_phone_number",
      },
    })),
    (se = new ht({
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
  let le = n[2] && _t();
  ge = new xr({
    props: {
      defaultImgSource: "images/icons/profile.png",
      btnText: n[4] ? "Registering..." : "submit photo",
      name: "photo",
      alt: "portrait or person",
    },
  });
  let y = n[0] === 2 && yt(n),
    r = n[0] < 2 && kt(n),
    a = n[0] > 0 && xt(n);
  return {
    c() {
      (e = H("div")),
        (t = H("form")),
        (i = H("div")),
        ve(s.$$.fragment),
        (p = te()),
        ve(v.$$.fragment),
        (m = te()),
        ve(z.$$.fragment),
        (I = te()),
        ve(F.$$.fragment),
        (G = te()),
        (j = H("div")),
        ve(P.$$.fragment),
        (U = te()),
        ve(T.$$.fragment),
        (K = te()),
        ve(V.$$.fragment),
        (E = te()),
        ve(se.$$.fragment),
        (ue = te()),
        ve(ye.$$.fragment),
        (Ie = te()),
        le && le.c(),
        (Ce = te()),
        (ze = H("div")),
        (De = H("div")),
        ve(ge.$$.fragment),
        (S = te()),
        y && y.c(),
        (k = te()),
        (C = H("div")),
        (w = te()),
        (A = H("div")),
        (O = te()),
        r && r.c(),
        (D = te()),
        a && a.c(),
        _(
          i,
          "class",
          (R =
            "form-section-wrapper initial " +
            n[1] +
            " " +
            n[3].first +
            " svelte-xesjdc")
        ),
        _(
          j,
          "class",
          (xe =
            "form-section-wrapper " +
            n[1] +
            " " +
            n[3].second +
            " svelte-xesjdc")
        ),
        _(De, "class", "input-image-wrapper svelte-xesjdc"),
        _(
          ze,
          "class",
          (M =
            "form-section-wrapper " +
            n[1] +
            " " +
            n[3].third +
            " svelte-xesjdc")
        ),
        _(t, "class", "registration-form std-flex-justify-start svelte-xesjdc"),
        _(t, "id", "form"),
        _(C, "class", "std-spacer-xl"),
        _(A, "class", "std-spacer-xl"),
        _(e, "class", "form-wrapper svelte-xesjdc");
    },
    m(o, u) {
      oe(o, e, u),
        B(e, t),
        B(t, i),
        he(s, i, null),
        B(i, p),
        he(v, i, null),
        B(i, m),
        he(z, i, null),
        B(i, I),
        he(F, i, null),
        B(t, G),
        B(t, j),
        he(P, j, null),
        B(j, U),
        he(T, j, null),
        B(j, K),
        he(V, j, null),
        B(j, E),
        he(se, j, null),
        B(j, ue),
        he(ye, j, null),
        B(j, Ie),
        le && le.m(j, null),
        B(t, Ce),
        B(t, ze),
        B(ze, De),
        he(ge, De, null),
        B(t, S),
        y && y.m(t, null),
        B(e, k),
        B(e, C),
        B(e, w),
        B(e, A),
        B(e, O),
        r && r.m(e, null),
        B(e, D),
        a && a.m(e, null),
        (Q = !0);
    },
    p(o, [u]) {
      (!Q ||
        (u & 10 &&
          R !==
            (R =
              "form-section-wrapper initial " +
              o[1] +
              " " +
              o[3].first +
              " svelte-xesjdc"))) &&
        _(i, "class", R),
        o[2]
          ? le
            ? u & 4 && ee(le, 1)
            : ((le = _t()), le.c(), ee(le, 1), le.m(j, null))
          : le &&
            (Ge(),
            ae(le, 1, 1, () => {
              le = null;
            }),
            Je()),
        (!Q ||
          (u & 10 &&
            xe !==
              (xe =
                "form-section-wrapper " +
                o[1] +
                " " +
                o[3].second +
                " svelte-xesjdc"))) &&
          _(j, "class", xe);
      const h = {};
      u & 16 && (h.btnText = o[4] ? "Registering..." : "submit photo"),
        ge.$set(h),
        (!Q ||
          (u & 10 &&
            M !==
              (M =
                "form-section-wrapper " +
                o[1] +
                " " +
                o[3].third +
                " svelte-xesjdc"))) &&
          _(ze, "class", M),
        o[0] === 2
          ? y
            ? (y.p(o, u), u & 1 && ee(y, 1))
            : ((y = yt(o)), y.c(), ee(y, 1), y.m(t, null))
          : y &&
            (Ge(),
            ae(y, 1, 1, () => {
              y = null;
            }),
            Je()),
        o[0] < 2
          ? r
            ? (r.p(o, u), u & 1 && ee(r, 1))
            : ((r = kt(o)), r.c(), ee(r, 1), r.m(e, D))
          : r &&
            (Ge(),
            ae(r, 1, 1, () => {
              r = null;
            }),
            Je()),
        o[0] > 0
          ? a
            ? (a.p(o, u), u & 1 && ee(a, 1))
            : ((a = xt(o)), a.c(), ee(a, 1), a.m(e, null))
          : a &&
            (Ge(),
            ae(a, 1, 1, () => {
              a = null;
            }),
            Je());
    },
    i(o) {
      Q ||
        (ee(s.$$.fragment, o),
        ee(v.$$.fragment, o),
        ee(z.$$.fragment, o),
        ee(F.$$.fragment, o),
        ee(P.$$.fragment, o),
        ee(T.$$.fragment, o),
        ee(V.$$.fragment, o),
        ee(se.$$.fragment, o),
        ee(ye.$$.fragment, o),
        ee(le),
        ee(ge.$$.fragment, o),
        ee(y),
        ee(r),
        ee(a),
        (Q = !0));
    },
    o(o) {
      ae(s.$$.fragment, o),
        ae(v.$$.fragment, o),
        ae(z.$$.fragment, o),
        ae(F.$$.fragment, o),
        ae(P.$$.fragment, o),
        ae(T.$$.fragment, o),
        ae(V.$$.fragment, o),
        ae(se.$$.fragment, o),
        ae(ye.$$.fragment, o),
        ae(le),
        ae(ge.$$.fragment, o),
        ae(y),
        ae(r),
        ae(a),
        (Q = !1);
    },
    d(o) {
      o && ne(e),
        pe(s),
        pe(v),
        pe(z),
        pe(F),
        pe(P),
        pe(T),
        pe(V),
        pe(se),
        pe(ye),
        le && le.d(),
        pe(ge),
        y && y.d(),
        r && r.d(),
        a && a.d();
    },
  };
}
function Ar(n, e, t) {
  const i = Ve();
  let { currentTitle: s = "child" } = e,
    p = 0,
    v = "",
    m = !0,
    z = { first: "display", second: "", third: "" },
    I,
    F;
  ft(() => {
    (F = document.getElementsByTagName("input")),
      document.getElementById("form");
  });
  const R = (T) => {
      switch (T) {
        case 0:
          t(9, (s = "child"));
          break;
        case 1:
          t(9, (s = "guardian"));
          break;
        case 2:
          t(9, (s = "child"));
          break;
      }
    },
    G = () => {
      switch ((R(p + 1), t(0, (p += 1)), t(1, (v = "swapfwd")), p)) {
        case 0:
          t(3, (z = { first: "display", second: "", third: "" }));
          break;
        case 1:
          t(3, (z = { first: "", second: "display", third: "" }));
          break;
        case 2:
          t(3, (z = { first: "", second: "", third: "display" }));
          break;
      }
    },
    j = () => {
      switch ((R(p - 1), t(0, (p -= 1)), t(1, (v = "swapbkwd")), p)) {
        case 0:
          t(3, (z = { first: "display", second: "", third: "" }));
          break;
        case 1:
          t(3, (z = { first: "", second: "display", third: "" }));
          break;
        case 2:
          t(3, (z = { first: "", second: "", third: "display" }));
          break;
      }
    },
    P = (T) => {
      const K = T.detail.option;
      console.log("event", K), K === 1 ? t(2, (m = !0)) : t(2, (m = !1));
    },
    U = async () => {
      t(4, (I = !0));
      const T = { first_name: "" };
      for (let V = 0; V < F.length; V++) {
        if (!F[V].value) {
          alert("Please make sure all fields are filled out!");
          return;
        }
        T[F[V].name] = F[V].value;
      }
      const K = await Wt("/kids/register", T);
      console.log(K),
        K.id &&
          (t(4, (I = !1)),
          (T.id = K.id),
          i("registration_success", T),
          t(9, (s = T.first_name)));
    };
  return (
    (n.$$set = (T) => {
      "currentTitle" in T && t(9, (s = T.currentTitle));
    }),
    [p, v, m, z, I, G, j, P, U, s]
  );
}
class Sr extends qe {
  constructor(e) {
    super(), Se(this, e, Ar, Cr, Ae, { currentTitle: 9 });
  }
}
function Ct(n) {
  let e,
    t = n[0].toUpperCase() + "",
    i;
  return {
    c() {
      (e = H("h1")), (i = je(t)), _(e, "class", "svelte-1j89jsw");
    },
    m(s, p) {
      oe(s, e, p), B(e, i);
    },
    p(s, p) {
      p & 1 && t !== (t = s[0].toUpperCase() + "") && Pe(i, t);
    },
    d(s) {
      s && ne(e);
    },
  };
}
function qr(n) {
  let e,
    t,
    i,
    s = n[0] && Ct(n);
  return {
    c() {
      (e = H("div")),
        s && s.c(),
        (t = te()),
        (i = H("div")),
        (i.innerHTML =
          '<svg viewBox="0 0 276 13" class="svelte-1j89jsw"><path d="M3 9.84148C49.0795 9.84148 95.0854 7.94865 141.138 6.68027C184.608 5.48299 228.464 6.59909 271.85 3.26175C279.217 2.69508 257.073 3.22499 249.685 3.22499C216.222 3.22499 182.76 3.22499 149.298 3.22499C115.269 3.22499 81.2036 3.04069 47.1834 3.96015C40.0086 4.15407 32.8123 4.40673 25.7166 5.57752C23.8476 5.88591 22.6842 6.03683 21.5262 7.19488" stroke="url(#paint0_linear_132_110)" stroke-width="5" stroke-linecap="round" fill="none"></path><defs><linearGradient id="paint0_linear_132_110" x1="22.5" y1="5.99992" x2="292.5" y2="14.4999" gradientUnits="userSpaceOnUse"><stop stop-color="#04FED1"></stop><stop offset="1" stop-color="#1400FF"></stop></linearGradient></defs></svg>'),
        _(i, "class", "svg-wrapper svelte-1j89jsw"),
        _(e, "class", "title-wrapper svelte-1j89jsw");
    },
    m(p, v) {
      oe(p, e, v), s && s.m(e, null), B(e, t), B(e, i);
    },
    p(p, [v]) {
      p[0]
        ? s
          ? s.p(p, v)
          : ((s = Ct(p)), s.c(), s.m(e, t))
        : s && (s.d(1), (s = null));
    },
    i: de,
    o: de,
    d(p) {
      p && ne(e), s && s.d();
    },
  };
}
function Mr(n, e, t) {
  let { title: i = "" } = e;
  return (
    (n.$$set = (s) => {
      "title" in s && t(0, (i = s.title));
    }),
    [i]
  );
}
class zr extends qe {
  constructor(e) {
    super(), Se(this, e, Mr, qr, Ae, { title: 0 });
  }
}
function Or(n) {
  let e, t, i;
  return {
    c() {
      (e = H("div")),
        (t = H("img")),
        tt(t.src, (i = n[1])) || _(t, "src", i),
        _(t, "alt", n[0]),
        _(t, "class", "std-img"),
        _(e, "class", "image-wrapper svelte-1kfmfwi");
    },
    m(s, p) {
      oe(s, e, p), B(e, t);
    },
    p(s, [p]) {
      p & 2 && !tt(t.src, (i = s[1])) && _(t, "src", i),
        p & 1 && _(t, "alt", s[0]);
    },
    i: de,
    o: de,
    d(s) {
      s && ne(e);
    },
  };
}
function Dr(n, e, t) {
  let { alt: i = "" } = e,
    { src: s = "" } = e;
  return (
    (n.$$set = (p) => {
      "alt" in p && t(0, (i = p.alt)), "src" in p && t(1, (s = p.src));
    }),
    [i, s]
  );
}
class Ir extends qe {
  constructor(e) {
    super(), Se(this, e, Dr, Or, Ae, { alt: 0, src: 1 });
  }
}
function jr(n) {
  return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default")
    ? n.default
    : n;
}
var zt = { exports: {} };
(function (n, e) {
  (function (t, i) {
    n.exports = i();
  })(self, function () {
    return (() => {
      var t = {
          192: (p, v) => {
            var m,
              z,
              I = (function () {
                var F = function (M, S) {
                  var k = M,
                    C = T[S],
                    w = null,
                    A = 0,
                    O = null,
                    D = [],
                    Q = {},
                    le = function (c, f) {
                      (w = (function (l) {
                        for (var g = new Array(l), b = 0; b < l; b += 1) {
                          g[b] = new Array(l);
                          for (var L = 0; L < l; L += 1) g[b][L] = null;
                        }
                        return g;
                      })((A = 4 * k + 17))),
                        y(0, 0),
                        y(A - 7, 0),
                        y(0, A - 7),
                        a(),
                        r(),
                        u(c, f),
                        k >= 7 && o(c),
                        O == null && (O = d(k, C, D)),
                        h(O, f);
                    },
                    y = function (c, f) {
                      for (var l = -1; l <= 7; l += 1)
                        if (!(c + l <= -1 || A <= c + l))
                          for (var g = -1; g <= 7; g += 1)
                            f + g <= -1 ||
                              A <= f + g ||
                              (w[c + l][f + g] =
                                (0 <= l && l <= 6 && (g == 0 || g == 6)) ||
                                (0 <= g && g <= 6 && (l == 0 || l == 6)) ||
                                (2 <= l && l <= 4 && 2 <= g && g <= 4));
                    },
                    r = function () {
                      for (var c = 8; c < A - 8; c += 1)
                        w[c][6] == null && (w[c][6] = c % 2 == 0);
                      for (var f = 8; f < A - 8; f += 1)
                        w[6][f] == null && (w[6][f] = f % 2 == 0);
                    },
                    a = function () {
                      for (
                        var c = K.getPatternPosition(k), f = 0;
                        f < c.length;
                        f += 1
                      )
                        for (var l = 0; l < c.length; l += 1) {
                          var g = c[f],
                            b = c[l];
                          if (w[g][b] == null)
                            for (var L = -2; L <= 2; L += 1)
                              for (var N = -2; N <= 2; N += 1)
                                w[g + L][b + N] =
                                  L == -2 ||
                                  L == 2 ||
                                  N == -2 ||
                                  N == 2 ||
                                  (L == 0 && N == 0);
                        }
                    },
                    o = function (c) {
                      for (
                        var f = K.getBCHTypeNumber(k), l = 0;
                        l < 18;
                        l += 1
                      ) {
                        var g = !c && ((f >> l) & 1) == 1;
                        w[Math.floor(l / 3)][(l % 3) + A - 8 - 3] = g;
                      }
                      for (l = 0; l < 18; l += 1)
                        (g = !c && ((f >> l) & 1) == 1),
                          (w[(l % 3) + A - 8 - 3][Math.floor(l / 3)] = g);
                    },
                    u = function (c, f) {
                      for (
                        var l = (C << 3) | f, g = K.getBCHTypeInfo(l), b = 0;
                        b < 15;
                        b += 1
                      ) {
                        var L = !c && ((g >> b) & 1) == 1;
                        b < 6
                          ? (w[b][8] = L)
                          : b < 8
                          ? (w[b + 1][8] = L)
                          : (w[A - 15 + b][8] = L);
                      }
                      for (b = 0; b < 15; b += 1)
                        (L = !c && ((g >> b) & 1) == 1),
                          b < 8
                            ? (w[8][A - b - 1] = L)
                            : b < 9
                            ? (w[8][15 - b - 1 + 1] = L)
                            : (w[8][15 - b - 1] = L);
                      w[A - 8][8] = !c;
                    },
                    h = function (c, f) {
                      for (
                        var l = -1,
                          g = A - 1,
                          b = 7,
                          L = 0,
                          N = K.getMaskFunction(f),
                          q = A - 1;
                        q > 0;
                        q -= 2
                      )
                        for (q == 6 && (q -= 1); ; ) {
                          for (var J = 0; J < 2; J += 1)
                            if (w[g][q - J] == null) {
                              var X = !1;
                              L < c.length && (X = ((c[L] >>> b) & 1) == 1),
                                N(g, q - J) && (X = !X),
                                (w[g][q - J] = X),
                                (b -= 1) == -1 && ((L += 1), (b = 7));
                            }
                          if ((g += l) < 0 || A <= g) {
                            (g -= l), (l = -l);
                            break;
                          }
                        }
                    },
                    d = function (c, f, l) {
                      for (
                        var g = se.getRSBlocks(c, f), b = ue(), L = 0;
                        L < l.length;
                        L += 1
                      ) {
                        var N = l[L];
                        b.put(N.getMode(), 4),
                          b.put(
                            N.getLength(),
                            K.getLengthInBits(N.getMode(), c)
                          ),
                          N.write(b);
                      }
                      var q = 0;
                      for (L = 0; L < g.length; L += 1) q += g[L].dataCount;
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
                      return (function (J, X) {
                        for (
                          var Z = 0,
                            ce = 0,
                            W = 0,
                            $ = new Array(X.length),
                            Y = new Array(X.length),
                            re = 0;
                          re < X.length;
                          re += 1
                        ) {
                          var Oe = X[re].dataCount,
                            me = X[re].totalCount - Oe;
                          (ce = Math.max(ce, Oe)),
                            (W = Math.max(W, me)),
                            ($[re] = new Array(Oe));
                          for (var ie = 0; ie < $[re].length; ie += 1)
                            $[re][ie] = 255 & J.getBuffer()[ie + Z];
                          Z += Oe;
                          var we = K.getErrorCorrectPolynomial(me),
                            fe = E($[re], we.getLength() - 1).mod(we);
                          for (
                            Y[re] = new Array(we.getLength() - 1), ie = 0;
                            ie < Y[re].length;
                            ie += 1
                          ) {
                            var _e = ie + fe.getLength() - Y[re].length;
                            Y[re][ie] = _e >= 0 ? fe.getAt(_e) : 0;
                          }
                        }
                        var be = 0;
                        for (ie = 0; ie < X.length; ie += 1)
                          be += X[ie].totalCount;
                        var ke = new Array(be),
                          Me = 0;
                        for (ie = 0; ie < ce; ie += 1)
                          for (re = 0; re < X.length; re += 1)
                            ie < $[re].length &&
                              ((ke[Me] = $[re][ie]), (Me += 1));
                        for (ie = 0; ie < W; ie += 1)
                          for (re = 0; re < X.length; re += 1)
                            ie < Y[re].length &&
                              ((ke[Me] = Y[re][ie]), (Me += 1));
                        return ke;
                      })(b, g);
                    };
                  (Q.addData = function (c, f) {
                    var l = null;
                    switch ((f = f || "Byte")) {
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
                        throw "mode:" + f;
                    }
                    D.push(l), (O = null);
                  }),
                    (Q.isDark = function (c, f) {
                      if (c < 0 || A <= c || f < 0 || A <= f) throw c + "," + f;
                      return w[c][f];
                    }),
                    (Q.getModuleCount = function () {
                      return A;
                    }),
                    (Q.make = function () {
                      if (k < 1) {
                        for (var c = 1; c < 40; c++) {
                          for (
                            var f = se.getRSBlocks(c, C), l = ue(), g = 0;
                            g < D.length;
                            g++
                          ) {
                            var b = D[g];
                            l.put(b.getMode(), 4),
                              l.put(
                                b.getLength(),
                                K.getLengthInBits(b.getMode(), c)
                              ),
                              b.write(l);
                          }
                          var L = 0;
                          for (g = 0; g < f.length; g++) L += f[g].dataCount;
                          if (l.getLengthInBits() <= 8 * L) break;
                        }
                        k = c;
                      }
                      le(
                        !1,
                        (function () {
                          for (var N = 0, q = 0, J = 0; J < 8; J += 1) {
                            le(!0, J);
                            var X = K.getLostPoint(Q);
                            (J == 0 || N > X) && ((N = X), (q = J));
                          }
                          return q;
                        })()
                      );
                    }),
                    (Q.createTableTag = function (c, f) {
                      c = c || 2;
                      var l = "";
                      (l += '<table style="'),
                        (l += " border-width: 0px; border-style: none;"),
                        (l += " border-collapse: collapse;"),
                        (l +=
                          " padding: 0px; margin: " +
                          (f = f === void 0 ? 4 * c : f) +
                          "px;"),
                        (l += '">'),
                        (l += "<tbody>");
                      for (var g = 0; g < Q.getModuleCount(); g += 1) {
                        l += "<tr>";
                        for (var b = 0; b < Q.getModuleCount(); b += 1)
                          (l += '<td style="'),
                            (l += " border-width: 0px; border-style: none;"),
                            (l += " border-collapse: collapse;"),
                            (l += " padding: 0px; margin: 0px;"),
                            (l += " width: " + c + "px;"),
                            (l += " height: " + c + "px;"),
                            (l += " background-color: "),
                            (l += Q.isDark(g, b) ? "#000000" : "#ffffff"),
                            (l += ";"),
                            (l += '"/>');
                        l += "</tr>";
                      }
                      return (l += "</tbody>") + "</table>";
                    }),
                    (Q.createSvgTag = function (c, f, l, g) {
                      var b = {};
                      typeof arguments[0] == "object" &&
                        ((c = (b = arguments[0]).cellSize),
                        (f = b.margin),
                        (l = b.alt),
                        (g = b.title)),
                        (c = c || 2),
                        (f = f === void 0 ? 4 * c : f),
                        ((l =
                          typeof l == "string" ? { text: l } : l || {}).text =
                          l.text || null),
                        (l.id = l.text ? l.id || "qrcode-description" : null),
                        ((g =
                          typeof g == "string" ? { text: g } : g || {}).text =
                          g.text || null),
                        (g.id = g.text ? g.id || "qrcode-title" : null);
                      var L,
                        N,
                        q,
                        J,
                        X = Q.getModuleCount() * c + 2 * f,
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
                            : ' width="' + X + 'px" height="' + X + 'px"',
                          Z += ' viewBox="0 0 ' + X + " " + X + '" ',
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
                          N = 0;
                        N < Q.getModuleCount();
                        N += 1
                      )
                        for (
                          q = N * c + f, L = 0;
                          L < Q.getModuleCount();
                          L += 1
                        )
                          Q.isDark(N, L) &&
                            (Z += "M" + (L * c + f) + "," + q + J);
                      return (
                        (Z += '" stroke="transparent" fill="black"/>') +
                        "</svg>"
                      );
                    }),
                    (Q.createDataURL = function (c, f) {
                      (c = c || 2), (f = f === void 0 ? 4 * c : f);
                      var l = Q.getModuleCount() * c + 2 * f,
                        g = f,
                        b = l - f;
                      return ge(l, l, function (L, N) {
                        if (g <= L && L < b && g <= N && N < b) {
                          var q = Math.floor((L - g) / c),
                            J = Math.floor((N - g) / c);
                          return Q.isDark(J, q) ? 0 : 1;
                        }
                        return 1;
                      });
                    }),
                    (Q.createImgTag = function (c, f, l) {
                      (c = c || 2), (f = f === void 0 ? 4 * c : f);
                      var g = Q.getModuleCount() * c + 2 * f,
                        b = "";
                      return (
                        (b += "<img"),
                        (b += ' src="'),
                        (b += Q.createDataURL(c, f)),
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
                    for (var f = "", l = 0; l < c.length; l += 1) {
                      var g = c.charAt(l);
                      switch (g) {
                        case "<":
                          f += "&lt;";
                          break;
                        case ">":
                          f += "&gt;";
                          break;
                        case "&":
                          f += "&amp;";
                          break;
                        case '"':
                          f += "&quot;";
                          break;
                        default:
                          f += g;
                      }
                    }
                    return f;
                  };
                  return (
                    (Q.createASCII = function (c, f) {
                      if ((c = c || 1) < 2)
                        return (function ($) {
                          $ = $ === void 0 ? 2 : $;
                          var Y,
                            re,
                            Oe,
                            me,
                            ie,
                            we = 1 * Q.getModuleCount() + 2 * $,
                            fe = $,
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
                          for (Y = 0; Y < we; Y += 2) {
                            for (
                              Oe = Math.floor((Y - fe) / 1),
                                me = Math.floor((Y + 1 - fe) / 1),
                                re = 0;
                              re < we;
                              re += 1
                            )
                              (ie = "\u2588"),
                                fe <= re &&
                                  re < _e &&
                                  fe <= Y &&
                                  Y < _e &&
                                  Q.isDark(Oe, Math.floor((re - fe) / 1)) &&
                                  (ie = " "),
                                fe <= re &&
                                re < _e &&
                                fe <= Y + 1 &&
                                Y + 1 < _e &&
                                Q.isDark(me, Math.floor((re - fe) / 1))
                                  ? (ie += " ")
                                  : (ie += "\u2588"),
                                (Me += $ < 1 && Y + 1 >= _e ? ke[ie] : be[ie]);
                            Me += `
`;
                          }
                          return we % 2 && $ > 0
                            ? Me.substring(0, Me.length - we - 1) +
                                Array(we + 1).join("\u2580")
                            : Me.substring(0, Me.length - 1);
                        })(f);
                      (c -= 1), (f = f === void 0 ? 2 * c : f);
                      var l,
                        g,
                        b,
                        L,
                        N = Q.getModuleCount() * c + 2 * f,
                        q = f,
                        J = N - f,
                        X = Array(c + 1).join("\u2588\u2588"),
                        Z = Array(c + 1).join("  "),
                        ce = "",
                        W = "";
                      for (l = 0; l < N; l += 1) {
                        for (
                          b = Math.floor((l - q) / c), W = "", g = 0;
                          g < N;
                          g += 1
                        )
                          (L = 1),
                            q <= g &&
                              g < J &&
                              q <= l &&
                              l < J &&
                              Q.isDark(b, Math.floor((g - q) / c)) &&
                              (L = 0),
                            (W += L ? X : Z);
                        for (b = 0; b < c; b += 1)
                          ce +=
                            W +
                            `
`;
                      }
                      return ce.substring(0, ce.length - 1);
                    }),
                    (Q.renderTo2dContext = function (c, f) {
                      f = f || 2;
                      for (var l = Q.getModuleCount(), g = 0; g < l; g++)
                        for (var b = 0; b < l; b++)
                          (c.fillStyle = Q.isDark(g, b) ? "black" : "white"),
                            c.fillRect(g * f, b * f, f, f);
                    }),
                    Q
                  );
                };
                (F.stringToBytes = (F.stringToBytesFuncs = {
                  default: function (M) {
                    for (var S = [], k = 0; k < M.length; k += 1) {
                      var C = M.charCodeAt(k);
                      S.push(255 & C);
                    }
                    return S;
                  },
                }).default),
                  (F.createStringToBytes = function (M, S) {
                    var k = (function () {
                        for (
                          var w = De(M),
                            A = function () {
                              var r = w.read();
                              if (r == -1) throw "eof";
                              return r;
                            },
                            O = 0,
                            D = {};
                          ;

                        ) {
                          var Q = w.read();
                          if (Q == -1) break;
                          var le = A(),
                            y = (A() << 8) | A();
                          (D[String.fromCharCode((Q << 8) | le)] = y), (O += 1);
                        }
                        if (O != S) throw O + " != " + S;
                        return D;
                      })(),
                      C = "?".charCodeAt(0);
                    return function (w) {
                      for (var A = [], O = 0; O < w.length; O += 1) {
                        var D = w.charCodeAt(O);
                        if (D < 128) A.push(D);
                        else {
                          var Q = k[w.charAt(O)];
                          typeof Q == "number"
                            ? (255 & Q) == Q
                              ? A.push(Q)
                              : (A.push(Q >>> 8), A.push(255 & Q))
                            : A.push(C);
                        }
                      }
                      return A;
                    };
                  });
                var R,
                  G,
                  j,
                  P,
                  U,
                  T = { L: 1, M: 0, Q: 3, H: 2 },
                  K =
                    ((R = [
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
                    (j = 7973),
                    (U = function (M) {
                      for (var S = 0; M != 0; ) (S += 1), (M >>>= 1);
                      return S;
                    }),
                    ((P = {}).getBCHTypeInfo = function (M) {
                      for (var S = M << 10; U(S) - U(G) >= 0; )
                        S ^= G << (U(S) - U(G));
                      return 21522 ^ ((M << 10) | S);
                    }),
                    (P.getBCHTypeNumber = function (M) {
                      for (var S = M << 12; U(S) - U(j) >= 0; )
                        S ^= j << (U(S) - U(j));
                      return (M << 12) | S;
                    }),
                    (P.getPatternPosition = function (M) {
                      return R[M - 1];
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
                      for (var S = E([1], 0), k = 0; k < M; k += 1)
                        S = S.multiply(E([1, V.gexp(k)], 0));
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
                            var A = 0, O = M.isDark(C, w), D = -1;
                            D <= 1;
                            D += 1
                          )
                            if (!(C + D < 0 || S <= C + D))
                              for (var Q = -1; Q <= 1; Q += 1)
                                w + Q < 0 ||
                                  S <= w + Q ||
                                  (D == 0 && Q == 0) ||
                                  (O == M.isDark(C + D, w + Q) && (A += 1));
                          A > 5 && (k += 3 + A - 5);
                        }
                      for (C = 0; C < S - 1; C += 1)
                        for (w = 0; w < S - 1; w += 1) {
                          var le = 0;
                          M.isDark(C, w) && (le += 1),
                            M.isDark(C + 1, w) && (le += 1),
                            M.isDark(C, w + 1) && (le += 1),
                            M.isDark(C + 1, w + 1) && (le += 1),
                            (le != 0 && le != 4) || (k += 3);
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
                function E(M, S) {
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
                          for (var D = 0; D < w.getLength(); D += 1)
                            A[O + D] ^= V.gexp(
                              V.glog(C.getAt(O)) + V.glog(w.getAt(D))
                            );
                        return E(A, 0);
                      },
                      mod: function (w) {
                        if (C.getLength() - w.getLength() < 0) return C;
                        for (
                          var A = V.glog(C.getAt(0)) - V.glog(w.getAt(0)),
                            O = new Array(C.getLength()),
                            D = 0;
                          D < C.getLength();
                          D += 1
                        )
                          O[D] = C.getAt(D);
                        for (D = 0; D < w.getLength(); D += 1)
                          O[D] ^= V.gexp(V.glog(w.getAt(D)) + A);
                        return E(O, 0).mod(w);
                      },
                    };
                  return C;
                }
                var se = (function () {
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
                          var A = (function (o, u) {
                            switch (u) {
                              case T.L:
                                return M[4 * (o - 1) + 0];
                              case T.M:
                                return M[4 * (o - 1) + 1];
                              case T.Q:
                                return M[4 * (o - 1) + 2];
                              case T.H:
                                return M[4 * (o - 1) + 3];
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
                            var O = A.length / 3, D = [], Q = 0;
                            Q < O;
                            Q += 1
                          )
                            for (
                              var le = A[3 * Q + 0],
                                y = A[3 * Q + 1],
                                r = A[3 * Q + 2],
                                a = 0;
                              a < le;
                              a += 1
                            )
                              D.push(S(y, r));
                          return D;
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
                          for (var O = S, D = 0; D + 2 < O.length; )
                            A.put(C(O.substring(D, D + 3)), 10), (D += 3);
                          D < O.length &&
                            (O.length - D == 1
                              ? A.put(C(O.substring(D, D + 1)), 4)
                              : O.length - D == 2 &&
                                A.put(C(O.substring(D, D + 2)), 7));
                        },
                      },
                      C = function (A) {
                        for (var O = 0, D = 0; D < A.length; D += 1)
                          O = 10 * O + w(A.charAt(D));
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
                    var S = F.stringToBytes(M);
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
                    var S = F.stringToBytesFuncs.SJIS;
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
                  ze = function () {
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
                            var D = S.charAt(k);
                            if (((k += 1), D == "=")) return (w = 0), -1;
                            D.match(/^\s$/) ||
                              ((C = (C << 6) | O(D.charCodeAt(0))), (w += 6));
                          }
                          var Q = (C >>> (w - 8)) & 255;
                          return (w -= 8), Q;
                        },
                      },
                      O = function (D) {
                        if (65 <= D && D <= 90) return D - 65;
                        if (97 <= D && D <= 122) return D - 97 + 26;
                        if (48 <= D && D <= 57) return D - 48 + 52;
                        if (D == 43) return 62;
                        if (D == 47) return 63;
                        throw "c:" + D;
                      };
                    return A;
                  },
                  ge = function (M, S, k) {
                    for (
                      var C = (function (y, r) {
                          var a = y,
                            o = r,
                            u = new Array(y * r),
                            h = {
                              setPixel: function (c, f, l) {
                                u[f * a + c] = l;
                              },
                              write: function (c) {
                                c.writeString("GIF87a"),
                                  c.writeShort(a),
                                  c.writeShort(o),
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
                                  c.writeShort(o),
                                  c.writeByte(0);
                                var f = d(2);
                                c.writeByte(2);
                                for (var l = 0; f.length - l > 255; )
                                  c.writeByte(255),
                                    c.writeBytes(f, l, 255),
                                    (l += 255);
                                c.writeByte(f.length - l),
                                  c.writeBytes(f, l, f.length - l),
                                  c.writeByte(0),
                                  c.writeString(";");
                              },
                            },
                            d = function (c) {
                              for (
                                var f = 1 << c,
                                  l = 1 + (1 << c),
                                  g = c + 1,
                                  b = x(),
                                  L = 0;
                                L < f;
                                L += 1
                              )
                                b.add(String.fromCharCode(L));
                              b.add(String.fromCharCode(f)),
                                b.add(String.fromCharCode(l));
                              var N,
                                q,
                                J,
                                X = ze(),
                                Z =
                                  ((N = X),
                                  (q = 0),
                                  (J = 0),
                                  {
                                    write: function (Y, re) {
                                      if (Y >>> re != 0) throw "length over";
                                      for (; q + re >= 8; )
                                        N.writeByte(255 & ((Y << q) | J)),
                                          (re -= 8 - q),
                                          (Y >>>= 8 - q),
                                          (J = 0),
                                          (q = 0);
                                      (J |= Y << q), (q += re);
                                    },
                                    flush: function () {
                                      q > 0 && N.writeByte(J);
                                    },
                                  });
                              Z.write(f, g);
                              var ce = 0,
                                W = String.fromCharCode(u[ce]);
                              for (ce += 1; ce < u.length; ) {
                                var $ = String.fromCharCode(u[ce]);
                                (ce += 1),
                                  b.contains(W + $)
                                    ? (W += $)
                                    : (Z.write(b.indexOf(W), g),
                                      b.size() < 4095 &&
                                        (b.size() == 1 << g && (g += 1),
                                        b.add(W + $)),
                                      (W = $));
                              }
                              return (
                                Z.write(b.indexOf(W), g),
                                Z.write(l, g),
                                Z.flush(),
                                X.toByteArray()
                              );
                            },
                            x = function () {
                              var c = {},
                                f = 0,
                                l = {
                                  add: function (g) {
                                    if (l.contains(g)) throw "dup key:" + g;
                                    (c[g] = f), (f += 1);
                                  },
                                  size: function () {
                                    return f;
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
                    var O = ze();
                    C.write(O);
                    for (
                      var D = (function () {
                          var y = 0,
                            r = 0,
                            a = 0,
                            o = "",
                            u = {},
                            h = function (x) {
                              o += String.fromCharCode(d(63 & x));
                            },
                            d = function (x) {
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
                                y = (y << 8) | (255 & x), r += 8, a += 1;
                                r >= 6;

                              )
                                h(y >>> (r - 6)), (r -= 6);
                            }),
                            (u.flush = function () {
                              if (
                                (r > 0 && (h(y << (6 - r)), (y = 0), (r = 0)),
                                a % 3 != 0)
                              )
                                for (var x = 3 - (a % 3), c = 0; c < x; c += 1)
                                  o += "=";
                            }),
                            (u.toString = function () {
                              return o;
                            }),
                            u
                          );
                        })(),
                        Q = O.toByteArray(),
                        le = 0;
                      le < Q.length;
                      le += 1
                    )
                      D.writeByte(Q[le]);
                    return D.flush(), "data:image/gif;base64," + D;
                  };
                return F;
              })();
            (I.stringToBytesFuncs["UTF-8"] = function (F) {
              return (function (R) {
                for (var G = [], j = 0; j < R.length; j++) {
                  var P = R.charCodeAt(j);
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
                    : (j++,
                      (P =
                        65536 +
                        (((1023 & P) << 10) | (1023 & R.charCodeAt(j)))),
                      G.push(
                        240 | (P >> 18),
                        128 | ((P >> 12) & 63),
                        128 | ((P >> 6) & 63),
                        128 | (63 & P)
                      ));
                }
                return G;
              })(F);
            }),
              (z =
                typeof (m = function () {
                  return I;
                }) == "function"
                  ? m.apply(v, [])
                  : m) === void 0 || (p.exports = z);
          },
          676: (p, v, m) => {
            m.d(v, { default: () => le });
            var z = function () {
                return (z =
                  Object.assign ||
                  function (y) {
                    for (var r, a = 1, o = arguments.length; a < o; a++)
                      for (var u in (r = arguments[a]))
                        Object.prototype.hasOwnProperty.call(r, u) &&
                          (y[u] = r[u]);
                    return y;
                  }).apply(this, arguments);
              },
              I = function () {
                for (var y = 0, r = 0, a = arguments.length; r < a; r++)
                  y += arguments[r].length;
                var o = Array(y),
                  u = 0;
                for (r = 0; r < a; r++)
                  for (
                    var h = arguments[r], d = 0, x = h.length;
                    d < x;
                    d++, u++
                  )
                    o[u] = h[d];
                return o;
              },
              F = function (y) {
                return !!y && typeof y == "object" && !Array.isArray(y);
              };
            function R(y) {
              for (var r = [], a = 1; a < arguments.length; a++)
                r[a - 1] = arguments[a];
              if (!r.length) return y;
              var o = r.shift();
              return o !== void 0 && F(y) && F(o)
                ? ((y = z({}, y)),
                  Object.keys(o).forEach(function (u) {
                    var h = y[u],
                      d = o[u];
                    Array.isArray(h) && Array.isArray(d)
                      ? (y[u] = d)
                      : F(h) && F(d)
                      ? (y[u] = R(Object.assign({}, h), d))
                      : (y[u] = d);
                  }),
                  R.apply(void 0, I([y], r)))
                : y;
            }
            function G(y, r) {
              var a = document.createElement("a");
              (a.download = r),
                (a.href = y),
                document.body.appendChild(a),
                a.click(),
                document.body.removeChild(a);
            }
            function j(y) {
              return (
                (r = this),
                (a = void 0),
                (u = function () {
                  return (function (h, d) {
                    var x,
                      c,
                      f,
                      l,
                      g = {
                        label: 0,
                        sent: function () {
                          if (1 & f[0]) throw f[1];
                          return f[1];
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
                    function b(L) {
                      return function (N) {
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
                                  (f =
                                    2 & q[0]
                                      ? c.return
                                      : q[0]
                                      ? c.throw ||
                                        ((f = c.return) && f.call(c), 0)
                                      : c.next) &&
                                  !(f = f.call(c, q[1])).done)
                              )
                                return f;
                              switch (
                                ((c = 0), f && (q = [2 & q[0], f.value]), q[0])
                              ) {
                                case 0:
                                case 1:
                                  f = q;
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
                                      (f =
                                        (f = g.trys).length > 0 &&
                                        f[f.length - 1]) ||
                                      (q[0] !== 6 && q[0] !== 2)
                                    )
                                  ) {
                                    g = 0;
                                    continue;
                                  }
                                  if (
                                    q[0] === 3 &&
                                    (!f || (q[1] > f[0] && q[1] < f[3]))
                                  ) {
                                    g.label = q[1];
                                    break;
                                  }
                                  if (q[0] === 6 && g.label < f[1]) {
                                    (g.label = f[1]), (f = q);
                                    break;
                                  }
                                  if (f && g.label < f[2]) {
                                    (g.label = f[2]), g.ops.push(q);
                                    break;
                                  }
                                  f[2] && g.ops.pop(), g.trys.pop();
                                  continue;
                              }
                              q = d.call(h, g);
                            } catch (J) {
                              (q = [6, J]), (c = 0);
                            } finally {
                              x = f = 0;
                            }
                          if (5 & q[0]) throw q[1];
                          return { value: q[0] ? q[1] : void 0, done: !0 };
                        })([L, N]);
                      };
                    }
                  })(this, function (h) {
                    return [
                      2,
                      new Promise(function (d) {
                        var x = new XMLHttpRequest();
                        (x.onload = function () {
                          var c = new FileReader();
                          (c.onloadend = function () {
                            d(c.result);
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
                new ((o = void 0) || (o = Promise))(function (h, d) {
                  function x(l) {
                    try {
                      f(u.next(l));
                    } catch (g) {
                      d(g);
                    }
                  }
                  function c(l) {
                    try {
                      f(u.throw(l));
                    } catch (g) {
                      d(g);
                    }
                  }
                  function f(l) {
                    var g;
                    l.done
                      ? h(l.value)
                      : ((g = l.value),
                        g instanceof o
                          ? g
                          : new o(function (b) {
                              b(g);
                            })).then(x, c);
                  }
                  f((u = u.apply(r, a || [])).next());
                })
              );
              var r, a, o, u;
            }
            const P = { L: 0.07, M: 0.15, Q: 0.25, H: 0.3 };
            var U = function () {
              return (U =
                Object.assign ||
                function (y) {
                  for (var r, a = 1, o = arguments.length; a < o; a++)
                    for (var u in (r = arguments[a]))
                      Object.prototype.hasOwnProperty.call(r, u) &&
                        (y[u] = r[u]);
                  return y;
                }).apply(this, arguments);
            };
            const T = (function () {
              function y(r) {
                var a = r.svg,
                  o = r.type;
                (this._svg = a), (this._type = o);
              }
              return (
                (y.prototype.draw = function (r, a, o, u) {
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
                  h.call(this, { x: r, y: a, size: o, getNeighbor: u });
                }),
                (y.prototype._rotateFigure = function (r) {
                  var a,
                    o = r.x,
                    u = r.y,
                    h = r.size,
                    d = r.rotation,
                    x = d === void 0 ? 0 : d,
                    c = o + h / 2,
                    f = u + h / 2;
                  (0, r.draw)(),
                    (a = this._element) === null ||
                      a === void 0 ||
                      a.setAttribute(
                        "transform",
                        "rotate(" +
                          (180 * x) / Math.PI +
                          "," +
                          c +
                          "," +
                          f +
                          ")"
                      );
                }),
                (y.prototype._basicDot = function (r) {
                  var a = this,
                    o = r.size,
                    u = r.x,
                    h = r.y;
                  this._rotateFigure(
                    U(U({}, r), {
                      draw: function () {
                        (a._element = document.createElementNS(
                          "http://www.w3.org/2000/svg",
                          "circle"
                        )),
                          a._element.setAttribute("cx", String(u + o / 2)),
                          a._element.setAttribute("cy", String(h + o / 2)),
                          a._element.setAttribute("r", String(o / 2));
                      },
                    })
                  );
                }),
                (y.prototype._basicSquare = function (r) {
                  var a = this,
                    o = r.size,
                    u = r.x,
                    h = r.y;
                  this._rotateFigure(
                    U(U({}, r), {
                      draw: function () {
                        (a._element = document.createElementNS(
                          "http://www.w3.org/2000/svg",
                          "rect"
                        )),
                          a._element.setAttribute("x", String(u)),
                          a._element.setAttribute("y", String(h)),
                          a._element.setAttribute("width", String(o)),
                          a._element.setAttribute("height", String(o));
                      },
                    })
                  );
                }),
                (y.prototype._basicSideRounded = function (r) {
                  var a = this,
                    o = r.size,
                    u = r.x,
                    h = r.y;
                  this._rotateFigure(
                    U(U({}, r), {
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
                              o +
                              "h " +
                              o / 2 +
                              "a " +
                              o / 2 +
                              " " +
                              o / 2 +
                              ", 0, 0, 0, 0 " +
                              -o
                          );
                      },
                    })
                  );
                }),
                (y.prototype._basicCornerRounded = function (r) {
                  var a = this,
                    o = r.size,
                    u = r.x,
                    h = r.y;
                  this._rotateFigure(
                    U(U({}, r), {
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
                              o +
                              "h " +
                              o +
                              "v " +
                              -o / 2 +
                              "a " +
                              o / 2 +
                              " " +
                              o / 2 +
                              ", 0, 0, 0, " +
                              -o / 2 +
                              " " +
                              -o / 2
                          );
                      },
                    })
                  );
                }),
                (y.prototype._basicCornerExtraRounded = function (r) {
                  var a = this,
                    o = r.size,
                    u = r.x,
                    h = r.y;
                  this._rotateFigure(
                    U(U({}, r), {
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
                              o +
                              "h " +
                              o +
                              "a " +
                              o +
                              " " +
                              o +
                              ", 0, 0, 0, " +
                              -o +
                              " " +
                              -o
                          );
                      },
                    })
                  );
                }),
                (y.prototype._basicCornersRounded = function (r) {
                  var a = this,
                    o = r.size,
                    u = r.x,
                    h = r.y;
                  this._rotateFigure(
                    U(U({}, r), {
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
                              o / 2 +
                              "a " +
                              o / 2 +
                              " " +
                              o / 2 +
                              ", 0, 0, 0, " +
                              o / 2 +
                              " " +
                              o / 2 +
                              "h " +
                              o / 2 +
                              "v " +
                              -o / 2 +
                              "a " +
                              o / 2 +
                              " " +
                              o / 2 +
                              ", 0, 0, 0, " +
                              -o / 2 +
                              " " +
                              -o / 2
                          );
                      },
                    })
                  );
                }),
                (y.prototype._drawDot = function (r) {
                  var a = r.x,
                    o = r.y,
                    u = r.size;
                  this._basicDot({ x: a, y: o, size: u, rotation: 0 });
                }),
                (y.prototype._drawSquare = function (r) {
                  var a = r.x,
                    o = r.y,
                    u = r.size;
                  this._basicSquare({ x: a, y: o, size: u, rotation: 0 });
                }),
                (y.prototype._drawRounded = function (r) {
                  var a = r.x,
                    o = r.y,
                    u = r.size,
                    h = r.getNeighbor,
                    d = h ? +h(-1, 0) : 0,
                    x = h ? +h(1, 0) : 0,
                    c = h ? +h(0, -1) : 0,
                    f = h ? +h(0, 1) : 0,
                    l = d + x + c + f;
                  if (l !== 0)
                    if (l > 2 || (d && x) || (c && f))
                      this._basicSquare({ x: a, y: o, size: u, rotation: 0 });
                    else {
                      if (l === 2) {
                        var g = 0;
                        return (
                          d && c
                            ? (g = Math.PI / 2)
                            : c && x
                            ? (g = Math.PI)
                            : x && f && (g = -Math.PI / 2),
                          void this._basicCornerRounded({
                            x: a,
                            y: o,
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
                            : f && (g = -Math.PI / 2),
                          void this._basicSideRounded({
                            x: a,
                            y: o,
                            size: u,
                            rotation: g,
                          })
                        );
                    }
                  else this._basicDot({ x: a, y: o, size: u, rotation: 0 });
                }),
                (y.prototype._drawExtraRounded = function (r) {
                  var a = r.x,
                    o = r.y,
                    u = r.size,
                    h = r.getNeighbor,
                    d = h ? +h(-1, 0) : 0,
                    x = h ? +h(1, 0) : 0,
                    c = h ? +h(0, -1) : 0,
                    f = h ? +h(0, 1) : 0,
                    l = d + x + c + f;
                  if (l !== 0)
                    if (l > 2 || (d && x) || (c && f))
                      this._basicSquare({ x: a, y: o, size: u, rotation: 0 });
                    else {
                      if (l === 2) {
                        var g = 0;
                        return (
                          d && c
                            ? (g = Math.PI / 2)
                            : c && x
                            ? (g = Math.PI)
                            : x && f && (g = -Math.PI / 2),
                          void this._basicCornerExtraRounded({
                            x: a,
                            y: o,
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
                            : f && (g = -Math.PI / 2),
                          void this._basicSideRounded({
                            x: a,
                            y: o,
                            size: u,
                            rotation: g,
                          })
                        );
                    }
                  else this._basicDot({ x: a, y: o, size: u, rotation: 0 });
                }),
                (y.prototype._drawClassy = function (r) {
                  var a = r.x,
                    o = r.y,
                    u = r.size,
                    h = r.getNeighbor,
                    d = h ? +h(-1, 0) : 0,
                    x = h ? +h(1, 0) : 0,
                    c = h ? +h(0, -1) : 0,
                    f = h ? +h(0, 1) : 0;
                  d + x + c + f !== 0
                    ? d || c
                      ? x || f
                        ? this._basicSquare({
                            x: a,
                            y: o,
                            size: u,
                            rotation: 0,
                          })
                        : this._basicCornerRounded({
                            x: a,
                            y: o,
                            size: u,
                            rotation: Math.PI / 2,
                          })
                      : this._basicCornerRounded({
                          x: a,
                          y: o,
                          size: u,
                          rotation: -Math.PI / 2,
                        })
                    : this._basicCornersRounded({
                        x: a,
                        y: o,
                        size: u,
                        rotation: Math.PI / 2,
                      });
                }),
                (y.prototype._drawClassyRounded = function (r) {
                  var a = r.x,
                    o = r.y,
                    u = r.size,
                    h = r.getNeighbor,
                    d = h ? +h(-1, 0) : 0,
                    x = h ? +h(1, 0) : 0,
                    c = h ? +h(0, -1) : 0,
                    f = h ? +h(0, 1) : 0;
                  d + x + c + f !== 0
                    ? d || c
                      ? x || f
                        ? this._basicSquare({
                            x: a,
                            y: o,
                            size: u,
                            rotation: 0,
                          })
                        : this._basicCornerExtraRounded({
                            x: a,
                            y: o,
                            size: u,
                            rotation: Math.PI / 2,
                          })
                      : this._basicCornerExtraRounded({
                          x: a,
                          y: o,
                          size: u,
                          rotation: -Math.PI / 2,
                        })
                    : this._basicCornersRounded({
                        x: a,
                        y: o,
                        size: u,
                        rotation: Math.PI / 2,
                      });
                }),
                y
              );
            })();
            var K = function () {
              return (K =
                Object.assign ||
                function (y) {
                  for (var r, a = 1, o = arguments.length; a < o; a++)
                    for (var u in (r = arguments[a]))
                      Object.prototype.hasOwnProperty.call(r, u) &&
                        (y[u] = r[u]);
                  return y;
                }).apply(this, arguments);
            };
            const V = (function () {
              function y(r) {
                var a = r.svg,
                  o = r.type;
                (this._svg = a), (this._type = o);
              }
              return (
                (y.prototype.draw = function (r, a, o, u) {
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
                  h.call(this, { x: r, y: a, size: o, rotation: u });
                }),
                (y.prototype._rotateFigure = function (r) {
                  var a,
                    o = r.x,
                    u = r.y,
                    h = r.size,
                    d = r.rotation,
                    x = d === void 0 ? 0 : d,
                    c = o + h / 2,
                    f = u + h / 2;
                  (0, r.draw)(),
                    (a = this._element) === null ||
                      a === void 0 ||
                      a.setAttribute(
                        "transform",
                        "rotate(" +
                          (180 * x) / Math.PI +
                          "," +
                          c +
                          "," +
                          f +
                          ")"
                      );
                }),
                (y.prototype._basicDot = function (r) {
                  var a = this,
                    o = r.size,
                    u = r.x,
                    h = r.y,
                    d = o / 7;
                  this._rotateFigure(
                    K(K({}, r), {
                      draw: function () {
                        (a._element = document.createElementNS(
                          "http://www.w3.org/2000/svg",
                          "path"
                        )),
                          a._element.setAttribute("clip-rule", "evenodd"),
                          a._element.setAttribute(
                            "d",
                            "M " +
                              (u + o / 2) +
                              " " +
                              h +
                              "a " +
                              o / 2 +
                              " " +
                              o / 2 +
                              " 0 1 0 0.1 0zm 0 " +
                              d +
                              "a " +
                              (o / 2 - d) +
                              " " +
                              (o / 2 - d) +
                              " 0 1 1 -0.1 0Z"
                          );
                      },
                    })
                  );
                }),
                (y.prototype._basicSquare = function (r) {
                  var a = this,
                    o = r.size,
                    u = r.x,
                    h = r.y,
                    d = o / 7;
                  this._rotateFigure(
                    K(K({}, r), {
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
                              o +
                              "h " +
                              o +
                              "v " +
                              -o +
                              "zM " +
                              (u + d) +
                              " " +
                              (h + d) +
                              "h " +
                              (o - 2 * d) +
                              "v " +
                              (o - 2 * d) +
                              "h " +
                              (2 * d - o) +
                              "z"
                          );
                      },
                    })
                  );
                }),
                (y.prototype._basicExtraRounded = function (r) {
                  var a = this,
                    o = r.size,
                    u = r.x,
                    h = r.y,
                    d = o / 7;
                  this._rotateFigure(
                    K(K({}, r), {
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
                              (h + 2.5 * d) +
                              "v " +
                              2 * d +
                              "a " +
                              2.5 * d +
                              " " +
                              2.5 * d +
                              ", 0, 0, 0, " +
                              2.5 * d +
                              " " +
                              2.5 * d +
                              "h " +
                              2 * d +
                              "a " +
                              2.5 * d +
                              " " +
                              2.5 * d +
                              ", 0, 0, 0, " +
                              2.5 * d +
                              " " +
                              2.5 * -d +
                              "v " +
                              -2 * d +
                              "a " +
                              2.5 * d +
                              " " +
                              2.5 * d +
                              ", 0, 0, 0, " +
                              2.5 * -d +
                              " " +
                              2.5 * -d +
                              "h " +
                              -2 * d +
                              "a " +
                              2.5 * d +
                              " " +
                              2.5 * d +
                              ", 0, 0, 0, " +
                              2.5 * -d +
                              " " +
                              2.5 * d +
                              "M " +
                              (u + 2.5 * d) +
                              " " +
                              (h + d) +
                              "h " +
                              2 * d +
                              "a " +
                              1.5 * d +
                              " " +
                              1.5 * d +
                              ", 0, 0, 1, " +
                              1.5 * d +
                              " " +
                              1.5 * d +
                              "v " +
                              2 * d +
                              "a " +
                              1.5 * d +
                              " " +
                              1.5 * d +
                              ", 0, 0, 1, " +
                              1.5 * -d +
                              " " +
                              1.5 * d +
                              "h " +
                              -2 * d +
                              "a " +
                              1.5 * d +
                              " " +
                              1.5 * d +
                              ", 0, 0, 1, " +
                              1.5 * -d +
                              " " +
                              1.5 * -d +
                              "v " +
                              -2 * d +
                              "a " +
                              1.5 * d +
                              " " +
                              1.5 * d +
                              ", 0, 0, 1, " +
                              1.5 * d +
                              " " +
                              1.5 * -d
                          );
                      },
                    })
                  );
                }),
                (y.prototype._drawDot = function (r) {
                  var a = r.x,
                    o = r.y,
                    u = r.size,
                    h = r.rotation;
                  this._basicDot({ x: a, y: o, size: u, rotation: h });
                }),
                (y.prototype._drawSquare = function (r) {
                  var a = r.x,
                    o = r.y,
                    u = r.size,
                    h = r.rotation;
                  this._basicSquare({ x: a, y: o, size: u, rotation: h });
                }),
                (y.prototype._drawExtraRounded = function (r) {
                  var a = r.x,
                    o = r.y,
                    u = r.size,
                    h = r.rotation;
                  this._basicExtraRounded({ x: a, y: o, size: u, rotation: h });
                }),
                y
              );
            })();
            var E = function () {
              return (E =
                Object.assign ||
                function (y) {
                  for (var r, a = 1, o = arguments.length; a < o; a++)
                    for (var u in (r = arguments[a]))
                      Object.prototype.hasOwnProperty.call(r, u) &&
                        (y[u] = r[u]);
                  return y;
                }).apply(this, arguments);
            };
            const se = (function () {
                function y(r) {
                  var a = r.svg,
                    o = r.type;
                  (this._svg = a), (this._type = o);
                }
                return (
                  (y.prototype.draw = function (r, a, o, u) {
                    var h;
                    switch (this._type) {
                      case "square":
                        h = this._drawSquare;
                        break;
                      case "dot":
                      default:
                        h = this._drawDot;
                    }
                    h.call(this, { x: r, y: a, size: o, rotation: u });
                  }),
                  (y.prototype._rotateFigure = function (r) {
                    var a,
                      o = r.x,
                      u = r.y,
                      h = r.size,
                      d = r.rotation,
                      x = d === void 0 ? 0 : d,
                      c = o + h / 2,
                      f = u + h / 2;
                    (0, r.draw)(),
                      (a = this._element) === null ||
                        a === void 0 ||
                        a.setAttribute(
                          "transform",
                          "rotate(" +
                            (180 * x) / Math.PI +
                            "," +
                            c +
                            "," +
                            f +
                            ")"
                        );
                  }),
                  (y.prototype._basicDot = function (r) {
                    var a = this,
                      o = r.size,
                      u = r.x,
                      h = r.y;
                    this._rotateFigure(
                      E(E({}, r), {
                        draw: function () {
                          (a._element = document.createElementNS(
                            "http://www.w3.org/2000/svg",
                            "circle"
                          )),
                            a._element.setAttribute("cx", String(u + o / 2)),
                            a._element.setAttribute("cy", String(h + o / 2)),
                            a._element.setAttribute("r", String(o / 2));
                        },
                      })
                    );
                  }),
                  (y.prototype._basicSquare = function (r) {
                    var a = this,
                      o = r.size,
                      u = r.x,
                      h = r.y;
                    this._rotateFigure(
                      E(E({}, r), {
                        draw: function () {
                          (a._element = document.createElementNS(
                            "http://www.w3.org/2000/svg",
                            "rect"
                          )),
                            a._element.setAttribute("x", String(u)),
                            a._element.setAttribute("y", String(h)),
                            a._element.setAttribute("width", String(o)),
                            a._element.setAttribute("height", String(o));
                        },
                      })
                    );
                  }),
                  (y.prototype._drawDot = function (r) {
                    var a = r.x,
                      o = r.y,
                      u = r.size,
                      h = r.rotation;
                    this._basicDot({ x: a, y: o, size: u, rotation: h });
                  }),
                  (y.prototype._drawSquare = function (r) {
                    var a = r.x,
                      o = r.y,
                      u = r.size,
                      h = r.rotation;
                    this._basicSquare({ x: a, y: o, size: u, rotation: h });
                  }),
                  y
                );
              })(),
              ue = "circle";
            var ye = function (y, r, a, o) {
                return new (a || (a = Promise))(function (u, h) {
                  function d(f) {
                    try {
                      c(o.next(f));
                    } catch (l) {
                      h(l);
                    }
                  }
                  function x(f) {
                    try {
                      c(o.throw(f));
                    } catch (l) {
                      h(l);
                    }
                  }
                  function c(f) {
                    var l;
                    f.done
                      ? u(f.value)
                      : ((l = f.value),
                        l instanceof a
                          ? l
                          : new a(function (g) {
                              g(l);
                            })).then(d, x);
                  }
                  c((o = o.apply(y, r || [])).next());
                });
              },
              Ie = function (y, r) {
                var a,
                  o,
                  u,
                  h,
                  d = {
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
                  return function (f) {
                    return (function (l) {
                      if (a)
                        throw new TypeError("Generator is already executing.");
                      for (; d; )
                        try {
                          if (
                            ((a = 1),
                            o &&
                              (u =
                                2 & l[0]
                                  ? o.return
                                  : l[0]
                                  ? o.throw || ((u = o.return) && u.call(o), 0)
                                  : o.next) &&
                              !(u = u.call(o, l[1])).done)
                          )
                            return u;
                          switch (
                            ((o = 0), u && (l = [2 & l[0], u.value]), l[0])
                          ) {
                            case 0:
                            case 1:
                              u = l;
                              break;
                            case 4:
                              return d.label++, { value: l[1], done: !1 };
                            case 5:
                              d.label++, (o = l[1]), (l = [0]);
                              continue;
                            case 7:
                              (l = d.ops.pop()), d.trys.pop();
                              continue;
                            default:
                              if (
                                !(
                                  (u =
                                    (u = d.trys).length > 0 &&
                                    u[u.length - 1]) ||
                                  (l[0] !== 6 && l[0] !== 2)
                                )
                              ) {
                                d = 0;
                                continue;
                              }
                              if (
                                l[0] === 3 &&
                                (!u || (l[1] > u[0] && l[1] < u[3]))
                              ) {
                                d.label = l[1];
                                break;
                              }
                              if (l[0] === 6 && d.label < u[1]) {
                                (d.label = u[1]), (u = l);
                                break;
                              }
                              if (u && d.label < u[2]) {
                                (d.label = u[2]), d.ops.push(l);
                                break;
                              }
                              u[2] && d.ops.pop(), d.trys.pop();
                              continue;
                          }
                          l = r.call(y, d);
                        } catch (g) {
                          (l = [6, g]), (o = 0);
                        } finally {
                          a = u = 0;
                        }
                      if (5 & l[0]) throw l[1];
                      return { value: l[0] ? l[1] : void 0, done: !0 };
                    })([c, f]);
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
            const ze = (function () {
                function y(r) {
                  (this._element = document.createElementNS(
                    "http://www.w3.org/2000/svg",
                    "svg"
                  )),
                    this._element.setAttribute("width", String(r.width)),
                    this._element.setAttribute("height", String(r.height)),
                    (this._defs = document.createElementNS(
                      "http://www.w3.org/2000/svg",
                      "defs"
                    )),
                    this._element.appendChild(this._defs),
                    (this._options = r);
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
                  (y.prototype.drawQR = function (r) {
                    return ye(this, void 0, void 0, function () {
                      var a,
                        o,
                        u,
                        h,
                        d,
                        x,
                        c,
                        f,
                        l,
                        g,
                        b = this;
                      return Ie(this, function (L) {
                        switch (L.label) {
                          case 0:
                            return (
                              (a = r.getModuleCount()),
                              (o =
                                Math.min(
                                  this._options.width,
                                  this._options.height
                                ) -
                                2 * this._options.margin),
                              (u =
                                this._options.shape === ue
                                  ? o / Math.sqrt(2)
                                  : o),
                              (h = Math.floor(u / a)),
                              (d = {
                                hideXDots: 0,
                                hideYDots: 0,
                                width: 0,
                                height: 0,
                              }),
                              (this._qr = r),
                              this._options.image
                                ? [4, this.loadImage()]
                                : [3, 2]
                            );
                          case 1:
                            if ((L.sent(), !this._image)) return [2];
                            (x = this._options),
                              (c = x.imageOptions),
                              (f = x.qrOptions),
                              (l = c.imageSize * P[f.errorCorrectionLevel]),
                              (g = Math.floor(l * a * a)),
                              (d = (function (N) {
                                var q = N.originalHeight,
                                  J = N.originalWidth,
                                  X = N.maxHiddenDots,
                                  Z = N.maxHiddenAxisDots,
                                  ce = N.dotSize,
                                  W = { x: 0, y: 0 },
                                  $ = { x: 0, y: 0 };
                                if (q <= 0 || J <= 0 || X <= 0 || ce <= 0)
                                  return {
                                    height: 0,
                                    width: 0,
                                    hideYDots: 0,
                                    hideXDots: 0,
                                  };
                                var Y = q / J;
                                return (
                                  (W.x = Math.floor(Math.sqrt(X / Y))),
                                  W.x <= 0 && (W.x = 1),
                                  Z && Z < W.x && (W.x = Z),
                                  W.x % 2 == 0 && W.x--,
                                  ($.x = W.x * ce),
                                  (W.y = 1 + 2 * Math.ceil((W.x * Y - 1) / 2)),
                                  ($.y = Math.round($.x * Y)),
                                  (W.y * W.x > X || (Z && Z < W.y)) &&
                                    (Z && Z < W.y
                                      ? ((W.y = Z), W.y % 2 == 0 && W.x--)
                                      : (W.y -= 2),
                                    ($.y = W.y * ce),
                                    (W.x =
                                      1 + 2 * Math.ceil((W.y / Y - 1) / 2)),
                                    ($.x = Math.round($.y / Y))),
                                  {
                                    height: $.y,
                                    width: $.x,
                                    hideYDots: W.y,
                                    hideXDots: W.x,
                                  }
                                );
                              })({
                                originalWidth: this._image.width,
                                originalHeight: this._image.height,
                                maxHiddenDots: g,
                                maxHiddenAxisDots: a - 14,
                                dotSize: h,
                              })),
                              (L.label = 2);
                          case 2:
                            return (
                              this.drawBackground(),
                              this.drawDots(function (N, q) {
                                var J, X, Z, ce, W, $;
                                return !(
                                  (b._options.imageOptions.hideBackgroundDots &&
                                    N >= (a - d.hideXDots) / 2 &&
                                    N < (a + d.hideXDots) / 2 &&
                                    q >= (a - d.hideYDots) / 2 &&
                                    q < (a + d.hideYDots) / 2) ||
                                  ((J = xe[N]) === null || J === void 0
                                    ? void 0
                                    : J[q]) ||
                                  ((X = xe[N - a + 7]) === null || X === void 0
                                    ? void 0
                                    : X[q]) ||
                                  ((Z = xe[N]) === null || Z === void 0
                                    ? void 0
                                    : Z[q - a + 7]) ||
                                  ((ce = Ce[N]) === null || ce === void 0
                                    ? void 0
                                    : ce[q]) ||
                                  ((W = Ce[N - a + 7]) === null || W === void 0
                                    ? void 0
                                    : W[q]) ||
                                  (($ = Ce[N]) === null || $ === void 0
                                    ? void 0
                                    : $[q - a + 7])
                                );
                              }),
                              this.drawCorners(),
                              this._options.image
                                ? [
                                    4,
                                    this.drawImage({
                                      width: d.width,
                                      height: d.height,
                                      count: a,
                                      dotSize: h,
                                    }),
                                  ]
                                : [3, 4]
                            );
                          case 3:
                            L.sent(), (L.label = 4);
                          case 4:
                            return [2];
                        }
                      });
                    });
                  }),
                  (y.prototype.drawBackground = function () {
                    var r,
                      a,
                      o,
                      u = this._element,
                      h = this._options;
                    if (u) {
                      var d =
                          (r = h.backgroundOptions) === null || r === void 0
                            ? void 0
                            : r.gradient,
                        x =
                          (a = h.backgroundOptions) === null || a === void 0
                            ? void 0
                            : a.color;
                      if (
                        ((d || x) &&
                          this._createColor({
                            options: d,
                            color: x,
                            additionalRotation: 0,
                            x: 0,
                            y: 0,
                            height: h.height,
                            width: h.width,
                            name: "background-color",
                          }),
                        (o = h.backgroundOptions) === null || o === void 0
                          ? void 0
                          : o.round)
                      ) {
                        var c = Math.min(h.width, h.height),
                          f = document.createElementNS(
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
                          f.setAttribute("x", String((h.width - c) / 2)),
                          f.setAttribute("y", String((h.height - c) / 2)),
                          f.setAttribute("width", String(c)),
                          f.setAttribute("height", String(c)),
                          f.setAttribute(
                            "rx",
                            String((c / 2) * h.backgroundOptions.round)
                          ),
                          this._backgroundClipPath.appendChild(f);
                      }
                    }
                  }),
                  (y.prototype.drawDots = function (r) {
                    var a,
                      o,
                      u = this;
                    if (!this._qr) throw "QR code is not defined";
                    var h = this._options,
                      d = this._qr.getModuleCount();
                    if (d > h.width || d > h.height)
                      throw "The canvas is too small.";
                    var x = Math.min(h.width, h.height) - 2 * h.margin,
                      c = h.shape === ue ? x / Math.sqrt(2) : x,
                      f = Math.floor(c / d),
                      l = Math.floor((h.width - d * f) / 2),
                      g = Math.floor((h.height - d * f) / 2),
                      b = new T({
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
                      var L = function (me) {
                          for (
                            var ie = function (fe) {
                                return r && !r(me, fe)
                                  ? "continue"
                                  : !((o = N._qr) === null || o === void 0) &&
                                    o.isDark(me, fe)
                                  ? (b.draw(
                                      l + me * f,
                                      g + fe * f,
                                      f,
                                      function (_e, be) {
                                        return (
                                          !(
                                            me + _e < 0 ||
                                            fe + be < 0 ||
                                            me + _e >= d ||
                                            fe + be >= d
                                          ) &&
                                          !(r && !r(me + _e, fe + be)) &&
                                          !!u._qr &&
                                          u._qr.isDark(me + _e, fe + be)
                                        );
                                      }
                                    ),
                                    void (
                                      b._element &&
                                      N._dotsClipPath &&
                                      N._dotsClipPath.appendChild(b._element)
                                    ))
                                  : "continue";
                              },
                              we = 0;
                            we < d;
                            we++
                          )
                            ie(we);
                        },
                        N = this,
                        q = 0;
                      q < d;
                      q++
                    )
                      L(q);
                    if (h.shape === ue) {
                      var J = Math.floor((x / f - d) / 2),
                        X = d + 2 * J,
                        Z = l - J * f,
                        ce = g - J * f,
                        W = [],
                        $ = Math.floor(X / 2);
                      for (q = 0; q < X; q++) {
                        W[q] = [];
                        for (var Y = 0; Y < X; Y++)
                          (q >= J - 1 &&
                            q <= X - J &&
                            Y >= J - 1 &&
                            Y <= X - J) ||
                          Math.sqrt((q - $) * (q - $) + (Y - $) * (Y - $)) > $
                            ? (W[q][Y] = 0)
                            : (W[q][Y] = this._qr.isDark(
                                Y - 2 * J < 0 ? Y : Y >= d ? Y - 2 * J : Y - J,
                                q - 2 * J < 0 ? q : q >= d ? q - 2 * J : q - J
                              )
                                ? 1
                                : 0);
                      }
                      var re = function (me) {
                          for (
                            var ie = function (fe) {
                                if (!W[me][fe]) return "continue";
                                b.draw(
                                  Z + me * f,
                                  ce + fe * f,
                                  f,
                                  function (_e, be) {
                                    var ke;
                                    return !!(
                                      !(
                                        (ke = W[me + _e]) === null ||
                                        ke === void 0
                                      ) && ke[fe + be]
                                    );
                                  }
                                ),
                                  b._element &&
                                    Oe._dotsClipPath &&
                                    Oe._dotsClipPath.appendChild(b._element);
                              },
                              we = 0;
                            we < X;
                            we++
                          )
                            ie(we);
                        },
                        Oe = this;
                      for (q = 0; q < X; q++) re(q);
                    }
                  }),
                  (y.prototype.drawCorners = function () {
                    var r = this;
                    if (!this._qr) throw "QR code is not defined";
                    var a = this._element,
                      o = this._options;
                    if (!a) throw "Element code is not defined";
                    var u = this._qr.getModuleCount(),
                      h = Math.min(o.width, o.height) - 2 * o.margin,
                      d = o.shape === ue ? h / Math.sqrt(2) : h,
                      x = Math.floor(d / u),
                      c = 7 * x,
                      f = 3 * x,
                      l = Math.floor((o.width - u * x) / 2),
                      g = Math.floor((o.height - u * x) / 2);
                    [
                      [0, 0, 0],
                      [1, 0, Math.PI / 2],
                      [0, 1, -Math.PI / 2],
                    ].forEach(function (b) {
                      var L,
                        N,
                        q,
                        J,
                        X,
                        Z,
                        ce,
                        W,
                        $,
                        Y,
                        re,
                        Oe,
                        me = b[0],
                        ie = b[1],
                        we = b[2],
                        fe = l + me * x * (u - 7),
                        _e = g + ie * x * (u - 7),
                        be = r._dotsClipPath,
                        ke = r._dotsClipPath;
                      if (
                        ((((L = o.cornersSquareOptions) === null || L === void 0
                          ? void 0
                          : L.gradient) ||
                          ((N = o.cornersSquareOptions) === null || N === void 0
                            ? void 0
                            : N.color)) &&
                          ((be = document.createElementNS(
                            "http://www.w3.org/2000/svg",
                            "clipPath"
                          )).setAttribute(
                            "id",
                            "clip-path-corners-square-color-" + me + "-" + ie
                          ),
                          r._defs.appendChild(be),
                          (r._cornersSquareClipPath =
                            r._cornersDotClipPath =
                            ke =
                              be),
                          r._createColor({
                            options:
                              (q = o.cornersSquareOptions) === null ||
                              q === void 0
                                ? void 0
                                : q.gradient,
                            color:
                              (J = o.cornersSquareOptions) === null ||
                              J === void 0
                                ? void 0
                                : J.color,
                            additionalRotation: we,
                            x: fe,
                            y: _e,
                            height: c,
                            width: c,
                            name: "corners-square-color-" + me + "-" + ie,
                          })),
                        (X = o.cornersSquareOptions) === null || X === void 0
                          ? void 0
                          : X.type)
                      ) {
                        var Me = new V({
                          svg: r._element,
                          type: o.cornersSquareOptions.type,
                        });
                        Me.draw(fe, _e, c, we),
                          Me._element && be && be.appendChild(Me._element);
                      } else
                        for (
                          var Le = new T({
                              svg: r._element,
                              type: o.dotsOptions.type,
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
                                    Le.draw(
                                      fe + Ee * x,
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
                                      Le._element &&
                                        be &&
                                        be.appendChild(Le._element);
                                  },
                                  Te = 0;
                                Te < xe[Ee].length;
                                Te++
                              )
                                nt(Te);
                            },
                            Fe = 0;
                          Fe < xe.length;
                          Fe++
                        )
                          Ot(Fe);
                      if (
                        ((((ce = o.cornersDotOptions) === null || ce === void 0
                          ? void 0
                          : ce.gradient) ||
                          ((W = o.cornersDotOptions) === null || W === void 0
                            ? void 0
                            : W.color)) &&
                          ((ke = document.createElementNS(
                            "http://www.w3.org/2000/svg",
                            "clipPath"
                          )).setAttribute(
                            "id",
                            "clip-path-corners-dot-color-" + me + "-" + ie
                          ),
                          r._defs.appendChild(ke),
                          (r._cornersDotClipPath = ke),
                          r._createColor({
                            options:
                              ($ = o.cornersDotOptions) === null || $ === void 0
                                ? void 0
                                : $.gradient,
                            color:
                              (Y = o.cornersDotOptions) === null || Y === void 0
                                ? void 0
                                : Y.color,
                            additionalRotation: we,
                            x: fe + 2 * x,
                            y: _e + 2 * x,
                            height: f,
                            width: f,
                            name: "corners-dot-color-" + me + "-" + ie,
                          })),
                        (re = o.cornersDotOptions) === null || re === void 0
                          ? void 0
                          : re.type)
                      ) {
                        var rt = new se({
                          svg: r._element,
                          type: o.cornersDotOptions.type,
                        });
                        rt.draw(fe + 2 * x, _e + 2 * x, f, we),
                          rt._element && ke && ke.appendChild(rt._element);
                      } else {
                        Le = new T({
                          svg: r._element,
                          type: o.dotsOptions.type,
                        });
                        var Dt = function (Ee) {
                          for (
                            var nt = function (Re) {
                                if (
                                  !(
                                    !(
                                      (Oe = Ce[Ee]) === null || Oe === void 0
                                    ) && Oe[Re]
                                  )
                                )
                                  return "continue";
                                Le.draw(
                                  fe + Ee * x,
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
                                  Le._element &&
                                    ke &&
                                    ke.appendChild(Le._element);
                              },
                              Te = 0;
                            Te < Ce[Ee].length;
                            Te++
                          )
                            nt(Te);
                        };
                        for (Fe = 0; Fe < Ce.length; Fe++) Dt(Fe);
                      }
                    });
                  }),
                  (y.prototype.loadImage = function () {
                    var r = this;
                    return new Promise(function (a, o) {
                      var u = r._options,
                        h = new Image();
                      if (!u.image) return o("Image is not defined");
                      typeof u.imageOptions.crossOrigin == "string" &&
                        (h.crossOrigin = u.imageOptions.crossOrigin),
                        (r._image = h),
                        (h.onload = function () {
                          a();
                        }),
                        (h.src = u.image);
                    });
                  }),
                  (y.prototype.drawImage = function (r) {
                    var a = r.width,
                      o = r.height,
                      u = r.count,
                      h = r.dotSize;
                    return ye(this, void 0, void 0, function () {
                      var d, x, c, f, l, g, b, L, N;
                      return Ie(this, function (q) {
                        switch (q.label) {
                          case 0:
                            return (
                              (d = this._options),
                              (x = Math.floor((d.width - u * h) / 2)),
                              (c = Math.floor((d.height - u * h) / 2)),
                              (f = x + d.imageOptions.margin + (u * h - a) / 2),
                              (l = c + d.imageOptions.margin + (u * h - o) / 2),
                              (g = a - 2 * d.imageOptions.margin),
                              (b = o - 2 * d.imageOptions.margin),
                              (L = document.createElementNS(
                                "http://www.w3.org/2000/svg",
                                "image"
                              )).setAttribute("x", String(f)),
                              L.setAttribute("y", String(l)),
                              L.setAttribute("width", g + "px"),
                              L.setAttribute("height", b + "px"),
                              [4, j(d.image || "")]
                            );
                          case 1:
                            return (
                              (N = q.sent()),
                              L.setAttribute("href", N || ""),
                              this._element.appendChild(L),
                              [2]
                            );
                        }
                      });
                    });
                  }),
                  (y.prototype._createColor = function (r) {
                    var a = r.options,
                      o = r.color,
                      u = r.additionalRotation,
                      h = r.x,
                      d = r.y,
                      x = r.height,
                      c = r.width,
                      f = r.name,
                      l = c > x ? c : x,
                      g = document.createElementNS(
                        "http://www.w3.org/2000/svg",
                        "rect"
                      );
                    if (
                      (g.setAttribute("x", String(h)),
                      g.setAttribute("y", String(d)),
                      g.setAttribute("height", String(x)),
                      g.setAttribute("width", String(c)),
                      g.setAttribute(
                        "clip-path",
                        "url('#clip-path-" + f + "')"
                      ),
                      a)
                    ) {
                      var b;
                      if (a.type === "radial")
                        (b = document.createElementNS(
                          "http://www.w3.org/2000/svg",
                          "radialGradient"
                        )).setAttribute("id", f),
                          b.setAttribute("gradientUnits", "userSpaceOnUse"),
                          b.setAttribute("fx", String(h + c / 2)),
                          b.setAttribute("fy", String(d + x / 2)),
                          b.setAttribute("cx", String(h + c / 2)),
                          b.setAttribute("cy", String(d + x / 2)),
                          b.setAttribute("r", String(l / 2));
                      else {
                        var L = ((a.rotation || 0) + u) % (2 * Math.PI),
                          N = (L + 2 * Math.PI) % (2 * Math.PI),
                          q = h + c / 2,
                          J = d + x / 2,
                          X = h + c / 2,
                          Z = d + x / 2;
                        (N >= 0 && N <= 0.25 * Math.PI) ||
                        (N > 1.75 * Math.PI && N <= 2 * Math.PI)
                          ? ((q -= c / 2),
                            (J -= (x / 2) * Math.tan(L)),
                            (X += c / 2),
                            (Z += (x / 2) * Math.tan(L)))
                          : N > 0.25 * Math.PI && N <= 0.75 * Math.PI
                          ? ((J -= x / 2),
                            (q -= c / 2 / Math.tan(L)),
                            (Z += x / 2),
                            (X += c / 2 / Math.tan(L)))
                          : N > 0.75 * Math.PI && N <= 1.25 * Math.PI
                          ? ((q += c / 2),
                            (J += (x / 2) * Math.tan(L)),
                            (X -= c / 2),
                            (Z -= (x / 2) * Math.tan(L)))
                          : N > 1.25 * Math.PI &&
                            N <= 1.75 * Math.PI &&
                            ((J += x / 2),
                            (q += c / 2 / Math.tan(L)),
                            (Z -= x / 2),
                            (X -= c / 2 / Math.tan(L))),
                          (b = document.createElementNS(
                            "http://www.w3.org/2000/svg",
                            "linearGradient"
                          )).setAttribute("id", f),
                          b.setAttribute("gradientUnits", "userSpaceOnUse"),
                          b.setAttribute("x1", String(Math.round(q))),
                          b.setAttribute("y1", String(Math.round(J))),
                          b.setAttribute("x2", String(Math.round(X))),
                          b.setAttribute("y2", String(Math.round(Z)));
                      }
                      a.colorStops.forEach(function (ce) {
                        var W = ce.offset,
                          $ = ce.color,
                          Y = document.createElementNS(
                            "http://www.w3.org/2000/svg",
                            "stop"
                          );
                        Y.setAttribute("offset", 100 * W + "%"),
                          Y.setAttribute("stop-color", $),
                          b.appendChild(Y);
                      }),
                        g.setAttribute("fill", "url('#" + f + "')"),
                        this._defs.appendChild(b);
                    } else o && g.setAttribute("fill", o);
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
                  for (var r, a = 1, o = arguments.length; a < o; a++)
                    for (var u in (r = arguments[a]))
                      Object.prototype.hasOwnProperty.call(r, u) &&
                        (y[u] = r[u]);
                  return y;
                }).apply(this, arguments);
            };
            function C(y) {
              var r = k({}, y);
              if (!r.colorStops || !r.colorStops.length)
                throw "Field 'colorStops' is required in gradient";
              return (
                r.rotation
                  ? (r.rotation = Number(r.rotation))
                  : (r.rotation = 0),
                (r.colorStops = r.colorStops.map(function (a) {
                  return k(k({}, a), { offset: Number(a.offset) });
                })),
                r
              );
            }
            function w(y) {
              var r = k({}, y);
              return (
                (r.width = Number(r.width)),
                (r.height = Number(r.height)),
                (r.margin = Number(r.margin)),
                (r.imageOptions = k(k({}, r.imageOptions), {
                  hideBackgroundDots: Boolean(
                    r.imageOptions.hideBackgroundDots
                  ),
                  imageSize: Number(r.imageOptions.imageSize),
                  margin: Number(r.imageOptions.margin),
                })),
                r.margin > Math.min(r.width, r.height) &&
                  (r.margin = Math.min(r.width, r.height)),
                (r.dotsOptions = k({}, r.dotsOptions)),
                r.dotsOptions.gradient &&
                  (r.dotsOptions.gradient = C(r.dotsOptions.gradient)),
                r.cornersSquareOptions &&
                  ((r.cornersSquareOptions = k({}, r.cornersSquareOptions)),
                  r.cornersSquareOptions.gradient &&
                    (r.cornersSquareOptions.gradient = C(
                      r.cornersSquareOptions.gradient
                    ))),
                r.cornersDotOptions &&
                  ((r.cornersDotOptions = k({}, r.cornersDotOptions)),
                  r.cornersDotOptions.gradient &&
                    (r.cornersDotOptions.gradient = C(
                      r.cornersDotOptions.gradient
                    ))),
                r.backgroundOptions &&
                  ((r.backgroundOptions = k({}, r.backgroundOptions)),
                  r.backgroundOptions.gradient &&
                    (r.backgroundOptions.gradient = C(
                      r.backgroundOptions.gradient
                    ))),
                r
              );
            }
            var A = m(192),
              O = m.n(A),
              D = function (y, r, a, o) {
                return new (a || (a = Promise))(function (u, h) {
                  function d(f) {
                    try {
                      c(o.next(f));
                    } catch (l) {
                      h(l);
                    }
                  }
                  function x(f) {
                    try {
                      c(o.throw(f));
                    } catch (l) {
                      h(l);
                    }
                  }
                  function c(f) {
                    var l;
                    f.done
                      ? u(f.value)
                      : ((l = f.value),
                        l instanceof a
                          ? l
                          : new a(function (g) {
                              g(l);
                            })).then(d, x);
                  }
                  c((o = o.apply(y, r || [])).next());
                });
              },
              Q = function (y, r) {
                var a,
                  o,
                  u,
                  h,
                  d = {
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
                  return function (f) {
                    return (function (l) {
                      if (a)
                        throw new TypeError("Generator is already executing.");
                      for (; d; )
                        try {
                          if (
                            ((a = 1),
                            o &&
                              (u =
                                2 & l[0]
                                  ? o.return
                                  : l[0]
                                  ? o.throw || ((u = o.return) && u.call(o), 0)
                                  : o.next) &&
                              !(u = u.call(o, l[1])).done)
                          )
                            return u;
                          switch (
                            ((o = 0), u && (l = [2 & l[0], u.value]), l[0])
                          ) {
                            case 0:
                            case 1:
                              u = l;
                              break;
                            case 4:
                              return d.label++, { value: l[1], done: !1 };
                            case 5:
                              d.label++, (o = l[1]), (l = [0]);
                              continue;
                            case 7:
                              (l = d.ops.pop()), d.trys.pop();
                              continue;
                            default:
                              if (
                                !(
                                  (u =
                                    (u = d.trys).length > 0 &&
                                    u[u.length - 1]) ||
                                  (l[0] !== 6 && l[0] !== 2)
                                )
                              ) {
                                d = 0;
                                continue;
                              }
                              if (
                                l[0] === 3 &&
                                (!u || (l[1] > u[0] && l[1] < u[3]))
                              ) {
                                d.label = l[1];
                                break;
                              }
                              if (l[0] === 6 && d.label < u[1]) {
                                (d.label = u[1]), (u = l);
                                break;
                              }
                              if (u && d.label < u[2]) {
                                (d.label = u[2]), d.ops.push(l);
                                break;
                              }
                              u[2] && d.ops.pop(), d.trys.pop();
                              continue;
                          }
                          l = r.call(y, d);
                        } catch (g) {
                          (l = [6, g]), (o = 0);
                        } finally {
                          a = u = 0;
                        }
                      if (5 & l[0]) throw l[1];
                      return { value: l[0] ? l[1] : void 0, done: !0 };
                    })([c, f]);
                  };
                }
              };
            const le = (function () {
              function y(r) {
                (this._options = r ? w(R(S, r)) : S), this.update();
              }
              return (
                (y._clearContainer = function (r) {
                  r && (r.innerHTML = "");
                }),
                (y.prototype._setupSvg = function () {
                  var r = this;
                  if (this._qr) {
                    var a = new ze(this._options);
                    (this._svg = a.getElement()),
                      (this._svgDrawingPromise = a
                        .drawQR(this._qr)
                        .then(function () {
                          var o;
                          r._svg &&
                            ((o = r._extension) === null ||
                              o === void 0 ||
                              o.call(r, a.getElement(), r._options));
                        }));
                  }
                }),
                (y.prototype._setupCanvas = function () {
                  var r,
                    a = this;
                  this._qr &&
                    ((this._canvas = document.createElement("canvas")),
                    (this._canvas.width = this._options.width),
                    (this._canvas.height = this._options.height),
                    this._setupSvg(),
                    (this._canvasDrawingPromise =
                      (r = this._svgDrawingPromise) === null || r === void 0
                        ? void 0
                        : r.then(function () {
                            if (a._svg) {
                              var o = a._svg,
                                u = new XMLSerializer().serializeToString(o),
                                h = "data:image/svg+xml;base64," + btoa(u),
                                d = new Image();
                              return new Promise(function (x) {
                                (d.onload = function () {
                                  var c, f;
                                  (f =
                                    (c = a._canvas) === null || c === void 0
                                      ? void 0
                                      : c.getContext("2d")) === null ||
                                    f === void 0 ||
                                    f.drawImage(d, 0, 0),
                                    x();
                                }),
                                  (d.src = h);
                              });
                            }
                          })));
                }),
                (y.prototype._getElement = function (r) {
                  return (
                    r === void 0 && (r = "png"),
                    D(this, void 0, void 0, function () {
                      return Q(this, function (a) {
                        switch (a.label) {
                          case 0:
                            if (!this._qr) throw "QR code is empty";
                            return r.toLowerCase() !== "svg"
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
                (y.prototype.update = function (r) {
                  y._clearContainer(this._container),
                    (this._options = r
                      ? w(R(this._options, r))
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
                (y.prototype.append = function (r) {
                  if (r) {
                    if (typeof r.appendChild != "function")
                      throw "Container should be a single DOM node";
                    this._options.type === De
                      ? this._canvas && r.appendChild(this._canvas)
                      : this._svg && r.appendChild(this._svg),
                      (this._container = r);
                  }
                }),
                (y.prototype.applyExtension = function (r) {
                  if (!r) throw "Extension function should be defined.";
                  (this._extension = r), this.update();
                }),
                (y.prototype.deleteExtension = function () {
                  (this._extension = void 0), this.update();
                }),
                (y.prototype.getRawData = function (r) {
                  return (
                    r === void 0 && (r = "png"),
                    D(this, void 0, void 0, function () {
                      var a, o, u;
                      return Q(this, function (h) {
                        switch (h.label) {
                          case 0:
                            if (!this._qr) throw "QR code is empty";
                            return [4, this._getElement(r)];
                          case 1:
                            return (a = h.sent())
                              ? r.toLowerCase() === "svg"
                                ? ((o = new XMLSerializer()),
                                  (u = o.serializeToString(a)),
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
                                    new Promise(function (d) {
                                      return a.toBlob(d, "image/" + r, 1);
                                    }),
                                  ]
                              : [2, null];
                        }
                      });
                    })
                  );
                }),
                (y.prototype.download = function (r) {
                  return D(this, void 0, void 0, function () {
                    var a, o, u, h, d;
                    return Q(this, function (x) {
                      switch (x.label) {
                        case 0:
                          if (!this._qr) throw "QR code is empty";
                          return (
                            (a = "png"),
                            (o = "qr"),
                            typeof r == "string"
                              ? ((a = r),
                                console.warn(
                                  "Extension is deprecated as argument for 'download' method, please pass object { name: '...', extension: '...' } as argument"
                                ))
                              : typeof r == "object" &&
                                r !== null &&
                                (r.name && (o = r.name),
                                r.extension && (a = r.extension)),
                            [4, this._getElement(a)]
                          );
                        case 1:
                          return (u = x.sent())
                            ? (a.toLowerCase() === "svg"
                                ? ((h = new XMLSerializer()),
                                  (d =
                                    `<?xml version="1.0" standalone="no"?>\r
` + (d = h.serializeToString(u))),
                                  G(
                                    "data:image/svg+xml;charset=utf-8," +
                                      encodeURIComponent(d),
                                    o + ".svg"
                                  ))
                                : G(u.toDataURL("image/" + a), o + "." + a),
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
        i = {};
      function s(p) {
        if (i[p]) return i[p].exports;
        var v = (i[p] = { exports: {} });
        return t[p](v, v.exports, s), v.exports;
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
})(zt);
var Er = jr(zt.exports);
function Br(n) {
  let e, t, i, s, p, v, m, z, I, F, R;
  return (
    (s = new ht({
      props: {
        font: "f-secondary",
        text: `Your child has been successfully registered. 
    Please show us this code at the entrance. 
    You can either take a screenshot of this page or download it by pressing the button below.`,
      },
    })),
    (m = new Mt({ props: { text: "download" } })),
    m.$on("action", n[0]),
    (F = new dt({ props: { text: "Done" } })),
    F.$on("action", n[14]),
    {
      c() {
        (e = H("div")),
          (t = H("div")),
          (i = te()),
          ve(s.$$.fragment),
          (p = te()),
          (v = H("div")),
          ve(m.$$.fragment),
          (z = te()),
          (I = H("div")),
          ve(F.$$.fragment),
          _(t, "class", "qrcode std-flex-column svelte-po5xvs"),
          _(t, "id", "canvas"),
          _(v, "class", "donload-btn-wrapper svelte-po5xvs"),
          _(I, "class", "next-btn-wrapper svelte-po5xvs"),
          _(e, "class", "qrcode-wrapper");
      },
      m(G, j) {
        oe(G, e, j),
          B(e, t),
          B(e, i),
          he(s, e, null),
          B(e, p),
          B(e, v),
          he(m, v, null),
          B(e, z),
          B(e, I),
          he(F, I, null),
          (R = !0);
      },
      p: de,
      i(G) {
        R ||
          (ee(s.$$.fragment, G),
          ee(m.$$.fragment, G),
          ee(F.$$.fragment, G),
          (R = !0));
      },
      o(G) {
        ae(s.$$.fragment, G),
          ae(m.$$.fragment, G),
          ae(F.$$.fragment, G),
          (R = !1);
      },
      d(G) {
        G && ne(e), pe(s), pe(m), pe(F);
      },
    }
  );
}
function Pr(n, e, t) {
  let { childId: i } = e,
    { organizationId: s } = e,
    { width: p = 300 } = e,
    { height: v = 300 } = e,
    { dotGradientOne: m = "#000000" } = e,
    { dotGradientTwo: z = "#000000" } = e,
    { image: I = "" } = e,
    { bkgColor: F = "#FFFFFF" } = e,
    { dotType: R = "rounded" } = e,
    { cornerSqColor: G = "rounded" } = e,
    { cornerSqType: j = "rounded" } = e,
    { cornerDotColor: P = "rounded" } = e,
    { cornerDotType: U = "rounded" } = e;
  const T = new Er({
      width: p,
      height: v,
      type: "svg",
      data: `https://chikios.biblescholar.app/admin/${i}`,
      image: I,
      dotsOptions: {
        gradient: {
          type: "linear",
          rotation: 70,
          colorStops: [
            { offset: 0, color: m },
            { offset: 1, color: z },
          ],
        },
        type: R,
      },
      backgroundOptions: { color: F },
      imageOptions: { crossOrigin: "anonymous", margin: 5 },
      cornersSquareOptions: { color: G, type: j },
      cornersDotOptions: { color: P, type: U },
    }),
    K = () => {
      T.download({ extension: "png" });
    };
  ft(() => {
    T.append(document.getElementById("canvas"));
  });
  const V = () => {
    location.href = location.href;
  };
  return (
    (n.$$set = (E) => {
      "childId" in E && t(1, (i = E.childId)),
        "organizationId" in E && t(2, (s = E.organizationId)),
        "width" in E && t(3, (p = E.width)),
        "height" in E && t(4, (v = E.height)),
        "dotGradientOne" in E && t(5, (m = E.dotGradientOne)),
        "dotGradientTwo" in E && t(6, (z = E.dotGradientTwo)),
        "image" in E && t(7, (I = E.image)),
        "bkgColor" in E && t(8, (F = E.bkgColor)),
        "dotType" in E && t(9, (R = E.dotType)),
        "cornerSqColor" in E && t(10, (G = E.cornerSqColor)),
        "cornerSqType" in E && t(11, (j = E.cornerSqType)),
        "cornerDotColor" in E && t(12, (P = E.cornerDotColor)),
        "cornerDotType" in E && t(13, (U = E.cornerDotType));
    }),
    [K, i, s, p, v, m, z, I, F, R, G, j, P, U, V]
  );
}
class Lr extends qe {
  constructor(e) {
    super(),
      Se(this, e, Pr, Br, Ae, {
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
  let e, t;
  return (
    (e = new Lr({
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
      m(i, s) {
        he(e, i, s), (t = !0);
      },
      p(i, s) {
        const p = {};
        s & 2 && (p.childId = i[1]), e.$set(p);
      },
      i(i) {
        t || (ee(e.$$.fragment, i), (t = !0));
      },
      o(i) {
        ae(e.$$.fragment, i), (t = !1);
      },
      d(i) {
        pe(e, i);
      },
    }
  );
}
function Tr(n) {
  let e, t, i;
  function s(v) {
    n[4](v);
  }
  let p = {};
  return (
    n[0] !== void 0 && (p.currentTitle = n[0]),
    (e = new Sr({ props: p })),
    st.push(() => Ht(e, "currentTitle", s)),
    e.$on("registration_success", n[3]),
    {
      c() {
        ve(e.$$.fragment);
      },
      m(v, m) {
        he(e, v, m), (i = !0);
      },
      p(v, m) {
        const z = {};
        !t && m & 1 && ((t = !0), (z.currentTitle = v[0]), Ut(() => (t = !1))),
          e.$set(z);
      },
      i(v) {
        i || (ee(e.$$.fragment, v), (i = !0));
      },
      o(v) {
        ae(e.$$.fragment, v), (i = !1);
      },
      d(v) {
        pe(e, v);
      },
    }
  );
}
function Rr(n) {
  let e, t, i, s, p, v, m, z, I;
  (t = new Ir({ props: { src: "/images/logo.png", alt: "kidz quest logo" } })),
    (s = new zr({ props: { title: n[0] } }));
  const F = [Tr, Fr],
    R = [];
  function G(j, P) {
    return j[2] === 0 ? 0 : j[2] === 1 && j[1] ? 1 : -1;
  }
  return (
    ~(v = G(n)) && (m = R[v] = F[v](n)),
    {
      c() {
        (e = H("div")),
          ve(t.$$.fragment),
          (i = te()),
          ve(s.$$.fragment),
          (p = te()),
          m && m.c(),
          (z = Pt()),
          _(e, "class", "image-wrapper svelte-1oshbwy");
      },
      m(j, P) {
        oe(j, e, P),
          he(t, e, null),
          oe(j, i, P),
          he(s, j, P),
          oe(j, p, P),
          ~v && R[v].m(j, P),
          oe(j, z, P),
          (I = !0);
      },
      p(j, [P]) {
        const U = {};
        P & 1 && (U.title = j[0]), s.$set(U);
        let T = v;
        (v = G(j)),
          v === T
            ? ~v && R[v].p(j, P)
            : (m &&
                (Ge(),
                ae(R[T], 1, 1, () => {
                  R[T] = null;
                }),
                Je()),
              ~v
                ? ((m = R[v]),
                  m ? m.p(j, P) : ((m = R[v] = F[v](j)), m.c()),
                  ee(m, 1),
                  m.m(z.parentNode, z))
                : (m = null));
      },
      i(j) {
        I || (ee(t.$$.fragment, j), ee(s.$$.fragment, j), ee(m), (I = !0));
      },
      o(j) {
        ae(t.$$.fragment, j), ae(s.$$.fragment, j), ae(m), (I = !1);
      },
      d(j) {
        j && ne(e),
          pe(t),
          j && ne(i),
          pe(s, j),
          j && ne(p),
          ~v && R[v].d(j),
          j && ne(z);
      },
    }
  );
}
function Nr(n, e, t) {
  let i,
    s = "",
    p = 0;
  const v = (z) => {
    t(1, (s = z.detail.id)), t(2, (p = 1));
  };
  function m(z) {
    (i = z), t(0, i);
  }
  return [i, s, p, v, m];
}
class Ur extends qe {
  constructor(e) {
    super(), Se(this, e, Nr, Rr, Ae, {});
  }
}
function Qr(n) {
  let e, t, i, s, p;
  return (
    (e = new Ur({})),
    (s = new Vt({})),
    {
      c() {
        ve(e.$$.fragment),
          (t = te()),
          (i = H("div")),
          ve(s.$$.fragment),
          _(i, "class", "promo svelte-11lqzr9");
      },
      m(v, m) {
        he(e, v, m), oe(v, t, m), oe(v, i, m), he(s, i, null), (p = !0);
      },
      p: de,
      i(v) {
        p || (ee(e.$$.fragment, v), ee(s.$$.fragment, v), (p = !0));
      },
      o(v) {
        ae(e.$$.fragment, v), ae(s.$$.fragment, v), (p = !1);
      },
      d(v) {
        pe(e, v), v && ne(t), v && ne(i), pe(s);
      },
    }
  );
}
class Hr extends qe {
  constructor(e) {
    super(), Se(this, e, null, Qr, Ae, {});
  }
}
function Gr(n) {
  let e, t, i, s, p;
  return (
    (s = new Hr({})),
    {
      c() {
        (e = H("div")),
          (t = te()),
          (i = H("main")),
          ve(s.$$.fragment),
          _(e, "class", "background std-bkg svelte-bzcada"),
          Ft(e, "background-image", "url('" + Jr + "')"),
          _(i, "class", "main-wrapper");
      },
      m(v, m) {
        oe(v, e, m), oe(v, t, m), oe(v, i, m), he(s, i, null), (p = !0);
      },
      p: de,
      i(v) {
        p || (ee(s.$$.fragment, v), (p = !0));
      },
      o(v) {
        ae(s.$$.fragment, v), (p = !1);
      },
      d(v) {
        v && ne(e), v && ne(t), v && ne(i), pe(s);
      },
    }
  );
}
let Jr = "./images/bkgs/crumbled-paper_v.png";
class Vr extends qe {
  constructor(e) {
    super(), Se(this, e, null, Gr, Ae, {});
  }
}
new Vr({ target: document.getElementById("app") });
