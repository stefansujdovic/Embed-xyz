import "../styles/HomeVideo.css";

const HomeVideo = () => {
  return (
    <section className="pr home-video">
      <video autoPlay loop>
        <source src="/videos/nft-collectors.mp4" type="video/mp4"></source>
      </video>
      <div className="home-video-overlay">
        <div>
          <img
            src="/images/home_video/logo.svg"
            alt="Logo white"
            title="Logo White"
          />
        </div>
        <div>
          <h1 className="home-title">
            Embed empowers you to monetize your portfolio
          </h1>
        </div>
      </div>
    </section>
  );
};

export default HomeVideo;
