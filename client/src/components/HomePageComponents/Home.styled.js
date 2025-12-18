import styled from "styled-components";

export const HomeContainer = styled.div``;

export const HomeCover = styled.div`
  @media only screen and (min-width: 1014px) {
    height: 100vh;
    width: 100vw;
    background-color: black;

    display: flex;
    justify-content: center;
  }
  @media only screen and (min-width: 1910px) {
    height: 100vh;
    width: 100vw;
    background-color: black;

    display: flex;
    justify-content: center;
  }
`;

export const HomeContent = styled.div`
  @media only screen and (min-width: 1014px) {
    width: 70%;
    height: 100%;
    .content {
      height: 90%;
      width: 100%;

      display: flex;
      justify-content: center;
      align-items: center;
      .blur {
        height: 40%;
        width: 50%;
        background-color: white;
        filter: blur(300px);
      }
      .image {
        position: absolute;
        transform: scale(55%);
        filter: brightness(0.7);

        margin-top: 5%;
        margin-left: -10%;
      }
      .big-text {
        position: absolute;
        width: 70%;
        margin-top: -20%;
      }
      .button {
        width: 18%;
        position: absolute;
        font-size: 22px;
        margin-top: 5%;
      }

      .paragraph-members {
        width: 70%;
        height: 30%;
        position: absolute;
        display: flex;
        justify-content: space-between;

        .text {
          width: 30%;
          margin-top: 30%;
          p {
            font-size: 0.9rem;
          }
        }
        .socialmedia-icons {
          margin-top: 3%;
          width: 30%;
          display: flex;
          justify-content: space-between;
          svg {
            transform: scale(1.5);
            color: white;
            cursor: pointer;

            &:hover {
              fill: #de1a58;
              transition: 0.5s ease-in-out;
            }
          }
        }

        .members {
          margin-top: 25%;
          h3 {
            font-family: "League Spartan";
            font-size: 1.5rem;
            margin-top: 15%;
            margin-left: -15%;
          }
        }
        .avatars {
          display: flex;
        }

        .avatar {
          width: 68px;
          height: 68px;
          border-radius: 50%;
          border: 2px solid white;
          object-fit: cover;
          margin-left: -16px;
        }

        .avatar:first-child {
          margin-left: 0;
        }

        .avatar.more {
          display: flex;
          align-items: center;
          justify-content: center;
          background: #111;
          color: #fff;
          font-size: 14px;
          font-weight: 600;
        }
      }
    }
  }

  @media only screen and (min-width: 1910px) {
    width: 70%;
    height: 100%;
    .content {
      height: 90%;
      width: 100%;

      display: flex;
      justify-content: center;
      align-items: center;
      .blur {
        height: 40%;
        width: 50%;
        background-color: white;
        filter: blur(300px);
      }
      .image {
        position: absolute;
        transform: scale(55%);
        filter: brightness(0.7);

        margin-top: 5%;
        margin-left: -10%;
      }
      .big-text {
        position: absolute;
        width: 70%;
        margin-top: -20%;
      }
      .button {
        width: 18%;
        position: absolute;
        font-size: 22px;
        margin-top: 5%;
      }

      .paragraph-members {
        width: 70%;
        height: 30%;
        position: absolute;
        display: flex;
        justify-content: space-between;

        .text {
          width: 30%;
          margin-top: 30%;
          p {
            font-size: 0.9rem;
          }
        }
        .socialmedia-icons {
          margin-top: 3%;
          width: 30%;
          display: flex;
          justify-content: space-between;
          svg {
            transform: scale(1.5);
            color: white;
            cursor: pointer;

            &:hover {
              fill: #de1a58;
              transition: 0.5s ease-in-out;
            }
          }
        }

        .members {
          margin-top: 25%;
          h3 {
            font-family: "League Spartan";
            font-size: 1.5rem;
            margin-top: 15%;
            margin-left: -15%;
          }
        }
        .avatars {
          display: flex;
        }

        .avatar {
          width: 68px;
          height: 68px;
          border-radius: 50%;
          border: 2px solid white;
          object-fit: cover;
          margin-left: -16px;
        }

        .avatar:first-child {
          margin-left: 0;
        }

        .avatar.more {
          display: flex;
          align-items: center;
          justify-content: center;
          background: #111;
          color: #fff;
          font-size: 14px;
          font-weight: 600;
        }
      }
    }
  }
`;
