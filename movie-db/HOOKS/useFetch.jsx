import React, { useEffect, useState } from 'react';

const useFetch = (apiPath, queryTerm = "") => {
  const [data, setData] = useState([]);
  const key = import.meta.env.VITE_API_KEY;

  const url = `https://api.themoviedb.org/3/${apiPath}?api_key=${key}&query=${queryTerm}`;

  useEffect(() => {
    async function fetchMovies() {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const jsonData = await response.json();
        setData(jsonData.results);
      } catch (error) {
        console.error('Error fetching data:', error);
        setData([]);
      }
    }
    fetchMovies();
  }, [url]);

  return { data };
};

export default useFetch;
