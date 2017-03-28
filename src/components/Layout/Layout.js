import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children, match }) => (
  <div>
    <Header match={match} />
    <main>
      {children}
    </main>
    <Footer match={match} />
  </div>
);

export default Layout;
