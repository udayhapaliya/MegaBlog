import React from "react";
import { Container, Logo, LogoutBtn } from '../index.js'
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function Header() {
    const authStatus = useSelector((state) => state.auth.status)

    const navigate = useNavigate()

    const navItems = [
        {
            name: 'Home',
            slug: "/",
            active: true,
        },
        {
            name: 'Login',
            slug: "/login",
            active: !authStatus,
        },
        {
            name: 'Signup',
            slug: "/signup",
            active: !authStatus,
        },
        {
            name: 'All Posts',
            slug: "/all-posts",
            active: authStatus,
        },
        {
            name: 'Add Posts',
            slug: "/add-post",
            active: authStatus,
        }
    ]

    return (
        <header className="py-3 shadow bg-gray-500 ">
            <Container>
                <nav>
                    <div className='mr-4'>
                        <Link to='/'>
                            <Logo width="70px" />
                        </Link>
                    </div>
                    <ul className='flex ml-auto justify-center'>
                        <div className="flex"> 
                            {navItems.map((item) =>
                                item.active ? (
                                    <li key={item.name}>
                                        <button onClick={() => { navigate(item.slug) }} className="inline-block px-6 py-2 duration-200 hover: bg-blue-100 rounded-full ml-5">{item.name}</button>
                                    </li>
                                ) : null
                            )}

                            {authStatus && (
                                <li className="ml-5">
                                    <LogoutBtn />
                                </li>
                            )}
                        </div>
                    </ul>
                </nav>
            </Container>
        </header>
    )
}

export default Header;