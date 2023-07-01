import React, { useState, useEffect, useCallback } from "react";
import { Container, Grid, Toolbar } from "@mui/material";

import Courses from "../../constants/courses.json";
import { LoaderComponent } from "../../components/LoaderComponent/LoaderComponent";
import { CourseCard } from "../../components/CourseCard/CourseCard";
import { StyledPageContainer } from "./StyledCoursesPage";

export const CoursesPage = () => {
  const [courses, setCourses] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchInstructors = useCallback(() => {
    setIsLoading(true);
    const res = async () => {
      try {
        const res = await new Promise((resolve) => {
          setTimeout(resolve(Courses.courses), 1000);
        });
        setCourses(res);
      } catch (err) {
        console.log("err: ", err);
      }
      setIsLoading(false);
    };
    res();
  }, []);

  useEffect(() => {
    fetchInstructors();
  }, [fetchInstructors]);

  return (
    <StyledPageContainer maxWidth='xl'>
      <Toolbar />
      <LoaderComponent open={isLoading} />
      <Grid container gap={1} alignItems='center' justifyContent='center'>
        {courses?.length > 0 &&
          courses.map((course) => (
            <Grid item xs={12} lg={3} md={5} key={course.id}>
              <CourseCard key={course.id} course={course} />
            </Grid>
          ))}
      </Grid>
    </StyledPageContainer>
  );
};
