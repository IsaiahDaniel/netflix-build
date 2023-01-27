import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyACUnYo9fwClhtBXh0mGE4Qp91d13NoqeY",
  authDomain: "netflix-build-23ee9.firebaseapp.com",
  projectId: "netflix-build-23ee9",
  storageBucket: "netflix-build-23ee9.appspot.com",
  messagingSenderId: "804426783989",
  appId: "1:804426783989:web:13aed674e323e1a509b9bc",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore();
const storage = getStorage();
const auth = getAuth(app);

export { db, storage, auth }

export default app;
