import { useRouter } from "next/router";
import { useEffect, useMemo } from "react";

// *** カスタムフック（バックカラー） *** //
export const useBgColor = () => {
  const router = useRouter();

  console.log(router);

  const bgColor = useMemo(() => {
    switch (router.pathname) {
      case "/": {
        return "lightblue";
      }
      case "/about": {
        return "beige";
      }
      default: {
        return "";
      }
    }
    // return router.pathname === "/" ? "lightblue" : "beige";
  }, [router.pathname]);

  // バックカラーの変更 //
  useEffect(() => {
    // マウント時の処理
    document.body.style.backgroundColor = bgColor;
    return () => {
      // アンマウント時の処理
      document.body.style.backgroundColor = "";
    };
  }, [bgColor]);
};
