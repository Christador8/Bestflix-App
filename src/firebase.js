import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup
} from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAhfoLhsTn_wCO7ijgl67-L5FNUMbOBR5Q",
  authDomain: "bestflix-ab249.firebaseapp.com",
  projectId: "bestflix-ab249",
  storageBucket: "bestflix-ab249.appspot.com",
  messagingSenderId: "1052664133600",
  appId: "1:1052664133600:web:12b5bcf4da1e64c2799d85",
  measurementId: "G-6G2BEMNG21"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);

// 🔐 Sign up (register)
export const SignIn = async (name, email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    await updateProfile(user, { displayName: name });

    await setDoc(doc(db, "users", user.uid), {
      uid: user.uid,
      name: name,
      email: email,
      createdAt: new Date()
    });

    console.log("User registered:", user);
  } catch (error) {
    console.error("Error signing in:", error.message);
  }
};

// 🔐 Email/password login
export const user_auth = async (email, password) => {
  const userCredential = await signInWithEmailAndPassword(auth, email, password);
  return userCredential.user;
};

// 🔐 Google login
export const google_auth = async () => {
  const provider = new GoogleAuthProvider();
  const result = await signInWithPopup(auth, provider);
  return result.user;
};

// Optional: export auth and db if needed elsewhere
export { auth, db, analytics };
