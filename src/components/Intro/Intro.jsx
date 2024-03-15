import React from 'react';
// import img from '../../icons/calimhappy.png';





const Intro = () => {
    return (
        
        <div className="flex flex-col w-11/12 mx-auto my-auto lg:w-3/6 lg:m-auto">
            <section className=" relative h-screen w-screen max-w-7xl mx-auto overflow-hidden " style={{ height: 'calc(100vh - 4rem)' }}>
                <div className="flex flex-col justify-center h-screen w-screen p-8 text-6xl font-bold ">
                    <section className="text-base font-thin">
                        <span className='select-none text-blue-600' disabled>_</span>
                        Hi
                    </section>
                        <p>
                            <span className='text-[#f4e1b3]'>I'm </span>
                            <span className="text-blue-500">Hamza Aboulmaali</span>  
                        </p>
                        <span className="text-base font-thin">I'm a full stack developer specialized in web technologies<br/>
                            with a huge passion for automation and DevOps.<br/>
                            I'm passionate about software engineering,<br/>
                            and everything in-between.</span>
                </div>
                {/* <img src={img} alt="Me" className="absolute top-16 right-0 pr-4 -z-10 object-cover h-[80vh] " />             */}
            </section>
            
        </div>
    )
}
export default Intro;
