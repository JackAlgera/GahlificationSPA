export interface TaskType {
  taskId: string;
  taskName: string;
  description: string;
  doTaskAtDate: string;
  repeatDelay: number; // In seconds
  tags: Array<TagType>;
  taskSteps: Array<TaskStepType>;
  createdOn?: string;
  lastModified?: string;
}

export interface TagType {
  tagId: string;
  taskId: string;
  tagName: string;
  tagType: string;
}

export interface TaskStepType {
  taskStepId: string;
  taskId: string;
  description: string;
  createdOn?: string;
  lastModified?: string;
}

export enum ETagValue {
  ADMIN = "Admin",
  URGENT = "Urgent",
  GAHLOU = "Gahlou",
  FLOKKIE = "Flokkie"
}
