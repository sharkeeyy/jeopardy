import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { RootState } from '../reducer/store';

function CardPage():JSX.Element {
  const { QuestionId } = useParams();
  const { questions } = useSelector((state:RootState) => state.qState);
  const navigate = useNavigate();
  const que = questions.find((cardItem) => cardItem.id === Number(QuestionId));

  function clickHandler():void {

  }
  return (
    <div>
      <h3>{que?.theme}</h3>
      <h2>{que?.name}</h2>
      <input />
      <button type="button" onClick={clickHandler}>Your answer</button>
    </div>
  );
}

export default CardPage;
