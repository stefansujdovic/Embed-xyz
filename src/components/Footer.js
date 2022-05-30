import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="footer_container">
        <div className="footer-logo_container">
          <img
            className="footer-logo"
            src="/images/footer/logo.svg"
            alt="Logo"
            title="Logo"
          />
          <p className="footer-text-desktop">@Embed 2022</p>
        </div>
        <div className="footer-info">
          <p className="text-center">
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <div className="social_container">
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
          <p className="text-center">Legal | Privacy | Careers | Contact</p>
          <p className="text-center footer-text-mobile">@Embed 2022</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
