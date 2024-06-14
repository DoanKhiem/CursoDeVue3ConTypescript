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
    actions: {
        signUp(context: any, { email, password }: { email: string, password: string }) {
            console.log('signUp action triggered');
            
            // async code
            setTimeout(() => {
                context.commit('setUser', { email, password });
            }, 1000);
        },
    },
});

export default store;