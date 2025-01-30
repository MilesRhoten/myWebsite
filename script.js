// Import Firebase modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore, collection, getDocs } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

require('dotenv').config();
const apiKey = process.env.FIREBASE_API_KEY;

// Firebase configuration
const firebaseConfig = {
    apiKey: apiKey,
    authDomain: "esp32pumpdata.firebaseapp.com",
    databaseURL: "https://esp32pumpdata-default-rtdb.firebaseio.com",
    projectId: "esp32pumpdata",
    storageBucket: "esp32pumpdata.firebasestorage.app",
    messagingSenderId: "981938327594",
    appId: "1:981938327594:web:e0279618dfed8a5ad3b353"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Fetch data from Firestore
async function fetchData() {
    const querySnapshot = await getDocs(collection(db, "your-collection-name"));
    querySnapshot.forEach((doc) => {
        console.log(doc.id, "=>", doc.data());
    });
}

fetchData();

function sayHello() {
    alert("Hello, World!");
}
