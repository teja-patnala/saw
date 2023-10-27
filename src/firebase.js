import {initializeApp} from "firebase/app";
import { getAnalytics } from "firebase/analytics";
 
const firebaseConfig = {
  apiKey: "AIzaSyBCdVWdG02lHiU6muGt4k-NmdgCDqAo0As",
  authDomain: "sawone-b3fae.firebaseapp.com",
  projectId: "sawone-b3fae",
  storageBucket: "sawone-b3fae.appspot.com",
  messagingSenderId: "302903918735",
  appId: "1:302903918735:web:e6b2499e1e7f15485db0fa"
};

const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export default app