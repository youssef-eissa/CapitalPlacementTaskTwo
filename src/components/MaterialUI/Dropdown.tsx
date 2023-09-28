import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import '../MaterialUI/dropdown.css'
import Select, { SelectChangeEvent } from '@mui/material/Select';

export default function BasicSelect() {
  const [filtered, setFiltered] = React.useState<string>('');

  const handleChange = (event: SelectChangeEvent):void => {
    setFiltered(event.target.value );
    console.log(event.target.name)
  };
  interface IData{
    type: string;
    numbers: number;
  }
  const filters:IData[]=[
    { type: 'Applied', numbers: 1745 },

    { type: 'Shortlisted', numbers: 453 },

    { type: 'Technical Interview', numbers: 123 },

    { type: 'Opportunity Browsing', numbers: 243 },

    { type: 'Video Interview I', numbers: 25 },

    { type: 'Video Interview II', numbers: 25 },

    { type: 'Video Interview III', numbers: 25 },

    { type: 'Offer', numbers: 25 },

    { type: 'Withdrawn', numbers: 25 }

]

  return (
  <Box sx={{ width: '100%',backgroundColor:'white' }}>
      <FormControl  fullWidth>
        <InputLabel style={{fontFamily:'Poppins, sans-serif' }} id="demo-simple-select-label">Choose By</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={filtered}
          label="Choose By"
          onChange={handleChange}
          renderValue={() => <div style={{ color: '#1D4ED8',fontFamily:'Poppins, sans-serif' }}>{filtered}</div>}
         
        >
          {filters.map(filter => {
            return <MenuItem  style={{fontFamily:'Poppins, sans-serif'}} sx={{'&:hover':{backgroundColor:'#EDF2FF',color:'#1D4ED8'}}}  key={filter.type} id="2" className='selectRow d-flex col-12 py-3' value={`${filter.type}`} >
                <span  id='title' style={{ fontSize: '16px' }} className='col-10'>{filter.type}</span>
                <span  style={{fontSize:'14px'}} className='col-2 numbers rounded py-1 text-center'>{filter.numbers }</span>
            </MenuItem>
        })}
        </Select>
      </FormControl>
    </Box>
  );
}


