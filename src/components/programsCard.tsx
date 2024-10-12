import Link from "next/link";

interface programsProps {
    id?:string,
    name?: string,
    description?: string,
    image ?: string
}
export default function ProgramsCard({ programs }: { programs: programsProps[] }) {
    
    return (
        <div className="flex justify-center gap-10">
                    {programs?.map((course, index) => (
                        <div key={index} className="bg-white w-[400px] rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105">
                            <img src={course.image} alt={course.name} className="w-full h-48 object-cover" />
                            <div className="p-4">
                                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                                    {course.name}</h3>
                                
                                <Link href={`/program/${course.id}`} className="bg-[#EF9B11] text-white py-2 px-4 rounded hover:bg-[#d89a0d]">
                                    Show Detail
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
    )
}