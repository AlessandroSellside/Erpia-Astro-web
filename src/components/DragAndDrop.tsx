import { useState } from "react";
import upload from '../../public/upload.webp'
const DragAndDrop = () => {
  //procesado del archivo y llamado de cloud function
  const [ImageSelectedPrevious, setImageSelectedPrevious] = useState(null);
  const changeImage = (e:any) => {
    console.log(e.target.files);
    if (e.target.files[0] !== undefined) {
      const reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload = (e:any) => {
        e.preventDefault();
        setImageSelectedPrevious(e.target.result); // le damos el binario de la imagen para mostrarla en pantalla
      };
    }
  };

  return (
    <>
       <div className="animate-fade-up">
      <div className=" flex justify-center items-center">
        <br />
        <div className="image-upload-wrap">
          <input
            className="file-upload-input file-upload-input"
            type="file"
            accept="image/*"
            multiple
            onChange={(e:any) => {
              changeImage(e);
            }}
          />
          <div className="items-center flex flex-col justify-center text-white my-20">
            <h3>Drag and drop a file or select add Image</h3>
            <img className="w-10" src={upload.src} alt="upload" />
          </div>
        </div>

      </div>
    </div>

    </>
  )
}
export default DragAndDrop;



