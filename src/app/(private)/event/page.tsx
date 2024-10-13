"use client";
import axios from "@/app/provider/api.provider";
import { useQuery } from "@tanstack/react-query";

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
    <div className="w-3/4 mx-auto mt-28">
      <h1 className="text-3xl font-extrabold text-gray-900 mb-8 relative">
              Event Highlights
              <span className="absolute left-0 bottom-[-2] block h-[4px] w-[64px] bg-yellow-400 clip-path-polygon"></span>
      </h1>
      

      {allEventsData?.map((event, key) => (
        <div className="flex flex-col justify-center mt-4">
          <div className="relative flex flex-col md:flex-row md:space-x-5  md:space-y-0 rounded-xl shadow-lg p-3 max-w-xs md:max-w-3xl mx-auto border border-white bg-white">
            <div className="w-full md:w-1/3 bg-white grid place-items-center">
              <img src={event.image} alt={event.title} className="rounded-xl" />
            </div>
            <div className="w-full md:w-2/3 bg-white flex flex-col space-y-2 p-3 ">
              <h3 className="font-black text-gray-800 md:text-3xl text-xl">
                {event.title}
              </h3>
              <p className="md:text-lg text-gray-500 text-base">
                {event.content}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
