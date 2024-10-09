'use client';
import axios from '@/app/provider/api.provider';
import { useMutation, useQuery } from '@tanstack/react-query';

import PostCard from '../../../components/postCard';
import Link from 'next/link';



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
            <div className='max-w-screen-lg mx-auto border border-gray-500 rounded-lg p-4 flex justify-between items-center mt-8'>
                <h1 className='text-lg font-semibold'>Post your ideas, images, or updates today</h1>
                <Link href={'/post/create'} className='border rounded-xl p-2 '>Create Post</Link>

            </div>

            {

                allPostData?.map((post, key) => {
                    // console.log(post);

                    return <PostCard posts={post} key={post.id}/>
                }
                   
                )
            }
        </div>
    )
}