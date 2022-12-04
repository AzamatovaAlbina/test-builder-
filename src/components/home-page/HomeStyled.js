import styled from "styled-components";
export const HomeStyled = styled.div`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  & {
    max-width: 100%;
    box-sizing: border-box;
    margin: 0;
    background-color: #d2dfff;
  }
  & .home-container {
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: space-between;
  }
  .text {
    display: flex;
    flex-direction: column;
    position: absolute;
    z-index: 1;
    top: 100px;
    left: 100px;
    width: 60%;
  }
  .main-text {
    font-weight: 900;
    font-size: 70px;
    margin: 0;
  }
  .text-buttom {
    font-size: 40px;
    width: 70%;
  }
  .img {
    position: absolute;
    top: 100px;
    right: 20px;
    z-index: 0;
  }
  .btn {
    width: 350px;
    height: 50px;
    border-radius: 10px;
    border: none;
    background-color: #3a3560;
    color: white;
    font-size: 20px;
    position: relative;
    top: 30px;
    left: 100px;
  }
  .btn:hover {
    box-shadow: rgba(0, 0, 0, 0.5) 0px 5px 50px;
    background-color: #838392;
    color: black;
  }
`;
