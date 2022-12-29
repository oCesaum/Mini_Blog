import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDQIxXKvBzsQCFpjSkRAPfZih9RWOHNJ7M",
  authDomain: "mini-blog-f58b6.firebaseapp.com",
  projectId: "mini-blog-f58b6",
  storageBucket: "mini-blog-f58b6.appspot.com",
  messagingSenderId: "734125638146",
  appId: "1:734125638146:web:e762b72ad9eab9a2759d1b"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

export {db}