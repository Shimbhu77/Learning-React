import './App.css';
import Navbar from './Components/Navbar';
import { connect } from 'react-redux';
import { addTask, updateTask, deleteTask, toggleTask } from './Redux/ActionCreator';

function App(props) {
  let state = {
    text: ''
  };

  const handleInputChange = (e) => {
    state = { text: e.target.value };
  };

  const handleAddTodo = () => {
    if (state.text) {
      props.addTask(state.text);
      state = { text: '' };
    }
  };

  const handleUpdateTodo = (id, text) => {
    const updatedText = prompt('Enter updated todo', text);
    if (updatedText) {
      props.updateTask(id, updatedText);
    }
  };

  const handleDeleteTodo = (id) => {
    props.deleteTask(id);
  };

  const handleToggleTodo = (id) => {
    props.toggleTask(id);
  };

  return (
    <div className="App">
      <Navbar />
      <div>
        <h1>To-Do App</h1>
        <input type="text" value={state.text} onChange={handleInputChange} />
        <button onClick={handleAddTodo}>Add Todo</button>
        <ul>
          {props.todos.map((todo) => (
            <li key={todo.id}>
              <span
                style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
                onClick={() => handleToggleTodo(todo.id)}
              >
                {todo.text}
              </span>
              <button onClick={() => handleUpdateTodo(todo.id, todo.text)}>Update</button>
              <button onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    todos: state.todos
  };
};

export default connect(mapStateToProps, { addTask, updateTask, deleteTask, toggleTask })(App);
