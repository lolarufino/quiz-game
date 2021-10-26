<template>
  <div>
    <div
      v-if="index < questions.length && !this.isLoading"
      class="questions-wrapper"
    >
      <p class="question-title">
        {{ decodeURIComponent(questions[index].question) }} 🤔
      </p>
      <label
        v-for="(answer, key) in questions[index].answers"
        :for="key"
        class="question-container"
        :class="{
          'pointer-class': selectedAnswer === '',

          'failed-answer': selectedAnswer === key,

          'correct-answer':
            key === questions[index].correctAnswer && selectedAnswer !== '',
        }"
      >
        <input
          type="radio"
          :id="key"
          class="hidden"
          v-model="selectedAnswer"
          :value="key"
          @change="answered($event)"
          :disabled="selectedAnswer !== ''"
          data-test="answer"
        />
        {{ decodeURIComponent(answer) }}
      </label>
      <button
        v-if="selectedAnswer !== '' && index !== this.questions.length - 1"
        class="button"
        @click="nextQuestion"
      >
        Next
      </button>
      <button
        v-else-if="selectedAnswer !== '' && index === this.questions.length - 1"
        class="button"
        @click="showResults"
      >
        Results
      </button>
    </div>
    <div v-else-if="this.isLoading">
      <img
        src="https://i.ibb.co/PFFQFMy/animation-200-kv7urt46.gif"
        alt="Loading gif"
      />
    </div>
    <div v-else class="questions-wrapper">
      <div class="questions-container results-container">
        <p class="question-title">Results</p>
        <div>Correct answers: {{ correctAnswers }}</div>
        <div>Wrong answers: {{ wrongAnswers }}</div>
        <button class="button" @click="playAgain">Play again</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapState, mapActions } from "vuex";

export default defineComponent({
  name: "Questions",
  computed: {
    ...mapState(["questions", "isLoading"]),
  },
  methods: {
    ...mapActions(["fetchQuestionsFromApi"]),
    answered(event: any) {
      this.selectedAnswer = event.target.value;
      if (this.selectedAnswer === this.questions[this.index].correctAnswer) {
        this.correctAnswers++;
      } else {
        this.wrongAnswers++;
      }
    },
    nextQuestion() {
      this.index++;
      this.selectedAnswer = "";
    },
    showResults() {
      this.index++;
    },
    playAgain() {
      this.index = 0;
      this.selectedAnswer = "";
      this.correctAnswers = 0;
      this.wrongAnswers = 0;
      this.$router.push({ path: "/" });
    },
  },
  data() {
    return {
      index: 0,
      selectedAnswer: "",
      correctAnswers: 0,
      wrongAnswers: 0,
    };
  },
  mounted() {
    this.fetchQuestionsFromApi();
  },
});
</script>


<style lang="scss">
@import "../styles/variables.scss";
@import "../styles/extends.scss";
.questions-wrapper {
  width: 40vw;
  height: 60vh;
  box-shadow: 1px 1px 4px lightgray;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  font-family: $bodyfont;
  color: dimgray;
  padding: 40px;
  .question-title {
    font-weight: 800;
  }
  .question-container {
    padding: 40px;
    width: 20vw;
    border: 1px solid lightgray;
    border-radius: 5px;
    padding: 15px;
    .hidden {
      display: none;
    }
  }
  .button {
    @extend %button-pattern;
    font-size: 16px;
  }
}
.pointer-class {
  cursor: pointer;
  &:hover {
    background-color: rgb(231, 231, 231);
  }
}
.failed-answer {
  background-color: rgb(245, 131, 131);
}
.correct-answer {
  background-color: lightgreen;
}
.results-container {
  text-align: center;
  height: 30vh;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
}
@media screen and (max-width: $responsive) {
  .questions-wrapper {
    height: fit-content;
    width: 62vw;
    .question-title {
      margin-bottom: 35px;
    }
    .question-container {
      margin-bottom: 10px;
      width: fit-content;
    }
  }
}
</style>
