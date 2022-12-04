// import React, { useState } from "react";
// import { useDispatch } from "react-redux/es/exports";
// import { addTest, removeTest } from "../store/reducer/testSlice";
// import { useSelector } from "react-redux/es/hooks/useSelector";
// import Question from "./Question";
// import { toast } from "react-toastify";

// const Test = () => {
//   const [value, setValue] = useState("");
//   const { tests } = useSelector((state) => state.tests);
//   console.log(tests);
//   const dispatch = useDispatch();
//   const newTests = {
//     id: Math.random().toString(),
//     title: value,
//     questions: [],
//     completed:true
//   };

//   // const addTestHandler = (e) => {
//   //   e.preventDefault();
//   //   if (value.trim().length > 0) {
//   //     dispatch(addTest(newTests), setValue(""));
//   //   } else{
//   //     toast.error("Напишите название темы!!!")
//   //   }
//   // };

//   return (
//     <div>
//       {/* <form onSubmit={addTestHandler}>
//         <input
//           type="text"
//           value={value}
//           onChange={(e) => setValue(e.target.value)}
//         />
//         <button type="submit">add</button>
//       </form> */}
//       {/* {tests.map((test) => (
//         <Question key={test.id} {...test} />
//       ))}
//       <button>Save</button>
//     </div> */}
//   );
// };

// export default Test;
