// Action Types
export const UPDATE_TYPED_TEXT = 'UPDATE_TYPED_TEXT';
export const UPDATE_TYPING_SPEED = 'UPDATE_TYPING_SPEED';
export const UPDATE_TYPING_ACCURACY = 'UPDATE_TYPING_ACCURACY';

// Action Creators
export const updateTypedText = (text) => ({
  type: UPDATE_TYPED_TEXT,
  payload: text,
});

export const updateTypingSpeed = (speed) => ({
  type: UPDATE_TYPING_SPEED,
  payload: speed,
});

export const updateTypingAccuracy = (accuracy) => ({
  type: UPDATE_TYPING_ACCURACY,
  payload: accuracy,
});
