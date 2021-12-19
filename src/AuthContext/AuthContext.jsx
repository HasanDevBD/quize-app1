import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile
} from "firebase/auth";
import React, { useContext, useEffect, useState } from "react";
import "../Frebase";

const AuthContext = React.createContext()
export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [loading, setloading] = useState(true);
  const [CorrenUser, setCorrenUser] = useState(false);

  // state change
  useEffect(() => {
    // effect
    const auth = getAuth();
    const unSubscribed = onAuthStateChanged(auth, (user) => {
      setCorrenUser(user);
      setloading(false);
    });
    return unSubscribed;
    // return () => {
    //     cleanup
    // }
  }, []);
  //singnup function
  async function signup(email, password, username) {
    
    const auth = getAuth();
    await createUserWithEmailAndPassword(auth, email, password, username);
    // update Profile
    await updateProfile(auth.currentUser, {
      displayName: username,
    });

    const user = auth.currentUser;
    setCorrenUser({
      ...user,
    });
  }

  //log in function
  function logIn(email, password) {

    const auth = getAuth();
    return signInWithEmailAndPassword(auth, email, password);
  }
  // logOut function
  function logOut() {
    const auth = getAuth();
    return signOut(auth);
  }

  const value = {
    CorrenUser,
    signup,
    logIn,
    logOut,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
