import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
  return (
    <div className="grid grid-cols-10 grid-rows-2 min-h-[100vh] ">
      <div className="col-span-2 row-span-2 relative">
        <Sidebar />
      </div>
      <div className="col-span-8 row-span-2 flex flex-col">
        <div className="h-[10vh] min-h-[60px]">
          <Header />
        </div>
        <div className="h-[90vh] px-8 py-4 overflow-y-scroll">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
