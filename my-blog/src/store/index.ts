import { createStore } from "vuex";

const store = createStore({
    state: {
        points: 4
    },
    mutations: {
        updatePoints(state: any, payload: any) {
            state.points = state.points + payload;
        },
    }
});

export default store;