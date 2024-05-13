import { useState } from 'react'
import "../src/App.css"
export default function Container (){
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
      <section>
        <div className=" bg-[#F9F7F7] w-60 h-60 rounded-lg">
        </div> 
      </section>
    ) : (

      <section className="cuadro-escritorio">
        {
          <div>
       <div className=" bg-[#F9F7F7] w-96 h-96 rounded-lg">
        </div> 
      </div>
        }

      </section>
    )}
  </div>
    );
  }

/*




*/