'use client';
import axios from '@/app/provider/api.provider';
import { useQuery } from '@tanstack/react-query';
import AdminPostCard from '@/adminComponents/post/adminPostCard';

export default function Post() {
    const getAllPosts = async () => {
        const responseData = await axios.get('/posts');
        console.log('responseData');
        return responseData.data.data;
    }

    const { data: allPostData } = useQuery({
        queryKey: ['allPostDashboard'],
        queryFn: getAllPosts,

    });
    return (
        <div>
            <div className='grid grid-cols-3 gap-1'>
                {
                    allPostData?.map((post, key) => {
                        return <AdminPostCard posts={post} key={post.id} />
                    }
                    )
                }

            </div>



        </div>
    )
}