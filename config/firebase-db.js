// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: process.env.API_KEY,
    authDomain: 'nextjs-firebase-1851e.firebaseapp.com',
    projectId: 'nextjs-firebase-1851e',
    storageBucket: 'nextjs-firebase-1851e.appspot.com',
    messagingSenderId: '884244158148',
    appId: '1:884244158148:web:15c2261688049a55849b91',
    measurementId: 'G-KR2RGDW3SF',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// make connection with the server and the database
const db = getFirestore(app);
export default db;
