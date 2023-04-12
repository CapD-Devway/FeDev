import { GithubAuthProvider, signInWithPopup } from "firebase/auth";
import { useRouter } from "next/router";
import { auth } from "src/constants/firebaseConfig";
import styled from "styled-components";

function GithubLogin() {
  const router = useRouter();
  const githubProvider = new GithubAuthProvider();

  const signInwithPopup = async () => {
    signInWithPopup(auth, githubProvider)
      .then((res) => {
        githubProvider.setCustomParameters({
            prompt: "select_account",
        });
        const credential = GithubAuthProvider.credentialFromResult(res);
        const token = credential?.accessToken;

        // when login success, router main page
        router.push("/");

        // The Signed-in user Info.
        const user = res.user;
        // IdP data avaliable using getAdditionalUserInfo(res)
      })
      .catch((err) => {
        const errCode = err.code;
        const errMessage = err.message;
        const email = err.customData.email;
        const credential = GithubAuthProvider.credentialFromError(err);
      });
  };

  return (
    <StyledDiv>
      <h3>깃헙 로그인 테스트</h3>
      <button onClick={signInwithPopup}>로그인</button>
    </StyledDiv>
  );
}

export default GithubLogin;

const StyledDiv = styled.div`
  color: black;
`;
