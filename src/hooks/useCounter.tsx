import { useCallback, useState } from "react";

// *** カスタムフック（カウントアップ） *** //
export const useCounter = () => {
  const [count, setCount] = useState(1);
  const [isShow, setIsShow] = useState(true);

  // カウントアップの制御 //
  const handleClick = useCallback(() => {
    if (count < 10) {
      setCount((prevCount) => prevCount + 1);
    }
  }, [count]);

  const handleDisplay = useCallback(() => {
    setIsShow((prevIsShow) => !prevIsShow);
  }, []);

  return { count, isShow, handleClick, handleDisplay };
};
