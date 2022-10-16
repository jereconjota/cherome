import '../styles/globals.css'
import { AuthProvider } from "../context/AuthContext";
import Head from 'next/head';

export default function App({ Component, pageProps }) {
    return <AuthProvider>
                <Head>
                    <title>Cherome</title>
                    <link rel="shortcut icon" href="/logo802.ico" />
                </Head>
                <Component {...pageProps} />
            </AuthProvider>

}