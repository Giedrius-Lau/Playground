import React from 'react';

export const Blog = () => {
    return (
        <div className='px-4 py-16 mx-auto sm:max-w-xl md:max-w-full :max-w-screen-xl md:px-24 lg:px-8 lg:py-20'>
            <div className='grid gap-5 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full'>
                <div className='overflow-hidden transition-shadow duration-300 bg-white rounded'>
                    <a href='/' aria-label='Article'>
                        <img
                            src='https://images.pexels.com/photos/932638/pexels-photo-932638.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260'
                            className='object-cover w-full h-64 rounded'
                            alt=''
                        />
                    </a>
                    <div className='py-5'>
                        <p className='mb-2 text-xs font-semibold text-gray-600 uppercase'>13 Jul 2020</p>
                        <a
                            href='/'
                            aria-label='Article'
                            className='inline-block mb-3 text-black transition-colors duration-200 hover:text-deep-purple-accent-700'
                        >
                            <p className='text-2xl font-bold leading-5'>Diving to the deep</p>
                        </a>
                        <p className='mb-4 text-gray-700'>
                            Sed ut perspiciatis unde omnis iste natus error sit sed quia consequuntur magni voluptatem doloremque.
                        </p>
                        <div className='flex space-x-4'>
                            <a
                                href='/'
                                aria-label='Likes'
                                className='flex items-start text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-700 group'
                            >
                                <div className='mr-2'>
                                    <svg
                                        xmlns='http://www.w3.org/2000/svg'
                                        className='text-gray-600 h-5 w-5'
                                        fill='none'
                                        viewBox='0 0 24 24'
                                        stroke='currentColor'
                                    >
                                        <path
                                            strokeLinecap='round'
                                            strokeLinejoin='round'
                                            strokeWidth={2}
                                            d='M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5'
                                        />
                                    </svg>
                                </div>
                                <p className='font-semibold'>7.4K</p>
                            </a>
                            <a
                                href='/'
                                aria-label='Comments'
                                className='flex items-start text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-700 group'
                            >
                                <div className='mr-2'>
                                    <svg
                                        xmlns='http://www.w3.org/2000/svg'
                                        width='24'
                                        height='24'
                                        viewBox='0 0 24 24'
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                        strokeWidth='2'
                                        stroke='currentColor'
                                        className='w-5 h-5 text-gray-600 transition-colors duration-200 group-hover:text-deep-purple-accent-700'
                                    >
                                        <polyline points='23 5 23 18 19 18 19 22 13 18 12 18' fill='none' strokeMiterlimit='10' />
                                        <polygon points='19 2 1 2 1 14 5 14 5 19 12 14 19 14 19 2' fill='none' stroke='currentColor' strokeMiterlimit='10' />
                                    </svg>
                                </div>
                                <p className='font-semibold'>81</p>
                            </a>
                        </div>
                    </div>
                </div>
                <div className='overflow-hidden transition-shadow duration-300 bg-white rounded'>
                    <a href='/' aria-label='Article'>
                        <img
                            src='https://images.pexels.com/photos/1576937/pexels-photo-1576937.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;w=500'
                            className='object-cover w-full h-64 rounded'
                            alt=''
                        />
                    </a>
                    <div className='py-5'>
                        <p className='mb-2 text-xs font-semibold text-gray-600 uppercase'>4 Nov 2020</p>
                        <a
                            href='/'
                            aria-label='Article'
                            className='inline-block mb-3 text-black transition-colors duration-200 hover:text-deep-purple-accent-700'
                        >
                            <p className='text-2xl font-bold leading-5'>Conquer the World</p>
                        </a>
                        <p className='mb-4 text-gray-700'>
                            Sed ut perspiciatis unde omnis iste natus error sit sed quia consequuntur magni voluptatem doloremque.
                        </p>
                        <div className='flex space-x-4'>
                            <a
                                href='/'
                                aria-label='Likes'
                                className='flex items-start text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-700 group'
                            >
                                <div className='mr-2'>
                                    <svg
                                        xmlns='http://www.w3.org/2000/svg'
                                        className='text-gray-600 h-5 w-5'
                                        fill='none'
                                        viewBox='0 0 24 24'
                                        stroke='currentColor'
                                    >
                                        <path
                                            strokeLinecap='round'
                                            strokeLinejoin='round'
                                            strokeWidth={2}
                                            d='M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5'
                                        />
                                    </svg>
                                </div>
                                <p className='font-semibold'>7.4K</p>
                            </a>
                            <a
                                href='/'
                                aria-label='Comments'
                                className='flex items-start text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-700 group'
                            >
                                <div className='mr-2'>
                                    <svg
                                        xmlns='http://www.w3.org/2000/svg'
                                        width='24'
                                        height='24'
                                        viewBox='0 0 24 24'
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                        strokeWidth='2'
                                        stroke='currentColor'
                                        className='w-5 h-5 text-gray-600 transition-colors duration-200 group-hover:text-deep-purple-accent-700'
                                    >
                                        <polyline points='23 5 23 18 19 18 19 22 13 18 12 18' fill='none' strokeMiterlimit='10' />
                                        <polygon points='19 2 1 2 1 14 5 14 5 19 12 14 19 14 19 2' fill='none' stroke='currentColor' strokeMiterlimit='10' />
                                    </svg>
                                </div>
                                <p className='font-semibold'>81</p>
                            </a>
                        </div>
                    </div>
                </div>
                <div className='overflow-hidden transition-shadow duration-300 bg-white rounded'>
                    <a href='/' aria-label='Article'>
                        <img
                            src='https://images.pexels.com/photos/2123755/pexels-photo-2123755.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260'
                            className='object-cover w-full h-64 rounded'
                            alt=''
                        />
                    </a>
                    <div className='py-5'>
                        <p className='mb-2 text-xs font-semibold text-gray-600 uppercase'>28 Dec 2020</p>
                        <a
                            href='/'
                            aria-label='Article'
                            className='inline-block mb-3 text-black transition-colors duration-200 hover:text-deep-purple-accent-700'
                        >
                            <p className='text-2xl font-bold leading-5'>Explore the beautiful</p>
                        </a>
                        <p className='mb-4 text-gray-700'>
                            Sed ut perspiciatis unde omnis iste natus error sit sed quia consequuntur magni voluptatem doloremque.
                        </p>
                        <div className='flex space-x-4'>
                            <a
                                href='/'
                                aria-label='Likes'
                                className='flex items-start text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-700 group'
                            >
                                <div className='mr-2'>
                                    <svg
                                        xmlns='http://www.w3.org/2000/svg'
                                        className='text-gray-600 h-5 w-5'
                                        fill='none'
                                        viewBox='0 0 24 24'
                                        stroke='currentColor'
                                    >
                                        <path
                                            strokeLinecap='round'
                                            strokeLinejoin='round'
                                            strokeWidth={2}
                                            d='M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5'
                                        />
                                    </svg>
                                </div>
                                <p className='font-semibold'>7.4K</p>
                            </a>
                            <a
                                href='/'
                                aria-label='Comments'
                                className='flex items-start text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-700 group'
                            >
                                <div className='mr-2'>
                                    <svg
                                        xmlns='http://www.w3.org/2000/svg'
                                        width='24'
                                        height='24'
                                        viewBox='0 0 24 24'
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                        strokeWidth='2'
                                        stroke='currentColor'
                                        className='w-5 h-5 text-gray-600 transition-colors duration-200 group-hover:text-deep-purple-accent-700'
                                    >
                                        <polyline points='23 5 23 18 19 18 19 22 13 18 12 18' fill='none' strokeMiterlimit='10' />
                                        <polygon points='19 2 1 2 1 14 5 14 5 19 12 14 19 14 19 2' fill='none' stroke='currentColor' strokeMiterlimit='10' />
                                    </svg>
                                </div>
                                <p className='font-semibold'>81</p>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;
