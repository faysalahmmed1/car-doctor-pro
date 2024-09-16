import Image from "next/image";
import Link from "next/link";
import { IoIosCart, IoMdSearch } from "react-icons/io";



const Navber = () => {
    const itemNav = [
        {
            title: 'Home',
            path: '/'
        },
        {
            title: 'Service',
            path: '/service'
        },
        {
            title: 'Blog',
            path: '/blog'
        },
        {
            title: 'Contacts',
            path: '/contacts'
        },
        {
            title: 'About',
            path: '/about'
        },
        {
            title: 'Login',
            path: '/login'
        }
    ];

    return (
        <div className="bg-base-100 text-slate-900">
            <div className="navbar">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            <li><a>Item 1</a></li>
                            <li>
                                <a>Parent</a>
                                <ul className="p-2">
                                    <li><a>Submenu 1</a></li>
                                    <li><a>Submenu 2</a></li>
                                </ul>
                            </li>
                            <li><a>Item 3</a></li>
                        </ul>
                    </div>
                    <Link href={'/'}>
                        <Image alt="logo" src='/assets/logo.svg' height={60} width={100} />
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <div className="space-x-5 flex items-center" >
                        {
                            itemNav.map((item) => (
                                <Link className="font-semibold hover:text-primary duration-300" href={item.path} key={item.path}>{item.title}</Link>
                            ))
                        }


                    </div>
                </div>
                <div className="navbar-end">
                    <div className="flex items-center space-x-3">
                        <IoIosCart className="text-2xl" />
                        <IoMdSearch  className="text-2xl"/>
                        <a className="btn btn-outline text-red">Appoinments</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navber;