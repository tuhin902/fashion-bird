import React from 'react';
import bannerimg from '../../Assets/banner/isi-parente-8iZ9QFYhVEA-unsplash.jpg'

const Banner = () => {

    return (
        <div className='w-full h-[300px] lg:h-[500px] flex justify-center items-center  mb-32'
            style={{
                background: `url(${bannerimg})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover'
            }}
        >
            <div>
                <div className='text-center text-white'>
                    <h1 className='text-3xl lg:text-6xl font-bold mb-4'>Give Fall A Warm Welcome</h1>
                    <p className='text-sm lg:text-xl font-bold mb-10'>If you're wondering what to look forward to after summer ends, it's the shoes.</p>
                </div>
                <div className='text-center'>
                    <button className='text-sm lg:text-xl font-bold px-10 py-4  bg-white rounded-sm '>Shop Men</button>
                    <button className='text-sm lg:text-xl font-bold px-10 py-4 bg-white ms-5 rounded-sm'>Shop WoMen</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;