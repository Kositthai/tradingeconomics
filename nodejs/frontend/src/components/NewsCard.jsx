import React, {useState, useEffect} from 'react'
import {
  Card,
  CardMedia,
  Typography,
  CardContent,
  CardActions,
  Button,
  Chip,
  Stack,
} from '@mui/material/'
import placeholderNewsImage from '../assets/stock.jpg'

const NewsCard = ({item, image, index, setNewsItemOpen, handleNewsDisplay}) => {
  const handleOnClick = (item) => {
    setNewsItemOpen(true)

    handleNewsDisplay({...item, image: image[index].urls.full})
  }

  return (
    <Card sx={{maxWidth: 345, margin: '2rem 0'}}>
      <CardMedia
        component="img"
        sx={{width: '100%', objectFit: 'cover'}}
        image={
          image && image[index] ? image[index].urls.full : placeholderNewsImage
        }
        title={item.title}
      />
      <CardContent>
        <Stack>
          <Chip label={item.category} sx={{margin: '.7rem .7rem .7rem auto'}} />
        </Stack>

        <Typography
          gutterBottom
          variant="h6"
          component="div"
          style={{fontWeight: '700'}}
        >
          {item.title}
        </Typography>

        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            overflow: 'hidden',

            display: '-webkit-box',
            WebkitBoxOrient: 'vertical',
            WebkitLineClamp: 3,
          }}
        >
          {item.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small" onClick={() => handleOnClick({item})}>
          Read more
        </Button>
      </CardActions>
    </Card>
  )
}

export default NewsCard
