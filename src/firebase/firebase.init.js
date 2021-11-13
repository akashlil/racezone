import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

const firebaseinitializeApp = () => {
  initializeApp(firebaseConfig);
};

export default firebaseinitializeApp;
