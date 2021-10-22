import { createStore } from 'vuex';
import axios from 'axios';

export default createStore({
  state: {
    questions: [
    ]
  },
  mutations: {
    getQuestions(state, payload){
      const questionsArray = payload.map((question: any) => { return {question: question.question, answers: {...question.incorrect_answers, correct: question.correct_answer}, correctAnswer: "correct"}});
      state.questions = questionsArray;
    }
  },
  actions: {
async fetchQuestionsFromApi ({commit}) {
  const {data}:any = await axios.get('https://opentdb.com/api.php?amount=10&category=18&difficulty=easy&type=multiple&encode=url3986')
  commit('getQuestions', data.results)
}
  },
  modules: {
  },
});
