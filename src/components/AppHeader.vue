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
<script>
import { FeatherAppBar, FeatherAppBarLink } from "@featherds/app-bar";
import Support from "@featherds/icon/action/Help";
export default {
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
};
</script>
<style lang="scss" scoped>
</style>