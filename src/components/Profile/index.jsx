import React from 'react'
import styles from './profile.module.css'


const Profile = ({ picture, displayName, username, emailAddress, location }) =>(
        <div className={styles['root']}>
            <img className={styles['avatar']} src={picture} alt="user" />
            <span className={styles['name']}>{displayName}</span>
            <ul className={styles['data']}>
                <li>
                    <span className='fas fa-user'></span> {username}
                </li>
                <li>
                    <span className='fas fa-envelope'></span> {emailAddress}
                </li>
                <li>
                    <span className='fas fa-map-marker'></span> {location}
                </li>
            </ul>
        </div>
    )



export default Profile