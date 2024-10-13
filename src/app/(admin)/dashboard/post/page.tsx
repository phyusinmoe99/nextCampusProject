'use client';

import axios from '@/app/provider/api.provider';
import { useQuery } from '@tanstack/react-query';
import AdminPostCard from '@/adminComponents/post/adminPostCard';



export default function Post() {
  
  const getAllPosts = async () => {
    const responseData = await axios.get('/posts');
    return responseData.data.data;  // Extract and return the data
  }
  
  const {data: allPostData, isLoading, isError, error} = useQuery({
    queryKey: ['allPostDashboard'],
    queryFn: getAllPosts,
  });
  // Loading state
  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <svg
          className="animate-spin h-10 w-10 text-blue-500"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
        </svg>
      </div>
    );
  }

  // Error state
  if (isError) {
    return (
      <div className="text-center text-red-500 py-6">
        <p>Error loading posts: {error?.message || "Something went wrong"}</p>
      </div>
    );
  }

  return (
    <div className="px-4 py-6">
      <h1 className="text-3xl font-semibold text-gray-900 mb-4">Posts</h1>

      <div className="grid grid-cols-3 s gap-6">
        {allPostData?.length === 0 ? (
          <p className="text-center text-gray-500 col-span-full">No posts available.</p>
        ) : (
          allPostData?.map((post: any) => (
            <AdminPostCard posts={post} key={post.id} />
          ))
        )}
      </div>
    </div>
  );
}
