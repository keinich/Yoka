import { useRouter } from "next/router";
import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

const Layout = ({ children, page }) => {
  const router = useRouter();
  const { projectId } = router.query;
  if (projectId) {
    page += `.${projectId}`;
  }
  console.log("page", page);
  const [isOpen, toggleSidebar] = useState(false);
  return (
    <div className="h-screen flex overflow-hidden">
      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} page={page}></Sidebar>
      <div className="w-screen flex flex-col min-w-0 bg-white text-gray-800 dark:bg-gray-800 dark:text-white overflow-hidden">
        <Topbar toggleSidebar={toggleSidebar} ></Topbar>
        {children}
      </div>
    </div>
  );
};

export default Layout;
