import { Button, Typography } from "@mui/material";
import NewsList from "../components/News";
import Header from "../components/Header";
import Search from "../components/Search";
import { Grid } from "@material-ui/core";
import useFetchData from "../hooks/UseFetchData";
import { useState } from "react";
import NewsListSkeleton from "../components/SkeltonNews";
import NoNewsFound from "../components/NoNewsFound";

function HomePage() {
  const [searchQuery, setsearchQuery] = useState("");
  const [authors, setauthors] = useState([]);
  const [searchText, setsearchText] = useState("");

  const [data, loading] = useFetchData(
    "myNews",
    searchText,
    searchQuery,
    authors
  );

  return (
    <>
      <Typography>Favorite News :</Typography>
      {loading ? (
        <NewsListSkeleton />
      ) : data?.length > 0 ? (
        <NewsList news={data} />
      ) : (
        <NoNewsFound />
      )}
    </>
  );
}

export default HomePage;
