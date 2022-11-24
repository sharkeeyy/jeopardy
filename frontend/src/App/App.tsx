import React, { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import Auth from '../components/Auth/Auth';
import Header from '../components/Header/Header';
import MainPage from '../components/Main/MainPage';
import Results from '../components/Results/Results';

function App():JSX.Element {
  const array = [
    {
      id : 1,
      theme: '1',
      name: 'Question #1',
      answer: '1',
      price: 100,
      isEnabled: true,
    },
    {
      id : 1,
      theme: '1',
      name: 'Question #2',
      answer: '2',
      price: 200,
      isEnabled: true,
    },
    {
      id : 1,
      theme: '1',
      name: 'Question #3',
      answer: '3',
      price: 300,
      isEnabled: true,
    },
    {
      id : 1,
      theme: '1',
      name: 'Question #4',
      answer: '4',
      price: 400,
      isEnabled: true,
    },
    {
      id : 1,
      theme: '1',
      name: 'Question #5',
      answer: '5',
      price: 500,
      isEnabled: true,
    },
    {
      id : 1,
      theme: '2',
      name: 'Question #1',
      answer: '1',
      price: 100,
      isEnabled: true,
    },
    {
      id : 1,
      theme: '2',
      name: 'Question #2',
      answer: '2',
      price: 200,
      isEnabled: true,
    },
    {
      id : 1,
      theme: '2',
      name: 'Question #3',
      answer: '3',
      price: 300,
      isEnabled: true,
    },
    {
      id : 1,
      theme: '2',
      name: 'Question #4',
      answer: '4',
      price: 400,
      isEnabled: true,
    },
    {
      id : 1,
      theme: '2',
      name: 'Question #5',
      answer: '5',
      price: 500,
      isEnabled: true,
    },
    {
      id : 1,
      theme: '3',
      name: 'Question #1',
      answer: '1',
      price: 100,
      isEnabled: true,
    },
    {
      id : 1,
      theme: '3',
      name: 'Question #2',
      answer: '2',
      price: 200,
      isEnabled: true,
    },
    {
      id : 1,
      theme: '3',
      name: 'Question #3',
      answer: '3',
      price: 300,
      isEnabled: true,
    },
    {
      id : 1,
      theme: '3',
      name: 'Question #4',
      answer: '4',
      price: 400,
      isEnabled: true,
    },
    {
      id : 1,
      theme: '3',
      name: 'Question #5',
      answer: '5',
      price: 500,
      isEnabled: true,
    },
  ];

  const dispatch = useDispatch();


  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Header />}>
          <Route path="/main" element={<MainPage />} />
          <Route path="/main" element={<MainPage />} />
          <Route path="/results" element={<Results />} />
          <Route path="/registration" element={<Auth />} />
          <Route path="/login" element={<Auth />} />
          <Route path="/logout" element={<Auth />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
