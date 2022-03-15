<template>
  <div class="hello">
    <h1>{{ computedMsg }}</h1>
    <button id="btn1" @click="changeMessage('Say Helloo!')">Say hello</button>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  props: {
    msg: String
  }
})
export default class HelloWorldClassSyntax extends Vue {
  msg!: string;
  dataText = "";

  get computedMsg(): string {
    return `Message: ${this.dataText}`;
  }

  changeMessage(text: string): void {
    this.dataText = text;
  }

  created() {
    this.dataText = this.msg;
  }
}
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
