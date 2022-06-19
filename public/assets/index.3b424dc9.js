const Dt = function () {
  const e = document.createElement("link").relList;
  if (e && e.supports && e.supports("modulepreload")) return;
  for (const l of document.querySelectorAll('link[rel="modulepreload"]')) a(l);
  new MutationObserver((l) => {
    for (const d of l)
      if (d.type === "childList")
        for (const v of d.addedNodes)
          v.tagName === "LINK" && v.rel === "modulepreload" && a(v);
  }).observe(document, { childList: !0, subtree: !0 });
  function r(l) {
    const d = {};
    return (
      l.integrity && (d.integrity = l.integrity),
      l.referrerpolicy && (d.referrerPolicy = l.referrerpolicy),
      l.crossorigin === "use-credentials"
        ? (d.credentials = "include")
        : l.crossorigin === "anonymous"
        ? (d.credentials = "omit")
        : (d.credentials = "same-origin"),
      d
    );
  }
  function a(l) {
    if (l.ep) return;
    l.ep = !0;
    const d = r(l);
    fetch(l.href, d);
  }
};
Dt();
function pe() {}
function Ct(n) {
  return n();
}
function pt() {
  return Object.create(null);
}
function Ue(n) {
  n.forEach(Ct);
}
function jt(n) {
  return typeof n == "function";
}
function Ae(n, e) {
  return n != n
    ? e == e
    : n !== e || (n && typeof n == "object") || typeof n == "function";
}
let We;
function tt(n, e) {
  return We || (We = document.createElement("a")), (We.href = e), n === We.href;
}
function Pt(n) {
  return Object.keys(n).length === 0;
}
function B(n, e) {
  n.appendChild(e);
}
function ie(n, e, r) {
  n.insertBefore(e, r || null);
}
function re(n) {
  n.parentNode.removeChild(n);
}
function Bt(n, e) {
  for (let r = 0; r < n.length; r += 1) n[r] && n[r].d(e);
}
function G(n) {
  return document.createElement(n);
}
function Pe(n) {
  return document.createTextNode(n);
}
function ee() {
  return Pe(" ");
}
function It() {
  return Pe("");
}
function Ie(n, e, r, a) {
  return n.addEventListener(e, r, a), () => n.removeEventListener(e, r, a);
}
function b(n, e, r) {
  r == null
    ? n.removeAttribute(e)
    : n.getAttribute(e) !== r && n.setAttribute(e, r);
}
function Et(n) {
  return Array.from(n.childNodes);
}
function Ee(n, e) {
  (e = "" + e), n.wholeText !== e && (n.data = e);
}
function Tt(n, e, r, a) {
  r === null
    ? n.style.removeProperty(e)
    : n.style.setProperty(e, r, a ? "important" : "");
}
function Lt(n, e, { bubbles: r = !1, cancelable: a = !1 } = {}) {
  const l = document.createEvent("CustomEvent");
  return l.initCustomEvent(n, r, a, e), l;
}
let Ke;
function Ze(n) {
  Ke = n;
}
function St() {
  if (!Ke) throw new Error("Function called outside component initialization");
  return Ke;
}
function ft(n) {
  St().$$.on_mount.push(n);
}
function Qe() {
  const n = St();
  return (e, r, { cancelable: a = !1 } = {}) => {
    const l = n.$$.callbacks[e];
    if (l) {
      const d = Lt(e, r, { cancelable: a });
      return (
        l.slice().forEach((v) => {
          v.call(n, d);
        }),
        !d.defaultPrevented
      );
    }
    return !0;
  };
}
const Ye = [],
  st = [],
  $e = [],
  lt = [],
  Ft = Promise.resolve();
let ut = !1;
function Rt() {
  ut || ((ut = !0), Ft.then(At));
}
function ct(n) {
  $e.push(n);
}
function Nt(n) {
  lt.push(n);
}
const at = new Set();
let Ve = 0;
function At() {
  const n = Ke;
  do {
    for (; Ve < Ye.length; ) {
      const e = Ye[Ve];
      Ve++, Ze(e), Gt(e.$$);
    }
    for (Ze(null), Ye.length = 0, Ve = 0; st.length; ) st.pop()();
    for (let e = 0; e < $e.length; e += 1) {
      const r = $e[e];
      at.has(r) || (at.add(r), r());
    }
    $e.length = 0;
  } while (Ye.length);
  for (; lt.length; ) lt.pop()();
  (ut = !1), at.clear(), Ze(n);
}
function Gt(n) {
  if (n.fragment !== null) {
    n.update(), Ue(n.before_update);
    const e = n.dirty;
    (n.dirty = [-1]),
      n.fragment && n.fragment.p(n.ctx, e),
      n.after_update.forEach(ct);
  }
}
const et = new Set();
let He;
function Xe() {
  He = { r: 0, c: [], p: He };
}
function Je() {
  He.r || Ue(He.c), (He = He.p);
}
function ne(n, e) {
  n && n.i && (et.delete(n), n.i(e));
}
function se(n, e, r, a) {
  if (n && n.o) {
    if (et.has(n)) return;
    et.add(n),
      He.c.push(() => {
        et.delete(n), a && (r && n.d(1), a());
      }),
      n.o(e);
  }
}
function Ht(n, e, r) {
  const a = n.$$.props[e];
  a !== void 0 && ((n.$$.bound[a] = r), r(n.$$.ctx[a]));
}
function ge(n) {
  n && n.c();
}
function de(n, e, r, a) {
  const { fragment: l, on_mount: d, on_destroy: v, after_update: m } = n.$$;
  l && l.m(e, r),
    a ||
      ct(() => {
        const S = d.map(Ct).filter(jt);
        v ? v.push(...S) : Ue(S), (n.$$.on_mount = []);
      }),
    m.forEach(ct);
}
function he(n, e) {
  const r = n.$$;
  r.fragment !== null &&
    (Ue(r.on_destroy),
    r.fragment && r.fragment.d(e),
    (r.on_destroy = r.fragment = null),
    (r.ctx = []));
}
function Ut(n, e) {
  n.$$.dirty[0] === -1 && (Ye.push(n), Rt(), n.$$.dirty.fill(0)),
    (n.$$.dirty[(e / 31) | 0] |= 1 << e % 31);
}
function Me(n, e, r, a, l, d, v, m = [-1]) {
  const S = Ke;
  Ze(n);
  const M = (n.$$ = {
    fragment: null,
    ctx: null,
    props: d,
    update: pe,
    not_equal: l,
    bound: pt(),
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(e.context || (S ? S.$$.context : [])),
    callbacks: pt(),
    dirty: m,
    skip_bound: !1,
    root: e.target || S.$$.root,
  });
  v && v(M.root);
  let E = !1;
  if (
    ((M.ctx = r
      ? r(n, e.props || {}, (H, U, ...j) => {
          const P = j.length ? j[0] : U;
          return (
            M.ctx &&
              l(M.ctx[H], (M.ctx[H] = P)) &&
              (!M.skip_bound && M.bound[H] && M.bound[H](P), E && Ut(n, H)),
            U
          );
        })
      : []),
    M.update(),
    (E = !0),
    Ue(M.before_update),
    (M.fragment = a ? a(M.ctx) : !1),
    e.target)
  ) {
    if (e.hydrate) {
      const H = Et(e.target);
      M.fragment && M.fragment.l(H), H.forEach(re);
    } else M.fragment && M.fragment.c();
    e.intro && ne(n.$$.fragment),
      de(n, e.target, e.anchor, e.customElement),
      At();
  }
  Ze(S);
}
class qe {
  $destroy() {
    he(this, 1), (this.$destroy = pe);
  }
  $on(e, r) {
    const a = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
    return (
      a.push(r),
      () => {
        const l = a.indexOf(r);
        l !== -1 && a.splice(l, 1);
      }
    );
  }
  $set(e) {
    this.$$set &&
      !Pt(e) &&
      ((this.$$.skip_bound = !0), this.$$set(e), (this.$$.skip_bound = !1));
  }
}
const Qt = async (n, e, r) =>
  await (
    await fetch(n, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(e),
    })
  ).json();
