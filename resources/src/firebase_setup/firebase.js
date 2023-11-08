import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyB1f4eKU7fQmpaUHk0eFoEJifiGkjw8b-s",
  authDomain: "blog-a1633.firebaseapp.com",
  projectId: "blog-a1633",
  storageBucket: "blog-a1633.appspot.com",
  messagingSenderId: "444571623777",
  appId: "1:444571623777:web:701ece25ea5b7daaaea520",
  measurementId: "G-3EVQ4N9JED"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export {db}
