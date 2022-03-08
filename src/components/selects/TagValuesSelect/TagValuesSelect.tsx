import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { useState, ChangeEvent } from 'react';
import { ETagValue } from "../../../_models/application_models";

interface TagValuesSelectProps {}

const TagValuesSelect = (props: TagValuesSelectProps) => {
  const [ tagName, setTagName ] = useState('');

  const handleChange = (event: any) => {
    setTagName(event.target.value);
  };

  return (
    <>
      <InputLabel id="tag-values-select">Age</InputLabel>
      <Select
        labelId="tag-values-select-label"
        id="tag-values-select"
        value={tagName}
        label="Tags"
        onChange={handleChange}
      >
        <MenuItem value={ETagValue.FLOKKIE}>{ETagValue.FLOKKIE}</MenuItem>
        <MenuItem value={ETagValue.GAHLOU}>{ETagValue.GAHLOU}</MenuItem>
        <MenuItem value={ETagValue.ADMIN}>{ETagValue.ADMIN}</MenuItem>
        <MenuItem value={ETagValue.URGENT}>{ETagValue.URGENT}</MenuItem>
      </Select>
    </>
  )
};

export default TagValuesSelect;
