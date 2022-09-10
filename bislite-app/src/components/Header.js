import React from 'react';
import '../scss/Header.scss';
import { DownOutlined } from '@ant-design/icons';
const Header = () => {
  return (
    <div className="header">
      <nav className="wrapper">
        <a href="index.html" className="icon-menu" />
        <a href="#" className="toggleMenu">
          Menu
        </a>
        <ul className="nav">
          <li>
            <a href="#">HOME</a>
          </li>
          <li>
            <a href="#">ABOUT US</a>
          </li>
          <li class="service">
            <a href="#">SERVICES</a>
            <DownOutlined style={{ fontSize: '10px' }} className="arrow-down" />
            <ul className="sub-nav">
              <li>
                <a href="#"> Web Design</a>
              </li>
              <li>
                <a href="#">Wordpress Design</a>
              </li>
              <li>
                <a href="#">Mobile App Development</a>
              </li>
              <li>
                <a href="#">Internet Marketing</a>
              </li>
              <li>
                <a href="#">social media management</a>
              </li>
            </ul>
          </li>
          <li class="portfolio">
            <a href="#">PORTFOLIO</a>
            <DownOutlined style={{ fontSize: '10px' }} className="arrow-down" />
            <ul className="sub-nav">
              <li>
                <a href="#"> Websites</a>
              </li>
              <li>
                <a href="#">wordpress</a>
              </li>
              <li>
                <a href="#">mobile apps</a>
              </li>
              <li>
                <a href="#">icons</a>
              </li>
              <li>
                <a href="#">logos</a>
              </li>
              <li>
                <a href="#">graphics</a>
              </li>
              <li>
                <a href="#">social media management</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#">BLOG</a>
          </li>
          <li>
            <a href="#">CONTACT US</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
