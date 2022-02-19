import React from 'react';
import { TaskType } from "../../../models/task_type";
import { Box, createTheme, Divider, ThemeProvider, Typography } from "@mui/material";
import timeService from '../../../_utils/TimeService';

interface TaskProps {
  task: TaskType
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
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{
        width: 300,
        bgcolor: 'background.paper',
        borderRadius: 2,
        boxShadow: 2,
        margin: 2 }}>
        <Box sx={{ display: 'flex', flexDirection: 'row', padding: 1 }}>
          <Box sx={{ width: 80, display: 'flex', flexDirection: 'column' }}>
            <Typography>{ timeService.getDisplayTime(props.task.doTaskAtDate) }</Typography>
            <Typography>{ timeService.getDisplayDate(props.task.doTaskAtDate) }</Typography>
          </Box>
          <Divider orientation="vertical" variant="middle" flexItem/>
          <Box sx={{ display: 'flex', flexDirection: 'column', textAlign: 'left', paddingLeft: 2}}>
            <Box sx={{ fontSize: 'h6.fontSize' }}>{ props.task.taskName }</Box>
            <Box sx={{ fontSize: 'body2.fontSize' }}>{ props.task.description }</Box>
          </Box>
        </Box>

        <Divider variant="middle" />

        <Box sx={{ padding: 2 }}>
          { props.task.repeatDelay }
        </Box>

      </Box>
    </ThemeProvider>
  );
}

export default Task;
