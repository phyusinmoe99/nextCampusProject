
const getUser = () => {
    const auth = localStorage.getItem("auth");
    if (auth) {
        const parseAuth = JSON.parse(auth);
        return parseAuth;
    }
};
export default function ProfileCard() {
    return (
        <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg max-w-xs mx-auto mt-10">
            {/* Profile Image */}
            <img
                className="w-32 h-32 mb-4 rounded-full border-4 border-[#EF9B11] shadow-xl"
                src="/docs/images/people/profile-picture-3.jpg"
                alt={getUser().userData.name}
            />
            
           
            <h5 className="text-2xl font-semibold text-gray-800 mb-2">{ getUser().userData.name }</h5>        
            <span className="text-sm text-gray-600 dark:text-gray-400">{ getUser().userData.email}</span>
            <span className="text-sm text-gray-600 dark:text-gray-400">{ getUser().userData.role}</span>

            {/* Edit Button */}
            {/* <div className="mt-6">
                <a
                    href="#"
                    className="inline-flex items-center px-6 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 transition duration-200"
                >
                    Edit Profile
                </a>
            </div> */}
        </div>
    );
}
