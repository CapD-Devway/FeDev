import React from "react";
import LoginLottie from "src/Components/Common/LoginLottie";
import animationData from "src/assets/lottieJSON/collabo.json";

function Signin() {
  return (
    <>
      <div>
        <LoginLottie lottieData={animationData} width={570} height={570} />
        <h1>Hi</h1>
      </div>
    </>
  );
}

export default Signin;
