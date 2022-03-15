const todolist = {
  namespaced: true,
  state: () => ({
    items: [
      { id: 1, text: "Todo item 1" },
      { id: 2, text: "Todo item 2" },
      { id: 3, text: "Todo item 3" },
      { id: 4, text: "Todo item 4" }
    ]
  }),
  mutations: {
    setTodoItems(state: { items: any; }, {newitems}: any) {
      console.log("SET: ",newitems);
      state.items = newitems;
    }
  },
  actions: {
    deleteTodoItem({ commit, state }: any, itemid: any) {
      const items = state.items.filter((item: { id: any; }) => {
        return item.id !== itemid;
      });

      console.log("Delete: ",items);
      commit("setTodoItems", items);
    }
  },
  getters: {}
};

export default todolist;
