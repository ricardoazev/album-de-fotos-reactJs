import Foto from "./Foto"

const FotoList = ({ fotos, setFotoAmpliada }) => {
  return (
    <div className="album">
      {Array.isArray(fotos) && fotos.map((foto) => (
        <Foto key={foto.id} dados={foto} setFotoAmpliada={setFotoAmpliada} />
      ))}
    </div>
  );
};


export default FotoList
