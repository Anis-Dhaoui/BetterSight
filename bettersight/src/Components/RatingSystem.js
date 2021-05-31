import React from 'react'
import StarRatings from 'react-star-ratings';

export default function RatingSystem(props) {

    // How many reviews
    const totalReviews = props.reviews.length;
    // console.log(totalReviews);

    const ratings = [
        {
          weight: 5,
          count: 0
        },
        {
          weight: 4,
          count: 0
        },
        {
          weight: 3,
          count: 0
        },
        {
          weight: 2,
          count: 0
        },
        {
          weight: 1,
          count: 0
        }
      ];
      
    props.reviews.map((item) => {
        switch (item.rating){
            case 5:
                ratings[0].count += 1;
                break;
            case 4:
                ratings[1].count += 1;
                break;
            case 3:
                ratings[2].count += 1;
                break;
            case 2:
                ratings[3].count += 1;
                break;
            case 1:
                ratings[4].count += 1;
                break;
        
            default:
                break;
        }
    });
    console.log(ratings);

    const calcAverageRating = (ratings) => {

        let totalWeight = 0;
        let totalReviews = 0;
      
        ratings.forEach((rating) => {
      
          const weightMultipliedByNumber = rating.weight * rating.count;
          totalWeight += weightMultipliedByNumber;
          totalReviews += rating.count;
        });
      
        const averageRating = totalReviews > 0 ? totalWeight / totalReviews : 0;
      
        return averageRating;
    }

    const weightedAvr = calcAverageRating(ratings);
    console.log("weightedAvr", weightedAvr);

    return (
        <div className="rating mt-n3">
            <StarRatings
                starRatedColor="gold"
                starDimension="30px"
                starSpacing="0em"
                rating={weightedAvr}
                numberOfStars={5}
            />
            <br />
            <span className="review-no">{`${totalReviews} Reviews`}</span>
        </div>
    )
}
