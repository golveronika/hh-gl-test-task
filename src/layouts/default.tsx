import { PropsWithChildren, useEffect, useRef } from "react";
import Footer from "../components/Footer";

const LayoutDefault = ({ children }: PropsWithChildren) => {


  return (
    <div className="layout">
      {children}
      <Footer />
    </div>
  );
};

export default LayoutDefault;