function Yt(n) {
  let e, r, a, l, d, v, m;
  return {
    c() {
      (e = G("input")),
        (l = ee()),
        (d = G("input")),
        b(e, "type", "radio"),
        b(e, "id", "input-option"),
        b(e, "name", "input-option"),
        (e.value = r = n[0].first),
        (e.checked = a = n[5].first),
        b(d, "type", "radio"),
        b(d, "id", "input-option"),
        b(d, "name", "input-option"),
        (d.value = v = n[0].second),
        (d.checked = m = n[5].second);
    },
    m(S, M) {
      ie(S, e, M), ie(S, l, M), ie(S, d, M);
    },
    p(S, M) {
      M & 1 && r !== (r = S[0].first) && (e.value = r),
        M & 32 && a !== (a = S[5].first) && (e.checked = a),
        M & 1 && v !== (v = S[0].second) && (d.value = v),
        M & 32 && m !== (m = S[5].second) && (d.checked = m);
    },
    d(S) {
      S && re(e), S && re(l), S && re(d);
    },
  };
}
function Xt(n) {
  let e, r, a, l, d, v, m;
  return {
    c() {
      (e = G("input")),
        (l = ee()),
        (d = G("input")),
        b(e, "type", "radio"),
        b(e, "id", "input-option"),
        b(e, "name", n[4]),
        (e.value = r = n[0].first),
        (e.checked = a = n[5].first),
        (e.required = !0),
        b(d, "type", "radio"),
        b(d, "id", "input-option"),
        b(d, "name", n[4]),
        (d.value = v = n[0].second),
        (d.checked = m = n[5].second),
        (d.required = !0);
    },
    m(S, M) {
      ie(S, e, M), ie(S, l, M), ie(S, d, M);
    },
    p(S, M) {
      M & 16 && b(e, "name", S[4]),
        M & 1 && r !== (r = S[0].first) && (e.value = r),
        M & 32 && a !== (a = S[5].first) && (e.checked = a),
        M & 16 && b(d, "name", S[4]),
        M & 1 && v !== (v = S[0].second) && (d.value = v),
        M & 32 && m !== (m = S[5].second) && (d.checked = m);
    },
    d(S) {
      S && re(e), S && re(l), S && re(d);
    },
  };
}
function gt(n) {
  let e, r, a;
  return {
    c() {
      (e = G("p")),
        (r = Pe(n[1])),
        (a = Pe(":")),
        b(e, "class", "option-option-label svelte-1gv9u57");
    },
    m(l, d) {
      ie(l, e, d), B(e, r), B(e, a);
    },
    p(l, d) {
      d & 2 && Ee(r, l[1]);
    },
    d(l) {
      l && re(e);
    },
  };
}
function Jt(n) {
  let e,
    r,
    a,
    l,
    d,
    v,
    m,
    S,
    M,
    E = n[2].first + "",
    H,
    U,
    j,
    P,
    L,
    J,
    Z,
    Y,
    D,
    ue,
    le = n[2].second + "",
    _e,
    je,
    ke,
    xe,
    ze,
    De;
  function Ce(_, w) {
    return _[3] ? Xt : Yt;
  }
  let q = Ce(n),
    A = q(n),
    x = n[1] && gt(n);
  return {
    c() {
      (e = G("div")),
        A.c(),
        (r = ee()),
        (a = G("div")),
        x && x.c(),
        (l = ee()),
        (d = G("div")),
        (v = G("span")),
        (S = ee()),
        (M = G("p")),
        (H = Pe(E)),
        (j = ee()),
        (P = G("div")),
        (P.innerHTML =
          '<svg class="svelte-1gv9u57"><path d="M3 5.7072C50.1565 5.7072 97.3247 5.92723 144.48 5.64704C193.917 5.3533 243.309 3.75524 292.749 3.51136C312.837 3.41227 332.909 3 353 3" stroke="#5B7FFF" stroke-width="3" stroke-linecap="round"></path></svg>'),
        (L = ee()),
        (J = G("div")),
        (Z = G("span")),
        (D = ee()),
        (ue = G("p")),
        (_e = Pe(le)),
        (ke = ee()),
        (xe = G("div")),
        (xe.innerHTML =
          '<svg class="svelte-1gv9u57"><path d="M3 5.7072C50.1565 5.7072 97.3247 5.92723 144.48 5.64704C193.917 5.3533 243.309 3.75524 292.749 3.51136C312.837 3.41227 332.909 3 353 3" stroke="#5B7FFF" stroke-width="3" stroke-linecap="round" width="100%" height="100%"></path></svg>'),
        b(e, "class", "input-wrapper svelte-1gv9u57"),
        b(
          v,
          "class",
          (m =
            "std-bkg std-icon option-selected " +
            n[6].first +
            " svelte-1gv9u57")
        ),
        b(M, "class", (U = "option-letter " + n[6].first + " svelte-1gv9u57")),
        b(P, "class", "svg-wrapper svelte-1gv9u57"),
        b(d, "class", "option-option svelte-1gv9u57"),
        b(
          Z,
          "class",
          (Y =
            "std-bkg std-icon option-selected " +
            n[6].second +
            " svelte-1gv9u57")
        ),
        b(
          ue,
          "class",
          (je = "option-letter " + n[6].second + " svelte-1gv9u57")
        ),
        b(xe, "class", "svg-wrapper svelte-1gv9u57"),
        b(J, "class", "option-option svelte-1gv9u57"),
        b(
          a,
          "class",
          "input-interface-wrapper std-flex-justify-start std-flex-align-end std-flex-nowrap svelte-1gv9u57"
        );
    },
    m(_, w) {
      ie(_, e, w),
        A.m(e, null),
        ie(_, r, w),
        ie(_, a, w),
        x && x.m(a, null),
        B(a, l),
        B(a, d),
        B(d, v),
        B(d, S),
        B(d, M),
        B(M, H),
        B(d, j),
        B(d, P),
        B(a, L),
        B(a, J),
        B(J, Z),
        B(J, D),
        B(J, ue),
        B(ue, _e),
        B(J, ke),
        B(J, xe),
        ze || ((De = [Ie(d, "click", n[9]), Ie(J, "click", n[10])]), (ze = !0));
    },
    p(_, [w]) {
      q === (q = Ce(_)) && A
        ? A.p(_, w)
        : (A.d(1), (A = q(_)), A && (A.c(), A.m(e, null))),
        _[1]
          ? x
            ? x.p(_, w)
            : ((x = gt(_)), x.c(), x.m(a, l))
          : x && (x.d(1), (x = null)),
        w & 64 &&
          m !==
            (m =
              "std-bkg std-icon option-selected " +
              _[6].first +
              " svelte-1gv9u57") &&
          b(v, "class", m),
        w & 4 && E !== (E = _[2].first + "") && Ee(H, E),
        w & 64 &&
          U !== (U = "option-letter " + _[6].first + " svelte-1gv9u57") &&
          b(M, "class", U),
        w & 64 &&
          Y !==
            (Y =
              "std-bkg std-icon option-selected " +
              _[6].second +
              " svelte-1gv9u57") &&
          b(Z, "class", Y),
        w & 4 && le !== (le = _[2].second + "") && Ee(_e, le),
        w & 64 &&
          je !== (je = "option-letter " + _[6].second + " svelte-1gv9u57") &&
          b(ue, "class", je);
    },
    i: pe,
    o: pe,
    d(_) {
      _ && re(e), A.d(), _ && re(r), _ && re(a), x && x.d(), (ze = !1), Ue(De);
    },
  };
}
function Zt(n, e, r) {
  const a = Qe();
  let { value: l = { first: "", second: "" } } = e,
    { label: d = "" } = e,
    { valueLabel: v = { first: "", second: "" } } = e;
  const m = null;
  let { req: S = !0 } = e,
    { name: M } = e,
    E = { first: !1, second: !1 },
    H = { first: "", second: "" };
  const U = (L) => {
      L === 1
        ? (r(6, (H = { first: "selected", second: "" })),
          r(5, (E = { first: !0, second: !1 })))
        : (r(6, (H = { first: "", second: "selected" })),
          r(5, (E = { first: !1, second: !0 }))),
        a("action", { option: L });
    },
    j = () => U(1),
    P = () => U(2);
  return (
    (n.$$set = (L) => {
      "value" in L && r(0, (l = L.value)),
        "label" in L && r(1, (d = L.label)),
        "valueLabel" in L && r(2, (v = L.valueLabel)),
        "req" in L && r(3, (S = L.req)),
        "name" in L && r(4, (M = L.name));
    }),
    [l, d, v, S, M, E, H, U, m, j, P]
  );
}
class vt extends qe {
  constructor(e) {
    super(),
      Me(this, e, Zt, Jt, Ae, {
        value: 0,
        label: 1,
        valueLabel: 2,
        action: 8,
        req: 3,
        name: 4,
      });
  }
  get action() {
    return this.$$.ctx[8];
  }
}
function mt(n, e, r) {
  const a = n.slice();
  return (a[11] = e[r]), (a[13] = r), a;
}
function Kt(n) {
  let e;
  return {
    c() {
      (e = G("input")),
        b(e, "type", "number"),
        b(e, "maxlength", "3"),
        b(e, "class", "std-input hidden svelte-6hz7uh"),
        b(e, "id", "hidden-input"),
        b(e, "placeholder", ""),
        (e.value = n[5]);
    },
    m(r, a) {
      ie(r, e, a);
    },
    p(r, a) {
      a & 32 && e.value !== r[5] && (e.value = r[5]);
    },
    d(r) {
      r && re(e);
    },
  };
}
function Wt(n) {
  let e;
  return {
    c() {
      (e = G("input")),
        b(e, "type", "number"),
        b(e, "maxlength", "3"),
        b(e, "class", "std-input hidden svelte-6hz7uh"),
        b(e, "id", "hidden-input"),
        b(e, "placeholder", ""),
        (e.value = n[5]),
        b(e, "name", n[3]),
        (e.required = !0);
    },
    m(r, a) {
      ie(r, e, a);
    },
    p(r, a) {
      a & 32 && e.value !== r[5] && (e.value = r[5]),
        a & 8 && b(e, "name", r[3]);
    },
    d(r) {
      r && re(e);
    },
  };
}
function wt(n) {
  let e,
    r = n[13] + n[0] + "",
    a,
    l,
    d,
    v;
  function m() {
    return n[10](n[13]);
  }
  return {
    c() {
      (e = G("p")),
        (a = Pe(r)),
        (l = ee()),
        b(e, "class", "std-flex-row svelte-6hz7uh");
    },
    m(S, M) {
      ie(S, e, M), B(e, a), B(e, l), d || ((v = Ie(e, "click", m)), (d = !0));
    },
    p(S, M) {
      (n = S), M & 1 && r !== (r = n[13] + n[0] + "") && Ee(a, r);
    },
    d(S) {
      S && re(e), (d = !1), v();
    },
  };
}
function Vt(n) {
  let e, r, a, l, d, v, m, S, M, E, H, U, j;
  function P(D, ue) {
    return D[2] ? Wt : Kt;
  }
  let L = P(n),
    J = L(n),
    Z = new Array(n[1]),
    Y = [];
  for (let D = 0; D < Z.length; D += 1) Y[D] = wt(mt(n, Z, D));
  return {
    c() {
      (e = G("div")), (r = G("div")), J.c(), (a = ee()), (l = G("div"));
      for (let D = 0; D < Y.length; D += 1) Y[D].c();
      (v = ee()),
        (m = G("p")),
        (S = Pe(n[4])),
        (E = ee()),
        (H = G("div")),
        (H.innerHTML =
          '<svg viewBox="0 0 356 9" class="svelte-6hz7uh"><path d="M3 5.7072C50.1565 5.7072 97.3247 5.92723 144.48 5.64704C193.917 5.3533 243.309 3.75524 292.749 3.51136C312.837 3.41227 332.909 3 353 3" stroke="#5B7FFF" stroke-width="20" stroke-linecap="round"></path></svg>'),
        b(l, "class", (d = "age-dropdown " + n[6] + " svelte-6hz7uh")),
        b(m, "class", (M = "std-input currAge " + n[7] + " svelte-6hz7uh")),
        b(H, "class", "svg-wrapper svelte-6hz7uh"),
        b(r, "class", "input-wrapper svelte-6hz7uh"),
        b(e, "class", "main-wrapper svelte-6hz7uh");
    },
    m(D, ue) {
      ie(D, e, ue), B(e, r), J.m(r, null), B(r, a), B(r, l);
      for (let le = 0; le < Y.length; le += 1) Y[le].m(l, null);
      B(r, v),
        B(r, m),
        B(m, S),
        B(r, E),
        B(r, H),
        U || ((j = Ie(m, "click", n[8])), (U = !0));
    },
    p(D, [ue]) {
      if (
        (L === (L = P(D)) && J
          ? J.p(D, ue)
          : (J.d(1), (J = L(D)), J && (J.c(), J.m(r, a))),
        ue & 515)
      ) {
        Z = new Array(D[1]);
        let le;
        for (le = 0; le < Z.length; le += 1) {
          const _e = mt(D, Z, le);
          Y[le]
            ? Y[le].p(_e, ue)
            : ((Y[le] = wt(_e)), Y[le].c(), Y[le].m(l, null));
        }
        for (; le < Y.length; le += 1) Y[le].d(1);
        Y.length = Z.length;
      }
      ue & 64 &&
        d !== (d = "age-dropdown " + D[6] + " svelte-6hz7uh") &&
        b(l, "class", d),
        ue & 16 && Ee(S, D[4]),
        ue & 128 &&
          M !== (M = "std-input currAge " + D[7] + " svelte-6hz7uh") &&
          b(m, "class", M);
    },
    i: pe,
    o: pe,
    d(D) {
      D && re(e), J.d(), Bt(Y, D), (U = !1), j();
    },
  };
}
function $t(n, e, r) {
  let { startAt: a = 0 } = e,
    { endAt: l = 0 } = e,
    { req: d = !0 } = e,
    { name: v } = e,
    m = "age",
    S = null,
    M = "",
    E = "";
  const H = () => {
      r(6, (M = "age-dropdown-display"));
    },
    U = (P) => {
      r(6, (M = " ")),
        r(5, (S = P)),
        r(7, (E = "selected")),
        r(4, (m = P.toString()));
    },
    j = (P) => U(P + 1);
  return (
    (n.$$set = (P) => {
      "startAt" in P && r(0, (a = P.startAt)),
        "endAt" in P && r(1, (l = P.endAt)),
        "req" in P && r(2, (d = P.req)),
        "name" in P && r(3, (v = P.name));
    }),
    [a, l, d, v, m, S, M, E, H, U, j]
  );
}
class er extends qe {
  constructor(e) {
    super(), Me(this, e, $t, Vt, Ae, { startAt: 0, endAt: 1, req: 2, name: 3 });
  }
}
function tr(n) {
  let e;
  return {
    c() {
      (e = G("input")),
        b(e, "type", n[0]),
        b(e, "maxlength", n[1]),
        b(e, "class", "std-input svelte-m5ayyr"),
        b(e, "placeholder", n[3]);
    },
    m(r, a) {
      ie(r, e, a);
    },
    p(r, a) {
      a & 1 && b(e, "type", r[0]),
        a & 2 && b(e, "maxlength", r[1]),
        a & 8 && b(e, "placeholder", r[3]);
    },
    d(r) {
      r && re(e);
    },
  };
}
function rr(n) {
  let e;
  return {
    c() {
      (e = G("input")),
        b(e, "type", n[0]),
        b(e, "maxlength", n[1]),
        b(e, "class", "std-input svelte-m5ayyr"),
        b(e, "placeholder", n[3]),
        b(e, "name", n[4]),
        (e.required = !0);
    },
    m(r, a) {
      ie(r, e, a);
    },
    p(r, a) {
      a & 1 && b(e, "type", r[0]),
        a & 2 && b(e, "maxlength", r[1]),
        a & 8 && b(e, "placeholder", r[3]),
        a & 16 && b(e, "name", r[4]);
    },
    d(r) {
      r && re(e);
    },
  };
}
function nr(n) {
  let e, r, a;
  function l(m, S) {
    return m[2] ? rr : tr;
  }
  let d = l(n),
    v = d(n);
  return {
    c() {
      (e = G("div")),
        v.c(),
        (r = ee()),
        (a = G("div")),
        (a.innerHTML =
          '<svg viewBox="0 0 356 9"><path d="M3 5.7072C50.1565 5.7072 97.3247 5.92723 144.48 5.64704C193.917 5.3533 243.309 3.75524 292.749 3.51136C312.837 3.41227 332.909 3 353 3" stroke="#5B7FFF" stroke-width="5" stroke-linecap="round"></path></svg>'),
        b(a, "class", "svg-wrapper svelte-m5ayyr"),
        b(e, "class", "input-wrapper svelte-m5ayyr");
    },
    m(m, S) {
      ie(m, e, S), v.m(e, null), B(e, r), B(e, a);
    },
    p(m, [S]) {
      d === (d = l(m)) && v
        ? v.p(m, S)
        : (v.d(1), (v = d(m)), v && (v.c(), v.m(e, r)));
    },
    i: pe,
    o: pe,
    d(m) {
      m && re(e), v.d();
    },
  };
}
function ir(n, e, r) {
  let { type: a = "text" } = e,
    { maxLength: l = 140 } = e,
    { req: d = !0 } = e,
    { placeholder: v = "" } = e,
    { name: m } = e;
  return (
    (n.$$set = (S) => {
      "type" in S && r(0, (a = S.type)),
        "maxLength" in S && r(1, (l = S.maxLength)),
        "req" in S && r(2, (d = S.req)),
        "placeholder" in S && r(3, (v = S.placeholder)),
        "name" in S && r(4, (m = S.name));
    }),
    [a, l, d, v, m]
  );
}
class Ge extends qe {
  constructor(e) {
    super(),
      Me(this, e, ir, nr, Ae, {
        type: 0,
        maxLength: 1,
        req: 2,
        placeholder: 3,
        name: 4,
      });
  }
}
function or(n) {
  let e, r, a, l, d, v, m, S;
  return {
    c() {
      (e = G("div")),
        (r = G("button")),
        (a = G("p")),
        (l = Pe(n[0])),
        (d = ee()),
        (v = G("div")),
        (v.innerHTML =
          '<svg viewBox="0 0 191 35" class="svelte-rfq1y2"><path d="M4 22C14.7653 21.8634 25.1907 20.1563 35.8958 19.5041C54.9562 18.3428 73.8543 17.0602 93.0115 17.0081C122.189 16.9288 150.937 17.427 180 18.6721" stroke="url(#paint0_linear_132_202)" stroke-width="7" stroke-linecap="round" fill="none"></path><path d="M164.688 4C171.006 9.97648 178.82 15.2879 186.002 20.1614C188.733 22.0144 181.609 22.9838 180.927 23.1282C174.088 24.5758 168.588 27.2683 162.58 30.7014" stroke="url(#paint1_linear_132_202)" stroke-width="7" stroke-linecap="round" fill="none"></path><defs><linearGradient id="paint0_linear_132_202" x1="4" y1="22" x2="242.5" y2="20" gradientUnits="userSpaceOnUse"><stop stop-color="#04FED1"></stop><stop offset="1" stop-color="#1400FF"></stop></linearGradient><linearGradient id="paint1_linear_132_202" x1="183.5" y1="19" x2="156.5" y2="18" gradientUnits="userSpaceOnUse"><stop stop-color="#04FED1"></stop><stop offset="1" stop-color="#0E5CEE"></stop></linearGradient></defs></svg>'),
        b(a, "class", "std-gradient-text svelte-rfq1y2"),
        b(r, "class", "std-button button svelte-rfq1y2"),
        b(r, "type", n[1]),
        b(v, "class", "svg-wrapper svelte-rfq1y2"),
        b(e, "class", "btn-wrapper svelte-rfq1y2");
    },
    m(M, E) {
      ie(M, e, E),
        B(e, r),
        B(r, a),
        B(a, l),
        B(e, d),
        B(e, v),
        m || ((S = Ie(e, "click", n[3])), (m = !0));
    },
    p(M, [E]) {
      E & 1 && Ee(l, M[0]), E & 2 && b(r, "type", M[1]);
    },
    i: pe,
    o: pe,
    d(M) {
      M && re(e), (m = !1), S();
    },
  };
}
function ar(n, e, r) {
  let { text: a = "" } = e,
    { type: l = "button" } = e;
  const d = Qe(),
    v = () => d("action");
  return (
    (n.$$set = (m) => {
      "text" in m && r(0, (a = m.text)), "type" in m && r(1, (l = m.type));
    }),
    [a, l, d, v]
  );
}
class dt extends qe {
  constructor(e) {
    super(), Me(this, e, ar, or, Ae, { text: 0, type: 1 });
  }
}
function sr(n) {
  let e, r, a;
  return {
    c() {
      (e = G("div")),
        (e.innerHTML = `<span class="std-icon std-bkg button-icon svelte-14gr5tj"></span> 
  <button class="button std-button svelte-14gr5tj"><p class="std-gradient-text svelte-14gr5tj">Back</p></button>`),
        b(
          e,
          "class",
          "btn-wrapper std-flex-row std-flex-nowrap std-flex-justify-between std-flex-align-center svelte-14gr5tj"
        );
    },
    m(l, d) {
      ie(l, e, d), r || ((a = Ie(e, "click", n[1])), (r = !0));
    },
    p: pe,
    i: pe,
    o: pe,
    d(l) {
      l && re(e), (r = !1), a();
    },
  };
}
function lr(n) {
  const e = Qe();
  return [e, () => e("action")];
}
class ur extends qe {
  constructor(e) {
    super(), Me(this, e, lr, sr, Ae, {});
  }
}
function cr(n) {
  let e, r, a, l;
  return {
    c() {
      (e = G("div")),
        (r = G("p")),
        (a = Pe(n[0])),
        b(
          r,
          "class",
          (l = "std-text " + n[2] + " " + n[1] + " " + n[3] + " svelte-1st4p0n")
        ),
        b(e, "class", "text-wrapper svelte-1st4p0n");
    },
    m(d, v) {
      ie(d, e, v), B(e, r), B(r, a);
    },
    p(d, [v]) {
      v & 1 && Ee(a, d[0]),
        v & 14 &&
          l !==
            (l =
              "std-text " +
              d[2] +
              " " +
              d[1] +
              " " +
              d[3] +
              " svelte-1st4p0n") &&
          b(r, "class", l);
    },
    i: pe,
    o: pe,
    d(d) {
      d && re(e);
    },
  };
}
function fr(n, e, r) {
  let { text: a = "" } = e,
    { font: l = "" } = e,
    { align: d = "" } = e,
    { color: v = "" } = e;
  return (
    (n.$$set = (m) => {
      "text" in m && r(0, (a = m.text)),
        "font" in m && r(1, (l = m.font)),
        "align" in m && r(2, (d = m.align)),
        "color" in m && r(3, (v = m.color));
    }),
    [a, l, d, v]
  );
}
class ht extends qe {
  constructor(e) {
    super(), Me(this, e, fr, cr, Ae, { text: 0, font: 1, align: 2, color: 3 });
  }
}
function dr(n) {
  let e, r, a, l, d, v, m, S;
  return {
    c() {
      (e = G("div")),
        (r = G("button")),
        (a = G("p")),
        (l = Pe(n[0])),
        (d = ee()),
        (v = G("div")),
        (v.innerHTML =
          '<svg viewBox="0 0 360 23" fill="none" class="svelte-aw7cmk"><path d="M5.05737 11.8052C15.8539 11.8052 26.6505 11.8052 37.447 11.8052C46.2264 11.8052 54.6199 14.5048 63.1682 14.6631C79.0741 14.9577 94.9942 13.8239 110.8 15.8275C123.986 17.499 140.758 18.3589 153.457 14.4514C168.671 9.77022 182.26 6.74168 198.442 6.14234C233.438 4.84623 268.69 6.08942 303.709 6.08942C314.311 6.08942 324.914 6.08942 335.516 6.08942C338.642 6.08942 341.221 7.8294 344.196 7.99469C347.577 8.18255 351.033 8.94733 354.675 8.94733" stroke="url(#paint0_linear_156_9)" stroke-width="10" stroke-linecap="round"></path><defs><linearGradient id="paint0_linear_156_9" x1="-22" y1="16.9998" x2="422" y2="5.99987" gradientUnits="userSpaceOnUse"><stop stop-color="#04FED1"></stop><stop offset="1" stop-color="#1400FF"></stop></linearGradient></defs></svg>'),
        b(a, "class", "std-gradient-text svelte-aw7cmk"),
        b(r, "class", "std-button button svelte-aw7cmk"),
        b(r, "type", n[1]),
        b(v, "class", "svg-wrapper svelte-aw7cmk"),
        b(e, "class", "btn-wrapper svelte-aw7cmk");
    },
    m(M, E) {
      ie(M, e, E),
        B(e, r),
        B(r, a),
        B(a, l),
        B(e, d),
        B(e, v),
        m || ((S = Ie(e, "click", n[3])), (m = !0));
    },
    p(M, [E]) {
      E & 1 && Ee(l, M[0]), E & 2 && b(r, "type", M[1]);
    },
    i: pe,
    o: pe,
    d(M) {
      M && re(e), (m = !1), S();
    },
  };
}
function hr(n, e, r) {
  let { text: a = "" } = e,
    { type: l = "button" } = e;
  const d = Qe(),
    v = () => d("action");
  return (
    (n.$$set = (m) => {
      "text" in m && r(0, (a = m.text)), "type" in m && r(1, (l = m.type));
    }),
    [a, l, d, v]
  );
}
class Mt extends qe {
  constructor(e) {
    super(), Me(this, e, hr, dr, Ae, { text: 0, type: 1 });
  }
}
function pr(n) {
  let e;
  return {
    c() {
      (e = G("input")),
        b(e, "type", "text"),
        b(e, "class", "hidden-input svelte-ez9gmy"),
        (e.value = n[4]),
        b(e, "name", n[2]);
    },
    m(r, a) {
      ie(r, e, a);
    },
    p(r, a) {
      a & 16 && e.value !== r[4] && (e.value = r[4]),
        a & 4 && b(e, "name", r[2]);
    },
    d(r) {
      r && re(e);
    },
  };
}
function gr(n) {
  let e;
  return {
    c() {
      (e = G("input")),
        b(e, "type", "text"),
        b(e, "class", "hidden-input svelte-ez9gmy"),
        (e.value = n[4]),
        b(e, "name", n[2]),
        (e.required = !0);
    },
    m(r, a) {
      ie(r, e, a);
    },
    p(r, a) {
      a & 16 && e.value !== r[4] && (e.value = r[4]),
        a & 4 && b(e, "name", r[2]);
    },
    d(r) {
      r && re(e);
    },
  };
}
function vr(n) {
  let e, r, a, l, d, v, m, S, M, E, H, U, j, P, L;
  (m = new Mt({ props: { text: n[0] } })), m.$on("action", n[7]);
  function J(D, ue) {
    return D[1] ? gr : pr;
  }
  let Z = J(n),
    Y = Z(n);
  return {
    c() {
      (e = G("div")),
        (r = G("div")),
        (a = G("img")),
        (d = ee()),
        (v = G("div")),
        ge(m.$$.fragment),
        (S = ee()),
        (M = G("input")),
        (E = ee()),
        Y.c(),
        (H = ee()),
        (U = G("canvas")),
        tt(a.src, (l = n[3])) || b(a, "src", l),
        b(a, "alt", mr),
        b(a, "class", "photo-preview svelte-ez9gmy"),
        b(r, "class", "image-wrapper svelte-ez9gmy"),
        b(v, "class", "button-wrapper svelte-ez9gmy"),
        b(M, "type", "file"),
        b(M, "id", "img-input"),
        b(M, "accept", "image/*"),
        b(M, "class", "idden-input"),
        b(M, "name", "original_image"),
        b(U, "id", "canvas"),
        b(U, "class", "hidden"),
        b(e, "class", "input-wrapper svelte-ez9gmy");
    },
    m(D, ue) {
      ie(D, e, ue),
        B(e, r),
        B(r, a),
        B(e, d),
        B(e, v),
        de(m, v, null),
        B(e, S),
        B(e, M),
        B(e, E),
        Y.m(e, null),
        B(e, H),
        B(e, U),
        (j = !0),
        P || ((L = [Ie(a, "load", n[6]), Ie(M, "change", n[5])]), (P = !0));
    },
    p(D, [ue]) {
      (!j || (ue & 8 && !tt(a.src, (l = D[3])))) && b(a, "src", l);
      const le = {};
      ue & 1 && (le.text = D[0]),
        m.$set(le),
        Z === (Z = J(D)) && Y
          ? Y.p(D, ue)
          : (Y.d(1), (Y = Z(D)), Y && (Y.c(), Y.m(e, H)));
    },
    i(D) {
      j || (ne(m.$$.fragment, D), (j = !0));
    },
    o(D) {
      se(m.$$.fragment, D), (j = !1);
    },
    d(D) {
      D && re(e), he(m), Y.d(), (P = !1), Ue(L);
    },
  };
}
let mr = "content";
function wr(n, e, r) {
  const a = Qe();
  let { btnText: l = "" } = e,
    { defaultImgSource: d = "" } = e,
    { req: v = !0 } = e,
    { name: m } = e,
    S = d,
    M = "",
    E,
    H;
  ft(() => {
    (E = document.getElementById("canvas")),
      (H = document.getElementById("img-input"));
  });
  const U = async (L) => {
      const J = URL.createObjectURL(L.target.files[0]);
      r(3, (S = J));
    },
    j = (L) => {
      const J = L.path[0].currentSrc,
        Z = 400 / L.target.width;
      (E.width = 400), (E.height = L.target.height * Z);
      const Y = E.getContext("2d");
      Y.drawImage(L.target, 0, 0, E.width, E.height);
      const D = Y.canvas.toDataURL(L.target, "image/jpg");
      r(4, (M = D)), J.includes(d) || a("uploadDone");
    },
    P = () => {
      H.click();
    };
  return (
    (n.$$set = (L) => {
      "btnText" in L && r(0, (l = L.btnText)),
        "defaultImgSource" in L && r(8, (d = L.defaultImgSource)),
        "req" in L && r(1, (v = L.req)),
        "name" in L && r(2, (m = L.name));
    }),
    [l, v, m, S, M, U, j, P, d]
  );
}
class _r extends qe {
  constructor(e) {
    super(),
      Me(this, e, wr, vr, Ae, {
        btnText: 0,
        defaultImgSource: 8,
        req: 1,
        name: 2,
      });
  }
}
function _t(n) {
  let e, r, a, l, d, v;
  return (
    (e = new ht({
      props: {
        text: "who?",
        font: "f-secondary",
        color: "c-primary",
        align: "left",
      },
    })),
    (a = new Ge({
      props: {
        placeholder: "first name",
        req: !0,
        name: "second_guardian_first_name",
      },
    })),
    (d = new Ge({
      props: {
        placeholder: "last name",
        req: !0,
        name: "second_guardian_last_name",
      },
    })),
    {
      c() {
        ge(e.$$.fragment),
          (r = ee()),
          ge(a.$$.fragment),
          (l = ee()),
          ge(d.$$.fragment);
      },
      m(m, S) {
        de(e, m, S),
          ie(m, r, S),
          de(a, m, S),
          ie(m, l, S),
          de(d, m, S),
          (v = !0);
      },
      i(m) {
        v ||
          (ne(e.$$.fragment, m),
          ne(a.$$.fragment, m),
          ne(d.$$.fragment, m),
          (v = !0));
      },
      o(m) {
        se(e.$$.fragment, m),
          se(a.$$.fragment, m),
          se(d.$$.fragment, m),
          (v = !1);
      },
      d(m) {
        he(e, m), m && re(r), he(a, m), m && re(l), he(d, m);
      },
    }
  );
}
function yt(n) {
  let e, r, a;
  return (
    (r = new dt({ props: { text: "Done" } })),
    r.$on("action", n[8]),
    {
      c() {
        (e = G("div")),
          ge(r.$$.fragment),
          b(e, "class", "button-wrapper_fwd svelte-xesjdc");
      },
      m(l, d) {
        ie(l, e, d), de(r, e, null), (a = !0);
      },
      p: pe,
      i(l) {
        a || (ne(r.$$.fragment, l), (a = !0));
      },
      o(l) {
        se(r.$$.fragment, l), (a = !1);
      },
      d(l) {
        l && re(e), he(r);
      },
    }
  );
}
function bt(n) {
  let e, r, a;
  return (
    (r = new dt({ props: { text: "Next" } })),
    r.$on("action", n[5]),
    {
      c() {
        (e = G("div")),
          ge(r.$$.fragment),
          b(e, "class", "button-wrapper_fwd svelte-xesjdc");
      },
      m(l, d) {
        ie(l, e, d), de(r, e, null), (a = !0);
      },
      p: pe,
      i(l) {
        a || (ne(r.$$.fragment, l), (a = !0));
      },
      o(l) {
        se(r.$$.fragment, l), (a = !1);
      },
      d(l) {
        l && re(e), he(r);
      },
    }
  );
}
function kt(n) {
  let e, r, a;
  return (
    (r = new ur({})),
    r.$on("action", n[6]),
    {
      c() {
        (e = G("div")),
          ge(r.$$.fragment),
          b(e, "class", "button-wrapper_bkwd svelte-xesjdc");
      },
      m(l, d) {
        ie(l, e, d), de(r, e, null), (a = !0);
      },
      p: pe,
      i(l) {
        a || (ne(r.$$.fragment, l), (a = !0));
      },
      o(l) {
        se(r.$$.fragment, l), (a = !1);
      },
      d(l) {
        l && re(e), he(r);
      },
    }
  );
}
function yr(n) {
  let e,
    r,
    a,
    l,
    d,
    v,
    m,
    S,
    M,
    E,
    H,
    U,
    j,
    P,
    L,
    J,
    Z,
    Y,
    D,
    ue,
    le,
    _e,
    je,
    ke,
    xe,
    ze,
    De,
    Ce,
    q,
    A,
    x,
    _,
    w,
    O,
    R,
    T,
    N;
  (l = new Ge({
    props: { placeholder: "first name", req: !0, name: "first_name" },
  })),
    (v = new Ge({
      props: { placeholder: "last name", req: !0, name: "last_name" },
    })),
    (S = new er({ props: { startAt: 4, endAt: 11, name: "age" } })),
    (E = new vt({
      props: {
        value: { first: "male", second: "female" },
        valueLabel: { first: "m", second: "f" },
        label: "gender",
        name: "gender",
      },
    })),
    (P = new Ge({
      props: {
        placeholder: "first name",
        req: !0,
        name: "guardian_first_name",
      },
    })),
    (J = new Ge({
      props: { placeholder: "last name", req: !0, name: "guardian_last_name" },
    })),
    (Y = new Ge({
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
    (_e = new vt({
      props: {
        value: { first: "yes", second: "no" },
        valueLabel: { first: "y", second: "n" },
        name: "allow_third_party_pick_up",
        req: !0,
      },
    })),
    _e.$on("action", n[7]);
  let ae = n[2] && _t();
  (Ce = new _r({
    props: {
      defaultImgSource: "images/icons/profile.png",
      btnText: "submit photo",
      name: "photo",
    },
  })),
    Ce.$on("uploadDone", n[10]);
  let y = n[3] && n[0] === 2 && yt(n),
    t = n[0] < 2 && bt(n),
    o = n[0] > 0 && kt(n);
  return {
    c() {
      (e = G("div")),
        (r = G("form")),
        (a = G("div")),
        ge(l.$$.fragment),
        (d = ee()),
        ge(v.$$.fragment),
        (m = ee()),
        ge(S.$$.fragment),
        (M = ee()),
        ge(E.$$.fragment),
        (U = ee()),
        (j = G("div")),
        ge(P.$$.fragment),
        (L = ee()),
        ge(J.$$.fragment),
        (Z = ee()),
        ge(Y.$$.fragment),
        (D = ee()),
        ge(ue.$$.fragment),
        (le = ee()),
        ge(_e.$$.fragment),
        (je = ee()),
        ae && ae.c(),
        (xe = ee()),
        (ze = G("div")),
        (De = G("div")),
        ge(Ce.$$.fragment),
        (A = ee()),
        y && y.c(),
        (x = ee()),
        (_ = G("div")),
        (w = ee()),
        (O = G("div")),
        (R = ee()),
        t && t.c(),
        (T = ee()),
        o && o.c(),
        b(
          a,
          "class",
          (H =
            "form-section-wrapper initial " +
            n[1] +
            " " +
            n[4].first +
            " svelte-xesjdc")
        ),
        b(
          j,
          "class",
          (ke =
            "form-section-wrapper " +
            n[1] +
            " " +
            n[4].second +
            " svelte-xesjdc")
        ),
        b(De, "class", "input-image-wrapper svelte-xesjdc"),
        b(
          ze,
          "class",
          (q =
            "form-section-wrapper " +
            n[1] +
            " " +
            n[4].third +
            " svelte-xesjdc")
        ),
        b(r, "class", "registration-form std-flex-justify-start svelte-xesjdc"),
        b(r, "id", "form"),
        b(_, "class", "std-spacer-xl"),
        b(O, "class", "std-spacer-xl"),
        b(e, "class", "form-wrapper svelte-xesjdc");
    },
    m(i, u) {
      ie(i, e, u),
        B(e, r),
        B(r, a),
        de(l, a, null),
        B(a, d),
        de(v, a, null),
        B(a, m),
        de(S, a, null),
        B(a, M),
        de(E, a, null),
        B(r, U),
        B(r, j),
        de(P, j, null),
        B(j, L),
        de(J, j, null),
        B(j, Z),
        de(Y, j, null),
        B(j, D),
        de(ue, j, null),
        B(j, le),
        de(_e, j, null),
        B(j, je),
        ae && ae.m(j, null),
        B(r, xe),
        B(r, ze),
        B(ze, De),
        de(Ce, De, null),
        B(r, A),
        y && y.m(r, null),
        B(e, x),
        B(e, _),
        B(e, w),
        B(e, O),
        B(e, R),
        t && t.m(e, null),
        B(e, T),
        o && o.m(e, null),
        (N = !0);
    },
    p(i, [u]) {
      (!N ||
        (u & 18 &&
          H !==
            (H =
              "form-section-wrapper initial " +
              i[1] +
              " " +
              i[4].first +
              " svelte-xesjdc"))) &&
        b(a, "class", H),
        i[2]
          ? ae
            ? u & 4 && ne(ae, 1)
            : ((ae = _t()), ae.c(), ne(ae, 1), ae.m(j, null))
          : ae &&
            (Xe(),
            se(ae, 1, 1, () => {
              ae = null;
            }),
            Je()),
        (!N ||
          (u & 18 &&
            ke !==
              (ke =
                "form-section-wrapper " +
                i[1] +
                " " +
                i[4].second +
                " svelte-xesjdc"))) &&
          b(j, "class", ke),
        (!N ||
          (u & 18 &&
            q !==
              (q =
                "form-section-wrapper " +
                i[1] +
                " " +
                i[4].third +
                " svelte-xesjdc"))) &&
          b(ze, "class", q),
        i[3] && i[0] === 2
          ? y
            ? (y.p(i, u), u & 9 && ne(y, 1))
            : ((y = yt(i)), y.c(), ne(y, 1), y.m(r, null))
          : y &&
            (Xe(),
            se(y, 1, 1, () => {
              y = null;
            }),
            Je()),
        i[0] < 2
          ? t
            ? (t.p(i, u), u & 1 && ne(t, 1))
            : ((t = bt(i)), t.c(), ne(t, 1), t.m(e, T))
          : t &&
            (Xe(),
            se(t, 1, 1, () => {
              t = null;
            }),
            Je()),
        i[0] > 0
          ? o
            ? (o.p(i, u), u & 1 && ne(o, 1))
            : ((o = kt(i)), o.c(), ne(o, 1), o.m(e, null))
          : o &&
            (Xe(),
            se(o, 1, 1, () => {
              o = null;
            }),
            Je());
    },
    i(i) {
      N ||
        (ne(l.$$.fragment, i),
        ne(v.$$.fragment, i),
        ne(S.$$.fragment, i),
        ne(E.$$.fragment, i),
        ne(P.$$.fragment, i),
        ne(J.$$.fragment, i),
        ne(Y.$$.fragment, i),
        ne(ue.$$.fragment, i),
        ne(_e.$$.fragment, i),
        ne(ae),
        ne(Ce.$$.fragment, i),
        ne(y),
        ne(t),
        ne(o),
        (N = !0));
    },
    o(i) {
      se(l.$$.fragment, i),
        se(v.$$.fragment, i),
        se(S.$$.fragment, i),
        se(E.$$.fragment, i),
        se(P.$$.fragment, i),
        se(J.$$.fragment, i),
        se(Y.$$.fragment, i),
        se(ue.$$.fragment, i),
        se(_e.$$.fragment, i),
        se(ae),
        se(Ce.$$.fragment, i),
        se(y),
        se(t),
        se(o),
        (N = !1);
    },
    d(i) {
      i && re(e),
        he(l),
        he(v),
        he(S),
        he(E),
        he(P),
        he(J),
        he(Y),
        he(ue),
        he(_e),
        ae && ae.d(),
        he(Ce),
        y && y.d(),
        t && t.d(),
        o && o.d();
    },
  };
}
function br(n, e, r) {
  const a = Qe();
  let { currentTitle: l = "child" } = e,
    d = 0,
    v = "",
    m = !1,
    S = !1,
    M = { first: "display", second: "", third: "" },
    E;
  ft(() => {
    (E = document.getElementsByTagName("input")),
      document.getElementById("form");
  });
  const H = (Z) => {
      switch (Z) {
        case 0:
          r(9, (l = "child"));
          break;
        case 1:
          r(9, (l = "guardian"));
          break;
        case 2:
          r(9, (l = "child"));
          break;
      }
    },
    U = () => {
      switch ((H(d + 1), r(0, (d += 1)), r(1, (v = "swapfwd")), d)) {
        case 0:
          r(4, (M = { first: "display", second: "", third: "" }));
          break;
        case 1:
          r(4, (M = { first: "", second: "display", third: "" }));
          break;
        case 2:
          r(4, (M = { first: "", second: "", third: "display" }));
          break;
      }
    },
    j = () => {
      switch ((H(d - 1), r(0, (d -= 1)), r(1, (v = "swapbkwd")), d)) {
        case 0:
          r(4, (M = { first: "display", second: "", third: "" }));
          break;
        case 1:
          r(4, (M = { first: "", second: "display", third: "" }));
          break;
        case 2:
          r(4, (M = { first: "", second: "", third: "display" }));
          break;
      }
    },
    P = (Z) => {
      Z.detail.option === 1 ? r(2, (m = !0)) : r(2, (m = !1));
    },
    L = async () => {
      const Z = { first_name: "" };
      for (let D = 0; D < E.length; D++) {
        if (!E[D].value) {
          alert(`please make sure all fields are filled out!`);
          return;
        }
        Z[E[D].name] = E[D].value;
      }
      const Y = await Qt("http://localhost:4000/kids/register", Z);
      Y.id &&
        ((Z.id = Y.id),
        a("registration_success", Z),
        r(9, (l = Z.first_name)),
        console.log(Y));
    },
    J = () => r(3, (S = !0));
  return (
    (n.$$set = (Z) => {
      "currentTitle" in Z && r(9, (l = Z.currentTitle));
    }),
    [d, v, m, S, M, U, j, P, L, l, J]
  );
}
class kr extends qe {
  constructor(e) {
    super(), Me(this, e, br, yr, Ae, { currentTitle: 9 });
  }
}
function xt(n) {
  let e,
    r = n[0].toUpperCase() + "",
    a;
  return {
    c() {
      (e = G("h1")), (a = Pe(r)), b(e, "class", "svelte-1j89jsw");
    },
    m(l, d) {
      ie(l, e, d), B(e, a);
    },
    p(l, d) {
      d & 1 && r !== (r = l[0].toUpperCase() + "") && Ee(a, r);
    },
    d(l) {
      l && re(e);
    },
  };
}
function xr(n) {
  let e,
    r,
    a,
    l = n[0] && xt(n);
  return {
    c() {
      (e = G("div")),
        l && l.c(),
        (r = ee()),
        (a = G("div")),
        (a.innerHTML =
          '<svg viewBox="0 0 276 13" class="svelte-1j89jsw"><path d="M3 9.84148C49.0795 9.84148 95.0854 7.94865 141.138 6.68027C184.608 5.48299 228.464 6.59909 271.85 3.26175C279.217 2.69508 257.073 3.22499 249.685 3.22499C216.222 3.22499 182.76 3.22499 149.298 3.22499C115.269 3.22499 81.2036 3.04069 47.1834 3.96015C40.0086 4.15407 32.8123 4.40673 25.7166 5.57752C23.8476 5.88591 22.6842 6.03683 21.5262 7.19488" stroke="url(#paint0_linear_132_110)" stroke-width="5" stroke-linecap="round" fill="none"></path><defs><linearGradient id="paint0_linear_132_110" x1="22.5" y1="5.99992" x2="292.5" y2="14.4999" gradientUnits="userSpaceOnUse"><stop stop-color="#04FED1"></stop><stop offset="1" stop-color="#1400FF"></stop></linearGradient></defs></svg>'),
        b(a, "class", "svg-wrapper svelte-1j89jsw"),
        b(e, "class", "title-wrapper svelte-1j89jsw");
    },
    m(d, v) {
      ie(d, e, v), l && l.m(e, null), B(e, r), B(e, a);
    },
    p(d, [v]) {
      d[0]
        ? l
          ? l.p(d, v)
          : ((l = xt(d)), l.c(), l.m(e, r))
        : l && (l.d(1), (l = null));
    },
    i: pe,
    o: pe,
    d(d) {
      d && re(e), l && l.d();
    },
  };
}
function Cr(n, e, r) {
  let { title: a = "" } = e;
  return (
    (n.$$set = (l) => {
      "title" in l && r(0, (a = l.title));
    }),
    [a]
  );
}
class Sr extends qe {
  constructor(e) {
    super(), Me(this, e, Cr, xr, Ae, { title: 0 });
  }
}
function Ar(n) {
  let e, r, a;
  return {
    c() {
      (e = G("div")),
        (r = G("img")),
        tt(r.src, (a = n[1])) || b(r, "src", a),
        b(r, "alt", n[0]),
        b(r, "class", "std-img"),
        b(e, "class", "image-wrapper svelte-1kfmfwi");
    },
    m(l, d) {
      ie(l, e, d), B(e, r);
    },
    p(l, [d]) {
      d & 2 && !tt(r.src, (a = l[1])) && b(r, "src", a),
        d & 1 && b(r, "alt", l[0]);
    },
    i: pe,
    o: pe,
    d(l) {
      l && re(e);
    },
  };
}
function Mr(n, e, r) {
  let { alt: a = "" } = e,
    { src: l = "" } = e;
  return (
    (n.$$set = (d) => {
      "alt" in d && r(0, (a = d.alt)), "src" in d && r(1, (l = d.src));
    }),
    [a, l]
  );
}
class qr extends qe {
  constructor(e) {
    super(), Me(this, e, Mr, Ar, Ae, { alt: 0, src: 1 });
  }
}
function zr(n) {
  return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default")
    ? n.default
    : n;
}
var qt = { exports: {} };
(function (n, e) {
  (function (r, a) {
    n.exports = a();
  })(self, function () {
    return (() => {
      var r = {
          192: (d, v) => {
            var m,
              S,
              M = (function () {
                var E = function (q, A) {
                  var x = q,
                    _ = J[A],
                    w = null,
                    O = 0,
                    R = null,
                    T = [],
                    N = {},
                    ae = function (c, f) {
                      (w = (function (s) {
                        for (var g = new Array(s), k = 0; k < s; k += 1) {
                          g[k] = new Array(s);
                          for (var I = 0; I < s; I += 1) g[k][I] = null;
                        }
                        return g;
                      })((O = 4 * x + 17))),
                        y(0, 0),
                        y(O - 7, 0),
                        y(0, O - 7),
                        o(),
                        t(),
                        u(c, f),
                        x >= 7 && i(c),
                        R == null && (R = h(x, _, T)),
                        p(R, f);
                    },
                    y = function (c, f) {
                      for (var s = -1; s <= 7; s += 1)
                        if (!(c + s <= -1 || O <= c + s))
                          for (var g = -1; g <= 7; g += 1)
                            f + g <= -1 ||
                              O <= f + g ||
                              (w[c + s][f + g] =
                                (0 <= s && s <= 6 && (g == 0 || g == 6)) ||
                                (0 <= g && g <= 6 && (s == 0 || s == 6)) ||
                                (2 <= s && s <= 4 && 2 <= g && g <= 4));
                    },
                    t = function () {
                      for (var c = 8; c < O - 8; c += 1)
                        w[c][6] == null && (w[c][6] = c % 2 == 0);
                      for (var f = 8; f < O - 8; f += 1)
                        w[6][f] == null && (w[6][f] = f % 2 == 0);
                    },
                    o = function () {
                      for (
                        var c = Z.getPatternPosition(x), f = 0;
                        f < c.length;
                        f += 1
                      )
                        for (var s = 0; s < c.length; s += 1) {
                          var g = c[f],
                            k = c[s];
                          if (w[g][k] == null)
                            for (var I = -2; I <= 2; I += 1)
                              for (var F = -2; F <= 2; F += 1)
                                w[g + I][k + F] =
                                  I == -2 ||
                                  I == 2 ||
                                  F == -2 ||
                                  F == 2 ||
                                  (I == 0 && F == 0);
                        }
                    },
                    i = function (c) {
                      for (
                        var f = Z.getBCHTypeNumber(x), s = 0;
                        s < 18;
                        s += 1
                      ) {
                        var g = !c && ((f >> s) & 1) == 1;
                        w[Math.floor(s / 3)][(s % 3) + O - 8 - 3] = g;
                      }
                      for (s = 0; s < 18; s += 1)
                        (g = !c && ((f >> s) & 1) == 1),
                          (w[(s % 3) + O - 8 - 3][Math.floor(s / 3)] = g);
                    },
                    u = function (c, f) {
                      for (
                        var s = (_ << 3) | f, g = Z.getBCHTypeInfo(s), k = 0;
                        k < 15;
                        k += 1
                      ) {
                        var I = !c && ((g >> k) & 1) == 1;
                        k < 6
                          ? (w[k][8] = I)
                          : k < 8
                          ? (w[k + 1][8] = I)
                          : (w[O - 15 + k][8] = I);
                      }
                      for (k = 0; k < 15; k += 1)
                        (I = !c && ((g >> k) & 1) == 1),
                          k < 8
                            ? (w[8][O - k - 1] = I)
                            : k < 9
                            ? (w[8][15 - k - 1 + 1] = I)
                            : (w[8][15 - k - 1] = I);
                      w[O - 8][8] = !c;
                    },
                    p = function (c, f) {
                      for (
                        var s = -1,
                          g = O - 1,
                          k = 7,
                          I = 0,
                          F = Z.getMaskFunction(f),
                          z = O - 1;
                        z > 0;
                        z -= 2
                      )
                        for (z == 6 && (z -= 1); ; ) {
                          for (var Q = 0; Q < 2; Q += 1)
                            if (w[g][z - Q] == null) {
                              var K = !1;
                              I < c.length && (K = ((c[I] >>> k) & 1) == 1),
                                F(g, z - Q) && (K = !K),
                                (w[g][z - Q] = K),
                                (k -= 1) == -1 && ((I += 1), (k = 7));
                            }
                          if ((g += s) < 0 || O <= g) {
                            (g -= s), (s = -s);
                            break;
                          }
                        }
                    },
                    h = function (c, f, s) {
                      for (
                        var g = ue.getRSBlocks(c, f), k = le(), I = 0;
                        I < s.length;
                        I += 1
                      ) {
                        var F = s[I];
                        k.put(F.getMode(), 4),
                          k.put(
                            F.getLength(),
                            Z.getLengthInBits(F.getMode(), c)
                          ),
                          F.write(k);
                      }
                      var z = 0;
                      for (I = 0; I < g.length; I += 1) z += g[I].dataCount;
                      if (k.getLengthInBits() > 8 * z)
                        throw (
                          "code length overflow. (" +
                          k.getLengthInBits() +
                          ">" +
                          8 * z +
                          ")"
                        );
                      for (
                        k.getLengthInBits() + 4 <= 8 * z && k.put(0, 4);
                        k.getLengthInBits() % 8 != 0;

                      )
                        k.putBit(!1);
                      for (
                        ;
                        !(
                          k.getLengthInBits() >= 8 * z ||
                          (k.put(236, 8), k.getLengthInBits() >= 8 * z)
                        );

                      )
                        k.put(17, 8);
                      return (function (Q, K) {
                        for (
                          var V = 0,
                            ce = 0,
                            X = 0,
                            $ = new Array(K.length),
                            W = new Array(K.length),
                            te = 0;
                          te < K.length;
                          te += 1
                        ) {
                          var Oe = K[te].dataCount,
                            ve = K[te].totalCount - Oe;
                          (ce = Math.max(ce, Oe)),
                            (X = Math.max(X, ve)),
                            ($[te] = new Array(Oe));
                          for (var oe = 0; oe < $[te].length; oe += 1)
                            $[te][oe] = 255 & Q.getBuffer()[oe + V];
                          V += Oe;
                          var me = Z.getErrorCorrectPolynomial(ve),
                            fe = D($[te], me.getLength() - 1).mod(me);
                          for (
                            W[te] = new Array(me.getLength() - 1), oe = 0;
                            oe < W[te].length;
                            oe += 1
                          ) {
                            var we = oe + fe.getLength() - W[te].length;
                            W[te][oe] = we >= 0 ? fe.getAt(we) : 0;
                          }
                        }
                        var ye = 0;
                        for (oe = 0; oe < K.length; oe += 1)
                          ye += K[oe].totalCount;
                        var be = new Array(ye),
                          Se = 0;
                        for (oe = 0; oe < ce; oe += 1)
                          for (te = 0; te < K.length; te += 1)
                            oe < $[te].length &&
                              ((be[Se] = $[te][oe]), (Se += 1));
                        for (oe = 0; oe < X; oe += 1)
                          for (te = 0; te < K.length; te += 1)
                            oe < W[te].length &&
                              ((be[Se] = W[te][oe]), (Se += 1));
                        return be;
                      })(k, g);
                    };
                  (N.addData = function (c, f) {
                    var s = null;
                    switch ((f = f || "Byte")) {
                      case "Numeric":
                        s = _e(c);
                        break;
                      case "Alphanumeric":
                        s = je(c);
                        break;
                      case "Byte":
                        s = ke(c);
                        break;
                      case "Kanji":
                        s = xe(c);
                        break;
                      default:
                        throw "mode:" + f;
                    }
                    T.push(s), (R = null);
                  }),
                    (N.isDark = function (c, f) {
                      if (c < 0 || O <= c || f < 0 || O <= f) throw c + "," + f;
                      return w[c][f];
                    }),
                    (N.getModuleCount = function () {
                      return O;
                    }),
                    (N.make = function () {
                      if (x < 1) {
                        for (var c = 1; c < 40; c++) {
                          for (
                            var f = ue.getRSBlocks(c, _), s = le(), g = 0;
                            g < T.length;
                            g++
                          ) {
                            var k = T[g];
                            s.put(k.getMode(), 4),
                              s.put(
                                k.getLength(),
                                Z.getLengthInBits(k.getMode(), c)
                              ),
                              k.write(s);
                          }
                          var I = 0;
                          for (g = 0; g < f.length; g++) I += f[g].dataCount;
                          if (s.getLengthInBits() <= 8 * I) break;
                        }
                        x = c;
                      }
                      ae(
                        !1,
                        (function () {
                          for (var F = 0, z = 0, Q = 0; Q < 8; Q += 1) {
                            ae(!0, Q);
                            var K = Z.getLostPoint(N);
                            (Q == 0 || F > K) && ((F = K), (z = Q));
                          }
                          return z;
                        })()
                      );
                    }),
                    (N.createTableTag = function (c, f) {
                      c = c || 2;
                      var s = "";
                      (s += '<table style="'),
                        (s += " border-width: 0px; border-style: none;"),
                        (s += " border-collapse: collapse;"),
                        (s +=
                          " padding: 0px; margin: " +
                          (f = f === void 0 ? 4 * c : f) +
                          "px;"),
                        (s += '">'),
                        (s += "<tbody>");
                      for (var g = 0; g < N.getModuleCount(); g += 1) {
                        s += "<tr>";
                        for (var k = 0; k < N.getModuleCount(); k += 1)
                          (s += '<td style="'),
                            (s += " border-width: 0px; border-style: none;"),
                            (s += " border-collapse: collapse;"),
                            (s += " padding: 0px; margin: 0px;"),
                            (s += " width: " + c + "px;"),
                            (s += " height: " + c + "px;"),
                            (s += " background-color: "),
                            (s += N.isDark(g, k) ? "#000000" : "#ffffff"),
                            (s += ";"),
                            (s += '"/>');
                        s += "</tr>";
                      }
                      return (s += "</tbody>") + "</table>";
                    }),
                    (N.createSvgTag = function (c, f, s, g) {
                      var k = {};
                      typeof arguments[0] == "object" &&
                        ((c = (k = arguments[0]).cellSize),
                        (f = k.margin),
                        (s = k.alt),
                        (g = k.title)),
                        (c = c || 2),
                        (f = f === void 0 ? 4 * c : f),
                        ((s =
                          typeof s == "string" ? { text: s } : s || {}).text =
                          s.text || null),
                        (s.id = s.text ? s.id || "qrcode-description" : null),
                        ((g =
                          typeof g == "string" ? { text: g } : g || {}).text =
                          g.text || null),
                        (g.id = g.text ? g.id || "qrcode-title" : null);
                      var I,
                        F,
                        z,
                        Q,
                        K = N.getModuleCount() * c + 2 * f,
                        V = "";
                      for (
                        Q =
                          "l" +
                          c +
                          ",0 0," +
                          c +
                          " -" +
                          c +
                          ",0 0,-" +
                          c +
                          "z ",
                          V +=
                            '<svg version="1.1" xmlns="http://www.w3.org/2000/svg"',
                          V += k.scalable
                            ? ""
                            : ' width="' + K + 'px" height="' + K + 'px"',
                          V += ' viewBox="0 0 ' + K + " " + K + '" ',
                          V += ' preserveAspectRatio="xMinYMin meet"',
                          V +=
                            g.text || s.text
                              ? ' role="img" aria-labelledby="' +
                                C([g.id, s.id].join(" ").trim()) +
                                '"'
                              : "",
                          V += ">",
                          V += g.text
                            ? '<title id="' +
                              C(g.id) +
                              '">' +
                              C(g.text) +
                              "</title>"
                            : "",
                          V += s.text
                            ? '<description id="' +
                              C(s.id) +
                              '">' +
                              C(s.text) +
                              "</description>"
                            : "",
                          V +=
                            '<rect width="100%" height="100%" fill="white" cx="0" cy="0"/>',
                          V += '<path d="',
                          F = 0;
                        F < N.getModuleCount();
                        F += 1
                      )
                        for (
                          z = F * c + f, I = 0;
                          I < N.getModuleCount();
                          I += 1
                        )
                          N.isDark(F, I) &&
                            (V += "M" + (I * c + f) + "," + z + Q);
                      return (
                        (V += '" stroke="transparent" fill="black"/>') +
                        "</svg>"
                      );
                    }),
                    (N.createDataURL = function (c, f) {
                      (c = c || 2), (f = f === void 0 ? 4 * c : f);
                      var s = N.getModuleCount() * c + 2 * f,
                        g = f,
                        k = s - f;
                      return Ce(s, s, function (I, F) {
                        if (g <= I && I < k && g <= F && F < k) {
                          var z = Math.floor((I - g) / c),
                            Q = Math.floor((F - g) / c);
                          return N.isDark(Q, z) ? 0 : 1;
                        }
                        return 1;
                      });
                    }),
                    (N.createImgTag = function (c, f, s) {
                      (c = c || 2), (f = f === void 0 ? 4 * c : f);
                      var g = N.getModuleCount() * c + 2 * f,
                        k = "";
                      return (
                        (k += "<img"),
                        (k += ' src="'),
                        (k += N.createDataURL(c, f)),
                        (k += '"'),
                        (k += ' width="'),
                        (k += g),
                        (k += '"'),
                        (k += ' height="'),
                        (k += g),
                        (k += '"'),
                        s && ((k += ' alt="'), (k += C(s)), (k += '"')),
                        k + "/>"
                      );
                    });
                  var C = function (c) {
                    for (var f = "", s = 0; s < c.length; s += 1) {
                      var g = c.charAt(s);
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
                    (N.createASCII = function (c, f) {
                      if ((c = c || 1) < 2)
                        return (function ($) {
                          $ = $ === void 0 ? 2 : $;
                          var W,
                            te,
                            Oe,
                            ve,
                            oe,
                            me = 1 * N.getModuleCount() + 2 * $,
                            fe = $,
                            we = me - $,
                            ye = {
                              "\u2588\u2588": "\u2588",
                              "\u2588 ": "\u2580",
                              " \u2588": "\u2584",
                              "  ": " ",
                            },
                            be = {
                              "\u2588\u2588": "\u2580",
                              "\u2588 ": "\u2580",
                              " \u2588": " ",
                              "  ": " ",
                            },
                            Se = "";
                          for (W = 0; W < me; W += 2) {
                            for (
                              Oe = Math.floor((W - fe) / 1),
                                ve = Math.floor((W + 1 - fe) / 1),
                                te = 0;
                              te < me;
                              te += 1
                            )
                              (oe = "\u2588"),
                                fe <= te &&
                                  te < we &&
                                  fe <= W &&
                                  W < we &&
                                  N.isDark(Oe, Math.floor((te - fe) / 1)) &&
                                  (oe = " "),
                                fe <= te &&
                                te < we &&
                                fe <= W + 1 &&
                                W + 1 < we &&
                                N.isDark(ve, Math.floor((te - fe) / 1))
                                  ? (oe += " ")
                                  : (oe += "\u2588"),
                                (Se += $ < 1 && W + 1 >= we ? be[oe] : ye[oe]);
                            Se += `
`;
                          }
                          return me % 2 && $ > 0
                            ? Se.substring(0, Se.length - me - 1) +
                                Array(me + 1).join("\u2580")
                            : Se.substring(0, Se.length - 1);
                        })(f);
                      (c -= 1), (f = f === void 0 ? 2 * c : f);
                      var s,
                        g,
                        k,
                        I,
                        F = N.getModuleCount() * c + 2 * f,
                        z = f,
                        Q = F - f,
                        K = Array(c + 1).join("\u2588\u2588"),
                        V = Array(c + 1).join("  "),
                        ce = "",
                        X = "";
                      for (s = 0; s < F; s += 1) {
                        for (
                          k = Math.floor((s - z) / c), X = "", g = 0;
                          g < F;
                          g += 1
                        )
                          (I = 1),
                            z <= g &&
                              g < Q &&
                              z <= s &&
                              s < Q &&
                              N.isDark(k, Math.floor((g - z) / c)) &&
                              (I = 0),
                            (X += I ? K : V);
                        for (k = 0; k < c; k += 1)
                          ce +=
                            X +
                            `
`;
                      }
                      return ce.substring(0, ce.length - 1);
                    }),
                    (N.renderTo2dContext = function (c, f) {
                      f = f || 2;
                      for (var s = N.getModuleCount(), g = 0; g < s; g++)
                        for (var k = 0; k < s; k++)
                          (c.fillStyle = N.isDark(g, k) ? "black" : "white"),
                            c.fillRect(g * f, k * f, f, f);
                    }),
                    N
                  );
                };
                (E.stringToBytes = (E.stringToBytesFuncs = {
                  default: function (q) {
                    for (var A = [], x = 0; x < q.length; x += 1) {
                      var _ = q.charCodeAt(x);
                      A.push(255 & _);
                    }
                    return A;
                  },
                }).default),
                  (E.createStringToBytes = function (q, A) {
                    var x = (function () {
                        for (
                          var w = De(q),
                            O = function () {
                              var t = w.read();
                              if (t == -1) throw "eof";
                              return t;
                            },
                            R = 0,
                            T = {};
                          ;

                        ) {
                          var N = w.read();
                          if (N == -1) break;
                          var ae = O(),
                            y = (O() << 8) | O();
                          (T[String.fromCharCode((N << 8) | ae)] = y), (R += 1);
                        }
                        if (R != A) throw R + " != " + A;
                        return T;
                      })(),
                      _ = "?".charCodeAt(0);
                    return function (w) {
                      for (var O = [], R = 0; R < w.length; R += 1) {
                        var T = w.charCodeAt(R);
                        if (T < 128) O.push(T);
                        else {
                          var N = x[w.charAt(R)];
                          typeof N == "number"
                            ? (255 & N) == N
                              ? O.push(N)
                              : (O.push(N >>> 8), O.push(255 & N))
                            : O.push(_);
                        }
                      }
                      return O;
                    };
                  });
                var H,
                  U,
                  j,
                  P,
                  L,
                  J = { L: 1, M: 0, Q: 3, H: 2 },
                  Z =
                    ((H = [
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
                    (U = 1335),
                    (j = 7973),
                    (L = function (q) {
                      for (var A = 0; q != 0; ) (A += 1), (q >>>= 1);
                      return A;
                    }),
                    ((P = {}).getBCHTypeInfo = function (q) {
                      for (var A = q << 10; L(A) - L(U) >= 0; )
                        A ^= U << (L(A) - L(U));
                      return 21522 ^ ((q << 10) | A);
                    }),
                    (P.getBCHTypeNumber = function (q) {
                      for (var A = q << 12; L(A) - L(j) >= 0; )
                        A ^= j << (L(A) - L(j));
                      return (q << 12) | A;
                    }),
                    (P.getPatternPosition = function (q) {
                      return H[q - 1];
                    }),
                    (P.getMaskFunction = function (q) {
                      switch (q) {
                        case 0:
                          return function (A, x) {
                            return (A + x) % 2 == 0;
                          };
                        case 1:
                          return function (A, x) {
                            return A % 2 == 0;
                          };
                        case 2:
                          return function (A, x) {
                            return x % 3 == 0;
                          };
                        case 3:
                          return function (A, x) {
                            return (A + x) % 3 == 0;
                          };
                        case 4:
                          return function (A, x) {
                            return (
                              (Math.floor(A / 2) + Math.floor(x / 3)) % 2 == 0
                            );
                          };
                        case 5:
                          return function (A, x) {
                            return ((A * x) % 2) + ((A * x) % 3) == 0;
                          };
                        case 6:
                          return function (A, x) {
                            return (((A * x) % 2) + ((A * x) % 3)) % 2 == 0;
                          };
                        case 7:
                          return function (A, x) {
                            return (((A * x) % 3) + ((A + x) % 2)) % 2 == 0;
                          };
                        default:
                          throw "bad maskPattern:" + q;
                      }
                    }),
                    (P.getErrorCorrectPolynomial = function (q) {
                      for (var A = D([1], 0), x = 0; x < q; x += 1)
                        A = A.multiply(D([1, Y.gexp(x)], 0));
                      return A;
                    }),
                    (P.getLengthInBits = function (q, A) {
                      if (1 <= A && A < 10)
                        switch (q) {
                          case 1:
                            return 10;
                          case 2:
                            return 9;
                          case 4:
                          case 8:
                            return 8;
                          default:
                            throw "mode:" + q;
                        }
                      else if (A < 27)
                        switch (q) {
                          case 1:
                            return 12;
                          case 2:
                            return 11;
                          case 4:
                            return 16;
                          case 8:
                            return 10;
                          default:
                            throw "mode:" + q;
                        }
                      else {
                        if (!(A < 41)) throw "type:" + A;
                        switch (q) {
                          case 1:
                            return 14;
                          case 2:
                            return 13;
                          case 4:
                            return 16;
                          case 8:
                            return 12;
                          default:
                            throw "mode:" + q;
                        }
                      }
                    }),
                    (P.getLostPoint = function (q) {
                      for (
                        var A = q.getModuleCount(), x = 0, _ = 0;
                        _ < A;
                        _ += 1
                      )
                        for (var w = 0; w < A; w += 1) {
                          for (
                            var O = 0, R = q.isDark(_, w), T = -1;
                            T <= 1;
                            T += 1
                          )
                            if (!(_ + T < 0 || A <= _ + T))
                              for (var N = -1; N <= 1; N += 1)
                                w + N < 0 ||
                                  A <= w + N ||
                                  (T == 0 && N == 0) ||
                                  (R == q.isDark(_ + T, w + N) && (O += 1));
                          O > 5 && (x += 3 + O - 5);
                        }
                      for (_ = 0; _ < A - 1; _ += 1)
                        for (w = 0; w < A - 1; w += 1) {
                          var ae = 0;
                          q.isDark(_, w) && (ae += 1),
                            q.isDark(_ + 1, w) && (ae += 1),
                            q.isDark(_, w + 1) && (ae += 1),
                            q.isDark(_ + 1, w + 1) && (ae += 1),
                            (ae != 0 && ae != 4) || (x += 3);
                        }
                      for (_ = 0; _ < A; _ += 1)
                        for (w = 0; w < A - 6; w += 1)
                          q.isDark(_, w) &&
                            !q.isDark(_, w + 1) &&
                            q.isDark(_, w + 2) &&
                            q.isDark(_, w + 3) &&
                            q.isDark(_, w + 4) &&
                            !q.isDark(_, w + 5) &&
                            q.isDark(_, w + 6) &&
                            (x += 40);
                      for (w = 0; w < A; w += 1)
                        for (_ = 0; _ < A - 6; _ += 1)
                          q.isDark(_, w) &&
                            !q.isDark(_ + 1, w) &&
                            q.isDark(_ + 2, w) &&
                            q.isDark(_ + 3, w) &&
                            q.isDark(_ + 4, w) &&
                            !q.isDark(_ + 5, w) &&
                            q.isDark(_ + 6, w) &&
                            (x += 40);
                      var y = 0;
                      for (w = 0; w < A; w += 1)
                        for (_ = 0; _ < A; _ += 1) q.isDark(_, w) && (y += 1);
                      return x + (Math.abs((100 * y) / A / A - 50) / 5) * 10;
                    }),
                    P),
                  Y = (function () {
                    for (
                      var q = new Array(256), A = new Array(256), x = 0;
                      x < 8;
                      x += 1
                    )
                      q[x] = 1 << x;
                    for (x = 8; x < 256; x += 1)
                      q[x] = q[x - 4] ^ q[x - 5] ^ q[x - 6] ^ q[x - 8];
                    for (x = 0; x < 255; x += 1) A[q[x]] = x;
                    return {
                      glog: function (_) {
                        if (_ < 1) throw "glog(" + _ + ")";
                        return A[_];
                      },
                      gexp: function (_) {
                        for (; _ < 0; ) _ += 255;
                        for (; _ >= 256; ) _ -= 255;
                        return q[_];
                      },
                    };
                  })();
                function D(q, A) {
                  if (q.length === void 0) throw q.length + "/" + A;
                  var x = (function () {
                      for (var w = 0; w < q.length && q[w] == 0; ) w += 1;
                      for (
                        var O = new Array(q.length - w + A), R = 0;
                        R < q.length - w;
                        R += 1
                      )
                        O[R] = q[R + w];
                      return O;
                    })(),
                    _ = {
                      getAt: function (w) {
                        return x[w];
                      },
                      getLength: function () {
                        return x.length;
                      },
                      multiply: function (w) {
                        for (
                          var O = new Array(_.getLength() + w.getLength() - 1),
                            R = 0;
                          R < _.getLength();
                          R += 1
                        )
                          for (var T = 0; T < w.getLength(); T += 1)
                            O[R + T] ^= Y.gexp(
                              Y.glog(_.getAt(R)) + Y.glog(w.getAt(T))
                            );
                        return D(O, 0);
                      },
                      mod: function (w) {
                        if (_.getLength() - w.getLength() < 0) return _;
                        for (
                          var O = Y.glog(_.getAt(0)) - Y.glog(w.getAt(0)),
                            R = new Array(_.getLength()),
                            T = 0;
                          T < _.getLength();
                          T += 1
                        )
                          R[T] = _.getAt(T);
                        for (T = 0; T < w.getLength(); T += 1)
                          R[T] ^= Y.gexp(Y.glog(w.getAt(T)) + O);
                        return D(R, 0).mod(w);
                      },
                    };
                  return _;
                }
                var ue = (function () {
                    var q = [
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
                      A = function (_, w) {
                        var O = {};
                        return (O.totalCount = _), (O.dataCount = w), O;
                      },
                      x = {
                        getRSBlocks: function (_, w) {
                          var O = (function (i, u) {
                            switch (u) {
                              case J.L:
                                return q[4 * (i - 1) + 0];
                              case J.M:
                                return q[4 * (i - 1) + 1];
                              case J.Q:
                                return q[4 * (i - 1) + 2];
                              case J.H:
                                return q[4 * (i - 1) + 3];
                              default:
                                return;
                            }
                          })(_, w);
                          if (O === void 0)
                            throw (
                              "bad rs block @ typeNumber:" +
                              _ +
                              "/errorCorrectionLevel:" +
                              w
                            );
                          for (
                            var R = O.length / 3, T = [], N = 0;
                            N < R;
                            N += 1
                          )
                            for (
                              var ae = O[3 * N + 0],
                                y = O[3 * N + 1],
                                t = O[3 * N + 2],
                                o = 0;
                              o < ae;
                              o += 1
                            )
                              T.push(A(y, t));
                          return T;
                        },
                      };
                    return x;
                  })(),
                  le = function () {
                    var q = [],
                      A = 0,
                      x = {
                        getBuffer: function () {
                          return q;
                        },
                        getAt: function (_) {
                          var w = Math.floor(_ / 8);
                          return ((q[w] >>> (7 - (_ % 8))) & 1) == 1;
                        },
                        put: function (_, w) {
                          for (var O = 0; O < w; O += 1)
                            x.putBit(((_ >>> (w - O - 1)) & 1) == 1);
                        },
                        getLengthInBits: function () {
                          return A;
                        },
                        putBit: function (_) {
                          var w = Math.floor(A / 8);
                          q.length <= w && q.push(0),
                            _ && (q[w] |= 128 >>> A % 8),
                            (A += 1);
                        },
                      };
                    return x;
                  },
                  _e = function (q) {
                    var A = q,
                      x = {
                        getMode: function () {
                          return 1;
                        },
                        getLength: function (O) {
                          return A.length;
                        },
                        write: function (O) {
                          for (var R = A, T = 0; T + 2 < R.length; )
                            O.put(_(R.substring(T, T + 3)), 10), (T += 3);
                          T < R.length &&
                            (R.length - T == 1
                              ? O.put(_(R.substring(T, T + 1)), 4)
                              : R.length - T == 2 &&
                                O.put(_(R.substring(T, T + 2)), 7));
                        },
                      },
                      _ = function (O) {
                        for (var R = 0, T = 0; T < O.length; T += 1)
                          R = 10 * R + w(O.charAt(T));
                        return R;
                      },
                      w = function (O) {
                        if ("0" <= O && O <= "9")
                          return O.charCodeAt(0) - "0".charCodeAt(0);
                        throw "illegal char :" + O;
                      };
                    return x;
                  },
                  je = function (q) {
                    var A = q,
                      x = {
                        getMode: function () {
                          return 2;
                        },
                        getLength: function (w) {
                          return A.length;
                        },
                        write: function (w) {
                          for (var O = A, R = 0; R + 1 < O.length; )
                            w.put(45 * _(O.charAt(R)) + _(O.charAt(R + 1)), 11),
                              (R += 2);
                          R < O.length && w.put(_(O.charAt(R)), 6);
                        },
                      },
                      _ = function (w) {
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
                    return x;
                  },
                  ke = function (q) {
                    var A = E.stringToBytes(q);
                    return {
                      getMode: function () {
                        return 4;
                      },
                      getLength: function (x) {
                        return A.length;
                      },
                      write: function (x) {
                        for (var _ = 0; _ < A.length; _ += 1) x.put(A[_], 8);
                      },
                    };
                  },
                  xe = function (q) {
                    var A = E.stringToBytesFuncs.SJIS;
                    if (!A) throw "sjis not supported.";
                    (function (_, w) {
                      var O = A("\u53CB");
                      if (O.length != 2 || ((O[0] << 8) | O[1]) != 38726)
                        throw "sjis not supported.";
                    })();
                    var x = A(q);
                    return {
                      getMode: function () {
                        return 8;
                      },
                      getLength: function (_) {
                        return ~~(x.length / 2);
                      },
                      write: function (_) {
                        for (var w = x, O = 0; O + 1 < w.length; ) {
                          var R = ((255 & w[O]) << 8) | (255 & w[O + 1]);
                          if (33088 <= R && R <= 40956) R -= 33088;
                          else {
                            if (!(57408 <= R && R <= 60351))
                              throw "illegal char at " + (O + 1) + "/" + R;
                            R -= 49472;
                          }
                          (R = 192 * ((R >>> 8) & 255) + (255 & R)),
                            _.put(R, 13),
                            (O += 2);
                        }
                        if (O < w.length) throw "illegal char at " + (O + 1);
                      },
                    };
                  },
                  ze = function () {
                    var q = [],
                      A = {
                        writeByte: function (x) {
                          q.push(255 & x);
                        },
                        writeShort: function (x) {
                          A.writeByte(x), A.writeByte(x >>> 8);
                        },
                        writeBytes: function (x, _, w) {
                          (_ = _ || 0), (w = w || x.length);
                          for (var O = 0; O < w; O += 1) A.writeByte(x[O + _]);
                        },
                        writeString: function (x) {
                          for (var _ = 0; _ < x.length; _ += 1)
                            A.writeByte(x.charCodeAt(_));
                        },
                        toByteArray: function () {
                          return q;
                        },
                        toString: function () {
                          var x = "";
                          x += "[";
                          for (var _ = 0; _ < q.length; _ += 1)
                            _ > 0 && (x += ","), (x += q[_]);
                          return x + "]";
                        },
                      };
                    return A;
                  },
                  De = function (q) {
                    var A = q,
                      x = 0,
                      _ = 0,
                      w = 0,
                      O = {
                        read: function () {
                          for (; w < 8; ) {
                            if (x >= A.length) {
                              if (w == 0) return -1;
                              throw "unexpected end of file./" + w;
                            }
                            var T = A.charAt(x);
                            if (((x += 1), T == "=")) return (w = 0), -1;
                            T.match(/^\s$/) ||
                              ((_ = (_ << 6) | R(T.charCodeAt(0))), (w += 6));
                          }
                          var N = (_ >>> (w - 8)) & 255;
                          return (w -= 8), N;
                        },
                      },
                      R = function (T) {
                        if (65 <= T && T <= 90) return T - 65;
                        if (97 <= T && T <= 122) return T - 97 + 26;
                        if (48 <= T && T <= 57) return T - 48 + 52;
                        if (T == 43) return 62;
                        if (T == 47) return 63;
                        throw "c:" + T;
                      };
                    return O;
                  },
                  Ce = function (q, A, x) {
                    for (
                      var _ = (function (y, t) {
                          var o = y,
                            i = t,
                            u = new Array(y * t),
                            p = {
                              setPixel: function (c, f, s) {
                                u[f * o + c] = s;
                              },
                              write: function (c) {
                                c.writeString("GIF87a"),
                                  c.writeShort(o),
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
                                  c.writeShort(o),
                                  c.writeShort(i),
                                  c.writeByte(0);
                                var f = h(2);
                                c.writeByte(2);
                                for (var s = 0; f.length - s > 255; )
                                  c.writeByte(255),
                                    c.writeBytes(f, s, 255),
                                    (s += 255);
                                c.writeByte(f.length - s),
                                  c.writeBytes(f, s, f.length - s),
                                  c.writeByte(0),
                                  c.writeString(";");
                              },
                            },
                            h = function (c) {
                              for (
                                var f = 1 << c,
                                  s = 1 + (1 << c),
                                  g = c + 1,
                                  k = C(),
                                  I = 0;
                                I < f;
                                I += 1
                              )
                                k.add(String.fromCharCode(I));
                              k.add(String.fromCharCode(f)),
                                k.add(String.fromCharCode(s));
                              var F,
                                z,
                                Q,
                                K = ze(),
                                V =
                                  ((F = K),
                                  (z = 0),
                                  (Q = 0),
                                  {
                                    write: function (W, te) {
                                      if (W >>> te != 0) throw "length over";
                                      for (; z + te >= 8; )
                                        F.writeByte(255 & ((W << z) | Q)),
                                          (te -= 8 - z),
                                          (W >>>= 8 - z),
                                          (Q = 0),
                                          (z = 0);
                                      (Q |= W << z), (z += te);
                                    },
                                    flush: function () {
                                      z > 0 && F.writeByte(Q);
                                    },
                                  });
                              V.write(f, g);
                              var ce = 0,
                                X = String.fromCharCode(u[ce]);
                              for (ce += 1; ce < u.length; ) {
                                var $ = String.fromCharCode(u[ce]);
                                (ce += 1),
                                  k.contains(X + $)
                                    ? (X += $)
                                    : (V.write(k.indexOf(X), g),
                                      k.size() < 4095 &&
                                        (k.size() == 1 << g && (g += 1),
                                        k.add(X + $)),
                                      (X = $));
                              }
                              return (
                                V.write(k.indexOf(X), g),
                                V.write(s, g),
                                V.flush(),
                                K.toByteArray()
                              );
                            },
                            C = function () {
                              var c = {},
                                f = 0,
                                s = {
                                  add: function (g) {
                                    if (s.contains(g)) throw "dup key:" + g;
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
                              return s;
                            };
                          return p;
                        })(q, A),
                        w = 0;
                      w < A;
                      w += 1
                    )
                      for (var O = 0; O < q; O += 1) _.setPixel(O, w, x(O, w));
                    var R = ze();
                    _.write(R);
                    for (
                      var T = (function () {
                          var y = 0,
                            t = 0,
                            o = 0,
                            i = "",
                            u = {},
                            p = function (C) {
                              i += String.fromCharCode(h(63 & C));
                            },
                            h = function (C) {
                              if (!(C < 0)) {
                                if (C < 26) return 65 + C;
                                if (C < 52) return C - 26 + 97;
                                if (C < 62) return C - 52 + 48;
                                if (C == 62) return 43;
                                if (C == 63) return 47;
                              }
                              throw "n:" + C;
                            };
                          return (
                            (u.writeByte = function (C) {
                              for (
                                y = (y << 8) | (255 & C), t += 8, o += 1;
                                t >= 6;

                              )
                                p(y >>> (t - 6)), (t -= 6);
                            }),
                            (u.flush = function () {
                              if (
                                (t > 0 && (p(y << (6 - t)), (y = 0), (t = 0)),
                                o % 3 != 0)
                              )
                                for (var C = 3 - (o % 3), c = 0; c < C; c += 1)
                                  i += "=";
                            }),
                            (u.toString = function () {
                              return i;
                            }),
                            u
                          );
                        })(),
                        N = R.toByteArray(),
                        ae = 0;
                      ae < N.length;
                      ae += 1
                    )
                      T.writeByte(N[ae]);
                    return T.flush(), "data:image/gif;base64," + T;
                  };
                return E;
              })();
            (M.stringToBytesFuncs["UTF-8"] = function (E) {
              return (function (H) {
                for (var U = [], j = 0; j < H.length; j++) {
                  var P = H.charCodeAt(j);
                  P < 128
                    ? U.push(P)
                    : P < 2048
                    ? U.push(192 | (P >> 6), 128 | (63 & P))
                    : P < 55296 || P >= 57344
                    ? U.push(
                        224 | (P >> 12),
                        128 | ((P >> 6) & 63),
                        128 | (63 & P)
                      )
                    : (j++,
                      (P =
                        65536 +
                        (((1023 & P) << 10) | (1023 & H.charCodeAt(j)))),
                      U.push(
                        240 | (P >> 18),
                        128 | ((P >> 12) & 63),
                        128 | ((P >> 6) & 63),
                        128 | (63 & P)
                      ));
                }
                return U;
              })(E);
            }),
              (S =
                typeof (m = function () {
                  return M;
                }) == "function"
                  ? m.apply(v, [])
                  : m) === void 0 || (d.exports = S);
          },
          676: (d, v, m) => {
            m.d(v, { default: () => ae });
            var S = function () {
                return (S =
                  Object.assign ||
                  function (y) {
                    for (var t, o = 1, i = arguments.length; o < i; o++)
                      for (var u in (t = arguments[o]))
                        Object.prototype.hasOwnProperty.call(t, u) &&
                          (y[u] = t[u]);
                    return y;
                  }).apply(this, arguments);
              },
              M = function () {
                for (var y = 0, t = 0, o = arguments.length; t < o; t++)
                  y += arguments[t].length;
                var i = Array(y),
                  u = 0;
                for (t = 0; t < o; t++)
                  for (
                    var p = arguments[t], h = 0, C = p.length;
                    h < C;
                    h++, u++
                  )
                    i[u] = p[h];
                return i;
              },
              E = function (y) {
                return !!y && typeof y == "object" && !Array.isArray(y);
              };
            function H(y) {
              for (var t = [], o = 1; o < arguments.length; o++)
                t[o - 1] = arguments[o];
              if (!t.length) return y;
              var i = t.shift();
              return i !== void 0 && E(y) && E(i)
                ? ((y = S({}, y)),
                  Object.keys(i).forEach(function (u) {
                    var p = y[u],
                      h = i[u];
                    Array.isArray(p) && Array.isArray(h)
                      ? (y[u] = h)
                      : E(p) && E(h)
                      ? (y[u] = H(Object.assign({}, p), h))
                      : (y[u] = h);
                  }),
                  H.apply(void 0, M([y], t)))
                : y;
            }
            function U(y, t) {
              var o = document.createElement("a");
              (o.download = t),
                (o.href = y),
                document.body.appendChild(o),
                o.click(),
                document.body.removeChild(o);
            }
            function j(y) {
              return (
                (t = this),
                (o = void 0),
                (u = function () {
                  return (function (p, h) {
                    var C,
                      c,
                      f,
                      s,
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
                      (s = { next: k(0), throw: k(1), return: k(2) }),
                      typeof Symbol == "function" &&
                        (s[Symbol.iterator] = function () {
                          return this;
                        }),
                      s
                    );
                    function k(I) {
                      return function (F) {
                        return (function (z) {
                          if (C)
                            throw new TypeError(
                              "Generator is already executing."
                            );
                          for (; g; )
                            try {
                              if (
                                ((C = 1),
                                c &&
                                  (f =
                                    2 & z[0]
                                      ? c.return
                                      : z[0]
                                      ? c.throw ||
                                        ((f = c.return) && f.call(c), 0)
                                      : c.next) &&
                                  !(f = f.call(c, z[1])).done)
                              )
                                return f;
                              switch (
                                ((c = 0), f && (z = [2 & z[0], f.value]), z[0])
                              ) {
                                case 0:
                                case 1:
                                  f = z;
                                  break;
                                case 4:
                                  return g.label++, { value: z[1], done: !1 };
                                case 5:
                                  g.label++, (c = z[1]), (z = [0]);
                                  continue;
                                case 7:
                                  (z = g.ops.pop()), g.trys.pop();
                                  continue;
                                default:
                                  if (
                                    !(
                                      (f =
                                        (f = g.trys).length > 0 &&
                                        f[f.length - 1]) ||
                                      (z[0] !== 6 && z[0] !== 2)
                                    )
                                  ) {
                                    g = 0;
                                    continue;
                                  }
                                  if (
                                    z[0] === 3 &&
                                    (!f || (z[1] > f[0] && z[1] < f[3]))
                                  ) {
                                    g.label = z[1];
                                    break;
                                  }
                                  if (z[0] === 6 && g.label < f[1]) {
                                    (g.label = f[1]), (f = z);
                                    break;
                                  }
                                  if (f && g.label < f[2]) {
                                    (g.label = f[2]), g.ops.push(z);
                                    break;
                                  }
                                  f[2] && g.ops.pop(), g.trys.pop();
                                  continue;
                              }
                              z = h.call(p, g);
                            } catch (Q) {
                              (z = [6, Q]), (c = 0);
                            } finally {
                              C = f = 0;
                            }
                          if (5 & z[0]) throw z[1];
                          return { value: z[0] ? z[1] : void 0, done: !0 };
                        })([I, F]);
                      };
                    }
                  })(this, function (p) {
                    return [
                      2,
                      new Promise(function (h) {
                        var C = new XMLHttpRequest();
                        (C.onload = function () {
                          var c = new FileReader();
                          (c.onloadend = function () {
                            h(c.result);
                          }),
                            c.readAsDataURL(C.response);
                        }),
                          C.open("GET", y),
                          (C.responseType = "blob"),
                          C.send();
                      }),
                    ];
                  });
                }),
                new ((i = void 0) || (i = Promise))(function (p, h) {
                  function C(s) {
                    try {
                      f(u.next(s));
                    } catch (g) {
                      h(g);
                    }
                  }
                  function c(s) {
                    try {
                      f(u.throw(s));
                    } catch (g) {
                      h(g);
                    }
                  }
                  function f(s) {
                    var g;
                    s.done
                      ? p(s.value)
                      : ((g = s.value),
                        g instanceof i
                          ? g
                          : new i(function (k) {
                              k(g);
                            })).then(C, c);
                  }
                  f((u = u.apply(t, o || [])).next());
                })
              );
              var t, o, i, u;
            }
            const P = { L: 0.07, M: 0.15, Q: 0.25, H: 0.3 };
            var L = function () {
              return (L =
                Object.assign ||
                function (y) {
                  for (var t, o = 1, i = arguments.length; o < i; o++)
                    for (var u in (t = arguments[o]))
                      Object.prototype.hasOwnProperty.call(t, u) &&
                        (y[u] = t[u]);
                  return y;
                }).apply(this, arguments);
            };
            const J = (function () {
              function y(t) {
                var o = t.svg,
                  i = t.type;
                (this._svg = o), (this._type = i);
              }
              return (
                (y.prototype.draw = function (t, o, i, u) {
                  var p;
                  switch (this._type) {
                    case "dots":
                      p = this._drawDot;
                      break;
                    case "classy":
                      p = this._drawClassy;
                      break;
                    case "classy-rounded":
                      p = this._drawClassyRounded;
                      break;
                    case "rounded":
                      p = this._drawRounded;
                      break;
                    case "extra-rounded":
                      p = this._drawExtraRounded;
                      break;
                    case "square":
                    default:
                      p = this._drawSquare;
                  }
                  p.call(this, { x: t, y: o, size: i, getNeighbor: u });
                }),
                (y.prototype._rotateFigure = function (t) {
                  var o,
                    i = t.x,
                    u = t.y,
                    p = t.size,
                    h = t.rotation,
                    C = h === void 0 ? 0 : h,
                    c = i + p / 2,
                    f = u + p / 2;
                  (0, t.draw)(),
                    (o = this._element) === null ||
                      o === void 0 ||
                      o.setAttribute(
                        "transform",
                        "rotate(" +
                          (180 * C) / Math.PI +
                          "," +
                          c +
                          "," +
                          f +
                          ")"
                      );
                }),
                (y.prototype._basicDot = function (t) {
                  var o = this,
                    i = t.size,
                    u = t.x,
                    p = t.y;
                  this._rotateFigure(
                    L(L({}, t), {
                      draw: function () {
                        (o._element = document.createElementNS(
                          "http://www.w3.org/2000/svg",
                          "circle"
                        )),
                          o._element.setAttribute("cx", String(u + i / 2)),
                          o._element.setAttribute("cy", String(p + i / 2)),
                          o._element.setAttribute("r", String(i / 2));
                      },
                    })
                  );
                }),
                (y.prototype._basicSquare = function (t) {
                  var o = this,
                    i = t.size,
                    u = t.x,
                    p = t.y;
                  this._rotateFigure(
                    L(L({}, t), {
                      draw: function () {
                        (o._element = document.createElementNS(
                          "http://www.w3.org/2000/svg",
                          "rect"
                        )),
                          o._element.setAttribute("x", String(u)),
                          o._element.setAttribute("y", String(p)),
                          o._element.setAttribute("width", String(i)),
                          o._element.setAttribute("height", String(i));
                      },
                    })
                  );
                }),
                (y.prototype._basicSideRounded = function (t) {
                  var o = this,
                    i = t.size,
                    u = t.x,
                    p = t.y;
                  this._rotateFigure(
                    L(L({}, t), {
                      draw: function () {
                        (o._element = document.createElementNS(
                          "http://www.w3.org/2000/svg",
                          "path"
                        )),
                          o._element.setAttribute(
                            "d",
                            "M " +
                              u +
                              " " +
                              p +
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
                  var o = this,
                    i = t.size,
                    u = t.x,
                    p = t.y;
                  this._rotateFigure(
                    L(L({}, t), {
                      draw: function () {
                        (o._element = document.createElementNS(
                          "http://www.w3.org/2000/svg",
                          "path"
                        )),
                          o._element.setAttribute(
                            "d",
                            "M " +
                              u +
                              " " +
                              p +
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
                  var o = this,
                    i = t.size,
                    u = t.x,
                    p = t.y;
                  this._rotateFigure(
                    L(L({}, t), {
                      draw: function () {
                        (o._element = document.createElementNS(
                          "http://www.w3.org/2000/svg",
                          "path"
                        )),
                          o._element.setAttribute(
                            "d",
                            "M " +
                              u +
                              " " +
                              p +
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
                  var o = this,
                    i = t.size,
                    u = t.x,
                    p = t.y;
                  this._rotateFigure(
                    L(L({}, t), {
                      draw: function () {
                        (o._element = document.createElementNS(
                          "http://www.w3.org/2000/svg",
                          "path"
                        )),
                          o._element.setAttribute(
                            "d",
                            "M " +
                              u +
                              " " +
                              p +
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
                  var o = t.x,
                    i = t.y,
                    u = t.size;
                  this._basicDot({ x: o, y: i, size: u, rotation: 0 });
                }),
                (y.prototype._drawSquare = function (t) {
                  var o = t.x,
                    i = t.y,
                    u = t.size;
                  this._basicSquare({ x: o, y: i, size: u, rotation: 0 });
                }),
                (y.prototype._drawRounded = function (t) {
                  var o = t.x,
                    i = t.y,
                    u = t.size,
                    p = t.getNeighbor,
                    h = p ? +p(-1, 0) : 0,
                    C = p ? +p(1, 0) : 0,
                    c = p ? +p(0, -1) : 0,
                    f = p ? +p(0, 1) : 0,
                    s = h + C + c + f;
                  if (s !== 0)
                    if (s > 2 || (h && C) || (c && f))
                      this._basicSquare({ x: o, y: i, size: u, rotation: 0 });
                    else {
                      if (s === 2) {
                        var g = 0;
                        return (
                          h && c
                            ? (g = Math.PI / 2)
                            : c && C
                            ? (g = Math.PI)
                            : C && f && (g = -Math.PI / 2),
                          void this._basicCornerRounded({
                            x: o,
                            y: i,
                            size: u,
                            rotation: g,
                          })
                        );
                      }
                      if (s === 1)
                        return (
                          (g = 0),
                          c
                            ? (g = Math.PI / 2)
                            : C
                            ? (g = Math.PI)
                            : f && (g = -Math.PI / 2),
                          void this._basicSideRounded({
                            x: o,
                            y: i,
                            size: u,
                            rotation: g,
                          })
                        );
                    }
                  else this._basicDot({ x: o, y: i, size: u, rotation: 0 });
                }),
                (y.prototype._drawExtraRounded = function (t) {
                  var o = t.x,
                    i = t.y,
                    u = t.size,
                    p = t.getNeighbor,
                    h = p ? +p(-1, 0) : 0,
                    C = p ? +p(1, 0) : 0,
                    c = p ? +p(0, -1) : 0,
                    f = p ? +p(0, 1) : 0,
                    s = h + C + c + f;
                  if (s !== 0)
                    if (s > 2 || (h && C) || (c && f))
                      this._basicSquare({ x: o, y: i, size: u, rotation: 0 });
                    else {
                      if (s === 2) {
                        var g = 0;
                        return (
                          h && c
                            ? (g = Math.PI / 2)
                            : c && C
                            ? (g = Math.PI)
                            : C && f && (g = -Math.PI / 2),
                          void this._basicCornerExtraRounded({
                            x: o,
                            y: i,
                            size: u,
                            rotation: g,
                          })
                        );
                      }
                      if (s === 1)
                        return (
                          (g = 0),
                          c
                            ? (g = Math.PI / 2)
                            : C
                            ? (g = Math.PI)
                            : f && (g = -Math.PI / 2),
                          void this._basicSideRounded({
                            x: o,
                            y: i,
                            size: u,
                            rotation: g,
                          })
                        );
                    }
                  else this._basicDot({ x: o, y: i, size: u, rotation: 0 });
                }),
                (y.prototype._drawClassy = function (t) {
                  var o = t.x,
                    i = t.y,
                    u = t.size,
                    p = t.getNeighbor,
                    h = p ? +p(-1, 0) : 0,
                    C = p ? +p(1, 0) : 0,
                    c = p ? +p(0, -1) : 0,
                    f = p ? +p(0, 1) : 0;
                  h + C + c + f !== 0
                    ? h || c
                      ? C || f
                        ? this._basicSquare({
                            x: o,
                            y: i,
                            size: u,
                            rotation: 0,
                          })
                        : this._basicCornerRounded({
                            x: o,
                            y: i,
                            size: u,
                            rotation: Math.PI / 2,
                          })
                      : this._basicCornerRounded({
                          x: o,
                          y: i,
                          size: u,
                          rotation: -Math.PI / 2,
                        })
                    : this._basicCornersRounded({
                        x: o,
                        y: i,
                        size: u,
                        rotation: Math.PI / 2,
                      });
                }),
                (y.prototype._drawClassyRounded = function (t) {
                  var o = t.x,
                    i = t.y,
                    u = t.size,
                    p = t.getNeighbor,
                    h = p ? +p(-1, 0) : 0,
                    C = p ? +p(1, 0) : 0,
                    c = p ? +p(0, -1) : 0,
                    f = p ? +p(0, 1) : 0;
                  h + C + c + f !== 0
                    ? h || c
                      ? C || f
                        ? this._basicSquare({
                            x: o,
                            y: i,
                            size: u,
                            rotation: 0,
                          })
                        : this._basicCornerExtraRounded({
                            x: o,
                            y: i,
                            size: u,
                            rotation: Math.PI / 2,
                          })
                      : this._basicCornerExtraRounded({
                          x: o,
                          y: i,
                          size: u,
                          rotation: -Math.PI / 2,
                        })
                    : this._basicCornersRounded({
                        x: o,
                        y: i,
                        size: u,
                        rotation: Math.PI / 2,
                      });
                }),
                y
              );
            })();
            var Z = function () {
              return (Z =
                Object.assign ||
                function (y) {
                  for (var t, o = 1, i = arguments.length; o < i; o++)
                    for (var u in (t = arguments[o]))
                      Object.prototype.hasOwnProperty.call(t, u) &&
                        (y[u] = t[u]);
                  return y;
                }).apply(this, arguments);
            };
            const Y = (function () {
              function y(t) {
                var o = t.svg,
                  i = t.type;
                (this._svg = o), (this._type = i);
              }
              return (
                (y.prototype.draw = function (t, o, i, u) {
                  var p;
                  switch (this._type) {
                    case "square":
                      p = this._drawSquare;
                      break;
                    case "extra-rounded":
                      p = this._drawExtraRounded;
                      break;
                    case "dot":
                    default:
                      p = this._drawDot;
                  }
                  p.call(this, { x: t, y: o, size: i, rotation: u });
                }),
                (y.prototype._rotateFigure = function (t) {
                  var o,
                    i = t.x,
                    u = t.y,
                    p = t.size,
                    h = t.rotation,
                    C = h === void 0 ? 0 : h,
                    c = i + p / 2,
                    f = u + p / 2;
                  (0, t.draw)(),
                    (o = this._element) === null ||
                      o === void 0 ||
                      o.setAttribute(
                        "transform",
                        "rotate(" +
                          (180 * C) / Math.PI +
                          "," +
                          c +
                          "," +
                          f +
                          ")"
                      );
                }),
                (y.prototype._basicDot = function (t) {
                  var o = this,
                    i = t.size,
                    u = t.x,
                    p = t.y,
                    h = i / 7;
                  this._rotateFigure(
                    Z(Z({}, t), {
                      draw: function () {
                        (o._element = document.createElementNS(
                          "http://www.w3.org/2000/svg",
                          "path"
                        )),
                          o._element.setAttribute("clip-rule", "evenodd"),
                          o._element.setAttribute(
                            "d",
                            "M " +
                              (u + i / 2) +
                              " " +
                              p +
                              "a " +
                              i / 2 +
                              " " +
                              i / 2 +
                              " 0 1 0 0.1 0zm 0 " +
                              h +
                              "a " +
                              (i / 2 - h) +
                              " " +
                              (i / 2 - h) +
                              " 0 1 1 -0.1 0Z"
                          );
                      },
                    })
                  );
                }),
                (y.prototype._basicSquare = function (t) {
                  var o = this,
                    i = t.size,
                    u = t.x,
                    p = t.y,
                    h = i / 7;
                  this._rotateFigure(
                    Z(Z({}, t), {
                      draw: function () {
                        (o._element = document.createElementNS(
                          "http://www.w3.org/2000/svg",
                          "path"
                        )),
                          o._element.setAttribute("clip-rule", "evenodd"),
                          o._element.setAttribute(
                            "d",
                            "M " +
                              u +
                              " " +
                              p +
                              "v " +
                              i +
                              "h " +
                              i +
                              "v " +
                              -i +
                              "zM " +
                              (u + h) +
                              " " +
                              (p + h) +
                              "h " +
                              (i - 2 * h) +
                              "v " +
                              (i - 2 * h) +
                              "h " +
                              (2 * h - i) +
                              "z"
                          );
                      },
                    })
                  );
                }),
                (y.prototype._basicExtraRounded = function (t) {
                  var o = this,
                    i = t.size,
                    u = t.x,
                    p = t.y,
                    h = i / 7;
                  this._rotateFigure(
                    Z(Z({}, t), {
                      draw: function () {
                        (o._element = document.createElementNS(
                          "http://www.w3.org/2000/svg",
                          "path"
                        )),
                          o._element.setAttribute("clip-rule", "evenodd"),
                          o._element.setAttribute(
                            "d",
                            "M " +
                              u +
                              " " +
                              (p + 2.5 * h) +
                              "v " +
                              2 * h +
                              "a " +
                              2.5 * h +
                              " " +
                              2.5 * h +
                              ", 0, 0, 0, " +
                              2.5 * h +
                              " " +
                              2.5 * h +
                              "h " +
                              2 * h +
                              "a " +
                              2.5 * h +
                              " " +
                              2.5 * h +
                              ", 0, 0, 0, " +
                              2.5 * h +
                              " " +
                              2.5 * -h +
                              "v " +
                              -2 * h +
                              "a " +
                              2.5 * h +
                              " " +
                              2.5 * h +
                              ", 0, 0, 0, " +
                              2.5 * -h +
                              " " +
                              2.5 * -h +
                              "h " +
                              -2 * h +
                              "a " +
                              2.5 * h +
                              " " +
                              2.5 * h +
                              ", 0, 0, 0, " +
                              2.5 * -h +
                              " " +
                              2.5 * h +
                              "M " +
                              (u + 2.5 * h) +
                              " " +
                              (p + h) +
                              "h " +
                              2 * h +
                              "a " +
                              1.5 * h +
                              " " +
                              1.5 * h +
                              ", 0, 0, 1, " +
                              1.5 * h +
                              " " +
                              1.5 * h +
                              "v " +
                              2 * h +
                              "a " +
                              1.5 * h +
                              " " +
                              1.5 * h +
                              ", 0, 0, 1, " +
                              1.5 * -h +
                              " " +
                              1.5 * h +
                              "h " +
                              -2 * h +
                              "a " +
                              1.5 * h +
                              " " +
                              1.5 * h +
                              ", 0, 0, 1, " +
                              1.5 * -h +
                              " " +
                              1.5 * -h +
                              "v " +
                              -2 * h +
                              "a " +
                              1.5 * h +
                              " " +
                              1.5 * h +
                              ", 0, 0, 1, " +
                              1.5 * h +
                              " " +
                              1.5 * -h
                          );
                      },
                    })
                  );
                }),
                (y.prototype._drawDot = function (t) {
                  var o = t.x,
                    i = t.y,
                    u = t.size,
                    p = t.rotation;
                  this._basicDot({ x: o, y: i, size: u, rotation: p });
                }),
                (y.prototype._drawSquare = function (t) {
                  var o = t.x,
                    i = t.y,
                    u = t.size,
                    p = t.rotation;
                  this._basicSquare({ x: o, y: i, size: u, rotation: p });
                }),
                (y.prototype._drawExtraRounded = function (t) {
                  var o = t.x,
                    i = t.y,
                    u = t.size,
                    p = t.rotation;
                  this._basicExtraRounded({ x: o, y: i, size: u, rotation: p });
                }),
                y
              );
            })();
            var D = function () {
              return (D =
                Object.assign ||
                function (y) {
                  for (var t, o = 1, i = arguments.length; o < i; o++)
                    for (var u in (t = arguments[o]))
                      Object.prototype.hasOwnProperty.call(t, u) &&
                        (y[u] = t[u]);
                  return y;
                }).apply(this, arguments);
            };
            const ue = (function () {
                function y(t) {
                  var o = t.svg,
                    i = t.type;
                  (this._svg = o), (this._type = i);
                }
                return (
                  (y.prototype.draw = function (t, o, i, u) {
                    var p;
                    switch (this._type) {
                      case "square":
                        p = this._drawSquare;
                        break;
                      case "dot":
                      default:
                        p = this._drawDot;
                    }
                    p.call(this, { x: t, y: o, size: i, rotation: u });
                  }),
                  (y.prototype._rotateFigure = function (t) {
                    var o,
                      i = t.x,
                      u = t.y,
                      p = t.size,
                      h = t.rotation,
                      C = h === void 0 ? 0 : h,
                      c = i + p / 2,
                      f = u + p / 2;
                    (0, t.draw)(),
                      (o = this._element) === null ||
                        o === void 0 ||
                        o.setAttribute(
                          "transform",
                          "rotate(" +
                            (180 * C) / Math.PI +
                            "," +
                            c +
                            "," +
                            f +
                            ")"
                        );
                  }),
                  (y.prototype._basicDot = function (t) {
                    var o = this,
                      i = t.size,
                      u = t.x,
                      p = t.y;
                    this._rotateFigure(
                      D(D({}, t), {
                        draw: function () {
                          (o._element = document.createElementNS(
                            "http://www.w3.org/2000/svg",
                            "circle"
                          )),
                            o._element.setAttribute("cx", String(u + i / 2)),
                            o._element.setAttribute("cy", String(p + i / 2)),
                            o._element.setAttribute("r", String(i / 2));
                        },
                      })
                    );
                  }),
                  (y.prototype._basicSquare = function (t) {
                    var o = this,
                      i = t.size,
                      u = t.x,
                      p = t.y;
                    this._rotateFigure(
                      D(D({}, t), {
                        draw: function () {
                          (o._element = document.createElementNS(
                            "http://www.w3.org/2000/svg",
                            "rect"
                          )),
                            o._element.setAttribute("x", String(u)),
                            o._element.setAttribute("y", String(p)),
                            o._element.setAttribute("width", String(i)),
                            o._element.setAttribute("height", String(i));
                        },
                      })
                    );
                  }),
                  (y.prototype._drawDot = function (t) {
                    var o = t.x,
                      i = t.y,
                      u = t.size,
                      p = t.rotation;
                    this._basicDot({ x: o, y: i, size: u, rotation: p });
                  }),
                  (y.prototype._drawSquare = function (t) {
                    var o = t.x,
                      i = t.y,
                      u = t.size,
                      p = t.rotation;
                    this._basicSquare({ x: o, y: i, size: u, rotation: p });
                  }),
                  y
                );
              })(),
              le = "circle";
            var _e = function (y, t, o, i) {
                return new (o || (o = Promise))(function (u, p) {
                  function h(f) {
                    try {
                      c(i.next(f));
                    } catch (s) {
                      p(s);
                    }
                  }
                  function C(f) {
                    try {
                      c(i.throw(f));
                    } catch (s) {
                      p(s);
                    }
                  }
                  function c(f) {
                    var s;
                    f.done
                      ? u(f.value)
                      : ((s = f.value),
                        s instanceof o
                          ? s
                          : new o(function (g) {
                              g(s);
                            })).then(h, C);
                  }
                  c((i = i.apply(y, t || [])).next());
                });
              },
              je = function (y, t) {
                var o,
                  i,
                  u,
                  p,
                  h = {
                    label: 0,
                    sent: function () {
                      if (1 & u[0]) throw u[1];
                      return u[1];
                    },
                    trys: [],
                    ops: [],
                  };
                return (
                  (p = { next: C(0), throw: C(1), return: C(2) }),
                  typeof Symbol == "function" &&
                    (p[Symbol.iterator] = function () {
                      return this;
                    }),
                  p
                );
                function C(c) {
                  return function (f) {
                    return (function (s) {
                      if (o)
                        throw new TypeError("Generator is already executing.");
                      for (; h; )
                        try {
                          if (
                            ((o = 1),
                            i &&
                              (u =
                                2 & s[0]
                                  ? i.return
                                  : s[0]
                                  ? i.throw || ((u = i.return) && u.call(i), 0)
                                  : i.next) &&
                              !(u = u.call(i, s[1])).done)
                          )
                            return u;
                          switch (
                            ((i = 0), u && (s = [2 & s[0], u.value]), s[0])
                          ) {
                            case 0:
                            case 1:
                              u = s;
                              break;
                            case 4:
                              return h.label++, { value: s[1], done: !1 };
                            case 5:
                              h.label++, (i = s[1]), (s = [0]);
                              continue;
                            case 7:
                              (s = h.ops.pop()), h.trys.pop();
                              continue;
                            default:
                              if (
                                !(
                                  (u =
                                    (u = h.trys).length > 0 &&
                                    u[u.length - 1]) ||
                                  (s[0] !== 6 && s[0] !== 2)
                                )
                              ) {
                                h = 0;
                                continue;
                              }
                              if (
                                s[0] === 3 &&
                                (!u || (s[1] > u[0] && s[1] < u[3]))
                              ) {
                                h.label = s[1];
                                break;
                              }
                              if (s[0] === 6 && h.label < u[1]) {
                                (h.label = u[1]), (u = s);
                                break;
                              }
                              if (u && h.label < u[2]) {
                                (h.label = u[2]), h.ops.push(s);
                                break;
                              }
                              u[2] && h.ops.pop(), h.trys.pop();
                              continue;
                          }
                          s = t.call(y, h);
                        } catch (g) {
                          (s = [6, g]), (i = 0);
                        } finally {
                          o = u = 0;
                        }
                      if (5 & s[0]) throw s[1];
                      return { value: s[0] ? s[1] : void 0, done: !0 };
                    })([c, f]);
                  };
                }
              },
              ke = [
                [1, 1, 1, 1, 1, 1, 1],
                [1, 0, 0, 0, 0, 0, 1],
                [1, 0, 0, 0, 0, 0, 1],
                [1, 0, 0, 0, 0, 0, 1],
                [1, 0, 0, 0, 0, 0, 1],
                [1, 0, 0, 0, 0, 0, 1],
                [1, 1, 1, 1, 1, 1, 1],
              ],
              xe = [
                [0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0],
                [0, 0, 1, 1, 1, 0, 0],
                [0, 0, 1, 1, 1, 0, 0],
                [0, 0, 1, 1, 1, 0, 0],
                [0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0],
              ];
            const ze = (function () {
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
                    return _e(this, void 0, void 0, function () {
                      var o,
                        i,
                        u,
                        p,
                        h,
                        C,
                        c,
                        f,
                        s,
                        g,
                        k = this;
                      return je(this, function (I) {
                        switch (I.label) {
                          case 0:
                            return (
                              (o = t.getModuleCount()),
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
                              (p = Math.floor(u / o)),
                              (h = {
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
                            if ((I.sent(), !this._image)) return [2];
                            (C = this._options),
                              (c = C.imageOptions),
                              (f = C.qrOptions),
                              (s = c.imageSize * P[f.errorCorrectionLevel]),
                              (g = Math.floor(s * o * o)),
                              (h = (function (F) {
                                var z = F.originalHeight,
                                  Q = F.originalWidth,
                                  K = F.maxHiddenDots,
                                  V = F.maxHiddenAxisDots,
                                  ce = F.dotSize,
                                  X = { x: 0, y: 0 },
                                  $ = { x: 0, y: 0 };
                                if (z <= 0 || Q <= 0 || K <= 0 || ce <= 0)
                                  return {
                                    height: 0,
                                    width: 0,
                                    hideYDots: 0,
                                    hideXDots: 0,
                                  };
                                var W = z / Q;
                                return (
                                  (X.x = Math.floor(Math.sqrt(K / W))),
                                  X.x <= 0 && (X.x = 1),
                                  V && V < X.x && (X.x = V),
                                  X.x % 2 == 0 && X.x--,
                                  ($.x = X.x * ce),
                                  (X.y = 1 + 2 * Math.ceil((X.x * W - 1) / 2)),
                                  ($.y = Math.round($.x * W)),
                                  (X.y * X.x > K || (V && V < X.y)) &&
                                    (V && V < X.y
                                      ? ((X.y = V), X.y % 2 == 0 && X.x--)
                                      : (X.y -= 2),
                                    ($.y = X.y * ce),
                                    (X.x =
                                      1 + 2 * Math.ceil((X.y / W - 1) / 2)),
                                    ($.x = Math.round($.y / W))),
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
                                maxHiddenAxisDots: o - 14,
                                dotSize: p,
                              })),
                              (I.label = 2);
                          case 2:
                            return (
                              this.drawBackground(),
                              this.drawDots(function (F, z) {
                                var Q, K, V, ce, X, $;
                                return !(
                                  (k._options.imageOptions.hideBackgroundDots &&
                                    F >= (o - h.hideXDots) / 2 &&
                                    F < (o + h.hideXDots) / 2 &&
                                    z >= (o - h.hideYDots) / 2 &&
                                    z < (o + h.hideYDots) / 2) ||
                                  ((Q = ke[F]) === null || Q === void 0
                                    ? void 0
                                    : Q[z]) ||
                                  ((K = ke[F - o + 7]) === null || K === void 0
                                    ? void 0
                                    : K[z]) ||
                                  ((V = ke[F]) === null || V === void 0
                                    ? void 0
                                    : V[z - o + 7]) ||
                                  ((ce = xe[F]) === null || ce === void 0
                                    ? void 0
                                    : ce[z]) ||
                                  ((X = xe[F - o + 7]) === null || X === void 0
                                    ? void 0
                                    : X[z]) ||
                                  (($ = xe[F]) === null || $ === void 0
                                    ? void 0
                                    : $[z - o + 7])
                                );
                              }),
                              this.drawCorners(),
                              this._options.image
                                ? [
                                    4,
                                    this.drawImage({
                                      width: h.width,
                                      height: h.height,
                                      count: o,
                                      dotSize: p,
                                    }),
                                  ]
                                : [3, 4]
                            );
                          case 3:
                            I.sent(), (I.label = 4);
                          case 4:
                            return [2];
                        }
                      });
                    });
                  }),
                  (y.prototype.drawBackground = function () {
                    var t,
                      o,
                      i,
                      u = this._element,
                      p = this._options;
                    if (u) {
                      var h =
                          (t = p.backgroundOptions) === null || t === void 0
                            ? void 0
                            : t.gradient,
                        C =
                          (o = p.backgroundOptions) === null || o === void 0
                            ? void 0
                            : o.color;
                      if (
                        ((h || C) &&
                          this._createColor({
                            options: h,
                            color: C,
                            additionalRotation: 0,
                            x: 0,
                            y: 0,
                            height: p.height,
                            width: p.width,
                            name: "background-color",
                          }),
                        (i = p.backgroundOptions) === null || i === void 0
                          ? void 0
                          : i.round)
                      ) {
                        var c = Math.min(p.width, p.height),
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
                          f.setAttribute("x", String((p.width - c) / 2)),
                          f.setAttribute("y", String((p.height - c) / 2)),
                          f.setAttribute("width", String(c)),
                          f.setAttribute("height", String(c)),
                          f.setAttribute(
                            "rx",
                            String((c / 2) * p.backgroundOptions.round)
                          ),
                          this._backgroundClipPath.appendChild(f);
                      }
                    }
                  }),
                  (y.prototype.drawDots = function (t) {
                    var o,
                      i,
                      u = this;
                    if (!this._qr) throw "QR code is not defined";
                    var p = this._options,
                      h = this._qr.getModuleCount();
                    if (h > p.width || h > p.height)
                      throw "The canvas is too small.";
                    var C = Math.min(p.width, p.height) - 2 * p.margin,
                      c = p.shape === le ? C / Math.sqrt(2) : C,
                      f = Math.floor(c / h),
                      s = Math.floor((p.width - h * f) / 2),
                      g = Math.floor((p.height - h * f) / 2),
                      k = new J({
                        svg: this._element,
                        type: p.dotsOptions.type,
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
                          (o = p.dotsOptions) === null || o === void 0
                            ? void 0
                            : o.gradient,
                        color: p.dotsOptions.color,
                        additionalRotation: 0,
                        x: 0,
                        y: 0,
                        height: p.height,
                        width: p.width,
                        name: "dot-color",
                      });
                    for (
                      var I = function (ve) {
                          for (
                            var oe = function (fe) {
                                return t && !t(ve, fe)
                                  ? "continue"
                                  : !((i = F._qr) === null || i === void 0) &&
                                    i.isDark(ve, fe)
                                  ? (k.draw(
                                      s + ve * f,
                                      g + fe * f,
                                      f,
                                      function (we, ye) {
                                        return (
                                          !(
                                            ve + we < 0 ||
                                            fe + ye < 0 ||
                                            ve + we >= h ||
                                            fe + ye >= h
                                          ) &&
                                          !(t && !t(ve + we, fe + ye)) &&
                                          !!u._qr &&
                                          u._qr.isDark(ve + we, fe + ye)
                                        );
                                      }
                                    ),
                                    void (
                                      k._element &&
                                      F._dotsClipPath &&
                                      F._dotsClipPath.appendChild(k._element)
                                    ))
                                  : "continue";
                              },
                              me = 0;
                            me < h;
                            me++
                          )
                            oe(me);
                        },
                        F = this,
                        z = 0;
                      z < h;
                      z++
                    )
                      I(z);
                    if (p.shape === le) {
                      var Q = Math.floor((C / f - h) / 2),
                        K = h + 2 * Q,
                        V = s - Q * f,
                        ce = g - Q * f,
                        X = [],
                        $ = Math.floor(K / 2);
                      for (z = 0; z < K; z++) {
                        X[z] = [];
                        for (var W = 0; W < K; W++)
                          (z >= Q - 1 &&
                            z <= K - Q &&
                            W >= Q - 1 &&
                            W <= K - Q) ||
                          Math.sqrt((z - $) * (z - $) + (W - $) * (W - $)) > $
                            ? (X[z][W] = 0)
                            : (X[z][W] = this._qr.isDark(
                                W - 2 * Q < 0 ? W : W >= h ? W - 2 * Q : W - Q,
                                z - 2 * Q < 0 ? z : z >= h ? z - 2 * Q : z - Q
                              )
                                ? 1
                                : 0);
                      }
                      var te = function (ve) {
                          for (
                            var oe = function (fe) {
                                if (!X[ve][fe]) return "continue";
                                k.draw(
                                  V + ve * f,
                                  ce + fe * f,
                                  f,
                                  function (we, ye) {
                                    var be;
                                    return !!(
                                      !(
                                        (be = X[ve + we]) === null ||
                                        be === void 0
                                      ) && be[fe + ye]
                                    );
                                  }
                                ),
                                  k._element &&
                                    Oe._dotsClipPath &&
                                    Oe._dotsClipPath.appendChild(k._element);
                              },
                              me = 0;
                            me < K;
                            me++
                          )
                            oe(me);
                        },
                        Oe = this;
                      for (z = 0; z < K; z++) te(z);
                    }
                  }),
                  (y.prototype.drawCorners = function () {
                    var t = this;
                    if (!this._qr) throw "QR code is not defined";
                    var o = this._element,
                      i = this._options;
                    if (!o) throw "Element code is not defined";
                    var u = this._qr.getModuleCount(),
                      p = Math.min(i.width, i.height) - 2 * i.margin,
                      h = i.shape === le ? p / Math.sqrt(2) : p,
                      C = Math.floor(h / u),
                      c = 7 * C,
                      f = 3 * C,
                      s = Math.floor((i.width - u * C) / 2),
                      g = Math.floor((i.height - u * C) / 2);
                    [
                      [0, 0, 0],
                      [1, 0, Math.PI / 2],
                      [0, 1, -Math.PI / 2],
                    ].forEach(function (k) {
                      var I,
                        F,
                        z,
                        Q,
                        K,
                        V,
                        ce,
                        X,
                        $,
                        W,
                        te,
                        Oe,
                        ve = k[0],
                        oe = k[1],
                        me = k[2],
                        fe = s + ve * C * (u - 7),
                        we = g + oe * C * (u - 7),
                        ye = t._dotsClipPath,
                        be = t._dotsClipPath;
                      if (
                        ((((I = i.cornersSquareOptions) === null || I === void 0
                          ? void 0
                          : I.gradient) ||
                          ((F = i.cornersSquareOptions) === null || F === void 0
                            ? void 0
                            : F.color)) &&
                          ((ye = document.createElementNS(
                            "http://www.w3.org/2000/svg",
                            "clipPath"
                          )).setAttribute(
                            "id",
                            "clip-path-corners-square-color-" + ve + "-" + oe
                          ),
                          t._defs.appendChild(ye),
                          (t._cornersSquareClipPath =
                            t._cornersDotClipPath =
                            be =
                              ye),
                          t._createColor({
                            options:
                              (z = i.cornersSquareOptions) === null ||
                              z === void 0
                                ? void 0
                                : z.gradient,
                            color:
                              (Q = i.cornersSquareOptions) === null ||
                              Q === void 0
                                ? void 0
                                : Q.color,
                            additionalRotation: me,
                            x: fe,
                            y: we,
                            height: c,
                            width: c,
                            name: "corners-square-color-" + ve + "-" + oe,
                          })),
                        (K = i.cornersSquareOptions) === null || K === void 0
                          ? void 0
                          : K.type)
                      ) {
                        var Se = new Y({
                          svg: t._element,
                          type: i.cornersSquareOptions.type,
                        });
                        Se.draw(fe, we, c, me),
                          Se._element && ye && ye.appendChild(Se._element);
                      } else
                        for (
                          var Te = new J({
                              svg: t._element,
                              type: i.dotsOptions.type,
                            }),
                            zt = function (Be) {
                              for (
                                var nt = function (Re) {
                                    if (
                                      !(
                                        !(
                                          (V = ke[Be]) === null || V === void 0
                                        ) && V[Re]
                                      )
                                    )
                                      return "continue";
                                    Te.draw(
                                      fe + Be * C,
                                      we + Re * C,
                                      C,
                                      function (it, ot) {
                                        var Ne;
                                        return !!(
                                          !(
                                            (Ne = ke[Be + it]) === null ||
                                            Ne === void 0
                                          ) && Ne[Re + ot]
                                        );
                                      }
                                    ),
                                      Te._element &&
                                        ye &&
                                        ye.appendChild(Te._element);
                                  },
                                  Fe = 0;
                                Fe < ke[Be].length;
                                Fe++
                              )
                                nt(Fe);
                            },
                            Le = 0;
                          Le < ke.length;
                          Le++
                        )
                          zt(Le);
                      if (
                        ((((ce = i.cornersDotOptions) === null || ce === void 0
                          ? void 0
                          : ce.gradient) ||
                          ((X = i.cornersDotOptions) === null || X === void 0
                            ? void 0
                            : X.color)) &&
                          ((be = document.createElementNS(
                            "http://www.w3.org/2000/svg",
                            "clipPath"
                          )).setAttribute(
                            "id",
                            "clip-path-corners-dot-color-" + ve + "-" + oe
                          ),
                          t._defs.appendChild(be),
                          (t._cornersDotClipPath = be),
                          t._createColor({
                            options:
                              ($ = i.cornersDotOptions) === null || $ === void 0
                                ? void 0
                                : $.gradient,
                            color:
                              (W = i.cornersDotOptions) === null || W === void 0
                                ? void 0
                                : W.color,
                            additionalRotation: me,
                            x: fe + 2 * C,
                            y: we + 2 * C,
                            height: f,
                            width: f,
                            name: "corners-dot-color-" + ve + "-" + oe,
                          })),
                        (te = i.cornersDotOptions) === null || te === void 0
                          ? void 0
                          : te.type)
                      ) {
                        var rt = new ue({
                          svg: t._element,
                          type: i.cornersDotOptions.type,
                        });
                        rt.draw(fe + 2 * C, we + 2 * C, f, me),
                          rt._element && be && be.appendChild(rt._element);
                      } else {
                        Te = new J({
                          svg: t._element,
                          type: i.dotsOptions.type,
                        });
                        var Ot = function (Be) {
                          for (
                            var nt = function (Re) {
                                if (
                                  !(
                                    !(
                                      (Oe = xe[Be]) === null || Oe === void 0
                                    ) && Oe[Re]
                                  )
                                )
                                  return "continue";
                                Te.draw(
                                  fe + Be * C,
                                  we + Re * C,
                                  C,
                                  function (it, ot) {
                                    var Ne;
                                    return !!(
                                      !(
                                        (Ne = xe[Be + it]) === null ||
                                        Ne === void 0
                                      ) && Ne[Re + ot]
                                    );
                                  }
                                ),
                                  Te._element &&
                                    be &&
                                    be.appendChild(Te._element);
                              },
                              Fe = 0;
                            Fe < xe[Be].length;
                            Fe++
                          )
                            nt(Fe);
                        };
                        for (Le = 0; Le < xe.length; Le++) Ot(Le);
                      }
                    });
                  }),
                  (y.prototype.loadImage = function () {
                    var t = this;
                    return new Promise(function (o, i) {
                      var u = t._options,
                        p = new Image();
                      if (!u.image) return i("Image is not defined");
                      typeof u.imageOptions.crossOrigin == "string" &&
                        (p.crossOrigin = u.imageOptions.crossOrigin),
                        (t._image = p),
                        (p.onload = function () {
                          o();
                        }),
                        (p.src = u.image);
                    });
                  }),
                  (y.prototype.drawImage = function (t) {
                    var o = t.width,
                      i = t.height,
                      u = t.count,
                      p = t.dotSize;
                    return _e(this, void 0, void 0, function () {
                      var h, C, c, f, s, g, k, I, F;
                      return je(this, function (z) {
                        switch (z.label) {
                          case 0:
                            return (
                              (h = this._options),
                              (C = Math.floor((h.width - u * p) / 2)),
                              (c = Math.floor((h.height - u * p) / 2)),
                              (f = C + h.imageOptions.margin + (u * p - o) / 2),
                              (s = c + h.imageOptions.margin + (u * p - i) / 2),
                              (g = o - 2 * h.imageOptions.margin),
                              (k = i - 2 * h.imageOptions.margin),
                              (I = document.createElementNS(
                                "http://www.w3.org/2000/svg",
                                "image"
                              )).setAttribute("x", String(f)),
                              I.setAttribute("y", String(s)),
                              I.setAttribute("width", g + "px"),
                              I.setAttribute("height", k + "px"),
                              [4, j(h.image || "")]
                            );
                          case 1:
                            return (
                              (F = z.sent()),
                              I.setAttribute("href", F || ""),
                              this._element.appendChild(I),
                              [2]
                            );
                        }
                      });
                    });
                  }),
                  (y.prototype._createColor = function (t) {
                    var o = t.options,
                      i = t.color,
                      u = t.additionalRotation,
                      p = t.x,
                      h = t.y,
                      C = t.height,
                      c = t.width,
                      f = t.name,
                      s = c > C ? c : C,
                      g = document.createElementNS(
                        "http://www.w3.org/2000/svg",
                        "rect"
                      );
                    if (
                      (g.setAttribute("x", String(p)),
                      g.setAttribute("y", String(h)),
                      g.setAttribute("height", String(C)),
                      g.setAttribute("width", String(c)),
                      g.setAttribute(
                        "clip-path",
                        "url('#clip-path-" + f + "')"
                      ),
                      o)
                    ) {
                      var k;
                      if (o.type === "radial")
                        (k = document.createElementNS(
                          "http://www.w3.org/2000/svg",
                          "radialGradient"
                        )).setAttribute("id", f),
                          k.setAttribute("gradientUnits", "userSpaceOnUse"),
                          k.setAttribute("fx", String(p + c / 2)),
                          k.setAttribute("fy", String(h + C / 2)),
                          k.setAttribute("cx", String(p + c / 2)),
                          k.setAttribute("cy", String(h + C / 2)),
                          k.setAttribute("r", String(s / 2));
                      else {
                        var I = ((o.rotation || 0) + u) % (2 * Math.PI),
                          F = (I + 2 * Math.PI) % (2 * Math.PI),
                          z = p + c / 2,
                          Q = h + C / 2,
                          K = p + c / 2,
                          V = h + C / 2;
                        (F >= 0 && F <= 0.25 * Math.PI) ||
                        (F > 1.75 * Math.PI && F <= 2 * Math.PI)
                          ? ((z -= c / 2),
                            (Q -= (C / 2) * Math.tan(I)),
                            (K += c / 2),
                            (V += (C / 2) * Math.tan(I)))
                          : F > 0.25 * Math.PI && F <= 0.75 * Math.PI
                          ? ((Q -= C / 2),
                            (z -= c / 2 / Math.tan(I)),
                            (V += C / 2),
                            (K += c / 2 / Math.tan(I)))
                          : F > 0.75 * Math.PI && F <= 1.25 * Math.PI
                          ? ((z += c / 2),
                            (Q += (C / 2) * Math.tan(I)),
                            (K -= c / 2),
                            (V -= (C / 2) * Math.tan(I)))
                          : F > 1.25 * Math.PI &&
                            F <= 1.75 * Math.PI &&
                            ((Q += C / 2),
                            (z += c / 2 / Math.tan(I)),
                            (V -= C / 2),
                            (K -= c / 2 / Math.tan(I))),
                          (k = document.createElementNS(
                            "http://www.w3.org/2000/svg",
                            "linearGradient"
                          )).setAttribute("id", f),
                          k.setAttribute("gradientUnits", "userSpaceOnUse"),
                          k.setAttribute("x1", String(Math.round(z))),
                          k.setAttribute("y1", String(Math.round(Q))),
                          k.setAttribute("x2", String(Math.round(K))),
                          k.setAttribute("y2", String(Math.round(V)));
                      }
                      o.colorStops.forEach(function (ce) {
                        var X = ce.offset,
                          $ = ce.color,
                          W = document.createElementNS(
                            "http://www.w3.org/2000/svg",
                            "stop"
                          );
                        W.setAttribute("offset", 100 * X + "%"),
                          W.setAttribute("stop-color", $),
                          k.appendChild(W);
                      }),
                        g.setAttribute("fill", "url('#" + f + "')"),
                        this._defs.appendChild(k);
                    } else i && g.setAttribute("fill", i);
                    this._element.appendChild(g);
                  }),
                  y
                );
              })(),
              De = "canvas";
            for (var Ce = {}, q = 0; q <= 40; q++) Ce[q] = q;
            const A = {
              type: De,
              shape: "square",
              width: 300,
              height: 300,
              data: "",
              margin: 0,
              qrOptions: {
                typeNumber: Ce[0],
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
            var x = function () {
              return (x =
                Object.assign ||
                function (y) {
                  for (var t, o = 1, i = arguments.length; o < i; o++)
                    for (var u in (t = arguments[o]))
                      Object.prototype.hasOwnProperty.call(t, u) &&
                        (y[u] = t[u]);
                  return y;
                }).apply(this, arguments);
            };
            function _(y) {
              var t = x({}, y);
              if (!t.colorStops || !t.colorStops.length)
                throw "Field 'colorStops' is required in gradient";
              return (
                t.rotation
                  ? (t.rotation = Number(t.rotation))
                  : (t.rotation = 0),
                (t.colorStops = t.colorStops.map(function (o) {
                  return x(x({}, o), { offset: Number(o.offset) });
                })),
                t
              );
            }
            function w(y) {
              var t = x({}, y);
              return (
                (t.width = Number(t.width)),
                (t.height = Number(t.height)),
                (t.margin = Number(t.margin)),
                (t.imageOptions = x(x({}, t.imageOptions), {
                  hideBackgroundDots: Boolean(
                    t.imageOptions.hideBackgroundDots
                  ),
                  imageSize: Number(t.imageOptions.imageSize),
                  margin: Number(t.imageOptions.margin),
                })),
                t.margin > Math.min(t.width, t.height) &&
                  (t.margin = Math.min(t.width, t.height)),
                (t.dotsOptions = x({}, t.dotsOptions)),
                t.dotsOptions.gradient &&
                  (t.dotsOptions.gradient = _(t.dotsOptions.gradient)),
                t.cornersSquareOptions &&
                  ((t.cornersSquareOptions = x({}, t.cornersSquareOptions)),
                  t.cornersSquareOptions.gradient &&
                    (t.cornersSquareOptions.gradient = _(
                      t.cornersSquareOptions.gradient
                    ))),
                t.cornersDotOptions &&
                  ((t.cornersDotOptions = x({}, t.cornersDotOptions)),
                  t.cornersDotOptions.gradient &&
                    (t.cornersDotOptions.gradient = _(
                      t.cornersDotOptions.gradient
                    ))),
                t.backgroundOptions &&
                  ((t.backgroundOptions = x({}, t.backgroundOptions)),
                  t.backgroundOptions.gradient &&
                    (t.backgroundOptions.gradient = _(
                      t.backgroundOptions.gradient
                    ))),
                t
              );
            }
            var O = m(192),
              R = m.n(O),
              T = function (y, t, o, i) {
                return new (o || (o = Promise))(function (u, p) {
                  function h(f) {
                    try {
                      c(i.next(f));
                    } catch (s) {
                      p(s);
                    }
                  }
                  function C(f) {
                    try {
                      c(i.throw(f));
                    } catch (s) {
                      p(s);
                    }
                  }
                  function c(f) {
                    var s;
                    f.done
                      ? u(f.value)
                      : ((s = f.value),
                        s instanceof o
                          ? s
                          : new o(function (g) {
                              g(s);
                            })).then(h, C);
                  }
                  c((i = i.apply(y, t || [])).next());
                });
              },
              N = function (y, t) {
                var o,
                  i,
                  u,
                  p,
                  h = {
                    label: 0,
                    sent: function () {
                      if (1 & u[0]) throw u[1];
                      return u[1];
                    },
                    trys: [],
                    ops: [],
                  };
                return (
                  (p = { next: C(0), throw: C(1), return: C(2) }),
                  typeof Symbol == "function" &&
                    (p[Symbol.iterator] = function () {
                      return this;
                    }),
                  p
                );
                function C(c) {
                  return function (f) {
                    return (function (s) {
                      if (o)
                        throw new TypeError("Generator is already executing.");
                      for (; h; )
                        try {
                          if (
                            ((o = 1),
                            i &&
                              (u =
                                2 & s[0]
                                  ? i.return
                                  : s[0]
                                  ? i.throw || ((u = i.return) && u.call(i), 0)
                                  : i.next) &&
                              !(u = u.call(i, s[1])).done)
                          )
                            return u;
                          switch (
                            ((i = 0), u && (s = [2 & s[0], u.value]), s[0])
                          ) {
                            case 0:
                            case 1:
                              u = s;
                              break;
                            case 4:
                              return h.label++, { value: s[1], done: !1 };
                            case 5:
                              h.label++, (i = s[1]), (s = [0]);
                              continue;
                            case 7:
                              (s = h.ops.pop()), h.trys.pop();
                              continue;
                            default:
                              if (
                                !(
                                  (u =
                                    (u = h.trys).length > 0 &&
                                    u[u.length - 1]) ||
                                  (s[0] !== 6 && s[0] !== 2)
                                )
                              ) {
                                h = 0;
                                continue;
                              }
                              if (
                                s[0] === 3 &&
                                (!u || (s[1] > u[0] && s[1] < u[3]))
                              ) {
                                h.label = s[1];
                                break;
                              }
                              if (s[0] === 6 && h.label < u[1]) {
                                (h.label = u[1]), (u = s);
                                break;
                              }
                              if (u && h.label < u[2]) {
                                (h.label = u[2]), h.ops.push(s);
                                break;
                              }
                              u[2] && h.ops.pop(), h.trys.pop();
                              continue;
                          }
                          s = t.call(y, h);
                        } catch (g) {
                          (s = [6, g]), (i = 0);
                        } finally {
                          o = u = 0;
                        }
                      if (5 & s[0]) throw s[1];
                      return { value: s[0] ? s[1] : void 0, done: !0 };
                    })([c, f]);
                  };
                }
              };
            const ae = (function () {
              function y(t) {
                (this._options = t ? w(H(A, t)) : A), this.update();
              }
              return (
                (y._clearContainer = function (t) {
                  t && (t.innerHTML = "");
                }),
                (y.prototype._setupSvg = function () {
                  var t = this;
                  if (this._qr) {
                    var o = new ze(this._options);
                    (this._svg = o.getElement()),
                      (this._svgDrawingPromise = o
                        .drawQR(this._qr)
                        .then(function () {
                          var i;
                          t._svg &&
                            ((i = t._extension) === null ||
                              i === void 0 ||
                              i.call(t, o.getElement(), t._options));
                        }));
                  }
                }),
                (y.prototype._setupCanvas = function () {
                  var t,
                    o = this;
                  this._qr &&
                    ((this._canvas = document.createElement("canvas")),
                    (this._canvas.width = this._options.width),
                    (this._canvas.height = this._options.height),
                    this._setupSvg(),
                    (this._canvasDrawingPromise =
                      (t = this._svgDrawingPromise) === null || t === void 0
                        ? void 0
                        : t.then(function () {
                            if (o._svg) {
                              var i = o._svg,
                                u = new XMLSerializer().serializeToString(i),
                                p = "data:image/svg+xml;base64," + btoa(u),
                                h = new Image();
                              return new Promise(function (C) {
                                (h.onload = function () {
                                  var c, f;
                                  (f =
                                    (c = o._canvas) === null || c === void 0
                                      ? void 0
                                      : c.getContext("2d")) === null ||
                                    f === void 0 ||
                                    f.drawImage(h, 0, 0),
                                    C();
                                }),
                                  (h.src = p);
                              });
                            }
                          })));
                }),
                (y.prototype._getElement = function (t) {
                  return (
                    t === void 0 && (t = "png"),
                    T(this, void 0, void 0, function () {
                      return N(this, function (o) {
                        switch (o.label) {
                          case 0:
                            if (!this._qr) throw "QR code is empty";
                            return t.toLowerCase() !== "svg"
                              ? [3, 2]
                              : ((this._svg && this._svgDrawingPromise) ||
                                  this._setupSvg(),
                                [4, this._svgDrawingPromise]);
                          case 1:
                            return o.sent(), [2, this._svg];
                          case 2:
                            return (
                              (this._canvas && this._canvasDrawingPromise) ||
                                this._setupCanvas(),
                              [4, this._canvasDrawingPromise]
                            );
                          case 3:
                            return o.sent(), [2, this._canvas];
                        }
                      });
                    })
                  );
                }),
                (y.prototype.update = function (t) {
                  y._clearContainer(this._container),
                    (this._options = t
                      ? w(H(this._options, t))
                      : this._options),
                    this._options.data &&
                      ((this._qr = R()(
                        this._options.qrOptions.typeNumber,
                        this._options.qrOptions.errorCorrectionLevel
                      )),
                      this._qr.addData(
                        this._options.data,
                        this._options.qrOptions.mode ||
                          (function (o) {
                            switch (!0) {
                              case /^[0-9]*$/.test(o):
                                return "Numeric";
                              case /^[0-9A-Z $%*+\-./:]*$/.test(o):
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
                    T(this, void 0, void 0, function () {
                      var o, i, u;
                      return N(this, function (p) {
                        switch (p.label) {
                          case 0:
                            if (!this._qr) throw "QR code is empty";
                            return [4, this._getElement(t)];
                          case 1:
                            return (o = p.sent())
                              ? t.toLowerCase() === "svg"
                                ? ((i = new XMLSerializer()),
                                  (u = i.serializeToString(o)),
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
                                    new Promise(function (h) {
                                      return o.toBlob(h, "image/" + t, 1);
                                    }),
                                  ]
                              : [2, null];
                        }
                      });
                    })
                  );
                }),
                (y.prototype.download = function (t) {
                  return T(this, void 0, void 0, function () {
                    var o, i, u, p, h;
                    return N(this, function (C) {
                      switch (C.label) {
                        case 0:
                          if (!this._qr) throw "QR code is empty";
                          return (
                            (o = "png"),
                            (i = "qr"),
                            typeof t == "string"
                              ? ((o = t),
                                console.warn(
                                  "Extension is deprecated as argument for 'download' method, please pass object { name: '...', extension: '...' } as argument"
                                ))
                              : typeof t == "object" &&
                                t !== null &&
                                (t.name && (i = t.name),
                                t.extension && (o = t.extension)),
                            [4, this._getElement(o)]
                          );
                        case 1:
                          return (u = C.sent())
                            ? (o.toLowerCase() === "svg"
                                ? ((p = new XMLSerializer()),
                                  (h =
                                    `<?xml version="1.0" standalone="no"?>\r
` + (h = p.serializeToString(u))),
                                  U(
                                    "data:image/svg+xml;charset=utf-8," +
                                      encodeURIComponent(h),
                                    i + ".svg"
                                  ))
                                : U(u.toDataURL("image/" + o), i + "." + o),
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
        a = {};
      function l(d) {
        if (a[d]) return a[d].exports;
        var v = (a[d] = { exports: {} });
        return r[d](v, v.exports, l), v.exports;
      }
      return (
        (l.n = (d) => {
          var v = d && d.__esModule ? () => d.default : () => d;
          return l.d(v, { a: v }), v;
        }),
        (l.d = (d, v) => {
          for (var m in v)
            l.o(v, m) &&
              !l.o(d, m) &&
              Object.defineProperty(d, m, { enumerable: !0, get: v[m] });
        }),
        (l.o = (d, v) => Object.prototype.hasOwnProperty.call(d, v)),
        l(676)
      );
    })().default;
  });
})(qt);
var Or = zr(qt.exports);
function Dr(n) {
  let e, r, a, l, d, v, m, S, M, E, H;
  return (
    (l = new ht({
      props: {
        font: "f-secondary",
        text: `Your child has been successfully registered. 
    Please show us this code at the entrance. 
    You can either take a screenshot of this page or download it by pressing the button below.`,
      },
    })),
    (m = new Mt({ props: { text: "download" } })),
    m.$on("action", n[0]),
    (E = new dt({ props: { text: "Done" } })),
    E.$on("action", n[14]),
    {
      c() {
        (e = G("div")),
          (r = G("div")),
          (a = ee()),
          ge(l.$$.fragment),
          (d = ee()),
          (v = G("div")),
          ge(m.$$.fragment),
          (S = ee()),
          (M = G("div")),
          ge(E.$$.fragment),
          b(r, "class", "qrcode std-flex-column svelte-po5xvs"),
          b(r, "id", "canvas"),
          b(v, "class", "donload-btn-wrapper svelte-po5xvs"),
          b(M, "class", "next-btn-wrapper svelte-po5xvs"),
          b(e, "class", "qrcode-wrapper");
      },
      m(U, j) {
        ie(U, e, j),
          B(e, r),
          B(e, a),
          de(l, e, null),
          B(e, d),
          B(e, v),
          de(m, v, null),
          B(e, S),
          B(e, M),
          de(E, M, null),
          (H = !0);
      },
      p: pe,
      i(U) {
        H ||
          (ne(l.$$.fragment, U),
          ne(m.$$.fragment, U),
          ne(E.$$.fragment, U),
          (H = !0));
      },
      o(U) {
        se(l.$$.fragment, U),
          se(m.$$.fragment, U),
          se(E.$$.fragment, U),
          (H = !1);
      },
      d(U) {
        U && re(e), he(l), he(m), he(E);
      },
    }
  );
}
function jr(n, e, r) {
  let { childId: a } = e,
    { organizationId: l } = e,
    { width: d = 300 } = e,
    { height: v = 300 } = e,
    { dotGradientOne: m = "#000000" } = e,
    { dotGradientTwo: S = "#000000" } = e,
    { image: M = "" } = e,
    { bkgColor: E = "#FFFFFF" } = e,
    { dotType: H = "rounded" } = e,
    { cornerSqColor: U = "rounded" } = e,
    { cornerSqType: j = "rounded" } = e,
    { cornerDotColor: P = "rounded" } = e,
    { cornerDotType: L = "rounded" } = e;
  const J = new Or({
      width: d,
      height: v,
      type: "svg",
      data: `https://chikios.biblescholar.app/${l}/${a}`,
      image: M,
      dotsOptions: {
        gradient: {
          type: "linear",
          rotation: 70,
          colorStops: [
            { offset: 0, color: m },
            { offset: 1, color: S },
          ],
        },
        type: H,
      },
      backgroundOptions: { color: E },
      imageOptions: { crossOrigin: "anonymous", margin: 5 },
      cornersSquareOptions: { color: U, type: j },
      cornersDotOptions: { color: P, type: L },
    }),
    Z = () => {
      J.download({ extension: "png" });
    };
  ft(() => {
    J.append(document.getElementById("canvas"));
  });
  const Y = () => {
    location.href = location.href;
  };
  return (
    (n.$$set = (D) => {
      "childId" in D && r(1, (a = D.childId)),
        "organizationId" in D && r(2, (l = D.organizationId)),
        "width" in D && r(3, (d = D.width)),
        "height" in D && r(4, (v = D.height)),
        "dotGradientOne" in D && r(5, (m = D.dotGradientOne)),
        "dotGradientTwo" in D && r(6, (S = D.dotGradientTwo)),
        "image" in D && r(7, (M = D.image)),
        "bkgColor" in D && r(8, (E = D.bkgColor)),
        "dotType" in D && r(9, (H = D.dotType)),
        "cornerSqColor" in D && r(10, (U = D.cornerSqColor)),
        "cornerSqType" in D && r(11, (j = D.cornerSqType)),
        "cornerDotColor" in D && r(12, (P = D.cornerDotColor)),
        "cornerDotType" in D && r(13, (L = D.cornerDotType));
    }),
    [Z, a, l, d, v, m, S, M, E, H, U, j, P, L, Y]
  );
}
class Pr extends qe {
  constructor(e) {
    super(),
      Me(this, e, jr, Dr, Ae, {
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
function Br(n) {
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
        ge(e.$$.fragment);
      },
      m(a, l) {
        de(e, a, l), (r = !0);
      },
      p(a, l) {
        const d = {};
        l & 2 && (d.childId = a[1]), e.$set(d);
      },
      i(a) {
        r || (ne(e.$$.fragment, a), (r = !0));
      },
      o(a) {
        se(e.$$.fragment, a), (r = !1);
      },
      d(a) {
        he(e, a);
      },
    }
  );
}
function Ir(n) {
  let e, r, a;
  function l(v) {
    n[4](v);
  }
  let d = {};
  return (
    n[0] !== void 0 && (d.currentTitle = n[0]),
    (e = new kr({ props: d })),
    st.push(() => Ht(e, "currentTitle", l)),
    e.$on("registration_success", n[3]),
    {
      c() {
        ge(e.$$.fragment);
      },
      m(v, m) {
        de(e, v, m), (a = !0);
      },
      p(v, m) {
        const S = {};
        !r && m & 1 && ((r = !0), (S.currentTitle = v[0]), Nt(() => (r = !1))),
          e.$set(S);
      },
      i(v) {
        a || (ne(e.$$.fragment, v), (a = !0));
      },
      o(v) {
        se(e.$$.fragment, v), (a = !1);
      },
      d(v) {
        he(e, v);
      },
    }
  );
}
function Er(n) {
  let e, r, a, l, d, v, m, S, M;
  (r = new qr({ props: { src: "/images/logo.png", alt: "kidz quest logo" } })),
    (l = new Sr({ props: { title: n[0] } }));
  const E = [Ir, Br],
    H = [];
  function U(j, P) {
    return j[2] === 0 ? 0 : j[2] === 1 && j[1] ? 1 : -1;
  }
  return (
    ~(v = U(n)) && (m = H[v] = E[v](n)),
    {
      c() {
        (e = G("div")),
          ge(r.$$.fragment),
          (a = ee()),
          ge(l.$$.fragment),
          (d = ee()),
          m && m.c(),
          (S = It()),
          b(e, "class", "image-wrapper svelte-1oshbwy");
      },
      m(j, P) {
        ie(j, e, P),
          de(r, e, null),
          ie(j, a, P),
          de(l, j, P),
          ie(j, d, P),
          ~v && H[v].m(j, P),
          ie(j, S, P),
          (M = !0);
      },
      p(j, [P]) {
        const L = {};
        P & 1 && (L.title = j[0]), l.$set(L);
        let J = v;
        (v = U(j)),
          v === J
            ? ~v && H[v].p(j, P)
            : (m &&
                (Xe(),
                se(H[J], 1, 1, () => {
                  H[J] = null;
                }),
                Je()),
              ~v
                ? ((m = H[v]),
                  m ? m.p(j, P) : ((m = H[v] = E[v](j)), m.c()),
                  ne(m, 1),
                  m.m(S.parentNode, S))
                : (m = null));
      },
      i(j) {
        M || (ne(r.$$.fragment, j), ne(l.$$.fragment, j), ne(m), (M = !0));
      },
      o(j) {
        se(r.$$.fragment, j), se(l.$$.fragment, j), se(m), (M = !1);
      },
      d(j) {
        j && re(e),
          he(r),
          j && re(a),
          he(l, j),
          j && re(d),
          ~v && H[v].d(j),
          j && re(S);
      },
    }
  );
}
function Tr(n, e, r) {
  let a,
    l = "",
    d = 0;
  const v = (S) => {
    r(1, (l = S.detail.id)), r(2, (d = 1));
  };
  function m(S) {
    (a = S), r(0, a);
  }
  return [a, l, d, v, m];
}
class Lr extends qe {
  constructor(e) {
    super(), Me(this, e, Tr, Er, Ae, {});
  }
}
function Fr(n) {
  let e, r;
  return (
    (e = new Lr({})),
    {
      c() {
        ge(e.$$.fragment);
      },
      m(a, l) {
        de(e, a, l), (r = !0);
      },
      p: pe,
      i(a) {
        r || (ne(e.$$.fragment, a), (r = !0));
      },
      o(a) {
        se(e.$$.fragment, a), (r = !1);
      },
      d(a) {
        he(e, a);
      },
    }
  );
}
class Rr extends qe {
  constructor(e) {
    super(), Me(this, e, null, Fr, Ae, {});
  }
}
function Nr(n) {
  let e, r, a, l, d;
  return (
    (l = new Rr({})),
    {
      c() {
        (e = G("div")),
          (r = ee()),
          (a = G("main")),
          ge(l.$$.fragment),
          b(e, "class", "background std-bkg svelte-pe2dd9"),
          Tt(e, "background-image", "url('" + Gr + "')"),
          b(a, "class", "main-wrapper svelte-pe2dd9");
      },
      m(v, m) {
        ie(v, e, m), ie(v, r, m), ie(v, a, m), de(l, a, null), (d = !0);
      },
      p: pe,
      i(v) {
        d || (ne(l.$$.fragment, v), (d = !0));
      },
      o(v) {
        se(l.$$.fragment, v), (d = !1);
      },
      d(v) {
        v && re(e), v && re(r), v && re(a), he(l);
      },
    }
  );
}
let Gr = "./images/bkgs/crumbled-paper_v.png";
class Hr extends qe {
  constructor(e) {
    super(), Me(this, e, null, Nr, Ae, {});
  }
}
new Hr({ target: document.getElementById("app") });
