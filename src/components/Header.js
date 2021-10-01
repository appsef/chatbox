import React from 'react'
import logo from '../assets/logo.svg'
import dp from '../assets/ajk.png'

const Header = () => {


    return (
        <header className="w-full backdrop-filter backdrop-blur-xl bg-opacity-50 h-20 bg-white z-10 top-0 fixed flex flex-row justify-between content-center px-20">
            <div className="cursor-default flex flex-row self-center content-center">
                <img className="w-8 h-8 " src={logo} alt="" />
                <p className="font-lexend font-semibold self-center ml-4 text-weta">Chat<span className="text-gray-400">Box</span></p>
            </div>

            <img className="w-8 h-8 self-center rounded-full" src={dp} alt="" />


        </header>
    );
}

export default Header;