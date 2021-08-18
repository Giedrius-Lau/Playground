import React from 'react';
import PropTypes from 'prop-types';

const NewsForm = ({ setNewsState, submitNewsSearch, newsState, ...props } = props) => {
    return (
        <div className='header flex items-end justify-between mb-12'>
            <div className='title'>
                <p className='text-4xl font-bold text-gray-800 mb-4'>Lastest articles</p>
                <p className='text-2xl font-light text-gray-400'>Search by source:</p>
                <div className='flex'>
                    <button
                        className={`${
                            newsState == 'everything' ? 'bg-purple-600' : ''
                        } mt-4 mr-2 flex-shrink-0 px-4 py-2 text-base font-semibold text-white bg-gray-600 rounded-lg shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-purple-200`}
                        onClick={() => setNewsState('everything')}
                    >
                        Everything
                    </button>
                    <button
                        className={`${
                            newsState == 'top-headlines' ? 'bg-purple-600' : ''
                        } mt-4 flex-shrink-0 px-4 py-2 text-base font-semibold text-white bg-gray-600 rounded-lg shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-purple-200`}
                        onClick={() => setNewsState('top-headlines')}
                    >
                        Top Headlines
                    </button>
                </div>
            </div>
            <div className='text-end'>
                <form
                    onSubmit={submitNewsSearch}
                    className='flex flex-col md:flex-row w-3/4 md:w-full max-w-sm md:space-x-3 space-y-3 md:space-y-0 justify-center'
                >
                    <div className=' relative '>
                        <input
                            type='text'
                            className=' rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent'
                            placeholder='Enter a title'
                            name='search'
                        />
                    </div>
                    <button
                        className='flex-shrink-0 px-4 py-2 text-base font-semibold text-white bg-purple-600 rounded-lg shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-purple-200'
                        type='submit'
                    >
                        Search
                    </button>
                </form>
            </div>
        </div>
    );
};

NewsForm.propTypes = {
    setNewsState: PropTypes.func.isRequired,
    newsState: PropTypes.string.isRequired,
    submitNewsSearch: PropTypes.func.isRequired,
};

export default NewsForm;
