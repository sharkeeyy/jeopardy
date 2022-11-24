import React from 'react';
import { Question } from '../../types/AllTypes';

function CardItem({ card } : { card : Question }): JSX.Element {
 return (
  <div>
    {card.price}
  </div>
  // {card.isEnabled &&
  //   (
  //     <div className="card">
  //       {card.price}
  //     </div>
  //   )}
  // {!card.isEnabled &&
  //   (
  //     <div className="card disabled">
  //       {card.price}
  //     </div>
  //   )}
      //  <div className="card">
      //   {card.price}
      // </div>
//   {card.isEnabled
//   ? (
//     <div className="card">
//       {card.price}
//     </div>)
// : (
//   <div className="card disabled">
//     {card.price}
//   </div>
//   )}
 );
}

export default CardItem;
