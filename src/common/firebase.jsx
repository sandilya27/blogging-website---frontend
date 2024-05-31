import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCfQq6_oD2JT5M4PafKdx1PjO4xhXevjMk",
  authDomain: "blog-website-82c10.firebaseapp.com",
  projectId: "blog-website-82c10",
  storageBucket: "blog-website-82c10.appspot.com",
  messagingSenderId: "1054019649493",
  appId: "1:1054019649493:web:41e7c7304f4633e12dc75c",
};

const app = initializeApp(firebaseConfig);

//google auth
const provider = new GoogleAuthProvider();

const auth= getAuth();

export const authWithGoogle = async () => {
   let user=null;
   
   await signInWithPopup(auth,provider)
   .then((result)=>{
    user=result.user;
   })
   .catch((err)=>{
    console.log(err);
   })

   return user;
}
