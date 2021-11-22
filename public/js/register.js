import { initializeApp } from "https://www.gstatic.com/firebasejs/9.4.1/firebase-app.js";
import {
  getFirestore,
  collection,
  addDoc,
  doc,
  setDoc,
  Timestamp,
} from "https://www.gstatic.com/firebasejs/9.4.1/firebase-firestore.js";
import {
  getAuth, //main
  createUserWithEmailAndPassword,
  onAuthStateChanged, // stage after signin
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
const singupFrom = document.querySelector("#signup-form");
singupFrom.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = singupFrom["signup-email"].value;
  const password = singupFrom["signup-password"].value;
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      setDoc(doc(db, userCredential.user.uid, "data"), {
        FirstName: singupFrom["signup-firstname"].value,
        LastName: singupFrom["signup-lastname"].value,
        Email: singupFrom["signup-email"].value,
        Password: singupFrom["signup-password"].value,
      });
    })
    .then(() => {
      console.log("Document successfully written!");
      singupFrom.reset();
    })
});

onAuthStateChanged(auth, (user) => {
  if (user) {
    setTimeout(function () {
      window.location = "index.html";
    }, 2000);
    addingredients();
    addtype();
  }
});

async function addingredients() {
  var user = auth.currentUser;
  var uid = user.uid;
  const docRef = await setDoc(doc(db, uid, "Ingredients"), {
    Chicken: "0",
    Pork: "0",
    Beef: "0",
    Vermicelli: "0",
    Noodle: "0",
    Pasta: "0",
    Shrimp:"0",
    Fish:"0",
    Egg:"0",
    Eggtofu:"0",
    Tofu:"0",
    Cheese:"0",
    Crispyflour:"0",
    Potato:"0",
    Turkeyberry:"0",
    Moringglory:"0",
    Ivygourd:"0",
    Kaffir:"0",
    Spinach:"0",
    Sauce:"0",
    Kimchi: "0"
  });
}

async function addtype() {
  var user = auth.currentUser;
  var uid = user.uid;
  const docRef = await setDoc(doc(db, uid, "type"), {
    Fried: "true",
    Curry: "true",
    Baked: "true",
    StirFry: "true"
  });
}