import React from 'react';
import Pagination from '@material-ui/lab/Pagination';

const Paging = ({ itemsPerPage, totalItems, currentPage, paginate, needed }) => {
    let pageNumber = 0;

    for (let i = 0; i <= Math.ceil(totalItems / itemsPerPage); i++) {
        console.log(totalItems)
        pageNumber += i;
    }

    return (
        <Pagination hidden={needed} style={{ display: 'inline-block' }} onChange={(e, page) => paginate(page)} page={currentPage} count={pageNumber - 1} />
    )

}
export default Paging;