import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
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
  const [registerName, setRegisterName] = useState<string>("");
  const [errorMsg, setErrorMsg] = useState<string>(" ");
  const [isCreate, setIsCreate] = useState<boolean>(false);

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
  // 이름 입력 함수
  const onRegisterName = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      e.preventDefault();
      setRegisterName(e.target.value);
    },
    []
  );
  // 회원가입 버튼 클릭 함수
  const onClickCreate = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      setIsCreate((pre) => !pre);
    },
    []
  );
  // firebase에서 제공하는 회원가입 함수 사용
  const onSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();

    // 회원 가입일 경우
    {
      await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        regitserPassword
      )
        .then(() => {
          alert("회원가입 성공");
        })
        .catch((e) => {
          alert(e);
        });
    }
  }, []);

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
            value={registerName}
            placeholder="Name"
          />
        </div>
        <CommonBtn type="submit" name="회원가입" />
      </form>
    </div>
  );
}

export default Signup;
