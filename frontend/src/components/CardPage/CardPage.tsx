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
      setTimeout(() => {
        setRight(true);
      }, 300);
      dispatch({ type: 'ADD_SCORE', payload: que?.price });
    } else {
      setTimeout(() => {
        setRight(false);
      }, 300);
    }
    dispatch({ type: 'DISABLE_Q', payload: que });
  }

  return (
    <div className="d-flex justify-content-center align-items-center w-100 h-100 m-5">
      {isRight === 'none' && (
        <div className="container border border-5 rounded p-3">
          <div className="card-body">
            <h1 className="card-title mb-1 text-white">{que?.theme}</h1>
            <h3 className="card-text mb-3 text-white">{que?.name}</h3>
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Your answer"
                aria-label="Answer"
                aria-describedby="basic-addon2"
                value={value}
                onChange={(e) => setValue(e.target.value)}
              />
            </div>
            <button type="button" onClick={clickHandler} className="btn btn-primary">Try it!</button>
          </div>
        </div>
      )}
      {isRight === true && (
        <div className="container border border-5 border-success rounded p-3">
          <div className="card-body">
            <h1 className="card-title mb-1 text-white">{que?.theme}</h1>
            <h3 className="card-text mb-3 text-white">{que?.name}</h3>
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Your answer"
                aria-label="Answer"
                aria-describedby="basic-addon2"
                value={value}
                onChange={(e) => setValue(e.target.value)}
              />
            </div>
            <button type="button" onClick={clickHandler} className="btn btn-primary">Try it!</button>
            <p className="text-success">Правильно!</p>
            <button type="button" className="btn btn-info" onClick={() => navigate('/main')}>Next</button>
          </div>
        </div>
      )}
      {isRight === false && (
        <div className="container border border-5 rounded border-danger p-3">
          <div className="card-body">
            <h1 className="card-title mb-1 text-white">{que?.theme}</h1>
            <h3 className="card-text mb-3 text-white">{que?.name}</h3>
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Your answer"
                aria-label="Answer"
                aria-describedby="basic-addon2"
                value={value}
                onChange={(e) => setValue(e.target.value)}
              />
            </div>
            <button type="button" onClick={clickHandler} className="btn btn-primary">Try it!</button>
            <p className="text-danger">Не угадали!</p>
            <button type="button" className="btn btn-info" onClick={() => navigate('/main')}>Next</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default CardPage;
