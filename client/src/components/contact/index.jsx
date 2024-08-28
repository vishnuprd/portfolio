import React from "react";
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Function to handle the POST request
const postContact = async (contactData) => {
    const response = await axios.post(`${process.env.REACT_APP_API_URL}/api/contact`, contactData);
    return response.data;
};

export default function Contact() {
    // Use the useMutation hook
    const mutation = useMutation({
        mutationFn: postContact,
        onSuccess: () => {
            toast.success("Thank you for contacting me!");
            console.log('Contact added successfully!');
        },
        onError: (error) => {
            toast.error(`Error adding contact: ${error.message}`);
            console.error('Error adding contact:', error);
        }
    });

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = {
            name: e.target.name.value,
            email: e.target.email.value,
            subject: e.target.subject.value,
            message: e.target.message.value
        };

        // Trigger the mutation
        mutation.mutate(formData);
    };

    return (
        <>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-4xl ">Get In Touch</h1>
                        <p className="scroll-m-20 text-xl font-extrabold tracking-tight lg:text-xl py-6 text-nowrap ">Let's build something great together</p>
                        <span className="scroll-m-20 text-sm font-extrabold tracking-tight lg:text-sm ">Mail me </span>
                        <a href="mailto:vishnuravichandran.28@gmail.com" className="scroll-m-20 text-sm font-extrabold tracking-tight lg:text-sm link link-hover">vishnuravichandran.28@gmail.com</a>
                    </div>
                    <div className="card bg-base-100 w-full shadow-2xl">
                        <form className="card-body" onSubmit={handleSubmit}>
                            {mutation.isLoading && <p>Submitting...</p>}
                            {mutation.isError && <p>Email Id And Name is already exists</p>}
                            {mutation.isSuccess && <p>Thank you for contacting me!</p>}
                            
                            <div className="form-control">
                                <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">Send message🚀</h3>
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input
                                    name="name"
                                    type="text"
                                    placeholder="Name"
                                    className="input input-bordered"
                                    required
                                />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input
                                    name="email"
                                    type="email"
                                    placeholder="Email"
                                    className="input input-bordered"
                                    required
                                />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Subject</span>
                                </label>
                                <input
                                    name="subject"
                                    type="text"
                                    placeholder="Subject"
                                    className="input input-bordered"
                                    required
                                />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Message</span>
                                </label>
                                <textarea
                                    name="message"
                                    placeholder="Tell us more about your project 👇"
                                    className="textarea textarea-bordered textarea-md w-full max-w-xs"
                                    required
                                ></textarea>
                            </div>

                            <div className="form-control mt-6">
                                <button className="btn btn-primary" type="submit" disabled={mutation.isLoading}>
                                    {mutation.isLoading ? 'Submitting...' : 'Submit'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </>
    );
}
