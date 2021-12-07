import firebase from 'firebase';

 var firebaseConfig = {
    apiKey: "AIzaSyChFksjr4OwO-C_yT3nL6PGxBchl3N2-hQ",
    authDomain: "book-santa-5e7da.firebaseapp.com",
    databaseURL: "https://book-santa-5e7da-default-rtdb.firebaseio.com",
    projectId: "book-santa-5e7da",
    storageBucket: "book-santa-5e7da.appspot.com",
    messagingSenderId: "405976487717",
    appId: "1:405976487717:web:8c609a68ea2d9f31cf6ccc"
  };

  // Initialize Firebase
if(!firebase.apps.length)
{
firebase.initializeApp(firebaseConfig)
}

export default firebase.firestore();
