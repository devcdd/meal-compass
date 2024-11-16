import { style } from "@vanilla-extract/css";

export const hashtag = style({
  backgroundColor: "#0047DE",
  borderRadius: "4px",
  padding: "4px 6px",
  fontSize: "0.9rem",
  marginRight: "8px",
  wordBreak: "keep-all",
  overflowWrap: "normal",
  whiteSpace: "nowrap",
  marginBottom: "4px",
  display: "inline-block", // 인라인-블록으로 설정
  lineHeight: "1", // 줄 높이를 명시적으로 설정
});
