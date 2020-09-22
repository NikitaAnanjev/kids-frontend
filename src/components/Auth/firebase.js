import firebase from "firebase"

const firebaseApp = firebase.initializeApp({
        apiKey: "AIzaSyAHen7bI6CBye-1FE3L93loUGfydOgj1aU",
        authDomain: "kids-a72be.firebaseapp.com",
        databaseURL: "https://kids-a72be.firebaseio.com",
        projectId: "kids-a72be",
        storageBucket: "kids-a72be.appspot.com",
        messagingSenderId: "840641703278",
        appId: "1:840641703278:web:816904b1925c9f9d9ba57f",
        measurementId: "G-TJ7VHH5Y31"
})

const db = firebase.firestore()
const auth = firebase.auth()

export {db, auth}
// export {db, auth}