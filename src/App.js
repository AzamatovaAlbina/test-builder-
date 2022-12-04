import { HashRouter, Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import "./App.css";
import Test from "./components/Test";
import Home from "./pages/Home";
import Question from "./components/Question";
import HomePage from "./components/home-page/HomePage";

function App() {
  const { tests } = useSelector((state) => state.tests);
  console.log(tests);
  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<Home />} />
          {tests.map((test) => (
            <Route
              path={`/${test.title}`}
              element={<Question key={test.id} {...test} />}
            />
          ))}
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
