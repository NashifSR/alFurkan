import { useState, useEffect } from 'react';
import axios from 'axios';

const useMCQ = () => {
  // 1. Initialize all state variables
  const [mcq, setMcq] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState(null);

  const API_URL = "/mcq.json"; 

  // 2. Define the fetching function
  const fetchMCQs = async () => {
    setIsLoading(true);
    setIsError(false);
    setError(null);

    try {
      const response = await axios.get(API_URL);
      setMcq(response.data); // Axios automatically gives the data in response.data
    } catch (err) {
      setIsError(true);
      setError(err);
      setMcq([]); // Clear data on error
    } finally {
      setIsLoading(false);
    }
  };

  // 3. Use useEffect to run the fetch function once on mount
  useEffect(() => {
    fetchMCQs();
    // The dependency array is empty, so it only runs once (on mount)
  }, []); 
  
  // 4. Provide a manual refetch function
  const refetch = fetchMCQs; 

  // 5. Return the state and functions
  return { mcq, refetch, isLoading, isError, error };
};

export default useMCQ;