import React from 'react';

const ProjectCard = ({project}) => {
    return (
        <div className="w-1/3 px-3">
            <div className="mb-3">
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQN-hhDoVg0jqvlJ1IsYD4iBYVZn0Ax1t23yg&usqp=CAU"
                    className="w-full" alt="img"/>
                <h5 className="uppercase text-lg">{project.title}</h5>
                <ul>
                    <li>{project.dateStart} - {project.dateEnd}</li>
                    <li>{project.manager}</li>
                    <li>{project.administrator}</li>
                </ul>
            </div>
        </div>
    );
};

export default ProjectCard;