import React from 'react';
import { footerContact } from '../constant/DataImage';
import '../scss/Footer.scss';
function Footer() {
  return (
    <section id="footer">
      <div className="wrapper-footer">
        <div className="a">
          <div className="list-footer">
            <h2>ABOUT US</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
              euismod placerat dui et tincidunt. Sed sollicitudin posuere
              auctor. Phasellus at ultricies nisl. Integer at leo eros. Ut nec
              lorem id orci convallis porta. Donec pharetra neque eu velit
              dictum molestie.
            </p>
          </div>
          <div className="list-footer">
            <h2>EXPLORE</h2>
            <ul className="items-footer">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Services</a>
              </li>
              <li>
                <a href="#">Portfolio</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
            </ul>
          </div>
          <div className="list-footer">
            <h2>BROWSE</h2>
            <ul className="items-footer">
              <li>
                <a href="#">Careers</a>
              </li>
              <li>
                <a href="#">Press & Media</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
              <li>
                <a href="#">Terms Of Service</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
            </ul>
          </div>
          <div className="list-footer">
            <h2>CONTACT US</h2>
            <span id="company">BisLite Inc.</span> <br />
            <span>Always Street 265 0X - 125 - Canada</span> <br />
            <span>Phone: 987-6543-210 Fax: 987-6543-210</span>
          </div>
          <div className="list-footer">
            <h2>CONNECT WITH US</h2>
            <ul className="logo-footer">
              {footerContact.map((items) => {
                return (
                  <>
                    <li key={items.id}>
                      <img src={items.url} />
                    </li>
                  </>
                );
              })}
            </ul>
          </div>
        </div>
        <div className="description-footer">
          <p>
            © Copyright 2012 - BisLite Inc. All rights reserved. Some free icons
            used here are created by Brankic1979.com. Client Logos are copyright
            and trademark of the respective owners / companies
          </p>
          <a href="#" className="icon-menu" />
        </div>
      </div>
    </section>
  );
}

export default Footer;
