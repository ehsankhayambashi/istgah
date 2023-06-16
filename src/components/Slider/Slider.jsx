import React, { useState, useEffect } from "react";
import "./Slider.css";
import BtnSlider from "./BtnSlider";
import { Box } from "@mui/system";
import { Link as RouterLink } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import { Skeleton } from "@mui/material";

function Slider() {
  // swipe detection
  let dataSlider = [];
  const { res, loading, error } = useFetch(`slider/getAll`);

  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const minSwipeDistance = 50;
  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };
  const onTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX);
  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    if (isLeftSwipe) {
      prevSlide();
    }
    if (isRightSwipe) {
      nextSlide();
    }
  };
  // swipe detection
  const [slideIndex, setSlideIndex] = useState(1);

  const nextSlide = () => {
    if (!loading) {
      if (slideIndex !== dataSlider.length) {
        setSlideIndex(slideIndex + 1);
      } else if (slideIndex === dataSlider.length) {
        setSlideIndex(1);
      }
    }
  };

  const prevSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1);
    } else if (slideIndex === 1) {
      setSlideIndex(dataSlider.length);
    }
  };

  const moveDot = (index) => {
    setSlideIndex(index);
  };

  // const autoPlayTime = 3000;
  // const timer = setTimeout(() => {
  //   nextSlide();
  // }, autoPlayTime);
  // useEffect(() => {
  //   return () => clearTimeout(timer);
  // }, [slideIndex]);

  if (loading) {
    return (
      <div className="container-slider">
        <Skeleton
          animation="wave"
          variant="rectangular"
          width="100%"
          height="40vh"
        />
      </div>
    );
  }
  if (loading) return "";
  return (
    <div className="container-slider">
      {res.data.map((slide, index) => {
        return (
          <RouterLink to="search/seluni" key={index}>
            <div
              key={index}
              className={
                slideIndex === index + 1 ? "slide active-anim" : "slide"
              }
            >
              <picture>
                <div
                  className="blur-load"
                  style={{
                    backgroundImage: "url(https://placehold.co/400?text=...)",
                  }}
                >
                  <source
                    media="(max-width: 650px)"
                    srcSet={process.env.REACT_APP_UPLOAD_URL + slide.mobile}
                  ></source>
                  <img
                    src={process.env.REACT_APP_UPLOAD_URL + slide.desktop}
                    draggable={false}
                    onTouchStart={onTouchStart}
                    onTouchMove={onTouchMove}
                    onTouchEnd={onTouchEnd}
                    loading="lazy"
                  />
                </div>
              </picture>
            </div>
          </RouterLink>
        );
      })}
      <Box sx={{ display: { xs: "none", sm: "block" } }}>
        <BtnSlider moveSlide={prevSlide} direction={"next"} />
        <BtnSlider moveSlide={nextSlide} direction={"prev"} />
      </Box>
      <div className="container-dots">
        {res.data.map((slide, index) => (
          <div
            key={index}
            onClick={() => moveDot(index + 1)}
            className={slideIndex === index + 1 ? "dot active" : "dot"}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default Slider;
