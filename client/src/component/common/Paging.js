import React from 'react';
import Pagination from '@material-ui/lab/Pagination';
import { makeStyles, useTheme, useMediaQuery } from '@material-ui/core';

const useStyles = makeStyles({
    container: { textAlign: 'center', margin: '1rem' }
})
const Paging = ({ handleChange, countPages, currentPage }) => {
    const theme = useTheme()
    const mobileView = useMediaQuery(theme.breakpoints.down('xs'))
    const classes = useStyles()
    return (
        <Pagination
            className={classes.container}
            color='primary'
            variant='outlined'
            hidden={countPages === 1 && true}
            // style={{ display: 'inline-block' }} 
            onChange={(e, page) => handleChange(+page)}
            page={+currentPage}
            count={countPages}
            size={mobileView ? 'small' : 'medium'}
        />
    )

}
export default Paging;