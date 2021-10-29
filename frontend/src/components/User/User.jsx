import React from 'react'
import styles from './User.module.css'
// import { Context } from "../Context/Context.js";

const User = ({data}) => {

    // const {users} = useContext(Context)
    const {name, lastMessage, lastTime, img, online} = data 
    
    return (
        <div className={styles.user}>
            <img className={styles.imgUser} src={img} alt="picture"/>
            <div className={styles.infoUser}>
                <div className={styles.datos}>
                    <span className={styles.name}>{name}</span>
                    <p>{lastMessage}</p>
                </div>
                <span className={styles.time}>{lastTime}</span>
                {online ? <div className={styles.offline}></div> : <div></div> }
            </div>
            
        </div>
    )
}

export default User
