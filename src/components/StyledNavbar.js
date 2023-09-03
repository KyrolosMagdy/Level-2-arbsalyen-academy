import { styled } from '@mui/material'

export const StyledNavAvatarWrapper = styled('div')(({ theme }) => ({
  flexGrow: 1, 
  margin: '0.6rem',
  [theme.breakpoints.down('md')]: {
    display: 'none'
  }
}))