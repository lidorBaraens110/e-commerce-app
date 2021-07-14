import firebase from 'firebase';


const firebaseConfig = {
    apiKey: "AIzaSyDgThoUMxAsjhq6HtWGseRM2tsKhrdbCaE",
    authDomain: "e-commerce-83126.firebaseapp.com",
    projectId: "e-commerce-83126",
    storageBucket: "e-commerce-83126.appspot.com",
    messagingSenderId: "840494336358",
    appId: "1:840494336358:web:abf90b1f9eb7e8eb9120a7",
    measurementId: "G-T81TMZK965"
};

firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();

export { storage }