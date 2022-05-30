import "../styles/EarnWithEmbed.css";

const EarnWithEmbed = () => {
  return (
    <section className="earn-with-embed_container">
      <h2 className="section-title text-center">How to earn with Embed</h2>
      <p className="text-center">Three simple steps to get your started.</p>
      <div className="item_container">
        <div className="item">
          <div className="earn-step">
            <img
              src="/images/earn_with_embed/match.svg"
              alt="Match"
              className="earn-image"
              title="Match"
            />
            <div className="earn-with-embed_title">Match</div>
          </div>

          <ol>
            <li>Join Embed</li>
            <li>
              Pick and get matched with brands that resonate with the things
              you’re passionate about
            </li>
          </ol>
        </div>
        <div className="item">
          <div className="earn-step">
            <img
              src="/images/earn_with_embed/tokenize.svg"
              alt="Tokenize"
              className="earn-image"
              title="Tokenize"
            />
            <div className="earn-with-embed_title">Tokenize</div>
          </div>
          <ol>
            <li>
              Get branded NFTs that unlock rewards based on your engagement in
              the metaverse
            </li>
            <li>
              Collaborate with brands on long-lasting campaigns in the Embed
              network
            </li>
            <li>
              Connect with exclusive communities, build connections, increase
              your impact
            </li>
          </ol>
        </div>
        <div className="item">
          <div className="earn-step">
            <img
              src="/images/earn_with_embed/earn.svg"
              alt="Earn"
              className="earn-image"
              title="Earn"
            />
            <div className="earn-with-embed_title">Earn</div>
          </div>
          <ol>
            <li>Collect rewards in tokens and NFT</li>
            <li>
              Get extra value from exclusive communities, meta-physical events,
              and our special offers on products/services
            </li>
          </ol>
        </div>
      </div>
      <p style={{ marginBottom: '60px' }} className="text-center bold">Be part of the alpha launch</p>
      <div className="module-border-wrap cp m-auto">
        <div className="module d-flex flex-row jcbtw">
          Join waitlist
          <img
            src="images/home_video/right_arrow.svg"
            alt="Right arrow"
            title="Right arrow"
          />
        </div>
      </div>
    </section>
  );
};

export default EarnWithEmbed;
