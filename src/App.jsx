import { BrowserRouter } from "react-router";
import { CartContextProvider } from "./store";
import { AppRoutes } from "./routes";


function App() {
  return (
    <BrowserRouter>
    <CartContextProvider>
      <AppRoutes/>
      {/* <Layout>
        <Home />
      </Layout> */}
     </CartContextProvider>
    </BrowserRouter>
  );
}

export default App;
