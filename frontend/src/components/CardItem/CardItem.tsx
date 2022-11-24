import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Question } from '../../types/AllTypes';
import "./CardItem.css";

function CardItem({ card }: { card: Question }): JSX.Element {
  const [enabled, setEnabled] = useState(false);

  const navigate = useNavigate();

  function navHandler(): void {
    navigate(`/cards/${card.id}`);
  }

  return (
    <>
      {card.isEnable ? (
        <div 
          className="card m-2 d-flex flex-column justify-content-center align-items-center bg-info"
          onClick={navHandler}>
          <h4>{card.theme}</h4>
          <h2>{card.price}</h2>
        </div>
      ) : (
        <div 
          className="card m-2 d-flex flex-column justify-content-center align-items-center bg-secondary disabled">
          <h4>{card.theme}</h4>
          <h4>{card.price}</h4>
        </div>
      )}
    </>

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
