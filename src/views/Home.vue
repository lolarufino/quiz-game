<template>
  <div class="main-wrapper">
    <Header />
    <p class="text">
      Here you have a quiz game to practice some coding interview questions.
      Good luck! 🍀
    </p>
    <img
      src="https://i.ibb.co/f9zG1Jm/animation-640-kuxzpiiebig.gif"
      alt="Person thinking gif"
    />
    <router-link to="/questions"
      ><button class="button">Let's play!</button></router-link
    >
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Home",
});
</script>

<style lang="scss">
@import "../styles/variables.scss";
.main-wrapper {
  height: 70vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  .text {
    font-family: $bodyfont;
    font-size: 16px;
    color: darkgray;
  }
  .button {
    padding: 10px;
    font-size: 24px;
    font-family: $titlefont;
    background-color: $maincolor;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: all 300ms ease-in-out;
    &:hover {
      transform: translate(-4px, -4px);
      box-shadow: 2px 2px white, 4px 4px $maincolor;
    }
  }
}
</style>