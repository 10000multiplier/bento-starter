import firebase from 'firebase/app'
import 'firebase/auth'

// The configuration below is not sensitive data. You can serenely add your config here
const config = {
  apiKey: "AIzaSyBQMKlp7PH3KNmGw2UOta5IJ0VhbkVLcgI",
  authDomain: "bento-starter-3434a.firebaseapp.com",
  databaseURL: "https://bento-starter-3434a.firebaseio.com",
  projectId: "bento-starter-3434a",
  storageBucket: "bento-starter-3434a.appspot.com",
  messagingSenderId: "861191320297",
  appId: "1:861191320297:web:1f4deb2e6dd4a3c9283678",
  measurementId: "G-SH6SPGH4GN"
}

firebase.initializeApp(config)
