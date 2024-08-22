import {  FaMobileScreenButton } from "react-icons/fa6";
import {  GiReactor } from "react-icons/gi";

interface Props {}
export default function TopMenu(params: Props) {
  return (
    <nav className="flex   items-center justify-between w-full text-white  border-gray-200 dark:bg-gray-900">
      <div className="flex w-full justify-between items-center mx-auto max-w-screen-xl p-4">
        <a
          href="https://flowbite.com"
          className="flex items-center space-x-3 rtl:space-x-reverse  hover:bg-red-400 p-2 rounded-md"
        >
          <GiReactor  className="h-8 w-8"/>

          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white ">
            Roocket
          </span>
        </a>
        <div className="flex items-center space-x-1 rtl:space-x-reverse">

          <a
            href="tel:+989903503018"
            className="flex items-baseline text-sm  dark:text-white  hover:bg-red-400 p-2 rounded-md"
          > <FaMobileScreenButton/>
            (+98)9903503018
          </a>
          <button
            onClick={() => alert("hello")}
            type="button"
            data-dropdown-toggle="language-dropdown-menu"
            className="inline-flex items-center font-medium justify-center px-1 py-2 text-sm  dark:text-white rounded-lg cursor-pointer hover:bg-red-400 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            <svg
              className="w-5 h-5 rounded-full me-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 3900 3900"
            >
              <path fill="#b22234" d="M0 0h7410v3900H0z" />
              <path
                d="M0 450h7410m0 600H0m0 600h7410m0 600H0m0 600h7410m0 600H0"
                stroke="#fff"
                strokeWidth="300"
              />
              <path fill="#3c3b6e" d="M0 0h2964v2100H0z" />
              <g fill="#fff">
                <g id="d">
                  <g id="c">
                    <g id="e">
                      <g id="b">
                        <path
                          id="a"
                          d="M247 90l70.534 217.082-184.66-134.164h228.253L176.466 307.082z"
                        />
                        <use xlinkHref="#a" y="420" />
                        <use xlinkHref="#a" y="840" />
                        <use xlinkHref="#a" y="1260" />
                      </g>
                      <use xlinkHref="#a" y="1680" />
                    </g>
                    <use xlinkHref="#b" x="247" y="210" />
                  </g>
                  <use xlinkHref="#c" x="494" />
                </g>
                <use xlinkHref="#d" x="988" />
                <use xlinkHref="#c" x="1976" />
                <use xlinkHref="#e" x="2470" />
              </g>
            </svg>
            English (US)
          </button>
        </div>
      </div>
    </nav>
  );
}
