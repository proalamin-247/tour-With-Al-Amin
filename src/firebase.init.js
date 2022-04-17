import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyDmxon2M-3hf9sFaF2XJtotm8cxiu_d_uI",
    authDomain: "tour-with-alamin.firebaseapp.com",
    projectId: "tour-with-alamin",
    storageBucket: "tour-with-alamin.appspot.com",
    messagingSenderId: "781217817362",
    appId: "1:781217817362:web:05563f68873baf58eb09cb"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;