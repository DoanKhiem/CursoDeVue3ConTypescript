import { createStore } from "vuex";

const store = createStore({
    state: {
        user: null,
    },
    mutations: {
        setUser(state: any, payload: any) {
            state.user = payload;
            console.log('user state updated:', state.user);
        },
    },
});

export default store;