import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

import { Package } from "@/types";
import toast from "react-hot-toast";

interface CartStore {
    items: Package[];
    addItem: (data: Package) => void;
    removeItem: (id: string) => void;
    removeAll: () => void;
}

const useCart = create(
    persist<CartStore>((set, get) => ({
        items: [],
        addItem: (data: Package) => {
            const currentItems = get().items;
            const existingItems =currentItems.find((item) => item.id === data.id);

            if (existingItems) {
                return toast("Package already in cart.")
            }

            set({items: [...get().items, data]});

            toast.success("Package added to cart.")
        },
        removeItem: (id: string) => {
            set({ items: [ ...get().items.filter((item) => item.id !== id) ] })
            toast.success("Package removed from cart.");
        },
        removeAll: () => set({ items: [] }),
    }), {
        name: "cart-storage",
        storage: createJSONStorage(() => localStorage)
    })
)


export default useCart