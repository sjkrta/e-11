import Home from "./components/Home";
import Layout from "./layouts/Layout";
import { CartContextProvider } from "./store";

function App() {
  return (
    <CartContextProvider>
      <Layout>
        <Home />
      </Layout>
    // </CartContextProvider>
  );
}

export default App;
