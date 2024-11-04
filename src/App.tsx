import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Routes } from "./pages/Routes.tsx";
import Layout from "./pages/Layout.tsx";

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Layout>
        <Routes />
      </Layout>
    </QueryClientProvider>
  );
}

export default App;
