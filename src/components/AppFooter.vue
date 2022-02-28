<template>
  <FeatherFooter :copyright="copyright">
    <template v-slot:contact> Contact information </template>
    <template v-slot:links>
      <FeatherFooterLink href="#termsofuse"> Terms of Use </FeatherFooterLink>
      <FeatherFooterLink href="#termsofuse1">
        Privacy Policy
      </FeatherFooterLink>
      <FeatherFooterLink href="#termsofuse2">
        Notice of Privacy Practices
      </FeatherFooterLink>
      <FeatherFooterLink href="http://google.com" target="_blank">
        Google
      </FeatherFooterLink>
    </template>
  </FeatherFooter>
</template>
<script lang="ts">
import * as components from "@featherds/footer";
import { defineComponent } from "vue";
export default defineComponent({
  data: () => ({
    copyright: "Copyright © ${year} A COMPANY, Inc.  All Rights Reserved. ",
  }),
  components: {
    ...components,
  },
});
</script>
