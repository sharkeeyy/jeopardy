import React from 'react';
import { useSelector } from 'react-redux';
import CardItem from '../CardItem/CardItem';
import { RootState } from '../reducer/store';

function CardList(): JSX.Element {
  const { questions } = useSelector((state: RootState) => state.qState);

  return (
    <div className="container d-flex flex-row flex-wrap">
      <ul className="cards__list">
        {questions.map((card) => (
          <CardItem key={card.id} card={card} />
        ))}
      </ul>
    </div>
  );
}

export default CardList;
