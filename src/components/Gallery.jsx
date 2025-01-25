import React, { useState, useEffect } from 'react';

const Galeria = () => {
  const [imagenes, setImagenes] = useState([]);
  const [pagina, setPagina] = useState(1);

  useEffect(() => {
    const fetchImagenes = async () => {
      const response = await fetch(`https://api.unsplash.com/photos?page=${pagina}&per_page=20&client_id=tZgbb7Ptpsirg_HQKgWwMnslcMJM1RsBqq9H62pKJhM`);
      const data = await response.json();
      setImagenes(data);
    };
    fetchImagenes();
  }, [pagina]);

  const cargarMas = () => {
    setPagina(pagina + 1);
  };

  return (
    <div>
      {
        <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">Galería de imágenes</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {imagenes.map((foto) => (
            <div key={foto.id} className="rounded overflow-hidden shadow-lg bg-gray-700">
              <img src={foto.urls.regular} alt={foto.alt_description} loading="lazy" className="w-full h-60 object-cover" />
              <div className="p-4 bg-gray-800 text-white h-full">
                <p className="text-lg font-semibold">{foto.user.name}</p>
                <p>{foto.alt_description}</p>
              </div>
            </div>
          ))}
          
        </div>
        {imagenes.length > 0 && (
            <button
              onClick={cargarMas}
              className="block mx-auto mt-8 rounded bg-blue-500 px-4 py-2 text-white"
            >
              Refrescar
            </button>
          )}
      </div>
      }
    </div>
  );
};

export default Galeria;