
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage} from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "nexuschat-8e6ed.firebaseapp.com",
  projectId: "nexuschat-8e6ed",
  storageBucket: "nexuschat-8e6ed.appspot.com",
  messagingSenderId: "231915526466",
  appId: "1:231915526466:web:ccaf94319465709c6210db"
};


const app = initializeApp(firebaseConfig);

export const auth=getAuth()
export const db=getFirestore()
export const storage=getStorage()