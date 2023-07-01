import { Typography, styled, Card } from "@mui/material";

export const StyledCardWrapper = styled(Card)(({ theme }) => ({
  height: '13rem',
  boxShadow: theme.shadows[1],
  [theme.breakpoints.down('md')]: {
    height: '10rem',
    margin: '1rem 0'
  }
}))

export const StyledTypography = styled(Typography)(({ theme }) => ({
  fontSize: '1.2rem',
  [theme.breakpoints.down('md')]: {
    fontSize: '1rem'
  }
}))

export const StyledDesc = styled(Typography)(({ theme }) => ({
  marginTop: '1rem',
  fontSize: '0.9rem',
  [theme.breakpoints.down('md')]: {
    fontSize: '0.5rem'
  }
}))