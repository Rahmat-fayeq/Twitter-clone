// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBs7D1lhq32lnLB-im414j8QrxsSx0MVWY",
    authDomain: "twitter-cone-144da.firebaseapp.com",
    projectId: "twitter-cone-144da",
    storageBucket: "twitter-cone-144da.appspot.com",
    messagingSenderId: "528105689176",
    appId: "1:528105689176:web:80ee3ae08c74cc08143a2d"
  };

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export default app;
export { db, storage };