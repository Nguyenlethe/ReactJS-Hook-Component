import { useState, useEffect } from 'react';
import {useHistory} from "react-router-dom";
import axios from 'axios';

const useFetch = (url) => {
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [isError, setIsError] = useState(false)
    let history = useHistory()


    if(isError !== false) {
        history.push('/404')
    }

    function handleError(message) {
        setIsLoading(null)
        setIsError(message)
    }

    function handleSusses(data) {
        setTimeout(()=> {
            setData(data)
            setIsLoading(false)
        },400)
        setIsError(false)
    }
    
    useEffect(() => {
        async function fetchData() {
            try {
                const res = await axios.get(url);
                let data = res && res.data ? res.data : [];
                handleSusses(data)
            }
            catch(error) {
                handleError(error.message)
            }
        }
        fetchData()
    },[url])

    return {data,isLoading,isError}
}
export default useFetch;