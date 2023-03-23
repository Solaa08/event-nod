// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD_VPmr3KevRJvEBG_9RS8BMtVesH7X1Cs",
  authDomain: "event-nod-rest-api.firebaseapp.com",
  projectId: "event-nod-rest-api",
  storageBucket: "event-nod-rest-api.appspot.com",
  messagingSenderId: "207381269563",
  appId: "1:207381269563:web:d967c57ca689f69644201e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)