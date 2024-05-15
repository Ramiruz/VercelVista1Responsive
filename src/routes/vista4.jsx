import React, { useState } from 'react';
import Background1 from '../../components/BackgroundSearch';
import Navbar_ from '../../components/nbar';
import Search from '../../components/Search';


export default function Vista1() {
    const [isMobile, setIsMobile] = useState(false);

    const handleResize = () => {
      if (window.innerWidth < 768) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };

    window.addEventListener('resize', handleResize);

    console.log('isMobile:', isMobile);

    return (
        <div className={isMobile? 'obile' : ''}>
          {isMobile? (
            <section className="contenido-mb">
              {
               <h1 className='absolute'> Hola mundo</h1>
              }
            </section>
          ) : (

            <section className="contenido-principal">
              {
                <section className='principal'>
                  <Background1/>
                  <div className='Navbarrr absolute'>
                    <Navbar_/>
                  </div>
                  <h1 className=" text-center absolute font-bold text-3xl ml-60 mt-20 text-white ">
                    The recommendation tool to generate and virtually test polymers</h1>
                  <h1 className='absolute'> hola escritorio </h1>
                  <div className='Search absolute mt-60 ml-96'>
                    <Search/>
                  </div>
                </section>
                
                
                
              }

            </section>
          )}
        </div>
  )
}
