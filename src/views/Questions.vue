<template>
  <div class="questions-wrapper">
    <p class="question-title">{{ questions[0].question }} 🤔</p>
    <label
      v-for="(answer, key) in questions[0].answers"
      :for="key"
      class="question-container"
      :class="{
        'failed-answer': selectedAnswer === key,
        'correct-answer':
          key === questions[0].correctAnswer && selectedAnswer !== '',
      }"
    >
      <input
        type="radio"
        :id="key"
        class="hidden"
        :value="key"
        @change="answered($event)"
        :disabled="selectedAnswer !== ''"
      />
      {{ answer }}
    </label>
    <div v-if="selectedAnswer !== ''">
      <button class="next-button">Next</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Questions",
  methods: {
    answered(event: any) {
      this.selectedAnswer = event.target.value;
      console.log(this.selectedAnswer);
    },
  },
  data() {
    return {
      index: 0,
      selectedAnswer: "",
      questions: [
        {
          question: "Is React a library or a framework?",
          answers: {
            option1: "I don't know what is React",
            option2: "A library",
            option3: "A framework",
            option4: "A cat",
          },
          correctAnswer: "option2",
        },
        {
          question: "What is the best framework in the world",
          answers: {
            option1: "React",
            option2: "Vue",
            option3: "Angular",
            option4: "Next",
          },
          correctAnswer: "option2",
        },
      ],
    };
  },
});
</script>


<style lang="scss">
@import "../styles/variables.scss";
.questions-wrapper {
  width: 40vw;
  height: 70vh;
  box-shadow: 1px 1px 4px lightgray;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  font-family: $bodyfont;
  color: dimgray;
  .question-title {
    font-weight: 800;
  }
  .question-container {
    width: 20vw;
    border: 1px solid lightgray;
    border-radius: 5px;
    padding: 10px;
    .hidden {
      display: none;
    }
  }
  .next-button {
    color: white;
    background-color: $maincolor;
    border: none;
    border-radius: 5px;
    padding: 10px;
  }
}
.correct-answer {
  background-color: lightgreen;
}
.failed-answer {
  background-color: rgb(245, 131, 131);
}
</style>
