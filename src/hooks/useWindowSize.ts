// 브라우저 창의 크기를 동적으로 가져오기 위한 커스텀 훅 'useWindowSize' 함수 정의

import { useEffect, useState } from "react";

interface ISize {
  width: number | undefined;
  height: number | undefined;
}

function useWindowSize(): ISize {
  const [windowSize, setWindowSize] = useState<ISize>({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
}

export default useWindowSize;
