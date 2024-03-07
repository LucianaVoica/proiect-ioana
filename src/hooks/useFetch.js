import { useState, useEffect } from 'react';
import axios from 'axios';

const useAxiosFetch = (url) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const token = localStorage.getItem('jwtToken');
      const response = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${token}`, 
        },
      });
      setData(response.data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [url]);

  const refetch = () => {
    setLoading(true);
    fetchData();
  };

  return { data, error, loading, refetch };
};

export default useAxiosFetch;
