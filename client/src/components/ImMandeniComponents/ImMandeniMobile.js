import { MediumText, SmallText } from "../common/Texts.styled";
import CategoryBoxes from "./CategoryBoxes";
import {
  ImMandeniMobileContainer,
  ImMandeniMobileCover,
  ImMandeniMobileContent,
} from "./ImMandeniMobile.styled";
import MobileMayerText from "./MobileMayerText";

const ImMandeniMobile = () => {
  return (
    <ImMandeniMobileContainer>
      <ImMandeniMobileCover>
        <ImMandeniMobileContent>
          <div className="text">
            <MediumText>I'm Mandeni We Love Mandeni</MediumText>
            <div className="paragraph">
              <SmallText>
                Mandeni is a place that stays in your heart long after you leave
                it. It’s a community built on strength, kindness, and the
                resilience of people who work hard, support each other, and
                never stop striving for better.
              </SmallText>
            </div>
          </div>
          <CategoryBoxes />
          <MobileMayerText />
        </ImMandeniMobileContent>
      </ImMandeniMobileCover>
    </ImMandeniMobileContainer>
  );
};

export default ImMandeniMobile;
