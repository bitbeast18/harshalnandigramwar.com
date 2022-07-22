import type { NextPage } from 'next';
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title> Harshal Nandigramwar </title>
        <meta name="description" content="Harshal Nandigramwar" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      <main>
        How is this thing even working...
      </main>
      <Footer/>
    </>
  );
}

export default Home;
