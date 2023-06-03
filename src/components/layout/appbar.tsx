import Cookies from "js-cookie";
import { useRouter } from "next/router";

const Appbar = () => {
  const router = useRouter();

  const handleLogout = async () => {
    Cookies.remove("access_token");
    Cookies.remove("refresh_token");
    router.push("/aut/login");
  };
  return (
    <nav
      className="shadow-md w-full flex justify-between px-10 py-4"
      navbar-main=""
      navbar-scroll="true"
    >
      <p> NAVBAR</p>
      <button
        onClick={handleLogout}
        className="block px-4 py-2 text-sm bg-primary text-white rounded-md hover:bg-blue-400  font-primaryText"
      >
        <div className="flex items-center justify-start space-x-3">
          <div className="">
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
                d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
              />
            </svg>
          </div>
          <div>Logout</div>
        </div>
      </button>
    </nav>
  );
};
export default Appbar;
