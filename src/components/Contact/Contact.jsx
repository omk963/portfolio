import React from 'react';
import PropTypes from 'prop-types';
import ContactForm from './ContactForm';
import Social from './Social';

const Contact = props => {
    return (
        <div className='w-5/6 mt-6 ml-10 text-2xl md:ml-20'>
            <h2 className='relative mb-6 text-4xl font-bold tracking-widest before:absolute before:inset-0 before:animate-typewriterC before:bg-gray-100 w-max '>
                Contact_
            </h2>
            <ContactForm />
            <Social />
        </div>
    );
};

Contact.propTypes = {};

export default Contact;