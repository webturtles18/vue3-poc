import { shallowMount } from "@vue/test-utils";
import HelloWorldClassSyntax from "@/components/HelloWorldClassSyntax.vue";

describe("HelloWorldClassSyntax.vue", () => {
  let wrapper: any;

  beforeEach(() => {
    wrapper = shallowMount(HelloWorldClassSyntax);
  });

  it("renders props.msg when passed", async () => {
    const msg = "new message";

    const button = wrapper.get("#btn1");
    await button.trigger("click");
    const h1 = wrapper.get("h1");
    expect(h1.text()).toMatch("Say Helloo!");
  });
});

