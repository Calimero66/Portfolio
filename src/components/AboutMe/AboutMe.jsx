import React from 'react';

import Js from '../../logo/javascript.png';
import Laravail from '../../logo/Laravail.png';
import Lua from '../../logo/lua.png';
import MongoDB from '../../logo/MongoDB.png';
import PHP from '../../logo/PHP.png';
import Python from '../../logo/python.png';
import Reac from '../../logo/React.png';
import SQL from '../../logo/SQL.png';
import Typescript from '../../logo/typescript.png';
import Html from '../../logo/HTML.png';
import Tailwind from '../../logo/Tailwind.png';
import Docker from '../../logo/Docker.png';

function AboutMe() {



    return (

        <div className='p-8'>
            <div className=' border-2 bottom-[60px] border-[#ffffff] rounded-full h-12 w-5 z-10 absolute left-0 mx-auto right-[0px] before:content before:block before:h-[10px] before:w-[16px] before:bg-white before:rounded-full before:top-[10px] before:animate-scrollDownAnimation'>
                <br />
                <div className=' mt-4 ml-[-14px]'>Scroll</div>
            </div>
            <br/>

                {/* <div className='flex itSSems-center justify-center max-w-[955px] lg:text-[16px] py-14 mx-auto my-auto '> */}
                <div className='flex flex-col items-center w-full gap-4 my-24 '>
                    <h3 className='text-3xl lg:text-5xl'>
                    &lt; about<span className="text-primary">"me"/&gt;</span>
                    </h3>
                </div>

                <div className="z-10 flex flex-col gap-4 text-justify mx-auto my-24 max-w-[955px] " >
                    <p style={{opacity: 0.5}}>  
                    Greetings!👋 I am a full-stack developer on an exciting journey that began at the age of 20, driven by an insatiable passion for coding.
                        As a dedicated and enthusiastic individual, I have continued to nurture my skills and knowledge. ( • "Calim" or • "Calimero" is the nickname I got from my family when I was a kid ^^ .)
                    </p>
                    <p style={{opacity: 0.5}}>
                        Currently, I'm studying while also striving to meet and exceed client expectations in my professional endeavors. It's a challenging yet rewarding balance that keeps me constantly learning and growing.

                    </p>
                    <p style={{opacity: 0.5}}>
                    One aspect I truly appreciate about my career is the flexibility it offers. I am adept at seamlessly transitioning between traditional study routines and remote work environments.
                        The ability to contribute to projects from anywhere not only reflects my adaptability but also allows me to embrace the evolving landscape of modern work.
                    </p>
                    <p style={{opacity: 0.5}}>
                    As I continue to grow as a developer, I look forward to embracing new challenges, collaborating with innovative minds, and making meaningful contributions to the ever-expanding world of technology.
                        If you're looking for a passionate and versatile developer who thrives in both learning and professional settings, I'm ready to bring my skills to your next project.
                    </p>
                    
                    <span className='flex flex-wrap justify-around' >

                        <img src={Html} alt="Html" className='relative max-w-sm transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0 w-[30px] h-[30px]' />
                        <img src={Js} alt="Js" className='relative max-w-sm transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0  w-[30px] h-[30px] ' />
                        <img src={Reac} alt="Reac" className='relative max-w-sm transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0 w-[30px] h-[30px]' />
                        <img src={Typescript} alt="Typescript" className='relative max-w-sm transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0 w-[30px] h-[30px]' />
                        <img src={Tailwind} alt="Tailwind" className='relative max-w-sm transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0 w-[30px] h-[30px]' />
                        <img src={Lua} alt="Lua" className='relative max-w-sm transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0  w-[30px] h-[30px]' />
                        <img src={PHP} alt="PHP" className='relative max-w-sm transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0 w-[30px] h-[30px]' />
                        <img src={Laravail} alt="Laravail" className='relative max-w-sm transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0  w-[30px] h-[30px]'  />
                        <img src={Python} alt="Python" className='relative max-w-sm transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0 w-[30px] h-[30px]' />
                        <img src={MongoDB} alt="MongoDB" className='relative max-w-sm transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0 w-[30px] h-[30px]' />
                        <img src={SQL} alt="SQL" className='relative max-w-sm transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0 w-[30px] h-[30px]' />
                        <img src={Docker} alt="Docker" className='relative max-w-sm transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0 w-[30px] h-[30px]' />
                    </span>

                    <p style={{opacity: 0.5}}>
                        Let's connect and explore the possibilities of creating something remarkable! 🚀
                    </p>
                </div>
        </div>
    )
}

export default AboutMe;

