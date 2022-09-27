// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword} from "firebase/auth";
import { getFirestore,getDocs,collection,doc, onSnapshot,addDoc,setDoc,id} from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: ""
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

 
export{auth,createUserWithEmailAndPassword,signInWithEmailAndPassword,db,getDocs,collection,doc,onSnapshot,addDoc,setDoc,id};