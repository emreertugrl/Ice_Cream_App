import { CgMenuRightAlt } from "react-icons/cg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="text-white flex justify-between items-center text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] 2xl:text-[28px]">
      <div className="flex gap-[18px] items-center">
        <img
          className="size-[45px] md:size-[55px] 2xl:size-[78px]"
          src="/logo.svg"
          alt="logo"
        />
        <h2 className="font-black max-sm:hidden ">
          Drop <br />
          Cream
        </h2>
      </div>

      <nav className="flex items-center gap-[10px] sm:gap-[20px]  lg:gap-[30px] 2xl:gap-[50px]">
        <Link to="/">Anasayfa</Link>
        <Link to="/">Hakkımızda</Link>
        <Link to="/">Yakındakiler</Link>
        <Link to="/">
          <img
            src="/search.svg"
            alt="search"
            className="size-[16px] xl:size-[30px]"
          />
        </Link>
      </nav>

      <button>
        <CgMenuRightAlt className="size-[24px] xl:size-[30px]" />
      </button>
    </header>
  );
};

export default Header;
