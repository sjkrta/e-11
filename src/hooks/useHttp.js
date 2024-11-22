import React, { useEffect, useState } from "react";

const useHttp = (url) => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const fetchedData = await fetch(url);
        const fetchedJSON = await fetchedData.json();
        setData(fetchedJSON);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { loading, data, error };
};

export default useHttp;