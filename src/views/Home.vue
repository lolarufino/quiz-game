<template>
  <div class="main-wrapper">
    <p class="text">
      Here you have a quiz game to practice some web developing questions. Good
      luck! 🍀
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
@import "../styles/extends.scss";
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
    @extend %button-pattern;
  }
}
</style>