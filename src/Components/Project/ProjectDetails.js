import React from 'react';

const ProjectDetails = ({ project, onBack }) => {
    return (
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-2xl mx-auto mt-10">
            <button 
                onClick={onBack} 
                className="text-blue-500 underline mb-4 inline-block"
            >
                Back to Projects
            </button>
            <h2 className="text-2xl font-bold mb-4">{project.title}</h2>
            <p className="text-gray-600 mb-4">{project.fullDescription}</p>
            <div className="flex justify-between text-sm text-gray-500 mb-4">
                <div>
                    <span className="block">START</span>
                    {project.startDate}
                </div>
                <div>
                    <span className="block">END</span>
                    {project.endDate}
                </div>
            </div>
            <div className="flex justify-between text-sm text-gray-500 mb-4">
                <div>
                    <span className="block">Project Coordinator</span>
                    <img src={project.coordinatorImg} alt="Coordinator" className="w-8 h-8 rounded-full" />
                </div>
                <div>
                    <span className="block">Team Leader</span>
                    <img src={project.leaderImg} alt="Leader" className="w-8 h-8 rounded-full" />
                </div>
            </div>
            <div className="relative pt-1">
                <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200">
                    <div style={{ width: `${project.progress}%` }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"></div>
                </div>
                <span className="text-gray-600 text-sm">{project.progress}%</span>
            </div>
        </div>
    );
};

export default ProjectDetails;
