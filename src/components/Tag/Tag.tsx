import { hashtag } from "./index.css.ts";

interface TagProps {
  text: string;
}

const Tag = (props: TagProps) => {
  return (
    <span className={hashtag}>
      <span style={{ marginRight: "2px" }}>#</span>
      <span>{props.text}</span>
    </span>
  );
};

export default Tag;
