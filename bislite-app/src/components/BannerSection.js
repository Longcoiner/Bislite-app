import React from 'react';
import '../scss/BannerSection.scss';
import Slider from 'react-slick';
import { ClientImages, DataImage } from '../constant/DataImage';
import { MidContent } from '../constant/MidContent';
import { RightOutlined } from '@ant-design/icons';
import cursorIcon from '../asset/images/lastestWork/cursor_icon.png';
import LastWorkSlide from './LastWorkSlide';
function BannerSection() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    autoplaySpeed: 2000,
    appendDots: (dots) => (
      <div
        style={{
          backgroundColor: 'transparent',
          borderRadius: '10px',
          padding: '10px',
          bottom: '-35px',
        }}
      >
        <ul style={{ margin: '0px' }}> {dots} </ul>
      </div>
    ),
  };
  return (
    <section id="body">
      <div className="slideshow-container">
        <div className="wrapper">
          <div className="slideshow-list">
            <Slider {...settings}>
              {DataImage.map((items) => {
                return (
                  <div key={items.id} classNames="slideshow-items">
                    <img
                      src={items.url}
                      style={{ width: '1000px', height: '440px' }}
                    />
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
      </div>

      {/* mid -content */}
      <div className="mid-content">
        <div className="wrapper-content">
          {MidContent.map((items) => {
            return (
              <div className="midContent-group" key={items.id}>
                <div className="header-content">
                  <img src={items.icon} />
                  <h2>{items.title}</h2>
                </div>
                <span>{items.description}</span>
                <div className="footer-content">
                  <RightOutlined />
                  <a href="#">Read More</a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {/* lastest work */}
      <div className="lastest-work">
        <div className="wrapper-work">
          <div className="header-work">
            <img src={cursorIcon} />
            <h2>LATEST WORKS</h2>
          </div>
          <div className="banner-work">
            <LastWorkSlide />
          </div>
        </div>
      </div>
      {/* bottom content */}
      <div className='content-container'>
        <div className="bottom-content">
          <div className="testimonials">
            <h3 className="testimonials-title">TESTIMONIALS</h3>
            <p className="testimonials-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              ut nulla sapien, at aliquam erat. Sed vitae massa tellus. Aliquam
              commodo aliquam metus, sed iaculis nibh tempus id. Lorem ipsum
              dolor sit amet, consectetur adipiscing elit. Vestibulum ante ipsum
              primis in faucibus orci luctus et ultrices posuere cubilia Curae;
              Etiam nec nisi in nisl euismod fringilla.
            </p>
            <span className="testimonials-author">
              John Travis, CEO, DomainName.com
            </span>
          </div>
          <div className="clients">
            <h3 className="clients-title">OUR CLIENTS</h3>
            <ul className="clients-list">
              {ClientImages.map((items) => {
                return (
                  <li key={items.id}>
                    <img src={items.url} />
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div className="download-section">
          <p className="download-title">
            This is a clean and modern, four column website PSD template. You
            can code it into a Wordpress website, HTML5 responsive website for
            your personal or client works. So ahead and download this wonderful
            PSD template!
          </p>
          <a href="#" id="btn-download" alt="">
            DOWNLOAD PSD
          </a>
        </div>
      </div>
    </section>
  );
}

export default BannerSection;
