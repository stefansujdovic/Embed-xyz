import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "../styles/EarnWithEmbed.css";
import { getEarnData } from "../actions/embed";
import { dummyData } from "../actions/dummy";

const EarnWithEmbed = () => {
  const embed = useSelector((state) => state.embed);
  const dispatch = useDispatch();

  useEffect(() => {
    if (embed?.embed?.length == 0) {
      dispatch(getEarnData(dummyData));
    }
  }, [embed]);

  return (
    <section id="promote" className="earn-with-embed_container">
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
            {embed?.embed[0]?.match.map((element, index) => {
              return <li key={index}>{element}</li>;
            })}
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
            {embed?.embed[1]?.tokenize.map((element, index) => {
              return <li key={index}>{element}</li>;
            })}
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
            {embed?.embed[2]?.earn.map((element, index) => {
              return <li key={index}>{element}</li>;
            })}
          </ol>
        </div>
      </div>
      <p style={{ marginBottom: "60px" }} className="text-center bold">
        Be part of the alpha launch
      </p>
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
