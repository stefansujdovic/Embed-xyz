import "../styles/LeadTheChange.css";

import leadTheChangeImage from "../nft-montage-earn.gif";

const LeadTheChange = () => {
  return (
    <section id="leadChange" className="lead-change_container">
      <div className="first_container">
        <h3 className="section-title">Lead the change</h3>
        <p>
          In a decentralised world, you power the brand. Influence the way
          brands will look in the metaverse and build a community around those
          you love.
        </p>
        <p>
          Be a part of the change and join Embed’s decentralized protocol today
        </p>
        <div className="module-border-wrap cp">
          <div className="module d-flex flex-row jcbtw">
            Join waitlist
            <img
              src="images/home_video/right_arrow.svg"
              alt="Right arrow"
              title="Right arrow"
            />
          </div>
        </div>
      </div>
      <div className="second_container">
        <img
          src={leadTheChangeImage}
          alt="Lead the change"
          title="Lead the change"
        />
      </div>
    </section>
  );
};

export default LeadTheChange;
