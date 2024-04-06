import React from 'react';
// import img from '../../icons/calimhappy.
const Intro = () => {
    return (
            <section className=" relative h-screen max-w-[955px] mx-auto overflow-hidden " style={{ height: 'calc(100vh - 4rem)' }}>
                <div className="flex flex-col justify-center h-screen p-8 md:text-6xl text-2xl font-bold ">
                    <section className="text-base font-thin">
                        <span className='select-none text-blue-600' disabled>_</span>
                        Hi
                    </section>
                        <p>
                            <span className='text-[#f4e1b3] '>I'm </span>
                            <span className="text-blue-500 ">Hamza Aboulmaali</span>  
                        </p>
                        <span className="text-base font-thin">I'm a full stack developer specialized in web technologies<br/>
                            with a huge passion for automation and DevOps.<br/>
                            I'm passionate about software engineering,<br/>
                            and everything in-between.</span>
                </div>
            </section>
            
    )
}
export default Intro;
