import ACTION_TYPES from '../actions/actionTypes';

const initialState = {
  list: [],
  isLoading: false,
  error: null,
};

const messagesSliceReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.CREATE_MESSAGE_REQUEST:
    case ACTION_TYPES.GET_MESSAGES_REQUEST: {
      return { ...state, isLoading: true };
    }
    /*  */
    case ACTION_TYPES.CREATE_MESSAGE_ERROR:
    case ACTION_TYPES.GET_MESSAGES_ERROR: {
      return {
        ...state,
        isLoading: false,
        error: action.payload.error,
      };
    }
    /*  */
    case ACTION_TYPES.CREATE_MESSAGE_SUCCESS: {
      /* Самое молодое сообщение сверху */
      const list = [action.payload.message, ...state.list];
      return { ...state, isLoading: false, list };
    }
    case ACTION_TYPES.GET_MESSAGES_SUCCESS: {
      const list = action.payload.messages;
      return { ...state, isLoading: false, list };
    }
    /*  */
    default: {
      return state;
    }
  }
};

export default messagesSliceReducer;
