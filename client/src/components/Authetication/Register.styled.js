import styled from "styled-components";

export const RegisterContainer = styled.div`
  overflow: hidden;
`;

export const RegisterCover = styled.div`
  height: 100vh;
  width: 100vw;
`;

export const RegisterContent = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
`;

export const FormContent = styled.div`
  @media only screen and (min-width: 1910px) {
    height: 100%;
    width: 50%;
    background-color: white;

    display: flex;
    justify-content: center;
    align-items: center;
    .cover {
      height: 80%;
      width: 60%;
      h3 {
        color: black;
        font-family: "League Spartan";
        text-align: left;
        font-size: 4rem;
      }
      p {
        color: black;
      }
      .form {
        height: 100%;
        width: 100%;

        input {
          height: 55px;
          border-radius: 10px;
          width: 100%;
          margin-top: 4%;
          border: 1px solid rgba(0, 0, 0, 0.7);
          padding-left: 20px;
        }

        .name {
          width: 100%;
          display: flex;
          justify-content: space-between;
          div {
            width: 48%;
            input {
              width: 100%;
            }
          }
        }

        .terms {
          margin-top: 5%;
          display: flex;
          .check {
            width: 10%;
            margin-left: -2%;
          }
          .text {
            width: 90%;
            font-size: 0.4rem;
            margin-top: 1%;
          }
          input {
            height: 30px;
          }
        }

        button {
          border-radius: 10px;
          margin-top: 2%;
          background-color: #de1a58;
          color: white;
          height: 55px;
          width: 100%;
          border: none;
          font-weight: bold;
        }

        .divider {
          display: flex;
          align-items: center;
          text-align: center;
          color: #888;
          margin: 20px 0;
        }

        .divider::before,
        .divider::after {
          content: "";
          flex: 1;
          border-bottom: 1px solid #e0e0e0;
        }

        .divider:not(:empty)::before {
          margin-right: 10px;
        }

        .divider:not(:empty)::after {
          margin-left: 10px;
        }

        .alternate-logins {
          display: flex;
          justify-content: space-between;
          button {
            width: 48%;
            svg {
              margin-left: -10%;
              margin-right: 5%;
              transform: scale(150%);
            }
          }
        }
      }
    }
  }
`;

export const MandeniYethuInfoContent = styled.div`
  @media only screen and (min-width: 1910px) {
    height: 100%;
    width: 50%;
    background-color: white;
    background-color: blue;
    display: flex;
    justify-content: center;
    align-items: center;
    .cover {
      width: 70%;
      height: 80%;
      background-color: red;
    }
  }
`;
