import Image from "next/image";
import {
  GithubAuthProvider,
  User,
  signInWithPopup,
  signInWithRedirect,
} from "firebase/auth";
import { addDoc, collection, getDocs, query, where } from "firebase/firestore";
import { useRouter } from "next/router";
import { auth, db } from "src/constants/firebaseConfig";
import styled from "styled-components";

function GithubLogin() {
  const router = useRouter();
  const githubProvider = new GithubAuthProvider();

  const signInWithGithub = async () => {
    try {
      githubProvider.setCustomParameters({
        prompt: "select_account",
      });
      const res = await signInWithPopup(auth, githubProvider);
      const user = res.user;
      console.log(user);
      router.push("/");

      await createUserIfNotExists(user);
    } catch (error) {
      if (error === "auth/account-exists-with-different-credential") {
        console.log("이미 이메일이 존재합니다?");
      } else {
        console.log(error);
      }
    }
  };

  const createUserIfNotExists = async (user: User) => {
    const q = query(collection(db, "users"), where("uid", "==", user.uid));
    const docs = await getDocs(q);
    if (docs.docs.length === 0) {
      await addDoc(collection(db, "users"), {
        uid: user.uid,
        name: user.displayName || user.email,
        authProvider: "github",
        email: user.email,
      });
    }
  };

  //   const signInwithPopup = async () => {
  //     githubProvider.setCustomParameters({
  //         prompt: "select_account",
  //     });
  //     signInWithPopup(auth, githubProvider)
  //       .then((res) => {
  //         const credential = GithubAuthProvider.credentialFromResult(res);
  //         const token = credential?.accessToken;

  //         // when login success, router main page
  //         router.push("/");

  //         // The Signed-in user Info.
  //         const user = res.user;
  //         // IdP data avaliable using getAdditionalUserInfo(res)
  //       })
  //       .catch((err) => {
  //         const errCode = err.code;
  //         const errMessage = err.message;
  //         const email = err.customData.email;
  //         const credential = GithubAuthProvider.credentialFromError(err);
  //       });
  //   }

  return (
    <StyledDiv>
      <button onClick={signInWithGithub}>
        <Image
          src="/images/LoginGithub.png"
          alt="구글 로그인"
          width={490}
          height={612}
        />
      </button>
    </StyledDiv>
  );
}

export default GithubLogin;

const StyledDiv = styled.div`
  color: black;
`;
