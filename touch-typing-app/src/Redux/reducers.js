import {
    UPDATE_TYPED_TEXT,
    UPDATE_TYPING_SPEED,
    UPDATE_TYPING_ACCURACY,
  } from './actions';
  
  const initialState = {
    typedText: '',
    typingSpeed: 0,
    typingAccuracy: 100,
  };
  
  const typingReducer = (state = initialState, action) => {
    switch (action.type) {
      case UPDATE_TYPED_TEXT:
        return { ...state, typedText: action.payload };
      case UPDATE_TYPING_SPEED:
        return { ...state, typingSpeed: action.payload };
      case UPDATE_TYPING_ACCURACY:
        return { ...state, typingAccuracy: action.payload };
      default:
        return state;
    }
  };
  
  export default typingReducer;
  