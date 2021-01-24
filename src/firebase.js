import firebase from "firebase/app";
import "firebase/database";
import "firebase/firestore";
import "firebase/storage";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB4Huhx0TR3EIGDOQcWBiAE7bL0ilcOuhA",
  authDomain: "yeoungpedia.firebaseapp.com",
  projectId: "yeoungpedia",
  storageBucket: "yeoungpedia.appspot.com",
  messagingSenderId: "651965738016",
  appId: "1:651965738016:web:69159de903681bae736045",
  measurementId: "G-VWQKH5ES7K",
};

firebase.initializeApp(firebaseConfig);

const db = firebase.database();

const dbStore = firebase.firestore();

const storage = firebase.storage();

const authService = firebase.auth();

const firebaseInstance = firebase;

export { db, storage, authService, firebaseInstance, dbStore };
