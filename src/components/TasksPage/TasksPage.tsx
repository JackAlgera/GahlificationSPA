import React, { useEffect, useState } from 'react';
import Task from "./Task/Task";
import { TaskType } from "../../_models/application_models";
import taskService from '../../_services/TaskService';
import { Box } from "@mui/material";
import TaskModal from "./TaskModal/TaskModal";
import TaskService from "../../_services/TaskService";
import DeleteButton from "../icons/AddIcon/DeleteButton";

interface TasksPageProps {}

const TasksPage = (props: TasksPageProps) => {

  const [ tasks, setTasks ] = useState(Array<TaskType>());

  useEffect(() => {
    taskService.getAllTasks(handleResponse, handleError);
  }, []);

  const handleResponse = (response: Array<TaskType>) => {
    setTasks(response);
  }

  const handleError = () => {
    console.log( "error" )
  }

  const handleTaskOnDone = (taskId: string) => {
    taskService.deleteTask(
      () => { setTasks(tasks.filter(task => task.taskId != taskId)); },
      () => { console.log("Nope, couldn't finish tasks") },
      taskId
    )
    console.log(taskId);
  }

  return (
    <>
      <Box sx={{
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)'}}>
        { tasks.map((task: TaskType) => (
          <Task task={ task } onDone={handleTaskOnDone} key={task.taskId}/>
        ))}
      </Box>
      <Box sx={{
        display: 'flex',
        flexDirection: 'row-reverse',
        margin: 2 }}>
        <TaskModal handleAddTask={(task: TaskType) => {
          TaskService.createTask(
            response => { setTasks(
              [...tasks, response]
            ) },
            () => {},
            task
          )
        }}/>
      </Box>
      <DeleteButton onClick={() => {
        TaskService.resetTestData(() => {
          console.log("Reset test data");
          taskService.getAllTasks(handleResponse, handleError);
        });
      }}/>
    </>
  );
}

export default TasksPage;
