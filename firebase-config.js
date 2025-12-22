import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-database.js";

const firebaseConfig = {
   // your config here
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export { db };