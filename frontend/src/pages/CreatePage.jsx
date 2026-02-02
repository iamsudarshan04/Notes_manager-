import { ArrowLeftIcon, PenToolIcon, SparklesIcon } from "lucide-react";
import { useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router";
import api from "../lib/axios";

const CreatePage = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title.trim() || !content.trim()) {
      toast.error("All fields are required");
      return;
    }

    setLoading(true);
    try {
      await api.post("/notes", {
        title,
        content,
      });

      toast.success("Note created successfully!");
      navigate("/");
    } catch (error) {
      console.log("Error creating note", error);
      if (error.response.status === 429) {
        toast.error("Slow down! You're creating notes too fast", {
          duration: 4000,
          icon: "💀",
        });
      } else {
        toast.error("Failed to create note");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-purple-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <Link
              to={"/"}
              className="flex items-center space-x-2 text-gray-600 hover:text-primary transition-colors duration-200 group"
            >
              <ArrowLeftIcon className="h-5 w-5 transform group-hover:-translate-x-1 transition-transform duration-200" />
              <span className="font-medium">Back to Notes</span>
            </Link>

            <div className="flex items-center space-x-2">
              <div className="p-2 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-xl backdrop-blur-sm">
                <PenToolIcon className="h-5 w-5 text-purple-600" />
              </div>
              <span className="text-sm font-medium text-gray-600">Create New Note</span>
            </div>
          </div>

          {/* Main Form Card */}
          <div className="bg-white/70 backdrop-blur-xl rounded-2xl shadow-xl border border-white/40 overflow-hidden">
            {/* Form Header */}
            <div className="bg-gradient-to-r from-purple-500/10 to-blue-500/10 px-8 py-6 border-b border-white/30">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-white/80 rounded-xl shadow-sm backdrop-blur-sm">
                  <SparklesIcon className="h-5 w-5 text-purple-600" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Create New Note</h2>
                  <p className="text-sm text-gray-600 mt-1">Capture your thoughts and ideas</p>
                </div>
              </div>
            </div>

            {/* Form Body */}
            <div className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Title Field */}
                <div className="space-y-2">
                  <label className="flex items-center space-x-2 text-sm font-semibold text-gray-700">
                    <span>Title</span>
                    <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter a catchy title for your note..."
                    className="w-full px-4 py-3 border border-white/40 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 bg-white/60 backdrop-blur-sm focus:bg-white/80 transition-all duration-200 text-gray-800 placeholder-gray-500"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </div>

                {/* Content Field */}
                <div className="space-y-2">
                  <label className="flex items-center space-x-2 text-sm font-semibold text-gray-700">
                    <span>Content</span>
                    <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    placeholder="Write your thoughts, ideas, or anything you want to remember..."
                    className="w-full px-4 py-3 border border-white/40 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 bg-white/60 backdrop-blur-sm focus:bg-white/80 transition-all duration-200 text-gray-800 placeholder-gray-500 resize-none h-48"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                  />
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-gray-500">
                      {content.length} characters
                    </span>
                    <span className="text-xs text-gray-400">
                      Tip: Use markdown for formatting
                    </span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex items-center justify-between pt-6 border-t border-gray-100">
                  <Link
                    to="/"
                    className="px-6 py-2 text-gray-600 hover:text-gray-800 font-medium transition-colors duration-200"
                  >
                    Cancel
                  </Link>

                  <button
                    type="submit"
                    className="px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                    disabled={loading || !title.trim() || !content.trim()}
                  >
                    {loading ? (
                      <span className="flex items-center space-x-2">
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                        <span>Creating...</span>
                      </span>
                    ) : (
                      <span className="flex items-center space-x-2">
                        <PenToolIcon className="h-4 w-4" />
                        <span>Create Note</span>
                      </span>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Tips Section */}
          <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border border-blue-100">
            <h3 className="font-semibold text-blue-900 mb-2 flex items-center">
              <SparklesIcon className="h-4 w-4 mr-2" />
              Pro Tips
            </h3>
            <ul className="text-sm text-blue-700 space-y-1">
              <li>• Use descriptive titles to easily find your notes later</li>
              <li>• Break down long content into paragraphs for better readability</li>
              <li>• Add keywords to make searching easier</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CreatePage;