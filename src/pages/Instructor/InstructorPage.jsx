import React, { useState, useCallback, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Toolbar, Grid, Skeleton } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

import Instructors from "../../constants/instructors.json";
import { LoaderComponent } from "../../components/LoaderComponent/LoaderComponent";
import {
  StyledCardMedia,
  StyledCardWrapper,
  StyledCoursesContainer,
  StyledPageContainer,
} from "./StyledInstructorPage";
import CourseImage from "../../assets/course.jpg";
import { CourseCard } from "../../components/CourseCard/CourseCard";

export const InstructorsPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [instructor, setInstructor] = useState({});
  const { id } = useParams();

  const fetchInstructor = useCallback(() => {
    setIsLoading(true);
    const res = async () => {
      try {
        const res = await new Promise((resolve) => {
          setTimeout(resolve(Instructors.instructors), 1000);
        });
        const inst = res.find((ins) => ins.id === Number(id));
        if (inst) {
          setInstructor(inst);
        }
      } catch (err) {
        console.log("err: ", err);
      }
      setIsLoading(false);
    };
    res();
  }, [id]);

  useEffect(() => {
    if (instructor?.id !== id) {
      fetchInstructor();
    }
  }, [fetchInstructor, id, instructor?.id]);

  return (
    <StyledPageContainer>
      <Toolbar />
      <LoaderComponent open={isLoading} />
      <StyledCardWrapper>
        {Number(id) === 1 ? (
          <StyledCardMedia image={CourseImage} title="green iguana" />
        ) : (
          <Skeleton variant="rectangular" height="20rem" />
        )}

        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            textAlign="start"
          >
            {instructor?.name}
          </Typography>
          <Typography variant="body2" color="text.secondary" textAlign="start">
            {instructor?.job}
          </Typography>
          <StyledCoursesContainer container gap={2}>
            {instructor?.courses?.length &&
              instructor.courses.map((ins) => (
                <Grid item xs={4} key={ins.id}>
                  <CourseCard course={ins} />
                </Grid>
              ))}
          </StyledCoursesContainer>
        </CardContent>
      </StyledCardWrapper>
    </StyledPageContainer>
  );
};
