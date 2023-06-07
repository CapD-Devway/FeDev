import loadingLottie from "src/assets/lottieJSON/loading.json"
import LottieContainer from "../LottieContainer";

function Loading() {

  return (
    <>
      <div>
        <LottieContainer lottieData={loadingLottie} />
      </div>
    </>
  );
}

export default Loading;
