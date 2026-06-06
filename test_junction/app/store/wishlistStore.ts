import { create } from "zustand";
import { persist } from "zustand/middleware";
import { Product } from "../../../types";

interface WishlistState {
  items: Product[];
  addItem: (product: Product) => void;
  removeItem: (id: string) => void;
  toggleItem: (product: Product) => void;
  isInWishlist: (id: string) => boolean;
  getTotalItems: () => number;
}

export const useWishlistStore = create<WishlistState>()(
  persist(
    (set, get) => ({
      items: [],

      addItem(product) {
        const items = get().items;
        if (!items.find((item) => item._id === product._id)) {
          set({ items: [...items, product] });
        }
      },

      removeItem(id) {
        set({
          items: get().items.filter((item) => item._id !== id),
        });
      },

      toggleItem(product) {
        const isIn = get().isInWishlist(product._id);
        if (isIn) {
          get().removeItem(product._id);
        } else {
          get().addItem(product);
        }
      },

      isInWishlist(id) {
        return get().items.some((item) => item._id === id);
      },

      getTotalItems() {
        return get().items.length;
      },
    }),
    {
      name: "wishlist-storage",
    }
  )
);
