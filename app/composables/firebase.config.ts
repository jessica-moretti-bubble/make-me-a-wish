import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCdgCG7m6b2_TIjopogW8JNVKE_6bSZ-3A",
  authDomain: "make-me-a-wish.firebaseapp.com",
  projectId: "make-me-a-wish",
  storageBucket: "make-me-a-wish.firebasestorage.app",
  messagingSenderId: "794059776717",
  appId: "1:794059776717:web:9f6a910a9ef0cfd5963f84",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const googleProvider = new GoogleAuthProvider();
