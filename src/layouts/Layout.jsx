import Nb from "../components/Navbar";
import Footer from "../components/Footer";

// eslint-disable-next-line react/prop-types
const Layout = ({ children }) => {
  return (
    <div>
      <Nb />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
