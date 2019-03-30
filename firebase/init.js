import firabase from 'firebase'
import firestore from 'firebase/firestore'

var config = {
  apiKey: "AIzaSyBkTyY88m_O4HxThhu9AMZ1MTeV6MPcb6U",
  authDomain: "ninja-chat-6d594.firebaseapp.com",
  databaseURL: "https://ninja-chat-6d594.firebaseio.com",
  projectId: "ninja-chat-6d594",
  storageBucket: "ninja-chat-6d594.appspot.com",
  messagingSenderId: "37989223994"
};
const firabaseApp = firebase.initializeApp(config);

export default firabaseApp.firestore();
