import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBzvBl98yaFs96LcHq5E1hVi55Hdr5iuC0",
  authDomain: "lamboshopback.firebaseapp.com",
  projectId: "lamboshopback",
  storageBucket: "lamboshopback.firebasestorage.app",
  messagingSenderId: "857346794102",
  appId: "1:857346794102:web:d7510ac2220e2ee7413557"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export tools to use them in other files
export const auth = getAuth(app);
export const db = getFirestore(app);