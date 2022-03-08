import { AxiosError, AxiosResponse } from "axios";
import authService from "./AuthService";
import { TagType, TaskType } from "../_models/application_models";

const axios = require('axios').default;

class TagService {
  public getTagsForTask = (
    taskId: string,
    responseCallback: (response: Array<TagType>) => void,
    errorCallback: () => void
  ) => {
    axios
      .get(`tags`, { headers: authService.getAuthHeader(), params: { itemId: `${taskId}` } })
      .then((response: AxiosResponse) => {
        responseCallback( response.data )
      })
      .catch((error: AxiosError) => {
        errorCallback();
      });
  };
}

export default new TagService();
