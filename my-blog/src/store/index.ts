import { createStore } from "vuex";

// firebase import
import { auth } from "../firebase/config";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

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
        async signUp(context: any, { email, password }: { email: string, password: string }) {
            console.log('signUp action triggered');
            
            // async code
            const res = await createUserWithEmailAndPassword(auth, email, password)
            if (res) {
                console.log('user created:', res.user);
                context.commit('setUser', res.user);
            } else {
                throw new Error('could not complete sign up');
            }
        },
        async login (context: any, { email, password }: { email: string, password: string }) {
            console.log('login action triggered');
            
            // async code
            const res = await signInWithEmailAndPassword(auth, email, password)
            if (res) {
                console.log('user logged in:', res.user);
                context.commit('setUser', res.user);
            } else {
                throw new Error('could not complete login');
            }
        }
    },
});

export default store;