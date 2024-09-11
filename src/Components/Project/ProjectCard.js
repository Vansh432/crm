import React from 'react';

const ProjectCard = ({ project }) => {
    return (
        <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm mx-auto">
           
            <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
            <div className={`text-sm font-medium mb-4 ${project.statusColor}`}>
                <span className="inline-block w-2 h-2 rounded-full mr-2"></span>
                {project.status}
            </div>
            <p className="text-gray-600 text-sm mb-4">{project.description}</p>
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

export default ProjectCard;
