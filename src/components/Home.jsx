import React from 'react';
import PropTypes from 'prop-types';
import girl from '../assets/girl.svg'

const Home = props => {
    return (
        <div className='flex flex-col items-center pt-10 text-5xl md:justify-center font-face-ssn xl:flex-row'>
            <h1>Hi, I'm <span className='font-face-rg text-7xl'>Jin</span></h1>
            <div className='animate-bounce'>
                <img src={girl} alt='girl on computer' />
            </div>
        </div>
    );
};

Home.propTypes = {};

export default Home;