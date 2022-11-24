import React from 'react';

function CardItem({ card } : { card : Question}): JSX.Element {
 return (
  {card.isEnabled && 
    ( 
      <div className="card">
        {card.price}
      </div>  
    )}
  {!card.isEnabled && 
    ( 
      <div className="card disabled">
        {card.price}
      </div>  
    )}
 );
}

export default CardItem;