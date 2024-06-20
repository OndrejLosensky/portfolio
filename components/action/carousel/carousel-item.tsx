import React from "react";

interface CarouselItemProps {
  imgUrl: string;
  imgTitle: string;
}

const CarouselItem: React.FC<CarouselItemProps> = ({ imgUrl, imgTitle }) => {
  return (
    <div className="carousel-card">
      <img src={imgUrl} alt={imgTitle} />
    </div>
  );
};

export default CarouselItem;
