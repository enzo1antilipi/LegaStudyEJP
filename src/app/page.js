'use client';

import Image from "next/image";
import Link from "next/link";


export default function Home() {
  return (
    <div >
      <main >
       
        <section className="containerImgHome">
        <Image
          className="imgLogo"
          src="/logoDorado.png"
          alt=""
          width={450}
          height={38}
          priority
        />
        
      </section>
      {/*  -----------------   */}
      <div className="container_epj">
        <h2 className="EJP">Estudio Jurídico Patagónico</h2>
        </div>
      <div className="containerList">
      <ul className="list_of_cities">
        <li>PUERTO MADRYN</li>
        <li>TRELEW</li>
        <li>RAWSON</li>
        <li>COMODORO</li>
      </ul>
      </div>
      {/* button contact */}
      <section className="container_contact">
        <h1 className="contact">Contacto</h1>
        <button  onClick={()=> window.open("https://wa.me/+5492804969326","_blank")}><svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" className="icons_whatsapp" viewBox="0 0 24 24"><g fill="none" fillRule="evenodd"><path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"/><path fill="currentColor" d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2.546 20.2A1.01 1.01 0 0 0 3.8 21.454l3.032-.892A9.96 9.96 0 0 0 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2M9.738 14.263c2.023 2.022 3.954 2.289 4.636 2.314c1.037.038 2.047-.754 2.44-1.673a.7.7 0 0 0-.088-.703c-.548-.7-1.289-1.203-2.013-1.703a.71.71 0 0 0-.973.158l-.6.915a.23.23 0 0 1-.305.076c-.407-.233-1-.629-1.426-1.055s-.798-.992-1.007-1.373a.23.23 0 0 1 .067-.291l.924-.686a.71.71 0 0 0 .12-.94c-.448-.656-.97-1.49-1.727-2.043a.7.7 0 0 0-.684-.075c-.92.394-1.716 1.404-1.678 2.443c.025.682.292 2.613 2.314 4.636"/></g></svg>2804969326</button>
      </section>
      {/* area de especializacion */}
      <section className="container_svgs">
        
       <h1 className="practice_area">ÁREAS DE ESPECIALIZACIÓN</h1>
       <div className="svg_list">
        <div className="svg_item">
          <svg xmlns="http://www.w3.org/2000/svg" width="75" height="65" viewBox="0 0 576 512"><path fill="currentColor" d="M256 32c-17.7 0-32 14.3-32 32v101.9c0 5.6-4.5 10.1-10.1 10.1c-3.6 0-7-1.9-8.8-5.1l-48-83.9C83 123.5 32 199.8 32 288v64h512v-66.4c-.9-87.2-51.7-162.4-125.1-198.6l-48 83.9c-1.8 3.2-5.2 5.1-8.8 5.1c-5.6 0-10.1-4.5-10.1-10.1V64c0-17.7-14.3-32-32-32zM16.6 384C7.4 384 0 391.4 0 400.6c0 4.7 2 9.2 5.8 11.9C27.5 428.4 111.8 480 288 480s260.5-51.6 282.2-67.5c3.8-2.8 5.8-7.2 5.8-11.9c0-9.2-7.4-16.6-16.6-16.6z"/></svg>
          <p><b>Accidentes de trabajo</b></p>
        </div>
        <div className="svg_item">
          <svg xmlns="http://www.w3.org/2000/svg" width="71" height="71" viewBox="0 0 512 512"><path fill="currentColor" d="M280 24c0-13.3-10.7-24-24-24s-24 10.7-24 24v80c0 13.3 10.7 24 24 24s24-10.7 24-24zm-94.2 200h140.3c6.8 0 12.8 4.3 15.1 10.6l19.1 53.4H151.7l19.1-53.4c2.3-6.4 8.3-10.6 15.1-10.6zm-75.3-10.9l-28.3 79.3C62.1 300.9 48 320.8 48 344v136c0 17.7 14.3 32 32 32h16c17.7 0 32-14.3 32-32v-32h256v32c0 17.7 14.3 32 32 32h16c17.7 0 32-14.3 32-32V344c0-23.2-14.1-43.1-34.2-51.6l-28.3-79.3C390.1 181.3 360 160 326.2 160H185.9c-33.8 0-64 21.3-75.3 53.1zM128 344a24 24 0 1 1 0 48a24 24 0 1 1 0-48m232 24a24 24 0 1 1 48 0a24 24 0 1 1-48 0M39 39c-9.4 9.4-9.4 24.6 0 33.9l48 48c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9L73 39c-9.4-9.4-24.6-9.4-33.9 0zm400 0l-48 48c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l48-48c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0"/></svg>
          <p><b>Accidentes de tránsito</b></p>
       </div>
       <div className="svg_item">
          <svg xmlns="http://www.w3.org/2000/svg" width="84" height="76" viewBox="0 0 18 16"><path fill="currentColor" d="M3.5 2h-3c-.275 0-.5.225-.5.5v11c0 .275.225.5.5.5h3c.275 0 .5-.225.5-.5v-11c0-.275-.225-.5-.5-.5M3 5H1V4h2zm5.5-3h-3c-.275 0-.5.225-.5.5v11c0 .275.225.5.5.5h3c.275 0 .5-.225.5-.5v-11c0-.275-.225-.5-.5-.5M8 5H6V4h2z"/><path fill="currentColor" d="m11.954 2.773l-2.679 1.35a.5.5 0 0 0-.222.671l4.5 8.93a.5.5 0 0 0 .671.222l2.679-1.35a.5.5 0 0 0 .222-.671l-4.5-8.93a.5.5 0 0 0-.671-.222"/><path fill="currentColor" d="M14.5 13.5a.5.5 0 1 1-1 0a.5.5 0 0 1 1 0"/></svg>
          <p><b>Sucesiones</b></p>
       </div>
       <div className="svg_item">
          <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 16 16"><path fill="currentColor" d="M9.5 7.5a1.5 1.5 0 1 1-3.001-.001A1.5 1.5 0 0 1 9.5 7.5M14.27 4h-2.54A1.73 1.73 0 0 0 10 5.73V9a1 1 0 0 0 1 1v6h4v-6a1 1 0 0 0 1-1V5.73A1.73 1.73 0 0 0 14.27 4"/><path fill="currentColor" d="M15 2a2 2 0 1 1-3.999.001A2 2 0 0 1 15 2M4.27 5H1.73a1.73 1.73 0 1 0 .001 3.461A1.73 1.73 0 0 0 1.73 5A1.73 1.73 0 0 0 0 6.73V9a1 1 0 0 0 1 1l-1 3h1v3h4v-3h1l-1-3a1 1 0 0 0 1-1V6.73A1.73 1.73 0 0 0 4.27 5"/><path fill="currentColor" d="M5 3a2 2 0 1 1-3.999.001A2 2 0 0 1 5 3m2 10v3h2v-3a1 1 0 0 0 1-1v-1.54A1.46 1.46 0 0 0 8.54 9H7.46A1.46 1.46 0 0 0 6 10.46V12a1 1 0 0 0 1 1"/></svg>
          <p><b>Familia</b></p>
        </div>
       
       </div>
       {/* svgs */}
       </section>
       <section>
        <div className="desktop-version">
      <div className="container_sections_home" >
      <article className="container_imgs_home">
        <Image
          className="imgs"
          src="/trabajo.jpg"
          alt=""
          width={550}
          height={3}
          priority
        />
        <div className="container_information">
          <h1 className="title_section">Accidentes de trabajo</h1>
          <p className="paragraph">Si tuvo un accidente de trabajo o padece 
            una enfermedad profesional,
            estamos para asesorarlo.</p>
            <Link href="/practice/accidente-trabajo">
              <button className="see_more">Ver mas <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" className="arrow" viewBox="0 0 15 15"><path fill="currentColor" d="M8.293 2.293a1 1 0 0 1 1.414 0l4.5 4.5a1 1 0 0 1 0 1.414l-4.5 4.5a1 1 0 0 1-1.414-1.414L11 8.5H1.5a1 1 0 0 1 0-2H11L8.293 3.707a1 1 0 0 1 0-1.414"/></svg></button>
            </Link>
        </div>

      </article>
        <article className="container_imgs_home">
       
        <div className="container_information">
          <h1 className="title_section">Accidentes de transito</h1>
          <p className="paragraph" >Somos especialistas en Accidentes de 
            Tránsito y realizamos los reclamos ante 
            los responsables de todo Accidente 
            de Tránsito.</p>
            <Link href="/practice/traffic-accident">
            <button className="see_more"  >Ver mas <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" className="arrow" viewBox="0 0 15 15"><path fill="currentColor" d="M8.293 2.293a1 1 0 0 1 1.414 0l4.5 4.5a1 1 0 0 1 0 1.414l-4.5 4.5a1 1 0 0 1-1.414-1.414L11 8.5H1.5a1 1 0 0 1 0-2H11L8.293 3.707a1 1 0 0 1 0-1.414"/></svg></button>
            </Link>
        </div>
         <Image
          className="imgs"
          src="/transito.jpg"
          alt=""
          width={545}
          height={380}
          priority
        />

      </article>
      <article className="container_imgs_home">
        <Image
          className="imgs"
          src="/family.jpg"
          alt=""
          width={550}
          height={38}
          priority
        />
        <div className="container_information">
          <h1 className="title_section">Sucesiones</h1>
          <p className="paragraph">Nuestro estudio brinda un servicio rápido 
            y flexible para dar inicio 
            al trámite sucesorio.</p>
            <Link href="/practice/successions">
                <button className="see_more">Ver mas <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" className="arrow" viewBox="0 0 15 15"><path fill="currentColor" d="M8.293 2.293a1 1 0 0 1 1.414 0l4.5 4.5a1 1 0 0 1 0 1.414l-4.5 4.5a1 1 0 0 1-1.414-1.414L11 8.5H1.5a1 1 0 0 1 0-2H11L8.293 3.707a1 1 0 0 1 0-1.414"/></svg></button>
            </Link>
        </div>
      </article>

      <article className="container_imgs_home" >
       
        <div className="container_information"  style={{marginBottom:"50px"}}>
          <h1 className="title_section"> Familia</h1>
          <p className="paragraph">Nuestro estudio brinda un servicio rápido 
            y flexible para dar inicio 
            al trámite sucesorio.</p>
            <Link href="/practice/family">
              <button className="see_more">Ver mas <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" className="arrow" viewBox="0 0 15 15"><path fill="currentColor" d="M8.293 2.293a1 1 0 0 1 1.414 0l4.5 4.5a1 1 0 0 1 0 1.414l-4.5 4.5a1 1 0 0 1-1.414-1.414L11 8.5H1.5a1 1 0 0 1 0-2H11L8.293 3.707a1 1 0 0 1 0-1.414"/></svg></button>
            </Link>
        </div>
         <Image
          className="imgs"
          src="/familia2.jpg"
          alt=""
          width={550}
          height={38}
          priority
           style={{marginBottom:"50px"}}
        />
      </article>
      </div>
      </div>
      {/* Cierra el contenedor de las secciones en el home */}



      <div className="mobile-version">
     <article className="container_imgs_home">
        <Image
          className="imgs"
          src="/trabajo.jpg"
          alt=""
          width={550}
          height={3}
          priority
        />
        <div className="container_information">
          <h1 className="title_section">Accidentes de trabajo</h1>
          <p className="paragraph">Si tuvo un accidente de trabajo o padece 
            una enfermedad profesional,
            estamos para asesorarlo.</p>
            <Link href="/practice/accidente-trabajo">
              <button className="see_more">Ver mas <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" className="arrow" viewBox="0 0 15 15"><path fill="currentColor" d="M8.293 2.293a1 1 0 0 1 1.414 0l4.5 4.5a1 1 0 0 1 0 1.414l-4.5 4.5a1 1 0 0 1-1.414-1.414L11 8.5H1.5a1 1 0 0 1 0-2H11L8.293 3.707a1 1 0 0 1 0-1.414"/></svg></button>
            </Link>
        </div>

      </article>
    <article className="container_imgs_home">
        <Image
          className="imgs"
          src="/transito.jpg"
          alt=""
          width={545}
          height={380}
          priority
        />
        <div className="container_information">
          <h1 className="title_section">Accidentes de transito</h1>
          <p className="paragraph" >Somos especialistas en Accidentes de 
            Tránsito y realizamos los reclamos ante 
            los responsables de todo Accidente 
            de Tránsito.</p>
            <Link href="/practice/traffic-accident">
            <button className="see_more"  >Ver mas <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" className="arrow" viewBox="0 0 15 15"><path fill="currentColor" d="M8.293 2.293a1 1 0 0 1 1.414 0l4.5 4.5a1 1 0 0 1 0 1.414l-4.5 4.5a1 1 0 0 1-1.414-1.414L11 8.5H1.5a1 1 0 0 1 0-2H11L8.293 3.707a1 1 0 0 1 0-1.414"/></svg></button>
            </Link>
        </div>
        

      </article>
      <article className="container_imgs_home">
        <Image
          className="imgs"
          src="/family.jpg"
          alt=""
          width={550}
          height={38}
          priority
        />
        <div className="container_information">
          <h1 className="title_section">Sucesiones</h1>
          <p className="paragraph">Nuestro estudio brinda un servicio rápido 
            y flexible para dar inicio 
            al trámite sucesorio.</p>
            <Link href="/practice/successions">
                <button className="see_more">Ver mas <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" className="arrow" viewBox="0 0 15 15"><path fill="currentColor" d="M8.293 2.293a1 1 0 0 1 1.414 0l4.5 4.5a1 1 0 0 1 0 1.414l-4.5 4.5a1 1 0 0 1-1.414-1.414L11 8.5H1.5a1 1 0 0 1 0-2H11L8.293 3.707a1 1 0 0 1 0-1.414"/></svg></button>
            </Link>
        </div>
      </article>

      <article className="container_imgs_home" >
        <Image
          className="imgs"
          src="/familia2.jpg"
          alt=""
          width={550}
          height={38}
          priority
        />
        <div className="container_information">
          <h1 className="title_section"> Familia</h1>
          <p className="paragraph">Nuestro estudio brinda un servicio rápido 
            y flexible para dar inicio 
            al trámite sucesorio.</p>
            <Link href="/practice/family">
              <button className="see_more">Ver mas <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" className="arrow" viewBox="0 0 15 15"><path fill="currentColor" d="M8.293 2.293a1 1 0 0 1 1.414 0l4.5 4.5a1 1 0 0 1 0 1.414l-4.5 4.5a1 1 0 0 1-1.414-1.414L11 8.5H1.5a1 1 0 0 1 0-2H11L8.293 3.707a1 1 0 0 1 0-1.414"/></svg></button>
            </Link>
        </div>
        
      </article>

    {/* Otros artículos... */}
  </div>
        </section>
      </main>
    </div>
  );
}
