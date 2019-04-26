<script>
  export let todos = []
</script>

<style>
.done {
  text-decoration: line-through;
}
</style>

<ul>
  {#each todos as todo}
    <li class:done="{ todo.done }">{ todo.title }</li>
  {/each}
</ul>
