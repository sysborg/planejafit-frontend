import '../styles/globals.css'
import Layout from '../components/Layout';

function PlanejaFit({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default PlanejaFit
