import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [isOpen, toggleSidebar] = useState(false);

  return (
    <div className="h-screen flex">
      {/* Sidebar */}
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
              class="flex justify-between items-center bg-gray-200 rounded-lg px-3 py-2 text-sm font-medium text-gray-200"
            >
              <span className="text-sm font-medium text-gray-900">All</span>
              <span className="text-xs font-semibold text-gray-700">36</span>
            </a>
            <a
              href="#"
              class="flex justify-between items-center rounded-lg px-3 py-2 text-sm font-medium bg-gradient-to-r from-purple-700 to-blue-500 text-gray-200"
              onClick={() => console.log("clicked")}
            >
              <span className="text-sm font-medium text-white ">Today</span>
              <span className="text-xs font-semibold text-white">36</span>
            </a>
            <a
              href="#"
              class="flex justify-between items-center rounded-lg px-3 py-2 text-sm font-medium text-gray-200"
            >
              <span className="text-sm font-medium text-gray-900">Sprint</span>
              <span className="text-xs font-semibold text-gray-700">36</span>
            </a>
          </div>

          <h2 className="mt-8 text-xs font-semibold text-gray-600 uppercase tracking-wide">
            Tags
          </h2>
          <div className="mt-2 -mx-3">
            <a
              href="#"
              class="flex justify-between items-center bg-gray-200 rounded-lg px-3 py-2 text-sm font-medium text-gray-200"
            >
              <span className="text-sm font-medium text-gray-900">All</span>
            </a>
            <a
              href="#"
              class="flex justify-between items-center rounded-lg px-3 py-2 text-sm font-medium bg-gradient-to-r from-purple-700 to-blue-500 text-gray-200"
              onClick={() => console.log("clicked")}
            >
              <span className="text-sm font-medium text-white ">Today</span>
            </a>
            <a
              href="#"
              class="flex justify-between items-center rounded-lg px-3 py-2 text-sm font-medium text-gray-200"
            >
              <span className="text-sm font-medium text-gray-900">Sprint</span>
            </a>
          </div>
        </nav>
      </div>

      <div className="flex flex-col min-w-0 bg-white text-gray-800 dark:bg-gray-800 dark:text-white">
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
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
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
        {/* Main Content */}
        <div className="flex-1 bg-gray-50 overflow-auto">
          <main className="p-3  h-full inline-flex space-x-2 overflow-hidden">
            {/* TODO */}
            <div className="flex flex-col w-80 bg-transparent rounded-md">
              <h3 className="px-3  pt-3 pb-1 text-md font-medium text-gray-700 leading-tight font-mono">
                Todo
              </h3>
              <div className="flex-1 min-h-0">
                <ul className="pt-1 pb-3 px-3">
                  <li className="mt-1">
                    <a
                      href="#"
                      className="block p-5 rounded-md bg-white shadow"
                    >
                      <div>
                        <div className="flex items-baseline justify-between">
                          <div className="px-3  py-1 bg-blue-200 rounded">
                            <span className="text-sm font-medium text-blue-500 leading-light">
                              DESIGN
                            </span>
                          </div>
                          <div className="flex items-center text-sm text-gray-400">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={1.5}
                              stroke="currentColor"
                              className="w-4 h-4"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
                              />
                            </svg>
                            <span className="ml-2">2</span>
                          </div>
                        </div>
                        <div>b</div>
                        <div>c</div>
                      </div>
                    </a>
                  </li>

                  <li className="mt-1">
                    <a
                      href="#"
                      className="block p-5 rounded-md bg-white shadow"
                    >
                      <div>
                        <div className="flex items-baseline justify-between">
                          <div className="px-3  py-1 bg-red-200 rounded">
                            <span className="text-sm font-medium text-blue-500 leading-light">
                              Bug
                            </span>
                          </div>
                          <div className="flex items-center text-sm text-gray-400">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={1.5}
                              stroke="currentColor"
                              className="w-4 h-4"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
                              />
                            </svg>
                            <span className="ml-2">2</span>
                          </div>
                        </div>
                        <div>b</div>
                        <div>c</div>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* In Progress */}
            <div className="flex flex-col w-80 bg-transparent rounded-md">
              <h3 className="px-3  pt-3 pb-1 text-md font-medium text-gray-700 leading-tight font-mono">
                In Progress
              </h3>
              <div className="flex-1 min-h-0 overflow-y-auto">
                <ul className="pt-1 pb-3 px-3">
                  <li className="mt-1">
                    <a
                      href="#"
                      className="block p-5 rounded-md bg-white shadow"
                    >
                      <div>
                        <div className="flex items-baseline justify-between">
                          <div className="px-3  py-1 bg-blue-200 rounded">
                            <span className="text-sm font-medium text-blue-500 leading-light">
                              DESIGN
                            </span>
                          </div>
                          <div className="flex items-center text-sm text-gray-400">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={1.5}
                              stroke="currentColor"
                              className="w-4 h-4"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
                              />
                            </svg>
                            <span className="ml-2">2</span>
                          </div>
                        </div>
                        <div>b</div>
                        <div>c</div>
                      </div>
                    </a>
                  </li>

                  <li className="mt-1">
                    <a
                      href="#"
                      className="block p-5 rounded-md bg-white shadow"
                    >
                      <div>
                        <div className="flex items-baseline justify-between">
                          <div className="px-3  py-1 bg-pink-200 rounded-">
                            <span className="text-sm font-medium text-blue-500 leading-light">
                              Research
                            </span>
                          </div>
                          <div className="flex items-center text-sm text-gray-400">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={1.5}
                              stroke="currentColor"
                              className="w-4 h-4"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
                              />
                            </svg>
                            <span className="ml-2">2</span>
                          </div>
                        </div>
                        <div>b</div>
                        <div>c</div>
                      </div>
                    </a>
                  </li>

                  <li className="mt-1">
                    <a
                      href="#"
                      className="block p-5 rounded-md bg-white shadow"
                    >
                      <div>
                        <div className="flex items-baseline justify-between">
                          <div className="px-3  py-1 bg-green-200 rounded-">
                            <span className="text-sm font-medium text-blue-500 leading-light">
                              New Feature
                            </span>
                          </div>
                          <div className="flex items-center text-sm text-gray-400">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={1.5}
                              stroke="currentColor"
                              className="w-4 h-4"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
                              />
                            </svg>
                            <span className="ml-2">2</span>
                          </div>
                        </div>
                        <div>b</div>
                        <div>c</div>
                      </div>
                    </a>
                  </li>

                  <li className="mt-1">
                    <a
                      href="#"
                      className="block p-5 rounded-md bg-white shadow"
                    >
                      <div>
                        <div className="flex items-baseline justify-between">
                          <div className="px-3  py-1 bg-blue-200 rounded">
                            <span className="text-sm font-medium text-blue-500 leading-light">
                              DESIGN
                            </span>
                          </div>
                          <div className="flex items-center text-sm text-gray-400">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={1.5}
                              stroke="currentColor"
                              className="w-4 h-4"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
                              />
                            </svg>
                            <span className="ml-2">2</span>
                          </div>
                        </div>
                        <div>b</div>
                        <div>c</div>
                      </div>
                    </a>
                  </li>

                  <li className="mt-1">
                    <a
                      href="#"
                      className="block p-5 rounded-md bg-white shadow"
                    >
                      <div>
                        <div className="flex items-baseline justify-between">
                          <div className="px-3  py-1 bg-blue-200 rounded">
                            <span className="text-sm font-medium text-blue-500 leading-light">
                              DESIGN
                            </span>
                          </div>
                          <div className="flex items-center text-sm text-gray-400">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={1.5}
                              stroke="currentColor"
                              className="w-4 h-4"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
                              />
                            </svg>
                            <span className="ml-2">2</span>
                          </div>
                        </div>
                        <div>b</div>
                        <div>c</div>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Testing */}
            <div className="flex flex-col w-80 bg-transparent rounded-md">
              <h3 className="px-3  pt-3 pb-1 text-md font-medium text-gray-700 leading-tight font-mono">
                Testing
              </h3>
              <div className="flex-1 min-h-0">
                <ul className="pt-1 pb-3 px-3">
                  <li className="mt-1">
                    <a
                      href="#"
                      className="block p-5 rounded-md bg-white shadow"
                    >
                      <div>
                        <div className="flex items-baseline justify-between">
                          <div className="px-3  py-1 bg-blue-200 rounded-">
                            <span className="text-sm font-medium text-blue-500 leading-light">
                              DESIGN
                            </span>
                          </div>
                          <div className="flex items-center text-sm text-gray-400">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={1.5}
                              stroke="currentColor"
                              className="w-4 h-4"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
                              />
                            </svg>
                            <span className="ml-2">2</span>
                          </div>
                        </div>
                        <div>b</div>
                        <div>c</div>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Done */}
            <div className="flex flex-col w-80 bg-transparent rounded-md">
              <h3 className="px-3  pt-3 pb-1 text-md font-medium text-gray-700 leading-tight font-mono">
                Done
              </h3>
              <div className="flex-1 min-h-0">
                <ul className="pt-1 pb-3 px-3">
                  <li className="mt-1">
                    <a
                      href="#"
                      className="block p-5 rounded-md bg-white shadow"
                    >
                      <div>
                        <div className="flex items-baseline justify-between">
                          <div className="px-3  py-1 bg-blue-200 rounded-">
                            <span className="text-sm font-medium text-blue-500 leading-light">
                              DESIGN
                            </span>
                          </div>
                          <div className="flex items-center text-sm text-gray-400">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={1.5}
                              stroke="currentColor"
                              className="w-4 h-4"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
                              />
                            </svg>
                            <span className="ml-2">2</span>
                          </div>
                        </div>
                        <div>b</div>
                        <div>c</div>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
