<template>
  <FeatherAppBar :labels="labels" :content="content">
    <template v-slot:left>
      <FeatherAppBarLink :icon="support" title="Support" url="#" />
    </template>
    <template v-slot:center>
      <FeatherAppBarLink :icon="support" title="Support" url="#" />
    </template>
    <template v-slot:right>
      <FeatherAppBarLink :icon="support" title="Support" url="#" />
    </template>
  </FeatherAppBar>
</template>
<script lang="ts">
import { FeatherAppBar, FeatherAppBarLink } from "@featherds/app-bar";
import Support from "@featherds/icon/action/Help";
import { defineComponent } from "vue";
export default defineComponent({
  data() {
    return {
      labels: {
        skip: "Skip to main content",
      },
      content: "main",
      support: Support,
    };
  },
  components: {
    FeatherAppBar,
    FeatherAppBarLink,
  },
});
</script>
<style lang="scss" scoped></style>
