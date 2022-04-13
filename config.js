import firebase from 'firebase' 
require('@firebase/firestore')
var firebaseConfig = {
  apiKey: "AIzaSyApr0rMW-0eT1xUwh7fLTKFtjlh3YQsHwE",
  authDomain: "story-hub-43303.firebaseapp.com",
  projectId: "story-hub-43303",
  storageBucket: "story-hub-43303.appspot.com",
  messagingSenderId: "410824759715",
  appId: "1:410824759715:web:fb0d962637ae58c86a2216"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();