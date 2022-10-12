import React from "react";
import { Link } from "react-router-dom";


const ItemCard = ({ id, nombre, precio, categoria }) => {
  return (
    <>
    <Link to = {`/ItemDetail/${id}`}>
    <div>
        <div className="recomendContainer">
          <div className="recomend-card">
            <p className="recomenda-title">Titulo:{nombre}</p>
            <img
              className="recomend-card-img"
              src="../img/berserk1.jpg"
              alt="tomo 1 berserk"
            ></img>
            <p className="recomenda-title">UYU {precio}</p>
          </div>
        </div>
      </div>
    </Link>
      
    </>
  );
};

export default ItemCard;
