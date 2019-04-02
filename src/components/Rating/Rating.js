import React from 'react';
import ReactStars from 'react-stars';



const ratingChanged = (newRating) => {
    console.log(newRating)
};
const Rating = () => {
    return(
        <>
        <ReactStars
            count={5}
            onChange={ratingChanged}
            size={24}
            color2={'#ec6026'}/>

            <span style={{
                position: 'relative',
                top: '-23px',
                left: '110px',
                width: '80px',
                fontFamily: "Fira Sans, sans-serif"
            }}>1 отзыв</span>
            </>
    );
};

export default Rating;