import { AxiosError, AxiosResponse } from "axios";
import authService from "./AuthService";
import { TaskStepType, TaskType } from "../_models/application_models";

const axios = require('axios').default;

class TaskService {
  public getAllTasks = (
    responseCallback: (response: Array<TaskType>) => void,
    errorCallback: () => void
  ) => {
    axios
      .get(`tasks`, { headers: authService.getAuthHeader() })
      .then((response: AxiosResponse) => responseCallback(response.data))
      .catch((error: AxiosError) => errorCallback());
  };

  public createTask = (
    responseCallback: (response: TaskType) => void,
    errorCallback: () => void,
    task: TaskType
  ) => {
    axios
      .request({
        method: "post",
        url: "tasks",
        data: task,
        headers: authService.getAuthHeader()
      })
      .then((response: AxiosResponse) => responseCallback(response.data))
      .catch((error: AxiosError) => errorCallback());
  }

  public deleteTask = (
    responseCallback: (response: TaskType) => void,
    errorCallback: () => void,
    taskId: string
  ) => {
    axios
      .request({
        method: "delete",
        url: `tasks/${taskId}`,
        headers: authService.getAuthHeader()
      })
      .then((response: AxiosResponse) => responseCallback(response.data))
      .catch((error: AxiosError) => errorCallback());
  }

  public createTaskStep = (
    taskStep: TaskStepType,
    responseCallback: (response: TaskStepType) => void,
    errorCallback: () => void
  ) => {
    axios
      .request({
        method: "post",
        url: `tasks/${taskStep.taskId}/steps`,
        data: taskStep,
        headers: authService.getAuthHeader()
      })
      .then((response: AxiosResponse) => responseCallback(response.data))
      .catch((error: AxiosError) => errorCallback());
  }

  public getAllTaskStepsForTask = (
    taskId: string,
    responseCallback: (response: Array<TaskStepType>) => void,
    errorCallback: () => void
  ) => {
    axios
      .get(`tasks/${taskId}/steps`, { headers: authService.getAuthHeader() })
      .then((response: AxiosResponse) => responseCallback(response.data))
      .catch((error: AxiosError) => errorCallback());
  }

  public resetTestData = (
    responseCallback: () => void
  ) => {
    axios
      .get('database/add-test-data', { headers: authService.getAuthHeader() })
      .then(() => responseCallback())
  }
}

export default new TaskService();
