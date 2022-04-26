import React, { useEffect } from "react";
import StatCard from "../components/StatCard";
import Carousel, { arrowsPlugin } from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";

/**
 * Displays a carousel of stat cards when using on mobile and a row on largen screen widths
 * @param {Object []} statData - The key-value pair of the information regarding the statistics
 * @returns
 */
/* eslint-disable no-unused-vars */
/* eslint react/prop-types: 0 */
export default function Statistics({ statData }) {
  // store the current width of the device
  const [dimensions, setDimensions] = React.useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });
  useEffect(() => {
    // handleResize function is passed as a callback, waits for 1000 ms and then called
    const debouncedHandleResize = debounce(function handleResize() {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth,
      });
    }, 1000);

    // dynamically listen to width change , call the debouncedHandleResize function if width is changed
    window.addEventListener("resize", debouncedHandleResize);

    return (_) => {
      window.removeEventListener("resize", debouncedHandleResize);
    };
  });

  let cards = [];
  for (let obj of statData) {
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

// creates a delay for ms seconds untill the state is updated to avoid multiple state updates and re-rendering on change of screen width
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
