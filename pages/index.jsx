import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import { useAuth } from '../context/AuthContext.js'
import Login from '../components/login'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

export default function Home() {

    const { user } = useAuth()
    // console.log(user)
    const router = useRouter()

    useEffect (() => {
        if (user) {
            router.push('/students/' + user.uid)
        }
    }, [user])


    return (
        <div className={styles.container}>
            <Head>
                <title>Cherome</title>
                <meta name="description" content="Sistema de Alumnos del Instituto Superior de Formacion Docente" />
                <link rel="icon" href="/img/logo802.ico" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>

            <main className={styles.main}>
                <h1 className={styles.title}>
                    Bienvenido a CHEROME
                </h1>
                <p>Sistema de estudiantes</p>
                <Image src="/img/logo802.png" alt="logo ISFD numero 802" width={300} height={200} />
                <Login></Login>
                {/* link to admin login view */}
                <Link href="/admin">
                    <a className={styles.admin}>Admin login</a>
                </Link>

            </main>
        </div>
    )
}
