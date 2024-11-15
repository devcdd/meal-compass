import { PageLayout } from "../styles/Layout/index.css.ts";
import Navbar from "../components/Navbar/Navbar.tsx";

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
      <main className={PageLayout}>
        <Navbar />
        {children}
      </main>
    </section>
  );
};

export default Layout;
