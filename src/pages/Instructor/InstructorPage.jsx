import React, { useState, useCallback, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Toolbar, Grid } from "@mui/material";
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
import { CourseCard } from "../../components/CourseCard/CourseCard";
import { ContactUsModal } from "../../components/ContactUsModal/ContactUsModal";

export const InstructorsPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [instructor, setInstructor] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [insts, setInsts] = useState([]);
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

  const fetchSingleInstructor = (ids) => {
    const tempInstructors = [];
    for (let i = 0; i < ids.length; i++) {
      const ins = Instructors.instructors.find((inst) => inst.id === ids[i]);
      tempInstructors.push(ins);
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

  return (
    <StyledPageContainer>
      <Toolbar />
      <LoaderComponent open={isLoading} />
      <StyledCardWrapper>
        <StyledCardMedia image={instructor?.wallpaber} title="green iguana" />
        <ContactUsModal
          open={isModalOpen}
          instructors={insts}
          handleClose={() => {
            setIsModalOpen(false);
            setInsts([]);
          }}
        />

        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            textAlign="start"
            color="secondary"
          >
            {instructor?.name}
          </Typography>
          <Typography variant="body2" color="text.secondary" textAlign="start">
            {instructor?.job}
          </Typography>
          <StyledCoursesContainer container gap={2}>
            {instructor?.courses?.length &&
              instructor.courses.map((ins) => (
                <Grid item xs={5} key={ins.id}>
                  <CourseCard handleEnroll={handleCourseClicked} course={ins} />
                </Grid>
              ))}
          </StyledCoursesContainer>
        </CardContent>
      </StyledCardWrapper>
    </StyledPageContainer>
  );
};
