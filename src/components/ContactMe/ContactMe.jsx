import React from 'react'

function ContactMe() {

    const handleClick = () => {
        const email = 'hamza.aboulmaali99@gmail.com'; // Change to your email address if take this code as a reference for your project #Calim
        const mailtoLink = `mailto:${email}`;
    
        // Open default email client
        window.location.href = mailtoLink;
    };
    
    return (
        <div className='flex flex-col items-center w-full gap-4 my-24'>

            <h3 className='mb-6 text-5xl'>&lt; Contact /&gt;</h3> <br />

            <div className='flex flex-col justify-center w-11/12 lg:w-3/6 item-center'>
                <p className='text-center' style={{ opacity: 0.5 }}>
                    I'm constantly seeking new challenges and opportunities for personal and professional growth.
                    If you have a project or idea where my skills and expertise could be of assistance, I'd be thrilled to hear from you.
                    Please don't hesitate to reach out using the contact button below or through any of the social media links provided.
                    Let's collaborate and create something amazing together!
                </p>
                <br />
                <br />
                    <button onClick={handleClick} className="bg-transparent hover:bg-[#121217] text-[#f5ebd3] font-semibold hover:text-[#3f3f50] py-3 px-5 border border-[#f5ebd3] hover:border-transparent rounded-full mx-auto">
                        Hi!
                    </button>

                
            </div>
        </div>
    )
}

export default ContactMe

