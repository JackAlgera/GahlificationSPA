import { AxiosError, AxiosResponse } from "axios";
import authService from "./AuthService";
import { ETagTypeType, TagType, TaskStepType, TaskType } from "../_models/application_models";

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

  public createMultipleTags = (
    tags: TagType[],
    responseCallback: (response: TagType[]) => void,
    errorCallback: () => void
  ) => {
    axios
      .request({
        method: "post",
        url: `tags`,
        data: tags,
        headers: authService.getAuthHeader()
      })
      .then((response: AxiosResponse) => responseCallback(response.data))
      .catch((error: AxiosError) => errorCallback());
  }
}

export default new TagService();
