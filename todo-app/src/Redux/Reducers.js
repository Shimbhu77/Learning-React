import {ADD_TO_TODO,UPDATE_TODO,REMOVE_FROM_TODO,TOGGLE_TODO, SET_DATA} from './ActionCreator';

const initialState = {
    todos: []
};

const todoReducer = (state=initialState,action) =>{

     switch(action.type)
     {
        case  ADD_TO_TODO:
            const newTodo = {
                id:Date.now(),
                text:action.payload.text,
                completed:false
            }
            return {
                ...state,
                todos: [...state.todos, newTodo]
            };
            
        case  UPDATE_TODO:
            const updatedTodos = state.todos.map((el)=>{
                if(el.id===action.payload.id)
                {
                    return {
                        ...el,
                        text:action.payload.text
                    };

                }
                return el;
            });
            return {
                ...state,
                todos:updatedTodos
            };
        case  REMOVE_FROM_TODO:
            const filteredTodos = state.todos.filter((todo) => todo.id !== action.payload.id);
            return {
                ...state,
                todos: filteredTodos
            };
        case TOGGLE_TODO:
                const toggledTodos = state.todos.map((todo) => {
                  if (todo.id === action.payload.id) {
                    return {
                      ...todo,
                      completed: !todo.completed
                    };
                  }
                  return todo;
                });
                return {
                  ...state,
                  todos: toggledTodos
                };
        case SET_DATA:
                    return {
                      ...state,
                      todos: [...action.payload]
                    };   
        default:
                return state;
    }
}

export default todoReducer;
  