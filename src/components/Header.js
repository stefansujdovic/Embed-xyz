import "../styles/Header.css";

import React, { useState } from "react";

const Header = () => {
  const [openNavigation, setOpenNavigation] = useState(false);

  const toogleNav = () => {
    setOpenNavigation(!openNavigation);
  };

  return (
    <>
      <header>
        <section className="mobile-nav">
          {!openNavigation && (
            <img src="/images/mobile_nav/logo.svg" alt="Logo" title="Logo" />
          )}

          {openNavigation && (
            <img
              className="mobile-logo-active"
              src="/images/mobile_nav/logo_active.svg"
              alt="Logo"
              title="Logo"
            />
          )}

          <img
            onClick={toogleNav}
            className="mobile-logo-active"
            src={
              `/images/mobile_nav/${openNavigation ? "close" : "navigation"}` +
              ".svg"
            }
            alt="Navigation"
            title="Navigation"
          />

          {openNavigation && (
            <div className="mobile-item-container">
              <nav>
                <ul>
                  <li>Home</li>
                  <li className="active">Earn</li>
                  <li>Promote</li>
                  <li>Join Waitlist</li>
                </ul>
              </nav>
              <div className="social_header">
                <img
                  src="/images/footer/linkedin.svg"
                  alt="LinkedIn"
                  title="LinkedIn"
                />
                <img
                  src="/images/footer/telegram.svg"
                  alt="Telegram"
                  title="Telegram"
                />
                <img
                  src="/images/footer/twitter.svg"
                  alt="Twitter"
                  title="Twitter"
                />
              </div>
            </div>
          )}
        </section>
        <section className="desktop-nav">
          <img src="/images/desktop_nav/logo.svg" alt="Logo" title="Logo" />
          <nav>
            <ul className="desktop-item-container">
              <li>Home</li>
              <li className="active">Earn</li>
              <li>Promote</li>
              <li>Join Waitlist</li>
            </ul>
          </nav>
        </section>
      </header>
    </>
  );
};

export default Header;
