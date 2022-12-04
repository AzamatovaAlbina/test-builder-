import React, { useState } from "react";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import {
  addOption,
  completedQuestion,
  editQuestion,
  removeQuestion,
} from "../store/reducer/testSlice";
import Answer from "./Answer";
import { toast } from "react-toastify";
import { OptionStyled } from "./StyledComponents";
import { VscAdd } from "react-icons/vsc";
import { MdOutlineEdit, MdDeleteForever, MdDownloadDone } from "react-icons/md";

const Option = ({ testId, id, question, options, completed }) => {
  const [inputOption, setInputOption] = useState("");
  const [inputEditQuestion, setInputEditQuestion] = useState("");
  const dispatch = useDispatch();
  const newOption = {
    id: Math.random().toString(),
    option: inputOption,
    quetionId: id,
    testId: testId,
    completed: completed,
  };

  const addOptionHandler = () => {
    if (inputOption.trim().length > 0) {
      dispatch(addOption(newOption), setInputOption(""));
    } else {
      toast.error("Напишите варианты ответов!!!");
    }
  };
  const removeQuestionHandler = () => {
    dispatch(removeQuestion({ testId, id }));
  };
  const completedHandler = () => {
    dispatch(completedQuestion(newOption));
  };
  const saveEditQuestionHandler = () => {
    dispatch(
      editQuestion({ newOption, inputEditQuestion }),
      console.log("test")
    );
    completedHandler();
  };

  return (
    <OptionStyled>
      <div></div>
      {completed ? (
        <>
          <p className="question">{question}</p>
          <div className="container-add-option">
            <input
              className="input-option"
              value={inputOption}
              onChange={(e) => setInputOption(e.target.value)}
              placeholder="Напишите варианты ответов..."
            />
            <VscAdd className="icons-option" onClick={addOptionHandler} />
          </div>
          {options.map((option) => (
            <Answer key={option.id} {...option} />
          ))}
          <div className="icons-for-qw">
            <MdOutlineEdit
              className="icons-option"
              onClick={completedHandler}
            />

            <MdDeleteForever
              className="icons-option"
              onClick={removeQuestionHandler}
            />
          </div>
        </>
      ) : (
        <div className="save-qw-change">
          <input
            className="input-option"
            value={inputEditQuestion}
            onChange={(e) => setInputEditQuestion(e.target.value)}
            placeholder="Изменение вопроса..."
          />
          <MdDownloadDone
            className="icons-option-for-save"
            onClick={saveEditQuestionHandler}
          />
        </div>
      )}
    </OptionStyled>
  );
};

export default Option;
