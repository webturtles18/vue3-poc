import { shallowMount } from "@vue/test-utils";
import HelloWorld from "@/components/HelloWorld.vue";

describe("HelloWorld.vue", () => {
  let wrapper: any;

  beforeEach(() => {
    wrapper = shallowMount(HelloWorld);
  });

  it("renders props.msg when passed", async () => {
    const msg = "new message";

    const button = wrapper.get("#btn1");
    await button.trigger("click");
    const h1 = wrapper.get("h1");
    expect(h1.text()).toMatch("Say Helloo!");
  });
});

