import React from 'react'


const Star = ({ selected, onSelect }) => {

  return (

    <span onClick={onSelect} style={{ cursor: 'pointer', color: selected ? 'gold' : 'gray' }}>

      ★

    </span>
  )
}

export default Star