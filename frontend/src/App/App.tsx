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
      theme: '1',
      name: 'Question #1',
      answer: '1',
      price: 100,
      isEnable: true,
    },
    {
      id: 2,
      theme: '1',
      name: 'Question #2',
      answer: '2',
      price: 200,
      isEnable: false,
    },
    {
      id: 3,
      theme: '1',
      name: 'Question #3',
      answer: '3',
      price: 300,
      isEnable: false,
    },
    {
      id: 4,
      theme: '1',
      name: 'Question #4',
      answer: '4',
      price: 400,
      isEnable: true,
    },
    {
      id: 5,
      theme: '1',
      name: 'Question #5',
      answer: '5',
      price: 500,
      isEnable: true,
    },
    {
      id: 6,
      theme: '2',
      name: 'Question #1',
      answer: '1',
      price: 100,
      isEnable: true,
    },
    {
      id: 7,
      theme: '2',
      name: 'Question #2',
      answer: '2',
      price: 200,
      isEnable: true,
    },
    {
      id: 8,
      theme: '2',
      name: 'Question #3',
      answer: '3',
      price: 300,
      isEnable: true,
    },
    {
      id: 9,
      theme: '2',
      name: 'Question #4',
      answer: '4',
      price: 400,
      isEnable: true,
    },
    {
      id: 10,
      theme: '2',
      name: 'Question #5',
      answer: '5',
      price: 500,
      isEnable: true,
    },
    {
      id: 11,
      theme: '3',
      name: 'Question #1',
      answer: '1',
      price: 100,
      isEnable: true,
    },
    {
      id: 12,
      theme: '3',
      name: 'Question #2',
      answer: '2',
      price: 200,
      isEnable: true,
    },
    {
      id: 13,
      theme: '3',
      name: 'Question #3',
      answer: '3',
      price: 300,
      isEnable: true,
    },
    {
      id: 14,
      theme: '3',
      name: 'Question #4',
      answer: '4',
      price: 400,
      isEnable: true,
    },
    {
      id: 15,
      theme: '3',
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
          <Route path="cards/:QuestionId" element={<CardPage />} />
          <Route path="/registration" element={<Auth />} />
          <Route path="/login" element={<Auth />} />
          <Route path="/logout" element={<Auth />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
