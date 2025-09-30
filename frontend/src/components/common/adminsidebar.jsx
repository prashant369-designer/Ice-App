import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  MdOutlineDashboard,
} from "react-icons/md";
import { IoLogOutOutline } from "react-icons/io5";
import { RiHandbagLine } from "react-icons/ri";
import { CiSettings } from "react-icons/ci";
import { GrSecure } from "react-icons/gr";  
import { GoPeople } from "react-icons/go";
import { LiaSellcast } from "react-icons/lia";
import { MdOutlineTableRestaurant } from "react-icons/md";
import { PiBowlFoodLight } from "react-icons/pi";
import { IoWalletOutline } from "react-icons/io5";
import { TbFaceIdError } from "react-icons/tb";
import { SiCloudflarepages } from "react-icons/si";

function AdminSidebar({ closeSidebar }) {
  const location = useLocation();
  const navigate = useNavigate();

  const isActive = (path) => location.pathname.startsWith(path);

  const handleLogout = () => {
  localStorage.removeItem("token");
  navigate("/login", { replace: true }); 
  window.location.reload(); 
};


  const handleLinkClick = () => {
    closeSidebar();
  };

  return (
    <div className="flex flex-col text-black font-bold ">
      <h1 className="text-gray-500">Admin Panel</h1>
      <nav className="space-y-2 mt-2">
        {/* Dashboard */}
        <Link
          to="/admin/dashboard"
          onClick={handleLinkClick}
          className={`flex items-center gap-3 px-4 py-2 rounded-lg transition ${
            isActive("/admin/dashboard")
              ? "bg-white text-black border border-gray-500"
              : "hover:bg-gray-800 hover:text-white"
          }`}
        >
          <MdOutlineDashboard className="w-5 h-5" />
          <span>Dashboard</span>
        </Link>
          {/* Enquiry */}
        <Link
          to="/admin/enquiry"
          onClick={handleLinkClick}
          className={`flex items-center gap-3 px-4 py-2 rounded-lg transition ${
            isActive("/admin/enquiry")
              ? "bg-white text-black"
              : "hover:bg-gray-800 hover:text-white"
          }`}
        >
          <IoWalletOutline className="w-5 h-5" />
          <span>Enquiry</span>
        </Link>
        {/* orders  */}
        <Link
          to="/admin/orders"
          onClick={handleLinkClick}
          className={`flex items-center gap-3 px-4 py-2 rounded-lg transition ${
            isActive("/admin/orders")
              ? "bg-white text-black"
              : "hover:bg-gray-800 hover:text-white"
          }`}
        >
          <RiHandbagLine className="w-5 h-5" />
          <span>Orders</span>
        </Link>
        {/* customers - reviews/client reviews/faqs */}
        <el-dropdown class="inline">
          <button class="justify-between -mt-1 mb-1 cursor-pointer hover:bg-gray-800 hover:text-white inline-flex w-full rounded-md px-3 py-2 font-bold">
            <span className="flex items-center gap-3">
              <GoPeople className="w-5 h-5 mr-1" />
              Customers
            </span>
            <svg
              viewBox="0 0 20 20"
              fill="currentColor"
              data-slot="icon"
              aria-hidden="true"
              class="-mr-1 size-5 text-black hover:text-white"
            >
              <path
                d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
                clip-rule="evenodd"
                fill-rule="evenodd"
              />
            </svg>
          </button>
          <el-menu
            anchor="bottom end"
            popover
            class="w-56 origin-top-right rounded-md bg-gray-800 outline-1 -outline-offset-1 outline-white/10 transition transition-discrete [--anchor-gap:--spacing(2)] data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
          >
            <div class="py-1">
              <Link
          to="/admin/review"
          onClick={handleLinkClick}
          className={` block px-4 py-2 text-sm text-gray-300 focus:bg-white/5 focus:text-white focus:outline-hidden`}
        >
          <span>Reviews</span>
        </Link>
         <Link
          to="/admin/clientsview"
          onClick={handleLinkClick}
          className={` block px-4 py-2 text-sm text-gray-300 focus:bg-white/5 focus:text-white focus:outline-hidden`}
        >
          <span>Clients Review</span>
        </Link>
          <Link
          to="/admin/faq"
          onClick={handleLinkClick}
          className={` block px-4 py-2 text-sm text-gray-300 focus:bg-white/5 focus:text-white focus:outline-hidden`}
        >
          <span>Faqs</span>
        </Link>
            </div>
          </el-menu>
        </el-dropdown>
        {/* pages -blog / banners */}
        <el-dropdown class="inline">
          <button class="mb-1 justify-between  cursor-pointer hover:bg-gray-800 hover:text-white inline-flex w-full rounded-md px-3 py-2 font-bold">
            <span className="flex items-center gap-3">
              <LiaSellcast className="w-5 h-5 mr-1" />
             Pages
            </span>
            <svg
              viewBox="0 0 20 20"
              fill="currentColor"
              data-slot="icon"
              aria-hidden="true"
              class="-mr-1 size-5 text-black hover:text-white"
            >
              <path
                d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
                clip-rule="evenodd"
                fill-rule="evenodd"
              />
            </svg>
          </button>

          <el-menu
            anchor="bottom end"
            popover
            class="w-56 origin-top-right rounded-md bg-gray-800 outline-1 -outline-offset-1 outline-white/10 transition transition-discrete [--anchor-gap:--spacing(2)] data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
          >
            <div class="py-1">
              <Link
          to="/admin/blog"
          onClick={handleLinkClick}
          className={` block px-4 py-2 text-sm text-gray-300 focus:bg-white/5 focus:text-white focus:outline-hidden`}
        >
          <span>Blog</span>
        </Link>
        <Link
          to="/admin/herobanner"
          onClick={handleLinkClick}
          className={` block px-4 py-2 text-sm text-gray-300 focus:bg-white/5 focus:text-white focus:outline-hidden`}
        >
          <span>Banners</span>
        </Link>
            </div>
          </el-menu>
        </el-dropdown>
        {/* restaurant - location */}
        <el-dropdown class="inline">
          <button class="justify-between -mt-1 mb-1 cursor-pointer hover:bg-gray-800 hover:text-white inline-flex w-full rounded-md px-3 py-2 font-bold">
            <span className="flex items-center gap-3">
              <MdOutlineTableRestaurant className="w-5 h-5 mr-1" />
              Restautrant
            </span>
            <svg
              viewBox="0 0 20 20"
              fill="currentColor"
              data-slot="icon"
              aria-hidden="true"
              class="-mr-1 size-5 text-black hover:text-white"
            >
              <path
                d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
                clip-rule="evenodd"
                fill-rule="evenodd"
              />
            </svg>
          </button>
          <el-menu
            anchor="bottom end"
            popover
            class="w-56 origin-top-right rounded-md bg-gray-800 outline-1 -outline-offset-1 outline-white/10 transition transition-discrete [--anchor-gap:--spacing(2)] data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
          >
            <div class="py-1">
        <Link
          to="/admin/restautrantlocation"
          onClick={handleLinkClick}
          className={` block px-4 py-2 text-sm text-gray-300 focus:bg-white/5 focus:text-white focus:outline-hidden`}
        >
          <span>Location</span>
        </Link>
            </div>
          </el-menu>
        </el-dropdown>
        {/* food- products / menu / category */}
        <el-dropdown class="inline">
          <button class="justify-between  mb-1 cursor-pointer hover:bg-gray-800 hover:text-white inline-flex w-full rounded-md px-3 py-2 font-bold">
            <span className="flex items-center gap-3">
              <PiBowlFoodLight className="w-5 h-5 mr-1" />
              Food
            </span>
            <svg
              viewBox="0 0 20 20"
              fill="currentColor"
              data-slot="icon"
              aria-hidden="true"
              class="-mr-1 size-5 text-black hover:text-white"
            >
              <path
                d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
                clip-rule="evenodd"
                fill-rule="evenodd"
              />
            </svg>
          </button>

          <el-menu
            anchor="bottom end"
            popover
            class="w-56 origin-top-right rounded-md bg-gray-800 outline-1 -outline-offset-1 outline-white/10 transition transition-discrete [--anchor-gap:--spacing(2)] data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
          >
            <div class="py-1">
             <Link
          to="/admin/premium"
          onClick={handleLinkClick}
          className={` block px-4 py-2 text-sm text-gray-300 focus:bg-white/5 focus:text-white focus:outline-hidden`}
        >
          <span>Products</span>
        </Link>
        <Link
          to="/admin/menu"
          onClick={handleLinkClick}
          className={` block px-4 py-2 text-sm text-gray-300 focus:bg-white/5 focus:text-white focus:outline-hidden`}
        >
          <span>Menu</span>
        </Link>
        <Link
          to="/admin/category"
          onClick={handleLinkClick}
          className={` block px-4 py-2 text-sm text-gray-300 focus:bg-white/5 focus:text-white focus:outline-hidden`}
        >
          <span>Category</span>
        </Link>
            </div>
          </el-menu>
        </el-dropdown>
        {/* wallet */}
        <Link
          to="/admin/wallet"
          onClick={handleLinkClick}
          className={`flex items-center gap-3 px-4 py-2 rounded-lg transition ${
            isActive("/admin/herobanner")
              ? "bg-white text-black"
              : "hover:bg-gray-800 hover:text-white"
          }`}
        >
          <IoWalletOutline className="w-5 h-5" />
          <span>Wallet</span>
        </Link>
        {/* setting */}
        <Link
          to="/admin/setting"
          onClick={handleLinkClick}
          className={`flex items-center gap-3 px-4 py-2 rounded-lg transition ${
            isActive("/admin/herobanner")
              ? "bg-white text-black"
              : "hover:bg-gray-800 hover:text-white"
          }`}
        >
          <CiSettings className="w-5 h-5" />
          <span>Setting</span>
        </Link>
        <p className=" text-gray-500 m-2">UI</p>
        {/* auth -  login / registerpass / forgetpass*/}
          <el-dropdown class="inline">
          <button class="justify-between -mt-1 mb-1 cursor-pointer hover:bg-gray-800 hover:text-white inline-flex w-full rounded-md px-3 py-2 font-bold">
            <span className="flex items-center gap-3">
              <GrSecure className="w-5 h-5 mr-1" />
              Auth
            </span>
            <svg
              viewBox="0 0 20 20"
              fill="currentColor"
              data-slot="icon"
              aria-hidden="true"
              class="-mr-1 size-5 text-black hover:text-white"
            >
              <path
                d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
                clip-rule="evenodd"
                fill-rule="evenodd"
              />
            </svg>
          </button>

          <el-menu
            anchor="bottom end"
            popover
            class="w-56 origin-top-right rounded-md bg-gray-800 outline-1 -outline-offset-1 outline-white/10 transition transition-discrete [--anchor-gap:--spacing(2)] data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
          >
            <div class="py-1">
              <a
                href="/login"
                class="block px-4 py-2 text-sm text-gray-300 focus:bg-white/5 focus:text-white focus:outline-hidden"
              >
                Login
              </a>
            </div>
            <div class="py-1">
              <a
                href="/forget-password"
                class="block px-4 py-2 text-sm text-gray-300 focus:bg-white/5 focus:text-white focus:outline-hidden"
              >
              Forget Password
              </a>
            </div>
          </el-menu>
        </el-dropdown>
        {/* error - error404 / error500 / coming soon */}
           <el-dropdown class="inline">
          <button class="justify-between -mt-1 mb-1 cursor-pointer hover:bg-gray-800 hover:text-white inline-flex w-full rounded-md px-3 py-2 font-bold">
            <span className="flex items-center gap-3">
              <TbFaceIdError  className="w-5 h-5 mr-1" />
              Error
            </span>
            <svg
              viewBox="0 0 20 20"
              fill="currentColor"
              data-slot="icon"
              aria-hidden="true"
              class="-mr-1 size-5 text-black hover:text-white"
            >
              <path
                d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
                clip-rule="evenodd"
                fill-rule="evenodd"
              />
            </svg>
          </button>

          <el-menu
            anchor="bottom end"
            popover
            class="w-56 origin-top-right rounded-md bg-gray-800 outline-1 -outline-offset-1 outline-white/10 transition transition-discrete [--anchor-gap:--spacing(2)] data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
          >
            <div class="py-1">
              <a
                href="#"
                class="block px-4 py-2 text-sm text-gray-300 focus:bg-white/5 focus:text-white focus:outline-hidden"
              >
                Error 404
              </a>
            </div>
            <div class="py-1">
              <a
                href="#"
                class="block px-4 py-2 text-sm text-gray-300 focus:bg-white/5 focus:text-white focus:outline-hidden"
              >
                Error 500
              </a>
            </div>
            <div class="py-1">
              <a
                href="#"
                class="block px-4 py-2 text-sm text-gray-300 focus:bg-white/5 focus:text-white focus:outline-hidden"
              >
              Coming soon
              </a>
            </div>
          </el-menu>
        </el-dropdown>
        {/* extra pages- pricing /time line*/}
          <el-dropdown class="inline">
          <button class="justify-between -mt-1 mb-1 cursor-pointer hover:bg-gray-800 hover:text-white inline-flex w-full rounded-md px-3 py-2 font-bold">
            <span className="flex items-center gap-3">
              <SiCloudflarepages   className="w-5 h-5 mr-1" />
              Extra Pages
            </span>
            <svg
              viewBox="0 0 20 20"
              fill="currentColor"
              data-slot="icon"
              aria-hidden="true"
              class="-mr-1 size-5 text-black hover:text-white"
            >
              <path
                d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
                clip-rule="evenodd"
                fill-rule="evenodd"
              />
            </svg>
          </button>

          <el-menu
            anchor="bottom end"
            popover
            class="w-56 origin-top-right rounded-md bg-gray-800 outline-1 -outline-offset-1 outline-white/10 transition transition-discrete [--anchor-gap:--spacing(2)] data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
          >
            <div class="py-1">
              <a
                href="#"
                class="block px-4 py-2 text-sm text-gray-300 focus:bg-white/5 focus:text-white focus:outline-hidden"
              >
              Pricing
              </a>
            </div>
            <div class="py-1">
              <a
                href="#"
                class="block px-4 py-2 text-sm text-gray-300 focus:bg-white/5 focus:text-white focus:outline-hidden"
              >
                Time Line
              </a>
            </div>
          </el-menu>
        </el-dropdown>
        {/* Logout */}
        <button
          onClick={handleLogout}
          className="mt-4 cursor-pointer flex w-full items-center gap-3 px-4 py-2 rounded-lg transition hover:bg-gray-800 text-left"
        >
          <IoLogOutOutline className="w-5 h-5 text-red-500" />
          <span className="text-red-500">Log Out</span>
        </button>

        {/* <Link
          to="/admin/herobanner"
          onClick={handleLinkClick}
          className={`flex items-center gap-3 px-4 py-2 rounded-lg transition ${
            isActive("/admin/herobanner")
              ? "bg-white text-black"
              : "hover:bg-gray-800 hover:text-white"
          }`}
        >
          <GiTatteredBanner className="w-5 h-5" />
          <span>Hero Banner</span>
        </Link> */}

        {/* <Link
          to="/admin/category"
          onClick={handleLinkClick}
          className={`flex items-center gap-3 px-4 py-2 rounded-lg transition ${
            isActive("/admin/category")
              ? "bg-white text-black"
              : "hover:bg-gray-800 hover:text-white"
          }`}
        >
          <MdOutlineCategory className="w-5 h-5" />
          <span>Category</span>
        </Link> */}
        {/* <Link
          to="/admin/premium"
          onClick={handleLinkClick}
          className={`flex items-center gap-3 px-4 py-2 rounded-lg transition ${
            isActive("/admin/premium")
              ? "bg-white text-black"
              : "hover:bg-gray-800 hover:text-white"
          }`}
        >
          <FaProductHunt className="w-5 h-5" />
          <span>Products</span>
        </Link> */}
        {/* <Link
          to="/admin/blog"
          onClick={handleLinkClick}
          className={`flex items-center gap-3 px-4 py-2 rounded-lg transition ${
            isActive("/admin/blog")
              ? "bg-white text-black"
              : "hover:bg-gray-800 hover:text-white"
          }`}
        >
          <PiGitlabLogoBold className="w-5 h-5" />
          <span>Blog</span>
        </Link> */}
        {/* <Link
          to="/admin/menu"
          onClick={handleLinkClick}
          className={`flex items-center gap-3 px-4 py-2 rounded-lg transition ${
            isActive("/admin/menu")
              ? "bg-white text-black"
              : "hover:bg-gray-800 hover:text-white"
          }`}
        >
          <CgMenuGridR className="w-5 h-5" />
          <span>Menu</span>
        </Link> */}
        {/* <Link
          to="/admin/faq"
          onClick={handleLinkClick}
          className={`flex items-center gap-3 px-4 py-2 rounded-lg transition ${
            isActive("/admin/faq")
              ? "bg-white text-black"
              : "hover:bg-gray-800 hover:text-white"
          }`}
        >
          <FaQuestion className="w-5 h-5" />
          <span>FAQS</span>
        </Link> */}
        {/* <Link
          to="/admin/clientsview"
          onClick={handleLinkClick}
          className={`flex items-center gap-3 px-4 py-2 rounded-lg transition ${
            isActive("/admin/clientsview")
              ? "bg-white text-black"
              : "hover:bg-gray-800 hover:text-white"
          }`}
        >
          <GrView className="w-5 h-5" />
          <span>Clients View</span>
        </Link> */}
        {/* <Link
          to="/admin/restautrantlocation"
          onClick={handleLinkClick}
          className={`flex items-center gap-3 px-4 py-2 rounded-lg transition ${
            isActive("/admin/restautrantlocation")
              ? "bg-white text-black"
              : "hover:bg-gray-800 hover:text-white"
          }`}
        >
          <MdOutlineAddLocationAlt className="w-5 h-5" />
          <span>Restautrant Loca</span>
        </Link> */}
        {/* <Link
          to="/admin/review"
          onClick={handleLinkClick}
          className={`flex items-center gap-3 px-4 py-2 rounded-lg transition ${
            isActive("/admin/review")
              ? "bg-white text-black"
              : "hover:bg-gray-800 hover:text-white"
          }`}
        >
          <MdOutlineRateReview className="w-5 h-5" />
          <span>Review </span>
        </Link> */}
        {/* Logout */}
        {/* <button
          onClick={handleLogout}
          className="cursor-pointer flex w-full items-center gap-3 px-4 py-2 rounded-lg transition hover:bg-gray-800 text-left"
        >
          <IoLogOutOutline className="w-5 h-5 text-red-500" />
          <span className="text-red-500">Log Out</span>
        </button> */}
      </nav>
    </div>
  );
}

export default AdminSidebar;
