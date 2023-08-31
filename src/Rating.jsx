import React, { useState } from 'react'
import Star from './Star'


const Rating = () => {


  const [rating, setRating] = useState(0)

  const handleStarClick = (selectedRating) => {
    setRating(selectedRating)
  };


  return (
    <div>

      {[1, 2, 3, 4, 100].map((number) => (

        <Star
          key={number}
          selected={number <= rating}
          onSelect={() => handleStarClick(number)}
        />
      ))}

      <p>Seleced Reting: {rating}</p>
    </div>
  )
}


export default Rating 