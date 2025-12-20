import Header from "../common/Header";
import {
  MobileHomeContainer,
  MobileHomeContent,
  MobileHomeCover,
} from "./MobileHome.styled";
import newImage from "../../assets/img/new.png";
import { BigText } from "../common/Texts.styled";
import { Button } from "../common/Button.styled";

const MobileHome = () => {
  return (
    <MobileHomeContainer>
      <MobileHomeCover>
        <MobileHomeContent>
          <Header />
          <div className="content">
            <div className="blur"></div>

            <div className="image">
              <img src={newImage} alt="person" />
            </div>
            <div className="text">
              <BigText>Mandeni Yethu Youth Empowerment</BigText>
            </div>
            <div className="button">
              <Button>Get Empowered</Button>
            </div>
          </div>
        </MobileHomeContent>
      </MobileHomeCover>
    </MobileHomeContainer>
  );
};

export default MobileHome;
