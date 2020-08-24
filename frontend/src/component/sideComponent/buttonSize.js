import React from 'react';
import { Button } from '@material-ui/core';

const ButtonSize = ({ onClick, className, children, selected }) => {
    return (
        <Button variant='outlined'
            style={{ marginLeft: '1rem', borderColor: selected && 'blue' }}
            key={children}
            onClick={onClick}
            className={className}>
            {children}
        </Button>
    )
}

export default ButtonSize;