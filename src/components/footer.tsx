import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser,faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faDiscord, faViber  } from "@fortawesome/free-brands-svg-icons";
export default function Footer() {
    return (
        <footer className="bg-gray-900">
            <div className="mx-auto w-full max-w-screen-xl">
                <div className="grid grid-cols-3 gap-6 px-4 py-6 lg:py-8 ">
                    <div>
                        <h2 className="mb-6 text-sm font-semibold text-gray-500 uppercase dark:text-white">
                            Company
                        </h2>
                        <ul className="text-gray-500 dark:text-gray-400 font-medium">
                            <li className="mb-4">
                                <a href="#" className=" hover:underline">
                                    About
                                </a>
                            </li>

                            <li className="mb-4">
                                <a href="#" className="hover:underline">
                                    Blog
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="mb-6 text-sm font-semibold text-gray-500 uppercase dark:text-white">
                            Help center
                        </h2>
                        <ul className="text-gray-500 dark:text-gray-400 font-medium">
                            <li className="mb-4">
                                <a href="#" className="hover:underline">
                                    Discord Server
                                </a>
                            </li>
                            <li className="mb-4">
                                <a href="#" className="hover:underline">
                                    Twitter
                                </a>
                            </li>
                            <li className="mb-4">
                                <a href="#" className="hover:underline">
                                    Facebook
                                </a>
                            </li>
                            <li className="mb-4">
                                <a href="#" className="hover:underline">
                                    Contact Us
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="mb-6 text-sm font-semibold text-gray-500 uppercase dark:text-white">
                            Legal
                        </h2>
                        <ul className="text-gray-500 dark:text-gray-400 font-medium">
                            <li className="mb-4">
                                <a href="#" className="hover:underline">
                                    Privacy Policy
                                </a>
                            </li>
                            <li className="mb-4">
                                <a href="#" className="hover:underline">
                                    Licensing
                                </a>
                            </li>
                            <li className="mb-4">
                                <a href="#" className="hover:underline">
                                    Terms &amp; Conditions
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="px-4 py-6 bg-gray-700 md:flex md:items-center md:justify-between">
                    <span className="text-sm text-gray-500 dark:text-gray-300 sm:text-center">
                        © 2024 <a href="https://flowbite.com/">Talent</a>. All Rights
                        Reserved.
                    </span>
                    <div className="flex mt-4 sm:justify-center md:mt-0 space-x-5 rtl:space-x-reverse">
                        <FontAwesomeIcon
                            icon={faFacebook}
                            className="w-5 h-5 text-gray-400 hover:text-gray-900"
                        />
                        <FontAwesomeIcon
                            icon={faDiscord}
                            className="w-5 h-5 text-gray-400 hover:text-gray-900"
                        />
                        <FontAwesomeIcon
                            icon={faViber}
                            className="w-5 h-5 text-gray-400 hover:text-gray-900"
                        />
                        <FontAwesomeIcon
                            icon={faEnvelope}
                            className="w-5 h-5 text-gray-400 hover:text-gray-900"
                        />



                    </div>
                </div>
            </div>
        </footer>
    );
}
