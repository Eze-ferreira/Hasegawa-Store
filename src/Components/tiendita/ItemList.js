import React, { useState, useEffect } from "react";
import ItemCard from "./ItemCard";
import { useParams , Link } from "react-router-dom";


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

export const ItemList = () => {
  const [Items, setItems] = useState([]);
  const { categoriaId } = useParams();

  useEffect(() => {
    getProducts()
      .then((res) => {
        if (categoriaId != null) {
          setItems(
            res.filter((p) => {
              console.log(p);
              return p.categoria === Number(categoriaId);
            })
          );
          console.log(Items);
          console.log(res);
        } else {
          setItems(res);
        }
        /* res= respuesta/ err= error */
      })
      .catch((err) => {
        console.log("err:" + err);
      });
  }, [categoriaId]);
  const getProducts = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(productos);
      }, 3000);
    });
  };
  console.log("trayendo productos...");

  return (
    <>
      <div>
        <h1> ItemList </h1>
        {Items.map((item) => (
          <ItemCard key={item.id} {...item} />
        ))}
      </div>
    </>
  );
};
export default ItemList;
