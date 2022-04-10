import Layout from "../components/Layout";
import Script from "next/script";
import Head from "next/head";
import "../styles/globals.scss";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <Script src="https://cdn.lordicon.com/lusqsztk.js" />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
