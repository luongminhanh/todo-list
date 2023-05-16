import React from 'react'
import '../scss/NavBar.scss'
import imgHomePage from '../../assets/home-image.png'
import { NavLink, useNavigate } from 'react-router-dom'
const NavBar = () => {
    const navigate = useNavigate();
    const accessToken = localStorage.getItem('accessToken')
    console.log(accessToken);

    const handleClickSignIn = () => {
      navigate('/login');
    }
    const handleClickLogOut = () => {
        navigate('/');
        localStorage.clear();
        console.log(localStorage,"after logout");
      }
      const handleClickProfile = () => {
        navigate("/profile");
      }
    return (
        <>
            <div className='nav-bar'>
                <div className='nav-bar_logo'>
                    <div className='nav-bar_logo-short'></div>
                    <div className='nav-bar_logo-tall'></div>
                </div>
                {accessToken ?
                    (<div className='flex justify-center items-center gap-10'>
                        <button
                            onClick={handleClickProfile}
                            className='inline-block rounded-full bg-indigo-600 px-10 py-3 font-medium leading-normal text-white shadow-[0_4px_9px_-4px_purple] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]'
                        >Profile</button>
                        <button
                            onClick={handleClickLogOut}
                            className='inline-block rounded-full bg-indigo-600 px-10 py-3 font-medium leading-normal text-white shadow-[0_4px_9px_-4px_purple] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]'
                        >Log out</button>
                    </div>
                    ) :
                    <button
                        onClick={handleClickSignIn}
                        className='inline-block rounded-full bg-indigo-600 px-10 py-3 font-medium leading-normal text-white shadow-[0_4px_9px_-4px_purple] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]'
                    >Sign In
                    </button>
                }
            </div>
            <div className='homepage'>
                <div className='homepage-left'>
                    <h1>Save your data storage here</h1>
                    <p>Data Warehouse is a data storage area that has been
                        tested for security, so you can store your data here
                        safely but not be afraid of being stolen by others.</p>
                    <button className='inline-block rounded-full bg-indigo-600 px-10 py-3 font-medium leading-normal text-white shadow-[0_4px_9px_-4px_purple] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]'>Learn more</button>
                </div>
                <div className='homepage-right'>
                    <img src={imgHomePage} />
                </div>
            </div>
        </>
    )
}

export default NavBar