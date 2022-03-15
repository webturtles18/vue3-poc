<template>
  <div class="card-box" @mouseleave="showbtn = false">
    <div class="card-title" @mouseover="showbtn = true">
      {{ item.text }}
    </div>
    <div class="card-btn">
      <button v-if="showbtn" @click="removeItem(item)">Remove</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showbtn: false,
    };
  },
  props: ["item"],
  emits: ["remove"],
  methods: {
    removeItem: function(item) {
      this.$emit("remove", item);
    },
  },
};
</script>

<style lang="scss" scoped>
.card-box {
  margin-bottom: 5px;
  display: flex;
}
.card-title {
  border: 1px solid #888888;
  border-radius: 3px;
  padding: 10px;
  width: 200px;
  margin-right: 5px;
  overflow: hidden;
}
.card-btn {
}
</style>
