<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import HelloWorld from './components/HelloWorld.vue';
import AppHeader from './components/AppHeader.vue';
import AppRail from './components/AppRail.vue';
import AppFooter from './components/AppFooter.vue';

import { FeatherAppLayout } from "@featherds/app-layout";
</script>

<template>
  <FeatherAppLayout>
    <template v-slot:header>
      <AppHeader />
    </template>
    <template v-slot:rail>
      <AppRail />
    </template>
    
    <div id="main">
      <img alt="Vue logo" src="./assets/logo.png" />
      <HelloWorld msg="Hello Vue 3 + Vite" />
    </div>

    <template v-slot:footer>
      <AppFooter />
    </template>
  </FeatherAppLayout>
  
</template>

<style>
#main {
  text-align: center;
}
</style>
