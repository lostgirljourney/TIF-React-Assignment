import Head from 'next/head';
import Footer from './components/Footer';

const Layout = (props) => {
  return (
    <>
      <Head>
        <title>Food Blogging Website - TIF React Assignment</title>
        <meta name="description" content="Discover the Best Food and Drinks" />
        <link rel="shortcut icon" href="/favicon.png" />
        <link rel="apple-touch-icon" href="/favicon.png" />
        <link rel="apple-touch-icon" sizes="72x72" href="/favicon.png" />
        <link rel="apple-touch-icon" sizes="114x114" href="/favicon.png" />
      </Head>
      {props.children}
      <Footer mode={props.mode} />
    </>
  );
};

export default Layout;
