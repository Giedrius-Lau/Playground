import React from 'react';
import PropTypes from 'prop-types';

const Article = ({ article, index, ...props } = props) => {
    return (
        <div key={index} className='overflow-hidden shadow-lg rounded-lg h-90 cursor-pointer m-auto'>
            <a target='_blank' href={article.url} className='w-full block h-full'>
                <img alt='blog photo' src={article.urlToImage} className='max-h-40 w-full object-cover' />
                <div className='bg-white dark:bg-gray-800 w-full p-4'>
                    <p className='text-indigo-500 text-md font-medium'>Video</p>
                    <p className='text-gray-800 dark:text-white text-xl font-medium mb-2'>{article.title}</p>
                    <p className='text-gray-400 dark:text-gray-300 font-light text-md overflow-hidden ' style={{ height: '90px' }}>
                        {article.description}
                    </p>
                    <div className='flex items-center mt-4'>
                        <div className='flex flex-col justify-between text-sm'>
                            <p className='text-gray-800 dark:text-white'>{article.source.name}</p>
                            <p className='text-gray-400 dark:text-gray-300'>{article.publishedAt}</p>
                        </div>
                    </div>
                </div>
            </a>
        </div>
    );
};

Article.propTypes = {
    article: PropTypes.object.isRequired,
    index: PropTypes.number.isRequired,
};

export default Article;
