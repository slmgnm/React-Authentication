import React, { useContext, useEffect, useState } from "react";
import { auth } from "../firebase";

//Context provides a way to pass data through the component tree without having to pass props down manually at every level.
const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();

  function signup(email, password) {
    return auth.createUserWithEmailAndPassword(email, password);
  }
  useEffect(() => {
    //This method allows us to set the user
    const unsubscribe = auth.onAuthStateChanged(user => {
      setCurrentUser(user);
    });
    // it will unsubscribe us form the listener whenever we unmount the component
    return unsubscribe;
  }, []);

  const value = { currentUser, signup };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
