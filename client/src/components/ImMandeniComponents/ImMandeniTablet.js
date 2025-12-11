import { MediumText, SmallText } from "../common/Texts.styled";
import ImMandeniDecorations from "./ImMandeniDecorations";
import {
  ImMandeniTabletContainer,
  ImMandeniTabletContent,
  ImMandeniTabletCover,
} from "./ImMandeniTablet.styled";
import TabletMayorText from "./TabletMayorText";

const ImMandeniTablet = () => {
  return (
    <ImMandeniTabletContainer>
      <ImMandeniTabletCover>
        <ImMandeniTabletContent>
          <div className="text">
            <MediumText>I'M MANDENI WE LOVE MANDENI</MediumText>
            <div className="paragraph">
              <SmallText>
                Mandeni is a place that stays in your heart long after you leave
                it. It’s a community built on strength, kindness, and the
                resilience of people who work hard, support each other, and
                never stop striving for better.
              </SmallText>
            </div>
          </div>
          <TabletMayorText />
          <ImMandeniDecorations />
        </ImMandeniTabletContent>
      </ImMandeniTabletCover>
    </ImMandeniTabletContainer>
  );
};

export default ImMandeniTablet;
