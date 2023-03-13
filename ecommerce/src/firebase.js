// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyApy3nJJtL6nZCxnuNm7p5ztiR2A9xjZQs",
  authDomain: "testfb-8ffe5.firebaseapp.com",
  projectId: "testfb-8ffe5",
  storageBucket: "testfb-8ffe5.appspot.com",
  messagingSenderId: "1089037232382",
  appId: "1:1089037232382:web:9c765c3bebb9bd90331daf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
export {db}