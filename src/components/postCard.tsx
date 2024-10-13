import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faClock } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { Dropdown } from "flowbite-react";
import { useState } from "react";
import Delete from "@/template/postDelete/Delete";

export interface postProps {
  id?: string;
  title?: string;
  content?: string;
  image?: string;
  created_by?: string;
  date?: string;
  comments?: string;
  user_id?: string;
}

const getAuthId = () => {
  const auth = localStorage.getItem("auth");
  const parseAuth = JSON.parse(auth);
  return parseAuth.userData.id;
};

export default function PostCard({ posts }: { posts: postProps }) {
  const { id, title, content, image, created_by, date, comments, user_id } =
    posts;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  

  return (
    <div className="max-w-screen-lg mx-auto p-5 sm:p-10 md:p-16">
      <div className="mb-10 rounded overflow-hidden flex flex-col mx-auto">
        <address className="flex justify-between items-center mb-6 not-italic">
          <div className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white">
            {/* UserImage */}
            <img
              className="mr-4 w-16 h-16 rounded-full"
              src="https://flowbite.com/docs/images/people/profile-picture-2.jpg"
              alt="Jese Leos"
            />
            <div>
              <div className="flex flex-row items-center hover:text-indigo-600">
                <FontAwesomeIcon
                  icon={faUser}
                  className="text-[#206088] w-4 h-4"
                />
                <span className="ml-1">{created_by}</span>
              </div>

              <span className="mr-3 flex flex-row items-center">
                <FontAwesomeIcon
                  icon={faClock}
                  className="text-[#206088] w-4 h-4"
                />
                <span className="ml-1">{date}</span>
              </span>
            </div>
          </div>
          {(user_id === getAuthId() || Number(getAuthId()) === 1) && (
            <div className="flex justify-end px-4 pt-4 z-50">
              <Dropdown inline>
                <Dropdown.Item>
                  <Link
                    href={`/post/${id}/edit`}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Edit
                  </Link>
                </Dropdown.Item>
                <Dropdown.Item>
                  <button
                    onClick={openModal}
                    className="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
                  >
                    Delete
                  </button>
                </Dropdown.Item>
              </Dropdown>
            </div>
          )}
        </address>

        <h1 className="text-xl sm:text-4xl font-semibold inline-block hover:text-indigo-600 transition duration-500 ease-in-out inline-block mb-2">
          {title}
        </h1>
        {/* contentImage */}
        <div className="relative">
          <div className="w-full h-96 overflow-hidden">
            <img
              className="w-full h-full object-cover"
              // src="https://images.pexels.com/photos/5120892/pexels-photo-5120892.jpeg?auto=compress&amp;cs=tinysrgb&amp;fit=crop&amp;h=625.0&amp;sharp=10&amp;w=1500"
              src={image}
              alt="Scenic view of Machu Picchu in Peru"
            />
          </div>
        </div>

        <p className="text-gray-700 py-5 text-base leading-relaxed">
          {content}
        </p>

        <hr />
      </div>

      <button
        type="button"
        name="commentBtn"
        className="w-full flex align-center border border-gray-700 rounded-lg p-4"
      >
        <Link href={`/comment/${id}`}>
          <span>{comments?.length}</span>
          <span className="ml-2">Comment</span>
        </Link>
      </button>

      <Delete isModalOpen={isModalOpen} closeModal={closeModal} postId={id} />
    </div>
  );
}
