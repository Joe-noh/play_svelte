<script>
  import { createEventDispatcher } from 'svelte'

  export let todos = []

  const dispatch = createEventDispatcher()
</script>

<style>
.done {
  text-decoration: line-through;
}
</style>

<ul>
  {#each todos as todo}
    <li class:done="{ todo.done }">
      { todo.title }
      <button on:click="{ () => dispatch('toggle', todo) }">toggle</button>
      <button on:click="{ () => dispatch('remove', todo) }">remove</button>
    </li>
  {/each}
</ul>
