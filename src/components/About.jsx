import React from 'react';
import Skills from './Skills/Skills';

const About = () => {
    return (
        <div className='w-5/6 ml-10 text-2xl md:ml-20'>
            <h2 className='relative text-4xl font-bold tracking-widest before:absolute before:inset-0 before:animate-typewriterA before:bg-gray-100 w-max '>
                About Me_
            </h2>
            <p className='m-6'>
                I’m a full-stack developer, driven to create <span className='emphasize'>meaningful</span> and <span className='emphasize'>impactful</span> digital experiences. I’m on a journey to bridge <span className='emphasize'>imagination</span> with <span className='emphasize'>functionality</span>.
            </p>
            <p className='m-6'>
                When I'm not coding, you can find me playing games, making plushies, and exploring new places with my partner and fur-baby.
            </p>
            <p className='m-6'>
                I believe in <span className='emphasize'>continuous</span> learning and <span className='emphasize'>improving</span> my skills, and I’m always excited about the next challenge. Check out my projects below, and feel free to get in touch if you’d like to collaborate or learn more about my work!
            </p>
            <Skills />
        </div>
    );
};

About.propTypes = {};

export default About;