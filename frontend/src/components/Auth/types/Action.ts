import { Res } from '../../../types/AllTypes';

type Action =
| { type: 'AUTH';payload:Res }
| { type:'LOGOUT' };

export default Action;
