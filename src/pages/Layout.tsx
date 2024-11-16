import { pageLayout } from "../styles/Layout/index.css.ts";
import Navbar from "../components/Navbar/Navbar.tsx";
import { ReactNode } from "react";

interface LayoutProps {
  children?: ReactNode;
  header?: boolean;
}

const Layout = (props: LayoutProps) => {
  return (
    <section
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <main className={pageLayout}>
        {props.header !== false && <Navbar />}
        {props.children}
      </main>
    </section>
  );
};

export default Layout;
