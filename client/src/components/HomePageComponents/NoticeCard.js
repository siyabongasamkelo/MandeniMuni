import React from "react";
import {
  ArrowDiv,
  MessageDiv,
  NoticeCardContainer,
  NoticeCardCover,
} from "./NoticeCard.styled";
import { SmallText } from "../common/Texts.styled";
import { CaretUpFill, CaretDownFill } from "react-bootstrap-icons";

const NoticeCard = () => {
  return (
    <NoticeCardContainer>
      <NoticeCardCover>
        <ArrowDiv>
          <div>
            <CaretUpFill />
          </div>
        </ArrowDiv>
        <MessageDiv>
          <div>
            <SmallText>
              Mandeni will experience scheduled load shedding in the coming
              days. Residents are advised to prepare accordingly and stay
              updated with the latest schedule. We apologize for any
              inconvenience.
            </SmallText>
          </div>
        </MessageDiv>
        <ArrowDiv>
          <div>
            <CaretDownFill />
          </div>
        </ArrowDiv>
      </NoticeCardCover>
    </NoticeCardContainer>
  );
};

export default NoticeCard;
