import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    container: {
        padding: '0 2rem',
        overflowY: 'auto',
        marginBottom: '1rem',
        height: '100%',
        [theme.breakpoints.down('xs')]: {
            padding: '0'
        }
    },
    '@global': {
        '*::-webkit-scrollbar': {
            [theme.breakpoints.down('sm')]: {
                width: 0
            },
            width: '0.3rem',
        },
        '*::-webkit-scrollbar-track': {
            '-webkit-box-shadow': ' 0 0 3px rgba(0,0,0,0.00)',
        },
        '*::-webkit-scrollbar-thumb': {
            backgroundColor: 'rgba(0,0,0,.1)',
            // outline: '1px solid slategrey',
        },
    },
    wishListButton: {
        borderRadius: '0',
        '&:hover': {
            boxShadow: '0 0 0 1px black'
        },
    },
    dialogContainer: {
        padding: '3rem'
    },
    dialogHeader: {
        textAlign: 'center', margin: '2rem 2rem 0'
    }
}))

export default useStyles