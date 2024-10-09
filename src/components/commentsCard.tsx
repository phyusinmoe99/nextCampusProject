interface commentProps {
    comment?: string,
    created_by?: string,
    created_at?: string
}
export default function CommentsCard({ comments }: { comments: commentProps }) {
    const { comment, created_by, created_at } = comments;
    return (
        // <div>
        //     <span>{ comment}</span>
        //     <span>{ created_at}</span>
        //     <span>{ created_by}</span>

        // </div>
        
        <div className="relative grid grid-cols-1 gap-4 p-4 mb-8 border rounded-lg bg-white shadow-lg mx-auto w-1/2 mt-10">
            <div className="relative flex gap-4">
                <img
                    src="https://icons.iconarchive.com/icons/diversity-avatars/avatars/256/charlie-chaplin-icon.png"
                    className="relative rounded-lg -top-8 -mb-4 bg-white border h-20 w-20"
                    alt=""
                    loading="lazy"
                />
                <div className="flex flex-col w-full">
                    <div className="flex flex-row justify-between">
                        <p className="relative text-xl whitespace-nowrap truncate overflow-hidden">
                            {created_by}
                        </p>
                        <a className="text-gray-500 text-xl" href="#">
                            <i className="fa-solid fa-trash"></i>
                        </a>
                    </div>
                    <p className="text-gray-400 text-sm">{created_at}</p>
                </div>
            </div>
            <p className="-mt-4 text-gray-500">{comment}</p>
        </div>
    )

}