import { useEffect, useState } from "react";

const useScreenWidth = () => {
  const [screenWith, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return screenWith;
};

export default useScreenWidth;
