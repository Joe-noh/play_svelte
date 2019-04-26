import { writable } from 'svelte/store';

function createTodoList() {
  const { subscribe, set, update } = writable([])

  function randomId() {
    return Math.random().toFixed(10)
  }

  return {
    subscribe,
    add(title) {
      update(todos => [...todos, { id: randomId(), title, done: false }])
    },
    remove(id) {
      update(todos => todos.filter(todo => todo.id !== id))
    },
    toggle(id) {
      update(todos => {
        return todos.map(todo => (todo.id === id) ? { ...todo, done: !todo.done } : todo)
      })
    },
    clear() {
      set([])
    }
  }
}

export const todos = createTodoList()
