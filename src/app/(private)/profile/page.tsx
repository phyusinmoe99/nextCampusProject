'use client';
import axios from "@/app/provider/api.provider";
import { useMutation, useQuery } from "@tanstack/react-query";
import ProfileCard from "@/adminComponents/user/profileCard";
import PostCard from "@/components/postCard";

const getAuthID = () => {
    const auth = localStorage.getItem('auth');
    const parseAuth = JSON.parse(auth);
    return parseAuth.userData.id;
}
const id = getAuthID();


export default function Profile() {

    const getPostByUser = async () => {
        const responseData = await axios.get('user-posts');
        console.log('postdatabyuser',responseData.data.data);
    
        return responseData.data.data;
    };
    
    const { data:PostData,isSuccess} = useQuery({
        queryKey: ["postByUser"],
        queryFn:getPostByUser        
    });
    return (
        <div className="max-lg mx-auto mt-40">

            <ProfileCard />
            
            {
                PostData?.map((post, key) => {
                    return <PostCard posts={post} key={post.id}/>
                }                   
                )
            }


        </div>
    )
}