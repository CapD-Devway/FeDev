import { createUserWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/router";
import { useCallback, useContext, useState } from "react";
import { AuthContext } from "src/context/authContenxt";
import { auth } from "src/constants/firebaseConfig";
import CommonInputForm from "src/Components/CommonInputForm";
import CommonBtn from "src/Components/CommonBtn";

function Signup() {
  const router = useRouter();
  const userInfo = useContext(AuthContext);

  const [registerEmail, setRegisterEmail] = useState<string>("");
  const [regitserPassword, setRegisterPassword] = useState<string>("");
  const [registerName, setRegisterName] = useState<string | null>(null);

  // 이메일 입력 함수
  const onRegisterEmail = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      e.preventDefault();
      setRegisterEmail(e.target.value);
    },
    []
  );
  // 비밀번호 입력 함수
  const onRegisterPassword = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      e.preventDefault();
      setRegisterPassword(e.target.value);
    },
    []
  );
  // 닉네임 입력 함수
  const onRegisterName = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      e.preventDefault();
      setRegisterName(e.target.value);
    },
    []
  );

  // firebase에서 제공하는 회원가입 함수 사용
  const onSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();

      createUserWithEmailAndPassword(auth, registerEmail, regitserPassword)
        .then((userCredential) => {
          // firebase에서 반환된 user 객체에서 displayName 속성 값을 가져옴
          const displayNameFromFirebase = userCredential.user.displayName;
          // displayNameFromFirebase가 null 또는 undefined인 경우, 빈 문자열로 설정
          setRegisterName(displayNameFromFirebase || "");
          // 회원가입 성공시 로그인 페이지 이동
          router.push("/Signin");
        })
        .catch((err) => {
          if (err.code === "auth/weak-password") {
            alert("비밀번호는 6글자 이상이어야 합니다.");
          } else if (err.code === "auth/invalid-email") {
            alert("이메일 형식을 지켜주세요");
          } else if (err.code === "auth/email-already-in-use") {
            alert("이미 가입되어 있는 계정입니다.");
          } else {
            alert("로그인에 실패 하였습니다.");
          }
        });
    },
    [registerEmail, registerName, regitserPassword]
  );

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div>
          <CommonInputForm
            type="email"
            id="Email"
            onChange={onRegisterEmail}
            value={registerEmail}
            placeholder="Email"
          />
        </div>
        <div>
          <CommonInputForm
            type="password"
            id="Password"
            onChange={onRegisterPassword}
            value={regitserPassword}
            placeholder="Password"
          />
        </div>
        <div>
          <CommonInputForm
            type="text"
            id="Name"
            onChange={onRegisterName}
            value={registerName || ""}
            placeholder="Name"
          />
        </div>
        <CommonBtn type="submit" name="회원가입" />
      </form>
    </div>
  );
}

export default Signup;
