interface instructorsProps {
    name?: string,
    role?: string
}
export default function InstructorsCard({instructors} : {instructors:instructorsProps[]}) {
    return (
        <div className="grid justify-between grid-cols-4 gap-2">
                        {instructors?.map((instructor, index) => (
                            <div key={index} className="w-[250px] h-[250px] bg-transparent cursor-pointer group perspective rounded-lg overflow-hidden">
                                <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000">
                                    <div className="absolute backface-hidden border-2 w-full h-full">
                                        <img src="https://flowbite.com/docs/images/people/profile-picture-2.jpg" alt={instructor.name} className="w-full h-full object-cover rounded-lg" />
                                    </div>
                                    <div className="absolute my-rotate-y-180 backface-hidden w-full h-full bg-gray-100 overflow-hidden">
                                        <div className="text-center flex flex-col items-center justify-center h-full text-[#206088] px-2 pb-10">
                                            <h1 className="text-xl font-semibold">{instructor.name}</h1>
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
    )
}