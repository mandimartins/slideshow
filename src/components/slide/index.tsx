import React, { useState, useEffect, useCallback } from "react";

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
  const [currentIntervalId, setCurrentIntervalId] = useState<any>();

  const memoizedNextContent = useCallback(() => {
    const nextContent = (): void => {
      setCurrentIndex((currentIndex) => (currentIndex + 1) % images.length);
    };
    nextContent();
  }, [images.length]);

  const previousContent = (): void => {
    clearInterval(currentIntervalId);
    setCurrentIndex((currentIndex) => {
      if (currentIndex - 1 < 0) {
        return images.length - 1;
      } else {
        return currentIndex - 1;
      }
    });
  };

  useEffect(() => {
    const intervalId = setInterval(memoizedNextContent, 1500);
    setCurrentIntervalId(intervalId);
    return function clearUp() {
      clearInterval(intervalId);
    };
  }, [memoizedNextContent]);

  return (
    <Container>
      <SlideContainer>
        <Button buttonDirection="back" onClick={previousContent}>
          Back
        </Button>
        <img src={images[currentIndex]} alt=" " />
        <Button
          buttonDirection="next"
          onClick={() => {
            clearInterval(currentIntervalId);
            memoizedNextContent();
          }}
        >
          Next
        </Button>
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
