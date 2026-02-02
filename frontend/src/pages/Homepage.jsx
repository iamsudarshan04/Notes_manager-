import { useState } from "react";
import Navbar from "../components/Navbar";
import RateLimitedUI from "../components/RateLimitedUI";
import { useEffect } from "react";
import api from "../lib/axios";
import toast from "react-hot-toast";
import NoteCard from "../components/NoteCard";
import NotesNotFound from "../components/NotesNotFound";
import { SearchIcon, StickyNoteIcon, SparklesIcon } from "lucide-react";

const HomePage = () => {
  const [isRateLimited, setIsRateLimited] = useState(false);
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const res = await api.get("/notes");
        console.log(res.data);
        setNotes(res.data);
        setIsRateLimited(false);
      } catch (error) {
        console.log("Error fetching notes");
        console.log(error.response);
        if (error.response?.status === 429) {
          setIsRateLimited(true);
        } else {
          toast.error("Failed to load notes");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchNotes();
  }, []);

  const filteredNotes = notes.filter(note =>
    note.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    note.content.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-purple-100">
      <Navbar />

      {isRateLimited && <RateLimitedUI />}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <div className="p-4 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-3xl backdrop-blur-sm border border-white/40 shadow-xl">
              <StickyNoteIcon className="h-10 w-10 text-purple-600" />
            </div>
          </div>
          <h1 className="text-5xl font-extrabold mb-4">
            Your <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Digital Notes</span>
          </h1>
          <p className="text-gray-700 text-lg max-w-2xl mx-auto mb-8 font-medium">
            Organize your thoughts, capture ideas, and boost your productivity with our beautiful note-taking app.
          </p>

          {/* Search Bar */}
          <div className="max-w-md mx-auto relative">
            <SearchIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-purple-500" />
            <input
              type="text"
              placeholder="Search your notes..."
              className="w-full pl-12 pr-4 py-4 border border-white/40 rounded-2xl focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 bg-white/70 backdrop-blur-xl shadow-lg transition-all duration-200"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {/* Loading State */}
        {loading && (
          <div className="flex flex-col items-center justify-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600 mb-4"></div>
            <p className="text-gray-700 font-medium">Loading your amazing notes...</p>
          </div>
        )}

        {/* Empty State */}
        {!loading && filteredNotes.length === 0 && !isRateLimited && (
          <div className="text-center py-20">
            {searchTerm ? (
              <div>
                <SearchIcon className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-700 mb-2">No notes found</h3>
                <p className="text-gray-500">Try adjusting your search terms</p>
              </div>
            ) : (
              <NotesNotFound />
            )}
          </div>
        )}

        {/* Notes Grid */}
        {!loading && filteredNotes.length > 0 && !isRateLimited && (
          <div>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent flex items-center">
                <SparklesIcon className="h-6 w-6 mr-2 text-purple-600" />
                {filteredNotes.length} {filteredNotes.length === 1 ? 'Note' : 'Notes'}
              </h2>
              {searchTerm && (
                <span className="text-sm text-gray-600 font-medium">
                  Searching for "{searchTerm}"
                </span>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredNotes.map((note) => (
                <NoteCard key={note._id} note={note} setNotes={setNotes} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default HomePage;
