import Layout from "../src/components/Layout"
import HomeVideo from "./components/HomeVideo"
import LeadTheChange from "./components/LeadTheChange";
import EarnModel from "./components/EarnModel";
import JoinWaitList from "./components/JoinWaitList";
import EarnWithEmbed from "./components/EarnWithEmbed";

function App() {
  return (
    <Layout>
      <HomeVideo />
      <LeadTheChange />
      <EarnModel />
      <EarnWithEmbed />
      <JoinWaitList />
    </Layout>
  );
}

export default App;
