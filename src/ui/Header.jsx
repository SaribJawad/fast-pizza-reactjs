import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";
import User from "../features/users/User";

function Header() {
  return (
    <header className="font-poppins flex items-center justify-around border-b border-stone-300 bg-red-500 px-4 py-3  sm:px-6">
      <Link to="/" className="tracking-widest">
        Fast React Pizza Co.
      </Link>
      <SearchOrder />
      <User />
    </header>
  );
}

export default Header;
