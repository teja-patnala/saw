import {initializeApp} from "firebase/app";
import { getAnalytics } from "firebase/analytics";
 
const firebaseConfig = {
  apiKey: "AIzaSyBG39toMDUGLAPJHncwWQ-MASn5oeWs8sE",
  authDomain: "caw-task.firebaseapp.com",
  projectId: "caw-task",
  storageBucket: "caw-task.appspot.com",
  messagingSenderId: "932679545042",
  appId: "1:932679545042:web:67cb2967ed63cce7983d0b"
};

const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export default app
