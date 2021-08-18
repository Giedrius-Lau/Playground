import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Blog from '../components/Blog';
import Header1 from '../components/Header1';
import Header2 from '../components/Header2';

export default function Home() {
    return (
        <div>
            <Head>
                <title>Create Next App</title>
                <link rel='icon' href='/favicon.ico' />
                <link href='https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&display=swap' rel='stylesheet' />
            </Head>
            <Header></Header>
            <Header1></Header1>
            <Blog></Blog>
            <Header2></Header2>
            <Footer></Footer>
        </div>
    );
}
