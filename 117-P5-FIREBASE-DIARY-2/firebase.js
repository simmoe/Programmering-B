const firebaseConfig = {
    apiKey: "AIzaSyDqjW6iytdo7NXCiW0PNQ-mDFpA-Y0NJcg",
    authDomain: "p5-diary-838d3.firebaseapp.com",
    projectId: "p5-diary-838d3",
    storageBucket: "p5-diary-838d3.appspot.com",
    messagingSenderId: "569086894096",
    appId: "1:569086894096:web:00d88ba496d33c7c8d6a95"
  }

//start firebase
firebase.initializeApp(firebaseConfig) 
const db = firebase.firestore()

