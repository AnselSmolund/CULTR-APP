import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBHyW15OxX3JiD-r5ICfdjnOioCm4VxFoQ",
  authDomain: "cultr-5be36.firebaseapp.com",
  projectId: "cultr-5be36",
  storageBucket: "cultr-5be36.firebasestorage.app",
  messagingSenderId: "1058223254898",
  appId: "1:1058223254898:web:8a050e2de6b5a8dc9341eb",
  measurementId: "G-8CB1WFJ139",
};

const app = initializeApp(firebaseConfig);

export const firestore = getFirestore(app);
