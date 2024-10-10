"use client";
import axios from "@/app/provider/api.provider";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useState,useEffect } from "react";

import { useParams, useRouter } from "next/navigation";


export default function PostEdit() {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState("");
    const [error, setError] = useState('');
    
    const { id } = useParams();
    const router = useRouter();
    console.log('postid', id);
    
    const getPost = async (id: string) => {
        const responseData = await axios.get(`/posts/${id}/show`);
        console.log('postdata',responseData.data);

        return responseData.data;
    };
    
const updatePost = async ({id, updateData}) => {
        console.log('update function',updateData);
        const response = await axios.post(`/posts/${id}/update`,updateData );
        return response.data;
    }
    
    const { data:PostData,isSuccess} = useQuery({
        queryKey: ["post",id],
        queryFn: () => getPost(id),        
    });

    
    
    const { mutate: editPostMutation } = useMutation({
        mutationKey: ['edit'],
        mutationFn: updatePost,
        onSuccess : ()=> router.push('/post')
     })

    const handleSubmit = (e) => {
        e.preventDefault();
        const updateData = { title, content };
        console.log('updatedata',updateData);

        editPostMutation({id,updateData});
    }
    useEffect(() => {
        if (PostData) {
            const post = PostData.data[0];
            
            setTitle(post.title);
            setContent(post.content);
        }
    }, [PostData]);
    return (
        <div>
            <form
                className="max-w-sm mx-auto"
                onSubmit={handleSubmit}
            >
                <div className="mb-5">
                    <label
                        
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                        Post Title
                    </label>
                    <input
                        type="text"
                        id="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                        placeholder="Title"
                        required
                    />
                </div>
                <div className="mb-5">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Post Content
                    </label>
                    <input
                        type="text"
                        id="content"
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        required
                    />
                </div>

                <button
                    type="submit"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                    Edit
                </button>
            </form>

        </div>
    )
}