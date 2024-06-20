import React from "react";
import "../../../styles/bento.scss";
import { CardDetails } from "../carousel/carousel.config";
import CarouselItem from "./carousel-item";

interface TechstackCarouselProps {
  cardDetails: CardDetails;
}

const TechstackCarousel: React.FC<TechstackCarouselProps> = ({ cardDetails }) => {
  return (
    <div className="carousel-container">
      <div className="carousel-track">
        {Object.keys(cardDetails).map((detailKey) => {
          const keyNum = parseInt(detailKey, 10); // Convert detailKey to number
          return (
            <CarouselItem
              key={keyNum} // Use keyNum as key prop
              imgUrl={cardDetails[keyNum].imgUrl}
              imgTitle={cardDetails[keyNum].title}
            />
          );
        })}
         {Object.keys(cardDetails).map((detailKey) => {
          const keyNum = parseInt(detailKey, 10); // Convert detailKey to number
          return (
            <CarouselItem
              key={keyNum} // Use keyNum as key prop
              imgUrl={cardDetails[keyNum].imgUrl}
              imgTitle={cardDetails[keyNum].title}
            />
          );
        })}
      </div>
    </div>
  );
}

export default TechstackCarousel;
