import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  // Add your Firebase config here after adding environment variables
    apiKey: "AIzaSyCeUBxN-llJciMNdom9Irb9vb0iO8j-nh0",
    authDomain: "re-verse-877bf.firebaseapp.com",
    projectId: "re-verse-877bf",
    storageBucket: "re-verse-877bf.firebasestorage.app",
    messagingSenderId: "910625117429",
    appId: "1:910625117429:web:eb68caf05a267bfbfee1bc",
    measurementId: "G-PNJB6VZPD2"
}

const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)

