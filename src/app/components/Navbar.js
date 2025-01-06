"use client"; 
import Link from "next/link";
import styles from '../styles/Navbar.module.css'
import Image from "next/image";
import { useState } from "react";

export default function Navbar(){

const [isMenuOpen,setIsMenuOpen]= useState (false)

const toggleMenu=()=>{
    setIsMenuOpen(!isMenuOpen)
}

    return(
        <nav className={styles.navbar}>
            <div> <Image
                      className={styles.logo_white}
                      src="/ejp_logo_blanco.png"
                      alt=""
                      width={60}
                      height={38}
                      priority
                    /></div>
          
                 <button className={styles.hamburger} onClick={toggleMenu} aria-label="Toggle menu">
                    ☰
                </button>
                  <div className={`${styles.navLinks_container}  ${isMenuOpen ? styles.show : ""}`}>
            <Link className={styles.navLink} href="/">INICIO</Link>
             <div className={styles.dropdown}>
                <span className={styles.dropdownTrigger}>ÁREAS DE PRÁCTICA</span>
                <div className={styles.dropdownMenu}>
                <Link className={styles.dropdownLink} href="/practice/accidente-trabajo">Accidente de Trabajo</Link>
                <Link className={styles.dropdownLink} href="/practice/traffic-accident">Accidente de Auto</Link>
                <Link className={styles.dropdownLink} href="/practice/successions">Sucessiones</Link>
                <Link className={styles.dropdownLink} href="/practice/family">Familia</Link>
                </div>
            </div>
            <Link className={styles.navLink} href="/about">NOSOTROS</Link>
            <Link className={styles.navLink} href="/contact">CONTACTO</Link>
            </div>
        </nav>
    )
}


//nota : usea la etiqueta <a></a> eso no es correcto, la etiqueta link esta mucho mejor optimizada y 
//la documentacion lo recomienda 