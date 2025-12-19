import Header from "../common/Header";
import { HomeContainer, HomeContent, HomeCover } from "./Home.styled";
import newphoto from "../../assets/img/new.png";
import { BigText, MediumText, SmallText } from "../common/Texts.styled";
import { Button } from "../common/Button.styled";
import {
  Facebook,
  Instagram,
  Twitter,
  Whatsapp,
  Youtube,
} from "react-bootstrap-icons";

const Home = () => {
  return (
    <HomeContainer>
      <HomeCover>
        <HomeContent>
          <Header />
          <div className="content">
            <div className="blur"></div>
            <div className="image">
              <img src={newphoto} alt="mandeni" />
            </div>

            <div className="big-text">
              <BigText>Mandeni Yethu Youth Empowerment</BigText>
            </div>

            <div className="button">
              <Button>Get Empowered</Button>
            </div>

            <div className="paragraph-members">
              <div className="paragraph">
                <div className="text">
                  <SmallText>
                    Mandeni is a community built on strength, resilience, and
                    unity. Every day, our people rise with purpose — working
                    hard, supporting one another, and shaping a future filled
                    with opportunity. From our townships to our factories and
                    farmlands, Mandeni stands as a place of courage, dignity,
                    and hope.
                  </SmallText>
                </div>
                <div className="socialmedia-icons">
                  <Facebook />
                  <Whatsapp />
                  <Twitter />
                  <Youtube />
                  <Instagram />
                </div>
              </div>
              <div className="members">
                <div class="avatars">
                  <img
                    class="avatar"
                    src="https://i.pravatar.cc/100?img=1"
                    alt="User"
                  />
                  <img
                    class="avatar"
                    src="https://i.pravatar.cc/100?img=2"
                    alt="User"
                  />
                  <img
                    class="avatar"
                    src="https://i.pravatar.cc/100?img=3"
                    alt="User"
                  />
                  <img
                    class="avatar"
                    src="https://i.pravatar.cc/100?img=4"
                    alt="User"
                  />
                  <div class="avatar more">+99</div>
                </div>
                <MediumText>
                  Join The <br></br>Community
                </MediumText>
              </div>
            </div>
          </div>
        </HomeContent>
      </HomeCover>
    </HomeContainer>
  );
};

export default Home;
