import React, { ChangeEvent, useState } from 'react';
import { Box, Modal, TextField, Typography } from "@mui/material";
import { TaskType } from "../../../_models/application_models";
import AddButton from "../../icons/AddIcon/AddButton";
import TagValuesSelect from "../../selects/TagValuesSelect/TagValuesSelect";

interface AddStepModalProps {
  handleAddTaskStep: (taskStepDescription: string) => void;
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

const AddStepModal = (props: AddStepModalProps) => {
  const initialState = '';

  const [description, setDescription] = useState(initialState);

  const onChange = ( event: ChangeEvent<HTMLInputElement> ) => {
    setDescription(event.target.value);
  }

  const reset = () => {
    setDescription('');
  }

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <AddButton onClick={handleOpen}/>

      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Add new task step
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <TextField required label="Step description" id="description" value={description} onChange={(event: ChangeEvent<HTMLInputElement>) => onChange(event)} margin="dense"/>
            <Box sx={{ display: 'flex', flexDirection: 'row' }}>
              <AddButton onClick={() => {
                handleClose();
                props.handleAddTaskStep(description);
                reset();
              }}/>
            </Box>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}

export default AddStepModal;
