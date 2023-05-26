import { createStore } from 'redux';
import typingReducer from './reducers';

const store = createStore(typingReducer);

export default store;
