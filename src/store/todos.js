import { defineStore } from "pinia";

export const useTodosStore = defineStore("todos", {
  state: () => ({
    todos: [
      { id: 1, text: "Work emails", isFinished: true },
      { id: 2, text: "Grocery shop", isFinished: false },
      { id: 3, text: "Gym", isFinished: false },
      { id: 4, text: "Room cleaning", isFinished: true },
      { id: 5, text: "Cycling", isFinished: false },
    ],
    filter: "all",
  }),
  getters: {
    filterTodos() {
      if (this.filter === "finished") {
        return this.todos.filter((todo) => todo.isFinished);
      } else if (this.filter === "unfinished") {
        return this.todos.filter((todo) => !todo.isFinished);
      } else {
        return this.todos;
      }
    },
  },
  actions: {
    addTodo(text) {
      if (!text) return;
      this.todos.push({
        id: Math.floor(Math.random() * 1000000000),
        text: text,
        isFinished: false,
      });
    },
    toggleToo(id) {
      const index = this.todos.findIndex((todo) => todo.id === id);
      this.todos[index].isFinished = !this.todos[index].isFinished;
    },
    toggleFilter(filter) {
      this.filter = filter;
    },
  },
});
