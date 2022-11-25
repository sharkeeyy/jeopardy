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
      theme: 'ПРОЦЕНТИКИ',
      name: 'Какой процент людей в мире зависимы от наркотиков?',
      answer: '3%',
      price: 100,
      isEnable: true,
    },
    {
      id: 2,
      theme: 'ПРОЦЕНТИКИ',
      name: 'Какой процент людей с 4 группой крови?',
      answer: '5%',
      price: 200,
      isEnable: true,
    },
    {
      id: 3,
      theme: 'ПРОЦЕНТИКИ',
      name: 'Какой процент людей в мире курит?',
      answer: '30%',
      price: 300,
      isEnable: true,
    },
    {
      id: 4,
      theme: 'ПРОЦЕНТИКИ',
      name: 'Какой процент людей в мире левши?',
      answer: '10%',
      price: 400,
      isEnable: true,
    },
    {
      id: 5,
      theme: 'ПРОЦЕНТИКИ',
      name: 'Какой процент Россиян(опрошенных) ни разу не играли в игры(Компьютерные и т.д.)?',
      answer: '50%',
      price: 500,
      isEnable: true,
    },
    {
      id: 6,
      theme: 'ДУШНИЛА',
      name: 'Английский химик Джон Уокер однажды размешивал палочкой реактивы и попытался счистить комок, образовавшийся на кончике мешалки. Эффект был неожиданным. Вскоре Уокер начал изготавливать и продавать именно это. ',
      answer: 'Спички',
      price: 100,
      isEnable: true,
    },
    {
      id: 7,
      theme: 'ДУШНИЛА',
      name: 'Рекорд его скорости на планете — 408 километров в час — был отмечен на австралийском острове Барроу 10 апреля 1996 года.',
      answer: 'Ветер',
      price: 200,
      isEnable: true,
    },
    {
      id: 8,
      theme: 'ДУШНИЛА',
      name: '«Необходимое дополнение личности женщины, завершающий аккорд для платья, роза, которой Ланкре подписывал свои картины», — говорил Кристиан Диор именно об этом.',
      answer: 'Духи',
      price: 300,
      isEnable: true,
    },
    {
      id: 9,
      theme: 'ДУШНИЛА',
      name: 'В условиях невесомости любая жидкость под влиянием сил поверхностного натяжения стремится принять эту геометрическую форму.',
      answer: 'Шар',
      price: 400,
      isEnable: true,
    },
    {
      id: 10,
      theme: 'ДУШНИЛА',
      name: 'Как называется процесс поглощения углекислого газа и выделения кислорода растениями на свету?',
      answer: 'Фотосинтез',
      price: 500,
      isEnable: true,
    },
    {
      id: 11,
      theme: '100 ГРАММ',
      name: 'О каком фильме идет речь? "Эколог средних лет пытается собирать разноцветные камешки, но ему мешает группа странных людей"',
      answer: 'Мстители',
      price: 100,
      isEnable: true,
    },
    {
      id: 12,
      theme: '100 ГРАММ',
      name: ' О каком фильме идет речь?  "Старшая сестра не дает младшей попасть в эфир национального игрового шоу"',
      answer: 'Голодные игры',
      price: 200,
      isEnable: true,
    },
    {
      id: 13,
      theme: '100 ГРАММ',
      name: 'О каком фильме идет речь?  "Парень насильно обездвиживает мужчин и фотографирует их ради денег"',
      answer: 'Человек паук',
      price: 300,
      isEnable: true,
    },
    {
      id: 14,
      theme: '100 ГРАММ',
      name: ' О каком фильме идет речь?  "Несчастный миллионер терроризирует психически больного мужчину"',
      answer: 'Темный рыцарь',
      price: 400,
      isEnable: true,
    },
    {
      id: 15,
      theme: '100 ГРАММ',
      name: 'О каком фильме идет речь?  "Один дома на марсе"',
      answer: 'Марсианин',
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
          <Route path="/auth/:route" element={<Auth />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
