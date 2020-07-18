import React from 'react';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';

const SortClothe = ({ value, onChange, price, date, name }) => {

    return (
        <div style={{ borderTop: 'solid black 1px', borderBottom: 'solid black 1px', textAlign: "left", padding: '0.5rem' }}>
            <FormControl style={{ minWidth: '15rem', padding: '1rem' }}>
                <Select
                    style={{ marginRight: '2rem' }}
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={value}
                    onChange={onChange}
                >
                    <MenuItem value={price}>לפי מחיר</MenuItem>
                    <MenuItem value={date}>לפי תאריך העלאה</MenuItem>
                    <MenuItem value={name}>לפי א-ב</MenuItem>
                </Select>
                <InputLabel id="demo-simple-select-label" style={{ marginLeft: '5rem' }}  >סינון לפי</InputLabel>
            </FormControl>

        </div>
    )
}

export default SortClothe;