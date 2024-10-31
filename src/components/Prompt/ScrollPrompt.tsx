export interface ScrollPromptProps {
  visible: boolean;
}

const ScrollPrompt = (props: ScrollPromptProps) => {
  return (
    <div
      style={{
        opacity: props.visible ? 1 : 0,
        transform: props.visible ? "translateY(0)" : "translateY(20px)",
        transition: "opacity 2s ease, transform 2s ease",
        position: "fixed",
        bottom: 20,
        width: "100%",
        textAlign: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          gap: "10px",
          justifyContent: "center",
          marginBottom: "10px",
          fontSize: "16px",
          animation: "bounce 1s infinite",
        }}
      >
        <span>아래로 스크롤 하세요 !</span>
      </div>
      <style>
        {`
          @keyframes bounce {
            0%, 100% {
              transform: translateY(0);
            }
            50% {
              transform: translateY(5px);
            }
          }
        `}
      </style>
    </div>
  );
};

export default ScrollPrompt;
