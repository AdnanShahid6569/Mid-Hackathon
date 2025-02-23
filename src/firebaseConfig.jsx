import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyBV-5WdpHezAp1FZij8seF8e-shzUtlI8s",
  authDomain: "mid-hackathon-cb4de.firebaseapp.com",
  projectId: "mid-hackathon-cb4de",
  storageBucket: "mid-hackathon-cb4de.firebasestorage.app",
  messagingSenderId: "176107645581",
  appId: "1:176107645581:web:590d4da0686d3a55d390c4"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export default auth
export {auth,db}