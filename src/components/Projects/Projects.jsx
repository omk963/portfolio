import { motion } from "motion/react";
import ProjectList from "./ProjectList";
import { projects } from '../../index';

const Projects = () => {
    return (
        <>

            <div className='w-5/6 mt-6 ml-10 text-2xl md:ml-20'>
                <h2 className='relative text-4xl font-bold tracking-widest before:absolute before:inset-0 before:animate-typewriterA before:bg-gray-100 w-max '>
                    Projects_
                </h2>
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    whileHover={{ scale: 1.1 }}
                />
                <ProjectList list={projects} />
            </div>
        </>
    );
};

export default Projects;