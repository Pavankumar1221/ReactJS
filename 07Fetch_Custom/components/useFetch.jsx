import React from "react";
import { useEffect } from "react";
import { useState } from "react";

function useFetch(url) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {

        setLoading(true);
        setError(null); // reset
        const response = await fetch(url);
        if (!response.ok) throw new Error("Network error");
        const json = await response.json();
        console.log("Fetched data:", json); // debug log
        setData(json);

      } catch (err) {
        
        setError(err.message);
        setData([]); // ensure no stale data

      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);
  return { data, loading, error };
}

export default useFetch;
