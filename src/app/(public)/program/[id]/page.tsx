'use client';
import axios from "@/app/provider/api.provider";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";

export default function Program() {
    const { id } = useParams();

    const program = async (id: string) => {
        const programResponse = await axios.get(`faculties/courses/${id}`);
        return programResponse.data.data;
    };
    const { data: getProgram } = useQuery({
        queryKey: ["Program", id],
        queryFn: () => program(id),
    });


    return (
        <div className="bg-gray-50  py-12 px-6 mt-24">
        <div className="flex flex-col md:flex-row max-w-5xl mx-auto bg-white shadow-xl rounded-lg">
            <div className="w-full md:w-1/2 h-96 md:h-auto relative overflow-hidden rounded-l-lg">
                <img
                    src={getProgram?.image}
                    alt={getProgram?.title}
                    className="w-full h-full object-cover object-center"
                />
            </div>

            <div className="w-full md:w-1/2 p-8 space-y-6">
                <h1 className="text-4xl sm:text-5xl font-semibold text-gray-800">{getProgram?.name}</h1>
                <p className="text-gray-600 text-lg leading-relaxed">{getProgram?.description}</p>

               
            </div>
        </div>
    </div>
    )
}