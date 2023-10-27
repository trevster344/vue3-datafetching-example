import api from "@/api/axios.js";

export const getItems = async function () {
    let { data } = await api.get("/items.json");
    return data;
}

export default {
    getItems
}