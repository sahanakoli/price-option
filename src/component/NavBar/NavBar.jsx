import Link from "../Link/Link";
import { HiMenuAlt1 } from 'react-icons/hi'

/* eslint-disable no-unused-vars */
const NavBar = () => {
    const routes = [
        { id: 1, path: '/', name: 'Home' },
        { id: 2, path: '/about', name: 'About' },
        { id: 3, path: '/services', name: 'Services' },
        { id: 4, path: '/contact', name: 'Contact' },
        { id: 5, path: '*', name: 'NotFound' }
      ];
      

    return (
        <nav>
            <HiMenuAlt1 className="text-2xl md:hidden"></HiMenuAlt1>
           <ul className="md:flex">
            {
                routes.map((route) => <Link key={route.id} route={route}></Link> 
                )
            }
            </ul> 
        </nav>
    );
};

export default NavBar;
