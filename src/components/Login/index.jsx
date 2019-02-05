import React from 'react'

import styles from './login.module.css'

const Login = ({onAuth}) => (
    <div className={styles['root']}>
        <p className={styles['text']}>
            Necesitamos que inicies sesion con tu cuenta de GitHub
            para que puedas leer y escribir mensajes
        </p>
        <button
            onClick={onAuth}
            className={styles['button']}
        >
            <span className='fab fa-github '></span> Login con Github
        </button>
    </div>
)

export default Login
