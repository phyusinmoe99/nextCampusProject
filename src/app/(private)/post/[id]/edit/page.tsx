"use client";
import axios from "@/app/provider/api.provider";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useState, useEffect } from "react";

import { useParams, useRouter } from "next/navigation";

export default function PostEdit() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [error, setError] = useState("");

  const { id } = useParams();
  const router = useRouter();
  console.log("postid", id);

  const getPost = async (id: string) => {
    const responseData = await axios.get(`/posts/${id}/show`);
    console.log("postdata", responseData.data);

    return responseData.data;
  };

  const updatePost = async ({ id, updateData }) => {
    console.log("update function", updateData);
    const response = await axios.post(`/posts/${id}/update`, updateData);
    return response.data;
  };

  const { data: PostData, isSuccess } = useQuery({
    queryKey: ["post", id],
    queryFn: () => getPost(id),
  });

  const { mutate: editPostMutation } = useMutation({
    mutationKey: ["edit"],
    mutationFn: updatePost,
    onSuccess: () => router.push("/post"),
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const updateData = { title, content };
    console.log("updatedata", updateData);

    editPostMutation({ id, updateData });
  };
  useEffect(() => {
    if (PostData) {
      const post = PostData.data[0];

      setTitle(post.title);
      setContent(post.content);
    }
  }, [PostData]);
  return (
    <div className="mt-28 px-4 sm:px-6 md:px-8">
      <form
        className="max-w-lg mx-auto bg-white rounded-lg shadow-lg p-8 space-y-6"
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl font-semibold text-gray-800 text-center">
          Edit Post
        </h2>

        <div>
          <label
            htmlFor="title"
            className="block text-sm font-medium text-gray-700"
          >
            Post Title
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="mt-2 w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 "
            placeholder="Enter post title"
            required
          />
        </div>

        <div>
          <label
            htmlFor="content"
            className="block text-sm font-medium text-gray-700"
          >
            Post Content
          </label>
          <textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="mt-2 w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 "
            placeholder="Write the content here"
            rows="5"
            required
          />
        </div>

        <div>
          <button
            type="submit"
            className="w-full py-3 bg-[#206088] text-white rounded-lg hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300 transition duration-200"
          >
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
}
