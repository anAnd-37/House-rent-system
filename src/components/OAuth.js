import React from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  SignInMethod,
} from "firebase/auth";
import { doc, setDoc, getDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase.config";
import { toast } from "react-toastify";
import { FcGoogle } from "react-icons/fc";
import Signin from "../pages/Signin";

const OAuth = () => {
  const navaigate = useNavigate();
  const location = useLocation();

  const onGoogleAuthHandler = async () => {
    try {
      const auth = getAuth();
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      const docRef = doc(db, "users", user.uid);
      const docSnap = await getDoc(docRef);
      if (!docSnap.exists()) {
        await setDoc(doc(db, "users", user.uid), {
          name: user.displayName,
          email: user.email,
          timestamp: serverTimestamp(),
        });
      }
      navaigate("/");
    } catch (error) {
      toast.error("Problem with Google Auth!");
    }
  };

  return (
    <div>
      <h6 className="mt-2">
        Sign {location.pathname === "/signup" ? "Up" : "In"} With &nbsp;
        <button onClick={onGoogleAuthHandler}>
          <FcGoogle></FcGoogle>
        </button>
      </h6>
    </div>
  );
};

export default OAuth;
