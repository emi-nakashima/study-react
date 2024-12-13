import { useEffect } from "react";

// *** カスタムフック（バックカラー） *** //
export const useBgLightBlue = () => {
  // バックカラーの変更 //
  useEffect(() => {
    // マウント時の処理
    document.body.style.backgroundColor = "lightblue";
    return () => {
      // アンマウント時の処理
      document.body.style.backgroundColor = "";
    };
  }, []);
};
