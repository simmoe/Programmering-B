const firebaseConfig = {
    apiKey: "AIzaSyAe6qc4OA4bX6EORs2K9_UDxrXL6siLdnc",
    authDomain: "p5-diary-ca5f7.firebaseapp.com",
    projectId: "p5-diary-ca5f7",
    storageBucket: "p5-diary-ca5f7.appspot.com",
    messagingSenderId: "290258973302",
    appId: "1:290258973302:web:f6b9054262788edf5a6557"
}

//start firebase
firebase.initializeApp(firebaseConfig) 
const db = firebase.firestore()

