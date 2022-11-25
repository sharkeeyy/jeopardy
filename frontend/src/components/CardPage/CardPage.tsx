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
    <div className=" d-flex justify-content-center align-items-center w-100 h-100 m-5">
    <div className="container border border-4 rounded p-3">
    <div className="card-body">
      <h1 className="card-title">{que?.theme}</h1>
      <h2 className="card-text">{que?.name}</h2>
      <input type="text" value={value} onChange={(e) => setValue(e.target.value)} />
      <button type="button" onClick={clickHandler} className="btn btn-primary ">Your answer</button>
    </div>
    </div>
    </div>
  );
}

export default CardPage;
