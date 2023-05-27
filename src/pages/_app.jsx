import '@/styles/globals.scss'
import 'vanilla-cookieconsent/dist/cookieconsent.css';
import Layout from '../components/structure/Layout/Layout';
import CookieConsent from '../components/structure/CookieConsent/CookieConsent';
import { ContextProvider } from '../components/structure/Context/Context';

export default function App({ Component, pageProps }) {
  return (
    <ContextProvider>
      <Layout>
        <CookieConsent />
        <Component {...pageProps} />
      </Layout>
    </ContextProvider>
  )
}
