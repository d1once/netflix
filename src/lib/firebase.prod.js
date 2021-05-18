import Firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBX5KnRTp46BNGe5ceFL38o6BynoA-tqR4",
  authDomain: "netflix--tut.firebaseapp.com",
  projectId: "netflix--tut",
  storageBucket: "netflix--tut.appspot.com",
  messagingSenderId: "980988498451",
  appId: "1:980988498451:web:5580a08acba674f77925e6",
};

const firebase = Firebase.initializeApp(config);

export { firebase };
