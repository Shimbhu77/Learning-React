import React, { useState, useEffect, useCallback } from 'react';
import { addTask, updateTask, deleteTask, toggleTask, setData } from '../Redux/ActionCreator';
import { useDispatch, useSelector } from 'react-redux';
import TodoForm from './TodoForm';

export default function Task() {
  const [inputValue, setInputValue] = useState('Enter Tasks name');
  const dispatch = useDispatch();
  const data = useSelector((state) => state.todos);

  const handleAddNewTask = (event) => {
    // event.preventDefault();
    setInputValue(event.target.value);
    console.log(inputValue);

    const task = {
      text: inputValue,
      completed: false
    };

    dispatch(addTask(task));



    fetch('http://localhost:3001/todos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(task)
    })
      .then(response => {
        if (response.status === 201) {
          alert('Task added successfully.');
        } else {
          alert('Task adding failed.');
        }
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }

  const fetchData = useCallback(async () => {
    try {
      const response = await fetch('http://localhost:3001/todos');
      if (response.ok) {
        const jsonData = await response.json();
        dispatch(setData(jsonData));
        console.log("JsonData is this : ");
        console.log(jsonData);
        // console.log("Data in fetch data is this : ");
        // console.log(data);
      } else {
        console.log('Error:', response.status);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  }, [dispatch]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  useEffect(() => {
    console.log("Data in useEffect is this : ");
    console.log(data);
  }, [data]);

  const handleDeleteTask = (taskId) => {
    fetch(`http://localhost:3001/todos/${taskId}`, {
      method: 'DELETE',
    })
      .then(response => {
        if (response.status === 200) {
          alert("Task deleted successfully.");
           fetchData();
          // const value = dispatch(deleteTask(taskId));
          // console.log("data of delete function : ");
          // console.log(data);
          // console.log("value of delete function : ");
          // console.log(value);
        } else {
          alert("Task deletion failed");
        }
      })
      .catch(error => {
        console.error('Error:', error);
      });

    // dispatch(deleteTask(taskId));
  };
  const handleUpdateTask = (id) => {
    console.log(id + " updated");

  }

  return (
    <>
      <div className="container mx-3 my-3 ">
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder={inputValue}
            aria-label="Recipient's username"
            aria-describedby="button-addon2"
            onChange={(event) => { setInputValue(event.target.value) }}
          />
          <button
            className="btn btn-outline-success"
            type="button"
            id="button-addon2"
            onClick={handleAddNewTask}
          >
            Add
          </button>
        </div>
      </div>

      <div className='container my-1'>
        {data.map(item => (
          <div className="container border my-2" key={item.id}>
            <div className="row align-items-center justify-content-start">
              <div className="col">{item.text}</div>
              <div className="col-auto">
                <button type="button" className="btn btn-warning me-2 my-2" onClick={() => handleUpdateTask(item.id)}>Update</button>
                <button type="button" className="btn btn-danger my-2" onClick={() => handleDeleteTask(item.id)}>Delete</button>
              </div>
            </div>
          </div>


        ))}
      </div>
      {/* <TodoForm/> */}
    </>
  )
}
