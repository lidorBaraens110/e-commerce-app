import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    ListContainer: {
        maxWidth: '100vw',
        minHeight: '75vh'
    },
    gridContainer: {
        margin: 0, maxWidth: '100%'
    },
    image: {
        width: '100%', height: 'auto'
    },
    middleGridItem: {
        display: 'flex',
        alignItems: 'flex-start',
        flexDirection: 'column',
        justifyContent: 'space-between',
        marginBottom: '0.2rem'
    },
    linkTypography: {
        fontSize: '0.8rem',
        cursor: 'pointer'
    },
    containerColor: {
        whiteSpace: 'nowrap',
        cursor: 'pointer',
        display: 'flex',
        paddingLeft: '0.2rem',
        flexDirection: 'row',
        border: '1px solid black',
        borderRadius: '20px 20px',
        alignItems: 'center',
        justifyContent: 'center'
    },
    color: {
        borderRadius: '100%',
        border: '1px solid gray',
        height: '10px', width: '10px'
    },
    quantityContainer: {
        display: 'flex',
        flexDirection: 'row',
        border: '1px solid black',
        alignItems: 'center',
        borderRadius: '20px 20px',
        textAlign: 'center',
    },
    quantityIcon: {
        flex: 2,
        padding: '0',
        borderRadius: 0
    },
    containerNumber: {
        flex: 3,
        height: '100%',
        width: '1rem',
        borderRight: '1px solid black',
        borderLeft: '1px solid black',
    },
    typographyNumber: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%', fontSize: '0.8rem'
    },
    lastGrid: {
        display: 'flex', alignItems: 'flex-end', flexDirection: 'column', marginBottom: '0.2rem'
    },
    price: { fontSize: '0.8rem', flex: 1 }

})

export default useStyles