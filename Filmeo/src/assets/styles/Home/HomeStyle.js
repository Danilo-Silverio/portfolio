import styled from "styled-components";

export const Page = styled.div`
  min-height: 100vh;
  background-color: #42288c;
  overflow-x: hidden;
  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    img {
      height: 40%;
      margin-top: 5%;
    }
  }
  section:nth-child(1) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    height: fit-content;
    width: 100%;
    button {
      height: 5rem;
      width: 15rem;
      border: none;
      border-radius: 30px;
      margin: 5%;
      font-size: 1.4rem;
      font-weight: 700;
      color: #fff;
      background-color: #38d44a;
      cursor: pointer;
      transition: all 0.3s ease;
    }
    button:hover {
      background-color: #187a238c;
    }
    button:active {
    }

  }
  section:nth-child(2) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    background-color: #5c3cb8;
    img {
      height: 700px;
    }
    div {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 90%;
      gap: 3%;
      img {
        height: 5rem;
      }
      h3 {
        font-size: 4rem;
        font-weight: 900;
        color: #fff;
        margin-top: 10%;
      }
      p {
        font-size: 1.3rem;
        font-weight: 500;
        margin-bottom: 100px;
        color: #fff;
      }
    }
  }
  @media screen and (max-width: 900px) {
    section:nth-child(1) {
      button {
        height: 4rem;
        width: 12rem;
        margin-bottom: 3%;
      }
    }
    section:nth-child(2) {
      img {
        height: 320px;
      }
      div {
        width: 100%;
        gap: 1%;
        text-align: center;
        img {
          height: 2rem;
          margin-right: 2%;
        }
        h3 {
          font-size: 1rem;
        }
        p {
          font-size: 0.6rem;
        }
      }
    }
  }
`;
export const Text = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: fit-content;
  width: 60%;
  margin-top: 2%;
  p {
    font-size: 1.3rem;
    font-weight: 400;
    color: #988bc0;
  }
  h1 {
    font-size: 4rem;
    font-weight: 400;
    color: #fff;
  }
  span {
    font-size: 4.7rem;
    font-weight: 900;
  }
  h2 {
    font-size: 1.4rem;
    font-weight: 400;
    color: #988bc0;
  }
  @media screen and (max-width: 900px) {
    width: 80%;
    p {
      font-size: 1rem;
    }
    h1 {
      font-size: 1.8rem;
    }
    span {
      font-size: 2rem;
    }
    h2 {
      font-size: 1.2rem;
    }
  }
`;
