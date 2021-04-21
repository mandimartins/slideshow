import { Fragment } from "react";

import Slide from "./components/slide";

import GlobalStyle from "./globalStyles";

const images = [
  "https://cdn.pixabay.com/photo/2016/12/05/11/39/fox-1883658__340.jpg",
  "https://cdn.pixabay.com/photo/2018/07/31/22/08/lion-3576045__340.jpg",
  "https://cdn.pixabay.com/photo/2017/05/08/13/15/bird-2295431__340.jpg",
  "https://cdn.pixabay.com/photo/2015/07/27/19/47/turtle-863336__340.jpg",
  "https://cdn.pixabay.com/photo/2015/10/12/15/46/fallow-deer-984573__340.jpg",
  "https://cdn.pixabay.com/photo/2017/10/18/16/08/wolf-2864647__340.jpg",
  "https://cdn.pixabay.com/photo/2017/07/24/19/57/tiger-2535888__340.jpg",
];

function App() {
  return (
    <Fragment>
      <GlobalStyle />
      <div
        style={{
          height: "100vh",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Slide images={images} />
      </div>
    </Fragment>
  );
}

export default App;
