import ProjectCard from "./ProjectCard";

const ProjectList = ({ list }) => {
    return (
        <div>
            {list.map((project) => {
                return <ProjectCard name={project.name} link={project.link} img={project.img} desc={project.desc} />
            })}
        </div>
    );
};

export default ProjectList;