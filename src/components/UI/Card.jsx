import React from 'react'
import styles from './card.module.css'

const Card = (props) => {
    return (
        <div className={styles.card}>
            <div className={styles.grid}>
                <div className={styles.cards}>
                    <div className={styles.element}>

                    </div>
                </div>
                <div className={styles.cards}>
                    <h3>{props.title}</h3>
                    <p>{props.content}</p>
                </div>
            </div>
        </div>
    )
}

export default Card
