import { Auth, sendPasswordResetEmail } from "firebase/auth";
import React, { useCallback, useState } from "react";
import { auth } from "src/constants/firebaseConfig";
import CommonBtn from "src/Components/CommonBtn";
import CommonInputForm from "src/Components/CommonInputForm";


function ForgotPassword() {
  const [registeredEmail, setRegisteredEmail] = useState<string>("");

  const onRegisterEmail = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      e.preventDefault();
      setRegisteredEmail(e.target.value);
    },
    []
  );

  const onSubmit = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    sendPasswordResetEmail(auth, registeredEmail)
      .then(() => {
        alert("이메일을 확인해 주세요.");
      })
      .catch(() => {
        alert("등록되지 않은 이메일입니다.");
      });
  }, [auth, registeredEmail]);

  return (
    <form onSubmit={onSubmit}>
      <CommonInputForm
        type="email"
        id="Email"
        onChange={onRegisterEmail}
        value={registeredEmail}
        placeholder="Email"
      />
      <CommonBtn type="submit" name="이메일 인증 발송" />
    </form>
  );
}

export default ForgotPassword;
