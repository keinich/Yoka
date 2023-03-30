import Image from "next/image";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <div
      className={`fixed lg:static inset-y-0 left-0 w-64 bg-white px-8 py-4 border-r overflow-auto z-30 lg:translate-x-0 transform ${
        isOpen
          ? "translate-x-0 ease-out transition-medium"
          : "-translate-x-full ease-in transition-medium"
      }`}
    >
      <div className="flex justify-between items-center">
        <Image
          width={12}
          height={12}
          src="images/logo-black.svg"
          alt="Logo"
          className="w-9 h-9"
        />
        <button
          className="text-gray-700 lg:hidden"
          onClick={() => toggleSidebar(false)}
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
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
      <nav className="mt-8">
        <h2 className="text-xs font-semibold text-gray-600 uppercase tracking-wide">
          Scrumboard
        </h2>
        <div className="mt-2 -mx-3">
          <a
            href="#"
            className="flex justify-between items-center rounded-lg px-3 py-2 text-sm font-medium text-gray-200"
          >
            <span className="text-sm font-medium text-gray-900">Home</span>
          </a>
          <a
            href="#"
            className="flex justify-between items-center rounded-lg px-3 py-2 text-sm font-medium bg-gradient-to-r from-purple-700 to-blue-500 text-gray-200"
            onClick={() => console.log("clicked")}
          >
            <span className="text-sm font-medium text-white ">My Tasks</span>
            <span className="text-xs font-semibold text-white">36</span>
          </a>
          <a
            href="#"
            className="flex justify-between items-center rounded-lg px-3 py-2 text-sm font-medium text-gray-200"
          >
            <span className="text-sm font-medium text-gray-900">Reports</span>
            <span className="text-xs font-semibold text-gray-700">12</span>
          </a>
        </div>

        <h2 className="mt-8 text-xs font-semibold text-gray-600 uppercase tracking-wide">
          Projects
        </h2>
        <div className="mt-2 -mx-3">
          <a
            href="#"
            className="flex justify-between items-centerrounded-lg px-3 py-2 text-sm font-medium text-gray-200"
          >
            <span className="text-sm font-medium text-gray-900">All</span>
          </a>
          <a
            href="#"
            className="flex justify-between items-center rounded-lg px-3 py-2 text-sm font-medium  text-gray-200"
            onClick={() => console.log("clicked")}
          >
            <span className="text-sm font-medium text-gray-900">Today</span>
          </a>
          <a
            href="#"
            className="flex justify-between items-center rounded-lg px-3 py-2 text-sm font-medium text-gray-200"
          >
            <span className="text-sm font-medium text-gray-900">Sprint</span>
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;
