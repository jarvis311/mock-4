// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
const firebaseConfig = {
  apiKey: 'AIzaSyATMOBVAJ0ZZA7a7EBP2WbM2oTPRD0QZwk',
  authDomain: 'tamplate-intigrate.firebaseapp.com',
  projectId: 'tamplate-intigrate',
  storageBucket: 'tamplate-intigrate.appspot.com',
  messagingSenderId: '627238933272',
  appId: '1:627238933272:web:d1e93e6a2c92b5c0c5846d',
  measurementId: 'G-H5LD4XP3GM',
}

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
const auth = getAuth(app)
export { db, auth }
