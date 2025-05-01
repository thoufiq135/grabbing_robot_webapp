import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDnjQlmL8Q4LIXoamQFUXQwtYjX6NABtxk",
  authDomain: "grabbing-robot.firebaseapp.com",
  databaseURL: "https://grabbing-robot-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "grabbing-robot",
  storageBucket: "grabbing-robot.firebasestorage.app",
  messagingSenderId: "845147200610",
  appId: "1:845147200610:web:890ed6a60f7f85e7fc853b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
export  {db};