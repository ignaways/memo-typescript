import { useState, useCallback, useEffect } from "react";
import axios from "axios"

const useFetch = (url:string) => {
  const [fetchedData, setFetchedData] = useState({
    data:[],
    isLoading:true,
    isError:false
  });

  const fetchData = useCallback(async() => {
    try {
      const response = await axios.get(url)
    } catch (err) {
      
    }
  },[url])
}

export default useFetch