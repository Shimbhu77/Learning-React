import { combineReducers } from 'redux';
import typingReducer from '../Components/TypingArea';

const rootReducer = combineReducers({
  typing: typingReducer,
  // Add more reducers if needed
});

export default rootReducer;
