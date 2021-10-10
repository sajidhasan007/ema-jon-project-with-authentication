import firebaseConfig from './firebase.authentication';
import { initializeApp } from "firebase/app";

const intializationAuthentication = () => {
    initializeApp(firebaseConfig);
}

export default intializationAuthentication;