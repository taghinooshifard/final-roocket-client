import { Dispatch, SetStateAction, useEffect } from "react";
import TopMenu from "./TopMenu";
import Menu from "./Menu";
import Image from "next/image";
import Slider from "./slider";
interface Props {
  showTopMenu: boolean;
  setShowTopMenu: Dispatch<SetStateAction<boolean>>;
}
export default function Header(params: Props) {
  useEffect(() => {
    window.addEventListener("scroll", () => {
      params.setShowTopMenu(window.scrollY > 490);
    });
    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);

  return (
    <div className="w-full bg-red-500  ">
      <div className="container max-w-screen-xl mx-auto">
        <header className="flex  flex-col items-center justify-start bg-red-500">
          <TopMenu />
          <Menu showTopMenu={params.showTopMenu} />
        </header>

        <Slider/>
      </div>
    </div>
  );
}
