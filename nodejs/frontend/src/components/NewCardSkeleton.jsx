import {Card, CardContent, CardActions, Skeleton} from '@mui/material'

const NewsCardSkeleton = () => {
  return (
    <Card>
      <Skeleton variant="rectangular" height={200} />

      <CardContent>
        <Skeleton variant="text" height={20} />
        <Skeleton variant="text" height={20} />
        <Skeleton variant="text" height={20} />
      </CardContent>

      <CardActions>
        <Skeleton variant="rectangular" width={80} height={30} />
        <Skeleton variant="rectangular" width={80} height={30} />
      </CardActions>
    </Card>
  )
}

export default NewsCardSkeleton
