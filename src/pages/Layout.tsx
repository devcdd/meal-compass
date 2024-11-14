import { PageLayout } from "../styles/Layout/index.css.ts";

const Layout = ({ children }) => {
  return (
    <section
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <main className={PageLayout}>{children}</main>
    </section>
  );
};

export default Layout;
