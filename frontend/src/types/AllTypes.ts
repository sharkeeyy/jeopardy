export interface Question {
  id: number;
  theme: string;
  name: string;
  answer: string;
  price: number;
  isEnable: boolean;
}

export type QuestionId = Question['id'];

export interface Res { message: string; user: string }

export interface User {
  id: number;
  email: string;
  result: number;
}
