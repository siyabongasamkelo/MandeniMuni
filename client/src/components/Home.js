import { DecorationsContainer, HomeContainer } from "./Home.styled";
import BackgroundImage from "../assets/img/background.jpeg";
const Home = () => {
  return (
    <HomeContainer image={BackgroundImage}>
      <DecorationsContainer>
        <div className="div1">
          <div className="logo"></div>
          <div className="socialmedial-icons"></div>
        </div>
        <div className="div2">
          <div className="hero-section"></div>
          <div className="ourteam"></div>
        </div>
        <div className="div3">
          <div className="deco"></div>
          <div className="deco2"></div>
        </div>
        <div className="div4">
          <div className="deco"></div>
        </div>
        <div className="div5">
          <div className="alert-div"></div>
        </div>
        <div className="div6">
          <div className="action-header"></div>
        </div>
      </DecorationsContainer>
    </HomeContainer>
  );
};

export default Home;
