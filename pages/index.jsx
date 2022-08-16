import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {

    return (
        <div className={styles.container}>
            <Head>
                <title>Cherome</title>
                <meta name="description" content="Sistema de Alumnos del Instituto Superior de Formacion Docente" />
                <link rel="icon" href="/img/logo802.ico" />
            </Head>

            <main className={styles.main}>
                <h1 className={styles.title}>
                    Bienvenido a CHEROME
                </h1>
                <Image src="/img/logo802.png" alt="logo ISFD numero 802" width={400} height={300} />
                <Link href="/home">
                    <a className={styles.link}>
                        Ir a la pagina principal
                    </a>
                </Link>
            </main>
        </div>
    )
}
