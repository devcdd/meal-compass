import { IconProps } from "../../types";

const ListIcon = (props: IconProps) => {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
      <path d="M95,42H5a2,2,0,0,1,0-4H95a2,2,0,0,1,0,4Z" />
      <path d="M95,22H5a2,2,0,0,1,0-4H95a2,2,0,0,1,0,4Z" />
      <path d="M95,62H5a2,2,0,0,1,0-4H95a2,2,0,0,1,0,4Z" />
      <path d="M95,82H5a2,2,0,0,1,0-4H95a2,2,0,0,1,0,4Z" />
    </svg>
  );
};

export default ListIcon;
