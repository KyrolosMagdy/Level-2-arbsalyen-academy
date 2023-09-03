import { Button, styled, Box } from "@mui/material";

export const StyledContactWrapper = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
}));

export const StyledButton = styled(Button)(({ theme }) => ({
  fontWeight: 'bold'
}))

export const StyledBox = styled(Box)(({ theme }) => ({
  width: 400,
  [theme.breakpoints.down('md')]: {
    width: 300,
  }
}))