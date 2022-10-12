import React, { useState, useEffect } from "react";
import ItemCard from "./ItemCard";
import { useParams } from "react-router-dom";

const productos = [
  {
    id: 1,
    nombre: "Haikyuu",
    precio: "590",
    categoria: 1,
  },
  { id: 2, nombre: "Shuumatsu", precio: "750", categoria: 2 },
  { id: 3, nombre: "Berserk", precio: "1250", categoria: 1 },
];

export const ItemDetail = () => {
  const [item, setItem] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    getProducts()
      .then((res) => {
        setItem(
          res.filter((p) => {
            return p.id == Number(id);
          })
        );
        console.log(
          res.filter((p) => {
            return p.id == Number(id);
          })
        );

        /* res= respuesta/ err= error */
      })
      .catch((err) => {
        console.log("err:" + err);
      });
  }, [id]);
  const getProducts = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(productos);
      }, 3000);
    });
  };

  return (
    <>
      <div>
        <h1> ItemDetail</h1>
        {item.map((i) => (
          <ItemCard key={i.id} {...i} />
        ))}
      </div>
    </>
  );
};
export default ItemDetail;
