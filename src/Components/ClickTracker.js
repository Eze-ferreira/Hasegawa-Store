import React, { useEffect, useState } from 'react'

const ClickTracker = () => {
    const [counter, setCounter] = useState(0)

    useEffect ( ()=>{
        console.log('se montó el componente')
    }, [] ) /* si le doy un array vacío a un useEffect este se ejecuta en el montaje de la funcion  */
    useEffect( ()=>{
        console.log('se hizo render')
    })

    const clickHandler = () => {
        console.log('Hiciste click');
        setCounter( counter + 1 )
    }
  return (
    <div>
        <div> 
            <div className='m-5'>{ counter }</div>
        </div>
        <button onClick={clickHandler} className='btn m.5'>¡click aqui!</button>
    </div>
  )
}

export default ClickTracker