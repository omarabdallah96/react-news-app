import { Grid, makeStyles, Typography } from "@material-ui/core";
import { AccessTime } from "@material-ui/icons";
import moment from "moment";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { Button } from "@mui/material";
const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(3),
  },
  item: {
    padding: theme.spacing(2),
    borderRadius: theme.spacing(1),
    boxShadow: "0px 3px 5px rgba(0, 0, 0, 0.1)",
    transition: "transform 0.2s ease-in-out",
    "&:hover": {
      transform: "translateY(-5px)",
    },
  },
  image: {
    width: "100%",
    height: 200,
    objectFit: "cover",
    borderRadius: theme.spacing(1),
  },
  title: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  description: {
    color: theme.palette.text.secondary,
  },
  dateTime: {
    textAlign: "center",
    display: "flex",
    flexDirection: "row",
    gap: 10,
  },
}));

export default function NewsList({ news }) {
  const classes = useStyles();
  const handleClick = (url) => {
    window.open(url, "_blank");
  };
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        {news.length > 0 ? (
          news.map((item,id) => (
            <Grid item xs={12} sm={6} md={6} lg={3} key={id}>
              <div className={classes.item}>
                <img
                  src={item.image}
                  alt={item.title}
                  className={classes.image}
                />
                <Typography variant="h6" className={classes.title}>
                  {item.title}
                </Typography>
                <Typography variant="body2" className={classes.description}>
                  {item.description}
                  <Button onClick={() => handleClick(item.full_post)}>
                    Read More..
                  </Button>
                </Typography>
                <Typography variant="body2" className={classes.dateTime}>
                  {moment(item.pub_date).fromNow()}
                  <AccessTime />
                </Typography>
              </div>
            </Grid>
          ))
        ) : (
          <Typography variant="h6">No news found</Typography>
        )}
      </Grid>
    </div>
  );
}
