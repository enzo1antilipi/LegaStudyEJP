
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
                <p className={styles.description}> Nuestra firma se mantiene al frente del asesoramiento legal en la Argentina adaptándose a las cambiantes necesidades de los clientes y de la comunidad.
                En nuestra vida cotidiana nos enfrentamos con situaciones que exigen tomar decisiones de orden legal. Por tal motivo debemos pensar en la importancia que tiene estar asesorado convenientemente.
                La permanente mejora del capital humano unida a la revisión constante de los recursos técnicos es lo que nos permite prestar un servicio responsable y de avanzada calidad.


                Su éxito estuvo basado tanto en sus cualidades comunes como en sus diferentes experiencias e intereses. Nuestra oficina ha continuado fortaleciendo sus prácticas profesionales activas en cuanto a asuntos reglamentarios que comprende las áreas del Derecho Laboral (Accidentes de Trabajo), del Derecho Civil (Sucesiones, Divorcios, Accidentes de Tránsito y Exequatur – Validacion de Sentencias del Extranjero en la Argentina).
                La clave de nuestro crecimiento está basada en la atención personalizada de las necesidades de cada uno de nuestros clientes, a través de una actuación diligente, eficiente y confidencial.
                Justamente esta atención nos ha permitido la permanencia en el mercado y la posibilidad de expandir nuestro equipo, con la incorporación de nuevos y sólidos profesionales en las materias de práctica.
                </p>
          </div>
                
        </section>
    </section>
    </>
}