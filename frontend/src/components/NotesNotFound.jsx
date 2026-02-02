import { Link } from "react-router";
import { FileXIcon, PlusIcon, SparklesIcon } from "lucide-react";

const NotesNotFound = () => {
  return (
    <div className="text-center py-20">
      <div className="relative inline-block">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full blur-2xl"></div>
        <div className="relative p-6 bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-lg border border-gray-100">
          <FileXIcon className="mx-auto h-16 w-16 text-gray-400 mb-4" />
        </div>
      </div>
      
      <h3 className="mt-6 text-2xl font-bold text-gray-800">No notes yet</h3>
      <p className="mt-3 text-gray-600 max-w-md mx-auto">
        Start your journey by creating your first note. Capture your thoughts, ideas, and memories in one place.
      </p>
      
      <div className="mt-8">
        <Link 
          to="/create" 
          className="inline-flex items-center space-x-2 px-8 py-3 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
        >
          <PlusIcon className="h-5 w-5" />
          <span>Create Your First Note</span>
        </Link>
      </div>
      
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
        <div className="text-center p-4">
          <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg flex items-center justify-center mx-auto mb-3">
            <SparklesIcon className="h-6 w-6 text-blue-600" />
          </div>
          <h4 className="font-semibold text-gray-800 mb-1">Organize</h4>
          <p className="text-sm text-gray-600">Keep your thoughts structured</p>
        </div>
        <div className="text-center p-4">
          <div className="w-12 h-12 bg-gradient-to-br from-green-100 to-green-200 rounded-lg flex items-center justify-center mx-auto mb-3">
            <SparklesIcon className="h-6 w-6 text-green-600" />
          </div>
          <h4 className="font-semibold text-gray-800 mb-1">Create</h4>
          <p className="text-sm text-gray-600">Express your ideas freely</p>
        </div>
        <div className="text-center p-4">
          <div className="w-12 h-12 bg-gradient-to-br from-purple-100 to-purple-200 rounded-lg flex items-center justify-center mx-auto mb-3">
            <SparklesIcon className="h-6 w-6 text-purple-600" />
          </div>
          <h4 className="font-semibold text-gray-800 mb-1">Access</h4>
          <p className="text-sm text-gray-600">Find notes anytime, anywhere</p>
        </div>
      </div>
    </div>
  );
};

export default NotesNotFound;