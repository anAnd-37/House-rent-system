import React, { Children } from "react";
import Footer from "./Footer";
import Header from "./Header";

export const Layout = ({ children }) => {
  return (
    <>
      <Header></Header>
      <main style={{ minHeight: "80vh " }}>{children}</main>
      <Footer></Footer>
    </>
  );
};

export default Layout;
