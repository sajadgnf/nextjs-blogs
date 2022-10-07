import React from "react";
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children }: JSX.ElementChildrenAttribute) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
