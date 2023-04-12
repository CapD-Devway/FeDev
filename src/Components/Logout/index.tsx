import { error } from "console";
import { signOut } from "firebase/auth";
import { useRouter } from "next/router";
import { auth } from "src/constants/firebaseConfig";
import styled from "styled-components";

function Logout() {
  const router = useRouter();
  const logOut = async () => {
    await signOut(auth)
      .then(() => {
        alert("로그아웃 완료");
        router.push("/Signin");
      })
      .catch((error) => {});
  };
  return (
    <StyledDiv>
      <button onClick={logOut}>로그아웃 하기</button>;
    </StyledDiv>
  );
}

export default Logout;

const StyledDiv = styled.div`
  color: black;
`;
