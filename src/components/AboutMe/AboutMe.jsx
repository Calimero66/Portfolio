import React from 'react';
import './AboutMe.css';

function AboutMe() {
    


    return (
        <>
            <div className='scroll-down'>
            
            </div>
            <div className='absolute z-10 text-xs cursor-pointer bottom-[-90px] left-[655px] h-[25px] animate-pulse'>Scroll</div>
            <br/>
            <div className='flex flex-col items-center justify-center w-11/12 lg:w-3/6 py-14' id='mainDiv'>
                <h3 className='text-5xl'>
                    .about(<span className="text-primary">"me"</span>)
                </h3>
            </div>
            <div className="z-10 flex flex-col gap-4 mt-24 text-justify" id='secondDiv'>
                <p style={{opacity: 0.5}}>I started web development when I was 14 and my first project was a music website where I hosted music projects I made with a friend mine.
                    (Stormix was my "artist" name)</p>
                <p style={{opacity: 0.5}}>Fast-forward a few years, I became obsessed with web development, and started my journey as a freelance software developer.
                    Since then, I"ve been assisting clients all over the globe in making their concepts a reality.</p>
                <p style={{opacity: 0.5}}>I moved to France over 4 years ago, to pursue an engineering degree in both software engineering and robotics at L'École Centrale de Nantes.
                    During my time there, I worked on a few projects, ranging from small CRUD apps to full fledged web applications.
                        In addition, I worked part time as a freelance developer for the school's Junior Enterprise.</p>
                <p style={{opacity: 0.5}}>During my internships and my last year, I started a full-time job working as the lead developer for a Belgian startup known as Yogalive.
                    And in few months, we managed to build a full class booking and video on demand platform, along with mobile apps for both iOS and Android.
                        I handled the entire development process, from the initial design implementation to the deployment of the final product.</p>
                <p style={{opacity: 0.5}}>Unfortunately, towards the end of december 2021, Yogalive decided to shut down the company and I switched to a new job.
                    I'm currently working as a full stack software engineer for a company known as Metamaze,
                        where I'm part of the team in charge of maintaining and developing the company's adaptive ADP platform.</p>
                <ul className='gap-4 px-4 list-disc columns-2 text-start' style={{}}>
                    <li>Python</li>
                    <li>JavaScript</li>
                    <li>TypeScript</li>
                    <li>React</li>
                    <li>Angular</li>
                    <li>PHP</li>
                    <li>Laravel</li>
                    <li>SQL / NO SQL</li>
                    <li>Lua</li>
                </ul>
            </div>
        </>
    )
}

export default AboutMe;

