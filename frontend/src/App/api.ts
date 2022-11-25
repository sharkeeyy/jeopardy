import { Res, User } from '../types/AllTypes';
// import Card from '../features/CardList/types/Card';

// export const loadCards = async (): Promise<Card[]> => {
//   const res = await fetch('http://localhost:4000/api');
//   return res.json();
// };

// export const addItem = async (item: Card): Promise<Card> => {
//   const res = await fetch('http://localhost:4000/api', {
//     method: 'post',
//     headers: { 'Content-type': 'application/json' },
//     body: JSON.stringify(item),
//   });
//   return res.json();
// };

// export const deleteItem = async (id: number): Promise<number> => {
//   const res = await fetch(`http://localhost:4000/api/${id}`, {
//     method: 'delete',
//   });
//   return res.json();
// };

export const registration = async (item: User): Promise<Res> => {
  const res = await fetch('/registration', {
    method: 'post',
    headers: { 'Content-type': 'application/json' },
    credentials: 'include',
    body: JSON.stringify(item),
  });
  return res.json();
};

export const logout = async (): Promise<Res> => {
  const res = await fetch('/logout');
  return res.json();
};
