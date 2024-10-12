'use client';
import axios from "@/app/provider/api.provider";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";

export default function Program() {
    const { id } = useParams();

    const program = async (id: string) => {
        const programResponse = await axios.get(`faculties/courses/${id}`);
        console.log('after call', programResponse.data.data);
        return programResponse.data.data;
    };
    const { data: getProgram } = useQuery({
        queryKey: ["Program", id],
        queryFn: () => program(id),
    });

    console.log('get', getProgram);

    return (
        <div className="max-w-lg rounded overflow-hidden shadow-lg mt-40 mx-auto">
            <img className="w-full h-56 object-cover" src={getProgram?.image} alt="Sunset in the mountains" />
            <div className="p-7">
                <div className="font-bold text-xl mb-2">{getProgram?.title}</div>
                <p className="text-gray-700 text-base">
                    {getProgram?.description}
                </p>
            </div>



        </div>
    )
}