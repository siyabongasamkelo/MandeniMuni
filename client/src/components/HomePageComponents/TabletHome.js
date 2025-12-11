import React from "react";
import {
  HeroContainer,
  LowerContainer,
  TabletContent,
  TabletHomeContainer,
  TabletHomeCover,
  UpperContainer,
} from "./TabletHome.styled";
import BackgroundImage from "../../assets/img/background.jpeg";
import Header from "../common/Header";
import { BigText, SmallText } from "../common/Texts.styled";
import { Button } from "../common/Button.styled";
import { Facebook, Instagram, Twitter, Whatsapp } from "react-bootstrap-icons";

const TabletHome = () => {
  return (
    <TabletHomeContainer>
      <TabletHomeCover image={BackgroundImage}>
        <TabletContent>
          <Header />
          <UpperContainer>
            <div className="col1">
              <div></div>
            </div>
            <div className="col2">
              <div></div>
            </div>
          </UpperContainer>

          <HeroContainer>
            <div className="hero-cover">
              <BigText>Mandeni Municipality</BigText>
              <div className="paragraph">
                <div>
                  <SmallText>
                    Mandeni is a community built on strength, resilience, and
                    unity. Every day, our people rise with purpose — working
                    hard, supporting one another, and shaping a future filled
                    with opportunity. From our townships to our factories and
                    farmlands, Mandeni stands as a place of courage, dignity,
                    and hope.
                  </SmallText>
                </div>
              </div>
              <Button>Contact Us</Button>
              <div className="socialmedia-icons">
                <Facebook />
                <Whatsapp />
                <Instagram />
                <Twitter />
              </div>
            </div>
          </HeroContainer>
          <LowerContainer>
            <div className="left">
              <div className="up">
                <div></div>
              </div>
              <div className="down">
                <div></div>
              </div>
            </div>
            <div className="right">
              <div className="up">
                <div></div>
              </div>
              <div className="down">
                <div></div>
              </div>
            </div>
          </LowerContainer>
        </TabletContent>
      </TabletHomeCover>
    </TabletHomeContainer>
  );
};

export default TabletHome;
