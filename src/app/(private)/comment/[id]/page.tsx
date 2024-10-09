"use client";
import axios from "@/app/provider/api.provider";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useParams, useRouter } from "next/navigation";

import CommentsCard from "../../../../components/commentsCard";

export default function Comment() {
  
  const { id } = useParams();
  const getPost = async (id: string) => {
    const responseData = await axios.get(`/posts/${id}/show`);
    console.log(responseData.data.data);
    return responseData.data.data;
  };

  const { data: postData } = useQuery({
    queryKey: ["post", id],
    queryFn: () => getPost(id),
  });
  // console.log(postData);
  return (
    <div>
      {postData?.map((post, key) =>
        post.comments?.map((comment, key) => (
          <CommentsCard comments={comment} key={comment.id} />
        ))
      )}

      <div className="flex items-center px-3 py-2 rounded-lg bg-gray-50 dark:bg-gray-700 w-1/2 mx-auto">
        <textarea
          id="chat"
          className="block mx-4 p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Your message..."
        ></textarea>
        <button
          type="submit"
          className="inline-flex justify-center p-2 text-blue-600 rounded-full cursor-pointer hover:bg-blue-100 dark:text-blue-500 dark:hover:bg-gray-600"
        >
          <svg
            className="w-5 h-5 rotate-90 rtl:-rotate-90"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 18 20"
          >
            <path d="m17.914 18.594-8-18a1 1 0 0 0-1.828 0l-8 18a1 1 0 0 0 1.157 1.376L8 18.281V9a1 1 0 0 1 2 0v9.281l6.758 1.689a1 1 0 0 0 1.156-1.376Z" />
          </svg>
          <span className="sr-only">Send message</span>
        </button>
      </div>
    </div>
  );
}
