import React from 'react'
import { Link } from 'react-router-dom'

import styles from './profile-bar.module.css'

const ProfileBar = ({ picture, username,onOpenText, onLogout }) =>(
    <div className={styles['root']}>
        <Link to='/profile'>
            <figure>
                <img className={styles['avatar']} src={ picture } alt=""/>
            </figure>
        </Link>
        <span className={styles['username']}>{ `Hola @${username}`}</span>
        <button
            className={styles['button']}
            onClick={onOpenText}
        >
            <span className='fas fa-lg fa-edit'></span>Tweet!
        </button>
        <button onClick={onLogout} className={styles['button']}>
            <span className='fas fa-sign-out-alt'></span> Salir
        </button>
    </div>
)


export default ProfileBar