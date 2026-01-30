import { Link } from "react-router";
import { PlusIcon } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="navbar bg-base-100 shadow-lg">
      <div className="navbar-start">
        <Link to="/" className="btn btn-ghost normal-case text-xl">
          Notes App
        </Link>
      </div>
      <div className="navbar-end">
        <Link to="/create" className="btn btn-primary">
          <PlusIcon className="h-5 w-5" />
          Create Note
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;