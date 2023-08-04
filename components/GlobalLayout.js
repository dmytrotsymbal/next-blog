import Header from "@/components/Header";
import Footer from "./Footer";

const GlobalLayout = ({ children }) => {
  return (
    <>
      <Header />
      <div className="container">{children}</div>
      <Footer />
    </>
  );
};

export default GlobalLayout;
