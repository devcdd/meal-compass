import { FC } from "react";

const ScrollPrompt: FC = () => {
  return (
    <div
      style={{
        position: "fixed",
        bottom: 20,
        width: "100%",
        textAlign: "center",
      }}
    >
      아래로 스크롤 하세요!
    </div>
  );
};
export default ScrollPrompt;
