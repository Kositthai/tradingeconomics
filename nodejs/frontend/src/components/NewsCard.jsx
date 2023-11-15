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
import axios from 'axios'

const NewsCard = ({news, image, index}) => {
  // const [image, setImage] = useState({})

  // useEffect(() => {
  //   const handleFetch = async () => {
  //     const response = await axios.get(
  //       'https://api.unsplash.com/photos/random?query=financial&client_id=2xYJs9WB3PSivuGkypSMtFg6mkYnYv6m-AKIh6xaMKY'
  //     )
  //     setImage(response.data)
  //   }
  //   handleFetch()
  // }, [])

  console.log(image[0].urls.full)

  return (
    <Card sx={{maxWidth: 345, margin: '2rem 1rem'}}>
      <CardMedia
        component="img"
        sx={{width: '100%', objectFit: 'cover'}}
        image={
          image && image[index] ? image[index].urls.full : placeholderNewsImage
        }
        title={news.title}
      />
      <CardContent>
        <Stack>
          <Chip label={news.category} sx={{marginLeft: 'auto'}} />
        </Stack>

        <Typography gutterBottom variant="h6" component="div">
          {news.title}
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
          {news.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  )
}

export default NewsCard
