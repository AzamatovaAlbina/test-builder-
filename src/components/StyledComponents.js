import styled from "styled-components";

export const HomeStyled = styled.div`
  & {
    width: 100%;
    height: 200vh;
    background-color: rgb(240, 240, 240);
  }
  .container-for-tests {
    width: 80%;
    margin: 0 auto;
    height: 200vh;
    /* background-color: green; */
  }
  .form-input {
    width: 80%;
    margin: 0 auto;
    padding-top: 70px;
  }
  .inp-btn-cont {
    width: 80%;
    display: flex;
    gap: 10px;
  }
  .title-input {
    width: 80%;
    height: 50px;
    margin: 0 auto;
    border: none;
    outline: none;
    border-radius: 5px;
    box-shadow: rgba(0, 0, 0, 0.5) 0px 1px 5px;
    font-size: 20px;
    background-color: white;
  }
  .title-input:hover {
    border-bottom: 3px solid #3a3560;
  }
  .button-add-test {
    border: none;
    background-color: rgb(240, 240, 240);
    width: 150px;
    height: 50px;
    background-color: #85b6b1;
    color: white;
    font-size: 17px;
    border-radius: 5px;
  }
  .button-add-test:hover {
    box-shadow: rgba(0, 0, 0, 0.5) 0px 1px 5px;
    background-color: #3a3560;
  }
  .card-box {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
  }
`;
export const CardsStyled = styled.div`
  & {
    display: flex;
  }
  .new-test-card {
    display: flex;
    gap: 5px;
    margin-bottom: 30px;
  }
  .test-title {
    width: 300px;
    height: 130px;
    background-color: white;
    font-size: 30px;
    border-radius: 10px;
    padding: 20px;
    box-shadow: rgba(0, 0, 0, 0.5) 0px 1px 5px;
    border-left: 10px solid #85b6b1;
  }
  .test-title:hover {
    border-left: 10px solid #3a3560;
    box-shadow: rgba(0, 0, 0, 0.5) 0px 1px 10px;
  }
  .delete-btn {
    font-size: 60px;
    color: #3a3560;
    margin-top: 75px;
  }
`;

export const QuestionStyled = styled.div`
  & {
    height: 200vh;
    background-color: #f0f4f7;
    padding: 20px;
  }
  h1 {
    margin: 0;
    display: flex;
    justify-content: center;
    padding: 20px;
  }
  
  .container-for-general-test {
    box-shadow: rgba(0, 0, 0, 0.5) 0px 1px 5px;
    width: 90%;
    margin: 0 auto;
    background-color: #d2dfff;
  }
  .question-containet {
    display: flex;
    width: 70%;
    margin: 0 auto;
    justify-content: center;

    /* height: 200px; */
    /* background-color: red; */
  }
  .input-question {
    width: 80%;
    height: 50px;
    /* margin: 0 auto; */
    border: none;
    outline: none;
    border-bottom: 1.5px solid black;

    font-size: 20px;
    background-color: white;
    padding-left: 20px;
  }
  .input-question:hover {
    background-color: #f0f4f7;
    /* box-shadow: rgba(0, 0, 0, 0.5) 0px 1px 5px; */
  }
  .icons-container {
    display: flex;
    align-items: center;
    margin-left: 15px;
  }
  .icons {
    font-size: 30px;
  }
  .icons:hover {
    font-size: 35px;
    color: #3a3560;
  }
  .icons-for-title {
    display: flex;
    justify-content: end;
    padding: 20px;
    gap: 10px;
  }
  .save-title-input{
    display: flex;
    align-items: flex-end;
    gap:10px
  }
`;

export const OptionStyled = styled.div`
  & {
    padding: 20px;
    width: 55%;
    margin: 0 auto;
    margin-top: 20px;
    background-color: white;
    box-shadow: rgba(0, 0, 0, 0.5) 0px 1px 5px;
    border-radius: 10px;
  }
  .question {
    font-size: 20px;
    font-weight: 550;
  }
  &:hover {
    border-left: 10px solid #3a3560;
  }
  .container-add-option {
    display: flex;
    align-items: center;
  }
  .input-option {
    width: 80%;
    height: 40px;
    /* margin: 0 auto; */
    border: none;
    outline: none;
    border-bottom: 1.5px solid black;
    font-size: 15px;
    background-color: white;
    padding-left: 20px;
  }
  .input-option:hover {
    border-bottom: 2px solid black;
  }
  .icons-option {
    font-size: 25px;
    margin: 5px;
  }
  .icons-for-qw {
    display: flex;
    justify-content: end;
    margin-top: 20px;
  }
  .icons-option-for-save{
    font-size: 30px;
    margin-left: 20px;
  
  } .save-qw-change {
    display: flex;
    align-items: flex-end;
  }
`;
export const AnswerStyled = styled.div`
  & {
    padding: 15px;
    display: flex;
    /* justify-content: space-between; */
  }
  .answer-box{
    display: flex;
    justify-content: space-between;
    width: 100%
  } .input-answer {
    border: none;
    outline: none;
    border-bottom: 1.5px solid black;
    font-size: 15px;
    background-color: white;
  }
  .icon-answer {
    font-size: 20px;
  }
`;