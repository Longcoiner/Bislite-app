import React from 'react';
import sampleView from '../asset/images/lastestWork/sample_view.gif';
import Slider from 'react-slick';

function LastWorkSlide() {
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: 'block',
          position: 'absolute',
          top: '-40px',
          right: '0',
        }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: 'block',
          position: 'absolute',
          right: '25px',
          top: '-40px',
        }}
        onClick={onClick}
      />
    );
  }
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    arrow: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive:[
      {
        breakpoint: 768,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            dots: true
          }
      },
      {
        breakpoint: 468,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            dots: true
          }
      }
    ]
  };

  return (
    <ul>
      <Slider {...settings}>
        <li id="work-1">
          <a href="#">
            <img src={sampleView} />
          </a>
        </li>
        <li id="work-2">
          <a href="#">
            <img src={sampleView} />
          </a>
        </li>
        <li id="work-3">
          <a href="#">
            <img src={sampleView} />
          </a>
        </li>
        <li id="work-4">
          <a href="#">
            <img src={sampleView} />
          </a>
        </li>
        <li id="work-1">
          <a href="#">
            <img src={sampleView} />
          </a>
        </li>
        <li id="work-2">
          <a href="#">
            <img src={sampleView} />
          </a>
        </li>
        <li id="work-3">
          <a href="#">
            <img src={sampleView} />
          </a>
        </li>
        <li id="work-4">
          <a href="#">
            <img src={sampleView} />
          </a>
        </li>
      </Slider>
    </ul>
  );
}

export default LastWorkSlide;
