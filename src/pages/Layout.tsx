import { pageLayout, pageLayoutHeight } from "../styles/Layout/index.css.ts";
import Navbar from "../components/Navbar/Navbar.tsx";
import { CSSProperties, ReactNode } from "react";
import { assignInlineVars } from "@vanilla-extract/dynamic";

interface LayoutProps {
  children?: ReactNode;
  header?: boolean;
  scrollable?: boolean;
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
      <main
        className={pageLayout}
        style={
          assignInlineVars({
            [pageLayoutHeight]: props.scrollable ? "auto" : "100vh",
          }) as CSSProperties
        }
      >
        {props.header !== false && <Navbar />}
        {props.children}
      </main>
    </section>
  );
};

export default Layout;
