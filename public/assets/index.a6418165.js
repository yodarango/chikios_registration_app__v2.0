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
function P(n, e) {
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
function U(n) {
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
function y(n, e, r) {
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
function se(n, e, r, o) {
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
  let T = !1;
  if (
    ((D.ctx = r
      ? r(n, e.props || {}, (Q, H, ...E) => {
          const F = E.length ? E[0] : H;
          return (
            D.ctx &&
              s(D.ctx[Q], (D.ctx[Q] = F)) &&
              (!D.skip_bound && D.bound[Q] && D.bound[Q](F), T && Ht(n, Q)),
            H
          );
        })
      : []),
    D.update(),
    (T = !0),
    He(D.before_update),
    (D.fragment = o ? o(D.ctx) : !1),
    e.target)
  ) {
    if (e.hydrate) {
      const Q = Pt(e.target);
      D.fragment && D.fragment.l(Q), Q.forEach(ne);
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
      (e = U("a")),
        (e.innerHTML = `<p class="std-text--secondary">brought you by Scholar</p> 
  <span class="std-icon scholar-icon svelte-1w5q1ii"></span>`),
        y(e, "href", "https://biblescholar.app"),
        y(e, "class", "promo-wrapper svelte-1w5q1ii");
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
      (e = U("p")),
        (r = je(n[1])),
        (o = je(":")),
        y(e, "class", "option-option-label svelte-1ax8dgq"),
        y(e, "for", "input-option");
    },
    m(s, p) {
      oe(s, e, p), P(e, r), P(e, o);
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
      (e = U("input")),
        y(e, "type", "text"),
        y(e, "id", "option-one"),
        (e.value = r = n[4].first),
        y(e, "name", n[0]),
        y(e, "class", "hidden svelte-1ax8dgq");
    },
    m(o, s) {
      oe(o, e, s);
    },
    p(o, s) {
      s & 16 && r !== (r = o[4].first) && e.value !== r && (e.value = r),
        s & 1 && y(e, "name", o[0]);
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
      (e = U("input")),
        y(e, "type", "text"),
        y(e, "id", "option-one"),
        (e.value = r = n[4].first),
        y(e, "name", n[0]),
        y(e, "class", "hidden svelte-1ax8dgq"),
        (e.required = !0);
    },
    m(o, s) {
      oe(o, e, s);
    },
    p(o, s) {
      s & 16 && r !== (r = o[4].first) && e.value !== r && (e.value = r),
        s & 1 && y(e, "name", o[0]);
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
      (e = U("input")),
        y(e, "type", "text"),
        y(e, "id", "option-two"),
        (e.value = r = n[4].second),
        y(e, "name", n[0]),
        y(e, "class", "hidden svelte-1ax8dgq");
    },
    m(o, s) {
      oe(o, e, s);
    },
    p(o, s) {
      s & 16 && r !== (r = o[4].second) && e.value !== r && (e.value = r),
        s & 1 && y(e, "name", o[0]);
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
      (e = U("input")),
        y(e, "type", "text"),
        y(e, "id", "option-two"),
        (e.value = r = n[4].second),
        y(e, "name", n[0]),
        y(e, "class", "hidden svelte-1ax8dgq");
    },
    m(o, s) {
      oe(o, e, s);
    },
    p(o, s) {
      s & 16 && r !== (r = o[4].second) && e.value !== r && (e.value = r),
        s & 1 && y(e, "name", o[0]);
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
    T,
    Q,
    H,
    E,
    F,
    B,
    K,
    W,
    J,
    I,
    ue,
    le = n[2].second + "",
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
      (e = U("div")),
        ge && ge.c(),
        (r = ee()),
        (o = U("div")),
        (s = U("span")),
        (v = ee()),
        k && k.c(),
        (m = ee()),
        (z = U("p")),
        (T = je(D)),
        (H = ee()),
        (E = U("div")),
        (E.innerHTML =
          '<svg class="svelte-1ax8dgq"><path d="M3 5.7072C50.1565 5.7072 97.3247 5.92723 144.48 5.64704C193.917 5.3533 243.309 3.75524 292.749 3.51136C312.837 3.41227 332.909 3 353 3" stroke="#5B7FFF" stroke-width="3" stroke-linecap="round"></path></svg>'),
        (F = ee()),
        (B = U("div")),
        (K = U("span")),
        (J = ee()),
        A && A.c(),
        (I = ee()),
        (ue = U("p")),
        (ye = je(le)),
        (xe = ee()),
        (Ce = U("div")),
        (Ce.innerHTML =
          '<svg class="svelte-1ax8dgq"><path d="M3 5.7072C50.1565 5.7072 97.3247 5.92723 144.48 5.64704C193.917 5.3533 243.309 3.75524 292.749 3.51136C312.837 3.41227 332.909 3 353 3" stroke="#5B7FFF" stroke-width="3" stroke-linecap="round" width="100%" height="100%"></path></svg>'),
        y(
          s,
          "class",
          (p =
            "std-bkg std-icon option-selected " +
            n[5].first +
            " svelte-1ax8dgq")
        ),
        y(z, "class", (Q = "option-letter " + n[5].first + " svelte-1ax8dgq")),
        y(E, "class", "svg-wrapper svelte-1ax8dgq"),
        y(o, "class", "option-option svelte-1ax8dgq"),
        y(
          K,
          "class",
          (W =
            "std-bkg std-icon option-selected " +
            n[5].second +
            " svelte-1ax8dgq")
        ),
        y(
          ue,
          "class",
          (Ie = "option-letter " + n[5].second + " svelte-1ax8dgq")
        ),
        y(Ce, "class", "svg-wrapper svelte-1ax8dgq"),
        y(B, "class", "option-option svelte-1ax8dgq"),
        y(
          e,
          "class",
          "input-interface-wrapper std-flex-justify-start std-flex-align-end std-flex-nowrap svelte-1ax8dgq"
        );
    },
    m(O, j) {
      oe(O, e, j),
        ge && ge.m(e, null),
        P(e, r),
        P(e, o),
        P(o, s),
        P(o, v),
        k && k.m(o, null),
        P(o, m),
        P(o, z),
        P(z, T),
        P(o, H),
        P(o, E),
        P(e, F),
        P(e, B),
        P(B, K),
        P(B, J),
        A && A.m(B, null),
        P(B, I),
        P(B, ue),
        P(ue, ye),
        P(B, xe),
        P(B, Ce),
        Oe || ((De = [Be(o, "click", n[9]), Be(B, "click", n[10])]), (Oe = !0));
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
          y(s, "class", p),
        S === (S = M(O)) && k
          ? k.p(O, j)
          : (k && k.d(1), (k = S && S(O)), k && (k.c(), k.m(o, m))),
        j & 4 && D !== (D = O[2].first + "") && Pe(T, D),
        j & 32 &&
          Q !== (Q = "option-letter " + O[5].first + " svelte-1ax8dgq") &&
          y(z, "class", Q),
        j & 32 &&
          W !==
            (W =
              "std-bkg std-icon option-selected " +
              O[5].second +
              " svelte-1ax8dgq") &&
          y(K, "class", W),
        w === (w = C(O)) && A
          ? A.p(O, j)
          : (A && A.d(1), (A = w && w(O)), A && (A.c(), A.m(B, I))),
        j & 4 && le !== (le = O[2].second + "") && Pe(ye, le),
        j & 32 &&
          Ie !== (Ie = "option-letter " + O[5].second + " svelte-1ax8dgq") &&
          y(ue, "class", Ie);
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
    T = { first: D.first, second: "" },
    Q = { first: "selected", second: "" };
  const H = (B) => {
      B === 1
        ? (r(5, (Q = { first: "selected", second: "" })),
          r(4, (T = { first: D.first, second: "" })))
        : (r(5, (Q = { first: "", second: "selected" })),
          r(4, (T = { first: "", second: D.second }))),
        o("action", { option: B });
    },
    E = () => H(1),
    F = () => H(2);
  return (
    (n.$$set = (B) => {
      "name" in B && r(0, (s = B.name)),
        "label" in B && r(1, (p = B.label)),
        "valueLabel" in B && r(2, (v = B.valueLabel)),
        "req" in B && r(3, (z = B.req)),
        "inputValues" in B && r(8, (D = B.inputValues));
    }),
    [s, p, v, z, T, Q, H, m, D, E, F]
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
      (e = U("input")),
        y(e, "type", "number"),
        y(e, "maxlength", "3"),
        y(e, "class", "std-input hidden svelte-6hz7uh"),
        y(e, "id", "hidden-input"),
        y(e, "placeholder", ""),
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
      (e = U("input")),
        y(e, "type", "number"),
        y(e, "maxlength", "3"),
        y(e, "class", "std-input hidden svelte-6hz7uh"),
        y(e, "id", "hidden-input"),
        y(e, "placeholder", ""),
        (e.value = n[5]),
        y(e, "name", n[3]),
        (e.required = !0);
    },
    m(r, o) {
      oe(r, e, o);
    },
    p(r, o) {
      o & 32 && e.value !== r[5] && (e.value = r[5]),
        o & 8 && y(e, "name", r[3]);
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
      (e = U("p")),
        (o = je(r)),
        (s = ee()),
        y(e, "class", "std-flex-row svelte-6hz7uh");
    },
    m(z, D) {
      oe(z, e, D), P(e, o), P(e, s), p || ((v = Be(e, "click", m)), (p = !0));
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
  let e, r, o, s, p, v, m, z, D, T, Q, H, E;
  function F(I, ue) {
    return I[2] ? tr : er;
  }
  let B = F(n),
    K = B(n),
    W = new Array(n[1]),
    J = [];
  for (let I = 0; I < W.length; I += 1) J[I] = wt(mt(n, W, I));
  return {
    c() {
      (e = U("div")), (r = U("div")), K.c(), (o = ee()), (s = U("div"));
      for (let I = 0; I < J.length; I += 1) J[I].c();
      (v = ee()),
        (m = U("p")),
        (z = je(n[4])),
        (T = ee()),
        (Q = U("div")),
        (Q.innerHTML =
          '<svg viewBox="0 0 356 9" class="svelte-6hz7uh"><path d="M3 5.7072C50.1565 5.7072 97.3247 5.92723 144.48 5.64704C193.917 5.3533 243.309 3.75524 292.749 3.51136C312.837 3.41227 332.909 3 353 3" stroke="#5B7FFF" stroke-width="20" stroke-linecap="round"></path></svg>'),
        y(s, "class", (p = "age-dropdown " + n[6] + " svelte-6hz7uh")),
        y(m, "class", (D = "std-input currAge " + n[7] + " svelte-6hz7uh")),
        y(Q, "class", "svg-wrapper svelte-6hz7uh"),
        y(r, "class", "input-wrapper svelte-6hz7uh"),
        y(e, "class", "main-wrapper svelte-6hz7uh");
    },
    m(I, ue) {
      oe(I, e, ue), P(e, r), K.m(r, null), P(r, o), P(r, s);
      for (let le = 0; le < J.length; le += 1) J[le].m(s, null);
      P(r, v),
        P(r, m),
        P(m, z),
        P(r, T),
        P(r, Q),
        H || ((E = Be(m, "click", n[8])), (H = !0));
    },
    p(I, [ue]) {
      if (
        (B === (B = F(I)) && K
          ? K.p(I, ue)
          : (K.d(1), (K = B(I)), K && (K.c(), K.m(r, o))),
        ue & 515)
      ) {
        W = new Array(I[1]);
        let le;
        for (le = 0; le < W.length; le += 1) {
          const ye = mt(I, W, le);
          J[le]
            ? J[le].p(ye, ue)
            : ((J[le] = wt(ye)), J[le].c(), J[le].m(s, null));
        }
        for (; le < J.length; le += 1) J[le].d(1);
        J.length = W.length;
      }
      ue & 64 &&
        p !== (p = "age-dropdown " + I[6] + " svelte-6hz7uh") &&
        y(s, "class", p),
        ue & 16 && Pe(z, I[4]),
        ue & 128 &&
          D !== (D = "std-input currAge " + I[7] + " svelte-6hz7uh") &&
          y(m, "class", D);
    },
    i: fe,
    o: fe,
    d(I) {
      I && ne(e), K.d(), Et(J, I), (H = !1), E();
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
    T = "";
  const Q = () => {
      r(6, (D = "age-dropdown-display"));
    },
    H = (F) => {
      r(6, (D = " ")),
        r(5, (z = F)),
        r(7, (T = "selected")),
        r(4, (m = F.toString()));
    },
    E = (F) => H(F + o);
  return (
    (n.$$set = (F) => {
      "startAt" in F && r(0, (o = F.startAt)),
        "endAt" in F && r(1, (s = F.endAt)),
        "req" in F && r(2, (p = F.req)),
        "name" in F && r(3, (v = F.name));
    }),
    [o, s, p, v, m, z, D, T, Q, H, E]
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
      (e = U("input")),
        y(e, "type", n[0]),
        y(e, "maxlength", n[1]),
        y(e, "class", "std-input svelte-m5ayyr"),
        y(e, "placeholder", n[3]);
    },
    m(r, o) {
      oe(r, e, o);
    },
    p(r, o) {
      o & 1 && y(e, "type", r[0]),
        o & 2 && y(e, "maxlength", r[1]),
        o & 8 && y(e, "placeholder", r[3]);
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
      (e = U("input")),
        y(e, "type", n[0]),
        y(e, "maxlength", n[1]),
        y(e, "class", "std-input svelte-m5ayyr"),
        y(e, "placeholder", n[3]),
        y(e, "name", n[4]),
        (e.required = !0);
    },
    m(r, o) {
      oe(r, e, o);
    },
    p(r, o) {
      o & 1 && y(e, "type", r[0]),
        o & 2 && y(e, "maxlength", r[1]),
        o & 8 && y(e, "placeholder", r[3]),
        o & 16 && y(e, "name", r[4]);
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
      (e = U("div")),
        v.c(),
        (r = ee()),
        (o = U("div")),
        (o.innerHTML =
          '<svg viewBox="0 0 356 9"><path d="M3 5.7072C50.1565 5.7072 97.3247 5.92723 144.48 5.64704C193.917 5.3533 243.309 3.75524 292.749 3.51136C312.837 3.41227 332.909 3 353 3" stroke="#5B7FFF" stroke-width="5" stroke-linecap="round"></path></svg>'),
        y(o, "class", "svg-wrapper svelte-m5ayyr"),
        y(e, "class", "input-wrapper svelte-m5ayyr");
    },
    m(m, z) {
      oe(m, e, z), v.m(e, null), P(e, r), P(e, o);
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
      (e = U("div")),
        (r = U("button")),
        (o = U("p")),
        (s = je(n[0])),
        (p = ee()),
        (v = U("div")),
        (v.innerHTML =
          '<svg viewBox="0 0 191 35" class="svelte-rfq1y2"><path d="M4 22C14.7653 21.8634 25.1907 20.1563 35.8958 19.5041C54.9562 18.3428 73.8543 17.0602 93.0115 17.0081C122.189 16.9288 150.937 17.427 180 18.6721" stroke="url(#paint0_linear_132_202)" stroke-width="7" stroke-linecap="round" fill="none"></path><path d="M164.688 4C171.006 9.97648 178.82 15.2879 186.002 20.1614C188.733 22.0144 181.609 22.9838 180.927 23.1282C174.088 24.5758 168.588 27.2683 162.58 30.7014" stroke="url(#paint1_linear_132_202)" stroke-width="7" stroke-linecap="round" fill="none"></path><defs><linearGradient id="paint0_linear_132_202" x1="4" y1="22" x2="242.5" y2="20" gradientUnits="userSpaceOnUse"><stop stop-color="#04FED1"></stop><stop offset="1" stop-color="#1400FF"></stop></linearGradient><linearGradient id="paint1_linear_132_202" x1="183.5" y1="19" x2="156.5" y2="18" gradientUnits="userSpaceOnUse"><stop stop-color="#04FED1"></stop><stop offset="1" stop-color="#0E5CEE"></stop></linearGradient></defs></svg>'),
        y(o, "class", "std-gradient-text svelte-rfq1y2"),
        y(r, "class", "std-button button svelte-rfq1y2"),
        y(r, "type", n[1]),
        y(v, "class", "svg-wrapper svelte-rfq1y2"),
        y(e, "class", "btn-wrapper svelte-rfq1y2");
    },
    m(D, T) {
      oe(D, e, T),
        P(e, r),
        P(r, o),
        P(o, s),
        P(e, p),
        P(e, v),
        m || ((z = Be(e, "click", n[3])), (m = !0));
    },
    p(D, [T]) {
      T & 1 && Pe(s, D[0]), T & 2 && y(r, "type", D[1]);
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
      (e = U("div")),
        (e.innerHTML = `<span class="std-icon std-bkg button-icon svelte-14gr5tj"></span> 
  <button class="button std-button svelte-14gr5tj"><p class="std-gradient-text svelte-14gr5tj">Back</p></button>`),
        y(
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
      (e = U("div")),
        (r = U("p")),
        (o = je(n[0])),
        y(
          r,
          "class",
          (s = "std-text " + n[2] + " " + n[1] + " " + n[3] + " svelte-1st4p0n")
        ),
        y(e, "class", "text-wrapper svelte-1st4p0n");
    },
    m(p, v) {
      oe(p, e, v), P(e, r), P(r, o);
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
          y(r, "class", s);
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
      (e = U("div")),
        (r = U("button")),
        (o = U("p")),
        (s = je(n[0])),
        (p = ee()),
        (v = U("div")),
        (v.innerHTML =
          '<svg viewBox="0 0 360 23" fill="none" class="svelte-aw7cmk"><path d="M5.05737 11.8052C15.8539 11.8052 26.6505 11.8052 37.447 11.8052C46.2264 11.8052 54.6199 14.5048 63.1682 14.6631C79.0741 14.9577 94.9942 13.8239 110.8 15.8275C123.986 17.499 140.758 18.3589 153.457 14.4514C168.671 9.77022 182.26 6.74168 198.442 6.14234C233.438 4.84623 268.69 6.08942 303.709 6.08942C314.311 6.08942 324.914 6.08942 335.516 6.08942C338.642 6.08942 341.221 7.8294 344.196 7.99469C347.577 8.18255 351.033 8.94733 354.675 8.94733" stroke="url(#paint0_linear_156_9)" stroke-width="10" stroke-linecap="round"></path><defs><linearGradient id="paint0_linear_156_9" x1="-22" y1="16.9998" x2="422" y2="5.99987" gradientUnits="userSpaceOnUse"><stop stop-color="#04FED1"></stop><stop offset="1" stop-color="#1400FF"></stop></linearGradient></defs></svg>'),
        y(o, "class", "std-gradient-text svelte-aw7cmk"),
        y(r, "class", "std-button button svelte-aw7cmk"),
        y(r, "type", n[1]),
        y(v, "class", "svg-wrapper svelte-aw7cmk"),
        y(e, "class", "btn-wrapper svelte-aw7cmk");
    },
    m(D, T) {
      oe(D, e, T),
        P(e, r),
        P(r, o),
        P(o, s),
        P(e, p),
        P(e, v),
        m || ((z = Be(e, "click", n[3])), (m = !0));
    },
    p(D, [T]) {
      T & 1 && Pe(s, D[0]), T & 2 && y(r, "type", D[1]);
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
      (e = U("input")),
        y(e, "type", "text"),
        y(e, "class", "hidden-input svelte-ez9gmy"),
        (e.value = n[4]),
        y(e, "name", n[2]);
    },
    m(r, o) {
      oe(r, e, o);
    },
    p(r, o) {
      o & 16 && e.value !== r[4] && (e.value = r[4]),
        o & 4 && y(e, "name", r[2]);
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
      (e = U("input")),
        y(e, "type", "text"),
        y(e, "class", "hidden-input svelte-ez9gmy"),
        (e.value = n[4]),
        y(e, "name", n[2]),
        (e.required = !0);
    },
    m(r, o) {
      oe(r, e, o);
    },
    p(r, o) {
      o & 16 && e.value !== r[4] && (e.value = r[4]),
        o & 4 && y(e, "name", r[2]);
    },
    d(r) {
      r && ne(e);
    },
  };
}
function yr(n) {
  let e, r, o, s, p, v, m, z, D, T, Q, H, E, F, B;
  (m = new qt({ props: { text: n[0] } })), m.$on("action", n[7]);
  function K(I, ue) {
    return I[1] ? _r : wr;
  }
  let W = K(n),
    J = W(n);
  return {
    c() {
      (e = U("div")),
        (r = U("div")),
        (o = U("img")),
        (p = ee()),
        (v = U("div")),
        ve(m.$$.fragment),
        (z = ee()),
        (D = U("input")),
        (T = ee()),
        J.c(),
        (Q = ee()),
        (H = U("canvas")),
        tt(o.src, (s = n[3])) || y(o, "src", s),
        y(o, "alt", br),
        y(o, "class", "photo-preview svelte-ez9gmy"),
        y(r, "class", "image-wrapper svelte-ez9gmy"),
        y(v, "class", "button-wrapper svelte-ez9gmy"),
        y(D, "type", "file"),
        y(D, "id", "img-input"),
        y(D, "accept", "image/*"),
        y(D, "class", "idden-input"),
        y(D, "name", "original_image"),
        y(H, "id", "canvas"),
        y(H, "class", "hidden"),
        y(e, "class", "input-wrapper svelte-ez9gmy");
    },
    m(I, ue) {
      oe(I, e, ue),
        P(e, r),
        P(r, o),
        P(e, p),
        P(e, v),
        he(m, v, null),
        P(e, z),
        P(e, D),
        P(e, T),
        J.m(e, null),
        P(e, Q),
        P(e, H),
        (E = !0),
        F || ((B = [Be(o, "load", n[6]), Be(D, "change", n[5])]), (F = !0));
    },
    p(I, [ue]) {
      (!E || (ue & 8 && !tt(o.src, (s = I[3])))) && y(o, "src", s);
      const le = {};
      ue & 1 && (le.text = I[0]),
        m.$set(le),
        W === (W = K(I)) && J
          ? J.p(I, ue)
          : (J.d(1), (J = W(I)), J && (J.c(), J.m(e, Q)));
    },
    i(I) {
      E || (re(m.$$.fragment, I), (E = !0));
    },
    o(I) {
      se(m.$$.fragment, I), (E = !1);
    },
    d(I) {
      I && ne(e), pe(m), J.d(), (F = !1), He(B);
    },
  };
}
let br = "content";
function kr(n, e, r) {
  const o = Ge();
  let { btnText: s = "" } = e,
    { defaultImgSource: p = "" } = e,
    { req: v = !0 } = e,
    { name: m } = e,
    z = p,
    D = "",
    T,
    Q;
  dt(() => {
    (T = document.getElementById("canvas")),
      (Q = document.getElementById("img-input"));
  });
  const H = async (B) => {
      const K = URL.createObjectURL(B.target.files[0]);
      r(3, (z = K));
    },
    E = (B) => {
      const K = B.path[0].currentSrc,
        W = 400 / B.target.width;
      (T.width = 400), (T.height = B.target.height * W);
      const J = T.getContext("2d");
      J.drawImage(B.target, 0, 0, T.width, T.height);
      const I = J.canvas.toDataURL(B.target, "image/jpg");
      r(4, (D = I)), K.includes(p) || o("uploadDone");
    },
    F = () => {
      Q.click();
    };
  return (
    (n.$$set = (B) => {
      "btnText" in B && r(0, (s = B.btnText)),
        "defaultImgSource" in B && r(8, (p = B.defaultImgSource)),
        "req" in B && r(1, (v = B.req)),
        "name" in B && r(2, (m = B.name));
    }),
    [s, v, m, z, D, H, E, F, p]
  );
}
class xr extends qe {
  constructor(e) {
    super(),
      Se(this, e, kr, yr, Ae, {
        btnText: 0,
        defaultImgSource: 8,
        req: 1,
        name: 2,
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
        se(e.$$.fragment, m),
          se(o.$$.fragment, m),
          se(p.$$.fragment, m),
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
        (e = U("div")),
          ve(r.$$.fragment),
          y(e, "class", "button-wrapper_fwd svelte-xesjdc");
      },
      m(s, p) {
        oe(s, e, p), he(r, e, null), (o = !0);
      },
      p: fe,
      i(s) {
        o || (re(r.$$.fragment, s), (o = !0));
      },
      o(s) {
        se(r.$$.fragment, s), (o = !1);
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
        (e = U("div")),
          ve(r.$$.fragment),
          y(e, "class", "button-wrapper_fwd svelte-xesjdc");
      },
      m(s, p) {
        oe(s, e, p), he(r, e, null), (o = !0);
      },
      p: fe,
      i(s) {
        o || (re(r.$$.fragment, s), (o = !0));
      },
      o(s) {
        se(r.$$.fragment, s), (o = !1);
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
        (e = U("div")),
          ve(r.$$.fragment),
          y(e, "class", "button-wrapper_bkwd svelte-xesjdc");
      },
      m(s, p) {
        oe(s, e, p), he(r, e, null), (o = !0);
      },
      p: fe,
      i(s) {
        o || (re(r.$$.fragment, s), (o = !0));
      },
      o(s) {
        se(r.$$.fragment, s), (o = !1);
      },
      d(s) {
        s && ne(e), pe(r);
      },
    }
  );
}
function Cr(n) {
  let e,
    r,
    o,
    s,
    p,
    v,
    m,
    z,
    D,
    T,
    Q,
    H,
    E,
    F,
    B,
    K,
    W,
    J,
    I,
    ue,
    le,
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
    N;
  (s = new Ue({
    props: { placeholder: "first name", req: !0, name: "first_name" },
  })),
    (v = new Ue({
      props: { placeholder: "last name", req: !0, name: "last_name" },
    })),
    (z = new ir({ props: { startAt: 4, endAt: 11, name: "age" } })),
    (T = new vt({
      props: {
        inputValues: { first: "male", second: "female" },
        valueLabel: { first: "m", second: "f" },
        label: "gender",
        name: "gender",
      },
    })),
    (F = new Ue({
      props: {
        placeholder: "first name",
        req: !0,
        name: "guardian_first_name",
      },
    })),
    (K = new Ue({
      props: { placeholder: "last name", req: !0, name: "guardian_last_name" },
    })),
    (J = new Ue({
      props: {
        placeholder: "phone number",
        type: "phone",
        name: "guardian_phone_number",
      },
    })),
    (ue = new ht({
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
  let ae = n[2] && _t();
  (ge = new xr({
    props: {
      defaultImgSource: "images/icons/profile.png",
      btnText: "submit photo",
      name: "photo",
    },
  })),
    ge.$on("uploadDone", n[10]);
  let _ = n[3] && n[0] === 2 && yt(n),
    t = n[0] < 2 && bt(n),
    a = n[0] > 0 && kt(n);
  return {
    c() {
      (e = U("div")),
        (r = U("form")),
        (o = U("div")),
        ve(s.$$.fragment),
        (p = ee()),
        ve(v.$$.fragment),
        (m = ee()),
        ve(z.$$.fragment),
        (D = ee()),
        ve(T.$$.fragment),
        (H = ee()),
        (E = U("div")),
        ve(F.$$.fragment),
        (B = ee()),
        ve(K.$$.fragment),
        (W = ee()),
        ve(J.$$.fragment),
        (I = ee()),
        ve(ue.$$.fragment),
        (le = ee()),
        ve(ye.$$.fragment),
        (Ie = ee()),
        ae && ae.c(),
        (Ce = ee()),
        (Oe = U("div")),
        (De = U("div")),
        ve(ge.$$.fragment),
        (S = ee()),
        _ && _.c(),
        (k = ee()),
        (C = U("div")),
        (w = ee()),
        (A = U("div")),
        (O = ee()),
        t && t.c(),
        (j = ee()),
        a && a.c(),
        y(
          o,
          "class",
          (Q =
            "form-section-wrapper initial " +
            n[1] +
            " " +
            n[4].first +
            " svelte-xesjdc")
        ),
        y(
          E,
          "class",
          (xe =
            "form-section-wrapper " +
            n[1] +
            " " +
            n[4].second +
            " svelte-xesjdc")
        ),
        y(De, "class", "input-image-wrapper svelte-xesjdc"),
        y(
          Oe,
          "class",
          (M =
            "form-section-wrapper " +
            n[1] +
            " " +
            n[4].third +
            " svelte-xesjdc")
        ),
        y(r, "class", "registration-form std-flex-justify-start svelte-xesjdc"),
        y(r, "id", "form"),
        y(C, "class", "std-spacer-xl"),
        y(A, "class", "std-spacer-xl"),
        y(e, "class", "form-wrapper svelte-xesjdc");
    },
    m(i, u) {
      oe(i, e, u),
        P(e, r),
        P(r, o),
        he(s, o, null),
        P(o, p),
        he(v, o, null),
        P(o, m),
        he(z, o, null),
        P(o, D),
        he(T, o, null),
        P(r, H),
        P(r, E),
        he(F, E, null),
        P(E, B),
        he(K, E, null),
        P(E, W),
        he(J, E, null),
        P(E, I),
        he(ue, E, null),
        P(E, le),
        he(ye, E, null),
        P(E, Ie),
        ae && ae.m(E, null),
        P(r, Ce),
        P(r, Oe),
        P(Oe, De),
        he(ge, De, null),
        P(r, S),
        _ && _.m(r, null),
        P(e, k),
        P(e, C),
        P(e, w),
        P(e, A),
        P(e, O),
        t && t.m(e, null),
        P(e, j),
        a && a.m(e, null),
        (N = !0);
    },
    p(i, [u]) {
      (!N ||
        (u & 18 &&
          Q !==
            (Q =
              "form-section-wrapper initial " +
              i[1] +
              " " +
              i[4].first +
              " svelte-xesjdc"))) &&
        y(o, "class", Q),
        i[2]
          ? ae
            ? u & 4 && re(ae, 1)
            : ((ae = _t()), ae.c(), re(ae, 1), ae.m(E, null))
          : ae &&
            (Ve(),
            se(ae, 1, 1, () => {
              ae = null;
            }),
            We()),
        (!N ||
          (u & 18 &&
            xe !==
              (xe =
                "form-section-wrapper " +
                i[1] +
                " " +
                i[4].second +
                " svelte-xesjdc"))) &&
          y(E, "class", xe),
        (!N ||
          (u & 18 &&
            M !==
              (M =
                "form-section-wrapper " +
                i[1] +
                " " +
                i[4].third +
                " svelte-xesjdc"))) &&
          y(Oe, "class", M),
        i[3] && i[0] === 2
          ? _
            ? (_.p(i, u), u & 9 && re(_, 1))
            : ((_ = yt(i)), _.c(), re(_, 1), _.m(r, null))
          : _ &&
            (Ve(),
            se(_, 1, 1, () => {
              _ = null;
            }),
            We()),
        i[0] < 2
          ? t
            ? (t.p(i, u), u & 1 && re(t, 1))
            : ((t = bt(i)), t.c(), re(t, 1), t.m(e, j))
          : t &&
            (Ve(),
            se(t, 1, 1, () => {
              t = null;
            }),
            We()),
        i[0] > 0
          ? a
            ? (a.p(i, u), u & 1 && re(a, 1))
            : ((a = kt(i)), a.c(), re(a, 1), a.m(e, null))
          : a &&
            (Ve(),
            se(a, 1, 1, () => {
              a = null;
            }),
            We());
    },
    i(i) {
      N ||
        (re(s.$$.fragment, i),
        re(v.$$.fragment, i),
        re(z.$$.fragment, i),
        re(T.$$.fragment, i),
        re(F.$$.fragment, i),
        re(K.$$.fragment, i),
        re(J.$$.fragment, i),
        re(ue.$$.fragment, i),
        re(ye.$$.fragment, i),
        re(ae),
        re(ge.$$.fragment, i),
        re(_),
        re(t),
        re(a),
        (N = !0));
    },
    o(i) {
      se(s.$$.fragment, i),
        se(v.$$.fragment, i),
        se(z.$$.fragment, i),
        se(T.$$.fragment, i),
        se(F.$$.fragment, i),
        se(K.$$.fragment, i),
        se(J.$$.fragment, i),
        se(ue.$$.fragment, i),
        se(ye.$$.fragment, i),
        se(ae),
        se(ge.$$.fragment, i),
        se(_),
        se(t),
        se(a),
        (N = !1);
    },
    d(i) {
      i && ne(e),
        pe(s),
        pe(v),
        pe(z),
        pe(T),
        pe(F),
        pe(K),
        pe(J),
        pe(ue),
        pe(ye),
        ae && ae.d(),
        pe(ge),
        _ && _.d(),
        t && t.d(),
        a && a.d();
    },
  };
}
function Ar(n, e, r) {
  const o = Ge();
  let { currentTitle: s = "child" } = e,
    p = 0,
    v = "",
    m = !0,
    z = !1,
    D = { first: "display", second: "", third: "" },
    T;
  dt(() => {
    (T = document.getElementsByTagName("input")),
      document.getElementById("form");
  });
  const Q = (W) => {
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
    H = () => {
      switch ((Q(p + 1), r(0, (p += 1)), r(1, (v = "swapfwd")), p)) {
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
      switch ((Q(p - 1), r(0, (p -= 1)), r(1, (v = "swapbkwd")), p)) {
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
    F = (W) => {
      const J = W.detail.option;
      console.log("event", J), J === 1 ? r(2, (m = !0)) : r(2, (m = !1));
    },
    B = async () => {
      const W = { first_name: "" };
      for (let I = 0; I < T.length; I++) {
        if (!T[I].value) {
          alert("Please make sure all fields are filled out!");
          return;
        }
        W[T[I].name] = T[I].value;
      }
      const J = await Vt("/kids/register", W);
      J.id &&
        ((W.id = J.id), o("registration_success", W), r(9, (s = W.first_name)));
    },
    K = () => r(3, (z = !0));
  return (
    (n.$$set = (W) => {
      "currentTitle" in W && r(9, (s = W.currentTitle));
    }),
    [p, v, m, z, D, H, E, F, B, s, K]
  );
}
class Sr extends qe {
  constructor(e) {
    super(), Se(this, e, Ar, Cr, Ae, { currentTitle: 9 });
  }
}
function xt(n) {
  let e,
    r = n[0].toUpperCase() + "",
    o;
  return {
    c() {
      (e = U("h1")), (o = je(r)), y(e, "class", "svelte-1j89jsw");
    },
    m(s, p) {
      oe(s, e, p), P(e, o);
    },
    p(s, p) {
      p & 1 && r !== (r = s[0].toUpperCase() + "") && Pe(o, r);
    },
    d(s) {
      s && ne(e);
    },
  };
}
function qr(n) {
  let e,
    r,
    o,
    s = n[0] && xt(n);
  return {
    c() {
      (e = U("div")),
        s && s.c(),
        (r = ee()),
        (o = U("div")),
        (o.innerHTML =
          '<svg viewBox="0 0 276 13" class="svelte-1j89jsw"><path d="M3 9.84148C49.0795 9.84148 95.0854 7.94865 141.138 6.68027C184.608 5.48299 228.464 6.59909 271.85 3.26175C279.217 2.69508 257.073 3.22499 249.685 3.22499C216.222 3.22499 182.76 3.22499 149.298 3.22499C115.269 3.22499 81.2036 3.04069 47.1834 3.96015C40.0086 4.15407 32.8123 4.40673 25.7166 5.57752C23.8476 5.88591 22.6842 6.03683 21.5262 7.19488" stroke="url(#paint0_linear_132_110)" stroke-width="5" stroke-linecap="round" fill="none"></path><defs><linearGradient id="paint0_linear_132_110" x1="22.5" y1="5.99992" x2="292.5" y2="14.4999" gradientUnits="userSpaceOnUse"><stop stop-color="#04FED1"></stop><stop offset="1" stop-color="#1400FF"></stop></linearGradient></defs></svg>'),
        y(o, "class", "svg-wrapper svelte-1j89jsw"),
        y(e, "class", "title-wrapper svelte-1j89jsw");
    },
    m(p, v) {
      oe(p, e, v), s && s.m(e, null), P(e, r), P(e, o);
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
function Mr(n, e, r) {
  let { title: o = "" } = e;
  return (
    (n.$$set = (s) => {
      "title" in s && r(0, (o = s.title));
    }),
    [o]
  );
}
class Or extends qe {
  constructor(e) {
    super(), Se(this, e, Mr, qr, Ae, { title: 0 });
  }
}
function zr(n) {
  let e, r, o;
  return {
    c() {
      (e = U("div")),
        (r = U("img")),
        tt(r.src, (o = n[1])) || y(r, "src", o),
        y(r, "alt", n[0]),
        y(r, "class", "std-img"),
        y(e, "class", "image-wrapper svelte-1kfmfwi");
    },
    m(s, p) {
      oe(s, e, p), P(e, r);
    },
    p(s, [p]) {
      p & 2 && !tt(r.src, (o = s[1])) && y(r, "src", o),
        p & 1 && y(r, "alt", s[0]);
    },
    i: fe,
    o: fe,
    d(s) {
      s && ne(e);
    },
  };
}
function Dr(n, e, r) {
  let { alt: o = "" } = e,
    { src: s = "" } = e;
  return (
    (n.$$set = (p) => {
      "alt" in p && r(0, (o = p.alt)), "src" in p && r(1, (s = p.src));
    }),
    [o, s]
  );
}
class Ir extends qe {
  constructor(e) {
    super(), Se(this, e, Dr, zr, Ae, { alt: 0, src: 1 });
  }
}
function jr(n) {
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
                var T = function (M, S) {
                  var k = M,
                    C = K[S],
                    w = null,
                    A = 0,
                    O = null,
                    j = [],
                    N = {},
                    ae = function (c, d) {
                      (w = (function (l) {
                        for (var g = new Array(l), b = 0; b < l; b += 1) {
                          g[b] = new Array(l);
                          for (var L = 0; L < l; L += 1) g[b][L] = null;
                        }
                        return g;
                      })((A = 4 * k + 17))),
                        _(0, 0),
                        _(A - 7, 0),
                        _(0, A - 7),
                        a(),
                        t(),
                        u(c, d),
                        k >= 7 && i(c),
                        O == null && (O = f(k, C, j)),
                        h(O, d);
                    },
                    _ = function (c, d) {
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
                            for (var L = -2; L <= 2; L += 1)
                              for (var R = -2; R <= 2; R += 1)
                                w[g + L][b + R] =
                                  L == -2 ||
                                  L == 2 ||
                                  R == -2 ||
                                  R == 2 ||
                                  (L == 0 && R == 0);
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
                    h = function (c, d) {
                      for (
                        var l = -1,
                          g = A - 1,
                          b = 7,
                          L = 0,
                          R = W.getMaskFunction(d),
                          q = A - 1;
                        q > 0;
                        q -= 2
                      )
                        for (q == 6 && (q -= 1); ; ) {
                          for (var G = 0; G < 2; G += 1)
                            if (w[g][q - G] == null) {
                              var X = !1;
                              L < c.length && (X = ((c[L] >>> b) & 1) == 1),
                                R(g, q - G) && (X = !X),
                                (w[g][q - G] = X),
                                (b -= 1) == -1 && ((L += 1), (b = 7));
                            }
                          if ((g += l) < 0 || A <= g) {
                            (g -= l), (l = -l);
                            break;
                          }
                        }
                    },
                    f = function (c, d, l) {
                      for (
                        var g = ue.getRSBlocks(c, d), b = le(), L = 0;
                        L < l.length;
                        L += 1
                      ) {
                        var R = l[L];
                        b.put(R.getMode(), 4),
                          b.put(
                            R.getLength(),
                            W.getLengthInBits(R.getMode(), c)
                          ),
                          R.write(b);
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
                      return (function (G, X) {
                        for (
                          var Z = 0,
                            ce = 0,
                            V = 0,
                            $ = new Array(X.length),
                            Y = new Array(X.length),
                            te = 0;
                          te < X.length;
                          te += 1
                        ) {
                          var ze = X[te].dataCount,
                            me = X[te].totalCount - ze;
                          (ce = Math.max(ce, ze)),
                            (V = Math.max(V, me)),
                            ($[te] = new Array(ze));
                          for (var ie = 0; ie < $[te].length; ie += 1)
                            $[te][ie] = 255 & G.getBuffer()[ie + Z];
                          Z += ze;
                          var we = W.getErrorCorrectPolynomial(me),
                            de = I($[te], we.getLength() - 1).mod(we);
                          for (
                            Y[te] = new Array(we.getLength() - 1), ie = 0;
                            ie < Y[te].length;
                            ie += 1
                          ) {
                            var _e = ie + de.getLength() - Y[te].length;
                            Y[te][ie] = _e >= 0 ? de.getAt(_e) : 0;
                          }
                        }
                        var be = 0;
                        for (ie = 0; ie < X.length; ie += 1)
                          be += X[ie].totalCount;
                        var ke = new Array(be),
                          Me = 0;
                        for (ie = 0; ie < ce; ie += 1)
                          for (te = 0; te < X.length; te += 1)
                            ie < $[te].length &&
                              ((ke[Me] = $[te][ie]), (Me += 1));
                        for (ie = 0; ie < V; ie += 1)
                          for (te = 0; te < X.length; te += 1)
                            ie < Y[te].length &&
                              ((ke[Me] = Y[te][ie]), (Me += 1));
                        return ke;
                      })(b, g);
                    };
                  (N.addData = function (c, d) {
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
                    (N.isDark = function (c, d) {
                      if (c < 0 || A <= c || d < 0 || A <= d) throw c + "," + d;
                      return w[c][d];
                    }),
                    (N.getModuleCount = function () {
                      return A;
                    }),
                    (N.make = function () {
                      if (k < 1) {
                        for (var c = 1; c < 40; c++) {
                          for (
                            var d = ue.getRSBlocks(c, C), l = le(), g = 0;
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
                          var L = 0;
                          for (g = 0; g < d.length; g++) L += d[g].dataCount;
                          if (l.getLengthInBits() <= 8 * L) break;
                        }
                        k = c;
                      }
                      ae(
                        !1,
                        (function () {
                          for (var R = 0, q = 0, G = 0; G < 8; G += 1) {
                            ae(!0, G);
                            var X = W.getLostPoint(N);
                            (G == 0 || R > X) && ((R = X), (q = G));
                          }
                          return q;
                        })()
                      );
                    }),
                    (N.createTableTag = function (c, d) {
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
                      for (var g = 0; g < N.getModuleCount(); g += 1) {
                        l += "<tr>";
                        for (var b = 0; b < N.getModuleCount(); b += 1)
                          (l += '<td style="'),
                            (l += " border-width: 0px; border-style: none;"),
                            (l += " border-collapse: collapse;"),
                            (l += " padding: 0px; margin: 0px;"),
                            (l += " width: " + c + "px;"),
                            (l += " height: " + c + "px;"),
                            (l += " background-color: "),
                            (l += N.isDark(g, b) ? "#000000" : "#ffffff"),
                            (l += ";"),
                            (l += '"/>');
                        l += "</tr>";
                      }
                      return (l += "</tbody>") + "</table>";
                    }),
                    (N.createSvgTag = function (c, d, l, g) {
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
                      var L,
                        R,
                        q,
                        G,
                        X = N.getModuleCount() * c + 2 * d,
                        Z = "";
                      for (
                        G =
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
                          R = 0;
                        R < N.getModuleCount();
                        R += 1
                      )
                        for (
                          q = R * c + d, L = 0;
                          L < N.getModuleCount();
                          L += 1
                        )
                          N.isDark(R, L) &&
                            (Z += "M" + (L * c + d) + "," + q + G);
                      return (
                        (Z += '" stroke="transparent" fill="black"/>') +
                        "</svg>"
                      );
                    }),
                    (N.createDataURL = function (c, d) {
                      (c = c || 2), (d = d === void 0 ? 4 * c : d);
                      var l = N.getModuleCount() * c + 2 * d,
                        g = d,
                        b = l - d;
                      return ge(l, l, function (L, R) {
                        if (g <= L && L < b && g <= R && R < b) {
                          var q = Math.floor((L - g) / c),
                            G = Math.floor((R - g) / c);
                          return N.isDark(G, q) ? 0 : 1;
                        }
                        return 1;
                      });
                    }),
                    (N.createImgTag = function (c, d, l) {
                      (c = c || 2), (d = d === void 0 ? 4 * c : d);
                      var g = N.getModuleCount() * c + 2 * d,
                        b = "";
                      return (
                        (b += "<img"),
                        (b += ' src="'),
                        (b += N.createDataURL(c, d)),
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
                    (N.createASCII = function (c, d) {
                      if ((c = c || 1) < 2)
                        return (function ($) {
                          $ = $ === void 0 ? 2 : $;
                          var Y,
                            te,
                            ze,
                            me,
                            ie,
                            we = 1 * N.getModuleCount() + 2 * $,
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
                          for (Y = 0; Y < we; Y += 2) {
                            for (
                              ze = Math.floor((Y - de) / 1),
                                me = Math.floor((Y + 1 - de) / 1),
                                te = 0;
                              te < we;
                              te += 1
                            )
                              (ie = "\u2588"),
                                de <= te &&
                                  te < _e &&
                                  de <= Y &&
                                  Y < _e &&
                                  N.isDark(ze, Math.floor((te - de) / 1)) &&
                                  (ie = " "),
                                de <= te &&
                                te < _e &&
                                de <= Y + 1 &&
                                Y + 1 < _e &&
                                N.isDark(me, Math.floor((te - de) / 1))
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
                        })(d);
                      (c -= 1), (d = d === void 0 ? 2 * c : d);
                      var l,
                        g,
                        b,
                        L,
                        R = N.getModuleCount() * c + 2 * d,
                        q = d,
                        G = R - d,
                        X = Array(c + 1).join("\u2588\u2588"),
                        Z = Array(c + 1).join("  "),
                        ce = "",
                        V = "";
                      for (l = 0; l < R; l += 1) {
                        for (
                          b = Math.floor((l - q) / c), V = "", g = 0;
                          g < R;
                          g += 1
                        )
                          (L = 1),
                            q <= g &&
                              g < G &&
                              q <= l &&
                              l < G &&
                              N.isDark(b, Math.floor((g - q) / c)) &&
                              (L = 0),
                            (V += L ? X : Z);
                        for (b = 0; b < c; b += 1)
                          ce +=
                            V +
                            `
`;
                      }
                      return ce.substring(0, ce.length - 1);
                    }),
                    (N.renderTo2dContext = function (c, d) {
                      d = d || 2;
                      for (var l = N.getModuleCount(), g = 0; g < l; g++)
                        for (var b = 0; b < l; b++)
                          (c.fillStyle = N.isDark(g, b) ? "black" : "white"),
                            c.fillRect(g * d, b * d, d, d);
                    }),
                    N
                  );
                };
                (T.stringToBytes = (T.stringToBytesFuncs = {
                  default: function (M) {
                    for (var S = [], k = 0; k < M.length; k += 1) {
                      var C = M.charCodeAt(k);
                      S.push(255 & C);
                    }
                    return S;
                  },
                }).default),
                  (T.createStringToBytes = function (M, S) {
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
                          var N = w.read();
                          if (N == -1) break;
                          var ae = A(),
                            _ = (A() << 8) | A();
                          (j[String.fromCharCode((N << 8) | ae)] = _), (O += 1);
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
                          var N = k[w.charAt(O)];
                          typeof N == "number"
                            ? (255 & N) == N
                              ? A.push(N)
                              : (A.push(N >>> 8), A.push(255 & N))
                            : A.push(C);
                        }
                      }
                      return A;
                    };
                  });
                var Q,
                  H,
                  E,
                  F,
                  B,
                  K = { L: 1, M: 0, Q: 3, H: 2 },
                  W =
                    ((Q = [
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
                    (H = 1335),
                    (E = 7973),
                    (B = function (M) {
                      for (var S = 0; M != 0; ) (S += 1), (M >>>= 1);
                      return S;
                    }),
                    ((F = {}).getBCHTypeInfo = function (M) {
                      for (var S = M << 10; B(S) - B(H) >= 0; )
                        S ^= H << (B(S) - B(H));
                      return 21522 ^ ((M << 10) | S);
                    }),
                    (F.getBCHTypeNumber = function (M) {
                      for (var S = M << 12; B(S) - B(E) >= 0; )
                        S ^= E << (B(S) - B(E));
                      return (M << 12) | S;
                    }),
                    (F.getPatternPosition = function (M) {
                      return Q[M - 1];
                    }),
                    (F.getMaskFunction = function (M) {
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
                    (F.getErrorCorrectPolynomial = function (M) {
                      for (var S = I([1], 0), k = 0; k < M; k += 1)
                        S = S.multiply(I([1, J.gexp(k)], 0));
                      return S;
                    }),
                    (F.getLengthInBits = function (M, S) {
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
                    (F.getLostPoint = function (M) {
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
                              for (var N = -1; N <= 1; N += 1)
                                w + N < 0 ||
                                  S <= w + N ||
                                  (j == 0 && N == 0) ||
                                  (O == M.isDark(C + j, w + N) && (A += 1));
                          A > 5 && (k += 3 + A - 5);
                        }
                      for (C = 0; C < S - 1; C += 1)
                        for (w = 0; w < S - 1; w += 1) {
                          var ae = 0;
                          M.isDark(C, w) && (ae += 1),
                            M.isDark(C + 1, w) && (ae += 1),
                            M.isDark(C, w + 1) && (ae += 1),
                            M.isDark(C + 1, w + 1) && (ae += 1),
                            (ae != 0 && ae != 4) || (k += 3);
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
                      var _ = 0;
                      for (w = 0; w < S; w += 1)
                        for (C = 0; C < S; C += 1) M.isDark(C, w) && (_ += 1);
                      return k + (Math.abs((100 * _) / S / S - 50) / 5) * 10;
                    }),
                    F),
                  J = (function () {
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
                            A[O + j] ^= J.gexp(
                              J.glog(C.getAt(O)) + J.glog(w.getAt(j))
                            );
                        return I(A, 0);
                      },
                      mod: function (w) {
                        if (C.getLength() - w.getLength() < 0) return C;
                        for (
                          var A = J.glog(C.getAt(0)) - J.glog(w.getAt(0)),
                            O = new Array(C.getLength()),
                            j = 0;
                          j < C.getLength();
                          j += 1
                        )
                          O[j] = C.getAt(j);
                        for (j = 0; j < w.getLength(); j += 1)
                          O[j] ^= J.gexp(J.glog(w.getAt(j)) + A);
                        return I(O, 0).mod(w);
                      },
                    };
                  return C;
                }
                var ue = (function () {
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
                              case K.L:
                                return M[4 * (i - 1) + 0];
                              case K.M:
                                return M[4 * (i - 1) + 1];
                              case K.Q:
                                return M[4 * (i - 1) + 2];
                              case K.H:
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
                            var O = A.length / 3, j = [], N = 0;
                            N < O;
                            N += 1
                          )
                            for (
                              var ae = A[3 * N + 0],
                                _ = A[3 * N + 1],
                                t = A[3 * N + 2],
                                a = 0;
                              a < ae;
                              a += 1
                            )
                              j.push(S(_, t));
                          return j;
                        },
                      };
                    return k;
                  })(),
                  le = function () {
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
                    var S = T.stringToBytes(M);
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
                    var S = T.stringToBytesFuncs.SJIS;
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
                          var N = (C >>> (w - 8)) & 255;
                          return (w -= 8), N;
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
                      var C = (function (_, t) {
                          var a = _,
                            i = t,
                            u = new Array(_ * t),
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
                                  L = 0;
                                L < d;
                                L += 1
                              )
                                b.add(String.fromCharCode(L));
                              b.add(String.fromCharCode(d)),
                                b.add(String.fromCharCode(l));
                              var R,
                                q,
                                G,
                                X = Oe(),
                                Z =
                                  ((R = X),
                                  (q = 0),
                                  (G = 0),
                                  {
                                    write: function (Y, te) {
                                      if (Y >>> te != 0) throw "length over";
                                      for (; q + te >= 8; )
                                        R.writeByte(255 & ((Y << q) | G)),
                                          (te -= 8 - q),
                                          (Y >>>= 8 - q),
                                          (G = 0),
                                          (q = 0);
                                      (G |= Y << q), (q += te);
                                    },
                                    flush: function () {
                                      q > 0 && R.writeByte(G);
                                    },
                                  });
                              Z.write(d, g);
                              var ce = 0,
                                V = String.fromCharCode(u[ce]);
                              for (ce += 1; ce < u.length; ) {
                                var $ = String.fromCharCode(u[ce]);
                                (ce += 1),
                                  b.contains(V + $)
                                    ? (V += $)
                                    : (Z.write(b.indexOf(V), g),
                                      b.size() < 4095 &&
                                        (b.size() == 1 << g && (g += 1),
                                        b.add(V + $)),
                                      (V = $));
                              }
                              return (
                                Z.write(b.indexOf(V), g),
                                Z.write(l, g),
                                Z.flush(),
                                X.toByteArray()
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
                          var _ = 0,
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
                                _ = (_ << 8) | (255 & x), t += 8, a += 1;
                                t >= 6;

                              )
                                h(_ >>> (t - 6)), (t -= 6);
                            }),
                            (u.flush = function () {
                              if (
                                (t > 0 && (h(_ << (6 - t)), (_ = 0), (t = 0)),
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
                        N = O.toByteArray(),
                        ae = 0;
                      ae < N.length;
                      ae += 1
                    )
                      j.writeByte(N[ae]);
                    return j.flush(), "data:image/gif;base64," + j;
                  };
                return T;
              })();
            (D.stringToBytesFuncs["UTF-8"] = function (T) {
              return (function (Q) {
                for (var H = [], E = 0; E < Q.length; E++) {
                  var F = Q.charCodeAt(E);
                  F < 128
                    ? H.push(F)
                    : F < 2048
                    ? H.push(192 | (F >> 6), 128 | (63 & F))
                    : F < 55296 || F >= 57344
                    ? H.push(
                        224 | (F >> 12),
                        128 | ((F >> 6) & 63),
                        128 | (63 & F)
                      )
                    : (E++,
                      (F =
                        65536 +
                        (((1023 & F) << 10) | (1023 & Q.charCodeAt(E)))),
                      H.push(
                        240 | (F >> 18),
                        128 | ((F >> 12) & 63),
                        128 | ((F >> 6) & 63),
                        128 | (63 & F)
                      ));
                }
                return H;
              })(T);
            }),
              (z =
                typeof (m = function () {
                  return D;
                }) == "function"
                  ? m.apply(v, [])
                  : m) === void 0 || (p.exports = z);
          },
          676: (p, v, m) => {
            m.d(v, { default: () => ae });
            var z = function () {
                return (z =
                  Object.assign ||
                  function (_) {
                    for (var t, a = 1, i = arguments.length; a < i; a++)
                      for (var u in (t = arguments[a]))
                        Object.prototype.hasOwnProperty.call(t, u) &&
                          (_[u] = t[u]);
                    return _;
                  }).apply(this, arguments);
              },
              D = function () {
                for (var _ = 0, t = 0, a = arguments.length; t < a; t++)
                  _ += arguments[t].length;
                var i = Array(_),
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
              T = function (_) {
                return !!_ && typeof _ == "object" && !Array.isArray(_);
              };
            function Q(_) {
              for (var t = [], a = 1; a < arguments.length; a++)
                t[a - 1] = arguments[a];
              if (!t.length) return _;
              var i = t.shift();
              return i !== void 0 && T(_) && T(i)
                ? ((_ = z({}, _)),
                  Object.keys(i).forEach(function (u) {
                    var h = _[u],
                      f = i[u];
                    Array.isArray(h) && Array.isArray(f)
                      ? (_[u] = f)
                      : T(h) && T(f)
                      ? (_[u] = Q(Object.assign({}, h), f))
                      : (_[u] = f);
                  }),
                  Q.apply(void 0, D([_], t)))
                : _;
            }
            function H(_, t) {
              var a = document.createElement("a");
              (a.download = t),
                (a.href = _),
                document.body.appendChild(a),
                a.click(),
                document.body.removeChild(a);
            }
            function E(_) {
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
                    function b(L) {
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
                            } catch (G) {
                              (q = [6, G]), (c = 0);
                            } finally {
                              x = d = 0;
                            }
                          if (5 & q[0]) throw q[1];
                          return { value: q[0] ? q[1] : void 0, done: !0 };
                        })([L, R]);
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
                          x.open("GET", _),
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
            const F = { L: 0.07, M: 0.15, Q: 0.25, H: 0.3 };
            var B = function () {
              return (B =
                Object.assign ||
                function (_) {
                  for (var t, a = 1, i = arguments.length; a < i; a++)
                    for (var u in (t = arguments[a]))
                      Object.prototype.hasOwnProperty.call(t, u) &&
                        (_[u] = t[u]);
                  return _;
                }).apply(this, arguments);
            };
            const K = (function () {
              function _(t) {
                var a = t.svg,
                  i = t.type;
                (this._svg = a), (this._type = i);
              }
              return (
                (_.prototype.draw = function (t, a, i, u) {
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
                (_.prototype._rotateFigure = function (t) {
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
                (_.prototype._basicDot = function (t) {
                  var a = this,
                    i = t.size,
                    u = t.x,
                    h = t.y;
                  this._rotateFigure(
                    B(B({}, t), {
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
                (_.prototype._basicSquare = function (t) {
                  var a = this,
                    i = t.size,
                    u = t.x,
                    h = t.y;
                  this._rotateFigure(
                    B(B({}, t), {
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
                (_.prototype._basicSideRounded = function (t) {
                  var a = this,
                    i = t.size,
                    u = t.x,
                    h = t.y;
                  this._rotateFigure(
                    B(B({}, t), {
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
                (_.prototype._basicCornerRounded = function (t) {
                  var a = this,
                    i = t.size,
                    u = t.x,
                    h = t.y;
                  this._rotateFigure(
                    B(B({}, t), {
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
                (_.prototype._basicCornerExtraRounded = function (t) {
                  var a = this,
                    i = t.size,
                    u = t.x,
                    h = t.y;
                  this._rotateFigure(
                    B(B({}, t), {
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
                (_.prototype._basicCornersRounded = function (t) {
                  var a = this,
                    i = t.size,
                    u = t.x,
                    h = t.y;
                  this._rotateFigure(
                    B(B({}, t), {
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
                (_.prototype._drawDot = function (t) {
                  var a = t.x,
                    i = t.y,
                    u = t.size;
                  this._basicDot({ x: a, y: i, size: u, rotation: 0 });
                }),
                (_.prototype._drawSquare = function (t) {
                  var a = t.x,
                    i = t.y,
                    u = t.size;
                  this._basicSquare({ x: a, y: i, size: u, rotation: 0 });
                }),
                (_.prototype._drawRounded = function (t) {
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
                (_.prototype._drawExtraRounded = function (t) {
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
                (_.prototype._drawClassy = function (t) {
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
                (_.prototype._drawClassyRounded = function (t) {
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
                _
              );
            })();
            var W = function () {
              return (W =
                Object.assign ||
                function (_) {
                  for (var t, a = 1, i = arguments.length; a < i; a++)
                    for (var u in (t = arguments[a]))
                      Object.prototype.hasOwnProperty.call(t, u) &&
                        (_[u] = t[u]);
                  return _;
                }).apply(this, arguments);
            };
            const J = (function () {
              function _(t) {
                var a = t.svg,
                  i = t.type;
                (this._svg = a), (this._type = i);
              }
              return (
                (_.prototype.draw = function (t, a, i, u) {
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
                (_.prototype._rotateFigure = function (t) {
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
                (_.prototype._basicDot = function (t) {
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
                (_.prototype._basicSquare = function (t) {
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
                (_.prototype._basicExtraRounded = function (t) {
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
                (_.prototype._drawDot = function (t) {
                  var a = t.x,
                    i = t.y,
                    u = t.size,
                    h = t.rotation;
                  this._basicDot({ x: a, y: i, size: u, rotation: h });
                }),
                (_.prototype._drawSquare = function (t) {
                  var a = t.x,
                    i = t.y,
                    u = t.size,
                    h = t.rotation;
                  this._basicSquare({ x: a, y: i, size: u, rotation: h });
                }),
                (_.prototype._drawExtraRounded = function (t) {
                  var a = t.x,
                    i = t.y,
                    u = t.size,
                    h = t.rotation;
                  this._basicExtraRounded({ x: a, y: i, size: u, rotation: h });
                }),
                _
              );
            })();
            var I = function () {
              return (I =
                Object.assign ||
                function (_) {
                  for (var t, a = 1, i = arguments.length; a < i; a++)
                    for (var u in (t = arguments[a]))
                      Object.prototype.hasOwnProperty.call(t, u) &&
                        (_[u] = t[u]);
                  return _;
                }).apply(this, arguments);
            };
            const ue = (function () {
                function _(t) {
                  var a = t.svg,
                    i = t.type;
                  (this._svg = a), (this._type = i);
                }
                return (
                  (_.prototype.draw = function (t, a, i, u) {
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
                  (_.prototype._rotateFigure = function (t) {
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
                  (_.prototype._basicDot = function (t) {
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
                  (_.prototype._basicSquare = function (t) {
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
                  (_.prototype._drawDot = function (t) {
                    var a = t.x,
                      i = t.y,
                      u = t.size,
                      h = t.rotation;
                    this._basicDot({ x: a, y: i, size: u, rotation: h });
                  }),
                  (_.prototype._drawSquare = function (t) {
                    var a = t.x,
                      i = t.y,
                      u = t.size,
                      h = t.rotation;
                    this._basicSquare({ x: a, y: i, size: u, rotation: h });
                  }),
                  _
                );
              })(),
              le = "circle";
            var ye = function (_, t, a, i) {
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
                  c((i = i.apply(_, t || [])).next());
                });
              },
              Ie = function (_, t) {
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
                          l = t.call(_, f);
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
                function _(t) {
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
                  Object.defineProperty(_.prototype, "width", {
                    get: function () {
                      return this._options.width;
                    },
                    enumerable: !1,
                    configurable: !0,
                  }),
                  Object.defineProperty(_.prototype, "height", {
                    get: function () {
                      return this._options.height;
                    },
                    enumerable: !1,
                    configurable: !0,
                  }),
                  (_.prototype.getElement = function () {
                    return this._element;
                  }),
                  (_.prototype.drawQR = function (t) {
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
                      return Ie(this, function (L) {
                        switch (L.label) {
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
                                this._options.shape === le
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
                            if ((L.sent(), !this._image)) return [2];
                            (x = this._options),
                              (c = x.imageOptions),
                              (d = x.qrOptions),
                              (l = c.imageSize * F[d.errorCorrectionLevel]),
                              (g = Math.floor(l * a * a)),
                              (f = (function (R) {
                                var q = R.originalHeight,
                                  G = R.originalWidth,
                                  X = R.maxHiddenDots,
                                  Z = R.maxHiddenAxisDots,
                                  ce = R.dotSize,
                                  V = { x: 0, y: 0 },
                                  $ = { x: 0, y: 0 };
                                if (q <= 0 || G <= 0 || X <= 0 || ce <= 0)
                                  return {
                                    height: 0,
                                    width: 0,
                                    hideYDots: 0,
                                    hideXDots: 0,
                                  };
                                var Y = q / G;
                                return (
                                  (V.x = Math.floor(Math.sqrt(X / Y))),
                                  V.x <= 0 && (V.x = 1),
                                  Z && Z < V.x && (V.x = Z),
                                  V.x % 2 == 0 && V.x--,
                                  ($.x = V.x * ce),
                                  (V.y = 1 + 2 * Math.ceil((V.x * Y - 1) / 2)),
                                  ($.y = Math.round($.x * Y)),
                                  (V.y * V.x > X || (Z && Z < V.y)) &&
                                    (Z && Z < V.y
                                      ? ((V.y = Z), V.y % 2 == 0 && V.x--)
                                      : (V.y -= 2),
                                    ($.y = V.y * ce),
                                    (V.x =
                                      1 + 2 * Math.ceil((V.y / Y - 1) / 2)),
                                    ($.x = Math.round($.y / Y))),
                                  {
                                    height: $.y,
                                    width: $.x,
                                    hideYDots: V.y,
                                    hideXDots: V.x,
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
                              this.drawDots(function (R, q) {
                                var G, X, Z, ce, V, $;
                                return !(
                                  (b._options.imageOptions.hideBackgroundDots &&
                                    R >= (a - f.hideXDots) / 2 &&
                                    R < (a + f.hideXDots) / 2 &&
                                    q >= (a - f.hideYDots) / 2 &&
                                    q < (a + f.hideYDots) / 2) ||
                                  ((G = xe[R]) === null || G === void 0
                                    ? void 0
                                    : G[q]) ||
                                  ((X = xe[R - a + 7]) === null || X === void 0
                                    ? void 0
                                    : X[q]) ||
                                  ((Z = xe[R]) === null || Z === void 0
                                    ? void 0
                                    : Z[q - a + 7]) ||
                                  ((ce = Ce[R]) === null || ce === void 0
                                    ? void 0
                                    : ce[q]) ||
                                  ((V = Ce[R - a + 7]) === null || V === void 0
                                    ? void 0
                                    : V[q]) ||
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
                            L.sent(), (L.label = 4);
                          case 4:
                            return [2];
                        }
                      });
                    });
                  }),
                  (_.prototype.drawBackground = function () {
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
                  (_.prototype.drawDots = function (t) {
                    var a,
                      i,
                      u = this;
                    if (!this._qr) throw "QR code is not defined";
                    var h = this._options,
                      f = this._qr.getModuleCount();
                    if (f > h.width || f > h.height)
                      throw "The canvas is too small.";
                    var x = Math.min(h.width, h.height) - 2 * h.margin,
                      c = h.shape === le ? x / Math.sqrt(2) : x,
                      d = Math.floor(c / f),
                      l = Math.floor((h.width - f * d) / 2),
                      g = Math.floor((h.height - f * d) / 2),
                      b = new K({
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
                      L(q);
                    if (h.shape === le) {
                      var G = Math.floor((x / d - f) / 2),
                        X = f + 2 * G,
                        Z = l - G * d,
                        ce = g - G * d,
                        V = [],
                        $ = Math.floor(X / 2);
                      for (q = 0; q < X; q++) {
                        V[q] = [];
                        for (var Y = 0; Y < X; Y++)
                          (q >= G - 1 &&
                            q <= X - G &&
                            Y >= G - 1 &&
                            Y <= X - G) ||
                          Math.sqrt((q - $) * (q - $) + (Y - $) * (Y - $)) > $
                            ? (V[q][Y] = 0)
                            : (V[q][Y] = this._qr.isDark(
                                Y - 2 * G < 0 ? Y : Y >= f ? Y - 2 * G : Y - G,
                                q - 2 * G < 0 ? q : q >= f ? q - 2 * G : q - G
                              )
                                ? 1
                                : 0);
                      }
                      var te = function (me) {
                          for (
                            var ie = function (de) {
                                if (!V[me][de]) return "continue";
                                b.draw(
                                  Z + me * d,
                                  ce + de * d,
                                  d,
                                  function (_e, be) {
                                    var ke;
                                    return !!(
                                      !(
                                        (ke = V[me + _e]) === null ||
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
                            we < X;
                            we++
                          )
                            ie(we);
                        },
                        ze = this;
                      for (q = 0; q < X; q++) te(q);
                    }
                  }),
                  (_.prototype.drawCorners = function () {
                    var t = this;
                    if (!this._qr) throw "QR code is not defined";
                    var a = this._element,
                      i = this._options;
                    if (!a) throw "Element code is not defined";
                    var u = this._qr.getModuleCount(),
                      h = Math.min(i.width, i.height) - 2 * i.margin,
                      f = i.shape === le ? h / Math.sqrt(2) : h,
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
                      var L,
                        R,
                        q,
                        G,
                        X,
                        Z,
                        ce,
                        V,
                        $,
                        Y,
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
                        ((((L = i.cornersSquareOptions) === null || L === void 0
                          ? void 0
                          : L.gradient) ||
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
                              (G = i.cornersSquareOptions) === null ||
                              G === void 0
                                ? void 0
                                : G.color,
                            additionalRotation: we,
                            x: de,
                            y: _e,
                            height: c,
                            width: c,
                            name: "corners-square-color-" + me + "-" + ie,
                          })),
                        (X = i.cornersSquareOptions) === null || X === void 0
                          ? void 0
                          : X.type)
                      ) {
                        var Me = new J({
                          svg: t._element,
                          type: i.cornersSquareOptions.type,
                        });
                        Me.draw(de, _e, c, we),
                          Me._element && be && be.appendChild(Me._element);
                      } else
                        for (
                          var Fe = new K({
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
                          ((V = i.cornersDotOptions) === null || V === void 0
                            ? void 0
                            : V.color)) &&
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
                              (Y = i.cornersDotOptions) === null || Y === void 0
                                ? void 0
                                : Y.color,
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
                        var rt = new ue({
                          svg: t._element,
                          type: i.cornersDotOptions.type,
                        });
                        rt.draw(de + 2 * x, _e + 2 * x, d, we),
                          rt._element && ke && ke.appendChild(rt._element);
                      } else {
                        Fe = new K({
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
                  (_.prototype.loadImage = function () {
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
                  (_.prototype.drawImage = function (t) {
                    var a = t.width,
                      i = t.height,
                      u = t.count,
                      h = t.dotSize;
                    return ye(this, void 0, void 0, function () {
                      var f, x, c, d, l, g, b, L, R;
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
                              (L = document.createElementNS(
                                "http://www.w3.org/2000/svg",
                                "image"
                              )).setAttribute("x", String(d)),
                              L.setAttribute("y", String(l)),
                              L.setAttribute("width", g + "px"),
                              L.setAttribute("height", b + "px"),
                              [4, E(f.image || "")]
                            );
                          case 1:
                            return (
                              (R = q.sent()),
                              L.setAttribute("href", R || ""),
                              this._element.appendChild(L),
                              [2]
                            );
                        }
                      });
                    });
                  }),
                  (_.prototype._createColor = function (t) {
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
                        var L = ((a.rotation || 0) + u) % (2 * Math.PI),
                          R = (L + 2 * Math.PI) % (2 * Math.PI),
                          q = h + c / 2,
                          G = f + x / 2,
                          X = h + c / 2,
                          Z = f + x / 2;
                        (R >= 0 && R <= 0.25 * Math.PI) ||
                        (R > 1.75 * Math.PI && R <= 2 * Math.PI)
                          ? ((q -= c / 2),
                            (G -= (x / 2) * Math.tan(L)),
                            (X += c / 2),
                            (Z += (x / 2) * Math.tan(L)))
                          : R > 0.25 * Math.PI && R <= 0.75 * Math.PI
                          ? ((G -= x / 2),
                            (q -= c / 2 / Math.tan(L)),
                            (Z += x / 2),
                            (X += c / 2 / Math.tan(L)))
                          : R > 0.75 * Math.PI && R <= 1.25 * Math.PI
                          ? ((q += c / 2),
                            (G += (x / 2) * Math.tan(L)),
                            (X -= c / 2),
                            (Z -= (x / 2) * Math.tan(L)))
                          : R > 1.25 * Math.PI &&
                            R <= 1.75 * Math.PI &&
                            ((G += x / 2),
                            (q += c / 2 / Math.tan(L)),
                            (Z -= x / 2),
                            (X -= c / 2 / Math.tan(L))),
                          (b = document.createElementNS(
                            "http://www.w3.org/2000/svg",
                            "linearGradient"
                          )).setAttribute("id", d),
                          b.setAttribute("gradientUnits", "userSpaceOnUse"),
                          b.setAttribute("x1", String(Math.round(q))),
                          b.setAttribute("y1", String(Math.round(G))),
                          b.setAttribute("x2", String(Math.round(X))),
                          b.setAttribute("y2", String(Math.round(Z)));
                      }
                      a.colorStops.forEach(function (ce) {
                        var V = ce.offset,
                          $ = ce.color,
                          Y = document.createElementNS(
                            "http://www.w3.org/2000/svg",
                            "stop"
                          );
                        Y.setAttribute("offset", 100 * V + "%"),
                          Y.setAttribute("stop-color", $),
                          b.appendChild(Y);
                      }),
                        g.setAttribute("fill", "url('#" + d + "')"),
                        this._defs.appendChild(b);
                    } else i && g.setAttribute("fill", i);
                    this._element.appendChild(g);
                  }),
                  _
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
                function (_) {
                  for (var t, a = 1, i = arguments.length; a < i; a++)
                    for (var u in (t = arguments[a]))
                      Object.prototype.hasOwnProperty.call(t, u) &&
                        (_[u] = t[u]);
                  return _;
                }).apply(this, arguments);
            };
            function C(_) {
              var t = k({}, _);
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
            function w(_) {
              var t = k({}, _);
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
              j = function (_, t, a, i) {
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
                  c((i = i.apply(_, t || [])).next());
                });
              },
              N = function (_, t) {
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
                          l = t.call(_, f);
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
            const ae = (function () {
              function _(t) {
                (this._options = t ? w(Q(S, t)) : S), this.update();
              }
              return (
                (_._clearContainer = function (t) {
                  t && (t.innerHTML = "");
                }),
                (_.prototype._setupSvg = function () {
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
                (_.prototype._setupCanvas = function () {
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
                (_.prototype._getElement = function (t) {
                  return (
                    t === void 0 && (t = "png"),
                    j(this, void 0, void 0, function () {
                      return N(this, function (a) {
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
                (_.prototype.update = function (t) {
                  _._clearContainer(this._container),
                    (this._options = t
                      ? w(Q(this._options, t))
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
                (_.prototype.append = function (t) {
                  if (t) {
                    if (typeof t.appendChild != "function")
                      throw "Container should be a single DOM node";
                    this._options.type === De
                      ? this._canvas && t.appendChild(this._canvas)
                      : this._svg && t.appendChild(this._svg),
                      (this._container = t);
                  }
                }),
                (_.prototype.applyExtension = function (t) {
                  if (!t) throw "Extension function should be defined.";
                  (this._extension = t), this.update();
                }),
                (_.prototype.deleteExtension = function () {
                  (this._extension = void 0), this.update();
                }),
                (_.prototype.getRawData = function (t) {
                  return (
                    t === void 0 && (t = "png"),
                    j(this, void 0, void 0, function () {
                      var a, i, u;
                      return N(this, function (h) {
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
                (_.prototype.download = function (t) {
                  return j(this, void 0, void 0, function () {
                    var a, i, u, h, f;
                    return N(this, function (x) {
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
                                  H(
                                    "data:image/svg+xml;charset=utf-8," +
                                      encodeURIComponent(f),
                                    i + ".svg"
                                  ))
                                : H(u.toDataURL("image/" + a), i + "." + a),
                              [2])
                            : [2];
                      }
                    });
                  });
                }),
                _
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
var Er = jr(Mt.exports);
function Br(n) {
  let e, r, o, s, p, v, m, z, D, T, Q;
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
    (T = new ft({ props: { text: "Done" } })),
    T.$on("action", n[14]),
    {
      c() {
        (e = U("div")),
          (r = U("div")),
          (o = ee()),
          ve(s.$$.fragment),
          (p = ee()),
          (v = U("div")),
          ve(m.$$.fragment),
          (z = ee()),
          (D = U("div")),
          ve(T.$$.fragment),
          y(r, "class", "qrcode std-flex-column svelte-po5xvs"),
          y(r, "id", "canvas"),
          y(v, "class", "donload-btn-wrapper svelte-po5xvs"),
          y(D, "class", "next-btn-wrapper svelte-po5xvs"),
          y(e, "class", "qrcode-wrapper");
      },
      m(H, E) {
        oe(H, e, E),
          P(e, r),
          P(e, o),
          he(s, e, null),
          P(e, p),
          P(e, v),
          he(m, v, null),
          P(e, z),
          P(e, D),
          he(T, D, null),
          (Q = !0);
      },
      p: fe,
      i(H) {
        Q ||
          (re(s.$$.fragment, H),
          re(m.$$.fragment, H),
          re(T.$$.fragment, H),
          (Q = !0));
      },
      o(H) {
        se(s.$$.fragment, H),
          se(m.$$.fragment, H),
          se(T.$$.fragment, H),
          (Q = !1);
      },
      d(H) {
        H && ne(e), pe(s), pe(m), pe(T);
      },
    }
  );
}
function Pr(n, e, r) {
  let { childId: o } = e,
    { organizationId: s } = e,
    { width: p = 300 } = e,
    { height: v = 300 } = e,
    { dotGradientOne: m = "#000000" } = e,
    { dotGradientTwo: z = "#000000" } = e,
    { image: D = "" } = e,
    { bkgColor: T = "#FFFFFF" } = e,
    { dotType: Q = "rounded" } = e,
    { cornerSqColor: H = "rounded" } = e,
    { cornerSqType: E = "rounded" } = e,
    { cornerDotColor: F = "rounded" } = e,
    { cornerDotType: B = "rounded" } = e;
  const K = new Er({
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
        type: Q,
      },
      backgroundOptions: { color: T },
      imageOptions: { crossOrigin: "anonymous", margin: 5 },
      cornersSquareOptions: { color: H, type: E },
      cornersDotOptions: { color: F, type: B },
    }),
    W = () => {
      K.download({ extension: "png" });
    };
  dt(() => {
    K.append(document.getElementById("canvas"));
  });
  const J = () => {
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
        "bkgColor" in I && r(8, (T = I.bkgColor)),
        "dotType" in I && r(9, (Q = I.dotType)),
        "cornerSqColor" in I && r(10, (H = I.cornerSqColor)),
        "cornerSqType" in I && r(11, (E = I.cornerSqType)),
        "cornerDotColor" in I && r(12, (F = I.cornerDotColor)),
        "cornerDotType" in I && r(13, (B = I.cornerDotType));
    }),
    [W, o, s, p, v, m, z, D, T, Q, H, E, F, B, J]
  );
}
class Fr extends qe {
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
function Lr(n) {
  let e, r;
  return (
    (e = new Fr({
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
        se(e.$$.fragment, o), (r = !1);
      },
      d(o) {
        pe(e, o);
      },
    }
  );
}
function Tr(n) {
  let e, r, o;
  function s(v) {
    n[4](v);
  }
  let p = {};
  return (
    n[0] !== void 0 && (p.currentTitle = n[0]),
    (e = new Sr({ props: p })),
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
        se(e.$$.fragment, v), (o = !1);
      },
      d(v) {
        pe(e, v);
      },
    }
  );
}
function Rr(n) {
  let e, r, o, s, p, v, m, z, D;
  (r = new Ir({ props: { src: "/images/logo.png", alt: "kidz quest logo" } })),
    (s = new Or({ props: { title: n[0] } }));
  const T = [Tr, Lr],
    Q = [];
  function H(E, F) {
    return E[2] === 0 ? 0 : E[2] === 1 && E[1] ? 1 : -1;
  }
  return (
    ~(v = H(n)) && (m = Q[v] = T[v](n)),
    {
      c() {
        (e = U("div")),
          ve(r.$$.fragment),
          (o = ee()),
          ve(s.$$.fragment),
          (p = ee()),
          m && m.c(),
          (z = Bt()),
          y(e, "class", "image-wrapper svelte-1oshbwy");
      },
      m(E, F) {
        oe(E, e, F),
          he(r, e, null),
          oe(E, o, F),
          he(s, E, F),
          oe(E, p, F),
          ~v && Q[v].m(E, F),
          oe(E, z, F),
          (D = !0);
      },
      p(E, [F]) {
        const B = {};
        F & 1 && (B.title = E[0]), s.$set(B);
        let K = v;
        (v = H(E)),
          v === K
            ? ~v && Q[v].p(E, F)
            : (m &&
                (Ve(),
                se(Q[K], 1, 1, () => {
                  Q[K] = null;
                }),
                We()),
              ~v
                ? ((m = Q[v]),
                  m ? m.p(E, F) : ((m = Q[v] = T[v](E)), m.c()),
                  re(m, 1),
                  m.m(z.parentNode, z))
                : (m = null));
      },
      i(E) {
        D || (re(r.$$.fragment, E), re(s.$$.fragment, E), re(m), (D = !0));
      },
      o(E) {
        se(r.$$.fragment, E), se(s.$$.fragment, E), se(m), (D = !1);
      },
      d(E) {
        E && ne(e),
          pe(r),
          E && ne(o),
          pe(s, E),
          E && ne(p),
          ~v && Q[v].d(E),
          E && ne(z);
      },
    }
  );
}
function Nr(n, e, r) {
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
class Ur extends qe {
  constructor(e) {
    super(), Se(this, e, Nr, Rr, Ae, {});
  }
}
function Qr(n) {
  let e, r, o, s, p;
  return (
    (e = new Ur({})),
    (s = new Jt({})),
    {
      c() {
        ve(e.$$.fragment),
          (r = ee()),
          (o = U("div")),
          ve(s.$$.fragment),
          y(o, "class", "promo svelte-11lqzr9");
      },
      m(v, m) {
        he(e, v, m), oe(v, r, m), oe(v, o, m), he(s, o, null), (p = !0);
      },
      p: fe,
      i(v) {
        p || (re(e.$$.fragment, v), re(s.$$.fragment, v), (p = !0));
      },
      o(v) {
        se(e.$$.fragment, v), se(s.$$.fragment, v), (p = !1);
      },
      d(v) {
        pe(e, v), v && ne(r), v && ne(o), pe(s);
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
  let e, r, o, s, p;
  return (
    (s = new Hr({})),
    {
      c() {
        (e = U("div")),
          (r = ee()),
          (o = U("main")),
          ve(s.$$.fragment),
          y(e, "class", "background std-bkg svelte-pe2dd9"),
          Ft(e, "background-image", "url('" + Jr + "')"),
          y(o, "class", "main-wrapper svelte-pe2dd9");
      },
      m(v, m) {
        oe(v, e, m), oe(v, r, m), oe(v, o, m), he(s, o, null), (p = !0);
      },
      p: fe,
      i(v) {
        p || (re(s.$$.fragment, v), (p = !0));
      },
      o(v) {
        se(s.$$.fragment, v), (p = !1);
      },
      d(v) {
        v && ne(e), v && ne(r), v && ne(o), pe(s);
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
