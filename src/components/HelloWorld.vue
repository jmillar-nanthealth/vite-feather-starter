<script setup lang="ts">
import { FeatherButton } from "@featherds/button";
import { ref } from "vue";

defineProps({
  msg: String,
});

const count = ref(0);
const counter1 = ref(0);
const counter2 = ref(0);
</script>

<template>
  <h1>{{ msg }}</h1>

  <p>
    Recommended IDE setup:
    <a href="https://code.visualstudio.com/" target="_blank">VSCode</a>
    +
    <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
  </p>

  <p>
    <a href="https://vitejs.dev/guide/features.html" target="_blank">
      Vite Documentation
    </a>
    |
    <a href="https://v3.vuejs.org/" target="_blank">Vue 3 Documentation</a>
  </p>

  <button type="button" @click="count++">count is: {{ count }}</button>
  <p>
    Edit
    <code>components/HelloWorld.vue</code> to test hot module replacement.
  </p>

  <section class="testing" id="testing1">
    <button class="no-op">This does nothing</button>
    <button class="action" @click="counter1++">Add one</button>
    <span class="result1">{{ counter1 }}</span>
  </section>
  <section class="testing" id="testing2">
    <FeatherButton class="no-op" text>This does nothing</FeatherButton>
    <FeatherButton class="action" primary @click="counter2++"
      >Add one</FeatherButton
    >
    <span class="result2">{{ counter2 }}</span>
  </section>
</template>

<style lang="scss" scoped>
.testing {
  button {
    margin-left: 260px;
  }
  span {
    display: block;
    margin: 20px;
    margin-bottom: 40px;
  }
}
</style>
