import { useEffect } from 'react';
import './App.css';
import React, { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import Auth from '../components/Auth/Auth';
import CardPage from '../components/CardPage/CardPage';
import Header from '../components/Header/Header';
import MainPage from '../components/Main/MainPage';
import Results from '../components/Results/Results';

function App():JSX.Element {
  const array = [
    {
      id: 1,
      theme: 'Trash',
      name: 'Question #1',
      answer: '1',
      price: 100,
      isEnable: true,
    },
    {
      id: 2,
      theme: 'Trash',
      name: 'Question #2',
      answer: '2',
      price: 200,
      isEnable: true,
    },
    {
      id: 3,
      theme: 'Trash',
      name: 'Question #3',
      answer: '3',
      price: 300,
      isEnable: true,
    },
    {
      id: 4,
      theme: 'Trash',
      name: 'Question #4',
      answer: '4',
      price: 400,
      isEnable: true,
    },
    {
      id: 5,
      theme: 'Trash',
      name: 'Question #5',
      answer: '5',
      price: 500,
      isEnable: true,
    },
    {
      id: 6,
      theme: 'Elbrus',
      name: 'Question #1',
      answer: '1',
      price: 100,
      isEnable: true,
    },
    {
      id: 7,
      theme: 'Elbrus',
      name: 'Question #2',
      answer: '2',
      price: 200,
      isEnable: true,
    },
    {
      id: 8,
      theme: 'Elbrus',
      name: 'Question #3',
      answer: '3',
      price: 300,
      isEnable: true,
    },
    {
      id: 9,
      theme: 'Elbrus',
      name: 'Question #4',
      answer: '4',
      price: 400,
      isEnable: true,
    },
    {
      id: 10,
      theme: 'Elbrus',
      name: 'Question #5',
      answer: '5',
      price: 500,
      isEnable: true,
    },
    {
      id: 11,
      theme: 'JavaScript',
      name: 'Question #1',
      answer: '1',
      price: 100,
      isEnable: true,
    },
    {
      id: 12,
      theme: 'JavaScript',
      name: 'Question #2',
      answer: '2',
      price: 200,
      isEnable: true,
    },
    {
      id: 13,
      theme: 'JavaScript',
      name: 'Question #3',
      answer: '3',
      price: 300,
      isEnable: true,
    },
    {
      id: 14,
      theme: 'JavaScript',
      name: 'Question #4',
      answer: '4',
      price: 400,
      isEnable: true,
    },
    {
      id: 15,
      theme: 'JavaScript',
      name: 'Question #5',
      answer: '5',
      price: 500,
      isEnable: true,
    },
  ];

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: 'INIT_Q', payload: array });
  });

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Header />}>
          <Route path="/main" element={<MainPage />} />
          <Route path="/results" element={<Results />} />
          <Route path="/cards/:QuestionId" element={<CardPage />} />
          <Route path="/registration" element={<Auth />} />
          <Route path="/login" element={<Auth />} />
          <Route path="/logout" element={<Auth />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
