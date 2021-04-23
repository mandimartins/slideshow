import styled from "styled-components";

type IMarker = {
  index: number;
  currentIndex: number;
};

type IButton = {
  buttonDirection: string;
};

export const Container = styled.div``;

export const SlideContainer = styled.div`
  position: relative;

  img {
    max-width: 100%;
    display: block;
    height: auto;
  }
`;

export const Button = styled.button<IButton>`
  position: absolute;

  transform: translate(0, -50%);

  top: 50%;

  right: ${(props) => props.buttonDirection === "next" && 0};

  left: ${(props) => props.buttonDirection === "left" && 0};

  background-color: #fff;
  font-size: 2rem;
  padding: 2rem;

  cursor: pointer;

  :hover {
    opacity: 0.7;
  }
`;

export const SlideMarkers = styled.div<IMarker>`
  background-color: ${(props) =>
    props.index === props.currentIndex ? "dodgerblue" : "#fff"};
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 100%;
  margin-right: 1rem;
`;

export const SlideMarkersContainer = styled.div`
  display: flex;
  justify-content: center;

  margin-top: 2rem;

  & ${SlideMarkers}:last-child {
    margin-right: 0;
  }
`;
