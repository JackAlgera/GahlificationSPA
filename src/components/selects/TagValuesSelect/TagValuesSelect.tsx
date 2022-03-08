import InputLabel from '@mui/material/InputLabel';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import OutlinedInput from '@mui/material/OutlinedInput';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import FormControl from '@mui/material/FormControl';
import { ETagValue } from "../../../_models/application_models";

interface TagValuesSelectProps {
  tagNames: string[];
  setTagNames: (tagNames: string[]) => void;
}

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const tagTypesList = [
  ETagValue.GAHLOU.toString(),
  ETagValue.FLOKKIE.toString(),
  ETagValue.ADMIN.toString(),
  ETagValue.URGENT.toString()
];

const TagValuesSelect = (props: TagValuesSelectProps) => {
  const handleChange = (event: SelectChangeEvent<typeof props.tagNames>) => {
    const {
      target: { value },
    } = event;
    props.setTagNames(typeof value === 'string' ? value.split(',') : value);
  };

  return (
    <>
      <FormControl sx={{ m: 1 }}>
        <InputLabel id="tag-values-select-input-label">Tags</InputLabel>
        <Select
          labelId="tag-values-select-label"
          id="tag-values-select"
          multiple
          value={props.tagNames}
          onChange={handleChange}
          input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
          renderValue={(selected: Array<string>) => (
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
              { selected.map((value) => (
                <Chip key={value} label={value} />
              ))}
            </Box>
          )}
          MenuProps={MenuProps}
        >
          { tagTypesList.map((tagType) => (
            <MenuItem key={tagType} value={tagType}>
              {tagType}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </>
  )
};

export default TagValuesSelect;
