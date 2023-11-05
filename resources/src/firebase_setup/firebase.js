// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB1f4eKU7fQmpaUHk0eFoEJifiGkjw8b-s",
  authDomain: "blog-a1633.firebaseapp.com",
  projectId: "blog-a1633",
  storageBucket: "blog-a1633.appspot.com",
  messagingSenderId: "444571623777",
  appId: "1:444571623777:web:701ece25ea5b7daaaea520",
  measurementId: "G-3EVQ4N9JED"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);