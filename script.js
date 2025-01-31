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

// Function to format Firestore timestamps
function formatTimestamp(timestamp) {
    if (!timestamp) return "None";
    const date = timestamp.toDate(); // Convert Firestore Timestamp to JS Date
    var output = "";
    output = output + date.getMonth() + 1 + "/";
    output = output + date.getDate() + "/";
    output = output + date.getFullYear() + " ";
    output = output + date.getHours() + ":";
    output = output + date.getMinutes() + ":";
    output = output + date.getSeconds();
    return output.toLocaleString(); // Format as readable date & time
}

// Fetch data from Firestore
async function fetchData() {
    const dataContainer = document.getElementById("data-container");

    const querySnapshot = await getDocs(collection(db, "testCollection"));
    querySnapshot.forEach((doc) => {
        console.log(doc.id, "=>", doc.data());
        const data = doc.data();
        const flowRate = data.FlowRate ?? "None";
        const timestamp = formatTimestamp(data.Time);     
        const power = data.Power ?? "None";
        const entry = document.createElement("p");
        entry.textContent = `${timestamp} |  Power: ${power}W | Flow Rate: ${flowRate}L/min`;
        dataContainer.appendChild(entry);
    });
}

fetchData();

function sayHello() {
    alert("Hello, World!");
}
