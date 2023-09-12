import React, { useState } from 'react';
import { HiSearch, HiUser, HiShoppingCart, HiMenu } from "react-icons/hi";
import DropdownMenu from '../DropdownMenu/DropdownMenu';

const Navbar = () => {

    const [dropdownMenu, setDropdownMenu] = useState(false)
    return (
        <nav>
            <div className='hidden lg:block'>
                <div className='flex flex-row  items-center font-bold shadow-lg p-2 '>
                    <ul className='basis-1/2 flex mx-5 '>
                        <li className='m-3 cursor-pointer hover:underline'>Men</li>
                        <li className='m-3 cursor-pointer hover:underline'>Womwen</li>

                        <li className='m-3 cursor-pointer hover:underline'>Kids</li>
                        <li className='m-3 cursor-pointer hover:underline'>Sale</li>
                    </ul>
                    <div className='basis-1/4'>
                        <img className=' w-14' src="https://www.designevo.com/res/templates/thumb_small/black-and-white-crown-icon.webp" alt="" />
                    </div>
                    <ul className='basis-1/2 flex justify-between m-3 font-bold'>
                        <li className=' m-2 cursor-pointer hover:underline'> Sustainability</li>
                        <li className=' m-2 cursor-pointer hover:underline'>Rerun</li>
                        <li className=' m-2 cursor-pointer hover:underline'>Stores</li>
                        <li className=' m-2 cursor-pointer text-2xl '> <HiSearch /></li>
                        <li className=' m-2 cursor-pointer text-2xl'><HiUser /></li>
                        <li className=' m-2 cursor-pointer text-2xl'><HiShoppingCart /> </li>
                    </ul>
                </div>
                <div></div>
            </div>
            <div className='block lg:hidden'>
                <div className='flex justify-between items-center'>
                    <label htmlFor="" className='btn ms-6'>
                        <HiMenu onClick={() => setDropdownMenu((prev) => !prev)} />

                    </label>
                    <div className='basis-1/4'>
                        <img className=' w-14' src="https://www.designevo.com/res/templates/thumb_small/black-and-white-crown-icon.webp" alt="" />
                    </div>
                    <div className='p-3 text-xl'>
                        <HiShoppingCart />
                    </div>
                </div>

            </div>
            {
                dropdownMenu && <DropdownMenu />
            }

        </nav>
    );
};

export default Navbar;

