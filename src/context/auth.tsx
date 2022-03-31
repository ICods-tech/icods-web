// src/context/auth-context.js
import Router,{ useRouter, NextRouter } from "next/router";
import React, { createContext, useEffect, useState } from "react";
import api from '../../services/api';

interface IAuthContext {
  authState: { token: string };
  setAuthState: (userAuthInfo: { token: string }) => void;
  isUserAuthenticated: () => boolean;
  businessSignIn: (userAuthInfo: { email: string, password: string }) => Promise<void>;
  businessSignOut: () => void;
  redirect: (router: NextRouter) => void;
  getToken: () => string;
} 

const AuthContext = createContext<IAuthContext>({} as IAuthContext);
const { Provider } = AuthContext;
const KEY_TOKEN = "token";

const AuthProvider = ({ children }) => {
  const [authState, setAuthState] = useState({
   token: "",
  });

  useEffect(() => {
    console.log('Inside useEffect from auth');
    async function loadStoredData(): Promise<void> {
      const token = localStorage.getItem(KEY_TOKEN);
      setAuthState({token});
    }

    loadStoredData();
  }, []);

  const setUserAuthInfo = ({ token }) => {
    localStorage.setItem("token", token);

   setAuthState({
    token,
   });
  };
  
 const isUserAuthenticated = () => {
  if (!authState.token) {
    return false;
  }
 };

  const businessSignIn = async ({ email, password }) => {
    const { data } = await api.post('signin-business', {
      email,
      password,
    })

    const { token } = data;

    setUserAuthInfo({ token });
 }

 const businessSignOut = () => {
  localStorage.setItem(KEY_TOKEN, "");

   setAuthState({
     token: ''
   })
  }

const redirect = (router: NextRouter) => {
  const token = localStorage.getItem(KEY_TOKEN);
  
  if (!token) {
    router.push('/enterprise/login');
  }
};

  const getToken = () => { 
    return authState.token;
  }


   return (
   <Provider
     value={{
      authState,
      setAuthState: (userAuthInfo) => setUserAuthInfo(userAuthInfo),
      isUserAuthenticated,
      businessSignIn,
      businessSignOut,
      redirect,
      getToken
    }}
   >
    {children}
   </Provider>
 );
};

export { AuthContext, AuthProvider };