import { shallowMount } from "@vue/test-utils";
import AppRail from "./AppRail.vue";

describe("App Rail", () => {
  it("should render", () => {
    const wrapper = shallowMount(AppRail);
    expect(wrapper.element).toMatchSnapshot();
  });
});
