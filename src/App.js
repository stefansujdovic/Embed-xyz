import Layout from "../src/components/Layout"
import HomeVideo from "./components/HomeVideo"
import LeadTheChange from "./components/LeadTheChange";
import EarnModel from "./components/EarnModel";
import JoinWaitList from "./components/JoinWaitList";

function App() {
  return (
    <Layout>
      <HomeVideo />
      <LeadTheChange />
      <EarnModel />
      <JoinWaitList />
    </Layout>
  );
}

export default App;
