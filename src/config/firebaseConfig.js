
import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import AsyncStorage from "@react-native-async-storage/async-storage";

const firebaseConfig = {
  apiKey: "AIzaSyCEjptb1huxgnCMDQadM_EZ93XbAx0i_B4",
  authDomain: "bolsilloaldia.firebaseapp.com",
  projectId: "bolsilloaldia",
  storageBucket: "bolsilloaldia.firebasestorage.app",
  messagingSenderId: "303096486898",
  appId: "1:303096486898:web:264e799e9c9ea500f6e96b",
  measurementId: "G-SH3KK908WS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

export const db = getFirestore(app);