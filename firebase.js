// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA5sYleSijbpVuYYJQ1zUnq3S3lAiIYhr0",
    authDomain: "fb-clone-yt1.firebaseapp.com",
    projectId: "fb-clone-yt1",
    storageBucket: "fb-clone-yt1.appspot.com",
    messagingSenderId: "170657218080",
    appId: "1:170657218080:web:c4b06df7c1ff107be98645"
  };

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export default app;
export { db, storage };
