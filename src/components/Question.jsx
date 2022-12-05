import React, { useState } from "react";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import {
  addQuestion,
  completedTest,
  editTest,
  removeTest,
} from "../store/reducer/testSlice";
import Option from "./Option";
import { toast } from "react-toastify";
import { NavLink, useNavigate } from "react-router-dom";
import { QuestionStyled } from "./StyledComponents";
import { VscAdd } from "react-icons/vsc";
import { MdDeleteForever, MdOutlineEdit, MdDownloadDone } from "react-icons/md";
import {CiSaveDown2} from "react-icons/ci"

const Question = ({ title, id, questions, completed }) => {
  const [inputQuestion, setInputQuestion] = useState("");
  const [editValueTest, setEditValueTest] = useState("");
  const dispatch = useDispatch();
  const newQuestion = {
    question: inputQuestion,
    testId: id,
    id: Date.now().toString(),
    options: [],
    completed: completed,
    currentId: id,
  };

  const navigate = useNavigate();

  const addQuestionHandler = () => {
    if (inputQuestion.trim().length > 0) {
      dispatch(addQuestion({ newQuestion }), setInputQuestion(""));
    } else {
      toast.error("Напишите вопрос!!!");
    }
  };
  const removeTestHandler = () => {
    dispatch(removeTest(id));
    navigate("/home");
  };
  const completedHandler = () => {
    dispatch(completedTest(newQuestion));
  };
  const saveEditTestHandler = () => {
    dispatch(editTest({ id, editValueTest }));
    console.log(title);
    navigate(`/home`);
    completedHandler();
  };
  return (
    <QuestionStyled className="question">
      <div>
        {completed ? (
          <div className="container-for-general-test">
            <h1>{title}</h1>
            <div className="question-containet">
              <input
                className="input-question"
                value={inputQuestion}
                onChange={(e) => setInputQuestion(e.target.value)}
                placeholder="Напишите вопрос теста..."
              />
              <div className="icons-container">
                <VscAdd onClick={addQuestionHandler} className="icons" />
              </div>
            </div>
            {questions.map((question) => (
              <Option key={question.id} {...question} />
            ))}
            <div className="icons-for-title">
              <MdOutlineEdit onClick={completedHandler} className="icons" />

              <MdDeleteForever onClick={removeTestHandler} className="icons" />
              <div>
                <NavLink to={`/home`}>
                  <CiSaveDown2 className="icons" />
                </NavLink>
              </div>
            </div>
          </div>
        ) : (
          <div className="save-title-input">
            <input
              className="input-question"
              value={editValueTest}
              onChange={(e) => setEditValueTest(e.target.value)}
              placeholder="Изменение темы..."
            />
            <MdDownloadDone className="icons" onClick={saveEditTestHandler} />
          </div>
        )}
      </div>
    </QuestionStyled>
  );
};

export default Question;
