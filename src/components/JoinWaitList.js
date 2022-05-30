import "../styles/JoinWaitList.css";

const JoinWaitList = () => {
  return (
    <section className="pr">
      <img
        src="/images/join_waitlist/neon-nightclub.jpg"
        width={"100%"}
        height={"100%"}
        alt="Night Club"
        className="join-waitlist_image"
        title="Night Club"
      />
      <div className="join-waitlist_container">
        <h2 className="section-title text-center">Join WaitList</h2>
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
      </div>
    </section>
  );
};

export default JoinWaitList;
