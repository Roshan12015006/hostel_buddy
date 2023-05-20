import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
import 'firebase/compat/storage'

// web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDQE-pfRee4mpMO8xhF1NjJCSsBBlWDk6o",
    authDomain: "nitkkrhosstelbudy.firebaseapp.com",
    projectId: "nitkkrhosstelbudy",
    storageBucket: "nitkkrhosstelbudy.appspot.com",
    messagingSenderId: "425179456740",
    appId: "1:425179456740:web:817202e921436ae3be78f1",
    measurementId: "G-VG44PS7PYM"
};

  export const Firebase= firebase.initializeApp(firebaseConfig)//named export