'use client';
import axios from '@/app/provider/api.provider';
import { useQuery } from '@tanstack/react-query';

export default function Event() {
    const events = async () => {
        const response = await axios.get("/event-posts");
        return response.data.data;
    };
    const { data: allEventsData } = useQuery({
        queryKey: ["allEvents"],
        queryFn: events,
    });
    return (
        <div>
            {/* {
                allEventsData?.map((event, key) => (
                    <div className="md:flex">
                        <div className="md:flex-shrink-0">
                            <img className="h-48 w-full object-cover md:w-48" src="https://randomuser.me/api/portraits/men/1.jpg" alt="Event image"/>
                        </div>
                        <div className="p-8">
                            <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Event Name</div>
                            <p className="block mt-1 text-lg leading-tight font-medium text-black">Event Description</p>
                            <p className="mt-2 text-gray-500">Event Details...</p>
                        </div>
                    </div>
                ))
            } */}

        </div>
    )
}