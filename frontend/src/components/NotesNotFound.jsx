import { Link } from "react-router";
import { FileXIcon } from "lucide-react";

const NotesNotFound = () => {
  return (
    <div className="text-center py-10">
      <FileXIcon className="mx-auto h-12 w-12 text-gray-400" />
      <h3 className="mt-2 text-sm font-medium text-gray-900">No notes</h3>
      <p className="mt-1 text-sm text-gray-500">Get started by creating a new note.</p>
      <div className="mt-6">
        <Link to="/create" className="btn btn-primary">
          Create Note
        </Link>
      </div>
    </div>
  );
};

export default NotesNotFound;