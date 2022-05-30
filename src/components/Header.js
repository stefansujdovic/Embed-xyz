import "../styles/Header.css";

const Header = () => {
  return (
    <>
      <header>
        <section className="mobile-nav">
          <img src="/images/mobile_nav/logo.svg" alt="Logo" title="Logo" />

          <img
            src="/images/mobile_nav/navigation.svg"
            alt="Navigation"
            title="Navigation"
          />
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
