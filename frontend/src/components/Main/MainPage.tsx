import React from 'react';
import { useSelector } from 'react-redux';
import CardList from '../CardList/CardList';
import { RootState } from '../reducer/store';

function MainPage(): JSX.Element {
  const { score } = useSelector((state: RootState) => state.userState);

  return (
    <>
      <div className="d-flex justify-content-center align-items-center mb-4">
        <h2>Ваш счет: {score}</h2>
      </div>

      <CardList />
    </>
  );
}

export default MainPage;
