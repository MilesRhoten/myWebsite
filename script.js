import { getDatabase, ref, get, child } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";

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


const dbRef = ref(getDatabase());

// Function to fetch all users
async function fetchUsers() {
    try {
        const snapshot = await get(child(dbRef, "users")); // Fetch "users" collection
        if (snapshot.exists()) {
            console.log("Users:", snapshot.val()); // Display data
        } else {
            console.log("No users found.");
        }
    } catch (error) {
        console.error("Error fetching users:", error);
    }
}

fetchUsers();

function sayHello() {
    alert("Hello, World!");
}
