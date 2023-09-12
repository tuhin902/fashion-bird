import React from 'react';
import './DropdownMenu.css';

const DropdownMenu = () => {
    return (
        <div className='block lg:hidden'>
            <div className='flex flex-col dropdown '>
                <ul className='flex flex-col gap-2 text-sm'>
                    <li >Men</li>
                    <li >Womwen</li>
                    <li >Kids</li>
                    <li >Sale</li>
                </ul>
            </div>
        </div>
    );
};

export default DropdownMenu;