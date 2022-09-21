import React from 'react'

const ItemListContainer = ({greeting}) => {
    const estilitos = {backgroundcolor: "aliceblue", padding:'20px', margin:'20px' }
  return (
    <div estilitos={estilitos}>{greeting}</div>
  )
}
export default ItemListContainer
