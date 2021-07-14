import React from 'react';
import Pagination from '@material-ui/lab/Pagination';

const Paging = ({ handleChange, countPages }) => {

    // let pageNumber = 0;

    // for (let i = 0; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    //     pageNumber += i;
    // }

    return (
        <Pagination
            // hidden={needed} 
            // style={{ display: 'inline-block' }} 
            onChange={(e, page) => handleChange(page)}
            // page={currentPage} 
            count={countPages}
        />
    )

}
export default Paging;