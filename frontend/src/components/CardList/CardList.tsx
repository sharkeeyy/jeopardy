import React from 'react';
import CardItem from '../CardItem/CardItem';

function CardList(): JSX.Element {
  const { questions } = useSelector((state: RootState) => state.adState);

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