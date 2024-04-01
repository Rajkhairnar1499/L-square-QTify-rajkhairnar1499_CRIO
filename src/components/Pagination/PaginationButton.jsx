import * as React from "react";
import { Stack, Pagination } from "@mui/material";
import "./PaginationButton.css";

const PaginationButton = ({
  songsPerPage,
  totalSongs,
  paginate,
  currentPage,
}) => {
  let totalPage = Math.ceil(totalSongs / songsPerPage);

  const handleChangePage = (value) => paginate(value);

  return (
    <Stack spacing={2}>
      <Pagination
        size="large"
        count={totalPage}
        page={currentPage}
        onChange={handleChangePage}
        showFirstButton
        showLastButton
        color="success"
        className="pagination"
      />
    </Stack>
  );
};

export default PaginationButton;
