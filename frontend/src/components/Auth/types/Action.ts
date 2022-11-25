import { Res } from '../../../types/AllTypes';

type Action =
| { type: 'AUTH'; payload: Res }
| { type: 'LOGOUT' }
| { type: 'ADD_SCORE'; payload: number };

export default Action;
