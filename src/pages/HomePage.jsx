import { Button } from "@mui/material";
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
  const [text, setText] = useState("");

  const [data, loading] = useFetchData(
    "data",
    searchText,
    searchQuery,
    authors
  );

  const category = [
    { label: "Bitcoin", value: "bitcoin" },
    { label: "Sport", value: "sport" },
    { label: "Comedy", value: "comedy" },
  ];
  const handleSearch = () => {
    setsearchText(text);
  };
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={4}>
          <Search value={text} onChange={(e) => setText(e.target.value)} />
          <Button variant="outlined" onClick={() => handleSearch()}>Search</Button>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Header options={category} />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          {/* <Header options={options} /> */}
        </Grid>
      </Grid>

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
