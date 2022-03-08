import {createContext} from "react";
import {TaskType} from "../_models/application_models";

export const TasksContext = createContext<{
  tasks: Array<TaskType>
}>({ tasks: [] });
