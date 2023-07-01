import React from "react";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import { StyledCardWrapper, StyledDesc, StyledTypography } from "./StyledCourseCard";

export const CourseCard = ({ course }) => {
  return (
    <StyledCardWrapper>
      <CardContent>
        <StyledTypography variant="h5" component="div">
          {course.courseTitle}
        </StyledTypography>
        <StyledDesc color="text.secondary">
          {course.description}
        </StyledDesc>
      </CardContent>
      <CardActions>
        <Button size="small">Enroll Now</Button>
      </CardActions>
    </StyledCardWrapper>
  );
};
