import { initializeApp } from "https://www.gstatic.com/firebasejs/9.4.1/firebase-app.js";
import {
  getFirestore,
  getDocs,
  getDoc,
  addDoc,
  setDoc,
  collection,
  query,
  where,
  doc,
} from "https://www.gstatic.com/firebasejs/9.4.1/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.4.1/firebase-auth.js";

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

auth.onAuthStateChanged((user) => {
  if (user) {
      fried()
  }
});

async function fried() {
    var user = auth.currentUser;
    var uid = user.uid;
    const cr = query(collection(db, uid), where("Crispyflour", "==", "1"));
    const f = query(collection(db, uid), where("Fish", "==", "1"));
    const s = query(collection(db, uid), where("Shrimp", "==", "1"));
    const querycr = await getDocs(cr);
    const queryf = await getDocs(f);
    const querys = await getDocs(s);
    const queryfood = document.querySelector(".fried");
    querycr.forEach((doc) => {
      console.log("Crispyflour: ", doc.data().Crispyflour);
      const html = `
      <div class="col-xl-auto col-md-6 mb-4">
      <div class="card border-left-primary shadow h-100 py-2">
        <div class="card-body">
          <a href="Shrimp-Balls.html">
            <img
              class="card-img-top"
              src="img/menu-1/2.jpg"
              height="170px"
            />
            <div
              class="
              text-xs
              font-weight-bold
              text-primary text-uppercase
              mb-3
              "
              ></div>
            <div class="h5 font-weight-bold text-gray-800">
            Asian Fried Shrimp Balls
            </div>
          </a>
        </div>
      </div>
    </div>
    <div class="col-xl-auto col-md-6 mb-4">
    <div class="card border-left-primary shadow h-100 py-2">
      <div class="card-body">
        <a href="Fish-and-Chips.html">
          <img
            class="card-img-top"
            src="img/menu-1/4.jpg""
            height="170px"
          />
          <div
            class="
            text-xs
            font-weight-bold
            text-primary text-uppercase
            mb-3
            "
            ></div>
          <div class="h5 font-weight-bold text-gray-800">
          Fish and Chips
          </div>
        </a>
      </div>
    </div>
  </div>
  <div class="col-xl-auto col-md-6 mb-4">
  <div class="card border-left-primary shadow h-100 py-2">
    <div class="card-body">
      <a href="Glory-Salad.html">
        <img
          class="card-img-top"
          src="img/menu-1/3.jpg"
          height="170px"
        />
        <div
          class="
          text-xs
          font-weight-bold
          text-primary text-uppercase
          mb-3
          "
          ></div>
        <div class="h5 font-weight-bold text-gray-800">
        Deep Fried Morning Glory Salad
        </div>
      </a>
    </div>
  </div>
</div>
      `;
      queryfood.innerHTML = html;
    });
  }