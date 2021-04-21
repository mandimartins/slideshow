import styled from "styled-components";

type IMarker = {
  index: number;
  currentIndex: number;
};

export const Container = styled.div`
  width: 100%;
`;

export const SlideContainer = styled.div`
  width: 100%;
  display: flex;

  justify-content: space-between;
`;

export const Button = styled.button`
  background-color: #fff;
  font-size: 2rem;
  padding: 2rem;

  :hover {
    opacity: 0.7;
  }
`;

export const SlideMarkersContainer = styled.div`
  display: flex;
  justify-content: center;

  margin-top: 2rem;
`;

export const SlideMarkers = styled.div<IMarker>`
  background-color: ${(props) =>
    props.index === props.currentIndex ? "#000" : "#fff"};
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 100%;
  margin-right: 1rem;
`;
