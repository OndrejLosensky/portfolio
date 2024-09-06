import React from "react";
import "../../../styles/bento-reversed.scss";
import { CardDetails } from "./carousel.config";
import CarouselItem from "./carousel-item";

interface TechstackCarouselProps {
  cardDetails: CardDetails;
}

const TechstackCarousel: React.FC<TechstackCarouselProps> = ({
  cardDetails,
}) => {
  return (
    <div className="carousel-container-reversed">
      <div className="carousel-track-reversed">
        {Object.keys(cardDetails).map((detailKey) => {
          const keyNum = parseInt(detailKey, 10); 
          return (
            <CarouselItem
              key={keyNum} 
              imgUrl={cardDetails[keyNum].imgUrl}
              imgTitle={cardDetails[keyNum].title}
            />
          );
        })}
        {Object.keys(cardDetails).map((detailKey) => {
          const keyNum = parseInt(detailKey, 10); 
          return (
            <CarouselItem
              key={keyNum} 
              imgUrl={cardDetails[keyNum].imgUrl}
              imgTitle={cardDetails[keyNum].title}
            />
          );
        })}
      </div>
    </div>
  );
};

export default TechstackCarousel;
