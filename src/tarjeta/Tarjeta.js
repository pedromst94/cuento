import React from "react";
import styles from './tarjeta.module.css';
import tarjetas from "../tarjetas";

function Tarjeta (props) {
    return (
        <>
        <div className={styles.tarjeta}>
            <div className={styles.container}>
                <img src={tarjetas[props.index].src}/>
            </div>
            <div>
                <p className={styles.letra}>
                    {tarjetas[props.index].texto}
                </p>
            </div>
        </div>
        </>
    )
}

export default Tarjeta;