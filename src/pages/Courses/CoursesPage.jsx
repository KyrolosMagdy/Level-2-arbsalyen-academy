import React, { useState, useEffect, useCallback } from "react";
import { Grid, Toolbar } from "@mui/material";

import Courses from "../../constants/courses.json";
import Instructor from "../../constants/instructors.json";
import { LoaderComponent } from "../../components/LoaderComponent/LoaderComponent";
import { CourseCard } from "../../components/CourseCard/CourseCard";
import { StyledPageContainer } from "./StyledCoursesPage";
import { ContactUsModal } from "../../components/ContactUsModal/ContactUsModal";

export const CoursesPage = () => {
  const [courses, setCourses] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [insts, setInsts] = useState([]);

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

  const fetchSingleInstructor = (ids) => {
    const tempInstructors = [];
    for(let i = 0; i < ids.length; i++) {
      const ins = Instructor.instructors.find((inst) => inst.id === ids[i]);
      tempInstructors.push(ins)
    }
    return tempInstructors;
  };

  const handleCourseClicked = (userId) => {
    const inst = fetchSingleInstructor(userId);
    if (inst?.length > 0) {
      setInsts(inst);
    }
    setIsModalOpen(true)
  };

  console.log('insts: ', insts)

  useEffect(() => {
    fetchInstructors();
  }, [fetchInstructors]);

  return (
    <StyledPageContainer maxWidth="xl">
      <Toolbar />
      <LoaderComponent open={isLoading} />
      <ContactUsModal
        open={isModalOpen}
        handleClose={() => {
          setIsModalOpen(false);
        }}
        instructors={insts}
      />
      <Grid container gap={1} alignItems="center" justifyContent="center">
        {courses?.length > 0 &&
          courses.map((course) => (
            <Grid item xs={12} lg={3} md={5} key={course.id}>
              <CourseCard key={course.id} handleEnroll={handleCourseClicked} course={course} />
            </Grid>
          ))}
      </Grid>
    </StyledPageContainer>
  );
};
