import { Link } from "react-router";
import { PlusIcon, StickyNoteIcon } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="bg-white/60 backdrop-blur-xl shadow-lg border-b border-white/40 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2 hover:scale-105 transition-transform duration-200">
            <div className="p-2 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-xl backdrop-blur-sm">
              <StickyNoteIcon className="h-6 w-6 text-purple-600" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Notes App
            </span>
          </Link>

          <Link
            to="/create"
            className="px-6 py-2.5 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 flex items-center space-x-2"
          >
            <PlusIcon className="h-5 w-5" />
            <span>Create Note</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;