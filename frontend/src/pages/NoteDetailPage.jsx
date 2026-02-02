import { useEffect } from "react";
import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router";
import api from "../lib/axios";
import toast from "react-hot-toast";
import { ArrowLeftIcon, LoaderIcon, Trash2Icon, SaveIcon, Edit3Icon, EyeIcon } from "lucide-react";

const NoteDetailPage = () => {
  const [note, setNote] = useState(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [hasChanges, setHasChanges] = useState(false);

  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const fetchNote = async () => {
      try {
        const res = await api.get(`/notes/${id}`);
        setNote(res.data);
      } catch (error) {
        console.log("Error in fetching note", error);
        toast.error("Failed to fetch the note");
      } finally {
        setLoading(false);
      }
    };

    fetchNote();
  }, [id]);

  useEffect(() => {
    if (note && isEditing) {
      setHasChanges(true);
    }
  }, [note, isEditing]);

  const handleDelete = async () => {
    if (!window.confirm("Are you sure you want to delete this note? This action cannot be undone.")) return;

    try {
      await api.delete(`/notes/${id}`);
      toast.success("Note deleted successfully");
      navigate("/");
    } catch (error) {
      console.log("Error deleting the note:", error);
      toast.error("Failed to delete note");
    }
  };

  const handleSave = async () => {
    if (!note.title.trim() || !note.content.trim()) {
      toast.error("Please add a title or content");
      return;
    }

    setSaving(true);

    try {
      await api.put(`/notes/${id}`, note);
      toast.success("Note updated successfully");
      setHasChanges(false);
      setIsEditing(false);
    } catch (error) {
      console.log("Error saving the note:", error);
      toast.error("Failed to update note");
    } finally {
      setSaving(false);
    }
  };

  const handleCancel = () => {
    if (hasChanges && !window.confirm("You have unsaved changes. Are you sure you want to discard them?")) {
      return;
    }
    setIsEditing(false);
    setHasChanges(false);
    // Refetch the note to reset changes
    const fetchNote = async () => {
      try {
        const res = await api.get(`/notes/${id}`);
        setNote(res.data);
      } catch (error) {
        console.log("Error refetching note", error);
      }
    };
    fetchNote();
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-purple-100 flex items-center justify-center">
        <div className="text-center">
          <LoaderIcon className="animate-spin h-12 w-12 text-purple-600 mx-auto mb-4" />
          <p className="text-gray-600">Loading your note...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-purple-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <Link
              to="/"
              className="flex items-center space-x-2 text-gray-600 hover:text-purple-600 transition-colors duration-200 group"
            >
              <ArrowLeftIcon className="h-5 w-5 transform group-hover:-translate-x-1 transition-transform duration-200" />
              <span className="font-medium">Back to Notes</span>
            </Link>

            <div className="flex items-center space-x-3">
              {isEditing ? (
                <>
                  <button
                    onClick={handleCancel}
                    className="px-4 py-2 text-gray-600 hover:text-gray-800 font-medium transition-colors duration-200"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleSave}
                    className="px-6 py-2 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold rounded-lg shadow hover:shadow-lg transform hover:scale-105 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center space-x-2"
                    disabled={saving}
                  >
                    {saving ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                        <span>Saving...</span>
                      </>
                    ) : (
                      <>
                        <SaveIcon className="h-4 w-4" />
                        <span>Save Changes</span>
                      </>
                    )}
                  </button>
                </>
              ) : (
                <>
                  <button
                    onClick={() => setIsEditing(true)}
                    className="px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-medium rounded-lg shadow hover:shadow-lg transform hover:scale-105 transition-all duration-200 flex items-center space-x-2"
                  >
                    <Edit3Icon className="h-4 w-4" />
                    <span>Edit</span>
                  </button>
                  <button
                    onClick={handleDelete}
                    className="px-4 py-2 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-medium rounded-lg shadow hover:shadow-lg transform hover:scale-105 transition-all duration-200 flex items-center space-x-2"
                  >
                    <Trash2Icon className="h-4 w-4" />
                    <span>Delete</span>
                  </button>
                </>
              )}
            </div>
          </div>

          {/* Main Content */}
          <div className="bg-white/70 backdrop-blur-xl rounded-2xl shadow-xl border border-white/40 overflow-hidden">
            {/* Note Header */}
            <div className="bg-gradient-to-r from-purple-500/10 to-blue-500/10 px-8 py-6 border-b border-white/30">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-white/80 rounded-xl shadow-sm backdrop-blur-sm">
                    {isEditing ? (
                      <Edit3Icon className="h-5 w-5 text-purple-600" />
                    ) : (
                      <EyeIcon className="h-5 w-5 text-purple-600" />
                    )}
                  </div>
                  <div>
                    <h2 className="text-lg font-semibold text-gray-800">
                      {isEditing ? "Editing Note" : "Viewing Note"}
                    </h2>
                    <p className="text-sm text-gray-600">
                      {isEditing ? "Make your changes and save when done" : "Read your note below"}
                    </p>
                  </div>
                </div>
                {hasChanges && (
                  <div className="flex items-center space-x-2 text-amber-600 text-sm font-medium">
                    <div className="h-2 w-2 bg-amber-600 rounded-full animate-pulse"></div>
                    <span>Unsaved changes</span>
                  </div>
                )}
              </div>
            </div>

            {/* Note Content */}
            <div className="p-8">
              <div className="space-y-6">
                {/* Title Field */}
                <div className="space-y-2">
                  <label className="flex items-center space-x-2 text-sm font-semibold text-gray-700">
                    <span>Title</span>
                    {isEditing && <span className="text-red-500">*</span>}
                  </label>
                  {isEditing ? (
                    <input
                      type="text"
                      placeholder="Note title"
                      className="w-full px-4 py-3 border border-white/40 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 bg-white/60 backdrop-blur-sm focus:bg-white/80 transition-all duration-200 text-gray-800"
                      value={note.title}
                      onChange={(e) => setNote({ ...note, title: e.target.value })}
                    />
                  ) : (
                    <div className="px-4 py-3 bg-gray-50 rounded-xl">
                      <h3 className="text-xl font-bold text-gray-800">{note.title}</h3>
                    </div>
                  )}
                </div>

                {/* Content Field */}
                <div className="space-y-2">
                  <label className="flex items-center space-x-2 text-sm font-semibold text-gray-700">
                    <span>Content</span>
                    {isEditing && <span className="text-red-500">*</span>}
                  </label>
                  {isEditing ? (
                    <textarea
                      placeholder="Write your note here..."
                      className="w-full px-4 py-3 border border-white/40 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 bg-white/60 backdrop-blur-sm focus:bg-white/80 transition-all duration-200 text-gray-800 resize-none h-64"
                      value={note.content}
                      onChange={(e) => setNote({ ...note, content: e.target.value })}
                    />
                  ) : (
                    <div className="px-4 py-4 bg-gray-50 rounded-xl min-h-[200px]">
                      <p className="text-gray-800 whitespace-pre-wrap leading-relaxed">{note.content}</p>
                    </div>
                  )}
                </div>

                {/* Metadata */}
                <div className="flex items-center justify-between pt-6 border-t border-gray-100">
                  <div className="text-sm text-gray-500">
                    Created: {new Date(note.createdAt || new Date()).toLocaleDateString('en-US', {
                      month: 'long',
                      day: 'numeric',
                      year: 'numeric',
                      hour: '2-digit',
                      minute: '2-digit'
                    })}
                  </div>
                  <div className="text-sm text-gray-500">
                    {note.content.length} characters
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default NoteDetailPage;
