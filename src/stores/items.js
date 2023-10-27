import { defineStore } from 'pinia';

import { items } from "@/api/core.js";

export const useItemsStore = defineStore('features.items', {
    state: () => ({
        items: [],
        errors: []
    }),
    getters: {
        
    },
    actions: {
        async getItems() {
            try {
                this.items = await items.getItems();
            } catch (ex) {
                errors.push(ex);
            }

            return this.items || [];
        }
    }
});
