import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Slider from "react-slick";
import "./reviewrespjsfile.js";
import settings from "./reviewrespjsfile.js";
import ReviewsSilder from "./ReviewsSilder/ReviewsSilder.js";
const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [reviewsLoadData, SetreviwsLoadData] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:5000/reviewdata/show`)
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
        SetreviwsLoadData(false);
      });
  }, []);

  console.log(reviews);
  return (
    <div className="section-gap">
      <div className="text-center">
        <h1> Why Our Customer Love Reviews </h1>
        <div style={{ margin: "25px" }}>
          {reviewsLoadData ? (
            <div className="spinner-border text-success mx-auto" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          ) : (
            <Slider {...settings}>
              {reviews.map((review) => (
                <ReviewsSilder review={review} key={review._id}></ReviewsSilder>
              ))}
            </Slider>
          )}
        </div>
      </div>
    </div>
  );
};

export default Reviews;
