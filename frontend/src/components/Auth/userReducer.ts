import Action from './types/Action';
import State from './types/State';

export const init = {
  name: '',
  score: 0,
};

export const userReducer = (
  state: {name:string,score:number} = init,
  action: Action
): {name:string,score:number} => {
  switch (action.type) {
    case 'AUTH':
      return {
        ...state,
        name: action.payload.user,
      };
    case 'LOGOUT':
      return {
        ...state,
        name: '',
      };
    case 'ADD_SCORE':
      return {
        ...state,
        score: state.score + Number(action.payload),
      };
    default:
      return state;
  }
};
