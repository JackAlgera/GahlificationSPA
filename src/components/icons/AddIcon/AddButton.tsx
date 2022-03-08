import React, { FC } from 'react';
import { Fab, SvgIcon, SvgIconProps } from "@mui/material";
import AddRoundedIcon from '@mui/icons-material/AddRounded';

interface AddIconProps {
  onClick: (itemToAdd?: any) => void;
}

const AddButton = (props: AddIconProps) => {
  return (
    <Fab size="medium" color="primary" aria-label="add" onClick={props.onClick}>
      <SvgIcon>
        <AddRoundedIcon/>
      </SvgIcon>
    </Fab>
  );
}

export default AddButton;
