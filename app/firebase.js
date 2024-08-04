// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDedH0ro-AB174LP9aOcECNehphZi1r3-w",
  authDomain: "inventory-management-59af2.firebaseapp.com",
  projectId: "inventory-management-59af2",
  storageBucket: "inventory-management-59af2.appspot.com",
  messagingSenderId: "493499205177",
  appId: "1:493499205177:web:fe3a974bfc4dd6c33defe8",
  measurementId: "G-WLWDYHV1DS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export {firestore}