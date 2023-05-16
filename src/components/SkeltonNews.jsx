import Skeleton from "@mui/material/Skeleton";
import { Grid } from "@mui/material";

export default function NewsListSkeleton() {
  const skeletonItems = Array.from({ length: 8 });

  return (
    <Grid container spacing={2}>
      {skeletonItems.map((item, index) => (
        <Grid item xs={12} sm={6} md={6} lg={3} key={index}>
          <Skeleton variant="rectangular" height={200} />
          <Skeleton variant="text" height={100} />
          <Skeleton variant="text" height={50} />
        </Grid>
      ))}
    </Grid>
  );
}
