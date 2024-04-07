import React from "react";
import Home from "./page/Pipeline";

interface ModuleProps {
  title: string;
  numElements: number;
}

const ModulePopup = (props: ModuleProps) => {
  return (
    <div className="fixed inset-0 z-[60] sm:max-w-4xl w-full mx-auto p-6">
      <div className="bg-white rounded-xl shadow-2xl dark:bg-slate-900 dark:shadow-black/[.7]">
        <div className="p-4 md:px-6">
          <div className="flex justify-between items-center">
            <svg
              className="size-8"
              width="26"
              height="26"
              viewBox="0 0 26 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 26V13C1 6.37258 6.37258 1 13 1C19.6274 1 25 6.37258 25 13C25 19.6274 19.6274 25 13 25H12"
                stroke="currentColor"
                stroke-width="2"
                className="stroke-blue-600 dark:stroke-white"
              />
              <path
                d="M5 26V13.16C5 8.65336 8.58172 5 13 5C17.4183 5 21 8.65336 21 13.16C21 17.6666 17.4183 21.32 13 21.32H12"
                stroke="currentColor"
                stroke-width="2"
                className="stroke-blue-600 dark:stroke-white"
              />
              <circle
                cx="13"
                cy="13.0214"
                r="5"
                fill="currentColor"
                className="fill-blue-600 dark:fill-white"
              />
            </svg>

            <select className="py-2 ps-3 pe-8 block cursor-pointer border-gray-200 rounded-lg text-sm hover:bg-gray-50 focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400">
              <option selected>English (US)</option>
              <option>Deutsch</option>
              <option>Dansk</option>
              <option>Italiano</option>
              <option>中文 (繁體)</option>
            </select>
          </div>
        </div>
        <div className="p-4 md:px-6">
          <div className="grid justify-center gap-x-3">
            <div className="flex gap-x-3">
              <button
                type="button"
                className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800"
              >
                Reject all
              </button>
              <button
                type="button"
                className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
              >
                Allow all
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModulePopup;
