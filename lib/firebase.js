import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyATXlpvHEYZY1SBnguI_3vMbOVyplbboj8",
  authDomain: "cuet-community.firebaseapp.com",
  projectId: "cuet-community",
  storageBucket: "cuet-community.appspot.com",
  messagingSenderId: "993662351210",
  appId: "1:993662351210:web:6e15d19562d11169735713"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);