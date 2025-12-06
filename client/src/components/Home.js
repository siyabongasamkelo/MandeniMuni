import { DecorationsContainer, HomeContainer } from "./Home.styled";
import BackgroundImage from "../assets/img/background.jpeg";
import Header from "./common/Header";
import { BigText, SmallText } from "./Texts.styled";
import { Button } from "./common/Button.styled";
const Home = () => {
  return (
    <HomeContainer image={BackgroundImage}>
      <DecorationsContainer>
        {/* because of the complexity of the interface i used position : absolute on the header */}
        {/* to make it float above the home screen */}
        <Header />
        <div className="div1">
          <div className="logo"></div>
          <div className="socialmedial-icons"></div>
        </div>
        <div className="div2">
          <div className="hero-section">
            <BigText>Mandeni Municipality</BigText>
            <div>
              <SmallText>
                Mandeni is a community built on strength, resilience, and unity.
                Every day, our people rise with purpose — working hard,
                supporting one another, and shaping a future filled with
                opportunity. From our townships to our factories and farmlands,
                Mandeni stands as a place of courage, dignity, and hope.
              </SmallText>
            </div>
            <Button>Contact Us</Button>
          </div>
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
