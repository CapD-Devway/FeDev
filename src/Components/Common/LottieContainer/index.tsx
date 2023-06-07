import Lottie, { Options } from "react-lottie";

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
      <div>
        <Lottie options={lottieOptions} isClickToPauseDisabled />
      </div>
    </>
  );
}

export default LottieContainer;
