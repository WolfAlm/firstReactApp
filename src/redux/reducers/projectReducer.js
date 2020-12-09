import {
  ADD_PROJECT,
  REMOVE_PROJECT,
  ADD_TASK_TO_PROJECT,
  REMOVE_TASK_FROM_PROJECT,
  CHANGE_TASK_STATUS,
} from "../actionTypes";

// функция для удаления проекта из store
const removeProject = (state, projectId) => {
  // копируем массив проектов
  let projects = [...state.projects];
  // ищем индекс проекта в массиве проектов по переданному из экшена id
  const index = projects.findIndex((item) => {
    return item.id === projectId;
  });
  // если вдруг проекта не оказалось в массиве,
  // возвращаем state
  if (index === -1) {
    return state;
  }
  // удаляем проект из массива проектов
  projects = [...projects.slice(0, index), ...projects.slice(index + 1)];
  // возвращаем обновленный стейт
  return { ...state, projects: [...projects] };
};

// функция для добавления задачи в проектов
// принимает стейт, id проекта, куда нужно добавить задачу, и саму задачу
const addTaskToProject = (state, projectId, task) => {
  // ищем индекс проекта в массиве проектов по переданному из экшена id
  const projectIndex = state.projects.findIndex(
    (project) => project.id === projectId
  );
  // если вдруг проекта не оказалось в массиве,
  // возвращаем state
  if (projectIndex === -1) {
    return state;
  }
  // добавление задачи в массив project.tasks
  const project = {
    ...state.projects[projectIndex],
    tasks: [...state.projects[projectIndex].tasks, task],
  };

  // возвращаем обновленный стейт
  return {
    ...state,
    projects: [
      ...state.projects.slice(0, projectIndex),
      project,
      ...state.projects.slice(projectIndex + 1),
    ],
  };
};

// удаление задачи из проекта
// принимает стейт, id проекта, откуда нужно удалить задачу, и id задачи
const removeTaskFromProject = (state, projectId, taskId) => {
  // ищем индекс проекта в массиве проектов по переданному из экшена id
  const projectIndex = state.projects.findIndex(
    (project) => project.id === projectId
  );
  // если вдруг проекта не оказалось в массиве,
  // возвращаем state
  if (projectIndex === -1) {
    return state;
  }
  // ищем индекс задачи в массиве tasks у проекта с индексом projectIndex
  // (у проекта с id === projectId переданного с экшеном)
  const taskIndex = state.projects[projectIndex].tasks.findIndex(
    (task) => task.id === taskId
  );
  // если вдруг задачи не оказалось в проекте, возвращаем стейт
  if (taskIndex === -1) {
    return state;
  }
  // это нужный нам проект, обновляем у него массив tasks - удаляем из него
  // задачу с переданным с экшеном id
  const project = {
    ...state.projects[projectIndex],
    tasks: [
      ...state.projects[projectIndex].tasks.slice(0, taskIndex),
      ...state.projects[projectIndex].tasks.slice(taskIndex + 1),
    ],
  };
  // возвращаем обновленный стейт
  return {
    ...state,
    projects: [
      ...state.projects.slice(0, projectIndex),
      project,
      ...state.projects.slice(projectIndex + 1),
    ],
  };
};

// изменение статуса задачи. принимает стейт, id проекта в котором находится
// задача, id задачи и статус задачи (true, false)
// все то же самое, что и в функции по удалению задачи, но с маленьким изменением
const changeTaskStatus = (state, projectId, taskId, status) => {
  const projectIndex = state.projects.findIndex(
    (project) => project.id === projectId
  );
  if (projectIndex === -1) {
    return state;
  }
  const taskIndex = state.projects[projectIndex].tasks.findIndex(
    (task) => task.id === taskId
  );
  if (taskIndex === -1) {
    return state;
  }
  const project = {
    ...state.projects[projectIndex],
    tasks: [
      ...state.projects[projectIndex].tasks.slice(0, taskIndex),
      /* вот тут происходит обновление статуса задачи */
      { ...state.projects[projectIndex].tasks[taskIndex], completed: status },
      ...state.projects[projectIndex].tasks.slice(taskIndex + 1),
    ],
  };
  return {
    ...state,
    projects: [
      ...state.projects.slice(0, projectIndex),
      project,
      ...state.projects.slice(projectIndex + 1),
    ],
  };
};

const initialState = {
  projects: [],
};

const projectReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PROJECT:
      return { ...state, projects: [...state.projects, action.payload] };
    case REMOVE_PROJECT:
      return removeProject(state, action.payload);
    case ADD_TASK_TO_PROJECT:
      return addTaskToProject(
        state,
        action.payload.projectId,
        action.payload.task
      );
    case REMOVE_TASK_FROM_PROJECT:
      return removeTaskFromProject(
        state,
        action.payload.projectId,
        action.payload.taskId
      );
    case CHANGE_TASK_STATUS:
      const { projectId, taskId, status } = action.payload;
      return changeTaskStatus(state, projectId, taskId, status);
    default:
      return state;
  }
};

export default projectReducer;
