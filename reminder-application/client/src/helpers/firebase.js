import firebase from 'firebase'
import 'firebase/auth'

const app = firebase.initializeApp({
     
        apiKey: "AIzaSyDKhRQap5M989MOKSDDP-10uLQyxM9OL20",
        authDomain: "remind-me-1900a.firebaseapp.com",
        projectId: "remind-me-1900a",
        storageBucket: "remind-me-1900a.appspot.com",
        messagingSenderId: "703955854602",
        appId: "1:703955854602:web:aad6f8d97676e669b006f3"    
})

export const auth = app.auth()

export default app