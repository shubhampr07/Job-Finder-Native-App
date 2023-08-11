import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = (endpoint, query) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const options = {
        method: 'GET',
        url: `https://jsearch.p.rapidapi.com/${endpoint}`,
        headers: {
            'X-RapidAPI-Key': '57c8ed3dd8msh2938e3747ca96b0p15ad63jsn330ac4ab4bfa',
            'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
          },
        params: { ...query },
        
      };

      const fetchData = async () => {
        setIsLoading(true);
        try{
            const response = await axios.request(options);
            setData(response.data.data);
            setIsLoading(false);
        } catch(error) {
            setError(error);
            alert("This is an error")
        } finally {
            setIsLoading(false);
        }
      }

      useEffect(() => {
        fetchData();

      }, []);

      const  refetch = () => {
        setIsLoading(true);
        fetchData();
      }
      
      return { data, isLoading, error, refetch};
    }

    export default useFetch;