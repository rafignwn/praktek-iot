// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAJh78Z3LBT9ob6dkipt64OhZqxRm8mxnQ",
  authDomain: "simpleiot-3dab0.firebaseapp.com",
  databaseURL:
    "https://simpleiot-3dab0-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "simpleiot-3dab0",
  storageBucket: "simpleiot-3dab0.appspot.com",
  messagingSenderId: "464866316832",
  appId: "1:464866316832:web:9e2ad0a42d6d477c232245",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export { db };
