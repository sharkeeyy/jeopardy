import Action from './types/Action';

export const init = {
  user: {
    name: '',
    score: 0
  }
};

export const userReducer = (
  state: { user: string } = init,
  action: Action
 ): { user: string } => {
  switch (action.type) {
   case 'AUTH':
    return {
      ...state,
      user: action.payload.user
    };
    case 'LOGOUT':
      return {
        ...state,
        user: ''
      };
    default: return state;
  }
 };
