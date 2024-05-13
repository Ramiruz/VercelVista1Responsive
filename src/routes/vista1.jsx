import Mainbg from "../../components/mainbg";
import Navbar_ from "../../components/nbar";
import Container from "../../components/rectangle";
import "../App.css";
import React, { useState } from 'react';
import logo from '../assets/Bg.png'; // Importa la imagen aquí


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
                  <section className="ae ">
                    <div className="absolute">
                      <Navbar_/>
                    </div>
                    <div
                       style={{
                       backgroundImage: `url(${logo})`,
                       backgroundSize: 'cover',
                       backgroundPosition: 'center',
                       height: '100vh',
                      width: '100vw'
                              }}
                  ></div>
                  <h1 className=" text-center absolute font-bold text-xl text-white " style={{top: 140}}>
                    The recommendation tool to generate and virtually test polymers</h1>

                <div className="Contenedor1 absolute left-20" style={{top: 240}}>
                  <Container/>
                <div className="CText absolute z-10 top-0">
                              <a href="/mix_polymers" target="_blank" rel="noopener noreferrer">
                                <div className="logo absolute w-20 ml-20" style={{top: '-35px'}}>
                                  <img src={"/flask.png"} className= "rounded-full  dark: shadow-lg" alt="Logo" />
                                 </div>
                              
                              <h2 className=" text-3xl text-center font-weight mt-10 text-blue-500">Mix Polymers</h2>
                              <p className="text-left ml-3 font-weight text-l"> 
                                <p>ㅤ</p> 
                             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eu
                              tortor nec lacus consectetur euismod in non ante.
                              </p>
                              </a>
                  </div>
                  </div>
                  
                  <div className="Contenedor2 absolute left-20" style={{top: 520}}>
                  <Container/>
                <div className="CText absolute z-10 top-0">
                              <a href="/search_polymers" target="_blank" rel="noopener noreferrer">
                                <div className="logo absolute w-20 ml-20" style={{top: '-35px'}}>
                                  <img src={"/glass.png"} className= "rounded-full  dark: shadow-lg" alt="Logo" />
                                 </div>
                              
                              <h2 className=" text-3xl text-center font-weight mt-10 text-blue-500">Search Polymers</h2>
                              <p className="text-left  ml-3 font-weight"> 
                                <p>ㅤ</p> 
                             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eu
                              tortor nec lacus consectetur euismod in non ante.
                              </p>
                              </a>
                  </div>
                  </div>

                  <div className="Contenedor3 absolute left-20" style={{top: 800}}>
                  <Container/>
                <div className="CText absolute z-10 top-0">
                              <a href="/mix_polymers" target="_blank" rel="noopener noreferrer">
                                <div className="logo absolute w-20 ml-20" style={{top: '-35px'}}>
                                  <img src={"/right.png"} className= "rounded-full  dark: shadow-lg" alt="Logo" />
                                 </div>
                              
                              <h2 className=" text-3xl text-center font-weight mt-10 text-blue-500">Find Polymers</h2>
                              <p className="text-left ml-3 font-weight text-l"> 
                                <p>ㅤ</p> 
                             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eu
                              tortor nec lacus consectetur euismod in non ante.
                              </p>
                              </a>
                  </div>
                  </div>

                  </section>
                }
              </section>
            ) : (

              <section className="contenido-principal">
                {
                  <section className="contenido-principal"> 
                  <Mainbg />
                  <Navbar_ />
                    <h1 className=" text-center font-bold text-4xl mt-8 text-white ">The recommendation tool to generate and virtually test polymers</h1>
                    <div id = "containers">
                        <div className=" m-12 gap-8 mt-0">
                            <div className="contenido absolute gap-8  top-60 " >
                              <Container></Container>
                              <div className="CText absolute z-10 top-0">
                              <a href="/mix_polymers" target="_blank" rel="noopener noreferrer">
                                <div className="logo absolute w-20 ml-40" style={{top: '-35px'}}>
                                  <img src={"/flask.png"} className= "rounded-full  dark: shadow-lg" alt="Logo" />
                                 </div>
                              
                              <h2 className=" text-4xl text-center font-weight mt-10 text-blue-500">Mix Polymers</h2>
                              <p className="text-left ml-3 font-weight text-xl"> 
                                <p>ㅤ</p> 
                             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eu
                              tortor nec lacus consectetur euismod in non ante.
                              </p>
                              </a>
                              </div>
                              </div>
                            <div className="container2 absolute ml-96 mt-20  top--2" style={{top: 159, left: 100,}}>
                          <Container></Container>   
                          <div className="CText absolute z-10 top-0">
                              <a href="/search_polymers" target="_blank" rel="noopener noreferrer">
                                <img src={"/glass.png"} className="rounded-full logo w-20  ml-40 absolute border-black dark: shadow-lg" style={{top: '-35px'}} alt="Logo" />
                              <h2 className=" text-4xl text-center font-weight text-blue-500 mt-10">Search for Polymers</h2>
                              <p className="text-left ml-3 font-weight text-xl"> 
                                <p>ㅤ</p> 
                             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eu
                              tortor nec lacus consectetur euismod in non ante.
                              </p>
                              </a>
                              </div>               
                        </div>
                        <div className="container3 absolute mr-10 ml-96 mt-20 top--2 " style={{top: 159, left: 530,}}>
                          <Container></Container>
                          <div className="CText absolute z-10 top-0">
                              <a href="/find_polymers" target="_blank" rel="noopener noreferrer">
                                  <img src={"/right.png"} className="rounded-full logo w-20 absolute ml-40 border-black dark: shadow-lg" style ={{top: '-35px'}}alt="Logo" />
                              
                              <h2 className=" text-4xl text-center font-weight text-blue-500 mt-10">Find Polymers</h2>
                              <p className="ae text-left ml-3 font-weight text-xl"> 
                                <p>ㅤ</p> 
                             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eu
                              tortor nec lacus consectetur euismod in non ante.
                              </p>
                              </a>
                              </div>                  
                        </div>
                        </div>
                        
                    </div>
                  </section>
                }

              </section>
            )}
          </div>
    )
  }

/* 

*/ 