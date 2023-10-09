import { createContext, useEffect, useState, } from "react";
import PropTypes from 'prop-types';
import auth from "../Firebase/firebase.config";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";


export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
      const [user, setUser] = useState(null);
      const [loading, setLoading] = useState(true);


      const logInUser = (email, password) => {
            setLoading(true);
            return signInWithEmailAndPassword(auth, email, password);
      };
      const logOutUser = () => {
            setLoading(true);
            return signOut(auth);
      };


      const createUser = (email, password) => {
            setLoading(true);
            return createUserWithEmailAndPassword(auth, email, password);

      };
      useEffect(() => {
            const unSubscribe = onAuthStateChanged(auth, currentUser => {
                  setUser(currentUser);
                  setLoading(false);
                  console.log('inside userr of authprovider', currentUser);
            });
            return () => {
                  unSubscribe();
            };
      }, []);




      const authInfo = {
            user,
            loading,
            createUser,
            logInUser,
            logOutUser
      };
      return (
            <AuthContext.Provider value={authInfo}>
                  {children}
            </AuthContext.Provider>
      );
};

export default AuthProvider;

AuthProvider.prototype = {
      children: PropTypes.node
};
