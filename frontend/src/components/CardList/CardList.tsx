import React from 'react';
import { useSelector } from 'react-redux';
import CardItem from '../CardItem/CardItem';
import { RootState } from '../reducer/store';

function CardList(): JSX.Element {
  const { questions } = useSelector((state: RootState) => state.qState);

  return ( 
    <div className="container d-flex flex-row flex-wrap">
      {questions.map((card) => (
        <CardItem key={card.id} card={card} />
      ))}
    </div>
  );
}

export default CardList;
