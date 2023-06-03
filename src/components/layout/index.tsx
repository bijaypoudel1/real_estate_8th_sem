import { ReactNode } from "react";
import Appbar from "./appbar";

type props = {
  children: ReactNode;
};

const Layout = ({ children }: props) => {
  return (
    <div className="">
      <div className="">
        <Appbar />
        <div className="container w-full mx-auto max-w-[1700px] ">
          {children}
        </div>
      </div>
    </div>
  );
};
export default Layout;
