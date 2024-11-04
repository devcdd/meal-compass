import { PageLayout } from "../styles/Layout/index.css.ts";

const Layout = ({ children }) => {
  return <main className={PageLayout}>{children}</main>;
};

export default Layout;
