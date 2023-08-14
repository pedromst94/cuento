import React from "react";
import styles from './banner.module.css';


function Banner (){
    return (
        <>
        <header className={styles.header}>
           <h1 className={styles.titulo}>Cuento para Tania</h1> 
        </header>
        </>
    )
}
export default Banner;
