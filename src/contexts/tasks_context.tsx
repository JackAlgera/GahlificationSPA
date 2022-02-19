import {createContext} from "react";
import {TaskType} from "../models/task_type";

export const TasksContext = createContext<{
  tasks: Array<TaskType>
}>({ tasks: [] });
