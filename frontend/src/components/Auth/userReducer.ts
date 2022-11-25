import Action from './types/Action';
import State from './types/State';

export const init = {
  name: '',
  score: 0,
};

export const userReducer = (
  state: State = init,
  action: Action
): State => {
  switch (action.type) {
    case 'AUTH':
      return {
        ...state,
        name: action.payload.user,
        score: 0,
      };
    case 'LOGOUT':
      return {
        ...state,
        name: '',
        score: 0,
      };
    default: return state;
  }
};
