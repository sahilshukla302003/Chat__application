
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage} from "firebase/storage";



const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "nexuschat-35eed.firebaseapp.com",
  projectId: "nexuschat-35eed",
  storageBucket: "nexuschat-35eed.appspot.com",
  messagingSenderId: "821143026926",
  appId: "1:821143026926:web:fc750889e4b1b966c107ff"
};



const app = initializeApp(firebaseConfig);

export const auth=getAuth()
export const db=getFirestore()
export const storage=getStorage()