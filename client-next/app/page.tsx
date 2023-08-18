import React from 'react';
import NextLink from "next/link";
import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code"
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import { FaBicycle, FaBus, FaCar, FaCity, FaTruck } from 'react-icons/fa';
import LiveMap from '@/components/map';


const HomePage = () => {
  
  return (<section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
  <div className="inline-block max-w-lg text-center justify-center">
    <h1 className={title()}>Contratá &nbsp;</h1>
    <h1 className={title({ color: "violet" })}>Facil&nbsp;</h1>
    <br />
    <h1 className={title()}>Bienvenido a Delivery Box.</h1>
    <p>La forma más rápida y confiable de enviar tus paquetes</p>
    <h2 className={subtitle({ class: "mt-4" })}>
    Rapida y moderna App, para tus entregas.
    </h2>
  </div>
  <section className='flex flex-col items-center justify-center gap-4 py-8 md:py-10'>
          <h2>Servicios de Entrega</h2>
          <p>Elige entre una variedad de opciones de transporte para tus paquetes:</p>
          <ul>
            <FaBicycle className="li-icon"/>
            <li>Moto</li> 
            <FaCar />
            <li>Carry</li>
            <FaTruck/>
            <li>Camión</li>
            <LiveMap/>
            {/* Agrega más opciones según tus necesidades */}
          </ul>
        </section>
        <section className='flex flex-col items-center justify-center gap-4 py-8 md:py-10'>
          <h2>Contratación Fácil</h2>
          <p>Contrata nuestros servicios de manera sencilla y rápida:</p>
          <button>¡Contrata Ahora!</button>
        </section>
       
  <div className="flex gap-3">
    <Link
      className={buttonStyles({ color: "primary", radius: "full", variant: "shadow" })}
    >
      Terminos y Condiciones
    </Link>
    <Link
      isExternal
      as={NextLink}
      href={siteConfig.links.github}
      className={buttonStyles({ variant: "bordered", radius: "full" })}
      
    >
      <GithubIcon size={20} />
      GitHub
    </Link>
  </div>

  <div className="mt-8">
    <Snippet hideSymbol hideCopyButton variant="flat">
      <span>
        Solicita tu servicio y registrate Aqui! <Code color="primary">User</Code>
      </span>
    </Snippet>
  </div>
</section>
    
    
  );
};

export default HomePage;
