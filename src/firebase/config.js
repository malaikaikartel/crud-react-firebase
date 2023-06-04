import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
var firebaseConfig = {
  // Paste Your keys here
  apiKey: "AIzaSyBy1fxtGHrXVFlHHYUVafny5SHV8rVCs6c",
  authDomain: "redframe-77d5a.firebaseapp.com",
  projectId: "redframe-77d5a",
  storageBucket: "redframe-77d5a.appspot.com",
  messagingSenderId: "806740627891",
  appId: "1:806740627891:web:7025d1386396f9cdb3fbc6",
  measurementId: "G-HSL5EMRL9W"
};
// Initialize Firebase
initializeApp(firebaseConfig);

export const db = getFirestore();
