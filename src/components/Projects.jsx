import React from "react";

// Function that returns an array of project objects
const ProjectInfo = () => [
    {
        title: "Front End Dashboard",
        description:
            "Developed a responsive front-end dashboard utilizing HTML and CSS. The design adjusts to various screen sizes for optimal viewing. Project available on GitHub.",
        github: "https://github.com/CodingGenius14/Front-End-Summary-Challenge",
    },
    {
        title: "To-Do-List",
        description:
            "Created a To-Do List application with features to add and manage tasks. Implemented using HTML, CSS, and JavaScript for interactive functionality. View the project on GitHub.",
        github: "https://github.com/CodingGenius14/To-Do-List",
    },
    {
        title: "Multi Regression Analysis",
        description:
            "Developed a Multi Regression Model to forecast Tesla's stock prices using historical data. The model was implemented in R for accurate predictions. Explore the project on GitHub.",
        github: "https://github.com/CodingGenius14/Tesla-Multi-Regression-Analysis",
    },
];

// Card component to display project details
const Card = ({ title, description, github }) => {
    return (
        <div className="border-4 border-black rounded-lg shadow-lg overflow-hidden text-center">
            <div className="p-4">
                <h2 className="text-xl text-blue-300 text-center mb-3">
                    {title}
                </h2>
                <p className="mb-2">{description}</p>
                <a
                    href={github}
                    className="text-blue-300 font-bold"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    View Project
                </a>
            </div>
        </div>
    );
};

// Projects component that renders the list of projects
const Projects = () => {
    const projects = ProjectInfo();

    return (
        <div className="border-b-2 border-neutral-900 p-4">
            <h1 className="text-4xl my-20 text-center">Projects</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {projects.map((project, index) => (
                    <Card
                        key={index}
                        title={project.title}
                        description={project.description}
                        github={project.github} // Ensure github link is passed to Card component
                    />
                ))}
            </div>
        </div>
    );
};

export default Projects;
