import {
  ADD_PROJECT,
  REMOVE_PROJECT,
  ADD_TASK_TO_PROJECT,
  REMOVE_TASK_FROM_PROJECT,
  CHANGE_TASK_STATUS,
} from "../actionTypes";

const addProject = (project) => {
  return {
    type: ADD_PROJECT,
    payload: project,
  };
};

const removeProject = (projectId) => {
  return {
    type: REMOVE_PROJECT,
    payload: projectId,
  };
};

const addTaskToProject = (projectId, task) => {
  return {
    type: ADD_TASK_TO_PROJECT,
    payload: { projectId, task },
  };
};

const removeTaskFromProject = (projectId, taskId) => {
  return {
    type: REMOVE_TASK_FROM_PROJECT,
    payload: { projectId, taskId },
  };
};

const changeTaskStatus = (projectId, taskId, status) => {
  return {
    type: CHANGE_TASK_STATUS,
    payload: { projectId, taskId, status },
  };
};

export {
  addProject,
  removeProject,
  addTaskToProject,
  removeTaskFromProject,
  changeTaskStatus,
};
