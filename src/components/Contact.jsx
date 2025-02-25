import React from 'react';

const Contact = () => {
    return (
        <div name="contact" className='w-full bg-gradient-to-b from-gray-900 to-gray-800 p-4 text-white'>
            <div className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full mt-11'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-teal-600 '>Contact</p>
                    <p className='py-6'>Submit the form below to get in touch with me</p>
                </div>
                <div className='flex justify-center items-center'>
                    <form
                        action="https://getform.io/f/agdppmqb"
                        method='POST'
                        className='flex flex-col w-full md:w-1/2 space-y-4 mt-11'
                    >
                        <input
                            type="text"
                            name="name"
                            placeholder='Enter your name'
                            className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none border-green-500'
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder='Enter your email'
                            className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none border-green-500'
                        />
                        <textarea
                            name="message"
                            rows="5"
                            placeholder='Enter your message'
                            className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none border-green-500'
                        />
                        <button className='text-white bg-gradient-to-r from-green-500 to-teal-500 px-6 py-3 mx-auto rounded-md hover:scale-110 duration-300'>
                            Let's Talk
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;