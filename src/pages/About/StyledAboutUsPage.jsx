import { Avatar, Container, Divider, Typography, styled } from '@mui/material'

export const StyledContainer = styled(Container)(({ theme }) => ({
  marginTop: theme.spacing(2.4),
  marginBottom: theme.spacing(5),
  [theme.breakpoints.down('md')]: {
    marginTop: 0
  }
}));

export const StyledImagesWrapper = styled('div')(({ theme }) => ({
  position: 'relative',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}));

export const StyledGrayBackground = styled('div')(({ theme }) => ({
  position: 'absolute',
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  borderRadius: theme.spacing(2),
}))

export const StyledAcademyAvatar = styled(Avatar)(({ theme }) => ({
  width: theme.spacing(20),
  height: theme.spacing(20),
  position: 'absolute',
  bottom: '-15%',
  left: theme.spacing(3),
  border: `10px solid ${theme.palette.secondary.main}`,
  [theme.breakpoints.down('md')]: {
    width: theme.spacing(11),
    height: theme.spacing(11),
    left: theme.spacing(1),
    border: `5px solid ${theme.palette.secondary.main}`,
  }
}));

export const StyledTypography = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.main,
  position: 'absolute',
  fontWeight: 'bold',
  [theme.breakpoints.down('md')]: {
    fontSize: theme.spacing(3)
  }
}))

export const StyledSkelton = styled('img')(({ theme }) => ({
  width: '100%',
  height: '30rem',
  borderRadius: theme.spacing(2),
  [theme.breakpoints.down('md')]: {
    height: '16rem'
  }
}));

export const StyledAdminsWrapper = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  marginTop: theme.spacing(5)
}));

export const StyledAvatar = styled(Avatar)(({ theme }) => ({
  width: theme.spacing(15),
  height: theme.spacing(15),
  display: 'grid',
  justifyContent: 'center',
  [theme.breakpoints.down('md')]: {
    width: theme.spacing(11),
    height: theme.spacing(11),
  }
}));

export const StyledNameTypography = styled(Typography)(({ theme }) => ({
  [theme.breakpoints.down('md')]: {
    fontSize: '0.9rem'
  }
}));

export const StyledSubtitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
  [theme.breakpoints.down('md')]: {
    fontSize: '0.8rem'
  }
}));

export const StyledDivider = styled(Divider)(({ theme }) => ({
  margin: theme.spacing(3)
}));

export const StyledSecertariesWrapper = styled('div')(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(4),
  justifyContent: 'center'
}))