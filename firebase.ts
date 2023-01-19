
import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyBRnOnKLlpMtBi56XUIqWWGF9bjdkCttA0",
  authDomain: "wow-movies-95c3b.firebaseapp.com",
  projectId: "wow-movies-95c3b",
  storageBucket: "wow-movies-95c3b.appspot.com",
  messagingSenderId: "552681581730",
  appId: "1:552681581730:web:173a6e11a7fd0fbcfc3bfb"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)