import { useState, useEffect, useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import API from "../helpers/API";
const useFetchData = (link, searchText, searchQuery, authors) => {
  const [data, setData] = useState(null);
  const [loading, setloading] = useState(null);

  const { token } = useContext(AuthContext);

  useEffect(() => {
    console.log(searchText);
    const fetchData = async () => { 
      try {
        setloading(true);

        const response = await API.post(
          link,
          {
            search: searchText,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          } 
        );

        console.log(response.data);
        setData(response.data);

        // return response.data;
        setloading(false);

        // const data = await response.json();
      } catch (error) {
        setloading(false);

        console.error(error);
      }
    };

    fetchData();
  }, [searchText, searchQuery, authors]);

  return [data, loading];
};

export default useFetchData;
