import MainAbuotMe from "./Components/AboutMe/MainAbuotMe";
import FooterPage from "./Components/FooterPage/FooterPage";
import MainMaySkils from "./Components/MySkils/MainMaySkils";
import MyWork from "./Components/MyWork/MyWork";
import Top_MainComponet from "./Components/TopPage/Top_MainComponet";
function App() {
  return (
    <div className="App">
      <Top_MainComponet />
      <MainAbuotMe />
      <MainMaySkils />
      <MyWork />
      <FooterPage />
    </div>
  );
}

export default App;
