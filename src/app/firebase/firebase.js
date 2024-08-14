import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB9j8EZBzfb_6Bx6PTf9VjbwmiBcS05EJ0",
  authDomain: "shopper-s-stop-7941e.firebaseapp.com",
  projectId: "shopper-s-stop-7941e",
  storageBucket: "shopper-s-stop-7941e.appspot.com",
  messagingSenderId: "24969066219",
  appId: "1:24969066219:web:398b5b87974a3967c4f0ae",
  measurementId: "G-KG4TNY22QD",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
