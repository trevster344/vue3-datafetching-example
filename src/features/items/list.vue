<template>
    <h3>Items</h3>

    <ul v-if="!loading">
        <li v-for="item in items" v-text="item.name"></li>
    </ul>

    <div v-else>Loading...</div>
</template>
<script>
    import { ref, computed } from "vue";

    // Interface directly with a store
    import { useItemsStore } from "@/stores/items.js";

    export default {
        setup() {
            const itemStore = useItemsStore();

            return {
                items: computed(() => itemStore.items),
                loading: ref(false),
                itemStore
            }
        },
        async created() {
            this.loading = true;
            await this.itemStore.getItems();
            this.loading = false;
        }
    }
</script>