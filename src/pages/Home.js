import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTest, editTest, removeTest } from "../store/reducer/testSlice";
import { toast } from "react-toastify";
import { useNavigate, NavLink } from "react-router-dom";
import Cards from "../components/Cards";
import { HomeStyled } from "../components/StyledComponents";
const Home = () => {
  const { tests } = useSelector((state) => state.tests);
  const [value, setValue] = useState("");
  const [navigateValue, setNavigateValue] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const newTests = {
    id: Math.random().toString(),
    title: value,
    questions: [],
    completed: true,
    currentId: null,
  };

  const addTestHandler = (e) => {
    e.preventDefault();
    if (value.trim().length > 0) {
      dispatch(addTest(newTests), setValue(""));
      // navigate(`/${navigateValue}`);
    } else {
      toast.error("Напишите название темы!!!");
    }
  };

  const changeNavigate = (item) => {
    setNavigateValue(item);
    navigate(`/${item}`);
  };

  return (
    <HomeStyled>
      <div className="container-for-tests">
        <form className="form-input" onSubmit={addTestHandler}>
          <h1>Создание нового теста</h1>
          <div className="inp-btn-cont">
            <input
              className="title-input"
              type="text"
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
            <button className="button-add-test" type="submit">
              Создать тест
            </button>
          </div>
        </form>
        <h1>Тесты</h1>
        <div className="card-box">
          {tests.map((item) => {
            return (
              <Cards
                {...item}
                removeTest={removeTest}
                changeNavigate={changeNavigate}
              />
            );
          })}
        </div>
      </div>
    </HomeStyled>
  );
};

export default Home;
