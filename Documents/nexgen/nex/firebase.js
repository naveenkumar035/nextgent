// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAB6bigImyGWVblScaseM3t_XhJcbXGr7w",
  authDomain: "nexgen-966fb.firebaseapp.com",
  projectId: "nexgen-966fb",
  storageBucket: "nexgen-966fb.appspot.com",
  messagingSenderId: "43889964960",
  appId: "1:43889964960:web:4547ff8635272b532916c5",
  measurementId: "G-YF3QE6WNG1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const storage = getStorage();


export {db, storage};
export default app;