import Image from "next/image";
import { GoogleAuthProvider, User, signInWithPopup } from "firebase/auth";
import { addDoc, collection, getDocs, query, where } from "firebase/firestore";
import { useRouter } from "next/router";
import { useState } from "react";
import { auth, db } from "src/constants/firebaseConfig";
import styled from "styled-components";

function GoogleLogin() {
  const router = useRouter();
  const [userData, setUserData] = useState<User | null>(null);

  const googleProvider = new GoogleAuthProvider();
  const signInWithGoogle = async () => {
    try {
      googleProvider.setCustomParameters({
        prompt: "select_account",
      });
      const res = await signInWithPopup(auth, googleProvider);
      const user = res.user;
      console.log(user);
      const q = query(collection(db, "users"), where("uid", "==", user.uid));
      const docs = await getDocs(q);
      if (docs.docs.length === 0) {
        await addDoc(collection(db, "users"), {
          uid: user.uid,
          name: user.displayName,
          authProvider: "google",
          email: user.email,
          profilePhoto: user.photoURL,
        });
      }
      router.push("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <StyledDiv>
      <button onClick={signInWithGoogle}>
        <Image
          src="/images/LoginGoogle.png"
          alt="구글 로그인"
          width={490}
          height={612}
        />
      </button>
    </StyledDiv>
  );
}

export default GoogleLogin;

const StyledDiv = styled.div`
  color: black;
`;
