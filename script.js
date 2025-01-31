// Import Firebase modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore, collection, getDocs } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";


// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD9rubGXDefcRikHpPy8hnF95DKDbtdLHQ",
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

// Function to list collections
async function listAllCollections() {
    const rootDocRef = doc(db, "/");  // Root reference (Firestore doesn't allow listing collections directly)
    const collections = await listCollections(rootDocRef);

    collections.forEach((collection) => {
        console.log("Collection ID:", collection.id);
    });
}

listAllCollections();

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
