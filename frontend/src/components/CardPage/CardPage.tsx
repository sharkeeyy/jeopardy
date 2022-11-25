import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { RootState } from '../reducer/store';

function CardPage(): JSX.Element {
  const { QuestionId } = useParams();
  const { questions } = useSelector((state: RootState) => state.qState);
  const [value, setValue] = useState('');
  const [isRight, setRight] = useState<'none' | boolean>('none');

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const que = questions.find((cardItem) => cardItem.id === Number(QuestionId));

  function clickHandler(): void {
    if (que?.answer === value) {
      setRight(true);
      dispatch({ type: 'ADD_SCORE', payload: que?.price });
    } else {
      setRight(false);
    }
    dispatch({ type: 'DISABLE_Q', payload: que });
    navigate('/main');
  }

  return (
    <div>
      <h3>{que?.theme}</h3>
      <h2>{que?.name}</h2>
      <input type="text" value={value} onChange={(e) => setValue(e.target.value)} />
      <button type="button" onClick={clickHandler}>Your answer</button>
    </div>
  );
}

export default CardPage;
