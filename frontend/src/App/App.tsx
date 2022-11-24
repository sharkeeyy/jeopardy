import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Auth from '../components/Auth/Auth';
import Header from '../components/Header/Header';
import MainPage from '../components/Main/MainPage';
import Results from '../components/Results/Results';

function App():JSX.Element {
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
