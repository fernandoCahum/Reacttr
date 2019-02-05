import React from 'react'
import { Link } from 'react-router-dom'

import styles from './header.module.css'

const Header = () => (
    <header className={ styles['root'] } >
        <Link className={styles['logo-link']} to='/'>
            <h1 className={ styles['logo'] } > Reacttr </h1>
        </Link>
    </header>
)

export default Header