import { initializeApp } from "https://www.gstatic.com/firebasejs/9.4.1/firebase-app.js";
import {
  getFirestore, //main
  collection, //sub-main
  getDocs, //recall data to show output
} from "https://www.gstatic.com/firebasejs/9.4.1/firebase-firestore-lite.js";
import {} from "https://www.gstatic.com/firebasejs/9.4.1/firebase-firestore.js";
import {
  getAuth, //main
  signInWithEmailAndPassword, //sub-main
  onAuthStateChanged,// stage after signin
} from "https://www.gstatic.com/firebasejs/9.4.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyCdWQFLhPwXxBOWBKrhCz-biUs2F776OZk",
  authDomain: "smart-cooking-9cd09.firebaseapp.com",
  projectId: "smart-cooking-9cd09",
  storageBucket: "smart-cooking-9cd09.appspot.com",
  messagingSenderId: "879943701858",
  appId: "1:879943701858:web:632cf2f2c27ec380d0483b",
  measurementId: "G-X1MJDMSJMC",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const auth = getAuth();
const loginFrom = document.querySelector("#login-form");
loginFrom.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = loginFrom["login-email"].value;
  const password = loginFrom["login-password"].value;
  signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
    loginFrom.reset();
  });
});

onAuthStateChanged(auth, (user) => {
  if (user) {
    window.location = "index.html";
  }
});
