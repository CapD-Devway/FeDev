import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/router";
import { useContext, useState } from "react";
import { AuthContext } from "src/context/authContenxt";

function Signup() {
  const router = useRouter();
  const userInfo = useContext(AuthContext);

  const [registerEmail, setRegisterEmail] = useState<string>("");
  const [regitserPassword, setRegisterPassword] = useState<string>("");
  const [errorMsg, setErrorMsg] = useState<string>(" ");


  return;
}

export default Signup;
