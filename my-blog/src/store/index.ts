import { createStore } from "vuex";

// firebase import
import { auth } from "../firebase/config";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";

const unsub = onAuthStateChanged(auth, (user) => {
    store.commit('setUser', user);
    store.commit('setAuthIsReady', true);
    unsub();
});
const store = createStore({
    state: {
        user: null,
        authIsReady: false,
    },
    mutations: {
        setUser(state: any, payload: any) {
            state.user = payload;
            console.log('user state updated:', state.user);
        },
        setAuthIsReady(state: any, payload: boolean) {
            state.authIsReady = payload;
            console.log('authIsReady state updated:', state.authIsReady);
        }
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
        },
        async logout(context: any) {
            console.log('logout action triggered');
            
            // async code
            await signOut(auth);
            context.commit('setUser', null);
        }
    },
});

export default store;