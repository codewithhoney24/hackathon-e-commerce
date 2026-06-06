import { create } from "zustand";
import { persist } from "zustand/middleware";
import { Product } from "../../../types";

export interface CartItem extends Product {
  cartItemId: string; // Unique ID combining _id + color
  quantity: number;
  selectedColor?: string;
}

interface CartState {
  items: CartItem[];

  addItem: (product: Product, selectedColor?: string) => void;
  removeItem: (cartItemId: string) => void;

  increaseQty: (cartItemId: string) => void;
  decreaseQty: (cartItemId: string) => void;

  updateQuantity: (cartItemId: string, qty: number) => void;

  clearCart: () => void;

  getTotalItems: () => number;
  getTotalPrice: () => number;
  getTotalSavings: () => number;
}

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],

      addItem(product, selectedColor) {
        const items = get().items;
        const cartItemId = selectedColor ? `${product._id}-${selectedColor}` : product._id;
        const exists = items.find((item) => item.cartItemId === cartItemId);

        if (exists) {
          set({
            items: items.map((item) =>
              item.cartItemId === cartItemId
                ? {
                    ...item,
                    quantity: item.quantity + 1,
                  }
                : item
            ),
          });
        } else {
          set({
            items: [
              ...items,
              {
                ...product,
                cartItemId,
                selectedColor,
                quantity: 1,
              },
            ],
          });
        }
      },

      removeItem(cartItemId) {
        set({
          items: get().items.filter((item) => item.cartItemId !== cartItemId),
        });
      },

      increaseQty(cartItemId) {
        set({
          items: get().items.map((item) =>
            item.cartItemId === cartItemId
              ? {
                  ...item,
                  quantity: item.quantity + 1,
                }
              : item
          ),
        });
      },

      decreaseQty(cartItemId) {
        const item = get().items.find((i) => i.cartItemId === cartItemId);

        if (item?.quantity === 1) {
          get().removeItem(cartItemId);
          return;
        }

        set({
          items: get().items.map((item) =>
            item.cartItemId === cartItemId
              ? {
                  ...item,
                  quantity: item.quantity - 1,
                }
              : item
          ),
        });
      },

      updateQuantity(cartItemId, qty) {
        if (qty <= 0) {
          get().removeItem(cartItemId);
          return;
        }

        set({
          items: get().items.map((item) =>
            item.cartItemId === cartItemId
              ? {
                  ...item,
                  quantity: qty,
                }
              : item
          ),
        });
      },

      clearCart() {
        set({
          items: [],
        });
      },

      getTotalItems() {
        return get().items.reduce((sum, item) => sum + item.quantity, 0);
      },

      getTotalPrice() {
        return get().items.reduce((total, item) => {
          const discounted = item.discountPercentage
            ? item.price - (item.price * item.discountPercentage) / 100
            : item.price;

          return total + discounted * item.quantity;
        }, 0);
      },

      getTotalSavings() {
        return get().items.reduce((total, item) => {
          if (!item.discountPercentage) return total;
          const savingPerItem = (item.price * item.discountPercentage) / 100;
          return total + savingPerItem * item.quantity;
        }, 0);
      },
    }),
    {
      name: "cart-storage",
    }
  )
);
