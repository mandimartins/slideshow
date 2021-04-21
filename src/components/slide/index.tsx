import React, { useState } from "react";

import {
  Container,
  SlideContainer,
  Button,
  SlideMarkersContainer,
  SlideMarkers,
} from "./styles";

interface ISlideProps {
  images: string[];
}

const Slide: React.FC<ISlideProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const nextContent = (): void => {
    setCurrentIndex((currentIndex) => (currentIndex + 1) % images.length);
  };

  const previousContent = (): void => {
    setCurrentIndex((currentIndex) => {
      if (currentIndex - 1 < 0) {
        return images.length - 1;
      } else {
        return currentIndex - 1;
      }
    });
  };

  return (
    <Container>
      <SlideContainer>
        <Button onClick={previousContent}>Back</Button>
        <img src={images[currentIndex]} />
        <Button onClick={nextContent}>Next</Button>
      </SlideContainer>
      <SlideMarkersContainer>
        {images.map((value, index) => (
          <SlideMarkers key={value} index={index} currentIndex={currentIndex} />
        ))}
      </SlideMarkersContainer>
    </Container>
  );
};

export default Slide;
