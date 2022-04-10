import Layout from "../components/Layout";
import Head from "next/head";
import "../styles/globals.scss";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <script src="https://cdn.lordicon.com/lusqsztk.js"></script>
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
