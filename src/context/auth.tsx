// src/context/auth-context.js
import { NextRouter } from "next/router";
import { createContext, useEffect, useState } from "react";
import api from '../../services/api';
import { BUSINESS_PATH } from "../constants/urls";

interface IAuthContext {
  authState: { token: string };
  setAuthState: (userAuthInfo: { token: string }) => void;
  isUserAuthenticated: () => boolean;
  businessSignIn: (userAuthInfo: { email: string, password: string }) => Promise<void>;
  businessSignOut: (router: NextRouter) => void;
  validatorToken: (router: NextRouter) => void;
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
    const { data } = await api.post(`${BUSINESS_PATH}/signin`, {
      email,
      password,
    })

    const { token } = data;

    setUserAuthInfo({ token });
 }

 const businessSignOut = (router: NextRouter) => {
  localStorage.setItem(KEY_TOKEN, "");

   setAuthState({
     token: ''
   })
   router.push('/enterprise/login');
  }

const validatorToken = (router: NextRouter) => {
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
      validatorToken,
      getToken
    }}
   >
    {children}
   </Provider>
 );
};

export { AuthContext, AuthProvider };
