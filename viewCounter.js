import { initializeApp } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-app.js";
import {
  getDatabase,
  ref,
  get,
  set,
} from "https://www.gstatic.com/firebasejs/12.6.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyCmYLaB7ykapxcOCMyKXWa8YfDLLvGo_JI",
  authDomain: "m1showwebshare.firebaseapp.com",
  databaseURL: "https://m1showwebshare-default-rtdb.firebaseio.com",
  projectId: "m1showwebshare",
  storageBucket: "m1showwebshare.firebasestorage.app",
  messagingSenderId: "718279429662",
  appId: "1:718279429662:web:5cd2b09e930b8ab337280f",
  measurementId: "G-9XRV50SQS5",
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

const counterRef = ref(db, "viewCounter");

async function updateCounter() {
  document.getElementById("counter").innerText = "Views: Loading...";

  const snapshot = await get(counterRef);
  let current = snapshot.exists() ? snapshot.val() : 0;

  let newValue = current + 1;

  await set(counterRef, newValue);

  document.getElementById("counter").innerText = "Views: " + newValue;
}

updateCounter();
