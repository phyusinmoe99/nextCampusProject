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
    category_id?: number | null;
    user_id?: string;
    type?: string;
}

export default function PostCreate() {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [category, setCategory] = useState<number | null>(null);
    const [categoryName, setCategoryName] = useState('');
    const [type, setType] = useState<string | null>(null);
    const [image, setImage] = useState<File | null>(null);
    const [imagePreview, setImagePreview] = useState<string | null>(null);
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

    const createPost = async ({
        title,
        content,
        image,
        category_id,
        type,
    }: postProps) => {
        const formData = new FormData();
        formData.append("title", title);
        formData.append("content", content);
        formData.append("category_id", category_id);

        if (type) {
            formData.append("type", type);
        }

        if (image && image instanceof File) {

            formData.append("image", image);
        } else {
        }

        const response = await axios.post("/posts", formData).catch(res => console.log(res, "........................ddddddddddddddddddddddddddd")); 
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
  
        setImage(file);
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreview(reader.result as string);
            };
            reader.readAsDataURL(file);
        } else {
            setImagePreview(null);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        createPostMutation({
            title,
            content,
            image,
            category_id: category,
            type,
        });
    };

    return (
        <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-lg mt-28">
            <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
                Create Post
            </h1>

            {isError && (
                <div className="max-w-sm mx-auto bg-red-50 border border-red-400 text-red-700 rounded-lg text-center py-3 mb-4">
                    {error}
                </div>
            )}

            <form className="space-y-6" onSubmit={handleSubmit}>
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
                        className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none dark:bg-gray-800 dark:border-gray-600 dark:text-white"
                        placeholder="Enter title"
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
                        className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        placeholder="Write the content of your post"
                        rows="5"
                        required
                    />
                </div>

                <div className="flex justify-between items-center">
                    <div>
                        <label
                            htmlFor="category"
                            className="block text-sm font-medium text-gray-700 mb-2"
                        >
                            Post Category
                        </label>
                        <Dropdown inline label={categoryName ? categoryName : 'Select Category'} >
                            {allCategory?.map((category, key) => (
                                <Dropdown.Item key={key}>
                                    <button
                                        onClick={() =>{
                                            setCategory(parseInt(category.id, 10));
                                            setCategoryName(category.name);

                                        }
                                        }
                                        className="block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                    >
                                        {category.name}
                                    </button>
                                </Dropdown.Item>
                            ))}
                        </Dropdown>
                    </div>

                    {role === "admin" && (
                        <div>
                            <label
                                htmlFor="type"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Post Type
                            </label>
                            <select
                                id="type"
                                value={type}
                                onChange={(e) => setType(e.target.value)}
                                className="w-full py-2 px-4 mt-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none "
                                required
                            >
                                <option value="" disabled>
                                    Select Type
                                </option>
                                <option value="event">Event</option>
                                <option value="normal">Normal</option>
                            </select>
                        </div>
                    )}
                </div>

                <div>
                    <label
                        htmlFor="image"
                        className="block text-sm font-medium text-gray-700"
                    >
                        Upload Image
                    </label>
                    <input
                        type="file"
                        name="image"
                        id="image"
                        onChange={handleImageChange}
                        className="mt-2 text-sm text-gray-500 file:bg-blue-50 file:border file:border-blue-500 file:py-2 file:px-4 file:rounded-lg focus:outline-none"
                    />
                    {imagePreview && (
                        <div className="mt-4">
                            <img
                                src={imagePreview}
                                alt="Image Preview"
                                className="max-w-full h-auto rounded-lg shadow-md"
                            />
                        </div>
                    )}
                </div>

                <button
                    type="submit"
                    className="w-full py-3 bg-[#206088] text-white rounded-lg hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-blue-300"
                >
                    Create Post
                </button>
            </form>
        </div>
    );
}
