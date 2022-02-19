import { AxiosError, AxiosResponse } from "axios";
import authService from "./AuthService";
import { TaskType } from "../models/task_type";

const axios = require('axios').default;

class TaskService {
  public getAllTasks = (
    responseCallback: (response: Array<TaskType>) => void,
    errorCallback: () => void
  ) => {
    axios
      .get(`tasks`, { headers: authService.getAuthHeader() })
      .then((response: AxiosResponse) => {
        responseCallback( response.data )
      })
      .catch((error: AxiosError) => {
        console.log( "ERROR", error )
        errorCallback();
      });
  };
}

export default new TaskService();
