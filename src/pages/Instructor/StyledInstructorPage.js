import { Card, CardMedia, Container, Grid, styled } from "@mui/material";

export const StyledPageContainer = styled(Container)(({ theme }) => ({
  display: 'grid',
  alignItems: 'center',
}))

export const StyledCardWrapper = styled(Card)(({ theme }) => ({
  boxShadow: theme.shadows[4],
  margin: '3rem 0',
  height: '70vh',
  borderRadius: theme.spacing(3),
  overflowY: 'auto',
}))

export const StyledCardMedia = styled(CardMedia)(({ theme }) => ({
  height: '20rem',
  [theme.breakpoints.down('md')]: {
    height: '15rem'
  }
}))

export const StyledCoursesContainer = styled(Grid)(({ theme }) => ({
  marginTop: theme.spacing(3),
  overflowX: 'auto'
}))