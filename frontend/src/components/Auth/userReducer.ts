import Action from './types/Action';

export const init = {
  user: ''
};

export const userReducer = (
  state: { user: string } = init,
  action: Action
): { user: '' } => {
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
