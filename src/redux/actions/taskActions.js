import { ADD_TASK, UPDATE_STATUS } from "../actionTypes";

// action creator
const addTask = (task) => {
  return {
    type: ADD_TASK,
    payload: task,
  };
};

// action creator
const updateStatus = (id) => {
  return {
    type: UPDATE_STATUS,
    payload: id,
  };
};

export { addTask, updateStatus };
