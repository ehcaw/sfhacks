interface ModuleProps {
  title: string;
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
        <div className="p-4 md:p-6 h-[70vh] sm:h-[65vh] bg-gray-50 border-y border-gray-200 flex flex-col overflow-x-hidden overflow-y-auto dark:bg-slate-800 dark:border-gray-700">
          <div className="text-center">
            <h2 className="text-lg sm:text-xl font-semibold text-gray-800 dark:text-gray-200">
              Before you continue to use Preline
            </h2>
          </div>

          <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">
            We use cookies and data to
          </p>

          <div className="mt-4 space-y-5">
            <div className="flex gap-x-4">
              <svg
                className="flex-shrink-0 mt-1 size-4 text-gray-600 dark:text-gray-400"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="m15 5 4 4" />
                <path d="M13 7 8.7 2.7a2.41 2.41 0 0 0-3.4 0L2.7 5.3a2.41 2.41 0 0 0 0 3.4L7 13" />
                <path d="m8 6 2-2" />
                <path d="m2 22 5.5-1.5L21.17 6.83a2.82 2.82 0 0 0-4-4L3.5 16.5Z" />
                <path d="m18 16 2-2" />
                <path d="m17 11 4.3 4.3c.94.94.94 2.46 0 3.4l-2.6 2.6c-.94.94-2.46.94-3.4 0L11 17" />
              </svg>
              <div className="grow">
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Deliver and maintain Preline services
                </p>
              </div>
            </div>
            <div className="flex gap-x-4">
              <svg
                className="flex-shrink-0 mt-1 size-4 text-gray-600 dark:text-gray-400"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
                <path d="M12 9v4" />
                <path d="M12 17h.01" />
              </svg>
              <div className="grow">
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Track outages and protect against spam, fraud and abuse
                </p>
              </div>
            </div>
            <div className="flex gap-x-4">
              <svg
                className="flex-shrink-0 mt-1 size-4 text-gray-600 dark:text-gray-400"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <line x1="18" x2="18" y1="20" y2="10" />
                <line x1="12" x2="12" y1="20" y2="4" />
                <line x1="6" x2="6" y1="20" y2="14" />
              </svg>
              <div className="grow">
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Measure audience engagement and site statistics to understand
                  how our services are used and enhance the quality of those
                  services
                </p>
              </div>
            </div>
          </div>

          <p className="mt-8 text-sm text-gray-600 dark:text-gray-400">
            If you choose to 'Accept all', we will also use cookies and data to
          </p>

          <div className="mt-4 space-y-5">
            <div className="flex gap-x-4">
              <svg
                className="flex-shrink-0 mt-1 size-4 text-gray-600 dark:text-gray-400"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="m15 5 4 4" />
                <path d="M13 7 8.7 2.7a2.41 2.41 0 0 0-3.4 0L2.7 5.3a2.41 2.41 0 0 0 0 3.4L7 13" />
                <path d="m8 6 2-2" />
                <path d="m2 22 5.5-1.5L21.17 6.83a2.82 2.82 0 0 0-4-4L3.5 16.5Z" />
                <path d="m18 16 2-2" />
                <path d="m17 11 4.3 4.3c.94.94.94 2.46 0 3.4l-2.6 2.6c-.94.94-2.46.94-3.4 0L11 17" />
              </svg>
              <div className="grow">
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Develop and improve new services
                </p>
              </div>
            </div>
            <div className="flex gap-x-4">
              <svg
                className="flex-shrink-0 mt-1 size-4 text-gray-600 dark:text-gray-400"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <line x1="18" x2="18" y1="20" y2="10" />
                <line x1="12" x2="12" y1="20" y2="4" />
                <line x1="6" x2="6" y1="20" y2="14" />
              </svg>
              <div className="grow">
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Deliver and measure the effectiveness of ads
                </p>
              </div>
            </div>
            <div className="flex gap-x-4">
              <svg
                className="flex-shrink-0 mt-1 size-4 text-gray-600 dark:text-gray-400"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
                <path d="M5 3v4" />
                <path d="M19 17v4" />
                <path d="M3 5h4" />
                <path d="M17 19h4" />
              </svg>
              <div className="grow">
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Show personalised content, depending on your settings
                </p>
              </div>
            </div>
            <div className="flex gap-x-4">
              <svg
                className="flex-shrink-0 mt-1 size-4 text-gray-600 dark:text-gray-400"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2" />
                <path d="M18 14h-8" />
                <path d="M15 18h-5" />
                <path d="M10 6h8v4h-8V6Z" />
              </svg>
              <div className="grow">
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Show personalised ads, depending on your settings
                </p>
              </div>
            </div>
          </div>

          <p className="mt-8 text-sm text-gray-600 dark:text-gray-400">
            If you choose to 'Reject all', we will not use cookies for these
            additional purposes.
          </p>

          <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">
            Non-personalised content is influenced by things like the content
            that you’re currently viewing, activity in your active Search
            session, and your location. Non-personalised ads are influenced by
            the content that you’re currently viewing and your general location.
          </p>
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
