import { Link } from "react-router";
import { CalendarIcon, FileTextIcon } from "lucide-react";

const NoteCard = ({ note }) => {
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  return (
    <Link
      to={`/note/${note._id}`}
      className="group relative block rounded-2xl overflow-hidden transition-all duration-500 hover:scale-[1.02]"
    >
      {/* Glassmorphism Card */}
      <div className="relative bg-white/70 backdrop-blur-xl border border-white/40 shadow-xl hover:shadow-2xl transition-all duration-500 rounded-2xl overflow-hidden">
        {/* Gradient Background on Hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Gradient Border Effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-400 via-blue-400 to-purple-400 opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500" />

        <div className="relative p-6">
          <div className="flex items-start justify-between mb-3">
            <div className="flex items-center space-x-2">
              <div className="p-2 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-xl backdrop-blur-sm group-hover:scale-110 transition-transform duration-300">
                <FileTextIcon className="h-4 w-4 text-purple-600" />
              </div>
              <span className="text-xs text-gray-600 font-medium">
                {formatDate(note.createdAt || new Date())}
              </span>
            </div>
          </div>

          <h2 className="card-title text-lg font-bold bg-gradient-to-r from-gray-800 to-gray-700 bg-clip-text text-transparent mb-3 line-clamp-2 group-hover:from-purple-600 group-hover:to-blue-600 transition-all duration-300">
            {note.title}
          </h2>

          <p className="text-sm text-gray-600 line-clamp-3 leading-relaxed">
            {note.content}
          </p>

          <div className="mt-4 flex items-center justify-between">
            <div className="h-1 w-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
            <span className="text-xs font-semibold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Read more →
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default NoteCard;