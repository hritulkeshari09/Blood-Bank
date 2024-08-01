// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB1gG_Mv2AD4dU5rj9lnyaAJUINpZwGOI0",
  authDomain: "attendance-manage-ffb74.firebaseapp.com",
  projectId: "attendance-manage-ffb74",
  storageBucket: "attendance-manage-ffb74.appspot.com",
  messagingSenderId: "317809689439",
  appId: "1:317809689439:web:2b65065e2664103fafacea"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore();

export {app, auth, db};