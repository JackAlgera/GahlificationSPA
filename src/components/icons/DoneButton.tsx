import { Fab, SvgIcon, SvgIconProps } from "@mui/material";
import Done from '@mui/icons-material/Done';

interface IconProps {
  onClick: (itemToAdd?: any) => void;
}

const DoneButton = (props: IconProps) => {
  return (
    <Fab size="small" color="primary" aria-label="add" onClick={props.onClick}>
      <SvgIcon>
        <Done/>
      </SvgIcon>
    </Fab>
  );
};

export default DoneButton;
