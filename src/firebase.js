import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

// Initialize Firebase
var config = {
  apiKey: "AIzaSyDbqsv6Z0-uaUr1wT5ZEb4UK4pqF6T3_-o",
  authDomain: "react-chat-app-e26f2.firebaseapp.com",
  databaseURL: "https://react-chat-app-e26f2.firebaseio.com",
  projectId: "react-chat-app-e26f2",
  storageBucket: "react-chat-app-e26f2.appspot.com",
  messagingSenderId: "882368079482"
};
firebase.initializeApp(config);

export default firebase;
