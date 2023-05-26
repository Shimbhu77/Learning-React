// Action Type 

export const ADD_TO_TODO = 'ADD_TODO';
export const UPDATE_TODO = 'UPDATE_TODO';
export const REMOVE_FROM_TODO = 'REMOVE_FROM_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';

// Action Creators 

export const addTask = (task) => {
        
    return ({
        type:ADD_TO_TODO,
        payload:task
    })
}

export const updateTask = (id,task) => {
        
    return ({
        type:UPDATE_TODO,
        payload:{id,task}
    })
}

export const deleteTask = (id) => {
        
    return ({
        type:REMOVE_FROM_TODO,
        payload:id
    })
}
export const toggleTask = (id) => {
        
    return ({
        type:TOGGLE_TODO,
        payload:id
    })
}
 