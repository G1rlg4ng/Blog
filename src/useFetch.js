import { useState, useEffect } from "react";

const useFetch = (url) => {

    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(()=>{
        const abortCont = new AbortController();

        fetch(url, {signal: abortCont.signal})
        .then(res => {
            if(!res.ok){
                throw Error('Could not fetch the data for that resource');
            }
            return res.json(); // Passes the JSON into a javascript object
        })
        .then((data)=>{
            setData(data);
            setIsLoading(false);
            setError(null);
        })
        .catch((err) => {
            if(err.name === 'AbortError'){
                console.log('Fetch aborted');
            }else {
                setIsLoading(false);
                setError(err.message);
            }
        })
        return () => abortCont.abort();
    }, [url]) //useEffect dependencies are variables that we want to render whenever there state changes. When it is empty, it means it should only fire the useEffect function once on the initial render.

    return {data, isLoading, error}
}

export default useFetch;