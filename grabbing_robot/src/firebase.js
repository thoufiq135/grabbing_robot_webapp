// Import the necessary Firebase modules
import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';
import { getAuth, signInAnonymously } from 'firebase/auth';

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

// Get a reference to the Firebase Realtime Database
const db = getDatabase(app);

// Initialize Firebase Authentication
const auth = getAuth(app);

// Sign in anonymously
signInAnonymously(auth)
  .then(() => {
    console.log("Signed in anonymously");
  })
  .catch((error) => {
    console.error("Error signing in anonymously:", error);
  });

// Export the database and auth reference for use in your app
export { db, auth };
