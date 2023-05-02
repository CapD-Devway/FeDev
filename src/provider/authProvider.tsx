import { User } from "firebase/auth";
import React, { PropsWithChildren, useEffect, useState } from "react";
import { auth } from "src/constants/firebaseConfig";
import { AuthContext } from "src/context/authContenxt";

// export const UserContext = React.createContext(null);

export const UserContext = React.createContext<{
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
}>({ user: null, setUser: () => {} });

const defaultHeaders: {
  "Content-Type": string;
  Accept: string;
  Authorization?: string; // make Authorization optional
} = {
  "Content-Type": "application/json",
  Accept: "application/json",
};

const AuthProvider = ({ children }: PropsWithChildren<{}>) => {
  const [user, setUser] = useState<User | null>(null);
  const [registerFormOpen, setRegisterFormOpen] = useState(false);
  useEffect(() => {
    auth.onAuthStateChanged(async (firebaseUser) => {
      if (firebaseUser) {
        // 토큰을 가져온다.
        const token = await firebaseUser.getIdToken();
        // Header에 인증 정보 추가
        defaultHeaders.Authorization = `Bearer ${token}`;
        // 로그인 시도 (백엔드 API 구현 필요)
        const res = await fetch("/users/me", {
          method: "GET",
          headers: defaultHeaders,
        });
        // 로그인 성공시 user를 넘겨줌
        if (res.status === 200) {
          const user = await res.json();
          setUser(user);
        }
      } else {
        // 로그아웃시 Header에서
        delete defaultHeaders.Authorization;
        setUser(null);
      }
    });
  }, []);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

// const AuthProvider = ({ children }: PropsWithChildren<{}>) => {
//   const [user, setUser] = useState<User | null>(null);

//   useEffect(() => {
//     const subscribe = auth.onAuthStateChanged((fbUser) => {
//       console.log(`구독 실행`, fbUser);
//       setUser(fbUser);
//     });
//     return subscribe;
//   }, []);

//   return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
// };

export default AuthProvider;
