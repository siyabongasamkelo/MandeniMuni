import { DecorationsContainer, HomeContainer, HomeCover } from "./Home.styled";
import BackgroundImage from "../../assets/img/background.jpeg";
import Header from "../common/Header";
import Div1 from "./Div1";
import Div2 from "./Div2";
import Div3 from "./Div3";
import Div4 from "./Div4";
import Div5 from "./Div5";
import Div6 from "./Div6";

const Home = () => {
  return (
    <HomeContainer>
      <HomeCover image={BackgroundImage}>
        <DecorationsContainer>
          {/* because of the complexity of the interface i used position : absolute on the header */}
          {/* to make it float above the home screen */}
          <Header />
          {/* this whole interface is devided into 6 divs vertically */}
          {/* each row contains it own components inside together they form this whole page */}

          <Div1 />
          <Div2 />
          <Div3 />
          <Div4 />
          <Div5 />
          <Div6 />
        </DecorationsContainer>
      </HomeCover>
    </HomeContainer>
  );
};

export default Home;
