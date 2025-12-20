import styled from "styled-components";

export const HeaderContainer = styled.header`
  //------------------------Mobile Screen-----------------------------//
  @media only screen and (min-width: 240px) {
    width: 100%;
    height: 10vh;
    display: flex;
    justify-content: center;
  }

  //--------------------------Desktop-------------------------------//
  @media only screen and (min-width: 1014px) {
    width: 100%;
    height: 10vh;
    display: flex;
    justify-content: center;
  }

  @media only screen and (min-width: 1910px) {
    width: 100%;
    height: 10vh;
    display: flex;
    justify-content: center;
  }
`;

export const HeaderCover = styled.div`
  //------------------------Mobile Screen-----------------------------//
  @media only screen and (min-width: 240px) {
    width: 100%;
    height: 100%;

    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  }

  //--------------------------Desktop-------------------------------//
  @media only screen and (min-width: 1014px) {
    width: 100%;
    height: 100%;

    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  }

  @media only screen and (min-width: 1910px) {
    width: 100%;
    height: 100%;

    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  }
`;

export const Logo = styled.div``;

export const Links = styled.div`
  //------------------------Mobile Screen-----------------------------//
  @media only screen and (min-width: 240px) {
    display: none;
  }

  //--------------------------Desktop-------------------------------//
  @media only screen and (min-width: 1014px) {
    display: block;
    display: flex;
    justify-content: space-between;
    width: 50%;
    a {
      font-family: "League Spartan";
      text-decoration: none;
      color: rgba(255, 255, 255, 0.8);
    }
  }

  @media only screen and (min-width: 1430px) {
    display: flex;
    justify-content: space-between;
    width: 35%;
    a {
      font-family: "League Spartan";
      text-decoration: none;
      color: rgba(255, 255, 255, 0.8);
    }
  }

  @media only screen and (min-width: 1910px) {
    display: flex;
    justify-content: space-between;
    width: 30%;
    a {
      font-family: "League Spartan";
      text-decoration: none;
      color: rgba(255, 255, 255, 0.8);
    }
  }

  @media only screen and (min-width: 3840px) {
    display: flex;
    justify-content: space-between;
    width: 40%;
    a {
      font-family: "League Spartan";
      text-decoration: none;
      color: rgba(255, 255, 255, 0.8);
      font-size: 2rem;
    }
  }
`;

export const Action = styled.div`
  //------------------------Mobile Screen-----------------------------//
  @media only screen and (min-width: 240px) {
    svg {
      display: block;
      fill: white;
      transform: scale(300%);
      margin-top: -200%;
      margin-left: -100%;
    }
    .profile {
      display: none;
    }
  }

  //--------------------------Desktop-------------------------------//
  @media only screen and (min-width: 1014px) {
    svg {
      display: none;
    }
    .profile {
      height: 50px;
      aspect-ratio: 1 / 1;
      border-radius: 50%;
      background-color: white;
    }
  }
  @media only screen and (min-width: 1910px) {
    .profile {
      height: 80px;
      aspect-ratio: 1 / 1;
      border-radius: 50%;
      background-color: white;
    }
  }

  @media only screen and (min-width: 7680px) {
    .profile {
      height: 160px;
      aspect-ratio: 1 / 1;
      border-radius: 50%;
      background-color: white;
    }
  }
`;
