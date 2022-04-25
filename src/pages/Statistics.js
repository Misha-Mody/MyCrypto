import React from "react";
/* eslint-disable no-unused-vars */
/* eslint react/prop-types: 0 */
/* eslint-disable react/jsx-key */
import StatCard from "../components/StatCard";
import Carousel, { arrowsPlugin } from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import { useMediaQuery } from "react-responsive";

export default function Statistics({ data }) {
  const [dimensions, setDimensions] = React.useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });
  React.useEffect(() => {
    const debouncedHandleResize = debounce(function handleResize() {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth,
      });
    }, 1000);

    window.addEventListener("resize", debouncedHandleResize);

    return (_) => {
      window.removeEventListener("resize", debouncedHandleResize);
    };
  });

  let cards = [];
  for (let obj of data) {
    cards.push(
      <StatCard name={Object.keys(obj)} data={obj[Object.keys(obj)]} />
    );
  }
  return (
    <div className="stat-card-container">
      {dimensions.width < 756 ? (
        <Carousel
          plugins={[
            {
              resolve: arrowsPlugin,
              options: {
                arrowLeft: (
                  <button className="btn btn-sm btn-dark">{" < "}</button>
                ),
                arrowLeftDisabled: (
                  <button className="btn btn-secondary btn-sm disabled">
                    {" < "}
                  </button>
                ),
                arrowRight: (
                  <button className="btn btn-sm btn-dark">{" > "}</button>
                ),
                arrowRightDisabled: (
                  <button className="btn btn-sm disabled btn-secondary">
                    {" > "}
                  </button>
                ),
                addArrowClickHandler: true,
              },
            },
          ]}
        >
          {cards}
        </Carousel>
      ) : (
        cards
      )}
    </div>
  );
}

function debounce(fn, ms) {
  let timer;
  return (_) => {
    clearTimeout(timer);
    timer = setTimeout((_) => {
      timer = null;
      fn.apply(this, arguments);
    }, ms);
  };
}
