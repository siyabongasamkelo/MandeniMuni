import React from "react";
import {
  HeaderAndIntro,
  ImMandeniContainer,
  ImMandeniContent,
  ImMandeniCover,
} from "./ImMandeni.styled";
import { MediumText, SmallText } from "../common/Texts.styled";
import CategoryBoxes from "./CategoryBoxes";
import MayerText from "./MayerText";
import MayerImage from "./MayerImage";

const ImMandeni = () => {
  return (
    <ImMandeniContainer>
      <ImMandeniCover>
        <ImMandeniContent>
          <HeaderAndIntro>
            <div className="intro-header">
              <div className="left">
                <div className="up"></div>
                <div className="down"></div>
              </div>
              <div className="center">
                <MediumText>I'm Mandeni WE Love Mandeni</MediumText>
                <div className="para">
                  <SmallText>
                    Mandeni is a place that stays in your heart long after you
                    leave it. It’s a community built on strength, kindness, and
                    the resilience of people who work hard, support each other,
                    and never stop striving for better.
                  </SmallText>
                </div>
              </div>
              <div className="right"></div>
            </div>
          </HeaderAndIntro>
          <CategoryBoxes />
          <MayerText />
          <MayerImage />
        </ImMandeniContent>
      </ImMandeniCover>
    </ImMandeniContainer>
  );
};

export default ImMandeni;
