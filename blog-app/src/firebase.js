
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAifzyiAY9EcyOVAFfiklNmhD6yWL9gNAU",
  authDomain: "tp5-blog.firebaseapp.com",
  projectId: "tp5-blog",
  storageBucket: "tp5-blog.appspot.com",
  messagingSenderId: "123269931814",
  appId: "1:123269931814:web:0552daf9162cf3bde817e7",
  measurementId: "G-LYRC7VM6VX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const db = getFirestore(app);

export { db };