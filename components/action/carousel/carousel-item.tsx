import Image from "next/image";
import React from "react";

interface CarouselItemProps {
  imgUrl: string;
  imgTitle: string;
}

const CarouselItem: React.FC<CarouselItemProps> = ({ imgUrl, imgTitle }) => {
  return (
    <div className="carousel-card">
      <Image width={32} height={32} src={imgUrl} alt={imgTitle} />
    </div>
  );
};

export default CarouselItem;
