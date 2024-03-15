import { useState } from 'react';
import { Link } from 'react-scroll';
import logo from '../../icons/main logo.png';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        // <nav className="bg-[#282833] fixed w-full z-10">
        //     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        //         <div className="flex items-center justify-between h-16">
        //             <div className="flex items-center right-[-150px]">
        //                 <img className="object-cover relative flex h-[100px] w-[100px]" src={logo} alt="Logo" />
        //             </div>
        //             <div className="hidden md:block">
        //                 <div className="ml-10 flex items-baseline space-x-4">
        //                     <Link className="hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium" to="about" smooth={true}> &lt; about/&gt; </Link>
        //                     <Link className="hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium" to="projects" smooth={true}>&lt; projects/&gt;</Link>
        //                     <Link className="hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium" to="resume" smooth={true}>&lt; resume/&gt;</Link>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </nav>
        <div className="fixed z-50 w-full bg-[#282833] ">
            <div>
                <div className='grid items-center grid-cols-3 mx-auto px-14 py-6'>
                    

                        <img src={logo} alt="logo" className='relative object-cover flex h-10 w-[150px] mx-10 my-5'/>
                    

                    <nav className='justify-center hidden gap-4 lg:flex lg:flex-row mx-auto'>
                        <Link className="cursor-pointer text-lg no-underline hover:text-gray-500"> &lt; about/&gt; </Link>
                        <Link className="cursor-pointer text-lg no-underline hover:text-gray-500">&lt; projects/&gt;</Link>
                        <Link className="cursor-pointer text-lg no-underline hover:text-gray-500">&lt; resume/&gt;</Link>
                        {/* <Link className="m-8 cursor-pointer text-lg no-underline hover:text-gray-500">&lt;skills /&gt;</Link> */}
                    </nav>

                </div>
            </div>
        </div>
    );
}

export default Navbar;
