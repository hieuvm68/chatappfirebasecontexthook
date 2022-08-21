import { Spin } from "antd";
import React, { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase/config";

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const [user, setUser] = useState({}); //object empty
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const unsubscribed = auth.onAuthStateChanged((user) => {
      console.log({ user });
      if (user) {
        const { displayName, email, uid, photoURL } = user;
        //khi thanh cong se goi setUser
        //vi no rat nhieu thong tin nen se lay ra 1 so thong tin
        setUser({ displayName, email, uid, photoURL });
        setIsLoading(false);
        navigate("/");
        return;
      } else {
        setIsLoading(false);

        navigate("/login");
      }
    });
    //clean function
    return () => {
      unsubscribed();
    };
  }, [navigate]);
  return (
    <div>
      {/* truyen du lieu user */}
      <AuthContext.Provider value={{ user }}>
        {isLoading ? <Spin /> : children}
      </AuthContext.Provider>
    </div>
  );
}
