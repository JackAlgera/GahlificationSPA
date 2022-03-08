import React, { useState } from 'react';
import { TagType, TaskStepType, TaskType } from "../../../_models/application_models";
import { Box, Chip, createTheme, Divider, Stack, ThemeProvider, Typography } from "@mui/material";
import timeService from '../../../_utils/TimeService';
import DoneButton from "../../icons/DoneButton";
import AddButton from "../../icons/AddIcon/AddButton";
import AddStepModal from "../AddStepModal/AddStepModal";
import TaskService from "../../../_services/TaskService";

interface TaskProps {
  task: TaskType,
  onDone: (taskId: string) => void
}

const theme = createTheme({
  palette: {
    background: {
      paper: '#fff',
    },
    text: {
      primary: '#173A5E',
      secondary: '#46505A',
    },
    action: {
      active: '#001E3C',
    }
  },
});

const Task = (props: TaskProps) => {

  const [ task, setTask ] = useState(props.task);

  const handleError = () => {
    console.log( "error" )
  }

  const getTagColor = (tagName: string) => {
    switch (tagName) {
      case 'Admin':
        return '#F7E1D7';
      case 'Urgent':
        return '#A33B20';
      case 'Gahlou':
        return '#1B2F33';
      case 'Flokkie':
        return '#00BFB2';
    }

    return '#4A5759';
  }

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ bgcolor: 'background.paper', borderRadius: 3, boxShadow: 3, margin: 1, padding: 1 }}>
        <Box sx={{ display: 'flex', flexDirection: 'row' }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', textAlign: 'left', paddingLeft: 2}}>
            <Box sx={{ fontSize: 'h6.fontSize' }}>{ task.taskName }</Box>
            <Box sx={{ fontSize: 'body2.fontSize' }}>
              <Box sx={{ width: 80, display: 'flex', flexDirection: 'row', marginLeft: 1, marginRight: 1 }}>
                <Typography sx={{ paddingRight: 1 }}>{ timeService.getDisplayTime(task.doTaskAtDate) }</Typography>
                <Typography>{ timeService.getDisplayDate(task.doTaskAtDate) }</Typography>
              </Box>
            </Box>
          </Box>

          <Divider orientation="vertical" variant="middle" flexItem/>

          <Box sx={{ fontSize: 'body2.fontSize' }}>{ task.description }</Box>

          <Box sx={{ marginLeft: 2 }}>
            <DoneButton onClick={() => props.onDone(task.taskId)}/>
          </Box>
          <Box sx={{ marginLeft: 2 }}>
            <AddStepModal handleAddTaskStep={(taskStepDescription: string) => TaskService.createTaskStep(
              { taskStepId: '', description: taskStepDescription, taskId: task.taskId },
              (taskStep: TaskStepType) => { setTask({ ...task, taskSteps: [...task.taskSteps, taskStep] }) },
              () => {}
            )}/>
          </Box>
        </Box>

        <Divider variant="middle" />

        <Stack direction="row" spacing={1} m={1}>
          { task.tags && task.tags.map((tag: TagType) => (
            <Chip label={tag.tagName} color="primary" size="small" style={{ backgroundColor: `${getTagColor(tag.tagName)}` }} key={tag.tagId}/>
          ))}
        </Stack>
        <Stack direction="column">
          { task.taskSteps && task.taskSteps.map((taskStep: TaskStepType) => (
            <Typography key={taskStep.taskStepId}>{taskStep.description}</Typography>
          ))}
        </Stack>

      </Box>
    </ThemeProvider>
  );
}

export default Task;
