import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBpOBdQNxF9MZL5ym6qdSXcgkeDjggPYZA",
  authDomain: "hotel-management-f73e6.firebaseapp.com",
  projectId: "hotel-management-f73e6",
  storageBucket: "hotel-management-f73e6.firebasestorage.app",
  messagingSenderId: "401518650443",
  appId: "1:401518650443:web:aef445ac116125ea2ed9ce"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export default auth
export {auth,db}