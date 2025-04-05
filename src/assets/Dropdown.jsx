import { Menu, Transition } from "@headlessui/react";
import { ChevronDown } from "lucide-react";
import { Fragment } from "react";

export default function ClassyDropdown({isScreenSupported}) {
  return (
    <Menu as="div" className="relative inline-block text-right">
      <Menu.Button className="inline-flex justify-center items-center hover:scale-x-105 gap-2 rounded-3xl bg-black text-white px-4 py-2 text-sm font-medium shadow-md hover:bg-gray-800 focus:outline-none transition-all">
        Skills 
        <ChevronDown className="w-4 h-4" />
      </Menu.Button>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-200"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Menu.Items className={`absolute  z-10  ${isScreenSupported ? (`ml-10 origin-bottom w-[50vw] left-full top-0`):(`w-[30vw] min-w-52 -right-12 top-12`)}  rounded-xl bg-white dark:bg-zinc-900 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none`}>
          <div className={`grid gap-3 p-4 ${isScreenSupported ? (`grid-cols-3 `) : (`grid-cols-2 w-full `)}`}>
            <Menu.Item>
              <button className="min-w-20 rounded-md px-4 py-2 text-sm text-white bg-zinc-800 hover:bg-zinc-700  dark:text-gray-900 dark:bg-gray-50 dark:hover:bg-gray-100">
                React.js
              </button>
            </Menu.Item>
            <Menu.Item>
              <button className="w-full rounded-md px-4 py-2 text-sm text-white bg-zinc-800 hover:bg-zinc-700  dark:text-gray-900 dark:bg-gray-50 dark:hover:bg-gray-100">
                Next.js
              </button>
            </Menu.Item>
            <Menu.Item>
              <button className="w-full rounded-md px-4 py-2 text-sm text-white bg-zinc-800 hover:bg-zinc-700  dark:text-gray-900 dark:bg-gray-50 dark:hover:bg-gray-100">
                JavaScript
              </button>
            </Menu.Item>
            <Menu.Item>
              <button className="w-full rounded-md px-4 py-2 text-sm text-white bg-zinc-800 hover:bg-zinc-700  dark:text-gray-900 dark:bg-gray-50 dark:hover:bg-gray-100">
              Node.js
              </button>
            </Menu.Item>
            <Menu.Item>
              <button className="w-full rounded-md px-4 py-2 text-sm text-white bg-zinc-800 hover:bg-zinc-700  dark:text-gray-900 dark:bg-gray-50 dark:hover:bg-gray-100">
                GOlang
              </button>
            </Menu.Item>
            <Menu.Item>
              <button className="w-full rounded-md px-4 py-2 text-sm text-white bg-zinc-800 hover:bg-zinc-700  dark:text-gray-900 dark:bg-gray-50 dark:hover:bg-gray-100">
                MongoDB
              </button>
            </Menu.Item>
           
            <Menu.Item>
              <button className="w-full rounded-md px-4 py-2 text-sm text-white bg-zinc-800 hover:bg-zinc-700  dark:text-gray-900 dark:bg-gray-50 dark:hover:bg-gray-100">
                Tailwind
              </button>
            </Menu.Item>
            <Menu.Item>
              <button className="w-full rounded-md px-4 py-2 text-sm text-white bg-zinc-800 hover:bg-zinc-700  dark:text-gray-900 dark:bg-gray-50 dark:hover:bg-gray-100">
              HTML
              </button>
            </Menu.Item>
            <Menu.Item>
              <button className="w-full rounded-md px-4 py-2 text-sm text-white bg-zinc-800 hover:bg-zinc-700  dark:text-gray-900 dark:bg-gray-50 dark:hover:bg-gray-100">
                Express
              </button>
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
