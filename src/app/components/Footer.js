
'use client'
import styles from '../styles/Footer.module.css'
import Link from 'next/link'
import Image from 'next/image'

export default function Footer(){
    return(

        <footer className={styles.containerFooter}>
            <div className={styles.containerMail}>
                 <Image
                          className={styles.logo}
                          src="/logoDorado.png"
                          alt=""
                          width={450}
                          height={38}
                          priority
                        />
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=ejpatagonico@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.button_mail}
            > <svg xmlns="http://www.w3.org/2000/svg" width="24"  height="24" className={styles.svg_email} viewBox="0 0 24 24"><path fill="#" d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m-.4 4.25l-6.54 4.09c-.65.41-1.47.41-2.12 0L4.4 8.25a.85.85 0 1 1 .9-1.44L12 11l6.7-4.19a.85.85 0 1 1 .9 1.44"/></svg></a>
              <a>   
                <button onClick={()=> window.open("https://wa.me/+5492804969326","_blank")}  className={styles.botonWsp}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"  viewBox="0 0 24 24"><g fill="none" fillRule="evenodd"><path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"/><path fill="currentColor" d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2.546 20.2A1.01 1.01 0 0 0 3.8 21.454l3.032-.892A9.96 9.96 0 0 0 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2M9.738 14.263c2.023 2.022 3.954 2.289 4.636 2.314c1.037.038 2.047-.754 2.44-1.673a.7.7 0 0 0-.088-.703c-.548-.7-1.289-1.203-2.013-1.703a.71.71 0 0 0-.973.158l-.6.915a.23.23 0 0 1-.305.076c-.407-.233-1-.629-1.426-1.055s-.798-.992-1.007-1.373a.23.23 0 0 1 .067-.291l.924-.686a.71.71 0 0 0 .12-.94c-.448-.656-.97-1.49-1.727-2.043a.7.7 0 0 0-.684-.075c-.92.394-1.716 1.404-1.678 2.443c.025.682.292 2.613 2.314 4.636"/></g></svg></button>
           </a>
            <a href="https://www.instagram.com/ejpatagonico/" target="_blank" rel="noopener noreferrer"> 
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" className={styles.instagram} viewBox="0 0 24 24"><path fill="" d="M13.028 2c1.125.003 1.696.009 2.189.023l.194.007c.224.008.445.018.712.03c1.064.05 1.79.218 2.427.465c.66.254 1.216.598 1.772 1.153a4.9 4.9 0 0 1 1.153 1.772c.247.637.415 1.363.465 2.428c.012.266.022.487.03.712l.006.194c.015.492.021 1.063.023 2.188l.001.746v1.31a79 79 0 0 1-.023 2.188l-.006.194c-.008.225-.018.446-.03.712c-.05 1.065-.22 1.79-.466 2.428a4.9 4.9 0 0 1-1.153 1.772a4.9 4.9 0 0 1-1.772 1.153c-.637.247-1.363.415-2.427.465l-.712.03l-.194.006c-.493.014-1.064.021-2.189.023l-.746.001h-1.309a78 78 0 0 1-2.189-.023l-.194-.006a63 63 0 0 1-.712-.031c-1.064-.05-1.79-.218-2.428-.465a4.9 4.9 0 0 1-1.771-1.153a4.9 4.9 0 0 1-1.154-1.772c-.247-.637-.415-1.363-.465-2.428l-.03-.712l-.005-.194A79 79 0 0 1 2 13.028v-2.056a79 79 0 0 1 .022-2.188l.007-.194c.008-.225.018-.446.03-.712c.05-1.065.218-1.79.465-2.428A4.9 4.9 0 0 1 3.68 3.678a4.9 4.9 0 0 1 1.77-1.153c.638-.247 1.363-.415 2.428-.465c.266-.012.488-.022.712-.03l.194-.006a79 79 0 0 1 2.188-.023zM12 7a5 5 0 1 0 0 10a5 5 0 0 0 0-10m0 2a3 3 0 1 1 .001 6a3 3 0 0 1 0-6m5.25-3.5a1.25 1.25 0 0 0 0 2.5a1.25 1.25 0 0 0 0-2.5"/></svg>
            </a>
            <a  href="https://www.facebook.com/share/1LRCRHZJ1s/" target="_blank" rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"  className={styles.facebook} viewBox="0 0 24 24"><path fill="" d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95"/></svg>
            </a>
            </div>
            
            <div className={styles.areas}>
                {/* <h1 className={styles.title}>Areas practicas</h1> */}
                <div className={styles.areasPractice}>
                <ul>
                    <li>
                         <Link className={styles.dropdownLink} href="/practice/accidente-trabajo">
                            Accidente de Trabajo
                        </Link>
                    </li>
                    <li>
                         <Link className={styles.dropdownLink} href="/practice/traffic-accident">
                            Accidente de Tránsito
                        </Link>
                    </li>
                    
                </ul>
                <ul>
                    <li>
                        <Link className={styles.dropdownLink} href="/practice/family">
                            Familia
                        </Link>
                    </li>
                    <li>
                        <Link className={styles.dropdownLink} href="/practice/successions">
                            Sucesiones
                        </Link>
                    </li>
                </ul>
                </div>
            </div>
            <div className={styles.containerCopyright}>
                <span className={styles.copyright}>Copyright © 2025 - Estudio Juridico Patagónico | Enzo Studio </span>
            </div>

        </footer>
    )
}