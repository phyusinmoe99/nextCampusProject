'use client';
import axios from '@/app/provider/api.provider';
import { useMutation, useQuery } from '@tanstack/react-query';
import EventsCard from '../../components/eventsCard';
import ProgramsCard from '../../components/programsCard';
import InstructorsCard from '../../components/instructorsCard';

export default function HomePage() {

    const events = async () => {
        const response = await axios.get('/event');
        // console.log(response.data.data);
        return response.data.data;
    }

    const programs = async () => {
        console.log('programs');
        const programResponse = await axios.get('/faculties/courses');
        console.log(programResponse.data.data);
        return programResponse.data.data;
    }

    const instructors = async () => {
        const instructorResponse = await axios.get('/teachers');
        return instructorResponse.data.data;
    }

    const { data: allEventsData } = useQuery({
        queryKey: ['allEvents'],
        queryFn: events
        
    });

    const { data: allProgramsData } = useQuery({
        queryKey: ['allPrograms'],
        queryFn: programs
    });

    const { data: allInstructorsData } = useQuery({
        queryKey: ['allInstructors'],
        queryFn : instructors
    })
    
    return (
        <div className="container mx-auto">
            {/* Events */}
            <div className="mt-4" id='events'>
                <h1 className="text-xl font-semibold mt-8">Be There <span className='text-[#206088]'>Be Involved</span></h1>
                <EventsCard events={allEventsData}/>
            </div>
            {/* Programs */}
            <div className='mt-8' id='programs'>
                <h1 className='text-xl font-semibold my-8'>Invest in Yourself – <span className='text-[#206088]'>Start Learning with Our Proven Programs!</span> </h1>
                <ProgramsCard programs={allProgramsData}/>
            </div>
            {/* Instructors */}
            <div className="mt-8" id='instructors'>
                <h1 className='text-xl font-semibold my-8'>Inspiring the Future: <span className='text-[#206088]'>Meet Our Instructors</span></h1>
                <InstructorsCard instructors={allInstructorsData}/>
            </div>

            

        </div>
    )
}