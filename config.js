import * as firebase from 'firebase'
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyBIVdGqv6DEcnjqTZyflndz5xB7LWmyhXU",
  authDomain: "wily-app-6ce4b.firebaseapp.com",
  databaseURL: "https://wily-app-6ce4b.firebaseio.com",
  projectId: "wily-app-6ce4b",
  storageBucket: "wily-app-6ce4b.appspot.com",
  messagingSenderId: "884653247145",
  appId: "1:884653247145:web:4be320b0ffa1befb0677b8"
};
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();
