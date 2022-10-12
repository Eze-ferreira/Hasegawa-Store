import React from 'react'
import ItemCard from './ItemCard'
const ItemListContainer = ({greeting}) => {
    const estilitos = {backgroundcolor: "aliceblue", padding:'20px', margin:'20px' }
  return (
    <>
      <div estilitos={estilitos}>
      <h1></h1>{greeting}
      </div>
    </>
      
  )
}
export default ItemListContainer
