import React from "react";
import {Link} from "react-router-dom";
import {NavbarTypes} from "./navbar.types";


export default function Navbar() {
    const [navbarOpen, setNavbarOpen] = React.useState(false);
    const data: NavbarTypes[] = [
        {
            'title': 'About Me',
            'to': '/about-me'
        },
        {
            'title': 'Portofolio',
            'to': '/portofolio'
        }
    ]
    return (
        <>
            <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-transparent mb-3">
                <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
                    <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
                        <Link
                            className="text-base text-veryDarkGrayishViolet font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase"
                            to={"/"}
                        >
                            Alpinnz
                        </Link>
                        <button
                            className="text-veryDarkGrayishViolet cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                            type="button"
                            onClick={() => setNavbarOpen(!navbarOpen)}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                                 stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"/>
                            </svg>
                        </button>
                    </div>
                    <div className={"lg:flex flex-grow items-center" + (navbarOpen ? " flex" : " hidden")}
                         id="example-navbar-danger">
                        <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
                            {
                                data.map((item, index) => {
                                    return (
                                        <li className="nav-item" key={index}>
                                            <Link
                                                className="px-3 py-2 flex items-center text-xs uppercase leading-snug text-veryDarkGrayishViolet font-bold hover:opacity-75"
                                                to={item.to}
                                            >
                                                {item.title}
                                            </Link>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}