//imports state/effect/funciones
import { useState, useEffect } from "react";
import BotonCorto from "./Buttons/BotonCorto";
 const BotonesAccion = () => {
    //logica de subida de archivos
    const [isMidScreen,setMidScreen]= useState(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia('(min-width: 768px)');
        const handleMediaQueryChange = (e:any) => {
          setMidScreen(e.matches);
        };
    
        // Comprueba el estado inicial
        handleMediaQueryChange(mediaQuery);
    
        // Escucha cambios en el media query
        mediaQuery.addListener(handleMediaQueryChange);
    
        // Limpieza al desmontar el componente
        return () => {
          mediaQuery.removeListener(handleMediaQueryChange);
        };
      }, []);

  return (
    <>
        
        <div className=" text-white mt-32 mx-auto left-0 right-0 animate-fade-up">
            <div className="flex justify-center text-5xl md:text-6xl font-extrabold text-pretty tracking-widest">
                <h1 className="bg-gradient-to-t from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent w-auto">ERP.IA</h1>
            </div>
            <p className="text-center p-4 md:text-xl text-lg">
                Procesa tus archivos multimedia de manera facil y rapida, extrae el texto!
            </p>
            <span className="flex justify-center text-center p-4 md:text-xl text-lg font-medium">
                ¿Con que tipo de archivo quieres trabajar?
            </span>
        </div>

        <div className="flex justify-center mx-4 animate-fade-up">
         
          <BotonCorto/>
        </div> 
    
    </>
  )
}
export default BotonesAccion;
