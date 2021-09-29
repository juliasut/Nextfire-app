import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyBazkbPDfOPQUPt6B5xZOUczruBon9-fm0",
  authDomain: "nextfire-app-79a59.firebaseapp.com",
  projectId: "nextfire-app-79a59",
  storageBucket: "nextfire-app-79a59.appspot.com",
  messagingSenderId: "890444711929",
  appId: "1:890444711929:web:dac0da36da73d4371f9f28",
  measurementId: "G-6FFTR5QSFD"
}

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const storage = firebase.storage();