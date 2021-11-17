import { useEffect, useState } from 'react';

const UseWatchs = () => {
    const [watchs, setWatchs] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setWatchs(data))
    }, [])
    return [watchs]
};

export default UseWatchs;