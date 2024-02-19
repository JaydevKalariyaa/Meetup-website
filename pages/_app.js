import Layout from "../components/layout/Layout";
import "../styles/globals.css";
import Head from "next/head";
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>React MeetUp</title>
        <meta name="description" content="Welcome to the world of Meetups." />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
