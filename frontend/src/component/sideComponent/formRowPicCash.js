import React from 'react';
import { Grid, Card, CardMedia, Button } from '@material-ui/core';

const FormRow = ({ image, name, price, onClick }) => {
    return (
        <>
            <Grid item
                xs={5} s={5} m={5} lg={5} xl={5}>
                <Card style={{ padding: '0 5% 0 5%', height: '10rem', width: '5rem' }}>
                    <CardMedia style={{
                        height: '100%',
                        width: '100%'
                    }}
                        image={image} />
                </Card>
            </Grid>
            <Grid item
                xs={3} s={3} m={3} lg={3} xl={3} style={{ textAlign: 'right', alignItems: 'center' }}>
                <p>{name}</p>
            </Grid>
            <Grid item
                xs={4} s={4} m={4} lg={4} xl={4} style={{ textAlign: 'left' }}>
                <p>{price}</p>
                <Button onClick={onClick}>הסר</Button>
            </Grid>
        </>

    )
}

export default FormRow;