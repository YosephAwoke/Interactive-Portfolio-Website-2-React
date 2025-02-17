import NavbarBtn from "./NavbarBtn";
import NavBarLinks from "./NavBarLinks";
import NavbarLogo from "./NavbarLogo";

const NavBarMain = () => {
  return (
    <nav className=" fixed top-2 left-1/2 -translate-x-1/2 z-20 w-full max-w-[1300px] px-4">
      <div className="flex justify-between w-full max-w-[1200px] mx-auto bg-black items-center p-6 rounded-r-full rounded-l-full border-[0.5px] border-orange-500">
        <NavbarLogo />
        <NavBarLinks />
        <NavbarBtn />
      </div>
    </nav>
  );
};

export default NavBarMain;
