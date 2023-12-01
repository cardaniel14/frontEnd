import React from "react";
import "./NovedadItem.css";

const NovedadItem = (props) => {
  const { title, subtitle, imagen, body } = props;

  return (
    <div className="novedades">
      <div className="novedadesPrueba">
      <img src={imagen} alt="novedad" className="imagenNovedades" />
      <h3 className="title">{title}</h3>
      <p className="subtitle">{subtitle}</p>
      <p className="body">{body}</p>
      {/* <div dangerouslySetInnerHTML={{ __html: body }} /> */}
      <hr />
      </div>
    </div>
  );
};

export default NovedadItem;
