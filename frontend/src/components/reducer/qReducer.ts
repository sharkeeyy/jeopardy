import Action from './types/Action';
import State from './types/State';

export const init = {
  q: []
};

export const qReducer = (
  state: State = init,
  action: Action
): State => {
  switch (action.type) {
    case 'INIT_Q':
    return {
      ...state,
      q: action.payload
    };
    case 'DISABLE_Q':
    return {
      ...state,
      q: [...state.q, action.payload]
    };
    default: return state;
  }
};
