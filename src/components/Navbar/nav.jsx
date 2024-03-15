import React from 'react'

function nav() {
  return (
    <div>
       const [isOpen, setIsOpen] = useState(false);

const toggleMenu = () => {
    setIsOpen(!isOpen);
};

return (
    
    <nav className="bg-[#282833]">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
                <div className="flex-shrink-0">
                    <span className="text-white">Logo</span>
                </div>
                <div className="hidden md:block">
                    <div className="ml-10 flex items-baseline space-x-4">
                        <Link to="/about" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                            &lt; about/&gt;
                        </Link>
                        <Link to="/projects" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                            &lt; projects/&gt;
                        </Link>
                        <Link to="/resume" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                            &lt; resume/&gt;
                        </Link>
                    </div>
                </div>
            </div>
            <div className="-mr-2 flex md:hidden">
                <button onClick={toggleMenu} className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white">
                    <svg className={`${isOpen ? 'hidden' : 'block'} h-6 w-6`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                    <svg className={`${isOpen ? 'block' : 'hidden'} h-6 w-6`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>
        </div>
    </div>

    <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/about" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                &lt; about/&gt;
            </Link>
            <Link to="/projects" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                &lt; projects/&gt;
            </Link>
            <Link to="/resume" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                &lt; resume/&gt;
            </Link>
        </div>
    </div>
</nav>







    // <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
    //     <h1 className='w-full text-3xl font-bold text-purple-800'>.Calim()</h1>
    //     <div className='flex'>
    //         <Link className="p-4"> &lt; about/&gt; </Link>
    //         <Link className="p-4">&lt; projects/&gt;</Link>
    //         <Link className="p-4">&lt; resume/&gt;</Link>
    //     </div>
    // </div>



    // <div className=' w-full'>
    //     <nav className=''>
    //         <div className=' flex items-center justify-around'>

    //             <div className='font-bold cursor-pointer'>

    //                 <img src={logo} alt="logo" className='object-cover relative flex h-[100px] w-[100px] ' />

    //             </div>
    //             <div>
    //                 <div className='lg:flex items-center gap-3 hidden'>
    //                     <div className='cursor-pointer'>
    //                         <Link to="about" spy={true} smooth={true} duration={500} className="block m-8 cursor-pointer no-underline hover:text-gray-500 py-2 px-4"> &lt; about/&gt; </Link>
    //                     </div>
    //                     <div className='cursor-pointer'>
    //                         <Link to="projects" spy={true} smooth={true} duration={500} className="block m-8 cursor-pointer no-underline hover:text-gray-500 py-2 px-4">&lt; projects/&gt;</Link>
    //                     </div>
    //                     <div className='cursor-pointer'>
    //                         <Link to="resume" spy={true} smooth={true} duration={500} className="block m-8 cursor-pointer no-underline hover:text-gray-500 py-2 px-4">&lt; resume/&gt;</Link>
    //                     </div>
    //                 </div>
    //             </div>

    //             <div className=' hidden lg:flex'>
    //                 <ImBubble className='text-3xl cursor-pointer text-white' />
    //             </div>
    //         </div>

    //     </nav>

    // </div>
    
    
    
        <div className="fixed z-50 w-full bg-[#282833]  ">
            <div>
                <div className='grid items-center grid-cols-3 mx-auto '>
                    <div>
                        <img src={logo} alt="logo" className='object-cover relative flex h-[100px] w-[100px] ' />

                    </div>
                    <div className='justify-center hidden gap-4 lg:flex lg:flex-row'>
                        <Link className="m-8 cursor-pointer text-lg no-underline hover:text-gray-500"> &lt; about/&gt; </Link>
                        <Link className="m-8 cursor-pointer text-lg no-underline hover:text-gray-500">&lt; projects/&gt;</Link>
                        <Link className="m-8 cursor-pointer text-lg no-underline hover:text-gray-500">&lt; resume/&gt;</Link>
                        {/* <Link className="m-8 cursor-pointer text-lg no-underline hover:text-gray-500">&lt;skills /&gt;</Link> */}
                    </div>

                </div>
            </div>
        </div>
    
    </div>
  )
}

export default nav
