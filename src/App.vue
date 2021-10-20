<template>
  <div class="wrapper">
    <Header />
    <router-view />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Header from "../src/components/Header.vue";

export default defineComponent({
  name: "App",
  components: {
    Header,
  },
});
</script>


<style lang="scss">
* {
  margin: 0;
  padding: 0;
}
.wrapper {
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
