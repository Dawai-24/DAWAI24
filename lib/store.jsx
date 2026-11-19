"use client";
import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { getProductById, totals } from "@/lib/catalog";

const Ctx = createContext(null);
const KEY = "medicart-demo-v1";

const initial = { cart: [], wishlist: [], pin: "", user: null, addresses: [], orders: [], coupon: "" };

export function StoreProvider({ children }) {
  const [state, setState] = useState(initial);
  const [ready, setReady] = useState(false);
  const [drawer, setDrawer] = useState(false);
  const [toasts, setToasts] = useState([]);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(KEY);
      if (raw) setState({ ...initial, ...JSON.parse(raw) });
    } catch {}
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return;
    try { localStorage.setItem(KEY, JSON.stringify(state)); } catch {}
  }, [state, ready]);

  const toast = useCallback((message, type = "success") => {
    const id = Math.random().toString(36).slice(2);
    setToasts((t) => [...t, { id, message, type }]);
    setTimeout(() => setToasts((t) => t.filter((x) => x.id !== id)), 2800);
  }, []);

  const patch = (fn) => setState((s) => ({ ...s, ...fn(s) }));

  const api = useMemo(() => ({
    addToCart(id, qty = 1) {
      patch((s) => {
        const ex = s.cart.find((c) => c.id === id);
        return { cart: ex ? s.cart.map((c) => (c.id === id ? { ...c, qty: Math.min(10, c.qty + qty) } : c)) : [...s.cart, { id, qty }] };
      });
      toast("Added to cart");
    },
    setQty: (id, qty) => patch((s) => ({ cart: qty <= 0 ? s.cart.filter((c) => c.id !== id) : s.cart.map((c) => (c.id === id ? { ...c, qty: Math.min(10, qty) } : c)) })),
    removeFromCart(id) { patch((s) => ({ cart: s.cart.filter((c) => c.id !== id) })); toast("Removed from cart", "info"); },
    clearCart: () => patch(() => ({ cart: [], coupon: "" })),
    toggleWish(id) {
      patch((s) => ({ wishlist: s.wishlist.includes(id) ? s.wishlist.filter((x) => x !== id) : [...s.wishlist, id] }));
    },
    setPin: (pin) => patch(() => ({ pin })),
    setCoupon: (coupon) => patch(() => ({ coupon })),
    login(user) { patch(() => ({ user })); },
    logout() { patch(() => ({ user: null })); toast("Logged out", "info"); },
    saveAddress: (a) => patch((s) => ({ addresses: [...s.addresses.filter((x) => x.id !== a.id), a] })),
    deleteAddress: (id) => patch((s) => ({ addresses: s.addresses.filter((a) => a.id !== id) })),
    placeOrder(order) { patch((s) => ({ orders: [order, ...s.orders], cart: [], coupon: "" })); },
    openDrawer: () => setDrawer(true),
    closeDrawer: () => setDrawer(false),
    toast,
  }), [toast]);

  const lines = useMemo(
    () => state.cart.map((c) => ({ ...c, product: getProductById(c.id) })).filter((l) => l.product),
    [state.cart]
  );
  const sums = useMemo(() => totals(lines, state.coupon), [lines, state.coupon]);
  const count = lines.reduce((s, l) => s + l.qty, 0);

  return (
    <Ctx.Provider value={{ ...state, ready, lines, sums, count, drawer, toasts, ...api }}>
      {children}
    </Ctx.Provider>
  );
}

export const useStore = () => {
  const v = useContext(Ctx);
  if (!v) throw new Error("useStore must be used inside StoreProvider");
  return v;
};
