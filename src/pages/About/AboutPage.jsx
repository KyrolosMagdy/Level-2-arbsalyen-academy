import React from "react";
import { Toolbar } from "@mui/material";
import Arbsalyen from "../../assets/arbsalyen.jpeg";
import Marko from '../../assets/Marko.png';
import {
  StyledAcademyAvatar,
  StyledAdminsWrapper,
  StyledAvatar,
  StyledContainer,
  StyledDivider,
  StyledGrayBackground,
  StyledImagesWrapper,
  StyledNameTypography,
  StyledSecertariesWrapper,
  StyledSkelton,
  StyledSubtitle,
  StyledTypography,
} from "./StyledAboutUsPage";

export const AboutUs = () => {
  return (
    <StyledContainer>
      <Toolbar />
      <StyledImagesWrapper>
        <StyledSkelton
          src="https://lh3.googleusercontent.com/p/AF1QipMY80FcN749HAe12M9zfQOOAENcdaEdbeUjUqds=s1360-w1360-h1020"
          alt="Arch Mekhaael Church"
        />
        <StyledGrayBackground />
        <StyledTypography variant="h4">
          كنيسه رئيس الملائكه الجليل ميخائيل بالاسماعيليه
        </StyledTypography>
        <StyledAcademyAvatar src={Arbsalyen} alt="Arbsalyen Academy" />
      </StyledImagesWrapper>
      <StyledAdminsWrapper>
        <StyledAvatar src="" alt="s" />
        <StyledNameTypography variant="h6" textAlign="center">
          Father Andrawes
        </StyledNameTypography>
        <StyledSubtitle variant="body2" textAlign="center">
          Head of Academy
        </StyledSubtitle>
      </StyledAdminsWrapper>
      <StyledDivider />
      <StyledAdminsWrapper>
        <StyledAvatar src={Marko} alt="Marko Melad" />
        <StyledNameTypography variant="h6" textAlign="center">
          Marco Melad
        </StyledNameTypography>
        <StyledSubtitle variant="body2" textAlign="center">
          Head of Academy
        </StyledSubtitle>
      </StyledAdminsWrapper>
      <StyledDivider />
      <StyledSecertariesWrapper>
        <StyledAdminsWrapper>
          <StyledAvatar src="" alt="s" />
          <StyledNameTypography variant="h6" textAlign="center">
            Martina Hany
          </StyledNameTypography>
          <StyledSubtitle variant="body2" textAlign="center">
            Secretary of Arbsalyen Academy
          </StyledSubtitle>
        </StyledAdminsWrapper>
        <StyledAdminsWrapper>
          <StyledAvatar src="" alt="s" />
          <StyledNameTypography variant="h6" textAlign="center">
            Sandy Romany
          </StyledNameTypography>
          <StyledSubtitle variant="body2" textAlign="center">
            Secretary of Arbsalyen Academy
          </StyledSubtitle>
        </StyledAdminsWrapper>
      </StyledSecertariesWrapper>
    </StyledContainer>
  );
};
