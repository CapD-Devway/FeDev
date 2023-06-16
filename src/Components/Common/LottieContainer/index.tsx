import Lottie, { Options } from "react-lottie";
import styled from "styled-components";

interface ILoadingProps {
  lottieData: object;
}

function LottieContainer({ lottieData }: ILoadingProps) {
  const lottieOptions: Options = {
    animationData: lottieData,
    loop: true,
    autoplay: true,
  };
  return (
    <>
      <StyledDiv>
        <Lottie options={lottieOptions} isClickToPauseDisabled />
      </StyledDiv>
    </>
  );
}

export default LottieContainer;

const StyledDiv = styled.div`
  width: 200px;
  height: 200px;
  margin: 0 auto;
`;
