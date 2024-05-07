import AppBar from 'components/AppBar/AppBar'

import React, { useEffect, useState } from 'react'

import { IsLoggedIn } from '../../helpers/isLoggedIn';
import sprite from "svg/symbol-defs.svg";
import { auth } from 'firebase.js';
import UserMenu from 'components/UserMenu/UserMenu';
import { AuthNav } from 'components/AuthNav/AuthNav';
import MobileMenu from 'components/MobileMenu/MobileMenu';


export const Header = () => {
    const [modalOpen, setModalOpen] = useState(false);



    const toggleModal = (type) => {

        setModalOpen(!modalOpen);
    };

    const [isLog, setIsLog] = useState(IsLoggedIn());

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            setIsLog(!!user);
        });

        return unsubscribe;
    }, []);


    return (
        <>
            <div className=' flex m:flex-wrap  m:justify-between items-center gap-4'>
                <p className='font-medium text-2xl flex items-start '>Nanny.Services</p>

                <div className='mr-0 ml-auto lg:hidden w-6 h-6'>
                    <button type='button' onClick={() => toggleModal()}>
                        <svg className=" stroke-white" width={24} height={24}>
                            <use href={`${sprite}#icon-menu-hamburger`} />

                        </svg></button>
                </div>
                <div className='hidden lg:flex lg:flex-wrap items-center lg:justify-between gap-4'>
                    <AppBar />
                    {isLog ? <UserMenu /> : <AuthNav />}

                </div>

            </div>
            <MobileMenu isOpen={modalOpen} onClose={setModalOpen} isLog={isLog} />
        </>
    )
}
export default Header;