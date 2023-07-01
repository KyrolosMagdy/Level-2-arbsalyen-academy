import React from 'react'
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

export const LoaderComponent = ({open}) => {
  console.log('open : ', open)
  return (
    <Backdrop
      sx={{ zIndex: (theme) => theme.zIndex.drawer + 1, color: (theme) => theme.palette.primary.main }}
      open={open}
    >
      <CircularProgress color="inherit" />
    </Backdrop>
  );
}