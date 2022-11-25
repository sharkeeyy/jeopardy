import { Question } from '../../../types/AllTypes';

type Action =
| { type:'INIT_Q'; payload: Question[] }
| { type:'DISABLE_Q'; payload: Question };

export default Action;
