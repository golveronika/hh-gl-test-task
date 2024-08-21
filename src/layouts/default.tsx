import { PropsWithChildren } from "react";
import Footer from "../components/Footer";
// import SmoothScrollProvider from "./../providers/smoothScroll";

const LayoutDefault = ({ children }: PropsWithChildren) => {
  return (
    // <SmoothScrollProvider>
    <div className="layout">
      {children}
      <Footer />
    </div>
    // </SmoothScrollProvider>
  );
};

export default LayoutDefault;
