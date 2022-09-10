import * as React from 'react';

import Card from '@mui/material/Card';

import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';


import Typography from '@mui/material/Typography';




function MovieCard(props) {
  
  
  return (
    <div className='gradient-border'>
    <Card sx={{ maxWidth: 345}}>
      <CardMedia
        component="img"
        src={props.moviePoster} className="card-img-top" alt="..."
      />
      <CardContent>
        <Typography variant="body1" color="text.primary" >
        {props.movieTitle}
        </Typography>
          <Typography variant="body1" color="text.secondary">
            {props.moviedesc}
          </Typography>
          

      </CardContent>
      
      </Card>
      </div>
  );
}
export default MovieCard;
