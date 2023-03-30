import React from "react";

const Topbar = ({ toggleSidebar }) => {
  return (
    <header className="flex flex-col px-6 border-b border-gray-200">
      <div className="flex justify-between items-center py-3">
        <div className="flex items-center py-3">
          {/* Hamburger */}
          <button
            className="text-gray-600 lg:hidden"
            onClick={() => toggleSidebar(true)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
          {/* Searchbar */}
          <div className="ml-4 lg:ml-0 relative w-64 ">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 text-gray-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
            </span>
            <input
              className="block w-full text-sm border border-gray-400 rounded-md py-2 pl-10 pr-4 placehoder-gray-400"
              placeholder="Search"
            />
          </div>
        </div>

        {/* Icons */}
        <div>
          <button className="w-6 h-6 text-gray-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
              />
            </svg>
          </button>
        </div>
      </div>
      {/* Header Bottom */}
      <div className="flex items-center justify-between py-2">
        <div className="sm:flex sm:items-center">
          <h2 className="text-lg font-medium text-gray-900">Assignees</h2>
          <div className="ml-6 flex items-center">
            <span className="-ml-2.5 border-2 border-white rounded-full">
              <img src="" alt="Av" />
            </span>
            <span className="-ml-2.5  border-2 border-white rounded-full">
              <img src="" alt="Av" />
            </span>
          </div>
        </div>
        <div className="flex items-center">
          <button className="pl-2 pr-4 py-2 rounded-md  text-sm font-medium text-white bg-gray-900 hover:bg-gray-800">
            Complete Sprint
          </button>
          <button className="ml-5 pl-2 pr-4 py-2 rounded-md flex items-center text-sm font-medium text-white bg-gradient-to-r from-purple-700 to-blue-500 hover:from-purple-600 hover:to-blue-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>

            <span>New Item</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Topbar;
