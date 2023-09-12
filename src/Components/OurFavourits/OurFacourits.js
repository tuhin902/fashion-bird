
import Favproduct1 from '../../Assets/Favourit Product/pexels-aditya-aiyar-1407354.jpg'

const OurFacourits = () => {
    return (
        <div className='mx-10 my-10 '>
            <div>
                <h2 className='text-3xl text-center font-bold mb-3'>Our Favourits</h2>
                <div className=' flex-row justify-center items-center lg:flex lg:justify-center lg:items-center font-bold border-b-2 border-y-balck'>
                    <div className=' px-20 py-3  border-b-2 hover:border-y-black'>
                        <button>FOR EVERYDAY</button>
                    </div>
                    <div className=' px-20 py-3  border-b-2 hover:border-y-black'>
                        <button>FOR ACTIVITY</button>
                    </div>
                    <div className=' px-20 py-3  border-b-2 hover:border-y-black'>
                        <button>FOR LOUNGING</button>
                    </div>
                </div>
            </div>
            <div className='mx-auto my-12'>
                <div className='grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-5 lg:gap-7 '>
                    <div className='relative  overflow-hidden border-2 shadow-lg pb-5 '>
                        <div>
                            <div className='' >
                                <img className=' hover:scale-105' src={Favproduct1} alt="" />
                            </div>
                            <div className='px-6 lg:px-10 py-3 lg:py-5'>
                                <h1 className='text-2xl font-bold mx-3 lg:mx-5 my-2 lg:my-3 border-b-2'>Tree Runner</h1>
                                <p className='mx-3 lg:mx-5 '>Breezy, Everyday Sneaker</p>
                            </div>
                            <div className='text-center block lg:hidden'>
                                <button className='text-sm lg:text-xl font-bold px-12 py-4 text-white mb-3 rounded-sm bg-black border-2  '>Shop Men</button>
                                <button className='text-sm lg:text-xl font-bold px-9 py-4 bg-white rounded-sm border-2 border-black '>Shop WoMen</button>
                            </div>
                        </div>
                    </div>
                    <div className='relative  overflow-hidden border-2 shadow-lg pb-5 '>
                        <div>
                            <div className='' >
                                <img className=' hover:scale-105' src={Favproduct1} alt="" />
                            </div>
                            <div className='px-6 lg:px-10 py-3 lg:py-5'>
                                <h1 className='text-2xl font-bold mx-3 lg:mx-5 my-2 lg:my-3 border-b-2'>Tree Runner</h1>
                                <p className='mx-3 lg:mx-5 '>Breezy, Everyday Sneaker</p>
                            </div>
                            <div className='text-center  block lg:hidden'>
                                <button className='text-sm lg:text-xl font-bold px-12 py-4 text-white mb-3 rounded-sm bg-black border-2  '>Shop Men</button>
                                <button className='text-sm lg:text-xl font-bold px-9 py-4 bg-white rounded-sm border-2 border-black '>Shop WoMen</button>
                            </div>
                        </div>
                    </div>
                    <div className='relative  overflow-hidden border-2 shadow-lg pb-5 '>
                        <div>
                            <div className='' >
                                <img className=' hover:scale-105' src={Favproduct1} alt="" />
                            </div>
                            <div className='px-6 lg:px-10 py-3 lg:py-5'>
                                <h1 className='text-2xl font-bold mx-3 lg:mx-5 my-2 lg:my-3 border-b-2'>Tree Runner</h1>
                                <p className='mx-3 lg:mx-5 '>Breezy, Everyday Sneaker</p>
                            </div>
                            <div className='text-center block lg:hidden'>
                                <button className='text-sm lg:text-xl font-bold px-12 py-4 text-white mb-3 rounded-sm bg-black border-2  '>Shop Men</button>
                                <button className='text-sm lg:text-xl font-bold px-9 py-4 bg-white rounded-sm border-2 border-black '>Shop WoMen</button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default OurFacourits;