import firebase from "firebase/app";
import "firebase/database";
import "firebase/storage";

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

const storage = firebase.storage();

export { db, storage };