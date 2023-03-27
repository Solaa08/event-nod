// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "AIzaSyDrC7IY3tAQvjnJmZjmvOU8r4At9g06xP4",
  authDomain: "event-nod.firebaseapp.com",
  projectId: "event-nod",
  storageBucket: "event-nod.appspot.com",
  messagingSenderId: "1046713682734",
  appId: "1:1046713682734:web:a083b9d5947a69e3a348bf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)