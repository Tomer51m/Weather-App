import { useEffect, useState} from 'react';
export default function FetchHook(url) {
    // http://api.openweathermap.org/data/2.5/forecast?id=294800&units=metric&APPID=ee6f1db9856f6c0e2d3bc0e424530b43

    const [state, setState] = useState({
        fetchedData: null,
        loading: true
    });
    
    useEffect(() => {
        setState(currentState => ({
            fetchedData: currentState.fetchedData,
            loading: true
        }));

        fetch(url)
        .then(response => {
            if(response.status !== 200) {
            console.log(`Oops! something not working.
            Response status is: ${response.status}`);
            return;
            }
            return response.json()
        }).then(data => {
            localStorage.setItem('fetched data', JSON.stringify(data))
            setState({
                fetchedData: data,
                loading: false
            });
            console.log(data);
        })
        .catch((err) => {
            console.log(err.message);
        })
    },[url])
    
    return state;
}