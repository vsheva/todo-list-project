import {fetchTaskList} from "./tasksGateway";

export const TASKS_LIST_RECEIVED="TASKS_LIST_RECEIVED";

export const tasksListRecieved=(tasksList)=>{
   const action={
       type: TASKS_LIST_RECEIVED,
       payload:{
           tasksList,
       }
   }
   return action;
}

export const getTaskList =()=>{
const thunkAction = function(dispatch){
    fetchTaskList().then((tasksList)=>
        dispatch(tasksListRecieved(tasksList)))
};

    return thunkAction;
}
