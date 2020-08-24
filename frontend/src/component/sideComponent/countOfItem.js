import React from 'react';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';

const CountOfItem = ({ value, onChange, count, name }) => {

    const handleCounter = (count) => {
        let allOption = [];
        for (let i = 1; i <= count; i++) {
            allOption.push(i)
        }
        return allOption.map(item => {
            return <MenuItem value={item}>{item}</MenuItem>
        })
    }
    return (
        <FormControl style={{ padding: '1rem' }}>
            <Select
                style={{ marginRight: '2rem', textAlign: 'right' }}
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                name={name}
                value={value}
                onChange={onChange}
            >
                {handleCounter(count)}
            </Select>
            <InputLabel id="demo-simple-select-label" style={{ marginLeft: '5rem' }}  >הצג לפי</InputLabel>
        </FormControl>
    )
}

export default CountOfItem;