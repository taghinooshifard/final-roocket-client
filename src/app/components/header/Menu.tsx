import Link from "next/link";

interface Props {
  showTopMenu: boolean;
}
const menuList = [
  { name: "Home", address: "/" },
  { name: "Contact", address: "/contact" },
  { name: "About", address: "/about" },
];
export default function Menu(params: Props) {
  return (
    <nav
      className={` ${
        params.showTopMenu &&
        `fixed top-0 z-50 bg-red-500 shadow-md px-20 opacity-95`
      } flex items-center justify-between w-full mx-auto text-white dark:bg-gray-700`}
    >
      <ul className="flex flex-row font-medium mt-0 space-x-8 p-4 rtl:space-x-reverse text-sm ">
        {menuList.map((value, index) => {
          return (
            <li key={index}>
              <Link
                href={value.address}
                className=" dark:text-white hover:bg-red-400 p-2 rounded-md"
                aria-current="page"
              >
                {value.name}
              </Link>
            </li>
          );
        })}
      </ul>
      <div className="relative px-4">
        <div className="absolute inset-y-0 start-4 flex items-center ps-3 pointer-events-none">
          <svg
            className="w-4 h-4 text-white dark:text-gray-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </div>
        <input
          type="text"
          id="search-navbar"
          className="block w-full p-2  ps-10 text-sm bg-red-500 text-white border  placeholder-white rounded-lg  outline-offset-2 outline-white  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Search..."
        />
      </div>
    </nav>
  );
}
