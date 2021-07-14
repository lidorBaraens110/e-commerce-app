import { makeStyles } from '@material-ui/core/styles';


export const useStyle = () => {
    return makeStyles(theme => ({
        header: { textAlign: 'center', padding: '1rem', fontWeight: 'bold' },
        cartButton: {
            width: '100%',
            backgroundColor: 'black',
            color: '#fff',
            borderRadius: '0',
            flex: 4,
            border: '1px solid black',
            '&:hover': {
                backgroundColor: '#fff',
                color: 'black',
            }
        },
        formControl: {
            margin: theme.spacing(1),
            minWidth: 120,
        },
        selectEmpty: {
            marginTop: theme.spacing(2),
        },
        drawerPaper: { width: '350px', backgroundColor: '#f1f1f1', maxWidth: 'auto', padding: '1rem' },
        linkButton: { color: 'black', textDecoration: 'none' },
        emptyItems: { textAlign: 'center' }
    }))
}

export default useStyle