import { Card, styled } from "@mui/material";

export const StyledCardComponent = styled(Card)(({ theme }) => ({
  boxShadow: theme.shadows[2],
  minWidth: 340, 
  cursor: "pointer",
  borderRadius: theme.spacing(1)
}))