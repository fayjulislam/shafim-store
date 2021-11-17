import { useEffect, useState } from 'react';

const UseWatchs = () => {
    const [watchs, setWatchs] = useState([]);
    useEffect(() => {
        fetch('https://mysterious-anchorage-89196.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setWatchs(data))
    }, [])
    return [watchs]
};

export default UseWatchs;