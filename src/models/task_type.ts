export interface TaskType {
  taskId: string;
  taskName: string;
  description: string;
  doTaskAtDate: string;
  repeatDelay: number; // In seconds
  createdOn: string;
  lastModified: string;
}
