import { createSlice } from "@reduxjs/toolkit";

const testSlice = createSlice({
  name: "test",
  initialState: {
    tests: [],
  },
  reducers: {
    addTest(state, actions) {
      state.tests.push(actions.payload);
    },
    addQuestion(state, actions) {
      const findQuestion = state.tests.find(
        (item) => item.id === actions.payload.newQuestion.testId
      );
      findQuestion.questions.push(actions.payload.newQuestion);
    },
    addOption(state, { payload }) {
      const findTestId = state.tests.find((test) => test.id === payload.testId);
      const findQuationId = findTestId.questions.find(
        (quetion) => quetion.id === payload.quetionId
      );
      findQuationId.options.push(payload);
    },
    removeTest(state, actions) {
      state.tests = state.tests.filter((item) => item.id !== actions.payload);
    },
    removeQuestion({ tests }, { payload: { testId, id } }) {
      const filterTestId = tests.find((test) => test.id === testId);
      filterTestId.questions = filterTestId.questions.filter(
        (item) => item.id !== id
      );
    },
    removeOption(state, { payload: { testId, quetionId, id } }) {
      const filterTestId = state.tests.find((test) => test.id === testId);
      const filterQuestionId = filterTestId.questions.find(
        (question) => question.id === quetionId
      );
      filterQuestionId.options = filterQuestionId.options.filter(
        (option) => option.id !== id
      );
    },
    completedTest(state, actions) {
      const updata = state.tests.find(
        (item) => item.id === actions.payload.testId
      );
      updata.completed = !updata.completed;
    },
    completedQuestion(state, actions) {
      const updataTest = state.tests.find(
        (item) => item.id === actions.payload.testId
      );
      const updataQuestion = updataTest.questions.find(
        (item) => item.id === actions.payload.quetionId
      );
      updataQuestion.completed = !updataQuestion.completed;
    },
    completedOption(state, actions) {
      const updataTest = state.tests.find(
        (item) => item.id === actions.payload.testId
      );
      const updataQuestion = updataTest.questions.find(
        (el) => el.id === actions.payload.quetionId
      );
      const updataOption = updataQuestion.options.find(
        (option) => option.id === actions.payload.id
      );
      updataOption.completed = !updataOption.completed;
    },
    editTest({ tests }, { payload: { id, editValueTest } }) {
      tests.map((test) => {
        if (test.id === id) {
          test.title = editValueTest;
        }
        return test;
      });
    },
    editQuestion(state, { payload }) {
      state.tests.map((test) => {
        if (test.id === payload.newOption.testId) {
          test.questions.map((el) => {
            if (el.id === payload.newOption.quetionId) {
              el.question = payload.inputEditQuestion;
            }
            return el;
          });
        }
        return test;
      });
    },
    editOption(state, { payload: { id, quetionId, testId, inputEditOption } }) {
      console.log(inputEditOption);
      state.tests.map((test) => {
        if (test.id === testId) {
          console.log("test is true");
          test.questions.map((question) => {
            console.log("question is true");
            if (question.id === quetionId) {
              console.log("option is true");
              question.options.map((option) => {
                if (option.id === id) {
                  option.option = inputEditOption;
                }
                return option;
              });
            }
            return question;
          });
        }
        return test;
      });
    },
  },
});
export const {
  addTest,
  addQuestion,
  addOption,
  removeTest,
  removeQuestion,
  removeOption,
  editTest,
  editQuestion,
  editOption,
  completedTest,
  completedQuestion,
  completedOption,
} = testSlice.actions;
export default testSlice;
