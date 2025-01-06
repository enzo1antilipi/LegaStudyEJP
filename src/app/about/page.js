
import Image from "next/image"
import styles from '../styles/About.module.css'
export default function about(){
    return<>
    <section className={styles.section_about}>
        <section className={styles.information_aboutUs}> 
            <div className={styles.containerImagen}>
                        <Image
                              className={styles.imgRepresentative}
                              src="/seccionNosotros2.png"
                              alt=""
                              width={450}
                              height={38}
                              
                            />
            </div>
            <div className={styles.containerDescription}>
                <h1 className={styles.title}>QUIENES SOMOS</h1>
                <h2 className={styles.subtitle}>Estudio Juridico Patagonico</h2>
                <p className={styles.description}> Hemos abrazado la idea de ofrecer servicios legales
                    desde la cercanía y la transparencia. Creemos firmemente que cada desafío legal
                    es una oportunidad para transformar vidas y ayudarte a encontrar la paz interior 
                    mientras alcanzas todo tu potencial. Si estás enfrentando un proceso de divorcio
                    o necesitas asistencia en la división de bienes de la sociedad conyugal, estás
                    en el lugar correcto.
                </p>
          </div>
                
        </section>
    </section>
    </>
}