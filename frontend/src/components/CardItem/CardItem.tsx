import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Question } from '../../types/AllTypes';
import './CardItem.css';

function CardItem({ card }: { card: Question }): JSX.Element {
  // const [enabled, setEnabled] = useState(false);
  // const [isModal, setModal] = useState(false);

  const navigate = useNavigate();

  function navHandler(): void {
    navigate(`/cards/${card.id}`);
  }

  // function modalHandler(): void {
  //   setModal(false);
  // }

  return (
    <>
      {card.isEnable ? (
        <div
          className="card m-2 d-flex flex-column justify-content-center align-items-center bg-info"
          onClick={navHandler}
        >
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
      {/* {isModal && (
        <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="staticBackdropLabel">{card.theme}</h5>
              </div>
              <div className="modal-body">
                <h2>{card.name}</h2>
                <input />
              </div>
              <div className="modal-footer">
                <button type="button" onClick={modalHandler}>Your answer</button>
              </div>
            </div>
          </div>
        </div>
      )} */}
    </>
  );
}

export default CardItem;
