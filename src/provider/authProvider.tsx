import { User } from "firebase/auth";
import React, { PropsWithChildren, useEffect, useState } from "react";
import { auth } from "src/constants/firebaseConfig";
import { AuthContext } from "src/context/authContenxt";

const AuthProvider = ({ children }: PropsWithChildren<{}>) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const subscribe = auth.onAuthStateChanged((fbUser) => {
      console.log(`구독 실행`, fbUser);
      setUser(fbUser);
    });
    return subscribe;
  }, []);

  return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
