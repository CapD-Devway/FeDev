import React from "react";
import Lottie, { Options } from "react-lottie";
import styled from "styled-components";

interface ILoginlottieProps {
  lottieData: object;
  width?: number;
  height?: number;
}

function LoginLottie({ width, height, lottieData }: ILoginlottieProps) {
  const defaultOption: Options = {
    animationData: lottieData,
    loop: true,
    autoplay: true,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <StyledWrapper>
      <Lottie
        options={defaultOption}
        width={width}
        height={height}
        isClickToPauseDisabled
      />
      ;
    </StyledWrapper>
  );
}

export default LoginLottie;

const StyledWrapper = styled.div`
  width: 100%;
`;
