import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { CardsStyled } from "./StyledComponents";
import{MdDeleteForever} from "react-icons/md"
const Cards = ({ title, id, removeTest, editTest, changeNavigate }) => {
  const dispatch = useDispatch();
//   useEffect(() => {
//     changeNavigate(title);
//   }, [title, changeNavigate]);
  return (
    <CardsStyled>
      <div className="new-test-card">
        <div className="test-title">
          <span>
            Тест по <NavLink to={`/${title}`}>{title}</NavLink>
          </span>
        </div>

        <MdDeleteForever className="delete-btn" onClick={() => dispatch(removeTest(id))}/>
        {/* <button onClick={() => dispatch(editTest(id))}>edit test</button> */}
      </div>
    </CardsStyled>
  );
};

export default Cards;
