import { useEffect, useState } from 'react';

const useReview = () => {
    const [review, setReview] = useState();
    useEffect(() => {
        fetch('https://mysterious-anchorage-89196.herokuapp.com/review')
            .then(res => res.json())
            .then(data => setReview(data))
    }, [])
    return [review]
};

export default useReview;