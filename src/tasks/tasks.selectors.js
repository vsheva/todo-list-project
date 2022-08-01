import { createSelector } from 'reselect';

export const tasksListSelector = state => {
  return state.tasks.tasks;
};

export const sortedTasksSelector = createSelector([tasksListSelector], tasksList => {
  return tasksList.slice().sort((a, b) => a.done - b.done);
});
