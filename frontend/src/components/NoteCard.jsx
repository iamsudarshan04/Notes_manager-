import { Link } from "react-router";

const NoteCard = ({ note }) => {
  return (
    <Link to={`/note/${note._id}`} className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow">
      <div className="card-body">
        <h2 className="card-title">{note.title}</h2>
        <p className="text-sm text-gray-600 line-clamp-3">{note.content}</p>
      </div>
    </Link>
  );
};

export default NoteCard;