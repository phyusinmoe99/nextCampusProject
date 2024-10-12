'use client'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Dropdown } from "flowbite-react";
import Link from "next/link";
import axios from "@/app/provider/api.provider";
import { faTrash, faXmarkCircle } from "@fortawesome/free-solid-svg-icons";
import { useMutation, useQueryClient } from "@tanstack/react-query";

interface commentProps {
    id?: string,
    comment?: string,
    commentCreatedId?: string
    created_by?: string,
    created_at?: string

}
const getAuthId = () => {
    const auth = localStorage.getItem("auth");
    const parseAuth = JSON.parse(auth);
    return parseAuth.userData.id;
};
export default function CommentsCard({ comments, post_id, commentBlank }: { comments: commentProps, post_id: string, commentBlank: () => void }) {
    const { id, comment, created_by, created_at, commentCreatedId } = comments;

    const queryClient = useQueryClient()


    const deleteComment = async (id: string) => {
        console.log('here');
        console.log(id);
        const response = await axios.delete(`commentD/${id}/destory`);
        return response;
    }

    const { mutate: deleteCommentMutation } = useMutation({
        mutationKey: ['deleteComment'],
        mutationFn: deleteComment,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["post"] });
            
        }
    })
    const handleDelete = () => {
        deleteCommentMutation(id)
    }
    return (

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
                        {(commentCreatedId === getAuthId() || Number(getAuthId()) === 1) && (
                            <button className="text-gray-500 text-xl"
                                onClick={handleDelete}>
                                <FontAwesomeIcon
                                    icon={faXmarkCircle}
                                    className="text-red-700 w-4 h-4"
                                />
                            </button>
                        )}

                    </div>
                    <p className="text-gray-400 text-sm">{created_at}</p>

                </div>
            </div>
            <p className="-mt-4 text-gray-500">{comment}</p>
        </div>
    )

}