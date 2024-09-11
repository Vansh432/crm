import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import ProjectDetails from './ProjectDetails';

const App = () => {
    const [selectedProject, setSelectedProject] = useState(null);

    const projects = [
        { 
            id: 1, 
            title: 'Laravel Education App Development', 
            status: 'On Going', 
            statusColor: 'text-green-500',
            description: 'Laravel is a popular PHP framework known for its elegant syntax...',
            startDate: '05 Jan 2024', 
            endDate: '10 Mar 2024',
            coordinatorImg: 'https://via.placeholder.com/32', // Replace with your image source
            leaderImg: 'https://via.placeholder.com/32', // Replace with your image source
            progress: 60,
            fullDescription: 'This project involves the development of an education application using the Laravel framework...',
        },
        { 
            id: 2, 
            title: 'Laravel Education App Development', 
            status: 'Delayed', 
            statusColor: 'text-red-500',
            description: 'Laravel is a popular PHP framework known for its elegant syntax...',
            startDate: '05 Jan 2024', 
            endDate: '16 Mar 2024',
            coordinatorImg: 'https://via.placeholder.com/32', // Replace with your image source
            leaderImg: 'https://via.placeholder.com/32', // Replace with your image source
            progress: 60,
            fullDescription: 'This project involves the development of an education application using the Laravel framework...',
        },
        { 
            id: 3, 
            title: 'Laravel Education App Development', 
            status: 'Completed', 
            statusColor: 'text-blue-500',
            description: 'Laravel is a popular PHP framework known for its elegant syntax...',
            startDate: '05 Jan 2024', 
            endDate: '10 Mar 2024',
            coordinatorImg: 'https://via.placeholder.com/32', // Replace with your image source
            leaderImg: 'https://via.placeholder.com/32', // Replace with your image source
            progress: 60,
            fullDescription: 'This project involves the development of an education application using the Laravel framework...',
        }
    ];

    const handleProjectClick = (project) => {
        setSelectedProject(project);
    };

    const handleBackToList = () => {
        setSelectedProject(null);
    };

    return (
        <div className="bg-gray-100 min-h-screen p-8">
            {selectedProject ? (
                <ProjectDetails project={selectedProject} onBack={handleBackToList} />
            ) : (
                <div className="flex justify-around">
                    {projects.map(project => (
                        <div key={project.id} onClick={() => handleProjectClick(project)}>
                            <ProjectCard project={project} />
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default App;
