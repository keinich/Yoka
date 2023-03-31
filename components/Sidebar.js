import { LocalDataService } from "@/services/LocalDataService";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

const Sidebar = ({ isOpen, toggleSidebar, page }) => {
  const dataService = useMemo(() => new LocalDataService(), []);

  const [projects, setProjects] = useState([]);
  useEffect(() => {
    dataService.getProjects().then((ps) => {
      setProjects(ps);
    });
  }, [dataService]);

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
          {page == "home" ? (
            <Link
              href="/"
              className="flex justify-between items-center rounded-lg px-3 py-2 text-sm text-white font-medium bg-gradient-to-r from-purple-700 to-blue-500"
              onClick={() => console.log("clicked")}
            >
              <span className="text-sm font-medium text-white ">Home</span>
            </Link>
          ) : (
            <Link
              href="/"
              className="flex justify-between items-center rounded-lg px-3 py-2 text-sm font-medium "
              onClick={() => console.log("clicked")}
            >
              <span className="text-sm font-medium">Home</span>
            </Link>
          )}
          {page == "my-tasks" ? (
            <Link
              href="/my-tasks"
              className="flex justify-between items-center rounded-lg px-3 py-2 text-sm text-white font-medium bg-gradient-to-r from-purple-700 to-blue-500"
              onClick={() => console.log("clicked")}
            >
              <span className="text-sm font-medium text-white ">My Tasks</span>
            </Link>
          ) : (
            <Link
              href="/my-tasks"
              className="flex justify-between items-center rounded-lg px-3 py-2 text-sm font-medium "
              onClick={() => console.log("clicked")}
            >
              <span className="text-sm font-medium ">My Tasks</span>
            </Link>
          )}
          {page == "reports" ? (
            <Link
              href="/reports"
              className="flex justify-between items-center rounded-lg px-3 py-2 text-sm text-white font-medium bg-gradient-to-r from-purple-700 to-blue-500"
              onClick={() => console.log("clicked")}
            >
              <span className="text-sm font-medium text-white ">Reports</span>
            </Link>
          ) : (
            <Link
              href="/reports"
              className="flex justify-between items-center rounded-lg px-3 py-2 text-sm font-medium "
              onClick={() => console.log("clicked")}
            >
              <span className="text-sm font-medium ">Reports</span>
            </Link>
          )}
        </div>

        <h2 className="mt-8 text-xs font-semibold text-gray-600 uppercase tracking-wide">
          Projects
        </h2>
        <div className="mt-2 -mx-3">
          {projects.map((p, index) => {
            return (
              <div key={index}>
                {page == `projects.${p.id}` ? (
                  <Link
                    href="/reports"
                    className="flex justify-between items-center rounded-lg px-3 py-2 text-sm text-white font-medium bg-gradient-to-r from-purple-700 to-blue-500"
                    onClick={() => console.log("clicked")}
                  >
                    <span className="text-sm font-medium text-white ">
                      {p.name}
                    </span>
                  </Link>
                ) : (
                  <Link
                    href={`/projects/${p.id}`}
                    className="flex justify-between items-center rounded-lg px-3 py-2 text-sm font-medium "
                    onClick={() => console.log("clicked")}
                  >
                    <span className="text-sm font-medium ">{p.name}</span>
                  </Link>
                )}
              </div>
            );
          })}
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;
