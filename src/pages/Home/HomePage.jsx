import React, { useState, useEffect, useCallback } from "react";
import { Container, Grid, Toolbar } from "@mui/material";

import Instructors from "../../constants/instructors.json";
import { LoaderComponent } from "../../components/LoaderComponent/LoaderComponent";
import { CardComponent } from "../../components/CardComponent/CardComponent";
import { StyledGrid } from "./StyledHomePage";

export const HomePage = () => {
  const [instructors, setInstructors] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchInstructors = useCallback(() => {
    setLoading(true);
    const res = async () => {
      try {
        const res = await new Promise((resolve) => {
          setTimeout(resolve(Instructors.instructors), 1000);
        });
        setInstructors(res);
      } catch (err) {
        console.log("err: ", err);
      }
      setLoading(false);
    };
    res();
  }, []);

  useEffect(() => {
    fetchInstructors();
  }, [fetchInstructors]);

  return (
    <Container maxWidth='xl'>
      <Toolbar />
      <LoaderComponent open={loading} />
      <StyledGrid container gap={1} alignItems='center' justifyContent='center'>
        {instructors?.length > 0 &&
          instructors.map((ins) => {
            return (
              <Grid item key={ins.id} xs={12} lg={3} md={5}>
                <CardComponent data={ins}/>
              </Grid>
            );
          })}
      </StyledGrid>
    </Container>
  );
};
