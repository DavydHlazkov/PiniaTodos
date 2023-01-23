<script setup>
import { useTodosStore } from "./store/todos";
import { ref } from "vue";
import { storeToRefs } from "pinia";

const todosStore = useTodosStore();
const { filterTodos, filter } = storeToRefs(todosStore);
const { addTodo, toggleToo, toggleFilter } = todosStore;
const newTodo = ref("");

const addNewTodo = (text) => {
  addTodo(text);
  newTodo.value = "";
};
</script>

<template>
  <main>
    <h1>Pinia based todo list</h1>
    <div class="header__menu">
      <button @click="toggleFilter('all')">All</button>
      <button @click="toggleFilter('finished')">Finished</button>
      <button @click="toggleFilter('unfinished')">Unfinished</button>
    </div>
    <input type="text" v-model="newTodo" placeholder="Enter your todos..." />
    <button @click="() => addNewTodo(newTodo)">Add</button>
    <div
      :class="todo.isFinished ? 'todo__container finished' : 'todo__container'"
      v-for="todo in filterTodos"
      style="display: flex"
    >
      <h1>
        {{ todo.text }}
      </h1>
      <button @click="() => toggleToo(todo.id)">
        {{ todo.isFinished ? "Back to unfinished" : "Done" }}
      </button>
    </div>
  </main>
</template>

<style scoped>
main {
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 50px auto;
  align-items: center;
}

.header__menu {
  width: 30%;
  display: flex;
  justify-content: space-between;
}

.header__menu button {
  width: 150px;
  height: 50px;
  /* background-color: #ffd859;
  border: none; */
  border-radius: 20px;
  color: #2c3e50;
  font-size: 15px;
  font-weight: bold;
}

input {
  width: 50%;
  margin-top: 50px;
  height: 50px;
  border: 4px solid #2c3e50;
  color: #2c3e50;
  font-size: 20px;
  padding: 0 20px;
  border-radius: 20px;
}

input:focus-visible {
  border: 4px solid #ffd859;
  outline-width: 0;
}
input::placeholder {
  color: #2c3e50;
}

button {
  width: 200px;
  height: 50px;
  background-color: #fff;
  border: 4px solid #2c3e50;
  border-radius: 20px;
  color: #2c3e50;
  font-size: 15px;
  font-weight: bold;
  margin-top: 50px;
  cursor: pointer;
}

button:hover {
  background-color: #ffd859;
  border: none;
}

.todo__container {
  width: 50%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.todo__container button {
  background-color: #ffd859;
  border: none;
  color: #2c3e50;
}

.todo__container h1 {
  color: #ffd859;
}

.finished h1 {
  text-decoration: line-through;
  color: #2c3e50;
}
.finished button {
  background-color: #fff;
  border: 4px solid #2c3e50;
  border-radius: 20px;
  color: #2c3e50;
}
</style>
