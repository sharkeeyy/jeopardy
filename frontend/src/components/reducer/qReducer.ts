import Action from './types/Action';
import State from './types/State';

export const init = {
  questions: []
};

export const qReducer = (
  state: State = init,
  action: Action
): State => {
  switch (action.type) {
    case 'INIT_Q':
    return {
      ...state,
      questions: action.payload
    };
    case 'DISABLE_Q':
    return {
      ...state,
      questions: state.questions.map((item) => item.id === action.payload.id
      ? { ...item, isEnable: false }
      : item)
    };
    default: return state;
  }
};
