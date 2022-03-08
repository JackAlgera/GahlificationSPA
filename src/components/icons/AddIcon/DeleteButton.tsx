import { Fab, SvgIcon, SvgIconProps } from "@mui/material";
import DeleteForever from '@mui/icons-material/DeleteForever';

interface IconProps {
  onClick: (itemToAdd?: any) => void;
}

const DeleteButton = (props: IconProps) => {
  return (
    <Fab size="medium" color="primary" aria-label="add" onClick={props.onClick}>
      <SvgIcon>
        <DeleteForever/>
      </SvgIcon>
    </Fab>
  );
};

export default DeleteButton;
