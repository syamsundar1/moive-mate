import { useEffect, useState } from "react";


export const useFetch = (apiPath,queryTerm) => {
    const apiUrl = `https://api.themoviedb.org/3/${apiPath}?api_key=${process.env.REACT_APP_API_KEY}&query=${queryTerm}`;

    const [data,setData] = useState([]);

    useEffect( () => {
        async function fetchMoives() {
          const response = await fetch(apiUrl);
          const json = await response.json();
          setData(json.results);
        }
        fetchMoives();
      },[apiUrl] )

  return (
    {data}
  )
}


