import React, { useRef } from 'react';
import { useForm } from "react-hook-form"
import PropTypes from 'prop-types';
import emailjs from '@emailjs/browser';


const ContactForm = (props) => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const form = useRef();

    const sendEmail = (e) => {
        emailjs.sendForm('service_xg1y5f8', 'template_gmufahf', form.current, 'AtKWZEuqjqqwp4KEw')
            .then((result) => {
                console.log(result.text);
                alert("Message sent successfully!");
                e.target.reset(); // Reset the form after successful submission
            }, (error) => {
                console.log(error.text);
                alert("Failed to send message. Please try again later.");
            });
    };

    const onSubmit = (data) => {
        console.log(data);
        emailjs.sendForm('service_itruhmd', 'template_gmufahf', form.current, 'AtKWZEuqjqqwp4KEw')
            .then((result) => {
                console.log(result.text);
                alert("Message sent successfully!");
            }, (error) => {
                console.log(error.text);
                alert("Failed to send message. Please try again later.");
            });
    };

    return (
        <form ref={form} onSubmit={handleSubmit(onSubmit)} className='flex flex-col w-5/6 m-auto'>
            <label>Name</label>
            <input className='rounded-md outline-none ring-offset-2 focus:ring focus:shadow-2xl indent-2' type="text" name="user_name" placeholder='Name' {...register('name', { required: true })} />
            {errors.name && <span className='text-sm text-blue-400'>I want to know your name please</span>}
            <br />
            <label>Email</label>
            <input className='rounded-md outline-none ring-offset-2 focus:ring focus:shadow-2xl indent-2' type="email" name="user_email" placeholder='Email' {...register('email', { required: true })} />
            {errors.email && <span className='text-sm text-blue-400'>I want to be able to reply to you</span>}
            <br />
            <label>Message</label>
            <textarea name="message" className='w-auto rounded-md outline-none h-3/4 ring-offset-2 focus:ring focus:shadow-2xl indent-2' {...register('message', { required: true })} />
            {errors.message && <span className='text-sm text-blue-400'>What did you want to tell me?</span>}
            <br />
            <input type="submit" value="Send" className='h-10 duration-200 ease-in-out delay-100 bg-blue-500 rounded-md shadow-md hover:text-3xl active:bg-blue-400 shadow-black active:shadow-inner' />
        </form>
    );
};

export default ContactForm;