import React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import CardMedia from '@mui/material/CardMedia';
import { useNavigate } from 'react-router';

import MyImage from '../../assets/image.jpg'
import CourseImage from '../../assets/course.jpg'

export const CardComponent = ({ data }) => {
  const navigate = useNavigate();
  
  return (
    <Card sx={{ minWidth: 340, cursor: "pointer" }}>
      <CardHeader
        avatar={
          <Avatar src={data.id === 1? MyImage: data.imageUrl} sx={{ bgcolor: red[500], width: '4rem', height: '4rem' }} aria-label="recipe">
          </Avatar>
        }
       
        title={data.name}
        subheader={data.job}
      />
      <CardMedia
        component="img"
        height="294"
        image={data.id === 1? CourseImage: data.imageUrl}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the mussels,
          if you like.
        </Typography>
      </CardContent>

    </Card>
  )
}