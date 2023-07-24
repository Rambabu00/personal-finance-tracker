import { initializeApp } from "firebase/app";

import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";

 const firebaseConfig = {
  apiKey: "AIzaSyBISZYQzCc8Nxx2vqLU9L6PD9Be7TBmrIY",
  authDomain: "personal-finance-tracker-65204.firebaseapp.com",
  projectId: "personal-finance-tracker-65204",
  storageBucket: "personal-finance-tracker-65204.appspot.com",
  messagingSenderId: "585221207779",
  appId: "1:585221207779:web:e38ba4caeaaa12bb2177d6",
  measurementId: "G-CLW0R6R74B"
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export { db, auth, provider, doc, setDoc };

