import React from 'react';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import Container from '@material-ui/core/Container';
import { makeStyles, useTheme, useMediaQuery, Typography } from '@material-ui/core'

const useStyle = makeStyles(theme => ({
    container: {
        borderTop: 'solid black 1px',
        borderBottom: 'solid black 1px',
        padding: '0 3rem',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
        margin: '0'
    },
    formCon: {
        margin: theme.spacing(1),
        minWidth: 120,
    }
}))

const SortClothe = ({ value, onChange }) => {

    const classes = useStyle()
    const theme = useTheme();
    const mobileView = useMediaQuery(theme.breakpoints.down('xs'))

    if (!mobileView) {
        return (
            <Container className={classes.container} maxWidth='xl'>
                <FormControl className={classes.formCon}>
                    <InputLabel style={{ textAlign: 'center' }} >הצג לפי</InputLabel>
                    <Select
                        variant='standard'
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={value}
                        onChange={onChange}
                    >
                        <MenuItem value={'price'}>לפי מחיר</MenuItem>
                        <MenuItem value={'date'}>לפי תאריך העלאה</MenuItem>
                        <MenuItem value={'name'}>לפי א-ב</MenuItem>
                    </Select>

                </FormControl>
            </Container>
        )
    }
    return (
        <div style={{ display: 'flex', flexDirection: 'row', backgroundColor: '#d3d3d3' }}>
            <Typography style={{ flex: 1, fontSize: '0.7rem' }}>לפי מחיר</Typography>
            <Typography style={{ flex: 1, fontSize: '0.7rem', borderRight: '1px solid black', borderLeft: '1px solid black' }}>לפי תאריך</Typography>
            <Typography style={{ flex: 1, fontSize: '0.7rem' }}>לפי א-ב</Typography>
        </div>
    )

}

export default SortClothe;