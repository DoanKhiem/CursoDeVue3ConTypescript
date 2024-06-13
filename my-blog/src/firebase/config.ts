import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyB2kbIkKLAOILpJwZNw9omDLy6XFjHQzdk",
    authDomain: "vuex-firebase-auth-fd696.firebaseapp.com",
    projectId: "vuex-firebase-auth-fd696",
    storageBucket: "vuex-firebase-auth-fd696.appspot.com",
    messagingSenderId: "849571629996",
    appId: "1:849571629996:web:268c8c83507432d4068809"
};

// init firebase
initializeApp(firebaseConfig);

// init auth
const auth = getAuth();

export { auth };