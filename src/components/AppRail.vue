<template>
  <FeatherNavigationRail>
    <template v-slot:header>
      <div class="user">
        <FeatherIcon :icon="account" class="user-icon" />
        <div>
          <p class="sub">Signed in as</p>
          <p class="user-name">User name</p>
        </div>
      </div>
    </template>
    <template v-slot:main>
      <FeatherRailItem href="#" :icon="app" title="App One" />
      <FeatherRailItem href="#" :icon="app" title="App Two" />
      <FeatherRailItem href="#" :icon="app" title="App Three" />
    </template>

    <FeatherRailGroup label="Help Navigation">
      <FeatherRailItem href="#" :icon="app" title="Feedback" />
      <FeatherRailItem href="#" :icon="app" title="Sign out" />
    </FeatherRailGroup>
  </FeatherNavigationRail>
</template>
<script lang="ts">
import {
  FeatherNavigationRail,
  FeatherRailItem,
  FeatherRailGroup,
} from "@featherds/navigation-rail";

import App from "@featherds/icon/medical/Hospital";
import Account from "@featherds/icon/action/AccountCircle";
import { FeatherIcon } from "@featherds/icon";
import { defineComponent } from "vue";
export default defineComponent({
  computed: {
    app() {
      return App;
    },
    account() {
      return Account;
    },
  },
  components: {
    FeatherNavigationRail,
    FeatherRailItem,
    FeatherRailGroup,
    FeatherIcon,
  },
});
</script>
<style lang="scss" scoped>
@import "@featherds/styles/mixins/typography";
@import "@featherds/styles/themes/variables";
.user {
  display: flex;
  align-items: center;

  .user-icon {
    height: 2rem;
    width: 2rem;
    color: var($primary);
    margin-right: 1rem;
  }
  .user-name {
    @include subtitle1;
  }
  .sub {
    @include caption;
  }
}
</style>
