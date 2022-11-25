import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import styles from './auth.module.css';
import * as api from '../../App/api';
import { Res } from '../../types/AllTypes';

function Auth(): JSX.Element {
  const { route } = useParams();

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  if (route === 'logout') {
    api[route]().then((res: Res) => res.message === 'Session destroy' && dispatch({ type: 'LOGOUT' }));
    navigate('/');
  }

  const auth = (e: React.FormEvent): void => {
    e.preventDefault();
    if (route === 'registration') {
      api[route]({ name, password }).then((res: Res) => {
        if (res.message === 'такой чел уже есть') {
          navigate('/auth/login');
        } else {
          console.log(res);
          dispatch({ type: 'AUTH', payload: res });
          navigate('/');
        }
      });
    }
  };
  return (
    <div className="container d-flex justify-content-center align-items-center">
      <div className={styles.form__container}>
        <form onSubmit={auth}>
          <div className="mb-3">
            <label className="form-label text-white w-100">
              Email
              <input className="form-control" name="email" type="email" onChange={(e) => setName(e.target.value)} />
            </label>
          </div>
          <div className="mb-3">
            <label className="form-label text-white w-100">
              Password
              <input className="form-control" name="password" type="password" onChange={(e) => setPassword(e.target.value)} />
            </label>
          </div>
          <button className="btn btn-secondary" type="submit">Sign in</button>
        </form>
      </div>
    </div>

  );
}

export default Auth;
