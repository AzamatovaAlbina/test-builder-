import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  clickCheckbox,
  completedOption,
  editOption,
  removeOption,
} from "../store/reducer/testSlice";
import { MdDownloadDone, MdOutlineEdit, MdDeleteForever } from "react-icons/md";
import { AnswerStyled } from "./StyledComponents";

const Answer = ({ option, id, quetionId, testId, completed, currentId }) => {
  const [inputEditOption, setInputEditOption] = useState("");
  console.log(option, "option");
  const dispatch = useDispatch();

  const removeOptionHandler = () => {
    dispatch(removeOption({ testId, id, quetionId }));
  };
  const completedHandler = () => {
    dispatch(completedOption({ id, quetionId, testId }));
  };
  const saveEditOptionHandler = () => {
    dispatch(editOption({ id, quetionId, testId, inputEditOption }));
    completedHandler();
  };
  const clickCheckboxHandler=()=>{
    dispatch(clickCheckbox({ id, quetionId, testId, currentId }));
  }

  return (
    <AnswerStyled>
      {completed ? (
        <div className="answer-box">
          <div>
            <input type="radio" name="answer" />
            <label form="answer">{option}</label>
          </div>
          <div>
            <MdOutlineEdit onClick={completedHandler} className="icon-answer" />
            <MdDeleteForever
              onClick={removeOptionHandler}
              className="icon-answer"
            />
          </div>
        </div>
      ) : (
        <>
          <input
            className="input-answer"
            value={inputEditOption}
            onChange={(e) => setInputEditOption(e.target.value)}
            placeholder="Изменение варианта ответов..."
          />
          <MdDownloadDone
            onClick={saveEditOptionHandler}
            className="icon-answer"
          />
        </>
      )}
    </AnswerStyled>
  );
};

export default Answer;
