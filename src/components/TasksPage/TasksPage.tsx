import React, { useEffect, useState } from 'react';
import Task from "./Task/Task";
import { TaskType } from "../../models/task_type";
import taskService from '../../_services/TaskService';
import { Container, Grid } from "@mui/material";

interface TasksPageProps {}

const TasksPage = (props: TasksPageProps) => {
  const [tasks, setTasks] = useState(Array<TaskType>());

  useEffect(() => {
    taskService.getAllTasks(handleResponse, handleError);
  }, []);

  const handleResponse = (response: Array<TaskType>) => {
    setTasks(response);
  }

  const handleError = () => {
    console.log( "error" )
  }

  return (
    <Grid container justifyContent="center">
      { tasks.map((task: TaskType) => (
        <Task task={ task } key={task.taskId}/>
      ))}
    </Grid>
  );
}

export default TasksPage;
