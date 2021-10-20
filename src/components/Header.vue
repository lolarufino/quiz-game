<template>
  <h1 class="title">Quiz Game</h1>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Header",
});
</script>


<style lang="scss">
@import "../styles/variables.scss";
.title {
  font-family: $titlefont;
  font-size: 48px;
  color: $maincolor;
  text-shadow: 3px 3px white, 5px 5px $maincolor;
  margin-bottom: 30px;
}
</style>