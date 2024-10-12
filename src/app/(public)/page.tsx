"use client";
import axios from "@/app/provider/api.provider";
import { useMutation, useQuery } from "@tanstack/react-query";
import EventsCard from "../../components/eventsCard";
import ProgramsCard from "../../components/programsCard";
import InstructorsCard from "../../components/instructorsCard";

export default function HomePage() {
  const events = async () => {
    const response = await axios.get("/event-posts");
    return response.data.data;
  };

  const programs = async () => {
    const programResponse = await axios.get("/faculties/courses");
    console.log(programResponse.data.data);
    return programResponse.data.data;
  };

  const instructors = async () => {
    const instructorResponse = await axios.get("/teachers");
    return instructorResponse.data.data;
  };

  const { data: allEventsData } = useQuery({
    queryKey: ["allEvents"],
    queryFn: events,
  });

  const { data: allProgramsData } = useQuery({
    queryKey: ["allPrograms"],
    queryFn: programs,
  });

  const { data: allInstructorsData } = useQuery({
    queryKey: ["allInstructors"],
    queryFn: instructors,
  });

  return (
    <div className="container mx-auto pt-28">
      {/* Events */}
      <div className="" id="events">
        <h1 className="text-3xl font-semibold drop-shadow-md relative">
          Be There <span className="text-[#206088]">Be Involved</span>
          <span className="absolute left-0 bottom-[-2] block h-[4px] w-[64px] bg-yellow-400 clip-path-polygon"></span>

        </h1>
        <EventsCard events={allEventsData} />
      </div>
      {/* Programs */}
      <div className="mt-20" id="programs">
        <h1 className="text-3xl font-semibold my-8 drop-shadow-md">
          Invest in Yourself –{" "}
          <span className="text-[#206088]">
            Start Learning with Our Proven Programs!
          </span>{" "}
          <span className="absolute left-0 bottom-[-2] block h-[4px] w-[144px] bg-yellow-400 clip-path-polygon"></span>
        </h1>
        <ProgramsCard programs={allProgramsData} />
      </div>
      {/* Instructors */}
      <div className="mt-20" id="instructors">
        <h1 className="text-3xl font-semibold my-8 drop-shadow-md">
          Inspiring the Future:{" "}
          <span className="text-[#206088]">Meet Our Instructors</span>
          <span className="absolute left-0 bottom-[-2] block h-[4px] w-[124px] bg-yellow-400 clip-path-polygon"></span>
        </h1>
        <InstructorsCard instructors={allInstructorsData} />
      </div>

      {/* about us */}
      <div className="mt-20" id="about">
        <h1 className="text-3xl font-semibold my-8 drop-shadow-md">
        Building the Future Together:
          
          <span className="absolute left-0 bottom-[-2] block h-[4px] w-[64px] bg-yellow-400 clip-path-polygon"></span>
        </h1>

        <div className="flex gap-8 items-center py-4 px-4 mx-auto max-w-screen-xl">
          <img className="w-1/2" src="/pic1.jpg" alt="image" />

          <div className="mt-4 md:mt-0">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              Let's create more tools and ideas that brings us together.
            </h2>
            <p className="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400">
              Talent helps you connect with friends and communities of people
              who share your interests. Connecting with your friends and family
              as well as discovering new ones is easy with features like Groups.
            </p>
          </div>
        </div>
        <div className="flex gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl">
          <div className="mt-4 md:mt-0">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              Let's create more tools and ideas that brings us together.
            </h2>
            <p className="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400">
              Talent helps you connect with friends and communities of people
              who share your interests. Connecting with your friends and family
              as well as discovering new ones is easy with features like Groups.
            </p>
          </div>
          <img className="w-1/2" src="/pic1.jpg" alt="image" />
        </div>
      </div>
    </div>
  );
}
