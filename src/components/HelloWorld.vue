<template>
  <div class="hello">
    <h1>{{ computedMsg }}</h1>
    <button id="btn1" @click="changeMessage('Say Helloo!')">Say hello</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    msg: String
  },
  data() {
    return {
      dataText: this.msg
    };
  },

  computed: {
    computedMsg(): string {
      return `Message: ${this.dataText}`;
    }
  },

  methods: {
    changeMessage(text: string): void {
      this.dataText = text;
    }
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style lang="scss" scoped>
h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
