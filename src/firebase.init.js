// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBr-LnDhpcaGDeJfKH4-iweuT8ZWeeg4bc",
  authDomain: "inventory-billing-app.firebaseapp.com",
  projectId: "inventory-billing-app",
  storageBucket: "inventory-billing-app.appspot.com",
  messagingSenderId: "353524170659",
  appId: "1:353524170659:web:cdedc5e76bd8b83b28e416"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
