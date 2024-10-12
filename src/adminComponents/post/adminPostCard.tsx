import { postProps } from "@/components/postCard"
export default function AdminPostCard({ posts }: { posts: postProps }) {
    const { id, title, content, image, created_by, date, comments, user_id } =
        posts;
    return (
        <div>
            <div className="relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-80">
                <div className="relative h-56 m-2.5 overflow-hidden text-white rounded-md">
                    <img src={image} />
                </div>
                <div className="p-4">

                    <h6 className="mb-2 text-slate-800 text-xl font-semibold">
                        {title}
                    </h6>
                    <p className="text-slate-600 leading-normal font-light">
                        {content}
                    </p>
                </div>

                <div className="flex items-center justify-between p-4">
                    <div className="flex items-center">
                        <img
                            alt="Tania Andrew"
                            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1480&amp;q=80"
                            className="relative inline-block h-8 w-8 rounded-full"
                        />
                        <div className="grid grid-cols-2">
                            <div className="flex flex-col ml-3 text-sm">
                                <span className="text-slate-800 font-semibold">{created_by}</span>
                                <span className="text-slate-600">
                                    {date}
                                </span>
                            </div>
                            <div>
                                <button className="border border-yellow-300 rounded-lg p-1">Edit</button>
                                <button className="border border-red-700 rounded-lg p-1 ml-1">Delete</button>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}