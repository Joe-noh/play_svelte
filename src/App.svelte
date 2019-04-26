<script>
  import TodoList from './components/TodoList.svelte'
  import { todos } from './stores'

  let title = ''

  function handleSubmit() {
    todos.add(title)
    title = ''
  }

  todos.add('Buy some more milk')
  todos.add('Make great apps')
  todos.add('World peace')
</script>

<TodoList
  todos={$todos}
  on:toggle="{ (e) => todos.toggle(e.detail.id) }"
  on:remove="{ (e) => todos.remove(e.detail.id) }"
/>

<form on:submit|preventDefault="{ handleSubmit }">
  <input bind:value={title}>
  <input type="submit">
</form>

<button on:click="{ () => todos.clear() }">Clear All</button>
