import { useState } from "react";

export const useRoulette = () => {
  const [isClicked, setIsClicked] = useState<boolean>(false);

  const handleSpin = () => {
    setIsClicked(true);
    setTimeout(() => {
      setIsClicked(false);
    }, 1);
  };

  return { isClicked, handleSpin };
};
