'use client';
import axios from '@/app/provider/api.provider';
import { useQuery } from '@tanstack/react-query';
import PostCard from '../../../components/postCard';
import Link from 'next/link';
import { useEffect } from "react";

export default function Post() {

    const getAllPosts = async () => {
        const responseData = await axios.get('/posts');
        console.log('responseData');
        return responseData.data.data;
    }

    const { data: allPostData } = useQuery({
        queryKey: ['allPost'],
        queryFn: getAllPosts,

    });


    return (
        <div>
            <div className="max-w-screen-lg mx-auto border border-gray-300 rounded-xl shadow-lg p-6 flex justify-between items-center mt-28 bg-white">
                <h1 className="text-2xl font-semibold text-gray-800 tracking-tight">
                    Post your ideas, images, or updates today
                </h1>
                <Link
                    href="/post/create"
                    className="bg-[#206088] text-white font-medium rounded-full px-6 py-3 transition duration-300 ease-in-out transform hover:bg-gray-700 hover:scale-105"
                >
                    Create Post
                </Link>
            </div>

            {
                allPostData?.map((post, key) => {
                    return <PostCard posts={post} key={post.id} />
                }
                )
            }
        </div>
    )
}