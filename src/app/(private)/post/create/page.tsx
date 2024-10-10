"use client";
import axios from "@/app/provider/api.provider";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Dropdown } from "flowbite-react";

interface postProps {
    title?: string;
    content?: string;
    image?: File | null;
    category_id?: string;
    user_id?: string;
}

export default function PostCreate() {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [category, setCategory] = useState("");
    const [image, setImage] = useState<File | null>(null);
    const [error, setError] = useState("");
    const [role, setRole] = useState<string | null>(null);

    const router = useRouter();


    const getCategory = async () => {
        const responseData = await axios.get("/categories");
        return responseData.data.data;
    };

    const { data: allCategory } = useQuery({
        queryKey: ["allCategory"],
        queryFn: getCategory,
    });
    const getUserId = () => {
        const auth = localStorage.getItem("auth");
        if (auth) {
            const parseAuth = JSON.parse(auth);
            return parseAuth.userData.id.toString();
        }
    };
    useEffect(() => {
        const auth = localStorage.getItem("auth");
        if (auth) {
            const parseAuth = JSON.parse(auth);
            setRole(parseAuth.userData.role);
        }
    }, []);

    console.log('role', role);

    const createPost = async ({
        title,
        content,
        image,
        category_id,
        user_id,
    }: postProps) => {
        const formData = new FormData();
        formData.append("title", title);
        formData.append("content", content);
        formData.append("category_id", category_id);
        formData.append("user_id", user_id);
        if (image && image instanceof File) {
            console.log("Image is valid:", image); // Check the image object

            formData.append("image", image);
        } else {
            console.log("No valid image file selected.");
        }

        const response = await axios.post("/posts", formData);
        console.log("after");
        return response;
    };

    const { mutate: createPostMutation, isError } = useMutation({
        mutationKey: ["createPost"],
        mutationFn: createPost,
        onSuccess: () => {
            router.push("/post");
        },
        onError: (error: any) => {
            const errorMessage = error.response?.data?.message;
            setError(errorMessage);
        },
    });
    const handleImageChange = (e) => {
        const file = e.target.files ? e.target.files[0] : null;
        console.log("File selected:", file);
        setImage(file);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        createPostMutation({
            title,
            content,
            image,
            category_id: category,
            user_id: getUserId(),
        });
    };


    return (
        <div>
            <h1 className="text-xl text-center font-bold my-8">Create Post</h1>

            {isError && (
                <div className="max-w-sm mx-auto border border-gray-400 rounded-lg text-center text-red-700 py-2 mb-4">
                    {error}
                </div>
            )}

            <form className="max-w-sm mx-auto" onSubmit={handleSubmit}>
                <div className="mb-5">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
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

                {role === 'admin' && allCategory?.length > 0 && (
                    <div className="mb-5 flex justify-between">
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                            Post Category
                        </label>

                        <Dropdown>
                            {allCategory?.map((category, key) => (
                                <Dropdown.Item key={key}>
                                    <button
                                        onClick={() => setCategory(category.id)}
                                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                    >
                                        {category.name}
                                    </button>
                                </Dropdown.Item>
                            ))}
                        </Dropdown>
                    </div>
                )}



                <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Upload Image
                    </label>
                    <input
                        type="file"
                        name="image"
                        id="image"
                        onChange={handleImageChange}
                    />
                </div>

                <button
                    type="submit"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                    Create
                </button>
            </form >
        </div >
    );
}
