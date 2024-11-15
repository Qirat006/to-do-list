import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getFirestore , collection, addDoc ,onSnapshot , serverTimestamp , orderBy , query, where} from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCiy1vZYZsrKAJKZJyH0GPrN8wzze6Ttfo",
  authDomain: "to-do-list-7b419.firebaseapp.com",
  projectId: "to-do-list-7b419",
  storageBucket: "to-do-list-7b419.firebasestorage.app",
  messagingSenderId: "503727298840",
  appId: "1:503727298840:web:4356aaab7dc8173846266d",
  measurementId: "G-XCD37D4B8D"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {db , collection, addDoc ,onSnapshot ,serverTimestamp ,orderBy ,query ,where

}