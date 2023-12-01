import React from "react";
import "../styles/components/pages/Novedades.css";
import { useState, useEffect } from "react";
import axios from "axios";
import NovedadItem from "../components/novedades/NovedadItem";

const Novedades = (props) => {
  const [loading, setLoading] = useState(false);
  const [novedades, setNovedades] = useState([]);

  useEffect(() => {
    const cargarNovedades = async () => {
      setLoading(true);
      const response = await axios.get("http://localhost:3000/api/novedades");
      setNovedades(response.data);
      setLoading(false);
    };
    cargarNovedades();
  }, []);
  return (
    <div className="stylesNovedades">
      <h2>Novedades</h2>
      <div className="novedades">
        {loading ? (
          <p>Cargando...</p>
        ) : (
          novedades.map((novedad) => (
            
            <NovedadItem 
              key={novedad.id}
              imagen={novedad.imagen}
              title={novedad.titulo}
              subtitle={novedad.subtitulo}
              body={novedad.cuerpo}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default Novedades;
