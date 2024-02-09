import Audio from "../Icons/Audio";
import Pdf from "../Icons/Pdf";

export default function BotonCorto() {
  return (
    
    <>
         <div className='flex gap-4 md:gap-52 p-4'>
            <button className=" w-26 md:w-auto h-auto bg-slate-800/70 border p-4 items-center rounded-md text-white transition-all hover:scale-105 duration-300">
            <Pdf/>
            </button>
            <button className="  w-26 md:w-auto h-auto bg-slate-800/70 border p-4 items-center rounded-md text-white transition-all hover:scale-105 duration-300">
            <Audio/>
            </button>
        </div>
    </>

  )
}
