import "../styles/EarnModel.css";

const EarnModel = () => {
    return (
        <section id="earn" className="earn-model-container">
            <h3 className="section-title text-center">The Embed-to-Earn Model</h3>

            <img
                className="earn-model-destkop m-auto"
                src="/images/earn_model/earn_model_desktop.svg"
                alt="Earn Model"
                title="Earn Model"
            />

            <img
                className="earn-model-mobile"
                src="/images/earn_model/earn_model_mobile.svg"
                alt="Earn Model"
                width={"100%"}
                title="Earn Model"
            />
        </section>
    );
};

export default EarnModel;
