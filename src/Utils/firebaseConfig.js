
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import {getFirestore, collection} from "firebase/firestore"

const firebaseConfig = {
  apiKey:import.meta.env.VITE_REACT_APP_FB_API_KEY,
  authDomain: "meet-now-fb382.firebaseapp.com",
  projectId: "meet-now-fb382",
  storageBucket: "meet-now-fb382.appspot.com",
  messagingSenderId: "699069650567",
  appId: "1:699069650567:web:d35d0c3737c70322a68a22",
  measurementId: "G-HTTJTW0WL2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebaseAuth=getAuth(app);
export const db=getFirestore(app);

export const usersRef = collection(db, "users");
export const meetingsRef = collection(db, "meetings");

