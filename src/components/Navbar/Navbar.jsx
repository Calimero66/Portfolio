import { Link } from 'react-scroll';
import logo from '../../icons/main logo.png';

const Navbar = () => {

    return (

        <div className="flex justify-center fixed z-50 w-full mx-auto bg-[#282833] ">
                <div className=' flex justify-between max-w-[1600px] w-full items-center py-4'>
                    <img src={logo}
                        alt="logo" 
                        className='absolute object-cover flex h-10 w-[150px] justify-start top-2 '
                    />
                    <nav className=' justify-center mx-auto hidden gap-4 lg:flex lg:flex-row '>
                        <Link to='/' className="cursor-pointer text-lg no-underline hover:text-gray-500"> &lt; about/&gt; </Link>
                        <Link to='/' className="cursor-pointer text-lg no-underline hover:text-gray-500">&lt; projects/&gt;</Link>
                        <Link to='/' className="cursor-pointer text-lg no-underline hover:text-gray-500">&lt; resume/&gt;</Link>
                    </nav>
                </div>
            
        </div>
    );
}

export default Navbar;
