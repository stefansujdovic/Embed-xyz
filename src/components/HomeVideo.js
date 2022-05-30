import "../styles/HomeVideo.css";

const HomeVideo = () => {
  return (
    <section id="home" className="pr home-video">
      <video autoPlay loop muted>
        <source src="/videos/nft-collectors.mp4" type="video/mp4"></source>
      </video>
      <div className="home-video-overlay">
        <div>
          <img
            className="white-logo mb2"
            src="/images/home_video/logo.svg"
            alt="Logo white"
            title="Logo White"
          />
        </div>
        <div className="video-inner-text">
          <h1 className="home-main-title m0">
            Embed empowers you to monetize your portfolio
          </h1>
          <hr className="home_border" />
          <p className="home-subtitle">
            We enable NTF holders to become influencers, build their audience
            through a turn-key solution developed to monetize and transform
            their portfolio into a yielding asset.We create passion-based
            communities.
          </p>
          <div className="module-border-wrap cp m-auto">
            <div className="module d-flex flex-row jcbtw">
              Join waitlist
              <img src="images/home_video/right_arrow.svg" alt="Right arrow" title="Right arrow" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeVideo;
