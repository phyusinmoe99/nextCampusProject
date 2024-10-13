import { postProps } from "@/components/postCard";

export default function AdminPostCard({ posts }: { posts: postProps }) {
  const { id, title, content, image, created_by, date } = posts;

  return (
    <div className="relative flex flex-col bg-white shadow-md border border-slate-200 rounded-lg w-full max-w-xs mx-auto overflow-hidden group hover:shadow-xl transition-all duration-300 ease-in-out my-4">
      {/* Post Image */}
      <div className="relative h-56 w-full overflow-hidden rounded-md">
        <img
          src={image}
          alt={title}
          className="object-cover w-full h-full group-hover:scale-110 transition-all duration-300 ease-in-out"
        />
      </div>

      {/* Post Content */}
      <div className="p-4 flex flex-col h-full">
        <h6 className="mb-2 text-slate-800 text-xl font-semibold">{title}</h6>
        <p className="text-slate-600 text-sm leading-relaxed font-light line-clamp-3">
          {content}
        </p>
      </div>

      {/* Post Footer */}
      <div className="flex justify-between items-center px-4 py-3 bg-gray-50 border-t border-slate-200">
        <div className="flex items-center space-x-3">
          <img
            alt={created_by}
            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1480&amp;q=80"
            className="h-8 w-8 rounded-full object-cover"
          />
          <div className="flex flex-col text-sm">
            <span className="text-slate-800 font-semibold">{created_by}</span>
            <span className="text-slate-600">{date}</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex space-x-2">
          <button
            className="bg-yellow-300 hover:bg-yellow-400 text-black text-sm font-medium py-1 px-3 rounded-lg transition-all"
            title="Edit Post"
          >
            Edit
          </button>
          <button
            className="bg-red-600 hover:bg-red-700 text-white text-sm font-medium py-1 px-3 rounded-lg transition-all"
            title="Delete Post"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
