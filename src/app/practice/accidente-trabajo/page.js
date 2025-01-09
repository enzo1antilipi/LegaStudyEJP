'use client';

import Head from "next/head"
import Image from "next/image"

import styles from '../../styles/Practice.module.css'

export default function accidente(){


    return<>
            <Head>
                <title>Área de práctica - Tu Empresa</title>
                <meta name="description" content="Descubre cómo te ayudamos en casos de accidentes laborales. Asesoría legal especializada para proteger tus derechos." />
            </Head>
            <section aria-labelledby="practice-heading" className={styles.practice_heading}>
                <div className={styles.container_practice_area}>
                     <Image
                              className={styles.imgRepresentative}
                              src="/accidentelaboral.png"
                              alt=""
                              width={450}
                              height={38}
                              
                            />
                            <aside className={styles.containerDescription}>
                                <p className={styles.question}>¿Cómo lo ayuda el Estudio Jurídico Patagónico?</p>
                            <p className={styles.description}>
                                
                                En primera instancia, lo asistimos en llevar adelante el reclamo a su ART por Accidente de Trabajo, para que esta le pague la indemnización correspondiente.
                                Además, gestionamos que la ART le brinde el tratamiento médico adecuado a la lesión sufrida por su Accidente de Trabajo o Enfermedad Profesional.
                                También nos encargamos de que se reconozca el carácter laboral de su Accidente de Trabajo o Enfermedad Profesional.
                            </p>
                            <p className={styles.question}>¿Cómo actuamos en casos de Accidente de Trabajo y Enfermedad Profesional?</p>
                            <p className={styles.description}> 
                                
                                Análisis personalizado del caso
                                Realizamos una entrevista sin cargo para evaluar su situación y determinar los pasos a seguir.

                                Envío de telegramas laborales
                                Si corresponde, redactamos los telegramas necesarios para iniciar su reclamo ante la ART.

                                Reclamos ante la Superintendencia de Riesgos de Trabajo (SRT)
                                Iniciaremos su reclamo administrativo ante las Comisiones Médicas de la SRT para que pueda percibir la indemnización que le corresponde.

                                Los reclamos son contra la Aseguradora de Riesgos de Trabajo (ART), no contra su empleador.
                                Representación en demandas laborales
                                Si no se llega a un acuerdo en las Comisiones Médicas debido a diferencias en el porcentaje de incapacidad otorgado, podemos iniciar una demanda laboral.

                                Representamos su caso ante la justicia laboral para garantizar que reciba la indemnización justa y lo acompañamos durante todo el proceso.
                                Nuestra prioridad es que el trabajador cobre su indemnización lo antes posible, resguardando siempre todos sus derechos.

                                Contáctenos
                                Si sufrió un Accidente de Trabajo o padece una Enfermedad Profesional, puede contactarnos a través de:

                                📱 WhatsApp: 2804969326

                                Estudio Jurídico Patagónico: defendemos sus derechos laborales.
                            </p>
                            </aside>
                </div>
                
                <section className={styles.container_conntac_practice_area}>
                    <div className={styles.img_contact_practice}>
                        <Image
                              className={styles.imgLogo}
                              src="/logo_home.png"
                              alt=""
                              width={450}
                              height={38}
                              priority
                            />
                    </div>
                        <section className={styles.container_contact}>
                            <p className={styles.text_contact}>Comunicate con nosotros .</p>
                            <p className={styles.text_contact}>WhatsApp</p>
                        <button onClick={()=> window.open("https://wa.me/+5492945638804","_blank")}><svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" className="icons_whatsapp" viewBox="0 0 24 24"><g fill="none" fillRule="evenodd"><path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"/><path fill="currentColor" d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2.546 20.2A1.01 1.01 0 0 0 3.8 21.454l3.032-.892A9.96 9.96 0 0 0 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2M9.738 14.263c2.023 2.022 3.954 2.289 4.636 2.314c1.037.038 2.047-.754 2.44-1.673a.7.7 0 0 0-.088-.703c-.548-.7-1.289-1.203-2.013-1.703a.71.71 0 0 0-.973.158l-.6.915a.23.23 0 0 1-.305.076c-.407-.233-1-.629-1.426-1.055s-.798-.992-1.007-1.373a.23.23 0 0 1 .067-.291l.924-.686a.71.71 0 0 0 .12-.94c-.448-.656-.97-1.49-1.727-2.043a.7.7 0 0 0-.684-.075c-.92.394-1.716 1.404-1.678 2.443c.025.682.292 2.613 2.314 4.636"/></g></svg>2804969326</button>
                    </section>
                </section>
                <div className={styles.container_btt_mobile}>
                    <button onClick={()=> window.open("https://wa.me/+5492804969326","_blank")} className={styles.button_mobile}><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" className={styles.icons_whatsapp} viewBox="0 0 24 24"><g fill="none" fillRule="evenodd"><path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"/><path fill="currentColor" d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2.546 20.2A1.01 1.01 0 0 0 3.8 21.454l3.032-.892A9.96 9.96 0 0 0 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2M9.738 14.263c2.023 2.022 3.954 2.289 4.636 2.314c1.037.038 2.047-.754 2.44-1.673a.7.7 0 0 0-.088-.703c-.548-.7-1.289-1.203-2.013-1.703a.71.71 0 0 0-.973.158l-.6.915a.23.23 0 0 1-.305.076c-.407-.233-1-.629-1.426-1.055s-.798-.992-1.007-1.373a.23.23 0 0 1 .067-.291l.924-.686a.71.71 0 0 0 .12-.94c-.448-.656-.97-1.49-1.727-2.043a.7.7 0 0 0-.684-.075c-.92.394-1.716 1.404-1.678 2.443c.025.682.292 2.613 2.314 4.636"/></g></svg>Comunicate con nosotros</button>
                </div>
            </section>
    
    </>
}