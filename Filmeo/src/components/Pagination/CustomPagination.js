import React from "react";
import Pagination from '@mui/material/Pagination';

const CustomPagination = ({setPage}) => {

    const handlePageChange = (page) => {
        setPage(page);
        window.scroll(0, 0)
    };

    return (
        <Pagination 
            count={100}
            color="primary"
            hidePrevButton
            variant="outlined"
            onChange={(e) => handlePageChange(e.target.textContent)}
        />)    
};

export default CustomPagination;