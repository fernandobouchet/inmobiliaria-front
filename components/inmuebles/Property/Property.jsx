import React from "react";
import "./property.css";

const Property = ({ inmueble, image }) => {

  
  return (
    <div className="inmueble">
      <div className="images">
        <img src={inmueble.image} alt="" />
      </div>
      <div className="inmueble-container">
        <div className="description">
          {inmueble.description} Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Asperiores, perspiciatis?
        </div>
        <div className="price">
          <h4>
            <b>
              {inmueble.price}
              {inmueble.typeMoney || " USD"}{" "}
            </b>
            + $ 10000 Expensas{" "}
          </h4>
        </div>
        <div className="meters">
          <label>
            <b>{inmueble.maxSquareMeters}</b> m² totales <b>{inmueble.minSquareMeters}</b> m² cubiertos
          </label>
        </div>
        <div className="commodities">
          <label>
            <b>{inmueble.numbeOfAmbients}</b> ambientes <b>Pileta</b>:Si{" "}
            <b>Estacionamiento</b>:No
          </label>
          <img src={inmueble.user} />
        </div>
      </div>
    </div>
  );
};

export default Property;
