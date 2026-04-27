
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
 authDomain: "ai-interview-1ec9f.firebaseapp.com",
  projectId: "ai-interview-1ec9f",
  storageBucket: "ai-interview-1ec9f.firebasestorage.app",
  messagingSenderId: "323980786714",
  appId: "1:323980786714:web:bf12ada512aeaf09f365a3",
  measurementId: "G-VNQK7TEJ0L"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider()

export {auth , provider}