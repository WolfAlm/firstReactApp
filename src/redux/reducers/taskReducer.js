import { ADD_TASK, UPDATE_STATUS } from "../actionTypes";

// вспомогательная функция, которая обновляет статус конкретного
// таска в массиве по id и возвращает массив тасков.
// почти то же самое, что было в компоненте MyTodoList
// только сейчас не принимает аргумент status ( вместо этого
// статус меняется как completed: !newTasks[findIndex].completed)
const updateTask = (state, id) => {
  const newTasks = [...state.tasks];
  var findIndex = newTasks.findIndex((currentValue) => currentValue.id === id);
  newTasks[findIndex] = {
    ...newTasks[findIndex],
    completed: !newTasks[findIndex].completed,
  };
  return [...newTasks];
};

const initialState = {
  tasks: [],
};

// это редьюсер для тасков
// умеет делать только добавление таска и обновление статуса
const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };
    case UPDATE_STATUS:
      return {
        ...state,
        tasks: updateTask(state, action.payload),
      };
    default:
      return state;
  }
};

export default taskReducer;
