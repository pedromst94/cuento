import React, {useState} from "react";
import styles from './Boton.module.css';

function Boton (props) {
    const handleClick = () => {
        props.subir? props.cambiar(prev=>prev+1) : props.cambiar(prev=>prev-1);
    }

    return (
        <button onClick={handleClick} className={styles.boton}>
            {props.texto}
        </button>
    )
}

export default Boton;