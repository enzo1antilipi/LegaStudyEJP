import styles from '../styles/Footer.module.css'
import Link from 'next/link'

export default function Footer(){
    return(

        <footer className={styles.containerFooter}>
            <div className={styles.containerMail}>
                  <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=ejpatagonico@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.button_mail}
            > <svg xmlns="http://www.w3.org/2000/svg" width="20"  height="20" className={styles.svg_email} viewBox="0 0 24 24"><path fill="#" d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m-.4 4.25l-6.54 4.09c-.65.41-1.47.41-2.12 0L4.4 8.25a.85.85 0 1 1 .9-1.44L12 11l6.7-4.19a.85.85 0 1 1 .9 1.44"/></svg> ejpatagonico@gmai.com</a>
        
            </div>
            <div className={styles.areas}>
                {/* <h1 className={styles.title}>Areas practicas</h1> */}
                <ul>
                    <li>
                         <Link className={styles.dropdownLink} href="/practice/accidente-trabajo">
                            Accidente de trabajo
                        </Link>
                    </li>
                    <li>
                         <Link className={styles.dropdownLink} href="/practice/traffic-accident">
                            Accidente de tránsito
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
        </footer>
    )
}