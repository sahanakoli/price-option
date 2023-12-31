/* eslint-disable no-unused-vars */
import { useState } from "react";
import Link from "../Link/Link";
import { HiMenuAlt1 } from 'react-icons/hi'
import { IoMdClose } from 'react-icons/io'

const NavBar = () => {
    const [open, setOpen] = useState(false)
    const routes = [
        { id: 1, path: '/', name: 'Home' },
        { id: 2, path: '/about', name: 'About' },
        { id: 3, path: '/services', name: 'Services' },
        { id: 4, path: '/contact', name: 'Contact' },
        { id: 5, path: '*', name: 'NotFound' }
      ];
      

    return (
        <nav>
            <div className="md:hidden text-2xl text-black bg-teal-600 px-6 shadow-lg" onClick={() => setOpen(!open)}>
            {
                open === true ? 
                <IoMdClose></IoMdClose>
                : <HiMenuAlt1 className="text-2xl "></HiMenuAlt1>
            }
            </div>
           <ul className={`md:flex absolute md:static duration-1000
           ${open ? 'top-16': '-top-60'} 
           bg-teal-600 p-4 shadow-lg rounded-lg hover:white`}>
            {
                routes.map((route) => <Link key={route.id} route={route}></Link> 
                )
            }
            </ul> 
        </nav>
    );
};

export default NavBar;
