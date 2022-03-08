import React, { ChangeEvent, FC, useState } from 'react';
import AddButton from "../../icons/AddIcon/AddButton";
import { Box, Modal, TextField, Typography } from "@mui/material";
import { TaskType } from "../../../_models/application_models";
import TagValuesSelect from "../../selects/TagValuesSelect/TagValuesSelect";

interface TaskModalProps {
  handleAddTask: (task: TaskType) => void;
}

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  borderRadius: 3,
  p: 3,
};

const TaskModal = (props: TaskModalProps) => {

  const initialState: TaskType = {
    taskId: "",
    taskName: "",
    doTaskAtDate: "",
    description: "",
    repeatDelay: 0,
    tags: [],
    taskSteps: []
  }

  const [task, setTask] = useState(initialState);

  const setTaskName = ( event: ChangeEvent<HTMLInputElement> ) => {
    setTask( {
      ...task,
      taskName: event.target.value,
    });
  }

  const setDescription = ( event: ChangeEvent<HTMLInputElement> ) => {
    setTask( {
      ...task,
      description: event.target.value,
    });
  }

  const setDoTaskAtDate = ( event: ChangeEvent<HTMLInputElement> ) => {
    setTask( {
      ...task,
      doTaskAtDate: event.target.value,
    });
  }

  const setRepeatDelay = ( event: ChangeEvent<HTMLInputElement> ) => {
    setTask({
      ...task,
      repeatDelay: Number(event.target.value) * 60 * 60,
    });
  }

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const resetTask = () => setTask(initialState);

  return (
    <div>
      <AddButton onClick={handleOpen}/>

      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Add new task
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <TextField required label="Task name" id="taskName" value={task.taskName} onChange={(event: ChangeEvent<HTMLInputElement>) => setTaskName(event)} margin="dense"/>
            <TextField required label="Description" id="description" value={task.description} onChange={(event: ChangeEvent<HTMLInputElement>) => setDescription(event)} margin="dense"/>
            <TextField required label="Do task at date" id="doTaskAtDate" value={task.doTaskAtDate} onChange={(event: ChangeEvent<HTMLInputElement>) => setDoTaskAtDate(event)} margin="dense"/>
            <TextField required label="Repeat delay in hours" id="repeatDelay" value={task.repeatDelay / 3600} onChange={(event: ChangeEvent<HTMLInputElement>) => setRepeatDelay(event)} margin="dense" inputMode="decimal"/>
            <TagValuesSelect/>
            {/*<DatePicker*/}
            {/*  label="Basic example"*/}
            {/*  value={value}*/}
            {/*  onChange={(newValue) => {*/}
            {/*    setValue(newValue);*/}
            {/*  }}*/}
            {/*  renderInput={(params) => <TextField {...params} />}*/}
            {/*/>*/}
            <Box sx={{ display: 'flex', flexDirection: 'row' }}>
              <AddButton onClick={() => {
                handleClose();
                props.handleAddTask(task);
                resetTask();
              }}/>
            </Box>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}

export default TaskModal;
