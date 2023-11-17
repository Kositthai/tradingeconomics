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
import styled from '@emotion/styled'

const StyledCard = styled(Card)`
  max-width: 345;
  margin: 2rem 0;
  display: flex;
  flex-direction: column;
`

const StyledCardMedia = styled(CardMedia)`
  width: 100%;
  object-fit: cover;
`

const StyledChip = styled(Chip)`
  margin: 0.7rem 0.7rem 0.7rem auto;
`

const StyledTitle = styled(Typography)`
  font-weight: 700;
`

const StyledDescription = styled(Typography)`
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
`

const StyledCardActions = styled(CardActions)`
  margin-top: auto;
`

const NewsCard = ({item, image, index, setNewsItemOpen, handleReadMore}) => {
  // This function determines whether the NewsItem component should be displayed, based on a true or false condition.
  // This function is responsible for identifying and selecting a specific news item. The selected item is then passed to the handleReadMore function.
  // The handleReadMore function, located in the parent element, takes the selected news item as an argument. When a user clicks the "Read more" button,
  // this function sets the selected news item, triggering the rendering of the corresponding news content in the NewsItem component.
  const handleOnClick = (item) => {
    setNewsItemOpen(true)
    handleReadMore({...item, image: image[index].urls.full})
  }

  return (
    <StyledCard>
      <StyledCardMedia
        component="img"
        image={
          image && image[index] ? image[index].urls.full : placeholderNewsImage
        }
        title={item.title}
      />
      <CardContent>
        <Stack>
          <StyledChip label={item.category} />
        </Stack>

        <StyledTitle gutterBottom variant="h6" component="div">
          {item.title}
        </StyledTitle>

        <StyledDescription variant="body2" color="text.secondary">
          {item.description}
        </StyledDescription>
      </CardContent>
      <StyledCardActions>
        <Button size="small">Share</Button>
        <Button size="small" onClick={() => handleOnClick({item})}>
          Read more
        </Button>
      </StyledCardActions>
    </StyledCard>
  )
}

export default NewsCard
