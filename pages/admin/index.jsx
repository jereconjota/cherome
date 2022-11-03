import Link from 'next/link'
import React from 'react'
import Login from '../../components/Login'
import styles from '../../styles/Home.module.css'

function admin() {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>
        Bienvenido a CHEROME
      </h1>
      <p>Usuario administrador</p>
      <Login />
      <Link href="/">
        <a className={styles.admin}> <small>Student login</small></a>
      </Link>
    </main>

  )
}

export default admin