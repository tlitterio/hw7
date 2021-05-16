const firebase = require("firebase/app")
require("firebase/firestore")

const firebaseConfig = {
  apiKey: "AIzaSyC1RTgh9Q_tM86fvXVID3w7nSmd5niu8Xw",
  authDomain: "kiei-451-83b05.firebaseapp.com",
  projectId: "kiei-451-83b05",
  storageBucket: "kiei-451-83b05.appspot.com",
  messagingSenderId: "871053190990",
  appId: "1:871053190990:web:dc192a1cc3a3d3c817a01f"
}

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}

module.exports = firebase