<template>
  <div>
    <div v-for="item in items" :key="item.id">
      <TodoCard :item="item" @remove="deleteItem" />
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import TodoCard from "@/components/TodoCard.vue";

export default {
  data() {
    return {};
  },
  components: { TodoCard },
  computed: {
    ...mapState("TodoList", ["items"]),
  },
  methods: {
    deleteItem: function(item) {
      console.log("delete Item", item);
      this.deleteTodoItem(item.id)
    },
    ...mapActions("TodoList", ['deleteTodoItem']),
  },
};
</script>

<style lang="scss" scoped></style>
