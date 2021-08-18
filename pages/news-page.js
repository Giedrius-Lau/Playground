import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import axios from 'axios';
import Loading from '../components/Loading';
import Alert from '../components/Alert';
import Article from '../components/news/Article';
import NewsForm from '../components/news/NewsForm';

const NewsPage = () => {
    const [loading, setLoading] = useState(false);
    const [alert, setAlert] = useState('');
    const [news, setNews] = useState([]);
    const [newsState, setNewsState] = useState('everything');

    const API_KEY = '23cf7ed99a25475cb8b89fa61b7824c5';

    useEffect(async () => {
        setLoading(true);

        try {
            const url = `https://newsapi.org/v2/${newsState}?q=technology&apiKey=${API_KEY}`;
            const req = axios.get(url);
            const res = await req;

            setLoading(false);

            setNews(res.data.articles);
        } catch {}
    }, []);

    const submitNewsSearch = async (e) => {
        e.preventDefault();
        let inputValue = e.target.search.value;

        setLoading(true);
        setNews('');
        try {
            const url = `https://newsapi.org/v2/${newsState}?q=${inputValue}&apiKey=${API_KEY}`;
            const req = axios.get(url);
            const res = await req;

            setNews(res.data.articles);
            e.target.search.value = '';

            setLoading(false);
        } catch (error) {
            setLoading(false);
            setAlert(error.message);
            setTimeout(() => {
                setAlert('');
            }, 10000);
            return;
        }
    };

    const closeAlert = () => {
        setAlert('');
    };

    return (
        <>
            <Header></Header>

            <div className='bg-white p-12 mt-20 max-w-7xl mx-auto '>
                <NewsForm setNewsState={setNewsState} newsState={newsState} submitNewsSearch={submitNewsSearch}></NewsForm>
                {alert && <Alert closeAlert={closeAlert} message={alert}></Alert>}
                {loading && <Loading></Loading>}
                <div className='grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-8'>
                    {news.length > 0 ? (
                        news.map((article, index) => {
                            return <Article key={index} article={article} index={index}></Article>;
                        })
                    ) : (
                        <div className='font-bold text-gray-700 text-2xl '>No results found</div>
                    )}
                </div>
            </div>

            <Footer></Footer>
        </>
    );
};

export default NewsPage;
