'use client';
import axios from "@/app/provider/api.provider";

import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import ProgramCard from "@/adminComponents/program/programCard";
interface programProps {
    name?: string,
    description?: string,
    image?:string

}
export default function Program() {

  const getPrograms = async () => {
    const programResponse = await axios.get("/faculties/courses");
    return programResponse.data.data;
  };

  const { data: programs } = useQuery({
    queryKey: ['programs'],
    queryFn: getPrograms,
  });

  
  const totalPrograms = programs?.length || 0;
  return (
    <div className="bg-gray-100 min-h-screen py-6 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="flex justify-between items-center mb-6">
                    <h1 className="text-3xl font-semibold text-gray-900">Manage Courses</h1>

                    <button
                        
                        className="bg-blue-600 text-white py-2 px-4 rounded-lg flex items-center space-x-2 hover:bg-blue-700 focus:outline-none"
                    >
                        <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
                        </svg>
                        <span>Add New Course</span>
                    </button>
                </div>

               

                
                <div className="overflow-x-auto bg-white shadow-md rounded-lg">
                    <table className="min-w-full table-auto">
                        <thead>
                            <tr className="bg-gray-200 text-gray-700">
                                <th className="py-3 px-6 text-left">Course Name</th>
                              <th className="py-3 px-6 text-left">Description</th>
                              <th className="py-3 px-6 text-left">Image</th> 

                                <th className="py-3 px-6 text-left">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {programs?.map(program => (
                                <tr key={program.id} className="border-b hover:bg-gray-100">
                                    <td className="py-3 px-6">{program.name}</td>
                                    <td className="py-3 px-6">{program.description}</td>
                                    <td className="py-3 px-6">
                                        {program.image ? (
                                            <img src={program.image} alt={program.name} className="w-16 h-16 object-cover rounded" />
                                        ) : (
                                            <span>No Image</span>
                                        )}
                                    </td>
                                    <td className="py-3 px-6 flex space-x-4">
                                        
                                        <button
                                            className="text-blue-600 hover:text-blue-800"
                                            onClick={() => alert('Edit Course')}
                                        >
                                            Edit
                                        </button>

                                        
                                        <button
                                            className="text-red-600 hover:text-red-800"
                                            onClick={() => alert('Delete Course')}
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            
        </div>
    
  );
}
